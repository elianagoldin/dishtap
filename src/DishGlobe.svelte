<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { OrbitControls } from "three/addons/controls/OrbitControls.js";

  import { greatCircleArc, greatCircleMidpoint, latLonToXyz, xyzToLatLon } from "./geo";
  import type { LatLon } from "./geo";
  import { worldCountries } from "./world";

  let {
    guess = null,
    answer = null,
    revealed = false,
    interactive = true,
    autoSpin = false,
    onTap,
  }: {
    guess?: LatLon | null;
    answer?: LatLon | null;
    revealed?: boolean;
    interactive?: boolean;
    autoSpin?: boolean;
    onTap?: (point: LatLon) => void;
  } = $props();

  const INK = 0x050505;
  const VIOLET = 0x7c3aed;

  let wrapper = $state<HTMLDivElement | null>(null);
  let ready = $state(false);

  let renderer: THREE.WebGLRenderer | null = null;
  let scene: THREE.Scene | null = null;
  let camera: THREE.PerspectiveCamera | null = null;
  let controls: OrbitControls | null = null;
  let sphere: THREE.Mesh | null = null;
  let guessPin: THREE.Group | null = null;
  let answerPin: THREE.Group | null = null;
  let arcLine: THREE.Line | null = null;
  let arcVertexCount = 0;
  let arcRevealStart = 0;
  let frame = 0;
  let disposed = false;

  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  let downAt: { x: number; y: number } | null = null;

  // Camera fly-to tween (slerp around the globe, easing the radius too)
  let tween: {
    from: THREE.Vector3;
    to: THREE.Vector3;
    start: number;
    duration: number;
  } | null = null;

  // Classic-globe country palette; adjacency coloring keeps neighbors distinct.
  const OCEAN = "#8fc0e8";
  const ICE = "#eef6fa";
  const PALETTE = [
    "#f2d791", // sand
    "#a9d6a0", // sage
    "#f2ad96", // coral
    "#c9b5e8", // lilac
    "#9edcc0", // mint
    "#f3aec6", // rose
    "#d8d08a", // khaki
    "#f7c489", // apricot
  ];

  // Paint the world once onto an equirectangular canvas: blue ocean, colored
  // countries, ink borders, country-name labels. Standard sphere UVs map it
  // 1:1 with the latLonToXyz convention (u = (lon+180)/360, v pole-down).
  function makeWorldTexture(): THREE.CanvasTexture {
    const W = 4096;
    const H = 2048;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d")!;
    const px = (lon: number, lat: number): [number, number] => [
      ((lon + 180) / 360) * W,
      ((90 - lat) / 180) * H,
    ];

    ctx.fillStyle = OCEAN;
    ctx.fillRect(0, 0, W, H);

    // graticule (ends up ocean-only — land fills paint over it)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.45)";
    ctx.lineWidth = 1.5;
    for (let lon = -150; lon <= 180; lon += 30) {
      const [x] = px(lon, 0);
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
      ctx.stroke();
    }
    for (let lat = -60; lat <= 60; lat += 30) {
      const [, y] = px(0, lat);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
      ctx.stroke();
    }

    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    const countries = worldCountries();
    const labels: Array<{ name: string; lon: number; lat: number; size: number }> = [];

    for (const country of countries) {
      const path = new Path2D();
      let bestRing: [number, number][] = [];
      let bestSpan = -1;
      for (const ring of country.rings) {
        // Unwrap rings that cross the antimeridian (Russia, Fiji, …) so they
        // don't streak across the map, then paint at ±W so both edges of the
        // wrapping texture stay covered.
        let previousLon = ring[0][0];
        let offset = 0;
        const unwrapped = ring.map(([lon, lat], i) => {
          if (i > 0) {
            if (lon - previousLon > 180) offset -= 360;
            else if (lon - previousLon < -180) offset += 360;
          }
          previousLon = lon;
          return [lon + offset, lat] as [number, number];
        });
        const lons = unwrapped.map((p) => p[0]);
        const lats = unwrapped.map((p) => p[1]);
        const span =
          (Math.max(...lons) - Math.min(...lons)) * (Math.max(...lats) - Math.min(...lats));
        if (span > bestSpan) {
          bestSpan = span;
          bestRing = unwrapped;
        }
        const points = unwrapped.map(([lon, lat]) => px(lon, lat));
        for (const shift of [-W, 0, W]) {
          points.forEach(([x, y], i) => {
            if (i === 0) path.moveTo(x + shift, y);
            else path.lineTo(x + shift, y);
          });
          path.closePath();
        }
      }
      const isIce = country.name === "Antarctica" || country.name === "Greenland";
      ctx.fillStyle = isIce ? ICE : PALETTE[country.colorIndex];
      ctx.fill(path, "evenodd");
      ctx.strokeStyle = "rgba(5, 5, 5, 0.4)";
      ctx.lineWidth = 2;
      ctx.stroke(path);

      if (country.name && bestRing.length) {
        // centroid of the largest ring, sized by its angular footprint
        let area = 0;
        let cx = 0;
        let cy = 0;
        for (let i = 0, j = bestRing.length - 1; i < bestRing.length; j = i++) {
          const cross = bestRing[j][0] * bestRing[i][1] - bestRing[i][0] * bestRing[j][1];
          area += cross;
          cx += (bestRing[j][0] + bestRing[i][0]) * cross;
          cy += (bestRing[j][1] + bestRing[i][1]) * cross;
        }
        if (Math.abs(area) > 1e-7) {
          cx /= 3 * area;
          cy /= 3 * area;
          let lon = cx;
          if (lon > 180) lon -= 360;
          if (lon < -180) lon += 360;
          const footprint = Math.sqrt(bestSpan * Math.max(0.15, Math.cos((cy * Math.PI) / 180)));
          labels.push({
            name: country.name,
            lon,
            lat: cy,
            size: Math.min(40, Math.max(11, 8 + footprint * 1.5)),
          });
        }
      }
    }

    // world-atlas clips at 85.6°S — the rest of the way to the pole is Antarctica
    const [, antarcticaY] = px(0, -85.6);
    ctx.fillStyle = ICE;
    ctx.fillRect(0, antarcticaY, W, H - antarcticaY);

    // Country names, biggest last so major labels paint over minor ones. The
    // horizontal texture squeeze near the poles is undone with a 1/cos(lat)
    // stretch so labels keep their aspect on the sphere.
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    for (const label of labels.sort((a, b) => a.size - b.size)) {
      const [x, y] = px(label.lon, label.lat);
      const stretch = Math.min(3, 1 / Math.max(0.2, Math.cos((label.lat * Math.PI) / 180)));
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(stretch, 1);
      ctx.font = `600 ${Math.round(label.size)}px Satoshi, ui-sans-serif, system-ui, sans-serif`;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.78)";
      ctx.lineWidth = Math.max(2, label.size / 6);
      ctx.strokeText(label.name, 0, 0);
      ctx.fillStyle = "rgba(5, 5, 5, 0.8)";
      ctx.fillText(label.name, 0, 0);
      ctx.restore();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.RepeatWrapping; // smooth the ±180° seam
    texture.anisotropy = renderer?.capabilities.getMaxAnisotropy() ?? 1;
    return texture;
  }

  function makePin(color: number): THREE.Group {
    const group = new THREE.Group();
    const material = new THREE.MeshBasicMaterial({ color });
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.0045, 0.0045, 0.055, 12), material);
    stem.position.y = 0.0275;
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.02, 20, 20), material);
    head.position.y = 0.062;
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.014, 0.024, 32),
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.35,
        side: THREE.DoubleSide,
      })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.002;
    group.add(stem, head, ring);
    group.visible = false;
    return group;
  }

  function placePin(pin: THREE.Group, point: LatLon) {
    const [x, y, z] = latLonToXyz(point.lat, point.lon);
    const normal = new THREE.Vector3(x, y, z);
    pin.position.copy(normal);
    pin.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal.clone().normalize());
    pin.visible = true;
  }

  function flyTo(point: LatLon, duration = 900) {
    if (!camera) return;
    const distance = camera.position.length();
    const [x, y, z] = latLonToXyz(point.lat, point.lon, distance);
    tween = {
      from: camera.position.clone(),
      to: new THREE.Vector3(x, y, z),
      start: performance.now(),
      duration,
    };
  }

  // Camera distance at which the globe fills ~90% of the tighter viewport axis
  // (vertical FOV is fixed, so narrow screens need to sit farther back).
  function fittedDistance(aspect: number): number {
    // The wrapper can measure 0x0 on mount (aspect NaN) — fall back to the
    // desktop framing; the ResizeObserver corrects limits once it has a size.
    if (!Number.isFinite(aspect) || aspect <= 0) return 3.1;
    const vHalf = (45 / 2) * (Math.PI / 180);
    const hHalf = Math.atan(Math.tan(vHalf) * aspect);
    return Math.max(3.1, 1.1 / Math.sin(Math.min(vHalf, hHalf)));
  }

  function setup() {
    if (!wrapper) return;
    const width = wrapper.clientWidth;
    const height = wrapper.clientHeight;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    wrapper.appendChild(renderer.domElement);
    renderer.domElement.style.touchAction = "none";

    scene = new THREE.Scene();
    const aspect = height > 0 && width > 0 ? width / height : 1;
    camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    // Start over the Atlantic so most continents are one small spin away.
    const startDistance = fittedDistance(aspect);
    const [cx, cy, cz] = latLonToXyz(24, -30, startDistance);
    camera.position.set(cx, cy, cz);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.55;
    controls.minDistance = 1.4;
    controls.maxDistance = startDistance + 0.4;
    controls.autoRotateSpeed = 0.6;

    // The world itself — countries painted onto the sphere
    sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 96, 96),
      new THREE.MeshBasicMaterial({ map: makeWorldTexture() })
    );
    scene.add(sphere);
    // Repaint once fonts settle so the country labels render in Satoshi (the
    // first paint can beat the webfont load and fall back to system sans).
    document.fonts?.ready.then(() => {
      if (disposed || !sphere) return;
      const material = sphere.material as THREE.MeshBasicMaterial;
      const oldMap = material.map;
      material.map = makeWorldTexture();
      material.needsUpdate = true;
      oldMap?.dispose();
    });

    guessPin = makePin(INK);
    answerPin = makePin(VIOLET);
    scene.add(guessPin, answerPin);

    const canvas = renderer.domElement;
    canvas.addEventListener("pointerdown", (event) => {
      downAt = { x: event.clientX, y: event.clientY };
      if (controls) controls.autoRotate = false;
    });
    canvas.addEventListener("pointerup", (event) => {
      if (!downAt || !interactive || !onTap) return;
      const moved = Math.hypot(event.clientX - downAt.x, event.clientY - downAt.y);
      downAt = null;
      if (moved > 7 || !camera || !sphere || !wrapper) return;
      const rect = canvas.getBoundingClientRect();
      pointerNdc.set(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );
      raycaster.setFromCamera(pointerNdc, camera);
      const hit = raycaster.intersectObject(sphere, false)[0];
      if (!hit) return;
      const p = hit.point;
      onTap(xyzToLatLon(p.x, p.y, p.z));
    });

    const observer = new ResizeObserver(() => {
      if (!renderer || !camera || !wrapper) return;
      const w = wrapper.clientWidth;
      const h = wrapper.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const fitted = fittedDistance(w / h);
      if (controls) controls.maxDistance = fitted + 0.4;
      // The stage grows/shrinks as game phases mount cards around it — push
      // the camera back out if the globe no longer fits the new viewport.
      const length = camera.position.length();
      if (length < fitted) camera.position.multiplyScalar(fitted / length);
    });
    observer.observe(wrapper);

    const animate = () => {
      if (disposed) return;
      frame = requestAnimationFrame(animate);
      if (tween && camera) {
        const t = Math.min(1, (performance.now() - tween.start) / tween.duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const fromDir = tween.from.clone().normalize();
        const toDir = tween.to.clone().normalize();
        const q = new THREE.Quaternion().slerpQuaternions(
          new THREE.Quaternion(),
          new THREE.Quaternion().setFromUnitVectors(fromDir, toDir),
          eased
        );
        const radius = THREE.MathUtils.lerp(tween.from.length(), tween.to.length(), eased);
        camera.position.copy(fromDir.clone().applyQuaternion(q).multiplyScalar(radius));
        if (t >= 1) tween = null;
      }
      if (arcLine && arcRevealStart > 0) {
        const t = Math.min(1, (performance.now() - arcRevealStart) / 1100);
        arcLine.geometry.setDrawRange(0, Math.max(2, Math.floor(arcVertexCount * t)));
        if (t >= 1) arcRevealStart = 0;
      }
      controls?.update();
      if (renderer && scene && camera) renderer.render(scene, camera);
    };
    animate();
    ready = true;
  }

  onMount(() => {
    setup();
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      controls?.dispose();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
      scene?.traverse((object) => {
        if (
          object instanceof THREE.Mesh ||
          object instanceof THREE.Points ||
          object instanceof THREE.Line
        ) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          for (const material of materials) {
            if (material instanceof THREE.MeshBasicMaterial) material.map?.dispose();
            material.dispose();
          }
        }
      });
    };
  });

  // React to prop changes
  $effect(() => {
    if (!ready || !guessPin) return;
    if (guess) placePin(guessPin, guess);
    else guessPin.visible = false;
  });

  $effect(() => {
    if (!ready || !answerPin || !scene) return;
    if (revealed && answer) {
      placePin(answerPin, answer);
      if (guess) {
        if (arcLine) {
          scene.remove(arcLine);
          arcLine.geometry.dispose();
          (arcLine.material as THREE.Material).dispose();
        }
        const points = greatCircleArc(guess, answer).map(([x, y, z]) => new THREE.Vector3(x, y, z));
        arcVertexCount = points.length;
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        geometry.setDrawRange(0, 2);
        arcLine = new THREE.Line(
          geometry,
          new THREE.LineDashedMaterial({
            color: VIOLET,
            dashSize: 0.03,
            gapSize: 0.018,
            transparent: true,
            opacity: 0.9,
          })
        );
        arcLine.computeLineDistances();
        scene.add(arcLine);
        arcRevealStart = performance.now();
        flyTo(greatCircleMidpoint(guess, answer));
      } else {
        flyTo(answer);
      }
    } else {
      answerPin.visible = false;
      if (arcLine) {
        scene.remove(arcLine);
        arcLine.geometry.dispose();
        (arcLine.material as THREE.Material).dispose();
        arcLine = null;
      }
    }
  });

  $effect(() => {
    if (controls) controls.autoRotate = autoSpin;
  });
</script>

<div bind:this={wrapper} class="globe-wrapper"></div>

<style>
  .globe-wrapper {
    position: absolute;
    inset: 0;
    cursor: grab;
  }
  .globe-wrapper:active {
    cursor: grabbing;
  }
</style>

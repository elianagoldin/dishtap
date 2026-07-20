// Minimal TopoJSON decoder for the world-atlas countries file — just enough
// to turn quantized delta-encoded arcs into per-country lon/lat rings, plus a
// greedy map coloring derived from shared-arc adjacency.

type Topology = {
  transform: { scale: [number, number]; translate: [number, number] };
  arcs: [number, number][][];
  objects: {
    countries: {
      geometries: Array<
        | { type: "Polygon"; arcs: number[][]; properties?: { name?: string } }
        | { type: "MultiPolygon"; arcs: number[][][]; properties?: { name?: string } }
      >;
    };
  };
};

export type CountryShape = {
  name: string;
  /** Outer rings + holes, as [lon, lat] point lists. */
  rings: [number, number][][];
  /** Palette slot from greedy coloring — neighbors get different slots. */
  colorIndex: number;
};

export function decodeCountries(topologyRaw: unknown, paletteSize: number): CountryShape[] {
  const topology = topologyRaw as Topology;
  const { scale, translate } = topology.transform;

  const arcs: [number, number][][] = topology.arcs.map((arc) => {
    let x = 0;
    let y = 0;
    return arc.map(([dx, dy]) => {
      x += dx;
      y += dy;
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]] as [number, number];
    });
  });

  function ring(arcRefs: number[], usedArcs: Set<number>): [number, number][] {
    const points: [number, number][] = [];
    for (const ref of arcRefs) {
      const index = ref >= 0 ? ref : ~ref;
      usedArcs.add(index);
      const arc = ref >= 0 ? arcs[index] : arcs[index].slice().reverse();
      // consecutive arcs share their join point — skip the duplicate
      for (let i = points.length ? 1 : 0; i < arc.length; i++) points.push(arc[i]);
    }
    return points;
  }

  const geometries = topology.objects.countries.geometries;
  const arcUsage: number[][] = []; // arc index -> country indices
  const decoded = geometries.map((geometry, countryIndex) => {
    const usedArcs = new Set<number>();
    const polygons = geometry.type === "Polygon" ? [geometry.arcs] : geometry.arcs;
    const rings = polygons.flatMap((polygon) => polygon.map((refs) => ring(refs, usedArcs)));
    for (const arcIndex of usedArcs) (arcUsage[arcIndex] ??= []).push(countryIndex);
    return { name: geometry.properties?.name ?? "", rings };
  });

  // Countries sharing an arc are neighbors; greedy-color highest-degree first
  // so adjacent countries land on different palette slots.
  const neighbors: Set<number>[] = decoded.map(() => new Set());
  for (const sharers of arcUsage) {
    if (!sharers || sharers.length < 2) continue;
    for (const a of sharers) for (const b of sharers) if (a !== b) neighbors[a].add(b);
  }
  const colorIndexes = new Array<number>(decoded.length).fill(-1);
  const order = decoded.map((_, i) => i).sort((a, b) => neighbors[b].size - neighbors[a].size);
  for (const countryIndex of order) {
    const taken = new Set<number>();
    for (const n of neighbors[countryIndex]) {
      if (colorIndexes[n] !== -1) taken.add(colorIndexes[n]);
    }
    let slot = countryIndex % paletteSize;
    for (let c = 0; c < paletteSize; c++) {
      if (!taken.has((countryIndex + c) % paletteSize)) {
        slot = (countryIndex + c) % paletteSize;
        break;
      }
    }
    colorIndexes[countryIndex] = slot;
  }

  return decoded.map((country, i) => ({ ...country, colorIndex: colorIndexes[i] }));
}

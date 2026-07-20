// Pure geo math for DishTap — no dependencies.

export type LatLon = { lat: number; lon: number };

const DEG = Math.PI / 180;
const EARTH_RADIUS_KM = 6371;

/** Great-circle distance in km (haversine). */
export function distanceKm(a: LatLon, b: LatLon): number {
  const dLat = (b.lat - a.lat) * DEG;
  const dLon = (b.lon - a.lon) * DEG;
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(a.lat * DEG) * Math.cos(b.lat * DEG) * Math.sin(dLon / 2) ** 2;
  return 2 * EARTH_RADIUS_KM * Math.asin(Math.min(1, Math.sqrt(h)));
}

export const MAX_ROUND_SCORE = 1000;

/**
 * GeoGuessr-style falloff: anything within 100km is a bullseye, then points
 * decay exponentially so same-country guesses still feel rewarding.
 */
export function scoreForDistance(km: number): number {
  if (km <= 100) return MAX_ROUND_SCORE;
  return Math.round(MAX_ROUND_SCORE * Math.exp(-(km - 100) / 2000));
}

/** Convert lat/lon to a unit-sphere XYZ in the three.js globe convention. */
export function latLonToXyz(lat: number, lon: number, radius = 1): [number, number, number] {
  const phi = (90 - lat) * DEG;
  const theta = (lon + 180) * DEG;
  return [
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

/** Inverse of latLonToXyz for a point on (or near) the unit sphere. */
export function xyzToLatLon(x: number, y: number, z: number): LatLon {
  const r = Math.sqrt(x * x + y * y + z * z);
  const lat = 90 - Math.acos(y / r) / DEG;
  let lon = Math.atan2(z, -x) / DEG - 180;
  if (lon < -180) lon += 360;
  return { lat, lon };
}

/**
 * Points along the great circle from a to b (slerp), lifted above the sphere
 * with a sine bump so the reveal arc clears the surface.
 */
export function greatCircleArc(a: LatLon, b: LatLon, segments = 96): [number, number, number][] {
  const va = latLonToXyz(a.lat, a.lon);
  const vb = latLonToXyz(b.lat, b.lon);
  const dot = Math.min(1, Math.max(-1, va[0] * vb[0] + va[1] * vb[1] + va[2] * vb[2]));
  const omega = Math.acos(dot);
  const lift = 0.04 + 0.14 * Math.min(1, omega / Math.PI);
  const points: [number, number, number][] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    let wa: number;
    let wb: number;
    if (omega < 1e-6) {
      wa = 1 - t;
      wb = t;
    } else {
      wa = Math.sin((1 - t) * omega) / Math.sin(omega);
      wb = Math.sin(t * omega) / Math.sin(omega);
    }
    const x = wa * va[0] + wb * vb[0];
    const y = wa * va[1] + wb * vb[1];
    const z = wa * va[2] + wb * vb[2];
    const len = Math.sqrt(x * x + y * y + z * z) || 1;
    const r = 1 + Math.sin(t * Math.PI) * lift;
    points.push([(x / len) * r, (y / len) * r, (z / len) * r]);
  }
  return points;
}

/** Midpoint of the great circle between a and b, as lat/lon. */
export function greatCircleMidpoint(a: LatLon, b: LatLon): LatLon {
  const arc = greatCircleArc(a, b, 2);
  const [x, y, z] = arc[1];
  return xyzToLatLon(x, y, z);
}

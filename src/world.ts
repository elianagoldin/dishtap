// Shared, lazily-decoded world geometry: one decode feeds both the globe
// texture (fills/labels) and tap scoring (which country was tapped).
import worldTopologyRaw from "./world-countries-110m.json";

import { decodeCountries, type CountryShape } from "./topojson";

/** Palette slots available to the globe texture — keep in sync with DishGlobe. */
export const WORLD_PALETTE_SIZE = 8;

let cache: CountryShape[] | null = null;

export function worldCountries(): CountryShape[] {
  return (cache ??= decodeCountries(worldTopologyRaw, WORLD_PALETTE_SIZE));
}

type PreparedRing = {
  points: [number, number][];
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
};

let prepared: { name: string; rings: PreparedRing[] }[] | null = null;

function prepare(): NonNullable<typeof prepared> {
  if (prepared) return prepared;
  prepared = worldCountries().map((country) => ({
    name: country.name,
    rings: country.rings.map((ring) => {
      // unwrap antimeridian-crossing rings so bbox + crossing tests are sane
      let previousLon = ring[0][0];
      let offset = 0;
      const points = ring.map(([lon, lat], i) => {
        if (i > 0) {
          if (lon - previousLon > 180) offset -= 360;
          else if (lon - previousLon < -180) offset += 360;
        }
        previousLon = lon;
        return [lon + offset, lat] as [number, number];
      });
      const lons = points.map((p) => p[0]);
      const lats = points.map((p) => p[1]);
      return {
        points,
        minLon: Math.min(...lons),
        maxLon: Math.max(...lons),
        minLat: Math.min(...lats),
        maxLat: Math.max(...lats),
      };
    }),
  }));
  return prepared;
}

function ringContains(ring: PreparedRing, lon: number, lat: number): boolean {
  if (lat < ring.minLat || lat > ring.maxLat) return false;
  let inside = false;
  for (const candidate of [lon, lon + 360, lon - 360]) {
    if (candidate < ring.minLon || candidate > ring.maxLon) continue;
    for (let i = 0, j = ring.points.length - 1; i < ring.points.length; j = i++) {
      const [xi, yi] = ring.points[i];
      const [xj, yj] = ring.points[j];
      if (yi > lat !== yj > lat && candidate < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
        inside = !inside;
      }
    }
    break; // a point can only fall in one unwrapped copy of the ring
  }
  return inside;
}

/** Name of the country containing the point, or null for ocean / no match. */
export function countryNameAt(lat: number, lon: number): string | null {
  for (const country of prepare()) {
    // even-odd across all rings so holes (e.g. Lesotho) punch out correctly
    let crossings = 0;
    for (const ring of country.rings) {
      if (ringContains(ring, lon, lat)) crossings++;
    }
    if (crossings % 2 === 1) return country.name;
  }
  return null;
}

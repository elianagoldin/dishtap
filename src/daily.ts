// Daily-puzzle mechanics: everyone gets the same 5 dishes per calendar day, and a
// finished game is remembered locally so each day can only be played once.
import { DISHES, type Dish } from "./dishes";

/**
 * Day #1 of DishTap. Like Wordle, the puzzle follows the player's LOCAL
 * calendar date — everyone sharing a date shares the five dishes, and the
 * next puzzle unlocks at each player's own midnight.
 */
const EPOCH_LOCAL = new Date(2026, 6, 21).getTime(); // 2026-07-21, local midnight
const DAY_MS = 86_400_000;
export const ROUNDS_PER_GAME = 5;

export function todayNumber(): number {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  // round (not floor) so DST's 23/25-hour days still land on whole day counts
  return Math.max(1, Math.round((startOfToday - EPOCH_LOCAL) / DAY_MS) + 1);
}

/** ms until the next LOCAL midnight (when the next puzzle unlocks). */
export function msUntilTomorrow(): number {
  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1).getTime();
  return Math.max(0, nextMidnight - now.getTime());
}

// mulberry32 — tiny deterministic PRNG so every player shuffles identically
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(list: T[], seed: number): T[] {
  const rand = mulberry32(seed);
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * The 5 dishes for a given day. Days walk through a seeded permutation of the
 * whole pool in blocks of 5, so no dish repeats until every dish has appeared;
 * each full pass ("cycle") reshuffles with a new seed.
 */
export function dishesForDay(day: number): Dish[] {
  const blocksPerCycle = Math.floor(DISHES.length / ROUNDS_PER_GAME);
  const cycle = Math.floor((day - 1) / blocksPerCycle);
  const block = (day - 1) % blocksPerCycle;
  const permutation = seededShuffle(DISHES, 0xd1541 + cycle * 7919);
  return permutation.slice(block * ROUNDS_PER_GAME, block * ROUNDS_PER_GAME + ROUNDS_PER_GAME);
}

/** Random dishes for practice mode (not the daily, not saved). */
export function practiceDishes(): Dish[] {
  return seededShuffle(DISHES, Math.floor(Math.random() * 2 ** 31)).slice(0, ROUNDS_PER_GAME);
}

export type SavedRound = { id: string; distance: number; points: number };
export type SavedGame = { day: number; rounds: SavedRound[]; total: number };

const STORAGE_KEY = "dishtap-daily-v1";

export function loadSavedGame(): SavedGame | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedGame;
    return parsed && parsed.day === todayNumber() && Array.isArray(parsed.rounds) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveGame(game: SavedGame): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(game));
  } catch {
    // storage unavailable (private mode) — the game just becomes replayable
  }
}

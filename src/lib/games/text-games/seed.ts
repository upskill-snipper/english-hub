/**
 * Deterministic shuffling for the text games.
 *
 * Every shuffle is seeded from fixed inputs (the text, the round, the play
 * number), never Math.random(), so that:
 *
 * - the server and the browser deal the same questions in the same order, and
 *   a hydrated page never re-deals what the reader is already looking at;
 * - the tests are stable: a path built today is the path built tomorrow;
 * - a second play of a round still deals differently, because the play number
 *   is one of the inputs.
 */

/** A 32-bit FNV-1a hash of the parts, joined with a separator no part contains. */
export function hashSeed(...parts: (string | number)[]): number {
  const s = parts.join('␟')
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

/** mulberry32: a small, fast generator with a good spread, from a 32-bit seed. */
export function rng(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** A seeded Fisher-Yates shuffle. Returns a new array; the input is untouched. */
export function seededShuffle<T>(items: readonly T[], seed: number): T[] {
  const out = items.slice()
  const next = rng(seed)
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(next() * (i + 1))
    const tmp = out[i]
    out[i] = out[j]
    out[j] = tmp
  }
  return out
}

/** `n` items picked without replacement, in the order the shuffle dealt them. */
export function seededPick<T>(items: readonly T[], n: number, seed: number): T[] {
  return seededShuffle(items, seed).slice(0, Math.max(0, n))
}

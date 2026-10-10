/**
 * Deal a round: which of its items this play asks, in what order, and in what
 * order each question's options are shown. Pure and seeded (see seed.ts), so
 * the browser deals exactly what the server would, and a test can repeat a
 * deal and get the same one.
 *
 * Shared by the runner and the tests, and free of anything server-only, so it
 * is safe in a 'use client' module.
 */

import { hashSeed, seededPick, seededShuffle } from './seed'
import type { GameItem, Round, RoundKind } from './types'

/**
 * How many items one play of a round asks. Six questions is a short round;
 * three story-order puzzles of four or five moments each is about the same
 * amount of reading.
 */
export const ROUND_SIZE: Record<RoundKind, number> = {
  who: 6,
  order: 3,
  where: 6,
  finish: 6,
  method: 6,
  theme: 6,
}

/** One question as it is put to the student. */
export interface Dealt {
  item: GameItem
  /** A choice question's options, in the order shown. */
  options: string[]
  /** A story-order puzzle's moments, as positions in `item.moments`, in the order dealt. */
  deck: number[]
}

/** Shuffle one item's options, or a puzzle's cards, so that it is never dealt already solved. */
export function dealItem(item: GameItem, seed: number): Dealt {
  if (item.kind === 'order') {
    let deck = seededShuffle(
      item.moments.map((_, i) => i),
      seed,
    )
    if (deck.every((v, i) => v === i)) deck = [...deck.slice(1), deck[0]]
    return { item, options: [], deck }
  }
  return { item, options: seededShuffle(item.options, seed), deck: [] }
}

/**
 * The questions for one play of a round. `play` is how many times the student
 * has started this round before (0 the first time), so a replay deals afresh.
 */
export function dealRound(slug: string, round: Round, play: number): Dealt[] {
  const seed = hashSeed(slug, round.kind, play)
  return seededPick(round.items, ROUND_SIZE[round.kind], seed).map((item, i) =>
    dealItem(item, hashSeed(seed, i)),
  )
}

/** The questions a student got wrong, asked again in the order they met them, options reshuffled. */
export function dealReview(slug: string, items: GameItem[], play: number): Dealt[] {
  return items.map((item, i) => dealItem(item, hashSeed(slug, 'review', play, item.id, i)))
}

/** Is a story-order answer right: every moment in its place? */
export function orderIsRight(placed: number[], count: number): boolean {
  return placed.length === count && placed.every((v, i) => v === i)
}

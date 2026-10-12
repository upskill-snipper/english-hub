/**
 * Deal one play of a quest level: which challenges it asks, in what order,
 * and in what order each one's options, tiles or cards are shown.
 *
 * Pure and seeded (src/lib/games/text-games/seed.ts), so a test can repeat a
 * deal and a replay of a level deals afresh. Safe in a 'use client' module.
 *
 * VARIETY. A level holds many challenges of a few kinds. Dealing them by a
 * plain shuffle could ask five yes-or-no theme cards in a row, which is dull
 * and teaches little. So the deal takes one from each kind in turn, from a
 * shuffle of each kind, with a ceiling on the quick kinds, and a chapter
 * always opens by putting its moments in order: the student meets the
 * chapter's story before the questions about it.
 */

import { shuffleOptionsDeterministic } from '@/lib/quiz/shuffle'
import { hashSeed, seededShuffle } from '@/lib/games/text-games/seed'

import type { Challenge, Level, LevelKind, Quest } from './types'

/** Challenges in one play of a level. */
export const PLAY_SIZE: Record<LevelKind | 'review', number> = {
  chapter: 8,
  cast: 8,
  craft: 6,
  finale: 10,
  review: 10,
}

/** The most of one quick kind in a single play. */
const CEILING: Partial<Record<string, number>> = { 'theme-check': 2, rebuild: 2, marker: 2 }

/** One challenge as it is put to the student. */
export interface DealtChallenge {
  challenge: Challenge
  /** A choice's options, in the order shown (values, not positions). */
  options: string[]
  /** A story order's cards, or a rebuild's tiles: positions in the source, in the order dealt. */
  deck: number[]
}

/** The family a challenge belongs to, for the variety rule. */
export function familyOf(c: Challenge): string {
  return c.type === 'item' ? `item-${c.item.kind}` : c.type
}

/** Never deal a deck already in order. */
function shuffledDeck(n: number, seed: number): number[] {
  let deck = seededShuffle(
    Array.from({ length: n }, (_, i) => i),
    seed,
  )
  if (n > 1 && deck.every((v, i) => v === i)) deck = [...deck.slice(1), deck[0]]
  return deck
}

export function dealChallenge(c: Challenge, seed: number): DealtChallenge {
  if (c.type === 'item' && c.item.kind === 'order') {
    return { challenge: c, options: [], deck: shuffledDeck(c.item.moments.length, seed) }
  }
  if (c.type === 'rebuild') {
    return { challenge: c, options: [], deck: shuffledDeck(c.words.length, seed) }
  }
  if (
    c.type === 'item' ||
    c.type === 'panel-line' ||
    c.type === 'line-panel' ||
    c.type === 'whose'
  ) {
    const options = c.type === 'item' ? (c.item as { options: string[] }).options : c.options
    // The site's one option shuffle, so the answer is never always in one place.
    return { challenge: c, options: shuffleOptionsDeterministic(options, String(seed)), deck: [] }
  }
  return { challenge: c, options: [], deck: [] }
}

/**
 * Pick up to `size` from `pool`, one family at a time, a chapter's story order
 * first. `ceiling` limits the quick kinds in a play; a level's stored pool is
 * chosen with none. When the ceilings leave a play short, it is topped up from
 * what is left, so a level with little variety still deals a full play.
 */
export function pickVaried(
  pool: Challenge[],
  size: number,
  seed: number,
  ceiling: Partial<Record<string, number>> = CEILING,
): Challenge[] {
  const opening = pool.filter((c) => c.id.startsWith('item:order:chapter'))
  const rest = pool.filter((c) => !c.id.startsWith('item:order:chapter'))
  const families = new Map<string, Challenge[]>()
  for (const c of seededShuffle(rest, seed)) {
    const f = familyOf(c)
    if (!families.has(f)) families.set(f, [])
    families.get(f)!.push(c)
  }
  const order = seededShuffle([...families.keys()], hashSeed(seed, 'families'))
  const taken = new Map<string, number>()
  const out: Challenge[] = opening.slice(0, 1)
  let progress = true
  while (out.length < size && progress) {
    progress = false
    for (const f of order) {
      if (out.length >= size) break
      const list = families.get(f)!
      const n = taken.get(f) ?? 0
      if (n >= list.length || n >= (ceiling[f] ?? Infinity)) continue
      out.push(list[n])
      taken.set(f, n + 1)
      progress = true
    }
  }
  if (out.length < size) {
    const chosen = new Set(out)
    for (const c of seededShuffle(rest, hashSeed(seed, 'top-up'))) {
      if (out.length >= size) break
      if (!chosen.has(c)) out.push(c)
    }
  }
  return out
}

/** Every challenge in the quest, by id. */
export function challengeIndex(quest: Quest): Map<string, Challenge> {
  return new Map(quest.challenges.map((c) => [c.id, c]))
}

/** A level's pool, as challenges. */
export function levelChallenges(quest: Quest, level: Level): Challenge[] {
  const index = challengeIndex(quest)
  return level.pool.map((id) => index.get(id)).filter((c): c is Challenge => c !== undefined)
}

/** One play of a level. `play` counts earlier plays, so a replay deals afresh. */
export function dealLevel(quest: Quest, level: Level, play: number): DealtChallenge[] {
  const seed = hashSeed(quest.slug, level.id, play)
  return pickVaried(levelChallenges(quest, level), PLAY_SIZE[level.kind], seed).map((c, i) =>
    dealChallenge(c, hashSeed(seed, i, c.id)),
  )
}

/** A review: the challenges named, in the order given, up to the review size. */
export function dealReview(quest: Quest, ids: string[], play: number): DealtChallenge[] {
  const index = challengeIndex(quest)
  return ids
    .map((id) => index.get(id))
    .filter((c): c is Challenge => c !== undefined)
    .slice(0, PLAY_SIZE.review)
    .map((c, i) => dealChallenge(c, hashSeed(quest.slug, 'review', play, i, c.id)))
}

/** The correct answer of a dealt choice, for marking and for the feedback. */
export function answerOf(c: Challenge): string | number | boolean | number[] | null {
  switch (c.type) {
    case 'item':
      return c.item.kind === 'order' ? c.item.moments.map((_, i) => i) : c.item.answer
    case 'panel-line':
    case 'line-panel':
    case 'whose':
      return c.answer
    case 'marker':
      return c.answer
    case 'theme-check':
      return c.answer
    case 'rebuild':
      return c.words.map((_, i) => i)
  }
}

/** Is a placed order (story or words) right: the words or moments read as the source does? */
export function placedIsRight(c: Challenge, placed: number[]): boolean {
  if (c.type === 'rebuild') {
    // Two copies of one word may sit either way round: compare what they say.
    return placed.map((i) => c.words[i]).join(' ') === c.words.join(' ')
  }
  if (c.type === 'item' && c.item.kind === 'order') {
    return placed.length === c.item.moments.length && placed.every((v, i) => v === i)
  }
  return false
}

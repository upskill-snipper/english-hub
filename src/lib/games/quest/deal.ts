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
 *
 * ONE SUBJECT ONCE A PLAY, AND NEW CHALLENGES FIRST (24 October 2026). The
 * founder: "questions repetitive with the answer in the previous". Measured
 * that day over all 107 quests (.tmp-games-audit, 3,115 plays): 92 per cent
 * of a part's plays held a challenge an earlier one had settled, and 74 per
 * cent asked about one quotation twice. A Christmas Carol rebuilt "I am about
 * to raise your salary" under Stave V, then asked where it came from, then
 * asked for "salary"; Macbeth placed "O valiant cousin" in Act 1, Scene 2 and
 * then showed the panel labelled Act 1, Scene 2. Half of a second play was the
 * first play again, and leaving a level and starting it again dealt the very
 * same play. So a play now:
 *
 *   - holds no two challenges that share a subject (challengeFacts below: the
 *     quotation, the moment a challenge places or shows, the person, the
 *     moment whose themes it lists), while the level allows;
 *   - takes, within each kind, the challenges this browser has not been dealt
 *     before, then those dealt longest ago (`seen`, kept per level by
 *     recordDeal in ./progress.ts);
 *   - and is counted when it is dealt, not when it is finished, so a level
 *     left and started again deals afresh.
 */

import { shuffleOptionsDeterministic } from '@/lib/quiz/shuffle'
import { hashSeed, seededShuffle } from '@/lib/games/text-games/seed'
import { normForMatch } from '@/lib/games/text-games/text'

import type { Challenge, Level, LevelKind, Quest } from './types'

/** Challenges in one play of a level. */
export const PLAY_SIZE: Record<LevelKind | 'review', number> = {
  chapter: 8,
  cast: 8,
  craft: 6,
  finale: 10,
  review: 10,
}

/**
 * The most of one quick kind in a single play. Theme questions joined them on
 * 24 October 2026: 30 per cent of all challenges were theme labels, and a play
 * of Oranges Are Not the Only Fruit's Part 4 was one story order and eight
 * yes-or-no theme checks.
 */
const CEILING: Partial<Record<string, number>> = {
  'theme-check': 2,
  rebuild: 2,
  marker: 2,
  'item-theme': 2,
  // The longest to read; two a play keeps a part from becoming a reading test.
  evidence: 2,
}

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

const quote = (text: string) => `quote:${normForMatch(text)}`
const at = (index: number) => `moment:${index}`
const person = (name: string) => `person:${normForMatch(name)}`

/**
 * What a challenge is about, as far as giving another away goes: no two
 * challenges in one play share one, while the level allows.
 *
 *   - a quotation it asks about or prints whole (a line to place, finish or
 *     rebuild, a panel's line);
 *   - the moment it places a line in, or shows the panel of, or prints the
 *     whereabouts of (a rebuild prints its line's place; "where is this
 *     from?" asks it);
 *   - the person it asks about or names;
 *   - the moment whose themes its feedback lists (a theme question lists them
 *     all, which answers a yes-or-no theme check on that moment).
 *
 * A story order is about its moments' order only: it shares nothing, so the
 * chapter can open with it.
 */
export function challengeFacts(c: Challenge): string[] {
  switch (c.type) {
    case 'item': {
      const it = c.item
      switch (it.kind) {
        case 'where':
        case 'finish':
          return [quote(it.quote), ...(it.moment ? [at(it.moment.index)] : [])]
        case 'who':
          return it.mode === 'role' ? [person(it.answer)] : [person(it.from), person(it.to)]
        case 'method':
          return [quote(it.example)]
        case 'theme':
          return [`themes:${it.moment.index}`]
        case 'order':
          return []
      }
      return []
    }
    case 'panel-line':
      return [quote(c.answer), at(c.moment.index)]
    case 'line-panel':
      return [quote(c.quote), at(c.moment.index)]
    case 'rebuild':
      return [quote(c.quote), ...(c.moment ? [at(c.moment.index)] : [])]
    case 'whose':
      return [`phrase:${normForMatch(c.phrase)}`, person(c.answer)]
    case 'marker':
      return [`phrase:${normForMatch(c.phrase)}`, person(c.portrait)]
    case 'theme-check':
      return [`themes:${c.moment.index}`]
    case 'evidence':
      // Every quotation it prints: a wrong option shown whole gives away a
      // later "finish" or "rebuild" on that line.
      return c.options.map(quote)
  }
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
    c.type === 'whose' ||
    c.type === 'evidence'
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
 *
 * With `facts`, no two challenges sharing one are dealt while the pool has
 * another to give; with `seen` (ids newest first), each family deals what has
 * never been dealt first, then what was dealt longest ago, and the story order
 * opening a chapter is the one dealt longest ago. Without either, the pick is
 * as it always was, which is how a level's stored pool is chosen.
 */
export function pickVaried(
  pool: Challenge[],
  size: number,
  seed: number,
  ceiling: Partial<Record<string, number>> = CEILING,
  options: {
    facts?: (c: Challenge) => readonly string[]
    seen?: readonly string[]
    /** Open on a story order, as a part does. Default true. */
    opening?: boolean
  } = {},
): Challenge[] {
  const rank = new Map<string, number>()
  ;(options.seen ?? []).forEach((id, i) => {
    if (!rank.has(id)) rank.set(id, i)
  })
  // Never dealt first (in the shuffle's order), then the longest ago.
  const freshFirst = (list: Challenge[]) =>
    rank.size
      ? [
          ...list.filter((c) => !rank.has(c.id)),
          ...list
            .filter((c) => rank.has(c.id))
            .sort((a, b) => (rank.get(b.id) ?? 0) - (rank.get(a.id) ?? 0)),
        ]
      : list
  const opens = options.opening ?? true
  const isOpening = (c: Challenge) => opens && c.id.startsWith('item:order:chapter')
  const openings = pool.filter(isOpening)
  // Without history the first story order, as always; with it, the one dealt
  // longest ago, so a part does not open on the same cards every time.
  const opening = rank.size
    ? freshFirst(seededShuffle(openings, hashSeed(seed, 'opening')))
    : openings
  const rest = pool.filter((c) => !isOpening(c))
  const families = new Map<string, Challenge[]>()
  for (const c of seededShuffle(rest, seed)) {
    const f = familyOf(c)
    if (!families.has(f)) families.set(f, [])
    families.get(f)!.push(c)
  }
  for (const [f, list] of families) families.set(f, freshFirst(list))
  const order = seededShuffle([...families.keys()], hashSeed(seed, 'families'))

  const used = new Set<string>()
  const factsOf = (c: Challenge) => (options.facts ? options.facts(c) : [])
  const clashes = (c: Challenge) => factsOf(c).some((f) => used.has(f))
  const chosen = new Set<Challenge>()
  const out: Challenge[] = []
  const take = (c: Challenge) => {
    out.push(c)
    chosen.add(c)
    for (const f of factsOf(c)) used.add(f)
  }
  if (opening.length && size > 0) take(opening[0])

  const taken = new Map<string, number>()
  // One of each kind in turn: first only what has never been dealt, so a kind
  // with nothing new left does not take a turn from one that has; then
  // anything.
  for (const unseenOnly of rank.size ? [true, false] : [false]) {
    let progress = true
    while (out.length < size && progress) {
      progress = false
      for (const f of order) {
        if (out.length >= size) break
        const n = taken.get(f) ?? 0
        if (n >= (ceiling[f] ?? Infinity)) continue
        const next = families
          .get(f)!
          .find((c) => !chosen.has(c) && !clashes(c) && (!unseenOnly || !rank.has(c.id)))
        if (!next) continue
        take(next)
        taken.set(f, n + 1)
        progress = true
      }
    }
  }
  if (out.length < size) {
    // What is left: first what shares nothing (past the ceilings), then
    // anything, so a small level still deals a full play.
    const left = freshFirst(seededShuffle(rest, hashSeed(seed, 'top-up')))
    for (const c of left) {
      if (out.length >= size) break
      if (!chosen.has(c) && !clashes(c)) take(c)
    }
    for (const c of left) {
      if (out.length >= size) break
      if (!chosen.has(c)) take(c)
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

/**
 * One play of a level. `play` counts earlier plays dealt, so a replay deals
 * afresh; `seen` is the challenges this browser was dealt in the level's
 * earlier plays, newest first (./progress.ts, recordDeal).
 */
export function dealLevel(
  quest: Quest,
  level: Level,
  play: number,
  seen: readonly string[] = [],
): DealtChallenge[] {
  const seed = hashSeed(quest.slug, level.id, play)
  return pickVaried(levelChallenges(quest, level), PLAY_SIZE[level.kind], seed, CEILING, {
    facts: challengeFacts,
    seen,
    // A part opens on its story; the final level, whose pool holds every
    // part's story order, does not open on one already played.
    opening: level.kind === 'chapter',
  }).map((c, i) => dealChallenge(c, hashSeed(seed, i, c.id)))
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
    case 'evidence':
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

'use client'

import { useCallback, useEffect } from 'react'

import { dealRound } from './deal-round'
import { loadExplanations } from './explanations/load'
import type { GameBank, GameExplanations } from './explanations/types'
import { findGiveAways, type GiveAways } from './give-aways'
import {
  beginRound,
  currentRound,
  dueKeys,
  rememberDealt,
  rememberSeen,
  seenKeys,
} from './round-history'

/**
 * Deal a round of a skills game: what every skills game page calls where it
 * used to call `shuffle(BANK).slice(0, n)` (24 October 2026;
 * ./deal-round.ts says why).
 *
 *   const deal = useDealer(BANK)
 *   ...
 *   setQuestions(deal(ROUND_SIZE))
 *
 * useDealer starts loading the game's explanations when the page opens (the
 * page needs them anyway, for the first answer), so that by the time Start is
 * pressed the dealer can see which questions give others away. The deal
 * itself is synchronous, as the pages' start handlers always were: GameShell
 * calls them and starts the round at once. A round dealt before the
 * explanations arrive (a press within moments of the page opening, or a
 * failed load) is dealt without the give-away rule, never held up.
 *
 * Each deal is remembered (./round-history.ts): the next round deals what
 * this browser has not met, and brings back what it missed.
 */

const resolved = new Map<string, GameExplanations | null>()
const found = new Map<string, { items: readonly unknown[]; withText: boolean; g: GiveAways }>()

/** Start loading a game's explanations for the dealer. Never throws. */
export function preloadExplanations(slug: string): Promise<void> {
  return loadExplanations(slug).then((e) => {
    resolved.set(slug, e)
  })
}

function giveAwaysFor<T>(bank: GameBank<T>, explanations: GameExplanations | null): GiveAways {
  const hit = found.get(bank.slug)
  if (hit && hit.items === bank.items && hit.withText === !!explanations) return hit.g
  const g = findGiveAways(bank, explanations)
  found.set(bank.slug, { items: bank.items, withText: !!explanations, g })
  return g
}

export interface RoundOptions<T> {
  /** Deal from these rather than the whole bank (a board's texts, a question type). */
  items?: readonly T[]
  /** At most this many of one group (the bank's `group`, else its `tag`). Default 2. */
  groupMax?: number
  /** A fixed mix the page has always dealt (./deal-round.ts). */
  quota?: { of: (item: T) => string; counts: Readonly<Record<string, number>> }
  /** The game's explanations, where the caller has them; else whatever has loaded. */
  explanations?: GameExplanations | null
  /** For tests: the dealer's random source. */
  random?: () => number
}

/** Deal the next round of `bank`, `size` questions, and remember it. */
export function dealNow<T>(bank: GameBank<T>, size: number, options: RoundOptions<T> = {}): T[] {
  const explanations = options.explanations ?? resolved.get(bank.slug) ?? null
  const g = giveAwaysFor(bank, explanations)
  const key = (item: T) => bank.key(item)
  const round = dealRound(options.items ?? bank.items, {
    size,
    key,
    seen: seenKeys(bank.slug),
    due: dueKeys(bank.slug),
    tier: bank.tier ? (item) => bank.tier!(item) : undefined,
    facts: (item) => [...(bank.facts?.(item) ?? []), ...(g.facts.get(key(item)) ?? [])],
    reveals: (item) => g.reveals.get(key(item)),
    group: (item) => (bank.group ? bank.group(item) : bank.tag?.(item)),
    groupMax: options.groupMax,
    quota: options.quota,
    random: options.random,
  })
  rememberDealt(bank.slug, round.map(key))
  return round
}

/**
 * For a game asked in sets (a passage and its questions): deal `count` sets,
 * those with questions this browser has not met first, then those met
 * longest ago, a set holding a missed question that is due before either.
 * Every question in the sets dealt is remembered.
 */
export function dealSetsNow<S, T>(
  bank: GameBank<T>,
  sets: readonly S[],
  count: number,
  set: { key: (s: S) => string; items: (s: S) => readonly T[] },
  options: { random?: () => number } = {},
): S[] {
  const rank = new Map<string, number>()
  seenKeys(bank.slug).forEach((k, i) => {
    if (!rank.has(k)) rank.set(k, i)
  })
  const due = new Set(dueKeys(bank.slug))
  const newest = (s: S) =>
    Math.min(...set.items(s).map((item) => rank.get(bank.key(item)) ?? Infinity))
  const seen = sets
    .filter((s) => Number.isFinite(newest(s)))
    .sort((a, b) => newest(a) - newest(b))
    .map(set.key)
  const dueSets = sets
    .filter((s) => set.items(s).some((item) => due.has(bank.key(item))))
    .map(set.key)
  const picked = dealRound(sets, {
    size: count,
    key: set.key,
    seen,
    due: dueSets,
    random: options.random,
  })
  rememberDealt(
    bank.slug,
    picked.flatMap((s) => set.items(s).map((item) => bank.key(item))),
  )
  return picked
}

/**
 * For a game that asks one question at a time and chooses each from the last
 * answer (Grade Climber's ladder): the next question from `candidates`, the
 * first a round deal would choose given what this session has `asked`, so
 * nothing already asked gives it away, and it is one this browser has not
 * met, or met longest ago. Call beginRound(slug) once as a session starts.
 */
export function pickNextNow<T>(
  bank: GameBank<T>,
  candidates: readonly T[],
  asked: readonly T[],
  options: { random?: () => number } = {},
): T | null {
  if (!candidates.length) return null
  const g = giveAwaysFor(bank, resolved.get(bank.slug) ?? null)
  const key = (item: T) => bank.key(item)
  const askedKeys = new Set(asked.map(key))
  const askedFacts = new Set(
    asked.flatMap((item) => [...(bank.facts?.(item) ?? []), ...(g.facts.get(key(item)) ?? [])]),
  )
  const clear = candidates.filter((item) => {
    const k = key(item)
    if (askedKeys.has(k)) return false
    const f = [...(bank.facts?.(item) ?? []), ...(g.facts.get(k) ?? [])]
    if (f.some((x) => askedFacts.has(x))) return false
    if ([...askedKeys].some((a) => g.reveals.get(a)?.has(k))) return false
    if ([...(g.reveals.get(k) ?? [])].some((r) => askedKeys.has(r))) return false
    return true
  })
  const [next] = dealRound(clear.length ? clear : candidates, {
    size: 1,
    key,
    seen: seenKeys(bank.slug),
    // This game's round is already under way (beginRound), so it is the one
    // that counts.
    due: dueKeys(bank.slug, currentRound(bank.slug)),
    random: options.random,
  })
  if (next) rememberSeen(bank.slug, [key(next)])
  return next ?? null
}

export { beginRound }

/** The dealer for one game's page: loads its explanations, returns `deal(size, options)`. */
export function useDealer<T>(bank: GameBank<T>) {
  useEffect(() => {
    void preloadExplanations(bank.slug)
  }, [bank.slug])
  return useCallback(
    (size: number, options?: RoundOptions<T>) => dealNow(bank, size, options),
    [bank],
  )
}

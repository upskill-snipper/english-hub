/**
 * A student's text-game scores, kept in this browser only.
 *
 * WHAT IS KEPT, per text: each round's best score and whether it has been
 * completed, how many times each round has been started (which seeds the next
 * deal, so a replay asks differently), the best score for a whole path, and how
 * many rounds the text has. Nothing else: no dates, no streaks, no names.
 *
 * WHY ONLY HERE. The Children's Code defaults in
 * src/lib/privacy/child-defaults.ts rule out streaks, come-back nudges and
 * public leaderboards for under-18s, and this phase sends nothing anywhere:
 * no network, no account, no server write.
 *
 * WHY ITS OWN KEYS. src/lib/game-scores.ts keeps the other games under
 * `eh_game_<id>`, and the learning profile reads every key with that prefix as
 * a skills game (src/lib/learning-profile/profile.ts), filing any id it does
 * not know under everyday vocabulary. A text game is literature revision, so it
 * keeps to `eh_textgame_<slug>` rather than be misfiled there.
 *
 * Every read and write is guarded, the conventions of game-scores.ts: a
 * private window, a full or disabled storage, or a value someone has edited
 * all give a fresh record rather than an error, and the game still plays.
 */

import { ROUND_KINDS, type RoundKind } from './types'

const PREFIX = 'eh_textgame_'

export interface RoundRecord {
  best: number
  max: number
  /** Times the round has been started, which seeds the next deal. */
  plays: number
  done: boolean
}

export interface TextProgress {
  v: 1
  rounds: Partial<Record<RoundKind, RoundRecord>>
  /** How many rounds the text's path has, so the index can say "3 of 6". */
  total: number
  /** The best score for a whole path, played from the first round. */
  bestRun: { score: number; max: number } | null
}

const empty = (): TextProgress => ({ v: 1, rounds: {}, total: 0, bestRun: null })

function storage(): Storage | null {
  try {
    if (typeof window === 'undefined') return null
    return window.localStorage ?? null
  } catch {
    // Some browsers throw on the property itself when storage is blocked.
    return null
  }
}

const isCount = (n: unknown): n is number => typeof n === 'number' && Number.isInteger(n) && n >= 0

/** A stored value made safe: anything malformed is dropped, not trusted. */
function clean(raw: unknown): TextProgress {
  const out = empty()
  if (!raw || typeof raw !== 'object' || (raw as { v?: unknown }).v !== 1) return out
  const r = raw as Partial<TextProgress>
  if (isCount(r.total)) out.total = r.total
  if (
    r.bestRun &&
    isCount(r.bestRun.score) &&
    isCount(r.bestRun.max) &&
    r.bestRun.score <= r.bestRun.max
  )
    out.bestRun = { score: r.bestRun.score, max: r.bestRun.max }
  for (const kind of ROUND_KINDS) {
    const rec = r.rounds?.[kind]
    if (!rec || typeof rec !== 'object') continue
    if (!isCount(rec.best) || !isCount(rec.max) || !isCount(rec.plays) || rec.best > rec.max)
      continue
    out.rounds[kind] = { best: rec.best, max: rec.max, plays: rec.plays, done: rec.done === true }
  }
  return out
}

export function readProgress(slug: string): TextProgress {
  const s = storage()
  if (!s) return empty()
  try {
    const raw = s.getItem(PREFIX + slug)
    return raw ? clean(JSON.parse(raw)) : empty()
  } catch {
    return empty()
  }
}

function write(slug: string, p: TextProgress): void {
  const s = storage()
  if (!s) return
  try {
    s.setItem(PREFIX + slug, JSON.stringify(p))
  } catch {
    // Full or blocked: the round still counts on screen, it is just not kept.
  }
}

/** Is `a` a better score than `b`? A higher share first, then more points. */
function beats(a: { score: number; max: number }, b: { score: number; max: number }): boolean {
  const pa = a.max > 0 ? a.score / a.max : 0
  const pb = b.max > 0 ? b.score / b.max : 0
  return pa > pb || (pa === pb && a.score > b.score)
}

/** Note that a round has been started; returns the play number to deal with. */
export function startRound(slug: string, kind: RoundKind, total: number): number {
  const p = readProgress(slug)
  const rec = p.rounds[kind] ?? { best: 0, max: 0, plays: 0, done: false }
  const play = rec.plays
  p.rounds[kind] = { ...rec, plays: rec.plays + 1 }
  p.total = total
  write(slug, p)
  return play
}

/** Record a finished round. `newBest` is true the first time, and whenever it is beaten. */
export function finishRound(
  slug: string,
  kind: RoundKind,
  score: number,
  max: number,
): { progress: TextProgress; newBest: boolean } {
  const p = readProgress(slug)
  const rec = p.rounds[kind] ?? { best: 0, max: 0, plays: 1, done: false }
  const newBest = !rec.done || beats({ score, max }, { score: rec.best, max: rec.max })
  p.rounds[kind] = {
    plays: Math.max(rec.plays, 1),
    done: true,
    ...(newBest ? { best: score, max } : { best: rec.best, max: rec.max }),
  }
  write(slug, p)
  return { progress: p, newBest }
}

/** Record a whole path, played from its first round to its last. */
export function finishRun(
  slug: string,
  score: number,
  max: number,
): { progress: TextProgress; newBest: boolean } {
  const p = readProgress(slug)
  const newBest = !p.bestRun || beats({ score, max }, p.bestRun)
  if (newBest) p.bestRun = { score, max }
  write(slug, p)
  return { progress: p, newBest }
}

/** How many of `kinds` the student has completed. */
export function roundsDone(p: TextProgress, kinds: readonly RoundKind[]): number {
  return kinds.filter((k) => p.rounds[k]?.done).length
}

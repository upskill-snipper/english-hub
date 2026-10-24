/**
 * What a student has met and missed in each skills game, kept in this browser
 * (24 October 2026), so the next round can deal what they have not met and
 * bring back what they got wrong (./deal-round.ts says why).
 *
 * Three records per game, all question keys (GameBank.key), never anything a
 * student typed:
 *
 *   seen     newest first, every question dealt;
 *   missed   each question answered wrongly, with the round it was missed in;
 *   rounds   how many rounds this browser has started.
 *
 * A missed question is due again two rounds after it was missed, so it comes
 * back once the explanation has had time to settle rather than straight
 * after it (the GCSE audit found Vocabulary Builder asking a missed word again
 * immediately after its explanation and counting it as learnt). It leaves the
 * list when it is dealt again; if it is missed again, it goes back on.
 *
 * Every read and write is wrapped: where storage is blocked (a private
 * window, a school's locked-down browser), a round deals without history, as
 * every round did before this file.
 */

const SEEN = 'eh_game_seen_'
const MISSED = 'eh_game_missed_'
const ROUNDS = 'eh_game_rounds_'

/** The most question keys a game remembers having dealt. */
export const SEEN_LIMIT = 600
/** The most missed questions a game holds for review. */
export const MISSED_LIMIT = 60
/** Rounds after a miss before the question is dealt again. */
export const DUE_AFTER = 2

type Missed = { k: string; r: number }

function read<T>(name: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(name)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(name: string, value: unknown): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(name, JSON.stringify(value))
  } catch {
    /* storage blocked or full: the next round deals without history */
  }
}

const strings = (v: unknown): string[] =>
  Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : []

/** Keys dealt in this game's earlier rounds, newest first. */
export function seenKeys(game: string): string[] {
  return strings(read<unknown>(SEEN + game, []))
}

function missedList(game: string): Missed[] {
  const v = read<unknown>(MISSED + game, [])
  return Array.isArray(v)
    ? v.filter(
        (m): m is Missed =>
          !!m && typeof (m as Missed).k === 'string' && typeof (m as Missed).r === 'number',
      )
    : []
}

function roundsStarted(game: string): number {
  const n = read<unknown>(ROUNDS + game, 0)
  return typeof n === 'number' && Number.isFinite(n) && n >= 0 ? n : 0
}

/** The number of the round in progress (1 for the first), 0 before any. */
export function currentRound(game: string): number {
  return roundsStarted(game)
}

/**
 * Missed questions due again in round `round`: by default the round about to
 * start, as a game that deals a whole round asks before dealing it; a game
 * that deals one question at a time passes currentRound(). A question missed
 * in round n is due from round n + DUE_AFTER.
 */
export function dueKeys(game: string, round = roundsStarted(game) + 1): string[] {
  return missedList(game)
    .filter((m) => round - m.r >= DUE_AFTER)
    .map((m) => m.k)
}

/**
 * Record a round as dealt: its keys go to the front of `seen`, any due
 * question it deals leaves `missed`, and the round count goes up.
 */
export function rememberDealt(game: string, keys: readonly string[]): void {
  rememberSeen(game, keys)
  beginRound(game)
}

/** Count a round as started, for a game that deals its questions one at a time. */
export function beginRound(game: string): void {
  write(ROUNDS + game, roundsStarted(game) + 1)
}

/** Record questions as dealt without starting a round (a game that deals one at a time). */
export function rememberSeen(game: string, keys: readonly string[]): void {
  const dealt = new Set(keys)
  const seen = [...keys, ...seenKeys(game).filter((k) => !dealt.has(k))].slice(0, SEEN_LIMIT)
  write(SEEN + game, seen)
  write(
    MISSED + game,
    missedList(game).filter((m) => !dealt.has(m.k)),
  )
}

/** Record a wrong answer in the round in progress, to be dealt again DUE_AFTER rounds on. */
export function rememberMissed(game: string, key: string): void {
  if (!key) return
  const r = roundsStarted(game)
  const list = missedList(game).filter((m) => m.k !== key)
  write(MISSED + game, [{ k: key, r }, ...list].slice(0, MISSED_LIMIT))
}

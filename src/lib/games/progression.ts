/**
 * Progress through the skills games (24 October 2026): XP and the rank it
 * builds, a level in each game that rises as a student masters its harder
 * questions, achievements, the best run of right answers, and, only where a
 * student's own settings allow it, a run of days practised.
 *
 * WHY. The founder, 24 October 2026: the games should be "fun and addictive.
 * developing the users further and further as they progress. rewards,
 * streaks etc". Until now a skills game ended on a score and nothing carried
 * from one round to the next: the text quests had XP, ranks and achievements,
 * the 37 skills games none.
 *
 * WHAT IT REWARDS. Learning, not returning. XP is earned by right answers,
 * more for harder ones (tier 2 half as much again, tier 3 double) and for
 * runs of right answers; a game's level goes up after two strong rounds on
 * its current level (LEVEL_PASS_SHARE right, LEVEL_MIN_ANSWERS answered at
 * that level), and never down. The rank is the quests' own (playerLevel),
 * fed by the same XP (./quest/progress.ts, the player store), so a student
 * has one rank across every game on the site.
 *
 * WHAT IT DOES NOT DO, for a site most of whose users are children
 * (src/lib/privacy/child-defaults.ts, ICO Children's Code standard 6): no
 * timer is added, nothing is lost for a missed day, nothing asks a student to
 * come back, and nothing is public. The run of days practised is shown only
 * to a signed-in student whose profile has streaks_enabled, which is false
 * for every under-18 account unless they or a parent turn it on (measured in
 * production on 24 October 2026: all 107 minors false, all 345 adults true);
 * a guest's age is unknown, so a guest never sees it.
 *
 * Everything stays in this browser, as the quests' progress does; what
 * reaches a signed-in student's account is each answer, as before
 * (./game-round.tsx).
 */

import { SELF_MARKED_GAMES } from '@/lib/game-results/self-marked'
import {
  emptyPlayer,
  playerLevel,
  readPlayer,
  writePlayer,
  type PlayerProgress,
} from './quest/progress'

// ── The rules ────────────────────────────────────────────────────────────────

/** XP for a right answer, by the question's tier (1 when it has none). */
export const XP_BY_TIER: Record<number, number> = { 1: 10, 2: 15, 3: 20 }
/** Extra for each right answer that extends a run of two or more. */
export const XP_RUN = 5
/** Extra for a round with every answer right, of at least PERFECT_MIN answers. */
export const XP_PERFECT = 25
export const PERFECT_MIN = 8
/** Extra for unlocking a game's next level. */
export const XP_LEVEL_UP = 50

/** A strong round on a level: this share right, of at least LEVEL_MIN_ANSWERS at that level. */
export const LEVEL_PASS_SHARE = 0.8
export const LEVEL_MIN_ANSWERS = 4
/** Strong rounds on a level that unlock the next. */
export const LEVEL_PASSES = 2
export const TOP_LEVEL = 3

/**
 * The share of a round each tier gets at each level: mostly the level's own
 * questions, some below it to keep them, a few above it to stretch.
 */
export const LEVEL_MIX: Record<number, Record<string, number>> = {
  1: { '1': 0.75, '2': 0.25 },
  2: { '1': 0.2, '2': 0.6, '3': 0.2 },
  3: { '1': 0.1, '2': 0.3, '3': 0.6 },
}

/** How many of a round's `size` questions each tier gets at `level`. */
export function levelCounts(level: number, size: number): Record<string, number> {
  const mix = LEVEL_MIX[Math.min(Math.max(level, 1), TOP_LEVEL)]
  const tiers = Object.keys(mix)
  const counts: Record<string, number> = {}
  let given = 0
  for (const t of tiers) {
    counts[t] = Math.floor(mix[t] * size)
    given += counts[t]
  }
  // What rounding left goes to the level's own tier.
  counts[String(level)] = (counts[String(level)] ?? 0) + (size - given)
  return counts
}

// ── Achievements ─────────────────────────────────────────────────────────────

/** The skills-game achievements, in the order a cabinet shows them. Words in the dictionary. */
export const GAME_ACHIEVEMENTS = [
  'games-first-round',
  'games-perfect',
  'games-run-10',
  'games-level-2',
  'games-level-3',
  'games-five-games',
  'games-hundred',
  'games-comeback',
] as const
export type GameAchievementId = (typeof GAME_ACHIEVEMENTS)[number]

// ── What a round adds up to ─────────────────────────────────────────────────

export interface Answer {
  tier: number
  correct: boolean
  /** The question was missed in an earlier round and came back (round-history.ts). */
  wasDue: boolean
}

export interface GameRecord {
  /** The level reached, 1 to TOP_LEVEL. */
  level: number
  /** Strong rounds on the current level. */
  passes: number
  rounds: number
  right: number
  bestRun: number
  /** A round of this game has been dealt by level, so its level means something. */
  levelled?: boolean
}

export interface GamesProgress {
  v: number
  games: Record<string, GameRecord>
  /** Local dates (YYYY-MM-DD) with a finished round, newest first. */
  days: string[]
}

export const PROGRESS_VERSION = 1
const PROGRESS_KEY = `teh-games:v${PROGRESS_VERSION}:progress`
const DAYS_KEPT = 60

export const emptyProgress = (): GamesProgress => ({ v: PROGRESS_VERSION, games: {}, days: [] })
export const emptyRecord = (): GameRecord => ({
  level: 1,
  passes: 0,
  rounds: 0,
  right: 0,
  bestRun: 0,
})

export interface RoundOutcome {
  xp: number
  right: number
  answered: number
  bestRun: number
  perfect: boolean
  /** The level this round was played at, where the game has levels. */
  level: number | null
  /** The level unlocked by this round, if one was. */
  levelUp: number | null
  /** Strong rounds now held towards the next level. */
  passes: number
  earned: GameAchievementId[]
  rank: ReturnType<typeof playerLevel>
  /** Days practised in a row, ending today. */
  streak: number
}

/** The longest run of right answers in a round. */
export function bestRunOf(answers: readonly Answer[]): number {
  let best = 0
  let run = 0
  for (const a of answers) {
    run = a.correct ? run + 1 : 0
    best = Math.max(best, run)
  }
  return best
}

/** XP for a round's answers, before any level-up or perfect-round bonus. */
export function xpForAnswers(answers: readonly Answer[]): number {
  let xp = 0
  let run = 0
  for (const a of answers) {
    if (!a.correct) {
      run = 0
      continue
    }
    xp += XP_BY_TIER[a.tier] ?? XP_BY_TIER[1]
    if (run >= 2) xp += XP_RUN
    run += 1
  }
  return xp
}

/** Days practised in a row, ending today (a run that ended yesterday is still counted until today ends). */
export function streakOf(days: readonly string[], today: string): number {
  const set = new Set(days)
  const step = (d: string, by: number) => {
    const t = new Date(`${d}T12:00:00Z`)
    t.setUTCDate(t.getUTCDate() + by)
    return t.toISOString().slice(0, 10)
  }
  let day = set.has(today) ? today : step(today, -1)
  let n = 0
  while (set.has(day)) {
    n += 1
    day = step(day, -1)
  }
  return n
}

/** Today's local date as YYYY-MM-DD. */
export function localDay(now: number): string {
  const d = new Date(now)
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

/**
 * What a finished round adds up to, and the progress after it. Pure: the
 * storage wrappers below read and write. `levelled` says whether the round was
 * dealt by level (a game whose bank has tiers and no fixed mix of its own).
 */
export function finishRound(
  slug: string,
  answers: readonly Answer[],
  levelled: boolean,
  progress: GamesProgress,
  player: PlayerProgress,
  now: number,
): { outcome: RoundOutcome; progress: GamesProgress; player: PlayerProgress } {
  const was = progress.games[slug] ?? emptyRecord()
  const right = answers.filter((a) => a.correct).length
  const bestRun = bestRunOf(answers)
  const perfect = answers.length >= PERFECT_MIN && right === answers.length

  // The level: a strong round on it counts towards the next.
  let level = was.level
  let passes = was.passes
  let levelUp: number | null = null
  if (levelled && level < TOP_LEVEL) {
    const atLevel = answers.filter((a) => a.tier === level)
    const share = atLevel.length ? atLevel.filter((a) => a.correct).length / atLevel.length : 0
    if (atLevel.length >= LEVEL_MIN_ANSWERS && share >= LEVEL_PASS_SHARE) {
      passes += 1
      if (passes >= LEVEL_PASSES) {
        level += 1
        passes = 0
        levelUp = level
      }
    }
  }

  const xp =
    xpForAnswers(answers) + (perfect ? XP_PERFECT : 0) + (levelUp !== null ? XP_LEVEL_UP : 0)

  const record: GameRecord = {
    level,
    passes,
    rounds: was.rounds + 1,
    right: was.right + right,
    bestRun: Math.max(was.bestRun, bestRun),
    levelled: was.levelled === true || levelled,
  }
  const today = localDay(now)
  const days = [today, ...progress.days.filter((d) => d !== today)].slice(0, DAYS_KEPT)
  const next: GamesProgress = { ...progress, games: { ...progress.games, [slug]: record }, days }

  // Achievements, each once.
  const has = (id: GameAchievementId) => player.achievements[id] !== undefined
  const totalRight = Object.values(next.games).reduce((n, g) => n + g.right, 0)
  const played = Object.values(next.games).filter((g) => g.rounds > 0).length
  const earned: GameAchievementId[] = []
  const award = (id: GameAchievementId, when: boolean) => {
    if (when && !has(id)) earned.push(id)
  }
  award('games-first-round', true)
  award('games-perfect', perfect && answers.length >= 10)
  award('games-run-10', bestRun >= 10)
  award('games-level-2', level >= 2)
  award('games-level-3', level >= 3)
  award('games-five-games', played >= 5)
  award('games-hundred', totalRight >= 100)
  award(
    'games-comeback',
    answers.some((a) => a.wasDue && a.correct),
  )

  const achievements = { ...player.achievements }
  for (const id of earned) achievements[id] = now
  const nextPlayer: PlayerProgress = { ...player, xp: player.xp + xp, achievements }

  return {
    outcome: {
      xp,
      right,
      answered: answers.length,
      bestRun,
      perfect,
      level: levelled ? was.level : null,
      levelUp,
      passes,
      earned,
      rank: playerLevel(nextPlayer.xp),
      streak: streakOf(days, today),
    },
    progress: next,
    player: nextPlayer,
  }
}

// ── This browser ─────────────────────────────────────────────────────────────

/** Read progress; empty where storage is blocked or holds something else. */
export function readProgress(): GamesProgress {
  if (typeof window === 'undefined') return emptyProgress()
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY)
    if (!raw) return emptyProgress()
    const v = JSON.parse(raw) as GamesProgress
    if (!v || v.v !== PROGRESS_VERSION || typeof v.games !== 'object' || !Array.isArray(v.days))
      return emptyProgress()
    return { ...emptyProgress(), ...v }
  } catch {
    return emptyProgress()
  }
}

function writeProgress(p: GamesProgress) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(p))
  } catch {
    /* storage blocked: progress lasts for the page */
  }
}

/** A game's level and passes as stored, for the dealer and the start screen. */
export function gameRecord(slug: string): GameRecord {
  return readProgress().games[slug] ?? emptyRecord()
}

// ── Who may see a run of days ────────────────────────────────────────────────

/**
 * May this student see their run of days practised? Only where their own
 * setting says so, and only where that setting was a choice.
 *
 * streaks_enabled is false for every account known to be under 18 until they
 * or a parent turn it on (src/lib/privacy/child-defaults.ts). But the column
 * defaults to true, so an account with no date of birth on record carries
 * true without anyone having chosen it, and its age is unknown: the analytics
 * gate in src/components/providers/supabase-provider.tsx treats such an
 * account as not adult, and so does this. A guest has no profile. Neither
 * sees a streak.
 */
export function mayShowStreak(
  profile:
    | {
        streaks_enabled?: boolean | null
        is_minor?: boolean | null
        date_of_birth?: string | null
      }
    | null
    | undefined,
): boolean {
  if (!profile || profile.streaks_enabled !== true) return false
  return profile.is_minor === true || !!profile.date_of_birth
}

// ── The round in play ────────────────────────────────────────────────────────

interface Tally {
  /** The tier of each question dealt this round, and whether it came back due. */
  dealt: Map<string, { tier: number; due: boolean }>
  /** Was the round dealt by level. */
  levelled: boolean
  answers: Answer[]
  /** Questions already answered this round: only a first answer counts. */
  answered: Set<string>
}

/** Per game: the round in play. Absent between rounds. */
const inPlay = new Map<string, Tally>()

function tallyFor(slug: string): Tally {
  let t = inPlay.get(slug)
  if (!t) {
    t = { dealt: new Map(), levelled: false, answers: [], answered: new Set() }
    inPlay.set(slug, t)
  }
  return t
}

/**
 * A round starts (GameShell, before the page deals): forget whatever is left
 * of the last one, a round abandoned by Restart included. A page that starts
 * a round some other way still gets a fresh tally, because endRound closes
 * each round and the next deal opens a new one.
 */
export function beginTally(slug: string): void {
  inPlay.delete(slug)
}

/** The dealer says what it dealt (start-round.ts). Adds to the round in play. */
export function noteDealt(
  slug: string,
  items: readonly { key: string; tier: number | undefined; due: boolean }[],
  levelled: boolean,
): void {
  const t = tallyFor(slug)
  for (const it of items) t.dealt.set(it.key, { tier: it.tier ?? 1, due: it.due })
  if (levelled) t.levelled = true
}

/**
 * An answer, as the page records it (game-round.tsx), keyed as the bank keys
 * it. A game the student marks themselves (a flashcard's "I knew it") adds
 * nothing: nothing checked the answer, so it earns no XP and no achievement
 * (src/lib/game-results/self-marked.ts).
 *
 * Only a question's FIRST answer in a round counts. Vocabulary Builder asks a
 * missed word again later in the same round, just after its explanation has
 * shown the answer; that retry is practice, and is still recorded for the
 * student's account (game-round.tsx), but it earns no XP and moves no level,
 * or a run of right answers could be built from answers just read.
 */
export function noteAnswer(slug: string, key: string, correct: boolean): void {
  if (SELF_MARKED_GAMES.has(slug)) return
  const t = tallyFor(slug)
  if (t.answered.has(key)) return
  t.answered.add(key)
  const info = t.dealt.get(key)
  t.answers.push({ tier: info?.tier ?? 1, correct, wasDue: info?.due ?? false })
}

/** The round ends (GameShell): add it up, keep it, say what it earned, and close it. */
export function endRound(slug: string, now = Date.now()): RoundOutcome | null {
  const t = inPlay.get(slug)
  inPlay.delete(slug)
  if (!t || t.answers.length === 0) return null
  const { outcome, progress, player } = finishRound(
    slug,
    t.answers,
    t.levelled,
    readProgress(),
    typeof window === 'undefined' ? emptyPlayer() : readPlayer(),
    now,
  )
  writeProgress(progress)
  writePlayer(player)
  return outcome
}

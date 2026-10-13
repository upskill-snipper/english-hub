/**
 * Game analytics: what a student's saved rounds say about them.
 *
 * Pure: rounds in, figures out, no database, no clock except `now`. The same
 * function serves the student's hub, the teacher's view of one pupil and, as
 * its input, the AI coach (src/lib/game-results/coach.ts), so all three can
 * only ever disagree about wording, never about a number.
 *
 * HOW A SKILL IS JUDGED. Every answered question is filed under one skill
 * group (./skills.ts) and, more finely, under its kind within its game or
 * text. A skill's BAND comes from its last 30 answers, so it shows where the
 * student is now rather than what they did in September:
 *
 *   secure       80% or more right
 *   developing   60% to 79%
 *   needs work   under 60%
 *   too few      fewer than 5 answers: nothing is said about it
 *
 * Its TREND compares the last 14 days with the 14 before, when each has at
 * least 5 answers: 10 points or more either way is improving or slipping.
 *
 * WHAT IT NEVER DOES: turn any of this into a GCSE grade. A share of quiz
 * questions right is not an exam mark, and the site has been caught printing
 * one as the other (the Knowledge Tester's "Grade 9" for 9 of 10). Nothing
 * here, and nothing built on it, predicts or names a grade.
 *
 * Rounds a skills game sent without per-question detail (a page not yet
 * wired to record its answers) count towards time, rounds and the activity
 * list, never towards a skill: a whole round's percentage cannot say which
 * skill was weak.
 */

import { groupOf, SKILL_GROUP_ORDER, type SkillGroup } from './skills'
import type { RoundSource, StoredRound } from './types'

export type Band = 'secure' | 'developing' | 'needs-work' | 'too-few'
export type Trend = 'improving' | 'steady' | 'slipping'

/** The last this-many answers decide a skill's band. */
export const RECENT_WINDOW = 30
/** Fewer answers than this and nothing is said about a skill. */
export const MIN_TO_JUDGE = 5
/** A strength needs at least this many recent answers. */
export const MIN_FOR_STRENGTH = 10
export const SECURE_AT = 80
export const DEVELOPING_AT = 60
const TREND_DAYS = 14
const TREND_POINTS = 10
const WEEKS_SHOWN = 12
const DAY_MS = 86_400_000

export interface SkillStat {
  /** Unique within its list: 'methods', 'skills:speed-analysis:metaphor', 'quest:macbeth:method'. */
  key: string
  group: SkillGroup
  /** Set for a finer stat that belongs to one game or one text. */
  source?: RoundSource
  activity?: string
  /** Set for a finer stat: the question kind or tag. */
  kind?: string
  answered: number
  correct: number
  /** Over the whole window, 0 to 100. */
  accuracy: number
  /** Over the last RECENT_WINDOW answers. */
  recentAnswered: number
  recentAccuracy: number
  band: Band
  trend: Trend | null
  lastSeen: string
}

export interface ActivityStat {
  source: RoundSource
  activity: string
  rounds: number
  answered: number
  correct: number
  /** Over the questions recorded one by one; null when none were. */
  accuracy: number | null
  /** The best single round, as a percentage of its own maximum. */
  bestPercent: number | null
  minutes: number
  lastPlayed: string
}

export interface TextStat {
  slug: string
  rounds: number
  answered: number
  correct: number
  accuracy: number
  /** Level ids played at least once ('chapter-1', 'cast', ...), reviews excluded. */
  levels: string[]
  reviews: number
  lastPlayed: string
  /** Per question kind within this text. */
  kinds: SkillStat[]
}

export interface Confusion {
  activity: string
  /** The kind of the question: for Speed Analysis, the device it really was. */
  kind: string
  /** The label chosen instead. */
  chose: string
  times: number
}

export interface WeekTally {
  /** Monday of the week, YYYY-MM-DD (UTC). */
  start: string
  answered: number
  correct: number
}

export interface GameAnalytics {
  generatedAt: string
  hasData: boolean
  totals: {
    rounds: number
    answered: number
    correct: number
    accuracy: number
    minutes: number
    activeDays: number
    activities: number
    firstPlayed: string | null
    lastPlayed: string | null
  }
  thisWeek: { answered: number; correct: number; accuracy: number | null }
  lastWeek: { answered: number; correct: number; accuracy: number | null }
  weeks: WeekTally[]
  /** One per skill group the student has answered, in SKILL_GROUP_ORDER. */
  groups: SkillStat[]
  /** Per kind within each skills game, and per quest kind across all texts. */
  subskills: SkillStat[]
  texts: TextStat[]
  activities: ActivityStat[]
  confusions: Confusion[]
  /** Up to three things the evidence says are going well. */
  strengths: SkillStat[]
  /** Up to three things the evidence says need work, most specific first. */
  workOn: SkillStat[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────

const pct = (correct: number, answered: number) =>
  answered > 0 ? Math.round((correct / answered) * 100) : 0

function bandFor(recentAnswered: number, recentAccuracy: number): Band {
  if (recentAnswered < MIN_TO_JUDGE) return 'too-few'
  if (recentAccuracy >= SECURE_AT) return 'secure'
  if (recentAccuracy >= DEVELOPING_AT) return 'developing'
  return 'needs-work'
}

/** Monday 00:00 UTC of the week holding `t`. */
function weekStart(t: number): number {
  const d = new Date(t)
  const day = (d.getUTCDay() + 6) % 7 // Monday = 0
  return Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - day * DAY_MS
}

const isoDay = (t: number) => new Date(t).toISOString().slice(0, 10)

interface Answer {
  c: 0 | 1
  t: number
}

/** A running tally of one skill's answers, oldest first. */
class Track {
  answers: Answer[] = []
  add(c: 0 | 1, t: number) {
    this.answers.push({ c, t })
  }
  stat(key: string, group: SkillGroup, now: number, extra: Partial<SkillStat> = {}): SkillStat {
    const a = this.answers
    const correct = a.reduce((n, x) => n + x.c, 0)
    const recent = a.slice(-RECENT_WINDOW)
    const recentCorrect = recent.reduce((n, x) => n + x.c, 0)
    const recentAccuracy = pct(recentCorrect, recent.length)
    return {
      key,
      group,
      ...extra,
      answered: a.length,
      correct,
      accuracy: pct(correct, a.length),
      recentAnswered: recent.length,
      recentAccuracy,
      band: bandFor(recent.length, recentAccuracy),
      trend: trendOf(a, now),
      lastSeen: new Date(a.length ? a[a.length - 1].t : now).toISOString(),
    }
  }
}

function trendOf(a: Answer[], now: number): Trend | null {
  const cut = now - TREND_DAYS * DAY_MS
  const before = a.filter((x) => x.t < cut && x.t >= cut - TREND_DAYS * DAY_MS)
  const after = a.filter((x) => x.t >= cut)
  if (before.length < MIN_TO_JUDGE || after.length < MIN_TO_JUDGE) return null
  const delta =
    pct(
      after.reduce((n, x) => n + x.c, 0),
      after.length,
    ) -
    pct(
      before.reduce((n, x) => n + x.c, 0),
      before.length,
    )
  if (delta >= TREND_POINTS) return 'improving'
  if (delta <= -TREND_POINTS) return 'slipping'
  return 'steady'
}

function track<K>(map: Map<K, Track>, k: K): Track {
  let t = map.get(k)
  if (!t) {
    t = new Track()
    map.set(k, t)
  }
  return t
}

// ─── Build ────────────────────────────────────────────────────────────────

export function analyseRounds(
  rounds: readonly StoredRound[],
  now: Date = new Date(),
): GameAnalytics {
  const nowMs = now.getTime()
  const ordered = rounds
    .map((r) => ({ r, t: Date.parse(r.finishedAt) }))
    .filter((x) => Number.isFinite(x.t) && x.t <= nowMs + 60_000)
    .sort((a, b) => a.t - b.t)

  const groups = new Map<SkillGroup, Track>()
  const subskills = new Map<
    string,
    { track: Track; group: SkillGroup; extra: Partial<SkillStat> }
  >()
  const texts = new Map<
    string,
    {
      rounds: number
      answered: number
      correct: number
      levels: Set<string>
      reviews: number
      last: number
      kinds: Map<string, { track: Track; group: SkillGroup }>
    }
  >()
  const activities = new Map<string, ActivityStat & { lastT: number; secs: number }>()
  const confusions = new Map<string, Confusion>()
  const days = new Set<string>()
  const weekMap = new Map<number, WeekTally>()

  let answered = 0
  let correct = 0
  let seconds = 0
  const thisWeekStart = weekStart(nowMs)
  const lastWeekStart = thisWeekStart - 7 * DAY_MS
  const thisWeek = { answered: 0, correct: 0 }
  const lastWeek = { answered: 0, correct: 0 }

  for (const { r, t } of ordered) {
    days.add(isoDay(t))
    seconds += r.durationSeconds ?? 0

    // The activity list counts every round, detailed or not.
    const aKey = `${r.source}:${r.activity}`
    const act =
      activities.get(aKey) ??
      (() => {
        const fresh = {
          source: r.source,
          activity: r.activity,
          rounds: 0,
          answered: 0,
          correct: 0,
          accuracy: null,
          bestPercent: null,
          minutes: 0,
          lastPlayed: '',
          lastT: 0,
          secs: 0,
        } as ActivityStat & { lastT: number; secs: number }
        activities.set(aKey, fresh)
        return fresh
      })()
    act.rounds += 1
    act.secs += r.durationSeconds ?? 0
    act.lastT = Math.max(act.lastT, t)
    const roundPercent =
      r.items.length > 0
        ? pct(
            r.items.reduce((n, it) => n + it.c, 0),
            r.items.length,
          )
        : r.maxScore && r.maxScore > 0 && r.score !== null
          ? Math.min(100, Math.round((r.score / r.maxScore) * 100))
          : null
    if (roundPercent !== null) act.bestPercent = Math.max(act.bestPercent ?? 0, roundPercent)

    // A quest text's own tallies.
    const text =
      r.source === 'quest'
        ? (texts.get(r.activity) ??
          (() => {
            const fresh = {
              rounds: 0,
              answered: 0,
              correct: 0,
              levels: new Set<string>(),
              reviews: 0,
              last: 0,
              kinds: new Map<string, { track: Track; group: SkillGroup }>(),
            }
            texts.set(r.activity, fresh)
            return fresh
          })())
        : null
    if (text) {
      text.rounds += 1
      text.last = Math.max(text.last, t)
      if (r.level === 'review') text.reviews += 1
      else if (r.level) text.levels.add(r.level)
    }

    const wk = weekStart(t)
    const week = weekMap.get(wk) ?? { start: isoDay(wk), answered: 0, correct: 0 }
    weekMap.set(wk, week)

    for (const it of r.items) {
      const group = groupOf(r.source, r.activity, it.k)
      answered += 1
      correct += it.c
      act.answered += 1
      act.correct += it.c
      week.answered += 1
      week.correct += it.c
      if (wk === thisWeekStart) {
        thisWeek.answered += 1
        thisWeek.correct += it.c
      } else if (wk === lastWeekStart) {
        lastWeek.answered += 1
        lastWeek.correct += it.c
      }
      if (!group) continue

      track(groups, group).add(it.c, t)

      // Finer: a skills game's tag within that game; a quest kind across all texts.
      const subKey = r.source === 'skills' ? `skills:${r.activity}:${it.k}` : `quest:*:${it.k}`
      const sub =
        subskills.get(subKey) ??
        (() => {
          const fresh = {
            track: new Track(),
            group,
            extra:
              r.source === 'skills'
                ? { source: r.source, activity: r.activity, kind: it.k }
                : { source: r.source, kind: it.k },
          }
          subskills.set(subKey, fresh)
          return fresh
        })()
      sub.track.add(it.c, t)

      if (text) {
        text.answered += 1
        text.correct += it.c
        const tk = text.kinds.get(it.k) ?? { track: new Track(), group }
        text.kinds.set(it.k, tk)
        tk.track.add(it.c, t)
      }

      if (r.source === 'skills' && it.c === 0 && it.w) {
        const cKey = `${r.activity}\u0000${it.k}\u0000${it.w}`
        const conf = confusions.get(cKey) ?? {
          activity: r.activity,
          kind: it.k,
          chose: it.w,
          times: 0,
        }
        conf.times += 1
        confusions.set(cKey, conf)
      }
    }
  }

  const groupStats = SKILL_GROUP_ORDER.filter((g) => groups.has(g)).map((g) =>
    groups.get(g)!.stat(g, g, nowMs),
  )
  const subStats = [...subskills.entries()].map(([key, s]) =>
    s.track.stat(key, s.group, nowMs, s.extra),
  )
  const textStats: TextStat[] = [...texts.entries()]
    .map(([slug, x]) => ({
      slug,
      rounds: x.rounds,
      answered: x.answered,
      correct: x.correct,
      accuracy: pct(x.correct, x.answered),
      levels: [...x.levels].sort(),
      reviews: x.reviews,
      lastPlayed: new Date(x.last).toISOString(),
      kinds: [...x.kinds.entries()]
        .map(([kind, k]) =>
          k.track.stat(`quest:${slug}:${kind}`, k.group, nowMs, {
            source: 'quest',
            activity: slug,
            kind,
          }),
        )
        .sort((a, b) => b.answered - a.answered),
    }))
    .sort((a, b) => b.lastPlayed.localeCompare(a.lastPlayed))

  const activityStats: ActivityStat[] = [...activities.values()]
    .map(({ lastT, secs, ...a }) => ({
      ...a,
      accuracy: a.answered > 0 ? pct(a.correct, a.answered) : null,
      minutes: Math.round(secs / 60),
      lastPlayed: new Date(lastT).toISOString(),
    }))
    .sort((a, b) => b.lastPlayed.localeCompare(a.lastPlayed))

  // The last WEEKS_SHOWN weeks, oldest first, empty weeks included.
  const weeks: WeekTally[] = []
  for (let n = WEEKS_SHOWN - 1; n >= 0; n--) {
    const wk = thisWeekStart - n * 7 * DAY_MS
    weeks.push(weekMap.get(wk) ?? { start: isoDay(wk), answered: 0, correct: 0 })
  }

  const { strengths, workOn } = pickStrengthsAndWork(
    groupStats,
    subStats,
    textStats.flatMap((x) => x.kinds),
  )

  return {
    generatedAt: now.toISOString(),
    hasData: ordered.length > 0,
    totals: {
      rounds: ordered.length,
      answered,
      correct,
      accuracy: pct(correct, answered),
      minutes: Math.round(seconds / 60),
      activeDays: days.size,
      activities: activities.size,
      firstPlayed: ordered.length ? new Date(ordered[0].t).toISOString() : null,
      lastPlayed: ordered.length ? new Date(ordered[ordered.length - 1].t).toISOString() : null,
    },
    thisWeek: {
      ...thisWeek,
      accuracy: thisWeek.answered ? pct(thisWeek.correct, thisWeek.answered) : null,
    },
    lastWeek: {
      ...lastWeek,
      accuracy: lastWeek.answered ? pct(lastWeek.correct, lastWeek.answered) : null,
    },
    weeks,
    groups: groupStats,
    subskills: subStats.sort((a, b) => b.answered - a.answered),
    texts: textStats,
    activities: activityStats,
    confusions: [...confusions.values()]
      .filter((c) => c.times >= 2)
      .sort((a, b) => b.times - a.times)
      .slice(0, 8),
    strengths,
    workOn,
  }
}

/**
 * Strengths: secure skills with at least MIN_FOR_STRENGTH recent answers, the
 * broad groups first, one per group. To work on: the weakest judged skills,
 * the most specific first (a kind within one text or game says what to do
 * next; "methods" alone does not), at most one per group and activity, with
 * broad groups filling any gap.
 */
function pickStrengthsAndWork(
  groups: SkillStat[],
  subs: SkillStat[],
  textKinds: SkillStat[],
): { strengths: SkillStat[]; workOn: SkillStat[] } {
  const byStrength = (a: SkillStat, b: SkillStat) =>
    b.recentAccuracy - a.recentAccuracy || b.recentAnswered - a.recentAnswered
  const strengths: SkillStat[] = []
  const strongGroups = new Set<SkillGroup>()
  for (const s of [...groups, ...subs]
    .filter((x) => x.band === 'secure' && x.recentAnswered >= MIN_FOR_STRENGTH)
    .sort((a, b) => Number(Boolean(a.kind)) - Number(Boolean(b.kind)) || byStrength(a, b))) {
    if (strengths.length >= 3) break
    if (strongGroups.has(s.group)) continue
    strongGroups.add(s.group)
    strengths.push(s)
  }

  const weak = (x: SkillStat) =>
    (x.band === 'needs-work' || x.band === 'developing') && x.recentAnswered >= MIN_TO_JUDGE
  const byWeakness = (a: SkillStat, b: SkillStat) =>
    a.recentAccuracy - b.recentAccuracy || b.recentAnswered - a.recentAnswered
  const specific = [...textKinds, ...subs.filter((s) => s.source === 'skills')]
    .filter(weak)
    .sort(byWeakness)
  const workOn: SkillStat[] = []
  const seen = new Set<string>()
  for (const s of specific) {
    if (workOn.length >= 3) break
    const k = `${s.group}|${s.activity ?? ''}`
    if (seen.has(k)) continue
    seen.add(k)
    workOn.push(s)
  }
  for (const g of groups.filter(weak).sort(byWeakness)) {
    if (workOn.length >= 3) break
    if (workOn.some((w) => w.group === g.group)) continue
    workOn.push(g)
  }
  return { strengths, workOn }
}

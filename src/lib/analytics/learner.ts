// ─── Personal Learner Analytics ─────────────────────────────────────────────
//
// Per-user analytics derived from `public.quiz_responses`. Powers the student
// self-service dashboard at /revision/analytics.
//
// Design choices:
//   * Single query: one scan of `quiz_responses` filtered by `user_id`. All
//     four output sections (snapshot, weak topics, suggestions, difficulty
//     histogram) fan out from that single dataset in memory. RLS on
//     quiz_responses already restricts rows to the authenticated user, but
//     we still pass `user_id` explicitly so the helper works identically if
//     callers swap in the service-role client (e.g. admin export paths).
//   * Topic derivation mirrors the heuristic used by the teacher dashboard
//     widget: the leading non-digit prefix of `question_id` (e.g. `p12` →
//     `p` → `poetry`). Falls back to `module_id` when present. Keeps this
//     file self-contained — no join to a `quiz_questions` table (there
//     isn't a DB-side product-bank for these quizzes; see the migration
//     header at 20260420_quiz_responses.sql).
//   * Zero third-party deps. All shape/math logic is pure TS, so a unit
//     test can import this directly without a Supabase mock for the
//     aggregation code (the mock is only needed at the query boundary).
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'

// ─── Types ──────────────────────────────────────────────────────────────────

export type DifficultyBand = 'easy' | 'medium' | 'hard' | 'very-hard'

export interface LearnerSnapshotProgress {
  totalAnswered: number
  totalCorrect: number
  correctRateOverall: number // 0-100, integer
  answeredLast7Days: number
  correctRateLast7Days: number // 0-100, integer (NaN-safe: 0 if no data)
  answeredLast30Days: number
  correctRateLast30Days: number
  /** Consecutive distinct calendar days with at least one answered question, up to today. */
  currentStreakDays: number
  /** Longest streak ever for this user. */
  longestStreakDays: number
}

export interface LearnerWeakTopic {
  topicKey: string // stable, URL-safe slug
  topicLabel: string // human-friendly
  totalAnswered: number
  totalCorrect: number
  correctRate: number // 0-100
}

export interface LearnerStudySuggestion {
  topicKey: string
  topicLabel: string
  correctRate: number
  reason: string
  href: string
}

export interface LearnerDifficultyBucket {
  difficulty: DifficultyBand
  count: number
  percentage: number // 0-100, integer
}

export interface LearnerSnapshot {
  userId: string
  progress: LearnerSnapshotProgress
  weakTopics: LearnerWeakTopic[]
  suggestions: LearnerStudySuggestion[]
  difficultyDistribution: LearnerDifficultyBucket[]
  /** True when the user has at least one row in quiz_responses. */
  hasData: boolean
}

// ─── Topic key / label / link mapping ───────────────────────────────────────
//
// Question IDs in the product-content quiz bank use compact prefixes
// (`p1`, `st1`, `lt1`, `et1`, `c1`). Strip the numeric tail to get a topic
// key, then translate to a friendly label + a revision route.

const TOPIC_META: Record<string, { label: string; href: string }> = {
  p: {
    label: 'Poetry',
    href: '/revision/poetry',
  },
  st: {
    label: 'Set Texts',
    href: '/revision/texts',
  },
  lt: {
    label: 'Language Techniques',
    href: '/revision/language',
  },
  et: {
    label: 'Exam Technique',
    href: '/revision/exam-technique',
  },
  c: {
    label: 'Context',
    href: '/revision/texts',
  },
}

/**
 * Best-effort topic key derivation.
 *
 * Order of resolution:
 *   1. If module_id is present, use the first `.`-separated segment of it.
 *      (Matches the spec's preferred topic rule.)
 *   2. Otherwise fall back to the leading non-digit prefix of question_id.
 *   3. If neither yields anything, return 'unknown'.
 */
export function deriveTopicKey(questionId: string, moduleId: string | null): string {
  if (moduleId && moduleId.length > 0) {
    const first = moduleId.split('.')[0].trim()
    if (first.length > 0) return first.toLowerCase()
  }
  const prefixMatch = questionId.match(/^[a-zA-Z]+/)
  if (prefixMatch && prefixMatch[0].length > 0) {
    return prefixMatch[0].toLowerCase()
  }
  return 'unknown'
}

export function topicLabel(topicKey: string): string {
  const meta = TOPIC_META[topicKey]
  if (meta) return meta.label
  // Fallback: humanise dashes/underscores.
  return topicKey.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

/**
 * Map a topic key to a revision route. If the topic key doesn't have a
 * dedicated route (e.g. it was derived from an unusual module_id), fall
 * back to the generic quiz filter route so the student still has a path
 * to more practice.
 */
export function topicHref(topicKey: string): string {
  const meta = TOPIC_META[topicKey]
  if (meta) return meta.href
  return `/revision/quiz?topic=${encodeURIComponent(topicKey)}`
}

// ─── Difficulty bands (match aggregate.ts) ──────────────────────────────────

function bandForRate(rate: number): DifficultyBand {
  if (rate >= 80) return 'easy'
  if (rate >= 50) return 'medium'
  if (rate >= 25) return 'hard'
  return 'very-hard'
}

// ─── Main helper ────────────────────────────────────────────────────────────

/**
 * Load this user's quiz_responses and compute a LearnerSnapshot in-app.
 *
 * Single query, O(N) aggregation where N is the number of responses this
 * user has recorded. At current scale (dozens of responses per active
 * user) this is negligible. If we outgrow in-app aggregation we can push
 * the windowed counts into SQL views — but the shape of the return is
 * stable, so consumers won't need to change.
 */
export async function getLearnerSnapshot(
  supabase: SupabaseClient,
  userId: string,
): Promise<LearnerSnapshot> {
  const emptySnapshot: LearnerSnapshot = {
    userId,
    progress: {
      totalAnswered: 0,
      totalCorrect: 0,
      correctRateOverall: 0,
      answeredLast7Days: 0,
      correctRateLast7Days: 0,
      answeredLast30Days: 0,
      correctRateLast30Days: 0,
      currentStreakDays: 0,
      longestStreakDays: 0,
    },
    weakTopics: [],
    suggestions: [],
    difficultyDistribution: [
      { difficulty: 'easy', count: 0, percentage: 0 },
      { difficulty: 'medium', count: 0, percentage: 0 },
      { difficulty: 'hard', count: 0, percentage: 0 },
      { difficulty: 'very-hard', count: 0, percentage: 0 },
    ],
    hasData: false,
  }

  const { data, error } = await supabase
    .from('quiz_responses')
    .select('question_id, module_id, is_correct, attempted_at')
    .eq('user_id', userId)

  if (error) {
    console.error('[analytics/learner] quiz_responses query failed:', error)
    return emptySnapshot
  }
  if (!data || data.length === 0) return emptySnapshot

  type Row = {
    question_id: string
    module_id: string | null
    is_correct: boolean
    attempted_at: string
  }
  const rows = data as Row[]

  // ── 1. Progress snapshot ────────────────────────────────────────────────
  const now = Date.now()
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000
  const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

  let totalAnswered = 0
  let totalCorrect = 0
  let answered7 = 0
  let correct7 = 0
  let answered30 = 0
  let correct30 = 0

  // Streak: track distinct UTC dates with answers.
  const answerDays = new Set<string>()

  // Per-topic + per-question aggregates (question = for difficulty bucket).
  type TopicAgg = { answered: number; correct: number }
  const topicAggs = new Map<string, TopicAgg>()
  type QAgg = { answered: number; correct: number }
  const questionAggs = new Map<string, QAgg>()

  for (const r of rows) {
    const ts = Date.parse(r.attempted_at)
    const isValidTs = !Number.isNaN(ts)

    totalAnswered += 1
    if (r.is_correct) totalCorrect += 1

    if (isValidTs) {
      const ageMs = now - ts
      if (ageMs <= SEVEN_DAYS_MS) {
        answered7 += 1
        if (r.is_correct) correct7 += 1
      }
      if (ageMs <= THIRTY_DAYS_MS) {
        answered30 += 1
        if (r.is_correct) correct30 += 1
      }
      const d = new Date(ts)
      const dayKey = `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(
        d.getUTCDate(),
      ).padStart(2, '0')}`
      answerDays.add(dayKey)
    }

    const topicKey = deriveTopicKey(r.question_id, r.module_id)
    const t = topicAggs.get(topicKey) ?? { answered: 0, correct: 0 }
    t.answered += 1
    if (r.is_correct) t.correct += 1
    topicAggs.set(topicKey, t)

    const q = questionAggs.get(r.question_id) ?? { answered: 0, correct: 0 }
    q.answered += 1
    if (r.is_correct) q.correct += 1
    questionAggs.set(r.question_id, q)
  }

  const { currentStreakDays, longestStreakDays } = computeStreaks(answerDays)

  // ── 2. Weak topics (top 5 by correctRate ascending, min 2 answers) ──────
  // Minimum-attempts gate mirrors aggregate.ts's MIN_ATTEMPTS_FOR_DIFFICULTY
  // but relaxed to 2, because per-user sample sizes are small.
  const MIN_TOPIC_ATTEMPTS = 2
  const weakTopicsAll: LearnerWeakTopic[] = []
  for (const [key, agg] of topicAggs.entries()) {
    if (agg.answered < MIN_TOPIC_ATTEMPTS) continue
    const correctRate = Math.round((agg.correct / agg.answered) * 100)
    weakTopicsAll.push({
      topicKey: key,
      topicLabel: topicLabel(key),
      totalAnswered: agg.answered,
      totalCorrect: agg.correct,
      correctRate,
    })
  }
  // Weakest = lowest correct-rate first; tie-break by more attempts (more
  // reliable signal) then by topic key for determinism.
  weakTopicsAll.sort((a, b) => {
    if (a.correctRate !== b.correctRate) return a.correctRate - b.correctRate
    if (a.totalAnswered !== b.totalAnswered) return b.totalAnswered - a.totalAnswered
    return a.topicKey.localeCompare(b.topicKey)
  })
  const weakTopics = weakTopicsAll.slice(0, 5)

  // ── 3. Suggestions (top 3 weakest) ──────────────────────────────────────
  const suggestions: LearnerStudySuggestion[] = weakTopics.slice(0, 3).map((t) => ({
    topicKey: t.topicKey,
    topicLabel: t.topicLabel,
    correctRate: t.correctRate,
    reason:
      t.correctRate < 40
        ? `You're getting ${t.correctRate}% right on ${t.topicLabel}. Prioritise this first.`
        : t.correctRate < 60
          ? `${t.topicLabel} is below 60%. Focused practice will lift your score quickly.`
          : `Close to target on ${t.topicLabel} (${t.correctRate}%). A short session should tip you over.`,
    href: topicHref(t.topicKey),
  }))

  // ── 4. Difficulty distribution (per-question band, counted by attempts)──
  // For each question the user has attempted, classify by its per-user
  // correct-rate and count the TOTAL attempts in that band. This matches
  // the intent: "of all the questions I've answered, how many were hard
  // for me". If the user has only answered a question once, the rate is
  // 0% or 100% — we still include it; the user signal is the count of
  // attempts, not the confidence of the band.
  const bandCounts: Record<DifficultyBand, number> = {
    easy: 0,
    medium: 0,
    hard: 0,
    'very-hard': 0,
  }
  for (const agg of questionAggs.values()) {
    const rate = (agg.correct / agg.answered) * 100
    const band = bandForRate(rate)
    bandCounts[band] += agg.answered
  }
  const difficultyDistribution: LearnerDifficultyBucket[] = (
    ['easy', 'medium', 'hard', 'very-hard'] as DifficultyBand[]
  ).map((difficulty) => {
    const count = bandCounts[difficulty]
    const percentage = totalAnswered > 0 ? Math.round((count / totalAnswered) * 100) : 0
    return { difficulty, count, percentage }
  })

  return {
    userId,
    progress: {
      totalAnswered,
      totalCorrect,
      correctRateOverall: totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0,
      answeredLast7Days: answered7,
      correctRateLast7Days: answered7 > 0 ? Math.round((correct7 / answered7) * 100) : 0,
      answeredLast30Days: answered30,
      correctRateLast30Days: answered30 > 0 ? Math.round((correct30 / answered30) * 100) : 0,
      currentStreakDays,
      longestStreakDays,
    },
    weakTopics,
    suggestions,
    difficultyDistribution,
    hasData: true,
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function computeStreaks(answerDays: Set<string>): {
  currentStreakDays: number
  longestStreakDays: number
} {
  if (answerDays.size === 0) return { currentStreakDays: 0, longestStreakDays: 0 }

  // Convert YYYY-MM-DD (UTC) strings to sorted date array.
  const dates = Array.from(answerDays)
    .map((s) => {
      const [y, m, d] = s.split('-').map((n) => parseInt(n, 10))
      return Date.UTC(y, m - 1, d)
    })
    .sort((a, b) => a - b)

  const DAY_MS = 24 * 60 * 60 * 1000

  // Longest streak: walk sorted dates, increment when consecutive.
  let longest = 1
  let run = 1
  for (let i = 1; i < dates.length; i++) {
    if (dates[i] - dates[i - 1] === DAY_MS) {
      run += 1
      if (run > longest) longest = run
    } else {
      run = 1
    }
  }

  // Current streak: starting from the most recent answer day, extend
  // backwards while consecutive. Allow "today OR yesterday" as anchor so
  // a student who finished studying last night still sees a streak today.
  const now = new Date()
  const todayUtc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  const yesterdayUtc = todayUtc - DAY_MS
  const lastDay = dates[dates.length - 1]
  let current = 0
  if (lastDay === todayUtc || lastDay === yesterdayUtc) {
    current = 1
    let expected = lastDay - DAY_MS
    for (let i = dates.length - 2; i >= 0; i--) {
      if (dates[i] === expected) {
        current += 1
        expected -= DAY_MS
      } else if (dates[i] < expected) {
        break
      }
      // (dates[i] > expected is impossible because dates are unique + sorted)
    }
  }

  return {
    currentStreakDays: current,
    longestStreakDays: Math.max(longest, current),
  }
}

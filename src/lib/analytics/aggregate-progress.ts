/**
 * Pure aggregation functions over the public-stats tables
 * (`progress_poems`, `games`, `quizzes`, `reading_age`).
 *
 * Design rules
 * ────────────
 * 1. The functions take a Supabase **server (SSR) client** — i.e. the
 *    one returned by `createServerSupabaseClient()`. RLS therefore
 *    applies to whatever the calling user can see. We never reach for
 *    the service-role key here: the `/api/analytics/leaderboards`
 *    endpoint is public and the underlying tables expose only the rows
 *    that policy grants to anon/auth roles.
 *
 * 2. **Zero PII in outputs.** Returns are limited to counts, averages,
 *    and small distributions keyed by content IDs (poem_id, quiz_id,
 *    question_id, board, game). User IDs, emails, names — anything
 *    that could identify a learner — are stripped before the row
 *    leaves the function. A defensive `redactPII` pass on the API
 *    boundary catches anything we miss.
 *
 * 3. Pure with respect to its argument: no module-level singletons,
 *    no global caches. Take the client, return the data.
 */

import type { SupabaseClient } from '@supabase/supabase-js'

// ─── Types ──────────────────────────────────────────────────────────────

export interface PopularPoem {
  poemId: string
  board: string | null
  reads: number
}

export interface HardestQuestion {
  questionId: string
  quizId: string
  attempts: number
  averageScore: number
}

export interface BoardScore {
  board: string
  averageScore: number
  attempts: number
}

export interface GameEngagement {
  game: string
  plays: number
  averageTimeSeconds: number
}

export interface LeaderboardAggregations {
  popularPoems: PopularPoem[]
  hardestQuestions: HardestQuestion[]
  averageScoreByBoard: BoardScore[]
  engagementByGame: GameEngagement[]
  generatedAt: string
}

// ─── PII keys to strip on output ────────────────────────────────────────

// Whitelist approach would be safer but would require shape coupling
// between this file and the API route. Blacklist keeps the redactor
// generic and lets us layer it as defence-in-depth.
const PII_KEYS = new Set<string>([
  'user_id',
  'userId',
  'student_id',
  'studentId',
  'parent_id',
  'parentId',
  'teacher_id',
  'teacherId',
  'email',
  'full_name',
  'fullName',
  'first_name',
  'firstName',
  'last_name',
  'lastName',
  'name',
  'phone',
  'ip',
  'ip_address',
  'ipAddress',
  'profile_id',
  'profileId',
  'auth_id',
  'authId',
])

/**
 * Recursively walk a JSON-shaped value and strip any keys that match
 * the PII blacklist. Defensive — the aggregations above already exclude
 * these columns from their `select(...)` calls, but a future schema
 * change or a typo'd column rename could let one slip through. Cheap
 * to run, cheap to reason about.
 */
export function redactPII<T>(value: T): T {
  if (value === null || value === undefined) return value
  if (Array.isArray(value)) {
    return value.map((v) => redactPII(v)) as unknown as T
  }
  if (typeof value === 'object') {
    const out: Record<string, unknown> = {}
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (PII_KEYS.has(k)) continue
      out[k] = redactPII(v)
    }
    return out as unknown as T
  }
  return value
}

// ─── popularPoems ───────────────────────────────────────────────────────

interface PoemProgressRow {
  poem_id: string
  board: string | null
}

/**
 * Top 20 poems by `progress_poems` row count.
 *
 * Optionally filtered to a single exam board. Counts are derived from
 * the raw rows the calling user can see under RLS — for the public
 * leaderboards endpoint this is everything that policy exposes to
 * `anon`. We fetch up to 10k rows and tally in-process; the pg_count
 * route requires a stored function that doesn't exist in this schema.
 */
export async function popularPoems(
  supabase: SupabaseClient,
  boardFilter?: string,
): Promise<PopularPoem[]> {
  let query = supabase.from('progress_poems').select('poem_id, board').limit(10_000)

  if (boardFilter) {
    query = query.eq('board', boardFilter)
  }

  const { data, error } = await query
  if (error || !data) return []

  const tally = new Map<string, { board: string | null; reads: number }>()
  for (const row of data as PoemProgressRow[]) {
    if (!row.poem_id) continue
    const existing = tally.get(row.poem_id)
    if (existing) {
      existing.reads += 1
    } else {
      tally.set(row.poem_id, { board: row.board ?? null, reads: 1 })
    }
  }

  return Array.from(tally.entries())
    .map(([poemId, { board, reads }]) => ({ poemId, board, reads }))
    .sort((a, b) => b.reads - a.reads)
    .slice(0, 20)
}

// ─── hardestQuestions ───────────────────────────────────────────────────

interface QuizRow {
  question_id: string | null
  quiz_id: string | null
  best_score: number | null
}

/**
 * Questions whose **average best_score is below 50%**.
 *
 * Ranked by ascending average (hardest first), capped at 50 entries.
 * `best_score` is treated as a percentage (0–100); rows missing the
 * field are skipped rather than silently coerced.
 */
export async function hardestQuestions(
  supabase: SupabaseClient,
  quizId?: string,
): Promise<HardestQuestion[]> {
  let query = supabase.from('quizzes').select('question_id, quiz_id, best_score').limit(10_000)

  if (quizId) {
    query = query.eq('quiz_id', quizId)
  }

  const { data, error } = await query
  if (error || !data) return []

  const stats = new Map<string, { quizId: string; total: number; count: number }>()
  for (const row of data as QuizRow[]) {
    if (!row.question_id || row.best_score === null || row.best_score === undefined) continue
    const key = row.question_id
    const existing = stats.get(key)
    if (existing) {
      existing.total += row.best_score
      existing.count += 1
    } else {
      stats.set(key, {
        quizId: row.quiz_id ?? '',
        total: row.best_score,
        count: 1,
      })
    }
  }

  const out: HardestQuestion[] = []
  for (const [questionId, { quizId: qid, total, count }] of stats) {
    const averageScore = total / count
    if (averageScore < 50) {
      out.push({
        questionId,
        quizId: qid,
        attempts: count,
        averageScore: Math.round(averageScore * 10) / 10,
      })
    }
  }

  return out.sort((a, b) => a.averageScore - b.averageScore).slice(0, 50)
}

// ─── averageScoreByBoard ────────────────────────────────────────────────

interface BoardScoreRow {
  board: string | null
  best_score: number | null
}

/**
 * Average `best_score` per board across all quiz attempts the caller
 * can read. Rows lacking either column are skipped.
 */
export async function averageScoreByBoard(supabase: SupabaseClient): Promise<BoardScore[]> {
  const { data, error } = await supabase.from('quizzes').select('board, best_score').limit(10_000)

  if (error || !data) return []

  const stats = new Map<string, { total: number; count: number }>()
  for (const row of data as BoardScoreRow[]) {
    if (!row.board || row.best_score === null || row.best_score === undefined) continue
    const existing = stats.get(row.board)
    if (existing) {
      existing.total += row.best_score
      existing.count += 1
    } else {
      stats.set(row.board, { total: row.best_score, count: 1 })
    }
  }

  return Array.from(stats.entries())
    .map(([board, { total, count }]) => ({
      board,
      averageScore: Math.round((total / count) * 10) / 10,
      attempts: count,
    }))
    .sort((a, b) => b.averageScore - a.averageScore)
}

// ─── engagementByGame ───────────────────────────────────────────────────

interface GameRow {
  game: string | null
  time_spent_seconds: number | null
}

/**
 * Per-game total play count and average duration in seconds. `game` is
 * a short slug (e.g. `word-storm`, `verb-vortex`) — never a row PK.
 */
export async function engagementByGame(supabase: SupabaseClient): Promise<GameEngagement[]> {
  const { data, error } = await supabase
    .from('games')
    .select('game, time_spent_seconds')
    .limit(10_000)

  if (error || !data) return []

  const stats = new Map<string, { plays: number; totalTime: number; timeSamples: number }>()
  for (const row of data as GameRow[]) {
    if (!row.game) continue
    const existing = stats.get(row.game) ?? { plays: 0, totalTime: 0, timeSamples: 0 }
    existing.plays += 1
    if (row.time_spent_seconds !== null && row.time_spent_seconds !== undefined) {
      existing.totalTime += row.time_spent_seconds
      existing.timeSamples += 1
    }
    stats.set(row.game, existing)
  }

  return Array.from(stats.entries())
    .map(([game, { plays, totalTime, timeSamples }]) => ({
      game,
      plays,
      averageTimeSeconds: timeSamples > 0 ? Math.round(totalTime / timeSamples) : 0,
    }))
    .sort((a, b) => b.plays - a.plays)
}

// ─── Convenience: build the full payload ────────────────────────────────

/**
 * Fan out all four aggregations in parallel and return the combined
 * payload. The route handler still calls `redactPII` on the result as a
 * defensive second pass — keep it that way.
 */
export async function buildLeaderboardAggregations(
  supabase: SupabaseClient,
): Promise<LeaderboardAggregations> {
  const [poems, questions, boards, games] = await Promise.all([
    popularPoems(supabase),
    hardestQuestions(supabase),
    averageScoreByBoard(supabase),
    engagementByGame(supabase),
  ])

  return {
    popularPoems: poems,
    hardestQuestions: questions,
    averageScoreByBoard: boards,
    engagementByGame: games,
    generatedAt: new Date().toISOString(),
  }
}

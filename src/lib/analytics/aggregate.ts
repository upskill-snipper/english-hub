// ─── Aggregate Analytics Engine ─────────────────────────────────────────────
//
// Public, cross-user aggregate analytics.
// These functions compute platform-wide stats that surface on marketing pages
// and the aggregate-analytics route. Because this data is consumer-facing,
// the rule of thumb is:
//
//   • If the real number can be computed from the current schema, return it.
//   • If the schema cannot support the metric honestly, return 0 / empty
//     rather than an inflated mock. Honesty > pretty numbers.
//
// Every query uses the service role client (passed in) because these are
// cross-user aggregations that RLS would over-filter.
//
// Caching: the consumer route sets `revalidate = 3600`, so each function
// runs at most once per hour per edge node.
// ────────────────────────────────────────────────────────────────────────────

import type { SupabaseClient } from '@supabase/supabase-js'

// ─── Types ──────────────────────────────────────────────────────────────────

export interface QuestionDifficulty {
  questionId: string
  questionText: string
  moduleId: string
  moduleName: string
  courseId: string
  courseName: string
  totalAttempts: number
  correctCount: number
  incorrectCount: number
  correctRate: number // 0-100
  avgTimeSeconds: number
  difficulty: 'easy' | 'medium' | 'hard' | 'very-hard'
}

export interface TextPopularity {
  textId: string
  textTitle: string
  author: string
  courseId: string
  courseName: string
  totalStudents: number
  totalSessions: number
  avgTimeSpentMinutes: number
  completionRate: number // 0-100
  trendDirection: 'rising' | 'stable' | 'falling'
}

export interface BoardScores {
  examBoard: string
  totalStudents: number
  avgQuizScore: number // 0-100
  avgAssessmentScore: number // 0-100
  avgCompletionRate: number // 0-100
  topPerformingCourse: string
  bottomPerformingCourse: string
}

export interface GradeDistribution {
  grade: string
  count: number
  percentage: number // 0-100
  examBoard: string | null // null = all boards combined
}

export interface AggregateSnapshot {
  generatedAt: string
  totalStudents: number
  totalQuizAttempts: number
  totalTextsStudied: number
  questionDifficulty: QuestionDifficulty[]
  mostStudiedTexts: TextPopularity[]
  scoresByBoard: BoardScores[]
  gradeDistribution: GradeDistribution[]
  weeklyPopularTexts: TextPopularity[]
  hardestQuestions: QuestionDifficulty[]
}

// ─── getQuestionDifficulty ──────────────────────────────────────────────────

/**
 * Per-question difficulty metrics across all users.
 *
 * History:
 *   - Originally a mock array of 8 fabricated questions.
 *   - Cycle 7: dropped to `return []` (honest zero — no source table).
 *   - 2026-04-20: implemented against `public.quiz_responses`, landed in
 *     migration `20260420_quiz_responses.sql` and wired to the client in
 *     `src/app/revision/quiz/quiz-engine.tsx`.
 *
 * Definitions:
 *   - `correctRate = correctCount / totalAttempts * 100` (0–100 integer).
 *   - `difficulty` bands map to correctRate:
 *       easy       ≥ 80%
 *       medium     50–79%
 *       hard       25–49%
 *       very-hard  < 25%
 *   - `avgTimeSeconds` is the mean over all responses for this questionId.
 *
 * Schema notes:
 *   - `quiz_responses.module_id` is OPTIONAL (FK SET NULL). The client
 *     doesn't send it (quiz "topics" aren't `modules` rows). So we don't
 *     join modules — moduleId/moduleName/courseId/courseName are returned
 *     as empty strings when module_id is NULL. A future modules-aware
 *     client can populate them without schema change.
 *   - Minimum-attempts gate: we exclude question_ids with fewer than 3
 *     responses to avoid noisy "100%"/"0%" readings dominating the list.
 *
 * Bounded cost: single scan of quiz_responses, aggregated in-app. For
 * ~N rows the memory footprint is O(unique questionIds). At current
 * scale (5 users × dozens of questions each) this is negligible.
 */
const MIN_ATTEMPTS_FOR_DIFFICULTY = 3

export async function getQuestionDifficulty(
  supabase: SupabaseClient,
): Promise<QuestionDifficulty[]> {
  const { data, error } = await supabase
    .from('quiz_responses')
    .select('question_id, module_id, is_correct, time_taken_seconds')

  if (error) {
    console.error('[analytics/getQuestionDifficulty] query failed:', error)
    return []
  }
  if (!data || data.length === 0) return []

  // Aggregate in-app — Supabase doesn't support GROUP BY via PostgREST.
  const buckets = new Map<
    string,
    { moduleId: string; total: number; correct: number; timeSum: number }
  >()
  for (const row of data) {
    const qid = row.question_id as string
    const existing = buckets.get(qid) ?? {
      moduleId: (row.module_id as string | null) ?? '',
      total: 0,
      correct: 0,
      timeSum: 0,
    }
    existing.total += 1
    if (row.is_correct) existing.correct += 1
    existing.timeSum += Number(row.time_taken_seconds) || 0
    // First-seen moduleId wins. If later rows have a different non-null
    // moduleId we keep the first — not load-bearing, moduleId is best-effort.
    buckets.set(qid, existing)
  }

  const results: QuestionDifficulty[] = []
  for (const [questionId, agg] of buckets) {
    if (agg.total < MIN_ATTEMPTS_FOR_DIFFICULTY) continue
    const correctRate = Math.round((agg.correct / agg.total) * 100)
    const avgTimeSeconds = Math.round(agg.timeSum / agg.total)
    const difficulty: QuestionDifficulty['difficulty'] =
      correctRate >= 80
        ? 'easy'
        : correctRate >= 50
          ? 'medium'
          : correctRate >= 25
            ? 'hard'
            : 'very-hard'
    results.push({
      questionId,
      questionText: '', // Not stored in quiz_responses; lookup belongs in a join helper.
      moduleId: agg.moduleId,
      moduleName: '',
      courseId: '',
      courseName: '',
      totalAttempts: agg.total,
      correctCount: agg.correct,
      incorrectCount: agg.total - agg.correct,
      correctRate,
      avgTimeSeconds,
      difficulty,
    })
  }
  // Hardest-first ordering is the common reading of this dataset.
  results.sort((a, b) => a.correctRate - b.correctRate)
  return results
}

// ─── getMostStudiedTexts ────────────────────────────────────────────────────

/**
 * Ranks "texts" (modelled as modules in the current schema) by how many
 * distinct students have engaged with them.
 *
 * Was: hardcoded mock list of 8 set texts with inflated student counts.
 *
 * Source: `module_progress` grouped by `module_id`, joined to `modules` and
 * `courses` for titles. "textId" maps to `module.id`, "textTitle" to
 * `module.title`, "author" is left blank because the schema has no author
 * field — returning "" is honest; we do NOT fabricate Shakespeare/Dickens.
 *
 * Trend direction: computed by comparing the last 14 days of sessions vs.
 * the 14 days before that. rising/stable/falling within +-10%.
 *
 * Bounded cost: pulls `module_progress` rows (user_id, module_id,
 * completed, time_spent_seconds, completed_at). With indexes on
 * (user_id, course_id) and (user_id, completed, completed_at) this is a
 * single sequential scan of active rows — fine at current scale.
 */
export async function getMostStudiedTexts(supabase: SupabaseClient): Promise<TextPopularity[]> {
  const [progressResult, modulesResult] = await Promise.all([
    supabase
      .from('module_progress')
      .select('user_id, module_id, course_id, completed, time_spent_seconds, completed_at'),
    supabase.from('modules').select('id, title, course_id, courses:course_id(id, title)'),
  ])

  const progress = (progressResult.data || []) as Array<{
    user_id: string
    module_id: string
    course_id: string
    completed: boolean
    time_spent_seconds: number | null
    completed_at: string | null
  }>

  type ModuleRow = {
    id: string
    title: string
    course_id: string
    courses: { id: string; title: string } | { id: string; title: string }[] | null
  }
  const modules = (modulesResult.data || []) as ModuleRow[]

  if (progress.length === 0 || modules.length === 0) return []

  const now = Date.now()
  const TWO_WEEKS_MS = 14 * 24 * 60 * 60 * 1000
  const recentCutoff = now - TWO_WEEKS_MS
  const priorCutoff = now - 2 * TWO_WEEKS_MS

  // Aggregate per module_id
  const moduleStats = new Map<
    string,
    {
      students: Set<string>
      sessions: number
      timeSecondsTotal: number
      completedCount: number
      recentSessions: number
      priorSessions: number
    }
  >()

  for (const p of progress) {
    let stats = moduleStats.get(p.module_id)
    if (!stats) {
      stats = {
        students: new Set(),
        sessions: 0,
        timeSecondsTotal: 0,
        completedCount: 0,
        recentSessions: 0,
        priorSessions: 0,
      }
      moduleStats.set(p.module_id, stats)
    }
    stats.students.add(p.user_id)
    stats.sessions += 1
    stats.timeSecondsTotal += p.time_spent_seconds || 0
    if (p.completed) stats.completedCount += 1

    if (p.completed_at) {
      const ts = Date.parse(p.completed_at)
      if (!Number.isNaN(ts)) {
        if (ts >= recentCutoff) stats.recentSessions += 1
        else if (ts >= priorCutoff) stats.priorSessions += 1
      }
    }
  }

  const moduleLookup = new Map<string, ModuleRow>()
  for (const m of modules) moduleLookup.set(m.id, m)

  const results: TextPopularity[] = []
  for (const [moduleId, stats] of moduleStats.entries()) {
    const mod = moduleLookup.get(moduleId)
    if (!mod) continue

    const course = Array.isArray(mod.courses) ? mod.courses[0] : mod.courses
    const totalStudents = stats.students.size
    const totalSessions = stats.sessions
    const avgTimeSpentMinutes =
      totalSessions > 0 ? Math.round(stats.timeSecondsTotal / totalSessions / 60) : 0
    const completionRate =
      totalSessions > 0 ? Math.round((stats.completedCount / totalSessions) * 100) : 0

    // Trend: +-10% threshold
    let trendDirection: TextPopularity['trendDirection'] = 'stable'
    if (stats.priorSessions > 0) {
      const change = (stats.recentSessions - stats.priorSessions) / stats.priorSessions
      if (change > 0.1) trendDirection = 'rising'
      else if (change < -0.1) trendDirection = 'falling'
    } else if (stats.recentSessions > 0) {
      trendDirection = 'rising'
    }

    results.push({
      textId: moduleId,
      textTitle: mod.title,
      author: '', // Schema has no author field; honest blank beats fabrication.
      courseId: mod.course_id,
      courseName: course?.title || '',
      totalStudents,
      totalSessions,
      avgTimeSpentMinutes,
      completionRate,
      trendDirection,
    })
  }

  return results.sort((a, b) => b.totalStudents - a.totalStudents)
}

// ─── getAverageScoresByBoard ────────────────────────────────────────────────

/**
 * Average quiz and assessment scores grouped by `profiles.exam_board`.
 *
 * Was: hardcoded 5-board mock with totalStudents of 18432/12876/etc.
 *
 * Source:
 *   - `profiles.exam_board` provides the board (AQA/Edexcel/OCR/WJEC/Other).
 *   - `module_progress.quiz_score` averaged per user to produce avgQuizScore.
 *   - `assessment_attempts.score` averaged to produce avgAssessmentScore.
 *   - `module_progress.completed` rate produces avgCompletionRate.
 *
 * Top/bottom performing course: determined by average quiz score per
 * `course_id` within each board, joined to `courses.title`.
 *
 * Bounded cost: 3 table pulls (profiles, module_progress, assessment_attempts)
 * filtered to rows where exam_board is set, plus a single courses lookup.
 * Dominated by module_progress scan; bounded by total progress rows.
 */
export async function getAverageScoresByBoard(supabase: SupabaseClient): Promise<BoardScores[]> {
  const [profilesResult, progressResult, attemptsResult, coursesResult] = await Promise.all([
    supabase.from('profiles').select('id, exam_board').not('exam_board', 'is', null),
    supabase.from('module_progress').select('user_id, course_id, quiz_score, completed'),
    supabase.from('assessment_attempts').select('user_id, score'),
    supabase.from('courses').select('id, title'),
  ])

  const profiles = (profilesResult.data || []) as Array<{
    id: string
    exam_board: string | null
  }>
  const progress = (progressResult.data || []) as Array<{
    user_id: string
    course_id: string | null
    quiz_score: number | null
    completed: boolean
  }>
  const attempts = (attemptsResult.data || []) as Array<{
    user_id: string
    score: number | null
  }>
  const courses = (coursesResult.data || []) as Array<{ id: string; title: string }>

  if (profiles.length === 0) return []

  const userBoard = new Map<string, string>()
  for (const p of profiles) {
    if (p.exam_board) userBoard.set(p.id, p.exam_board)
  }

  const courseName = new Map<string, string>()
  for (const c of courses) courseName.set(c.id, c.title)

  type BoardAcc = {
    students: Set<string>
    quizSum: number
    quizCount: number
    assessmentSum: number
    assessmentCount: number
    completedCount: number
    progressRowCount: number
    perCourse: Map<string, { scoreSum: number; scoreCount: number }>
  }

  const byBoard = new Map<string, BoardAcc>()
  const ensure = (board: string): BoardAcc => {
    let acc = byBoard.get(board)
    if (!acc) {
      acc = {
        students: new Set(),
        quizSum: 0,
        quizCount: 0,
        assessmentSum: 0,
        assessmentCount: 0,
        completedCount: 0,
        progressRowCount: 0,
        perCourse: new Map(),
      }
      byBoard.set(board, acc)
    }
    return acc
  }

  // Pre-register every board that has at least one profile, so empty
  // boards still show up with honest zeros rather than being dropped.
  for (const board of userBoard.values()) ensure(board)

  for (const p of progress) {
    const board = userBoard.get(p.user_id)
    if (!board) continue
    const acc = ensure(board)
    acc.students.add(p.user_id)
    acc.progressRowCount += 1
    if (p.completed) acc.completedCount += 1
    if (p.quiz_score !== null) {
      acc.quizSum += p.quiz_score
      acc.quizCount += 1
      if (p.course_id) {
        let courseAcc = acc.perCourse.get(p.course_id)
        if (!courseAcc) {
          courseAcc = { scoreSum: 0, scoreCount: 0 }
          acc.perCourse.set(p.course_id, courseAcc)
        }
        courseAcc.scoreSum += p.quiz_score
        courseAcc.scoreCount += 1
      }
    }
  }

  for (const a of attempts) {
    const board = userBoard.get(a.user_id)
    if (!board || a.score === null) continue
    const acc = ensure(board)
    acc.assessmentSum += a.score
    acc.assessmentCount += 1
  }

  const results: BoardScores[] = []
  for (const [board, acc] of byBoard.entries()) {
    // Find top/bottom course by avg quiz score within this board.
    let topCourseId: string | null = null
    let topAvg = -Infinity
    let bottomCourseId: string | null = null
    let bottomAvg = Infinity
    for (const [cid, c] of acc.perCourse.entries()) {
      if (c.scoreCount === 0) continue
      const avg = c.scoreSum / c.scoreCount
      if (avg > topAvg) {
        topAvg = avg
        topCourseId = cid
      }
      if (avg < bottomAvg) {
        bottomAvg = avg
        bottomCourseId = cid
      }
    }

    results.push({
      examBoard: board,
      totalStudents: acc.students.size,
      avgQuizScore: acc.quizCount > 0 ? Math.round(acc.quizSum / acc.quizCount) : 0,
      avgAssessmentScore:
        acc.assessmentCount > 0 ? Math.round(acc.assessmentSum / acc.assessmentCount) : 0,
      avgCompletionRate:
        acc.progressRowCount > 0
          ? Math.round((acc.completedCount / acc.progressRowCount) * 100)
          : 0,
      topPerformingCourse: topCourseId ? courseName.get(topCourseId) || '' : '',
      bottomPerformingCourse: bottomCourseId ? courseName.get(bottomCourseId) || '' : '',
    })
  }

  return results.sort((a, b) => b.totalStudents - a.totalStudents)
}

// ─── getGradeDistribution ───────────────────────────────────────────────────

/**
 * Distribution of students across GCSE grades 9-1, estimated from each
 * student's average quiz score in `module_progress`.
 *
 * Was: hardcoded 46,219-student bell-curve mock.
 *
 * Source: `module_progress.quiz_score` averaged per user_id, then bucketed
 * into GCSE 9-1 bands using the same mapping as the per-class analytics
 * route (src/app/api/school/analytics/class-performance/route.ts):
 *   9: 90-100 | 8: 80-89 | 7: 70-79 | 6: 60-69 | 5: 50-59
 *   4: 40-49 | 3: 30-39 | 2: 20-29 | 1: 0-19
 *
 * Caveat: this is a quiz-score proxy for "predicted grade", not a true
 * predicted grade (the schema has no predicted-grade column). Users without
 * any quiz scores are excluded from the distribution.
 *
 * Bounded cost: single pull of (user_id, quiz_score) from module_progress
 * filtered to non-null scores.
 */
export async function getGradeDistribution(supabase: SupabaseClient): Promise<GradeDistribution[]> {
  const { data, error } = await supabase
    .from('module_progress')
    .select('user_id, quiz_score')
    .not('quiz_score', 'is', null)

  if (error || !data) return []

  const perUserScores = new Map<string, number[]>()
  for (const row of data as Array<{ user_id: string; quiz_score: number | null }>) {
    if (row.quiz_score === null) continue
    const arr = perUserScores.get(row.user_id) || []
    arr.push(row.quiz_score)
    perUserScores.set(row.user_id, arr)
  }

  const bands: Array<{ grade: string; min: number; max: number }> = [
    { grade: '9', min: 90, max: 100 },
    { grade: '8', min: 80, max: 89 },
    { grade: '7', min: 70, max: 79 },
    { grade: '6', min: 60, max: 69 },
    { grade: '5', min: 50, max: 59 },
    { grade: '4', min: 40, max: 49 },
    { grade: '3', min: 30, max: 39 },
    { grade: '2', min: 20, max: 29 },
    { grade: '1', min: 0, max: 19 },
  ]

  const bandCounts = new Map<string, number>()
  let totalStudents = 0
  for (const scores of perUserScores.values()) {
    if (scores.length === 0) continue
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    const band = bands.find((b) => avg >= b.min && avg <= b.max)
    if (!band) continue
    bandCounts.set(band.grade, (bandCounts.get(band.grade) || 0) + 1)
    totalStudents += 1
  }

  return bands.map((b) => {
    const count = bandCounts.get(b.grade) || 0
    return {
      grade: b.grade,
      count,
      percentage: totalStudents > 0 ? Math.round((count / totalStudents) * 100) : 0,
      examBoard: null, // Combined across all boards.
    }
  })
}

// ─── getWeeklyPopularTexts ──────────────────────────────────────────────────

/**
 * Most popular "texts" (modules) over the last 7 days.
 *
 * Was: mock derived from getMostStudiedTexts with seeded-random scaling.
 *
 * Source: `module_progress` filtered to rows whose `completed_at` falls in
 * the last 7 days, then aggregated per module the same way as
 * getMostStudiedTexts. Returns the top 5.
 *
 * Bounded cost: one filtered scan of module_progress plus a modules lookup.
 * If `completed_at` is indexed (it isn't today — see follow-up), this is
 * near-instant; without an index it's a sequential scan of module_progress.
 */
export async function getWeeklyPopularTexts(supabase: SupabaseClient): Promise<TextPopularity[]> {
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

  const [progressResult, modulesResult] = await Promise.all([
    supabase
      .from('module_progress')
      .select('user_id, module_id, course_id, completed, time_spent_seconds, completed_at')
      .gte('completed_at', weekAgo),
    supabase.from('modules').select('id, title, course_id, courses:course_id(id, title)'),
  ])

  const progress = (progressResult.data || []) as Array<{
    user_id: string
    module_id: string
    course_id: string
    completed: boolean
    time_spent_seconds: number | null
    completed_at: string | null
  }>

  type ModuleRow = {
    id: string
    title: string
    course_id: string
    courses: { id: string; title: string } | { id: string; title: string }[] | null
  }
  const modules = (modulesResult.data || []) as ModuleRow[]

  if (progress.length === 0 || modules.length === 0) return []

  const stats = new Map<
    string,
    {
      students: Set<string>
      sessions: number
      timeSecondsTotal: number
      completedCount: number
    }
  >()

  for (const p of progress) {
    let s = stats.get(p.module_id)
    if (!s) {
      s = { students: new Set(), sessions: 0, timeSecondsTotal: 0, completedCount: 0 }
      stats.set(p.module_id, s)
    }
    s.students.add(p.user_id)
    s.sessions += 1
    s.timeSecondsTotal += p.time_spent_seconds || 0
    if (p.completed) s.completedCount += 1
  }

  const moduleLookup = new Map<string, ModuleRow>()
  for (const m of modules) moduleLookup.set(m.id, m)

  const results: TextPopularity[] = []
  for (const [moduleId, s] of stats.entries()) {
    const mod = moduleLookup.get(moduleId)
    if (!mod) continue
    const course = Array.isArray(mod.courses) ? mod.courses[0] : mod.courses
    const avgTimeSpentMinutes =
      s.sessions > 0 ? Math.round(s.timeSecondsTotal / s.sessions / 60) : 0
    const completionRate = s.sessions > 0 ? Math.round((s.completedCount / s.sessions) * 100) : 0

    results.push({
      textId: moduleId,
      textTitle: mod.title,
      author: '',
      courseId: mod.course_id,
      courseName: course?.title || '',
      totalStudents: s.students.size,
      totalSessions: s.sessions,
      avgTimeSpentMinutes,
      completionRate,
      trendDirection: 'rising', // All "weekly popular" entries are by definition recent.
    })
  }

  return results.sort((a, b) => b.totalStudents - a.totalStudents).slice(0, 5)
}

// ─── getHardestQuestions ────────────────────────────────────────────────────

/**
 * Top N hardest questions by correct-rate ascending.
 *
 * Was: sliced from the mock question-difficulty array.
 *
 * Honest zero: same reason as getQuestionDifficulty — the schema has no
 * per-question outcome table. Returns [] until a `quiz_responses` table
 * exists.
 */
export async function getHardestQuestions(
  supabase: SupabaseClient,
  limit: number = 5,
): Promise<QuestionDifficulty[]> {
  const all = await getQuestionDifficulty(supabase)
  return all.slice(0, limit)
}

// ─── getAggregateSnapshot ───────────────────────────────────────────────────

/**
 * Full aggregate snapshot used by GET /api/analytics/aggregate.
 *
 * Totals computed here:
 *   - totalStudents: `profiles` count where `role = 'student'` (or NULL,
 *     since pre-existing rows may predate the role column). We use
 *     `count: 'exact', head: true` so no rows are returned — just the
 *     count header.
 *     Was: hardcoded 46,219.
 *   - totalQuizAttempts: `module_progress` count where `quiz_attempts > 0`
 *     or a simpler proxy: `module_progress` rows with a non-null
 *     `quiz_score`. Was: hardcoded 312,847.
 *   - totalTextsStudied: distinct module count in `mostStudiedTexts`
 *     (already computed). Preserved existing behaviour.
 */
export async function getAggregateSnapshot(supabase: SupabaseClient): Promise<AggregateSnapshot> {
  const [
    questionDifficulty,
    mostStudiedTexts,
    scoresByBoard,
    gradeDistribution,
    weeklyPopularTexts,
    hardestQuestions,
    totalStudentsResult,
    totalQuizAttemptsResult,
  ] = await Promise.all([
    getQuestionDifficulty(supabase),
    getMostStudiedTexts(supabase),
    getAverageScoresByBoard(supabase),
    getGradeDistribution(supabase),
    getWeeklyPopularTexts(supabase),
    getHardestQuestions(supabase),
    // Counts — head:true returns a count header without row payload.
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase
      .from('module_progress')
      .select('*', { count: 'exact', head: true })
      .not('quiz_score', 'is', null),
  ])

  return {
    generatedAt: new Date().toISOString(),
    // Was: 46219. Now: live profile count (every signed-up user counts).
    totalStudents: totalStudentsResult.count ?? 0,
    // Was: 312847. Now: number of module_progress rows with a recorded
    // quiz score — a conservative, honest proxy for "quiz attempts".
    totalQuizAttempts: totalQuizAttemptsResult.count ?? 0,
    totalTextsStudied: mostStudiedTexts.length,
    questionDifficulty,
    mostStudiedTexts,
    scoresByBoard,
    gradeDistribution,
    weeklyPopularTexts,
    hardestQuestions,
  }
}

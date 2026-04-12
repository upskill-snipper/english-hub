// ─── Aggregate Analytics Engine ─────────────────────────────────────────────
//
// Public, cross-user aggregate analytics.
// These functions compute platform-wide stats that become proprietary data:
//   - Which questions are hardest
//   - Which poems/texts are most studied
//   - Average scores by exam board
//   - Grade distributions across the platform
//
// TODO(Phase-7): replace mock data with real Supabase queries throughout.
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

// ─── Mock Data Helpers ──────────────────────────────────────────────────────

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function difficultyFromRate(rate: number): QuestionDifficulty['difficulty'] {
  if (rate >= 80) return 'easy'
  if (rate >= 60) return 'medium'
  if (rate >= 40) return 'hard'
  return 'very-hard'
}

// ─── getQuestionDifficulty ──────────────────────────────────────────────────

/**
 * Returns difficulty metrics for all questions, ordered by correctRate ascending
 * (hardest first).
 */
export async function getQuestionDifficulty(
  _supabase: SupabaseClient
): Promise<QuestionDifficulty[]> {
  // TODO(Phase-7): replace with real Supabase queries
  // Real implementation would:
  //   SELECT question_id, COUNT(*) as total_attempts,
  //          SUM(CASE WHEN is_correct THEN 1 ELSE 0 END) as correct_count,
  //          AVG(time_taken_seconds) as avg_time
  //   FROM quiz_responses
  //   GROUP BY question_id
  //   ORDER BY (correct_count::float / total_attempts) ASC

  const mockQuestions: QuestionDifficulty[] = [
    {
      questionId: 'q-macbeth-act1-guilt',
      questionText: 'How does Shakespeare present the theme of guilt in Act 1?',
      moduleId: 'mod-macbeth-themes',
      moduleName: 'Macbeth: Key Themes',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalAttempts: 4823,
      correctCount: 1543,
      incorrectCount: 3280,
      correctRate: 32,
      avgTimeSeconds: 94,
      difficulty: 'very-hard',
    },
    {
      questionId: 'q-inspector-dramatic-irony',
      questionText: 'Identify the use of dramatic irony in the Inspector\'s final speech.',
      moduleId: 'mod-inspector-analysis',
      moduleName: 'An Inspector Calls: Analysis',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalAttempts: 5102,
      correctCount: 2142,
      incorrectCount: 2960,
      correctRate: 42,
      avgTimeSeconds: 78,
      difficulty: 'hard',
    },
    {
      questionId: 'q-ozymandias-structure',
      questionText: 'How does Shelley use the sonnet form to convey the theme of power?',
      moduleId: 'mod-power-conflict-poems',
      moduleName: 'Power & Conflict Poetry',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalAttempts: 6211,
      correctCount: 2794,
      incorrectCount: 3417,
      correctRate: 45,
      avgTimeSeconds: 82,
      difficulty: 'hard',
    },
    {
      questionId: 'q-christmas-carol-stave3',
      questionText: 'What is the significance of the Ghost of Christmas Present?',
      moduleId: 'mod-christmas-carol',
      moduleName: 'A Christmas Carol',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalAttempts: 7890,
      correctCount: 4576,
      incorrectCount: 3314,
      correctRate: 58,
      avgTimeSeconds: 65,
      difficulty: 'medium',
    },
    {
      questionId: 'q-lang-paper1-q2',
      questionText: 'Analyse how the writer uses language to create tension in lines 10-20.',
      moduleId: 'mod-lang-paper1',
      moduleName: 'Language Paper 1: Explorations',
      courseId: 'gcse-english-lang',
      courseName: 'GCSE English Language',
      totalAttempts: 8432,
      correctCount: 3373,
      incorrectCount: 5059,
      correctRate: 40,
      avgTimeSeconds: 112,
      difficulty: 'hard',
    },
    {
      questionId: 'q-romeo-juliet-prologue',
      questionText: 'What does the prologue reveal about fate in Romeo and Juliet?',
      moduleId: 'mod-romeo-juliet',
      moduleName: 'Romeo and Juliet',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalAttempts: 9100,
      correctCount: 7280,
      incorrectCount: 1820,
      correctRate: 80,
      avgTimeSeconds: 42,
      difficulty: 'easy',
    },
    {
      questionId: 'q-unseen-poetry-comparison',
      questionText: 'Compare how the two poets present the theme of loss.',
      moduleId: 'mod-unseen-poetry',
      moduleName: 'Unseen Poetry',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalAttempts: 3210,
      correctCount: 963,
      incorrectCount: 2247,
      correctRate: 30,
      avgTimeSeconds: 135,
      difficulty: 'very-hard',
    },
    {
      questionId: 'q-persuasive-techniques',
      questionText: 'Identify three persuasive techniques used in the extract.',
      moduleId: 'mod-lang-paper2',
      moduleName: 'Language Paper 2: Writers\' Viewpoints',
      courseId: 'gcse-english-lang',
      courseName: 'GCSE English Language',
      totalAttempts: 6780,
      correctCount: 5424,
      incorrectCount: 1356,
      correctRate: 80,
      avgTimeSeconds: 55,
      difficulty: 'easy',
    },
  ]

  return mockQuestions.sort((a, b) => a.correctRate - b.correctRate)
}

// ─── getMostStudiedTexts ────────────────────────────────────────────────────

/**
 * Returns texts/poems ranked by study popularity.
 */
export async function getMostStudiedTexts(
  _supabase: SupabaseClient
): Promise<TextPopularity[]> {
  // TODO(Phase-7): replace with real Supabase queries
  // Real implementation would:
  //   SELECT text_id, COUNT(DISTINCT user_id) as total_students,
  //          COUNT(*) as total_sessions,
  //          AVG(time_spent_seconds) / 60 as avg_time_minutes
  //   FROM study_sessions
  //   GROUP BY text_id
  //   ORDER BY total_students DESC

  const mockTexts: TextPopularity[] = [
    {
      textId: 'text-macbeth',
      textTitle: 'Macbeth',
      author: 'William Shakespeare',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 12453,
      totalSessions: 48921,
      avgTimeSpentMinutes: 34,
      completionRate: 78,
      trendDirection: 'rising',
    },
    {
      textId: 'text-inspector-calls',
      textTitle: 'An Inspector Calls',
      author: 'J.B. Priestley',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 11287,
      totalSessions: 41503,
      avgTimeSpentMinutes: 28,
      completionRate: 82,
      trendDirection: 'stable',
    },
    {
      textId: 'text-christmas-carol',
      textTitle: 'A Christmas Carol',
      author: 'Charles Dickens',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 10934,
      totalSessions: 38210,
      avgTimeSpentMinutes: 26,
      completionRate: 85,
      trendDirection: 'stable',
    },
    {
      textId: 'text-romeo-juliet',
      textTitle: 'Romeo and Juliet',
      author: 'William Shakespeare',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 9876,
      totalSessions: 35412,
      avgTimeSpentMinutes: 31,
      completionRate: 76,
      trendDirection: 'falling',
    },
    {
      textId: 'text-ozymandias',
      textTitle: 'Ozymandias',
      author: 'Percy Bysshe Shelley',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 8932,
      totalSessions: 22341,
      avgTimeSpentMinutes: 18,
      completionRate: 91,
      trendDirection: 'rising',
    },
    {
      textId: 'text-jekyll-hyde',
      textTitle: 'Jekyll and Hyde',
      author: 'Robert Louis Stevenson',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 7654,
      totalSessions: 28903,
      avgTimeSpentMinutes: 29,
      completionRate: 74,
      trendDirection: 'rising',
    },
    {
      textId: 'text-power-conflict',
      textTitle: 'Power & Conflict Anthology',
      author: 'Various Poets',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 7210,
      totalSessions: 31205,
      avgTimeSpentMinutes: 22,
      completionRate: 68,
      trendDirection: 'stable',
    },
    {
      textId: 'text-lord-flies',
      textTitle: 'Lord of the Flies',
      author: 'William Golding',
      courseId: 'gcse-english-lit',
      courseName: 'GCSE English Literature',
      totalStudents: 5431,
      totalSessions: 19832,
      avgTimeSpentMinutes: 27,
      completionRate: 71,
      trendDirection: 'falling',
    },
  ]

  return mockTexts.sort((a, b) => b.totalStudents - a.totalStudents)
}

// ─── getAverageScoresByBoard ────────────────────────────────────────────────

/**
 * Returns average quiz/assessment scores grouped by exam board.
 */
export async function getAverageScoresByBoard(
  _supabase: SupabaseClient
): Promise<BoardScores[]> {
  // TODO(Phase-7): replace with real Supabase queries
  // Real implementation would:
  //   SELECT p.exam_board,
  //          COUNT(DISTINCT mp.user_id) as total_students,
  //          AVG(mp.quiz_score) as avg_quiz_score,
  //          AVG(aa.score) as avg_assessment_score
  //   FROM profiles p
  //   JOIN module_progress mp ON mp.user_id = p.id
  //   LEFT JOIN assessment_attempts aa ON aa.user_id = p.id
  //   WHERE p.exam_board IS NOT NULL
  //   GROUP BY p.exam_board

  const mockBoardScores: BoardScores[] = [
    {
      examBoard: 'AQA',
      totalStudents: 18432,
      avgQuizScore: 67,
      avgAssessmentScore: 62,
      avgCompletionRate: 71,
      topPerformingCourse: 'A Christmas Carol',
      bottomPerformingCourse: 'Unseen Poetry',
    },
    {
      examBoard: 'Edexcel',
      totalStudents: 12876,
      avgQuizScore: 65,
      avgAssessmentScore: 60,
      avgCompletionRate: 68,
      topPerformingCourse: 'Romeo and Juliet',
      bottomPerformingCourse: 'Language Paper 1',
    },
    {
      examBoard: 'OCR',
      totalStudents: 8210,
      avgQuizScore: 69,
      avgAssessmentScore: 64,
      avgCompletionRate: 73,
      topPerformingCourse: 'An Inspector Calls',
      bottomPerformingCourse: 'Unseen Poetry',
    },
    {
      examBoard: 'WJEC',
      totalStudents: 4567,
      avgQuizScore: 66,
      avgAssessmentScore: 61,
      avgCompletionRate: 70,
      topPerformingCourse: 'Macbeth',
      bottomPerformingCourse: 'Language Paper 2',
    },
    {
      examBoard: 'CCEA',
      totalStudents: 2134,
      avgQuizScore: 68,
      avgAssessmentScore: 63,
      avgCompletionRate: 72,
      topPerformingCourse: 'A Christmas Carol',
      bottomPerformingCourse: 'Comparative Poetry',
    },
  ]

  return mockBoardScores.sort((a, b) => b.totalStudents - a.totalStudents)
}

// ─── getGradeDistribution ───────────────────────────────────────────────────

/**
 * Returns predicted grade distribution across all students,
 * optionally broken down by exam board.
 */
export async function getGradeDistribution(
  _supabase: SupabaseClient
): Promise<GradeDistribution[]> {
  // TODO(Phase-7): replace with real Supabase queries
  // Real implementation would:
  //   SELECT predicted_grade, exam_board, COUNT(*) as count
  //   FROM student_analytics_cache
  //   GROUP BY predicted_grade, exam_board
  //   ORDER BY predicted_grade

  const totalStudents = 46219

  // Combined distribution (all boards)
  const combinedDistribution: GradeDistribution[] = [
    { grade: '9', count: 2311, percentage: 5, examBoard: null },
    { grade: '8', count: 4160, percentage: 9, examBoard: null },
    { grade: '7', count: 6471, percentage: 14, examBoard: null },
    { grade: '6', count: 7856, percentage: 17, examBoard: null },
    { grade: '5', count: 8782, percentage: 19, examBoard: null },
    { grade: '4', count: 7856, percentage: 17, examBoard: null },
    { grade: '3', count: 5085, percentage: 11, examBoard: null },
    { grade: '2', count: 2773, percentage: 6, examBoard: null },
    { grade: '1', count: 925, percentage: 2, examBoard: null },
  ]

  return combinedDistribution
}

// ─── getWeeklyPopularTexts ──────────────────────────────────────────────────

/**
 * Returns the most popular texts in the last 7 days.
 */
export async function getWeeklyPopularTexts(
  _supabase: SupabaseClient
): Promise<TextPopularity[]> {
  // TODO(Phase-7): replace with real Supabase queries
  // Real implementation would filter study_sessions to last 7 days

  const allTexts = await getMostStudiedTexts(_supabase)

  // Simulate weekly data by adjusting numbers
  return allTexts.slice(0, 5).map((text, i) => ({
    ...text,
    totalStudents: Math.round(text.totalStudents * (0.08 + seededRandom(i + 42) * 0.04)),
    totalSessions: Math.round(text.totalSessions * (0.1 + seededRandom(i + 99) * 0.05)),
  }))
}

// ─── getHardestQuestions ────────────────────────────────────────────────────

/**
 * Returns the top N hardest questions by correct rate.
 */
export async function getHardestQuestions(
  supabase: SupabaseClient,
  limit: number = 5
): Promise<QuestionDifficulty[]> {
  // TODO(Phase-7): replace with real Supabase queries
  const allQuestions = await getQuestionDifficulty(supabase)
  return allQuestions.slice(0, limit)
}

// ─── getAggregateSnapshot ───────────────────────────────────────────────────

/**
 * Returns a full aggregate snapshot combining all metrics.
 * This is the primary function used by the API route.
 */
export async function getAggregateSnapshot(
  supabase: SupabaseClient
): Promise<AggregateSnapshot> {
  // TODO(Phase-7): replace with real Supabase queries for totals
  // Real implementation would run all queries in parallel:
  //   const [questions, texts, boards, grades] = await Promise.all([...])

  const [questionDifficulty, mostStudiedTexts, scoresByBoard, gradeDistribution, weeklyPopularTexts, hardestQuestions] =
    await Promise.all([
      getQuestionDifficulty(supabase),
      getMostStudiedTexts(supabase),
      getAverageScoresByBoard(supabase),
      getGradeDistribution(supabase),
      getWeeklyPopularTexts(supabase),
      getHardestQuestions(supabase),
    ])

  return {
    generatedAt: new Date().toISOString(),
    // TODO(Phase-7): replace with real counts from Supabase
    totalStudents: 46219,
    totalQuizAttempts: 312847,
    totalTextsStudied: mostStudiedTexts.length,
    questionDifficulty,
    mostStudiedTexts,
    scoresByBoard,
    gradeDistribution,
    weeklyPopularTexts,
    hardestQuestions,
  }
}

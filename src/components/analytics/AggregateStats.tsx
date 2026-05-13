'use client'

// ─── Aggregate Stats Component ──────────────────────────────────────────────
//
// Displays platform-wide aggregate analytics:
//   - "X students have studied this poem" (for poem pages)
//   - "Average quiz score: Y%" (for quiz pages)
//   - "Most popular texts this week" widget
//   - "Hardest questions" leaderboard
//
// Reads from /api/analytics/aggregate.
// Shows placeholder data if API is not configured or returns an error.
// ────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react'
import type {
  AggregateSnapshot,
  TextPopularity,
  QuestionDifficulty,
  BoardScores,
  GradeDistribution,
} from '@/lib/analytics/aggregate'
import { useT } from '@/lib/i18n/use-t'

// ─── Props ──────────────────────────────────────────────────────────────────

interface AggregateStatsProps {
  /** Which widget(s) to display */
  variant:
    | 'text-popularity'
    | 'quiz-score'
    | 'popular-texts'
    | 'hardest-questions'
    | 'full-dashboard'
  /** For text-popularity variant: filter to a specific text ID */
  textId?: string
  /** For quiz-score variant: filter to a specific exam board */
  examBoard?: string
  /** Additional CSS classes */
  className?: string
}

// ─── Placeholder Data ───────────────────────────────────────────────────────

const PLACEHOLDER_SNAPSHOT: AggregateSnapshot = {
  generatedAt: new Date().toISOString(),
  totalStudents: 46219,
  totalQuizAttempts: 312847,
  totalTextsStudied: 8,
  questionDifficulty: [],
  mostStudiedTexts: [
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
  ],
  scoresByBoard: [
    {
      examBoard: 'AQA',
      totalStudents: 18432,
      avgQuizScore: 67,
      avgAssessmentScore: 62,
      avgCompletionRate: 71,
      topPerformingCourse: 'A Christmas Carol',
      bottomPerformingCourse: 'Unseen Poetry',
    },
  ],
  gradeDistribution: [
    { grade: '9', count: 2311, percentage: 5, examBoard: null },
    { grade: '7', count: 6471, percentage: 14, examBoard: null },
    { grade: '5', count: 8782, percentage: 19, examBoard: null },
    { grade: '4', count: 7856, percentage: 17, examBoard: null },
  ],
  weeklyPopularTexts: [],
  hardestQuestions: [
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
  ],
}

// ─── Formatting Helpers ─────────────────────────────────────────────────────

function formatNumber(n: number): string {
  if (n >= 1000) {
    return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
  }
  return n.toLocaleString()
}

function getDifficultyColor(difficulty: QuestionDifficulty['difficulty']): string {
  switch (difficulty) {
    case 'easy':
      return 'text-emerald-700 bg-emerald-500/10'
    case 'medium':
      return 'text-amber-700 bg-amber-500/10'
    case 'hard':
      return 'text-orange-700 bg-orange-500/10'
    case 'very-hard':
      return 'text-red-700 bg-red-500/10'
  }
}

function getTrendIcon(direction: TextPopularity['trendDirection']): string {
  switch (direction) {
    case 'rising':
      return '\u2191'
    case 'falling':
      return '\u2193'
    case 'stable':
      return '\u2192'
  }
}

function getTrendColor(direction: TextPopularity['trendDirection']): string {
  switch (direction) {
    case 'rising':
      return 'text-emerald-600'
    case 'falling':
      return 'text-red-600'
    case 'stable':
      return 'text-muted-foreground'
  }
}

// ─── Hook: useAggregateStats ────────────────────────────────────────────────

function useAggregateStats() {
  const [data, setData] = useState<AggregateSnapshot | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch('/api/analytics/aggregate', {
        next: { revalidate: 3600 },
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const json: AggregateSnapshot = await res.json()
      setData(json)
    } catch (err) {
      console.warn('[AggregateStats] API unavailable, using placeholder data:', err)
      setError('Using placeholder data')
      setData(PLACEHOLDER_SNAPSHOT)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error }
}

// ─── Sub-Components ─────────────────────────────────────────────────────────

function TextPopularityBadge({ textId, data }: { textId: string; data: AggregateSnapshot }) {
  const t = useT()
  const text = data.mostStudiedTexts.find((tx) => tx.textId === textId)

  if (!text) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1 text-sm text-ink-600">
        <span className="inline-block h-2 w-2 rounded-full bg-ink-400" />
        <span>
          {formatNumber(data.totalStudents)} {t('analytics.badge.students_on_platform')}
        </span>
      </div>
    )
  }

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 px-3 py-1 text-sm text-teal-800">
      <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
      <span>
        <strong>{formatNumber(text.totalStudents)}</strong>{' '}
        {t('analytics.badge.students_studied_text')}
      </span>
      <span className={`ml-1 text-xs ${getTrendColor(text.trendDirection)}`}>
        {getTrendIcon(text.trendDirection)}
      </span>
    </div>
  )
}

function QuizScoreBadge({ examBoard, data }: { examBoard?: string; data: AggregateSnapshot }) {
  const t = useT()
  const board = examBoard
    ? data.scoresByBoard.find((b) => b.examBoard === examBoard)
    : data.scoresByBoard[0]

  const avgScore = board?.avgQuizScore ?? 67

  return (
    <div className="inline-flex items-center gap-1.5 rounded-full bg-clay-500/10 px-3 py-1 text-sm text-clay-700">
      <span className="inline-block h-2 w-2 rounded-full bg-purple-500" />
      <span>
        {t('analytics.badge.avg_quiz_score')}: <strong>{avgScore}%</strong>
        {board ? ` (${board.examBoard})` : ''}
      </span>
    </div>
  )
}

function PopularTextsWidget({ data }: { data: AggregateSnapshot }) {
  const t = useT()
  const texts =
    data.weeklyPopularTexts.length > 0 ? data.weeklyPopularTexts : data.mostStudiedTexts.slice(0, 5)

  const isWeekly = data.weeklyPopularTexts.length > 0

  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-foreground">
        {isWeekly
          ? t('analytics.widget.most_popular_this_week')
          : t('analytics.widget.most_studied_texts')}
      </h3>
      <ul className="space-y-2">
        {texts.map((text, i) => (
          <li
            key={text.textId}
            className="flex items-center justify-between rounded-md px-2 py-1.5 hover:bg-cream-100"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cream-100 text-xs font-medium text-ink-600">
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-medium text-foreground">{text.textTitle}</p>
                <p className="text-xs text-muted-foreground">{text.author}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {formatNumber(text.totalStudents)} {t('analytics.unit.students')}
              </span>
              <span className={`text-xs ${getTrendColor(text.trendDirection)}`}>
                {getTrendIcon(text.trendDirection)}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function HardestQuestionsWidget({ data }: { data: AggregateSnapshot }) {
  const t = useT()
  const questions = data.hardestQuestions.slice(0, 5)

  const difficultyLabel = (d: QuestionDifficulty['difficulty']) => {
    switch (d) {
      case 'easy':
        return t('analytics.difficulty.easy')
      case 'medium':
        return t('analytics.difficulty.medium')
      case 'hard':
        return t('analytics.difficulty.hard')
      case 'very-hard':
        return t('analytics.difficulty.very_hard')
    }
  }

  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-foreground">
        {t('analytics.widget.hardest_questions')}
      </h3>
      <ul className="space-y-2">
        {questions.map((q) => (
          <li key={q.questionId} className="rounded-md border border-border/60 px-3 py-2">
            <div className="mb-1 flex items-start justify-between gap-2">
              <p className="text-sm text-foreground line-clamp-2">{q.questionText}</p>
              <span
                className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${getDifficultyColor(
                  q.difficulty,
                )}`}
              >
                {difficultyLabel(q.difficulty)}
              </span>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>{q.moduleName}</span>
              <span>
                {q.correctRate}% {t('analytics.metric.correct')}
              </span>
              <span>
                {formatNumber(q.totalAttempts)} {t('analytics.unit.attempts')}
              </span>
            </div>
            {/* Difficulty bar */}
            <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-ink-200/30">
              <div
                className="h-full rounded-full bg-gradient-to-r from-red-500 to-emerald-500"
                style={{ width: `${q.correctRate}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FullDashboard({ data }: { data: AggregateSnapshot }) {
  const t = useT()
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t('analytics.summary.total_students')}
          </p>
          <p className="mt-1 text-2xl font-bold text-foreground">
            {formatNumber(data.totalStudents)}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t('analytics.summary.quiz_attempts')}
          </p>
          <p className="mt-1 text-2xl font-bold text-foreground">
            {formatNumber(data.totalQuizAttempts)}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {t('analytics.summary.texts_studied')}
          </p>
          <p className="mt-1 text-2xl font-bold text-foreground">{data.totalTextsStudied}</p>
        </div>
      </div>

      {/* Board Scores */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          {t('analytics.widget.avg_scores_by_board')}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs font-medium uppercase text-muted-foreground">
                <th className="pb-2 pr-4">{t('analytics.col.board')}</th>
                <th className="pb-2 pr-4">{t('analytics.col.students')}</th>
                <th className="pb-2 pr-4">{t('analytics.col.avg_quiz')}</th>
                <th className="pb-2 pr-4">{t('analytics.col.avg_assessment')}</th>
                <th className="pb-2">{t('analytics.col.completion')}</th>
              </tr>
            </thead>
            <tbody>
              {data.scoresByBoard.map((board) => (
                <tr key={board.examBoard} className="border-b border-border/40">
                  <td className="py-2 pr-4 font-medium text-foreground">{board.examBoard}</td>
                  <td className="py-2 pr-4 text-ink-600">{formatNumber(board.totalStudents)}</td>
                  <td className="py-2 pr-4 text-ink-600">{board.avgQuizScore}%</td>
                  <td className="py-2 pr-4 text-ink-600">{board.avgAssessmentScore}%</td>
                  <td className="py-2 text-ink-600">{board.avgCompletionRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          {t('analytics.widget.grade_distribution')}
        </h3>
        <div className="flex items-end gap-1">
          {data.gradeDistribution.map((g) => (
            <div key={g.grade} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-xs text-muted-foreground">{g.percentage}%</span>
              <div
                className="w-full rounded-t bg-teal-600"
                style={{ height: `${Math.max(g.percentage * 4, 4)}px` }}
              />
              <span className="text-xs font-medium text-ink-600">{g.grade}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Two-column layout for widgets */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <PopularTextsWidget data={data} />
        <HardestQuestionsWidget data={data} />
      </div>
    </div>
  )
}

// ─── Loading Skeleton ───────────────────────────────────────────────────────

function LoadingSkeleton({ variant }: { variant: AggregateStatsProps['variant'] }) {
  if (variant === 'text-popularity' || variant === 'quiz-score') {
    return (
      <div className="inline-flex animate-pulse items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1">
        <span className="inline-block h-2 w-2 rounded-full bg-ink-200" />
        <span className="h-3 w-32 rounded bg-ink-200" />
      </div>
    )
  }

  return (
    <div className="animate-pulse space-y-3 rounded-lg border border-border bg-card p-4">
      <div className="h-4 w-1/3 rounded bg-ink-200" />
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-8 rounded bg-cream-100" />
        ))}
      </div>
    </div>
  )
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function AggregateStats({
  variant,
  textId,
  examBoard,
  className = '',
}: AggregateStatsProps) {
  const { data, loading, error } = useAggregateStats()

  if (loading) {
    return (
      <div className={className}>
        <LoadingSkeleton variant={variant} />
      </div>
    )
  }

  // Use placeholder data if API failed
  const snapshot = data ?? PLACEHOLDER_SNAPSHOT

  return (
    <div className={className}>
      {variant === 'text-popularity' && (
        <TextPopularityBadge textId={textId ?? ''} data={snapshot} />
      )}
      {variant === 'quiz-score' && <QuizScoreBadge examBoard={examBoard} data={snapshot} />}
      {variant === 'popular-texts' && <PopularTextsWidget data={snapshot} />}
      {variant === 'hardest-questions' && <HardestQuestionsWidget data={snapshot} />}
      {variant === 'full-dashboard' && <FullDashboard data={snapshot} />}
    </div>
  )
}

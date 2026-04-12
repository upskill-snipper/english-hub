'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Minus,
  Lock,
  TrendingUp,
  Target,
  BookOpen,
  Award,
  Zap,
  Loader2,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { useBoard } from '@/hooks/useBoard'
import { matchesBoard } from '@/lib/board-filter'
import { loadAllCourses } from '@/data/course-loader'
import { formatDate } from '@/lib/utils'
import type { AssessmentAttempt, CourseData } from '@/lib/types'
import { percentageToGCSEGrade, gcseGradeColor, percentageToGCSEGradeLabel, calculateTargetGrade } from '@/lib/grades'

// ─── Types ───────────────────────────────────────────────────────────────────

interface PracticeSession {
  id: string
  user_id: string
  question_id: string
  board: string
  question_type: string
  difficulty: string
  self_rating: number | null
  time_seconds: number | null
  created_at: string
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

// courseMap is built dynamically inside the component — see useMemo below

const GRADE_BOUNDARIES: Record<string, { grade: string; min: number }[]> = {
  Edexcel: [
    { grade: '9', min: 83 },
    { grade: '8', min: 77 },
    { grade: '7', min: 71 },
    { grade: '6', min: 65 },
    { grade: '5', min: 59 },
    { grade: '4', min: 53 },
    { grade: '3', min: 40 },
    { grade: '2', min: 28 },
    { grade: '1', min: 16 },
  ],
  AQA: [
    { grade: '9', min: 76 },
    { grade: '8', min: 69 },
    { grade: '7', min: 64 },
    { grade: '6', min: 58 },
    { grade: '5', min: 51 },
    { grade: '4', min: 46 },
    { grade: '3', min: 34 },
    { grade: '2', min: 22 },
    { grade: '1', min: 10 },
  ],
  default: [
    { grade: '9', min: 90 },
    { grade: '8', min: 80 },
    { grade: '7', min: 70 },
    { grade: '6', min: 60 },
    { grade: '5', min: 50 },
    { grade: '4', min: 40 },
    { grade: '3', min: 30 },
    { grade: '2', min: 20 },
    { grade: '1', min: 0 },
  ],
}

function scoreToGrade(score: number, board?: string): number {
  const boundaries = (board && GRADE_BOUNDARIES[board]) || GRADE_BOUNDARIES.default
  for (const { grade, min } of boundaries) {
    if (score >= min) return Number(grade)
  }
  return 1
}

function gradeColor(grade: number): string {
  if (grade >= 7) return '#22c55e' // green
  if (grade >= 5) return '#f59e0b' // amber
  return '#ef4444' // red
}

function gradeLabel(grade: number): string {
  if (grade >= 7) return 'Excellent'
  if (grade >= 5) return 'Good'
  return 'Needs Work'
}

function scoreBarColor(score: number): string {
  if (score >= 70) return 'bg-green-500'
  if (score >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function scoreLabel(score: number): string {
  return percentageToGCSEGradeLabel(score)
}

// ─── Skeleton Components ─────────────────────────────────────────────────────

function CardSkeleton({ className = '' }: { className?: string }) {
  return (
    <div className={`rounded-xl border border-border bg-card p-6 animate-pulse ${className}`}>
      <div className="h-5 w-32 rounded bg-border mb-4" />
      <div className="h-8 w-20 rounded bg-border mb-3" />
      <div className="h-3 w-full rounded bg-border mb-2" />
      <div className="h-3 w-3/4 rounded bg-border" />
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function GradeDashboardPage() {
  const { user, isLoading } = useAuthStore()
  const router = useRouter()
  const { board: selectedBoard } = useBoard()
  const [allCourses, setAllCourses] = useState<CourseData[]>([])
  const [assessments, setAssessments] = useState<AssessmentAttempt[]>([])
  const [practiceSessions, setPracticeSessions] = useState<PracticeSession[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const courseMap = useMemo(
    () => new Map<string, CourseData>(allCourses.map((c) => [c.id, c])),
    [allCourses]
  )

  // Load course data dynamically
  useEffect(() => {
    loadAllCourses().then(setAllCourses)
  }, [])

  // Auth redirect guard
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login?redirect=' + encodeURIComponent(window.location.pathname))
    }
  }, [isLoading, user, router])

  useEffect(() => {
    if (!user) return

    const supabase = createClient()

    async function fetchData() {
      try {
        setError(null)
        const [assessRes, practiceRes] = await Promise.all([
          supabase
            .from('assessment_attempts')
            .select('*')
            .eq('user_id', user!.id)
            .order('attempted_at', { ascending: true }),
          supabase
            .from('practice_sessions')
            .select('*')
            .eq('user_id', user!.id)
            .order('created_at', { ascending: true }),
        ])

        if (assessRes.error) console.error('Failed to fetch assessments:', assessRes.error)
        if (practiceRes.error) console.error('Failed to fetch practice sessions:', practiceRes.error)

        if (assessRes.data) setAssessments(assessRes.data)
        if (practiceRes.data) setPracticeSessions(practiceRes.data)
      } catch (err) {
        console.error('Failed to fetch grade data:', err)
        setError('Something went wrong loading your grades. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [user])

  // ── Eligibility ──────────────────────────────────────────────────────────

  const totalSessions = assessments.length + practiceSessions.length
  const isEligible = totalSessions >= 5

  // ── Computed grade data ──────────────────────────────────────────────────

  const averageScore = useMemo(() => {
    if (assessments.length === 0) return 0
    const sum = assessments.reduce((acc, a) => acc + a.score, 0)
    return Math.round(sum / assessments.length)
  }, [assessments])

  // Determine the most common board from the user's assessment courses
  const dominantBoard = useMemo(() => {
    const counts = new Map<string, number>()
    for (const a of assessments) {
      const board = courseMap.get(a.course_id)?.board
      if (board) counts.set(board, (counts.get(board) ?? 0) + 1)
    }
    let best: string | undefined
    let bestCount = 0
    for (const [board, count] of Array.from(counts.entries())) {
      if (count > bestCount) { best = board; bestCount = count }
    }
    return best
  }, [assessments])

  const predictedGrade = useMemo(() => scoreToGrade(averageScore, dominantBoard), [averageScore, dominantBoard])
  const targetGrade = useMemo(() => calculateTargetGrade(predictedGrade as any), [predictedGrade])

  const potentialGrade = useMemo(() => {
    if (assessments.length === 0) return 1
    const highest = Math.max(...assessments.map((a) => a.score))
    return scoreToGrade(highest, dominantBoard)
  }, [assessments, dominantBoard])

  // ── Last 10 scores for bar chart ─────────────────────────────────────────

  const last10 = useMemo(() => {
    return assessments.slice(-10).map((a) => ({
      score: a.score,
      date: formatDate(a.attempted_at),
      courseId: a.course_id,
    }))
  }, [assessments])

  // ── Strengths & Weaknesses ───────────────────────────────────────────────

  const courseScores = useMemo(() => {
    const map = new Map<string, { total: number; count: number }>()
    for (const a of assessments) {
      const existing = map.get(a.course_id) ?? { total: 0, count: 0 }
      existing.total += a.score
      existing.count += 1
      map.set(a.course_id, existing)
    }
    return Array.from(map.entries())
      .map(([courseId, { total, count }]) => ({
        courseId,
        courseName: courseMap.get(courseId)?.title ?? courseId,
        average: Math.round(total / count),
        count,
      }))
      .sort((a, b) => b.average - a.average)
  }, [assessments])

  const strengths = courseScores.slice(0, 3)
  const weaknesses = courseScores.length > 3
    ? [...courseScores].sort((a, b) => a.average - b.average).slice(0, 3)
    : courseScores.length > 0
    ? [...courseScores].sort((a, b) => a.average - b.average).slice(0, Math.min(3, courseScores.length))
    : []

  // ── Trajectory ───────────────────────────────────────────────────────────

  const trajectory = useMemo(() => {
    if (assessments.length < 3) return { trend: 'stable' as const, change: 0 }
    const first3 = assessments.slice(0, 3)
    const last3 = assessments.slice(-3)
    const first3Avg = first3.reduce((s, a) => s + a.score, 0) / first3.length
    const last3Avg = last3.reduce((s, a) => s + a.score, 0) / last3.length
    const change = Math.round(last3Avg - first3Avg)
    const trend = change > 3 ? 'improving' as const : change < -3 ? 'declining' as const : 'stable' as const
    return { trend, change }
  }, [assessments])

  // ── Recommendations ──────────────────────────────────────────────────────

  const recommendations = useMemo(() => {
    const weakAreas = weaknesses.map((w) => w.courseId)
    // Recommend courses from allCourses that relate to weak areas or grade level
    // Filter by selected board (KS3/generic content always shows)
    const boardCourses = allCourses.filter((c) => matchesBoard(c.board, selectedBoard))
    const recs: CourseData[] = []

    const isGcseLevel = (c: CourseData) =>
      c.level === 'GCSE' || c.tier === 'IGCSE'

    if (averageScore < 50) {
      // Below Grade 5: recommend foundation/KS3 courses
      const foundation = boardCourses.filter(
        (c) => c.level === 'KS3' || c.tier === 'Foundation'
      )
      recs.push(...foundation.slice(0, 3))
    } else if (averageScore < 70) {
      // Grade 5-6: recommend GCSE/IGCSE courses not yet attempted or weak areas
      const improvement = boardCourses.filter(
        (c) => isGcseLevel(c) && (!weakAreas.length || weakAreas.includes(c.id))
      )
      if (improvement.length > 0) {
        recs.push(...improvement.slice(0, 3))
      } else {
        recs.push(...boardCourses.filter((c) => isGcseLevel(c)).slice(0, 3))
      }
    } else {
      // Grade 7+: extension/challenge content
      const extension = boardCourses.filter(
        (c) => c.tier === 'Higher' || isGcseLevel(c)
      )
      recs.push(...extension.slice(0, 3))
    }

    // If no specific recs, just pick first 3 board-filtered courses
    if (recs.length === 0) {
      recs.push(...boardCourses.slice(0, 3))
    }

    return recs.slice(0, 3)
  }, [averageScore, weaknesses, selectedBoard])

  // ── Auth guard renders ─────────────────────────────────────────────────

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect via useEffect
  }

  // ── Render ───────────────────────────────────────────────────────────────

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/dashboard"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>
          <div className="flex flex-col items-center justify-center rounded-xl border border-destructive/30 bg-destructive/5 py-16 text-center">
            <p className="mb-4 text-sm text-destructive">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="h-8 w-48 rounded bg-border animate-pulse" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <CardSkeleton className="lg:col-span-1" />
            <CardSkeleton className="lg:col-span-2" />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    )
  }

  // ── Locked state ─────────────────────────────────────────────────────────

  if (!isEligible) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/dashboard"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to dashboard
          </Link>

          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-border/50">
              <Lock className="h-8 w-8 text-muted-foreground" />
            </div>
            <h1 className="mb-2 text-xl font-bold sm:text-2xl">Grade Dashboard Locked</h1>
            <p className="mb-6 max-w-md text-muted-foreground">
              Complete at least 5 practice tests or assessments to unlock your Grade Dashboard.
            </p>

            {/* Progress bar */}
            <div className="mb-2 w-64">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-medium">{totalSessions} / 5</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-border">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-500"
                  style={{ width: `${Math.min((totalSessions / 5) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="/practice"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Practice Questions <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Full Dashboard ───────────────────────────────────────────────────────

  const conicGradient = `conic-gradient(${gradeColor(predictedGrade)} ${averageScore * 3.6}deg, rgba(255,255,255,0.08) 0deg)`

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/dashboard"
              className="mb-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to dashboard
            </Link>
            <h1 className="text-2xl font-bold sm:text-3xl">Grade Dashboard</h1>
            <p className="mt-1 text-muted-foreground">
              Your predicted grades based on {assessments.length} assessment{assessments.length !== 1 ? 's' : ''} and {practiceSessions.length} practice session{practiceSessions.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* ── a) Grade Overview Card ─────────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Grade Overview
            </h2>

            {/* Circular progress */}
            <div className="mx-auto mb-4 flex items-center justify-center">
              <div
                className="relative flex h-40 w-40 items-center justify-center rounded-full"
                style={{ background: conicGradient }}
              >
                <div className="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-card">
                  <span className="text-3xl font-bold">Grade {scoreToGrade(averageScore, selectedBoard ?? undefined)}</span>
                  <span className="text-xs text-muted-foreground">working at</span>
                </div>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="text-2xl font-bold">
                Predicted Grade:{' '}
                <span style={{ color: gradeColor(predictedGrade) }}>
                  {predictedGrade}
                </span>
                <span className="ml-2 text-sm font-medium text-muted-foreground">
                  ({gradeLabel(predictedGrade)})
                </span>
              </p>
              <p className="text-lg font-semibold text-cyan-500">
                Target Grade: {targetGrade}
              </p>
              <p className="text-sm text-primary">
                Potential Grade: {potentialGrade}{' '}
                <span className="text-muted-foreground">({gradeLabel(potentialGrade)})</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Based on {assessments.length} assessment{assessments.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* ── b) Progress Over Time ──────────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Progress Over Time
            </h2>

            {last10.length === 0 ? (
              <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
                No assessment data yet.
              </div>
            ) : (
              <div className="flex h-48 items-end gap-2">
                {/* Y-axis labels */}
                <div className="flex h-full flex-col justify-between text-xs text-muted-foreground pr-2 shrink-0">
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>

                {/* Bars */}
                <div className="flex flex-1 items-end gap-1 sm:gap-2">
                  {last10.map((item, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-1 flex-col items-center"
                    >
                      {/* Tooltip */}
                      <div className="pointer-events-none absolute -top-8 z-10 hidden rounded bg-background border border-border px-2 py-1 text-xs font-medium whitespace-nowrap group-hover:block">
                        {scoreLabel(item.score)} ({item.score}%)
                      </div>
                      {/* Bar */}
                      <div
                        className={`w-full max-w-[40px] rounded-t ${scoreBarColor(item.score)} transition-all duration-300`}
                        style={{ height: `${Math.max(item.score, 2)}%` }}
                      />
                      {/* Date label */}
                      <span className="mt-1 text-[10px] text-muted-foreground leading-tight text-center hidden sm:block">
                        {item.date.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ── c) Strengths & Weaknesses ──────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card p-6 lg:col-span-2">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Strengths & Weaknesses
            </h2>

            {courseScores.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Complete assessments in different courses to see your strengths and weaknesses.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Strengths */}
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Award className="h-4 w-4 text-green-400" />
                    Top Strengths
                  </h3>
                  {strengths.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No data yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {strengths.map((s) => (
                        <div
                          key={s.courseId}
                          className="flex items-center justify-between rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2"
                        >
                          <span className="text-sm font-medium truncate mr-2">
                            {s.courseName}
                          </span>
                          <span className="shrink-0 rounded-md bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400">
                            {scoreLabel(s.average)} ({s.average}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Weaknesses */}
                <div>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                    <Target className="h-4 w-4 text-amber-400" />
                    Areas for Improvement
                  </h3>
                  {weaknesses.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No data yet.</p>
                  ) : (
                    <div className="space-y-2">
                      {weaknesses.map((w) => (
                        <div
                          key={w.courseId}
                          className="flex items-center justify-between rounded-lg bg-amber-500/10 border border-amber-500/20 px-3 py-2"
                        >
                          <span className="text-sm font-medium truncate mr-2">
                            {w.courseName}
                          </span>
                          <span className="shrink-0 rounded-md bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-400">
                            {scoreLabel(w.average)} ({w.average}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* ── e) Grade Trajectory ─────────────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Grade Trajectory
            </h2>

            {assessments.length < 3 ? (
              <p className="text-sm text-muted-foreground">
                Complete at least three assessments to see your trajectory.
              </p>
            ) : (
              <div className="flex flex-col items-center text-center">
                <div
                  className={`mb-3 flex h-16 w-16 items-center justify-center rounded-full ${
                    trajectory.trend === 'improving'
                      ? 'bg-green-500/10'
                      : trajectory.trend === 'declining'
                      ? 'bg-red-500/10'
                      : 'bg-border/50'
                  }`}
                >
                  {trajectory.trend === 'improving' ? (
                    <ArrowUp className="h-8 w-8 text-green-400" />
                  ) : trajectory.trend === 'declining' ? (
                    <ArrowDown className="h-8 w-8 text-red-400" />
                  ) : (
                    <Minus className="h-8 w-8 text-muted-foreground" />
                  )}
                </div>
                <p className="text-lg font-semibold">
                  {trajectory.trend === 'improving'
                    ? 'Your scores are improving!'
                    : trajectory.trend === 'declining'
                    ? 'Your scores are declining.'
                    : 'Your scores are stable.'}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {trajectory.change > 0 ? '+' : ''}
                  {trajectory.change}% change from your first three to last three assessments.
                </p>
              </div>
            )}
          </div>

          {/* ── d) Recommended Next Steps ──────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card p-6 lg:col-span-3">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              <Zap className="inline h-4 w-4 mr-1 text-primary" />
              Recommended Next Steps
            </h2>

            {recommendations.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                Keep practising to receive personalised recommendations!
              </p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {recommendations.map((course) => (
                  <div
                    key={course.id}
                    className="rounded-lg border border-border bg-background p-4 transition-colors hover:border-primary/30"
                  >
                    <div className="mb-1 flex items-center gap-2">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: course.color }}
                      />
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {course.level}
                      </span>
                    </div>
                    <h3 className="mb-1 font-semibold leading-snug text-sm">
                      {course.title}
                    </h3>
                    <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                      {course.subtitle}
                    </p>
                    <Link
                      href={`/courses/${course.id}`}
                      className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Start This Course
                    </Link>
                  </div>
                ))}
              </div>
            )}

            {averageScore < 50 && (
              <p className="mt-4 rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-3 text-sm text-amber-300">
                We recommend focusing on foundation courses to build a strong base before moving to GCSE-level content.
              </p>
            )}
            {averageScore >= 50 && averageScore < 70 && (
              <p className="mt-4 rounded-lg bg-blue-500/10 border border-blue-500/20 px-4 py-3 text-sm text-blue-300">
                Great progress! Focus on your weaker areas to push your predicted grade higher.
              </p>
            )}
            {averageScore >= 70 && (
              <p className="mt-4 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-sm text-green-300">
                Excellent work! Try extension and challenge content to aim for top grades.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

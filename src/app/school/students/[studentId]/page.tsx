'use client'

import { useEffect, useState, useMemo } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Minus,
  BookOpen,
  CheckCircle,
  Award,
  Clock,
  Flame,
  FileText,
  BarChart3,
  Target,
  Zap,
  XCircle,
  ExternalLink,
} from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'

// ─── Types ───────────────────────────────────────────────────────────────────

interface ModuleProgressItem {
  moduleId: string
  moduleName: string
  courseName: string
  status: 'complete' | 'in_progress' | 'not_started'
  quizScore: number | null
  timeSpentMinutes: number
  attempts: number
}

interface StrengthWeaknessItem {
  area: string
  score: number
}

interface Recommendation {
  id: string
  title: string
  description: string
  link: string
  type: 'improvement' | 'praise' | 'suggestion'
}

interface ActivityItem {
  id: string
  type: 'module_complete' | 'quiz_score' | 'certificate' | 'practice' | 'enrolment'
  text: string
  timestamp: string
}

interface WeeklyScore {
  week: string
  score: number
  trend: 'up' | 'down' | 'stable'
}

interface StudentData {
  id: string
  name: string
  email: string
  yearGroup: string
  examBoard: string
  predictedGrade: number
  averageScore: number
  trajectory: { trend: 'improving' | 'stable' | 'declining'; change: number }
  lastActive: string
  classId: string
  className: string
  modulesCompleted: number
  totalModules: number
  averageQuizScore: number
  totalStudyTimeMinutes: number
  practiceSessions: number
  certificatesEarned: number
  currentStreak: number
  examReadiness: number
  modules: ModuleProgressItem[]
  strengths: StrengthWeaknessItem[]
  weaknesses: StrengthWeaknessItem[]
  recommendations: Recommendation[]
  recentActivity: ActivityItem[]
}

interface TrendsData {
  weeklyScores: WeeklyScore[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function gradeColorClass(grade: number): string {
  if (grade >= 8) return 'text-purple-400'
  if (grade >= 6) return 'text-green-400'
  if (grade >= 4) return 'text-amber-400'
  return 'text-red-400'
}

function gradeBgClass(grade: number): string {
  if (grade >= 8) return 'bg-purple-500/10 border-purple-500/20'
  if (grade >= 6) return 'bg-green-500/10 border-green-500/20'
  if (grade >= 4) return 'bg-amber-500/10 border-amber-500/20'
  return 'bg-red-500/10 border-red-500/20'
}

function scoreBarColor(score: number): string {
  if (score >= 70) return 'bg-green-500'
  if (score >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function scoreTextColor(score: number): string {
  if (score >= 70) return 'text-green-400'
  if (score >= 50) return 'text-amber-400'
  return 'text-red-400'
}

function formatStudyTime(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${hours}h ${minutes.toString().padStart(2, '0')}m`
}

function relativeTime(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)
  const diffWeeks = Math.floor(diffDays / 7)

  if (diffMins < 1) return 'just now'
  if (diffMins < 60) return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`
  if (diffWeeks < 5) return `${diffWeeks} week${diffWeeks === 1 ? '' : 's'} ago`
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function statusBadge(status: ModuleProgressItem['status']) {
  switch (status) {
    case 'complete':
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 border border-green-500/20 px-2 py-0.5 text-xs font-medium text-green-400">
          <CheckCircle className="h-3 w-3" />
          Complete
        </span>
      )
    case 'in_progress':
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
          <Clock className="h-3 w-3" />
          In Progress
        </span>
      )
    case 'not_started':
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-border/50 px-2 py-0.5 text-xs font-medium text-muted-foreground">
          <Minus className="h-3 w-3" />
          Not Started
        </span>
      )
  }
}

function activityIcon(type: ActivityItem['type']) {
  switch (type) {
    case 'module_complete':
      return <BookOpen className="h-4 w-4 text-blue-400" />
    case 'quiz_score':
      return <CheckCircle className="h-4 w-4 text-green-400" />
    case 'certificate':
      return <Award className="h-4 w-4 text-yellow-400" />
    case 'practice':
      return <Target className="h-4 w-4 text-purple-400" />
    case 'enrolment':
      return <BookOpen className="h-4 w-4 text-cyan-400" />
    default:
      return <FileText className="h-4 w-4 text-muted-foreground" />
  }
}

function recommendationIcon(type: Recommendation['type']) {
  switch (type) {
    case 'improvement':
      return <Target className="h-5 w-5 text-amber-400" />
    case 'praise':
      return <Zap className="h-5 w-5 text-green-400" />
    case 'suggestion':
      return <BookOpen className="h-5 w-5 text-blue-400" />
  }
}

function recommendationBorder(type: Recommendation['type']) {
  switch (type) {
    case 'improvement':
      return 'border-amber-500/20 hover:border-amber-500/40'
    case 'praise':
      return 'border-green-500/20 hover:border-green-500/40'
    case 'suggestion':
      return 'border-blue-500/20 hover:border-blue-500/40'
  }
}

// ─── Exam Readiness Gauge (inline SVG) ───────────────────────────────────────

function ExamReadinessGaugeInline({ score }: { score: number }) {
  const size = 140
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const color = score >= 70 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444'

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" className="stroke-muted" strokeWidth={strokeWidth} />
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-700 ease-out" />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold" style={{ color }}>{score}%</span>
          <span className="text-[10px] text-muted-foreground">Readiness</span>
        </div>
      </div>
    </div>
  )
}

// ─── Skeleton Components ─────────────────────────────────────────────────────

function HeaderSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <Skeleton className="h-8 w-48" />
          <div className="flex gap-2">
            <Skeleton className="h-5 w-20 rounded-full" />
            <Skeleton className="h-5 w-24 rounded-full" />
          </div>
          <Skeleton className="h-4 w-32" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Skeleton className="h-16 w-16 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  )
}

function OverviewCardSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 animate-pulse">
      <Skeleton className="h-4 w-24 mb-3" />
      <Skeleton className="h-8 w-16 mb-1" />
      <Skeleton className="h-3 w-20" />
    </div>
  )
}

function TableSkeleton() {
  return (
    <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
      <Skeleton className="h-6 w-40 mb-4" />
      <div className="space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    </div>
  )
}

function SidebarSkeleton() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <Skeleton className="h-5 w-28 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <Skeleton className="h-5 w-28 mb-4" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 animate-pulse">
        <Skeleton className="h-5 w-24 mb-4" />
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function StudentDrilldownPage() {
  const params = useParams()
  const studentId = params.studentId as string

  const [student, setStudent] = useState<StudentData | null>(null)
  const [trends, setTrends] = useState<TrendsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<'status' | 'score'>('status')

  useEffect(() => {
    if (!studentId) return

    async function fetchData() {
      try {
        const [studentRes, trendsRes] = await Promise.all([
          fetch(`/api/school/students/${studentId}`),
          fetch(`/api/school/students/${studentId}/trends`),
        ])

        if (studentRes.ok) {
          const data = await studentRes.json()
          setStudent(data)
        }

        if (trendsRes.ok) {
          const data = await trendsRes.json()
          setTrends(data)
        }
      } catch (err) {
        console.error('Failed to fetch student data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [studentId])

  // ── Sorted modules ──────────────────────────────────────────────────────

  const sortedModules = useMemo(() => {
    if (!student) return []
    const mods = [...student.modules]
    if (sortBy === 'score') {
      return mods.sort((a, b) => (b.quizScore ?? -1) - (a.quizScore ?? -1))
    }
    // Sort by status: in_progress first, then not_started, then complete
    const statusOrder = { in_progress: 0, not_started: 1, complete: 2 }
    return mods.sort((a, b) => statusOrder[a.status] - statusOrder[b.status])
  }, [student, sortBy])

  // ── Loading state ───────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Skeleton className="h-4 w-32 mb-6" />
          </div>
          <HeaderSkeleton />
          <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <OverviewCardSkeleton key={i} />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Skeleton className="h-32 w-32 rounded-full" />
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TableSkeleton />
            </div>
            <SidebarSkeleton />
          </div>
          <div className="mt-6">
            <Skeleton className="h-64 w-full rounded-xl" />
          </div>
        </div>
      </div>
    )
  }

  if (!student) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Link
            href="/school"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to School Dashboard
          </Link>
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 py-16 text-center">
            <p className="text-lg font-semibold text-foreground">Student not found</p>
            <p className="mt-2 text-sm text-muted-foreground">
              The student you are looking for does not exist or you do not have permission to view their profile.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const weeklyScores = trends?.weeklyScores ?? []

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* ── Back Link ──────────────────────────────────────────────────── */}
        <Link
          href={student.classId ? `/school/classes/${student.classId}` : '/school'}
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {student.className || 'Class'}
        </Link>

        {/* ── Student Header ─────────────────────────────────────────────── */}
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            {/* Left: Name, badges, trajectory, last active */}
            <div className="space-y-3">
              <h1 className="text-2xl font-bold sm:text-3xl">{student.name}</h1>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {student.yearGroup}
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-xs font-semibold text-blue-400">
                  {student.examBoard}
                </span>
              </div>

              {/* Trajectory */}
              <div className="flex items-center gap-2">
                {student.trajectory.trend === 'improving' ? (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-green-400">
                    <ArrowUp className="h-4 w-4" />
                    Improving
                  </span>
                ) : student.trajectory.trend === 'declining' ? (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-red-400">
                    <ArrowDown className="h-4 w-4" />
                    Declining
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground">
                    <Minus className="h-4 w-4" />
                    Stable
                  </span>
                )}
                {student.trajectory.change !== 0 && (
                  <span className="text-xs text-muted-foreground">
                    ({student.trajectory.change > 0 ? '+' : ''}
                    {student.trajectory.change}%)
                  </span>
                )}
              </div>

              {/* Last active */}
              <p className="text-sm text-muted-foreground">
                Last active: {relativeTime(student.lastActive)}
              </p>
            </div>

            {/* Right: Predicted Grade */}
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full border-2 ${gradeBgClass(student.predictedGrade)}`}
              >
                <span className={`text-3xl font-bold ${gradeColorClass(student.predictedGrade)}`}>
                  {student.predictedGrade}
                </span>
              </div>
              <span className="text-xs font-medium text-muted-foreground">Predicted Grade</span>
            </div>
          </div>
        </div>

        {/* ── Overview Cards Row ──────────────────────────────────────────── */}
        <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {/* Modules Completed */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <BookOpen className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Modules</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">
              {student.modulesCompleted}
              <span className="text-base font-normal text-muted-foreground">
                /{student.totalModules}
              </span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">Completed</p>
          </div>

          {/* Average Quiz Score */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <BarChart3 className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Avg Score</span>
            </div>
            <p className={`text-2xl font-bold tabular-nums ${scoreTextColor(student.averageQuizScore)}`}>
              {student.averageQuizScore}%
            </p>
            <p className="text-xs text-muted-foreground mt-1">Quiz Average</p>
          </div>

          {/* Total Study Time */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Clock className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Study Time</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">
              {formatStudyTime(student.totalStudyTimeMinutes)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Total</p>
          </div>

          {/* Practice Sessions */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Target className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Practice</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">{student.practiceSessions}</p>
            <p className="text-xs text-muted-foreground mt-1">Sessions</p>
          </div>

          {/* Certificates Earned */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Award className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Certificates</span>
            </div>
            <p className="text-2xl font-bold tabular-nums">{student.certificatesEarned}</p>
            <p className="text-xs text-muted-foreground mt-1">Earned</p>
          </div>

          {/* Current Streak */}
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Flame className="h-4 w-4" />
              <span className="text-xs font-medium uppercase tracking-wider">Streak</span>
            </div>
            <p className="text-2xl font-bold tabular-nums text-orange-400">
              {student.currentStreak}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Days</p>
          </div>
        </div>

        {/* ── Exam Readiness Gauge ────────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground text-center">
            Exam Readiness
          </h2>
          <ExamReadinessGaugeInline score={student.examReadiness} />
        </div>

        {/* ── Two-Column Layout ───────────────────────────────────────────── */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* Left Column: Module Progress Table */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Module Progress
              </h2>
              <div className="flex items-center gap-1 rounded-lg bg-background p-0.5">
                <button
                  onClick={() => setSortBy('status')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    sortBy === 'status'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Status
                </button>
                <button
                  onClick={() => setSortBy('score')}
                  className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                    sortBy === 'score'
                      ? 'bg-card text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Score
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <th className="pb-3 pr-4">Module</th>
                    <th className="pb-3 pr-4">Status</th>
                    <th className="pb-3 pr-4">Quiz Score</th>
                    <th className="pb-3 pr-4">Time</th>
                    <th className="pb-3">Attempts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sortedModules.map((mod) => (
                    <tr key={mod.moduleId} className="group">
                      <td className="py-3 pr-4">
                        <div>
                          <p className="font-medium text-foreground">{mod.moduleName}</p>
                          <p className="text-xs text-muted-foreground">{mod.courseName}</p>
                        </div>
                      </td>
                      <td className="py-3 pr-4">{statusBadge(mod.status)}</td>
                      <td className="py-3 pr-4">
                        {mod.quizScore !== null ? (
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-16 overflow-hidden rounded-full bg-muted">
                              <div
                                className={`h-full rounded-full transition-all duration-500 ${scoreBarColor(mod.quizScore)}`}
                                style={{ width: `${mod.quizScore}%` }}
                              />
                            </div>
                            <span className={`text-xs font-medium tabular-nums ${scoreTextColor(mod.quizScore)}`}>
                              {mod.quizScore}%
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">&mdash;</span>
                        )}
                      </td>
                      <td className="py-3 pr-4">
                        <span className="text-xs tabular-nums text-muted-foreground">
                          {mod.timeSpentMinutes}m
                        </span>
                      </td>
                      <td className="py-3">
                        <span className="text-xs tabular-nums text-muted-foreground">
                          {mod.attempts}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {sortedModules.length === 0 && (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No module data available.
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Strengths, Weaknesses, Skill Radar */}
          <div className="space-y-6">

            {/* Strengths Panel */}
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-green-400">
                <Award className="h-4 w-4" />
                Strengths
              </h3>
              {student.strengths.length > 0 ? (
                <div className="space-y-2">
                  {student.strengths.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg bg-green-500/10 border border-green-500/15 px-3 py-2"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-green-400 shrink-0" />
                        <span className="truncate">{s.area}</span>
                      </span>
                      <span className="shrink-0 rounded-md bg-green-500/20 px-2 py-0.5 text-xs font-semibold text-green-400 tabular-nums">
                        {s.score}%
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Not enough data yet.</p>
              )}
            </div>

            {/* Weaknesses Panel */}
            <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-red-400">
                <XCircle className="h-4 w-4" />
                Weaknesses
              </h3>
              {student.weaknesses.length > 0 ? (
                <div className="space-y-2">
                  {student.weaknesses.map((w, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg bg-red-500/10 border border-red-500/15 px-3 py-2"
                    >
                      <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <XCircle className="h-3.5 w-3.5 text-red-400 shrink-0" />
                        <span className="truncate">{w.area}</span>
                      </span>
                      <span className="shrink-0 rounded-md bg-red-500/20 px-2 py-0.5 text-xs font-semibold text-red-400 tabular-nums">
                        {w.score}%
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-muted-foreground">Not enough data yet.</p>
              )}
            </div>

            {/* Skill Summary */}
            <div className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                Performance Summary
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall Score</span>
                  <span className={`font-semibold tabular-nums ${scoreTextColor(student.averageQuizScore)}`}>{student.averageQuizScore}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className={`h-full rounded-full transition-all duration-500 ${scoreBarColor(student.averageQuizScore)}`} style={{ width: `${student.averageQuizScore}%` }} />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Completion</span>
                  <span className="font-semibold tabular-nums text-foreground">
                    {student.totalModules > 0 ? Math.round((student.modulesCompleted / student.totalModules) * 100) : 0}%
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-primary transition-all duration-500" style={{ width: `${student.totalModules > 0 ? (student.modulesCompleted / student.totalModules) * 100 : 0}%` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Score Trend Chart ────────────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Weekly Quiz Scores — Last 8 Weeks
          </h2>

          {weeklyScores.length > 0 ? (
            <div className="flex h-56 items-end gap-2">
              {/* Y-axis labels */}
              <div className="flex h-full flex-col justify-between text-xs text-muted-foreground pr-2 shrink-0">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Bars */}
              <div className="flex flex-1 items-end gap-2 sm:gap-3">
                {weeklyScores.map((week, i) => {
                  const barColor =
                    week.trend === 'up'
                      ? 'bg-green-500'
                      : week.trend === 'down'
                      ? 'bg-red-500'
                      : 'bg-border'

                  return (
                    <div
                      key={i}
                      className="group relative flex flex-1 flex-col items-center"
                    >
                      {/* Tooltip */}
                      <div className="pointer-events-none absolute -top-8 z-10 hidden rounded bg-background border border-border px-2 py-1 text-xs font-medium whitespace-nowrap group-hover:block">
                        {week.score}%
                      </div>
                      {/* Bar */}
                      <div
                        className={`w-full max-w-[48px] rounded-t transition-all duration-300 ${barColor}`}
                        style={{ height: `${Math.max(week.score, 2)}%` }}
                      />
                      {/* Week label */}
                      <span className="mt-1.5 text-[10px] text-muted-foreground leading-tight text-center">
                        {week.week}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
              No weekly score data available yet.
            </div>
          )}
        </div>

        {/* ── Personalized Recommendations ────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            <Zap className="h-4 w-4 text-primary" />
            Personalized Recommendations
          </h2>

          {student.recommendations.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {student.recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className={`rounded-xl border bg-background p-4 transition-colors ${recommendationBorder(rec.type)}`}
                >
                  <div className="mb-2 flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">{recommendationIcon(rec.type)}</div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-foreground leading-snug">
                        {rec.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        {rec.description}
                      </p>
                    </div>
                  </div>
                  {rec.link && (
                    <Link
                      href={rec.link}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Go to resource
                    </Link>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Complete more activities to receive personalized recommendations.
            </p>
          )}
        </div>

        {/* ── Recent Activity Feed ────────────────────────────────────────── */}
        <div className="mt-6 rounded-xl border border-border bg-card p-6">
          <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Recent Activity
          </h2>

          {student.recentActivity.length > 0 ? (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-px bg-border" />

              <div className="space-y-0">
                {student.recentActivity.map((activity, i) => (
                  <div key={activity.id} className="relative flex items-start gap-4 py-3">
                    {/* Icon dot */}
                    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-card border border-border">
                      {activityIcon(activity.type)}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-foreground leading-snug">{activity.text}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {relativeTime(activity.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No recent activity.
            </div>
          )}
        </div>

      </div>
    </div>
  )
}

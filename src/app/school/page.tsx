'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Users,
  GraduationCap,
  BarChart3,
  CheckCircle,
  Minus,
  Plus,
  Key,
  Download,
  UserPlus,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  School,
  Trophy,
  Clock,
  AlertCircle,
  ArrowRight,
  Loader2,
} from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
import { cn } from '@/lib/utils'
import type {
  SchoolOverview,
  StudentAnalytics,
} from '@/lib/types'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

// ── Helpers ─────────────────────────────────────────────────────────────

function computeHealthScore(
  avgScore: number,
  completionRate: number,
  activeRatio: number,
  trajectoryScore: number,
): number {
  return Math.min(
    Math.max(
      Math.round(
        avgScore * 0.4 +
        completionRate * 0.3 +
        activeRatio * 0.2 +
        trajectoryScore * 0.1,
      ),
      0,
    ),
    100,
  )
}

function getHealthLabel(score: number): string {
  if (score >= 80) return 'Excellent'
  if (score >= 60) return 'Good'
  if (score >= 40) return 'Needs Attention'
  return 'At Risk'
}

function getHealthColor(score: number): string {
  if (score >= 75) return 'text-green-400'
  if (score >= 50) return 'text-amber-400'
  if (score >= 25) return 'text-orange-400'
  return 'text-red-400'
}

function getHealthStroke(score: number): string {
  if (score >= 75) return 'stroke-green-500'
  if (score >= 50) return 'stroke-amber-500'
  if (score >= 25) return 'stroke-orange-500'
  return 'stroke-red-500'
}

function classPerformanceColor(avgScore: number): string {
  if (avgScore > 70) return 'border-green-500/30 bg-green-500/[0.03]'
  if (avgScore >= 50) return 'border-amber-500/30 bg-amber-500/[0.03]'
  return 'border-red-500/30 bg-red-500/[0.03]'
}

function scoreBarBg(score: number): string {
  if (score > 70) return 'bg-green-500'
  if (score >= 50) return 'bg-amber-500'
  return 'bg-red-500'
}

function scoreBadgeClass(score: number): string {
  if (score > 70) return 'border-green-500/30 bg-green-500/10 text-green-400'
  if (score >= 50) return 'border-amber-500/30 bg-amber-500/10 text-amber-400'
  return 'border-red-500/30 bg-red-500/10 text-red-400'
}

function formatRelativeDate(iso: string | null) {
  if (!iso) return 'Never'
  const date = new Date(iso)
  const now = new Date()
  const diffDays = Math.floor((now.getTime() - date.getTime()) / 86_400_000)
  if (diffDays < 1) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays < 7) return `${diffDays}d ago`
  return `${Math.floor(diffDays / 7)}w ago`
}

function daysSince(iso: string | null): number {
  if (!iso) return 999
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000)
}

// ── Skeleton Loaders ────────────────────────────────────────────────────

function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <Skeleton className="h-3 w-20" />
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-16 mb-1" />
        <Skeleton className="h-3 w-24" />
      </CardContent>
    </Card>
  )
}

function ClassCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-5">
        <Skeleton className="h-5 w-32 mb-2" />
        <Skeleton className="h-3 w-24 mb-4" />
        <Skeleton className="h-3 w-full mb-2" />
        <Skeleton className="h-3 w-3/4" />
      </CardContent>
    </Card>
  )
}

function ListItemSkeleton() {
  return (
    <div className="flex items-center gap-3 py-3">
      <Skeleton className="h-8 w-8 rounded-lg shrink-0" />
      <div className="flex-1">
        <Skeleton className="h-4 w-32 mb-1" />
        <Skeleton className="h-3 w-20" />
      </div>
      <Skeleton className="h-5 w-12 rounded-full" />
    </div>
  )
}

// ── School Health Gauge (SVG circular gauge) ────────────────────────────

function SchoolHealthGauge({ score }: { score: number }) {
  const size = 160
  const strokeWidth = 12
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-muted"
            strokeWidth={strokeWidth}
          />
          {/* Progress arc */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className={cn('transition-all duration-700 ease-out', getHealthStroke(score))}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn('text-3xl font-bold tabular-nums', getHealthColor(score))}>
            {score}
          </span>
          <span className="text-xs text-muted-foreground mt-0.5">/ 100</span>
        </div>
      </div>
      <span className={cn('text-sm font-medium', getHealthColor(score))}>
        {getHealthLabel(score)}
      </span>
      <p className="text-xs text-muted-foreground text-center max-w-[220px]">
        {score >= 70
          ? 'Your school is performing well overall.'
          : score >= 50
          ? 'There are areas that need attention.'
          : 'Several areas need urgent improvement.'}
      </p>
      <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
        <span>40% score</span>
        <span>30% completion</span>
        <span>20% activity</span>
        <span>10% trajectory</span>
      </div>
    </div>
  )
}

// ── Weekly Trends CSS Bar Chart ─────────────────────────────────────────

function WeeklyTrendsChart({
  data,
}: {
  data: { label: string; value: number }[]
}) {
  return (
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
        {data.map((item, i) => (
          <div
            key={i}
            className="group relative flex flex-1 flex-col items-center"
          >
            {/* Hover tooltip */}
            <div className="pointer-events-none absolute -top-8 z-10 hidden rounded bg-background border border-border px-2 py-1 text-xs font-medium whitespace-nowrap group-hover:block">
              {item.value}%
            </div>
            {/* Bar */}
            <div
              className={cn(
                'w-full max-w-[40px] rounded-t transition-all duration-300',
                scoreBarBg(item.value),
              )}
              style={{ height: `${Math.max(item.value, 2)}%` }}
            />
            {/* Date label */}
            <span className="mt-1 text-[10px] text-muted-foreground leading-tight text-center hidden sm:block">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Main Component ──────────────────────────────────────────────────────

export default function SchoolOverviewPage() {
  const { user, isLoading: authLoading } = useAuthStore()
  const router = useRouter()
  const [overview, setOverview] = useState<SchoolOverview | null>(null)
  const [topStudents, setTopStudents] = useState<StudentAnalytics[]>([])
  const [atRiskStudents, setAtRiskStudents] = useState<StudentAnalytics[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Auth redirect guard
  useEffect(() => {
    if (!authLoading && !user) {
      window.location.href = '/auth/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
  }, [authLoading, user])

  useEffect(() => {
    if (!user) return

    async function fetchSchoolData() {
      try {
        setError(null)
        const res = await fetch('/api/school/overview')
        if (res.status === 403) {
          router.replace('/dashboard')
          return
        }
        if (!res.ok) throw new Error('Failed to load school data')
        const data = await res.json()
        setOverview(data.overview)
        setTopStudents(data.topStudents ?? [])
        setAtRiskStudents(data.atRiskStudents ?? [])
      } catch (err) {
        console.error('Failed to fetch school overview:', err)
        setError('Failed to load school data. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchSchoolData()
  }, [user, router])

  // ── Derived data ────────────────────────────────────────────────────

  const healthScore = useMemo(() => {
    if (!overview) return 0
    const activeRatio =
      overview.total_students > 0
        ? (overview.active_students_this_week / overview.total_students) * 100
        : 0

    const trajectoryScore =
      overview.trends.length >= 2
        ? overview.trends[overview.trends.length - 1].avg_score >
          overview.trends[0].avg_score
          ? 80
          : 40
        : 50

    return computeHealthScore(
      overview.avg_score_all,
      overview.completion_rate_all,
      activeRatio,
      trajectoryScore,
    )
  }, [overview])

  const weeklyChartData = useMemo(() => {
    if (!overview?.trends) return []
    return overview.trends.map((t) => ({
      label: new Date(t.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      }),
      value: Math.round(t.avg_score),
    }))
  }, [overview])

  // ── Quick Actions ─────────────────────────────────────────────────────

  const quickActions = [
    {
      label: 'Create Class',
      href: '/school/classes?action=create',
      icon: Plus,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: 'Generate Join Code',
      href: '/school/settings?tab=join-codes',
      icon: Key,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      label: 'Export Data',
      href: '/api/school/export',
      icon: Download,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      external: true,
    },
    {
      label: 'Invite Teacher',
      href: '/school/settings?tab=teachers',
      icon: UserPlus,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
  ]

  // ── Auth guard renders ────────────────────────────────────────────────

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return null // Will redirect via useEffect
  }

  // ── Render ────────────────────────────────────────────────────────────

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="mb-6 flex items-center gap-4 animate-fade-in">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <School className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
            School Overview
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor your school&apos;s English department performance at a glance.
          </p>
        </div>
      </div>

      {/* ── Error Banner ───────────────────────────────────────────────── */}
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription className="flex items-center justify-between">
            <span>{error}</span>
            <Button
              variant="destructive"
              size="sm"
              className="ml-4 shrink-0"
              onClick={() => {
                setLoading(true)
                setError(null)
                window.location.reload()
              }}
            >
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {/* ── Stats Row (4 cards) ────────────────────────────────────────── */}
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {loading ? (
          <>
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </>
        ) : overview ? (
          <>
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Total Students
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  {overview.total_students}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {overview.active_students_this_week} active this week
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <GraduationCap className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Total Classes
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  {overview.total_classes}
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {overview.total_teachers} teacher
                  {overview.total_teachers !== 1 ? 's' : ''}
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Average Score
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  {Math.round(overview.avg_score_all)}%
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  across all students
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10">
                    <CheckCircle className="h-5 w-5 text-amber-400" />
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Completion Rate
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold tracking-tight text-foreground">
                  {Math.round(overview.completion_rate_all)}%
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  modules completed
                </p>
              </CardContent>
            </Card>
          </>
        ) : null}
      </div>

      {/* ── Quick Actions Row ──────────────────────────────────────────── */}
      <div className="mb-6 flex flex-wrap gap-2">
        {quickActions.map((action) =>
          action.external ? (
            <Button
              key={action.href}
              variant="outline"
              size="default"
              className="group gap-2"
              onClick={() => window.open(action.href, '_blank')}
            >
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-md',
                  action.bg,
                )}
              >
                <action.icon className={cn('h-3.5 w-3.5', action.color)} />
              </span>
              {action.label}
            </Button>
          ) : (
            <Button
              key={action.href}
              variant="outline"
              size="default"
              className="group gap-2"
              render={<Link href={action.href} />}
            >
              <span
                className={cn(
                  'flex h-6 w-6 items-center justify-center rounded-md',
                  action.bg,
                )}
              >
                <action.icon className={cn('h-3.5 w-3.5', action.color)} />
              </span>
              {action.label}
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Button>
          ),
        )}
      </div>

      <Separator className="mb-6" />

      {/* ── School Health Score + Trends ────────────────────────────────── */}
      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        {/* School Health Gauge */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle>School Health Score</CardTitle>
            <CardDescription>
              Overall school performance indicator
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-4">
            {loading ? (
              <div className="flex flex-col items-center gap-3">
                <Skeleton className="h-40 w-40 rounded-full" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-3 w-48" />
              </div>
            ) : (
              <SchoolHealthGauge score={healthScore} />
            )}
          </CardContent>
        </Card>

        {/* Weekly Trends Bar Chart */}
        <Card className="lg:col-span-2 animate-fade-in">
          <CardHeader>
            <CardTitle>Weekly Average Scores</CardTitle>
            <CardDescription>
              Average scores across all classes over the last 8 weeks
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex h-48 items-end gap-2">
                <div className="flex h-full flex-col justify-between text-xs text-muted-foreground pr-2 shrink-0">
                  <Skeleton className="h-3 w-8" />
                  <Skeleton className="h-3 w-6" />
                  <Skeleton className="h-3 w-6" />
                  <Skeleton className="h-3 w-6" />
                  <Skeleton className="h-3 w-4" />
                </div>
                <div className="flex flex-1 items-end gap-1 sm:gap-2">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex flex-1 flex-col items-center gap-1"
                    >
                      <Skeleton
                        className="w-full max-w-[40px] rounded-t"
                        style={{ height: `${30 + Math.random() * 50}%` }}
                      />
                      <Skeleton className="h-2 w-8 hidden sm:block" />
                    </div>
                  ))}
                </div>
              </div>
            ) : weeklyChartData.length > 0 ? (
              <WeeklyTrendsChart data={weeklyChartData} />
            ) : (
              <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
                No weekly data available yet.
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator className="mb-6" />

      {/* ── Class Performance Grid ─────────────────────────────────────── */}
      <section className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground">
            Class Performance
          </h2>
          <Button
            variant="outline"
            size="sm"
            render={<Link href="/school/classes" />}
          >
            View All Classes
          </Button>
        </div>

        {loading ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <ClassCardSkeleton key={i} />
            ))}
          </div>
        ) : overview?.classes && overview.classes.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {overview.classes.map((cls) => (
              <Link key={cls.class_id} href={`/school/classes/${cls.class_id}`}>
                <Card
                  className={cn(
                    'transition-all hover:shadow-md hover:scale-[1.01] cursor-pointer',
                    classPerformanceColor(cls.avg_score),
                  )}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground truncate">
                          {cls.class_name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {cls.student_count} student
                          {cls.student_count !== 1 ? 's' : ''}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className={cn('text-xs shrink-0 ml-2', scoreBadgeClass(cls.avg_score))}
                      >
                        {Math.round(cls.avg_score)}%
                      </Badge>
                    </div>

                    {/* Avg Score Bar */}
                    <div className="mb-2">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-muted-foreground">
                          Avg Score
                        </span>
                        <span className="font-medium tabular-nums text-foreground">
                          {Math.round(cls.avg_score)}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn(
                            'h-full rounded-full transition-all duration-500',
                            scoreBarBg(cls.avg_score),
                          )}
                          style={{ width: `${cls.avg_score}%` }}
                        />
                      </div>
                    </div>

                    {/* Completion + At-Risk */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Completion:{' '}
                        <span className="text-foreground font-medium">
                          {Math.round(cls.completion_rate)}%
                        </span>
                      </span>
                      {cls.students_at_risk > 0 && (
                        <span className="flex items-center gap-1 text-red-400">
                          <AlertTriangle className="h-3 w-3" />
                          {cls.students_at_risk} at-risk
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <GraduationCap className="mb-3 h-10 w-10 text-muted-foreground" />
              <h3 className="mb-1 font-semibold text-foreground">
                No classes yet
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Create your first class to start tracking student performance.
              </p>
              <Button render={<Link href="/school/classes?action=create" />}>
                <Plus className="h-4 w-4" />
                Create Class
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      <Separator className="mb-6" />

      {/* ── Two-panel: Top Performers + At-Risk Students ────────────────── */}
      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        {/* Top Performers */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-400" />
              Top Performers
            </CardTitle>
            <CardDescription>
              Top 5 students by average score with trend arrows
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i}>
                    <ListItemSkeleton />
                    {i < 4 && <Separator />}
                  </div>
                ))}
              </div>
            ) : topStudents.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                <Trophy className="mx-auto mb-2 h-8 w-8 opacity-50" />
                <p className="text-sm">No student data available yet.</p>
              </div>
            ) : (
              <ScrollArea className="max-h-80">
                <div className="space-y-0">
                  {topStudents.slice(0, 5).map((student, i) => (
                    <div key={student.student_id}>
                      <Link href={`/school/students/${student.student_id}`}>
                        <div className="flex items-center gap-3 py-3 rounded-lg px-1 transition-colors hover:bg-accent/50 cursor-pointer">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-xs font-bold text-yellow-400">
                            #{i + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">
                              {student.student_name}
                            </p>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs text-muted-foreground">
                                {student.year_group ?? 'No year group'}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-sm font-semibold text-green-400 tabular-nums">
                              {Math.round(student.avg_quiz_score)}%
                            </span>
                            {student.trajectory === 'improving' ? (
                              <TrendingUp className="h-3.5 w-3.5 text-green-400" />
                            ) : student.trajectory === 'declining' ? (
                              <TrendingDown className="h-3.5 w-3.5 text-red-400" />
                            ) : (
                              <Minus className="h-3.5 w-3.5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </Link>
                      {i < Math.min(topStudents.length, 5) - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>

        {/* At-Risk Students */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              At-Risk Students
            </CardTitle>
            <CardDescription>
              Bottom 5 students &mdash; low scores or inactive
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i}>
                    <ListItemSkeleton />
                    {i < 4 && <Separator />}
                  </div>
                ))}
              </div>
            ) : atRiskStudents.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                <CheckCircle className="mx-auto mb-2 h-8 w-8 opacity-50 text-green-400" />
                <p className="text-sm">No at-risk students. Great work!</p>
              </div>
            ) : (
              <ScrollArea className="max-h-80">
                <div className="space-y-0">
                  {atRiskStudents.slice(0, 5).map((student, i) => {
                    const days = daysSince(student.last_active_at)
                    return (
                      <div key={student.student_id}>
                        <Link href={`/school/students/${student.student_id}`}>
                          <div className="flex items-center gap-3 py-3 rounded-lg px-1 transition-colors hover:bg-accent/50 cursor-pointer">
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
                              <AlertTriangle className="h-4 w-4 text-red-400" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">
                                {student.student_name}
                              </p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                  {student.year_group ?? 'No year group'}
                                </span>
                                <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  {formatRelativeDate(student.last_active_at)}
                                </span>
                              </div>
                            </div>
                            <div className="flex flex-col items-end gap-1 shrink-0">
                              <span className="text-sm font-semibold text-red-400 tabular-nums">
                                {Math.round(student.avg_quiz_score)}%
                              </span>
                              <Badge
                                variant="outline"
                                className={cn(
                                  'text-[10px] px-1.5 py-0',
                                  days >= 7
                                    ? 'border-red-500/30 bg-red-500/10 text-red-400'
                                    : days >= 3
                                    ? 'border-amber-500/30 bg-amber-500/10 text-amber-400'
                                    : 'border-border',
                                )}
                              >
                                {days >= 7
                                  ? 'Inactive'
                                  : days >= 3
                                  ? 'Slipping'
                                  : 'Low Score'}
                              </Badge>
                            </div>
                          </div>
                        </Link>
                        {i < Math.min(atRiskStudents.length, 5) - 1 && (
                          <Separator />
                        )}
                      </div>
                    )
                  })}
                </div>
              </ScrollArea>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

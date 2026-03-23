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
  BookOpen,
  ClipboardList,
  FileText,
  Lightbulb,
  Sparkles,
  Activity,
  Target,
  Zap,
} from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
import { cn } from '@/lib/utils'
import type {
  SchoolOverview,
  StudentAnalytics,
  Recommendation,
} from '@/lib/types'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { ParentalConsentBanner } from '@/components/school/parental-consent-banner'
import { StatCard } from '@/components/school/StatCard'
import { ActivityFeed, type ActivityType } from '@/components/school/ActivityFeed'
import { ClassCard } from '@/components/school/ClassCard'
import { RecommendationCard } from '@/components/school/RecommendationCard'
import { TrendChart } from '@/components/school/TrendChart'

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

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 17) return 'Good afternoon'
  return 'Good evening'
}

// ── Skeleton Loaders ────────────────────────────────────────────────────

function StatCardSkeleton() {
  return (
    <Card>
      <CardContent className="flex items-start gap-4 p-5">
        <Skeleton className="h-10 w-10 rounded-lg shrink-0" />
        <div className="flex-1">
          <Skeleton className="h-3 w-20 mb-2" />
          <Skeleton className="h-7 w-16 mb-1" />
          <Skeleton className="h-3 w-24" />
        </div>
      </CardContent>
    </Card>
  )
}

function QuickActionSkeleton() {
  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center py-6 px-4">
        <Skeleton className="h-12 w-12 rounded-xl mb-3" />
        <Skeleton className="h-4 w-20" />
      </CardContent>
    </Card>
  )
}

function ClassCardSkeletonBlock() {
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
  const size = 140
  const strokeWidth = 10
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            className="stroke-muted"
            strokeWidth={strokeWidth}
          />
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
    </div>
  )
}

// ── Main Component ──────────────────────────────────────────────────────

export default function SchoolOverviewPage() {
  const { user, profile, isLoading: authLoading } = useAuthStore()
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

  const teacherName = profile?.full_name ?? user?.email?.split('@')[0] ?? 'Teacher'
  const schoolName = overview?.school?.name ?? 'Your School'

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

  const trendChartData = useMemo(() => {
    if (!overview?.trends) return []
    return overview.trends.map((t) => ({
      label: new Date(t.date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
      }),
      value: Math.round(t.avg_score),
      secondaryValue: t.modules_completed,
    }))
  }, [overview])

  const modulesCompletedThisWeek = useMemo(() => {
    if (!overview?.trends || overview.trends.length === 0) return 0
    return overview.trends[overview.trends.length - 1]?.modules_completed ?? 0
  }, [overview])

  // Classes needing attention: avg score below 60% or declining trend
  const classesNeedingAttention = useMemo(() => {
    if (!overview?.classes) return []
    return overview.classes.filter((cls) => {
      const belowThreshold = cls.avg_score < 60
      const hasAtRisk = cls.students_at_risk > 0
      return belowThreshold || hasAtRisk
    }).sort((a, b) => a.avg_score - b.avg_score)
  }, [overview])

  // Build recommendations from class analytics
  const recommendations = useMemo(() => {
    if (!overview?.classes) return []
    const recs: Recommendation[] = []

    // Check for classes with very low scores
    const lowScoreClasses = overview.classes.filter((c) => c.avg_score < 50)
    if (lowScoreClasses.length > 0) {
      const totalAtRisk = lowScoreClasses.reduce((sum, c) => sum + c.students_at_risk, 0)
      recs.push({
        priority: 1,
        title: 'Urgent: Classes below 50% average',
        description: `${lowScoreClasses.length} class${lowScoreClasses.length > 1 ? 'es' : ''} (${lowScoreClasses.map((c) => c.class_name).join(', ')}) ${lowScoreClasses.length > 1 ? 'have' : 'has'} average scores below 50%. Consider targeted revision sessions.`,
        affected_students: totalAtRisk,
        suggested_action: 'Review weak areas and assign focused practice materials for these classes.',
      })
    }

    // Check for low active engagement
    if (overview.total_students > 0) {
      const activeRatio = overview.active_students_this_week / overview.total_students
      if (activeRatio < 0.5) {
        recs.push({
          priority: 2,
          title: 'Low student engagement this week',
          description: `Only ${overview.active_students_this_week} of ${overview.total_students} students (${Math.round(activeRatio * 100)}%) were active this week.`,
          affected_students: overview.total_students - overview.active_students_this_week,
          suggested_action: 'Send reminders to inactive students and consider setting weekly homework assignments.',
        })
      }
    }

    // Check for classes with high at-risk counts
    const highRiskClasses = overview.classes.filter((c) => c.students_at_risk >= 3)
    if (highRiskClasses.length > 0) {
      recs.push({
        priority: 2,
        title: 'Multiple at-risk students detected',
        description: `${highRiskClasses.length} class${highRiskClasses.length > 1 ? 'es have' : ' has'} 3 or more at-risk students who may need additional support.`,
        affected_students: highRiskClasses.reduce((sum, c) => sum + c.students_at_risk, 0),
        suggested_action: 'Review individual student reports and schedule one-to-one catch-up sessions.',
      })
    }

    // Positive recommendation if things are going well
    if (overview.avg_score_all >= 70 && recs.length === 0) {
      recs.push({
        priority: 3,
        title: 'Strong performance across the board',
        description: 'Your students are performing well overall. Consider introducing more challenging content to push top performers further.',
        affected_students: overview.total_students,
        suggested_action: 'Browse advanced lessons or create extension assignments for high-achieving students.',
      })
    }

    // Also collect recommendations from individual class analytics
    for (const cls of overview.classes) {
      if (cls.recommendations) {
        for (const rec of cls.recommendations) {
          // Avoid duplicates by checking titles
          if (!recs.some((r) => r.title === rec.title)) {
            recs.push(rec)
          }
        }
      }
    }

    return recs.sort((a, b) => a.priority - b.priority).slice(0, 4)
  }, [overview])

  // Build recent activity from trends
  const recentActivities = useMemo(() => {
    if (!overview?.trends || overview.trends.length === 0) return []
    const activities: { type: ActivityType; title: string; description?: string; timestamp: string }[] = []

    // Generate activity items from the most recent trends
    const recentTrends = overview.trends.slice(-5).reverse()
    for (const trend of recentTrends) {
      if (trend.modules_completed > 0) {
        activities.push({
          type: 'lesson_completed',
          title: `${trend.modules_completed} module${trend.modules_completed > 1 ? 's' : ''} completed across classes`,
          description: `Average score: ${Math.round(trend.avg_score)}%`,
          timestamp: trend.date,
        })
      }
      if (trend.practice_sessions > 0) {
        activities.push({
          type: 'practice_retry',
          title: `${trend.practice_sessions} practice session${trend.practice_sessions > 1 ? 's' : ''} completed`,
          description: `${trend.active_students} active students`,
          timestamp: trend.date,
        })
      }
    }

    // Add certificate-based activities from top students
    if (topStudents.length > 0) {
      const topCertStudents = topStudents.filter((s) => s.certificates_count > 0).slice(0, 2)
      for (const student of topCertStudents) {
        activities.push({
          type: 'certificate_earned',
          title: `${student.student_name} earned a certificate`,
          description: `Average score: ${Math.round(student.avg_quiz_score)}%`,
          timestamp: student.last_active_at ?? new Date().toISOString(),
        })
      }
    }

    return activities.slice(0, 8)
  }, [overview, topStudents])

  // ── Quick Actions ─────────────────────────────────────────────────────

  const quickActions = [
    {
      label: 'View Classes',
      href: '/school/classes',
      icon: GraduationCap,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      description: 'Manage your classes',
    },
    {
      label: 'Browse Lessons',
      href: '/courses',
      icon: BookOpen,
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      description: 'Explore course content',
    },
    {
      label: 'Student Reports',
      href: '/school/students',
      icon: FileText,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      description: 'View detailed analytics',
    },
    {
      label: 'Create Assignment',
      href: '/school/classes?action=create-assignment',
      icon: ClipboardList,
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      description: 'Set work for students',
    },
  ]

  const secondaryActions = [
    {
      label: 'Create Class',
      href: '/school/classes?action=create',
      icon: Plus,
      color: 'text-primary',
      bg: 'bg-primary/10',
    },
    {
      label: 'Join Codes',
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
      {/* ── Welcome Banner ───────────────────────────────────────────────── */}
      <div className="mb-8 animate-fade-in">
        <Card className="bg-gradient-to-br from-primary/5 via-background to-blue-500/5 border-primary/20">
          <CardContent className="py-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-2 ring-primary/20">
                  <School className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                    {getGreeting()}, {teacherName.split(' ')[0]}
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {loading ? (
                      <Skeleton className="h-4 w-48 inline-block" />
                    ) : (
                      <>
                        Welcome to your <span className="font-medium text-foreground">{schoolName}</span> command centre
                      </>
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" render={<Link href="/school/settings" />}>
                  School Settings
                </Button>
                <Button size="sm" render={<Link href="/school/classes?action=create" />}>
                  <Plus className="h-4 w-4 mr-1" />
                  New Class
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
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

      {/* ── Parental Consent Banner ──────────────────────────────────────── */}
      {overview?.school?.id && (
        <ParentalConsentBanner schoolId={overview.school.id} />
      )}

      {/* ── Quick Action Cards (primary) ─────────────────────────────────── */}
      <section className="mb-6 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Zap className="h-5 w-5 text-amber-400" />
            Quick Actions
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {quickActions.map((action) => (
            <Link key={action.href} href={action.href}>
              <Card className="group h-full transition-all duration-200 hover:shadow-md hover:scale-[1.02] hover:border-primary/30 cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center py-6 px-4 text-center">
                  <div
                    className={cn(
                      'flex h-12 w-12 items-center justify-center rounded-xl mb-3 transition-transform group-hover:scale-110',
                      action.bg,
                    )}
                  >
                    <action.icon className={cn('h-6 w-6', action.color)} />
                  </div>
                  <span className="font-semibold text-sm text-foreground">
                    {action.label}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {action.description}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* ── At-a-glance KPIs (4 stat cards) ──────────────────────────────── */}
      <section className="mb-6 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-400" />
            At a Glance
          </h2>
          <Badge variant="outline" className="text-xs text-muted-foreground">
            This week
          </Badge>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {loading ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : overview ? (
            <>
              <StatCard
                title="Total Students"
                value={overview.total_students}
                subtitle={`across ${overview.total_classes} class${overview.total_classes !== 1 ? 'es' : ''}`}
                icon={Users}
                color="primary"
                trend={
                  overview.active_students_this_week >= overview.total_students * 0.7
                    ? 'up'
                    : overview.active_students_this_week >= overview.total_students * 0.4
                    ? 'neutral'
                    : 'down'
                }
                trendValue={`${overview.active_students_this_week} active`}
              />
              <StatCard
                title="Active This Week"
                value={overview.active_students_this_week}
                subtitle={
                  overview.total_students > 0
                    ? `${Math.round((overview.active_students_this_week / overview.total_students) * 100)}% of students`
                    : 'No students yet'
                }
                icon={TrendingUp}
                color="blue"
                trend={
                  overview.total_students > 0 &&
                  overview.active_students_this_week / overview.total_students >= 0.6
                    ? 'up'
                    : 'neutral'
                }
              />
              <StatCard
                title="Avg Class Score"
                value={`${Math.round(overview.avg_score_all)}%`}
                subtitle="across all classes"
                icon={BarChart3}
                color={overview.avg_score_all >= 70 ? 'green' : overview.avg_score_all >= 50 ? 'amber' : 'red'}
                trend={
                  overview.trends.length >= 2
                    ? overview.trends[overview.trends.length - 1].avg_score >
                      overview.trends[overview.trends.length - 2].avg_score
                      ? 'up'
                      : overview.trends[overview.trends.length - 1].avg_score <
                        overview.trends[overview.trends.length - 2].avg_score
                      ? 'down'
                      : 'neutral'
                    : 'neutral'
                }
                trendValue={
                  overview.trends.length >= 2
                    ? `${Math.abs(
                        Math.round(
                          overview.trends[overview.trends.length - 1].avg_score -
                            overview.trends[overview.trends.length - 2].avg_score,
                        ),
                      )}% vs last week`
                    : undefined
                }
              />
              <StatCard
                title="Modules Completed"
                value={modulesCompletedThisWeek}
                subtitle="completed this week"
                icon={CheckCircle}
                color="green"
                trend={modulesCompletedThisWeek > 0 ? 'up' : 'neutral'}
              />
            </>
          ) : null}
        </div>
      </section>

      <Separator className="mb-6" />

      {/* ── Classes Needing Attention ─────────────────────────────────────── */}
      {!loading && classesNeedingAttention.length > 0 && (
        <section className="mb-6 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              Classes Needing Attention
            </h2>
            <Badge variant="outline" className="border-red-500/30 bg-red-500/10 text-red-400 text-xs">
              {classesNeedingAttention.length} class{classesNeedingAttention.length !== 1 ? 'es' : ''}
            </Badge>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {classesNeedingAttention.slice(0, 3).map((cls) => (
              <ClassCard
                key={cls.class_id}
                classData={{
                  classId: cls.class_id,
                  className: cls.class_name,
                  studentCount: cls.student_count,
                  avgScore: cls.avg_score,
                  completionRate: cls.completion_rate,
                  atRiskCount: cls.students_at_risk,
                }}
                onClick={(id) => router.push(`/school/classes/${id}`)}
              />
            ))}
          </div>
          {classesNeedingAttention.length > 3 && (
            <div className="mt-3 text-center">
              <Button variant="ghost" size="sm" render={<Link href="/school/classes" />}>
                View all {classesNeedingAttention.length} classes
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          )}
        </section>
      )}

      {/* ── School Health + Trends ────────────────────────────────────────── */}
      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        {/* School Health Gauge */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              School Health
            </CardTitle>
            <CardDescription>
              Overall performance indicator
            </CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center py-4">
            {loading ? (
              <div className="flex flex-col items-center gap-3">
                <Skeleton className="h-36 w-36 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
            ) : (
              <SchoolHealthGauge score={healthScore} />
            )}
          </CardContent>
          {!loading && (
            <div className="px-6 pb-4">
              <div className="flex items-center justify-center gap-3 text-[10px] text-muted-foreground">
                <span>40% score</span>
                <span>30% completion</span>
                <span>20% activity</span>
                <span>10% trajectory</span>
              </div>
            </div>
          )}
        </Card>

        {/* Weekly Score Trends (line chart) */}
        <Card className="lg:col-span-2 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-emerald-400" />
              Weekly Trends
            </CardTitle>
            <CardDescription>
              Average scores and module completions over recent weeks
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center h-48">
                <Skeleton className="h-full w-full rounded-lg" />
              </div>
            ) : trendChartData.length > 0 ? (
              <TrendChart
                data={trendChartData}
                height={200}
                color="#22c55e"
                secondaryColor="#3b82f6"
                label="Avg Score"
                secondaryLabel="Modules Completed"
                showArea
              />
            ) : (
              <div className="flex h-48 items-center justify-center text-muted-foreground text-sm">
                No weekly data available yet.
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator className="mb-6" />

      {/* ── Two-panel: Recent Activity + Recommended Actions ──────────────── */}
      <div className="mb-6 grid gap-4 lg:grid-cols-2">
        {/* Recent Activity Feed */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-blue-400" />
              Recent Activity
            </CardTitle>
            <CardDescription>
              Latest activity across your classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-0">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i}>
                    <ListItemSkeleton />
                    {i < 3 && <Separator />}
                  </div>
                ))}
              </div>
            ) : (
              <ActivityFeed activities={recentActivities} maxItems={6} />
            )}
          </CardContent>
        </Card>

        {/* Recommended Actions */}
        <Card className="animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-amber-400" />
              Recommended Actions
            </CardTitle>
            <CardDescription>
              Suggestions based on your class analytics
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-24 w-full rounded-lg" />
                  </div>
                ))}
              </div>
            ) : recommendations.length > 0 ? (
              <ScrollArea className="max-h-[420px]">
                <div className="space-y-3">
                  {recommendations.map((rec, i) => (
                    <RecommendationCard
                      key={i}
                      priority={rec.priority}
                      title={rec.title}
                      description={rec.description}
                      affectedStudents={rec.affected_students}
                      suggestedAction={rec.suggested_action}
                      actionLabel="View details"
                      actionHref={rec.course_ids?.[0] ? `/school/classes` : '/school/students'}
                    />
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <div className="py-8 text-center text-muted-foreground">
                <Sparkles className="mx-auto mb-2 h-8 w-8 opacity-50 text-amber-400" />
                <p className="text-sm">No recommendations at this time.</p>
                <p className="text-xs mt-1">Check back as more student data comes in.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Separator className="mb-6" />

      {/* ── Class Performance Grid ─────────────────────────────────────── */}
      <section className="mb-6 animate-fade-in">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-400" />
            All Classes
          </h2>
          <Button
            variant="outline"
            size="sm"
            render={<Link href="/school/classes" />}
          >
            View All
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {loading ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <ClassCardSkeletonBlock key={i} />
            ))}
          </div>
        ) : overview?.classes && overview.classes.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {overview.classes.map((cls) => (
              <ClassCard
                key={cls.class_id}
                classData={{
                  classId: cls.class_id,
                  className: cls.class_name,
                  studentCount: cls.student_count,
                  avgScore: cls.avg_score,
                  completionRate: cls.completion_rate,
                  atRiskCount: cls.students_at_risk,
                }}
                onClick={(id) => router.push(`/school/classes/${id}`)}
              />
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
              Top 5 students by average score
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
              Students with low scores or inactive
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

      {/* ── Secondary Quick Actions Row ──────────────────────────────────── */}
      <section className="mb-6 animate-fade-in">
        <div className="flex items-center gap-2 mb-3">
          <h3 className="text-sm font-medium text-muted-foreground">More actions</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {secondaryActions.map((action) =>
            action.external ? (
              <Button
                key={action.href}
                variant="outline"
                size="sm"
                className="group gap-2"
                onClick={() => window.open(action.href, '_blank')}
              >
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-md',
                    action.bg,
                  )}
                >
                  <action.icon className={cn('h-3 w-3', action.color)} />
                </span>
                {action.label}
              </Button>
            ) : (
              <Button
                key={action.href}
                variant="outline"
                size="sm"
                className="group gap-2"
                render={<Link href={action.href} />}
              >
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-md',
                    action.bg,
                  )}
                >
                  <action.icon className={cn('h-3 w-3', action.color)} />
                </span>
                {action.label}
                <ArrowRight className="h-3 w-3 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Button>
            ),
          )}
        </div>
      </section>
    </div>
  )
}

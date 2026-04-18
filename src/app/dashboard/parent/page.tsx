'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import {
  AlertCircle,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle,
  Clock,
  Flame,
  Link2,
  LinkIcon,
  Mail,
  Target,
  TrendingDown,
  TrendingUp,
  Unlink,
  UserPlus,
  Loader2,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { loadAllCourses } from '@/data/course-loader'
import { cn, formatDate, formatDuration } from '@/lib/utils'
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from '@/lib/grades'
import type { CourseData } from '@/lib/types'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

// ── Types ────────────────────────────────────────────────────────────────────

interface ChildProgress {
  child_id: string
  child_name: string
  child_email: string
  enrolments: Array<{
    course_id: string
    enrolled_at: string
  }>
  module_progress: Array<{
    id: string
    course_id: string
    module_id: string
    completed: boolean
    quiz_score: number | null
    time_spent_seconds: number
    completed_at: string | null
  }>
  certificates: Array<{
    id: string
    course_id: string
    score: number
    grade: string
    issued_at: string
  }>
}

interface WeeklyActivity {
  week: string
  label: string
  modulesCompleted: number
  timeSpentSeconds: number
  avgScore: number | null
}

// ── Helpers ──────────────────────────────────────────────────────────────────

// courseMap is built dynamically inside the component — see useMemo below

function formatRelativeDate(iso: string) {
  const date = new Date(iso)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60_000)
  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins}m ago`
  const diffHours = Math.floor(diffMins / 60)
  if (diffHours < 24) return `${diffHours}h ago`
  const diffDays = Math.floor(diffHours / 24)
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(iso)
}

function getWeekKey(date: Date): string {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Monday start
  d.setDate(diff)
  return d.toISOString().split('T')[0]
}

function getWeekLabel(weekKey: string): string {
  const d = new Date(weekKey)
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
}

function computeWeeklyActivity(
  moduleProgress: ChildProgress['module_progress']
): WeeklyActivity[] {
  const weekMap = new Map<string, { modules: number; time: number; scores: number[] }>()

  // Generate last 8 weeks
  const now = new Date()
  for (let i = 7; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(d.getDate() - i * 7)
    const key = getWeekKey(d)
    if (!weekMap.has(key)) {
      weekMap.set(key, { modules: 0, time: 0, scores: [] })
    }
  }

  for (const mp of moduleProgress) {
    if (!mp.completed || !mp.completed_at) continue
    const key = getWeekKey(new Date(mp.completed_at))
    const entry = weekMap.get(key)
    if (entry) {
      entry.modules++
      entry.time += mp.time_spent_seconds
      if (mp.quiz_score !== null) entry.scores.push(mp.quiz_score)
    }
  }

  return Array.from(weekMap.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([week, data]) => ({
      week,
      label: getWeekLabel(week),
      modulesCompleted: data.modules,
      timeSpentSeconds: data.time,
      avgScore: data.scores.length > 0
        ? Math.round(data.scores.reduce((a, b) => a + b, 0) / data.scores.length)
        : null,
    }))
}

// ── Skeleton Components ──────────────────────────────────────────────────────

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
        <Skeleton className="h-8 w-14 mb-1" />
        <Skeleton className="h-3 w-16" />
      </CardContent>
    </Card>
  )
}

// ── Link Child Form ──────────────────────────────────────────────────────────

function LinkChildForm({ onLinked }: { onLinked: () => void }) {
  const [childEmail, setChildEmail] = useState('')
  const [inviteCode, setInviteCode] = useState('')
  const [linking, setLinking] = useState(false)
  const [linkError, setLinkError] = useState<string | null>(null)
  const [linkSuccess, setLinkSuccess] = useState(false)

  async function handleLink(e: React.FormEvent) {
    e.preventDefault()
    if (!childEmail && !inviteCode) return

    setLinking(true)
    setLinkError(null)
    setLinkSuccess(false)

    try {
      const res = await fetch('/api/parent/link-child', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          child_email: childEmail || undefined,
          invite_code: inviteCode || undefined,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setLinkError(data.error || 'Failed to link child account.')
        return
      }

      setLinkSuccess(true)
      setChildEmail('')
      setInviteCode('')
      onLinked()
    } catch {
      setLinkError('Something went wrong. Please try again.')
    } finally {
      setLinking(false)
    }
  }

  return (
    <Card className="border-dashed border-primary/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Link2 className="h-5 w-5 text-primary" />
          Link Your Child&rsquo;s Account
        </CardTitle>
        <CardDescription>
          Enter your child&rsquo;s email address or invite code to connect your accounts and view their progress.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLink} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="child-email">Child&rsquo;s Email</Label>
              <Input
                id="child-email"
                type="email"
                placeholder="child@example.com"
                value={childEmail}
                onChange={(e) => setChildEmail(e.target.value)}
                disabled={linking}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="invite-code">Or Invite Code</Label>
              <Input
                id="invite-code"
                type="text"
                placeholder="ABC-123-XYZ"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                disabled={linking}
              />
            </div>
          </div>

          {linkError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{linkError}</AlertDescription>
            </Alert>
          )}

          {linkSuccess && (
            <Alert>
              <CheckCircle className="h-4 w-4 text-primary" />
              <AlertDescription>Successfully linked! A confirmation has been sent to your child&rsquo;s account.</AlertDescription>
            </Alert>
          )}

          <Button type="submit" disabled={linking || (!childEmail && !inviteCode)}>
            {linking ? 'Linking...' : 'Link Account'}
            <LinkIcon className="h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function ParentDashboardPage() {
  const { user, profile, isLoading: authLoading } = useAuthStore()
  const [allCourses, setAllCourses] = useState<CourseData[]>([])
  const [childProgress, setChildProgress] = useState<ChildProgress | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [hasLinkedChild, setHasLinkedChild] = useState(false)
  const [unlinking, setUnlinking] = useState(false)

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
    if (!authLoading && !user) {
      window.location.href = '/auth/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
  }, [authLoading, user])

  const fetchProgress = useCallback(async () => {
    if (!user) return

    try {
      setError(null)
      setLoading(true)

      const res = await fetch('/api/parent/progress')
      const data = await res.json()

      if (res.status === 404) {
        setHasLinkedChild(false)
        setChildProgress(null)
        return
      }

      if (!res.ok) {
        setError(data.error || 'Failed to load progress data.')
        return
      }

      setHasLinkedChild(true)
      setChildProgress(data)
    } catch {
      setError('Something went wrong loading the dashboard. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [user])

  useEffect(() => {
    fetchProgress()
  }, [fetchProgress])

  // ── Derived data ──────────────────────────────────────────────────────────

  const completedModulesCount = useMemo(
    () => childProgress?.module_progress.filter((mp) => mp.completed).length ?? 0,
    [childProgress]
  )

  const totalTimeSeconds = useMemo(
    () => childProgress?.module_progress.reduce((sum, mp) => sum + mp.time_spent_seconds, 0) ?? 0,
    [childProgress]
  )

  const thisWeekTimeSeconds = useMemo(() => {
    if (!childProgress) return 0
    const thisWeek = getWeekKey(new Date())
    return childProgress.module_progress
      .filter((mp) => mp.completed_at && getWeekKey(new Date(mp.completed_at)) === thisWeek)
      .reduce((sum, mp) => sum + mp.time_spent_seconds, 0)
  }, [childProgress])

  const averageScore = useMemo(() => {
    if (!childProgress) return null
    const scores = childProgress.module_progress
      .filter((mp) => mp.quiz_score !== null)
      .map((mp) => mp.quiz_score!)
    if (scores.length === 0) return null
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  }, [childProgress])

  const streak = useMemo(() => {
    if (!childProgress) return 0
    const completedDates = childProgress.module_progress
      .filter((mp) => mp.completed && mp.completed_at)
      .map((mp) => new Date(mp.completed_at!).toDateString())
    const uniqueDates = Array.from(new Set(completedDates)).sort(
      (a, b) => new Date(b).getTime() - new Date(a).getTime()
    )

    let count = 0
    const today = new Date()
    for (let i = 0; i < uniqueDates.length; i++) {
      const expected = new Date(today)
      expected.setDate(expected.getDate() - i)
      if (uniqueDates[i] === expected.toDateString()) {
        count++
      } else if (i === 0) {
        // Allow for not having studied today yet
        const yesterday = new Date(today)
        yesterday.setDate(yesterday.getDate() - 1)
        if (uniqueDates[i] === yesterday.toDateString()) {
          count++
        } else {
          break
        }
      } else {
        break
      }
    }
    return count
  }, [childProgress])

  const weeklyActivity = useMemo(
    () => childProgress ? computeWeeklyActivity(childProgress.module_progress) : [],
    [childProgress]
  )

  const courseProgressList = useMemo(() => {
    if (!childProgress) return []
    return childProgress.enrolments.map((e) => {
      const course = courseMap.get(e.course_id)
      if (!course) return null
      const totalModules = course.moduleList.length
      const completed = childProgress.module_progress.filter(
        (mp) => mp.course_id === e.course_id && mp.completed
      ).length
      const scores = childProgress.module_progress
        .filter((mp) => mp.course_id === e.course_id && mp.quiz_score !== null)
        .map((mp) => mp.quiz_score!)
      const avgScore = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : null
      return {
        course,
        totalModules,
        completedModules: completed,
        progress: totalModules > 0 ? (completed / totalModules) * 100 : 0,
        avgScore,
      }
    }).filter(Boolean) as Array<{
      course: CourseData
      totalModules: number
      completedModules: number
      progress: number
      avgScore: number | null
    }>
  }, [childProgress])

  const weakAreas = useMemo(() => {
    if (!childProgress) return []
    const courseScores = new Map<string, { total: number; count: number; courseName: string }>()
    for (const mp of childProgress.module_progress) {
      if (mp.quiz_score === null) continue
      const course = courseMap.get(mp.course_id)
      if (!course) continue
      const entry = courseScores.get(mp.course_id) ?? { total: 0, count: 0, courseName: course.title }
      entry.total += mp.quiz_score
      entry.count++
      courseScores.set(mp.course_id, entry)
    }
    return Array.from(courseScores.entries())
      .map(([id, data]) => ({
        courseId: id,
        courseName: data.courseName,
        avgScore: Math.round(data.total / data.count),
      }))
      .filter((a) => a.avgScore < 70)
      .sort((a, b) => a.avgScore - b.avgScore)
  }, [childProgress])

  const recentActivity = useMemo(() => {
    if (!childProgress) return []
    return childProgress.module_progress
      .filter((mp) => mp.completed && mp.completed_at)
      .sort((a, b) => new Date(b.completed_at!).getTime() - new Date(a.completed_at!).getTime())
      .slice(0, 8)
  }, [childProgress])

  // ── Exam readiness score ──────────────────────────────────────────────────

  const examReadiness = useMemo(() => {
    if (!childProgress || courseProgressList.length === 0) return 0
    const avgCompletion = courseProgressList.reduce((sum, cp) => sum + cp.progress, 0) / courseProgressList.length
    const scoreComponent = averageScore ?? 0
    // Weighted: 60% completion, 40% average score
    return Math.round(avgCompletion * 0.6 + scoreComponent * 0.4)
  }, [childProgress, courseProgressList, averageScore])

  // ── Working At Grade (recent performance) & Predicted Grade (trajectory) ──

  const workingAtGrade = useMemo(() => {
    if (!childProgress) return null
    // Use the last 4 weeks of quiz scores to determine current working grade
    const fourWeeksAgo = new Date()
    fourWeeksAgo.setDate(fourWeeksAgo.getDate() - 28)
    const recentScores = childProgress.module_progress
      .filter(
        (mp) =>
          mp.quiz_score !== null &&
          mp.completed_at &&
          new Date(mp.completed_at) >= fourWeeksAgo
      )
      .map((mp) => mp.quiz_score!)
    if (recentScores.length === 0) return averageScore !== null ? percentageToGCSEGrade(averageScore) : null
    const recentAvg = Math.round(recentScores.reduce((a, b) => a + b, 0) / recentScores.length)
    return percentageToGCSEGrade(recentAvg)
  }, [childProgress, averageScore])

  const predictedGrade = useMemo(() => {
    if (!childProgress) return null
    // Use score trend: if recent scores are higher than earlier, project upward
    const sorted = childProgress.module_progress
      .filter((mp) => mp.quiz_score !== null && mp.completed_at)
      .sort((a, b) => new Date(a.completed_at!).getTime() - new Date(b.completed_at!).getTime())
    if (sorted.length < 2) return workingAtGrade
    const firstHalf = sorted.slice(0, Math.floor(sorted.length / 2))
    const secondHalf = sorted.slice(Math.floor(sorted.length / 2))
    const firstAvg = firstHalf.reduce((s, mp) => s + mp.quiz_score!, 0) / firstHalf.length
    const secondAvg = secondHalf.reduce((s, mp) => s + mp.quiz_score!, 0) / secondHalf.length
    // Project the improvement forward by half again
    const projected = Math.min(100, Math.max(0, secondAvg + (secondAvg - firstAvg) * 0.5))
    return percentageToGCSEGrade(Math.round(projected))
  }, [childProgress, workingAtGrade])

  // ── Unlink handler ────────────────────────────────────────────────────────

  async function handleUnlink() {
    if (!childProgress?.child_id) return
    if (!confirm('Are you sure you want to unlink your child\'s account? You will lose access to their progress data.')) return
    setUnlinking(true)
    try {
      const res = await fetch('/api/parent/link-child', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ child_id: childProgress.child_id }),
      })
      if (res.ok) {
        setHasLinkedChild(false)
        setChildProgress(null)
      }
    } catch {
      // Ignore
    } finally {
      setUnlinking(false)
    }
  }

  // ── Chart bar max ─────────────────────────────────────────────────────────

  const maxModules = Math.max(1, ...weeklyActivity.map((w) => w.modulesCompleted))

  const childFirstName = childProgress?.child_name?.split(' ')[0] ?? 'Your child'
  const childInitials = (childProgress?.child_name ?? 'C')
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  // ── Auth guard renders ────────────────────────────────────────────────────

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

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

          {/* ── Header ──────────────────────────────────────────── */}
          <div className="mb-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-1">
              <BarChart3 className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Parent Dashboard
              </h1>
            </div>
            <p className="text-sm text-muted-foreground">
              Track your child&rsquo;s learning progress and exam readiness.
            </p>
          </div>

          {/* ── Error Banner ──────────────────────────────────── */}
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
                  onClick={() => fetchProgress()}
                >
                  Retry
                </Button>
              </AlertDescription>
            </Alert>
          )}

          {/* ── Loading State ─────────────────────────────────── */}
          {loading && (
            <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
              <StatCardSkeleton />
            </div>
          )}

          {/* ── No Linked Child ───────────────────────────────── */}
          {!loading && !hasLinkedChild && (
            <div className="space-y-6">
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                    <UserPlus className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold text-foreground">No child account linked</h3>
                  <p className="mb-6 text-sm text-muted-foreground max-w-md">
                    Link your child&rsquo;s account to start seeing their learning progress, quiz scores, and exam readiness.
                  </p>
                </CardContent>
              </Card>
              <LinkChildForm onLinked={fetchProgress} />
            </div>
          )}

          {/* ── Child Linked — Dashboard ──────────────────────── */}
          {!loading && hasLinkedChild && childProgress && (
            <>
              {/* Child info bar */}
              <div className="mb-6 flex items-center justify-between animate-fade-in">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{childInitials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{childProgress.child_name}</p>
                    <p className="text-xs text-muted-foreground">{childProgress.child_email}</p>
                  </div>
                  <Badge variant="outline" className="ml-2">
                    <CheckCircle className="h-3 w-3 mr-1 text-primary" />
                    Linked
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleUnlink}
                  disabled={unlinking}
                  className="text-muted-foreground"
                >
                  <Unlink className="h-3.5 w-3.5" />
                  {unlinking ? 'Unlinking...' : 'Unlink'}
                </Button>
              </div>

              {/* ── Working At Grade & Predicted Grade ────────── */}
              {(workingAtGrade !== null || predictedGrade !== null) && (
                <Card className="mb-6 animate-fade-in">
                  <CardContent className="py-5">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
                      {workingAtGrade !== null && (
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                              Working At Grade
                            </p>
                            <div className={cn(
                              'inline-flex items-center justify-center h-14 w-14 rounded-xl border-2 text-2xl font-extrabold',
                              workingAtGrade >= 7
                                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                                : workingAtGrade >= 5
                                ? 'border-amber-500/30 bg-amber-500/10 text-clay-600'
                                : 'border-red-500/30 bg-red-500/10 text-red-400'
                            )}>
                              {workingAtGrade}
                            </div>
                          </div>
                        </div>
                      )}
                      {workingAtGrade !== null && predictedGrade !== null && (
                        <Separator orientation="vertical" className="hidden sm:block h-14" />
                      )}
                      {predictedGrade !== null && (
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                              Predicted Grade
                            </p>
                            <div className={cn(
                              'inline-flex items-center justify-center h-14 w-14 rounded-xl border-2 text-2xl font-extrabold',
                              predictedGrade >= 7
                                ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400'
                                : predictedGrade >= 5
                                ? 'border-amber-500/30 bg-amber-500/10 text-clay-600'
                                : 'border-red-500/30 bg-red-500/10 text-red-400'
                            )}>
                              {predictedGrade}
                            </div>
                          </div>
                          {predictedGrade > (workingAtGrade ?? 0) && (
                            <div className="flex items-center gap-1 text-xs text-emerald-400">
                              <TrendingUp className="h-3.5 w-3.5" />
                              Trending up
                            </div>
                          )}
                          {predictedGrade < (workingAtGrade ?? 0) && (
                            <div className="flex items-center gap-1 text-xs text-clay-600">
                              <TrendingDown className="h-3.5 w-3.5" />
                              Needs attention
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                      GCSE grades 1&ndash;9 &middot; Based on {childFirstName}&rsquo;s recent performance and progress trajectory
                    </p>
                  </CardContent>
                </Card>
              )}

              {/* ── Stats Row ──────────────────────────────────── */}
              <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                <StatCard
                  icon={<CheckCircle className="h-5 w-5" />}
                  iconBg="bg-primary/10"
                  iconColor="text-primary"
                  label="Completed"
                  value={completedModulesCount}
                  sub={completedModulesCount === 1 ? 'module' : 'modules'}
                  tooltip="Total modules completed across all courses"
                />
                <StatCard
                  icon={<Target className="h-5 w-5" />}
                  iconBg="bg-emerald-500/10"
                  iconColor="text-emerald-400"
                  label="Avg Score"
                  value={averageScore !== null ? `${averageScore}%` : '--'}
                  sub="practice average"
                  tooltip="Average quiz score across all completed modules"
                />
                <StatCard
                  icon={<Clock className="h-5 w-5" />}
                  iconBg="bg-blue-500/10"
                  iconColor="text-blue-400"
                  label="This Week"
                  value={formatDuration(thisWeekTimeSeconds)}
                  sub="study time"
                  tooltip="Total study time logged this week"
                />
                <StatCard
                  icon={<Flame className="h-5 w-5" />}
                  iconBg="bg-amber-500/10"
                  iconColor="text-clay-600"
                  label="Streak"
                  value={streak}
                  sub={streak === 1 ? 'day' : 'days'}
                  tooltip="Consecutive days with at least one module completed"
                />
              </div>

              {/* ── Exam Readiness ─────────────────────────────── */}
              <Card className="mb-6 animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Exam Readiness Score
                  </CardTitle>
                  <CardDescription>
                    Based on course completion and average quiz performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6">
                    <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
                      <svg className="h-24 w-24 -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50" cy="50" r="42"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          className="text-muted/30"
                        />
                        <circle
                          cx="50" cy="50" r="42"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${examReadiness * 2.64} 264`}
                          className={cn(
                            examReadiness >= 70 ? 'text-emerald-400' :
                            examReadiness >= 40 ? 'text-clay-600' :
                            'text-red-400'
                          )}
                        />
                      </svg>
                      <span className="absolute text-2xl font-bold text-foreground">{examReadiness}</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {examReadiness >= 80
                          ? `${childFirstName} is well-prepared. Keep up the great work!`
                          : examReadiness >= 60
                          ? `${childFirstName} is making good progress. A few more sessions will boost their readiness.`
                          : examReadiness >= 40
                          ? `${childFirstName} is getting there, but more practice is needed in key areas.`
                          : `${childFirstName} needs more study time to build exam confidence. Encourage regular sessions.`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ── Weekly Activity Chart ──────────────────────── */}
              <Card className="mb-6 animate-fade-in">
                <CardHeader>
                  <CardTitle>Weekly Activity</CardTitle>
                  <CardDescription>Modules completed per week (last 8 weeks)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end gap-2 h-40">
                    {weeklyActivity.map((w) => (
                      <Tooltip key={w.week}>
                        <TooltipTrigger className="flex-1 flex flex-col items-center gap-1">
                          <span className="text-xs font-semibold text-foreground tabular-nums">
                            {w.modulesCompleted > 0 ? w.modulesCompleted : ''}
                          </span>
                          <div
                            className={cn(
                              'w-full rounded-t-md transition-all duration-300',
                              w.modulesCompleted > 0 ? 'bg-primary' : 'bg-muted/50'
                            )}
                            style={{
                              height: `${Math.max(4, (w.modulesCompleted / maxModules) * 120)}px`,
                            }}
                          />
                          <span className="text-[10px] text-muted-foreground">{w.label}</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{w.modulesCompleted} modules &middot; {formatDuration(w.timeSpentSeconds)}</p>
                          {w.avgScore !== null && <p>Avg score: {w.avgScore}%</p>}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ── Two-column: Course Progress + Weak Areas ─── */}
              <div className="grid gap-4 lg:grid-cols-2 mb-6">
                {/* Course Progress */}
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle>Course Progress</CardTitle>
                    <CardDescription>
                      {courseProgressList.length} course{courseProgressList.length !== 1 ? 's' : ''} enrolled
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {courseProgressList.length === 0 ? (
                      <div className="py-8 text-center text-muted-foreground">
                        <BookOpen className="mx-auto mb-2 h-8 w-8 opacity-50" />
                        <p className="text-sm">No courses enrolled yet.</p>
                      </div>
                    ) : (
                      <ScrollArea className="max-h-80">
                        <div className="space-y-4">
                          {courseProgressList.map((cp) => (
                            <div key={cp.course.id}>
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2 min-w-0">
                                  <span
                                    className="inline-block h-2 w-2 rounded-full shrink-0"
                                    style={{ backgroundColor: cp.course.color }}
                                  />
                                  <span className="text-sm font-medium text-foreground truncate">
                                    {cp.course.title}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  {cp.avgScore !== null && (
                                    <Badge variant="secondary" className="text-xs">
                                      {cp.avgScore}%
                                    </Badge>
                                  )}
                                  <span className="text-xs text-muted-foreground tabular-nums">
                                    {cp.completedModules}/{cp.totalModules}
                                  </span>
                                </div>
                              </div>
                              <Progress value={cp.progress} />
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    )}
                  </CardContent>
                </Card>

                {/* Weak Areas */}
                <Card className="animate-fade-in">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-clay-600" />
                      Weak Areas Identified
                    </CardTitle>
                    <CardDescription>
                      Courses where {childFirstName}&rsquo;s average score is below 70%
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {weakAreas.length === 0 ? (
                      <div className="py-8 text-center text-muted-foreground">
                        <CheckCircle className="mx-auto mb-2 h-8 w-8 opacity-50 text-emerald-400" />
                        <p className="text-sm">No weak areas detected. Great work!</p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {weakAreas.map((area) => (
                          <div
                            key={area.courseId}
                            className="flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/[0.04] px-4 py-3"
                          >
                            <div className="flex items-center gap-3">
                              <TrendingDown className="h-4 w-4 text-clay-600 shrink-0" />
                              <div>
                                <p className="text-sm font-medium text-foreground">{area.courseName}</p>
                                <p className="text-xs text-muted-foreground">
                                  {childFirstName} needs more practice here
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className="border-amber-500/30 text-clay-600">
                              {area.avgScore}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* ── Recent Activity Feed ──────────────────────── */}
              <Card className="mb-6 animate-fade-in">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>{childFirstName}&rsquo;s latest completed modules</CardDescription>
                </CardHeader>
                <CardContent>
                  {recentActivity.length === 0 ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <Clock className="mx-auto mb-2 h-8 w-8 opacity-50" />
                      <p className="text-sm">No activity yet.</p>
                    </div>
                  ) : (
                    <ScrollArea className="max-h-80">
                      <div className="space-y-0">
                        {recentActivity.map((activity, index) => {
                          const course = courseMap.get(activity.course_id)
                          const mod = course?.moduleList.find(
                            (m) => m.id === activity.module_id
                          )
                          return (
                            <div key={activity.id}>
                              <div className="flex items-center gap-3 py-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                  <CheckCircle className="h-4 w-4 text-primary" />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-sm font-medium text-foreground">
                                    {mod?.title ?? 'Unknown module'}
                                  </p>
                                  <p className="truncate text-xs text-muted-foreground">
                                    {course?.title ?? 'Unknown course'}
                                    {activity.completed_at && (
                                      <span className="ml-1.5 opacity-70">
                                        &middot; {formatRelativeDate(activity.completed_at)}
                                      </span>
                                    )}
                                  </p>
                                </div>
                                {activity.quiz_score !== null && (
                                  <Badge variant="secondary" className="shrink-0">
                                    {percentageToGCSEGradeLabel(activity.quiz_score)}
                                  </Badge>
                                )}
                              </div>
                              {index < recentActivity.length - 1 && <Separator />}
                            </div>
                          )
                        })}
                      </div>
                    </ScrollArea>
                  )}
                </CardContent>
              </Card>

              <Separator className="mb-6" />

              {/* ── Link / Manage ─────────────────────────────── */}
              <LinkChildForm onLinked={fetchProgress} />
            </>
          )}
        </div>
      </div>
    </TooltipProvider>
  )
}

// ── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  icon,
  iconBg,
  iconColor,
  label,
  value,
  sub,
  tooltip,
}: {
  icon: React.ReactNode
  iconBg: string
  iconColor: string
  label: string
  value: React.ReactNode
  sub: string
  tooltip: string
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="text-left">
        <Card className="animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', iconBg)}>
                <span className={iconColor}>{icon}</span>
              </div>
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                {label}
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tracking-tight text-foreground">{value}</div>
            <p className="mt-0.5 text-sm text-muted-foreground">{sub}</p>
          </CardContent>
        </Card>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  )
}

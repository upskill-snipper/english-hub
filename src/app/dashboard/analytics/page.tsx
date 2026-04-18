'use client'

import { useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Flame,
  Target,
  TrendingUp,
  FileText,
  Lightbulb,
  AlertTriangle,
  Layers,
  Users,
  Activity,
  Loader2,
} from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
import { useAnalytics } from '@/hooks/useAnalytics'
import { formatDuration, formatDate, cn } from '@/lib/utils'
import { percentageToGCSEGradeLabel, percentageToGCSEGrade, gcseGradeColor } from '@/lib/grades'
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ProgressBar } from '@/components/analytics/ProgressBar'
import { WeeklyActivityChart } from '@/components/analytics/WeeklyActivityChart'
import { SkillRadar } from '@/components/analytics/SkillRadar'
import { ExamReadinessGauge } from '@/components/analytics/ExamReadinessGauge'

// ── Helpers ──────────────────────────────────────────────────────────────────

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

function formatStudyTime(seconds: number): string {
  if (seconds < 60) return '<1m'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

// ── Skeleton Components ──────────────────────────────────────────────────────

function OverviewCardSkeleton() {
  return (
    <Card>
      <CardContent className="pt-5">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-lg" />
          <div className="flex-1">
            <Skeleton className="h-3 w-16 mb-2" />
            <Skeleton className="h-7 w-12" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SectionSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-3 w-48" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      </CardContent>
    </Card>
  )
}

// ── Activity Icon ────────────────────────────────────────────────────────────

function ActivityIcon({ type }: { type: 'module' | 'assessment' | 'practice' }) {
  switch (type) {
    case 'module':
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
          <CheckCircle className="h-4 w-4 text-primary" />
        </div>
      )
    case 'assessment':
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10">
          <Target className="h-4 w-4 text-clay-600" />
        </div>
      )
    case 'practice':
      return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
          <FileText className="h-4 w-4 text-blue-400" />
        </div>
      )
  }
}

// ── Recommendation Icon ──────────────────────────────────────────────────────

function RecIcon({ type }: { type: 'weak_area' | 'next_module' | 'revision' }) {
  switch (type) {
    case 'weak_area':
      return <AlertTriangle className="h-4 w-4 text-clay-600" />
    case 'next_module':
      return <ArrowRight className="h-4 w-4 text-primary" />
    case 'revision':
      return <Layers className="h-4 w-4 text-purple-400" />
  }
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function AnalyticsPage() {
  const { user, profile, isLoading } = useAuthStore()
  const analytics = useAnalytics()

  // Auth redirect guard
  useEffect(() => {
    if (!isLoading && !user) {
      window.location.href = '/auth/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
  }, [isLoading, user])

  const {
    totalStudyTimeSeconds,
    weekStudyTimeSeconds,
    modulesCompleted,
    totalModules,
    averagePracticeScore,
    currentStreak,
    examReadiness,
    courseProgress,
    skillScores,
    weeklyActivity,
    recommendations,
    recentActivity,
    loading,
    error,
  } = analytics

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

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">

          {/* ── Header ──────────────────────────────────────────────── */}
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between animate-fade-in">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" render={<Link href="/dashboard" />}>
                <ArrowLeft className="h-4 w-4" />
                Dashboard
              </Button>
              <Separator orientation="vertical" className="h-6" />
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground">
                  Progress Analytics
                </h1>
                <p className="text-sm text-muted-foreground">
                  Track your learning journey and exam preparation
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="self-start sm:self-auto" render={<Link href="/dashboard/analytics/class" />}>
              <Users className="h-4 w-4" />
              Class View
            </Button>
          </div>

          {/* ── Error Banner ──────────────────────────────────────── */}
          {error && (
            <div className="mb-6 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* ── Overview Cards ────────────────────────────────────── */}
          <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
            {loading ? (
              <>
                <OverviewCardSkeleton />
                <OverviewCardSkeleton />
                <OverviewCardSkeleton />
                <OverviewCardSkeleton />
                <OverviewCardSkeleton />
              </>
            ) : (
              <>
                {/* Study Time */}
                <Tooltip>
                  <TooltipTrigger className="text-left">
                    <Card className="animate-fade-in">
                      <CardContent className="pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                            <Clock className="h-5 w-5 text-blue-400" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              Study Time
                            </p>
                            <p className="text-xl font-bold tabular-nums text-foreground">
                              {formatStudyTime(weekStudyTimeSeconds)}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              this week ({formatStudyTime(totalStudyTimeSeconds)} total)
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>Total time spent studying across modules, practice and assessments</TooltipContent>
                </Tooltip>

                {/* Modules Completed */}
                <Tooltip>
                  <TooltipTrigger className="text-left">
                    <Card className="animate-fade-in">
                      <CardContent className="pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              Modules
                            </p>
                            <p className="text-xl font-bold tabular-nums text-foreground">
                              {modulesCompleted}
                              <span className="text-sm font-normal text-muted-foreground">
                                /{totalModules}
                              </span>
                            </p>
                            <p className="text-[11px] text-muted-foreground">completed</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>Modules completed out of total enrolled</TooltipContent>
                </Tooltip>

                {/* Average Score */}
                <Tooltip>
                  <TooltipTrigger className="text-left">
                    <Card className="animate-fade-in">
                      <CardContent className="pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              Working At Grade
                            </p>
                            <p className={`text-xl font-bold tabular-nums ${gcseGradeColor(percentageToGCSEGrade(averagePracticeScore))}`}>
                              Grade {percentageToGCSEGrade(averagePracticeScore)}
                            </p>
                            <p className="text-[11px] text-muted-foreground">based on avg score ({averagePracticeScore}%)</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>Average score from quizzes, assessments, and practice ratings</TooltipContent>
                </Tooltip>

                {/* Streak */}
                <Tooltip>
                  <TooltipTrigger className="text-left">
                    <Card className="animate-fade-in">
                      <CardContent className="pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                            <Flame className="h-5 w-5 text-clay-600" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              Streak
                            </p>
                            <p className="text-xl font-bold tabular-nums text-foreground">
                              {currentStreak}
                            </p>
                            <p className="text-[11px] text-muted-foreground">
                              {currentStreak === 1 ? 'day' : 'days'} in a row
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>Consecutive days with at least one study activity</TooltipContent>
                </Tooltip>

                {/* Exam Readiness */}
                <Tooltip>
                  <TooltipTrigger className="text-left">
                    <Card className="animate-fade-in">
                      <CardContent className="pt-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                            <Target className="h-5 w-5 text-purple-400" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                              Exam Ready
                            </p>
                            <p className="text-xl font-bold tabular-nums text-foreground">
                              {examReadiness}%
                            </p>
                            <p className="text-[11px] text-muted-foreground">readiness score</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    Calculated from course completion (40%), practice scores (30%), and skill coverage (30%)
                  </TooltipContent>
                </Tooltip>
              </>
            )}
          </div>

          <Separator className="mb-6" />

          {/* ── Two-column: Course Progress + Exam Readiness Gauge ── */}
          <div className="mb-6 grid gap-4 lg:grid-cols-3">
            {/* Course Progress */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Course Progress</CardTitle>
                <CardDescription>
                  {courseProgress.length > 0
                    ? `${courseProgress.length} enrolled course${courseProgress.length === 1 ? '' : 's'}`
                    : 'Enrol in courses to track progress'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-48" />
                        <Skeleton className="h-2.5 w-full rounded-full" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    ))}
                  </div>
                ) : courseProgress.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <BookOpen className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    <p className="text-sm">No enrolled courses yet.</p>
                    <Button
                      variant="link"
                      size="sm"
                      className="mt-2"
                      render={<Link href="/courses" />}
                    >
                      Browse Courses <ArrowRight className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                ) : (
                  <ScrollArea className="max-h-[360px]">
                    <div className="space-y-5">
                      {courseProgress.map((cp) => (
                        <div key={cp.courseId}>
                          <div className="mb-1 flex items-center gap-2">
                            <span
                              className="inline-block h-2 w-2 rounded-full"
                              style={{ backgroundColor: cp.course.color }}
                            />
                            <Badge variant="outline" className="text-[10px] uppercase">
                              {cp.course.level}
                            </Badge>
                          </div>
                          <ProgressBar
                            value={cp.completedModules}
                            max={cp.totalModules}
                            label={cp.course.title}
                            sublabel={`${cp.completedModules}/${cp.totalModules} modules`}
                            size="md"
                          />
                          {cp.lastActivity && (
                            <p className="mt-0.5 text-[11px] text-muted-foreground">
                              Last activity: {formatRelativeDate(cp.lastActivity)}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>

            {/* Exam Readiness Gauge */}
            <Card>
              <CardHeader>
                <CardTitle>Exam Readiness</CardTitle>
                <CardDescription>Overall preparation level</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex flex-col items-center gap-4 py-4">
                    <Skeleton className="h-[120px] w-[120px] rounded-full" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                ) : (
                  <div className="flex flex-col items-center py-2">
                    <ExamReadinessGauge percentage={examReadiness} />
                    <p className="mt-4 text-center text-xs text-muted-foreground leading-relaxed">
                      Based on course completion, practice scores, and skill coverage.
                      {examReadiness < 50 && (
                        <span className="mt-1 block">
                          Keep studying and practising to improve your readiness score.
                        </span>
                      )}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* ── Two-column: Skills + Weekly Activity ─────────────── */}
          <div className="mb-6 grid gap-4 lg:grid-cols-2">
            {/* Performance by Skill Area */}
            <Card>
              <CardHeader>
                <CardTitle>Performance by Skill Area</CardTitle>
                <CardDescription>Based on practice questions and assessments</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-5">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-2">
                        <Skeleton className="h-4 w-36" />
                        <Skeleton className="h-2 w-full rounded-full" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <SkillRadar skills={skillScores} />
                )}
              </CardContent>
            </Card>

            {/* Weekly Activity Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>Study time and questions answered (last 7 days)</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-end gap-2" style={{ height: 160 }}>
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <Skeleton
                          className="w-full max-w-8 rounded-t-md"
                          style={{ height: `${20 + Math.random() * 80}%` }}
                        />
                        <Skeleton className="h-3 w-6" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <WeeklyActivityChart data={weeklyActivity} />
                )}
              </CardContent>
            </Card>
          </div>

          {/* ── Two-column: Recommendations + Recent Activity ────── */}
          <div className="mb-6 grid gap-4 lg:grid-cols-2">
            {/* Weak Areas & Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Lightbulb className="mr-1.5 inline-block h-4 w-4 text-clay-600" />
                  Recommendations
                </CardTitle>
                <CardDescription>Areas to focus on for improvement</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Skeleton className="h-8 w-8 rounded-lg shrink-0" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-40 mb-1" />
                          <Skeleton className="h-3 w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : recommendations.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <Lightbulb className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    <p className="text-sm">
                      Complete more activities to receive personalised recommendations.
                    </p>
                  </div>
                ) : (
                  <ScrollArea className="max-h-[320px]">
                    <div className="space-y-1">
                      {recommendations.map((rec, index) => (
                        <div key={index}>
                          <div className="flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-secondary">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                              <RecIcon type={rec.type} />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-foreground">
                                {rec.title}
                              </p>
                              <p className="text-xs text-muted-foreground">{rec.description}</p>
                              {rec.href && (
                                <Button
                                  variant="link"
                                  size="xs"
                                  className="mt-0.5 h-auto p-0"
                                  render={<Link href={rec.href} />}
                                >
                                  Go <ArrowRight className="h-3 w-3" />
                                </Button>
                              )}
                            </div>
                          </div>
                          {index < recommendations.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>

            {/* Recent Activity Feed */}
            <Card>
              <CardHeader>
                <CardTitle>
                  <Activity className="mr-1.5 inline-block h-4 w-4 text-blue-400" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Your latest learning activities</CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="space-y-0">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex items-center gap-3 py-3">
                        <Skeleton className="h-9 w-9 rounded-lg shrink-0" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-48 mb-1.5" />
                          <Skeleton className="h-3 w-28" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : recentActivity.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <Clock className="mx-auto mb-2 h-8 w-8 opacity-50" />
                    <p className="text-sm">
                      No activity yet. Start a course or try a practice question.
                    </p>
                  </div>
                ) : (
                  <ScrollArea className="max-h-[320px]">
                    <div className="space-y-0">
                      {recentActivity.map((item, index) => (
                        <div key={item.id}>
                          <div className="flex items-center gap-3 py-2.5">
                            <ActivityIcon type={item.type} />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-foreground">
                                {item.title}
                              </p>
                              <p className="truncate text-xs text-muted-foreground">
                                {item.subtitle}
                                <span className="ml-1.5 opacity-70">
                                  · {formatRelativeDate(item.timestamp)}
                                </span>
                              </p>
                            </div>
                            {item.score !== null && (
                              <Badge variant="secondary" className="shrink-0">
                                {percentageToGCSEGradeLabel(item.score)}
                              </Badge>
                            )}
                          </div>
                          {index < recentActivity.length - 1 && <Separator />}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                )}
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </TooltipProvider>
  )
}

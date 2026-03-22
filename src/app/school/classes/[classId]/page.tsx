'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Users,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  Activity,
  Download,
  UserPlus,
  Loader2,
  ArrowUp,
  ArrowDown,
  Minus,
  CheckCircle,
} from 'lucide-react'
import { cn, formatDuration } from '@/lib/utils'
import type {
  Class,
  ClassAnalytics,
  StudentAnalytics,
  WeakArea,
  Recommendation,
} from '@/lib/types'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { StudentTable } from '@/components/school/StudentTable'
import { WeakAreaHeatMap } from '@/components/school/WeakAreaHeatMap'
import { TrendChart } from '@/components/school/TrendChart'

// ── Inline Exam Readiness Gauge ──────────────────────────────────────────────

function ClassExamGauge({ score }: { score: number }) {
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

// ── Types ────────────────────────────────────────────────────────────────────

interface ClassDetail extends Class {
  teacher_name?: string
}

interface ClassAnalyticsData extends ClassAnalytics {
  students: StudentAnalytics[]
  exam_readiness: number
  weekly_activity: { label: string; value: number }[]
  trends: { label: string; value: number }[]
}

// ── Skeleton ─────────────────────────────────────────────────────────────────

function StatCardSkeleton() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <Skeleton className="h-3 w-20" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-8 w-14 mb-1" />
        <Skeleton className="h-3 w-16" />
      </CardContent>
    </Card>
  )
}

// ── Main Component ───────────────────────────────────────────────────────────

export default function ClassDetailPage() {
  const params = useParams()
  const router = useRouter()
  const classId = params.classId as string

  const [classInfo, setClassInfo] = useState<ClassDetail | null>(null)
  const [analytics, setAnalytics] = useState<ClassAnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Add student form
  const [addStudentEmail, setAddStudentEmail] = useState('')
  const [addingStudent, setAddingStudent] = useState(false)
  const [addStudentError, setAddStudentError] = useState<string | null>(null)
  const [addStudentSuccess, setAddStudentSuccess] = useState(false)

  // ── Fetch data ───────────────────────────────────────────────────────────

  const fetchData = useCallback(async () => {
    try {
      setError(null)
      const [classRes, analyticsRes] = await Promise.all([
        fetch(`/api/school/classes?classId=${classId}`),
        fetch(`/api/school/classes/${classId}/analytics`),
      ])

      if (!classRes.ok) throw new Error('Failed to load class')
      if (!analyticsRes.ok) throw new Error('Failed to load analytics')

      const classData = await classRes.json()
      const analyticsData = await analyticsRes.json()

      setClassInfo(classData)
      setAnalytics(analyticsData)
    } catch (err) {
      console.error('Failed to fetch class data:', err)
      setError('Could not load class data. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [classId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // ── Derived data ─────────────────────────────────────────────────────────

  const students = analytics?.students ?? []
  const weakAreas = analytics?.weak_areas ?? []
  const recommendations = analytics?.recommendations ?? []

  const trajectoryBreakdown = useMemo(() => {
    if (students.length === 0) return { improving: 0, stable: 0, declining: 0 }
    const counts = { improving: 0, stable: 0, declining: 0 }
    for (const s of students) {
      counts[s.trajectory] = (counts[s.trajectory] ?? 0) + 1
    }
    return counts
  }, [students])

  const trajectoryPercentages = useMemo(() => {
    const total = students.length || 1
    return {
      improving: Math.round((trajectoryBreakdown.improving / total) * 100),
      stable: Math.round((trajectoryBreakdown.stable / total) * 100),
      declining: Math.round((trajectoryBreakdown.declining / total) * 100),
    }
  }, [trajectoryBreakdown, students.length])

  // ── Add student ──────────────────────────────────────────────────────────

  async function handleAddStudent(e: React.FormEvent) {
    e.preventDefault()
    if (!addStudentEmail.trim()) return

    setAddingStudent(true)
    setAddStudentError(null)
    setAddStudentSuccess(false)

    try {
      const res = await fetch(`/api/school/classes/${classId}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: addStudentEmail.trim() }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error ?? 'Failed to add student')
      }

      setAddStudentEmail('')
      setAddStudentSuccess(true)
      // Refresh data
      fetchData()
      setTimeout(() => setAddStudentSuccess(false), 3000)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong'
      setAddStudentError(message)
    } finally {
      setAddingStudent(false)
    }
  }

  // ── Export CSV ───────────────────────────────────────────────────────────

  function handleExportCSV() {
    if (students.length === 0) return

    const headers = ['Name', 'Email', 'Avg Score', 'Completion %', 'Time Spent', 'Trajectory', 'Predicted Grade']
    const rows = students.map((s) => [
      s.student_name,
      s.student_email,
      Math.round(s.avg_quiz_score).toString(),
      Math.round(s.completion_rate).toString(),
      formatDuration(s.total_time_spent_seconds),
      s.trajectory,
      s.predicted_grade ?? '-',
    ])

    const csv = [headers.join(','), ...rows.map((r) => r.map((c) => `"${c}"`).join(','))].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${classInfo?.name ?? 'class'}-students.csv`
    link.click()
    URL.revokeObjectURL(url)
  }

  // ── Loading state ────────────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Skeleton className="h-5 w-24 mb-4" />
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-40 mb-6" />
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-6">
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
            <StatCardSkeleton />
          </div>
          <Skeleton className="h-10 w-96 mb-4" />
          <Skeleton className="h-64 w-full rounded-xl" />
        </div>
      </div>
    )
  }

  // ── Error state ──────────────────────────────────────────────────────────

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/school/classes"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to classes
          </Link>
          <div className="rounded-xl border border-dashed border-destructive/30 bg-destructive/5 py-12 text-center">
            <p className="text-sm text-destructive">{error}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setLoading(true)
                fetchData()
              }}
            >
              Try again
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // ── Render ───────────────────────────────────────────────────────────────

  const avgScore = analytics?.avg_score ?? 0
  const completionRate = analytics?.completion_rate ?? 0
  const atRiskCount = analytics?.students_at_risk ?? 0
  const examReadiness = analytics?.exam_readiness ?? Math.round((avgScore * 0.6) + (completionRate * 0.4))

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        {/* Back link & header */}
        <Link
          href="/school/classes"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to classes
        </Link>

        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
              {classInfo?.name ?? 'Class'}
            </h1>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              {classInfo?.year_group && <span>{classInfo.year_group}</span>}
              {classInfo?.exam_board && (
                <Badge variant="outline" className="text-xs uppercase">
                  {classInfo.exam_board}
                </Badge>
              )}
              {classInfo?.teacher_name && (
                <span>Taught by {classInfo.teacher_name}</span>
              )}
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard
            label="Students"
            value={students.length}
            icon={<Users className="h-4 w-4" />}
            iconBg="bg-primary/10"
            iconColor="text-primary"
          />
          <StatCard
            label="Avg Score"
            value={`${Math.round(avgScore)}%`}
            icon={<BarChart3 className="h-4 w-4" />}
            iconBg={avgScore >= 70 ? 'bg-green-500/10' : avgScore >= 50 ? 'bg-amber-500/10' : 'bg-red-500/10'}
            iconColor={avgScore >= 70 ? 'text-green-400' : avgScore >= 50 ? 'text-amber-400' : 'text-red-400'}
          />
          <StatCard
            label="Completion"
            value={`${Math.round(completionRate)}%`}
            icon={<TrendingUp className="h-4 w-4" />}
            iconBg="bg-blue-500/10"
            iconColor="text-blue-400"
          />
          <StatCard
            label="At Risk"
            value={atRiskCount}
            icon={<AlertTriangle className="h-4 w-4" />}
            iconBg={atRiskCount > 0 ? 'bg-red-500/10' : 'bg-green-500/10'}
            iconColor={atRiskCount > 0 ? 'text-red-400' : 'text-green-400'}
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="students">
              Students
              {students.length > 0 && (
                <Badge variant="secondary" className="ml-1.5">{students.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="weak-areas">
              Weak Areas
              {weakAreas.filter((w) => w.severity === 'critical').length > 0 && (
                <Badge variant="destructive" className="ml-1.5">
                  {weakAreas.filter((w) => w.severity === 'critical').length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          {/* ── Overview Tab ──────────────────────────────────────────────── */}
          <TabsContent value="overview">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Exam Readiness Gauge */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Exam Readiness</CardTitle>
                  <CardDescription>Overall class preparedness score</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center py-4">
                  <ClassExamGauge score={examReadiness} />
                </CardContent>
              </Card>

              {/* Weekly Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Weekly Activity</CardTitle>
                  <CardDescription>Modules completed per week</CardDescription>
                </CardHeader>
                <CardContent>
                  {analytics?.weekly_activity && analytics.weekly_activity.length > 0 ? (
                    <div className="flex items-end gap-1 sm:gap-2" style={{ height: 160 }}>
                      {analytics.weekly_activity.map((week, i) => {
                        const maxVal = Math.max(...analytics.weekly_activity!.map((w) => w.value), 1)
                        const heightPct = (week.value / maxVal) * 100
                        return (
                          <div key={i} className="group relative flex flex-1 flex-col items-center">
                            <div className="pointer-events-none absolute -top-7 z-10 hidden rounded bg-background border border-border px-2 py-0.5 text-xs font-medium whitespace-nowrap group-hover:block">
                              {week.value} modules
                            </div>
                            <div
                              className="w-full max-w-[40px] rounded-t bg-primary/80 transition-all duration-300"
                              style={{ height: `${Math.max(heightPct, 2)}%`, minHeight: week.value > 0 ? 4 : 2 }}
                            />
                            <span className="mt-1 text-[10px] text-muted-foreground leading-tight text-center hidden sm:block">
                              {week.label}
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
                      No weekly activity data yet.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* ── Students Tab ──────────────────────────────────────────────── */}
          <TabsContent value="students">
            <Card>
              <CardHeader>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle className="text-base">Student Performance</CardTitle>
                    <CardDescription>{students.length} student{students.length !== 1 ? 's' : ''} enrolled</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={handleExportCSV} disabled={students.length === 0}>
                      <Download className="h-3.5 w-3.5" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Add Student form */}
                <form onSubmit={handleAddStudent} className="mb-4 flex items-end gap-2">
                  <div className="flex-1 max-w-sm space-y-1.5">
                    <Label htmlFor="add-student-email" className="text-xs">Add Student by Email</Label>
                    <Input
                      id="add-student-email"
                      type="email"
                      placeholder="student@school.ac.uk"
                      value={addStudentEmail}
                      onChange={(e) => {
                        setAddStudentEmail(e.target.value)
                        setAddStudentError(null)
                        setAddStudentSuccess(false)
                      }}
                    />
                  </div>
                  <Button type="submit" size="sm" disabled={addingStudent || !addStudentEmail.trim()}>
                    {addingStudent ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    ) : (
                      <UserPlus className="h-3.5 w-3.5" />
                    )}
                    Add
                  </Button>
                </form>

                {addStudentError && (
                  <p className="mb-3 text-sm text-destructive">{addStudentError}</p>
                )}
                {addStudentSuccess && (
                  <p className="mb-3 flex items-center gap-1.5 text-sm text-green-400">
                    <CheckCircle className="h-3.5 w-3.5" />
                    Student added successfully
                  </p>
                )}

                <Separator className="mb-4" />

                {/* Student Table */}
                <StudentTable
                  students={students}
                  onRowClick={(studentId) => router.push(`/school/students/${studentId}`)}
                  showSearch
                />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Weak Areas Tab ────────────────────────────────────────────── */}
          <TabsContent value="weak-areas">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Weak Areas</CardTitle>
                <CardDescription>
                  Areas where students are struggling, sorted by severity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WeakAreaHeatMap weakAreas={weakAreas} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Recommendations Tab ───────────────────────────────────────── */}
          <TabsContent value="recommendations">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recommendations</CardTitle>
                <CardDescription>
                  Priority-ranked suggestions to improve class performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recommendations.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
                      <Lightbulb className="h-7 w-7 text-green-400" />
                    </div>
                    <h3 className="mb-1 font-semibold text-foreground">Great work!</h3>
                    <p className="text-sm text-muted-foreground">
                      No critical areas identified. Keep up the excellent teaching.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {recommendations
                      .sort((a, b) => a.priority - b.priority)
                      .map((rec, i) => (
                        <RecommendationCard key={i} recommendation={rec} />
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* ── Trends Tab ────────────────────────────────────────────────── */}
          <TabsContent value="trends">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Score trend chart */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">Class Average Score Over Time</CardTitle>
                  <CardDescription>Weekly average across all students</CardDescription>
                </CardHeader>
                <CardContent>
                  {analytics?.trends && analytics.trends.length > 0 ? (
                    <TrendChart
                      data={analytics.trends.map((t) => ({
                        label: t.label,
                        value: t.value,
                      }))}
                      height={220}
                      maxValue={100}
                      color="#22c55e"
                      label="Avg Score %"
                      showArea
                      showDots
                    />
                  ) : (
                    <div className="flex h-48 items-center justify-center text-sm text-muted-foreground">
                      Not enough data to show trends yet. Check back after a few weeks of activity.
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Trajectory distribution */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="text-base">Trajectory Distribution</CardTitle>
                  <CardDescription>How students are trending across the class</CardDescription>
                </CardHeader>
                <CardContent>
                  {students.length === 0 ? (
                    <div className="flex h-24 items-center justify-center text-sm text-muted-foreground">
                      No student data available.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {/* Visual bar */}
                      <div className="flex h-8 w-full overflow-hidden rounded-lg">
                        {trajectoryPercentages.improving > 0 && (
                          <div
                            className="flex items-center justify-center bg-green-500/80 text-xs font-semibold text-white transition-all duration-500"
                            style={{ width: `${trajectoryPercentages.improving}%` }}
                          >
                            {trajectoryPercentages.improving > 10 && `${trajectoryPercentages.improving}%`}
                          </div>
                        )}
                        {trajectoryPercentages.stable > 0 && (
                          <div
                            className="flex items-center justify-center bg-amber-500/80 text-xs font-semibold text-white transition-all duration-500"
                            style={{ width: `${trajectoryPercentages.stable}%` }}
                          >
                            {trajectoryPercentages.stable > 10 && `${trajectoryPercentages.stable}%`}
                          </div>
                        )}
                        {trajectoryPercentages.declining > 0 && (
                          <div
                            className="flex items-center justify-center bg-red-500/80 text-xs font-semibold text-white transition-all duration-500"
                            style={{ width: `${trajectoryPercentages.declining}%` }}
                          >
                            {trajectoryPercentages.declining > 10 && `${trajectoryPercentages.declining}%`}
                          </div>
                        )}
                      </div>

                      {/* Legend */}
                      <div className="flex flex-wrap items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                          <ArrowUp className="h-4 w-4 text-green-400" />
                          <span className="text-muted-foreground">Improving</span>
                          <span className="font-semibold text-foreground">
                            {trajectoryPercentages.improving}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({trajectoryBreakdown.improving} student{trajectoryBreakdown.improving !== 1 ? 's' : ''})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Minus className="h-4 w-4 text-amber-400" />
                          <span className="text-muted-foreground">Stable</span>
                          <span className="font-semibold text-foreground">
                            {trajectoryPercentages.stable}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({trajectoryBreakdown.stable} student{trajectoryBreakdown.stable !== 1 ? 's' : ''})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <ArrowDown className="h-4 w-4 text-red-400" />
                          <span className="text-muted-foreground">Declining</span>
                          <span className="font-semibold text-foreground">
                            {trajectoryPercentages.declining}%
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ({trajectoryBreakdown.declining} student{trajectoryBreakdown.declining !== 1 ? 's' : ''})
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// ── Sub-components ───────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon,
  iconBg,
  iconColor,
}: {
  label: string
  value: React.ReactNode
  icon: React.ReactNode
  iconBg: string
  iconColor: string
}) {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className={cn('flex h-8 w-8 items-center justify-center rounded-lg', iconBg)}>
            <span className={iconColor}>{icon}</span>
          </div>
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold tracking-tight text-foreground">{value}</div>
      </CardContent>
    </Card>
  )
}

function RecommendationCard({ recommendation }: { recommendation: Recommendation }) {
  const priorityConfig = {
    1: { label: 'P1', bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
    2: { label: 'P2', bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
    3: { label: 'P3', bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  }

  const config = priorityConfig[recommendation.priority] ?? priorityConfig[3]

  return (
    <div className={cn('rounded-lg border p-4 transition-colors', config.border, config.bg)}>
      <div className="flex items-start gap-3">
        <Badge
          variant="outline"
          className={cn('shrink-0 text-xs font-bold', config.text, config.border)}
        >
          {config.label}
        </Badge>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-foreground">{recommendation.title}</h4>
          <p className="mt-1 text-sm text-muted-foreground">{recommendation.description}</p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
            <span className={cn('font-medium', config.text)}>
              {recommendation.affected_students} student{recommendation.affected_students !== 1 ? 's' : ''} affected
            </span>
            {recommendation.suggested_action && (
              <>
                <Separator orientation="vertical" className="h-3" />
                <span className="text-muted-foreground">
                  Suggested: {recommendation.suggested_action}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

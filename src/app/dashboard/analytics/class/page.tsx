'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Download,
  BookOpen,
  TrendingUp,
  Clock,
  Target,
  Search,
  ChevronDown,
  ChevronUp,
  Loader2,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useAuthStore } from '@/store/auth-store'
import { loadAllCourses } from '@/data/course-loader'
import { formatDuration, formatDate, cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { ProgressBar } from '@/components/analytics/ProgressBar'
import type { CourseData } from '@/lib/types'

// ── Types ────────────────────────────────────────────────────────────────────

interface StudentSummary {
  userId: string
  fullName: string
  email: string
  enrolledCourses: number
  modulesCompleted: number
  totalModules: number
  averageScore: number
  totalStudySeconds: number
  lastActive: string | null
}

interface ClassStats {
  totalStudents: number
  avgModulesCompleted: number
  avgScore: number
  avgStudyTimeSeconds: number
}

// ── Helpers ──────────────────────────────────────────────────────────────────

// courseMap is built dynamically inside the component - see useMemo below

function formatStudyTime(seconds: number): string {
  if (seconds < 60) return '<1m'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  if (h > 0) return `${h}h ${m}m`
  return `${m}m`
}

type SortField = 'name' | 'progress' | 'score' | 'studyTime' | 'lastActive'
type SortDir = 'asc' | 'desc'

// ── Main Component ───────────────────────────────────────────────────────────

export default function ClassAnalyticsPage() {
  const { user, profile, isLoading: authLoading } = useAuthStore()
  const [allCourses, setAllCourses] = useState<CourseData[]>([])
  const [students, setStudents] = useState<StudentSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const courseMap = useMemo(
    () => new Map<string, CourseData>(allCourses.map((c) => [c.id, c])),
    [allCourses],
  )

  // Load course data dynamically
  useEffect(() => {
    loadAllCourses().then(setAllCourses)
  }, [])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<SortField>('name')
  const [sortDir, setSortDir] = useState<SortDir>('asc')

  // Auth redirect guard
  useEffect(() => {
    if (!authLoading && !user) {
      window.location.href = '/auth/login?redirect=' + encodeURIComponent(window.location.pathname)
    }
  }, [authLoading, user])

  useEffect(() => {
    if (!user) {
      setLoading(false)
      return
    }

    const supabase = createClient()

    async function fetchClassData() {
      try {
        setError(null)

        // Fetch all student profiles (teacher sees all students in their org)
        // For now, fetch all non-teacher profiles as a simple implementation
        const { data: profiles, error: profilesErr } = await supabase
          .from('profiles')
          .select('id, email, full_name')
          .neq('id', user!.id)
          .limit(100)

        if (profilesErr) throw profilesErr
        if (!profiles || profiles.length === 0) {
          setStudents([])
          setLoading(false)
          return
        }

        const studentIds = profiles.map((p) => p.id)

        // Fetch all enrolments, progress for these students
        const [enrolRes, progressRes] = await Promise.all([
          supabase.from('enrolments').select('*').in('user_id', studentIds),
          supabase.from('module_progress').select('*').in('user_id', studentIds),
        ])

        const enrolments = enrolRes.data ?? []
        const progress = progressRes.data ?? []

        // Build student summaries
        const summaries: StudentSummary[] = profiles.map((p) => {
          const studentEnrolments = enrolments.filter((e) => e.user_id === p.id)
          const studentProgress = progress.filter((mp) => mp.user_id === p.id)

          const completedModules = studentProgress.filter((mp) => mp.completed).length

          let totalModules = 0
          for (const e of studentEnrolments) {
            const course = courseMap.get(e.course_id)
            if (course) totalModules += course.moduleList.length
          }

          const scores = studentProgress
            .filter((mp) => mp.quiz_score !== null)
            .map((mp) => mp.quiz_score as number)
          const avgScore =
            scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0

          const totalStudy = studentProgress.reduce((s, mp) => s + (mp.time_spent_seconds || 0), 0)

          const lastCompletedAt = studentProgress
            .filter((mp) => mp.completed_at)
            .map((mp) => new Date(mp.completed_at!).getTime())
          const lastActive =
            lastCompletedAt.length > 0 ? new Date(Math.max(...lastCompletedAt)).toISOString() : null

          return {
            userId: p.id,
            fullName: p.full_name ?? 'Unknown',
            email: p.email,
            enrolledCourses: studentEnrolments.length,
            modulesCompleted: completedModules,
            totalModules,
            averageScore: avgScore,
            totalStudySeconds: totalStudy,
            lastActive,
          }
        })

        setStudents(summaries)
      } catch (err) {
        console.error('Class analytics fetch error:', err)
        setError('Failed to load class data. You may not have permission to view this page.')
      } finally {
        setLoading(false)
      }
    }

    fetchClassData()
  }, [user])

  // ── Filtering & Sorting ────────────────────────────────────────────────

  const filteredStudents = useMemo(() => {
    let result = students

    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (s) => s.fullName.toLowerCase().includes(q) || s.email.toLowerCase().includes(q),
      )
    }

    result.sort((a, b) => {
      let cmp = 0
      switch (sortField) {
        case 'name':
          cmp = a.fullName.localeCompare(b.fullName)
          break
        case 'progress':
          cmp =
            (a.totalModules > 0 ? a.modulesCompleted / a.totalModules : 0) -
            (b.totalModules > 0 ? b.modulesCompleted / b.totalModules : 0)
          break
        case 'score':
          cmp = a.averageScore - b.averageScore
          break
        case 'studyTime':
          cmp = a.totalStudySeconds - b.totalStudySeconds
          break
        case 'lastActive':
          cmp =
            (a.lastActive ? new Date(a.lastActive).getTime() : 0) -
            (b.lastActive ? new Date(b.lastActive).getTime() : 0)
          break
      }
      return sortDir === 'asc' ? cmp : -cmp
    })

    return result
  }, [students, searchQuery, sortField, sortDir])

  // ── Class Stats ────────────────────────────────────────────────────────

  const classStats: ClassStats = useMemo(() => {
    if (students.length === 0) {
      return { totalStudents: 0, avgModulesCompleted: 0, avgScore: 0, avgStudyTimeSeconds: 0 }
    }
    return {
      totalStudents: students.length,
      avgModulesCompleted: Math.round(
        students.reduce((s, st) => s + st.modulesCompleted, 0) / students.length,
      ),
      avgScore: Math.round(students.reduce((s, st) => s + st.averageScore, 0) / students.length),
      avgStudyTimeSeconds: Math.round(
        students.reduce((s, st) => s + st.totalStudySeconds, 0) / students.length,
      ),
    }
  }, [students])

  // ── Export CSV ─────────────────────────────────────────────────────────

  const handleExportCSV = useCallback(() => {
    const headers = [
      'Name',
      'Email',
      'Enrolled Courses',
      'Modules Completed',
      'Total Modules',
      'Completion %',
      'Average Score',
      'Study Time (minutes)',
      'Last Active',
    ]

    const rows = filteredStudents.map((s) => [
      s.fullName,
      s.email,
      s.enrolledCourses,
      s.modulesCompleted,
      s.totalModules,
      s.totalModules > 0 ? Math.round((s.modulesCompleted / s.totalModules) * 100) : 0,
      s.averageScore,
      Math.round(s.totalStudySeconds / 60),
      s.lastActive ? formatDate(s.lastActive) : 'N/A',
    ])

    const csv = [headers.join(','), ...rows.map((r) => r.map((v) => `"${v}"`).join(','))].join('\n')

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `class-analytics-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }, [filteredStudents])

  // ── Sort Toggle ────────────────────────────────────────────────────────

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDir('asc')
    }
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sortField !== field) return null
    return sortDir === 'asc' ? (
      <ChevronUp className="h-3 w-3" />
    ) : (
      <ChevronDown className="h-3 w-3" />
    )
  }

  // ── Auth guard renders ─────────────────────────────────────────────────

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

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="mb-6 flex items-center justify-between animate-fade-in">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" render={<Link href="/dashboard/analytics" />}>
              <ArrowLeft className="h-4 w-4" />
              Analytics
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">Class Overview</h1>
              <p className="text-sm text-muted-foreground">
                Student progress summaries and class performance
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            disabled={loading || filteredStudents.length === 0}
          >
            <Download className="h-4 w-4" />
            Export CSV
          </Button>
        </div>

        {/* ── Error Banner ──────────────────────────────────────── */}
        {error && (
          <div className="mb-6 rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
            {error}
          </div>
        )}

        {/* ── Class Stats ─────────────────────────────────────────── */}
        <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {loading ? (
            <>
              {[1, 2, 3, 4].map((i) => (
                <Card key={i}>
                  <CardContent className="pt-5">
                    <Skeleton className="h-10 w-10 rounded-lg mb-2" />
                    <Skeleton className="h-6 w-12 mb-1" />
                    <Skeleton className="h-3 w-20" />
                  </CardContent>
                </Card>
              ))}
            </>
          ) : (
            <>
              <Card className="animate-fade-in">
                <CardContent className="pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Students
                      </p>
                      <p className="text-xl font-bold tabular-nums text-foreground">
                        {classStats.totalStudents}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardContent className="pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <BookOpen className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Avg Modules
                      </p>
                      <p className="text-xl font-bold tabular-nums text-foreground">
                        {classStats.avgModulesCompleted}
                      </p>
                      <p className="text-[11px] text-muted-foreground">completed per student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardContent className="pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10">
                      <TrendingUp className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Class Avg Score
                      </p>
                      <p className="text-xl font-bold tabular-nums text-foreground">
                        {classStats.avgScore}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardContent className="pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
                      <Clock className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        Avg Study Time
                      </p>
                      <p className="text-xl font-bold tabular-nums text-foreground">
                        {formatStudyTime(classStats.avgStudyTimeSeconds)}
                      </p>
                      <p className="text-[11px] text-muted-foreground">per student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <Separator className="mb-6" />

        {/* ── Student List ────────────────────────────────────────── */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Student Progress</CardTitle>
                <CardDescription>
                  {filteredStudents.length} student{filteredStudents.length === 1 ? '' : 's'}
                  {searchQuery && ` matching "${searchQuery}"`}
                </CardDescription>
              </div>
              <div className="relative w-full max-w-xs">
                <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search students..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-32 mb-1" />
                      <Skeleton className="h-2.5 w-full rounded-full" />
                    </div>
                    <Skeleton className="h-5 w-12" />
                  </div>
                ))}
              </div>
            ) : filteredStudents.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground">
                <Users className="mx-auto mb-2 h-8 w-8 opacity-50" />
                <p className="text-sm">
                  {searchQuery ? 'No students match your search.' : 'No student data available.'}
                </p>
              </div>
            ) : (
              <div>
                {/* Table Header */}
                <div className="mb-2 hidden items-center gap-4 px-2 text-[11px] uppercase tracking-wider text-muted-foreground sm:flex">
                  <button
                    className="flex w-44 items-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => toggleSort('name')}
                  >
                    Student <SortIcon field="name" />
                  </button>
                  <button
                    className="flex flex-1 items-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => toggleSort('progress')}
                  >
                    Progress <SortIcon field="progress" />
                  </button>
                  <button
                    className="flex w-20 items-center gap-1 justify-end hover:text-foreground transition-colors"
                    onClick={() => toggleSort('score')}
                  >
                    Avg Score <SortIcon field="score" />
                  </button>
                  <button
                    className="flex w-24 items-center gap-1 justify-end hover:text-foreground transition-colors"
                    onClick={() => toggleSort('studyTime')}
                  >
                    Study Time <SortIcon field="studyTime" />
                  </button>
                  <button
                    className="flex w-24 items-center gap-1 justify-end hover:text-foreground transition-colors"
                    onClick={() => toggleSort('lastActive')}
                  >
                    Last Active <SortIcon field="lastActive" />
                  </button>
                </div>

                <Separator className="mb-2 hidden sm:block" />

                <ScrollArea className="max-h-[500px]">
                  <div className="space-y-1">
                    {filteredStudents.map((student) => {
                      const completionPct =
                        student.totalModules > 0
                          ? Math.round((student.modulesCompleted / student.totalModules) * 100)
                          : 0

                      return (
                        <div
                          key={student.userId}
                          className="flex flex-col gap-2 rounded-lg p-2.5 transition-colors hover:bg-secondary sm:flex-row sm:items-center sm:gap-4"
                        >
                          {/* Name + Email */}
                          <div className="w-44 min-w-0">
                            <p className="truncate text-sm font-medium text-foreground">
                              {student.fullName}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                              {student.email}
                            </p>
                          </div>

                          {/* Progress Bar */}
                          <div className="flex-1">
                            <ProgressBar
                              value={student.modulesCompleted}
                              max={student.totalModules}
                              showPercentage={false}
                              size="sm"
                            />
                            <p className="mt-0.5 text-[11px] text-muted-foreground">
                              {student.modulesCompleted}/{student.totalModules} modules (
                              {completionPct}%)
                            </p>
                          </div>

                          {/* Score */}
                          <div className="w-20 text-right">
                            <Badge
                              variant="secondary"
                              className={cn(
                                'tabular-nums',
                                student.averageScore >= 70 && 'bg-green-500/10 text-green-400',
                                student.averageScore >= 50 &&
                                  student.averageScore < 70 &&
                                  'bg-amber-500/10 text-clay-600',
                                student.averageScore > 0 &&
                                  student.averageScore < 50 &&
                                  'bg-red-500/10 text-red-400',
                              )}
                            >
                              {student.averageScore > 0 ? `${student.averageScore}%` : '--'}
                            </Badge>
                          </div>

                          {/* Study Time */}
                          <div className="w-24 text-right text-xs tabular-nums text-muted-foreground">
                            {formatStudyTime(student.totalStudySeconds)}
                          </div>

                          {/* Last Active */}
                          <div className="w-24 text-right text-xs text-muted-foreground">
                            {student.lastActive ? formatDate(student.lastActive) : 'Never'}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </ScrollArea>

                {/* Class Average Comparison Footer */}
                <Separator className="my-3" />
                <div className="flex flex-col gap-2 rounded-lg bg-muted/50 p-3 sm:flex-row sm:items-center sm:gap-4">
                  <div className="w-44 min-w-0">
                    <p className="text-sm font-semibold text-foreground">Class Average</p>
                    <p className="text-xs text-muted-foreground">
                      {classStats.totalStudents} students
                    </p>
                  </div>
                  <div className="flex-1">
                    <ProgressBar
                      value={classStats.avgModulesCompleted}
                      max={
                        students.length > 0
                          ? Math.round(
                              students.reduce((s, st) => s + st.totalModules, 0) / students.length,
                            )
                          : 1
                      }
                      showPercentage={false}
                      size="sm"
                      color="bg-primary"
                    />
                  </div>
                  <div className="w-20 text-right">
                    <Badge variant="secondary" className="tabular-nums">
                      {classStats.avgScore > 0 ? `${classStats.avgScore}%` : '--'}
                    </Badge>
                  </div>
                  <div className="w-24 text-right text-xs tabular-nums text-muted-foreground">
                    {formatStudyTime(classStats.avgStudyTimeSeconds)}
                  </div>
                  <div className="w-24" />
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

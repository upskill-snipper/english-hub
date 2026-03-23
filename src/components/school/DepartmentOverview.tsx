'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Users,
  GraduationCap,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Trophy,
  Target,
  BookOpen,
  Loader2,
  ArrowRight,
  Lightbulb,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import type {
  School,
  Class,
  SchoolMember,
  SchoolOverview,
  ClassAnalytics,
} from '@/lib/types'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { StatCard } from '@/components/school/StatCard'
import { TeacherComparison } from '@/components/school/TeacherComparison'

/* ── Types ──────────────────────────────────────────────────────────────────── */

interface DepartmentOverviewProps {
  school: School | null
  classes: Class[]
  members: SchoolMember[]
}

interface TeacherSummary {
  id: string
  name: string
  email: string
  classCount: number
  totalStudents: number
  avgScore: number
  avgCompletion: number
  studentsAtRisk: number
  activityLevel: 'high' | 'medium' | 'low'
  classes: ClassAnalytics[]
}

interface SubjectBreakdown {
  label: string
  classCount: number
  avgScore: number
  studentCount: number
}

interface YearGroupBreakdown {
  yearGroup: string
  classCount: number
  avgScore: number
  avgCompletion: number
  studentCount: number
}

interface ExamBoardBreakdown {
  examBoard: string
  classCount: number
  avgScore: number
  avgCompletion: number
  studentCount: number
}

interface ConcernItem {
  type: 'below_target' | 'declining' | 'low_engagement'
  label: string
  detail: string
  severity: 'critical' | 'warning'
}

interface HighlightItem {
  type: 'top_class' | 'most_improved'
  label: string
  detail: string
}

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function classifySubject(className: string): 'Literature' | 'Language' | 'Other' {
  const lower = className.toLowerCase()
  if (lower.includes('lit')) return 'Literature'
  if (lower.includes('lang')) return 'Language'
  return 'Other'
}

function inferActivityLevel(
  analytics: ClassAnalytics,
): 'high' | 'medium' | 'low' {
  if (analytics.completion_rate >= 70 && analytics.avg_score >= 60) return 'high'
  if (analytics.completion_rate >= 40) return 'medium'
  return 'low'
}

/* ── Component ──────────────────────────────────────────────────────────────── */

export function DepartmentOverview({
  school,
  classes,
  members,
}: DepartmentOverviewProps) {
  const [overview, setOverview] = useState<SchoolOverview | null>(null)
  const [loading, setLoading] = useState(true)

  // ── Fetch overview data ───────────────────────────────────────────
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/school/overview')
        if (!res.ok) throw new Error('Failed to load')
        const data = await res.json()
        setOverview(data.overview ?? null)
      } catch (err) {
        console.error('DepartmentOverview fetch error:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // ── Derived data ──────────────────────────────────────────────────
  const classAnalytics: ClassAnalytics[] = useMemo(
    () => overview?.classes ?? [],
    [overview],
  )

  const teachers: SchoolMember[] = useMemo(
    () => members.filter((m) => m.role === 'teacher' || m.role === 'head_of_department'),
    [members],
  )

  const totalStudents = overview?.total_students ?? 0
  const totalClasses = overview?.total_classes ?? 0
  const avgDeptScore = overview?.avg_score_all ?? 0
  const completionRate = overview?.completion_rate_all ?? 0

  // ── Teacher summaries ─────────────────────────────────────────────
  const teacherSummaries: TeacherSummary[] = useMemo(() => {
    const teacherClassMap = new Map<string, ClassAnalytics[]>()

    for (const cls of classes) {
      if (!cls.teacher_id) continue
      const analytics = classAnalytics.find((a) => a.class_id === cls.id)
      if (!analytics) continue
      const existing = teacherClassMap.get(cls.teacher_id) ?? []
      existing.push(analytics)
      teacherClassMap.set(cls.teacher_id, existing)
    }

    return teachers.map((teacher) => {
      const teacherClasses = teacherClassMap.get(teacher.user_id ?? '') ?? []
      const totalStudents = teacherClasses.reduce(
        (sum, c) => sum + c.student_count,
        0,
      )
      const avgScore =
        teacherClasses.length > 0
          ? teacherClasses.reduce((sum, c) => sum + c.avg_score, 0) /
            teacherClasses.length
          : 0
      const avgCompletion =
        teacherClasses.length > 0
          ? teacherClasses.reduce((sum, c) => sum + c.completion_rate, 0) /
            teacherClasses.length
          : 0
      const studentsAtRisk = teacherClasses.reduce(
        (sum, c) => sum + c.students_at_risk,
        0,
      )
      const activityLevels = teacherClasses.map(inferActivityLevel)
      const highCount = activityLevels.filter((l) => l === 'high').length
      const lowCount = activityLevels.filter((l) => l === 'low').length

      let activityLevel: 'high' | 'medium' | 'low' = 'medium'
      if (teacherClasses.length > 0) {
        if (highCount / teacherClasses.length >= 0.6) activityLevel = 'high'
        else if (lowCount / teacherClasses.length >= 0.5) activityLevel = 'low'
      }

      return {
        id: teacher.user_id ?? teacher.id,
        name: teacher.full_name,
        email: teacher.email,
        classCount: teacherClasses.length,
        totalStudents,
        avgScore: Math.round(avgScore),
        avgCompletion: Math.round(avgCompletion),
        studentsAtRisk,
        activityLevel,
        classes: teacherClasses,
      }
    })
  }, [teachers, classes, classAnalytics])

  // ── Cross-class comparison ────────────────────────────────────────
  const classesAboveAvg = useMemo(
    () => classAnalytics.filter((c) => c.avg_score > avgDeptScore),
    [classAnalytics, avgDeptScore],
  )
  const classesBelowAvg = useMemo(
    () => classAnalytics.filter((c) => c.avg_score <= avgDeptScore),
    [classAnalytics, avgDeptScore],
  )

  // ── Subject area breakdown ────────────────────────────────────────
  const subjectBreakdown: SubjectBreakdown[] = useMemo(() => {
    const groups = new Map<string, ClassAnalytics[]>()
    for (const cls of classAnalytics) {
      const subject = classifySubject(cls.class_name)
      const existing = groups.get(subject) ?? []
      existing.push(cls)
      groups.set(subject, existing)
    }
    return Array.from(groups.entries()).map(([label, items]) => ({
      label,
      classCount: items.length,
      avgScore: Math.round(
        items.reduce((s, c) => s + c.avg_score, 0) / items.length,
      ),
      studentCount: items.reduce((s, c) => s + c.student_count, 0),
    }))
  }, [classAnalytics])

  // ── Year group breakdown ──────────────────────────────────────────
  const yearGroupBreakdown: YearGroupBreakdown[] = useMemo(() => {
    const groups = new Map<string, ClassAnalytics[]>()
    for (const cls of classes) {
      const yg = cls.year_group ?? 'Unknown'
      const analytics = classAnalytics.find((a) => a.class_id === cls.id)
      if (!analytics) continue
      const existing = groups.get(yg) ?? []
      existing.push(analytics)
      groups.set(yg, existing)
    }
    return Array.from(groups.entries())
      .map(([yearGroup, items]) => ({
        yearGroup,
        classCount: items.length,
        avgScore: Math.round(
          items.reduce((s, c) => s + c.avg_score, 0) / items.length,
        ),
        avgCompletion: Math.round(
          items.reduce((s, c) => s + c.completion_rate, 0) / items.length,
        ),
        studentCount: items.reduce((s, c) => s + c.student_count, 0),
      }))
      .sort((a, b) => a.yearGroup.localeCompare(b.yearGroup))
  }, [classes, classAnalytics])

  // ── Exam board breakdown ──────────────────────────────────────────
  const examBoardBreakdown: ExamBoardBreakdown[] = useMemo(() => {
    const groups = new Map<string, ClassAnalytics[]>()
    for (const cls of classes) {
      const eb = cls.exam_board ?? 'Unspecified'
      const analytics = classAnalytics.find((a) => a.class_id === cls.id)
      if (!analytics) continue
      const existing = groups.get(eb) ?? []
      existing.push(analytics)
      groups.set(eb, existing)
    }
    return Array.from(groups.entries())
      .map(([examBoard, items]) => ({
        examBoard,
        classCount: items.length,
        avgScore: Math.round(
          items.reduce((s, c) => s + c.avg_score, 0) / items.length,
        ),
        avgCompletion: Math.round(
          items.reduce((s, c) => s + c.completion_rate, 0) / items.length,
        ),
        studentCount: items.reduce((s, c) => s + c.student_count, 0),
      }))
      .sort((a, b) => b.avgScore - a.avgScore)
  }, [classes, classAnalytics])

  // ── Concerns ──────────────────────────────────────────────────────
  const concerns: ConcernItem[] = useMemo(() => {
    const items: ConcernItem[] = []
    for (const cls of classAnalytics) {
      if (cls.avg_score < avgDeptScore * 0.8) {
        items.push({
          type: 'below_target',
          label: cls.class_name,
          detail: `Avg score ${Math.round(cls.avg_score)}% — ${Math.round(avgDeptScore - cls.avg_score)}pp below department average`,
          severity: cls.avg_score < avgDeptScore * 0.6 ? 'critical' : 'warning',
        })
      }
      if (cls.completion_rate < 30) {
        items.push({
          type: 'low_engagement',
          label: cls.class_name,
          detail: `Only ${Math.round(cls.completion_rate)}% completion rate — possible engagement issue`,
          severity: cls.completion_rate < 15 ? 'critical' : 'warning',
        })
      }
      if (cls.students_at_risk > cls.student_count * 0.4) {
        items.push({
          type: 'declining',
          label: cls.class_name,
          detail: `${cls.students_at_risk} of ${cls.student_count} students at risk (${Math.round((cls.students_at_risk / cls.student_count) * 100)}%)`,
          severity: 'critical',
        })
      }
    }
    return items.sort((a, b) =>
      a.severity === 'critical' && b.severity !== 'critical' ? -1 : 1,
    )
  }, [classAnalytics, avgDeptScore])

  // ── Highlights ────────────────────────────────────────────────────
  const highlights: HighlightItem[] = useMemo(() => {
    const items: HighlightItem[] = []
    const sorted = [...classAnalytics].sort((a, b) => b.avg_score - a.avg_score)

    if (sorted.length > 0) {
      items.push({
        type: 'top_class',
        label: sorted[0].class_name,
        detail: `Top performing class — ${Math.round(sorted[0].avg_score)}% avg score, ${Math.round(sorted[0].completion_rate)}% completion`,
      })
    }
    if (sorted.length > 1) {
      items.push({
        type: 'top_class',
        label: sorted[1].class_name,
        detail: `Second highest — ${Math.round(sorted[1].avg_score)}% avg score`,
      })
    }

    // Classes with high completion as highlights
    const highCompletion = classAnalytics.filter(
      (c) => c.completion_rate >= 80,
    )
    for (const cls of highCompletion) {
      items.push({
        type: 'most_improved',
        label: cls.class_name,
        detail: `${Math.round(cls.completion_rate)}% completion rate — excellent engagement`,
      })
    }

    return items.slice(0, 5)
  }, [classAnalytics])

  // ── Resource allocation suggestions ───────────────────────────────
  const resourceSuggestions: string[] = useMemo(() => {
    const suggestions: string[] = []

    for (const t of teacherSummaries) {
      if (t.activityLevel === 'low' && t.classCount > 0) {
        suggestions.push(
          `${t.name} has low activity across ${t.classCount} class${t.classCount > 1 ? 'es' : ''} — consider offering CPD support or peer observation.`,
        )
      }
      if (t.studentsAtRisk > 5) {
        suggestions.push(
          `${t.name} has ${t.studentsAtRisk} students at risk — may benefit from additional teaching assistant time.`,
        )
      }
    }

    const lowClasses = classAnalytics.filter((c) => c.avg_score < 40)
    if (lowClasses.length > 0) {
      suggestions.push(
        `${lowClasses.length} class${lowClasses.length > 1 ? 'es' : ''} scoring below 40% — consider targeted intervention groups or additional revision sessions.`,
      )
    }

    if (yearGroupBreakdown.length > 1) {
      const sorted = [...yearGroupBreakdown].sort(
        (a, b) => a.avgScore - b.avgScore,
      )
      if (sorted[0].avgScore < sorted[sorted.length - 1].avgScore - 15) {
        suggestions.push(
          `${sorted[0].yearGroup} is underperforming vs ${sorted[sorted.length - 1].yearGroup} by ${sorted[sorted.length - 1].avgScore - sorted[0].avgScore}pp — review resource allocation between year groups.`,
        )
      }
    }

    return suggestions
  }, [teacherSummaries, classAnalytics, yearGroupBreakdown])

  // ── Loading state ─────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 rounded-xl" />
          ))}
        </div>
        <Skeleton className="h-64 rounded-xl" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    )
  }

  // ── Render ────────────────────────────────────────────────────────
  return (
    <div className="space-y-6">
      {/* ── Summary stats ──────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Classes"
          value={totalClasses}
          subtitle={`${teachers.length} teacher${teachers.length !== 1 ? 's' : ''}`}
          icon={BookOpen}
          color="blue"
        />
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={Users}
          color="purple"
        />
        <StatCard
          title="Avg Department Score"
          value={`${Math.round(avgDeptScore)}%`}
          icon={BarChart3}
          color={avgDeptScore >= 60 ? 'green' : avgDeptScore >= 40 ? 'amber' : 'red'}
          trend={avgDeptScore >= 60 ? 'up' : avgDeptScore >= 40 ? 'neutral' : 'down'}
        />
        <StatCard
          title="Completion Rate"
          value={`${Math.round(completionRate)}%`}
          icon={CheckCircle}
          color={completionRate >= 70 ? 'green' : completionRate >= 40 ? 'amber' : 'red'}
        />
      </div>

      {/* ── Tabbed sections ────────────────────────────────────────── */}
      <Tabs defaultValue="teachers" className="space-y-4">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="teachers">Teachers</TabsTrigger>
          <TabsTrigger value="classes">Classes</TabsTrigger>
          <TabsTrigger value="breakdowns">Breakdowns</TabsTrigger>
          <TabsTrigger value="comparison">Compare</TabsTrigger>
        </TabsList>

        {/* ── Teacher performance table ───────────────────────────── */}
        <TabsContent value="teachers">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Teacher Performance</CardTitle>
              <CardDescription>
                Overview of each teacher's classes, scores, and activity
              </CardDescription>
            </CardHeader>
            <CardContent>
              {teacherSummaries.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No teacher data available yet.
                </p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-left">
                        <th className="pb-3 pr-4 font-medium text-muted-foreground">
                          Teacher
                        </th>
                        <th className="pb-3 pr-4 font-medium text-muted-foreground text-center">
                          Classes
                        </th>
                        <th className="pb-3 pr-4 font-medium text-muted-foreground text-center">
                          Students
                        </th>
                        <th className="pb-3 pr-4 font-medium text-muted-foreground text-center">
                          Avg Score
                        </th>
                        <th className="pb-3 pr-4 font-medium text-muted-foreground text-center">
                          Completion
                        </th>
                        <th className="pb-3 pr-4 font-medium text-muted-foreground text-center">
                          At Risk
                        </th>
                        <th className="pb-3 font-medium text-muted-foreground text-center">
                          Activity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {teacherSummaries.map((t) => (
                        <tr key={t.id} className="hover:bg-muted/30 transition-colors">
                          <td className="py-3 pr-4">
                            <div>
                              <p className="font-medium text-foreground">{t.name}</p>
                              <p className="text-xs text-muted-foreground">{t.email}</p>
                            </div>
                          </td>
                          <td className="py-3 pr-4 text-center tabular-nums">
                            {t.classCount}
                          </td>
                          <td className="py-3 pr-4 text-center tabular-nums">
                            {t.totalStudents}
                          </td>
                          <td className="py-3 pr-4 text-center">
                            <span
                              className={cn(
                                'inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium tabular-nums',
                                t.avgScore >= avgDeptScore
                                  ? 'bg-green-500/10 text-green-400'
                                  : t.avgScore >= avgDeptScore * 0.85
                                    ? 'bg-amber-500/10 text-amber-400'
                                    : 'bg-red-500/10 text-red-400',
                              )}
                            >
                              {t.avgScore}%
                            </span>
                          </td>
                          <td className="py-3 pr-4 text-center">
                            <div className="flex items-center gap-2 justify-center">
                              <Progress
                                value={t.avgCompletion}
                                className="h-1.5 w-16"
                              />
                              <span className="text-xs tabular-nums text-muted-foreground">
                                {t.avgCompletion}%
                              </span>
                            </div>
                          </td>
                          <td className="py-3 pr-4 text-center">
                            {t.studentsAtRisk > 0 ? (
                              <Badge
                                variant="outline"
                                className="border-red-500/30 text-red-400"
                              >
                                {t.studentsAtRisk}
                              </Badge>
                            ) : (
                              <span className="text-xs text-muted-foreground">0</span>
                            )}
                          </td>
                          <td className="py-3 text-center">
                            <Badge
                              variant="outline"
                              className={cn(
                                t.activityLevel === 'high' &&
                                  'border-green-500/30 text-green-400',
                                t.activityLevel === 'medium' &&
                                  'border-amber-500/30 text-amber-400',
                                t.activityLevel === 'low' &&
                                  'border-red-500/30 text-red-400',
                              )}
                            >
                              {t.activityLevel}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── Cross-class comparison ──────────────────────────────── */}
        <TabsContent value="classes">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {/* Above average */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  Above Department Average
                </CardTitle>
                <CardDescription>
                  Classes scoring above {Math.round(avgDeptScore)}%
                </CardDescription>
              </CardHeader>
              <CardContent>
                {classesAboveAvg.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No classes above average.</p>
                ) : (
                  <div className="space-y-3">
                    {classesAboveAvg
                      .sort((a, b) => b.avg_score - a.avg_score)
                      .map((cls) => (
                        <div
                          key={cls.class_id}
                          className="flex items-center justify-between rounded-lg border border-border p-3"
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {cls.class_name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {cls.student_count} students
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-green-400 tabular-nums">
                              {Math.round(cls.avg_score)}%
                            </p>
                            <p className="text-xs text-green-400/70 tabular-nums">
                              +{Math.round(cls.avg_score - avgDeptScore)}pp
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Below average */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <TrendingDown className="h-4 w-4 text-red-400" />
                  Below Department Average
                </CardTitle>
                <CardDescription>
                  Classes scoring at or below {Math.round(avgDeptScore)}%
                </CardDescription>
              </CardHeader>
              <CardContent>
                {classesBelowAvg.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    All classes are above average.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {classesBelowAvg
                      .sort((a, b) => a.avg_score - b.avg_score)
                      .map((cls) => (
                        <div
                          key={cls.class_id}
                          className="flex items-center justify-between rounded-lg border border-border p-3"
                        >
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {cls.class_name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {cls.student_count} students ·{' '}
                              {cls.students_at_risk} at risk
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-semibold text-red-400 tabular-nums">
                              {Math.round(cls.avg_score)}%
                            </p>
                            <p className="text-xs text-red-400/70 tabular-nums">
                              {Math.round(cls.avg_score - avgDeptScore)}pp
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── Breakdowns ──────────────────────────────────────────── */}
        <TabsContent value="breakdowns">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {/* Subject area */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Subject Areas</CardTitle>
                <CardDescription>
                  Literature vs Language performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                {subjectBreakdown.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No data available.</p>
                ) : (
                  <div className="space-y-4">
                    {subjectBreakdown.map((s) => (
                      <div key={s.label} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {s.label}
                          </span>
                          <span className="text-sm font-semibold tabular-nums text-foreground">
                            {s.avgScore}%
                          </span>
                        </div>
                        <Progress value={s.avgScore} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {s.classCount} class{s.classCount !== 1 ? 'es' : ''} ·{' '}
                          {s.studentCount} students
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Year group */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Year Groups</CardTitle>
                <CardDescription>Performance by year group</CardDescription>
              </CardHeader>
              <CardContent>
                {yearGroupBreakdown.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No data available.</p>
                ) : (
                  <div className="space-y-4">
                    {yearGroupBreakdown.map((yg) => (
                      <div key={yg.yearGroup} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {yg.yearGroup}
                          </span>
                          <span className="text-sm font-semibold tabular-nums text-foreground">
                            {yg.avgScore}%
                          </span>
                        </div>
                        <Progress value={yg.avgScore} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {yg.classCount} class{yg.classCount !== 1 ? 'es' : ''} ·{' '}
                          {yg.studentCount} students · {yg.avgCompletion}% completion
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Exam board */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Exam Boards</CardTitle>
                <CardDescription>
                  AQA, Edexcel, OCR comparison
                </CardDescription>
              </CardHeader>
              <CardContent>
                {examBoardBreakdown.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No data available.</p>
                ) : (
                  <div className="space-y-4">
                    {examBoardBreakdown.map((eb) => (
                      <div key={eb.examBoard} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">
                            {eb.examBoard}
                          </span>
                          <span className="text-sm font-semibold tabular-nums text-foreground">
                            {eb.avgScore}%
                          </span>
                        </div>
                        <Progress value={eb.avgScore} className="h-2" />
                        <p className="text-xs text-muted-foreground">
                          {eb.classCount} class{eb.classCount !== 1 ? 'es' : ''} ·{' '}
                          {eb.studentCount} students · {eb.avgCompletion}% completion
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── Teacher comparison tab ──────────────────────────────── */}
        <TabsContent value="comparison">
          <TeacherComparison
            classAnalytics={classAnalytics}
            classes={classes}
            avgDeptScore={avgDeptScore}
          />
        </TabsContent>
      </Tabs>

      {/* ── Concerns & Highlights ──────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Concerns */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
              Concerns
            </CardTitle>
            <CardDescription>
              Classes below target, low engagement, or high risk
            </CardDescription>
          </CardHeader>
          <CardContent>
            {concerns.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No concerns identified — well done!
              </p>
            ) : (
              <div className="space-y-3">
                {concerns.map((c, i) => (
                  <div
                    key={i}
                    className={cn(
                      'rounded-lg border p-3',
                      c.severity === 'critical'
                        ? 'border-red-500/30 bg-red-500/5'
                        : 'border-amber-500/30 bg-amber-500/5',
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <Badge
                        variant="outline"
                        className={cn(
                          'mt-0.5 shrink-0 text-[10px]',
                          c.severity === 'critical'
                            ? 'border-red-500/50 text-red-400'
                            : 'border-amber-500/50 text-amber-400',
                        )}
                      >
                        {c.severity}
                      </Badge>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {c.label}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {c.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Highlights */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Trophy className="h-4 w-4 text-amber-400" />
              Highlights
            </CardTitle>
            <CardDescription>
              Best performing classes and notable achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            {highlights.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No highlights available yet.
              </p>
            ) : (
              <div className="space-y-3">
                {highlights.map((h, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-green-500/30 bg-green-500/5 p-3"
                  >
                    <div className="flex items-start gap-2">
                      {h.type === 'top_class' ? (
                        <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                      ) : (
                        <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                      )}
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {h.label}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {h.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* ── Resource Allocation Suggestions ─────────────────────────── */}
      {resourceSuggestions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Lightbulb className="h-4 w-4 text-amber-400" />
              Resource Allocation Suggestions
            </CardTitle>
            <CardDescription>
              Recommendations for where to focus support and resources
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {resourceSuggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border p-3"
                >
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm text-foreground">{suggestion}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

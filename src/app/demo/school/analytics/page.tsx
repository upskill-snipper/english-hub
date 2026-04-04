"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Users,
  FileText,
  TrendingUp,
  AlertTriangle,
  Download,
  FileSpreadsheet,
  Trophy,
  BookOpen,
  ClipboardList,
  ChevronRight,
  ArrowUpRight,
  Info,
  GraduationCap,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import {
  DEMO_SCHOOL,
  DEMO_STUDENTS,
  DEMO_CLASSES,
  DEMO_TEACHERS,
  DEMO_YEAR_GROUPS,
  DEMO_STATS,
} from "@/data/demo-data"

// ── Date range multipliers (pretend variation) ──────────────
type DateRange = "week" | "month" | "term" | "year"

const DATE_LABELS: Record<DateRange, string> = {
  week: "This Week",
  month: "This Month",
  term: "This Term",
  year: "This Year",
}

const RANGE_MULTIPLIERS: Record<DateRange, number> = {
  week: 0.88,
  month: 0.94,
  term: 1.0,
  year: 1.06,
}

function vary(base: number, range: DateRange, round = true): number {
  const v = base * RANGE_MULTIPLIERS[range]
  return round ? Math.round(v) : Math.round(v * 10) / 10
}

// ── Progress bar color helper ───────────────────────────────
function progressColor(pct: number): string {
  if (pct >= 75) return "bg-emerald-500"
  if (pct >= 60) return "bg-amber-500"
  return "bg-red-500"
}

function progressTextColor(pct: number): string {
  if (pct >= 75) return "text-emerald-400"
  if (pct >= 60) return "text-amber-400"
  return "text-red-400"
}

// ── Top lessons & mock exams (inline) ───────────────────────
const TOP_LESSONS = [
  { title: "Macbeth Act 1 Analysis", count: 312 },
  { title: "Creative Writing: Narrative Voice", count: 287 },
  { title: "An Inspector Calls: Key Quotes", count: 264 },
  { title: "Language Paper 1 Q5 Techniques", count: 241 },
  { title: "Poetry Comparison: Power & Conflict", count: 198 },
]

const TOP_MOCK_EXAMS = [
  { title: "AQA Lang Paper 1 Mock", count: 189 },
  { title: "AQA Lit Paper 1 Mock", count: 176 },
  { title: "AQA Lang Paper 2 Mock", count: 152 },
  { title: "Edexcel IGCSE Lang Mock", count: 134 },
  { title: "AQA Lit Paper 2 Mock", count: 118 },
]

// ── Main page ───────────────────────────────────────────────
export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<DateRange>("term")
  const [yearFilter, setYearFilter] = useState<number | null>(null)

  const atRiskStudents = DEMO_STUDENTS.filter((s) => s.atRisk)

  const filteredStudents = yearFilter
    ? DEMO_STUDENTS.filter((s) => s.yearGroup === `Year ${yearFilter}`)
    : DEMO_STUDENTS

  const topClasses = [...DEMO_CLASSES]
    .sort((a, b) => b.avgProgress - a.avgProgress)
    .slice(0, 6)

  const classesForAssignment = [...DEMO_CLASSES]
    .sort((a, b) => a.avgProgress - b.avgProgress)
    .slice(0, 8)

  const maxLessonCount = TOP_LESSONS[0].count
  const maxMockCount = TOP_MOCK_EXAMS[0].count

  // Compute year-group level at-risk counts from students
  const yearGroupAtRisk = DEMO_YEAR_GROUPS.map((yg: any) => {
    const count = DEMO_STUDENTS.filter(
      (s) => s.yearGroup === `Year ${yg.year}` && s.atRisk
    ).length
    return { ...yg, atRiskCount: count || Math.round(yg.studentCount * 0.06) }
  })

  // Compute teacher assignments completed percentage
  const teacherStats = DEMO_TEACHERS.map((t) => {
    const teacherClasses = DEMO_CLASSES.filter((c) => c.teacherId === t.id)
    const totalSet = teacherClasses.reduce((acc, c) => acc + c.assignmentsSet, 0)
    const totalDone = teacherClasses.reduce(
      (acc, c) => acc + c.assignmentsCompleted,
      0
    )
    const avgProg =
      teacherClasses.length > 0
        ? Math.round(
            teacherClasses.reduce((acc, c) => acc + c.avgProgress, 0) /
              teacherClasses.length
          )
        : 0
    return {
      ...t,
      assignmentsSet: totalSet,
      assignmentsDone: totalDone,
      completionRate: totalSet > 0 ? Math.round((totalDone / totalSet) * 100) : 0,
      avgProgress: avgProg,
    }
  }).sort((a, b) => b.avgProgress - a.avgProgress)

  function handleExport(type: string) {
    toast.info(`${type} export is available with a full account`, {
      description: "Register your school to unlock data exports.",
    })
  }

  function handleDownloadReport() {
    toast.info("Full report downloads require registration", {
      description: "Sign up to access detailed PDF reports for your school.",
    })
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Demo banner */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 px-4 py-2.5 text-center">
        <p className="text-sm text-amber-200/90">
          <Info className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
          This is a demo dashboard with sample data.{" "}
          <Link
            href="/register"
            className="underline underline-offset-2 hover:text-amber-100 font-medium"
          >
            Register your school
          </Link>{" "}
          to see your real analytics.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              School Analytics
            </h1>
            <p className="text-neutral-400 mt-1">
              {DEMO_SCHOOL.name} &middot; {vary(DEMO_STATS.totalStudents, dateRange)}{" "}
              students enrolled
            </p>
          </div>

          {/* Date range selector */}
          <div className="flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 p-1">
            {(Object.keys(DATE_LABELS) as DateRange[]).map((key) => (
              <button
                key={key}
                onClick={() => setDateRange(key)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                  dateRange === key
                    ? "bg-white/10 text-white font-medium"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {DATE_LABELS[key]}
              </button>
            ))}
          </div>
        </div>

        {/* ── Top stats row ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-[#111] border-white/10">
            <CardContent className="pt-5">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-emerald-500/10">
                  <Users className="w-5 h-5 text-emerald-400" />
                </div>
                <Badge variant="secondary" className="text-emerald-400 bg-emerald-500/10 border-emerald-500/20">
                  +{vary(12, dateRange)}%
                </Badge>
              </div>
              <p className="text-2xl font-bold">{vary(305, dateRange)}/{vary(342, dateRange)}</p>
              <p className="text-sm text-neutral-400 mt-1">Active Students</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111] border-white/10">
            <CardContent className="pt-5">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-blue-500/10">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <Badge variant="secondary" className="text-blue-400 bg-blue-500/10 border-blue-500/20">
                  +{vary(8, dateRange)}%
                </Badge>
              </div>
              <p className="text-2xl font-bold">{vary(1247, dateRange).toLocaleString()}</p>
              <p className="text-sm text-neutral-400 mt-1">Assignments Submitted</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111] border-white/10">
            <CardContent className="pt-5">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-purple-500/10">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                </div>
                <Badge variant="secondary" className="text-purple-400 bg-purple-500/10 border-purple-500/20">
                  +{vary(3, dateRange)}%
                </Badge>
              </div>
              <p className="text-2xl font-bold">{vary(68, dateRange)}%</p>
              <p className="text-sm text-neutral-400 mt-1">Average Score</p>
            </CardContent>
          </Card>

          <Card className="bg-[#111] border-white/10">
            <CardContent className="pt-5">
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-red-500/10">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <Badge variant="secondary" className="text-red-400 bg-red-500/10 border-red-500/20">
                  Needs attention
                </Badge>
              </div>
              <p className="text-2xl font-bold">{vary(23, dateRange)}</p>
              <p className="text-sm text-neutral-400 mt-1">At-Risk Students</p>
            </CardContent>
          </Card>
        </div>

        {/* ── Year Group Performance ─────────────────────────── */}
        <Card className="bg-[#111] border-white/10 mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-neutral-400" />
                  Year Group Performance
                </CardTitle>
                <CardDescription className="text-neutral-500 mt-1">
                  Click a row to filter student list by year group
                  {yearFilter && (
                    <button
                      onClick={() => setYearFilter(null)}
                      className="ml-3 text-blue-400 hover:text-blue-300 underline underline-offset-2"
                    >
                      Clear filter
                    </button>
                  )}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-neutral-400">
                    <th className="text-left py-3 px-2 font-medium">Year Group</th>
                    <th className="text-center py-3 px-2 font-medium">Students</th>
                    <th className="text-left py-3 px-2 font-medium w-48">Avg Progress</th>
                    <th className="text-center py-3 px-2 font-medium">Classes</th>
                    <th className="text-center py-3 px-2 font-medium">At-Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {yearGroupAtRisk.map((yg: any) => (
                    <tr
                      key={yg.year}
                      onClick={() =>
                        setYearFilter(yearFilter === yg.year ? null : yg.year)
                      }
                      className={`border-b border-white/5 cursor-pointer transition-colors ${
                        yearFilter === yg.year
                          ? "bg-blue-500/10"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <td className="py-3 px-2 font-medium text-white">
                        {yg.label}
                      </td>
                      <td className="py-3 px-2 text-center text-neutral-300">
                        {yg.studentCount}
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${progressColor(
                                vary(yg.avgProgress, dateRange)
                              )}`}
                              style={{
                                width: `${vary(yg.avgProgress, dateRange)}%`,
                              }}
                            />
                          </div>
                          <span
                            className={`text-xs font-medium w-10 text-right ${progressTextColor(
                              vary(yg.avgProgress, dateRange)
                            )}`}
                          >
                            {vary(yg.avgProgress, dateRange)}%
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-center text-neutral-300">
                        {yg.classCount}
                      </td>
                      <td className="py-3 px-2 text-center">
                        {yg.atRiskCount > 0 ? (
                          <Badge
                            variant="destructive"
                            className="text-red-300 bg-red-500/15"
                          >
                            {yg.atRiskCount}
                          </Badge>
                        ) : (
                          <span className="text-neutral-500">0</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── At-Risk Students ───────────────────────────────── */}
        <Card className="bg-[#111] border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              At-Risk Students
            </CardTitle>
            <CardDescription className="text-neutral-500">
              Students requiring immediate attention ({atRiskStudents.length} total)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {atRiskStudents.map((student) => (
                <Link
                  key={student.id}
                  href={`/demo/school/students/${student.id}`}
                  className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-red-500/20 transition-all group"
                >
                  <div className="flex items-center gap-4 min-w-0 flex-1">
                    <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-semibold text-red-400">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-white group-hover:text-red-300 transition-colors truncate">
                        {student.name}
                      </p>
                      <p className="text-xs text-neutral-500 truncate">
                        Year {student.yearGroup} &middot; Last active:{" "}
                        {student.lastActive}
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block flex-1 px-4 min-w-0">
                    <p className="text-xs text-red-400/80 truncate">
                      {student.riskReason}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <Badge
                      variant="destructive"
                      className="text-red-300 bg-red-500/15 hidden md:inline-flex"
                    >
                      {student.overallProgress}%
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-neutral-400 group-hover:text-white"
                    >
                      View Student
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Two-column: Top Classes + Resource Usage ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Performing Classes */}
          <Card className="bg-[#111] border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-400" />
                Top Performing Classes
              </CardTitle>
              <CardDescription className="text-neutral-500">
                Ranked by average student progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {topClasses.map((cls, i) => (
                  <Link
                    key={cls.id}
                    href={`/demo/school/classes/${cls.id}`}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-amber-500/20 transition-all group"
                  >
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        i === 0
                          ? "bg-amber-500/20 text-amber-400"
                          : i === 1
                          ? "bg-neutral-500/20 text-neutral-300"
                          : i === 2
                          ? "bg-orange-500/20 text-orange-400"
                          : "bg-white/5 text-neutral-500"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-white truncate group-hover:text-amber-300 transition-colors">
                        {cls.name}
                      </p>
                      <p className="text-xs text-neutral-500 truncate">
                        {cls.teacher} &middot; {cls.studentCount} students
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p
                        className={`text-sm font-bold ${progressTextColor(
                          cls.avgProgress
                        )}`}
                      >
                        {vary(cls.avgProgress, dateRange)}%
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Resource Usage */}
          <div className="space-y-8">
            {/* Top Lessons */}
            <Card className="bg-[#111] border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  Top 5 Lessons Accessed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {TOP_LESSONS.map((lesson) => (
                    <div key={lesson.title}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm text-neutral-300 truncate pr-4">
                          {lesson.title}
                        </p>
                        <span className="text-xs text-neutral-500 shrink-0">
                          {vary(lesson.count, dateRange)} views
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-blue-500 transition-all"
                          style={{
                            width: `${(vary(lesson.count, dateRange) / vary(maxLessonCount, dateRange)) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Mock Exams */}
            <Card className="bg-[#111] border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-purple-400" />
                  Top 5 Mock Exams Taken
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {TOP_MOCK_EXAMS.map((exam) => (
                    <div key={exam.title}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm text-neutral-300 truncate pr-4">
                          {exam.title}
                        </p>
                        <span className="text-xs text-neutral-500 shrink-0">
                          {vary(exam.count, dateRange)} taken
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-purple-500 transition-all"
                          style={{
                            width: `${(vary(exam.count, dateRange) / vary(maxMockCount, dateRange)) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ── Assignment Overview by Class ────────────────────── */}
        <Card className="bg-[#111] border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-400" />
              Assignment Overview by Class
            </CardTitle>
            <CardDescription className="text-neutral-500">
              Completion rates and overdue assignments across classes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-neutral-400">
                    <th className="text-left py-3 px-2 font-medium">Class</th>
                    <th className="text-left py-3 px-2 font-medium">Teacher</th>
                    <th className="text-left py-3 px-2 font-medium w-48">
                      Completion Rate
                    </th>
                    <th className="text-center py-3 px-2 font-medium">Overdue</th>
                  </tr>
                </thead>
                <tbody>
                  {classesForAssignment.map((cls) => {
                    const completion =
                      cls.assignmentsSet > 0
                        ? Math.round(
                            (cls.assignmentsCompleted / cls.assignmentsSet) * 100
                          )
                        : 0
                    const overdue = cls.assignmentsSet - cls.assignmentsCompleted
                    return (
                      <tr
                        key={cls.id}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="py-3 px-2 font-medium text-white">
                          {cls.name}
                        </td>
                        <td className="py-3 px-2 text-neutral-400">
                          {cls.teacher}
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center gap-3">
                            <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${progressColor(
                                  completion
                                )}`}
                                style={{ width: `${completion}%` }}
                              />
                            </div>
                            <span
                              className={`text-xs font-medium w-10 text-right ${progressTextColor(
                                completion
                              )}`}
                            >
                              {completion}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-2 text-center">
                          {overdue > 0 ? (
                            <Badge
                              variant="destructive"
                              className="text-red-300 bg-red-500/15"
                            >
                              {overdue}
                            </Badge>
                          ) : (
                            <span className="text-emerald-400 text-xs">
                              All done
                            </span>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Department Comparison (Teacher Performance) ─────── */}
        <Card className="bg-[#111] border-white/10 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              Teacher Performance Comparison
            </CardTitle>
            <CardDescription className="text-neutral-500">
              Average student progress by teacher
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {teacherStats.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.03] border border-white/5"
                >
                  <div className="w-9 h-9 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-semibold text-cyan-400">
                      {t.name
                        .split(" ")
                        .slice(-1)[0]
                        .charAt(0)}
                    </span>
                  </div>
                  <div className="min-w-0 w-40 shrink-0">
                    <p className="font-medium text-white text-sm truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {t.department} &middot; {t.classCount} class{t.classCount !== 1 ? "es" : ""}
                    </p>
                  </div>
                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex-1 h-2.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${progressColor(
                          vary(t.avgProgress, dateRange)
                        )}`}
                        style={{
                          width: `${vary(t.avgProgress, dateRange)}%`,
                        }}
                      />
                    </div>
                    <span
                      className={`text-sm font-bold w-12 text-right ${progressTextColor(
                        vary(t.avgProgress, dateRange)
                      )}`}
                    >
                      {vary(t.avgProgress, dateRange)}%
                    </span>
                  </div>
                  <div className="hidden md:block text-right w-28 shrink-0">
                    <p className="text-xs text-neutral-500">
                      {t.studentCount} students
                    </p>
                    <p className="text-xs text-neutral-500">
                      {t.completionRate}% completed
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Export Buttons ──────────────────────────────────── */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <Button
            variant="outline"
            className="border-white/10 text-neutral-300 hover:text-white hover:bg-white/5"
            onClick={() => handleExport("Excel")}
          >
            <FileSpreadsheet className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
          <Button
            variant="outline"
            className="border-white/10 text-neutral-300 hover:text-white hover:bg-white/5"
            onClick={() => handleExport("PDF")}
          >
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
        </div>

        {/* ── School Report Card ─────────────────────────────── */}
        <Card className="bg-gradient-to-br from-[#111] to-[#0d1117] border-white/10 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
              {DEMO_SCHOOL.name} Performance Summary
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Personalised school report card &middot; Spring Term 2026
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Key Metrics */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Key Metrics
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      Student engagement rate
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      89%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      Assignment completion
                    </span>
                    <span className="text-sm font-bold text-amber-400">74%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      Avg mock exam score
                    </span>
                    <span className="text-sm font-bold text-blue-400">
                      {vary(68, dateRange)}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-400">
                      Resource utilisation
                    </span>
                    <span className="text-sm font-bold text-purple-400">
                      67%
                    </span>
                  </div>
                </div>
              </div>

              {/* Trends */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Trends
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-neutral-400">
                      Year 11 progress up 12% since last half-term
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowUpRight className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-neutral-400">
                      Creative writing scores improving across KS3
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-neutral-400">
                      Mock exam participation up 23% this term
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-neutral-400">
                      Year 9 engagement dipping — review needed
                    </p>
                  </div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-neutral-300 uppercase tracking-wider">
                  Recommendations
                </h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <p className="text-sm text-neutral-300">
                      Schedule intervention sessions for 23 at-risk students before Easter break
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                    <p className="text-sm text-neutral-300">
                      Increase Year 9 Literature mock exam access to boost engagement
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                    <p className="text-sm text-neutral-300">
                      Share top-performing class strategies across department
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-sm text-neutral-500">
                This summary is generated from demo data. Register your school to
                receive real performance reports.
              </p>
              <Button
                onClick={handleDownloadReport}
                className="bg-emerald-600 hover:bg-emerald-500 text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

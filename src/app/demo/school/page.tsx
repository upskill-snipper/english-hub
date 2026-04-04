"use client"

import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  BarChart3,
  Upload,
  Download,
  School,
  AlertTriangle,
  Trophy,
  ClipboardCheck,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  GraduationCap,
  UserCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DEMO_SCHOOL,
  DEMO_STUDENTS,
  DEMO_CLASSES,
  DEMO_YEAR_GROUPS,
  DEMO_STATS,
} from "@/data/demo-data"

// ── Helpers ─────────────────────────────────────────────────────────────────

const atRiskStudents = DEMO_STUDENTS.filter((s) => s.atRisk)

const topClasses = [...DEMO_CLASSES]
  .sort((a, b) => b.avgProgress - a.avgProgress)
  .slice(0, 5)

const totalAssignmentsSet = DEMO_CLASSES.reduce(
  (sum, c) => sum + c.assignmentsSet,
  0
)
const totalAssignmentsCompleted = DEMO_CLASSES.reduce(
  (sum, c) => sum + c.assignmentsCompleted,
  0
)
const completionRate = Math.round(
  (totalAssignmentsCompleted / totalAssignmentsSet) * 100
)

function progressColor(pct: number): string {
  if (pct >= 75) return "bg-green-500"
  if (pct >= 50) return "bg-amber-500"
  return "bg-red-500"
}

function progressTextColor(pct: number): string {
  if (pct >= 75) return "text-green-400"
  if (pct >= 50) return "text-amber-400"
  return "text-red-400"
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DemoSchoolDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Demo banner */}
      <div className="mb-6 rounded-lg border border-blue-500/30 bg-blue-500/10 px-5 py-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
            <p className="text-sm text-blue-300">
              You are viewing an interactive demo with sample data. Register
              your school to use with your own students.
            </p>
          </div>
          <Button
            size="sm"
            className="shrink-0"
            render={<Link href="/for-schools/register" />}
          >
            Register Your School
            <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <LayoutDashboard className="h-7 w-7 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              School Dashboard
            </h1>
          </div>
          <p className="mt-1 flex items-center gap-2 text-muted-foreground">
            <School className="h-4 w-4" />
            {DEMO_SCHOOL.name}
            <Badge
              variant="secondary"
              className="ml-1 border-amber-500/30 bg-amber-500/10 text-xs text-amber-400"
            >
              DEMO
            </Badge>
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          render={<Link href="/demo/school/analytics" />}
        >
          <BarChart3 className="mr-1.5 h-3.5 w-3.5" />
          Analytics
        </Button>
      </div>

      {/* ── Stat cards ─────────────────────────────────────────────────────── */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Students
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {DEMO_STATS.totalStudents}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Across {DEMO_YEAR_GROUPS.length} year groups
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Teachers
            </CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {DEMO_STATS.totalTeachers}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              <Link
                href="/demo/school/teachers"
                className="text-primary hover:underline"
              >
                View all teachers
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Classes
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {DEMO_STATS.activeClasses}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              <Link
                href="/demo/school/classes"
                className="text-primary hover:underline"
              >
                Manage classes
              </Link>
            </p>
          </CardContent>
        </Card>

        <Card className="border-border bg-card/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active This Week
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">
              {DEMO_STATS.activeThisWeek}%
            </div>
            <p className="mt-1 flex items-center gap-1 text-xs text-green-400">
              <TrendingUp className="h-3 w-3" />
              +4% from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* ── Main grid ──────────────────────────────────────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-2">
          {/* Quick actions */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 sm:grid-cols-2">
              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/demo/school/import" />}
              >
                <Upload className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">
                    Import Students / Teachers
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Upload CSV to bulk-add users
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/demo/school/classes" />}
              >
                <BookOpen className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Manage Classes</p>
                  <p className="text-xs text-muted-foreground">
                    Create and organise classes
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/demo/school/analytics" />}
              >
                <BarChart3 className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">View Analytics</p>
                  <p className="text-xs text-muted-foreground">
                    Track progress and performance
                  </p>
                </div>
              </Button>

              <Button
                variant="outline"
                className="h-auto justify-start gap-3 px-4 py-3"
                render={<Link href="/demo/school/export" />}
              >
                <Download className="h-4 w-4 shrink-0 text-primary" />
                <div className="text-left">
                  <p className="text-sm font-medium">Download Login Details</p>
                  <p className="text-xs text-muted-foreground">
                    Export credentials for students
                  </p>
                </div>
              </Button>
            </CardContent>
          </Card>

          {/* Year group overview */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-foreground">
                  Year Group Overview
                </CardTitle>
                <Link
                  href="/demo/school/analytics"
                  className="text-xs text-primary hover:underline"
                >
                  Full analytics
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs text-muted-foreground">
                      <th className="pb-3 pr-4 font-medium">Year Group</th>
                      <th className="pb-3 pr-4 font-medium">Students</th>
                      <th className="pb-3 pr-4 font-medium">Classes</th>
                      <th className="pb-3 pr-4 font-medium">Avg Progress</th>
                      <th className="pb-3 font-medium">Progress</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {DEMO_YEAR_GROUPS.map((yg: any) => (
                      <tr key={yg.year} className="group">
                        <td className="py-3 pr-4">
                          <Link
                            href={`/demo/school/analytics?year=${yg.year}`}
                            className="font-medium text-foreground group-hover:text-primary"
                          >
                            {yg.label}
                          </Link>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">
                          {yg.studentCount}
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">
                          {yg.classCount}
                        </td>
                        <td className="py-3 pr-4">
                          <span className={progressTextColor(yg.avgProgress)}>
                            {yg.avgProgress}%
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <div className="h-2 w-24 overflow-hidden rounded-full bg-muted">
                              <div
                                className={`h-full rounded-full ${progressColor(yg.avgProgress)}`}
                                style={{ width: `${yg.avgProgress}%` }}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Assignment completion overview */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-foreground">
                  Assignment Completion
                </CardTitle>
                <Badge
                  variant="secondary"
                  className={
                    completionRate >= 75
                      ? "border-green-500/30 bg-green-500/10 text-green-400"
                      : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                  }
                >
                  {completionRate}% overall
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-border bg-background/50 p-4 text-center">
                  <p className="text-2xl font-bold text-foreground">
                    {totalAssignmentsSet}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Assignments Set
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background/50 p-4 text-center">
                  <p className="text-2xl font-bold text-green-400">
                    {totalAssignmentsCompleted}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Completed
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-background/50 p-4 text-center">
                  <p className="text-2xl font-bold text-amber-400">
                    {totalAssignmentsSet - totalAssignmentsCompleted}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Outstanding
                  </p>
                </div>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-green-500 transition-all"
                  style={{ width: `${completionRate}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>0%</span>
                <span>Completion rate: {completionRate}%</span>
                <span>100%</span>
              </div>
            </CardContent>
          </Card>

          {/* Latest Assessment Results */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <ClipboardCheck className="h-4 w-4 text-blue-400" />
                  Latest Assessment Results
                </CardTitle>
                <Link
                  href="/demo/school/analytics"
                  className="text-xs text-primary hover:underline"
                >
                  View all
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {(() => {
                  const allResults = DEMO_STUDENTS.flatMap((s) => [
                    ...s.mockExamResults.map((r) => ({ ...r, studentName: s.name, studentId: s.id, yearGroup: s.yearGroup, type: "Mock Exam" as const })),
                    ...s.essaySubmissions.map((r) => ({ exam: r.title, score: r.score, grade: "", date: r.date, studentName: s.name, studentId: s.id, yearGroup: s.yearGroup, type: "Essay" as const })),
                    ...s.quizAttempts.map((r) => ({ exam: r.quiz, score: Math.round((r.score / r.maxScore) * 100), grade: "", date: r.date, studentName: s.name, studentId: s.id, yearGroup: s.yearGroup, type: "Quiz" as const })),
                  ])
                  const sorted = allResults.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 8)
                  return sorted.map((r, i) => (
                    <Link
                      key={i}
                      href={`/demo/school/students/${r.studentId}`}
                      className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">{r.exam}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {r.studentName} &middot; {r.yearGroup}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <Badge
                          variant="secondary"
                          className={`text-xs ${r.type === "Mock Exam" ? "border-amber-500/30 bg-amber-500/10 text-amber-400" : r.type === "Essay" ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400" : "border-pink-500/30 bg-pink-500/10 text-pink-400"}`}
                        >
                          {r.type}
                        </Badge>
                        <span className={`text-sm font-semibold ${r.score >= 70 ? "text-green-400" : r.score >= 50 ? "text-amber-400" : "text-red-400"}`}>
                          {r.score}%
                        </span>
                      </div>
                    </Link>
                  ))
                })()}
              </div>
            </CardContent>
          </Card>

          {/* Areas of Concern */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                Areas of Concern
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-xs text-muted-foreground">
                Topics where multiple students are struggling across the school.
              </p>
              <div className="space-y-3">
                {(() => {
                  const weaknessCounts: Record<string, number> = {}
                  DEMO_STUDENTS.forEach((s) => {
                    s.weaknesses.forEach((w) => {
                      const name = typeof w === "string" ? w : w.name
                      weaknessCounts[name] = (weaknessCounts[name] || 0) + 1
                    })
                  })
                  const sorted = Object.entries(weaknessCounts)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 6)
                  const max = sorted[0]?.[1] || 1
                  return sorted.map(([name, count], i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-foreground">{name}</span>
                        <span className="text-xs text-muted-foreground">{count} students</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-amber-500"
                          style={{ width: `${(count / max) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))
                })()}
              </div>
            </CardContent>
          </Card>

          {/* Suggested Interventions */}
          <Card className="border-border bg-card/60 border-l-4 border-l-violet-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <TrendingUp className="h-4 w-4 text-violet-400" />
                Suggested Interventions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-xs text-muted-foreground">
                Recommended actions for at-risk students based on assessment data.
              </p>
              <div className="space-y-2">
                {atRiskStudents.slice(0, 5).map((student) => {
                  const weakList = student.weaknesses.map((w) => typeof w === "string" ? w : w.name)
                  const interventionMap: Record<string, string> = {
                    "Spelling & Grammar": "Assign daily SPaG drills and proofreading exercises",
                    "Essay Structure": "Schedule 1:1 essay planning sessions with teacher",
                    "Timed Conditions": "Enrol in after-school exam technique workshop",
                    "Essay Length": "Set incremental word count targets for each assignment",
                    "Quotation Integration": "Provide quotation embedding scaffold sheets",
                    "Written Expression": "Pair with writing mentor for peer feedback sessions",
                    "Exam Technique": "Book mock exam practice slots weekly",
                    "Paragraph Structure": "Use PEAL framework checklists for all written work",
                    "Analytical Depth": "Assign critical reading tasks with discussion prompts",
                  }
                  const topWeak = weakList[0] || "General"
                  const intervention = interventionMap[topWeak] || "Schedule progress review meeting with class teacher"
                  return (
                    <Link
                      key={student.id}
                      href={`/demo/school/students/${student.id}`}
                      className="block rounded-lg border border-border bg-background/50 p-3 transition-colors hover:border-violet-500/30 hover:bg-violet-500/5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-sm font-medium text-foreground">{student.name}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{student.className}</p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="shrink-0 border-red-500/30 bg-red-500/10 text-xs text-red-400"
                        >
                          {student.overallProgress}%
                        </Badge>
                      </div>
                      <div className="mt-2 rounded-md bg-violet-500/5 border border-violet-500/10 px-2.5 py-1.5">
                        <p className="text-xs text-violet-300">
                          <span className="font-medium">Action:</span> {intervention}
                        </p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* At-risk students */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                  At-Risk Students
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="border-red-500/30 bg-red-500/10 text-xs text-red-400"
                >
                  {atRiskStudents.length}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {atRiskStudents.map((student) => (
                  <Link
                    key={student.id}
                    href={`/demo/school/students/${student.id}`}
                    className="block rounded-lg border border-border bg-background/50 p-3 transition-colors hover:border-red-500/30 hover:bg-red-500/5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {student.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {student.className}
                        </p>
                      </div>
                      <Badge
                        variant="secondary"
                        className="shrink-0 border-red-500/30 bg-red-500/10 text-xs text-red-400"
                      >
                        {student.overallProgress}%
                      </Badge>
                    </div>
                    {student.riskReason && (
                      <p className="mt-2 text-xs text-red-400/80">
                        <TrendingDown className="mr-1 inline h-3 w-3" />
                        {student.riskReason}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full"
                render={<Link href="/demo/school/analytics?filter=at-risk" />}
              >
                View All At-Risk Students
              </Button>
            </CardContent>
          </Card>

          {/* Top performing classes */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Trophy className="h-4 w-4 text-amber-400" />
                Top Performing Classes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topClasses.map((cls, idx) => (
                  <Link
                    key={cls.id}
                    href={`/demo/school/classes/${cls.id}`}
                    className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500/10 text-xs font-bold text-amber-400">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {cls.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {cls.teacher}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-sm font-semibold ${progressTextColor(cls.avgProgress)}`}
                    >
                      {cls.avgProgress}%
                    </span>
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full"
                render={<Link href="/demo/school/classes" />}
              >
                View All Classes
              </Button>
            </CardContent>
          </Card>

          {/* Quick links */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                Quick Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link
                href="/demo/school/teachers"
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Users className="h-4 w-4 text-primary" />
                Manage Teachers
                <ArrowRight className="ml-auto h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo/school/classes"
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <BookOpen className="h-4 w-4 text-primary" />
                Manage Classes
                <ArrowRight className="ml-auto h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo/school/analytics"
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <BarChart3 className="h-4 w-4 text-primary" />
                School Analytics
                <ArrowRight className="ml-auto h-3.5 w-3.5" />
              </Link>
              <Link
                href="/demo/school/import"
                className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <ClipboardCheck className="h-4 w-4 text-primary" />
                Import Data
                <ArrowRight className="ml-auto h-3.5 w-3.5" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

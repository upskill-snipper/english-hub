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
  Zap,
  Target,
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
  .slice(0, 3)

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
  if (pct >= 75) return "text-emerald-400"
  if (pct >= 50) return "text-amber-400"
  return "text-red-400"
}

function ringColor(pct: number): string {
  if (pct >= 75) return "stroke-emerald-500"
  if (pct >= 50) return "stroke-amber-500"
  return "stroke-red-500"
}

function ringTrack(): string {
  return "stroke-muted/40"
}

/** CSS-based donut/ring chart */
function ProgressRing({
  value,
  size = 56,
  strokeWidth = 5,
  children,
}: {
  value: number
  size?: number
  strokeWidth?: number
  children?: React.ReactNode
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="-rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={ringTrack()}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={ringColor(value)}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}

// Build unified activity feed
function getRecentActivity() {
  const allResults = DEMO_STUDENTS.flatMap((s) => [
    ...s.mockExamResults.map((r) => ({
      ...r,
      studentName: s.name,
      studentId: s.id,
      yearGroup: s.yearGroup,
      type: "Mock Exam" as const,
    })),
    ...s.essaySubmissions.map((r) => ({
      exam: r.title,
      score: r.score,
      grade: "",
      date: r.date,
      studentName: s.name,
      studentId: s.id,
      yearGroup: s.yearGroup,
      type: "Essay" as const,
    })),
    ...s.quizAttempts.map((r) => ({
      exam: r.quiz,
      score: Math.round((r.score / r.maxScore) * 100),
      grade: "",
      date: r.date,
      studentName: s.name,
      studentId: s.id,
      yearGroup: s.yearGroup,
      type: "Quiz" as const,
    })),
  ])
  return allResults
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)
}

const recentActivity = getRecentActivity()

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DemoSchoolDashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
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
            <Badge
              variant="secondary"
              className="border-primary/30 bg-primary/10 text-xs text-primary"
            >
              Exam Board: AQA
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

      {/* ── At-Risk Alert Banner ─────────────────────────────────────────── */}
      {atRiskStudents.length > 0 && (
        <div className="mb-8 overflow-hidden rounded-xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent">
          <div className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
                <AlertTriangle className="h-5 w-5 text-red-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-red-300">
                  {atRiskStudents.length} student{atRiskStudents.length !== 1 && "s"} flagged as at-risk
                </p>
                <p className="text-xs text-red-400/70">
                  {atRiskStudents.map((s) => s.name).join(", ")}
                </p>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className="shrink-0 border-red-500/30 text-red-400 hover:bg-red-500/10"
              render={<Link href="/demo/school/analytics?filter=at-risk" />}
            >
              Review Students
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}

      {/* ── Hero Stat Cards ──────────────────────────────────────────────── */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Students */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-blue-400/80">
                Total Students
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                {DEMO_STATS.totalStudents}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Across {DEMO_YEAR_GROUPS.length} year groups
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15">
              <Users className="h-5 w-5 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Total Teachers */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-violet-500/10 to-violet-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-violet-400/80">
                Total Teachers
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                {DEMO_STATS.totalTeachers}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <Link
                  href="/demo/school/teachers"
                  className="text-primary hover:underline"
                >
                  View all teachers
                </Link>
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15">
              <UserCheck className="h-5 w-5 text-violet-400" />
            </div>
          </div>
        </div>

        {/* Active Classes */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-400/80">
                Active Classes
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                {DEMO_STATS.activeClasses}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                <Link
                  href="/demo/school/classes"
                  className="text-primary hover:underline"
                >
                  Manage classes
                </Link>
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15">
              <BookOpen className="h-5 w-5 text-emerald-400" />
            </div>
          </div>
        </div>

        {/* Avg Score */}
        <div className="group relative overflow-hidden rounded-xl border border-border bg-gradient-to-br from-amber-500/10 to-amber-500/5 p-5 shadow-sm transition-shadow hover:shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-amber-400/80">
                Avg Score
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight text-foreground">
                {DEMO_STATS.avgScore}%
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-emerald-400">
                <TrendingUp className="h-3 w-3" />
                +3% from last term
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500/15">
              <Target className="h-5 w-5 text-amber-400" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Two-column body ──────────────────────────────────────────────── */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* LEFT COLUMN - 8 cols */}
        <div className="space-y-6 lg:col-span-8">
          {/* Performance Overview - 2-col ring chart grid */}
          <Card className="border-border bg-card/60">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-semibold text-foreground">
                  Year Group Performance
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
              <div className="grid gap-4 sm:grid-cols-2">
                {DEMO_YEAR_GROUPS.map((yg: any) => (
                  <Link
                    key={yg.year}
                    href={`/demo/school/analytics?year=${yg.year}`}
                    className="flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <ProgressRing value={yg.avgProgress} size={56} strokeWidth={5}>
                      <span className={`text-xs font-bold ${progressColor(yg.avgProgress)}`}>
                        {yg.avgProgress}%
                      </span>
                    </ProgressRing>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-foreground">
                        {yg.label}
                      </p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {yg.studentCount} students &middot; {yg.classCount} classes
                      </p>
                      <div className="mt-1.5 flex items-center gap-2">
                        {yg.atRiskCount > 0 && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-medium text-red-400">
                            <AlertTriangle className="h-2.5 w-2.5" />
                            {yg.atRiskCount} at-risk
                          </span>
                        )}
                        {yg.excellingCount > 0 && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                            <Zap className="h-2.5 w-2.5" />
                            {yg.excellingCount} excelling
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Assignment Completion + Top Classes side by side */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Assignment Completion Donut */}
            <Card className="border-border bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold text-foreground">
                  Assignment Completion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <ProgressRing value={completionRate} size={96} strokeWidth={8}>
                    <div className="text-center">
                      <p className="text-xl font-bold text-foreground">
                        {completionRate}%
                      </p>
                      <p className="text-[10px] text-muted-foreground">complete</p>
                    </div>
                  </ProgressRing>
                  <div className="space-y-2.5 text-sm">
                    <div>
                      <p className="text-xs text-muted-foreground">Set</p>
                      <p className="text-lg font-semibold text-foreground">
                        {totalAssignmentsSet}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Completed</p>
                      <p className="text-lg font-semibold text-emerald-400">
                        {totalAssignmentsCompleted}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Outstanding</p>
                      <p className="text-lg font-semibold text-amber-400">
                        {totalAssignmentsSet - totalAssignmentsCompleted}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Performing Classes */}
            <Card className="border-border bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <Trophy className="h-4 w-4 text-amber-400" />
                  Top Classes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2.5">
                  {topClasses.map((cls, idx) => (
                    <Link
                      key={cls.id}
                      href={`/demo/school/classes/${cls.id}`}
                      className="flex items-center gap-3 rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-primary/5"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 text-xs font-bold text-amber-400">
                        {idx + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-foreground">
                          {cls.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {cls.teacher}
                        </p>
                      </div>
                      <span className={`text-sm font-bold ${progressColor(cls.avgProgress)}`}>
                        {cls.avgProgress}%
                      </span>
                    </Link>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-3 w-full"
                  render={<Link href="/demo/school/classes" />}
                >
                  View All Classes
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Areas of Concern + Interventions side by side */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Areas of Concern */}
            <Card className="border-border bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-400" />
                  Areas of Concern
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                      .slice(0, 5)
                    const max = sorted[0]?.[1] || 1
                    return sorted.map(([name, count], i) => (
                      <div key={i}>
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-xs font-medium text-foreground">
                            {name}
                          </span>
                          <span className="text-[10px] text-muted-foreground">
                            {count} students
                          </span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-amber-500 transition-all"
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
            <Card className="border-l-4 border-l-violet-500 border-border bg-card/60">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <TrendingUp className="h-4 w-4 text-violet-400" />
                  Interventions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {atRiskStudents.slice(0, 3).map((student) => {
                    const weakList = student.weaknesses.map((w) =>
                      typeof w === "string" ? w : w.name
                    )
                    const interventionMap: Record<string, string> = {
                      "Spelling & Grammar": "Daily SPaG drills",
                      "Essay Structure": "1:1 essay planning sessions",
                      "Timed Conditions": "Exam technique workshop",
                      "Essay Length": "Incremental word count targets",
                      "Quotation Integration": "Quotation scaffold sheets",
                      "Written Expression": "Peer feedback sessions",
                      "Exam Technique": "Weekly mock practice",
                      "Paragraph Structure": "PEAL framework checklists",
                      "Analytical Depth": "Critical reading tasks",
                    }
                    const topWeak = weakList[0] || "General"
                    const intervention =
                      interventionMap[topWeak] || "Progress review meeting"
                    return (
                      <Link
                        key={student.id}
                        href={`/demo/school/students/${student.id}`}
                        className="block rounded-lg border border-border bg-background/50 p-2.5 transition-colors hover:border-violet-500/30 hover:bg-violet-500/5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <p className="truncate text-xs font-medium text-foreground">
                            {student.name}
                          </p>
                          <Badge
                            variant="secondary"
                            className="shrink-0 border-red-500/30 bg-red-500/10 text-[10px] text-red-400"
                          >
                            {student.overallProgress}%
                          </Badge>
                        </div>
                        <p className="mt-1 text-[11px] text-violet-300">
                          {intervention}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* RIGHT COLUMN - 4 cols */}
        <div className="space-y-6 lg:col-span-4">
          {/* Quick Actions - icon grid */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold text-foreground">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/import" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10">
                    <Upload className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-xs font-medium">Import</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/classes" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10">
                    <BookOpen className="h-4 w-4 text-emerald-400" />
                  </div>
                  <span className="text-xs font-medium">Classes</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/analytics" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/10">
                    <BarChart3 className="h-4 w-4 text-violet-400" />
                  </div>
                  <span className="text-xs font-medium">Analytics</span>
                </Button>

                <Button
                  variant="outline"
                  className="h-auto flex-col gap-2 px-3 py-4"
                  render={<Link href="/demo/school/export" />}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/10">
                    <Download className="h-4 w-4 text-amber-400" />
                  </div>
                  <span className="text-xs font-medium">Export</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity Feed */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-foreground">
                  <ClipboardCheck className="h-4 w-4 text-blue-400" />
                  Recent Activity
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
                {recentActivity.map((r, i) => (
                  <Link
                    key={i}
                    href={`/demo/school/students/${r.studentId}`}
                    className="block rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-xs font-medium text-foreground">
                        {r.exam}
                      </p>
                      <span
                        className={`text-xs font-bold ${
                          r.score >= 70
                            ? "text-emerald-400"
                            : r.score >= 50
                              ? "text-amber-400"
                              : "text-red-400"
                        }`}
                      >
                        {r.score}%
                      </span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <p className="text-[11px] text-muted-foreground">
                        {r.studentName}
                      </p>
                      <Badge
                        variant="secondary"
                        className={`text-[10px] ${
                          r.type === "Mock Exam"
                            ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                            : r.type === "Essay"
                              ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                              : "border-pink-500/30 bg-pink-500/10 text-pink-400"
                        }`}
                      >
                        {r.type}
                      </Badge>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* At-Risk Students compact list */}
          <Card className="border-border bg-card/60">
            <CardHeader className="pb-3">
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
              <div className="space-y-2">
                {atRiskStudents.map((student) => (
                  <Link
                    key={student.id}
                    href={`/demo/school/students/${student.id}`}
                    className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5 transition-colors hover:border-red-500/30 hover:bg-red-500/5"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs font-medium text-foreground">
                        {student.name}
                      </p>
                      <p className="flex items-center gap-1 text-[11px] text-red-400/80">
                        <TrendingDown className="h-2.5 w-2.5" />
                        {student.className}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="shrink-0 border-red-500/30 bg-red-500/10 text-[10px] text-red-400"
                    >
                      {student.overallProgress}%
                    </Badge>
                  </Link>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 w-full"
                render={<Link href="/demo/school/analytics?filter=at-risk" />}
              >
                View All At-Risk
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

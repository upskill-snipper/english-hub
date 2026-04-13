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
  ArrowDownRight,
  Info,
  GraduationCap,
  Search,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { toast } from "sonner"
import { openPrintableDocument } from "@/lib/generate-download"
import { DownloadMenu } from "@/components/DownloadMenu"
import {
  DEMO_SCHOOL,
  DEMO_STUDENTS,
  DEMO_CLASSES,
  DEMO_TEACHERS,
  DEMO_YEAR_GROUPS,
  DEMO_STATS,
} from "@/data/demo-data"
import { percentageToGCSEGrade, gcseGradeColor, predictedGradeColor, formatReadingAge } from "@/lib/grades"

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

// ── Color helpers ──────────────────────────────────────────
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

function ragBadge(pct: number) {
  if (pct >= 75)
    return <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/20">On Track</Badge>
  if (pct >= 60)
    return <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/20">Needs Support</Badge>
  return <Badge className="bg-red-500/15 text-red-400 border-red-500/20">At Risk</Badge>
}

// ── Ring chart (SVG donut) ─────────────────────────────────
function RingChart({
  value,
  size = 80,
  strokeWidth = 8,
  color = "text-emerald-400",
  bgColor = "text-foreground/10",
  label,
}: {
  value: number
  size?: number
  strokeWidth?: number
  color?: string
  bgColor?: string
  label?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (Math.min(value, 100) / 100) * circumference
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className={bgColor}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={color}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-base font-bold text-foreground">{Math.round(value)}%</span>
        {label && <span className="text-[9px] text-muted-foreground/70 leading-tight">{label}</span>}
      </div>
    </div>
  )
}

// ── Trend indicator ────────────────────────────────────────
function TrendBadge({ value, suffix = "%" }: { value: number; suffix?: string }) {
  if (value > 0)
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-emerald-400">
        <ArrowUpRight className="w-3.5 h-3.5" />
        +{value}{suffix}
      </span>
    )
  if (value < 0)
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-red-400">
        <ArrowDownRight className="w-3.5 h-3.5" />
        {value}{suffix}
      </span>
    )
  return <span className="text-xs text-muted-foreground/70">No change</span>
}

// ── Horizontal bar ─────────────────────────────────────────
function HBar({ value, max, color = "bg-blue-500" }: { value: number; max: number; color?: string }) {
  return (
    <div className="h-2.5 rounded-full bg-muted overflow-hidden">
      <div
        className={`h-full rounded-full transition-all ${color}`}
        style={{ width: `${Math.min((value / max) * 100, 100)}%` }}
      />
    </div>
  )
}

// ── Inline data ────────────────────────────────────────────
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
  { title: "AQA Lang Paper 1 Practice", count: 134 },
  { title: "AQA Lit Paper 2 Mock", count: 118 },
]

type TabKey = "overview" | "year-groups" | "teachers" | "students" | "assessments"

// ── Main page ──────────────────────────────────────────────
export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState<DateRange>("term")
  const [yearFilter, setYearFilter] = useState<number | null>(null)
  const [studentSearch, setStudentSearch] = useState("")

  const atRiskStudents = DEMO_STUDENTS.filter((s) => s.atRisk)

  const filteredStudents = DEMO_STUDENTS.filter((s) => {
    if (yearFilter && s.yearGroup !== `Year ${yearFilter}`) return false
    if (studentSearch) {
      const q = studentSearch.toLowerCase()
      return s.name.toLowerCase().includes(q) || s.yearGroup.toLowerCase().includes(q)
    }
    return true
  })

  const topClasses = [...DEMO_CLASSES]
    .sort((a, b) => b.avgProgress - a.avgProgress)
    .slice(0, 6)

  const classesForAssignment = [...DEMO_CLASSES]
    .sort((a, b) => a.avgProgress - b.avgProgress)
    .slice(0, 8)

  const maxLessonCount = TOP_LESSONS[0].count
  const maxMockCount = TOP_MOCK_EXAMS[0].count

  // Year-group at-risk counts
  const yearGroupAtRisk = DEMO_YEAR_GROUPS.map((yg: any) => {
    const count = DEMO_STUDENTS.filter(
      (s) => s.yearGroup === `Year ${yg.year}` && s.atRisk
    ).length
    return { ...yg, atRiskCount: count || Math.round(yg.studentCount * 0.06) }
  })

  // Teacher stats
  const teacherStats = DEMO_TEACHERS.map((t) => {
    const teacherClasses = DEMO_CLASSES.filter((c) => c.teacherId === t.id)
    const totalSet = teacherClasses.reduce((acc, c) => acc + c.assignmentsSet, 0)
    const totalDone = teacherClasses.reduce((acc, c) => acc + c.assignmentsCompleted, 0)
    const avgProg =
      teacherClasses.length > 0
        ? Math.round(
            teacherClasses.reduce((acc, c) => acc + c.avgProgress, 0) / teacherClasses.length
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

  // Weakness analysis
  const allWeaknesses: Record<string, number> = {}
  DEMO_STUDENTS.forEach((s) => {
    s.weaknesses.forEach((w) => {
      const name = typeof w === "string" ? w : w.name
      allWeaknesses[name] = (allWeaknesses[name] || 0) + 1
    })
  })
  const topWeaknesses = Object.entries(allWeaknesses)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
  const maxWeaknessCount = topWeaknesses[0]?.[1] || 1

  // Grade distribution
  const gradeBuckets: Record<string, number> = { "8-9": 0, "6-7": 0, "4-5": 0, "2-3": 0 }
  DEMO_STUDENTS.forEach((s) => {
    s.mockExamResults.forEach((r) => {
      const g = parseInt(r.grade, 10)
      if (g >= 8) gradeBuckets["8-9"]++
      else if (g >= 6) gradeBuckets["6-7"]++
      else if (g >= 4) gradeBuckets["4-5"]++
      else gradeBuckets["2-3"]++
    })
  })
  const maxGrade = Math.max(...Object.values(gradeBuckets), 1)

  // Assessment trend data
  const months = ["Jan", "Feb", "Mar"]
  const assessmentCategories = [
    { label: "Mock Exams", avgs: [62, 65, vary(68, dateRange)], color: "amber" },
    { label: "Essays", avgs: [58, 63, vary(66, dateRange)], color: "cyan" },
    { label: "Quizzes", avgs: [70, 72, vary(74, dateRange)], color: "purple" },
  ]

  function handleExport(type: string) {
    if (type === "PDF") {
      handleDownloadReport()
      return
    }
    toast.info(`${type} export is available with a full account`, {
      description: "Register your school to unlock data exports.",
    })
  }

  function handleDownloadReport() {
    const e = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    const body = `
      <h2>School Overview</h2>
      <table>
        <tr><th>Total Students</th><td>${DEMO_STUDENTS.length}</td><th>Total Classes</th><td>${DEMO_CLASSES.length}</td></tr>
      </table>
      <h2>Teacher Performance</h2>
      <table>
        <tr><th>Teacher</th><th>Classes</th><th>Students</th><th>Avg Progress</th><th>Completion</th></tr>
        ${teacherStats.map((t) => `<tr><td>${e(t.name)}</td><td>${t.classCount}</td><td>${t.studentCount}</td><td>${t.avgProgress}%</td><td>${t.completionRate}%</td></tr>`).join("")}
      </table>
      <p style="margin-top:16px;font-size:10pt;color:#888">This is demo data. Register your school for real analytics.</p>`
    openPrintableDocument("School Analytics Report", body, {
      subtitle: `${DEMO_SCHOOL.name} | Demo Data`,
    })
  }

  return (
    <div className="text-foreground overflow-x-hidden">
      <div className="space-y-8 max-w-full">
        {/* Page toggle: Analytics / Reports */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-muted/40 p-1 w-fit">
          <span className="flex items-center gap-1.5 rounded-md bg-primary/10 text-primary px-4 py-2 text-sm font-semibold">
            <BarChart3 className="w-4 h-4" />
            Analytics
          </span>
          <Link
            href="/demo/school/reports"
            className="flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            <FileText className="w-4 h-4" />
            Reports
          </Link>
        </div>

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">School Analytics</h1>
            <p className="text-muted-foreground mt-1">
              {DEMO_SCHOOL.name} &middot; {vary(DEMO_STATS.totalStudents, dateRange)} students enrolled
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Date range selector */}
            <div className="flex items-center gap-1 rounded-lg bg-muted/50 border border-border p-1 overflow-x-auto max-w-full">
              {(Object.keys(DATE_LABELS) as DateRange[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setDateRange(key)}
                  className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                    dateRange === key
                      ? "bg-muted text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {DATE_LABELS[key]}
                </button>
              ))}
            </div>

            {/* Export */}
            <div className="hidden sm:flex items-center gap-2">
              <DownloadMenu
                size="sm"
                variant="outline"
                label="Export"
                className="border-border text-foreground/80 hover:text-foreground hover:bg-muted/50"
                options={[
                  { label: "Export as PDF", format: "pdf", onClick: () => handleExport("PDF") },
                  { label: "Export as Excel (.csv)", format: "csv", onClick: () => handleExport("Excel") },
                ]}
              />
            </div>
          </div>
        </div>

        {/* ── Tabbed Navigation ──────────────────────────────── */}
        <Tabs defaultValue="overview">
          <TabsList
            variant="line"
            className="w-full justify-start border-b border-border rounded-none mb-8 gap-0 bg-transparent"
          >
            <TabsTrigger
              value="overview"
              className="px-4 py-2.5 text-sm data-active:text-emerald-400 text-muted-foreground hover:text-foreground rounded-none border-b-2 border-transparent data-active:border-emerald-400"
            >
              <BarChart3 className="w-4 h-4 mr-1.5" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="year-groups"
              className="px-4 py-2.5 text-sm data-active:text-blue-400 text-muted-foreground hover:text-foreground rounded-none border-b-2 border-transparent data-active:border-blue-400"
            >
              <GraduationCap className="w-4 h-4 mr-1.5" />
              Year Groups
            </TabsTrigger>
            <TabsTrigger
              value="teachers"
              className="px-4 py-2.5 text-sm data-active:text-cyan-400 text-muted-foreground hover:text-foreground rounded-none border-b-2 border-transparent data-active:border-cyan-400"
            >
              <Users className="w-4 h-4 mr-1.5" />
              Teachers
            </TabsTrigger>
            <TabsTrigger
              value="students"
              className="px-4 py-2.5 text-sm data-active:text-purple-400 text-muted-foreground hover:text-foreground rounded-none border-b-2 border-transparent data-active:border-purple-400"
            >
              <Users className="w-4 h-4 mr-1.5" />
              Students
            </TabsTrigger>
            <TabsTrigger
              value="assessments"
              className="px-4 py-2.5 text-sm data-active:text-amber-400 text-muted-foreground hover:text-foreground rounded-none border-b-2 border-transparent data-active:border-amber-400"
            >
              <ClipboardList className="w-4 h-4 mr-1.5" />
              Assessments
            </TabsTrigger>
          </TabsList>

          {/* ════════════════════════════════════════════════════
              TAB 1: OVERVIEW
              ════════════════════════════════════════════════════ */}
          <TabsContent value="overview">
            {/* Large stat cards with ring charts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {/* Active Students */}
              <Card className="bg-gradient-to-br from-emerald-500/5 to-card border-emerald-500/10 hover:border-emerald-500/25 transition-colors">
                <CardContent className="pt-6 pb-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Active Students</p>
                      <p className="text-3xl font-bold text-foreground">{vary(305, dateRange)}<span className="text-lg text-muted-foreground/70">/{vary(342, dateRange)}</span></p>
                      <div className="mt-2">
                        <TrendBadge value={vary(12, dateRange)} />
                      </div>
                    </div>
                    <RingChart value={(vary(305, dateRange) / vary(342, dateRange)) * 100} color="text-emerald-400" label="active" />
                  </div>
                </CardContent>
              </Card>

              {/* Assignments */}
              <Card className="bg-gradient-to-br from-blue-500/5 to-card border-blue-500/10 hover:border-blue-500/25 transition-colors">
                <CardContent className="pt-6 pb-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Assignments Submitted</p>
                      <p className="text-3xl font-bold text-foreground">{vary(1247, dateRange).toLocaleString()}</p>
                      <div className="mt-2">
                        <TrendBadge value={vary(8, dateRange)} />
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-blue-500/10">
                      <FileText className="w-7 h-7 text-blue-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Average Score */}
              <Card className="bg-gradient-to-br from-amber-500/5 to-card border-amber-500/10 hover:border-amber-500/25 transition-colors">
                <CardContent className="pt-6 pb-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Average Score</p>
                      <p className="text-3xl font-bold text-foreground">{vary(68, dateRange)}% <span className="text-lg font-normal text-muted-foreground">(G{percentageToGCSEGrade(vary(68, dateRange))})</span></p>
                      <div className="mt-2">
                        <TrendBadge value={vary(3, dateRange)} />
                      </div>
                    </div>
                    <RingChart value={vary(68, dateRange)} color="text-amber-400" label="avg" />
                  </div>
                </CardContent>
              </Card>

              {/* At Risk */}
              <Card className="bg-gradient-to-br from-red-500/5 to-card border-red-500/10 hover:border-red-500/25 transition-colors">
                <CardContent className="pt-6 pb-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">At-Risk Students</p>
                      <p className="text-3xl font-bold text-red-400">{vary(23, dateRange)}</p>
                      <div className="mt-2">
                        <TrendBadge value={-2} suffix=" fewer" />
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-red-500/10">
                      <AlertTriangle className="w-7 h-7 text-red-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick insights row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
              {/* Key Metrics */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                    Key Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Student engagement rate", value: "89%", color: "text-emerald-400" },
                    { label: "Assignment completion", value: "74%", color: "text-amber-400" },
                    { label: "Avg mock exam score", value: `${vary(68, dateRange)}%`, color: "text-amber-400" },
                    { label: "Resource utilisation", value: "67%", color: "text-violet-400" },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{m.label}</span>
                      <span className={`text-sm font-bold ${m.color}`}>{m.value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Trends */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                    Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { text: "Year 11 progress up 12% since last half-term", icon: <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0" /> },
                    { text: "Creative writing scores improving across KS3", icon: <ArrowUpRight className="w-4 h-4 text-emerald-400 shrink-0" /> },
                    { text: "Mock exam participation up 23% this term", icon: <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" /> },
                    { text: "Year 9 engagement dipping -- review needed", icon: <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" /> },
                  ].map((t, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {t.icon}
                      <p className="text-sm text-muted-foreground">{t.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="bg-card border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-semibold text-foreground/80 uppercase tracking-wider">
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10">
                    <p className="text-sm text-foreground/80">
                      Schedule intervention sessions for 23 at-risk students before Easter break
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/10">
                    <p className="text-sm text-foreground/80">
                      Increase Year 9 Literature mock exam access to boost engagement
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-yellow-400/5 border border-yellow-400/10">
                    <p className="text-sm text-foreground/80">
                      Share top-performing class strategies across department
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top classes + weakness analysis */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
              {/* Top Performing Classes */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-400" />
                    Top Performing Classes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {topClasses.map((cls, i) => (
                      <Link
                        key={cls.id}
                        href={`/demo/school/classes/${cls.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-amber-500/20 transition-all group"
                      >
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                            i === 0
                              ? "bg-amber-500/20 text-amber-400"
                              : i === 1
                              ? "bg-neutral-500/20 text-foreground/80"
                              : i === 2
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-muted/50 text-muted-foreground/70"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground truncate group-hover:text-amber-300 transition-colors">
                            {cls.name}
                          </p>
                          <p className="text-xs text-muted-foreground/70 truncate">
                            {cls.teacher} &middot; {cls.studentCount} students
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className={`text-sm font-bold ${progressTextColor(cls.avgProgress)}`}>
                            {vary(cls.avgProgress, dateRange)}% <span className="text-xs font-normal text-muted-foreground">(G{percentageToGCSEGrade(vary(cls.avgProgress, dateRange))})</span>
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-foreground/80 transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Weakness Analysis */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    School-Wide Weakness Analysis
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/70">
                    Topics where students struggle most
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topWeaknesses.map(([name, count], i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-foreground/80">{name}</span>
                          <span className="text-xs text-muted-foreground/70">{count} students</span>
                        </div>
                        <HBar
                          value={count}
                          max={maxWeaknessCount}
                          color={count / maxWeaknessCount > 0.7 ? "bg-red-500" : count / maxWeaknessCount > 0.4 ? "bg-amber-500" : "bg-emerald-500"}
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download report CTA */}
            <Card className="bg-gradient-to-r from-emerald-500/5 via-[#111] to-blue-500/5 border-border">
              <CardContent className="py-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-foreground">{DEMO_SCHOOL.name} Performance Summary</p>
                    <p className="text-sm text-muted-foreground/70 mt-0.5">
                      Spring Term 2026 &middot; Demo data
                    </p>
                  </div>
                  <Button
                    onClick={handleDownloadReport}
                    className="bg-emerald-600 hover:bg-emerald-500 text-foreground"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* ════════════════════════════════════════════════════
              TAB 2: YEAR GROUPS
              ════════════════════════════════════════════════════ */}
          <TabsContent value="year-groups">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
              {yearGroupAtRisk.map((yg: any) => {
                const progress = vary(yg.avgProgress, dateRange)
                return (
                  <Card
                    key={yg.year}
                    className={`bg-card border-border hover:border-border/80 transition-all cursor-pointer ${
                      yearFilter === yg.year ? "ring-1 ring-blue-500/40 border-blue-500/30" : ""
                    }`}
                    onClick={() => setYearFilter(yearFilter === yg.year ? null : yg.year)}
                  >
                    <CardContent className="pt-5 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-foreground">{yg.label}</h3>
                          <p className="text-xs text-muted-foreground/70">{yg.studentCount} students &middot; {yg.classCount} classes</p>
                        </div>
                        <RingChart value={progress} size={64} strokeWidth={6} color={progressTextColor(progress).replace("text-", "text-")} />
                      </div>

                      {/* Comparison bars */}
                      <div className="space-y-2.5">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Avg Progress</span>
                            <span className={`font-semibold ${progressTextColor(progress)}`}>{progress}%</span>
                          </div>
                          <HBar value={progress} max={100} color={progressColor(progress)} />
                        </div>
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Completion Rate</span>
                            <span className={`font-semibold ${progressTextColor(yg.completionRate)}`}>{yg.completionRate}%</span>
                          </div>
                          <HBar value={yg.completionRate} max={100} color={progressColor(yg.completionRate)} />
                        </div>
                      </div>

                      {/* Footer stats */}
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                        <div className="flex items-center gap-1">
                          {yg.atRiskCount > 0 ? (
                            <Badge variant="destructive" className="text-red-300 bg-red-500/15 text-xs">
                              {yg.atRiskCount} at risk
                            </Badge>
                          ) : (
                            <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/20 text-xs">
                              None at risk
                            </Badge>
                          )}
                        </div>
                        <TrendBadge value={Math.round(progress - 65)} />
                      </div>
                      <Link
                        href="/demo/school/reports"
                        className="mt-3 flex items-center justify-center gap-1.5 rounded-md border border-border/50 px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        View Full Report
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {yearFilter && (
              <div className="mb-4 flex items-center gap-2">
                <Badge className="bg-blue-500/15 text-blue-400 border-blue-500/20">
                  Filtering: Year {yearFilter}
                </Badge>
                <button
                  onClick={() => setYearFilter(null)}
                  className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2"
                >
                  Clear filter
                </button>
              </div>
            )}
          </TabsContent>

          {/* ════════════════════════════════════════════════════
              TAB 3: TEACHERS
              ════════════════════════════════════════════════════ */}
          <TabsContent value="teachers">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {teacherStats.map((t, i) => {
                const progress = vary(t.avgProgress, dateRange)
                return (
                  <Card key={t.id} className="bg-card border-border hover:border-border/80 transition-colors">
                    <CardContent className="pt-5 pb-4">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center shrink-0">
                          <span className="text-lg font-bold text-cyan-400">
                            {t.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-semibold text-foreground truncate">{t.name}</p>
                              <p className="text-xs text-muted-foreground/70">{t.department} &middot; {t.classCount} class{t.classCount !== 1 ? "es" : ""}</p>
                            </div>
                            {i === 0 && (
                              <Badge className="bg-amber-500/15 text-amber-400 border-amber-500/20 text-[10px] shrink-0">
                                Top
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Visual indicators */}
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="text-center p-2 rounded-lg bg-muted/30">
                          <p className="text-lg font-bold text-foreground">{t.studentCount}</p>
                          <p className="text-[10px] text-muted-foreground/70">Students</p>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-muted/30">
                          <p className={`text-lg font-bold ${progressTextColor(progress)}`}>{progress}%</p>
                          <p className="text-[10px] text-muted-foreground/70">Avg Progress</p>
                        </div>
                        <div className="text-center p-2 rounded-lg bg-muted/30">
                          <p className={`text-lg font-bold ${progressTextColor(t.completionRate)}`}>{t.completionRate}%</p>
                          <p className="text-[10px] text-muted-foreground/70">Completion</p>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Student Progress</span>
                          <span className={`font-semibold ${progressTextColor(progress)}`}>{progress}%</span>
                        </div>
                        <HBar value={progress} max={100} color={progressColor(progress)} />
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          {/* ════════════════════════════════════════════════════
              TAB 4: STUDENTS
              ════════════════════════════════════════════════════ */}
          <TabsContent value="students">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/70" />
                <input
                  type="text"
                  placeholder="Search students..."
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-sm rounded-lg bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-purple-500/50"
                />
              </div>
              <div className="flex items-center gap-1 rounded-lg bg-muted/50 border border-border p-1 overflow-x-auto max-w-full">
                <button
                  onClick={() => setYearFilter(null)}
                  className={`px-3 py-1.5 text-xs rounded-md transition-all shrink-0 ${
                    yearFilter === null ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All Years
                </button>
                {[7, 8, 9, 10, 11, 12, 13].map((y) => (
                  <button
                    key={y}
                    onClick={() => setYearFilter(yearFilter === y ? null : y)}
                    className={`px-2.5 py-1.5 text-xs rounded-md transition-all shrink-0 ${
                      yearFilter === y ? "bg-muted text-foreground font-medium" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Y{y}
                  </button>
                ))}
              </div>
              <Badge className="bg-muted/50 text-muted-foreground border-border">
                {filteredStudents.length} student{filteredStudents.length !== 1 ? "s" : ""}
              </Badge>
            </div>

            {/* Student grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {filteredStudents.slice(0, 30).map((student) => (
                <Link
                  key={student.id}
                  href={`/demo/school/students/${student.id}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border/50 hover:bg-muted/40 hover:border-border transition-all group"
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                      student.atRisk
                        ? "bg-red-500/10"
                        : student.overallProgress >= 75
                        ? "bg-emerald-500/10"
                        : "bg-amber-500/10"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        student.atRisk
                          ? "text-red-400"
                          : student.overallProgress >= 75
                          ? "text-emerald-400"
                          : "text-amber-400"
                      }`}
                    >
                      {student.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground text-sm truncate group-hover:text-purple-300 transition-colors">
                      {student.name}
                    </p>
                    <p className="text-xs text-muted-foreground/70 truncate">
                      {student.yearGroup} &middot; {student.className}
                    </p>
                  </div>
                  <div className="text-right shrink-0 space-y-0.5 max-w-[180px]">
                    <div className="flex items-center gap-1.5 justify-end flex-wrap">
                      <span className="text-[10px] text-muted-foreground/70 uppercase">WAG</span>
                      <span className={`text-sm font-bold ${gcseGradeColor(student.workingAtGrade)}`}>{student.workingAtGrade}</span>
                      <span className="text-[10px] text-muted-foreground/70 uppercase">Pred</span>
                      <span className={`text-sm font-bold ${predictedGradeColor(student.predictedGrade, student.workingAtGrade)}`}>{student.predictedGrade}</span>
                      <span className="text-[10px] text-muted-foreground/70 uppercase">Tgt</span>
                      <span className="text-sm font-bold text-violet-400">{student.targetGrade}</span>
                    </div>
                    {ragBadge(student.overallProgress)}
                  </div>
                </Link>
              ))}
            </div>

            {filteredStudents.length > 30 && (
              <p className="text-center text-sm text-muted-foreground/70 mt-4">
                Showing 30 of {filteredStudents.length} students. Use search or filters to narrow results.
              </p>
            )}

            {/* At-risk highlight */}
            {atRiskStudents.length > 0 && (
              <Card className="bg-card border-red-500/10 mt-8">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    At-Risk Students ({atRiskStudents.length})
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/70">
                    Students requiring immediate attention
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {atRiskStudents.map((student) => (
                      <Link
                        key={student.id}
                        href={`/demo/school/students/${student.id}`}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 hover:border-red-500/20 transition-all group"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className="w-9 h-9 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                            <span className="text-sm font-semibold text-red-400">
                              {student.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-medium text-foreground group-hover:text-red-300 transition-colors truncate">
                              {student.name}
                            </p>
                            <p className="text-xs text-muted-foreground/70 truncate">
                              {student.yearGroup} &middot; Last active: {student.lastActive}
                            </p>
                          </div>
                        </div>
                        <div className="hidden sm:block flex-1 px-4 min-w-0">
                          <p className="text-xs text-red-400/80 truncate">{student.riskReason}</p>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="hidden md:flex items-center gap-1.5 flex-wrap">
                            <Badge variant="destructive" className="text-red-300 bg-red-500/15">
                              WAG {student.workingAtGrade}
                            </Badge>
                            <Badge className={`${predictedGradeColor(student.predictedGrade, student.workingAtGrade) === 'text-emerald-400' ? 'bg-emerald-500/15 text-emerald-300' : predictedGradeColor(student.predictedGrade, student.workingAtGrade) === 'text-red-400' ? 'bg-red-500/15 text-red-300' : 'bg-amber-500/15 text-amber-300'} border-0`}>
                              Pred {student.predictedGrade}
                            </Badge>
                            <Badge className="bg-violet-500/15 text-violet-300 border-0">
                              Tgt {student.targetGrade}
                            </Badge>
                          </div>
                          <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-foreground/80" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* ════════════════════════════════════════════════════
              TAB 5: ASSESSMENTS
              ════════════════════════════════════════════════════ */}
          <TabsContent value="assessments">
            {/* Score trends */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {assessmentCategories.map((cat, ci) => {
                const latest = cat.avgs[cat.avgs.length - 1]
                const change = latest - cat.avgs[0]
                const colorMap: Record<string, { ring: string; bar: string; text: string }> = {
                  amber: { ring: "text-amber-400", bar: "bg-amber-500", text: "text-amber-400" },
                  cyan: { ring: "text-cyan-400", bar: "bg-cyan-500", text: "text-cyan-400" },
                  purple: { ring: "text-purple-400", bar: "bg-purple-500", text: "text-purple-400" },
                }
                const c = colorMap[cat.color]
                return (
                  <Card key={ci} className="bg-card border-border">
                    <CardContent className="pt-5 pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">{cat.label}</p>
                          <p className={`text-2xl font-bold ${c.text}`}>{latest}%</p>
                          <TrendBadge value={change} />
                        </div>
                        <RingChart value={latest} size={64} strokeWidth={6} color={c.ring} />
                      </div>
                      <div className="flex items-end gap-3 h-16">
                        {cat.avgs.map((val, mi) => (
                          <div key={mi} className="flex-1 flex flex-col items-center gap-1">
                            <span className="text-[10px] text-muted-foreground">{val}%</span>
                            <div className="w-full bg-muted/50 rounded-t-sm overflow-hidden" style={{ height: "40px" }}>
                              <div
                                className={`w-full ${c.bar}/70 rounded-t-sm`}
                                style={{
                                  height: `${(val / 100) * 100}%`,
                                  marginTop: `${100 - (val / 100) * 100}%`,
                                }}
                              />
                            </div>
                            <span className="text-[10px] text-muted-foreground/70">{months[mi]}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Grade Distribution */}
            <Card className="bg-card border-border mb-8">
              <CardHeader>
                <CardTitle className="text-foreground">Grade Distribution (Latest Mock Exams)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {(() => {
                    const colors = ["bg-yellow-400", "bg-emerald-500", "bg-amber-500", "bg-red-500"]
                    const textColors = ["text-yellow-400", "text-emerald-400", "text-amber-400", "text-red-400"]
                    const bgColors = ["bg-yellow-400/10", "bg-emerald-500/10", "bg-amber-500/10", "bg-red-500/10"]
                    return Object.entries(gradeBuckets).map(([label, count], i) => (
                      <div key={label} className={`text-center p-4 rounded-xl ${bgColors[i]} border border-border/50`}>
                        <p className={`text-3xl font-bold ${textColors[i]}`}>{count}</p>
                        <p className="text-xs text-muted-foreground mt-1">Grade {label}</p>
                        <div className="mt-3">
                          <HBar value={count} max={maxGrade} color={colors[i]} />
                        </div>
                      </div>
                    ))
                  })()}
                </div>
              </CardContent>
            </Card>

            {/* Resource usage: lessons + mocks side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    Top 5 Lessons Accessed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {TOP_LESSONS.map((lesson) => (
                      <div key={lesson.title}>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-foreground/80 truncate pr-4">{lesson.title}</p>
                          <span className="text-xs text-muted-foreground/70 shrink-0">
                            {vary(lesson.count, dateRange)} views
                          </span>
                        </div>
                        <HBar
                          value={vary(lesson.count, dateRange)}
                          max={vary(maxLessonCount, dateRange)}
                          color="bg-blue-500"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <ClipboardList className="w-5 h-5 text-purple-400" />
                    Top 5 Mock Exams Taken
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {TOP_MOCK_EXAMS.map((exam) => (
                      <div key={exam.title}>
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-foreground/80 truncate pr-4">{exam.title}</p>
                          <span className="text-xs text-muted-foreground/70 shrink-0">
                            {vary(exam.count, dateRange)} taken
                          </span>
                        </div>
                        <HBar
                          value={vary(exam.count, dateRange)}
                          max={vary(maxMockCount, dateRange)}
                          color="bg-purple-500"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Assignment Overview by Class */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  Assignment Completion by Class
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border text-muted-foreground">
                        <th className="text-left py-3 px-2 font-medium">Class</th>
                        <th className="text-left py-3 px-2 font-medium">Teacher</th>
                        <th className="text-left py-3 px-2 font-medium w-48">Completion Rate</th>
                        <th className="text-center py-3 px-2 font-medium">Overdue</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classesForAssignment.map((cls) => {
                        const completion =
                          cls.assignmentsSet > 0
                            ? Math.round((cls.assignmentsCompleted / cls.assignmentsSet) * 100)
                            : 0
                        const overdue = cls.assignmentsSet - cls.assignmentsCompleted
                        return (
                          <tr key={cls.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                            <td className="py-3 px-2 font-medium text-foreground">{cls.name}</td>
                            <td className="py-3 px-2 text-muted-foreground">{cls.teacher}</td>
                            <td className="py-3 px-2">
                              <div className="flex items-center gap-3">
                                <div className="flex-1">
                                  <HBar value={completion} max={100} color={progressColor(completion)} />
                                </div>
                                <span className={`text-xs font-medium w-10 text-right ${progressTextColor(completion)}`}>
                                  {completion}%
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-2 text-center">
                              {overdue > 0 ? (
                                <Badge variant="destructive" className="text-red-300 bg-red-500/15">
                                  {overdue}
                                </Badge>
                              ) : (
                                <span className="text-emerald-400 text-xs">All done</span>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

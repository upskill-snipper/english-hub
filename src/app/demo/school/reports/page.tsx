"use client"

import { useState } from "react"
import {
  FileText,
  Download,
  Printer,
  TrendingUp,
  TrendingDown,
  Users,
  GraduationCap,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Target,
  Award,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Star,
  CircleDot,
} from "lucide-react"
import { toast } from "sonner"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import DemoBanner from "@/components/demo/DemoBanner"
import {
  DEMO_SCHOOL,
  DEMO_TEACHERS,
  DEMO_STUDENTS,
  DEMO_CLASSES,
  DEMO_YEAR_GROUPS,
  DEMO_STATS,
} from "@/data/demo-data"

// ── Derived data ──────────────────────────────────────────────────────────────

const totalStudents = DEMO_STATS.totalStudents
const activeRate = Math.round((DEMO_STATS.activeThisWeek / totalStudents) * 100)
const avgScore = Math.round(
  DEMO_CLASSES.reduce((sum, c) => sum + c.avgProgress, 0) / DEMO_CLASSES.length
)
const completionRate = Math.round(
  (DEMO_CLASSES.reduce((sum, c) => sum + c.assignmentsCompleted, 0) /
    DEMO_CLASSES.reduce((sum, c) => sum + c.assignmentsSet, 0)) *
    100
)
const atRiskCount = DEMO_STUDENTS.filter((s) => s.atRisk).length

const weeklyActivity = [
  { week: "W1", value: 62 },
  { week: "W2", value: 68 },
  { week: "W3", value: 71 },
  { week: "W4", value: 65 },
  { week: "W5", value: 74 },
  { week: "W6", value: 79 },
  { week: "W7", value: 83 },
  { week: "W8", value: 89 },
]

const strengths = [
  "Creative Writing -- students consistently outperform across all year groups",
  "Poetry Analysis -- Year 11 and Year 13 showing strong exam-ready skills",
  "Reading Comprehension -- Year 10 cohort achieving above national average",
]

const improvements = [
  "Non-fiction Writing -- Year 9 significantly below target across all classes",
  "Shakespeare modules -- engagement dropping in Year 10, needs intervention",
  "Grammar and Punctuation -- Years 7-8 foundation skills need reinforcement",
]

const recommendations = [
  "Deploy targeted intervention programme for the " + atRiskCount + " at-risk students identified -- schedule 1:1 check-ins within the next week",
  "Introduce peer-tutoring for Year 9 non-fiction writing using Year 11 mentors to boost engagement and outcomes",
  "Schedule a department CPD session on Shakespeare engagement strategies -- gamification and multimedia approaches recommended",
  "Review homework completion patterns for Year 10B and 10D -- consider restructuring assignment deadlines",
  "Celebrate Year 11 cohort progress publicly -- recognition drives continued engagement",
]

// Helpers
function getStudentModules(studentId: string) {
  const seed = studentId.charCodeAt(studentId.length - 1)
  return [
    { name: "Reading Comprehension", score: 40 + ((seed * 7) % 55), status: "completed" as const },
    { name: "Creative Writing", score: 35 + ((seed * 11) % 60), status: "completed" as const },
    { name: "Poetry Analysis", score: 30 + ((seed * 13) % 65), status: "in-progress" as const },
    { name: "Shakespeare Study", score: 25 + ((seed * 17) % 70), status: "in-progress" as const },
    { name: "Non-fiction Writing", score: 20 + ((seed * 19) % 60), status: "not-started" as const },
    { name: "Grammar & Punctuation", score: 45 + ((seed * 23) % 50), status: "completed" as const },
  ]
}

function getPredictedGrade(progress: number): string {
  if (progress >= 90) return "9"
  if (progress >= 80) return "8"
  if (progress >= 70) return "7"
  if (progress >= 60) return "6"
  if (progress >= 50) return "5"
  if (progress >= 40) return "4"
  if (progress >= 30) return "3"
  return "2"
}

function getRagStatus(progress: number): "red" | "amber" | "green" {
  if (progress >= 70) return "green"
  if (progress >= 50) return "amber"
  return "red"
}

function yearGroupNum(yg: string): number {
  const match = yg.match(/\d+/)
  return match ? parseInt(match[0], 10) : 0
}

const ragColors = {
  red: "bg-red-500/20 text-red-400 border-red-500/30",
  amber: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  green: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
}

// Teacher ranking data
function getTeacherRanking() {
  return DEMO_TEACHERS.map((t) => {
    const tClasses = DEMO_CLASSES.filter((c) => c.teacherId === t.id)
    const tStudentCount = tClasses.reduce((sum, c) => sum + c.studentCount, 0)
    const tAvgProgress = tClasses.length > 0
      ? Math.round(tClasses.reduce((sum, c) => sum + c.avgProgress, 0) / tClasses.length)
      : 0
    const tCompletionRate = tClasses.length > 0
      ? Math.round(
          (tClasses.reduce((sum, c) => sum + c.assignmentsCompleted, 0) /
            tClasses.reduce((sum, c) => sum + c.assignmentsSet, 0)) *
            100
        )
      : 0
    return {
      ...t,
      avgProgress: tAvgProgress,
      completionRate: tCompletionRate,
      totalStudents: tStudentCount,
      classNames: tClasses.map((c) => c.name),
    }
  }).sort((a, b) => b.avgProgress - a.avgProgress)
}

// ── Report tab types ──────────────────────────────────────────────────────────

type ReportTab = "overview" | "year-group" | "class" | "student" | "teacher"

const reportTabs: { id: ReportTab; label: string; icon: React.ReactNode }[] = [
  { id: "overview", label: "School Overview", icon: <BarChart3 className="h-4 w-4" /> },
  { id: "year-group", label: "Year Group", icon: <Users className="h-4 w-4" /> },
  { id: "class", label: "Class Reports", icon: <BookOpen className="h-4 w-4" /> },
  { id: "student", label: "Student Reports", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "teacher", label: "Teacher Performance", icon: <Award className="h-4 w-4" /> },
]

// ── Print stylesheet ─────────────────────────────────────────────────────────

const printStyles = `
@media print {
  @page {
    size: A4;
    margin: 15mm 12mm;
  }
  body {
    background: white !important;
    color: black !important;
    font-size: 11pt !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  nav, header, footer,
  [data-print-hide],
  .no-print {
    display: none !important;
  }
  [class*="bg-[#0a0a0a]"],
  [class*="bg-[#111]"],
  [class*="bg-white/5"] {
    background: white !important;
  }
  [class*="text-white"],
  [class*="text-neutral-300"],
  [class*="text-neutral-400"],
  [class*="text-neutral-500"],
  [class*="text-blue-"],
  [class*="text-violet-"],
  [class*="text-cyan-"],
  [class*="text-emerald-"],
  [class*="text-amber-"],
  [class*="text-red-"] {
    color: black !important;
  }
  [class*="border-white/"] {
    border-color: #ccc !important;
  }
  .bg-emerald-500, .bg-amber-500, .bg-red-500,
  .bg-blue-500, .bg-violet-500 {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  [class*="bg-red-500/20"],
  [class*="bg-amber-500/20"],
  [class*="bg-emerald-500/20"] {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .print-avoid-break {
    page-break-inside: avoid;
  }
  [class*="from-blue-600/20"] {
    background: #f0f4ff !important;
  }
  table { font-size: 10pt; }
}
`

// ── Component ─────────────────────────────────────────────────────────────────

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState<ReportTab>("overview")
  const [selectedYear, setSelectedYear] = useState(DEMO_YEAR_GROUPS[0].year)
  const [selectedClassId, setSelectedClassId] = useState(DEMO_CLASSES[0].id)
  const [selectedStudentId, setSelectedStudentId] = useState(DEMO_STUDENTS[0].id)
  const [selectedTeacherId, setSelectedTeacherId] = useState(DEMO_TEACHERS[0].id)

  const selectedYearGroup = DEMO_YEAR_GROUPS.find((y: any) => y.year === selectedYear)!
  const yearClasses = DEMO_CLASSES.filter((c) => yearGroupNum(c.yearGroup) === selectedYear)
  const selectedClass = DEMO_CLASSES.find((c) => c.id === selectedClassId)!
  const classStudents = DEMO_STUDENTS.filter((s) => s.classId === selectedClassId)
  const selectedStudent = DEMO_STUDENTS.find((s) => s.id === selectedStudentId)!
  const selectedTeacher = DEMO_TEACHERS.find((t) => t.id === selectedTeacherId)!
  const teacherClasses = DEMO_CLASSES.filter((c) => c.teacherId === selectedTeacherId)

  const schoolAvg = avgScore
  const classAvg = selectedClass.avgProgress

  const teacherRanking = getTeacherRanking()

  const yearStudents = DEMO_STUDENTS.filter((s) => yearGroupNum(s.yearGroup) === selectedYear)

  // Predicted grade distribution for year group
  const gradeDistribution = (() => {
    const dist: Record<string, number> = { "9": 0, "8": 0, "7": 0, "6": 0, "5": 0, "4": 0, "3": 0, "2": 0 }
    yearStudents.forEach((s) => {
      const g = getPredictedGrade(s.overallProgress)
      dist[g] = (dist[g] || 0) + 1
    })
    return Object.entries(dist).filter(([, v]) => v > 0)
  })()

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />

      <div data-print-hide>
        <DemoBanner message="You are viewing demo reports with sample data. Register to generate real reports for your school." />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-2" data-print-hide>
            <FileText className="h-4 w-4" />
            <span>{DEMO_SCHOOL.name}</span>
            <ChevronRight className="h-3 w-3" />
            <span>Reports</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">School Reports</h1>
          <p className="text-neutral-400 mt-1">
            Comprehensive performance analytics and personalised reporting for {DEMO_SCHOOL.name}.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10 pb-4" data-print-hide>
          {reportTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-white/10 text-white border border-white/20"
                  : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── SCHOOL OVERVIEW REPORT ─────────────────────────────────────── */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div className="text-center py-6 border-b border-white/10">
              <h2 className="text-2xl font-bold">{DEMO_SCHOOL.name} -- Performance Report 2025-2026</h2>
              <p className="text-neutral-400 mt-1">Generated 4 April 2026 | Academic Year to Date</p>
            </div>

            {/* Executive Summary */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Executive Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-300 leading-relaxed">
                  {DEMO_SCHOOL.name} is performing above regional benchmarks with an average student progress
                  score of {avgScore}%. The Year 11 cohort leads all year groups at 79% average progress,
                  while Year 7 requires the most attention at 58%. There are currently {atRiskCount} students
                  flagged as at-risk requiring immediate intervention. Overall engagement has trended upward
                  over the past 8 weeks, with {activeRate}% of students active this week. The English
                  Literature department outperforms English Language across all metrics. Creative Writing
                  remains the strongest module school-wide, while Non-fiction Writing in Year 9 is the
                  most significant area of concern.
                </p>
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: "Total Students", value: totalStudents.toString(), icon: <Users className="h-5 w-5" />, color: "text-blue-400" },
                { label: "Active Rate", value: `${activeRate}%`, icon: <TrendingUp className="h-5 w-5" />, color: "text-emerald-400" },
                { label: "Avg Score", value: `${avgScore}%`, icon: <Target className="h-5 w-5" />, color: "text-violet-400" },
                { label: "Completion Rate", value: `${completionRate}%`, icon: <CheckCircle2 className="h-5 w-5" />, color: "text-cyan-400" },
                { label: "At-Risk Students", value: atRiskCount.toString(), icon: <AlertTriangle className="h-5 w-5" />, color: "text-red-400" },
              ].map((metric) => (
                <Card key={metric.label} className="bg-[#111] border-white/10 print-avoid-break">
                  <CardContent className="pt-5">
                    <div className={`mb-2 ${metric.color}`}>{metric.icon}</div>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className="text-xs text-neutral-500 mt-1">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Year-on-Year Trends */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Year-on-Year Comparison</CardTitle>
                <CardDescription className="text-neutral-400">Key metrics compared to previous academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-neutral-400">
                        <th className="text-left py-3 pr-4">Metric</th>
                        <th className="text-left py-3 pr-4">2024-25</th>
                        <th className="text-left py-3 pr-4">2025-26</th>
                        <th className="text-left py-3">Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Avg Student Progress", prev: 64, curr: avgScore },
                        { metric: "Assignment Completion", prev: 59, curr: completionRate },
                        { metric: "Active Engagement Rate", prev: 71, curr: activeRate },
                        { metric: "Grade 5+ Predicted (%)", prev: 58, curr: 68 },
                        { metric: "At-Risk Student Count", prev: 8, curr: atRiskCount },
                      ].map((row) => {
                        const diff = row.curr - row.prev
                        const positive = row.metric.includes("At-Risk") ? diff < 0 : diff > 0
                        return (
                          <tr key={row.metric} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 pr-4 text-white font-medium">{row.metric}</td>
                            <td className="py-3 pr-4 text-neutral-400">{row.prev}{row.metric.includes("Count") ? "" : "%"}</td>
                            <td className="py-3 pr-4 text-white font-semibold">{row.curr}{row.metric.includes("Count") ? "" : "%"}</td>
                            <td className="py-3">
                              <span className={`inline-flex items-center gap-1 text-xs font-medium ${positive ? "text-emerald-400" : "text-red-400"}`}>
                                {diff > 0 ? <ArrowUpRight className="h-3 w-3" /> : diff < 0 ? <ArrowDownRight className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                                {diff > 0 ? "+" : ""}{diff}{row.metric.includes("Count") ? "" : "%"}
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Year Group Comparison */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Year Group Comparison</CardTitle>
                <CardDescription className="text-neutral-400">Average progress by year group with student counts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-neutral-400">
                        <th className="text-left py-3 pr-4">Year Group</th>
                        <th className="text-left py-3 pr-4">Students</th>
                        <th className="text-left py-3 pr-4">Classes</th>
                        <th className="text-left py-3 pr-4">Avg Progress</th>
                        <th className="text-left py-3 pr-4 w-[200px]">Progress Bar</th>
                        <th className="text-left py-3">vs School Avg</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DEMO_YEAR_GROUPS.map((yg: any) => {
                        const diff = yg.avgProgress - avgScore
                        return (
                          <tr key={yg.year} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 pr-4 font-medium text-white">{yg.label}</td>
                            <td className="py-3 pr-4 text-neutral-300">{yg.studentCount}</td>
                            <td className="py-3 pr-4 text-neutral-300">{yg.classCount}</td>
                            <td className="py-3 pr-4 text-white font-semibold">{yg.avgProgress}%</td>
                            <td className="py-3 pr-4">
                              <div className="w-full bg-white/10 rounded-full h-2.5">
                                <div className={`h-2.5 rounded-full transition-all ${yg.avgProgress >= 75 ? "bg-emerald-500" : yg.avgProgress >= 60 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${yg.avgProgress}%` }} />
                              </div>
                            </td>
                            <td className="py-3">
                              <span className={`inline-flex items-center gap-1 text-xs font-medium ${diff > 0 ? "text-emerald-400" : diff < 0 ? "text-red-400" : "text-neutral-400"}`}>
                                {diff > 0 ? <ArrowUpRight className="h-3 w-3" /> : diff < 0 ? <ArrowDownRight className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                                {diff > 0 ? "+" : ""}{diff}%
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Department Performance */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Department Performance</CardTitle>
                <CardDescription className="text-neutral-400">English Literature vs English Language</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-neutral-400">
                        <th className="text-left py-3 pr-4">Department</th>
                        <th className="text-left py-3 pr-4">Teachers</th>
                        <th className="text-left py-3 pr-4">Students</th>
                        <th className="text-left py-3 pr-4">Avg Progress</th>
                        <th className="text-left py-3">Completion</th>
                      </tr>
                    </thead>
                    <tbody>
                      {["English Literature", "English Language"].map((dept) => {
                        const deptTeachers = DEMO_TEACHERS.filter((t) => t.department === dept)
                        const deptClasses = DEMO_CLASSES.filter((c) => deptTeachers.some((t) => t.id === c.teacherId))
                        const dAvg = deptClasses.length > 0 ? Math.round(deptClasses.reduce((sum, c) => sum + c.avgProgress, 0) / deptClasses.length) : 0
                        const dComp = deptClasses.length > 0 ? Math.round((deptClasses.reduce((sum, c) => sum + c.assignmentsCompleted, 0) / deptClasses.reduce((sum, c) => sum + c.assignmentsSet, 0)) * 100) : 0
                        return (
                          <tr key={dept} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 pr-4 font-medium text-white">{dept}</td>
                            <td className="py-3 pr-4 text-neutral-300">{deptTeachers.length}</td>
                            <td className="py-3 pr-4 text-neutral-300">{deptClasses.reduce((sum, c) => sum + c.studentCount, 0)}</td>
                            <td className="py-3 pr-4 text-white font-semibold">{dAvg}%</td>
                            <td className="py-3 text-neutral-300">{dComp}%</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* 8-week Activity Trend */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">8-Week Activity Trend</CardTitle>
                <CardDescription className="text-neutral-400">Percentage of students active each week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-3 h-48">
                  {weeklyActivity.map((w) => (
                    <div key={w.week} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs text-neutral-400 font-medium">{w.value}%</span>
                      <div className="w-full bg-white/5 rounded-t-md relative" style={{ height: "160px" }}>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-600 to-emerald-400/80 rounded-t-md transition-all" style={{ height: `${(w.value / 100) * 160}px` }} />
                      </div>
                      <span className="text-xs text-neutral-500">{w.week}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Strengths & Improvements */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#111] border-white/10 print-avoid-break">
                <CardHeader>
                  <CardTitle className="text-emerald-400 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Department Strengths
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#111] border-white/10 print-avoid-break">
                <CardHeader>
                  <CardTitle className="text-amber-400 flex items-center gap-2">
                    <TrendingDown className="h-4 w-4" />
                    Areas for Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {improvements.map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                        <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Recommendations */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Recommendations</CardTitle>
                <CardDescription className="text-neutral-400">Actionable next steps based on current data</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {recommendations.map((r, i) => (
                    <li key={i} className="flex gap-4 text-sm text-neutral-300">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold">{i + 1}</span>
                      {r}
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Print / Download */}
            <div className="flex justify-center gap-4 pt-4" data-print-hide>
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold gap-2" onClick={() => window.print()}>
                <Printer className="h-4 w-4" />
                Print Overview Report
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-semibold gap-2" onClick={() => toast.info("Register your school for full PDF export access.")}>
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        )}

        {/* ── YEAR GROUP REPORT ──────────────────────────────────────────── */}
        {activeTab === "year-group" && (
          <div className="space-y-6">
            <div className="flex items-center gap-4" data-print-hide>
              <label className="text-sm text-neutral-400">Select Year Group:</label>
              <select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))} className="bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30">
                {DEMO_YEAR_GROUPS.map((yg: any) => (
                  <option key={yg.year} value={yg.year}>{yg.label}</option>
                ))}
              </select>
            </div>

            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white text-xl">{selectedYearGroup.label} -- Performance Report</CardTitle>
                <CardDescription className="text-neutral-400">{selectedYearGroup.studentCount} students across {selectedYearGroup.classCount} classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{selectedYearGroup.studentCount}</p><p className="text-xs text-neutral-500">Students</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{selectedYearGroup.avgProgress}%</p><p className="text-xs text-neutral-500">Avg Progress</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{selectedYearGroup.classCount}</p><p className="text-xs text-neutral-500">Classes</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{selectedYearGroup.avgProgress >= avgScore ? "Above" : "Below"}</p><p className="text-xs text-neutral-500">vs School Avg ({avgScore}%)</p></div>
                </div>
              </CardContent>
            </Card>

            {/* Class breakdown */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader><CardTitle className="text-white">Class Breakdown</CardTitle></CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-neutral-400">
                        <th className="text-left py-3 pr-4">Class</th><th className="text-left py-3 pr-4">Teacher</th><th className="text-left py-3 pr-4">Students</th><th className="text-left py-3 pr-4">Avg Progress</th><th className="text-left py-3 pr-4">Completion</th><th className="text-left py-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearClasses.map((cls) => {
                        const rag = getRagStatus(cls.avgProgress)
                        const comp = Math.round((cls.assignmentsCompleted / cls.assignmentsSet) * 100)
                        return (
                          <tr key={cls.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 pr-4 font-medium text-white">{cls.name}</td>
                            <td className="py-3 pr-4 text-neutral-300">{cls.teacher}</td>
                            <td className="py-3 pr-4 text-neutral-300">{cls.studentCount}</td>
                            <td className="py-3 pr-4 text-white font-semibold">{cls.avgProgress}%</td>
                            <td className="py-3 pr-4 text-neutral-300">{comp}%</td>
                            <td className="py-3"><Badge className={ragColors[rag]}>{rag.toUpperCase()}</Badge></td>
                          </tr>
                        )
                      })}
                      {yearClasses.length === 0 && <tr><td colSpan={6} className="py-4 text-neutral-500 text-sm">No classes found for this year group in the demo data.</td></tr>}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Predicted Grade Distribution */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Predicted Grade Distribution</CardTitle>
                <CardDescription className="text-neutral-400">Based on current student progress for {selectedYearGroup.label}</CardDescription>
              </CardHeader>
              <CardContent>
                {gradeDistribution.length > 0 ? (
                  <div className="flex items-end gap-4 h-40">
                    {gradeDistribution.map(([grade, count]) => {
                      const maxCount = Math.max(...gradeDistribution.map(([, v]) => v))
                      const heightPct = maxCount > 0 ? (count / maxCount) * 100 : 0
                      const gradeNum = parseInt(grade, 10)
                      const barColor = gradeNum >= 7 ? "bg-emerald-500" : gradeNum >= 5 ? "bg-amber-500" : "bg-red-500"
                      return (
                        <div key={grade} className="flex-1 flex flex-col items-center gap-2">
                          <span className="text-xs text-neutral-400 font-medium">{count}</span>
                          <div className="w-full bg-white/5 rounded-t-md relative" style={{ height: "100px" }}>
                            <div className={`absolute bottom-0 left-0 right-0 ${barColor} rounded-t-md transition-all`} style={{ height: `${heightPct}%` }} />
                          </div>
                          <span className="text-sm text-white font-semibold">Grade {grade}</span>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-neutral-500 text-sm py-4">No individual student data available for this year group in the demo.</p>
                )}
              </CardContent>
            </Card>

            {/* At-risk students list */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2"><AlertTriangle className="h-4 w-4" />At-Risk Students</CardTitle>
                <CardDescription className="text-neutral-400">Students requiring immediate intervention in {selectedYearGroup.label}</CardDescription>
              </CardHeader>
              <CardContent>
                {(() => {
                  const atRisk = yearStudents.filter((s) => s.atRisk)
                  if (atRisk.length === 0) return <p className="text-neutral-500 text-sm py-2">{yearStudents.length > 0 ? "No at-risk students in this year group." : "No individual student data available for this year group in the demo."}</p>
                  return (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead><tr className="border-b border-white/10 text-neutral-400"><th className="text-left py-3 pr-4">Student</th><th className="text-left py-3 pr-4">Class</th><th className="text-left py-3 pr-4">Progress</th><th className="text-left py-3 pr-4">Last Active</th><th className="text-left py-3">Risk Reason</th></tr></thead>
                        <tbody>
                          {atRisk.map((s) => (
                            <tr key={s.id} className="border-b border-white/5">
                              <td className="py-3 pr-4 font-medium text-white">{s.name}</td>
                              <td className="py-3 pr-4 text-neutral-300">{s.className}</td>
                              <td className="py-3 pr-4"><Badge className="bg-red-500/20 text-red-400 border-red-500/30">{s.overallProgress}%</Badge></td>
                              <td className="py-3 pr-4 text-neutral-400">{s.lastActive}</td>
                              <td className="py-3 text-neutral-300 text-xs">{s.riskReason}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )
                })()}
              </CardContent>
            </Card>

            {/* Top / Bottom performers */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-[#111] border-white/10 print-avoid-break">
                <CardHeader><CardTitle className="text-emerald-400 flex items-center gap-2"><Star className="h-4 w-4" />Top Performers</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[...yearStudents].sort((a, b) => b.overallProgress - a.overallProgress).slice(0, 5).map((s) => (
                      <li key={s.id} className="flex items-center justify-between text-sm">
                        <div><span className="text-white font-medium">{s.name}</span><span className="text-neutral-500 ml-2">{s.className}</span></div>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">{s.overallProgress}%</Badge>
                      </li>
                    ))}
                    {yearStudents.length === 0 && <li className="text-sm text-neutral-500">No student data for this year group in the demo.</li>}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-[#111] border-white/10 print-avoid-break">
                <CardHeader><CardTitle className="text-red-400 flex items-center gap-2"><AlertTriangle className="h-4 w-4" />Needs Attention</CardTitle></CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[...yearStudents].sort((a, b) => a.overallProgress - b.overallProgress).slice(0, 5).map((s) => (
                      <li key={s.id} className="flex items-center justify-between text-sm">
                        <div><span className="text-white font-medium">{s.name}</span><span className="text-neutral-500 ml-2">{s.className}</span></div>
                        <Badge className={ragColors[getRagStatus(s.overallProgress)]}>{s.overallProgress}%</Badge>
                      </li>
                    ))}
                    {yearStudents.length === 0 && <li className="text-sm text-neutral-500">No student data for this year group in the demo.</li>}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Common weaknesses */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader><CardTitle className="text-white">Common Areas of Weakness</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {(selectedYear <= 9
                    ? ["Non-fiction writing skills -- particularly structuring arguments and using persuasive techniques", "Spelling and vocabulary range -- below expected level for key stage transition", "Extended response stamina -- students struggling with longer written tasks"]
                    : ["Analytical essay technique -- students need more practice with PEE/PEAL paragraphs", "Unseen poetry confidence -- timed response quality drops significantly", "Exam time management -- many students not completing final questions"]
                  ).map((w, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300"><CircleDot className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />{w}</li>
                  ))}
                </ul>
                <h4 className="text-sm font-semibold text-white mb-3">Suggested Interventions</h4>
                <ul className="space-y-3">
                  {(selectedYear <= 9
                    ? ["Weekly 20-minute focused writing drills using scaffolded templates", "Vocabulary enrichment programme using The English Hub's word-bank modules", "Cross-curricular reading initiative with History and Geography departments"]
                    : ["Fortnightly timed essay practice under exam conditions", "Peer marking sessions using GCSE mark schemes to build examiner awareness", "Dedicated unseen poetry workshop series in Spring term"]
                  ).map((v, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300"><Target className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />{v}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-4" data-print-hide>
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold gap-2" onClick={() => window.print()}>
                <Printer className="h-4 w-4" />Print Year Group Report
              </Button>
            </div>
          </div>
        )}

        {/* ── CLASS REPORT ───────────────────────────────────────────────── */}
        {activeTab === "class" && (
          <div className="space-y-6">
            <div className="flex items-center gap-4" data-print-hide>
              <label className="text-sm text-neutral-400">Select Class:</label>
              <select value={selectedClassId} onChange={(e) => setSelectedClassId(e.target.value)} className="bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30">
                {DEMO_CLASSES.map((cls) => (<option key={cls.id} value={cls.id}>{cls.name} ({cls.teacher})</option>))}
              </select>
            </div>

            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white text-xl">{selectedClass.name} -- Class Report</CardTitle>
                <CardDescription className="text-neutral-400">Teacher: {selectedClass.teacher} | {selectedClass.yearGroup} | {selectedClass.studentCount} students</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{classAvg}%</p><p className="text-xs text-neutral-500">Class Average</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{schoolAvg}%</p><p className="text-xs text-neutral-500">School Average</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className={`text-2xl font-bold ${classAvg >= schoolAvg ? "text-emerald-400" : "text-red-400"}`}>{classAvg >= schoolAvg ? "+" : ""}{classAvg - schoolAvg}%</p><p className="text-xs text-neutral-500">vs School Avg</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{Math.round((selectedClass.assignmentsCompleted / selectedClass.assignmentsSet) * 100)}%</p><p className="text-xs text-neutral-500">Completion ({selectedClass.assignmentsCompleted}/{selectedClass.assignmentsSet})</p></div>
                </div>
              </CardContent>
            </Card>

            {/* RAG summary boxes */}
            {classStudents.length > 0 && (
              <div className="grid grid-cols-3 gap-4">
                {(["green", "amber", "red"] as const).map((rag) => {
                  const count = classStudents.filter((s) => getRagStatus(s.overallProgress) === rag).length
                  const labels = { green: "On Track (70%+)", amber: "Needs Monitoring (50-69%)", red: "At Risk (<50%)" }
                  return (
                    <Card key={rag} className="bg-[#111] border-white/10 print-avoid-break">
                      <CardContent className="pt-5 text-center">
                        <Badge className={`${ragColors[rag]} text-lg px-3 py-1`}>{count}</Badge>
                        <p className="text-xs text-neutral-500 mt-2">{labels[rag]}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            )}

            {/* Student RAG table */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Student Progress -- RAG Status</CardTitle>
                <CardDescription className="text-neutral-400">Red: below 50% | Amber: 50-69% | Green: 70%+</CardDescription>
              </CardHeader>
              <CardContent>
                {classStudents.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead><tr className="border-b border-white/10 text-neutral-400"><th className="text-left py-3 pr-4">Student</th><th className="text-left py-3 pr-4">Progress</th><th className="text-left py-3 pr-4 w-[180px]">Progress Bar</th><th className="text-left py-3 pr-4">Last Active</th><th className="text-left py-3 pr-4">At-Risk</th><th className="text-left py-3">RAG</th></tr></thead>
                      <tbody>
                        {classStudents.map((s) => {
                          const rag = getRagStatus(s.overallProgress)
                          return (
                            <tr key={s.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                              <td className="py-3 pr-4 font-medium text-white">{s.name}</td>
                              <td className="py-3 pr-4 text-white font-semibold">{s.overallProgress}%</td>
                              <td className="py-3 pr-4"><div className="w-full bg-white/10 rounded-full h-2"><div className={`h-2 rounded-full ${rag === "green" ? "bg-emerald-500" : rag === "amber" ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${s.overallProgress}%` }} /></div></td>
                              <td className="py-3 pr-4 text-neutral-400">{s.lastActive}</td>
                              <td className="py-3 pr-4">{s.atRisk ? <Badge className="bg-red-500/20 text-red-400 border-red-500/30">Yes</Badge> : <span className="text-neutral-500">--</span>}</td>
                              <td className="py-3"><Badge className={ragColors[rag]}>{rag.toUpperCase()}</Badge></td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-neutral-500 text-sm py-4">No individual student data available for this class in the demo. In a live environment, all {selectedClass.studentCount} students would be listed here with full RAG breakdowns.</p>
                )}
              </CardContent>
            </Card>

            {/* Class vs School comparison */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader><CardTitle className="text-white">Class Average vs School Average</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-neutral-400">{selectedClass.name}</span><span className="text-white font-semibold">{classAvg}%</span></div>
                    <div className="w-full bg-white/10 rounded-full h-4"><div className="h-4 rounded-full bg-blue-500 transition-all" style={{ width: `${classAvg}%` }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1"><span className="text-neutral-400">School Average</span><span className="text-white font-semibold">{schoolAvg}%</span></div>
                    <div className="w-full bg-white/10 rounded-full h-4"><div className="h-4 rounded-full bg-violet-500 transition-all" style={{ width: `${schoolAvg}%` }} /></div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-4" data-print-hide>
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold gap-2" onClick={() => window.print()}>
                <Printer className="h-4 w-4" />Print Class Report
              </Button>
            </div>
          </div>
        )}

        {/* ── INDIVIDUAL STUDENT REPORT ──────────────────────────────────── */}
        {activeTab === "student" && (
          <div className="space-y-6">
            <div className="flex items-center gap-4" data-print-hide>
              <label className="text-sm text-neutral-400">Select Student:</label>
              <select value={selectedStudentId} onChange={(e) => setSelectedStudentId(e.target.value)} className="bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30">
                {DEMO_STUDENTS.map((s) => (<option key={s.id} value={s.id}>{s.name} -- {s.className}</option>))}
              </select>
            </div>

            <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden" id="student-report-card">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-purple-600/20 border-b border-white/10 p-6 sm:p-8">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">{DEMO_SCHOOL.name} -- Student Report Card</p>
                    <h2 className="text-2xl font-bold text-white">{selectedStudent.name}</h2>
                    <p className="text-neutral-300 mt-1">{selectedStudent.className} | {selectedStudent.yearGroup}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-neutral-400">Predicted Grade</p>
                    <p className="text-4xl font-bold text-white mt-1">{getPredictedGrade(selectedStudent.overallProgress)}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Overall progress */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Overall Progress</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-white/10 rounded-full h-4">
                      <div className={`h-4 rounded-full transition-all ${selectedStudent.overallProgress >= 70 ? "bg-emerald-500" : selectedStudent.overallProgress >= 50 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${selectedStudent.overallProgress}%` }} />
                    </div>
                    <span className="text-xl font-bold text-white shrink-0 w-14 text-right">{selectedStudent.overallProgress}%</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">
                    Last active: {selectedStudent.lastActive}
                    {selectedStudent.atRisk && <span className="text-red-400 ml-3">-- At Risk: {selectedStudent.riskReason}</span>}
                  </p>
                </div>

                {/* Assessment summary */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Assessment Summary</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-white">{selectedStudent.averageScore}%</p><p className="text-xs text-neutral-500">Avg Score</p></div>
                    <div className="bg-white/5 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-white">{selectedStudent.assignmentsCompleted}/{selectedStudent.assignmentsTotal}</p><p className="text-xs text-neutral-500">Assignments</p></div>
                    <div className="bg-white/5 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-white">{selectedStudent.modulesCompleted}</p><p className="text-xs text-neutral-500">Modules Done</p></div>
                    <div className="bg-white/5 rounded-lg p-4 text-center"><p className="text-2xl font-bold text-white">{selectedStudent.mockExams.length > 0 ? selectedStudent.mockExams[0].grade : "--"}</p><p className="text-xs text-neutral-500">Latest Mock Grade</p></div>
                  </div>
                </div>

                {/* Module breakdown */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Module Progress</h3>
                  <div className="space-y-3">
                    {getStudentModules(selectedStudent.id).map((mod) => {
                      const rag = getRagStatus(mod.score)
                      return (
                        <div key={mod.name} className="flex items-center gap-4">
                          <span className="text-sm text-neutral-300 w-48 shrink-0">{mod.name}</span>
                          <div className="flex-1 bg-white/10 rounded-full h-2.5"><div className={`h-2.5 rounded-full ${rag === "green" ? "bg-emerald-500" : rag === "amber" ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${mod.score}%` }} /></div>
                          <span className="text-sm text-white font-semibold w-12 text-right">{mod.score}%</span>
                          <Badge className={`w-24 justify-center ${mod.status === "completed" ? "bg-emerald-500/20 text-emerald-400" : mod.status === "in-progress" ? "bg-blue-500/20 text-blue-400" : "bg-neutral-500/20 text-neutral-400"}`}>
                            {mod.status === "completed" ? "Completed" : mod.status === "in-progress" ? "In Progress" : "Not Started"}
                          </Badge>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Strengths and Weaknesses */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">Strengths</h3>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {selectedStudent.strengths.map((s: string | { name: string; score: number }) => (<li key={typeof s === "string" ? s : s.name} className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />{typeof s === "string" ? s : `${s.name} (${s.score}%)`}</li>))}
                      {selectedStudent.strengths.length === 0 && <li className="text-neutral-500">No strengths identified yet</li>}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">Areas for Development</h3>
                    <ul className="space-y-2 text-sm text-neutral-300">
                      {selectedStudent.weaknesses.map((w: string | { name: string; score: number }) => (<li key={typeof w === "string" ? w : w.name} className="flex items-center gap-2"><AlertTriangle className="h-3.5 w-3.5 text-red-400 shrink-0" />{typeof w === "string" ? w : `${w.name} (${w.score}%)`}</li>))}
                      {selectedStudent.weaknesses.length === 0 && <li className="text-neutral-500">No areas of concern identified</li>}
                    </ul>
                  </div>
                </div>

                {/* Next steps */}
                {selectedStudent.recommendations.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Next Steps</h3>
                    <ul className="space-y-2">
                      {selectedStudent.recommendations.map((r, i) => (<li key={i} className="flex items-start gap-3 text-sm text-neutral-300"><Target className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />{r}</li>))}
                    </ul>
                  </div>
                )}

                {/* Teacher Comments */}
                <div>
                  <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Teacher Comments</h3>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                    <p className="text-sm text-neutral-300 italic leading-relaxed">
                      {selectedStudent.overallProgress >= 70
                        ? `${selectedStudent.name} is making excellent progress and consistently engages with the material. Continued effort in weaker modules will help achieve a top grade. Keep up the great work.`
                        : selectedStudent.overallProgress >= 50
                        ? `${selectedStudent.name} shows good potential but needs to improve consistency. Focus on completing assignments on time and engaging with feedback. Additional practice in weaker areas is recommended.`
                        : `${selectedStudent.name} requires significant additional support to get back on track. Attendance and engagement have been concerns. A meeting with parents/carers is recommended to discuss an intervention plan.`}
                    </p>
                    <p className="text-xs text-neutral-500 mt-3">-- {selectedStudent.teacherName}</p>
                  </div>
                </div>

                {/* Parent note */}
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-sm text-blue-300">
                    <strong>For parents/carers:</strong> This report shows your child&apos;s progress across all English modules. The predicted grade is based on current performance and may change as the year progresses. Please contact the school office if you would like to discuss this report further.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 p-6 flex justify-center" data-print-hide>
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold gap-2" onClick={() => window.print()}>
                  <Printer className="h-4 w-4" />Print Student Report
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* ── TEACHER PERFORMANCE REPORT ─────────────────────────────────── */}
        {activeTab === "teacher" && (
          <div className="space-y-6">
            {/* Teacher ranking */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2"><Award className="h-5 w-5 text-amber-400" />Teacher Ranking by Student Outcomes</CardTitle>
                <CardDescription className="text-neutral-400">Ranked by average student progress across all assigned classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/10 text-neutral-400"><th className="text-left py-3 pr-4 w-10">#</th><th className="text-left py-3 pr-4">Teacher</th><th className="text-left py-3 pr-4">Department</th><th className="text-left py-3 pr-4">Classes</th><th className="text-left py-3 pr-4">Students</th><th className="text-left py-3 pr-4">Avg Progress</th><th className="text-left py-3">Completion</th></tr></thead>
                    <tbody>
                      {teacherRanking.map((t, i) => (
                        <tr key={t.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${selectedTeacherId === t.id ? "bg-white/5" : ""}`} onClick={() => setSelectedTeacherId(t.id)}>
                          <td className="py-3 pr-4">
                            <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${i === 0 ? "bg-amber-500/20 text-amber-400" : i === 1 ? "bg-neutral-400/20 text-neutral-300" : i === 2 ? "bg-orange-500/20 text-orange-400" : "bg-white/5 text-neutral-500"}`}>{i + 1}</span>
                          </td>
                          <td className="py-3 pr-4 font-medium text-white">{t.name}</td>
                          <td className="py-3 pr-4 text-neutral-300">{t.department}</td>
                          <td className="py-3 pr-4 text-neutral-300">{t.classNames.join(", ")}</td>
                          <td className="py-3 pr-4 text-neutral-300">{t.totalStudents}</td>
                          <td className="py-3 pr-4"><span className={`font-semibold ${t.avgProgress >= 75 ? "text-emerald-400" : t.avgProgress >= 60 ? "text-amber-400" : "text-red-400"}`}>{t.avgProgress}%</span></td>
                          <td className="py-3 text-neutral-300">{t.completionRate}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Teacher selector */}
            <div className="flex items-center gap-4" data-print-hide>
              <label className="text-sm text-neutral-400">Select Teacher for Detail:</label>
              <select value={selectedTeacherId} onChange={(e) => setSelectedTeacherId(e.target.value)} className="bg-[#111] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-white/30">
                {DEMO_TEACHERS.map((t) => (<option key={t.id} value={t.id}>{t.name} -- {t.department}</option>))}
              </select>
            </div>

            {/* Teacher header */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white text-xl">{selectedTeacher.name} -- Performance Report</CardTitle>
                <CardDescription className="text-neutral-400">{selectedTeacher.department} | {selectedTeacher.yearsExperience ?? 5} years experience | {selectedTeacher.classCount} classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{teacherClasses.length}</p><p className="text-xs text-neutral-500">Active Classes</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{teacherClasses.reduce((sum, c) => sum + c.studentCount, 0)}</p><p className="text-xs text-neutral-500">Total Students</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{teacherClasses.length > 0 ? Math.round(teacherClasses.reduce((sum, c) => sum + c.avgProgress, 0) / teacherClasses.length) : 0}%</p><p className="text-xs text-neutral-500">Avg Student Progress</p></div>
                  <div className="bg-white/5 rounded-lg p-4"><p className="text-2xl font-bold text-white">{teacherClasses.length > 0 ? Math.round((teacherClasses.reduce((sum, c) => sum + c.assignmentsCompleted, 0) / teacherClasses.reduce((sum, c) => sum + c.assignmentsSet, 0)) * 100) : 0}%</p><p className="text-xs text-neutral-500">Assignment Completion</p></div>
                </div>
              </CardContent>
            </Card>

            {/* Classes and results */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader><CardTitle className="text-white">Classes and Results</CardTitle></CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead><tr className="border-b border-white/10 text-neutral-400"><th className="text-left py-3 pr-4">Class</th><th className="text-left py-3 pr-4">Year</th><th className="text-left py-3 pr-4">Students</th><th className="text-left py-3 pr-4">Avg Progress</th><th className="text-left py-3 pr-4 w-[160px]">Progress</th><th className="text-left py-3 pr-4">Assignments</th><th className="text-left py-3">vs Dept Avg</th></tr></thead>
                    <tbody>
                      {teacherClasses.map((cls) => {
                        const deptClasses = DEMO_CLASSES.filter((c) => { const teacher = DEMO_TEACHERS.find((t) => t.id === c.teacherId); return teacher?.department === selectedTeacher.department })
                        const deptAvg = deptClasses.length > 0 ? Math.round(deptClasses.reduce((sum, c) => sum + c.avgProgress, 0) / deptClasses.length) : 0
                        const diff = cls.avgProgress - deptAvg
                        return (
                          <tr key={cls.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="py-3 pr-4 font-medium text-white">{cls.name}</td>
                            <td className="py-3 pr-4 text-neutral-300">{cls.yearGroup}</td>
                            <td className="py-3 pr-4 text-neutral-300">{cls.studentCount}</td>
                            <td className="py-3 pr-4 text-white font-semibold">{cls.avgProgress}%</td>
                            <td className="py-3 pr-4"><div className="w-full bg-white/10 rounded-full h-2"><div className={`h-2 rounded-full ${cls.avgProgress >= 70 ? "bg-emerald-500" : cls.avgProgress >= 55 ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${cls.avgProgress}%` }} /></div></td>
                            <td className="py-3 pr-4 text-neutral-300">{cls.assignmentsCompleted}/{cls.assignmentsSet}</td>
                            <td className="py-3">
                              <span className={`inline-flex items-center gap-1 text-xs font-medium ${diff > 0 ? "text-emerald-400" : diff < 0 ? "text-red-400" : "text-neutral-400"}`}>
                                {diff > 0 ? <ArrowUpRight className="h-3 w-3" /> : diff < 0 ? <ArrowDownRight className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                                {diff > 0 ? "+" : ""}{diff}%
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Student outcomes */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Student Outcomes Under Their Care</CardTitle>
                <CardDescription className="text-neutral-400">Individual students in {selectedTeacher.name}&apos;s classes</CardDescription>
              </CardHeader>
              <CardContent>
                {(() => {
                  const teacherStudents = DEMO_STUDENTS.filter((s) => teacherClasses.some((c) => c.id === s.classId))
                  if (teacherStudents.length === 0) return <p className="text-neutral-500 text-sm py-4">No individual student data available in the demo for {selectedTeacher.name}&apos;s classes. In a live environment, all students would be listed with full progress data.</p>
                  return (
                    <div className="space-y-3">
                      {teacherStudents.map((s) => {
                        const rag = getRagStatus(s.overallProgress)
                        return (
                          <div key={s.id} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                            <div className="flex items-center gap-3">
                              <div className={`w-2.5 h-2.5 rounded-full ${rag === "green" ? "bg-emerald-500" : rag === "amber" ? "bg-amber-500" : "bg-red-500"}`} />
                              <div><p className="text-sm font-medium text-white">{s.name}</p><p className="text-xs text-neutral-500">{s.className}</p></div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-24 bg-white/10 rounded-full h-2"><div className={`h-2 rounded-full ${rag === "green" ? "bg-emerald-500" : rag === "amber" ? "bg-amber-500" : "bg-red-500"}`} style={{ width: `${s.overallProgress}%` }} /></div>
                              <span className="text-sm font-semibold text-white w-10 text-right">{s.overallProgress}%</span>
                              {s.atRisk && <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs">At Risk</Badge>}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )
                })()}
              </CardContent>
            </Card>

            {/* Department comparison */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white">Comparison with Department Average</CardTitle>
                <CardDescription className="text-neutral-400">{selectedTeacher.department}</CardDescription>
              </CardHeader>
              <CardContent>
                {(() => {
                  const deptClasses = DEMO_CLASSES.filter((c) => { const teacher = DEMO_TEACHERS.find((t) => t.id === c.teacherId); return teacher?.department === selectedTeacher.department })
                  const deptAvg = deptClasses.length > 0 ? Math.round(deptClasses.reduce((sum, c) => sum + c.avgProgress, 0) / deptClasses.length) : 0
                  const teacherAvg = teacherClasses.length > 0 ? Math.round(teacherClasses.reduce((sum, c) => sum + c.avgProgress, 0) / teacherClasses.length) : 0
                  const deptCompletion = deptClasses.length > 0 ? Math.round((deptClasses.reduce((sum, c) => sum + c.assignmentsCompleted, 0) / deptClasses.reduce((sum, c) => sum + c.assignmentsSet, 0)) * 100) : 0
                  const teacherCompletion = teacherClasses.length > 0 ? Math.round((teacherClasses.reduce((sum, c) => sum + c.assignmentsCompleted, 0) / teacherClasses.reduce((sum, c) => sum + c.assignmentsSet, 0)) * 100) : 0
                  return (
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm text-neutral-400 mb-2">Average Student Progress</p>
                        <div className="space-y-3">
                          <div><div className="flex justify-between text-sm mb-1"><span className="text-neutral-300">{selectedTeacher.name}</span><span className="text-white font-semibold">{teacherAvg}%</span></div><div className="w-full bg-white/10 rounded-full h-3"><div className="h-3 rounded-full bg-blue-500 transition-all" style={{ width: `${teacherAvg}%` }} /></div></div>
                          <div><div className="flex justify-between text-sm mb-1"><span className="text-neutral-300">{selectedTeacher.department} Avg</span><span className="text-white font-semibold">{deptAvg}%</span></div><div className="w-full bg-white/10 rounded-full h-3"><div className="h-3 rounded-full bg-violet-500/70 transition-all" style={{ width: `${deptAvg}%` }} /></div></div>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-400 mb-2">Assignment Completion Rate</p>
                        <div className="space-y-3">
                          <div><div className="flex justify-between text-sm mb-1"><span className="text-neutral-300">{selectedTeacher.name}</span><span className="text-white font-semibold">{teacherCompletion}%</span></div><div className="w-full bg-white/10 rounded-full h-3"><div className="h-3 rounded-full bg-emerald-500 transition-all" style={{ width: `${teacherCompletion}%` }} /></div></div>
                          <div><div className="flex justify-between text-sm mb-1"><span className="text-neutral-300">{selectedTeacher.department} Avg</span><span className="text-white font-semibold">{deptCompletion}%</span></div><div className="w-full bg-white/10 rounded-full h-3"><div className="h-3 rounded-full bg-emerald-500/50 transition-all" style={{ width: `${deptCompletion}%` }} /></div></div>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </CardContent>
            </Card>

            {/* CPD Recommendations */}
            <Card className="bg-[#111] border-white/10 print-avoid-break">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2"><BookOpen className="h-5 w-5 text-blue-400" />Professional Development Recommendations</CardTitle>
                <CardDescription className="text-neutral-400">Suggested CPD activities for {selectedTeacher.name}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {(selectedTeacher.cpdNotes ?? ["Attend subject-specific CPD sessions", "Observe outstanding practitioners in department", "Complete safeguarding refresher training"]).map((note: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-300"><Target className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />{note}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex justify-center pt-4" data-print-hide>
              <Button size="lg" className="bg-white text-black hover:bg-neutral-200 font-semibold gap-2" onClick={() => window.print()}>
                <Printer className="h-4 w-4" />Print Teacher Report
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

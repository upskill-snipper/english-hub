"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Users,
  TrendingUp,
  AlertTriangle,
  Printer,
  Target,
  ChevronDown,
  BookOpen,
  Clock,
  CheckCircle2,
  Activity,
  X,
  ChevronRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DEMO_STUDENTS } from "@/data/demo-data"
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from "@/lib/grades"
import DemoBanner from "@/components/demo/DemoBanner"

// ── Teacher classes (Mrs Mitchell's 3 classes) ───────────────────────────────

interface TeacherClass {
  id: string
  name: string
  yearGroup: number
  examBoard: string
}

const TEACHER_CLASSES: TeacherClass[] = [
  { id: "mc-001", name: "10A English", yearGroup: 10, examBoard: "AQA" },
  { id: "mc-002", name: "11B English", yearGroup: 11, examBoard: "AQA" },
  { id: "mc-003", name: "13 A-Level Lang", yearGroup: 13, examBoard: "AQA" },
]

// ── Students mapped to classes with progress data ────────────────────────────

interface ClassStudent {
  id: string
  name: string
  classId: string
  className: string
  score: number
  progress: number
  status: "green" | "amber" | "red"
  trend: "up" | "stable" | "down"
  lastActive: string
  assignmentsCompleted: number
  assignmentsTotal: number
}

const CLASS_STUDENTS: ClassStudent[] = [
  // 10A English
  { id: "s1", name: "Amelia Richardson", classId: "mc-001", className: "10A English", score: 88, progress: 92, status: "green", trend: "up", lastActive: "Today", assignmentsCompleted: 24, assignmentsTotal: 26 },
  { id: "s2", name: "Oliver Bennett", classId: "mc-001", className: "10A English", score: 72, progress: 71, status: "amber", trend: "stable", lastActive: "Yesterday", assignmentsCompleted: 19, assignmentsTotal: 26 },
  { id: "s3", name: "Fatima Al-Rashid", classId: "mc-001", className: "10A English", score: 52, progress: 48, status: "red", trend: "down", lastActive: "3 days ago", assignmentsCompleted: 12, assignmentsTotal: 26 },
  { id: "s4", name: "James Whitfield", classId: "mc-001", className: "10A English", score: 35, progress: 28, status: "red", trend: "down", lastActive: "5 days ago", assignmentsCompleted: 7, assignmentsTotal: 26 },
  { id: "s13", name: "Priya Sharma", classId: "mc-001", className: "10A English", score: 66, progress: 64, status: "amber", trend: "up", lastActive: "Today", assignmentsCompleted: 17, assignmentsTotal: 26 },
  { id: "s15", name: "Hassan Ali", classId: "mc-001", className: "10A English", score: 78, progress: 76, status: "green", trend: "up", lastActive: "Today", assignmentsCompleted: 21, assignmentsTotal: 26 },
  { id: "s16", name: "Charlotte Evans", classId: "mc-001", className: "10A English", score: 84, progress: 85, status: "green", trend: "stable", lastActive: "Yesterday", assignmentsCompleted: 23, assignmentsTotal: 26 },
  { id: "s17", name: "Ethan Parker", classId: "mc-001", className: "10A English", score: 60, progress: 58, status: "amber", trend: "down", lastActive: "2 days ago", assignmentsCompleted: 15, assignmentsTotal: 26 },
  // 11B English
  { id: "s5", name: "Sophie Chen", classId: "mc-002", className: "11B English", score: 94, progress: 96, status: "green", trend: "up", lastActive: "Today", assignmentsCompleted: 30, assignmentsTotal: 30 },
  { id: "s6", name: "Marcus Thompson", classId: "mc-002", className: "11B English", score: 82, progress: 79, status: "green", trend: "stable", lastActive: "Today", assignmentsCompleted: 25, assignmentsTotal: 30 },
  { id: "s9", name: "Daniel Cooper", classId: "mc-002", className: "11B English", score: 91, progress: 88, status: "green", trend: "up", lastActive: "Yesterday", assignmentsCompleted: 28, assignmentsTotal: 30 },
  { id: "s14", name: "Zoe Mitchell", classId: "mc-002", className: "11B English", score: 42, progress: 40, status: "red", trend: "down", lastActive: "4 days ago", assignmentsCompleted: 12, assignmentsTotal: 30 },
  { id: "s11", name: "Tom Harrison", classId: "mc-002", className: "11B English", score: 79, progress: 76, status: "green", trend: "stable", lastActive: "Today", assignmentsCompleted: 24, assignmentsTotal: 30 },
  { id: "s18", name: "Grace Williams", classId: "mc-002", className: "11B English", score: 68, progress: 65, status: "amber", trend: "up", lastActive: "Yesterday", assignmentsCompleted: 20, assignmentsTotal: 30 },
  { id: "s19", name: "Ryan O'Brien", classId: "mc-002", className: "11B English", score: 55, progress: 50, status: "amber", trend: "down", lastActive: "3 days ago", assignmentsCompleted: 16, assignmentsTotal: 30 },
  // 13 A-Level Lang
  { id: "s10", name: "Aisha Begum", classId: "mc-003", className: "13 A-Level Lang", score: 28, progress: 24, status: "red", trend: "down", lastActive: "1 week ago", assignmentsCompleted: 5, assignmentsTotal: 22 },
  { id: "s7", name: "Liam Patterson", classId: "mc-003", className: "13 A-Level Lang", score: 63, progress: 60, status: "amber", trend: "stable", lastActive: "Yesterday", assignmentsCompleted: 14, assignmentsTotal: 22 },
  { id: "s8", name: "Emma Rodriguez", classId: "mc-003", className: "13 A-Level Lang", score: 72, progress: 70, status: "green", trend: "up", lastActive: "Today", assignmentsCompleted: 18, assignmentsTotal: 22 },
  { id: "s12", name: "Noah Williams", classId: "mc-003", className: "13 A-Level Lang", score: 59, progress: 55, status: "amber", trend: "stable", lastActive: "2 days ago", assignmentsCompleted: 13, assignmentsTotal: 22 },
  { id: "s20", name: "Isla Campbell", classId: "mc-003", className: "13 A-Level Lang", score: 35, progress: 30, status: "red", trend: "down", lastActive: "5 days ago", assignmentsCompleted: 7, assignmentsTotal: 22 },
]

// ── Weekly activity data ─────────────────────────────────────────────────────

interface WeekData {
  week: string
  logins: number
  submissions: number
  quizzes: number
}

const WEEKLY_ACTIVITY: Record<string, WeekData[]> = {
  "mc-001": [
    { week: "W1 (Mar 3)", logins: 38, submissions: 12, quizzes: 8 },
    { week: "W2 (Mar 10)", logins: 42, submissions: 15, quizzes: 10 },
    { week: "W3 (Mar 17)", logins: 35, submissions: 10, quizzes: 6 },
    { week: "W4 (Mar 24)", logins: 44, submissions: 18, quizzes: 12 },
    { week: "W5 (Mar 31)", logins: 40, submissions: 14, quizzes: 9 },
  ],
  "mc-002": [
    { week: "W1 (Mar 3)", logins: 32, submissions: 14, quizzes: 10 },
    { week: "W2 (Mar 10)", logins: 38, submissions: 18, quizzes: 12 },
    { week: "W3 (Mar 17)", logins: 28, submissions: 11, quizzes: 8 },
    { week: "W4 (Mar 24)", logins: 40, submissions: 20, quizzes: 14 },
    { week: "W5 (Mar 31)", logins: 36, submissions: 16, quizzes: 11 },
  ],
  "mc-003": [
    { week: "W1 (Mar 3)", logins: 18, submissions: 6, quizzes: 4 },
    { week: "W2 (Mar 10)", logins: 22, submissions: 8, quizzes: 6 },
    { week: "W3 (Mar 17)", logins: 15, submissions: 5, quizzes: 3 },
    { week: "W4 (Mar 24)", logins: 24, submissions: 10, quizzes: 7 },
    { week: "W5 (Mar 31)", logins: 20, submissions: 7, quizzes: 5 },
  ],
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function ragDot(status: "green" | "amber" | "red") {
  const colors = {
    green: "bg-emerald-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
  }
  return <div className={`h-3 w-3 rounded-full ${colors[status]}`} />
}

function ragBadge(status: "green" | "amber" | "red") {
  const styles = {
    green: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
    amber: "bg-amber-500/15 text-amber-400 border-amber-500/20",
    red: "bg-red-500/15 text-red-400 border-red-500/20",
  }
  const labels = { green: "On Track", amber: "Needs Support", red: "At Risk" }
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium tracking-wide border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

function trendIcon(trend: "up" | "stable" | "down") {
  if (trend === "up") return <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
  if (trend === "down") return <TrendingUp className="h-3.5 w-3.5 text-red-400 rotate-180" />
  return <span className="text-neutral-500 text-xs">--</span>
}

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

// ── Main Page ────────────────────────────────────────────────────────────────

export default function TeacherProgressPage() {
  const [selectedClassId, setSelectedClassId] = useState<string>("mc-001")
  const [showReport, setShowReport] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const selectedClass = TEACHER_CLASSES.find((c) => c.id === selectedClassId)!
  const classStudents = CLASS_STUDENTS.filter((s) => s.classId === selectedClassId)
    .sort((a, b) => {
      const statusOrder = { red: 0, amber: 1, green: 2 }
      if (statusOrder[a.status] !== statusOrder[b.status]) return statusOrder[a.status] - statusOrder[b.status]
      return a.name.localeCompare(b.name)
    })

  const avgScore = Math.round(classStudents.reduce((s, st) => s + st.score, 0) / classStudents.length)
  const avgProgress = Math.round(classStudents.reduce((s, st) => s + st.progress, 0) / classStudents.length)
  const greenCount = classStudents.filter((s) => s.status === "green").length
  const amberCount = classStudents.filter((s) => s.status === "amber").length
  const redCount = classStudents.filter((s) => s.status === "red").length
  const needsAttention = classStudents.filter((s) => s.status === "red" || (s.status === "amber" && s.trend === "down"))

  const weeklyData = WEEKLY_ACTIVITY[selectedClassId] || []
  const maxWeeklyLogins = Math.max(...weeklyData.map((w) => w.logins))

  // Score distribution buckets
  const scoreBuckets = [
    { label: "0-39", min: 0, max: 39, color: "bg-red-500" },
    { label: "40-59", min: 40, max: 59, color: "bg-orange-400" },
    { label: "60-74", min: 60, max: 74, color: "bg-amber-400" },
    { label: "75-89", min: 75, max: 89, color: "bg-emerald-400" },
    { label: "90-100", min: 90, max: 100, color: "bg-emerald-500" },
  ]
  const distribution = scoreBuckets.map((b) => ({
    ...b,
    count: classStudents.filter((s) => s.score >= b.min && s.score <= b.max).length,
  }))
  const maxBucket = Math.max(...distribution.map((d) => d.count), 1)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DemoBanner message="You are viewing an interactive demo with sample data. No real student data is used." />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Back link */}
        <Link
          href="/demo/teacher"
          className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white/70 transition-colors mb-6"
        >
          <span className="text-base leading-none">&larr;</span> Teacher Dashboard
        </Link>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-3">
              <BarChart3 className="h-7 w-7 text-violet-400" />
              My Students' Progress
            </h1>
            <p className="text-neutral-400 mt-1">Track performance and identify students needing support</p>
          </div>
          <Button
            className="bg-violet-600 hover:bg-violet-500 text-white gap-2"
            onClick={() => setShowReport(true)}
          >
            <Printer className="h-4 w-4" />
            Print Class Report
          </Button>
        </div>

        {/* ── Class Selector ──────────────────────────────────────── */}
        <div className="relative mb-8">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full sm:w-80 px-4 py-3 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-colors"
          >
            <div className="text-left">
              <div className="text-sm font-medium text-white">{selectedClass.name}</div>
              <div className="text-xs text-neutral-500">Year {selectedClass.yearGroup} -- {selectedClass.examBoard}</div>
            </div>
            <ChevronDown className={`h-4 w-4 text-neutral-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {dropdownOpen && (
            <div className="absolute z-20 mt-1 w-full sm:w-80 rounded-lg bg-neutral-900 border border-neutral-800 shadow-xl">
              {TEACHER_CLASSES.map((cls) => (
                <button
                  key={cls.id}
                  onClick={() => { setSelectedClassId(cls.id); setDropdownOpen(false); setShowReport(false) }}
                  className={`w-full text-left px-4 py-3 hover:bg-neutral-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                    cls.id === selectedClassId ? "bg-violet-600/10 border-l-2 border-l-violet-500" : ""
                  }`}
                >
                  <div className="text-sm font-medium text-white">{cls.name}</div>
                  <div className="text-xs text-neutral-500">Year {cls.yearGroup} -- {cls.examBoard} -- {CLASS_STUDENTS.filter((s) => s.classId === cls.id).length} students</div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── Class Overview Cards ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-neutral-500 mb-1">Average Score</div>
              <div className={`text-2xl font-bold ${progressTextColor(avgScore)}`}>{avgScore}%</div>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-neutral-500 mb-1">Completion</div>
              <div className={`text-2xl font-bold ${progressTextColor(avgProgress)}`}>{avgProgress}%</div>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-neutral-500 mb-1">Students</div>
              <div className="text-2xl font-bold text-white">{classStudents.length}</div>
            </CardContent>
          </Card>
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-neutral-500 mb-1">At Risk</div>
              <div className="text-2xl font-bold text-red-400">{redCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* ── Student RAG Table ─────────────────────────────────────── */}
        <Card className="bg-neutral-900/60 border-neutral-800 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <Users className="h-4 w-4 text-cyan-400" />
              Student Progress -- {selectedClass.name}
              <div className="ml-auto flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-emerald-500" /> {greenCount}</span>
                <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-amber-500" /> {amberCount}</span>
                <span className="flex items-center gap-1"><div className="h-2 w-2 rounded-full bg-red-500" /> {redCount}</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 text-neutral-500 text-xs uppercase tracking-wider">
                    <th className="text-left py-2 pr-2">Status</th>
                    <th className="text-left py-2 pr-2">Student</th>
                    <th className="text-right py-2 pr-2">Score</th>
                    <th className="text-right py-2 pr-2">Progress</th>
                    <th className="text-center py-2 pr-2">Trend</th>
                    <th className="text-right py-2 pr-2">Assignments</th>
                    <th className="text-right py-2 pr-2">Last Active</th>
                    <th className="text-right py-2" />
                  </tr>
                </thead>
                <tbody>
                  {classStudents.map((student) => (
                    <tr key={student.id} className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors">
                      <td className="py-2.5 pr-2">{ragDot(student.status)}</td>
                      <td className="py-2.5 pr-2">
                        <div className="font-medium text-white">{student.name}</div>
                        <div className="text-xs text-neutral-500">{ragBadge(student.status)}</div>
                      </td>
                      <td className={`py-2.5 pr-2 text-right font-mono ${gcseGradeColor(percentageToGCSEGrade(student.score))}`}>{percentageToGCSEGradeLabel(student.score)}</td>
                      <td className="py-2.5 pr-2 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                            <div className={`h-full rounded-full ${progressColor(student.progress)}`} style={{ width: `${student.progress}%` }} />
                          </div>
                          <span className="text-xs font-mono text-neutral-400 w-8 text-right">{student.progress}%</span>
                        </div>
                      </td>
                      <td className="py-2.5 pr-2 text-center">{trendIcon(student.trend)}</td>
                      <td className="py-2.5 pr-2 text-right text-xs text-neutral-400">
                        {student.assignmentsCompleted}/{student.assignmentsTotal}
                      </td>
                      <td className="py-2.5 pr-2 text-right text-xs text-neutral-500">{student.lastActive}</td>
                      <td className="py-2.5 text-right">
                        <Link
                          href={`/demo/teacher/students/${student.id}`}
                          className="text-violet-400 hover:text-violet-300 transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ── Score Distribution + Students Needing Attention ────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Score Distribution */}
          <Card className="bg-neutral-900/60 border-neutral-800">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
                <Target className="h-4 w-4 text-amber-400" />
                Score Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {distribution.map((bucket) => (
                  <div key={bucket.label} className="flex items-center gap-2">
                    <span className="w-14 text-xs text-neutral-400 font-mono">{bucket.label}</span>
                    <div className="flex-1 h-5 rounded bg-neutral-800 overflow-hidden relative">
                      <div
                        className={`h-full rounded ${bucket.color} transition-all`}
                        style={{ width: `${(bucket.count / maxBucket) * 100}%` }}
                      />
                    </div>
                    <span className="w-6 text-right text-xs font-mono text-neutral-400">{bucket.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Students Needing Attention */}
          <Card className="bg-neutral-900/60 border-neutral-800 border-l-4 border-l-red-500/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Students Needing Attention
              </CardTitle>
            </CardHeader>
            <CardContent>
              {needsAttention.length === 0 ? (
                <div className="text-sm text-neutral-500 py-4 text-center">
                  <CheckCircle2 className="h-8 w-8 text-emerald-500/50 mx-auto mb-2" />
                  All students are progressing well
                </div>
              ) : (
                <div className="space-y-3">
                  {needsAttention.map((student) => (
                    <Link
                      key={student.id}
                      href={`/demo/teacher/students/${student.id}`}
                      className="flex items-center justify-between p-2 rounded-lg hover:bg-neutral-800/50 transition-colors group"
                    >
                      <div className="flex items-center gap-2">
                        {ragDot(student.status)}
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">{student.name}</div>
                          <div className="text-xs text-neutral-500">{percentageToGCSEGradeLabel(student.score)} -- Last active: {student.lastActive}</div>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-neutral-600 group-hover:text-violet-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* ── Week-by-Week Activity Chart ──────────────────────────── */}
        <Card className="bg-neutral-900/60 border-neutral-800 mb-6">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-neutral-400 flex items-center gap-2">
              <Activity className="h-4 w-4 text-violet-400" />
              Week-by-Week Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 text-neutral-500 text-xs uppercase tracking-wider">
                    <th className="text-left py-2 pr-4">Week</th>
                    <th className="text-left py-2 pr-4">Logins</th>
                    <th className="text-right py-2 pr-4">Submissions</th>
                    <th className="text-right py-2">Quizzes</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklyData.map((week) => (
                    <tr key={week.week} className="border-b border-neutral-800/50">
                      <td className="py-2 pr-4 text-neutral-300 font-medium">{week.week}</td>
                      <td className="py-2 pr-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-3 rounded bg-neutral-800 overflow-hidden">
                            <div className="h-full rounded bg-violet-500" style={{ width: `${(week.logins / maxWeeklyLogins) * 100}%` }} />
                          </div>
                          <span className="text-xs font-mono text-neutral-400">{week.logins}</span>
                        </div>
                      </td>
                      <td className="py-2 pr-4 text-right text-neutral-300 font-mono">{week.submissions}</td>
                      <td className="py-2 text-right text-neutral-300 font-mono">{week.quizzes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-4 mt-3 text-[10px] text-neutral-600">
              <span className="flex items-center gap-1"><div className="h-2 w-4 rounded bg-violet-500" /> Logins</span>
              <span>Submissions and quizzes shown as counts</span>
            </div>
          </CardContent>
        </Card>

        {/* ── Printable Report Modal ───────────────────────────────── */}
        {showReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="bg-white text-black rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Report header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div>
                  <h2 className="text-xl font-bold">Class Report: {selectedClass.name}</h2>
                  <p className="text-sm text-gray-500">Mrs Mitchell -- Generated {new Date().toLocaleDateString("en-GB")}</p>
                </div>
                <button onClick={() => setShowReport(false)} className="p-2 rounded-md hover:bg-gray-100">
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Report body */}
              <div className="p-6 space-y-6 text-sm">
                {/* Summary */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Class Summary</h3>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Class</td>
                        <td className="py-1 font-medium text-right">{selectedClass.name}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Year Group</td>
                        <td className="py-1 font-medium text-right">Year {selectedClass.yearGroup}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Exam Board</td>
                        <td className="py-1 font-medium text-right">{selectedClass.examBoard}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Students</td>
                        <td className="py-1 font-medium text-right">{classStudents.length}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Average Score</td>
                        <td className="py-1 font-medium text-right">{avgScore}%</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-1 text-gray-500">Average Progress</td>
                        <td className="py-1 font-medium text-right">{avgProgress}%</td>
                      </tr>
                      <tr>
                        <td className="py-1 text-gray-500">RAG Summary</td>
                        <td className="py-1 font-medium text-right">
                          <span className="text-green-700">{greenCount} On Track</span>{" / "}
                          <span className="text-amber-600">{amberCount} Support</span>{" / "}
                          <span className="text-red-600">{redCount} At Risk</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Student Detail */}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Student Details</h3>
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b text-gray-500">
                        <th className="py-1 font-medium">Student</th>
                        <th className="py-1 font-medium text-center">Status</th>
                        <th className="py-1 font-medium text-right">Score</th>
                        <th className="py-1 font-medium text-right">Progress</th>
                        <th className="py-1 font-medium text-right">Assignments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classStudents.map((s) => (
                        <tr key={s.id} className="border-b">
                          <td className="py-1">{s.name}</td>
                          <td className="py-1 text-center">
                            <span className={
                              s.status === "green" ? "text-green-700" :
                              s.status === "amber" ? "text-amber-600" :
                              "text-red-600"
                            }>
                              {s.status === "green" ? "On Track" : s.status === "amber" ? "Support" : "At Risk"}
                            </span>
                          </td>
                          <td className="py-1 text-right font-mono">{percentageToGCSEGradeLabel(s.score)}</td>
                          <td className="py-1 text-right font-mono">{s.progress}%</td>
                          <td className="py-1 text-right">{s.assignmentsCompleted}/{s.assignmentsTotal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Attention */}
                {needsAttention.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Students Requiring Intervention</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {needsAttention.map((s) => (
                        <li key={s.id}>
                          <span className="font-medium">{s.name}</span> -- {percentageToGCSEGradeLabel(s.score)}, Progress: {s.progress}%, Last active: {s.lastActive}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Footer */}
                <div className="text-center text-xs text-gray-400 pt-4 border-t">
                  This is a demo report. Register your school for real progress tracking.
                </div>
              </div>

              {/* Print button */}
              <div className="p-4 border-t flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowReport(false)}>
                  Close
                </Button>
                <Button onClick={() => window.print()} className="bg-black text-white hover:bg-gray-800 gap-2">
                  <Printer className="h-4 w-4" />
                  Print Report
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

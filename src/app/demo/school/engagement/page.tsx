"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Users,
  Activity,
  Clock,
  FileText,
  TrendingUp,
  TrendingDown,
  Info,
  Bell,
  Flame,
  BookOpen,
  ClipboardList,
  FolderOpen,
  BarChart3,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { DEMO_STUDENTS, DEMO_CLASSES } from "@/data/demo-data"

// -- Seeded random helper -------------------------------------------------------

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

// -- Engagement heatmap data (7 days x 24 hours) --------------------------------

function generateHeatmapData(): number[][] {
  const grid: number[][] = []
  for (let day = 0; day < 7; day++) {
    const row: number[] = []
    for (let hour = 0; hour < 24; hour++) {
      const seed = day * 100 + hour + 42
      let base = seededRandom(seed)

      // Peak morning (7-9am)
      if (hour >= 7 && hour <= 9) base = 0.6 + seededRandom(seed + 1) * 0.4
      // Moderate midday (10am-2pm)
      else if (hour >= 10 && hour <= 14) base = 0.3 + seededRandom(seed + 2) * 0.4
      // Peak evening (6-9pm)
      else if (hour >= 18 && hour <= 21) base = 0.55 + seededRandom(seed + 3) * 0.45
      // Low overnight (11pm-6am)
      else if (hour >= 23 || hour <= 5) base = seededRandom(seed + 4) * 0.1
      // Moderate afternoon (3-5pm)
      else if (hour >= 15 && hour <= 17) base = 0.25 + seededRandom(seed + 5) * 0.35

      // Weekends slightly lower overall
      if (day >= 5) base *= 0.65

      row.push(Math.round(base * 100))
    }
    grid.push(row)
  }
  return grid
}

const HEATMAP_DATA = generateHeatmapData()
const DAY_LABELS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

function heatmapColor(value: number): string {
  if (value >= 80) return "bg-emerald-400"
  if (value >= 60) return "bg-emerald-500"
  if (value >= 40) return "bg-emerald-600/80"
  if (value >= 20) return "bg-emerald-700/60"
  if (value >= 10) return "bg-emerald-900/40"
  return "bg-neutral-800/60"
}

// -- Year group engagement data -------------------------------------------------

const YEAR_GROUP_ENGAGEMENT = [
  { year: "Year 7", students: 64, activePct: 91, avgSessions: 4.2, avgDuration: "18 min", trend: "up" as const },
  { year: "Year 8", students: 58, activePct: 87, avgSessions: 3.8, avgDuration: "21 min", trend: "up" as const },
  { year: "Year 9", students: 62, activePct: 82, avgSessions: 3.5, avgDuration: "22 min", trend: "down" as const },
  { year: "Year 10", students: 54, activePct: 88, avgSessions: 4.5, avgDuration: "26 min", trend: "up" as const },
  { year: "Year 11", students: 52, activePct: 93, avgSessions: 5.1, avgDuration: "28 min", trend: "up" as const },
  { year: "Year 12", students: 30, activePct: 79, avgSessions: 3.2, avgDuration: "24 min", trend: "down" as const },
  { year: "Year 13", students: 22, activePct: 85, avgSessions: 4.8, avgDuration: "31 min", trend: "up" as const },
]

// -- Most active students -------------------------------------------------------

const MOST_ACTIVE_STUDENTS = [
  { id: "s1", name: "Amelia Richardson", streak: 42, sessions: 12 },
  { id: "s2", name: "Oliver Chen", streak: 38, sessions: 11 },
  { id: "s3", name: "Sophie Williams", streak: 35, sessions: 10 },
  { id: "s4", name: "James Okonkwo", streak: 31, sessions: 9 },
  { id: "s5", name: "Chloe Patel", streak: 28, sessions: 9 },
  { id: "s6", name: "Ethan Murray", streak: 26, sessions: 8 },
  { id: "s7", name: "Isabella Novak", streak: 24, sessions: 8 },
  { id: "s8", name: "Noah Begum", streak: 22, sessions: 7 },
  { id: "s9", name: "Mia Thompson", streak: 20, sessions: 7 },
  { id: "s10", name: "Liam Carter", streak: 18, sessions: 7 },
]

// -- Inactive students (7+ days) ------------------------------------------------

const INACTIVE_STUDENTS = [
  { id: "si1", name: "Tyler Robinson", lastActive: "2026-03-22", daysInactive: 13 },
  { id: "si2", name: "Grace Hutchinson", lastActive: "2026-03-24", daysInactive: 11 },
  { id: "si3", name: "Kyle Bennett", lastActive: "2026-03-25", daysInactive: 10 },
  { id: "si4", name: "Priya Sharma", lastActive: "2026-03-26", daysInactive: 9 },
  { id: "si5", name: "Brandon O'Neill", lastActive: "2026-03-27", daysInactive: 8 },
  { id: "si6", name: "Fatima Al-Rashid", lastActive: "2026-03-28", daysInactive: 7 },
  { id: "si7", name: "Callum Frost", lastActive: "2026-03-28", daysInactive: 7 },
]

// -- Content engagement data ----------------------------------------------------

const POPULAR_COURSES = [
  { name: "Macbeth - Full GCSE Course", views: 1284, trend: "+12%" },
  { name: "AQA Language Paper 1", views: 1102, trend: "+8%" },
  { name: "An Inspector Calls", views: 987, trend: "+15%" },
  { name: "Poetry: Power & Conflict", views: 876, trend: "+5%" },
  { name: "A Christmas Carol", views: 812, trend: "+3%" },
]

const POPULAR_QUIZZES = [
  { name: "Macbeth Key Quotes Quiz", attempts: 342, avgScore: 74 },
  { name: "Language Devices Identifier", attempts: 298, avgScore: 68 },
  { name: "Inspector Calls Context Quiz", attempts: 276, avgScore: 71 },
  { name: "Poetry Terminology Match", attempts: 254, avgScore: 66 },
  { name: "Grammar & Punctuation Test", attempts: 231, avgScore: 72 },
]

const POPULAR_RESOURCES = [
  { name: "GCSE English Revision Guide (PDF)", downloads: 198 },
  { name: "Quote Bank: Shakespeare Texts", downloads: 176 },
  { name: "Essay Structure Template", downloads: 164 },
  { name: "Language Paper 1 Model Answers", downloads: 152 },
  { name: "Poetry Comparison Framework", downloads: 141 },
]

// -- Time-of-day analysis -------------------------------------------------------

const TIME_OF_DAY = [
  { label: "6-8am", value: 12, period: "Early Morning" },
  { label: "8-10am", value: 78, period: "Morning" },
  { label: "10-12pm", value: 45, period: "Late Morning" },
  { label: "12-2pm", value: 38, period: "Lunch" },
  { label: "2-4pm", value: 28, period: "Early Afternoon" },
  { label: "4-6pm", value: 42, period: "After School" },
  { label: "6-8pm", value: 72, period: "Evening" },
  { label: "8-10pm", value: 65, period: "Late Evening" },
  { label: "10-12am", value: 18, period: "Night" },
]

const maxTimeValue = Math.max(...TIME_OF_DAY.map((t) => t.value))

// -- Page component -------------------------------------------------------------

export default function EngagementPage() {
  const [remindersSent, setRemindersSent] = useState<Set<string>>(new Set())

  const totalStudents = DEMO_STUDENTS.length > 0 ? DEMO_STUDENTS.length : 342

  function handleSendReminder(studentId: string, studentName: string) {
    setRemindersSent((prev) => new Set(prev).add(studentId))
    toast.success(`Reminder sent to ${studentName}`, {
      description: "They will receive an email encouraging them to log in.",
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
            href="/for-schools/register"
            className="underline underline-offset-2 hover:text-amber-100 font-medium"
          >
            Register your school
          </Link>{" "}
          to see your real engagement analytics.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
            <Activity className="w-8 h-8 text-emerald-400" />
            Student Engagement
          </h1>
          <p className="text-neutral-400 mt-1">
            Track student activity, login patterns, and content usage across your school.
          </p>
        </div>

        {/* ── Engagement stats cards ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">Daily Active Users</p>
                  <p className="text-2xl font-bold mt-1">
                    287<span className="text-base font-normal text-neutral-500">/342</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-400" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-neutral-500">84% active</span>
                  <span className="text-emerald-400">+3% vs last week</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: "84%" }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">Weekly Login Rate</p>
                  <p className="text-2xl font-bold mt-1">
                    305<span className="text-base font-normal text-neutral-500">/342</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-neutral-500">89% logged in</span>
                  <span className="text-blue-400">+1% vs last week</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: "89%" }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">Average Session</p>
                  <p className="text-2xl font-bold mt-1">
                    23<span className="text-base font-normal text-neutral-500"> min</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-neutral-500">Target: 20 min</span>
                  <span className="text-purple-400">+2 min vs last week</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400">Content Accessed Today</p>
                  <p className="text-2xl font-bold mt-1">
                    456<span className="text-base font-normal text-neutral-500"> pages</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-amber-400" />
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-neutral-500">Avg: 380/day</span>
                  <span className="text-amber-400">+20% vs average</span>
                </div>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Engagement Heatmap ─────────────────────────────────── */}
        <Card className="bg-neutral-900/50 border-neutral-800 mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              Engagement Heatmap
            </CardTitle>
            <CardDescription className="text-neutral-400">
              Activity levels across 7 days and 24 hours. Darker green = higher activity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              {/* Hour labels */}
              <div className="flex items-center mb-1">
                <div className="w-10 shrink-0" />
                <div className="grid grid-cols-24 gap-[2px] flex-1 min-w-[600px]" style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}>
                  {Array.from({ length: 24 }, (_, i) => (
                    <div key={i} className="text-[10px] text-neutral-500 text-center">
                      {i % 3 === 0 ? `${i.toString().padStart(2, "0")}` : ""}
                    </div>
                  ))}
                </div>
              </div>
              {/* Heatmap grid */}
              {HEATMAP_DATA.map((row, dayIdx) => (
                <div key={dayIdx} className="flex items-center mb-[2px]">
                  <div className="w-10 shrink-0 text-xs text-neutral-400 font-medium">
                    {DAY_LABELS[dayIdx]}
                  </div>
                  <div className="grid gap-[2px] flex-1 min-w-[600px]" style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}>
                    {row.map((val, hourIdx) => (
                      <div
                        key={hourIdx}
                        className={`h-6 rounded-sm ${heatmapColor(val)} transition-colors`}
                        title={`${DAY_LABELS[dayIdx]} ${hourIdx.toString().padStart(2, "0")}:00 - ${val}% activity`}
                      />
                    ))}
                  </div>
                </div>
              ))}
              {/* Legend */}
              <div className="flex items-center gap-2 mt-3 justify-end">
                <span className="text-xs text-neutral-500">Less</span>
                <div className="w-4 h-4 rounded-sm bg-neutral-800/60" />
                <div className="w-4 h-4 rounded-sm bg-emerald-900/40" />
                <div className="w-4 h-4 rounded-sm bg-emerald-700/60" />
                <div className="w-4 h-4 rounded-sm bg-emerald-600/80" />
                <div className="w-4 h-4 rounded-sm bg-emerald-500" />
                <div className="w-4 h-4 rounded-sm bg-emerald-400" />
                <span className="text-xs text-neutral-500">More</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── Year Group Engagement table ────────────────────────── */}
        <Card className="bg-neutral-900/50 border-neutral-800 mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Year Group Engagement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-800">
                    <th className="text-left py-3 px-3 text-neutral-400 font-medium">Year</th>
                    <th className="text-right py-3 px-3 text-neutral-400 font-medium">Students</th>
                    <th className="text-right py-3 px-3 text-neutral-400 font-medium">Active %</th>
                    <th className="text-right py-3 px-3 text-neutral-400 font-medium">Avg Sessions/Week</th>
                    <th className="text-right py-3 px-3 text-neutral-400 font-medium">Avg Duration</th>
                    <th className="text-center py-3 px-3 text-neutral-400 font-medium">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {YEAR_GROUP_ENGAGEMENT.map((yg) => (
                    <tr key={yg.year} className="border-b border-neutral-800/50 hover:bg-white/[0.02]">
                      <td className="py-3 px-3 font-medium">{yg.year}</td>
                      <td className="py-3 px-3 text-right text-neutral-300">{yg.students}</td>
                      <td className="py-3 px-3 text-right">
                        <span className={yg.activePct >= 85 ? "text-emerald-400" : yg.activePct >= 75 ? "text-amber-400" : "text-red-400"}>
                          {yg.activePct}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right text-neutral-300">{yg.avgSessions}</td>
                      <td className="py-3 px-3 text-right text-neutral-300">{yg.avgDuration}</td>
                      <td className="py-3 px-3 text-center">
                        {yg.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-emerald-400 inline-block" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400 inline-block" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* ── Most Active Students (top 10) ──────────────────── */}
          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-400" />
                Most Active Students
              </CardTitle>
              <CardDescription className="text-neutral-400">
                Top 10 students by activity this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {MOST_ACTIVE_STUDENTS.map((student, idx) => (
                  <Link
                    key={student.id}
                    href={`/demo/school/students/${student.id}`}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 text-center text-sm font-bold text-neutral-500">
                        {idx + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-400">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium group-hover:text-emerald-400 transition-colors">
                        {student.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline" className="border-orange-500/30 text-orange-400 text-xs">
                        <Flame className="w-3 h-3 mr-1" />
                        {student.streak}d streak
                      </Badge>
                      <span className="text-xs text-neutral-400">{student.sessions} sessions</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ── Inactive Students (7+ days) ────────────────────── */}
          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-red-400" />
                Inactive Students
              </CardTitle>
              <CardDescription className="text-neutral-400">
                Students who have not logged in for 7+ days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {INACTIVE_STUDENTS.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-red-500/5 border border-red-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-xs font-bold text-red-400">
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{student.name}</p>
                        <p className="text-xs text-neutral-500">
                          Last active: {student.lastActive}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-red-500/30 text-red-400 text-xs">
                        {student.daysInactive}d inactive
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-neutral-700 hover:bg-neutral-800 text-xs h-7"
                        disabled={remindersSent.has(student.id)}
                        onClick={() => handleSendReminder(student.id, student.name)}
                      >
                        {remindersSent.has(student.id) ? "Sent" : "Send Reminder"}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Content Engagement ─────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Popular Courses */}
          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-400" />
                Most Popular Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {POPULAR_COURSES.map((course, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-neutral-500 w-4">{idx + 1}</span>
                      <span className="text-sm truncate">{course.name}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-2">
                      <span className="text-xs text-neutral-400">{course.views} views</span>
                      <span className="text-xs text-emerald-400">{course.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Most Attempted Quizzes */}
          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-purple-400" />
                Most Attempted Quizzes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {POPULAR_QUIZZES.map((quiz, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-neutral-500 w-4">{idx + 1}</span>
                      <span className="text-sm truncate">{quiz.name}</span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <span className="text-xs text-neutral-400">{quiz.attempts} attempts</span>
                      <span className="text-xs text-amber-400">{quiz.avgScore}% avg</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Most Viewed Resources */}
          <Card className="bg-neutral-900/50 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-emerald-400" />
                Most Viewed Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {POPULAR_RESOURCES.map((resource, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xs font-bold text-neutral-500 w-4">{idx + 1}</span>
                      <span className="text-sm truncate">{resource.name}</span>
                    </div>
                    <span className="text-xs text-neutral-400 shrink-0 ml-2">{resource.downloads} downloads</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── Time-of-Day Analysis ───────────────────────────────── */}
        <Card className="bg-neutral-900/50 border-neutral-800">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-400" />
              Time-of-Day Activity
            </CardTitle>
            <CardDescription className="text-neutral-400">
              When students are most active throughout the day
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 h-48">
              {TIME_OF_DAY.map((slot) => {
                const heightPct = Math.max(4, (slot.value / maxTimeValue) * 100)
                const isPeak = slot.value >= 65
                return (
                  <div
                    key={slot.label}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span className="text-xs font-bold text-neutral-300">
                      {slot.value}%
                    </span>
                    <div
                      className={`w-full rounded-t-md transition-all ${
                        isPeak
                          ? "bg-emerald-500"
                          : slot.value >= 40
                            ? "bg-emerald-600/60"
                            : "bg-neutral-700/60"
                      }`}
                      style={{ height: `${heightPct}%` }}
                      title={`${slot.period}: ${slot.value}% of peak activity`}
                    />
                    <span className="text-[10px] text-neutral-500 text-center leading-tight">
                      {slot.label}
                    </span>
                  </div>
                )
              })}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-neutral-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-emerald-500" />
                <span className="text-xs text-neutral-400">Peak hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-emerald-600/60" />
                <span className="text-xs text-neutral-400">Moderate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-sm bg-neutral-700/60" />
                <span className="text-xs text-neutral-400">Low</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

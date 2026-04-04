"use client"

import Link from "next/link"
import {
  Users,
  Clock,
  FileText,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  TrendingDown,
  Minus,
  BookOpen,
  Hammer,
  CalendarDays,
  Rocket,
  FolderOpen,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DEMO_TEACHER,
  TEACHER_DEMO_CLASSES,
  TEACHER_DEMO_LESSONS,
  TEACHER_DEMO_SUBMISSIONS,
  DEMO_STUDENTS,
  type DemoClass,
  type DemoStudent,
} from "@/data/demo-data"

// ── Helpers ──────────────────────────────────────────────────────────────────

function ragDot(status: "green" | "amber" | "red") {
  const colors = {
    green: "bg-green-500",
    amber: "bg-amber-500",
    red: "bg-red-500",
  }
  return <span className={`inline-block w-2 h-2 rounded-full ${colors[status]}`} />
}

function trendIcon(trend: "up" | "down" | "stable") {
  if (trend === "up") return <TrendingUp className="h-3.5 w-3.5 text-green-400" />
  if (trend === "down") return <TrendingDown className="h-3.5 w-3.5 text-red-400" />
  return <Minus className="h-3.5 w-3.5 text-white/30" />
}

function scoreColor(score: number) {
  if (score >= 70) return "text-green-400"
  if (score >= 50) return "text-amber-400"
  return "text-red-400"
}

function progressBarColor(pct: number) {
  if (pct >= 70) return "bg-green-500"
  if (pct >= 50) return "bg-amber-500"
  return "bg-red-500"
}

// Gather all at-risk students across teacher's classes
const atRiskStudents = TEACHER_DEMO_CLASSES.flatMap((cls: DemoClass) => {
  const students = DEMO_STUDENTS.filter((s) => s.className === cls.name)
  return students
    .filter((s) => s.atRisk)
    .map((s) => ({ ...s, className: cls.name, classId: cls.id }))
})

// Upcoming assignments due this week (mock data)
const assignmentsDueThisWeek = [
  { id: "a1", title: "Macbeth Act 3 Essay", className: "10A English Literature", dueDate: "Friday 4 Apr", submittedCount: 18, totalCount: 28 },
  { id: "a2", title: "Language P1 Q5 Practice", className: "10B English Language", dueDate: "Thursday 3 Apr", submittedCount: 26, totalCount: 30 },
  { id: "a3", title: "Inspector Calls Revision Pack", className: "11A English Literature", dueDate: "Monday 7 Apr", submittedCount: 8, totalCount: 26 },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TeacherDemoDashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-amber-400">
            <span className="font-semibold">Teacher Demo</span> -- See what your
            dashboard looks like
          </p>
        </div>

        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-white/90">
            Welcome, {DEMO_TEACHER.name}
          </h1>
          <p className="text-white/40 text-sm mt-1">
            {DEMO_TEACHER.department} Department -- Riverside Academy
          </p>
        </div>

        {/* ── My Classes ─────────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4">My Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TEACHER_DEMO_CLASSES.map((cls: any) => (
              <Link
                key={cls.id}
                href={`/demo/teacher/classes/${cls.id}`}
                className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-medium text-white/90">
                    {cls.name}
                  </h3>
                  <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white/50 transition-colors" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="secondary" className="text-[11px]">
                    Year {cls.yearGroup}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-white/40">
                    <Users className="h-3.5 w-3.5" />
                    {cls.studentCount} students
                  </span>
                  <span className="text-xs text-white/30">{cls.examBoard}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">Avg Score</span>
                    <span className={scoreColor(cls.avgScore)}>
                      {cls.avgScore}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5">
                    <div
                      className={`h-1.5 rounded-full ${progressBarColor(cls.avgScore)} transition-all`}
                      style={{ width: `${cls.avgScore}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/40">Completion</span>
                    <span className="text-white/60">{cls.completionRate}%</span>
                  </div>
                  {cls.atRiskCount > 0 && (
                    <div className="flex items-center gap-1 text-xs text-red-400 mt-1">
                      <AlertTriangle className="h-3 w-3" />
                      {cls.atRiskCount} at-risk student{cls.atRiskCount > 1 ? "s" : ""}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Today's Overview ────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-emerald-400" />
            Today&apos;s Overview
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Upcoming lessons */}
            <Card className="border-white/5 bg-white/[0.02]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white/70">
                  Upcoming Lessons
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {TEACHER_DEMO_LESSONS.map((lesson: any) => (
                  <div
                    key={lesson.id}
                    className="flex items-start gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3"
                  >
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400/70 whitespace-nowrap pt-0.5">
                      <Clock className="h-3.5 w-3.5" />
                      {lesson.time}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white/90 truncate">
                        {lesson.className}
                      </p>
                      <p className="text-xs text-white/40">{lesson.topic}</p>
                      <p className="text-[11px] text-white/25 mt-0.5">{lesson.room}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Assignments due this week */}
            <Card className="border-white/5 bg-white/[0.02]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-white/70">
                  Assignments Due This Week
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {assignmentsDueThisWeek.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-white/90">
                        {assignment.title}
                      </p>
                      <span className="text-[11px] text-white/40 whitespace-nowrap">
                        {assignment.dueDate}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 mb-2">{assignment.className}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-white/5">
                        <div
                          className="h-1.5 rounded-full bg-emerald-500 transition-all"
                          style={{
                            width: `${Math.round((assignment.submittedCount / assignment.totalCount) * 100)}%`,
                          }}
                        />
                      </div>
                      <span className="text-[11px] text-white/50">
                        {assignment.submittedCount}/{assignment.totalCount} submitted
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ── Recent Student Submissions ──────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-400" />
            Recent Student Submissions
          </h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Student
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Title
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Score
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TEACHER_DEMO_SUBMISSIONS.map((sub: any) => (
                    <tr
                      key={sub.id}
                      className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/demo/teacher/students/${sub.studentId}`}
                          className="text-white/80 hover:text-emerald-400 transition-colors"
                        >
                          {sub.studentName}
                        </Link>
                        <p className="text-[11px] text-white/30">{sub.className}</p>
                      </td>
                      <td className="px-4 py-3 text-white/60">{sub.title}</td>
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={
                            sub.type === "essay"
                              ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                              : sub.type === "homework"
                                ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                          }
                        >
                          {sub.type}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <span className={scoreColor(Math.round((sub.score / sub.maxScore) * 100))}>
                          {sub.score}/{sub.maxScore}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-white/40 text-xs">
                        {sub.submittedAt}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── At-Risk Students ────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-400" />
            At-Risk Students in My Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {atRiskStudents.map((student: any) => (
              <Link
                key={`${student.classId}-${student.id}`}
                href={`/demo/teacher/students/${student.id}`}
                className="group rounded-xl border border-red-500/10 bg-red-500/[0.03] p-4 transition-all hover:border-red-500/20 hover:bg-red-500/[0.05]"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {ragDot(student.ragStatus)}
                    <span className="text-sm font-medium text-white/90">
                      {student.name}
                    </span>
                  </div>
                  <span className="text-xs text-white/30">{student.className}</span>
                </div>
                <p className="text-xs text-red-400/70 mb-2">{student.riskReason}</p>
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span>Score: {student.overallScore}%</span>
                  <span>Last active: {student.lastActive}</span>
                  <span className="flex items-center gap-1">
                    {trendIcon(student.trend)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Quick Actions ───────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Hammer,
                label: "Lesson Builder",
                href: "/demo/teacher/lessons",
                color: "from-purple-500/10 to-purple-500/5",
                border: "border-purple-500/10 hover:border-purple-500/20",
              },
              {
                icon: Users,
                label: "My Students",
                href: "/demo/teacher/students",
                color: "from-emerald-500/10 to-emerald-500/5",
                border: "border-emerald-500/10 hover:border-emerald-500/20",
              },
              {
                icon: FolderOpen,
                label: "Resources",
                href: "/demo/teacher/resources",
                color: "from-amber-500/10 to-amber-500/5",
                border: "border-amber-500/10 hover:border-amber-500/20",
              },
              {
                icon: BookOpen,
                label: "Mark Book",
                href: "/demo/teacher/classes",
                color: "from-blue-500/10 to-blue-500/5",
                border: "border-blue-500/10 hover:border-blue-500/20",
              },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`flex flex-col items-center gap-3 rounded-xl border bg-gradient-to-b ${action.color} ${action.border} p-5 transition-all hover:scale-[1.02]`}
              >
                <action.icon className="h-6 w-6 text-white/60" />
                <span className="text-sm text-white/70">{action.label}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="rounded-xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-emerald-500/5 p-8 text-center">
            <Rocket className="h-8 w-8 text-emerald-400 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-white/90 mb-2">
              Ready to use this with your own classes?
            </h2>
            <p className="text-sm text-white/50 mb-5 max-w-md mx-auto">
              Get real-time student analytics, AI-powered essay marking, and
              lesson planning tools -- all in one place.
            </p>
            <Button render={<Link href="/auth/teacher-register" />} size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

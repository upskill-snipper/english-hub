"use client"

import Link from "next/link"
import {
  Users,
  Clock,
  FileText,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Hammer,
  CalendarDays,
  Rocket,
  FolderOpen,
  CheckCircle,
  BarChart3,
  GraduationCap,
  ClipboardCheck,
  Target,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { percentageToGCSEGrade } from "@/lib/grades"
import {
  DEMO_TEACHER,
  TEACHER_DEMO_CLASSES,
  TEACHER_DEMO_LESSONS,
  TEACHER_DEMO_SUBMISSIONS,
  DEMO_STUDENTS,
  type DemoClass,
} from "@/data/demo-data"

// ── Helpers ──────────────────────────────────────────────────────────────────

function scoreColor(score: number) {
  if (score >= 70) return "text-green-400"
  if (score >= 50) return "text-clay-600"
  return "text-red-400"
}

function scoreBg(score: number) {
  if (score >= 70) return "bg-green-500"
  if (score >= 50) return "bg-amber-500"
  return "bg-red-500"
}

function ragBarSegments(cls: DemoClass) {
  const students = DEMO_STUDENTS.filter((s) => s.className === cls.name)
  const total = students.length || 1
  const green = students.filter((s) => s.status === "on-track" || s.status === "excelling").length
  const amber = students.filter((s) => s.status === "needs-support").length
  const red = students.filter((s) => s.status === "at-risk").length
  return { green: (green / total) * 100, amber: (amber / total) * 100, red: (red / total) * 100 }
}

function ProgressRing({ pct, size = 56, stroke = 4, color = "text-teal-700" }: { pct: number; size?: number; stroke?: number; color?: string }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (pct / 100) * circumference
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-ink-500/20" />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className={color} />
    </svg>
  )
}

function InitialsAvatar({ name, color = "bg-cream-100" }: { name: string; color?: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2)
  return (
    <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-xs font-semibold text-ink-900 shrink-0`}>
      {initials}
    </div>
  )
}

// ── Computed data ────────────────────────────────────────────────────────────

const totalStudents = TEACHER_DEMO_CLASSES.reduce((sum, cls) => sum + cls.studentCount, 0)
const avgClassScore = Math.round(TEACHER_DEMO_CLASSES.reduce((sum, cls) => sum + cls.avgScore, 0) / TEACHER_DEMO_CLASSES.length)

// At-risk students across teacher's classes
const atRiskStudents = TEACHER_DEMO_CLASSES.flatMap((cls: DemoClass) => {
  const students = DEMO_STUDENTS.filter((s) => s.className === cls.name)
  return students
    .filter((s) => s.atRisk)
    .map((s) => ({ ...s, className: cls.name, classId: cls.id }))
})

// Marking queue from TEACHER_DEMO_SUBMISSIONS
const pendingMarking = TEACHER_DEMO_SUBMISSIONS.filter((s) => s.status === "submitted" || s.status === "pending")
const markedCount = TEACHER_DEMO_SUBMISSIONS.filter((s) => s.status === "graded").length
const totalSubmissions = TEACHER_DEMO_SUBMISSIONS.length

// Assignments due this week
const assignmentsDueThisWeek = [
  { id: "a1", title: "Macbeth Act 3 Essay", className: "10A English Literature", dueDate: "Fri 4 Apr", submittedCount: 18, totalCount: 28 },
  { id: "a2", title: "Language P1 Q5 Practice", className: "10B English Language", dueDate: "Thu 3 Apr", submittedCount: 26, totalCount: 30 },
  { id: "a3", title: "Inspector Calls Revision Pack", className: "11A English Literature", dueDate: "Mon 7 Apr", submittedCount: 8, totalCount: 26 },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function TeacherDemoDashboard() {
  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-clay-600">
            <span className="font-semibold">Teacher Demo</span> -- See what your
            dashboard looks like
          </p>
        </div>

        {/* ── Hero Section ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="mb-6">
            <h1 className="text-3xl font-light tracking-tight text-ink-900">
              Welcome back, {DEMO_TEACHER.name.split(" ")[0]}
            </h1>
            <p className="text-ink-500 text-sm mt-1">
              {DEMO_TEACHER.department} Department -- Riverside Academy
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Classes Taught */}
            <div className="rounded-xl border border-teal-800/10 bg-gradient-to-br from-teal-800/10 via-teal-800/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-4 w-4 text-teal-700/70" />
                <span className="text-xs text-teal-700/70 font-medium uppercase tracking-wider">Classes</span>
              </div>
              <p className="text-3xl font-bold text-ink-900">{TEACHER_DEMO_CLASSES.length}</p>
              <p className="text-xs text-ink-500 mt-1">Across Years 10-13</p>
            </div>

            {/* Total Students */}
            <div className="rounded-xl border border-blue-500/10 bg-gradient-to-br from-teal-800/10 via-blue-500/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-teal-700/70" />
                <span className="text-xs text-teal-700/70 font-medium uppercase tracking-wider">Students</span>
              </div>
              <p className="text-3xl font-bold text-ink-900">{totalStudents}</p>
              <p className="text-xs text-ink-500 mt-1">{atRiskStudents.length} need attention</p>
            </div>

            {/* Average Class Score */}
            <div className="rounded-xl border border-clay-500/15 bg-gradient-to-br from-clay-500/10 via-purple-500/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-clay-600/70" />
                <span className="text-xs text-clay-600/70 font-medium uppercase tracking-wider">Avg Score</span>
              </div>
              <p className="text-3xl font-bold text-ink-900">{avgClassScore}% <span className="text-lg text-ink-500">(Grade {percentageToGCSEGrade(avgClassScore)})</span></p>
              <p className="text-xs text-ink-500 mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-400" /> +2% this term
              </p>
            </div>

            {/* Assignments Due */}
            <div className="rounded-xl border border-amber-500/10 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardCheck className="h-4 w-4 text-clay-600/70" />
                <span className="text-xs text-clay-600/70 font-medium uppercase tracking-wider">Due Soon</span>
              </div>
              <p className="text-3xl font-bold text-ink-900">{assignmentsDueThisWeek.length}</p>
              <p className="text-xs text-ink-500 mt-1">{pendingMarking.length} awaiting marking</p>
            </div>
          </div>
        </section>

        {/* ── At-Risk Students Banner ────────────────────────────────── */}
        {atRiskStudents.length > 0 && (
          <section className="mb-10">
            <div className="rounded-xl border border-red-500/15 bg-gradient-to-r from-red-500/[0.07] via-amber-500/[0.04] to-transparent p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h2 className="text-base font-medium text-ink-900">
                  {atRiskStudents.length} Students At Risk
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {atRiskStudents.slice(0, 6).map((student) => (
                  <Link
                    key={`${student.classId}-${student.id}`}
                    href={`/demo/teacher/students/${student.id}`}
                    className="group flex items-center gap-3 rounded-lg border border-ink-200 bg-white p-3 transition-all hover:border-red-500/20 hover:bg-red-500/[0.03]"
                  >
                    <InitialsAvatar name={student.name} color="bg-red-500/15" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-ink-900 truncate">{student.name}</p>
                      <p className="text-[11px] text-ink-500 truncate">{student.className}</p>
                      <p className="text-[11px] text-red-400/70 truncate mt-0.5">{student.riskReason}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`text-sm font-semibold ${scoreColor(student.averageScore)}`}>{student.averageScore}% (Grade {percentageToGCSEGrade(student.averageScore)})</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── My Classes ─────────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-ink-900 mb-4">My Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEACHER_DEMO_CLASSES.map((cls: DemoClass) => {
              const rag = ragBarSegments(cls)
              const atRiskCount = DEMO_STUDENTS.filter((s) => s.className === cls.name && s.atRisk).length
              return (
                <Link
                  key={cls.id}
                  href={`/demo/teacher/classes/${cls.id}`}
                  className="group rounded-xl border border-ink-200 bg-white p-5 transition-all hover:border-ink-200 hover:bg-white"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-medium text-ink-900">{cls.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-[11px]">Year {cls.yearGroup}</Badge>
                        <span className="text-[11px] text-ink-500">{cls.examBoard}</span>
                      </div>
                    </div>
                    {/* Progress ring for completion */}
                    <div className="relative">
                      <ProgressRing pct={cls.completionRate} size={48} stroke={3.5} />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-ink-600">
                        {cls.completionRate}%
                      </span>
                    </div>
                  </div>

                  {/* Average score as large number */}
                  <div className="mb-3">
                    <span className={`text-2xl font-bold ${scoreColor(cls.avgScore)}`}>{cls.avgScore}%</span>
                    <span className="text-xs text-ink-500 ml-2">avg score (Grade {percentageToGCSEGrade(cls.avgScore)})</span>
                  </div>

                  {/* RAG indicator bar */}
                  <div className="h-1.5 rounded-full overflow-hidden flex mb-3">
                    <div className="bg-green-500 transition-all" style={{ width: `${rag.green}%` }} />
                    <div className="bg-amber-500 transition-all" style={{ width: `${rag.amber}%` }} />
                    <div className="bg-red-500 transition-all" style={{ width: `${rag.red}%` }} />
                  </div>

                  {/* Bottom stats */}
                  <div className="flex items-center justify-between text-xs text-ink-500">
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> {cls.studentCount} students
                    </span>
                    {atRiskCount > 0 && (
                      <span className="text-red-400 flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" /> {atRiskCount} at risk
                      </span>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── Today's Overview + Assignments Due (side by side) ──────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Today's Lessons - timeline style */}
          <section>
            <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-teal-700" />
              Today&apos;s Lessons
            </h2>
            <div className="rounded-xl border border-ink-200 bg-white p-4">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-3 bottom-3 w-px bg-cream-100" />
                <div className="space-y-4">
                  {TEACHER_DEMO_LESSONS.map((lesson, idx) => (
                    <div key={lesson.id} className="flex items-start gap-4 relative">
                      {/* Timeline dot */}
                      <div className={`w-[9px] h-[9px] rounded-full mt-1.5 shrink-0 relative z-10 ${idx === 0 ? "bg-teal-600 ring-2 ring-emerald-400/20" : "bg-white/20"}`} />
                      <div className="flex-1 rounded-lg border border-ink-200 bg-white p-3">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-ink-900">{lesson.className}</p>
                          <span className="text-[11px] text-teal-700/70 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {lesson.time}
                          </span>
                        </div>
                        <p className="text-xs text-ink-500">{lesson.topic}</p>
                        <p className="text-[11px] text-ink-500 mt-0.5">{lesson.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Assignments Due */}
          <section>
            <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-teal-700" />
              Assignments Due
            </h2>
            <div className="rounded-xl border border-ink-200 bg-white p-4 space-y-3">
              {assignmentsDueThisWeek.map((assignment) => {
                const pct = Math.round((assignment.submittedCount / assignment.totalCount) * 100)
                return (
                  <div key={assignment.id} className="rounded-lg border border-ink-200 bg-white p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-ink-900">{assignment.title}</p>
                      <Badge variant="outline" className="text-[10px] border-teal-800/20 text-teal-700/70">{assignment.dueDate}</Badge>
                    </div>
                    <p className="text-xs text-ink-500 mb-2">{assignment.className}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-cream-100 overflow-hidden">
                        <div className={`h-1.5 rounded-full transition-all ${scoreBg(pct)}`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[11px] text-ink-500 whitespace-nowrap">
                        {assignment.submittedCount}/{assignment.totalCount}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>

        {/* ── Marking Queue ──────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-clay-600" />
            Marking Queue
          </h2>
          <div className="rounded-xl border border-ink-200 bg-white p-5">
            {/* Progress summary */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-ink-500">{markedCount} marked / {totalSubmissions} total</span>
                  <span className="text-ink-600 font-medium">{Math.round((markedCount / totalSubmissions) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-cream-100 overflow-hidden">
                  <div className="h-2 rounded-full bg-gradient-to-r from-clay-500 to-purple-400 transition-all" style={{ width: `${(markedCount / totalSubmissions) * 100}%` }} />
                </div>
              </div>
            </div>

            {/* Pending items list */}
            {pendingMarking.length > 0 ? (
              <div className="space-y-2">
                <p className="text-xs text-ink-500 font-medium uppercase tracking-wider mb-3">Needs Marking</p>
                {pendingMarking.map((item) => {
                  const student = DEMO_STUDENTS.find((s) => s.name === item.studentName)
                  return (
                    <div key={item.id} className="flex items-center gap-3 rounded-lg border border-clay-500/15 bg-clay-500/5 p-3">
                      <InitialsAvatar name={item.studentName} color="bg-clay-500/10" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-ink-900 truncate">{item.assignment}</p>
                        <p className="text-[11px] text-ink-500">{item.studentName} -- submitted {item.date}</p>
                      </div>
                      {student && (
                        <Button
                          render={<Link href={`/demo/teacher/students/${student.id}`} />}
                          variant="ghost"
                          size="sm"
                          className="text-clay-600 hover:text-clay-600 text-xs shrink-0"
                        >
                          View
                        </Button>
                      )}
                    </div>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <p className="text-sm text-ink-500">All caught up!</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Class Performance ───────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-teal-700" />
            Class Performance
          </h2>
          <div className="rounded-xl border border-ink-200 bg-white p-5 space-y-4">
            {TEACHER_DEMO_CLASSES.map((cls: DemoClass) => {
              const atRiskCount = DEMO_STUDENTS.filter((s) => s.className === cls.name && s.atRisk).length
              return (
                <div key={cls.id} className="flex items-center gap-4">
                  <Link
                    href={`/demo/teacher/classes/${cls.id}`}
                    className="w-44 shrink-0 text-sm text-ink-600 hover:text-teal-700 transition-colors truncate"
                  >
                    {cls.name}
                  </Link>
                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex-1 h-6 rounded bg-cream-100 overflow-hidden relative">
                      <div
                        className={`h-full rounded transition-all ${scoreBg(cls.avgScore)}`}
                        style={{ width: `${cls.avgScore}%` }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-ink-600">
                        {cls.avgScore}%
                      </span>
                    </div>
                    <span className="w-20 text-right text-xs text-ink-500">{cls.studentCount} students</span>
                  </div>
                  {atRiskCount > 0 && (
                    <span className="text-xs text-red-400 flex items-center gap-1 shrink-0">
                      <AlertTriangle className="h-3 w-3" /> {atRiskCount}
                    </span>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Quick Actions ───────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-ink-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Hammer,
                label: "Lesson Builder",
                desc: "Plan and create lessons",
                href: "/demo/teacher/lessons",
                gradient: "from-clay-500/10 to-clay-400/5",
                border: "border-clay-500/15 hover:border-clay-500/20",
                iconColor: "text-clay-600",
              },
              {
                icon: Users,
                label: "My Students",
                desc: "View student profiles",
                href: "/demo/teacher/students",
                gradient: "from-teal-800/10 to-teal-600/5",
                border: "border-teal-800/10 hover:border-teal-800/20",
                iconColor: "text-teal-700",
              },
              {
                icon: FolderOpen,
                label: "Resources",
                desc: "Teaching materials",
                href: "/demo/teacher/resources",
                gradient: "from-amber-500/10 to-amber-500/5",
                border: "border-amber-500/10 hover:border-amber-500/20",
                iconColor: "text-clay-600",
              },
              {
                icon: BookOpen,
                label: "Mark Book",
                desc: "Grades and records",
                href: "/demo/teacher/classes",
                gradient: "from-teal-800/10 to-teal-600/5",
                border: "border-blue-500/10 hover:border-teal-800/20",
                iconColor: "text-teal-700",
              },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`flex flex-col items-center gap-2 rounded-xl border bg-gradient-to-b ${action.gradient} ${action.border} p-5 transition-all hover:scale-[1.02]`}
              >
                <action.icon className={`h-7 w-7 ${action.iconColor}`} />
                <span className="text-sm font-medium text-ink-900">{action.label}</span>
                <span className="text-[11px] text-ink-500">{action.desc}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="rounded-xl border border-teal-800/20 bg-gradient-to-r from-teal-800/10 to-teal-600/5 p-8 text-center">
            <Rocket className="h-8 w-8 text-teal-700 mx-auto mb-3" />
            <h2 className="text-xl font-semibold text-ink-900 mb-2">
              Ready to use this with your own classes?
            </h2>
            <p className="text-sm text-ink-500 mb-5 max-w-md mx-auto">
              Get real-time student analytics, AI-powered essay marking, and
              lesson planning tools -- all in one place.
            </p>
            <Button render={<Link href="/auth/teacher-register" />} size="lg" className="bg-teal-800 hover:bg-teal-700 text-white">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

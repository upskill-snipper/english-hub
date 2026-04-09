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
  if (score >= 50) return "text-amber-400"
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

function ProgressRing({ pct, size = 56, stroke = 4, color = "text-emerald-400" }: { pct: number; size?: number; stroke?: number; color?: string }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (pct / 100) * circumference
  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} className="text-white/5" />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={stroke} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className={color} />
    </svg>
  )
}

function InitialsAvatar({ name, color = "bg-white/10" }: { name: string; color?: string }) {
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2)
  return (
    <div className={`w-9 h-9 rounded-full ${color} flex items-center justify-center text-xs font-semibold text-white/80 shrink-0`}>
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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-amber-400">
            <span className="font-semibold">Teacher Demo</span> -- See what your
            dashboard looks like
          </p>
        </div>

        {/* ── Hero Section ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="mb-6">
            <h1 className="text-3xl font-light tracking-tight text-white/90">
              Welcome back, {DEMO_TEACHER.name.split(" ")[0]}
            </h1>
            <p className="text-white/40 text-sm mt-1">
              {DEMO_TEACHER.department} Department -- Riverside Academy
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Classes Taught */}
            <div className="rounded-xl border border-emerald-500/10 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-4 w-4 text-emerald-400/70" />
                <span className="text-xs text-emerald-400/70 font-medium uppercase tracking-wider">Classes</span>
              </div>
              <p className="text-3xl font-bold text-white/90">{TEACHER_DEMO_CLASSES.length}</p>
              <p className="text-xs text-white/30 mt-1">Across Years 10-13</p>
            </div>

            {/* Total Students */}
            <div className="rounded-xl border border-blue-500/10 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-blue-400/70" />
                <span className="text-xs text-blue-400/70 font-medium uppercase tracking-wider">Students</span>
              </div>
              <p className="text-3xl font-bold text-white/90">{totalStudents}</p>
              <p className="text-xs text-white/30 mt-1">{atRiskStudents.length} need attention</p>
            </div>

            {/* Average Class Score */}
            <div className="rounded-xl border border-purple-500/10 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-purple-400/70" />
                <span className="text-xs text-purple-400/70 font-medium uppercase tracking-wider">Avg Score</span>
              </div>
              <p className="text-3xl font-bold text-white/90">{avgClassScore}% <span className="text-lg text-white/50">(Grade {percentageToGCSEGrade(avgClassScore)})</span></p>
              <p className="text-xs text-white/30 mt-1 flex items-center gap-1">
                <TrendingUp className="h-3 w-3 text-green-400" /> +2% this term
              </p>
            </div>

            {/* Assignments Due */}
            <div className="rounded-xl border border-amber-500/10 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-5">
              <div className="flex items-center gap-2 mb-3">
                <ClipboardCheck className="h-4 w-4 text-amber-400/70" />
                <span className="text-xs text-amber-400/70 font-medium uppercase tracking-wider">Due Soon</span>
              </div>
              <p className="text-3xl font-bold text-white/90">{assignmentsDueThisWeek.length}</p>
              <p className="text-xs text-white/30 mt-1">{pendingMarking.length} awaiting marking</p>
            </div>
          </div>
        </section>

        {/* ── At-Risk Students Banner ────────────────────────────────── */}
        {atRiskStudents.length > 0 && (
          <section className="mb-10">
            <div className="rounded-xl border border-red-500/15 bg-gradient-to-r from-red-500/[0.07] via-amber-500/[0.04] to-transparent p-5">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                <h2 className="text-base font-medium text-white/80">
                  {atRiskStudents.length} Students At Risk
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {atRiskStudents.slice(0, 6).map((student) => (
                  <Link
                    key={`${student.classId}-${student.id}`}
                    href={`/demo/teacher/students/${student.id}`}
                    className="group flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] p-3 transition-all hover:border-red-500/20 hover:bg-red-500/[0.03]"
                  >
                    <InitialsAvatar name={student.name} color="bg-red-500/15" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-white/90 truncate">{student.name}</p>
                      <p className="text-[11px] text-white/30 truncate">{student.className}</p>
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
          <h2 className="text-lg font-medium text-white/80 mb-4">My Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TEACHER_DEMO_CLASSES.map((cls: DemoClass) => {
              const rag = ragBarSegments(cls)
              const atRiskCount = DEMO_STUDENTS.filter((s) => s.className === cls.name && s.atRisk).length
              return (
                <Link
                  key={cls.id}
                  href={`/demo/teacher/classes/${cls.id}`}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-base font-medium text-white/90">{cls.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-[11px]">Year {cls.yearGroup}</Badge>
                        <span className="text-[11px] text-white/30">{cls.examBoard}</span>
                      </div>
                    </div>
                    {/* Progress ring for completion */}
                    <div className="relative">
                      <ProgressRing pct={cls.completionRate} size={48} stroke={3.5} />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-white/70">
                        {cls.completionRate}%
                      </span>
                    </div>
                  </div>

                  {/* Average score as large number */}
                  <div className="mb-3">
                    <span className={`text-2xl font-bold ${scoreColor(cls.avgScore)}`}>{cls.avgScore}%</span>
                    <span className="text-xs text-white/30 ml-2">avg score (Grade {percentageToGCSEGrade(cls.avgScore)})</span>
                  </div>

                  {/* RAG indicator bar */}
                  <div className="h-1.5 rounded-full overflow-hidden flex mb-3">
                    <div className="bg-green-500 transition-all" style={{ width: `${rag.green}%` }} />
                    <div className="bg-amber-500 transition-all" style={{ width: `${rag.amber}%` }} />
                    <div className="bg-red-500 transition-all" style={{ width: `${rag.red}%` }} />
                  </div>

                  {/* Bottom stats */}
                  <div className="flex items-center justify-between text-xs text-white/40">
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
            <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-emerald-400" />
              Today&apos;s Lessons
            </h2>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-3 bottom-3 w-px bg-white/5" />
                <div className="space-y-4">
                  {TEACHER_DEMO_LESSONS.map((lesson, idx) => (
                    <div key={lesson.id} className="flex items-start gap-4 relative">
                      {/* Timeline dot */}
                      <div className={`w-[9px] h-[9px] rounded-full mt-1.5 shrink-0 relative z-10 ${idx === 0 ? "bg-emerald-400 ring-2 ring-emerald-400/20" : "bg-white/20"}`} />
                      <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-3">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-white/90">{lesson.className}</p>
                          <span className="text-[11px] text-emerald-400/70 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {lesson.time}
                          </span>
                        </div>
                        <p className="text-xs text-white/40">{lesson.topic}</p>
                        <p className="text-[11px] text-white/20 mt-0.5">{lesson.room}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Assignments Due */}
          <section>
            <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-400" />
              Assignments Due
            </h2>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 space-y-3">
              {assignmentsDueThisWeek.map((assignment) => {
                const pct = Math.round((assignment.submittedCount / assignment.totalCount) * 100)
                return (
                  <div key={assignment.id} className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-white/90">{assignment.title}</p>
                      <Badge variant="outline" className="text-[10px] border-blue-500/20 text-blue-400/70">{assignment.dueDate}</Badge>
                    </div>
                    <p className="text-xs text-white/30 mb-2">{assignment.className}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className={`h-1.5 rounded-full transition-all ${scoreBg(pct)}`} style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[11px] text-white/50 whitespace-nowrap">
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
          <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
            <ClipboardCheck className="h-5 w-5 text-purple-400" />
            Marking Queue
          </h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
            {/* Progress summary */}
            <div className="flex items-center gap-4 mb-5">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-white/50">{markedCount} marked / {totalSubmissions} total</span>
                  <span className="text-white/70 font-medium">{Math.round((markedCount / totalSubmissions) * 100)}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all" style={{ width: `${(markedCount / totalSubmissions) * 100}%` }} />
                </div>
              </div>
            </div>

            {/* Pending items list */}
            {pendingMarking.length > 0 ? (
              <div className="space-y-2">
                <p className="text-xs text-white/30 font-medium uppercase tracking-wider mb-3">Needs Marking</p>
                {pendingMarking.map((item) => {
                  const student = DEMO_STUDENTS.find((s) => s.name === item.studentName)
                  return (
                    <div key={item.id} className="flex items-center gap-3 rounded-lg border border-purple-500/10 bg-purple-500/[0.03] p-3">
                      <InitialsAvatar name={item.studentName} color="bg-purple-500/15" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white/80 truncate">{item.assignment}</p>
                        <p className="text-[11px] text-white/30">{item.studentName} -- submitted {item.date}</p>
                      </div>
                      {student && (
                        <Button
                          render={<Link href={`/demo/teacher/students/${student.id}`} />}
                          variant="ghost"
                          size="sm"
                          className="text-purple-400 hover:text-purple-300 text-xs shrink-0"
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
                <p className="text-sm text-white/50">All caught up!</p>
              </div>
            )}
          </div>
        </section>

        {/* ── Class Performance ───────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-cyan-400" />
            Class Performance
          </h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5 space-y-4">
            {TEACHER_DEMO_CLASSES.map((cls: DemoClass) => {
              const atRiskCount = DEMO_STUDENTS.filter((s) => s.className === cls.name && s.atRisk).length
              return (
                <div key={cls.id} className="flex items-center gap-4">
                  <Link
                    href={`/demo/teacher/classes/${cls.id}`}
                    className="w-44 shrink-0 text-sm text-white/70 hover:text-emerald-400 transition-colors truncate"
                  >
                    {cls.name}
                  </Link>
                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex-1 h-6 rounded bg-white/5 overflow-hidden relative">
                      <div
                        className={`h-full rounded transition-all ${scoreBg(cls.avgScore)}`}
                        style={{ width: `${cls.avgScore}%` }}
                      />
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-medium text-white/70">
                        {cls.avgScore}%
                      </span>
                    </div>
                    <span className="w-20 text-right text-xs text-white/40">{cls.studentCount} students</span>
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
          <h2 className="text-lg font-medium text-white/80 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                icon: Hammer,
                label: "Lesson Builder",
                desc: "Plan and create lessons",
                href: "/demo/teacher/lessons",
                gradient: "from-purple-500/10 to-purple-500/5",
                border: "border-purple-500/10 hover:border-purple-500/20",
                iconColor: "text-purple-400",
              },
              {
                icon: Users,
                label: "My Students",
                desc: "View student profiles",
                href: "/demo/teacher/students",
                gradient: "from-emerald-500/10 to-emerald-500/5",
                border: "border-emerald-500/10 hover:border-emerald-500/20",
                iconColor: "text-emerald-400",
              },
              {
                icon: FolderOpen,
                label: "Resources",
                desc: "Teaching materials",
                href: "/demo/teacher/resources",
                gradient: "from-amber-500/10 to-amber-500/5",
                border: "border-amber-500/10 hover:border-amber-500/20",
                iconColor: "text-amber-400",
              },
              {
                icon: BookOpen,
                label: "Mark Book",
                desc: "Grades and records",
                href: "/demo/teacher/classes",
                gradient: "from-blue-500/10 to-blue-500/5",
                border: "border-blue-500/10 hover:border-blue-500/20",
                iconColor: "text-blue-400",
              },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`flex flex-col items-center gap-2 rounded-xl border bg-gradient-to-b ${action.gradient} ${action.border} p-5 transition-all hover:scale-[1.02]`}
              >
                <action.icon className={`h-7 w-7 ${action.iconColor}`} />
                <span className="text-sm font-medium text-white/80">{action.label}</span>
                <span className="text-[11px] text-white/30">{action.desc}</span>
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

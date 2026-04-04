"use client"

import { useParams } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Target,
  Flag,
  MessageSquare,
  Send,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  FileText,
  ClipboardList,
  Clock,
  BarChart3,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DEMO_STUDENTS } from "@/data/demo-data"

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

function statusBadge(status: string) {
  const styles: Record<string, string> = {
    "Excelling": "bg-green-500/10 text-green-400 border-green-500/20",
    "On Track": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "Needs Support": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "At Risk": "bg-red-500/10 text-red-400 border-red-500/20",
  }
  return styles[status] || "bg-neutral-500/10 text-neutral-400 border-neutral-500/20"
}

function showToast(msg: string) {
  const toast = document.getElementById("demo-toast")
  if (toast) {
    toast.textContent = msg
    toast.classList.remove("opacity-0", "translate-y-2")
    toast.classList.add("opacity-100", "translate-y-0")
    setTimeout(() => {
      toast.classList.remove("opacity-100", "translate-y-0")
      toast.classList.add("opacity-0", "translate-y-2")
    }, 2500)
  }
}

export default function TeacherStudentProfilePage() {
  const params = useParams()
  const studentId = params.id as string
  const [comment, setComment] = useState("")

  const studentIdx = DEMO_STUDENTS.findIndex((s) => s.id === studentId)
  const student = DEMO_STUDENTS[studentIdx]

  if (!student) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-white/90 mb-2">Student Not Found</h1>
          <p className="text-neutral-500 text-sm mb-6">This student is not in your classes.</p>
          <Link
            href="/demo/teacher/classes"
            className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
          >
            &larr; Back to My Classes
          </Link>
        </div>
      </div>
    )
  }

  // Class average calculations
  const classmates = DEMO_STUDENTS.filter((s) => s.classId === student.classId)
  const classAvgScore = classmates.length > 0
    ? Math.round(classmates.reduce((sum, s) => sum + s.averageScore, 0) / classmates.length)
    : 0
  const classAvgProgress = classmates.length > 0
    ? Math.round(classmates.reduce((sum, s) => sum + s.overallProgress, 0) / classmates.length)
    : 0
  const classAvgAssignments = classmates.length > 0
    ? Math.round(classmates.reduce((sum, s) => sum + s.assignmentsCompleted, 0) / classmates.length)
    : 0

  const prevStudent = studentIdx > 0 ? DEMO_STUDENTS[studentIdx - 1] : null
  const nextStudent = studentIdx < DEMO_STUDENTS.length - 1 ? DEMO_STUDENTS[studentIdx + 1] : null
  const maxTrend = Math.max(...student.recentScores, 1)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3">
          <p className="text-sm text-amber-400">
            <span className="font-semibold">Teacher Demo</span> -- Viewing sample student profile
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/demo/teacher/classes"
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white/70 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> My Classes
          </Link>
          <div className="flex items-center gap-3">
            {prevStudent && (
              <Link
                href={`/demo/teacher/students/${prevStudent.id}`}
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white/70 transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> Previous
              </Link>
            )}
            {nextStudent && (
              <Link
                href={`/demo/teacher/students/${nextStudent.id}`}
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white/70 transition-colors"
              >
                Next <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Student Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div
            className={`h-14 w-14 shrink-0 rounded-full flex items-center justify-center text-lg font-medium ${
              student.status === "At Risk"
                ? "bg-red-500/15 text-red-400"
                : student.status === "Excelling"
                ? "bg-green-500/15 text-green-400"
                : "bg-gradient-to-br from-white/10 to-white/5 text-white/60"
            }`}
          >
            {student.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-white/90">
              {student.name}
            </h1>
            <p className="text-neutral-500 text-sm mt-1">
              {student.yearGroup} -- {student.className} -- {student.teacherName}
            </p>
          </div>
          <Badge className={`${statusBadge(student.status)} border text-xs`}>
            {student.status}
          </Badge>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Progress</p>
              <p className={`text-3xl font-light tabular-nums ${scoreColor(student.overallProgress)}`}>
                {student.overallProgress}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Avg Score</p>
              <p className={`text-3xl font-light tabular-nums ${scoreColor(student.averageScore)}`}>
                {student.averageScore}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Assignments</p>
              <p className="text-3xl font-light text-cyan-400 tabular-nums">
                {student.assignmentsCompleted}/{student.assignmentsTotal}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/5">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">Modules Done</p>
              <p className="text-3xl font-light text-violet-400 tabular-nums">
                {student.modulesCompleted}/{student.modules.length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Teacher Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant="outline"
            size="sm"
            className="bg-violet-500/10 text-violet-400 border-violet-500/20 hover:bg-violet-500/20"
            onClick={() => showToast("Available with full account")}
          >
            <Target className="h-3.5 w-3.5 mr-1.5" />
            Set Target Grade
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20"
            onClick={() => showToast("Available with full account")}
          >
            <Flag className="h-3.5 w-3.5 mr-1.5" />
            Flag for Intervention
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20"
            onClick={() => showToast("Available with full account")}
          >
            <Send className="h-3.5 w-3.5 mr-1.5" />
            Send Progress Report
          </Button>
        </div>

        {/* Score Trend Chart */}
        <Card className="bg-white/[0.02] border-white/5 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-cyan-400" />
              Score Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 h-32">
              {student.recentScores.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-neutral-500 tabular-nums">{val}</span>
                  <div
                    className={`w-full rounded-sm transition-all ${
                      val >= 70 ? "bg-emerald-500/60" : val >= 50 ? "bg-amber-500/60" : "bg-red-500/60"
                    }`}
                    style={{ height: `${(val / maxTrend) * 100}%` }}
                  />
                  <span className="text-[9px] text-neutral-600">W{i + 1}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Card className="bg-white/[0.02] border-white/5">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-emerald-400 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {student.strengths.map((s, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-300">{s.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${s.score}%` }} />
                      </div>
                      <span className="text-xs text-emerald-400 tabular-nums w-8 text-right">{s.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/[0.02] border-white/5">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-red-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Weaknesses
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {student.weaknesses.map((w, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-300">{w.name}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full bg-red-500" style={{ width: `${w.score}%` }} />
                      </div>
                      <span className="text-xs text-red-400 tabular-nums w-8 text-right">{w.score}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compare with Class Average */}
        <Card className="bg-white/[0.02] border-white/5 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white/80">
              Compare with Class Average ({student.className})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Progress comparison */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Progress</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-cyan-400">{student.name.split(" ")[0]}</span>
                      <span className="text-neutral-500 tabular-nums">{student.overallProgress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-cyan-500" style={{ width: `${student.overallProgress}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-neutral-500">Class Avg</span>
                      <span className="text-neutral-500 tabular-nums">{classAvgProgress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-neutral-600" style={{ width: `${classAvgProgress}%` }} />
                    </div>
                  </div>
                </div>
                <p className={`text-xs mt-2 ${student.overallProgress >= classAvgProgress ? "text-emerald-400" : "text-red-400"}`}>
                  {student.overallProgress >= classAvgProgress
                    ? `+${student.overallProgress - classAvgProgress}% above average`
                    : `${classAvgProgress - student.overallProgress}% below average`}
                </p>
              </div>

              {/* Score comparison */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Avg Score</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-cyan-400">{student.name.split(" ")[0]}</span>
                      <span className="text-neutral-500 tabular-nums">{student.averageScore}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-cyan-500" style={{ width: `${student.averageScore}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-neutral-500">Class Avg</span>
                      <span className="text-neutral-500 tabular-nums">{classAvgScore}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full rounded-full bg-neutral-600" style={{ width: `${classAvgScore}%` }} />
                    </div>
                  </div>
                </div>
                <p className={`text-xs mt-2 ${student.averageScore >= classAvgScore ? "text-emerald-400" : "text-red-400"}`}>
                  {student.averageScore >= classAvgScore
                    ? `+${student.averageScore - classAvgScore}% above average`
                    : `${classAvgScore - student.averageScore}% below average`}
                </p>
              </div>

              {/* Assignments comparison */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">Assignments Done</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-light text-cyan-400 tabular-nums">{student.assignmentsCompleted}</span>
                  <span className="text-neutral-500 text-sm">vs class avg</span>
                  <span className="text-2xl font-light text-neutral-500 tabular-nums">{classAvgAssignments}</span>
                </div>
                <p className={`text-xs mt-2 ${student.assignmentsCompleted >= classAvgAssignments ? "text-emerald-400" : "text-red-400"}`}>
                  {student.assignmentsCompleted >= classAvgAssignments
                    ? `${student.assignmentsCompleted - classAvgAssignments} ahead`
                    : `${classAvgAssignments - student.assignmentsCompleted} behind`}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module Progress */}
        <Card className="bg-white/[0.02] border-white/5 overflow-hidden mb-8">
          <CardHeader className="border-b border-white/5">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-violet-400" /> Module Progress
            </CardTitle>
          </CardHeader>
          <div className="hidden sm:grid grid-cols-[1fr_160px_80px_80px] gap-4 px-5 py-2 border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Module</span>
            <span>Progress</span>
            <span className="text-right">Score</span>
            <span className="text-right">Status</span>
          </div>
          {student.modules.map((mod, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_160px_80px_80px] gap-1 sm:gap-4 px-5 py-3 border-b border-white/[0.03]">
              <p className="text-sm text-white/80">{mod.name}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${scoreBg(mod.progress)}`}
                    style={{ width: `${mod.progress}%` }}
                  />
                </div>
                <span className="text-xs text-neutral-500 tabular-nums w-8 text-right">{mod.progress}%</span>
              </div>
              <p className={`text-sm tabular-nums text-right ${mod.score > 0 ? scoreColor(mod.score) : "text-neutral-600"}`}>
                {mod.score > 0 ? `${mod.score}%` : "--"}
              </p>
              <div className="text-right">
                <Badge
                  variant="outline"
                  className={`text-[10px] ${
                    mod.status === "Complete"
                      ? "border-green-500/20 text-green-400"
                      : mod.status === "In Progress"
                      ? "border-amber-500/20 text-amber-400"
                      : "border-neutral-500/20 text-neutral-500"
                  }`}
                >
                  {mod.status}
                </Badge>
              </div>
            </div>
          ))}
        </Card>

        {/* Mock Exam Results */}
        <Card className="bg-white/[0.02] border-white/5 overflow-hidden mb-8">
          <CardHeader className="border-b border-white/5">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-blue-400" /> Mock Exam Results
            </CardTitle>
          </CardHeader>
          <div className="hidden sm:grid grid-cols-[1fr_100px_80px_60px] gap-4 px-5 py-2 border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Exam</span>
            <span>Date</span>
            <span className="text-center">Score</span>
            <span className="text-center">Grade</span>
          </div>
          {student.mockExams.map((exam, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_100px_80px_60px] gap-1 sm:gap-4 px-5 py-3 border-b border-white/[0.03]">
              <p className="text-sm text-white/80">{exam.name}</p>
              <p className="text-sm text-neutral-500">{exam.date}</p>
              <p className={`text-sm tabular-nums text-center ${scoreColor(exam.score)}`}>{exam.score}%</p>
              <p className="text-sm font-medium text-center text-white/70">{exam.grade}</p>
            </div>
          ))}
        </Card>

        {/* Essay Submissions */}
        <Card className="bg-white/[0.02] border-white/5 overflow-hidden mb-8">
          <CardHeader className="border-b border-white/5">
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <FileText className="h-4 w-4 text-emerald-400" /> Essay Submissions
            </CardTitle>
          </CardHeader>
          {student.essays.map((essay, i) => (
            <div key={i} className="px-5 py-4 border-b border-white/[0.03]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-white/80">{essay.title}</p>
                  {essay.teacherReviewed && (
                    <Badge variant="outline" className="text-[9px] border-green-500/20 text-green-400">
                      Reviewed
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-500">{essay.date}</span>
                  <span className={`text-sm tabular-nums font-medium ${scoreColor(essay.score)}`}>
                    {essay.score}%
                  </span>
                </div>
              </div>
              <p className="text-xs text-neutral-400 italic">{essay.feedback}</p>
            </div>
          ))}
        </Card>

        {/* Quiz Attempts */}
        <Card className="bg-white/[0.02] border-white/5 overflow-hidden mb-8">
          <CardHeader className="border-b border-white/5">
            <CardTitle className="text-sm font-medium text-white/80">Quiz Attempts</CardTitle>
          </CardHeader>
          <div className="hidden sm:grid grid-cols-[1fr_100px_100px] gap-4 px-5 py-2 border-b border-white/5 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span>Quiz</span>
            <span>Date</span>
            <span className="text-right">Score</span>
          </div>
          {student.quizAttempts.map((quiz, i) => {
            const pct = Math.round((quiz.score / quiz.maxScore) * 100)
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_100px_100px] gap-1 sm:gap-4 px-5 py-3 border-b border-white/[0.03]">
                <p className="text-sm text-white/80">{quiz.name}</p>
                <p className="text-sm text-neutral-500">{quiz.date}</p>
                <p className={`text-sm tabular-nums text-right ${scoreColor(pct)}`}>
                  {quiz.score}/{quiz.maxScore} ({pct}%)
                </p>
              </div>
            )
          })}
        </Card>

        {/* Activity Timeline */}
        <Card className="bg-white/[0.02] border-white/5 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Clock className="h-4 w-4 text-neutral-400" /> Activity Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {student.activityTimeline.map((item, i) => {
                const isPositive = item.action === "Completed" || item.action === "Submitted" || item.action.startsWith("Achieved") || item.action.startsWith("Scored")
                const isNegative = item.action === "Absent" || item.action === "Incomplete" || item.action.includes("late")
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center mt-1">
                      <div className={`h-2 w-2 rounded-full ${isPositive ? "bg-emerald-500" : isNegative ? "bg-red-500" : "bg-cyan-500"}`} />
                      {i < student.activityTimeline.length - 1 && (
                        <div className="w-px h-6 bg-white/5 mt-1" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white/70">
                        <span className={`font-medium ${isPositive ? "text-emerald-400" : isNegative ? "text-red-400" : "text-cyan-400"}`}>
                          {item.action}
                        </span>
                        {" -- "}
                        {item.detail}
                      </p>
                      <p className="text-[11px] text-neutral-600">{item.date}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-white/[0.02] border-white/5 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Target className="h-4 w-4 text-cyan-400" /> Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {student.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-[10px] text-cyan-400 tabular-nums">
                    {i + 1}
                  </span>
                  {rec}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Write Comment (Teacher Action) */}
        <Card className="bg-white/[0.02] border-white/5 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-white/80 flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-white/50" /> Write Comment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a note or comment about this student..."
              className="w-full h-24 bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3 text-sm text-white/80 placeholder-neutral-600 resize-none focus:outline-none focus:border-white/10 transition-colors"
            />
            <div className="flex justify-end mt-3">
              <Button
                variant="outline"
                size="sm"
                className="text-white/60 border-white/10 hover:border-white/20"
                onClick={() => {
                  showToast("Comment saved (available with full account)")
                  setComment("")
                }}
              >
                Save Comment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Demo data -- {student.name} -- {student.className}
        </p>
      </div>

      {/* Toast */}
      <div
        id="demo-toast"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-sm px-5 py-3 rounded-xl opacity-0 translate-y-2 transition-all duration-300 pointer-events-none z-50"
      />
    </div>
  )
}

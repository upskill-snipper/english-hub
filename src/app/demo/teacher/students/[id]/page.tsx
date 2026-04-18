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
  Sparkles,
  XCircle,
  Lightbulb,
  Award,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DEMO_STUDENTS, type DemoStudent } from "@/data/demo-data"
import {
  percentageToGCSEGrade,
  percentageToGCSEGradeLabel,
  gcseGradeColor,
  formatPercentageWithGrade,
  predictedGradeColor,
  predictedGradeBg,
  getGradeRecommendation,
  getPersonalisedRecommendations,
  isGCSEYearGroup,
  formatScoreForYearGroup,
} from "@/lib/grades"
import GradeProgressCard from "@/components/GradeProgressCard"
import GradeRecommendations from "@/components/GradeRecommendations"
import ReadingProfileCard from "@/components/ReadingProfileCard"

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
    "excelling": "bg-green-500/10 text-green-400 border-green-500/20",
    "on-track": "bg-teal-800/10 text-teal-700 border-teal-800/20",
    "needs-support": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    "at-risk": "bg-red-500/10 text-red-400 border-red-500/20",
  }
  return styles[status] || "bg-ink-200/10 text-ink-600 border-neutral-500/20"
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

  const studentIdx = DEMO_STUDENTS.findIndex((s: DemoStudent) => s.id === studentId)
  const student = DEMO_STUDENTS[studentIdx]

  if (!student) {
    return (
      <div className="min-h-screen bg-cream-50 text-ink-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-ink-900 mb-2">Student Not Found</h1>
          <p className="text-ink-500 text-sm mb-6">This student is not in your classes.</p>
          <Link
            href="/demo/teacher/classes"
            className="text-teal-700 hover:text-teal-700 text-sm transition-colors"
          >
            &larr; Back to My Classes
          </Link>
        </div>
      </div>
    )
  }

  // Class average calculations
  const classmates = DEMO_STUDENTS.filter((s: DemoStudent) => s.classId === student.classId)
  const classAvgScore = classmates.length > 0
    ? Math.round(classmates.reduce((sum: number, s: DemoStudent) => sum + s.averageScore, 0) / classmates.length)
    : 0
  const classAvgProgress = classmates.length > 0
    ? Math.round(classmates.reduce((sum: number, s: DemoStudent) => sum + s.overallProgress, 0) / classmates.length)
    : 0
  const classAvgAssignments = classmates.length > 0
    ? Math.round(classmates.reduce((sum: number, s: DemoStudent) => sum + s.assignmentsCompleted, 0) / classmates.length)
    : 0

  const prevStudent = studentIdx > 0 ? DEMO_STUDENTS[studentIdx - 1] : null
  const nextStudent = studentIdx < DEMO_STUDENTS.length - 1 ? DEMO_STUDENTS[studentIdx + 1] : null
  const maxTrend = Math.max(...student.recentScores, 1)

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
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
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-ink-500 hover:text-ink-600 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> My Classes
          </Link>
          <div className="flex items-center gap-3">
            {prevStudent && (
              <Link
                href={`/demo/teacher/students/${prevStudent.id}`}
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-ink-500 hover:text-ink-600 transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> Previous
              </Link>
            )}
            {nextStudent && (
              <Link
                href={`/demo/teacher/students/${nextStudent.id}`}
                className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.2em] text-ink-500 hover:text-ink-600 transition-colors"
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
              student.status === "at-risk"
                ? "bg-red-500/15 text-red-400"
                : student.status === "excelling"
                ? "bg-green-500/15 text-green-400"
                : "bg-gradient-to-br from-white/10 to-white/5 text-ink-600"
            }`}
          >
            {student.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2)}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-ink-900">
              {student.name}
            </h1>
            <p className="text-ink-500 text-sm mt-1">
              {student.yearGroup} -- {student.className} -- {student.teacherName}
            </p>
          </div>
          <Badge className={`${statusBadge(student.status)} border text-xs`}>
            {student.status}
          </Badge>
        </div>

        {/* Grade Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          <Card className="bg-white border-ink-200">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">Working At Grade</p>
              <p className={`text-3xl font-light tabular-nums ${gcseGradeColor(student.workingAtGrade)}`}>
                Grade {student.workingAtGrade}
              </p>
              <p className="text-[11px] text-ink-500 mt-1">Based on last 5 assessments</p>
            </CardContent>
          </Card>
          <Card className={`border ${predictedGradeBg(student.predictedGrade, student.workingAtGrade)}`}>
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">Predicted Grade</p>
              <p className={`text-3xl font-light tabular-nums ${predictedGradeColor(student.predictedGrade, student.workingAtGrade)}`}>
                Grade {student.predictedGrade}
              </p>
              <p className="text-[11px] text-ink-500 mt-1">
                {student.predictedGrade > student.workingAtGrade ? "Improving trajectory" : student.predictedGrade === student.workingAtGrade ? "Stable trajectory" : "Declining trajectory"}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-teal-800/20">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">Target Grade</p>
              <p className="text-3xl font-light text-teal-700 tabular-nums">
                Grade {student.targetGrade}
              </p>
              <p className="text-[11px] text-ink-500 mt-1">
                {student.targetGrade - student.workingAtGrade > 0
                  ? `${student.targetGrade - student.workingAtGrade} grade${student.targetGrade - student.workingAtGrade > 1 ? "s" : ""} to target`
                  : "At target"}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          <Card className="bg-white border-ink-200">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">Progress</p>
              <p className={`text-3xl font-light tabular-nums ${scoreColor(student.overallProgress)}`}>
                {student.overallProgress}%
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-ink-200">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">
                {isGCSEYearGroup(student.yearGroup) ? "Average Grade" : "Avg Score"}
              </p>
              <p className={`text-3xl font-light tabular-nums ${isGCSEYearGroup(student.yearGroup) ? gcseGradeColor(percentageToGCSEGrade(student.averageScore)) : scoreColor(student.averageScore)}`}>
                {formatScoreForYearGroup(student.averageScore, student.yearGroup)}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-ink-200">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">Assignments</p>
              <p className="text-3xl font-light text-teal-700 tabular-nums">
                {student.assignmentsCompleted}/{student.assignmentsTotal}
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white border-ink-200">
            <CardContent className="p-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-1">Modules Done</p>
              <p className="text-3xl font-light text-teal-700 tabular-nums">
                {student.modulesCompleted}/{student.modules.length}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How to Reach Next Grade */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-amber-400" />
              How to Reach the Next Grade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {getPersonalisedRecommendations(
                student.workingAtGrade,
                student.weaknesses.map((w) => typeof w === "string" ? w : w.name)
              ).map((rec, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg border border-ink-200 bg-white p-3">
                  <span className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-amber-500/15 text-amber-400 flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-ink-600">{rec}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Teacher Action Buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Button
            variant="outline"
            size="sm"
            className="bg-teal-800/10 text-teal-700 border-teal-800/20 hover:bg-teal-700/20"
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
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-teal-700" />
              Score Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2 h-32">
              {student.recentScores.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-ink-500 tabular-nums">{val}</span>
                  <div
                    className={`w-full rounded-sm transition-all ${
                      val >= 70 ? "bg-teal-700/60" : val >= 50 ? "bg-amber-500/60" : "bg-red-500/60"
                    }`}
                    style={{ height: `${(val / maxTrend) * 100}%` }}
                  />
                  <span className="text-[9px] text-ink-500">W{i + 1}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ── Grade Recommendations (Teacher View) ──────────────────── */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-teal-700" />
              Next Grade Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <GradeProgressCard
                currentGrade={percentageToGCSEGrade(student.averageScore)}
                predictedGrade={percentageToGCSEGrade(student.averageScore)}
                targetGrade={Math.min(9, percentageToGCSEGrade(student.averageScore) + 1)}
                trend={
                  student.recentScores.length >= 2 && student.recentScores[student.recentScores.length - 1] > student.recentScores[0]
                    ? "up"
                    : student.recentScores.length >= 2 && student.recentScores[student.recentScores.length - 1] < student.recentScores[0]
                      ? "down"
                      : "stable"
                }
                compact
              />
            </div>
            <GradeRecommendations
              currentGrade={percentageToGCSEGrade(student.averageScore)}
              weakAreas={
                (student.weaknesses || []).map((w) =>
                  typeof w === "string" ? w : w.name
                )
              }
              maxActions={3}
              showResources={false}
              showProgress
              compact
            />
          </CardContent>
        </Card>

        {/* ── Reading Profile ────────────────────────────────────────── */}
        <div className="mb-8">
          <ReadingProfileCard
            readingAge={student.readingAge}
            decodingAge={student.decodingAge}
            fluencyAge={student.fluencyAge}
            assessmentDate={student.readingAgeAssessmentDate}
            yearGroup={student.yearGroup}
          />
        </div>

        {/* ── Topic Mastery Map ──────────────────────────────────────── */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <Target className="h-4 w-4 text-teal-700" />
              Topic Mastery Map
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {(() => {
                // Build mastery from module progress and essay/quiz data
                const topicSkills: { name: string; status: "mastered" | "developing" | "needs-work" }[] = [
                  { name: "Reading Comprehension", status: (() => {
                    const mod = student.moduleProgress.find((m) => m.module.toLowerCase().includes("reading") || m.module.toLowerCase().includes("comprehension"))
                    if (mod && mod.score >= 70) return "mastered"
                    if (mod && mod.score >= 50) return "developing"
                    return student.averageScore >= 65 ? "developing" : "needs-work"
                  })() },
                  { name: "Essay Writing", status: (() => {
                    const essayScores = student.essaySubmissions.filter((e) => e.score > 0).map((e) => e.score)
                    if (essayScores.length === 0) return "needs-work"
                    const avg = essayScores.reduce((a, b) => a + b, 0) / essayScores.length
                    if (avg >= 70) return "mastered"
                    if (avg >= 50) return "developing"
                    return "needs-work"
                  })() },
                  { name: "Creative Writing", status: (() => {
                    const mod = student.moduleProgress.find((m) => m.module.toLowerCase().includes("creative"))
                    if (mod && mod.score >= 70) return "mastered"
                    if (mod && mod.score >= 50) return "developing"
                    const hasCreativeEssay = student.essaySubmissions.some((e) => e.title.toLowerCase().includes("creative"))
                    if (hasCreativeEssay) {
                      const score = student.essaySubmissions.find((e) => e.title.toLowerCase().includes("creative"))?.score ?? 0
                      if (score >= 70) return "mastered"
                      if (score >= 50) return "developing"
                    }
                    return "needs-work"
                  })() },
                  { name: "Grammar & Punctuation", status: (() => {
                    const hasStrength = student.strengths.some((s) => {
                      const name = typeof s === "string" ? s : s.name
                      return name.toLowerCase().includes("grammar") || name.toLowerCase().includes("punctuation") || name.toLowerCase().includes("spag")
                    })
                    if (hasStrength) return "mastered"
                    const hasWeakness = student.weaknesses.some((w) => {
                      const name = typeof w === "string" ? w : w.name
                      return name.toLowerCase().includes("grammar") || name.toLowerCase().includes("punctuation") || name.toLowerCase().includes("spag")
                    })
                    if (hasWeakness) return "needs-work"
                    return "developing"
                  })() },
                  { name: "Literary Analysis", status: (() => {
                    const mod = student.moduleProgress.find((m) =>
                      m.module.toLowerCase().includes("inspector") || m.module.toLowerCase().includes("macbeth") || m.module.toLowerCase().includes("literature")
                    )
                    if (mod && mod.score >= 70) return "mastered"
                    if (mod && mod.score >= 50) return "developing"
                    return student.averageScore >= 60 ? "developing" : "needs-work"
                  })() },
                  { name: "Character Analysis", status: (() => {
                    const hasStrength = student.strengths.some((s) => {
                      const name = typeof s === "string" ? s : s.name
                      return name.toLowerCase().includes("character")
                    })
                    if (hasStrength) return "mastered"
                    const hasWeakness = student.weaknesses.some((w) => {
                      const name = typeof w === "string" ? w : w.name
                      return name.toLowerCase().includes("character")
                    })
                    if (hasWeakness) return "needs-work"
                    return student.averageScore >= 65 ? "developing" : "needs-work"
                  })() },
                  { name: "Theme Analysis", status: (() => {
                    const hasEssay = student.essaySubmissions.some((e) => e.title.toLowerCase().includes("theme"))
                    if (hasEssay) {
                      const score = student.essaySubmissions.find((e) => e.title.toLowerCase().includes("theme"))?.score ?? 0
                      if (score >= 70) return "mastered"
                      if (score >= 50) return "developing"
                      return "needs-work"
                    }
                    return student.averageScore >= 65 ? "developing" : "needs-work"
                  })() },
                  { name: "Quote Analysis", status: (() => {
                    const hasStrength = student.strengths.some((s) => {
                      const name = typeof s === "string" ? s : s.name
                      return name.toLowerCase().includes("quote") || name.toLowerCase().includes("evidence") || name.toLowerCase().includes("pee")
                    })
                    if (hasStrength) return "mastered"
                    const hasWeakness = student.weaknesses.some((w) => {
                      const name = typeof w === "string" ? w : w.name
                      return name.toLowerCase().includes("quote") || name.toLowerCase().includes("evidence")
                    })
                    if (hasWeakness) return "needs-work"
                    return "developing"
                  })() },
                  { name: "Exam Technique", status: (() => {
                    const mockScores = student.mockExamResults.map((m) => m.score)
                    if (mockScores.length === 0) return "needs-work"
                    const avg = mockScores.reduce((a, b) => a + b, 0) / mockScores.length
                    if (avg >= 70) return "mastered"
                    if (avg >= 50) return "developing"
                    return "needs-work"
                  })() },
                  { name: "Spelling & Vocabulary", status: (() => {
                    const hasStrength = student.strengths.some((s) => {
                      const name = typeof s === "string" ? s : s.name
                      return name.toLowerCase().includes("spelling") || name.toLowerCase().includes("vocabulary") || name.toLowerCase().includes("vocab")
                    })
                    if (hasStrength) return "mastered"
                    const hasWeakness = student.weaknesses.some((w) => {
                      const name = typeof w === "string" ? w : w.name
                      return name.toLowerCase().includes("spelling") || name.toLowerCase().includes("vocabulary") || name.toLowerCase().includes("vocab")
                    })
                    if (hasWeakness) return "needs-work"
                    return "developing"
                  })() },
                ]
                return topicSkills.map((skill, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border p-3 text-center ${
                      skill.status === "mastered"
                        ? "border-green-500/20 bg-green-500/5"
                        : skill.status === "developing"
                        ? "border-amber-500/20 bg-amber-500/5"
                        : "border-red-500/20 bg-red-500/5"
                    }`}
                  >
                    <p className="text-xs font-medium text-ink-600 mb-1.5">{skill.name}</p>
                    <span
                      className={`inline-block text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        skill.status === "mastered"
                          ? "bg-green-500/15 text-green-400"
                          : skill.status === "developing"
                          ? "bg-amber-500/15 text-amber-400"
                          : "bg-red-500/15 text-red-400"
                      }`}
                    >
                      {skill.status === "mastered" ? "Mastered" : skill.status === "developing" ? "Developing" : "Needs Work"}
                    </span>
                  </div>
                ))
              })()}
            </div>
          </CardContent>
        </Card>

        {/* ── Learning Journey ─────────────────────────────────────────── */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-teal-700" />
              Learning Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-cream-100" />
              <div className="space-y-4">
                {(() => {
                  // Combine all assessments into a timeline
                  const allAssessments: { title: string; type: string; score: number; maxScore: number; date: string }[] = [
                    ...student.essaySubmissions.filter((e) => e.score > 0).map((e) => ({
                      title: e.title, type: "Essay", score: e.score, maxScore: 100, date: e.date,
                    })),
                    ...student.quizAttempts.map((q) => ({
                      title: q.quiz, type: "Quiz", score: q.score, maxScore: q.maxScore, date: q.date,
                    })),
                    ...student.mockExamResults.map((m) => ({
                      title: m.exam, type: "Mock Exam", score: m.score, maxScore: 100, date: m.date,
                    })),
                  ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

                  return allAssessments.map((item, i) => {
                    const pct = Math.round((item.score / item.maxScore) * 100)
                    const prevPct = i > 0 ? Math.round((allAssessments[i - 1].score / allAssessments[i - 1].maxScore) * 100) : null
                    const change = prevPct !== null ? pct - prevPct : null
                    return (
                      <div key={i} className="flex items-start gap-4 pl-1">
                        <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                          pct >= 70 ? "bg-green-500/20 border border-green-500/30" :
                          pct >= 50 ? "bg-amber-500/20 border border-amber-500/30" :
                          "bg-red-500/20 border border-red-500/30"
                        }`}>
                          <span className={`text-[9px] font-bold ${
                            pct >= 70 ? "text-green-400" : pct >= 50 ? "text-amber-400" : "text-red-400"
                          }`}>{pct}</span>
                        </div>
                        <div className="flex-1 min-w-0 pb-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm text-ink-900">{item.title}</span>
                            <Badge variant="outline" className={`text-[9px] ${
                              item.type === "Essay" ? "border-teal-800/20 text-teal-700" :
                              item.type === "Quiz" ? "border-amber-500/20 text-amber-400" :
                              "border-clay-500/20 text-clay-600"
                            }`}>{item.type}</Badge>
                            {change !== null && change !== 0 && (
                              <span className={`text-[10px] flex items-center gap-0.5 ${change > 0 ? "text-green-400" : "text-red-400"}`}>
                                {change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                {change > 0 ? "+" : ""}{change}%
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-ink-500 mt-0.5">{item.date}</p>
                        </div>
                        <span className={`text-sm tabular-nums font-medium shrink-0 ${scoreColor(pct)}`}>
                          {item.score}/{item.maxScore}
                        </span>
                      </div>
                    )
                  })
                })()}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ── What They've Grasped ─────────────────────────────────────── */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-teal-700 flex items-center gap-2">
              <Award className="h-4 w-4" /> What They&apos;ve Grasped
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {student.strengths.map((s, i) => {
                const name = typeof s === "string" ? s : s.name
                const score = typeof s === "string" ? null : s.score
                // Find supporting evidence from essays/quizzes
                const relatedEssay = student.essaySubmissions.find((e) =>
                  e.title.toLowerCase().includes(name.toLowerCase().split(" ")[0]) && e.score >= 65
                )
                const relatedQuiz = student.quizAttempts.find((q) =>
                  q.quiz.toLowerCase().includes(name.toLowerCase().split(" ")[0]) && (q.score / q.maxScore) >= 0.65
                )
                return (
                  <div key={i} className="rounded-lg border border-green-500/10 bg-green-500/[0.03] p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-green-400">{name}</span>
                      {score && <span className="text-xs text-green-400/70">G{percentageToGCSEGrade(score)}</span>}
                    </div>
                    {relatedEssay && (
                      <p className="text-[11px] text-ink-500">
                        Evidence: {percentageToGCSEGradeLabel(relatedEssay.score)} on &quot;{relatedEssay.title}&quot;
                      </p>
                    )}
                    {!relatedEssay && relatedQuiz && (
                      <p className="text-[11px] text-ink-500">
                        Evidence: Scored {relatedQuiz.score}/{relatedQuiz.maxScore} on &quot;{relatedQuiz.quiz}&quot;
                      </p>
                    )}
                    {!relatedEssay && !relatedQuiz && (
                      <p className="text-[11px] text-ink-500">
                        Consistently demonstrated across multiple assessments
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* ── Where They're Struggling ─────────────────────────────────── */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-red-400 flex items-center gap-2">
              <XCircle className="h-4 w-4" /> Where They&apos;re Struggling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {student.weaknesses.map((w, i) => {
                const name = typeof w === "string" ? w : w.name
                const score = typeof w === "string" ? null : w.score
                // Generate actionable improvement suggestions
                const suggestion = (() => {
                  const lower = name.toLowerCase()
                  if (lower.includes("essay") || lower.includes("writing") || lower.includes("paragraph"))
                    return "Practice using PEE (Point, Evidence, Explain) structure in each paragraph. Try timed essay practice with model answers."
                  if (lower.includes("grammar") || lower.includes("punctuation") || lower.includes("spag"))
                    return "Daily SPAG drills for 10 minutes. Focus on semicolons, apostrophes, and sentence variety."
                  if (lower.includes("quote") || lower.includes("evidence"))
                    return "Build a quote bank for each text. Practice embedding short quotes into analytical sentences."
                  if (lower.includes("time") || lower.includes("exam") || lower.includes("technique"))
                    return "Practice timed responses: 5 min per mark. Use past paper questions under exam conditions."
                  if (lower.includes("analysis") || lower.includes("depth"))
                    return "Use the 'What? How? Why?' framework to deepen analytical responses. Focus on word-level analysis."
                  if (lower.includes("vocabulary") || lower.includes("spelling"))
                    return "Weekly vocabulary expansion exercises. Focus on Tier 2 academic vocabulary."
                  if (lower.includes("reading") || lower.includes("comprehension"))
                    return "Daily reading of non-fiction extracts. Practice summarising key ideas in own words."
                  return "Focus on targeted practice with teacher feedback. Book a 1:1 review session."
                })()
                return (
                  <div key={i} className="rounded-lg border border-red-500/10 bg-red-500/[0.03] p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-red-400">{name}</span>
                      {score && <span className="text-xs text-red-400/70">G{percentageToGCSEGrade(score)}</span>}
                    </div>
                    <p className="text-[11px] text-ink-500">{suggestion}</p>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* ── Suggested Next Steps ─────────────────────────────────────── */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-amber-400" />
              Suggested Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {(() => {
                const suggestions: string[] = []
                // Check for declining essay scores
                const essayScores = student.essaySubmissions.filter((e) => e.score > 0).map((e) => e.score)
                if (essayScores.length >= 2) {
                  const lastTwo = essayScores.slice(-2)
                  const prevTwo = essayScores.slice(-4, -2)
                  if (prevTwo.length > 0) {
                    const recentAvg = Math.round(lastTwo.reduce((a, b) => a + b, 0) / lastTwo.length)
                    const prevAvg = Math.round(prevTwo.reduce((a, b) => a + b, 0) / prevTwo.length)
                    if (recentAvg < prevAvg - 5) {
                      suggestions.push(`Focus on essay paragraph structure - score dropped from ${prevAvg}% to ${recentAvg}% over last ${lastTwo.length} essays`)
                    }
                  }
                }
                // Check for weak quiz areas
                const weakQuizzes = student.quizAttempts.filter((q) => (q.score / q.maxScore) < 0.5)
                if (weakQuizzes.length > 0) {
                  suggestions.push(`Revise topics from failed quizzes: ${weakQuizzes.map((q) => q.quiz).slice(0, 2).join(", ")}`)
                }
                // Check for incomplete modules
                const incompleteModules = student.moduleProgress.filter((m) => m.progress < 50)
                if (incompleteModules.length > 0) {
                  suggestions.push(`Complete outstanding modules: ${incompleteModules.map((m) => m.module).slice(0, 2).join(", ")} (under 50% progress)`)
                }
                // Check assignments completion rate
                if (student.assignmentsCompleted < student.assignmentsTotal * 0.8) {
                  suggestions.push(`Catch up on ${student.assignmentsTotal - student.assignmentsCompleted} outstanding assignments to stay on track`)
                }
                // Mock exam performance
                const mockScores = student.mockExamResults.map((m) => m.score)
                if (mockScores.length > 0 && mockScores[mockScores.length - 1] < 60) {
                  suggestions.push(`Book a revision session before next mock exam - last score was ${mockScores[mockScores.length - 1]}%`)
                }
                // Add from existing recommendations if we need more
                if (suggestions.length < 3) {
                  student.recommendations.slice(0, 3 - suggestions.length).forEach((r) => suggestions.push(r))
                }
                return suggestions.map((suggestion, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-lg border border-amber-500/10 bg-amber-500/[0.03] p-3">
                    <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[10px] text-amber-400 tabular-nums font-medium">
                      {i + 1}
                    </span>
                    <p className="text-sm text-ink-600">{suggestion}</p>
                  </div>
                ))
              })()}
            </div>
          </CardContent>
        </Card>

        {/* Strengths & Weaknesses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Card className="bg-white border-ink-200">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-teal-700 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" /> Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {student.strengths.map((s, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-ink-600">{typeof s === "string" ? s : s.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-ink-200">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-red-400 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" /> Weaknesses
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {student.weaknesses.map((w, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-ink-600">{typeof w === "string" ? w : w.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Compare with Class Average */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900">
              Compare with Class Average ({student.className})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Progress comparison */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-2">Progress</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-teal-700">{student.name.split(" ")[0]}</span>
                      <span className="text-ink-500 tabular-nums">{student.overallProgress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-cream-100 overflow-hidden">
                      <div className="h-full rounded-full bg-teal-600" style={{ width: `${student.overallProgress}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-ink-500">Class Avg</span>
                      <span className="text-ink-500 tabular-nums">{classAvgProgress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-cream-100 overflow-hidden">
                      <div className="h-full rounded-full bg-neutral-600" style={{ width: `${classAvgProgress}%` }} />
                    </div>
                  </div>
                </div>
                <p className={`text-xs mt-2 ${student.overallProgress >= classAvgProgress ? "text-teal-700" : "text-red-400"}`}>
                  {student.overallProgress >= classAvgProgress
                    ? `+${student.overallProgress - classAvgProgress}% above average`
                    : `${classAvgProgress - student.overallProgress}% below average`}
                </p>
              </div>

              {/* Score comparison */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-2">Avg Score</p>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-teal-700">{student.name.split(" ")[0]}</span>
                      <span className="text-ink-500 tabular-nums">{student.averageScore}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-cream-100 overflow-hidden">
                      <div className="h-full rounded-full bg-teal-600" style={{ width: `${student.averageScore}%` }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-ink-500">Class Avg</span>
                      <span className="text-ink-500 tabular-nums">{classAvgScore}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-cream-100 overflow-hidden">
                      <div className="h-full rounded-full bg-neutral-600" style={{ width: `${classAvgScore}%` }} />
                    </div>
                  </div>
                </div>
                <p className={`text-xs mt-2 ${student.averageScore >= classAvgScore ? "text-teal-700" : "text-red-400"}`}>
                  {student.averageScore >= classAvgScore
                    ? `+${student.averageScore - classAvgScore}% above average`
                    : `${classAvgScore - student.averageScore}% below average`}
                </p>
              </div>

              {/* Assignments comparison */}
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-500 mb-2">Assignments Done</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-light text-teal-700 tabular-nums">{student.assignmentsCompleted}</span>
                  <span className="text-ink-500 text-sm">vs class avg</span>
                  <span className="text-2xl font-light text-ink-500 tabular-nums">{classAvgAssignments}</span>
                </div>
                <p className={`text-xs mt-2 ${student.assignmentsCompleted >= classAvgAssignments ? "text-teal-700" : "text-red-400"}`}>
                  {student.assignmentsCompleted >= classAvgAssignments
                    ? `${student.assignmentsCompleted - classAvgAssignments} ahead`
                    : `${classAvgAssignments - student.assignmentsCompleted} behind`}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Module Progress */}
        <Card className="bg-white border-ink-200 overflow-hidden mb-8">
          <CardHeader className="border-b border-ink-200">
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-teal-700" /> Module Progress
            </CardTitle>
          </CardHeader>
          <div className="hidden sm:grid grid-cols-[1fr_160px_80px_80px] gap-4 px-5 py-2 border-b border-ink-200 text-[10px] uppercase tracking-[0.2em] text-ink-500">
            <span>Module</span>
            <span>Progress</span>
            <span className="text-right">Score</span>
            <span className="text-right">Status</span>
          </div>
          {student.modules.map((mod: any, i: number) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_160px_80px_80px] gap-1 sm:gap-4 px-5 py-3 border-b border-white/[0.03]">
              <p className="text-sm text-ink-900">{mod.name}</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full bg-cream-100 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${scoreBg(mod.progress)}`}
                    style={{ width: `${mod.progress}%` }}
                  />
                </div>
                <span className="text-xs text-ink-500 tabular-nums w-8 text-right">{mod.progress}%</span>
              </div>
              <p className={`text-sm tabular-nums text-right ${mod.score > 0 ? scoreColor(mod.score) : "text-ink-500"}`}>
                {mod.score > 0 ? percentageToGCSEGradeLabel(mod.score) : "--"}
              </p>
              <div className="text-right">
                <Badge
                  variant="outline"
                  className={`text-[10px] ${
                    (mod.status ?? "") === "Complete"
                      ? "border-green-500/20 text-green-400"
                      : (mod.status ?? "") === "In Progress"
                      ? "border-amber-500/20 text-amber-400"
                      : "border-neutral-500/20 text-ink-500"
                  }`}
                >
                  {mod.status ?? "In Progress"}
                </Badge>
              </div>
            </div>
          ))}
        </Card>

        {/* Mock Exam Results */}
        <Card className="bg-white border-ink-200 overflow-hidden mb-8">
          <CardHeader className="border-b border-ink-200">
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-teal-700" /> Mock Exam Results
            </CardTitle>
          </CardHeader>
          <div className="hidden sm:grid grid-cols-[1fr_100px_80px_60px] gap-4 px-5 py-2 border-b border-ink-200 text-[10px] uppercase tracking-[0.2em] text-ink-500">
            <span>Exam</span>
            <span>Date</span>
            <span className="text-center">Score</span>
            <span className="text-center">Grade</span>
          </div>
          {student.mockExams.map((exam: any, i: number) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_100px_80px_60px] gap-1 sm:gap-4 px-5 py-3 border-b border-white/[0.03]">
              <p className="text-sm text-ink-900">{exam.name}</p>
              <p className="text-sm text-ink-500">{exam.date}</p>
              <p className={`text-sm tabular-nums text-center ${gcseGradeColor(percentageToGCSEGrade(exam.score))}`}>{percentageToGCSEGradeLabel(exam.score)}</p>
              <p className="text-sm font-medium text-center text-ink-600">{exam.grade}</p>
            </div>
          ))}
        </Card>

        {/* Essay Submissions */}
        <Card className="bg-white border-ink-200 overflow-hidden mb-8">
          <CardHeader className="border-b border-ink-200">
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <FileText className="h-4 w-4 text-teal-700" /> Essay Submissions
            </CardTitle>
          </CardHeader>
          {student.essays.map((essay: any, i: number) => (
            <div key={i} className="px-5 py-4 border-b border-white/[0.03]">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <div className="flex items-center gap-2">
                  <p className="text-sm text-ink-900">{essay.title}</p>
                  {essay.teacherReviewed && (
                    <Badge variant="outline" className="text-[9px] border-green-500/20 text-green-400">
                      Reviewed
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-ink-500">{essay.date}</span>
                  <span className={`text-sm tabular-nums font-medium ${scoreColor(essay.score)}`}>
                    {percentageToGCSEGradeLabel(essay.score)}
                  </span>
                </div>
              </div>
              <p className="text-xs text-ink-600 italic">{essay.feedback}</p>
            </div>
          ))}
        </Card>

        {/* Quiz Attempts */}
        <Card className="bg-white border-ink-200 overflow-hidden mb-8">
          <CardHeader className="border-b border-ink-200">
            <CardTitle className="text-sm font-medium text-ink-900">Quiz Attempts</CardTitle>
          </CardHeader>
          <div className="hidden sm:grid grid-cols-[1fr_100px_100px] gap-4 px-5 py-2 border-b border-ink-200 text-[10px] uppercase tracking-[0.2em] text-ink-500">
            <span>Quiz</span>
            <span>Date</span>
            <span className="text-right">Score</span>
          </div>
          {student.quizAttempts.map((quiz: any, i: number) => {
            const pct = Math.round((quiz.score / quiz.maxScore) * 100)
            return (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-[1fr_100px_100px] gap-1 sm:gap-4 px-5 py-3 border-b border-white/[0.03]">
                <p className="text-sm text-ink-900">{quiz.quiz}</p>
                <p className="text-sm text-ink-500">{quiz.date}</p>
                <p className={`text-sm tabular-nums text-right ${scoreColor(pct)}`}>
                  {quiz.score}/{quiz.maxScore} ({percentageToGCSEGradeLabel(pct)})
                </p>
              </div>
            )
          })}
        </Card>

        {/* Activity Timeline */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <Clock className="h-4 w-4 text-ink-600" /> Activity Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {student.activityTimeline.map((item: any, i: number) => {
                const isPositive = item.action === "Completed" || item.action === "Submitted" || item.action.startsWith("Achieved") || item.action.startsWith("Scored")
                const isNegative = item.action === "Absent" || item.action === "Incomplete" || item.action.includes("late")
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex flex-col items-center mt-1">
                      <div className={`h-2 w-2 rounded-full ${isPositive ? "bg-teal-700" : isNegative ? "bg-red-500" : "bg-teal-600"}`} />
                      {i < student.activityTimeline.length - 1 && (
                        <div className="w-px h-6 bg-cream-100 mt-1" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-ink-600">
                        <span className={`font-medium ${isPositive ? "text-teal-700" : isNegative ? "text-red-400" : "text-teal-700"}`}>
                          {item.action}
                        </span>
                        {" -- "}
                        {item.detail}
                      </p>
                      <p className="text-[11px] text-ink-500">{item.date}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <Target className="h-4 w-4 text-teal-700" /> Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {student.recommendations.map((rec, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-ink-600">
                  <span className="shrink-0 mt-0.5 h-5 w-5 rounded-full bg-teal-600/10 border border-teal-800/20 flex items-center justify-center text-[10px] text-teal-700 tabular-nums">
                    {i + 1}
                  </span>
                  {rec}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Write Comment (Teacher Action) */}
        <Card className="bg-white border-ink-200 mb-8">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-ink-900 flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-ink-500" /> Write Comment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a note or comment about this student..."
              className="w-full h-24 bg-white border border-ink-200 rounded-lg px-4 py-3 text-sm text-ink-900 placeholder-neutral-600 resize-none focus:outline-none focus:border-ink-200 transition-colors"
            />
            <div className="flex justify-end mt-3">
              <Button
                variant="outline"
                size="sm"
                className="text-ink-600 border-ink-200 hover:border-ink-200"
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
        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.3em] text-ink-500">
          Demo data -- {student.name} -- {student.className}
        </p>
      </div>

      {/* Toast */}
      <div
        id="demo-toast"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-cream-100 backdrop-blur-md border border-ink-200 text-ink-900 text-sm px-5 py-3 rounded-xl opacity-0 translate-y-2 transition-all duration-300 pointer-events-none z-50"
      />
    </div>
  )
}

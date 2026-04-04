"use client"

import { useParams } from "next/navigation"
import { useMemo } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  Minus,
  TrendingUp,
  Target,
  BookOpen,
  ClipboardCheck,
  Award,
  FileText,
  Brain,
  Clock,
  Lightbulb,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Star,
  Pen,
  LogIn,
  Trophy,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DEMO_STUDENTS,
  type DemoStudent,
  type DemoModuleProgress,
  type DemoMockExam,
  type DemoEssay,
  type DemoQuizAttempt,
  type DemoActivity,
} from "@/data/demo-data"

// ---------------------------------------------------------------------------
// Seeded random helpers for procedurally generated students
// ---------------------------------------------------------------------------

function seededHash(str: string): number {
  let h = 0
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) | 0
  }
  return Math.abs(h)
}

function seededRandom(seed: number): () => number {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

// ---------------------------------------------------------------------------
// Generate a full DemoStudent from a procedural id (e.g. "s-006")
// ---------------------------------------------------------------------------

function generateStudentFromId(id: string): DemoStudent {
  const seed = seededHash(id)
  const rand = seededRandom(seed)

  const firstNames = [
    "Oliver", "Amelia", "Noah", "Isla", "Ethan", "Ava", "James", "Mia",
    "William", "Emily", "Benjamin", "Charlotte", "Lucas", "Ella", "Henry", "Grace",
    "Alexander", "Lily", "Daniel", "Freya", "Matthew", "Poppy", "Samuel", "Evie",
    "Harry", "Florence", "Oscar", "Willow", "Charlie", "Sienna", "George", "Phoebe",
    "Thomas", "Ivy", "Jacob", "Isabella", "Leo", "Daisy", "Archie", "Sophie",
  ]
  const lastNames = [
    "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Wilson", "Evans",
    "Thomas", "Johnson", "Roberts", "Walker", "Wright", "Robinson", "Thompson", "White",
    "Hughes", "Edwards", "Green", "Hall", "Lewis", "Harris", "Clarke", "Patel",
    "Jackson", "Wood", "Turner", "Martin", "Cooper", "Hill", "Ward", "Morris",
  ]
  const teachers = ["Ms. Thompson", "Mr. Clarke", "Mrs. Patel", "Dr. Williams", "Miss Carter"]
  const yearGroups = ["Year 7", "Year 8", "Year 9", "Year 10", "Year 11", "Year 12", "Year 13"]
  const classNames = [
    "7A English", "8B English", "9C English", "10A English", "10B English",
    "11A English", "11B English", "12 A-Level Lit", "13 IAL Lang",
  ]

  const firstName = firstNames[Math.floor(rand() * firstNames.length)]
  const lastName = lastNames[Math.floor(rand() * lastNames.length)]
  const name = `${firstName} ${lastName}`
  const yearGroup = yearGroups[Math.floor(rand() * yearGroups.length)]
  const className = classNames[Math.floor(rand() * classNames.length)]
  const teacher = teachers[Math.floor(rand() * teachers.length)]

  const overallProgress = Math.floor(rand() * 80) + 15
  const averageScore = Math.max(20, Math.min(98, overallProgress + Math.floor(rand() * 20) - 10))
  const assignmentsTotal = 26
  const assignmentsCompleted = Math.min(
    assignmentsTotal,
    Math.max(2, Math.floor((overallProgress / 100) * assignmentsTotal) + Math.floor(rand() * 4) - 2)
  )
  const modulesCompleted = Math.min(8, Math.max(0, Math.floor((overallProgress / 100) * 8)))

  let status: "on-track" | "needs-support" | "at-risk" | "excelling"
  if (overallProgress >= 85) status = "excelling"
  else if (overallProgress >= 60) status = "on-track"
  else if (overallProgress >= 40) status = "needs-support"
  else status = "at-risk"

  const recentScores: number[] = []
  let scoreBase = Math.max(20, averageScore - 15)
  for (let i = 0; i < 8; i++) {
    scoreBase = Math.max(15, Math.min(100, scoreBase + Math.floor(rand() * 12) - 4))
    recentScores.push(scoreBase)
  }

  const allStrengths = [
    "Essay Structure", "Quotation Analysis", "Creative Writing", "Character Analysis",
    "Reading Comprehension", "Vocabulary", "Context Knowledge", "Verbal Participation",
    "Poetry Comparison", "Textual Evidence", "Narrative Voice", "Critical Thinking",
  ]
  const allWeaknesses = [
    "Spelling & Grammar", "Timed Conditions", "Essay Length", "Quotation Integration",
    "Written Expression", "Exam Technique", "Paragraph Structure", "Analytical Depth",
  ]

  const strengthCount = status === "excelling" ? 4 : status === "on-track" ? 3 : 2
  const weaknessCount = status === "at-risk" ? 4 : status === "needs-support" ? 3 : 2

  const strengths: { name: string; score: number }[] = []
  const usedS = new Set<number>()
  for (let i = 0; i < strengthCount; i++) {
    let idx = Math.floor(rand() * allStrengths.length)
    while (usedS.has(idx)) idx = (idx + 1) % allStrengths.length
    usedS.add(idx)
    strengths.push({ name: allStrengths[idx], score: Math.floor(rand() * 20) + 75 })
  }

  const weaknesses: { name: string; score: number }[] = []
  const usedW = new Set<number>()
  for (let i = 0; i < weaknessCount; i++) {
    let idx = Math.floor(rand() * allWeaknesses.length)
    while (usedW.has(idx)) idx = (idx + 1) % allWeaknesses.length
    usedW.add(idx)
    weaknesses.push({ name: allWeaknesses[idx], score: Math.floor(rand() * 25) + 30 })
  }

  const moduleNames = [
    "Macbeth", "An Inspector Calls", "Poetry Anthology", "Language Paper 1",
    "Language Paper 2", "Creative Writing", "Unseen Poetry", "A Christmas Carol",
  ]
  const modules: DemoModuleProgress[] = moduleNames.map((mName) => {
    const prog = Math.min(100, Math.max(0, overallProgress + Math.floor(rand() * 40) - 20))
    const modStatus: "Complete" | "In Progress" | "Not Started" =
      prog === 100 ? "Complete" : prog > 0 ? "In Progress" : "Not Started"
    return {
      name: mName,
      progress: prog,
      score: modStatus === "Not Started" ? 0 : Math.max(25, Math.min(100, averageScore + Math.floor(rand() * 20) - 10)),
      status: modStatus,
    }
  })

  const gradeFromScore = (s: number) => {
    if (s >= 85) return "8"
    if (s >= 75) return "7"
    if (s >= 65) return "6"
    if (s >= 55) return "5"
    if (s >= 45) return "4"
    if (s >= 35) return "3"
    return "2"
  }

  const ms1 = Math.max(20, averageScore + Math.floor(rand() * 10) - 5)
  const ms2 = Math.max(20, averageScore + Math.floor(rand() * 10) - 5)
  const ms3 = Math.max(20, averageScore + Math.floor(rand() * 10) - 5)
  const mockExams: DemoMockExam[] = [
    { name: "English Lang Paper 1 Mock", score: ms1, grade: gradeFromScore(ms1), date: "2026-03-15" },
    { name: "English Lit Paper 1 Mock", score: ms2, grade: gradeFromScore(ms2), date: "2026-02-28" },
    { name: "English Lang Paper 2 Mock", score: ms3, grade: gradeFromScore(ms3), date: "2026-02-01" },
  ]

  const essays: DemoEssay[] = [
    { title: "Macbeth: Ambition and Power", score: Math.max(20, averageScore + Math.floor(rand() * 14) - 7), feedback: "Good analysis of key themes. Work on embedding quotations more naturally.", date: "2026-03-20", teacherReviewed: true },
    { title: "Language P1 Q5: Descriptive Writing", score: Math.max(20, averageScore + Math.floor(rand() * 14) - 7), feedback: "Effective use of sensory language. Consider varying sentence structures.", date: "2026-03-10", teacherReviewed: true },
    { title: "Inspector Calls: Responsibility", score: Math.max(20, averageScore + Math.floor(rand() * 14) - 7), feedback: "Solid contextual understanding. Include more critical perspectives.", date: "2026-02-25", teacherReviewed: rand() > 0.3 },
  ]

  const quizAttempts: DemoQuizAttempt[] = [
    { name: "Macbeth Key Quotes", score: Math.max(3, Math.floor((averageScore / 100) * 20) + Math.floor(rand() * 4) - 2), maxScore: 20, date: "2026-03-22" },
    { name: "Language Devices", score: Math.max(3, Math.floor((averageScore / 100) * 20) + Math.floor(rand() * 4) - 2), maxScore: 20, date: "2026-03-18" },
    { name: "Inspector Calls Context", score: Math.max(3, Math.floor((averageScore / 100) * 20) + Math.floor(rand() * 4) - 2), maxScore: 20, date: "2026-03-12" },
    { name: "Poetry Terminology", score: Math.max(3, Math.floor((averageScore / 100) * 20) + Math.floor(rand() * 4) - 2), maxScore: 20, date: "2026-03-05" },
  ]

  const q1pct = Math.round((quizAttempts[0].score / 20) * 100)
  const activityTimeline: DemoActivity[] = [
    { action: "Completed", detail: "Macbeth Act 5 Analysis", date: "2026-03-22" },
    { action: "Submitted", detail: "Language P1 Practice Essay", date: "2026-03-20" },
    { action: "Scored " + q1pct + "%", detail: "Macbeth Key Quotes Quiz", date: "2026-03-18" },
    { action: "Started", detail: "Unseen Poetry Module", date: "2026-03-15" },
    { action: "Reviewed", detail: "Teacher feedback on Inspector Calls Essay", date: "2026-03-12" },
    { action: "Completed", detail: "Language Paper 1 Section A", date: "2026-03-10" },
  ]

  const allRecs = [
    "Focus on timed practice to build exam confidence and speed.",
    "Build a personal quotation bank and practise embedding quotes in essays.",
    "Read model answers for Grade 7+ to understand examiner expectations.",
    "Complete outstanding modules before the next mock exam cycle.",
    "Use peer review sessions to improve essay structure and coherence.",
  ]
  const recommendations = allRecs.slice(0, Math.floor(rand() * 2) + 3)

  return {
    id,
    name,
    email: firstName.toLowerCase() + "." + lastName.toLowerCase() + "@riverside.edu",
    yearGroup,
    className,
    classId: "c-" + (Math.floor(rand() * 20) + 1),
    teacher,
    teacherName: teacher,
    status,
    overallProgress,
    averageScore,
    assignmentsCompleted,
    assignmentsTotal,
    modulesCompleted,
    recentScores,
    strengths,
    weaknesses,
    modules,
    mockExams,
    essays,
    quizAttempts: quizAttempts.map((q) => ({ quiz: q.name, score: q.score, maxScore: q.maxScore, date: q.date })),
    activityTimeline,
    recommendations,
    mockExamResults: mockExams.map((m) => ({ exam: m.name, score: m.score, grade: m.grade, date: m.date })),
    essaySubmissions: essays.map((e) => ({ title: e.title, score: e.score, feedback: e.feedback, date: e.date })),
    moduleProgress: modules.map((m) => ({ module: m.name, progress: m.progress, score: m.score, status: m.status ?? "In Progress" })),
    activityLog: activityTimeline.map((a) => ({ action: a.action + ": " + a.detail, date: a.date })),
    atRisk: status === "at-risk",
    lastActive: ["Today", "Yesterday", "2 days ago", "5 days ago", "1 week ago"][Math.floor(rand() * 5)],
    riskReason: status === "at-risk" ? "Score below target" : "",
  }
}

// ---------------------------------------------------------------------------
// All student IDs for prev/next navigation
// ---------------------------------------------------------------------------

function getAllStudentIds(): string[] {
  const ids = DEMO_STUDENTS.map((s) => s.id)
  const extraCount = 342 - DEMO_STUDENTS.length
  for (let i = 0; i < extraCount; i++) {
    ids.push("s-" + String(DEMO_STUDENTS.length + i + 1).padStart(3, "0"))
  }
  return ids
}

// ---------------------------------------------------------------------------
// Compute class average from DEMO_STUDENTS
// ---------------------------------------------------------------------------

function getClassAverage() {
  const n = DEMO_STUDENTS.length
  return {
    progress: Math.round(DEMO_STUDENTS.reduce((a, s) => a + s.overallProgress, 0) / n),
    score: Math.round(DEMO_STUDENTS.reduce((a, s) => a + s.averageScore, 0) / n),
    assignments: Math.round(DEMO_STUDENTS.reduce((a, s) => a + s.assignmentsCompleted, 0) / n),
    modules: Math.round(DEMO_STUDENTS.reduce((a, s) => a + s.modulesCompleted, 0) / n),
  }
}

// ---------------------------------------------------------------------------
// Colour & style helpers
// ---------------------------------------------------------------------------

const STATUS_CONFIG: Record<string, { bg: string; text: string; border: string; label: string }> = {
  "on-track": { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/30", label: "On Track" },
  "needs-support": { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/30", label: "Needs Support" },
  "at-risk": { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/30", label: "At Risk" },
  "excelling": { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/30", label: "Excelling" },
}

const STATUS_ICON: Record<string, React.ReactNode> = {
  "on-track": <CheckCircle2 className="w-4 h-4" />,
  "needs-support": <AlertTriangle className="w-4 h-4" />,
  "at-risk": <XCircle className="w-4 h-4" />,
  "excelling": <Star className="w-4 h-4" />,
}

const MODULE_STATUS_STYLE: Record<string, string> = {
  "Complete": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  "In Progress": "bg-blue-500/15 text-blue-400 border-blue-500/30",
  "Not Started": "bg-zinc-500/15 text-zinc-400 border-zinc-500/30",
}

function gradeColor(grade: string): string {
  const g = parseInt(grade, 10)
  if (g >= 8) return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
  if (g >= 6) return "bg-blue-500/15 text-blue-400 border-blue-500/30"
  if (g >= 4) return "bg-amber-500/15 text-amber-400 border-amber-500/30"
  return "bg-red-500/15 text-red-400 border-red-500/30"
}

function scoreBarColor(score: number): string {
  if (score >= 80) return "bg-emerald-500"
  if (score >= 65) return "bg-blue-500"
  if (score >= 50) return "bg-amber-500"
  return "bg-red-500"
}

function scoreTrend(scores: number[]): "up" | "down" | "stable" {
  if (scores.length < 2) return "stable"
  const first = scores.slice(0, Math.floor(scores.length / 2))
  const second = scores.slice(Math.floor(scores.length / 2))
  const avgFirst = first.reduce((a, b) => a + b, 0) / first.length
  const avgSecond = second.reduce((a, b) => a + b, 0) / second.length
  const diff = avgSecond - avgFirst
  if (diff > 3) return "up"
  if (diff < -3) return "down"
  return "stable"
}

function getActivityIcon(action: string) {
  const lower = action.toLowerCase()
  if (lower.includes("completed")) return <CheckCircle2 className="w-4 h-4 text-emerald-400" />
  if (lower.includes("submitted")) return <Pen className="w-4 h-4 text-blue-400" />
  if (lower.includes("scored")) return <Target className="w-4 h-4 text-amber-400" />
  if (lower.includes("started")) return <BookOpen className="w-4 h-4 text-violet-400" />
  if (lower.includes("reviewed")) return <FileText className="w-4 h-4 text-cyan-400" />
  if (lower.includes("achieved")) return <Trophy className="w-4 h-4 text-yellow-400" />
  if (lower.includes("login")) return <LogIn className="w-4 h-4 text-zinc-400" />
  return <Clock className="w-4 h-4 text-zinc-400" />
}

function getInitials(name: string): string {
  const parts = name.split(" ")
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")
}

// ---------------------------------------------------------------------------
// Main Page Component
// ---------------------------------------------------------------------------

export default function SchoolStudentDetailPage() {
  const params = useParams()
  const studentId = params.id as string

  const allIds = useMemo(() => getAllStudentIds(), [])
  const classAvg = useMemo(() => getClassAverage(), [])

  const student: DemoStudent = useMemo(() => {
    const found = DEMO_STUDENTS.find((s) => s.id === studentId)
    if (found) return found
    return generateStudentFromId(studentId)
  }, [studentId])

  const currentIndex = allIds.indexOf(studentId)
  const prevId = currentIndex > 0 ? allIds[currentIndex - 1] : null
  const nextId = currentIndex < allIds.length - 1 ? allIds[currentIndex + 1] : null

  const trend = scoreTrend(student.recentScores)
  const statusCfg = STATUS_CONFIG[student.status] ?? STATUS_CONFIG["On Track"]

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* ------------------------------------------------------------------ */}
      {/* 1. Demo Banner                                                     */}
      {/* ------------------------------------------------------------------ */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-b border-amber-500/20 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 text-xs font-medium">
            DEMO
          </Badge>
          <span className="text-sm text-amber-400/80">
            You are viewing demo data. This is a preview of the school admin student drill-down.
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* ---------------------------------------------------------------- */}
        {/* 3. Back to Students                                              */}
        {/* ---------------------------------------------------------------- */}
        <Link
          href="/demo/school/students"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Students
        </Link>

        {/* ---------------------------------------------------------------- */}
        {/* 2. Student Header                                                */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500/30 to-blue-500/30 border border-zinc-700 flex items-center justify-center text-xl font-bold text-violet-300 shrink-0">
            {getInitials(student.name)}
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-2xl font-bold text-zinc-50">{student.name}</h1>
              <Badge className={`${statusCfg.bg} ${statusCfg.text} ${statusCfg.border} gap-1`}>
                {STATUS_ICON[student.status]}
                {statusCfg.label}
              </Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <Badge variant="outline" className="bg-violet-500/10 text-violet-400 border-violet-500/30 text-xs">
                  {student.yearGroup}
                </Badge>
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-400" />
                {student.className}
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                {student.teacherName}
              </span>
              <span className="text-zinc-500">{student.email}</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 4. KPI Cards                                                     */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Overall Progress</span>
                <TrendingUp className="w-4 h-4 text-violet-400" />
              </div>
              <div className="text-3xl font-bold text-zinc-50">{student.overallProgress}%</div>
              <div className="mt-2 w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-700"
                  style={{ width: `${student.overallProgress}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Average Score</span>
                <Target className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-bold text-zinc-50">{student.averageScore}%</div>
              <div className="mt-2 text-xs text-zinc-500">Class avg: {classAvg.score}%</div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Assignments</span>
                <ClipboardCheck className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-zinc-50">
                {student.assignmentsCompleted}/{student.assignmentsTotal}
              </div>
              <div className="mt-2 text-xs text-zinc-500">
                {Math.round((student.assignmentsCompleted / student.assignmentsTotal) * 100)}% completion rate
              </div>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Modules Completed</span>
                <Award className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-zinc-50">{student.modulesCompleted}</div>
              <div className="mt-2 text-xs text-zinc-500">of {student.modules.length} total modules</div>
            </CardContent>
          </Card>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 5. Score Trend (last 8 scores)                                   */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-zinc-100">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              Score Trend (Last 8 Scores)
              <span className="ml-auto flex items-center gap-1.5 text-sm font-normal">
                {trend === "up" && (
                  <Badge className="bg-emerald-500/15 text-emerald-400 border-emerald-500/30 gap-1">
                    <ArrowUp className="w-3 h-3" /> Improving
                  </Badge>
                )}
                {trend === "down" && (
                  <Badge className="bg-red-500/15 text-red-400 border-red-500/30 gap-1">
                    <ArrowDown className="w-3 h-3" /> Declining
                  </Badge>
                )}
                {trend === "stable" && (
                  <Badge className="bg-zinc-500/15 text-zinc-400 border-zinc-500/30 gap-1">
                    <Minus className="w-3 h-3" /> Stable
                  </Badge>
                )}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-3 h-48">
              {student.recentScores.map((score, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-xs font-medium text-zinc-300">{score}%</span>
                  <div
                    className="w-full relative rounded-t-md overflow-hidden"
                    style={{ height: `${(score / 100) * 140}px` }}
                  >
                    <div className={`absolute inset-0 ${scoreBarColor(score)} opacity-80 rounded-t-md`} />
                    <div className={`absolute inset-0 ${scoreBarColor(score)} opacity-20 blur-sm`} />
                  </div>
                  <span className="text-[10px] text-zinc-500">#{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-6 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> 80%+
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-blue-500 inline-block" /> 65-79%
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-amber-500 inline-block" /> 50-64%
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-red-500 inline-block" /> Below 50%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 6. Strengths & Weaknesses                                        */}
        {/* ---------------------------------------------------------------- */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-zinc-100">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {student.strengths.map((s, i) => {
                const item = typeof s === "string" ? { name: s, score: 75 } : s
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-zinc-300">{item.name}</span>
                        <span className="text-sm font-medium text-emerald-400">{item.score}%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500/70 rounded-full" style={{ width: `${item.score}%` }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>

          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-zinc-100">
                <AlertTriangle className="w-5 h-5 text-red-400" />
                Weaknesses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {student.weaknesses.map((w, i) => {
                const item = typeof w === "string" ? { name: w, score: 40 } : w
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-zinc-300">{item.name}</span>
                        <span className="text-sm font-medium text-red-400">{item.score}%</span>
                      </div>
                      <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/70 rounded-full" style={{ width: `${item.score}%` }} />
                      </div>
                    </div>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* 7. Module Progress Table                                         */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <BookOpen className="w-5 h-5 text-violet-400" />
              Module Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Module</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Progress</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Score</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {student.modules.map((mod, i) => (
                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-zinc-200">{mod.name}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-500"
                              style={{ width: `${mod.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-zinc-400 w-10 text-right">{mod.progress}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`font-medium ${mod.score >= 70 ? "text-emerald-400" : mod.score >= 50 ? "text-amber-400" : mod.score > 0 ? "text-red-400" : "text-zinc-600"}`}>
                          {mod.score > 0 ? mod.score + "%" : "--"}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant="outline" className={`text-xs ${MODULE_STATUS_STYLE[mod.status ?? "In Progress"]}`}>
                          {mod.status ?? "In Progress"}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 8. Mock Exam Results                                             */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              Mock Exam Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Exam</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Score</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Grade</th>
                    <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {student.mockExams.map((exam, i) => (
                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-3 px-4 font-medium text-zinc-200">{exam.name}</td>
                      <td className="py-3 px-4 text-center">
                        <span className={`font-medium ${exam.score >= 70 ? "text-emerald-400" : exam.score >= 50 ? "text-amber-400" : "text-red-400"}`}>
                          {exam.score}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant="outline" className={`text-xs ${gradeColor(exam.grade)}`}>
                          Grade {exam.grade}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-right text-zinc-400">{exam.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 9. Essay Submissions                                             */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <FileText className="w-5 h-5 text-cyan-400" />
              Essay Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Title</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Score</th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Feedback</th>
                    <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {student.essays.map((essay, i) => (
                    <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-zinc-200">{essay.title}</span>
                          {essay.teacherReviewed && (
                            <Badge variant="outline" className="text-[10px] bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                              Reviewed
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className={`font-bold text-lg ${essay.score >= 75 ? "text-emerald-400" : essay.score >= 55 ? "text-amber-400" : "text-red-400"}`}>
                          {essay.score}
                        </span>
                        <span className="text-zinc-500 text-xs">/100</span>
                      </td>
                      <td className="py-3 px-4 text-zinc-400 text-xs max-w-xs truncate">{essay.feedback}</td>
                      <td className="py-3 px-4 text-right text-zinc-400">{essay.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 10. Quiz Attempts                                                */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Brain className="w-5 h-5 text-pink-400" />
              Quiz Attempts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Quiz</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Score</th>
                    <th className="text-center py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Percentage</th>
                    <th className="text-right py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {student.quizAttempts.map((quiz, i) => {
                    const pct = Math.round((quiz.score / quiz.maxScore) * 100)
                    return (
                      <tr key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors">
                        <td className="py-3 px-4 font-medium text-zinc-200">{quiz.quiz}</td>
                        <td className="py-3 px-4 text-center text-zinc-300">
                          {quiz.score}/{quiz.maxScore}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-16 h-2 bg-zinc-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${pct >= 75 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-red-500"}`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                            <span className={`text-sm font-medium ${pct >= 75 ? "text-emerald-400" : pct >= 50 ? "text-amber-400" : "text-red-400"}`}>
                              {pct}%
                            </span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right text-zinc-400">{quiz.date}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 11. Activity Timeline                                            */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Clock className="w-5 h-5 text-zinc-400" />
              Activity Timeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-800" />
              <div className="space-y-4">
                {student.activityTimeline.map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 relative">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shrink-0 z-10">
                      {getActivityIcon(activity.action)}
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-zinc-200">{activity.action}</span>
                        <span className="text-sm text-zinc-400">{activity.detail}</span>
                      </div>
                      <span className="text-xs text-zinc-500 mt-0.5 block">{activity.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 12. Personalised Recommendations                                 */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800 border-l-4 border-l-violet-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Sparkles className="w-5 h-5 text-violet-400" />
              AI-Powered Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {student.recommendations.map((rec, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-violet-500/5 border border-violet-500/10">
                  <div className="w-6 h-6 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Lightbulb className="w-3.5 h-3.5 text-violet-400" />
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 13. Compare with Class Average                                   */}
        {/* ---------------------------------------------------------------- */}
        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-zinc-100">
              <Users className="w-5 h-5 text-blue-400" />
              Compare with Class Average
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Progress", studentVal: student.overallProgress, avg: classAvg.progress, unit: "%" },
                { label: "Avg Score", studentVal: student.averageScore, avg: classAvg.score, unit: "%" },
                { label: "Assignments", studentVal: student.assignmentsCompleted, avg: classAvg.assignments, unit: "" },
                { label: "Modules Done", studentVal: student.modulesCompleted, avg: classAvg.modules, unit: "" },
              ].map((metric, i) => {
                const diff = metric.studentVal - metric.avg
                const isAbove = diff > 0
                const isEqual = diff === 0
                const maxVal = Math.max(metric.studentVal, metric.avg, 1)
                return (
                  <div key={i} className="space-y-3">
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider block text-center">
                      {metric.label}
                    </span>
                    <div className="flex items-end gap-3 justify-center h-24">
                      <div className="flex flex-col items-center gap-1 w-12">
                        <span className="text-xs font-bold text-violet-400">
                          {metric.studentVal}{metric.unit}
                        </span>
                        <div className="w-full bg-zinc-800 rounded-t-md overflow-hidden" style={{ height: "60px" }}>
                          <div
                            className="w-full bg-gradient-to-t from-violet-600 to-violet-400 rounded-t-md"
                            style={{
                              height: `${(metric.studentVal / maxVal) * 100}%`,
                              marginTop: `${100 - (metric.studentVal / maxVal) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-zinc-500">Student</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 w-12">
                        <span className="text-xs font-bold text-zinc-400">
                          {metric.avg}{metric.unit}
                        </span>
                        <div className="w-full bg-zinc-800 rounded-t-md overflow-hidden" style={{ height: "60px" }}>
                          <div
                            className="w-full bg-gradient-to-t from-zinc-600 to-zinc-400 rounded-t-md"
                            style={{
                              height: `${(metric.avg / maxVal) * 100}%`,
                              marginTop: `${100 - (metric.avg / maxVal) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-zinc-500">Class</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          isAbove
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : isEqual
                            ? "bg-zinc-500/10 text-zinc-400 border-zinc-500/30"
                            : "bg-red-500/10 text-red-400 border-red-500/30"
                        }`}
                      >
                        {isAbove
                          ? "+" + diff + metric.unit + " above"
                          : isEqual
                          ? "At average"
                          : diff + metric.unit + " below"}
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* ---------------------------------------------------------------- */}
        {/* 14. Previous / Next Student Navigation                           */}
        {/* ---------------------------------------------------------------- */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          {prevId ? (
            <Link href={"/demo/school/students/" + prevId}>
              <Button variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 gap-2">
                <ChevronLeft className="w-4 h-4" />
                Previous Student
              </Button>
            </Link>
          ) : (
            <div />
          )}
          <span className="text-xs text-zinc-500">
            Student {currentIndex >= 0 ? currentIndex + 1 : "?"} of {allIds.length}
          </span>
          {nextId ? (
            <Link href={"/demo/school/students/" + nextId}>
              <Button variant="outline" className="bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 gap-2">
                Next Student
                <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}

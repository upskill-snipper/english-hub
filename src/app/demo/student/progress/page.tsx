"use client"

import Link from "next/link"
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from "@/lib/grades"
import GradeProgressCard from "@/components/GradeProgressCard"
import GradeRecommendations from "@/components/GradeRecommendations"
import ReadingProfileCard from "@/components/ReadingProfileCard"
import {
  ArrowLeft,
  CheckCircle2,
  Lock,
  Trophy,
  Flame,
  BookOpen,
  FileText,
  PenTool,
  Target,
  Zap,
  Award,
  Star,
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  ArrowUpRight,
  Clock,
  BarChart3,
} from "lucide-react"

// ---------------------------------------------------------------------------
// Demo data -- Aisha Rahman's progress perspective
// ---------------------------------------------------------------------------

const OVERALL_PERCENT = 67

const STUDENT = {
  name: "Aisha Rahman",
  yearGroup: "Year 11",
  streak: 7,
  longestStreak: 14,
  totalStudyHours: 48,
  averageScore: 74,
  targetGrade: "7",
  predictedGrade: "6",
  totalQuizzes: 12,
  totalEssays: 5,
  totalMocks: 2,
}

const modules = [
  {
    name: "GCSE English Literature",
    percent: 68,
    score: 73,
    color: "green" as const,
    lessons: 15,
    completedLessons: 10,
    topics: [
      { name: "Macbeth", mastery: 78, status: "good" as const },
      { name: "Inspector Calls", mastery: 85, status: "mastered" as const },
      { name: "Poetry Anthology", mastery: 55, status: "developing" as const },
      { name: "Unseen Poetry", mastery: 48, status: "weak" as const },
      { name: "19th Century Novel", mastery: 62, status: "developing" as const },
    ],
  },
  {
    name: "GCSE English Language",
    percent: 54,
    score: 68,
    color: "amber" as const,
    lessons: 18,
    completedLessons: 10,
    topics: [
      { name: "Reading Comprehension", mastery: 80, status: "good" as const },
      { name: "Language Analysis", mastery: 72, status: "good" as const },
      { name: "Summary Writing", mastery: 65, status: "developing" as const },
      { name: "Directed Writing", mastery: 58, status: "developing" as const },
      { name: "Descriptive Writing", mastery: 75, status: "good" as const },
      { name: "Narrative Writing", mastery: 70, status: "good" as const },
      { name: "Exam Technique", mastery: 42, status: "weak" as const },
    ],
  },
  {
    name: "Creative Writing Workshop",
    percent: 82,
    score: 88,
    color: "complete" as const,
    lessons: 8,
    completedLessons: 7,
    topics: [
      { name: "Narrative Voice", mastery: 92, status: "mastered" as const },
      { name: "Descriptive Techniques", mastery: 88, status: "mastered" as const },
      { name: "Dialogue", mastery: 78, status: "good" as const },
      { name: "Story Structure", mastery: 85, status: "mastered" as const },
    ],
  },
  {
    name: "Exam Technique",
    percent: 20,
    score: 55,
    color: "red" as const,
    lessons: 6,
    completedLessons: 1,
    topics: [
      { name: "Time Management", mastery: 40, status: "weak" as const },
      { name: "Question Decoding", mastery: 55, status: "developing" as const },
      { name: "High-mark Answers", mastery: 38, status: "weak" as const },
    ],
  },
]

const recentActivity = [
  { icon: BookOpen, text: "Completed Module 7: Inspector Calls Act 3", when: "Yesterday" },
  { icon: Target, text: "Quiz Score: 8/10 on Poetry Terms", when: "2 days ago" },
  { icon: FileText, text: "Essay submitted: Macbeth Analysis (22/30)", when: "3 days ago" },
  { icon: PenTool, text: "Started Module: Exam Technique", when: "4 days ago" },
  { icon: BookOpen, text: "Completed Creative Writing: Narrative Voice", when: "5 days ago" },
  { icon: Target, text: "Quiz Score: 14/20 on Unseen Poetry", when: "1 week ago" },
]

const badges = [
  { name: "7-Day Streak", icon: Flame, earned: true, desc: "7 consecutive days of study", progress: 100 },
  { name: "Quiz Champion", icon: Zap, earned: true, desc: "Completed 10+ quizzes", progress: 100 },
  { name: "First Essay", icon: FileText, earned: true, desc: "Submitted first essay", progress: 100 },
  { name: "Course Star", icon: Award, earned: true, desc: "82% in Creative Writing", progress: 100 },
  { name: "Perfect Score", icon: Star, earned: false, desc: "Score 100% on any quiz", progress: 80 },
  { name: "Essay Master", icon: PenTool, earned: false, desc: "Submit 10 essays", progress: 50 },
  { name: "Mock Veteran", icon: Trophy, earned: false, desc: "Complete 5 mock exams", progress: 40 },
  { name: "Consistent Learner", icon: Target, earned: false, desc: "14-day study streak", progress: 50 },
]

const mockResults: { name: string; score: number; grade: string; date: string; trend: "up" | "down" | "stable" }[] = [
  { name: "Language Paper 2 Mock", score: 78, grade: "7", date: "25 Mar 2026", trend: "up" },
  { name: "Literature Paper 1 Mock", score: 72, grade: "6", date: "10 Mar 2026", trend: "stable" },
]

const essayResults = [
  { title: "Macbeth Act 1 Essay", score: 73, grade: "6", feedback: "Strong analysis of ambition. Improve linking to context.", date: "20 Mar" },
  { title: "Creative Writing: Narrative Voice", score: 90, grade: "8", feedback: "Excellent use of first-person perspective. Very engaging.", date: "12 Mar" },
  { title: "Inspector Calls: Responsibility", score: 82, grade: "7", feedback: "Good thematic analysis. Include more stage direction references.", date: "5 Mar" },
  { title: "Language Paper 1: Descriptive", score: 68, grade: "5", feedback: "Good sensory detail but needs more varied sentence structures.", date: "25 Feb" },
  { title: "Poetry Comparison: Power", score: 55, grade: "4", feedback: "Address both poems in each paragraph. Use comparative connectives.", date: "18 Feb" },
]

const scores = [62, 70, 55, 78, 80, 65, 85, 72, 74, 77, 80, 73]
const scoreMonths = ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"]

function moduleCardGradient(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "from-green-500/20 to-green-600/5 border-green-500/20"
  if (color === "amber") return "from-amber-500/20 to-amber-600/5 border-amber-500/20"
  if (color === "red") return "from-red-500/20 to-red-600/5 border-red-500/20"
  return "from-teal-800/20 to-emerald-600/5 border-teal-800/20"
}

function moduleRingColor(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "#22c55e"
  if (color === "amber") return "#f59e0b"
  if (color === "red") return "#ef4444"
  return "#34d399"
}

function moduleBarColor(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "bg-green-500"
  if (color === "amber") return "bg-amber-500"
  if (color === "red") return "bg-red-500"
  return "bg-teal-600"
}

function moduleBadgeColor(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "bg-green-500/20 text-green-400 border-green-500/30"
  if (color === "amber") return "bg-amber-500/20 text-amber-400 border-amber-500/30"
  if (color === "red") return "bg-red-500/20 text-red-400 border-red-500/30"
  return "bg-teal-800/10 text-teal-700 border-teal-800/30"
}

function moduleLabel(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "Good"
  if (color === "amber") return "In Progress"
  if (color === "red") return "Needs Attention"
  return "Almost Done!"
}

function masteryBarColor(status: "mastered" | "good" | "developing" | "weak") {
  if (status === "mastered") return "bg-teal-700"
  if (status === "good") return "bg-green-500"
  if (status === "developing") return "bg-amber-500"
  return "bg-red-500"
}

function masteryBadge(status: "mastered" | "good" | "developing" | "weak") {
  if (status === "mastered")
    return "bg-teal-800/10 text-teal-700 border-teal-800/30"
  if (status === "good")
    return "bg-green-500/20 text-green-400 border-green-500/30"
  if (status === "developing")
    return "bg-amber-500/20 text-amber-400 border-amber-500/30"
  return "bg-red-500/20 text-red-400 border-red-500/30"
}

function masteryLabel(status: "mastered" | "good" | "developing" | "weak") {
  if (status === "mastered") return "Mastered"
  if (status === "good") return "Good"
  if (status === "developing") return "Developing"
  return "Needs Work"
}

/* Small SVG ring helper for module cards */
function MiniRing({ percent, color, size = 56 }: { percent: number; color: string; size?: number }) {
  const r = (size - 8) / 2
  const circumference = 2 * Math.PI * r
  return (
    <svg className={`-rotate-90`} width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5" />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
        strokeDasharray={`${circumference * (percent / 100)} ${circumference * (1 - percent / 100)}`}
      />
    </svg>
  )
}

// Stat card gradient configs
const statCards = [
  { label: "Average Grade", value: `Grade ${percentageToGCSEGrade(STUDENT.averageScore)}`, trend: "improving", trendUp: true, gradient: "from-purple-600/30 to-purple-800/10 border-clay-500/20" },
  { label: "Study Hours", value: `${STUDENT.totalStudyHours}h`, trend: "+6h", trendUp: true, gradient: "from-blue-600/30 to-blue-800/10 border-teal-800/20" },
  { label: "Quizzes Done", value: `${STUDENT.totalQuizzes}`, trend: "+3", trendUp: true, gradient: "from-cyan-600/30 to-cyan-800/10 border-teal-800/20" },
  { label: "Essays Written", value: `${STUDENT.totalEssays}`, trend: "+2", trendUp: true, gradient: "from-pink-600/30 to-pink-800/10 border-pink-500/20" },
  { label: "Mock Exams", value: `${STUDENT.totalMocks}`, trend: "new", trendUp: true, gradient: "from-amber-600/30 to-amber-800/10 border-amber-500/20" },
  { label: "Longest Streak", value: `${STUDENT.longestStreak}d`, trend: "", trendUp: true, gradient: "from-orange-600/30 to-orange-800/10 border-orange-500/20" },
]

export default function StudentProgressPage() {
  const maxScore = Math.max(...scores)
  const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-center text-sm font-medium">
        <span className="mr-2">Student Demo</span>
        <span className="text-ink-600">Viewing as: {STUDENT.name} ({STUDENT.yearGroup})</span>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/demo/student"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to dashboard
        </Link>

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Progress</h1>
            <p className="mt-1 text-ink-500">{STUDENT.name} -- {STUDENT.yearGroup}</p>
          </div>
        </div>

        {/* ================================================================ */}
        {/* SECTION 1: Large Progress Hero                                   */}
        {/* ================================================================ */}
        <section className="mb-8">
          <div className="relative rounded-2xl border border-ink-200 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-zinc-950 p-8 overflow-hidden">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-clay-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-600/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-16">
              {/* Progress Ring */}
              <div className="relative">
                <div className="relative h-[250px] w-[250px]">
                  <svg className="h-[250px] w-[250px] -rotate-90" viewBox="0 0 250 250">
                    <circle cx="125" cy="125" r="105" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="16" />
                    <circle
                      cx="125" cy="125" r="105" fill="none" stroke="url(#heroGrad)" strokeWidth="16" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 105 * (OVERALL_PERCENT / 100)} ${2 * Math.PI * 105 * (1 - OVERALL_PERCENT / 100)}`}
                      className="transition-all duration-700"
                    />
                    <defs>
                      <linearGradient id="heroGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="50%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#818cf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold tracking-tight">{OVERALL_PERCENT}%</span>
                    <span className="text-sm text-ink-500 mt-1">Overall Progress</span>
                  </div>
                </div>
                {/* Streak badge overlay */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm px-3 py-1.5 shadow-lg shadow-amber-500/5">
                  <Flame className="h-4 w-4 text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">{STUDENT.streak} day streak</span>
                </div>
              </div>

              {/* Grade info */}
              <div className="flex flex-col items-center gap-4 md:items-start">
                <div className="flex items-center gap-3">
                  <div className={`rounded-xl bg-teal-800/10 border border-teal-800/20 px-4 py-3 text-center`}>
                    <p className="text-[10px] uppercase tracking-wider text-teal-700/60 mb-0.5">Working At</p>
                    <p className={`text-3xl font-bold ${gcseGradeColor(percentageToGCSEGrade(STUDENT.averageScore))}`}>Grade {percentageToGCSEGrade(STUDENT.averageScore)}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-500" />
                  <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 px-4 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-amber-400/60 mb-0.5">Predicted</p>
                    <p className="text-3xl font-bold text-amber-400">Grade {STUDENT.predictedGrade}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-ink-500" />
                  <div className="rounded-xl bg-teal-800/10 border border-teal-800/20 px-4 py-3 text-center">
                    <p className="text-[10px] uppercase tracking-wider text-teal-700/60 mb-0.5">Target</p>
                    <p className="text-3xl font-bold text-teal-700">Grade {STUDENT.targetGrade}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400 font-medium">On Track -- {100 - OVERALL_PERCENT}% to go</span>
                </div>
                <p className="text-xs text-ink-500">Best streak: {STUDENT.longestStreak} days</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: Key Stats Grid (2x3)                                  */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Key Stats</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {statCards.map((s) => (
              <div
                key={s.label}
                className={`rounded-xl border bg-gradient-to-br p-4 transition-transform hover:scale-[1.02] ${s.gradient}`}
              >
                <p className="text-[11px] uppercase tracking-wider text-ink-500 mb-2">{s.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-3xl font-bold">{s.value}</p>
                  {s.trend && (
                    <span className="flex items-center gap-0.5 text-xs font-medium text-teal-700 mb-1">
                      {s.trendUp && <ArrowUpRight className="h-3 w-3" />}
                      {s.trend}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3: Score Trend Bar Chart                                  */}
        {/* ================================================================ */}
        <section className="mb-8">
          <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-clay-500/10">
                  <BarChart3 className="h-5 w-5 text-clay-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Score Trend</h2>
                  <p className="text-xs text-ink-500">Last 12 assessments</p>
                </div>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-teal-800/10 border border-teal-800/20 px-3 py-1 text-xs font-medium text-teal-700">
                <TrendingUp className="h-3 w-3" />
                +11% this term
              </span>
            </div>

            <div className="relative">
              {/* Average line */}
              <div
                className="absolute left-0 right-0 border-t border-dashed border-ink-200 z-10"
                style={{ bottom: `${(avgScore / maxScore) * 100}%` }}
              >
                <span className="absolute -top-3 -left-0.5 text-[9px] text-ink-500 bg-cream-50/80 px-1 rounded">avg {avgScore}%</span>
              </div>

              <div className="flex items-end gap-2 h-40">
                {scores.map((s, i) => {
                  const isRecent = i >= scores.length - 3
                  return (
                    <div key={i} className="group flex flex-1 flex-col items-center gap-1 relative">
                      {/* Hover tooltip */}
                      <div className="absolute -top-7 opacity-0 group-hover:opacity-100 transition-opacity bg-cream-100 backdrop-blur-sm rounded px-2 py-0.5 text-[10px] font-medium z-20 whitespace-nowrap">
                        {s}%
                      </div>
                      <div
                        className={`w-full rounded-t-lg transition-all duration-200 group-hover:brightness-125 cursor-default ${
                          isRecent
                            ? "bg-gradient-to-t from-emerald-600 to-emerald-400"
                            : "bg-gradient-to-t from-purple-700/80 to-indigo-500/80"
                        }`}
                        style={{ height: `${(s / maxScore) * 100}%` }}
                      />
                      <span className="text-[9px] text-ink-500">{scoreMonths[i]}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4 justify-center text-[10px] text-ink-500">
              <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-indigo-500" /> Older</span>
              <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-sm bg-teal-700" /> Recent</span>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3b: Grade Progress & Next Grade Recommendations          */}
        {/* ================================================================ */}
        <section className="mb-8">
          <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-cyan-900/10 via-white/[0.02] to-white/[0.01] p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600/20">
                <Target className="h-5 w-5 text-teal-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Next Grade Recommendations</h2>
                <p className="text-xs text-ink-500">Personalised advice to reach Grade {STUDENT.targetGrade}</p>
              </div>
            </div>

            <div className="mb-6">
              <GradeProgressCard
                currentGrade={Number(STUDENT.predictedGrade)}
                predictedGrade={Number(STUDENT.predictedGrade)}
                targetGrade={Number(STUDENT.targetGrade)}
                trend="up"
              />
            </div>

            <GradeRecommendations
              currentGrade={Number(STUDENT.predictedGrade)}
              weakAreas={
                modules
                  .flatMap((m) => m.topics.filter((t) => t.status === "weak" || t.status === "developing"))
                  .map((t) => t.name)
              }
              maxActions={5}
              showResources
              showProgress
            />
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3c: Reading Profile                                       */}
        {/* ================================================================ */}
        <section className="mb-8">
          <ReadingProfileCard
            readingAge={186}
            decodingAge={192}
            fluencyAge={180}
            assessmentDate="2026-02-12"
            yearGroup="Year 11"
            compact
          />
        </section>

        {/* ================================================================ */}
        {/* SECTION 4: Module Mastery Grid                                    */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Module Mastery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map((mod) => (
              <div
                key={mod.name}
                className={`rounded-2xl border bg-gradient-to-br p-5 transition-all hover:shadow-lg hover:shadow-black/20 ${moduleCardGradient(mod.color)}`}
              >
                {/* Module header with mini ring */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative shrink-0">
                    <MiniRing percent={mod.percent} color={moduleRingColor(mod.color)} />
                    <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">{mod.percent}%</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-ink-900 leading-tight">{mod.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-ink-500">{mod.completedLessons}/{mod.lessons} lessons</span>
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${moduleBadgeColor(mod.color)}`}>
                        {moduleLabel(mod.color)}
                      </span>
                    </div>
                    <p className="text-xs text-ink-500 mt-0.5">Avg: {percentageToGCSEGradeLabel(mod.score)}</p>
                  </div>
                </div>

                {/* Topic breakdown */}
                <div className="space-y-2">
                  {mod.topics.map((t) => (
                    <div key={t.name} className="rounded-lg bg-cream-100 px-3 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-ink-600 truncate mr-2">{t.name}</span>
                        <span className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium shrink-0 ${masteryBadge(t.status)}`}>
                          {t.mastery}% -- {masteryLabel(t.status)}
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-cream-100">
                        <div
                          className={`h-1.5 rounded-full transition-all duration-500 ${masteryBarColor(t.status)}`}
                          style={{ width: `${t.mastery}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 5: Achievement Badges (horizontal scroll)                */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Achievement Badges</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x">
            {badges.map((b) => {
              const Icon = b.icon
              return (
                <div
                  key={b.name}
                  className={`flex flex-col items-center gap-2 rounded-2xl border p-5 text-center transition-all shrink-0 w-[140px] snap-start ${
                    b.earned
                      ? "border-clay-500/30 bg-gradient-to-b from-clay-500/15 to-purple-900/5 hover:from-clay-500/20 hover:border-purple-500/40"
                      : "border-ink-200 bg-white grayscale hover:grayscale-0 hover:border-ink-200"
                  }`}
                >
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full transition-all ${
                      b.earned
                        ? "bg-gradient-to-br from-clay-500/30 to-indigo-500/30 text-clay-600 shadow-lg shadow-clay-500/10 ring-2 ring-purple-500/20"
                        : "bg-cream-100 text-ink-500"
                    }`}
                  >
                    {b.earned ? (
                      <Icon className="h-8 w-8" />
                    ) : (
                      <Lock className="h-6 w-6" />
                    )}
                  </div>
                  <span className="text-xs font-semibold leading-tight">{b.name}</span>
                  <span className="text-[10px] text-ink-500 leading-tight">{b.desc}</span>
                  {!b.earned && (
                    <div className="w-full mt-auto">
                      <div className="h-1.5 rounded-full bg-cream-100">
                        <div
                          className="h-1.5 rounded-full bg-clay-500/50 transition-all"
                          style={{ width: `${b.progress}%` }}
                        />
                      </div>
                      <p className="text-[9px] text-ink-500 mt-1">{b.progress}% there</p>
                    </div>
                  )}
                  {b.earned && (
                    <span className="text-[10px] text-clay-600 font-medium">Earned</span>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 6: Mock Exam Results (side-by-side)                      */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Mock Exam Results</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {mockResults.map((m) => {
              const trendColor = m.trend === "up" ? "text-teal-700" : m.trend === "down" ? "text-red-400" : "text-ink-500"
              const trendBg = m.trend === "up" ? "bg-teal-800/10 border-teal-800/20" : m.trend === "down" ? "bg-red-500/10 border-red-500/20" : "bg-cream-100 border-ink-200"
              return (
                <div key={m.name} className="rounded-2xl border border-ink-200 bg-gradient-to-br from-white/[0.04] to-transparent p-6 transition-all hover:border-ink-200">
                  <p className="text-sm font-medium text-ink-600 mb-4">{m.name}</p>
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`text-5xl font-bold tracking-tight ${gcseGradeColor(percentageToGCSEGrade(m.score))}`}>Grade {percentageToGCSEGrade(m.score)}</span>
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-sm text-ink-500">{m.score}%</span>
                    </div>
                    <div className={`ml-auto flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${trendBg} ${trendColor}`}>
                      {m.trend === "up" ? (
                        <TrendingUp className="h-3.5 w-3.5" />
                      ) : m.trend === "down" ? (
                        <TrendingDown className="h-3.5 w-3.5" />
                      ) : (
                        <Minus className="h-3.5 w-3.5" />
                      )}
                      {m.trend === "up" ? "Improving" : m.trend === "down" ? "Declining" : "Stable"}
                    </div>
                  </div>
                  <p className="text-xs text-ink-500 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {m.date}
                  </p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* Essay Results                                                     */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Essay Submissions</h2>
          <div className="rounded-2xl border border-ink-200 bg-white divide-y divide-white/5">
            {essayResults.map((e, i) => {
              const gradeNum = parseInt(e.grade)
              const gradeColor = gradeNum >= 7
                ? "text-teal-700 bg-teal-800/10 border-teal-800/30"
                : gradeNum >= 5
                  ? "text-amber-400 bg-amber-500/20 border-amber-500/30"
                  : "text-red-400 bg-red-500/20 border-red-500/30"
              return (
                <div key={i} className="px-5 py-4 transition-colors hover:bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-ink-900">{e.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${gradeColor}`}>
                        Grade {e.grade}
                      </span>
                      <span className="text-xs text-ink-500">({e.score}%)</span>
                    </div>
                  </div>
                  <p className="text-xs text-ink-500 leading-relaxed">{e.feedback}</p>
                  <p className="text-[10px] text-ink-500 mt-1">{e.date}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* Recent Activity                                                   */}
        {/* ================================================================ */}
        <section className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
          <div className="rounded-2xl border border-ink-200 bg-white divide-y divide-white/5">
            {recentActivity.map((a, i) => {
              const Icon = a.icon
              return (
                <div key={i} className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-white">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-clay-500/20 to-indigo-500/20 text-clay-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{a.text}</p>
                    <p className="text-xs text-ink-500 mt-0.5">{a.when}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ================================================================ */}
        {/* CTA                                                               */}
        {/* ================================================================ */}
        <div className="rounded-2xl border border-clay-500/30 bg-gradient-to-r from-clay-500/10 via-indigo-500/10 to-clay-400/10 p-8 text-center">
          <Trophy className="mx-auto h-10 w-10 text-clay-600 mb-3" />
          <p className="text-xl font-semibold mb-1">Keep it up, {STUDENT.name.split(" ")[0]}!</p>
          <p className="text-sm text-ink-500 mb-5">
            You are {100 - OVERALL_PERCENT}% away from completing all your modules. Keep the streak going!
          </p>
          <Link
            href="/demo/student"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-medium hover:from-clay-500 hover:to-indigo-500 transition-all shadow-lg shadow-clay-500/20"
          >
            Continue Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-ink-500">
          Demo data only. Not a real student account.
        </p>
      </div>
    </div>
  )
}

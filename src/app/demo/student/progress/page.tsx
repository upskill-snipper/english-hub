"use client"

import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
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

function moduleBarColor(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "bg-green-500"
  if (color === "amber") return "bg-amber-500"
  if (color === "red") return "bg-red-500"
  return "bg-emerald-400"
}

function moduleBadgeColor(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "bg-green-500/20 text-green-400 border-green-500/30"
  if (color === "amber") return "bg-amber-500/20 text-amber-400 border-amber-500/30"
  if (color === "red") return "bg-red-500/20 text-red-400 border-red-500/30"
  return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
}

function moduleLabel(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "Good"
  if (color === "amber") return "In Progress"
  if (color === "red") return "Needs Attention"
  return "Almost Done!"
}

function masteryBadge(status: "mastered" | "good" | "developing" | "weak") {
  if (status === "mastered")
    return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
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

export default function StudentProgressPage() {
  const maxScore = Math.max(...scores)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-center text-sm font-medium">
        <span className="mr-2">Student Demo</span>
        <span className="text-white/70">Viewing as: {STUDENT.name} ({STUDENT.yearGroup})</span>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/demo/student"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to dashboard
        </Link>

        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Progress</h1>
            <p className="mt-1 text-white/50">{STUDENT.name} -- {STUDENT.yearGroup}</p>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2">
            <Flame className="h-4 w-4 text-amber-400" />
            <div className="text-right">
              <p className="text-sm font-medium text-amber-400">{STUDENT.streak} day streak</p>
              <p className="text-[10px] text-white/30">Best: {STUDENT.longestStreak} days</p>
            </div>
          </div>
        </div>

        {/* Overall Progress Ring + Stats */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="relative h-48 w-48">
              <svg className="h-48 w-48 -rotate-90" viewBox="0 0 192 192">
                <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" />
                <circle
                  cx="96" cy="96" r="80" fill="none" stroke="url(#progressGradient)" strokeWidth="14" strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 80 * (OVERALL_PERCENT / 100)} ${2 * Math.PI * 80 * (1 - OVERALL_PERCENT / 100)}`}
                />
                <defs>
                  <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">{OVERALL_PERCENT}%</span>
                <span className="text-sm text-white/50">Overall</span>
              </div>
            </div>
            <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400 border border-green-500/30">
              <CheckCircle2 className="h-3.5 w-3.5" />
              On Track
            </span>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-2 gap-3 content-start">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] text-white/30 mb-1">Average Score</p>
              <p className="text-2xl font-semibold">{STUDENT.averageScore}%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] text-white/30 mb-1">Target Grade</p>
              <p className="text-2xl font-semibold text-emerald-400">Grade {STUDENT.targetGrade}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] text-white/30 mb-1">Predicted</p>
              <p className="text-2xl font-semibold text-amber-400">Grade {STUDENT.predictedGrade}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] text-white/30 mb-1">Study Hours</p>
              <p className="text-2xl font-semibold">{STUDENT.totalStudyHours}h</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] text-white/30 mb-1">Quizzes Done</p>
              <p className="text-2xl font-semibold">{STUDENT.totalQuizzes}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-[11px] text-white/30 mb-1">Essays Written</p>
              <p className="text-2xl font-semibold">{STUDENT.totalEssays}</p>
            </div>
          </div>

          {/* Score Trend */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Score Trend</h3>
              <span className="flex items-center gap-1 text-xs text-emerald-400">
                <TrendingUp className="h-3 w-3" />
                +11% this term
              </span>
            </div>
            <div className="flex items-end gap-1.5 h-32">
              {scores.map((s, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-[9px] text-white/30 tabular-nums">{s}%</span>
                  <div
                    className={`w-full rounded-t-md transition-all ${
                      i >= scores.length - 3
                        ? "bg-gradient-to-t from-emerald-600 to-emerald-400"
                        : "bg-gradient-to-t from-purple-600 to-indigo-500"
                    }`}
                    style={{ height: `${(s / maxScore) * 100}%` }}
                  />
                </div>
              ))}
            </div>
            <p className="mt-2 text-center text-[10px] text-white/20">Last 12 assessments</p>
          </div>
        </div>

        {/* Module-by-Module Breakdown */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Module-by-Module Breakdown</h2>
          <div className="space-y-6">
            {modules.map((mod) => (
              <div key={mod.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                {/* Module header */}
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="font-medium text-white/90">{mod.name}</span>
                    <span className="text-xs text-white/30 ml-2">
                      {mod.completedLessons}/{mod.lessons} lessons
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white/50">Avg: {mod.score}%</span>
                    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${moduleBadgeColor(mod.color)}`}>
                      {moduleLabel(mod.color)}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${moduleBarColor(mod.color)} transition-all`}
                      style={{ width: `${mod.percent}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold tabular-nums w-10 text-right">{mod.percent}%</span>
                </div>

                {/* Topic mastery grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                  {mod.topics.map((t) => (
                    <div
                      key={t.name}
                      className="rounded-lg border border-white/5 bg-white/[0.02] p-3"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-white/70 truncate">{t.name}</span>
                        <span className={`inline-flex items-center rounded-full border px-1.5 py-0.5 text-[10px] font-medium ${masteryBadge(t.status)}`}>
                          {t.mastery}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5">
                        <div
                          className={`h-1.5 rounded-full transition-all ${
                            t.status === "mastered" ? "bg-emerald-500"
                              : t.status === "good" ? "bg-green-500"
                                : t.status === "developing" ? "bg-amber-500"
                                  : "bg-red-500"
                          }`}
                          style={{ width: `${t.mastery}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-white/30 mt-1.5">{masteryLabel(t.status)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mock Exam Results */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Mock Exam Results</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {mockResults.map((m) => (
              <div key={m.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-white/90">{m.name}</h3>
                  <div className="flex items-center gap-1 text-xs">
                    {m.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 text-emerald-400" />
                    ) : m.trend === "down" ? (
                      <TrendingDown className="h-3 w-3 text-red-400" />
                    ) : (
                      <Minus className="h-3 w-3 text-white/30" />
                    )}
                    <span className={m.trend === "up" ? "text-emerald-400" : m.trend === "down" ? "text-red-400" : "text-white/30"}>
                      {m.trend === "up" ? "Improving" : m.trend === "down" ? "Declining" : "Stable"}
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold">{m.score}%</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-sm font-semibold text-purple-400 mb-1">
                    {m.grade}
                  </span>
                </div>
                <p className="text-xs text-white/30 mt-2">{m.date}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Essay Results */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Essay Submissions</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 divide-y divide-white/5">
            {essayResults.map((e, i) => {
              const gradeColor = parseInt(e.grade) >= 7
                ? "text-emerald-400 bg-emerald-500/20 border-emerald-500/30"
                : parseInt(e.grade) >= 5
                  ? "text-amber-400 bg-amber-500/20 border-amber-500/30"
                  : "text-red-400 bg-red-500/20 border-red-500/30"
              return (
                <div key={i} className="px-5 py-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/90">{e.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white/70">{e.score}%</span>
                      <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-medium ${gradeColor}`}>
                        Grade {e.grade}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">{e.feedback}</p>
                  <p className="text-[10px] text-white/20 mt-1">{e.date}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Achievement Badges */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Achievement Badges</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map((b) => {
              const Icon = b.earned ? b.icon : Lock
              return (
                <div
                  key={b.name}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors ${
                    b.earned
                      ? "border-purple-500/30 bg-purple-500/10"
                      : "border-white/5 bg-white/[0.02]"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      b.earned
                        ? "bg-purple-500/20 text-purple-400"
                        : "bg-white/5 text-white/20"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium leading-tight">{b.name}</span>
                  <span className="text-[10px] text-white/30 leading-tight">{b.desc}</span>
                  {!b.earned && (
                    <div className="w-full mt-1">
                      <div className="h-1 rounded-full bg-white/10">
                        <div
                          className="h-1 rounded-full bg-purple-500/40 transition-all"
                          style={{ width: `${b.progress}%` }}
                        />
                      </div>
                      <p className="text-[9px] text-white/20 mt-0.5">{b.progress}% there</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 divide-y divide-white/5">
            {recentActivity.map((a, i) => {
              const Icon = a.icon
              return (
                <div key={i} className="flex items-start gap-4 px-5 py-4">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{a.text}</p>
                    <p className="text-xs text-white/40 mt-0.5">{a.when}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-6 text-center">
          <Trophy className="mx-auto h-8 w-8 text-purple-400 mb-2" />
          <p className="text-lg font-semibold mb-1">Keep it up, {STUDENT.name.split(" ")[0]}!</p>
          <p className="text-sm text-white/50 mb-4">
            You are {100 - OVERALL_PERCENT}% away from completing all your modules. Keep the streak going!
          </p>
          <Link
            href="/demo/student"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium hover:bg-purple-500 transition-colors"
          >
            Continue Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-white/20">
          Demo data only. Not a real student account.
        </p>
      </div>
    </div>
  )
}

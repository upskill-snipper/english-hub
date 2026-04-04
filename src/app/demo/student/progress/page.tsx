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
} from "lucide-react"

const OVERALL_PERCENT = 67

const subjects = [
  { name: "English Language", percent: 56, color: "amber" as const },
  { name: "English Literature", percent: 72, color: "green" as const },
  { name: "Creative Writing", percent: 100, color: "complete" as const },
  { name: "Exam Technique", percent: 20, color: "red" as const },
]

const recentActivity = [
  {
    icon: BookOpen,
    text: "Completed Module 7: Inspector Calls Act 3",
    when: "Yesterday",
  },
  {
    icon: Target,
    text: "Quiz Score: 8/10 on Poetry Terms",
    when: "2 days ago",
  },
  {
    icon: FileText,
    text: "Essay submitted: Macbeth Analysis",
    when: "3 days ago",
  },
  {
    icon: PenTool,
    text: "Started Module: Exam Technique",
    when: "4 days ago",
  },
]

const badges = [
  { name: "5-Day Streak", icon: Flame, earned: true, desc: "5 consecutive days" },
  { name: "Quiz Master", icon: Zap, earned: true, desc: "10 quizzes completed" },
  { name: "First Essay", icon: FileText, earned: true, desc: "Submitted first essay" },
  { name: "Course Completed", icon: Award, earned: true, desc: "Creative Writing" },
  { name: "Perfect Score", icon: Star, earned: false, desc: "Score 100% on a quiz" },
  { name: "Essay Streak", icon: PenTool, earned: false, desc: "Submit 5 essays in a row" },
]

const upcoming = [
  { task: "Macbeth Essay Due", when: "in 3 days" },
  { task: "Poetry Quiz", when: "in 5 days" },
]

const scores = [62, 70, 55, 78, 80, 65, 85, 72]

function subjectBarColor(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "bg-green-500"
  if (color === "amber") return "bg-amber-500"
  if (color === "red") return "bg-red-500"
  return "bg-emerald-400"
}

function subjectBadgeColor(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "bg-green-500/20 text-green-400 border-green-500/30"
  if (color === "amber") return "bg-amber-500/20 text-amber-400 border-amber-500/30"
  if (color === "red") return "bg-red-500/20 text-red-400 border-red-500/30"
  return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
}

function subjectLabel(color: "amber" | "green" | "complete" | "red") {
  if (color === "green") return "Good"
  if (color === "amber") return "In Progress"
  if (color === "red") return "Needs Attention"
  return "Complete!"
}

export default function StudentProgressPage() {
  const maxScore = Math.max(...scores)

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-center text-sm font-medium">
        <span className="mr-2">Student Demo</span>
        <span className="text-white/70">
          Viewing as: Aisha Rahman (Year 10)
        </span>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/demo"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to demos
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">My Progress</h1>
          <p className="mt-1 text-white/50">Aisha Rahman — Year 10</p>
        </div>

        {/* Overall Progress Ring */}
        <div className="mb-10 flex flex-col items-center">
          <div className="relative h-48 w-48">
            <svg className="h-48 w-48 -rotate-90" viewBox="0 0 192 192">
              <circle
                cx="96"
                cy="96"
                r="80"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="14"
              />
              <circle
                cx="96"
                cy="96"
                r="80"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="14"
                strokeLinecap="round"
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

        {/* Subject Breakdown */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Subject Breakdown</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {subjects.map((s) => (
              <div
                key={s.name}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">{s.name}</span>
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${subjectBadgeColor(s.color)}`}
                  >
                    {subjectLabel(s.color)}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${subjectBarColor(s.color)} transition-all`}
                      style={{ width: `${s.percent}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold tabular-nums w-10 text-right">
                    {s.percent}%
                  </span>
                </div>
              </div>
            ))}
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

        {/* Achievement Badges */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Achievement Badges</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {badges.map((b) => {
              const Icon = b.earned ? b.icon : Lock
              return (
                <div
                  key={b.name}
                  className={`flex flex-col items-center gap-2 rounded-xl border p-4 text-center transition-colors ${
                    b.earned
                      ? "border-purple-500/30 bg-purple-500/10"
                      : "border-white/5 bg-white/[0.02] opacity-50"
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
                  <span className="text-xs font-medium leading-tight">
                    {b.name}
                  </span>
                  <span className="text-[10px] text-white/30 leading-tight">
                    {b.desc}
                  </span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Upcoming */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">Upcoming</h2>
          <div className="space-y-3">
            {upcoming.map((u, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-400">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{u.task}</p>
                </div>
                <span className="text-xs text-white/40 whitespace-nowrap">
                  {u.when}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* My Scores Trend */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-semibold">My Scores</h2>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-end gap-2 h-40">
              {scores.map((s, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <span className="text-[10px] text-white/40 tabular-nums">
                    {s}%
                  </span>
                  <div
                    className="w-full rounded-t-md bg-gradient-to-t from-purple-600 to-indigo-500 transition-all"
                    style={{ height: `${(s / maxScore) * 100}%` }}
                  />
                  <span className="text-[10px] text-white/30">
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-white/30">
              Last 8 scores
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-6 text-center">
          <Trophy className="mx-auto h-8 w-8 text-purple-400 mb-2" />
          <p className="text-lg font-semibold mb-1">Keep it up!</p>
          <p className="text-sm text-white/50 mb-4">
            Complete your next module.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-medium hover:bg-purple-500 transition-colors"
          >
            Continue Learning
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

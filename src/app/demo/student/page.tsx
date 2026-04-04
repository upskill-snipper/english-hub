"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Clock,
  Trophy,
  RotateCcw,
  ChevronRight,
  FileText,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react"

// ---------------------------------------------------------------------------
// Demo data
// ---------------------------------------------------------------------------

const COURSES = [
  {
    id: 1,
    title: "GCSE English Literature",
    board: "AQA",
    progress: 68,
    nextLesson: "Macbeth Act 3 Analysis",
    color: "from-emerald-500/20 to-emerald-500/5",
    border: "border-emerald-500/15",
    accent: "text-emerald-400",
  },
  {
    id: 2,
    title: "GCSE English Language",
    board: "AQA",
    progress: 54,
    nextLesson: "Paper 2 Question 5: Writing to Argue",
    color: "from-blue-500/20 to-blue-500/5",
    border: "border-blue-500/15",
    accent: "text-blue-400",
  },
  {
    id: 3,
    title: "Creative Writing Workshop",
    board: "Enrichment",
    progress: 82,
    nextLesson: "Crafting Dialogue",
    color: "from-purple-500/20 to-purple-500/5",
    border: "border-purple-500/15",
    accent: "text-purple-400",
  },
]

const ASSIGNMENTS = [
  {
    id: 1,
    title: "Macbeth Essay: How does Shakespeare present ambition?",
    course: "GCSE English Literature",
    dueDate: "Mon 7 Apr",
    type: "essay" as const,
  },
  {
    id: 2,
    title: "Paper 1 Practice -- Reading Comprehension",
    course: "GCSE English Language",
    dueDate: "Wed 9 Apr",
    type: "homework" as const,
  },
  {
    id: 3,
    title: "Poetry Anthology: Ozymandias Quiz",
    course: "GCSE English Literature",
    dueDate: "Fri 11 Apr",
    type: "quiz" as const,
  },
]

const RECENT_SCORES = [
  { id: 1, title: "An Inspector Calls Quiz", score: 8, maxScore: 10, type: "quiz" },
  { id: 2, title: "Language Paper 2 Mock", score: 31, maxScore: 40, type: "exam" },
  { id: 3, title: "Macbeth Act 1 Essay", score: 22, maxScore: 30, type: "essay" },
  { id: 4, title: "Unseen Poetry Practice", score: 14, maxScore: 20, type: "quiz" },
]

const FLASHCARDS = [
  { front: "Pathetic Fallacy", back: "When the weather or environment reflects the mood or emotions of the characters." },
  { front: "Dramatic Irony", back: "When the audience knows something that the characters do not." },
  { front: "Soliloquy", back: "A speech in a play where a character speaks their thoughts aloud, alone on stage." },
  { front: "Foreshadowing", back: "A literary device where the author hints at events that will occur later in the story." },
  { front: "Juxtaposition", back: "Placing two contrasting things close together to highlight their differences." },
]

const MOCK_EXAMS = [
  { id: 1, title: "English Literature Paper 1", duration: "1h 45m", questions: "Shakespeare + 19th Century Novel" },
  { id: 2, title: "English Language Paper 1", duration: "1h 45m", questions: "Explorations in Creative Reading & Writing" },
]

// ---------------------------------------------------------------------------
// Progress Ring Component
// ---------------------------------------------------------------------------

function ProgressRing({ value, size = 120, stroke = 8 }: { value: number; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  let color = "stroke-red-500"
  if (value >= 70) color = "stroke-emerald-500"
  else if (value >= 50) color = "stroke-amber-500"

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          className={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-semibold text-white/90">{value}%</span>
        <span className="text-[10px] text-white/40">overall</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Flashcard Widget
// ---------------------------------------------------------------------------

function FlashcardWidget() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = FLASHCARDS[index]

  function handleNext() {
    setFlipped(false)
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % FLASHCARDS.length)
    }, 150)
  }

  return (
    <div className="space-y-4">
      {/* Card */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative cursor-pointer select-none"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-48 transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front */}
          <div
            className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-br from-violet-500/10 to-pink-500/10 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-xs text-white/40 mb-3">Tap to reveal</p>
            <p className="text-lg font-medium text-white/90 text-center">
              {card.front}
            </p>
            <p className="text-xs text-white/30 mt-4">
              {index + 1} / {FLASHCARDS.length}
            </p>
          </div>

          {/* Back */}
          <div
            className="absolute inset-0 rounded-xl border border-violet-500/20 bg-gradient-to-br from-violet-500/15 to-pink-500/15 flex flex-col items-center justify-center p-6"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p className="text-xs text-violet-400/70 mb-3">Definition</p>
            <p className="text-sm text-white/80 text-center leading-relaxed">
              {card.back}
            </p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
        >
          <RotateCcw className="h-4 w-4" />
          Next Card
        </button>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function StudentDemoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-violet-500/20 bg-violet-500/5 px-4 py-3">
          <p className="text-sm text-violet-400">
            <span className="font-semibold">Student Demo</span> -- See what
            students experience
          </p>
        </div>

        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-light tracking-tight text-white/90">
            Welcome, Aisha
          </h1>
          <p className="text-white/40 text-sm mt-1">
            Year 11 -- Riverside Academy
          </p>
        </div>

        {/* ── My Courses ─────────────────────────────────────────────────── */}
        <section id="courses" className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4">My Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className={`rounded-xl border ${course.border} bg-gradient-to-b ${course.color} p-5 transition-all hover:scale-[1.02]`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-medium text-white/90">
                    {course.title}
                  </h3>
                  <span className="text-[10px] text-white/30 bg-white/5 px-2 py-0.5 rounded-full">
                    {course.board}
                  </span>
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-white/40">Progress</span>
                    <span className={course.accent}>{course.progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5">
                    <div
                      className={`h-1.5 rounded-full bg-gradient-to-r ${
                        course.progress >= 70
                          ? "from-emerald-500 to-emerald-400"
                          : course.progress >= 50
                            ? "from-amber-500 to-amber-400"
                            : "from-red-500 to-red-400"
                      } transition-all`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <p className="text-xs text-white/40">
                  <span className="text-white/50">Next:</span> {course.nextLesson}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Progress + Assignments row ─────────────────────────────────── */}
        <div id="progress" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Current Progress */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6 flex flex-col items-center justify-center">
            <h2 className="text-sm font-medium text-white/60 mb-4">
              Current Progress
            </h2>
            <ProgressRing value={65} />
            <div className="flex items-center gap-4 mt-4 text-xs text-white/40">
              <span className="flex items-center gap-1">
                <Star className="h-3 w-3 text-amber-400" />
                12 quizzes
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-3 w-3 text-blue-400" />
                5 essays
              </span>
            </div>
          </div>

          {/* Upcoming Assignments */}
          <div className="lg:col-span-2 rounded-xl border border-white/5 bg-white/[0.02] p-6">
            <h2 className="text-sm font-medium text-white/60 mb-4">
              Upcoming Assignments
            </h2>
            <div className="space-y-3">
              {ASSIGNMENTS.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center gap-4 rounded-lg border border-white/5 bg-white/[0.01] px-4 py-3"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      a.type === "essay"
                        ? "bg-blue-500/10"
                        : a.type === "quiz"
                          ? "bg-amber-500/10"
                          : "bg-purple-500/10"
                    }`}
                  >
                    {a.type === "essay" ? (
                      <FileText className="h-4 w-4 text-blue-400" />
                    ) : a.type === "quiz" ? (
                      <Trophy className="h-4 w-4 text-amber-400" />
                    ) : (
                      <BookOpen className="h-4 w-4 text-purple-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80 truncate">{a.title}</p>
                    <p className="text-[11px] text-white/30">{a.course}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/40 shrink-0">
                    <Clock className="h-3 w-3" />
                    {a.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recent Scores ──────────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-white/80 mb-4">
            Recent Scores
          </h2>
          <div className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Assessment
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Score
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-white/40">
                      Grade
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_SCORES.map((s) => {
                    const pct = Math.round((s.score / s.maxScore) * 100)
                    let grade = "U"
                    if (pct >= 90) grade = "9"
                    else if (pct >= 80) grade = "8"
                    else if (pct >= 70) grade = "7"
                    else if (pct >= 60) grade = "6"
                    else if (pct >= 50) grade = "5"
                    else if (pct >= 40) grade = "4"
                    return (
                      <tr
                        key={s.id}
                        className="border-b border-white/5 last:border-0 hover:bg-white/[0.02]"
                      >
                        <td className="px-4 py-3 text-white/80">{s.title}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                              s.type === "essay"
                                ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                : s.type === "exam"
                                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            }`}
                          >
                            {s.type}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={
                              pct >= 70
                                ? "text-green-400"
                                : pct >= 50
                                  ? "text-amber-400"
                                  : "text-red-400"
                            }
                          >
                            {s.score}/{s.maxScore}
                          </span>
                          <span className="text-white/30 ml-1 text-xs">
                            ({pct}%)
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-xs font-medium text-white/70">
                            {grade}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Flashcard Practice + Mock Exams row ────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Flashcard Practice */}
          <section id="flashcards">
            <h2 className="text-lg font-medium text-white/80 mb-4">
              Flashcard Practice
            </h2>
            <div className="rounded-xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-xs text-white/40 mb-4">
                Literary Terms -- {FLASHCARDS.length} cards
              </p>
              <FlashcardWidget />
            </div>
          </section>

          {/* Mock Exam Practice */}
          <section>
            <h2 className="text-lg font-medium text-white/80 mb-4">
              Mock Exam Practice
            </h2>
            <div className="space-y-4">
              {MOCK_EXAMS.map((exam) => (
                <div
                  key={exam.id}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-white/10 hover:bg-white/[0.04]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-white/90">
                      {exam.title}
                    </h3>
                    <ChevronRight className="h-4 w-4 text-white/20" />
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {exam.duration}
                    </span>
                    <span>{exam.questions}</span>
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 rounded-lg border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400 hover:bg-violet-500/20 transition-colors">
                    <FileText className="h-4 w-4" />
                    Take Practice Paper
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="rounded-xl border border-violet-500/20 bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-violet-500/10 p-8 text-center">
            <h2 className="text-xl font-medium text-white/90 mb-2">
              Get full access
            </h2>
            <p className="text-sm text-white/50 mb-6 max-w-md mx-auto">
              Unlock all courses, unlimited flashcards, mock exams with instant
              feedback, and personalised study plans.
            </p>
            <Link
              href="/auth/register"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Sparkles className="h-4 w-4" />
              Start Free Trial
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

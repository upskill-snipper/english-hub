"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BookOpen,
  Clock,
  Trophy,
  RotateCcw,
  ChevronDown,
  FileText,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  Target,
  ArrowRight,
  Flame,
  Award,
  Zap,
  ThumbsUp,
  AlertTriangle,
  Lightbulb,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { percentageToGCSEGrade, percentageToGCSEGradeLabel, gcseGradeColor } from "@/lib/grades"
import GradeProgressCard from "@/components/GradeProgressCard"
import GradeRecommendations from "@/components/GradeRecommendations"
import ReadingProfileCard from "@/components/ReadingProfileCard"

// ---------------------------------------------------------------------------
// Demo data -- Aisha Rahman's student perspective
// ---------------------------------------------------------------------------

const STUDENT = {
  name: "Aisha",
  yearGroup: "Year 11",
  school: "Riverside Academy",
  overallProgress: 65,
  streak: 7,
  quizzesCompleted: 12,
  essaysSubmitted: 5,
  averageScore: 74,
  targetGrade: "7",
  predictedGrade: "6",
  totalAssignments: 20,
  assignmentsDone: 14,
}

const COURSES = [
  {
    id: "igcse-lang-p1",
    title: "GCSE English Literature",
    board: "AQA",
    progress: 68,
    nextLesson: "Macbeth Act 3 Analysis",
    color: "from-teal-800/20 to-teal-600/5",
    border: "border-teal-800/15",
    accent: "text-teal-700",
  },
  {
    id: "igcse-lang-p2",
    title: "GCSE English Language",
    board: "AQA",
    progress: 54,
    nextLesson: "Paper 2 Q5: Writing to Argue",
    color: "from-teal-800/20 to-teal-600/5",
    border: "border-blue-500/15",
    accent: "text-teal-700",
  },
  {
    id: "creative-writing",
    title: "Creative Writing Workshop",
    board: "Enrichment",
    progress: 82,
    nextLesson: "Crafting Dialogue",
    color: "from-clay-500/20 to-clay-400/5",
    border: "border-purple-500/15",
    accent: "text-clay-600",
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
  { id: 1, title: "An Inspector Calls Quiz", score: 8, maxScore: 10, type: "quiz", date: "28 Mar" },
  { id: 2, title: "Language Paper 2 Mock", score: 31, maxScore: 40, type: "exam", date: "25 Mar" },
  { id: 3, title: "Macbeth Act 1 Essay", score: 22, maxScore: 30, type: "essay", date: "20 Mar" },
  { id: 4, title: "Unseen Poetry Practice", score: 14, maxScore: 20, type: "quiz", date: "17 Mar" },
  { id: 5, title: "Creative Writing: Narrative Voice", score: 27, maxScore: 30, type: "essay", date: "12 Mar" },
]

const STRENGTHS = [
  { topic: "Creative Writing", score: 90, detail: "Strong narrative voice and imagery" },
  { topic: "Inspector Calls", score: 85, detail: "Excellent character analysis" },
  { topic: "Reading Comprehension", score: 80, detail: "Good inference skills" },
  { topic: "Language Analysis", score: 78, detail: "Solid PEE paragraphs" },
]

const AREAS_TO_IMPROVE = [
  { topic: "Unseen Poetry", score: 55, suggestion: "Practise annotating unseen poems under timed conditions" },
  { topic: "Exam Technique", score: 48, suggestion: "Focus on timing -- try the Timed Reading module" },
  { topic: "Comparison Essays", score: 52, suggestion: "Use comparative connectives: 'whereas', 'in contrast'" },
]

const RECOMMENDED_NEXT = [
  {
    title: "Unseen Poetry: Step-by-Step",
    course: "GCSE English Literature",
    reason: "Your weakest area -- targeted practice will boost your grade",
    priority: "high" as const,
    courseId: "igcse-lit-poetry",
    icon: Target,
  },
  {
    title: "Exam Technique Masterclass",
    course: "Exam Skills",
    reason: "Improve time management for Paper 1 and Paper 2",
    priority: "high" as const,
    courseId: "exam-technique",
    icon: Clock,
  },
  {
    title: "Macbeth Act 3 Analysis",
    course: "GCSE English Literature",
    reason: "Continue your Literature course -- next lesson ready",
    priority: "medium" as const,
    courseId: "igcse-lang-p1",
    icon: BookOpen,
  },
]

const FLASHCARDS = [
  { front: "Pathetic Fallacy", back: "When the weather or environment reflects the mood or emotions of the characters." },
  { front: "Dramatic Irony", back: "When the audience knows something that the characters do not." },
  { front: "Soliloquy", back: "A speech in a play where a character speaks their thoughts aloud, alone on stage." },
  { front: "Foreshadowing", back: "A literary device where the author hints at events that will occur later in the story." },
  { front: "Juxtaposition", back: "Placing two contrasting things close together to highlight their differences." },
]

// ---------------------------------------------------------------------------
// Progress Ring Component (large, with gradient stroke)
// ---------------------------------------------------------------------------

function ProgressRing({ value, size = 200, stroke = 12 }: { value: number; size?: number; stroke?: number }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  const gradientId = `progress-gradient-${size}`

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="50%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-ink-900 tabular-nums">{value}%</span>
        <span className="text-xs text-ink-500 mt-0.5">overall progress</span>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Mini Progress Ring (for course cards)
// ---------------------------------------------------------------------------

function MiniRing({ value, size = 44, stroke = 3, color }: { value: number; size?: number; stroke?: number; color: string }) {
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={stroke} />
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
        style={{ transition: "stroke-dashoffset 0.6s ease-out" }}
      />
    </svg>
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
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative cursor-pointer select-none"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-44 transition-transform duration-500"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          <div
            className="absolute inset-0 rounded-xl border border-ink-200 bg-gradient-to-br from-violet-500/10 to-clay-400/10 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: "hidden" }}
          >
            <p className="text-xs text-ink-500 mb-3">Tap to reveal</p>
            <p className="text-lg font-medium text-ink-900 text-center">{card.front}</p>
            <p className="text-xs text-ink-500 mt-4">{index + 1} / {FLASHCARDS.length}</p>
          </div>
          <div
            className="absolute inset-0 rounded-xl border border-teal-800/20 bg-gradient-to-br from-violet-500/15 to-clay-400/15 flex flex-col items-center justify-center p-6"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <p className="text-xs text-teal-700/70 mb-3">Definition</p>
            <p className="text-sm text-ink-900 text-center leading-relaxed">{card.back}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-ink-200 bg-cream-100 text-sm text-ink-600 hover:text-ink-900 hover:border-ink-200 transition-colors"
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
  const [flashcardsOpen, setFlashcardsOpen] = useState(false)

  const assignmentPct = Math.round((STUDENT.assignmentsDone / STUDENT.totalAssignments) * 100)

  return (
    <div className="min-h-screen bg-cream-50 text-ink-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Demo banner */}
        <div className="mb-6 rounded-lg border border-teal-800/20 bg-teal-800/5 px-4 py-3">
          <p className="text-sm text-teal-700">
            <span className="font-semibold">Student Demo</span> -- See what students experience
          </p>
        </div>

        {/* ── HERO SECTION ─────────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-violet-500/[0.06] via-transparent to-teal-600/[0.04] p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left: Welcome text */}
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl font-light tracking-tight text-ink-900 mb-2">
                  Welcome back, {STUDENT.name}
                </h1>
                <p className="text-ink-500 text-sm mb-5">
                  {STUDENT.yearGroup} &middot; {STUDENT.school}
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {/* Working At Grade */}
                  <div className="flex items-center gap-2 rounded-lg border border-teal-800/20 bg-blue-500/5 px-3 py-2">
                    <Star className="h-4 w-4 text-teal-700" />
                    <span className="text-sm text-ink-600">
                      Working At: <span className={`font-semibold ${gcseGradeColor(percentageToGCSEGrade(STUDENT.averageScore))}`}>Grade {percentageToGCSEGrade(STUDENT.averageScore)}</span>
                    </span>
                  </div>
                  {/* Predicted grade */}
                  <div className="flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2">
                    <Award className="h-4 w-4 text-amber-400" />
                    <span className="text-sm text-ink-600">
                      Predicted: <span className="font-semibold text-amber-400">Grade {STUDENT.predictedGrade}</span>
                    </span>
                  </div>
                  {/* Target grade */}
                  <div className="flex items-center gap-2 rounded-lg border border-teal-800/20 bg-teal-800/5 px-3 py-2">
                    <Target className="h-4 w-4 text-teal-700" />
                    <span className="text-sm text-ink-600">
                      Target: <span className="font-semibold text-teal-700">Grade {STUDENT.targetGrade}</span>
                    </span>
                  </div>
                  {/* Streak badge */}
                  <div className="flex items-center gap-2 rounded-lg border border-orange-500/20 bg-gradient-to-r from-orange-500/10 to-red-500/10 px-3 py-2">
                    <Flame className="h-4 w-4 text-orange-400" />
                    <span className="text-sm font-semibold text-orange-400">{STUDENT.streak} day streak</span>
                  </div>
                </div>
              </div>

              {/* Right: Progress ring */}
              <div className="flex-shrink-0">
                <ProgressRing value={STUDENT.overallProgress} size={200} stroke={12} />
              </div>
            </div>
          </div>
        </section>

        {/* ── QUICK STATS ROW ──────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Average Grade */}
            <div className="rounded-xl border border-ink-200 bg-gradient-to-br from-teal-800/[0.08] to-teal-600/[0.02] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-ink-500 uppercase tracking-wider">Average Grade</p>
                <span className="flex items-center gap-1 text-xs text-teal-700">
                  <TrendingUp className="h-3 w-3" />
                  improving
                </span>
              </div>
              <p className={`text-3xl font-bold tabular-nums ${gcseGradeColor(percentageToGCSEGrade(STUDENT.averageScore))}`}>Grade {percentageToGCSEGrade(STUDENT.averageScore)}</p>
              <p className="text-[11px] text-ink-500 mt-1">across all assessments</p>
            </div>

            {/* Assignments Done */}
            <div className="rounded-xl border border-ink-200 bg-gradient-to-br from-teal-800/[0.08] to-teal-600/[0.02] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-ink-500 uppercase tracking-wider">Completed</p>
                <CheckCircle className="h-4 w-4 text-teal-700/50" />
              </div>
              <p className="text-3xl font-bold text-ink-900 tabular-nums">
                {STUDENT.assignmentsDone}<span className="text-lg text-ink-500">/{STUDENT.totalAssignments}</span>
              </p>
              <div className="mt-2 h-1.5 rounded-full bg-cream-100">
                <div
                  className="h-1.5 rounded-full bg-gradient-to-r from-teal-800 to-emerald-400 transition-all"
                  style={{ width: `${assignmentPct}%` }}
                />
              </div>
            </div>

            {/* Study Streak */}
            <div className="rounded-xl border border-ink-200 bg-gradient-to-br from-orange-500/[0.08] to-red-500/[0.04] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-ink-500 uppercase tracking-wider">Streak</p>
                <Flame className="h-4 w-4 text-orange-400/50" />
              </div>
              <p className="text-3xl font-bold text-ink-900 tabular-nums">
                {STUDENT.streak} <span className="text-lg text-ink-500">days</span>
              </p>
              <p className="text-[11px] text-ink-500 mt-1">keep it going!</p>
            </div>

            {/* Next Goal */}
            <div className="rounded-xl border border-ink-200 bg-gradient-to-br from-violet-500/[0.08] to-clay-400/[0.04] p-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-ink-500 uppercase tracking-wider">Next Goal</p>
                <Star className="h-4 w-4 text-teal-700/50" />
              </div>
              <p className="text-lg font-bold text-ink-900">Grade {STUDENT.targetGrade}</p>
              <p className="text-[11px] text-ink-500 mt-1">
                {Number(STUDENT.targetGrade) - Number(STUDENT.predictedGrade)} grade{Number(STUDENT.targetGrade) - Number(STUDENT.predictedGrade) !== 1 ? "s" : ""} to go
              </p>
              <div className="mt-2">
                <Link
                  href="/demo/student/progress"
                  className="inline-flex items-center gap-1 text-xs text-teal-700 hover:text-teal-700 transition-colors"
                >
                  View progress
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── STRENGTHS & IMPROVEMENTS (side by side) ───────────────────── */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="rounded-2xl border border-teal-800/10 bg-gradient-to-b from-teal-800/[0.06] to-transparent p-6">
              <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
                <ThumbsUp className="h-5 w-5 text-teal-700" />
                Your Strengths
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {STRENGTHS.map((s) => (
                  <span
                    key={s.topic}
                    className="inline-flex items-center gap-1.5 rounded-full bg-teal-800/10 border border-teal-800/20 px-3 py-1.5 text-xs font-medium text-teal-700"
                  >
                    <CheckCircle className="h-3 w-3" />
                    {s.topic}
                    <span className="text-teal-700/60">G{percentageToGCSEGrade(s.score)}</span>
                  </span>
                ))}
              </div>
              <div className="space-y-2">
                {STRENGTHS.map((s) => (
                  <div key={s.topic} className="flex items-center gap-3 text-xs text-ink-500">
                    <span className="font-medium text-ink-600 w-36 shrink-0">{s.topic}</span>
                    <div className="flex-1 h-1 rounded-full bg-cream-100">
                      <div
                        className="h-1 rounded-full bg-teal-700/60"
                        style={{ width: `${s.score}%` }}
                      />
                    </div>
                    <span className="tabular-nums text-teal-700/70 w-12 text-right">G{percentageToGCSEGrade(s.score)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas to Improve */}
            <div className="rounded-2xl border border-amber-500/10 bg-gradient-to-b from-amber-500/[0.06] to-transparent p-6">
              <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-400" />
                Areas to Improve
              </h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {AREAS_TO_IMPROVE.map((a) => (
                  <span
                    key={a.topic}
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${
                      a.score < 50
                        ? "bg-red-500/10 border-red-500/20 text-red-400"
                        : "bg-amber-500/10 border-amber-500/20 text-amber-400"
                    }`}
                  >
                    <AlertTriangle className="h-3 w-3" />
                    {a.topic}
                    <span className="opacity-60">G{percentageToGCSEGrade(a.score)}</span>
                  </span>
                ))}
              </div>
              <div className="space-y-3">
                {AREAS_TO_IMPROVE.map((a) => (
                  <div key={a.topic} className="rounded-lg border border-ink-200 bg-white p-3">
                    <div className="flex items-center gap-3 mb-1.5">
                      <span className="font-medium text-sm text-ink-600">{a.topic}</span>
                      <div className="flex-1 h-1 rounded-full bg-cream-100">
                        <div
                          className={`h-1 rounded-full ${a.score < 50 ? "bg-red-500/60" : "bg-amber-500/60"}`}
                          style={{ width: `${a.score}%` }}
                        />
                      </div>
                      <span className={`tabular-nums text-xs w-12 text-right ${a.score < 50 ? "text-red-400/70" : "text-amber-400/70"}`}>
                        G{percentageToGCSEGrade(a.score)}
                      </span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Lightbulb className="h-3 w-3 text-amber-400/50 mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-ink-500">{a.suggestion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── GRADE PROGRESS & RECOMMENDATIONS ─────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-teal-700" />
            Next Grade Recommendations
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Grade Progress Card */}
            <div className="lg:col-span-1">
              <GradeProgressCard
                currentGrade={Number(STUDENT.predictedGrade)}
                predictedGrade={Number(STUDENT.predictedGrade)}
                targetGrade={Number(STUDENT.targetGrade)}
                trend="up"
              />
            </div>
            {/* Recommendations */}
            <div className="lg:col-span-2">
              <GradeRecommendations
                currentGrade={Number(STUDENT.predictedGrade)}
                weakAreas={AREAS_TO_IMPROVE.map((a) => a.topic)}
                maxActions={3}
                showResources={false}
                compact
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              size="sm"
              render={<Link href="/demo/student/progress" />}
              className="text-teal-700 border-teal-800/20 hover:bg-teal-600/10"
            >
              View Full Recommendations
              <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
            </Button>
          </div>
        </section>

        {/* ── READING PROFILE ──────────────────────────────────────────── */}
        <section className="mb-10">
          <ReadingProfileCard
            readingAge={186}
            decodingAge={192}
            fluencyAge={180}
            assessmentDate="2026-02-12"
            yearGroup="Year 11"
            compact
          />
        </section>

        {/* ── MY COURSES (2-col compact grid) ──────────────────────────── */}
        <section id="courses" className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-ink-900">My Courses</h2>
            <Link
              href="/demo/student/courses"
              className="text-xs text-teal-700 hover:text-teal-700 transition-colors flex items-center gap-1"
            >
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/demo/student/courses/${course.id}`}
                className={`rounded-xl border ${course.border} bg-gradient-to-br ${course.color} p-5 transition-all hover:scale-[1.01] hover:border-ink-200 block`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-ink-900 mb-0.5">{course.title}</h3>
                    <span className="text-[10px] text-ink-500">{course.board}</span>
                  </div>
                  <div className="relative flex-shrink-0 ml-3">
                    <MiniRing
                      value={course.progress}
                      size={44}
                      stroke={3}
                      color={
                        course.progress >= 70
                          ? "stroke-emerald-400"
                          : course.progress >= 50
                            ? "stroke-amber-400"
                            : "stroke-red-400"
                      }
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-ink-600 tabular-nums">
                      {course.progress}%
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-ink-500">
                  <Play className="h-3 w-3 text-ink-500/50" />
                  <span className="truncate">
                    <span className="text-ink-500">Next:</span> {course.nextLesson}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── RECOMMENDED NEXT (prominent CTA cards) ───────────────────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-ink-900 mb-4 flex items-center gap-2">
            <Zap className="h-5 w-5 text-teal-700" />
            Recommended Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {RECOMMENDED_NEXT.map((r) => {
              const Icon = r.icon
              return (
                <div
                  key={r.title}
                  className={`group rounded-xl border p-5 transition-all ${
                    r.priority === "high"
                      ? "border-teal-800/20 bg-gradient-to-b from-violet-500/10 to-clay-500/[0.02]"
                      : "border-ink-200 bg-white"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      r.priority === "high" ? "bg-teal-700/15" : "bg-cream-100"
                    }`}>
                      <Icon className={`h-4 w-4 ${r.priority === "high" ? "text-teal-700" : "text-ink-500"}`} />
                    </div>
                    <span
                      className={`text-[10px] font-medium uppercase tracking-wider ${
                        r.priority === "high" ? "text-teal-700" : "text-ink-500"
                      }`}
                    >
                      {r.priority === "high" ? "Priority" : "Up Next"}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium text-ink-900 mb-1">{r.title}</h3>
                  <p className="text-[11px] text-ink-500 mb-3">{r.course}</p>
                  <p className="text-xs text-ink-500 leading-relaxed mb-4">{r.reason}</p>
                  <Button
                    size="sm"
                    className={`w-full ${
                      r.priority === "high"
                        ? "bg-teal-700/20 border-violet-500/30 text-teal-700 hover:bg-teal-700/30"
                        : "bg-cream-100 border-ink-200 text-ink-600 hover:bg-cream-100"
                    }`}
                    variant="outline"
                    render={<Link href={`/demo/student/courses/${r.courseId}`} />}
                  >
                    <Play className="h-3.5 w-3.5 mr-1.5" />
                    Start
                  </Button>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── READING ASSESSMENT CTA ───────────────────────────────────── */}
        <section className="mb-10">
          <Link
            href="/assessment/reading"
            className="group block rounded-2xl border border-teal-800/15 bg-gradient-to-r from-teal-800/10 via-blue-500/10 to-clay-500/10 p-6 transition-all hover:border-teal-800/30 hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-teal-800/10 flex items-center justify-center shrink-0">
                <BookOpen className="h-6 w-6 text-teal-700" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-ink-900 mb-1">Reading Comprehension Assessment</h3>
                <p className="text-xs text-ink-500">
                  Discover your reading age, decoding skills, and fluency level with our standardised assessment tool.
                  Takes approximately 20-30 minutes.
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-teal-700 transition-transform group-hover:translate-x-1 shrink-0 hidden sm:block" />
            </div>
          </Link>
        </section>

        {/* ── RECENT RESULTS (clean table with color-coded scores) ──────── */}
        <section className="mb-10">
          <h2 className="text-lg font-medium text-ink-900 mb-4">Recent Results</h2>
          <div className="rounded-xl border border-ink-200 bg-white overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-ink-200">
                    <th className="text-left px-5 py-3 text-xs font-medium text-ink-500">Assessment</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-ink-500">Type</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-ink-500">Score</th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-ink-500">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {RECENT_SCORES.map((s) => {
                    const pct = Math.round((s.score / s.maxScore) * 100)
                    const scoreColor =
                      pct >= 80
                        ? "text-teal-700"
                        : pct >= 60
                          ? "text-amber-400"
                          : "text-red-400"
                    const scoreBg =
                      pct >= 80
                        ? "bg-teal-800/10"
                        : pct >= 60
                          ? "bg-amber-500/10"
                          : "bg-red-500/10"
                    return (
                      <tr
                        key={s.id}
                        className="border-b border-ink-200 last:border-0 hover:bg-white"
                      >
                        <td className="px-5 py-3 text-ink-900">{s.title}</td>
                        <td className="px-5 py-3">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${
                              s.type === "essay"
                                ? "bg-teal-800/10 text-teal-700 border border-teal-800/20"
                                : s.type === "exam"
                                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                            }`}
                          >
                            {s.type}
                          </span>
                        </td>
                        <td className="px-5 py-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${scoreBg} ${scoreColor}`}>
                            {s.score}/{s.maxScore}
                            <span className="opacity-60">({pct}%)</span>
                          </span>
                        </td>
                        <td className="px-5 py-3 text-xs text-ink-500">{s.date}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── UPCOMING ASSIGNMENTS + FLASHCARDS (side by side) ──────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Upcoming Assignments */}
          <section>
            <h2 className="text-lg font-medium text-ink-900 mb-4">Upcoming Assignments</h2>
            <div className="space-y-3">
              {ASSIGNMENTS.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center gap-4 rounded-xl border border-ink-200 bg-white px-4 py-3 hover:border-ink-200 transition-colors"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      a.type === "essay"
                        ? "bg-teal-800/10"
                        : a.type === "quiz"
                          ? "bg-amber-500/10"
                          : "bg-clay-500/10"
                    }`}
                  >
                    {a.type === "essay" ? (
                      <FileText className="h-4 w-4 text-teal-700" />
                    ) : a.type === "quiz" ? (
                      <Trophy className="h-4 w-4 text-amber-400" />
                    ) : (
                      <BookOpen className="h-4 w-4 text-clay-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-ink-900 truncate">{a.title}</p>
                    <p className="text-[11px] text-ink-500">{a.course}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-ink-500 shrink-0">
                    <Clock className="h-3 w-3" />
                    {a.dueDate}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Flashcard Practice (collapsible) */}
          <section id="flashcards">
            <button
              onClick={() => setFlashcardsOpen(!flashcardsOpen)}
              className="flex items-center gap-2 text-lg font-medium text-ink-900 mb-4 w-full text-left hover:text-ink-900 transition-colors"
            >
              <ChevronDown
                className={`h-4 w-4 text-ink-500 transition-transform ${flashcardsOpen ? "rotate-0" : "-rotate-90"}`}
              />
              Flashcard Practice
              <span className="text-xs text-ink-500 font-normal ml-1">({FLASHCARDS.length} cards)</span>
            </button>
            {flashcardsOpen ? (
              <div className="rounded-xl border border-ink-200 bg-white p-6">
                <p className="text-xs text-ink-500 mb-4">Literary Terms</p>
                <FlashcardWidget />
              </div>
            ) : (
              <div
                onClick={() => setFlashcardsOpen(true)}
                className="rounded-xl border border-dashed border-ink-200 bg-white p-6 flex items-center justify-center cursor-pointer hover:border-white/15 transition-colors"
              >
                <p className="text-sm text-ink-500">Click to expand flashcard practice</p>
              </div>
            )}
          </section>
        </div>

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="mb-10">
          <div className="rounded-2xl border border-teal-800/20 bg-gradient-to-r from-violet-500/10 via-pink-500/10 to-clay-500/10 p-8 text-center">
            <h2 className="text-xl font-medium text-ink-900 mb-2">Get full access</h2>
            <p className="text-sm text-ink-500 mb-6 max-w-md mx-auto">
              Unlock all courses, unlimited flashcards, mock exams with instant feedback, and personalised study plans.
            </p>
            <Button
              render={<Link href="/auth/register" />}
              className="bg-gradient-to-r from-violet-500 to-clay-400 text-white border-0 hover:opacity-90"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Start Free Trial
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

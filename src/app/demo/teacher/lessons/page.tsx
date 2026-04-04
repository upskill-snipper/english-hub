"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  Sparkles,
  ChevronDown,
  ChevronRight,
  Download,
  FileText,
  Copy,
  Check,
  RefreshCw,
  Clock,
  BookOpen,
  Target,
  Users,
  MessageSquare,
  Home,
  Lightbulb,
  GraduationCap,
} from "lucide-react"
import DemoBanner from "@/components/demo/DemoBanner"
import { y10IgcseLitOmamLessons } from "@/data/lesson-plans/y10-igcse-lit-omam-lessons"
import { y11IgcseLitMacbethLessons } from "@/data/lesson-plans/y11-igcse-lit-macbeth-lessons"
import { y11IgcseLitInspectorLessons } from "@/data/lesson-plans/y11-igcse-lit-inspector-lessons"
import { y7Term1Lessons } from "@/data/lesson-plans/y7-term1-lessons"
import type { LessonPlan, LessonActivity } from "@/types"
import {
  downloadAsTextFile,
  generateLessonPlanText,
  generateWorksheetText,
} from "@/lib/generate-download"

// ---------------------------------------------------------------------------
// Pool of real lessons from imported data
// ---------------------------------------------------------------------------

const ALL_LESSONS: LessonPlan[] = [
  y10IgcseLitOmamLessons[0],
  y10IgcseLitOmamLessons[1],
  y11IgcseLitMacbethLessons[0],
  y11IgcseLitMacbethLessons[1],
  y11IgcseLitInspectorLessons[0],
  y11IgcseLitInspectorLessons[1],
  y7Term1Lessons[0],
  y7Term1Lessons[1],
]

// Derive unique filter options from real data
const TEXTS = [...new Set(ALL_LESSONS.map((l) => l.text))]
const YEAR_GROUPS = [...new Set(ALL_LESSONS.map((l) => l.yearGroup))]
const BOARDS = [...new Set(ALL_LESSONS.map((l) => l.board))]
const DURATIONS = ["30 minutes", "45 minutes", "60 minutes"]

// ---------------------------------------------------------------------------
// Collapsible card
// ---------------------------------------------------------------------------

function CollapsibleCard({
  title,
  icon,
  defaultOpen = false,
  children,
}: {
  title: string
  icon: React.ReactNode
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-3 px-5 py-4 text-left hover:bg-white/[0.03] transition-colors"
      >
        <span className="text-amber-400/80">{icon}</span>
        <span className="flex-1 text-sm font-medium text-white/90">{title}</span>
        {open ? (
          <ChevronDown className="h-4 w-4 text-neutral-500" />
        ) : (
          <ChevronRight className="h-4 w-4 text-neutral-500" />
        )}
      </button>
      {open && <div className="px-5 pb-5 pt-1">{children}</div>}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Activity renderer
// ---------------------------------------------------------------------------

function ActivityBlock({ activity, label }: { activity: LessonActivity; label?: string }) {
  return (
    <div className="space-y-3">
      {label && (
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">{label}</p>
      )}
      <div className="flex items-start justify-between gap-4">
        <h4 className="text-sm font-medium text-white/90">{activity.title}</h4>
        <span className="shrink-0 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] text-amber-400">
          {activity.duration}
        </span>
      </div>
      <p className="text-sm text-neutral-400 leading-relaxed">{activity.instructions}</p>
      {activity.differentiation && (
        <div className="mt-3 space-y-2 rounded-lg border border-white/[0.04] bg-white/[0.015] p-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
            Differentiation
          </p>
          <div className="space-y-2 text-sm">
            <div>
              <span className="inline-block w-16 text-emerald-400/70 font-medium text-xs">
                Support
              </span>
              <span className="text-neutral-400">{activity.differentiation.support}</span>
            </div>
            <div>
              <span className="inline-block w-16 text-blue-400/70 font-medium text-xs">
                Core
              </span>
              <span className="text-neutral-400">{activity.differentiation.core}</span>
            </div>
            <div>
              <span className="inline-block w-16 text-purple-400/70 font-medium text-xs">
                Stretch
              </span>
              <span className="text-neutral-400">{activity.differentiation.stretch}</span>
            </div>
          </div>
        </div>
      )}
      {activity.resources && activity.resources.length > 0 && (
        <div className="mt-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-1">
            Resources
          </p>
          <ul className="list-disc list-inside text-sm text-neutral-500 space-y-0.5">
            {activity.resources.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Typing animation text
// ---------------------------------------------------------------------------

const LOADING_LINES = [
  "Analysing curriculum requirements...",
  "Mapping assessment objectives...",
  "Building differentiated activities...",
  "Generating worksheet questions...",
  "Finalising lesson plan...",
]

// ---------------------------------------------------------------------------
// Main page component
// ---------------------------------------------------------------------------

export default function LessonBuilderPage() {
  // Form state
  const [selectedText, setSelectedText] = useState(TEXTS[0])
  const [selectedYear, setSelectedYear] = useState(YEAR_GROUPS[0])
  const [selectedBoard, setSelectedBoard] = useState(BOARDS[0])
  const [selectedDuration, setSelectedDuration] = useState("60 minutes")

  // Generation state
  const [isGenerating, setIsGenerating] = useState(false)
  const [loadingLineIdx, setLoadingLineIdx] = useState(0)
  const [generatedLesson, setGeneratedLesson] = useState<LessonPlan | null>(null)
  const [copied, setCopied] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  // Update selectors when text changes to keep options relevant
  useEffect(() => {
    const lessonsForText = ALL_LESSONS.filter((l) => l.text === selectedText)
    if (lessonsForText.length > 0) {
      const validYears = [...new Set(lessonsForText.map((l) => l.yearGroup))]
      if (!validYears.includes(selectedYear)) {
        setSelectedYear(validYears[0])
      }
      const validBoards = [...new Set(lessonsForText.map((l) => l.board))]
      if (!validBoards.includes(selectedBoard)) {
        setSelectedBoard(validBoards[0])
      }
    }
  }, [selectedText, selectedYear, selectedBoard])

  // Loading line animation
  useEffect(() => {
    if (!isGenerating) return
    const interval = setInterval(() => {
      setLoadingLineIdx((prev) => {
        if (prev >= LOADING_LINES.length - 1) return prev
        return prev + 1
      })
    }, 400)
    return () => clearInterval(interval)
  }, [isGenerating])

  function handleGenerate() {
    setIsGenerating(true)
    setLoadingLineIdx(0)
    setGeneratedLesson(null)
    setCopied(false)

    // Find the best matching lesson from real data
    const match =
      ALL_LESSONS.find(
        (l) =>
          l.text === selectedText &&
          l.yearGroup === selectedYear &&
          l.board === selectedBoard
      ) ||
      ALL_LESSONS.find((l) => l.text === selectedText && l.yearGroup === selectedYear) ||
      ALL_LESSONS.find((l) => l.text === selectedText) ||
      ALL_LESSONS[0]

    setTimeout(() => {
      setIsGenerating(false)
      setGeneratedLesson(match)
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
    }, 2000)
  }

  function handleDownloadPlan() {
    if (!generatedLesson) return
    const text = generateLessonPlanText(generatedLesson)
    const filename = `${generatedLesson.id}-lesson-plan.txt`
    downloadAsTextFile(text, filename)
  }

  function handleDownloadWorksheet() {
    if (!generatedLesson) return
    const text = generateWorksheetText(generatedLesson)
    const filename = `${generatedLesson.id}-worksheet.txt`
    downloadAsTextFile(text, filename)
  }

  async function handleCopy() {
    if (!generatedLesson) return
    const text = generateLessonPlanText(generatedLesson)
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function handleReset() {
    setGeneratedLesson(null)
    setCopied(false)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <DemoBanner message="You are viewing a demo of the Lesson Builder. Generated lessons use real curriculum-aligned content." />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-12">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/20">
              <Sparkles className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-light tracking-tight text-white/90">
                Lesson Builder
              </h1>
              <p className="text-neutral-500 text-sm">
                Generate complete, differentiated lesson plans in seconds
              </p>
            </div>
          </div>
        </div>

        {/* ── Builder Form ────────────────────────────────────────────────── */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 mb-8">
          <h2 className="text-sm font-medium text-white/80 mb-6">
            Configure Your Lesson
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Text / Topic */}
            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-2">
                Text / Topic
              </label>
              <select
                value={selectedText}
                onChange={(e) => setSelectedText(e.target.value)}
                disabled={isGenerating}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/90 outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-colors disabled:opacity-50"
              >
                {TEXTS.map((t) => (
                  <option key={t} value={t} className="bg-neutral-900">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Group */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-2">
                Year Group
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                disabled={isGenerating}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/90 outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-colors disabled:opacity-50"
              >
                {YEAR_GROUPS.map((y) => (
                  <option key={y} value={y} className="bg-neutral-900">
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Exam Board */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-2">
                Exam Board
              </label>
              <select
                value={selectedBoard}
                onChange={(e) => setSelectedBoard(e.target.value)}
                disabled={isGenerating}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/90 outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-colors disabled:opacity-50"
              >
                {BOARDS.map((b) => (
                  <option key={b} value={b} className="bg-neutral-900">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.15em] text-neutral-500 mb-2">
                Lesson Duration
              </label>
              <select
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                disabled={isGenerating}
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/90 outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/20 transition-colors disabled:opacity-50"
              >
                {DURATIONS.map((d) => (
                  <option key={d} value={d} className="bg-neutral-900">
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="group relative w-full rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3.5 text-sm font-semibold text-black transition-all hover:from-amber-400 hover:to-yellow-400 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {isGenerating ? (
                <>
                  <Sparkles className="h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
                  Generate Lesson Plan
                </>
              )}
            </span>
            {/* Shimmer effect */}
            {!isGenerating && (
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}
          </button>
        </div>

        {/* ── Loading Animation ────────────────────────────────────────── */}
        {isGenerating && (
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-6 sm:p-8 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative h-8 w-8">
                <Sparkles className="h-8 w-8 text-amber-400 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 rounded-full bg-amber-400/20 animate-ping" />
              </div>
              <p className="text-sm font-medium text-amber-300">
                Building your lesson plan...
              </p>
            </div>
            <div className="space-y-2">
              {LOADING_LINES.map((line, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 text-sm transition-all duration-300 ${
                    i <= loadingLineIdx
                      ? "text-amber-300/80 opacity-100"
                      : "text-neutral-600 opacity-40"
                  }`}
                >
                  {i < loadingLineIdx ? (
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                  ) : i === loadingLineIdx ? (
                    <span className="inline-block h-3.5 w-3.5">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute h-full w-full rounded-full bg-amber-400 opacity-75" />
                        <span className="relative rounded-full h-2 w-2 bg-amber-400" />
                      </span>
                    </span>
                  ) : (
                    <span className="h-3.5 w-3.5" />
                  )}
                  <span>{line}</span>
                  {i === loadingLineIdx && (
                    <span className="animate-pulse text-amber-400">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Generated Lesson Display ─────────────────────────────────── */}
        {generatedLesson && !isGenerating && (
          <div ref={resultRef} className="space-y-4">
            {/* Title card */}
            <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] to-transparent p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-400/60 mb-1">
                    Generated Lesson Plan
                  </p>
                  <h2 className="text-xl sm:text-2xl font-light text-white/95 leading-snug">
                    {generatedLesson.title}
                  </h2>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Sparkles className="h-5 w-5 text-amber-400" />
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-xs text-neutral-400">
                <span className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1">
                  <BookOpen className="h-3 w-3" />
                  {generatedLesson.text}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1">
                  <GraduationCap className="h-3 w-3" />
                  {generatedLesson.yearGroup}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1">
                  <Target className="h-3 w-3" />
                  {generatedLesson.board}
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1">
                  <Clock className="h-3 w-3" />
                  {generatedLesson.duration}
                </span>
              </div>
            </div>

            {/* Objectives */}
            <CollapsibleCard
              title="Learning Objectives"
              icon={<Target className="h-4 w-4" />}
              defaultOpen
            >
              <ul className="space-y-2">
                {generatedLesson.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-[10px] font-semibold text-amber-400">
                      {i + 1}
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>
              {generatedLesson.successCriteria.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/[0.04]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    Success Criteria
                  </p>
                  <ul className="space-y-1.5">
                    {generatedLesson.successCriteria.map((sc, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-neutral-400"
                      >
                        <Check className="h-3.5 w-3.5 mt-0.5 shrink-0 text-emerald-400/60" />
                        {sc}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {generatedLesson.keywords.length > 0 && (
                <div className="mt-4 pt-4 border-t border-white/[0.04]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 mb-2">
                    Key Vocabulary
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {generatedLesson.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="rounded-full bg-white/[0.05] px-2.5 py-0.5 text-xs text-neutral-400"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </CollapsibleCard>

            {/* Starter Activity */}
            <CollapsibleCard
              title={`Starter: ${generatedLesson.starterActivity.title}`}
              icon={<Lightbulb className="h-4 w-4" />}
              defaultOpen
            >
              <ActivityBlock activity={generatedLesson.starterActivity} />
            </CollapsibleCard>

            {/* Main Activities */}
            {generatedLesson.mainActivities.map((activity, i) => (
              <CollapsibleCard
                key={i}
                title={`Main Activity ${i + 1}: ${activity.title}`}
                icon={<BookOpen className="h-4 w-4" />}
                defaultOpen={i === 0}
              >
                <ActivityBlock activity={activity} />
              </CollapsibleCard>
            ))}

            {/* Plenary */}
            <CollapsibleCard
              title={`Plenary: ${generatedLesson.plenaryActivity.title}`}
              icon={<MessageSquare className="h-4 w-4" />}
              defaultOpen
            >
              <ActivityBlock activity={generatedLesson.plenaryActivity} />
            </CollapsibleCard>

            {/* Homework */}
            {generatedLesson.homework && (
              <CollapsibleCard
                title="Homework"
                icon={<Home className="h-4 w-4" />}
              >
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {generatedLesson.homework}
                </p>
              </CollapsibleCard>
            )}

            {/* Worksheet Questions */}
            {generatedLesson.worksheetQuestions.length > 0 && (
              <CollapsibleCard
                title={`Worksheet (${generatedLesson.worksheetQuestions.length} Questions)`}
                icon={<FileText className="h-4 w-4" />}
              >
                <div className="space-y-4">
                  {generatedLesson.worksheetQuestions.map((q, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-white/[0.04] bg-white/[0.015] p-4"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="text-sm text-white/90">
                          <span className="text-amber-400 font-semibold mr-1.5">
                            Q{i + 1}.
                          </span>
                          {q.question}
                        </p>
                        {q.marks && (
                          <span className="shrink-0 rounded bg-white/[0.06] px-2 py-0.5 text-[11px] text-neutral-400">
                            {q.marks} mark{q.marks > 1 ? "s" : ""}
                          </span>
                        )}
                      </div>
                      {q.modelAnswer && (
                        <details className="mt-2">
                          <summary className="cursor-pointer text-xs text-amber-400/70 hover:text-amber-400 transition-colors">
                            Show model answer
                          </summary>
                          <p className="mt-2 text-sm text-neutral-400 leading-relaxed pl-3 border-l-2 border-amber-500/20">
                            {q.modelAnswer}
                          </p>
                        </details>
                      )}
                    </div>
                  ))}
                </div>
              </CollapsibleCard>
            )}

            {/* Teacher Notes */}
            {generatedLesson.teacherNotes.length > 0 && (
              <CollapsibleCard
                title="Teacher Notes"
                icon={<Users className="h-4 w-4" />}
              >
                <ul className="space-y-2">
                  {generatedLesson.teacherNotes.map((note, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-neutral-400 leading-relaxed"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/40" />
                      {note}
                    </li>
                  ))}
                </ul>
              </CollapsibleCard>
            )}

            {/* ── Action Buttons ───────────────────────────────────────── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <button
                onClick={handleDownloadPlan}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span> Plan
              </button>
              <button
                onClick={handleDownloadWorksheet}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                <FileText className="h-4 w-4" />
                Worksheet
              </button>
              <button
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white/80 hover:bg-white/[0.06] hover:border-white/[0.12] transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={handleReset}
                className="flex items-center justify-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3 text-sm text-amber-300 hover:bg-amber-500/[0.1] transition-colors"
              >
                <RefreshCw className="h-4 w-4" />
                New
              </button>
            </div>
          </div>
        )}

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <div className="mt-16 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-amber-500/[0.04] to-transparent p-8 sm:p-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20">
              <Sparkles className="h-6 w-6 text-amber-400" />
            </div>
          </div>
          <h3 className="text-lg sm:text-xl font-light text-white/90 mb-2">
            This is 1 of 300+ ready-made lessons
          </h3>
          <p className="text-sm text-neutral-400 max-w-md mx-auto mb-6">
            Start your free trial to access the full library of curriculum-aligned,
            differentiated lesson plans across all year groups and exam boards.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/for-schools/register"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-3 text-sm font-semibold text-black hover:from-amber-400 hover:to-yellow-400 transition-all"
            >
              <Sparkles className="h-4 w-4" />
              Start Free Trial
            </Link>
            <Link
              href="/for-schools"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-6 py-3 text-sm text-white/70 hover:bg-white/[0.06] transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  Zap,
  ArrowLeft,
  BookOpen,
  FileText,
  PenTool,
  Target,
  Clock as ClockIcon,
  Shuffle,
  Trophy,
  ChevronRight,
  Flame,
  BarChart3,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { useBoard } from '@/hooks/useBoard'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-store'

import { QuizEngine } from './quiz-engine'
import {
  TOPIC_META,
  pickQuestions,
  getGrade,
  getTopicsForBoard,
  type Topic,
  type QuizQuestion,
} from './quiz-data'

// ─── History types ─────────────────────────────────────────────────────────

interface QuizResult {
  date: string
  mode: string
  score: number
  total: number
  percentage: number
  grade: string
  topics: Topic[]
  topicBreakdown: Record<Topic, { correct: number; total: number }>
}

const HISTORY_KEY = 'english-hub-quiz-history'

// ─── Topic icons ───────────────────────────────────────────────────────────

const TOPIC_ICONS: Record<Topic, typeof BookOpen> = {
  poetry: FileText,
  'set-texts': BookOpen,
  'language-techniques': PenTool,
  'exam-technique': Target,
  context: ClockIcon,
}

// ─── Component ─────────────────────────────────────────────────────────────

export function QuizHubClient({ initialBoard }: { initialBoard: ExamBoard | null }) {
  const { board: hookBoard } = useBoard()
  // Prefer client store after hydration; fall back to server cookie value
  const board = hookBoard ?? initialBoard
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? null

  // Topics available for this board
  const availableTopics = useMemo(() => getTopicsForBoard(board), [board])

  const [selectedTopics, setSelectedTopics] = useState<Topic[]>([])

  // Drop any selected topics that aren't valid for the current board
  useEffect(() => {
    setSelectedTopics((prev) => prev.filter((t) => availableTopics.includes(t)))
  }, [availableTopics])

  const [activeQuiz, setActiveQuiz] = useState<{
    questions: QuizQuestion[]
    mode: string
  } | null>(null)
  const [history, setHistory] = useState<QuizResult[]>([])
  const [mounted, setMounted] = useState(false)

  // Load history from localStorage
  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(HISTORY_KEY)
      if (stored) setHistory(JSON.parse(stored))
    } catch {
      // ignore
    }
  }, [])

  // Refresh history after quiz
  const refreshHistory = () => {
    try {
      const stored = localStorage.getItem(HISTORY_KEY)
      if (stored) setHistory(JSON.parse(stored))
    } catch {
      // ignore
    }
  }

  // Toggle topic selection
  const toggleTopic = (topic: Topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    )
  }

  // Start quiz — filter by selected topics AND user's board
  const startQuiz = (count: number, mode: string, topics?: Topic[]) => {
    const t = topics && topics.length > 0 ? topics : undefined
    const questions = pickQuestions(count, t, board)
    setActiveQuiz({ questions, mode })
  }

  // Restart (back to hub)
  const handleRestart = () => {
    setActiveQuiz(null)
    refreshHistory()
  }

  // ─── Active quiz ─────────────────────────────────────────────────────────
  if (activeQuiz) {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          size="sm"
          className="mb-1 -ml-2 text-muted-foreground"
          onClick={handleRestart}
        >
          <ArrowLeft className="size-3.5" />
          Back to Quiz Hub
        </Button>

        <QuizEngine
          questions={activeQuiz.questions}
          mode={activeQuiz.mode}
          onRestart={handleRestart}
        />
      </div>
    )
  }

  // ─── Hub screen ──────────────────────────────────────────────────────────
  return (
    <div className="space-y-8 pb-16">
      {/* Header */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Revision Hub
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-orange-500/10">
            <Zap className="size-5 text-orange-400" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">Quick Quizzes</h1>
              {boardName && (
                <Badge variant="outline" className="text-xs">
                  For {boardName}
                </Badge>
              )}
            </div>
            <p className="text-body-sm text-muted-foreground">
              {boardName
                ? `Test yourself on ${boardName} English topics`
                : 'Test yourself on any GCSE English topic'}
            </p>
          </div>
        </div>
      </div>

      {/* Topic selector */}
      <section>
        <h2 className="text-heading-md font-heading text-foreground mb-3">Choose Topics</h2>
        <p className="text-body-sm text-muted-foreground mb-4">
          {boardName
            ? `Showing topics covered by ${boardName}. Select one or more, or leave all unselected for a mixed quiz.`
            : 'Select one or more topics, or leave all unselected for a mixed quiz.'}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {availableTopics.map((topic) => {
            const meta = TOPIC_META[topic]
            const Icon = TOPIC_ICONS[topic]
            const isSelected = selectedTopics.includes(topic)
            return (
              <button
                key={topic}
                onClick={() => toggleTopic(topic)}
                className={`group flex items-center gap-3 rounded-xl border p-4 text-left transition-all duration-200 ${
                  isSelected
                    ? 'border-primary/50 bg-primary/[0.06] shadow-glow-sm'
                    : 'border-border/60 bg-card hover:border-border hover:shadow-card-hover'
                }`}
              >
                <div
                  className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${meta.bgColour}`}
                >
                  <Icon className={`size-4.5 ${meta.colour}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-semibold text-foreground">{meta.label}</span>
                </div>
                <div
                  className={`flex size-5 items-center justify-center rounded-md border transition-colors ${
                    isSelected
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-transparent'
                  }`}
                >
                  {isSelected && (
                    <svg className="size-3" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* Quiz modes */}
      <section>
        <h2 className="text-heading-md font-heading text-foreground mb-3">Start a Quiz</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Quick quiz */}
          <button
            onClick={() =>
              startQuiz(
                10,
                selectedTopics.length > 0
                  ? `Quick (${selectedTopics.map((t) => TOPIC_META[t].label).join(', ')})`
                  : 'Quick (Mixed)',
                selectedTopics
              )
            }
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 text-left transition-all duration-200 hover:border-border hover:shadow-card-hover"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
                <Zap className="size-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                  Quick Quiz
                </h3>
                <span className="text-caption text-muted-foreground">10 questions</span>
              </div>
            </div>
            <p className="flex-1 text-body-sm text-muted-foreground">
              A fast quiz to test your knowledge. Perfect for a revision break.
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Start quiz <ChevronRight className="size-3.5" />
            </div>
          </button>

          {/* Full quiz */}
          <button
            onClick={() =>
              startQuiz(
                30,
                selectedTopics.length > 0
                  ? `Full (${selectedTopics.map((t) => TOPIC_META[t].label).join(', ')})`
                  : 'Full (Mixed)',
                selectedTopics
              )
            }
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 text-left transition-all duration-200 hover:border-border hover:shadow-card-hover"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
                <BarChart3 className="size-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                  Full Quiz
                </h3>
                <span className="text-caption text-muted-foreground">30 questions</span>
              </div>
            </div>
            <p className="flex-1 text-body-sm text-muted-foreground">
              A thorough test covering more ground. Great for exam preparation.
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Start quiz <ChevronRight className="size-3.5" />
            </div>
          </button>

          {/* Mixed topic — uses all available topics for the user's board */}
          <button
            onClick={() => startQuiz(15, 'Mixed Topics', availableTopics)}
            className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 text-left transition-all duration-200 hover:border-border hover:shadow-card-hover"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
                <Shuffle className="size-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                  Mixed Topics
                </h3>
                <span className="text-caption text-muted-foreground">15 questions</span>
              </div>
            </div>
            <p className="flex-1 text-body-sm text-muted-foreground">
              {boardName
                ? `Questions from every ${boardName} topic, randomly shuffled.`
                : 'Questions from every topic, randomly shuffled. Covers all your bases.'}
            </p>
            <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              Start quiz <ChevronRight className="size-3.5" />
            </div>
          </button>
        </div>
      </section>

      {/* Score history */}
      {mounted && history.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="size-5 text-amber-400" />
            <h2 className="text-heading-md font-heading text-foreground">Score History</h2>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/60 bg-muted/30">
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Date</th>
                    <th className="px-4 py-3 text-left font-semibold text-muted-foreground">Mode</th>
                    <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Score</th>
                    <th className="px-4 py-3 text-center font-semibold text-muted-foreground">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {history.slice(0, 10).map((result, i) => {
                    const { grade } = getGrade(result.percentage)
                    const gradeNum = parseInt(grade)
                    const gradeColour =
                      gradeNum >= 7
                        ? 'text-emerald-400'
                        : gradeNum >= 5
                          ? 'text-amber-400'
                          : 'text-red-400'

                    return (
                      <tr
                        key={i}
                        className="border-b border-border/30 last:border-0 hover:bg-muted/20 transition-colors"
                      >
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Date(result.date).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </td>
                        <td className="px-4 py-3 text-foreground font-medium">{result.mode}</td>
                        <td className="px-4 py-3 text-center text-foreground tabular-nums">
                          {result.score}/{result.total} ({result.percentage}%)
                        </td>
                        <td className="px-4 py-3 text-center">
                          <Badge variant="outline" className={`${gradeColour} font-bold`}>
                            Grade {grade}
                          </Badge>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Motivational */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-orange-500/[0.04] via-card to-primary/[0.04] p-6 text-center">
        <Flame className="mx-auto mb-2 size-7 text-orange-400" />
        <h3 className="text-heading-md font-heading text-foreground">
          Regular quizzing boosts long-term retention
        </h3>
        <p className="mx-auto mt-1 max-w-md text-body-sm text-muted-foreground">
          Research shows that testing yourself is one of the most effective revision strategies.
          Try a quick quiz every day to keep your knowledge sharp.
        </p>
      </section>
    </div>
  )
}


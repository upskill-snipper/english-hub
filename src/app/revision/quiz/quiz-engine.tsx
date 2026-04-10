'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Clock,
  Trophy,
  RotateCcw,
  Home,
  ChevronRight,
  Zap,
  Timer,
  TimerOff,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import type { QuizQuestion, Topic } from './quiz-data'
import { TOPIC_META, getGrade } from './quiz-data'

// ─── Weak topic → revision page mapping ────────────────────────────────────

const TOPIC_REVISION_LINKS: Record<Topic, { href: string; title: string; description: string }[]> = {
  poetry: [
    { href: '/revision/poetry', title: 'Poetry Anthology', description: 'Annotated study guides for every poem.' },
    { href: '/revision/exam-technique/essay-structure', title: 'Comparison Essay Structure', description: 'Build sustained poetry comparisons.' },
  ],
  'set-texts': [
    { href: '/revision/texts', title: 'Set Texts Library', description: 'Plot, character and theme guides.' },
    { href: '/revision/exam-technique/essay-structure', title: 'Essay Structure', description: 'Plan top-band literature responses.' },
  ],
  'language-techniques': [
    { href: '/revision/language/reading', title: 'Reading Comprehension', description: 'Spot and analyse language techniques.' },
    { href: '/revision/language/writing', title: 'Writing Skills', description: 'Use techniques in your own writing.' },
  ],
  'exam-technique': [
    { href: '/revision/exam-technique/essay-structure', title: 'Essay Structure', description: 'PEE/PEEL and thesis-led plans.' },
    { href: '/revision/exam-technique/question-types', title: 'Question Types', description: 'Decode every command word.' },
    { href: '/revision/exam-technique/time-management', title: 'Time Management', description: 'Pace each paper for top marks.' },
  ],
  context: [
    { href: '/revision/texts', title: 'Set Texts', description: 'Historical, social and literary context.' },
    { href: '/revision/grade-targets/grade-7', title: 'Grade 7 Standards', description: 'See how context lifts marks.' },
  ],
}

// ─── Types ─────────────────────────────────────────────────────────────────

interface QuizEngineProps {
  questions: QuizQuestion[]
  mode: string
  onRestart: () => void
}

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

function saveResult(result: QuizResult) {
  try {
    const stored = localStorage.getItem(HISTORY_KEY)
    const history: QuizResult[] = stored ? JSON.parse(stored) : []
    history.unshift(result)
    // Keep last 50 results
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)))
  } catch {
    // ignore
  }
}

// ─── Component ─────────────────────────────────────────────────────────────

export function QuizEngine({ questions, mode, onRestart }: QuizEngineProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(
    () => new Array(questions.length).fill(null)
  )
  const [finished, setFinished] = useState(false)

  // Timer
  const [timerEnabled, setTimerEnabled] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [totalTime, setTotalTime] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const question = questions[currentIndex]
  const progress = ((currentIndex + (hasAnswered ? 1 : 0)) / questions.length) * 100

  // Start timer
  const startTimer = useCallback(() => {
    if (!timerEnabled) return
    const seconds = questions.length * 30 // 30 seconds per question
    setTimeLeft(seconds)
    setTotalTime(seconds)
  }, [timerEnabled, questions.length])

  useEffect(() => {
    startTimer()
  }, [startTimer])

  // Countdown
  useEffect(() => {
    if (!timerEnabled || finished) return
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!)
          setFinished(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [timerEnabled, finished])

  // Handle answer selection
  const handleSelect = (optionIndex: number) => {
    if (hasAnswered) return
    setSelectedOption(optionIndex)
    setHasAnswered(true)

    const isCorrect = optionIndex === question.correctIndex
    if (isCorrect) setScore((s) => s + 1)

    setAnswers((prev) => {
      const next = [...prev]
      next[currentIndex] = optionIndex
      return next
    })
  }

  // Move to next question
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1)
      setSelectedOption(null)
      setHasAnswered(false)
    } else {
      handleFinish()
    }
  }

  // Finish quiz
  const handleFinish = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setFinished(true)

    // Build topic breakdown
    const topicBreakdown: Record<string, { correct: number; total: number }> = {}
    questions.forEach((q, i) => {
      if (!topicBreakdown[q.topic]) topicBreakdown[q.topic] = { correct: 0, total: 0 }
      topicBreakdown[q.topic].total++
      if (answers[i] === q.correctIndex || (i === currentIndex && selectedOption === q.correctIndex)) {
        topicBreakdown[q.topic].correct++
      }
    })

    const percentage = Math.round((score / questions.length) * 100)
    const { grade } = getGrade(percentage)

    const usedTopics = [...new Set(questions.map((q) => q.topic))] as Topic[]

    saveResult({
      date: new Date().toISOString(),
      mode,
      score,
      total: questions.length,
      percentage,
      grade,
      topics: usedTopics,
      topicBreakdown: topicBreakdown as Record<Topic, { correct: number; total: number }>,
    })
  }

  // Format time
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  // ─── Results screen ──────────────────────────────────────────────────────
  if (finished) {
    const percentage = Math.round((score / questions.length) * 100)
    const { grade, descriptor } = getGrade(percentage)

    // Build topic breakdown for display
    const topicBreakdown: Record<string, { correct: number; total: number }> = {}
    questions.forEach((q, i) => {
      if (!topicBreakdown[q.topic]) topicBreakdown[q.topic] = { correct: 0, total: 0 }
      topicBreakdown[q.topic].total++
      if (answers[i] === q.correctIndex) topicBreakdown[q.topic].correct++
    })

    return (
      <div className="space-y-6 animate-fade-in">
        {/* Grade card */}
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 text-center">
          <Trophy className="mx-auto mb-3 size-10 text-amber-400" />
          <h2 className="text-display-sm font-heading text-foreground">Quiz Complete</h2>

          <div className="mt-6 flex items-center justify-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">{score}/{questions.length}</div>
              <div className="text-sm text-muted-foreground mt-1">Correct</div>
            </div>
            <div className="h-16 w-px bg-border/60" />
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{percentage}%</div>
              <div className="text-sm text-muted-foreground mt-1">Score</div>
            </div>
            <div className="h-16 w-px bg-border/60" />
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground">Grade {grade}</div>
              <div className="text-sm text-muted-foreground mt-1">{descriptor}</div>
            </div>
          </div>

          {timerEnabled && totalTime > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              <Clock className="inline-block size-3.5 mr-1" />
              Time remaining: {formatTime(timeLeft)} / {formatTime(totalTime)}
            </div>
          )}
        </div>

        {/* Topic breakdown */}
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <h3 className="text-heading-md font-heading text-foreground mb-4">Topic Breakdown</h3>
          <div className="space-y-3">
            {Object.entries(topicBreakdown).map(([topic, data]) => {
              const meta = TOPIC_META[topic as Topic]
              const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0
              return (
                <div key={topic} className="flex items-center gap-3">
                  <div className="w-36 sm:w-44">
                    <Badge variant="secondary" className={`${meta.colour} bg-transparent border border-border/40`}>
                      {meta.label}
                    </Badge>
                  </div>
                  <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground w-20 text-right tabular-nums">
                    {data.correct}/{data.total} ({pct}%)
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recommended revision based on weak topics */}
        {(() => {
          const weakTopics = Object.entries(topicBreakdown)
            .filter(([, data]) => data.total > 0 && data.correct / data.total < 0.7)
            .sort(([, a], [, b]) => a.correct / a.total - b.correct / b.total)
            .map(([topic]) => topic as Topic)

          if (weakTopics.length === 0) return null

          const recs = weakTopics
            .flatMap((t) => TOPIC_REVISION_LINKS[t].map((link) => ({ ...link, topic: t })))
            .slice(0, 4)

          return (
            <div className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="text-heading-md font-heading text-foreground mb-1 flex items-center gap-2">
                <Zap className="size-4 text-orange-400" />
                Recommended Revision
              </h3>
              <p className="text-body-sm text-muted-foreground mb-4">
                Based on your weakest topic{weakTopics.length > 1 ? 's' : ''} ({weakTopics.map((t) => TOPIC_META[t].label).join(', ')}), focus next on:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {recs.map((rec) => (
                  <Link
                    key={rec.href + rec.topic}
                    href={rec.href}
                    className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <ChevronRight className="size-4 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground group-hover:text-primary">{rec.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{rec.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })()}

        {/* Question review */}
        <div className="rounded-2xl border border-border/60 bg-card p-5">
          <h3 className="text-heading-md font-heading text-foreground mb-4">Review Answers</h3>
          <div className="space-y-3">
            {questions.map((q, i) => {
              const userAnswer = answers[i]
              const isCorrect = userAnswer === q.correctIndex
              const meta = TOPIC_META[q.topic]
              return (
                <details
                  key={q.id}
                  className={`rounded-xl border p-3 ${
                    isCorrect
                      ? 'border-emerald-500/30 bg-emerald-500/5'
                      : 'border-red-500/30 bg-red-500/5'
                  }`}
                >
                  <summary className="cursor-pointer flex items-center gap-2 text-sm">
                    <span className={`flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                      isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {isCorrect ? <Check className="size-3" /> : <X className="size-3" />}
                    </span>
                    <span className="flex-1 text-foreground font-medium">{q.question}</span>
                    <Badge variant="outline" className={`${meta.colour} text-[0.6rem] shrink-0`}>
                      {meta.label}
                    </Badge>
                  </summary>
                  <div className="mt-2 pl-7 space-y-1.5">
                    {userAnswer !== null && userAnswer !== q.correctIndex && (
                      <p className="text-sm text-red-400">
                        Your answer: {q.options[userAnswer]}
                      </p>
                    )}
                    <p className="text-sm text-emerald-400">
                      Correct answer: {q.options[q.correctIndex]}
                    </p>
                    <p className="text-body-sm text-muted-foreground">{q.explanation}</p>
                  </div>
                </details>
              )
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <Button variant="default" size="lg" onClick={onRestart}>
            <RotateCcw className="size-4" />
            New Quiz
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/revision" />}>
            <Home className="size-4" />
            Revision Hub
          </Button>
        </div>
      </div>
    )
  }

  // ─── Question screen ─────────────────────────────────────────────────────
  const isCorrect = hasAnswered && selectedOption === question.correctIndex
  const isWrong = hasAnswered && selectedOption !== question.correctIndex

  return (
    <div className="space-y-5 animate-fade-in">
      {/* Header bar */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Zap className="size-4 text-orange-400" />
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Timer toggle (only before first answer) */}
          {currentIndex === 0 && !hasAnswered && (
            <Button
              variant="ghost"
              size="xs"
              onClick={() => setTimerEnabled((e) => !e)}
              className="text-muted-foreground"
            >
              {timerEnabled ? <TimerOff className="size-3.5" /> : <Timer className="size-3.5" />}
              {timerEnabled ? 'Timer off' : 'Timer on'}
            </Button>
          )}

          {timerEnabled && (
            <Badge
              variant="outline"
              className={`tabular-nums ${timeLeft < 30 ? 'text-red-400 border-red-500/30' : 'text-muted-foreground'}`}
            >
              <Clock className="size-3 mr-1" />
              {formatTime(timeLeft)}
            </Badge>
          )}

          <Badge variant="secondary" className="tabular-nums">
            Score: {score}/{currentIndex + (hasAnswered ? 1 : 0)}
          </Badge>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Topic badge */}
      <div>
        <Badge variant="outline" className={`${TOPIC_META[question.topic].colour}`}>
          {TOPIC_META[question.topic].label}
        </Badge>
      </div>

      {/* Question */}
      <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
        <h2 className="text-heading-md font-heading text-foreground leading-snug">
          {question.question}
        </h2>
      </div>

      {/* Options */}
      <div className="grid gap-3">
        {question.options.map((option, i) => {
          const isSelected = selectedOption === i
          const isCorrectOption = i === question.correctIndex

          let optionClass =
            'rounded-xl border p-4 text-left transition-all duration-200 cursor-pointer'

          if (!hasAnswered) {
            optionClass += ' border-border/60 bg-card hover:border-primary/40 hover:bg-primary/[0.04]'
          } else if (isCorrectOption) {
            optionClass += ' border-emerald-500/50 bg-emerald-500/10'
          } else if (isSelected && !isCorrectOption) {
            optionClass += ' border-red-500/50 bg-red-500/10 animate-shake'
          } else {
            optionClass += ' border-border/30 bg-card opacity-50'
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={hasAnswered}
              className={optionClass}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                    hasAnswered && isCorrectOption
                      ? 'bg-emerald-500/20 text-emerald-400'
                      : hasAnswered && isSelected
                        ? 'bg-red-500/20 text-red-400'
                        : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {hasAnswered && isCorrectOption ? (
                    <Check className="size-4" />
                  ) : hasAnswered && isSelected ? (
                    <X className="size-4" />
                  ) : (
                    String.fromCharCode(65 + i)
                  )}
                </span>
                <span className="text-sm font-medium text-foreground">{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Explanation (after answering) */}
      {hasAnswered && (
        <div
          className={`rounded-xl border p-4 animate-slide-up ${
            isCorrect
              ? 'border-emerald-500/30 bg-emerald-500/5'
              : 'border-red-500/30 bg-red-500/5'
          }`}
        >
          <div className="flex items-center gap-2 mb-2">
            {isCorrect ? (
              <>
                <Check className="size-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">Correct!</span>
              </>
            ) : (
              <>
                <X className="size-4 text-red-400" />
                <span className="text-sm font-semibold text-red-400">Incorrect</span>
              </>
            )}
          </div>
          <p className="text-body-sm text-muted-foreground">{question.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {hasAnswered && (
        <div className="flex justify-end">
          <Button variant="default" size="lg" onClick={handleNext} className="animate-scale-in">
            {currentIndex < questions.length - 1 ? (
              <>
                Next Question
                <ArrowRight className="size-4" />
              </>
            ) : (
              <>
                See Results
                <Trophy className="size-4" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  )
}

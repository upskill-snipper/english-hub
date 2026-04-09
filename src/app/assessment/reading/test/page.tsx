"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  BookOpen,
  ArrowRight,
  ArrowLeft,
  Clock,
  CheckCircle,
  Eye,
  Volume2,
  AlertTriangle,
  Timer,
  ChevronRight,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  READING_PASSAGES,
  DECODING_WORDS,
  type ReadingPassage,
  type ComprehensionQuestion,
  type DecodingWord,
} from "@/data/reading-passages"
import {
  calculateReadingAge,
  type ComprehensionAnswer,
  type DecodingAnswer,
  type FluencyTiming,
  type AssessmentInput,
} from "@/lib/reading-assessment"

// ─── Types ───────────────────────────────────────────────────────────────────

type TestPhase = "age-input" | "passage" | "questions" | "decoding" | "complete"

interface TestState {
  phase: TestPhase
  currentPassageIndex: number
  chronologicalAge: { years: number; months: number }
  // Answers
  comprehensionAnswers: ComprehensionAnswer[]
  decodingAnswers: DecodingAnswer[]
  fluencyTimings: FluencyTiming[]
  // Timing
  passageStartTime: number | null
  // Decoding state
  currentDecodingIndex: number
  decodingStartTime: number | null
  // Question state
  currentQuestionIndex: number
  currentAnswer: string
}

// ─── Timer Display ───────────────────────────────────────────────────────────

function TimerDisplay({ startTime }: { startTime: number | null }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    if (!startTime) return
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startTime])

  const mins = Math.floor(elapsed / 60)
  const secs = elapsed % 60

  return (
    <div className="flex items-center gap-1.5 text-sm text-white/50 tabular-nums">
      <Timer className="h-4 w-4" />
      <span>
        {mins}:{secs.toString().padStart(2, "0")}
      </span>
    </div>
  )
}

// ─── Progress Bar ────────────────────────────────────────────────────────────

function TestProgress({
  currentStep,
  totalSteps,
  label,
}: {
  currentStep: number
  totalSteps: number
  label: string
}) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-xs text-white/40">
        <span>{label}</span>
        <span>
          {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

// ─── Age Input Phase ─────────────────────────────────────────────────────────

function AgeInputPhase({
  onSubmit,
}: {
  onSubmit: (years: number, months: number) => void
}) {
  const [years, setYears] = useState(14)
  const [months, setMonths] = useState(0)

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Before we begin</CardTitle>
          <CardDescription>
            Enter your age so we can compare your reading level to age-related expectations.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">
                Age (years)
              </label>
              <select
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
              >
                {Array.from({ length: 15 }, (_, i) => i + 6).map((y) => (
                  <option key={y} value={y} className="bg-zinc-900">
                    {y} years
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white/60 mb-2">
                Months
              </label>
              <select
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/90 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30"
              >
                {Array.from({ length: 12 }, (_, i) => i).map((m) => (
                  <option key={m} value={m} className="bg-zinc-900">
                    {m} months
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
              <p className="text-xs text-white/50">
                Your age is used only to compare your reading level against expected norms.
                It does not affect your raw scores.
              </p>
            </div>
          </div>

          <Button className="w-full" onClick={() => onSubmit(years, months)}>
            Begin Assessment
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// ─── Passage Reading Phase ───────────────────────────────────────────────────

function PassagePhase({
  passage,
  onFinishReading,
  startTime,
}: {
  passage: ReadingPassage
  onFinishReading: () => void
  startTime: number | null
}) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <Badge variant="outline" className="mb-2 text-xs">
            {passage.yearGroup} Level ({passage.ageRange} years)
          </Badge>
          <h2 className="text-lg font-bold text-white/90">{passage.title}</h2>
          <p className="text-xs text-white/40 mt-1">
            {passage.genre === "fiction" ? "Fiction" : "Non-fiction"} &middot;{" "}
            {passage.wordCount} words
          </p>
        </div>
        <TimerDisplay startTime={startTime} />
      </div>

      <Card>
        <CardContent className="pt-5">
          <div className="prose prose-invert prose-sm max-w-none">
            {passage.text.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/75 mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <Clock className="h-3.5 w-3.5" />
          <span>Read the passage carefully, then click when you are finished reading.</span>
        </div>
        <Button onClick={onFinishReading}>
          I have finished reading
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

// ─── Questions Phase ─────────────────────────────────────────────────────────

function QuestionsPhase({
  passage,
  currentQuestionIndex,
  currentAnswer,
  onAnswerChange,
  onSubmitAnswer,
  onBack,
}: {
  passage: ReadingPassage
  currentQuestionIndex: number
  currentAnswer: string
  onAnswerChange: (answer: string) => void
  onSubmitAnswer: () => void
  onBack: () => void
}) {
  const question = passage.questions[currentQuestionIndex]
  if (!question) return null

  const isLast = currentQuestionIndex === passage.questions.length - 1

  return (
    <div className="space-y-6">
      <div>
        <Badge variant="outline" className="mb-2 text-xs">
          {passage.title} &middot; Question {currentQuestionIndex + 1} of{" "}
          {passage.questions.length}
        </Badge>
        <div className="flex items-center gap-2 mt-1">
          <Badge
            variant="outline"
            className={`text-xs ${
              question.skill === "literal"
                ? "border-blue-500/20 text-blue-400"
                : question.skill === "inferential"
                  ? "border-violet-500/20 text-violet-400"
                  : question.skill === "evaluative"
                    ? "border-amber-500/20 text-amber-400"
                    : "border-emerald-500/20 text-emerald-400"
            }`}
          >
            {question.skill}
          </Badge>
          <span className="text-xs text-white/30">
            {question.points} {question.points === 1 ? "mark" : "marks"}
          </span>
        </div>
      </div>

      <Card>
        <CardContent className="pt-5 space-y-4">
          <p className="text-sm font-medium text-white/85">{question.question}</p>

          {question.type === "multiple-choice" && question.options ? (
            <div className="space-y-2">
              {question.options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onAnswerChange(option.id)}
                  className={`w-full text-left rounded-xl border p-4 text-sm transition-all duration-200 ${
                    currentAnswer === option.id
                      ? "border-emerald-500/40 bg-emerald-500/10 text-white/90"
                      : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${
                        currentAnswer === option.id
                          ? "border-emerald-500 bg-emerald-500 text-white"
                          : "border-white/20 text-white/40"
                      }`}
                    >
                      {option.id.toUpperCase()}
                    </div>
                    <span>{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <textarea
              value={currentAnswer}
              onChange={(e) => onAnswerChange(e.target.value)}
              placeholder="Type your answer here..."
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 placeholder:text-white/30 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/30 resize-none"
            />
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} size="sm">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to passage
        </Button>
        <Button
          onClick={onSubmitAnswer}
          disabled={!currentAnswer.trim()}
        >
          {isLast ? "Next Section" : "Next Question"}
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}

// ─── Decoding Phase ──────────────────────────────────────────────────────────

function DecodingPhase({
  words,
  currentIndex,
  onAnswer,
  decodingStartTime,
}: {
  words: DecodingWord[]
  currentIndex: number
  onAnswer: (correct: boolean) => void
  decodingStartTime: number | null
}) {
  const word = words[currentIndex]
  if (!word) return null

  return (
    <div className="mx-auto max-w-lg space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Eye className="h-5 w-5 text-blue-400" />
          <h2 className="text-lg font-bold text-white/90">Word Recognition</h2>
        </div>
        <p className="text-sm text-white/50">
          Read the word below. Do you recognise it? Is it a real English word?
        </p>
      </div>

      <TestProgress
        currentStep={currentIndex + 1}
        totalSteps={words.length}
        label="Decoding Progress"
      />

      <Card>
        <CardContent className="pt-5">
          <div className="flex flex-col items-center py-8">
            <div className="mb-2 text-xs text-white/30">
              Level {word.level} &middot; {word.phonicPattern}
            </div>
            <div className="text-4xl font-bold text-white/95 mb-8 tracking-wide">
              {word.word}
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                className="min-w-[140px] border-emerald-500/30 hover:bg-emerald-500/10"
                onClick={() => onAnswer(word.isReal === true)}
              >
                <CheckCircle className="h-4 w-4 mr-2 text-emerald-400" />
                Real Word
              </Button>
              <Button
                variant="outline"
                className="min-w-[140px] border-red-500/30 hover:bg-red-500/10"
                onClick={() => onAnswer(word.isReal === false)}
              >
                <AlertTriangle className="h-4 w-4 mr-2 text-red-400" />
                Not a Real Word
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-center">
        <TimerDisplay startTime={decodingStartTime} />
      </div>
    </div>
  )
}

// ─── Completing Phase ────────────────────────────────────────────────────────

function CompletingPhase() {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-4">
      <Loader2 className="h-8 w-8 text-emerald-400 animate-spin" />
      <p className="text-sm text-white/60">Calculating your results...</p>
    </div>
  )
}

// ─── Main Test Component ─────────────────────────────────────────────────────

export default function ReadingTestPage() {
  const router = useRouter()

  // Select a subset of passages to use (levels 1-10, picking representative ones)
  // We use all 10 passages for a thorough assessment
  const passages = READING_PASSAGES

  // Select decoding words — sample across levels
  const decodingWordSet = useRef(
    DECODING_WORDS.filter((_, i) => i % 2 === 0).slice(0, 24)
  ).current

  const [state, setState] = useState<TestState>({
    phase: "age-input",
    currentPassageIndex: 0,
    chronologicalAge: { years: 14, months: 0 },
    comprehensionAnswers: [],
    decodingAnswers: [],
    fluencyTimings: [],
    passageStartTime: null,
    currentDecodingIndex: 0,
    decodingStartTime: null,
    currentQuestionIndex: 0,
    currentAnswer: "",
  })

  const totalSteps = passages.length * 2 + 1 // passages + questions + decoding
  const currentStep =
    state.phase === "age-input"
      ? 0
      : state.phase === "decoding"
        ? passages.length * 2 + 1
        : state.currentPassageIndex * 2 + (state.phase === "questions" ? 1 : 0) + 1

  // ── Handlers ─────────────────────────────────────────────────────────────

  const handleAgeSubmit = useCallback((years: number, months: number) => {
    setState((prev) => ({
      ...prev,
      chronologicalAge: { years, months },
      phase: "passage",
      passageStartTime: Date.now(),
    }))
  }, [])

  const handleFinishReading = useCallback(() => {
    const passage = passages[state.currentPassageIndex]
    if (!passage || !state.passageStartTime) return

    const readingTimeSeconds = (Date.now() - state.passageStartTime) / 1000

    setState((prev) => ({
      ...prev,
      fluencyTimings: [
        ...prev.fluencyTimings,
        {
          passageId: passage.id,
          readingTimeSeconds,
          wordCount: passage.wordCount,
          // Estimate words correct as ~95% for self-reported reading
          wordsCorrect: Math.round(passage.wordCount * 0.95),
        },
      ],
      phase: "questions",
      currentQuestionIndex: 0,
      currentAnswer: "",
    }))
  }, [state.currentPassageIndex, state.passageStartTime, passages])

  const handleAnswerChange = useCallback((answer: string) => {
    setState((prev) => ({ ...prev, currentAnswer: answer }))
  }, [])

  const handleSubmitAnswer = useCallback(() => {
    const passage = passages[state.currentPassageIndex]
    if (!passage) return

    const question = passage.questions[state.currentQuestionIndex]
    if (!question) return

    const newAnswers = [
      ...state.comprehensionAnswers,
      { questionId: question.id, answer: state.currentAnswer },
    ]

    const isLastQuestion = state.currentQuestionIndex === passage.questions.length - 1
    const isLastPassage = state.currentPassageIndex === passages.length - 1

    if (isLastQuestion) {
      if (isLastPassage) {
        // Move to decoding phase
        setState((prev) => ({
          ...prev,
          comprehensionAnswers: newAnswers,
          phase: "decoding",
          currentDecodingIndex: 0,
          decodingStartTime: Date.now(),
          currentAnswer: "",
        }))
      } else {
        // Move to next passage
        setState((prev) => ({
          ...prev,
          comprehensionAnswers: newAnswers,
          phase: "passage",
          currentPassageIndex: prev.currentPassageIndex + 1,
          passageStartTime: Date.now(),
          currentQuestionIndex: 0,
          currentAnswer: "",
        }))
      }
    } else {
      // Next question
      setState((prev) => ({
        ...prev,
        comprehensionAnswers: newAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        currentAnswer: "",
      }))
    }
  }, [
    state.currentPassageIndex,
    state.currentQuestionIndex,
    state.currentAnswer,
    state.comprehensionAnswers,
    passages,
  ])

  const handleBackToPassage = useCallback(() => {
    setState((prev) => ({
      ...prev,
      phase: "passage",
      passageStartTime: Date.now(), // reset timer
    }))
  }, [])

  const handleDecodingAnswer = useCallback(
    (correct: boolean) => {
      const word = decodingWordSet[state.currentDecodingIndex]
      if (!word) return

      const responseTimeMs = state.decodingStartTime
        ? Date.now() - state.decodingStartTime
        : 3000

      const newAnswer: DecodingAnswer = {
        wordId: word.id,
        correct,
        responseTimeMs,
      }

      const newAnswers = [...state.decodingAnswers, newAnswer]
      const isLast = state.currentDecodingIndex === decodingWordSet.length - 1

      if (isLast) {
        // Complete the assessment
        setState((prev) => ({
          ...prev,
          decodingAnswers: newAnswers,
          phase: "complete",
        }))
      } else {
        setState((prev) => ({
          ...prev,
          decodingAnswers: newAnswers,
          currentDecodingIndex: prev.currentDecodingIndex + 1,
          decodingStartTime: Date.now(),
        }))
      }
    },
    [state.currentDecodingIndex, state.decodingStartTime, state.decodingAnswers, decodingWordSet]
  )

  // ── Calculate results and redirect ───────────────────────────────────────

  useEffect(() => {
    if (state.phase !== "complete") return

    // Gather all questions from the passages we used
    const allQuestions = passages.flatMap((p) => p.questions)

    const input: AssessmentInput = {
      comprehensionAnswers: state.comprehensionAnswers,
      decodingAnswers: state.decodingAnswers,
      fluencyTimings: state.fluencyTimings,
      questions: allQuestions,
      decodingWords: decodingWordSet,
    }

    const result = calculateReadingAge(input)

    // Store result in sessionStorage for the results page
    try {
      sessionStorage.setItem("reading-assessment-result", JSON.stringify(result))
      sessionStorage.setItem(
        "reading-assessment-age",
        JSON.stringify(state.chronologicalAge)
      )
    } catch {
      // ignore storage errors
    }

    // Navigate to results
    const timer = setTimeout(() => {
      router.push("/assessment/reading")
    }, 1500)

    return () => clearTimeout(timer)
  }, [
    state.phase,
    state.comprehensionAnswers,
    state.decodingAnswers,
    state.fluencyTimings,
    state.chronologicalAge,
    passages,
    decodingWordSet,
    router,
  ])

  // ── Render ───────────────────────────────────────────────────────────────

  const currentPassage = passages[state.currentPassageIndex]

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-white/40 mb-4">
          <Link href="/assessment/reading" className="hover:text-white/60 transition-colors">
            Reading Assessment
          </Link>
          <span>/</span>
          <span className="text-white/60">Test</span>
        </div>

        {state.phase !== "age-input" && state.phase !== "complete" && (
          <TestProgress
            currentStep={currentStep}
            totalSteps={totalSteps}
            label={
              state.phase === "decoding"
                ? "Word Recognition"
                : `Passage ${state.currentPassageIndex + 1} of ${passages.length}`
            }
          />
        )}
      </div>

      {/* Phases */}
      {state.phase === "age-input" && (
        <AgeInputPhase onSubmit={handleAgeSubmit} />
      )}

      {state.phase === "passage" && currentPassage && (
        <PassagePhase
          passage={currentPassage}
          onFinishReading={handleFinishReading}
          startTime={state.passageStartTime}
        />
      )}

      {state.phase === "questions" && currentPassage && (
        <QuestionsPhase
          passage={currentPassage}
          currentQuestionIndex={state.currentQuestionIndex}
          currentAnswer={state.currentAnswer}
          onAnswerChange={handleAnswerChange}
          onSubmitAnswer={handleSubmitAnswer}
          onBack={handleBackToPassage}
        />
      )}

      {state.phase === "decoding" && (
        <DecodingPhase
          words={decodingWordSet}
          currentIndex={state.currentDecodingIndex}
          onAnswer={handleDecodingAnswer}
          decodingStartTime={state.decodingStartTime}
        />
      )}

      {state.phase === "complete" && <CompletingPhase />}
    </div>
  )
}

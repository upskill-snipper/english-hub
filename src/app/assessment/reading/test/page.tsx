"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  BookOpen,
  ArrowRight,
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
  scoreAnswer,
  type ComprehensionAnswer,
  type DecodingAnswer,
  type FluencyTiming,
  type AssessmentInput,
} from "@/lib/reading-assessment"

// ─── Types ───────────────────────────────────────────────────────────────────

type TestPhase = "age-input" | "passage" | "questions" | "decoding" | "ceiling-reached" | "complete"

interface TestState {
  phase: TestPhase
  currentPassageIndex: number
  chronologicalAge: { years: number; months: number }
  // Answers
  comprehensionAnswers: ComprehensionAnswer[]
  decodingAnswers: DecodingAnswer[]
  fluencyTimings: FluencyTiming[]
  // Timing — cumulative to prevent gaming
  passageStartTime: number | null
  passageElapsedBeforePause: number // accumulated seconds from previous reading periods
  // Decoding state
  currentDecodingIndex: number
  decodingStartTime: number | null
  // Question state
  currentQuestionIndex: number
  currentAnswer: string
  // Ceiling rule tracking
  consecutiveWrong: number
  passageScores: { passageIndex: number; correct: number; total: number }[]
  ceilingReached: boolean
}

// ─── Timer Display ───────────────────────────────────────────────────────────

function TimerDisplay({ startTime, offsetSeconds = 0 }: { startTime: number | null; offsetSeconds?: number }) {
  const [elapsed, setElapsed] = useState(Math.floor(offsetSeconds))

  useEffect(() => {
    if (!startTime) {
      setElapsed(Math.floor(offsetSeconds))
      return
    }
    const interval = setInterval(() => {
      setElapsed(Math.floor(offsetSeconds + (Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [startTime, offsetSeconds])

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

// Maximum plausible reading speed (words per minute). Even exceptional adult
// readers rarely exceed 450 WPM with comprehension. We use 600 WPM as the
// hard floor for "how fast someone could physically have read this" to guard
// against users who click "finished" immediately without reading.
const MAX_PLAUSIBLE_WPM = 600

function PassagePhase({
  passage,
  onFinishReading,
  startTime,
  elapsedOffset = 0,
}: {
  passage: ReadingPassage
  onFinishReading: () => void
  startTime: number | null
  elapsedOffset?: number
}) {
  // Minimum seconds required before the "finished reading" button is enabled.
  // Based on 600 WPM (10 words per second) which is FAR above natural reading.
  const minReadSeconds = Math.max(10, Math.ceil(passage.wordCount / 10))

  const [elapsedSeconds, setElapsedSeconds] = useState(Math.floor(elapsedOffset))

  useEffect(() => {
    if (!startTime) {
      setElapsedSeconds(Math.floor(elapsedOffset))
      return
    }
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor(elapsedOffset + (Date.now() - startTime) / 1000))
    }, 250)
    return () => clearInterval(interval)
  }, [startTime, elapsedOffset])

  const canFinish = elapsedSeconds >= minReadSeconds
  const secondsRemaining = Math.max(0, minReadSeconds - elapsedSeconds)

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
        <TimerDisplay startTime={startTime} offsetSeconds={elapsedOffset} />
      </div>

      <Card>
        <CardContent className="pt-5">
          <div className="prose prose-invert prose-sm max-w-none select-none" style={{ userSelect: "none" }}>
            {passage.text.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/75 mb-4 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-white/40">
          <Clock className="h-3.5 w-3.5" />
          {canFinish ? (
            <span>Read carefully — you cannot return once you start the questions.</span>
          ) : (
            <span>
              Take your time to read properly. Button unlocks in {secondsRemaining}s.
            </span>
          )}
        </div>
        <Button onClick={onFinishReading} disabled={!canFinish}>
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
}: {
  passage: ReadingPassage
  currentQuestionIndex: number
  currentAnswer: string
  onAnswerChange: (answer: string) => void
  onSubmitAnswer: () => void
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
        <p className="text-xs text-white/40 max-w-[200px]">
          Answer from memory — you cannot return to the passage.
        </p>
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

// ─── Ceiling Reached Phase ──────────────────────────────────────────────────

function CeilingReachedPhase({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="mx-auto max-w-lg space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-5">
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle className="h-6 w-6 text-emerald-400" />
            </div>
            <h2 className="text-lg font-bold text-white/90">
              Assessment complete
            </h2>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              We have enough data to calculate your reading age. You do not need
              to continue with the remaining passages.
            </p>
          </div>

          <Separator className="bg-white/10" />

          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-start gap-2">
              <BookOpen className="h-4 w-4 text-blue-400 mt-0.5 shrink-0" />
              <p className="text-xs text-white/50">
                Your score is based on the passages you completed. Passages you
                did not attempt do not affect your result.
              </p>
            </div>
          </div>

          <Button className="w-full" onClick={onContinue}>
            Continue to Word Recognition
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

// ─── Main Test Component ─────────────────────────────────────────────────────

// Fisher-Yates shuffle — returns a new array, does not mutate the input
function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export default function ReadingTestPage() {
  const router = useRouter()

  // Per-session randomization: each time a student starts the test, the
  // questions within each passage are shuffled and the decoding word pool
  // is resampled, so repeated attempts don't just memorize the answers.
  // Passages themselves stay in level order so the ceiling rule works.
  const passages = useRef(
    READING_PASSAGES.map((p) => ({
      ...p,
      questions: shuffle(p.questions),
    }))
  ).current

  // Randomize decoding words on each test start — pick 24 words across all levels
  const decodingWordSet = useRef(shuffle(DECODING_WORDS).slice(0, 24)).current

  const [state, setState] = useState<TestState>({
    phase: "age-input",
    currentPassageIndex: 0,
    chronologicalAge: { years: 14, months: 0 },
    comprehensionAnswers: [],
    decodingAnswers: [],
    fluencyTimings: [],
    passageStartTime: null,
    passageElapsedBeforePause: 0,
    currentDecodingIndex: 0,
    decodingStartTime: null,
    currentQuestionIndex: 0,
    currentAnswer: "",
    consecutiveWrong: 0,
    passageScores: [],
    ceilingReached: false,
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
      passageElapsedBeforePause: 0,
    }))
  }, [])

  const handleFinishReading = useCallback(() => {
    const passage = passages[state.currentPassageIndex]
    if (!passage || !state.passageStartTime) return

    // Cumulative time: previously accumulated time + current reading session
    const currentSessionSeconds = (Date.now() - state.passageStartTime) / 1000
    const totalReadingTimeSeconds = state.passageElapsedBeforePause + currentSessionSeconds

    setState((prev) => ({
      ...prev,
      fluencyTimings: [
        ...prev.fluencyTimings,
        {
          passageId: passage.id,
          readingTimeSeconds: totalReadingTimeSeconds,
          wordCount: passage.wordCount,
          // Estimate words correct as ~95% for self-reported reading
          wordsCorrect: Math.round(passage.wordCount * 0.95),
        },
      ],
      phase: "questions",
      currentQuestionIndex: 0,
      currentAnswer: "",
      // Keep passageStartTime null during questions — timer paused
      passageStartTime: null,
    }))
  }, [state.currentPassageIndex, state.passageStartTime, state.passageElapsedBeforePause, passages])

  const handleAnswerChange = useCallback((answer: string) => {
    setState((prev) => ({ ...prev, currentAnswer: answer }))
  }, [])

  const handleSubmitAnswer = useCallback(() => {
    const passage = passages[state.currentPassageIndex]
    if (!passage) return

    const question = passage.questions[state.currentQuestionIndex]
    if (!question) return

    const thisAnswer: ComprehensionAnswer = {
      questionId: question.id,
      answer: state.currentAnswer,
    }
    const newAnswers = [...state.comprehensionAnswers, thisAnswer]

    // Score this answer to track ceiling rule
    const pointsEarned = scoreAnswer(thisAnswer, question)
    const isCorrect = pointsEarned > 0
    const newConsecutiveWrong = isCorrect ? 0 : state.consecutiveWrong + 1

    const isLastQuestion = state.currentQuestionIndex === passage.questions.length - 1
    const isLastPassage = state.currentPassageIndex === passages.length - 1

    // Build updated passage scores when finishing a passage
    let newPassageScores = state.passageScores
    let shouldTriggerCeiling = false

    // Check ceiling: 3 consecutive wrong answers on current passage
    if (newConsecutiveWrong >= 3) {
      shouldTriggerCeiling = true
    }

    if (isLastQuestion) {
      // Calculate this passage's score
      const passageQuestionIds = new Set(passage.questions.map((q) => q.id))
      const passageAnswers = newAnswers.filter((a) =>
        passageQuestionIds.has(a.questionId)
      )
      let passageCorrect = 0
      for (const a of passageAnswers) {
        const q = passage.questions.find((pq) => pq.id === a.questionId)
        if (q && scoreAnswer(a, q) > 0) passageCorrect++
      }

      const newScore = {
        passageIndex: state.currentPassageIndex,
        correct: passageCorrect,
        total: passage.questions.length,
      }
      newPassageScores = [...state.passageScores, newScore]

      // Check ceiling: scored 0-1 out of 4 on two consecutive passages
      if (newPassageScores.length >= 2) {
        const last = newPassageScores[newPassageScores.length - 1]
        const secondLast = newPassageScores[newPassageScores.length - 2]
        if (
          last.correct <= 1 &&
          secondLast.correct <= 1 &&
          last.passageIndex === secondLast.passageIndex + 1
        ) {
          shouldTriggerCeiling = true
        }
      }
    }

    if (shouldTriggerCeiling) {
      // End comprehension early — show ceiling message
      setState((prev) => ({
        ...prev,
        comprehensionAnswers: newAnswers,
        consecutiveWrong: newConsecutiveWrong,
        passageScores: newPassageScores,
        ceilingReached: true,
        phase: "ceiling-reached",
        currentAnswer: "",
      }))
      return
    }

    if (isLastQuestion) {
      if (isLastPassage) {
        // Move to decoding phase
        setState((prev) => ({
          ...prev,
          comprehensionAnswers: newAnswers,
          consecutiveWrong: newConsecutiveWrong,
          passageScores: newPassageScores,
          phase: "decoding",
          currentDecodingIndex: 0,
          decodingStartTime: Date.now(),
          currentAnswer: "",
        }))
      } else {
        // Move to next passage — fresh timer for new passage
        setState((prev) => ({
          ...prev,
          comprehensionAnswers: newAnswers,
          consecutiveWrong: newConsecutiveWrong,
          passageScores: newPassageScores,
          phase: "passage",
          currentPassageIndex: prev.currentPassageIndex + 1,
          passageStartTime: Date.now(),
          passageElapsedBeforePause: 0,
          currentQuestionIndex: 0,
          currentAnswer: "",
        }))
      }
    } else {
      // Next question
      setState((prev) => ({
        ...prev,
        comprehensionAnswers: newAnswers,
        consecutiveWrong: newConsecutiveWrong,
        passageScores: newPassageScores,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        currentAnswer: "",
      }))
    }
  }, [
    state.currentPassageIndex,
    state.currentQuestionIndex,
    state.currentAnswer,
    state.comprehensionAnswers,
    state.consecutiveWrong,
    state.passageScores,
    passages,
  ])

  // Back to passage removed — students must answer from memory for accurate assessment

  const handleCeilingContinue = useCallback(() => {
    setState((prev) => ({
      ...prev,
      phase: "decoding",
      currentDecodingIndex: 0,
      decodingStartTime: Date.now(),
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

    // Calculate how many passages were actually attempted
    const attemptedPassageIds = new Set<string>()
    for (const a of state.comprehensionAnswers) {
      const passageId = a.questionId.replace(/q\d+$/, "")
      attemptedPassageIds.add(passageId)
    }

    const input: AssessmentInput = {
      comprehensionAnswers: state.comprehensionAnswers,
      decodingAnswers: state.decodingAnswers,
      fluencyTimings: state.fluencyTimings,
      questions: allQuestions,
      decodingWords: decodingWordSet,
      ceilingReached: state.ceilingReached,
      passagesAttempted: attemptedPassageIds.size,
      totalPassages: passages.length,
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
    state.ceilingReached,
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

        {state.phase !== "age-input" && state.phase !== "complete" && state.phase !== "ceiling-reached" && (
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
          elapsedOffset={state.passageElapsedBeforePause}
        />
      )}

      {state.phase === "questions" && currentPassage && (
        <QuestionsPhase
          passage={currentPassage}
          currentQuestionIndex={state.currentQuestionIndex}
          currentAnswer={state.currentAnswer}
          onAnswerChange={handleAnswerChange}
          onSubmitAnswer={handleSubmitAnswer}
        />
      )}

      {state.phase === "ceiling-reached" && (
        <CeilingReachedPhase onContinue={handleCeilingContinue} />
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

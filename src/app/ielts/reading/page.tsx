'use client'

// ─── IELTS Academic Reading practice ───────────────────────────────────────
// Client module page. Renders ONE original Academic-style reading test
// (2 passages, 14 questions across MCQ / True-False-Not-Given / gap-fill),
// collects answers, auto-marks on submit, converts the raw score to an
// estimated IELTS band via the shared bands helper, persists the attempt to
// localStorage through the IELTS store, and shows a full review with
// per-question explanations.
//
// Conventions follow src/app/revision/quiz/quiz-engine.tsx (card styling,
// emerald/red correctness states, <details> review blocks) and the toolkit
// pages (mounted SSR guard, header shell). Persistence is localStorage-only.
// ──────────────────────────────────────────────────────────────────────────

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  BookOpen,
  Check,
  X,
  Clock,
  ListChecks,
  RotateCcw,
  TrendingUp,
  CalendarDays,
  ArrowRight,
  AlertCircle,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import type { ObjectiveQuestion, ReadingPassage, ReadingTest } from '@/lib/ielts/types'
import { objectiveToBand, bandLabel, bandTier, bandColour, bandBgColour } from '@/lib/ielts/bands'
import { saveAttempt, genId } from '@/lib/ielts/store'

import { READING_TESTS } from './reading-tests'

// ─── Marking ────────────────────────────────────────────────────────────────

type AnswerMap = Record<string, string>

const TFNG_OPTIONS: { value: 'true' | 'false' | 'not-given'; label: string }[] = [
  { value: 'true', label: 'True' },
  { value: 'false', label: 'False' },
  { value: 'not-given', label: 'Not Given' },
]

/** True when a recorded answer for `q` is correct. Empty/unset answers are wrong. */
function isAnswerCorrect(q: ObjectiveQuestion, raw: string | undefined): boolean {
  if (raw === undefined) return false
  const given = raw.trim()
  if (given === '') return false

  if (q.type === 'mcq') {
    const idx = Number(given)
    return Number.isInteger(idx) && idx === q.correctIndex
  }
  if (q.type === 'tfng') {
    return given === q.answer
  }
  // gap: case-insensitive, trimmed match against any acceptable answer
  const normalised = given.toLowerCase()
  return q.acceptableAnswers.some((a) => a.trim().toLowerCase() === normalised)
}

/** Human-readable form of the correct answer, for the review panel. */
function correctAnswerLabel(q: ObjectiveQuestion): string {
  if (q.type === 'mcq') return q.options[q.correctIndex]
  if (q.type === 'tfng') {
    return TFNG_OPTIONS.find((o) => o.value === q.answer)?.label ?? q.answer
  }
  return q.acceptableAnswers.join(' / ')
}

/** Human-readable form of the user's answer, for the review panel. */
function userAnswerLabel(q: ObjectiveQuestion, raw: string | undefined): string {
  if (raw === undefined || raw.trim() === '') return 'No answer'
  if (q.type === 'mcq') {
    const idx = Number(raw)
    return Number.isInteger(idx) && q.options[idx] !== undefined ? q.options[idx] : 'No answer'
  }
  if (q.type === 'tfng') {
    return TFNG_OPTIONS.find((o) => o.value === raw)?.label ?? raw
  }
  return raw
}

const QUESTION_TYPE_LABEL: Record<ObjectiveQuestion['type'], string> = {
  mcq: 'Multiple choice',
  tfng: 'True / False / Not Given',
  gap: 'Sentence completion',
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function IeltsReadingPage() {
  const test: ReadingTest | undefined = READING_TESTS[0]

  // Flat, ordered list of every question across all passages — drives numbering,
  // marking and the results review.
  const allQuestions = useMemo<ObjectiveQuestion[]>(
    () => (test ? test.passages.flatMap((p) => p.questions) : []),
    [test],
  )
  const totalQuestions = allQuestions.length

  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [submitted, setSubmitted] = useState(false)
  // Stable per-question global numbers (Q1..Qn) regardless of passage.
  const questionNumber = useMemo(() => {
    const map: Record<string, number> = {}
    allQuestions.forEach((q, i) => {
      map[q.id] = i + 1
    })
    return map
  }, [allQuestions])

  // Defensive: if the content bank is somehow empty, fail gracefully.
  if (!test || totalQuestions === 0) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
          <AlertCircle className="mx-auto mb-4 size-10 text-muted-foreground" />
          <h1 className="font-serif text-2xl font-medium">Reading practice unavailable</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            No reading test could be loaded. Please try again later.
          </p>
        </div>
      </main>
    )
  }

  const setAnswer = (id: string, value: string) => setAnswers((prev) => ({ ...prev, [id]: value }))

  const answeredCount = allQuestions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id].trim() !== '',
  ).length

  const correctCount = allQuestions.filter((q) => isAnswerCorrect(q, answers[q.id])).length
  const band = objectiveToBand('reading', correctCount, totalQuestions)

  const handleSubmit = () => {
    if (submitted) return
    const correct = allQuestions.filter((q) => isAnswerCorrect(q, answers[q.id])).length
    const finalBand = objectiveToBand('reading', correct, totalQuestions)
    saveAttempt({
      id: genId('rd'),
      skill: 'reading',
      testId: test.id,
      rawScore: correct,
      total: totalQuestions,
      band: finalBand,
      date: new Date().toISOString(),
    })
    setSubmitted(true)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRestart = () => {
    setAnswers({})
    setSubmitted(false)
    setStarted(true)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // ─── Intro / start screen ────────────────────────────────────────────────
  if (!started) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
            <Badge variant="secondary" className="mb-4">
              IELTS preparation · Academic
            </Badge>
            <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {test.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Read {test.passages.length} short academic passages and answer {totalQuestions}{' '}
              questions. You will see multiple-choice, True/False/Not Given, and sentence-completion
              tasks — the core question types in the Academic Reading paper. When you finish, your
              answers are marked instantly and converted to an estimated band score with full
              explanations.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Stat
                icon={<ListChecks className="size-4" />}
                label="Questions"
                value={String(totalQuestions)}
              />
              <Stat
                icon={<BookOpen className="size-4" />}
                label="Passages"
                value={String(test.passages.length)}
              />
              <Stat
                icon={<Clock className="size-4" />}
                label="Suggested time"
                value={`${test.estimatedMinutes} min`}
              />
            </div>

            <div className="mt-6 rounded-xl border border-border/40 bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
              <strong className="font-semibold text-foreground">How marking works:</strong>{' '}
              multiple-choice and True/False/Not Given are checked against the correct option;
              sentence completion accepts any listed answer, ignoring case and spaces. The band
              shown is an estimate for practice, not an official IELTS result.
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button size="lg" onClick={() => setStarted(true)}>
                Start the test
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" render={<Link href="/ielts/plan" />}>
                Back to study plan
              </Button>
            </div>
          </div>
        </div>
      </main>
    )
  }

  // ─── Results screen ──────────────────────────────────────────────────────
  if (submitted) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 space-y-6">
          {/* Band result */}
          <div className={`rounded-2xl border p-6 text-center sm:p-8 ${bandBgColour(band)}`}>
            <p className="text-sm font-medium text-muted-foreground">Estimated Reading band</p>
            <div className={`mt-1 text-6xl font-bold tabular-nums ${bandColour(band)}`}>
              {bandLabel(band)}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{bandTier(band)}</p>

            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold tabular-nums text-foreground">
                  {correctCount}/{totalQuestions}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Correct answers</div>
              </div>
              <div className="h-12 w-px bg-border/60" />
              <div className="text-center">
                <div className="text-3xl font-bold tabular-nums text-foreground">
                  {Math.round((correctCount / totalQuestions) * 100)}%
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Score</div>
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-muted-foreground">
              This is an estimate based on published Academic band approximations and is intended
              for practice only — it is not an official IELTS score.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={handleRestart}>
              <RotateCcw className="size-4" />
              Try again
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ielts/progress" />}>
              <TrendingUp className="size-4" />
              View progress
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ielts/plan" />}>
              <CalendarDays className="size-4" />
              Study plan
            </Button>
          </div>

          {/* Per-question review, grouped by passage */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-medium">Review your answers</h3>
            {test.passages.map((passage) => (
              <div key={passage.id} className="rounded-2xl border border-border/60 bg-card p-5">
                <h4 className="mb-4 font-heading text-base font-semibold text-foreground">
                  {passage.title}
                </h4>
                <div className="space-y-3">
                  {passage.questions.map((q) => {
                    const correct = isAnswerCorrect(q, answers[q.id])
                    return (
                      <details
                        key={q.id}
                        className={`rounded-xl border p-3 ${
                          correct
                            ? 'border-emerald-500/30 bg-emerald-500/5'
                            : 'border-red-500/30 bg-red-500/5'
                        }`}
                      >
                        <summary className="flex cursor-pointer items-center gap-2 text-sm">
                          <span
                            className={`flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                              correct
                                ? 'bg-emerald-500/20 text-emerald-500'
                                : 'bg-red-500/20 text-red-500'
                            }`}
                          >
                            {correct ? <Check className="size-3" /> : <X className="size-3" />}
                          </span>
                          <span className="font-mono text-xs text-muted-foreground">
                            Q{questionNumber[q.id]}
                          </span>
                          <span className="flex-1 font-medium text-foreground">{q.prompt}</span>
                        </summary>
                        <div className="mt-2 space-y-1.5 pl-7">
                          {!correct && (
                            <p className="text-sm text-red-500">
                              Your answer: {userAnswerLabel(q, answers[q.id])}
                            </p>
                          )}
                          <p className="text-sm text-emerald-500">
                            Correct answer: {correctAnswerLabel(q)}
                          </p>
                          {q.explanation && (
                            <p className="text-sm text-muted-foreground">{q.explanation}</p>
                          )}
                        </div>
                      </details>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    )
  }

  // ─── Test runner ─────────────────────────────────────────────────────────
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />

      {/* Progress bar */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2.5 sm:px-6">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <ListChecks className="size-3.5" />
            <span className="tabular-nums">
              {answeredCount} of {totalQuestions} answered
            </span>
          </div>
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={answeredCount}
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-label={`Reading progress: ${answeredCount} of ${totalQuestions} questions answered`}
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
          <Button size="sm" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="space-y-10">
          {test.passages.map((passage, pIndex) => (
            <PassageBlock
              key={passage.id}
              passage={passage}
              passageIndex={pIndex}
              questionNumber={questionNumber}
              answers={answers}
              onAnswer={setAnswer}
            />
          ))}
        </div>

        {/* Bottom submit */}
        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              You have answered{' '}
              <span className="font-semibold text-foreground tabular-nums">{answeredCount}</span> of{' '}
              {totalQuestions} questions. You can submit at any time.
            </p>
            <Button size="lg" onClick={handleSubmit}>
              <Check className="size-4" />
              Submit and see my band
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function Header() {
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              IELTS Academic Reading
            </h1>
            <p className="text-sm text-muted-foreground">
              Original practice passages with instant band estimates
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/40 bg-background/50 p-3">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-lg font-semibold text-foreground tabular-nums">{value}</div>
    </div>
  )
}

function PassageBlock({
  passage,
  passageIndex,
  questionNumber,
  answers,
  onAnswer,
}: {
  passage: ReadingPassage
  passageIndex: number
  questionNumber: Record<string, number>
  answers: AnswerMap
  onAnswer: (id: string, value: string) => void
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Passage — sticky on large screens so questions scroll alongside it */}
      <div className="lg:sticky lg:top-16 lg:self-start">
        <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
          <Badge variant="outline" className="mb-3">
            Passage {passageIndex + 1}
          </Badge>
          <h2 className="font-serif text-xl font-medium tracking-tight">{passage.title}</h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/90">
            {passage.body.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Questions for this passage */}
      <div className="space-y-4">
        {passage.questions.map((q) => (
          <QuestionCard
            key={q.id}
            question={q}
            number={questionNumber[q.id]}
            value={answers[q.id]}
            onAnswer={(v) => onAnswer(q.id, v)}
          />
        ))}
      </div>
    </div>
  )
}

function QuestionCard({
  question,
  number,
  value,
  onAnswer,
}: {
  question: ObjectiveQuestion
  number: number
  value: string | undefined
  onAnswer: (value: string) => void
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 sm:p-5">
      <div className="mb-3 flex items-start gap-2">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary tabular-nums">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug text-foreground">{question.prompt}</p>
          <Badge variant="ghost" className="mt-1.5 -ml-1 text-[0.65rem] text-muted-foreground">
            {QUESTION_TYPE_LABEL[question.type]}
          </Badge>
        </div>
      </div>

      {question.type === 'mcq' && (
        <div className="grid gap-2">
          {question.options.map((option, i) => {
            const selected = value === String(i)
            return (
              <button
                key={i}
                type="button"
                onClick={() => onAnswer(String(i))}
                aria-pressed={selected}
                className={`rounded-xl border p-3 text-left text-sm transition-all duration-200 ${
                  selected
                    ? 'border-primary/60 bg-primary/[0.06]'
                    : 'border-border/60 bg-card hover:border-primary/40 hover:bg-primary/[0.03]'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                      selected ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-foreground">{option}</span>
                </span>
              </button>
            )
          })}
        </div>
      )}

      {question.type === 'tfng' && (
        <div className="flex flex-wrap gap-2">
          {TFNG_OPTIONS.map((opt) => {
            const selected = value === opt.value
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => onAnswer(opt.value)}
                aria-pressed={selected}
                className={`rounded-lg border px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  selected
                    ? 'border-primary/60 bg-primary/[0.08] text-foreground'
                    : 'border-border/60 bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground'
                }`}
              >
                {opt.label}
              </button>
            )
          })}
        </div>
      )}

      {question.type === 'gap' && (
        <input
          type="text"
          value={value ?? ''}
          onChange={(e) => onAnswer(e.target.value)}
          placeholder="Type your answer"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
        />
      )}
    </div>
  )
}

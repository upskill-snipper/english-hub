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

import { useEffect, useMemo, useState } from 'react'
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

import { useT } from '@/lib/i18n/use-t'

import type { ObjectiveQuestion, ReadingPassage, ReadingTest } from '@/lib/ielts/types'
import { objectiveToBand, bandLabel, bandTier, bandColour, bandBgColour } from '@/lib/ielts/bands'
import {
  type AnswerMap,
  isQuestionFullyCorrect,
  correctAnswerLabel,
  userAnswerLabel,
  totalMarks,
  totalCorrect,
  totalAnswered,
  questionStartNumbers,
  questionMarks,
} from '@/lib/ielts/objective'
import { saveAttempt, genId } from '@/lib/ielts/store'

import { TrackToggle, useIeltsTrack } from '../_components/TrackToggle'
import { MatchingControl } from '../_components/MatchingControl'

import { READING_TESTS } from './reading-tests'

// ─── Question-type chrome ─────────────────────────────────────────────────────
// Marking now lives in the shared @/lib/ielts/objective module so the Reading
// page and the Mock score identically (including multi-mark `matching`).

const TFNG_OPTIONS: { value: 'true' | 'false' | 'not-given'; label: string }[] = [
  { value: 'true', label: 'True' },
  { value: 'false', label: 'False' },
  { value: 'not-given', label: 'Not Given' },
]

// Maps each question type to its UI-chrome dictionary key (translated via t()).
const QUESTION_TYPE_LABEL_KEY: Record<ObjectiveQuestion['type'], string> = {
  mcq: 'ielts.reading.qtype.mcq',
  tfng: 'ielts.reading.qtype.tfng',
  gap: 'ielts.reading.qtype.gap',
  matching: 'ielts.reading.qtype.matching',
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function IeltsReadingPage() {
  const t = useT()
  const [track, setTrack] = useIeltsTrack()

  // The bank holds both Academic and General Training tests in one array; the
  // learner picks one for the selected track from the intro picker.
  const testsForTrack = useMemo<ReadingTest[]>(
    () => READING_TESTS.filter((rt) => rt.track === track),
    [track],
  )

  const [selectedTestId, setSelectedTestId] = useState<string | null>(null)
  const [started, setStarted] = useState(false)
  const [answers, setAnswers] = useState<AnswerMap>({})
  const [submitted, setSubmitted] = useState(false)

  // The chosen test (null until the learner picks one from the list).
  const test = useMemo<ReadingTest | null>(
    () => testsForTrack.find((rt) => rt.id === selectedTestId) ?? null,
    [testsForTrack, selectedTestId],
  )

  // Flat, ordered list of every question across all passages — drives numbering,
  // marking and the results review.
  const allQuestions = useMemo<ObjectiveQuestion[]>(
    () => (test ? test.passages.flatMap((p) => p.questions) : []),
    [test],
  )
  const totalQuestions = totalMarks(allQuestions)

  // Switching track changes the available tests, so clear the selection + any
  // in-progress answers/results and return to the picker.
  useEffect(() => {
    setSelectedTestId(null)
    setStarted(false)
    setSubmitted(false)
    setAnswers({})
  }, [track])
  // Stable 1-based START number per question, accumulating MARKS so a matching
  // question reserves a numbered range (e.g. 14–18) and the next question follows.
  const questionStart = useMemo(() => questionStartNumbers(allQuestions), [allQuestions])

  // Defensive: if there are no tests at all for this track, fail gracefully.
  if (testsForTrack.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <div className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
          <AlertCircle className="mx-auto mb-4 size-10 text-muted-foreground" />
          <h1 className="font-serif text-2xl font-medium">{t('ielts.reading.empty.title')}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t('ielts.reading.empty.body')}</p>
        </div>
      </main>
    )
  }

  const setAnswer = (id: string, value: string) => setAnswers((prev) => ({ ...prev, [id]: value }))

  const answeredCount = totalAnswered(allQuestions, answers)
  const correctCount = totalCorrect(allQuestions, answers)
  const band = test ? objectiveToBand('reading', correctCount, totalQuestions, track) : null

  const handleSubmit = () => {
    if (submitted || !test) return
    const correct = totalCorrect(allQuestions, answers)
    const finalBand = objectiveToBand('reading', correct, totalQuestions, track)
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

  // ─── Intro / test picker ─────────────────────────────────────────────────
  // The learner chooses which test in the bank to sit (the bank now holds many
  // tests per track, including ones with matching-headings / -features items).
  if (!started || !test) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <Header />
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <Badge variant="secondary">{t('ielts.reading.intro.eyebrow')}</Badge>
            <TrackToggle value={track} onChange={setTrack} />
          </div>
          <h2 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
            {t('ielts.reading.picker.title')}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {t('ielts.reading.picker.subtitle')}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {testsForTrack.map((rt) => {
              const qCount = totalMarks(rt.passages.flatMap((p) => p.questions))
              return (
                <button
                  key={rt.id}
                  type="button"
                  onClick={() => {
                    setSelectedTestId(rt.id)
                    setAnswers({})
                    setSubmitted(false)
                    setStarted(true)
                    if (typeof window !== 'undefined')
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 text-left transition-all hover:border-emerald-500/40 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-2">
                    <BookOpen className="size-4 shrink-0 text-emerald-500" />
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                      {rt.title}
                    </h3>
                  </div>
                  <span className="mt-2 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
                    <ListChecks className="size-3" />
                    {qCount} {t('ielts.reading.stat.questions')} · {rt.passages.length}{' '}
                    {t('ielts.reading.stat.passages')} · {rt.estimatedMinutes}{' '}
                    {t('ielts.reading.stat.minutes')}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-6 rounded-xl border border-border/40 bg-muted/30 p-4 text-xs leading-relaxed text-muted-foreground">
            <strong className="font-semibold text-foreground">
              {t('ielts.reading.marking.title')}
            </strong>{' '}
            {t('ielts.reading.marking.body')}
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
            <p className="text-sm font-medium text-muted-foreground">
              {t('ielts.reading.results.estimated_band')}
            </p>
            <div className={`mt-1 text-6xl font-bold tabular-nums ${bandColour(band)}`}>
              {bandLabel(band)}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{bandTier(band)}</p>

            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold tabular-nums text-foreground">
                  {correctCount}/{totalQuestions}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {t('ielts.reading.results.correct_answers')}
                </div>
              </div>
              <div className="h-12 w-px bg-border/60" />
              <div className="text-center">
                <div className="text-3xl font-bold tabular-nums text-foreground">
                  {Math.round((correctCount / totalQuestions) * 100)}%
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {t('ielts.reading.results.score')}
                </div>
              </div>
            </div>

            <p className="mx-auto mt-5 max-w-md text-xs leading-relaxed text-muted-foreground">
              {t('ielts.reading.results.disclaimer')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Button size="lg" onClick={handleRestart}>
              <RotateCcw className="size-4" />
              {t('ielts.reading.action.try_again')}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                setStarted(false)
                setSelectedTestId(null)
                setSubmitted(false)
                setAnswers({})
                if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <ListChecks className="size-4" />
              {t('ielts.reading.action.choose_test')}
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ielts/progress" />}>
              <TrendingUp className="size-4" />
              {t('ielts.reading.action.view_progress')}
            </Button>
            <Button size="lg" variant="outline" render={<Link href="/ielts/plan" />}>
              <CalendarDays className="size-4" />
              {t('ielts.reading.action.study_plan')}
            </Button>
          </div>

          {/* Per-question review, grouped by passage */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-medium">{t('ielts.reading.review.heading')}</h3>
            {test.passages.map((passage) => (
              <div key={passage.id} className="rounded-2xl border border-border/60 bg-card p-5">
                <h4 className="mb-4 font-heading text-base font-semibold text-foreground">
                  {passage.title}
                </h4>
                <div className="space-y-3">
                  {passage.questions.map((q) => {
                    const correct = isQuestionFullyCorrect(q, answers)
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
                            {questionMarks(q) > 1
                              ? `Q${questionStart[q.id]}–${questionStart[q.id] + questionMarks(q) - 1}`
                              : `Q${questionStart[q.id]}`}
                          </span>
                          <span className="flex-1 font-medium text-foreground">{q.prompt}</span>
                        </summary>
                        <div className="mt-2 space-y-1.5 pl-7">
                          {!correct && q.type !== 'matching' && (
                            <p className="text-sm text-red-500">
                              {t('ielts.reading.review.your_answer')}{' '}
                              {userAnswerLabel(
                                q,
                                answers[q.id],
                                t('ielts.reading.review.no_answer'),
                              )}
                            </p>
                          )}
                          <p className="text-sm text-emerald-500">
                            {t('ielts.reading.review.correct_answer')} {correctAnswerLabel(q)}
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
              {answeredCount} {t('ielts.reading.progress.of')} {totalQuestions}{' '}
              {t('ielts.reading.progress.answered')}
            </span>
          </div>
          <div
            className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted"
            role="progressbar"
            aria-valuenow={answeredCount}
            aria-valuemin={0}
            aria-valuemax={totalQuestions}
            aria-label={t('ielts.reading.progress.aria')
              .replace('{answered}', String(answeredCount))
              .replace('{total}', String(totalQuestions))}
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
            />
          </div>
          <Button size="sm" onClick={handleSubmit}>
            {t('ielts.reading.action.submit')}
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
              questionStart={questionStart}
              answers={answers}
              onAnswer={setAnswer}
            />
          ))}
        </div>

        {/* Bottom submit */}
        <div className="mt-10 rounded-2xl border border-border/60 bg-card p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              {t('ielts.reading.summary.you_answered')}{' '}
              <span className="font-semibold text-foreground tabular-nums">{answeredCount}</span>{' '}
              {t('ielts.reading.progress.of')} {totalQuestions} {t('ielts.reading.summary.tail')}
            </p>
            <Button size="lg" onClick={handleSubmit}>
              <Check className="size-4" />
              {t('ielts.reading.action.submit_and_see_band')}
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function Header() {
  const t = useT()
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10">
            <BookOpen className="size-6 text-emerald-500" />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
              {t('ielts.reading.header.title')}
            </h1>
            <p className="text-sm text-muted-foreground">{t('ielts.reading.header.subtitle')}</p>
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
  questionStart,
  answers,
  onAnswer,
}: {
  passage: ReadingPassage
  passageIndex: number
  questionStart: Record<string, number>
  answers: AnswerMap
  onAnswer: (id: string, value: string) => void
}) {
  const t = useT()
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Passage — sticky on large screens so questions scroll alongside it */}
      <div className="lg:sticky lg:top-16 lg:self-start">
        <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
          <Badge variant="outline" className="mb-3">
            {t('ielts.reading.passage.label')} {passageIndex + 1}
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
            startNumber={questionStart[q.id]}
            answers={answers}
            onAnswer={onAnswer}
          />
        ))}
      </div>
    </div>
  )
}

function QuestionCard({
  question,
  startNumber,
  answers,
  onAnswer,
}: {
  question: ObjectiveQuestion
  startNumber: number
  answers: AnswerMap
  onAnswer: (id: string, value: string) => void
}) {
  const t = useT()
  const value = answers[question.id]
  const marks = questionMarks(question)
  const numberLabel = marks > 1 ? `${startNumber}–${startNumber + marks - 1}` : String(startNumber)
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-4 sm:p-5">
      <div className="mb-3 flex items-start gap-2">
        <span className="flex min-w-6 shrink-0 items-center justify-center rounded-md bg-primary/10 px-1.5 text-xs font-bold text-primary tabular-nums">
          {numberLabel}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium leading-snug text-foreground">{question.prompt}</p>
          <Badge variant="ghost" className="mt-1.5 -ml-1 text-[0.65rem] text-muted-foreground">
            {t(QUESTION_TYPE_LABEL_KEY[question.type])}
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
                onClick={() => onAnswer(question.id, String(i))}
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
                onClick={() => onAnswer(question.id, opt.value)}
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
          onChange={(e) => onAnswer(question.id, e.target.value)}
          placeholder={t('ielts.reading.gap.placeholder')}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          className="w-full rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
        />
      )}

      {question.type === 'matching' && (
        <MatchingControl
          question={question}
          startNumber={startNumber}
          answers={answers}
          onAnswer={onAnswer}
          selectLabel={t('ielts.reading.matching.select')}
        />
      )}
    </div>
  )
}

'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  Headphones,
  Play,
  Check,
  X,
  RotateCcw,
  Trophy,
  ChevronRight,
  ClipboardList,
  Clock,
  ListChecks,
  Eye,
  EyeOff,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useT } from '@/lib/i18n/use-t'

import type { ListeningTest, ListeningSection, ObjectiveQuestion, Band } from '@/lib/ielts/types'
import { objectiveToBand, bandLabel, bandColour, bandBgColour, bandTier } from '@/lib/ielts/bands'
import { saveAttempt, genId } from '@/lib/ielts/store'

import { LISTENING_TESTS } from './listening-tests'
import AudioPlayer from './_components/AudioPlayer'

// ─── IELTS Academic Listening practice ──────────────────────────────────────
// Module page: intro → take the test (audio + questions, transcript hidden) →
// submit → auto-mark → predicted band + per-question review with transcript
// reveal and explanations. Persistence is localStorage via @/lib/ielts/store.
//
// Marking:
//   • mcq → compare the selected index to `correctIndex`.
//   • gap → trim + lower-case the typed answer and match it against any of the
//           question's `acceptableAnswers` (also trimmed + lower-cased).
// The band comes from objectiveToBand('listening', correct, total), which scales
// short practice sets to a /40-equivalent before looking up the official-ish
// Academic table.
// ────────────────────────────────────────────────────────────────────────────

type Phase = 'intro' | 'test' | 'results'

interface FlatQuestion {
  question: ObjectiveQuestion
  sectionId: string
  sectionTitle: string
  /** 1-based position across the whole test, for display. */
  number: number
}

/** Pull every question out of the test in order, tagged with its section. */
function flattenQuestions(test: ListeningTest): FlatQuestion[] {
  const flat: FlatQuestion[] = []
  let n = 1
  for (const section of test.sections) {
    for (const question of section.questions) {
      flat.push({
        question,
        sectionId: section.id,
        sectionTitle: section.title,
        number: n,
      })
      n += 1
    }
  }
  return flat
}

/** A gap answer is correct if its normalised form matches any accepted answer. */
function isGapCorrect(input: string, acceptable: string[]): boolean {
  const norm = input.trim().toLowerCase()
  if (!norm) return false
  return acceptable.some((a) => a.trim().toLowerCase() === norm)
}

export default function ListeningPage() {
  const t = useT()
  const [mounted, setMounted] = useState(false)
  const [phase, setPhase] = useState<Phase>('intro')

  // The bank holds many tests; the learner picks one from the intro screen.
  const [selectedTestId, setSelectedTestId] = useState<string | null>(null)
  const test = useMemo<ListeningTest | null>(
    () => LISTENING_TESTS.find((lt) => lt.id === selectedTestId) ?? null,
    [selectedTestId],
  )
  const flat = useMemo(() => (test ? flattenQuestions(test) : []), [test])
  const total = flat.length

  // Answers keyed by question id. mcq → option index; gap → typed string.
  const [mcqAnswers, setMcqAnswers] = useState<Record<string, number>>({})
  const [gapAnswers, setGapAnswers] = useState<Record<string, string>>({})

  // Results state (computed at submit, then frozen for the review screen).
  const [correctCount, setCorrectCount] = useState(0)
  const [band, setBand] = useState<Band>(0)
  const [savedId, setSavedId] = useState<string | null>(null)

  // Per-section transcript reveal toggles (review screen only).
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})

  useEffect(() => {
    setMounted(true)
  }, [])

  const startTest = useCallback((testId: string) => {
    setSelectedTestId(testId)
    setMcqAnswers({})
    setGapAnswers({})
    setCorrectCount(0)
    setBand(0)
    setSavedId(null)
    setRevealed({})
    setPhase('test')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Back to the picker to choose a different test.
  const chooseAnother = useCallback(() => {
    setSelectedTestId(null)
    setPhase('intro')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const answeredCount = useMemo(() => {
    let n = 0
    for (const { question } of flat) {
      if (question.type === 'mcq') {
        if (mcqAnswers[question.id] !== undefined) n += 1
      } else if (question.type === 'gap') {
        if ((gapAnswers[question.id] ?? '').trim() !== '') n += 1
      }
    }
    return n
  }, [flat, mcqAnswers, gapAnswers])

  const handleSubmit = useCallback(() => {
    if (!test) return
    let correct = 0
    for (const { question } of flat) {
      if (question.type === 'mcq') {
        if (mcqAnswers[question.id] === question.correctIndex) correct += 1
      } else if (question.type === 'gap') {
        if (isGapCorrect(gapAnswers[question.id] ?? '', question.acceptableAnswers)) correct += 1
      }
      // (No tfng questions in the Listening set, but the union allows them.)
    }

    const computedBand = objectiveToBand('listening', correct, total)
    setCorrectCount(correct)
    setBand(computedBand)

    const id = genId('ls')
    saveAttempt({
      id,
      skill: 'listening',
      testId: test.id,
      rawScore: correct,
      total,
      band: computedBand,
      date: new Date().toISOString(),
    })
    setSavedId(id)
    setPhase('results')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [test, flat, mcqAnswers, gapAnswers, total])

  // ─── SSR / first paint guard ──────────────────────────────────────────────
  if (!mounted) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <div className="h-8 w-48 animate-pulse rounded-lg bg-muted" />
          <div className="mt-6 h-40 animate-pulse rounded-2xl border border-border/60 bg-card" />
          <div className="mt-4 h-64 animate-pulse rounded-2xl border border-border/60 bg-card" />
        </div>
      </main>
    )
  }

  // Defensive: only if the bank is genuinely empty do we fail soft.
  if (LISTENING_TESTS.length === 0) {
    return (
      <main id="main-content" className="min-h-screen bg-background">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <p className="text-sm text-muted-foreground">{t('ielts.listening.none_available')}</p>
          <Link
            href="/ielts"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t('ielts.listening.back_to_ielts')}
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content" className="min-h-screen bg-background">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Link
            href="/ielts"
            className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t('ielts.listening.back_to_ielts')}
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
              <Headphones className="h-6 w-6 text-sky-500" />
            </div>
            <div>
              <h1 className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
                {t('ielts.listening.title')}
              </h1>
              <p className="text-sm text-muted-foreground">{t('ielts.listening.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {phase === 'intro' && <TestPicker onPick={startTest} />}

        {phase === 'test' && test && (
          <TestPanel
            test={test}
            flat={flat}
            total={total}
            answeredCount={answeredCount}
            mcqAnswers={mcqAnswers}
            gapAnswers={gapAnswers}
            onPickMcq={(id, idx) => setMcqAnswers((prev) => ({ ...prev, [id]: idx }))}
            onTypeGap={(id, value) => setGapAnswers((prev) => ({ ...prev, [id]: value }))}
            onSubmit={handleSubmit}
          />
        )}

        {phase === 'results' && test && (
          <ResultsPanel
            test={test}
            flat={flat}
            total={total}
            correct={correctCount}
            band={band}
            savedId={savedId}
            mcqAnswers={mcqAnswers}
            gapAnswers={gapAnswers}
            revealed={revealed}
            onToggleReveal={(sectionId) =>
              setRevealed((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }))
            }
            onRetake={() => startTest(test.id)}
            onChooseAnother={chooseAnother}
          />
        )}
      </div>
    </main>
  )
}

// ─── Intro ──────────────────────────────────────────────────────────────────

function TestPicker({ onPick }: { onPick: (testId: string) => void }) {
  const t = useT()
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="font-heading text-heading-md text-foreground">
          {t('ielts.listening.picker.title')}
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground">
          {t('ielts.listening.picker.subtitle')}
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {LISTENING_TESTS.map((lt) => {
            const qCount = lt.sections.reduce((n, s) => n + s.questions.length, 0)
            return (
              <button
                key={lt.id}
                type="button"
                onClick={() => onPick(lt.id)}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 text-left transition-all hover:border-sky-500/40 hover:shadow-card-hover"
              >
                <div className="flex items-center gap-2">
                  <Headphones className="size-4 shrink-0 text-sky-500" />
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                    {lt.title}
                  </h3>
                </div>
                <span className="mt-2 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-muted-foreground">
                  <ListChecks className="size-3" />
                  {qCount} {t('ielts.listening.intro.stat.questions')} · {lt.sections.length}{' '}
                  {t('ielts.listening.intro.stat.sections')} · ~{lt.estimatedMinutes}{' '}
                  {t('ielts.listening.intro.stat.minutes_unit')}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 rounded-xl border border-sky-500/25 bg-sky-500/5 p-4">
          <p className="text-sm font-semibold text-foreground">
            {t('ielts.listening.intro.audio_heading')}
          </p>
          <p className="mt-1 text-body-sm text-muted-foreground">
            {t('ielts.listening.intro.audio_body')}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button variant="outline" size="sm" render={<Link href="/ielts/plan" />}>
          <ChevronRight className="size-3.5" />
          {t('ielts.listening.intro.study_plan')}
        </Button>
        <Button variant="outline" size="sm" render={<Link href="/ielts/progress" />}>
          <ChevronRight className="size-3.5" />
          {t('ielts.listening.intro.progress_dashboard')}
        </Button>
      </div>
    </div>
  )
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/50 p-4">
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
        {icon}
        {label}
      </div>
      <p className="mt-1 font-heading text-lg font-semibold text-foreground tabular-nums">
        {value}
      </p>
    </div>
  )
}

// ─── Test ─────────────────────────────────────────────────────────────────--

function TestPanel({
  test,
  flat,
  total,
  answeredCount,
  mcqAnswers,
  gapAnswers,
  onPickMcq,
  onTypeGap,
  onSubmit,
}: {
  test: ListeningTest
  flat: FlatQuestion[]
  total: number
  answeredCount: number
  mcqAnswers: Record<string, number>
  gapAnswers: Record<string, string>
  onPickMcq: (id: string, idx: number) => void
  onTypeGap: (id: string, value: string) => void
  onSubmit: () => void
}) {
  const t = useT()
  const progress = total > 0 ? (answeredCount / total) * 100 : 0

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Sticky-ish progress header */}
      <div className="rounded-2xl border border-border/60 bg-card p-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-foreground">
            {t('ielts.listening.test.your_answers')}
          </span>
          <Badge variant="secondary" className="tabular-nums">
            {answeredCount} / {total} {t('ielts.listening.test.answered_suffix')}
          </Badge>
        </div>
        <div
          className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${t('ielts.listening.test.progress_aria_prefix')} ${answeredCount} ${t(
            'ielts.listening.test.progress_aria_of',
          )} ${total} ${t('ielts.listening.test.progress_aria_suffix')}`}
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {test.sections.map((section, sIdx) => {
        const sectionQuestions = flat.filter((f) => f.sectionId === section.id)
        return (
          <section key={section.id} className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-sky-500">
                {t('ielts.listening.test.section_label')} {sIdx + 1}
              </Badge>
              <h2 className="font-heading text-heading-md text-foreground">{section.title}</h2>
            </div>

            {/* The audio stand-in. Transcript stays hidden here. */}
            <AudioPlayer
              transcript={section.transcript}
              sectionTitle={`${t('ielts.listening.test.section_label')} ${sIdx + 1}`}
              resetKey={section.id}
            />

            <div className="space-y-4">
              {sectionQuestions.map((fq) => (
                <QuestionCard
                  key={fq.question.id}
                  fq={fq}
                  mcqValue={mcqAnswers[fq.question.id]}
                  gapValue={gapAnswers[fq.question.id] ?? ''}
                  onPickMcq={onPickMcq}
                  onTypeGap={onTypeGap}
                />
              ))}
            </div>
          </section>
        )
      })}

      {/* Submit */}
      <div className="rounded-2xl border border-border/60 bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-body-sm text-muted-foreground">
            {answeredCount < total ? (
              <>
                {t('ielts.listening.test.submit_hint_partial_prefix')} {answeredCount}{' '}
                {t('ielts.listening.test.submit_hint_partial_of')} {total}.{' '}
                {t('ielts.listening.test.submit_hint_partial_suffix')}
              </>
            ) : (
              <>
                {t('ielts.listening.test.submit_hint_done_prefix')} {total}{' '}
                {t('ielts.listening.test.submit_hint_done_suffix')}
              </>
            )}
          </p>
          <Button variant="default" size="lg" onClick={onSubmit}>
            <Check className="size-4" />
            {t('ielts.listening.test.submit')}
          </Button>
        </div>
      </div>
    </div>
  )
}

function QuestionCard({
  fq,
  mcqValue,
  gapValue,
  onPickMcq,
  onTypeGap,
}: {
  fq: FlatQuestion
  mcqValue: number | undefined
  gapValue: string
  onPickMcq: (id: string, idx: number) => void
  onTypeGap: (id: string, value: string) => void
}) {
  const t = useT()
  const { question, number } = fq

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-muted text-xs font-bold text-muted-foreground tabular-nums">
          {number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="whitespace-pre-line text-sm font-medium leading-snug text-foreground">
            {question.prompt}
          </p>

          {question.type === 'mcq' && (
            <div className="mt-4 grid gap-2.5">
              {question.options.map((option, i) => {
                const selected = mcqValue === i
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => onPickMcq(question.id, i)}
                    aria-pressed={selected}
                    className={`rounded-xl border p-3.5 text-left transition-all duration-200 ${
                      selected
                        ? 'border-primary/50 bg-primary/[0.06]'
                        : 'border-border/60 bg-card hover:border-primary/40 hover:bg-primary/[0.03]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex size-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                          selected
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span className="text-sm text-foreground">{option}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {question.type === 'gap' && (
            <div className="mt-3">
              <input
                type="text"
                value={gapValue}
                onChange={(e) => onTypeGap(question.id, e.target.value)}
                autoComplete="off"
                spellCheck={false}
                placeholder={t('ielts.listening.question.gap_placeholder')}
                aria-label={`${t('ielts.listening.question.gap_aria_prefix')} ${number}`}
                className="w-full max-w-xs rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
              />
            </div>
          )}

          {question.type === 'tfng' && (
            <div className="mt-3 flex flex-wrap gap-2">
              {(['true', 'false', 'not-given'] as const).map((opt, i) => {
                const selected = mcqValue === i
                const label =
                  opt === 'not-given'
                    ? t('ielts.listening.question.tfng.not_given')
                    : opt === 'true'
                      ? t('ielts.listening.question.tfng.true')
                      : t('ielts.listening.question.tfng.false')
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onPickMcq(question.id, i)}
                    aria-pressed={selected}
                    className={`rounded-lg border px-3.5 py-2 text-sm transition-all ${
                      selected
                        ? 'border-primary/50 bg-primary/[0.06] text-foreground'
                        : 'border-border/60 bg-card text-muted-foreground hover:border-primary/40'
                    }`}
                  >
                    {label}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Results ────────────────────────────────────────────────────────────────

function ResultsPanel({
  test,
  flat,
  total,
  correct,
  band,
  savedId,
  mcqAnswers,
  gapAnswers,
  revealed,
  onToggleReveal,
  onRetake,
  onChooseAnother,
}: {
  test: ListeningTest
  flat: FlatQuestion[]
  total: number
  correct: number
  band: Band
  savedId: string | null
  mcqAnswers: Record<string, number>
  gapAnswers: Record<string, string>
  revealed: Record<string, boolean>
  onToggleReveal: (sectionId: string) => void
  onRetake: () => void
  onChooseAnother: () => void
}) {
  const t = useT()
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0

  // Index the section for each question + a quick correctness map for review.
  const sectionById = useMemo(() => {
    const map: Record<string, ListeningSection> = {}
    for (const s of test.sections) map[s.id] = s
    return map
  }, [test])

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Band / score card */}
      <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.05] p-6 text-center sm:p-8">
        <Trophy className="mx-auto mb-3 size-10 text-clay-600" aria-hidden="true" />
        <h2 className="font-heading text-display-sm text-foreground">
          {t('ielts.listening.results.complete')}
        </h2>
        <p className="mt-1 text-body-sm text-muted-foreground">
          {t('ielts.listening.results.predicted_note')}
        </p>

        <div className="mt-6 flex items-center justify-center gap-6">
          <div className="text-center">
            <div
              className={`inline-flex min-w-[3.5rem] items-center justify-center rounded-2xl border px-4 py-2 ${bandBgColour(
                band,
              )}`}
            >
              <span className={`font-heading text-4xl font-bold ${bandColour(band)}`}>
                {bandLabel(band)}
              </span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {t('ielts.listening.results.band')}
            </div>
          </div>
          <div className="h-16 w-px bg-border/60" />
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-foreground tabular-nums">
              {correct}/{total}
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {t('ielts.listening.results.correct')}
            </div>
          </div>
          <div className="h-16 w-px bg-border/60" />
          <div className="text-center">
            <div className="font-heading text-4xl font-bold text-primary tabular-nums">
              {percentage}%
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {t('ielts.listening.results.score')}
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{bandTier(band)}</p>
        {savedId && (
          <p className="mt-1 text-xs text-muted-foreground">
            {t('ielts.listening.results.saved_note')}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Button variant="default" size="lg" onClick={onRetake}>
          <RotateCcw className="size-4" />
          {t('ielts.listening.results.retake')}
        </Button>
        <Button variant="outline" size="lg" onClick={onChooseAnother}>
          <ListChecks className="size-4" />
          {t('ielts.listening.results.choose_test')}
        </Button>
        <Button variant="outline" size="lg" render={<Link href="/ielts/progress" />}>
          <ChevronRight className="size-4" />
          {t('ielts.listening.results.view_progress')}
        </Button>
        <Button variant="outline" size="lg" render={<Link href="/ielts/plan" />}>
          <ChevronRight className="size-4" />
          {t('ielts.listening.results.study_plan')}
        </Button>
      </div>

      {/* Per-section review with transcript reveal + per-question explanations */}
      {test.sections.map((section, sIdx) => {
        const sectionQuestions = flat.filter((f) => f.sectionId === section.id)
        const isRevealed = !!revealed[section.id]
        return (
          <div key={section.id} className="rounded-2xl border border-border/60 bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-sky-500">
                  {t('ielts.listening.test.section_label')} {sIdx + 1}
                </Badge>
                <h3 className="font-heading text-heading-md text-foreground">{section.title}</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onToggleReveal(section.id)}
                aria-expanded={isRevealed}
                className="text-muted-foreground"
              >
                {isRevealed ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                {isRevealed
                  ? t('ielts.listening.review.hide_script')
                  : t('ielts.listening.review.show_script')}
              </Button>
            </div>

            {/* Transcript - only here, in the post-submit review. */}
            {isRevealed && (
              <div className="mt-3 max-h-80 overflow-y-auto rounded-xl border border-border/60 bg-background/60 p-4">
                <p className="whitespace-pre-line text-body-sm leading-relaxed text-foreground">
                  {sectionById[section.id]?.transcript}
                </p>
              </div>
            )}

            <div className="mt-4 space-y-3">
              {sectionQuestions.map((fq) => (
                <ReviewItem
                  key={fq.question.id}
                  fq={fq}
                  mcqValue={mcqAnswers[fq.question.id]}
                  gapValue={gapAnswers[fq.question.id] ?? ''}
                />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ReviewItem({
  fq,
  mcqValue,
  gapValue,
}: {
  fq: FlatQuestion
  mcqValue: number | undefined
  gapValue: string
}) {
  const t = useT()
  const { question, number } = fq
  const noAnswer = t('ielts.listening.review.no_answer')

  // Determine correctness + the human-readable "your answer" / "correct answer".
  let isCorrect = false
  let yourAnswer = noAnswer
  let correctAnswer = ''

  if (question.type === 'mcq') {
    isCorrect = mcqValue === question.correctIndex
    yourAnswer = mcqValue !== undefined ? (question.options[mcqValue] ?? noAnswer) : noAnswer
    correctAnswer = question.options[question.correctIndex]
  } else if (question.type === 'gap') {
    isCorrect = isGapCorrect(gapValue, question.acceptableAnswers)
    yourAnswer = gapValue.trim() !== '' ? gapValue.trim() : noAnswer
    correctAnswer = question.acceptableAnswers[0]
  } else if (question.type === 'tfng') {
    const opts = ['true', 'false', 'not-given'] as const
    const pretty = (v: (typeof opts)[number]) =>
      v === 'not-given'
        ? t('ielts.listening.question.tfng.not_given')
        : v === 'true'
          ? t('ielts.listening.question.tfng.true')
          : t('ielts.listening.question.tfng.false')
    isCorrect = mcqValue !== undefined && opts[mcqValue] === question.answer
    yourAnswer = mcqValue !== undefined ? pretty(opts[mcqValue]) : noAnswer
    correctAnswer = pretty(question.answer)
  }

  return (
    <details
      className={`rounded-xl border p-3 ${
        isCorrect ? 'border-emerald-500/30 bg-emerald-500/5' : 'border-red-500/30 bg-red-500/5'
      }`}
    >
      <summary className="flex cursor-pointer items-start gap-2 text-sm">
        <span
          className={`mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            isCorrect ? 'bg-emerald-500/20 text-emerald-500' : 'bg-red-500/20 text-red-500'
          }`}
        >
          {isCorrect ? <Check className="size-3" /> : <X className="size-3" />}
        </span>
        <span className="flex-1 whitespace-pre-line font-medium text-foreground">
          <span className="mr-1.5 text-muted-foreground tabular-nums">{number}.</span>
          {question.prompt}
        </span>
      </summary>
      <div className="mt-2 space-y-1.5 pl-7">
        {!isCorrect && (
          <p className="text-sm text-red-500">
            {t('ielts.listening.review.your_answer')}:{' '}
            <span className="font-medium">{yourAnswer}</span>
          </p>
        )}
        <p className="text-sm text-emerald-500">
          {question.type === 'gap'
            ? t('ielts.listening.review.accepted_answer')
            : t('ielts.listening.review.correct_answer')}
          : <span className="font-medium">{correctAnswer}</span>
          {question.type === 'gap' && question.acceptableAnswers.length > 1 && (
            <span className="text-muted-foreground">
              {' '}
              {t('ielts.listening.review.also_accepts_variants')}
            </span>
          )}
        </p>
        {question.explanation && (
          <p className="text-body-sm text-muted-foreground">{question.explanation}</p>
        )}
      </div>
    </details>
  )
}

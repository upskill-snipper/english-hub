'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  Target,
  Sparkles,
  CheckCircle2,
  Info,
  RotateCcw,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import {
  objectiveToBand,
  overallBand,
  bandLabel,
  bandTier,
  bandColour,
  bandBgColour,
} from '@/lib/ielts/bands'
import { saveDiagnostic } from '@/lib/ielts/store'
import { SKILL_META, type Band, type IeltsSkill, type ObjectiveQuestion } from '@/lib/ielts/types'

import {
  DIAGNOSTIC_READING,
  DIAGNOSTIC_LISTENING,
  DIAGNOSTIC_ESTIMATED_MINUTES,
  SELF_ASSESS,
  selfAssessBand,
} from './diagnostic-items'

// ─── IELTS Placement Diagnostic ──────────────────────────────────────────────
// A ~10-minute placement test that estimates a band per skill:
//   • Reading + Listening — short auto-marked objective sets (objectiveToBand)
//   • Writing + Speaking — an honest self-estimate (4-point confidence scale)
// Results are saved via saveDiagnostic() and the learner is sent to /ielts/plan.
// Every band shown is framed as an estimate, never an official result.
// ──────────────────────────────────────────────────────────────────────────────

type Phase = 'intro' | 'questions' | 'result'

// Local answer state: objective answers keyed by question id; self-ratings 1–4.
type ObjectiveAnswers = Record<string, string>
type SelfRatings = Partial<Record<'writing' | 'speaking', 1 | 2 | 3 | 4>>

interface ComputedResult {
  estimatedBands: Partial<Record<IeltsSkill, Band>>
  overall: Band | null
  readingCorrect: number
  listeningCorrect: number
}

// ─── Auto-marking helpers ─────────────────────────────────────────────────────

function isCorrect(q: ObjectiveQuestion, raw: string | undefined): boolean {
  if (raw === undefined || raw === '') return false
  if (q.type === 'mcq') return raw === String(q.correctIndex)
  if (q.type === 'tfng') return raw === q.answer
  // gap: case-insensitive, trimmed match against any acceptable answer
  const norm = raw.trim().toLowerCase()
  return q.acceptableAnswers.some((a) => a.trim().toLowerCase() === norm)
}

function countCorrect(questions: ObjectiveQuestion[], answers: ObjectiveAnswers): number {
  return questions.reduce((n, q) => n + (isCorrect(q, answers[q.id]) ? 1 : 0), 0)
}

// "Attempted" for the submit gate: any selection, or non-blank gap text.
function isAnswered(raw: string | undefined): boolean {
  return raw !== undefined && raw.trim() !== ''
}

export default function IeltsDiagnosticPage() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [answers, setAnswers] = useState<ObjectiveAnswers>({})
  const [ratings, setRatings] = useState<SelfRatings>({})
  const [result, setResult] = useState<ComputedResult | null>(null)

  const readingQs = DIAGNOSTIC_READING.questions
  const listeningQs = DIAGNOSTIC_LISTENING.questions

  const totalObjective = readingQs.length + listeningQs.length
  const answeredObjective = useMemo(
    () => [...readingQs, ...listeningQs].filter((q) => isAnswered(answers[q.id])).length,
    [answers, readingQs, listeningQs],
  )
  const allSelfRated = ratings.writing !== undefined && ratings.speaking !== undefined
  const allAnswered = answeredObjective === totalObjective && allSelfRated

  function setObjective(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  function setRating(skill: 'writing' | 'speaking', value: 1 | 2 | 3 | 4) {
    setRatings((prev) => ({ ...prev, [skill]: value }))
  }

  function handleSubmit() {
    const readingCorrect = countCorrect(readingQs, answers)
    const listeningCorrect = countCorrect(listeningQs, answers)

    const readingBand = objectiveToBand('reading', readingCorrect, readingQs.length)
    const listeningBand = objectiveToBand('listening', listeningCorrect, listeningQs.length)
    const writingBand = ratings.writing ? selfAssessBand('writing', ratings.writing) : undefined
    const speakingBand = ratings.speaking ? selfAssessBand('speaking', ratings.speaking) : undefined

    const estimatedBands: Partial<Record<IeltsSkill, Band>> = {
      reading: readingBand,
      listening: listeningBand,
      ...(writingBand !== undefined ? { writing: writingBand } : {}),
      ...(speakingBand !== undefined ? { speaking: speakingBand } : {}),
    }

    const overall = overallBand([
      listeningBand,
      readingBand,
      writingBand ?? null,
      speakingBand ?? null,
    ])

    saveDiagnostic({ date: new Date().toISOString(), estimatedBands, overall })
    setResult({ estimatedBands, overall, readingCorrect, listeningCorrect })
    setPhase('result')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleRetake() {
    setAnswers({})
    setRatings({})
    setResult(null)
    setPhase('intro')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* ── Header ──────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Link
            href="/ielts"
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to IELTS
          </Link>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                IELTS Placement Test
              </h1>
              <p className="mt-1 max-w-2xl text-lg text-muted-foreground">
                A quick check of where you are right now — about {DIAGNOSTIC_ESTIMATED_MINUTES}{' '}
                minutes. We use it to build your personalised study plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {phase === 'intro' && <IntroPanel onStart={() => setPhase('questions')} />}

        {phase === 'questions' && (
          <QuestionsPanel
            readingQs={readingQs}
            listeningQs={listeningQs}
            answers={answers}
            ratings={ratings}
            onObjective={setObjective}
            onRating={setRating}
            onSubmit={handleSubmit}
            allAnswered={allAnswered}
            answeredObjective={answeredObjective}
            totalObjective={totalObjective}
            allSelfRated={allSelfRated}
          />
        )}

        {phase === 'result' && result && <ResultPanel result={result} onRetake={handleRetake} />}
      </div>
    </main>
  )
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroPanel({ onStart }: { onStart: () => void }) {
  const steps: { icon: LucideIcon; title: string; body: string; marked: string }[] = [
    {
      icon: BookOpen,
      title: 'Reading',
      body: 'Read a short passage and answer 4 questions.',
      marked: 'Auto-marked',
    },
    {
      icon: Headphones,
      title: 'Listening',
      body: 'Read a short conversation transcript and answer 4 questions.',
      marked: 'Auto-marked',
    },
    {
      icon: PenLine,
      title: 'Writing',
      body: 'Rate your own confidence — no essay needed yet.',
      marked: 'Self-estimate',
    },
    {
      icon: Mic,
      title: 'Speaking',
      body: 'Rate your own confidence — no recording needed yet.',
      marked: 'Self-estimate',
    },
  ]

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        {steps.map((s) => (
          <div
            key={s.title}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-4 shadow-soft"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <s.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-serif text-lg font-medium">{s.title}</h3>
                <Badge
                  variant={s.marked === 'Auto-marked' ? 'secondary' : 'outline'}
                  className="text-xs"
                >
                  {s.marked}
                </Badge>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <EstimateCaveat />

      <Button size="lg" className="w-full sm:w-auto" onClick={onStart}>
        Start the placement test
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

// ─── Questions ────────────────────────────────────────────────────────────────

function QuestionsPanel({
  readingQs,
  listeningQs,
  answers,
  ratings,
  onObjective,
  onRating,
  onSubmit,
  allAnswered,
  answeredObjective,
  totalObjective,
  allSelfRated,
}: {
  readingQs: ObjectiveQuestion[]
  listeningQs: ObjectiveQuestion[]
  answers: ObjectiveAnswers
  ratings: SelfRatings
  onObjective: (id: string, value: string) => void
  onRating: (skill: 'writing' | 'speaking', value: 1 | 2 | 3 | 4) => void
  onSubmit: () => void
  allAnswered: boolean
  answeredObjective: number
  totalObjective: number
  allSelfRated: boolean
}) {
  return (
    <div className="space-y-12">
      {/* ── Reading ── */}
      <SkillSection
        icon={BookOpen}
        title="Part 1 — Reading"
        subtitle="Read the passage, then answer the four questions below."
      >
        <PassageBlock title={DIAGNOSTIC_READING.title} body={DIAGNOSTIC_READING.body} />
        <div className="mt-6 space-y-6">
          {readingQs.map((q, i) => (
            <ObjectiveQuestionCard
              key={q.id}
              index={i + 1}
              question={q}
              value={answers[q.id]}
              onChange={(v) => onObjective(q.id, v)}
            />
          ))}
        </div>
      </SkillSection>

      {/* ── Listening ── */}
      <SkillSection
        icon={Headphones}
        title="Part 2 — Listening"
        subtitle="In the real test you would hear this once. Read the transcript, then answer."
      >
        <TranscriptBlock
          title={DIAGNOSTIC_LISTENING.title}
          body={DIAGNOSTIC_LISTENING.transcript}
        />
        <div className="mt-6 space-y-6">
          {listeningQs.map((q, i) => (
            <ObjectiveQuestionCard
              key={q.id}
              index={i + 1}
              question={q}
              value={answers[q.id]}
              onChange={(v) => onObjective(q.id, v)}
            />
          ))}
        </div>
      </SkillSection>

      {/* ── Self-assessment ── */}
      <SkillSection
        icon={PenLine}
        title="Part 3 — Writing & Speaking (self-estimate)"
        subtitle="There is no quick way to auto-mark these, so rate yourself honestly. You will refine this with real practice in the Writing and Speaking modules."
      >
        <div className="space-y-8">
          {SELF_ASSESS.map((s) => (
            <SelfAssessBlock
              key={s.skill}
              skill={s.skill}
              question={s.question}
              levels={s.levels}
              value={ratings[s.skill]}
              onChange={(v) => onRating(s.skill, v)}
            />
          ))}
        </div>
      </SkillSection>

      <EstimateCaveat />

      {/* ── Submit ── */}
      <div className="space-y-3">
        {!allAnswered && (
          <p className="text-sm text-muted-foreground">
            {answeredObjective < totalObjective
              ? `Answer all ${totalObjective} questions (${answeredObjective}/${totalObjective} done)`
              : ''}
            {answeredObjective < totalObjective && !allSelfRated ? ' and ' : ''}
            {!allSelfRated ? 'rate both Writing and Speaking' : ''} to see your estimate.
          </p>
        )}
        <Button size="lg" className="w-full sm:w-auto" onClick={onSubmit} disabled={!allAnswered}>
          <Sparkles className="mr-2 h-4 w-4" />
          See my estimated bands
        </Button>
      </div>
    </div>
  )
}

function SkillSection({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: LucideIcon
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-5 w-5 text-primary" />
        <h2 className="font-serif text-2xl font-medium tracking-tight">{title}</h2>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">{subtitle}</p>
      {children}
    </section>
  )
}

function PassageBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6">
      <h3 className="mb-3 font-serif text-lg font-medium">{title}</h3>
      <div className="space-y-3">
        {body.split('\n\n').map((para, i) => (
          <p key={i} className="text-sm leading-relaxed text-foreground/90">
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}

function TranscriptBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-5 shadow-soft sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Headphones className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-serif text-lg font-medium">{title}</h3>
        <Badge variant="outline" className="ml-auto text-xs">
          Transcript
        </Badge>
      </div>
      <div className="space-y-2">
        {body.split('\n\n').map((line, i) => (
          <p key={i} className="text-sm leading-relaxed text-foreground/90">
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}

// ─── Objective question card (mcq / gap / tfng) ────────────────────────────────

const TFNG_OPTIONS: { value: 'true' | 'false' | 'not-given'; label: string }[] = [
  { value: 'true', label: 'True' },
  { value: 'false', label: 'False' },
  { value: 'not-given', label: 'Not Given' },
]

function ObjectiveQuestionCard({
  index,
  question,
  value,
  onChange,
}: {
  index: number
  question: ObjectiveQuestion
  value: string | undefined
  onChange: (value: string) => void
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-soft sm:p-5">
      <div className="flex gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
          {index}
        </span>
        <div className="flex-1">
          <p className="mb-3 text-sm font-medium leading-relaxed">{question.prompt}</p>

          {question.type === 'mcq' && (
            <div className="space-y-2">
              {question.options.map((opt, oi) => (
                <OptionButton
                  key={oi}
                  selected={value === String(oi)}
                  label={opt}
                  onClick={() => onChange(String(oi))}
                />
              ))}
            </div>
          )}

          {question.type === 'tfng' && (
            <div className="flex flex-wrap gap-2">
              {TFNG_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange(opt.value)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                    value === opt.value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border bg-background hover:border-primary/40 hover:bg-accent'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}

          {question.type === 'gap' && (
            <input
              type="text"
              value={value ?? ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder="Type your answer"
              className="w-full max-w-xs rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          )}
        </div>
      </div>
    </div>
  )
}

function OptionButton({
  selected,
  label,
  onClick,
}: {
  selected: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
        selected
          ? 'border-primary bg-primary/10 text-primary'
          : 'border-border bg-background hover:border-primary/40 hover:bg-accent'
      }`}
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
          selected ? 'border-primary' : 'border-muted-foreground/40'
        }`}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-primary" />}
      </span>
      <span className="leading-relaxed">{label}</span>
    </button>
  )
}

// ─── Self-assessment block (4-point scale) ─────────────────────────────────────

function SelfAssessBlock({
  skill,
  question,
  levels,
  value,
  onChange,
}: {
  skill: 'writing' | 'speaking'
  question: string
  levels: { value: 1 | 2 | 3 | 4; label: string; description: string }[]
  value: 1 | 2 | 3 | 4 | undefined
  onChange: (value: 1 | 2 | 3 | 4) => void
}) {
  const meta = SKILL_META[skill]
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-soft sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold ${meta.bgColour} ${meta.colour}`}
        >
          {meta.short}
        </span>
        <h3 className="font-serif text-lg font-medium">{meta.label}</h3>
      </div>
      <p className="mb-4 text-sm font-medium leading-relaxed">{question}</p>
      <div className="space-y-2">
        {levels.map((lvl) => (
          <button
            key={lvl.value}
            type="button"
            onClick={() => onChange(lvl.value)}
            className={`flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left transition-colors ${
              value === lvl.value
                ? 'border-primary bg-primary/10'
                : 'border-border bg-background hover:border-primary/40 hover:bg-accent'
            }`}
          >
            <span
              className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${
                value === lvl.value ? 'border-primary' : 'border-muted-foreground/40'
              }`}
            >
              {value === lvl.value && <span className="h-2 w-2 rounded-full bg-primary" />}
            </span>
            <span>
              <span
                className={`block text-sm font-semibold ${value === lvl.value ? 'text-primary' : ''}`}
              >
                {lvl.label}
              </span>
              <span className="block text-xs leading-relaxed text-muted-foreground">
                {lvl.description}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Result ─────────────────────────────────────────────────────────────────

const RESULT_SKILL_ORDER: IeltsSkill[] = ['reading', 'listening', 'writing', 'speaking']

function ResultPanel({ result, onRetake }: { result: ComputedResult; onRetake: () => void }) {
  const { estimatedBands, overall, readingCorrect, listeningCorrect } = result

  return (
    <div className="space-y-8">
      {/* Overall */}
      <div
        className={`rounded-2xl border p-6 text-center shadow-soft sm:p-8 ${bandBgColour(overall)}`}
      >
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Estimated overall band
        </p>
        <p className={`mt-1 font-serif text-6xl font-semibold ${bandColour(overall)}`}>
          {bandLabel(overall)}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{bandTier(overall)}</p>
      </div>

      {/* Per-skill */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {RESULT_SKILL_ORDER.map((skill) => {
          const band = estimatedBands[skill] ?? null
          const meta = SKILL_META[skill]
          const isSelf = skill === 'writing' || skill === 'speaking'
          return (
            <div key={skill} className={`rounded-xl border p-4 ${bandBgColour(band)}`}>
              <div className="mb-1 flex items-center gap-1.5">
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-bold ${meta.bgColour} ${meta.colour}`}
                >
                  {meta.short}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {meta.label}
                </span>
              </div>
              <p className={`text-2xl font-bold ${bandColour(band)}`}>{bandLabel(band)}</p>
              <p className="mt-0.5 text-[11px] text-muted-foreground">
                {isSelf ? 'Self-estimate' : 'Auto-marked'}
              </p>
            </div>
          )
        })}
      </div>

      {/* Auto-marked detail */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          <p className="text-sm">
            Reading:{' '}
            <span className="font-semibold">
              {readingCorrect}/{DIAGNOSTIC_READING.questions.length}
            </span>{' '}
            correct &nbsp;·&nbsp; Listening:{' '}
            <span className="font-semibold">
              {listeningCorrect}/{DIAGNOSTIC_LISTENING.questions.length}
            </span>{' '}
            correct
          </p>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          This is a short placement set, so your Reading and Listening estimates are scaled from
          just a few questions. A full practice test in each module will give you a far more
          accurate band.
        </p>
      </div>

      <EstimateCaveat />

      {/* CTA */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" render={<Link href="/ielts/plan" />}>
          Build my study plan
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" onClick={onRetake}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Retake the test
        </Button>
      </div>
    </div>
  )
}

// ─── Shared caveat ────────────────────────────────────────────────────────────

function EstimateCaveat() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">
          These are estimates, not official results.
        </span>{' '}
        This placement test gives an indicative starting point. Writing and Speaking bands are
        self-estimates — refine them with full practice and AI feedback in the Writing and Speaking
        modules. Official IELTS bands can only come from a real exam.
      </p>
    </div>
  )
}

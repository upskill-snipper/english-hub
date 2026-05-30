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
  Loader2,
  AlertTriangle,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'

import {
  objectiveToBand,
  overallBand,
  bandLabel,
  bandTier,
  bandColour,
  bandBgColour,
} from '@/lib/ielts/bands'
import { genId, saveAttempt, saveDiagnostic } from '@/lib/ielts/store'
import {
  SKILL_META,
  type Band,
  type BandSource,
  type IeltsSkill,
  type ListeningSection,
  type ObjectiveQuestion,
  type ReadingPassage,
} from '@/lib/ielts/types'
import { useT } from '@/lib/i18n/use-t'
import { useLocale } from '@/lib/i18n/use-locale'
import { IELTS_DIAGNOSTIC_DICTIONARY } from '@/lib/i18n/dictionary-ielts-diagnostic'
import { DictationButton } from '@/components/speech/DictationButton'
import { Recorder } from '../speaking/_components/Recorder'

import {
  DIAGNOSTIC_READING_PASSAGES,
  DIAGNOSTIC_LISTENING_SECTIONS,
  DIAGNOSTIC_READING_QUESTIONS,
  DIAGNOSTIC_LISTENING_QUESTIONS,
  DIAGNOSTIC_ESTIMATED_MINUTES,
  DIAGNOSTIC_WRITING_TASK,
  DIAGNOSTIC_SPEAKING_TASK,
} from './diagnostic-items'

// ─── Local i18n helper ────────────────────────────────────────────────────────
// The ielts.diagnostic.* keys live in their own shard (dictionary-ielts-diagnostic)
// which isn't wired into the global lookup() chain, so resolve them here against
// the live locale and fall back to the shared useT() for cross-module keys
// (ielts.skill.*, ielts.cta.*, …). `vars` interpolates {token} placeholders so
// dynamic copy (counts, bands, skill labels) stays translatable as one phrase.
type Vars = Record<string, string | number>

function interpolate(template: string, vars?: Vars): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (m, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : m,
  )
}

function useDiagT(): (key: string, vars?: Vars) => string {
  const tBase = useT()
  const locale = useLocale()
  return (key: string, vars?: Vars) => {
    const entry = IELTS_DIAGNOSTIC_DICTIONARY[key]
    if (entry) {
      const value = locale === 'ar' && entry.ar ? entry.ar : entry.en
      return interpolate(value, vars)
    }
    return interpolate(tBase(key), vars)
  }
}

// ─── IELTS Placement Diagnostic ──────────────────────────────────────────────
// A ~12-minute placement test that estimates a band per skill:
//   • Reading + Listening - short auto-marked objective sets (objectiveToBand)
//   • Writing + Speaking  - ONE short productive task each, AI-ASSESSED via the
//     free, rate-limited /api/ielts/diagnostic-assess endpoint (band + one-line
//     justification). If a learner skips a productive task we fall back to a
//     conservative self-estimate band so the four-skill overall still works.
// Results are saved via saveDiagnostic() (which write-throughs to the server) and
// the learner is sent to /ielts/plan. Every band shown is framed as an estimate.
// ──────────────────────────────────────────────────────────────────────────────

type Phase = 'intro' | 'questions' | 'result'

// Local answer state: objective answers keyed by question id.
type ObjectiveAnswers = Record<string, string>

// AI-assessed productive result for Writing/Speaking within the diagnostic.
interface AssessState {
  status: 'idle' | 'assessing' | 'done' | 'skipped' | 'error'
  band?: Band
  justification?: string
  error?: string
}

// Band used as a graceful fallback when a productive task is skipped. Deliberately
// conservative (mid-scale) so a skip never inflates the overall band.
const SKIP_FALLBACK_BAND: Band = 5

interface ComputedResult {
  estimatedBands: Partial<Record<IeltsSkill, Band>>
  sources: Partial<Record<IeltsSkill, BandSource>>
  overall: Band | null
  readingCorrect: number
  listeningCorrect: number
  writingJustification?: string
  speakingJustification?: string
}

// ─── Auto-marking helpers ─────────────────────────────────────────────────────

function isCorrect(q: ObjectiveQuestion, raw: string | undefined): boolean {
  if (raw === undefined || raw === '') return false
  if (q.type === 'mcq') return raw === String(q.correctIndex)
  if (q.type === 'tfng') return raw === q.answer
  // The placement diagnostic never uses `matching` questions; this guard keeps
  // the function type-safe against the shared ObjectiveQuestion union.
  if (q.type === 'matching') return false
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

function countWords(text: string): number {
  const t = text.trim()
  return t ? t.split(/\s+/).length : 0
}

export default function IeltsDiagnosticPage() {
  const t = useDiagT()
  const [phase, setPhase] = useState<Phase>('intro')
  const [answers, setAnswers] = useState<ObjectiveAnswers>({})
  const [result, setResult] = useState<ComputedResult | null>(null)

  // Productive (AI-assessed) task state.
  const [writingText, setWritingText] = useState('')
  const [speakingText, setSpeakingText] = useState('')
  const [writing, setWriting] = useState<AssessState>({ status: 'idle' })
  const [speaking, setSpeaking] = useState<AssessState>({ status: 'idle' })

  const readingQs = DIAGNOSTIC_READING_QUESTIONS
  const listeningQs = DIAGNOSTIC_LISTENING_QUESTIONS

  const totalObjective = readingQs.length + listeningQs.length
  const answeredObjective = useMemo(
    () => [...readingQs, ...listeningQs].filter((q) => isAnswered(answers[q.id])).length,
    [answers, readingQs, listeningQs],
  )

  // A productive task is "resolved" once it has been assessed OR explicitly skipped.
  const writingResolved = writing.status === 'done' || writing.status === 'skipped'
  const speakingResolved = speaking.status === 'done' || speaking.status === 'skipped'
  const allAnswered = answeredObjective === totalObjective && writingResolved && speakingResolved

  function setObjective(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  // ── AI assessment for a productive skill ────────────────────────────────────
  async function assess(skill: 'writing' | 'speaking') {
    const isWriting = skill === 'writing'
    const text = (isWriting ? writingText : speakingText).trim()
    const promptText = isWriting ? DIAGNOSTIC_WRITING_TASK.prompt : DIAGNOSTIC_SPEAKING_TASK.prompt
    const setState = isWriting ? setWriting : setSpeaking

    setState({ status: 'assessing' })
    try {
      const res = await fetch('/api/ielts/diagnostic-assess', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skill, promptText, response: text }),
      })
      const data: unknown = await res.json().catch(() => null)

      if (!res.ok) {
        const message =
          data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
            ? data.error
            : t('ielts.diagnostic.assess.error')
        setState({ status: 'error', error: message })
        return
      }

      if (
        !data ||
        typeof data !== 'object' ||
        typeof (data as { band?: unknown }).band !== 'number'
      ) {
        setState({ status: 'error', error: t('ielts.diagnostic.assess.error') })
        return
      }

      const d = data as { band: Band; justification?: string }
      setState({ status: 'done', band: d.band, justification: d.justification })
    } catch {
      setState({ status: 'error', error: t('ielts.diagnostic.assess.error') })
    }
  }

  function skip(skill: 'writing' | 'speaking') {
    ;(skill === 'writing' ? setWriting : setSpeaking)({ status: 'skipped' })
  }

  function handleSubmit() {
    const readingCorrect = countCorrect(readingQs, answers)
    const listeningCorrect = countCorrect(listeningQs, answers)

    const readingBand = objectiveToBand('reading', readingCorrect, readingQs.length)
    const listeningBand = objectiveToBand('listening', listeningCorrect, listeningQs.length)

    // Writing/Speaking: prefer the AI-assessed band; fall back to a conservative
    // estimate band when skipped, recording provenance in `sources`.
    const writingAssessed = writing.status === 'done' && writing.band !== undefined
    const speakingAssessed = speaking.status === 'done' && speaking.band !== undefined
    const writingBand: Band = writingAssessed ? (writing.band as Band) : SKIP_FALLBACK_BAND
    const speakingBand: Band = speakingAssessed ? (speaking.band as Band) : SKIP_FALLBACK_BAND

    const estimatedBands: Partial<Record<IeltsSkill, Band>> = {
      reading: readingBand,
      listening: listeningBand,
      writing: writingBand,
      speaking: speakingBand,
    }

    const sources: Partial<Record<IeltsSkill, BandSource>> = {
      reading: 'assessed',
      listening: 'assessed',
      writing: writingAssessed ? 'assessed' : 'estimated',
      speaking: speakingAssessed ? 'assessed' : 'estimated',
    }

    const overall = overallBand([listeningBand, readingBand, writingBand, speakingBand])

    const now = new Date().toISOString()
    saveDiagnostic({
      date: now,
      estimatedBands,
      overall,
      sources,
    })

    // Persist the four-skill diagnostic result as IELTS attempts too, so the
    // band feeds the profile / progress / future Readiness Report and (via the
    // store's fire-and-forget POST) the /api/ielts/attempts server write-through
    // - exactly like a real Listening/Reading set or a Writing/Speaking task.
    // Objective skills are always assessed; productive skills are only persisted
    // when AI-assessed (a skipped estimate is a UI fallback, not a real attempt).
    try {
      saveAttempt({
        id: genId('diag-r'),
        skill: 'reading',
        testId: 'diagnostic',
        rawScore: readingCorrect,
        total: readingQs.length,
        band: readingBand,
        date: now,
      })
      saveAttempt({
        id: genId('diag-l'),
        skill: 'listening',
        testId: 'diagnostic',
        rawScore: listeningCorrect,
        total: listeningQs.length,
        band: listeningBand,
        date: now,
      })
      if (writingAssessed) {
        saveAttempt({
          id: genId('diag-w'),
          skill: 'writing',
          taskType: 'writing-task-2',
          promptId: DIAGNOSTIC_WRITING_TASK.id,
          responseText: writingText.trim(),
          band: writingBand,
          criteria: [],
          date: now,
        })
      }
      if (speakingAssessed) {
        saveAttempt({
          id: genId('diag-s'),
          skill: 'speaking',
          taskType: 'speaking-part-1',
          promptId: DIAGNOSTIC_SPEAKING_TASK.id,
          responseText: speakingText.trim(),
          band: speakingBand,
          criteria: [],
          date: now,
        })
      }
    } catch {
      // Persistence is best-effort; never block the result on it.
    }
    setResult({
      estimatedBands,
      sources,
      overall,
      readingCorrect,
      listeningCorrect,
      writingJustification: writingAssessed ? writing.justification : undefined,
      speakingJustification: speakingAssessed ? speaking.justification : undefined,
    })
    setPhase('result')
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleRetake() {
    setAnswers({})
    setWritingText('')
    setSpeakingText('')
    setWriting({ status: 'idle' })
    setSpeaking({ status: 'idle' })
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
            {t('ielts.diagnostic.back')}
          </Link>
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                {t('ielts.diagnostic.title')}
              </h1>
              <p className="mt-1 max-w-2xl text-lg text-muted-foreground">
                {t('ielts.diagnostic.subtitle', { minutes: DIAGNOSTIC_ESTIMATED_MINUTES })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {phase === 'intro' && <IntroPanel t={t} onStart={() => setPhase('questions')} />}

        {phase === 'questions' && (
          <QuestionsPanel
            t={t}
            readingPassages={DIAGNOSTIC_READING_PASSAGES}
            listeningSections={DIAGNOSTIC_LISTENING_SECTIONS}
            answers={answers}
            onObjective={setObjective}
            onSubmit={handleSubmit}
            allAnswered={allAnswered}
            answeredObjective={answeredObjective}
            totalObjective={totalObjective}
            writingText={writingText}
            speakingText={speakingText}
            onWritingText={setWritingText}
            onSpeakingText={setSpeakingText}
            writing={writing}
            speaking={speaking}
            onAssess={assess}
            onSkip={skip}
          />
        )}

        {phase === 'result' && result && (
          <ResultPanel t={t} result={result} onRetake={handleRetake} />
        )}
      </div>
    </main>
  )
}

// ─── Intro ────────────────────────────────────────────────────────────────────

// Shared signature for the local diagnostic translation helper (useDiagT).
type TFn = (key: string, vars?: Vars) => string

function IntroPanel({ t, onStart }: { t: TFn; onStart: () => void }) {
  // Skill titles stay Latin (skill names used as labels); body + marking tag
  // are translated. `marking` flags which Badge variant + tag to use.
  const steps: {
    icon: LucideIcon
    title: string
    bodyKey: string
    marking: 'auto' | 'ai'
  }[] = [
    {
      icon: BookOpen,
      title: 'Reading',
      bodyKey: 'ielts.diagnostic.intro.reading.body',
      marking: 'auto',
    },
    {
      icon: Headphones,
      title: 'Listening',
      bodyKey: 'ielts.diagnostic.intro.listening.body',
      marking: 'auto',
    },
    {
      icon: PenLine,
      title: 'Writing',
      bodyKey: 'ielts.diagnostic.intro.writing.body',
      marking: 'ai',
    },
    {
      icon: Mic,
      title: 'Speaking',
      bodyKey: 'ielts.diagnostic.intro.speaking.body',
      marking: 'ai',
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
                <Badge variant={s.marking === 'auto' ? 'secondary' : 'outline'} className="text-xs">
                  {t(
                    s.marking === 'auto'
                      ? 'ielts.diagnostic.tag.auto_marked'
                      : 'ielts.diagnostic.tag.ai_assessed',
                  )}
                </Badge>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">{t(s.bodyKey)}</p>
            </div>
          </div>
        ))}
      </div>

      <EstimateCaveat t={t} />

      <Button size="lg" className="w-full sm:w-auto" onClick={onStart}>
        {t('ielts.diagnostic.intro.start')}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

// ─── Questions ────────────────────────────────────────────────────────────────

function QuestionsPanel({
  t,
  readingPassages,
  listeningSections,
  answers,
  onObjective,
  onSubmit,
  allAnswered,
  answeredObjective,
  totalObjective,
  writingText,
  speakingText,
  onWritingText,
  onSpeakingText,
  writing,
  speaking,
  onAssess,
  onSkip,
}: {
  t: TFn
  readingPassages: ReadingPassage[]
  listeningSections: ListeningSection[]
  answers: ObjectiveAnswers
  onObjective: (id: string, value: string) => void
  onSubmit: () => void
  allAnswered: boolean
  answeredObjective: number
  totalObjective: number
  writingText: string
  speakingText: string
  onWritingText: (v: string) => void
  onSpeakingText: (v: string) => void
  writing: AssessState
  speaking: AssessState
  onAssess: (skill: 'writing' | 'speaking') => void
  onSkip: (skill: 'writing' | 'speaking') => void
}) {
  const objectiveIncomplete = answeredObjective < totalObjective

  // Continuous question numbering within each skill (reading 1..R, listening 1..L),
  // computed from the per-passage/section question counts so numbers run on across
  // the several graded passages/sections that now make up the placement test.
  const readingBlocks: { passage: ReadingPassage; start: number }[] = []
  let rAcc = 0
  for (const p of readingPassages) {
    readingBlocks.push({ passage: p, start: rAcc })
    rAcc += p.questions.length
  }
  const listeningBlocks: { section: ListeningSection; start: number }[] = []
  let lAcc = 0
  for (const s of listeningSections) {
    listeningBlocks.push({ section: s, start: lAcc })
    lAcc += s.questions.length
  }

  return (
    <div className="space-y-12">
      {/* ── Reading (several graded passages) ── */}
      <SkillSection
        icon={BookOpen}
        title={t('ielts.diagnostic.section.reading.title')}
        subtitle={t('ielts.diagnostic.section.reading.subtitle')}
      >
        <div className="space-y-8">
          {readingBlocks.map(({ passage, start }) => (
            <div key={passage.id}>
              <PassageBlock title={passage.title} body={passage.body} />
              <div className="mt-6 space-y-6">
                {passage.questions.map((q, i) => (
                  <ObjectiveQuestionCard
                    key={q.id}
                    t={t}
                    index={start + i + 1}
                    question={q}
                    value={answers[q.id]}
                    onChange={(v) => onObjective(q.id, v)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SkillSection>

      {/* ── Listening (several graded sections) ── */}
      <SkillSection
        icon={Headphones}
        title={t('ielts.diagnostic.section.listening.title')}
        subtitle={t('ielts.diagnostic.section.listening.subtitle')}
      >
        <div className="space-y-8">
          {listeningBlocks.map(({ section, start }) => (
            <div key={section.id}>
              <TranscriptBlock t={t} title={section.title} body={section.transcript} />
              <div className="mt-6 space-y-6">
                {section.questions.map((q, i) => (
                  <ObjectiveQuestionCard
                    key={q.id}
                    t={t}
                    index={start + i + 1}
                    question={q}
                    value={answers[q.id]}
                    onChange={(v) => onObjective(q.id, v)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SkillSection>

      {/* ── Writing (AI-assessed) ── */}
      <SkillSection
        icon={PenLine}
        title={t('ielts.diagnostic.section.writing.title')}
        subtitle={t('ielts.diagnostic.section.writing.subtitle', {
          words: DIAGNOSTIC_WRITING_TASK.targetWords,
        })}
      >
        <WritingTaskBlock
          t={t}
          value={writingText}
          onChange={onWritingText}
          state={writing}
          onAssess={() => onAssess('writing')}
          onSkip={() => onSkip('writing')}
        />
      </SkillSection>

      {/* ── Speaking (AI-assessed from transcript) ── */}
      <SkillSection
        icon={Mic}
        title={t('ielts.diagnostic.section.speaking.title')}
        subtitle={t('ielts.diagnostic.section.speaking.subtitle')}
      >
        <SpeakingTaskBlock
          t={t}
          value={speakingText}
          onChange={onSpeakingText}
          state={speaking}
          onAssess={() => onAssess('speaking')}
          onSkip={() => onSkip('speaking')}
        />
      </SkillSection>

      <EstimateCaveat t={t} />

      {/* ── Submit ── */}
      <div className="space-y-3">
        {!allAnswered && (
          <p className="text-sm text-muted-foreground">
            {objectiveIncomplete
              ? t('ielts.diagnostic.gate.answer_count', {
                  total: totalObjective,
                  answered: answeredObjective,
                }) + t('ielts.diagnostic.gate.to_see')
              : t('ielts.diagnostic.gate.rate_both') + t('ielts.diagnostic.gate.to_see')}
          </p>
        )}
        <Button size="lg" className="w-full sm:w-auto" onClick={onSubmit} disabled={!allAnswered}>
          <Sparkles className="mr-2 h-4 w-4" />
          {t('ielts.diagnostic.cta.see_bands')}
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

function TranscriptBlock({ t, title, body }: { t: TFn; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-5 shadow-soft sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Headphones className="h-4 w-4 text-muted-foreground" />
        <h3 className="font-serif text-lg font-medium">{title}</h3>
        <Badge variant="outline" className="ml-auto text-xs">
          {t('ielts.diagnostic.transcript')}
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

const TFNG_OPTIONS: { value: 'true' | 'false' | 'not-given'; labelKey: string }[] = [
  { value: 'true', labelKey: 'ielts.diagnostic.tfng.true' },
  { value: 'false', labelKey: 'ielts.diagnostic.tfng.false' },
  { value: 'not-given', labelKey: 'ielts.diagnostic.tfng.not_given' },
]

function ObjectiveQuestionCard({
  t,
  index,
  question,
  value,
  onChange,
}: {
  t: TFn
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
                  {t(opt.labelKey)}
                </button>
              ))}
            </div>
          )}

          {question.type === 'gap' && (
            <input
              type="text"
              value={value ?? ''}
              onChange={(e) => onChange(e.target.value)}
              placeholder={t('ielts.diagnostic.gap.placeholder')}
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

// ─── Writing task (AI-assessed) ────────────────────────────────────────────────

function WritingTaskBlock({
  t,
  value,
  onChange,
  state,
  onAssess,
  onSkip,
}: {
  t: TFn
  value: string
  onChange: (v: string) => void
  state: AssessState
  onAssess: () => void
  onSkip: () => void
}) {
  const meta = SKILL_META.writing
  const words = countWords(value)
  const assessing = state.status === 'assessing'
  const done = state.status === 'done'
  const skipped = state.status === 'skipped'
  // Mirror the endpoint's minimum so the button only enables on a real attempt.
  const canSubmit = value.trim().length >= 50 && !assessing && !done

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

      <p className="mb-4 text-sm font-medium leading-relaxed">{DIAGNOSTIC_WRITING_TASK.prompt}</p>

      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('ielts.diagnostic.writing.placeholder')}
        rows={10}
        disabled={done}
        className="min-h-[180px] resize-y"
      />
      <div className="mt-1 text-right text-xs tabular-nums text-muted-foreground">
        {t('ielts.diagnostic.writing.words', { count: words })}
      </div>

      <AssessControls
        t={t}
        state={state}
        assessLabelKey="ielts.diagnostic.writing.assess"
        assessingLabelKey="ielts.diagnostic.writing.assessing"
        assessedLabelKey="ielts.diagnostic.writing.assessed"
        skipLabelKey="ielts.diagnostic.writing.skip"
        canSubmit={canSubmit}
        onAssess={onAssess}
        onSkip={onSkip}
      />

      {done && <AssessedNote t={t} state={state} />}
      {skipped && (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {t('ielts.diagnostic.assess.skipped_note')}
        </p>
      )}
    </div>
  )
}

// ─── Speaking task (AI-assessed from transcript) ───────────────────────────────

function SpeakingTaskBlock({
  t,
  value,
  onChange,
  state,
  onAssess,
  onSkip,
}: {
  t: TFn
  value: string
  onChange: (v: string) => void
  state: AssessState
  onAssess: () => void
  onSkip: () => void
}) {
  const meta = SKILL_META.speaking
  const assessing = state.status === 'assessing'
  const done = state.status === 'done'
  const skipped = state.status === 'skipped'
  const canSubmit = value.trim().length >= 20 && !assessing && !done

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

      <p className="mb-4 text-sm font-medium leading-relaxed">{DIAGNOSTIC_SPEAKING_TASK.prompt}</p>

      {/* Reuse the speaking page's MediaRecorder (self-review; audio never uploaded). */}
      <div className="mb-4 space-y-1.5">
        <p className="text-xs font-medium text-muted-foreground">
          {t('ielts.diagnostic.speaking.recorder_label')}
        </p>
        <Recorder />
      </div>

      <div className="mb-1.5 flex items-center justify-between gap-2">
        <p className="text-xs font-medium text-muted-foreground">
          {t('ielts.diagnostic.speaking.transcript_label')}
        </p>
        {!done && (
          <DictationButton
            label={t('ielts.diagnostic.speaking.dictate')}
            onText={(chunk) => onChange((value ? value.trimEnd() + ' ' : '') + chunk)}
          />
        )}
      </div>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('ielts.diagnostic.speaking.placeholder')}
        rows={6}
        disabled={done}
        className="min-h-[120px] resize-y"
      />

      <AssessControls
        t={t}
        state={state}
        assessLabelKey="ielts.diagnostic.speaking.assess"
        assessingLabelKey="ielts.diagnostic.speaking.assessing"
        assessedLabelKey="ielts.diagnostic.speaking.assessed"
        skipLabelKey="ielts.diagnostic.speaking.skip"
        canSubmit={canSubmit}
        onAssess={onAssess}
        onSkip={onSkip}
      />

      {done && <AssessedNote t={t} state={state} />}
      {skipped && (
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          {t('ielts.diagnostic.assess.skipped_note')}
        </p>
      )}
    </div>
  )
}

// ─── Shared productive-task controls + assessed note ───────────────────────────

function AssessControls({
  t,
  state,
  assessLabelKey,
  assessingLabelKey,
  assessedLabelKey,
  skipLabelKey,
  canSubmit,
  onAssess,
  onSkip,
}: {
  t: TFn
  state: AssessState
  assessLabelKey: string
  assessingLabelKey: string
  assessedLabelKey: string
  skipLabelKey: string
  canSubmit: boolean
  onAssess: () => void
  onSkip: () => void
}) {
  const assessing = state.status === 'assessing'
  const done = state.status === 'done'

  if (done) {
    return (
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 p-3 text-sm">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
        <span className="font-medium">
          {t(assessedLabelKey, { band: bandLabel(state.band ?? null) })}
        </span>
      </div>
    )
  }

  return (
    <div className="mt-4 space-y-3">
      {state.status === 'error' && state.error && (
        <div className="flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.error}</span>
        </div>
      )}
      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={onAssess} disabled={!canSubmit}>
          {assessing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {t(assessingLabelKey)}
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              {t(assessLabelKey)}
            </>
          )}
        </Button>
        <Button
          variant="ghost"
          className="text-muted-foreground"
          onClick={onSkip}
          disabled={assessing}
        >
          {t(skipLabelKey)}
        </Button>
      </div>
    </div>
  )
}

function AssessedNote({ t: _t, state }: { t: TFn; state: AssessState }) {
  if (!state.justification) return null
  return <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{state.justification}</p>
}

// ─── Result ─────────────────────────────────────────────────────────────────

const RESULT_SKILL_ORDER: IeltsSkill[] = ['reading', 'listening', 'writing', 'speaking']

function ResultPanel({
  t,
  result,
  onRetake,
}: {
  t: TFn
  result: ComputedResult
  onRetake: () => void
}) {
  const { estimatedBands, sources, overall, readingCorrect, listeningCorrect } = result

  return (
    <div className="space-y-8">
      {/* Overall */}
      <div
        className={`rounded-2xl border p-6 text-center shadow-soft sm:p-8 ${bandBgColour(overall)}`}
      >
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          {t('ielts.diagnostic.result.overall_label')}
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
          const isProductive = skill === 'writing' || skill === 'speaking'
          const source = sources[skill]
          // Tag: Reading/Listening auto-marked; Writing/Speaking AI-assessed or
          // (if skipped) labelled as a skipped/self-estimate fallback.
          const tagKey = !isProductive
            ? 'ielts.diagnostic.tag.auto_marked'
            : source === 'assessed'
              ? 'ielts.diagnostic.tag.ai_assessed'
              : 'ielts.diagnostic.tag.skipped'
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
              <p className="mt-0.5 text-[11px] text-muted-foreground">{t(tagKey)}</p>
            </div>
          )
        })}
      </div>

      {/* AI justifications for the productive skills (when assessed) */}
      {(result.writingJustification || result.speakingJustification) && (
        <div className="space-y-2">
          {result.writingJustification && (
            <div className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 shadow-soft">
              <PenLine className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />
              <p className="text-sm text-muted-foreground">{result.writingJustification}</p>
            </div>
          )}
          {result.speakingJustification && (
            <div className="flex items-start gap-2 rounded-xl border border-border bg-card p-4 shadow-soft">
              <Mic className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
              <p className="text-sm text-muted-foreground">{result.speakingJustification}</p>
            </div>
          )}
        </div>
      )}

      {/* Auto-marked detail */}
      <div className="rounded-xl border border-border bg-card p-5 shadow-soft">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          <p className="text-sm">
            {t('ielts.diagnostic.result.tally', {
              readingCorrect,
              readingTotal: DIAGNOSTIC_READING_QUESTIONS.length,
              listeningCorrect,
              listeningTotal: DIAGNOSTIC_LISTENING_QUESTIONS.length,
            })}
          </p>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {t('ielts.diagnostic.result.tally_note')}
        </p>
      </div>

      <EstimateCaveat t={t} />

      {/* CTA */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button size="lg" render={<Link href="/ielts/plan" />}>
          {t('ielts.diagnostic.cta.build_plan')}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" onClick={onRetake}>
          <RotateCcw className="mr-2 h-4 w-4" />
          {t('ielts.diagnostic.cta.retake')}
        </Button>
      </div>
    </div>
  )
}

// ─── Shared caveat ────────────────────────────────────────────────────────────

function EstimateCaveat({ t }: { t: TFn }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-500" />
      <p className="text-xs leading-relaxed text-muted-foreground">
        <span className="font-semibold text-foreground">{t('ielts.diagnostic.caveat.strong')}</span>{' '}
        {t('ielts.diagnostic.caveat.body')}
      </p>
    </div>
  )
}

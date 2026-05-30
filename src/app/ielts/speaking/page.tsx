'use client'

// ─── IELTS Speaking Practice (async, Wave 1) ────────────────────────────────
// Pick a cue (Part 1 / 2 / 3). For Part 2 we run the standard 60s preparation
// countdown then an up-to-120s "long turn" countdown. The learner records audio
// for their OWN self-review (never uploaded - see Recorder) and types what they
// said into a transcript box. Submitting the transcript POSTs to
// /api/ielts/speaking-feedback and renders TaskFeedback (overall band + the four
// criteria + strengths / improvements / model pointers). The attempt is saved
// to localStorage via the shared IELTS store.
//
// Wave 1 is transcript-based: there is NO live auto-transcription and NO true
// acoustic pronunciation scoring yet (Phase 2). Pronunciation is a best-effort
// proxy and fluency is inferred from the transcript - surfaced to the user.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Mic,
  Loader2,
  Send,
  RefreshCw,
  Award,
  CheckCircle,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Timer,
  MessageSquareText,
} from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
import { useT } from '@/lib/i18n/use-t'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'

import { DictationButton } from '@/components/speech/DictationButton'
import { Recorder } from './_components/Recorder'
import { SPEAKING_CUES } from './speaking-cues'
import type {
  Band,
  CriterionFeedback,
  IeltsTaskType,
  SpeakingCue,
  TaskFeedback,
} from '@/lib/ielts/types'
import { bandBgColour, bandColour, bandLabel } from '@/lib/ielts/bands'
import { genId, saveAttempt } from '@/lib/ielts/store'

// ─── Helpers ─────────────────────────────────────────────────────────────────

// Dictionary key for each part's badge label ("Part N" stays Latin; the label
// after the dot is translated). Resolved at render time via t().
const PART_BADGE_KEY: Record<SpeakingCue['part'], string> = {
  'speaking-part-1': 'ielts.speaking.part1.badge',
  'speaking-part-2': 'ielts.speaking.part2.badge',
  'speaking-part-3': 'ielts.speaking.part3.badge',
}

function formatClock(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function countWords(text: string): number {
  const t = text.trim()
  return t ? t.split(/\s+/).length : 0
}

type Phase = 'idle' | 'prep' | 'speaking' | 'done'

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function IeltsSpeakingPage() {
  const t = useT()
  const { user, isLoading } = useAuthStore()
  const router = useRouter()

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const cue = useMemo(() => SPEAKING_CUES.find((c) => c.id === selectedId) ?? null, [selectedId])

  const [transcript, setTranscript] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<TaskFeedback | null>(null)
  const [disclaimer, setDisclaimer] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  // Part 2 timer state.
  const [phase, setPhase] = useState<Phase>('idle')
  const [secondsLeft, setSecondsLeft] = useState(0)
  const phaseTimerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const isPart2 = cue?.part === 'speaking-part-2'
  const prepSeconds = cue?.prepSeconds ?? 60
  const speakSeconds = cue?.speakSeconds ?? 120

  const clearPhaseTimer = useCallback(() => {
    if (phaseTimerRef.current !== null) {
      clearInterval(phaseTimerRef.current)
      phaseTimerRef.current = null
    }
  }, [])

  // Tidy the countdown on unmount.
  useEffect(() => () => clearPhaseTimer(), [clearPhaseTimer])

  // Auth redirect guard (matches the dashboard AI pages).
  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/login?redirect=' + encodeURIComponent('/ielts/speaking'))
    }
  }, [isLoading, user, router])

  const resetForCue = useCallback(
    (next: SpeakingCue | null) => {
      clearPhaseTimer()
      setPhase('idle')
      setSecondsLeft(0)
      setTranscript('')
      setFeedback(null)
      setDisclaimer(null)
      setError(null)
      setSaved(false)
      setSelectedId(next?.id ?? null)
    },
    [clearPhaseTimer],
  )

  // ── Part 2 countdown engine ──────────────────────────────────────────────
  const runCountdown = useCallback(
    (durationSeconds: number, nextPhase: Phase, onComplete?: () => void) => {
      clearPhaseTimer()
      setSecondsLeft(durationSeconds)
      phaseTimerRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearPhaseTimer()
            setPhase(nextPhase)
            onComplete?.()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    },
    [clearPhaseTimer],
  )

  const startPrep = useCallback(() => {
    setPhase('prep')
    runCountdown(prepSeconds, 'speaking', () => {
      // Auto-roll into the speaking phase when prep ends.
      runCountdown(speakSeconds, 'done')
    })
  }, [prepSeconds, speakSeconds, runCountdown])

  const startSpeakingNow = useCallback(() => {
    // Skip the rest of prep and begin the long turn immediately.
    setPhase('speaking')
    runCountdown(speakSeconds, 'done')
  }, [speakSeconds, runCountdown])

  const stopTimers = useCallback(() => {
    clearPhaseTimer()
    setPhase('done')
    setSecondsLeft(0)
  }, [clearPhaseTimer])

  // ── Submit transcript for feedback ───────────────────────────────────────
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!cue) return
      if (!user) {
        setError(t('ielts.speaking.error.sign_in'))
        return
      }
      const promptText = `${cue.title}\n\n${cue.prompts.join('\n')}`
      if (transcript.trim().length < 20) {
        setError(t('ielts.speaking.error.too_short'))
        return
      }

      setSubmitting(true)
      setError(null)
      setFeedback(null)
      setSaved(false)

      try {
        const res = await fetch('/api/ielts/speaking-feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            part: cue.part,
            promptText,
            transcript: transcript.trim(),
            promptId: cue.id,
          }),
        })

        const data: unknown = await res.json().catch(() => null)

        if (!res.ok) {
          const message =
            data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
              ? data.error
              : t('ielts.speaking.error.bad_request')
          setError(message)
          return
        }

        if (
          !data ||
          typeof data !== 'object' ||
          !('feedback' in data) ||
          typeof (data as { feedback: unknown }).feedback !== 'object'
        ) {
          setError(t('ielts.speaking.error.unexpected'))
          return
        }

        const fb = (data as { feedback: TaskFeedback }).feedback
        const dis =
          'disclaimer' in data && typeof (data as { disclaimer: unknown }).disclaimer === 'string'
            ? (data as { disclaimer: string }).disclaimer
            : null

        setFeedback(fb)
        setDisclaimer(dis)

        // Persist the attempt (localStorage via the shared IELTS store).
        try {
          saveAttempt({
            id: genId('sp'),
            skill: 'speaking',
            taskType: cue.part as IeltsTaskType,
            promptId: cue.id,
            responseText: transcript.trim(),
            band: fb.overallBand,
            criteria: fb.criteria,
            date: new Date().toISOString(),
          })
          setSaved(true)
        } catch {
          // Persistence is best-effort; never block the result on it.
        }
      } catch {
        setError(t('ielts.speaking.error.network'))
      } finally {
        setSubmitting(false)
      }
    },
    [cue, transcript, user, t],
  )

  const handleTryAgain = useCallback(() => {
    setFeedback(null)
    setDisclaimer(null)
    setError(null)
    setSaved(false)
    setTranscript('')
    clearPhaseTimer()
    setPhase('idle')
    setSecondsLeft(0)
  }, [clearPhaseTimer])

  const wordCount = countWords(transcript)

  // ── Auth guard renders ─────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-primary" />
      </div>
    )
  }
  if (!user) {
    return null // redirecting via useEffect
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 pb-16 sm:px-6 lg:px-8">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/ielts" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('ielts.speaking.back')}
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8">
        <Badge variant="secondary" className="mb-3">
          <Mic className="mr-1 size-3" />
          {t('ielts.speaking.hero.eyebrow')}
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground sm:text-display">
          {t('ielts.speaking.hero.title')}
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
          {t('ielts.speaking.hero.subtitle')}
        </p>
        <div className="mt-4 flex items-start gap-2 rounded-lg border border-border/60 bg-background/50 p-3 text-xs text-muted-foreground">
          <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
          <span>
            <span className="font-semibold text-foreground">
              {t('ielts.speaking.hero.notice.lead')}
            </span>{' '}
            {t('ielts.speaking.hero.notice.body')}
          </span>
        </div>
      </section>

      {/* ── Cue picker ────────────────────────────────────────────────── */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-rose-500/10">
              <MessageSquareText className="size-4.5 text-rose-400" />
            </div>
            <h2 className="text-heading-md font-heading text-foreground">
              {t('ielts.speaking.picker.title')}
            </h2>
          </div>
          <Link
            href="/ielts/model-answers"
            className="group inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-rose-500/40 hover:text-foreground"
          >
            <BookOpenCheck className="size-3.5 text-rose-400" />
            See band 6.5 &amp; band 8 model answers
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {SPEAKING_CUES.map((c) => {
            const active = c.id === selectedId
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => resetForCue(active ? null : c)}
                className={cn(
                  'group flex flex-col rounded-xl border p-4 text-left transition-all',
                  active
                    ? 'border-rose-500/50 bg-rose-500/[0.04] shadow-card-hover'
                    : 'border-border/60 bg-card hover:border-rose-500/40 hover:shadow-card-hover',
                )}
              >
                <Badge variant="secondary" className="mb-2 w-fit text-[0.65rem] uppercase">
                  {t(PART_BADGE_KEY[c.part])}
                </Badge>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {c.part === 'speaking-part-2'
                    ? c.prompts[0]
                    : `${c.prompts.length} ${t('ielts.speaking.picker.questions')}`}
                </p>
              </button>
            )
          })}
        </div>
      </section>

      {/* ── Active practice ───────────────────────────────────────────── */}
      {cue && !feedback && (
        <section className="space-y-6">
          <Separator />

          {/* Prompt card */}
          <Card className="border-rose-500/20">
            <CardHeader>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary" className="text-[0.65rem] uppercase">
                  {t(PART_BADGE_KEY[cue.part])}
                </Badge>
                <CardTitle className="text-heading-sm font-heading">{cue.title}</CardTitle>
              </div>
              <CardDescription>
                {isPart2
                  ? t('ielts.speaking.prompt.desc.part2')
                  : t('ielts.speaking.prompt.desc.other')}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isPart2 ? (
                <div className="space-y-2 text-sm text-foreground">
                  <p className="font-medium">{cue.prompts[0]}</p>
                  <ul className="ml-1 space-y-1">
                    {cue.prompts.slice(1).map((p, i) => (
                      <li
                        key={i}
                        className={cn(
                          i === 0 ? 'font-medium text-muted-foreground' : 'text-muted-foreground',
                          i > 0 && 'flex gap-2',
                        )}
                      >
                        {i > 0 && <span className="text-rose-400">•</span>}
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <ol className="space-y-2.5">
                  {cue.prompts.map((p, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-rose-500/10 text-[11px] font-semibold text-rose-400">
                        {i + 1}
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
              )}
            </CardContent>
          </Card>

          {/* Part 2 timers */}
          {isPart2 && (
            <Card
              className={cn(
                phase === 'prep' && 'border-sky-500/30 bg-sky-500/[0.03]',
                phase === 'speaking' && 'border-rose-500/30 bg-rose-500/[0.03]',
              )}
            >
              <CardContent className="py-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        'flex size-11 items-center justify-center rounded-xl',
                        phase === 'speaking' ? 'bg-rose-500/10' : 'bg-sky-500/10',
                      )}
                    >
                      <Timer
                        className={cn(
                          'size-5',
                          phase === 'speaking' ? 'text-rose-400' : 'text-sky-400',
                        )}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {phase === 'prep'
                          ? t('ielts.speaking.timer.heading.prep')
                          : phase === 'speaking'
                            ? t('ielts.speaking.timer.heading.speaking')
                            : phase === 'done'
                              ? t('ielts.speaking.timer.heading.done')
                              : t('ielts.speaking.timer.heading.idle')}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {phase === 'idle' && t('ielts.speaking.timer.help.idle')}
                        {phase === 'prep' && t('ielts.speaking.timer.help.prep')}
                        {phase === 'speaking' && t('ielts.speaking.timer.help.speaking')}
                        {phase === 'done' && t('ielts.speaking.timer.help.done')}
                      </p>
                    </div>
                  </div>
                  {(phase === 'prep' || phase === 'speaking') && (
                    <div
                      className={cn(
                        'text-3xl font-bold tabular-nums',
                        phase === 'speaking' ? 'text-rose-500' : 'text-sky-500',
                      )}
                    >
                      {formatClock(secondsLeft)}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {phase === 'idle' && (
                    <Button type="button" size="sm" onClick={startPrep}>
                      <Timer className="size-4" />
                      {t('ielts.speaking.timer.btn.start_prep')}
                    </Button>
                  )}
                  {phase === 'prep' && (
                    <Button type="button" size="sm" variant="default" onClick={startSpeakingNow}>
                      {t('ielts.speaking.timer.btn.skip')}
                    </Button>
                  )}
                  {(phase === 'prep' || phase === 'speaking') && (
                    <Button type="button" size="sm" variant="outline" onClick={stopTimers}>
                      {t('ielts.speaking.timer.btn.stop')}
                    </Button>
                  )}
                  {phase === 'done' && (
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground"
                      onClick={() => {
                        clearPhaseTimer()
                        setPhase('idle')
                        setSecondsLeft(0)
                      }}
                    >
                      <RefreshCw className="size-3.5" />
                      {t('ielts.speaking.timer.btn.reset')}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recorder (self-review) */}
          <div className="space-y-2">
            <Label>{t('ielts.speaking.recorder.label')}</Label>
            <Recorder maxSeconds={isPart2 ? speakSeconds : undefined} />
          </div>

          {/* Transcript + submit */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Label htmlFor="transcript">{t('ielts.speaking.transcript.label')}</Label>
                  <DictationButton
                    label="Speak to transcribe"
                    onText={(chunk) => setTranscript((v) => (v ? v.trimEnd() + ' ' : '') + chunk)}
                  />
                </div>
                <span
                  className={cn(
                    'text-xs tabular-nums',
                    wordCount < 8 ? 'text-muted-foreground' : 'text-muted-foreground',
                  )}
                >
                  {wordCount}{' '}
                  {wordCount === 1
                    ? t('ielts.speaking.transcript.word')
                    : t('ielts.speaking.transcript.words')}
                </span>
              </div>
              <Textarea
                id="transcript"
                placeholder={t('ielts.speaking.transcript.placeholder')}
                value={transcript}
                onChange={(e) => setTranscript(e.target.value)}
                rows={10}
                className="min-h-[180px] resize-y"
              />
            </div>

            {error && (
              <div className="flex flex-col gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0" />
                  <span>{error}</span>
                </div>
                <Link
                  href="/pricing#ielts"
                  className="self-start font-semibold underline underline-offset-2"
                >
                  View IELTS plans
                </Link>
              </div>
            )}

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-xs text-muted-foreground">
                {t('ielts.speaking.submit.helper')}{' '}
                <span>
                  Tip: you can now tap “Speak to transcribe” to dictate your answer instead of
                  typing it.
                </span>
              </p>
              <Button
                type="submit"
                size="lg"
                disabled={submitting || transcript.trim().length < 20}
              >
                {submitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    {t('ielts.speaking.submit.assessing')}
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    {t('ielts.speaking.submit.btn')}
                  </>
                )}
              </Button>
            </div>
          </form>
        </section>
      )}

      {/* ── Results ───────────────────────────────────────────────────── */}
      {cue && feedback && (
        <SpeakingResults
          cue={cue}
          feedback={feedback}
          disclaimer={disclaimer}
          saved={saved}
          onTryAgain={handleTryAgain}
        />
      )}

      {/* ── Footnote ─────────────────────────────────────────────────── */}
      <p className="text-center text-[11px] text-muted-foreground/60">
        {t('ielts.speaking.footnote')}
      </p>
    </div>
  )
}

// ─── Results component ───────────────────────────────────────────────────────

function SpeakingResults({
  cue,
  feedback,
  disclaimer,
  saved,
  onTryAgain,
}: {
  cue: SpeakingCue
  feedback: TaskFeedback
  disclaimer: string | null
  saved: boolean
  onTryAgain: () => void
}) {
  const t = useT()
  const overall: Band = feedback.overallBand
  return (
    <section className="space-y-6">
      <Separator />

      {/* Transcript-based disclaimer */}
      <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-4 text-sm text-amber-700">
        <p className="font-medium">{t('ielts.speaking.results.disclaimer.title')}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {disclaimer ?? t('ielts.speaking.results.disclaimer.body')}
        </p>
      </div>

      {/* Overall band hero */}
      <Card className={cn('border', bandBgColour(overall))}>
        <CardContent className="py-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <div
              className={cn(
                'flex size-16 items-center justify-center rounded-2xl border',
                bandBgColour(overall),
              )}
            >
              <Award className={cn('size-8', bandColour(overall))} />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs uppercase tracking-wide text-muted-foreground">
                  {t('ielts.speaking.results.overall')}
                </span>
                <Badge variant="outline" className="text-xs uppercase">
                  {t(PART_BADGE_KEY[cue.part])}
                </Badge>
              </div>
              <p className={cn('mt-1 text-4xl font-bold tracking-tight', bandColour(overall))}>
                {bandLabel(overall)}
              </p>
              {saved && (
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-500">
                  <CheckCircle className="size-3.5" />
                  {t('ielts.speaking.results.saved')}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Criteria breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            {t('ielts.speaking.results.criteria.title')}
          </CardTitle>
          <CardDescription>{t('ielts.speaking.results.criteria.desc')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {feedback.criteria.map((c: CriterionFeedback, i: number) => (
            <div key={i} className="rounded-xl border border-border/60 bg-background/40 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold text-foreground">{c.criterion}</span>
                <span
                  className={cn(
                    'rounded-md border px-2 py-0.5 text-sm font-bold tabular-nums',
                    bandBgColour(c.band),
                    bandColour(c.band),
                  )}
                >
                  {bandLabel(c.band)}
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.comment}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Strengths & improvements */}
      <div className="grid gap-4 md:grid-cols-2">
        {feedback.strengths.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-4 text-emerald-400" />
                <CardTitle className="text-sm">
                  {t('ielts.speaking.results.strengths.title')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feedback.strengths.map((s, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {feedback.improvements.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="size-4 text-sky-400" />
                <CardTitle className="text-sm">
                  {t('ielts.speaking.results.improvements.title')}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feedback.improvements.map((imp, i) => (
                  <li key={i} className="flex gap-2 text-sm text-foreground">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{imp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Model pointers */}
      {feedback.modelPointers && feedback.modelPointers.length > 0 && (
        <Card className="border-violet-500/20 bg-violet-500/[0.02]">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lightbulb className="size-4 text-violet-400" />
              <CardTitle className="text-sm">
                {t('ielts.speaking.results.pointers.title')}
              </CardTitle>
            </div>
            <CardDescription>{t('ielts.speaking.results.pointers.desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {feedback.modelPointers.map((p, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted-foreground">{t('ielts.speaking.results.action.helper')}</p>
        <Button size="lg" onClick={onTryAgain}>
          <RefreshCw className="size-4" />
          {t('ielts.speaking.results.action.try_again')}
        </Button>
      </div>
    </section>
  )
}

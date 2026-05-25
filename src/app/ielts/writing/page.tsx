'use client'

// ─── IELTS Academic Writing - AI band feedback ───────────────────────────────
// Pick a Task 1 or Task 2 prompt, write a response (live word count + min-word
// indicator + optional countdown), submit to /api/ielts/writing-feedback, and
// render the returned TaskFeedback (overall band, per-criterion bands +
// comments, strengths, improvements, model pointers). On success the attempt is
// persisted to localStorage via the shared IELTS store.
//
// Paywall / over-limit / opt-out / loading / error states mirror the GCSE essay
// marking flow (src/app/marking/submit/page.tsx) and the essay-feedback route's
// status codes.
// ────────────────────────────────────────────────────────────────────────────

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Lightbulb,
  Lock,
  PenLine,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { bandColour, bandBgColour, bandLabel } from '@/lib/ielts/bands'
import { genId, saveAttempt } from '@/lib/ielts/store'
import type { Band, CriterionFeedback, TaskFeedback, WritingPrompt } from '@/lib/ielts/types'
import { isAiOptedOut } from '@/lib/ai-preferences'
import { useT } from '@/lib/i18n/use-t'
import { TrackToggle, useIeltsTrack } from '../_components/TrackToggle'
import { WRITING_PROMPTS } from './writing-prompts'
import { WritingChart } from './_components/WritingChart'

type TaskTab = 'writing-task-1' | 'writing-task-2'

interface ApiSuccess {
  feedback: TaskFeedback
  disclaimer: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────

function countWords(text: string): number {
  const trimmed = text.trim()
  if (trimmed.length === 0) return 0
  return trimmed.split(/\s+/).length
}

/**
 * Map an API status code → a friendly, user-facing message (essay-route parity).
 * `t` resolves the localised copy; a non-empty server `body` (which the API may
 * already localise for 403/429/400/503) still takes precedence where it did before.
 */
function friendlyError(t: (key: string) => string, status: number, body: string): string {
  if (status === 401) return t('ielts.writing.error.401')
  if (status === 403) return body || t('ielts.writing.error.403')
  if (status === 429) return body || t('ielts.writing.error.429')
  if (status === 400) return body || t('ielts.writing.error.400')
  if (status === 503) return body || t('ielts.writing.error.503')
  if (status >= 500) return t('ielts.writing.error.500')
  return body || t('ielts.writing.error.generic')
}

function formatClock(totalSeconds: number): string {
  const safe = Math.max(0, totalSeconds)
  const m = Math.floor(safe / 60)
  const s = safe % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/** Validate that an unknown API payload is a usable TaskFeedback. */
function isTaskFeedback(value: unknown): value is TaskFeedback {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  return (
    typeof v.overallBand === 'number' &&
    Array.isArray(v.criteria) &&
    Array.isArray(v.strengths) &&
    Array.isArray(v.improvements)
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function IeltsWritingPage() {
  const t = useT()
  const [track, setTrack] = useIeltsTrack()
  const [tab, setTab] = useState<TaskTab>('writing-task-1')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [response, setResponse] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paywalled, setPaywalled] = useState(false)
  const [feedback, setFeedback] = useState<TaskFeedback | null>(null)
  const [disclaimer, setDisclaimer] = useState<string>('')

  // Children's Code AI opt-out - gate the whole tool client-side, then the API
  // enforces it authoritatively server-side too.
  const [aiOff, setAiOff] = useState(false)
  useEffect(() => {
    setAiOff(isAiOptedOut())
  }, [])

  // ── Timer (optional countdown) ──────────────────────────────────────────
  const [timerOn, setTimerOn] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Prompts are filtered by both the selected task tab and the selected track.
  // GT Task 1 prompts are letters; Academic Task 1 prompts are data reports.
  const promptsForTab = useMemo(
    () => WRITING_PROMPTS.filter((p) => p.task === tab && p.track === track),
    [tab, track],
  )
  const prompt: WritingPrompt | null = useMemo(
    () => WRITING_PROMPTS.find((p) => p.id === selectedId) ?? null,
    [selectedId],
  )

  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setTimerOn(false)
  }, [])

  const startTimer = useCallback(() => {
    if (!prompt) return
    if (intervalRef.current) clearInterval(intervalRef.current)
    setSecondsLeft(prompt.suggestedMinutes * 60)
    setTimerOn(true)
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current)
          intervalRef.current = null
          return 0
        }
        return s - 1
      })
    }, 1000)
  }, [prompt])

  // Tidy up the interval on unmount.
  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    },
    [],
  )

  // Switching track changes which prompts exist, so clear any selection and
  // in-progress response/feedback and return to the prompt picker.
  useEffect(() => {
    setSelectedId(null)
    setResponse('')
    setFeedback(null)
    setDisclaimer('')
    setError(null)
    setPaywalled(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setTimerOn(false)
  }, [track])

  const wordCount = countWords(response)
  const minWords = prompt?.minWords ?? 0
  const meetsMin = wordCount >= minWords
  const canSubmit = Boolean(prompt) && response.trim().length >= 50 && !isSubmitting

  const resetForPrompt = useCallback(
    (id: string) => {
      setSelectedId(id)
      setResponse('')
      setFeedback(null)
      setDisclaimer('')
      setError(null)
      setPaywalled(false)
      stopTimer()
    },
    [stopTimer],
  )

  const handleSubmit = useCallback(async () => {
    if (!prompt || !canSubmit) return
    setIsSubmitting(true)
    setError(null)
    setPaywalled(false)
    stopTimer()

    try {
      const res = await fetch('/api/ielts/writing-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task: prompt.task,
          promptText: prompt.prompt,
          response,
          promptId: prompt.id,
          track,
        }),
      })

      if (!res.ok) {
        let message = ''
        try {
          const body = (await res.json()) as { error?: string; message?: string }
          message = body?.error ?? body?.message ?? ''
        } catch {
          /* non-JSON error body */
        }
        if (res.status === 403) setPaywalled(true)
        setError(friendlyError(t, res.status, message))
        setIsSubmitting(false)
        return
      }

      const data = (await res.json()) as Partial<ApiSuccess>
      if (!isTaskFeedback(data.feedback)) {
        setError(t('ielts.writing.error.unreadable'))
        setIsSubmitting(false)
        return
      }

      const tf = data.feedback
      setFeedback(tf)
      setDisclaimer(
        typeof data.disclaimer === 'string'
          ? data.disclaimer
          : t('ielts.writing.results.disclaimer_fallback'),
      )

      // Persist the attempt to the shared IELTS store (localStorage).
      try {
        saveAttempt({
          id: genId('wr'),
          skill: 'writing',
          taskType: prompt.task,
          promptId: prompt.id,
          responseText: response,
          band: tf.overallBand,
          criteria: tf.criteria,
          date: new Date().toISOString(),
        })
      } catch {
        /* non-fatal - feedback is still shown even if persistence fails */
      }

      setIsSubmitting(false)
    } catch (err) {
      console.error('[ielts/writing] fetch error', err)
      setError(t('ielts.writing.error.network'))
      setIsSubmitting(false)
    }
  }, [prompt, canSubmit, response, stopTimer, t, track])

  // ── AI opt-out screen ───────────────────────────────────────────────────
  if (aiOff) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BackLink />
        <div className="mt-8 rounded-2xl border border-border bg-muted/40 px-6 py-10 text-center">
          <Lock className="mx-auto size-6 text-muted-foreground" />
          <h1 className="mt-3 font-heading text-xl font-semibold text-foreground">
            {t('ielts.writing.optout.title')}
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            {t('ielts.writing.optout.body_before')}{' '}
            <Link
              href="/parent/settings"
              className="text-primary underline-offset-2 hover:underline"
            >
              {t('ielts.writing.optout.privacy_link')}
            </Link>{' '}
            {t('ielts.writing.optout.body_after')}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-8 pb-16 sm:px-6 lg:px-8">
      <BackLink />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.05] p-6 sm:p-8">
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          {t('ielts.writing.hero.badge')}
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground sm:text-display">
          {t('ielts.writing.hero.title')}
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
          {t('ielts.writing.hero.subtitle')}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Target className="size-3.5 text-primary" />
          <span>{t('ielts.writing.hero.word_minutes_note')}</span>
        </div>
      </section>

      {/* ── Task tabs + prompt picker ─────────────────────────────── */}
      {!feedback && (
        <section className="space-y-5">
          <div className="flex flex-wrap items-center justify-end gap-3">
            <TrackToggle value={track} onChange={setTrack} />
          </div>

          <Tabs
            value={tab}
            onValueChange={(value) => {
              setTab(value as TaskTab)
              resetForPrompt('')
              setSelectedId(null)
            }}
          >
            <TabsList>
              <TabsTrigger value="writing-task-1">{t('ielts.writing.tab.task1')}</TabsTrigger>
              <TabsTrigger value="writing-task-2">{t('ielts.writing.tab.task2')}</TabsTrigger>
            </TabsList>
          </Tabs>

          {!prompt && (
            <div className="grid gap-4 sm:grid-cols-2">
              {promptsForTab.map((p) => (
                <button
                  key={p.id}
                  onClick={() => resetForPrompt(p.id)}
                  className="group flex flex-col rounded-xl border border-border/60 bg-card p-5 text-left transition-all hover:border-violet-500/40 hover:shadow-card-hover"
                >
                  <div className="flex items-center gap-2">
                    <PenLine className="size-4 text-violet-400" />
                    <h3 className="text-sm font-semibold text-foreground group-hover:text-primary">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                    {p.prompt.split('\n').find((line) => line.trim().length > 0) ?? p.prompt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[11px] text-muted-foreground">
                    <Clock className="size-3" />
                    {p.suggestedMinutes} {t('ielts.writing.prompt.minutes_suffix')} ·{' '}
                    {t('ielts.writing.prompt.min_words_label')} {p.minWords}{' '}
                    {t('ielts.writing.prompt.words_suffix')}
                  </span>
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ── Writing workspace ─────────────────────────────────────── */}
      {prompt && !feedback && (
        <section className="space-y-5">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Badge variant="secondary" className="mb-1.5 text-[0.65rem] uppercase">
                    {prompt.task === 'writing-task-1'
                      ? t('ielts.writing.workspace.tag.task1')
                      : t('ielts.writing.workspace.tag.task2')}
                  </Badge>
                  <CardTitle className="text-heading-sm font-heading">{prompt.title}</CardTitle>
                </div>
                <Button variant="outline" size="sm" onClick={() => resetForPrompt('')}>
                  {t('ielts.writing.workspace.change_question')}
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Instruction / question text. For chart prompts the numbers live
                  in the rendered visual below, not dumped into this text. */}
              <div className="whitespace-pre-line rounded-xl border border-border/60 bg-background/50 p-4 text-sm leading-relaxed text-foreground">
                {prompt.prompt}
              </div>
              {/* Academic Task 1: the real chart/graph/table/process visual. */}
              {prompt.chart && <WritingChart spec={prompt.chart} />}
            </CardContent>
          </Card>

          {/* Timer controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border/60 bg-card px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <Clock
                className={`size-4 ${secondsLeft === 0 && timerOn ? 'text-destructive' : 'text-muted-foreground'}`}
              />
              {timerOn ? (
                <span
                  className={`font-mono tabular-nums ${
                    secondsLeft <= 60 ? 'text-destructive' : 'text-foreground'
                  }`}
                >
                  {formatClock(secondsLeft)} {t('ielts.writing.timer.remaining')}
                </span>
              ) : (
                <span className="text-muted-foreground">
                  {t('ielts.writing.timer.optional')} · {prompt.suggestedMinutes}{' '}
                  {t('ielts.writing.prompt.minutes_suffix')}
                </span>
              )}
            </div>
            {timerOn ? (
              <Button variant="ghost" size="sm" onClick={stopTimer}>
                {t('ielts.writing.timer.stop')}
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={startTimer}>
                <Clock className="size-3.5" />
                {t('ielts.writing.timer.start_prefix')} {prompt.suggestedMinutes}
                {t('ielts.writing.timer.start_suffix')}
              </Button>
            )}
          </div>

          {/* Response textarea */}
          <div className="space-y-1.5">
            <label htmlFor="ielts-response" className="text-sm font-medium text-foreground">
              {t('ielts.writing.response.label')}
            </label>
            <Textarea
              id="ielts-response"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder={
                prompt.task === 'writing-task-1'
                  ? t('ielts.writing.response.placeholder.task1')
                  : t('ielts.writing.response.placeholder.task2')
              }
              rows={16}
              className="resize-y leading-relaxed"
            />
            <div className="flex items-center justify-between text-xs">
              <span className={meetsMin ? 'text-emerald-500' : 'text-muted-foreground'}>
                {wordCount}{' '}
                {wordCount === 1
                  ? t('ielts.writing.words.singular')
                  : t('ielts.writing.words.plural')}
                {!meetsMin && (
                  <span className="ml-1 text-muted-foreground">
                    · {t('ielts.writing.words.aim_for')} {minWords}+ (
                    {Math.max(0, minWords - wordCount)} {t('ielts.writing.words.to_go')})
                  </span>
                )}
                {meetsMin && (
                  <span className="ml-1">· {t('ielts.writing.words.minimum_reached')}</span>
                )}
              </span>
              {wordCount > 0 && wordCount < 50 && (
                <span className="text-destructive">{t('ielts.writing.words.too_short')}</span>
              )}
            </div>
          </div>

          {/* Error / paywall banner */}
          {error && (
            <div
              role="alert"
              className="rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
            >
              <p>{error}</p>
              {paywalled && (
                <p className="mt-2">
                  <Link href="/pricing" className="font-semibold underline underline-offset-2">
                    {t('ielts.writing.paywall.view_plans')}
                  </Link>
                </p>
              )}
            </div>
          )}

          {/* Submit */}
          <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-end">
            <Button type="button" size="lg" disabled={!canSubmit} onClick={handleSubmit}>
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {t('ielts.writing.submit.loading')}
                </span>
              ) : (
                t('ielts.writing.submit.cta')
              )}
            </Button>
          </div>
          {isSubmitting && (
            <p className="text-center text-xs text-muted-foreground">
              {t('ielts.writing.submit.loading_note')}
            </p>
          )}
        </section>
      )}

      {/* ── Feedback ──────────────────────────────────────────────── */}
      {feedback && prompt && (
        <FeedbackView
          feedback={feedback}
          disclaimer={disclaimer}
          promptTitle={prompt.title}
          onTryAgain={() => {
            setFeedback(null)
            setResponse('')
            setError(null)
            setPaywalled(false)
          }}
          onNewPrompt={() => {
            setFeedback(null)
            setSelectedId(null)
            resetForPrompt('')
          }}
        />
      )}
    </div>
  )
}

// ─── Sub-components ───────────────────────────────────────────────────────

function BackLink() {
  const t = useT()
  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-2 text-muted-foreground"
      render={<Link href="/ielts" />}
    >
      <ArrowLeft className="size-3.5" />
      {t('ielts.writing.back')}
    </Button>
  )
}

function FeedbackView({
  feedback,
  disclaimer,
  promptTitle,
  onTryAgain,
  onNewPrompt,
}: {
  feedback: TaskFeedback
  disclaimer: string
  promptTitle: string
  onTryAgain: () => void
  onNewPrompt: () => void
}) {
  const t = useT()
  const band: Band = feedback.overallBand
  return (
    <section className="space-y-6">
      {/* Overall band */}
      <Card className={`border ${bandBgColour(band)}`}>
        <CardContent className="flex flex-col items-center gap-2 py-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('ielts.writing.results.predicted_overall')} - {promptTitle}
          </span>
          <span className={`font-heading text-6xl font-extrabold leading-none ${bandColour(band)}`}>
            {bandLabel(band)}
          </span>
          <span className="text-sm text-muted-foreground">{t('ielts.writing.results.out_of')}</span>
        </CardContent>
      </Card>

      {/* Per-criterion bands */}
      <div className="grid gap-4 sm:grid-cols-2">
        {feedback.criteria.map((c) => (
          <CriterionCard key={c.criterion} criterion={c} />
        ))}
      </div>

      {/* Strengths */}
      {feedback.strengths.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-emerald-500">
              <CheckCircle2 className="size-4" />
              {t('ielts.writing.results.strengths')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {feedback.strengths.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-emerald-500/70" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Improvements */}
      {feedback.improvements.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-amber-500">
              <TrendingUp className="size-4" />
              {t('ielts.writing.results.improvements')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {feedback.improvements.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-amber-500/70" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Model pointers */}
      {feedback.modelPointers && feedback.modelPointers.length > 0 && (
        <Card className="border-violet-500/20 bg-violet-500/[0.03]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm font-semibold text-violet-400">
              <Lightbulb className="size-4" />
              {t('ielts.writing.results.model_pointers')}
            </CardTitle>
            <CardDescription>{t('ielts.writing.results.model_pointers_desc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {feedback.modelPointers.map((s, i) => (
                <li key={i} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-1 size-1.5 shrink-0 rounded-full bg-violet-400/70" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Disclaimer */}
      <div className="flex items-start gap-2 rounded-xl border border-border/60 bg-background/50 p-4 text-xs text-muted-foreground">
        <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-500" />
        <p>{disclaimer || t('ielts.writing.results.disclaimer_fallback')}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-end">
        <Button variant="outline" onClick={onNewPrompt}>
          {t('ielts.writing.results.try_different')}
        </Button>
        <Button onClick={onTryAgain}>{t('ielts.writing.results.rewrite')}</Button>
      </div>
    </section>
  )
}

function CriterionCard({ criterion }: { criterion: CriterionFeedback }) {
  const band = criterion.band
  return (
    <div className={`rounded-xl border p-4 ${bandBgColour(band)}`}>
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-foreground">{criterion.criterion}</h3>
        <span className={`font-heading text-2xl font-bold leading-none ${bandColour(band)}`}>
          {bandLabel(band)}
        </span>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{criterion.comment}</p>
    </div>
  )
}

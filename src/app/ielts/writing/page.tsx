'use client'

// ─── IELTS Academic Writing — AI band feedback ───────────────────────────────
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
import { WRITING_PROMPTS } from './writing-prompts'

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

/** Map an API status code → a friendly, user-facing message (essay-route parity). */
function friendlyError(status: number, body: string): string {
  if (status === 401) return 'Please sign in to get AI band feedback on your writing.'
  if (status === 403)
    return body || 'IELTS Writing feedback is a Premium feature. Please upgrade to access it.'
  if (status === 429)
    return body || "You've reached today's feedback limit. Please try again tomorrow."
  if (status === 400)
    return (
      body || 'There was a problem with your submission. Please check your response and try again.'
    )
  if (status === 503)
    return body || 'The AI feedback service is temporarily unavailable. Please try again shortly.'
  if (status >= 500) return 'Something went wrong on our end. Please try again later.'
  return body || 'An unexpected error occurred. Please try again.'
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
  const [tab, setTab] = useState<TaskTab>('writing-task-1')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [response, setResponse] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paywalled, setPaywalled] = useState(false)
  const [feedback, setFeedback] = useState<TaskFeedback | null>(null)
  const [disclaimer, setDisclaimer] = useState<string>('')

  // Children's Code AI opt-out — gate the whole tool client-side, then the API
  // enforces it authoritatively server-side too.
  const [aiOff, setAiOff] = useState(false)
  useEffect(() => {
    setAiOff(isAiOptedOut())
  }, [])

  // ── Timer (optional countdown) ──────────────────────────────────────────
  const [timerOn, setTimerOn] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const promptsForTab = useMemo(() => WRITING_PROMPTS.filter((p) => p.task === tab), [tab])
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
        setError(friendlyError(res.status, message))
        setIsSubmitting(false)
        return
      }

      const data = (await res.json()) as Partial<ApiSuccess>
      if (!isTaskFeedback(data.feedback)) {
        setError('We could not read the feedback this time. Please try again.')
        setIsSubmitting(false)
        return
      }

      const tf = data.feedback
      setFeedback(tf)
      setDisclaimer(
        typeof data.disclaimer === 'string'
          ? data.disclaimer
          : 'This is an AI-generated predicted band for IELTS preparation only — not an official result.',
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
        /* non-fatal — feedback is still shown even if persistence fails */
      }

      setIsSubmitting(false)
    } catch (err) {
      console.error('[ielts/writing] fetch error', err)
      setError('Could not reach the feedback server. Please check your connection and try again.')
      setIsSubmitting(false)
    }
  }, [prompt, canSubmit, response, stopTimer])

  // ── AI opt-out screen ───────────────────────────────────────────────────
  if (aiOff) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <BackLink />
        <div className="mt-8 rounded-2xl border border-border bg-muted/40 px-6 py-10 text-center">
          <Lock className="mx-auto size-6 text-muted-foreground" />
          <h1 className="mt-3 font-heading text-xl font-semibold text-foreground">
            AI feedback is turned off
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            AI features are currently disabled for this account. To turn AI band feedback back on,
            visit your{' '}
            <Link
              href="/parent/settings"
              className="text-primary underline-offset-2 hover:underline"
            >
              privacy settings
            </Link>{' '}
            or ask a parent or guardian to update your preferences.
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
          AI band feedback — IELTS Academic
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground sm:text-display">
          IELTS Academic Writing
        </h1>
        <p className="mt-3 max-w-2xl text-body-md text-muted-foreground">
          Choose a Task 1 or Task 2 question, write your response under timed conditions if you
          like, and get an instant predicted band for each of the four marking criteria — plus
          specific strengths, improvements and techniques to move up a band.
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
          <Target className="size-3.5 text-primary" />
          <span>
            Task 1 asks for at least 150 words in ~20 minutes; Task 2 asks for at least 250 words in
            ~40 minutes.
          </span>
        </div>
      </section>

      {/* ── Task tabs + prompt picker ─────────────────────────────── */}
      {!feedback && (
        <section className="space-y-5">
          <Tabs
            value={tab}
            onValueChange={(value) => {
              setTab(value as TaskTab)
              resetForPrompt('')
              setSelectedId(null)
            }}
          >
            <TabsList>
              <TabsTrigger value="writing-task-1">Task 1 — Report</TabsTrigger>
              <TabsTrigger value="writing-task-2">Task 2 — Essay</TabsTrigger>
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
                    {p.suggestedMinutes} min · min {p.minWords} words
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
                    {prompt.task === 'writing-task-1' ? 'Task 1 · Academic' : 'Task 2 · Essay'}
                  </Badge>
                  <CardTitle className="text-heading-sm font-heading">{prompt.title}</CardTitle>
                </div>
                <Button variant="outline" size="sm" onClick={() => resetForPrompt('')}>
                  Change question
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* The Task 1 data/visual is embedded in the prompt text. */}
              <div className="whitespace-pre-line rounded-xl border border-border/60 bg-background/50 p-4 text-sm leading-relaxed text-foreground">
                {prompt.prompt}
              </div>
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
                  {formatClock(secondsLeft)} remaining
                </span>
              ) : (
                <span className="text-muted-foreground">
                  Optional timer · {prompt.suggestedMinutes} min
                </span>
              )}
            </div>
            {timerOn ? (
              <Button variant="ghost" size="sm" onClick={stopTimer}>
                Stop timer
              </Button>
            ) : (
              <Button variant="outline" size="sm" onClick={startTimer}>
                <Clock className="size-3.5" />
                Start {prompt.suggestedMinutes}-minute timer
              </Button>
            )}
          </div>

          {/* Response textarea */}
          <div className="space-y-1.5">
            <label htmlFor="ielts-response" className="text-sm font-medium text-foreground">
              Your response
            </label>
            <Textarea
              id="ielts-response"
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder={
                prompt.task === 'writing-task-1'
                  ? 'Write your overview and describe the key features of the data…'
                  : 'Write your essay: introduction, body paragraphs, and a conclusion…'
              }
              rows={16}
              className="resize-y leading-relaxed"
            />
            <div className="flex items-center justify-between text-xs">
              <span className={meetsMin ? 'text-emerald-500' : 'text-muted-foreground'}>
                {wordCount} {wordCount === 1 ? 'word' : 'words'}
                {!meetsMin && (
                  <span className="ml-1 text-muted-foreground">
                    · aim for {minWords}+ ({Math.max(0, minWords - wordCount)} to go)
                  </span>
                )}
                {meetsMin && <span className="ml-1">· minimum reached</span>}
              </span>
              {wordCount > 0 && wordCount < 50 && (
                <span className="text-destructive">Write at least a few sentences to assess.</span>
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
                    View Premium plans
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
                  Assessing your writing…
                </span>
              ) : (
                'Get my band feedback'
              )}
            </Button>
          </div>
          {isSubmitting && (
            <p className="text-center text-xs text-muted-foreground">
              This usually takes 15–30 seconds. Please don&rsquo;t close the page.
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
  return (
    <Button
      variant="ghost"
      size="sm"
      className="-ml-2 text-muted-foreground"
      render={<Link href="/ielts" />}
    >
      <ArrowLeft className="size-3.5" />
      Back to IELTS
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
  const band: Band = feedback.overallBand
  return (
    <section className="space-y-6">
      {/* Overall band */}
      <Card className={`border ${bandBgColour(band)}`}>
        <CardContent className="flex flex-col items-center gap-2 py-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Predicted overall band — {promptTitle}
          </span>
          <span className={`font-heading text-6xl font-extrabold leading-none ${bandColour(band)}`}>
            {bandLabel(band)}
          </span>
          <span className="text-sm text-muted-foreground">out of 9.0</span>
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
              Strengths
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
              Areas to improve
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
              Techniques to move up a band
            </CardTitle>
            <CardDescription>
              Concrete things to try next time — not a model answer to copy.
            </CardDescription>
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
        <p>
          {disclaimer ||
            'This is a predicted band for IELTS preparation only, not an official result.'}
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-end">
        <Button variant="outline" onClick={onNewPrompt}>
          Try a different question
        </Button>
        <Button onClick={onTryAgain}>Rewrite this answer</Button>
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

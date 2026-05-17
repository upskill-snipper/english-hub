'use client'

// ─── Paid Marker · Review Console ──────────────────────────────────────────
// /marker
//
// A fast, keyboard-driven marking queue for contracted external markers.
// The marker sees ONE assigned, AI-drafted script at a time: the student
// answer + the editable AI draft (mark, AO breakdown, feedback). They set a
// final mark, optional per-AO marks, final feedback and — REQUIRED whenever
// they change the mark or feedback — an adjustment reason (this is the
// training signal). Submitting POSTs the EXISTING /api/marking/[id]/review
// endpoint and the next queue item loads automatically with zero extra
// clicks.
//
// Access: gated to ACTIVE markers via GET /api/marker/me. A non-marker (or
// paused/offboarded) sees a friendly "not a marker — contact admin" screen,
// never the queue. The queue itself (GET /api/marker/queue) only ever
// returns rows assigned to this marker (server-enforced); this UI never
// requests or shows another marker's / pupil's work.
//
// Keyboard: A approve&next · C correct&next · R reject · S skip · J/K move
// focus between mark fields. Shortcuts are ignored while typing in a
// textarea/select unless combined with the primary submit affordance.
//
// i18n: useT() with inline English fallbacks. lookup() returns "[[key]]"
// for an unknown key, so tt() substitutes the English copy below WITHOUT
// editing any dictionary file (keys listed in the agent report for a
// translator to add later).

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  Loader2,
  CheckCircle2,
  XCircle,
  PencilLine,
  SkipForward,
  Sparkles,
  ShieldQuestion,
  Inbox,
  AlertTriangle,
  KeyboardIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// ─── i18n fallback shim ────────────────────────────────────────────────────
// lookup() returns "[[namespace.key]]" when a key is absent from every
// dictionary. We never edit dictionaries here, so detect that sentinel and
// fall back to the English string passed at the call site.
function tt(t: (k: string) => string, key: string, fallback: string): string {
  const v = t(key)
  if (!v || v === `[[${key}]]`) return fallback
  return v
}

// ─── Types ─────────────────────────────────────────────────────────────────

interface MarkerProfile {
  id: string
  display_name: string
  email: string | null
  boards: string[]
  qualification: string | null
  status: string
}

interface MarkerCounts {
  assigned: number
  doneToday: number
  runningTotal: number
}

interface AoBreakdownEntry {
  ao?: string
  code?: string
  label?: string
  score?: number | null
  max?: number | null
  maxScore?: number | null
  comment?: string | null
}

interface QueueItem {
  id: string
  source: string | null
  batch_id: string | null
  exam_board: string | null
  qualification: string | null
  paper: string | null
  essay_title: string | null
  essay_text: string
  question_text: string | null
  question_type: string | null
  studied_text: string | null
  status: string
  is_gold: boolean
  ai_result: unknown
  ai_grade: string | null
  ai_score: number | null
  ai_max_marks: number | null
  ai_grade_band: string | null
  ai_ao_breakdown: AoBreakdownEntry[] | unknown
  ai_feedback: string | null
  ai_confidence: number | null
  ai_band_marks: unknown
}

type ReviewDecision = 'approve' | 'correct' | 'reject'

// 9-1 GCSE grades plus "U" — must match the review endpoint's ALLOWED_GRADES.
const GRADE_OPTIONS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'] as const

// ─── Helpers ───────────────────────────────────────────────────────────────

function normaliseAoBreakdown(raw: unknown): AoCorrectionState[] {
  if (!Array.isArray(raw)) return []
  return raw
    .map((entry, i) => {
      const e = (entry ?? {}) as AoBreakdownEntry
      const ao = (e.ao ?? e.code ?? e.label ?? `AO${i + 1}`).toString()
      const score = typeof e.score === 'number' ? e.score : null
      const max =
        typeof e.max === 'number' ? e.max : typeof e.maxScore === 'number' ? e.maxScore : null
      return {
        ao,
        score: score === null ? '' : String(score),
        maxScore: max,
        comment: typeof e.comment === 'string' ? e.comment : '',
      }
    })
    .filter((x) => x.ao.length > 0)
}

interface AoCorrectionState {
  ao: string
  score: string // text input (kept as string for empty/partial entry)
  maxScore: number | null
  comment: string
}

function formatSource(s: string | null): string {
  switch (s) {
    case 'commissioned':
      return 'Commissioned'
    case 'specimen':
      return 'Specimen'
    case 'platform':
      return 'Platform'
    default:
      return s ?? '—'
  }
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function MarkerConsolePage() {
  const t = useT()

  // Gate / profile
  const [gateLoading, setGateLoading] = useState(true)
  const [profile, setProfile] = useState<MarkerProfile | null>(null)
  const [counts, setCounts] = useState<MarkerCounts>({
    assigned: 0,
    doneToday: 0,
    runningTotal: 0,
  })
  const [notMarker, setNotMarker] = useState(false)

  // Queue
  const [queue, setQueue] = useState<QueueItem[]>([])
  const [queueLoading, setQueueLoading] = useState(false)
  const [queueError, setQueueError] = useState<string | null>(null)
  const [cursor, setCursor] = useState(0)

  // Per-item editable decision form
  const [finalGrade, setFinalGrade] = useState<string>('')
  const [finalFeedback, setFinalFeedback] = useState<string>('')
  const [adjustmentReason, setAdjustmentReason] = useState<string>('')
  const [aoCorrections, setAoCorrections] = useState<AoCorrectionState[]>([])
  const [submitting, setSubmitting] = useState<ReviewDecision | null>(null)
  const [formError, setFormError] = useState<string | null>(null)

  // Session progress (this browser session)
  const [sessionDone, setSessionDone] = useState(0)

  const current = queue[cursor] ?? null

  // ── Initial gate + counts ────────────────────────────────────────────────
  const loadMe = useCallback(async () => {
    try {
      const res = await fetch('/api/marker/me', { cache: 'no-store' })
      if (res.status === 401 || res.status === 403) {
        setNotMarker(true)
        return false
      }
      if (!res.ok) {
        setNotMarker(true)
        return false
      }
      const data = (await res.json()) as {
        marker: MarkerProfile
        counts: MarkerCounts
      }
      setProfile(data.marker)
      setCounts(data.counts)
      return true
    } catch {
      setNotMarker(true)
      return false
    }
  }, [])

  // ── Load (or refill) the queue ───────────────────────────────────────────
  const loadQueue = useCallback(async () => {
    setQueueLoading(true)
    setQueueError(null)
    try {
      const res = await fetch('/api/marker/queue?limit=20', { cache: 'no-store' })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(
          body.error ?? tt(t, 'marker.queue.load_failed', 'Could not load your queue.'),
        )
      }
      const data = (await res.json()) as { items: QueueItem[]; total: number }
      setQueue(data.items ?? [])
      setCursor(0)
    } catch (err) {
      setQueueError(
        err instanceof Error
          ? err.message
          : tt(t, 'marker.queue.load_failed', 'Could not load your queue.'),
      )
    } finally {
      setQueueLoading(false)
    }
  }, [t])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const ok = await loadMe()
      if (cancelled) return
      setGateLoading(false)
      if (ok) await loadQueue()
    })()
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Sync the form when the current item changes ──────────────────────────
  useEffect(() => {
    if (!current) {
      setFinalGrade('')
      setFinalFeedback('')
      setAdjustmentReason('')
      setAoCorrections([])
      setFormError(null)
      return
    }
    setFinalGrade(current.ai_grade ?? '')
    setFinalFeedback(current.ai_feedback ?? '')
    setAdjustmentReason('')
    setAoCorrections(normaliseAoBreakdown(current.ai_ao_breakdown))
    setFormError(null)
  }, [current])

  // Did the marker change the AI draft? (drives the required-reason rule)
  const changedFromDraft = useMemo(() => {
    if (!current) return false
    const gradeChanged = (current.ai_grade ?? '') !== finalGrade
    const feedbackChanged = (current.ai_feedback ?? '') !== finalFeedback
    return gradeChanged || feedbackChanged
  }, [current, finalGrade, finalFeedback])

  // ── Advance to the next item; refill the queue when we run dry ───────────
  const advance = useCallback(async () => {
    setCursor((c) => {
      const next = c + 1
      if (next >= queue.length) {
        // Exhausted the loaded slice — pull the next batch.
        void loadQueue()
        return 0
      }
      return next
    })
  }, [queue.length, loadQueue])

  // ── Submit a decision, then auto-load the next item ──────────────────────
  const submitDecision = useCallback(
    async (decision: ReviewDecision) => {
      if (!current || submitting) return

      // Validation: changing the mark/feedback REQUIRES an adjustment reason
      // — this is the training signal. Always required for an explicit
      // "correct". Reject also wants a reason (why it failed QA).
      const reasonRequired = decision === 'correct' || decision === 'reject' || changedFromDraft
      if (reasonRequired && adjustmentReason.trim().length === 0) {
        setFormError(
          tt(
            t,
            'marker.review.reason_required',
            'Add an adjustment reason — this is the training signal whenever you change the mark or feedback.',
          ),
        )
        return
      }
      if (decision !== 'reject' && !finalGrade) {
        setFormError(tt(t, 'marker.review.grade_required', 'Choose a final mark.'))
        return
      }

      setSubmitting(decision)
      setFormError(null)

      const aoPayload = aoCorrections
        .filter((a) => a.ao.trim().length > 0)
        .map((a) => ({
          ao: a.ao,
          score: a.score.trim() === '' ? null : Number(a.score),
          maxScore: a.maxScore,
          comment: a.comment.trim() || null,
        }))

      try {
        const res = await fetch(`/api/marking/${current.id}/review`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            decision,
            teacherGrade: decision === 'reject' ? null : finalGrade || null,
            teacherFeedback: finalFeedback.trim() || null,
            aoCorrections: aoPayload.length > 0 ? aoPayload : null,
            adjustmentReason: adjustmentReason.trim() || null,
            moderationNotes: null,
            // Marker approval is corpus-eligible; the server also enforces
            // this server-side regardless of the body.
            trainingEligible: decision === 'approve' ? true : null,
          }),
        })
        if (!res.ok) {
          const body = (await res.json().catch(() => ({}))) as { error?: string }
          throw new Error(
            body.error ?? tt(t, 'marker.review.submit_failed', 'Could not save your review.'),
          )
        }

        // Optimistically update progress counters.
        setSessionDone((n) => n + 1)
        setCounts((c) => ({
          assigned: Math.max(0, c.assigned - 1),
          doneToday: decision === 'approve' ? c.doneToday + 1 : c.doneToday,
          runningTotal: decision === 'approve' ? c.runningTotal + 1 : c.runningTotal,
        }))

        // Drop the item we just actioned and move on with zero extra clicks.
        setQueue((prev) => prev.filter((q) => q.id !== current.id))
        setCursor((c) => {
          // After filtering, the same index now points at the next item.
          // If we've run off the end, refill.
          return c
        })
      } catch (err) {
        setFormError(
          err instanceof Error
            ? err.message
            : tt(t, 'marker.review.submit_failed', 'Could not save your review.'),
        )
      } finally {
        setSubmitting(null)
      }
    },
    [
      current,
      submitting,
      changedFromDraft,
      adjustmentReason,
      finalGrade,
      finalFeedback,
      aoCorrections,
      t,
    ],
  )

  // When the queue empties after a removal, pull the next batch.
  useEffect(() => {
    if (!gateLoading && !notMarker && !queueLoading && queue.length === 0) {
      // Avoid an infinite loop: only refetch if we actually actioned items.
      if (sessionDone > 0) void loadQueue()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queue.length])

  // ── Skip (no write — just move past this item locally) ───────────────────
  const skip = useCallback(() => {
    if (!current || submitting) return
    setQueue((prev) => {
      const rest = prev.filter((q) => q.id !== current.id)
      // Re-append so it comes back round later in the session.
      return [...rest, current]
    })
    setCursor(0)
  }, [current, submitting])

  // ── Keyboard map ─────────────────────────────────────────────────────────
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!current || submitting) return
      // Don't hijack typing in inputs/textareas/selects.
      const tag = (e.target as HTMLElement | null)?.tagName?.toLowerCase()
      const isTyping =
        tag === 'textarea' ||
        tag === 'input' ||
        tag === 'select' ||
        (e.target as HTMLElement | null)?.isContentEditable === true
      if (isTyping) return
      if (e.metaKey || e.ctrlKey || e.altKey) return

      switch (e.key.toLowerCase()) {
        case 'a':
          e.preventDefault()
          void submitDecision('approve')
          break
        case 'c':
          e.preventDefault()
          void submitDecision('correct')
          break
        case 'r':
          e.preventDefault()
          void submitDecision('reject')
          break
        case 's':
          e.preventDefault()
          skip()
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, submitting, submitDecision, skip])

  // ── Render: gate states ──────────────────────────────────────────────────

  if (gateLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (notMarker) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="max-w-md border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-14 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <ShieldQuestion className="h-8 w-8 text-primary" />
            </div>
            <h1 className="mb-1 text-lg font-semibold text-foreground">
              {tt(t, 'marker.gate.title', 'Marker access only')}
            </h1>
            <p className="max-w-sm text-sm text-muted-foreground">
              {tt(
                t,
                'marker.gate.body',
                'This console is for contracted markers. Your account is not an active marker. If you believe this is a mistake, please contact an administrator.',
              )}
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  // ── Render: console ──────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      {/* Header / progress */}
      <header className="sticky top-0 z-10 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <PencilLine className="h-5 w-5 text-primary" />
            <div>
              <h1 className="text-base font-bold leading-tight text-foreground">
                {tt(t, 'marker.console.title', 'Marker Console')}
              </h1>
              <p className="text-xs text-muted-foreground">
                {profile?.display_name}
                {profile?.boards && profile.boards.length > 0
                  ? ` · ${profile.boards.join(', ')}`
                  : ''}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="text-center">
              <div className="font-semibold tabular-nums text-foreground">{counts.assigned}</div>
              <div className="text-muted-foreground">
                {tt(t, 'marker.stat.assigned', 'Assigned')}
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold tabular-nums text-foreground">{sessionDone}</div>
              <div className="text-muted-foreground">
                {tt(t, 'marker.stat.session', 'This session')}
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold tabular-nums text-foreground">{counts.doneToday}</div>
              <div className="text-muted-foreground">
                {tt(t, 'marker.stat.today', 'Done today')}
              </div>
            </div>
            <div className="text-center">
              <div className="font-semibold tabular-nums text-foreground">
                {counts.runningTotal}
              </div>
              <div className="text-muted-foreground">{tt(t, 'marker.stat.total', 'Total')}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-6">
        {/* Keyboard hint */}
        <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <KeyboardIcon className="h-3.5 w-3.5" />
            {tt(t, 'marker.kbd.label', 'Shortcuts')}:
          </span>
          <span>
            <kbd className="rounded border border-border bg-muted px-1">A</kbd>{' '}
            {tt(t, 'marker.kbd.approve', 'Approve & next')}
          </span>
          <span>
            <kbd className="rounded border border-border bg-muted px-1">C</kbd>{' '}
            {tt(t, 'marker.kbd.correct', 'Correct & next')}
          </span>
          <span>
            <kbd className="rounded border border-border bg-muted px-1">R</kbd>{' '}
            {tt(t, 'marker.kbd.reject', 'Reject')}
          </span>
          <span>
            <kbd className="rounded border border-border bg-muted px-1">S</kbd>{' '}
            {tt(t, 'marker.kbd.skip', 'Skip')}
          </span>
        </div>

        {/* Queue loading */}
        {queueLoading && queue.length === 0 && (
          <div className="space-y-3">
            <Skeleton className="h-8 w-64 rounded" />
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        )}

        {/* Queue error */}
        {!queueLoading && queueError && (
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="flex items-center justify-between gap-3 py-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                <p className="text-sm text-destructive">{queueError}</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => void loadQueue()}>
                {tt(t, 'marker.retry', 'Retry')}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* All caught up */}
        {!queueLoading && !queueError && queue.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <Inbox className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {tt(t, 'marker.empty.title', 'All caught up')}
              </h3>
              <p className="max-w-md text-sm text-muted-foreground">
                {tt(
                  t,
                  'marker.empty.body',
                  'You have no scripts waiting for review right now. New assignments will appear here automatically.',
                )}
              </p>
              <Button variant="outline" size="sm" className="mt-4" onClick={() => void loadQueue()}>
                {tt(t, 'marker.refresh', 'Refresh')}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* The current item */}
        {!queueError && current && (
          <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            {/* LEFT: question + student answer */}
            <section className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="bg-muted text-muted-foreground">
                  {formatSource(current.source)}
                </Badge>
                {current.exam_board && <Badge variant="outline">{current.exam_board}</Badge>}
                {current.paper && (
                  <Badge variant="outline" className="bg-muted/50">
                    {current.paper}
                  </Badge>
                )}
                {current.qualification && (
                  <Badge variant="outline" className="bg-muted/50">
                    {current.qualification}
                  </Badge>
                )}
                {current.is_gold && (
                  <Badge
                    variant="outline"
                    className="border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400"
                  >
                    {tt(t, 'marker.gold.badge', 'Gold QA')}
                  </Badge>
                )}
              </div>

              {(current.question_text || current.essay_title) && (
                <div>
                  <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {tt(t, 'marker.question.label', 'Question')}
                  </h2>
                  <div className="rounded-lg border border-border bg-muted/30 p-3 text-sm leading-relaxed text-foreground">
                    {current.question_text ?? current.essay_title}
                  </div>
                </div>
              )}

              {current.studied_text && (
                <div>
                  <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {tt(t, 'marker.studied.label', 'Set text / extract')}
                  </h2>
                  <div className="max-h-40 overflow-y-auto whitespace-pre-wrap rounded-lg border border-border bg-muted/30 p-3 text-sm leading-relaxed text-foreground">
                    {current.studied_text}
                  </div>
                </div>
              )}

              <div>
                <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {tt(t, 'marker.answer.label', 'Student answer')}
                </h2>
                <div className="max-h-[28rem] overflow-y-auto whitespace-pre-wrap rounded-lg border border-border bg-card p-3 text-sm leading-relaxed text-foreground">
                  {current.essay_text || tt(t, 'marker.answer.empty', 'No answer text.')}
                </div>
              </div>
            </section>

            {/* RIGHT: AI draft (editable) + decision */}
            <section className="space-y-4">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                  {tt(t, 'marker.ai.label', 'AI draft (review & edit)')}
                </div>

                <div className="mb-3 flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground">
                    {tt(t, 'marker.ai.mark', 'AI mark')}:
                  </span>
                  <span className="font-semibold text-foreground">
                    {current.ai_grade ?? '—'}
                    {current.ai_score != null && current.ai_max_marks != null
                      ? ` (${current.ai_score}/${current.ai_max_marks})`
                      : ''}
                  </span>
                  {current.ai_confidence != null && (
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {Math.round(current.ai_confidence * 100)}%{' '}
                      {tt(t, 'marker.ai.confidence', 'confidence')}
                    </span>
                  )}
                </div>

                {/* Final mark */}
                <div className="space-y-1.5">
                  <Label htmlFor="final-grade">
                    {tt(t, 'marker.field.final_mark', 'Final mark')}
                  </Label>
                  <Select value={finalGrade} onValueChange={setFinalGrade}>
                    <SelectTrigger id="final-grade" className="w-32">
                      <SelectValue placeholder={tt(t, 'marker.field.mark_ph', 'Mark')} />
                    </SelectTrigger>
                    <SelectContent>
                      {GRADE_OPTIONS.map((g) => (
                        <SelectItem key={g} value={g}>
                          {g}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Per-AO marks */}
                {aoCorrections.length > 0 && (
                  <div className="mt-3 space-y-2">
                    <Label>{tt(t, 'marker.field.ao', 'Per-AO marks')}</Label>
                    {aoCorrections.map((ao, idx) => (
                      <div key={`${ao.ao}-${idx}`} className="flex items-center gap-2">
                        <span className="w-14 shrink-0 text-xs font-medium text-muted-foreground">
                          {ao.ao}
                        </span>
                        <input
                          type="number"
                          inputMode="numeric"
                          value={ao.score}
                          onChange={(e) =>
                            setAoCorrections((prev) =>
                              prev.map((p, i) => (i === idx ? { ...p, score: e.target.value } : p)),
                            )
                          }
                          className="h-8 w-16 rounded-md border border-border bg-background px-2 text-sm tabular-nums"
                          aria-label={`${ao.ao} ${tt(t, 'marker.field.score', 'score')}`}
                        />
                        {ao.maxScore != null && (
                          <span className="text-xs text-muted-foreground">/ {ao.maxScore}</span>
                        )}
                        <input
                          type="text"
                          value={ao.comment}
                          onChange={(e) =>
                            setAoCorrections((prev) =>
                              prev.map((p, i) =>
                                i === idx ? { ...p, comment: e.target.value } : p,
                              ),
                            )
                          }
                          placeholder={tt(t, 'marker.field.ao_comment_ph', 'Note (optional)')}
                          className="h-8 flex-1 rounded-md border border-border bg-background px-2 text-sm"
                          aria-label={`${ao.ao} ${tt(t, 'marker.field.comment', 'comment')}`}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Final feedback */}
                <div className="mt-3 space-y-1.5">
                  <Label htmlFor="final-feedback">
                    {tt(t, 'marker.field.feedback', 'Final feedback')}
                  </Label>
                  <Textarea
                    id="final-feedback"
                    value={finalFeedback}
                    onChange={(e) => setFinalFeedback(e.target.value)}
                    rows={6}
                    placeholder={tt(
                      t,
                      'marker.field.feedback_ph',
                      'The feedback the corpus will learn from…',
                    )}
                  />
                </div>

                {/* Adjustment reason (required when changed) */}
                <div className="mt-3 space-y-1.5">
                  <Label htmlFor="adj-reason">
                    {tt(t, 'marker.field.reason', 'Adjustment reason')}
                    {(changedFromDraft || submitting === 'correct') && (
                      <span className="ml-1 text-destructive">*</span>
                    )}
                  </Label>
                  <Textarea
                    id="adj-reason"
                    value={adjustmentReason}
                    onChange={(e) => setAdjustmentReason(e.target.value)}
                    rows={2}
                    placeholder={tt(
                      t,
                      'marker.field.reason_ph',
                      'Why did you change the AI mark/feedback? (training signal)',
                    )}
                    className={cn(
                      changedFromDraft &&
                        adjustmentReason.trim().length === 0 &&
                        'border-amber-500/50',
                    )}
                  />
                  {changedFromDraft && (
                    <p className="text-[11px] text-amber-600 dark:text-amber-400">
                      {tt(
                        t,
                        'marker.field.reason_hint',
                        'You changed the draft — a reason is required.',
                      )}
                    </p>
                  )}
                </div>

                {formError && <p className="mt-3 text-sm text-destructive">{formError}</p>}

                {/* Actions */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Button
                    type="button"
                    className="bg-green-600 text-white hover:bg-green-700"
                    onClick={() => void submitDecision('approve')}
                    disabled={submitting !== null}
                  >
                    {submitting === 'approve' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4" />
                    )}
                    {tt(t, 'marker.action.approve', 'Approve & next')}
                    <span className="ml-1 opacity-60">(A)</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-primary/40 text-primary hover:bg-primary/10"
                    onClick={() => void submitDecision('correct')}
                    disabled={submitting !== null}
                  >
                    {submitting === 'correct' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <PencilLine className="h-4 w-4" />
                    )}
                    {tt(t, 'marker.action.correct', 'Correct & next')}
                    <span className="ml-1 opacity-60">(C)</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-destructive/40 text-destructive hover:bg-destructive/10"
                    onClick={() => void submitDecision('reject')}
                    disabled={submitting !== null}
                  >
                    {submitting === 'reject' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <XCircle className="h-4 w-4" />
                    )}
                    {tt(t, 'marker.action.reject', 'Reject')}
                    <span className="ml-1 opacity-60">(R)</span>
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={skip}
                    disabled={submitting !== null}
                  >
                    <SkipForward className="h-4 w-4" />
                    {tt(t, 'marker.action.skip', 'Skip')}
                    <span className="ml-1 opacity-60">(S)</span>
                  </Button>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  {tt(
                    t,
                    'marker.action.hint',
                    'Approving makes this script corpus-eligible for training.',
                  )}
                </p>
              </div>

              <Separator />
              <p className="text-center text-xs text-muted-foreground">
                {tt(t, 'marker.progress.remaining', 'In this batch')}:{' '}
                <span className="font-semibold text-foreground tabular-nums">{queue.length}</span>
              </p>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}

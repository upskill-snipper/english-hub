'use client'

// ─── Paid Marker · Review Console ──────────────────────────────────────────
// /marker
//
// A fast, keyboard-driven marking queue for contracted external markers.
// The marker sees ONE assigned, AI-drafted script at a time: the student
// answer + the editable AI draft (mark, AO breakdown, feedback). They set a
// final mark, optional per-AO marks, final feedback and - REQUIRED whenever
// they change the mark or feedback - an adjustment reason (this is the
// training signal). Submitting POSTs the EXISTING /api/marking/[id]/review
// endpoint and the next queue item loads automatically with zero extra
// clicks.
//
// Access: gated to ACTIVE markers via GET /api/marker/me. A non-marker (or
// paused/offboarded) sees a friendly "not a marker - contact admin" screen,
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
  Inbox,
  AlertTriangle,
  KeyboardIcon,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
// Board-aware marking (Stage 4): the form the marker sees adapts to the
// qualification (GCSE grade, IELTS bands, KS3/EAL level).
import { resolveMarkingShape, type MarkingShape } from '@/lib/marking/marking-shapes'

import { DictationButton } from '@/components/speech/DictationButton'
import { ReadAloudButton } from '@/components/speech/ReadAloudButton'

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

// 9-1 GCSE grades plus "U" - must match the review endpoint's ALLOWED_GRADES.
const GRADE_OPTIONS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'] as const

// Boards an applicant can request (mirrors REQUESTABLE_BOARDS server-side).
const APPLY_BOARDS = [
  'AQA',
  'EDEXCEL',
  'OCR',
  'EDUQAS',
  'EDEXCEL_IGCSE',
  'CAMBRIDGE_0500',
  'CAMBRIDGE_0990',
  'IELTS',
  'KS3',
  'EAL',
] as const

// ─── Helpers ───────────────────────────────────────────────────────────────

/**
 * Build the ordered list of band values for a 'band' shape (e.g. IELTS
 * 0,0.5,…,9). Returned as strings for use as Select values. Pure.
 */
function bandOptions(shape: MarkingShape): string[] {
  const min = shape.bandMin ?? 0
  const max = shape.bandMax ?? 9
  const step = shape.bandStep ?? 0.5
  const out: string[] = []
  // Iterate on an integer counter to avoid float drift, then format.
  const steps = Math.round((max - min) / step)
  for (let i = 0; i <= steps; i += 1) {
    const v = min + i * step
    // Show 0.5 steps without trailing ".0" noise: "6" and "6.5".
    out.push(Number.isInteger(v) ? String(v) : String(v))
  }
  return out
}

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
      return s ?? '-'
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

  // Self-service application (Stage C): shown when a signed-in user is not yet a
  // marker. They submit credentials + tick the boards they're qualified for.
  const [applyName, setApplyName] = useState('')
  const [applyQual, setApplyQual] = useState('')
  const [applyBoards, setApplyBoards] = useState<string[]>([])
  const [applying, setApplying] = useState(false)
  const [applyError, setApplyError] = useState<string | null>(null)
  const [applied, setApplied] = useState(false)

  // New application extras: LinkedIn URL, CV upload, optional marketing consent.
  const [applyLinkedin, setApplyLinkedin] = useState('')
  const [applyConsent, setApplyConsent] = useState(false)
  const [applyAnon, setApplyAnon] = useState(false)
  const [applyCvPath, setApplyCvPath] = useState<string | null>(null)
  const [applyCvName, setApplyCvName] = useState<string | null>(null)
  const [cvUploading, setCvUploading] = useState(false)
  const [cvError, setCvError] = useState<string | null>(null)

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

  // Board-aware marks (Stage 4): the overall band/level and per-criterion bands
  // for non-GCSE shapes. `bandOverall` holds an IELTS overall band OR a KS3/EAL
  // level (both are single Select values); `bandCriteria` holds the four IELTS
  // criterion bands keyed by code. Empty for GCSE rows.
  const [bandOverall, setBandOverall] = useState<string>('')
  const [bandCriteria, setBandCriteria] = useState<Record<string, string>>({})

  // Blind calibration (Stage 4): on a GOLD/calibration script the AI draft is
  // HIDDEN until the marker reveals it, so their mark is unbiased (an honest
  // agreement number for the gate). `revealedAi` is per-item; reset on advance.
  const [revealedAi, setRevealedAi] = useState(false)

  // Session progress (this browser session)
  const [sessionDone, setSessionDone] = useState(0)

  const current = queue[cursor] ?? null

  // The marking shape for the current item (GCSE grade / IELTS band / KS3-EAL
  // level), resolved from its board + qualification. Drives which form renders.
  const shape: MarkingShape = useMemo(
    () => resolveMarkingShape(current?.exam_board ?? null, current?.qualification ?? null),
    [current],
  )

  // On a gold script we mark BLIND: the AI draft stays hidden until revealed.
  // Non-gold scripts show the draft immediately (production moderation flow).
  const blind = current?.is_gold === true
  const aiHidden = blind && !revealedAi

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
      setBandOverall('')
      setBandCriteria({})
      setRevealedAi(false)
      setFormError(null)
      return
    }
    // Reset the blind-reveal for every new item (gold scripts start hidden).
    setRevealedAi(false)
    setFormError(null)
    setAdjustmentReason('')

    // BLIND gold scripts: start from a CLEAN form so the marker is not anchored
    // to the AI draft. Non-gold scripts pre-fill the editable AI draft as before.
    const seedFromAi = current.is_gold !== true
    setFinalGrade(seedFromAi ? (current.ai_grade ?? '') : '')
    setFinalFeedback(seedFromAi ? (current.ai_feedback ?? '') : '')
    setAoCorrections(seedFromAi ? normaliseAoBreakdown(current.ai_ao_breakdown) : [])
    // Band/level state always starts empty (there is no AI band draft surfaced
    // here yet, and blind scripts must not be seeded regardless).
    setBandOverall('')
    setBandCriteria({})
  }, [current])

  // Did the marker change the AI draft? (drives the required-reason rule)
  // Only meaningful for GCSE rows that seed from the AI draft. For band/level
  // shapes there is no surfaced AI draft to diverge from, so it is always false
  // (a reason is still required on an explicit "correct").
  const changedFromDraft = useMemo(() => {
    if (!current) return false
    if (shape.kind !== 'gcse_grade') return false
    const gradeChanged = (current.ai_grade ?? '') !== finalGrade
    const feedbackChanged = (current.ai_feedback ?? '') !== finalFeedback
    return gradeChanged || feedbackChanged
  }, [current, finalGrade, finalFeedback, shape])

  // ── Advance to the next item; refill the queue when we run dry ───────────
  const advance = useCallback(async () => {
    setCursor((c) => {
      const next = c + 1
      if (next >= queue.length) {
        // Exhausted the loaded slice - pull the next batch.
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
      // - this is the training signal. Always required for an explicit
      // "correct". Reject also wants a reason (why it failed QA).
      const reasonRequired = decision === 'correct' || decision === 'reject' || changedFromDraft
      if (reasonRequired && adjustmentReason.trim().length === 0) {
        setFormError(
          tt(
            t,
            'marker.review.reason_required',
            'Add an adjustment reason - this is the training signal whenever you change the mark or feedback.',
          ),
        )
        return
      }
      // A final mark is required for every decision except reject. Which control
      // supplies it depends on the shape: GCSE → finalGrade; band/level →
      // bandOverall (+ all four criterion bands for an IELTS band shape).
      if (decision !== 'reject') {
        if (shape.kind === 'gcse_grade') {
          if (!finalGrade) {
            setFormError(tt(t, 'marker.review.grade_required', 'Choose a final mark.'))
            return
          }
        } else {
          if (!bandOverall) {
            setFormError(tt(t, 'marker.review.overall_required', 'Choose an overall band/level.'))
            return
          }
          if (shape.kind === 'band') {
            const missing = (shape.criteria ?? []).filter((c) => !bandCriteria[c.code])
            if (missing.length > 0) {
              setFormError(
                tt(
                  t,
                  'marker.review.criteria_required',
                  'Set a band for every criterion before approving.',
                ),
              )
              return
            }
          }
        }
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

      // Board-aware mark payload. GCSE rows send teacherGrade (unchanged);
      // band/level rows send teacherBandMarks and NO teacherGrade (the review
      // API validates it against the row's shape).
      const isGcse = shape.kind === 'gcse_grade'
      let teacherBandMarks: {
        kind: 'band' | 'level'
        overall: number | string
        criteria?: Record<string, number>
      } | null = null
      if (!isGcse && decision !== 'reject' && bandOverall) {
        if (shape.kind === 'band') {
          const criteria: Record<string, number> = {}
          for (const c of shape.criteria ?? []) {
            const v = bandCriteria[c.code]
            if (v) criteria[c.code] = Number(v)
          }
          teacherBandMarks = { kind: 'band', overall: Number(bandOverall), criteria }
        } else {
          teacherBandMarks = { kind: 'level', overall: bandOverall }
        }
      }

      try {
        const res = await fetch(`/api/marking/${current.id}/review`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            decision,
            // GCSE grade only on GCSE rows; band/level rows leave it null.
            teacherGrade: decision === 'reject' || !isGcse ? null : finalGrade || null,
            teacherFeedback: finalFeedback.trim() || null,
            aoCorrections: aoPayload.length > 0 ? aoPayload : null,
            adjustmentReason: adjustmentReason.trim() || null,
            moderationNotes: null,
            teacherBandMarks,
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
      shape,
      bandOverall,
      bandCriteria,
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

  // ── Skip (no write - just move past this item locally) ───────────────────
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

  // ── CV upload (optional) ─────────────────────────────────────────────────
  // Uploads the selected file to /api/marker/cv-upload and stores the returned
  // path. Errors are surfaced inline and never block the rest of the form.
  const uploadCv = useCallback(
    async (file: File) => {
      setCvError(null)
      setApplyCvPath(null)
      setApplyCvName(file.name)
      setCvUploading(true)
      try {
        const fd = new FormData()
        fd.append('file', file)
        const res = await fetch('/api/marker/cv-upload', { method: 'POST', body: fd })
        if (!res.ok) {
          const b = (await res.json().catch(() => ({}))) as { error?: string }
          throw new Error(b.error ?? tt(t, 'marker.apply.cv_failed', 'Could not upload your CV.'))
        }
        const data = (await res.json()) as { path?: string }
        if (!data.path)
          throw new Error(tt(t, 'marker.apply.cv_failed', 'Could not upload your CV.'))
        setApplyCvPath(data.path)
      } catch (err) {
        setApplyCvName(null)
        setCvError(
          err instanceof Error
            ? err.message
            : tt(t, 'marker.apply.cv_failed', 'Could not upload your CV.'),
        )
      } finally {
        setCvUploading(false)
      }
    },
    [t],
  )

  // ── Self-service application submit ──────────────────────────────────────
  const submitApplication = useCallback(async () => {
    if (applying) return
    if (applyName.trim().length === 0) {
      setApplyError(tt(t, 'marker.apply.name_required', 'Enter your name.'))
      return
    }
    if (applyBoards.length === 0) {
      setApplyError(tt(t, 'marker.apply.boards_required', 'Select at least one board.'))
      return
    }
    setApplying(true)
    setApplyError(null)
    try {
      const res = await fetch('/api/marker/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          displayName: applyName.trim(),
          qualification: applyQual.trim() || undefined,
          boards: applyBoards,
          linkedinUrl: applyLinkedin.trim() || undefined,
          cvPath: applyCvPath || undefined,
          marketingConsent: applyConsent,
          marketingAnonymous: applyConsent ? applyAnon : false,
        }),
      })
      if (!res.ok) {
        const b = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(
          b.error ?? tt(t, 'marker.apply.failed', 'Could not submit your application.'),
        )
      }
      setApplied(true)
    } catch (err) {
      setApplyError(
        err instanceof Error
          ? err.message
          : tt(t, 'marker.apply.failed', 'Could not submit your application.'),
      )
    } finally {
      setApplying(false)
    }
  }, [
    applying,
    applyName,
    applyQual,
    applyBoards,
    applyLinkedin,
    applyCvPath,
    applyConsent,
    applyAnon,
    t,
  ])

  // ── Render: gate states ──────────────────────────────────────────────────

  if (gateLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (notMarker) {
    // Self-service application (Stage C). A signed-in non-marker can apply here:
    // submit credentials + tick the boards they're qualified for. Creating an
    // account grants NOTHING — they can mark a board only once an admin approves
    // it (enforced server-side). If they're not signed in, the apply POST 401s
    // and we surface a "sign in" message.
    if (applied) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
          <Card className="max-w-md">
            <CardContent className="flex flex-col items-center justify-center py-14 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="mb-1 text-lg font-semibold text-foreground">
                {tt(t, 'marker.apply.done_title', 'Application received')}
              </h1>
              <p className="max-w-sm text-sm text-muted-foreground">
                {tt(
                  t,
                  'marker.apply.done_body',
                  'Thank you. You can start marking a board as soon as an administrator approves your access to it. You can close this page.',
                )}
              </p>
            </CardContent>
          </Card>
        </div>
      )
    }
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4 py-10">
        <Card className="w-full max-w-lg">
          <CardContent className="py-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <PencilLine className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-foreground">
                  {tt(t, 'marker.apply.title', 'Apply to mark')}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {tt(
                    t,
                    'marker.apply.subtitle',
                    'Tell us your credentials and the boards you are qualified for. Marking unlocks per board once an administrator approves you.',
                  )}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="apply-name">{tt(t, 'marker.apply.name', 'Your name')}</Label>
                <input
                  id="apply-name"
                  type="text"
                  value={applyName}
                  onChange={(e) => setApplyName(e.target.value)}
                  className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
                  placeholder={tt(t, 'marker.apply.name_ph', 'Full name')}
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="apply-qual">
                  {tt(t, 'marker.apply.qual', 'Credentials / examiner experience')}
                </Label>
                <Textarea
                  id="apply-qual"
                  value={applyQual}
                  onChange={(e) => setApplyQual(e.target.value)}
                  rows={3}
                  placeholder={tt(
                    t,
                    'marker.apply.qual_ph',
                    'e.g. AQA GCSE English examiner (8 years); IELTS Writing examiner, current.',
                  )}
                />
              </div>

              <div className="space-y-1.5">
                <Label>{tt(t, 'marker.apply.boards', 'Boards you are qualified for')}</Label>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {APPLY_BOARDS.map((b) => {
                    const checked = applyBoards.includes(b)
                    return (
                      <label
                        key={b}
                        className={cn(
                          'flex cursor-pointer items-center gap-2 rounded-md border px-2.5 py-2 text-xs',
                          checked
                            ? 'border-primary/50 bg-primary/5 text-foreground'
                            : 'border-border text-muted-foreground',
                        )}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={(e) =>
                            setApplyBoards((prev) =>
                              e.target.checked ? [...prev, b] : prev.filter((x) => x !== b),
                            )
                          }
                        />
                        {b}
                      </label>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="apply-linkedin">
                  {tt(t, 'marker.apply.linkedin', 'LinkedIn profile (optional)')}
                </Label>
                <input
                  id="apply-linkedin"
                  type="url"
                  value={applyLinkedin}
                  onChange={(e) => setApplyLinkedin(e.target.value)}
                  className="h-10 w-full rounded-md border border-border bg-background px-3 text-sm"
                  placeholder="https://www.linkedin.com/in/your-profile"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="apply-cv">
                  {tt(
                    t,
                    'marker.apply.cv',
                    'Upload your CV (PDF or Word, optional but recommended)',
                  )}
                </Label>
                <input
                  id="apply-cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  disabled={cvUploading}
                  onChange={(e) => {
                    const f = e.target.files?.[0]
                    if (f) void uploadCv(f)
                  }}
                  className="block w-full text-sm text-muted-foreground file:mr-3 file:rounded-md file:border file:border-border file:bg-muted file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground hover:file:bg-muted/70"
                />
                {cvUploading && (
                  <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                    <Loader2 className="h-3 w-3 animate-spin" />
                    {tt(t, 'marker.apply.cv_uploading', 'Uploading CV…')}
                  </p>
                )}
                {!cvUploading && applyCvPath && (
                  <p className="flex items-center gap-1.5 text-[11px] text-green-600 dark:text-green-400">
                    <CheckCircle2 className="h-3 w-3" />
                    {tt(t, 'marker.apply.cv_uploaded', 'CV uploaded')}
                    {applyCvName ? ` · ${applyCvName}` : ''}
                  </p>
                )}
                {cvError && <p className="text-[11px] text-destructive">{cvError}</p>}
              </div>

              <label className="flex cursor-pointer items-start gap-2 rounded-md border border-border p-3 text-xs leading-relaxed text-muted-foreground">
                <input
                  type="checkbox"
                  className="mt-0.5"
                  checked={applyConsent}
                  onChange={(e) => setApplyConsent(e.target.checked)}
                />
                <span>
                  {tt(
                    t,
                    'marker.apply.consent',
                    'I consent to The English Hub using my marking performance, feedback and qualifications to improve quality and for marketing / proof-of-quality purposes. (Optional — you can apply without ticking this.)',
                  )}
                </span>
              </label>

              {applyConsent && (
                <label className="ml-6 flex cursor-pointer items-start gap-2 rounded-md border border-border p-3 text-xs leading-relaxed text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-0.5"
                    checked={applyAnon}
                    onChange={(e) => setApplyAnon(e.target.checked)}
                  />
                  <span>
                    {tt(
                      t,
                      'marker.apply.anonymous',
                      'Keep me anonymous: show my qualifications and experience for marketing / proof-of-quality, but do not show my name or identifying details.',
                    )}
                  </span>
                </label>
              )}

              {applyError && <p className="text-sm text-destructive">{applyError}</p>}

              <Button
                type="button"
                className="w-full"
                disabled={applying || cvUploading}
                onClick={() => void submitApplication()}
              >
                {applying ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  tt(t, 'marker.apply.submit', 'Submit application')
                )}
              </Button>
              <p className="text-center text-[11px] text-muted-foreground">
                {tt(
                  t,
                  'marker.apply.note',
                  'You must be signed in to apply. Approval is per board and at our discretion.',
                )}
              </p>
            </div>
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
                <div className="mb-2 flex items-center justify-between gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5" />
                    {blind
                      ? tt(t, 'marker.ai.label_blind', 'Your mark (blind QA)')
                      : tt(t, 'marker.ai.label', 'AI draft (review & edit)')}
                  </span>
                  {blind && (
                    <span className="rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium normal-case text-amber-600 dark:text-amber-400">
                      {tt(t, 'marker.blind.note', 'Mark blind, then reveal')}
                    </span>
                  )}
                </div>

                {/* AI mark line — HIDDEN on a blind gold script until revealed, so the
                    marker is not anchored. Revealing is logged as the marker's own
                    choice; their mark is captured independently regardless. */}
                {aiHidden ? (
                  <div className="mb-3 flex items-center justify-between gap-3 rounded-md border border-dashed border-border bg-muted/30 px-3 py-2 text-sm">
                    <span className="text-muted-foreground">
                      {tt(
                        t,
                        'marker.blind.hidden',
                        'AI draft hidden — set your mark first, then reveal to compare.',
                      )}
                    </span>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => setRevealedAi(true)}
                    >
                      {tt(t, 'marker.blind.reveal', 'Reveal AI')}
                    </Button>
                  </div>
                ) : (
                  <div className="mb-3 flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">
                      {tt(t, 'marker.ai.mark', 'AI mark')}:
                    </span>
                    <span className="font-semibold text-foreground">
                      {current.ai_grade ?? '-'}
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
                )}

                {/* Final mark — shape-aware. GCSE → 9-1 grade select; IELTS → an
                    overall band select + four criterion band selects; KS3/EAL →
                    a single level select. */}
                {shape.kind === 'gcse_grade' ? (
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
                ) : (
                  <div className="space-y-3">
                    {/* Overall band / level */}
                    <div className="space-y-1.5">
                      <Label htmlFor="band-overall">
                        {shape.kind === 'band'
                          ? tt(t, 'marker.field.overall_band', 'Overall band')
                          : tt(t, 'marker.field.level', 'Level')}
                      </Label>
                      <Select value={bandOverall} onValueChange={setBandOverall}>
                        <SelectTrigger id="band-overall" className="w-40">
                          <SelectValue
                            placeholder={
                              shape.kind === 'band'
                                ? tt(t, 'marker.field.band_ph', 'Band')
                                : tt(t, 'marker.field.level_ph', 'Level')
                            }
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {(shape.kind === 'band' ? bandOptions(shape) : (shape.levels ?? [])).map(
                            (opt) => (
                              <SelectItem key={opt} value={opt}>
                                {opt}
                              </SelectItem>
                            ),
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Per-criterion bands (IELTS TR/CC/LR/GRA) */}
                    {shape.kind === 'band' && (shape.criteria ?? []).length > 0 && (
                      <div className="space-y-2">
                        <Label>{tt(t, 'marker.field.criteria', 'Criterion bands')}</Label>
                        {(shape.criteria ?? []).map((c) => (
                          <div key={c.code} className="flex items-center gap-2">
                            <span className="w-40 shrink-0 text-xs font-medium text-muted-foreground">
                              {c.code} · {c.label}
                            </span>
                            <Select
                              value={bandCriteria[c.code] ?? ''}
                              onValueChange={(v) =>
                                setBandCriteria((prev) => ({ ...prev, [c.code]: v }))
                              }
                            >
                              <SelectTrigger className="w-28">
                                <SelectValue placeholder={tt(t, 'marker.field.band_ph', 'Band')} />
                              </SelectTrigger>
                              <SelectContent>
                                {bandOptions(shape).map((opt) => (
                                  <SelectItem key={opt} value={opt}>
                                    {opt}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Per-AO marks (GCSE only) */}
                {shape.kind === 'gcse_grade' && aoCorrections.length > 0 && (
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
                        <DictationButton
                          onText={(chunk) =>
                            setAoCorrections((prev) =>
                              prev.map((p, i) =>
                                i === idx
                                  ? {
                                      ...p,
                                      comment: (p.comment ? p.comment.trimEnd() + ' ' : '') + chunk,
                                    }
                                  : p,
                              ),
                            )
                          }
                          iconOnly
                          label={tt(t, 'marker.field.ao_comment_dictate', 'Dictate note')}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Final feedback */}
                <div className="mt-3 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="final-feedback">
                      {tt(t, 'marker.field.feedback', 'Final feedback')}
                    </Label>
                    <div className="flex items-center gap-1.5">
                      {/* Don't read the AI feedback aloud while blind (it would
                          leak the draft the marker is meant to mark without). */}
                      {!aiHidden && current.ai_feedback && (
                        <ReadAloudButton
                          text={current.ai_feedback}
                          iconOnly
                          label={tt(t, 'marker.field.feedback_read', 'Read AI feedback aloud')}
                        />
                      )}
                      <DictationButton
                        onText={(chunk) =>
                          setFinalFeedback((v) => (v ? v.trimEnd() + ' ' : '') + chunk)
                        }
                        iconOnly
                        label={tt(t, 'marker.field.feedback_dictate', 'Dictate feedback')}
                      />
                    </div>
                  </div>
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
                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="adj-reason">
                      {tt(t, 'marker.field.reason', 'Adjustment reason')}
                      {(changedFromDraft || submitting === 'correct') && (
                        <span className="ml-1 text-destructive">*</span>
                      )}
                    </Label>
                    <DictationButton
                      onText={(chunk) =>
                        setAdjustmentReason((v) => (v ? v.trimEnd() + ' ' : '') + chunk)
                      }
                      iconOnly
                      label={tt(t, 'marker.field.reason_dictate', 'Dictate reason')}
                    />
                  </div>
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
                        'You changed the draft - a reason is required.',
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

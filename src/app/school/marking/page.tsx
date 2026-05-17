'use client'

// ─── Teacher Marking Review ────────────────────────────────────────────────
// /school/marking
//
// Shows AI-marked essay submissions from students in any class the
// authenticated teacher belongs to. Teachers can open a submission, review
// the AI band marks + feedback, and override the grade with a free-text
// comment. The override is persisted via POST /api/school/marking/override.
//
// NOTE (out of scope for this agent): we still need to surface a
// "your teacher has reviewed this essay" hint in the student-facing UI.
// TODO: hook the override into the student feedback view (separate task).

import { useEffect, useMemo, useState } from 'react'
import {
  Search,
  X,
  Loader2,
  ClipboardCheck,
  AlertTriangle,
  Sparkles,
  GraduationCap,
  CheckCircle2,
  XCircle,
  Undo2,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'

// ─── Types ─────────────────────────────────────────────────────────────────

// Includes the original three statuses plus the Smart-IP lifecycle values
// (the GET route may now return any of these).
type SubmissionStatus =
  | 'submitted'
  | 'pending'
  | 'ai_marked'
  | 'teacher_review_required'
  | 'teacher_reviewed'
  | 'approved'
  | 'rejected'
  | 'training_ready'
  | 'excluded_from_training'

interface BandMark {
  band: string
  score: number
  max: number
}

interface LatestModeration {
  id: string
  decision: string
  teacher_grade: string | null
  ai_grade: string | null
  adjustment_reason: string | null
  moderation_notes: string | null
  training_eligible: boolean | null
  reviewer_user_id: string | null
  created_at: string
}

interface MarkingSubmission {
  id: string
  student_id: string
  student_name: string
  class_id: string
  class_name: string
  exam_board: string | null
  essay_title: string | null
  essay_text: string
  ai_grade: string | null
  ai_confidence: number | null // 0..1
  ai_feedback: string | null
  ai_band_marks: BandMark[]
  teacher_grade: string | null
  teacher_comment: string | null
  status: SubmissionStatus
  submitted_at: string
  reviewed_at: string | null
  // ── Smart-IP additive fields (optional — older rows may omit them) ────────
  source?: string | null
  ai_score?: number | null
  ai_max_marks?: number | null
  ai_grade_band?: string | null
  final_teacher_mark?: string | null
  final_teacher_feedback?: string | null
  teacher_adjustment_reason?: string | null
  moderation_notes?: string | null
  training_eligible?: boolean | null
  approved_by?: string | null
  approved_at?: string | null
  latest_moderation?: LatestModeration | null
}

type ReviewDecision = 'approve' | 'reject' | 'correct' | 'send_back'

// ─── Constants ─────────────────────────────────────────────────────────────

// 9-1 GCSE grades plus "U" (ungraded) for overrides.
const GRADE_OPTIONS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'] as const

const STATUS_OPTIONS: { value: SubmissionStatus | 'all'; label: string }[] = [
  { value: 'all', label: 'All statuses' },
  { value: 'pending', label: 'Awaiting AI' },
  { value: 'ai_marked', label: 'AI marked' },
  { value: 'teacher_review_required', label: 'Needs review' },
  { value: 'teacher_reviewed', label: 'Teacher reviewed' },
  { value: 'approved', label: 'Approved' },
  { value: 'rejected', label: 'Rejected' },
]

// ─── Helpers ───────────────────────────────────────────────────────────────

function statusBadge(status: SubmissionStatus) {
  switch (status) {
    case 'approved':
    case 'training_ready':
      return (
        <Badge
          variant="outline"
          className="border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400"
        >
          {status === 'training_ready' ? 'Training ready' : 'Approved'}
        </Badge>
      )
    case 'rejected':
    case 'excluded_from_training':
      return (
        <Badge
          variant="outline"
          className="border-destructive/20 bg-destructive/10 text-destructive"
        >
          {status === 'excluded_from_training' ? 'Excluded' : 'Rejected'}
        </Badge>
      )
    case 'teacher_review_required':
      return (
        <Badge
          variant="outline"
          className="border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400"
        >
          Needs review
        </Badge>
      )
    case 'teacher_reviewed':
      return (
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
          Teacher reviewed
        </Badge>
      )
    case 'ai_marked':
      return (
        <Badge variant="outline" className="bg-muted text-muted-foreground border-border">
          AI marked
        </Badge>
      )
    case 'submitted':
    case 'pending':
    default:
      return (
        <Badge variant="outline" className="bg-muted/50 text-muted-foreground border-border">
          Awaiting AI
        </Badge>
      )
  }
}

function confidenceLabel(c: number | null): string {
  if (c === null || c === undefined) return '—'
  const pct = Math.round(c * 100)
  return `${pct}%`
}

function confidenceTone(c: number | null): string {
  if (c === null || c === undefined) return 'text-muted-foreground'
  if (c >= 0.8) return 'text-green-500'
  if (c >= 0.6) return 'text-amber-500'
  return 'text-destructive'
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleString(undefined, {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function truncate(s: string, n: number): string {
  if (s.length <= n) return s
  return s.slice(0, n).trimEnd() + '…'
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function SchoolMarkingPage() {
  const t = useT()
  const [submissions, setSubmissions] = useState<MarkingSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<SubmissionStatus | 'all'>('all')

  // Drawer state
  const [activeId, setActiveId] = useState<string | null>(null)
  const [overrideGrade, setOverrideGrade] = useState<string>('')
  const [overrideComment, setOverrideComment] = useState<string>('')
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  // ── Teacher decision (review / moderation) state ──────────────────────────
  // The AI mark is a draft; this is the editable final teacher decision.
  const [reviewGrade, setReviewGrade] = useState<string>('')
  const [reviewFeedback, setReviewFeedback] = useState<string>('')
  const [reviewReason, setReviewReason] = useState<string>('')
  const [reviewNotes, setReviewNotes] = useState<string>('')
  const [reviewTraining, setReviewTraining] = useState<boolean>(false)
  // Which decision button is mid-flight (null = idle).
  const [reviewBusy, setReviewBusy] = useState<ReviewDecision | null>(null)
  const [reviewError, setReviewError] = useState<string | null>(null)

  // ── Fetch ────────────────────────────────────────────────────────────────

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setLoadError(null)
        const res = await fetch('/api/school/marking', { cache: 'no-store' })
        if (!res.ok) {
          const body = (await res.json().catch(() => ({}))) as { error?: string }
          throw new Error(body.error ?? 'Failed to load submissions')
        }
        const data = (await res.json()) as { submissions: MarkingSubmission[] }
        if (!cancelled) setSubmissions(data.submissions ?? [])
      } catch (err) {
        if (!cancelled) {
          setLoadError(err instanceof Error ? err.message : 'Could not load submissions')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  const active = useMemo(
    () => submissions.find((s) => s.id === activeId) ?? null,
    [submissions, activeId],
  )

  // Sync drawer form when the active submission changes.
  useEffect(() => {
    if (active) {
      setOverrideGrade(active.teacher_grade ?? active.ai_grade ?? '')
      setOverrideComment(active.teacher_comment ?? '')
      setSaveError(null)
      // Prefill the teacher-decision form: final teacher values first, then
      // any earlier override, then the AI draft as the starting point.
      setReviewGrade(active.final_teacher_mark ?? active.teacher_grade ?? active.ai_grade ?? '')
      setReviewFeedback(
        active.final_teacher_feedback ?? active.teacher_comment ?? active.ai_feedback ?? '',
      )
      setReviewReason(active.teacher_adjustment_reason ?? '')
      setReviewNotes(active.moderation_notes ?? '')
      setReviewTraining(active.training_eligible === true)
      setReviewError(null)
    } else {
      setOverrideGrade('')
      setOverrideComment('')
      setSaveError(null)
      setReviewGrade('')
      setReviewFeedback('')
      setReviewReason('')
      setReviewNotes('')
      setReviewTraining(false)
      setReviewError(null)
    }
  }, [active])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return submissions.filter((s) => {
      if (statusFilter !== 'all' && s.status !== statusFilter) return false
      if (!q) return true
      return (
        s.student_name.toLowerCase().includes(q) ||
        (s.essay_title ?? '').toLowerCase().includes(q) ||
        s.essay_text.toLowerCase().includes(q) ||
        (s.exam_board ?? '').toLowerCase().includes(q)
      )
    })
  }, [submissions, search, statusFilter])

  // ── Save override ────────────────────────────────────────────────────────

  async function handleSave() {
    if (!active) return
    if (!overrideGrade) {
      setSaveError('Please choose a grade.')
      return
    }
    setSaving(true)
    setSaveError(null)
    try {
      const res = await fetch('/api/school/marking/override', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submissionId: active.id,
          teacherGrade: overrideGrade,
          teacherComment: overrideComment.trim() || null,
        }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error ?? 'Failed to save override')
      }
      const updated = (await res.json()) as { submission: MarkingSubmission }
      setSubmissions((prev) =>
        prev.map((s) => (s.id === updated.submission.id ? updated.submission : s)),
      )
      setActiveId(null)
    } catch (err) {
      setSaveError(err instanceof Error ? err.message : 'Could not save override')
    } finally {
      setSaving(false)
    }
  }

  // ── Teacher decision (review / moderation) ────────────────────────────────

  async function handleReview(decision: ReviewDecision) {
    if (!active || reviewBusy) return
    setReviewBusy(decision)
    setReviewError(null)
    try {
      const res = await fetch(`/api/marking/${active.id}/review`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          decision,
          teacherGrade: reviewGrade || null,
          teacherFeedback: reviewFeedback.trim() || null,
          adjustmentReason: reviewReason.trim() || null,
          moderationNotes: reviewNotes.trim() || null,
          trainingEligible: reviewTraining,
        }),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error ?? 'Failed to submit decision')
      }
      const updated = (await res.json()) as { submission: MarkingSubmission }
      setSubmissions((prev) =>
        prev.map((s) => (s.id === updated.submission.id ? updated.submission : s)),
      )
      // Approve / reject are terminal — close the drawer. Correct / send-back
      // stay in the queue, so keep the drawer open for further edits.
      if (decision === 'approve' || decision === 'reject') {
        setActiveId(null)
      }
    } catch (err) {
      setReviewError(err instanceof Error ? err.message : 'Could not submit decision')
    } finally {
      setReviewBusy(null)
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5 text-primary" />
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                Marking Review
              </h1>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Review AI-marked essays from your students and override grades where needed.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[12rem] max-w-sm">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by student, title or text…"
              className="pl-8"
            />
          </div>

          <Select
            value={statusFilter}
            onValueChange={(v) => setStatusFilter(v as SubmissionStatus | 'all')}
          >
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {(search || statusFilter !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearch('')
                setStatusFilter('all')
              }}
            >
              <X className="h-3.5 w-3.5" />
              Clear
            </Button>
          )}
        </div>

        <Separator className="mb-4" />

        {/* Loading */}
        {loading && (
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-14 w-full rounded-lg" />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && loadError && (
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="flex items-center gap-3 py-6">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              <p className="text-sm text-destructive">{loadError}</p>
            </CardContent>
          </Card>
        )}

        {/* Empty */}
        {!loading && !loadError && submissions.length === 0 && (
          <Card className="border-dashed">
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">No submissions yet</h3>
              <p className="max-w-md text-sm text-muted-foreground">
                Once your students submit essays, they will appear here for review with AI-generated
                grades and feedback.
              </p>
            </CardContent>
          </Card>
        )}

        {/* No filter results */}
        {!loading && !loadError && submissions.length > 0 && filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border py-12 text-center">
            <Search className="mx-auto mb-2 h-8 w-8 text-muted-foreground opacity-50" />
            <p className="text-sm text-muted-foreground">No submissions match your filters.</p>
          </div>
        )}

        {/* Table */}
        {!loading && !loadError && filtered.length > 0 && (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-muted/40 text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th scope="col" className="px-3 py-2.5 font-medium">
                      Student
                    </th>
                    <th scope="col" className="px-3 py-2.5 font-medium">
                      Essay
                    </th>
                    <th scope="col" className="px-3 py-2.5 font-medium">
                      Board
                    </th>
                    <th scope="col" className="px-3 py-2.5 font-medium">
                      AI grade
                    </th>
                    <th scope="col" className="px-3 py-2.5 font-medium">
                      Confidence
                    </th>
                    <th scope="col" className="px-3 py-2.5 font-medium">
                      Submitted
                    </th>
                    <th scope="col" className="px-3 py-2.5 font-medium">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((s) => (
                    <tr
                      key={s.id}
                      className={cn(
                        'cursor-pointer transition-colors hover:bg-accent/40 focus-within:bg-accent/40',
                        activeId === s.id && 'bg-accent/30',
                      )}
                      onClick={() => setActiveId(s.id)}
                    >
                      <td className="px-3 py-2.5 font-medium text-foreground">
                        <div className="flex flex-col">
                          <span className="truncate">{s.student_name}</span>
                          <span className="text-xs text-muted-foreground truncate">
                            {s.class_name}
                          </span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground max-w-[18rem]">
                        <div className="flex flex-col">
                          {s.essay_title && (
                            <span className="font-medium text-foreground truncate">
                              {s.essay_title}
                            </span>
                          )}
                          <span className="truncate">{truncate(s.essay_text, 80)}</span>
                        </div>
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground">{s.exam_board ?? '—'}</td>
                      <td className="px-3 py-2.5 font-semibold text-foreground tabular-nums">
                        {s.teacher_grade ? (
                          <span className="text-primary">
                            {s.teacher_grade}
                            <span className="ml-1 text-[10px] font-normal text-muted-foreground">
                              (override)
                            </span>
                          </span>
                        ) : (
                          (s.ai_grade ?? '—')
                        )}
                      </td>
                      <td
                        className={cn(
                          'px-3 py-2.5 tabular-nums font-medium',
                          confidenceTone(s.ai_confidence),
                        )}
                      >
                        {confidenceLabel(s.ai_confidence)}
                      </td>
                      <td className="px-3 py-2.5 text-muted-foreground whitespace-nowrap">
                        {formatDate(s.submitted_at)}
                      </td>
                      <td className="px-3 py-2.5">{statusBadge(s.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* ── Drawer ─────────────────────────────────────────────────────────── */}
      <Sheet
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActiveId(null)
        }}
      >
        <SheetContent
          side="right"
          className="flex w-full flex-col gap-0 overflow-hidden sm:max-w-2xl"
        >
          {active && (
            <>
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <span>{active.student_name}</span>
                  <span className="text-muted-foreground font-normal">·</span>
                  <span className="text-sm text-muted-foreground">{active.class_name}</span>
                </SheetTitle>
                <SheetDescription>
                  {active.essay_title ?? 'Untitled essay'}
                  {active.exam_board ? ` · ${active.exam_board}` : ''}
                </SheetDescription>
              </SheetHeader>

              <Separator />

              <div className="flex-1 space-y-5 overflow-y-auto p-4">
                {/* Essay text */}
                <section>
                  <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Essay
                  </h3>
                  <div className="max-h-64 overflow-y-auto whitespace-pre-wrap rounded-lg border border-border bg-muted/30 p-3 text-sm leading-relaxed text-foreground">
                    {active.essay_text}
                  </div>
                </section>

                {/* AI band marks */}
                <section>
                  <h3 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    <Sparkles className="h-3.5 w-3.5" />
                    AI band marks
                  </h3>
                  {active.ai_band_marks.length === 0 ? (
                    <p className="text-sm text-muted-foreground">No band-level marks recorded.</p>
                  ) : (
                    <div className="space-y-2">
                      {active.ai_band_marks.map((b) => {
                        const pct = b.max > 0 ? (b.score / b.max) * 100 : 0
                        return (
                          <div key={b.band}>
                            <div className="mb-0.5 flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">{b.band}</span>
                              <span className="font-semibold text-foreground tabular-nums">
                                {b.score} / {b.max}
                              </span>
                            </div>
                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                              <div
                                className="h-full rounded-full bg-primary transition-all duration-500"
                                style={{ width: `${Math.min(pct, 100)}%` }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                  <div className="mt-3 flex items-center gap-3 text-sm">
                    <span className="text-muted-foreground">Overall:</span>
                    <span className="font-semibold text-foreground">{active.ai_grade ?? '—'}</span>
                    <span
                      className={cn(
                        'text-xs font-medium tabular-nums',
                        confidenceTone(active.ai_confidence),
                      )}
                    >
                      {confidenceLabel(active.ai_confidence)} confidence
                    </span>
                  </div>
                </section>

                {/* AI feedback */}
                <section>
                  <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    AI feedback
                  </h3>
                  <div className="whitespace-pre-wrap rounded-lg border border-border bg-muted/30 p-3 text-sm leading-relaxed text-foreground">
                    {active.ai_feedback?.trim() || 'No AI feedback available.'}
                  </div>
                </section>

                {/* Teacher decision — the editable final mark + moderation.
                    The AI mark above is only a draft; approving here is what
                    sets the submission to 'approved'. Kept compact for speed. */}
                <section>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t('marking.teacherDecision') || 'Teacher decision'}
                    </h3>
                    {active.latest_moderation && (
                      <span className="text-[11px] text-muted-foreground">
                        {t('marking.lastAction') || 'Last action'}:{' '}
                        {active.latest_moderation.decision} ·{' '}
                        {formatDate(active.latest_moderation.created_at)}
                      </span>
                    )}
                  </div>
                  <div className="space-y-3 rounded-lg border border-primary/20 bg-primary/5 p-3">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                      <div className="space-y-1.5">
                        <Label htmlFor="review-grade">
                          {t('marking.finalGrade') || 'Final grade'}
                        </Label>
                        <Select value={reviewGrade} onValueChange={setReviewGrade}>
                          <SelectTrigger id="review-grade" className="w-32">
                            <SelectValue placeholder="Grade" />
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
                      <div className="flex items-center gap-2 pb-2 sm:pb-0">
                        <Switch
                          id="review-training"
                          checked={reviewTraining}
                          onCheckedChange={(v: boolean) => setReviewTraining(v)}
                        />
                        <Label htmlFor="review-training" className="cursor-pointer text-sm">
                          {t('marking.suitableForTraining') || 'Suitable for training'}
                        </Label>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="review-feedback">
                        {t('marking.feedbackToStudent') || 'Feedback to student'}
                      </Label>
                      <Textarea
                        id="review-feedback"
                        value={reviewFeedback}
                        onChange={(e) => setReviewFeedback(e.target.value)}
                        placeholder="Final feedback the student will see…"
                        rows={5}
                      />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="review-reason">
                          {t('marking.adjustmentReason') || 'Adjustment reason'}
                        </Label>
                        <Textarea
                          id="review-reason"
                          value={reviewReason}
                          onChange={(e) => setReviewReason(e.target.value)}
                          placeholder="Why the AI mark was changed (internal)…"
                          rows={2}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="review-notes">
                          {t('marking.moderationNotes') || 'Moderation notes'}
                        </Label>
                        <Textarea
                          id="review-notes"
                          value={reviewNotes}
                          onChange={(e) => setReviewNotes(e.target.value)}
                          placeholder="Internal moderation notes (not shown to student)…"
                          rows={2}
                        />
                      </div>
                    </div>

                    {reviewError && <p className="text-sm text-destructive">{reviewError}</p>}

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <Button
                        type="button"
                        className="flex-1 bg-green-600 text-white hover:bg-green-700"
                        onClick={() => handleReview('approve')}
                        disabled={reviewBusy !== null}
                      >
                        {reviewBusy === 'approve' ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4" />
                        )}
                        {t('marking.approve') || 'Approve'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-amber-500/40 text-amber-600 hover:bg-amber-500/10 dark:text-amber-400"
                        onClick={() => handleReview('send_back')}
                        disabled={reviewBusy !== null}
                      >
                        {reviewBusy === 'send_back' ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Undo2 className="h-4 w-4" />
                        )}
                        {t('marking.sendBack') || 'Send back to student'}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1 border-destructive/40 text-destructive hover:bg-destructive/10"
                        onClick={() => handleReview('reject')}
                        disabled={reviewBusy !== null}
                      >
                        {reviewBusy === 'reject' ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <XCircle className="h-4 w-4" />
                        )}
                        {t('marking.reject') || 'Reject'}
                      </Button>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      {t('marking.draftHint') ||
                        'The AI mark is a draft. Approving records the final teacher mark and locks the submission.'}
                    </p>
                  </div>
                </section>

                {/* Teacher override form */}
                <section>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Teacher override
                  </h3>
                  <div className="space-y-3 rounded-lg border border-border bg-card p-3">
                    <div className="space-y-1.5">
                      <Label htmlFor="override-grade">New grade</Label>
                      <Select value={overrideGrade} onValueChange={setOverrideGrade}>
                        <SelectTrigger id="override-grade" className="w-40">
                          <SelectValue placeholder="Select grade" />
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

                    <div className="space-y-1.5">
                      <Label htmlFor="override-comment">Comment</Label>
                      <Textarea
                        id="override-comment"
                        value={overrideComment}
                        onChange={(e) => setOverrideComment(e.target.value)}
                        placeholder="Optional commentary visible to the student…"
                        rows={5}
                      />
                    </div>

                    {saveError && <p className="text-sm text-destructive">{saveError}</p>}
                  </div>
                </section>
              </div>

              <div className="border-t border-border p-4">
                <div className="flex items-center justify-end gap-2">
                  <Button variant="outline" onClick={() => setActiveId(null)} disabled={saving}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave} disabled={saving || !overrideGrade}>
                    {saving && <Loader2 className="h-4 w-4 animate-spin" />}
                    {saving ? 'Saving…' : 'Save override'}
                  </Button>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}

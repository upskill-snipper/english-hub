'use client'

// ─── Reviewing one essay ────────────────────────────────────────────────────
//
// The teacher's half of "every essay a pupil submits for marking goes to
// their class teacher with the mark for each objective; teachers approve or
// adjust it". Decisions go to POST /api/marking/[submissionId]/review with
// ao_corrections built by ./review-body.ts.
//
// Two things the old drawer did that this one deliberately does not:
//   * a second "Teacher override" form that posted to
//     /api/school/marking/override, which writes a grade with no
//     teacher_moderations record, so the decision vanished from the history
//     and from every analytics view;
//   * a "Suitable for training" switch. Whether a child's essay may train the
//     AI is a consent question for the school as data controller, not a
//     per-essay toggle in a marking queue.
// ────────────────────────────────────────────────────────────────────────────

import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2, Loader2, Save, Undo2, XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useT } from '@/lib/i18n/use-t'
import { useFormatDate } from '@/lib/i18n/use-format-date'
import type { SubmissionDetail } from '@/app/api/school/marking/[submissionId]/route'
import { ObjectiveMarksEditor } from './ObjectiveMarksEditor'
import { StatusBadge } from './StatusBadge'
import { decisionLabelKey } from './status'
import {
  buildAoCorrections,
  buildReviewBody,
  initialEdit,
  type ObjectiveEdit,
  type ReviewBody,
  type ReviewDecision,
} from './review-body'

/** The grades the review route accepts. */
const GRADE_OPTIONS = ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'] as const

function initialEdits(detail: SubmissionDetail): Record<string, ObjectiveEdit> {
  return Object.fromEntries(detail.objectives.map((o) => [o.ao, initialEdit(o)]))
}

export function ReviewPanel({
  detail,
  onDecision,
}: {
  detail: SubmissionDetail
  /** Posts the decision. Resolves on success; rejects with a message to show. */
  onDecision: (decision: ReviewDecision, body: ReviewBody) => Promise<void>
}) {
  const t = useT()
  const fmt = useFormatDate()

  const [edits, setEdits] = useState<Record<string, ObjectiveEdit>>(() => initialEdits(detail))
  const [grade, setGrade] = useState(detail.finalGrade ?? detail.aiGrade ?? '')
  const [feedback, setFeedback] = useState(detail.finalFeedback ?? '')
  const [reason, setReason] = useState(detail.adjustmentReason ?? '')
  const [notes, setNotes] = useState(detail.moderationNotes ?? '')
  const [invalid, setInvalid] = useState<string[]>([])
  const [busy, setBusy] = useState<ReviewDecision | null>(null)
  const [error, setError] = useState<string | null>(null)

  // A different essay, or the same one reloaded after a decision.
  useEffect(() => {
    setEdits(initialEdits(detail))
    setGrade(detail.finalGrade ?? detail.aiGrade ?? '')
    setFeedback(detail.finalFeedback ?? '')
    setReason(detail.adjustmentReason ?? '')
    setNotes(detail.moderationNotes ?? '')
    setInvalid([])
    setError(null)
  }, [detail])

  const anyAdjusted = useMemo(
    () =>
      detail.objectives.some((o) => {
        const mark = (edits[o.ao] ?? initialEdit(o)).mark.trim()
        return mark !== '' && Number(mark) !== o.aiMarks
      }),
    [detail.objectives, edits],
  )

  async function decide(decision: ReviewDecision) {
    if (busy) return
    const built = buildAoCorrections(detail.objectives, edits)
    if (!built.ok) {
      setInvalid(built.invalid)
      setError(t('school.queue.drawer.fix_marks'))
      return
    }
    setInvalid([])
    setError(null)
    setBusy(decision)
    try {
      await onDecision(
        decision,
        buildReviewBody(decision, { grade, feedback, reason, notes }, built.corrections),
      )
    } catch (err) {
      setError(err instanceof Error ? err.message : t('school_marking_review.submit_error'))
    } finally {
      setBusy(null)
    }
  }

  const spinner = <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <StatusBadge status={detail.status} />
        <span>{fmt(detail.submittedAt)}</span>
        <span aria-hidden="true">·</span>
        <span>{t('school.queue.words').replace('{n}', String(detail.wordCount))}</span>
      </div>

      {detail.questionText ? (
        <section>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('school.queue.drawer.question')}
          </h3>
          <p className="whitespace-pre-wrap text-sm text-foreground">{detail.questionText}</p>
        </section>
      ) : null}

      <section>
        <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t('school.queue.drawer.essay')}
        </h3>
        <div className="max-h-72 overflow-y-auto whitespace-pre-wrap rounded-lg border border-border bg-muted/30 p-3 text-sm leading-relaxed text-foreground">
          {detail.essayText}
        </div>
      </section>

      <section>
        <h3 className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t('school.queue.drawer.objectives')}
        </h3>
        <p className="mb-3 text-xs text-muted-foreground">
          {t('school.queue.drawer.objectives_hint')}
        </p>
        <ObjectiveMarksEditor
          objectives={detail.objectives}
          edits={edits}
          invalid={invalid}
          disabled={busy !== null}
          onChange={(ao, edit) => setEdits((prev) => ({ ...prev, [ao]: edit }))}
        />
      </section>

      {detail.aiFeedback ? (
        <section>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('school.queue.drawer.ai_feedback')}
          </h3>
          <p className="whitespace-pre-wrap rounded-lg border border-border bg-muted/30 p-3 text-sm leading-relaxed text-foreground">
            {detail.aiFeedback}
          </p>
        </section>
      ) : null}

      <section className="space-y-4 rounded-lg border border-primary/20 bg-primary/5 p-3">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {t('school_marking_review.section_title')}
        </h3>

        <div className="space-y-1.5">
          <Label htmlFor="review-grade">{t('school_marking_review.final_grade_label')}</Label>
          <Select value={grade} onValueChange={(v) => setGrade(String(v ?? ''))}>
            <SelectTrigger id="review-grade" className="w-32">
              <SelectValue placeholder={t('school_marking_review.grade_placeholder')} />
            </SelectTrigger>
            <SelectContent>
              {GRADE_OPTIONS.map((g) => (
                <SelectItem key={g} value={g}>
                  {g}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground">
            {detail.aiGrade
              ? t('school.queue.drawer.ai_grade').replace('{grade}', detail.aiGrade)
              : t('school.queue.drawer.ai_grade_none')}
            {detail.aiGrade && detail.aiGradeIndicative
              ? ` ${t('school.queue.drawer.ai_grade_indicative')}`
              : ''}
          </p>
          {anyAdjusted ? (
            <p className="text-xs text-amber-800 dark:text-amber-300">
              {t('school.queue.drawer.grade_check')}
            </p>
          ) : null}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="review-feedback">{t('school.queue.drawer.your_feedback')}</Label>
          <Textarea
            id="review-feedback"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={t('school.queue.drawer.your_feedback_placeholder')}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="review-reason">
              {t('school_marking_review.adjustment_reason_label')}
            </Label>
            <Textarea
              id="review-reason"
              rows={2}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder={t('school_marking_review.adjustment_reason_placeholder')}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="review-notes">
              {t('school_marking_review.moderation_notes_label')}
            </Label>
            <Textarea
              id="review-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder={t('school_marking_review.moderation_notes_placeholder')}
            />
          </div>
        </div>

        {error ? (
          <p role="alert" className="text-sm text-destructive">
            {error}
          </p>
        ) : null}

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <Button
            type="button"
            className="bg-green-700 text-white hover:bg-green-800 sm:flex-1"
            onClick={() => decide('approve')}
            disabled={busy !== null}
          >
            {busy === 'approve' ? spinner : <CheckCircle2 className="h-4 w-4" aria-hidden="true" />}
            {t('school.queue.drawer.approve')}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="sm:flex-1"
            onClick={() => decide('correct')}
            disabled={busy !== null}
          >
            {busy === 'correct' ? spinner : <Save className="h-4 w-4" aria-hidden="true" />}
            {t('school.queue.drawer.save')}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-sky-500/40 text-sky-700 hover:bg-sky-500/10 dark:text-sky-300 sm:flex-1"
            onClick={() => decide('send_back')}
            disabled={busy !== null}
          >
            {busy === 'send_back' ? spinner : <Undo2 className="h-4 w-4" aria-hidden="true" />}
            {t('school.queue.drawer.return')}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="border-destructive/40 text-destructive hover:bg-destructive/10 sm:flex-1"
            onClick={() => decide('reject')}
            disabled={busy !== null}
          >
            {busy === 'reject' ? spinner : <XCircle className="h-4 w-4" aria-hidden="true" />}
            {t('school.queue.drawer.reject')}
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">{t('school.queue.drawer.decision_hint')}</p>
      </section>

      {detail.history.length > 0 ? (
        <section>
          <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            {t('school.queue.drawer.history')}
          </h3>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {detail.history.map((h, i) => (
              <li key={`${h.at}-${i}`}>
                <span className="text-foreground">{t(decisionLabelKey(h.decision))}</span>
                {h.grade
                  ? ` · ${t('school.queue.drawer.grade_short').replace('{grade}', h.grade)}`
                  : ''}
                {h.at ? ` · ${fmt(h.at)}` : ''}
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}

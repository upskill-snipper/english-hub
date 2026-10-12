'use client'

// ─── The AI's mark for each assessment objective, and the teacher's ────────
//
// Replaces the "AI band marks" panel, which read marking_submissions
// .ai_band_marks. Nothing has written that column since the marking spine
// moved to ai_ao_breakdown, so every essay showed "No band-level marks
// recorded" and the teacher never saw the per-objective mark the school had
// been promised. This shows ai_ao_breakdown: each objective's mark against
// its maximum, the AI's comment, and an input for the teacher's own mark.
// ────────────────────────────────────────────────────────────────────────────

import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import { initialEdit, totals, type ObjectiveEdit, type ObjectiveForReview } from './review-body'

export interface ObjectiveRow extends ObjectiveForReview {
  label: string | null
  aiComment: string | null
}

export function ObjectiveMarksEditor({
  objectives,
  edits,
  invalid,
  disabled,
  onChange,
}: {
  objectives: readonly ObjectiveRow[]
  edits: Readonly<Record<string, ObjectiveEdit | undefined>>
  invalid: readonly string[]
  disabled?: boolean
  onChange: (ao: string, edit: ObjectiveEdit) => void
}) {
  const t = useT()

  if (objectives.length === 0) {
    return <p className="text-sm text-muted-foreground">{t('school.queue.drawer.no_objectives')}</p>
  }

  const sum = totals(objectives, edits)

  return (
    <div className="space-y-3">
      <ul className="space-y-3">
        {objectives.map((o) => {
          const edit = edits[o.ao] ?? initialEdit(o)
          const bad = invalid.includes(o.ao)
          const changed = edit.mark.trim() !== '' && Number(edit.mark) !== o.aiMarks
          const markId = `ao-mark-${o.ao}`
          const commentId = `ao-comment-${o.ao}`
          return (
            <li key={o.ao} className="rounded-lg border border-border bg-card p-3">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="min-w-0 text-sm">
                  <span className="font-semibold text-foreground">{o.ao}</span>
                  {o.label ? <span className="ms-2 text-muted-foreground">{o.label}</span> : null}
                </p>
                <p className="text-sm tabular-nums text-muted-foreground">
                  {t('school.queue.drawer.ai_mark')}{' '}
                  <span className="font-semibold text-foreground">
                    {o.aiMarks} / {o.maxMarks}
                  </span>
                </p>
              </div>

              {o.aiComment ? (
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {t('school.queue.drawer.ai_comment')}:
                  </span>{' '}
                  {o.aiComment}
                </p>
              ) : null}

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Label htmlFor={markId} className="text-sm">
                  {t('school.queue.drawer.your_mark')}
                </Label>
                <Input
                  id={markId}
                  type="number"
                  inputMode="numeric"
                  min={0}
                  max={o.maxMarks}
                  step={1}
                  value={edit.mark}
                  disabled={disabled}
                  aria-invalid={bad || undefined}
                  aria-describedby={bad ? `${markId}-error` : undefined}
                  onChange={(e) => onChange(o.ao, { ...edit, mark: e.target.value })}
                  className={cn('w-20 tabular-nums', bad && 'border-destructive')}
                />
                <span className="text-sm text-muted-foreground">
                  {t('school.queue.drawer.out_of').replace('{max}', String(o.maxMarks))}
                </span>
                {changed && !bad ? (
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary">
                    {t('school.queue.drawer.adjusted')}
                  </Badge>
                ) : null}
              </div>
              {bad ? (
                <p id={`${markId}-error`} className="mt-1 text-xs text-destructive">
                  {t('school.queue.drawer.mark_invalid').replace('{max}', String(o.maxMarks))}
                </p>
              ) : null}

              <Label htmlFor={commentId} className="sr-only">
                {t('school.queue.drawer.your_comment')}
              </Label>
              <Textarea
                id={commentId}
                rows={2}
                value={edit.comment}
                disabled={disabled}
                placeholder={t('school.queue.drawer.your_comment')}
                onChange={(e) => onChange(o.ao, { ...edit, comment: e.target.value })}
                className="mt-2 text-sm"
              />
            </li>
          )
        })}
      </ul>

      <p className="text-sm tabular-nums text-muted-foreground">
        {sum.yours === null
          ? t('school.queue.drawer.total_ai_only')
              .replace('{ai}', String(sum.ai))
              .replace('{max}', String(sum.max))
          : t('school.queue.drawer.total_line')
              .replace('{ai}', String(sum.ai))
              .replace('{yours}', String(sum.yours))
              .replaceAll('{max}', String(sum.max))}
      </p>
    </div>
  )
}

'use client'

/**
 * A person's decision on an AI mark, and the note a class pupil sees before
 * one is made.
 *
 * WHY THESE EXIST (12 October 2026). Calum decided that a school pupil sees
 * their AI feedback straight away, labelled as AI, exactly as an individual
 * pupil does; their teacher reviews it afterwards and may change the mark,
 * and the pupil then sees the teacher's decision. The results page used to
 * fold a teacher's comment into the AI's summary card and show the teacher's
 * mark in the "Predicted grade" circle, so a pupil could not tell a person's
 * mark from the AI's (and, reading the wrong field names, it never showed
 * either). The decision now has its own card, above the AI's result, and the
 * AI's result keeps its AI label.
 *
 * Copy falls back to English while a key is missing from the pre-generated
 * locale maps, the same defensive pattern the results page uses.
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useT } from '@/lib/i18n/use-t'
import type { ReviewDecision } from '@/lib/marking/results-view'

function withFallback(t: (k: string) => string, key: string, fallback: string): string {
  const value = t(key)
  return value === `[[${key}]]` || value === key ? fallback : value
}

const STATUS_COPY: Record<ReviewDecision['status'], [string, string]> = {
  approved: ['marking.results.review.approved', 'This mark has been checked and approved.'],
  teacher_reviewed: [
    'marking.results.review.reviewed',
    "This essay has been reviewed. A mark shown here replaces the AI's predicted grade.",
  ],
  returned: [
    'marking.results.review.returned',
    'This essay has been sent back to you with comments.',
  ],
}

export function ReviewDecisionCard({
  review,
  className,
}: {
  review: ReviewDecision
  className?: string
}) {
  const t = useT()
  const heading = review.byTeacher
    ? withFallback(t, 'marking.results.review.heading_teacher', "Your teacher's decision")
    : withFallback(t, 'marking.results.review.heading_reviewer', "A reviewer's decision")

  return (
    <Card className={cn('border-primary/40 bg-primary/5', className)} data-testid="review-decision">
      <CardHeader>
        <CardTitle>{heading}</CardTitle>
        <CardDescription>{withFallback(t, ...STATUS_COPY[review.status])}</CardDescription>
      </CardHeader>
      {(review.mark || review.comment) && (
        <CardContent className="space-y-3">
          {review.mark && (
            <p className="flex items-baseline gap-3">
              <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {withFallback(t, 'marking.results.review.mark_label', 'Mark')}
              </span>
              <span
                className="font-heading text-4xl font-extrabold text-primary"
                data-testid="review-mark"
              >
                {review.mark}
              </span>
            </p>
          )}
          {review.comment && (
            <div>
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                {withFallback(t, 'marking.results.review.comments_label', 'Comments')}
              </p>
              <p
                className="mt-1 whitespace-pre-line text-sm leading-relaxed text-foreground"
                data-testid="review-comment"
              >
                {review.comment}
              </p>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}

/** Shown on class work the AI has marked and no teacher has reviewed yet. */
export function SchoolReviewNote({ className }: { className?: string }) {
  const t = useT()
  return (
    <p
      role="note"
      className={cn(
        'rounded-lg border border-border bg-muted/40 px-4 py-3 text-sm text-muted-foreground',
        className,
      )}
      data-testid="school-review-note"
    >
      {withFallback(
        t,
        'marking.results.school_review_note',
        'Your teacher will look at this AI mark and may change it. If they do, their decision will appear on this page.',
      )}
    </p>
  )
}

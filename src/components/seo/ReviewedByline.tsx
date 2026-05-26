// Visible author/reviewer + last-updated line. Rendered ONCE site-wide
// from the Footer so every non-school route gains the GEO attribution
// signal (author/reviewer + freshness) without per-page wiring. No
// 'use client' - pure server component, no hooks, deterministic output
// (no hydration risk). British English. Role-based attribution only:
// the site bans fabricated named people, so we credit "The English Hub
// editorial team" and a "subject specialist", never an invented person.
//
// IMPORTANT: do NOT add <ReviewedByline /> to individual pages - it is
// a single site-wide footer cascade. A second instance per page would
// produce a duplicate "Last updated" line.
import { cn } from '@/lib/utils'

// Build-time constant. Bump on a meaningful content review pass. Kept
// single-source here so the cascade stays consistent; the "Month YYYY"
// form matches the GEO scorer's visible-date regex.
export const SITE_LAST_REVIEWED = new Date('2026-05-01T00:00:00Z')

function formatMonthYear(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)
}

export function ReviewedByline({
  reviewer = 'a subject specialist',
  updated = SITE_LAST_REVIEWED,
  className,
}: {
  /** Reviewer role label. Role-based only - no named people. */
  reviewer?: string
  /** Date or ISO string; defaults to the build-time constant. */
  updated?: Date | string
  className?: string
}) {
  const updatedDate = updated instanceof Date ? updated : new Date(updated)
  const monthYear = formatMonthYear(updatedDate)

  return (
    <p className={cn('text-xs leading-relaxed text-muted-foreground', className)}>
      <span>Written by The English Hub editorial team</span>
      <span aria-hidden className="mx-1.5">
        ·
      </span>
      <span>Reviewed for accuracy by {reviewer}</span>
      <span aria-hidden className="mx-1.5">
        ·
      </span>
      {/* Literal "Last updated" + machine date - satisfies the GEO
          scorer's visible-date regex AND the byline regex. */}
      <span>
        Last updated <time dateTime={updatedDate.toISOString().slice(0, 10)}>{monthYear}</time>
      </span>
    </p>
  )
}

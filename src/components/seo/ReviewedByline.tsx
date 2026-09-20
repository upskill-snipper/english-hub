// Visible author/reviewer + last-updated line. Rendered ONCE site-wide
// from the Footer so every non-school route gains the attribution signal
// (author/reviewer + freshness) without per-page wiring. British English.
// Role-based attribution only: the site bans fabricated named people, so we
// credit "The English Hub editorial team" and a "subject specialist", never
// an invented person.
//
// IMPORTANT: do NOT add <ReviewedByline /> to individual pages - it is
// a single site-wide footer cascade. A second instance per page would
// produce a duplicate "Last updated" line.
//
// ─── THE DATE (corrected 20 September 2026) ─────────────────────────────────
//
// This module used to export `SITE_LAST_REVIEWED = new Date('2026-05-01')` and
// print "Last updated May 2026" in the footer of all 1,071 pages - including
// pages edited that same morning, and including every page whose sitemap entry
// had just been given a real per-route lastmod the day before. The visible date
// and the machine date disagreed on most of the site, and the visible one is
// what a reader and an answer engine weigh.
//
// The date now comes in as a prop: the root layout reads the route the
// middleware stamped on `x-pathname` and looks it up in
// src/lib/seo/route-lastmod.json, the same map the sitemap uses. The lookup is
// deliberately NOT done here - this renders inside the client footer, and
// importing that map would ship 62 KB of route dates to every visitor, which is
// the mistake this repository already paid for once with the trilingual
// dictionary.
//
// WHEN THE ROUTE IS UNKNOWN - a blog slug, a dynamic segment - the clause is
// omitted entirely rather than defaulted. A missing date costs a freshness
// signal; a wrong one is a false statement about the page, on the page.
//
// The old comment justified the "Month YYYY" format as matching "the GEO
// scorer's visible-date regex". There is no GEO scorer in this repository -
// grep says the phrase appears in three comments and nowhere else. The format
// is kept because it reads well and parses, not because anything checks it.
import { cn } from '@/lib/utils'

function formatMonthYear(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)
}

export function ReviewedByline({
  reviewer = 'a subject specialist',
  updated,
  className,
}: {
  /** Reviewer role label. Role-based only - no named people. */
  reviewer?: string
  /**
   * This page's own last-modified date, ISO or Date. Omit it and no date is
   * printed - see the note above on why there is no site-wide default.
   */
  updated?: Date | string
  className?: string
}) {
  const updatedDate = updated instanceof Date ? updated : updated ? new Date(updated) : null
  const valid = updatedDate && !Number.isNaN(updatedDate.getTime()) ? updatedDate : null

  return (
    <p className={cn('text-xs leading-relaxed text-muted-foreground', className)}>
      <span>Written by The English Hub editorial team</span>
      <span aria-hidden className="mx-1.5">
        ·
      </span>
      <span>Reviewed for accuracy by {reviewer}</span>
      {valid ? (
        <>
          <span aria-hidden className="mx-1.5">
            ·
          </span>
          <span>
            Last updated{' '}
            <time dateTime={valid.toISOString().slice(0, 10)}>{formatMonthYear(valid)}</time>
          </span>
        </>
      ) : null}
    </p>
  )
}

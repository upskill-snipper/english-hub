// ─── Locked content panel (server-renderable) ──────────────────────────────
// Shared lock panel for the "read free, do/deep-content paid" (Option C)
// paywall on GCSE premium pages. Mirrors the IELTS LockedBody/upsell visual
// style (blurred placeholder lines + a lock + an upgrade CTA) but uses plain
// links so it can render inside a Server Component with no client dependency.
//
// The page resolves `hasAccess` SERVER-SIDE (via hasActiveSubscription) and
// renders this panel in place of the deep worked answers for non-subscribers.
// The teaser content (intro, technique notes, and the lowest grade band / the
// first slice of an annotated essay) stays visible to everyone, including
// anonymous visitors and crawlers, so the page remains indexable.
// ────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'

export function LockedContent({
  /** Short description of what is gated, e.g. "the Grade 5, 7 and 9 answers". */
  label = 'the full worked answers',
}: {
  label?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
      {/* Blurred placeholder lines hint at the locked content beneath. */}
      <div aria-hidden className="space-y-2 select-none blur-sm">
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-5/6 rounded bg-muted" />
        <div className="h-4 w-11/12 rounded bg-muted" />
        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>

      {/* Lock message + CTAs */}
      <div className="mt-6 flex flex-col items-center text-center">
        <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Lock className="size-5" aria-hidden />
        </span>
        <h3 className="mt-4 text-lg font-bold text-foreground">Unlock {label}</h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          Create a free account to read every grade-band response, examiner commentary, and
          annotation. No card needed for the 7-day trial.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/auth/register"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Sign up free — 7-day trial, no card
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            See pricing
          </Link>
        </div>
      </div>
    </div>
  )
}

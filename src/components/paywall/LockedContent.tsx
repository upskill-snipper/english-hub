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
//
// THE DEFECT FIXED ON 10 NOVEMBER 2026. The panel only ever spoke to a
// signed-out visitor: "Create a free account", with its main button linking to
// /auth/register. A signed-in person without a plan (most often an ex-trialist)
// saw the same panel, and the middleware sends a signed-in user who opens
// /auth/register straight to /dashboard, so the main button on a paywall took
// a would-be buyer away from the content and the price. Pages now pass
// `signedIn`, and a signed-in reader is shown the plans instead.
// ────────────────────────────────────────────────────────────────────────────

import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'
import { PRICING } from '@/constants/pricing'

export function LockedContent({
  /** Short description of what is gated, e.g. "the Grade 5, 7 and 9 answers". */
  label = 'the full worked answers',
  /** True when the reader is signed in but has no plan: offer plans, not sign-up. */
  signedIn = false,
}: {
  label?: string
  signedIn?: boolean
}) {
  if (signedIn) {
    return (
      <div
        className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md sm:p-8"
        data-testid="locked-content-signed-in"
      >
        <div aria-hidden className="space-y-2 select-none blur-sm">
          <div className="h-4 w-3/4 rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="h-4 w-11/12 rounded bg-muted" />
          <div className="h-4 w-2/3 rounded bg-muted" />
        </div>
        <div className="mt-6 flex flex-col items-center text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="size-5" aria-hidden />
          </span>
          <h3 className="mt-4 text-lg font-bold text-foreground">Unlock {label}</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            Your account does not include these yet. A Student plan unlocks every grade-band
            response, examiner commentary and annotation, as well as AI marking for your own essays.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/pricing?plan=student_monthly"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              See plans
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <span className="text-xs text-muted-foreground">
              &pound;{PRICING.STUDENT_MONTHLY} a month, or &pound;{PRICING.STUDENT_ANNUAL} a year.
            </span>
          </div>
        </div>
      </div>
    )
  }

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
            Sign up free - 7-day trial, no card
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

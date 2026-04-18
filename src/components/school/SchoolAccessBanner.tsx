"use client"

import { CheckCircle, AlertTriangle, AlertCircle, XCircle, Calendar } from "lucide-react"

interface SchoolAccessBannerProps {
  accessType: "founder" | "paid" | "trial" | "expired"
  accessUntil: string | null
  schoolId: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getDaysRemaining(accessUntil: string | null): number | null {
  if (!accessUntil) return null
  const msRemaining = new Date(accessUntil).getTime() - Date.now()
  return Math.max(0, Math.ceil(msRemaining / (1000 * 60 * 60 * 24)))
}

function formatDate(iso: string | null): string {
  if (!iso) return "Aug 2026"
  return new Date(iso).toLocaleDateString("en-GB", { month: "short", year: "numeric" })
}

// ---------------------------------------------------------------------------
// Banner variants
// ---------------------------------------------------------------------------

function FounderActiveBanner({ accessUntil }: { accessUntil: string | null }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-green-700/40 bg-green-950/60 px-4 py-3 text-sm text-green-300">
      <CheckCircle className="h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
      <span>
        <span className="font-semibold text-green-200">FOUNDER access</span> active until{" "}
        <span className="font-medium">{formatDate(accessUntil ?? "2026-08-31")}</span>
      </span>
      <Calendar className="ml-auto h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
    </div>
  )
}

function FounderWarningSoonBanner({
  daysRemaining,
  schoolId,
}: {
  daysRemaining: number
  schoolId: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-amber-600/40 bg-amber-950/60 px-4 py-3 text-sm text-amber-700">
      <AlertTriangle className="h-4 w-4 shrink-0 text-clay-600" aria-hidden="true" />
      <span>
        <span className="font-semibold text-amber-700">{daysRemaining} days remaining</span> on your
        FOUNDER access &mdash; renew to keep access
      </span>
      <a
        href="/school/billing"
        className="ml-auto shrink-0 rounded-md bg-amber-700 px-3 py-1 text-xs font-semibold text-amber-50 transition-colors hover:bg-amber-600"
      >
        Renew now
      </a>
    </div>
  )
}

function FounderUrgentBanner({
  daysRemaining,
  schoolId,
}: {
  daysRemaining: number
  schoolId: string
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-red-600/50 bg-red-950/60 px-4 py-3 text-sm text-red-300">
      <AlertCircle className="h-4 w-4 shrink-0 animate-pulse text-red-400" aria-hidden="true" />
      <span>
        <span className="font-semibold text-red-200">
          {daysRemaining === 0 ? "Last day" : `${daysRemaining} day${daysRemaining === 1 ? "" : "s"} left`}
        </span>{" "}
        &mdash; your FOUNDER access is about to expire. Renew now to avoid disruption.
      </span>
      <a
        href="/school/billing"
        className="ml-auto shrink-0 rounded-md bg-red-700 px-3 py-1 text-xs font-semibold text-red-50 transition-colors hover:bg-red-600"
      >
        Renew urgently
      </a>
    </div>
  )
}

function ExpiredBanner({ schoolId }: { schoolId: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-red-700/60 bg-red-950/80 px-4 py-4 text-sm text-red-200">
      <XCircle className="h-5 w-5 shrink-0 text-red-400" aria-hidden="true" />
      <div className="min-w-0">
        <p className="font-semibold text-red-100">Access expired</p>
        <p className="mt-0.5 text-red-300">
          Your school no longer has active access. Contact us to renew and restore full access for
          all students and teachers.
        </p>
      </div>
      <a
        href="/school/billing"
        className="ml-auto shrink-0 rounded-md bg-red-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-red-500"
      >
        Restore access
      </a>
    </div>
  )
}

function PaidActiveBanner({ accessUntil }: { accessUntil: string | null }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-green-700/40 bg-green-950/60 px-4 py-3 text-sm text-green-300">
      <CheckCircle className="h-4 w-4 shrink-0 text-green-400" aria-hidden="true" />
      <span>
        School access is <span className="font-semibold text-green-200">active</span>
        {accessUntil ? (
          <>
            {" "}
            until <span className="font-medium">{formatDate(accessUntil)}</span>
          </>
        ) : null}
      </span>
    </div>
  )
}

function TrialActiveBanner({ accessUntil, schoolId }: { accessUntil: string | null; schoolId: string }) {
  const daysRemaining = getDaysRemaining(accessUntil)

  return (
    <div className="flex items-center gap-3 rounded-lg border border-amber-600/40 bg-amber-950/60 px-4 py-3 text-sm text-amber-700">
      <AlertTriangle className="h-4 w-4 shrink-0 text-clay-600" aria-hidden="true" />
      <span>
        <span className="font-semibold text-amber-700">Trial access</span>
        {daysRemaining !== null ? (
          <>
            {" "}
            &mdash; <span className="font-medium">{daysRemaining} day{daysRemaining === 1 ? "" : "s"} remaining</span>
          </>
        ) : null}
      </span>
      <a
        href="/school/billing"
        className="ml-auto shrink-0 rounded-md bg-amber-700 px-3 py-1 text-xs font-semibold text-amber-50 transition-colors hover:bg-amber-600"
      >
        Upgrade to full access
      </a>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function SchoolAccessBanner({ accessType, accessUntil, schoolId }: SchoolAccessBannerProps) {
  // Expired — always show full red banner regardless of original access type
  if (accessType === "expired") {
    return <ExpiredBanner schoolId={schoolId} />
  }

  // Paid subscription
  if (accessType === "paid") {
    return <PaidActiveBanner accessUntil={accessUntil} />
  }

  // Trial
  if (accessType === "trial") {
    return <TrialActiveBanner accessUntil={accessUntil} schoolId={schoolId} />
  }

  // Founder — tiered by days remaining
  if (accessType === "founder") {
    // Use explicit access_until if set; otherwise fall back to canonical expiry
    const effectiveUntil = accessUntil ?? "2026-08-31"
    const daysRemaining = getDaysRemaining(effectiveUntil) ?? 0

    if (daysRemaining < 7) {
      return <FounderUrgentBanner daysRemaining={daysRemaining} schoolId={schoolId} />
    }

    if (daysRemaining < 30) {
      return <FounderWarningSoonBanner daysRemaining={daysRemaining} schoolId={schoolId} />
    }

    return <FounderActiveBanner accessUntil={effectiveUntil} />
  }

  // Fallback — should not be reached with correct prop types
  return null
}

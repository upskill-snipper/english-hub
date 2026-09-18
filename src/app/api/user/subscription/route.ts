// ─── GET /api/user/subscription ─────────────────────────────────────────────
//
// THE DEFECT THIS FIXES (19 September 2026)
//
// This route did not exist. `src/app/api/user/` contained `password` and
// `profile` and nothing else, while /dashboard/subscription fetched
// `/api/user/subscription` on mount and treats a 404 as "no subscription":
//
//     if (response.status === 404) { setSubscription(null); ... }
//
// So the plan page rendered "No Active Subscription" for **every** account,
// including the four paying customers, and settings links straight to it. A
// payer opening their own plan page was told they had nothing.
//
// WHERE THE TRUTH LIVES
//
// `profiles.subscription_status` and `profiles.subscription_end_date` are what
// the web entitlement gates actually read (`src/lib/course-access.ts`), so they
// are the primary source here. The Prisma `Subscription` row is richer -
// paymentCount, cancelledAt, coolingOffWaived - but production held 13 Prisma
// users against 206 profiles, so keying off it would have reproduced the same
// "you have nothing" answer for most people. It is used to enrich, never to
// decide.
//
// CLAUDE.md structural fact 2 applies: `profiles.subscription_status` is one
// field per PERSON, not per subscription. This route only reads it.
// ────────────────────────────────────────────────────────────────────────────

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { tryPrismaUserId } from '@/lib/identity'

export const dynamic = 'force-dynamic'

type UiStatus = 'ACTIVE' | 'CANCELLED' | 'PAST_DUE' | 'TRIALING'

/**
 * Map the per-person profile status onto the four states the plan page knows.
 * Anything not in this map means the person genuinely has no plan, and the
 * page's existing empty state is the right answer.
 */
const PROFILE_TO_UI: Record<string, UiStatus> = {
  pro: 'ACTIVE',
  active: 'ACTIVE',
  trialing: 'TRIALING',
  past_due: 'PAST_DUE',
  cancelled: 'CANCELLED',
  canceled: 'CANCELLED',
}

export async function GET() {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('subscription_status, subscription_end_date, created_at')
    .eq('id', user.id)
    .single()

  const rawStatus = String(profile?.subscription_status ?? '').toLowerCase()
  const uiStatus = PROFILE_TO_UI[rawStatus]

  if (!uiStatus) {
    // Genuinely on the free plan. 404 is what the page already handles, and
    // changing it would mean changing the page too.
    return NextResponse.json({ error: 'No subscription' }, { status: 404 })
  }

  // Enrich from the Prisma row where one exists. `tryPrismaUserId` rather than
  // the throwing form: a plan page must not 500 because identity could not be
  // resolved, and every field it adds is optional detail.
  let row: {
    status: string
    currentPeriodStart: Date
    currentPeriodEnd: Date
    cancelledAt: Date | null
    paymentCount: number
    coolingOffWaived: boolean
  } | null = null

  try {
    const prismaUserId = await tryPrismaUserId(user.id)
    if (prismaUserId) {
      row = await prisma.subscription.findUnique({
        where: { userId: prismaUserId },
        select: {
          status: true,
          currentPeriodStart: true,
          currentPeriodEnd: true,
          cancelledAt: true,
          paymentCount: true,
          coolingOffWaived: true,
        },
      })
    }
  } catch (err) {
    console.error('[api/user/subscription] Prisma enrichment failed:', err)
  }

  // The Prisma row is more precise about WHICH of the four states applies -
  // it distinguishes a trial from a paid subscription, where the profile
  // writes 'pro' for both. Prefer it when it agrees that something is live.
  const status: UiStatus =
    row && PROFILE_TO_UI[row.status.toLowerCase()]
      ? PROFILE_TO_UI[row.status.toLowerCase()]!
      : uiStatus

  // Period end: the profile's date is what the gates enforce, so it wins.
  const periodEnd =
    profile?.subscription_end_date ??
    row?.currentPeriodEnd?.toISOString() ??
    // Neither is set. Report the status without inventing a date the customer
    // might plan around: the page renders the string it is given.
    null

  const periodStart = row?.currentPeriodStart?.toISOString() ?? profile?.created_at ?? null

  return NextResponse.json({
    plan: 'MONTHLY',
    status,
    currentPeriodStart: periodStart,
    currentPeriodEnd: periodEnd,
    cancelledAt: row?.cancelledAt?.toISOString() ?? null,
    paymentCount: row?.paymentCount ?? 0,
    coolingOffWaived: row?.coolingOffWaived ?? false,
  })
}

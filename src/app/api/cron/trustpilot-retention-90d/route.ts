/**
 * Daily cron: send the 90-day retention Trustpilot invite to students whose
 * first successful payment happened exactly 90 days ago.
 *
 * 90 days is the standard retention milestone where a customer has demonstrably
 * stuck past the first-month novelty curve and is qualified to comment on the
 * product from experience rather than first impressions.
 *
 * Schedule: 04:00 UTC daily (see vercel.json). Dedup via the
 * `trustpilot_invite` UNIQUE(user_id, trigger) constraint is belt-and-braces.
 *
 * Auth: `Authorization: Bearer $CRON_SECRET` (what Vercel Cron sends) or the
 * legacy `x-cron-secret` header.
 *
 * 2026-09-17: as with `trustpilot-followup-7d`, this route exported only
 * `POST` and read only `x-cron-secret`, so every scheduled `GET` since
 * 19 April 2026 was answered `405` and no 90-day invite was ever sent by
 * this path. (The newer `trustpilot-retention-invite` cron does fire and
 * covers the subscription-period-keyed case, so the gap here is partial.)
 */

import { NextRequest } from 'next/server'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { fireStudent90dRetention } from '@/lib/trustpilot/trigger-invite'
import { runCron } from '@/lib/cron/observability'
import { authoriseCronRequest } from '@/lib/cron/auth'

export const maxDuration = 300

/** Vercel Cron calls this with GET. */
export async function GET(request: NextRequest) {
  return POST(request)
}

export async function POST(request: NextRequest) {
  // ── Cron-secret gate ────────────────────────────────────────────────
  const auth = authoriseCronRequest(request, 'trustpilot-retention-90d')
  if (!auth.ok) return auth.response

  return runCron('trustpilot-retention-90d', async () => {
    const supabase = createServiceRoleClient()

    // ── Find candidates ──────────────────────────────────────────────
    // Users whose account is ~90 days old AND whose subscription has at
    // least one successful payment (paymentCount >= 1). User.createdAt is
    // the only stable "customer lifecycle start" we have - Subscription
    // has no createdAt, and currentPeriodStart rolls forward each renewal.
    //
    // Limitations:
    //   • If a user signs up but delays subscribing, the 90-day window
    //     measures from signup, not from first payment. For the current
    //     user base where signup and payment happen within the same week,
    //     this is a close-enough proxy.
    //   • If a user signs up, doesn't pay, and never subscribes, they
    //     won't match because of the paymentCount filter.
    const now = Date.now()
    const ninetyAgoEnd = new Date(now - 89.5 * 24 * 60 * 60 * 1000)
    const ninetyAgoStart = new Date(now - 90.5 * 24 * 60 * 60 * 1000)

    const users = await prisma.user
      .findMany({
        where: {
          createdAt: { gte: ninetyAgoStart, lte: ninetyAgoEnd },
          deletedAt: null,
          isMinor: false,
          subscription: { paymentCount: { gte: 1 } },
        },
        select: {
          id: true,
          email: true,
        },
      })
      .catch((err) => {
        console.warn('[cron/trustpilot-90d] user query failed', err)
        return [] as Array<{ id: string; email: string }>
      })

    if (users.length === 0) {
      return { candidates: 0, sent: 0, skipped: 0 }
    }

    // ── Resolve email -> Supabase auth id + dispatch ────────────────
    // listUsers paginates at ~1000 per page; for a ~90-day cohort this
    // should fit in a single page for the foreseeable future. If the
    // candidate set grows materially larger, switch to per-email
    // admin.getUserByEmail (not currently public in supabase-js; would
    // need Admin REST API).
    const { data: authListing } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1000,
    })
    const authUsersByEmail = new Map<string, string>()
    for (const au of authListing?.users ?? []) {
      if (au.email) authUsersByEmail.set(au.email.toLowerCase(), au.id)
    }

    let sent = 0
    let skipped = 0
    let failed = 0

    for (const pUser of users) {
      const supabaseUserId = authUsersByEmail.get(pUser.email.toLowerCase())
      if (!supabaseUserId) {
        skipped++
        continue
      }

      // Gather stats for the 90d template. Essay count lives in Prisma;
      // modules and mock-exam counts aren't tracked in the current schema
      // so we pass zeros (template renders "_" as a visible placeholder).
      const essaysCount = await prisma.essay.count({ where: { userId: pUser.id } }).catch(() => 0)

      const result = await fireStudent90dRetention(supabaseUserId, {
        modules_completed: 0,
        essays_submitted_count: essaysCount,
        mock_exams_taken: 0,
        grade_start: '-',
        grade_current: '-',
      })

      if (result.ok) {
        if (result.sent) sent++
        else skipped++
      } else {
        failed++
      }
    }

    return {
      candidates: users.length,
      sent,
      skipped,
      failed,
    }
  })
}

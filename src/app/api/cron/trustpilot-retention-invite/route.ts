/**
 * Daily cron: send a minimal retention email to users whose active
 * subscription period started exactly 90 days ago.
 *
 * Shipped as part of the full Trustpilot BCC + InviteJS rollout (April 2026).
 * Runs at 15:00 UTC daily (see vercel.json).
 *
 * Difference from the older `trustpilot-retention-90d` cron:
 *   • Keys on `Subscription.currentPeriodStart + 90 days === today` +
 *     status ACTIVE, not on `User.createdAt`. A monthly plan's period start
 *     rolls forward every month, so in practice this reaches annual payers on
 *     day 90 of their year.
 *   • Sends its own email through the canonical `sendEmail()` wrapper with
 *     `trustpilotTrigger`, which BCCs Trustpilot and records a
 *     `trustpilot_invite` row.
 *   • Skips users who already have any prior Trustpilot invite row.
 *
 * ─── Gated like every other Trustpilot path (31 October 2026) ─────────────
 * Until this date the only filter on the send was `User.isMinor`, which
 * defaults to false and so says nothing about anyone's age (see
 * src/lib/identity/age.ts). The header claimed the shared
 * `shouldBccTrustpilot()` gate applied; it decided only the BCC inside
 * sendEmail, and the email itself, a review invitation in its own right,
 * went regardless: to an account whose age was unknown, to an adult who had
 * refused marketing, with TRUSTPILOT_ENABLED off, and with no unsubscribe
 * link or List-Unsubscribe header. It went to the Prisma copy of the address,
 * which can be stale, and its "prior invite" check read only the Prisma id,
 * while the other 90-day path records the Supabase uuid.
 *
 * Now the send waits on `shouldBccTrustpilot()` itself, which since the same
 * date asks what triggerTrustpilotInvite asks: TRUSTPILOT_ENABLED, a KNOWN
 * adult (a real date of birth 18 or over), isMarketingAllowed, and the dedup
 * windows under both ids. The address is the auth record's. The email carries
 * the signed unsubscribe link in its footer (the lifecycle emails' wording)
 * and RFC 8058 headers. Its copy is otherwise unchanged; whether this cron
 * should exist beside `trustpilot-retention-90d` is the founder's decision.
 *
 * Auth: `Authorization: Bearer $CRON_SECRET` (what Vercel Cron sends) or the
 * legacy `x-cron-secret` header.
 */

import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { sendEmail } from '@/lib/email'
import { authoriseCronRequest } from '@/lib/cron/auth'
import { runCron } from '@/lib/cron/observability'
import { shouldBccTrustpilot } from '@/lib/trustpilot/should-bcc'
import { unsubscribeLinkFor } from '@/lib/email/lifecycle/send'

export const maxDuration = 120

const TRIGGER = 'student_90d_retention'
const UUID_SHAPE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

export async function GET(request: NextRequest) {
  return handle(request)
}
export async function POST(request: NextRequest) {
  return handle(request)
}

async function handle(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'trustpilot-retention-invite')
  if (!auth.ok) return auth.response

  // Wrapped (REL-8, 19 September 2026). This was the one scheduled route
  // with no observability wrapper at all: a throw here answered 500 and was
  // read by nothing, and nothing stopped two instances sending the same
  // ninety-day invite twice.
  return runCron('trustpilot-retention-invite', async () => {
    // Window: [today - 90d - 12h, today - 90d + 12h] in UTC - gives a 24h
    // band so the daily cron catches everyone whose period started 90 days
    // ago regardless of their subscription timezone.
    const now = Date.now()
    const windowEnd = new Date(now - 89.5 * 24 * 60 * 60 * 1000)
    const windowStart = new Date(now - 90.5 * 24 * 60 * 60 * 1000)

    const candidates = await prisma.subscription.findMany({
      where: {
        status: 'ACTIVE',
        currentPeriodStart: { gte: windowStart, lte: windowEnd },
      },
      select: {
        userId: true,
        user: {
          select: {
            id: true,
            supabaseUserId: true,
            firstName: true,
            deletedAt: true,
            isMinor: true,
          },
        },
      },
    })

    const supabase = createServiceRoleClient()

    let sent = 0
    let skipped = 0
    const refusedBy: Record<string, number> = {}

    for (const row of candidates) {
      const user = row.user
      if (!user || user.deletedAt || user.isMinor) {
        skipped++
        continue
      }

      // The Supabase uuid, which the gate's age and marketing reads and the
      // other 90-day path's invite rows are keyed on. A legacy row's primary
      // key IS the uuid (src/lib/identity/lookup.ts).
      const supabaseUserId = user.supabaseUserId ?? (UUID_SHAPE.test(user.id) ? user.id : null)
      if (!supabaseUserId) {
        skipped++
        continue
      }

      // Skip if the user already has any trustpilot_invite row under either
      // id - avoids a double invitation regardless of trigger. A failed read
      // is not "none": the invitation waits for tomorrow.
      const { data: prior, error: priorError } = await supabase
        .from('trustpilot_invite')
        .select('id')
        .in('user_id', [user.id, supabaseUserId])
        .in('status', ['sent', 'reserved'])
        .limit(1)
      if (priorError || (prior && prior.length > 0)) {
        skipped++
        continue
      }

      // The one gate every Trustpilot path shares. It decides the send here,
      // not only the BCC.
      const decision = await shouldBccTrustpilot({ userId: user.id, trigger: TRIGGER, prisma })
      if (!decision.ok) {
        refusedBy[decision.reason] = (refusedBy[decision.reason] ?? 0) + 1
        skipped++
        continue
      }

      // The auth record's address. The Prisma copy can be stale.
      const { data: authData } = await supabase.auth.admin.getUserById(supabaseUserId)
      const to = authData?.user?.email
      if (!to) {
        skipped++
        continue
      }

      const unsubscribe = unsubscribeLinkFor(supabaseUserId)
      const first = user.firstName?.trim() || 'there'
      const subject = '3 months in - worth a review?'
      const html = `<p>Hi ${escape(first)},</p>
  <p>You've been with The English Hub for 90 days. If the platform has helped, a short honest review on Trustpilot would mean a lot - two minutes, no incentive attached.</p>
  <p><a href="https://uk.trustpilot.com/review/theenglishhub.app">Leave a review on Trustpilot</a></p>
  <p>If anything's felt off, just reply to this email and a real person will read it.</p>
  <p>Cheers,<br/>The English Hub Team</p>
  <p style="font-size:12px;color:#888888;"><a href="${escape(unsubscribe.pageUrl)}">Unsubscribe from marketing email</a></p>`
      const text = `Hi ${first},\n\nYou've been with The English Hub for 90 days. If the platform has helped, a short honest review on Trustpilot would mean a lot - two minutes, no incentive attached.\n\nLeave a review: https://uk.trustpilot.com/review/theenglishhub.app\n\nIf anything's felt off, just reply to this email and a real person will read it.\n\nCheers,\nThe English Hub Team\n\nUnsubscribe from marketing email: ${unsubscribe.pageUrl}`

      const result = await sendEmail(to, subject, html, text, {
        trustpilotTrigger: TRIGGER,
        userId: user.id,
        ...(unsubscribe.headers ? { headers: unsubscribe.headers } : {}),
      })
      if (result.success) sent++
      else skipped++
    }

    return { candidates: candidates.length, sent, skipped, refusedBy }
  })
}

function escape(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

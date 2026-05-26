/**
 * Daily cron: send a minimal retention email to users whose active
 * subscription period started exactly 90 days ago.
 *
 * Shipped as part of the full Trustpilot BCC + InviteJS rollout (April 2026).
 * Runs at 15:00 UTC daily (see vercel.json).
 *
 * Difference from the older `trustpilot-retention-90d` cron:
 *   • Keys on `Subscription.currentPeriodStart + 90 days === today` +
 *     status ACTIVE, not on `User.createdAt`.
 *   • Uses the canonical `sendEmail()` wrapper with `trustpilotTrigger`,
 *     which runs the shared `shouldBccTrustpilot()` gate (age, opt-outs,
 *     dedup) and records a `trustpilot_invite` row automatically.
 *   • Skips users who already have any prior Trustpilot invite row.
 *
 * Auth: `x-cron-secret` header must match `CRON_SECRET`.
 */

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { sendEmail } from '@/lib/email'

export const maxDuration = 120

export async function GET(request: NextRequest) {
  return handle(request)
}
export async function POST(request: NextRequest) {
  return handle(request)
}

async function handle(request: NextRequest) {
  const expected = process.env.CRON_SECRET
  if (!expected) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  const provided =
    request.headers.get('x-cron-secret') ??
    (request.headers.get('authorization')?.startsWith('Bearer ')
      ? request.headers.get('authorization')!.slice(7)
      : null)
  if (
    !provided ||
    provided.length !== expected.length ||
    !crypto.timingSafeEqual(Buffer.from(provided), Buffer.from(expected))
  ) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

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
          email: true,
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

  for (const row of candidates) {
    const user = row.user
    if (!user || user.deletedAt || user.isMinor || !user.email) {
      skipped++
      continue
    }

    // Skip if user already has any trustpilot_invite row - avoids double
    // invitation regardless of trigger. The shared dedup helper will
    // re-check, but this pre-filter saves us rendering + SMTP for the
    // majority.
    const { data: prior } = await supabase
      .from('trustpilot_invite')
      .select('id')
      .eq('user_id', user.id)
      .in('status', ['sent', 'reserved'])
      .limit(1)
    if (prior && prior.length > 0) {
      skipped++
      continue
    }

    const first = user.firstName?.trim() || 'there'
    const subject = '3 months in - worth a review?'
    const html = `<p>Hi ${escape(first)},</p>
<p>You've been with The English Hub for 90 days. If the platform has helped, a short honest review on Trustpilot would mean a lot - two minutes, no incentive attached.</p>
<p><a href="https://uk.trustpilot.com/review/theenglishhub.app">Leave a review on Trustpilot</a></p>
<p>If anything's felt off, just reply to this email and a real person will read it.</p>
<p>Cheers,<br/>The English Hub Team</p>`
    const text = `Hi ${first},\n\nYou've been with The English Hub for 90 days. If the platform has helped, a short honest review on Trustpilot would mean a lot - two minutes, no incentive attached.\n\nLeave a review: https://uk.trustpilot.com/review/theenglishhub.app\n\nIf anything's felt off, just reply to this email and a real person will read it.\n\nCheers,\nThe English Hub Team`

    const result = await sendEmail(user.email, subject, html, text, {
      trustpilotTrigger: 'student_90d_retention',
      userId: user.id,
    })
    if (result.success) sent++
    else skipped++
  }

  return NextResponse.json({
    ok: true,
    candidates: candidates.length,
    sent,
    skipped,
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

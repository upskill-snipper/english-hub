/**
 * Daily cron: send the 7-day "gentle nudge" Trustpilot invite to students
 * who received the first-mark invite a week ago and have continued to use
 * the platform (≥ 2 essay marks submitted) but have not yet been sent a
 * follow-up.
 *
 * Schedule: 03:30 UTC daily (see vercel.json). Safe to re-run on the same
 * day — dedup via `trustpilot_invite` UNIQUE(user_id, trigger) ensures no
 * duplicates.
 *
 * Auth: `x-cron-secret` header must match CRON_SECRET env var.
 */

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { fireStudentFirstMark7dFollowup } from '@/lib/trustpilot/trigger-invite'
import { runCron } from '@/lib/cron/observability'

export const maxDuration = 300

export async function POST(request: NextRequest) {
  // ── Cron-secret gate ────────────────────────────────────────────────
  const cronSecret = request.headers.get('x-cron-secret')
  const expected = process.env.CRON_SECRET
  if (!expected) {
    console.error('[cron/trustpilot-7d] CRON_SECRET not set')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  if (!cronSecret || !crypto.timingSafeEqual(Buffer.from(cronSecret), Buffer.from(expected))) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  return runCron('trustpilot-followup-7d', async () => {
    const supabase = createServiceRoleClient()

    // ── Find candidates ──────────────────────────────────────────────
    // Users whose student_first_mark invite fired 7 ± 0.5 days ago and who
    // haven't yet had the 7d-followup fire. The UNIQUE constraint on
    // (user_id, trigger) prevents re-sending — dedup is belt-and-braces
    // but also lets us skip candidates with an existing follow-up row
    // without a second query.
    const now = Date.now()
    const windowStart = new Date(now - 7.5 * 24 * 60 * 60 * 1000).toISOString()
    const windowEnd = new Date(now - 6.5 * 24 * 60 * 60 * 1000).toISOString()

    const { data: firstMarkRows, error: firstMarkErr } = await supabase
      .from('trustpilot_invite')
      .select('user_id')
      .eq('trigger', 'student_first_mark')
      .eq('status', 'sent')
      .gte('sent_at', windowStart)
      .lte('sent_at', windowEnd)

    if (firstMarkErr) {
      throw new Error(`trustpilot-followup-7d select failed: ${firstMarkErr.message}`)
    }

    const firstMarkUserIds = (firstMarkRows ?? []).map((r) => r.user_id)
    if (firstMarkUserIds.length === 0) {
      return { candidates: 0, sent: 0, skipped: 0 }
    }

    // Exclude any user who already has the followup row.
    const { data: alreadyFollowed } = await supabase
      .from('trustpilot_invite')
      .select('user_id')
      .eq('trigger', 'student_first_mark_followup_7d')
      .in('user_id', firstMarkUserIds)

    const alreadyFollowedSet = new Set((alreadyFollowed ?? []).map((r) => r.user_id))
    const toTry = firstMarkUserIds.filter((id) => !alreadyFollowedSet.has(id))

    // ── Process in small batches ─────────────────────────────────────
    let sent = 0
    let skipped = 0
    let failed = 0

    for (const supabaseUserId of toTry) {
      // Look up essays-submitted count via email bridge.
      let essaysSubmitted = 0
      try {
        const { data: authData } = await supabase.auth.admin.getUserById(supabaseUserId)
        const authEmail = authData?.user?.email
        if (authEmail) {
          const prismaUser = await prisma.user.findUnique({
            where: { email: authEmail },
            select: { id: true },
          })
          if (prismaUser) {
            essaysSubmitted = await prisma.essay
              .count({ where: { userId: prismaUser.id } })
              .catch(() => 0)
          }
        }
      } catch (err) {
        console.warn('[cron/trustpilot-7d] essay-count lookup failed for', supabaseUserId, err)
      }

      // Only fire the followup if the student has come back — i.e. ≥ 2
      // essays submitted. If they only ever submitted the one that
      // triggered `student_first_mark`, a nudge looks pushy.
      if (essaysSubmitted < 2) {
        skipped++
        continue
      }

      const result = await fireStudentFirstMark7dFollowup(supabaseUserId, essaysSubmitted)
      if (result.ok) {
        if (result.sent) sent++
        else skipped++
      } else {
        failed++
      }
    }

    return {
      candidates: firstMarkUserIds.length,
      tried: toTry.length,
      sent,
      skipped,
      failed,
    }
  })
}

/**
 * Atomic "can I fire an InviteJS invite?" check for the client-side path.
 *
 * Behaviour:
 *   • Requires an authenticated Supabase session. 401 if missing.
 *   • Runs `shouldBccTrustpilot` (shared eligibility + dedup) against the
 *     caller's own userId + the supplied trigger.
 *   • On `ok`, atomically reserves a `trustpilot_invite` row (status
 *     'reserved'). A concurrent second caller loses the race via the
 *     partial unique index and receives `canFire:false`.
 *   • On deny, returns `{ canFire:false, reason }`.
 *
 * The client-side `fireTrustpilotInvite` only calls `tp('createInvitation')`
 * when `canFire:true`, so the reservation row represents an actual invite
 * dispatch from the user's browser — same dedup semantics as a sent BCC row.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { reserveInvite } from '@/lib/trustpilot/dedup'
import { shouldBccTrustpilot } from '@/lib/trustpilot/should-bcc'
import { isTrustpilotBccTrigger } from '@/lib/trustpilot/trigger-names'

export async function POST(request: NextRequest) {
  let body: { trigger?: string; referenceId?: string }
  try {
    body = (await request.json()) as { trigger?: string; referenceId?: string }
  } catch {
    return NextResponse.json({ canFire: false, reason: 'bad_json' }, { status: 400 })
  }

  const trigger = body.trigger
  if (!trigger || !isTrustpilotBccTrigger(trigger)) {
    return NextResponse.json({ canFire: false, reason: 'unknown_trigger' }, { status: 400 })
  }

  // Auth.
  const supabase = createServerSupabaseClient()
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser()
  if (!authUser) {
    return NextResponse.json({ canFire: false, reason: 'unauthorised' }, { status: 401 })
  }

  // Bridge Supabase auth id -> Prisma User.id via email (same pattern as
  // trigger-invite.ts). If the user isn't in Prisma, treat as ineligible.
  if (!authUser.email) {
    return NextResponse.json({ canFire: false, reason: 'user_not_found' })
  }
  const prismaUser = await prisma.user.findUnique({
    where: { email: authUser.email },
    select: { id: true },
  })
  if (!prismaUser) {
    return NextResponse.json({ canFire: false, reason: 'user_not_found' })
  }

  // Eligibility.
  const eligibility = await shouldBccTrustpilot({
    userId: prismaUser.id,
    trigger,
    prisma,
  })
  if (!eligibility.ok) {
    return NextResponse.json({ canFire: false, reason: eligibility.reason })
  }

  // Atomic reserve — uses Supabase service role + partial unique index.
  const reservation = await reserveInvite({
    userId: prismaUser.id,
    trigger,
  })
  if (!reservation.ok) {
    return NextResponse.json({ canFire: false, reason: reservation.reason })
  }

  return NextResponse.json({ canFire: true })
}

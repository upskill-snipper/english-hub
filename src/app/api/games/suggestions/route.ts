import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

/**
 * PUT /api/games/suggestions {on: boolean}: the signed-in student switches
 * personalised suggestions (next steps and the AI coach) on or off for their
 * own account.
 *
 * WHY THIS EXISTS (13 October 2026). `profiles.personalised_recommendations`
 * is the Children's Code switch for profiling-based suggestions. The signup
 * trigger and applyChildDefaults write it false for under-18s, and nothing in
 * the product could ever set it: the column privileges of 12 October let a
 * user update only their name, year group and board, and no route wrote it.
 * The founder decided that the AI coach and next-step suggestions follow this
 * setting and start "once the student switches suggestions on, after a plain
 * explanation". This route is the switch; the hub shows the explanation
 * beside it.
 *
 * Written with the service role, for the session's own row only (the id is
 * the session's, never the body's). Switching off is as easy as on. Each
 * change is recorded in the audit log, with the Supabase id in its details,
 * so when and how a child's setting changed can be shown.
 */
const Body = z.object({ on: z.boolean() }).strict()

export async function PUT(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const rl = await rateLimit(`game-suggestions:${user.id}`, { limit: 20, windowSeconds: 3600 })
  if (!rl.success) return NextResponse.json({ error: 'Too many changes' }, { status: 429 })

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Expected {on: true|false}' }, { status: 400 })
  }
  const parsed = Body.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: 'Expected {on: true|false}' }, { status: 400 })
  }

  const { error } = await createServiceRoleClient()
    .from('profiles')
    .update({ personalised_recommendations: parsed.data.on })
    .eq('id', user.id)
  if (error) {
    console.error('[game-suggestions] update failed', error.message)
    return NextResponse.json({ error: 'Your setting could not be saved' }, { status: 500 })
  }

  try {
    await prisma.auditLog.create({
      data: {
        // AuditLog.userId is a Prisma id that most accounts do not have, and
        // resolving one would create a record about a child to hold a log
        // line. The Supabase id goes in the details instead.
        userId: null,
        action: 'PERSONALISED_SUGGESTIONS_CHANGED',
        resource: 'Profile',
        resourceId: user.id,
        details: { on: parsed.data.on, via: 'games-hub' },
        ipAddress: 'user',
      },
    })
  } catch (auditError) {
    // The student's choice stands; a missing record of it is reported loudly.
    console.error(
      '[game-suggestions] audit entry failed',
      auditError instanceof Error ? auditError.message : String(auditError),
    )
  }

  return NextResponse.json({ on: parsed.data.on })
}

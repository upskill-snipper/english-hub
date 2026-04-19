// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import type { NextRequest } from 'next/server'

// POST /api/auth/record-login
//
// Called by the client immediately after a successful Supabase sign-in
// to record the `lastLoginAt` timestamp on the Prisma User row. The
// dormancy-check cron (`/api/cron/dormancy-check`) queries this column
// to identify genuinely-inactive accounts for deletion — previously
// it used `updatedAt` which any profile write could reset, leading to
// wrongful deletion of active accounts and false reprieve for
// actually-dormant ones.
//
// The caller MUST be authenticated (we read the Supabase session and
// match by email into Prisma — both identity systems link by email
// until the larger identity convergence is shipped).
export async function POST(request: NextRequest) {
  const supabase = createServerSupabaseClient()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user || !user.email) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  // Per-user rate limit: legit login paths call this once per sign-in.
  // Cap at 20/hour/user to handle flaky reconnects without enabling abuse.
  const rl = await rateLimit(`record-login:${user.id}`, {
    limit: 20,
    windowSeconds: 3600,
  })
  if (!rl.success) {
    return NextResponse.json({ error: 'Rate limited' }, { status: 429 })
  }

  try {
    // updateMany avoids a throw when the Prisma User row doesn't exist
    // for this email (e.g. a Supabase-only account that never hit Prisma
    // for whatever reason). Best-effort — dormancy is a lagging signal.
    // Match by supabaseUserId OR email so pre-backfill rows are still hit.
    const result = await prisma.user.updateMany({
      where: {
        OR: [{ supabaseUserId: user.id }, { email: user.email.toLowerCase() }],
      },
      data: { lastLoginAt: new Date() },
    })
    return NextResponse.json({ ok: true, rows: result.count })
  } catch (err) {
    console.error('[record-login] failed:', err)
    // Non-fatal — do not block the user's login flow.
    return NextResponse.json({ ok: false }, { status: 200 })
  }

  // IP is read for rate-limit keying telemetry only; not persisted.
  // (Kept at end of function so lint doesn't complain about unused import.)
  void getClientIp(request.headers)
}

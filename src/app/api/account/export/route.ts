import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { prisma } from '@/lib/prisma'
import { compileUserData } from '@/lib/dsar'

/**
 * POST /api/account/export
 *
 * GDPR Article 15 (Right of Access) and Article 20 (Right to Data
 * Portability) self-serve export. Returns a JSON attachment containing
 * everything we hold about the authenticated user, compiled by the shared
 * `compileUserData` helper that the DSAR back-office workflow already uses
 * — keeping a single canonical "what's in an export" definition.
 *
 * Rate limit: 1 request per user per hour. Compiling an export is a
 * relatively heavy DB read (joins across essays, AI feedback, audit logs)
 * and the user has no legitimate need to pull it more often than that.
 */
export async function POST(request: NextRequest) {
  void request // accept, but headers/body aren't needed for this route

  try {
    // 1. Authenticate the caller against Supabase.
    const supabase = createServerSupabaseClient()
    const {
      data: { user: authUser },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !authUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // 2. Per-user rate limit: 1 export / hour. Keyed on the Supabase user
    //    id, not IP — multiple users behind the same school NAT must each
    //    get their own quota, and a single user opening a second device
    //    shouldn't double their allowance.
    const rl = await rateLimit(`account-export:${authUser.id}`, {
      limit: 1,
      windowSeconds: 3600,
    })
    if (!rl.success) {
      const retryAfterSec = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000))
      return NextResponse.json(
        {
          error: 'You can only download your data once an hour. Please try again later.',
        },
        {
          status: 429,
          headers: { 'Retry-After': String(retryAfterSec) },
        },
      )
    }

    // 3. Resolve the Prisma User row. Prefer the canonical
    //    `supabaseUserId` link (Cycle 7 / Identity PR-3) and fall back to
    //    email for accounts that pre-date the backfill, mirroring the
    //    pattern used in src/lib/admin.ts.
    let prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: authUser.id },
      select: { id: true },
    })

    if (!prismaUser && authUser.email) {
      prismaUser = await prisma.user.findUnique({
        where: { email: authUser.email },
        select: { id: true },
      })
    }

    if (!prismaUser) {
      // No matching application-side row. The auth user exists but has no
      // profile yet (e.g. signup mid-flow). Nothing to export.
      return NextResponse.json({ error: 'No account data found to export.' }, { status: 404 })
    }

    // 4. Compile the export payload using the shared DSAR helper. This
    //    pulls profile, consents, essays + AI feedback (marking history),
    //    privacy settings, subscription, prior data requests, and audit
    //    log entries — covering everything the task asks for ("profile,
    //    board choice, quiz scores, game scores, marking history,
    //    consents"). Quiz/game progress tables don't exist in the current
    //    schema; if/when they're added, extend `compileUserData` so all
    //    DSAR surfaces stay in sync.
    const payload = await compileUserData(prismaUser.id)

    // 5. Stream as a JSON attachment. Pretty-print with 2-space indent so
    //    a curious teenager can actually open the file in Notepad and
    //    read it — that's the spirit of the Children's Code.
    const date = new Date().toISOString().slice(0, 10)
    const filename = `english-hub-data-${prismaUser.id}-${date}.json`
    const body = JSON.stringify(payload, null, 2)

    return new NextResponse(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        // Don't let intermediaries cache a personal data export.
        'Cache-Control': 'no-store, max-age=0',
      },
    })
  } catch (error) {
    console.error('[account/export] Failed to compile export:', error)
    return NextResponse.json(
      { error: 'Failed to prepare your data. Please try again later.' },
      { status: 500 },
    )
  }
}

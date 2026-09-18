// Cycle 7 / Identity PR-3: lookups prefer supabaseUserId over email.
// 2026-09-17: identity resolution delegated to src/lib/identity.
import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit } from '@/lib/rate-limit'
import { tryPrismaUserId } from '@/lib/identity'
import { provisionSignupTrial } from '@/lib/billing/provision-signup-trial'
import type { NextRequest } from 'next/server'

// POST /api/auth/record-login
//
// Called by the client immediately after a successful Supabase sign-in
// to record the `lastLoginAt` timestamp on the Prisma User row. The
// dormancy-check cron (`/api/cron/dormancy-check`) queries this column
// to identify genuinely-inactive accounts for deletion - previously
// it used `updatedAt` which any profile write could reset, leading to
// wrongful deletion of active accounts and false reprieve for
// actually-dormant ones.
//
// The caller MUST be authenticated.
//
// This is also the eager projection point. Only 8 of 200 real accounts had
// a Prisma User row, so the updateMany below matched nothing for ~96% of
// sign-ins and this endpoint quietly did nothing at all for them. Resolving
// through the identity module creates the missing row here, which makes the
// account addressable for consent, erasure and the AI decision log before
// it needs to be. After one login cycle nearly every active account is
// projected; just-in-time projection covers the rest.
//
// The projection is additive only: it grants no consent, links no parent
// and creates no subscription. See src/lib/identity/projection.ts.
export async function POST(_request: NextRequest) {
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
    // Project first, then stamp. tryPrismaUserId rather than the throwing
    // form: a login must not fail because identity could not be resolved,
    // and dormancy is a lagging signal.
    const prismaUserId = await tryPrismaUserId(user.id)
    if (!prismaUserId) {
      console.error('[record-login] could not resolve identity for', user.id)
      return NextResponse.json({ ok: false, rows: 0 }, { status: 200 })
    }

    await prisma.user.update({
      where: { id: prismaUserId },
      data: { lastLoginAt: new Date() },
    })

    // Second net for the trial. The auth callback is the primary provisioning
    // point; this covers an account that confirmed while the callback was
    // failing, or that confirmed before provisioning shipped and is still
    // inside its first 7 days. `provisionSignupTrial` is idempotent and
    // window-guarded, so a returning user from May gets nothing from this and
    // a paying user is never touched. It cannot throw.
    await provisionSignupTrial(user.id)

    return NextResponse.json({ ok: true, rows: 1 })
  } catch (err) {
    console.error('[record-login] failed:', err)
    // Non-fatal - do not block the user's login flow. The client calls
    // this fire-and-forget after a successful Supabase sign-in (see
    // `src/app/auth/login/page.tsx`), so a 200 with `{ ok: false }`
    // keeps the failure observable in server logs without surfacing a
    // hostile network error to the browser.
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}

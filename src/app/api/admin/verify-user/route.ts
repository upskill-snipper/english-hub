import { NextRequest, NextResponse } from 'next/server'
import * as Sentry from '@sentry/nextjs'
import { Prisma } from '@prisma/client'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { verifyAdmin } from '@/lib/admin-auth'
import { createServiceRoleClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'

// ─── POST /api/admin/verify-user ────────────────────────────────────────
//
// Emergency tool: manually mark a user's email as confirmed in Supabase
// (auth.users.email_confirmed_at = now()) and ensure the matching Prisma
// `User` projection row exists. Use when the auth-email pipeline is broken
// (e.g. Resend domain not yet verified, SMTP outage, reviewer email
// forwarding swallowing the verification link, etc.).
//
// Mirrors the SQL in scripts/fix-reviewer-verification.sql but works for
// any email and runs over the Supabase admin API + Prisma rather than
// straight SQL, so it can be invoked from the admin UI.
//
// Gated by:
//   1. verifyAdmin() — must be a logged-in admin
//   2. Optional `x-admin-token` header that must match ADMIN_DIAGNOSTIC_TOKEN
//      (only enforced if the env var is set, opt-in extra hardening)
//
// Body: { email: string }
// Returns: { success: true, userId: string, email: string, prismaUserId?: string }
// ────────────────────────────────────────────────────────────────────────

export const dynamic = 'force-dynamic'

const SUPABASE_MANAGED_SENTINEL = 'SUPABASE_MANAGED'

export async function POST(request: NextRequest) {
  try {
    // ── Rate limit: 10 per IP per minute ──────────────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`admin-verify-user:${ip}`, {
      limit: 10,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          },
        },
      )
    }

    // ── Admin auth ────────────────────────────────────────────
    const { user: adminUser, error: authError } = await verifyAdmin()
    if (authError === 'Unauthorized') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    if (authError === 'Forbidden') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // ── Optional second-factor: x-admin-token header ─────────
    const requiredToken = process.env.ADMIN_DIAGNOSTIC_TOKEN
    if (requiredToken) {
      const provided = request.headers.get('x-admin-token')
      if (provided !== requiredToken) {
        return NextResponse.json({ error: 'Forbidden — invalid x-admin-token' }, { status: 403 })
      }
    }

    // ── Parse + validate body ────────────────────────────────
    let body: unknown
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const rawEmail = (body as { email?: unknown })?.email
    if (typeof rawEmail !== 'string' || !rawEmail.includes('@') || rawEmail.length > 254) {
      return NextResponse.json(
        { error: 'Body must include a valid `email` address' },
        { status: 400 },
      )
    }
    const email = rawEmail.trim().toLowerCase()

    // ── Find the auth.users row by email ──────────────────────
    const admin = createServiceRoleClient()

    // listUsers() is paginated (default 50/page). For the founder-tool
    // use-case the user count is small enough that a few pages will find
    // anyone; we cap at 20 pages (1000 users) for safety. If we outgrow
    // this, switch to a direct SQL lookup via prisma.$queryRaw against
    // auth.users — which the service-role connection has access to.
    let foundAuthUser: {
      id: string
      email?: string | null
      email_confirmed_at?: string | null
    } | null = null
    let page = 1
    const perPage = 50
    const maxPages = 20
    while (page <= maxPages) {
      const { data, error } = await admin.auth.admin.listUsers({ page, perPage })
      if (error) {
        console.error('[admin/verify-user] listUsers failed', error)
        return NextResponse.json({ error: 'Failed to query Supabase admin API' }, { status: 502 })
      }
      const match = data.users.find((u) => u.email?.toLowerCase() === email)
      if (match) {
        foundAuthUser = {
          id: match.id,
          email: match.email,
          email_confirmed_at: match.email_confirmed_at ?? null,
        }
        break
      }
      if (data.users.length < perPage) break
      page++
    }

    if (!foundAuthUser) {
      return NextResponse.json(
        { error: `No Supabase auth user found for ${email}` },
        { status: 404 },
      )
    }

    // ── Mark email as confirmed (idempotent) ─────────────────
    // The supabase-js admin API uses `email_confirm: true` (snake-case in
    // v2) to set email_confirmed_at = now() on the auth.users row. Calling
    // it on an already-confirmed user is a no-op (Supabase preserves the
    // existing timestamp).
    const { error: updateError } = await admin.auth.admin.updateUserById(foundAuthUser.id, {
      email_confirm: true,
    })
    if (updateError) {
      console.error('[admin/verify-user] updateUserById failed', updateError)
      Sentry.captureException(updateError, {
        tags: { route: 'admin/verify-user', reason: 'updateUserById' },
        extra: { email },
      })
      return NextResponse.json(
        { error: 'Failed to mark email confirmed in Supabase' },
        { status: 502 },
      )
    }

    // ── Ensure Prisma User projection row exists ──────────────
    // Same pattern as scripts/fix-reviewer-verification.sql: lookup by
    // supabaseUserId, fall back to email, create a STUDENT row if neither
    // exists. This is the projection /api/auth/register would normally
    // create — without it, dormancy-check, DSAR, and weekly-report code
    // paths silently no-op for this user.
    let prismaUserId: string | null = null
    try {
      const existing =
        (await prisma.user.findUnique({
          where: { supabaseUserId: foundAuthUser.id },
          select: { id: true },
        })) ??
        (await prisma.user.findUnique({
          where: { email },
          select: { id: true },
        }))

      if (existing) {
        prismaUserId = existing.id
        // Ensure supabaseUserId is linked even if the row was originally
        // matched by email (mirrors the ON CONFLICT DO UPDATE in the SQL).
        await prisma.user.update({
          where: { id: existing.id },
          data: {
            supabaseUserId: foundAuthUser.id,
            updatedAt: new Date(),
          },
        })
      } else {
        // Create a minimal STUDENT projection row. firstName/lastName/DOB
        // are placeholders — the user can fill these in via /onboarding
        // or the founder can update them by hand. We do NOT set ADMIN or
        // any elevated role here.
        const created = await prisma.user.create({
          data: {
            supabaseUserId: foundAuthUser.id,
            email,
            passwordHash: SUPABASE_MANAGED_SENTINEL,
            firstName: 'Pending',
            lastName: 'Setup',
            // Default DOB places the user safely above the 18 minor
            // threshold; the real value should be collected at onboarding.
            dateOfBirth: new Date(Date.UTC(2000, 0, 1)),
            country: 'GB',
            role: 'STUDENT',
            isMinor: false,
            accountStatus: 'ACTIVE',
          },
          select: { id: true },
        })
        prismaUserId = created.id
      }
    } catch (dbError) {
      // Don't fail the whole operation just because the Prisma projection
      // could not be written — the auth.users row IS verified, the user
      // can sign in. Log loudly so the founder knows to investigate.
      if (dbError instanceof Prisma.PrismaClientKnownRequestError) {
        console.error('[admin/verify-user] Prisma projection failed', {
          code: dbError.code,
          email,
        })
      } else {
        console.error('[admin/verify-user] Prisma projection failed', dbError)
      }
      Sentry.captureException(dbError, {
        tags: { route: 'admin/verify-user', reason: 'prisma_projection' },
        extra: { email, supabaseUserId: foundAuthUser.id },
      })
    }

    console.info('[admin/verify-user] Manual verification', {
      adminEmail: adminUser?.email,
      targetEmail: email,
      supabaseUserId: foundAuthUser.id,
      prismaUserId,
      wasAlreadyConfirmed: !!foundAuthUser.email_confirmed_at,
    })

    return NextResponse.json({
      success: true,
      userId: foundAuthUser.id,
      email,
      prismaUserId: prismaUserId ?? undefined,
      wasAlreadyConfirmed: !!foundAuthUser.email_confirmed_at,
    })
  } catch (error) {
    console.error('[api/admin/verify-user] Unexpected error:', error)
    Sentry.captureException(error, {
      tags: { route: 'admin/verify-user', reason: 'unexpected' },
    })
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

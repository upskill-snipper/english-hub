/**
 * GET /api/me/entitlements
 *
 * Source of truth for paid access. Called by the mobile paywall gate
 * and before any billable action - see
 * english-hub-mobile/docs/API_SPEC.md §4.2.
 *
 * Response envelope (see english-hub-mobile/docs/API_SPEC.md §1.3):
 *   { ok: true, data: EntitlementPayload }
 *
 * Caching is explicitly disabled (Cache-Control: private, no-store) so
 * the mobile client always sees the freshest read after a purchase or
 * restore. The client-side caching is handled by TanStack Query with
 * a short (30 s) stale time.
 *
 * Auth: Supabase session cookie (set by the existing middleware). The
 * Supabase user id is a UUID; we translate to the Prisma cuid via
 * `User.supabaseUserId`, with an email fallback for legacy rows that
 * have not yet been backfilled (see DSAR route for the same pattern).
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { fetchUserEntitlement, emptyEntitlement } from '@/lib/entitlements'

// Dynamic - this handler reads cookies and writes a `no-store` header.
export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// ─── Envelope helpers ─────────────────────────────────────────────────

function ok<T>(data: T, init?: ResponseInit): NextResponse {
  const res = NextResponse.json({ ok: true, data }, init)
  // Private, never cached - entitlement state can change mid-session
  // (refund, grace-period transition). Mobile honours TanStack's own
  // stale time for client-side deduping.
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

function fail(code: string, message: string, status: number): NextResponse {
  const res = NextResponse.json({ ok: false, error: { code, message } }, { status })
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

// ─── Handler ──────────────────────────────────────────────────────────

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    // ── Rate limit - 120/minute per IP, matching API_SPEC.md §6. ───
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`me-entitlements:${ip}`, {
      limit: 120,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return fail('RATE_LIMITED', 'Too many requests. Please try again shortly.', 429)
    }

    // ── Auth ───────────────────────────────────────────────────────
    const supabase = createServerSupabaseClient()
    const {
      data: { user: sessionUser },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !sessionUser) {
      return fail('AUTH_EXPIRED', 'Your session has expired. Please sign in again.', 401)
    }

    // ── Resolve Prisma user id ─────────────────────────────────────
    //
    // Supabase session.id is a UUID; Prisma User.id is a cuid. We
    // match via supabaseUserId, with an email fallback for legacy
    // rows (mirrors `/api/dsar`'s identity convergence fallback).
    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: sessionUser.id },
      select: { id: true },
    })
    const profile =
      prismaUser ??
      (sessionUser.email
        ? await prisma.user.findUnique({
            where: { email: sessionUser.email.toLowerCase() },
            select: { id: true },
          })
        : null)

    if (!profile) {
      // A brand-new Supabase user without a Prisma row yet (the mobile
      // app called us before `/auth/register` landed the projection).
      // Return an empty entitlement rather than 404 - the client
      // treats "no sub" as free tier.
      return ok(emptyEntitlement())
    }

    // ── Project the entitlement ────────────────────────────────────
    const entitlement = await fetchUserEntitlement(prisma, profile.id)
    return ok(entitlement)
  } catch (err) {
    console.error('[me/entitlements] Unhandled error:', err)
    return fail('INTERNAL', 'Something went wrong on our end. We have been notified.', 500)
  }
}

// Method guard - every other verb is explicitly rejected with 405.

async function methodNotAllowed(): Promise<NextResponse> {
  return NextResponse.json(
    { ok: false, error: { code: 'method_not_allowed', message: 'GET only' } },
    { status: 405, headers: { Allow: 'GET', 'Cache-Control': 'private, no-store' } },
  )
}

export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed

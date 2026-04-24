/**
 * GET /api/flags
 *
 * Server-evaluated feature flags for the authenticated user. See
 * english-hub-mobile/docs/API_SPEC.md §4.9.
 *
 * The response is the same shape as `GET /me.flags`, but this endpoint
 * lets the mobile client refresh flags on demand without a full `/me`
 * fetch. Both paths go through `resolveFeatureFlags` to guarantee
 * symmetric output.
 *
 * The response body is dynamic — every key added to `FeatureFlagKey`
 * in `src/config/feature-flags.ts` is automatically surfaced here, so
 * new flags do not need a route change. Kept in sync with
 * `english-hub-mobile/docs/FEATURE_FLAGS.md`.
 *
 * Cache-Control: private, max-age=300 — flags change rarely, and the
 * mobile client's stale time (5 minutes, per API_SPEC.md §7) aligns.
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { resolveFeatureFlags } from '@/config/feature-flags'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// ─── Envelope helpers ─────────────────────────────────────────────────

function ok<T>(data: T, init?: ResponseInit): NextResponse {
  const res = NextResponse.json({ ok: true, data }, init)
  res.headers.set('Cache-Control', 'private, max-age=300')
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
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`flags:${ip}`, {
      limit: 30,
      windowSeconds: 60,
    })
    if (!rl.success) {
      return fail('RATE_LIMITED', 'Too many requests. Please try again shortly.', 429)
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user: sessionUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !sessionUser) {
      return fail('AUTH_EXPIRED', 'Your session has expired. Please sign in again.', 401)
    }

    // Fetch the user's privacy settings so we can apply per-user
    // overrides on top of the static defaults. We look up via
    // supabaseUserId (with an email fallback) but we tolerate "no
    // Prisma row yet" — new users get the default flag map.
    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: sessionUser.id },
      select: {
        privacySettings: {
          select: {
            analyticsEnabled: true,
            marketingEnabled: true,
          },
        },
      },
    })

    const profile =
      prismaUser ??
      (sessionUser.email
        ? await prisma.user.findUnique({
            where: { email: sessionUser.email.toLowerCase() },
            select: {
              privacySettings: {
                select: {
                  analyticsEnabled: true,
                  marketingEnabled: true,
                },
              },
            },
          })
        : null)

    const flags = resolveFeatureFlags({
      analyticsEnabled: profile?.privacySettings?.analyticsEnabled,
      marketingEnabled: profile?.privacySettings?.marketingEnabled,
    })

    return ok(flags)
  } catch (err) {
    console.error('[flags] Unhandled error:', err)
    return fail('INTERNAL', 'Something went wrong on our end. We have been notified.', 500)
  }
}

// ─── Method guards ────────────────────────────────────────────────────

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

/**
 * GET /api/me
 *
 * Unified profile endpoint — see
 * english-hub-mobile/docs/API_SPEC.md §4.1.
 *
 * A single call returns everything the mobile client needs on app boot
 * (and on app foreground after ~5 min background): user profile,
 * entitlements, role, and server-evaluated feature flags. Reduces the
 * per-boot RTT to one call instead of three.
 *
 * Response envelope:
 *   { ok: true, data: { user, entitlements, flags, role } }
 *
 * Auth: Supabase session via the existing middleware pattern.
 * Cache-Control: private, max-age=60 (matches API_SPEC.md §7).
 */

import { NextRequest, NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit'
import { fetchUserEntitlement, emptyEntitlement } from '@/lib/entitlements'
import { resolveFeatureFlags } from '@/config/feature-flags'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// ─── Envelope helpers ─────────────────────────────────────────────────

function ok<T>(data: T, init?: ResponseInit): NextResponse {
  const res = NextResponse.json({ ok: true, data }, init)
  // Short cache — profile doesn't change often but entitlements do.
  // Mobile invalidates on foreground if background > 5 minutes.
  res.headers.set('Cache-Control', 'private, max-age=60')
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
    // ── Rate limit — 60/min per IP (API_SPEC.md §6). ───────────────
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`me:${ip}`, {
      limit: 60,
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

    // ── Resolve Prisma profile + privacy settings in one round-trip ─
    const prismaUser = await prisma.user.findUnique({
      where: { supabaseUserId: sessionUser.id },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        dateOfBirth: true,
        school: true,
        selectedExamBoard: true,
        createdAt: true,
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
              id: true,
              email: true,
              firstName: true,
              lastName: true,
              role: true,
              dateOfBirth: true,
              school: true,
              selectedExamBoard: true,
              createdAt: true,
              privacySettings: {
                select: {
                  analyticsEnabled: true,
                  marketingEnabled: true,
                },
              },
            },
          })
        : null)

    // ── Brand-new user with no Prisma projection yet ───────────────
    //
    // We can still hydrate a minimal /me response from the Supabase
    // session alone — the mobile client calls /auth/register on first
    // sign-in and the next /me hit will have the full row.
    if (!profile) {
      return ok({
        user: {
          id: sessionUser.id,
          email: sessionUser.email ?? null,
          firstName: null,
          lastName: null,
          role: 'STUDENT' as const,
          dob: null,
          school: null,
          examBoard: null,
          createdAt: sessionUser.created_at ?? null,
        },
        entitlements: emptyEntitlement(),
        role: 'STUDENT' as const,
        flags: resolveFeatureFlags(),
      })
    }

    // ── Entitlements + flags ───────────────────────────────────────
    const [entitlements] = await Promise.all([
      fetchUserEntitlement(prisma, profile.id),
    ])

    const flags = resolveFeatureFlags({
      analyticsEnabled: profile.privacySettings?.analyticsEnabled,
      marketingEnabled: profile.privacySettings?.marketingEnabled,
    })

    return ok({
      user: {
        id: profile.id,
        email: profile.email,
        firstName: profile.firstName,
        lastName: profile.lastName,
        role: profile.role,
        dob: profile.dateOfBirth.toISOString(),
        school: profile.school,
        examBoard: profile.selectedExamBoard,
        createdAt: profile.createdAt.toISOString(),
      },
      entitlements,
      role: profile.role,
      flags,
    })
  } catch (err) {
    console.error('[me] Unhandled error:', err)
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

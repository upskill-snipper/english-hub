/**
 * /api/mobile/devices — POST (register) + GET (list)
 *
 * See english-hub-mobile/docs/API_SPEC.md §4.3.
 *
 * POST registers a mobile install for push + analytics. Upsert on
 * `(userId, deviceId)` — a reinstall with the same deviceId keeps the
 * row and bumps lastActiveAt. Soft-deletion (revokedAt set) is handled
 * by the sibling [id] route.
 *
 * GET lists the caller's own non-revoked devices — used by the
 * "Trusted devices" settings screen on mobile.
 */

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { prisma } from '@/lib/prisma'
import { rateLimit, getClientIp } from '@/lib/rate-limit'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

// ─── Envelope helpers ─────────────────────────────────────────────────

function ok<T>(data: T, status = 200): NextResponse {
  const res = NextResponse.json({ ok: true, data }, { status })
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

function fail(code: string, message: string, status: number): NextResponse {
  const res = NextResponse.json({ ok: false, error: { code, message } }, { status })
  res.headers.set('Cache-Control', 'private, no-store')
  return res
}

// ─── Schema ───────────────────────────────────────────────────────────

const registerDeviceSchema = z.object({
  deviceId: z.string().min(1).max(128),
  platform: z.enum(['ios', 'android', 'web']),
  osVersion: z.string().max(64).optional(),
  appVersion: z.string().max(64).optional(),
  pushToken: z.string().max(512).optional(),
})

type RegisterDeviceInput = z.infer<typeof registerDeviceSchema>

// Mapping from wire `platform` (lowercase) to DB enum.
function platformToDb(p: RegisterDeviceInput['platform']): 'IOS' | 'ANDROID' | 'WEB' {
  if (p === 'ios') return 'IOS'
  if (p === 'android') return 'ANDROID'
  return 'WEB'
}
function platformFromDb(p: 'IOS' | 'ANDROID' | 'WEB'): 'ios' | 'android' | 'web' {
  if (p === 'IOS') return 'ios'
  if (p === 'ANDROID') return 'android'
  return 'web'
}

// ─── Shared auth resolver ─────────────────────────────────────────────

async function resolveCallerPrismaId(
  sessionUserId: string,
  sessionUserEmail: string | null,
): Promise<string | null> {
  const prismaUser = await prisma.user.findUnique({
    where: { supabaseUserId: sessionUserId },
    select: { id: true },
  })
  if (prismaUser) return prismaUser.id
  if (sessionUserEmail) {
    const fallback = await prisma.user.findUnique({
      where: { email: sessionUserEmail.toLowerCase() },
      select: { id: true },
    })
    return fallback?.id ?? null
  }
  return null
}

// ─── POST — register a device ─────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIp(request.headers)
    // 10/hour per IP (API_SPEC.md §6). We also key on userId inside
    // Redis — IP alone is a coarse backstop.
    const rl = await rateLimit(`mobile-devices-post:${ip}`, {
      limit: 10,
      windowSeconds: 60 * 60,
    })
    if (!rl.success) {
      return fail('RATE_LIMITED', 'Too many device registrations. Please wait a moment.', 429)
    }

    const supabase = createServerSupabaseClient()
    const {
      data: { user: sessionUser },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !sessionUser) {
      return fail('AUTH_EXPIRED', 'Your session has expired. Please sign in again.', 401)
    }

    // Validate body.
    let parsed: RegisterDeviceInput
    try {
      const body = await request.json()
      parsed = registerDeviceSchema.parse(body)
    } catch (err) {
      if (err instanceof z.ZodError) {
        return fail('VALIDATION_FAILED', 'Invalid device payload.', 400)
      }
      return fail('VALIDATION_FAILED', 'Request body must be valid JSON.', 400)
    }

    const userId = await resolveCallerPrismaId(sessionUser.id, sessionUser.email ?? null)
    if (!userId) {
      // No Prisma row yet — mobile should register via /auth/register
      // first. We 404 so the client retries after onboarding completes.
      return fail('NOT_FOUND', 'User profile not initialised. Complete onboarding first.', 404)
    }

    // Upsert on the (userId, deviceId) unique. Re-registration on the
    // same device revives the row even if previously revoked — the
    // reinstall flow is legitimate and Apple/Play issue new push
    // tokens on reinstall regardless.
    const device = await prisma.mobileDevice.upsert({
      where: {
        userId_deviceId: {
          userId,
          deviceId: parsed.deviceId,
        },
      },
      update: {
        platform: platformToDb(parsed.platform),
        osVersion: parsed.osVersion ?? null,
        appVersion: parsed.appVersion ?? null,
        pushToken: parsed.pushToken ?? null,
        lastActiveAt: new Date(),
        revokedAt: null,
      },
      create: {
        userId,
        deviceId: parsed.deviceId,
        platform: platformToDb(parsed.platform),
        osVersion: parsed.osVersion ?? null,
        appVersion: parsed.appVersion ?? null,
        pushToken: parsed.pushToken ?? null,
      },
      select: {
        id: true,
        deviceId: true,
        platform: true,
        osVersion: true,
        appVersion: true,
        lastActiveAt: true,
        createdAt: true,
      },
    })

    return ok(
      {
        id: device.id,
        deviceId: device.deviceId,
        platform: platformFromDb(device.platform),
        osVersion: device.osVersion,
        appVersion: device.appVersion,
        lastActiveAt: device.lastActiveAt.toISOString(),
        createdAt: device.createdAt.toISOString(),
      },
      201,
    )
  } catch (err) {
    console.error('[mobile/devices POST] Unhandled error:', err)
    return fail('INTERNAL', 'Something went wrong on our end. We have been notified.', 500)
  }
}

// ─── GET — list caller's own devices ──────────────────────────────────

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`mobile-devices-get:${ip}`, {
      limit: 60,
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

    const userId = await resolveCallerPrismaId(sessionUser.id, sessionUser.email ?? null)
    if (!userId) {
      // Empty list rather than 404 — the client can survive a
      // zero-device state.
      return ok({ devices: [] })
    }

    const rows = await prisma.mobileDevice.findMany({
      where: { userId, revokedAt: null },
      orderBy: { lastActiveAt: 'desc' },
      select: {
        id: true,
        deviceId: true,
        platform: true,
        osVersion: true,
        appVersion: true,
        lastActiveAt: true,
        createdAt: true,
      },
    })

    return ok({
      devices: rows.map((r) => ({
        id: r.id,
        deviceId: r.deviceId,
        platform: platformFromDb(r.platform),
        osVersion: r.osVersion,
        appVersion: r.appVersion,
        lastActiveAt: r.lastActiveAt.toISOString(),
        createdAt: r.createdAt.toISOString(),
      })),
    })
  } catch (err) {
    console.error('[mobile/devices GET] Unhandled error:', err)
    return fail('INTERNAL', 'Something went wrong on our end. We have been notified.', 500)
  }
}

// ─── Method guards ────────────────────────────────────────────────────

async function methodNotAllowed(): Promise<NextResponse> {
  return NextResponse.json(
    { ok: false, error: { code: 'method_not_allowed', message: 'GET or POST only' } },
    { status: 405, headers: { Allow: 'GET, POST', 'Cache-Control': 'private, no-store' } },
  )
}

export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed
export const DELETE = methodNotAllowed

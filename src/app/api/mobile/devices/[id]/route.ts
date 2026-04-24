/**
 * DELETE /api/mobile/devices/:id
 *
 * Soft-revoke a device. See english-hub-mobile/docs/API_SPEC.md §4.4.
 *
 * We deliberately collapse the "device id unknown" and "device not
 * owned by caller" branches into a single 404 so a malicious caller
 * cannot enumerate device ids from a foreign user. The mobile UI
 * treats 404 as "already revoked" and shows a toast.
 *
 * Soft-delete (setting `revokedAt`) preserves the row for audit and
 * allows re-activation on reinstall. Hard-delete would break our
 * push-analytics retention window.
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

// ─── Shared auth resolver (duplicated here to keep the route file
//     self-contained — tiny function, not worth a cross-file import). ──

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

// ─── Param schema ─────────────────────────────────────────────────────

const paramsSchema = z.object({
  // MobileDevice.id is a Postgres UUID.
  id: z.string().uuid('Device id must be a UUID.'),
})

// ─── DELETE ───────────────────────────────────────────────────────────

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
): Promise<NextResponse> {
  try {
    const ip = getClientIp(request.headers)
    const rl = await rateLimit(`mobile-devices-delete:${ip}`, {
      limit: 20,
      windowSeconds: 60 * 60,
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

    const rawParams = await context.params
    let id: string
    try {
      id = paramsSchema.parse(rawParams).id
    } catch {
      // Not a UUID — treat as "unknown device" (collapsed with the
      // ownership-mismatch branch to avoid enumeration).
      return fail('NOT_FOUND', 'Device not found.', 404)
    }

    const userId = await resolveCallerPrismaId(sessionUser.id, sessionUser.email ?? null)
    if (!userId) {
      return fail('NOT_FOUND', 'Device not found.', 404)
    }

    // Fetch-then-update to enforce ownership. We look for an active
    // (non-revoked) row owned by the caller; anything else → 404.
    const device = await prisma.mobileDevice.findFirst({
      where: { id, userId, revokedAt: null },
      select: { id: true },
    })
    if (!device) {
      return fail('NOT_FOUND', 'Device not found.', 404)
    }

    await prisma.mobileDevice.update({
      where: { id: device.id },
      data: {
        revokedAt: new Date(),
        // Clear the push token so any in-flight notifications fail
        // fast rather than waking a signed-out device.
        pushToken: null,
      },
    })

    return ok({ revoked: true })
  } catch (err) {
    console.error('[mobile/devices/[id] DELETE] Unhandled error:', err)
    return fail('INTERNAL', 'Something went wrong on our end. We have been notified.', 500)
  }
}

// ─── Method guards ────────────────────────────────────────────────────

async function methodNotAllowed(): Promise<NextResponse> {
  return NextResponse.json(
    { ok: false, error: { code: 'method_not_allowed', message: 'DELETE only' } },
    { status: 405, headers: { Allow: 'DELETE', 'Cache-Control': 'private, no-store' } },
  )
}

export const GET = methodNotAllowed
export const POST = methodNotAllowed
export const PUT = methodNotAllowed
export const PATCH = methodNotAllowed

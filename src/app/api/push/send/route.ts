/**
 * Internal push-send helper - cron-only, CRON_SECRET-gated.
 *
 * Accepts `{ userId, title?, body, deepLink }` and fans out to every active
 * registered device in `MobileDevice` via the Expo Push API. Each device is
 * addressed by its `pushToken` (Expo format) and a single batched call is
 * issued to `https://exp.host/--/api/v2/push/send`.
 *
 * This endpoint is **not** exposed to end users. The only caller is the
 * weekly-parent-report cron (and any future server-side cron). We verify
 * the CRON_SECRET header and bail otherwise.
 *
 * Children's Code §5.13 - push copy is factual and non-punitive. The caller
 * is responsible for preparing copy that fits the tone.
 */

import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { z } from 'zod'

import { prisma } from '@/lib/prisma'

// ─── Input schema ────────────────────────────────────────────────────────

const payloadSchema = z.object({
  userId: z.string().min(1),
  title: z.string().max(120).optional(),
  body: z.string().min(1).max(280),
  deepLink: z.string().min(1).max(500),
  /** Optional extra key/value metadata the mobile client can read. */
  data: z.record(z.string(), z.unknown()).optional(),
})

// ─── Handler ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest): Promise<NextResponse> {
  // Timing-safe CRON_SECRET check (matches the pattern used by /api/cron/*).
  const cronSecret = request.headers.get('x-cron-secret') ?? ''
  const expectedSecret = process.env.CRON_SECRET
  if (!expectedSecret) {
    console.error('[push/send] CRON_SECRET is not configured')
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  if (
    cronSecret.length !== expectedSecret.length ||
    !crypto.timingSafeEqual(Buffer.from(cronSecret), Buffer.from(expectedSecret))
  ) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  let parsed
  try {
    parsed = payloadSchema.parse(await request.json())
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid payload', detail: err instanceof Error ? err.message : undefined },
      { status: 400 },
    )
  }
  const { userId, title, body, deepLink, data } = parsed

  // Pull every active (non-revoked) device row for the user that has a push
  // token. A user with no devices is not an error - the cron will simply
  // record `pushed = 0`.
  const devices = await prisma.mobileDevice.findMany({
    where: {
      userId,
      revokedAt: null,
      pushToken: { not: null },
    },
    select: { id: true, pushToken: true, platform: true },
  })

  if (devices.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, tokens: 0 })
  }

  const messages = devices.map((d) => ({
    to: d.pushToken!,
    title: title ?? 'The English Hub',
    body,
    data: { deepLink, ...(data ?? {}) },
    // Calm defaults - no critical, no loud sound (Children's Code §5.13).
    sound: 'default' as const,
    priority: 'default' as const,
    channelId: 'parent-reports',
  }))

  // Expo's endpoint accepts up to 100 messages per call. Chunk defensively -
  // parent audiences are tiny, but belt-and-braces for future growth.
  const CHUNK_SIZE = 100
  let sent = 0
  const errors: string[] = []

  for (let i = 0; i < messages.length; i += CHUNK_SIZE) {
    const chunk = messages.slice(i, i + CHUNK_SIZE)
    try {
      const res = await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'accept-encoding': 'gzip, deflate',
          accept: 'application/json',
        },
        body: JSON.stringify(chunk),
      })
      if (!res.ok) {
        errors.push(`Expo HTTP ${res.status}`)
        continue
      }
      sent += chunk.length
    } catch (err) {
      errors.push(err instanceof Error ? err.message : 'fetch failed')
    }
  }

  return NextResponse.json({
    ok: errors.length === 0,
    sent,
    tokens: messages.length,
    errors: errors.length > 0 ? errors : undefined,
  })
}

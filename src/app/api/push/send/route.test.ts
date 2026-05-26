/**
 * Tests for POST /api/push/send - the cron-only Expo Push fanout.
 *
 * Coverage:
 *   1. 401 when `x-cron-secret` is missing or wrong.
 *   2. 500 when CRON_SECRET env var is not configured.
 *   3. 400 on malformed payload.
 *   4. 200 with `sent = 0` when the user has no registered devices.
 *   5. 200 happy path - Expo is called, `sent` equals the device count.
 *   6. 200 error path - Expo returns non-2xx, response surfaces the error
 *      and `sent` is zero.
 */

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ─── In-memory mocks ────────────────────────────────────────────────────

let devices: Array<{ id: string; pushToken: string | null; platform: string }> = []

const prismaMock = {
  mobileDevice: {
    findMany: vi.fn(async () => devices),
  },
}

vi.mock('@/lib/prisma', () => ({ prisma: prismaMock }))

// Global fetch mock - tests push a response.
const fetchQueue: Array<{ status: number; body: unknown; ok?: boolean }> = []
const originalFetch = globalThis.fetch
beforeEach(() => {
  fetchQueue.length = 0
  globalThis.fetch = vi.fn(async () => {
    const next = fetchQueue.shift()
    if (!next) throw new Error('no queued fetch response')
    return new Response(JSON.stringify(next.body), {
      status: next.status,
      headers: { 'content-type': 'application/json' },
    })
  }) as unknown as typeof fetch
})

function restoreFetch(): void {
  globalThis.fetch = originalFetch
}

// ─── Helpers ────────────────────────────────────────────────────────────

function buildRequest(body: unknown, cronSecret: string | null = 'test-cron-secret'): NextRequest {
  const headers = new Headers({ 'content-type': 'application/json' })
  if (cronSecret !== null) headers.set('x-cron-secret', cronSecret)
  return new NextRequest('http://localhost/api/push/send', {
    method: 'POST',
    headers,
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })
}

const VALID_BODY = {
  userId: 'user-1',
  title: 'Assignment due tomorrow',
  body: 'Your essay on "Power and Conflict" is due tomorrow at 5pm.',
  deepLink: 'englishhub://essay/assignment-123',
}

// ─── Tests ──────────────────────────────────────────────────────────────

describe('POST /api/push/send', () => {
  let POST: (req: NextRequest) => Promise<Response>

  beforeEach(async () => {
    vi.resetModules()
    vi.clearAllMocks()
    devices = []
    process.env.CRON_SECRET = 'test-cron-secret'

    const mod = await import('@/app/api/push/send/route')
    POST = mod.POST as unknown as (req: NextRequest) => Promise<Response>
  })

  // ── Auth ────────────────────────────────────────────────────────────

  it('returns 401 when x-cron-secret is missing', async () => {
    const res = await POST(buildRequest(VALID_BODY, null))
    expect(res.status).toBe(401)
  })

  it('returns 401 when x-cron-secret is wrong', async () => {
    const res = await POST(buildRequest(VALID_BODY, 'wrong-secret'))
    expect(res.status).toBe(401)
  })

  it('returns 500 when CRON_SECRET env is missing', async () => {
    delete process.env.CRON_SECRET
    vi.resetModules()
    const mod = await import('@/app/api/push/send/route')
    const handler = mod.POST as unknown as (req: NextRequest) => Promise<Response>
    const res = await handler(buildRequest(VALID_BODY))
    expect(res.status).toBe(500)
  })

  // ── Validation ──────────────────────────────────────────────────────

  it('returns 400 when the payload is missing required fields', async () => {
    const res = await POST(buildRequest({ userId: 'user-1' }))
    expect(res.status).toBe(400)
  })

  // ── No devices ──────────────────────────────────────────────────────

  it('returns 200 with sent=0 when the user has no registered devices', async () => {
    devices = []
    const res = await POST(buildRequest(VALID_BODY))
    expect(res.status).toBe(200)
    const body = (await res.json()) as { ok: boolean; sent: number; tokens: number }
    expect(body.ok).toBe(true)
    expect(body.sent).toBe(0)
    expect(body.tokens).toBe(0)
    // Expo was never called.
    expect(fetchQueue.length).toBe(0)
  })

  // ── Happy path ──────────────────────────────────────────────────────

  it('returns 200 and fans out to every device on success', async () => {
    devices = [
      { id: 'dev-1', pushToken: 'ExponentPushToken[abc]', platform: 'IOS' },
      { id: 'dev-2', pushToken: 'ExponentPushToken[def]', platform: 'ANDROID' },
    ]
    fetchQueue.push({
      status: 200,
      body: {
        data: [
          { status: 'ok', id: 'tkt-1' },
          { status: 'ok', id: 'tkt-2' },
        ],
      },
    })

    const res = await POST(buildRequest(VALID_BODY))
    expect(res.status).toBe(200)
    const body = (await res.json()) as { ok: boolean; sent: number; tokens: number }
    expect(body.ok).toBe(true)
    expect(body.sent).toBe(2)
    expect(body.tokens).toBe(2)
    // Exactly one Expo call made (single chunk).
    expect(globalThis.fetch as unknown as ReturnType<typeof vi.fn>).toHaveBeenCalledTimes(1)
    restoreFetch()
  })

  // ── Expo error ──────────────────────────────────────────────────────

  it('surfaces errors when Expo returns a non-2xx', async () => {
    devices = [{ id: 'dev-1', pushToken: 'ExponentPushToken[abc]', platform: 'IOS' }]
    fetchQueue.push({ status: 500, body: { error: 'internal' } })

    const res = await POST(buildRequest(VALID_BODY))
    expect(res.status).toBe(200)
    const body = (await res.json()) as {
      ok: boolean
      sent: number
      errors?: string[]
    }
    expect(body.ok).toBe(false)
    expect(body.sent).toBe(0)
    expect(body.errors).toBeDefined()
    expect((body.errors as string[]).length).toBeGreaterThan(0)
    restoreFetch()
  })
})

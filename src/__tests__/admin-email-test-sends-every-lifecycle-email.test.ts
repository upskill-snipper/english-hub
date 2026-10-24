import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * The one real proof, made possible (23 October 2026).
 *
 * Document 08 asks for one send of each lifecycle template to the founder's
 * address through /api/admin/email-test before any switch is set. The route
 * could send only a fixed diagnostic message. With `lifecycle: true` it now
 * sends every message in every audience variant, through the real transport,
 * with both one-click headers, and writes nothing to the ledger: a sample must
 * never stop the real email reaching a real person.
 */

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => ({ success: true, resetAt: Date.now() + 1000 }),
  getClientIp: () => '127.0.0.1',
}))

let isAdmin = true
vi.mock('@/lib/admin-auth', () => ({
  verifyAdmin: async () =>
    isAdmin
      ? { user: { id: '11111111-2222-4333-8444-555555555555' }, error: null }
      : { user: null, error: 'Unauthorized' },
}))

const ledgerWrites: unknown[] = []
vi.mock('@/lib/prisma', () => ({
  prisma: { lifecycleEmail: { create: async (a: unknown) => ledgerWrites.push(a) } },
}))

type SendArgs = [string, string, string, string, { headers?: Record<string, string> }?]
const sendEmail = vi.fn(async (..._a: SendArgs) => ({ success: true }))
vi.mock('@/lib/email', () => ({ sendEmail: (...a: unknown[]) => sendEmail(...(a as SendArgs)) }))

vi.mock('@/lib/email/resend', () => ({
  sendViaResend: vi.fn(async () => ({ sent: true, messageId: 'm' })),
  escapeHtml: (s: string) => s,
}))

const { POST } = await import('@/app/api/admin/email-test/route')

function post(body: unknown) {
  return POST(
    new NextRequest('http://localhost/api/admin/email-test', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    }),
  )
}

beforeEach(() => {
  isAdmin = true
  process.env.CRON_SECRET = 'test-secret'
  delete process.env.ADMIN_DIAGNOSTIC_TOKEN
  ledgerWrites.length = 0
  sendEmail.mockClear()
})

describe('POST /api/admin/email-test with lifecycle: true', () => {
  it('sends every lifecycle email once, to the address given, with both headers', async () => {
    const res = await post({ to: 'founder@example.com', lifecycle: true })
    const json = await res.json()

    expect(res.status).toBe(200)
    expect(json.sent).toBe(16)
    expect(sendEmail).toHaveBeenCalledTimes(16)
    const subjects = sendEmail.mock.calls.map((c) => c[1])
    for (const s of [
      'Your English Hub account is ready: start with your set text',
      'Your first marked essay: a mark for each assessment objective',
      'Your free trial has ended - your account is still open',
      'Quests for your set text are free with your account',
      'One essay from class, marked against each assessment objective',
      'Your payment did not go through, so your plan is paused',
      'Your plan has ended',
    ]) {
      expect(subjects).toContain(s)
    }
    for (const call of sendEmail.mock.calls) {
      expect(call[0]).toBe('founder@example.com')
      expect(call[4]?.headers?.['List-Unsubscribe']).toMatch(/\/api\/unsubscribe\?token=/)
      expect(call[4]?.headers?.['List-Unsubscribe-Post']).toBe('List-Unsubscribe=One-Click')
    }
  })

  it('writes nothing to the ledger', async () => {
    await post({ to: 'founder@example.com', lifecycle: true })
    expect(ledgerWrites).toHaveLength(0)
  })

  it('is admin only', async () => {
    isAdmin = false
    const res = await post({ to: 'founder@example.com', lifecycle: true })
    expect(res.status).toBe(401)
    expect(sendEmail).not.toHaveBeenCalled()
  })

  it('reports a failed send rather than saying all went', async () => {
    sendEmail.mockResolvedValueOnce({ success: false, error: 'domain not verified' } as never)
    const res = await post({ to: 'founder@example.com', lifecycle: true })
    const json = await res.json()
    expect(res.status).toBe(502)
    expect(json.ok).toBe(false)
    expect(json.sent).toBe(15)
  })
})

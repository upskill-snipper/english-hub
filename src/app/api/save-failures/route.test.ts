// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

// Mocked before the route is imported (vitest hoists vi.mock).
vi.mock('@/lib/supabase/server', () => ({ createServerSupabaseClient: vi.fn() }))
vi.mock('@/lib/rate-limit', () => ({ rateLimit: vi.fn() }))
vi.mock('@sentry/nextjs', () => ({ captureMessage: vi.fn() }))

import { POST } from './route'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import * as Sentry from '@sentry/nextjs'

/**
 * POST /api/save-failures records a student's failed save, as the report
 * src/lib/save-failure-report.ts allows and nothing more, and only for a
 * signed-in student. See src/__tests__/a-failed-save-reaches-the-team.test.ts
 * for the browser side and the reason this exists (10 October 2026).
 */

const ACCOUNT = '7d1c9a52-1f0e-4b7a-9c3d-2e8f6a4b1c90'
const ANSWER = 'An unmistakable answer: the schoolboy droops under the cruel eye'
const REPORT = {
  path: 'mock-exam',
  code: '42501',
  status: 403,
  message: 'new row violates row-level security policy for table "practice_sessions"',
}

function signedIn(id: string | null) {
  vi.mocked(createServerSupabaseClient).mockReturnValue({
    auth: { getUser: async () => ({ data: { user: id ? { id } : null } }) },
  } as unknown as ReturnType<typeof createServerSupabaseClient>)
}

const post = (body: unknown) =>
  new NextRequest('https://theenglishhub.app/api/save-failures', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  })

let log: ReturnType<typeof vi.spyOn>
beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(rateLimit).mockResolvedValue({ success: true, remaining: 19, resetAt: 0 })
  log = vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => log.mockRestore())

/** Everything this request wrote to the log or sent to Sentry, as text. */
const recorded = () => JSON.stringify([log.mock.calls, vi.mocked(Sentry.captureMessage).mock.calls])

describe('POST /api/save-failures', () => {
  it('records a signed-in student’s report in the log and in Sentry, once each', async () => {
    signedIn(ACCOUNT)
    const res = await POST(post(REPORT))
    expect(res.status).toBe(204)
    expect(log).toHaveBeenCalledOnce()
    expect(log.mock.calls[0]).toEqual(['[save-failure]', JSON.stringify(REPORT)])
    expect(Sentry.captureMessage).toHaveBeenCalledOnce()
    expect(vi.mocked(Sentry.captureMessage).mock.calls[0][1]).toMatchObject({
      level: 'error',
      tags: { area: 'student-save', path: 'mock-exam', code: '42501' },
    })
    // The account is used to rate-limit, and recorded nowhere.
    expect(recorded()).not.toContain(ACCOUNT)
  })

  it('keeps only the report, whatever else a body carries', async () => {
    signedIn(ACCOUNT)
    const res = await POST(post({ ...REPORT, details: ANSWER, answer: ANSWER, userId: ACCOUNT }))
    expect(res.status).toBe(204)
    expect(log.mock.calls[0][1]).toBe(JSON.stringify(REPORT))
    expect(recorded()).not.toContain(ANSWER)
    expect(recorded()).not.toContain(ACCOUNT)
  })

  it('takes no report from someone not signed in', async () => {
    signedIn(null)
    const res = await POST(post(REPORT))
    expect(res.status).toBe(401)
    expect(rateLimit).not.toHaveBeenCalled()
    expect(log).not.toHaveBeenCalled()
    expect(Sentry.captureMessage).not.toHaveBeenCalled()
  })

  it.each([
    ['an unknown save', { ...REPORT, path: 'essay' }],
    ['a code that is not one', { ...REPORT, code: 'drop table; --' }],
    ['a body that is not JSON', 'not json'],
  ])('refuses %s and records nothing', async (_, body) => {
    signedIn(ACCOUNT)
    const res = await POST(post(body))
    expect(res.status).toBe(400)
    expect(log).not.toHaveBeenCalled()
    expect(Sentry.captureMessage).not.toHaveBeenCalled()
  })

  it('stops at twenty an hour for one account', async () => {
    signedIn(ACCOUNT)
    vi.mocked(rateLimit).mockResolvedValue({ success: false, remaining: 0, resetAt: 0 })
    const res = await POST(post(REPORT))
    expect(res.status).toBe(429)
    expect(rateLimit).toHaveBeenCalledWith(`save-failures:${ACCOUNT}`, {
      limit: 20,
      windowSeconds: 3600,
    })
    expect(log).not.toHaveBeenCalled()
  })
})

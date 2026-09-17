import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

/**
 * /api/consent - the grant path.
 *
 * The POST handler has existed all along. Nothing called it: the consent
 * page only ever issued GET and DELETE, so there was no control anywhere in
 * the product for giving AI-processing consent, while all 11 AI routes
 * refused every learner for not having it. These tests cover the server side
 * of that control, including the list of grantable consents the page renders
 * its button from.
 */

const mockGetUser = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({ auth: { getUser: mockGetUser } }),
  createServiceRoleClient: () => ({ from: vi.fn() }),
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi
    .fn()
    .mockResolvedValue({ success: true, remaining: 29, resetAt: Date.now() + 60000 }),
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
}))

const mockRecordConsent = vi.fn()
const mockWithdrawConsent = vi.fn()
const mockGetConsents = vi.fn()

vi.mock('@/lib/consent', async () => {
  // The constants are real: the grantable list and the essential/optional
  // split are exactly what these tests are about.
  const actual = await vi.importActual<typeof import('@/lib/consent')>('@/lib/consent')
  return {
    ...actual,
    recordConsent: (...args: unknown[]) => mockRecordConsent(...args),
    withdrawConsent: (...args: unknown[]) => mockWithdrawConsent(...args),
    getConsents: (...args: unknown[]) => mockGetConsents(...args),
  }
})

const UUID = '11111111-2222-3333-4444-555555555555'

function request(method: string, body?: Record<string, unknown>): NextRequest {
  return new NextRequest(new URL('http://localhost:3000/api/consent'), {
    method,
    ...(body
      ? { body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }
      : {}),
  })
}

beforeEach(() => {
  mockGetUser.mockReset()
  mockRecordConsent.mockReset()
  mockWithdrawConsent.mockReset()
  mockGetConsents.mockReset()
  mockGetUser.mockResolvedValue({ data: { user: { id: UUID } }, error: null })
  mockGetConsents.mockResolvedValue([])
})

describe('GET /api/consent', () => {
  it('tells the page which consents can be given, and their policy version', async () => {
    const { GET } = await import('@/app/api/consent/route')
    const json = await (await GET(request('GET'))).json()

    const ai = json.grantable.find(
      (g: { consentType: string }) => g.consentType === 'AI_PROCESSING',
    )
    expect(ai).toBeDefined()
    expect(ai.granted).toBe(false)
    expect(ai.version).toBe('1.0')
  })

  it('reports a consent already held as granted, so the page offers withdrawal instead', async () => {
    mockGetConsents.mockResolvedValue([
      {
        id: 'cns_1',
        consentType: 'AI_PROCESSING',
        version: '1.0',
        granted: true,
        grantedAt: new Date('2026-09-17T10:00:00.000Z'),
        withdrawnAt: null,
        method: 'EXPLICIT',
      },
    ])

    const { GET } = await import('@/app/api/consent/route')
    const json = await (await GET(request('GET'))).json()

    const ai = json.grantable.find(
      (g: { consentType: string }) => g.consentType === 'AI_PROCESSING',
    )
    expect(ai.granted).toBe(true)
    // AI processing is no longer flagged essential, so the page shows a
    // Withdraw button for it. Art.7(3): as easy to withdraw as to give.
    expect(json.consents[0].isEssential).toBe(false)
  })
})

describe('POST /api/consent', () => {
  it('records an AI-processing grant against the signed-in account', async () => {
    mockRecordConsent.mockResolvedValue({
      id: 'cns_1',
      consentType: 'AI_PROCESSING',
      granted: true,
    })

    const { POST } = await import('@/app/api/consent/route')
    const res = await POST(
      request('POST', {
        consentType: 'AI_PROCESSING',
        version: '1.0',
        granted: true,
        method: 'EXPLICIT',
      }),
    )

    expect(res.status).toBe(201)
    expect(mockRecordConsent).toHaveBeenCalledWith(
      UUID,
      'AI_PROCESSING',
      '1.0',
      true,
      'EXPLICIT',
      expect.any(String),
    )
  })

  it('reports an honest failure, and records nothing, when the account cannot be keyed', async () => {
    mockRecordConsent.mockRejectedValue(new Error('Cannot record consent: no user matches id "x".'))

    const { POST } = await import('@/app/api/consent/route')
    const res = await POST(
      request('POST', {
        consentType: 'AI_PROCESSING',
        version: '1.0',
        granted: true,
        method: 'EXPLICIT',
      }),
    )

    expect(res.status).toBe(503)
    const json = await res.json()
    // Never "saved" when nothing was saved, and it names a real contact.
    expect(json.error).toMatch(/nothing has been saved/i)
    expect(json.error).toContain('dpo@theenglishhub.app')
  })

  it('refuses to route around the essential-consent guard with granted: false', async () => {
    const { POST } = await import('@/app/api/consent/route')
    const res = await POST(
      request('POST', {
        consentType: 'TERMS',
        version: '1.0',
        granted: false,
        method: 'EXPLICIT',
      }),
    )

    expect(res.status).toBe(403)
    expect(mockRecordConsent).not.toHaveBeenCalled()
  })

  it('requires a session', async () => {
    mockGetUser.mockResolvedValue({ data: { user: null }, error: { message: 'no session' } })

    const { POST } = await import('@/app/api/consent/route')
    const res = await POST(
      request('POST', {
        consentType: 'AI_PROCESSING',
        version: '1.0',
        granted: true,
        method: 'EXPLICIT',
      }),
    )

    expect(res.status).toBe(401)
    expect(mockRecordConsent).not.toHaveBeenCalled()
  })
})

describe('DELETE /api/consent', () => {
  it('withdraws AI-processing consent', async () => {
    mockWithdrawConsent.mockResolvedValue({
      id: 'cns_2',
      consentType: 'AI_PROCESSING',
      granted: false,
    })

    const { DELETE } = await import('@/app/api/consent/route')
    const res = await DELETE(request('DELETE', { consentType: 'AI_PROCESSING' }))

    expect(res.status).toBe(200)
    expect(mockWithdrawConsent).toHaveBeenCalledWith(UUID, 'AI_PROCESSING', expect.any(String))
  })
})

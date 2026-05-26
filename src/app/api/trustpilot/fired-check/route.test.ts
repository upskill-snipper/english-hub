/**
 * fired-check route - auth, happy canFire, race protection.
 */

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'

// ── Mocks ──────────────────────────────────────────────────────────────────

let authUser: { id: string; email: string } | null = null
vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user: authUser } }) },
  }),
  createServiceRoleClient: () => ({
    from: () => ({
      insert: () => ({
        select: () => ({
          single: async () =>
            reserveShouldFail
              ? { data: null, error: { code: '23505' } }
              : { data: { id: 'row-1' }, error: null },
        }),
      }),
      select: () => ({
        eq: () => ({
          eq: () => ({
            in: () => ({ gte: () => ({ limit: async () => ({ data: [], error: null }) }) }),
          }),
          in: () => ({ gte: () => ({ limit: async () => ({ data: [], error: null }) }) }),
        }),
      }),
    }),
  }),
}))

let reserveShouldFail = false

vi.mock('@/lib/prisma', () => ({
  prisma: {
    user: {
      findUnique: vi
        .fn()
        .mockImplementation(async ({ where }: { where: { id?: string; email?: string } }) => {
          if (where.email === 'a@b.com' || where.id === 'u1') {
            return {
              id: 'u1',
              dateOfBirth: new Date('2000-01-01'),
              isMinor: false,
              deletedAt: null,
              privacySettings: { marketingEnabled: true, aiOptOut: false },
            }
          }
          return null
        }),
    },
  },
}))

import { POST } from './route'

function makeRequest(body: unknown): Request {
  return new Request('http://localhost/api/trustpilot/fired-check', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

beforeEach(() => {
  process.env.TRUSTPILOT_ENABLED = 'true'
  process.env.TRUSTPILOT_INVITE_EMAIL = 'x@invite.trustpilot.com'
  authUser = null
  reserveShouldFail = false
})
afterEach(() => {
  vi.clearAllMocks()
})

describe('POST /api/trustpilot/fired-check', () => {
  it('401 when unauthenticated', async () => {
    const res = await POST(
      makeRequest({ trigger: 'student_first_mark', referenceId: 'u1' }) as never,
    )
    expect(res.status).toBe(401)
    const json = await (res as unknown as Response).json()
    expect(json.canFire).toBe(false)
  })

  it('200 with canFire:true when authenticated and dedup clear', async () => {
    authUser = { id: 'u1', email: 'a@b.com' }
    const res = await POST(
      makeRequest({ trigger: 'student_first_mark', referenceId: 'u1' }) as never,
    )
    expect(res.status).toBe(200)
    const json = await (res as unknown as Response).json()
    expect(json).toEqual({ canFire: true })
  })

  it('atomic reserve denies when 23505 unique_violation fires', async () => {
    authUser = { id: 'u1', email: 'a@b.com' }
    reserveShouldFail = true
    const res = await POST(
      makeRequest({ trigger: 'student_first_mark', referenceId: 'u1' }) as never,
    )
    const json = await (res as unknown as Response).json()
    expect(json.canFire).toBe(false)
    expect(json.reason).toBe('duplicate_trigger_12m')
  })
})

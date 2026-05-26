import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'

// ---------------------------------------------------------------------------
// Mocks - Supabase clients & rate limiting
// ---------------------------------------------------------------------------

const mockSingle = vi.fn()
const mockEq = vi.fn(() => ({ single: mockSingle, eq: mockEq, order: mockOrder }))
const mockOrder = vi.fn(() => ({ data: [], error: null }))
const mockSelect = vi.fn(() => ({ eq: mockEq }))
const mockInsert = vi.fn(() => ({ error: null }))
const mockUpdate = vi.fn(() => ({ eq: mockEq }))
const mockFrom = vi.fn(() => ({
  select: mockSelect,
  insert: mockInsert,
  update: mockUpdate,
}))

const mockGetUser = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: mockGetUser },
  }),
  createServiceRoleClient: () => ({
    from: mockFrom,
  }),
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: vi
    .fn()
    .mockResolvedValue({ success: true, remaining: 10, resetAt: Date.now() + 60_000 }),
  getClientIp: vi.fn().mockReturnValue('127.0.0.1'),
}))

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildRequest(
  method: string,
  body?: Record<string, unknown>,
  searchParams?: Record<string, string>,
): NextRequest {
  const url = new URL('http://localhost:3000/api/school/consent')
  if (searchParams) {
    for (const [k, v] of Object.entries(searchParams)) {
      url.searchParams.set(k, v)
    }
  }
  return new NextRequest(url, {
    method,
    ...(body
      ? { body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' } }
      : {}),
  })
}

/** Reset all Supabase mock state between tests */
function resetMocks() {
  mockGetUser.mockReset()
  mockFrom.mockReset()
  mockSelect.mockReset()
  mockEq.mockReset()
  mockSingle.mockReset()
  mockInsert.mockReset()
  mockUpdate.mockReset()
  mockOrder.mockReset()

  // Restore default chaining behaviour
  mockOrder.mockReturnValue({ data: [], error: null })
  mockEq.mockImplementation(() => ({ single: mockSingle, eq: mockEq, order: mockOrder }))
  mockSelect.mockImplementation(() => ({ eq: mockEq }))
  mockInsert.mockReturnValue({ error: null })
  mockUpdate.mockImplementation(() => ({ eq: mockEq }))
  mockFrom.mockImplementation(() => ({
    select: mockSelect,
    insert: mockInsert,
    update: mockUpdate,
  }))
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('Parental Consent System', () => {
  beforeEach(() => {
    resetMocks()
  })

  // ── POST /api/school/consent - Submit consent request ───────────────────

  describe('POST - consent request', () => {
    it('requires authentication', async () => {
      mockGetUser.mockResolvedValue({
        data: { user: null },
        error: { message: 'Not authenticated' },
      })

      const { POST } = await import('@/app/api/school/consent/route')
      const res = await POST(
        buildRequest('POST', { parent_email: 'parent@example.com', school_id: 'abc' }),
      )

      expect(res.status).toBe(401)
      const json = await res.json()
      expect(json.error).toMatch(/logged in/i)
    })

    it('rejects missing parent_email', async () => {
      mockGetUser.mockResolvedValue({
        data: { user: { id: 'u1', email: 'student@example.com' } },
        error: null,
      })

      const { POST } = await import('@/app/api/school/consent/route')
      const res = await POST(buildRequest('POST', { school_id: 'abc' }))

      expect(res.status).toBe(422)
      const json = await res.json()
      expect(json.error).toMatch(/email/i)
    })

    it('rejects missing school_id', async () => {
      mockGetUser.mockResolvedValue({
        data: { user: { id: 'u1', email: 'student@example.com' } },
        error: null,
      })

      const { POST } = await import('@/app/api/school/consent/route')
      const res = await POST(buildRequest('POST', { parent_email: 'parent@example.com' }))

      expect(res.status).toBe(422)
      const json = await res.json()
      expect(json.error).toMatch(/school/i)
    })

    it('validates email format', async () => {
      mockGetUser.mockResolvedValue({
        data: { user: { id: 'u1', email: 'student@example.com' } },
        error: null,
      })

      const { POST } = await import('@/app/api/school/consent/route')
      const res = await POST(
        buildRequest('POST', { parent_email: 'not-an-email', school_id: 'abc' }),
      )

      expect(res.status).toBe(422)
      const json = await res.json()
      expect(json.error).toMatch(/email/i)
    })

    it('rejects using own email as parent email', async () => {
      mockGetUser.mockResolvedValue({
        data: { user: { id: 'u1', email: 'student@example.com' } },
        error: null,
      })

      const { POST } = await import('@/app/api/school/consent/route')
      const res = await POST(
        buildRequest('POST', {
          parent_email: 'student@example.com',
          school_id: 'school-1',
        }),
      )

      expect(res.status).toBe(422)
      const json = await res.json()
      expect(json.error).toMatch(/different/i)
    })

    it('creates consent record for valid request', async () => {
      mockGetUser.mockResolvedValue({
        data: { user: { id: 'u1', email: 'student@example.com' } },
        error: null,
      })

      // Profile lookup - student is under 16
      const profileSingle = vi.fn().mockResolvedValue({
        data: { date_of_birth: '2012-06-15', full_name: 'Test Student' },
        error: null,
      })
      // School lookup
      const schoolSingle = vi.fn().mockResolvedValue({
        data: { id: 'school-1', name: 'Test School' },
        error: null,
      })
      // Existing consent check - none found
      const existingSingle = vi.fn().mockResolvedValue({ data: null, error: { code: 'PGRST116' } })

      let fromCallCount = 0
      mockFrom.mockImplementation((() => {
        fromCallCount++
        if (fromCallCount === 1) {
          // profiles
          return { select: () => ({ eq: () => ({ single: profileSingle }) }) }
        }
        if (fromCallCount === 2) {
          // schools
          return { select: () => ({ eq: () => ({ single: schoolSingle }) }) }
        }
        if (fromCallCount === 3) {
          // parental_consents - existing check
          return { select: () => ({ eq: () => ({ eq: () => ({ single: existingSingle }) }) }) }
        }
        // parental_consents - insert
        return { insert: vi.fn().mockReturnValue({ error: null }) }
      }) as any)

      const { POST } = await import('@/app/api/school/consent/route')
      const res = await POST(
        buildRequest('POST', {
          parent_email: 'parent@example.com',
          school_id: 'school-1',
        }),
      )

      expect(res.status).toBe(200)
      const json = await res.json()
      expect(json.success).toBe(true)
      expect(json.message).toMatch(/sent/i)
    })
  })

  // ── GET /api/school/consent - Check consent status ──────────────────────

  describe('GET - consent status check', () => {
    it('requires authentication', async () => {
      mockGetUser.mockResolvedValue({
        data: { user: null },
        error: { message: 'Not authenticated' },
      })

      const { GET } = await import('@/app/api/school/consent/route')
      const res = await GET(buildRequest('GET'))

      expect(res.status).toBe(401)
    })

    it('returns consent_required: false for adults', async () => {
      mockGetUser.mockResolvedValue({ data: { user: { id: 'u1' } }, error: null })
      mockSingle.mockResolvedValue({ data: { date_of_birth: '1990-01-01' }, error: null })

      const { GET } = await import('@/app/api/school/consent/route')
      const res = await GET(buildRequest('GET'))

      expect(res.status).toBe(200)
      const json = await res.json()
      expect(json.consent_required).toBe(false)
    })

    it('returns pending consents for under-16 students', async () => {
      mockGetUser.mockResolvedValue({ data: { user: { id: 'u1' } }, error: null })

      // Profile lookup (single) returns under-16 DOB
      mockSingle.mockResolvedValue({ data: { date_of_birth: '2012-06-15' }, error: null })
      // Consent records query (order, not single)
      mockOrder.mockReturnValue({
        data: [
          {
            id: 'c1',
            school_id: 's1',
            parent_email: 'p@e.com',
            status: 'pending',
            consented_at: null,
            created_at: '2026-03-22',
          },
        ] as any,
        error: null,
      })

      const { GET } = await import('@/app/api/school/consent/route')
      const res = await GET(buildRequest('GET'))

      expect(res.status).toBe(200)
      const json = await res.json()
      expect(json.consent_required).toBe(true)
      expect(json.consents).toHaveLength(1)
      expect(json.consents[0].status).toBe('pending')
    })
  })

  // ── PUT /api/school/consent - Confirm / deny consent ────────────────────

  describe('PUT - consent confirmation', () => {
    it('rejects missing token', async () => {
      const { PUT } = await import('@/app/api/school/consent/route')
      const res = await PUT(buildRequest('PUT', { action: 'approve' }))

      expect(res.status).toBe(422)
      const json = await res.json()
      expect(json.error).toMatch(/token/i)
    })

    it('rejects invalid action', async () => {
      const { PUT } = await import('@/app/api/school/consent/route')
      const res = await PUT(buildRequest('PUT', { token: 'abc123', action: 'maybe' }))

      expect(res.status).toBe(422)
      const json = await res.json()
      expect(json.error).toMatch(/approve.*deny/i)
    })

    it('rejects invalid tokens', async () => {
      mockSingle.mockResolvedValue({ data: null, error: { code: 'PGRST116' } })

      const { PUT } = await import('@/app/api/school/consent/route')
      const res = await PUT(buildRequest('PUT', { token: 'invalid-token', action: 'approve' }))

      expect(res.status).toBe(404)
      const json = await res.json()
      expect(json.error).toMatch(/invalid|expired/i)
    })

    it('accepts valid consent token with approve action', async () => {
      mockSingle.mockResolvedValue({
        data: { id: 'c1', status: 'pending', student_user_id: 'u1', school_id: 's1' },
        error: null,
      })
      mockEq.mockImplementation(() => ({
        single: mockSingle,
        eq: mockEq,
        order: mockOrder,
        error: null,
      }))

      const { PUT } = await import('@/app/api/school/consent/route')
      const res = await PUT(buildRequest('PUT', { token: 'valid-token', action: 'approve' }))

      expect(res.status).toBe(200)
      const json = await res.json()
      expect(json.success).toBe(true)
      expect(json.status).toBe('approved')
    })

    it('allows denial of consent', async () => {
      mockSingle.mockResolvedValue({
        data: { id: 'c1', status: 'pending', student_user_id: 'u1', school_id: 's1' },
        error: null,
      })
      mockEq.mockImplementation(() => ({
        single: mockSingle,
        eq: mockEq,
        order: mockOrder,
        error: null,
      }))

      const { PUT } = await import('@/app/api/school/consent/route')
      const res = await PUT(buildRequest('PUT', { token: 'valid-token', action: 'deny' }))

      expect(res.status).toBe(200)
      const json = await res.json()
      expect(json.success).toBe(true)
      expect(json.status).toBe('denied')
    })

    it('rejects already-approved consent', async () => {
      mockSingle.mockResolvedValue({
        data: { id: 'c1', status: 'approved', student_user_id: 'u1', school_id: 's1' },
        error: null,
      })

      const { PUT } = await import('@/app/api/school/consent/route')
      const res = await PUT(buildRequest('PUT', { token: 'used-token', action: 'approve' }))

      expect(res.status).toBe(410)
      const json = await res.json()
      expect(json.error).toMatch(/already/i)
    })
  })
})

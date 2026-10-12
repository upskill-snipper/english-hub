import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * GET /api/user/access (12 October 2026).
 *
 * The course and module pages decided paid access in the browser with
 * `profile.subscription_status === 'pro'`. A school pupil's access comes from
 * their school's live pilot with nothing written to that field, so the
 * browser can no longer work it out; this route answers from the server's one
 * paid-access choke point, and says whether the person is a school pupil (who
 * is pointed at Mark an essay rather than the standalone essay feedback).
 */

let user: { id: string } | null = { id: 'a0000000-0000-4000-8000-0000000000a1' }
const mockResolvePaidAccess = vi.fn()
const mockGetPupilSchoolAccess = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({
    auth: { getUser: async () => ({ data: { user }, error: null }) },
  }),
}))
vi.mock('@/lib/course-access', () => ({
  resolvePaidAccess: (...a: unknown[]) => mockResolvePaidAccess(...a),
}))
vi.mock('@/lib/school-entitlement', () => ({
  getPupilSchoolAccess: (...a: unknown[]) => mockGetPupilSchoolAccess(...a),
}))

import { GET } from '@/app/api/user/access/route'

async function access() {
  const res = await GET()
  return { status: res.status, body: await res.json() }
}

const school = { schoolId: 'school-1', aiAuthorised: true }

beforeEach(() => {
  vi.clearAllMocks()
  user = { id: 'a0000000-0000-4000-8000-0000000000a1' }
  mockGetPupilSchoolAccess.mockResolvedValue(null)
})

describe('GET /api/user/access', () => {
  it('refuses a signed-out caller', async () => {
    user = null
    expect((await access()).status).toBe(401)
  })

  it('a pupil of a live school has paid access, and is a school pupil', async () => {
    mockResolvePaidAccess.mockResolvedValue({ allowed: true, via: 'school', school })
    expect((await access()).body).toEqual({ premium: true, schoolPupil: true })
  })

  it('a subscriber who is also a pupil is still a school pupil', async () => {
    mockResolvePaidAccess.mockResolvedValue({ allowed: true, via: 'subscription' })
    mockGetPupilSchoolAccess.mockResolvedValue(school)
    expect((await access()).body).toEqual({ premium: true, schoolPupil: true })
  })

  it('a subscriber with no school is not', async () => {
    mockResolvePaidAccess.mockResolvedValue({ allowed: true, via: 'subscription' })
    expect((await access()).body).toEqual({ premium: true, schoolPupil: false })
  })

  it('a failed check unlocks nothing', async () => {
    vi.spyOn(console, 'error').mockImplementationOnce(() => {})
    mockResolvePaidAccess.mockRejectedValue(new Error('db down'))
    expect((await access()).body).toEqual({ premium: false, schoolPupil: false })
  })
})

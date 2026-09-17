import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * GET /api/ielts/attempts must not answer "you have no attempt history" to a
 * learner it merely failed to identify.
 *
 * It used to return `200 { attempts: [] }` for all three of: no session, a
 * session that resolved to no Prisma `User` row, and a database error. With
 * only 8 of 200 accounts projected, the middle case was the common one, so a
 * teenager who had completed practice tests was shown an empty record as
 * fact. The three cases are now distinct.
 */

const mockGetUser = vi.fn()
const mockTryPrismaUserId = vi.fn()
const mockFindMany = vi.fn()

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({ auth: { getUser: () => mockGetUser() } }),
}))

vi.mock('@/lib/identity', () => ({
  tryPrismaUserId: (...args: unknown[]) => mockTryPrismaUserId(...args),
}))

vi.mock('@/lib/prisma', () => ({
  prisma: { iELTSAttempt: { findMany: (...args: unknown[]) => mockFindMany(...args) } },
}))

beforeEach(() => {
  vi.clearAllMocks()
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('GET /api/ielts/attempts', () => {
  it('answers 401 when there is no session', async () => {
    const { GET } = await import('@/app/api/ielts/attempts/route')
    mockGetUser.mockResolvedValue({ data: { user: null } })

    const res = await GET()

    expect(res.status).toBe(401)
    const body = await res.json()
    expect(body.attempts).toBeUndefined()
  })

  it('answers 503 - not an empty list - when a signed-in user cannot be identified', async () => {
    const { GET } = await import('@/app/api/ielts/attempts/route')
    mockGetUser.mockResolvedValue({ data: { user: { id: 'uuid-1' } } })
    mockTryPrismaUserId.mockResolvedValue(null)

    const res = await GET()

    expect(res.status).toBe(503)
    const body = await res.json()
    expect(body.attempts).toBeUndefined()
    expect(body.error).toBeTruthy()
  })

  it('logs the unresolved account with its id so the gap is countable', async () => {
    const { GET } = await import('@/app/api/ielts/attempts/route')
    mockGetUser.mockResolvedValue({ data: { user: { id: 'uuid-42' } } })
    mockTryPrismaUserId.mockResolvedValue(null)

    await GET()

    expect(console.error).toHaveBeenCalledWith(expect.stringContaining('uuid-42'))
  })

  it('answers 503 when the database read fails', async () => {
    const { GET } = await import('@/app/api/ielts/attempts/route')
    mockGetUser.mockResolvedValue({ data: { user: { id: 'uuid-2' } } })
    mockTryPrismaUserId.mockResolvedValue('cuid-2')
    mockFindMany.mockRejectedValue(new Error('connection lost'))

    const res = await GET()

    expect(res.status).toBe(503)
  })

  it('returns an empty list only when the account genuinely has no attempts', async () => {
    const { GET } = await import('@/app/api/ielts/attempts/route')
    mockGetUser.mockResolvedValue({ data: { user: { id: 'uuid-3' } } })
    mockTryPrismaUserId.mockResolvedValue('cuid-3')
    mockFindMany.mockResolvedValue([])

    const res = await GET()

    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body.attempts).toEqual([])
  })

  it('returns the attempts it holds', async () => {
    const { GET } = await import('@/app/api/ielts/attempts/route')
    mockGetUser.mockResolvedValue({ data: { user: { id: 'uuid-4' } } })
    mockTryPrismaUserId.mockResolvedValue('cuid-4')
    mockFindMany.mockResolvedValue([
      {
        id: 'a1',
        skill: 'reading',
        testId: 't1',
        rawScore: 30,
        total: 40,
        band: 7,
        createdAt: new Date('2026-09-01T00:00:00.000Z'),
      },
    ])

    const res = await GET()
    const body = await res.json()

    expect(res.status).toBe(200)
    expect(body.attempts).toHaveLength(1)
    expect(body.attempts[0].band).toBe(7)
  })
})

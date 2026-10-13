// @vitest-environment node
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { NextRequest } from 'next/server'

vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: vi.fn(),
  createServiceRoleClient: vi.fn(),
}))
vi.mock('@/lib/rate-limit', () => ({ rateLimit: vi.fn() }))
vi.mock('@/lib/prisma', () => ({ prisma: { auditLog: { create: vi.fn() } } }))

import { PUT } from './route'
import { createServerSupabaseClient, createServiceRoleClient } from '@/lib/supabase/server'
import { rateLimit } from '@/lib/rate-limit'
import { prisma } from '@/lib/prisma'

/**
 * PUT /api/games/suggestions is the only way a student can switch personalised
 * suggestions on or off: nothing in the product could set the column before
 * 13 October 2026, and the 12 October column privileges stop a browser writing
 * it directly. It changes the SESSION's own row only, and records the change.
 */

const ACCOUNT = '7d1c9a52-1f0e-4b7a-9c3d-2e8f6a4b1c90'
const OTHER = '11111111-2222-4333-8444-555555555555'

let update: ReturnType<typeof vi.fn>
let eq: ReturnType<typeof vi.fn>

function signedIn(id: string | null) {
  vi.mocked(createServerSupabaseClient).mockReturnValue({
    auth: { getUser: async () => ({ data: { user: id ? { id } : null } }) },
  } as unknown as ReturnType<typeof createServerSupabaseClient>)
}

const put = (body: unknown) =>
  new NextRequest('https://theenglishhub.app/api/games/suggestions', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  })

let log: ReturnType<typeof vi.spyOn>
beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(rateLimit).mockResolvedValue({ success: true, remaining: 10, resetAt: 0 })
  eq = vi.fn(async () => ({ error: null }))
  update = vi.fn(() => ({ eq }))
  vi.mocked(createServiceRoleClient).mockReturnValue({
    from: (table: string) => {
      expect(table).toBe('profiles')
      return { update }
    },
  } as unknown as ReturnType<typeof createServiceRoleClient>)
  vi.mocked(prisma.auditLog.create).mockResolvedValue({} as never)
  log = vi.spyOn(console, 'error').mockImplementation(() => {})
})
afterEach(() => log.mockRestore())

describe('PUT /api/games/suggestions', () => {
  it('switches the session’s own setting on, and records it', async () => {
    signedIn(ACCOUNT)
    const res = await PUT(put({ on: true }))
    expect(res.status).toBe(200)
    expect(update).toHaveBeenCalledWith({ personalised_recommendations: true })
    expect(eq).toHaveBeenCalledWith('id', ACCOUNT)
    expect(vi.mocked(prisma.auditLog.create).mock.calls[0][0]).toMatchObject({
      data: {
        userId: null,
        action: 'PERSONALISED_SUGGESTIONS_CHANGED',
        resourceId: ACCOUNT,
        details: { on: true },
      },
    })
  })

  it('switches it off as easily', async () => {
    signedIn(ACCOUNT)
    await PUT(put({ on: false }))
    expect(update).toHaveBeenCalledWith({ personalised_recommendations: false })
  })

  it('cannot be pointed at someone else’s account', async () => {
    signedIn(ACCOUNT)
    expect((await PUT(put({ on: true, userId: OTHER }))).status).toBe(400)
    expect(update).not.toHaveBeenCalled()
  })

  it('refuses anything that is not on or off', async () => {
    signedIn(ACCOUNT)
    expect((await PUT(put({ on: 'yes' }))).status).toBe(400)
    expect(update).not.toHaveBeenCalled()
  })

  it('says so when the setting could not be saved', async () => {
    signedIn(ACCOUNT)
    eq.mockResolvedValueOnce({ error: { message: 'permission denied' } })
    expect((await PUT(put({ on: true }))).status).toBe(500)
    expect(prisma.auditLog.create).not.toHaveBeenCalled()
  })

  it('keeps the student’s choice when only the record of it fails, and says so in the log', async () => {
    signedIn(ACCOUNT)
    vi.mocked(prisma.auditLog.create).mockRejectedValueOnce(new Error('db down'))
    expect((await PUT(put({ on: true }))).status).toBe(200)
    expect(log.mock.calls[0][0]).toBe('[game-suggestions] audit entry failed')
  })

  it('does nothing for someone not signed in', async () => {
    signedIn(null)
    expect((await PUT(put({ on: true }))).status).toBe(401)
    expect(update).not.toHaveBeenCalled()
  })
})

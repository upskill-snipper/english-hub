import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * Every way of signing in records the sign-in.
 *
 * THE DEFECT (recorded in docs/system/05 §2, fixed 12 October 2026). Only the
 * email-and-password form called /api/auth/record-login, so `lastLoginAt` was
 * stamped for that form alone. Google, Apple, email-confirmation links and the
 * re-verification link all sign in through /auth/callback, and none of those
 * sign-ins was ever recorded. The adult dormancy warning and the child
 * dormancy purge both read `lastLoginAt` and fall back to `createdAt` when it
 * is null, so an account used only that way would have looked dormant from
 * the day it was old enough: March 2027 for the first child accounts.
 *
 * MUTATIONS RUN, each verified to have altered the file first: deleting the
 * stamp from the PKCE branch fails the Google and recovery cases; deleting it
 * from the token_hash branch fails the email-link case; making stampLogin skip
 * the projection fails the first stampLogin case.
 */

// ─── stampLogin itself ──────────────────────────────────────────────────

const tryPrismaUserId = vi.fn()
vi.mock('@/lib/identity', () => ({
  tryPrismaUserId: (...a: unknown[]) => tryPrismaUserId(...a),
}))

const update = vi.fn()
vi.mock('@/lib/prisma', () => ({
  prisma: { user: { update: (...a: unknown[]) => update(...a) } },
}))

const { stampLogin } = await import('@/lib/auth/stamp-login')

describe('stampLogin', () => {
  beforeEach(() => {
    tryPrismaUserId.mockReset()
    update.mockReset().mockResolvedValue({})
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('stamps the Prisma row the identity module resolves, not the Supabase uuid', async () => {
    tryPrismaUserId.mockResolvedValue('cuid-resolved')
    expect(await stampLogin('uuid-signing-in')).toBe(true)
    expect(tryPrismaUserId).toHaveBeenCalledWith('uuid-signing-in')
    expect(update).toHaveBeenCalledWith({
      where: { id: 'cuid-resolved' },
      data: { lastLoginAt: expect.any(Date) },
    })
  })

  it('reports false and writes nothing when the identity cannot be resolved', async () => {
    tryPrismaUserId.mockResolvedValue(null)
    expect(await stampLogin('uuid-signing-in')).toBe(false)
    expect(update).not.toHaveBeenCalled()
  })

  it('reports false rather than throwing when the write fails', async () => {
    tryPrismaUserId.mockResolvedValue('cuid-resolved')
    update.mockRejectedValue(new Error('database unavailable'))
    await expect(stampLogin('uuid-signing-in')).resolves.toBe(false)
  })
})

// ─── The routes that sign people in ─────────────────────────────────────

const provision = vi.fn().mockResolvedValue({ provisioned: true })
vi.mock('@/lib/billing/provision-signup-trial', () => ({
  provisionSignupTrial: (...a: unknown[]) => provision(...a),
}))

const exchangeCodeForSession = vi.fn()
const verifyOtp = vi.fn()
vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: { exchangeCodeForSession, verifyOtp },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: null }) }) }),
    }),
  }),
}))

const getUser = vi.fn()
vi.mock('@/lib/supabase/server', () => ({
  createServerSupabaseClient: () => ({ auth: { getUser } }),
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => ({ success: true }),
}))

const { GET } = await import('@/app/auth/callback/route')
const { POST: recordLogin } = await import('@/app/api/auth/record-login/route')
const { NextRequest } = await import('next/server')

const USER = { id: 'uuid-signing-in', email: 'learner@example.com' }

function callback(query: string) {
  return GET(new NextRequest(`https://theenglishhub.app/auth/callback${query}`))
}

describe('every sign-in route records the sign-in', () => {
  beforeEach(() => {
    tryPrismaUserId.mockReset().mockResolvedValue('cuid-resolved')
    update.mockReset().mockResolvedValue({})
    provision.mockClear()
    exchangeCodeForSession.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
    verifyOtp.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
    getUser.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  it('a Google or Apple return', async () => {
    await callback('?code=oauth-code&next=%2Fdashboard')
    expect(tryPrismaUserId).toHaveBeenCalledWith(USER.id)
    expect(update).toHaveBeenCalledTimes(1)
  })

  it('an email-confirmation link', async () => {
    await callback('?token_hash=hash&type=signup')
    expect(tryPrismaUserId).toHaveBeenCalledWith(USER.id)
    expect(update).toHaveBeenCalledTimes(1)
  })

  it('a password-reset link, which is a sign-in too', async () => {
    await callback('?code=recovery-code&next=%2Fauth%2Freset-password')
    expect(update).toHaveBeenCalledTimes(1)
  })

  it('not a link that failed', async () => {
    exchangeCodeForSession.mockResolvedValue({ data: null, error: new Error('no verifier') })
    verifyOtp.mockResolvedValue({ data: null, error: new Error('expired') })
    await callback('?code=elsewhere')
    await callback('?token_hash=old&type=signup')
    expect(update).not.toHaveBeenCalled()
  })

  it('the password form, through the same helper', async () => {
    const res = await recordLogin(
      new NextRequest('https://theenglishhub.app/api/auth/record-login'),
    )
    expect(await res.json()).toEqual({ ok: true, rows: 1 })
    expect(update).toHaveBeenCalledTimes(1)
    expect(provision).toHaveBeenCalledWith(USER.id)
  })

  it('the password form still reports, and provisions nothing, when identity cannot be resolved', async () => {
    tryPrismaUserId.mockResolvedValue(null)
    const res = await recordLogin(
      new NextRequest('https://theenglishhub.app/api/auth/record-login'),
    )
    expect(await res.json()).toEqual({ ok: false, rows: 0 })
    expect(provision).not.toHaveBeenCalled()
  })
})

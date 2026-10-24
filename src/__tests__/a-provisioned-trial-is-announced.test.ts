import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * Every caller of provisionSignupTrial passes its result on (23 October 2026).
 *
 * The provisioner returns what it did "so the callers can count outcomes", and
 * all three callers - the auth callback's two branches and record-login -
 * discarded it, so a trial could begin and nobody be told. These pin that each
 * caller hands the result, the Supabase id and the session's address to
 * announceTrialReady, which sends the account-ready email when, and only when,
 * a trial was provisioned.
 */

const RESULT = { provisioned: true, trialEndsAt: new Date(), prismaUserId: 'cuid_1' }
const provision = vi.fn().mockResolvedValue(RESULT)
vi.mock('@/lib/billing/provision-signup-trial', () => ({
  provisionSignupTrial: (...a: unknown[]) => provision(...a),
}))

const announce = vi.fn()
vi.mock('@/lib/email/lifecycle/account-ready', () => ({
  announceTrialReady: (...a: unknown[]) => announce(...a),
}))

vi.mock('@/lib/auth/stamp-login', () => ({ stampLogin: async () => true }))

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
  createServiceRoleClient: () => ({}),
}))

vi.mock('@/lib/rate-limit', () => ({ rateLimit: async () => ({ success: true }) }))

const { GET } = await import('@/app/auth/callback/route')
const { POST: recordLogin } = await import('@/app/api/auth/record-login/route')
const { NextRequest } = await import('next/server')

const USER = {
  id: 'uuid-new',
  email: 'new@example.com',
  email_confirmed_at: '2026-10-24T08:00:00.000Z',
}
// The session's confirmation time travels with the address: M0 goes to a
// confirmed address only (24 October 2026).
const CTX = {
  supabaseUserId: USER.id,
  email: USER.email,
  emailConfirmedAt: USER.email_confirmed_at,
}

beforeEach(() => {
  provision.mockClear()
  announce.mockClear()
  exchangeCodeForSession.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
  verifyOtp.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
  getUser.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
})

describe('the provisioning result reaches the account-ready email', () => {
  it('from the code exchange (Google, Apple, PKCE confirmation)', async () => {
    await GET(new NextRequest('https://theenglishhub.app/auth/callback?code=abc'))
    expect(announce).toHaveBeenCalledWith(RESULT, CTX)
  })

  it('from the token_hash confirmation', async () => {
    await GET(new NextRequest('https://theenglishhub.app/auth/callback?token_hash=x&type=signup'))
    expect(announce).toHaveBeenCalledWith(RESULT, CTX)
  })

  it('from record-login, the second net', async () => {
    await recordLogin(new NextRequest('https://theenglishhub.app/api/auth/record-login'))
    expect(announce).toHaveBeenCalledWith(RESULT, CTX)
  })

  it('passes an unconfirmed session on as unconfirmed, never as confirmed', async () => {
    const unconfirmed = { ...USER, email_confirmed_at: undefined }
    getUser.mockResolvedValue({ data: { user: unconfirmed }, error: null })
    await recordLogin(new NextRequest('https://theenglishhub.app/api/auth/record-login'))
    expect(announce).toHaveBeenCalledWith(RESULT, { ...CTX, emailConfirmedAt: null })
  })

  it('never from a password recovery, which provisions nothing', async () => {
    await GET(new NextRequest('https://theenglishhub.app/auth/callback?code=abc&type=recovery'))
    expect(announce).not.toHaveBeenCalled()
  })
})

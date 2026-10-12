import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * A confirmation link that cannot finish signing someone in must still get
 * them in, by telling them the truth.
 *
 * THE DEFECT (12 October 2026, counted against production, read-only). In the
 * 30 days to 12 October, 24 of 46 email sign-ups never signed in, while every
 * Google and Apple sign-up did. 33 email-confirmation flows had their link
 * clicked (Supabase confirmed the address and issued a code) but the code was
 * never exchanged in /auth/callback: the exchange needs the PKCE code verifier
 * stored in the browser the person signed up in, and a link opened on a phone
 * or in a mail app's own browser does not have it. Every such failure landed
 * on "Something went wrong verifying your account. Please try again or request
 * a new link." The address WAS confirmed; neither suggestion could help; 10 of
 * those people never signed in.
 */

const provision = vi.fn().mockResolvedValue({ provisioned: true })
vi.mock('@/lib/billing/provision-signup-trial', () => ({
  provisionSignupTrial: (...a: unknown[]) => provision(...a),
}))

// Recording the sign-in is pinned in every-sign-in-records-the-sign-in.test.ts.
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

const { GET } = await import('@/app/auth/callback/route')
const { NextRequest } = await import('next/server')

const USER = { id: 'uuid-under-test' }

async function landing(query: string): Promise<string> {
  const res = await GET(new NextRequest(`https://theenglishhub.app/auth/callback${query}`))
  const location = res.headers.get('location') ?? ''
  return location.replace('https://theenglishhub.app', '')
}

function pkceVerifierMissing() {
  const err = new Error('PKCE code verifier not found in storage.') as Error & { status?: number }
  err.name = 'AuthPKCECodeVerifierMissingError'
  return err
}

beforeEach(() => {
  provision.mockClear()
  exchangeCodeForSession.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
  verifyOtp.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('a link that could not finish the sign-in', () => {
  it('tells someone whose address is confirmed to sign in, not to request a new link', async () => {
    exchangeCodeForSession.mockResolvedValue({ data: null, error: pkceVerifierMissing() })
    expect(await landing('?code=from-another-browser')).toBe(
      '/auth/login?error=link_opened_elsewhere',
    )
    expect(provision).not.toHaveBeenCalled()
  })

  it('keeps where they were going, so signing in finishes the journey', async () => {
    exchangeCodeForSession.mockResolvedValue({ data: null, error: pkceVerifierMissing() })
    expect(await landing('?code=x&next=%2Fdashboard%2Fsubscription')).toBe(
      '/auth/login?error=link_opened_elsewhere&next=%2Fdashboard%2Fsubscription',
    )
  })

  it('sends a failed password-reset link to a fresh reset request', async () => {
    exchangeCodeForSession.mockResolvedValue({ data: null, error: pkceVerifierMissing() })
    expect(await landing('?code=x&next=%2Fauth%2Freset-password')).toBe(
      '/auth/login?error=reset_link_failed',
    )
    expect(await landing('?code=x&type=recovery')).toBe('/auth/login?error=reset_link_failed')
  })

  it('says an expired or used link is expired, when Supabase refuses it', async () => {
    expect(
      await landing(
        '?error=access_denied&error_code=otp_expired&error_description=Email+link+is+invalid+or+has+expired',
      ),
    ).toBe('/auth/login?error=link_expired')
  })

  it('treats a refused token_hash link the same way', async () => {
    const expired = new Error('Email link is invalid or has expired') as Error & { status?: number }
    verifyOtp.mockResolvedValue({ data: null, error: expired })
    expect(await landing('?token_hash=old&type=email')).toBe('/auth/login?error=link_expired')
    expect(await landing('?token_hash=old&type=recovery')).toBe(
      '/auth/login?error=reset_link_failed',
    )
  })

  it('keeps the general message for a callback that carries nothing at all', async () => {
    expect(await landing('')).toBe('/auth/login?error=auth_callback_error')
  })

  it('leaves a link that works exactly as it was', async () => {
    expect(await landing('?code=good')).toBe('/dashboard')
    expect(provision).toHaveBeenCalledWith(USER.id)
  })
})

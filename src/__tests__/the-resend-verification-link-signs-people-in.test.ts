import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * The "resend verification email" link must sign the person in, on any device.
 *
 * THE DEFECT (12 October 2026). /api/auth/resend-verification asked Supabase
 * Admin for a magic link and emailed Supabase's `action_link`. An
 * admin-generated token carries no PKCE prefix, so Supabase's /verify finishes
 * it the implicit way: it confirms the address, then redirects to
 * /auth/callback with the session in the URL fragment. The server route never
 * sees a fragment, so it found no code and sent the person to /auth/login with
 * an error, and the browser client refuses an implicit-flow fragment because
 * it runs PKCE. The address was confirmed and nobody was signed in; the error
 * page offered this resend again.
 *
 * Checked against Supabase Auth's own source before changing it: admin
 * generateLink stores a magic-link token for an existing user as a recovery
 * token and reports verification_type 'magiclink'; verifyOtp with that
 * token_hash and type confirms an unconfirmed user and issues a session.
 *
 * MUTATIONS RUN, each verified to have altered the file first: sending
 * `action_link` again fails the first case; dropping 'magiclink' from the
 * callback's first-session landing fails the round trip.
 */

const SITE = 'https://theenglishhub.app'
const ADDRESS = 'pupil@example.com'
const HASH = 'a1b2c3d4e5f6'

// ─── Mocks ──────────────────────────────────────────────────────────────

const sent: Array<{ to: string; html: string }> = []
vi.mock('@/lib/email/resend', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@/lib/email/resend')>()),
  sendViaResend: async (opts: { to: string; html: string }) => {
    sent.push({ to: opts.to, html: opts.html })
    return { sent: true, messageId: 'test' }
  },
}))

vi.mock('@/lib/rate-limit', () => ({
  rateLimit: async () => ({ success: true }),
  getClientIp: () => '203.0.113.7',
}))

const listUsers = vi.fn()
const generateLink = vi.fn()
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({ auth: { admin: { listUsers, generateLink } } }),
}))

const provision = vi.fn().mockResolvedValue({ provisioned: true })
vi.mock('@/lib/billing/provision-signup-trial', () => ({
  provisionSignupTrial: (...a: unknown[]) => provision(...a),
}))

const stamp = vi.fn().mockResolvedValue(true)
vi.mock('@/lib/auth/stamp-login', () => ({
  stampLogin: (...a: unknown[]) => stamp(...a),
}))

const verifyOtp = vi.fn()
const exchangeCodeForSession = vi.fn()
vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: { exchangeCodeForSession, verifyOtp },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: null }) }) }),
    }),
  }),
}))

const { POST } = await import('@/app/api/auth/resend-verification/route')
const { GET } = await import('@/app/auth/callback/route')
const { NextRequest } = await import('next/server')

function resendRequest() {
  return new NextRequest(`${SITE}/api/auth/resend-verification`, {
    method: 'POST',
    body: JSON.stringify({ email: ADDRESS }),
    headers: { 'content-type': 'application/json' },
  })
}

/** The href of the email's button, with the HTML escaping undone. */
function linkIn(html: string): string {
  const match = html.match(/<a href="([^"]+)"/)
  if (!match) throw new Error('no link in the email')
  return match[1].replace(/&amp;/g, '&')
}

beforeEach(() => {
  sent.length = 0
  process.env.NEXT_PUBLIC_SITE_URL = SITE
  listUsers.mockReset().mockResolvedValue({
    data: { users: [{ id: 'uuid-unconfirmed', email: ADDRESS, email_confirmed_at: null }] },
    error: null,
  })
  generateLink.mockReset().mockResolvedValue({
    data: {
      properties: {
        action_link: `https://project.supabase.co/auth/v1/verify?token=${HASH}&type=magiclink&redirect_to=${SITE}/auth/callback`,
        hashed_token: HASH,
        verification_type: 'magiclink',
      },
    },
    error: null,
  })
  verifyOtp
    .mockReset()
    .mockResolvedValue({ data: { user: { id: 'uuid-unconfirmed' } }, error: null })
  stamp.mockClear()
  provision.mockClear()
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('the re-verification email', () => {
  it("links to the site's own callback with the token hash, not to Supabase's implicit link", async () => {
    await POST(resendRequest())
    expect(sent).toHaveLength(1)
    const link = linkIn(sent[0].html)
    expect(link).toBe(`${SITE}/auth/callback?token_hash=${HASH}&type=magiclink`)
    expect(sent[0].html).not.toContain('supabase.co')
  })

  it('signs the person in when they follow it, wherever they open it', async () => {
    await POST(resendRequest())
    const link = linkIn(sent[0].html)
    const res = await GET(new NextRequest(link))
    expect(verifyOtp).toHaveBeenCalledWith({ token_hash: HASH, type: 'magiclink' })
    expect(res.headers.get('location')).toBe(`${SITE}/dashboard?welcome=true`)
    expect(stamp).toHaveBeenCalledWith('uuid-unconfirmed')
    expect(provision).toHaveBeenCalledWith('uuid-unconfirmed')
  })

  it('sends nothing when Supabase returns no token, rather than a link that cannot work', async () => {
    generateLink.mockResolvedValue({ data: { properties: {} }, error: null })
    const res = await POST(resendRequest())
    expect(sent).toHaveLength(0)
    expect(res.status).toBe(200)
  })
})

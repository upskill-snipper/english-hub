import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * No Google or Apple sign-up has ever received the free trial.
 *
 * THE DEFECT (20 September 2026, counted against production). The no-card
 * trial was moved into `/auth/callback` on 18 September, because the register
 * route's session gate answered 403 on every account ever created. That fix is
 * real and the code is right - but it provisioned only inside the
 * `type === 'signup'` branch.
 *
 * A Google or Apple return does not carry `type=signup`. Both buttons redirect
 * to `/auth/callback?next=...` and Supabase appends `?code=`, nothing more. The
 * comment directly above that branch says it "covers email-confirmed signup,
 * OAuth, magic links and password reset", which is true of the branch and was
 * not true of the provisioning inside it.
 *
 * `/api/auth/record-login` is documented as the second net and has the same
 * hole: it is called from `src/app/auth/login/page.tsx`, the email-and-password
 * form, which an OAuth user never submits.
 *
 * MEASURED BEFORE CHANGING ANYTHING, against the live database:
 *
 *   - 5 accounts created since the fix shipped. 4 are Google sign-ups that
 *     confirmed and signed in. None holds a Subscription row.
 *   - 3 of those 4 DO have a Prisma `User` row, so identity projection ran
 *     from ordinary product use - the provisioner never did.
 *   - The single TRIALING row in production starts 2026-09-18T17:28, which is
 *     before the 19:17 commit. The provisioner has never successfully run.
 *
 * So the highest-impact item on the backlog was fixed, shipped, and still
 * delivered nothing, for a second and different reason.
 *
 * WHY PROVISIONING EVERY SESSION IS SAFE rather than only new ones. The
 * callback cannot tell a first OAuth sign-in from the hundredth: Supabase
 * returns the same shape. `provisionSignupTrial` already carries the guards
 * that make the question unnecessary - it returns early for any account with
 * an entitlement, refuses any account older than the trial window, and never
 * throws. A returning user costs one profile read.
 *
 * MUTATIONS RUN, each verified to have altered the file first: moving the call
 * back inside `type === 'signup'` fails both OAuth cases; deleting it from the
 * token_hash branch fails the legacy-flow case.
 */

const ROUTE = 'src/app/auth/callback/route.ts'

// ─── Mocks ──────────────────────────────────────────────────────────────

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

const { GET } = await import('@/app/auth/callback/route')
const { NextRequest } = await import('next/server')

const USER = { id: 'uuid-under-test' }

function call(query: string) {
  return GET(new NextRequest(`https://theenglishhub.app/auth/callback${query}`))
}

beforeEach(() => {
  provision.mockClear()
  exchangeCodeForSession.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
  verifyOtp.mockReset().mockResolvedValue({ data: { user: USER }, error: null })
})

describe('every session the callback establishes gets the trial offered', () => {
  it('a Google return, which carries a code and no type', async () => {
    await call('?code=abc&next=%2Fdashboard')
    expect(provision, 'the OAuth path still skips provisioning').toHaveBeenCalledWith(USER.id)
  })

  it('an Apple return, which looks the same', async () => {
    await call('?code=abc&next=%2Fdashboard%2Fsubscription')
    expect(provision).toHaveBeenCalledWith(USER.id)
  })

  it('an email confirmation, which carries type=signup', async () => {
    // The case that already worked. Pinned so a rewrite cannot trade one for
    // the other.
    await call('?code=abc&type=signup')
    expect(provision).toHaveBeenCalledWith(USER.id)
  })

  it('and the legacy token_hash flow Supabase templates still use', async () => {
    await call('?token_hash=xyz&type=email')
    expect(provision).toHaveBeenCalledWith(USER.id)
  })

  it('but never on a password recovery', async () => {
    // The counterweight. Provisioning unconditionally would hand a trial to
    // anyone who clicked a reset link, and a recovery session is not a signup.
    await call('?code=abc&type=recovery')
    expect(provision, 'a password reset provisioned a trial').not.toHaveBeenCalled()

    await call('?token_hash=xyz&type=recovery')
    expect(provision).not.toHaveBeenCalled()
  })

  it('and never when the exchange itself failed', async () => {
    exchangeCodeForSession.mockResolvedValue({ data: null, error: new Error('bad code') })
    await call('?code=nope')
    expect(provision).not.toHaveBeenCalled()
  })

  it('the source no longer gates provisioning on the signup type', async () => {
    // The shape of the defect, asserted directly: the call must not sit inside
    // the `type === 'signup'` block, which is where it spent two days.
    const { readFileSync } = await import('node:fs')
    const src = readFileSync(ROUTE, 'utf8')
    const calls = [...src.matchAll(/await provisionSignupTrial\(/g)]
    expect(calls.length, 'expected one provisioning call per flow').toBe(2)
    for (const m of calls) {
      const before = src.slice(0, m.index)
      const lastSignupGate = before.lastIndexOf("if (type === 'signup')")
      const lastRedirect = before.lastIndexOf('return redirectTo(')
      expect(
        lastSignupGate < lastRedirect,
        'provisioning is inside a type === signup block again',
      ).toBe(true)
    }
  })
})

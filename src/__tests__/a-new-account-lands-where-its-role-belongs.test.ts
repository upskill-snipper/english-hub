import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * Every new account lands where its role belongs, with a board the site can
 * use, however it signed up.
 *
 * THREE DEFECTS (fixed 12 October 2026, found by a read-only trace of every
 * sign-up journey):
 *
 *   1. Role routing and the welcome flag sat inside `type === 'signup'`, and a
 *      PKCE redirect never carries `type` (auth-js keeps it in the browser).
 *      No email confirmation and no Google or Apple sign-up was ever routed by
 *      role or welcomed.
 *   2. The board cookie was written from profiles.exam_board, which holds the
 *      form's label ('AQA', 'Edexcel', 'Other'), not a board id. The server
 *      rejects such a cookie while the middleware accepts it, so the board
 *      silently never applied and the site never asked.
 *   3. Google and Apple sign-ups carry no role, so a teacher who used "Continue
 *      with Google" on the teacher sign-up page became a student for good.
 *
 * MUTATIONS RUN, each verified to have altered the file first: gating the
 * welcome flag on `type === 'signup'` again fails the Google welcome case;
 * writing profiles.exam_board raw again fails the Edexcel and AQA cases;
 * dropping the provider check from applySignupRole fails the email case;
 * dropping the ten-minute window fails the returning-account case.
 */

const NOW = Date.now()
const minutesAgo = (m: number) => new Date(NOW - m * 60 * 1000).toISOString()

const provision = vi.fn().mockResolvedValue({ provisioned: true })
vi.mock('@/lib/billing/provision-signup-trial', () => ({
  provisionSignupTrial: (...a: unknown[]) => provision(...a),
}))

const calls: string[] = []
vi.mock('@/lib/auth/stamp-login', () => ({
  stampLogin: async () => {
    calls.push('stamp')
    return true
  },
}))

let profile: { role: string; exam_board: string | null } | null = null
const exchangeCodeForSession = vi.fn()
const verifyOtp = vi.fn()
vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: { exchangeCodeForSession, verifyOtp },
    from: () => ({
      select: () => ({ eq: () => ({ single: async () => ({ data: profile }) }) }),
    }),
  }),
}))

const roleWrites: Array<{ values: unknown; filters: Array<[string, unknown]> }> = []
vi.mock('@/lib/supabase/server', () => ({
  createServiceRoleClient: () => ({
    from: () => ({
      update: (values: unknown) => {
        const write = { values, filters: [] as Array<[string, unknown]> }
        roleWrites.push(write)
        calls.push('role')
        const chain = {
          eq: (column: string, value: unknown) => {
            write.filters.push([column, value])
            return Object.assign(Promise.resolve({ error: null }), chain)
          },
        }
        return chain
      },
    }),
  }),
}))

const { GET } = await import('@/app/auth/callback/route')
const { NextRequest } = await import('next/server')

type TestUser = {
  id: string
  created_at: string
  email_confirmed_at?: string | null
  app_metadata: { provider: string }
}

function googleUser(createdMinutesAgo: number): TestUser {
  return {
    id: 'uuid-new-account',
    created_at: minutesAgo(createdMinutesAgo),
    email_confirmed_at: minutesAgo(createdMinutesAgo),
    app_metadata: { provider: 'google' },
  }
}

async function signIn(query: string, user: TestUser, cookie?: string) {
  exchangeCodeForSession.mockResolvedValue({ data: { user }, error: null })
  const res = await GET(
    new NextRequest(`https://theenglishhub.app/auth/callback${query}`, {
      headers: cookie ? { cookie } : {},
    }),
  )
  return {
    landing: (res.headers.get('location') ?? '').replace('https://theenglishhub.app', ''),
    board: res.cookies.get('english-hub-board')?.value,
  }
}

beforeEach(() => {
  profile = { role: 'student', exam_board: null }
  calls.length = 0
  roleWrites.length = 0
  provision.mockClear()
  exchangeCodeForSession.mockReset()
  verifyOtp.mockReset()
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

describe('landing after a Google, Apple or email-link sign-in', () => {
  it('welcomes a brand-new Google account, which carries no type', async () => {
    const { landing } = await signIn('?code=g&next=%2Fdashboard', googleUser(0))
    expect(landing).toBe('/dashboard?welcome=true')
  })

  it('routes by role even without a type, and a returning account is not welcomed again', async () => {
    profile = { role: 'parent', exam_board: null }
    expect((await signIn('?code=g', googleUser(0))).landing).toBe('/dashboard/parent?welcome=true')
    expect((await signIn('?code=g', googleUser(60 * 24 * 30))).landing).toBe('/dashboard/parent')
  })

  it('welcomes an email confirmation opened in the same browser', async () => {
    const user = { ...googleUser(60 * 24), email_confirmed_at: minutesAgo(0) }
    user.app_metadata = { provider: 'email' }
    expect((await signIn('?code=e', user)).landing).toBe('/dashboard?welcome=true')
  })

  it('still lets an explicit next win', async () => {
    profile = { role: 'teacher', exam_board: null }
    const { landing } = await signIn('?code=g&next=%2Fpricing', googleUser(0))
    expect(landing).toBe('/pricing?welcome=true')
  })
})

describe('the board cookie', () => {
  it('is written as a board id, not the profile label', async () => {
    profile = { role: 'student', exam_board: 'AQA' }
    expect((await signIn('?code=g', googleUser(0))).board).toBe('aqa')
  })

  it('is not guessed from a label that names several boards, or none', async () => {
    profile = { role: 'student', exam_board: 'Edexcel' }
    expect((await signIn('?code=g', googleUser(0))).board).toBeUndefined()
    profile = { role: 'student', exam_board: 'Other' }
    expect((await signIn('?code=g', googleUser(0))).board).toBeUndefined()
  })

  it('never replaces a valid board this browser already holds', async () => {
    profile = { role: 'student', exam_board: 'AQA' }
    const { board } = await signIn('?code=g', googleUser(0), 'english-hub-board=edexcel-igcse')
    expect(board).toBeUndefined()
  })
})

describe('the role a Google or Apple sign-up started from', () => {
  it('makes a brand-new account from the teacher page a teacher, before the sign-in is recorded', async () => {
    await signIn('?code=g&next=%2Fdashboard%2Fteacher', googleUser(1))
    expect(roleWrites).toHaveLength(1)
    expect(roleWrites[0].values).toEqual({ role: 'teacher' })
    expect(roleWrites[0].filters).toEqual([
      ['id', 'uuid-new-account'],
      ['role', 'student'],
    ])
    expect(calls.indexOf('role')).toBeLessThan(calls.indexOf('stamp'))
  })

  it('does the same for the parent page', async () => {
    await signIn('?code=g&next=%2Fdashboard%2Fparent', googleUser(1))
    expect(roleWrites[0]?.values).toEqual({ role: 'parent' })
  })

  it('never changes the role of an account that is not brand new', async () => {
    await signIn('?code=g&next=%2Fdashboard%2Fteacher', googleUser(60))
    expect(roleWrites).toHaveLength(0)
  })

  it('leaves email sign-ups alone, whose form already stated the role', async () => {
    const user = googleUser(1)
    user.app_metadata = { provider: 'email' }
    await signIn('?code=e&next=%2Fdashboard%2Fteacher', user)
    expect(roleWrites).toHaveLength(0)
  })

  it('does nothing for any other destination', async () => {
    await signIn('?code=g&next=%2Fdashboard', googleUser(1))
    await signIn('?code=g&next=%2Fauth%2Freset-password', googleUser(1))
    expect(roleWrites).toHaveLength(0)
  })
})

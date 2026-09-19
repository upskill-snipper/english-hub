// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * PERF-5. The middleware made a network call to Mumbai on every request.
 *
 * `updateSession` runs on every page and all 199 API routes, and it called
 * `supabase.auth.getUser()` - a round trip to Supabase Auth - before any render
 * began. The API route then called `getUser()` again, and the browser's
 * provider a third time on hydration. Three auth round trips per signed-in page
 * view, on the paid experience.
 *
 * `getClaims()` verifies the access token locally against the project's
 * published JWKS. Verified before changing it: the project publishes one ES256
 * P-256 key, and auth-js 2.106.2 takes the local path when the algorithm is
 * asymmetric and the token carries a `kid`.
 *
 * WHAT THESE TESTS ARE FOR. The existing middleware tests read the source. That
 * is fine for "does this line exist" but useless for an auth change, where the
 * risk is behavioural: a session that stops refreshing logs everybody out
 * quietly, and a gate that stops firing lets anonymous visitors into
 * /dashboard. So these drive the real `updateSession` against a stubbed
 * Supabase client.
 *
 * THE ASSERTION THAT MATTERS MOST is the one where `getUser` throws. Before
 * this change that would have broken every request; it now proves the request
 * path no longer depends on the network call at all.
 */

const setAllSpy = vi.fn()
let claimsResult: { data: { claims: Record<string, unknown> } | null; error: unknown } = {
  data: null,
  error: null,
}
let getUserImpl: () => Promise<unknown> = async () => ({ data: { user: null }, error: null })
/** Cookies the client writes during the auth call, as a refresh would. */
let cookiesToWrite: { name: string; value: string; options?: Record<string, unknown> }[] = []

vi.mock('@supabase/ssr', () => ({
  createServerClient: (
    _url: string,
    _key: string,
    opts: {
      cookies: { setAll: (c: { name: string; value: string }[]) => void }
    },
  ) => ({
    auth: {
      getClaims: async () => {
        // A real refresh writes the rotated cookies through setAll during the
        // auth call. Reproduced here so the cookie-mirroring path is exercised.
        if (cookiesToWrite.length > 0) opts.cookies.setAll(cookiesToWrite)
        setAllSpy(cookiesToWrite)
        return claimsResult
      },
      getUser: () => getUserImpl(),
    },
  }),
}))

const { updateSession } = await import('@/lib/supabase/middleware')
const { NextRequest } = await import('next/server')

function req(path: string) {
  return new NextRequest(new URL(`https://theenglishhub.app${path}`))
}

beforeEach(() => {
  claimsResult = { data: null, error: null }
  cookiesToWrite = []
  setAllSpy.mockClear()
  getUserImpl = async () => ({ data: { user: null }, error: null })
  process.env.NEXT_PUBLIC_SUPABASE_URL ??= 'https://example.supabase.co'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??= 'anon-key-for-tests'
})

describe('the gate still gates', () => {
  it('an anonymous visitor to /dashboard is sent to login', async () => {
    const res = await updateSession(req('/dashboard'))
    expect(res.status).toBe(307)
    expect(res.headers.get('location')).toContain('/auth/login')
  })

  it('and is told where they were going, so login can send them back', async () => {
    const res = await updateSession(req('/dashboard'))
    expect(res.headers.get('location')).toContain('redirect=%2Fdashboard')
  })

  it('a signed-in visitor is not sent to login', async () => {
    claimsResult = { data: { claims: { sub: 'uuid-1', user_metadata: {} } }, error: null }
    const res = await updateSession(req('/dashboard'))
    expect(res.status).not.toBe(307)
  })

  it('and is redirected away from the login page', async () => {
    claimsResult = { data: { claims: { sub: 'uuid-1', user_metadata: {} } }, error: null }
    const res = await updateSession(req('/auth/login'))
    expect(res.status).toBe(307)
    expect(res.headers.get('location')).toContain('/dashboard')
  })
})

describe('the password-rotation gate still reads the flag', () => {
  it('a pupil carrying needs_password_change is held on the rotation page', async () => {
    // School-issued temporary passwords travel through email and a CSV. This
    // gate is the only thing that forces a child to change one.
    claimsResult = {
      data: { claims: { sub: 'uuid-2', user_metadata: { needs_password_change: true } } },
      error: null,
    }
    const res = await updateSession(req('/dashboard'))
    expect(res.status).toBe(307)
    expect(res.headers.get('location')).toContain('/auth/set-password')
  })

  it('and somebody without the flag is not', async () => {
    claimsResult = {
      data: { claims: { sub: 'uuid-3', user_metadata: { needs_password_change: false } } },
      error: null,
    }
    const res = await updateSession(req('/dashboard'))
    expect(res.headers.get('location') ?? '').not.toContain('/auth/set-password')
  })
})

describe('the session still refreshes', () => {
  it('cookies written during the auth call reach the response', async () => {
    // The whole reason the auth call must stay immediately after
    // createServerClient. If a refreshed token never becomes a Set-Cookie, every
    // signed-in user is quietly logged out when their access token expires -
    // which is the failure this change could most plausibly have caused.
    claimsResult = { data: { claims: { sub: 'uuid-4', user_metadata: {} } }, error: null }
    cookiesToWrite = [{ name: 'sb-access-token', value: 'refreshed-value', options: {} }]

    const res = await updateSession(req('/dashboard'))
    const setCookie = res.headers.getSetCookie?.() ?? []
    expect(setCookie.join(';')).toContain('sb-access-token=refreshed-value')
  })

  it('and the auth call is what triggers the write', async () => {
    claimsResult = { data: { claims: { sub: 'uuid-5', user_metadata: {} } }, error: null }
    await updateSession(req('/dashboard'))
    expect(setAllSpy).toHaveBeenCalled()
  })
})

describe('the request no longer depends on the network call', () => {
  it('works even when getUser would fail outright', async () => {
    // THE POINT OF THE CHANGE. Before it, this threw on every request. A pass
    // here means the Mumbai round trip is genuinely off the request path rather
    // than merely called later.
    getUserImpl = async () => {
      throw new Error('network call to Supabase Auth should not happen here')
    }
    claimsResult = { data: { claims: { sub: 'uuid-6', user_metadata: {} } }, error: null }
    const res = await updateSession(req('/dashboard'))
    expect(res.status).not.toBe(307)
  })

  it('and an anonymous request still gates without it', async () => {
    getUserImpl = async () => {
      throw new Error('network call to Supabase Auth should not happen here')
    }
    const res = await updateSession(req('/dashboard'))
    expect(res.headers.get('location')).toContain('/auth/login')
  })
})

describe('what the source must keep saying', () => {
  const SRC = readFileSync(join(process.cwd(), 'src/lib/supabase/middleware.ts'), 'utf8')
  const CODE = SRC.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*/g, '')

  it('the middleware uses getClaims', () => {
    expect(CODE).toContain('supabase.auth.getClaims()')
  })

  it('and no longer calls getUser itself', () => {
    expect(CODE).not.toContain('auth.getUser()')
  })

  it('the auth call is still the first thing after the client is built', () => {
    // Lazy session initialisation: anything between them risks the session
    // being committed after the response has been sent.
    const client = CODE.indexOf('createServerClient(')
    const auth = CODE.indexOf('supabase.auth.getClaims()')
    const firstGate = CODE.indexOf('needsPasswordChange')
    expect(client).toBeGreaterThan(-1)
    expect(auth).toBeGreaterThan(client)
    // The rule is that no GATE runs before the auth call, not that the client's
    // own cookie handlers contain no branches - they necessarily do.
    expect(firstGate).toBeGreaterThan(auth)
  })

  it('the API routes keep their own getUser, because they are the boundary', () => {
    // These claims are a verified signature, not an authorisation decision. A
    // revoked or deleted account still carries a valid unexpired token, and
    // only the Auth server knows it is gone.
    const route = readFileSync(join(process.cwd(), 'src/app/api/mark/route.ts'), 'utf8')
    expect(route).toContain('auth.getUser()')
  })
})

// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * A11Y-6, the half that was never checked.
 *
 * The `/ar` branch of the middleware used to `return` before the shared tail,
 * so the Arabic surface skipped the Content-Security-Policy, the per-request
 * nonce and affiliate tracking. That was restructured to fall through, and
 * `middleware-arabic-and-matcher.test.ts` asserts the restructuring - by
 * reading the source for the lines that do it.
 *
 * WHICH IS NOT THE SAME THING, and the difference is measurable rather than
 * rhetorical. Two mutations were run against both files:
 *
 *   Reinstate the early return - the original defect. The source-reading test
 *   catches it (1 of 30 fails); this one fails 6 of 13. Both work.
 *
 *   Delete the CSP from the shared tail, so EVERY response on the site loses
 *   it. The source-reading test stays green, 30 of 30. This one fails.
 *
 * That second case is the gap. The item is about headers arriving on a
 * response, and a test that greps the /ar branch is looking in the wrong place
 * to notice they stopped being produced at all. So this drives the real
 * `middleware()` and reads what it returns.
 *
 * WHAT IT DELIBERATELY DOES NOT ASSERT: Permissions-Policy. SEC-10 moved that,
 * with `payment=(self)`, out of the middleware and into next.config.js, which
 * applies to every route including this one - and widened coverage by doing so,
 * because the middleware's copy never reached its own early returns. It is
 * covered by security-headers.test.ts. Asserting it here would test a header
 * this code no longer owns, which is how a test starts describing a version of
 * the product that has moved on.
 */

const setAllSpy = vi.fn()

vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: {
      // An anonymous visitor: /ar/pricing is public, so the session gate has
      // nothing to do and the request reaches the tail.
      getClaims: async () => {
        setAllSpy()
        return { data: null, error: null }
      },
      getUser: async () => ({ data: { user: null }, error: null }),
    },
  }),
}))

const { middleware } = await import('@/middleware')
const { NextRequest } = await import('next/server')

function req(path: string) {
  return new NextRequest(new URL(`https://theenglishhub.app${path}`))
}

beforeEach(() => {
  setAllSpy.mockClear()
  process.env.NEXT_PUBLIC_SUPABASE_URL ??= 'https://example.supabase.co'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??= 'anon-key-for-tests'
})

describe('the Arabic surface carries the security headers', () => {
  it('a Content-Security-Policy at all, which is the whole item', async () => {
    const res = await middleware(req('/ar/pricing'))
    const csp = res.headers.get('Content-Security-Policy')
    expect(csp, 'no CSP on /ar - the branch has stopped reaching the tail').toBeTruthy()
    expect(csp).toContain("default-src 'self'")
  })

  it('and it does NOT carry a nonce in script-src, which is deliberate', async () => {
    // Written the other way round first, and wrong. The nonce source was
    // dropped from script-src on 2 May 2026: browsers ignore 'unsafe-inline'
    // when a nonce is present on the same directive, and Next 15.5 with React
    // 19 stopped stamping the nonce onto its framework chunks - a rolled-back
    // deployment had 0 nonce attributes against 96 on the green one, so every
    // framework script was blocked.
    //
    // Asserted as an absence so the next person to "restore the nonce" finds
    // this note before production does. buildCsp still TAKES the nonce, which
    // is what made the wrong assertion look plausible.
    const csp = (await middleware(req('/ar/pricing'))).headers.get('Content-Security-Policy')
    expect(csp).not.toContain("'nonce-")
  })

  it('and the nonce is handed to the renderer', async () => {
    const res = await middleware(req('/ar/pricing'))
    expect(res.headers.get('x-nonce')).toBeTruthy()
  })

  it('with a fresh x-nonce per request', async () => {
    // The header is still generated and threaded per request, ready for the
    // day Next stamps it reliably again. If two requests ever shared one, it
    // would be worthless for that.
    const [a, b] = await Promise.all([
      middleware(req('/ar/pricing')),
      middleware(req('/ar/pricing')),
    ])
    expect(a.headers.get('x-nonce')).toBeTruthy()
    expect(a.headers.get('x-nonce')).not.toBe(b.headers.get('x-nonce'))
  })

  it('and the same CSP the English surface gets', async () => {
    // Parity is the claim of the item. Comparing the two rules out a CSP that
    // is present on /ar but weaker than the one everyone else receives.
    const ar = await middleware(req('/ar/pricing'))
    const en = await middleware(req('/pricing'))
    const strip = (v: string | null) => (v ?? '').replace(/'nonce-[^']+'/g, "'nonce-X'")
    expect(strip(ar.headers.get('Content-Security-Policy'))).toBe(
      strip(en.headers.get('Content-Security-Policy')),
    )
  })

  it('and says the page is Arabic', async () => {
    expect((await middleware(req('/ar/pricing'))).headers.get('Content-Language')).toBe('ar')
  })
})

describe('affiliate tracking runs on the Arabic surface too', () => {
  /**
   * Affiliate attribution is a MARKETING purpose, so PECR reg. 6 needs consent
   * before the cookie is written. A request without `eh-cookie-consent=all`
   * correctly writes nothing - which is why the first version of this test
   * failed on BOTH surfaces and was measuring consent rather than the Arabic
   * branch.
   */
  function consented(path: string) {
    const r = req(path)
    r.cookies.set('eh-cookie-consent', 'all')
    return r
  }

  it('a ?ref= link sets the tracking cookie', async () => {
    // The commercial half of the same defect. A creator posting an Arabic link
    // with their ref code earned nothing, because the branch returned before
    // applyAffiliateTracking ever ran.
    const res = await middleware(consented('/ar/pricing?ref=testcreator'))
    const cookie = res.cookies.get('teh_aff')
    expect(cookie, 'no affiliate cookie on /ar - the referral is not attributed').toBeTruthy()
    // The value is base64url JSON, not the bare code. Decoded rather than
    // matched as a substring, so this asserts the creator is actually
    // attributed rather than that the string happens to appear somewhere.
    const payload = JSON.parse(Buffer.from(cookie!.value, 'base64url').toString('utf8'))
    expect(payload.ref).toBe('testcreator')
    expect(payload.clickCount).toBe(1)
  })

  it('exactly as it does on the unprefixed URL', async () => {
    const en = await middleware(consented('/pricing?ref=testcreator'))
    expect(en.cookies.get('teh_aff')).toBeTruthy()
  })

  it('but not without consent, on either surface', async () => {
    // THE ONE THAT MATTERS on a product used by children. This cookie is a
    // 30-day identifier and it used to be written on any ?ref= link with no
    // check at all. The Arabic surface must not be the exception that
    // reintroduces that.
    expect(
      (await middleware(req('/ar/pricing?ref=testcreator'))).cookies.get('teh_aff'),
    ).toBeFalsy()
    expect((await middleware(req('/pricing?ref=testcreator'))).cookies.get('teh_aff')).toBeFalsy()
  })

  it('and writes nothing without a ref, consent or not', async () => {
    // The counterweight: a cookie written unconditionally would satisfy the
    // assertions above and start tracking every visitor.
    expect((await middleware(consented('/ar/pricing'))).cookies.get('teh_aff')).toBeFalsy()
    expect((await middleware(consented('/pricing'))).cookies.get('teh_aff')).toBeFalsy()
  })
})

describe('the 2026-08-23 auth fix still holds', () => {
  it('an anonymous visitor cannot reach /ar/dashboard by prefixing the URL', async () => {
    // The security defect that came with the same early return: the Arabic
    // branch skipped updateSession entirely, so /ar/dashboard, /ar/account,
    // /ar/school and /ar/admin were reachable by typing them.
    const res = await middleware(req('/ar/dashboard'))
    expect(res.status).toBe(307)
    expect(res.headers.get('location')).toContain('/auth/login')
  })

  it('and the redirect names the stripped path, so login returns them to the page', async () => {
    const res = await middleware(req('/ar/dashboard'))
    expect(res.headers.get('location')).toContain('redirect=')
  })

  it('while the session logic runs exactly once', async () => {
    // Running updateSession twice on the Arabic path would double the auth
    // work on every request, which is what PERF-5 was about.
    setAllSpy.mockClear()
    await middleware(req('/ar/pricing'))
    expect(setAllSpy).toHaveBeenCalledTimes(1)
  })
})

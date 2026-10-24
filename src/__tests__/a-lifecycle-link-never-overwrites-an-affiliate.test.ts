// @vitest-environment node
import { describe, it, expect, vi, beforeEach } from 'vitest'

/**
 * No lifecycle email link can take a referral from an affiliate (24 October
 * 2026).
 *
 * The first build marked every lifecycle link `?ref=em-d6` and so on, as
 * document 08 asked. `ref` is the site's affiliate parameter: the middleware
 * writes any consented `?ref=` that looks like a code into the `teh_aff`
 * cookie, and attribution is last-click, so the pricing link in a trialist's
 * own email would have replaced a real creator's code with "em-d6" just before
 * checkout. The links now carry `?src=`, which nothing reads.
 *
 * This drives the real middleware, as the-arabic-surface-gets-the-same-
 * headers.test.ts does, with a visitor who has accepted all cookies and
 * already carries a creator's cookie, and follows the call-to-action link of
 * every lifecycle email. The control shows the old form really did overwrite
 * it, so the test can fail.
 */

vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: {
      getClaims: async () => ({ data: null, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
    },
  }),
}))

const { middleware } = await import('@/middleware')
const { NextRequest } = await import('next/server')
const { lifecycleSamples } = await import('@/lib/email/lifecycle/samples')

const CREATOR_COOKIE = Buffer.from(
  JSON.stringify({
    ref: 'realcreator',
    firstTouchAt: '2026-10-20T10:00:00.000Z',
    lastTouchAt: '2026-10-20T10:00:00.000Z',
    clickCount: 1,
  }),
  'utf8',
).toString('base64url')

/** A visitor who accepted all cookies and arrived through a creator's link. */
function visitorWithCreatorCookie(url: string) {
  const r = new NextRequest(new URL(url))
  r.cookies.set('eh-cookie-consent', 'all')
  r.cookies.set('teh_aff', CREATOR_COOKIE)
  return r
}

beforeEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL ??= 'https://example.supabase.co'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??= 'anon-key-for-tests'
})

function ctaOf(html: string): string {
  return [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]!)[0]!.replace(/&amp;/g, '&')
}

describe('the call-to-action link of every lifecycle email', () => {
  const samples = lifecycleSamples('https://theenglishhub.app/unsubscribe?token=t.s')

  it.each(samples.map((s) => [s.id, ctaOf(s.email.html)]))(
    '%s: carries no ref and leaves a creator’s cookie alone',
    async (_id, cta) => {
      const url = new URL(cta)
      expect(url.searchParams.has('ref')).toBe(false)
      expect(url.searchParams.get('src')).toMatch(/^em-/)

      const res = await middleware(visitorWithCreatorCookie(cta))
      expect(res.cookies.get('teh_aff'), 'the email link rewrote the affiliate cookie').toBeFalsy()
    },
  )

  it('control: the old ?ref= form did overwrite the creator, which is why it went', async () => {
    const res = await middleware(
      visitorWithCreatorCookie('https://theenglishhub.app/pricing?ref=em-d6'),
    )
    const cookie = res.cookies.get('teh_aff')
    expect(cookie).toBeTruthy()
    const payload = JSON.parse(Buffer.from(cookie!.value, 'base64url').toString('utf8'))
    expect(payload.ref).toBe('em-d6')
  })
})

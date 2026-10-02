/**
 * A prefetch must never choose, change or clear the visitor's board.
 *
 * THE DEFECT (2 October 2026). Next's <Link> prefetches its destination when
 * the link scrolls into view, and the middleware wrote the board cookie for any
 * request carrying ?setBoard=, prefetches included. On production a browser
 * with the cookie cleared held english-hub-board=ks3 after one homepage load,
 * having clicked nothing: the KS3 card's /ks3?setBoard=ks3 had been prefetched.
 * The two places that remember a /set-texts/<board> shelf on arrival, and the
 * ?resetBoard= handler, had the same flaw.
 *
 * THE FIRST VERSION OF THIS FILE PASSED WHILE PRODUCTION STAYED BROKEN. It sent
 * Next-Router-Prefetch: 1 straight into middleware(). In production that header
 * never arrives: Next's middleware adapter deletes it, with RSC and the rest of
 * its FLIGHT_HEADERS, before the middleware runs. So the fix keyed on it did
 * nothing, and a curl to the live site carrying the header still got the
 * cookie. The middleware now keys on Sec-Fetch-Mode, and the last block below
 * runs it through Next's own adapter with the headers a browser really sends,
 * so a check on a header the middleware cannot see fails here.
 *
 * The counterweights matter as much as the fix. A page load must still write
 * the cookie, or this change would have switched off every board picker on the
 * site, and every assertion above them would pass.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AsyncLocalStorage } from 'node:async_hooks'

vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: {
      getClaims: async () => ({ data: null, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
    },
  }),
}))

// Next's adapter (used in the last block) reads AsyncLocalStorage from the
// global, as the edge runtime provides it, and its modules capture it when
// first loaded - so this must come before anything from Next is imported.
;(globalThis as unknown as { AsyncLocalStorage: unknown }).AsyncLocalStorage = AsyncLocalStorage

const { middleware } = await import('@/middleware')
const { NextRequest } = await import('next/server')

function req(path: string, headers: Record<string, string> = {}) {
  return new NextRequest(new URL(`https://theenglishhub.app${path}`), { headers })
}

beforeEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL ??= 'https://example.supabase.co'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??= 'anon-key-for-tests'
})

/** What a router prefetch or client-side navigation looks like once it reaches the middleware. */
const ROUTER_FETCH = { 'sec-fetch-mode': 'cors', 'sec-fetch-dest': 'empty' }
/** A top-level page load, which is what a click on a board card becomes. */
const PAGE_LOAD = { 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'document' }

describe('a board card fetched in the background', () => {
  it.each([
    ['the router (a prefetch or a client-side navigation)', ROUTER_FETCH],
    ['the browser speculating a page load', { ...PAGE_LOAD, 'sec-purpose': 'prefetch;prerender' }],
    ['an older browser speculating', { purpose: 'prefetch' }],
  ])('chooses nothing when fetched by %s', async (_who, headers) => {
    const res = await middleware(req('/ks3?setBoard=ks3', headers))
    expect(res.status).toBe(204)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('does not replace a board the visitor already has', async () => {
    const res = await middleware(
      req('/set-texts/edexcel?setBoard=edexcel', { ...ROUTER_FETCH, cookie: 'english-hub-board=aqa' }),
    )
    expect(res.status).toBe(204)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })
})

describe('the same card, loaded as a page', () => {
  it('saves the board and redirects to the clean URL', async () => {
    const res = await middleware(req('/ks3?setBoard=ks3', PAGE_LOAD))
    expect(res.status).toBe(307)
    expect(res.cookies.get('english-hub-board')?.value).toBe('ks3')
    expect(new URL(res.headers.get('location') ?? '').search).toBe('')
  })

  it('saves it for a client that sends no Sec-Fetch-Mode, as every request did before', async () => {
    // Safari before 16.4, curl and crawlers. Treating them as page loads keeps
    // their behaviour exactly as it was.
    const res = await middleware(req('/set-texts/edexcel-igcse-lang?setBoard=edexcel-igcse-lang'))
    expect(res.cookies.get('english-hub-board')?.value).toBe('edexcel-igcse-lang')
  })
})

describe('the reset link', () => {
  it('clears nothing when fetched in the background', async () => {
    const res = await middleware(
      req('/board-select?resetBoard=1', { ...ROUTER_FETCH, cookie: 'english-hub-board=aqa' }),
    )
    expect(res.status).toBe(204)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('still clears the board when loaded as a page', async () => {
    const res = await middleware(
      req('/board-select?resetBoard=1', { ...PAGE_LOAD, cookie: 'english-hub-board=aqa' }),
    )
    expect(res.cookies.get('english-hub-board')?.value).toBe('')
  })
})

describe('shelf URLs, which remember a board on arrival', () => {
  it('a shelf fetched in the background is served but remembers nothing', async () => {
    const res = await middleware(req('/set-texts/aqa', ROUTER_FETCH))
    expect(res.status).toBe(200)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('arriving at the shelf still remembers it', async () => {
    const res = await middleware(req('/set-texts/aqa', PAGE_LOAD))
    expect(res.cookies.get('english-hub-board')?.value).toBe('aqa')
  })

  it('a shelf with no texts fetched in the background still redirects, remembering nothing', async () => {
    const res = await middleware(req('/set-texts/cambridge-0500', ROUTER_FETCH))
    expect(res.status).toBe(308)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('arriving there still remembers it', async () => {
    const res = await middleware(req('/set-texts/cambridge-0500', PAGE_LOAD))
    expect(res.cookies.get('english-hub-board')?.value).toBe('cambridge-0500')
  })
})

// ── Through Next's own middleware adapter ─────────────────────────────────
//
// The blocks above call middleware() directly. In production Next calls it
// through adapter(), which rewrites the request first. These run the real
// middleware the way production does, with the headers a browser sends.

const { adapter } = await import('next/dist/server/web/adapter')

type Handler = Parameters<typeof adapter>[0]['handler']

async function throughNext(
  url: string,
  headers: Record<string, string>,
  handler: Handler = middleware as unknown as Handler,
): Promise<Response> {
  const { response } = await adapter({
    page: '/middleware',
    handler,
    request: {
      url: `https://theenglishhub.app${url}`,
      method: 'GET',
      headers,
      nextConfig: {},
      signal: new AbortController().signal,
    },
  })
  return response
}

/** Every header a browser puts on a router prefetch. */
const BROWSER_PREFETCH = {
  rsc: '1',
  'next-router-prefetch': '1',
  'next-router-state-tree': '%5B%22%22%5D',
  'sec-fetch-mode': 'cors',
  'sec-fetch-dest': 'empty',
  'sec-fetch-site': 'same-origin',
}

describe('through Next’s middleware adapter, as in production', () => {
  it('the router’s own prefetch header never reaches the middleware', async () => {
    // Why the first fix did nothing. If Next ever stops stripping it, this
    // fails and the comment on isBackgroundRequest needs revisiting.
    let seen: string | null = 'not called'
    await throughNext('/ks3?setBoard=ks3&_rsc=1', BROWSER_PREFETCH, async (r) => {
      seen = r.headers.get('next-router-prefetch')
      return new Response(null, { status: 204 })
    })
    expect(seen).toBeNull()
  })

  it('a prefetched board card chooses nothing', async () => {
    const res = await throughNext('/ks3?setBoard=ks3&_rsc=1', BROWSER_PREFETCH)
    expect(res.status).toBe(204)
    expect(res.headers.get('set-cookie') ?? '').not.toContain('english-hub-board')
  })

  it('the click, which the router turns into a page load, saves the board', async () => {
    const res = await throughNext('/ks3?setBoard=ks3', PAGE_LOAD)
    expect(res.status).toBe(307)
    expect(res.headers.get('set-cookie') ?? '').toContain('english-hub-board=ks3')
  })
})

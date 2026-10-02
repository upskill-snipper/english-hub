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
 * The counterweights matter as much as the fix. The same URLs requested by a
 * click must still write the cookie, or this change would have switched off
 * every board picker on the site and every assertion above them would pass.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'

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

function req(path: string, headers: Record<string, string> = {}) {
  return new NextRequest(new URL(`https://theenglishhub.app${path}`), { headers })
}

beforeEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL ??= 'https://example.supabase.co'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??= 'anon-key-for-tests'
})

/** The router's own marker first; the others are the browser's. */
const PREFETCH: Record<string, string>[] = [
  { 'next-router-prefetch': '1' },
  { purpose: 'prefetch' },
  { 'sec-purpose': 'prefetch;prerender' },
  { 'x-middleware-prefetch': '1' },
]

describe('a prefetched board card', () => {
  it.each(PREFETCH)('chooses nothing (%o)', async (marker) => {
    const res = await middleware(req('/ks3?setBoard=ks3', marker))
    expect(res.status).toBe(204)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('does not replace a board the visitor already has', async () => {
    const res = await middleware(
      req('/set-texts/edexcel?setBoard=edexcel', {
        'next-router-prefetch': '1',
        cookie: 'english-hub-board=aqa',
      }),
    )
    expect(res.status).toBe(204)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })
})

describe('the same card, clicked', () => {
  it('saves the board and redirects to the clean URL', async () => {
    const res = await middleware(req('/ks3?setBoard=ks3'))
    expect(res.status).toBe(307)
    expect(res.cookies.get('english-hub-board')?.value).toBe('ks3')
    expect(new URL(res.headers.get('location') ?? '').search).toBe('')
  })

  it('saves it on a client-side navigation with nothing prefetched', async () => {
    // A click on a link that was not prefetched: an RSC request with no
    // prefetch header. It must count as the choice it is.
    const res = await middleware(
      req('/set-texts/edexcel-igcse-lang?setBoard=edexcel-igcse-lang&_rsc=1', { rsc: '1' }),
    )
    expect(res.cookies.get('english-hub-board')?.value).toBe('edexcel-igcse-lang')
  })
})

describe('the reset link', () => {
  it('clears nothing when prefetched', async () => {
    const res = await middleware(
      req('/board-select?resetBoard=1', {
        'next-router-prefetch': '1',
        cookie: 'english-hub-board=aqa',
      }),
    )
    expect(res.status).toBe(204)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('still clears the board when clicked', async () => {
    const res = await middleware(
      req('/board-select?resetBoard=1', { cookie: 'english-hub-board=aqa' }),
    )
    expect(res.cookies.get('english-hub-board')?.value).toBe('')
  })
})

describe('shelf URLs, which remember a board on arrival', () => {
  it('a prefetched shelf is served but remembers nothing', async () => {
    const res = await middleware(req('/set-texts/aqa', { 'next-router-prefetch': '1' }))
    expect(res.status).toBe(200)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('arriving at the shelf still remembers it', async () => {
    const res = await middleware(req('/set-texts/aqa'))
    expect(res.cookies.get('english-hub-board')?.value).toBe('aqa')
  })

  it('a prefetched shelf with no texts is still redirected to its hub, remembering nothing', async () => {
    const res = await middleware(req('/set-texts/cambridge-0500', { 'next-router-prefetch': '1' }))
    expect(res.status).toBe(308)
    expect(res.cookies.get('english-hub-board')).toBeUndefined()
  })

  it('arriving there still remembers it', async () => {
    const res = await middleware(req('/set-texts/cambridge-0500'))
    expect(res.cookies.get('english-hub-board')?.value).toBe('cambridge-0500')
  })
})

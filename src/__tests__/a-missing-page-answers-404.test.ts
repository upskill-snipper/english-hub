import { describe, it, expect, vi, beforeEach } from 'vitest'
import { AsyncLocalStorage } from 'node:async_hooks'
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

import KNOWN_PAGES from '@/lib/seo/known-pages.generated.json'
import { isMissingPage, NOT_FOUND_REWRITE } from '@/lib/seo/known-pages'
import {
  computeKnownPages,
  KNOWN_ROUTES,
  type KnownRoutePattern,
  type RouteModule,
} from '@/lib/seo/known-pages.sources'
import { getBlogSlugs } from '@/lib/blog/posts'

/**
 * A page that does not exist answers with a real 404, and a page that does is
 * never called missing.
 *
 * WHY (10 October 2026). Every dynamic route on the live site served its "Page
 * not found" screen under HTTP 200 for a parameter it does not have, because
 * the root loading.tsx streams a 200 before any page can call notFound(). The
 * middleware now decides first, from a generated list of each covered route's
 * real pages (src/lib/seo/known-pages.ts). This file holds that list to the
 * routes, holds the middleware to the list, and, because the one way this
 * change can do harm is by 404ing a real page, checks the list against the
 * sitemap and against every link written in the source.
 */

vi.mock('@supabase/ssr', () => ({
  createServerClient: () => ({
    auth: {
      getClaims: async () => ({ data: null, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
    },
  }),
}))

// Next's adapter reads AsyncLocalStorage from the global, as the edge runtime
// provides it, and captures it when first loaded: set before Next is imported.
;(globalThis as unknown as { AsyncLocalStorage: unknown }).AsyncLocalStorage = AsyncLocalStorage

const { middleware } = await import('@/middleware')
const { adapter } = await import('next/dist/server/web/adapter')

beforeEach(() => {
  process.env.NEXT_PUBLIC_SUPABASE_URL ??= 'https://example.supabase.co'
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??= 'anon-key-for-tests'
})

const ROOT = process.cwd()
const APP = join(ROOT, 'src', 'app')
const ROUTE_PAGES = import.meta.glob<RouteModule>('../app/**/page.tsx')

describe('the list of real pages', () => {
  it('is what the routes say now, so a page added since is not answered 404', async () => {
    const fresh = await computeKnownPages(async (route) => {
      const load = ROUTE_PAGES[`../app${route}/page.tsx`]
      if (!load) throw new Error(`${route}: no page module`)
      return load()
    }, APP)
    expect(
      KNOWN_PAGES,
      'stale: run node scripts/generate-known-pages.mjs and commit the result',
    ).toEqual(fresh)
  }, 120_000)

  it('covers every route the sources name, each with real pages in it', () => {
    const list = KNOWN_PAGES as KnownRoutePattern[]
    expect(list.map((r) => r.route)).toEqual(KNOWN_ROUTES.map((r) => r.route))
    for (const r of list) expect(r.known.length, r.route).toBeGreaterThan(0)
    // Vacuity guards: the biggest lists hold what they must.
    const by = (route: string) => list.find((r) => r.route === route)!.known
    expect(by('/revision/texts/[slug]')).toContain('macbeth')
    expect(by('/revision/texts/[slug]')).toContain('an-inspector-calls')
    expect(by('/blog/[slug]').sort()).toEqual([...getBlogSlugs()].sort())
    expect(by('/revision/model-essays/[text]/[slug]').length).toBe(25)
    expect(by('/revision/texts/jane-eyre/read/[chapter]')).toHaveLength(38)
  })

  it('is rebuilt before every build', () => {
    const pkg = JSON.parse(readFileSync(join(ROOT, 'package.json'), 'utf8'))
    expect(pkg.scripts.prebuild).toContain('node scripts/generate-known-pages.mjs')
  })
})

describe('no real page is called missing', () => {
  it('none the sitemap lists', async () => {
    const { default: sitemap } = await import('@/app/sitemap')
    const entries = await sitemap()
    expect(entries.length).toBeGreaterThan(500)
    const missing = entries
      .map((e) => new URL(e.url).pathname)
      .map((p) => (p === '/ar' ? '/' : p.startsWith('/ar/') ? p.slice(3) : p))
      .filter((p) => isMissingPage(p))
    expect(missing).toEqual([])
  }, 120_000)

  it('none that a link written in the source points at', () => {
    // Literal paths under the covered routes, in any .ts/.tsx file. A link
    // built from a variable cannot be read here; the sitemap check above and
    // the generated list cover the data those come from.
    const PREFIX =
      /['"`](\/(?:revision\/texts|games\/texts|set-texts|ks3|resources\/teaching\/(?:lesson-plans|printables)|revision\/poetry\/pearson-igcse|courses|blog|resources\/revision-notes|revision\/model-essays|analysis|eal)\/[a-z0-9-]+(?:\/[a-z0-9-]+)*)(?=['"`?#])/g
    const files: string[] = []
    const walk = (dir: string) => {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const full = join(dir, e.name)
        if (e.isDirectory()) {
          if (e.name !== '__tests__' && e.name !== 'node_modules') walk(full)
        } else if (/\.tsx?$/.test(e.name) && !/\.test\.tsx?$/.test(e.name)) files.push(full)
      }
    }
    walk(join(ROOT, 'src'))
    const bad: string[] = []
    let seen = 0
    for (const f of files) {
      for (const line of readFileSync(f, 'utf8').split('\n')) {
        // Comments name URL shapes as examples ("better than `/ks3/7`"), and
        // are not links a reader can follow.
        if (/^\s*(\/\/|\/?\*|\{\/\*)/.test(line)) continue
        for (const m of line.matchAll(PREFIX)) {
          seen++
          if (isMissingPage(m[1])) bad.push(`${relative(ROOT, f)}: ${m[1]}`)
        }
      }
    }
    expect(seen, 'the scan found no links, so it proves nothing').toBeGreaterThan(200)
    expect(bad).toEqual([])
  })
})

describe('isMissingPage', () => {
  it.each([
    '/revision/texts/not-a-text',
    '/revision/texts/_components',
    '/games/texts/not-a-text',
    '/revision/texts/jane-eyre/read/99',
    '/revision/texts/jane-eyre/read/0',
    '/blog/not-a-post',
    '/set-texts/not-a-board',
    '/ks3/year-12',
    '/ks3/year-7/term-9',
    '/resources/revision-notes/not-a-text',
    '/revision/model-essays/macbeth/not-an-essay',
    '/analysis/not-a-page',
    '/eal/not-a-topic',
    '/eal/articles/level/z9',
    '/courses/not-a-course',
    '/revision/texts/%E0%A4',
  ])('calls %s missing', (path) => {
    expect(isMissingPage(path)).toBe(true)
  })

  it.each([
    '/revision/texts/macbeth',
    '/revision/texts/disabled',
    '/revision/texts/mac%62eth',
    '/games/texts/an-inspector-calls',
    '/revision/texts/jane-eyre/read/38',
    '/set-texts/aqa',
    '/ks3/year-7',
    '/ks3/year-7/term-1/week-2',
    '/resources/revision-notes/macbeth',
    '/resources/revision-notes/inspector-calls',
    '/resources/revision-notes/the-scarlet-letter',
    '/revision/model-essays/macbeth/macbeth-ambition',
    '/eal/articles',
    '/eal/articles/level/b1',
    '/eal/diagnostic',
  ])('calls %s real', (path) => {
    expect(isMissingPage(path)).toBe(false)
  })

  it.each([
    '/',
    '/revision/texts',
    '/blog',
    '/revision/texts/macbeth/characters',
    '/dashboard/review/abc',
    '/mock-exams/not-a-paper',
    '/this-page-does-not-exist',
    '/analysis/macbeth/anything',
  ])('leaves %s to Next, as no covered route claims it', (path) => {
    expect(isMissingPage(path)).toBe(false)
  })

  it('takes a real blog post from the list itself, not from a guess', () => {
    const post = getBlogSlugs()[0]
    expect(isMissingPage(`/blog/${post}`)).toBe(false)
  })
})

// ── Through Next's own middleware adapter, as in production ──────────────────

type Handler = Parameters<typeof adapter>[0]['handler']

async function throughNext(path: string, headers: Record<string, string> = {}): Promise<Response> {
  const { response } = await adapter({
    page: '/middleware',
    handler: middleware as unknown as Handler,
    request: {
      url: `https://theenglishhub.app${path}`,
      method: 'GET',
      headers: { 'sec-fetch-mode': 'navigate', 'sec-fetch-dest': 'document', ...headers },
      nextConfig: {},
      signal: new AbortController().signal,
    },
  })
  return response
}

const rewriteOf = (res: Response) => {
  const r = res.headers.get('x-middleware-rewrite')
  return r ? new URL(r).pathname : null
}

describe('the middleware', () => {
  // The CSP has carried no nonce source since 2 May 2026 (see buildCsp in the
  // middleware); the nonce travels in x-nonce. What matters is that the 404 is
  // given the same policy and nonce as any page, by the shared tail.
  const realPage = async () =>
    (await throughNext('/revision/texts/macbeth', { cookie: 'english-hub-board=aqa' })).headers.get(
      'content-security-policy',
    )

  it('rewrites a missing page to the 404, with the CSP and nonce every page gets', async () => {
    const res = await throughNext('/revision/texts/not-a-text', {
      cookie: 'english-hub-board=aqa',
    })
    expect(rewriteOf(res)).toBe(NOT_FOUND_REWRITE)
    expect(res.headers.get('content-security-policy')).toBe(await realPage())
    expect(res.headers.get('x-nonce')).toBeTruthy()
  })

  it('does the same on the Arabic surface', async () => {
    const res = await throughNext('/ar/blog/not-a-post')
    expect(rewriteOf(res)).toBe(NOT_FOUND_REWRITE)
    expect(res.headers.get('content-security-policy')).toBe(await realPage())
    expect(res.headers.get('x-nonce')).toBeTruthy()
  })

  it('answers a missing page with the 404, not a detour to choose a board', async () => {
    const res = await throughNext('/courses/not-a-course')
    expect(res.headers.get('location')).toBeNull()
    expect(rewriteOf(res)).toBe(NOT_FOUND_REWRITE)
  })

  it('leaves a real page alone', async () => {
    const res = await throughNext('/revision/texts/macbeth', { cookie: 'english-hub-board=aqa' })
    expect(rewriteOf(res)).toBeNull()
    expect(res.headers.get('x-middleware-next')).toBe('1')
  })

  it('and serves a real Arabic page from its own route', async () => {
    const res = await throughNext('/ar/revision/texts/macbeth', {
      cookie: 'english-hub-board=aqa',
    })
    expect(rewriteOf(res)).toBe('/revision/texts/macbeth')
  })
})

describe('the path a missing page is rewritten to', () => {
  it('is served by no route, so Next answers it with the not-found page and 404', () => {
    expect(NOT_FOUND_REWRITE.startsWith('/')).toBe(true)
    expect(existsSync(join(APP, NOT_FOUND_REWRITE.slice(1)))).toBe(false)
    // A catch-all at the root would serve it.
    const rootDynamic = readdirSync(APP).filter((n) => n.startsWith('['))
    expect(rootDynamic).toEqual([])
    expect(isMissingPage(NOT_FOUND_REWRITE)).toBe(false)
  })
})

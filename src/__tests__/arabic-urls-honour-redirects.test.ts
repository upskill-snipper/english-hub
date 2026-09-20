import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import ROUTE_REDIRECTS from '@/lib/seo/route-redirects.json'

/**
 * Every redirect rule was unreachable on the Arabic surface (CUI-9).
 *
 * THE DEFECT (19 September 2026). `next.config.js` redirects are matched
 * against the REQUESTED url before middleware runs. The Arabic surface rewrites
 * `/ar/<path>` to `<path>` internally, and an internal rewrite does not
 * re-enter that table. The retired-page table in the middleware had the same
 * problem from the other direction: it is keyed on the raw `pathname`, so
 * `/ar/toolkit` matched nothing.
 *
 * So all 21 config rules and the one retired-page rule were dead under /ar.
 * Retired marketing pages still rendered in Arabic - `/ar/for-schools` served
 * a 1,540-line page whose English twin has been a 308 since May - and so did
 * `/ar/privacy-policy` and `/ar/legal/safeguarding`, which are compliance URLs.
 *
 * TWO THINGS THAT WOULD HAVE MADE THE FIX A NEW BUG:
 *
 *   - Redirecting to the ENGLISH destination. `/ar/privacy-policy` goes to
 *     `/ar/legal/privacy`, not `/legal/privacy`. Sending an Arabic reader to
 *     the English URL is a second defect wearing the fix's clothes.
 *   - Dropping the query string. The previous defect in this same branch
 *     silently dropped affiliate referrals; a redirect that discards `?ref=`
 *     would reintroduce it on precisely the retired URLs most likely to be
 *     sitting in an old campaign link.
 */

const ROOT = process.cwd()
const MIDDLEWARE = readFileSync(join(ROOT, 'src/middleware.ts'), 'utf8')
const NEXT_CONFIG = readFileSync(join(ROOT, 'next.config.js'), 'utf8')

describe('the shared redirect table', () => {
  it('holds every rule, and next.config.js holds none', () => {
    // This was `toBe(21)` until 20 September 2026, when adding a legitimate
    // rule (/llms-full.txt) failed it. A pinned count does not express the
    // invariant - which is that the extraction was COMPLETE and nothing has
    // been added back inline - it just forbids ever adding a redirect. So:
    // the 21 extracted rules are still here, and next.config.js carries
    // exactly one `source:` literal, the headers block asserted below.
    expect(ROUTE_REDIRECTS.redirects.length).toBeGreaterThanOrEqual(21)
    expect((NEXT_CONFIG.match(/source: '/g) || []).length).toBe(1)
  })

  it('is read by next.config.js rather than duplicated there', () => {
    expect(NEXT_CONFIG).toContain("require('./src/lib/seo/route-redirects.json')")
    expect(NEXT_CONFIG).toContain('return ROUTE_REDIRECTS.redirects')
  })

  it('is read by the middleware too, so the two cannot drift', () => {
    expect(MIDDLEWARE).toContain("from '@/lib/seo/route-redirects.json'")
  })

  it('leaves the security headers block alone', () => {
    // next.config.js has 22 `source:` occurrences: 21 redirects and one in
    // `headers()` carrying X-Frame-Options, X-Content-Type-Options and the
    // CSP. A naive "no inline source: literals" rule would invite someone to
    // mangle that block to pass a test.
    expect(NEXT_CONFIG).toMatch(/source: '\/\(\.\*\)'/)
    expect(NEXT_CONFIG).toMatch(/X-Frame-Options/)
  })

  it.each([
    ['/privacy-policy', '/legal/privacy'],
    ['/legal/safeguarding', '/safeguarding'],
    ['/for-schools', '/schools'],
    ['/for-schools/pilot', '/school-pilot'],
  ])('still routes %s to %s', (source, destination) => {
    const rule = ROUTE_REDIRECTS.redirects.find((r) => r.source === source)
    expect(rule, `${source} has gone missing from the table`).toBeTruthy()
    expect(rule!.destination).toBe(destination)
  })

  it('keeps /growth temporary, which was deliberate', () => {
    // Its comment in next.config said "307 so it can come back". Flipping it
    // to permanent during an extraction would be a silent decision.
    const growth = ROUTE_REDIRECTS.redirects.find((r) => r.source === '/growth')!
    expect(growth.permanent).toBe(false)
  })

  it('has no duplicate or self-referential rules', () => {
    const sources = ROUTE_REDIRECTS.redirects.map((r) => r.source)
    expect(sources.length).toBe(new Set(sources).size)
    for (const r of ROUTE_REDIRECTS.redirects) {
      expect(r.destination, `${r.source} redirects to itself`).not.toBe(r.source)
    }
  })

  it('never redirects to a path that is itself a source', () => {
    // A redirect chain costs a round trip and loses link equity at each hop.
    const sources = new Set(ROUTE_REDIRECTS.redirects.map((r) => r.source))
    const chained = ROUTE_REDIRECTS.redirects.filter((r) => sources.has(r.destination))
    expect(chained.map((r) => `${r.source} -> ${r.destination}`)).toEqual([])
  })
})

// ─── The Arabic branch ──────────────────────────────────────────────────────

describe('the /ar branch', () => {
  const start = MIDDLEWARE.indexOf("if (pathname.startsWith('/ar/')")
  const branch = MIDDLEWARE.slice(start, MIDDLEWARE.indexOf('} else {', start))

  it('consults the redirect tables against the STRIPPED path', () => {
    // Against `pathname` it would look up '/ar/for-schools', which matches
    // nothing - which is the entire defect.
    expect(branch).toMatch(/lookupRedirect\(strippedPath\)/)
  })

  it('keeps the reader on the Arabic surface', () => {
    expect(branch).toMatch(/`\/ar\$\{arRedirect\.destination\}`/)
  })

  it('carries the query string through', () => {
    // The previous defect in this branch dropped affiliate referrals.
    expect(branch).toMatch(/redirectUrl\.search = request\.nextUrl\.search/)
  })

  it('preserves each rule’s own permanence', () => {
    // /growth is deliberately temporary; hard-coding 308 would override that.
    expect(branch).toMatch(/arRedirect\.permanent \? 308 : 307/)
  })
})

// ─── The retired-page redirect ──────────────────────────────────────────────

describe('the retired-page redirect', () => {
  it('is permanent', () => {
    // It omitted the status argument, so Next defaulted to 307 TEMPORARY. A
    // retired page is not coming back; 308 transfers the link equity instead
    // of telling search engines to keep the old URL indexed.
    const at = MIDDLEWARE.indexOf('const retiredTarget')
    const block = MIDDLEWARE.slice(at, at + 400)
    expect(block).toMatch(/NextResponse\.redirect\(new URL\(retiredTarget, request\.url\), 308\)/)
  })

  it('is reachable through the shared lookup as well', () => {
    // So /ar/toolkit redirects too, not just /toolkit.
    expect(MIDDLEWARE).toMatch(/function lookupRedirect/)
    const fn = MIDDLEWARE.slice(MIDDLEWARE.indexOf('function lookupRedirect'))
    expect(fn.slice(0, 400)).toContain('RETIRED_PAGE_REDIRECTS')
  })
})

import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Two defects in src/middleware.ts, both about code that never ran.
 *
 * A11Y-6 - THE ARABIC SURFACE HAD NO SECURITY HEADERS AT ALL.
 * The /ar branch built its rewrite and `return`ed, so no Arabic URL ever
 * reached the shared tail where Content-Security-Policy, the per-request
 * nonce, X-Content-Type-Options, Referrer-Policy, Permissions-Policy and
 * affiliate tracking are applied. next.config.js carries no static CSP and its
 * Permissions-Policy omits `payment`, so nothing caught it: the whole Arabic
 * surface was served with no CSP, and an affiliate referral arriving on an /ar
 * link was silently dropped.
 *
 * This was the SECOND bug of that exact shape in that branch. The first, in
 * August, was an early return that skipped the auth wall, so /ar/dashboard and
 * /ar/admin were reachable by prefixing the URL. Patching the symptom once
 * left the shape in place. The branch now falls through rather than returning,
 * so anything added to the tail in future covers Arabic automatically.
 *
 * PERF-3 - THE MATCHER RAN THE WHOLE MIDDLEWARE ON STATIC FILES.
 * Session refresh, CSRF attestation and CSP construction ran for
 * manifest.json, llms.txt, the PDF worker, the self-hosted font and the
 * generated robots.txt and sitemap.xml.
 */

const mw = readFileSync(join(process.cwd(), 'src/middleware.ts'), 'utf8')

/** The single matcher string, as Next statically analyses it. */
const matcher = (() => {
  const m = mw.match(/matcher:\s*\[\s*'([^']+)'/)
  return m?.[1] ?? ''
})()

/** Does the matcher run the middleware for this path? */
function runsOn(path: string): boolean {
  // Next compiles the matcher into a regexp anchored on the whole path.
  return new RegExp(`^${matcher}$`).test(path)
}

// ─── A11Y-6 ─────────────────────────────────────────────────────────────

describe('the Arabic branch', () => {
  it('no longer returns before the shared tail', () => {
    const start = mw.indexOf("if (pathname.startsWith('/ar/')")
    const end = mw.indexOf('} else {', start)
    const branch = mw.slice(start, end)
    expect(start).toBeGreaterThan(-1)
    // The rule, which this assertion now STATES rather than approximates: a
    // return is permitted only when what it returns is a redirect. A redirect
    // carries no page, so it needs no CSP nonce and no affiliate stamping.
    // Anything returning a RENDERED response here skips the shared tail and
    // reintroduces the August defect.
    //
    // This used to count returns and require exactly 1. That is a different
    // rule, and a weaker one: CUI-9 added a second return - the redirect that
    // makes retired URLs reachable under /ar - and the count tripped on a
    // change the comment above it already permitted.
    const returns = [...branch.matchAll(/^\s*return\s+([^\n]*)/gm)].map((m) => m[1].trim())
    expect(returns.length, 'the branch returns nothing at all').toBeGreaterThan(0)
    for (const returned of returns) {
      expect(
        /^sessionRes\b/.test(returned) || /^NextResponse\.redirect\(/.test(returned),
        `the /ar branch returns something that is not a redirect: ${returned}`,
      ).toBe(true)
    }
    expect(branch).toContain('return sessionRes')
  })

  it('assigns to the shared response instead of building its own', () => {
    expect(mw).toContain('response = NextResponse.rewrite(rewriteUrl')
  })

  it('still refreshes the session against the stripped path', () => {
    // The August fix. Removing it would make /ar/dashboard reachable by
    // prefixing the URL, so it has to survive this restructure.
    expect(mw).toContain('await updateSession(request, strippedPath)')
  })

  it('does not run updateSession twice', () => {
    // Once in the Arabic branch against the stripped path, once in the else.
    const calls = mw.match(/await updateSession\(request/g) ?? []
    expect(calls.length).toBe(2)
  })

  it('looks the analysis slug up by the route actually served', () => {
    // On /ar/analysis/... the rendering route is the stripped one. Using the
    // prefixed path would miss the JSON-LD hashes and drop the CSP back to
    // 'unsafe-inline' on exactly the pages that are force-static.
    expect(mw).toContain('extractAnalysisSlugKey(servedPath)')
    expect(mw).not.toContain('extractAnalysisSlugKey(pathname)')
  })

  it('keeps the Content-Language header it always set', () => {
    expect(mw).toContain("response.headers.set('Content-Language', 'ar')")
  })

  it('still applies every header the tail is responsible for', () => {
    for (const header of [
      'Content-Security-Policy',
      'x-nonce',
      'X-Content-Type-Options',
      'Referrer-Policy',
      'Permissions-Policy',
    ]) {
      expect(mw, `${header} is no longer set`).toContain(header)
    }
    expect(mw).toContain('applyAffiliateTracking(request, response)')
  })
})

// ─── PERF-3 ─────────────────────────────────────────────────────────────

describe('the matcher', () => {
  it('parses, or every assertion below is vacuous', () => {
    expect(matcher.length).toBeGreaterThan(50)
  })

  it.each([
    'manifest.json',
    'robots.txt',
    'sitemap.xml',
    'llms.txt',
    'llms-full.txt',
    '.well-known/security.txt',
    'vendor/pdf.worker.min.mjs',
    'fonts/MonaSansVF.woff2',
    'icons/icon-192.png',
    '_next/static/chunks/main.js',
  ])('skips the middleware for /%s', (path) => {
    expect(runsOn(`/${path}`)).toBe(false)
  })

  it.each([
    '/',
    '/pricing',
    '/dashboard',
    '/ar/dashboard',
    '/marking/submit',
    '/api/stripe/webhook',
  ])('still runs for %s', (path) => {
    expect(runsOn(path)).toBe(true)
  })

  // ─── The trap ─────────────────────────────────────────────────────────
  //
  // The obvious version of this fix adds `ico|woff2?|mjs|pdf|mp3|map` as a
  // generic extension class. That reads as harmless and is not: these routes
  // are dot-tolerant dynamic segments, so excluding by extension would strip
  // the auth wall and the CSRF check from exactly the URLs that serve a
  // child's own report.
  it.each(['/parent/report.pdf', '/certificate/123.pdf', '/api/tts/voice.mp3', '/analysis/x.map'])(
    'still runs for %s, which a generic extension class would have excluded',
    (path) => {
      expect(runsOn(path)).toBe(true)
    },
  )

  it('excludes no generic document or media extension class', () => {
    for (const ext of ['pdf', 'mp3', 'mjs', 'map', 'woff2']) {
      expect(
        matcher.includes(`|${ext}`) || matcher.includes(`${ext}|`),
        `${ext} is excluded by extension - see the trap above`,
      ).toBe(false)
    }
  })

  it('keeps the six original image extensions', () => {
    for (const ext of ['svg', 'png', 'jpg', 'jpeg', 'gif', 'webp']) {
      expect(matcher).toContain(ext)
    }
  })
})

import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Security headers, asserted against the files that actually set them.
 *
 * THE DEFECT THIS REPLACES (19 September 2026, SEC-10). The previous version of
 * this file declared its own `SECURITY_HEADERS` literal and then asserted
 * against that literal. It never opened `next.config.js` and never opened the
 * middleware. **It would have passed with the entire `headers()` block
 * deleted.** Its own header comment said as much - "Instead, we define the
 * expected headers here" - and nobody read it as the admission it was.
 *
 * It had already rotted: the CSP it enshrined carried no `frame-ancestors`, no
 * `form-action`, and none of the Trustpilot or Cloudflare hosts the live
 * policy has had since d7034547. So it was asserting a policy that had not
 * shipped for months, in a file named for the thing it was not checking.
 *
 * This is the "fails and reports success" shape in its purest form: a green
 * test, a real-looking name, and zero coupling to the artefact.
 *
 * WHAT CHANGED IN THE SAME COMMIT. The static headers had TWO owners that
 * disagreed - `next.config.js` set `Permissions-Policy` without `payment`, the
 * middleware set the same header WITH `payment=(self)`, and which one shipped
 * depended on which won. Ownership is now `next.config.js` alone. Stripe's
 * wallet flows depend on `payment=(self)`, so that value is asserted below
 * rather than left to a comment.
 */

const ROOT = process.cwd()
const NEXT_CONFIG = readFileSync(join(ROOT, 'next.config.js'), 'utf8')
const MIDDLEWARE = readFileSync(join(ROOT, 'src/middleware.ts'), 'utf8')

/**
 * The middleware source, comments INCLUDED, and deliberately so.
 *
 * The first draft of this file stripped block comments before asserting. That
 * broke on the middleware's own CSP: `https://*.supabase.co` contains a slash
 * followed by an asterisk, so a naive stripper reads it as the start of a
 * block comment and deletes everything up to the next comment close - which
 * silently removed `buildCsp` itself and failed an assertion for a reason that
 * had nothing to do with security headers.
 *
 * The assertions below are therefore written against distinctive CODE shapes
 * that cannot appear in prose by accident, rather than against bare words that
 * could.
 */
const MIDDLEWARE_CODE = MIDDLEWARE

// ─── The real config, read from disk ────────────────────────────────────────

describe('next.config.js', () => {
  it('actually has a headers() block', () => {
    // The assertion the old file could not make, and the reason it was useless.
    expect(NEXT_CONFIG).toMatch(/async headers\(\)/)
    expect(NEXT_CONFIG).toMatch(/source: '\/\(\.\*\)'/)
  })

  it.each([
    ['X-Frame-Options', 'DENY'],
    ['X-Content-Type-Options', 'nosniff'],
    ['Referrer-Policy', 'strict-origin-when-cross-origin'],
    ['X-XSS-Protection', '0'],
    ['Cross-Origin-Opener-Policy', 'same-origin'],
    ['Cross-Origin-Resource-Policy', 'same-origin'],
  ])('sets %s to %s', (key, value) => {
    const re = new RegExp(`key: '${key}', value: '${value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}'`)
    expect(NEXT_CONFIG).toMatch(re)
  })

  it('keeps HSTS long, with subdomains and preload', () => {
    expect(NEXT_CONFIG).toMatch(/Strict-Transport-Security[\s\S]{0,80}max-age=63072000/)
    expect(NEXT_CONFIG).toMatch(/includeSubDomains; preload/)
  })

  it('keeps payment=(self), without which wallet payments break', () => {
    // This value used to exist ONLY in the middleware's duplicate. Now that the
    // middleware no longer sets the header, dropping it here silently disables
    // Apple Pay and Google Pay on every route.
    expect(NEXT_CONFIG).toMatch(/'Permissions-Policy'[\s\S]{0,200}payment=\(self\)/)
  })

  it('and microphone=(self), without which dictation cannot start', () => {
    // It was `microphone=()`, which closes the microphone to every origin
    // INCLUDING our own. Seven surfaces ship a dictation button and all seven
    // rendered a microphone that did nothing. Reported from the live site.
    //
    // Asserted as its own directive rather than as one long exact string,
    // because the previous shape meant any change to any directive rewrote an
    // assertion about all four and the diff said nothing about which one moved.
    expect(NEXT_CONFIG).toMatch(/'Permissions-Policy'[\s\S]{0,200}microphone=\(self\)/)
  })

  it('while camera and geolocation stay closed, because nothing uses them', () => {
    // The counterweight. Opening the microphone is not a reason to open
    // anything else, and a blanket relaxation would pass the assertion above.
    expect(NEXT_CONFIG).toMatch(/'Permissions-Policy'[\s\S]{0,200}camera=\(\)/)
    expect(NEXT_CONFIG).toMatch(/'Permissions-Policy'[\s\S]{0,200}geolocation=\(\)/)
  })
})

// ─── One owner, so they cannot disagree again ───────────────────────────────

describe('the middleware', () => {
  it.each(['X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy'])(
    'no longer duplicates %s',
    (key) => {
      expect(MIDDLEWARE_CODE).not.toContain(`response.headers.set('${key}'`)
    },
  )

  it('no longer claims X-Frame-Options is omitted, because it is not', () => {
    // next.config.js sets it to DENY and a live response carries it. The old
    // comment asserted the opposite of the deployed behaviour, which is worse
    // than no comment because the next reader believes it.
    expect(MIDDLEWARE).not.toMatch(/X-Frame-Options is intentionally omitted/)
  })

  it('still owns the CSP, which cannot be static', () => {
    // A per-request nonce is the whole reason the CSP is not in the config.
    expect(MIDDLEWARE_CODE).toMatch(/Content-Security-Policy/)
  })
})

// ─── The CSP that actually ships ────────────────────────────────────────────

describe('the content security policy', () => {
  it.each([
    "default-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "frame-ancestors 'self'",
    "form-action 'self'",
  ])('still contains %s', (directive) => {
    expect(MIDDLEWARE).toContain(directive)
  })

  it('is built per request rather than pinned to a literal here', () => {
    // The old test embedded a full CSP string and asserted against its own
    // copy. That copy was already months stale. Assert the SHAPE and the
    // load-bearing directives, and let the builder own the host allowlist -
    // a list that changes legitimately whenever a vendor is added.
    expect(MIDDLEWARE_CODE).toMatch(/function buildCsp/)
  })
})

// ─── The dead module SEC-10 removed ─────────────────────────────────────────

describe('the retired security module', () => {
  it('is gone, along with its public fallback salt', () => {
    // src/lib/security.ts had no non-test caller. Its hashIP() fell back to the
    // literal 'the-english-hub-ip-salt' in production behind a console.warn -
    // a known salt makes a hashed IP reversible across the whole IPv4 space.
    // Latent, because nothing called it, but it was one import away from real.
    let exists = true
    try {
      readFileSync(join(ROOT, 'src/lib/security.ts'), 'utf8')
    } catch {
      exists = false
    }
    expect(exists).toBe(false)
  })

  it('left no importers behind', () => {
    // The real CSRF control is Origin attestation in lib/security/csrf-origin.
    const middlewareImports = MIDDLEWARE_CODE.match(/from '@\/lib\/security'/g)
    expect(middlewareImports).toBeNull()
  })
})

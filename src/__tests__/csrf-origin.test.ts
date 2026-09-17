import { describe, it, expect } from 'vitest'
import {
  evaluateCsrfAttestation,
  isCsrfExempt,
  type CsrfRequestFacts,
} from '@/lib/security/csrf-origin'

/**
 * The same-origin attestation on API mutations.
 *
 * The audit of 17 September 2026 observed, against production:
 *   POST /api/ielts/diagnostic-assess with no headers        -> 403
 *   the same POST with only `Sec-Fetch-Site: none` added     -> reached the route
 *
 * One forged header defeated the gate. These tests pin the corrected rule:
 * `Origin` is mandatory and must be allow-listed, and `Sec-Fetch-Site` is
 * never a substitute for it.
 */

const ALLOWED = new Set(['https://theenglishhub.app', 'https://www.theenglishhub.app'])

function facts(overrides: Partial<CsrfRequestFacts> = {}): CsrfRequestFacts {
  return {
    pathname: '/api/ielts/diagnostic-assess',
    method: 'POST',
    origin: null,
    secFetchSite: null,
    ...overrides,
  }
}

describe('CSRF attestation: the forged-header bypass is closed', () => {
  it('refuses a mutation whose only attestation is Sec-Fetch-Site: none', () => {
    const decision = evaluateCsrfAttestation(facts({ secFetchSite: 'none' }), ALLOWED)
    expect(decision.allowed).toBe(false)
    if (!decision.allowed) {
      expect(decision.status).toBe(403)
      expect(decision.reason).toBe('origin-missing')
    }
  })

  it('refuses a mutation whose only attestation is Sec-Fetch-Site: same-origin', () => {
    const decision = evaluateCsrfAttestation(facts({ secFetchSite: 'same-origin' }), ALLOWED)
    expect(decision.allowed).toBe(false)
    if (!decision.allowed) expect(decision.reason).toBe('origin-missing')
  })

  it('refuses a mutation with no Origin and no Sec-Fetch-Site at all', () => {
    expect(evaluateCsrfAttestation(facts(), ALLOWED).allowed).toBe(false)
  })

  it('refuses a cross-site initiator even when the Origin is allow-listed', () => {
    const decision = evaluateCsrfAttestation(
      facts({ origin: 'https://theenglishhub.app', secFetchSite: 'cross-site' }),
      ALLOWED,
    )
    expect(decision.allowed).toBe(false)
    if (!decision.allowed) expect(decision.reason).toBe('cross-site-initiator')
  })

  it('refuses an origin that is not on the allow-list', () => {
    const decision = evaluateCsrfAttestation(facts({ origin: 'https://evil.example' }), ALLOWED)
    expect(decision.allowed).toBe(false)
    if (!decision.allowed) expect(decision.reason).toBe('origin-not-allowed')
  })

  it('refuses a sibling subdomain, which is how a same-site attacker presents', () => {
    const decision = evaluateCsrfAttestation(
      facts({ origin: 'https://evil.theenglishhub.app', secFetchSite: 'same-site' }),
      ALLOWED,
    )
    expect(decision.allowed).toBe(false)
    if (!decision.allowed) expect(decision.reason).toBe('origin-not-allowed')
  })

  it('refuses the opaque `null` origin a sandboxed iframe sends', () => {
    expect(evaluateCsrfAttestation(facts({ origin: 'null' }), ALLOWED).allowed).toBe(false)
  })

  it('applies to every state-changing method, not just POST', () => {
    for (const method of ['POST', 'PUT', 'PATCH', 'DELETE']) {
      expect(
        evaluateCsrfAttestation(facts({ method, secFetchSite: 'none' }), ALLOWED).allowed,
      ).toBe(false)
    }
  })
})

describe('CSRF attestation: what must still work', () => {
  it('allows the web app: an allow-listed Origin from a same-origin fetch', () => {
    const decision = evaluateCsrfAttestation(
      facts({ origin: 'https://theenglishhub.app', secFetchSite: 'same-origin' }),
      ALLOWED,
    )
    expect(decision.allowed).toBe(true)
  })

  it('allows the www host, which is also ours', () => {
    expect(
      evaluateCsrfAttestation(facts({ origin: 'https://www.theenglishhub.app' }), ALLOWED).allowed,
    ).toBe(true)
  })

  it('does not gate GET or HEAD', () => {
    expect(evaluateCsrfAttestation(facts({ method: 'GET' }), ALLOWED).allowed).toBe(true)
    expect(evaluateCsrfAttestation(facts({ method: 'HEAD' }), ALLOWED).allowed).toBe(true)
  })

  it('does not gate non-API paths', () => {
    expect(
      evaluateCsrfAttestation(facts({ pathname: '/dashboard', method: 'POST' }), ALLOWED).allowed,
    ).toBe(true)
  })

  it('exempts the webhook and cron paths, which carry no Origin and authenticate themselves', () => {
    for (const pathname of [
      '/api/stripe/webhook',
      '/api/revenuecat/webhook',
      '/api/cron/data-retention',
      // Server-to-server, CRON_SECRET-gated, never reachable with a session
      // cookie: the cron calls it from the server with no Origin.
      '/api/push/send',
    ]) {
      expect(isCsrfExempt(pathname)).toBe(true)
      expect(evaluateCsrfAttestation(facts({ pathname }), ALLOWED).allowed).toBe(true)
    }
  })

  it('exempts nothing else, including paths that merely look like the exempt ones', () => {
    expect(isCsrfExempt('/api/stripe/checkout')).toBe(false)
    expect(isCsrfExempt('/api/cronjobs')).toBe(false)
  })
})

describe('CSRF attestation: the honest limit of this control', () => {
  /**
   * Stated as a test so nobody re-reads this gate as an abuse or
   * authentication control. A scripted caller CAN still set an allow-listed
   * Origin and pass. That is inherent to any header-based check, and it is
   * why the cap on the anonymous AI endpoint is the durable Postgres
   * allowance in src/lib/usage/free-allowance.ts, not this file.
   */
  it('still admits a non-browser caller that asserts an allow-listed origin', () => {
    const scriptedCaller = facts({ origin: 'https://theenglishhub.app' })
    expect(evaluateCsrfAttestation(scriptedCaller, ALLOWED).allowed).toBe(true)
  })
})

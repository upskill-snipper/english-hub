/**
 * Same-origin attestation for API mutations (the CSRF gate).
 *
 * Extracted from `src/middleware.ts` on 2026-09-17 so the decision is a pure
 * function that can be tested directly, and so the reasoning below sits next
 * to the code it governs rather than inside a 700-line middleware.
 *
 * ===========================================================================
 * WHAT THIS CONTROL ACTUALLY PROTECTS
 * ===========================================================================
 * Every authenticated route in this product authenticates from the Supabase
 * session cookie (`createServerSupabaseClient()` reads cookies; no route
 * outside `/api/cron/**` and `/api/health/ai` reads an `Authorization`
 * header). A cookie is AMBIENT authority: the browser attaches it to a
 * request that another website caused, without the learner doing anything.
 * That, and only that, is what this gate defends - a page on attacker.example
 * causing the signed-in learner's browser to POST to our API with their
 * cookies attached.
 *
 * The property it leans on is narrow but real: page JavaScript cannot make a
 * browser lie about `Origin`, and a `<form>` posted cross-site cannot suppress
 * it. So for a request that carries a victim's cookies, an allow-listed
 * `Origin` genuinely attests that our own page initiated it.
 *
 * ===========================================================================
 * WHY THE PREVIOUS CHECK WAS INSUFFICIENT (audit finding, 2026-09-17)
 * ===========================================================================
 * The previous rule was: if `Origin` is present it must be allow-listed;
 * if `Origin` is ABSENT, accept when `Sec-Fetch-Site` is `same-origin` or
 * `none`. Two things were wrong with it.
 *
 * 1. It admitted requests that carried no attestation at all.
 *    `Sec-Fetch-Site: none` means "no initiator" - a typed URL, a bookmark, a
 *    browser-restored session. No `fetch()`, XHR or form submission from our
 *    own pages ever produces it, because those are same-origin and every
 *    browser sends `Origin` on a non-GET request anyway. So the `none` branch
 *    could only ever admit a caller that was NOT this application. Production
 *    behaved exactly as that reads: `POST /api/ielts/diagnostic-assess` with
 *    no headers was refused, and the same request with the single header
 *    `Sec-Fetch-Site: none` reached the route handler. The gate was, in
 *    practice, "set either one of two header values".
 *
 * 2. It was being relied on for a job no request header can do.
 *    `/api/ielts/diagnostic-assess` is the signed-out lead magnet: it spends
 *    money at Anthropic on every call. While the rate limiter was
 *    unenforced in production, this gate was the only thing in front of it,
 *    and it was described as though it stopped scripted callers. It cannot.
 *    Outside a browser every header is chosen by the caller, `Origin`
 *    included, so a curl loop passes any header-based check by definition.
 *    The unforgeability above holds only against a page running on another
 *    origin; it says nothing about a script that has no cookies to abuse in
 *    the first place.
 *
 * ===========================================================================
 * WHAT CHANGED
 * ===========================================================================
 *   - `Origin` is now MANDATORY on every gated mutation and must be in the
 *     allow-list. A missing `Origin` is refused whatever `Sec-Fetch-Site`
 *     says, so no single forged header opens the gate any more: forging
 *     `Sec-Fetch-Site` now achieves nothing, and the caller must instead
 *     assert an origin - which is precisely the assertion a cross-site page
 *     cannot make.
 *   - An explicit `Sec-Fetch-Site: cross-site` is refused even when `Origin`
 *     is allow-listed. That is defence in depth against a bad allow-list
 *     entry (for example `NEXT_PUBLIC_SITE_URL` pointed somewhere it should
 *     not be); `same-site` needs no separate rule because a sibling
 *     subdomain sends its own `Origin`, which the allow-list rejects.
 *
 * Compatibility: every browser sends `Origin` on POST/PUT/PATCH/DELETE from
 * `fetch`, XHR, `sendBeacon` and form submissions, so no working web client
 * loses anything. Two NON-browser callers in this repo send no `Origin` and
 * are therefore refused - they were already refused before this change, and
 * are deliberately NOT re-admitted here, because a carve-out for
 * `Authorization: Bearer` would re-open the "one forged header" hole it is
 * the point of this change to close:
 *   - `mobile/lib/sync.ts` POSTs `/api/progress/sync` with a Bearer token
 *     that no route reads (that route authenticates from cookies), so the
 *     call cannot succeed for a second, independent reason;
 *   - `src/app/api/cron/weekly-parent-reports/route.ts` POSTs to its own
 *     `/api/push/send` server-side.
 * Both are recorded in the audit follow-up rather than fixed by loosening
 * this gate. If a genuine token-authenticated client is ever added, give it
 * its own authenticated path here - not a bare header exemption.
 *
 * ===========================================================================
 * WHAT THIS CONTROL STILL DOES NOT DO - DO NOT CLAIM OTHERWISE
 * ===========================================================================
 * It does not authenticate anyone, and it does not limit abuse. A scripted
 * caller sending `Origin: https://theenglishhub.app` still reaches the route,
 * and that is inherent to any header-based check. The cap on the anonymous
 * AI endpoint is the durable Postgres allowance in
 * `src/lib/usage/free-allowance.ts`, enforced before the model call. Any
 * compliance statement about abuse protection must cite that, never this
 * file.
 */

/** Origins whose mutations we accept. Anything else is refused. */
export const ALLOWED_ORIGINS = new Set(
  [
    'https://theenglishhub.app',
    'https://www.theenglishhub.app',
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : undefined,
  ].filter((o): o is string => typeof o === 'string' && o.length > 0),
)

/**
 * Paths exempt from the gate.
 *
 * Stripe and RevenueCat webhooks come from third-party servers and carry no
 * `Origin`; each authenticates itself (Stripe-Signature, RevenueCat bearer
 * secret). Vercel cron requests originate inside Vercel and authenticate with
 * `Authorization: Bearer $CRON_SECRET`. `/api/push/send` is the same
 * category: it is server-to-server only, it is called by the weekly parent
 * report cron with the cron secret, and it refuses anything else (401). None
 * of these can be driven by a victim's browser, because the secret they
 * require is not in the browser - which is the whole test for whether CSRF
 * applies. Everything a session cookie can reach stays gated.
 */
const CSRF_EXEMPT_PREFIXES = [
  '/api/stripe/webhook',
  '/api/revenuecat/webhook',
  '/api/cron/',
  '/api/push/send',
] as const

/** Methods that cannot change state and so are not gated. */
const SAFE_METHODS = new Set(['GET', 'HEAD'])

export type CsrfDecision =
  | { allowed: true }
  | { allowed: false; status: 403; error: string; reason: CsrfRefusalReason }

export type CsrfRefusalReason =
  /** No `Origin` header on a gated mutation. */
  | 'origin-missing'
  /** `Origin` present but not in the allow-list. */
  | 'origin-not-allowed'
  /** The browser told us the request came from another site. */
  | 'cross-site-initiator'

export interface CsrfRequestFacts {
  pathname: string
  method: string
  origin: string | null
  secFetchSite: string | null
}

export function isCsrfExempt(pathname: string): boolean {
  return CSRF_EXEMPT_PREFIXES.some((prefix) => pathname.startsWith(prefix))
}

/**
 * Decide whether a request may pass the same-origin attestation.
 *
 * Pure and synchronous: it reads only the four facts passed in, so the
 * middleware's behaviour is testable without constructing a request.
 */
export function evaluateCsrfAttestation(
  facts: CsrfRequestFacts,
  allowedOrigins: ReadonlySet<string> = ALLOWED_ORIGINS,
): CsrfDecision {
  const { pathname, method, origin, secFetchSite } = facts

  if (!pathname.startsWith('/api/')) return { allowed: true }
  if (SAFE_METHODS.has(method.toUpperCase())) return { allowed: true }
  if (isCsrfExempt(pathname)) return { allowed: true }

  // The browser itself says the initiator was another site. Refused even when
  // `Origin` is allow-listed, so a mistaken allow-list entry cannot admit a
  // genuine cross-site request.
  if (secFetchSite === 'cross-site') {
    return {
      allowed: false,
      status: 403,
      error: 'Forbidden: cross-site request',
      reason: 'cross-site-initiator',
    }
  }

  // `Origin` is mandatory. A browser always sends it on a state-changing
  // request; its absence means the caller is not the web app, and we do not
  // accept `Sec-Fetch-Site` as a substitute (see the header comment - that
  // substitution was the bypass).
  if (!origin) {
    return {
      allowed: false,
      status: 403,
      error: 'Forbidden: missing same-origin attestation',
      reason: 'origin-missing',
    }
  }

  if (!allowedOrigins.has(origin)) {
    return {
      allowed: false,
      status: 403,
      error: 'Forbidden: invalid origin',
      reason: 'origin-not-allowed',
    }
  }

  return { allowed: true }
}

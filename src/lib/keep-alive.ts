// ─── Keep the function alive for work the response does not wait for ────────
//
// FIXED 10 October 2026. Server code here often starts something and does not
// wait for it - the emails sent when a parent links to a child, the
// confirmation of an account deletion, a new pupil's login details, a
// Trustpilot record, a Sentry report - with `void promise` or a bare
// `promise.catch(...)`. On Vercel that is not safe. Once a route returns, the
// platform may freeze the function with the work still pending: it resumes
// only when that instance serves another request, or never. The AI audit log
// showed it in production, with a record written 193 s after its run, at the
// moment the next request arrived, and runs with no record at all (see
// "Outliving the response" in src/lib/ai-audit-log.ts).
//
// keepAlive(work) hands the promise to Next's `after()`, which on Vercel passes
// it to `waitUntil`: the function lives until the work settles, and the
// response still goes out at once. Pass the PROMISE, not a function that makes
// it, so the work starts exactly when it always did; only the function's
// lifetime changes.
//
// It never throws. Outside a request (a test, a script) `after()` throws E468
// and the work simply runs on, as before. Any other refusal is printed under
// the caller's label, because work that may be frozen must not pass silently.
// src/__tests__/work-a-route-starts-outlives-its-response.test.ts holds this,
// and fails if server code goes back to `void promise` or a bare chain.
// ────────────────────────────────────────────────────────────────────────────

import { after } from 'next/server'

/** Next's code for "`after` was called outside a request scope". */
const OUTSIDE_A_REQUEST = 'E468'

/**
 * Keep the function alive until `work` settles, without delaying the response.
 * `label` names the work in the one line printed if the platform will not wait.
 */
export function keepAlive(work: Promise<unknown>, label: string): void {
  try {
    after(work)
  } catch (err) {
    const code = (err as { __NEXT_ERROR_CODE?: unknown } | null)?.__NEXT_ERROR_CODE
    if (code === OUTSIDE_A_REQUEST) return
    const reason = err instanceof Error ? err.message : String(err)
    console.error(`${label} may not outlive the response: ${reason.slice(0, 300)}`)
  }
}

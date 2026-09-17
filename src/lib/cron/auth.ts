/**
 * Cron authentication - one implementation, used by every scheduled route.
 *
 * Why this exists (audit, 17 September 2026):
 *
 *   1. Vercel Cron calls a scheduled path with `GET` and
 *      `Authorization: Bearer $CRON_SECRET`. Two routes
 *      (`trustpilot-followup-7d`, `trustpilot-retention-90d`) exported only
 *      `POST` and read only `x-cron-secret`, so every scheduled run since
 *      19 April 2026 was answered `405` and nothing was sent. Nobody was
 *      told, because a 405 never reaches the observability wrapper - the
 *      handler it wraps is never entered.
 *
 *   2. Three routes called `crypto.timingSafeEqual` without first comparing
 *      lengths. `timingSafeEqual` THROWS when its two buffers differ in
 *      length, so a wrong-length secret produced an unhandled 500 rather
 *      than a 401 - a worse signal to a prober than the honest refusal, and
 *      noise in Sentry that looks like a server fault.
 *
 * The accepted forms are `Authorization: Bearer <secret>` (what Vercel Cron
 * sends) and `x-cron-secret: <secret>` (what the older hand-run scripts and
 * the existing tests send). Both compare in constant time after a length
 * check, which leaks only the length - already public in the sense that it
 * is fixed per deployment.
 */

import { timingSafeEqual } from 'crypto'
import { NextResponse } from 'next/server'

export type CronAuthResult =
  | { ok: true }
  | { ok: false; response: NextResponse; reason: 'not-configured' | 'unauthorised' }

/** Constant-time string compare that never throws on a length mismatch. */
export function secretsMatch(provided: string, expected: string): boolean {
  const a = Buffer.from(provided)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

/** Pull the presented secret out of either accepted header. */
export function readPresentedSecret(headers: Headers): string | null {
  const auth = headers.get('authorization')
  if (auth && auth.startsWith('Bearer ')) {
    const token = auth.slice('Bearer '.length)
    if (token.length > 0) return token
  }
  const legacy = headers.get('x-cron-secret')
  if (legacy && legacy.length > 0) return legacy
  return null
}

/**
 * Authorise a scheduled request.
 *
 * Returns `{ ok: true }` or a ready-made refusal. `500` when `CRON_SECRET`
 * is unset (a deployment fault, and the route must not run unauthenticated),
 * `401` otherwise.
 */
export function authoriseCronRequest(
  request: { headers: Headers },
  routeName: string,
): CronAuthResult {
  const expected = process.env.CRON_SECRET
  if (!expected) {
    console.error(`[cron/${routeName}] CRON_SECRET is not set; refusing to run.`)
    return {
      ok: false,
      reason: 'not-configured',
      response: NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 }),
    }
  }

  const provided = readPresentedSecret(request.headers)
  if (!provided || !secretsMatch(provided, expected)) {
    return {
      ok: false,
      reason: 'unauthorised',
      response: NextResponse.json({ error: 'Unauthorised' }, { status: 401 }),
    }
  }

  return { ok: true }
}

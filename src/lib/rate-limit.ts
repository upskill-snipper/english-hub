/**
 * Rate limiting for API routes.
 *
 * ===========================================================================
 * PRODUCTION STATUS, 17 SEPTEMBER 2026: THIS CONTROL IS NOT ENFORCED
 * ===========================================================================
 * The intended backend is Upstash Redis, which is shared by every serverless
 * instance and is therefore the only backend that can enforce a global limit.
 * `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are NOT set in the
 * production environment, so every call below is served by the process-local
 * Map in this file.
 *
 * On Vercel each concurrent lambda instance has its own Map, instances are
 * created and discarded per traffic, and a cold start starts the count at
 * zero. A caller who opens parallel connections is spread across instances
 * and is not counted by any of them. The effective global limit today is
 * therefore "the configured limit, multiplied by however many instances
 * happen to be warm, reset whenever they recycle", which is not a limit.
 *
 * Closing the gap is an environment change in the Vercel dashboard, not a
 * code change. Until it is made this module:
 *   1. refuses to be quiet about it (loud banner at module load, structured
 *      Sentry error, re-announced every 15 minutes while degraded traffic
 *      continues),
 *   2. reports its real state through `getRateLimitHealth()` so an operator
 *      surface can show it rather than relying on a log line nobody reads,
 *   3. tells each caller the truth per decision via `enforced` and
 *      `degradedReason` on the returned result,
 *   4. supports `RATE_LIMIT_REQUIRE_REDIS=true`, which makes a deployment
 *      without Redis fail at startup instead of silently pretending.
 *
 * ---------------------------------------------------------------------------
 * AUDIT: WHAT `rateLimit()` ACTUALLY PROTECTS TODAY
 * ---------------------------------------------------------------------------
 * 208 awaited calls across 165 files (164 API route handlers plus
 * `src/lib/parental-consent.ts`). Not one of them is enforced across
 * instances today. The honest position per group, separating the protection
 * that is real from the protection that is assumed:
 *
 * | Group (call sites)                     | Real protection today            | Assumed but absent |
 * |----------------------------------------|----------------------------------|--------------------|
 * | AI marking and feedback: /api/mark,    | Premium subscription gate, plus  | The "10 essays per |
 * | /api/mark/stream, /api/essay/feedback, | the database-backed trial and    | day" cap. The AI   |
 * | /api/essay-feedback, /api/cefr-assess, | free allowance meters in         | spend ceiling for  |
 * | /api/ielts/*, /api/marking/*,          | `src/lib/usage/**` (Postgres, so | a signed-in paying |
 * | /api/toolkit/*                         | shared and durable). Those hold. | account.           |
 * | Guardian consent email send            | Durable per-row cooldown and     | The three Upstash  |
 * | (`parental-consent.ts`, 3 calls)       | lifetime send cap in Postgres    | throttles named in |
 * |                                        | (`last_sent_at`, `send_count`).  | that file's doc    |
 * |                                        | That backstop is the control.    | comment.           |
 * | Admin surface (32 calls under          | Admin authentication and         | Burst protection   |
 * | /api/admin/**)                         | authorisation on each route.     | behind that auth.  |
 * | School surface (73 calls under         | Session auth plus school         | Per-IP abuse caps  |
 * | /api/school/**)                        | membership and role checks.      | on bulk endpoints. |
 * | /api/auth/resend-verification          | NONE in this codebase. The only  | 3 per IP per hour, |
 * |                                        | remaining brake is whatever the  | 5 per email per    |
 * |                                        | email provider applies at its    | day. Neither is    |
 * |                                        | own edge, which is not evidenced | enforced. This is  |
 * |                                        | here and must not be claimed.    | an email relay.    |
 * | Public unauthenticated writes:         | Input validation and schema      | Every flood and    |
 * | /api/contact, /api/school-inquiry      | constraints only. The first two  | spam cap claimed   |
 * | (both send email), /api/waitlist,      | send outbound email on an        | for these routes.  |
 * | /api/creator-apply, /api/teacher-signup| unauthenticated request.         |                    |
 * | /api/affiliate/track-click,            |                                  |                    |
 * | /api/affiliate/track-conversion,       |                                  |                    |
 * | /api/promo/validate, /api/board,       |                                  |                    |
 * | /api/auth/validate-age, /api/breach    |                                  |                    |
 * | Payments: /api/stripe/checkout,        | Stripe's own abuse controls at   | Our per-IP caps.   |
 * | /api/stripe/portal, /api/stripe/cancel | its API, plus session auth.      |                    |
 * | Everything else (progress, quiz,       | Session authentication.          | Burst caps.        |
 * | review, submissions, profile, dsar,    |                                  |                    |
 * | consent, marker, affiliate, mobile)    |                                  |                    |
 *
 * Two consequences worth stating plainly:
 *   - A 429 returned by this module today means one caller reused one warm
 *     instance. Its absence means nothing at all.
 *   - `src/lib/usage/**` is database backed and is unaffected by any of this.
 *     It is the only quantitative cap on AI spend that currently holds.
 *
 * Compliance statements about this control live in
 * `business-docs/compliance/controls/rate-limiting-control-status.md`.
 */

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export type RateLimitBackend = 'redis' | 'memory'

export type RateLimitDegradedReason =
  /** UPSTASH_REDIS_REST_URL / _TOKEN are not set in this environment. */
  | 'redis-not-configured'
  /** Redis is configured but the call to it failed; memory served the answer. */
  | 'redis-error'

export interface RateLimitOptions {
  /** Maximum requests allowed in the window */
  limit: number
  /** Window duration in seconds */
  windowSeconds: number
}

export interface RateLimitResult {
  success: boolean
  remaining: number
  resetAt: number
  /**
   * Which store actually decided this request. Optional so that existing
   * test doubles returning `{ success, remaining, resetAt }` stay valid.
   */
  backend?: RateLimitBackend
  /**
   * `true` only when the decision holds across every serverless instance.
   * `false` means the decision was made from process-local memory and is
   * not a limit in any meaningful sense. Callers that need a real cap must
   * carry their own durable counter, as `src/lib/usage/**` does.
   */
  enforced?: boolean
  /** Why the decision was not enforced. Absent when `enforced` is true. */
  degradedReason?: RateLimitDegradedReason
}

export interface RateLimitHealth {
  /** Are both Upstash environment variables present? */
  configured: boolean
  /** Which store is serving decisions right now. */
  backend: RateLimitBackend
  /** 'cross-instance' is the only value that means the control works. */
  enforcement: 'cross-instance' | 'per-instance-only'
  status: 'ok' | 'degraded'
  degradedReason: RateLimitDegradedReason | null
  /** ISO timestamp of the first degraded decision in this process. */
  degradedSince: string | null
  /** Decisions this process has served from memory. */
  degradedDecisions: number
  /** Keys currently held in the process-local Map. */
  memoryKeys: number
  /**
   * Counters discarded because the in-memory Map hit its size cap. Any
   * non-zero value means some callers had their count reset by pressure
   * from other keys.
   */
  memoryEvictions: number
  lastRedisError: { at: string; message: string } | null
  /** Plain-English instruction for whoever reads this. Null when healthy. */
  remediation: string | null
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const REMEDIATION =
  'Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in the Vercel ' +
  'production environment (Upstash console > database > REST API), then ' +
  'redeploy. Until that is done, no API rate limit is enforced and no ' +
  'document may claim one.'

/** Re-announce a continuing degradation at most this often. */
const ANNOUNCE_INTERVAL_MS = 15 * 60 * 1000

/** Hard ceiling on the fallback Map, so it cannot exhaust instance memory. */
const MAX_MEMORY_KEYS = 20_000

const CLEANUP_INTERVAL = 60_000

function truthy(value: string | undefined): boolean {
  if (!value) return false
  return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase())
}

function redisConfigured(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

// ---------------------------------------------------------------------------
// Degradation state and announcements
// ---------------------------------------------------------------------------

interface DegradationState {
  reason: RateLimitDegradedReason | null
  since: number | null
  decisions: number
  lastAnnouncedAt: number | null
  lastRedisError: { at: number; message: string } | null
  evictions: number
}

const degradation: DegradationState = {
  reason: null,
  since: null,
  decisions: 0,
  lastAnnouncedAt: null,
  lastRedisError: null,
  evictions: 0,
}

function banner(reason: RateLimitDegradedReason, decisions: number): string {
  const cause =
    reason === 'redis-not-configured'
      ? 'UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN are not set.'
      : 'The Redis call failed, so the process-local Map answered instead.'
  return [
    '',
    '!!! ================================================================= !!!',
    '!!! RATE LIMITING IS NOT ENFORCED IN THIS ENVIRONMENT                 !!!',
    '!!! ================================================================= !!!',
    `!!! Cause: ${cause}`,
    '!!! Effect: limits are counted per serverless instance, so a caller',
    '!!!         spread across instances is not limited at all. Treat every',
    '!!!         API rate limit as absent until this is fixed.',
    `!!! Decisions served without enforcement in this process: ${decisions}`,
    `!!! Fix: ${REMEDIATION}`,
    '!!! ================================================================= !!!',
    '',
  ].join('\n')
}

function reportToSentry(reason: RateLimitDegradedReason): void {
  // Sentry is the operator-facing surface that is already wired up for this
  // project, so the degradation is raised there as an error rather than left
  // in a log stream. Imported dynamically and failure-tolerant: a missing or
  // uninitialised Sentry must never break a request path.
  try {
    void import('@sentry/nextjs')
      .then((Sentry) => {
        Sentry.captureMessage('Rate limiting is not enforced (Redis unavailable)', {
          level: 'error',
          tags: {
            subsystem: 'rate-limit',
            rate_limit_backend: 'memory',
            rate_limit_reason: reason,
          },
          extra: {
            remediation: REMEDIATION,
            degradedDecisions: degradation.decisions,
            degradedSince: degradation.since ? new Date(degradation.since).toISOString() : null,
          },
        })
      })
      .catch(() => {
        /* Sentry unavailable; the console banner still stands. */
      })
  } catch {
    /* Dynamic import unsupported in this runtime; the banner still stands. */
  }
}

/**
 * Record that the limiter is running degraded and make noise about it.
 * Announces immediately the first time, then at most every 15 minutes while
 * degraded traffic continues, so it stays visible without flooding logs.
 */
function markDegraded(reason: RateLimitDegradedReason, countDecision: boolean): void {
  const now = Date.now()
  const changed = degradation.reason !== reason
  if (degradation.since === null || changed) {
    degradation.since = now
    degradation.reason = reason
  }
  if (countDecision) degradation.decisions++

  const due =
    degradation.lastAnnouncedAt === null ||
    changed ||
    now - degradation.lastAnnouncedAt >= ANNOUNCE_INTERVAL_MS
  if (!due) return

  degradation.lastAnnouncedAt = now
  // Outside production the memory fallback is the correct answer (one
  // process, one Map), so it gets a one-line note rather than the banner.
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      '[rate-limit] Using the in-memory fallback (no Redis configured). Correct locally, not a control in production.',
    )
    return
  }
  console.error(banner(reason, degradation.decisions))
  reportToSentry(reason)
}

/**
 * The live, honest state of this control. Intended for an operator surface
 * (health endpoint, admin page, uptime check) so the gap is visible without
 * reading logs. Safe to expose: it contains no secrets and no user data.
 */
export function getRateLimitHealth(): RateLimitHealth {
  const configured = redisConfigured()
  const degraded = degradation.reason !== null || !configured
  const reason: RateLimitDegradedReason | null = degraded
    ? (degradation.reason ?? 'redis-not-configured')
    : null
  return {
    configured,
    backend: degraded ? 'memory' : 'redis',
    enforcement: degraded ? 'per-instance-only' : 'cross-instance',
    status: degraded ? 'degraded' : 'ok',
    degradedReason: reason,
    degradedSince: degradation.since ? new Date(degradation.since).toISOString() : null,
    degradedDecisions: degradation.decisions,
    memoryKeys: memStore.size,
    memoryEvictions: degradation.evictions,
    lastRedisError: degradation.lastRedisError
      ? {
          at: new Date(degradation.lastRedisError.at).toISOString(),
          message: degradation.lastRedisError.message,
        }
      : null,
    remediation: degraded ? REMEDIATION : null,
  }
}

/** One line an operator can read in a log, alert or status page. */
export function describeRateLimitHealth(): string {
  const health = getRateLimitHealth()
  if (health.status === 'ok') {
    return 'Rate limiting: enforced across instances via Upstash Redis.'
  }
  return (
    'Rate limiting: NOT ENFORCED (' +
    health.degradedReason +
    '). Limits are counted per serverless instance only. ' +
    REMEDIATION
  )
}

// ---------------------------------------------------------------------------
// Redis client (lazy singleton)
// ---------------------------------------------------------------------------

let redis: Redis | null = null

function getRedis(): Redis | null {
  if (redis) return redis
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null
  redis = new Redis({ url, token })
  return redis
}

// ---------------------------------------------------------------------------
// In-memory fallback
//
// Correct for local development, where there is one process. Not a control in
// production, where there are many. Bounded so that a key-spraying caller
// cannot exhaust instance memory. Note that the bound is itself a bypass: an
// attacker who sprays enough distinct keys evicts their own counter. That is
// acceptable only because the fallback is not relied on as a security control,
// and it is one more reason the Redis backend must be configured.
// ---------------------------------------------------------------------------

interface RateLimitEntry {
  count: number
  resetAt: number
}

const memStore = new Map<string, RateLimitEntry>()
let lastCleanup = Date.now()

function memCleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  lastCleanup = now
  memStore.forEach((entry, key) => {
    if (entry.resetAt < now) memStore.delete(key)
  })
}

function memEvictIfFull() {
  if (memStore.size < MAX_MEMORY_KEYS) return
  // Drop expired entries first; only evict live ones if that is not enough.
  const now = Date.now()
  memStore.forEach((entry, key) => {
    if (entry.resetAt < now) memStore.delete(key)
  })
  while (memStore.size >= MAX_MEMORY_KEYS) {
    const oldest = memStore.keys().next()
    if (oldest.done) break
    memStore.delete(oldest.value)
    degradation.evictions++
  }
}

function memRateLimit(key: string, options: RateLimitOptions): RateLimitEntry & { hit: number } {
  memCleanup()
  const now = Date.now()
  const windowMs = options.windowSeconds * 1000
  const existing = memStore.get(key)

  if (!existing || existing.resetAt < now) {
    memEvictIfFull()
    const entry: RateLimitEntry = { count: 1, resetAt: now + windowMs }
    memStore.set(key, entry)
    return { ...entry, hit: 1 }
  }

  existing.count++
  return { ...existing, hit: existing.count }
}

function memDecision(
  key: string,
  options: RateLimitOptions,
  reason: RateLimitDegradedReason,
): RateLimitResult {
  // Announce before answering, so that even a request that ends in an
  // unhandled error has already put the degradation on the record.
  markDegraded(reason, true)
  const entry = memRateLimit(key, options)
  const success = entry.hit <= options.limit
  return {
    success,
    remaining: success ? options.limit - entry.hit : 0,
    resetAt: entry.resetAt,
    backend: 'memory',
    enforced: false,
    degradedReason: reason,
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

// Cache of Upstash Ratelimit instances keyed by "limit:window"
const rlCache = new Map<string, Ratelimit>()

/**
 * Check the rate limit for a given key (typically an IP or a user id).
 *
 * Returns `enforced: true` only when Redis answered. When it returns
 * `enforced: false` the caller has NOT been rate limited in any way that
 * holds across instances, whatever `success` says. Anything that needs a real
 * cap needs a durable counter of its own.
 */
export async function rateLimit(key: string, options: RateLimitOptions): Promise<RateLimitResult> {
  const client = getRedis()

  if (!client) {
    return memDecision(key, options, 'redis-not-configured')
  }

  const cacheKey = `${options.limit}:${options.windowSeconds}`
  let limiter = rlCache.get(cacheKey)
  if (!limiter) {
    limiter = new Ratelimit({
      redis: client,
      limiter: Ratelimit.slidingWindow(options.limit, `${options.windowSeconds} s`),
      analytics: false,
      prefix: 'rl',
    })
    rlCache.set(cacheKey, limiter)
  }

  let result: Awaited<ReturnType<Ratelimit['limit']>>
  try {
    result = await limiter.limit(key)
  } catch (error) {
    // A Redis outage previously threw out of here and turned into a 500 on
    // whichever route was calling. Degrading to memory keeps the route
    // working, and the degradation is announced rather than swallowed.
    degradation.lastRedisError = {
      at: Date.now(),
      message: error instanceof Error ? error.message : String(error),
    }
    return memDecision(key, options, 'redis-error')
  }

  // A healthy Redis answer clears a previous degradation.
  if (degradation.reason === 'redis-error') {
    degradation.reason = null
    degradation.since = null
    degradation.lastAnnouncedAt = null
  }

  return {
    success: result.success,
    remaining: result.remaining,
    resetAt: result.reset,
    backend: 'redis',
    enforced: true,
  }
}

/**
 * Extract the client IP from request headers.
 * Prefer `x-real-ip` (set by Vercel / the reverse proxy, not spoofable)
 * over `x-forwarded-for` (can be spoofed by clients).
 */
export function getClientIp(headers: Headers): string {
  return (
    headers.get('x-real-ip') || headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  )
}

/** Test-only: clear the module state between cases. */
export function __resetRateLimitStateForTests(): void {
  memStore.clear()
  rlCache.clear()
  redis = null
  lastCleanup = Date.now()
  degradation.reason = null
  degradation.since = null
  degradation.decisions = 0
  degradation.lastAnnouncedAt = null
  degradation.lastRedisError = null
  degradation.evictions = 0
}

// ---------------------------------------------------------------------------
// Startup check
//
// Runs once when the module is first imported, so the gap is on the record
// before the first request rather than after it.
// ---------------------------------------------------------------------------

if (!redisConfigured()) {
  if (truthy(process.env.RATE_LIMIT_REQUIRE_REDIS)) {
    // Opt-in deploy gate. Off by default, so it can never take production
    // down by surprise. Set it once Redis is wired up, and any environment
    // that loses the credentials fails loudly at startup instead of serving
    // traffic with a control that does not work.
    throw new Error(
      'RATE_LIMIT_REQUIRE_REDIS is set but Upstash Redis is not configured. ' + REMEDIATION,
    )
  }
  if (process.env.NODE_ENV === 'production') {
    markDegraded('redis-not-configured', false)
  }
}

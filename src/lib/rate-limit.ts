/**
 * Rate limiting for API routes.
 *
 * ===========================================================================
 * STATUS, 18 SEPTEMBER 2026: ENFORCED WHEREVER THE DATABASE IS REACHABLE
 * ===========================================================================
 * Until today this module had exactly one shared backend, Upstash Redis, and
 * it fell back to a process-local `Map` when Redis was not configured. Redis
 * is not configured in production and setting it is a Vercel environment
 * change, so every one of the 208 call sites was served by that Map. On Vercel
 * each concurrent lambda instance has its own Map, instances are created and
 * discarded with traffic, and a cold start begins at zero. The effective limit
 * was "the configured limit, multiplied by however many instances happen to be
 * warm, reset whenever they recycle", which is not a limit.
 *
 * The fix is not to wait for the environment variable. The free-allowance
 * meter shipped on 17 September (`src/lib/usage/**`) solved the identical
 * problem with Postgres, which every instance already shares, using a single
 * atomic `ON CONFLICT` increment. The same approach is applied here, so the
 * order of preference is now:
 *
 *   1. Upstash Redis  - preferred. Purpose-built, no database load, sliding
 *                       window, sub-millisecond.
 *   2. Postgres       - the shared backend we already have. Enforced across
 *                       instances and across cold starts. Costs one row write
 *                       per limited request (see below).
 *   3. In-memory Map  - local development only. NOT a control. Announced
 *                       loudly, reported through `getRateLimitHealth()`, and
 *                       labelled `enforced: false` on every decision it makes.
 *
 * ---------------------------------------------------------------------------
 * WHY A FIXED WINDOW, AND WHAT IT COSTS
 * ---------------------------------------------------------------------------
 * WINDOW SHAPE. Upstash uses a weighted sliding window. Reproducing that in
 * Postgres means either one row per request (write volume proportional to
 * traffic, and a table that grows without bound between sweeps) or reading the
 * previous bucket as well as the current one (two statements per decision,
 * doubling the round trips). A rate limit is an abuse control with a window
 * measured in seconds or minutes, so the accuracy a sliding window buys is not
 * worth either cost. This is a FIXED window.
 *
 * The known weakness of a fixed window is the boundary: a caller who sends
 * `limit` requests at the end of one window and `limit` more at the start of
 * the next gets 2 x limit in quick succession. That is accepted deliberately.
 * The control exists to stop sustained abuse - floods, scraping, an email
 * endpoint used as a relay - and a caller who wants twice the limit once still
 * gets nothing sustained. It is stated in the control-status document rather
 * than glossed over.
 *
 * WRITE VOLUME. One `INSERT ... ON CONFLICT DO UPDATE` per limited request:
 * one round trip, one row. At present traffic (low hundreds of accounts) that
 * is negligible next to the auth and profile reads the same request already
 * makes. It scales linearly with request rate, which is why Redis stays the
 * preferred backend and why this path is skipped entirely when Redis is
 * configured.
 *
 * INDEX DESIGN. The table carries exactly TWO indexes and the hot path
 * maintains neither of them:
 *
 *   - PRIMARY KEY (bucket_key) is the `ON CONFLICT` target. One row per
 *     (key, limit, window) for its whole life, not one row per window: the
 *     window rolls over IN PLACE via the CASE in the DO UPDATE. So the table
 *     holds roughly "number of distinct active callers", not "callers x
 *     windows elapsed".
 *   - rate_limit_counter_window_end_idx supports the expiry sweep only.
 *
 * The common statement updates `count` and nothing else. `count` is in no
 * index, so Postgres can take the heap-only-tuple path and writes no index
 * entry at all. Index maintenance happens twice per caller per window - once
 * when the row is created, once when `window_end` moves at rollover - not once
 * per request. That is the whole reason the window rolls over in place instead
 * of inserting a fresh row for each window.
 *
 * ---------------------------------------------------------------------------
 * IT FAILS OPEN ON A DATABASE ERROR. THIS IS DELIBERATE.
 * ---------------------------------------------------------------------------
 * If the increment throws, the request is ALLOWED, labelled `enforced: false`
 * with `degradedReason: 'database-error'`, and the fault is announced.
 *
 * This is an ABUSE control, not an AUTHORISATION control, and the two must not
 * be confused. A limiter that refuses everyone when the database blips turns a
 * brief fault into a total outage for every learner on the site, to prevent an
 * attack that may not be happening. The blast radius of failing open is some
 * unmetered traffic during the blip.
 *
 * The things that must NOT fail open are elsewhere and are unaffected:
 *   - authentication, authorisation, subscription and consent gates, which run
 *     before this and refuse on error;
 *   - `consumeAllowance()` in `src/lib/usage/free-allowance.ts`, which fails
 *     CLOSED because it guards money. Note how the two compose: if Postgres is
 *     down, this limiter lets the request through and the allowance meter then
 *     throws, the route returns 503, and no model call is made. Spend stays
 *     capped without this module having to hold that line.
 *
 * ---------------------------------------------------------------------------
 * PRIVACY: NO RAW IP IS EVER WRITTEN
 * ---------------------------------------------------------------------------
 * Callers pass keys such as `contact:1.2.3.4`. Writing those to a table would
 * put raw IP addresses in the database, which is the one thing the free
 * allowance meter went to some trouble to avoid. `bucket_key` is therefore the
 * sha256 digest of `salt : limit : windowSeconds : key`, and the raw key never
 * leaves the request scope. The salt must be secret, because with a known salt
 * the whole IPv4 space can be hashed in minutes and the digest would be
 * reversible, so it would remain personal data under UK GDPR. If no secret is
 * available in production the database backend is declared unavailable rather
 * than used with a guessable salt - that fails towards the loud in-memory
 * state, not towards a quiet privacy breach.
 *
 * Rows are swept opportunistically an hour after their window ends, so nothing
 * here is retained beyond the life of the counter.
 *
 * Compliance statements about this control live in
 * `business-docs/compliance/controls/rate-limiting-control-status.md`.
 *
 * ---------------------------------------------------------------------------
 * WHAT `rateLimit()` PROTECTS
 * ---------------------------------------------------------------------------
 * 208 awaited calls across 165 files (164 API route handlers plus
 * `src/lib/parental-consent.ts`). With the database backend live, those limits
 * hold across instances for the first time. The routes that had NO other brake
 * at all, and therefore gain the most, are:
 *
 *   - `/api/auth/resend-verification` (3 per IP per hour, 5 per email per
 *     day). An email relay with nothing else in front of it.
 *   - Unauthenticated writes: `/api/contact` and `/api/school-inquiry` (both
 *     send outbound email), `/api/waitlist`, `/api/creator-apply`,
 *     `/api/teacher-signup`, `/api/auth/validate-age`, `/api/promo/validate`,
 *     `/api/board`, `/api/breach`, `/api/affiliate/track-click`,
 *     `/api/affiliate/track-conversion`.
 *
 * Everything else was, and remains, defended first by its own gate: the
 * Premium subscription check and the Postgres allowance meters on the AI
 * routes, admin and school authorisation on those surfaces, and the durable
 * per-row cooldown and lifetime send cap in `parental-consent.ts`. For those,
 * the rate limit was always defence in depth. It is now real defence in depth.
 *
 * TWO THINGS STILL TRUE AND WORTH STATING:
 *   - A decision carrying `enforced: false` has limited NOBODY, whatever
 *     `success` says. Read the field.
 *   - This module grants nothing. It is not consent, entitlement or auth, and
 *     it must never be read as any of them.
 */

import { createHash } from 'crypto'
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------

export type RateLimitBackend = 'redis' | 'postgres' | 'memory'

export type RateLimitDegradedReason =
  /** No shared backend at all: no Upstash credentials and no usable database. */
  | 'redis-not-configured'
  /** Redis is configured but the call to it failed; another backend answered. */
  | 'redis-error'
  /** The database increment threw. The request was ALLOWED (fail open). */
  | 'database-error'

/** Why the Postgres backend is or is not usable in this environment. */
export type RateLimitDatabaseStatus =
  | 'ready'
  /** No DATABASE_URL, so there is nothing to write to. */
  | 'not-configured'
  /** No secret salt, so keys could not be stored without becoming reversible. */
  | 'no-key-salt'
  /** Switched off explicitly with RATE_LIMIT_DB_BACKEND=off. */
  | 'disabled'

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
   * `true` only when the decision holds across every serverless instance -
   * that is, when Redis or Postgres answered. `false` means the decision came
   * from process-local memory, or the database failed and the request was let
   * through, and it is not a limit in any meaningful sense.
   */
  enforced?: boolean
  /** Why the decision was not enforced. Absent when `enforced` is true. */
  degradedReason?: RateLimitDegradedReason
}

export interface RateLimitHealth {
  /** Are both Upstash environment variables present? (the preferred backend) */
  configured: boolean
  /** Is the Postgres backend usable in this environment? */
  databaseBacked: boolean
  /** Why, if it is not. */
  databaseStatus: RateLimitDatabaseStatus
  /** Which store is serving decisions right now. */
  backend: RateLimitBackend
  /**
   * 'cross-instance' is the only value that means the control works, and it
   * is reported only once a decision has actually been enforced by a shared
   * backend in this process.
   *
   * 'unproven' is the dangerous middle: a shared backend is configured and
   * looks usable, but nothing has yet come back enforced from it. That is
   * exactly the state when the code has deployed and the migration creating
   * `rate_limit_counter` has not - `databaseStatus()` proves DATABASE_URL and
   * a salt, never that the table exists - so every decision fails open while
   * the configuration reads healthy. It must not be reported as enforced.
   */
  enforcement: 'cross-instance' | 'unproven' | 'per-instance-only'
  status: 'ok' | 'degraded'
  degradedReason: RateLimitDegradedReason | null
  /** ISO timestamp of the first degraded decision in this process. */
  degradedSince: string | null
  /** Decisions this process has served without enforcement. */
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
  lastDatabaseError: { at: string; message: string } | null
  /** Requests let through because the database increment threw. */
  failOpenDecisions: number
  /**
   * Decisions genuinely counted by a shared backend in this process. Zero is
   * what separates 'unproven' from 'cross-instance'; no document may claim an
   * enforced limit while this is zero.
   */
  enforcedDecisions: number
  /** Plain-English instruction for whoever reads this. Null when healthy. */
  remediation: string | null
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const REMEDIATION =
  'Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN in the Vercel ' +
  'production environment (Upstash console > database > REST API), then ' +
  'redeploy. Failing that, make the Postgres backend usable: DATABASE_URL ' +
  'plus a secret salt in RATE_LIMIT_KEY_SALT, IP_HASH_SALT or CRON_SECRET. ' +
  'Until one of those holds, no API rate limit is enforced and no document ' +
  'may claim one.'

/** Re-announce a continuing degradation at most this often. */
const ANNOUNCE_INTERVAL_MS = 15 * 60 * 1000

/** Hard ceiling on the fallback Map, so it cannot exhaust instance memory. */
const MAX_MEMORY_KEYS = 20_000

const CLEANUP_INTERVAL = 60_000

/**
 * Expired rows are swept opportunistically, on roughly one call in this many,
 * an hour after their window ends. One-in-N rather than every call because the
 * sweep is pure housekeeping and must not add a round trip to the hot path.
 */
const SWEEP_ONE_IN = 500

function truthy(value: string | undefined): boolean {
  if (!value) return false
  return ['1', 'true', 'yes', 'on'].includes(value.trim().toLowerCase())
}

function offish(value: string | undefined): boolean {
  if (!value) return false
  return ['0', 'false', 'no', 'off'].includes(value.trim().toLowerCase())
}

function redisConfigured(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN)
}

/**
 * The secret used to hash bucket keys before they are written.
 *
 * Resolution order, mirroring `src/lib/usage/free-allowance.ts` so that an
 * operator has one thing to set rather than two:
 *   1. RATE_LIMIT_KEY_SALT - a dedicated variable, for anyone who wants one.
 *   2. IP_HASH_SALT        - the existing variable for exactly this job.
 *   3. sha256('rate-limit-key-salt:' + CRON_SECRET) - derived from a secret
 *      that is already mandatory in production. Derived rather than used
 *      directly, so the salt cannot be turned back into a cron credential.
 *   4. Outside production only, a fixed development constant.
 *
 * Returns null when nothing usable exists, which makes the database backend
 * unavailable rather than making it store reversible keys.
 */
function resolveKeySalt(): string | null {
  const explicit = process.env.RATE_LIMIT_KEY_SALT || process.env.IP_HASH_SALT
  if (explicit && explicit.trim() !== '') return explicit

  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && cronSecret.trim() !== '') {
    return createHash('sha256').update(`rate-limit-key-salt:${cronSecret}`).digest('hex')
  }

  if (process.env.NODE_ENV !== 'production') return 'the-english-hub-rate-limit-dev-salt'
  return null
}

function databaseStatus(): RateLimitDatabaseStatus {
  if (offish(process.env.RATE_LIMIT_DB_BACKEND)) return 'disabled'
  if (!process.env.DATABASE_URL) return 'not-configured'
  if (resolveKeySalt() === null) return 'no-key-salt'
  return 'ready'
}

function databaseBacked(): boolean {
  return databaseStatus() === 'ready'
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
  lastDatabaseError: { at: number; message: string } | null
  failOpenDecisions: number
  enforcedDecisions: number
  evictions: number
  announcedDatabaseBackend: boolean
}

const degradation: DegradationState = {
  reason: null,
  since: null,
  decisions: 0,
  lastAnnouncedAt: null,
  lastRedisError: null,
  lastDatabaseError: null,
  failOpenDecisions: 0,
  enforcedDecisions: 0,
  evictions: 0,
  announcedDatabaseBackend: false,
}

function banner(reason: RateLimitDegradedReason, decisions: number): string {
  const cause =
    reason === 'redis-not-configured'
      ? `Neither Upstash Redis nor the Postgres backend is available (${databaseStatus()}).`
      : reason === 'database-error'
        ? 'The database increment failed, so the request was allowed through.'
        : 'The Redis call failed and no database backend was available.'
  return [
    '',
    '!!! ================================================================= !!!',
    '!!! RATE LIMITING IS NOT ENFORCED IN THIS ENVIRONMENT                 !!!',
    '!!! ================================================================= !!!',
    `!!! Cause: ${cause}`,
    '!!! Effect: limits are counted per serverless instance, or not at all,',
    '!!!         so a caller spread across instances is not limited. Treat',
    '!!!         every API rate limit as absent until this is fixed.',
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
        Sentry.captureMessage('Rate limiting is not enforced (no shared backend)', {
          level: 'error',
          tags: {
            subsystem: 'rate-limit',
            rate_limit_backend: 'memory',
            rate_limit_reason: reason,
          },
          extra: {
            remediation: REMEDIATION,
            databaseStatus: databaseStatus(),
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
      '[rate-limit] Using the in-memory fallback (no shared backend configured). Correct locally, not a control in production.',
    )
    return
  }
  console.error(banner(reason, degradation.decisions))
  reportToSentry(reason)
}

/**
 * Note, once per process, that the limiter is running on Postgres rather than
 * Redis. This is an enforced, working state, so it is an informational line
 * and NOT the degraded banner. It is still said out loud because the database
 * backend costs a write per limited request and an operator should know that
 * cost is being paid.
 */
function announceDatabaseBackend(): void {
  if (degradation.announcedDatabaseBackend) return
  degradation.announcedDatabaseBackend = true
  console.warn(
    '[rate-limit] Upstash Redis is not configured; rate limits are enforced by the Postgres backend (rate_limit_counter). Enforced across instances, at one row write per limited request. Configuring Upstash removes that write.',
  )
}

/**
 * The live, honest state of this control. Intended for an operator surface
 * (health endpoint, admin page, uptime check) so the gap is visible without
 * reading logs. Safe to expose: it contains no secrets and no user data.
 */
export function getRateLimitHealth(): RateLimitHealth {
  const configured = redisConfigured()
  const dbStatus = databaseStatus()
  const dbReady = dbStatus === 'ready'

  // The control works if a shared backend is available. A transient
  // 'database-error' is recorded, and reported, without flipping a working
  // backend to 'per-instance-only' - one blip is not a missing backend.
  const sharedBackendAvailable = configured || dbReady
  const backend: RateLimitBackend = configured ? 'redis' : dbReady ? 'postgres' : 'memory'
  const degraded = !sharedBackendAvailable || degradation.reason !== null
  const reason: RateLimitDegradedReason | null = degraded
    ? (degradation.reason ?? 'redis-not-configured')
    : null

  return {
    configured,
    databaseBacked: dbReady,
    databaseStatus: dbStatus,
    backend,
    enforcement: !sharedBackendAvailable
      ? 'per-instance-only'
      : degradation.enforcedDecisions > 0
        ? 'cross-instance'
        : 'unproven',
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
    lastDatabaseError: degradation.lastDatabaseError
      ? {
          at: new Date(degradation.lastDatabaseError.at).toISOString(),
          message: degradation.lastDatabaseError.message,
        }
      : null,
    failOpenDecisions: degradation.failOpenDecisions,
    enforcedDecisions: degradation.enforcedDecisions,
    remediation: sharedBackendAvailable ? null : REMEDIATION,
  }
}

/** One line an operator can read in a log, alert or status page. */
export function describeRateLimitHealth(): string {
  const health = getRateLimitHealth()
  if (health.enforcement === 'per-instance-only') {
    return (
      'Rate limiting: NOT ENFORCED (' +
      health.degradedReason +
      '). Limits are counted per serverless instance only. ' +
      REMEDIATION
    )
  }
  const where =
    health.backend === 'redis'
      ? 'Upstash Redis (sliding window)'
      : 'the Postgres backend (fixed window, rate_limit_counter)'
  if (health.enforcement === 'unproven') {
    // Configured, but nothing has come back enforced yet. If failOpen has
    // fired, the backend is answering and failing - most likely the migration
    // has not been applied - and saying "enforced" here would be a false
    // statement on a status page.
    const detail =
      health.failOpenDecisions > 0
        ? `${health.failOpenDecisions} decision(s) have failed open` +
          (health.lastDatabaseError ? `: ${health.lastDatabaseError.message}` : '') +
          '. Check that the rate_limit_counter migration has been applied.'
        : 'no decisions served yet in this process.'
    return `Rate limiting: NOT PROVEN via ${where} - ${detail}`
  }
  if (health.status === 'degraded') {
    return `Rate limiting: enforced across instances via ${where}, with a recent fault recorded (${health.degradedReason}).`
  }
  return `Rate limiting: enforced across instances via ${where}.`
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
// Postgres backend
//
// Imported dynamically, never statically. This module is pulled in by 164
// route handlers; a static `import { prisma }` would drag the Prisma client
// into every one of their bundles, and into any future edge-runtime caller,
// for a backend that is skipped entirely whenever Redis is configured.
// ---------------------------------------------------------------------------

interface PrismaLike {
  $queryRaw: <T = unknown>(strings: TemplateStringsArray, ...values: unknown[]) => Promise<T>
  $executeRaw: (strings: TemplateStringsArray, ...values: unknown[]) => Promise<number>
}

let prismaClient: PrismaLike | null = null

async function getPrismaClient(): Promise<PrismaLike> {
  if (prismaClient) return prismaClient
  const mod = (await import('@/lib/prisma')) as unknown as { prisma: PrismaLike }
  prismaClient = mod.prisma
  return prismaClient
}

/**
 * The stored key: sha256 of salt : limit : window : caller key.
 *
 * The limit and the window are part of the digest so that two call sites using
 * the same caller key under different limits get their own counters rather
 * than sharing one and stealing each other's budget.
 *
 * The raw key (which routinely contains an IP address) is never stored.
 */
function bucketKeyFor(key: string, options: RateLimitOptions, salt: string): string {
  return createHash('sha256')
    .update(`${salt}:${options.limit}:${options.windowSeconds}:${key}`)
    .digest('hex')
}

interface CounterRow {
  count: number | bigint
  window_end: Date | string
}

function toMillis(value: Date | string): number {
  return value instanceof Date ? value.getTime() : new Date(value).getTime()
}

/**
 * Sweep rows whose window ended over an hour ago. Fire and forget, on roughly
 * one call in SWEEP_ONE_IN, and never awaited on the hot path. The table is
 * self-limiting without this (one row per active caller, reused across
 * windows), so the sweep is what stops a caller who never returns from leaving
 * a row behind for ever - which matters for retention as much as for size.
 */
function maybeSweep(client: PrismaLike): void {
  if (Math.random() * SWEEP_ONE_IN >= 1) return
  const cutoff = new Date(Date.now() - 60 * 60 * 1000)
  void client.$executeRaw`DELETE FROM rate_limit_counter WHERE window_end < ${cutoff}`.catch(() => {
    /* Housekeeping only. A failed sweep must never affect a decision. */
  })
}

/**
 * The atomic increment. ONE statement, no read-then-write, so two concurrent
 * instances cannot both read 4 and both write 5.
 *
 * The window rolls over IN PLACE: when the stored `window_end` has passed, the
 * same row is reset to a count of 1 with a fresh end. That keeps one row per
 * caller for its whole life instead of one row per caller per window, and it
 * keeps the common update off every index (see the header note on HOT
 * updates).
 *
 * `now` and `windowEnd` are bound from the application clock rather than
 * computed with the database's `now()`. Both are correct; binding timestamps
 * avoids any dependence on parameter type inference for interval arithmetic,
 * which would be a silent runtime failure on a path designed to fail open.
 * Instance clocks on Vercel agree to within milliseconds, which is far inside
 * the resolution of a window measured in seconds.
 */
async function dbRateLimit(
  key: string,
  options: RateLimitOptions,
  salt: string,
): Promise<RateLimitResult> {
  const client = await getPrismaClient()
  const bucketKey = bucketKeyFor(key, options, salt)
  const now = new Date()
  const windowEnd = new Date(now.getTime() + options.windowSeconds * 1000)

  const rows = await client.$queryRaw<CounterRow[]>`
    INSERT INTO rate_limit_counter (bucket_key, window_end, count)
    VALUES (${bucketKey}, ${windowEnd}, 1)
    ON CONFLICT (bucket_key) DO UPDATE SET
      count = CASE
        WHEN rate_limit_counter.window_end <= ${now} THEN 1
        ELSE rate_limit_counter.count + 1
      END,
      window_end = CASE
        WHEN rate_limit_counter.window_end <= ${now} THEN ${windowEnd}
        ELSE rate_limit_counter.window_end
      END
    RETURNING count, window_end
  `

  const row = rows[0]
  if (!row) {
    // Unreachable for this statement: an unguarded upsert always returns its
    // row. Treated as a fault rather than silently trusted, and handled by the
    // fail-open caller.
    throw new Error('rate_limit_counter upsert returned no row')
  }

  maybeSweep(client)

  const count = Number(row.count)
  const success = count <= options.limit
  // The statement returned a row, so the table exists and the counter moved.
  // This is the only place the Postgres backend proves itself.
  degradation.enforcedDecisions++
  return {
    success,
    remaining: success ? options.limit - count : 0,
    resetAt: toMillis(row.window_end),
    backend: 'postgres',
    enforced: true,
  }
}

/**
 * FAIL OPEN. The database is unreachable or the statement failed, so the
 * request is allowed. See the header: this is an abuse control, and a brief
 * database fault must not become a site-wide refusal.
 *
 * `remaining` is reported as the full limit because no count is known. That is
 * exactly why `enforced: false` is set: the numbers on a fail-open result are
 * not evidence of anything, and must not be shown to a user or quoted in a
 * document as though they were.
 */
function failOpen(options: RateLimitOptions, error: unknown): RateLimitResult {
  degradation.lastDatabaseError = {
    at: Date.now(),
    message: error instanceof Error ? error.message : String(error),
  }
  degradation.failOpenDecisions++
  markDegraded('database-error', true)
  return {
    success: true,
    remaining: options.limit,
    resetAt: Date.now() + options.windowSeconds * 1000,
    backend: 'postgres',
    enforced: false,
    degradedReason: 'database-error',
  }
}

// ---------------------------------------------------------------------------
// In-memory fallback
//
// Correct for local development, where there is one process. Not a control in
// production, where there are many. Bounded so that a key-spraying caller
// cannot exhaust instance memory. Note that the bound is itself a bypass: an
// attacker who sprays enough distinct keys evicts their own counter. That is
// acceptable only because the fallback is not relied on as a security control,
// and it is one more reason a shared backend must be available.
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
 * Backends are tried in order: Redis if configured, then Postgres, then the
 * process-local Map. `enforced: true` means the decision holds across every
 * serverless instance. `enforced: false` means the caller has NOT been limited
 * in any way that holds, whatever `success` says - either memory answered, or
 * the database failed and the request was let through on purpose.
 */
export async function rateLimit(key: string, options: RateLimitOptions): Promise<RateLimitResult> {
  const client = getRedis()

  if (!client) {
    return runDatabaseOrMemory(key, options, 'redis-not-configured')
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
    // whichever route was calling. Degrading keeps the route working, and the
    // degradation is announced rather than swallowed. Postgres is tried next,
    // so a Redis outage no longer means the control is gone.
    degradation.lastRedisError = {
      at: Date.now(),
      message: error instanceof Error ? error.message : String(error),
    }
    return runDatabaseOrMemory(key, options, 'redis-error')
  }

  // A healthy Redis answer clears a previous degradation.
  if (degradation.reason === 'redis-error' || degradation.reason === 'database-error') {
    degradation.reason = null
    degradation.since = null
    degradation.lastAnnouncedAt = null
  }

  // Redis counted this decision, so the shared backend is proven.
  degradation.enforcedDecisions++

  return {
    success: result.success,
    remaining: result.remaining,
    resetAt: result.reset,
    backend: 'redis',
    enforced: true,
  }
}

/**
 * Second and third choice: the shared Postgres counter, or - only when there
 * is no usable database - the process-local Map.
 *
 * `redisReason` is why we are not on Redis, and is carried into the memory
 * decision so that the caller still learns the root cause.
 */
async function runDatabaseOrMemory(
  key: string,
  options: RateLimitOptions,
  redisReason: RateLimitDegradedReason,
): Promise<RateLimitResult> {
  const status = databaseStatus()
  if (status !== 'ready') {
    return memDecision(key, options, redisReason)
  }

  const salt = resolveKeySalt()
  if (salt === null) {
    // Cannot happen: databaseStatus() already proved a salt exists. Belt and
    // braces, because writing an unsalted key would be a privacy failure and
    // this is the only place that could cause one.
    return memDecision(key, options, redisReason)
  }

  announceDatabaseBackend()

  try {
    const result = await dbRateLimit(key, options, salt)
    // A healthy answer clears a previous database or Redis fault.
    if (degradation.reason === 'database-error' || degradation.reason === 'redis-error') {
      degradation.reason = null
      degradation.since = null
      degradation.lastAnnouncedAt = null
    }
    return result
  } catch (error) {
    return failOpen(options, error)
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
  prismaClient = null
  lastCleanup = Date.now()
  degradation.reason = null
  degradation.since = null
  degradation.decisions = 0
  degradation.lastAnnouncedAt = null
  degradation.lastRedisError = null
  degradation.lastDatabaseError = null
  degradation.failOpenDecisions = 0
  degradation.enforcedDecisions = 0
  degradation.evictions = 0
  degradation.announcedDatabaseBackend = false
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
    // traffic without the preferred backend. Note that it demands REDIS
    // specifically: the Postgres backend is enforced and sufficient, so most
    // deployments should leave this flag alone.
    throw new Error(
      'RATE_LIMIT_REQUIRE_REDIS is set but Upstash Redis is not configured. ' + REMEDIATION,
    )
  }
  if (process.env.NODE_ENV === 'production' && !databaseBacked()) {
    markDegraded('redis-not-configured', false)
  }
}

// ─── Free-allowance metering (the single shared helper) ─────────────────────
//
// WHY THIS EXISTS - DO NOT REMOVE IT AS DUPLICATION OF rate-limit.ts
//
// `src/lib/rate-limit.ts` is an Upstash Redis limiter that falls back to a
// process-local `Map` when Redis is not configured. Redis IS NOT configured in
// production: the runtime logs carry
//
//   [rate-limit] CRITICAL: Redis not configured - rate limiting is
//   non-functional in production
//
// Every Vercel serverless instance therefore keeps its own Map, so a
// "12 per 24 hours" cap was really "12 per instance per 24 hours, until the
// instance is recycled" - which is no cap at all. The free IELTS diagnostic
// (a deliberately ungated lead magnet that calls Anthropic on every request)
// was protected by nothing, and every call costs real money.
//
// This helper puts the count in Postgres, which every instance already shares,
// and increments it with ONE atomic statement rather than a read-then-write:
//
//   INSERT ... VALUES (..., 1, :limit, now(), now())
//   ON CONFLICT (subject_type, subject_key, meter, period_key)
//   DO UPDATE SET count = free_allowance_usage.count + 1, last_used_at = now()
//   WHERE free_allowance_usage.count < :limit
//   RETURNING count, limit_applied
//
// Zero rows back means the conflicting row failed the WHERE and the allowance
// is already spent. That is race-free across concurrent instances and survives
// cold starts, which is precisely what the Map could not do.
//
// `rate-limit.ts` keeps its job (short-window burst protection, IF Redis is
// ever configured). It is NOT the cap. This is.
//
// ─── Identity and privacy ───────────────────────────────────────────────────
//
// A subject is either a signed-in Supabase user uuid, or the FULL 64-character
// sha256(IP_HASH_SALT + ':' + ip) digest of the client IP. The raw IP is never
// written, never logged and never leaves the request scope. We use the full
// digest here rather than `hashIP()` from `src/lib/security.ts`, which
// truncates to 16 hex characters because it is built for log correlation;
// `hashIP()` keeps that job.
//
// IP_HASH_SALT is MANDATORY in production for this helper. With a known salt
// the entire IPv4 space can be hashed in minutes, so the stored value would be
// trivially reversible and would remain personal data under UK GDPR. An unset
// salt is a hard failure here, not a warning.
//
// There is deliberately NO foreign key from `free_allowance_usage` to `User`:
// a large share of real accounts exist only in Supabase and have no Prisma
// `User` row (see `src/lib/consent-check.ts`), so an FK would silently fail to
// count exactly the accounts that matter, and an 'ip' subject has no user at
// all. Deletion is therefore wired by hand into `src/lib/data-retention.ts`.
// ────────────────────────────────────────────────────────────────────────────

import { createHash, randomUUID } from 'crypto'
import type { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getClientIp } from '@/lib/rate-limit'
import { allowanceExhaustedResponse, serviceUnavailableResponse } from '@/lib/api-response'
import { getFlag, getLimit, type LimitName } from '@/lib/usage/limits'

export { allowanceExhaustedResponse }

// ─── Types ──────────────────────────────────────────────────────────────────

/** The meters this helper knows about. A new meter needs no migration. */
export type Meter = 'ielts_diagnostic' | 'trial_ai' | 'trial_ai_daily'

export const METERS: readonly Meter[] = ['ielts_diagnostic', 'trial_ai', 'trial_ai_daily'] as const

export interface UsageSubject {
  subjectType: 'user' | 'ip'
  /** Supabase auth uuid, or a 64-char sha256 digest. NEVER a raw IP. */
  subjectKey: string
}

export interface AllowanceOptions {
  /**
   * The Stripe-less trial subscription id, for the whole-trial bucket
   * ('trial:<subscriptionId>'). Required for the 'trial_ai' meter.
   */
  trialSubscriptionId?: string | null
  /** When the trial ends, used as `resetsAt` for the whole-trial bucket. */
  trialEndsAt?: Date | null
}

export interface AllowanceState {
  /** False only when the allowance is genuinely spent AND enforcement is on. */
  allowed: boolean
  /** Calls consumed in this bucket, after this call. */
  used: number
  /** The cap currently in force (the live resolved number, not the stored one). */
  limit: number
  remaining: number
  /** When this bucket rolls over and the allowance returns. */
  resetsAt: Date
  meter: Meter
  /** Who the bucket belongs to. Shapes the wall copy: a signed-out learner is
   *  told that signing in gives more, which is the honest mitigation for a
   *  whole classroom sharing one public IP. */
  subjectType: 'user' | 'ip'
  /** True when the call was over the cap but let through by shadow mode. */
  shadowed: boolean
}

/**
 * Thrown when the helper cannot safely produce a subject - today only when
 * IP_HASH_SALT is missing in production. Routes turn this into a 503; they must
 * never fall back to an unsalted or raw-IP key.
 */
export class FreeAllowanceConfigError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'FreeAllowanceConfigError'
  }
}

// ─── Identity ───────────────────────────────────────────────────────────────

/**
 * Resolve the subject a usage bucket belongs to.
 *
 * Signed in  -> { subjectType: 'user', subjectKey: <supabase uuid> }
 * Signed out -> { subjectType: 'ip',   subjectKey: sha256(salt + ':' + ip) }
 *
 * @throws FreeAllowanceConfigError in production when IP_HASH_SALT is unset and
 *         the caller is anonymous. Failing here is the point: a known salt makes
 *         the stored hash reversible, so it would still be personal data.
 */
/**
 * The secret salt for anonymous IP hashing.
 *
 * 2026-09-17: this originally read IP_HASH_SALT and THREW in production when it
 * was unset. That shipped, the variable was not set in Vercel, and the free
 * IELTS diagnostic - the top-of-funnel lead magnet - began returning 503 to
 * every signed-out visitor before it ever reached the model. A missing
 * configuration value must not take a learner-facing feature down.
 *
 * The privacy requirement is unchanged and is NOT relaxed: the salt must be
 * secret, because with a known salt the whole IPv4 space can be hashed in
 * minutes and the stored digest would be reversible, so it would remain
 * personal data under UK GDPR. What changes is where the secret may come from.
 *
 * Resolution order:
 *   1. IP_HASH_SALT                - the dedicated variable, if set.
 *   2. sha256('free-allowance-ip-salt:' + CRON_SECRET) - derived from a secret
 *      that is already mandatory in production (every scheduled route rejects
 *      without it), is high-entropy, and never leaves the server. Deriving
 *      rather than using it directly means the salt cannot be used to
 *      impersonate a cron caller even if a digest were somehow reversed.
 *   3. Only if BOTH are absent in production do we refuse, because at that
 *      point there is genuinely no secret to salt with.
 *
 * The derived salt is stable for a given deployment, which is what a counter
 * needs. Rotating CRON_SECRET resets anonymous buckets; that is acceptable and
 * is noted here so it is not a surprise.
 */
function resolveIpSalt(): string {
  const explicit = process.env.IP_HASH_SALT
  if (explicit && explicit.trim() !== '') return explicit

  const cronSecret = process.env.CRON_SECRET
  if (cronSecret && cronSecret.trim() !== '') {
    console.warn(
      '[free-allowance] IP_HASH_SALT is not set; deriving the anonymous salt from CRON_SECRET. Set IP_HASH_SALT to make anonymous buckets independent of cron-secret rotation.',
    )
    return createHash('sha256').update(`free-allowance-ip-salt:${cronSecret}`).digest('hex')
  }

  if (process.env.NODE_ENV === 'production') {
    throw new FreeAllowanceConfigError(
      'Neither IP_HASH_SALT nor CRON_SECRET is set. Anonymous usage cannot be metered without a secret salt, because an unsalted or known-salt IP hash is reversible and remains personal data.',
    )
  }
  return 'the-english-hub-ip-salt-dev'
}

export function resolveUsageSubject(
  request: { headers: Headers },
  supabaseUserId: string | null | undefined,
): UsageSubject {
  if (supabaseUserId) {
    return { subjectType: 'user', subjectKey: supabaseUserId }
  }

  const salt = resolveIpSalt()

  const ip = getClientIp(request.headers)
  // Full 64-char digest (not the truncated hashIP() used for logs).
  const subjectKey = createHash('sha256').update(`${salt}:${ip}`).digest('hex')

  return { subjectType: 'ip', subjectKey }
}

// ─── Period keys ────────────────────────────────────────────────────────────

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n)
}

/** '2026-09' - the calendar-month bucket. */
function monthKey(now: Date): string {
  return `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}`
}

/** '2026-09-17' - the daily bucket. */
function dayKey(now: Date): string {
  return `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())}`
}

function startOfNextMonth(now: Date): Date {
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1, 0, 0, 0, 0))
}

function startOfNextDay(now: Date): Date {
  return new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0, 0),
  )
}

const MS_PER_DAY = 86400000

interface Bucket {
  periodKey: string
  resetsAt: Date
  limitName: LimitName
}

/**
 * Compute the bucket a (subject, meter) pair falls into right now.
 *
 * The diagnostic window is expressed in days so the founder can change its
 * shape live. At the default of 30 days it uses the calendar-month key
 * ('2026-09'), which is the readable, reportable form; any other value uses a
 * fixed-width rolling window keyed off the epoch ('d30w617'), so no migration
 * is needed to change the window.
 */
async function resolveBucket(
  subject: UsageSubject,
  meter: Meter,
  now: Date,
  options: AllowanceOptions,
): Promise<Bucket> {
  switch (meter) {
    case 'ielts_diagnostic': {
      const windowDays = await getLimit('diagnosticWindowDays')
      const limitName: LimitName =
        subject.subjectType === 'user' ? 'diagnosticSignedIn' : 'diagnosticSignedOut'

      if (windowDays === 30) {
        return { periodKey: monthKey(now), resetsAt: startOfNextMonth(now), limitName }
      }

      const windowIndex = Math.floor(now.getTime() / MS_PER_DAY / windowDays)
      return {
        periodKey: `d${windowDays}w${windowIndex}`,
        resetsAt: new Date((windowIndex + 1) * windowDays * MS_PER_DAY),
        limitName,
      }
    }

    case 'trial_ai': {
      // The whole-trial bucket: it must span all seven days rather than
      // resetting, or the ceiling is meaningless.
      const id = options.trialSubscriptionId
      if (!id) {
        throw new FreeAllowanceConfigError(
          "The 'trial_ai' meter needs a trialSubscriptionId to build its whole-trial bucket.",
        )
      }
      return {
        periodKey: `trial:${id}`,
        resetsAt: options.trialEndsAt ?? startOfNextMonth(now),
        limitName: 'trialAi',
      }
    }

    case 'trial_ai_daily':
      return { periodKey: dayKey(now), resetsAt: startOfNextDay(now), limitName: 'trialAiDaily' }
  }
}

// ─── Raw SQL ────────────────────────────────────────────────────────────────

interface IncrementRow {
  count: number
  limit_applied: number
}

/**
 * The atomic increment. ONE statement, no read-then-write.
 *
 * `guard = true`  - the enforcing form. Zero rows back means the conflicting
 *                   row failed the WHERE, i.e. the allowance is already spent.
 * `guard = false` - the shadow/disabled form. It still counts (that is the
 *                   point of shadow mode: we want the real distribution before
 *                   choosing the number) but never refuses.
 *
 * Note the guard compares against the LIVE limit, not the stored
 * `limit_applied`. `limit_applied` records the cap in force when the bucket
 * opened and exists as evidence for "why was this user stopped at 4" after the
 * number changes mid-month; enforcing against it would mean a raised limit did
 * not take effect until the next bucket, and being able to raise the number in
 * about a minute is the mitigation this whole design leans on.
 */
async function increment(
  subject: UsageSubject,
  meter: Meter,
  periodKey: string,
  limit: number,
  guard: boolean,
): Promise<IncrementRow | null> {
  const id = randomUUID()

  const rows = guard
    ? await prisma.$queryRaw<IncrementRow[]>`
        INSERT INTO free_allowance_usage
          (id, subject_type, subject_key, meter, period_key, count, limit_applied,
           first_used_at, last_used_at)
        VALUES (${id}, ${subject.subjectType}, ${subject.subjectKey}, ${meter}, ${periodKey},
                1, ${limit}, now(), now())
        ON CONFLICT (subject_type, subject_key, meter, period_key)
        DO UPDATE SET count = free_allowance_usage.count + 1, last_used_at = now()
        WHERE free_allowance_usage.count < ${limit}
        RETURNING count, limit_applied
      `
    : await prisma.$queryRaw<IncrementRow[]>`
        INSERT INTO free_allowance_usage
          (id, subject_type, subject_key, meter, period_key, count, limit_applied,
           first_used_at, last_used_at)
        VALUES (${id}, ${subject.subjectType}, ${subject.subjectKey}, ${meter}, ${periodKey},
                1, ${limit}, now(), now())
        ON CONFLICT (subject_type, subject_key, meter, period_key)
        DO UPDATE SET count = free_allowance_usage.count + 1, last_used_at = now()
        RETURNING count, limit_applied
      `

  return rows[0] ?? null
}

async function readCount(subject: UsageSubject, meter: Meter, periodKey: string): Promise<number> {
  const rows = await prisma.$queryRaw<{ count: number }[]>`
    SELECT count FROM free_allowance_usage
    WHERE subject_type = ${subject.subjectType}
      AND subject_key = ${subject.subjectKey}
      AND meter = ${meter}
      AND period_key = ${periodKey}
    LIMIT 1
  `
  return Number(rows[0]?.count ?? 0)
}

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Read the current allowance WITHOUT consuming it. Used by `GET /api/me/usage`
 * and by server components that render the remaining-uses signal. Never
 * increments; never fails the caller (a DB error reads as "nothing used yet",
 * because a read-only display must not block a page render).
 */
export async function peekAllowance(
  subject: UsageSubject,
  meter: Meter,
  options: AllowanceOptions = {},
): Promise<AllowanceState> {
  const now = new Date()
  const bucket = await resolveBucket(subject, meter, now, options)
  const limit = await getLimit(bucket.limitName)

  let used = 0
  try {
    used = await readCount(subject, meter, bucket.periodKey)
  } catch (err) {
    console.error(`[free-allowance] peek failed for meter=${meter}`, err)
  }

  return {
    allowed: used < limit,
    used,
    limit,
    remaining: Math.max(limit - used, 0),
    resetsAt: bucket.resetsAt,
    meter,
    subjectType: subject.subjectType,
    shadowed: false,
  }
}

/**
 * Consume one unit of the allowance.
 *
 * Returns `{ allowed: false }` when the allowance is spent and enforcement is
 * on. In shadow mode (or with enforcement off) the call is still counted and
 * the over-cap case is logged, but `allowed` stays true.
 *
 * FAILS CLOSED on a database error: it throws, and the caller must return 503.
 * That costs almost nothing, because the same database backs the auth and
 * profile reads that already ran earlier in the gate chain - a DB outage has
 * already broken the route by this point. Failing open would mean spending
 * money we cannot account for.
 */
export async function consumeAllowance(
  subject: UsageSubject,
  meter: Meter,
  options: AllowanceOptions = {},
): Promise<AllowanceState> {
  const now = new Date()
  const bucket = await resolveBucket(subject, meter, now, options)
  const limit = await getLimit(bucket.limitName)

  const enforced = await getFlag('enforced')
  const shadowMode = await getFlag('shadowMode')
  const enforcing = enforced && !shadowMode

  const row = await increment(subject, meter, bucket.periodKey, limit, enforcing)

  if (row === null) {
    // Enforcing form returned no row: the conflicting row failed the WHERE, so
    // the allowance is already spent. Read the count back for the response body.
    const used = await readCount(subject, meter, bucket.periodKey)
    return {
      allowed: false,
      used,
      limit,
      remaining: 0,
      resetsAt: bucket.resetsAt,
      meter,
      subjectType: subject.subjectType,
      shadowed: false,
    }
  }

  const used = Number(row.count)
  const overCap = used > limit
  if (overCap && !enforcing) {
    console.warn(
      `[free-allowance] ${shadowMode ? 'SHADOW' : 'DISABLED'}: would have blocked meter=${meter} subjectType=${subject.subjectType} period=${bucket.periodKey} used=${used} limit=${limit}`,
    )
  }

  return {
    allowed: true,
    used,
    limit,
    remaining: Math.max(limit - used, 0),
    resetsAt: bucket.resetsAt,
    meter,
    subjectType: subject.subjectType,
    shadowed: overCap,
  }
}

/**
 * Give one unit back.
 *
 * NOT OPTIONAL. Every non-success exit after the consume point must call this.
 * If the Anthropic call throws and the route returns 503, an un-refunded unit
 * means a provider outage silently eats a child's free allowance with no signal
 * to anyone. Best-effort by design: a failed refund is logged, never thrown,
 * because it runs on paths that are already returning an error.
 */
export async function refundAllowance(
  subject: UsageSubject,
  meter: Meter,
  options: AllowanceOptions = {},
): Promise<void> {
  try {
    const bucket = await resolveBucket(subject, meter, new Date(), options)
    await prisma.$executeRaw`
      UPDATE free_allowance_usage
      SET count = GREATEST(count - 1, 0)
      WHERE subject_type = ${subject.subjectType}
        AND subject_key = ${subject.subjectKey}
        AND meter = ${meter}
        AND period_key = ${bucket.periodKey}
    `
  } catch (err) {
    console.error(`[free-allowance] refund failed for meter=${meter}`, err)
  }
}

// ─── Response plumbing ──────────────────────────────────────────────────────

/**
 * The headers every metered route sets on success, so the UI meter updates
 * without a second request.
 */
export function allowanceHeaders(state: AllowanceState): Record<string, string> {
  return {
    'X-Free-Allowance-Limit': String(state.limit),
    'X-Free-Allowance-Remaining': String(state.remaining),
    'X-Free-Allowance-Reset': state.resetsAt.toISOString(),
  }
}

/** Copy the allowance headers onto an already-built response. */
export function applyAllowanceHeaders<T extends { headers: Headers }>(
  response: T,
  state: AllowanceState | null,
): T {
  if (!state) return response
  const headers = allowanceHeaders(state)
  for (const [k, v] of Object.entries(headers)) response.headers.set(k, v)
  return response
}

// ─── Route-level convenience ────────────────────────────────────────────────

export interface AllowanceGate {
  /** Non-null when the route must return immediately. */
  response: NextResponse | null
  /** The subject, so the route can refund on a later failure. */
  subject: UsageSubject | null
  state: AllowanceState | null
}

/**
 * The one call a route makes. Place it in the gate chain AFTER
 * content-type / auth / consent / AI opt-out / validation / content-safety and
 * IMMEDIATELY BEFORE the first model call, exactly where `checkMinorAIConsent`
 * and `isAiOptedOutServer` sit today.
 *
 * On a refusal it returns a 402 carrying `code: 'free_allowance_exhausted'`.
 * On a configuration or database failure it returns 503 - fail closed.
 */
export async function enforceAllowance(
  request: { headers: Headers },
  supabaseUserId: string | null | undefined,
  meter: Meter,
  options: AllowanceOptions = {},
): Promise<AllowanceGate> {
  let subject: UsageSubject
  try {
    subject = resolveUsageSubject(request, supabaseUserId)
  } catch (err) {
    console.error('[free-allowance] cannot resolve a usage subject', err)
    return {
      response: serviceUnavailableResponse(
        'This feature is temporarily unavailable. Please try again shortly.',
      ),
      subject: null,
      state: null,
    }
  }

  let state: AllowanceState
  try {
    state = await consumeAllowance(subject, meter, options)
  } catch (err) {
    // Fail CLOSED. See consumeAllowance().
    console.error(`[free-allowance] consume failed for meter=${meter}, failing closed`, err)
    return {
      response: serviceUnavailableResponse(
        'We could not check your free usage just now. Please try again shortly.',
      ),
      subject,
      state: null,
    }
  }

  if (!state.allowed) {
    return { response: allowanceExhaustedResponse(state), subject, state }
  }

  return { response: null, subject, state }
}

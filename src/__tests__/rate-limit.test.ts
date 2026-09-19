/**
 * Tests for the rate limiter.
 *
 * WHAT THESE PROTECT
 * The limiter had one shared backend (Upstash Redis) which is not configured in
 * production, so every decision came from a process-local Map and no limit held
 * across serverless instances. A Postgres backend now sits between Redis and
 * that Map. These tests assert the three things that makes or breaks:
 *
 *   1. the count is genuinely shared - it survives a cold start, and a second
 *      "instance" sees what the first one counted;
 *   2. a database fault FAILS OPEN, because this is an abuse control and a
 *      blip must not refuse every learner on the site;
 *   3. no raw key, and therefore no raw IP, is ever written.
 *
 * Plus everything the module already promised: honesty about the degraded
 * state, loudness in production, and granting nothing.
 *
 * Strategy: a fake Prisma implementing the real semantics of the two raw
 * statements (the rolling-window upsert and the expiry sweep) over an in-memory
 * map keyed the way the primary key is. The store lives outside the module
 * registry, so `vi.resetModules()` gives a fresh "instance" with a fresh Map
 * while the shared database persists - which is exactly the production
 * behaviour under test.
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

// The Upstash packages are replaced so that the Redis path can be exercised
// (and made to fail) without a network or a real database.
const h = vi.hoisted(() => ({
  limitMock: vi.fn(),
  captureMessage: vi.fn(),
}))

vi.mock('@upstash/redis', () => ({
  Redis: class {
    constructor(_config: unknown) {}
  },
}))

vi.mock('@upstash/ratelimit', () => {
  class Ratelimit {
    static slidingWindow = (limit: number, window: string) => ({ limit, window })
    constructor(_config: unknown) {}
    limit(key: string) {
      return h.limitMock(key)
    }
  }
  return { Ratelimit }
})

vi.mock('@sentry/nextjs', () => ({
  captureMessage: h.captureMessage,
}))

// ─── Fake Prisma ────────────────────────────────────────────────────────────

interface CounterRow {
  bucket_key: string
  window_end: Date
  count: number
}

const DB = vi.hoisted(() => {
  const store = new Map<string, { bucket_key: string; window_end: Date; count: number }>()

  const state = {
    store,
    /** Make every statement throw, to exercise the fail-open path. */
    dbThrows: false,
    /** Make only the housekeeping sweep throw. */
    sweepThrows: false,
    /** Every statement the module issued, with its bound values. */
    queries: [] as { sql: string; values: unknown[] }[],
    sweeps: 0,
  }

  const sqlOf = (strings: TemplateStringsArray) => strings.join(' ').replace(/\s+/g, ' ').trim()

  const prisma = {
    $queryRaw: vi.fn(async (strings: TemplateStringsArray, ...values: unknown[]) => {
      const sql = sqlOf(strings)
      state.queries.push({ sql, values })
      if (state.dbThrows) throw new Error('connection terminated unexpectedly')

      if (sql.startsWith('INSERT INTO rate_limit_counter')) {
        // Bound in template order: bucket_key, window_end, now, now, window_end.
        const bucketKey = values[0] as string
        const windowEnd = values[1] as Date
        const now = values[2] as Date

        const existing = state.store.get(bucketKey)
        if (!existing) {
          const row = { bucket_key: bucketKey, window_end: windowEnd, count: 1 }
          state.store.set(bucketKey, row)
          return [{ count: row.count, window_end: row.window_end }]
        }

        // The CASE pair: an expired window resets the SAME row in place.
        if (existing.window_end.getTime() <= now.getTime()) {
          existing.count = 1
          existing.window_end = windowEnd
        } else {
          existing.count += 1
        }
        return [{ count: existing.count, window_end: existing.window_end }]
      }

      throw new Error('unexpected query: ' + sql)
    }),

    $executeRaw: vi.fn(async (strings: TemplateStringsArray, ...values: unknown[]) => {
      const sql = sqlOf(strings)
      state.queries.push({ sql, values })
      if (state.dbThrows || state.sweepThrows) throw new Error('sweep failed')

      if (sql.startsWith('DELETE FROM rate_limit_counter')) {
        state.sweeps++
        const cutoff = values[0] as Date
        let removed = 0
        for (const [key, row] of state.store) {
          if (row.window_end.getTime() < cutoff.getTime()) {
            state.store.delete(key)
            removed++
          }
        }
        return removed
      }

      throw new Error('unexpected statement: ' + sql)
    }),
  }

  // Object.assign, NOT a spread: the fake reads `state.dbThrows` at call time.
  return Object.assign(state, { prisma })
})

vi.mock('@/lib/prisma', () => ({ prisma: DB.prisma }))

const store = DB.store as unknown as Map<string, CounterRow>

// ─── Environment handling ───────────────────────────────────────────────────
//
// Snapshot and restore rather than delete: vitest workers share process.env
// across test files, so a deletion here would leak into whatever runs next.

const MANAGED_ENV = [
  'UPSTASH_REDIS_REST_URL',
  'UPSTASH_REDIS_REST_TOKEN',
  'RATE_LIMIT_REQUIRE_REDIS',
  'RATE_LIMIT_DB_BACKEND',
  'RATE_LIMIT_KEY_SALT',
  'DATABASE_URL',
  'IP_HASH_SALT',
  'CRON_SECRET',
] as const

let envSnapshot: Record<string, string | undefined> = {}

function clearManagedEnv() {
  for (const key of MANAGED_ENV) delete process.env[key]
}

function setRedisEnv() {
  process.env.UPSTASH_REDIS_REST_URL = 'https://example.upstash.io'
  process.env.UPSTASH_REDIS_REST_TOKEN = 'test-token'
}

/** Make the Postgres backend usable: a connection string and a secret salt. */
function setDatabaseEnv() {
  process.env.DATABASE_URL = 'postgresql://user:pw@db.example.com:5432/postgres'
  process.env.RATE_LIMIT_KEY_SALT = 'test-rate-limit-salt'
}

beforeEach(() => {
  vi.resetModules()
  vi.clearAllMocks()
  envSnapshot = Object.fromEntries(MANAGED_ENV.map((k) => [k, process.env[k]]))
  clearManagedEnv()
  DB.store.clear()
  DB.queries.length = 0
  DB.dbThrows = false
  DB.sweepThrows = false
  DB.sweeps = 0
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
  vi.useRealTimers()
  clearManagedEnv()
  for (const [key, value] of Object.entries(envSnapshot)) {
    if (value !== undefined) process.env[key] = value
  }
})

// ---------------------------------------------------------------------------
// Behaviour preserved from the original limiter
// ---------------------------------------------------------------------------

describe('rateLimit (in-memory fallback)', () => {
  it('allows requests within limit', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('test-key-1', { limit: 5, windowSeconds: 60 })
    expect(result.success).toBe(true)
    expect(result.remaining).toBe(4)
  })

  it('blocks requests over limit', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const key = 'test-key-block-' + Date.now()
    for (let i = 0; i < 3; i++) {
      await rateLimit(key, { limit: 3, windowSeconds: 60 })
    }
    const result = await rateLimit(key, { limit: 3, windowSeconds: 60 })
    expect(result.success).toBe(false)
    expect(result.remaining).toBe(0)
  })

  it('returns resetAt in the future', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('test-key-reset-' + Date.now(), { limit: 5, windowSeconds: 60 })
    expect(result.resetAt).toBeGreaterThan(Date.now())
  })
})

// ---------------------------------------------------------------------------
// The Postgres backend: the point of the change
// ---------------------------------------------------------------------------

describe('rateLimit (Postgres backend)', () => {
  beforeEach(() => {
    setDatabaseEnv()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('uses the database when Redis is absent, and calls the decision enforced', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('db-1', { limit: 5, windowSeconds: 60 })

    expect(result.backend).toBe('postgres')
    expect(result.enforced).toBe(true)
    expect(result.degradedReason).toBeUndefined()
    expect(result.success).toBe(true)
    expect(result.remaining).toBe(4)
    expect(DB.prisma.$queryRaw).toHaveBeenCalledTimes(1)
  })

  it('counts and then refuses, with remaining pinned at zero', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const opts = { limit: 3, windowSeconds: 60 }
    const results = []
    for (let i = 0; i < 5; i++) results.push(await rateLimit('db-block', opts))

    expect(results.map((r) => r.success)).toEqual([true, true, true, false, false])
    expect(results.map((r) => r.remaining)).toEqual([2, 1, 0, 0, 0])
    expect(results.every((r) => r.enforced === true)).toBe(true)
  })

  it('increments in ONE statement, never read-then-write', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9) // keep the 1-in-500 sweep out of the count
    const { rateLimit } = await import('@/lib/rate-limit')
    await rateLimit('db-atomic', { limit: 5, windowSeconds: 60 })

    // One statement per decision. A SELECT followed by an UPDATE would let two
    // concurrent instances both read 4 and both write 5.
    expect(DB.queries).toHaveLength(1)
    expect(DB.queries[0]?.sql).toContain('ON CONFLICT (bucket_key) DO UPDATE')
    expect(DB.queries[0]?.sql).toContain('RETURNING count, window_end')
    expect(DB.queries[0]?.sql).not.toContain('SELECT')
  })

  it('holds across a cold start: a fresh instance sees the earlier count', async () => {
    const opts = { limit: 3, windowSeconds: 60 }

    // Instance one burns the allowance.
    const first = await import('@/lib/rate-limit')
    for (let i = 0; i < 3; i++) await first.rateLimit('shared-key', opts)

    // A new lambda instance: new module registry, new Map, same database.
    vi.resetModules()
    const second = await import('@/lib/rate-limit')
    const result = await second.rateLimit('shared-key', opts)

    expect(result.success).toBe(false)
    expect(result.backend).toBe('postgres')
    expect(second.getRateLimitHealth().memoryKeys).toBe(0)
  })

  it('rolls the window over IN PLACE, reusing the row rather than adding one', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-09-18T10:00:00.000Z'))

    const { rateLimit } = await import('@/lib/rate-limit')
    const opts = { limit: 2, windowSeconds: 60 }

    await rateLimit('rollover', opts)
    await rateLimit('rollover', opts)
    expect((await rateLimit('rollover', opts)).success).toBe(false)
    expect(store.size).toBe(1)

    // Past the end of the window: the same row resets to a count of one.
    vi.setSystemTime(new Date('2026-09-18T10:01:30.000Z'))
    const afterReset = await rateLimit('rollover', opts)

    expect(afterReset.success).toBe(true)
    expect(afterReset.remaining).toBe(1)
    // One row per caller for its whole life, not one row per window. This is
    // what keeps the hot path off the indexes.
    expect(store.size).toBe(1)
  })

  it('gives each (limit, window) pair its own counter', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')

    await rateLimit('same-caller', { limit: 1, windowSeconds: 60 })
    const blocked = await rateLimit('same-caller', { limit: 1, windowSeconds: 60 })
    expect(blocked.success).toBe(false)

    // A different call site with a looser limit must not inherit that refusal.
    const other = await rateLimit('same-caller', { limit: 5, windowSeconds: 60 })
    expect(other.success).toBe(true)
    expect(store.size).toBe(2)
  })

  it('reports the backend honestly through getRateLimitHealth()', async () => {
    const { rateLimit, getRateLimitHealth, describeRateLimitHealth } =
      await import('@/lib/rate-limit')
    await rateLimit('db-health', { limit: 5, windowSeconds: 60 })
    const health = getRateLimitHealth()

    expect(health.configured).toBe(false) // Upstash is still not configured
    expect(health.databaseBacked).toBe(true)
    expect(health.databaseStatus).toBe('ready')
    expect(health.backend).toBe('postgres')
    expect(health.enforcement).toBe('cross-instance')
    expect(health.status).toBe('ok')
    expect(health.remediation).toBeNull()
    expect(health.degradedDecisions).toBe(0)
    expect(describeRateLimitHealth()).toContain('enforced across instances')
  })

  it('says once, and only once, that it is running on Postgres - not the degraded banner', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const { rateLimit } = await import('@/lib/rate-limit')
    for (let i = 0; i < 10; i++) await rateLimit(`announce-${i}`, { limit: 5, windowSeconds: 60 })

    expect(error).not.toHaveBeenCalled()
    expect(warn).toHaveBeenCalledTimes(1)
    expect(String(warn.mock.calls[0]?.[0])).toContain('Postgres backend')
  })
})

// ---------------------------------------------------------------------------
// Privacy: a rate-limit key is usually an IP address
// ---------------------------------------------------------------------------

describe('the stored key is a salted digest, never the caller key', () => {
  beforeEach(() => {
    setDatabaseEnv()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('writes a 64-character sha256 digest and no raw IP', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    await rateLimit('contact:198.51.100.7', { limit: 5, windowSeconds: 60 })

    const bound = DB.queries[0]?.values ?? []
    expect(bound[0]).toMatch(/^[0-9a-f]{64}$/)

    const everythingSent = JSON.stringify(DB.queries)
    expect(everythingSent).not.toContain('198.51.100.7')
    expect(everythingSent).not.toContain('contact:')
    // The salt is a secret and must not travel to the database either.
    expect(everythingSent).not.toContain('test-rate-limit-salt')
  })

  it('salts the digest, so it is not a plain hash of the IP', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const opts = { limit: 5, windowSeconds: 60 }
    await rateLimit('198.51.100.7', opts)
    const withFirstSalt = DB.queries[0]?.values[0]

    // A different deployment secret must produce a different key for the same
    // caller. If it did not, the digest would be a rainbow-table lookup away
    // from the address.
    vi.resetModules()
    DB.queries.length = 0
    process.env.RATE_LIMIT_KEY_SALT = 'a-different-secret'
    const again = await import('@/lib/rate-limit')
    await again.rateLimit('198.51.100.7', opts)

    expect(DB.queries[0]?.values[0]).not.toBe(withFirstSalt)
  })

  it('refuses the database backend in production when there is no secret salt', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    process.env.DATABASE_URL = 'postgresql://user:pw@db.example.com:5432/postgres'
    delete process.env.RATE_LIMIT_KEY_SALT
    delete process.env.IP_HASH_SALT
    delete process.env.CRON_SECRET
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    const result = await rateLimit('no-salt', { limit: 5, windowSeconds: 60 })

    // It falls to the loud, honest in-memory state rather than writing a
    // guessable key.
    expect(result.backend).toBe('memory')
    expect(result.enforced).toBe(false)
    expect(DB.prisma.$queryRaw).not.toHaveBeenCalled()
    expect(getRateLimitHealth().databaseStatus).toBe('no-key-salt')
  })

  it('derives a salt from CRON_SECRET when no dedicated salt is set', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    process.env.DATABASE_URL = 'postgresql://user:pw@db.example.com:5432/postgres'
    process.env.CRON_SECRET = 'a-real-production-cron-secret'
    vi.spyOn(console, 'warn').mockImplementation(() => {})

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    const result = await rateLimit('derived-salt', { limit: 5, windowSeconds: 60 })

    expect(result.backend).toBe('postgres')
    expect(getRateLimitHealth().databaseStatus).toBe('ready')
    // Derived, not used directly: the cron credential must not be recoverable.
    expect(JSON.stringify(DB.queries)).not.toContain('a-real-production-cron-secret')
  })
})

// ---------------------------------------------------------------------------
// Fail open. The requirement this control must not get backwards.
// ---------------------------------------------------------------------------

describe('a database fault fails OPEN, not closed', () => {
  beforeEach(() => {
    setDatabaseEnv()
    DB.dbThrows = true
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('allows the request and says plainly that nothing was enforced', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('db-down', { limit: 5, windowSeconds: 60 })

    expect(result.success).toBe(true)
    expect(result.enforced).toBe(false)
    expect(result.degradedReason).toBe('database-error')
    expect(result.resetAt).toBeGreaterThan(Date.now())
  })

  it('does not block a caller who is far over the limit while the database is down', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const opts = { limit: 1, windowSeconds: 60 }
    const results = []
    for (let i = 0; i < 10; i++) results.push(await rateLimit('flood-while-down', opts))

    // The whole point: an abuse control that refuses everyone during a blip is
    // worse than one that lets traffic through.
    expect(results.every((r) => r.success)).toBe(true)
    expect(results.every((r) => r.enforced === false)).toBe(true)
  })

  it('records the fault instead of swallowing it', async () => {
    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    await rateLimit('db-recorded', { limit: 5, windowSeconds: 60 })

    const health = getRateLimitHealth()
    expect(health.failOpenDecisions).toBe(1)
    expect(health.degradedReason).toBe('database-error')
    expect(health.lastDatabaseError?.message).toContain('connection terminated')
    expect(health.status).toBe('degraded')
  })

  it('will not claim cross-instance enforcement it has never once achieved', async () => {
    const { rateLimit, getRateLimitHealth, describeRateLimitHealth } =
      await import('@/lib/rate-limit')
    await rateLimit('db-never-worked', { limit: 5, windowSeconds: 60 })

    // This is the deploy-before-migration state: DATABASE_URL and a salt are
    // both present, so the backend LOOKS available, but rate_limit_counter
    // does not exist and every decision fails open. Reporting that as
    // "enforced, with a recent fault" would put a false sentence on a status
    // page and into the compliance document that cites it.
    const health = getRateLimitHealth()
    expect(health.databaseBacked).toBe(true)
    expect(health.enforcedDecisions).toBe(0)
    expect(health.enforcement).toBe('unproven')

    const line = describeRateLimitHealth()
    expect(line).toContain('NOT PROVEN')
    expect(line).toContain('rate_limit_counter migration')
    expect(line).not.toMatch(/\benforced across instances\b/)
  })

  it('reports cross-instance only after a decision has really been counted', async () => {
    const { rateLimit, getRateLimitHealth, describeRateLimitHealth } =
      await import('@/lib/rate-limit')

    DB.dbThrows = false
    await rateLimit('db-proves-itself', { limit: 5, windowSeconds: 60 })
    expect(getRateLimitHealth().enforcement).toBe('cross-instance')

    // A blip AFTER the backend has proven itself is a blip, not an absence:
    // the enforcement verdict holds and the status carries the fault.
    DB.dbThrows = true
    await rateLimit('db-proves-itself', { limit: 5, windowSeconds: 60 })

    const health = getRateLimitHealth()
    expect(health.enforcement).toBe('cross-instance')
    expect(health.status).toBe('degraded')
    expect(health.failOpenDecisions).toBe(1)
    expect(describeRateLimitHealth()).toContain('recent fault recorded')
  })

  it('clears the fault once the database answers again', async () => {
    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    await rateLimit('db-recover', { limit: 5, windowSeconds: 60 })
    expect(getRateLimitHealth().status).toBe('degraded')

    DB.dbThrows = false
    const recovered = await rateLimit('db-recover', { limit: 5, windowSeconds: 60 })

    expect(recovered.enforced).toBe(true)
    expect(getRateLimitHealth().status).toBe('ok')
  })
})

// ---------------------------------------------------------------------------
// Housekeeping must never affect a decision
// ---------------------------------------------------------------------------

describe('the expiry sweep is housekeeping only', () => {
  beforeEach(() => {
    setDatabaseEnv()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  it('deletes rows whose window ended over an hour ago', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0) // force the one-in-N sweep
    const { rateLimit } = await import('@/lib/rate-limit')

    store.set('stale-row', {
      bucket_key: 'stale-row',
      window_end: new Date(Date.now() - 6 * 60 * 60 * 1000),
      count: 99,
    })

    await rateLimit('sweeper', { limit: 5, windowSeconds: 60 })
    await vi.waitFor(() => expect(DB.sweeps).toBe(1))
    expect(store.has('stale-row')).toBe(false)
  })

  it('does not run on every call', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.9)
    const { rateLimit } = await import('@/lib/rate-limit')
    for (let i = 0; i < 20; i++) await rateLimit(`no-sweep-${i}`, { limit: 5, windowSeconds: 60 })
    expect(DB.sweeps).toBe(0)
    expect(DB.prisma.$executeRaw).not.toHaveBeenCalled()
  })

  it('returns a correct decision even when the sweep fails', async () => {
    vi.spyOn(Math, 'random').mockReturnValue(0)
    DB.sweepThrows = true
    const { rateLimit } = await import('@/lib/rate-limit')

    const result = await rateLimit('sweep-fails', { limit: 5, windowSeconds: 60 })
    expect(result.success).toBe(true)
    expect(result.enforced).toBe(true)
    expect(result.backend).toBe('postgres')
  })
})

// ---------------------------------------------------------------------------
// Backend order of preference
// ---------------------------------------------------------------------------

describe('backend selection', () => {
  it('prefers Redis and does not touch the database when it is configured', async () => {
    setRedisEnv()
    setDatabaseEnv()
    h.limitMock.mockResolvedValue({ success: true, remaining: 4, reset: Date.now() + 60_000 })

    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('prefers-redis', { limit: 5, windowSeconds: 60 })

    expect(result.backend).toBe('redis')
    expect(DB.prisma.$queryRaw).not.toHaveBeenCalled()
  })

  it('falls from a failing Redis to the database, not to memory', async () => {
    setRedisEnv()
    setDatabaseEnv()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    h.limitMock.mockRejectedValue(new Error('upstash unreachable'))

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    const result = await rateLimit('redis-down-db-up', { limit: 5, windowSeconds: 60 })

    expect(result.backend).toBe('postgres')
    expect(result.enforced).toBe(true)
    // The Redis fault is still on the record even though the request was
    // enforced by the other backend.
    expect(getRateLimitHealth().lastRedisError?.message).toContain('upstash unreachable')
  })

  it('falls to memory only when neither backend is available', async () => {
    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    const result = await rateLimit('no-backend', { limit: 5, windowSeconds: 60 })

    expect(result.backend).toBe('memory')
    expect(result.enforced).toBe(false)
    expect(getRateLimitHealth().databaseStatus).toBe('not-configured')
  })

  it('honours RATE_LIMIT_DB_BACKEND=off for a local run without a database write', async () => {
    setDatabaseEnv()
    process.env.RATE_LIMIT_DB_BACKEND = 'off'

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    const result = await rateLimit('db-off', { limit: 5, windowSeconds: 60 })

    expect(result.backend).toBe('memory')
    expect(DB.prisma.$queryRaw).not.toHaveBeenCalled()
    expect(getRateLimitHealth().databaseStatus).toBe('disabled')
  })
})

// ---------------------------------------------------------------------------
// Honesty of the degraded state
// ---------------------------------------------------------------------------

describe('degraded state is reported, not hidden', () => {
  it('labels every in-memory decision as unenforced, with the reason', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('honesty-1', { limit: 5, windowSeconds: 60 })
    expect(result.backend).toBe('memory')
    expect(result.enforced).toBe(false)
    expect(result.degradedReason).toBe('redis-not-configured')
  })

  it('never claims enforcement while no shared backend exists (allowed and blocked alike)', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const key = 'honesty-2'
    const results = []
    for (let i = 0; i < 6; i++) {
      results.push(await rateLimit(key, { limit: 2, windowSeconds: 60 }))
    }
    // Some of these succeeded and some were blocked. None of them was enforced.
    expect(results.some((r) => r.success)).toBe(true)
    expect(results.some((r) => !r.success)).toBe(true)
    expect(results.every((r) => r.enforced === false)).toBe(true)
    expect(results.every((r) => r.backend === 'memory')).toBe(true)
  })

  it('exposes the real state through getRateLimitHealth()', async () => {
    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    await rateLimit('health-1', { limit: 5, windowSeconds: 60 })
    const health = getRateLimitHealth()

    expect(health.configured).toBe(false)
    expect(health.databaseBacked).toBe(false)
    expect(health.status).toBe('degraded')
    expect(health.backend).toBe('memory')
    expect(health.enforcement).toBe('per-instance-only')
    expect(health.degradedReason).toBe('redis-not-configured')
    expect(health.degradedDecisions).toBeGreaterThan(0)
    expect(health.degradedSince).not.toBeNull()
    expect(health.remediation).toContain('UPSTASH_REDIS_REST_URL')
    expect(health.remediation).toContain('DATABASE_URL')
  })

  it('carries no secret in the health payload', async () => {
    setRedisEnv()
    setDatabaseEnv()
    const { getRateLimitHealth } = await import('@/lib/rate-limit')
    const payload = JSON.stringify(getRateLimitHealth())
    expect(payload).not.toContain('test-token')
    expect(payload).not.toContain('test-rate-limit-salt')
    expect(payload).not.toContain('db.example.com')
  })

  it('describes the gap in one line an operator can read', async () => {
    const { describeRateLimitHealth } = await import('@/lib/rate-limit')
    expect(describeRateLimitHealth()).toContain('NOT ENFORCED')
  })
})

// ---------------------------------------------------------------------------
// Loudness in production
// ---------------------------------------------------------------------------

describe('production degradation is loud', () => {
  it('prints an unmissable banner when the module loads with no shared backend', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    await import('@/lib/rate-limit')

    expect(error).toHaveBeenCalledTimes(1)
    const printed = String(error.mock.calls[0]?.[0] ?? '')
    expect(printed).toContain('RATE LIMITING IS NOT ENFORCED')
    expect(printed).toContain('UPSTASH_REDIS_REST_URL')
  })

  it('stays silent at startup when the database backend covers it', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    setDatabaseEnv()
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    await import('@/lib/rate-limit')

    expect(error).not.toHaveBeenCalled()
    expect(warn).not.toHaveBeenCalled()
  })

  it('raises the degradation to Sentry as an error, not just a log line', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.spyOn(console, 'error').mockImplementation(() => {})

    await import('@/lib/rate-limit')

    await vi.waitFor(() => expect(h.captureMessage).toHaveBeenCalled())
    const [message, options] = h.captureMessage.mock.calls[0] as [
      string,
      { level: string; tags: Record<string, string> },
    ]
    expect(message).toContain('not enforced')
    expect(options.level).toBe('error')
    expect(options.tags.subsystem).toBe('rate-limit')
  })

  it('does not flood the logs: one announcement covers a burst of requests', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    const { rateLimit } = await import('@/lib/rate-limit')
    for (let i = 0; i < 50; i++) {
      await rateLimit(`flood-${i}`, { limit: 5, windowSeconds: 60 })
    }

    expect(error).toHaveBeenCalledTimes(1)
  })

  it('counts every unenforced decision so the announcement carries a number', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    for (let i = 0; i < 7; i++) {
      await rateLimit(`counted-${i}`, { limit: 5, windowSeconds: 60 })
    }

    expect(getRateLimitHealth().degradedDecisions).toBe(7)
  })

  it('stays quiet outside production, where one process is the whole world', async () => {
    vi.stubEnv('NODE_ENV', 'development')
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const { rateLimit } = await import('@/lib/rate-limit')
    await rateLimit('quiet-1', { limit: 5, windowSeconds: 60 })

    expect(error).not.toHaveBeenCalled()
    expect(warn).toHaveBeenCalledTimes(1)
  })
})

// ---------------------------------------------------------------------------
// The opt-in deploy gate
// ---------------------------------------------------------------------------

describe('RATE_LIMIT_REQUIRE_REDIS deploy gate', () => {
  it('fails at startup when the gate is on and Redis is missing', async () => {
    process.env.RATE_LIMIT_REQUIRE_REDIS = 'true'
    await expect(import('@/lib/rate-limit')).rejects.toThrow(/RATE_LIMIT_REQUIRE_REDIS/)
  })

  it('is off by default, so it can never take production down by surprise', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.spyOn(console, 'error').mockImplementation(() => {})
    await expect(import('@/lib/rate-limit')).resolves.toBeDefined()
  })

  it('does not fire when Redis is configured', async () => {
    setRedisEnv()
    process.env.RATE_LIMIT_REQUIRE_REDIS = 'true'
    await expect(import('@/lib/rate-limit')).resolves.toBeDefined()
  })

  it('still demands Redis specifically, even with the database backend live', async () => {
    // The gate is about the PREFERRED backend. Postgres is enforced and
    // sufficient, which is why the flag stays off by default rather than being
    // widened to "any shared backend".
    setDatabaseEnv()
    process.env.RATE_LIMIT_REQUIRE_REDIS = 'true'
    await expect(import('@/lib/rate-limit')).rejects.toThrow(/RATE_LIMIT_REQUIRE_REDIS/)
  })
})

// ---------------------------------------------------------------------------
// The Redis path
// ---------------------------------------------------------------------------

describe('rateLimit (Redis configured)', () => {
  it('marks a Redis decision as enforced', async () => {
    setRedisEnv()
    h.limitMock.mockResolvedValue({ success: true, remaining: 4, reset: Date.now() + 60_000 })

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    const result = await rateLimit('redis-1', { limit: 5, windowSeconds: 60 })

    expect(result.success).toBe(true)
    expect(result.backend).toBe('redis')
    expect(result.enforced).toBe(true)
    expect(result.degradedReason).toBeUndefined()

    const health = getRateLimitHealth()
    expect(health.status).toBe('ok')
    expect(health.enforcement).toBe('cross-instance')
    expect(health.remediation).toBeNull()
  })

  it('degrades to memory instead of throwing when Redis fails and there is no database', async () => {
    setRedisEnv()
    vi.stubEnv('NODE_ENV', 'production')
    vi.spyOn(console, 'error').mockImplementation(() => {})
    h.limitMock.mockRejectedValue(new Error('upstash unreachable'))

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    const result = await rateLimit('redis-down', { limit: 5, windowSeconds: 60 })

    expect(result.success).toBe(true)
    expect(result.backend).toBe('memory')
    expect(result.enforced).toBe(false)
    expect(result.degradedReason).toBe('redis-error')

    const health = getRateLimitHealth()
    expect(health.status).toBe('degraded')
    expect(health.lastRedisError?.message).toContain('upstash unreachable')
  })

  it('clears the degradation once Redis answers again', async () => {
    setRedisEnv()
    vi.stubEnv('NODE_ENV', 'production')
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')

    h.limitMock.mockRejectedValueOnce(new Error('transient'))
    await rateLimit('recover-1', { limit: 5, windowSeconds: 60 })
    expect(getRateLimitHealth().status).toBe('degraded')

    h.limitMock.mockResolvedValue({ success: true, remaining: 4, reset: Date.now() + 60_000 })
    await rateLimit('recover-1', { limit: 5, windowSeconds: 60 })
    expect(getRateLimitHealth().status).toBe('ok')
  })
})

// ---------------------------------------------------------------------------
// The fallback store must not become a memory-exhaustion vector
// ---------------------------------------------------------------------------

describe('in-memory store is bounded', () => {
  it('evicts rather than growing without limit under key spraying', async () => {
    const { rateLimit, getRateLimitHealth } = await import('@/lib/rate-limit')
    for (let i = 0; i < 20_030; i++) {
      await rateLimit(`spray-${i}`, { limit: 5, windowSeconds: 600 })
    }
    const health = getRateLimitHealth()
    expect(health.memoryKeys).toBeLessThanOrEqual(20_000)
    // Eviction is itself a bypass, which is recorded so it can be seen.
    expect(health.memoryEvictions).toBeGreaterThan(0)
  })
})

// ---------------------------------------------------------------------------
// Scope: this module grants nothing
// ---------------------------------------------------------------------------

describe('the limiter is not a permission system', () => {
  it('returns no field that could be read as consent or entitlement', async () => {
    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('scope-1', { limit: 5, windowSeconds: 60 })
    const keys = Object.keys(result).sort()
    expect(keys).toEqual([
      'backend',
      'degradedReason',
      'enforced',
      'remaining',
      'resetAt',
      'success',
    ])
  })

  it('returns the same shape from the database backend', async () => {
    setDatabaseEnv()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const { rateLimit } = await import('@/lib/rate-limit')
    const result = await rateLimit('scope-2', { limit: 5, windowSeconds: 60 })
    expect(Object.keys(result).sort()).toEqual([
      'backend',
      'enforced',
      'remaining',
      'resetAt',
      'success',
    ])
  })

  it('imports nothing from the consent, auth or account layers', async () => {
    const source = readFileSync(join(process.cwd(), 'src/lib/rate-limit.ts'), 'utf8')
    const specifiers = [...source.matchAll(/(?:from|import)\s*\(?\s*['"]([^'"]+)['"]/g)].map(
      (m) => m[1] ?? '',
    )
    expect(specifiers.some((s) => /consent|parental|account|supabase|auth/i.test(s))).toBe(false)
  })

  it('reaches the database only through a dynamic import, so 164 route bundles do not carry Prisma', async () => {
    const source = readFileSync(join(process.cwd(), 'src/lib/rate-limit.ts'), 'utf8')
    const staticImports = source.match(/^import .*$/gm) ?? []
    expect(staticImports.some((line) => /prisma/i.test(line))).toBe(false)
    expect(source).toContain("await import('@/lib/prisma')")
  })
})

// ---------------------------------------------------------------------------
// The compliance statement must match the code
// ---------------------------------------------------------------------------

describe('the documented control status matches reality', () => {
  const doc = () =>
    readFileSync(
      join(process.cwd(), 'business-docs/compliance/controls/rate-limiting-control-status.md'),
      'utf8',
    )

  it('no longer says the control is unenforced pending a Vercel change', () => {
    expect(doc()).not.toContain('**Status: NOT ENFORCED in production.**')
    expect(doc()).not.toContain('This is an environment change, not a code change.')
  })

  it('names the backend that actually enforces it, and the table it writes to', () => {
    const text = doc()
    expect(text).toContain('rate_limit_counter')
    expect(text).toContain('fixed window')
    expect(text).toContain('UPSTASH_REDIS_REST_URL')
  })

  it('still states the fail-open behaviour, which a reader must not be surprised by', () => {
    expect(doc()).toContain('fails open')
  })
})

// ---------------------------------------------------------------------------

describe('getClientIp', () => {
  it('extracts IP from x-forwarded-for', async () => {
    const { getClientIp } = await import('@/lib/rate-limit')
    const headers = new Headers({ 'x-forwarded-for': '192.168.1.1' })
    expect(getClientIp(headers)).toBe('192.168.1.1')
  })

  it('extracts IP from x-real-ip', async () => {
    const { getClientIp } = await import('@/lib/rate-limit')
    const headers = new Headers({ 'x-real-ip': '10.0.0.1' })
    expect(getClientIp(headers)).toBe('10.0.0.1')
  })

  it('returns unknown for missing headers', async () => {
    const { getClientIp } = await import('@/lib/rate-limit')
    const headers = new Headers()
    expect(getClientIp(headers)).toBe('unknown')
  })

  it('takes first IP from x-forwarded-for chain', async () => {
    const { getClientIp } = await import('@/lib/rate-limit')
    const headers = new Headers({ 'x-forwarded-for': '1.2.3.4, 5.6.7.8, 9.10.11.12' })
    expect(getClientIp(headers)).toBe('1.2.3.4')
  })
})

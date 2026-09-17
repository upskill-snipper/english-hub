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

function clearRedisEnv() {
  delete process.env.UPSTASH_REDIS_REST_URL
  delete process.env.UPSTASH_REDIS_REST_TOKEN
  delete process.env.RATE_LIMIT_REQUIRE_REDIS
}

function setRedisEnv() {
  process.env.UPSTASH_REDIS_REST_URL = 'https://example.upstash.io'
  process.env.UPSTASH_REDIS_REST_TOKEN = 'test-token'
}

beforeEach(() => {
  vi.resetModules()
  vi.clearAllMocks()
  clearRedisEnv()
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.restoreAllMocks()
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

  it('never claims enforcement while Redis is absent (allowed and blocked alike)', async () => {
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
    expect(health.status).toBe('degraded')
    expect(health.backend).toBe('memory')
    expect(health.enforcement).toBe('per-instance-only')
    expect(health.degradedReason).toBe('redis-not-configured')
    expect(health.degradedDecisions).toBeGreaterThan(0)
    expect(health.degradedSince).not.toBeNull()
    expect(health.remediation).toContain('UPSTASH_REDIS_REST_URL')
  })

  it('carries no secret in the health payload', async () => {
    setRedisEnv()
    const { getRateLimitHealth } = await import('@/lib/rate-limit')
    expect(JSON.stringify(getRateLimitHealth())).not.toContain('test-token')
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
  it('prints an unmissable banner when the module loads without Redis', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    const error = vi.spyOn(console, 'error').mockImplementation(() => {})

    await import('@/lib/rate-limit')

    expect(error).toHaveBeenCalledTimes(1)
    const printed = String(error.mock.calls[0]?.[0] ?? '')
    expect(printed).toContain('RATE LIMITING IS NOT ENFORCED')
    expect(printed).toContain('UPSTASH_REDIS_REST_URL')
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

  it('degrades to memory instead of throwing when Redis fails', async () => {
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

  it('imports nothing from the consent, auth or account layers', async () => {
    const source = readFileSync(join(process.cwd(), 'src/lib/rate-limit.ts'), 'utf8')
    const imports = source.match(/^import .*$/gm) ?? []
    expect(imports.some((line) => /consent|parental|account|prisma|supabase/i.test(line))).toBe(
      false,
    )
  })
})

// ---------------------------------------------------------------------------
// The compliance statement must match the code
// ---------------------------------------------------------------------------

describe('the documented control status matches reality', () => {
  it('the canonical status document still says the control is not enforced', () => {
    const doc = readFileSync(
      join(process.cwd(), 'business-docs/compliance/controls/rate-limiting-control-status.md'),
      'utf8',
    )
    expect(doc).toContain('NOT ENFORCED')
    expect(doc).toContain('UPSTASH_REDIS_REST_URL')
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

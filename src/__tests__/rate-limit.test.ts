import { describe, it, expect, vi, beforeEach } from 'vitest'

// Test the in-memory fallback (no Redis env vars set)
describe('rateLimit (in-memory fallback)', () => {
  beforeEach(() => {
    // Ensure no Redis env vars
    delete process.env.UPSTASH_REDIS_REST_URL
    delete process.env.UPSTASH_REDIS_REST_TOKEN
    vi.resetModules()
  })

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

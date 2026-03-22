import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { rateLimit } from '@/lib/rate-limit'

describe('rateLimit', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns success within limit', () => {
    const key = 'test-success-' + Date.now()
    const result = rateLimit(key, { limit: 5, windowSeconds: 60 })
    expect(result.success).toBe(true)
    expect(result.remaining).toBe(4)
  })

  it('returns failure when limit is exceeded', () => {
    const key = 'test-exceeded-' + Date.now()
    const opts = { limit: 3, windowSeconds: 60 }

    // Use up the limit
    rateLimit(key, opts) // 1
    rateLimit(key, opts) // 2
    rateLimit(key, opts) // 3

    // 4th call should fail
    const result = rateLimit(key, opts)
    expect(result.success).toBe(false)
    expect(result.remaining).toBe(0)
  })

  it('tracks remaining count correctly', () => {
    const key = 'test-remaining-' + Date.now()
    const opts = { limit: 5, windowSeconds: 60 }

    const r1 = rateLimit(key, opts)
    expect(r1.remaining).toBe(4)

    const r2 = rateLimit(key, opts)
    expect(r2.remaining).toBe(3)

    const r3 = rateLimit(key, opts)
    expect(r3.remaining).toBe(2)

    const r4 = rateLimit(key, opts)
    expect(r4.remaining).toBe(1)

    const r5 = rateLimit(key, opts)
    expect(r5.remaining).toBe(0)
    expect(r5.success).toBe(true)

    // 6th should fail
    const r6 = rateLimit(key, opts)
    expect(r6.success).toBe(false)
    expect(r6.remaining).toBe(0)
  })

  it('resets after window expires', () => {
    const key = 'test-reset-' + Date.now()
    const opts = { limit: 2, windowSeconds: 10 }

    rateLimit(key, opts) // 1
    rateLimit(key, opts) // 2
    const blocked = rateLimit(key, opts)
    expect(blocked.success).toBe(false)

    // Advance past the window
    vi.advanceTimersByTime(11_000)

    // Should be allowed again
    const afterReset = rateLimit(key, opts)
    expect(afterReset.success).toBe(true)
    expect(afterReset.remaining).toBe(1)
  })

  it('different keys do not interfere with each other', () => {
    const keyA = 'test-key-a-' + Date.now()
    const keyB = 'test-key-b-' + Date.now()
    const opts = { limit: 2, windowSeconds: 60 }

    // Exhaust key A
    rateLimit(keyA, opts)
    rateLimit(keyA, opts)
    const blockedA = rateLimit(keyA, opts)
    expect(blockedA.success).toBe(false)

    // Key B should still work
    const resultB = rateLimit(keyB, opts)
    expect(resultB.success).toBe(true)
    expect(resultB.remaining).toBe(1)
  })

  it('returns resetAt timestamp in the future', () => {
    const key = 'test-resetat-' + Date.now()
    const result = rateLimit(key, { limit: 10, windowSeconds: 300 })
    expect(result.resetAt).toBeGreaterThan(Date.now())
  })
})

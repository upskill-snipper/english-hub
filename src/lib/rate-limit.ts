/**
 * Simple in-memory rate limiter for API routes.
 * Uses a sliding window approach. Suitable for single-instance deployments.
 * For multi-instance (serverless), consider Vercel KV or Upstash Redis.
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

const store = new Map<string, RateLimitEntry>()

// Periodic cleanup to prevent memory leaks
const CLEANUP_INTERVAL = 60_000 // 1 minute
let lastCleanup = Date.now()

function cleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  lastCleanup = now
  store.forEach((entry, key) => {
    if (entry.resetAt < now) store.delete(key)
  })
}

interface RateLimitOptions {
  /** Maximum requests allowed in the window */
  limit: number
  /** Window duration in seconds */
  windowSeconds: number
}

interface RateLimitResult {
  success: boolean
  remaining: number
  resetAt: number
}

/**
 * Check rate limit for a given key (typically IP or user ID).
 */
export function rateLimit(
  key: string,
  options: RateLimitOptions
): RateLimitResult {
  cleanup()

  const now = Date.now()
  const windowMs = options.windowSeconds * 1000
  const existing = store.get(key)

  if (!existing || existing.resetAt < now) {
    // New window
    const entry: RateLimitEntry = {
      count: 1,
      resetAt: now + windowMs,
    }
    store.set(key, entry)
    return { success: true, remaining: options.limit - 1, resetAt: entry.resetAt }
  }

  existing.count++

  if (existing.count > options.limit) {
    return { success: false, remaining: 0, resetAt: existing.resetAt }
  }

  return {
    success: true,
    remaining: options.limit - existing.count,
    resetAt: existing.resetAt,
  }
}

/**
 * Extract client IP from Next.js request headers.
 */
export function getClientIp(headers: Headers): string {
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    'unknown'
  )
}

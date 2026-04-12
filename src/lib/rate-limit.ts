/**
 * Redis-backed rate limiter for API routes using Upstash.
 * Works correctly across serverless function instances on Vercel.
 *
 * Falls back to a simple in-memory limiter if Redis is not configured,
 * so the app still works in local development without Redis.
 */

import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

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
// In-memory fallback for local dev (same logic as before)
// ---------------------------------------------------------------------------

interface RateLimitEntry {
  count: number
  resetAt: number
}

const memStore = new Map<string, RateLimitEntry>()
const CLEANUP_INTERVAL = 60_000
let lastCleanup = Date.now()

function memCleanup() {
  const now = Date.now()
  if (now - lastCleanup < CLEANUP_INTERVAL) return
  lastCleanup = now
  memStore.forEach((entry, key) => {
    if (entry.resetAt < now) memStore.delete(key)
  })
}

function memRateLimit(
  key: string,
  options: RateLimitOptions
): RateLimitResult {
  memCleanup()
  const now = Date.now()
  const windowMs = options.windowSeconds * 1000
  const existing = memStore.get(key)

  if (!existing || existing.resetAt < now) {
    const entry: RateLimitEntry = { count: 1, resetAt: now + windowMs }
    memStore.set(key, entry)
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

// ---------------------------------------------------------------------------
// Public API (same interface — drop-in replacement)
// ---------------------------------------------------------------------------

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

// Cache of Upstash Ratelimit instances keyed by "limit:window"
const rlCache = new Map<string, Ratelimit>()

/**
 * Check rate limit for a given key (typically IP or user ID).
 * Uses Upstash Redis when configured, falls back to in-memory for local dev.
 */
export async function rateLimit(
  key: string,
  options: RateLimitOptions
): Promise<RateLimitResult> {
  const client = getRedis()

  if (!client) {
    // Fallback to in-memory — only suitable for local dev.
    // In production serverless, each instance has its own Map so rate
    // limiting is effectively disabled.
    if (process.env.NODE_ENV === 'production') {
      console.error('[rate-limit] CRITICAL: Redis not configured — rate limiting is non-functional in production')
    }
    return memRateLimit(key, options)
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

  const result = await limiter.limit(key)

  return {
    success: result.success,
    remaining: result.remaining,
    resetAt: result.reset,
  }
}

/**
 * Extract client IP from Next.js request headers.
 */
/**
 * Extract client IP from request headers.
 * Prefer `x-real-ip` (set by Vercel/reverse proxy, not spoofable)
 * over `x-forwarded-for` (can be spoofed by clients).
 */
export function getClientIp(headers: Headers): string {
  return (
    headers.get('x-real-ip') ||
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  )
}

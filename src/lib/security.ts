import crypto from 'crypto'

// ─── Security Utilities ───────────────────────────────────────────────
// CSRF protection, input sanitisation, and privacy-safe helpers for
// an application that handles children's data (UK GDPR / Age-Appropriate
// Design Code considerations).

// ─── CSRF Tokens ───────────────────────────────────────────────────────

const CSRF_SECRET = process.env.CSRF_SECRET || ''
const CSRF_TOKEN_EXPIRY_MS = 60 * 60 * 1000 // 1 hour

interface CSRFPayload {
  nonce: string
  exp: number
}

/**
 * Generate a CSRF token.
 * Format: base64(JSON payload) + "." + HMAC signature
 */
export function generateCSRFToken(): string {
  if (!CSRF_SECRET) {
    throw new Error('CSRF_SECRET must be set in environment variables')
  }

  const payload: CSRFPayload = {
    nonce: crypto.randomBytes(32).toString('hex'),
    exp: Date.now() + CSRF_TOKEN_EXPIRY_MS,
  }

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url')
  const signature = crypto.createHmac('sha256', CSRF_SECRET).update(payloadB64).digest('base64url')

  return `${payloadB64}.${signature}`
}

/**
 * Validate a CSRF token. Returns true only if the signature is valid and
 * the token has not expired.
 */
export function validateCSRFToken(token: string): boolean {
  if (!CSRF_SECRET || !token) return false

  const parts = token.split('.')
  if (parts.length !== 2) return false

  const [payloadB64, providedSignature] = parts

  // Verify signature
  const expectedSignature = crypto
    .createHmac('sha256', CSRF_SECRET)
    .update(payloadB64)
    .digest('base64url')

  const sigBuffer = Buffer.from(providedSignature, 'base64url')
  const expectedBuffer = Buffer.from(expectedSignature, 'base64url')

  if (
    sigBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(sigBuffer, expectedBuffer)
  ) {
    return false
  }

  // Check expiry
  try {
    const payload: CSRFPayload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf-8'))
    return payload.exp > Date.now()
  } catch {
    return false
  }
}

// ─── Input Sanitisation ────────────────────────────────────────────────

const HTML_ENTITY_MAP: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;',
  '`': '&#96;',
}

/**
 * Basic XSS prevention via HTML entity encoding.
 * This is a defence-in-depth measure - React already escapes output,
 * but we sanitise on input for data that may be rendered in emails,
 * PDFs, or other non-React contexts.
 */
export function sanitizeInput(input: string): string {
  return input.replace(/[&<>"'`/]/g, (char) => HTML_ENTITY_MAP[char] || char)
}

// ─── Email Validation ──────────────────────────────────────────────────

/**
 * Validate email format. Uses a practical regex that covers the vast
 * majority of real-world addresses without being overly permissive.
 */
export function validateEmail(email: string): boolean {
  if (!email || email.length > 254) return false

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/

  return emailRegex.test(email)
}

// ─── IP Hashing ────────────────────────────────────────────────────────

const IP_HASH_SALT =
  process.env.IP_HASH_SALT ||
  (process.env.NODE_ENV === 'production'
    ? (() => {
        console.warn(
          '[security] IP_HASH_SALT not set - using fallback. Set this env var in production.',
        )
        return 'the-english-hub-ip-salt'
      })()
    : 'the-english-hub-ip-salt-dev')

/**
 * Hash an IP address for privacy-compliant logging.
 * Uses SHA-256 with a salt so the original IP cannot be recovered,
 * but the same IP will always produce the same hash (useful for
 * rate-limit correlation in logs without storing raw IPs).
 */
export function hashIP(ip: string): string {
  return crypto.createHash('sha256').update(`${IP_HASH_SALT}:${ip}`).digest('hex').slice(0, 16) // Truncate - we only need collision-resistance for logging
}

// ─── Reference Number Generator ────────────────────────────────────────

/**
 * Generate a reference number with a given prefix.
 *
 * Format: PREFIX-YYYYMMDD-XXXXX
 * Examples: HR-20260322-A3F7B, DSAR-20260322-9K2M1, SR-20260322-P8Q4R
 *
 * @param prefix - e.g. "HR", "DSAR", "SR"
 */
export function generateReferenceNumber(prefix: string): string {
  const now = new Date()
  const datePart = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('')

  const randomPart = crypto.randomBytes(4).toString('hex').toUpperCase().slice(0, 5)

  return `${prefix}-${datePart}-${randomPart}`
}

// ─── Request Helpers ───────────────────────────────────────────────────

/**
 * Extract the client IP from a Next.js request, checking common headers
 * set by reverse proxies (Vercel, Cloudflare, nginx).
 */
export function getClientIP(request: Request): string {
  const headers = request.headers

  // Vercel / generic proxy
  const forwarded = headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  // Cloudflare
  const cfIP = headers.get('cf-connecting-ip')
  if (cfIP) return cfIP

  // Fallback
  const realIP = headers.get('x-real-ip')
  if (realIP) return realIP

  return 'unknown'
}

import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'

// We need to set the env var before importing the module so the top-level
// `const CSRF_SECRET` picks it up.
const TEST_SECRET = 'test-csrf-secret-32-chars-long!!'

describe('Security utilities (security.ts)', () => {
  let generateCSRFToken: typeof import('@/lib/security').generateCSRFToken
  let validateCSRFToken: typeof import('@/lib/security').validateCSRFToken
  let sanitizeInput: typeof import('@/lib/security').sanitizeInput
  let validateEmail: typeof import('@/lib/security').validateEmail
  let hashIP: typeof import('@/lib/security').hashIP
  let generateReferenceNumber: typeof import('@/lib/security').generateReferenceNumber
  let getClientIP: typeof import('@/lib/security').getClientIP

  beforeEach(async () => {
    vi.resetModules()
    process.env.CSRF_SECRET = TEST_SECRET
    const mod = await import('@/lib/security')
    generateCSRFToken = mod.generateCSRFToken
    validateCSRFToken = mod.validateCSRFToken
    sanitizeInput = mod.sanitizeInput
    validateEmail = mod.validateEmail
    hashIP = mod.hashIP
    generateReferenceNumber = mod.generateReferenceNumber
    getClientIP = mod.getClientIP
  })

  afterEach(() => {
    delete process.env.CSRF_SECRET
  })

  // ── CSRF Tokens ──────────────────────────────────────────────────────

  describe('generateCSRFToken', () => {
    it('produces a token in payload.signature format', () => {
      const token = generateCSRFToken()
      const parts = token.split('.')
      expect(parts).toHaveLength(2)
      expect(parts[0].length).toBeGreaterThan(0)
      expect(parts[1].length).toBeGreaterThan(0)
    })

    it('generates unique tokens on successive calls', () => {
      const a = generateCSRFToken()
      const b = generateCSRFToken()
      expect(a).not.toBe(b)
    })

    it('throws when CSRF_SECRET is not set', async () => {
      vi.resetModules()
      delete process.env.CSRF_SECRET
      const mod = await import('@/lib/security')
      expect(() => mod.generateCSRFToken()).toThrow('CSRF_SECRET')
    })
  })

  describe('validateCSRFToken', () => {
    it('accepts a freshly generated token', () => {
      const token = generateCSRFToken()
      expect(validateCSRFToken(token)).toBe(true)
    })

    it('rejects an empty string', () => {
      expect(validateCSRFToken('')).toBe(false)
    })

    it('rejects a malformed token (no dot)', () => {
      expect(validateCSRFToken('nodothere')).toBe(false)
    })

    it('rejects a token with a tampered payload', () => {
      const token = generateCSRFToken()
      const [, sig] = token.split('.')
      const fakePayload = Buffer.from(JSON.stringify({ nonce: 'fake', exp: Date.now() + 99999 })).toString('base64url')
      expect(validateCSRFToken(`${fakePayload}.${sig}`)).toBe(false)
    })

    it('rejects a token with a tampered signature', () => {
      const token = generateCSRFToken()
      const [payload] = token.split('.')
      expect(validateCSRFToken(`${payload}.tampered_signature`)).toBe(false)
    })

    it('rejects an expired token', async () => {
      // Generate a token, then forge its expiry to the past
      vi.resetModules()
      process.env.CSRF_SECRET = TEST_SECRET
      const mod = await import('@/lib/security')

      // We can't easily test expiry without time manipulation, but we
      // can verify that a token with exp in the past fails. We'll construct
      // one manually.
      const crypto = await import('crypto')
      const payload = { nonce: crypto.randomBytes(32).toString('hex'), exp: Date.now() - 1000 }
      const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64url')
      const signature = crypto
        .createHmac('sha256', TEST_SECRET)
        .update(payloadB64)
        .digest('base64url')

      expect(mod.validateCSRFToken(`${payloadB64}.${signature}`)).toBe(false)
    })
  })

  // ── Input Sanitisation ────────────────────────────────────────────────

  describe('sanitizeInput', () => {
    it('escapes angle brackets', () => {
      expect(sanitizeInput('<script>')).toBe('&lt;script&gt;')
    })

    it('escapes ampersand', () => {
      expect(sanitizeInput('a & b')).toBe('a &amp; b')
    })

    it('escapes double quotes', () => {
      expect(sanitizeInput('"hello"')).toBe('&quot;hello&quot;')
    })

    it('escapes single quotes', () => {
      expect(sanitizeInput("it's")).toBe("it&#x27;s")
    })

    it('escapes backticks and forward slashes', () => {
      expect(sanitizeInput('`/`')).toBe('&#96;&#x2F;&#96;')
    })

    it('leaves clean text unchanged', () => {
      expect(sanitizeInput('Hello World 123!')).toBe('Hello World 123!')
    })
  })

  // ── Email Validation ──────────────────────────────────────────────────

  describe('validateEmail', () => {
    it('accepts a standard email', () => {
      expect(validateEmail('test@example.com')).toBe(true)
    })

    it('accepts emails with subdomains', () => {
      expect(validateEmail('user@mail.example.co.uk')).toBe(true)
    })

    it('rejects empty string', () => {
      expect(validateEmail('')).toBe(false)
    })

    it('rejects email without @', () => {
      expect(validateEmail('not-an-email')).toBe(false)
    })

    it('rejects email without domain', () => {
      expect(validateEmail('user@')).toBe(false)
    })

    it('rejects email without TLD', () => {
      expect(validateEmail('user@localhost')).toBe(false)
    })

    it('rejects email longer than 254 characters', () => {
      const longLocal = 'a'.repeat(243)
      // 243 + '@' + 'example.com' = 243 + 1 + 11 = 255 chars (> 254)
      expect(validateEmail(`${longLocal}@example.com`)).toBe(false)
    })
  })

  // ── IP Hashing ────────────────────────────────────────────────────────

  describe('hashIP', () => {
    it('produces a 16-character hex string', () => {
      const hash = hashIP('192.168.1.1')
      expect(hash).toMatch(/^[0-9a-f]{16}$/)
    })

    it('is deterministic for the same IP', () => {
      expect(hashIP('10.0.0.1')).toBe(hashIP('10.0.0.1'))
    })

    it('produces different hashes for different IPs', () => {
      expect(hashIP('10.0.0.1')).not.toBe(hashIP('10.0.0.2'))
    })
  })

  // ── Reference Number ──────────────────────────────────────────────────

  describe('generateReferenceNumber', () => {
    it('follows PREFIX-YYYYMMDD-XXXXX format', () => {
      const ref = generateReferenceNumber('HR')
      expect(ref).toMatch(/^HR-\d{8}-[0-9A-F]{5}$/)
    })

    it('uses the provided prefix', () => {
      const ref = generateReferenceNumber('DSAR')
      expect(ref.startsWith('DSAR-')).toBe(true)
    })

    it('generates unique references', () => {
      const refs = new Set(Array.from({ length: 20 }, () => generateReferenceNumber('T')))
      expect(refs.size).toBe(20)
    })
  })

  // ── getClientIP ───────────────────────────────────────────────────────

  describe('getClientIP', () => {
    it('extracts IP from x-forwarded-for', () => {
      const req = new Request('http://localhost', {
        headers: { 'x-forwarded-for': '1.2.3.4, 5.6.7.8' },
      })
      expect(getClientIP(req)).toBe('1.2.3.4')
    })

    it('falls back to cf-connecting-ip', () => {
      const req = new Request('http://localhost', {
        headers: { 'cf-connecting-ip': '9.8.7.6' },
      })
      expect(getClientIP(req)).toBe('9.8.7.6')
    })

    it('falls back to x-real-ip', () => {
      const req = new Request('http://localhost', {
        headers: { 'x-real-ip': '11.22.33.44' },
      })
      expect(getClientIP(req)).toBe('11.22.33.44')
    })

    it('returns "unknown" when no headers are present', () => {
      const req = new Request('http://localhost')
      expect(getClientIP(req)).toBe('unknown')
    })

    it('prefers x-forwarded-for over other headers', () => {
      const req = new Request('http://localhost', {
        headers: {
          'x-forwarded-for': '1.1.1.1',
          'cf-connecting-ip': '2.2.2.2',
          'x-real-ip': '3.3.3.3',
        },
      })
      expect(getClientIP(req)).toBe('1.1.1.1')
    })
  })
})

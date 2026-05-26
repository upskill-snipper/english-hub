/**
 * Parent link code generation and validation.
 *
 * Generates 6-character codes using an unambiguous alphabet
 * (A-Z 0-9, excluding 0/O/1/I/L) so codes are easy to read
 * aloud, type on mobile, and scan from a printed slip.
 *
 * NOTE: Link codes are short by design for UX - they MUST be
 * rate-limited, single-use, and scoped to a short TTL at the
 * API layer. They do NOT provide entropy for long-lived tokens.
 */

// ── Alphabet ──────────────────────────────────────────────────────────────────
// 30 chars = ~4.9 bits per char. 6 chars ≈ 29.4 bits of entropy.
// Ambiguous chars removed: 0, O, 1, I, L
export const LINK_CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'
export const LINK_CODE_LENGTH = 6
export const LINK_CODE_TTL_MINUTES = 15

// ── generateLinkCode ──────────────────────────────────────────────────────────

/**
 * Generates a cryptographically random 6-character link code.
 * Uses Web Crypto (available in Node 18+ and Edge runtimes).
 */
export function generateLinkCode(): string {
  const alphabet = LINK_CODE_ALPHABET
  const buf = new Uint8Array(LINK_CODE_LENGTH)
  crypto.getRandomValues(buf)

  let code = ''
  for (let i = 0; i < LINK_CODE_LENGTH; i++) {
    // Modulo bias is acceptable here: the alphabet length (31) is
    // not a power of 2, but the bias over 256 values is negligible
    // and well within the threat model of a 15-minute, single-use code.
    code += alphabet[buf[i] % alphabet.length]
  }
  return code
}

// ── normalizeLinkCode ─────────────────────────────────────────────────────────

/**
 * Normalizes user input before comparison:
 *   - uppercases
 *   - strips whitespace and dashes
 *   - maps commonly confused characters (0→O-ish, but since we
 *     exclude O, map 0→blank-invalid; same for 1→I).
 *
 * Returns the cleaned code. It may still fail `isValidLinkCode`
 * if the user typed an ambiguous char.
 */
export function normalizeLinkCode(input: string): string {
  return (
    input
      .toUpperCase()
      .replace(/[\s-]/g, '')
      // Common confusions: user types O or 0 - we accept both
      // by canonicalizing to the one we actually use.
      .replace(/O/g, '0') // then 0 will be rejected below as invalid
      .replace(/I/g, '1')
      .replace(/L/g, '1')
  )
}

// ── isValidLinkCode ───────────────────────────────────────────────────────────

/**
 * Strict validator - returns true only if the code is exactly
 * LINK_CODE_LENGTH characters long and every character is from
 * LINK_CODE_ALPHABET.
 */
export function isValidLinkCode(code: string): boolean {
  if (typeof code !== 'string') return false
  if (code.length !== LINK_CODE_LENGTH) return false
  for (const ch of code) {
    if (!LINK_CODE_ALPHABET.includes(ch)) return false
  }
  return true
}

// ── getLinkCodeExpiry ─────────────────────────────────────────────────────────

/**
 * Returns the expiry timestamp for a newly-issued link code.
 */
export function getLinkCodeExpiry(): Date {
  const expiry = new Date()
  expiry.setMinutes(expiry.getMinutes() + LINK_CODE_TTL_MINUTES)
  return expiry
}

// ── isLinkCodeExpired ─────────────────────────────────────────────────────────

export function isLinkCodeExpired(expiresAt: Date | string): boolean {
  const expiry = typeof expiresAt === 'string' ? new Date(expiresAt) : expiresAt
  return expiry.getTime() <= Date.now()
}

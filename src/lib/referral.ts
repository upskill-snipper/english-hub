/**
 * Teacher referral code utilities.
 *
 * Code format: TEACHER-SURNAME-XXXXXX
 * where SURNAME is the teacher's last name (uppercased, max 10 chars)
 * and XXXXXX is a random alphanumeric string.
 */

const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789' // no I/O/0/1 to avoid confusion

function randomAlphanumeric(length: number): string {
  let result = ''
  const array = new Uint8Array(length)
  crypto.getRandomValues(array)
  for (let i = 0; i < array.length; i++) {
    result += ALPHABET[array[i] % ALPHABET.length]
  }
  return result
}

/**
 * Generate a teacher referral code from their full name.
 *
 * @example generateReferralCode('John Smith') => 'TEACHER-SMITH-A3K9X2'
 */
export function generateReferralCode(fullName: string): string {
  const parts = fullName.trim().split(/\s+/)
  const surname = (parts[parts.length - 1] || 'TEACHER')
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .slice(0, 10)

  const suffix = randomAlphanumeric(6)
  return `TEACHER-${surname || 'TEACHER'}-${suffix}`
}

/**
 * Validate referral code format. Returns true if the code matches
 * the expected TEACHER-XXXX-XXXXXX pattern.
 */
export function isValidReferralCodeFormat(code: string): boolean {
  return /^TEACHER-[A-Z]{1,10}-[A-Z2-9]{6}$/.test(code.toUpperCase())
}

/**
 * Normalise a referral code for storage and comparison.
 */
export function normaliseReferralCode(code: string): string {
  return code.toUpperCase().trim()
}

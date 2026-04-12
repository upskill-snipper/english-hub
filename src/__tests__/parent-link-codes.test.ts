import { describe, it, expect } from 'vitest'
import {
  generateLinkCode,
  normalizeLinkCode,
  isValidLinkCode,
  LINK_CODE_ALPHABET,
  LINK_CODE_LENGTH,
} from '@/lib/parent/link-codes'

// ── generateLinkCode ─────────────────────────────────────────────────────────

describe('generateLinkCode', () => {
  it('returns a string of LINK_CODE_LENGTH characters', () => {
    const code = generateLinkCode()
    expect(code).toHaveLength(LINK_CODE_LENGTH)
  })

  it('contains only characters from the allowed alphabet', () => {
    // Run multiple times to reduce fluke passes
    for (let i = 0; i < 20; i++) {
      const code = generateLinkCode()
      for (const ch of code) {
        expect(LINK_CODE_ALPHABET).toContain(ch)
      }
    }
  })

  it('returns uppercase characters', () => {
    const code = generateLinkCode()
    expect(code).toBe(code.toUpperCase())
  })

  it('generates different codes on successive calls', () => {
    const codes = new Set(Array.from({ length: 50 }, () => generateLinkCode()))
    // With ~29 bits of entropy, 50 codes should all be unique
    expect(codes.size).toBe(50)
  })
})

// ── normalizeLinkCode ────────────────────────────────────────────────────────

describe('normalizeLinkCode', () => {
  it('converts lowercase to uppercase', () => {
    expect(normalizeLinkCode('abcdef')).toBe('ABCDEF')
  })

  it('strips whitespace', () => {
    expect(normalizeLinkCode('AB CD EF')).toBe('ABCDEF')
  })

  it('strips dashes', () => {
    expect(normalizeLinkCode('AB-CD-EF')).toBe('ABCDEF')
  })

  it('maps O to 0', () => {
    expect(normalizeLinkCode('OAAAAA')).toBe('0AAAAA')
  })

  it('maps I to 1', () => {
    expect(normalizeLinkCode('IAAAAA')).toBe('1AAAAA')
  })

  it('maps L to 1', () => {
    expect(normalizeLinkCode('LAAAAA')).toBe('1AAAAA')
  })

  it('handles combined normalization', () => {
    expect(normalizeLinkCode(' o-i-l ')).toBe('011')
  })
})

// ── isValidLinkCode ──────────────────────────────────────────────────────────

describe('isValidLinkCode', () => {
  it('accepts a valid 6-char code from the alphabet', () => {
    expect(isValidLinkCode('ABCDEF')).toBe(true)
  })

  it('accepts codes with allowed digits', () => {
    expect(isValidLinkCode('A2B3C4')).toBe(true)
  })

  it('accepts a generated code', () => {
    expect(isValidLinkCode(generateLinkCode())).toBe(true)
  })

  it('rejects codes that are too short', () => {
    expect(isValidLinkCode('ABCDE')).toBe(false)
  })

  it('rejects codes that are too long', () => {
    expect(isValidLinkCode('ABCDEFG')).toBe(false)
  })

  it('rejects empty string', () => {
    expect(isValidLinkCode('')).toBe(false)
  })

  it('rejects lowercase characters', () => {
    expect(isValidLinkCode('abcdef')).toBe(false)
  })

  it('rejects ambiguous characters excluded from alphabet (0, O, 1, I, L)', () => {
    expect(isValidLinkCode('0ABCDE')).toBe(false) // 0 excluded
    expect(isValidLinkCode('OABCDE')).toBe(false) // O excluded
    expect(isValidLinkCode('1ABCDE')).toBe(false) // 1 excluded
    expect(isValidLinkCode('IABCDE')).toBe(false) // I excluded
    expect(isValidLinkCode('LABCDE')).toBe(false) // L excluded
  })

  it('rejects codes with special characters', () => {
    expect(isValidLinkCode('AB-CDE')).toBe(false)
    expect(isValidLinkCode('AB CDE')).toBe(false)
    expect(isValidLinkCode('AB!CDE')).toBe(false)
  })

  it('rejects non-string input', () => {
    expect(isValidLinkCode(123456 as unknown as string)).toBe(false)
    expect(isValidLinkCode(null as unknown as string)).toBe(false)
  })
})

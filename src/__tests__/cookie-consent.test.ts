// @vitest-environment jsdom
//
// This file needs a DOM. The suite's default is `node` (MAINT-9): running
// jsdom for all 187 files cost 148 seconds of environment setup against an
// 11-second wall clock, for the 13 files that actually use one.
import { describe, it, expect, beforeEach } from 'vitest'
import { hasAnalyticsConsent } from '@/components/cookie-consent'

describe('Cookie Consent helpers', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('hasAnalyticsConsent', () => {
    it('returns false by default (no consent stored)', () => {
      expect(hasAnalyticsConsent()).toBe(false)
    })

    it('returns true when user accepted all cookies', () => {
      localStorage.setItem('cookie-consent', 'all')
      expect(hasAnalyticsConsent()).toBe(true)
    })

    it('returns false when user chose essential only', () => {
      localStorage.setItem('cookie-consent', 'essential')
      expect(hasAnalyticsConsent()).toBe(false)
    })

    it('returns false for arbitrary string values', () => {
      localStorage.setItem('cookie-consent', 'analytics')
      expect(hasAnalyticsConsent()).toBe(false)
    })

    it('returns false for empty string', () => {
      localStorage.setItem('cookie-consent', '')
      expect(hasAnalyticsConsent()).toBe(false)
    })

    it('responds to consent changes', () => {
      expect(hasAnalyticsConsent()).toBe(false)

      localStorage.setItem('cookie-consent', 'all')
      expect(hasAnalyticsConsent()).toBe(true)

      localStorage.setItem('cookie-consent', 'essential')
      expect(hasAnalyticsConsent()).toBe(false)
    })
  })
})

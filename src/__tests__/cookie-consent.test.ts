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

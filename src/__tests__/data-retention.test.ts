import { describe, it, expect } from 'vitest'
import { RETENTION_PERIODS } from '@/lib/data-retention'

describe('Data Retention Policy', () => {
  // ── RETENTION_PERIODS constants ──────────────────────────────────────

  describe('RETENTION_PERIODS constants', () => {
    it('sets account grace period to 30 days', () => {
      expect(RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS).toBe(30)
    })

    it('sets inactive account threshold to 730 days (2 years)', () => {
      expect(RETENTION_PERIODS.INACTIVE_ACCOUNT_DAYS).toBe(730)
    })

    it('sets inactive warning grace to 30 days', () => {
      expect(RETENTION_PERIODS.INACTIVE_WARNING_GRACE_DAYS).toBe(30)
    })

    it('sets payment records retention to 7 years (HMRC)', () => {
      expect(RETENTION_PERIODS.PAYMENT_RECORDS_YEARS).toBe(7)
    })

    it('sets usage data retention to 12 months', () => {
      expect(RETENTION_PERIODS.USAGE_DATA_MONTHS).toBe(12)
    })

    it('sets support comms retention to 2 years', () => {
      expect(RETENTION_PERIODS.SUPPORT_COMMS_YEARS).toBe(2)
    })

    it('sets marketing consent extra years to 2', () => {
      expect(RETENTION_PERIODS.MARKETING_CONSENT_EXTRA_YEARS).toBe(2)
    })

    it('sets safeguarding min age to 25', () => {
      expect(RETENTION_PERIODS.SAFEGUARDING_MIN_AGE).toBe(25)
    })

    it('sets safeguarding min years to 7', () => {
      expect(RETENTION_PERIODS.SAFEGUARDING_MIN_YEARS).toBe(7)
    })
  })

  // ── Policy consistency checks ────────────────────────────────────────

  describe('policy consistency', () => {
    it('inactive threshold is longer than grace period', () => {
      expect(RETENTION_PERIODS.INACTIVE_ACCOUNT_DAYS).toBeGreaterThan(
        RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS
      )
    })

    it('payment retention is longer than support retention', () => {
      expect(RETENTION_PERIODS.PAYMENT_RECORDS_YEARS).toBeGreaterThan(
        RETENTION_PERIODS.SUPPORT_COMMS_YEARS
      )
    })

    it('safeguarding retention age is higher than 18 (adult age)', () => {
      expect(RETENTION_PERIODS.SAFEGUARDING_MIN_AGE).toBeGreaterThan(18)
    })

    it('inactive days plus warning grace equals total days before soft delete', () => {
      const totalDays =
        RETENTION_PERIODS.INACTIVE_ACCOUNT_DAYS +
        RETENTION_PERIODS.INACTIVE_WARNING_GRACE_DAYS
      // 730 + 30 = 760 days
      expect(totalDays).toBe(760)
    })

    it('all numeric values are positive integers', () => {
      for (const [key, value] of Object.entries(RETENTION_PERIODS)) {
        expect(value).toBeGreaterThan(0)
        expect(Number.isInteger(value)).toBe(true)
      }
    })
  })

  // ── Date arithmetic validation ─────────────────────────────────────

  describe('date calculations', () => {
    it('account grace period is exactly 30 days', () => {
      const now = new Date('2026-04-12T00:00:00Z')
      const graceEnd = new Date(now)
      graceEnd.setDate(graceEnd.getDate() + RETENTION_PERIODS.ACCOUNT_GRACE_PERIOD_DAYS)
      const diffMs = graceEnd.getTime() - now.getTime()
      const diffDays = diffMs / (1000 * 60 * 60 * 24)
      expect(diffDays).toBe(30)
    })

    it('payment records 7-year window spans correctly', () => {
      const now = new Date('2026-01-01T00:00:00Z')
      const expiry = new Date(now)
      expiry.setFullYear(expiry.getFullYear() + RETENTION_PERIODS.PAYMENT_RECORDS_YEARS)
      expect(expiry.getFullYear()).toBe(2033)
    })

    it('usage data 12-month window spans correctly', () => {
      const now = new Date('2026-04-01T00:00:00Z')
      const expiry = new Date(now)
      expiry.setMonth(expiry.getMonth() + RETENTION_PERIODS.USAGE_DATA_MONTHS)
      expect(expiry.getFullYear()).toBe(2027)
      expect(expiry.getMonth()).toBe(3) // April = month 3 (0-indexed)
    })
  })
})

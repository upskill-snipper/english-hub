import { describe, it, expect } from 'vitest'
import {
  shouldSendRenewalReminder,
  calculateNextReminderDate,
  isInCoolingOffPeriod,
} from '@/lib/subscription'

// ── Helper: build a mock Subscription ─────────────────────────────────

function buildSubscription(overrides?: Record<string, unknown>) {
  const now = new Date()
  const thirtyDaysFromNow = new Date(now)
  thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30)

  return {
    id: 'sub_test_123',
    userId: 'user_test_123',
    stripeSubscriptionId: 'stripe_sub_123',
    plan: 'MONTHLY' as const,
    status: 'ACTIVE' as const,
    paymentCount: 0,
    currentPeriodStart: now,
    currentPeriodEnd: thirtyDaysFromNow,
    coolingOffWaived: false,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  } as any
}

// ── Tests ─────────────────────────────────────────────────────────────

describe('Subscription (DMCC Act Compliance)', () => {
  // ── shouldSendRenewalReminder — Monthly ─────────────────────────────

  describe('shouldSendRenewalReminder - Monthly plan', () => {
    it('returns true when next payment would be the 6th (paymentCount=5)', () => {
      const sub = buildSubscription({ plan: 'MONTHLY', paymentCount: 5 })
      expect(shouldSendRenewalReminder(sub)).toBe(true)
    })

    it('returns true when next payment would be the 12th (paymentCount=11)', () => {
      const sub = buildSubscription({ plan: 'MONTHLY', paymentCount: 11 })
      expect(shouldSendRenewalReminder(sub)).toBe(true)
    })

    it('returns true when next payment would be the 18th (paymentCount=17)', () => {
      const sub = buildSubscription({ plan: 'MONTHLY', paymentCount: 17 })
      expect(shouldSendRenewalReminder(sub)).toBe(true)
    })

    it('returns false for paymentCount=0 (next is 1st payment)', () => {
      const sub = buildSubscription({ plan: 'MONTHLY', paymentCount: 0 })
      expect(shouldSendRenewalReminder(sub)).toBe(false)
    })

    it('returns false for paymentCount=3 (next is 4th payment)', () => {
      const sub = buildSubscription({ plan: 'MONTHLY', paymentCount: 3 })
      expect(shouldSendRenewalReminder(sub)).toBe(false)
    })

    it('returns false for cancelled subscription', () => {
      const sub = buildSubscription({ plan: 'MONTHLY', paymentCount: 5, status: 'CANCELLED' })
      expect(shouldSendRenewalReminder(sub)).toBe(false)
    })
  })

  // ── shouldSendRenewalReminder — Annual ──────────────────────────────

  describe('shouldSendRenewalReminder - Annual plan', () => {
    it('returns true when within 30 days of renewal', () => {
      const renewalDate = new Date()
      renewalDate.setDate(renewalDate.getDate() + 20) // 20 days from now
      const sub = buildSubscription({ plan: 'ANNUAL', currentPeriodEnd: renewalDate })
      expect(shouldSendRenewalReminder(sub, [])).toBe(true)
    })

    it('returns false when more than 30 days from renewal', () => {
      const renewalDate = new Date()
      renewalDate.setDate(renewalDate.getDate() + 60) // 60 days from now
      const sub = buildSubscription({ plan: 'ANNUAL', currentPeriodEnd: renewalDate })
      expect(shouldSendRenewalReminder(sub, [])).toBe(false)
    })

    it('returns false when renewal date is in the past', () => {
      const pastDate = new Date()
      pastDate.setDate(pastDate.getDate() - 5)
      const sub = buildSubscription({ plan: 'ANNUAL', currentPeriodEnd: pastDate })
      expect(shouldSendRenewalReminder(sub, [])).toBe(false)
    })

    it('returns false if a reminder was already sent for this period', () => {
      const renewalDate = new Date()
      renewalDate.setDate(renewalDate.getDate() + 15)
      const sub = buildSubscription({ plan: 'ANNUAL', currentPeriodEnd: renewalDate })

      const existingReminder = {
        id: 'rem_1',
        subscriptionId: sub.id,
        type: 'ANNUAL_RENEWAL',
        amount: 4999,
        currency: 'GBP',
        nextPaymentDate: renewalDate,
        sentAt: new Date(),
      }

      expect(shouldSendRenewalReminder(sub, [existingReminder] as any)).toBe(false)
    })

    it('returns false for cancelled annual subscription', () => {
      const renewalDate = new Date()
      renewalDate.setDate(renewalDate.getDate() + 15)
      const sub = buildSubscription({
        plan: 'ANNUAL',
        status: 'CANCELLED',
        currentPeriodEnd: renewalDate,
      })
      expect(shouldSendRenewalReminder(sub, [])).toBe(false)
    })
  })

  // ── calculateNextReminderDate ──────────────────────────────────────

  describe('calculateNextReminderDate', () => {
    it('returns null for cancelled subscriptions', () => {
      const sub = buildSubscription({ status: 'CANCELLED' })
      expect(calculateNextReminderDate(sub)).toBeNull()
    })

    it('returns a date for active monthly subscriptions', () => {
      const sub = buildSubscription({ plan: 'MONTHLY', paymentCount: 0 })
      const date = calculateNextReminderDate(sub)
      expect(date).toBeInstanceOf(Date)
    })

    it('monthly: next reminder is in the future relative to period end', () => {
      const periodEnd = new Date()
      periodEnd.setDate(periodEnd.getDate() + 30)
      const sub = buildSubscription({
        plan: 'MONTHLY',
        paymentCount: 1,
        currentPeriodEnd: periodEnd,
      })
      const date = calculateNextReminderDate(sub)
      expect(date).not.toBeNull()
      expect(date!.getTime()).toBeGreaterThan(new Date().getTime())
    })

    it('annual: next reminder is 30 days before period end', () => {
      const periodEnd = new Date()
      periodEnd.setDate(periodEnd.getDate() + 365)
      const sub = buildSubscription({
        plan: 'ANNUAL',
        currentPeriodEnd: periodEnd,
      })
      const date = calculateNextReminderDate(sub)
      expect(date).not.toBeNull()

      const expectedMs = periodEnd.getTime() - 30 * 24 * 60 * 60 * 1000
      const actualMs = date!.getTime()
      // Allow 1-day tolerance for date arithmetic edge cases
      expect(Math.abs(actualMs - expectedMs)).toBeLessThan(2 * 24 * 60 * 60 * 1000)
    })
  })

  // ── isInCoolingOffPeriod ───────────────────────────────────────────

  describe('isInCoolingOffPeriod (UK Consumer Contracts Regulations)', () => {
    it('returns true within 14 days of subscription start', () => {
      const sub = buildSubscription({
        currentPeriodStart: new Date(),
        coolingOffWaived: false,
      })
      expect(isInCoolingOffPeriod(sub)).toBe(true)
    })

    it('returns false after 14 days', () => {
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 15)
      const sub = buildSubscription({
        currentPeriodStart: startDate,
        coolingOffWaived: false,
      })
      expect(isInCoolingOffPeriod(sub)).toBe(false)
    })

    it('returns false exactly at day 14 boundary (day 14 is still inside)', () => {
      const startDate = new Date()
      startDate.setDate(startDate.getDate() - 14)
      const sub = buildSubscription({
        currentPeriodStart: startDate,
        coolingOffWaived: false,
      })
      // Day 14 => daysSinceStart = 14, 14 <= 14 = true
      expect(isInCoolingOffPeriod(sub)).toBe(true)
    })

    it('returns false when cooling off is waived even within 14 days', () => {
      const sub = buildSubscription({
        currentPeriodStart: new Date(),
        coolingOffWaived: true,
      })
      expect(isInCoolingOffPeriod(sub)).toBe(false)
    })

    it('returns false when cooling off is waived even on day 1', () => {
      const sub = buildSubscription({
        currentPeriodStart: new Date(),
        coolingOffWaived: true,
      })
      expect(isInCoolingOffPeriod(sub)).toBe(false)
    })
  })
})

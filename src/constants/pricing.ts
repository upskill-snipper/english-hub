// ─── Canonical pricing constants ───────────────────────────────────────
//
// Single source of truth. Changing a value here cascades to every page,
// email template, and pricing string in the app.
//
// 20 April 2026 pricing correction:
//   - Students: £3.49/month OR £29.99/year.
//   - Students get £20/year (save £9.99) with ANY valid affiliate code, or
//     with the house promo code `2026ENGLISH`.
//   - Teachers: £7.99/month (annual kept at £67.99 pending confirmation).
//   - Trial: 7-day free trial, card-on-file required; auto-converts to
//     paid subscription at the end of the trial unless cancelled.
//   - Demo: 3 free uses of most features remain, before the paywall.
//   - Founding Schools: from £3,000, no upper limit.
//
// Supersedes the 19 April 2026 "annual-only £20" pivot (never shipped to prod).

export const PRICING = {
  // ── Student tier ───────────────────────────────────────────────────
  STUDENT_MONTHLY: 3.49,
  STUDENT_ANNUAL: 29.99,
  /** Discounted annual price unlocked via any affiliate code or `2026ENGLISH`. */
  STUDENT_ANNUAL_WITH_CODE: 20,
  /** Public house code that unlocks the discounted annual rate. */
  AFFILIATE_PROMO_CODE: '2026ENGLISH',
  /** Discount amount in £ when an affiliate / house code is used. */
  STUDENT_ANNUAL_SAVINGS: 9.99,

  // ── Teacher tier ───────────────────────────────────────────────────
  TEACHER_MONTHLY: 7.99,
  TEACHER_ANNUAL: 67.99,

  // ── Founding Schools: £3,000 floor, no upper limit ────────────────
  FOUNDER_SCHOOL_MIN: 3000,
  /** @deprecated 2026-04-19 — no upper limit on Founding Schools. Range is "from £3,000". */
  FOUNDER_SCHOOL_MAX: null as number | null,
  FOUNDER_SCHOOL_LIMIT: 10,

  // ── Misc ────────────────────────────────────────────────────────────
  FREE_USES_PER_FEATURE: 3,
  CURRENCY: '£',
  SCHOOL_CURRENCY: '£',

  // ── Trial ───────────────────────────────────────────────────────────
  TRIAL_DAYS: 7,
  TRIAL_TEXT: '7-day free trial',
  /** Trials require a valid payment method on file. Auto-converts to paid. */
  TRIAL_REQUIRES_CARD: true,
  /** Headline shown alongside every CTA. */
  TRIAL_HEADLINE: '7-day free trial · card required · cancel anytime before day 7',

  // ── Plan structure flags ────────────────────────────────────────────
  /** Monthly plans ARE offered (students and teachers). */
  MONTHLY_PLAN_ENABLED: true,
  /** Subscriptions auto-renew (monthly or annually depending on plan) unless cancelled. */
  AUTO_RENEWS: true,

  // ── Deprecated legacy aliases ───────────────────────────────────────
  /** @deprecated Use STUDENT_MONTHLY directly. Kept for historical imports. */
  MONTHLY: 3.49,
  /** @deprecated Use STUDENT_ANNUAL directly. Kept for historical imports. */
  ANNUAL: 29.99,
} as const

export const PRICING_DISPLAY = {
  studentMonthly: `£${PRICING.STUDENT_MONTHLY}/month`,
  studentAnnual: `£${PRICING.STUDENT_ANNUAL}/year`,
  studentAnnualDiscounted: `£${PRICING.STUDENT_ANNUAL_WITH_CODE}/year`,
  teacherMonthly: `£${PRICING.TEACHER_MONTHLY}/month`,
  teacherAnnual: `£${PRICING.TEACHER_ANNUAL}/year`,
  /** @deprecated Retained for call sites that previously read `annual`. */
  annual: `£${PRICING.STUDENT_ANNUAL}/year`,
  /** @deprecated Retained for call sites that previously read `monthly`. */
  monthly: `£${PRICING.STUDENT_MONTHLY}/month`,
  founderFromOnly: `from £${PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}`,
  trialText: `${PRICING.TRIAL_TEXT} · card required`,
  promoBanner: `Use code ${PRICING.AFFILIATE_PROMO_CODE} — annual plan £${PRICING.STUDENT_ANNUAL_WITH_CODE} (save £${PRICING.STUDENT_ANNUAL_SAVINGS})`,
} as const

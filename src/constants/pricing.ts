// ─── Canonical pricing constants ───────────────────────────────────────
//
// Single source of truth. Changing a value here cascades to every page,
// email template, and pricing string in the app.
//
// 19 April 2026 pivot:
//   - Student tier is now ANNUAL-ONLY at £20/year (down from £8.99/mo · £67.99/yr)
//   - Teacher tier is now ANNUAL-ONLY at £67.99/year (down from £12.99/mo · £99.99/yr)
//   - Trial shortened from 30 days to 7 days
//   - Founding Schools: no upper limit (previously capped at £7k)
//
// Rationale: maximise student accessibility + simplify the SKU matrix.
// Unit economics vs new affiliate payouts: see business-docs/COMMERCIAL-REPORT.md.

export const PRICING = {
  // ── Student tier: annual-only, £20/year ────────────────────────────
  STUDENT_ANNUAL: 20,
  /** @deprecated 2026-04-19 — monthly plan removed. Kept for legacy billing-page rendering only. */
  STUDENT_MONTHLY: 0,

  // ── Teacher tier: annual-only, £67.99/year (previously student annual price) ──
  TEACHER_ANNUAL: 67.99,
  /** @deprecated 2026-04-19 — monthly plan removed. */
  TEACHER_MONTHLY: 0,

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

  // ── Plan structure flags ────────────────────────────────────────────
  /** Monthly plans are no longer offered to new signups. */
  MONTHLY_PLAN_ENABLED: false,
  /** Subscriptions auto-renew annually unless cancelled from account settings. */
  AUTO_RENEWS: true,

  // ── Deprecated legacy aliases ───────────────────────────────────────
  /** @deprecated Use STUDENT_MONTHLY directly. Kept for historical imports. */
  MONTHLY: 0,
  /** @deprecated Use STUDENT_ANNUAL directly. Kept for historical imports. */
  ANNUAL: 20,
} as const

export const PRICING_DISPLAY = {
  annual: `£${PRICING.STUDENT_ANNUAL}/year`,
  teacherAnnual: `£${PRICING.TEACHER_ANNUAL}/year`,
  founderFromOnly: `from £${PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}`,
  trialText: `${PRICING.TRIAL_TEXT}, then £${PRICING.STUDENT_ANNUAL}/year`,
  /** @deprecated Monthly is no longer offered. Kept for account-page legacy references. */
  monthly: '',
} as const

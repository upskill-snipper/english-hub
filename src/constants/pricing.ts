// ─── Canonical pricing constants ───────────────────────────────────────
//
// Single source of truth. Changing a value here cascades to every page,
// email template, and pricing string in the app.
//
// 2026-04-21 pricing pivot - two-tier "Early Access / Founding Price"
// with anchor "Standard Pricing" to be enforced from August 2026.
//
//   Students: Early Access £3.99/month  · £29.99/year
//             Standard    £7.99/month  · £69.99/year
//   Teachers: Early Access £6.99/month  · £67.99/year
//             Standard    £11.99/month · £99/year
//   Schools:  Founding     £4,000 (first 10 only - Founders Programme)
//             Legacy       £3,000 (grandfathered for wave-1 founders)
//             Standard     £8,000 projected post-founding price
//
// Every price banner must visibly anchor the Standard rate next to the
// Early Access / Founding rate, plus the "Prices increasing August 2026"
// urgency line. PRICING_DISPLAY below exposes pre-formatted strings for
// both tiers so pages don't have to duplicate the £ formatting.
//
// Previously (20 Apr 2026): flat £3.49 / £29.99 student, £7.99 / £67.99
// teacher, £3,000 floor for Founding Schools, no Standard anchor.

export const PRICING = {
  // ── Student tier - early access + standard anchor ─────────────────
  /** Early-access monthly (what a new signup actually pays). */
  STUDENT_MONTHLY: 3.99,
  /** Early-access annual (what a new signup actually pays). */
  STUDENT_ANNUAL: 29.99,
  /** Standard monthly - displayed as the anchored "real price". */
  STUDENT_MONTHLY_STANDARD: 7.99,
  /** Standard annual - displayed as the anchored "real price". */
  STUDENT_ANNUAL_STANDARD: 69.99,
  /** Discounted annual price unlocked via any affiliate code or `2026ENGLISH`. */
  STUDENT_ANNUAL_WITH_CODE: 20,
  /** Public house code that unlocks the discounted annual rate. */
  AFFILIATE_PROMO_CODE: '2026ENGLISH',
  /** Discount amount in £ when an affiliate / house code is used. */
  STUDENT_ANNUAL_SAVINGS: 9.99,

  // ── Teacher tier - early access + standard anchor ─────────────────
  TEACHER_MONTHLY: 6.99,
  TEACHER_ANNUAL: 67.99,
  TEACHER_MONTHLY_STANDARD: 11.99,
  TEACHER_ANNUAL_STANDARD: 99,
  /** Discounted Teacher Annual when an affiliate / house code is applied.
   *  Same flat £9.99 saving as Student Annual so the value proposition is
   *  consistent across plans. £67.99 - £9.99 = £58.00. */
  TEACHER_ANNUAL_WITH_CODE: 58,
  /** Discount amount in £ for Teacher Annual when a code is used. */
  TEACHER_ANNUAL_SAVINGS: 9.99,

  // ── Founding Schools + projected standard ─────────────────────────
  /** New Founding price - first 10 schools only. Anchored vs SCHOOL_STANDARD. */
  FOUNDER_SCHOOL_MIN: 4000,
  /** Legacy wave-1 founding price (£3k). Grandfathered for schools who
   *  signed before the 21 Apr 2026 pivot; referenced in messaging but
   *  no longer offered to new Founders. */
  FOUNDER_SCHOOL_LEGACY: 3000,
  /** Projected post-founding standard annual price per school - the
   *  anchor shown alongside the £4k Founding rate. */
  SCHOOL_STANDARD: 8000,
  /** 10 places in the Founding cohort. */
  FOUNDER_SCHOOL_LIMIT: 10,
  /** @deprecated 2026-04-19 - no upper limit once the cohort is capped. */
  FOUNDER_SCHOOL_MAX: null as number | null,

  // ── School pilots & annual deployment (institutional positioning) ──
  //
  // 2026-05-19 institutional repositioning. The English Hub for Schools
  // is sold as a structured pilot first, then annual deployment. All
  // figures are INDICATIVE founder pricing - final pricing depends on
  // school size, scope and rollout requirements, so every surface must
  // use "from" framing and the indicative-pricing caveat.
  //
  // Founder School Pilot (≈ one term / 8-12 weeks):
  PILOT_FROM: 3000, // headline "from" used in previews/nav
  PILOT_YEAR_GROUP_FROM: 2500, // single year-group pilot
  PILOT_DEPARTMENT_FROM: 4000, // whole English department pilot
  // Multi-campus / education-group pilot = custom (no fixed floor).
  //
  // Annual school deployment (post-pilot, per academic year):
  ANNUAL_SMALL_SCHOOL_FROM: 6000,
  ANNUAL_MID_SCHOOL_FROM: 12000,
  ANNUAL_LARGE_SCHOOL_FROM: 25000, // large school / group - "typically from"
  /** Caveat appended wherever school pricing is shown. */
  SCHOOL_PRICING_CAVEAT:
    'Indicative founder pricing. Final pricing depends on school size, scope and rollout requirements.',
  SCHOOL_PILOT_LENGTH: 'one term (around 8-12 weeks)',

  // ── Urgency messaging (shown on every price banner) ───────────────
  /** Month the standard pricing takes effect. Used for urgency copy. */
  PRICE_INCREASE_DATE: 'August 2026',
  /** Ready-made urgency line for price banners. */
  PRICE_INCREASE_MESSAGE: 'Prices increasing August 2026',
  EARLY_ACCESS_LABEL: 'Early Access - Founding Price',
  FOUNDING_SCHOOLS_LABEL: 'Founding Schools Programme',
  STANDARD_PRICE_LABEL: 'Standard Pricing (from August 2026)',

  // ── Misc ────────────────────────────────────────────────────────────
  FREE_USES_PER_FEATURE: 3,
  CURRENCY: '£',
  SCHOOL_CURRENCY: '£',

  // ── Trial ───────────────────────────────────────────────────────────
  TRIAL_DAYS: 7,
  TRIAL_TEXT: '7-day free trial',
  TRIAL_REQUIRES_CARD: true,
  TRIAL_HEADLINE: '7-day free trial · card required · cancel anytime before day 7',

  // ── Plan structure flags ────────────────────────────────────────────
  MONTHLY_PLAN_ENABLED: true,
  AUTO_RENEWS: true,

  // ── Deprecated legacy aliases ───────────────────────────────────────
  /** @deprecated Use STUDENT_MONTHLY directly. Kept for historical imports. */
  MONTHLY: 3.99,
  /** @deprecated Use STUDENT_ANNUAL directly. Kept for historical imports. */
  ANNUAL: 29.99,
} as const

export const PRICING_DISPLAY = {
  // Student - early access (what new signups actually pay)
  studentMonthly: `£${PRICING.STUDENT_MONTHLY}/month`,
  studentAnnual: `£${PRICING.STUDENT_ANNUAL}/year`,
  // Student - standard anchor (displayed with strikethrough or "was")
  studentMonthlyStandard: `£${PRICING.STUDENT_MONTHLY_STANDARD}/month`,
  studentAnnualStandard: `£${PRICING.STUDENT_ANNUAL_STANDARD}/year`,
  studentAnnualDiscounted: `£${PRICING.STUDENT_ANNUAL_WITH_CODE}/year`,
  // Teacher - early access + standard
  teacherMonthly: `£${PRICING.TEACHER_MONTHLY}/month`,
  teacherAnnual: `£${PRICING.TEACHER_ANNUAL}/year`,
  teacherMonthlyStandard: `£${PRICING.TEACHER_MONTHLY_STANDARD}/month`,
  teacherAnnualStandard: `£${PRICING.TEACHER_ANNUAL_STANDARD}/year`,
  // Schools
  founderFromOnly: `from £${PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}`,
  founderSchoolsPrice: `£${PRICING.FOUNDER_SCHOOL_MIN.toLocaleString('en-GB')}`,
  founderSchoolsLegacyPrice: `£${PRICING.FOUNDER_SCHOOL_LEGACY.toLocaleString('en-GB')}`,
  schoolStandardPrice: `£${PRICING.SCHOOL_STANDARD.toLocaleString('en-GB')}`,
  // School pilots & annual deployment - institutional positioning.
  pilotFrom: `from £${PRICING.PILOT_FROM.toLocaleString('en-GB')}`,
  pilotYearGroupFrom: `from £${PRICING.PILOT_YEAR_GROUP_FROM.toLocaleString('en-GB')}`,
  pilotDepartmentFrom: `from £${PRICING.PILOT_DEPARTMENT_FROM.toLocaleString('en-GB')}`,
  pilotMultiCampus: 'Custom',
  annualSmallFrom: `from £${PRICING.ANNUAL_SMALL_SCHOOL_FROM.toLocaleString('en-GB')}/year`,
  annualMidFrom: `from £${PRICING.ANNUAL_MID_SCHOOL_FROM.toLocaleString('en-GB')}/year`,
  annualLargeFrom: `Custom, typically from £${PRICING.ANNUAL_LARGE_SCHOOL_FROM.toLocaleString('en-GB')}/year`,
  schoolPricingCaveat: PRICING.SCHOOL_PRICING_CAVEAT,
  schoolPilotLength: PRICING.SCHOOL_PILOT_LENGTH,
  // Urgency
  priceIncrease: PRICING.PRICE_INCREASE_MESSAGE,
  priceIncreaseDate: PRICING.PRICE_INCREASE_DATE,
  earlyAccessLabel: PRICING.EARLY_ACCESS_LABEL,
  standardLabel: PRICING.STANDARD_PRICE_LABEL,
  // Deprecated call-site aliases
  /** @deprecated Retained for call sites that previously read `annual`. */
  annual: `£${PRICING.STUDENT_ANNUAL}/year`,
  /** @deprecated Retained for call sites that previously read `monthly`. */
  monthly: `£${PRICING.STUDENT_MONTHLY}/month`,
  trialText: `${PRICING.TRIAL_TEXT} · card required`,
  promoBanner: `Use code ${PRICING.AFFILIATE_PROMO_CODE} - annual plan £${PRICING.STUDENT_ANNUAL_WITH_CODE} (save £${PRICING.STUDENT_ANNUAL_SAVINGS})`,
} as const

export const PRICING = {
  STUDENT_MONTHLY: 8.99,
  STUDENT_ANNUAL: 67.99,
  TEACHER_MONTHLY: 12.99,
  TEACHER_ANNUAL: 99.99,
  FOUNDER_SCHOOL_MIN: 3000,
  FOUNDER_SCHOOL_MAX: 7000,
  FREE_USES_PER_FEATURE: 3,
  CURRENCY: '£',
  TRIAL_TEXT: 'First month free',
  FOUNDER_SCHOOL_LIMIT: 10,
  SCHOOL_CURRENCY: '£',
  /** @deprecated Use STUDENT_MONTHLY instead */
  MONTHLY: 8.99,
  /** @deprecated Use STUDENT_ANNUAL instead */
  ANNUAL: 67.99,
  TRIAL_DAYS: 30,
} as const

export const PRICING_DISPLAY = {
  monthly: `£${PRICING.STUDENT_MONTHLY}/month`,
  annual: `£${PRICING.STUDENT_ANNUAL}/year`,
  trialText: `First month free! Then £${PRICING.STUDENT_MONTHLY}/month`,
} as const

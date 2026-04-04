export const PRICING = {
  MONTHLY: 9.99,
  ANNUAL: 79.99,
  CURRENCY: '£',
  TRIAL_DAYS: 30,
  TRIAL_TEXT: 'First month free',
  SCHOOL_ANNUAL: 1500,
  SCHOOL_CURRENCY: '£',
  FOUNDER_PROMO_CODE: 'FOUNDER',
  FOUNDER_ACCESS_UNTIL: '2026-08-31',
} as const

export const PRICING_DISPLAY = {
  monthly: `£${PRICING.MONTHLY}/month`,
  annual: `£${PRICING.ANNUAL}/year`,
  trialText: `First month free! Then £${PRICING.MONTHLY}/month`,
} as const

export const PRICING = {
  MONTHLY: 8.99,
  ANNUAL: 79.00,
  ANNUAL_MONTHLY: 6.58,
  ANNUAL_SAVE_PERCENT: 27,
  CURRENCY: '£',
  TRIAL_DAYS: 30,
} as const

export const PRICING_DISPLAY = {
  monthly: `£${PRICING.MONTHLY}/month`,
  annual: `£${PRICING.ANNUAL}/year`,
  annualMonthly: `£${PRICING.ANNUAL_MONTHLY}/month`,
  trialText: `First month free! Then £${PRICING.MONTHLY}/month`,
} as const

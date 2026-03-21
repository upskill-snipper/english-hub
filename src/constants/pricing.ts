export const PRICING = {
  MONTHLY: 5.99,
  ANNUAL: 47.88,
  ANNUAL_MONTHLY: 3.99,
  ANNUAL_SAVE_PERCENT: 33,
  CURRENCY: '£',
  TRIAL_DAYS: 30,
} as const

export const PRICING_DISPLAY = {
  monthly: `£${PRICING.MONTHLY}/month`,
  annual: `£${PRICING.ANNUAL}/year`,
  annualMonthly: `£${PRICING.ANNUAL_MONTHLY}/month`,
  trialText: `First month free! Then £${PRICING.MONTHLY}/month`,
} as const

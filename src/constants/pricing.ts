export const PRICING = {
  MONTHLY: 9.99,
  CURRENCY: '£',
  TRIAL_DAYS: 30,
  TRIAL_TEXT: 'First month free',
} as const

export const PRICING_DISPLAY = {
  monthly: `£${PRICING.MONTHLY}/month`,
  trialText: `First month free! Then £${PRICING.MONTHLY}/month`,
} as const

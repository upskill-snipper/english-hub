import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-02-25.clover',
  typescript: true,
})

export const PRICE_IDS = {
  PRO_MONTHLY: process.env.STRIPE_PRICE_PRO_MONTHLY!,
  PRO_ANNUAL: process.env.STRIPE_PRICE_PRO_ANNUAL!,
  KS3_READING: process.env.STRIPE_PRICE_KS3_READING!,
  KS3_WRITING: process.env.STRIPE_PRICE_KS3_WRITING!,
  KS3_GRAMMAR: process.env.STRIPE_PRICE_KS3_GRAMMAR!,
  GCSE_LANG_READING: process.env.STRIPE_PRICE_GCSE_LANG_READING!,
  GCSE_LANG_WRITING: process.env.STRIPE_PRICE_GCSE_LANG_WRITING!,
  GCSE_LIT_POETRY: process.env.STRIPE_PRICE_GCSE_LIT_POETRY!,
  GCSE_LIT_PROSE: process.env.STRIPE_PRICE_GCSE_LIT_PROSE!,
  GCSE_REVISION: process.env.STRIPE_PRICE_GCSE_REVISION!,
  BUNDLE: process.env.STRIPE_PRICE_BUNDLE!,
} as const

export const COURSE_PRICE_MAP: Record<string, string> = {
  'ks3-reading': PRICE_IDS.KS3_READING,
  'ks3-writing': PRICE_IDS.KS3_WRITING,
  'ks3-grammar': PRICE_IDS.KS3_GRAMMAR,
  'gcse-lang-reading': PRICE_IDS.GCSE_LANG_READING,
  'gcse-lang-writing': PRICE_IDS.GCSE_LANG_WRITING,
  'gcse-lit-poetry': PRICE_IDS.GCSE_LIT_POETRY,
  'gcse-lit-prose': PRICE_IDS.GCSE_LIT_PROSE,
  'gcse-revision-blitz': PRICE_IDS.GCSE_REVISION,
}

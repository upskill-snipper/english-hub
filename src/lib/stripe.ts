import Stripe from 'stripe'
import { requireEnv } from '@/lib/env-check'

export const stripe = new Stripe(requireEnv('STRIPE_SECRET_KEY'), {
  apiVersion: '2026-02-25.clover',
  typescript: true,
})

export const PRICE_IDS = {
  PRO_MONTHLY: requireEnv('STRIPE_PRICE_PRO_MONTHLY'),
  PRO_ANNUAL: requireEnv('STRIPE_PRICE_PRO_ANNUAL'),
  KS3_READING: requireEnv('STRIPE_PRICE_KS3_READING'),
  KS3_WRITING: requireEnv('STRIPE_PRICE_KS3_WRITING'),
  KS3_GRAMMAR: requireEnv('STRIPE_PRICE_KS3_GRAMMAR'),
  GCSE_LANG_READING: requireEnv('STRIPE_PRICE_GCSE_LANG_READING'),
  GCSE_LANG_WRITING: requireEnv('STRIPE_PRICE_GCSE_LANG_WRITING'),
  GCSE_LIT_POETRY: requireEnv('STRIPE_PRICE_GCSE_LIT_POETRY'),
  GCSE_LIT_PROSE: requireEnv('STRIPE_PRICE_GCSE_LIT_PROSE'),
  GCSE_REVISION: requireEnv('STRIPE_PRICE_GCSE_REVISION'),
  BUNDLE: requireEnv('STRIPE_PRICE_BUNDLE'),
} as const

const _COURSE_PRICE_ENTRIES: Record<string, string> = {
  'ks3-reading': PRICE_IDS.KS3_READING,
  'ks3-writing': PRICE_IDS.KS3_WRITING,
  'ks3-grammar': PRICE_IDS.KS3_GRAMMAR,
  'gcse-lang-reading': PRICE_IDS.GCSE_LANG_READING,
  'gcse-lang-writing': PRICE_IDS.GCSE_LANG_WRITING,
  'gcse-lit-poetry': PRICE_IDS.GCSE_LIT_POETRY,
  'gcse-lit-prose': PRICE_IDS.GCSE_LIT_PROSE,
  'gcse-revision-blitz': PRICE_IDS.GCSE_REVISION,
  'edexcel-lang-paper1': process.env.STRIPE_PRICE_EDEXCEL_LANG_P1 || '',
  'edexcel-lang-paper2': process.env.STRIPE_PRICE_EDEXCEL_LANG_P2 || '',
  'edexcel-lit-paper1': process.env.STRIPE_PRICE_EDEXCEL_LIT_P1 || '',
  'edexcel-lit-paper2': process.env.STRIPE_PRICE_EDEXCEL_LIT_P2 || '',
  'edexcel-igcse-lang-a': process.env.STRIPE_PRICE_EDEXCEL_IGCSE_A || '',
  'edexcel-igcse-lang-b': process.env.STRIPE_PRICE_EDEXCEL_IGCSE_B || '',
}

// Filter out entries with empty price IDs (unset env vars)
export const COURSE_PRICE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(_COURSE_PRICE_ENTRIES).filter(([, v]) => v !== '')
)

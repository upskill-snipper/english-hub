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
  // IELTS standalone subscription (distinct entitlement: profiles.ielts_status).
  // Soft env (|| '') so the app doesn't crash before the Stripe product is
  // created — the checkout resolver returns a clear error if unset, rather than
  // requireEnv blowing up the whole module at import time. Set these once the
  // IELTS Product + Prices exist (see business-docs/IELTS-launch-setup.md).
  IELTS_MONTHLY: process.env.STRIPE_PRICE_IELTS_MONTHLY || '',
  IELTS_ANNUAL: process.env.STRIPE_PRICE_IELTS_ANNUAL || '',
  // Parent tier - env var not yet wired; safe-fallback to placeholder so
  // `requireEnv` doesn't crash prior to Stripe dashboard setup. See
  // src/app/api/parent/README.md for the launch checklist.
  PARENT_MONTHLY: process.env.STRIPE_PRICE_PARENT || 'price_TBD_parent',
} as const

/**
 * IELTS Stripe price IDs that are actually configured (unset env → filtered
 * out). The webhook uses this to recognise an IELTS subscription (and set
 * profiles.ielts_status), and the checkout route uses it to validate the
 * incoming priceId. IELTS is a STANDALONE product — it never falls back to the
 * PRO/Student price, so an empty list simply means IELTS isn't sold yet.
 */
export const IELTS_PRICE_IDS: readonly string[] = [
  process.env.STRIPE_PRICE_IELTS_MONTHLY || '',
  process.env.STRIPE_PRICE_IELTS_ANNUAL || '',
].filter((id) => id.length > 0)

/** True when a Stripe price ID belongs to the IELTS product. */
export function isIeltsPriceId(priceId: string | null | undefined): boolean {
  return !!priceId && IELTS_PRICE_IDS.includes(priceId)
}

// ── Parent tier plan metadata ──────────────────────────────────────────────
// Kept alongside PRICE_IDS so all Stripe-facing config lives in one file.
// If/when a dedicated `src/lib/stripe/plans.ts` is introduced, this export
// should move there and stripe.ts can re-export for backward compatibility.
export const PARENT_PLAN = {
  id: 'parent',
  name: 'Parent Access',
  price: 499, // pence
  priceId: 'price_TBD_parent',
  interval: 'month',
  features: [
    'Read-only access to child progress',
    'Weekly email reports',
    'Up to 3 children',
    'Cancel anytime',
  ],
} as const

export const PLANS = [PARENT_PLAN] as const

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
  Object.entries(_COURSE_PRICE_ENTRIES).filter(([, v]) => v !== ''),
)

// ─── IELTS AI feedback allowances ───────────────────────────────────────────
//
// THE DEFECT THIS EXISTS TO PREVENT (18 September 2026)
//
// Three customer-facing strings advertised IELTS AI band feedback as
// "unlimited" while the routes enforced 10 Writing and 30 Speaking assessments
// per rolling 24 hours:
//
//   • pricing.ielts.subtitle - "Adult exam prep with unlimited
//     examiner-calibrated AI band feedback" (confirmed live on /pricing)
//   • ielts.modelans.upsell.body - "unlimited AI band feedback"
//   • ielts.diagnostic.usage.last_free_note - "A plan adds unlimited AI checks"
//
// The launch-readiness review recorded "unlimited" as corrected; these three
// keys were missed. IELTS is the GBP 39/month adult product the roadmap wants
// to sell next, so an unlimited promise against a 10-a-day cap is a refund and
// a CAP complaint waiting to happen on the first heavy user's first day.
//
// The numbers now live here and the rate limiters read them directly. The
// dictionary shards cannot: scripts/generate-i18n-locales.mjs flattens every
// `dictionary*.ts` into one temp directory and requires it, so a shard that
// imports `@/constants/...` breaks `prebuild` and therefore the production
// build. The copy carries the numbers literally, and
// src/__tests__/promises-match-the-product.test.ts asserts the two agree — so
// raising an allowance here fails the suite until the sentence is updated.
// ────────────────────────────────────────────────────────────────────────────

/** AI assessments a subscriber may run per rolling 24 hours, per user. */
export const IELTS_LIMITS = {
  /** Enforced in src/app/api/ielts/writing-feedback/route.ts. */
  WRITING_PER_DAY: 10,
  /** Enforced in src/app/api/ielts/speaking-feedback/route.ts. */
  SPEAKING_PER_DAY: 30,
  /** The rolling window both limits use. */
  WINDOW_SECONDS: 86_400,
} as const

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
// The numbers now live here and are read by BOTH the rate limiters that
// enforce them and the copy that describes them, so the two cannot drift apart
// again. Changing an allowance changes the sentence on the pricing page in the
// same commit.
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

/**
 * The allowance as a phrase, for copy that must state it rather than imply it.
 * English only: the Arabic and Spanish strings interpolate the numbers
 * themselves, because the word order differs.
 */
export const IELTS_ALLOWANCE_EN = `${IELTS_LIMITS.WRITING_PER_DAY} Writing and ${IELTS_LIMITS.SPEAKING_PER_DAY} Speaking AI assessments a day`

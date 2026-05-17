/**
 * Canonical sub-processor register — THE single source of truth.
 *
 * WHY THIS EXISTS
 * The operating-blueprint review found the /data-processing page,
 * /legal/privacy page and the Qatar privacy notices each enumerate a
 * DIFFERENT set of sub-processors (the data-processing table omits
 * Cloudflare, PostHog, GA4, Rewardful and Vercel Analytics; the
 * privacy page omits Cloudflare and PostHog; only the Qatar strings
 * list Cloudflare + PostHog). A school buyer or regulator asking
 * "which list is authoritative?" currently has no good answer.
 *
 * This module is that answer: the reconciled UNION of every provider
 * referenced anywhere on the public site, typed and centralised so the
 * legal pages can be refactored to render from ONE list and can never
 * diverge again.
 *
 * ── CODE-VERIFIED REALITY (2026-05-17) ──────────────────────────────
 * Verified against package.json + a source grep, NOT assumed:
 *   • The ONLY LLM provider actually called is **Anthropic**
 *     (`@anthropic-ai/sdk@^0.90.0`, model `claude-sonnet-4-20250514`,
 *     6 routes — see `src/lib/anthropic-client.ts`). There is **no
 *     OpenAI SDK, no api.openai.com call, and no GPT model string**
 *     anywhere in `src/` (the only "OpenAI" hits are incidental code
 *     comments). The `/legal/ai-governance` §9 claim "OpenAI and
 *     Anthropic" (`dictionary-legal-long.ts:538`) is therefore
 *     **factually wrong vs the code** and must be corrected to
 *     Anthropic-only — see doc 10 §4 inconsistency #1 for the exact
 *     wording legal must paste (this module does NOT edit the
 *     dictionary).
 *   • Other live deps confirmed in package.json: Supabase, Stripe,
 *     Sentry, Vercel Analytics, PostHog (`posthog-js`). `resend` /
 *     `postmark` packages are **absent** from package.json — the
 *     transactional-email provider could not be confirmed from deps
 *     alone (RoPA v1 names Postmark, this register historically named
 *     Resend). Flagged below with `dpaStatus: 'unconfirmed'`; see doc
 *     10 §4 inconsistency #5.
 *
 * ── ANTHROPIC PRIVACY POSTURE (the high-risk entry) ─────────────────
 * No-training and zero-/limited-retention for Anthropic are governed by
 * the **commercial contract**, NOT by any request flag or header — the
 * installed SDK exposes no retention/no-training/privacy option
 * (researched 2026-05-17; see `src/lib/anthropic-client.ts`
 * `ANTHROPIC_DATA_POLICY`). Until counsel obtains the counter-signed
 * DPA + written ZDR/no-training confirmation (human-action-checklist.md
 * item 4; doc 17), Anthropic's `dpaStatus` is `'unconfirmed'` and
 * `zeroRetention` is `'unconfirmed'`. Public pages must not assert more
 * than that until it is closed (doc 10 §4 / doc 15 C5).
 *
 * IMPORTANT — NOT YET WIRED INTO THE PUBLISHED LEGAL TABLES.
 * Rewriting the published /data-processing and /legal/privacy
 * sub-processor tables is a change to a contractual data-protection
 * disclosure. It must be reviewed and signed off by the
 * founder/DPO/legal before going live. This module is the typed single
 * source so that refactor is a small, low-risk follow-up — the legal
 * pages should map over `LIVE_SUBPROCESSORS` instead of hand-
 * maintaining each list:
 *     - src/app/data-processing/page.tsx  (Section 6 table)
 *     - src/app/legal/privacy/page.tsx     (Section 4 list)
 *     - src/app/legal/ai-transparency      (Section 6, currently has
 *                                           no real list)
 *     - src/app/legal/privacy-qatar*       (inline sentences)
 *
 * TODO(founder/legal): before wiring this into the public legal pages,
 *   confirm: (1) PostHog still live? (2) transactional-email provider
 *   (Resend vs Postmark) + Trustpilot; (3) per-entry data category,
 *   region and DPA status against the actual signed agreements;
 *   (4) Anthropic DPA/ZDR (checklist item 4 / doc 17).
 */

/** Whether a counter-signed data-processing agreement is actually in hand. */
export type DpaStatus =
  /** Counter-signed DPA confirmed in hand. */
  | 'signed'
  /** Standard/clickwrap DPA exists; counter-signature pending/needed. */
  | 'pending'
  /** Cannot be evidenced yet (e.g. provider not confirmed, or no written DPA seen). */
  | 'unconfirmed'

/** How (if at all) training/retention is constrained for this processor. */
export type ZeroRetentionStatus =
  /** Constrained by the commercial contract / DPA (no technical endpoint switch). */
  | 'contractual'
  /** A dedicated zero-retention endpoint/configuration is technically in use. */
  | 'endpoint'
  /** Not yet confirmed in writing (treat as standard provider retention). */
  | 'unconfirmed'
  /** Not applicable (e.g. processor does not retain free-text learner content). */
  | 'n/a'

export interface SubProcessor {
  /** Stable provider name (not translated). */
  name: string
  /** What the provider processes / is used for. */
  purpose: string
  /** Categories of data the provider receives (kept high-level, no PII values). */
  dataCategories: readonly string[]
  /** Primary processing / storage region (human-readable). */
  location: string
  /** Counter-signed-DPA status (honest; do not upgrade without evidence). */
  dpaStatus: DpaStatus
  /** Training/retention constraint basis. */
  zeroRetention: ZeroRetentionStatus
  /** Public/source reference for the disclosure (provider DPA / trust page). */
  sourceUrl: string
  /** Only active when the user consents (analytics/marketing tier). */
  consentGated: boolean
  /** Set false if a provider is retired but kept for change history. */
  live: boolean

  // ── Back-compat aliases (kept so any existing/legacy consumer keeps
  //    compiling; no code currently reads these, but the published legal
  //    tables will eventually map over this list and may use either name). ──
  /** @deprecated Use `location`. */
  region: string
  /** @deprecated Use `dpaStatus`. True iff a DPA exists in some form. */
  dpa: boolean
}

/**
 * Internal builder so the deprecated `region`/`dpa` aliases stay in lock-step
 * with the canonical `location`/`dpaStatus` without hand-duplication.
 */
function sp(s: Omit<SubProcessor, 'region' | 'dpa'>): SubProcessor {
  return {
    ...s,
    region: s.location,
    dpa: s.dpaStatus !== 'unconfirmed',
  }
}

export const SUBPROCESSORS: readonly SubProcessor[] = [
  sp({
    name: 'Supabase',
    purpose: 'Authentication, primary database and row-level-secured storage',
    dataCategories: [
      'account identifiers',
      'authentication data',
      'learning progress',
      'essay submissions (at rest)',
    ],
    location: 'EU / UK',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://supabase.com/legal/dpa',
    consentGated: false,
    live: true,
  }),
  sp({
    name: 'Vercel',
    purpose: 'Application hosting and edge delivery',
    dataCategories: ['IP address', 'request logs', 'technical metadata'],
    location: 'US / global edge',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://vercel.com/legal/dpa',
    consentGated: false,
    live: true,
  }),
  sp({
    name: 'Cloudflare',
    purpose: 'Global edge, DNS and protective network layer',
    dataCategories: ['IP address', 'request metadata'],
    location: 'Global edge',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://www.cloudflare.com/cloudflare-customer-dpa/',
    consentGated: false,
    live: true,
  }),
  sp({
    name: 'Microsoft Azure',
    purpose: 'Backend API processing',
    dataCategories: ['request payloads in transit', 'technical metadata'],
    location: 'UK South',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl:
      'https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA',
    consentGated: false,
    live: true,
  }),
  sp({
    // THE high-risk AI sub-processor. Code-verified as the ONLY LLM provider.
    // dpaStatus/zeroRetention are honestly 'unconfirmed' until counsel closes
    // human-action-checklist.md item 4 (doc 17 / doc 15 C5). No-training &
    // retention are CONTRACTUAL, not a request flag — the SDK has no such
    // option (see src/lib/anthropic-client.ts ANTHROPIC_DATA_POLICY).
    name: 'Anthropic (Claude)',
    purpose:
      'AI-assisted essay marking, predicted grade, essay feedback, CEFR assessment and study-material generation (model claude-sonnet-4-20250514)',
    dataCategories: [
      'learner essay / response free text',
      'question text',
      'exam board + year',
      'NO name, email, date of birth or school is sent',
    ],
    location: 'US',
    dpaStatus: 'unconfirmed',
    zeroRetention: 'unconfirmed',
    sourceUrl: 'https://www.anthropic.com/legal/commercial-terms',
    consentGated: false,
    live: true,
  }),
  sp({
    name: 'Stripe',
    purpose: 'Payment processing and subscription billing',
    dataCategories: ['billing identifiers', 'payment card data (sent directly to Stripe)'],
    location: 'EU / US',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://stripe.com/legal/dpa',
    consentGated: false,
    live: true,
  }),
  sp({
    // package.json has neither `resend` nor `postmark`; RoPA v1 names
    // Postmark, this register historically named Resend. Provider + DPA
    // cannot be evidenced from code → 'unconfirmed'. doc 10 §4 #5.
    name: 'Transactional email provider (Resend / Postmark — UNCONFIRMED)',
    purpose: 'Transactional email delivery',
    dataCategories: ['email address', 'email content (transactional)'],
    location: 'US',
    dpaStatus: 'unconfirmed',
    zeroRetention: 'n/a',
    sourceUrl: 'https://resend.com/legal/dpa',
    consentGated: false,
    live: true,
  }),
  sp({
    name: 'Sentry',
    purpose: 'Error and performance monitoring',
    dataCategories: ['error context', 'technical metadata', 'IP address'],
    location: 'EU / US',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://sentry.io/legal/dpa/',
    consentGated: false,
    live: true,
  }),
  sp({
    name: 'Vercel Analytics & Speed Insights',
    purpose: 'Aggregate web performance and Core Web Vitals',
    dataCategories: ['aggregate page performance', 'coarse device/route metadata'],
    location: 'US',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://vercel.com/legal/dpa',
    consentGated: true,
    live: true,
  }),
  sp({
    name: 'Google Analytics 4',
    purpose: 'Aggregate usage analytics',
    dataCategories: ['usage events', 'pseudonymous client id'],
    location: 'US',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://business.safety.google/adsprocessorterms/',
    consentGated: true,
    live: true,
  }),
  sp({
    name: 'Rewardful',
    purpose: 'Affiliate referral attribution',
    dataCategories: ['referral attribution metadata'],
    location: 'US',
    dpaStatus: 'pending',
    zeroRetention: 'n/a',
    sourceUrl: 'https://www.getrewardful.com/dpa',
    consentGated: true,
    live: true,
  }),
  sp({
    // TODO(founder/legal): confirm still live — appears only in Qatar
    // strings + a flags comment. If retired, set live:false & fix Qatar copy.
    name: 'PostHog',
    purpose: 'Product analytics (event-level)',
    dataCategories: ['product events', 'pseudonymous distinct id'],
    location: 'EU / US',
    dpaStatus: 'unconfirmed',
    zeroRetention: 'n/a',
    sourceUrl: 'https://posthog.com/dpa',
    consentGated: true,
    live: true,
  }),
] as const

/** Currently-live processors only — what public pages should render. */
export const LIVE_SUBPROCESSORS: readonly SubProcessor[] = SUBPROCESSORS.filter((s) => s.live)

/** The single LLM / high-risk-AI sub-processor (code-verified: Anthropic only). */
export const AI_SUBPROCESSOR: SubProcessor = SUBPROCESSORS.find((s) =>
  s.name.startsWith('Anthropic'),
) as SubProcessor

/**
 * Entries whose contractual paperwork is NOT yet evidenced — the precise list
 * counsel/DPO must close before the published disclosure can claim more.
 * Consumed by the compliance docs so the residual is derived, not retyped.
 */
export const SUBPROCESSORS_NEEDING_CONFIRMATION: readonly SubProcessor[] = SUBPROCESSORS.filter(
  (s) => s.dpaStatus === 'unconfirmed' || s.zeroRetention === 'unconfirmed',
)

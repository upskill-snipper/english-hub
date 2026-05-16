/**
 * Canonical sub-processor register — single source of truth.
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
 * IMPORTANT — NOT YET WIRED INTO THE PUBLISHED LEGAL TABLES.
 * Rewriting the published /data-processing and /legal/privacy
 * sub-processor tables is a change to a contractual data-protection
 * disclosure. It must be reviewed and signed off by the
 * founder/DPO/legal before going live, and two facts below need
 * confirmation first (see TODOs). The module is provided now so the
 * single-source-of-truth refactor is a small, low-risk follow-up once
 * that sign-off happens — not a research exercise.
 *
 * TODO(founder/legal): before wiring this into the public legal
 *   pages, confirm:
 *     1. Is PostHog still a live processor? It appears only in the
 *        Qatar strings + a feature-flags comment. If retired, set
 *        `live: false` (or remove) and correct the Qatar notices.
 *     2. Confirm the precise data category, processing purpose,
 *        storage region and DPA status for every entry below against
 *        the actual signed agreements.
 *   Then refactor:
 *     - src/app/data-processing/page.tsx  (Section 6 table)
 *     - src/app/legal/privacy/page.tsx     (Section 4 list)
 *     - src/app/legal/ai-transparency      (Section 6, currently has
 *                                           no real list)
 *     - src/app/legal/privacy-qatar*       (inline sentences)
 *   to map over SUBPROCESSORS instead of hand-maintaining each list.
 */

export interface SubProcessor {
  /** Stable provider name (not translated). */
  name: string
  /** What the provider processes / is used for. */
  purpose: string
  /** Primary processing / storage region. */
  region: string
  /** Whether a data-processing agreement is in place / available. */
  dpa: boolean
  /** Only active when the user consents (analytics/marketing tier). */
  consentGated: boolean
  /** Set false if a provider is retired but kept for change history. */
  live: boolean
}

export const SUBPROCESSORS: readonly SubProcessor[] = [
  {
    name: 'Supabase',
    purpose: 'Authentication, primary database and row-level-secured storage',
    region: 'EU / UK',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Vercel',
    purpose: 'Application hosting and edge delivery',
    region: 'US / global edge',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Cloudflare',
    purpose: 'Global edge, DNS and protective network layer',
    region: 'Global edge',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Microsoft Azure',
    purpose: 'Backend API processing',
    region: 'UK South',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Anthropic (Claude)',
    purpose: 'AI-assisted essay feedback and study-material generation',
    region: 'US',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Stripe',
    purpose: 'Payment processing and subscription billing',
    region: 'EU / US',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Resend',
    purpose: 'Transactional email delivery',
    region: 'US',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Sentry',
    purpose: 'Error and performance monitoring',
    region: 'EU / US',
    dpa: true,
    consentGated: false,
    live: true,
  },
  {
    name: 'Vercel Analytics & Speed Insights',
    purpose: 'Aggregate web performance and Core Web Vitals',
    region: 'US',
    dpa: true,
    consentGated: true,
    live: true,
  },
  {
    name: 'Google Analytics 4',
    purpose: 'Aggregate usage analytics',
    region: 'US',
    dpa: true,
    consentGated: true,
    live: true,
  },
  {
    name: 'Rewardful',
    purpose: 'Affiliate referral attribution',
    region: 'US',
    dpa: true,
    consentGated: true,
    live: true,
  },
  {
    // TODO(founder/legal): confirm still live — see file header.
    name: 'PostHog',
    purpose: 'Product analytics (event-level)',
    region: 'EU / US',
    dpa: true,
    consentGated: true,
    live: true,
  },
] as const

/** Currently-live processors only — what public pages should render. */
export const LIVE_SUBPROCESSORS = SUBPROCESSORS.filter((s) => s.live)

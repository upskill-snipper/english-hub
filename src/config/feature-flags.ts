/**
 * Feature flags - MVP static config.
 *
 * ── THESE ARE RELEASE SWITCHES. THEY ARE NOT AN EXPERIMENT SYSTEM. ─────────
 *
 * Recorded 19 September 2026 (ANA-10) because the name invites the opposite
 * assumption, and a growth plan built on that assumption would be built on
 * nothing.
 *
 * Every flag here is a single boolean with the SAME value for every user on a
 * given deployment. There is no user id, no hash, no bucketing input of any
 * kind reaching this module - `resolveFeatureFlags()` takes only two privacy
 * opt-outs - so it cannot assign a variant even in principle. A repo-wide
 * search for variant assignment (assignVariant, getVariant, abTest, split,
 * experiment) returns nothing but framer-motion props and a badge-colour
 * helper. There is no `src/lib/experiments`. PostHog is wired for event
 * capture only; its feature-flag and experiment SDK surface is never touched.
 *
 * So: you can turn something on for everyone, or off for everyone, per
 * deployment. You cannot run an A/B test, and no number produced while this is
 * the whole system can be attributed to a variant, because there are no
 * variants. Week-on-week movement is attributable only where a change log
 * shows a single change to the relevant surface - see
 * `10 Growth & Analytics/CHANGE-LOG.md` in the business folder.
 *
 * WIRING A REMOTE PROVIDER IS NOT A CODE DECISION. Variant assignment means
 * bucketing identified users, most of whom here are children. Before any
 * provider is introduced, its DPA status, its registered processing purpose
 * and the consent position all have to be settled - `src/config/subprocessors.ts`
 * currently records PostHog with purpose 'Product analytics (event-level)' and
 * dpaStatus 'unconfirmed', and feature flagging is not that purpose. That is
 * the owner's call and counsel's, not this file's.
 *
 * The previous version of this docblock said "For Wave 4 we do not yet wire a
 * remote provider (PostHog, Statsig, etc.)", which reads as a scheduling note
 * about something imminent rather than a statement that the capability is
 * absent and gated on a compliance decision.
 *
 * Per-user overrides live in `PrivacySettings` and are applied on top
 * of this map by the flag resolver. Privacy-driven opt-outs win over
 * a default-true marketing flag (e.g. `trustpilot_enabled` is auto
 * false for users with `marketingEnabled = false`).
 *
 * Keep additions typed - the `FeatureFlagKey` literal union drives the
 * shape of the `/api/flags` response and the `flags` block inside
 * `/api/me`, so mobile types stay in lock-step with the server truth.
 *
 * Wave 5 additions (see `english-hub-mobile/docs/FEATURE_FLAGS.md`):
 *   - parent_dashboard_enabled - staging-first rollout.
 *   - teacher_assignments_mobile_enabled - teacher tools (mobile).
 *   - teacher_analytics_mobile_enabled - teacher tools (mobile).
 *   - teacher_submissions_mobile_enabled - teacher tools (mobile).
 *   - school_csv_upload_enabled - admin bulk invite, staging-first.
 *   - weekly_parent_reports_enabled - Compliance review pending,
 *     staging-first.
 */

// ─── Environment detection ────────────────────────────────────────────
//
// We need to distinguish `prod` from `staging` so that staging picks up
// work-in-progress features before production does. Resolution order:
//
//   1. `APP_ENV` - explicit override, used by EAS / CI.
//   2. `VERCEL_ENV` - Vercel sets `production`, `preview`, `development`.
//   3. `NODE_ENV` - final fallback (`production` → `prod`).
//
// Anything we cannot confidently classify as `prod` is treated as
// `staging`, which is the safer default for gated rollouts (new
// features appear in pre-prod environments first).

type DeployEnv = 'dev' | 'staging' | 'prod'

function resolveDeployEnv(): DeployEnv {
  const raw = process.env.APP_ENV ?? process.env.VERCEL_ENV ?? process.env.NODE_ENV ?? ''
  const normalised = raw.toLowerCase()
  if (normalised === 'prod' || normalised === 'production') return 'prod'
  if (normalised === 'dev' || normalised === 'development') return 'dev'
  // `preview`, `staging`, anything else → staging bucket.
  return 'staging'
}

const IS_PROD = resolveDeployEnv() === 'prod'

// ─── Flag keys (kept as a literal union for type narrowing) ───────────

export type FeatureFlagKey =
  | 'subscriptions_enabled'
  | 'maintenance_mode'
  | 'trustpilot_enabled'
  | 'mobile_offline_queue'
  | 'mobile_siwa_required'
  | 'teacher_dashboard_v2'
  // ── Wave 5 ─────────────────────────────────────────────────────────
  | 'parent_dashboard_enabled'
  | 'teacher_assignments_mobile_enabled'
  | 'teacher_analytics_mobile_enabled'
  | 'teacher_submissions_mobile_enabled'
  | 'school_csv_upload_enabled'
  | 'weekly_parent_reports_enabled'

export type FeatureFlags = Record<FeatureFlagKey, boolean>

// ─── Defaults ─────────────────────────────────────────────────────────
//
// Any value that is environment-driven is evaluated once at module
// load; `getFeatureFlagDefaults()` returns a fresh object so callers
// can't mutate the shared map by accident.

export function getFeatureFlagDefaults(): FeatureFlags {
  return {
    // Gates the whole subscriptions funnel (paywall, IAP, Stripe
    // checkout). Kept true by default; flip to false with a deploy to
    // kill the funnel without a code change.
    subscriptions_enabled: true,

    // When true the mobile app shows a full-screen maintenance notice
    // and the web UI banners a read-only warning. No mutations accepted.
    maintenance_mode: false,

    // Trustpilot widget on marketing surfaces. Env-driven so the
    // commercial team can disable during a reputation incident.
    trustpilot_enabled: process.env.TRUSTPILOT_ENABLED === 'true',

    // Mobile capability flags - see
    // english-hub-mobile/docs/API_SPEC.md §4.1 `/me.flags`.
    mobile_offline_queue: true,
    mobile_siwa_required: true,

    // Teacher dashboard redesign is still gated while we measure the
    // rollout cohort.
    teacher_dashboard_v2: false,

    // ── Wave 5 flags ───────────────────────────────────────────────
    //
    // Parent dashboard is staging-first: Compliance hasn't signed off
    // the full parent-linking flow for prod yet. Kill switch lives on
    // the web dashboard.
    parent_dashboard_enabled: !IS_PROD,

    // Teacher tooling on mobile defaults on - these mirror existing
    // web endpoints already used in production. The flags exist to
    // give us an instant kill switch.
    teacher_assignments_mobile_enabled: true,
    teacher_analytics_mobile_enabled: true,
    teacher_submissions_mobile_enabled: true,

    // School CSV bulk upload is staging-first until the admin role
    // audit trail + rate-limit work in §W5 finishes.
    school_csv_upload_enabled: !IS_PROD,

    // Weekly parent reports are gated pending Compliance review of
    // the report content (ICO Children's Code §9 transparency).
    weekly_parent_reports_enabled: !IS_PROD,
  }
}

// ─── Per-user override application ────────────────────────────────────
//
// Callers pass in whatever privacy / override state they have for the
// user and receive the final flag map. Keep this pure - no I/O, no
// Prisma - so it can be reused inside `/api/me`, `/api/flags`, and
// future SSR code paths without a DB round-trip.

export interface FlagOverrideInput {
  /** User's analytics opt-in (PrivacySettings.analyticsEnabled). */
  analyticsEnabled?: boolean | null
  /** User's marketing opt-in (PrivacySettings.marketingEnabled). */
  marketingEnabled?: boolean | null
}

export function resolveFeatureFlags(overrides: FlagOverrideInput = {}): FeatureFlags {
  const flags = getFeatureFlagDefaults()

  // Marketing opt-out forces Trustpilot off for the calling user -
  // Trustpilot is a marketing surface and honouring the opt-out is
  // part of our GDPR Art. 7 posture. We never flip it *on* here; if
  // the env default is off, it stays off regardless of the flag.
  if (overrides.marketingEnabled === false && flags.trustpilot_enabled) {
    flags.trustpilot_enabled = false
  }

  // Weekly parent reports are an email-delivered marketing-adjacent
  // surface; honour marketing opt-out here too so we don't email
  // parents who have withdrawn consent.
  if (overrides.marketingEnabled === false && flags.weekly_parent_reports_enabled) {
    flags.weekly_parent_reports_enabled = false
  }

  return flags
}

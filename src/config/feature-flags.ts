/**
 * Feature flags — MVP static config.
 *
 * This is the authoritative map of server-evaluated flags exposed to
 * authenticated clients via `GET /api/flags` (and embedded in `GET /me`).
 * For Wave 4 we do not yet wire a remote provider (PostHog, Statsig,
 * etc.); flags are baked in at build-time with a handful of values
 * derived from environment variables so we can flip them per
 * deployment without a code change.
 *
 * Per-user overrides live in `PrivacySettings` and are applied on top
 * of this map by the flag resolver. Privacy-driven opt-outs win over
 * a default-true marketing flag (e.g. `trustpilot_enabled` is auto
 * false for users with `marketingEnabled = false`).
 *
 * Keep additions typed — the `FeatureFlagKey` literal union drives the
 * shape of the `/api/flags` response and the `flags` block inside
 * `/api/me`, so mobile types stay in lock-step with the server truth.
 *
 * Wave 5 additions (see `english-hub-mobile/docs/FEATURE_FLAGS.md`):
 *   - parent_dashboard_enabled — staging-first rollout.
 *   - teacher_assignments_mobile_enabled — teacher tools (mobile).
 *   - teacher_analytics_mobile_enabled — teacher tools (mobile).
 *   - teacher_submissions_mobile_enabled — teacher tools (mobile).
 *   - school_csv_upload_enabled — admin bulk invite, staging-first.
 *   - weekly_parent_reports_enabled — Compliance review pending,
 *     staging-first.
 */

// ─── Environment detection ────────────────────────────────────────────
//
// We need to distinguish `prod` from `staging` so that staging picks up
// work-in-progress features before production does. Resolution order:
//
//   1. `APP_ENV` — explicit override, used by EAS / CI.
//   2. `VERCEL_ENV` — Vercel sets `production`, `preview`, `development`.
//   3. `NODE_ENV` — final fallback (`production` → `prod`).
//
// Anything we cannot confidently classify as `prod` is treated as
// `staging`, which is the safer default for gated rollouts (new
// features appear in pre-prod environments first).

type DeployEnv = 'dev' | 'staging' | 'prod'

function resolveDeployEnv(): DeployEnv {
  const raw =
    process.env.APP_ENV ??
    process.env.VERCEL_ENV ??
    process.env.NODE_ENV ??
    ''
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

    // Mobile capability flags — see
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

    // Teacher tooling on mobile defaults on — these mirror existing
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
// user and receive the final flag map. Keep this pure — no I/O, no
// Prisma — so it can be reused inside `/api/me`, `/api/flags`, and
// future SSR code paths without a DB round-trip.

export interface FlagOverrideInput {
  /** User's analytics opt-in (PrivacySettings.analyticsEnabled). */
  analyticsEnabled?: boolean | null
  /** User's marketing opt-in (PrivacySettings.marketingEnabled). */
  marketingEnabled?: boolean | null
}

export function resolveFeatureFlags(overrides: FlagOverrideInput = {}): FeatureFlags {
  const flags = getFeatureFlagDefaults()

  // Marketing opt-out forces Trustpilot off for the calling user —
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

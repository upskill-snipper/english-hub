/**
 * Validates required environment variables at build/startup time.
 * Import this in instrumentation.ts or a server component to catch misconfigurations early.
 *
 * Grouped by purpose so new acquirers can quickly understand what each var powers.
 */

// ── Required: the app will not function without these ────────────────────────
const REQUIRED_VARS: Record<string, string> = {
  // Supabase
  NEXT_PUBLIC_SUPABASE_URL:
    'Supabase project URL (Dashboard > Settings > API). Example: https://abcxyz.supabase.co',
  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    'Supabase anonymous/public key (Dashboard > Settings > API).',
  SUPABASE_SERVICE_ROLE_KEY:
    'Supabase service role key — never expose client-side (Dashboard > Settings > API).',

  // Stripe
  STRIPE_SECRET_KEY:
    'Stripe secret key (Dashboard > Developers > API keys). Starts with sk_live_ or sk_test_.',
  STRIPE_WEBHOOK_SECRET:
    'Stripe webhook signing secret (Dashboard > Developers > Webhooks). Starts with whsec_.',
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    'Stripe publishable key. Starts with pk_live_ or pk_test_.',

  // AI
  ANTHROPIC_API_KEY:
    'Anthropic API key for essay marking and recommendations. Starts with sk-ant-.',

  // Site URL (replaces legacy NEXTAUTH_URL)
  NEXT_PUBLIC_SITE_URL:
    'Canonical site URL used in emails, OG tags, and CORS. Example: https://theenglishhub.app',
}

// ── Recommended: features degrade gracefully without these ───────────────────
const RECOMMENDED_VARS: Record<string, string> = {
  CRON_SECRET:
    'Shared secret for authenticating /api/cron/* endpoints. Generate with: openssl rand -hex 32',
  CSRF_SECRET:
    'HMAC secret for CSRF token generation/validation. Generate with: openssl rand -hex 32',
  RESEND_API_KEY:
    'Resend API key for transactional emails (weekly reports, parent invites).',
}

// ── Optional: nice-to-have integrations ──────────────────────────────────────
const OPTIONAL_VARS: Record<string, string> = {
  UPSTASH_REDIS_REST_URL:
    'Upstash Redis REST URL for rate limiting.',
  UPSTASH_REDIS_REST_TOKEN:
    'Upstash Redis REST token.',
  REWARDFUL_API_SECRET:
    'Rewardful (legacy affiliate system) API secret.',
  NEXT_PUBLIC_REWARDFUL_KEY:
    'Rewardful public key for client-side snippet.',
  NEXT_PUBLIC_SENTRY_DSN:
    'Sentry DSN for client-side error tracking.',
  SENTRY_DSN:
    'Sentry DSN for server-side error tracking.',
  NEXT_PUBLIC_GA4_ID:
    'Google Analytics 4 measurement ID.',
  ADMIN_EMAILS:
    'Comma-separated admin email addresses for notification routing.',
}

// ── Deprecated: flag if still set so they can be cleaned up ──────────────────
const DEPRECATED_VARS: Record<string, string> = {
  NEXTAUTH_URL:
    'Replaced by NEXT_PUBLIC_SITE_URL in Cycle 1. Remove from .env and hosting config.',
}

export function validateEnv() {
  const errors: string[] = []
  const warnings: string[] = []

  // ── Required vars ──────────────────────────────────────────────────────────
  for (const [key, hint] of Object.entries(REQUIRED_VARS)) {
    if (!process.env[key]) {
      errors.push(`  - ${key}\n    ${hint}`)
    }
  }

  // ── Validate NEXT_PUBLIC_SITE_URL format when present ──────────────────────
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (siteUrl) {
    if (!/^https?:\/\/.+/.test(siteUrl)) {
      errors.push(
        `  - NEXT_PUBLIC_SITE_URL has invalid format: "${siteUrl}"\n    Must be a full URL starting with https:// (e.g. https://theenglishhub.app)`
      )
    }
    if (siteUrl.endsWith('/')) {
      warnings.push(
        `  - NEXT_PUBLIC_SITE_URL has a trailing slash — this can cause double-slash URLs.\n    Current: "${siteUrl}"  Recommended: "${siteUrl.replace(/\/+$/, '')}"`
      )
    }
  }

  // ── Recommended vars ───────────────────────────────────────────────────────
  for (const [key, hint] of Object.entries(RECOMMENDED_VARS)) {
    if (!process.env[key]) {
      warnings.push(`  - ${key} (recommended)\n    ${hint}`)
    }
  }

  // ── Optional vars (info only) ──────────────────────────────────────────────
  const missingOptional: string[] = []
  for (const key of Object.keys(OPTIONAL_VARS)) {
    if (!process.env[key]) missingOptional.push(key)
  }

  // ── Deprecated vars ────────────────────────────────────────────────────────
  for (const [key, hint] of Object.entries(DEPRECATED_VARS)) {
    if (process.env[key]) {
      warnings.push(`  - ${key} (deprecated, still set)\n    ${hint}`)
    }
  }

  // ── Output ─────────────────────────────────────────────────────────────────
  if (errors.length > 0) {
    console.error(
      `\n[env-validation] Missing REQUIRED environment variables:\n${errors.join('\n\n')}\n`
    )
    if (process.env.NODE_ENV === 'production') {
      throw new Error(
        `Missing required environment variables: ${Object.keys(REQUIRED_VARS)
          .filter((k) => !process.env[k])
          .join(', ')}`
      )
    }
  }

  if (warnings.length > 0) {
    console.warn(
      `\n[env-validation] Warnings:\n${warnings.join('\n\n')}\n`
    )
  }

  if (missingOptional.length > 0) {
    console.info(
      `[env-validation] Optional vars not set: ${missingOptional.join(', ')}`
    )
  }
}

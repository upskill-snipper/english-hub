/**
 * Validates required environment variables at build/startup time.
 * Import this in instrumentation.ts or a server component to catch misconfigurations early.
 */

const REQUIRED_VARS = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'STRIPE_SECRET_KEY',
  'STRIPE_WEBHOOK_SECRET',
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
  'ANTHROPIC_API_KEY',
] as const

const OPTIONAL_VARS = [
  'UPSTASH_REDIS_REST_URL',
  'UPSTASH_REDIS_REST_TOKEN',
  'REWARDFUL_API_SECRET',
  'NEXT_PUBLIC_REWARDFUL_KEY',
  'CRON_SECRET',
  'NEXT_PUBLIC_SENTRY_DSN',
  'ADMIN_EMAILS',
] as const

export function validateEnv() {
  const missing: string[] = []

  for (const v of REQUIRED_VARS) {
    if (!process.env[v]) missing.push(v)
  }

  if (missing.length > 0) {
    console.error(`Missing required environment variables:\n${missing.map(v => `  - ${v}`).join('\n')}`)
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
    }
  }

  // Warn about optional vars
  const missingOptional: string[] = []
  for (const v of OPTIONAL_VARS) {
    if (!process.env[v]) missingOptional.push(v)
  }

  if (missingOptional.length > 0) {
    console.warn(`Optional environment variables not set:\n${missingOptional.map(v => `  - ${v}`).join('\n')}`)
  }
}

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

// ---------------------------------------------------------------------------
// Environment variable validation tests.
//
// The validateEnv() function checks that all required env vars are present
// and warns about missing optional ones. In production it throws; in dev
// it only logs.
// ---------------------------------------------------------------------------

describe('validateEnv', () => {
  const REQUIRED_VARS = [
    'NEXT_PUBLIC_SUPABASE_URL',
    'NEXT_PUBLIC_SUPABASE_ANON_KEY',
    'SUPABASE_SERVICE_ROLE_KEY',
    'STRIPE_SECRET_KEY',
    'STRIPE_WEBHOOK_SECRET',
    'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY',
    'ANTHROPIC_API_KEY',
  ]

  beforeEach(() => {
    // Set all required vars to dummy values by default
    for (const v of REQUIRED_VARS) {
      vi.stubEnv(v, `test-value-${v}`)
    }
    // Ensure we're in test/dev mode
    vi.stubEnv('NODE_ENV', 'test')
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.resetModules()
  })

  it('does not throw when all required vars are present', async () => {
    const { validateEnv } = await import('@/lib/env-validation')
    expect(() => validateEnv()).not.toThrow()
  })

  it('logs an error when a required var is missing (non-production)', async () => {
    vi.stubEnv('ANTHROPIC_API_KEY', '')
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const { validateEnv } = await import('@/lib/env-validation')
    validateEnv()

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('ANTHROPIC_API_KEY')
    )
    consoleSpy.mockRestore()
  })

  it('throws in production when a required var is missing', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('STRIPE_SECRET_KEY', '')
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const { validateEnv } = await import('@/lib/env-validation')
    expect(() => validateEnv()).toThrow(/STRIPE_SECRET_KEY/)
  })

  it('lists all missing required vars in the error', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    vi.stubEnv('STRIPE_SECRET_KEY', '')
    vi.stubEnv('ANTHROPIC_API_KEY', '')
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const { validateEnv } = await import('@/lib/env-validation')
    expect(() => validateEnv()).toThrow(/STRIPE_SECRET_KEY.*ANTHROPIC_API_KEY|ANTHROPIC_API_KEY.*STRIPE_SECRET_KEY/)
  })

  it('warns about missing optional vars', async () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const { validateEnv } = await import('@/lib/env-validation')
    validateEnv()

    // At least one optional var should be missing (we didn't set any)
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('Optional environment variables')
    )
    warnSpy.mockRestore()
  })

  it('does not warn when all optional vars are set', async () => {
    const optionalVars = [
      'UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN',
      'REWARDFUL_API_SECRET', 'NEXT_PUBLIC_REWARDFUL_KEY',
      'CRON_SECRET', 'NEXT_PUBLIC_SENTRY_DSN', 'SENTRY_DSN',
      'NEXT_PUBLIC_GA4_ID', 'RESEND_API_KEY', 'ADMIN_EMAILS',
    ]
    for (const v of optionalVars) {
      vi.stubEnv(v, `test-value-${v}`)
    }
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const { validateEnv } = await import('@/lib/env-validation')
    validateEnv()

    expect(warnSpy).not.toHaveBeenCalled()
    warnSpy.mockRestore()
  })
})

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('../sentry.server.config')

    // Report missing/misconfigured environment variables at server startup.
    // validateEnv() was written for exactly this but was never wired in, so a
    // deploy missing e.g. STRIPE_WEBHOOK_SECRET booted clean and failed later.
    // We deliberately do NOT let it throw here: a boot-time throw would take
    // the whole site down on a single missing var. Instead we log loudly and
    // report to Sentry so the gap is visible without a hard outage.
    try {
      const { validateEnv } = await import('./lib/env-validation')
      validateEnv()
    } catch (err) {
      const Sentry = await import('@sentry/nextjs')
      Sentry.captureException(err, { tags: { area: 'env-validation' } })
      console.error('[instrumentation] Environment validation reported problems:', err)
    }
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('../sentry.server.config')
  }
}

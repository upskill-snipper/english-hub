// ─── Server instrumentation (the LIVE one) ───────────────────────────────────
//
// WHY THE NOTE ABOUT "LIVE" (19 September 2026, REL-6)
// There were TWO instrumentation files: this one and a root `instrumentation.ts`.
// Only one of them ever ran. Next resolves the hook relative to
// `path.join(pagesDir || appDir, '..')`; with no `pages/` directory and an
// appDir of `src/app`, that is `src/` - so THIS file won. Confirmed against
// the compiled output: `.next/server/instrumentation.js` carried this file's
// env-validation call and zero occurrences of `captureRequestError`.
//
// The root file was the more complete of the two - it had the PII scrubbers
// and, crucially, the `onRequestError` export - and none of it had executed
// since the day `src/instrumentation.ts` was added. It is now deleted, and the
// one thing it carried that this file lacked is below.
//
// NOTE: creating a `pages/` or `src/pages/` directory moves the resolution
// root back to the repo root and would silently kill this file. There is a
// test asserting neither exists.

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

/**
 * Report server-side rendering errors to Sentry.
 *
 * THE DEFECT (19 September 2026, REL-6). This export existed in exactly one
 * place in the whole repository - the root `instrumentation.ts`, which Next
 * never loaded. So React Server Component render errors were captured by
 * NOTHING, and would still have been captured by nothing the moment a DSN was
 * set. `error.tsx` and `global-error.tsx` are client boundaries and are not a
 * substitute: they catch what the browser sees, not what fails on the server.
 *
 * The Sentry SDK had been saying so on every single build - "Could not find
 * `onRequestError` hook in instrumentation file" - and the warning scrolled
 * past in build output nobody read.
 *
 * Imported lazily so the SDK is not pulled in merely to define the hook.
 */
export async function onRequestError(
  ...args: Parameters<typeof import('@sentry/nextjs').captureRequestError>
): Promise<void> {
  const Sentry = await import('@sentry/nextjs')
  Sentry.captureRequestError(...args)
}

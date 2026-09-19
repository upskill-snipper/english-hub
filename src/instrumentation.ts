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
  // ── PERF-3. Do not load the Sentry SDK when there is nowhere to send ───────
  //
  // Both branches used to import `../sentry.server.config` unconditionally, and
  // that config calls `Sentry.init({ dsn: process.env.SENTRY_DSN })`. SENTRY_DSN
  // is not set in this project - it is absent from `.env.local`, which IS
  // production - so the edge runtime pulled in a 254 KB bundle on essentially
  // every request in order to configure an error reporter with no address.
  //
  // Middleware runs on nearly everything, so this was not an occasional
  // cold-start cost. It was paid on the JSON and asset requests a page makes
  // after load as well.
  //
  // READ AT REQUEST TIME, NOT MODULE SCOPE. If Calum sets SENTRY_DSN in Vercel,
  // reporting must start working without anyone editing this file. A
  // module-scope constant would be evaluated once and could be inlined by the
  // bundler, baking today's absence in permanently - a worse bug than the one
  // being fixed, and an invisible one.
  //
  // WHAT THIS DOES AND DOES NOT BUY, MEASURED RATHER THAN ASSUMED. The backlog
  // item proposed this so that "the edge bundle drops the SDK until the owner
  // adds one". It does not, and two full production builds say so:
  //
  //   edge-instrumentation.js   before 260,543 bytes   after 260,567 bytes
  //
  // It grew by the 24 bytes of the guard, and the Sentry SDK is still in there.
  // The reason is that plain SENTRY_DSN is NOT inlined at build time on the
  // server, so webpack cannot prove this branch dead and keeps the import.
  // The client side does get the bundle saving (instrumentation-client.ts)
  // precisely because NEXT_PUBLIC_SENTRY_DSN is inlined.
  //
  // So what is fixed here is the WORK, not the bytes: Sentry.init() no longer
  // runs on every edge invocation. Dropping the 254 KB as well would mean
  // gating on a build-time-inlined variable, which buys the bytes at the cost
  // of needing a redeploy before a newly set DSN takes effect. That is a
  // trade-off for the owner to make, not one to slip in, and it is recorded in
  // the work log rather than done here.
  const hasDsn = Boolean(process.env.SENTRY_DSN)

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    if (hasDsn) await import('../sentry.server.config')

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
    if (hasDsn) await import('../sentry.server.config')
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

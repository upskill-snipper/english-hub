// ─── Client-side Sentry, loaded only if it will actually be used ─────────────
//
// WHY THIS FILE EXISTS
// `@sentry/nextjs` was imported at the top of eight client modules, two of
// which - `src/app/error.tsx` and `src/app/global-error.tsx` - sit in EVERY
// route's client graph. The result: a 460 KB chunk (~128 KB gzip) downloaded,
// parsed and executed by every visitor on all 2,637 page entries, to run an
// SDK that production has switched off because it has no DSN.
//
// The obvious fix - making `instrumentation-client.ts` import Sentry lazily -
// would have measured ZERO bytes saved, because the two root error boundaries
// pull the same package in independently. All eight importers have to move
// together or none of them count. That is why this module exists rather than a
// one-line change at the init site.
//
// HOW IT SAVES THE BYTES
// `NEXT_PUBLIC_SENTRY_DSN` is inlined by Next at build time, so with no DSN the
// guard below is `if (!undefined) return` and everything after it is
// unreachable and removed. Even when a DSN IS set, `import()` puts the SDK in a
// separate async chunk that is fetched only when an error is actually captured
// - so it never sits in the initial bundle either way.
//
// Set a DSN in Vercel and client reporting comes back on its own, with no code
// change. Server-side reporting, `withSentryConfig`, source-map upload and
// every API route's `import * as Sentry` are untouched: those cost the browser
// nothing and are the paths that actually report today.
//
// THE CONTEXT ARGUMENT IS NOT DECORATION
// An earlier draft of this helper took `context?: Record<string, unknown>` and
// forwarded it as `{ extra: context }`. That silently corrupted the one caller
// that passes anything: `useProgressSync` sends `{ tags: { feature:
// 'progress-sync' } }`, which would have arrived as `extra.tags.feature` and
// dropped the tag that OBSERVABILITY_SETUP.md documents as the per-route
// filter. The parameter type is derived from the real `captureException`
// signature below, so it cannot drift from what Sentry actually accepts.
// ────────────────────────────────────────────────────────────────────────────

/**
 * The second parameter of Sentry's own `captureException`, derived rather than
 * restated so a future SDK bump cannot leave a hand-written shape behind.
 *
 * `import()` in TYPE position is erased at compile time - it adds nothing to
 * the bundle, which is the entire point of this module.
 */
export type ClientCaptureContext = Parameters<typeof import('@sentry/nextjs').captureException>[1]

/**
 * Report a client-side exception to Sentry, if and only if a DSN is configured.
 *
 * Fire-and-forget by design: a failure to load or report must never surface to
 * a learner who is already looking at an error boundary. Both the import and
 * the capture are swallowed.
 *
 * @param error The caught value.
 * @param context Passed through to Sentry unchanged - `tags`, `extra`,
 *                `level`, a scope callback, whatever the SDK accepts.
 */
export function captureClientException(error: unknown, context?: ClientCaptureContext): void {
  if (!process.env.NEXT_PUBLIC_SENTRY_DSN) return

  void import('@sentry/nextjs')
    .then((Sentry) => {
      Sentry.captureException(error, context)
    })
    .catch(() => {
      // Reporting the failure to report is not available to us here.
    })
}

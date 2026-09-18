// ─── Client Sentry init, deferred behind the DSN check ───────────────────────
//
// This file used to import `@sentry/nextjs` at the top and call `Sentry.init()`
// unconditionally. The `enabled:` flag below meant the SDK then switched itself
// off for every visitor - after 460 KB of it had already been downloaded,
// parsed and run. Production has no DSN, so that was the whole story: a third
// of a megabyte to configure nothing.
//
// The value import is now a type-only import (erased at compile time) plus a
// dynamic `import()` inside the DSN guard. `NEXT_PUBLIC_SENTRY_DSN` is inlined
// at build time, so with no DSN the guard is statically false and the SDK is
// dropped from the bundle entirely; set one in Vercel and it returns with no
// code change.
//
// NOTE: this file was never the only thing keeping Sentry in the client graph.
// Eight modules imported it at top level, including the two root error
// boundaries that sit on every route - changing only this file would have saved
// nothing. See `src/lib/sentry-client.ts` for the rest.
//
// WHAT IS DELIBERATELY UNCHANGED: both PII scrubbers, and every sample rate
// including `tracesSampleRate: 0.1`. Turning client tracing off would cut a
// further sub-bundle, but it is a monitoring decision rather than a
// performance one and it is Calum's to make - it is on his list.
// ────────────────────────────────────────────────────────────────────────────

import type { ErrorEvent, Breadcrumb } from '@sentry/nextjs'

// ─── PII scrubbers (client runtime) ──────────────────────────────────────────
//
// See the matching comment in instrumentation.ts. These scrubbers MUST run
// here too — Next 14+ prefers instrumentation-client.ts over the legacy
// sentry.client.config.ts, and a beforeSend defined only in the legacy file
// can be silently ignored. We duplicate the scrubber so PII cannot reach
// Sentry regardless of which config path the SDK actually honours.
function beforeSend(event: ErrorEvent): ErrorEvent {
  if (event.user) {
    delete event.user.email
    delete event.user.username
  }
  if (event.request?.data) {
    event.request.data = '[Filtered]'
  }
  if (event.request?.cookies) {
    delete event.request.cookies
  }
  return event
}

function beforeBreadcrumb(breadcrumb: Breadcrumb): Breadcrumb {
  if (breadcrumb.data?.body) {
    delete breadcrumb.data.body
  }
  return breadcrumb
}

// The guard is what removes the SDK from the bundle: with no DSN inlined at
// build time this is unreachable and the `import()` is eliminated. The
// `enabled:` option below is kept as well, so the two conditions have to agree
// before anything is ever reported.
if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  void import('@sentry/nextjs')
    .then((Sentry) => {
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 0.1,
        // Session replay disabled by sampling; if a future change enables it,
        // the integration below masks text/inputs/media so student essays and
        // form data never leave the browser unredacted.
        replaysSessionSampleRate: 0,
        replaysOnErrorSampleRate: 0,
        environment: process.env.NODE_ENV,
        enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV === 'production',
        beforeSend,
        beforeBreadcrumb,
      })
    })
    .catch(() => {
      // An error monitor that cannot load has nowhere to report that fact.
    })
}

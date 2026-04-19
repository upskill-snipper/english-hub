import * as Sentry from '@sentry/nextjs'

// ─── PII scrubbers (shared between Node + Edge runtimes) ─────────────────────
//
// These MUST run wherever Sentry.init is called — not only in the legacy
// sentry.*.config.ts files. In Next 14+ the sentry-nextjs SDK prefers
// instrumentation.ts / instrumentation-client.ts over the legacy configs,
// so a beforeSend defined only in sentry.server.config.ts can be silently
// ignored. That regression would ship every server error — including
// student essay bodies, raw emails, and cookies — to Sentry.
//
// We therefore duplicate the scrubber here (see also
// sentry.server.config.ts / sentry.edge.config.ts for the legacy path).
// If either place fires, the scrub runs.

function beforeSend(event: Sentry.ErrorEvent): Sentry.ErrorEvent {
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

function beforeBreadcrumb(breadcrumb: Sentry.Breadcrumb): Sentry.Breadcrumb {
  if (breadcrumb.data?.body) {
    delete breadcrumb.data.body
  }
  return breadcrumb
}

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 0.1,
      environment: process.env.NODE_ENV,
      enabled: !!process.env.SENTRY_DSN && process.env.NODE_ENV === 'production',
      beforeSend,
      beforeBreadcrumb,
    })
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 0.1,
      environment: process.env.NODE_ENV,
      enabled: !!process.env.SENTRY_DSN && process.env.NODE_ENV === 'production',
      beforeSend,
      beforeBreadcrumb,
    })
  }
}

export const onRequestError = Sentry.captureRequestError

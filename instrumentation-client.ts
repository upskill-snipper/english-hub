import * as Sentry from '@sentry/nextjs'

// ─── PII scrubbers (client runtime) ──────────────────────────────────────────
//
// See the matching comment in instrumentation.ts. These scrubbers MUST run
// here too — Next 14+ prefers instrumentation-client.ts over the legacy
// sentry.client.config.ts, and a beforeSend defined only in the legacy file
// can be silently ignored. We duplicate the scrubber so PII cannot reach
// Sentry regardless of which config path the SDK actually honours.
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

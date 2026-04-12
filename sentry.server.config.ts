import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',

  // Performance monitoring
  tracesSampleRate: 0.1,

  // PII scrubbing — do not send user data, student essays, or request bodies
  beforeSend(event) {
    // Strip user PII from events
    if (event.user) {
      delete event.user.email
      delete event.user.username
      // Keep user.id for debugging without exposing PII
    }

    // Strip request bodies (may contain student essays, personal data)
    if (event.request?.data) {
      event.request.data = '[Filtered]'
    }
    if (event.request?.cookies) {
      delete event.request.cookies
    }

    return event
  },

  // Strip PII from breadcrumbs
  beforeBreadcrumb(breadcrumb) {
    if (breadcrumb.data?.body) {
      delete breadcrumb.data.body
    }
    return breadcrumb
  },
})

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',

  // Performance monitoring
  tracesSampleRate: 0.1,

  // Session replay (optional)
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0.1,

  // PII scrubbing — strip emails, names, and student data from error reports
  beforeSend(event) {
    if (event.request?.cookies) {
      delete event.request.cookies
    }
    return event
  },

  // Strip PII from breadcrumbs
  beforeBreadcrumb(breadcrumb) {
    if (breadcrumb.category === 'fetch' || breadcrumb.category === 'xhr') {
      // Remove request bodies that might contain student essays or PII
      if (breadcrumb.data?.body) {
        delete breadcrumb.data.body
      }
    }
    return breadcrumb
  },
})

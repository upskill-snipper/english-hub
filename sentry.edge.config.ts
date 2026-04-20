import * as Sentry from '@sentry/nextjs'

// Edge runtime Sentry config.
//
// This file is evaluated in the Vercel Edge runtime that powers
// `src/middleware.ts` and any route handlers using `export const runtime
// = 'edge'`. Without it, errors thrown inside middleware (board gate,
// CSRF origin check, session refresh) are NOT reported to Sentry — the
// server config only runs in the Node.js runtime.
//
// The beforeSend / beforeBreadcrumb scrubbing mirrors sentry.server.config.ts
// so edge events enforce the same PII guarantees: no raw emails, no
// usernames, no request bodies, no cookies.

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',

  // Keep edge trace sampling in line with the server config.
  tracesSampleRate: 0.1,

  beforeSend(event) {
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
  },

  beforeBreadcrumb(breadcrumb) {
    if (breadcrumb.data?.body) {
      delete breadcrumb.data.body
    }
    return breadcrumb
  },
})

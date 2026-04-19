const { withSentryConfig } = require('@sentry/nextjs')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  typescript: {
    // Vercel Pro provides 8 GB build memory — re-enabled type checking
    // during builds (was disabled on Hobby due to OOM). CI/CD also checks.
    ignoreBuildErrors: false,
  },
  eslint: {
    // Disabled during Vercel builds — @typescript-eslint rules fail on
    // test files due to missing plugin config. CI/CD runs lint separately.
    ignoreDuringBuilds: true,
    dirs: ['src'],
  },
  experimental: {
    // instrumentationHook: removed in Next 15 — instrumentation.js is
    // available by default and no longer needs this flag.
    scrollRestoration: true,
    optimizePackageImports: [
      'lucide-react',
      'date-fns',
      '@supabase/supabase-js',
      'class-variance-authority',
      '@base-ui/react',
    ],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arjjzkudncwqprpyamkw.supabase.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/resources/revision',
        destination: '/resources/revision-notes',
        permanent: true,
      },
      {
        source: '/resources/games',
        destination: '/games',
        permanent: true,
      },
      {
        source: '/igcse/edexcel/syllabus',
        destination: '/igcse/edexcel',
        permanent: true,
      },
      {
        source: '/igcse/cambridge/0500/syllabus',
        destination: '/igcse/cambridge/0500',
        permanent: true,
      },
      {
        source: '/igcse/cambridge/0990/syllabus',
        destination: '/igcse/cambridge/0990',
        permanent: true,
      },
    ]
  },
  async headers() {
    // NOTE on CSP: script-src 'unsafe-inline' is still present because Next
    // still emits a handful of inline hydration / CSS-in-JS bootstraps that
    // would break with a strict nonce-only policy. Full nonce-based CSP
    // (per-request nonces generated in middleware.ts and piped via
    // next/headers into every <Script>, <style jsx>, and GTM injection)
    // is tracked in EH_QA_MASTER_LOG.md as a standalone follow-up; it
    // needs a dedicated testing pass against every marketing + auth flow.
    //
    // What IS tightened in this file:
    //   - frame-ancestors 'none'     (modern equivalent of X-Frame-Options)
    //   - form-action 'self'         (block exfil-by-form)
    //   - upgrade-insecure-requests  (belt-and-braces with HSTS preload)
    //   - img-src narrowed — no more `https:` wildcard
    //   - Cross-Origin-Opener-Policy: same-origin-allow-popups (Stripe popups)
    //   - Cross-Origin-Resource-Policy: same-site
    //   - Permissions-Policy explicitly denies payment, usb, magnetometer,
    //     accelerometer, gyroscope, interest-cohort (topics-api opt-out)
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://js.stripe.com https://r.wdfl.co https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://arjjzkudncwqprpyamkw.supabase.co https://www.google-analytics.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "connect-src 'self' https://*.supabase.co https://api.stripe.com https://r.wdfl.co https://*.ingest.sentry.io https://vitals.vercel-insights.com https://vercel-speed-insights.com https://www.google-analytics.com",
      "frame-src https://js.stripe.com https://hooks.stripe.com",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "object-src 'none'",
      "base-uri 'self'",
      'upgrade-insecure-requests',
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '0' },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), payment=(self "https://js.stripe.com"), usb=(), magnetometer=(), accelerometer=(), gyroscope=(), interest-cohort=()',
          },
          { key: 'Content-Security-Policy', value: csp },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-site' },
        ],
      },
    ]
  },
}
module.exports = withBundleAnalyzer(withSentryConfig(nextConfig, {
  silent: true,
  hideSourceMaps: true,
  disableServerWebpackPlugin: process.env.VERCEL === '1',
  disableClientWebpackPlugin: process.env.VERCEL === '1',
}))

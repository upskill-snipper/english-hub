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
    instrumentationHook: true,
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
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-XSS-Protection', value: '0' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // TODO: replace 'unsafe-inline' in script-src with nonce-based CSP once Next.js supports it cleanly
          { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com https://r.wdfl.co https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.supabase.co https://api.stripe.com https://r.wdfl.co https://*.ingest.sentry.io; frame-src https://js.stripe.com https://hooks.stripe.com; object-src 'none'; base-uri 'self';" },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
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

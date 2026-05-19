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
    // Additions from Cycle 3 bundle deep-dive: barrel-heavy packages where
    // tree-shaking via modularizeImports materially reduces shared chunk size.
    optimizePackageImports: [
      '@base-ui/react',
      '@sentry/nextjs',
      '@supabase/ssr',
      '@supabase/supabase-js',
      'class-variance-authority',
      'cmdk',
      'date-fns',
      'dompurify',
      'lucide-react',
      'next-themes',
      'sonner',
      'tailwind-merge',
      'zod',
      'zustand',
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
      // Canonical www→apex host redirect lives in src/middleware.ts
      // (a next.config `has:host` rule did not fire because the edge
      // serves the www alias before the route layer — see middleware).

      // ── 2026-05-19 institutional repositioning ───────────────────
      // The /for-* marketing routes were consolidated onto cleaner
      // canonical URLs. 308s preserve link equity from inbound links,
      // the sitemap and prior SEO. More specific paths first.
      {
        source: '/for-schools/pilot',
        destination: '/school-pilot',
        permanent: true,
      },
      {
        source: '/for-schools',
        destination: '/schools',
        permanent: true,
      },
      {
        source: '/for-teachers',
        destination: '/teachers',
        permanent: true,
      },
      {
        source: '/for-students',
        destination: '/students',
        permanent: true,
      },

      {
        source: '/privacy-policy',
        destination: '/legal/privacy',
        permanent: true,
      },
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
      // Aron Ralston's memoir is widely searched for as "127 Hours"
      // (the 2010 Danny Boyle film adaptation). Students typing the
      // film title hit a 404 because the canonical slug uses the book
      // title. Redirect both the revision-text and revision-notes
      // paths to the canonical entry.
      {
        source: '/revision/texts/127-hours',
        destination: '/revision/texts/between-a-rock-and-a-hard-place',
        permanent: true,
      },
      {
        source: '/resources/revision-notes/127-hours',
        destination: '/resources/revision-notes/between-a-rock-and-a-hard-place',
        permanent: true,
      },
      // H1 I3: the AO5 blog post was retitled to focus on AO2. Blog slugs
      // are file-derived (content/blog/<slug>.mdx) and `dynamicParams =
      // false` hard-404s any slug without a backing file. The content file
      // keeps its name (ao5-gcse-english-literature.mdx), so the original
      // public URL must stay the canonical resolvable one. We add the
      // ALIAS direction: the new corrected-title URL → the existing file
      // slug, so inbound links using the new slug don't 404. Sitemap owner:
      // canonical blog URL remains /blog/ao5-gcse-english-literature.
      {
        source: '/blog/the-methods-objective-ao2-gcse-english-literature',
        destination: '/blog/ao5-gcse-english-literature',
        permanent: true,
      },
      // H1 H7: consolidate safeguarding onto the single authoritative
      // policy at /safeguarding.
      {
        source: '/legal/safeguarding',
        destination: '/safeguarding',
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
          // Cross-origin isolation (P1-SEC-7): COOP pops opener references for
          // cross-origin windows (mitigates Spectre-class leaks + tab-napping);
          // CORP prevents other origins from embedding our resources.
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Resource-Policy', value: 'same-origin' },
          // NOTE: Content-Security-Policy is now set per-request in
          // src/middleware.ts so each response carries a fresh nonce for
          // inline scripts (see buildCsp in middleware.ts). A static CSP
          // can't include a nonce because every response would share it,
          // defeating the purpose. `frame-ancestors` + `form-action` live
          // in that dynamic CSP too.
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

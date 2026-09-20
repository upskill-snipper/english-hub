const { withSentryConfig } = require('@sentry/nextjs')
const ROUTE_REDIRECTS = require('./src/lib/seo/route-redirects.json')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  // ─── AI crawlers get the <head> before the body ───────────────────────────
  //
  // THE DEFECT (measured 20 September 2026 across all 1,303 sitemap URLs). Next
  // 15 STREAMS metadata: for a normal visitor the shell is flushed immediately
  // and <title>, the meta description and the canonical arrive later, which is
  // faster and entirely correct for a browser. On 1,111 of 1,303 pages (85.3%)
  // the <title> therefore lands OUTSIDE </head> - median byte 58,251, and at
  // byte 723,817 on the longest reader page.
  //
  // Next already handles this for crawlers that do not execute JavaScript, by
  // blocking the response until metadata is resolved for any user agent
  // matching `htmlLimitedBots`. Its default list is from the social/search era:
  // Bingbot, Applebot, Twitterbot, Slackbot, facebookexternalhit, and so on.
  //
  // It contains none of the AI answer engines. Verified by fetching
  // /revision/texts/macbeth as GPTBot, ClaudeBot and PerplexityBot: all three
  // received </head> at byte 8,558 and the <title> at byte 79,278. They index
  // what they are given and do not render, so for GEO purposes those pages have
  // no title, no description and no canonical at all.
  //
  // This is Next's default string PLUS that cohort. Googlebot is deliberately
  // absent: it renders JavaScript, so blocking the stream for it would cost
  // real speed on the surface where speed is a ranking factor, and gain nothing.
  htmlLimitedBots:
    /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight|GPTBot|OAI-SearchBot|ChatGPT-User|ClaudeBot|Claude-SearchBot|Claude-User|anthropic-ai|PerplexityBot|Perplexity-User|Amazonbot|Bytespider|CCBot|meta-externalagent|meta-externalfetcher|Diffbot|omgili|YouBot|cohere-ai|Timpibot|ImagesiftBot/i,
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
    // CUI-9 (19 September 2026): these used to be 21 inline literals here, and
    // the middleware could not see them. The Arabic surface rewrites /ar/<path>
    // to <path> internally, and an internal rewrite does not re-enter this
    // table - so EVERY one of these rules was unreachable under /ar. Retired
    // marketing pages still rendered in Arabic, and so did /ar/privacy-policy
    // and /ar/legal/safeguarding, which are compliance URLs.
    //
    // The table now lives in src/lib/seo/route-redirects.json and is read by
    // both this file and src/middleware.ts, so the two cannot drift. Add rules
    // there.
    return ROUTE_REDIRECTS.redirects
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
          // SEC-10 (19 September 2026): `payment=(self)` was previously added
          // ONLY by the middleware's own duplicate of this header, so Stripe's
          // Apple Pay / Google Pay flows depended on that copy winning the
          // race. The middleware's copies are gone and this value is now the
          // one that ships - it must keep `payment=(self)` or wallet payments
          // break on every route.
          //
          // `microphone=(self)` since 19 September 2026, and it is a bug fix
          // rather than a relaxation for its own sake. The value was
          // `microphone=()`, which disables the microphone for EVERY origin
          // including our own, so the Web Speech API could not start. The
          // product ships a dictation button on seven surfaces - the marking
          // form, essay feedback, the marker, school marking, two IELTS pages -
          // and every one of them rendered a microphone that did nothing when
          // clicked. Reported from the live site.
          //
          // `(self)` is the minimum that makes it work: our own origin only,
          // no third party, and the browser still asks the user for permission
          // on first use. Camera and geolocation stay fully closed because
          // nothing here uses them.
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(self), geolocation=(), payment=(self)',
          },
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
// REL-6 (19 September 2026): `hideSourceMaps`, `disableServerWebpackPlugin` and
// `disableClientWebpackPlugin` were removed here. They were NOT doing what they
// said. All three were dropped from @sentry/nextjs at v8 and this project is on
// v10.55.0; they are absent from the SDK's own deprecated-option shim, so they
// were silently ignored unknown keys.
//
// That matters because they read as a safety mechanism and were not one: the
// comment said the webpack plugins were disabled on Vercel, and they were not
// disabled at all. Anyone reasoning about the documented build hang would have
// concluded a guard was in place. Deleting them changes no behaviour and stops
// the file asserting something untrue.
//
// Source-map upload is deliberately NOT configured here. The documented route
// is the CLI step already wired at package.json `sentry:sourcemaps` (see
// RUNBOOK.md) - adding org/project/authToken here would activate the very
// plugin recorded as hanging the build, with no working kill switch to fall
// back on, because the keys that used to provide one no longer exist.
module.exports = withBundleAnalyzer(
  withSentryConfig(nextConfig, {
    silent: true,
  }),
)

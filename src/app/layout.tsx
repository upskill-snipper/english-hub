import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import {
  Newsreader,
  Geist,
  JetBrains_Mono,
  Noto_Naskh_Arabic,
  IBM_Plex_Sans_Arabic,
} from 'next/font/google'
import { SupabaseProvider } from '@/components/providers/supabase-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { RootLayoutShell } from '@/components/layout/root-layout-shell'
import ROUTE_LASTMOD from '@/lib/seo/route-lastmod.json'
import { WebsiteJsonLd } from '@/components/seo/website-json-ld'
import { ReviewedBylineJsonLd } from '@/components/seo/json-ld'
import { PathBreadcrumbJsonLd } from '@/components/seo/path-breadcrumb-json-ld'
import { CookieConsent } from '@/components/cookie-consent'
import { UtmCapture } from '@/components/utm-capture'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { ConsentGatedAnalytics } from '@/components/ConsentGatedAnalytics'
import { PostHogProvider } from '@/components/PostHogProvider'
import { TrustpilotInviteScript } from '@/components/trustpilot/TrustpilotInviteScript'
import { Suspense } from 'react'
import { BoardGate } from '@/components/board/BoardGate'
import { ThemeProvider } from '@/components/theme/theme-provider'
import { t } from '@/lib/i18n/t'
import './globals.css'

// Mona Sans was removed on 19 September 2026 (CUI-10). It was a 517 KB
// variable font, loaded and stamped onto <html> as --font-mona on every page,
// and NO CSS rule anywhere referenced that variable. Half a megabyte on every
// mobile page view, for a typeface that never rendered a single character.

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

// Arabic typography pairs. Both ship via next/font with `subsets:
// ['arabic']` so browsers pick them automatically for Arabic codepoints
// via the unicode-range fallback chain. No JS branching needed - the
// English fonts continue to render Latin text even when the layout is
// in dir="rtl" mode.
const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})
const plexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://theenglishhub.app'),
  title: {
    default: 'The English Hub - GCSE & IGCSE English revision, AI marked',
    template: '%s - The English Hub',
  },
  description:
    'Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. AQA, Edexcel, OCR, Eduqas and Cambridge covered.',
  alternates: {
    canonical: 'https://theenglishhub.app',
    // hreflang alternates - canonical English at root only, because THIS page
    // has no Arabic equivalent. An `ar` alternate here would point at a page
    // that does not exist and could not return-tag back, which is an invalid
    // hreflang cluster rather than a missing one.
    //
    // CORRECTED 20 September 2026 (SEO-6). This comment used to justify itself
    // by saying there are "no /ar URLs in the sitemap". There are forty: the
    // Arabic surface is the blog, served through the middleware rewrite rather
    // than an /ar route directory, and sitemap.ts adds /ar/blog/<slug> for
    // every post that has a variant. The conclusion above is unchanged and
    // still right; the reason given for it had stopped being true, which is
    // worse than no reason at all - the next person to add an Arabic page
    // would have read this and believed the surface did not exist.
    //
    // Those forty pages carry their own alternates: src/app/blog/[slug] emits
    // en-GB, ar and x-default from generateMetadata when a post has an Arabic
    // variant, which is where per-page hreflang belongs.
    languages: {
      'en-GB': 'https://theenglishhub.app',
      'x-default': 'https://theenglishhub.app',
    },
  },
  openGraph: {
    title: 'The English Hub - GCSE & IGCSE English revision, AI marked',
    description:
      'Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. AQA, Edexcel, OCR, Eduqas and Cambridge covered.',
    url: 'https://theenglishhub.app',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'The English Hub - GCSE and IGCSE English revision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The English Hub - GCSE & IGCSE English revision, AI marked',
    description:
      'Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. AQA, Edexcel, OCR, Eduqas and Cambridge covered.',
    images: ['/api/og'],
  },
}

export const viewport: Viewport = {
  // Dual - the browser chrome tracks the active theme.
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF7F0' },
    { media: '(prefers-color-scheme: dark)', color: '#0F1411' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Read the language mode the middleware stamped onto the request.
  // Two valid values: 'en' (default) and 'ar' (Arabic, RTL).
  // Bilingual mode was removed in May 2026; the middleware coerces
  // legacy `eh-lang=bi` cookies to 'en' before this code runs.
  const reqHeaders = await headers()
  const lang = reqHeaders.get('x-lang') ?? 'en'
  const cspNonce = reqHeaders.get('x-nonce') ?? undefined
  // Spanish (es) is LTR like English; only Arabic is RTL.
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  // `lang` attribute uses the BCP-47 tag the SR / browser actually cares
  // about. We don't have an explicit Gulf locale tag, so 'ar' (modern
  // standard) is the right umbrella value for screen readers and search
  // engines until we ship a per-route `/ar/...` URL strategy.
  const htmlLang = lang === 'ar' ? 'ar' : lang === 'es' ? 'es' : 'en-GB'
  const skipToContent = await t('a11y.skip_short')
  // This page's own last-modified date for the footer byline. Looked up here,
  // on the server, so the 62 KB map stays out of every client bundle - the
  // mistake this repository has already paid for once with the trilingual
  // dictionary. `undefined` for a route the map does not know (a blog slug,
  // say), and ReviewedByline then prints no date rather than a wrong one.
  const pageLastUpdated = (ROUTE_LASTMOD as Record<string, string>)[
    reqHeaders.get('x-pathname') ?? ''
  ]

  return (
    <html
      lang={htmlLang}
      dir={dir}
      data-lang={lang}
      suppressHydrationWarning
      className={`${newsreader.variable} ${geist.variable} ${jetBrainsMono.variable} ${notoNaskhArabic.variable} ${plexSansArabic.variable}`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        {process.env.NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID ? (
          <meta
            name="trustpilot-one-time-domain-verification-id"
            content={process.env.NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID}
          />
        ) : null}
        {process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ? (
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
          />
        ) : null}
        {process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION} />
        ) : null}
        <WebsiteJsonLd />
        <ReviewedBylineJsonLd nonce={cspNonce} />
        {/* A BreadcrumbList derived from this request's path. 426 of 1,329
            URLs (32.1%) emitted none at all; the worst were /resources with
            181 and /igcse with 93. Safe in a layout precisely because it is
            COMPUTED from the path rather than hard-coded - the distinction
            src/__tests__/no-hub-schema-in-layouts.test.ts draws. See the
            component for why it does not replace the 903 hand-written
            trails. */}
        <PathBreadcrumbJsonLd />
        {/* Rewardful is loaded by <ConsentGatedAnalytics /> below after
            the visitor accepts analytics/marketing cookies. Loading it
            unconditionally here would breach PECR reg. 6. */}
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:start-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          {skipToContent}
        </a>
        <ThemeProvider>
          <SupabaseProvider>
            <TooltipProvider>
              <PostHogProvider>
                <RootLayoutShell lastUpdated={pageLastUpdated}>
                  <BoardGate>{children}</BoardGate>
                </RootLayoutShell>
              </PostHogProvider>
              {/*
                A11Y-10: was hard-coded to bottom-right, so in Arabic every
                toast appeared on the far side of the screen from the content
                that caused it - and, on a phone, over the primary action.
                `dir` is already computed above.
              */}
              <Toaster richColors position={dir === 'rtl' ? 'bottom-left' : 'bottom-right'} />
              <CookieConsent />
              <UtmCapture />
            </TooltipProvider>
          </SupabaseProvider>
        </ThemeProvider>
        {/* Vercel Analytics + Speed Insights + Rewardful - all gated behind
            cookie consent so no non-essential trackers fire pre-consent. */}
        <ConsentGatedAnalytics />
        {/* Google Analytics 4 - auto-loads if user has consented + tracks SPA route changes */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {/* Trustpilot InviteJS - async, non-blocking. No-op without
            NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY set. */}
        <TrustpilotInviteScript />
      </body>
    </html>
  )
}

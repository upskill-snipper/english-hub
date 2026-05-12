import type { Metadata, Viewport } from 'next'
import { headers } from 'next/headers'
import localFont from 'next/font/local'
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
import { WebsiteJsonLd } from '@/components/seo/json-ld'
import { CookieConsent } from '@/components/cookie-consent'
import { UtmCapture } from '@/components/utm-capture'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import { ConsentGatedAnalytics } from '@/components/ConsentGatedAnalytics'
import { PostHogProvider } from '@/components/PostHogProvider'
import { TrustpilotInviteScript } from '@/components/trustpilot/TrustpilotInviteScript'
import { Suspense } from 'react'
import { BoardGate } from '@/components/board/BoardGate'
import './globals.css'

const monaSans = localFont({
  src: '../../public/fonts/MonaSansVF.woff2',
  variable: '--font-mona',
  display: 'swap',
  weight: '200 900',
})

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
// via the unicode-range fallback chain. No JS branching needed — the
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
    default: 'The English Hub — GCSE & IGCSE English revision, AI marked',
    template: '%s — The English Hub',
  },
  description:
    'Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. Six boards covered.',
  alternates: {
    canonical: 'https://theenglishhub.app',
  },
  openGraph: {
    title: 'The English Hub — GCSE & IGCSE English revision, AI marked',
    description:
      'Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. Six boards covered.',
    url: 'https://theenglishhub.app',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'The English Hub — GCSE and IGCSE English revision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The English Hub — GCSE & IGCSE English revision, AI marked',
    description:
      'Pick your exam board and revise GCSE or IGCSE English with AI marking against the AO rubric. Six boards covered.',
    images: ['/api/og'],
  },
}

export const viewport: Viewport = {
  themeColor: '#FBF7F0',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Read the language mode the middleware stamped onto the request.
  // Three valid values: 'en' (default), 'bi' (bilingual), 'ar' (Arabic).
  // The middleware already validates the cookie, so this is a safe read.
  const lang = (await headers()).get('x-lang') ?? 'en'
  const dir = lang === 'ar' ? 'rtl' : 'ltr'
  // `lang` attribute uses the BCP-47 tag the SR / browser actually cares
  // about. We don't have an explicit Gulf locale tag, so 'ar' (modern
  // standard) is the right umbrella value for screen readers and search
  // engines until we ship a per-route `/ar/...` URL strategy.
  const htmlLang = lang === 'ar' ? 'ar' : 'en-GB'

  return (
    <html
      lang={htmlLang}
      dir={dir}
      data-lang={lang}
      className={`${monaSans.variable} ${newsreader.variable} ${geist.variable} ${jetBrainsMono.variable} ${notoNaskhArabic.variable} ${plexSansArabic.variable}`}
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
        {/* Rewardful is loaded by <ConsentGatedAnalytics /> below after
            the visitor accepts analytics/marketing cookies. Loading it
            unconditionally here would breach PECR reg. 6. */}
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
        >
          Skip to content
        </a>
        <SupabaseProvider>
          <TooltipProvider>
            <PostHogProvider>
              <RootLayoutShell>
                <BoardGate>{children}</BoardGate>
              </RootLayoutShell>
            </PostHogProvider>
            <Toaster richColors position="bottom-right" />
            <CookieConsent />
            <UtmCapture />
          </TooltipProvider>
        </SupabaseProvider>
        {/* Vercel Analytics + Speed Insights + Rewardful — all gated behind
            cookie consent so no non-essential trackers fire pre-consent. */}
        <ConsentGatedAnalytics />
        {/* Google Analytics 4 — auto-loads if user has consented + tracks SPA route changes */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {/* Trustpilot InviteJS — async, non-blocking. No-op without
            NEXT_PUBLIC_TRUSTPILOT_INVITE_KEY set. */}
        <TrustpilotInviteScript />
      </body>
    </html>
  )
}

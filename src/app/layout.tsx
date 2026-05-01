import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
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
import { getServerBoard } from '@/lib/board/get-server-board'
import './globals.css'

const monaSans = localFont({
  src: '../../public/fonts/MonaSansVF.woff2',
  variable: '--font-mona',
  display: 'swap',
  weight: '200 900',
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
  const initialBoard = await getServerBoard()
  return (
    <html lang="en-GB" className={monaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="/manifest.json" />
        {process.env.NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID ? (
          <meta
            name="trustpilot-one-time-domain-verification-id"
            content={process.env.NEXT_PUBLIC_TRUSTPILOT_VERIFICATION_ID}
          />
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
                <BoardGate initialBoard={initialBoard}>{children}</BoardGate>
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

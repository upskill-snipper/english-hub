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
    default: 'The English Hub — Master English. Ace Your Exams.',
    template: '%s — The English Hub',
  },
  description:
    'GCSE, IGCSE & KS3 English platform with 470+ courses, 30 interactive poem study pages, 7 GCSE-grade games, a full revision hub (Grade 5/7/9 guides), reading assessment with fluency testing, AI essay feedback, and 130+ mock papers. AQA, Edexcel, OCR & WJEC.',
  alternates: {
    canonical: 'https://theenglishhub.app',
  },
  openGraph: {
    title: 'The English Hub — Master English. Ace Your Exams.',
    description: '470+ courses, 30 interactive poem studies, 7 GCSE-grade games, full revision hub with grade 5/7/9 targets, reading assessment, AI essay feedback and 130+ mock papers. AQA, Edexcel, OCR & WJEC.',
    url: 'https://theenglishhub.app',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'The English Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The English Hub — Master English. Ace Your Exams.',
    description: '470+ courses, 30 interactive poem studies, 7 GCSE-grade games, revision hub, reading assessment & AI essay feedback. AQA, Edexcel, OCR & WJEC.',
    images: ['/api/og'],
  },
}

export const viewport: Viewport = {
  themeColor: '#FBF7F0',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const initialBoard = await getServerBoard()
  return (
    <html lang="en-GB" className={monaSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <WebsiteJsonLd />
        {/* Rewardful is loaded by <ConsentGatedAnalytics /> below after
            the visitor accepts analytics/marketing cookies. Loading it
            unconditionally here would breach PECR reg. 6. */}
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
          Skip to content
        </a>
        <SupabaseProvider>
          <TooltipProvider>
            <RootLayoutShell>
              <BoardGate initialBoard={initialBoard}>{children}</BoardGate>
            </RootLayoutShell>
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
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { SupabaseProvider } from '@/components/providers/supabase-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { RootLayoutShell } from '@/components/layout/root-layout-shell'
import { WebsiteJsonLd } from '@/components/seo/json-ld'
import { CookieConsent } from '@/components/cookie-consent'
import { UtmCapture } from '@/components/utm-capture'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
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
  themeColor: '#090c14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={monaSans.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <WebsiteJsonLd />
        {process.env.NEXT_PUBLIC_REWARDFUL_KEY && (
          <Script
            src="https://r.wdfl.co/rw.js"
            data-rewardful={process.env.NEXT_PUBLIC_REWARDFUL_KEY}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
          Skip to content
        </a>
        <SupabaseProvider>
          <TooltipProvider>
            <RootLayoutShell>{children}</RootLayoutShell>
            <Toaster richColors position="bottom-right" />
            <CookieConsent />
            <UtmCapture />
          </TooltipProvider>
        </SupabaseProvider>
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <Script
            id="ga4-consent-check"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var consent = localStorage.getItem('cookie-consent');
                  if (consent === 'all') {
                    var s = document.createElement('script');
                    s.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}';
                    s.async = true;
                    document.head.appendChild(s);
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
                  }
                })();
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}

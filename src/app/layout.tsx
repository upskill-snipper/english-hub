import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { SupabaseProvider } from '@/components/providers/supabase-provider'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/sonner'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { BoardSidebar } from '@/components/layout/board-sidebar'
import { BoardGate } from '@/components/layout/board-gate'
import { WebsiteJsonLd } from '@/components/seo/json-ld'
import { CookieConsent } from '@/components/cookie-consent'
import { Analytics } from '@vercel/analytics/react'
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
    'Professional KS3, GCSE, and IGCSE English tutoring platform. Structured courses, exam-style practice, and revision tools to help you achieve top grades.',
  alternates: {
    canonical: 'https://theenglishhub.app',
  },
  openGraph: {
    title: 'The English Hub — Master English. Ace Your Exams.',
    description: 'Expert GCSE, IGCSE & KS3 English courses, practice questions, and revision tools. AQA, Edexcel, OCR & WJEC Eduqas exam boards.',
    url: 'https://theenglishhub.app',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/api/og', width: 1200, height: 630, alt: 'The English Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The English Hub — Master English. Ace Your Exams.',
    description: 'Expert GCSE, IGCSE & KS3 English courses, practice questions, and revision tools. AQA, Edexcel, OCR & WJEC Eduqas exam boards.',
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
            <Header />
            <BoardGate />
            <div className="flex flex-col md:flex-row min-h-[calc(100vh-3.5rem)]">
              <BoardSidebar />
              <div id="main-content" className="flex-1 min-w-0">
                {children}
              </div>
            </div>
            <Footer />
            <Toaster richColors position="bottom-right" />
            <CookieConsent />
          </TooltipProvider>
        </SupabaseProvider>
        <Analytics />
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

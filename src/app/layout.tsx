import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { SupabaseProvider } from '@/components/providers/supabase-provider'
import { Header } from '@/components/layout/header'
import { BoardSidebar } from '@/components/layout/board-sidebar'
import { BoardGate } from '@/components/layout/board-gate'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://theenglishhub.app'),
  title: 'The English Hub — Master English. Ace Your Exams.',
  description:
    'Professional KS3, GCSE, and IGCSE English tutoring platform. Structured courses, exam-style practice, and revision tools to help you achieve top grades.',
  openGraph: {
    title: 'The English Hub – Master English. Ace Your Exams.',
    description: 'Expert GCSE, IGCSE & KS3 English courses, practice questions, and revision tools. AQA & Edexcel exam boards.',
    url: 'https://theenglishhub.app',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The English Hub – Master English. Ace Your Exams.',
    description: 'Expert GCSE, IGCSE & KS3 English courses, practice questions, and revision tools.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NEXT_PUBLIC_REWARDFUL_KEY && (
          <Script
            src="https://r.wdfl.co/rw.js"
            data-rewardful={process.env.NEXT_PUBLIC_REWARDFUL_KEY}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="min-h-screen font-sans">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-accent focus:text-white focus:rounded">
          Skip to content
        </a>
        <SupabaseProvider>
          <Header />
          <BoardGate />
          <div className="flex flex-col md:flex-row min-h-[calc(100vh-4rem)]">
            <BoardSidebar />
            <div id="main-content" className="flex-1 min-w-0">
              {children}
            </div>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  )
}

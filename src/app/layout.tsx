import type { Metadata } from 'next'
import { SupabaseProvider } from '@/components/providers/supabase-provider'
import { Header } from '@/components/layout/header'
import './globals.css'

export const metadata: Metadata = {
  title: 'The English Hub — Master English. Ace Your Exams.',
  description:
    'Professional KS3 and GCSE English tutoring platform. Structured courses, exam-style practice, and revision tools to help you achieve top grades.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">
        <SupabaseProvider>
          <Header />
          <main>{children}</main>
        </SupabaseProvider>
      </body>
    </html>
  )
}

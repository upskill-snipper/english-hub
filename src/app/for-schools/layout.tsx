import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The English Hub for Schools | Bulk Student Licenses from £500/year',
  description:
    'Give your English department access to board-specific GCSE revision, practice questions with model answers, and exam guides. AQA, Edexcel, OCR, WJEC & IGCSE. From £10 per student per year.',
  openGraph: {
    title: 'The English Hub for Schools | Bulk Student Licenses from £500/year',
    description:
      'Give your English department access to board-specific GCSE revision, practice questions with model answers, and exam guides. From £10 per student per year.',
    url: 'https://theenglishhub.app/for-schools',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The English Hub for Schools | Bulk Student Licenses from £500/year',
    description:
      'Give your English department access to board-specific GCSE revision, practice questions with model answers, and exam guides. From £10 per student per year.',
  },
}

export default function ForSchoolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

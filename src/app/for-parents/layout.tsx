import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Parents — Track Your Child\'s English Progress | The English Hub',
  description:
    'Get real-time insights into your child\'s English revision progress, exam readiness, and areas for improvement. Weekly reports, weak area alerts, and exam readiness scores.',
  openGraph: {
    title: 'For Parents — Track Your Child\'s English Progress | The English Hub',
    description:
      'Watch your child\'s English grades improve with real-time progress tracking, weekly reports, and weak area alerts. GCSE, IGCSE & KS3.',
    url: 'https://theenglishhub.app/for-parents',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Parents — Track Your Child\'s English Progress | The English Hub',
    description:
      'Watch your child\'s English grades improve with real-time progress tracking, weekly reports, and weak area alerts.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/for-parents',
  },
}

export default function ForParentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

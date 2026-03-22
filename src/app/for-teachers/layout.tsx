import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Access for Teachers | The English Hub',
  description:
    'Get free premium access and share The English Hub with your students. Teachers get unlimited access to all courses, students get 20% off. AQA, Edexcel, OCR & WJEC.',
  openGraph: {
    title: 'Free Access for Teachers | The English Hub',
    description:
      'Get free premium access and share The English Hub with your students. Teachers get unlimited access to all courses, students get 20% off.',
    url: 'https://theenglishhub.app/for-teachers',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Access for Teachers | The English Hub',
    description:
      'Get free premium access and share The English Hub with your students. Teachers get unlimited access to all courses, students get 20% off.',
  },
}

export default function ForTeachersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press & media',
  description:
    'Press kit, company facts, and press contact for The English Hub - a UK-built GCSE and IGCSE English platform with AI feedback trained on real examiners\u2019 mark schemes.',
  alternates: { canonical: 'https://theenglishhub.app/press' },
  openGraph: {
    type: 'website',
    url: 'https://theenglishhub.app/press',
    title: 'Press & media | The English Hub',
    description:
      'Press kit, company facts, and press contact for The English Hub - a UK-built GCSE and IGCSE English platform with AI feedback trained on real examiners\u2019 mark schemes.',
    images: [
      {
        url: '/api/og?title=Press+%26+media+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Press & media | The English Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & media | The English Hub',
    description: 'Press kit, company facts, and press contact for The English Hub.',
  },
  robots: { index: true, follow: true },
}

export default function PressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

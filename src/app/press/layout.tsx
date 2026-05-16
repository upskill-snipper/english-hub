import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Press & media',
  description:
    'Press kit, company facts, and press contact for The English Hub — a UK-built GCSE and IGCSE English platform with AI feedback trained on real examiners\u2019 mark schemes.',
  alternates: { canonical: 'https://theenglishhub.app/press' },
  openGraph: {
    type: 'website',
    url: 'https://theenglishhub.app/press',
    title: 'Press & media | The English Hub',
    description:
      'Press kit, company facts, and press contact for The English Hub — a UK-built GCSE and IGCSE English platform with AI feedback trained on real examiners\u2019 mark schemes.',
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

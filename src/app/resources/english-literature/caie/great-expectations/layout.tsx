import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Great Expectations - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Great Expectations. Plot summary, character analysis, Dickens themes, key quotes, and exam techniques.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/caie/great-expectations',
  },
  openGraph: {
    title: 'Great Expectations - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Great Expectations. Plot summary, character analysis, Dickens themes, key quotes, and exam techniques.',
    images: [
      {
        url: '/api/og?title=Great+Expectations+-+CAIE+IGCSE+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Great Expectations - CAIE IGCSE - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

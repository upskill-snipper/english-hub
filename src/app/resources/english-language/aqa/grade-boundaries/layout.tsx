import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQA English Language Grade Boundaries',
  description:
    'AQA GCSE English Language grade boundaries with historical data. Understand the marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/aqa/grade-boundaries',
  },
  openGraph: {
    title: 'AQA English Language Grade Boundaries - The English Hub',
    description:
      'AQA GCSE English Language grade boundaries with historical data. Understand the marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
    images: [
      {
        url: '/api/og?title=AQA+English+Language+Grade+Boundaries+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'AQA English Language Grade Boundaries - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

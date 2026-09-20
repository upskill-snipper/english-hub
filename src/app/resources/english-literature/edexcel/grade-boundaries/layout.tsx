import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edexcel GCSE Literature Grade Boundaries',
  description:
    'Edexcel GCSE English Literature grade boundaries with historical data. Marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/grade-boundaries',
  },
  openGraph: {
    title: 'Edexcel GCSE Literature Grade Boundaries - The English Hub',
    description:
      'Edexcel GCSE English Literature grade boundaries with historical data. Marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
    images: [
      {
        url: '/api/og?title=Edexcel+GCSE+Literature+Grade+Boundaries+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Edexcel GCSE Literature Grade Boundaries - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

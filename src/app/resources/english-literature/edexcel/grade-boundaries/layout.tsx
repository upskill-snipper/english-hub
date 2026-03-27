import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edexcel English Literature Grade Boundaries',
  description:
    'Edexcel GCSE English Literature grade boundaries with historical data. Marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/edexcel/grade-boundaries' },
  openGraph: {
    title: 'Edexcel English Literature Grade Boundaries — The English Hub',
    description:
      'Edexcel GCSE English Literature grade boundaries with historical data. Marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQA English Language Grade Boundaries',
  description:
    'AQA GCSE English Language grade boundaries with historical data. Understand the marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/aqa/grade-boundaries' },
  openGraph: {
    title: 'AQA English Language Grade Boundaries — The English Hub',
    description:
      'AQA GCSE English Language grade boundaries with historical data. Understand the marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edexcel English Language Grade Boundaries',
  description:
    'Edexcel GCSE English Language grade boundaries with historical data. Marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/edexcel/grade-boundaries',
  },
  openGraph: {
    title: 'Edexcel English Language Grade Boundaries - The English Hub',
    description:
      'Edexcel GCSE English Language grade boundaries with historical data. Marks needed for grades 4, 5, 7, and 9 across Paper 1 and Paper 2.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

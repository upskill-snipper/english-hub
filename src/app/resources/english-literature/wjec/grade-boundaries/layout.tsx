import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WJEC English Literature Grade Boundaries',
  description:
    'WJEC Eduqas GCSE English Literature grade boundaries. Historical marks needed for grades 4, 5, 7, and 9 across both exam components.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/wjec/grade-boundaries' },
  openGraph: {
    title: 'WJEC English Literature Grade Boundaries — The English Hub',
    description:
      'WJEC Eduqas GCSE English Literature grade boundaries. Historical marks needed for grades 4, 5, 7, and 9 across both exam components.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

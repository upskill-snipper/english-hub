import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CAIE English Literature Grade Boundaries',
  description:
    'Cambridge IGCSE English Literature grade boundaries and thresholds. Historical data for Paper 1 and Paper 2 across recent examination series.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/grade-boundaries' },
  openGraph: {
    title: 'CAIE English Literature Grade Boundaries — The English Hub',
    description:
      'Cambridge IGCSE English Literature grade boundaries and thresholds. Historical data for Paper 1 and Paper 2 across recent examination series.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

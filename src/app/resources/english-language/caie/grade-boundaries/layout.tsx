import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CAIE English Language Grade Boundaries',
  description:
    'Cambridge IGCSE English Language grade boundaries and thresholds. Historical data for Paper 1 and Paper 2 across recent examination series.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/caie/grade-boundaries',
  },
  openGraph: {
    title: 'CAIE English Language Grade Boundaries - The English Hub',
    description:
      'Cambridge IGCSE English Language grade boundaries and thresholds. Historical data for Paper 1 and Paper 2 across recent examination series.',
    images: [
      {
        url: '/api/og?title=CAIE+English+Language+Grade+Boundaries+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'CAIE English Language Grade Boundaries - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CAIE IGCSE Unseen Poetry',
  description:
    'Master unseen poetry analysis for CAIE IGCSE English Literature. Step-by-step approach, annotation techniques, and strategies for top marks.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/caie/unseen-poetry',
  },
  openGraph: {
    title: 'CAIE IGCSE Unseen Poetry - The English Hub',
    description:
      'Master unseen poetry analysis for CAIE IGCSE English Literature. Step-by-step approach, annotation techniques, and strategies for top marks.',
    images: [
      {
        url: '/api/og?title=CAIE+IGCSE+Unseen+Poetry+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'CAIE IGCSE Unseen Poetry - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

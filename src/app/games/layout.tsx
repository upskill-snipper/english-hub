import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revision games',
  description:
    'Quick recall games for GCSE & IGCSE English: quote drills, technique spotting, character matching.',
  alternates: { canonical: 'https://theenglishhub.app/games' },
  openGraph: {
    title: 'Revision games - The English Hub',
    description:
      'Quick recall games for GCSE & IGCSE English: quote drills, technique spotting, character matching.',
    url: 'https://theenglishhub.app/games',
    images: [
      {
        url: '/api/og?title=Revision+games+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Revision games - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Songs of Ourselves Volume 1 - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Songs of Ourselves Volume 1. Poetry analysis, themes, techniques, and exam-ready comparison strategies.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/caie/songs-of-ourselves-v1',
  },
  openGraph: {
    title: 'Songs of Ourselves Volume 1 - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Songs of Ourselves Volume 1. Poetry analysis, themes, techniques, and exam-ready comparison strategies.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

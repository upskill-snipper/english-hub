import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edexcel Poetry Anthology',
  description:
    'Edexcel GCSE English Literature poetry anthology guide. Complete analysis of anthology poems with themes, techniques, and comparison strategies.',
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry/edexcel-anthology' },
  openGraph: {
    title: 'Edexcel Poetry Anthology - The English Hub',
    description:
      'Edexcel GCSE English Literature poetry anthology guide. Complete analysis of anthology poems with themes, techniques, and comparison strategies.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Academic Vocabulary',
  description:
    'Build your academic vocabulary for GCSE English essays. Formal word choices, analytical verbs, and connective phrases to elevate your writing.',
  alternates: { canonical: 'https://theenglishhub.app/resources/vocabulary/academic' },
  openGraph: {
    title: 'Academic Vocabulary - The English Hub',
    description:
      'Build your academic vocabulary for GCSE English essays. Formal word choices, analytical verbs, and connective phrases to elevate your writing.',
    images: [
      {
        url: '/api/og?title=Academic+Vocabulary+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Academic Vocabulary - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

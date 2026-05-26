import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Descriptive Vocabulary',
  description:
    'Expand your descriptive vocabulary for GCSE English creative writing. Sensory language, powerful adjectives, and precise verbs for top marks.',
  alternates: { canonical: 'https://theenglishhub.app/resources/vocabulary/descriptive' },
  openGraph: {
    title: 'Descriptive Vocabulary - The English Hub',
    description:
      'Expand your descriptive vocabulary for GCSE English creative writing. Sensory language, powerful adjectives, and precise verbs for top marks.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Flashcards',
  description:
    'Interactive GCSE English flashcards for key quotes, terminology, and concepts. Spaced repetition learning for Literature and Language revision.',
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools/flashcards' },
  openGraph: {
    title: 'English Flashcards - The English Hub',
    description:
      'Interactive GCSE English flashcards for key quotes, terminology, and concepts. Spaced repetition learning for Literature and Language revision.',
    images: [
      {
        url: '/api/og?title=English+Flashcards+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'English Flashcards - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

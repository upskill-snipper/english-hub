import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Flashcards',
  description:
    'Interactive GCSE English flashcards for key quotes, terminology, and concepts. Spaced repetition learning for Literature and Language revision.',
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools/flashcards' },
  openGraph: {
    title: 'English Flashcards — The English Hub',
    description:
      'Interactive GCSE English flashcards for key quotes, terminology, and concepts. Spaced repetition learning for Literature and Language revision.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

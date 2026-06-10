import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Flashcards Demo | Student Revision Tools',
  description:
    'Try spaced-repetition flashcards as a student would: quotes, vocabulary and key terms for GCSE English. An interactive demo with sample decks.',
  alternates: { canonical: '/demo/student/flashcards' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

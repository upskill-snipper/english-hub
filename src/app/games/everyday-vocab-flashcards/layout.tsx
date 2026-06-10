import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Everyday Vocabulary Flashcards | EAL Game',
  description:
    'Flip-card recall of the most useful everyday English words with spaced repetition. A free vocabulary game for EAL and beginner English learners.',
  alternates: { canonical: '/games/everyday-vocab-flashcards' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Picture Word Match | EAL Vocabulary Game',
  description:
    'Match pictures to English words, then choose the word that fits a sentence, a short text or a dialogue. A free vocabulary game for EAL learners.',
  alternates: { canonical: '/games/picture-word-match' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

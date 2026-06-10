import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build the Question | EAL Grammar Game',
  description:
    'Put words in the right order to form correct English questions. A free word-order game for EAL learners practising question formation skills.',
  alternates: { canonical: '/games/question-formation' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

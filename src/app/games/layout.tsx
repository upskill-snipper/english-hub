import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Games — The English Hub',
  description:
    'Learn English through fun, interactive games. Vocabulary challenges, grammar quizzes and word puzzles designed to boost your KS3 and GCSE skills.',
  alternates: { canonical: 'https://theenglishhub.app/games' },
  openGraph: {
    title: 'Games — The English Hub',
    description:
      'Learn English through fun, interactive games. Vocabulary challenges, grammar quizzes and word puzzles designed to boost your KS3 and GCSE skills.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

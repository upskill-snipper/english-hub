import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Knowledge Tester',
  description:
    'Test your GCSE English knowledge with interactive quizzes. Covers Literature texts, Language techniques, vocabulary, and exam terminology.',
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools/tester' },
  openGraph: {
    title: 'Knowledge Tester - The English Hub',
    description:
      'Test your GCSE English knowledge with interactive quizzes. Covers Literature texts, Language techniques, vocabulary, and exam terminology.',
    images: [
      {
        url: '/api/og?title=Knowledge+Tester+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Knowledge Tester - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

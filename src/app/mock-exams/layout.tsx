import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mock Exams — The English Hub',
  description:
    'Take full-length GCSE and IGCSE English mock exams under timed conditions. Realistic papers with marking guidance for every major exam board.',
  alternates: { canonical: 'https://theenglishhub.app/mock-exams' },
  openGraph: {
    title: 'Mock Exams — The English Hub',
    description:
      'Take full-length GCSE and IGCSE English mock exams under timed conditions. Realistic papers with marking guidance for every major exam board.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tense Timeline | EAL Grammar Game',
  description:
    'Spot past, present, future and perfect verb tenses in real sentences. A free grammar game for EAL learners moving beyond beginner English.',
  alternates: { canonical: '/games/tense-timeline' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

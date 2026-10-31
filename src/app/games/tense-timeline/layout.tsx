import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tense Timeline | EAL Grammar Game',
  description:
    'Name past, present, future and perfect tenses, then choose the verb form a sentence needs. A free grammar game for EAL learners.',
  alternates: { canonical: '/games/tense-timeline' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

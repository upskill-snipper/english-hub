import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Essay Critic - Instant GCSE English Feedback',
  description:
    'Paste a GCSE English answer and get instant AI feedback against the assessment objectives - strengths, improvements and a predicted grade band.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit/critic' },
}

export default function CriticLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

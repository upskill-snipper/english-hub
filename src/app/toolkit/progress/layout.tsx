import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Progress — Track Your GCSE English Revision',
  description:
    'Track your GCSE English revision progress — scores over time, mastered topics and the assessment objectives that still need work.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit/progress' },
}

export default function ProgressLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revision Builder — Build a GCSE English Study Plan',
  description:
    'Build a personalised GCSE English revision plan around your exam board, target grade and weak areas, with set texts, poetry and exam technique.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit/revision-builder' },
}

export default function RevisionBuilderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

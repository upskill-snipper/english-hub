import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personalised Revision — Targeted GCSE English Practice',
  description:
    'Targeted GCSE English revision tailored to your weak areas and target grade, drawing on your practice history to recommend what to study next.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit/personalised-revision' },
}

export default function PersonalisedRevisionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

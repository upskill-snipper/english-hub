import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Prelude (Boat) — Eduqas GCSE Poetry',
  description:
    'The Prelude: stealing the boat by William Wordsworth — GCSE analysis for the WJEC Eduqas anthology: nature, the sublime, guilt and comparisons.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/the-prelude' },
}

export default function EduqasThePreludeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

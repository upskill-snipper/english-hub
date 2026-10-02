import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'London (Blake): previous Eduqas anthology',
  description:
    'London by William Blake, annotated, from the Eduqas anthology examined until summer 2026. AQA and Pearson Edexcel GCSE set it.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/london' },
}

export default function EduqasLondonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

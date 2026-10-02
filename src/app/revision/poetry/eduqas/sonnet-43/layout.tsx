import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'Sonnet 43 (Barrett Browning): previous Eduqas anthology',
  description:
    "Sonnet 43 ('How do I love thee?') by Elizabeth Barrett Browning, annotated, from the Eduqas anthology examined until summer 2026. Pearson Edexcel GCSE sets it.",
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/sonnet-43' },
}

export default function EduqasSonnet43Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'To Autumn (Keats): previous Eduqas anthology',
  description:
    'To Autumn by John Keats, annotated, from the Eduqas anthology examined until summer 2026. Pearson Edexcel GCSE sets it in Time and Place.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/to-autumn' },
}

export default function EduqasToAutumnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

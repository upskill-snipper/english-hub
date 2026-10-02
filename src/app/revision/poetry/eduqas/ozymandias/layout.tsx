import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'Ozymandias (Shelley): previous Eduqas anthology',
  description:
    'Ozymandias by Percy Bysshe Shelley, annotated, from the Eduqas anthology examined until summer 2026. AQA sets it in Power and Conflict.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/ozymandias' },
}

export default function EduqasOzymandiasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

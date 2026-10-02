import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'The Soldier (Brooke): previous Eduqas anthology',
  description:
    'The Soldier by Rupert Brooke, annotated, from the Eduqas anthology examined until summer 2026: patriotism, war and the sonnet form.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/the-soldier' },
}

export default function EduqasTheSoldierLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

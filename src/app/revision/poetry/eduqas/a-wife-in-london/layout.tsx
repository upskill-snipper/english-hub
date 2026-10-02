import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'A Wife in London (Hardy): previous Eduqas anthology',
  description:
    'A Wife in London by Thomas Hardy, annotated, from the Eduqas anthology examined until summer 2026: war, irony, structure and context.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/a-wife-in-london' },
}

export default function EduqasAWifeInLondonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

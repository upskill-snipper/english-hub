import type { Metadata } from 'next'

// Until 2 October 2026 this described the poem as part of the current Eduqas
// anthology. It was in the one examined until summer 2026; see
// src/lib/board/eduqas-anthology.ts.
export const metadata: Metadata = {
  title: 'Dulce et Decorum Est (Owen): previous Eduqas anthology',
  description:
    'Dulce et Decorum Est by Wilfred Owen, annotated, from the Eduqas anthology examined until summer 2026: war, horror, structure and context.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/eduqas/dulce-et-decorum-est',
  },
}

export default function EduqasDulceEtDecorumEstLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

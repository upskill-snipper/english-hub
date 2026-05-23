import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dulce et Decorum Est — Eduqas GCSE Poetry',
  description:
    'Dulce et Decorum Est by Wilfred Owen — GCSE analysis for the WJEC Eduqas poetry anthology: war, horror, structure, context and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/eduqas/dulce-et-decorum-est',
  },
}

export default function EduqasDulceEtDecorumEstLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

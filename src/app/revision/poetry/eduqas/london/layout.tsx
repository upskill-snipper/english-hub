import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'London - William Blake | Eduqas GCSE Poetry',
  description:
    'London by William Blake - GCSE analysis for the WJEC Eduqas poetry anthology: oppression, the city, structure, context and comparison poems.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/london' },
}

export default function EduqasLondonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ozymandias — Eduqas GCSE Poetry Analysis',
  description:
    'Ozymandias by Percy Bysshe Shelley — GCSE analysis for the WJEC Eduqas poetry anthology: power, decay, structure, context and comparison poems.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/ozymandias' },
}

export default function EduqasOzymandiasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

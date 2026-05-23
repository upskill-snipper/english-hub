import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cousin Kate — Eduqas GCSE Poetry Analysis',
  description:
    'Cousin Kate by Christina Rossetti — GCSE analysis for the WJEC Eduqas poetry anthology: betrayal, class, voice, structure and comparison poems.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/cousin-kate' },
}

export default function EduqasCousinKateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

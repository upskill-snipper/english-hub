import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Soldier — Eduqas GCSE Poetry Analysis',
  description:
    'The Soldier by Rupert Brooke — GCSE analysis for the WJEC Eduqas poetry anthology: patriotism, war, the sonnet form and comparison poems.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/the-soldier' },
}

export default function EduqasTheSoldierLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

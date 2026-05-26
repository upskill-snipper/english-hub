import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'To Autumn - Keats | Eduqas GCSE Poetry',
  description:
    'To Autumn by John Keats - GCSE analysis for the WJEC Eduqas poetry anthology: nature, ripeness, the ode form, context and comparison poems.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/to-autumn' },
}

export default function EduqasToAutumnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

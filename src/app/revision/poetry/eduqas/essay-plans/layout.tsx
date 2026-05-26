import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essay Plans - Eduqas GCSE Poetry Anthology',
  description:
    'Grade 9 comparative essay plans for the WJEC Eduqas poetry anthology: model theses, paragraph structures, quotations and exam technique.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/essay-plans' },
}

export default function EduqasEssayPlansLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

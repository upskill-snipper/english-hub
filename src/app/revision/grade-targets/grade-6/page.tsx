import type { Metadata } from 'next'
import { GradeTargetPage } from '../_shared/GradeTargetPage'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 6 Guide — The English Hub',
    description:
      'Grade 6 English GCSE / IGCSE target guide. A solid pass with sustained analysis — how to push toward Grade 7.',
  },
  title: 'Grade 6 Guide — The English Hub',
  description:
    'Grade 6 English GCSE / IGCSE target guide. A solid pass with sustained analysis — how to push toward Grade 7.',
  alternates: { canonical: 'https://theenglishhub.app/revision/grade-targets/grade-6' },
}

export default async function Grade6Page() {
  return <GradeTargetPage grade="6" />
}

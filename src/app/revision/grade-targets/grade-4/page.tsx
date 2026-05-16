import type { Metadata } from 'next'
import { GradeTargetPage } from '../_shared/GradeTargetPage'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 4 Guide — The English Hub',
    description:
      'Grade 4 English GCSE / IGCSE target guide. The standard-pass benchmark and how to push toward Grade 5.',
  },
  title: 'Grade 4 Guide',
  description:
    'Grade 4 English GCSE / IGCSE target guide. The standard-pass benchmark and how to push toward Grade 5.',
  alternates: { canonical: 'https://theenglishhub.app/revision/grade-targets/grade-4' },
}

export default async function Grade4Page() {
  return <GradeTargetPage grade="4" />
}

import type { Metadata } from 'next'
import { GradeTargetPage } from '../_shared/GradeTargetPage'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 3 Guide — The English Hub',
    description:
      'Grade 3 English GCSE / IGCSE target guide. What a Grade 3 answer looks like and how to push toward Grade 4.',
  },
  title: 'Grade 3 Guide — The English Hub',
  description:
    'Grade 3 English GCSE / IGCSE target guide. What a Grade 3 answer looks like and how to push toward Grade 4.',
  alternates: { canonical: 'https://theenglishhub.app/revision/grade-targets/grade-3' },
}

export default async function Grade3Page() {
  return <GradeTargetPage grade="3" />
}

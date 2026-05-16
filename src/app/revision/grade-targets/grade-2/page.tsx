import type { Metadata } from 'next'
import { GradeTargetPage } from '../_shared/GradeTargetPage'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 2 Guide — The English Hub',
    description:
      'Grade 2 English GCSE / IGCSE target guide. What a Grade 2 answer looks like and the next steps toward Grade 3.',
  },
  title: 'Grade 2 Guide',
  description:
    'Grade 2 English GCSE / IGCSE target guide. What a Grade 2 answer looks like and the next steps toward Grade 3.',
  alternates: { canonical: 'https://theenglishhub.app/revision/grade-targets/grade-2' },
}

export default async function Grade2Page() {
  return <GradeTargetPage grade="2" />
}

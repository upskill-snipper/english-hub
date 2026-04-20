import type { Metadata } from 'next'
import { GradeTargetPage } from '../_shared/GradeTargetPage'

export const metadata: Metadata = {
  title: 'Grade 1 Guide — The English Hub',
  description:
    'Grade 1 English GCSE / IGCSE target guide. What a Grade 1 answer looks like and the first steps to move toward Grade 2.',
  alternates: { canonical: 'https://theenglishhub.app/revision/grade-targets/grade-1' },
}

export default async function Grade1Page() {
  return <GradeTargetPage grade="1" />
}

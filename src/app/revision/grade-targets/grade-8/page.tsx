import type { Metadata } from 'next'
import { GradeTargetPage } from '../_shared/GradeTargetPage'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 8 Guide — The English Hub',
    description:
      'Grade 8 English GCSE / IGCSE target guide. Convincing, conceptualised analysis — top 10% territory and how to push to Grade 9.',
  },
  title: 'Grade 8 Guide',
  description:
    'Grade 8 English GCSE / IGCSE target guide. Convincing, conceptualised analysis — top 10% territory and how to push to Grade 9.',
  alternates: { canonical: 'https://theenglishhub.app/revision/grade-targets/grade-8' },
}

export default async function Grade8Page() {
  return <GradeTargetPage grade="8" />
}

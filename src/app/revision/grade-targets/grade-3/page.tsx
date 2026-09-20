import type { Metadata } from 'next'
import { GradeTargetPage } from '../_shared/GradeTargetPage'

export const metadata: Metadata = {
  openGraph: {
    title: 'Grade 3 Guide - The English Hub',
    description:
      'Grade 3 English GCSE / IGCSE target guide. What a Grade 3 answer looks like and how to push toward Grade 4.',
    images: [
      {
        url: '/api/og?title=Grade+3+Guide+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Grade 3 Guide - The English Hub',
      },
    ],
  },
  title: 'Grade 3 Guide',
  description:
    'Grade 3 English GCSE / IGCSE target guide. What a Grade 3 answer looks like and how to push toward Grade 4.',
  alternates: { canonical: 'https://theenglishhub.app/revision/grade-targets/grade-3' },
}

export default async function Grade3Page() {
  return <GradeTargetPage grade="3" />
}

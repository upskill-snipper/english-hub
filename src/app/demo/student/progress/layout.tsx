import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Progress Demo | Grades and Targets',
  description:
    'See how students track grades, targets and AO-level strengths over recent assessments. An interactive demo of the student progress dashboard.',
  alternates: { canonical: '/demo/student/progress' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

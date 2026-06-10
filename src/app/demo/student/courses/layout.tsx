import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Courses Demo | GCSE English Revision',
  description:
    'Browse the student course library in this interactive demo: GCSE and IGCSE English units with lessons and practice. Sample data, no signup.',
  alternates: { canonical: '/demo/student/courses' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

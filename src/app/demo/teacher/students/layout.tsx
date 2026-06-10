import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teacher Students Demo | Student Profiles',
  description:
    'View student profiles as a teacher: grades, targets, recent work and flags for support. An interactive demo built entirely on sample data.',
  alternates: { canonical: '/demo/teacher/students' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

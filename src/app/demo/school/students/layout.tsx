import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Students Demo | Student Management',
  description:
    'Search, filter and manage every student in a sample school: grades, targets and activity. An interactive student management demo, no signup.',
  alternates: { canonical: '/demo/school/students' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

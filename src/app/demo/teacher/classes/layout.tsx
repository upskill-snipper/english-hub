import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teacher Classes Demo | Class Management',
  description:
    'Manage classes as a teacher would: rosters, attainment snapshots and quick actions. An interactive demo with sample English class data.',
  alternates: { canonical: '/demo/teacher/classes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Classes Demo | English Class Overview',
  description:
    'Browse every English class in a sample school: sets, teachers and attainment at a glance. An interactive demo of the school portal, no signup.',
  alternates: { canonical: '/demo/school/classes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

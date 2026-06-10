import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Progress Demo | Whole-School Tracking',
  description:
    'Follow whole-school English progress over time: grades, targets and AO-level movement. An interactive demo built on sample school data.',
  alternates: { canonical: '/demo/school/progress' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

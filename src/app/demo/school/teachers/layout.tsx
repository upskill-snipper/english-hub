import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Teachers Demo | Staff Overview',
  description:
    'See teacher accounts, class allocations and marking activity across a sample English department. An interactive school portal demo.',
  alternates: { canonical: '/demo/school/teachers' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

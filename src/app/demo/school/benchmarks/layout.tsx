import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Benchmarks Demo | Cohort Comparison',
  description:
    'Compare class and cohort English performance against benchmarks in this interactive school portal demo. Sample data, no signup needed.',
  alternates: { canonical: '/demo/school/benchmarks' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

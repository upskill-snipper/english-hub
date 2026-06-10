import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Analytics Demo | English Department Data',
  description:
    'Explore whole-school English analytics in this interactive demo: attainment trends, AO breakdowns and cohort comparisons, all with sample data.',
  alternates: { canonical: '/demo/school/analytics' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

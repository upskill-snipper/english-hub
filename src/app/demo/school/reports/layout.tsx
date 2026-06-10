import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Reports Demo | English Reporting',
  description:
    'Generate department and student reports ready for SLT and parents in this interactive school portal demo. Sample data, nothing to set up.',
  alternates: { canonical: '/demo/school/reports' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

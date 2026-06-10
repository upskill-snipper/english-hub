import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Questions Demo | Student Dashboard',
  description:
    'Answer sample GCSE-style English practice questions and see instant AI feedback in this interactive student demo. No account needed to try it.',
  alternates: { canonical: '/demo/student/practice' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homework Demo | Setting and Tracking',
  description:
    'Set, track and review English homework as a teacher in this interactive demo: submissions, completion rates and sample class data throughout.',
  alternates: { canonical: '/demo/teacher/homework' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

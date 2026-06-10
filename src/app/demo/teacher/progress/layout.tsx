import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Class Progress Demo | Teacher View',
  description:
    "Track every student's English progress from the teacher dashboard: grades, AO gaps and movement over time. Interactive demo, sample data.",
  alternates: { canonical: '/demo/teacher/progress' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

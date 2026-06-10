import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiz Builder Demo | Teacher Tools',
  description:
    'Build and assign English quizzes in minutes with the quiz builder. An interactive teacher demo using sample classes and ready-made questions.',
  alternates: { canonical: '/demo/teacher/quizzes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

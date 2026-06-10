import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homework Generator Demo | AI Task Builder',
  description:
    'Watch the AI homework generator build differentiated English tasks with instructions and questions. An interactive teacher demo, sample data.',
  alternates: { canonical: '/demo/teacher/homework/generate' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Demos: Student, Teacher and School',
  description:
    'Explore The English Hub without signing up: interactive student, teacher and school portal demos with sample data and AI marking examples.',
  alternates: { canonical: '/demo' },
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

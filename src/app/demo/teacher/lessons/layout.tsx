import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lesson Planning Demo | Teacher Tools',
  description:
    'Explore lesson planning tools for English teachers: ready-made lessons mapped to GCSE specifications. An interactive demo with sample content.',
  alternates: { canonical: '/demo/teacher/lessons' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

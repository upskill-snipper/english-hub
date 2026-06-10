import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Teaching Resources Demo | English Library',
  description:
    'Browse the teaching resources library: worksheets, extracts and revision materials for GCSE English. An interactive demo, free to explore.',
  alternates: { canonical: '/demo/teacher/resources' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

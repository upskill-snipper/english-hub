import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'School Settings Demo | Portal Configuration',
  description:
    'Explore school-level settings: exam boards, year groups, permissions and preferences. An interactive demo of the English Hub school portal.',
  alternates: { canonical: '/demo/school/settings' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

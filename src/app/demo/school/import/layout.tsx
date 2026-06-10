import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bulk Import Demo | School Setup',
  description:
    'See how schools bulk-import students and classes from a spreadsheet in minutes. An interactive demo of the school onboarding workflow.',
  alternates: { canonical: '/demo/school/import' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

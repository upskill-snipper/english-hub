import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth Themes | GCSE English Revision',
  description:
    'Explore 9 Macbeth themes including ambition, guilt, the supernatural and kingship, with key quotes and AO2 analysis for GCSE English essay writing.',
  alternates: { canonical: '/revision/texts/macbeth/themes' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

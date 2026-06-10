import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Christmas Carol Characters | GCSE English',
  description:
    'Revise 12 A Christmas Carol characters including Scrooge, Bob Cratchit, Tiny Tim and the three spirits, with key quotes and analysis for GCSE English exams.',
  alternates: { canonical: '/revision/texts/a-christmas-carol/characters' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

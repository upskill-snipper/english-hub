import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth Characters | GCSE English Revision',
  description:
    'Revise 11 Macbeth characters from Macbeth and Lady Macbeth to Banquo, Macduff and the Witches, with key quotes and AO2 analysis for GCSE English exams.',
  alternates: { canonical: '/revision/texts/macbeth/characters' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

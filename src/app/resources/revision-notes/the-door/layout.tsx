import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Door by Miroslav Holub | GCSE Poem Revision Notes',
  description:
    "Revise Miroslav Holub's poem The Door: stanza-by-stanza analysis, imagery and free verse form, Cold War Czech context, key phrases and exam-style questions.",
  alternates: { canonical: '/resources/revision-notes/the-door' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

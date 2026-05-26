import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Poems - Edexcel IGCSE Unseen Poetry',
  description:
    'Practise unseen poetry for Edexcel IGCSE Literature with annotated poems, exam-style questions, model openings and analysis notes for reading and writing.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

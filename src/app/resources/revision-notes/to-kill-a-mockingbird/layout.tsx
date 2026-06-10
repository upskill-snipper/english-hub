import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'To Kill a Mockingbird Revision Notes | GCSE & IGCSE',
  description:
    "GCSE and Edexcel IGCSE 4ET1 notes on Harper Lee's To Kill a Mockingbird: plot, Scout and Atticus analysis, themes, key quotes, Jim Crow context and questions.",
  alternates: { canonical: '/resources/revision-notes/to-kill-a-mockingbird' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

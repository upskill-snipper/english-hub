import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Half-past Two by U.A. Fanthorpe | GCSE Revision Notes',
  description:
    "Revise U.A. Fanthorpe's Half-past Two for Edexcel IGCSE: the child's view of time, structure, language and key quotations with analysis, plus exam tips.",
  alternates: { canonical: '/resources/revision-notes/half-past-two' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

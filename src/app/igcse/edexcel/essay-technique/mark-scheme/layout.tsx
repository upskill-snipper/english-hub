import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/essay-technique/mark-scheme' },
  title: 'Mark Scheme Decoded - Edexcel IGCSE Essay Technique',
  description:
    'How Edexcel IGCSE Literature examiners mark essays: the four assessment objectives, band descriptors from Grade 3 to 9, and the moves that lift your grade.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

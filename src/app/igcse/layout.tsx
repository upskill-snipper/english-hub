import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCSE English | The English Hub',
  description: 'Edexcel IGCSE English courses covering Spec A (4EA1) and Spec B (4EB1) with structured lessons, practice questions, and exam preparation.',
}

export default function IgcseLayout({ children }: { children: React.ReactNode }) {
  return children
}

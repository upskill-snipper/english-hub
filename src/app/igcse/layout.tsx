import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IGCSE English | The English Hub',
  description: 'Cambridge IGCSE English courses covering Spec A and Spec B with structured lessons, practice questions, and exam preparation.',
}

export default function IgcseLayout({ children }: { children: React.ReactNode }) {
  return children
}

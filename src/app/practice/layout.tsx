import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Questions | The English Hub',
  description: 'Exam-style practice questions with model answers at three grade bands for GCSE English.',
}

export default function PracticeLayout({ children }: { children: React.ReactNode }) {
  return children
}

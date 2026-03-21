import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exam Guides | The English Hub',
  description: 'Comprehensive exam guides for AQA, Edexcel, OCR, WJEC, and IGCSE English with mark schemes, grade boundaries, and examiner tips.',
}

export default function ExamGuideLayout({ children }: { children: React.ReactNode }) {
  return children
}

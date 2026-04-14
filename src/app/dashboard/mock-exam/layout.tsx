import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mock Exam Mode | The English Hub',
  description:
    'Simulate real GCSE English Language exam conditions with timed papers for AQA, Edexcel, OCR, and WJEC. Includes model answers and marking guides.',
}

export default function MockExamLayout({ children }: { children: React.ReactNode }) {
  return children
}

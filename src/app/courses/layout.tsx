import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Courses | The English Hub',
  description: 'Browse structured GCSE and KS3 English courses covering AQA, Edexcel, OCR, and WJEC exam boards.',
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exam Guide — The English Hub',
  description:
    'Detailed exam guides for GCSE and IGCSE English. Paper breakdowns, mark schemes, timing tips and board-specific advice for AQA, Edexcel, OCR, WJEC Eduqas and IGCSE.',
  alternates: { canonical: 'https://theenglishhub.app/exam-guide' },
  openGraph: {
    title: 'Exam Guide — The English Hub',
    description:
      'Detailed exam guides for GCSE and IGCSE English. Paper breakdowns, mark schemes, timing tips and board-specific advice for AQA, Edexcel, OCR, WJEC Eduqas and IGCSE.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

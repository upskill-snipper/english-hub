import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IELTS Model Answers (Band 6.5 & Band 8) | The English Hub',
  description:
    'Self-authored IELTS model answers for Writing Task 1 & 2 and Speaking Parts 1–3, written to band 6.5 and band 8, with clear notes on what lifts each answer up the scale.',
  alternates: { canonical: '/ielts/model-answers' },
  robots: { index: true, follow: true },
}

export default function ModelAnswersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IELTS Model Answers (Band 6.5 & Band 8) | The English Hub',
  description:
    'Self-authored IELTS answers for Writing Tasks 1 and 2 and Speaking Parts 1 to 3, written at around band 6.5 and band 8, with notes on what lifts each.',
  alternates: { canonical: '/ielts/model-answers' },
  robots: { index: true, follow: true },
}

export default function ModelAnswersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

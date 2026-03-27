import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Literature Resources',
  description:
    'GCSE and IGCSE English Literature resources for AQA, Edexcel, OCR, WJEC and CAIE. Text guides, poetry analysis, paper breakdowns, and grade boundaries.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature' },
  openGraph: {
    title: 'English Literature Resources — The English Hub',
    description:
      'GCSE and IGCSE English Literature resources for AQA, Edexcel, OCR, WJEC and CAIE. Text guides, poetry analysis, paper breakdowns, and grade boundaries.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

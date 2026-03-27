import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'English Language Resources',
  description:
    'GCSE and IGCSE English Language revision resources for AQA, Edexcel, OCR, WJEC and CAIE. Paper guides, techniques, writing skills, and grade boundaries.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language' },
  openGraph: {
    title: 'English Language Resources — The English Hub',
    description:
      'GCSE and IGCSE English Language revision resources for AQA, Edexcel, OCR, WJEC and CAIE. Paper guides, techniques, writing skills, and grade boundaries.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OCR English Language Grade Boundaries',
  description:
    'OCR GCSE English Language grade boundaries with historical data. Marks required for each grade across Paper 1 and Paper 2.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/ocr/grade-boundaries',
  },
  openGraph: {
    title: 'OCR English Language Grade Boundaries - The English Hub',
    description:
      'OCR GCSE English Language grade boundaries with historical data. Marks required for each grade across Paper 1 and Paper 2.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

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
    images: [
      {
        url: '/api/og?title=OCR+English+Language+Grade+Boundaries+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'OCR English Language Grade Boundaries - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

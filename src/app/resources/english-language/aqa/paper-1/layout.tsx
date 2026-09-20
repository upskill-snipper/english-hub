import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQA English Language Paper 1',
  description:
    'AQA GCSE English Language Paper 1 guide. Explorations in Creative Reading and Writing: question breakdowns, timing, marking guide, and model answers.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/aqa/paper-1' },
  openGraph: {
    title: 'AQA English Language Paper 1 - The English Hub',
    description:
      'AQA GCSE English Language Paper 1 guide. Explorations in Creative Reading and Writing: question breakdowns, timing, marking guide, and model answers.',
    images: [
      {
        url: '/api/og?title=AQA+English+Language+Paper+1+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'AQA English Language Paper 1 - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

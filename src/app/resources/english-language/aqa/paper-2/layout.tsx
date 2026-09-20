import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQA English Language Paper 2',
  description:
    'AQA GCSE English Language Paper 2 guide. Writers Viewpoints and Perspectives: question breakdowns, timing advice, marking guide, and top-grade tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/aqa/paper-2' },
  openGraph: {
    title: 'AQA English Language Paper 2 - The English Hub',
    description:
      'AQA GCSE English Language Paper 2 guide. Writers Viewpoints and Perspectives: question breakdowns, timing advice, marking guide, and top-grade tips.',
    images: [
      {
        url: '/api/og?title=AQA+English+Language+Paper+2+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'AQA English Language Paper 2 - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

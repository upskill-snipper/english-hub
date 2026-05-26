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
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

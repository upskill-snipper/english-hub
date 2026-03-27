import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AQA English Language Paper 2',
  description:
    'AQA GCSE English Language Paper 2 guide. Writers Viewpoints and Perspectives: question breakdowns, timing advice, mark scheme, and top-grade tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/aqa/paper-2' },
  openGraph: {
    title: 'AQA English Language Paper 2 — The English Hub',
    description:
      'AQA GCSE English Language Paper 2 guide. Writers Viewpoints and Perspectives: question breakdowns, timing advice, mark scheme, and top-grade tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

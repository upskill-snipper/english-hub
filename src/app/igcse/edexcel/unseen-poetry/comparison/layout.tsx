import type { Metadata } from 'next'

// Until 10 October 2026 this page taught comparing two unseen poems, which
// 4ET1 never asks for. It now teaches building an answer on the one poem
// Section A sets; the route keeps its old name because other pages link to it.
export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/unseen-poetry/comparison' },
  title: 'Building Your Answer - Edexcel IGCSE Unseen Poetry',
  description:
    'Edexcel IGCSE Literature 4ET1 sets one unseen poem, not two: how to plan, organise by idea and write an analytical answer on it, with a model paragraph.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quote Detective | GCSE Set Text Quote Game',
  description:
    'Name the set text a quotation comes from, who says it and when, and which line proves a point. A free GCSE English Literature quotation game.',
  alternates: { canonical: '/games/quote-detective' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

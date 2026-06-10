import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quote Detective | GCSE Set Text Quote Game',
  description:
    'Identify which GCSE set text each quote comes from: Macbeth, An Inspector Calls and more. A free quote revision game for English Literature.',
  alternates: { canonical: '/games/quote-detective' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

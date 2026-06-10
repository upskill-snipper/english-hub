import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Numbers and Time Game | EAL English',
  description:
    'Read numbers, dates and the clock in English with instant feedback. A free beginner game for EAL learners practising everyday number vocabulary.',
  alternates: { canonical: '/games/numbers-and-time' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

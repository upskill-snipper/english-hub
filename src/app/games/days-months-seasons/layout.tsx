import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Days, Months and Seasons | EAL Game',
  description:
    'Order, spell and match the days, months and seasons in English. A free beginner vocabulary game for EAL learners, instant feedback, no signup.',
  alternates: { canonical: '/games/days-months-seasons' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

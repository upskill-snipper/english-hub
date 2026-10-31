import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Days, Months and Seasons | EAL Game',
  description:
    'Use days, months and dates in English: calendars, on, in and at, British date order and counting from today. A free vocabulary game for EAL learners.',
  alternates: { canonical: '/games/days-months-seasons' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

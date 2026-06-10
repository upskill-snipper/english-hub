import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Picture Word Match | EAL Vocabulary Game',
  description:
    'Match pictures to the right English word in this free beginner vocabulary game for EAL learners. Build everyday words fast, no signup needed.',
  alternates: { canonical: '/games/picture-word-match' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

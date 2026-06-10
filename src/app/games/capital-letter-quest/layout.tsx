import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Capital Letter Quest | EAL & KS3 Game',
  description:
    'Learn where capital letters go: names, places, days and titles. A free punctuation game for EAL and KS3 English learners with instant feedback.',
  alternates: { canonical: '/games/capital-letter-quest' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

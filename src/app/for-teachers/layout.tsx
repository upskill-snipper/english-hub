import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'For Teachers — The English Hub',
  description:
    'Discover how The English Hub supports English teachers with ready-made lessons, student progress tracking and exam-board-aligned resources.',
  alternates: { canonical: 'https://theenglishhub.app/for-teachers' },
  openGraph: {
    title: 'For Teachers — The English Hub',
    description:
      'Discover how The English Hub supports English teachers with ready-made lessons, student progress tracking and exam-board-aligned resources.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

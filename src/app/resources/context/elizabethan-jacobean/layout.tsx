import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elizabethan & Jacobean Context',
  description:
    'Explore Elizabethan and Jacobean historical context for GCSE English Literature. Essential background for Shakespeare texts including Macbeth and Romeo and Juliet.',
  alternates: { canonical: 'https://theenglishhub.app/resources/context/elizabethan-jacobean' },
  openGraph: {
    title: 'Elizabethan & Jacobean Context - The English Hub',
    description:
      'Explore Elizabethan and Jacobean historical context for GCSE English Literature. Essential background for Shakespeare texts including Macbeth and Romeo and Juliet.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

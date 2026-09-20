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
    images: [
      {
        url: '/api/og?title=Elizabethan+%26+Jacobean+Context+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Elizabethan & Jacobean Context - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}

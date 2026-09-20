import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elizabethan & Jacobean Context',
  description:
    'Elizabethan and Jacobean context for GCSE Literature: the Great Chain of Being, divine right, witchcraft and the theatre, linked to Macbeth and The Tempest.',
  alternates: { canonical: 'https://theenglishhub.app/resources/context/elizabethan-jacobean' },
  openGraph: {
    title: 'Elizabethan & Jacobean Context - The English Hub',
    description:
      'Elizabethan and Jacobean context for GCSE Literature: the Great Chain of Being, divine right, witchcraft and the theatre, linked to Macbeth and The Tempest.',
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

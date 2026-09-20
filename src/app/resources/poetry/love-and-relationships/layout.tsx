import type { Metadata } from 'next'
import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

export const metadata: Metadata = {
  title: 'Love and Relationships Poetry Anthology',
  description:
    'Love and Relationships poetry anthology guide. Analysis of all 15 poems with themes, techniques, key quotes, and comparison strategies.',
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry/love-and-relationships' },
  openGraph: {
    title: 'Love and Relationships Poetry Anthology - The English Hub',
    description:
      'Love and Relationships poetry anthology guide. Analysis of all 15 poems with themes, techniques, key quotes, and comparison strategies.',
    images: [
      {
        url: '/api/og?title=Love+and+Relationships+Poetry+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Love and Relationships Poetry Anthology - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WrongBoardBanner
        contentBoards={['aqa']}
        contentName="the AQA Love and Relationships poetry anthology"
        redirectTo="/resources/poetry"
      />
      {children}
    </>
  )
}

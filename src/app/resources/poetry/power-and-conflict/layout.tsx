import type { Metadata } from 'next'
import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

export const metadata: Metadata = {
  title: 'Power and Conflict Poetry Anthology',
  description:
    'Power and Conflict poetry anthology guide. Analysis of all 15 poems with themes, techniques, key quotes, and comparison strategies.',
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry/power-and-conflict' },
  openGraph: {
    title: 'Power and Conflict Poetry Anthology - The English Hub',
    description:
      'Power and Conflict poetry anthology guide. Analysis of all 15 poems with themes, techniques, key quotes, and comparison strategies.',
    images: [
      {
        url: '/api/og?title=Power+and+Conflict+Poetry+Anthology+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Power and Conflict Poetry Anthology - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WrongBoardBanner
        contentBoards={['aqa']}
        contentName="the AQA Power and Conflict poetry anthology"
        redirectTo="/resources/poetry"
      />
      {children}
    </>
  )
}

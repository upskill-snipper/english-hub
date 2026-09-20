import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import PapersDashboard from './papers-dashboard'

export const metadata = {
  openGraph: {
    title: 'Your Papers | The English Hub',
    description: 'Navigate all your exam papers, sections, and revision content in one place.',
    images: [
      {
        url: '/api/og?title=Your+Papers+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Your Papers | The English Hub',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/dashboard/papers' },
  title: 'Your Papers',
  description: 'Navigate all your exam papers, sections, and revision content in one place.',
}

export default async function PapersPage() {
  const board = await getServerBoard()
  if (!board) redirect('/board-select')

  const config = getBoardConfig(board)
  if (!config) redirect('/board-select')

  return <PapersDashboard board={board} boardName={config.name} boardFullName={config.fullName} />
}

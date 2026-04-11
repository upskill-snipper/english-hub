import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'

export default async function CaieLitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const board = await getServerBoard()
  // Cambridge boards in our store (cambridge-0500 / cambridge-0990) are
  // language-only — they do not study the literature syllabus we cover here.
  // Redirect Cambridge users to the language equivalent, and redirect any
  // other board to the literature hub.
  if (board === 'cambridge-0500' || board === 'cambridge-0990') {
    redirect('/resources/english-language/caie')
  }
  if (board && board !== 'cambridge-0500' && board !== 'cambridge-0990') {
    redirect('/resources/english-literature')
  }
  return <>{children}</>
}

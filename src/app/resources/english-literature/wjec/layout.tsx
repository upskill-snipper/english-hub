import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'

export default async function WjecLitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const board = await getServerBoard()
  if (board && board !== 'eduqas') {
    redirect('/resources/english-literature')
  }
  return <>{children}</>
}

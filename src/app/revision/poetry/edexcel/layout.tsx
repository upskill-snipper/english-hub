import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'

export default async function EdexcelPoetryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const board = await getServerBoard()
  if (board && board !== 'edexcel') {
    redirect('/revision/poetry?wrongBoard=1')
  }
  return <>{children}</>
}

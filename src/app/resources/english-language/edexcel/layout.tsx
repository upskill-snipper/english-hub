import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'

export default async function EdexcelLangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const board = await getServerBoard()
  if (board && board !== 'edexcel' && board !== 'edexcel-igcse') {
    redirect('/resources/english-language')
  }
  return <>{children}</>
}

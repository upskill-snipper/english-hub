import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'

export default async function CaieLangLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const board = await getServerBoard()
  if (board && board !== 'cambridge-0500' && board !== 'cambridge-0990') {
    redirect('/resources/english-language')
  }
  return <>{children}</>
}

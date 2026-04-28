import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'

export default async function AqaWorldsAndLivesLayout({ children }: { children: React.ReactNode }) {
  const board = await getServerBoard()
  // Worlds and Lives is an AQA-specific cluster. If the user has chosen a
  // different board, send them to their own anthology.
  if (board && board !== 'aqa') {
    redirect('/revision/poetry?wrongBoard=1')
  }
  return <>{children}</>
}

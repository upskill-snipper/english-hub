import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'

export default async function LoveAndRelationshipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const board = await getServerBoard()
  // Love & Relationships (this folder) is AQA's cluster. OCR has its own
  // Love & Relationships cluster under /revision/poetry/ocr/love-and-relationships.
  if (board && board !== 'aqa') {
    redirect('/revision/poetry?wrongBoard=1')
  }
  return <>{children}</>
}

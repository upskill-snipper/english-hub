import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { getSetTextsForBoard } from '@/lib/board/set-texts'

import TextsRevisionView from './texts-view'

export default async function TextsRevisionPage() {
  const board = await getServerBoard()

  if (!board) {
    redirect('/board-select?next=/revision/texts')
  }

  const config = getBoardConfig(board)
  const texts = getSetTextsForBoard(board)

  return (
    <TextsRevisionView
      boardId={board}
      boardName={config?.shortName ?? config?.name ?? 'Your Board'}
      texts={texts}
    />
  )
}

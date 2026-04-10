import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'

import ReadingView from './reading-view'

export default async function ReadingPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? config?.name ?? 'GCSE English'

  return <ReadingView boardId={board} boardName={boardName} />
}

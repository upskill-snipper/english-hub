import type { Metadata } from 'next'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'

import ReadingView from './reading-view'

export const metadata: Metadata = {
  title: 'GCSE English Language Reading Skills',
  description:
    'Build GCSE English Language reading skills for your exam board: retrieval, inference, language analysis, structure and evaluation questions explained.',
  alternates: { canonical: 'https://theenglishhub.app/revision/language/reading' },
}

export default async function ReadingPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? config?.name ?? 'GCSE English'

  return <ReadingView boardId={board} boardName={boardName} />
}

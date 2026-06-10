import type { Metadata } from 'next'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'

import WritingView from './writing-view'

export const metadata: Metadata = {
  title: 'GCSE English Language Writing Skills',
  description:
    'Improve GCSE English Language writing for your exam board: creative and transactional tasks, planning, structure, sentence craft and technical accuracy.',
  alternates: { canonical: 'https://theenglishhub.app/revision/language/writing' },
}

export default async function WritingPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? config?.name ?? 'GCSE English'

  return <WritingView boardId={board} boardName={boardName} />
}

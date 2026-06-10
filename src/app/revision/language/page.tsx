import type { Metadata } from 'next'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'

import LanguageView from './language-view'

export const metadata: Metadata = {
  title: 'GCSE English Language Revision',
  description:
    'Revise GCSE English Language with board-specific guides to reading, writing, vocabulary and SPaG, plus model answers marked against the AO rubric.',
  alternates: { canonical: 'https://theenglishhub.app/revision/language' },
}

export default async function LanguagePage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? config?.name ?? 'GCSE English'

  return <LanguageView boardId={board} boardName={boardName} />
}

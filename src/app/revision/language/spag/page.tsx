import type { Metadata } from 'next'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'

import SpagView from './spag-view'

export const metadata: Metadata = {
  title: 'Spelling, Punctuation & Grammar (SPaG) | GCSE English',
  description:
    'Sharpen spelling, punctuation and grammar for GCSE English: the SPaG rules examiners check, common errors to avoid and quick wins for accuracy marks.',
  alternates: { canonical: 'https://theenglishhub.app/revision/language/spag' },
}

export default async function SpagPage() {
  const board = await getServerBoard()
  const config = getBoardConfig(board)
  const boardName = config?.shortName ?? config?.name ?? 'GCSE English'

  return <SpagView boardId={board} boardName={boardName} />
}

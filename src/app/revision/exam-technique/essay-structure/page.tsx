import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  getBoardExamTechniqueContent,
  getIgcseRedirectPath,
  isGcseExamBoard,
} from '@/components/revision/BoardSpecificExamTechnique'

import EssayStructureView from './essay-structure-view'

export const metadata: Metadata = {
  title: 'GCSE English Essay Structure Guide',
  description:
    'Learn how to structure GCSE English essays with board-specific guidance on introductions, paragraphs and conclusions that hit the assessment objectives.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/exam-technique/essay-structure',
  },
}

export default async function EssayStructurePage() {
  const board = await getServerBoard()

  if (!board) {
    redirect('/board-select?next=/revision/exam-technique/essay-structure')
  }

  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  if (!isGcseExamBoard(board)) {
    redirect('/board-select?next=/revision/exam-technique/essay-structure')
  }

  const content = getBoardExamTechniqueContent(board)

  return (
    <EssayStructureView
      boardName={content.boardName}
      shortName={content.shortName}
      essay={content.essay}
    />
  )
}

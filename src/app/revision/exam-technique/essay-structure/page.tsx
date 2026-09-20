import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  AQA_CONTENT,
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

  // Send IGCSE users to their dedicated exam-technique pages.
  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  // Visitors with no board cookie, which is every crawler, used to be sent to
  // /board-select. The shell had already flushed by then, so this canonical URL
  // answered 200 with loading.tsx, no copy and no <h1>, while still advertising
  // its own title, description and canonical. Mirrors the parent hub
  // (../page.tsx), fixed the same way: render neutral generic-GCSE content so
  // the single <h1> in the view below always ships.
  const content = isGcseExamBoard(board) ? getBoardExamTechniqueContent(board) : AQA_CONTENT

  return (
    <EssayStructureView
      boardName={content.boardName}
      shortName={content.shortName}
      essay={content.essay}
    />
  )
}

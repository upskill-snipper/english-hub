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

import TimeManagementView from './time-management-view'

export const metadata: Metadata = {
  title: 'GCSE English Exam Time Management',
  description:
    'Plan your GCSE English exam timing with board-specific, minute-by-minute guides, so you finish every question and still have time to check your answers.',
  alternates: { canonical: 'https://theenglishhub.app/revision/exam-technique/time-management' },
}

export default async function TimeManagementPage() {
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
    <TimeManagementView
      boardName={content.boardName}
      shortName={content.shortName}
      totalDuration={content.totalDuration}
      structureSummary={content.structureSummary}
      papers={content.papers}
    />
  )
}

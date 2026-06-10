import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  getBoardExamTechniqueContent,
  getIgcseRedirectPath,
  isGcseExamBoard,
} from '@/components/revision/BoardSpecificExamTechnique'

import QuestionTypesView from './question-types-view'

export const metadata: Metadata = {
  title: 'GCSE English Question Types Explained',
  description:
    'Understand every GCSE English question type for your exam board, what each one is really asking, and how to plan answers that target the full marks.',
  alternates: { canonical: 'https://theenglishhub.app/revision/exam-technique/question-types' },
}

export default async function QuestionTypesPage() {
  const board = await getServerBoard()

  if (!board) {
    redirect('/board-select?next=/revision/exam-technique/question-types')
  }

  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  if (!isGcseExamBoard(board)) {
    redirect('/board-select?next=/revision/exam-technique/question-types')
  }

  const content = getBoardExamTechniqueContent(board)

  return (
    <QuestionTypesView
      boardName={content.boardName}
      shortName={content.shortName}
      questionTypes={content.questionTypes}
    />
  )
}

import { redirect } from 'next/navigation'

import { getServerBoard } from '@/lib/board/get-server-board'
import { isIgcseBoard } from '@/lib/board/board-filter'
import {
  getBoardExamTechniqueContent,
  getIgcseRedirectPath,
  isGcseExamBoard,
} from '@/components/revision/BoardSpecificExamTechnique'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'

import ExamTechniqueHubView from './exam-technique-hub-view'

export default async function ExamTechniquePage() {
  const board = await getServerBoard()

  if (!board) {
    redirect('/board-select?next=/revision/exam-technique')
  }

  // Send IGCSE users to their dedicated pages.
  if (isIgcseBoard(board)) {
    const target = getIgcseRedirectPath(board)
    if (target) redirect(target)
  }

  if (!isGcseExamBoard(board)) {
    redirect('/board-select?next=/revision/exam-technique')
  }

  const content = getBoardExamTechniqueContent(board)

  return (
    <>
      <ArticleJsonLd
        headline="Exam Technique Revision"
        description="Interactive exam technique revision for GCSE English — essay structure, time management, and question types tailored to your exam board."
        datePublished="2026-04-01"
        url="https://theenglishhub.app/revision/exam-technique"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Exam technique', url: 'https://theenglishhub.app/revision/exam-technique' },
        ]}
      />
      <ExamTechniqueHubView boardName={content.boardName} shortName={content.shortName} />
    </>
  )
}

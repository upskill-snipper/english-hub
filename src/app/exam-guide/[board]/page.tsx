import type { Metadata } from 'next'
import { getGuideByBoard } from '@/data/exam-guides'
import BoardExamGuidePage, { boardMap } from './client-page'

interface Props {
  params: { board: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const boardName = boardMap[params.board]
  if (!boardName) return {}

  const guide = getGuideByBoard(boardName)
  if (!guide) return {}

  const title = `${guide.boardName} GCSE English Exam Guide | The English Hub`
  const description = `Complete ${guide.boardName} GCSE English revision guide with paper breakdowns, mark schemes, grade boundaries, examiner tips, and set text analysis. Everything you need to ace your ${guide.boardName} English exams.`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://theenglishhub.app/exam-guide/${params.board}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export function generateStaticParams() {
  return Object.keys(boardMap).map((board) => ({ board }))
}

export default function Page() {
  return <BoardExamGuidePage />
}

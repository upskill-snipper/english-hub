import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getGuideByBoard } from '@/data/exam-guides'
import { boardMap } from '@/data/exam-guides/board-map'

// Disable SSR for the client component — it uses useParams, useBoardStore
// (localStorage), and other browser-only APIs that crash during static generation.
const BoardExamGuidePage = dynamic(() => import('./client-page'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-1/3 bg-muted rounded" />
          <div className="h-4 w-2/3 bg-muted rounded" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-32 bg-muted rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
})

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

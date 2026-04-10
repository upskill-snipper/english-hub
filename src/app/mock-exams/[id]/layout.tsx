import { requireBoard } from '@/lib/board/board-guard'

// Every individual mock exam paper currently shipped under /mock-exams/[id]
// belongs to the AQA spec (aqa-lang-p1, aqa-lang-p2, aqa-lit-p1, aqa-lit-p2).
// Students who have selected a different board are redirected back to the
// mock-exams hub, which renders a "Coming soon" message for their board.
export default async function MockExamPaperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await requireBoard(['aqa'], '/mock-exams')
  return <>{children}</>
}

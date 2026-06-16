import { requireBoard } from '@/lib/board/board-guard'
import { requireSubscription } from '@/lib/auth/require-subscription'

// Every individual mock exam paper currently shipped under /mock-exams/[id]
// belongs to the AQA spec (aqa-lang-p1, aqa-lang-p2, aqa-lit-p1, aqa-lit-p2).
// Students who have selected a different board are redirected back to the
// mock-exams hub, which renders a "Coming soon" message for their board.
//
// 2026-06-08 Option C paywall (audit C1): the [id] page is a client
// component that imports the full paper + mark scheme + Grade-7 model
// answers from src/data/mock-exams* straight into the client bundle (it
// makes zero API calls). A client-side gate would still ship those answer
// keys in the JS payload. Gating here in the SERVER layout means a
// non-entitled visitor is redirected BEFORE the page renders, so the
// bundle is never served. The /mock-exams index stays public (SEO /
// marketing landing); only the attempt route requires sign-in + a live
// trial/subscription. requireSubscription runs AFTER requireBoard so a
// wrong-board user still lands on the hub's "coming soon" rather than
// the pricing page.
export default async function MockExamPaperLayout({ children }: { children: React.ReactNode }) {
  await requireBoard(['aqa'], '/mock-exams')
  await requireSubscription('/mock-exams')
  return <>{children}</>
}

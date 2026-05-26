import type { ExamBoard } from '@/lib/board/board-config'
import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Drop-in wrapper for revision / grade-guide pages.
 *
 * Most pages in `/analysis/revision/*` are generic (revision technique,
 * memorisation tips, exam-day advice) and apply to every GCSE student
 * regardless of exam board - those pages should NOT use this wrapper.
 *
 * A handful of pages are board-specific (e.g. grade boundaries with
 * AQA spec codes, English Language vs Literature explained around
 * AQA's 8700/8702). Those pages wrap their body in this gate and pass
 * the relevant `contentBoards` so students on the wrong board see a
 * warning banner.
 *
 * The banner is a client component that only renders after hydration,
 * so crawlers and first-time visitors with no board selected still see
 * the full article (preserving SEO), while students on the wrong board
 * get a prominent warning and an escape hatch to their own revision hub.
 */
type Props = {
  children: React.ReactNode
  /**
   * The exam boards this page's content is written for. When omitted
   * the page is treated as generic and no banner is rendered. Pass
   * `['aqa']` for AQA-only content, etc.
   */
  contentBoards?: ExamBoard[]
  /** Human-readable name shown inside the banner. */
  contentName?: string
  /** Where the "Go to your board's content" link should send the user. */
  redirectTo?: string
}

export function AnalysisBoardGate({
  children,
  contentBoards,
  contentName = 'this exam board',
  redirectTo = '/revision',
}: Props) {
  if (!contentBoards || contentBoards.length === 0) {
    return <>{children}</>
  }

  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6 lg:px-8">
        <WrongBoardBanner
          contentBoards={contentBoards}
          contentName={contentName}
          redirectTo={redirectTo}
        />
      </div>
      {children}
    </>
  )
}

export default AnalysisBoardGate

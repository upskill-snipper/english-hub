import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Drop-in wrapper for AQA Power and Conflict analysis pages.
 *
 * The whole poetry cluster (Ozymandias, London, Kamikaze, Bayonet Charge,
 * etc.) is specific to the AQA anthology, so any reader studying a
 * different board has arrived at the wrong place - usually via a direct
 * Google search result.
 *
 * Usage inside a page.tsx (server component):
 *
 *     import { AnalysisBoardGate } from '../_components/AnalysisBoardGate'
 *     export default function Page() {
 *       return (
 *         <AnalysisBoardGate>
 *           <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
 *             ...the existing page body...
 *           </main>
 *         </AnalysisBoardGate>
 *       )
 *     }
 *
 * The banner is a client component that only renders after hydration, so
 * crawlers and first-time visitors with no board selected still see the
 * full article - preserving SEO - while students on the wrong board get
 * a prominent warning and an escape hatch to their own revision hub.
 */
export function AnalysisBoardGate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6 lg:px-8">
        <WrongBoardBanner
          contentBoards={['aqa']}
          contentName="AQA Power and Conflict poetry"
          redirectTo="/revision/poetry"
        />
      </div>
      {children}
    </>
  )
}

export default AnalysisBoardGate

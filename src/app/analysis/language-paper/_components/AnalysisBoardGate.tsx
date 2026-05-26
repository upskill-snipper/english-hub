import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Drop-in wrapper for AQA Language Paper analysis pages.
 *
 * Every guide in this folder targets the AQA English Language
 * specification (8700) - Paper 1 and Paper 2. Students on a different
 * board (Edexcel, OCR, Eduqas, IGCSE, etc.) who land here from a Google
 * search are looking at the wrong content for their exam.
 *
 * Used by the folder's `layout.tsx`, so every page under
 * `/analysis/language-paper/*` automatically gets the banner without
 * needing to edit each page file individually.
 *
 * The banner is a client component that only renders after hydration,
 * so crawlers and first-time visitors with no board selected still see
 * the full article (preserving SEO), while students on the wrong board
 * get a prominent warning and an escape hatch to their own revision hub.
 */
export function AnalysisBoardGate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6 lg:px-8">
        <WrongBoardBanner
          contentBoards={['aqa']}
          contentName="AQA English Language Paper 1 and Paper 2"
          redirectTo="/revision/language"
        />
      </div>
      {children}
    </>
  )
}

export default AnalysisBoardGate

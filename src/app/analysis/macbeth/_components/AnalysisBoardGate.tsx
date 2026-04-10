import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Drop-in wrapper for Macbeth analysis pages.
 *
 * Macbeth is set on AQA, Edexcel, OCR, Eduqas and Edexcel IGCSE, so the
 * only boards where it is NOT studied are the Cambridge IGCSE language
 * specifications (0500 and 0990). We still render the article in full for
 * those readers — the content is genuinely useful for language analysis —
 * but we surface a warning that their board doesn't include Macbeth.
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
 * crawlers and first-time visitors with no board selected always see the
 * full article — preserving SEO.
 */
export function AnalysisBoardGate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6 lg:px-8">
        <WrongBoardBanner
          contentBoards={['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']}
          contentName="Macbeth"
          redirectTo="/revision/texts"
        />
      </div>
      {children}
    </>
  )
}

export default AnalysisBoardGate

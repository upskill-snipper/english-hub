import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Drop-in wrapper for An Inspector Calls analysis pages.
 *
 * An Inspector Calls is a set text on AQA, Edexcel, OCR, Eduqas and Edexcel
 * IGCSE GCSE English Literature specifications. It is NOT a set text on the
 * Cambridge IGCSE language specifications (0500 and 0990), so readers on
 * those boards see an amber banner pointing them back to their own revision
 * hub. The article still renders in full underneath - the content remains
 * useful for general literature analysis - but the warning prevents anyone
 * from revising the wrong text for their actual paper.
 *
 * The banner is a client component that only renders after Zustand
 * rehydrates the persisted board cookie, so search-engine crawlers and
 * first-time visitors with no board selected always see the full article.
 * This preserves SEO and avoids any layout flicker.
 */
export function AnalysisBoardGate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-6 sm:px-6 lg:px-8">
        <WrongBoardBanner
          contentBoards={['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']}
          contentName="An Inspector Calls"
          redirectTo="/revision/texts"
        />
      </div>
      {children}
    </>
  )
}

export default AnalysisBoardGate

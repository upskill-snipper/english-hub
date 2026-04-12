import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Drop-in wrapper for A Christmas Carol analysis pages.
 *
 * A Christmas Carol is a set text on AQA, Edexcel and Eduqas GCSE English
 * Literature specifications. It is NOT studied on OCR, Cambridge IGCSE
 * (0500 / 0990) or Edexcel IGCSE 4ET1, so readers on those boards see an
 * amber banner pointing them back to their own revision hub. The article
 * itself still renders underneath in full — Dickens analysis is useful
 * regardless of board — but the warning prevents anyone from revising the
 * wrong text for their actual paper.
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
          contentBoards={['aqa', 'edexcel', 'eduqas']}
          contentName="A Christmas Carol"
          redirectTo="/revision/texts"
        />
      </div>
      {children}
    </>
  )
}

export default AnalysisBoardGate

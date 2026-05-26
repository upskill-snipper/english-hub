import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Segment layout for /analysis/macbeth.
 *
 * Automatically wraps every page under this route with <WrongBoardBanner>,
 * which acts as a blocking overlay for readers whose chosen exam board does
 * not study Macbeth. Macbeth is studied on AQA, Edexcel, OCR, Eduqas and
 * Edexcel IGCSE - it is NOT on Cambridge IGCSE 0500/0990. Using a layout
 * means all pages get the gate without needing per-page imports.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WrongBoardBanner
        contentBoards={['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse']}
        contentName="Macbeth"
        redirectTo="/revision/texts"
      />
      {children}
    </>
  )
}

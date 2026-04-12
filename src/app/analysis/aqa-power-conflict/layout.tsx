import { WrongBoardBanner } from '@/components/board/WrongBoardBanner'

/**
 * Segment layout for /analysis/aqa-power-conflict.
 *
 * Automatically wraps every page under this route with <WrongBoardBanner>,
 * which acts as a blocking overlay for readers whose chosen exam board does
 * not study the AQA Power and Conflict poetry cluster. Using a layout means
 * all pages get the gate without needing per-page imports.
 */
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <WrongBoardBanner
        contentBoards={['aqa']}
        contentName="AQA Power and Conflict poetry"
        redirectTo="/revision/poetry"
      />
      {children}
    </>
  )
}

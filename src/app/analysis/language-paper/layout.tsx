import { AnalysisBoardGate } from './_components/AnalysisBoardGate'

/**
 * Shared layout for every page under /analysis/language-paper/*.
 *
 * Wraps all child pages in `AnalysisBoardGate` so the wrong-board
 * warning banner appears automatically on every individual guide
 * without having to edit 25+ page files.
 *
 * Note: Next.js layouts do not re-render on client navigation between
 * sibling routes, so the banner state stays consistent as the student
 * moves between Paper 1 / Paper 2 guides.
 */
export default function LanguagePaperLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AnalysisBoardGate>{children}</AnalysisBoardGate>
}

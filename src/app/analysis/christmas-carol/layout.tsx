import { AnalysisBoardGate } from './_components/AnalysisBoardGate'

/**
 * Segment layout for /analysis/christmas-carol.
 *
 * Wraps the hub page and every quote / character / theme / context page
 * underneath it in <AnalysisBoardGate>, which surfaces the WrongBoardBanner
 * to readers whose chosen exam board does not study A Christmas Carol.
 *
 * Using a layout means we never have to edit individual page.tsx files —
 * all 26 routes get the banner automatically while preserving their
 * existing schema.org markup, canonical URLs and metadata.
 */
export default function ChristmasCarolLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AnalysisBoardGate>{children}</AnalysisBoardGate>
}

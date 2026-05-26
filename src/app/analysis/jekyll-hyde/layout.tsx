import { AnalysisBoardGate } from './_components/AnalysisBoardGate'

/**
 * Segment layout for /analysis/jekyll-hyde.
 *
 * Wraps the hub page and every quote / character / theme / context page
 * underneath it in <AnalysisBoardGate>, which surfaces the WrongBoardBanner
 * to readers whose chosen exam board does not study Jekyll and Hyde.
 *
 * Using a layout means we never have to edit individual page.tsx files -
 * every route gets the banner automatically while preserving its existing
 * schema.org markup, canonical URLs and metadata.
 */
export default function JekyllHydeLayout({ children }: { children: React.ReactNode }) {
  return <AnalysisBoardGate>{children}</AnalysisBoardGate>
}

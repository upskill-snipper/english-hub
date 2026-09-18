// ─── The published grade-boundary table ─────────────────────────────────────
//
// THE DEFECT THIS FIXES (18/19 September 2026)
//
// The public boundary pages hardcoded their own numbers, and they were wrong.
//
//   AQA, June 2024 column, as published: 121 110 99 86 72 54 40 25 10
//   AQA's own PDF:                       121 111 102 92 82 73 54 35 16
//
// Eight of the nine grades were wrong. Grade 4 said 54 where AQA says 73 — a
// student told they need 54 marks for a pass, on a boundaries page, would be
// 19 marks adrift. Edexcel was wrong in every grade: the page said 107 96 85
// 74 63 52 39 26 13 against Pearson's 132 123 114 104 94 84 64 45 26.
//
// Both pages also carried June 2023 and June 2025 columns that were never
// transcribed from anything. The claim sheet forbids invented statistics, and
// these are indexed landing pages aimed at exactly the teachers we want to be
// found by: a teacher who checks one number against the board PDF on results
// day and screenshots the difference is a teacher lost permanently.
//
// The correct figures already existed in the repo, transcribed from the board
// PDFs into src/lib/marking/grade-boundaries and traceable to a source URL and
// a retrieval date. This component renders from that single module, so the
// published page and the grade predictor can never again disagree, and only
// the series actually sourced is shown.
//
// HONESTY GATE: those tables carry `verified: false` until a human checks them
// against the board PDF. That is not a reason to keep publishing worse
// numbers, but it is a reason to say so, so the caveat below renders whenever
// the flag is false and names the source for the reader to check themselves.
// ────────────────────────────────────────────────────────────────────────────

import { GRADE_BOUNDARY_REGISTRY } from '@/lib/marking/grade-boundaries'

const GRADE_STYLES: Record<string, string> = {
  '9': 'font-bold text-success-700',
  '8': 'font-bold text-success-700',
  '7': 'font-bold text-primary',
  '6': 'font-bold text-primary',
  '5': 'font-bold text-primary',
  '4': 'font-bold text-yellow-600',
}

function rowClass(grade: string): string {
  if (grade === '9') return 'bg-success-50'
  if (grade === '8') return 'bg-success-50/50'
  return ''
}

export function GradeBoundaryTable({ boardId }: { boardId: string }) {
  const table = GRADE_BOUNDARY_REGISTRY[boardId]
  if (!table) return null

  const sourced = table.thresholds.filter((t) => t.rawMark !== null)
  if (sourced.length === 0) return null

  const rawMax = sourced[0]?.rawMax ?? null

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <caption className="sr-only">
            {table.qualification} grade boundaries, {table.series}
          </caption>
          <thead>
            <tr className="border-b border-border text-left text-muted-foreground">
              <th scope="col" className="py-2 pr-4">
                Grade
              </th>
              <th scope="col" className="py-2 pr-4">
                {table.series} raw mark{rawMax ? ` (out of ${rawMax})` : ''}
              </th>
              <th scope="col" className="py-2 pr-4">
                Approx. %
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sourced.map((t) => (
              <tr key={t.grade} className={rowClass(t.grade)}>
                <td
                  className={`py-2 pr-4 ${GRADE_STYLES[t.grade] ?? 'font-bold text-muted-foreground'}`}
                >
                  {t.grade}
                </td>
                <td className="py-2 pr-4">{t.rawMark}</td>
                <td className="py-2 pr-4">{t.pct === null ? '-' : `~${Math.round(t.pct)}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {table.qualification}. Figures are the board&apos;s published{' '}
        <strong>{table.series}</strong> raw subject-level boundaries, transcribed on{' '}
        {table.retrievedAt} from{' '}
        <a
          href={table.sourceUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="underline underline-offset-2 hover:text-foreground"
        >
          the official source
        </a>
        .{table.note ? ` ${table.note}` : ''}
      </p>

      {!table.verified && (
        <p className="mt-2 rounded-md border border-amber-500/40 bg-amber-500/10 p-3 text-xs leading-relaxed text-amber-800 dark:text-amber-200">
          <strong>Check these against the board before you rely on them.</strong> We transcribed
          them from the official PDF linked above and a second person has not yet checked the
          transcription. Boundaries also change every series, so the only figure that governs your
          result is the one the board publishes for your own series.
        </p>
      )}
    </div>
  )
}

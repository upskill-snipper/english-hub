/**
 * The bulk upload's last step: what the commit did, and every way it fell
 * short.
 *
 * FIXED 12 October 2026. This screen showed Created, Updated and Skipped under
 * a green "Import complete", and nothing else. The API had returned
 * `memberLinkFailures` since 19 September and nothing displayed it, so a
 * school whose pupils were never linked was shown a success. Every failure
 * category the API returns is now listed, row by row, and the heading says
 * "finished with problems" when there are any:
 *   - errors: rows not imported (repeated, a member of staff's email, no
 *     account could be made, a row missing a field);
 *   - memberLinkFailures: pupils not linked to the school;
 *   - unmatchedClassCodes: pupils whose class code matched no class, so they
 *     are in no class;
 *   - placementFailures: pupils who could not be placed in their class;
 *   - classCountFailures: classes whose pupil count was not updated;
 *   - failuresNotLogged: the upload log could not record the above.
 * A replay of an earlier upload has only the counts and the stored errors,
 * and says so.
 *
 * No hooks, so it renders on the server; tested that way in
 * ./upload-result.test.tsx.
 */

import { AlertTriangle, CheckCircle } from 'lucide-react'

import type {
  CommitBulkUploadBody,
  CommitBulkUploadReplayBody,
} from '@/lib/school/bulk-upload-commit'

export type UploadResult = CommitBulkUploadBody | CommitBulkUploadReplayBody

interface ProblemRow {
  readonly row: number | null
  readonly who: string
  readonly what: string
}

/** Every problem in the result, grouped as the school will read them. */
export function problemGroups(result: UploadResult): Array<{ title: string; rows: ProblemRow[] }> {
  const groups: Array<{ title: string; rows: ProblemRow[] }> = [
    {
      title: 'Not imported',
      rows: result.errors.map((e) => ({ row: e.row || null, who: e.field ?? '', what: e.message })),
    },
  ]
  if (!('idempotent' in result)) {
    groups.push(
      {
        title: 'Not linked to the school',
        rows: result.memberLinkFailures.map((f) => ({ row: f.row, who: f.email, what: f.reason })),
      },
      {
        title: 'Class code not found, so in no class',
        rows: result.unmatchedClassCodes.map((u) => ({
          row: u.row,
          who: u.email,
          what: `No active class at your school is called "${u.classCode}".`,
        })),
      },
      {
        title: 'Not placed in their class',
        rows: result.placementFailures.map((f) => ({
          row: f.row,
          who: f.email,
          what: `Class "${f.classCode}": ${f.reason}`,
        })),
      },
      {
        title: 'Class size not updated',
        rows: result.classCountFailures.map((c) => ({
          row: null,
          who: `Class ${c.classCode}`,
          what: c.reason,
        })),
      },
    )
  }
  return groups.filter((g) => g.rows.length > 0)
}

/** The problems as a CSV the school can keep and work through. */
export function problemsToCsv(result: UploadResult): string {
  const quote = (v: string) => `"${v.replace(/"/g, '""')}"`
  const lines = ['row,problem,who,details']
  for (const g of problemGroups(result)) {
    for (const r of g.rows) {
      lines.push([r.row ?? '', quote(g.title), quote(r.who), quote(r.what)].join(','))
    }
  }
  return `${lines.join('\n')}\n`
}

function Pill({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className={`rounded-lg border px-4 py-3 ${tone}`}>
      <div className="text-2xl font-bold tabular-nums">{value}</div>
      <div className="text-xs uppercase tracking-wider opacity-80">{label}</div>
    </div>
  )
}

export function UploadResultSummary({ result }: { result: UploadResult }) {
  const groups = problemGroups(result)
  const notLogged = !('idempotent' in result) && result.failuresNotLogged === true
  const problems = groups.length > 0 || notLogged

  return (
    <div className="space-y-4">
      <h2 className="flex items-center gap-2 text-lg font-semibold">
        {problems ? (
          <>
            <AlertTriangle className="size-5 text-amber-400" />
            Import finished, with problems to fix
          </>
        ) : (
          <>
            <CheckCircle className="size-5 text-emerald-400" />
            Import complete
          </>
        )}
      </h2>

      <div className="grid grid-cols-3 gap-3">
        <Pill
          label="Created"
          value={result.created}
          tone="border-emerald-900/50 bg-emerald-950/30 text-emerald-200"
        />
        <Pill
          label="Updated"
          value={result.updated}
          tone="border-indigo-900/50 bg-indigo-950/30 text-indigo-200"
        />
        <Pill
          label="Skipped"
          value={result.skipped}
          tone="border-zinc-800 bg-zinc-950/40 text-zinc-200"
        />
      </div>

      {'idempotent' in result && (
        <p className="text-xs text-zinc-400">
          This run matched a previous submission, so no duplicate accounts were created. These are
          that upload&rsquo;s counts and the problems it recorded.
        </p>
      )}

      {groups.map((g) => (
        <section
          key={g.title}
          className="rounded-lg border border-amber-900/50 bg-amber-950/20 px-4 py-3 text-sm"
        >
          <h3 className="mb-2 font-semibold text-amber-200">
            {g.title} ({g.rows.length})
          </h3>
          <ul className="space-y-1 text-zinc-200">
            {g.rows.map((r, i) => (
              <li key={`${g.title}-${r.row ?? 'x'}-${i}`}>
                {r.row !== null && (
                  <span className="tabular-nums text-zinc-400">Row {r.row}: </span>
                )}
                {r.who && <span className="font-mono text-xs">{r.who} </span>}
                <span>{r.what}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {notLogged && (
        <p className="rounded-lg border border-amber-900/50 bg-amber-950/20 px-4 py-3 text-sm text-amber-200">
          These problems could not be saved to your upload log, so it shows fewer than happened.
          Keep this page, or download the list below.
        </p>
      )}
    </div>
  )
}

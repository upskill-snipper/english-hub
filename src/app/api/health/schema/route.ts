// ─── GET /api/health/schema ──────────────────────────────────────────────────
//
// WHY THIS EXISTS (19 September 2026, DATA-1)
//
// `scripts/check-schema-drift.mjs` was the only thing that compared what the
// repository claims about the database against what the database has, and
// nothing ran it. It was as good as the last person who remembered - which, in
// the case of `profiles.is_minor`, was nobody for four months while every
// identity read on a children's product returned Postgres error 42703 and the
// caller discarded it.
//
// It was also structurally blind to the more common failure. It compared
// migrations against `information_schema` and nothing else, so a table that
// CODE reads and no migration declares was invisible to it. Five public forms
// wrote to nothing for months that way. Seven more tables still do.
//
// WHAT IT CHECKS. 529 expectations as of today: tables and columns the
// migrations declare, tables the code reads, Prisma models, policies, indexes,
// triggers and functions.
//
// WHY IT ANSWERS FROM A MANIFEST. The migration files and the `src/` tree are
// not in this function's bundle - Next.js includes only what is statically
// imported - so a route that scanned them here would parse zero files and
// report a clean schema for ever. `src/lib/schema/expected-schema.json` is
// generated and committed, and a test fails when it goes stale.
//
// IT REPORTS NEW DRIFT, NOT ALL DRIFT. `scripts/schema-drift-known.json` holds
// the 31 findings already recorded against DATA-3 to DATA-9, each with its
// reason. Without that split this endpoint would be red on its first run and
// every run after, which is indistinguishable from being broken.
// ────────────────────────────────────────────────────────────────────────────

import { NextRequest, NextResponse } from 'next/server'
import { authoriseCronRequest } from '@/lib/cron/auth'
import { compareSchema } from '@/lib/schema/drift.mjs'
import type { DriftReport, KnownDrift, SchemaManifest } from '@/lib/schema/drift'
import { readLiveSchema } from '@/lib/schema/live'
import manifestJson from '@/lib/schema/expected-schema.json'
import knownJson from '../../../../../scripts/schema-drift-known.json'

// JSON imports widen every literal to `string`. The casts are safe in the
// direction that matters: a typo in the allowlist makes an entry fail to
// match, so the finding is REPORTED rather than silenced.
// `schema-drift-guard.test.ts` validates both files against these types.
const manifest = manifestJson as unknown as SchemaManifest
const known = knownJson as unknown as KnownDrift

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET(request: NextRequest) {
  const auth = authoriseCronRequest(request, 'health/schema')
  if (!auth.ok) return auth.response

  let report: DriftReport
  try {
    const live = await readLiveSchema()
    report = compareSchema(manifest, live, known)
  } catch (err) {
    // A checker that cannot read the schema must say so rather than answer
    // "no drift". This is the whole failure mode the endpoint exists to end.
    console.error('[health/schema] could not read the schema:', err)
    return NextResponse.json(
      {
        ok: false,
        error: 'could not read the schema',
        detail: err instanceof Error ? err.message : String(err),
        checkedAt: new Date().toISOString(),
      },
      { status: 500 },
    )
  }

  const introduced = report.introduced.length
  if (introduced > 0) {
    console.error(
      `[health/schema] ${introduced} NEW drift finding(s): ` +
        report.introduced.map((f) => `${f.kind} ${f.object}`).join(', '),
    )
  }
  if (report.stale.length > 0) {
    // Not a failure. Something was fixed and the register was not updated.
    console.warn(
      `[health/schema] ${report.stale.length} allowlist entr(ies) no longer drift: ` +
        report.stale.map((s) => s.object).join(', '),
    )
  }

  return NextResponse.json(
    {
      ok: introduced === 0,
      checkedObjects: report.checkedObjects,
      introduced: report.introduced,
      knownCount: report.expected.length,
      staleAllowlistEntries: report.stale,
      checkedAt: new Date().toISOString(),
    },
    // Non-2xx on NEW drift, so an uptime monitor sees it. Known drift is 200:
    // it is recorded debt, not news.
    { status: introduced === 0 ? 200 : 503 },
  )
}

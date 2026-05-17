// ─── EU AI Act Art. 15 — Marking Accuracy/Robustness Eval Harness ────────────
//
// PURPOSE
//   Provides offline, deterministic evidence for EU AI Act Article 15
//   (accuracy, robustness) for the GCSE marking feature: it measures how well
//   the grade predictor agrees with human-examiner grades on a gold-standard
//   dataset, per exam board and overall, using exact-grade agreement, adjacent
//   (±1) agreement and Quadratic Weighted Kappa (QWK).
//
// RUNNER
//   No `tsx` is installed in this project, but `vitest` is. This file is
//   therefore wrapped in a single vitest `test()` so it:
//     • runs fully offline & deterministically (no LLM, no network),
//     • prints a per-board + overall report to stdout,
//     • FAILS the run (non-zero exit) if any metric is below threshold.
//   It is NOT picked up by `npm test`: the root vitest config `include` is
//   `src/**/*.test.{ts,tsx}`, and this file lives outside `src/`. It is run via
//   a dedicated config that targets only this file. Run it explicitly:
//
//       node_modules/.bin/vitest run --config evals/vitest.eval.config.ts --disableConsoleIntercept
//
//   (An npm script `eval:marking` wired to that command has been added to
//   package.json. The historical `tsx evals/run.ts` invocation is not used
//   because `tsx` is not a dependency of this project.)
//
// OFFLINE ADAPTER + FUTURE LLM ADAPTER
//   The default adapter replays each case's *examiner* AO marks through the
//   EXISTING deterministic `predictGrade`. This isolates the grade-boundary
//   model's validity (the thing Art. 15 cares about here) from LLM marking
//   noise and keeps CI hermetic. A future LLM-marking adapter only has to
//   implement `MarkerAdapter` (see ./types.ts) — the metrics/reporting code
//   below does not change.
// ────────────────────────────────────────────────────────────────────────────

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { describe, it, expect } from 'vitest'

import { predictGrade } from '@/lib/marking/grade-predictor'
import type { AOScore } from '@/lib/marking/mark-schemes/types'

import {
  GRADE_ORDER,
  type EvalReport,
  type EvalRow,
  type EvalThresholds,
  type GoldStandardCase,
  type MarkerAdapter,
  type SliceMetrics,
} from './types'

// ─── Thresholds ──────────────────────────────────────────────────────────────
// Conservative initial gates. Rationale + drift/regression policy live in
// evals/README.md. Tune via that policy, not ad hoc.

export const THRESHOLDS: EvalThresholds = {
  minExactAgreement: 0.6,
  minAdjacentAgreement: 0.95,
  minQwk: 0.7,
}

const DATASET_FILE = 'datasets/gold-standard.example.jsonl'

// ─── Dataset loading ─────────────────────────────────────────────────────────

function evalsDir(): string {
  // Works under vitest (ESM): resolve relative to this file, not cwd.
  return dirname(fileURLToPath(import.meta.url))
}

/** Parse JSONL (one JSON object per non-empty, non-`//`-comment line). */
export function parseJsonl(raw: string): GoldStandardCase[] {
  const cases: GoldStandardCase[] = []
  const lines = raw.split(/\r?\n/)
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    if (line.length === 0 || line.startsWith('//')) continue
    let parsed: unknown
    try {
      parsed = JSON.parse(line)
    } catch (err) {
      throw new Error(`Invalid JSONL at line ${i + 1}: ${(err as Error).message}`)
    }
    cases.push(validateCase(parsed, i + 1))
  }
  return cases
}

function validateCase(value: unknown, line: number): GoldStandardCase {
  if (!value || typeof value !== 'object') {
    throw new Error(`Line ${line}: case is not an object`)
  }
  const c = value as Record<string, unknown>
  const requiredStrings = [
    'id',
    'board',
    'paper',
    'question',
    'markSchemeId',
    'studentAnswer',
    'examinerGrade',
  ] as const
  for (const key of requiredStrings) {
    if (typeof c[key] !== 'string' || (c[key] as string).length === 0) {
      throw new Error(`Line ${line}: missing/invalid string field "${key}"`)
    }
  }
  if (!Array.isArray(c.examinerMarks) || c.examinerMarks.length === 0) {
    throw new Error(`Line ${line}: "examinerMarks" must be a non-empty array`)
  }
  for (const m of c.examinerMarks as unknown[]) {
    const mm = m as Record<string, unknown>
    if (
      typeof mm.id !== 'string' ||
      typeof mm.marks !== 'number' ||
      typeof mm.maxMarks !== 'number'
    ) {
      throw new Error(`Line ${line}: malformed examinerMarks entry`)
    }
  }
  return value as GoldStandardCase
}

export function loadDataset(): GoldStandardCase[] {
  const path = join(evalsDir(), DATASET_FILE)
  const raw = readFileSync(path, 'utf8')
  const cases = parseJsonl(raw)
  if (cases.length === 0) {
    throw new Error(`Dataset ${DATASET_FILE} contained no cases`)
  }
  return cases
}

// ─── Offline adapter (default) ───────────────────────────────────────────────

/**
 * Default, pure, offline marker: replays examiner AO marks through the
 * deterministic predictor. No LLM, no I/O beyond the dataset, no network.
 */
export const examinerReplayAdapter: MarkerAdapter = {
  name: 'examiner-replay (offline, deterministic)',
  predict(input: GoldStandardCase): string {
    const aoScores: AOScore[] = input.examinerMarks.map((m) => ({
      id: m.id,
      label: m.id,
      marks: m.marks,
      maxMarks: m.maxMarks,
      band: '',
      justification: '',
    }))
    const denominator =
      input.questionMaxMarks ?? input.examinerMarks.reduce((s, m) => s + m.maxMarks, 0)
    return predictGrade(aoScores, denominator, input.board).grade
  },
}

// ─── Metrics ─────────────────────────────────────────────────────────────────

function gradeIndex(grade: string): number {
  const idx = GRADE_ORDER.indexOf(grade)
  // Unknown grades are clamped to the bottom so they are penalised, not ignored.
  return idx === -1 ? 0 : idx
}

/**
 * Quadratic Weighted Kappa between two equal-length grade sequences.
 * Standard Cohen's kappa with quadratic weights over the ordinal grade scale.
 * Returns 1 for perfect agreement, 0 for chance-level, can be negative.
 */
export function quadraticWeightedKappa(
  examiner: readonly string[],
  predicted: readonly string[],
): number {
  const n = examiner.length
  if (n === 0) return 1
  const K = GRADE_ORDER.length

  const observed: number[][] = Array.from({ length: K }, () => new Array<number>(K).fill(0))
  const examinerHist = new Array<number>(K).fill(0)
  const predictedHist = new Array<number>(K).fill(0)

  for (let i = 0; i < n; i++) {
    const a = gradeIndex(examiner[i])
    const b = gradeIndex(predicted[i])
    observed[a][b] += 1
    examinerHist[a] += 1
    predictedHist[b] += 1
  }

  const denom = (K - 1) * (K - 1)
  let numerator = 0
  let denominator = 0
  for (let a = 0; a < K; a++) {
    for (let b = 0; b < K; b++) {
      const w = ((a - b) * (a - b)) / denom
      const expected = (examinerHist[a] * predictedHist[b]) / n
      numerator += w * observed[a][b]
      denominator += w * expected
    }
  }
  if (denominator === 0) return 1 // no disagreement possible → perfect
  return 1 - numerator / denominator
}

function sliceMetrics(slice: string, rows: readonly EvalRow[]): SliceMetrics {
  const n = rows.length
  if (n === 0) {
    return { slice, n: 0, exactAgreement: 0, adjacentAgreement: 0, qwk: 1 }
  }
  const exact = rows.filter((r) => r.exact).length / n
  const adjacent = rows.filter((r) => r.adjacent).length / n
  const qwk = quadraticWeightedKappa(
    rows.map((r) => r.examinerGrade),
    rows.map((r) => r.predictedGrade),
  )
  return {
    slice,
    n,
    exactAgreement: exact,
    adjacentAgreement: adjacent,
    qwk,
  }
}

// ─── Harness ─────────────────────────────────────────────────────────────────

export async function runEval(
  adapter: MarkerAdapter = examinerReplayAdapter,
  thresholds: EvalThresholds = THRESHOLDS,
): Promise<EvalReport> {
  const dataset = loadDataset()
  const rows: EvalRow[] = []

  for (const c of dataset) {
    const predictedGrade = await adapter.predict(c)
    const distance = Math.abs(gradeIndex(c.examinerGrade) - gradeIndex(predictedGrade))
    // Recompute provenance the same way the predictor does, for the report.
    const denominator = c.questionMaxMarks ?? c.examinerMarks.reduce((s, m) => s + m.maxMarks, 0)
    const aoScores: AOScore[] = c.examinerMarks.map((m) => ({
      id: m.id,
      label: m.id,
      marks: m.marks,
      maxMarks: m.maxMarks,
      band: '',
      justification: '',
    }))
    const boundarySource = predictGrade(aoScores, denominator, c.board).boundarySource

    rows.push({
      id: c.id,
      board: c.board,
      examinerGrade: c.examinerGrade,
      predictedGrade,
      gradeDistance: distance,
      exact: distance === 0,
      adjacent: distance <= 1,
      boundarySource,
    })
  }

  const overall = sliceMetrics('overall', rows)

  const boards = Array.from(new Set(rows.map((r) => r.board))).sort()
  const byBoard = boards.map((b) =>
    sliceMetrics(
      b,
      rows.filter((r) => r.board === b),
    ),
  )

  const failures: string[] = []
  const gate = (m: SliceMetrics): void => {
    if (m.exactAgreement < thresholds.minExactAgreement) {
      failures.push(
        `${m.slice}: exact agreement ${pct(m.exactAgreement)} < ${pct(
          thresholds.minExactAgreement,
        )}`,
      )
    }
    if (m.adjacentAgreement < thresholds.minAdjacentAgreement) {
      failures.push(
        `${m.slice}: adjacent agreement ${pct(m.adjacentAgreement)} < ${pct(
          thresholds.minAdjacentAgreement,
        )}`,
      )
    }
    if (m.qwk < thresholds.minQwk) {
      failures.push(`${m.slice}: QWK ${m.qwk.toFixed(3)} < ${thresholds.minQwk.toFixed(3)}`)
    }
  }
  gate(overall)
  byBoard.forEach(gate)

  return {
    thresholds,
    rows,
    overall,
    byBoard,
    passed: failures.length === 0,
    failures,
  }
}

// ─── Reporting ───────────────────────────────────────────────────────────────

function pct(x: number): string {
  return `${(x * 100).toFixed(1)}%`
}

export function formatReport(report: EvalReport): string {
  const lines: string[] = []
  lines.push('')
  lines.push('═══ EU AI Act Art.15 — Marking Accuracy/Robustness Eval ═══════════════')
  lines.push(`Cases: ${report.rows.length}  |  Adapter: examiner-replay (offline)`)
  lines.push(
    `Thresholds → exact ≥ ${pct(report.thresholds.minExactAgreement)}, adjacent ≥ ${pct(
      report.thresholds.minAdjacentAgreement,
    )}, QWK ≥ ${report.thresholds.minQwk.toFixed(2)}`,
  )
  lines.push('')
  lines.push('Per-board:')
  for (const m of report.byBoard) {
    lines.push(
      `  • ${m.slice.padEnd(12)} n=${String(m.n).padStart(3)}  ` +
        `exact=${pct(m.exactAgreement).padStart(6)}  ` +
        `adj=${pct(m.adjacentAgreement).padStart(6)}  ` +
        `QWK=${m.qwk.toFixed(3)}`,
    )
  }
  lines.push('')
  lines.push(
    `OVERALL        n=${String(report.overall.n).padStart(3)}  ` +
      `exact=${pct(report.overall.exactAgreement).padStart(6)}  ` +
      `adj=${pct(report.overall.adjacentAgreement).padStart(6)}  ` +
      `QWK=${report.overall.qwk.toFixed(3)}`,
  )
  lines.push('')
  // Surface boundary-source provenance (cross-board validity transparency).
  const proxyCount = report.rows.filter((r) => r.boundarySource === 'aqa-5yr-average-proxy').length
  lines.push(
    `Boundary provenance: ${proxyCount}/${report.rows.length} cases scored ` +
      `with AQA cross-board PROXY boundaries (validity caveat — see README).`,
  )
  lines.push('')
  if (report.passed) {
    lines.push('RESULT: PASS ✅')
  } else {
    lines.push('RESULT: FAIL ❌')
    for (const f of report.failures) lines.push(`  - ${f}`)
  }
  lines.push('══════════════════════════════════════════════════════════════════════')
  return lines.join('\n')
}

// ─── vitest entrypoint (offline, deterministic, fails below threshold) ────────

describe('EU AI Act Art.15 — marking accuracy eval', () => {
  it('meets exact/adjacent/QWK thresholds per board and overall', async () => {
    const report = await runEval()
    // Printed to stdout so it doubles as the human/CI report.

    console.log(formatReport(report))
    expect(report.passed, report.failures.join('; ')).toBe(true)
  })
})

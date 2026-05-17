// ─── EU AI Act Art. 15 — Marking Accuracy/Robustness Eval Harness ────────────
//
// PURPOSE
//   Defensible accuracy/robustness evidence for the GCSE marking feature
//   (Annex III(3)(b), high-risk). Measures agreement between predicted and
//   human-examiner grades on a gold-standard set — per board, per cohort and
//   overall — with statistical rigor (QWK + bootstrap 95% CI, AO-MAE, band
//   confusion, test-retest variance) and a synthetic-vs-real CI gate.
//
// TWO ADAPTERS (see evals/adapters/) — what is measured depends on the adapter:
//   • examiner-replay (default, offline, deterministic): replays examiner AO
//     marks through the production `predictGrade`. Validates the grade-BOUNDARY
//     model only; does NOT measure the LLM. Always CI-safe.
//   • llm (EVAL_ADAPTER=llm): the EXACT production path
//     (`buildMarkingPrompt` → claude-sonnet-4-20250514 → `generateFeedback`).
//     OFFLINE by default via a recorded fixture cache; live Anthropic only with
//     EVAL_LLM_LIVE=1. The only adapter that can produce an LLM-accuracy figure.
//
// THE GATE (non-negotiable, Art. 15 integrity):
//   Synthetic data can validate the *instrument* but MUST NOT certify accuracy.
//   `runEval` hard-suppresses a numeric accuracy verdict for any board lacking
//   ≥1 real (synthetic:false) verified case and prints a loud
//   "NOT YET VALID FOR <board> — synthetic only" banner. A run is only
//   `certifiable` with the LLM adapter AND real data. Thresholds are
//   ratchet-only (evals/thresholds.json).
//
// RUNNER
//   No `tsx` here; `vitest` is. Wrapped in one vitest test so it runs offline,
//   prints the report, and exits non-zero below threshold / on a broken gate.
//       node_modules/.bin/vitest run --config evals/vitest.eval.config.ts --disableConsoleIntercept
//   (npm script: `npm run eval:marking`.) Not in `npm test` (root include is
//   `src/**/*.test.{ts,tsx}`; this lives outside `src/`).
//
// ENV
//   EVAL_ADAPTER       "examiner-replay" (default) | "llm"
//   EVAL_DATASET       "synthetic" (default) | "example" | absolute path
//   EVAL_REAL_DATASET  absolute path to the secure real set (overrides DATASET)
//   EVAL_RUNS          N≥1 (default 1) — N>1 enables test-retest variance
//   EVAL_LLM_LIVE=1    permit the real Anthropic call (llm adapter only)
//   EVAL_LLM_RECORD=1  persist live responses as fixtures (implies live)
// ────────────────────────────────────────────────────────────────────────────

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, isAbsolute, join } from 'node:path'
import { describe, it, expect } from 'vitest'

import {
  COHORT_BOOLEAN_KEYS,
  GRADE_ORDER,
  type BandConfusion,
  type CohortAttributes,
  type DisparityRow,
  type EvalReport,
  type EvalRow,
  type EvalThresholds,
  type GoldStandardCase,
  type MarkerAdapter,
  type SliceMetrics,
  type StabilityMetrics,
  type ThresholdsFile,
} from './types'
import {
  adjacentAgreement,
  aggregateAoMae,
  aoAbsoluteErrors,
  bandConfusionMatrix,
  bootstrapQwkCI,
  exactAgreement,
  gradeDistance,
  meanGradeError,
  quadraticWeightedKappa,
  testRetestStability,
} from './stats'
import { examinerReplayAdapter, resolveAdapter } from './adapters'

// ─── Back-compat: original public surface kept stable ────────────────────────
export { examinerReplayAdapter } from './adapters'
export { quadraticWeightedKappa } from './stats'

// ─── Thresholds (ratchet-only; loaded from evals/thresholds.json) ────────────

function evalsDir(): string {
  return dirname(fileURLToPath(import.meta.url))
}

export function loadThresholds(): ThresholdsFile {
  const raw = readFileSync(join(evalsDir(), 'thresholds.json'), 'utf8')
  const t = JSON.parse(raw) as ThresholdsFile
  for (const k of [
    'minExactAgreement',
    'minAdjacentAgreement',
    'minQwk',
    'maxDisparityDelta',
    'maxGradeInstabilityRate',
  ] as const) {
    if (typeof t[k] !== 'number' || !Number.isFinite(t[k])) {
      throw new Error(`thresholds.json: "${k}" must be a finite number`)
    }
  }
  return t
}

/** Back-compat constant (was a literal; now sourced from thresholds.json). */
export const THRESHOLDS: EvalThresholds = loadThresholds()

// ─── Dataset loading ─────────────────────────────────────────────────────────

function datasetPath(): string {
  const real = process.env.EVAL_REAL_DATASET
  if (real && real.trim().length > 0) {
    return isAbsolute(real) ? real : join(process.cwd(), real)
  }
  const sel = (process.env.EVAL_DATASET ?? 'synthetic').trim()
  if (sel === 'synthetic') {
    return join(evalsDir(), 'datasets/gold-standard.synthetic.jsonl')
  }
  if (sel === 'example') {
    return join(evalsDir(), 'datasets/gold-standard.example.jsonl')
  }
  return isAbsolute(sel) ? sel : join(process.cwd(), sel)
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
  if (c.synthetic !== undefined && typeof c.synthetic !== 'boolean') {
    throw new Error(`Line ${line}: "synthetic" must be a boolean if present`)
  }
  return value as GoldStandardCase
}

export function loadDataset(): GoldStandardCase[] {
  const path = datasetPath()
  const raw = readFileSync(path, 'utf8')
  const cases = parseJsonl(raw)
  if (cases.length === 0) {
    throw new Error(`Dataset ${path} contained no cases`)
  }
  return cases
}

/** A case is REAL only if it explicitly sets synthetic:false. Absence = synthetic. */
function isReal(c: GoldStandardCase): boolean {
  return c.synthetic === false
}

// ─── Slice metric computation (board / cohort / overall) ─────────────────────

function sliceMetrics(slice: string, rows: readonly EvalRow[]): SliceMetrics {
  const n = rows.length
  if (n === 0) {
    return {
      slice,
      n: 0,
      nReal: 0,
      exactAgreement: 0,
      adjacentAgreement: 0,
      qwk: 1,
      qwkCI: null,
      aoMae: {},
      meanGradeError: 0,
    }
  }
  const ex = rows.map((r) => r.examinerGrade)
  const pr = rows.map((r) => r.predictedGrade)
  return {
    slice,
    n,
    nReal: rows.filter((r) => !r.synthetic).length,
    exactAgreement: exactAgreement(ex, pr),
    adjacentAgreement: adjacentAgreement(ex, pr),
    qwk: quadraticWeightedKappa(ex, pr),
    qwkCI: bootstrapQwkCI(ex, pr),
    aoMae: aggregateAoMae(rows.map((r) => r.aoAbsErrors)),
    meanGradeError: meanGradeError(ex, pr),
  }
}

function cohortSlices(rows: readonly EvalRow[]): SliceMetrics[] {
  const out: SliceMetrics[] = []
  for (const key of COHORT_BOOLEAN_KEYS) {
    for (const want of [true, false] as const) {
      const sub = rows.filter((r) => Boolean(r.cohort?.[key]) === want)
      if (sub.length === 0) continue
      out.push(sliceMetrics(`${key}=${want}`, sub))
    }
  }
  // firstLanguage is a free-text bucket → slice each observed value.
  const langs = new Set<string>()
  for (const r of rows) {
    const fl = r.cohort?.firstLanguage
    if (fl && fl.trim().length > 0) langs.add(fl)
  }
  for (const lang of Array.from(langs).sort()) {
    const sub = rows.filter((r) => r.cohort?.firstLanguage === lang)
    out.push(sliceMetrics(`firstLanguage=${lang}`, sub))
  }
  return out
}

function disparities(
  overall: SliceMetrics,
  cohorts: readonly SliceMetrics[],
  maxDelta: number,
): DisparityRow[] {
  return cohorts.map((s) => {
    const exactDelta = s.exactAgreement - overall.exactAgreement
    const qwkDelta = s.qwk - overall.qwk
    return {
      slice: s.slice,
      n: s.n,
      nReal: s.nReal,
      exactAgreement: s.exactAgreement,
      overallExactAgreement: overall.exactAgreement,
      exactDelta,
      qwk: s.qwk,
      overallQwk: overall.qwk,
      qwkDelta,
      // Flag only adverse gaps that exceed the documented fairness threshold.
      flagged: -exactDelta > maxDelta || -qwkDelta > maxDelta,
    }
  })
}

// ─── One pass over the dataset with a given adapter ──────────────────────────

async function evaluateOnce(
  adapter: MarkerAdapter,
  dataset: readonly GoldStandardCase[],
): Promise<EvalRow[]> {
  const rows: EvalRow[] = []
  for (const c of dataset) {
    const outcome = await adapter.predict(c)
    const distance = gradeDistance(c.examinerGrade, outcome.grade)
    rows.push({
      id: c.id,
      board: c.board,
      markSchemeId: c.markSchemeId,
      synthetic: !isReal(c),
      cohort: c.cohort,
      examinerGrade: c.examinerGrade,
      predictedGrade: outcome.grade,
      gradeDistance: distance,
      exact: distance === 0,
      adjacent: distance <= 1,
      boundarySource: outcome.boundarySource,
      aoAbsErrors: aoAbsoluteErrors(c.examinerMarks, outcome.aoMarks),
    })
  }
  return rows
}

// ─── Harness ─────────────────────────────────────────────────────────────────

export async function runEval(
  adapter: MarkerAdapter = examinerReplayAdapter,
  thresholds: EvalThresholds = THRESHOLDS,
): Promise<EvalReport> {
  const dataset = loadDataset()

  const runs = Math.max(1, Number.parseInt(process.env.EVAL_RUNS ?? '1', 10) || 1)
  const allRuns: EvalRow[][] = []
  for (let r = 0; r < runs; r++) {
    allRuns.push(await evaluateOnce(adapter, dataset))
  }
  // Metrics are reported on the FIRST run; extra runs feed test-retest only.
  const rows = allRuns[0]

  const stability: StabilityMetrics | null =
    runs > 1 ? testRetestStability(allRuns.map((rs) => rs.map((row) => row.predictedGrade))) : null

  const overall = sliceMetrics('overall', rows)

  const boards = Array.from(new Set(rows.map((r) => r.board))).sort()
  const byBoard = boards.map((b) =>
    sliceMetrics(
      b,
      rows.filter((r) => r.board === b),
    ),
  )

  const byCohort = cohortSlices(rows)
  const disparityRows = disparities(overall, byCohort, thresholds.maxDisparityDelta)

  const bandConfusion: BandConfusion = bandConfusionMatrix(
    rows.map((r) => r.examinerGrade),
    rows.map((r) => r.predictedGrade),
  )

  // ── The synthetic-vs-real gate ──────────────────────────────────────────
  const syntheticOnlyBoards = boards.filter(
    (b) => rows.filter((r) => r.board === b && !r.synthetic).length === 0,
  )
  const anyReal = rows.some((r) => !r.synthetic)
  // A run can CERTIFY a numeric accuracy figure only with the LLM adapter
  // (the boundary baseline does not measure the model) AND real data.
  const certifiable = adapter.evaluatesLlm && anyReal

  const failures: string[] = []
  const warnings: string[] = []

  // Threshold gates apply only to slices that contain ≥1 real case — synthetic
  // data must never be able to FAIL→PASS-certify accuracy. (We still print
  // synthetic metrics as a mechanics check.)
  const gate = (m: SliceMetrics): void => {
    if (m.nReal === 0) return // not certifiable → not gated (suppressed below)
    if (m.exactAgreement < thresholds.minExactAgreement) {
      failures.push(
        `${m.slice}: exact ${pct(m.exactAgreement)} < ${pct(thresholds.minExactAgreement)}`,
      )
    }
    if (m.adjacentAgreement < thresholds.minAdjacentAgreement) {
      failures.push(
        `${m.slice}: adjacent ${pct(m.adjacentAgreement)} < ${pct(
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
  byCohort.forEach(gate)

  // Disparate-impact: a flagged slice with real data is a hard failure.
  for (const d of disparityRows) {
    if (d.flagged && d.nReal > 0) {
      failures.push(
        `disparate impact: ${d.slice} exactΔ=${signed(d.exactDelta)} ` +
          `QWKΔ=${signed(d.qwkDelta)} exceeds ±${thresholds.maxDisparityDelta} vs overall`,
      )
    }
  }

  // Test-retest instability (LLM adapter only; deterministic adapter = 0).
  if (stability && adapter.evaluatesLlm && anyReal) {
    if (stability.gradeInstabilityRate > thresholds.maxGradeInstabilityRate) {
      failures.push(
        `test-retest: grade instability ${pct(stability.gradeInstabilityRate)} > ` +
          `${pct(thresholds.maxGradeInstabilityRate)} over ${stability.runs} runs`,
      )
    }
  }

  // Warnings (non-fatal but loud).
  if (!adapter.evaluatesLlm) {
    warnings.push(
      'Adapter does NOT evaluate the LLM (boundary-model baseline only). This ' +
        "run validates the mark→grade table, NOT the model's marking accuracy.",
    )
  }
  if (!anyReal) {
    warnings.push(
      'Dataset is SYNTHETIC-ONLY. No board can be certified; numeric accuracy ' +
        'verdicts are suppressed. This run is a MECHANICS CHECK, not an ' +
        'accuracy claim (see evals/datasets/REAL-DATA-PROTOCOL.md).',
    )
  }
  for (const b of syntheticOnlyBoards) {
    warnings.push(`NOT YET VALID FOR ${b} — synthetic only (numeric verdict suppressed)`)
  }
  if (overall.qwkCI && overall.nReal > 0) {
    const width = overall.qwkCI.hi - overall.qwkCI.lo
    if (width > 0.3) {
      warnings.push(
        `Wide QWK 95% CI (±${(width / 2).toFixed(2)}) — sample too small for a ` +
          'precise figure; expand the real gold set (≥150/board).',
      )
    }
  }

  // PASS semantics: no threshold/fairness/stability failure on any GATED
  // (real-data) slice. A synthetic-only run with sound mechanics PASSES as a
  // mechanics check but is explicitly NOT certifiable (see banner).
  const passed = failures.length === 0

  return {
    adapterName: adapter.name,
    evaluatesLlm: adapter.evaluatesLlm,
    thresholds,
    rows,
    overall,
    byBoard,
    byCohort,
    disparities: disparityRows,
    bandConfusion,
    stability,
    syntheticOnlyBoards,
    passed,
    certifiable,
    failures,
    warnings,
  }
}

// ─── Reporting ───────────────────────────────────────────────────────────────

function pct(x: number): string {
  return `${(x * 100).toFixed(1)}%`
}
function signed(x: number): string {
  return `${x >= 0 ? '+' : ''}${(x * 100).toFixed(1)}pp`
}
function ci(c: SliceMetrics): string {
  return c.qwkCI ? `[${c.qwkCI.lo.toFixed(3)}, ${c.qwkCI.hi.toFixed(3)}]` : '[n<2]'
}

export function formatReport(report: EvalReport): string {
  const L: string[] = []
  L.push('')
  L.push('═══ EU AI Act Art.15 — Marking Accuracy/Robustness Eval ═══════════════')
  L.push(`Adapter : ${report.adapterName}`)
  L.push(
    `Mode    : ${report.evaluatesLlm ? 'LLM marking path' : 'boundary-model baseline'}` +
      ` | cases=${report.rows.length} | real=${report.overall.nReal}` +
      ` | runs=${report.stability ? report.stability.runs : 1}`,
  )
  L.push(
    `Gates   : exact ≥ ${pct(report.thresholds.minExactAgreement)}, ` +
      `adjacent ≥ ${pct(report.thresholds.minAdjacentAgreement)}, ` +
      `QWK ≥ ${report.thresholds.minQwk.toFixed(2)}, ` +
      `|disparity| ≤ ${report.thresholds.maxDisparityDelta}`,
  )
  L.push('')

  // Loud certifiability banner FIRST — this is the headline for a regulator.
  if (!report.certifiable) {
    L.push('┌──────────────────────────────────────────────────────────────────┐')
    L.push('│  ⚠  NOT A CERTIFIED ACCURACY RESULT                              │')
    if (!report.evaluatesLlm) {
      L.push('│  Boundary-model baseline only — the LLM marker is NOT measured.   │')
    }
    if (report.overall.nReal === 0) {
      L.push('│  SYNTHETIC DATA ONLY — mechanics check, not an accuracy claim.    │')
    }
    L.push('│  Synthetic data can validate the instrument; it can NEVER certify │')
    L.push('│  accuracy. See evals/datasets/REAL-DATA-PROTOCOL.md.              │')
    L.push('└──────────────────────────────────────────────────────────────────┘')
    L.push('')
  }

  for (const b of report.syntheticOnlyBoards) {
    L.push(`  ✖ NOT YET VALID FOR ${b} — synthetic only (numeric verdict suppressed)`)
  }
  if (report.syntheticOnlyBoards.length > 0) L.push('')

  L.push('Per-board:')
  for (const m of report.byBoard) {
    const tag = m.nReal === 0 ? ' [SYNTHETIC — suppressed]' : ` [real=${m.nReal}]`
    L.push(
      `  • ${m.slice.padEnd(16)} n=${String(m.n).padStart(3)} ` +
        `exact=${pct(m.exactAgreement).padStart(6)} ` +
        `adj=${pct(m.adjacentAgreement).padStart(6)} ` +
        `QWK=${m.qwk.toFixed(3)} CI95=${ci(m)}${tag}`,
    )
  }
  L.push('')
  L.push(
    `OVERALL            n=${String(report.overall.n).padStart(3)} ` +
      `exact=${pct(report.overall.exactAgreement).padStart(6)} ` +
      `adj=${pct(report.overall.adjacentAgreement).padStart(6)} ` +
      `QWK=${report.overall.qwk.toFixed(3)} CI95=${ci(report.overall)} ` +
      `meanGradeErr=${report.overall.meanGradeError.toFixed(2)}`,
  )
  L.push('')

  // Per-AO MAE (overall).
  const aoEntries = Object.entries(report.overall.aoMae).sort()
  if (aoEntries.length > 0) {
    L.push(
      `AO mean abs error (overall): ` +
        aoEntries.map(([ao, v]) => `${ao}=${v.toFixed(2)}`).join('  '),
    )
    L.push('')
  }

  // Cohort / disparate-impact.
  if (report.disparities.length > 0) {
    L.push('Sub-group (disparate-impact vs overall):')
    for (const d of report.disparities) {
      const flag = d.flagged ? '  ⚠ FLAGGED' : ''
      const supp = d.nReal === 0 ? ' [synthetic — not gated]' : ''
      L.push(
        `  • ${d.slice.padEnd(22)} n=${String(d.n).padStart(3)} ` +
          `exact=${pct(d.exactAgreement).padStart(6)} (Δ${signed(d.exactDelta)}) ` +
          `QWK=${d.qwk.toFixed(3)} (Δ${signed(d.qwkDelta)})${flag}${supp}`,
      )
    }
    L.push('')
  }

  // Band confusion matrix.
  L.push('Grade-band confusion (rows=examiner, cols=predicted):')
  const bands = report.bandConfusion.bands
  L.push('            ' + bands.map((b) => b.padStart(11)).join(''))
  report.bandConfusion.matrix.forEach((row, i) => {
    L.push(`  ${bands[i].padEnd(10)}` + row.map((v) => String(v).padStart(11)).join(''))
  })
  L.push('')

  if (report.stability) {
    L.push(
      `Test-retest (${report.stability.runs} runs): ` +
        `instability=${pct(report.stability.gradeInstabilityRate)} ` +
        `meanSpread=${report.stability.meanGradeSpread.toFixed(2)} ` +
        `maxSpread=${report.stability.maxGradeSpread}`,
    )
    L.push('')
  }

  // Boundary provenance (cross-board validity caveat — doc 06 §C).
  const proxy = report.rows.filter((r) => r.boundarySource === 'aqa-5yr-average-proxy').length
  const rejected = report.rows.filter((r) => r.boundarySource === 'llm-rejected').length
  L.push(
    `Boundary provenance: ${proxy}/${report.rows.length} cases scored via AQA ` +
      `cross-board PROXY boundaries (validity caveat — doc 06 §C).` +
      (rejected > 0 ? ` ${rejected} LLM responses rejected (scored U).` : ''),
  )
  L.push('')

  for (const w of report.warnings) L.push(`  ⚠ ${w}`)
  if (report.warnings.length > 0) L.push('')

  if (report.passed) {
    L.push(
      report.certifiable
        ? 'RESULT: PASS ✅  (certifiable accuracy result)'
        : 'RESULT: PASS ✅  (MECHANICS CHECK ONLY — NOT a certified accuracy figure)',
    )
  } else {
    L.push('RESULT: FAIL ❌')
    for (const f of report.failures) L.push(`  - ${f}`)
  }
  L.push('══════════════════════════════════════════════════════════════════════')
  return L.join('\n')
}

// ─── vitest entrypoint (offline, deterministic, fails below threshold) ────────

describe('EU AI Act Art.15 — marking accuracy eval', () => {
  it('meets thresholds + integrity gate (per board, cohort, overall)', async () => {
    const adapter = resolveAdapter()
    const report = await runEval(adapter)
    // Printed to stdout so it doubles as the human/CI report.
    console.log(formatReport(report))

    // Hard integrity assertion: a synthetic-only or boundary-only run must
    // NEVER be reported as a certified accuracy result.
    if (!report.certifiable) {
      expect(
        report.syntheticOnlyBoards.length > 0 || !report.evaluatesLlm,
        'non-certifiable run must surface a suppression/boundary banner',
      ).toBe(true)
    }

    expect(report.passed, report.failures.join('; ')).toBe(true)
  })
})

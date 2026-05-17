// ─── Synthetic fixture seeder (offline, no network) ──────────────────────────
//
// Rebuilds the EXACT production prompt (`buildMarkingPrompt`) for a fixed list
// of SYNTHETIC dataset cases and writes a correctly-keyed, hand-authored RAW
// model response for each into evals/fixtures/<key>.json.
//
// These fixtures let the `llm` adapter run end-to-end OFFLINE in CI. They are
// hand-authored well-formed responses to the production JSON contract — they do
// NOT represent real model output and CANNOT certify accuracy (see
// evals/datasets/REAL-DATA-PROTOCOL.md). Wrapped in a vitest `it()` only so it
// runs under the project's TS/ESM/alias setup without `tsx`.
//
//   node_modules/.bin/vitest run --config evals/fixtures/seed.config.ts --disableConsoleIntercept
// ────────────────────────────────────────────────────────────────────────────

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { it } from 'vitest'

import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { getMarkScheme } from '@/lib/marking/mark-schemes'

import { fixtureKey, EVAL_MODEL } from '../adapters/llm-marker'
import { parseJsonl } from '../run'
import type { GoldStandardCase } from '../types'

interface AuthoredResponse {
  aoScores: Array<{
    id: string
    label: string
    marks: number
    maxMarks: number
    band: string
    justification: string
    evidence: string[]
  }>
  strengths: Array<{ point: string; quote: string }>
  improvements: Array<{ point: string; suggestion: string }>
  nextStepsToNextGrade: string[]
  summary: string
}

/**
 * Hand-authored AO marks per synthetic case id. Chosen so `generateFeedback` →
 * `predictGrade` yields the SAME grade as the case's gold `examinerGrade`
 * (these fixtures must let the offline `llm` mechanics run green). AO ids/maxes
 * mirror the real scheme for each question.
 */
const AUTHORED: Record<
  string,
  { aoMarks: Array<{ id: string; maxMarks: number; marks: number; band: string }> }
> = {
  // AQA Lit P1 Section A — target Grade 9 (31/34 = 91.2%).
  'aqa-lit-p1-secA-syn-01': {
    aoMarks: [
      { id: 'AO1', maxMarks: 12, marks: 11, band: 'Level 6' },
      { id: 'AO2', maxMarks: 12, marks: 11, band: 'Level 6' },
      { id: 'AO3', maxMarks: 6, marks: 5, band: 'Level 3' },
      { id: 'AO4', maxMarks: 4, marks: 4, band: 'High' },
    ],
  },
  // AQA Lang P1 Q2 — target Grade 6 (5/8 = 62.5%).
  'aqa-lang-p1-q2-syn-03': {
    aoMarks: [{ id: 'AO2', maxMarks: 8, marks: 5, band: 'Level 3' }],
  },
  // Edexcel Lang P1 Q4 — target Grade 7 (13/20 = 65%).
  'edexcel-lang-p1-q4-syn-09': {
    aoMarks: [{ id: 'AO4', maxMarks: 20, marks: 13, band: 'Level 3' }],
  },
  // OCR Lit C01 Section B — target Grade 8 (30/40 = 75%).
  'ocr-lit-c01-secB-syn-27': {
    aoMarks: [
      { id: 'AO1', maxMarks: 16, marks: 12, band: 'Level 4' },
      { id: 'AO2', maxMarks: 16, marks: 12, band: 'Level 4' },
      { id: 'AO3', maxMarks: 8, marks: 6, band: 'Level 3' },
    ],
  },
  // Cambridge 0500 P1 Q1f — target Grade 9 (13/15 = 86.7%).
  'cambridge-0500-p1-q1f-syn-20': {
    aoMarks: [{ id: 'R4', maxMarks: 15, marks: 13, band: 'High' }],
  },
}

function evalsDir(): string {
  return dirname(dirname(fileURLToPath(import.meta.url)))
}

function loadSynthetic(): GoldStandardCase[] {
  const p = join(evalsDir(), 'datasets', 'gold-standard.synthetic.jsonl')
  return parseJsonl(readFileSync(p, 'utf8'))
}

function buildAuthoredResponse(
  c: GoldStandardCase,
  spec: (typeof AUTHORED)[string],
): AuthoredResponse {
  return {
    aoScores: spec.aoMarks.map((a) => ({
      id: a.id,
      label: `${a.id} — synthetic`,
      marks: a.marks,
      maxMarks: a.maxMarks,
      band: a.band,
      justification: `[SYNTHETIC FIXTURE] ${a.id} placed in ${a.band}; mark reflects the band descriptor as illustrated by the placeholder response.`,
      evidence: ['[synthetic quote]'],
    })),
    strengths: [
      { point: '[SYNTHETIC] Clear focus on the question', quote: '[synthetic quote]' },
      { point: '[SYNTHETIC] Relevant supporting references', quote: '[synthetic quote]' },
      { point: '[SYNTHETIC] Coherent argument structure', quote: '[synthetic quote]' },
    ],
    improvements: [
      {
        point: '[SYNTHETIC] Deepen analysis of method',
        suggestion: 'Comment on why the writer made specific choices, not just what they are.',
      },
      {
        point: '[SYNTHETIC] Vary supporting evidence',
        suggestion: 'Bring in a wider range of precise references across the text.',
      },
      {
        point: '[SYNTHETIC] Sharpen the conceptual line of argument',
        suggestion: 'Open each paragraph with an idea-led point rather than a feature.',
      },
    ],
    nextStepsToNextGrade: [
      'Develop a more conceptual thesis sustained across the response.',
      'Integrate precise references more fluently into analysis.',
    ],
    summary: `[SYNTHETIC FIXTURE] An illustrative response for case ${c.id}; marks placed to exercise the offline LLM adapter pipeline — NOT real model output and NOT an accuracy claim.`,
  }
}

it('seed synthetic LLM fixtures (offline, no network)', () => {
  const dir = join(evalsDir(), 'fixtures')
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

  const cases = new Map(loadSynthetic().map((c) => [c.id, c]))
  let written = 0

  for (const [caseId, spec] of Object.entries(AUTHORED)) {
    const c = cases.get(caseId)
    if (!c) throw new Error(`seed: synthetic case "${caseId}" not found`)
    const scheme = getMarkScheme(c.markSchemeId)
    if (!scheme) throw new Error(`seed: unknown scheme "${c.markSchemeId}"`)
    const question = scheme.questions.find(
      (q) =>
        q.id.toLowerCase() === c.question.trim().toLowerCase() ||
        q.questionType.toLowerCase() === c.question.trim().toLowerCase(),
    )
    if (!question) throw new Error(`seed: question "${c.question}" not in "${c.markSchemeId}"`)

    const prompt = buildMarkingPrompt({
      scheme,
      questionId: question.id,
      questionText: `[SYNTHETIC QUESTION] ${question.taskDescription}`,
      essay: c.studentAnswer,
      studiedText: c.studiedText,
    })

    const key = fixtureKey({
      model: EVAL_MODEL,
      systemPrompt: prompt.systemPrompt,
      userMessage: prompt.userMessage,
      markSchemeId: c.markSchemeId,
      questionId: question.id,
      caseId: c.id,
    })

    const fixture = {
      v: 1 as const,
      key,
      model: EVAL_MODEL,
      caseId: c.id,
      markSchemeId: c.markSchemeId,
      questionId: question.id,
      source: 'synthetic-authored' as const,
      rawResponseText: JSON.stringify(buildAuthoredResponse(c, spec)),
    }
    writeFileSync(join(dir, `${key}.json`), JSON.stringify(fixture, null, 2) + '\n', 'utf8')
    written++
    // eslint-disable-next-line no-console
    console.log(`fixture written: ${c.id} -> ${key}.json`)
  }
  // eslint-disable-next-line no-console
  console.log(`SEED_DONE wrote ${written} synthetic fixtures`)
})

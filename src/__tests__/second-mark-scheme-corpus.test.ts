import { describe, it, expect } from 'vitest'
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import {
  formatGeneralGuidance,
  formatSchemeForFeedback,
  resolveSchemeTarget,
  type SchemeTarget,
} from '@/lib/marking/essay-feedback'

/**
 * The SECOND mark-scheme corpus, and why there is no longer one.
 *
 * THE DEFECT (19 September 2026). src/data/mark-schemes.ts was a second corpus
 * beside src/lib/marking/mark-schemes/, and it fed /api/essay-feedback, a live
 * AI marking route. An audit of the first corpus fixed AQA Paper 1 coding
 * structure as AO3 (AQA assesses it under AO2, and AO3 is not on Paper 1 at
 * all) and missed the identical defect in the second, because grepping the
 * corpus under audit does not reach a copy under src/data. The second also had
 * Question 4 at 4 marks (it is 20), `// @ts-nocheck` on line 1, and an Edexcel
 * Literature entry of four objectives at 20 marks each, with AO4 named
 * "Comparison". This file pinned that entry as known-wrong rather than invent
 * a correction.
 *
 * 9 OCTOBER 2026. The second corpus is deleted. Essay feedback marks against
 * one question of the verified corpus, with that question's own objectives and
 * tariffs (src/lib/marking/essay-feedback.ts), or gives general feedback with
 * no marks at all. These tests hold that: no second copy can come back, the
 * route reads the one corpus, and what the model is told about a question is
 * that question's own scheme, its verification status included.
 */

const ROOT = process.cwd()

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return name === 'node_modules' ? [] : sourceFiles(path)
    return /\.(ts|tsx)$/.test(name) ? [path] : []
  })
}

function target(schemeId: string, questionId: string): SchemeTarget {
  const t = resolveSchemeTarget(schemeId, questionId)
  if (!t) throw new Error(`${schemeId} has no question ${questionId}`)
  return t
}

function tariffs(schemeId: string, questionId: string): [string, number][] {
  return target(schemeId, questionId).question.assessmentObjectives.map((a) => [a.id, a.maxMarks])
}

// ─── There is one corpus ────────────────────────────────────────────────

describe('there is one mark-scheme corpus', () => {
  it('src/data/mark-schemes.ts is gone', () => {
    expect(existsSync(join(ROOT, 'src/data/mark-schemes.ts'))).toBe(false)
  })

  it('nothing imports it', () => {
    // Static and dynamic imports alike. Written so this file's own source does
    // not match it.
    const importer = new RegExp(`['"](@/data|\\.\\./data|\\./data)/mark-schemes['"]`)
    const files = sourceFiles(join(ROOT, 'src'))
    // An empty walk would find no importer too.
    expect(files.length).toBeGreaterThan(1000)
    const offenders = files
      .filter((f) => importer.test(readFileSync(f, 'utf8')))
      .map((f) => f.slice(ROOT.length + 1))
    expect(offenders).toEqual([])
  })

  it('the essay-feedback route marks through the verified corpus', () => {
    const route = readFileSync(join(ROOT, 'src/app/api/essay-feedback/route.ts'), 'utf8')
    expect(route).toContain("from '@/lib/marking/essay-feedback'")
    expect(route).toMatch(/resolveSchemeTarget\(body\.schemeId, body\.questionId\)/)
    expect(route).toMatch(/normaliseAoScores\(/)
  })
})

// ─── What the second corpus had wrong, held in the one that remains ─────

describe('AQA Language Paper 1', () => {
  it('assesses structure under AO2, and AO3 is not on the paper', () => {
    expect(tariffs('aqa-lang-paper1', 'Q3')).toEqual([['AO2', 8]])
    const ids = MARK_SCHEMES['aqa-lang-paper1'].questions.flatMap((q) =>
      q.assessmentObjectives.map((a) => a.id),
    )
    expect(ids).not.toContain('AO3')
  })

  it('gives Question 4 its real 20 marks', () => {
    // The second corpus recorded 4. A model told the question is worth 4
    // cannot place a response on the 20-mark grid at all.
    expect(tariffs('aqa-lang-paper1', 'Q4')).toEqual([['AO4', 20]])
  })

  it('sums to the 80 marks the paper carries', () => {
    const total = MARK_SCHEMES['aqa-lang-paper1'].questions.reduce((s, q) => s + q.totalMarks, 0)
    expect(total).toBe(80)
  })
})

describe('Edexcel Literature, marked per question', () => {
  // Each question carries its own objectives. The second corpus gave every
  // Edexcel Literature answer AO1 to AO4 at 20 marks each, whichever question
  // it answered, and the inline feedback sent Paper 2 answers to the
  // LANGUAGE paper's objectives.
  it.each([
    ['edexcel-lit-paper1', 'Section A (a)', [['AO2', 20]]],
    [
      'edexcel-lit-paper1',
      'Section A (b)',
      [
        ['AO1', 15],
        ['AO3', 5],
      ],
    ],
    [
      'edexcel-lit-paper1',
      'Section B',
      [
        ['AO1', 16],
        ['AO3', 16],
        ['AO4', 8],
      ],
    ],
    ['edexcel-lit-paper2', 'Section A (a)', [['AO2', 20]]],
    ['edexcel-lit-paper2', 'Section A (b)', [['AO1', 20]]],
    [
      'edexcel-lit-paper2',
      'Section B Part 1',
      [
        ['AO2', 15],
        ['AO3', 5],
      ],
    ],
    [
      'edexcel-lit-paper2',
      'Section B Part 2',
      [
        ['AO1', 8],
        ['AO2', 12],
      ],
    ],
  ] as const)('%s %s carries %j', (schemeId, questionId, expected) => {
    expect(tariffs(schemeId, questionId)).toEqual(expected)
  })

  it('carries AO4 on Paper 1 Section B only, as spelling, punctuation and grammar', () => {
    const ao4 = ['edexcel-lit-paper1', 'edexcel-lit-paper2'].flatMap((id) =>
      MARK_SCHEMES[id].questions.flatMap((q) =>
        q.assessmentObjectives.filter((a) => a.id === 'AO4').map((a) => ({ q: q.id, a })),
      ),
    )
    expect(ao4.map(({ q }) => q)).toEqual(['Section B'])
    expect(ao4[0].a.label).toMatch(/spelling, punctuation and grammar/i)
    expect(ao4[0].a.label).not.toMatch(/compar/i)
  })

  it('tells the model the objectives of that question and no others', () => {
    const prompt = formatSchemeForFeedback(target('edexcel-lit-paper2', 'Section B Part 1'))
    expect(prompt).toContain('Mark these objectives and no others')
    expect(prompt).toContain('The marks for the question total 20.')
    const listed = [...prompt.matchAll(/^(AO\d) - .* - maximum (\d+) marks\./gm)].map((m) => [
      m[1],
      Number(m[2]),
    ])
    expect(listed).toEqual([
      ['AO2', 15],
      ['AO3', 5],
    ])
  })
})

// ─── What the model is told about verification ──────────────────────────

describe('what the model is told', () => {
  it('states that a verified scheme was verified', () => {
    const prompt = formatSchemeForFeedback(target('aqa-lang-paper1', 'Q4'))
    expect(prompt).toContain('VERIFICATION: Verified against')
    expect(prompt).not.toContain('NOT VERIFIED')
    expect(prompt).not.toMatch(/because this scheme is unverified/i)
  })

  it.each([
    ['edexcel-lit-paper2', 'Section A (a)'],
    ['edexcel-lang-paper1', 'Q4'],
    ['aqa-lit-paper1', 'Section A'],
    ['ocr-lang-component01', 'Q5'],
    ['eduqas-lang-comp1', 'B1'],
  ])('warns that %s %s is unverified, and says to disclose it', (schemeId, questionId) => {
    const prompt = formatSchemeForFeedback(target(schemeId, questionId))
    expect(prompt).toContain('NOT VERIFIED')
    expect(prompt).toMatch(/say so in one short sentence in gradeJustification/i)
  })

  it('names no tariff when no scheme matches the question', () => {
    // General feedback: no marks per objective, so no maximum the model could
    // echo back as if it were the board's.
    for (const subject of ['English Literature', 'English Language', null] as const) {
      const guidance = formatGeneralGuidance(subject)
      expect(guidance).toContain('NO MARK SCHEME')
      expect(guidance).toMatch(/Return "aoScores" as an empty array/)
      expect(guidance).not.toMatch(/\d+\s*marks?\b/i)
    }
  })

  it('names Literature AO4 as accuracy in general feedback, not comparison', () => {
    const guidance = formatGeneralGuidance('English Literature')
    expect(guidance).toMatch(/AO4: use a range of vocabulary and sentence structures/)
    expect(guidance).not.toMatch(/AO4: compar/i)
  })
})

// @vitest-environment node
import { describe, it, expect } from 'vitest'

import { allMockExamPapers } from '@/data/mock-exams'
import { mockExamPapers } from '@/data/mock-exams/base'
import { expandedMockExams } from '@/data/mock-exams/index'
import { aqaLitP1Papers } from '@/data/mock-exams/aqa-lit-p1-a'
import { caieMockExams } from '@/data/mock-exams-caie'
import { edexcelMockExams } from '@/data/mock-exams-edexcel'
import { ialMockExams } from '@/data/mock-exams-ial'
import { wjecMockExams } from '@/data/mock-exams-wjec'

/**
 * The AQA Literature Paper 1 mocks students are given are set as AQA sets
 * 8702/1.
 *
 * WHY IT EXISTS (9 October 2026). The site served eight Paper 1 mocks. Three,
 * aqa-lit-p1-01 to 03 from src/data/mock-exams-aqa-lit.ts, were 100 marks in
 * three sections, one a 20-mark comparison essay AQA does not set; they were
 * retired and that bank removed. The five in src/data/mock-exams/
 * aqa-lit-p1-a.ts said 68 marks, Section A said 38 for its one 34-mark
 * question, and Section B was a whole-novel essay with no extract, where AQA
 * prints one. AQA's June 2023 question paper and mark scheme for 8702/1 set
 * 64 marks in 1 hour 45 minutes: Section A 30 and 4 for AO4, Section B 30,
 * each on a printed extract and the whole text, with AO1 12, AO2 12 and AO3 6
 * marked in six levels, and AO4 in Section A only.
 *
 * The extracts and quotations are held to the editions by
 * src/__tests__/aqa-lit-p1-a-quotes-the-real-text.test.ts.
 */

const PAPERS = aqaLitP1Papers.map((p) => p.id)

const LEVELS = [
  'Level 6 (26-30): convincing, critical analysis and exploration',
  'Level 5 (21-25): thoughtful, developed consideration',
  'Level 4 (16-20): clear understanding',
  'Level 3 (11-15): explained, structured comments',
  'Level 2 (6-10): supported, relevant comments',
  'Level 1 (1-5): simple, explicit comments',
]
const WEIGHTING = [
  'AO1: Read, understand and respond - use textual references to support interpretation (12 marks)',
  'AO2: Analyse language, form and structure using subject terminology (12 marks)',
  'AO3: Show understanding of context (6 marks)',
]
const AO4_WEIGHT = 'AO4: SPaG - spelling, punctuation, grammar, vocabulary (4 marks)'
const AO4_GRID = 'AO4: high performance 4 marks, intermediate 2-3, threshold 1'

const paper = (id: string) => aqaLitP1Papers.find((p) => p.id === id)!
const schemeOf = (q: { markScheme?: string[] | Record<string, string[]> }) =>
  Array.isArray(q.markScheme) ? q.markScheme : []

describe('AQA Literature Paper 1 mocks (8702/1)', () => {
  it('are the only 8702/1 papers served, and the copies students are given', () => {
    const served = allMockExamPapers.filter((p) => p.code === '8702/1' || /^aqa-lit-p1/.test(p.id))
    expect(served.map((p) => p.id)).toEqual(PAPERS)
    for (const p of aqaLitP1Papers) expect(allMockExamPapers.find((x) => x.id === p.id)).toBe(p)
  })

  it('share no id with any other paper in any bank', () => {
    const ids = [
      ...mockExamPapers,
      ...wjecMockExams,
      ...edexcelMockExams,
      ...caieMockExams,
      ...expandedMockExams,
      ...ialMockExams,
    ].map((p) => p.id)
    expect(ids.filter((id, i) => ids.indexOf(id) !== i)).toEqual([])
  })

  it.each(PAPERS)('%s is 64 marks in 105 minutes: 34 and 30', (id) => {
    const p = paper(id)
    expect(p.code).toBe('8702/1')
    expect([p.totalMarks, p.totalTimeMinutes]).toEqual([64, 105])
    expect(p.sections.map((s) => s.questions.map((q) => q.marks))).toEqual([[34], [30]])
    expect(p.sections.map((s) => s.totalMarks)).toEqual([34, 30])
    // AQA gives no time per section; the papers must not say it does.
    for (const s of p.sections) expect(s.description).toContain('gives no advice on time')
  })

  it.each(PAPERS)('%s asks AQA’s questions, each on a printed extract', (id) => {
    const [a, b] = paper(id).sections.map((s) => s.questions[0]!)
    expect(a.questionText).toMatch(
      /^Read the following extract from Act \d Scene \d of Macbeth and then answer the question that follows\.\n\n/,
    )
    expect(a.questionText).toMatch(
      /\nStarting with this (?:extract|speech|conversation), [^\n]+\n\nWrite about:\n• [^\n]+ in this extract\n• [^\n]+ in the play as a whole\.\n\n\[30 marks\]\nAO4 \[4 marks\]$/,
    )
    expect(b.questionText).toMatch(
      /^Read the following extract from Chapter \d+(?: \([^)]+\))? of (?:A Christmas Carol|The Strange Case of Dr Jekyll and Mr Hyde) and then answer the question that follows\.\n\nIn this extract, [^\n]+\n\nStarting with this extract, explore how [^\n]+\.\n\nWrite about:\n• [^\n]+ in this extract\n• [^\n]+ in the novel as a whole\.\n\n\[30 marks\]$/,
    )
    expect((a.extract ?? '').length).toBeGreaterThan(600)
    expect((b.extract ?? '').length).toBeGreaterThan(1500)
  })

  it.each(PAPERS)('%s marks with AQA’s weighting and levels, and AO4 in Section A only', (id) => {
    const [a, b] = paper(id).sections.map((s) => s.questions[0]!)
    const ma = schemeOf(a)
    const mb = schemeOf(b)
    expect(ma.slice(0, 4)).toEqual([...WEIGHTING, AO4_WEIGHT])
    expect(mb.slice(0, 3)).toEqual(WEIGHTING)
    expect(ma.filter((l) => /^Level \d/.test(l))).toEqual(LEVELS)
    expect(mb.filter((l) => /^Level \d/.test(l))).toEqual(LEVELS)
    expect(ma[ma.length - 1]).toBe(AO4_GRID)
    expect(mb.some((l) => l.startsWith('AO4'))).toBe(false)
    for (const l of [...ma, ...mb]) expect(l).not.toMatch(/^Top band|\bBand \d/)
    // Each keeps notes of its own on what an answer may draw on.
    expect(ma.filter((l) => / here: /.test(l)).length).toBeGreaterThanOrEqual(2)
    expect(mb.filter((l) => / here: /.test(l)).length).toBeGreaterThanOrEqual(2)
    for (const q of [a, b])
      expect(Object.keys(q.modelAnswers ?? {})).toEqual(['Grade 4-5', 'Grade 6-7', 'Grade 8-9'])
  })
})

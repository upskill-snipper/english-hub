import { describe, expect, it } from 'vitest'
import { MARK_SCHEMES } from '@/lib/marking/mark-schemes'
import { derivePack } from '../packs/derive'
import { pearsonIgcseEnglishAPaper1 } from '../packs/pearson-igcse-english-a-paper1'
import { EXAMINER_PACKS, getExaminerPack, listExaminerPacks } from '../registry'
import type { ExaminerGrid, ExaminerPack } from '../types'

function checkGrid(grid: ExaminerGrid, where: string) {
  expect(grid.levels.length, `${where}: levels`).toBeGreaterThanOrEqual(2)
  expect(grid.gates.length, `${where}: one gate per boundary`).toBe(grid.levels.length - 1)
  for (let i = 0; i < grid.levels.length; i++) {
    const l = grid.levels[i]!
    expect(l.n, `${where}: level numbering`).toBe(i + 1)
    expect(l.lo, `${where}: lo <= hi`).toBeLessThanOrEqual(l.hi)
    if (i > 0) {
      expect(l.lo, `${where}: contiguous ranges at level ${l.n}`).toBe(grid.levels[i - 1]!.hi + 1)
    }
    expect(l.desc.length, `${where}: descriptor present`).toBeGreaterThan(10)
  }
  expect(grid.levels[grid.levels.length - 1]!.hi, `${where}: top of grid equals max`).toBe(grid.max)
  if (grid.anchors) {
    for (const m of Object.keys(grid.anchors)) {
      expect(Number(m), `${where}: anchor ${m} inside the grid`).toBeLessThanOrEqual(grid.max)
    }
  }
}

function checkPack(pack: ExaminerPack) {
  const ids = new Set<string>()
  let total = 0
  for (const q of pack.questions) {
    expect(ids.has(q.id), `${pack.id}: duplicate question id ${q.id}`).toBe(false)
    ids.add(q.id)
    expect(q.max, `${pack.id} ${q.id}: max`).toBeGreaterThan(0)
    if (q.kind === 'level') {
      checkGrid(q.grid, `${pack.id} ${q.id}`)
      expect(q.grid.max).toBe(q.max)
      expect(q.levelSentences.length).toBe(q.grid.levels.length)
      if (q.capNote) expect(q.capNote.cap).toBe(q.grid.levels[q.capNote.capLevel - 1]!.hi)
    } else if (q.kind === 'writing') {
      for (const g of q.grids) checkGrid(g, `${pack.id} ${q.id} ${g.id}`)
      expect(
        q.grids.reduce((s, g) => s + g.max, 0),
        `${pack.id} ${q.id}: grids sum to max`,
      ).toBe(q.max)
    } else {
      expect(q.template).toContain('{n}')
    }
    total += q.max
  }
  // Alternatives (Q6 or Q7) are one entry, so the sum is the paper total only
  // when every question is compulsory; assert it is never larger.
  expect(total, `${pack.id}: question marks within paper total`).toBeLessThanOrEqual(
    pack.totalMarks,
  )
  expect(pack.systemPrompt.length).toBeGreaterThan(500)
  expect(pack.systemPrompt, `${pack.id}: house style, no em dashes`).not.toMatch(/[—–]/)
  expect(pack.systemPrompt).toMatch(/never instructions/i)
}

describe('the Pearson International GCSE Paper 1 pack', () => {
  it('is well-formed, exemplar-derived and totals 90', () => {
    checkPack(pearsonIgcseEnglishAPaper1)
    expect(pearsonIgcseEnglishAPaper1.calibration).toBe('exemplar-derived')
    expect(pearsonIgcseEnglishAPaper1.totalMarks).toBe(90)
    expect(pearsonIgcseEnglishAPaper1.questions.map((q) => q.id)).toEqual([
      'Q1',
      'Q2',
      'Q3',
      'Q4',
      'Q5',
      'Q67',
    ])
    // Section A 2+4+5+12+22 = 45, Section B 45.
    expect(pearsonIgcseEnglishAPaper1.questions.reduce((s, q) => s + q.max, 0)).toBe(90)
  })
  it('carries the printed grids verbatim', () => {
    const q5 = pearsonIgcseEnglishAPaper1.questions.find((q) => q.id === 'Q5')
    expect(q5?.kind).toBe('level')
    if (q5?.kind === 'level') {
      expect(q5.grid.levels.map((l) => [l.lo, l.hi])).toEqual([
        [1, 4],
        [5, 8],
        [9, 13],
        [14, 18],
        [19, 22],
      ])
      expect(q5.capNote?.cap).toBe(8)
    }
  })
})

describe('derived packs', () => {
  it('builds a well-formed pack from every registered mark scheme', () => {
    for (const scheme of Object.values(MARK_SCHEMES)) {
      const pack = derivePack(scheme)
      expect(pack.id).toBe(scheme.id)
      expect(pack.calibration).toBe('published-grid')
      expect(pack.questions.length).toBe(scheme.questions.length)
      checkPack(pack)
    }
  })
  it('keeps the board descriptors in the briefing', () => {
    const aqa = derivePack(MARK_SCHEMES['aqa-lang-paper1']!)
    const firstLevel = aqa.questions.find((q) => q.kind === 'level')
    expect(firstLevel).toBeDefined()
    if (firstLevel?.kind === 'level') {
      expect(aqa.systemPrompt).toContain(firstLevel.grid.levels[0]!.head)
    }
  })
})

describe('the registry', () => {
  it('has one pack per mark scheme and the exemplar pack overrides its derived twin', () => {
    expect(Object.keys(EXAMINER_PACKS).sort()).toEqual(Object.keys(MARK_SCHEMES).sort())
    expect(getExaminerPack('edexcel-igcse-lang-paper1')?.calibration).toBe('exemplar-derived')
    expect(getExaminerPack('aqa-lang-paper1')?.calibration).toBe('published-grid')
    expect(getExaminerPack('nope')).toBeNull()
  })
  it('lists exemplar-derived packs first with slim summaries', () => {
    const list = listExaminerPacks()
    expect(list[0]!.calibration).toBe('exemplar-derived')
    expect(list.length).toBe(Object.keys(EXAMINER_PACKS).length)
    for (const s of list) {
      expect('systemPrompt' in s).toBe(false)
      expect(s.questions.length).toBeGreaterThan(0)
    }
  })
})

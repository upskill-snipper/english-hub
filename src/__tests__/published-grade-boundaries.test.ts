import { describe, it, expect } from 'vitest'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { GRADE_BOUNDARY_REGISTRY } from '@/lib/marking/grade-boundaries'

/**
 * The public grade-boundary pages.
 *
 * These are indexed landing pages aimed at exactly the teachers we want to be
 * found by, and they were wrong.
 *
 *   AQA, June 2024 column, as published: 121 110 99 86 72 54 40 25 10
 *   AQA's own PDF:                       121 111 102 92 82 73 54 35 16
 *
 * Eight of nine grades were wrong; grade 4 said 54 where AQA says 73, so a
 * student reading a boundaries page to plan revision was 19 marks adrift.
 * Edexcel was wrong in every grade, and its page also asserted a 128-mark
 * qualification "64 per paper" when 1EN0 is 160 - Paper 1 out of 64 and
 * Paper 2 out of 96 - with three grade targets computed from that wrong total.
 *
 * Both pages additionally carried June 2023 and June 2025 columns, and Edexcel
 * carried two per-paper tables, none of which was transcribed from anything.
 * The claim sheet forbids invented statistics.
 *
 * The correct figures already existed in src/lib/marking/grade-boundaries,
 * transcribed from the board PDFs with a source URL and retrieval date. The
 * pages now render from that module, so the published page and the grade
 * predictor cannot disagree. These tests keep it that way.
 */

const PAGES = {
  aqa: 'src/app/resources/english-language/aqa/grade-boundaries/page.tsx',
  edexcel: 'src/app/resources/english-language/edexcel/grade-boundaries/page.tsx',
} as const

function page(board: keyof typeof PAGES): string {
  return readFileSync(join(process.cwd(), PAGES[board]), 'utf8')
}

// ─── The fabricated file ────────────────────────────────────────────────

describe('the fabricated boundaries file', () => {
  it('is gone', () => {
    // src/data/grade-boundaries.ts was headed "Data reflects realistic
    // patterns from 2019-2024" - an admission of invention - and gave AQA
    // Language Paper 1 as a 96-mark paper (it is 80) with grade 9 at 86.
    // Nothing imported it, which is the only reason it did no damage.
    expect(existsSync(join(process.cwd(), 'src/data/grade-boundaries.ts'))).toBe(false)
  })
})

// ─── Pages render from the sourced module, not from hardcoded numbers ───

describe('the published boundary pages', () => {
  it.each(Object.keys(PAGES) as (keyof typeof PAGES)[])(
    '%s renders the table from the sourced module',
    (board) => {
      expect(page(board)).toContain(`<GradeBoundaryTable boardId="${board}" />`)
    },
  )

  it.each(Object.keys(PAGES) as (keyof typeof PAGES)[])(
    '%s publishes no series it has not transcribed',
    (board) => {
      const src = page(board)
      const table = GRADE_BOUNDARY_REGISTRY[board]!
      for (const series of ['June 2023', 'June 2025']) {
        if (series === table.series) continue
        // Allow the word inside an explanatory comment, not inside markup.
        const inMarkup = new RegExp(`<th[^>]*>\\s*${series}`, 'i')
        expect(inMarkup.test(src), `${board} still renders a ${series} column`).toBe(false)
      }
    },
  )

  it('no longer claims the Edexcel qualification is 128 marks', () => {
    const src = page('edexcel')
    // 1EN0 is 160: Paper 1 out of 64, Paper 2 out of 96.
    expect(src).not.toContain('/128')
    expect(src).not.toMatch(/is <strong>128<\/strong>/)
    expect(src).toMatch(/<strong>160<\/strong>/)
  })

  it('states no per-paper Edexcel boundary it cannot source', () => {
    const src = page('edexcel')
    expect(src).not.toContain('Component grade boundaries (per paper, out of 64)')
  })
})

// ─── The numbers themselves ─────────────────────────────────────────────

describe('the sourced tables', () => {
  it('holds AQA June 2024 exactly as AQA published it', () => {
    const raw = GRADE_BOUNDARY_REGISTRY.aqa!.thresholds.map((t) => t.rawMark)
    expect(raw).toEqual([121, 111, 102, 92, 82, 73, 54, 35, 16])
  })

  it('holds Edexcel June 2024 exactly as Pearson published it', () => {
    const raw = GRADE_BOUNDARY_REGISTRY.edexcel!.thresholds.map((t) => t.rawMark)
    expect(raw).toEqual([132, 123, 114, 104, 94, 84, 64, 45, 26])
  })

  it('never contains the wrong figures the pages used to publish', () => {
    // The exact sequences that were live. If either reappears, something has
    // copied the old page back over the sourced table.
    const aqaWrong = [121, 110, 99, 86, 72, 54, 40, 25, 10]
    const edexcelWrong = [107, 96, 85, 74, 63, 52, 39, 26, 13]
    expect(GRADE_BOUNDARY_REGISTRY.aqa!.thresholds.map((t) => t.rawMark)).not.toEqual(aqaWrong)
    expect(GRADE_BOUNDARY_REGISTRY.edexcel!.thresholds.map((t) => t.rawMark)).not.toEqual(
      edexcelWrong,
    )
  })

  it('carries a source and a retrieval date for every board it publishes', () => {
    for (const board of Object.keys(PAGES) as (keyof typeof PAGES)[]) {
      const t = GRADE_BOUNDARY_REGISTRY[board]!
      expect(t.sourceUrl, `${board} has no source`).toMatch(/^https:\/\//)
      expect(t.retrievedAt, `${board} has no retrieval date`).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(t.series, `${board} names no series`).toBeTruthy()
    }
  })

  it('keeps every threshold inside its own maximum', () => {
    // The fabricated file put grade 9 at 86 on a paper it called 96 marks and
    // which is really 80. An impossible threshold is the cheapest thing in the
    // world to check for.
    for (const [board, table] of Object.entries(GRADE_BOUNDARY_REGISTRY)) {
      for (const t of table.thresholds) {
        if (t.rawMark === null || t.rawMax === null) continue
        expect(t.rawMark, `${board} grade ${t.grade} exceeds its maximum`).toBeLessThanOrEqual(
          t.rawMax,
        )
        expect(t.rawMark, `${board} grade ${t.grade} is negative`).toBeGreaterThanOrEqual(0)
      }
    }
  })

  it('orders every table from the highest grade down', () => {
    for (const [board, table] of Object.entries(GRADE_BOUNDARY_REGISTRY)) {
      const marks = table.thresholds.map((t) => t.rawMark).filter((m): m is number => m !== null)
      const descending = [...marks].sort((a, b) => b - a)
      expect(marks, `${board} thresholds are not in descending order`).toEqual(descending)
    }
  })
})

// ─── The honesty gate on the component ──────────────────────────────────

describe('the table component', () => {
  const component = readFileSync(
    join(process.cwd(), 'src/components/resources/GradeBoundaryTable.tsx'),
    'utf8',
  )

  it('shows the caveat while the transcription is unchecked', () => {
    // Every table in the registry is still verified:false. Publishing them is
    // right - they are the board's own figures and strictly better than what
    // was there - but the reader has to be told, and given the link.
    expect(component).toContain('!table.verified')
    expect(component).toContain('Check these against the board')
  })

  it('links the official source rather than asking the reader to trust us', () => {
    expect(component).toContain('table.sourceUrl')
  })

  it('skips any grade it could not source instead of inventing one', () => {
    expect(component).toContain('t.rawMark !== null')
  })
})

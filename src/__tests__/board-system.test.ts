import { describe, it, expect } from 'vitest'
import { BOARDS, getBoardConfig } from '@/lib/board/board-config'
import type { ExamBoard } from '@/lib/board/board-config'
import { isForBoard, filterByBoard, isIgcseBoard, isGcseBoard } from '@/lib/board/board-filter'
import { getSetTextsForBoard, textAvailableForBoard, SET_TEXTS, getSetText } from '@/lib/board/set-texts'
import { getGradeSystemForBoard, GRADE_SYSTEMS, GRADE_BOUNDARIES, gradeNineToLetterEquivalent, gradeLetterToNineOneEquivalent, getBoundaryForGrade } from '@/lib/board/grade-boundaries'

// ── board-config.ts ─────────────────────────────────────────────────────────

describe('board-config', () => {
  it('BOARDS has exactly 7 entries', () => {
    expect(BOARDS).toHaveLength(7)
  })

  it('every board has id, name, fullName, shortName, type, description', () => {
    for (const board of BOARDS) {
      expect(board.id).toBeTruthy()
      expect(board.name).toBeTruthy()
      expect(board.fullName).toBeTruthy()
      expect(board.shortName).toBeTruthy()
      expect(board.type).toMatch(/^(gcse|igcse)$/)
      expect(board.description).toBeTruthy()
    }
  })

  it('every board has a unique id', () => {
    const ids = BOARDS.map((b) => b.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('getBoardConfig("aqa") returns the AQA config', () => {
    const config = getBoardConfig('aqa')
    expect(config).not.toBeNull()
    expect(config!.id).toBe('aqa')
    expect(config!.name).toBe('AQA')
    expect(config!.type).toBe('gcse')
  })

  it('getBoardConfig(null) returns null', () => {
    expect(getBoardConfig(null)).toBeNull()
  })

  it('getBoardConfig with an invalid id returns null', () => {
    expect(getBoardConfig('invalid' as ExamBoard)).toBeNull()
  })

  it('getBoardConfig returns correct config for each known board', () => {
    for (const board of BOARDS) {
      const config = getBoardConfig(board.id)
      expect(config).not.toBeNull()
      expect(config!.id).toBe(board.id)
    }
  })
})

// ── board-filter.ts ─────────────────────────────────────────────────────────

describe('board-filter', () => {
  describe('isForBoard', () => {
    it('returns true when userBoard is in contentBoards', () => {
      expect(isForBoard(['aqa'], 'aqa')).toBe(true)
    })

    it('returns false when userBoard is not in contentBoards', () => {
      expect(isForBoard(['aqa'], 'edexcel')).toBe(false)
    })

    it('returns true when userBoard is null (no filter)', () => {
      expect(isForBoard(['aqa'], null)).toBe(true)
    })

    it('returns true when userBoard matches one of several boards', () => {
      expect(isForBoard(['aqa', 'edexcel', 'ocr'], 'ocr')).toBe(true)
    })

    it('returns false for empty contentBoards array', () => {
      expect(isForBoard([], 'aqa')).toBe(false)
    })
  })

  describe('filterByBoard', () => {
    const items = [
      { name: 'A', boards: ['aqa'] as ExamBoard[] },
      { name: 'B', boards: ['edexcel'] as ExamBoard[] },
      { name: 'C', boards: ['aqa', 'edexcel'] as ExamBoard[] },
      { name: 'D' }, // no boards field — should always pass
    ]

    it('filters items to only those matching the user board', () => {
      const result = filterByBoard(items, 'aqa')
      expect(result.map((i) => i.name)).toEqual(['A', 'C', 'D'])
    })

    it('returns all items when userBoard is null', () => {
      const result = filterByBoard(items, null)
      expect(result).toHaveLength(items.length)
    })

    it('includes items without a boards field regardless of filter', () => {
      const result = filterByBoard(items, 'ocr')
      expect(result.map((i) => i.name)).toEqual(['D'])
    })
  })

  describe('isIgcseBoard', () => {
    it('returns true for cambridge-0500', () => {
      expect(isIgcseBoard('cambridge-0500')).toBe(true)
    })

    it('returns true for cambridge-0990', () => {
      expect(isIgcseBoard('cambridge-0990')).toBe(true)
    })

    it('returns true for edexcel-igcse', () => {
      expect(isIgcseBoard('edexcel-igcse')).toBe(true)
    })

    it('returns false for aqa', () => {
      expect(isIgcseBoard('aqa')).toBe(false)
    })

    it('returns false for edexcel (GCSE)', () => {
      expect(isIgcseBoard('edexcel')).toBe(false)
    })

    it('returns false for null', () => {
      expect(isIgcseBoard(null)).toBe(false)
    })
  })

  describe('isGcseBoard', () => {
    it('returns true for aqa', () => {
      expect(isGcseBoard('aqa')).toBe(true)
    })

    it('returns true for edexcel', () => {
      expect(isGcseBoard('edexcel')).toBe(true)
    })

    it('returns true for ocr', () => {
      expect(isGcseBoard('ocr')).toBe(true)
    })

    it('returns true for eduqas', () => {
      expect(isGcseBoard('eduqas')).toBe(true)
    })

    it('returns false for cambridge-0500', () => {
      expect(isGcseBoard('cambridge-0500')).toBe(false)
    })

    it('returns false for edexcel-igcse', () => {
      expect(isGcseBoard('edexcel-igcse')).toBe(false)
    })

    it('returns false for null', () => {
      expect(isGcseBoard(null)).toBe(false)
    })
  })
})

// ── set-texts.ts ────────────────────────────────────────────────────────────

describe('set-texts', () => {
  describe('getSetTextsForBoard', () => {
    it('returns texts for AQA including Macbeth', () => {
      const texts = getSetTextsForBoard('aqa')
      const slugs = texts.map((t) => t.slug)
      expect(slugs).toContain('macbeth')
    })

    it('returns texts for edexcel-igcse including Of Mice and Men', () => {
      const texts = getSetTextsForBoard('edexcel-igcse')
      const slugs = texts.map((t) => t.slug)
      expect(slugs).toContain('of-mice-and-men')
    })

    it('returns empty array for cambridge-0500 (no set texts listed)', () => {
      const texts = getSetTextsForBoard('cambridge-0500')
      expect(texts).toHaveLength(0)
    })

    it('returns all texts when board is null', () => {
      const texts = getSetTextsForBoard(null)
      expect(texts).toEqual(SET_TEXTS)
    })

    it('every returned text for a board actually lists that board', () => {
      const board: ExamBoard = 'ocr'
      const texts = getSetTextsForBoard(board)
      for (const t of texts) {
        expect(t.boards).toContain(board)
      }
    })
  })

  describe('getSetText', () => {
    it('finds macbeth by slug', () => {
      const text = getSetText('macbeth')
      expect(text).toBeDefined()
      expect(text!.title).toBe('Macbeth')
    })

    it('returns undefined for unknown slug', () => {
      expect(getSetText('nonexistent')).toBeUndefined()
    })
  })

  describe('textAvailableForBoard', () => {
    it('returns true for macbeth + aqa', () => {
      expect(textAvailableForBoard('macbeth', 'aqa')).toBe(true)
    })

    it('returns false for of-mice-and-men + aqa', () => {
      expect(textAvailableForBoard('of-mice-and-men', 'aqa')).toBe(false)
    })

    it('returns true for macbeth + null (no board filter)', () => {
      expect(textAvailableForBoard('macbeth', null)).toBe(true)
    })

    it('returns false for nonexistent text regardless of board', () => {
      expect(textAvailableForBoard('nonexistent', 'aqa')).toBe(false)
      expect(textAvailableForBoard('nonexistent', null)).toBe(false)
    })

    it('returns true for of-mice-and-men + edexcel-igcse', () => {
      expect(textAvailableForBoard('of-mice-and-men', 'edexcel-igcse')).toBe(true)
    })
  })

  describe('SET_TEXTS data integrity', () => {
    it('every text has required fields', () => {
      for (const t of SET_TEXTS) {
        expect(t.slug).toBeTruthy()
        expect(t.title).toBeTruthy()
        expect(t.author).toBeTruthy()
        expect(t.category).toBeTruthy()
        expect(t.boards.length).toBeGreaterThan(0)
        expect(t.copyrightStatus).toMatch(/^(public-domain|copyright)$/)
      }
    })

    it('has unique slugs', () => {
      const slugs = SET_TEXTS.map((t) => t.slug)
      expect(new Set(slugs).size).toBe(slugs.length)
    })
  })
})

// ── grade-boundaries.ts ─────────────────────────────────────────────────────

describe('grade-boundaries', () => {
  describe('getGradeSystemForBoard', () => {
    it('returns "9-1" for aqa', () => {
      expect(getGradeSystemForBoard('aqa')).toBe('9-1')
    })

    it('returns "9-1" for edexcel', () => {
      expect(getGradeSystemForBoard('edexcel')).toBe('9-1')
    })

    it('returns "A*-G" for cambridge-0500', () => {
      expect(getGradeSystemForBoard('cambridge-0500')).toBe('A*-G')
    })

    it('returns "9-1" for cambridge-0990', () => {
      expect(getGradeSystemForBoard('cambridge-0990')).toBe('9-1')
    })

    it('returns "9-1" when board is null', () => {
      expect(getGradeSystemForBoard(null)).toBe('9-1')
    })

    it('every board has a grade system defined', () => {
      for (const board of BOARDS) {
        expect(GRADE_SYSTEMS[board.id]).toMatch(/^(9-1|A\*-G)$/)
      }
    })
  })

  describe('GRADE_BOUNDARIES', () => {
    it('every board has grade boundaries defined', () => {
      for (const board of BOARDS) {
        expect(GRADE_BOUNDARIES[board.id]).toBeDefined()
        expect(Object.keys(GRADE_BOUNDARIES[board.id]).length).toBeGreaterThan(0)
      }
    })

    it('9-1 boards have numeric grade keys', () => {
      const nineOneBoards = BOARDS.filter((b) => GRADE_SYSTEMS[b.id] === '9-1')
      for (const board of nineOneBoards) {
        const keys = Object.keys(GRADE_BOUNDARIES[board.id])
        for (const key of keys) {
          expect(key).toMatch(/^[1-9]$/)
        }
      }
    })

    it('A*-G boards have letter grade keys', () => {
      const letterBoards = BOARDS.filter((b) => GRADE_SYSTEMS[b.id] === 'A*-G')
      for (const board of letterBoards) {
        const keys = Object.keys(GRADE_BOUNDARIES[board.id])
        for (const key of keys) {
          expect(key).toMatch(/^(A\*|[A-G])$/)
        }
      }
    })
  })

  describe('gradeNineToLetterEquivalent', () => {
    it('maps 5 to C', () => expect(gradeNineToLetterEquivalent('5')).toBe('C'))
    it('maps 7 to A', () => expect(gradeNineToLetterEquivalent('7')).toBe('A'))
    it('maps 9 to A*', () => expect(gradeNineToLetterEquivalent('9')).toBe('A*'))
  })

  describe('gradeLetterToNineOneEquivalent', () => {
    it('maps A* to 8-9', () => expect(gradeLetterToNineOneEquivalent('A*')).toBe('8-9'))
    it('maps A to 7', () => expect(gradeLetterToNineOneEquivalent('A')).toBe('7'))
    it('maps B to 6', () => expect(gradeLetterToNineOneEquivalent('B')).toBe('6'))
    it('maps C to 4-5', () => expect(gradeLetterToNineOneEquivalent('C')).toBe('4-5'))
    it('maps G to 1', () => expect(gradeLetterToNineOneEquivalent('G')).toBe('1'))
  })

  describe('getBoundaryForGrade', () => {
    it('returns grade 5 boundary for AQA', () => {
      const result = getBoundaryForGrade('aqa', '5')
      expect(result.label).toBe('Grade 5')
      expect(result.percent).toBe(50)
      expect(result.systemNote).toBeUndefined()
    })

    it('returns letter equivalent for cambridge-0500', () => {
      const result = getBoundaryForGrade('cambridge-0500', '5')
      expect(result.label).toBe('Grade C')
      expect(result.percent).toBe(60)
      expect(result.systemNote).toBeDefined()
      expect(result.systemNote).toContain('A*-G')
    })

    it('uses AQA defaults when board is null', () => {
      const result = getBoundaryForGrade(null, '7')
      expect(result.label).toBe('Grade 7')
      expect(result.percent).toBe(70)
    })
  })
})

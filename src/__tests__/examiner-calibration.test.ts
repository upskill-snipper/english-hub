import { describe, it, expect } from 'vitest'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { edexcelIgcseLangPaper1 } from '@/lib/marking/mark-schemes'
import {
  schemeToExamBoard,
  spread,
  formatExaminerExemplar,
} from '@/lib/marking/calibration/examiner-anchors'

describe('schemeToExamBoard', () => {
  it('maps 4EA1 to EDEXCEL_IGCSE', () => {
    expect(schemeToExamBoard('Edexcel IGCSE', 'edexcel-igcse-lang-paper1')).toBe('EDEXCEL_IGCSE')
  })
  it('maps AQA and disambiguates Cambridge variants', () => {
    expect(schemeToExamBoard('AQA', 'aqa-lang-paper1')).toBe('AQA')
    expect(schemeToExamBoard('Cambridge', 'cambridge-0990-paper1')).toBe('CAMBRIDGE_0990')
    expect(schemeToExamBoard('Cambridge', 'cambridge-0500-paper1')).toBe('CAMBRIDGE_0500')
  })
})

describe('spread', () => {
  it('returns endpoints for a range', () => {
    const out = spread([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
    expect(out[0]).toBe(1)
    expect(out[out.length - 1]).toBe(10)
  })
  it('returns all items when fewer than requested', () => {
    expect(spread([1, 2], 4)).toEqual([1, 2])
  })
})

describe('formatExaminerExemplar', () => {
  it('renders mark/max + band + excerpt', () => {
    const line = formatExaminerExemplar(
      {
        student_answer: 'The writer uses a simile to convey tension.',
        teacher_final_mark: 9,
        grade_band: 'Level 4',
        question_type: 'Q4',
        paper: 'Paper 1',
      },
      12,
    )
    expect(line).toContain('Examiner awarded 9/12')
    expect(line).toContain('Level 4')
  })
})

describe('live calibration injection in the marking prompt', () => {
  const base = {
    scheme: edexcelIgcseLangPaper1,
    questionId: 'Q4',
    questionText: 'Analyse how the writer uses language and structure...',
    essay: 'The writer uses a metaphor to...',
  }

  it('injects the LIVE EXAMINER CALIBRATION block when exemplars are supplied', () => {
    const { systemPrompt } = buildMarkingPrompt({
      ...base,
      examinerExemplars: [
        { ref: 'examiner-1', summary: 'Examiner awarded 4/12 (Level 2): "..."' },
        { ref: 'examiner-2', summary: 'Examiner awarded 11/12 (Level 5): "..."' },
      ],
    })
    expect(systemPrompt).toContain('LIVE EXAMINER CALIBRATION')
    expect(systemPrompt).toContain('Examiner awarded 11/12 (Level 5)')
  })

  it('omits the block when no exemplars are supplied', () => {
    const { systemPrompt } = buildMarkingPrompt(base)
    expect(systemPrompt).not.toContain('LIVE EXAMINER CALIBRATION')
  })
})

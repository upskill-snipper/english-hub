import { describe, it, expect } from 'vitest'
import { buildMarkingPrompt } from '@/lib/marking/prompt-builder'
import { getCalibrationAnchor, hasCalibrationPack } from '@/lib/marking/calibration'
import { edexcelIgcseLangPaper1, aqaLangPaper1 } from '@/lib/marking/mark-schemes'

describe('4EA1 calibration anchors', () => {
  it('registers a calibration pack for the 4EA1 Paper 1 scheme', () => {
    expect(hasCalibrationPack(edexcelIgcseLangPaper1.id)).toBe(true)
  })

  it('returns an anchor block for a level-marked question (Q4)', () => {
    const anchor = getCalibrationAnchor(edexcelIgcseLangPaper1.id, 'Q4')
    expect(anchor).toBeTruthy()
    expect(anchor).toContain('STANDARDISATION ANCHORS')
    expect(anchor).toContain('11/12 (Level 5)')
  })

  it('injects the calibration block into the system prompt for 4EA1 Q4', () => {
    const { systemPrompt } = buildMarkingPrompt({
      scheme: edexcelIgcseLangPaper1,
      questionId: 'Q4',
      questionText: 'Analyse how the writer uses language and structure...',
      essay: 'The writer uses a simile to...',
    })
    expect(systemPrompt).toContain('STANDARDISATION ANCHORS')
    // board-accurate persona (was previously hardcoded to AQA)
    expect(systemPrompt).toContain('Edexcel IGCSE')
    expect(systemPrompt).not.toContain('experienced AQA GCSE English examiner')
  })

  it('includes both Q6 and Q7 writing anchors under the shared writing question', () => {
    const anchor = getCalibrationAnchor(edexcelIgcseLangPaper1.id, 'Q6')
    expect(anchor).toBeTruthy()
    expect(anchor).toContain('AO4 27/27 (L5)')
    expect(anchor).toContain('AO5 18/18 (L5)')
  })

  it('does NOT inject a calibration block for schemes without a pack (AQA)', () => {
    expect(hasCalibrationPack(aqaLangPaper1.id)).toBe(false)
    const { systemPrompt } = buildMarkingPrompt({
      scheme: aqaLangPaper1,
      questionId: aqaLangPaper1.questions[0].id,
      questionText: 'Question...',
      essay: 'Answer...',
    })
    expect(systemPrompt).not.toContain('STANDARDISATION ANCHORS')
    // persona still board-accurate for AQA
    expect(systemPrompt).toContain('AQA')
  })
})

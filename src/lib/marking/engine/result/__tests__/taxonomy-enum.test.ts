// ─── Anti-drift guard: tool enum ⇄ taxonomy ⇄ result type (doc 13 §2.1 / R1) ──
// WHY: the §4 learner-model analytics aggregate on a CLOSED 20-value taxonomy.
// The forced-tool `errors[].type` enum, the `MarkingError.type` union, and the
// analytics keys MUST all be the SAME 20 strings. This test fails loudly if a
// taxonomy value is added/removed/renamed, or if the tool enum is ever re-listed
// inline instead of generated from `MARKING_ERROR_TYPES`.
// ─────────────────────────────────────────────────────────────────────────────

import { describe, it, expect } from 'vitest'

import { MARKING_ERROR_TYPES, MARKING_ERROR_SEVERITIES } from '@/lib/marking/engine/error-taxonomy'
import { ieltsAssessmentTool } from '@/lib/marking/engine/ielts/assessment-tool-schema'

describe('taxonomy ⇄ forced-tool enum anti-drift (doc 13 R1)', () => {
  it('pins the closed 20-value taxonomy (7/5/4/4)', () => {
    expect(MARKING_ERROR_TYPES).toHaveLength(20)
    expect([...MARKING_ERROR_TYPES]).toEqual([
      'grammar.subject_verb_agreement',
      'grammar.article',
      'grammar.tense',
      'grammar.preposition',
      'grammar.word_order',
      'grammar.sentence_structure',
      'grammar.punctuation',
      'lexical.word_choice',
      'lexical.collocation',
      'lexical.register',
      'lexical.spelling',
      'lexical.word_formation',
      'discourse.cohesion',
      'discourse.referencing',
      'discourse.paragraphing',
      'discourse.coherence',
      'task.relevance',
      'task.completeness',
      'task.position',
      'task.development',
    ])
  })

  it('forced-tool errors[].type enum is generated FROM the taxonomy (no drift)', () => {
    const props = ieltsAssessmentTool.input_schema.properties
    const errorTypeEnum = props.errors.items.properties.type.enum
    expect(errorTypeEnum).toEqual([...MARKING_ERROR_TYPES])
  })

  it('forced-tool errors[].severity enum is generated FROM the severity constant', () => {
    const props = ieltsAssessmentTool.input_schema.properties
    const severityEnum = props.errors.items.properties.severity.enum
    expect(severityEnum).toEqual([...MARKING_ERROR_SEVERITIES])
  })
})

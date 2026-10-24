import { describe, expect, it } from 'vitest'

import { labelWithoutCode } from './ao-label'

/**
 * An objective's label shown beside its code, without the code twice
 * (./ao-label.ts). Since 24 October 2026 a grid that covers several
 * objectives has one combined code, and its label begins with all of it.
 */
describe('labelWithoutCode', () => {
  it('strips a combined code whole, whatever joins it', () => {
    expect(labelWithoutCode('AO2-AO3', 'AO2-AO3 - Comparison and context, on one grid')).toBe(
      'Comparison and context, on one grid',
    )
    expect(labelWithoutCode('AO1+AO3', 'AO1+AO3 - Response and context, on one grid')).toBe(
      'Response and context, on one grid',
    )
    expect(labelWithoutCode('R1/R2/R5', 'R1/R2/R5: Reading')).toBe('Reading')
  })

  it('strips a single code, in either case, with any separator', () => {
    expect(labelWithoutCode('AO2', 'AO2 - Analyse language, form and structure')).toBe(
      'Analyse language, form and structure',
    )
    expect(labelWithoutCode('AO2', 'ao2: Analyse language')).toBe('Analyse language')
    expect(labelWithoutCode('AO2', 'AO2 – Analyse language')).toBe('Analyse language')
  })

  it('leaves a label that does not begin with a code alone', () => {
    expect(labelWithoutCode('AO1', 'Read, understand and respond')).toBe(
      'Read, understand and respond',
    )
  })

  it('does not take a longer code for a shorter one', () => {
    // Not "2 - Something else": AO12 is stripped whole, as any one leading code is.
    expect(labelWithoutCode('AO1', 'AO12 - Something else')).toBe('Something else')
  })

  it('falls back to one leading code when the model wrote its own label', () => {
    expect(labelWithoutCode('AO1+AO3', 'AO1 - Response')).toBe('Response')
  })

  it('gives an empty string for a label that is only its code', () => {
    expect(labelWithoutCode('AO4', 'AO4')).toBe('')
    expect(labelWithoutCode(undefined, undefined)).toBe('')
  })
})

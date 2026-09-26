import { describe, it, expect } from 'vitest'

import { isQuoteLine, type KeyQuote } from '@/components/study/InteractivePoemViewer'

/**
 * The poem viewer's Quotes overlay marks the lines a key quotation comes from.
 * Until 26 September 2026 it also marked every stanza break, because an empty
 * line is contained in every quotation.
 */
const q = (quote: string): KeyQuote => ({ quote, analysis: '', themes: [] })
const QUOTES = [q('Rage, rage against the dying of the light.'), q('wise men at their end')]

describe('isQuoteLine', () => {
  it('never marks a stanza break', () => {
    expect(isQuoteLine('', QUOTES)).toBe(false)
    expect(isQuoteLine('   ', QUOTES)).toBe(false)
    expect(isQuoteLine(undefined, QUOTES)).toBe(false)
  })

  it('marks a line that is a quotation, or contains one', () => {
    expect(isQuoteLine('Rage, rage against the dying of the light.', QUOTES)).toBe(true)
    expect(isQuoteLine('Though wise men at their end know dark is right,', QUOTES)).toBe(true)
  })

  it('does not mark an unquoted line, and an empty quotation marks nothing', () => {
    expect(isQuoteLine('Old age should burn and rave at close of day;', QUOTES)).toBe(false)
    expect(isQuoteLine('Old age should burn and rave at close of day;', [q(''), q('  ')])).toBe(
      false,
    )
  })
})

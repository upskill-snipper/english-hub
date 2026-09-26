import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { poemLineNumbers } from '@/components/study/InteractivePoemViewer'

/**
 * The poem viewer numbers lines the way a reader does.
 *
 * THE DEFECT, found 26 September 2026. `poem.lines` holds a blank row for each
 * stanza break, and the viewer numbered rows by their index, so each break
 * pushed every later line one number too high: Piano, twelve lines in three
 * stanzas, ran to 14, and its language-device cards cited "Line 14". A student
 * who quotes a line number from the viewer in an exam answer should be quoting
 * the right one.
 */

describe('poemLineNumbers', () => {
  it('does not count stanza breaks as lines', () => {
    const lines = ['one', 'two', '', 'three', '   ', 'four'].map((text) => ({ text }))
    expect(poemLineNumbers(lines)).toEqual([1, 2, null, 3, null, 4])
  })

  it('numbers a poem with no breaks by position', () => {
    expect(poemLineNumbers([{ text: 'a' }, { text: 'b' }])).toEqual([1, 2])
  })

  it('gives a twelve-line poem in three stanzas twelve numbers, not fourteen', () => {
    const stanza = ['x', 'x', 'x', 'x'].map((text) => ({ text }))
    const piano = [...stanza, { text: '' }, ...stanza, { text: '' }, ...stanza]
    const numbers = poemLineNumbers(piano).filter((n) => n !== null)
    expect(numbers.at(-1)).toBe(12)
  })
})

describe('the viewer', () => {
  const src = readFileSync(
    join(process.cwd(), 'src/components/study/InteractivePoemViewer.tsx'),
    'utf8',
  )

  it('shows those numbers in the gutter, the device cards and the line labels', () => {
    // The row index is still what highlighting keys on; only the displayed
    // number changes. These are the three places a number is shown.
    expect(src).toMatch(/isBlank \? '' : lineNumbers\[idx\]/)
    expect(src).toMatch(/Line \{lineNumbers\[d\.lineRef\]\}/)
    expect(src).not.toMatch(/Line \{d\.lineRef \+ 1\}/)
    expect(src).not.toMatch(/isBlank \? '' : idx \+ 1/)
  })
})

// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import {
  InteractivePoemViewer,
  isDeviceNote,
  type PoemData,
} from '@/components/study/InteractivePoemViewer'

/**
 * A language-device card prints the site's own note as a note, not as a
 * quotation.
 *
 * THE DEFECT, found 2 October 2026. The viewer's Language panel printed every
 * example between quotation marks, in italics. On the pages about poems in
 * copyright the example is often the site's note standing in for the poem's
 * words ("[Line 15] a full stop halfway through the line"), and that day the
 * descriptions on other pages were put in square brackets for the same reason
 * ("[Traditional Petrarchan sonnet]"). Every one of them was shown between
 * quotation marks, as if the poet had written it. A student learning
 * quotations from these cards could not tell which were the poem's.
 *
 * WHAT COUNTS AS A NOTE is isDeviceNote in the viewer, the conventions the
 * fair-dealing guards read: an example that opens with a square bracket, or
 * ends "(paraphrase)". a-device-card-cites-the-line-it-quotes.test.tsx uses
 * the same function, so the viewer and the line check cannot disagree about
 * which examples are quotations.
 */

const QUOTE = 'boundless and bare'
const LABELLED = '[Line 2] the sands run on to the edge of sight'
const WHOLE = '[A sonnet with an irregular rhyme scheme]'
const PARAPHRASE = 'The traveller reports what the pedestal says (paraphrase)'

const poem: PoemData = {
  title: 'Ozymandias',
  poet: 'Percy Bysshe Shelley',
  lines: [
    { text: 'I met a traveller from an antique land,' },
    { text: 'Of that colossal Wreck, boundless and bare' },
  ],
  context: '',
  summary: '',
  formAndStructure: '',
  keyQuotes: [],
  languageDevices: [QUOTE, LABELLED, WHOLE, PARAPHRASE].map((example, i) => ({
    device: `Device ${i + 1}`,
    example,
    effect: `Effect ${i + 1}.`,
    lineRef: 1,
  })),
}

describe('a device card', () => {
  const html = renderToStaticMarkup(<InteractivePoemViewer poem={poem} />)

  it('is rendered, with all four examples', () => {
    // The vacuity guard: an example missing from the HTML would pass the checks below.
    for (const e of [QUOTE, LABELLED, WHOLE, PARAPHRASE]) expect(html).toContain(e)
  })

  it('prints a quotation of the poem between quotation marks, in italics', () => {
    expect(html).toContain(`“${QUOTE}”`)
    expect(html).toMatch(new RegExp(`class="[^"]*italic[^"]*"[^>]*>“${QUOTE}`))
  })

  it("prints the site's own note as it is written, without quotation marks", () => {
    for (const note of [LABELLED, WHOLE, PARAPHRASE]) {
      expect(html, note).not.toContain(`“${note}`)
      expect(html, note).toMatch(new RegExp(`class="(?![^"]*italic)[^"]*"[^>]*>${escape(note)}<`))
    }
  })

  it('tells a note from a quotation as the fair-dealing guards do', () => {
    expect(isDeviceNote('[Stanzas 2 to 5: the fishing boats]')).toBe(true)
    expect(isDeviceNote('  [Paraphrase, line 18] a truth')).toBe(true)
    expect(isDeviceNote('Her vanished warmth compared to a winter day (paraphrase)')).toBe(true)
    expect(isDeviceNote('The lone and level sands stretch far away')).toBe(false)
    // A bracket inside a quotation does not make it a note.
    expect(isDeviceNote('Nothing [beside] remains')).toBe(false)
  })
})

function escape(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

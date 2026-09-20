// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { readFileSync } from 'node:fs'
import { execSync } from 'node:child_process'
import { InteractivePoemViewer, type PoemData } from '@/components/study/InteractivePoemViewer'

/**
 * 114,336 words of poem analysis existed and none of it was in the HTML.
 *
 * THE DEFECT (20 September 2026). `InteractivePoemViewer` opened with
 * `useState<Set<AnalysisTab>>(new Set())` - no tab selected - and rendered the
 * analysis panel as `{hasAnyActive && activePanelTab && (...)}`. Nothing
 * selects a tab except a click, so on both the server render and the first
 * client render the five panels were not merely hidden, they were never
 * mounted. The context, the summary, the form-and-structure note, every key
 * quote's analysis and every language device's effect existed only in the
 * component's props.
 *
 * Measured on the live site before the fix: /revision/poetry/power-and-conflict
 * /ozymandias served 748 visible words, almost all of them header, nav and
 * footer, while the page's own data held 2,574 words of analysis. "Romantic-era"
 * and "futility of human power" - both in that page's annotations - appeared
 * zero times in the HTML. Across 63 poem pages the totals were:
 *
 *     context             14,289 words
 *     summary             15,046
 *     formAndStructure    13,348
 *     key-quote analysis  19,254
 *     language effects    14,769   = 76,706 in the five panels
 *     per-line notes      37,630   (click popovers, still unmounted - separate)
 *
 * Googlebot does not click, and no answer engine clicks. These are exactly the
 * long-tail pages - "Ozymandias AQA Power and Conflict analysis" - the site
 * should win, and they were competing with their navigation chrome.
 *
 * THE FIX IS NOT A WALL OF TEXT. Every panel is mounted and all but the
 * selected one carry `hidden`, which is the tabbed-content pattern Google
 * documents and indexes. The page looks and behaves exactly as before: nothing
 * new is shown to a reader, and nothing is shown to a crawler that a reader
 * cannot reach by clicking the tab that is already there.
 *
 * WHY THIS TEST RUNS IN THE `node` ENVIRONMENT, not jsdom. The fix means the
 * panels now render on the server, and `ContextPanel` called
 * `DOMPurify.sanitize` - which needs a DOM and, without one, throws
 * "DOMPurify.sanitize is not a function". Next swallows that into an error
 * boundary, so all 63 pages would have returned 200 with the poem missing and
 * nothing saying why: the exact failure `src/lib/html/sanitise.ts` was written
 * for, reached by a different route. Under jsdom this test would pass while
 * production broke.
 *
 * MUTATIONS RUN, each verified to have altered the file first:
 *   - `{hasAnyActive && activePanelTab && (` restored  -> fails 7 of the 9
 *   - `hidden` dropped from the four unselected panels -> fails
 *   - `sanitiseHtml` swapped back to `DOMPurify.sanitize` -> throws, fails
 */

/** Distinctive strings, so a match cannot come from chrome or a label. */
const CONTEXT_MARK = 'Shelley wrote this in a sonnet competition, ZZQCONTEXT.'
const SUMMARY_MARK = 'A traveller describes a ruined statue, ZZQSUMMARY.'
const FORM_MARK = 'A sonnet with an irregular rhyme scheme, ZZQFORM.'
const QUOTE_MARK = 'The sneer of cold command survives the man, ZZQQUOTE.'
const EFFECT_MARK = 'The plosives enact the shattering, ZZQEFFECT.'

const poem: PoemData = {
  title: 'Ozymandias',
  poet: 'Percy Bysshe Shelley',
  lines: [
    { text: 'I met a traveller from an antique land,' },
    { text: 'Who said: Two vast and trunkless legs of stone' },
  ],
  // Includes the two shapes the server sanitiser has to survive: a formatting
  // tag it keeps, and the callout div that used to carry an inline style.
  context: `<h3>Percy Bysshe Shelley (1792–1822)</h3><p>${CONTEXT_MARK} <em>Ozymandias</em> appeared in 1818.</p><div class="version-note"><strong>Version note:</strong> keep the 1818 text.</div>`,
  summary: SUMMARY_MARK,
  formAndStructure: FORM_MARK,
  keyQuotes: [
    {
      quote: 'The hand that mocked them, and the heart that fed',
      analysis: QUOTE_MARK,
      themes: ['Power'],
    },
  ],
  languageDevices: [
    {
      device: 'Plosive alliteration',
      example: 'boundless and bare',
      effect: EFFECT_MARK,
      lineRef: 2,
    },
  ],
}

const MARKS = [CONTEXT_MARK, SUMMARY_MARK, FORM_MARK, QUOTE_MARK, EFFECT_MARK]

describe('a crawler sees the poem analysis without clicking', () => {
  const html = renderToStaticMarkup(<InteractivePoemViewer poem={poem} />)

  it('renders at all on the server', () => {
    // Vacuity guard, and the DOMPurify landmine: if sanitise throws, the line
    // above never returns and every assertion below is meaningless.
    expect(html).toContain('Ozymandias')
    expect(html.length).toBeGreaterThan(1000)
  })

  it.each(MARKS)('the HTML carries %s', (mark) => {
    expect(html, 'an unselected panel was not mounted').toContain(mark)
  })

  it('and the authored callout survives the server sanitiser', () => {
    // `div` is not a formatting tag; it had to be added to the allowlist in
    // src/lib/html/sanitise.ts or the client and server rendered different
    // trees on the one poem that uses it.
    expect(html).toContain('class="version-note"')
    expect(html).toContain('<em>Ozymandias</em>')
  })

  it('but nothing new is shown to a reader', () => {
    // The counterweight. Rendering all five panels VISIBLY would satisfy every
    // assertion above and produce exactly the wall of text this site has
    // already been told it does not want. No tab is selected here, so all
    // five must be hidden.
    const panels = html.split('<div hidden=""').length - 1
    expect(panels, 'the panels are not hidden when no tab is selected').toBeGreaterThanOrEqual(5)
    for (const mark of MARKS) {
      const before = html.slice(0, html.indexOf(mark))
      expect(
        before.lastIndexOf('<div hidden=""') > before.lastIndexOf('<div class="px-4 pb-5'),
        `${mark} is rendered outside a hidden panel`,
      ).toBe(true)
    }
  })

  it('on every poem page there is, not just this fixture', () => {
    // The component is only worth guarding if the pages still use it.
    const pages = execSync('git ls-files src/app', { encoding: 'utf8' })
      .split('\n')
      .filter((f) => f.endsWith('page.tsx'))
      .filter((f) => readFileSync(f, 'utf8').includes('InteractivePoemViewer'))
    expect(pages.length).toBeGreaterThan(60)
  })
})

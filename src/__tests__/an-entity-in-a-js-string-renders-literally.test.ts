import { describe, it, expect } from 'vitest'
import { findEntityStrings, scanSource } from '../../scripts/check-entities-in-js-strings.mjs'

/**
 * Students were reading "The Witches&apos; Opening".
 *
 * FOUND 26 September 2026, on the live site. Every URL in the sitemap was
 * fetched and its HTML searched for an entity that had been escaped a second
 * time (`&amp;apos;` is how a literal "&apos;" is served): 563 of them across
 * 70 pages, 52 on Macbeth Act 1 alone. That count is a floor. Pages such as
 * AQA Paper 2 keep their tr() strings inside accordions that render nothing
 * until clicked, so the served HTML showed none and a student still saw them.
 *
 * THE MECHANISM. React decodes an entity written in JSX markup, and nowhere
 * else, because anywhere else it is only a string:
 *
 *   <h3>The Witches&apos; Opening</h3>          The Witches' Opening
 *   <h3>{tr(`The Witches&apos; Opening`)}</h3>  The Witches&apos; Opening
 *
 * The copy was written as JSX text and later wrapped in the local tr() helper
 * for Arabic, which moved 677 strings from a position that decodes to one that
 * does not. Nothing failed: the page built, the source read correctly, and the
 * Arabic lookup still matched because its content.ts key carried the same
 * entity. Checked against Next's own compiler (SWC) before this was written:
 * JSX text and a quoted attribute come out decoded, `{'...'}` does not.
 *
 * THE FIX was at the source. 1,482 strings in 165 files now hold the
 * characters themselves, and each tr() literal was changed together with the
 * content.ts `en` that keys its Arabic, so all 4,442 call sites on the 93
 * local-helper pages resolve to the same translation as before.
 *
 * WHAT THIS ASSERTS. No JS string carrying a real entity sits where it is
 * rendered as text: a tr()/_tr()/t() argument, a JSX child or attribute
 * expression, a bilingual `en:`/`ar:` value, page metadata, or a data field
 * or array item the same file renders as `{x.field}` / `.map((x) => {x})`.
 * HTML stays legitimate wherever it is used as HTML: email builders, print
 * windows, `dangerouslySetInnerHTML`, the course modules. Those are not in any
 * of these positions and are not reported.
 *
 * WHAT IT DOES NOT SEE. Data imported from another module and rendered there,
 * and a string built at runtime. The sitemap crawl above is the check for
 * those; the scanner is the check that runs on every push.
 *
 * MUTATIONS RUN against this file on 26 September 2026, each confirmed to have
 * changed the source before the run: `&apos;` put back into one tr() literal
 * on Macbeth Act 1 (fails, naming the line); `&rsquo;` put back into one
 * Rebecca `detail` field (fails, "data field detail"); the scanner pointed at
 * the unfixed tree (1,478 offenders in 164 files).
 */

describe('the scanner is actually looking', () => {
  it('parsed the source tree and saw the tr() calls, not nothing', () => {
    // The vacuity guard. If the walker's root or file filter broke, every
    // assertion below would pass on an empty list.
    const { files, helperCalls } = findEntityStrings()
    expect(files).toBeGreaterThan(3000)
    expect(helperCalls).toBeGreaterThan(3000)
  })

  it('reports each broken position and none of the correct ones', () => {
    // The fixture is the whole rule set in one file. Every line that renders
    // an entity literally must be reported, and every line React or the
    // compiler decodes must not be, or the guard is either blind or noisy.
    const source = [
      `const THEMES = [{ detail: 'The narrator&rsquo;s struggle', body: '<p>Owen&apos;s</p>' }]`,
      `const FEATURES = ['against your exam board&#39;s mark scheme']`,
      `const STRINGS = { s1: { en: 'Witches&apos; Opening', ar: '' } }`,
      `export const metadata = { title: 'Act 1 &amp; Act 2' }`,
      `export function Page() {`,
      `  return (`,
      `    <div title="Q1 &amp; Q2">`,
      `      <h3>The Witches&apos; Opening</h3>`,
      `      <h3>{tr(\`Act 1 - Exposition &amp; Temptation\`)}</h3>`,
      `      <p>{'Q3 &amp; Q4'}</p>`,
      `      <p>{open ? 'Macbeth&rsquo;s choice' : null}</p>`,
      `      <img alt={'Lady Macbeth&apos;s letter'} />`,
      `      {THEMES.map((t) => <p key={t.detail}>{t.detail}</p>)}`,
      `      {THEMES.map((t) => <p dangerouslySetInnerHTML={{ __html: t.body }} />)}`,
      `      {FEATURES.map((f) => <li key={f}>{f}</li>)}`,
      `      <div dangerouslySetInnerHTML={{ __html: 'Fish &amp; chips' }} />`,
      `    </div>`,
      `  )`,
      `}`,
    ].join('\n')
    const found = scanSource('fixture.tsx', source).map(
      (o: { line: number; why: string }) => `${o.line} ${o.why}`,
    )
    expect(found).toEqual([
      '1 data field detail, rendered as {x.detail}',
      '2 array item rendered by .map()',
      '3 bilingual en: value',
      '4 page metadata',
      '9 argument of tr()',
      '10 JSX child {...}',
      '11 JSX child {...}',
      '12 JSX attribute alt={...}',
    ])
  })

  it('ignores an ampersand that is not an entity', () => {
    // "&wla;" is in one machine-translated Arabic string. It is garbage, it
    // renders the same either way, and it is a different defect.
    expect(scanSource('x.tsx', `const a = <p>{tr('R&D &wla; & more')}</p>`)).toEqual([])
  })
})

describe('no rendered JS string carries an HTML entity', () => {
  it('finds none anywhere under src', () => {
    const { offenders } = findEntityStrings()
    const lines = offenders.map(
      (o: { file: string; line: number; why: string; entities: string[] }) =>
        `${o.file}:${o.line} [${o.why}] ${o.entities.join(' ')}`,
    )
    expect(
      lines,
      'write the character itself (’ “ ” & …), not the entity. If it is a tr() literal, ' +
        'change the matching `en:` in the sibling content.ts to the identical string, or the ' +
        'Arabic stops resolving. List them with: node scripts/check-entities-in-js-strings.mjs',
    ).toEqual([])
  })
})

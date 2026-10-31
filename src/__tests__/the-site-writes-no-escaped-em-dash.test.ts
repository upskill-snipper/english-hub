import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import {
  findEscapedEmDashes,
  rewriteEscapedEmDashes,
  sourceFiles,
} from '../../scripts/find-escaped-em-dashes.mjs'

/**
 * The site's own prose carries no em dash, written as one or as an escape.
 *
 * THE DEFECT (31 October 2026). House style has no em dashes in the site's
 * own voice (CLAUDE.md), and scripts/check-copy-quality.mjs looked for them,
 * but only for the character itself. Written as an HTML entity in JSX, or as
 * a JavaScript escape in a string, a dash renders exactly the same and
 * matches nothing: 4,668 of them stood in the site's own prose in 273 files
 * under src, in headings ("Grade 9 - Exceptional" had one), study guides,
 * model answers and the analysis on every set-text page.
 *
 * THE RULE. An escaped em dash in src is the site's own prose, and becomes a
 * spaced hyphen, unless it is an author's (inside quotation marks, or in a
 * quotation field such as `quote:`), one a page discusses ("Dash (...)"),
 * part of a title that has one (Frost's "Out, Out"), or a value the code uses
 * (a `split` on the dash). scripts/find-escaped-em-dashes.mjs decides which,
 * and `--apply` rewrites any that come back.
 */

type Dash = { kind: string; line: number; token: string }

// The fixture source text, with the escapes written as they are in the
// files: each `\\u2014` here is the six characters of a JavaScript escape.
const FIXTURE = [
  `const A = { analysis: 'Orwell places it last \\u2014 the strongest place.' }`,
  `const B = { quote: 'The thing is \\u2014 fear can\\u2019t hurt you' }`,
  `const C = 'He warned: \\u201cwait \\u2014 no\\u201d'`,
  `const D = who.split('\\u2014')[0]`,
  `export function P() {`,
  `  return (`,
  `    <div>`,
  `      <h3>Grade 9 &mdash; Exceptional</h3>`,
  `      <p>&ldquo;Out, Out&mdash;&rdquo; was published in 1916.</p>`,
  `      <p>Dash (&mdash;): an interruption.</p>`,
  `      <p>{speaker} &mdash; {act}</p>`,
  `      <p>{tr(\`One paper&mdash;two sections\`)}</p>`,
  `    </div>`,
  `  )`,
  `}`,
].join('\n')

describe('the escaped em dash classifier', () => {
  it('tells the site’s prose from an author’s dash, a title, a mention and code', () => {
    const found = (findEscapedEmDashes(FIXTURE, 'fixture.tsx') as Dash[]).map(
      (d) => `${d.line} ${d.kind}`,
    )
    expect(found).toEqual([
      '1 prose',
      '2 quotation',
      '3 quotation',
      '4 code',
      '8 prose',
      '9 title',
      '10 mention',
      '11 prose',
      '12 prose',
    ])
  })

  it('writes a spaced hyphen, adding only the spaces that are missing', () => {
    const { source, replaced } = rewriteEscapedEmDashes(FIXTURE, 'fixture.tsx')
    expect(replaced).toBe(4)
    expect(source).toContain(`'Orwell places it last - the strongest place.'`)
    expect(source).toContain('<h3>Grade 9 - Exceptional</h3>')
    expect(source).toContain('<p>{speaker} - {act}</p>')
    expect(source).toContain('{tr(`One paper - two sections`)}')
    // The author's, the title, the mention and the code value are untouched.
    expect(source).toContain(`'The thing is \\u2014 fear can\\u2019t hurt you'`)
    expect(source).toContain('&ldquo;Out, Out&mdash;&rdquo;')
    expect(source).toContain('Dash (&mdash;)')
    expect(source).toContain(`who.split('\\u2014')`)
  })
})

describe('src', () => {
  it('has no escaped em dash left in the site’s own prose', () => {
    const files = sourceFiles()
    expect(files.length, 'the file list is empty, so this would pass vacuously').toBeGreaterThan(
      2000,
    )
    const prose: string[] = []
    for (const f of files) {
      const src = readFileSync(f, 'utf8')
      if (!/&mdash;|&#0*8212;|&#x0*2014;|\\u2014|\\u\{0*2014\}/i.test(src)) continue
      for (const d of findEscapedEmDashes(src, f) as Dash[])
        if (d.kind === 'prose') prose.push(`${f}:${d.line} ${d.token}`)
    }
    expect(
      prose,
      'house style is a spaced hyphen ( - ) in the site’s own prose. Rewrite them with: ' +
        'node scripts/find-escaped-em-dashes.mjs --apply',
    ).toEqual([])
  })
})

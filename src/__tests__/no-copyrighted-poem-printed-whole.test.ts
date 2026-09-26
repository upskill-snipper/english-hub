// @vitest-environment node
import { describe, it, expect } from 'vitest'
import ts from 'typescript'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

import { FAIR_DEALING } from '@/lib/study-guides/fair-dealing'
import { wordCount } from '@/lib/study-guides/validate'
import { POETS, POEM_WORDS, inCopyright } from './helpers/poets'

/**
 * No page prints a copyrighted poem, whole or in bulk, line by line.
 *
 * WHY. On 25 September 2026, after a sweep had cut every quotation on the site
 * to 14 words or fewer, fifteen AQA anthology poems in UK copyright (Duffy,
 * Armitage, Heaney, Hughes, Agard, Garland, Weir, Dharker, Dooley, Day-Lewis,
 * Waterhouse, Sheers) were still printed IN FULL in the annotated poem viewer,
 * and two more in large part. Every line passed the per-quotation test,
 * because a line of verse is short; together the lines were the poem. That is
 * reproduction, not fair dealing, and no per-quotation rule can see it.
 *
 * So this measures the total. For a poet in copyright, the verbatim words in a
 * page's PoemData `lines` array (plain line text, and the words inside an
 * "[Extract: ...]" placeholder) may not exceed FAIR_DEALING.poemShare of the
 * poem. Lines paraphrased in the site's own words ("[Paraphrase] ...", the
 * form the Emigree page set) and bracketed pointers ("[See anthology ...]")
 * are not the poem's words.
 *
 * FAIL-CLOSED. Every poet with a line-by-line page must be listed in POETS with
 * a death year, or the test fails: a new poem page cannot pass by being
 * unknown. UK copyright lasts until the end of the 70th year after the poet's
 * death, so in 2026 a poet who died in 1956 or later is in copyright. POETS and
 * POEM_WORDS live in helpers/poets.ts since 26 September 2026, shared with
 * no-poem-quoted-beyond-fair-dealing.test.ts.
 */

function files(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) files(p, out)
    else if (/\.tsx?$/.test(e.name)) out.push(p.split('\\').join('/'))
  }
  return out
}

type Poem = { file: string; title: string; poet: string; verbatim: number; lines: number }

/** Every object in src/app with a `poet` and a `lines` array: a PoemData. */
function poems(): Poem[] {
  const out: Poem[] = []
  for (const file of files('src/app')) {
    const src = readFileSync(file, 'utf8')
    if (!/\blines\s*:\s*\[/.test(src) || !/\bpoet\s*:/.test(src)) continue
    const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
    const str = (n: ts.Node | undefined) =>
      n && ts.isPropertyAssignment(n) && ts.isStringLiteralLike(n.initializer)
        ? n.initializer.text
        : null
    const visit = (n: ts.Node) => {
      if (ts.isObjectLiteralExpression(n)) {
        const get = (k: string) => n.properties.find((p) => p.name?.getText(sf) === k)
        const lines = get('lines')
        const poet = str(get('poet'))
        if (
          poet &&
          lines &&
          ts.isPropertyAssignment(lines) &&
          ts.isArrayLiteralExpression(lines.initializer)
        ) {
          let verbatim = 0
          let count = 0
          for (const el of lines.initializer.elements) {
            if (!ts.isObjectLiteralExpression(el)) continue
            const text =
              str(el.properties.find((p) => p.name?.getText(sf) === 'text'))?.trim() ?? ''
            if (!text) continue
            count++
            const extract = /^\[Extract:\s*([^\]]*)\]/i.exec(text)
            if (extract) verbatim += wordCount(extract[1])
            else if (!text.startsWith('[')) verbatim += wordCount(text)
          }
          out.push({ file, title: str(get('title')) ?? '?', poet, verbatim, lines: count })
        }
      }
      ts.forEachChild(n, visit)
    }
    visit(sf)
  }
  return out
}

describe('no copyrighted poem is printed whole', () => {
  const all = poems()

  it('finds the poem pages it guards', () => {
    // A floor, so a parser that stopped finding them cannot pass by checking
    // none: there were 63 on 25 September 2026.
    expect(all.length).toBeGreaterThanOrEqual(50)
  })

  it('knows every poet, so none is judged by being unknown', () => {
    const unknown = [...new Set(all.map((p) => p.poet))].filter((p) => !(p in POETS))
    expect(unknown, 'add each to POETS with a year of death, or null if living').toEqual([])
  })

  it('prints no more than a share of any poem still in copyright', () => {
    const over = all
      .filter((p) => inCopyright(p.poet))
      .map((p) => {
        const words = POEM_WORDS[p.title]
        const cap = words ? Math.floor(words * FAIR_DEALING.poemShare) : 20
        return { ...p, cap }
      })
      .filter((p) => p.verbatim > p.cap)
      .map(
        (p) => `${p.file}: ${p.title} (${p.poet}) prints ${p.verbatim} of its words, cap ${p.cap}`,
      )
    expect(over).toEqual([])
  })

  it('still counts a public-domain poem printed whole, so the count is real', () => {
    // The reverse test: an out-of-copyright poem printed in full must register
    // as many words, or a broken counter would pass everything above.
    const duchess = all.find((p) => p.title === 'My Last Duchess')
    expect(duchess?.verbatim).toBeGreaterThan(300)
  })
})

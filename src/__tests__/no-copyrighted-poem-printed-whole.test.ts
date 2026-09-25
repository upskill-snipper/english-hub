// @vitest-environment node
import { describe, it, expect } from 'vitest'
import ts from 'typescript'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

import { FAIR_DEALING } from '@/lib/study-guides/fair-dealing'
import { wordCount } from '@/lib/study-guides/validate'

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
 * FAIL-CLOSED. Every poet with a line-by-line page must be listed below with a
 * death year, or the test fails: a new poem page cannot pass by being unknown.
 * UK copyright lasts until the end of the 70th year after the poet's death, so
 * in 2026 a poet who died in 1956 or later is in copyright.
 */

/** Year of death, or null for a living poet. */
const POETS: Record<string, number | null> = {
  'Alfred Lord Tennyson': 1892,
  'Andrew Waterhouse': 2001,
  'Beatrice Garland': null,
  'C. Day-Lewis': 1972,
  'Carol Ann Duffy': null,
  'Carol Rumens': null,
  'Charles Causley': 2003,
  'Charlotte Mew': 1928,
  'Christina Rossetti': 1894,
  'D.H. Lawrence': 1930,
  'Daljit Nagra': null,
  'Elizabeth Barrett Browning': 1861,
  'Emily Dickinson': 1886,
  'Imtiaz Dharker': null,
  'Jane Weir': null,
  'John Agard': null,
  'John Keats': 1821,
  'Lord Byron': 1824,
  'Maura Dooley': null,
  'Owen Sheers': null,
  'Percy Bysshe Shelley': 1822,
  'Robert Browning': 1889,
  'Rudyard Kipling': 1936,
  'Rupert Brooke': 1915,
  'Seamus Heaney': 2013,
  'Simon Armitage': null,
  'Ted Hughes': 1998,
  'Thomas Hardy': 1928,
  'Wilfred Owen': 1918,
  'William Blake': 1827,
  'William Shakespeare': 1616,
  'William Wordsworth': 1850,
}
const inCopyright = (poet: string) => {
  const died = POETS[poet]
  return died === null || died >= new Date().getFullYear() - 70
}

/**
 * Words in each copyrighted poem, counted on 25 September 2026 from the full
 * text these pages then printed (git history holds it), so the share can be
 * measured after the text is gone. A poem not listed gets a floor of 20 words.
 */
const POEM_WORDS: Record<string, number> = {
  'Before You Were Mine': 375,
  'Checking Out Me History': 269,
  Kamikaze: 224,
  Remains: 201,
  'Bayonet Charge': 192,
  'War Photographer': 187,
  'Storm on the Island': 158,
  Follower: 153,
  'Letters from Yorkshire': 148,
  Poppies: 147,
  Tissue: 141,
  'Walking Away': 137,
  'Climbing My Grandfather': 135,
  'Winter Swans': 130,
  'Mother, any distance': 111,
}

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

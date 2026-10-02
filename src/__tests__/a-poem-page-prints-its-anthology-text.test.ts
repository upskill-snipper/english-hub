// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { createHash } from 'node:crypto'
import ts from 'typescript'

/**
 * A poem page prints the poem its anthology prints: every line, in its
 * stanzas, in its words.
 *
 * THE DEFECT, found 2 October 2026. Five poem pages printed a poem that was not
 * the poem, and nothing checked them, because these poems are not among the
 * texts held in src/data/full-texts, which is all the quotation checks read:
 *  - the IGCSE Cousin Kate page printed 30 of Rossetti's 48 lines, two lines
 *    she did not write and "survey of gold" four times in place of her words,
 *    and its form section described the corrupt shape;
 *  - When We Two Parted (AQA) was missing the first four lines of its last
 *    stanza;
 *  - Exposure (AQA) had a last stanza of seven lines, one of them invented and
 *    four repeated from stanza 6 in place of Owen's lines 37 to 39;
 *  - Neutral Tones (OCR) cut line 4 short and printed no stanza breaks;
 *  - A Wife in London (Eduqas) counted its two part headings as lines, so
 *    every number the viewer showed was one or two too high.
 * The Eduqas Cousin Kate page, compared at the same time, had one line in
 * neither printing ("Cling closest to my neck").
 *
 * A SECOND PASS, the same day, compared the other pages that print a
 * public-domain poem with their anthologies, and 25 more differed. The worst:
 * Porphyria's Lover printed 47 of its 60 lines, seven of them not in
 * Browning's words, and Love's Philosophy printed a different version of the
 * poem from the one AQA prints. Most of the rest mixed editions: Blake's engraved spellings, or
 * "-ed" where the board prints "'d", with punctuation of their own. Their notes
 * and quotations had followed the rows, so they were corrected with them, and
 * each page now says above its rows which printing it follows and what changed.
 *
 * WHAT IT CHECKS. Each page in VERIFIED was compared line by line with the
 * anthology named beside it on 2 October 2026, by its words and its marks of
 * punctuation (the exceptions are noted on the pages). Three wider-reading
 * poems that no board prints are pinned instead to the published edition
 * named beside them, which each page names above its rows. This pins what was
 * verified: the shape of the poem (stanza sizes, with H for a part heading)
 * and a fingerprint of its words, one line at a time, ignoring case,
 * punctuation and dash forms. A dropped, added or changed word or line fails
 * here, and the failure gives the page's new fingerprint.
 *
 * Every page that prints a poem in PoemData rows is either pinned in VERIFIED
 * or named in NOT_PINNED with its reason, and the last test fails on a page
 * that is neither, so a poem page cannot go unchecked by being left out.
 *
 * WHAT TO DO WHEN IT FAILS. Do not copy the new fingerprint in. Check the
 * page against the anthology named in VERIFIED first: if the page is now
 * right, record the new fingerprint and say on the page what changed and why;
 * if not, the page is wrong. A page added to VERIFIED must have been checked
 * against its source the same way.
 */

const ROOT = process.cwd()

type Verified = { page: string; source: string; shape: string; words: string }
const VERIFIED: Verified[] = [
  {
    page: 'src/app/igcse/edexcel/poetry/cousin-kate/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 28',
    shape: '8,8,8,8,8,8',
    words: '1126cdaea9a2a586',
  },
  {
    page: 'src/app/revision/poetry/eduqas/cousin-kate/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (from 2027), p. 6',
    shape: '8,8,8,8,8,8',
    words: '42b86d9a925f1501',
  },
  {
    page: 'src/app/revision/poetry/love-and-relationships/when-we-two-parted/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF)',
    shape: '8,8,8,8',
    words: 'a18e831d53b6cb19',
  },
  {
    page: 'src/app/revision/poetry/power-and-conflict/exposure/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF)',
    shape: '5,5,5,5,5,5,5,5',
    words: '369d803a9d7f74d5',
  },
  {
    page: 'src/app/revision/poetry/ocr/love-and-relationships/neutral-tones/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 10',
    shape: '4,4,4,4',
    words: '9b61e45f46c7372d',
  },
  {
    page: 'src/app/revision/poetry/eduqas/a-wife-in-london/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (2014)',
    shape: 'H,5,5,H,5,5',
    words: 'f4f7cd2a55f6f80d',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/ozymandias/page.tsx',
    source:
      'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 21 (AQA sets it; the IGCSE anthology does not)',
    shape: '14',
    words: 'a2230ac518626b1e',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/the-man-he-killed/page.tsx',
    source:
      'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 27 (Pearson Edexcel sets it at GCSE, not IGCSE)',
    shape: '4,4,4,4,4',
    words: '9195adfa0e5e53b7',
  },
  {
    page: 'src/app/revision/poetry/edexcel/conflict/a-poison-tree/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 24',
    shape: '4,4,4,4',
    words: 'd1f7027d273a6ff8',
  },
  {
    page: 'src/app/revision/poetry/edexcel/conflict/the-destruction-of-sennacherib/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 25',
    shape: '4,4,4,4,4,4',
    words: '6e6d20180ca4abad',
  },
  {
    page: 'src/app/revision/poetry/edexcel/time-and-place/composed-upon-westminster-bridge/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 43',
    shape: '14',
    words: '3bda0273c3a36715',
  },
  {
    page: 'src/app/revision/poetry/edexcel/time-and-place/i-started-early-took-my-dog/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 45',
    shape: '4,4,4,4,4,4',
    words: '98ae88d9a7c93b1d',
  },
  {
    page: 'src/app/revision/poetry/edexcel/time-and-place/london/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 44',
    shape: '4,4,4,4',
    words: 'ad22af45faa6ebea',
  },
  {
    page: 'src/app/revision/poetry/edexcel/time-and-place/to-autumn/page.tsx',
    source: 'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 42',
    shape: '11,11,11',
    words: '45d7a045a900a864',
  },
  {
    page: 'src/app/revision/poetry/eduqas/drummer-hodge/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (from 2027), p. 9',
    shape: '6,6,6',
    words: '3cbc365a2384e354',
  },
  {
    page: 'src/app/revision/poetry/eduqas/dulce-et-decorum-est/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (2014)',
    shape: '8,6,2,12',
    words: '942bff5e6dd349b4',
  },
  {
    page: 'src/app/revision/poetry/eduqas/london/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (2014)',
    shape: '4,4,4,4',
    words: 'ad22af45faa6ebea',
  },
  {
    page: 'src/app/revision/poetry/eduqas/ozymandias/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (2014)',
    shape: '14',
    words: '90d272ee404ece85',
  },
  {
    page: 'src/app/revision/poetry/eduqas/sonnet-43/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (2014)',
    shape: '14',
    words: 'c8eec7791f8314bf',
  },
  {
    page: 'src/app/revision/poetry/eduqas/the-prelude/page.tsx',
    source:
      'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 23 (the AQA extract, not the Eduqas one)',
    shape: '44',
    words: '2e2f1556130c3357',
  },
  {
    page: 'src/app/revision/poetry/eduqas/the-soldier/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (2014)',
    shape: '8,6',
    words: 'c4fc04e40d2c1d34',
  },
  {
    page: 'src/app/revision/poetry/eduqas/to-autumn/page.tsx',
    source: 'WJEC Eduqas GCSE Poetry Anthology (2014)',
    shape: '11,11,11',
    words: '85f8a7d50e74fae1',
  },
  {
    page: 'src/app/revision/poetry/love-and-relationships/loves-philosophy/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 3',
    shape: '8,8',
    words: '41d589520b74da9c',
  },
  {
    page: 'src/app/revision/poetry/love-and-relationships/neutral-tones/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 7',
    shape: '4,4,4,4',
    words: '55182f0aabf7b315',
  },
  {
    page: 'src/app/revision/poetry/love-and-relationships/porphyrias-lover/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), pp. 4-5',
    shape: '60',
    words: '4ccd27257c49234a',
  },
  {
    page: 'src/app/revision/poetry/love-and-relationships/sonnet-29/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 6',
    shape: '14',
    words: '61b826c7ed60f170',
  },
  {
    page: 'src/app/revision/poetry/power-and-conflict/london/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 22',
    shape: '4,4,4,4',
    words: 'fd0de1f808b22b38',
  },
  {
    page: 'src/app/revision/poetry/power-and-conflict/ozymandias/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 21',
    shape: '14',
    words: 'a2230ac518626b1e',
  },
  {
    page: 'src/app/revision/poetry/power-and-conflict/the-charge-of-the-light-brigade/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), pp. 26-27',
    shape: '8,9,9,12,11,6',
    words: '24d08ae00e152983',
  },
  {
    page: 'src/app/revision/poetry/ocr/love-and-relationships/she-walks-in-beauty/page.tsx',
    source:
      'Pearson Edexcel GCSE (9-1) English Literature Poetry Anthology, Issue 4, p. 8 (Pearson Edexcel sets it; OCR does not)',
    shape: '6,6,6',
    words: '99eeb8793f8a5b4f',
  },
  {
    page: 'src/app/revision/poetry/ocr/youth-and-age/when-i-have-fears/page.tsx',
    source: 'OCR, Towards a World Unknown, September 2020 edition, p. 33 (removed by OCR in 2022)',
    shape: '14',
    words: 'bdaacb524e0118ee',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/disabled/page.tsx',
    source: 'Pearson Edexcel International GCSE English Anthology, Issue 8, p. 25',
    shape: '6,7,7,8,8,3,7',
    words: '05ab910b698fba01',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/la-belle-dame-sans-merci/page.tsx',
    source:
      'Pearson Edexcel International GCSE English Anthology, Issue 8, pp. 60-61 (the stanza numerals are not printed here)',
    shape: '4,4,4,4,4,4,4,4,4,4,4,4',
    words: 'b2b07dbd27049a6e',
  },
  {
    page: 'src/app/revision/poetry/power-and-conflict/the-prelude/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), p. 23',
    shape: '44',
    words: '2e2f1556130c3357',
  },
  // Six pages that print a held text (src/data/full-texts), compared with their
  // anthology later the same day. Where the held edition and the anthology
  // differ, the page says which it follows and why.
  {
    page: 'src/app/igcse/edexcel/poetry/if/page.tsx',
    source: 'Pearson Edexcel International GCSE English Anthology, Issue 8, p. 51',
    shape: '8,8,8,8',
    words: '6bcabeb1ced4828e',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/piano/page.tsx',
    source: 'Pearson Edexcel International GCSE English Anthology, Issue 8, p. 57',
    shape: '4,4,4',
    words: '042a5dea7c1c4dce',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/remember/page.tsx',
    source: 'Pearson Edexcel International GCSE English Anthology, Issue 8, p. 70',
    shape: '14',
    words: '5fd373ee7be0e3fd',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/sonnet-116/page.tsx',
    source: 'Pearson Edexcel International GCSE English Anthology, Issue 8, p. 59',
    shape: '14',
    words: '09fe8d10b18a7a4d',
  },
  {
    page: 'src/app/igcse/edexcel/poetry/the-tyger/page.tsx',
    source:
      'Pearson Edexcel International GCSE English Anthology, Issue 8, p. 64 (line 18 keeps the held "watered" for its "water\'d", as the page says)',
    shape: '4,4,4,4,4,4',
    words: '7920edd5a809b913',
  },
  {
    page: 'src/app/revision/poetry/power-and-conflict/my-last-duchess/page.tsx',
    source:
      'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), pp. 24-25 (keeps the held "Fra", "favor" and "pretense" for its "Frà", "favour" and "pretence", as the page says, and the held punctuation or quotation marks in nine lines)',
    shape: '56',
    words: 'b8a9f1120b554aae',
  },
  // Printed paraphrase in place of the poem until 2 October 2026, and restored from AQA's
  // text the same day. AQA's words are those of the Poetry Bookshop edition (1921).
  {
    page: 'src/app/revision/poetry/love-and-relationships/the-farmers-bride/page.tsx',
    source: 'AQA, Past and present: poetry anthology (AQA-8702-TG-POEMS.PDF), pp. 9-10',
    shape: '9,10,10,4,8,5',
    words: 'b624f65e0d0096fc',
  },
  // Wider reading that no board prints, pinned to a published edition. Until 2 October
  // 2026 all three ran their stanzas together.
  {
    page: 'src/app/revision/poetry/ocr/love-and-relationships/she-dwelt-among-the-untrodden-ways/page.tsx',
    source:
      'no board prints it: The Poetical Works of William Wordsworth, ed. William Knight, 1896, vol. 2 (Project Gutenberg 12145)',
    shape: '4,4,4',
    words: '6968f46ee4ba4e09',
  },
  {
    page: 'src/app/revision/poetry/ocr/power-and-natural-world/the-eagle/page.tsx',
    source:
      'no board prints it: The Poetical Works of Alfred Tennyson (New York: Harper, 1873), as transcribed on Wikisource',
    shape: '3,3',
    words: 'eca63b2786cf5740',
  },
  {
    page: 'src/app/revision/poetry/ocr/youth-and-age/crossing-the-bar/page.tsx',
    source:
      'no board prints it: Tennyson, Demeter and Other Poems (Macmillan, 1889), from the scan transcribed on Wikisource',
    shape: '4,4,4,4',
    words: 'b7b1b05c8a39fa56',
  },
]

/**
 * Pages that print a poem in PoemData rows and are not pinned above, each with
 * the reason. A page leaves this list when it has been checked and pinned.
 */
const NOT_PINNED: Record<string, string> = {
  'src/app/resources/revision-notes/do-not-go-gentle-into-that-good-night/page.tsx':
    'its rows are built at run time from the held text in src/data/full-texts, which this test does not read',
}

type Row = { text: string; heading: boolean }

/** The rows of the page's PoemData, read from its source. */
function rowsOf(page: string): Row[] {
  const src = readFileSync(join(ROOT, page), 'utf8')
  const sf = ts.createSourceFile(page, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const prop = (o: ts.ObjectLiteralExpression, name: string) =>
    o.properties.find(
      (p): p is ts.PropertyAssignment => ts.isPropertyAssignment(p) && p.name.getText() === name,
    )
  let rows: Row[] = []
  const visit = (n: ts.Node) => {
    if (!rows.length && ts.isObjectLiteralExpression(n) && prop(n, 'languageDevices')) {
      const lines = prop(n, 'lines')?.initializer
      if (lines && ts.isArrayLiteralExpression(lines))
        rows = lines.elements.filter(ts.isObjectLiteralExpression).map((o) => {
          const text = prop(o, 'text')?.initializer
          return {
            text: text && ts.isStringLiteral(text) ? text.text : '',
            heading: prop(o, 'heading')?.initializer.kind === ts.SyntaxKind.TrueKeyword,
          }
        })
      return
    }
    ts.forEachChild(n, visit)
  }
  visit(sf)
  return rows
}

/** Stanza sizes, H for a part heading. */
function shape(rows: Row[]): string {
  const out: (number | 'H')[] = []
  let n = 0
  const close = () => {
    if (n) out.push(n)
    n = 0
  }
  for (const r of rows) {
    if (r.heading) {
      close()
      out.push('H')
    } else if (!r.text.trim()) close()
    else n++
  }
  close()
  return out.join(',')
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[‘’ʼ`]/g, "'")
    .replace(/[—–-]+/g, ' ')
    .replace(/[^\p{L}\p{N}' ]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()

/** The words of each printed line, one line at a time, as a short fingerprint. */
const fingerprint = (rows: Row[]) =>
  createHash('sha256')
    .update(
      rows
        .filter((r) => r.text.trim())
        .map((r) => norm(r.text))
        .join('\n'),
    )
    .digest('hex')
    .slice(0, 16)

/** Every page under src/app with a PoemData object, and how many of its rows are paraphrase. */
function poemPages() {
  const walk = (dir: string): string[] =>
    readdirSync(join(ROOT, dir), { withFileTypes: true }).flatMap((e) =>
      e.isDirectory()
        ? walk(`${dir}/${e.name}`)
        : e.name === 'page.tsx'
          ? [`${dir}/${e.name}`]
          : [],
    )
  return walk('src/app')
    .filter((page) => readFileSync(join(ROOT, page), 'utf8').includes('languageDevices'))
    .map((page) => {
      const printed = rowsOf(page).filter((r) => r.text.trim())
      return { page, paraphrase: printed.filter((r) => /^\s*\[/.test(r.text)).length }
    })
}

describe('a poem page checked against its anthology', () => {
  it.each(VERIFIED)('$page prints the poem as $source does', (v) => {
    const rows = rowsOf(v.page)
    // The Eagle, the shortest poem pinned, has six lines and seven rows.
    expect(rows.length, 'no poem read from the page').toBeGreaterThan(5)
    expect(shape(rows), 'stanzas').toBe(v.shape)
    expect(fingerprint(rows), 'words: check the page against its anthology').toBe(v.words)
  })

  it('tells a changed word or a lost line from the text it pinned', () => {
    // The fingerprint must move for the shapes of defect found on 2 October 2026.
    const poem: Row[] = ['One line here', 'Two line here', '', 'Three line here'].map((text) => ({
      text,
      heading: false,
    }))
    const base = fingerprint(poem)
    const changed = poem.map((r, i) => (i === 1 ? { ...r, text: 'Two lines here' } : r))
    const lost = poem.filter((_, i) => i !== 1)
    expect(fingerprint(changed)).not.toBe(base)
    expect(fingerprint(lost)).not.toBe(base)
    expect(shape(lost)).not.toBe(shape(poem))
    // Punctuation and dash forms are not words.
    const marked = poem.map((r) => (r.text ? { ...r, text: `${r.text.toUpperCase()} –` } : r))
    expect(fingerprint(marked)).toBe(base)
  })

  it('pins, or names with a reason, every page that prints a poem', { timeout: 30_000 }, () => {
    const pages = poemPages()
    // Were the walk to find no pages, everything below would pass by checking nothing.
    expect(pages.length).toBeGreaterThan(40)
    // Rows marked "[Paraphrase]" are our own words, not the poem.
    const poems = pages.filter((p) => p.paraphrase === 0).map((p) => p.page)
    const pinned = new Set(VERIFIED.map((v) => v.page))
    expect(
      poems.filter((p) => !pinned.has(p) && !(p in NOT_PINNED)),
      'prints a poem but is neither pinned in VERIFIED nor named in NOT_PINNED',
    ).toEqual([])
    // An entry in both lists, or one for a page that no longer prints a poem, is stale.
    expect(Object.keys(NOT_PINNED).filter((p) => pinned.has(p))).toEqual([])
    expect(Object.keys(NOT_PINNED).filter((p) => !poems.includes(p))).toEqual([])
  })
})

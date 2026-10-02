// @vitest-environment node
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
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
 * WHAT IT CHECKS. Each page in VERIFIED was compared line by line with the
 * anthology named beside it on 2 October 2026, by its words and its marks of
 * punctuation (the exceptions are noted on the pages). This pins what was
 * verified: the shape of the poem (stanza sizes, with H for a part heading)
 * and a fingerprint of its words, one line at a time, ignoring case,
 * punctuation and dash forms. A dropped, added or changed word or line fails
 * here, and the failure gives the page's new fingerprint.
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
]

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

describe('a poem page checked against its anthology', () => {
  it.each(VERIFIED)('$page prints the poem as $source does', (v) => {
    const rows = rowsOf(v.page)
    expect(rows.length, 'no poem read from the page').toBeGreaterThan(10)
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
})

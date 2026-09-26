import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { BOARDS } from '@/lib/board/board-config'
import { boardHasShelf, boardLandingHref, shelflessBoardHub } from '@/lib/board/board-landing'

/**
 * Smoke test for the homepage board picker contract.
 *
 * The BOARDS arrays in `src/app/page.tsx` are intentionally NOT exported
 * (they are module-local `const` declarations). To avoid forcing an export
 * just for testing, this suite reads the source file at runtime and asserts
 * that the literal `name:` / `href:` pairs we depend on are present in the
 * GCSE_BOARDS / IGCSE_BOARDS arrays.
 *
 * The contract being locked down here:
 *   - Each board card's href must point at the spec it advertises.
 *   - In particular: no GCSE board may link to an /igcse/ URL (regression
 *     test for the "Pearson GCSE -> IGCSE Lit" bug that shipped previously).
 *
 * 26 September 2026. The cards now build their href with boardLandingHref
 * instead of writing it out, because the literal sent Cambridge 0500 to an
 * empty shelf. The extractor below resolves `boardLandingHref('<id>')` through
 * the real helper, so these assertions test the URL a visitor actually gets.
 */

const HOMEPAGE_PATH = resolve(__dirname, '..', 'app', 'page.tsx')

type BoardEntry = { name: string; href: string }

/**
 * Extract a single named array literal (e.g. `GCSE_BOARDS: Board[] = [ ... ]`)
 * from the homepage source and parse out each `{ name: '...', href: '...' }`
 * object inside it.
 *
 * We deliberately do not use a JavaScript parser here. A tolerant
 * regex-based extractor keeps the test free of extra deps and lets it
 * survive cosmetic edits (whitespace, trailing commas, additional fields)
 * to the BOARDS objects.
 */
function extractBoardsArray(source: string, arrayName: string): BoardEntry[] {
  const declMatch = source.match(
    new RegExp(`const\\s+${arrayName}\\s*:\\s*Board\\[\\]\\s*=\\s*\\[`),
  )
  if (!declMatch || declMatch.index === undefined) {
    throw new Error(`Could not find array declaration for ${arrayName}`)
  }

  // Walk forward from the opening `[` and find the matching `]`,
  // honouring nested braces so we don't accidentally close on an
  // inner object literal.
  const startIdx = declMatch.index + declMatch[0].length - 1 // index of '['
  let depth = 0
  let endIdx = -1
  for (let i = startIdx; i < source.length; i++) {
    const ch = source[i]
    if (ch === '[') depth++
    else if (ch === ']') {
      depth--
      if (depth === 0) {
        endIdx = i
        break
      }
    }
  }
  if (endIdx === -1) {
    throw new Error(`Could not find closing ']' for ${arrayName}`)
  }

  const body = source.slice(startIdx + 1, endIdx)

  // Split into top-level `{ ... }` object segments.
  const objects: string[] = []
  let braceDepth = 0
  let segStart = -1
  for (let i = 0; i < body.length; i++) {
    const ch = body[i]
    if (ch === '{') {
      if (braceDepth === 0) segStart = i
      braceDepth++
    } else if (ch === '}') {
      braceDepth--
      if (braceDepth === 0 && segStart !== -1) {
        objects.push(body.slice(segStart + 1, i))
        segStart = -1
      }
    }
  }

  return objects.map((obj) => {
    const nameMatch = obj.match(/name\s*:\s*'([^']+)'/)
    const hrefMatch = obj.match(/href\s*:\s*(?:'([^']+)'|boardLandingHref\('([a-z0-9-]+)'\))/)
    if (!nameMatch || !hrefMatch) {
      throw new Error(`Object in ${arrayName} missing name or href: ${obj}`)
    }
    return { name: nameMatch[1], href: hrefMatch[1] ?? boardLandingHref(hrefMatch[2]) }
  })
}

const SOURCE = readFileSync(HOMEPAGE_PATH, 'utf8')
const GCSE_BOARDS: readonly BoardEntry[] = extractBoardsArray(SOURCE, 'GCSE_BOARDS')
const IGCSE_BOARDS: readonly BoardEntry[] = extractBoardsArray(SOURCE, 'IGCSE_BOARDS')

function findEntry(boards: readonly BoardEntry[], namePattern: RegExp): BoardEntry | undefined {
  return boards.find((b) => namePattern.test(b.name))
}

describe('homepage board picker - source-level contract', () => {
  it('parses both BOARDS arrays out of src/app/page.tsx', () => {
    expect(GCSE_BOARDS.length).toBeGreaterThan(0)
    expect(IGCSE_BOARDS.length).toBeGreaterThan(0)
  })
})

describe('GCSE_BOARDS expected entries', () => {
  it('AQA -> /revision/poetry/power-and-conflict', () => {
    const entry = findEntry(GCSE_BOARDS, /AQA/)
    expect(entry, 'AQA entry missing from GCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/set-texts/aqa?setBoard=aqa')
  })

  it('Pearson Edexcel -> /set-texts/edexcel?setBoard=edexcel', () => {
    const entry = findEntry(GCSE_BOARDS, /Pearson Edexcel/)
    expect(entry, 'Pearson Edexcel entry missing from GCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/set-texts/edexcel?setBoard=edexcel')
  })

  it('OCR -> /set-texts/ocr?setBoard=ocr', () => {
    const entry = findEntry(GCSE_BOARDS, /OCR/)
    expect(entry, 'OCR entry missing from GCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/set-texts/ocr?setBoard=ocr')
  })

  it('WJEC Eduqas / Eduqas -> /set-texts/eduqas?setBoard=eduqas', () => {
    const entry = findEntry(GCSE_BOARDS, /WJEC Eduqas|Eduqas/)
    expect(entry, 'Eduqas entry missing from GCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/set-texts/eduqas?setBoard=eduqas')
  })
})

describe('IGCSE_BOARDS expected entries', () => {
  it('Cambridge IGCSE / CIE -> its specification hub, not an empty shelf', () => {
    // It went to /set-texts/cambridge-0500 until 26 September 2026: a page
    // headed "Your set texts" for a specification that sets none.
    const entry = findEntry(IGCSE_BOARDS, /Cambridge IGCSE|CIE/)
    expect(entry, 'Cambridge entry missing from IGCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/igcse/cambridge/0500?setBoard=cambridge-0500')
  })

  it('Pearson Edexcel IGCSE Literature -> /set-texts/edexcel-igcse?setBoard=edexcel-igcse', () => {
    const entry = findEntry(IGCSE_BOARDS, /Pearson Edexcel IGCSE Literature|Edexcel IGCSE/)
    expect(entry, 'Edexcel IGCSE Literature entry missing from IGCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/set-texts/edexcel-igcse?setBoard=edexcel-igcse')
  })

  it('Pearson Edexcel IGCSE Language A -> /set-texts/edexcel-igcse-lang?setBoard=edexcel-igcse-lang', () => {
    const entry = findEntry(IGCSE_BOARDS, /Pearson Edexcel IGCSE Language|Language A/)
    expect(entry, 'Edexcel IGCSE Language entry missing from IGCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/set-texts/edexcel-igcse-lang?setBoard=edexcel-igcse-lang')
  })
})

describe('GCSE / IGCSE URL boundary (regression: GCSE -> IGCSE Lit bug)', () => {
  // The historic "GCSE -> IGCSE Lit" bug was that one of seven cards used
  // /igcse/edexcel (which silently set the IGCSE cookie via
  // BOARD_LANDING_REDIRECTS): a GCSE card with an IGCSE destination.
  //
  // THIS USED TO SAY NO CARD MAY START WITH /igcse/, which was a proxy for the
  // rule rather than the rule. Since 26 September 2026 the Cambridge card
  // correctly lands on /igcse/cambridge/0500, its own hub, because 0500 sets no
  // texts. What must never happen is a GCSE card going there, or any card
  // setting one board while showing another, and that is what is asserted now.
  const idOf = (href: string) => new URLSearchParams(href.split('?')[1] ?? '').get('setBoard')

  it('no GCSE card href starts with /igcse/ (regression for original bug)', () => {
    for (const b of GCSE_BOARDS) {
      expect(b.href.startsWith('/igcse/'), `GCSE card "${b.name}" links to ${b.href}`).toBe(false)
    }
  })

  it('a GCSE card only ever sets a GCSE board', () => {
    for (const b of GCSE_BOARDS) {
      const board = BOARDS.find((x) => x.id === idOf(b.href))
      expect(board?.type, `GCSE card "${b.name}" sets ${idOf(b.href)}`).toBe('gcse')
    }
  })

  it('every card href is exactly boardLandingHref of the board it sets', () => {
    // One rule for both shapes, so the path and the query cannot name different
    // boards: the helper builds both halves from the same id.
    for (const b of [...GCSE_BOARDS, ...IGCSE_BOARDS]) {
      const id = idOf(b.href)
      expect(id, `Card "${b.name}" carries no setBoard`).toBeTruthy()
      expect(b.href, `Card "${b.name}"`).toBe(boardLandingHref(id as string))
    }
  })

  it('a board with set texts lands on its shelf, a board without lands on its hub', () => {
    // The counterweight. Sending every card to a hub would satisfy the
    // assertion above and undo the rule that choosing a board shows its texts.
    const canonical = /^\/set-texts\/([a-z0-9-]+)\?setBoard=\1$/
    for (const b of [...GCSE_BOARDS, ...IGCSE_BOARDS]) {
      const id = idOf(b.href) as string
      if (boardHasShelf(id)) {
        expect(canonical.test(b.href), `Card "${b.name}" href "${b.href}"`).toBe(true)
      } else {
        expect(b.href, `Card "${b.name}"`).toBe(`${shelflessBoardHub(id)}?setBoard=${id}`)
      }
    }
  })
})

describe('marketing copy must not leak into BOARDS arrays', () => {
  // Defensive: if the "Built by a teacher" / "first cohort" marketing strings
  // ever ended up inside a board entry (name, href, blurb, etc.), that would
  // be a sign the marketing copy crept back into the picker. Scope the check
  // to the slice of source between the two array declarations and their close.
  function sliceArraySource(source: string, arrayName: string): string {
    const declRe = new RegExp(`const\\s+${arrayName}\\s*:\\s*Board\\[\\]\\s*=\\s*\\[`)
    const m = source.match(declRe)
    if (!m || m.index === undefined) {
      throw new Error(`Could not locate ${arrayName} for marketing-copy scan`)
    }
    const start = m.index
    let depth = 0
    let i = start + m[0].length - 1
    for (; i < source.length; i++) {
      const ch = source[i]
      if (ch === '[') depth++
      else if (ch === ']') {
        depth--
        if (depth === 0) return source.slice(start, i + 1)
      }
    }
    throw new Error(`Could not find end of ${arrayName} for marketing-copy scan`)
  }

  const FORBIDDEN = [/Built by a teacher/i, /first cohort/i]

  it('GCSE_BOARDS source contains no marketing phrases', () => {
    const slice = sliceArraySource(SOURCE, 'GCSE_BOARDS')
    for (const re of FORBIDDEN) {
      expect(re.test(slice), `Forbidden marketing phrase ${re} found inside GCSE_BOARDS`).toBe(
        false,
      )
    }
  })

  it('IGCSE_BOARDS source contains no marketing phrases', () => {
    const slice = sliceArraySource(SOURCE, 'IGCSE_BOARDS')
    for (const re of FORBIDDEN) {
      expect(re.test(slice), `Forbidden marketing phrase ${re} found inside IGCSE_BOARDS`).toBe(
        false,
      )
    }
  })
})

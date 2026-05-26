import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

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
    const hrefMatch = obj.match(/href\s*:\s*'([^']+)'/)
    if (!nameMatch || !hrefMatch) {
      throw new Error(`Object in ${arrayName} missing name or href: ${obj}`)
    }
    return { name: nameMatch[1], href: hrefMatch[1] }
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
    expect(entry?.href).toBe('/revision?setBoard=aqa')
  })

  it('Pearson Edexcel -> /revision?setBoard=edexcel', () => {
    const entry = findEntry(GCSE_BOARDS, /Pearson Edexcel/)
    expect(entry, 'Pearson Edexcel entry missing from GCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/revision?setBoard=edexcel')
  })

  it('OCR -> /revision?setBoard=ocr', () => {
    const entry = findEntry(GCSE_BOARDS, /OCR/)
    expect(entry, 'OCR entry missing from GCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/revision?setBoard=ocr')
  })

  it('WJEC Eduqas / Eduqas -> /revision?setBoard=eduqas', () => {
    const entry = findEntry(GCSE_BOARDS, /WJEC Eduqas|Eduqas/)
    expect(entry, 'Eduqas entry missing from GCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/revision?setBoard=eduqas')
  })
})

describe('IGCSE_BOARDS expected entries', () => {
  it('Cambridge IGCSE / CIE -> /revision?setBoard=cambridge-0500', () => {
    const entry = findEntry(IGCSE_BOARDS, /Cambridge IGCSE|CIE/)
    expect(entry, 'Cambridge entry missing from IGCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/revision?setBoard=cambridge-0500')
  })

  it('Pearson Edexcel IGCSE Literature -> /revision?setBoard=edexcel-igcse', () => {
    const entry = findEntry(IGCSE_BOARDS, /Pearson Edexcel IGCSE Literature|Edexcel IGCSE/)
    expect(entry, 'Edexcel IGCSE Literature entry missing from IGCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/revision?setBoard=edexcel-igcse')
  })

  it('Pearson Edexcel IGCSE Language A -> /revision?setBoard=edexcel-igcse-lang', () => {
    const entry = findEntry(IGCSE_BOARDS, /Pearson Edexcel IGCSE Language|Language A/)
    expect(entry, 'Edexcel IGCSE Language entry missing from IGCSE_BOARDS').toBeDefined()
    expect(entry?.href).toBe('/revision?setBoard=edexcel-igcse-lang')
  })
})

describe('GCSE / IGCSE URL boundary (regression: GCSE -> IGCSE Lit bug)', () => {
  // Per BOARD_NAVIGATION_MODEL.md (02 May 2026) every board card is now a
  // canonical `/revision?setBoard=<id>` URL. Middleware reads the param,
  // sets the cookie, and redirects to clean /revision. The historic
  // "GCSE -> IGCSE Lit" bug was that one of seven cards used /igcse/edexcel
  // (which silently set the IGCSE cookie via BOARD_LANDING_REDIRECTS).
  // The invariant we lock in: NO card href may start with /igcse/ ever again.
  it('no homepage card href starts with /igcse/ (regression for original bug)', () => {
    for (const b of [...GCSE_BOARDS, ...IGCSE_BOARDS]) {
      expect(
        b.href.startsWith('/igcse/'),
        `Card "${b.name}" must use /revision?setBoard=<id> but href=${b.href}`,
      ).toBe(false)
    }
  })

  it('every card href is the canonical /revision?setBoard=<id> shape', () => {
    const canonical = /^\/revision\?setBoard=[a-z0-9-]+$/
    for (const b of [...GCSE_BOARDS, ...IGCSE_BOARDS]) {
      expect(
        canonical.test(b.href),
        `Card "${b.name}" href "${b.href}" must match /revision?setBoard=<id>`,
      ).toBe(true)
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

// ─── The site board cookie, in the marking page's vocabulary ────────────────
//
// THE DEFECT THIS FIXES (19 September 2026)
//
// /marking/submit starts its board select empty and never reads the site board
// cookie. A student who has already chosen their board on /board-select - which
// the middleware forces them through before they can reach most of the product
// - chooses it again from a six-option list, then a paper, then a question.
// That is the single screen where a trialist decides whether the product works,
// and it opens by asking for something the site already knows.
//
// The two vocabularies differ, which is why this mapping has to exist rather
// than the page just reading the cookie:
//
//   cookie (src/middleware.ts)        marking page (BOARD_CATALOGUE)
//   ------------------------------    ------------------------------
//   aqa                               AQA
//   edexcel                           Edexcel
//   edexcel-igcse, edexcel-igcse-lang Edexcel
//   ocr                               OCR
//   eduqas                            Eduqas
//   cambridge-0500                    Cambridge-0500
//   cambridge-0990                    Cambridge-0990
//   ks3, eal-*                        (no marking board - leave empty)
//
// The Edexcel IGCSE ids collapse onto Edexcel because the marking catalogue
// groups a board's GCSE and IGCSE papers under one entry and separates them at
// the paper step.
// ────────────────────────────────────────────────────────────────────────────

/** The cookie the middleware writes when a visitor picks a board. */
export const SITE_BOARD_COOKIE = 'english-hub-board'

const EXACT: Readonly<Record<string, string>> = {
  aqa: 'AQA',
  edexcel: 'Edexcel',
  'edexcel-igcse': 'Edexcel',
  'edexcel-igcse-lang': 'Edexcel',
  'edexcel-igcse-lit': 'Edexcel',
  ocr: 'OCR',
  eduqas: 'Eduqas',
  wjec: 'Eduqas',
  'cambridge-0500': 'Cambridge-0500',
  'cambridge-0990': 'Cambridge-0990',
}

/**
 * The marking catalogue value for a site board id, or null when the board has
 * no marking papers (KS3 and the EAL profiles) or is unrecognised.
 *
 * Returning null rather than guessing matters: pre-selecting the wrong board
 * would have the student mark an Edexcel essay against an AQA grid without
 * noticing the select had been filled in for them.
 */
export function markingBoardFor(siteBoardId: string | null | undefined): string | null {
  if (!siteBoardId) return null
  const id = siteBoardId.trim().toLowerCase()
  if (EXACT[id]) return EXACT[id]!

  // Prefixed variants (edexcel-igcse-lit-poetry and similar) resolve to their
  // parent board rather than falling through to nothing.
  if (id.startsWith('edexcel')) return 'Edexcel'
  if (id.startsWith('cambridge-0500') || id.startsWith('caie-0500')) return 'Cambridge-0500'
  if (id.startsWith('cambridge-0990') || id.startsWith('caie-0990')) return 'Cambridge-0990'
  if (id.startsWith('eduqas') || id.startsWith('wjec')) return 'Eduqas'
  if (id.startsWith('aqa')) return 'AQA'
  if (id.startsWith('ocr')) return 'OCR'

  return null
}

/** Read the site board cookie in the browser. Returns null on the server. */
export function readSiteBoardCookie(): string | null {
  if (typeof document === 'undefined') return null
  const m = document.cookie.match(new RegExp(`(?:^|;\\s*)${SITE_BOARD_COOKIE}=([^;]+)`))
  return m?.[1] ? decodeURIComponent(m[1]) : null
}

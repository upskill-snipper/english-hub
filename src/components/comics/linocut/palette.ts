/**
 * The linocut palette, line weights and texture seeds. Every piece uses these
 * and nothing else, so that sixty texts drawn by several hands still look like
 * one set of prints. The reasons are in the style guide in ./index.ts.
 */

/** Printing ink: a warm near-black, never pure #000. */
export const INK = '#1c1915'
/** Bone paper: the unprinted sheet, and every white gouge line. */
export const PAPER = '#ece3cd'
/** The one spot colour: a dull brick red, printed from a second block. */
export const RED = '#a5402b'
/** Small print on paper (a source line, a note): ink let down with paper. */
export const INK_SOFT = '#4a4238'

export const PALETTE = { ink: INK, paper: PAPER, red: RED, inkSoft: INK_SOFT } as const

/**
 * The type on a print: a system serif, so nothing is fetched. Palatino where the
 * reader has it, Georgia everywhere else.
 */
export const SERIF =
  '"Palatino Linotype", Palatino, "Book Antiqua", "Iowan Old Style", Georgia, serif'

/**
 * Line weights, in the drawing's own units (a panel is drawn about 860 wide).
 * A cut line is never thinner than HAIRLINE, or it vanishes on a phone; the
 * block's own edge is always FRAME.
 */
export const LINE = {
  /** The finest cut: hair, rime, the grain of a cheek. */
  hairline: 0.8,
  /** Features: an eyelid, a lip, the fold of a collar. */
  fine: 1.2,
  /** Outlines carved round a black shape to lift it off a black ground. */
  carve: 1.6,
  /** A brow, a joint in a floor, anything that must read at thumbnail size. */
  bold: 2.4,
  /** The rough edge of the block. */
  frame: 5,
} as const

/**
 * Seeds for the SVG noise filters. Fixed, so every render of every piece is
 * identical to the pixel: the same paper, the same ink voids, the same rough
 * edges. Change one and every print on the site changes with it.
 */
export const TEXTURE_SEEDS = {
  /** feTurbulence behind the displacement that roughens every cut edge. */
  rough: 4,
  /** The white specks where ink failed to take on the black. */
  voids: 11,
  /** Fine paper fibre. */
  grainFine: 3,
  /** Coarse mottling in the paper. */
  grainCoarse: 8,
} as const

/** "#ece3cd" to [0.925, 0.89, 0.804], for an feColorMatrix row. */
export function unitRgb(hex: string): [number, number, number] {
  const v = parseInt(hex.slice(1), 16)
  const c = (shift: number) => Math.round((((v >> shift) & 255) / 255) * 1000) / 1000
  return [c(16), c(8), c(0)]
}

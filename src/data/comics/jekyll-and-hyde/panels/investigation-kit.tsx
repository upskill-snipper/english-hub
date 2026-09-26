import { between, gouge, wedge, type Pt, type Rng } from '@/components/comics/linocut/carve'

/**
 * Shared parts for the panels of the investigation, moments 6 to 10 of the
 * guide's timeline (Chapters 4 to 8): "Soho in the fog", "The letter and the
 * handwriting", "Lanyon's shock", "Incident at the window" and "The last
 * night". The people themselves come from ./people.tsx, so that Utterson is
 * the same man here as in every other panel; this file holds only what those
 * five panels add to them.
 *
 * - Utterson BAREHEADED. Indoors he has no hat, and the shared head is drawn
 *   to wear one. So his hair is cut here, in the frame of HEAD_UTTERSON: a
 *   few paper strands brushed back from the brow to the nape, so the black
 *   head does not read as bald. The text never describes his hair; it is
 *   plain.
 * - POOLE, "a well-dressed, elderly servant" (Chapter 2), who has served
 *   Jekyll "twenty years" (Chapter 8). So an older man than Utterson, with
 *   the short white hair of his portrait, in the dark coat and white shirt
 *   front of a butler of the 1880s. Nothing else of him is described.
 * - Floorboards, cut as the reference counting-house cuts them.
 */

/**
 * A white shirt collar showing under the chin, in the frame of the shared
 * heads: the one touch of white that says "gentleman" on a black figure at
 * phone width. Fill with PAPER.
 *
 * Every gentleman in every panel of this text wears it, moments 1 to 5 as
 * well as these five, so a man's dress does not change from one panel to the
 * next (a review on 26 September 2026 found it on Utterson from moment 6 only).
 * Hyde has none: his coat is buttoned to the throat, as in his portrait.
 */
export const COLLAR = 'M1.5 21.5L10 20.5L9 27L2 26.5Z'

/**
 * Utterson's hair, brushed back, in the frame of HEAD_UTTERSON. Fill with
 * PAPER. Every panel where he is bareheaded uses this one cut, "The will and
 * Mr Seek" and "Jekyll at ease" included, so his hair is the same throughout.
 */
export const UTTERSON_HAIR =
  gouge(9, -17, -10, -11, 0.7, 2.2) +
  gouge(12, -13, -14, -2, 0.7, 2.6) +
  gouge(2, -19.5, -13, -12, 0.55, 1.4) +
  gouge(-8, -8, -13.5, 6, 0.55, -0.8)

/**
 * Poole's head in profile facing right, centred on (0, 0) in the frame of the
 * shared heads (crown near y -20, chin near 21, neck to 26): an older face,
 * the nose a little heavier, the chin softer, the jaw fuller than Utterson's.
 */
export const HEAD_POOLE =
  'M-8.5 26C-10 20 -15 15 -16 6C-17 -9 -9 -19.5 2 -19.5C10.5 -19.5 15 -14.5 15.5 -8.5L16 -5L23.5 5.5L17 7.5L17.5 10L15.5 11.5L17 14C16.5 19 13 22.5 8 23L6.5 26Z'
/** The eye under a heavy lid, and the lines of age at the cheek and mouth. Fill with PAPER. */
export const POOLE_CUTS =
  gouge(6.5, -3.4, 12, -4, 0.95) +
  gouge(6, -7.8, 13.6, -7.2, 0.8) +
  gouge(10.6, 6, 8.6, 16, 0.55, 0.8) +
  gouge(-5.5, -1, -4.5, 7, 0.7, -1.4)
/**
 * His short white hair, as his portrait has it (../portraits/poole.tsx): a
 * paper cap over the crown and the back of the head, above the ear. Fill with
 * PAPER; stroke POOLE_HAIR_LINES over it in ink.
 */
export const POOLE_HAIR =
  'M8 -19.6C-4 -21 -13.4 -15 -15.8 -5C-17 1 -16 7 -13.4 11.4L-9 10.2C-10.4 5 -10 -1 -7.6 -6C-4.6 -12 1.4 -15.4 9.6 -15.6Z'
export const POOLE_HAIR_LINES =
  'M4 -17.6C-5 -16 -11 -10 -12.6 -2M-1 -18.6C-8 -15.6 -13.4 -9 -14.4 1'

/**
 * Mr Guest, Utterson's head clerk, "a great student and critic of
 * handwriting" (Chapter 5). The text gives him no face, so his is plain: a
 * man of middle years, his hair parted and combed flat. In the frame of the
 * shared heads, facing right.
 */
export const HEAD_GUEST =
  'M-8 25C-9.5 19 -14.5 14 -15.5 5C-16.5 -9 -8 -19.5 3 -19.5C11 -19.5 15.5 -14.5 15.5 -8.5L15.5 -5L21.5 3.5L16 5.5L16.5 8.5L15 10L16.2 12.5C16 17.5 13 20 8 20L6.5 25Z'
/** His hair combed flat from a parting, his brow, and the eye that "brightened". Fill with PAPER. */
export const GUEST_CUTS =
  gouge(4, -17.5, -12, -12, 0.6, 1) +
  gouge(6, -15, -14, -5, 0.55, 1.6) +
  gouge(5.5, -7.6, 13.4, -7.2, 0.8) +
  'M7 -3.6Q10 -6.4 13 -3.8Q10 -1.6 7 -3.6Z' +
  gouge(-5.5, -1, -4.5, 7, 0.7, -1.4)

/**
 * Floorboards seen from the room, as in the reference counting-house: joints
 * running to a vanishing point, thickening towards the reader, and shade at
 * the foot of the wall. Fill with INK over a PAPER floor.
 */
export function floorBoards(
  r: Rng,
  W: number,
  H: number,
  top: number,
  vanish: Pt,
  every = 30,
): string {
  let d = ''
  const [vx, vy] = vanish
  for (let xt = -700; xt < W + 700; xt += every) {
    const xb = vx + (xt - vx) * ((H - vy) / (top - vy))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      d += wedge(
        xt + (xb - xt) * t0,
        top + (H - top) * t0,
        xt + (xb - xt) * t1,
        top + (H - top) * t1,
        0.8 + t0 * 2.8,
        0.8 + t1 * 2.8,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = top + 1; y < top + 16; y += 3) d += gouge(0, y, W, y, 2.4 - (y - top) * 0.13)
  return d
}

/**
 * "Handwriting" too small to read: a line of up-and-down strokes, as a pen
 * leaves them, from (x, y) for `len` units. The same seed gives the same line,
 * so a hand can be drawn twice, once upright and once sloped, and be the same
 * hand. Stroke it.
 */
export function scribble(r: Rng, x: number, y: number, len: number, h = 3.2): string {
  let d = `M${x} ${y}`
  let cx = x
  while (cx < x + len) {
    const up = h * between(r, 0.55, 1.25)
    const step = between(r, 1.3, 2.1)
    d += `L${Math.round((cx + step * 0.4) * 10) / 10} ${Math.round((y - up) * 10) / 10}`
    cx += step
    d += `L${Math.round(cx * 10) / 10} ${y}`
    if (r() < 0.14) {
      cx += between(r, 2, 3.4)
      d += `M${Math.round(cx * 10) / 10} ${y}`
    }
  }
  return d
}

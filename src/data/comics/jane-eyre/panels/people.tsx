import type { CSSProperties, ReactNode } from 'react'

import { gouge } from '@/components/comics/linocut/carve'
import { INK, PAPER } from '@/components/comics/linocut/palette'

/**
 * The people of Jane Eyre, cut from the text's own descriptions and shared by
 * every panel, so that a student meets the same Jane, the same Brocklehurst
 * and the same Rochester from Gateshead to Ferndean. Cut first for the panels
 * of moments 1 to 5 (Chapters 1 to 9); every other panel of this text draws
 * its recurring people from here. A change to any shape below changes every
 * panel that uses it: preview them all before changing one. A person this
 * file does not have yet is added HERE, by the first artist who needs them,
 * at the end of the file under a heading of their own, so the next one finds
 * them and two artists never cut the same person twice.
 *
 * FIXED 10 October 2026: the people of Chapters 11 to 38 (woman(), Mrs
 * Fairfax, Grace Poole, Adèle, Blanche Ingram, Mason, Bertha, St John, Pilot
 * and Mesrour, Jane's two bonnets and her shawl) had been cut in three
 * staging files by three artists drawing at once, and copied between them,
 * and two panels carried private copies of an older straw bonnet, so that
 * Jane wore one bonnet at Whitcross and another at Thornfield's ruin. They
 * were moved here, under headings of their own at the end of the file, and
 * the copies and the staging files went. Import a person from this file and
 * nowhere else; a copy is a copy that drifts.
 *
 * A figure is cut as the reference panel cuts Fred
 * (src/data/comics/a-christmas-carol/counting-house.tsx): a paper halo round
 * every part, so it reads as one black shape with a single carved outline,
 * then the parts in ink, then the paper cuts of folds and features. The
 * machinery (Figure, Part, headAt, handAt, the hands, coat, gown, man) is the
 * Frankenstein kit's (src/data/comics/frankenstein/panels/people.tsx), copied
 * rather than imported so that a change made for one text cannot redraw
 * another. One thing is added: a Part may be cut in PAPER with an ink edge
 * (`paper`), for bare skin and white linen, because Jane is pale.
 *
 * WHAT THE TEXT SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/jane-eyre.ts):
 *
 * - JANE, as a child (Chapters 1 to 10). "I was but ten" (Chapter 1); "Her
 *   size is small" (Brocklehurst, Chapter 4); in the red-room's looking-glass
 *   "the strange little figure there gazing at me, with a white face and arms
 *   specking the gloom, and glittering eyes of fear" (Chapter 2); "Shaking my
 *   hair from my eyes" (Chapter 2). So she is the smallest figure in any
 *   panel, and her face, her arms and her hands are cut in PAPER, outlined in
 *   ink, on a dark frock with short sleeves (JaneGirl): the pale child a
 *   student can find in every picture. At Gateshead her own dark hair hangs
 *   loose to her shoulders (JANE_GIRL_HAIR) and she wears a pinafore ("denuded
 *   me of my pinafore", Chapter 4, when Bessie readies her to go down); at
 *   Lowood the girls wear "plain locks combed from their faces, not a curl
 *   visible; in brown dresses, made high and surrounded by a narrow tucker
 *   about the throat, with little pockets of holland ... tied in front of
 *   their frocks" (Chapter 5), so there her hair is combed back
 *   (JANE_GIRL_HAIR_COMBED), her frock is high with a paper tucker at the
 *   throat, and the holland pocket is a small paper shape at her waist. The
 *   younger girls wrap "their starved arms in their pinafores" (Chapter 7), so
 *   her arms stay bare there too. The brown of the frock is left to the words.
 *   The text never gives the colour of her hair as a child; Rochester later
 *   calls it "hazel" (Chapter 24), so it is cut dark, never fair. NO RED ever
 *   touches her head, her face or her hands: in Chapters 1 and 2 her head is
 *   cut and bleeding, and a red mark there would read as the wound.
 * - JANE, grown (from Chapter 10). "I felt it a misfortune that I was so
 *   little, so pale, and had features so irregular and so marked" (Chapter
 *   11); "I had brushed my hair very smooth, and put on my black frock ... and
 *   adjusted my clean white tucker" (Chapter 11); "your plain, Quakerish
 *   governess" (Chapter 24). So the same paper face, grown (JaneFace), the
 *   nose rising a little at the bridge and the chin decided; her hair dark
 *   and smooth, brushed flat over the ear into a knot behind (JANE_HAIR); a
 *   black frock with a narrow paper tucker at the neck (TUCKER); and she is
 *   cut a little smaller than the other women. "I had green eyes, reader"
 *   (Chapter 24): the green is left to the words. No red on her face: she
 *   wished for "rosy cheeks" and had none.
 * - ROCHESTER. "a dark face, with stern features and a heavy brow ... perhaps
 *   he might be thirty-five" and "middle height and considerable breadth of
 *   chest" (Chapter 12); "his broad and jetty eyebrows; his square forehead,
 *   made squarer by the horizontal sweep of his black hair ... his decisive
 *   nose, more remarkable for character than beauty; his full nostrils ...
 *   his grim mouth, chin, and jaw" and "broad chested and thin flanked,
 *   though neither tall nor graceful" (Chapter 13). So his face is INK, with
 *   the heavy brow jutting in the profile itself (HEAD_ROCHESTER), the black
 *   hair swept straight across the forehead (ROCHESTER_HAIR), a broad nose
 *   with a full nostril, and a heavy square chin; his eye is cut narrow under
 *   the brow. He is broad in the chest (pass `width` 38 or so to man()) and
 *   no taller than the other men. At Ferndean he is blind and "the one hand
 *   ... he kept hidden in his bosom" (Chapter 37): draw him with that arm
 *   inside his coat, never the injury.
 *
 * The people of moments 1 to 5, below the machinery: John Reed, Mrs Reed,
 * Bessie, Brocklehurst, Helen Burns, Miss Temple, and the plain Lowood girl.
 * Each is described where it is cut.
 *
 * The story's dress is that of about 1800 to 1820, which the text never fixes
 * beyond its details: high-waisted gowns and frocks for women and girls
 * (gown()), and for men a coat cut away at the front or a long surtout
 * (coat()). Nothing is taken from a film, television or stage production.
 */

export type P = [number, number]

/**
 * One part of a figure: a filled shape, or with `w` a limb or a stick drawn
 * as a stroke of that width. `sep` cuts a paper edge that wide round this part
 * before it is inked, to lift an arm off the coat behind it. `t` places the
 * part (a head drawn once, turned and scaled). With `paper`, the part is cut
 * in PAPER with an ink edge `edge` wide (default 1): bare skin, white linen.
 */
export type Part = {
  d: string
  w?: number
  sep?: number
  t?: string
  paper?: boolean
  edge?: number
}

/**
 * A figure: a paper halo round every ink part, so it reads as one black shape
 * with a single carved outline; then every part in order, ink or paper; then
 * `cuts` in paper and `inks` in ink over the top (features on a paper face).
 */
export function Figure({
  parts,
  cuts,
  inks,
  halo = 1.8,
  transform,
  className,
  style,
  children,
}: {
  parts: Part[]
  cuts?: string
  inks?: string
  halo?: number
  transform?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const shape = (p: Part, colour: string, extra: number, key: string) =>
    p.w ? (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill="none"
        stroke={colour}
        strokeWidth={p.w + extra}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra || undefined}
        strokeLinejoin="round"
      />
    )
  return (
    <g transform={transform} className={className} style={style}>
      {halo > 0 &&
        parts.map((p, i) =>
          p.paper ? null : shape(p, PAPER, (p.t ? halo / scaleOf(p.t) : halo) * 2, `h${i}`),
        )}
      {parts.map((p, i) =>
        p.paper
          ? [
              shape(p, INK, (p.t ? (p.edge ?? 1) / scaleOf(p.t) : (p.edge ?? 1)) * 2, `e${i}`),
              shape(p, PAPER, 0, `f${i}`),
            ]
          : [p.sep ? shape(p, PAPER, p.sep * 2, `s${i}`) : null, shape(p, INK, 0, `f${i}`)],
      )}
      {cuts && <path d={cuts} fill={PAPER} />}
      {inks && <path d={inks} fill={INK} />}
      {children}
    </g>
  )
}

/**
 * The scale in a part's transform, so a halo or an edge drawn inside a scaled
 * head or hand is as wide on the sheet as one drawn outside it.
 */
function scaleOf(t: string): number {
  const m = /scale\((-?[\d.]+)/.exec(t)
  return m ? Math.abs(Number(m[1])) || 1 : 1
}

/** The transform of a head centred on `at`, facing right (1) or left (-1). */
export function headAt(facing: 1 | -1, at: P, rot = 0, scale = 1) {
  return `translate(${at[0]} ${at[1]}) rotate(${rot}) scale(${facing * scale} ${scale})`
}

export const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L')
const r1 = (v: number) => Math.round(v * 10) / 10

// ── HANDS ───────────────────────────────────────────────────────────────────
// In the frame of the wrist: the wrist at (0, 0), the hand pointing along +x,
// the thumb on the -y side. `man` and `girl` turn them along the forearm.
// Drawn larger than life, with a clear gap between every finger, because a
// hand whose fingers merge reads as a fist at phone width.

/** An open hand, the fingers spread. */
export const OPEN_HAND: Part[] = [
  { d: 'M-0.8 -4.6C3 -5.8 6.5 -6 9.4 -5.2L9.6 5C6.5 5.8 3 5.6 -0.8 4.4Z' },
  { d: 'M8.8 -3.9L16.4 -7.6', w: 2.2 },
  { d: 'M9.3 -1.3L18.2 -3', w: 2.2 },
  { d: 'M9.3 1.4L17.6 2.4', w: 2.2 },
  { d: 'M8.8 4L15 6.8', w: 2.1 },
  { d: 'M2.4 -4.4L5.8 -9L8.8 -10.8', w: 2.3 },
]

/** A hand thrown out with the fingers splayed wide, palm out. */
export const SPREAD_HAND: Part[] = [
  { d: 'M-0.8 -5C3 -6.4 7 -6.6 10 -5.6L10.4 5.4C7 6.4 3 6 -0.8 4.8Z' },
  { d: 'M9.4 -4.4L16.4 -12', w: 2.3 },
  { d: 'M10.2 -1.6L19.8 -5.4', w: 2.3 },
  { d: 'M10.2 1.8L19.8 2.6', w: 2.3 },
  { d: 'M9.6 4.8L16.8 10', w: 2.2 },
  { d: 'M2.4 -5L3.6 -11.4L5.6 -16', w: 2.4 },
]

/** A hand holding something flat (a book, a letter): fingers together, cut apart, the thumb over. */
export const HOLD_HAND: Part[] = [
  { d: 'M-0.8 -4.4C3 -5.6 7 -5.8 10 -4.8L10 5C7 5.6 3 5.4 -0.8 4.2Z' },
  { d: 'M9.5 -2.8L17 -3.2', w: 2.2 },
  { d: 'M9.5 0L17.6 0.2', w: 2.2 },
  { d: 'M9.5 2.8L16.6 3.4', w: 2.2 },
  { d: 'M2.8 -4.2L7 -8.2L10.5 -9.4', w: 2.4 },
]
/** The paper lines between the fingers of HOLD_HAND, in its frame. */
export const HOLD_CUTS = gouge(10.5, -1.4, 17, -1.5, 0.5) + gouge(10.5, 1.4, 16.8, 1.8, 0.5)

/** A hand hanging loose at the side, the fingers together and slightly curled. */
export const LOOSE_HAND: Part[] = [
  { d: 'M-0.8 -4.2C3 -5.2 6.6 -5.2 9.4 -4.2C11.6 -2.4 12.4 0.6 11.4 3.4C8.4 5.4 3 5.2 -0.8 4Z' },
  { d: 'M2.6 -4L6.4 -7.4L9 -8', w: 2.2 },
]

/** A fist closed round a stick, a rope or a handle; the knuckles cut apart. */
export const GRIP_HAND: Part[] = [
  {
    d: 'M-0.8 -4.4C4 -6 9.5 -6.2 11.8 -3.2C13.2 -1 13 2.6 11.3 4.4C8.2 6 3.2 5.6 -0.8 4.2Z',
  },
]

export type Hand = { parts: Part[]; scale?: number; rot?: number; flip?: boolean }

/** The transform `man` and `girl` give a hand at the end of `arm`. */
export function handAt(arm: P[], facing: 1 | -1, h: Hand) {
  const [x0, y0] = arm[arm.length - 2]
  const [x1, y1] = arm[arm.length - 1]
  const a = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI + (h.rot ?? 0)
  const s = h.scale ?? 1
  const flip = (h.flip ?? facing === -1) ? -1 : 1
  return `translate(${x1} ${y1}) rotate(${r1(a)}) scale(${s} ${flip * s})`
}

/** A shoe or a short boot, its heel at the ankle point, toe towards `facing`. */
export function boot([x, y]: P, facing: 1 | -1, size = 1): Part {
  const f = facing * size
  const s = size
  return {
    d: `M${r1(x - f * 5)} ${r1(y - 7 * s)}L${r1(x + f * 6)} ${r1(y - 6 * s)}C${r1(x + f * 11)} ${r1(y - 5 * s)} ${r1(x + f * 14)} ${r1(y - 2 * s)} ${r1(x + f * 14)} ${r1(y + s)}L${r1(x - f * 6)} ${r1(y + s)}Z`,
  }
}

/** A bare foot, its heel at the ankle point, toes towards `facing`. Cut in paper. */
export function bareFoot([x, y]: P, facing: 1 | -1, size = 1): Part {
  const f = facing * size
  const s = size
  return {
    d: `M${r1(x - f * 4)} ${r1(y - 6 * s)}L${r1(x + f * 3)} ${r1(y - 5 * s)}C${r1(x + f * 8)} ${r1(y - 3 * s)} ${r1(x + f * 12)} ${r1(y - 2 * s)} ${r1(x + f * 12)} ${r1(y + s)}L${r1(x - f * 5)} ${r1(y + s)}Z`,
    paper: true,
  }
}

/** The unit vectors along and across the line from `a` to `b`. */
function axes(a: P, b: P): { u: P; v: P } {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const L = Math.hypot(dx, dy) || 1
  return { u: [dx / L, dy / L], v: [-dy / L, dx / L] }
}

/**
 * A coat on the line from neck to hip: shoulders `width` across, drawn in at
 * the waist, CUT AWAY at the front, with tails hanging `tails` below the hip
 * at the back. `front` is how far below the hip the front edge stops. `swing`
 * pushes the tails back. With `long`, a greatcoat or a surtout instead: the
 * whole skirt to `tails` below the hip.
 */
export function coat(
  neck: P,
  hip: P,
  facing: 1 | -1,
  {
    width = 34,
    tails = 46,
    front = 4,
    flare = 7,
    swing = 0,
    long = false,
  }: {
    width?: number
    tails?: number
    front?: number
    flare?: number
    swing?: number
    long?: boolean
  } = {},
): string {
  const { u, v } = axes(neck, hip)
  const at = (o: P, a: number, b: number): P => [
    r1(o[0] + u[0] * a + v[0] * b),
    r1(o[1] + u[1] * a + v[1] * b),
  ]
  const h = width / 2
  const f = facing
  const side = (s: 1 | -1) => (v[0] * f >= 0 ? s : -s)
  const back = -f * swing
  const sF = at(neck, 5, side(1) * h)
  const sB = at(neck, 5, side(-1) * h)
  const tF = at(neck, -3, side(1) * h * 0.5)
  const tB = at(neck, -3, side(-1) * h * 0.5)
  const cF = at(neck, -3, side(1) * h)
  const cB = at(neck, -3, side(-1) * h)
  const wF = at(hip, -4, side(1) * h * 0.78)
  const wB = at(hip, -4, side(-1) * h * 0.78)
  const hemB: P = [
    r1(hip[0] + u[0] * tails + v[0] * side(-1) * (h * 0.78 + flare) + back),
    r1(hip[1] + u[1] * tails + v[1] * side(-1) * (h * 0.78 + flare)),
  ]
  if (long) {
    const hemF: P = [
      r1(hip[0] + u[0] * tails + v[0] * side(1) * (h * 0.78 + flare) + back),
      r1(hip[1] + u[1] * tails + v[1] * side(1) * (h * 0.78 + flare)),
    ]
    return outline([tF, cF, sF, wF, hemF, hemB, wB, sB, cB, tB])
  }
  const fF = at(hip, front, side(1) * h * 0.8)
  const cut = at(hip, front + (tails - front) * 0.42, side(-1) * h * 0.12)
  const tf = at(hip, tails, side(-1) * h * 0.22)
  const tailF: P = [r1(tf[0] + back), tf[1]]
  return outline([tF, cF, sF, wF, fF, cut, tailF, hemB, wB, sB, cB, tB])
}

/** A coat's outline: the first three and last three points are the collar curves. */
function outline(p: P[]): string {
  const k = p.length
  const pt = (q: P) => `${q[0]} ${q[1]}`
  const mid = p
    .slice(3, k - 3)
    .map((q) => `L${pt(q)}`)
    .join('')
  return `M${pt(p[0])}Q${pt(p[1])} ${pt(p[2])}${mid}L${pt(p[k - 3])}Q${pt(p[k - 2])} ${pt(p[k - 1])}Z`
}

/**
 * A man from his joints: arms through shoulder, elbow and wrist, legs through
 * hip, knee and ankle, a coat (or `robe`, a body shape of the panel's own) on
 * the line from neck to hip, a hand at the end of each arm. Returned in
 * drawing order: far limbs, body, near leg, head, hair, near arm (lifted off
 * the coat by its own paper edge), near hand. A limb may be left out by
 * passing an empty list.
 */
export function man(p: {
  facing: 1 | -1
  neck: P
  hip: P
  head: { d: string; at: P; rot?: number; scale?: number }
  /** Hair or a cap in the head's frame, drawn over the head. */
  hair?: string
  near: { arm: P[]; leg: P[]; hand?: Hand }
  far: { arm: P[]; leg: P[]; hand?: Hand }
  body?: {
    width?: number
    tails?: number
    front?: number
    flare?: number
    swing?: number
    long?: boolean
  }
  robe?: string
  arm?: number
  leg?: number
  feet?: boolean
  shoe?: number
}): Part[] {
  const f = p.facing
  const aw = p.arm ?? 8.5
  const lw = p.leg ?? 9.5
  const feet = p.feet ?? true
  const last = (a: P[]) => a[a.length - 1]
  const hand = (arm: P[], h?: Hand): Part[] =>
    h && arm.length > 1 ? h.parts.map((q) => ({ ...q, t: handAt(arm, f, h) })) : []
  const limb = (pts: P[], w: number, sep?: number): Part[] =>
    pts.length > 1 ? [{ d: line(pts), w, sep }] : []
  const ht = headAt(f, p.head.at, p.head.rot ?? 0, p.head.scale ?? 1)
  return [
    ...limb(p.far.arm, aw),
    ...hand(p.far.arm, p.far.hand),
    ...limb(p.far.leg, lw),
    ...(feet && p.far.leg.length > 1 ? [boot(last(p.far.leg), f, p.shoe)] : []),
    { d: line([p.neck, p.hip]), w: (p.body?.width ?? 30) * 0.75 },
    { d: p.robe ?? coat(p.neck, p.hip, f, p.body) },
    ...limb(p.near.leg, lw),
    ...(feet && p.near.leg.length > 1 ? [boot(last(p.near.leg), f, p.shoe)] : []),
    { d: p.head.d, t: ht },
    ...(p.hair ? [{ d: p.hair, t: ht }] : []),
    ...limb(p.near.arm, aw, 1.4),
    ...hand(p.near.arm, p.near.hand),
  ]
}

/**
 * A woman's or a girl's high-waisted gown: the bodice from the neck to a high
 * waist, then a long skirt falling to `hemY`, `front` ahead of the waist and
 * `back` behind it. `facing` is the way the figure faces.
 *
 * `v` points to the BACK of the figure: the outline runs from the back of the
 * neck down the back to the back of the hem, along the hem, and up the front.
 * FIXED 10 October 2026: `v` was multiplied by -f and so pointed to the front,
 * which sent the skirt from the front of the waist to the back of the hem and
 * from the front of the hem to the back of the waist. The two crossed, and
 * every gown and frock was pinched to a point a third of the way down the
 * skirt, an hourglass ("A blackened ruin", moment 21, showed it plainly).
 */
export function gown(
  neck: P,
  waist: P,
  hemY: number,
  facing: 1 | -1,
  {
    shoulder = 24,
    waistW = 17,
    front = 26,
    back = 32,
  }: { shoulder?: number; waistW?: number; front?: number; back?: number } = {},
): string {
  const f = facing
  const { u, v: v0 } = axes(neck, waist)
  const v: P = [v0[0] * f, v0[1] * f]
  const at = (o: P, a: number, b: number): P => [
    r1(o[0] + u[0] * a + v[0] * b),
    r1(o[1] + u[1] * a + v[1] * b),
  ]
  const pt = (q: P) => `${r1(q[0])} ${r1(q[1])}`
  const h = shoulder / 2
  const t1 = at(neck, -4, h * 0.55)
  const c1 = at(neck, -4, h)
  const s1 = at(neck, 4, h)
  const w1 = at(waist, 0, waistW / 2)
  const hb: P = [waist[0] - f * back, hemY]
  const hf: P = [waist[0] + f * front, hemY]
  const w2 = at(waist, 0, -waistW / 2)
  const s2 = at(neck, 4, -h)
  const c2 = at(neck, -4, -h)
  const t2 = at(neck, -4, -h * 0.55)
  const midHem: P = [(hb[0] + hf[0]) / 2, hemY + 3]
  return (
    `M${pt(t1)}Q${pt(c1)} ${pt(s1)}L${pt(w1)}` +
    `C${pt([w1[0] - f * 6, w1[1] + (hemY - w1[1]) * 0.4])} ${pt([hb[0] + f * 4, hemY - (hemY - w1[1]) * 0.25])} ${pt(hb)}` +
    `Q${pt(midHem)} ${pt(hf)}` +
    `C${pt([hf[0] - f * 4, hemY - (hemY - w2[1]) * 0.25])} ${pt([w2[0] + f * 5, w2[1] + (hemY - w2[1]) * 0.4])} ${pt(w2)}` +
    `L${pt(s2)}Q${pt(c2)} ${pt(t2)}Z`
  )
}

/**
 * A girl from her joints, for Jane, Helen and the Lowood girls: the legs
 * first, so the frock covers them to its hem, then the hair that hangs behind,
 * the frock (gown() at a child's size, or `skirt`, a shape of the panel's own
 * for a girl seated or kneeling), the head, and the arms. With `bare` (the
 * default) the arms and hands are cut in PAPER with an ink edge, as the
 * short-sleeved frocks of Gateshead and Lowood leave them; the far arm is
 * drawn first, behind the frock. Feet are shoes, bare paper feet, or none.
 */
export function girl(p: {
  facing: 1 | -1
  neck: P
  waist: P
  hemY: number
  head: { d: string; at: P; rot?: number; scale?: number }
  /** Hair that hangs behind the head and over the shoulders, in the head's frame. */
  hair?: string
  near: { arm: P[]; leg: P[]; hand?: Hand }
  far: { arm: P[]; leg: P[]; hand?: Hand }
  frock?: { shoulder?: number; waistW?: number; front?: number; back?: number }
  skirt?: string
  arm?: number
  leg?: number
  bare?: boolean
  feet?: 'shoes' | 'bare' | 'none'
  shoe?: number
}): Part[] {
  const f = p.facing
  const aw = p.arm ?? 5.6
  const lw = p.leg ?? 6
  const bare = p.bare ?? true
  const feet = p.feet ?? 'shoes'
  const size = p.shoe ?? 0.62
  const last = (a: P[]) => a[a.length - 1]
  const hand = (arm: P[], h?: Hand): Part[] =>
    h && arm.length > 1
      ? h.parts.map((q) => ({ ...q, t: handAt(arm, f, h), paper: bare, edge: 0.9 }))
      : []
  const arm = (pts: P[]): Part[] =>
    pts.length > 1 ? [{ d: line(pts), w: aw, paper: bare, edge: 1, sep: bare ? 0 : 1.2 }] : []
  const leg = (pts: P[]): Part[] => (pts.length > 1 ? [{ d: line(pts), w: lw }] : [])
  const foot = (pts: P[]): Part[] =>
    pts.length < 2 || feet === 'none'
      ? []
      : [feet === 'bare' ? bareFoot(last(pts), f, size) : boot(last(pts), f, size)]
  const ht = headAt(f, p.head.at, p.head.rot ?? 0, p.head.scale ?? 1)
  return [
    ...arm(p.far.arm),
    ...hand(p.far.arm, p.far.hand),
    ...leg(p.far.leg),
    ...leg(p.near.leg),
    ...foot(p.far.leg),
    ...foot(p.near.leg),
    ...(p.hair ? [{ d: p.hair, t: ht }] : []),
    {
      d:
        p.skirt ??
        gown(p.neck, p.waist, p.hemY, f, {
          shoulder: 16,
          waistW: 12,
          front: 13,
          back: 15,
          ...p.frock,
        }),
    },
    { d: p.head.d, t: ht },
    ...arm(p.near.arm),
    ...hand(p.near.arm, p.near.hand),
  ]
}

// ── HEADS ───────────────────────────────────────────────────────────────────
// Each in profile facing right, centred on (0, 0), crown near y -20, chin near
// y 17 to 21, the base of the neck at y 24 to 26. The nose, brow and chin are
// pushed out further than life: the rough edge of the print eats about two
// units, and a profile must survive that at phone width. On an INK face the
// features are cut in PAPER; on a PAPER face (Jane's, Helen's) they are drawn
// in INK.

/** A girl's head: a round brow, a small nose, a small chin. Jane, Helen, the Lowood girls. */
export const HEAD_GIRL =
  'M-6 24C-9 18.5 -14.6 14 -15.4 5C-16.4 -9 -8 -19.6 2.4 -19.6C10.4 -19.6 14.6 -14.6 14.8 -8.8L15.2 -5.2L14.8 -3.6L17.8 2.2L15 3.8L15.4 6.4L14.6 7.8L15.2 9.4C15 13.6 12.2 16.6 7.6 16.8L5.6 24Z'
/**
 * The front of a girl's head and her neck, for a pale face laid over the head
 * in PAPER and outlined in ink. The ear and everything behind it stay ink: hair.
 */
export const GIRL_FACE =
  'M1.2 -12.6C5.6 -14.6 11 -14.2 14.2 -11.6L14.8 -8.8L15.2 -5.2L14.8 -3.6L17.8 2.2L15 3.8L15.4 6.4L14.6 7.8L15.2 9.4C15 13.6 12.2 16.6 7.6 16.8L6.4 25.4L-2.6 25.6C-1.4 20 -0.6 15 0.2 10C-0.6 2 -0.4 -6 1.2 -12.6Z'
/** The line of the jaw across a paper face and neck. Stroke in ink. */
export const GIRL_JAW = 'M7.6 16.8Q3.2 16.4 1.2 12'

/**
 * A girl's features, in ink on a paper face: the brow, the eye in four moods,
 * the mouth shut or open. `open` is the eye at rest; `wide` is fear (an open
 * ring with the pupil in it, "glittering eyes of fear"); `down` is the lid
 * lowered (shame, or sleep); `fierce` is the brow drawn down hard over the
 * eye, for Jane crying out.
 */
export const GIRL_BROW = gouge(7.2, -7.8, 13.6, -7.2, 0.75)
export const GIRL_BROW_FIERCE = gouge(6.8, -8.6, 14.8, -5.4, 1.15, 0.2)
export const GIRL_BROW_RAISED = gouge(6.8, -9.4, 13.6, -9.8, 0.75, -0.6)
export const GIRL_EYE_OPEN = 'M8 -3.6Q10.6 -5.8 13.4 -3.8Q10.6 -1.8 8 -3.6Z'
export const GIRL_EYE_DOWN = 'M8 -3.2Q10.6 -1.2 13.2 -2.6L13 -1.8Q10.6 -0.2 8.2 -2.4Z'
export const GIRL_MOUTH = 'M11.8 9L14.8 8.4'
/** Open, crying out: a dark wedge in from the lips, the lower lip dropped. */
export const GIRL_MOUTH_OPEN = 'M15.6 6L10.2 8.4L15.4 12.2Z'
export const GIRL_SMILE = 'M11.4 8.4Q12.8 10 15 8.6'

export type Eye = 'open' | 'wide' | 'down' | 'fierce'
export type Mouth = 'shut' | 'open' | 'smile'

/**
 * A pale girl's face laid over HEAD_GIRL: the paper face and neck with an ink
 * edge, then the features in ink. Place with the head's own transform.
 */
export function GirlFace({
  t,
  eye = 'open',
  mouth = 'shut',
  fringe,
}: {
  t: string
  eye?: Eye
  mouth?: Mouth
  /** Hair over the brow, in ink, drawn after the face. */
  fringe?: string
}) {
  return (
    <g transform={t}>
      <path d={GIRL_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={GIRL_JAW} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
      <path
        d={
          (eye === 'fierce' ? GIRL_BROW_FIERCE : eye === 'wide' ? GIRL_BROW_RAISED : GIRL_BROW) +
          (eye === 'down' ? GIRL_EYE_DOWN : eye === 'wide' ? '' : GIRL_EYE_OPEN)
        }
        fill={INK}
      />
      {eye === 'wide' && (
        <>
          <circle cx={10.8} cy={-3.6} r={2.5} fill="none" stroke={INK} strokeWidth={1} />
          <circle cx={11.6} cy={-3.6} r={1.2} fill={INK} />
        </>
      )}
      {mouth === 'open' ? (
        <path d={GIRL_MOUTH_OPEN} fill={INK} />
      ) : (
        <path
          d={mouth === 'smile' ? GIRL_SMILE : GIRL_MOUTH}
          fill="none"
          stroke={INK}
          strokeWidth={1}
          strokeLinecap="round"
        />
      )}
      {fringe && <path d={fringe} fill={INK} />}
    </g>
  )
}

/**
 * Jane's hair at Gateshead: her own, dark and loose, hanging to her
 * shoulders. INK, behind the head (pass as girl()'s `hair`); the lock on her
 * brow is JANE_GIRL_FRINGE, drawn after the face; JANE_GIRL_HAIR_CUTS are the
 * paper strands, so the black hair reads as hair and not as a hood.
 */
export const JANE_GIRL_HAIR =
  'M14.6 -11.2C13 -18.8 6.4 -22.6 -0.6 -22.2C-10.8 -21.6 -17.8 -14 -18.2 -3.4C-18.6 5.6 -18.4 14.2 -17 23.4L-14.2 28.4L-12.4 24.4L-9.6 29.4L-8 24.8L-5 27C-5.6 20 -5.4 14 -4 8C-2.6 2 -1.2 -5 2.2 -10.4C6 -13.8 10.8 -13.4 14.6 -11.2Z'
export const JANE_GIRL_FRINGE =
  'M1 -13C5.6 -15.2 11 -15 14.8 -11.4L14.6 -9C13 -10.4 11 -10.8 9.4 -10.2C8.4 -11.6 6 -11.8 4.4 -10.2C3.4 -11.2 2 -11 1 -9.6Z'
export const JANE_GIRL_HAIR_CUTS =
  gouge(10, -18.8, -6, -18.8, 0.55, -1.4) +
  gouge(5, -16.2, -13, -9.2, 0.6, -1.8) +
  gouge(-0.4, -12.6, -15.2, 2, 0.6, -1.6) +
  gouge(-3.6, -5, -15.6, 14, 0.55, -1) +
  gouge(-6, 3, -13.6, 23, 0.5, -0.6) +
  gouge(-8.4, 11, -10.6, 26, 0.45, 0)

/**
 * Jane's hair at Lowood: "plain locks combed from their faces, not a curl
 * visible" (Chapter 5). Combed straight back from the brow and cut short at
 * the nape. INK over the head (girl()'s `hair`), JANE_GIRL_HAIR_COMBED_CUTS in
 * paper. Helen and the other girls wear it the same way.
 */
export const JANE_GIRL_HAIR_COMBED =
  'M14.4 -11.6C12.8 -18.8 6.4 -22 -0.6 -21.6C-10.6 -21 -17.2 -13.6 -17.6 -3.4C-17.8 3.6 -16.6 10 -13.4 15L-7.6 13.4C-9.4 8 -9.8 2 -8.6 -2.8C-7 -8.4 -2.4 -11.8 3.6 -12.6C7.6 -13.2 11.2 -12.8 14.4 -11.6Z'
export const JANE_GIRL_HAIR_COMBED_CUTS =
  gouge(11, -17.4, -6, -18, 0.5, -1.4) +
  gouge(6, -14.8, -12.4, -8.4, 0.55, -1.6) +
  gouge(0.4, -12, -14.6, 1.6, 0.55, -1.4) +
  gouge(-6, -5, -13.2, 10.6, 0.5, -0.8)
/** The hairline at the brow for combed hair: a fine ink edge over the paper face. */
export const GIRL_HAIRLINE =
  'M1.2 -12.8C5.6 -15 11 -14.8 14.4 -11.8L14.2 -10.8C11 -13.2 5.8 -13.4 1.4 -11.6Z'

/** The paper frill of a tucker at the throat, in the head's frame. */
export const TUCKER =
  'M-3.6 23.6C0 22.6 4.6 22.8 8 24.2C8.6 25.6 8.4 27 7.6 28C3.6 28.6 -0.6 28.4 -3.8 27.2C-4.4 26 -4.4 24.8 -3.6 23.6Z'

/**
 * Jane as a child, whole: girl() with her head, hair and pale face, and what
 * she wears where she is. `dress`:
 * - 'pinafore': Gateshead, her dark frock and a paper pinafore over it.
 * - 'frock': Gateshead without the pinafore (Chapter 4, sent down to meet
 *   Brocklehurst after Bessie has "denuded me of my pinafore").
 * - 'lowood': the brown frock made high, with the paper tucker at the throat
 *   and the holland pocket at the waist; her hair combed back.
 * - 'night': Lowood at night, her frock over her night-dress, whose paper hem
 *   shows below it, and her feet bare ("I ... put on my frock over my
 *   night-dress, and, without shoes, crept from the apartment", Chapter 9).
 * `pinafore` is the panel's own shape for the pinafore, in the figure's
 * frame (it depends on the pose); without it the pinafore is left out. The
 * holland pocket and the night-dress's hem depend on the pose too, so a
 * panel passes them as `paperOver` (paper shapes with an ink edge), and the
 * folds over the pinafore as `inkOver` (ink lines).
 */
export function JaneGirl({
  pose,
  dress = 'pinafore',
  eye = 'open',
  mouth = 'shut',
  pinafore,
  extraCuts,
  paperOver,
  inkOver,
  transform,
  className,
  style,
}: {
  pose: Omit<Parameters<typeof girl>[0], 'head' | 'hair'> & {
    head: { at: P; rot?: number; scale?: number }
  }
  dress?: 'pinafore' | 'frock' | 'lowood' | 'night'
  eye?: Eye
  mouth?: Mouth
  pinafore?: string
  /** Paper cuts of the panel's own over the figure: folds of the frock. */
  extraCuts?: string
  /** Paper shapes with an ink edge over the frock: the holland pocket, a hem. */
  paperOver?: string
  /** Ink lines over the paper: the folds of the pinafore. */
  inkOver?: string
  transform?: string
  className?: string
  style?: CSSProperties
}) {
  const lowood = dress === 'lowood' || dress === 'night'
  const head = { d: HEAD_GIRL, ...pose.head }
  const ht = headAt(pose.facing, head.at, head.rot ?? 0, head.scale ?? 1)
  const parts = girl({
    ...pose,
    head,
    hair: lowood ? JANE_GIRL_HAIR_COMBED : JANE_GIRL_HAIR,
    feet: dress === 'night' ? 'bare' : pose.feet,
  })
  // The paper arms and hands go last in girl()'s order; the face goes between
  // the head and the near arm, so split the parts there.
  const headIndex = parts.findIndex((q) => q.d === HEAD_GIRL)
  const before = parts.slice(0, headIndex + 1)
  const after = parts.slice(headIndex + 1)
  return (
    <g transform={transform} className={className} style={style}>
      <Figure parts={before} cuts={extraCuts}>
        <path
          d={lowood ? JANE_GIRL_HAIR_COMBED_CUTS : JANE_GIRL_HAIR_CUTS}
          transform={ht}
          fill={PAPER}
        />
        {dress === 'pinafore' && pinafore && (
          <path d={pinafore} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
        )}
        {paperOver && (
          <path d={paperOver} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
        )}
        {inkOver && (
          <path d={inkOver} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
        )}
        {lowood && <path d={TUCKER} transform={ht} fill={PAPER} />}
        <GirlFace
          t={ht}
          eye={eye}
          mouth={mouth}
          fringe={lowood ? GIRL_HAIRLINE : JANE_GIRL_FRINGE}
        />
      </Figure>
      <Figure parts={after} halo={0} />
    </g>
  )
}

// ── JANE, GROWN ─────────────────────────────────────────────────────────────

/** Jane grown: a small face, the bridge of the nose rising a little, the chin decided. */
export const HEAD_JANE =
  'M-7 24C-9 19 -13.5 15 -14.5 6C-15.5 -8.5 -7 -19 3 -19C10.8 -19 15 -14.4 15 -8.6L15.4 -4.8L15 -3.4L16.6 -1L19.8 3.8L15.6 5.4L16 8L14.8 9.4L15.8 11.4C15.8 16.6 12.6 19.2 8 19.4L6 24Z'
/** Her pale face and neck, laid over HEAD_JANE in PAPER with an ink edge. */
export const JANE_FACE =
  'M0.6 -12.6C5 -14.4 10.8 -14.2 14.2 -11.8L15 -8.6L15.4 -4.8L15 -3.4L16.6 -1L19.8 3.8L15.6 5.4L16 8L14.8 9.4L15.8 11.4C15.8 16.6 12.6 19.2 8 19.4L6.6 25.6L-2.4 25.8C-1.4 20 -0.6 15 0 10C-0.8 2 -0.8 -6 0.6 -12.6Z'
export const JANE_JAW = 'M8 19.4Q2.8 18.8 0.8 13.8'
/** Her features in ink: a clear brow, the eye, a firm mouth a little long, the nostril. */
export const JANE_BROW = gouge(6.4, -7.6, 13.8, -7, 0.8)
export const JANE_EYE = 'M7 -3.4Q10 -5.6 12.8 -3.6Q10 -1.8 7 -3.4Z'
export const JANE_EYE_DOWN = 'M7 -3Q10 -1 12.8 -2.6L12.6 -1.8Q10 0 7.2 -2.2Z'
export const JANE_MOUTH = 'M10.6 10.4L15 9.8'
export const JANE_NOSTRIL = 'M16.4 4.8Q17.4 5.4 18.2 5'
/**
 * Her hair "brushed ... very smooth": INK over the head, flat over the crown
 * from the brow, down over the top of the ear, and gathered into a knot at
 * the back. JANE_HAIR_CUTS are its gloss, long unbroken paper lines.
 */
export const JANE_HAIR =
  'M14.4 -11.4C12.8 -18.4 6.4 -21.8 -0.6 -21.4C-10.4 -20.8 -16.8 -13.2 -17.2 -3.2C-17.4 2.8 -16.4 8.2 -14 12.4L-9.4 10.6C-10.6 6.6 -10.4 2.6 -7.4 0.6C-3.6 -1.8 -1 -6 1.6 -10.4C5.6 -12.8 10.6 -12.4 14.4 -11.4Z' +
  'M-25.2 3.8a7 6.4 0 1 0 14 0a7 6.4 0 1 0 -14 0Z'
export const JANE_HAIR_CUTS =
  gouge(11.4, -17.4, -5, -17.8, 0.5, -1.4) +
  gouge(7, -14.6, -12.4, -9.4, 0.5, -1.8) +
  gouge(1.4, -11.6, -14.8, -1.4, 0.5, -1.4) +
  gouge(-22.4, 1.4, -14.6, 0.8, 0.45, -1.2) +
  gouge(-22, 7.2, -14.6, 7.8, 0.45, 1.2)

/**
 * Jane's grown face over HEAD_JANE, with her hair, her features and her
 * tucker. Place with the head's own transform. Pass `hair={false}` for a
 * panel that draws her bonnet over it.
 */
export function JaneFace({
  t,
  down = false,
  hair = true,
  tucker = true,
}: {
  t: string
  down?: boolean
  hair?: boolean
  tucker?: boolean
}) {
  return (
    <g transform={t}>
      {hair && <path d={JANE_HAIR} fill={INK} />}
      {hair && <path d={JANE_HAIR_CUTS} fill={PAPER} />}
      <path d={JANE_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={JANE_JAW} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
      {hair && (
        <path
          d="M0.6 -13C5 -15 10.8 -14.8 14.4 -12L14.2 -10.8C10.8 -13.2 5.2 -13.4 0.8 -11.6Z"
          fill={INK}
        />
      )}
      <path d={JANE_BROW + (down ? JANE_EYE_DOWN : JANE_EYE)} fill={INK} />
      <path
        d={JANE_MOUTH + JANE_NOSTRIL}
        fill="none"
        stroke={INK}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {tucker && (
        <path
          d={TUCKER}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.7}
          transform="translate(-0.6 1.6)"
        />
      )}
    </g>
  )
}

// ── ROCHESTER ───────────────────────────────────────────────────────────────

/**
 * Rochester: a square head, the heavy brow jutting in the profile itself, a
 * broad decisive nose with a full nostril, a grim mouth and a heavy square
 * chin and jaw. Ink: "He had a dark face".
 */
export const HEAD_ROCHESTER =
  'M-9 26C-10 20 -15.6 15.6 -16.6 6C-17.6 -9 -9 -20.6 2.6 -20.6C11.6 -20.6 16.4 -16.4 16.8 -11L17.4 -7.6L19.8 -5.6L17.6 -3.4L22.6 4.8L17.8 6.6L18.4 8.6L16.8 10L18.2 12.6C18.4 18.8 15.4 22.6 10 23.2L8.4 26Z'
/**
 * "the horizontal sweep of his black hair": INK, cut straight across the
 * square forehead, and short at the back. ROCHESTER_HAIR_CUTS are the paper
 * lines of its sweep.
 */
export const ROCHESTER_HAIR =
  'M17.6 -12.4C16.8 -19.6 10 -23.8 1 -23.6C-10.6 -23.2 -18.8 -15 -18.8 -3.4C-18.8 4 -17.2 10 -14 14.4L-8.8 12C-10.6 7 -10.8 1.6 -9.8 -3C-8.6 -8.6 -3 -11.2 4 -11.6C9 -12 13.6 -12 17.6 -12.4Z'
export const ROCHESTER_HAIR_CUTS =
  gouge(15.4, -15.4, -2, -17.4, 0.6, -0.6) +
  gouge(12, -13.4, -8, -14.6, 0.6, -1) +
  gouge(3, -20.4, -12.6, -11, 0.6, 1.2) +
  gouge(-6, -6, -14.4, 6, 0.55, 0.8)
/**
 * His features, cut in paper: a line of light along the forehead above the
 * black brows (so the brows read as black, "broad and jetty"), the eye cut
 * narrow under the brow ("ireful and thwarted"), the full nostril, the crease
 * to the mouth, the grim straight mouth, and the line of the jaw.
 */
export const ROCHESTER_CUTS =
  gouge(6, -10.6, 16, -9.8, 0.6) +
  'M8.6 -3.2Q11.6 -4.8 14.6 -3.4Q11.6 -2.2 8.6 -3.2Z' +
  gouge(16.2, 7, 19.4, 5.8, 0.45) +
  gouge(16.4, 5, 13, 9.8, 0.4, -0.6) +
  gouge(12, 11.2, 17.4, 10.8, 0.55) +
  gouge(4, 8, 9.6, 21, 0.55, 1)

// ── JOHN REED (Chapter 1) ───────────────────────────────────────────────────
// "John Reed was a schoolboy of fourteen years old ... large and stout for his
// age, with a dingy and unwholesome skin; thick lineaments in a spacious
// visage, heavy limbs and large extremities. He gorged himself habitually at
// table, which made him bilious, and gave him a dim and bleared eye and
// flabby cheeks." So a big, heavy head, a jowl under the jaw, a thick nose
// and lips, and a small dull eye; an ink face. Draw him with man() at a head
// scale of about 0.86 beside Jane's 0.68, `width` 44, `arm` 12 and `leg` 14.
// His hair and dress are not described: short, plain, and a schoolboy's
// jacket and trousers.

/** John Reed's head, his mouth open ("What! what!"): a notch in the profile between the lips. */
export const HEAD_JOHN_REED =
  'M-9 26C-11.4 21 -17.4 16 -18.4 6C-19.4 -9.4 -10 -21.4 2 -21.4C11.4 -21.4 16.8 -16.4 17 -10.2L17.2 -6.2L16.6 -4.2L21 3.2L17 5.2L17.8 6.8L14.6 8.4L17.4 10.6L17.8 12.2C18.6 15 17.8 17.4 15.8 18.8C16.4 21.4 14.8 23.8 11.4 24.4L8.6 26Z'
/**
 * His features, cut in paper: a low brow, the small dim eye half closed under
 * a heavy lid, the fold of the flabby cheek, the jowl, a nostril.
 */
export const JOHN_REED_CUTS =
  gouge(6.6, -7.4, 13.8, -7.6, 0.7) +
  'M9 -3.4Q11.2 -4.6 13.4 -3.6L13.2 -2.8Q11.2 -2.4 9 -3.4Z' +
  gouge(3.6, 2, 10.6, 14.4, 0.6, 2) +
  gouge(7.6, 19.4, 14.2, 18.8, 0.5, 0.6) +
  gouge(15.6, 5.6, 18.2, 4.8, 0.4)
/** His hair, short and plain: INK over the crown, its paper strands cut in JOHN_REED_HAIR_CUTS. */
export const JOHN_REED_HAIR =
  'M16.4 -11.6C15.6 -18.6 9.6 -23.4 1.4 -23.2C-10 -23 -19.2 -15 -19.6 -3C-19.8 4 -18.6 9.4 -16.4 13.4L-11.6 11.6C-12.6 6.8 -12.2 1.4 -10.4 -2.6C-7.8 -8.2 -2.2 -11.4 4.4 -12C9 -12.4 13 -12.2 16.4 -11.6Z'
export const JOHN_REED_HAIR_CUTS =
  gouge(13.4, -15.8, -2, -18.6, 0.55, -0.8) +
  gouge(7.6, -13.4, -10.6, -10.6, 0.55, -1.2) +
  gouge(0, -11.6, -15.6, 0.4, 0.5, -1) +
  gouge(-9.6, -3.6, -15.8, 8.4, 0.5, -0.6)

// ── MRS REED (Chapters 1 to 4, 21) ──────────────────────────────────────────
// "Mrs. Reed might be at that time some six or seven and thirty; she was a
// woman of robust frame, square-shouldered and strong-limbed, not tall, and,
// though stout, not obese: she had a somewhat large face, the under jaw being
// much developed and very solid; her brow was low, her chin large and
// prominent, mouth and nose sufficiently regular; under her light eyebrows
// glimmered an eye devoid of ruth; her skin was dark and opaque, her hair
// nearly flaxen ... she dressed well" (Chapter 4); "her usually cold composed
// grey eye" (Chapter 4); "her cap flying wide, her gown rustling stormily"
// (Chapter 2). So an INK face, large, with a heavy jaw and a big chin; her
// light eyebrows and her flaxen hair are cut in PAPER, and her eye is a cold
// paper slit with a straight upper lid; she wears a white cap with a frill
// (MRS_REED_CAP, paper) over her hair, and a dark gown cut square at the
// shoulders. The grey of her eye is left to the words. Draw her a little
// broader than the other women and no taller.

/** Mrs Reed: a large face, a low brow, the under jaw heavy and the chin big and prominent. */
export const HEAD_MRS_REED =
  'M-8 26C-10 20 -15.4 16 -16.4 6C-17.4 -8.6 -8.8 -19.6 2 -19.6C10 -19.6 14.6 -15.8 15.2 -10.8L15.6 -6.4L15.2 -4.6L19.6 3.6L15.6 5.2L16 7.8L14.8 9.4L16.4 11.4L17.6 15.2C17.8 19.6 15.2 22.6 10.6 23.4C9.2 24.2 8.6 25 8.2 26Z'
/**
 * Her features, cut in paper: the light eyebrow, the cold eye with its
 * straight lid, the firm mouth, the line of the heavy jaw, a nostril.
 */
export const MRS_REED_CUTS =
  gouge(6, -7.4, 14, -7, 0.85) +
  'M7.8 -3.4L13.6 -3.6Q11 -1.6 8.2 -2.6Z' +
  gouge(10.6, 10.8, 15.6, 10.4, 0.5) +
  gouge(3.2, 6, 9.4, 21.4, 0.55, 1.4) +
  gouge(16, 4.6, 18.4, 4, 0.4)
/**
 * Her flaxen hair at the brow and temple, under the cap: PAPER, with
 * MRS_REED_HAIR_LINES stroked over it in ink.
 */
export const MRS_REED_HAIR =
  'M12.6 -12.6C9 -15.2 3 -15.6 -1.6 -13.8C-5.6 -12 -7.8 -8 -7.4 -3.6C-4.8 -6.8 -1.2 -9.6 3 -10.8C6.4 -11.8 9.8 -12 12.6 -12.6Z'
export const MRS_REED_HAIR_LINES = 'M10 -13.2Q2 -13.6 -4 -8.4M6.4 -11.8Q0 -11 -5.6 -5.4'
/**
 * Her cap: white muslin over the crown and the back of the head, with a frill
 * standing round the face. PAPER with an ink edge (stroke 1); MRS_REED_CAP_FRILL
 * in ink over it.
 */
export const MRS_REED_CAP =
  'M13.4 -12C12.6 -19.6 6.4 -25 -1.6 -25C-12.4 -25 -20.6 -17 -20.4 -5C-20.2 4 -17.6 11 -13.6 15.4L-9.4 13.2C-12 8.6 -13.2 2.6 -12.4 -2.6C-11.4 -9.4 -6.4 -13.8 0.4 -14.6C5.4 -15.2 9.8 -14 13.4 -12Z'
export const MRS_REED_CAP_FRILL =
  'M13 -12.4Q12.4 -15.6 9.6 -14.6Q8.4 -17 5.4 -15.6Q3.8 -17.8 1 -16.2Q-1 -18 -3.6 -15.8Q-6 -17 -7.6 -14Q-10.2 -14.4 -10.8 -11.2Q-13 -10.6 -12.6 -7.4M-14.6 -18.2Q-9 -21.6 -2 -21.8'

// ── MR BROCKLEHURST (Chapters 4 and 7) ──────────────────────────────────────
// "a black pillar!—such, at least, appeared to me, at first sight, the
// straight, narrow, sable-clad shape standing erect on the rug: the grim face
// at the top was like a carved mask, placed above the shaft by way of
// capital"; "the two inquisitive-looking grey eyes which twinkled under a
// pair of bushy brows"; "what a great nose! and what a mouth! and what large
// prominent teeth!"; "the two large feet planted on the rug" (Chapter 4);
// "that gaunt outline"; "buttoned up in a surtout, and looking longer,
// narrower, and more rigid than ever"; "the black marble clergyman" (Chapter
// 7). So he is the tallest figure in any panel and the narrowest, black from
// the neck to the ground, his surtout buttoned to the throat and falling
// straight to the shins, with no waist to it: a column (draw the body as one
// straight shape, BROCKLEHURST_BODY in the panel's own frame, with the arms
// close to it). His face is INK, long and hard, a great nose and a long jaw;
// the bushy brows, the small twinkling eye and the row of large teeth are cut
// in paper, and a long cut down the cheek gives it the edge of a carved mask.
// His hair is not described: plain and dark. A clergyman's white neckcloth
// at the throat (BROCKLEHURST_NECKCLOTH) sets the head off the shaft, as a
// capital sits on a column. The grey of his eyes is left to the words.

/** Brocklehurst: a long hard head, a great nose, a big mouth, a long jaw. */
export const HEAD_BROCKLEHURST =
  'M-8 28C-9 22 -14.4 17 -15.4 7C-16.4 -9 -8.4 -21.4 3 -21.4C11.4 -21.4 16 -16.6 16.4 -10.6L16.8 -7.2L19.6 -5.8L17.4 -3.2L25 8L18.4 9.6L19.2 11.4L17.8 12.4L19.4 13.6L18.8 16.4L17.4 17.6C18.2 22 15.4 25.6 9.6 26.4L7.6 28Z'
/**
 * His features, cut in paper: the bushy brows as bristling cuts, the small
 * eye under them, the side of the great nose, the row of large teeth, the
 * crease to the mouth, and the long cut down the cheek that makes the face a
 * mask.
 */
export const BROCKLEHURST_CUTS =
  gouge(6.6, -8.4, 10.6, -9.8, 0.75, 0.3) +
  gouge(9.8, -9.6, 14.4, -9.2, 0.75) +
  gouge(13.4, -8.6, 18.2, -6.6, 0.7) +
  gouge(8, -7.2, 11.6, -7.8, 0.5) +
  'M9.8 -3.4Q12 -4.8 14.2 -3.6Q12 -2.4 9.8 -3.4Z' +
  gouge(17.2, -1.2, 21.8, 7, 0.45, -0.4) +
  'M13 10.2H18.4V12.8H13Z' +
  gouge(16.6, 4.4, 12.4, 10, 0.4, -0.6) +
  gouge(3, -12, 1.6, 18, 0.65, 1.6)
/** The divisions between his teeth, stroked in ink over the paper. */
export const BROCKLEHURST_TEETH = 'M14.8 10.2V12.8M16.6 10.2V12.8'
/** His hair, plain and dark: INK, with paper strands in BROCKLEHURST_HAIR_CUTS. */
export const BROCKLEHURST_HAIR =
  'M16.6 -11.2C15.6 -18.6 9.6 -23.6 1.4 -23.4C-10 -23.2 -18.4 -15 -18.6 -3.2C-18.8 4.4 -17.4 10.4 -14.4 15L-9.6 12.8C-11.6 8 -11.8 2.6 -10.6 -1.8C-8.6 -8.4 -2.4 -12.2 4.6 -12.4C9 -12.6 13 -12 16.6 -11.2Z'
export const BROCKLEHURST_HAIR_CUTS =
  gouge(13.6, -15.6, -1, -18.8, 0.5, -0.8) +
  gouge(8, -13.6, -10, -11, 0.5, -1.2) +
  gouge(-0.4, -12, -15, -0.6, 0.5, -1) +
  gouge(-9.2, -2.6, -15.2, 9, 0.45, -0.6)
/** A clergyman's white neckcloth, high under the jaw. PAPER, in the head's frame. */
export const BROCKLEHURST_NECKCLOTH =
  'M-6 25.4C-1 23.6 6 23.6 11.6 25.8C12.6 29 12.2 32.6 10.4 35C4.4 36 -2 35.4 -6.6 33.6C-7.6 30.8 -7.4 28 -6 25.4Z'

// ── MISS TEMPLE (Chapters 5 to 10) ──────────────────────────────────────────
// "she looked tall, fair, and shapely; brown eyes with a benignant light in
// their irids, and a fine pencilling of long lashes round, relieved the
// whiteness of her large front; on each of her temples her hair, of a very
// dark brown, was clustered in round curls ... her dress, also in the mode of
// the day, was of purple cloth, relieved by a sort of Spanish trimming of
// black velvet; a gold watch ... shone at her girdle ... refined features; a
// complexion, if pale, clear; and a stately air and carriage" (Chapter 5);
// "her face, naturally pale as marble" (Chapter 7). So she is the tallest
// woman in any panel and stands straight; her face is INK, finely cut, a
// long lash on the eye; her very dark hair is gathered behind, with round
// curls clustered at the temple (TEMPLE_CURLS, cut as rings); her dress is
// ink with its trimming cut as paper bands, and the gold watch is a small
// paper disc at her waist. Purple, brown and gold are left to the words.

/** Miss Temple: a refined profile, a high clear brow. */
export const HEAD_TEMPLE =
  'M-7 24C-9 19 -13.6 15 -14.6 6C-15.6 -9 -7 -19.6 3 -19.6C11 -19.6 15.2 -15 15.2 -9L15.4 -5L19.6 3.4L15.4 5L15.8 7.8L14.6 9.2L15.6 11.4C15.4 16.4 12.4 19.2 8 19.6L6 24Z'
/** Her features, cut in paper: a fine brow, the eye with its long lashes, the mouth, a nostril. */
export const TEMPLE_CUTS =
  gouge(5.6, -7.8, 13.8, -7.2, 0.8) +
  'M6.8 -3.4Q10 -5.8 13.2 -3.6Q10 -1.6 6.8 -3.4Z' +
  gouge(11, -5, 13.4, -7.4, 0.4) +
  gouge(9.6, 10.2, 14.8, 9.8, 0.6) +
  gouge(15.4, 4.4, 18, 3.8, 0.45)
/** Her very dark hair, gathered behind into a knot. INK, a little beyond the skull. */
export const TEMPLE_HAIR =
  'M14.6 -11.6C13 -18.8 6.6 -22.4 -0.6 -22C-10.8 -21.4 -17.4 -13.6 -17.6 -3.4C-17.8 2.8 -16.4 8.4 -13.8 12.6L-9 10.8C-10.6 6.4 -10.8 1.2 -9.8 -3C-8.4 -8.4 -3.6 -12 2.4 -12.6C7 -13.2 10.8 -12.8 14.6 -11.6Z' +
  'M-26 2.6a7.4 6.6 0 1 0 14.8 0a7.4 6.6 0 1 0 -14.8 0Z'
export const TEMPLE_HAIR_CUTS =
  gouge(11, -17, -6, -18, 0.5, -1.2) +
  gouge(5, -14.6, -13, -7.6, 0.55, -1.6) +
  gouge(-23.2, 0.4, -15, 0, 0.45, -1.2) +
  gouge(-22.8, 5.6, -15, 6.2, 0.45, 1.2)
/** The round curls clustered at her temple, before the ear: INK discs, then TEMPLE_CURL_RINGS in paper. */
export const TEMPLE_CURLS =
  'M-0.4 -9a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0Z' +
  'M-3.6 -3.4a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0Z' +
  'M-2 2.6a3.2 3.2 0 1 0 6.4 0a3.2 3.2 0 1 0 -6.4 0Z'
export const TEMPLE_CURL_RINGS =
  'M1.4 -9a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z' +
  'M-1.8 -3.4a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z' +
  'M-0.4 2.6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0Z'

// ── THE LOWOOD GIRLS, AND HELEN BURNS (Chapters 5 to 9) ─────────────────────
// The girls: "all with plain locks combed from their faces, not a curl
// visible; in brown dresses, made high and surrounded by a narrow tucker about
// the throat" (Chapter 5). So HEAD_GIRL with an INK face (GIRL_INK_CUTS cut in
// paper), JANE_GIRL_HAIR_COMBED over it, and TUCKER at the throat; Jane is the
// one pale face among them.
//
// HELEN: "she looked thirteen or upwards" (Chapter 5); "it lit up her marked
// lineaments, her thin face, her sunken grey eye" (Chapter 7); in her last
// night "her face, pale, wasted, but quite composed ... she smiled as of old"
// and "her forehead was cold, and her cheek both cold and thin" (Chapter 9).
// So she is a head taller than Jane, her face PAPER like Jane's, but thin: a
// longer head (HEAD_HELEN), the cheek hollowed (HELEN_CHEEK), the eye set
// deep under the brow (HELEN_EYE, an ink socket with the eye in it), and a
// gentle mouth that smiles (HELEN_SMILE). Her hair is combed back as every
// Lowood girl's is. The grey of her eye is left to the words.

/** A Lowood girl's features cut in paper on an INK face: brow, eye, mouth. */
export const GIRL_INK_CUTS =
  gouge(7.2, -7.8, 13.6, -7.2, 0.6) +
  'M8 -3.6Q10.6 -5.4 13.2 -3.8Q10.6 -2.2 8 -3.6Z' +
  gouge(11.6, 8.8, 14.6, 8.4, 0.45)

/** Helen: a longer, thinner girl's head; the lineaments marked. */
export const HEAD_HELEN =
  'M-6.4 26C-9 20 -14.4 15.4 -15.2 5C-16.2 -10 -8 -21 2.6 -21C10.6 -21 14.8 -16 15 -10L15.6 -5.6L15.2 -3.8L18.6 3.4L15.4 5L15.8 7.6L14.8 9L15.6 10.8C15.4 15.6 13 18.4 8.6 19L6 26Z'
/** Her pale face and neck, laid over HEAD_HELEN in PAPER with an ink edge. */
export const HELEN_FACE =
  'M1 -13.6C5.6 -15.6 11 -15.2 14.4 -12.6L15 -10L15.6 -5.6L15.2 -3.8L18.6 3.4L15.4 5L15.8 7.6L14.8 9L15.6 10.8C15.4 15.6 13 18.4 8.6 19L7 27.4L-2.6 27.6C-1.4 21 -0.6 16 0 11C-0.8 2 -0.6 -6 1 -13.6Z'
export const HELEN_JAW = 'M8.6 19Q3.6 18.6 1.2 13.4'
/** The deep-set eye: a shadowed socket in ink, the eye itself left paper, and its pupil. */
export const HELEN_BROW = gouge(6.4, -7.6, 14, -6.8, 0.75)
export const HELEN_SOCKET = 'M6.8 -4.2Q10.4 -7.2 14 -4.6L13.6 -1.2Q10.4 -0.6 7.4 -2Z'
export const HELEN_EYE_WHITE = 'M8.4 -3.4Q10.6 -4.8 12.8 -3.6Q10.6 -2.4 8.4 -3.4Z'
export const HELEN_PUPIL = 'M10.2 -3.5a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 1 0 -2.2 0Z'
/** The hollow of her thin cheek, and her smile. Stroke in ink. */
export const HELEN_CHEEK = 'M5.4 1.6Q7.6 7.4 7.2 12.6'
export const HELEN_SMILE = 'M11 9.4Q12.6 11.4 15 9.8'

/**
 * Helen's pale face over HEAD_HELEN, with its features, and her combed hair's
 * hairline. Place with the head's own transform. `eyes` 'open' or 'shut'.
 */
export function HelenFace({ t, eyes = 'open' }: { t: string; eyes?: 'open' | 'shut' }) {
  return (
    <g transform={t}>
      <path d={HELEN_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path
        d={HELEN_JAW + HELEN_CHEEK}
        fill="none"
        stroke={INK}
        strokeWidth={0.8}
        strokeLinecap="round"
      />
      {eyes === 'open' ? (
        <>
          <path d={HELEN_BROW + HELEN_SOCKET} fill={INK} />
          <path d={HELEN_EYE_WHITE} fill={PAPER} />
          <path d={HELEN_PUPIL} fill={INK} />
        </>
      ) : (
        <path d={HELEN_BROW + GIRL_EYE_DOWN} fill={INK} />
      )}
      <path d={HELEN_SMILE} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      <path
        d="M1 -14C5.6 -16.2 11 -16 14.6 -13L14.4 -11.8C11 -14.4 5.6 -14.6 1.2 -12.6Z"
        fill={INK}
      />
    </g>
  )
}

// ── ROCHESTER AT FERNDEAN (Chapters 37 and 38) ──────────────────────────────
// "His form was of the same strong and stalwart contour as ever: his port was
// still erect, his hair was still raven black; nor were his features altered
// or sunk"; "a man without a hat"; "one saw that all to him was void
// darkness"; "his thick and long uncut locks"; "this shaggy black mane"; "a
// tear slide from under the sealed eyelid"; "Blind as he was, smiles played
// over his face" (Chapter 37). So the same HEAD_ROCHESTER, with its jutting
// brow and square jaw, under FERNDEAN_HAIR in place of ROCHESTER_HAIR: his
// black hair grown long over the ear and the collar, ragged at the ends, and
// fallen untidily on the brow. His eye is cut SHUT (ROCHESTER_BLIND_CUTS), a
// lid under the brow and no eye beneath it; ROCHESTER_BLIND_SMILE_CUTS turn
// the mouth up, for the wedding and after.
//
// NO INJURY IS DRAWN. "the left arm, the mutilated one, he kept hidden in his
// bosom" (Chapter 37): in a panel where that arm shows, it is folded across
// his chest into his coat and no hand is drawn; where it is on the far side
// of him, it is not drawn at all. "the scar of fire on your forehead" and the
// scorched brows are left to the words. Drawn first for "Ferndean" and
// "Reader, I married him" (moments 22 and 23).

/** His long uncut hair: INK over HEAD_ROCHESTER, in its frame. */
export const FERNDEAN_HAIR =
  'M18 -12.6C17.4 -20.4 10 -25 0.6 -24.8C-11.6 -24.4 -20.4 -16 -20.6 -3.4C-20.8 6 -19.6 14 -16.4 21.4L-13.6 18.6L-12.2 24.6L-9.2 20.4L-6.4 25.4L-5 19C-6.8 13 -8.4 7 -8.8 1C-8.8 -4 -6.6 -8.4 -2 -10.4C1 -9 4.4 -8.6 7.6 -10.4C10.6 -9.2 14.4 -9.6 18 -12.6Z'
/** Its long strands, cut in PAPER. */
export const FERNDEAN_HAIR_CUTS =
  gouge(15, -16, -2, -20.4, 0.6, -0.8) +
  gouge(11, -13.4, -12, -14.6, 0.6, -1.2) +
  gouge(2, -21, -16, -6, 0.6, 1.4) +
  gouge(-6, -9, -15, 14, 0.55, 0.8) +
  gouge(-11, -4, -17.4, 18, 0.5, 0.6)
/**
 * His face, blind, cut in PAPER: ROCHESTER_CUTS with the line of light on the
 * brow moved down below the shaggy hairline and the eye shut under its lid;
 * the nostril, the crease, "those lips so sternly sealed" and the jaw as
 * before.
 */
const FERNDEAN_FACE_CUTS =
  gouge(9, -9.2, 16.4, -8.8, 0.55) +
  gouge(8.2, -3.6, 15, -3.2, 0.7, 1.3) +
  gouge(16.2, 7, 19.4, 5.8, 0.45) +
  gouge(16.4, 5, 13, 9.8, 0.4, -0.6) +
  gouge(4, 8, 9.6, 21, 0.55, 1)
export const ROCHESTER_BLIND_CUTS = FERNDEAN_FACE_CUTS + gouge(12, 11.2, 17.4, 10.8, 0.55)
/** The same, the mouth turned up: "smiles played over his face". */
export const ROCHESTER_BLIND_SMILE_CUTS =
  FERNDEAN_FACE_CUTS + gouge(11.4, 10.4, 17.6, 10.6, 0.55, 0.9)

// ── A WOMAN, GROWN ──────────────────────────────────────────────────────────
// Cut for moments 6 to 10 and used by every panel from Thornfield on, for
// grown Jane and every grown woman: one builder, so that Jane is the same
// height and the same shape in every panel from Chapter 11 to the end.

/**
 * A grown woman from her joints, as girl() builds a girl: the far arm, any
 * hair that hangs behind the head, the toes of her shoes under the hem, the
 * gown (gown(), or `skirt`, a shape of the panel's own for a woman seated),
 * the head, the near arm. `arms`: 'long', sleeves to the wrist in ink and the
 * hands in PAPER (Jane, Mrs Fairfax, Grace Poole: day dress, and pale skin
 * where the text gives it); 'bare', arms and hands in PAPER; 'ink', arms and
 * hands in ink (a dark-skinned woman in an evening gown: Blanche Ingram). With
 * `paperGown` the gown is cut in PAPER with an ink edge (white muslin or
 * satin).
 */
export function woman(p: {
  facing: 1 | -1
  neck: P
  waist: P
  hemY: number
  head: { d: string; at: P; rot?: number; scale?: number }
  hair?: string
  near: { arm: P[]; hand?: Hand }
  far: { arm: P[]; hand?: Hand }
  gown?: { shoulder?: number; waistW?: number; front?: number; back?: number }
  skirt?: string
  arm?: number
  arms?: 'long' | 'bare' | 'ink'
  paperGown?: boolean
  /** The ankle points of the shoes that show under the hem. */
  toes?: P[]
  shoe?: number
}): Part[] {
  const f = p.facing
  const aw = p.arm ?? 7.4
  const arms = p.arms ?? 'long'
  const paperArm = arms === 'bare'
  const paperHand = arms !== 'ink'
  const hand = (arm: P[], h?: Hand): Part[] =>
    h && arm.length > 1
      ? h.parts.map((q) => ({ ...q, t: handAt(arm, f, h), paper: paperHand, edge: 0.9 }))
      : []
  const arm = (pts: P[], near: boolean): Part[] =>
    pts.length > 1
      ? [{ d: line(pts), w: aw, paper: paperArm, edge: 1, sep: paperArm ? 0 : near ? 1.3 : 0 }]
      : []
  const s = p.shoe ?? 0.8
  const toe = ([x, y]: P): Part => ({
    d: `M${x - f * 3 * s} ${y - 4 * s}L${x + f * 7 * s} ${y - 4 * s}C${x + f * 11 * s} ${y - 3 * s} ${x + f * 12 * s} ${y - 1 * s} ${x + f * 12 * s} ${y + s}L${x - f * 3 * s} ${y + s}Z`,
  })
  const ht = headAt(f, p.head.at, p.head.rot ?? 0, p.head.scale ?? 1)
  return [
    ...arm(p.far.arm, false),
    ...hand(p.far.arm, p.far.hand),
    ...(p.hair ? [{ d: p.hair, t: ht }] : []),
    ...(p.toes ?? []).map(toe),
    {
      d:
        p.skirt ??
        gown(p.neck, p.waist, p.hemY, f, {
          shoulder: 24,
          waistW: 16,
          front: 26,
          back: 30,
          ...p.gown,
        }),
      paper: p.paperGown,
      edge: 1.2,
    },
    { d: p.head.d, t: ht },
    ...arm(p.near.arm, true),
    ...hand(p.near.arm, p.near.hand),
  ]
}

/**
 * An apron over the front of a skirt, from the waist `w` down to `hemY`,
 * `wide` across, its far edge `back` behind the waist: Mrs Fairfax's "snowy
 * muslin apron", Grace Poole's. PAPER, with an ink edge.
 */
export function apron(w: P, hemY: number, facing: 1 | -1, wide = 26, back = 4): string {
  const f = facing
  const x0 = w[0] - f * back
  const x1 = w[0] + f * (wide - back)
  return `M${x0} ${w[1] + 1}L${x1} ${w[1] + 1}C${x1 + f * 3} ${w[1] + (hemY - w[1]) * 0.5} ${x1 + f * 4} ${hemY - 10} ${x1 + f * 2} ${hemY - 4}L${x0 + f * 2} ${hemY - 2}C${x0 - f * 1} ${hemY - 30} ${x0} ${w[1] + 20} ${x0} ${w[1] + 1}Z`
}

// ── MRS FAIRFAX ─────────────────────────────────────────────────────────────
// "the neatest imaginable little elderly lady, in widow's cap, black silk
// gown, and snowy muslin apron" (Chapter 11); "this affable and kind little
// widow"; "I am a little deaf". So she is small, a little smaller than Jane,
// in black with a white apron, and her face is ink (the text never makes it
// pale), cut mild: a soft chin, a gentle eye, a mouth that smiles. Her white
// cap covers her hair and frames her face with a frill.

/** Her head: a soft profile, a small nose, the chin a little full with age. */
export const HEAD_FAIRFAX =
  'M-7 24C-9 19 -13.8 15 -14.6 6C-15.6 -8.6 -7.4 -19 2.6 -19C10.4 -19 14.6 -14.6 14.8 -8.8L15 -5L14.6 -3.6L18.6 2.6L15 4.2L15.4 6.6L14.2 8L15 10.2C15 14.6 12.6 17.2 9.2 18C10.6 19.8 9.6 21.8 7.4 22.4L6 24Z'
/** Her features, cut in paper: the eye, the brow, the smile, the lines of age. */
export const FAIRFAX_CUTS =
  'M7.6 -3.4Q10.4 -5.2 13 -3.6Q10.4 -2.2 7.6 -3.4Z' +
  gouge(6.8, -7.6, 13.4, -7.4, 0.6) +
  gouge(10.8, 9.6, 14.6, 8.4, 0.55, -0.8) +
  gouge(11.6, 1.2, 9.2, 8.6, 0.4, 0.8) +
  gouge(3.6, -0.6, 7.4, 1.4, 0.35)
/**
 * The widow's cap: white, over the crown and the back of the head to the
 * nape, its front edge framing the face. PAPER with an ink edge; the frill
 * along the front edge is FAIRFAX_FRILL, stroked in ink; the lappet hanging
 * behind the ear is part of the cap.
 */
export const WIDOW_CAP =
  'M14 -12.4C12.6 -20.6 5.4 -25 -3 -24.6C-13.6 -24 -20.4 -15.6 -20 -4.6C-19.8 3 -17.8 9.4 -14.2 14L-11.4 22.6L-7.2 21.8L-8.2 13.4C-9.6 8 -9.4 2 -7 -3C-4 -8.8 2.4 -12.2 8.6 -12.6C10.6 -12.7 12.4 -12.6 14 -12.4Z'
export const FAIRFAX_FRILL =
  'M13.4 -13.6C11 -15 8 -15.2 5.6 -14.4M5.2 -14.6C2.6 -14 0 -12.4 -1.8 -10.2M-2 -10.4C-4 -8 -5.4 -5 -6 -2M-6.2 -2.4C-6.8 0.8 -6.8 4 -6.2 7.2' +
  'M-12.6 -18.6C-15.6 -12 -16.4 -4.6 -15.2 3.4'
/** A wisp of grey hair at the brow, under the cap. Stroke in PAPER. */
export const FAIRFAX_HAIR = 'M12.6 -12.4C9.8 -12.2 6.8 -11.4 4.6 -9.6'

// ── GRACE POOLE ─────────────────────────────────────────────────────────────
// "a woman of between thirty and forty; a set, square-made figure,
// red-haired, and with a hard, plain face" (Chapter 11); "hard-featured and
// staid ... a person of few words" (Chapter 12); she comes "out of her room
// with a basin, or a plate, or a tray in her hand" (Chapter 12). So she is
// broad in the shoulder and waist, her face ink, square in the jaw, with a
// straight brow low over the eye and a straight mouth; a servant's plain cap
// and apron, as the text gives no dress. HER RED HAIR IS LEFT TO THE WORDS:
// red on a head reads at phone width as a wound, so her hair is ink with
// paper strands, under the cap.

/** Her head: square in the jaw, a plain straight nose. */
export const HEAD_GRACE =
  'M-8 25C-10 19 -15 15 -15.8 5C-16.8 -9 -8 -19.6 2.4 -19.6C10.6 -19.6 15 -15 15.4 -9.4L15.6 -5.6L15.2 -4L18.8 2.4L15.4 4L15.8 6.6L14.8 8L16.2 10C16.4 15.6 14.6 18.8 10.4 19.8L7.4 20.4L6.4 25Z'
/** Her features, cut in paper: the brow low and level, a narrow eye, the hard mouth, the jaw. */
export const GRACE_CUTS =
  gouge(6.4, -7, 14.8, -6.6, 0.85) +
  'M8 -2.8Q10.8 -4 13.6 -2.8Q10.8 -1.8 8 -2.8Z' +
  gouge(11, 10.4, 16, 10.2, 0.5) +
  gouge(15.2, 4.6, 12.2, 9, 0.35, -0.4) +
  gouge(4.6, 9, 9.6, 19.4, 0.5, 1)
/**
 * Her plain cap: a mob cap, its soft crown gathered up over the top and back
 * of the head, its band running from above the brow to behind the ear.
 * PAPER with an ink edge.
 */
export const MOB_CAP =
  'M11 -13C12 -20.4 7.6 -27.6 -1.4 -29.2C-11.6 -30.8 -20.4 -24.6 -21.8 -14.4C-22.8 -6.4 -20 0.4 -15.2 4.2L-11 1.6C-12.4 -2.6 -12 -7.4 -9 -10.6C-5.4 -14 1.6 -15 7 -14.4C8.4 -14.2 9.8 -13.6 11 -13Z'
/** The frill of its band, and a gather in its crown, stroked in ink. */
export const MOB_CAP_BAND =
  'M11 -13Q8 -16.2 5 -14.6Q2 -16.6 -1 -14.4Q-4 -15.8 -6.4 -12.6Q-9.8 -12.4 -10.6 -9Q-13.6 -7.2 -12.8 -3.6Q-14.8 -1 -13.2 2.4' +
  'M-3 -27.6Q-6 -22 -12.6 -19.6'
/** Her hair, between the cap and the brow, with its strands cut in paper. */
export const GRACE_HAIR =
  'M15 -11.2C13.2 -15.6 8.8 -17.4 4 -16.8C-0.6 -16.2 -4.2 -13.6 -6.2 -9.6L-2.6 -9C0 -11.6 4.4 -12.8 8.6 -12.4C11 -12.2 13.2 -11.8 15 -11.2Z'
export const GRACE_HAIR_CUTS =
  gouge(12.6, -13.6, 2, -14.4, 0.45, -0.6) + gouge(7.6, -15.6, -3, -12, 0.4, -0.6)

// ── ADÈLE ───────────────────────────────────────────────────────────────────
// "quite a child, perhaps seven or eight years old, slightly built, with a
// pale, small-featured face, and a redundancy of hair falling in curls to her
// waist" (Chapter 11); for the drawing-room, "her curls arranged in
// well-smoothed, drooping clusters, her pink satin frock put on, her long
// sash tied, and her lace mittens adjusted" (Chapter 17). So she is smaller
// than the child Jane, with the same pale girl's face (HEAD_GIRL and
// GirlFace, smaller), and long ink curls to her waist, each ringlet cut round
// in paper. Her pink frock is cut in PAPER with an ink edge; the pink is left
// to the words.

/**
 * Her curls, behind the head, in the frame of HEAD_GIRL: the hair over the
 * crown and a fall of ringlets down her back to the waist (about y 70 at
 * scale 1). INK; ADELE_CURL_CUTS are the paper turns of the ringlets.
 */
export const ADELE_CURLS =
  'M14.6 -11.2C13 -18.8 6.4 -22.6 -0.6 -22.2C-10.8 -21.6 -18.6 -14 -19.4 -3C-20.2 8 -21.6 20 -22.4 32C-23.2 44 -22.6 56 -20.6 66L-16.4 70L-12.6 64L-9.2 70L-6.2 62L-3.4 66L-2.4 56C-3.6 46 -3.6 34 -3 22C-2.6 12 -2 2 0.6 -6C3 -10.6 8 -12.6 14.6 -11.2Z'
export const ADELE_CURL_CUTS =
  gouge(10, -18.8, -6, -18.8, 0.55, -1.4) +
  gouge(4, -15.4, -13.4, -8, 0.55, -1.6) +
  // the ringlets: rows of short curved cuts down the fall
  [6, 16, 26, 36, 46, 56]
    .map(
      (y) =>
        gouge(-19.6, y, -14.6, y + 3, 0.5, 1) +
        gouge(-13, y + 4, -7.6, y + 7, 0.5, 1) +
        gouge(-6.6, y - 2, -3.4, y + 1, 0.45, 1),
    )
    .join('')

// ── BLANCHE INGRAM ──────────────────────────────────────────────────────────
// "Blanche and Mary were of equal stature,—straight and tall as poplars ...
// Blanche was moulded like a Dian"; "The noble bust, the sloping shoulders,
// the graceful neck, the dark eyes and black ringlets were all there;—but her
// face? Her face was like her mother's ... the same low brow, the same high
// features, the same pride"; "her laugh was satirical, and so was the
// habitual expression of her arched and haughty lip"; "Miss Ingram was dark
// as a Spaniard"; "The sisters were both attired in spotless white" (Chapter
// 17). So she is the tallest woman in any panel, her face, neck and arms INK
// (dark), her gown PAPER (white), her head carried high, a high nose, the
// upper lip arched, and black ringlets falling beside her face, each cut
// round in paper so it reads on the dark. Drawn with the dignity of every
// other figure: the gown is a plain shape of the period, and no body is drawn
// through it.

/** Her head: a low brow, a high-bridged nose, the arched lip, a long neck. */
export const HEAD_BLANCHE =
  'M-6.4 27C-8.6 21 -13.6 15.6 -14.6 6C-15.6 -8.6 -7.4 -19 2.6 -19C9.6 -19 13.6 -15.8 14.4 -11.2L15.2 -8.6L17.6 -6L21.6 3.2L16.8 4.8L17.8 6.4L15.8 7.8L16.4 10.2C16 15.4 12.8 18.2 8.6 18.6L7 27Z'
/** Her features, cut in paper: the arched brow, the large dark eye, the lifted lip, the nostril. */
export const BLANCHE_CUTS =
  gouge(6.2, -8, 14.2, -9, 0.7, -0.8) +
  'M7.2 -4Q10.4 -6.6 13.8 -4.2Q10.4 -1.8 7.2 -4Z' +
  'M14.4 5.6Q15.8 4.4 17.2 5.4' +
  gouge(16.6, 3.6, 19.2, 3.2, 0.35) +
  gouge(10.6, 10.2, 15.6, 9.2, 0.5, -0.5)
/** The pupil of her dark eye, filled in ink over the cut. */
export const BLANCHE_PUPIL = 'M9.4 -4a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0Z'
/**
 * Her hair: black, smooth from a low brow to a knot behind, and a cluster of
 * ringlets falling in front of the ear to the jaw. INK over the head;
 * BLANCHE_HAIR_CUTS cut its gloss and the turns of the ringlets in paper.
 */
export const BLANCHE_HAIR =
  'M14.6 -11.8C12.8 -18.6 6.4 -21.8 -0.6 -21.4C-10.4 -20.8 -16.8 -13.2 -17.2 -3.2C-17.4 2.8 -16.4 8.2 -14 12.4L-9.4 10.6C-10.6 6.6 -10.4 2.6 -7.4 0.6C-4.4 -1.6 -1.4 -6 1.6 -9.4C5.6 -11.6 10.6 -11.8 14.6 -11.8Z' +
  'M-26 -2a7.4 6.8 0 1 0 14.8 0a7.4 6.8 0 1 0 -14.8 0Z' +
  'M-1.6 -4C-5.6 -2 -7.4 3 -7 9C-6.6 15 -5 20 -2.4 24L1.6 23.6C0 19 -0.6 14 -0.2 9C0.2 4 1.2 0 2.4 -3Z'
export const BLANCHE_HAIR_CUTS =
  gouge(11.6, -17.6, -5, -17.8, 0.5, -1.4) +
  gouge(7, -14.8, -12.4, -9.6, 0.5, -1.8) +
  gouge(-22.8, -5, -15.2, -5.6, 0.45, -1.2) +
  gouge(-22.4, 1.6, -15, 2, 0.45, 1.2) +
  // the ringlets in front of the ear
  'M-3.8 1.6Q-1.6 3.4 0.4 1.8M-4.6 7.4Q-2.2 9.2 0 7.6M-4.4 13.2Q-2.2 15 -0.2 13.4M-3.2 18.8Q-1.2 20.4 0.6 19'

// ── RICHARD MASON ───────────────────────────────────────────────────────────
// "a tall, fashionable-looking man ... his age might be about Mr.
// Rochester's,—between thirty and forty; his complexion was singularly
// sallow: otherwise he was a fine-looking man ... His features were regular,
// but too relaxed: his eye was large and well cut, but the life looking out
// of it was a tame, vacant life" (Chapter 18); "his pale and seemingly
// lifeless face", "a man sat in it, dressed with the exception of his coat"
// (Chapter 20). So he is as tall as any man, his face cut in PAPER over an
// ink head (pale, as Jane's is), with a regular straight profile, a large
// eye and a small mouth; his hair dark and fashionably brushed forward at the
// temple. The sallow yellow is left to the words.

/** His head: a regular straight profile, a small mouth, a rounded chin. */
export const HEAD_MASON =
  'M-8.6 25C-9.6 19 -14.6 15 -15.6 5.6C-16.6 -9.4 -8 -20 2.8 -20C11 -20 15.4 -15.2 15.6 -9.4L15.8 -5.6L15.4 -4L19.8 3L15.8 4.6L16.2 7L15 8.4L15.8 10.6C15.6 15.4 12.6 18.2 8.4 18.6L6.6 25Z'
/** His pale face and neck, laid over HEAD_MASON in PAPER with an ink edge. */
export const MASON_FACE =
  'M1.2 -13C5.6 -15 11.4 -14.6 15 -12L15.6 -9.4L15.8 -5.6L15.4 -4L19.8 3L15.8 4.6L16.2 7L15 8.4L15.8 10.6C15.6 15.4 12.6 18.2 8.4 18.6L7 26.4L-2.4 26.6C-1.4 21 -0.6 15.6 0.2 10.4C-0.6 2 -0.4 -6.4 1.2 -13Z'
/** His dark hair, brushed forward at the temple. INK, drawn after the face. */
export const MASON_HAIR =
  'M15.4 -11C13.6 -18.6 6.8 -22.6 -0.6 -22.2C-10.8 -21.6 -17.6 -13.8 -17.8 -3.4C-17.8 3.4 -16.6 9.4 -13.6 13.6L-8.2 11.6C-9.8 7 -9.6 2.4 -7.6 -0.6C-5.6 -3.4 -2.4 -4.4 0.4 -2.4C0.6 -6 2.2 -9 4.8 -10.6C8.2 -12.6 12 -12.4 15.4 -11Z'
export const MASON_HAIR_CUTS =
  gouge(12.4, -16.8, -4.4, -18.4, 0.55, -1.2) +
  gouge(6.4, -13.8, -12, -8.4, 0.55, -1.6) +
  gouge(1, -10.6, -14, 2.6, 0.5, -1.2)
/** His features in ink on the pale face: the brow, the large eye open or shut, the small mouth, the nostril, the jaw. */
export const MASON_BROW = gouge(6.4, -8, 14, -7.6, 0.7)
export const MASON_EYE = 'M6.8 -3.8Q10.2 -6.4 13.4 -4Q10.2 -1.6 6.8 -3.8Z'
export const MASON_EYE_HALF = 'M6.8 -3.2Q10.2 -4.6 13.4 -3.4Q10.2 -1 6.8 -3.2Z'
export const MASON_MOUTH = 'M12.2 10.2L15.2 9.8'
export const MASON_LINES = 'M16.6 4.6Q17.6 5.2 18.4 4.8M8.4 18.6Q3.6 18 1.4 13'

/** Mason's pale face over HEAD_MASON, with his hair and features. Place with the head's transform. */
export function MasonFace({ t, eye = 'open' }: { t: string; eye?: 'open' | 'half' }) {
  return (
    <g transform={t}>
      <path d={MASON_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={MASON_HAIR} fill={INK} />
      <path d={MASON_HAIR_CUTS} fill={PAPER} />
      <path d={MASON_BROW + (eye === 'open' ? MASON_EYE : MASON_EYE_HALF)} fill={INK} />
      {eye === 'open' && <circle cx={10.4} cy={-4} r={1.3} fill={PAPER} />}
      <path
        d={MASON_MOUTH + MASON_LINES}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
        strokeLinecap="round"
      />
    </g>
  )
}

// ── BERTHA MASON (Chapters 25 and 26) ────────────────────────────────────────
// Drawn as a woman, with the same dignity as every other figure in these
// prints, and as the portrait cuts her (../portraits/bertha-mason.tsx), so
// that a student meets one Bertha: upright, her face calm and grave and cut
// in PAPER where the light reaches it, her thick dark hair loose over the ear
// and long down her back, a plain white gown straight from the shoulder, and
// partly in shadow. The novel describes her almost always in words that make
// her less than human; NONE of them is drawn, and this overrides the usual
// rule of drawing from the text. What it says of her plainly is drawn:
//
//   "It seemed, sir, a woman, tall and large, with thick and dark hair hanging
//   long down her back. I know not what dress she had on: it was white and
//   straight" (Chapter 25); "she was a big woman, in stature almost equalling
//   her husband" (Chapter 26).
//
// So she is as tall as Rochester (a head scale of about 1.2 beside his) and
// broad (give woman() a `gown` about 34 across the shoulder and 30 at the
// waist, or a straight `skirt` of the panel's own), in PAPER (`paperGown`,
// and `arms: 'bare'` for the white sleeves and her hands); a panel puts the
// back of the gown, away from its light, in shadow with cuts of ink. Her
// colouring is not drawn. No red ever touches her.

/** Bertha's head: a full, firm profile, a straight nose, a strong chin. Fill with INK. */
export const HEAD_BERTHA =
  'M-8.4 26C-10 20 -15.6 15.6 -16.4 6C-17.4 -9.4 -8.4 -20.4 3 -20.4C11.4 -20.4 15.8 -15.4 16 -9.4L16.2 -5.6L15.8 -4L19.8 2.6L16.2 4.2L16.6 6.8L15.4 8.2L16.4 10.6C16.4 16 13.2 19.4 8.6 19.8L7 26Z'
/** Her face and neck where the light reaches them, laid over HEAD_BERTHA in PAPER with an ink edge. */
export const BERTHA_FACE =
  'M1.4 -13C5.8 -15 11.6 -14.6 15.2 -12L16 -9.4L16.2 -5.6L15.8 -4L19.8 2.6L16.2 4.2L16.6 6.8L15.4 8.2L16.4 10.6C16.4 16 13.2 19.4 8.6 19.8L7.4 27L-2.4 27.2C-1.2 21 -0.4 15.6 0.4 10.4C-0.4 2 -0.4 -6.4 1.4 -13Z'
/**
 * "thick and dark hair hanging long down her back": INK, over the crown from
 * the brow, over the ear, and down behind the neck to the middle of the back
 * (about y 104 in the head's frame). Pass as woman()'s `hair`, so it takes the
 * figure's paper edge, and draw it again over the face with BerthaFace.
 */
export const BERTHA_HAIR =
  'M15.6 -11.6C14 -19.4 6.8 -23.6 -1 -23.2C-12 -22.6 -19.6 -14.4 -20.4 -2.6C-21.4 12 -22.4 40 -23.6 70L-24.4 104L-6.6 104C-6.4 82 -5.4 56 -3.6 34C-2.6 24 -2.2 14 -1.6 6C-1 -2 1.2 -8.2 5 -11.2C8.6 -13.4 12.4 -12.8 15.6 -11.6Z'
/** The long strands of her hair, cut in PAPER down its fall. */
export const BERTHA_HAIR_CUTS =
  gouge(11, -18.4, -6, -19.4, 0.55, -1.2) +
  gouge(6, -15.6, -14.6, -8, 0.6, -1.6) +
  gouge(-1, -12.6, -17.4, 6, 0.6, -1.4) +
  gouge(-6, -6, -19, 40, 0.6, -1) +
  gouge(-4.4, 8, -15, 74, 0.55, -0.8) +
  gouge(-10.6, 20, -21, 98, 0.55, 0.6) +
  gouge(-6.6, 44, -11, 100, 0.5, -0.4)
/**
 * Her features, in ink on the paper face: a level brow, a steady open eye
 * (the lid's outline and the pupil: a filled almond on a paper face reads as
 * an eye shut), the nostril, a closed mouth, the line of the jaw.
 */
export const BERTHA_BROW = gouge(6.8, -8.4, 14.6, -8, 0.9)
export const BERTHA_EYE = 'M7.4 -3.6Q10.4 -6.2 13.6 -3.8Q10.4 -1.6 7.4 -3.6Z'
export const BERTHA_PUPIL = 'M10.2 -3.8a1.4 1.4 0 1 0 2.8 0a1.4 1.4 0 1 0 -2.8 0Z'
export const BERTHA_LINES =
  'M11.4 10.6L15.6 10.2M16.8 4.6Q17.8 5.2 18.6 4.8M8.6 19.8Q3.4 19.2 1.4 14'

/** Bertha's face, hair and features over HEAD_BERTHA. Place with the head's own transform. */
export function BerthaFace({ t }: { t: string }) {
  return (
    <g transform={t}>
      <path d={BERTHA_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={BERTHA_HAIR} fill={INK} />
      <path d={BERTHA_HAIR_CUTS} fill={PAPER} />
      <path d={BERTHA_BROW + BERTHA_PUPIL} fill={INK} />
      <path d={BERTHA_EYE} fill="none" stroke={INK} strokeWidth={0.9} />
      <path d={BERTHA_LINES} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
    </g>
  )
}

// ── ROCHESTER'S HAIRLINE, EAR AND NECKCLOTH ─────────────────────────────────

/**
 * His features as one piece, over HEAD_ROCHESTER and ROCHESTER_HAIR: the
 * kit's cuts, and two more in PAPER: the edge of his hair from the brow
 * round behind the ear to the nape, and the ear. WHY: his face and his hair
 * are both ink, and with only the gloss lines of the hair cut, his head read
 * at panel size as a striped hood. The hairline parts the black hair from the
 * dark face. Place with the head's transform.
 */
export const ROCHESTER_HAIRLINE =
  'M17 -11.8C12 -11.6 6 -11.4 2 -10.4C-4 -9 -8.6 -5 -9.6 0C-10.2 4 -10 8 -8.6 12'
export const ROCHESTER_EAR = 'M-6.4 -2.4C-2.6 -4.4 0.6 -1.8 0.2 2.6C-0.2 6.4 -3 8 -5.6 6.6'

/**
 * The white neckcloth every gentleman of about 1800 to 1820 wears at the
 * throat, as Brocklehurst's is cut: PAPER, in the frame of HEAD_ROCHESTER.
 * Indoors, and in the orchard on Midsummer-eve, it sets his black head off
 * his black coat, which the hairline alone did not do when he is seen
 * against a dark ground.
 */
export const ROCHESTER_NECKCLOTH =
  'M-4 24.6C0 23.4 5 23.6 8.6 25C9.4 28 8.6 31 7 33C3 33.6 -1.6 33 -4.6 31.4C-5.4 29 -5.2 26.6 -4 24.6Z'

// ── OUT OF DOORS IN WINTER: JANE'S BEAVER BONNET, A CLOAK ──────────────────

/**
 * Jane's bonnet: "a black merino cloak, a black beaver bonnet; neither of them
 * half fine enough for a lady's-maid" (Chapter 12). A plain bonnet of the
 * time, in the frame of the heads: the crown over the back of the head, the
 * brim standing a little forward over the brow and framing the face down to
 * the jaw, so that her pale face still shows. INK, edged in PAPER, drawn
 * after JaneFace with `hair={false}`; BEAVER_BONNET_LINES are its seams, cut
 * in paper, and BEAVER_BONNET_STRING the ribbon down to the jaw, kept off the chin.
 */
export const BEAVER_BONNET =
  'M23.6 -12.6C22.6 -22.4 12.8 -29.8 0 -30C-12.4 -30.2 -21.2 -22.4 -21.6 -11C-21.8 -2 -18.4 6 -12.6 11L-3.4 15.4C-2.6 9 -1.6 2.6 0.6 -3.4C2.6 -8.6 7.6 -12.6 14 -13.2C17.4 -13.4 20.6 -13.2 23.6 -12.6Z'
export const BEAVER_BONNET_LINES =
  gouge(20.8, -16.6, 2.4, -24.8, 0.55, 1) +
  gouge(1.6, -26, -16.6, -12, 0.55, 1.4) +
  gouge(-3.6, -2, -12.6, 6.6, 0.5, 0.6)
export const BEAVER_BONNET_STRING = 'M-2.6 14.6L1.8 22.4'

/**
 * A cloak hung from the shoulders, its hem `hemY`, `width` across the
 * shoulders and flaring by `flare` either side at the hem, leaning `lean`
 * forward over its length: Jane's mantle, Rochester's riding cloak. One path,
 * for a Part; the panel cuts its folds.
 */
export function cloak(
  neck: P,
  hemY: number,
  facing: 1 | -1,
  { width = 34, flare = 10, lean = 0 }: { width?: number; flare?: number; lean?: number } = {},
): string {
  const f = facing
  const h = width / 2
  const [x, y] = neck
  const L = hemY - y
  const r = (v: number) => Math.round(v * 10) / 10
  const pts: P[] = [
    [x - f * h * 0.5, y - 3],
    [x + f * h * 0.6, y - 2],
    [x + f * h, y + 8],
    [x + f * (h + flare * 0.5) + f * lean * 0.6, y + L * 0.6],
    [x + f * (h + flare) + f * lean, hemY],
    [x - f * (h + flare) + f * lean, hemY + 2],
    [x - f * (h + flare * 0.4) + f * lean * 0.5, y + L * 0.55],
    [x - f * h, y + 10],
  ]
  return (
    `M${r(pts[0][0])} ${r(pts[0][1])}Q${r(pts[1][0])} ${r(pts[1][1] - 3)} ${r(pts[2][0])} ${r(pts[2][1])}` +
    pts
      .slice(3)
      .map(([a, b]) => `L${r(a)} ${r(b)}`)
      .join('') +
    `Q${r(pts[0][0] - f * 2)} ${r(pts[0][1] + 2)} ${r(pts[0][0])} ${r(pts[0][1])}Z`
  )
}

// ── OUT OF DOORS IN SUMMER: JANE'S STRAW BONNET AND SHAWL ──────────────────
//
// "I tied on my straw bonnet, pinned my shawl, took the parcel" (Chapter 27),
// and she wears them still at Whitcross, where she folds the shawl double
// for a coverlet on the heath (Chapter 28). Both in the frame of HEAD_JANE.

/**
 * The straw bonnet: a crown over the back of the head and a brim standing up
 * round the face, its edge running from above the brow down in front of the
 * ear to the jaw, so the face shows in front of it. Fill with PAPER (straw)
 * and stroke in ink; STRAW_BONNET_PLAIT are the rows of the plait, in ink;
 * STRAW_BONNET_LINING is the shadow inside the brim, in ink.
 */
export const STRAW_BONNET =
  'M24 -20C20 -26 13 -30 4 -30.6C-7 -31.2 -16 -26 -19.6 -17C-21.8 -11.4 -21.6 -5 -20.6 0L-23.6 7.4C-20 11.6 -14 12.8 -8.6 11.2L-2 12.6L3 14C3.2 8 3.4 2 5 -4C6.8 -10.4 10.6 -15 16 -18C18.6 -19.4 21.2 -20 24 -20Z'
export const STRAW_BONNET_LINING =
  'M24 -20C21.2 -20 18.6 -19.4 16 -18C10.6 -15 6.8 -10.4 5 -4C3.4 2 3.2 8 3 14L5.8 14C6 8.4 6.4 2.8 7.8 -2.6C9.6 -8.6 12.8 -12.8 17.6 -15.6C19.8 -16.8 22 -17.6 24.6 -17.8Z'
export const STRAW_BONNET_PLAIT =
  'M18 -24C10 -26 0 -26.6 -8 -23.4M14.6 -20.6C6 -23.6 -6 -22.6 -13.6 -16.4M10.4 -15.6C1 -19 -10.6 -15.6 -17 -7.6M7.6 -8.6C-1.4 -12 -12 -8.4 -18.4 0.4M6 -0.8C-2 -3.6 -11 -0.8 -16 5.6'
/** Its ribbons, tied in a bow under the chin. Fill with INK, edged in PAPER. */
export const STRAW_BONNET_TIES =
  'M3 13.6C4.6 16.4 6.6 19 8.6 21.4L10.6 20.2C8.8 17.6 7 15 5.6 12.8Z' +
  'M8.8 21.2C6.6 22.8 5.8 25.4 7 26.6C9 26 10 23.8 10 22ZM9.8 21C12 20.4 14.4 21 15 22.8C13.6 24.2 11.4 24 10.2 22.6Z'

/**
 * Jane's shawl, pinned at the breast and falling over the shoulders and the
 * upper arms to a point at her back: one path, for a figure facing `facing`
 * with its neck at `neck` and its high waist at `waist`. Ink, cut round with
 * a paper edge; shawlBorder() is the paper line of its border.
 */
export function shawl(
  neck: P,
  waist: P,
  facing: 1 | -1,
  { width = 30, point = 34, front = 7 }: { width?: number; point?: number; front?: number } = {},
): string {
  const f = facing
  const h = width / 2
  const pts: P[] = [
    [neck[0] + f * 3, neck[1] - 1],
    [neck[0] + f * (h * 0.55), neck[1] + 4],
    [neck[0] + f * (h * 0.75), neck[1] + 12],
    [neck[0] + f * front, waist[1] - 4],
    [neck[0] + f * (front - 4), waist[1] + 2],
    [neck[0] - f * 2, waist[1] + 6],
    [neck[0] - f * (h + 2), waist[1] + point * 0.6],
    [neck[0] - f * (h + 6), waist[1] + point],
    [neck[0] - f * (h + 8), waist[1] + point * 0.4],
    [neck[0] - f * (h + 4), neck[1] + 14],
    [neck[0] - f * (h * 0.7), neck[1] + 3],
    [neck[0] - f * 3, neck[1] - 2],
  ]
  return 'M' + pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L') + 'Z'
}

/** The paper line of a shawl's border, just inside its lower edges. */
export function shawlBorder(
  neck: P,
  waist: P,
  facing: 1 | -1,
  { width = 30, point = 34, front = 7 }: { width?: number; point?: number; front?: number } = {},
): string {
  const f = facing
  const h = width / 2
  const a: P = [neck[0] + f * (front - 1), waist[1] - 5]
  const b: P = [neck[0] + f * (front - 5), waist[1] - 0.5]
  const c: P = [neck[0] - f * 2, waist[1] + 3]
  const d: P = [neck[0] - f * (h + 1.5), waist[1] + point * 0.6 - 3.5]
  const e: P = [neck[0] - f * (h + 5), waist[1] + point - 4.5]
  return (
    gouge(a[0], a[1], b[0], b[1], 0.6) +
    gouge(b[0], b[1], c[0], c[1], 0.6) +
    gouge(c[0], c[1], d[0], d[1], 0.65) +
    gouge(d[0], d[1], e[0], e[1], 0.6)
  )
}

/** The pin at the breast, a paper dot. */
export function shawlPin(neck: P, facing: 1 | -1, front = 7): P {
  return [neck[0] + facing * (front * 0.9), neck[1] + 9]
}

// ── PILOT AND MESROUR ───────────────────────────────────────────────────────

/**
 * Pilot, Rochester's dog: "a great dog, whose black and white colour made him
 * a distinct object against the trees. It was exactly one form of Bessie's
 * Gytrash,—a lion-like creature with long hair and a huge head"; "a great
 * black and white long-haired dog"; "a Gytrash-like Newfoundland dog"
 * (Chapter 12). Side on, facing right, his feet on y 0, about 96 long and 78
 * high to the top of his head. His coat is INK with PAPER patches (a blaze
 * down his face, his chest and forelegs, a white tip to his tail), so he
 * reads as black and white against any ground; his long hair is cut in the
 * ragged edges of his belly and tail.
 */
export const PILOT = {
  body: 'M-38 -50C-26 -58 2 -58 20 -54C30 -52 36 -48 38 -40C40 -30 38 -22 34 -18L30 -12L27 -18L23 -12L20 -18L14 -12L10 -18L2 -13L-4 -19L-12 -13L-18 -19L-26 -14L-30 -20C-38 -24 -44 -32 -44 -40C-44 -44 -42 -48 -38 -50Z',
  head: 'M22 -56C24 -66 32 -74 44 -76C54 -77 60 -72 62 -64L72 -62C76 -60 77 -55 74 -52L64 -48C60 -44 54 -42 48 -44C42 -40 34 -40 28 -44C24 -47 22 -51 22 -56Z',
  ear: 'M34 -70C30 -66 28 -58 30 -50L35 -47L38 -54L41 -48C42 -56 40 -64 36 -70Z',
  tail: 'M-42 -46C-54 -48 -62 -42 -66 -32C-68 -26 -68 -20 -64 -16L-62 -21L-59 -16L-58 -23L-54 -19C-56 -28 -52 -36 -44 -40Z',
  legs: 'M24 -22L26 -4M32 -24L34 -4M-26 -22L-30 -4M-18 -22L-20 -4',
  feet: 'M20 -4L32 -4L33 1L19 1ZM28 -4L40 -4L41 1L27 1ZM-36 -4L-24 -4L-23 1L-37 1ZM-26 -4L-14 -4L-13 1L-27 1Z',
  /** The white of his coat: the blaze and muzzle, the chest, the tail's tip. */
  white:
    'M52 -74C50 -66 50 -58 54 -52L64 -50L73 -53C75 -56 74 -60 71 -61L62 -63C60 -68 57 -72 52 -74Z' +
    'M28 -46C30 -40 32 -32 33 -24L36 -24L38 -34C38 -42 36 -48 32 -50Z' +
    'M-64 -32C-66 -26 -66 -21 -64 -17L-62 -21L-59 -16L-58 -22C-60 -25 -61 -29 -60 -33Z',
  /** The long hair of his coat and ear, cut in PAPER over the black. */
  cuts:
    gouge(-30, -48, -6, -50, 0.8, 1) +
    gouge(-24, -40, 6, -42, 0.7, 1.2) +
    gouge(-10, -30, 14, -32, 0.6, 1) +
    gouge(-40, -40, -32, -28, 0.6, -1) +
    gouge(33, -66, 33, -54, 0.5, -0.8),
  eye: 'M44 -64Q47 -66 50 -64Q47 -62 44 -64Z',
  nose: 'M70 -60C72 -60 74 -58 74 -56C72 -55 70 -56 69 -58Z',
  mouth: 'M66 -51Q62 -49 58 -50',
}

/** Pilot, placed with his feet at `at`, facing right (`flip` to face left), scaled by `s`. */
export function Pilot({ at, s = 1, flip = false }: { at: P; s?: number; flip?: boolean }) {
  const legW = 7.4
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${flip ? -s : s} ${s})`}>
      <path
        d={PILOT.body + PILOT.head + PILOT.tail + PILOT.feet}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={3.6}
        strokeLinejoin="round"
      />
      <path
        d={PILOT.legs}
        fill="none"
        stroke={PAPER}
        strokeWidth={legW + 3.6}
        strokeLinecap="round"
      />
      <path d={PILOT.legs} fill="none" stroke={INK} strokeWidth={legW} strokeLinecap="round" />
      <path d={PILOT.tail + PILOT.body + PILOT.head + PILOT.feet} fill={INK} />
      <path d={PILOT.white + PILOT.cuts + PILOT.eye} fill={PAPER} />
      <path d={PILOT.ear} fill={INK} stroke={PAPER} strokeWidth={1} />
      <path d={PILOT.nose} fill={INK} />
      <path d={PILOT.mouth} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
    </g>
  )
}

/**
 * Mesrour, "a tall steed", Rochester's black horse ("Mr. Rochester, on his
 * black horse, Mesrour", Chapter 17), side on and facing right, his head up,
 * saddled and bridled. In his own frame: the hoofs on y 0, the chest at x 0,
 * about 216 long and 204 high to the ears. INK, with the bridle, the rein,
 * the saddle's edge and the light along his back and neck cut in PAPER.
 */
export const MESROUR = {
  body: 'M-6 -128C-14 -138 -34 -142 -60 -140C-96 -138 -130 -140 -158 -136C-182 -132 -196 -118 -198 -100C-200 -86 -194 -76 -184 -72C-160 -66 -120 -66 -86 -68C-56 -70 -30 -72 -14 -80C-4 -88 0 -104 -2 -116Z',
  neck: 'M-32 -134C-24 -154 -14 -172 0 -186L20 -180C12 -164 8 -146 6 -122L-8 -102Z',
  head: 'M-2 -190C4 -198 14 -199 21 -195C30 -188 40 -174 47 -162C50 -156 48 -149 42 -148C36 -147 31 -151 27 -155C22 -160 17 -166 12 -170C7 -174 1 -180 -2 -185Z',
  ears: 'M1 -192L-2 -205L7 -195ZM8 -195L9 -207L14 -196Z',
  mane: 'M-30 -136C-24 -152 -16 -168 -4 -184L-1 -180C-12 -166 -20 -150 -25 -134Z',
  tail: 'M-196 -118C-208 -110 -214 -92 -214 -70C-214 -54 -210 -40 -206 -30L-200 -36L-198 -28L-194 -36C-196 -56 -196 -86 -190 -110Z',
  saddle: 'M-76 -141C-68 -148 -42 -148 -34 -141L-38 -118C-48 -114 -66 -114 -76 -118Z',
}
/**
 * A limb as one filled shape that narrows along its points, each point with
 * its own width: a horse's leg, thick at the forearm or the gaskin and
 * slender in the cannon. (Cut first as two strokes, a thick one to the knee
 * and a thin one below, the rough edge of the print opened a paper seam at
 * every knee, and the legs read as stacked blocks.)
 */
export function taper(pts: P[], widths: number[]): string {
  const left: P[] = []
  const right: P[] = []
  for (let i = 0; i < pts.length; i++) {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1
    const nx = -(b[1] - a[1]) / L
    const ny = (b[0] - a[0]) / L
    const h = widths[i] / 2
    left.push([pts[i][0] + nx * h, pts[i][1] + ny * h])
    right.push([pts[i][0] - nx * h, pts[i][1] - ny * h])
  }
  const r = (v: number) => Math.round(v * 10) / 10
  return 'M' + [...left, ...right.reverse()].map(([x, y]) => `${r(x)} ${r(y)}`).join('L') + 'Z'
}

/** His legs: the forearm or gaskin thick to the knee or the hock, the cannon slender to the hoof. */
const FORE_W = [15, 11, 7.6, 7]
const HIND_W = [19, 15, 9.6, 7.6, 7]
export const MESROUR_LEGS = {
  far:
    taper(
      [
        [-24, -86],
        [-26, -48],
        [-25, -16],
        [-22, -7],
      ],
      FORE_W,
    ) +
    taper(
      [
        [-172, -92],
        [-178, -72],
        [-176, -50],
        [-180, -16],
        [-176, -7],
      ],
      HIND_W,
    ),
  near:
    taper(
      [
        [-10, -86],
        [-8, -48],
        [-9, -16],
        [-6, -7],
      ],
      FORE_W,
    ) +
    taper(
      [
        [-158, -90],
        [-164, -72],
        [-162, -48],
        [-166, -16],
        [-162, -7],
      ],
      HIND_W,
    ),
}
export const MESROUR_HOOFS = [-21, -175, -5, -161]
/** The bridle, the rein hanging from the bit, the stirrup and the girth, cut in PAPER. */
export const MESROUR_TACK =
  'M6 -190L24 -158M12 -172C20 -170 30 -168 40 -160M38 -152C30 -138 14 -126 -6 -124' +
  'M-56 -118L-58 -96M-62 -96L-54 -96M-40 -118L-38 -72'
/** The light along his crest, back and quarters, and the line of his shoulder, cut in PAPER. */
export const MESROUR_CUTS =
  gouge(-90, -136, -150, -132, 1.2, 1) +
  gouge(-160, -130, -192, -108, 1, 1.2) +
  gouge(-26, -126, -10, -96, 1, 0.8) +
  gouge(4, -180, 18, -164, 0.8, 0.6) +
  gouge(-190, -110, -204, -60, 0.9, -1)

/** Mesrour, placed with his hoofs at `at`, facing right (`flip` to face left), scaled by `s`. */
export function Mesrour({ at, s = 1, flip = false }: { at: P; s?: number; flip?: boolean }) {
  return (
    <g
      transform={`translate(${at[0]} ${at[1]}) scale(${flip ? -s : s} ${s})`}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={MESROUR.body + MESROUR.neck + MESROUR.head + MESROUR.ears + MESROUR.tail}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={3.6}
      />
      <path
        d={MESROUR_LEGS.far + MESROUR_LEGS.near}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={3.6}
      />
      <path d={MESROUR_LEGS.far} fill={INK} />
      <path
        d={MESROUR.tail + MESROUR.body + MESROUR.neck + MESROUR.head + MESROUR.ears}
        fill={INK}
      />
      <path d={MESROUR_LEGS.near} fill={INK} />
      <path
        d={MESROUR_HOOFS.map((x) => `M${x - 6} 1L${x + 7} 1L${x + 5} -8L${x - 4} -8Z`).join('')}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d={MESROUR_CUTS} fill={PAPER} />
      <path d={MESROUR.mane} fill={INK} stroke={PAPER} strokeWidth={1} />
      <path d={MESROUR.saddle} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d={MESROUR_TACK} fill="none" stroke={PAPER} strokeWidth={1.4} />
      <path d="M15 -181Q20 -184 24 -180Q20 -177 15 -181Z" fill={PAPER} />
      <circle cx={44} cy={-154} r={1.6} fill={PAPER} />
    </g>
  )
}

// ── ST JOHN RIVERS (Chapters 29 to 35) ──────────────────────────────────────

/**
 * St John: "young—perhaps from twenty-eight to thirty—tall, slender; his face
 * riveted the eye; it was like a Greek face, very pure in outline: quite a
 * straight, classic nose; quite an Athenian mouth and chin" (Chapter 29). So
 * the profile runs from the brow to the tip of the nose almost in one straight
 * line, the upper lip is short, the lips full and the chin round and strong.
 * Drawn in ink like every head; StJohnFace lays his pale face and his fair
 * hair over it in PAPER.
 */
export const HEAD_ST_JOHN =
  'M-7.4 26C-8.8 20 -14 15.6 -15 6.4C-16 -9.6 -8 -21 3.2 -21C10.6 -21 14.6 -17.4 15.4 -12.6L16.4 -8.4L17.6 -4.4L19.8 0.4L22 4.6L17.6 6.2L18 8.2L16.9 9.3L17.8 10.6L17 11.8C18.4 14 17.8 17.8 14.6 19.6C12.2 20.8 9.4 21 7.4 20.8L6.4 26Z'
/**
 * "his high forehead, colourless as ivory": the face and neck in PAPER with an
 * ink edge, from the hairline to the collar.
 */
export const ST_JOHN_FACE =
  'M2 -15.6C6.4 -17.4 11.8 -17 15.2 -14L16.4 -8.4L17.6 -4.4L19.8 0.4L22 4.6L17.6 6.2L18 8.2L16.9 9.3L17.8 10.6L17 11.8C18.4 14 17.8 17.8 14.6 19.6C12.2 20.8 9.4 21 7.4 20.8L6.6 26.4L-7.4 26.6C-9.4 22 -11.6 18 -13.4 14L-11.6 5C-11 0 -9 -5 -6 -9.6C-3.4 -13.2 -0.6 -14.8 2 -15.6Z'
export const ST_JOHN_JAW = 'M13.8 19.9Q9 20.2 5.6 16.8'
/**
 * "careless locks of fair hair" over the forehead: the hair in PAPER with an
 * ink edge, swept back over the crown and falling in locks over the brow;
 * ST_JOHN_HAIR_LINES are its strands, stroked in ink.
 */
export const ST_JOHN_HAIR =
  'M15.4 -13.6C15.2 -20.4 9.2 -24.4 1.2 -24C-10 -23.4 -17.6 -15.4 -17.6 -4C-17.6 3.6 -16.2 9.6 -13.4 14L-9.6 13C-11 9.6 -11.6 5.4 -11.2 1C-10.6 -3.6 -8.6 -7.8 -5 -10.8C-2.4 -12.8 0.6 -13.8 3.6 -13.8C5 -12 5.6 -10.4 5.4 -8.8C6.8 -9.6 7.6 -11 7.8 -12.6C9.6 -12.4 11 -11.6 12 -10.4C12.2 -11.8 12 -13 11.4 -13.6C12.8 -13.6 14.2 -13.6 15.4 -13.6Z'
export const ST_JOHN_HAIR_LINES =
  'M12.8 -17.6C6.4 -21.4 -3.8 -20.6 -10.8 -14M8.6 -14.6C2.4 -18 -7 -15.8 -13.2 -8.4M2 -13C-4.6 -13.6 -11 -8.6 -14.2 -0.4M-7.2 -7.6C-11.2 -4.4 -13.2 2 -13 9.4M4.6 -12.4Q5.2 -10.8 5 -9.6M9.2 -12.2Q10.6 -11.6 11.4 -10.8'
/**
 * His features, in ink on the pale face: a level brow, the eye "large and
 * blue, with brown lashes" (the lashes a heavy upper lid), the
 * nostril, a well-cut mouth, the ear.
 */
export const ST_JOHN_BROW = gouge(7.2, -7, 15.4, -6.4, 0.75, -0.3)
export const ST_JOHN_EYE = 'M7.8 -2.6Q11 -5.4 14.4 -3Q11 -0.8 7.8 -2.6Z'
export const ST_JOHN_EYE_DOWN = 'M7.8 -2.2Q11 0.2 14.4 -1.8L14.2 -1.1Q11 1.1 8 -1.4Z'
/** The upper lid, drawn heavy for the lashes. Stroke in ink. */
export const ST_JOHN_LID = 'M7.2 -2.8Q11 -6.4 14.9 -3.3'
export const ST_JOHN_LINES =
  'M18.6 5.4Q19.6 6 20.6 5.6M13.8 9.6L17 9.3M14.4 12.2Q15.6 12.8 16.6 12.4'
export const ST_JOHN_EAR =
  'M-4.6 -2.4C-8.6 -2.6 -9.8 1.8 -9 5.4C-8.2 8.6 -5.8 9.8 -3.6 9.2M-5 1C-6.8 2 -6.8 5 -5 6.4'
/** The white neckcloth of a clergyman, at the throat. PAPER, edged in ink. */
export const ST_JOHN_NECKCLOTH =
  'M-3.4 23.2C0.8 21.8 5.6 22 9.4 23.6C10.2 26.6 9.8 29.6 8.6 31.8C4 32.6 -0.8 32 -4.2 30.4C-4.8 28 -4.6 25.4 -3.4 23.2Z'

/**
 * St John's pale face and fair hair over HEAD_ST_JOHN, with his features and
 * his neckcloth. Place with the head's own transform; `down` lowers the lid.
 */
export function StJohnFace({ t, down = false }: { t: string; down?: boolean }) {
  return (
    <g transform={t}>
      <path
        d={ST_JOHN_NECKCLOTH}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
        strokeLinejoin="round"
      />
      <path d={ST_JOHN_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={ST_JOHN_JAW} fill="none" stroke={INK} strokeWidth={0.7} strokeLinecap="round" />
      <path d={ST_JOHN_EAR} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d={ST_JOHN_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path
        d={ST_JOHN_HAIR_LINES}
        fill="none"
        stroke={INK}
        strokeWidth={0.8}
        strokeLinecap="round"
      />
      <path d={ST_JOHN_BROW + (down ? ST_JOHN_EYE_DOWN : ST_JOHN_EYE)} fill={INK} />
      {!down && (
        <path d={ST_JOHN_LID} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      )}
      <path d={ST_JOHN_LINES} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
    </g>
  )
}

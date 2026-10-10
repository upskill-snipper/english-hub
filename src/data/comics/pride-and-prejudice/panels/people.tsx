import type { CSSProperties, ReactNode } from 'react'

import { gouge, n } from '@/components/comics/linocut/carve'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'

/**
 * THE PEOPLE OF PRIDE AND PREJUDICE: one figure kit for every panel of the
 * novel, so that a student meets the same Elizabeth, the same Darcy and the
 * same Mrs Bennet from the first chapter to the last. Draw every recurring
 * character with `Person`, never with a new outline. A change here changes
 * every panel that uses it: preview them all before changing one. Cut first
 * for the panels of moments 1 to 5 (Chapters 1 to 20). An artist who needs a
 * person not here (Charlotte Lucas, Lady Catherine, the Gardiners, Mrs
 * Reynolds) adds a `Look` for them at the end, in the same way, with the
 * words they come from, and says so in this docblock.
 *
 * The machinery is the Great Gatsby kit's (a part carries its own tone, so a
 * black head can sit over a white gown and a red coat), and the open hand
 * with its fingers apart is the Verona kit's, COPIED rather than imported,
 * as the Silas Marner kit copies its own, so that a change made for another
 * text can never redraw this one. A figure is cut as the reference panel
 * cuts Fred (src/data/comics/a-christmas-carol/counting-house.tsx): a halo
 * in the edge colour round every part, so it reads as one shape with a
 * single carved outline, then the parts, then the cuts of folds and features.
 *
 * ── THE DRESS OF THE NOVEL ──────────────────────────────────────────────────
 * The 1790s to the 1810s, in English country houses and assembly rooms, and
 * nothing from a film, a television series or a stage production (not the
 * 1940, 1995 or 2005 adaptations: no faces, costumes or casting from them).
 * - A gentleman wears a tailcoat cut square across at the waist with tails
 *   behind and a high collar (`tailcoat`), a pale waistcoat showing at the
 *   front, a white neckcloth wound high round the throat with the shirt's
 *   collar points standing up beside the jaw (CRAVAT, COLLAR_POINT), and
 *   pale breeches to the knee with either pale stockings and low shoes
 *   (`legwear: 'stockings'`, for a ball, an evening or indoors) or top boots
 *   (`'boots'`, for the day out of doors and for officers). The breeches are
 *   pale, as they were often worn, because a dark coat over pale breeches is
 *   what makes the tailcoat read in the print: over dark ones it ran into the
 *   coat as one black column. His hair is cut short, brushed forward or
 *   curling.
 * - A clergyman (Mr Collins) is in black from collar to shoe, the neckcloth
 *   white (`legwear: 'clerical'`).
 * - A lady wears a gown with the waist high under the bust and the skirt
 *   falling straight to the floor (`gown`), a ribbon at the waist (the sash),
 *   short puffed sleeves and long gloves in the evening (`evening`), long
 *   sleeves by day. Her hair is drawn up to a knot at the back of the head,
 *   with curls at the temple. A married woman wears a cap indoors (CAP), and
 *   a matron a kerchief at the neck.
 * - The officers of the militia wear red coats, printed in the spot colour,
 *   because the text names them: "I remember the time when I liked a red coat
 *   myself" (Chapter 7); "a scarlet coat" (Chapter 13); "the cluster of red
 *   coats there assembled" (Chapter 18). Their cuffs are cut in paper, so the
 *   red never touches a hand, and a paper cross-belt runs over the coat;
 *   breeches pale, boots black (`look: 'officer'`, or `regimentals` on
 *   Wickham once he has his commission).
 *
 * ── THE SPOT COLOUR ON A FACE ───────────────────────────────────────────────
 * A flush goes on the cheekbone (FLUSH), never the mouth or the chin, and
 * only where the text gives one. A red mark near a mouth, a hand or a face
 * reads at phone width as blood: print small details there in ink or paper.
 *
 * ── WHAT THE NOVEL SAYS OF THEM, and so what is drawn ──────────────────────
 * (the 1813 first edition, held as src/data/full-texts/pride-and-prejudice.ts.)
 * Where the novel is silent a person is drawn plainly in the dress above.
 *
 * - ELIZABETH ('elizabeth'): Darcy "began to find it was rendered uncommonly
 *   intelligent by the beautiful expression of her dark eyes ... he was
 *   forced to acknowledge her figure to be light and pleasing" (Chapter 6);
 *   "a pair of fine eyes in the face of a pretty woman" (Chapter 6); Miss
 *   Darcy "is now about Miss Elizabeth Bennet's height, or rather taller"
 *   (Chapter 8) and "was tall, and on a larger scale than Elizabeth"
 *   (Chapter 44); "she had a lively, playful disposition" (Chapter 3). So she
 *   is slight and of no more than middle height, and her eye is the one eye
 *   in the novel cut large and open, its white in paper and its iris left in
 *   ink (FINE_EYE, FINE_IRIS), so her eyes print dark, as the text gives
 *   them. Her hair and her gowns are not described: dark hair dressed up
 *   with curls at the temple, and a pale gown, the muslin of the period.
 * - JANE ('jane'): "the most beautiful creature I ever beheld" (Bingley),
 *   "the only handsome girl in the room" (Darcy, Chapter 3); "a smile of such
 *   sweet complacency, a glow of such happy expression" (Chapter 18). Nothing
 *   more is said of her looks, so she is drawn as Elizabeth's equal in
 *   height, her hair smooth under a band (BANDEAU), which is what tells the
 *   two sisters apart, and her mouth in a quiet smile (SMILE_LINE).
 * - LYDIA ('lydia'): "a stout, well-grown girl of fifteen, with a fine
 *   complexion and good-humoured countenance ... She had high animal spirits"
 *   (Chapter 9); "though I _am_ the youngest, I'm the tallest" (Chapter 2). So
 *   she is the tallest and broadest of the sisters, her face fuller, her hair
 *   a mass of curls tied with a ribbon (LYDIA_HAIR), and her mouth open by
 *   default: "a most determined talker" (Chapter 16).
 * - MARY ('mary'): "the only plain one in the family"; "a pedantic air and
 *   conceited manner" (Chapter 6); "a young lady of deep reflection" who reads
 *   "great books, and make[s] extracts" (Chapter 2). So her hair is drawn flat
 *   to a small knot with no curls (MARY_HAIR), her gown dark and plain.
 * - KITTY ('kitty'): never described. A younger sister as Lydia, smaller,
 *   with fewer curls.
 * - MRS BENNET ('mrsBennet'): "I certainly _have_ had my share of beauty"
 *   (Chapter 1); "a woman of mean understanding, little information, and
 *   uncertain temper. When she was discontented she fancied herself nervous"
 *   (Chapter 1). A handsome matron, fuller in the face, in a cap (CAP) and a
 *   kerchief, a dark gown, and her mouth open by default: "The business of
 *   her life was to get her daughters married; its solace was visiting and
 *   news" (Chapter 1).
 * - MR BENNET ('mrBennet'): "so odd a mixture of quick parts, sarcastic
 *   humour, reserve, and caprice" (Chapter 1); married "three and twenty
 *   years" (Chapter 1); "With a book he was regardless of time" (Chapter 3).
 *   His looks are never given. A man of about fifty: a lean, long face with
 *   a long nose, his hair thinning and grey at the temple, cut as close
 *   paper strands (BENNET_HAIR), and his mouth turned up at one corner, the
 *   dry half-smile of his sarcastic humour (WRY).
 * - DARCY ('darcy'): "his fine, tall person, handsome features, noble mien
 *   ... he was discovered to be proud, to be above his company" (Chapter 3);
 *   "if Darcy were not such a great tall fellow, in comparison with myself"
 *   (Bingley, Chapter 10); "That tall, proud man" (Kitty, Chapter 53). So he
 *   is the tallest man in any panel, upright, with a long straight nose and
 *   a strong chin (HEAD_DARCY), his dark hair brushed forward (DARCY_HAIR).
 *   With `proud`, his head goes back and his lid comes down (EYE_PROUD,
 *   BROW_LOW): "A deeper shade of hauteur overspread his features" (Chapter
 *   18).
 * - BINGLEY ('bingley'): "good looking and gentleman-like; he had a pleasant
 *   countenance, and easy, unaffected manners"; "he wore a blue coat"
 *   (Chapter 3). So he is shorter than Darcy, his face open and smiling
 *   (EYE_GLAD, SMILE_LINE), his hair in short curls (BINGLEY_CURLS). The blue
 *   is left to the words: his coat prints in ink.
 * - WICKHAM ('wickham'): "of most gentleman-like appearance ... the young man
 *   wanted only regimentals to make him completely charming. His appearance
 *   was greatly in his favour; he had all the best part of beauty, a fine
 *   countenance, a good figure, and very pleasing address" (Chapter 15). So
 *   he is as tall as Bingley and as well made as Darcy, his profile regular,
 *   his hair swept back in a wave (WICKHAM_HAIR), and he smiles. Until he has
 *   his commission he is in a gentleman's plain coat; `regimentals` puts him
 *   in the red coat.
 * - MR COLLINS ('collins'): "a tall, heavy looking young man of five and
 *   twenty. His air was grave and stately, and his manners were very formal"
 *   (Chapter 13). So he is nearly as tall as Darcy and the broadest man in
 *   any panel, with a heavy jaw and a thick neck (HEAD_COLLINS), his hair
 *   combed flat (COLLINS_HAIR), his mouth never smiling, and in a clergyman's
 *   black.
 * - MR PHILIPS ('philips'): "the broad-faced stuffy uncle Philips, breathing
 *   port wine" (Chapter 16). A broad, heavy head (HEAD_COLLINS's, older, with
 *   grey hair). Nothing marks the port wine: no red nose, no glass.
 * - MRS PHILIPS ('mrsPhilips'): Mrs Bennet's sister, never described: a
 *   matron in a cap, as her sister is.
 * - CHARLOTTE LUCAS ('charlotte'): "a sensible, intelligent young woman,
 *   about twenty-seven" (Chapter 5); "at the age of twenty-seven, without
 *   having ever been handsome" (Chapter 22). Nothing more is said of her
 *   looks, so she is drawn plainly: HEAD_WOMAN, her hair drawn smooth to the
 *   knot with no curls at the temple, and a dark gown, so she is never taken
 *   for Elizabeth or Jane beside her. (Added by the artist of moments 6 to 10.)
 * - MR AND MRS GARDINER ('mrGardiner', 'mrsGardiner'): "Mr. Gardiner was a
 *   sensible, gentleman-like man"; "Mrs. Gardiner, who was several years
 *   younger than Mrs. Bennet and Mrs. Philips, was an amiable, intelligent,
 *   elegant woman" (Chapter 25). Nothing of their looks is given, so they are
 *   drawn plainly: he on the plain man's head in a gentleman's dark coat; she
 *   a married woman in a cap, younger than her sister-in-law (HEAD_WOMAN, not
 *   the matron's fuller face) and in a dark gown, so that beside Elizabeth
 *   and Jane in their pale muslin she reads at once as the older woman.
 *   (Added by the artist of moments 6 to 10.)
 * - LADY CATHERINE ('catherine'): "Lady Catherine was a tall, large woman,
 *   with strongly-marked features, which might once have been handsome. Her
 *   air was not conciliating" (Chapter 29), and in her countenance Elizabeth
 *   "soon found some resemblance of Mr. Darcy" (Chapter 29). So she is the
 *   tallest and broadest woman in any panel, nearly a man's height, with a
 *   long, strong nose rising at the bridge, a strong chin and the beginning
 *   of a jowl (HEAD_CATHERINE), and the lines from the nose to a mouth turned
 *   down at its corner (CATHERINE_LINES): a face that might once have been
 *   handsome, never a caricature. For the likeness to her nephew, a panel may
 *   give her Darcy's lowered lid and level brow (`eye: 'proud'`, `brow:
 *   'low'`). Her dress is not described, so she is a widow of rank in a cap,
 *   a kerchief and a dark gown. (Added by the artist of moments 11 to 14.)
 * - An OFFICER ('officer') of the militia: see the dress above. Any other man
 *   ('man') or lady ('lady', or 'matron' for a married woman) is drawn plainly.
 */

export type P = [number, number]

// ── CUTTING ─────────────────────────────────────────────────────────────────

/** A part's tone: printed in ink, left as paper, or printed in the spot colour. */
export type Tone = 'ink' | 'paper' | 'red'

/**
 * A part is a filled shape, or, with `w`, a limb drawn as a stroke of that
 * width. `sep` cuts an edge of that width round the part before it is inked,
 * to lift an arm off the body behind it. `t` is a transform for that part
 * alone. `tone` overrides the figure's tone for this part. With `bare` the
 * part has no halo: a line or a patch cut on the figure itself (the edge of a
 * coat, a waistcoat, a sash), which an outline would turn into a separate thing.
 */
export type Part = {
  d: string
  w?: number
  sep?: number
  t?: string
  tone?: Tone
  bare?: boolean
}

/** One entry in a figure: a part, or a group (an arm and its hand) lifted off the body as one. */
export type Piece = Part | Part[]

const FILL: Record<Tone, string> = { ink: INK, paper: PAPER, red: RED }

/**
 * A figure cut from the block, with a tone for each part. Every part is first
 * haloed in its edge colour (paper round ink, ink round paper and round red),
 * the ink parts' halos last so a black figure keeps one clean paper outline;
 * then the parts in order, each group's separating edges before its fills.
 */
export function Cut({
  parts,
  tone = 'ink',
  halo = 1.8,
  transform,
  className,
  style,
  children,
}: {
  parts: Piece[]
  tone?: Tone
  halo?: number
  transform?: string
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const toneOf = (p: Part) => p.tone ?? tone
  const edgeOf = (p: Part) => (toneOf(p) === 'ink' ? PAPER : INK)
  const groups = parts.map((piece) => (Array.isArray(piece) ? piece : [piece]))
  const all = groups.flat()
  // Halos merged per colour (and per width for limbs), to keep the markup
  // small: every plate is fetched whole on a phone.
  const shapes = new Map<string, string>()
  const limbs = new Map<string, string>()
  const placed: Part[] = []
  for (const p of all) {
    if (p.bare) continue
    if (p.t) {
      placed.push(p)
      continue
    }
    const e = edgeOf(p)
    if (p.w) {
      const k = `${e}|${n(p.w + halo * 2)}`
      limbs.set(k, (limbs.get(k) ?? '') + p.d)
    } else shapes.set(e, (shapes.get(e) ?? '') + p.d)
  }
  const one = (p: Part, colour: string, extra: number, key: string) =>
    p.w ? (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill="none"
        stroke={colour}
        strokeWidth={n(p.w + extra)}
      />
    ) : (
      <path
        key={key}
        d={p.d}
        transform={p.t}
        fill={colour}
        stroke={extra ? colour : undefined}
        strokeWidth={extra ? n(extra) : undefined}
      />
    )
  return (
    <g
      transform={transform}
      className={className}
      style={style}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {halo > 0 &&
        [INK, PAPER].map((c) => (
          <g key={c}>
            {shapes.get(c) && (
              <path d={shapes.get(c)} fill={c} stroke={c} strokeWidth={n(halo * 2)} />
            )}
            {[...limbs]
              .filter(([k]) => k.startsWith(c))
              .map(([k, d]) => (
                <path key={k} d={d} fill="none" stroke={c} strokeWidth={k.split('|')[1]} />
              ))}
            {placed.filter((p) => edgeOf(p) === c).map((p, i) => one(p, c, halo * 2, `h${i}`))}
          </g>
        ))}
      {groups.map((g, i) => [
        ...g.map((p, j) => (p.sep ? one(p, edgeOf(p), p.sep * 2, `s${i}-${j}`) : null)),
        ...g.map((p, j) => one(p, FILL[toneOf(p)], 0, `f${i}-${j}`)),
      ])}
      {children}
    </g>
  )
}

// ── GEOMETRY ────────────────────────────────────────────────────────────────

const pt = (p: P) => `${n(p[0])} ${n(p[1])}`
/** A polyline through the points, for a limb. */
export const limb = (pts: P[]) => 'M' + pts.map(pt).join('L')
const rad = (d: number) => (d * Math.PI) / 180
const lerp = (a: P, b: P, t: number): P => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]
const last = (a: P[]) => a[a.length - 1]

/** The angle in degrees of the last segment of a limb, for the hand at its end. */
export function endAngle(pts: P[]) {
  const a = pts[pts.length - 2]
  const b = pts[pts.length - 1]
  return (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI
}

/** A unit vector from a to b, and the vector to the figure's front (its right, facing right). */
function axes(a: P, b: P): { u: P; fr: P } {
  const dx = b[0] - a[0]
  const dy = b[1] - a[1]
  const L = Math.hypot(dx, dy) || 1
  const u: P = [dx / L, dy / L]
  return { u, fr: [u[1], -u[0]] }
}
const along = (o: P, u: P, a: number, fr: P, b: number): P => [
  o[0] + u[0] * a + fr[0] * b,
  o[1] + u[1] * a + fr[1] * b,
]
const poly = (pts: P[]) => 'M' + pts.map(pt).join('L') + 'Z'

// ── HANDS, at the end of an arm ─────────────────────────────────────────────
// Drawn larger than life, with a clear gap between every finger, because a
// hand whose fingers merge reads as a fist at phone width.

/**
 * An open hand at the wrist: a palm, four fingers and a thumb, each finger
 * its own stroke, splayed `spread` degrees from the next so the edge colour
 * shows between them. `angle` is the direction the fingers point, in degrees
 * clockwise from the right; `thumb` the side the thumb is on (1 to the
 * fingers' right as they point). `size` is the length from wrist to tip.
 */
export function openHand(
  wrist: P,
  angle: number,
  o: { size?: number; spread?: number; thumb?: 1 | -1 } = {},
): Part[] {
  const L = o.size ?? 15
  const sp = o.spread ?? 18
  const th = o.thumb ?? 1
  const a = rad(angle)
  const ux = Math.cos(a)
  const uy = Math.sin(a)
  const at = (x: number, y: number): P => [wrist[0] + ux * x - uy * y, wrist[1] + uy * x + ux * y]
  const palm: Part = {
    d: `M${pt(at(-1.5, -0.17 * L))}L${pt(at(0.42 * L, -0.23 * L))}Q${pt(at(0.52 * L, 0))} ${pt(at(0.42 * L, 0.23 * L))}L${pt(at(-1.5, 0.17 * L))}Z`,
  }
  const lengths = [0.3, 0.4, 0.43, 0.38]
  const fingers: Part = {
    d: [-1.5, -0.5, 0.5, 1.5]
      .map((k, i) => {
        const kk = k * th
        const base = at(0.4 * L, kk * 0.12 * L)
        const fa = a + rad(kk * sp)
        const len = lengths[i] * L
        return `M${pt(base)}L${pt([base[0] + Math.cos(fa) * len, base[1] + Math.sin(fa) * len])}`
      })
      .join(''),
    w: 0.12 * L,
  }
  const tb = at(0.1 * L, th * 0.19 * L)
  const ta = a + rad(th * 52)
  const thumbPart: Part = {
    d: `M${pt(tb)}L${pt([tb[0] + Math.cos(ta) * 0.33 * L, tb[1] + Math.sin(ta) * 0.33 * L])}`,
    w: 0.14 * L,
  }
  return [palm, fingers, thumbPart]
}

/** A point in the frame of a hand: `x` along the fingers, `y` across them. */
function handFrame(wrist: P, angle: number, size: number) {
  const a = rad(angle)
  const u: P = [Math.cos(a), Math.sin(a)]
  const v: P = [-u[1], u[0]]
  return (x: number, y: number): P => [
    wrist[0] + (u[0] * x + v[0] * y) * size,
    wrist[1] + (u[1] * x + v[1] * y) * size,
  ]
}

/** A hand at rest, the fingers closed together: a small mitten along the forearm. */
export function mitt(wrist: P, angle: number, size = 1): Part {
  const at = handFrame(wrist, angle, size)
  return {
    d: `M${pt(at(-1, -3.4))}L${pt(at(6, -3.8))}Q${pt(at(11.6, -3))} ${pt(at(11.6, 0))}Q${pt(at(11.6, 3))} ${pt(at(6, 3.6))}L${pt(at(-1, 3.2))}Z`,
  }
}

/** A hand closed round something held: a book's spine, a card, a needle. */
export function gripHand(wrist: P, angle: number, size = 1): Part {
  const at = handFrame(wrist, angle, size)
  return {
    d: `M${pt(at(-1, -4))}L${pt(at(5, -5.4))}Q${pt(at(10.6, -4.6))} ${pt(at(10.6, 0))}Q${pt(at(10.6, 4.6))} ${pt(at(5, 5.4))}L${pt(at(-1, 4))}Z`,
  }
}

/**
 * A pointing hand: the fingers curled into the palm and the forefinger
 * straight out along `angle`, the thumb laid along it.
 */
export function pointingHand(wrist: P, angle: number, size = 1, thumb: 1 | -1 = 1): Part[] {
  const at = handFrame(wrist, angle, size)
  const c = at(4.6, 0)
  const r = 4.4 * size
  return [
    {
      d: `M${n(c[0] - r)} ${n(c[1])}a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0Z`,
    },
    { d: limb([at(7, -thumb * 2.2), at(18, -thumb * 2.2)]), w: 2.2 * size },
    { d: limb([at(3.4, thumb * 3.4), at(7.6, thumb * 5.8)]), w: 2.2 * size },
  ]
}

// ── FEET ────────────────────────────────────────────────────────────────────

/** A gentleman's low shoe for an evening, the heel at the ankle point, toe to the right. */
function pump([x, y]: P): string {
  return `M${n(x - 4.6)} ${n(y - 4.6)}L${n(x + 5)} ${n(y - 4)}C${n(x + 9.4)} ${n(y - 3.2)} ${n(x + 11.6)} ${n(y - 1.4)} ${n(x + 11.6)} ${n(y + 1)}L${n(x - 5.4)} ${n(y + 1)}Z`
}
/** A riding boot's foot, heavier than a shoe. */
function bootFoot([x, y]: P): string {
  return `M${n(x - 5.4)} ${n(y - 8)}L${n(x + 5.6)} ${n(y - 6.4)}C${n(x + 10.6)} ${n(y - 5.4)} ${n(x + 13.4)} ${n(y - 2.6)} ${n(x + 13.4)} ${n(y + 1)}L${n(x - 6.4)} ${n(y + 1)}Z`
}
/** A lady's flat slipper, its toe showing under the hem. */
function slipper([x, y]: P): string {
  return `M${n(x - 3)} ${n(y - 2.6)}L${n(x + 4)} ${n(y - 2.6)}C${n(x + 7.6)} ${n(y - 2.2)} ${n(x + 9.6)} ${n(y - 0.8)} ${n(x + 10)} ${n(y + 1)}L${n(x - 3.4)} ${n(y + 1)}Z`
}

/**
 * The turned-down top of a riding boot, a little below the knee of `leg`
 * (hip, knee, ankle): a paper band across the shin.
 */
function bootTop(leg: P[], w: number): string {
  const [k, a] = [leg[1], leg[2]]
  const p = lerp(k, a, 0.16)
  const { u } = axes(k, a)
  const v: P = [-u[1], u[0]]
  const h = w / 2 + 0.6
  return poly([
    [p[0] + v[0] * h, p[1] + v[1] * h],
    [p[0] - v[0] * h, p[1] - v[1] * h],
    [p[0] - v[0] * h + u[0] * 3, p[1] - v[1] * h + u[1] * 3],
    [p[0] + v[0] * h + u[0] * 3, p[1] + v[1] * h + u[1] * 3],
  ])
}

// ── HEADS ───────────────────────────────────────────────────────────────────
// Each in profile facing right, centred on (0, 0), the crown near y -20, the
// chin near y 17 to 22, the base of the neck at y 21 to 27. The nose, brow
// and chin are pushed out further than life: the rough edge of the print
// eats about two units, and a profile must survive that at phone width.

/** A plain man's head, for anyone the text does not describe. */
export const HEAD_MAN =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14 16 -8L16 -5L22.5 3.5L17 5.5L17.5 8.5L16 10L17 12.5C16.5 16 13 18.5 8 18.5L6 22Z'
/** Darcy: longer in the face, a long straight nose, a strong chin: "handsome features, noble mien". */
export const HEAD_DARCY =
  'M-9 24C-10.4 18 -15.4 13 -16.2 4C-17 -10 -8 -21 3 -21C11.4 -21 16.4 -15.4 16.4 -9L16.6 -5.6L23.6 4.4L17.6 6.2L18 9.2L16.4 10.6L17.8 13.4C17.8 18.2 14.8 21 9.4 21.4L7 24Z'
/** Bingley: a rounder, shorter face, a short nose: "a pleasant countenance". */
export const HEAD_BINGLEY =
  'M-9 22C-10 16 -15 12 -16 3C-17 -10 -8 -20 3 -20C11 -20 16 -14.4 16 -8.4L16 -5.2L21.4 3.2L16.8 5.2L17.4 8L15.6 9.4L17 11.8C16.8 15.8 13.6 18.6 8.4 18.8L6 22Z'
/** Mr Bennet: a lean, long face and a long nose with a rise in the bridge. */
export const HEAD_BENNET =
  'M-8 24C-9 18 -14 14 -15 5C-16 -9 -8 -20 3 -20C11 -20 15.4 -15 15.6 -9L15.8 -5.6L18.2 -2.4L22.6 5.6L17 7L17.4 9.8L15.8 11.2L16.8 13.6C16.6 18.4 13.6 21.2 8.6 21.6L6.6 24Z'
/** Wickham: a regular, handsome profile, "a fine countenance". */
export const HEAD_WICKHAM =
  'M-9 23C-10 17 -15 12.6 -16 3.6C-17 -10 -8 -20.4 3 -20.4C11.2 -20.4 16.2 -14.6 16.2 -8.6L16.4 -5.4L22.8 3.8L17.2 5.6L17.8 8.4L16 9.8L17.4 12.2C17.2 16.6 14 19.4 8.6 19.6L6.6 23Z'
/** Mr Collins: "tall, heavy looking": a heavy jaw and jowl, a thick neck. */
export const HEAD_COLLINS =
  'M-10 27C-12 21 -17 16 -17.5 6C-18 -8 -10 -19.5 2 -19.5C10.5 -19.5 15.5 -15 16 -9L16.4 -6L21.8 3.4L17 5.2L17.4 8.2L16 9.6L17.4 12.2C19 16 18.8 20.4 15.6 23.4C11.6 26.4 4 27 -2 27Z'

/** A plain woman's head, for any lady the text does not describe. */
export const HEAD_WOMAN =
  'M-8 21C-9 15 -14 11 -15 3C-16 -9 -7 -19 2 -19C10 -19 14.5 -13 14.5 -7.5L15 -4.5L20.5 3L15.5 4.8L16 7.5L14.8 9L15.6 11.5C15 15 12 17 7.5 17L5.5 21Z'
/** Elizabeth: a finer profile, a short straight nose and a firm little chin. */
export const HEAD_ELIZABETH =
  'M-8 21C-9 15 -14 11 -15 3C-16 -9 -7 -19 2 -19C10 -19 14.4 -13.4 14.6 -7.8L15 -4.6L19.8 2.8L15.4 4.6L15.9 7.2L14.4 8.4L15.6 10.8C15.2 14.6 12.2 16.8 7.6 17L5.5 21Z'
/** Lydia: "a stout, well-grown girl": a fuller face and a rounder chin. */
export const HEAD_LYDIA =
  'M-9 21C-10.4 15 -15.4 11 -16 2.6C-16.6 -9.6 -7.6 -19.4 2 -19.4C10 -19.4 14.6 -13.6 14.8 -7.8L15.2 -4.6L20.2 3L15.6 4.8L16 7.4L14.6 8.8L15.8 11.2C15.6 15.6 12 18.4 7 18.4L5 21Z'
/** Mrs Bennet: a matron's fuller face, once handsome, a soft second chin. */
export const HEAD_MATRON =
  'M-8.5 23C-10 17 -15 13 -16 4C-17 -9.4 -8 -19.6 2.4 -19.6C10.6 -19.6 15 -14 15.2 -8L15.6 -4.8L20.6 3.4L15.8 5.2L16.2 7.6L14.8 9L16 11.4C16.2 15.6 13.6 18.2 9.4 18.8C10.2 20.4 9 22 6.4 23Z'
/** Mary: "the only plain one": a longer nose, a thin mouth, a narrow chin. */
export const HEAD_MARY =
  'M-8 21C-9 15 -14 11 -15 3C-16 -9 -7 -19 2 -19C10 -19 14.4 -13.4 14.6 -7.6L15 -4.2L21 4L15.6 5.4L15.9 7.8L14.6 9L15.4 11.4C14.8 15.2 12 17.2 7.4 17.2L5.5 21Z'

/** Lady Catherine: "tall, large", "strongly-marked features": a long nose rising at the bridge, a strong chin, a jowl. */
export const HEAD_CATHERINE =
  'M-9 24C-10.6 18 -15.6 13.4 -16.6 4.4C-17.6 -9.6 -8.4 -20.4 2.6 -20.4C11 -20.4 15.6 -14.8 15.8 -8.6L16.2 -5.4L18.4 -3L23 5.2L17 6.8L17.4 9.4L15.8 10.8L17.4 13.2C17.6 17.4 15.2 19.8 11 20.6C11.4 22.2 10 23.6 7.2 24Z'

/** The point between the lips on each head, for an open mouth (MOUTH_OPEN). */
const MOUTH: Record<string, P> = {
  man: [16.2, 10],
  darcy: [16.6, 10.6],
  bingley: [15.8, 9.4],
  bennet: [16, 11.2],
  wickham: [16.2, 9.8],
  collins: [16.2, 9.6],
  woman: [15, 9],
  elizabeth: [14.6, 8.4],
  lydia: [14.8, 8.8],
  matron: [15, 9],
  mary: [14.8, 9],
  catherine: [17, 10.2],
}

/**
 * An open mouth on a head printed in ink: a notch cut into the profile
 * between the lips, wide at the profile so the paper halo runs into it.
 * Fill with PAPER, in the head's frame.
 */
export function mouthOpen([x, y]: P, size = 1): string {
  return poly([
    [x + 3.6 * size, y - 1.8 * size],
    [x - 2.6 * size, y],
    [x + 3.6 * size, y + 1.8 * size],
  ])
}

// ── FEATURES, cut in paper on a head printed in ink, in the head's frame ────

/** An eye, one short cut under the brow. */
export const EYE = 'M7 -3.6Q10 -5.4 12.6 -3.6Q10 -2.2 7 -3.6Z'
/** An eye cast down: a lid line, for a face bowed over work, a book or a letter. */
export const EYE_DOWN = gouge(6.6, -2.2, 12.2, -1.2, 0.8, 0.9)
/** Darcy's proud eye: the upper lid lowered, the eye a narrow cut looking down the nose. */
export const EYE_PROUD = 'M7.2 -3Q10.6 -5.2 13.6 -3.6Q10.6 -1.8 7.2 -3Z'
/** A smiling eye: a crescent, the lower lid pushed up by the cheek. */
export const EYE_GLAD = 'M7 -3.2Q10 -6 12.8 -3.4Q10 -4.4 7 -3.2Z'
/**
 * Elizabeth's "fine eyes", "her dark eyes": the eye cut larger and open, its
 * white in paper, and the iris (FINE_IRIS: cx, cy, r) left in ink in the
 * middle of it with a paper glint, so the eye prints dark.
 */
export const FINE_EYE = 'M6.2 -3.9Q10 -7 13.6 -4Q10 -0.9 6.2 -3.9Z'
export const FINE_IRIS: [number, number, number] = [10.4, -3.9, 2]
/** A man's brow, one firm cut. */
export const BROW = gouge(6.4, -8.6, 14.6, -7.8, 0.9, -0.2)
/** Darcy's hauteur: the brow drawn level and low over the eye. */
export const BROW_LOW = gouge(6, -7.6, 15.6, -7, 1.05, 0.3)
/** A woman's brow, finer. */
export const BROW_FINE = gouge(7, -8.4, 13.4, -7.8, 0.6, -0.4)
/** A brow raised in eagerness or surprise. */
export const BROW_ARCH = gouge(6.4, -10, 13.6, -9.2, 0.65, -1.4)
/** A frown: the brow drawn down towards the nose. */
export const FROWN = gouge(5.4, -9.6, 15.8, -5.4, 1.3, -0.3)
/** The ear, stroked in paper at about 1.1. A woman's is under her curls. */
export const EAR = 'M-4.6 -1.6C-1.4 -3.4 1.4 -1.2 1 2.6C0.6 6 -2 7.4 -4.4 6.2'
/**
 * A smile on a head printed in ink: the crease from the wing of the nose to
 * the corner of the mouth, cut in paper. (On an ink face a cut mouth reads as
 * teeth, so the profile and the crease carry the smile.)
 */
export const SMILE_LINE = gouge(15.6, 5.2, 13.2, 10.2, 0.45, -0.9)
/** The same on a woman's smaller face. */
export const SMILE_LINE_W = gouge(14.6, 4.8, 12.6, 9.2, 0.42, -0.8)
/**
 * Mr Bennet's dry half-smile: the crease from the nose to a mouth drawn up at
 * its corner. (Cut first as two strokes, it read as scratches on the chin.)
 */
export const WRY = gouge(16.6, 6.4, 13.8, 11.8, 0.5, -1.1)
/** The lines of a man of fifty: under the eye and from the nose to the mouth. */
export const AGE_LINES =
  gouge(8.2, -0.6, 13.4, -0.8, 0.35, 0.6) + gouge(17.4, 7.2, 15, 12, 0.35, 0.6)
/** Collins's heavy jowl and the fold of his second chin. */
export const COLLINS_JOWL = gouge(4, 6, 8.4, 18, 0.5, 1.6) + gouge(6, 22.4, 14.8, 22.2, 0.45, 1)
/**
 * Lady Catherine's strongly-marked features: the line from the wing of the
 * nose down past a mouth turned down at its corner, the jowl, and a line
 * under the eye. Cut in PAPER.
 */
export const CATHERINE_LINES =
  gouge(17.6, 6.6, 14.4, 12, 0.45, -0.8) +
  gouge(13.4, 12.8, 16.2, 10.8, 0.45, 0.4) +
  gouge(4.6, 8.4, 9.4, 19.4, 0.45, 1.4) +
  gouge(8.6, -0.4, 13.6, -0.8, 0.35, 0.6)
/**
 * Where the spot colour flushes a face: one patch on the cheek, [cx, cy, rx,
 * ry], below the eye and well clear of the mouth. Only where the text gives one.
 */
export const FLUSH: [number, number, number, number] = [5.2, 5.8, 3.1, 2.1]

// ── HAIR, in the frame of the heads ─────────────────────────────────────────

/**
 * The paper line where dark hair meets a face printed in ink: from the top of
 * the brow back round the temple and down in front of the ear (the short
 * whisker of the period), then behind the ear to the nape. Stroke in PAPER at
 * about 1.1. Without it, dark hair on a dark head reads as a hood.
 */
export const HAIRLINE_MAN =
  'M14.2 -13.2C9 -12 4.6 -10 2.4 -7.4C1 -5.6 1.4 -2 1.6 1.6M-5.4 -4.4C-6.4 0 -7.6 4.6 -9.6 9.4'
/** Darcy's dark hair, brushed forward over the crown to points at the brow. INK. */
export const DARCY_HAIR =
  'M17.4 -13.4L14.2 -16.6L16.2 -19.2L11.6 -20.4C10 -23.4 5.6 -24.6 1.8 -23.8C-2.6 -25.2 -8.8 -23.6 -11.6 -20.6C-15.6 -19.6 -18.4 -15.4 -17.8 -11.2C-19.6 -7.4 -18.8 -2.6 -16.6 0.4C-17 4.6 -15.2 8.2 -12.4 10.4L-9.2 10C-10 4 -9 -2 -5.4 -5.2C-1.6 -8.6 3.6 -10.8 9 -12.2C11.8 -12.8 14.6 -13.2 17.4 -13.4Z'
/** The strands of it, brushed forward. Stroke in PAPER at about 0.9. */
export const DARCY_STRANDS =
  'M-14.6 -12.4Q-6 -21 9.6 -18.4M-15.8 -4.4Q-8 -15.6 4.6 -14.8M-13.2 4.2Q-11 -6 -2 -9.6'
/** Bingley's hair, in short curls over the crown. INK. */
export const BINGLEY_HAIR =
  'M15.4 -13.2C16.6 -16 15.2 -18.6 12.4 -19C12 -22.4 8.4 -24 5.2 -22.8C3.2 -25.4 -1.2 -25.6 -3.6 -23.4C-6.8 -24.6 -10.6 -23 -11.6 -20C-15.2 -19.6 -17.4 -16.4 -16.6 -13C-19.4 -11 -19.8 -7 -17.8 -4.4C-19.6 -1.4 -18.8 2.6 -16 4.4C-16 7.6 -14 10 -11 10.6L-9 9.8C-10 4 -9 -2 -5.4 -5.2C-1.6 -8.6 3.6 -10.8 9 -12.2C11.2 -12.8 13.4 -13.2 15.4 -13.2Z'
/** The curls in it, as small open rings. Stroke in PAPER at about 0.9. */
export const BINGLEY_CURLS = [
  [9, -18.6],
  [2.6, -19.6],
  [-4, -19],
  [-10, -16],
  [-13.6, -9.6],
  [-14.4, -2.4],
  [-3.4, -12.6],
  [-9.4, -6.4],
]
  .map(([x, y], i) => {
    const a0 = 0.6 + i * 0.7
    const a1 = a0 + Math.PI * 1.4
    return `M${n(x + 2 * Math.cos(a0))} ${n(y + 2 * Math.sin(a0))}A2 2 0 1 1 ${n(x + 2 * Math.cos(a1))} ${n(y + 2 * Math.sin(a1))}`
  })
  .join('')
/** Wickham's hair, swept up and back from the brow in a wave. INK. */
export const WICKHAM_HAIR =
  'M15.6 -13.6C17.4 -17.4 15 -21.4 10.4 -22.8C5.4 -24.6 -2 -24.4 -7.6 -22C-13.4 -19.6 -17.8 -14 -18.2 -7C-18.6 -0.6 -16.6 5.6 -12.4 10.2L-9.2 9.8C-10 4 -9 -2 -5.4 -5.2C-1.6 -8.6 3.6 -10.8 9 -12.2C11.4 -12.8 13.6 -13.4 15.6 -13.6Z'
export const WICKHAM_STRANDS =
  'M13.8 -17.6Q4 -22.4 -8.4 -18.6M9.2 -13.6Q-1.6 -17.6 -13.4 -10.2M-15.2 -1.6Q-13.2 -8.6 -6 -11.4'
/** Mr Collins's hair, combed flat to the skull. INK, with its combed lines. */
export const COLLINS_HAIR =
  'M15 -12.6C13 -18.6 7 -21.4 0.6 -21.2C-8 -21 -15.6 -15.6 -18 -7C-19.6 -1 -18.8 5.4 -15.4 10.6L-9.6 10.2C-10.8 4.6 -10.2 -1.6 -7 -5.6C-3.2 -10.2 3.6 -12.4 15 -12.6Z'
export const COLLINS_STRANDS =
  'M12.4 -16.4Q0 -20.4 -12.6 -12.6M8.8 -13.6Q-3 -15.8 -15.2 -5.6M-16.6 2.4Q-14.6 -6 -7.6 -9.4'
/**
 * Mr Bennet's thinning hair, grey at the temple: close paper strands cut back
 * over the dark head from a high brow to the nape. Fill with PAPER. (A solid
 * paper patch read on the Silas Marner prints as a bandage; strands read as
 * grey hair.)
 */
export const BENNET_HAIR =
  gouge(11, -18.4, -4, -20.2, 0.85, -1.2) +
  gouge(8.4, -16.2, -9.4, -17.4, 0.9, -1.6) +
  gouge(5.4, -13.6, -13.2, -12, 0.9, -1.8) +
  gouge(2.4, -10.8, -15.4, -5, 0.9, -1.8) +
  gouge(0.2, -7.6, -16, 2, 0.85, -1.6) +
  gouge(-2.4, -3.8, -15, 8.6, 0.8, -1.2) +
  gouge(-4.2, 0.6, -11.8, 14, 0.7, -0.8)

/**
 * A lady's dark hair dressed up, as in 1811: drawn back from the face over
 * the crown to a knot high at the back of the head (KNOT), the ear under it.
 * INK. Its line at the face is HAIRLINE_W, cut in paper.
 */
export const HAIR_UP =
  'M14 -12.4C11.6 -19.4 1.6 -22.6 -6 -20.8C-13.6 -19 -18.4 -12.4 -18.4 -3.6C-18.4 2.6 -16.6 7.4 -13.6 10.4L-6 10C-4.6 7.6 -3.6 4.6 -3.2 1.4C-2.6 -3.4 -0.6 -7.4 3.6 -10C6.8 -11.8 10.2 -12.6 14 -12.4Z'
/** The knot itself, round, high at the back of the head. INK. */
export const KNOT = 'M-21.6 -17.6a7 6.4 0 1 0 14 0a7 6.4 0 1 0 -14 0Z'
/** Where the hair meets the face and its strands drawn up to the knot. Stroke in PAPER at about 1. */
export const HAIRLINE_W =
  'M13.6 -12.4C8.4 -11.6 3.6 -9.2 1 -5.4C-0.8 -2.6 -1.6 1.6 -3 5.4M-15.6 -8.4Q-14.6 -14.4 -10.4 -15.6M-12.6 2.4Q-12.4 -8.4 -6.4 -13.2M-14.4 -18.6Q-12.4 -21.6 -9.2 -20.4'
/** Curls at the temple and over the brow: [cx, cy] of small open rings, stroked in PAPER. */
const TEMPLE_CURLS: P[] = [
  [11.2, -14.6],
  [7, -13.8],
  [3.4, -12],
  [0.6, -8.6],
  [-0.6, -4.4],
]
/** The curls' outer edge, so they stand off the brow in silhouette. INK. */
export const CURL_EDGE =
  'M14.6 -12.8C15.6 -15.6 13.6 -17.6 11 -17.4C9.6 -18.6 6.6 -18.4 5.4 -16.6C2.6 -16.6 0.6 -14.6 0.8 -12.2C-1.8 -11.4 -3 -8.8 -2.2 -6.4C-3.6 -4.4 -3.4 -1.6 -1.6 0L1 -1C1 -4.6 2.2 -7.6 4.8 -9.8C7.6 -12 11 -12.8 14.6 -12.8Z'
function rings(centres: P[], r: number, turn = 0) {
  return centres
    .map(([x, y], i) => {
      const a0 = turn + 0.9 + i * 0.8
      const a1 = a0 + Math.PI * 1.45
      return `M${n(x + r * Math.cos(a0))} ${n(y + r * Math.sin(a0))}A${r} ${r} 0 1 1 ${n(x + r * Math.cos(a1))} ${n(y + r * Math.sin(a1))}`
    })
    .join('')
}
export const TEMPLE_RINGS = rings(TEMPLE_CURLS, 1.7)
/** Jane's band of ribbon, worn across the hair from the brow to behind the knot. Fill with PAPER. */
export const BANDEAU =
  'M13.6 -14.8C6 -19.4 -4.6 -20.4 -12.8 -15.6L-11.6 -12.4C-4.6 -16.4 5 -15.8 12 -11.6Z'
/** Lydia's mass of curls, tied with a ribbon: a larger knot and curls to the nape. INK. */
export const LYDIA_HAIR =
  'M14.6 -12.6C15.6 -15.6 13.6 -18 10.8 -17.8C9.4 -21 5.4 -22 2.4 -20.6C-0.4 -23.6 -5.6 -23.4 -8.2 -20.8C-11.6 -21.6 -15.2 -19.4 -15.8 -16C-19.4 -14.8 -21 -11 -19.8 -7.8C-22 -5.2 -21.6 -1.2 -19.2 0.8C-20.2 4 -18.6 7.4 -15.6 8.6C-15 11.6 -12 13.4 -9 12.6L-6 10C-4.6 7.6 -3.6 4.6 -3.2 1.4C-2.6 -3.4 -0.6 -7.4 3.6 -10C6.8 -11.8 10.6 -12.8 14.6 -12.6Z'
const LYDIA_CURLS: P[] = [
  [11, -14.8],
  [5.6, -17.4],
  [-0.4, -18.4],
  [-6.8, -17.4],
  [-12.6, -14.6],
  [-16.4, -8.8],
  [-16.6, -2.4],
  [-14.4, 4.4],
  [-10.2, 9],
  [3, -13.6],
  [0.4, -7.6],
]
export const LYDIA_RINGS = rings(LYDIA_CURLS, 1.9, 0.4)
/** Lydia's ribbon, a paper band round the curls. Fill with PAPER. */
export const LYDIA_RIBBON =
  'M6.4 -21.6C0 -24 -9 -22.6 -14.8 -17.6L-13.2 -15C-8 -19 -0.4 -20.6 5.2 -18.6Z'
/** Mary's hair, drawn flat and smooth from a parting to a small low knot, with no curls. INK. */
export const MARY_HAIR =
  'M13.6 -12.6C11 -19.2 1.6 -21.6 -5.6 -20C-13 -18.4 -17.6 -12 -17.8 -3.6C-18 2.6 -16.4 7.4 -13.6 10.4L-6 10C-4.6 7.6 -3.6 4.6 -3.2 1.4C-2.6 -3.4 -0.6 -7.4 3.6 -10C6.6 -11.8 10 -12.6 13.6 -12.6Z' +
  'M-22.4 -6a5.2 4.8 0 1 0 10.4 0a5.2 4.8 0 1 0 -10.4 0Z'
export const MARY_LINES =
  'M13 -12.8C8 -12 3.4 -9.4 0.8 -5.6C-1 -2.6 -1.8 1.6 -3 5.4M-14 -13.6Q-6 -19.6 6 -17.4M-16.4 -4.8Q-12 -14.2 0 -15'

/**
 * A married woman's cap of 1811: a soft crown puffed up over the top and back
 * of the head, gathered by a ribbon, and a frilled edge round the face down
 * to the ear. The dark hair shows below it at the nape, and in curls at the
 * brow (CAP_CURLS). Fill with PAPER and outline in ink; stroke CAP_FRILL and
 * CAP_BAND in ink over it. (Cut first to cover the whole back of the head to
 * the nape, it read at panel size as a helmet.)
 */
/** The cap's edge round the face, from the ear up to the brow. */
const CAP_EDGE: P[] = [
  [-3.8, -1],
  [-1.2, -5],
  [0.6, -8.6],
  [3, -11.4],
  [6.4, -13.2],
  [10, -13.6],
  [13.4, -12.8],
]
/** Scallops along a line of points, each bulging `bulge` to the right of the way the line runs. */
function scallops(pts: P[], bulge: number): string {
  let d = ''
  for (let i = 1; i < pts.length; i++) {
    const [ax, ay] = pts[i - 1]
    const [bx, by] = pts[i]
    const L = Math.hypot(bx - ax, by - ay) || 1
    d += `Q${n((ax + bx) / 2 - ((by - ay) / L) * bulge)} ${n((ay + by) / 2 + ((bx - ax) / L) * bulge)} ${n(bx)} ${n(by)}`
  }
  return d
}
export const CAP =
  'M13.4 -12.8C15.4 -18.6 11.6 -26 2.6 -28.2C-7 -30.4 -16.6 -26.4 -20.4 -18.2C-22.6 -13 -21.8 -6.6 -18.8 -2.2C-14.6 -0.4 -9 -0.2 -3.8 -1' +
  scallops(CAP_EDGE, 2.2) +
  'Z'
/** The line where the frill is sewn to the cap, just inside its scalloped edge. */
export const CAP_FRILL =
  'M-6.6 -2.4' +
  scallops(
    CAP_EDGE.map(([x, y]) => [x - 2.4, y - 2.6] as P),
    1,
  )
export const CAP_BAND = 'M8.6 -26.8Q-6.4 -21.6 -18.8 -6.4'
export const CAP_CURLS = rings(
  [
    [12, -11.6],
    [8.2, -12],
  ],
  1.4,
)

/** A matron's kerchief, crossed over the bodice at the neck: in the body's frame, see `Person`. */

// ── HATS AND BONNETS, in the frame of the heads, for the panels out of doors ─

/** The tall round hat of about 1811, its crown a little wider at the top. INK, a paper band. */
export const TALL_HAT =
  'M-18.5 -10C-17.5 -13.5 -14.5 -14.2 -12.8 -14.2L-14.6 -38.6C-5 -41.2 6 -41.2 14.6 -38.6L12.8 -14.2C14.8 -14.2 18 -13.2 19 -10C9 -7.8 -8.5 -7.8 -18.5 -10Z'
export const TALL_HAT_BAND = gouge(-13, -19.5, 13, -19.5, 1)
/**
 * A lady's bonnet of the time: a soft crown over the back of the head, the
 * brim standing forward over the brow and down past the ear, so the face
 * still shows. INK, its edges cut in paper (BONNET_LINES), and the ribbon
 * tied in a bow at the side of the jaw (BONNET_BOW, PAPER, kept off the chin).
 */
export const BONNET =
  'M-12 12C-16 8 -18.6 -2 -17.6 -10C-16.4 -20 -8 -26.4 2 -26.6C10 -27 18 -29.4 23.8 -27.4C25 -24 22.6 -20.6 19 -18.8C12.8 -16.6 7 -13.4 4.4 -8.8C2.6 -4 2.2 2 3.2 8C-0.8 12 -6 13.6 -12 12Z'
export const BONNET_LINES =
  'M1.6 -26.2C-1.8 -17 -2.4 -2 -0.4 9.4M-15.4 -12.6Q-8 -14.6 -1.4 -12M23.6 -27.6C21 -23 16.6 -20 11 -17.8'
export const BONNET_BOW =
  'M3.2 8L4.4 16M4.4 16C1 13.4 -2.2 14.6 -1.4 17.4C-0.6 19.6 2.6 18.6 4.4 16ZM4.4 16C6.4 13.2 9.6 13.6 9.4 16.4C9.2 18.8 6 18.8 4.4 16Z'

// ── AT THE NECK, in the frame of the heads ──────────────────────────────────

/**
 * The white neckcloth of about 1811, wound round the throat below the jaw and
 * puffed a little at the front. Fill with PAPER, outlined in ink. COLLAR_POINT
 * is the shirt's collar standing up from it against the cheek, the same.
 * (First cut wound up to the chin, it read at panel size as a neck brace.)
 */
export const CRAVAT =
  'M-5.2 19.4C-1.2 18.4 4 18.6 8.6 20C10.4 22 10.6 25 9.4 27.4C4.8 28.6 -0.6 28.6 -4.8 27.6C-6 25.2 -6.2 22 -5.2 19.4Z'
export const COLLAR_POINT = 'M3 19.8L5.2 14.6L7.8 20.2Z'
/** The fold of the neckcloth. Stroke in INK at about 0.7. */
export const CRAVAT_FOLDS = 'M-2.6 23.6Q2.6 22.6 8.8 24'

// ── GARMENTS, in the figure's frame, facing right ───────────────────────────

/**
 * The gentleman's tailcoat of about 1811 on the line from neck to hip, facing
 * right: a high collar standing up behind the neck, the shoulders `width`
 * deep, the front cut square across at the waist (`front` units below the
 * hip; negative is above it), and the tails hanging behind to `tails` below
 * the hip. `swing` pushes the tails back, as on a man who bows or turns.
 */
export function tailcoat(
  neck: P,
  hip: P,
  {
    width = 30,
    tails = 50,
    front = -3,
    swing = 0,
    collar = 9,
  }: { width?: number; tails?: number; front?: number; swing?: number; collar?: number } = {},
): string {
  const { u, fr } = axes(neck, hip)
  const at = (o: P, a: number, b: number) => along(o, u, a, fr, b)
  const h = width / 2
  const tail = (a: number, b: number): P => {
    const p = at(hip, a, b)
    return [p[0] - swing, p[1]]
  }
  return poly([
    at(neck, -3, h * 0.42),
    at(neck, 4, h * 0.82),
    at(neck, 18, h * 1.02),
    at(hip, front - 6, h * 0.92),
    at(hip, front, h * 0.84),
    at(hip, front + 1, h * 0.2),
    tail(tails * 0.88, -h * 0.02),
    tail(tails, -h * 0.34),
    tail(tails * 0.92, -h * 0.72),
    at(hip, -2, -h * 0.84),
    at(neck, 8, -h * 1.0),
    at(neck, -collar + 4, -h * 0.72),
    at(neck, -collar, -h * 0.42),
    at(neck, -collar + 3, -h * 0.02),
  ])
}

/**
 * The edge of the tailcoat's cut, from the square front at the waist round to
 * the tip of the tails, as `tailcoat` cuts it: stroke in PAPER, so the coat
 * reads as a tailcoat over dark breeches too.
 */
export function tailcoatEdge(
  neck: P,
  hip: P,
  {
    width = 30,
    tails = 50,
    front = -3,
    swing = 0,
  }: { width?: number; tails?: number; front?: number; swing?: number } = {},
): string {
  const { u, fr } = axes(neck, hip)
  const at = (o: P, a: number, b: number) => along(o, u, a, fr, b)
  const h = width / 2
  const tail = (a: number, b: number): P => {
    const p = at(hip, a, b)
    return [p[0] - swing, p[1]]
  }
  return limb([
    at(hip, front, h * 0.84),
    at(hip, front + 1, h * 0.2),
    tail(tails * 0.88, -h * 0.02),
    tail(tails, -h * 0.34),
  ])
}

/**
 * The top of a gown, back to front, as points: by day close round the base of
 * the neck; in the evening (`low`) cut lower and wider, curving down at the
 * front. (Cut first straight across at the neck, it set every lady's head on a
 * plinth.)
 */
function neckline(neck: P, width: number, low: boolean): P[] {
  const h = width / 2
  const [x, y] = neck
  return low
    ? [
        [x - h * 0.72, y + 1.6],
        [x - h * 0.2, y + 5],
        [x + h * 0.4, y + 7.4],
        [x + h * 0.82, y + 7.6],
      ]
    : [
        [x - h * 0.56, y - 0.6],
        [x - h * 0.1, y + 2.4],
        [x + h * 0.4, y + 3.6],
        [x + h * 0.7, y + 3.2],
      ]
}

/** The skin of the neck and shoulders above an evening gown's neckline. */
export function decolletage(neck: P, width: number): string {
  const h = width / 2
  const [x, y] = neck
  return poly([
    [x - h * 0.6, y - 3],
    [x + h * 0.5, y - 2],
    [x + h * 0.86, y + 8.4],
    [x - h * 0.76, y + 3],
  ])
}

/**
 * A lady's gown of about 1811, standing, facing right: the waist high under
 * the bust (`waist` below the neck), the skirt falling straight to the floor
 * at `floor`, a little wider at the foot (`flare`), and drawn back a little at
 * the hem behind (`train`). With `low`, the evening's low neckline, the
 * skin above it given by `decolletage`; without, the day's, near the throat.
 */
export function gown(
  neck: P,
  floor: number,
  {
    width = 23,
    waist = 21,
    flare = 6,
    train = 5,
    lean = 0,
    low = false,
  }: {
    width?: number
    waist?: number
    flare?: number
    train?: number
    lean?: number
    low?: boolean
  } = {},
): string {
  const h = width / 2
  const [x, y] = neck
  return poly([
    ...neckline(neck, width, low),
    [x + h * 0.98, y + 10],
    [x + h * 1.06, y + 15],
    [x + h * 0.86, y + waist],
    [x + h * 0.96 + lean * 0.4, y + waist + 30],
    [x + h * 1.02 + flare + lean, floor],
    [x - h * 1.04 - flare - train + lean, floor],
    [x - h * 1.06 - flare - train * 1.6 + lean, floor + 0.6],
    [x - h * 0.98 + lean * 0.3, y + waist + 26],
    [x - h * 0.84, y + waist],
    [x - h * 0.94, y + 8],
    [x - h * 0.8, y + 2],
  ])
}

/**
 * A lady's gown of about 1811, seated, facing right: the bodice from `neck`
 * to the high waist, the lap along the thigh from `hip` to `knee`, and the
 * skirt falling from the knee to the floor at `floor`. The back of the skirt
 * drops behind the hip to the seat.
 */
export function seatedGown(
  neck: P,
  hip: P,
  knee: P,
  floor: number,
  {
    width = 23,
    waist = 21,
    lap = 8,
    low = false,
  }: { width?: number; waist?: number; lap?: number; low?: boolean } = {},
): string {
  const h = width / 2
  const [x, y] = neck
  return poly([
    ...neckline(neck, width, low),
    [x + h * 0.98, y + 10],
    [x + h * 1.06, y + 15],
    [x + h * 0.86, y + waist],
    [hip[0] + h * 0.9, hip[1] - lap - 2],
    [knee[0] + 2, knee[1] - lap],
    [knee[0] + 7, knee[1] - lap * 0.4],
    [knee[0] + 8, knee[1] + 4],
    [knee[0] + 9, floor - 1],
    [knee[0] + 12, floor],
    [knee[0] - 15, floor],
    [knee[0] - 13, knee[1] + 6],
    [hip[0] - 4, hip[1] + 4],
    [hip[0] - h * 1.1, hip[1] + 1],
    [x - h * 0.9, y + waist],
    [x - h * 0.94, y + 8],
    [x - h * 0.8, y + 2],
  ])
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

export type Look =
  | 'elizabeth'
  | 'jane'
  | 'lydia'
  | 'kitty'
  | 'mary'
  | 'mrsBennet'
  | 'mrsPhilips'
  | 'lady'
  | 'matron'
  | 'mrBennet'
  | 'darcy'
  | 'bingley'
  | 'wickham'
  | 'collins'
  | 'philips'
  | 'officer'
  | 'man'
  | 'charlotte'
  | 'mrGardiner'
  | 'mrsGardiner'
  | 'catherine'

const WOMEN: Look[] = [
  'elizabeth',
  'jane',
  'lydia',
  'kitty',
  'mary',
  'mrsBennet',
  'mrsPhilips',
  'lady',
  'matron',
  'charlotte',
  'mrsGardiner',
  'catherine',
]
const MATRONS: Look[] = ['mrsBennet', 'mrsPhilips', 'matron', 'mrsGardiner', 'catherine']

/** How tall each person is, against a man of 1 (about 182 units, feet to crown). */
const SIZE: Record<Look, number> = {
  elizabeth: 0.9,
  jane: 0.91,
  lydia: 0.94,
  kitty: 0.89,
  mary: 0.89,
  mrsBennet: 0.9,
  mrsPhilips: 0.9,
  lady: 0.9,
  matron: 0.9,
  mrBennet: 0.99,
  darcy: 1.07,
  bingley: 0.98,
  wickham: 0.99,
  collins: 1.05,
  philips: 0.97,
  officer: 1,
  man: 1,
  charlotte: 0.9,
  mrGardiner: 0.99,
  mrsGardiner: 0.89,
  catherine: 0.99,
}

/** Shoulders, arms and legs: Collins "heavy looking", Lydia "stout", Elizabeth "light". */
const BUILD: Record<Look, { width: number; arm: number; leg: number }> = {
  elizabeth: { width: 21, arm: 5.6, leg: 6 },
  jane: { width: 22, arm: 5.8, leg: 6 },
  lydia: { width: 26, arm: 6.8, leg: 6.6 },
  kitty: { width: 21, arm: 5.6, leg: 6 },
  mary: { width: 21, arm: 5.6, leg: 6 },
  mrsBennet: { width: 27, arm: 6.8, leg: 6.6 },
  mrsPhilips: { width: 27, arm: 6.8, leg: 6.6 },
  lady: { width: 22, arm: 5.8, leg: 6 },
  matron: { width: 26, arm: 6.6, leg: 6.4 },
  mrBennet: { width: 28, arm: 8, leg: 8.8 },
  darcy: { width: 30, arm: 8.4, leg: 9.4 },
  bingley: { width: 29, arm: 8.2, leg: 9.2 },
  wickham: { width: 30, arm: 8.4, leg: 9.4 },
  collins: { width: 35, arm: 9.8, leg: 10.8 },
  philips: { width: 36, arm: 9.6, leg: 10.4 },
  officer: { width: 30, arm: 8.4, leg: 9.4 },
  man: { width: 30, arm: 8.4, leg: 9.4 },
  charlotte: { width: 22, arm: 5.8, leg: 6 },
  mrGardiner: { width: 30, arm: 8.4, leg: 9.4 },
  mrsGardiner: { width: 23, arm: 6, leg: 6.2 },
  catherine: { width: 29, arm: 7.2, leg: 7 },
}

/** What each person's gown or coat is printed in, unless the pose says otherwise. */
const DRESS: Record<Look, Tone> = {
  elizabeth: 'paper',
  jane: 'paper',
  lydia: 'paper',
  kitty: 'paper',
  mary: 'ink',
  mrsBennet: 'ink',
  mrsPhilips: 'ink',
  lady: 'paper',
  matron: 'ink',
  mrBennet: 'ink',
  darcy: 'ink',
  bingley: 'ink',
  wickham: 'ink',
  collins: 'ink',
  philips: 'ink',
  officer: 'red',
  man: 'ink',
  charlotte: 'ink',
  mrGardiner: 'ink',
  mrsGardiner: 'ink',
  catherine: 'ink',
}

const HEADS: Record<Look, { d: string; mouth: string }> = {
  elizabeth: { d: HEAD_ELIZABETH, mouth: 'elizabeth' },
  jane: { d: HEAD_WOMAN, mouth: 'woman' },
  lydia: { d: HEAD_LYDIA, mouth: 'lydia' },
  kitty: { d: HEAD_WOMAN, mouth: 'woman' },
  mary: { d: HEAD_MARY, mouth: 'mary' },
  mrsBennet: { d: HEAD_MATRON, mouth: 'matron' },
  mrsPhilips: { d: HEAD_MATRON, mouth: 'matron' },
  lady: { d: HEAD_WOMAN, mouth: 'woman' },
  matron: { d: HEAD_MATRON, mouth: 'matron' },
  mrBennet: { d: HEAD_BENNET, mouth: 'bennet' },
  darcy: { d: HEAD_DARCY, mouth: 'darcy' },
  bingley: { d: HEAD_BINGLEY, mouth: 'bingley' },
  wickham: { d: HEAD_WICKHAM, mouth: 'wickham' },
  collins: { d: HEAD_COLLINS, mouth: 'collins' },
  philips: { d: HEAD_COLLINS, mouth: 'collins' },
  officer: { d: HEAD_MAN, mouth: 'man' },
  man: { d: HEAD_MAN, mouth: 'man' },
  charlotte: { d: HEAD_WOMAN, mouth: 'woman' },
  mrGardiner: { d: HEAD_MAN, mouth: 'man' },
  mrsGardiner: { d: HEAD_WOMAN, mouth: 'woman' },
  catherine: { d: HEAD_CATHERINE, mouth: 'catherine' },
}

// ── POSES ───────────────────────────────────────────────────────────────────

/** A hand: open with the fingers apart, pointing, at rest, closed round something, or hidden. */
export type HandKind = 'open' | 'point' | 'mitt' | 'grip' | 'none'

export interface ArmPose {
  /** Shoulder, elbow and wrist, in the figure's frame. */
  pts: P[]
  hand?: HandKind
  /** The direction the fingers point, in degrees clockwise from the right. Defaults to the forearm's. */
  deg?: number
  /** Which side of the fingers the thumb is on: 1 clockwise of them, -1 anticlockwise. */
  thumb?: 1 | -1
  /** An open hand's length and how far its fingers fan. */
  size?: number
  spread?: number
}

/** What a gentleman wears below the coat. */
export type Legwear = 'stockings' | 'boots' | 'clerical'

export interface Pose {
  look: Look
  /** The head's centre and its tilt in degrees (forward, chin down, is positive). */
  head?: { at?: P; rot?: number; back?: boolean }
  /** The line of the body, neck to hip: to lean, stoop, bow or sit. */
  body?: { neck?: P; hip?: P }
  far?: ArmPose
  near?: ArmPose
  /** Hip, knee and ankle of each leg. A lady standing shows only the toe of a slipper. */
  legs?: { far: P[]; near: P[] }
  /** Sitting: a lady's skirt runs over her lap; a gentleman's tails sit on the seat. */
  seated?: boolean
  /** The gown or the coat, if not what the text gives the person. */
  dress?: Tone
  /** A ball or an evening party: a lady's puffed sleeves and long gloves. */
  evening?: boolean
  legwear?: Legwear
  /** Wickham with his commission: the officer's red coat. */
  regimentals?: boolean
  eye?: 'open' | 'down' | 'proud' | 'glad' | 'fine' | 'none'
  brow?: 'plain' | 'low' | 'arch' | 'frown'
  mouth?: 'shut' | 'open' | 'smile'
  /** A flush on the cheek, never the mouth. Only where the text gives one. */
  flush?: boolean
  /** Darcy's hauteur: his head back and his lid down. */
  proud?: boolean
  /** Out of doors: a gentleman's hat, a lady's bonnet. */
  hat?: boolean
}

const MEN_LEGS = {
  far: [
    [-3, -72],
    [-5, -38],
    [-6, -4],
  ] as P[],
  near: [
    [3, -72],
    [5, -38],
    [7, -4],
  ] as P[],
}
const MEN_ARMS = {
  far: [
    [-4, -132],
    [-7, -104],
    [-5, -80],
  ] as P[],
  near: [
    [1, -132],
    [3, -104],
    [4, -80],
  ] as P[],
}
const WOMEN_ARMS = {
  far: [
    [-3, -126],
    [-6, -104],
    [-2, -84],
  ] as P[],
  near: [
    [3, -126],
    [6, -104],
    [9, -84],
  ] as P[],
}

/** A gentleman's legs on a seat `seat` units high, knees forward to `reach`, feet on the ground. */
export function seatedLegs(seat: number, reach = 36): { far: P[]; near: P[] } {
  return {
    far: [
      [-2, -seat],
      [reach - 4, -seat - 2],
      [reach - 6, -4],
    ],
    near: [
      [2, -seat],
      [reach + 2, -seat - 1],
      [reach + 2, -4],
    ],
  }
}
/** The body of a gentleman (or, with `lady`, a lady) seated on a seat `seat` units high. */
export function seatedBody(seat: number, lean = 0, lady = false): { neck: P; hip: P } {
  return { hip: [0, -seat - 2], neck: [lean, -seat - 2 - (lady ? 50 : 66)] }
}

/** A short puffed evening sleeve over the top of the upper arm, from shoulder `sh` towards elbow `el`. */
function puffSleeve(sh: P, el: P, w: number): string {
  const { u, fr } = axes(sh, el)
  const L = Math.hypot(el[0] - sh[0], el[1] - sh[1])
  const at = (a: number, b: number) => along(sh, u, a, fr, b)
  const k = w / 2 + 1.1
  const end = L * 0.3
  return `M${pt(at(end, -k + 0.6))}L${pt(at(0, -k))}Q${pt(at(-k * 1.3, 0))} ${pt(at(0, k))}L${pt(at(end, k - 0.6))}Z`
}

/** The band of a shirt's cuff at the wrist end of an arm (shoulder, elbow, wrist). */
function cuff(pts: P[], w: number): string {
  const wr = last(pts)
  const { u, fr } = axes(pts[pts.length - 2], wr)
  const k = w / 2 + 0.5
  return poly([
    along(wr, u, -4, fr, k),
    along(wr, u, 0.6, fr, k),
    along(wr, u, 0.6, fr, -k),
    along(wr, u, -4, fr, -k),
  ])
}

/** The sash round a gown's high waist. */
function sash(neck: P, width: number): string {
  const h = width / 2
  const [x, y0] = neck
  const y = y0 + 21
  return poly([
    [x - h * 0.86, y - 2.4],
    [x + h * 0.9, y - 2.4],
    [x + h * 0.88, y + 1.6],
    [x - h * 0.86, y + 1.6],
  ])
}

/** A matron's kerchief, folded round the neck and tucked into the bodice. */
function kerchief(neck: P, width: number): string {
  const h = width / 2
  const [x, y] = neck
  return `M${n(x - h * 0.7)} ${n(y - 1)}Q${n(x)} ${n(y + 3)} ${n(x + h * 0.6)} ${n(y + 1)}L${n(x + h * 1.04)} ${n(y + 11)}Q${n(x + h * 0.4)} ${n(y + 16)} ${n(x - h * 0.2)} ${n(y + 14)}L${n(x - h * 0.9)} ${n(y + 7)}Z`
}

/**
 * The front of a gentleman's coat, over the coat: the waistcoat showing
 * between its fronts (black for a clergyman), the edge of the lapel, and for
 * an officer the dark standing collar (so the red never reaches his face) and
 * the paper cross-belt.
 */
function coatFront(neck: P, hip: P, width: number, clerical: boolean, officer: boolean): Part[] {
  const { u, fr } = axes(neck, hip)
  const h = width / 2
  const at = (o: P, a: number, b: number) => along(o, u, a, fr, b)
  const out: Part[] = [
    {
      d: poly([
        at(neck, 3, h * 0.86),
        at(neck, 18, h * 1.02),
        at(hip, -3.4, h * 0.88),
        at(hip, -3.4, h * 0.52),
        at(neck, 8, h * 0.56),
      ]),
      tone: clerical ? 'ink' : 'paper',
      bare: true,
    },
    {
      d: gouge(...at(neck, 2, h * 0.6), ...at(neck, 21, h * 0.7), 0.75),
      tone: 'paper',
      bare: true,
    },
  ]
  if (officer) {
    out.push({
      d: poly([
        at(neck, -9.4, -h * 0.4),
        at(neck, -6.4, -h * 0.74),
        at(neck, 2.6, -h * 0.84),
        at(neck, 3.6, h * 0.24),
        at(neck, -1.2, h * 0.44),
        at(neck, -8, h * 0.08),
      ]),
      tone: 'ink',
    })
    const a0 = at(neck, 3, -h * 0.72)
    const a1 = at(hip, -2, h * 0.8)
    out.push({ d: gouge(a0[0], a0[1], a1[0], a1[1], 1.7), tone: 'paper', bare: true })
  }
  return out
}

function build(p: Pose) {
  const look = p.look
  const woman = WOMEN.includes(look)
  const matron = MATRONS.includes(look)
  const B = BUILD[look]
  const officer = look === 'officer' || (look === 'wickham' && !!p.regimentals)
  const cloth: Tone = p.dress ?? (officer ? 'red' : DRESS[look])
  const skin: Tone = 'ink'
  const defNeck: P = woman ? [0, -132] : [0, -138]
  const defHip: P = woman ? [0, -80] : [0, -72]
  const neck: P = p.body?.neck ?? defNeck
  const hip: P = p.body?.hip ?? defHip
  const proud = !!p.proud
  const hAt: P = p.head?.at ?? (woman ? [neck[0] + 2.5, neck[1] - 21] : [neck[0] + 3, neck[1] - 22])
  const rot = p.head?.rot ?? (proud ? -7 : 0)
  // With `back`, the head turns to look back over the shoulder, the body
  // still facing forward: Darcy "turning round" to look at Elizabeth.
  const headT = `translate(${n(hAt[0])} ${n(hAt[1])}) rotate(${rot})${p.head?.back ? ' scale(-1 1)' : ''}`
  const legs = p.legs ?? MEN_LEGS
  const far = p.far ?? { pts: woman ? WOMEN_ARMS.far : MEN_ARMS.far }
  const near = p.near ?? { pts: woman ? WOMEN_ARMS.near : MEN_ARMS.near }
  const evening = !!p.evening && woman
  const legwear: Legwear =
    p.legwear ?? (look === 'collins' ? 'clerical' : officer ? 'boots' : 'stockings')
  const parts: Piece[] = []

  const handOf = (a: ArmPose, tone: Tone, sep?: number): Part[] => {
    const kind = a.hand ?? 'mitt'
    const wrist = last(a.pts)
    const angle = a.deg ?? endAngle(a.pts)
    const s = woman ? 0.86 : 1
    const out: Part[] =
      kind === 'none'
        ? []
        : kind === 'mitt'
          ? [mitt(wrist, angle, s)]
          : kind === 'grip'
            ? [gripHand(wrist, angle, s)]
            : kind === 'point'
              ? pointingHand(wrist, angle, woman ? 0.86 : 1, a.thumb ?? 1)
              : openHand(wrist, angle, {
                  size: a.size ?? (woman ? 13 : 15),
                  spread: a.spread ?? 18,
                  thumb: a.thumb,
                })
    return out.map((q) => ({ ...q, sep, tone }))
  }

  const armOf = (a: ArmPose, isNear: boolean): Part[] => {
    const sep = isNear ? 1.5 : undefined
    const [sh, el] = a.pts
    if (woman && evening) {
      // A short puffed sleeve at the shoulder, the upper arm bare, and a long
      // glove from above the elbow to the fingers.
      const gloveTop = lerp(sh, el, 0.62)
      return [
        { d: limb([sh, gloveTop]), w: B.arm, sep, tone: skin },
        { d: limb([gloveTop, ...a.pts.slice(1)]), w: B.arm, sep, tone: 'paper' },
        { d: puffSleeve(sh, el, B.arm), sep, tone: cloth },
        ...handOf(a, 'paper', sep),
      ]
    }
    // By day a lady's sleeve is long. A gentleman's arm is in his coat
    // sleeve, with his shirt's cuff in paper at the wrist, so that an
    // officer's red sleeve never meets his hand.
    if (woman) return [{ d: limb(a.pts), w: B.arm, sep, tone: cloth }, ...handOf(a, skin, sep)]
    const shown = (a.hand ?? 'mitt') !== 'none'
    return [
      { d: limb(a.pts), w: B.arm, sep, tone: cloth },
      ...(shown ? [{ d: cuff(a.pts, B.arm), tone: 'paper' as Tone, bare: true }] : []),
      ...handOf(a, skin, sep),
    ]
  }

  parts.push(armOf(far, false))

  if (woman) {
    const seated = !!p.seated
    if (evening) parts.push({ d: decolletage(neck, B.width), tone: skin })
    if (seated) {
      for (const leg of [legs.far, legs.near]) {
        parts.push({ d: slipper([last(leg)[0] + 4, 0]), tone: 'ink' })
      }
      parts.push({
        d: seatedGown(neck, hip, legs.near[1], 0, { width: B.width, low: evening }),
        tone: cloth,
      })
    } else {
      // The toe of a slipper under the hem, a step forward.
      parts.push({ d: slipper([neck[0] + B.width * 0.42, 0]), tone: 'ink' })
      // A lady leaning (her neck forward of her hip) keeps her hem under her feet.
      parts.push({
        d: gown(neck, 0, { width: B.width, low: evening, lean: hip[0] - neck[0] }),
        tone: cloth,
      })
    }
    // The sash at the high waist, in the tone the gown is not; a matron's kerchief.
    parts.push({ d: sash(neck, B.width), tone: cloth === 'paper' ? 'ink' : 'paper', bare: true })
    if (matron) parts.push({ d: kerchief(neck, B.width), tone: 'paper' })
  } else {
    // Pale breeches (see the dress, above); a clergyman all in black, his
    // near thigh lifted off his coat by a paper edge.
    const breeches: Tone = legwear === 'clerical' ? 'ink' : 'paper'
    const legOf = (leg: P[], isNear = false): Part[] => {
      const [h, k, a] = leg
      const below = lerp(k, a, 0.12)
      const sep = isNear && breeches === cloth ? 1.2 : undefined
      if (legwear === 'boots')
        return [
          { d: limb([h, below]), w: B.leg + 1.2, tone: breeches },
          { d: limb([lerp(k, a, 0.08), a]), w: B.leg + 0.6, tone: 'ink' },
          { d: bootFoot([a[0], a[1] + 4]), tone: 'ink' },
        ]
      // The band at the knee where breeches end and the stocking begins.
      const { u: lu, fr: lf } = axes(k, a)
      const kw = B.leg / 2 + 0.8
      const band = poly([
        along(below, lu, -1.4, lf, kw),
        along(below, lu, 1.2, lf, kw),
        along(below, lu, 1.2, lf, -kw),
        along(below, lu, -1.4, lf, -kw),
      ])
      return [
        { d: limb([h, below]), w: B.leg + 1.2, sep, tone: breeches },
        { d: limb([below, a]), w: B.leg - 1.6, tone: legwear === 'clerical' ? 'ink' : 'paper' },
        { d: band, tone: 'ink', bare: true },
        { d: pump([a[0], a[1] + 4]), tone: 'ink' },
      ]
    }
    parts.push(...legOf(legs.far))
    parts.push({ d: limb([neck, hip]), w: B.width * 0.72, tone: cloth })
    const [h0, k0] = legs.near
    const sitting = p.seated ?? (k0[0] - h0[0] > 18 && Math.abs(k0[1] - h0[1]) < 16)
    const cut = { width: B.width, tails: sitting ? 6 : 50 }
    parts.push({ d: tailcoat(neck, hip, cut), tone: cloth })
    parts.push({
      d: tailcoatEdge(neck, hip, cut),
      w: 1.1,
      tone: cloth === 'paper' ? 'ink' : 'paper',
      bare: true,
    })
    parts.push(...legOf(legs.near, true))
    parts.push(...coatFront(neck, hip, B.width, legwear === 'clerical', officer))
  }

  // The head, and the hair, cap or hat on it. Over a dark coat or gown the
  // head is lifted off it by a paper edge, or the two run together and the
  // head reads as a hood.
  parts.push({
    d: HEADS[look].d,
    t: headT,
    tone: skin,
    sep: woman && cloth === 'paper' ? undefined : 1.1,
  })
  const hairOf: Partial<Record<Look, string>> = {
    darcy: DARCY_HAIR,
    bingley: BINGLEY_HAIR,
    wickham: WICKHAM_HAIR,
    collins: COLLINS_HAIR,
    officer: DARCY_HAIR,
    elizabeth: HAIR_UP + KNOT + CURL_EDGE,
    jane: HAIR_UP + KNOT,
    lady: HAIR_UP + KNOT + CURL_EDGE,
    lydia: LYDIA_HAIR,
    kitty: LYDIA_HAIR,
    mary: MARY_HAIR,
    charlotte: HAIR_UP + KNOT,
  }
  if (p.hat && !woman) parts.push({ d: TALL_HAT, t: headT, tone: 'ink' })
  else if (hairOf[look]) parts.push({ d: hairOf[look]!, t: headT, tone: 'ink' })
  if (matron) parts.push({ d: CAP, t: headT, tone: 'paper' })
  if (p.hat && woman) parts.push({ d: BONNET, t: headT, tone: 'ink' })

  parts.push(armOf(near, true))

  return { parts, woman, matron, cloth, neck, hip, headT, rot, officer, legwear, evening }
}

/**
 * One of the people of the novel, cut from the block: placed with its feet at
 * `at`, scaled by `scale` (on top of the person's own size), and turned to
 * face left with `flip`. `children` are drawn last, in the figure's own frame
 * (a book, a hand of cards, a letter held in the hand).
 */
export function Person({
  pose,
  at,
  scale = 1,
  flip = false,
  className,
  style,
  children,
}: {
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  className?: string
  style?: CSSProperties
  children?: ReactNode
}) {
  const b = build(pose)
  const look = pose.look
  const s = scale * SIZE[look]
  const transform = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  const { neck, hip } = b
  const { u, fr } = axes(neck, hip)

  // An officer's epaulette sits on top of the shoulder, over the arm.
  let epaulette = ''
  if (b.officer) {
    const e = along(neck, u, 4, fr, 0)
    epaulette = `M${n(e[0] - 6.4)} ${n(e[1])}a6.4 3.2 0 1 0 12.8 0a6.4 3.2 0 1 0 -12.8 0Z`
  }

  // Features are cut in paper on a face printed in ink.
  const eye =
    pose.eye ??
    (look === 'elizabeth' ? 'fine' : pose.proud ? 'proud' : look === 'bingley' ? 'glad' : 'open')
  const brow = pose.brow ?? (pose.proud ? 'low' : 'plain')
  const mouth =
    pose.mouth ??
    (look === 'mrsBennet' || look === 'lydia'
      ? 'open'
      : look === 'bingley' || look === 'wickham' || look === 'jane'
        ? 'smile'
        : 'shut')
  const browPath =
    brow === 'low'
      ? BROW_LOW
      : brow === 'arch'
        ? BROW_ARCH
        : brow === 'frown'
          ? FROWN
          : b.woman
            ? BROW_FINE
            : BROW
  const [fx, fy, frx, fry] = FLUSH
  const headMouth = MOUTH[HEADS[look].mouth]

  return (
    <Cut parts={b.parts} transform={transform} className={className} style={style}>
      {epaulette && <path d={epaulette} fill={PAPER} stroke={INK} strokeWidth={0.8} />}
      <g transform={b.headT}>
        {!b.woman && (
          <>
            <path d={CRAVAT} fill={PAPER} stroke={INK} strokeWidth={0.8} />
            <path d={CRAVAT_FOLDS} fill="none" stroke={INK} strokeWidth={0.6} />
            <path d={COLLAR_POINT} fill={PAPER} stroke={INK} strokeWidth={0.6} />
          </>
        )}
        {/* the hair's cuts */}
        {!pose.hat && !b.woman && (
          <path
            d={
              HAIRLINE_MAN +
              (look === 'darcy' || look === 'officer'
                ? DARCY_STRANDS
                : look === 'wickham'
                  ? WICKHAM_STRANDS
                  : look === 'collins'
                    ? COLLINS_STRANDS
                    : look === 'bingley'
                      ? BINGLEY_CURLS
                      : '')
            }
            fill="none"
            stroke={PAPER}
            strokeWidth={0.95}
          />
        )}
        {(look === 'mrBennet' || look === 'philips') && !pose.hat && (
          <path d={BENNET_HAIR} fill={PAPER} />
        )}
        {b.woman && !b.matron && !pose.hat && (
          <path
            d={look === 'mary' ? MARY_LINES : HAIRLINE_W}
            fill="none"
            stroke={PAPER}
            strokeWidth={1}
          />
        )}
        {(look === 'elizabeth' || look === 'lady') && !pose.hat && (
          <path d={TEMPLE_RINGS} fill="none" stroke={PAPER} strokeWidth={0.9} />
        )}
        {(look === 'lydia' || look === 'kitty') && !pose.hat && (
          <>
            <path d={LYDIA_RINGS} fill="none" stroke={PAPER} strokeWidth={0.9} />
            <path d={LYDIA_RIBBON} fill={PAPER} stroke={INK} strokeWidth={0.6} />
          </>
        )}
        {look === 'jane' && !pose.hat && (
          <path d={BANDEAU} fill={PAPER} stroke={INK} strokeWidth={0.6} />
        )}
        {b.matron && (
          <>
            <path d={CAP_FRILL + CAP_BAND} fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={CAP_CURLS} fill="none" stroke={PAPER} strokeWidth={0.9} />
          </>
        )}
        {pose.hat && !b.woman && <path d={TALL_HAT_BAND} fill={PAPER} />}
        {pose.hat && b.woman && (
          <>
            <path d={BONNET_LINES} fill="none" stroke={PAPER} strokeWidth={0.8} />
            <path d={BONNET_BOW} fill="none" stroke={PAPER} strokeWidth={1.1} />
          </>
        )}
        {!b.woman && !pose.hat && <path d={EAR} fill="none" stroke={PAPER} strokeWidth={1.1} />}
        {/* the face */}
        {eye === 'fine' ? (
          <>
            <path d={FINE_EYE} fill={PAPER} />
            <circle cx={FINE_IRIS[0]} cy={FINE_IRIS[1]} r={FINE_IRIS[2]} fill={INK} />
            <circle cx={FINE_IRIS[0] + 0.7} cy={FINE_IRIS[1] - 0.7} r={0.55} fill={PAPER} />
          </>
        ) : eye === 'none' ? null : (
          <path
            d={
              eye === 'down'
                ? EYE_DOWN
                : eye === 'proud'
                  ? EYE_PROUD
                  : eye === 'glad'
                    ? EYE_GLAD
                    : EYE
            }
            fill={PAPER}
          />
        )}
        <path d={browPath} fill={PAPER} />
        {mouth === 'open' && <path d={mouthOpen(headMouth)} fill={PAPER} />}
        {mouth === 'smile' && <path d={b.woman ? SMILE_LINE_W : SMILE_LINE} fill={PAPER} />}
        {look === 'mrBennet' && <path d={WRY + AGE_LINES} fill={PAPER} />}
        {look === 'collins' && <path d={COLLINS_JOWL} fill={PAPER} />}
        {look === 'catherine' && <path d={CATHERINE_LINES} fill={PAPER} />}
        {pose.flush && <ellipse cx={fx} cy={fy} rx={frx} ry={fry} fill={RED} />}
      </g>
      {children}
    </Cut>
  )
}

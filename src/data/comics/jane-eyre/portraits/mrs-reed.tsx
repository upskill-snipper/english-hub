import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  WOMAN_HEAD,
  flip,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  scallops,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Mrs Reed, as Jane describes her, and nothing else. Chapter 4, at
 * Gateshead, while Jane watches her sew:
 *
 *   "Mrs. Reed might be at that time some six or seven and thirty; she was a
 *   woman of robust frame, square-shouldered and strong-limbed, not tall,
 *   and, though stout, not obese: she had a somewhat large face, the under
 *   jaw being much developed and very solid; her brow was low, her chin
 *   large and prominent, mouth and nose sufficiently regular; under her
 *   light eyebrows glimmered an eye devoid of ruth; her skin was dark and
 *   opaque, her hair nearly flaxen"
 *
 * and, at the end of the same sentence, "she dressed well, and had a
 * presence and port calculated to set off handsome attire". (The sentence
 * runs on past a dash, so the card prints the phrases alone.)
 *
 * So: a robust woman of thirty-seven in profile, facing left, towards Jane,
 * cut from the one woman's head (WOMAN_HEAD) with only what Jane names
 * changed: the face large, the jaw deep and heavy, the chin big and pushed
 * forward, the brow low, the forehead short under the hair; the nose and
 * mouth left as they are ("sufficiently regular"). Her eyebrows are light,
 * so they are cut fine, and the eye under them is level and cold, its lid a
 * little lowered ("devoid of ruth"). Her hair is nearly flaxen, so it is
 * cut in paper with fine ink lines, dressed close, drawn back from the low
 * brow into a knot behind. (FIXED 10 October 2026: this docblock and the
 * alt text gave her curls at the temple, which were never cut; both now
 * describe the print.) Her shoulders are square and her neck
 * strong. She "dressed well": a dark silk gown, its sheen cut in long pale
 * strokes, and a white frill standing at the neck. Her dark skin is a
 * colour the print cannot show, so her face is cut in paper, as every face
 * is, and the card says so. There is no red in this plate. Nothing here
 * comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7501 for the ground, 7502 for the cuts.
 */

/** The one woman's head: the jaw deep and heavy, the chin large and forward. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [21, 0.5, 0.5],
  [22, 2, 2],
  [23, 4, 4],
  [24, 4, 9],
  [25, 0, 12],
  [26, -2, 10],
  [3, -2, 0],
  [2, -4, 2],
])

/** A large face: the head a little larger than the other women's. */
const F = placer([18, -10], 0.94)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Nearly flaxen hair, dressed close: low on the brow ("her brow was low"),
 * and drawn up behind into a knot.
 */
const HAIR_K: Knot[] = [
  [221, 84, 1],
  [212, 88],
  [204, 98],
  [196, 112],
  [184, 122],
  [168, 124],
  [150, 128],
  [130, 128],
  [112, 118],
  [102, 98],
  [104, 76],
  [120, 56],
  [148, 42],
  [180, 40],
  [204, 50],
  [218, 66],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)
const KNOT_AT: Pt = [106, 92]
const KNOT_R = 18

/** The neck below the heavy jaw, where the shadow under it falls. */
const JAW_SHADOW = smooth(
  F.knots([
    [230, 212, 1],
    [212, 220],
    [192, 216],
    [178, 202],
    [172, 186],
    [170, 172, 1],
    [146, 196],
    [130, 252, 1],
    [204, 252, 1],
    [202, 232],
    [214, 222, 1],
  ]),
)

/** Square shoulders in a dark silk gown. */
const GOWN = smooth([
  [-8, 330, 1],
  [-4, 288],
  [14, 256],
  [52, 238],
  [100, 232],
  [140, 236],
  [176, 244],
  [214, 244],
  [244, 252],
  [270, 274],
  [284, 304],
  [288, 330, 1],
])
/** The white frill standing round the neck of the gown. */
const FRILL = smooth([
  [118, 218, 1],
  [150, 226],
  [182, 232],
  [210, 228],
  [226, 224, 1],
  [230, 238],
  [212, 246],
  [182, 250],
  [148, 246],
  [112, 236, 1],
])
const FRILL_TOP: Pt[] = [
  [118, 218],
  [150, 226],
  [182, 232],
  [210, 228],
  [226, 224],
]

type Marks = {
  ground: string
  hair: string
  knot: string
  back: string
  neck: string
  silk: string
  frill: string
}

const marks = once<Marks>(() => {
  // Daylight from in front of her, where Jane stands.
  const ground = portraitGround(7501, (x, y) =>
    clamp(0.06 + ((x - 50) / 270) * 0.9 - Math.max(0, (y - 250) / 260)),
  )
  const r = rng(7502)
  // "her hair nearly flaxen": so pale that the ink between the cuts is only
  // a thin line: close, wide paper cuts drawn back from the low brow over
  // the head to the knot, so the hair reads paler than any dark head and
  // still apart from the paper of her face.
  const hair =
    strands(
      r,
      64,
      lerp2(F.pt([221, 82]), F.pt([186, 125])),
      lerp2(F.pt([150, 38]), F.pt([110, 114])),
      [1.4, 2.1],
      1.5,
    ) +
    strands(
      r,
      24,
      lerp2(F.pt([210, 54]), F.pt([221, 82])),
      lerp2(F.pt([128, 48]), F.pt([108, 80])),
      [1.3, 2],
      1.5,
    )
  const [kx, ky] = F.pt(KNOT_AT)
  let knot = ''
  for (let rad = 3.4; rad < KNOT_R * F.s - 1.5; rad += 2.6)
    knot += arcDashes(r, kx, ky, rad, deg(-170), deg(175), [10, 26], [1.5, 3])
  const [bx, by] = F.pt([178, 156])
  let back = ''
  for (let rad = 46; rad < 82; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(96), deg(146), [8, 20], [2, 5])
  // The shadow under the heavy jaw: rows of ink below the jaw line, so the
  // jaw reads as a hard, solid edge.
  const neck = hatch(r, { x0: 90, x1: 240, y0: 150, y1: 250 }, 4.2, 0.03)
  // Silk: long pale strokes of sheen across the shoulder and down the front.
  let silk = ''
  for (let i = 0; i < 7; i++) {
    const x = 40 + i * 30 + between(r, -6, 6)
    silk += gouge(
      x,
      256 + Math.abs(x - 150) * 0.1,
      x + between(r, -10, 10),
      318,
      0.8 + (x > 180 ? 1 : 0.4),
      between(r, -2, 2),
    )
  }
  silk += gouge(214, 252, 262, 300, 1.4, 2) + gouge(52, 252, 18, 300, 1.2, -2)
  const frill = scallops(FRILL_TOP, 3, 5.5) + 'M124 226Q170 240 222 232M120 232Q170 246 226 240'
  return { ground, hair, knot, back, neck, silk, frill }
})

function MrsReedPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mr-head`
  const hairClip = `${uid}-mr-hair`
  const jawClip = `${uid}-mr-jaw`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([216, 131])
  const [ax, ay] = F.pt([160, 120])
  const [kx, ky] = F.pt(KNOT_AT)
  const kr = KNOT_R * F.s
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={jawClip}>
          <path d={JAW_SHADOW} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={HAIR} />
          <circle cx={n(kx)} cy={n(ky)} r={n(kr)} />
          <path d={GOWN} />
        </g>
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.silk} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.4} />
          <g clipPath={`url(#${jawClip})`}>
            <path d={m.neck} strokeWidth={1} />
          </g>
        </g>
        <ProfileEar at={[ax, ay]} h={40} />
        {/* The knot behind, and the pale hair dressed close over the head. */}
        <circle cx={n(kx)} cy={n(ky)} r={n(kr)} fill={INK} />
        <path d={m.knot} fill="none" stroke={PAPER} strokeWidth={1.3} />
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* "the under jaw being much developed and very solid" */}
          <path
            d={P('M228 211C212 220 192 216 178 202C172 194 170 184 170 174')}
            strokeWidth={1.6}
          />
          {/* "light eyebrows": a fine, low brow */}
          <path d={P('M203 121Q214 117.5 226 121')} strokeWidth={1.3} />
          <path d={P('M235.5 163C232.5 161 232 157.5 234.5 155.5')} strokeWidth={1.2} />
          {/* the mouth, "sufficiently regular", set firm */}
          <path d={P('M229.5 177L221.5 177.8')} strokeWidth={1.7} />
          <path d={P('M230 181Q228 184 225 183.5')} strokeWidth={LINE.hairline} />
          {/* "her chin large and prominent" */}
          <path d={P('M229.5 192Q227 195.5 228.5 199.5')} strokeWidth={LINE.fine} />
          <path d={P('M229 156C224 162 222 170 223.5 176')} strokeWidth={LINE.hairline} />
        </g>
        {/* "an eye devoid of ruth": level, the lid a little lowered */}
        <ProfileEye at={[ex, ey]} s={0.86} heavy look={0.8} />
        <path d={FRILL} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.frill} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <InnerRule />
    </>
  )
}

export const mrsReedArt: LinocutArt = { width: PW, height: PH, Draw: MrsReedPortrait }

export const mrsReed: Portrait = {
  name: 'Mrs Reed',
  art: mrsReedArt,
  alt: "A linocut portrait of Mrs Reed in profile, facing left, drawn from Jane's description in Chapter 4: a robust woman of about thirty-seven with square shoulders and a strong neck. Her face is large, with a deep, heavy jaw and a big chin pushed forward; her brow is low and her forehead short under her hair. Her eyebrows are fine and pale, and the eye beneath them is level and cold, its lid a little lowered. Her pale hair is dressed close, drawn back from her low brow to a knot behind. She wears a dark silk gown with a sheen across it and a white frill standing round her neck. Six numbered red markers point to her square shoulders, her jaw, her chin, her cold eye, her pale hair and her rich gown.",
  describedBy: [
    { phrase: 'square-shouldered and strong-limbed', at: flip([66, 274]) },
    { phrase: 'the under jaw being much developed and very solid', at: flip([192, 192]) },
    {
      phrase: 'her brow was low, her chin large and prominent',
      at: flip([298, 212]),
      to: flip([244, 196]),
    },
    {
      phrase: 'under her light eyebrows glimmered an eye devoid of ruth',
      at: flip([300, 116]),
      to: flip([236, 120]),
    },
    // From behind at the height of the knot, ending in it. FIXED 10 October
    // 2026: it came in below the hair and stopped against the bare nape, so
    // "nearly flaxen" seemed to point at her pale neck.
    { phrase: 'her hair nearly flaxen', at: flip([44, 84]), to: flip([110, 82]) },
    { phrase: 'she dressed well', at: flip([180, 296]) },
  ],
  where: 'Chapter 4',
  note: 'Jane looks hard at the aunt who has just disowned her, and finds nothing soft in her: everything about Mrs Reed is solid, healthy, capable and closed.',
  artNote:
    'Jane says her skin was dark and her hair nearly flaxen. The print has one colour besides black, so her face is cut in paper like every other, and her pale hair is cut in paper with fine lines. The sentence runs on past a dash, so the card prints the phrases alone.',
}

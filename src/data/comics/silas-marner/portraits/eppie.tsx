import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  PH,
  PW,
  ProfileEye,
  WOMAN_HEAD,
  flip,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Eppie at eighteen, as George Eliot describes her, and nothing else.
 * Chapter 16, sixteen years on, walking home from church beside Silas on a
 * bright autumn Sunday:
 *
 *   "a blonde dimpled girl of eighteen, who has vainly tried to chastise her
 *   curly auburn hair into smoothness under her brown bonnet: the hair
 *   ripples as obstinately as a brooklet under the March breeze, and the
 *   little ringlets burst away from the restraining comb behind and show
 *   themselves below the bonnet-crown."
 *
 * and, later in the chapter, "the rippling radiance of her hair and the
 * whiteness of her rounded chin and throat set off by the dark-blue cotton
 * gown".
 *
 * So: a young woman in profile, facing left, towards Silas, cut from the one
 * woman's head (WOMAN_HEAD) with a rounder chin and a smile, and a dimple
 * cut beside the corner of her mouth ("dimpled"); her hair cut in paper, as
 * the panels cut it, rippling in waves over her brow and temple under the
 * front of her bonnet ("ripples as obstinately as a brooklet"); her bonnet
 * dark, its brim standing round her face behind the cheek and sweeping
 * forward over her brow to a peak, as a bonnet's brim looks in profile, its
 * crown over the back of her head, and its ribbon tied in a bow at the side
 * of the jaw, off the chin, as the panels tie it (Bonnet in
 * ../panels/people.tsx); and below the crown, at the nape, a cluster of
 * ringlets that have escaped, cut as paper coils on the dark ("the little
 * ringlets burst away ... below the bonnet-crown"; the comb itself is hidden
 * under the bonnet). Her gown is dark, for the dark-blue cotton. She matches
 * the grown Eppie of the panels (EppieGrownHead in ../panels/people.tsx):
 * fair hair in paper, rippling, the ringlets at the nape. The ground is cut
 * light, for the bright autumn day. There is no red in this plate: her
 * colouring is all in words the print cannot show (blonde, auburn, brown,
 * dark blue). Nothing here comes from a film or stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 6001 for the ground, 6002 for the cuts in the
 * figure.
 */

/** The one woman's head, the chin rounder and fuller, the lips parted in a smile. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [22, 0.5, 0.5],
  [23, 1.5, 1.5],
  [24, 2, 3],
  [25, 2, 3],
])

const F = placer([4, -4], 1.0)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * The brim of the bonnet, seen edge on: it stands round her face behind the
 * cheek, then sweeps forward over her brow to a peak, as a bonnet's brim
 * does in profile, so it frames the face and hides none of it.
 */
const BRIM_K: Knot[] = [
  [172, 180, 1],
  [182, 150],
  [194, 118],
  [207, 88],
  [224, 62],
  [252, 46, 1],
  [236, 34],
  [208, 26],
  [180, 28, 1],
  [186, 40],
  [210, 42],
  [230, 46, 1],
  [212, 66],
  [198, 92],
  [186, 120],
  [174, 150],
  [158, 176, 1],
]
/** Its crown, over the back of her head. */
const CROWN_K: Knot[] = [
  [184, 34],
  [150, 26],
  [118, 36],
  [98, 60],
  [88, 100],
  [90, 138],
  [102, 162, 1],
  [158, 176, 1],
  [174, 150],
  [186, 120],
  [198, 92],
  [212, 66],
  [206, 44],
]
const BRIM = smooth(F.knots(BRIM_K))
/**
 * The ribbon, from the foot of the brim down to a bow at the side of the
 * jaw, as the panels tie it (BONNET_BOW in ../panels/people.tsx): dark, its
 * edges cut in paper, and kept off the chin.
 */
const RIBBON = (() => {
  const [ax, ay] = F.pt([166, 178])
  const [kx, ky] = F.pt([176, 206])
  const loop = (dx: number, dy: number) =>
    `M${n(kx)} ${n(ky)}C${n(kx + dx * 0.4 - dy * 0.5)} ${n(ky + dy * 0.4 + dx * 0.5)} ${n(kx + dx + -dy * 0.35)} ${n(ky + dy + dx * 0.35)} ${n(kx + dx)} ${n(ky + dy)}C${n(kx + dx + dy * 0.35)} ${n(ky + dy - dx * 0.35)} ${n(kx + dx * 0.4 + dy * 0.5)} ${n(ky + dy * 0.4 - dx * 0.5)} ${n(kx)} ${n(ky)}Z`
  return {
    band: `M${n(ax)} ${n(ay)}L${n(kx)} ${n(ky)}`,
    bow: loop(-13, -3) + loop(13, -5),
    ends: `M${n(kx)} ${n(ky)}l-4 12M${n(kx)} ${n(ky)}l3 12`,
  }
})()
const CROWN = smooth(F.knots(CROWN_K))

/** Her hair between the brim and her brow, where it shows: rippling, in paper. */
const FRONT_HAIR_K: Knot[] = [
  [212, 56, 1],
  [226, 58],
  [234, 70],
  [231, 84],
  [228.5, 96],
  [220, 102],
  [210, 108],
  [201, 118],
  [192, 132, 1],
  [196, 108],
  [206, 82],
]
const FRONT_HAIR = smooth(F.knots(FRONT_HAIR_K))

/** The shadow of the hair at the nape, under the bonnet-crown, that the ringlets hang over. */
const NAPE = smooth(
  F.knots([
    [100, 158, 1],
    [158, 174, 1],
    [156, 196],
    [126, 202],
    [104, 194],
    [96, 172],
  ]),
)
/** Where the ringlets hang below the bonnet-crown: the top of each. */
const RINGLETS: Pt[] = [
  [108, 168],
  [120, 171],
  [132, 173],
  [144, 175],
]

const GOWN = smooth([
  [-6, 330, 1],
  [0, 302],
  [22, 270],
  [64, 250],
  [110, 244],
  [150, 252],
  [196, 254],
  [230, 266],
  [250, 298],
  [256, 330, 1],
])
/** A plain neckline, the throat white above it. */
const NECKLINE = 'M118 246Q160 264 214 258'

type Marks = {
  ground: string
  ripples: string
  brim: string
  crown: string
  ringlets: string
  gown: string
}

const marks = once<Marks>(() => {
  // A bright autumn day: the ground cut light, lightest in front of her face.
  const ground = portraitGround(6001, (x, y) =>
    clamp(0.3 + ((x - 40) / 280) * 0.7 - Math.max(0, (y - 250) / 320)),
  )
  const r = rng(6002)
  // "the hair ripples as obstinately as a brooklet": waves across the hair at
  // the brow, close and bold, so the paper hair reads apart from the paper face.
  let ripples = ''
  for (let i = 0; i < 11; i++) {
    const y0 = 58 + i * 6.4
    let [ax, ay] = F.pt([238, y0])
    let d = `M${n(ax)} ${n(ay)}`
    for (let k = 1; k <= 9; k++) {
      const [bx, by] = F.pt([238 - k * 6, y0 + k * 2.2])
      d += `Q${n((ax + bx) / 2)} ${n((ay + by) / 2 + (k % 2 ? -2.4 : 2.4))} ${n(bx)} ${n(by)}`
      ax = bx
      ay = by
    }
    ripples += d
  }
  // The rows of stitching round the brim, and the gathers of the crown.
  // Rows of plaited straw along the whole brim, between its outer and inner edges.
  const outer: Pt[] = [
    [172, 180],
    [182, 150],
    [194, 118],
    [207, 88],
    [224, 62],
    [250, 47],
    [236, 34],
    [208, 27],
  ]
  const inner: Pt[] = [
    [158, 176],
    [174, 150],
    [186, 120],
    [198, 92],
    [212, 66],
    [229, 47],
    [210, 42],
    [188, 40],
  ]
  let brim = ''
  for (const f of [0.22, 0.44, 0.66, 0.86]) {
    const row = outer.map(
      ([x, y], i): Pt => F.pt([x + (inner[i][0] - x) * f, y + (inner[i][1] - y) * f]),
    )
    brim += smooth(row, false)
  }
  let crown = ''
  for (let i = 0; i < 9; i++) {
    const [ax, ay] = F.pt([150 - i * 7, 38 + i * 3])
    const [bx, by] = F.pt([150 - i * 4, 150 + between(r, -4, 4)])
    crown += gouge(ax, ay, bx, by, 0.8, between(r, -2, 2))
  }
  // The ringlets: paper corkscrews falling over the shadow at the nape.
  let ringlets = ''
  for (const [x, y] of RINGLETS) {
    const [px, py] = F.pt([x, y])
    const sway = between(r, -2, 2)
    const steps = 30
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const th = t * Math.PI * 2 * 2.6
      const w = 4 * (1 - t * 0.3)
      const cx = px + sway * t + Math.sin(th) * w
      const cy = py + t * 24 - Math.cos(th) * 2
      ringlets += `${i ? 'L' : 'M'}${n(cx)} ${n(cy)}`
    }
  }
  const gown =
    gouge(32, 280, 14, 318, 2, 2) +
    gouge(68, 266, 56, 318, 1.6, 2) +
    gouge(236, 300, 248, 318, 1.6, -2)
  return { ground, ripples, brim, crown, ringlets, gown }
})

function EppiePortrait({ uid }: ArtProps) {
  const m = marks()
  const hairClip = `${uid}-ep-hair`
  const p = F.p
  const [ex, ey] = F.pt([216, 130])
  return (
    <>
      <defs>
        <clipPath id={hairClip}>
          <path d={FRONT_HAIR} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={FRONT_HAIR} />
          <path d={CROWN} />
          <path d={BRIM} />
          <path d={GOWN} />
        </g>
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.gown} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <path d={NECKLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        {/* the ringlets at the nape, burst out below the crown of the bonnet */}
        <path d={NAPE} fill={INK} />
        <path d={m.ringlets} fill="none" stroke={PAPER} strokeWidth={1.9} strokeLinecap="round" />
        {/* her hair at the brow, rippling, in paper */}
        <path
          d={FRONT_HAIR}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.ripples} fill="none" stroke={INK} strokeWidth={1.05} strokeLinecap="round" />
        </g>
        {/* the bonnet: its crown, then the brim standing round her face */}
        <path d={CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.crown} fill={PAPER} />
        <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.brim} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
        <path d={RIBBON.band} fill="none" stroke={PAPER} strokeWidth={5.6} strokeLinecap="round" />
        <path d={RIBBON.band} fill="none" stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
        <path d={RIBBON.ends} fill="none" stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
        <path d={RIBBON.ends} fill="none" stroke={INK} strokeWidth={2.8} strokeLinecap="round" />
        <path
          d={RIBBON.bow}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* a fine brow */}
          <path d={`M${p(205, 118.5)}Q${p(215, 115)} ${p(225.5, 119)}`} strokeWidth={2.1} />
          {/* nostril; the smile; and the dimple beside it */}
          <path
            d={`M${p(235, 162)}C${p(232, 160)} ${p(231.5, 157)} ${p(234, 155)}`}
            strokeWidth={1.2}
          />
          <path
            d={`M${p(229, 176.5)}L${p(223, 177)}Q${p(219.5, 176.5)} ${p(218.5, 173)}`}
            strokeWidth={1.5}
          />
          <path d={`M${p(214.5, 172)}Q${p(213, 176)} ${p(215, 179.5)}`} strokeWidth={1.2} />
          <path
            d={`M${p(229, 181)}Q${p(226.5, 183.5)} ${p(223.5, 182.5)}`}
            strokeWidth={LINE.hairline}
          />
          {/* the rounded chin */}
          <path
            d={`M${p(227, 189)}Q${p(224.5, 192)} ${p(225.5, 195)}`}
            strokeWidth={LINE.hairline}
          />
        </g>
        <ProfileEye at={[ex, ey]} s={0.86} look={0.6} />
        <path
          d={`M${p(211, 136.5)}Q${p(218, 135)} ${p(224.5, 135.8)}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
      </g>
      <InnerRule />
    </>
  )
}

export const eppieArt: LinocutArt = { width: PW, height: PH, Draw: EppiePortrait }

export const eppie: Portrait = {
  name: 'Eppie',
  art: eppieArt,
  alt: "A linocut portrait of Eppie at eighteen in profile, facing left, drawn from George Eliot's description in Chapter 16 as she walks home from church on a bright autumn day: a young woman with a rounded chin, smiling, with a dimple beside the corner of her mouth. She wears a dark bonnet whose brim stands round her face behind the cheek and sweeps forward over her brow to a peak, whose crown covers the back of her head, and whose ribbon is tied in a bow at the side of her jaw. Her fair hair shows at her brow in rippling waves, and below the crown of the bonnet a cluster of small ringlets has escaped at the nape of her neck. She wears a dark gown. The background is cut light, for the daylight. Four numbered red markers point to her dimpled face, her curly hair, her bonnet and the escaped ringlets.",
  describedBy: [
    { phrase: 'a blonde dimpled girl of eighteen', at: flip([254, 214]), to: flip([217, 176]) },
    { phrase: 'her curly auburn hair', at: flip([286, 98]), to: flip([226, 86]) },
    { phrase: 'her brown bonnet', at: flip([292, 40]), to: flip([238, 46]) },
    {
      phrase: 'the little ringlets burst away from the restraining comb behind',
      at: flip([62, 214]),
      to: flip([108, 190]),
    },
  ],
  where: 'Chapter 16',
  passage:
    'a blonde dimpled girl of eighteen, who has vainly tried to chastise her curly auburn hair into smoothness under her brown bonnet: the hair ripples as obstinately as a brooklet under the March breeze, and the little ringlets burst away from the restraining comb behind and show themselves below the bonnet-crown.',
  note: 'Her hair will not lie smooth, however hard she tries: the curls Silas first took for his lost gold are still like no one else’s in Raveloe.',
  artNote:
    'The print has only black and one red, so her blonde colouring, her auburn hair, her brown bonnet and her dark-blue gown are left to the words.',
}

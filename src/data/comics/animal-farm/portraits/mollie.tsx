import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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
  InnerRule,
  PH,
  PW,
  coat,
  once,
  portraitGround,
  quad2,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Mollie, as Orwell brings her into the barn in Chapter 1, and nothing else:
 *
 *   "At the last moment Mollie, the foolish, pretty white mare who drew Mr.
 *   Jones's trap, came mincing daintily in, chewing at a lump of sugar. She
 *   took a place near the front and began flirting her white mane, hoping to
 *   draw attention to the red ribbons it was plaited with."
 *
 * So: a white mare's head and arched neck in profile, facing right, cut in
 * PAPER on the dark of the barn, with a fine face and a long-lashed eye (she
 * is "pretty"); a lump of sugar held between her lips; her white mane tossed
 * up off the crest of her neck, and plaited, each plait tied off with a ribbon
 * printed in the spot colour, the one thing in the picture she wants looked
 * at. The ribbons are on her mane, well away from her mouth, so the red can
 * only read as ribbon. No harness or bridle: she walks into the meeting free.
 * Nothing here comes from a film or stage production.
 *
 * The head is drawn level in its own frame, the poll at the origin and the
 * muzzle to the right, then carried into the plate by `at`, raised a little
 * (she is showing herself off), so its landmarks can be read in either.
 *
 * Seeds: 5101 for the ground, 5102 for the cuts in the figure.
 */

/** The head's frame to the plate's: the poll at (188, 72), the muzzle 46 degrees down. */
const POLL: Pt = [188, 72]
const TILT = deg(46)
function at(x: number, y: number): Pt {
  const c = Math.cos(TILT)
  const s = Math.sin(TILT)
  return [
    Math.round((POLL[0] + x * c - y * s) * 10) / 10,
    Math.round((POLL[1] + x * s + y * c) * 10) / 10,
  ]
}
const place = (pts: Knot[]): Knot[] =>
  pts.map((p) => {
    const [x, y] = at(p[0], p[1])
    return p[2] ? [x, y, 1] : [x, y]
  })

/** The head, level: poll at the origin, forehead, face, muzzle, chin, jaw, jowl. */
const HEAD: Knot[] = place([
  [-8, -6],
  [14, -13],
  [40, -12],
  [66, -8],
  [104, -2],
  [140, 4],
  [166, 10],
  [184, 16],
  [196, 24],
  [203, 36],
  [203, 48],
  [197, 56],
  [187, 58, 1],
  [193, 63],
  [191, 72],
  [179, 76],
  [166, 70],
  [146, 70],
  [120, 74],
  [96, 82],
  [72, 90],
  [46, 90],
  [26, 76],
  [12, 54],
  [4, 30],
])
/** The neck, from the poll and throat down to the foot of the block; the crest arched. */
const NECK: Knot[] = [
  at(-8, -6),
  at(8, 40),
  at(22, 70),
  [168, 170],
  [160, 230],
  [150, 330, 1],
  [34, 330, 1],
  [44, 256],
  [62, 196],
  [90, 144],
  [124, 104],
  [160, 80],
]
const HEAD_D = smooth(HEAD)
const NECK_D = smooth(NECK)
/** Her ears, pricked, in the plate's own frame. */
const EAR_NEAR = smooth([
  [180, 66],
  [182, 42],
  [196, 16, 1],
  [206, 40],
  [200, 66],
])
const EAR_FAR = smooth([
  [166, 70],
  [162, 46],
  [168, 22, 1],
  [182, 44],
  [184, 66],
])
/** The round of the jowl, and the bony ridge of the face below the eye. */
const JOWL = smooth(
  [at(18, 22), at(22, 52), at(40, 74), at(66, 80), at(94, 72), at(120, 64), at(144, 62)],
  false,
)
const RIDGE = smooth([at(72, 16), at(104, 22), at(136, 30), at(162, 34)], false)
const EYE_C = at(52, 12)
/** The nostril, the lips and the chin. */
const NOSTRIL = smooth([at(192, 22), at(184, 26), at(183, 36), at(191, 41)], false)
const LIP_LINE = smooth([at(166, 54), at(178, 57), at(187, 58)], false)
const CHIN = smooth([at(170, 66), at(180, 70), at(189, 66)], false)
/** The lump of sugar, held square between her lips, in the plate's frame. */
const SUGAR_AT = at(198, 60)
const SUGAR = `M${SUGAR_AT[0] - 2} ${SUGAR_AT[1] - 8}l16 -3l3 15l-16 3Z`
const SUGAR_TOP = `M${SUGAR_AT[0] - 2} ${SUGAR_AT[1] - 8}l5 -6l16 -3l-5 6Z`
const SUGAR_SIDE = `M${SUGAR_AT[0] + 14} ${SUGAR_AT[1] - 11}l5 -6l3 15l-5 6Z`

/** The mane lying along the crest: a white band, from the poll to the withers. */
const MANE: Knot[] = [
  [182, 62],
  [164, 58],
  [136, 72],
  [104, 98],
  [74, 138],
  [50, 190],
  [32, 250],
  [22, 330, 1],
  [48, 330, 1],
  [52, 262],
  [68, 204],
  [94, 154],
  [126, 114],
  [158, 88],
  [184, 76],
]
const MANE_D = smooth(MANE)
/** Where the crest runs, poll to withers, for the plaits and the tossed hair. */
const crest = quad2([176, 66], [96, 96], [40, 300])
/** A plait hangs from the crest down across the neck: from, to. */
const PLAITS: [Pt, Pt][] = [0.14, 0.3, 0.46, 0.62, 0.78].map((t) => {
  const [x, y] = crest(t)
  return [
    [x + 4, y + 6],
    [x + 26 - t * 6, y + 36 - t * 4],
  ]
})

/** A ribbon bow tied round a plait at (x, y), turned by `a` degrees: two loops and two tails. */
function bow(x: number, y: number, a: number): string {
  const r = deg(a)
  const c = Math.cos(r)
  const s = Math.sin(r)
  const p = (u: number, v: number) => `${n(x + u * c - v * s)} ${n(y + u * s + v * c)}`
  return (
    `M${p(0, 0)}C${p(-7, -11)} ${p(-17, -8)} ${p(-15, 0)}C${p(-13, 6)} ${p(-5, 4)} ${p(0, 0)}Z` +
    `M${p(0, 0)}C${p(7, -11)} ${p(17, -8)} ${p(15, 0)}C${p(13, 6)} ${p(5, 4)} ${p(0, 0)}Z` +
    `M${p(-1, 1)}C${p(-6, 10)} ${p(-4, 16)} ${p(-9, 24)}L${p(-4, 24)}C${p(0, 16)} ${p(-1, 9)} ${p(1, 2)}Z` +
    `M${p(1, 1)}C${p(6, 9)} ${p(10, 15)} ${p(8, 23)}L${p(13, 21)}C${p(12, 12)} ${p(6, 7)} ${p(2, 1)}Z`
  )
}

type Marks = {
  ground: string
  tossed: string
  maneLines: string
  braids: string
  tufts: string
  neck: string
  jowl: string
  face: string
  forelock: string
}

const marks = once<Marks>(() => {
  // The barn is dark; the light is the lantern's, from high on the right.
  const ground = portraitGround(5101, (x, y) => clamp(0.12 + (x / PW) * 0.72 - (y / PH) * 0.4))
  const r = rng(5102)
  // "flirting her white mane": loose hair flicked up off the crest into the
  // dark, cut as paper strands.
  const tossed = strands(
    r,
    30,
    (t) => {
      const [x, y] = crest(0.04 + t * 0.8)
      return [x - 2, y - 2]
    },
    (t) => {
      const [x, y] = crest(0.04 + t * 0.8)
      return [x - 38 - t * 12 + between(r, -8, 8), y - 30 + t * 10 + between(r, -8, 8)]
    },
    [1.1, 2.3],
    3,
  )
  // The lie of the mane along the crest: fine ink lines combed down its fall.
  let maneLines = ''
  for (let i = 0; i < 64; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 64
    const [x, y] = crest(t)
    const [x2, y2] = crest(Math.min(1, t + between(r, 0.05, 0.1)))
    maneLines += `M${n(x - 4 + between(r, -2, 2))} ${n(y - 2 + between(r, -2, 2))}Q${n((x + x2) / 2 + 5)} ${n((y + y2) / 2 + 2)} ${n(x2 + 8 + between(r, -2, 3))} ${n(y2 + 5)}`
  }
  // Each plait: a braid of small links from the crest to the bow.
  let braids = ''
  let tufts = ''
  for (const [a, b] of PLAITS) {
    const steps = 6
    const dx = (b[0] - a[0]) / steps
    const dy = (b[1] - a[1]) / steps
    const L = Math.hypot(dx, dy)
    const nx = -dy / L
    const ny = dx / L
    for (let k = 0; k < steps; k++) {
      const x = a[0] + dx * (k + 0.5)
      const y = a[1] + dy * (k + 0.5)
      const side = k % 2 ? 1 : -1
      braids += `M${n(x - dx * 0.6 + nx * 3.4 * side)} ${n(y - dy * 0.6 + ny * 3.4 * side)}Q${n(x + nx * 5 * -side)} ${n(y + ny * 5 * -side)} ${n(x + dx * 0.7 - nx * 2 * side)} ${n(y + dy * 0.7 - ny * 2 * side)}`
    }
    // the brush of hair below the ribbon
    for (let k = 0; k < 5; k++)
      tufts += gouge(
        b[0],
        b[1],
        b[0] + dx * 2.2 + between(r, -4, 4),
        b[1] + dy * 2.2 + between(r, -2, 5),
        between(r, 0.8, 1.4),
        between(r, -1, 1),
      )
  }
  // The white of her coat, modelled only in its shadows: under the neck and
  // on the far side of the jowl.
  const neck = coat(
    r,
    NECK,
    260,
    () => deg(62),
    (x, y) => clamp((y - 140) / 150 + (x - 120) / 120),
    { len: [8, 16], stroke: true },
  )
  let jowl = ''
  const [jx, jy] = at(52, 50)
  for (let rad = 12; rad < 34; rad += 4)
    jowl += arcDashes(r, jx, jy, rad, deg(20), deg(150), [8, 18], [2, 6])
  let face = ''
  for (let i = 0; i < 9; i++) {
    const [x1, y1] = at(86 + i * 10, 44)
    const [x2, y2] = at(92 + i * 10, 58 + (i % 3))
    face += `M${n(x1)} ${n(y1)}L${n(x2)} ${n(y2)}`
  }
  // The forelock, falling between her ears on to her forehead.
  const forelock = strands(
    r,
    10,
    (t) => [180 + t * 16, 60 + t * 4],
    (t) => {
      const [x, y] = at(24 + t * 12, -2)
      return [x + 2, y + 6]
    },
    [0.6, 1.2],
    1,
  )
  return { ground, tossed, maneLines, braids, tufts, neck, jowl, face, forelock }
})

function MolliePortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-mo-body`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD_D} />
          <path d={NECK_D} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the ink halo that lifts her off the ground, and the hair tossed up off it */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD_D} />
        <path d={NECK_D} />
        <path d={EAR_FAR} />
        <path d={EAR_NEAR} />
      </g>
      <path d={m.tossed} fill={PAPER} />
      <path d={EAR_FAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d="M172 66Q168 44 168 30" fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={NECK_D} fill={PAPER} />
      <path d={HEAD_D} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={LINE.hairline} />
        <path d={m.jowl} strokeWidth={1} />
        <path d={m.face} strokeWidth={LINE.hairline} />
        {/* where the head meets the neck */}
        <path d={smooth([at(4, 30), at(16, 60), at(26, 82)], false)} strokeWidth={1.6} />
      </g>
      <path d={EAR_NEAR} fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path d="M190 64Q192 40 196 26" fill="none" stroke={INK} strokeWidth={1.3} />
      {/* her white mane along the crest, and its plaits */}
      <path d={MANE_D} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.maneLines} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <g fill="none" strokeLinecap="round">
        {PLAITS.map(([a, b]) => (
          <path
            key={`${a[0]}`}
            d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`}
            stroke={INK}
            strokeWidth={9}
          />
        ))}
        {PLAITS.map(([a, b]) => (
          <path
            key={`p${a[0]}`}
            d={`M${a[0]} ${a[1]}L${b[0]} ${b[1]}`}
            stroke={PAPER}
            strokeWidth={6}
          />
        ))}
      </g>
      <path d={m.braids} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      <path d={m.tufts} fill={INK} />
      <path d={m.forelock} fill={INK} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={JOWL} strokeWidth={1.9} />
        <path d={RIDGE} strokeWidth={1.1} />
        <path d={NOSTRIL} strokeWidth={2.2} />
        <path d={LIP_LINE} strokeWidth={1.5} />
        <path d={CHIN} strokeWidth={1.2} />
      </g>
      {/* a long-lashed eye under a soft lid */}
      <g transform={`translate(${EYE_C[0]} ${EYE_C[1]}) rotate(34)`}>
        <path d="M-10 0Q0 -9 11 -1Q1 6 -10 0Z" fill={INK} />
        <circle cx={3} cy={-1.5} r={1.3} fill={PAPER} />
        <path
          d="M-12 -2Q0 -13 14 -3M-8 -6L-11 -12M-3 -8L-4 -15M3 -8L4 -15M8 -6L11 -12"
          fill="none"
          stroke={INK}
          strokeWidth={1.3}
          strokeLinecap="round"
        />
      </g>
      {/* the lump of sugar */}
      <g stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round">
        <path d={SUGAR_SIDE} fill={INK} />
        <path d={SUGAR} fill={PAPER} />
        <path d={SUGAR_TOP} fill={PAPER} />
      </g>
      {/* "the red ribbons it was plaited with" */}
      <g fill={RED} stroke={INK} strokeWidth={0.9}>
        {PLAITS.map(([a, b]) => (
          <path
            key={`b${a[0]}`}
            d={bow(b[0], b[1], (Math.atan2(b[1] - a[1], b[0] - a[0]) * 180) / Math.PI - 90)}
          />
        ))}
      </g>
      <InnerRule />
    </>
  )
}

export const mollieArt: LinocutArt = { width: PW, height: PH, Draw: MolliePortrait }

export const mollie: Portrait = {
  name: 'Mollie',
  art: mollieArt,
  alt: "A linocut portrait of Mollie, the white mare, in the dark of the barn in Chapter 1: a pretty white horse's head and arched neck in profile, facing right, with pricked ears, a long-lashed eye and a white forelock. A small white lump of sugar is held between her lips. Her white mane is tossed up off the crest of her neck, and it is plaited, every plait tied off with a ribbon bow printed in red. Four numbered red markers point to her face, the lump of sugar, her mane and one of the ribbons.",
  describedBy: [
    { phrase: 'the foolish, pretty white mare', at: [268, 84], to: at(64, 26) },
    { phrase: 'chewing at a lump of sugar', at: [302, 290], to: at(204, 58) },
    { phrase: 'flirting her white mane', at: [58, 70], to: [96, 92] },
    { phrase: 'the red ribbons it was plaited with', at: [118, 290], to: PLAITS[4][1] },
  ],
  where: 'Chapter 1',
  passage:
    "At the last moment Mollie, the foolish, pretty white mare who drew Mr. Jones's trap, came mincing daintily in, chewing at a lump of sugar. She took a place near the front and began flirting her white mane, hoping to draw attention to the red ribbons it was plaited with.",
  note: 'Mollie wants sugar and ribbons more than freedom. Snowball calls her ribbons “the badge of slavery” in Chapter 2, and in Chapter 5 she is seen far from the farm, between the shafts of a smart dogcart, being fed sugar by a man.',
}

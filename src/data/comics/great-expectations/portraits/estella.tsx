import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanFeatures,
  hatch,
  inside,
  nudge,
  once,
  placer,
  scallops,
  smooth,
  splitGround,
  type Knot,
} from './common'

/**
 * Estella as a young woman, as Dickens describes her, and nothing else.
 * Chapter 38, at Satis House, by the fire, while Miss Havisham reproaches her
 * for being cold:
 *
 *   "Estella looked at her with perfect composure, and again looked down at
 *   the fire. Her graceful figure and her beautiful face expressed a
 *   self-possessed indifference to the wild heat of the other, that was
 *   almost cruel."
 *
 * and, two paragraphs on, she speaks "as she leaned against the great
 * chimney-piece and only moving her eyes".
 *
 * So: a young woman in profile, facing right, her head inclined and her eyes
 * lowered to the fire below and in front of her, out of the block; a smooth,
 * still face with the lips closed and level, nothing in it moving ("perfect
 * composure", "self-possessed indifference"); a long neck and a straight,
 * easy carriage of the shoulders ("Her graceful figure"). The fire's light
 * comes up from the bottom right, printed red in the ground, low down and
 * far from her face, which is cut in paper.
 *
 * Her hair is the "pretty brown hair" Pip sees when they are children
 * (Chapter 8). The print has no brown, so it is printed dark, drawn back
 * smooth from the brow to a knot, with a few curls at the temple, as hair
 * was dressed in the 1820s; the card says so. Her gown is not described in
 * this chapter, so it is a plain pale gown, as the figure kit gives her
 * (../panels/people.tsx), cut at the collarbone with a band of lace. Nothing here comes from a film or stage production.
 *
 * Seeds: 7601 for the ground, 7602 for the cuts in the figure.
 */

/** The one woman's head, unchanged: Dickens gives her beauty and no particular feature. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [[0, 4, 0]])

/** The head inclined twelve degrees about the base of the neck: looking down at the fire. */
const F = placer([30, 0], 0.9, 12, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/**
 * Her hair in the head's frame: smooth over the crown from the brow, above
 * the ear, drawn back to a knot at the back.
 */
const HAIR_K: Knot[] = [
  [216, 62],
  [204, 52],
  [178, 46],
  [148, 48],
  [122, 60],
  [104, 82],
  [96, 112],
  [98, 142],
  [108, 168],
  [124, 186, 1],
  [138, 176],
  [148, 158],
  [156, 138],
  [166, 120],
  [178, 106],
  [192, 92],
  [204, 80],
  [214, 70],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)
/** The knot of hair at the back of the head. */
const KNOT_C = F.pt([86, 128])
const KNOT_R = 19

/** A plain pale gown over sloping shoulders, cut at the collarbone. */
const GOWN = smooth([
  [-6, 330, 1],
  [2, 296],
  [26, 268],
  [66, 252],
  [112, 246],
  [156, 254],
  [200, 254],
  [232, 266],
  [252, 296],
  [258, 330, 1],
])
/** The band of lace at the neckline, along its top edge. */
const LACE: Pt[] = [
  [96, 250],
  [120, 256],
  [146, 262],
  [172, 266],
  [198, 264],
  [222, 262],
]

type Marks = {
  ground: { paper: string; red: string }
  hair: string
  curls: string
  neck: string
  gown: string
}

const marks = once<Marks>(() => {
  // The fire is below the block, in front of her: its light comes up from
  // the bottom right and prints red only there, far below her face.
  const fire = (x: number, y: number) => Math.hypot(x - 320, (y - 338) * 1.1)
  const ground = splitGround(
    7601,
    (x, y) => clamp(0.16 + (1 - fire(x, y) / 320) * 0.9),
    (x, y) => y > 236 && fire(x, y) < 96,
  )
  const r = rng(7602)
  // Smooth brown hair, drawn back from the brow and the temple to the knot:
  // fine paper strands from the hairline over the head, each bowing out over
  // the skull, all meeting at the knot.
  const poly = HAIR_PLACED.map(([x, y]): Pt => [x, y])
  const front: Pt[] = [
    [212, 58],
    [212, 68],
    [203, 80],
    [191, 93],
    [178, 107],
    [166, 121],
    [157, 139],
    [149, 158],
    [138, 176],
  ]
  let hair = ''
  for (let i = 0; i < 34; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 34
    const k = t * (front.length - 1)
    const j = Math.min(front.length - 2, Math.floor(k))
    const f = k - j
    const S = F.pt([
      front[j][0] + (front[j + 1][0] - front[j][0]) * f,
      front[j][1] + (front[j + 1][1] - front[j][1]) * f,
    ])
    const E: Pt = [KNOT_C[0] + between(r, -6, 6), KNOT_C[1] + between(r, -6, 6)]
    const lift = 26 - t * 22
    const C: Pt = [(S[0] + E[0]) / 2 + between(r, -3, 3), (S[1] + E[1]) / 2 - lift]
    const pts: Pt[] = []
    for (let q = 0; q <= 14; q++) {
      const u = q / 14
      const x = (1 - u) * (1 - u) * S[0] + 2 * (1 - u) * u * C[0] + u * u * E[0]
      const y = (1 - u) * (1 - u) * S[1] + 2 * (1 - u) * u * C[1] + u * u * E[1]
      if (inside(poly, x, y)) pts.push([x, y])
    }
    if (pts.length > 3) hair += ribbon(pts, between(r, 0.8, 1.5), 0.8)
  }
  // A few curls at the temple, and the coil of the knot.
  let curls = ''
  for (const [x, y] of [
    [200, 84],
    [190, 94],
    [180, 106],
  ] as Pt[]) {
    const [cx, cy] = F.pt([x, y + 4])
    curls += `M${n(cx + 3)} ${n(cy)}A3 3 0 1 1 ${n(cx)} ${n(cy + 3)}`
  }
  for (let rad = 4; rad < KNOT_R; rad += 3.6)
    curls += arcDashes(r, KNOT_C[0], KNOT_C[1], rad, deg(-30), deg(300), [8, 18], [2, 4])
  // A long, smooth neck: only a little shadow at the back, low down.
  const neck = hatch(r, { x0: 132, x1: 160, y0: 226, y1: 252 }, 6, 0.1)
  // The pale gown: a fold or two, and the shadow on the back, away from the fire.
  const gown =
    'M30 280Q22 300 14 318M64 266Q58 292 54 318M236 280Q242 300 248 318M220 276Q223 298 226 318' +
    hatch(r, { x0: -10, x1: 74, y0: 250, y1: 324 }, 4.6, 0.3)
  return { ground, hair, curls, neck, gown }
})

function EstellaPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-es-head`
  const hairClip = `${uid}-es-hair`
  const gownClip = `${uid}-es-gown`
  const p = F.p
  const [kx, ky] = KNOT_C
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={gownClip}>
          <path d={GOWN} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
          <circle cx={n(kx)} cy={n(ky)} r={KNOT_R} />
        </clipPath>
      </defs>
      <path d={m.ground.paper} fill={PAPER} />
      <path d={m.ground.red} fill={RED} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <circle cx={n(kx)} cy={n(ky)} r={KNOT_R} />
        <path d={GOWN} />
      </g>
      <path d={GOWN} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${gownClip})`}>
        <path d={m.gown} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      {/* the band of lace at the neckline */}
      <path
        d={`M96 250Q160 270 222 262L224 270Q160 280 94 258Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path
        d={scallops(
          LACE.map(([x, y]): Pt => [x, y + 8]),
          2.6,
          5,
        )}
        fill="none"
        stroke={INK}
        strokeWidth={1}
        strokeLinecap="round"
      />
      <ProfileEar at={F.pt(WOMAN_EAR)} h={40} />
      <WomanFeatures F={F} brow={1.9} mouth="set" />
      {/* "looked down at the fire": the lid lowered over the eye, which is open and looking down */}
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d={`M${p(207, 129.5)}Q${p(216, 132)} ${p(225.5, 128.5)}`} strokeWidth={2.4} />
        <path d={`M${p(212.5, 131.6)}A3.6 3.2 0 0 0 ${p(220, 131.2)}Z`} fill={INK} stroke="none" />
        <path d={`M${p(209, 136.4)}Q${p(216, 139)} ${p(223, 135.4)}`} strokeWidth={LINE.fine} />
        <path
          d={`M${p(207.5, 124.5)}Q${p(215, 121)} ${p(223, 123.5)}`}
          strokeWidth={LINE.hairline}
        />
      </g>
      {/* her hair, dark, smooth from the brow, drawn back to a knot */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <circle cx={n(kx)} cy={n(ky)} r={KNOT_R} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <InnerRule />
    </>
  )
}

export const estellaArt: LinocutArt = { width: PW, height: PH, Draw: EstellaPortrait }

export const estella: Portrait = {
  name: 'Estella',
  art: estellaArt,
  alt: "A linocut portrait of Estella as a young woman, drawn from Dickens's description in Chapter 38, in profile, facing right, by a fire. Her head is inclined and her eyes are lowered, looking down to the right, where the light of the fire comes up from below in red. Her face is smooth and still, the lips closed and level. She has a long neck and an easy, upright carriage of the shoulders. Her dark hair is drawn back smooth from her brow to a knot at the back of her head, with a few curls at the temple, and she wears a plain pale gown cut at the collarbone with a band of lace. Three numbered red markers point to her calm face, her lowered eyes and her graceful neck and shoulders.",
  describedBy: [
    { phrase: 'perfect composure', at: F.pt([196, 160]) },
    { phrase: 'looked down at the fire', at: [304, 112], to: [234, 120] },
    { phrase: 'Her graceful figure', at: [28, 220], to: [84, 250] },
  ],
  where: 'Chapter 38',
  passage:
    'Estella looked at her with perfect composure, and again looked down at the fire. Her graceful figure and her beautiful face expressed a self-possessed indifference to the wild heat of the other, that was almost cruel.',
  note: 'Miss Havisham raised Estella to feel nothing, and now cannot bear it when that coldness is turned on her. The stillness Dickens gives her face is the upbringing working exactly as it was meant to.',
  artNote:
    'Her hair is the “pretty brown hair” of Chapter 8; the print has no brown, so it is printed dark. Her gown is not described here, so it is plain. The red is the firelight, kept far from her face.',
}

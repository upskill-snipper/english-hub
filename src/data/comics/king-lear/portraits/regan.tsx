import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  along,
  bandAlong,
  folds,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanNeckShadow,
} from './common'

/**
 * Regan, Lear's second daughter, as her father sees her in Act 2, Scene 4,
 * when he turns to her from Goneril:
 *
 *   "Thy tender-hefted nature shall not give Thee o'er to harshness. Her eyes
 *   are fierce; but thine Do comfort, and not burn."
 *   "Thou art a lady; If only to go warm were gorgeous, Why, nature needs not
 *   what thou gorgeous wear'st Which scarcely keeps thee warm." (his answer
 *   to her "What need one?")
 *
 * So: a lady richly dressed, with a calm face and a level eye, which is what
 * Lear trusts, and the scene shows him wrong: within it she cuts his
 * followers to none. The print draws the calm, and lets the words carry the
 * irony. She is drawn as the figure kit draws her (../panels/people.tsx):
 * unveiled, her dark hair drawn back from the brow under a band over the
 * crown into a round knot at the nape, the band and the strands cut in paper
 * and the coil of the knot in paper strokes, invented only so that the
 * sisters are told apart at a glance (one veil, one knot). Her gown is dark,
 * and "gorgeous" in Lear's word is a broad collar worked in paper with a
 * pattern of lozenges and rounds. Her head is every woman's head
 * (WOMAN_HEAD). There is no red in this plate: none on her face, and none at
 * her throat, where a red jewel would read as a wound.
 *
 * MARKERS. "Thy tender-hefted nature" sits on her cheek with no line. The
 * eye's marker and the gown's come to them from in front of her, each at its
 * own height: no line crosses her face.
 *
 * She faces left, so the figure is drawn facing right and flipped. Seeds:
 * 7801 to 7804 (the figure's marks), 7810 (the ground).
 */

/** Her dark hair, drawn back from the brow over the crown to the nape. */
const HAIR = spline([
  [157, 58, 1],
  [149, 44],
  [129, 33],
  [103, 31],
  [79, 39],
  [59, 55],
  [47, 79],
  [43, 107],
  [46, 132],
  [56, 150, 1],
  [70, 140],
  [84, 124],
  [96, 111],
  [110, 103],
  [124, 97],
  [136, 87],
  [147, 72],
])
/** The round knot it is gathered into at the nape. */
const KNOT_C: Pt = [44, 142]
const KNOT_R = 24
const KNOT = `M${KNOT_C[0] - KNOT_R} ${KNOT_C[1]}a${KNOT_R} ${KNOT_R} 0 1 0 ${KNOT_R * 2} 0a${KNOT_R} ${KNOT_R} 0 1 0 ${-KNOT_R * 2} 0Z`
/** The band over her crown, from the brow back to the knot: a ribbon cut in paper. */
const BAND = ribbon(
  [
    [151, 60],
    [140, 50],
    [122, 43],
    [102, 42],
    [84, 47],
    [68, 57],
    [56, 70],
    [48, 86],
  ],
  7,
  0.25,
)

/** Her shoulders in a dark gown. */
const GOWN = spline([
  [-4, 344, 1],
  [2, 298],
  [20, 266],
  [52, 242],
  [84, 232],
  [114, 238],
  [142, 232],
  [168, 244],
  [190, 268],
  [204, 300],
  [210, 344, 1],
])
/**
 * "what thou gorgeous wear'st": the broad worked collar of the gown, lying
 * round the foot of the neck from the nape over the shoulder to the breast.
 */
const COLLAR_SPINE: Pt[] = [
  [56, 248],
  [76, 240],
  [100, 238],
  [124, 242],
  [146, 248],
  [166, 258],
  [182, 270],
]
const COLLAR_W = 18
const COLLAR = bandAlong(COLLAR_SPINE, COLLAR_W)

type Marks = { hair: string; coil: string; collar: string; gown: string }

const marks = once((): Marks => {
  const r = rng(7801)
  // Strands of her dark hair, cut in paper, combed back from the brow to the knot.
  let hair = ''
  for (let i = 0; i < 12; i++) {
    const t = (i + 0.5) / 12
    const x0 = 148 - t * 26 + between(r, -1.5, 1.5)
    const y0 = 62 + t * 34 + between(r, -1.5, 1.5)
    hair += gouge(
      x0,
      y0,
      KNOT_C[0] + 16 + t * 6,
      KNOT_C[1] - 14 + t * 10,
      between(r, 0.6, 0.9),
      -4 - t * 3,
    )
  }
  for (let i = 0; i < 6; i++) {
    const x = 60 + i * 7 + between(r, -1, 1)
    hair += gouge(x, 52 + i * 2, KNOT_C[0] + 8 + i * 3, KNOT_C[1] - 20, between(r, 0.5, 0.8), 3)
  }
  // The turns of the knot, cut in paper.
  let coil = ''
  for (const [rad, a0, a1] of [
    [17, 200, 340],
    [12, 20, 170],
    [7, 220, 350],
  ] as [number, number, number][])
    coil += arc(KNOT_C[0], KNOT_C[1], rad, deg(a0), deg(a1))
  // The collar's work: lozenges and rounds in turn along it, in ink.
  let collar = ''
  for (let i = 0; i < 18; i++) {
    const [x, y] = along(COLLAR_SPINE, (i + 0.5) / 18)
    if (i % 2 === 0)
      collar += `M${n(x - 4)} ${n(y)}L${n(x)} ${n(y - 5)}L${n(x + 4)} ${n(y)}L${n(x)} ${n(y + 5)}Z`
    else collar += `M${n(x - 1.6)} ${n(y)}a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z`
  }
  const gown = folds(7802, [12, 200], [282, 296], 6, 344)
  return { hair, coil, collar, gown }
})

/** Regan, head and shoulders, facing right in the 0..240 by 0..344 frame. */
export function ReganFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-reg-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* the dark gown and its worked collar */}
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-reg`} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.collar} fill={INK} />
      {/* her dark hair, drawn back under a band into a knot at the nape */}
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coil} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the nostril, the lips closed and still, the chin */}
        <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
        <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
        <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
        <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        {/* a smooth brow, level */}
        <path d="M143 83.5Q152 80 161 83" strokeWidth={2} />
        {/* "thine Do comfort, and not burn": the eye level and calm, the lid a little lowered */}
        <path d="M145 95Q152.5 91.4 160.5 94.6" strokeWidth={2.3} />
        <path d="M146.5 99.2Q153 101.6 159.5 98.6" strokeWidth={1} />
      </g>
      <circle cx={WOMAN_EYE[0] + 0.8} cy={WOMAN_EYE[1] + 1} r={2.5} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, hair, knot and shoulders. */
function ReganKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={KNOT} />
      <path d={HAIR} />
      <path d={WOMAN_HEAD} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(40, 4, 1.04, true)

const ground = once(() =>
  // Before Gloucester's castle, the light ahead of her, to the left.
  portraitGround('lear-regan', 7810, (x, y) =>
    clamp(0.14 + ((PW - x - 40) / 270) * 0.84 - (y / PH) * 0.1),
  ),
)

function ReganPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <ReganKnockout />
        <ReganFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const reganPortrait: LinocutArt = { width: PW, height: PH, Draw: ReganPortrait }

const CHEEK_AT = P.to(138, 122)
const EYE_AT = P.to(161, 96)
const COLLAR_AT = P.to(174, 266)

export const regan: Portrait = {
  name: 'Regan',
  art: reganPortrait,
  alt: 'A linocut portrait of Regan in profile, facing left: a woman with a calm, smooth face, a level brow and a steady eye under a lid a little lowered, her lips closed and still. Her dark hair is drawn back from her brow under a pale band over the crown into a round knot at the back of her neck, and her ear shows below it. She wears a dark gown with a broad pale collar worked in a pattern of lozenges and dots. Three numbered red markers point to her cheek, her eye and the worked collar of her gown.',
  describedBy: [
    { phrase: 'Thy tender-hefted nature', at: CHEEK_AT },
    {
      phrase: 'thine Do comfort, and not burn',
      at: [EYE_AT[0] - 52, EYE_AT[1] - 2],
      to: EYE_AT,
    },
    {
      phrase: 'what thou gorgeous wear’st',
      at: [COLLAR_AT[0] - 40, COLLAR_AT[1] + 14],
      to: COLLAR_AT,
    },
  ],
  where: 'Act 2, Scene 4',
  note: 'Lear believes Regan gentler than her sister, and in the same scene she finishes the count of his knights with “What need one?” The calm he trusts is not kindness.',
  artNote:
    'The play does not describe her face, her hair or her gown: the knot and the band are the panels’ way of telling the sisters apart, and the worked collar stands for Lear’s word “gorgeous”.',
}

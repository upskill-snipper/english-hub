import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  capsule,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  type SP,
} from './common'

/**
 * Tybalt, Lady Capulet's nephew, as Benvolio first describes him arriving at
 * the brawl (1.1):
 *
 *   "in the instant came The fiery Tybalt, with his sword prepar'd"
 *
 * So he holds his rapier upright before him, drawn and ready, and his face
 * is set: the brow drawn down, the eye narrowed, the mouth hard. The blade is
 * raised and aimed at no one; nothing is struck.
 *
 * Mercutio mocks him in 2.4 as "More than Prince of cats" (Tybalt is the cat
 * in the old fable of Reynard the Fox) and as one of "these fashion-mongers"
 * who "stand so much on the new form". The panels (../panels/people.tsx) take
 * that to give him the only feathered cap in Verona, and so does this plate.
 * He is young, "goodman boy" and "a saucy boy" to his uncle (1.5), so he is
 * beardless like the panels' other young men. His face and dress are
 * otherwise undescribed: a doublet, a small ruff, a flat cap. There is no red
 * in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 */

/** The head, young, beardless and set hard, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 226],
  [60, 200],
  [52, 176],
  [44, 146],
  [44, 108],
  [56, 72],
  [80, 47],
  [112, 34],
  [142, 36],
  [160, 50],
  [167, 70],
  [171, 86],
  [167, 97, 1],
  [175, 111],
  [185, 126],
  [183, 131.5],
  [173.5, 134.5, 1],
  [175, 141.5],
  [169, 146.5, 1],
  [171.5, 151.5],
  [167, 157, 1],
  [173, 167],
  [172, 180],
  [160, 188],
  [143, 191],
  [134, 198],
  [132, 212],
  [134, 226],
]
export const TYBALT_HEAD = spline(HEAD_PTS)

/** Short dark hair under the cap, at the back of the head and the nape. */
const HAIR = spline([
  [136, 56, 1],
  [127, 68],
  [122, 86],
  [123, 104, 1],
  [110, 100],
  [98, 100],
  [90, 108],
  [86, 132],
  [82, 160],
  [72, 186],
  [58, 204, 1],
  [20, 200, 1],
  [20, 40, 1],
])
/** The flat cap, tipped forward, with a feather springing back from it. */
const CAP = spline([
  [170, 52, 1],
  [178, 38],
  [168, 24],
  [140, 14],
  [100, 10],
  [62, 16],
  [34, 30],
  [26, 46],
  [36, 56, 1],
  [80, 60],
  [130, 58],
])
const CAP_BAND = spline([
  [38, 54, 1],
  [80, 58],
  [130, 56],
  [170, 50, 1],
  [168, 60, 1],
  [130, 66],
  [80, 68],
  [44, 64, 1],
])
const CAP_T = 'translate(2 10) rotate(9 100 40)'
/** The feather's spine, from the crown of the cap back and down behind the head. */
const FEATHER_SPINE: Pt[] = [
  [104, 16],
  [84, 8],
  [62, 8],
  [42, 14],
  [24, 26],
  [12, 42],
  [6, 58],
]
const FEATHER = ribbon(FEATHER_SPINE, 22, 0.55)
const EAR = spline([
  [110, 108],
  [100, 106],
  [93, 114],
  [92, 126],
  [95, 139],
  [104, 146],
  [110, 142],
  [112, 132],
  [112, 118],
])

export const TYBALT_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 262],
  [40, 238],
  [70, 222],
  [110, 228],
  [140, 222],
  [168, 232],
  [196, 256],
  [216, 290],
  [228, 336, 1],
])

// ── The rapier, upright before him ─────────────────────────────────────────
const BLADE_X = 214
/** The blade, from the guard up to its point. */
const BLADE = `M${BLADE_X - 4} 262L${BLADE_X - 2} 26L${BLADE_X} 12L${BLADE_X + 2} 26L${BLADE_X + 4} 262Z`
/** The cross-guard, its ends turned, and the ring of the swept hilt. */
const QUILLON = capsule(BLADE_X - 26, 266, BLADE_X + 26, 262, 5.5)
const KNUCKLE_BOW =
  `M${BLADE_X + 24} 262C${BLADE_X + 34} 276 ${BLADE_X + 30} 300 ${BLADE_X + 6} 314` +
  `L${BLADE_X + 4} 309C${BLADE_X + 24} 298 ${BLADE_X + 27} 278 ${BLADE_X + 20} 265Z`
/**
 * The hand round the grip: the back of the hand, and four fingers curled
 * round the grip, their ends a row of rounded knuckles down its front, each
 * cut apart from the next so the grip reads as fingers and not as a stump.
 */
const X = BLADE_X
const FIST = spline([
  [X - 14, 274, 1],
  [X + 6, 272],
  [X + 15, 275],
  [X + 18, 280],
  [X + 14, 285.5, 1],
  [X + 18, 290],
  [X + 14, 295, 1],
  [X + 18, 299.5],
  [X + 14, 304, 1],
  [X + 17, 308],
  [X + 11, 313],
  [X - 8, 313],
  [X - 16, 304],
  [X - 17, 288],
])
/** The thumb, laid across the top of the fingers under the guard. */
const THUMB = capsule(X - 15, 284, X + 9, 277, 8)
const FIST_LINES =
  `M${X + 14} 285.5L${X + 1} 287M${X + 14} 295L${X} 296M${X + 14} 304L${X + 1} 305` +
  `M${X - 12} 292Q${X - 8} 300 ${X - 10} 308`
const POMMEL = `M${BLADE_X - 6} 318a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z`
/** The sleeve of the sword arm, from the foot of the plate to the wrist. */
const SLEEVE = spline([
  [150, 340, 1],
  [170, 316],
  [190, 300],
  [200, 296, 1],
  [204, 314],
  [196, 330],
  [190, 340, 1],
])

type Marks = { hair: string; back: string; cap: string; feather: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  let hair = ''
  for (let i = 0; i < 26; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 26
    hair += gouge(
      118 - t * 36 + between(r, -2, 2),
      70 + t * 40,
      58 + t * 20 + between(r, -3, 3),
      100 + t * 90,
      between(r, 0.6, 1),
      between(r, -6, -2),
    )
  }
  let back = ''
  for (let rad = 56; rad < 120; rad += 3.6)
    back += arcDashes(r, 152, 124, rad, deg(112), deg(172), [8, 22], [2, 6])

  let cap = ''
  for (let i = 0; i < 7; i++) {
    const x = 50 + i * 18 + between(r, -4, 4)
    cap += gouge(
      x,
      52 - between(r, 0, 4),
      x + 14 + between(r, -4, 4),
      18 + between(r, 0, 6),
      between(r, 0.6, 1.1),
      1.5,
    )
  }

  // The feather's quill and its barbs, cut in paper, raked back along it.
  let feather = ribbon(FEATHER_SPINE, 2, 0.8)
  for (let i = 1; i < FEATHER_SPINE.length - 1; i++) {
    const [x0, y0] = FEATHER_SPINE[i - 1]
    const [x1, y1] = FEATHER_SPINE[i]
    const a = Math.atan2(y1 - y0, x1 - x0)
    for (let k = 0; k < 3; k++) {
      const u = k / 3
      const x = x0 + (x1 - x0) * u
      const y = y0 + (y1 - y0) * u
      const L = between(r, 6, 9) * (1 - i / FEATHER_SPINE.length) + 3
      for (const side of [-1, 1])
        feather += gouge(
          x,
          y,
          x + Math.cos(a + side * 0.9) * L,
          y + Math.sin(a + side * 0.9) * L,
          between(r, 0.4, 0.6),
          0.3 * side,
        )
    }
  }

  let body = ''
  body += gouge(34, 262, 8, 324, 2.2, 3)
  body += gouge(58, 256, 48, 330, 1.6, 2)
  for (let i = 0; i < 6; i++) {
    const x = between(r, 70, 150)
    body += gouge(x, between(r, 250, 270), x + between(r, -6, 6), 334, between(r, 0.7, 1.2), 1)
  }

  const m = { hair, back, cap, feather, body }
  marksBySeed.set(seed, m)
  return m
}

const RUFF = ruffBand(40, 156, 204, 230, 6.5)

/** Tybalt, head and shoulders, his rapier upright, in the 0..240 by 0..332 frame. */
export function TybaltFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-ty-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={TYBALT_HEAD} />
        </clipPath>
      </defs>
      <path d={TYBALT_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.7} strokeLinecap="round" />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <g transform={CAP_T}>
        <path
          d={FEATHER}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.feather} fill={PAPER} />
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.cap} fill={PAPER} />
        <path d={CAP_BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      </g>
      <path d={TYBALT_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 114C99 116 97 124 99 132C100 136 103 138 106 135" strokeWidth={1.6} />
        {/* nostril, the mouth set hard and turned down, the jutting chin */}
        <path d="M177 129C173 126 173 121 178.5 120" strokeWidth={1.4} />
        <path d="M169 146.5L160 148.5" strokeWidth={2} />
        <path d="M160 148.5L157.5 151" strokeWidth={1.4} />
        <path d="M168 135C163 140 160 146 161 152" strokeWidth={LINE.hairline} />
        <path d="M168 186C151 192 132 190 120 178C115 170 112 160 110 152" strokeWidth={1.8} />
        {/* "The fiery Tybalt": the brow drawn down hard, the eye narrowed */}
        <path d="M143 84Q152 85 162 90.5L167 93" strokeWidth={3.2} />
        <path d="M147 98Q155 95.5 163 99" strokeWidth={2.4} />
        <path d="M148.5 103Q155 104.5 162 102" strokeWidth={1.1} />
        <path d="M156 87L154 92M151 86L150 90.5" strokeWidth={1} />
      </g>
      <circle cx={156.8} cy={100.4} r={2.5} fill={INK} />
      {/* the rapier, upright and ready */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={BLADE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={`M${BLADE_X} 258L${BLADE_X} 30`} stroke={INK} strokeWidth={1} />
      <path d={KNUCKLE_BOW} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={QUILLON} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={POMMEL} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={FIST} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={FIST_LINES} stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <path d={THUMB} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
    </g>
  )
}

/** A thick ink halo round the figure and the sword. */
export function TybaltKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={TYBALT_HEAD} />
      <path d={CAP} transform={CAP_T} />
      <path d={FEATHER} transform={CAP_T} />
      <path d={TYBALT_BODY} />
      <path d={BLADE} />
      <path d={QUILLON} />
      <path d={KNUCKLE_BOW} />
      <path d={FIST} />
    </g>
  )
}

const P = placing(30, 2, 0.98, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The hot morning street (3.1: "The day is hot"), light ahead of him.
  ground = portraitGround('tybalt', 2501, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.85 - (y / PH) * 0.1),
  )
  return ground
}

function TybaltPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <TybaltKnockout />
        <TybaltFigure uid={uid} seed={2501} />
      </g>
      <PortraitRule />
    </>
  )
}

export const tybaltPortrait: LinocutArt = { width: PW, height: PH, Draw: TybaltPortrait }

const EYE_AT = P.to(156, 99)
const BLADE_AT = P.to(BLADE_X, 150)
const FEATHER_AT = P.to(28, 26)

export const tybalt: Portrait = {
  name: 'Tybalt',
  art: tybaltPortrait,
  alt: 'A linocut portrait of Tybalt in profile, facing left: a young, beardless man in a dark flat cap with a long feather springing back from it, a dark doublet and a small pleated ruff. His brow is drawn down hard over a narrowed eye and his mouth is set. Before him he holds a rapier upright, its hilt in his hand and its long blade rising past his face to the top of the picture, pointing at no one. Three numbered red markers point to his eye, the blade and the feather in his cap.',
  describedBy: [
    { phrase: 'The fiery Tybalt', at: [EYE_AT[0] - 44, EYE_AT[1] - 56], to: EYE_AT },
    { phrase: "with his sword prepar'd", at: [BLADE_AT[0] - 40, BLADE_AT[1] + 20], to: BLADE_AT },
    {
      phrase: 'these fashion-mongers',
      at: [FEATHER_AT[0] - 8, FEATHER_AT[1] + 86],
      to: FEATHER_AT,
    },
  ],
  where: 'Act 1, Scene 1; Act 2, Scene 4',
  note: 'Benvolio’s first word for Tybalt is fiery, and he comes in with his sword already out. Mercutio mocks him as “More than Prince of cats” and as one of the fashionable duellists who fight by the rules of a book.',
  artNote:
    'The play never describes his face or dress. The feather is how the panels mark out the man Mercutio calls a fashion-monger; the rest is the plain dress of the time.',
}

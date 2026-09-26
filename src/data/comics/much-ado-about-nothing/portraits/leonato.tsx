import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
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
  ear,
  folds,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  type SP,
} from './common'

/**
 * Leonato, Governor of Messina, as Benedick sees him from his hiding place in
 * the arbour in Act 2, Scene 3, while Leonato, the Prince and Claudio talk
 * loudly of Beatrice's love for him:
 *
 *   "I should think this a gull, but that the white-bearded fellow speaks
 *   it: knavery cannot, sure, hide itself in such reverence."
 *
 * So: an old man with a full white beard, and a face grave enough to be
 * believed, the brow lined and level, the eye steady. He is in on the trick,
 * and keeps a straight face.
 *
 * He is drawn as the panels draw him (../panels/people.tsx): white hair round
 * the back of the head from the temple to the nape, the crown bare, bushy
 * white brows, and the long gown of an old man of standing. Later he speaks
 * of his own "grey hairs and bruise of many days" (5.1), which is why the
 * hair is white. There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 */

/** An old man's head, facing right in a 0..240 by 0..332 frame; the beard is drawn over it. */
const HEAD_PTS: SP[] = [
  [64, 228],
  [56, 200],
  [48, 172],
  [42, 140],
  [44, 106],
  [56, 70],
  [80, 46],
  [112, 34],
  [142, 36],
  [160, 50],
  [166, 70],
  [169, 88],
  [165.5, 97, 1],
  [173, 110],
  [184, 128],
  [182, 134],
  [172, 136, 1],
  [175, 150],
  [175, 168],
  [168, 186],
  [150, 196],
  [136, 204],
  [132, 228],
]
export const LEONATO_HEAD = spline(HEAD_PTS)

/** White hair round the back of the head, from the temple to the nape; the crown bare. */
const HAIR = spline([
  [132, 66, 1],
  [122, 78],
  [114, 98, 1],
  [100, 100],
  [92, 112],
  [88, 140],
  [80, 166],
  [64, 180, 1],
  [50, 162],
  [42, 124],
  [44, 88],
  [54, 68],
  [72, 58],
  [96, 58],
  [118, 60],
])
/** The full white beard, from under the ear round the jaw to a point on the chest. */
const BEARD = spline([
  [116, 128, 1],
  [130, 146],
  [150, 150],
  [168, 144],
  [177, 142, 1],
  [182, 158],
  [184, 180],
  [180, 206],
  [170, 226],
  [156, 240, 1],
  [140, 226],
  [124, 206],
  [112, 180],
  [108, 154],
])
/** The moustache over the lip, falling into the beard. */
const MOUSTACHE = spline([
  [172, 136, 1],
  [181, 140],
  [184, 149],
  [176, 150],
  [166, 153],
  [156, 158, 1],
  [160, 146],
])
const EAR = ear(104, 122)

/** The long gown over his shoulders. */
export const LEONATO_BODY = spline([
  [-14, 336, 1],
  [-10, 290],
  [8, 254],
  [40, 222],
  [72, 210],
  [110, 214],
  [150, 212],
  [184, 228],
  [212, 262],
  [230, 300],
  [238, 336, 1],
])
/** The gown's broad collar, turned back over the shoulders, its edge a band of trim. */
const COLLAR_BACK = spline([
  [-12, 300, 1],
  [2, 262],
  [30, 228],
  [66, 212],
  [96, 216, 1],
  [96, 244],
  [80, 272],
  [58, 296],
  [44, 336, 1],
  [-14, 336, 1],
])
const COLLAR_FRONT = spline([
  [170, 224, 1],
  [198, 240],
  [222, 274],
  [234, 306],
  [238, 336, 1],
  [200, 336, 1],
  [196, 300],
  [184, 268],
])

type Marks = {
  hair: string
  beard: string
  brows: string
  wrinkles: string
  collar: string
  body: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // White hair combed back round the head: fine ink strands, clipped to the
  // hair's shape, from the temple over the ear to the nape.
  let hair = ''
  for (let i = 0; i < 34; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 34
    const pts: Pt[] = []
    const x0 = 132 - t * 90 + between(r, -2, 2)
    const y0 = 62 + t * 10 + between(r, -2, 2)
    const x1 = 94 - t * 40 + between(r, -2, 2)
    const y1 = 118 + t * 64
    for (let k = 0; k <= 6; k++) {
      const u = k / 6
      pts.push([x0 + (x1 - x0) * u - Math.sin(Math.PI * u) * 8, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 0.6, 1), 0.8)
  }

  // The white beard in long waves: ink lines between the paper locks.
  let beard = ''
  for (let i = 0; i < 15; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 15
    const x0 = 116 + t * 60 + between(r, -2, 2)
    const y0 = 150 + between(r, -2, 4) - t * 4
    const x1 = 134 + t * 32 + between(r, -3, 3)
    const y1 = 210 + t * 24 - Math.abs(t - 0.6) * 20 + between(r, -4, 4)
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const u = k / 10
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 6 + i * 0.9) * 2, y0 + (y1 - y0) * u])
    }
    beard += ribbon(pts, between(r, 0.8, 1.3), 0.8)
  }

  // Bushy white brows, level: short strokes of ink over the eye.
  let brows = ''
  for (let i = 0; i < 12; i++) {
    const x = 144 + i * 1.9 + between(r, -0.5, 0.5)
    const y = 86 + i * 0.1 + between(r, -0.6, 0.6)
    brows += `M${n(x)} ${n(y)}l${n(between(r, 2.5, 4))} ${n(between(r, -1.8, 0.6))}`
  }

  // The lines of age: the forehead, the crown's bare dome, crow's feet, the cheek.
  let wrinkles = 'M140 58Q150 55 160 59M138 66Q149 63 162 68M141 74Q151 72 163 76'
  for (let i = 0; i < 4; i++)
    wrinkles += `M${n(145)} ${n(100 + i * 2.6)}L${n(135 - between(r, 0, 3))} ${n(96 + i * 4.5)}`
  for (let rad = 12; rad < 24; rad += 3.6)
    wrinkles += arcDashes(r, 148, 116, rad, deg(80), deg(140), [8, 16], [2, 5])
  for (let rad = 60; rad < 84; rad += 5)
    wrinkles += arcDashes(r, 104, 108, rad, deg(222), deg(286), [10, 24], [4, 10])

  // A band of trim along the collar's edge, and a small repeat on the band.
  let collar = ''
  for (let i = 0; i < 9; i++) {
    const t = i / 9
    const x = 90 - t * 44
    const y = 232 + t * 96
    collar += `M${n(x - 3)} ${n(y)}l3 -3l3 3l-3 3Z`
  }
  for (let i = 0; i < 8; i++) {
    const t = i / 8
    const x = 176 + t * 26
    const y = 244 + t * 88
    collar += `M${n(x - 3)} ${n(y)}l3 -3l3 3l-3 3Z`
  }

  const body = folds(seed + 1, [100, 170], [256, 272], 5)

  const m = { hair, beard, brows, wrinkles, collar, body }
  marksBySeed.set(seed, m)
  return m
}

/** Leonato in his gown, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function LeonatoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-leo-head-${seed}`
  const hairClip = `${uid}-leo-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={LEONATO_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={LEONATO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={LEONATO_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.wrinkles} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      {/* white hair, cut as Scrooge's is: fine ink strands on the paper, no outline */}
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={INK} />
      </g>
      {/* the gown's collar over the neck, and the beard over the collar */}
      <path d={COLLAR_BACK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={COLLAR_FRONT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.collar} fill={PAPER} />
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={m.beard} fill={INK} />
      <path d={MOUSTACHE} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path
        d="M181 143Q173 146 163 150M182 147Q175 150 166 153"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M177 130C172 127 172 121 178 120" strokeWidth={1.5} />
        {/* "such reverence": the eye steady and grave under the level brow */}
        <path d="M146 97.5Q154 94 162 97.5" strokeWidth={2.3} />
        <path d="M147.5 103Q154.5 105.5 161 102" strokeWidth={1.1} />
        <path d="M148 107.5Q154 110 160 107.5" strokeWidth={LINE.hairline} />
        <path d={m.brows} strokeWidth={1.3} />
        <path d="M143 88Q153 85.5 166 88" strokeWidth={1.3} />
      </g>
      <circle cx={155} cy={99.6} r={2.6} fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, beard and gown. */
export function LeonatoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={LEONATO_HEAD} />
      <path d={HAIR} />
      <path d={BEARD} />
      <path d={LEONATO_BODY} />
    </g>
  )
}

const P = placing(28, -2, 1.0, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Leonato's garden by day, the light ahead of him.
  ground = portraitGround('leonato', 3701, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function LeonatoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <LeonatoKnockout />
        <LeonatoFigure uid={uid} seed={3701} />
      </g>
      <PortraitRule />
    </>
  )
}

export const leonatoPortrait: LinocutArt = { width: PW, height: PH, Draw: LeonatoPortrait }

const BEARD_AT = P.to(156, 206)
const BROW_AT = P.to(151, 66)

export const leonato: Portrait = {
  name: 'Leonato',
  art: leonatoPortrait,
  alt: 'A linocut portrait of Leonato in profile, facing left: an old man with a bare crown, white hair combed back round the back of his head, bushy white brows, a lined forehead, and a full white beard that falls to a point on his chest, with a white moustache over his lip. His face is grave and his eye steady. He wears a long dark gown with a broad collar turned back over his shoulders, edged with a band of small pale diamonds. Two numbered red markers point to his white beard and to his lined, grave brow.',
  describedBy: [
    { phrase: 'the white-bearded fellow', at: [BEARD_AT[0] - 64, BEARD_AT[1] + 30], to: BEARD_AT },
    { phrase: 'such reverence', at: [BROW_AT[0] - 70, BROW_AT[1] - 24], to: BROW_AT },
  ],
  where: 'Act 2, Scene 3',
  passage:
    'I should think this a gull, but that the white-bearded fellow speaks it: knavery cannot, sure, hide itself in such reverence.',
  note: 'Benedick, hidden in the arbour, decides the story must be true because an old man with a white beard is telling it. Leonato is in on the trick: in this play, whoever looks honest is believed.',
  artNote:
    'The white beard is the play’s, and later he speaks of his own “grey hairs”. His bare crown, brows and gown are how the panels draw him, in the plain dress of an old man of standing.',
}

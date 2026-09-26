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
  Buttons,
  Hand,
  handPoint,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  type Digit,
  type SP,
} from './common'

/**
 * Romeo, as the Nurse describes him to Juliet in Act 2, Scene 5, the only
 * account of his looks the play gives:
 *
 *   "Though his face be better than any man's, yet his leg excels all men's,
 *   and for a hand and a foot, and a body, though they be not to be talked
 *   on, yet they are past compare. He is not the flower of courtesy, but I'll
 *   warrant him as gentle as a lamb."
 *
 * So: a young man's face, beardless (the Friar calls him "Young son", 2.3, and
 * he is "the youngest of that name", 2.4), with a mild, open eye for "gentle
 * as a lamb", and one hand laid on his heart. The gesture is the lover's; the
 * hand is the Nurse's. The play never describes his hair: he has the full
 * head of dark curls the panels give him (../panels/verona-kit.tsx), so he is
 * the same young man in the gallery as in the story. He wears the plain dress
 * of the time: a black doublet buttoned down the front and a falling linen
 * band at the neck. There is no red in this plate: the passage names no
 * colour.
 */

/** The head, young and beardless, facing right in a 0..240 by 0..332 frame. */
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
  [170, 89],
  [166.5, 98, 1],
  [174, 112],
  [184, 127],
  [182.5, 132],
  [172.5, 136, 1],
  [174, 143],
  [169, 148.5, 1],
  [172, 153],
  [167.5, 160, 1],
  [171.5, 169],
  [169, 180],
  [158, 186.5],
  [141, 190],
  [134, 197],
  [132, 212],
  [134, 226],
]
export const ROMEO_HEAD = spline(HEAD_PTS)

/**
 * A full head of dark curls, as the panels draw him: a scalloped mass from
 * the brow round the crown to the nape, its inner edge the hairline, round
 * the ear. Built once from points on an ellipse round the skull.
 */
function curlMass(): string {
  const cx = 100
  const cy = 112
  let d = ''
  const pts: [number, number][] = []
  // the outer edge, from the top of the brow back over the crown to the nape
  const a0 = 292
  const a1 = 122
  const bumps = 15
  for (let i = 0; i <= bumps; i++) {
    const a = deg(a0 - ((a0 - a1) * i) / bumps)
    const rx = 70 - Math.max(0, i - 11) * 3
    const ry = 92 - Math.max(0, i - 11) * 2
    pts.push([cx + Math.cos(a) * rx, cy + Math.sin(a) * ry])
  }
  d += `M${n(pts[0][0])} ${n(pts[0][1])}`
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const mx = (x0 + x1) / 2
    const my = (y0 + y1) / 2
    const ox = mx - cx
    const oy = my - cy
    const L = Math.hypot(ox, oy) || 1
    d += `Q${n(mx + (ox / L) * 13)} ${n(my + (oy / L) * 13)} ${n(x1)} ${n(y1)}`
  }
  // the inner edge: up behind the ear, over it, and along the hairline,
  // with curls falling over the brow
  d +=
    'C80 196 86 178 88 160C90 140 88 118 94 106C100 98 112 98 122 104' +
    'C124 96 126 86 132 78C128 74 130 68 136 68C136 62 140 58 146 60' +
    'C146 54 150 50 156 52C160 50 164 50 166 52C164 46 160 42 156 40Z'
  return d
}
const HAIR = curlMass()
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

/** The black doublet over the shoulders and chest. */
export const ROMEO_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 262],
  [40, 238],
  [70, 222],
  [110, 226],
  [140, 220],
  [168, 230],
  [196, 254],
  [216, 290],
  [228, 336, 1],
])
/** The standing collar of the doublet, round the neck. */
const COLLAR = spline([
  [62, 194, 1],
  [100, 202],
  [138, 200, 1],
  [141, 214],
  [104, 222],
  [62, 214, 1],
])
/** The falling band: a plain linen collar turned down over the doublet. */
const BAND = spline([
  [40, 226],
  [60, 212],
  [100, 219],
  [141, 213, 1],
  [164, 228],
  [188, 246, 1],
  [160, 255],
  [120, 257],
  [80, 253],
  [46, 247],
  [24, 245, 1],
])

// ── The hand on his heart ─────────────────────────────────────────────────
// The back of his right hand, flat on his chest, fingers towards his far
// shoulder. Drawn with the wrist at the origin and the fingers pointing up.
const HAND_AT: Pt = [124, 292]
const HAND_ROT = 30
const HAND_S = 0.9
const PALM = spline([
  [-13, 2],
  [-16, -14],
  [-16, -30],
  [-12, -42],
  [1, -46],
  [15, -44],
  [22, -36],
  [22, -16],
  [16, 0],
])
const DIGITS: Digit[] = [
  // the little finger, the ring finger, the middle finger, the index
  { from: [17, -36], to: [22, -56], w: 7.4 },
  { from: [9.5, -40], to: [12.5, -66], w: 8 },
  { from: [1, -42], to: [1.5, -70], w: 8.4 },
  { from: [-8, -40], to: [-11.5, -64], w: 8 },
  // the thumb, lying along the chest towards the collar
  { from: [-13, -12], to: [-27, -34], w: 9.4 },
]
/** The tendons on the back of the hand, and the nails. */
const HAND_LINES =
  'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 10 -34' +
  'M-12.5 -60L-10.5 -61M0 -66L3 -66M11 -62L14 -62.5M20 -53L22.5 -53.5'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The sleeve, from the edge of the plate to the wrist. */
const SLEEVE = spline([
  [20, 340, 1],
  [60, 318],
  [100, 294],
  [116, 286, 1],
  [136, 300],
  [132, 322],
  [100, 340, 1],
])

type Marks = { hair: string; back: string; jaw: string; body: string; band: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The curls: small crescents cut in paper, turning every way, brighter
  // towards the light at the front of the head.
  let hair = ''
  for (let i = 0, tries = 0; i < 150 && tries < 6000; tries++) {
    const x = between(r, 30, 168)
    const y = between(r, 20, 204)
    const ex = (x - 100) / 72
    const ey = (y - 112) / 94
    const inside = ex * ex + ey * ey < 1
    const face = x > 92 && y > 96
    const brow = x > 124 && y > 62
    if (!inside || face || brow) continue
    const a = between(r, 0, Math.PI * 2)
    const L = between(r, 6, 11)
    const light = clamp((x - 30) / 140)
    hair += gouge(
      x,
      y,
      x + Math.cos(a) * L,
      y + Math.sin(a) * L,
      between(r, 0.8, 1.2) * (0.7 + light * 0.7),
      between(r, 2.4, 3.6) * (r() < 0.5 ? -1 : 1),
    )
    i++
  }

  // The back of the neck, turned from the light.
  let back = ''
  for (let rad = 56; rad < 120; rad += 3.6)
    back += arcDashes(r, 152, 120, rad, deg(112), deg(172), [8, 22], [2, 6])
  // A young jaw: one line of shadow under it.
  let jaw = ''
  for (let i = 0; i < 4; i++) {
    const y = 190 + i * 3.4
    jaw += `M${n(104 - i * 1.5)} ${n(y)}L${n(150 - i * 5)} ${n(y + 1)}`
  }

  // Folds in the doublet, cut in paper, and the shoulder seam.
  let body = ''
  body += gouge(34, 262, 8, 324, 2.2, 3)
  body += gouge(58, 256, 48, 330, 1.6, 2)
  body += gouge(196, 286, 214, 330, 1.4, -1)
  for (let i = 0; i < 5; i++) {
    const x = between(r, 70, 120)
    body += gouge(x, between(r, 270, 286), x + between(r, -6, 6), 334, between(r, 0.7, 1.2), 1)
  }

  // The fold lines of the linen band, in ink.
  let band = ''
  for (const [x, y0, x1, y1] of [
    [70, 218, 60, 244],
    [108, 222, 104, 250],
    [144, 222, 150, 248],
  ])
    band += `M${n(x)} ${n(y0)}Q${n((x + x1) / 2 + between(r, -2, 2))} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`

  const m = { hair, back, jaw, body, band }
  marksBySeed.set(seed, m)
  return m
}

/** Romeo's head and shoulders, lit from the front, in the 0..240 by 0..332 frame. */
export function RomeoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-ro-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={ROMEO_HEAD} />
        </clipPath>
      </defs>
      <path d={ROMEO_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.7} />
          <path d={m.jaw} strokeWidth={1.3} />
        </g>
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={ROMEO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.band} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <Buttons
        pts={[
          [181, 247],
          [192, 263],
          [201, 280],
          [208, 298],
          [213, 316],
        ]}
      />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 114C99 116 97 124 99 132C100 136 103 138 106 135" strokeWidth={1.6} />
        {/* nostril, the closed lips, the soft chin */}
        <path d="M176 131C172 128 172 123 177.5 122" strokeWidth={1.4} />
        <path d="M169 148.5L159 149.5" strokeWidth={1.8} />
        <path d="M171 154C168.5 155.5 166 155.5 164 154.5" strokeWidth={1} />
        <path d="M166 166C162 169 162 174 166 177" strokeWidth={LINE.hairline} />
        {/* the jaw, back to below the ear */}
        <path d="M167 184C150 190 132 188 120 176C115 168 112 158 110 150" strokeWidth={1.8} />
        {/* "as gentle as a lamb": a soft brow and an open, mild eye */}
        <path d="M145 86.5Q155 82.5 165 87" strokeWidth={2.8} />
        <path d="M147 98Q154.5 94 162.5 98.5" strokeWidth={2.1} />
        <path d="M148.5 104.5Q155 106 161.5 102.5" strokeWidth={1.1} />
        <path d="M149 108Q155 110 160 107.5" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={156} cy={100.4} r={2.8} fill={INK} />
      {/* the sleeve and the hand laid on his heart */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M112 290C120 294 127 302 130 312" fill="none" stroke={PAPER} strokeWidth={1.2} />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
export function RomeoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={ROMEO_HEAD} />
      <path d={HAIR} />
      <path d={ROMEO_BODY} />
    </g>
  )
}

const P = placing(20, -6, 1.04)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Daylight ahead of him: the Nurse speaks of him at noon.
  ground = portraitGround('romeo', 2101, (x, y) =>
    clamp(0.08 + ((x - 60) / 280) * 0.9 - (y / PH) * 0.14),
  )
  return ground
}

function RomeoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <RomeoKnockout />
        <RomeoFigure uid={uid} seed={2101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const romeoPortrait: LinocutArt = { width: PW, height: PH, Draw: RomeoPortrait }

const FACE_AT = P.to(160, 124)
const HAND_MARK = P.to(...inHand(1, -50))
const EYE_AT = P.to(156, 101)

export const romeo: Portrait = {
  name: 'Romeo',
  art: romeoPortrait,
  alt: 'A linocut portrait of Romeo in profile, facing right: a young, beardless man with a full head of dark curls, a mild, open eye and a gentle face, in a black doublet buttoned down the front with a plain white linen collar turned down over it. He lays one hand flat on his heart, its fingers spread on the dark cloth. Three numbered red markers point to his face, his hand and his eye.',
  describedBy: [
    {
      phrase: "his face be better than any man's",
      at: [FACE_AT[0] + 60, FACE_AT[1] - 30],
      to: FACE_AT,
    },
    {
      phrase: 'for a hand and a foot, and a body',
      at: [HAND_MARK[0] + 70, HAND_MARK[1] + 6],
      to: HAND_MARK,
    },
    { phrase: 'as gentle as a lamb', at: [EYE_AT[0] + 10, 40], to: EYE_AT },
  ],
  where: 'Act 2, Scene 5',
  passage:
    "Though his face be better than any man's, yet his leg excels all men's, and for a hand and a foot, and a body, though they be not to be talked on, yet they are past compare. He is not the flower of courtesy, but I'll warrant him as gentle as a lamb.",
  note: 'The Nurse teases Juliet by making her wait for Romeo’s answer, and praises him in the same breath. It is the only description of his looks in the play, and it comes from a Capulet servant.',
  artNote:
    'The play never describes his hair or his clothes, so he has the curls he has in every panel and the plain dress of the time. The hand on his heart is the lover’s gesture; the words are the Nurse’s.',
}

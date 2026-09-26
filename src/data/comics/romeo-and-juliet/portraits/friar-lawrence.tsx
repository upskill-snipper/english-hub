import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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
  Hand,
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
 * Friar Lawrence at dawn, gathering herbs outside his cell when Romeo finds
 * him (2.3). His own words give the picture:
 *
 *   "Now, ere the sun advance his burning eye, ... I must upfill this osier
 *   cage of ours With baleful weeds and precious-juiced flowers."
 *
 * An osier cage is a basket woven of willow, so he carries one, full of
 * leaves and flowers, and the flowers are printed red, the one colour in the
 * plate, as the flower on his palm is in "The Friar agrees": the plant that
 * can heal or kill. The morning is his too: "The grey-ey'd morn smiles on
 * the frowning night, Chequering the eastern clouds with streaks of light",
 * so the ground is cut in bands of light, brightest low on the right where
 * the sun will come up. The sun itself is not drawn. It was, half risen and
 * printed red, until the review of 26 September 2026 pointed out that he
 * speaks "ere the sun advance", before it is up, and that the panel of the
 * same scene has no sun either.
 *
 * He is old. He says so himself, twice in the scene: "Care keeps his watch in
 * every old man's eye", and "Thy old groans yet ring in mine ancient ears".
 * So the eye is lined and the ear is an old man's, and the markers point at
 * both. He is a Franciscan ("Holy Saint Francis!", 2.3), so he wears his
 * order's habit with the hood down on his shoulders, a clean-shaven face and
 * a tonsure ringed with white hair, as the panels draw him
 * (../panels/verona-kit.tsx and ../panels/late-scenes-kit.tsx). Nothing else
 * about him is described.
 */

/** The head, old and clean-shaven, a little stooped, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 228],
  [58, 202],
  [50, 176],
  [42, 146],
  [42, 108],
  [54, 72],
  [78, 47],
  [110, 34],
  [140, 36],
  [158, 50],
  [165, 70],
  [168, 88],
  [164.5, 97, 1],
  [173, 112],
  [185, 128],
  [183, 134],
  [172.5, 137.5, 1],
  [172, 144],
  [166.5, 148, 1],
  [168.5, 152.5],
  [164.5, 157, 1],
  [170, 167],
  [168, 180],
  [158, 188],
  [142, 194],
  [132, 202],
  [130, 214],
  [132, 228],
]
export const FRIAR_HEAD = spline(HEAD_PTS)

/**
 * The ring of white hair round the shaven crown, from the temple round the
 * back of the head to the nape: a band about the skull, a little ragged at
 * its outer edge.
 */
function fringeBand(): string {
  const cx = 100
  const cy = 118
  const outer: Pt[] = []
  const inner: Pt[] = []
  const steps = 18
  for (let i = 0; i <= steps; i++) {
    const a = deg(302 - (182 * i) / steps)
    const bump = i % 2 ? 1.06 : 1.02
    outer.push([cx + Math.cos(a) * 63 * bump, cy + Math.sin(a) * 85 * bump])
    const k = 0.74 + Math.sin((i / steps) * Math.PI) * 0.04
    inner.push([cx + Math.cos(a) * 63 * k, cy + Math.sin(a) * 85 * k])
  }
  const pts = [...outer, ...inner.reverse()]
  return 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}
const FRINGE = fringeBand()
const EAR = spline([
  [110, 106],
  [99, 103],
  [91, 112],
  [89, 126],
  [92, 142],
  [102, 152],
  [110, 148],
  [113, 136],
  [113, 118],
])

/** The habit over his shoulders, the stoop pushing the head forward. */
export const FRIAR_BODY = spline([
  [-12, 336, 1],
  [-8, 286],
  [8, 250],
  [40, 226],
  [72, 214],
  [110, 220],
  [140, 214],
  [170, 228],
  [200, 254],
  [220, 292],
  [230, 336, 1],
])
/** The hood, down, in a heavy fold round the back of his neck. */
const HOOD = spline([
  [-4, 266],
  [8, 236],
  [34, 212],
  [64, 202],
  [96, 206, 1],
  [110, 222],
  [104, 240],
  [78, 246],
  [44, 256],
  [18, 280, 1],
])

// ── The osier basket ──────────────────────────────────────────────────────
/** The basket, a deep bowl of woven willow, held up before him. */
const BASKET = spline([
  [168, 264, 1],
  [264, 258, 1],
  [258, 290],
  [244, 314],
  [216, 324],
  [188, 318],
  [174, 294],
])
/**
 * His hand over the rim at the left: the back of the hand, and four fingers
 * hooked over the edge, each cut apart from the next. The thumb is inside the
 * basket, out of sight. Wrist at the origin, fingers pointing up before it
 * is turned.
 */
const HAND_AT: Pt = [176, 230]
const HAND_ROT = 172
const HAND_S = 0.74
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
  { from: [17, -38], to: [18, -56], w: 7.6 },
  { from: [9.5, -40], to: [10, -64], w: 8.2 },
  { from: [1, -42], to: [1, -66], w: 8.6 },
  { from: [-8, -40], to: [-8.5, -62], w: 8.2 },
]
const HAND_LINES = 'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 11 -34'
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The wide sleeve of the habit, from the foot of the plate up to the wrist. */
const SLEEVE = spline([
  [96, 340, 1],
  [118, 300],
  [146, 260],
  [164, 228, 1],
  [190, 232, 1],
  [178, 262],
  [156, 300],
  [146, 340, 1],
])

type Marks = {
  fringe: string
  wrinkles: string
  back: string
  hood: string
  body: string
  weave: string
  herbs: string
  veins: string
  flowers: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The white hair: short ink strands across the ring, combed down.
  let fringe = ''
  for (let i = 0; i < 46; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 46
    const a = deg(300 - t * 178)
    const x0 = 100 + Math.cos(a) * 63 * 1.02
    const y0 = 118 + Math.sin(a) * 85 * 1.02
    const x1 = 100 + Math.cos(a) * 63 * 0.8
    const y1 = 118 + Math.sin(a) * 85 * 0.8
    fringe += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 - 2)} ${n((y0 + y1) / 2 + 3)} ${n(x1)} ${n(y1 + 2)}`
  }

  // The lines of age: forehead, crow's feet, the fold from nose to mouth, the
  // hollow of the cheek, the slack under the jaw.
  let wrinkles = 'M142 60Q151 57 160 61M140 68Q150 65 161 69M142 76Q151 74 160 77'
  for (let i = 0; i < 4; i++)
    wrinkles += `M${n(145)} ${n(101 + i * 2.4)}L${n(135 - between(r, 0, 3))} ${n(97 + i * 4.5)}`
  wrinkles += 'M170 138C162 146 160 156 163 166'
  wrinkles += 'M150 186C146 192 140 196 134 198'
  for (let rad = 12; rad < 26; rad += 3.4)
    wrinkles += arcDashes(r, 148, 120, rad, deg(70), deg(140), [8, 16], [2, 5])

  let back = ''
  for (let rad = 54; rad < 118; rad += 3.6)
    back += arcDashes(r, 150, 124, rad, deg(112), deg(172), [8, 22], [2, 6])

  // Folds in the hood and the coarse habit, cut in paper.
  let hood = ''
  for (let i = 0; i < 6; i++) {
    const t = i / 5
    hood += gouge(10 + t * 80, 244 - t * 30, 20 + t * 76, 262 - t * 26, 1.2, 2.4)
  }
  let body = ''
  body += gouge(24, 280, 4, 330, 2.2, 3)
  for (let i = 0; i < 7; i++) {
    const x = between(r, 40, 150)
    body += gouge(x, between(r, 250, 270), x + between(r, -8, 8), 336, between(r, 0.8, 1.4), 1.5)
  }

  // The weave of the willow: rows of short ink strokes, each row offset by
  // half a stroke, and the upright stakes between them.
  let weave = ''
  for (let row = 0; row < 7; row++) {
    const y = 273 + row * 7.2
    const half = row % 2 ? 4.5 : 0
    const inset = Math.max(0, row - 3) * 6
    for (let x = 176 + half + inset; x < 256 - inset; x += 9)
      weave += gouge(x, y, x + 6.5, y + 1, 1.4, 1)
  }

  // "baleful weeds and precious-juiced flowers": long leaves standing up out
  // of the basket, cut in paper, and a few flowers among them.
  let herbs = ''
  let veins = ''
  for (let i = 0; i < 11; i++) {
    const x = 190 + i * 6.6 + between(r, -2, 2)
    const top = 246 - between(r, 6, 34)
    const lean = between(r, -16, 16)
    const mid: Pt = [x + lean * 0.4, (268 + top) / 2]
    herbs += ribbon([[x, 270], mid, [x + lean, top]], between(r, 7, 10), 0.6)
    veins += `M${n(x)} ${n(268)}Q${n(mid[0])} ${n(mid[1])} ${n(x + lean * 0.9)} ${n(top + 4)}`
  }
  let flowers = ''
  const heads: Pt[] = [
    [196, 232],
    [226, 220],
    [252, 238],
  ]
  for (const [x, y] of heads) {
    for (let k = 0; k < 6; k++) {
      const a = deg(k * 60 + between(r, -8, 8))
      flowers += gouge(x, y, x + Math.cos(a) * 7, y + Math.sin(a) * 7, 2.4, 0)
    }
  }

  const m = { fringe, wrinkles, back, hood, body, weave, herbs, veins, flowers }
  marksBySeed.set(seed, m)
  return m
}

/** Friar Lawrence with his basket, in the 0..250 by 0..332 frame. */
export function FriarFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-fr-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={FRIAR_HEAD} />
        </clipPath>
      </defs>
      <path d={FRIAR_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRIAR_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={m.wrinkles} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      {/* the tonsure: the crown bare, ringed with white hair */}
      <path d={FRINGE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.fringe} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={HOOD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.hood} fill={PAPER} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* "mine ancient ears": a long ear, its lobe heavy */}
        <path d="M106 114C98 116 96 126 98 134C99 140 102 143 106 140" strokeWidth={1.6} />
        <path d="M100 146Q104 150 108 148" strokeWidth={LINE.hairline} />
        {/* nostril, the thin old mouth, the chin */}
        <path d="M177 132C172 129 172 123 178 122" strokeWidth={1.4} />
        <path d="M166.5 148L158 149.5" strokeWidth={1.8} />
        <path d="M167 162C163 165 163 170 167 173" strokeWidth={LINE.hairline} />
        {/* "every old man's eye": a heavy lid, a bag beneath, a mild look */}
        <path d="M143 88Q152 84.5 162 88" strokeWidth={2.6} />
        <path d="M145 99Q153 95 161 99.5" strokeWidth={2.2} />
        <path d="M147 104Q153.5 105.5 160 102.5" strokeWidth={1} />
        <path d="M147 109Q154 112 160 108.5" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={154} cy={101} r={2.5} fill={INK} />
      {/* the basket, its handle and the herbs in it */}
      <path d={m.herbs} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path d={m.veins} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      {/* "precious-juiced flowers", in the spot colour */}
      <path d={m.flowers} fill={RED} stroke={INK} strokeWidth={0.9} />
      <path d={BASKET} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d={m.weave} fill={INK} />
      <path d="M168 264L264 258" stroke={INK} strokeWidth={LINE.bold} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} halo={3} />
    </g>
  )
}

/** A thick ink halo round the friar and his basket. */
export function FriarKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={FRIAR_HEAD} />
      <path d={FRINGE} />
      <path d={FRIAR_BODY} />
      <path d={BASKET} />
      <path d={SLEEVE} />
    </g>
  )
}

const P = placing(10, 0, 0.98)
/** Where the sun will rise, low on the right beyond the basket: the light is brightest there. */
const SUN: Pt = [292, 272]

let cuts: { ground: string } | undefined
function portraitCuts() {
  if (cuts) return cuts
  // "Chequering the eastern clouds with streaks of light": bands of light,
  // brightest low down towards the sunrise.
  const ground = portraitGround('friar-lawrence', 2701, (x, y) => {
    const band = 0.5 + 0.5 * Math.sin(y / 11)
    const low = y / PH
    const sun = clamp(1 - Math.hypot(x - SUN[0], y - SUN[1]) / 200)
    return clamp(0.06 + band * 0.35 * (0.4 + low) + sun * 0.5)
  })
  cuts = { ground }
  return cuts
}

function FriarPortrait({ uid }: ArtProps) {
  const c = portraitCuts()
  return (
    <>
      <path d={c.ground} fill={PAPER} />
      {/* "ere the sun advance his burning eye": the horizon, before sunrise */}
      <path
        d={`M${SUN[0] - 44} ${SUN[1] + 1}L${PW - 10} ${SUN[1] + 1}`}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <g transform={P.transform}>
        <FriarKnockout />
        <FriarFigure uid={uid} seed={2701} />
      </g>
      <PortraitRule />
    </>
  )
}

export const friarLawrencePortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: FriarPortrait,
}

const EYE_AT = P.to(154, 101)
const EAR_AT = P.to(102, 128)
const BASKET_AT = P.to(226, 300)

export const friarLawrence: Portrait = {
  name: 'Friar Lawrence',
  art: friarLawrencePortrait,
  alt: 'A linocut portrait of Friar Lawrence at dawn, in profile facing right: an old, clean-shaven man with a lined face, a heavy-lidded eye and a long ear, his crown shaved in a tonsure and ringed with white hair. He wears a dark friar’s habit with the hood down in a thick fold round his neck. In one hand he holds up a woven willow basket by its rim, full of long leaves and a few flowers printed in red. Beyond the basket the sky is cut in streaks of light, brightest low on the horizon before sunrise. Three numbered red markers point to his eye, his ear and the basket.',
  describedBy: [
    { phrase: "every old man's eye", at: [EYE_AT[0] + 30, EYE_AT[1] - 70], to: EYE_AT },
    { phrase: 'mine ancient ears', at: [EAR_AT[0] - 60, EAR_AT[1] - 60], to: EAR_AT },
    { phrase: 'this osier cage of ours', at: [BASKET_AT[0] + 60, BASKET_AT[1] + 4], to: BASKET_AT },
  ],
  where: 'Act 2, Scene 3',
  note: 'The Friar is gathering herbs when Romeo arrives, and reflects that the same plant can heal or poison. The potion he later gives Juliet comes from this knowledge.',
  artNote:
    'The play tells us he is old and a Franciscan friar; his habit, hood, tonsure and white hair are the dress of his order, as the panels draw him.',
}

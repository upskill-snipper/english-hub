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
 * Benvolio, Montague's nephew, in the brawl that opens the play (1.1). He has
 * drawn his sword only to part the servants, and when Tybalt comes at him he
 * says:
 *
 *   "I do but keep the peace, put up thy sword, Or manage it to part these men
 *   with me."
 *
 * So he holds up one open hand, the fingers apart, to stay Tybalt's sword,
 * and his face is steady: a level brow, a calm eye, the mouth just open as he
 * speaks. Nothing is struck and no blade is drawn in the plate.
 *
 * The play never describes him at all. He is drawn as the panels draw him
 * (../panels/people.tsx): a young man, beardless, in a doublet and a plain
 * flat cap, the soft bonnet of the play's Verona. There is no red in this
 * plate.
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
  [171, 89],
  [167.5, 99, 1],
  [174, 111],
  [182, 126],
  [180.5, 131],
  [172, 134.5, 1],
  [173.5, 141],
  [168, 146.5, 1],
  [171.5, 150],
  [168.5, 154],
  [166.5, 159, 1],
  [171, 168],
  [170, 180],
  [159, 187.5],
  [142, 191],
  [134, 198],
  [132, 212],
  [134, 226],
]
export const BENVOLIO_HEAD = spline(HEAD_PTS)

/** Short hair at the back of the head and the nape, under the cap. */
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
/** The flat cap: a soft, wide crown set a little back on the head, and its band. */
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
/** The cap is worn tipped forward, its front low over the brow. */
const CAP_T = 'translate(2 10) rotate(9 100 40)'
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

export const BENVOLIO_BODY = spline([
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
const COLLAR = spline([
  [62, 194, 1],
  [100, 202],
  [138, 200, 1],
  [141, 214],
  [104, 222],
  [62, 214, 1],
])
/** A narrow linen band turned down over the collar. */
const BAND = spline([
  [56, 208, 1],
  [100, 216],
  [142, 211, 1],
  [158, 222],
  [170, 234, 1],
  [140, 236],
  [100, 232],
  [58, 226],
  [40, 226, 1],
])

// ── The open hand ─────────────────────────────────────────────────────────
// The back of his hand, held up before him at the height of his chest, the
// fingers up and spread: "put up thy sword". Wrist at the origin.
const HAND_AT: Pt = [200, 268]
const HAND_ROT = 12
const HAND_S = 1
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
  { from: [17, -36], to: [27, -56], w: 7.4 },
  { from: [9.5, -40], to: [14, -68], w: 8 },
  { from: [1, -42], to: [1, -72], w: 8.4 },
  { from: [-8, -40], to: [-14, -65], w: 8 },
  { from: [-13, -12], to: [-30, -30], w: 9.4 },
]
const HAND_LINES =
  'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 11 -34' +
  'M-15 -60L-12.5 -61M-0.5 -68L2.5 -68M12.5 -64L15.5 -64.5M24 -53L26.5 -54'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The forearm in its sleeve, rising from the foot of the plate to the wrist. */
const SLEEVE = spline([
  [140, 340, 1],
  [158, 314],
  [178, 284],
  [188, 268, 1],
  [214, 274, 1],
  [208, 300],
  [196, 340, 1],
])

type Marks = { hair: string; back: string; cap: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Hair at the nape, cut in paper strands, with a rim of light at the edge.
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

  // The soft crown of the cap: folds cut in paper, radiating from the front.
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

  let body = ''
  body += gouge(34, 262, 8, 324, 2.2, 3)
  body += gouge(58, 256, 48, 330, 1.6, 2)
  for (let i = 0; i < 6; i++) {
    const x = between(r, 70, 150)
    body += gouge(x, between(r, 250, 270), x + between(r, -6, 6), 334, between(r, 0.7, 1.2), 1)
  }

  const m = { hair, back, cap, body }
  marksBySeed.set(seed, m)
  return m
}

/** Benvolio, head and shoulders and one hand raised, in the 0..240 by 0..332 frame. */
export function BenvolioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-be-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={BENVOLIO_HEAD} />
        </clipPath>
      </defs>
      <path d={BENVOLIO_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.7} strokeLinecap="round" />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <g transform={CAP_T}>
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.cap} fill={PAPER} />
        <path d={CAP_BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      </g>
      <path d={BENVOLIO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Buttons
        pts={[
          [176, 244],
          [186, 258],
        ]}
      />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 114C99 116 97 124 99 132C100 136 103 138 106 135" strokeWidth={1.6} />
        {/* nostril, the lips parted as he speaks, the chin */}
        <path d="M174.5 129C170.5 126 170.5 121 176 120" strokeWidth={1.4} />
        <path d="M168 146.5L159 147.5" strokeWidth={1.8} />
        <path d="M168.5 152.5C166 153.5 163.5 153.5 161.5 152.5" strokeWidth={1} />
        <path d="M167 170C163 173 163 178 167 181" strokeWidth={LINE.hairline} />
        <path d="M168 186C151 192 132 190 120 178C115 170 112 160 110 152" strokeWidth={1.8} />
        {/* "I do but keep the peace": a level brow and a steady eye */}
        <path d="M146 88Q156 86.5 166 89" strokeWidth={3} />
        <path d="M147.5 99Q155 96.5 163 99.5" strokeWidth={2.1} />
        <path d="M149 105Q155.5 106 162 103" strokeWidth={1.1} />
      </g>
      <circle cx={156.6} cy={101.2} r={2.7} fill={INK} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M184 270C191 275 198 282 202 292" fill="none" stroke={PAPER} strokeWidth={1.2} />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} />
    </g>
  )
}

/** A thick ink halo round head, cap and shoulders. */
export function BenvolioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BENVOLIO_HEAD} />
      <path d={CAP} transform={CAP_T} />
      <path d={BENVOLIO_BODY} />
      <path d={SLEEVE} />
    </g>
  )
}

const P = placing(8, 0, 1.0)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A morning in the street: "But new struck nine" (1.1).
  ground = portraitGround('benvolio', 2401, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.85 - (y / PH) * 0.1),
  )
  return ground
}

function BenvolioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <BenvolioKnockout />
        <BenvolioFigure uid={uid} seed={2401} />
      </g>
      <PortraitRule />
    </>
  )
}

export const benvolioPortrait: LinocutArt = { width: PW, height: PH, Draw: BenvolioPortrait }

const EYE_AT = P.to(157, 101)
const HAND_MARK = P.to(...inHand(1, -40))

export const benvolio: Portrait = {
  name: 'Benvolio',
  art: benvolioPortrait,
  alt: 'A linocut portrait of Benvolio in profile, facing right: a young, beardless man in a plain dark flat cap, a dark doublet and a narrow white collar. His brow is level and his eye steady, his lips parted as he speaks. He holds up one open hand before him at the height of his chest, its fingers spread, as if to stop someone. Two numbered red markers point to his calm eye and to his raised hand.',
  describedBy: [
    { phrase: 'I do but keep the peace', at: [EYE_AT[0] + 60, EYE_AT[1] - 50], to: EYE_AT },
    { phrase: 'put up thy sword', at: [HAND_MARK[0] + 56, HAND_MARK[1] + 30], to: HAND_MARK },
  ],
  where: 'Act 1, Scene 1',
  passage: 'I do but keep the peace, put up thy sword, Or manage it to part these men with me.',
  note: 'Benvolio’s name means good will, and his first words in the play try to stop a fight. Tybalt answers that he hates the word peace.',
  artNote:
    'The play never describes him, so he is drawn plainly, as the panels draw him: a young man in the doublet and flat cap of the time.',
}

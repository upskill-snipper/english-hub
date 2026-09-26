import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  ear,
  Hand,
  handPoint,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  type Digit,
  type SP,
} from './common'

/**
 * Don Pedro, the Prince of Arragon. The play never describes his face; what
 * it gives is what he does and what Beatrice says to him:
 *
 * - To Claudio, before the revels (1.1): "I will assume thy part in some
 *   disguise, And tell fair Hero I am Claudio". So he holds up the visor he
 *   will woo her in, a plain half-mask with its ties, the one the panels put
 *   on him at the ball (../panels/people.tsx).
 * - Beatrice, when he half-offers himself as her husband (2.1): "your Grace
 *   is too costly to wear every day." So his doublet is the richest in the
 *   set, worked all over in a small cut pattern, with a cloak over one
 *   shoulder, its border cut in paper.
 * - Himself, planning to make a match of Beatrice and Benedick (2.1): "his
 *   glory shall be ours, for we are the only love-gods." So he smiles, the
 *   corner of the mouth lifted and the eye creased: a man enjoying his plan.
 *
 * He wears the plain circlet the panels give him, so he is known as the
 * Prince in every piece; his face, short hair and dress are otherwise the
 * plain dress of a nobleman of the time. The hand that holds the visor is
 * open, the fingers apart above the mask and the thumb in front of it, so it
 * reads as a grip and never as a fist. There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 */

/** A man's head, clean-shaven, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 228],
  [59, 200],
  [50, 174],
  [42, 146],
  [42, 108],
  [54, 72],
  [78, 47],
  [110, 34],
  [141, 36],
  [159, 50],
  [166, 70],
  [170, 89],
  [166.5, 99, 1],
  [174, 112],
  [182, 126],
  [180.5, 131.5],
  [171.5, 134.5, 1],
  [173, 141],
  [167.5, 146.5, 1],
  [171, 151],
  [168, 156],
  [166, 161, 1],
  [171, 170],
  [170, 183],
  [158, 191],
  [142, 194],
  [134, 201],
  [132, 214],
  [134, 228],
]
export const DON_PEDRO_HEAD = spline(HEAD_PTS)

/** Short hair, swept back from the brow over the crown to the nape. */
const HAIR = spline([
  [150, 44, 1],
  [138, 50],
  [124, 60],
  [116, 78],
  [112, 98, 1],
  [100, 100],
  [92, 110],
  [88, 136],
  [80, 162],
  [62, 172, 1],
  [46, 150],
  [40, 110],
  [46, 72],
  [68, 44],
  [100, 30],
  [132, 30],
])
/** The Prince's circlet: a plain band on the brow with three low points. */
const CIRCLET = spline([
  [60, 72, 1],
  [61, 62, 1],
  [76, 64, 1],
  [88, 54, 1],
  [100, 62, 1],
  [118, 52, 1],
  [130, 60, 1],
  [146, 52, 1],
  [158, 56, 1],
  [162, 58, 1],
  [162, 66, 1],
  [110, 70],
])
const EAR = ear(102, 124)

export const DON_PEDRO_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [12, 262],
  [40, 236],
  [70, 220],
  [110, 226],
  [142, 220],
  [170, 230],
  [198, 254],
  [218, 290],
  [230, 336, 1],
])
/** The cloak over the far shoulder, falling behind. */
const CLOAK = spline([
  [-14, 336, 1],
  [-10, 290],
  [8, 252],
  [36, 228],
  [70, 216],
  [84, 222, 1],
  [70, 260],
  [60, 300],
  [58, 336, 1],
])
const RUFF = ruffBand(60, 150, 196, 222, 6.5, 0.06)

// ── The hand and the visor ──────────────────────────────────────────────────
// "I will assume thy part in some disguise": the back of his hand, the
// fingers up and apart behind the visor's edge, the thumb in front of it.
const HAND_AT: Pt = [184, 306]
const HAND_ROT = -4
const HAND_S = 1.12
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
const FINGERS: Digit[] = [
  { from: [17, -36], to: [24, -60], w: 7.6 },
  { from: [9.5, -40], to: [13, -72], w: 8.2 },
  { from: [1, -42], to: [1, -76], w: 8.6 },
  { from: [-8, -40], to: [-12, -70], w: 8.2 },
]
const THUMB: Digit[] = [{ from: [-12, -14], to: [-10, -44], w: 9.4 }]
const HAND_LINES =
  'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 11 -34' +
  'M-13.5 -66L-11 -67M-0.5 -72L2.5 -72M12 -68L15 -68.5M22.5 -56.5L25 -57'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The visor, face on, in the hand's frame: a half-mask with two eyeholes. */
const VISOR = spline([
  [-34, -50],
  [-18, -60],
  [2, -62],
  [22, -60],
  [38, -50],
  [40, -38],
  [30, -28],
  [14, -30],
  [4, -40, 1],
  [-6, -30],
  [-22, -28],
  [-32, -36],
])
const VISOR_EYES =
  'M-24 -46Q-15 -53 -6 -46Q-15 -40 -24 -46Z' + 'M12 -46Q21 -53 30 -46Q21 -40 12 -46Z'
const VISOR_TIES = ribbon(
  [
    [-34, -46],
    [-44, -40],
    [-50, -28],
    [-52, -12],
  ],
  4.5,
  0.4,
)
const SLEEVE = spline([
  [150, 340, 1],
  [160, 318],
  [172, 300],
  [176, 296, 1],
  [204, 300, 1],
  [204, 318],
  [200, 340, 1],
])

type Marks = { hair: string; brocade: string; cloak: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  let hair = ''
  for (let i = 0; i < 10; i++) {
    const t = (i + 0.5) / 10
    const pts: Pt[] = []
    const x0 = 132 - t * 70
    const y0 = 40 + t * 12
    const x1 = 96 - t * 40
    const y1 = 108 + t * 50
    for (let k = 0; k <= 6; k++) {
      const u = k / 6
      pts.push([x0 + (x1 - x0) * u - Math.sin(Math.PI * u) * 8, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 1, 1.5), 0.8)
  }

  // "too costly to wear every day": the doublet worked all over in a small
  // cut pattern, a lozenge in each square.
  let brocade = ''
  for (let y = 240; y < 336; y += 11) {
    const off = ((y - 240) / 11) % 2 === 0 ? 0 : 6
    for (let x = 84 + off; x < 222; x += 12) {
      if (Math.abs(x - 181) < 12) continue
      brocade += `M${n(x)} ${n(y - 3)}L${n(x + 2.6)} ${n(y)}L${n(x)} ${n(y + 3)}L${n(x - 2.6)} ${n(y)}Z`
    }
  }
  // and the guards: two bands of trim down the front, either side of the buttons
  brocade += gouge(166, 234, 174, 336, 2.4, -1) + gouge(186, 236, 192, 336, 2.4, -1)

  // The cloak's border, cut in paper, and a fold or two.
  let cloak = gouge(72, 222, 60, 336, 3.2, 1.5)
  cloak += gouge(30, 250, 12, 330, 1.6, 2) + gouge(48, 244, 38, 332, 1.4, 1)

  const m = { hair, brocade, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Don Pedro holding up his visor, facing right in the 0..240 by 0..332 frame. */
export function DonPedroFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const bodyClip = `${uid}-dp-body-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={bodyClip}>
          <path d={DON_PEDRO_BODY} />
        </clipPath>
      </defs>
      <path d={DON_PEDRO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${bodyClip})`}>
        <path d={m.brocade} fill={PAPER} />
      </g>
      <path
        d="M172 232C177 262 180 296 182 336"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <Buttons
        pts={[
          [177, 246],
          [179.5, 264],
        ]}
      />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <path d={DON_PEDRO_HEAD} fill={PAPER} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={CIRCLET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril; "we are the only love-gods": the mouth's corner lifted */}
        <path d="M174.5 129C170.5 126 170.5 121 176 120" strokeWidth={1.4} />
        <path d="M167.5 146.5Q162 148 158 144.5" strokeWidth={1.8} />
        <path d="M158 144.5Q156 141 157 137.5" strokeWidth={1} />
        <path d="M168 154.5C165.5 155.7 163 155.9 161 155.3" strokeWidth={1} />
        <path d="M169 172C165 175 165 180 168 183" strokeWidth={LINE.hairline} />
        {/* a level brow, the eye creased with the smile */}
        <path d="M145 87Q155 83.5 165 87.5" strokeWidth={2.6} />
        <path d="M147 99Q154.5 94.5 162.5 98.5" strokeWidth={2.2} />
        <path d="M148.5 103.5Q155 106 161 102.5" strokeWidth={1.2} />
        <path d="M145 101L139 99M145 104L139.5 106" strokeWidth={0.9} />
      </g>
      <circle cx={155.6} cy={100.4} r={2.7} fill={INK} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      {/* the sleeve, the hand behind the visor, the visor, and the thumb in front */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <Hand transform={HAND_T} palm={PALM} digits={FINGERS} lines={HAND_LINES} halo={3.4} />
      <g transform={`${HAND_T} translate(0 16) scale(1.3 1.15)`}>
        <path d={VISOR_TIES} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
        <path d={VISOR} fill={INK} stroke={INK} strokeWidth={4} strokeLinejoin="round" />
        <path d={VISOR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={VISOR_EYES} fill={INK} />
        <path
          d="M-30 -50Q-15 -57 0 -55M8 -55Q22 -57 34 -50"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
      </g>
      <Hand transform={HAND_T} palm="" digits={THUMB} lines="M-11.5 -40L-9 -41.5" halo={3} />
    </g>
  )
}

/** A thick ink halo round head, shoulders, arm and visor. */
export function DonPedroKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={DON_PEDRO_HEAD} />
      <path d={DON_PEDRO_BODY} />
      <path d={CLOAK} />
      <path d={SLEEVE} />
      <path d={VISOR} transform={`${HAND_T} translate(0 16) scale(1.3 1.15)`} />
    </g>
  )
}

const P = placing(30, 0, 0.98, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The hall on the night of the revels, torchlit ahead of him.
  ground = portraitGround('don-pedro', 3501, (x, y) =>
    clamp(0.08 + ((PW - x - 30) / 280) * 0.9 - (y / PH) * 0.14),
  )
  return ground
}

function DonPedroPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <DonPedroKnockout />
        <DonPedroFigure uid={uid} seed={3501} />
      </g>
      <PortraitRule />
    </>
  )
}

export const donPedroPortrait: LinocutArt = { width: PW, height: PH, Draw: DonPedroPortrait }

const VISOR_AT = P.to(...inHand(-19.5, -37))
const DOUBLET_AT = P.to(120, 290)
const MOUTH_AT = P.to(159, 145)

export const donPedro: Portrait = {
  name: 'Don Pedro',
  art: donPedroPortrait,
  alt: 'A linocut portrait of Don Pedro, the Prince, in profile, facing left: a clean-shaven man with short dark hair and a plain pale circlet with three low points on his brow. He is smiling, the corner of his mouth lifted and his eye creased. He wears a small white ruff, a dark doublet worked all over in a small pattern of lozenges, and a cloak over one shoulder. In front of him he holds up a pale half-mask with two eyeholes, its ties hanging, his fingers apart above its edge and his thumb in front of it. Three numbered red markers point to the mask, his patterned doublet and his smile.',
  describedBy: [
    {
      phrase: 'I will assume thy part in some disguise',
      at: [VISOR_AT[0] - 14, VISOR_AT[1] - 66],
      to: VISOR_AT,
    },
    {
      phrase: 'your Grace is too costly to wear every day',
      at: [DOUBLET_AT[0] + 60, DOUBLET_AT[1] - 16],
      to: DOUBLET_AT,
    },
    { phrase: 'we are the only love-gods', at: [MOUTH_AT[0] - 66, MOUTH_AT[1] + 22], to: MOUTH_AT },
  ],
  where: 'Act 1, Scene 1; Act 2, Scene 1',
  note: 'The Prince arranges other people’s love: he woos Hero in disguise for Claudio, then plots to make Beatrice and Benedick fall for each other. When Beatrice turns down his half-serious offer of marriage, she does it with a joke about how rich he is.',
  artNote:
    'The play never describes his looks. He wears the plain circlet the panels give him, so he can be known as the Prince, and otherwise the plain dress of a nobleman of the time.',
}

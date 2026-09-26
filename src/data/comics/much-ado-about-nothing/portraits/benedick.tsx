import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  ear,
  folds,
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
 * Benedick in Act 3, Scene 2, the morning after he has overheard that
 * Beatrice loves him, when his friends find him changed and read the signs
 * aloud:
 *
 *   DON PEDRO: "The greatest note of it is his melancholy."
 *   CLAUDIO: "the barber's man hath been seen with him; and the old ornament
 *   of his cheek hath already stuffed tennis balls."
 *   LEONATO: "Indeed he looks younger than he did, by the loss of a beard."
 *
 * and Benedick, to explain why he is "sadder", says only: "I have the
 * tooth-ache."
 *
 * So: the same man as in the panels (../panels/people.tsx), a soldier with
 * short dark hair swept back from the brow, now with his chin and cheek bare,
 * as the panels draw him from this scene on. His brows are lifted in the
 * middle and his eye is lowered, sighing; and he holds his jaw below the ear
 * with an open hand, the fingers apart, as a man with a toothache does.
 *
 * Claudio also notices that "a' brushes his hat a mornings", and Don Pedro
 * that "a' rubs himself with civet". Neither is drawn: a print cannot show a
 * smell, and the panels draw him bareheaded, while a tall hat is the mark by
 * which the panels know Don John (a first cut of this portrait gave Benedick
 * one, and it had to go). His falling band and doublet are the plain dress of
 * the time. There is no red in this plate. He faces left, towards Beatrice's
 * portrait, so the figure is drawn facing right and flipped.
 */

/** A man's head, the jaw bare, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [66, 228],
  [60, 200],
  [51, 174],
  [43, 146],
  [43, 108],
  [55, 72],
  [79, 47],
  [111, 34],
  [142, 36],
  [160, 50],
  [167, 70],
  [171, 89],
  [167.5, 99, 1],
  [175, 112],
  [184, 127],
  [182.5, 132.5],
  [173, 135.5, 1],
  [174.5, 142],
  [169, 147, 1],
  [172.5, 151],
  [169, 156.5],
  [167, 161, 1],
  [172.5, 170],
  [172, 183],
  [160, 190],
  [143, 193],
  [135, 200],
  [133, 214],
  [135, 228],
]
export const BENEDICK_HEAD = spline(HEAD_PTS)

/** Short dark hair, swept back from the brow over the crown to the nape. */
const HAIR = spline([
  [158, 50, 1],
  [146, 50],
  [130, 58],
  [120, 74],
  [114, 96, 1],
  [102, 100],
  [93, 112],
  [89, 138],
  [80, 162],
  [62, 172, 1],
  [46, 150],
  [40, 110],
  [46, 72],
  [68, 44],
  [100, 28],
  [134, 28],
  [152, 38],
])
const EAR = ear(104, 124)

export const BENEDICK_BODY = spline([
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
/** A falling band: plain linen turned down over the doublet's collar. */
const BAND_COLLAR = spline([
  [58, 212, 1],
  [100, 222],
  [146, 214, 1],
  [170, 230],
  [182, 250, 1],
  [148, 250],
  [104, 244],
  [62, 238],
  [40, 240, 1],
])
const COLLAR = spline([
  [64, 196, 1],
  [102, 206],
  [142, 202, 1],
  [146, 218],
  [104, 226],
  [62, 218, 1],
])

// ── The hand at his jaw ────────────────────────────────────────────────────
// "I have the tooth-ache": the back of his hand, the palm on the jaw below
// the ear, the fingers up and apart along the cheek. Wrist at the origin.
const HAND_AT: Pt = [118, 226]
const HAND_ROT = -6
const HAND_S = 1.08
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
  { from: [17, -36], to: [22, -58], w: 7.6 },
  { from: [9.5, -40], to: [12, -69], w: 8.2 },
  { from: [1, -42], to: [0.5, -73], w: 8.6 },
  { from: [-8, -40], to: [-12, -66], w: 8.2 },
  { from: [-13, -12], to: [-26, -33], w: 9.4 },
]
const HAND_LINES =
  'M-4 -8Q-6 -22 -8 -34M3 -8Q2 -24 1 -36M9 -8Q10 -22 11 -34' +
  'M-13 -62L-10.5 -63M-1 -69L2 -69M11 -65L14 -65.5M20 -54.5L22.5 -55'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`
/** The forearm in its sleeve, from the foot of the plate up to the wrist. */
const SLEEVE = spline([
  [82, 340, 1],
  [92, 300],
  [100, 262],
  [104, 228, 1],
  [140, 224, 1],
  [140, 262],
  [140, 300],
  [146, 340, 1],
])

type Marks = { hair: string; back: string; body: string; sleeve: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Short hair swept back from the brow over the crown and round behind the
  // ear: clean paper strands, spaced so they read as hair and not a smudge.
  let hair = ''
  for (let i = 0; i < 12; i++) {
    const t = (i + 0.5) / 12
    const pts: Pt[] = []
    const x0 = 150 - t * 90
    const y0 = 40 + t * 18
    const x1 = 100 - t * 48
    const y1 = 96 + t * 60
    for (let k = 0; k <= 6; k++) {
      const u = k / 6
      pts.push([x0 + (x1 - x0) * u - Math.sin(Math.PI * u) * 9, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 1, 1.5), 0.8)
  }

  let back = ''
  for (let y = 180; y < 212; y += 3.8)
    back += gouge(96, y, 116 + (212 - y) * 0.3, y - between(r, 1, 2.5), between(r, 0.4, 0.7))

  const body = folds(seed + 1, [150, 214], [258, 276], 5)

  let sleeve = ''
  for (let i = 0; i < 4; i++) {
    const x = 106 + i * 9 + between(r, -2, 2)
    sleeve += gouge(x, 244 + between(r, 0, 12), x - 4 + between(r, -2, 2), 336, 0.9, 0.8)
  }

  const m = { hair, back, body, sleeve }
  marksBySeed.set(seed, m)
  return m
}

/** Benedick holding his jaw, facing right in the 0..240 by 0..332 frame. */
export function BenedickFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-bn-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={BENEDICK_HEAD} />
        </clipPath>
      </defs>
      <path d={BENEDICK_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons
        pts={[
          [186, 262],
          [192, 280],
          [197, 298],
        ]}
      />
      <path d={BENEDICK_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill={INK} />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril, the mouth drawn down a little, the bare chin and jaw */}
        <path d="M176.5 130C172.5 127 172.5 122 178 121" strokeWidth={1.4} />
        <path d="M169 147L160.5 148.5" strokeWidth={1.8} />
        <path d="M160.5 148.5Q158.5 150 158 152.5" strokeWidth={1.1} />
        <path d="M169.5 155C167 156.2 164.5 156.4 162.5 155.8" strokeWidth={1} />
        <path d="M170 174C166 177 166 182 169 185" strokeWidth={LINE.hairline} />
        <path d="M160 190C150 186 144 178 142 168" strokeWidth={LINE.hairline} />
        {/* the brow lifted in the middle, and the eye lowered: his melancholy */}
        <path d="M146 86Q150 80 156 81Q162 83 167 90" strokeWidth={2.6} />
        <path d="M148 99Q155 101.5 163 98" strokeWidth={2.3} />
        <path d="M149 103.5Q155.5 105.5 161.5 103" strokeWidth={1} />
        <path d="M150 71Q156 69 162 72" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={156.5} cy={101.6} r={2.3} fill={INK} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={BAND_COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sleeve} fill={PAPER} />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={HAND_LINES} halo={3.4} />
    </g>
  )
}

/** A thick ink halo round head, hair, shoulders and arm. */
export function BenedickKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={BENEDICK_HEAD} />
      <path d={HAIR} />
      <path d={BENEDICK_BODY} />
      <path d={SLEEVE} />
    </g>
  )
}

const P = placing(28, 6, 0.98, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A room in Leonato's house by day; the light ahead of him, on the left.
  ground = portraitGround('benedick', 3401, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function BenedickPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <BenedickKnockout />
        <BenedickFigure uid={uid} seed={3401} />
      </g>
      <PortraitRule />
    </>
  )
}

export const benedickPortrait: LinocutArt = { width: PW, height: PH, Draw: BenedickPortrait }

const EYE_AT = P.to(156, 101)
const CHEEK_AT = P.to(164, 176)
const HAND_MARK = P.to(...inHand(1, -44))

export const benedick: Portrait = {
  name: 'Benedick',
  art: benedickPortrait,
  alt: 'A linocut portrait of Benedick in profile, facing left: a man with short dark hair swept back from his brow and a bare, freshly shaved chin and jaw. His brows are lifted in the middle and his eye is lowered, sighing. He holds the side of his jaw below the ear with an open hand, the fingers apart, like a man with a toothache. He wears a plain white falling collar over a dark doublet with buttons down the front. Three numbered red markers point to his lowered eye, his bare chin and his hand at his jaw.',
  describedBy: [
    {
      phrase: 'The greatest note of it is his melancholy',
      at: [EYE_AT[0] - 60, EYE_AT[1] - 56],
      to: EYE_AT,
    },
    {
      phrase: 'the old ornament of his cheek hath already stuffed tennis balls',
      at: [CHEEK_AT[0] - 50, CHEEK_AT[1] + 40],
      to: CHEEK_AT,
    },
    { phrase: 'I have the tooth-ache', at: [HAND_MARK[0] + 50, HAND_MARK[1] + 60], to: HAND_MARK },
  ],
  where: 'Act 3, Scene 2',
  note: 'His friends read the signs of love on him like evidence: a sigh, a brushed hat, a beard shaved off to stuff tennis balls, a sudden toothache. Benedick, who mocked Claudio for changing, now gives himself away.',
  artNote:
    'Until this scene the panels give him a short dark beard, and from here on they draw him shaved, as he is here. His hat and the civet he wears are left to the words; his dress is the plain dress of the time.',
}

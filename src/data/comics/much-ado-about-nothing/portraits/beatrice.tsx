import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
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
  folds,
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
 * Beatrice, from three things the play says of her face:
 *
 * - Hero, in the orchard, knowing Beatrice is hidden and listening (3.1):
 *   "Disdain and scorn ride sparkling in her eyes". So the eye is bright, the
 *   lid a little lowered, the brow lifted at its outer end, and a glint of
 *   paper is left in the pupil.
 * - Beatrice herself, of her chances of a husband (2.1): "Thus goes everyone
 *   to the world but I, and I am sunburnt." To Shakespeare's audience that
 *   meant browned by the sun, when pale skin was the fashion. The print has
 *   no brown, so its one colour warms her cheekbone in one flat oval (an
 *   earlier cut shaded it with ink hatching, which read at panel size as a
 *   smudge or a bruise, not as skin).
 * - Benedick, who cannot bear to stay in the room with her (2.1): "I cannot
 *   endure my Lady Tongue." So the corner of her mouth is turned up: she is
 *   in the middle of a jest.
 *
 * Nothing else is described. Her hair, dressed up under a caul, the small
 * ruff and the bodice are the plain dress of a gentlewoman of the time (see
 * ./common.tsx). Her chin is lifted a little.
 */

/** A young woman's head, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [74, 236],
  [66, 210],
  [56, 180],
  [47, 146],
  [47, 108],
  [59, 72],
  [83, 48],
  [113, 37],
  [141, 39],
  [158, 53],
  [164, 72],
  [167, 88],
  [164.5, 96, 1],
  [171, 108],
  [179, 120],
  [178, 125.5],
  [169.5, 128.5, 1],
  [171.5, 134.5],
  [167, 139, 1],
  [165, 140.5, 1],
  [169, 144],
  [166, 150, 1],
  [170, 158],
  [168.5, 169],
  [158, 176],
  [142, 180],
  [134, 188],
  [130, 206],
  [132, 236],
]
export const BEATRICE_HEAD = spline(HEAD_PTS)

/** Her head is lifted a little, the chin up. */
const LIFT = 'rotate(-5 110 200)'

/**
 * Dark hair, drawn back from the brow over the crown and up from the nape,
 * above and behind the ear.
 */
const HAIR = spline([
  [161, 56, 1],
  [150, 50],
  [134, 52],
  [122, 62],
  [113, 80],
  [108, 100, 1],
  [96, 106],
  [88, 128],
  [82, 154],
  [72, 178, 1],
  [58, 176],
  [48, 146],
  [44, 104],
  [54, 68],
  [82, 42],
  [118, 30],
  [146, 38],
])
/** The knot of hair at the back of the head, in its caul: a net of fine cord. */
const KNOT = { cx: 46, cy: 98, rx: 25, ry: 28 }
const CAUL = spline([
  [KNOT.cx, KNOT.cy - KNOT.ry],
  [KNOT.cx + KNOT.rx * 0.8, KNOT.cy - KNOT.ry * 0.62],
  [KNOT.cx + KNOT.rx, KNOT.cy + 4],
  [KNOT.cx + KNOT.rx * 0.7, KNOT.cy + KNOT.ry * 0.74],
  [KNOT.cx, KNOT.cy + KNOT.ry],
  [KNOT.cx - KNOT.rx * 0.72, KNOT.cy + KNOT.ry * 0.7],
  [KNOT.cx - KNOT.rx, KNOT.cy],
  [KNOT.cx - KNOT.rx * 0.72, KNOT.cy - KNOT.ry * 0.7],
])
const EAR = spline([
  [110, 108],
  [100, 106],
  [94, 114],
  [93, 126],
  [96, 138],
  [104, 144],
  [110, 140],
  [112, 130],
  [112, 118],
])

/** Her shoulders in a fitted bodice. */
export const BEATRICE_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [14, 258],
  [48, 236],
  [80, 225],
  [112, 228],
  [140, 223],
  [168, 236],
  [194, 262],
  [210, 298],
  [218, 336, 1],
])
/** The pale stomacher down the front of the bodice, to a point. */
const STOMACHER = spline([
  [128, 228, 1],
  [162, 234, 1],
  [176, 290],
  [182, 336, 1],
  [136, 336, 1],
  [134, 290],
])
const RUFF = ruffBand(66, 150, 209, 233, 6, 0.05)

type Marks = {
  hair: string
  caul: string
  neck: string
  body: string
  stomacher: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Hair combed back from the brow in long paper strands towards the knot,
  // and up from the nape.
  let hair = ''
  for (let i = 0; i < 16; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 16
    const pts: Pt[] = []
    const x0 = 156 - t * 34 + between(r, -2, 2)
    const y0 = 52 + t * 12
    const x1 = 74 - t * 4 + between(r, -3, 3)
    const y1 = 70 + t * 34
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([x0 + (x1 - x0) * u, y0 + (y1 - y0) * u - Math.sin(Math.PI * u) * (12 - t * 8)])
    }
    hair += ribbon(pts, between(r, 0.8, 1.4), 0.8)
  }
  for (let i = 0; i < 7; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 7
    hair += ribbon(
      [
        [84 - t * 20, 168 - t * 4],
        [82 - t * 22, 150 - t * 6],
        [72 - t * 16, 132 - t * 2],
      ],
      between(r, 0.8, 1.2),
      0.8,
    )
  }

  // The caul's net: two sets of fine cords crossing over the knot.
  let caul = ''
  const { cx, cy, rx, ry } = KNOT
  for (let k = -5; k <= 5; k++) {
    caul += `M${n(cx - rx + k * 7)} ${n(cy - ry - 4)}L${n(cx + rx + k * 7)} ${n(cy + ry + 4)}`
    caul += `M${n(cx + rx + k * 7)} ${n(cy - ry - 4)}L${n(cx - rx + k * 7)} ${n(cy + ry + 4)}`
  }

  // The shadow under the jaw, on the side of the neck.
  let neck = ''
  for (let y = 180; y < 212; y += 3.6)
    neck += gouge(104, y, 118 + (212 - y) * 0.4, y - between(r, 1, 2.5), between(r, 0.4, 0.7))

  const body = folds(seed + 1, [10, 120], [262, 280], 7)

  // The stomacher, worked in a lattice of fine cut lines.
  let stomacher = ''
  for (let k = -8; k <= 8; k++) {
    stomacher += `M${n(150 + k * 9)} 236L${n(210 + k * 9)} 340`
    stomacher += `M${n(150 + k * 9)} 236L${n(90 + k * 9)} 340`
  }

  const m = { hair, caul, neck, body, stomacher }
  marksBySeed.set(seed, m)
  return m
}

/** Beatrice, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function BeatriceFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-bea-head-${seed}`
  const caulClip = `${uid}-bea-caul-${seed}`
  const stomClip = `${uid}-bea-stom-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={BEATRICE_HEAD} />
        </clipPath>
        <clipPath id={caulClip}>
          <path d={CAUL} />
        </clipPath>
        <clipPath id={stomClip}>
          <path d={STOMACHER} />
        </clipPath>
      </defs>
      <path d={BEATRICE_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={STOMACHER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${stomClip})`}>
        <path d={m.stomacher} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <g transform={LIFT}>
        <path d={BEATRICE_HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.neck} fill={INK} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={CAUL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${caulClip})`}>
          <path d={m.caul} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
        </g>
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <path
          d="M107 114C100 116 99 124 101 131C102 135 105 137 107 134"
          fill="none"
          stroke={INK}
          strokeWidth={1.5}
        />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* nostril */}
          <path d="M172.5 123C169 121 169 117 173 116" strokeWidth={1.3} />
          {/* "my Lady Tongue": mid-jest, the corner of the mouth turned up */}
          <path d="M169.5 134.5Q166 137 162.5 135.5" strokeWidth={1.7} />
          <path d="M167.5 142.5Q165 143.5 163 142.5" strokeWidth={1} />
          <path d="M162.5 135.5Q160 133 160.5 130" strokeWidth={1.1} />
          {/* the brow lifted at its outer end, in scorn */}
          <path d="M143 83Q150 77 158 78.5Q162 79.5 164 83" strokeWidth={2.2} />
          {/* the lid a little lowered, the eye bright under it */}
          <path d="M145 94Q152 89.5 161 93.5" strokeWidth={2.3} />
          <path d="M146.5 100.5Q153 102.5 159.5 99" strokeWidth={1.1} />
          <path d="M161 93.5L164.5 91.5M160 95L163.5 94.5" strokeWidth={1} />
        </g>
        {/*
          "I am sunburnt": one flat oval of the spot colour on the cheekbone,
          as the second block prints it and as Capulet's cheek is printed.
          Not three strokes (they read as scratches) and not a stipple of dots
          (it read as a spatter); nowhere near the mouth.
        */}
        <ellipse cx={135} cy={121} rx={10} ry={5.5} transform="rotate(-8 135 121)" fill={RED} />
        <circle cx={155} cy={96} r={2.8} fill={INK} />
        {/* "sparkling": a glint of paper left in the eye */}
        <circle cx={156.2} cy={95} r={0.95} fill={PAPER} />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function BeatriceKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={LIFT}>
        <path d={BEATRICE_HEAD} />
        <path d={HAIR} />
        <path d={CAUL} />
      </g>
      <path d={BEATRICE_BODY} />
    </g>
  )
}

const P = placing(30, -8, 1.06)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Day in Leonato's house: the light ahead of her face.
  ground = portraitGround('beatrice', 3101, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.9 - (y / PH) * 0.12),
  )
  return ground
}

function BeatricePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <BeatriceKnockout />
        <BeatriceFigure uid={uid} seed={3101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const beatricePortrait: LinocutArt = { width: PW, height: PH, Draw: BeatricePortrait }

/** A point on the lifted head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = deg(-5)
  const dx = x - 110
  const dy = y - 200
  return P.to(110 + dx * Math.cos(a) - dy * Math.sin(a), 200 + dx * Math.sin(a) + dy * Math.cos(a))
}
const EYE_AT = onHead(155, 96)
const CHEEK_AT = onHead(134, 124)
const MOUTH_AT = onHead(166, 139)

export const beatrice: Portrait = {
  name: 'Beatrice',
  art: beatricePortrait,
  alt: 'A linocut portrait of Beatrice in profile, facing right, her chin lifted a little: a young woman with dark hair drawn back from her brow and gathered in a knot under a net caul, a small white ruff at her neck, and a dark bodice with a pale stomacher worked in a lattice. Her brow is raised at its outer end and her eye is bright under a half-lowered lid, with a glint of light in it. Her cheekbone is printed with a flat oval of red. The corner of her mouth is turned up, as if she is in the middle of a jest. Three numbered red markers point to her eye, her red cheek and her mouth.',
  describedBy: [
    {
      phrase: 'Disdain and scorn ride sparkling in her eyes',
      at: [EYE_AT[0] + 36, EYE_AT[1] - 58],
      to: EYE_AT,
    },
    { phrase: 'I am sunburnt', at: [CHEEK_AT[0] - 30, CHEEK_AT[1] + 70], to: CHEEK_AT },
    { phrase: 'my Lady Tongue', at: [MOUTH_AT[0] + 58, MOUTH_AT[1] + 30], to: MOUTH_AT },
  ],
  where: 'Act 2, Scene 1; Act 3, Scene 1',
  note: 'Everything said about Beatrice’s face is about her wit: her eyes flash with scorn, and Benedick names her after her tongue. The one thing she says of her own looks is a joke against herself.',
  artNote:
    'Sunburnt meant browned by the sun, and out of fashion when pale skin was prized. The print has no brown, so its one colour warms her cheek and the rest is left to the words. Her hair and dress are the plain dress of a gentlewoman of the time, since the play describes neither.',
}

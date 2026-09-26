import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { Buttons, PH, placing, portraitGround, PortraitRule, PW, spline, type SP } from './common'

/**
 * Paris, the young count Capulet chooses for Juliet. The play gives no
 * description of him from his own mouth or Romeo's, only the praise of the
 * people pressing him on her:
 *
 * - The Nurse, 1.3: "why he's a man of wax", as perfect as a wax model.
 * - The Nurse again, 3.5: "An eagle, madam, Hath not so green, so quick, so
 *   fair an eye As Paris hath."
 * - Capulet, 3.5: "youthful, and nobly allied, ... Proportion'd as one's
 *   thought would wish a man".
 *
 * So: a young man with a smooth, regular face and a bright, quick eye, well
 * made, and dressed as a nobleman. He is beardless, in a flat bonnet worn
 * tilted with its band cut in paper, and a short cloak, as the panels draw
 * him (../panels/acts-3-4-kit.tsx). The print cannot show that his eye is
 * green, so the colour is left to the words. There is no red in this plate,
 * and nothing of the tomb in 5.3.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 */

/** The head, young, smooth and regular, facing right in a 0..240 by 0..332 frame. */
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
  [170, 88],
  [167, 97, 1],
  [174, 110],
  [182.5, 125],
  [181, 130.5],
  [172, 134, 1],
  [173.5, 141],
  [168, 146, 1],
  [171, 150.5],
  [166.5, 156, 1],
  [170.5, 165],
  [169, 177],
  [158, 185],
  [142, 189],
  [134, 196],
  [132, 212],
  [134, 226],
]
export const PARIS_HEAD = spline(HEAD_PTS)

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
/** The bonnet: a soft flat crown worn tilted back from the brow, and its band. */
const CAP = spline([
  [166, 48, 1],
  [172, 34],
  [160, 20],
  [130, 12],
  [94, 12],
  [62, 20],
  [40, 34],
  [36, 50],
  [48, 60, 1],
  [90, 60],
  [134, 54],
])
const CAP_BAND = spline([
  [48, 58, 1],
  [90, 58],
  [134, 52],
  [166, 46, 1],
  [166, 55, 1],
  [134, 62],
  [90, 68],
  [52, 68, 1],
])
const CAP_T = 'translate(4 8) rotate(-4 100 40)'
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

/** The doublet: broad, well-made shoulders. */
export const PARIS_BODY = spline([
  [-12, 336, 1],
  [-8, 290],
  [8, 256],
  [40, 234],
  [70, 222],
  [110, 228],
  [140, 222],
  [170, 232],
  [200, 256],
  [220, 292],
  [230, 336, 1],
])
/** The short cloak, thrown over the far shoulder and hanging down his back. */
const CLOAK = spline([
  [-12, 336, 1],
  [-8, 290],
  [6, 254],
  [34, 232],
  [66, 220, 1],
  [80, 234],
  [86, 270],
  [96, 336, 1],
])
const COLLAR = spline([
  [62, 194, 1],
  [100, 202],
  [138, 200, 1],
  [141, 214],
  [104, 222],
  [62, 214, 1],
])

type Marks = { hair: string; back: string; cap: string; band: string; cloak: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  let hair = ''
  for (let i = 0; i < 26; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 26
    hair += gouge(
      120 - t * 38 + between(r, -2, 2),
      70 + t * 40,
      58 + t * 20 + between(r, -3, 3),
      100 + t * 90,
      between(r, 0.6, 1),
      between(r, -6, -2),
    )
  }
  let back = ''
  for (let rad = 56; rad < 118; rad += 3.8)
    back += arcDashes(r, 152, 124, rad, deg(114), deg(170), [8, 22], [2, 6])

  // The soft crown, in folds, and the band round it cut in paper.
  let cap = ''
  for (let i = 0; i < 6; i++) {
    const x = 56 + i * 18 + between(r, -4, 4)
    cap += gouge(
      x,
      54 - between(r, 0, 4),
      x + 12 + between(r, -3, 3),
      20 + between(r, 0, 6),
      between(r, 0.6, 1),
      1.5,
    )
  }
  let band = ''
  for (let x = 54; x < 162; x += 9)
    band += gouge(x, 63 - (x - 54) * 0.07, x + 6, 62 - (x - 48) * 0.07, 0.9)

  // The folds of the cloak, and the doublet's seams.
  let cloak = ''
  for (let i = 0; i < 5; i++) {
    const x = 10 + i * 16 + between(r, -3, 3)
    cloak += gouge(x + 12, 236 + i * 3, x - 6 + i * 3, 334, between(r, 1.2, 2), 2)
  }
  let body = ''
  body += gouge(196, 280, 216, 330, 1.4, -1)
  for (let i = 0; i < 5; i++) {
    const x = between(r, 110, 170)
    body += gouge(x, between(r, 250, 270), x + between(r, -6, 6), 334, between(r, 0.7, 1.1), 1)
  }

  const m = { hair, back, cap, band, cloak, body }
  marksBySeed.set(seed, m)
  return m
}

/** A narrow falling band, its edge scalloped with lace. */
function laceBand(): string {
  let d = 'M56 208L100 216L142 211L160 222'
  for (let x = 160; x > 40; x -= 8) {
    const y = 232 - Math.abs(x - 110) * 0.05 + (x < 70 ? (70 - x) * 0.1 : 0)
    d += `Q${n(x - 4)} ${n(y + 6)} ${n(x - 8)} ${n(y)}`
  }
  return d + 'Z'
}
const BAND = laceBand()

/** Paris, head and shoulders, in the 0..240 by 0..332 frame. */
export function ParisFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-pa-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={PARIS_HEAD} />
        </clipPath>
      </defs>
      <path d={PARIS_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <g transform={CAP_T}>
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.cap} fill={PAPER} />
        <path d={CAP_BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.band} fill={PAPER} />
      </g>
      <path d={PARIS_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons
        pts={[
          [178, 244],
          [189, 259],
          [198, 275],
          [206, 292],
          [212, 310],
        ]}
      />
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M106 114C99 116 97 124 99 132C100 136 103 138 106 135" strokeWidth={1.6} />
        {/* nostril, the lips in the beginning of a smile, the chin */}
        <path d="M174.5 128C170.5 125 170.5 120 176 119" strokeWidth={1.4} />
        <path d="M168 146L160 146.5L158 144.5" strokeWidth={1.8} />
        <path d="M169 152C166.5 153 164 153 162 152" strokeWidth={1} />
        <path d="M166 167C162 170 162 175 166 178" strokeWidth={LINE.hairline} />
        <path d="M167 183C150 189 132 187 120 175C115 167 112 158 110 150" strokeWidth={1.8} />
        {/* "so quick, so fair an eye": an arched brow and a wide, bright eye */}
        <path d="M145 86Q155 81 166 86.5" strokeWidth={2.8} />
        <path d="M147 98Q155 92.5 163.5 98" strokeWidth={2.2} />
        <path d="M148.5 104Q155.5 106 162 102" strokeWidth={1.1} />
      </g>
      <circle cx={156.2} cy={99.4} r={3.2} fill={INK} />
      <circle cx={157.4} cy={98.2} r={1} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round head, bonnet and shoulders. */
export function ParisKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={PARIS_HEAD} />
      <path d={CAP} transform={CAP_T} />
      <path d={PARIS_BODY} />
    </g>
  )
}

const P = placing(36, -2, 1.02, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Daylight ahead of him, on the left.
  ground = portraitGround('paris', 2601, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.85 - (y / PH) * 0.1),
  )
  return ground
}

function ParisPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <ParisKnockout />
        <ParisFigure uid={uid} seed={2601} />
      </g>
      <PortraitRule />
    </>
  )
}

export const parisPortrait: LinocutArt = { width: PW, height: PH, Draw: ParisPortrait }

const EYE_AT = P.to(156, 99)
const FACE_AT = P.to(152, 132)
const SHOULDER_AT = P.to(176, 262)

export const paris: Portrait = {
  name: 'Paris',
  art: parisPortrait,
  alt: 'A linocut portrait of Paris in profile, facing left: a young, beardless man with a smooth, regular face and a wide, bright eye under an arched brow, his lips at the start of a smile. He wears a dark flat bonnet tilted on his head, its band cut in white, a dark doublet buttoned down the front, a narrow collar edged with lace and a short cloak over his shoulder. Three numbered red markers point to his eye, his face and his shoulders.',
  describedBy: [
    {
      phrase: 'so green, so quick, so fair an eye',
      at: [EYE_AT[0] - 60, EYE_AT[1] - 60],
      to: EYE_AT,
    },
    { phrase: "he's a man of wax", at: [FACE_AT[0] - 80, FACE_AT[1] + 20], to: FACE_AT },
    {
      phrase: "Proportion'd as one's thought would wish a man",
      at: [SHOULDER_AT[0] - 70, SHOULDER_AT[1] + 20],
      to: SHOULDER_AT,
    },
  ],
  where: 'Act 3, Scene 5; Act 1, Scene 3',
  note: 'Every word of praise for Paris comes from someone pushing him on Juliet: the Nurse, and her father. Juliet herself never says what she thinks of his looks.',
  artNote:
    'The Nurse says his eye is green; the print has no green, so the colour is left to the words. His bonnet and cloak are the plain dress of the time, as the panels draw him.',
}

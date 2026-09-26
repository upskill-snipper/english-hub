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

import { PH, placing, portraitGround, PortraitRule, PW, ruffBand, spline, type SP } from './common'

/**
 * Lady Capulet. The play gives no description of her looks, only two things
 * she says:
 *
 * - To Juliet, of her age: "By my count I was your mother much upon these
 *   years That you are now a maid" (1.3). Juliet is thirteen, so her mother
 *   is not yet thirty: a young woman's face, not an old one.
 * - To Juliet, when she begs her to delay the marriage to Paris: "Talk not to
 *   me, for I'll not speak a word. Do as thou wilt, for I have done with
 *   thee" (3.5). So her lips are pressed shut, her chin is up and her eye is
 *   lowered, and she is turned away.
 *
 * Her dress is the panels' (../panels/acts-3-4-kit.tsx): a dark veil over the
 * crown falling down her back, a jewelled band across it, cut in paper, and a
 * gown with a small ruff, the plain dress of a lady of rank of the time.
 * There is no red in this plate.
 *
 * She faces left, turned away, so the figure is drawn facing right and
 * flipped.
 */

/** The head, a young woman's, the chin lifted, facing right in a 0..240 by 0..332 frame. */
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
  [172, 109],
  [181, 122],
  [179.5, 127],
  [170, 130, 1],
  [171.5, 136],
  [166.5, 139.5, 1],
  [170, 143.5],
  [165, 150, 1],
  [170, 159],
  [168, 170],
  [158, 176],
  [142, 180],
  [134, 188],
  [130, 206],
  [132, 236],
]
export const LADY_CAPULET_HEAD = spline(HEAD_PTS)

/** Dark hair, dressed back from the brow, under the veil. */
const HAIR = spline([
  [160, 54, 1],
  [150, 48],
  [132, 46],
  [118, 54],
  [110, 72],
  [108, 96],
  [100, 104, 1],
  [70, 90],
  [60, 60],
  [90, 36],
  [140, 34],
])
/** The veil: over the crown and falling down her back to the foot of the plate. */
const VEIL = spline([
  [148, 42, 1],
  [138, 30],
  [110, 22],
  [78, 26],
  [52, 44],
  [38, 76],
  [32, 120],
  [30, 170],
  [24, 230],
  [12, 290],
  [4, 336, 1],
  [70, 336, 1],
  [66, 290],
  [70, 240],
  [78, 196],
  [84, 150],
  [90, 110],
  [100, 80],
  [118, 58],
])
const EAR = spline([
  [108, 110],
  [98, 108],
  [92, 116],
  [91, 128],
  [94, 140],
  [102, 146],
  [108, 142],
  [110, 132],
  [110, 120],
])

/** The gown over narrow shoulders. */
export const LADY_CAPULET_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [14, 262],
  [48, 240],
  [80, 230],
  [112, 236],
  [140, 230],
  [168, 242],
  [194, 266],
  [210, 298],
  [218, 336, 1],
])
const RUFF = ruffBand(62, 150, 212, 232, 6)

/** The jewelled band across the veil: a row of stones, cut in paper. */
const BAND_PTS: Pt[] = []
for (let i = 0; i <= 10; i++) {
  const t = i / 10
  BAND_PTS.push([150 - t * 64, 44 - Math.sin(t * Math.PI) * 10 + t * 4])
}

type Marks = { hair: string; veil: string; back: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The hair, drawn back in paper strands.
  let hair = ''
  for (let i = 0; i < 12; i++) {
    const t = (i + 0.5) / 12
    hair += gouge(
      156 - t * 8,
      50 + t * 4,
      110 - t * 10,
      60 + t * 34,
      between(r, 0.5, 0.8),
      between(r, -4, -1),
    )
  }
  // Folds of the veil, falling from the crown, cut in paper.
  let veil = ''
  for (let i = 0; i < 6; i++) {
    const t = (i + 0.5) / 6
    const pts: Pt[] = []
    for (let k = 0; k <= 12; k++) {
      const u = k / 12
      pts.push([120 - t * 40 - u * (60 - t * 20) + Math.sin(u * 5 + i) * 2, 36 + u * 300])
    }
    veil += ribbon(pts, between(r, 1.2, 2.2), 0.7)
  }
  let back = ''
  for (let rad = 50; rad < 110; rad += 3.6)
    back += arcDashes(r, 150, 120, rad, deg(112), deg(170), [8, 20], [2, 6])

  let body = ''
  for (let i = 0; i < 6; i++) {
    const x = between(r, 80, 190)
    body += gouge(x, between(r, 256, 276), x + between(r, -8, 8), 336, between(r, 0.7, 1.2), 1.2)
  }

  const m = { hair, veil, back, body }
  marksBySeed.set(seed, m)
  return m
}

/** Lady Capulet, head and shoulders, in the 0..240 by 0..332 frame. */
export function LadyCapuletFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-lcp-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={LADY_CAPULET_HEAD} />
        </clipPath>
      </defs>
      <path d={LADY_CAPULET_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={LADY_CAPULET_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path
        d="M104 116C98 118 96 126 98 133C99 137 101 139 104 137"
        fill="none"
        stroke={INK}
        strokeWidth={1.5}
      />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={VEIL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.veil} fill={PAPER} />
      {/* the jewelled band across the veil */}
      <path
        d={'M' + BAND_PTS.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')}
        fill="none"
        stroke={INK}
        strokeWidth={7}
        strokeLinecap="round"
      />
      <g fill={PAPER}>
        {BAND_PTS.map(([x, y], i) => (
          <circle key={i} cx={n(x)} cy={n(y)} r={i % 2 ? 1.8 : 2.6} />
        ))}
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* nostril; "I'll not speak a word": the lips pressed together */}
        <path d="M173.5 125C169.5 123 169.5 118.5 173.5 117.5" strokeWidth={1.3} />
        <path d="M166.5 139.5L157 139.5" strokeWidth={2.2} />
        <path d="M157.5 139.5L155 142.5" strokeWidth={1.2} />
        <path d="M168 146C165 148 162 148 160 147" strokeWidth={0.9} />
        {/* a fine brow, and the eye lowered, the lid heavy */}
        <path d="M144 84Q153 80 163 85" strokeWidth={2.1} />
        <path d="M145.5 97Q153 94 161 97.5" strokeWidth={2.4} />
        <path d="M147 101Q154 102.5 160 100" strokeWidth={1} />
      </g>
      <path d="M149 97.6Q154 95.4 159 97.8L158.6 99.6Q154 101 149.6 99.6Z" fill={INK} />
    </g>
  )
}

/** A thick ink halo round head, veil and shoulders. */
export function LadyCapuletKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={LADY_CAPULET_HEAD} />
      <path d={VEIL} />
      <path d={LADY_CAPULET_BODY} />
    </g>
  )
}

const P = placing(26, 0, 1.02, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Early morning in Juliet's room (3.5), the light on the side she turns to.
  ground = portraitGround('lady-capulet', 3001, (x, y) =>
    clamp(0.08 + ((PW - x - 40) / 280) * 0.9 - (y / PH) * 0.12),
  )
  return ground
}

function LadyCapuletPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <LadyCapuletKnockout />
        <LadyCapuletFigure uid={uid} seed={3001} />
      </g>
      <PortraitRule />
    </>
  )
}

export const ladyCapuletPortrait: LinocutArt = {
  width: PW,
  height: PH,
  Draw: LadyCapuletPortrait,
}

const FACE_AT = P.to(150, 118)
const LIPS_AT = P.to(163, 140)

export const ladyCapulet: Portrait = {
  name: 'Lady Capulet',
  art: ladyCapuletPortrait,
  alt: 'A linocut portrait of Lady Capulet in profile, facing left and turned away: a young woman with a composed, cold face, her chin lifted, her eye lowered under a heavy lid and her lips pressed shut. Her dark hair is drawn back under a dark veil that falls down her back, with a band of small jewels across it, and she wears a dark gown with a small pleated ruff. Two numbered red markers point to her young face and her closed lips.',
  describedBy: [
    {
      phrase: 'I was your mother much upon these years',
      at: [FACE_AT[0] - 50, FACE_AT[1] - 80],
      to: FACE_AT,
    },
    {
      phrase: "Talk not to me, for I'll not speak a word",
      at: [LIPS_AT[0] - 70, LIPS_AT[1] + 50],
      to: LIPS_AT,
    },
  ],
  where: 'Act 1, Scene 3; Act 3, Scene 5',
  note: 'She was a mother by Juliet’s age and presses Paris on her daughter as a good match. When Juliet begs her to delay the wedding, she refuses to say another word to her.',
  artNote:
    'The play never describes her; by her own count she is not yet thirty. Her veil, its jewelled band and her gown are the plain dress of a lady of the time, as the panels draw her.',
}

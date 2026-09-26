import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  ear,
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
 * Margaret, Hero's gentlewoman. Nobody describes her face; the play says
 * what she is, and shows what she is like:
 *
 * - Borachio, planning the trick at the window (2.2): "I think I told your
 *   lordship, a year since, how much I am in the favour of Margaret, the
 *   waiting gentlewoman to Hero." So she is dressed as a gentlewoman in a
 *   lady's household: a good bodice with a square neck, a small ruff at the
 *   throat, her hair under a hood.
 * - Herself, when Benedick asks her help to speak with Beatrice (5.2):
 *   "Will you then write me a sonnet in praise of my beauty?"
 * - Benedick, when she has turned his compliment into a joke (5.2): "Thy wit
 *   is as quick as the greyhound's mouth; it catches." So her mouth is
 *   turned up in a smile, and her eye is sidelong and bright, one brow up.
 *
 * Her hood is a French hood, a stiff crescent set back on the head with a
 * dark fall behind, worn by gentlewomen of the time; nobody else in the set
 * wears one, so she is told at a glance from Beatrice (a caul), Hero (a
 * fillet and a plait) and Ursula (a linen coif) in the panels. There is no
 * red in this plate. She faces left, so the figure is drawn facing right and
 * flipped.
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
  [171.5, 108.5],
  [180, 121],
  [178.5, 126.5],
  [170, 129.5, 1],
  [171.5, 135.5],
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
export const MARGARET_HEAD = spline(HEAD_PTS)

/** Dark hair, parted and drawn back smoothly from the brow to the crescent. */
const HAIR = spline([
  [144, 44, 1],
  [154, 49],
  [161, 58, 1],
  [150, 62],
  [136, 67],
  [123, 78],
  [115, 96],
  [111, 114],
  [104, 124, 1],
  [98, 104],
  [98, 82],
  [106, 60],
  [122, 47],
])
/** The hood's crescent: a stiff pale band set back on the head, arched down behind the ear. */
const CRESCENT = spline([
  [146, 31, 1],
  [122, 27],
  [100, 35],
  [86, 55],
  [82, 84],
  [86, 110],
  [94, 130, 1],
  [104, 124, 1],
  [98, 104],
  [98, 82],
  [106, 60],
  [122, 47],
  [144, 44, 1],
])
/** The beads along the crescent's edge, on its middle line. */
const BEAD_LINE: Pt[] = [
  [145, 37.5],
  [133, 35],
  [121, 37],
  [110, 42],
  [101, 51],
  [95, 62],
  [91.5, 74],
  [90.5, 87],
  [91.5, 100],
  [94, 112],
  [98, 123],
]
/** The hood's dark fall, covering the back of the head and falling to the shoulder. */
const FALL = spline([
  [146, 31, 1],
  [128, 18],
  [96, 18],
  [64, 32],
  [44, 62],
  [34, 110],
  [30, 160],
  [26, 214],
  [18, 262, 1],
  [80, 262, 1],
  [82, 214],
  [86, 168],
  [94, 130, 1],
  [86, 110],
  [82, 84],
  [86, 55],
  [100, 35],
  [122, 27],
])
const EAR = ear(108, 136, 0.9)

/** Her shoulders in a fitted bodice with a square neck. */
export const MARGARET_BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [14, 264],
  [48, 244],
  [80, 234],
  [112, 238],
  [140, 232],
  [168, 244],
  [194, 268],
  [210, 298],
  [218, 336, 1],
])
const RUFF = ruffBand(70, 146, 206, 226, 5.5, 0.05)

type Marks = { hair: string; crescent: string; fall: string; body: string; partlet: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // The hair drawn back from the parting: a few paper strands curving from
  // the brow down behind the temple.
  let hair = ''
  for (let i = 0; i < 5; i++) {
    const t = (i + 0.5) / 5
    const pts: Pt[] = []
    for (let k = 0; k <= 6; k++) {
      const u = k / 6
      pts.push([154 - t * 16 - u * (40 - t * 10), 54 + t * 4 + u * (58 - t * 20)])
    }
    hair += ribbon(pts, between(r, 0.8, 1.1), 0.8)
  }

  // The crescent's edge set with small beads, cut in ink on the paper band.
  let crescent = ''
  for (const [x, y] of BEAD_LINE)
    crescent += `M${n(x - 1.8)} ${n(y)}a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0 -3.6 0Z`

  // The fall's soft folds.
  let fall = ''
  for (let i = 0; i < 4; i++) {
    const x = 40 + i * 10 + between(r, -2, 2)
    fall += gouge(x, 90 + i * 6, x - 6 + between(r, -2, 2), 256, between(r, 1, 1.5), 1)
  }

  const body = folds(seed + 1, [20, 70], [262, 278], 4) + folds(seed + 2, [168, 208], [262, 278], 3)

  // The square neck of the bodice, edged with a band of trim cut in paper,
  // over a dark partlet closed to the throat.
  const partlet =
    gouge(84, 240, 88, 270, 2.6, 0.4) +
    gouge(88, 270, 160, 268, 2.6, 1) +
    gouge(160, 268, 154, 238, 2.6, 0.4)

  const m = { hair, crescent, fall, body, partlet }
  marksBySeed.set(seed, m)
  return m
}

/** Margaret, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function MargaretFigure({ seed }: { seed: number }) {
  const m = figureMarks(seed)
  return (
    <g>
      <path d={MARGARET_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={m.partlet} fill={PAPER} />
      <path d={MARGARET_HEAD} fill={PAPER} />
      <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={FALL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.fall} fill={PAPER} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={CRESCENT} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={m.crescent} fill={INK} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M173.5 124C170 122 170 118 174 117" strokeWidth={1.3} />
        {/* "Thy wit is as quick as the greyhound's mouth": a smile, the corner up */}
        <path d="M166.5 139.5Q162 141 158.5 137.5" strokeWidth={1.8} />
        <path d="M158.5 137.5Q157 134.5 158 131.5" strokeWidth={1} />
        <path d="M166 146.5C163.5 147.8 161.5 148 159.5 147.4" strokeWidth={1} />
        {/* one brow up, the eye sidelong and bright */}
        <path d="M143 84Q151 76.5 162 81" strokeWidth={2.2} />
        <path d="M145 94.5Q152.5 89.5 161 94" strokeWidth={2.2} />
        <path d="M146.5 100.5Q153 103 159.5 99.5" strokeWidth={1.1} />
        <path d="M161 94L164.5 92M160 96L163.5 95.5" strokeWidth={1} />
      </g>
      <circle cx={158} cy={96} r={2.6} fill={INK} />
      <circle cx={159} cy={95} r={0.9} fill={PAPER} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hood and shoulders. */
export function MargaretKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MARGARET_HEAD} />
      <path d={FALL} />
      <path d={MARGARET_BODY} />
    </g>
  )
}

const P = placing(26, 4, 1.0, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A room in Leonato's house by day, the light ahead of her.
  ground = portraitGround('margaret', 3901, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function MargaretPortrait(_props: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <MargaretKnockout />
        <MargaretFigure seed={3901} />
      </g>
      <PortraitRule />
    </>
  )
}

export const margaretPortrait: LinocutArt = { width: PW, height: PH, Draw: MargaretPortrait }

const MOUTH_AT = P.to(163, 139)
const PARTLET_AT = P.to(120, 268)
const CHEEK_AT = P.to(138, 124)

export const margaret: Portrait = {
  name: 'Margaret',
  art: margaretPortrait,
  alt: 'A linocut portrait of Margaret in profile, facing left: a young woman with dark hair parted and drawn back under a French hood, a stiff pale crescent edged with small beads set back on her head, with a dark fall hanging behind to her shoulders. One brow is raised, her eye is bright and sidelong, and the corner of her mouth is turned up in a knowing smile. She wears a small white ruff and a dark bodice with a square neck edged in a pale band of trim. Three numbered red markers point to her smile, the neck of her bodice and her cheek.',
  describedBy: [
    {
      phrase: "Thy wit is as quick as the greyhound's mouth",
      at: [MOUTH_AT[0] - 64, MOUTH_AT[1] + 26],
      to: MOUTH_AT,
    },
    {
      phrase: 'the waiting gentlewoman to Hero',
      at: [PARTLET_AT[0] - 70, PARTLET_AT[1] + 8],
      to: PARTLET_AT,
    },
    {
      phrase: 'a sonnet in praise of my beauty',
      at: [CHEEK_AT[0] + 56, CHEEK_AT[1] + 62],
      to: CHEEK_AT,
    },
  ],
  where: 'Act 2, Scene 2; Act 5, Scene 2',
  note: 'Margaret matches Benedick joke for joke. Borachio uses her, without her knowing, to play Hero at the window, and at the end Leonato judges her “in some fault for this, Although against her will”.',
  artNote:
    'The play never describes her looks. Her French hood and dress are the plain dress of a gentlewoman of the time, and set her apart from the other women of the house.',
}

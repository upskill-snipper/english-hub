import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
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
 * Hero, as the two friends see her in Act 1, Scene 1, just after the
 * soldiers arrive. Claudio asks:
 *
 *   "Is she not a modest young lady?"
 *
 * and Benedick, teasing him, answers that she is "too low for a high praise,
 * too brown for a fair praise, and too little for a great praise", and a
 * little later calls her "Hero, Leonato's short daughter".
 *
 * So: a young woman with her eyes lowered and her head bowed a little, as a
 * modest young lady; dark hair, because "fair" in Benedick's mouth means
 * pale and fair-haired and she is not; and small in the block, with more of
 * the cut ground left above her head than any other portrait of the play.
 *
 * Her hair is dressed as the panels dress it (../panels/people.tsx): dark,
 * bound over the crown with a paper fillet and falling behind in one long
 * plait, so she is told from her cousin at a glance (Beatrice wears a
 * netted caul). Her small ruff and laced bodice are the plain dress of a
 * gentlewoman of the time. There is no red in this plate: the words name no
 * colour the print can show.
 *
 * She faces left, as she faces Claudio across the panels, so the figure is
 * drawn facing right and flipped.
 */

/** A young woman's head, small-featured, facing right in a 0..240 by 0..332 frame. */
const HEAD_PTS: SP[] = [
  [76, 236],
  [68, 210],
  [57, 180],
  [48, 146],
  [48, 108],
  [60, 72],
  [84, 48],
  [114, 38],
  [141, 40],
  [157, 54],
  [163, 72],
  [165.5, 89],
  [163, 97, 1],
  [169, 108],
  [176, 119],
  [174.5, 124.5],
  [166.5, 127, 1],
  [168, 133],
  [163.5, 137, 1],
  [166.5, 141],
  [163, 147, 1],
  [166.5, 156],
  [164, 166],
  [153, 173],
  [139, 177],
  [132, 186],
  [129, 206],
  [131, 236],
]
export const HERO_HEAD = spline(HEAD_PTS)

/** Her head is bowed a little: a modest young lady. */
const BOW = 'rotate(5 110 200)'

/** Dark hair, parted and drawn smoothly back from the brow over the ear. */
const HAIR = spline([
  [160, 58, 1],
  [150, 50],
  [134, 50],
  [121, 60],
  [112, 78],
  [108, 100, 1],
  [96, 106],
  [88, 128],
  [84, 150],
  [76, 170, 1],
  [58, 168],
  [48, 146],
  [44, 104],
  [54, 68],
  [80, 42],
  [116, 30],
  [144, 38],
])
/** The plait, falling from the back of the head behind the shoulder. */
const PLAIT_PTS: Pt[] = [
  [62, 140],
  [54, 186],
  [48, 222],
  [44, 258],
  [41, 294],
  [39, 336],
]
/**
 * The fillet: a band of paper bound round the head, from above the brow back
 * across the hair to behind the ear.
 */
const FILLET = ribbon(
  [
    [166, 60],
    [140, 54],
    [118, 58],
    [98, 68],
    [78, 84],
    [60, 104],
    [40, 128],
  ],
  10,
  0.12,
)
const EAR = ear(104, 124, 0.95)

/** Her shoulders, narrow, in a dark bodice. */
export const HERO_BODY = spline([
  [-4, 336, 1],
  [2, 298],
  [20, 266],
  [52, 240],
  [82, 228],
  [112, 231],
  [140, 226],
  [166, 238],
  [188, 262],
  [202, 294],
  [208, 336, 1],
])
/** A small ruff at the throat, narrower than her cousin's. */
const RUFF = ruffBand(72, 144, 208, 229, 6, 0.05)

type Marks = { hair: string; plait: string; body: string; lacing: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Hair drawn smoothly back from the brow over the whole head to the nape:
  // long fine paper strands, fanning from the hairline (clipped to the hair).
  let hair = ''
  for (let i = 0; i < 30; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 30
    const a0 = deg(200 + t * 70)
    const x0 = 156 + Math.cos(a0) * 8 - t * 34 + between(r, -2, 2)
    const y0 = 56 + t * 40 + between(r, -2, 2)
    const x1 = 60 + between(r, -4, 4) + t * 14
    const y1 = 60 + t * 110 + between(r, -3, 3)
    const pts: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([x0 + (x1 - x0) * u, y0 + (y1 - y0) * u - Math.sin(Math.PI * u) * (16 - t * 12)])
    }
    hair += ribbon(pts, between(r, 0.7, 1.2), 0.8)
  }

  // The plait: a dark rope of hair with its crossings cut in paper.
  let plait = ''
  for (let i = 0; i < PLAIT_PTS.length - 1; i++) {
    const [x0, y0] = PLAIT_PTS[i]
    const [x1, y1] = PLAIT_PTS[i + 1]
    for (let k = 0; k < 3; k++) {
      const u = (k + 0.5) / 3
      const x = x0 + (x1 - x0) * u
      const y = y0 + (y1 - y0) * u
      // each crossing a chevron, one strand over the next
      plait +=
        gouge(x - 5.5, y - 4, x, y + 1.5, 1.4, 0.6) + gouge(x, y + 1.5, x + 5.5, y - 4, 1.4, -0.6)
    }
  }

  const body = folds(seed + 2, [20, 120], [256, 276], 6)

  // The lacing down the front of the bodice.
  let lacing = ''
  for (let y = 250; y < 330; y += 14)
    lacing += gouge(151, y, 165, y + 6, 1) + gouge(165, y, 151, y + 6, 1)

  const m = { hair, plait, body, lacing }
  marksBySeed.set(seed, m)
  return m
}

/** Hero, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function HeroFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-hero-head-${seed}`
  const hairClip = `${uid}-hero-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={HERO_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* the plait, behind the shoulder */}
      <path
        d={ribbon(PLAIT_PTS, 19, 0.15, false)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        transform={BOW}
      />
      <path d={m.plait} fill={PAPER} transform={BOW} />
      <path d={HERO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={m.lacing} fill={PAPER} />
      <g transform={BOW}>
        <path d={HERO_HEAD} fill={PAPER} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
          <path d={FILLET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        </g>
        <path d={EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <path d={EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* nostril, the closed lips, the small chin */}
          <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
          <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
          <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
          <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
          {/* a fine, level brow */}
          <path d="M143 83.5Q152 80 161 83" strokeWidth={2} />
          {/* "a modest young lady": the eye lowered, the lashes down */}
          <path d="M145 96Q152.5 99.5 160.5 95.5" strokeWidth={2.3} />
          <path
            d="M147 97.5L145.5 101.5M151 99L150.5 103M155.5 99L156 103M159.5 97L161 100.5"
            strokeWidth={0.9}
          />
          <path d="M146 91.5Q152 89.5 158 91" strokeWidth={0.9} />
        </g>
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function HeroKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={BOW}>
        <path d={HERO_HEAD} />
        <path d={HAIR} />
        <path d={ribbon(PLAIT_PTS, 19, 0.15, false)} />
      </g>
      <path d={HERO_BODY} />
    </g>
  )
}

/** Small in the block: "Leonato's short daughter". */
const P = placing(20, 40, 0.9, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Before Leonato's house in daylight, the light ahead of her, to the left.
  ground = portraitGround('hero', 3201, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.9 - (y / PH) * 0.1),
  )
  return ground
}

function HeroPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <HeroKnockout />
        <HeroFigure uid={uid} seed={3201} />
      </g>
      <PortraitRule />
    </>
  )
}

export const heroPortrait: LinocutArt = { width: PW, height: PH, Draw: HeroPortrait }

/** A point on the bowed head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = deg(5)
  const dx = x - 110
  const dy = y - 200
  return P.to(110 + dx * Math.cos(a) - dy * Math.sin(a), 200 + dx * Math.sin(a) + dy * Math.cos(a))
}
const EYE_AT = onHead(153, 98)
const HAIR_AT = onHead(92, 96)
const CROWN_AT = onHead(112, 34)

export const hero: Portrait = {
  name: 'Hero',
  art: heroPortrait,
  alt: 'A linocut portrait of Hero in profile, facing left, set low and small in the block with a wide band of cut ground above her head. She is a young woman with her head bowed a little and her eyes lowered, the lashes cast down. Her dark hair is drawn smoothly back from the brow, bound over the crown with a pale fillet, and falls behind her shoulder in one long plait. She wears a small white ruff and a dark bodice laced down the front. Three numbered red markers point to her lowered eye, her dark hair and the top of her head.',
  describedBy: [
    { phrase: 'a modest young lady', at: [EYE_AT[0] - 62, EYE_AT[1] + 44], to: EYE_AT },
    { phrase: 'too brown for a fair praise', at: [HAIR_AT[0] + 56, HAIR_AT[1] - 30], to: HAIR_AT },
    { phrase: "Leonato's short daughter", at: [CROWN_AT[0] - 70, CROWN_AT[1] - 16], to: CROWN_AT },
  ],
  where: 'Act 1, Scene 1',
  note: 'Two friends look at the same young woman and see different things: Claudio a modest young lady, Benedick someone too short and too dark to praise. The whole plot will turn on how Hero is seen.',
  artNote:
    'Fair meant pale and fair-haired, the fashion of the time, and the print has no brown, so she is given the dark hair the panels give her and the rest is left to the words. Her fillet, plait and dress are the plain dress of the time.',
}

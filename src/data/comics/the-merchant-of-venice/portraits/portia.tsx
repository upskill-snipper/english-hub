import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, type Pt } from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EAR,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
} from './common'

/**
 * Portia, as Bassanio first describes her to Antonio, in Act 1, Scene 1:
 *
 *   "In Belmont is a lady richly left, And she is fair, and, fairer than
 *   that word, Of wondrous virtues. Sometimes from her eyes I did receive
 *   fair speechless messages ... and her sunny locks Hang on her temples like
 *   a golden fleece"
 *
 * and as she describes herself to Nerissa in the next scene: "my little
 * body is aweary of this great world".
 *
 * So: a young woman, small and set low in the block, her eye open and
 * looking out, her fair hair drawn back over her head and falling down her
 * back, with curling locks hanging at her temple; and, because she is richly
 * left, a band of lace at the neck of a rich dark gown and a string of pearls.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): the one
 * fair head in the play, cut in PAPER with ink strands, falling in locks at
 * the temples and in a mass down her back, and a paper band of lace at the
 * neck of her gown. Her head is every woman's head in these portraits
 * (WOMAN_HEAD). The print has no gold: her hair is cut pale, and its gold is
 * left to the words. There is no red in this plate.
 *
 * She faces left, as she faces Bassanio across the panels, so the figure is
 * drawn facing right and flipped.
 *
 * Seeds: 4401 (the figure), 4402 to 4405 (its marks), 4410 (the ground).
 */

/** Fair hair drawn back from the brow over the crown to the back of the head. */
const HAIR_CROWN = spline([
  [162, 62, 1],
  [150, 56],
  [134, 58],
  [120, 70],
  [110, 90, 1],
  [96, 98],
  [84, 116],
  [62, 124],
  [44, 108],
  [46, 74],
  [66, 44],
  [98, 28],
  [132, 27],
  [154, 38],
])
/** The mass of it falling down her back, behind the shoulders. */
const HAIR_FALL = spline([
  [86, 110, 1],
  [84, 150],
  [76, 200],
  [70, 260],
  [64, 336, 1],
  [8, 336, 1],
  [20, 280],
  [30, 220],
  [36, 160],
  [42, 116],
  [58, 96, 1],
])

/**
 * "her sunny locks Hang on her temples": two long locks falling from the
 * hairline at the temple in front of the ear, waving as they fall and
 * curling up at the end.
 */
const CURL_PATHS: Pt[][] = [
  [124, 128, 72, 150, 5],
  [112, 116, 84, 162, 4.4],
].map(([x0, x1, y0, y1, amp]) => {
  const pts: Pt[] = []
  for (let k = 0; k <= 14; k++) {
    const u = k / 14
    pts.push([x0 + (x1 - x0) * u + Math.sin(u * Math.PI * 3.2) * amp, y0 + (y1 - y0) * u])
  }
  // the curl turning up at the end of the lock
  const [ex, ey] = pts[pts.length - 1]
  pts.push([ex + 4, ey + 3], [ex + 7, ey], [ex + 6, ey - 4])
  return pts
})

/** Her shoulders, narrow, in a rich dark gown with a small puffed roll at the shoulder. */
export const PORTIA_BODY = spline([
  [-4, 336, 1],
  [2, 298],
  [20, 266],
  [52, 242],
  [84, 232],
  [114, 236],
  [142, 230],
  [168, 242],
  [190, 266],
  [204, 298],
  [210, 336, 1],
])
const SHOULDER_ROLL = spline([
  [26, 262, 1],
  [36, 244],
  [58, 236],
  [72, 244],
  [70, 262],
  [52, 276],
  [34, 278],
])
/** The band of lace at the neck of her gown, its lower edge scalloped. */
function laceBand(): { band: string; holes: string } {
  const top: Pt[] = []
  for (let x = 74; x <= 166; x += 4) top.push([x, 232 + Math.pow((x - 122) / 48, 2) * -4 + 8])
  let band = `M${n(top[0][0])} ${n(top[0][1])}`
  for (const [x, y] of top) band += `L${n(x)} ${n(y)}`
  // down the far end, then back along a scalloped lower edge
  const foot = (x: number) => 252 + Math.pow((x - 122) / 48, 2) * -6 + 6
  band += `L${n(170)} ${n(foot(170))}`
  let holes = ''
  for (let x = 170; x > 74; x -= 8) {
    band += `Q${n(x - 4)} ${n(foot(x - 4) + 7)} ${n(x - 8)} ${n(foot(x - 8))}`
    holes += `M${n(x - 4)} ${n(foot(x - 4) - 5)}m-1.6 0a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z`
  }
  band += 'Z'
  return { band, holes }
}
const LACE = laceBand()
/** "richly left": a string of pearls lying on the gown below the lace. */
const PEARLS: Pt[] = []
for (let i = 0; i < 15; i++) {
  const t = i / 14
  PEARLS.push([86 + t * 82, 270 + Math.sin(Math.PI * t) * 18 - t * 6])
}

type Marks = { crown: string; fall: string; curls: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  // Fair hair: fine ink strands on paper, drawn back from the brow.
  // From the front of the head, the brow to the temple, back to the nape.
  // (46 strands of 0.9 to 1.5 were cut first; they thinned to nothing over
  // the brow, and the front of the crown read as a pale cap, not hair.
  // Reviewed 27 September 2026.)
  const crown = locks(
    seed + 1,
    58,
    (t) =>
      t < 0.35
        ? [132 + (t / 0.35) * 28, 28 + (t / 0.35) * 32]
        : [160 - ((t - 0.35) / 0.65) * 48, 60 + ((t - 0.35) / 0.65) * 32],
    (t) => [78 - t * 32, 32 + t * 86],
    [1.3, 2.1],
    -6,
  )
  // Falling down her back in long waves.
  const fall = locks(
    seed + 2,
    24,
    (t) => [48 + t * 34, 112 + t * 4],
    (t) => [18 + t * 44, 334],
    [1, 1.6],
    -6,
    2.2,
  )
  // Each lock a tress of fine wavy strands, gathered at the top and the end.
  let curls = ''
  for (const pts of CURL_PATHS) {
    for (let j = -2; j <= 2; j += 1) {
      const line = pts.map(([x, y], k): Pt => {
        const spread = Math.sin((Math.min(k, 14) / 14) * Math.PI) * 2.6
        return [x + j * spread, y]
      })
      curls += 'M' + line.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')
    }
  }
  const body = folds(seed + 3, [110, 190], [290, 300], 4)

  const m = { crown, fall, curls, body }
  marksBySeed.set(seed, m)
  return m
}

/** Portia, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function PortiaFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const crownClip = `${uid}-por-crown-${seed}`
  const fallClip = `${uid}-por-fall-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={crownClip}>
          <path d={HAIR_CROWN} />
        </clipPath>
        <clipPath id={fallClip}>
          <path d={HAIR_FALL} />
        </clipPath>
      </defs>
      {/* the hair falling down her back, behind the shoulders */}
      <path d={HAIR_FALL} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <g clipPath={`url(#${fallClip})`}>
        <path d={m.fall} fill={INK} />
      </g>
      <path d={PORTIA_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={SHOULDER_ROLL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(34, 256, 64, 250, 0.9, -1) + gouge(34, 266, 62, 262, 0.9, -1)} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-por-${seed}`} />
      <path
        d={LACE.band}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path d={LACE.holes} fill={INK} />
      <g>
        {PEARLS.map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            cx={n(x)}
            cy={n(y)}
            r={3.1}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.hairline}
          />
        ))}
      </g>
      <path d={HAIR_CROWN} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <g clipPath={`url(#${crownClip})`}>
        <path d={m.crown} fill={INK} />
      </g>
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
      {/* "her sunny locks Hang on her temples" */}
      <path
        d={m.curls}
        fill="none"
        stroke={INK}
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* "from her eyes": the eye open, looking out */}
      <WomanFace eye="open" />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function PortiaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={HAIR_FALL} />
      <path d={WOMAN_HEAD} />
      <path d={HAIR_CROWN} />
      <path d={PORTIA_BODY} />
    </g>
  )
}

/** Small in the block: "my little body". */
const P = placing(26, 42, 0.88, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A room at Belmont by day, the light ahead of her, to the left.
  ground = portraitGround('portia', 4410, (x, y) =>
    clamp(0.14 + ((PW - x - 40) / 280) * 0.86 - (y / PH) * 0.1),
  )
  return ground
}

function PortiaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <PortiaKnockout />
        <PortiaFigure uid={uid} seed={4401} />
      </g>
      <PortraitRule />
    </>
  )
}

export const portiaPortrait: LinocutArt = { width: PW, height: PH, Draw: PortiaPortrait }

const LACE_AT = P.to(150, 262)
const EYE_AT = P.to(...WOMAN_EYE)
const CURLS_AT = P.to(124, 116)

export const portia: Portrait = {
  name: 'Portia',
  art: portiaPortrait,
  alt: 'A linocut portrait of Portia in profile, facing left, set small and low in the block. She is a young woman with her eye open and looking out. Her fair hair, cut pale with fine dark strands, is drawn back from her brow over her head and falls in long waves down her back, and two long locks hang waving at her temple in front of her ear, curling at the ends. She wears a rich dark gown with a small puffed roll at the shoulder, a pale band of lace at the neck and a string of pearls below it. Three numbered red markers point to the lace and pearls, her eye and the locks at her temple.',
  describedBy: [
    { phrase: 'a lady richly left', at: [LACE_AT[0] - 44, LACE_AT[1] + 30], to: LACE_AT },
    { phrase: 'from her eyes', at: [EYE_AT[0] - 40, EYE_AT[1] - 56], to: EYE_AT },
    {
      phrase: 'her sunny locks Hang on her temples like a golden fleece',
      at: [CURLS_AT[0] + 30, CURLS_AT[1] - 84],
      to: CURLS_AT,
    },
  ],
  where: 'Act 1, Scene 1',
  passage:
    'In Belmont is a lady richly left, And she is fair, and, fairer than that word, Of wondrous virtues. Sometimes from her eyes I did receive fair speechless messages: Her name is Portia, nothing undervalu’d To Cato’s daughter, Brutus’ Portia. Nor is the wide world ignorant of her worth, For the four winds blow in from every coast Renowned suitors, and her sunny locks Hang on her temples like a golden fleece,',
  note: 'Bassanio mentions her fortune before her looks or her virtues, and compares her hair to the golden fleece that Jason sailed to win. From the first, Portia is described as a prize to be won as well as a woman to be loved.',
  artNote:
    'The print has no gold, so her hair is cut pale and its gold is left to the words. She is set small in the block because she speaks of “my little body”; her gown and pearls stand for the fortune she was left.',
}

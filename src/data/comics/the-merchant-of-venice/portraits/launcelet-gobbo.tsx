import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  Hand,
  handPoint,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  type Digit,
} from './common'

/**
 * Launcelet Gobbo, Shylock's servant and then Bassanio's, from his own
 * words in Act 2, Scene 2:
 *
 *   "I am famished in his service" (of Shylock)
 *   "[Looking on his palm.] Well, if any man in Italy have a fairer table
 *   which doth offer to swear upon a book, I shall have good fortune; go
 *   to, here's a simple line of life."
 *
 * So: a young man looking down, pleased, at the palm of his own hand held
 * up before him, reading his fortune in it, the lines of the palm cut in
 * ink; his cheek cut a little hollow, because he says he is starved. The
 * play gives the other side too: Shylock calls him "a huge feeder" (Act 2,
 * Scene 5), which the card's note says. Nothing else of his looks is given.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a plain
 * jerkin and a close cap, the small ruff every man in the kit wears,
 * clean-shaven, with short dark hair at the nape. His head is every man's
 * head (MAN_HEAD), bowed to look at his hand. The hand is the pilot's open
 * hand, every finger cut apart with an ink rim, so it reads as an open palm
 * at any size and never as a fist or a salute. There is no red in this
 * plate.
 *
 * Seeds: 5001 (the figure), 5002 to 5003 (its marks), 5010 (the ground).
 */

/** His head is bowed to look at his palm. */
const BOW = 'rotate(13 112 214)'

/**
 * The close cap: the kit's LAUNCELET_CAP, fitted over the whole crown from
 * the hairline at the brow to the nape, its edge passing above the ear.
 */
const CAP = spline([
  [162, 64, 1],
  [156, 44],
  [134, 28],
  [100, 23],
  [64, 31],
  [43, 54],
  [35, 86],
  [39, 116, 1],
  [66, 106],
  [94, 94],
  [120, 80],
  [142, 70],
])
/** The cap's edge, a hem of paper along its foot. */
const CAP_EDGE = 'M42 110Q96 92 158 65'
/** Short dark hair at the nape, below the cap. */
const HAIR = spline([
  [40, 110, 1],
  [66, 102],
  [96, 92],
  [112, 94, 1],
  [100, 100],
  [93, 112],
  [89, 132],
  [78, 146],
  [60, 150],
  [47, 138],
])

export const LAUNCELET_BODY = spline([
  [-10, 336, 1],
  [-4, 296],
  [14, 262],
  [44, 234],
  [76, 220],
  [112, 226],
  [146, 220],
  [176, 232],
  [202, 258],
  [220, 294],
  [230, 336, 1],
])
const RUFF = ruffBand(76, 152, 206, 226, 6, 0.06)
const BUTTONS: Pt[] = [
  [178, 250],
  [182, 266],
  [186, 282],
]

/** His forearm in its sleeve, from below the block up to the wrist, and the cuff. */
const SLEEVE = spline([
  [168, 336, 1],
  [196, 300],
  [222, 272],
  [238, 256, 1],
  [262, 268, 1],
  [246, 288],
  [226, 312],
  [212, 336, 1],
])
const CUFF = spline([
  [234, 256, 1],
  [250, 256],
  [266, 266, 1],
  [262, 274],
  [247, 267],
  [230, 266, 1],
])

// The open hand, palm towards us, fingers up and apart, held before him.
const HAND_AT: Pt = [250, 260]
const HAND_ROT = -14
const HAND_S = 1.1
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
  { from: [17, -36], to: [24, -60], w: 7.2 },
  { from: [9.5, -40], to: [13, -70], w: 7.8 },
  { from: [1, -42], to: [0, -74], w: 8.2 },
  { from: [-8, -40], to: [-14, -68], w: 7.8 },
  { from: [-13, -12], to: [-30, -30], w: 9 },
]
/** "a simple line of life": the lines of the palm, the life line curving round the thumb. */
const PALM_LINES = 'M-9 -38Q-14 -22 -6 -4' + 'M-8 -34Q4 -28 18 -26' + 'M21 -36Q10 -38 -2 -41'
const inHand = handPoint(HAND_AT, HAND_ROT, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) rotate(${HAND_ROT}) scale(${HAND_S})`

type Marks = { cheek: string; hair: string; body: string; sleeve: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // "I am famished in his service": the cheek cut a little hollow.
  let cheek = ''
  for (let rad = 14; rad < 28; rad += 3.6)
    cheek += arcDashes(r, 136, 112, rad, deg(58), deg(126), [10, 22], [1.5, 4])
  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(106 - t * 56, 92 + t * 8, 90 - t * 30, 140 + t * 4, 0.9 + r() * 0.3, -2)
  }
  const body = folds(seed + 1, [30, 140], [256, 272], 5)
  const sleeve = gouge(176, 300, 198, 254, 1.2, 1) + gouge(186, 318, 206, 272, 1, 1)
  const m = { cheek, hair, body, sleeve }
  marksBySeed.set(seed, m)
  return m
}

/** Launcelet, reading his palm, facing right in the 0..240 by 0..332 frame. */
export function LaunceletFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-lau-head-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <path d={LAUNCELET_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.6} />
      <g transform={BOW}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-lau-${seed}`} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.cheek} fill="none" stroke={INK} strokeWidth={0.95} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={CAP_EDGE} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
        <path
          d={gouge(62, 46, 130, 32, 1.2, -3) + gouge(74, 58, 142, 44, 0.9, -2.5)}
          fill={PAPER}
        />
        {/* "I shall have good fortune": a small smile */}
        <ManNoseAndMouth smile />
        <ManBrow w={2.6} raise={1} />
        <ManEye look="down" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <Hand transform={HAND_T} palm={PALM} digits={DIGITS} lines={PALM_LINES} halo={3.5} />
    </g>
  )
}

/** A thick ink halo round head, cap, shoulders and arm. */
export function LaunceletKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={BOW}>
        <path d={MAN_HEAD} />
        <path d={CAP} />
      </g>
      <path d={LAUNCELET_BODY} />
      <path d={SLEEVE} />
    </g>
  )
}

const P = placing(4, 28, 0.9)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A street in Venice by day, the light falling ahead of him, on his hand.
  ground = portraitGround('launcelet', 5010, (x, y) =>
    clamp(0.12 + ((x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function LaunceletPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <LaunceletKnockout />
        <LaunceletFigure uid={uid} seed={5001} />
      </g>
      <PortraitRule />
    </>
  )
}

export const launceletPortrait: LinocutArt = { width: PW, height: PH, Draw: LaunceletPortrait }

/** A point on the bowed head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = (13 * Math.PI) / 180
  const dx = x - 112
  const dy = y - 214
  return P.to(112 + dx * Math.cos(a) - dy * Math.sin(a), 214 + dx * Math.sin(a) + dy * Math.cos(a))
}
const CHEEK_AT = onHead(138, 132)
const PALM_AT = P.to(...inHand(4, -26))

export const launceletGobbo: Portrait = {
  name: 'Launcelet Gobbo',
  art: launceletPortrait,
  alt: 'A linocut portrait of Launcelet Gobbo in profile, facing right, his head bowed to look down, smiling a little, at the palm of his own hand. He holds his open hand up before him, the palm towards us, the four fingers and thumb spread apart, and the lines of the palm are cut in dark ink, one curving round the base of the thumb. He is a young, clean-shaven man with his cheek a little hollow, in a close dark cap over his whole crown, with short dark hair at the nape, a small white ruff and a plain dark jerkin with a white cuff at the wrist. Two numbered red markers point to his hollow cheek and the lines of his palm.',
  describedBy: [
    {
      phrase: 'I am famished in his service',
      at: [CHEEK_AT[0] - 2, CHEEK_AT[1] + 50],
      to: CHEEK_AT,
    },
    { phrase: 'here’s a simple line of life', at: [PALM_AT[0] + 46, PALM_AT[1] + 30], to: PALM_AT },
  ],
  where: 'Act 2, Scene 2',
  note: 'Launcelet says Shylock starves him; Shylock says he is kind enough but a huge feeder. The comic servant reads a lucky future in his own palm and leaves Shylock to serve Bassanio, just before Jessica leaves too.',
  artNote:
    'The play does not describe him. His close cap and plain jerkin are how the panels draw him, in the plain dress of a servant of the time.',
}

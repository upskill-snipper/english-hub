import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'
import { scribble } from '../../jekyll-and-hyde/panels/investigation-kit'

import {
  COLLAR,
  Figure,
  HEAD_HOLMES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  HolmesHands,
  LONG_HAND,
  Mary,
  OPEN_HAND,
  SHAKE_HAND,
  WATSON_CUTS,
  WATSON_FLUSH,
  WATSON_HAIR,
  WATSON_PUPIL,
  floorBoards,
  gent,
  headAt,
  type P,
  type Part,
} from './people'
import { Armchair, ChairArm, FogWindow, armchair } from './baker-street'

/**
 * Chapter 2, "The Statement of the Case": "Miss Morstan's statement", the
 * third moment in the guide's timeline. Every detail is from the text:
 *
 * - "Miss Morstan entered the room with a firm step"; "as she took the seat
 *   which Sherlock Holmes placed for her". So she sits on a plain upright
 *   chair, set between the two armchairs, in front of the door she came in
 *   by.
 * - "a blonde young lady, small, dainty, well gloved"; "The dress was a
 *   sombre greyish beige, untrimmed and unbraided, and she wore a small turban
 *   of the same dull hue, relieved only by a suspicion of white feather in the
 *   side." So she is drawn from Mary() in ./people.tsx: fair hair, the small
 *   turban with its white feather, the plain greyish dress, white gloves.
 * - "She opened a flat box as she spoke, and showed me six of the finest
 *   pearls that I had ever seen." So she holds the open box out towards
 *   Watson, and the six pearls lie in it, cut in paper.
 * - "Holmes rubbed his hands, and his eyes glistened. He leaned forward in
 *   his chair with an expression of extraordinary concentration upon his
 *   clear-cut, hawklike features"; "This morning I received this letter,
 *   which you will perhaps read for yourself." So Holmes leans forward in his
 *   chair by the window with the letter in his hands, reading: "You are a
 *   wronged woman, and shall have justice."
 * - Watson is drawn to her at once ("What a very attractive woman!", and
 *   afterwards "such dangerous thoughts came into my head"). So he sits
 *   forward in his chair, looking at her, one hand resting on the arm of the
 *   chair ("I relapsed into my chair", after she asks him to stay), and the
 *   spot colour is on his cheekbone (WATSON_FLUSH).
 *
 * The window is by Holmes's chair, as in "The seven-per-cent solution".
 *
 * FINISHED on 2 October 2026 from an unreviewed first draft. Her chair was a
 * thin post with a box on top, which read as a fitting on the door rather
 * than a chair, so it is cut in profile now, its back leaning and rounded at
 * the top; her lap sloped down to the knee, so she seemed to stand, and it is
 * level now; and Watson held both hands open in the air in front of him, a
 * gesture the text does not give him.
 *
 * Seeds: 1301 (the wall), 1302 (the floor), 1303 (the fog), 1304 (the letter).
 */

const W = 860
const H = 340
const FLOOR = 262
const WIN = { x: 640, y: 26, w: 150, h: 196 }
const DOOR = { x: 318, y: 36, w: 128 }

type Marks = { wall: string; floor: string; letter: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - 715) * 0.75, (y - 120) * 1.1) / 330) ** 1.1,
      clamp(1 - Math.hypot(x - 170, y - 150) / 220) * 0.3,
      0.05,
    )
  const wall = gougeField(rng(1301), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [14, 50],
  })
  const floor = floorBoards(rng(1302), W, H, FLOOR, [430, 90], 34)
  // the letter's lines of writing
  const r = rng(1304)
  let letter = ''
  for (let k = 0; k < 6; k++) letter += scribble(r, 0, 8 + k * 5, k === 5 ? 12 : 22, 2.4)
  cached = { wall, floor, letter }
  return cached
}

// ── Watson, forward in his chair, looking at her ────────────────────────────
const WAT_CHAIR = armchair(118, 1, 244, 300)
const WAT_HEAD = { d: HEAD_WATSON, at: [194, 124] as P, rot: 6, scale: 1.3 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: [186, 160],
  hip: [166, 238],
  head: WAT_HEAD,
  body: { width: 34, hem: 16, flare: 4 },
  arm: 9,
  leg: 10,
  near: {
    // resting along the arm of his chair, the hand over its end
    arm: [
      [188, 170],
      [196, 198],
      [226, 196],
    ],
    leg: [
      [170, 238],
      [224, 240],
      [228, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.95, rot: 34 },
  },
  far: {
    // in his lap, behind the chair's arm
    arm: [
      [180, 170],
      [186, 204],
      [206, 214],
    ],
    leg: [
      [164, 240],
      [214, 246],
      [212, 318],
    ],
  },
})
/** The near arm and its hand are the last seven parts: drawn again over the chair's arm. */
const WATSON_BODY = WATSON.slice(0, -7)
const WATSON_ARM = WATSON.slice(-7)

// ── Mary Morstan, on the chair Holmes placed for her ────────────────────────
const MARY = {
  facing: -1 as const,
  head: { at: [396, 128] as P, rot: -4, scale: 1.15 },
  neck: [402, 156] as P,
  waist: [412, 214] as P,
  knee: [364, 220] as P,
  floor: 318,
  near: {
    arm: [
      [398, 166],
      [390, 198],
      [362, 190],
    ] as P[],
    hand: { parts: SHAKE_HAND, scale: 0.8, rot: 20 },
  },
  far: {
    arm: [
      [408, 166],
      [404, 200],
      [372, 194],
    ] as P[],
    hand: { parts: SHAKE_HAND, scale: 0.78, rot: 20 },
  },
}
/**
 * The upright chair, seen from the side: the back leg running up into the
 * back, which leans a little and ends in a round top rail; the seat; the
 * front leg under her skirt.
 */
const MARY_CHAIR = {
  back: 'M436 300L440 226C441 204 444 176 447 152C447.6 146 451 142 456 143C460 144 461 148 460 152L452 226L444 300Z',
  seat: 'M368 220H452V229H368Z',
  legs: 'M374 229L370 300',
  /** a spindle between the back and the seat, so it reads as an open chair back */
  spindle: 'M449 168L446 220',
}
/** The open box: its lining, the six pearls, the lid standing open, the front edge. */
const BOX = {
  lining: 'M322 179L354 175L356 187L324 191Z',
  lid: 'M322 179L354 175L351 163L320 167Z',
  front: 'M324 191L356 187L356 190.6L324 194.6Z',
  pearls: [
    [329, 181.4],
    [338, 180.2],
    [347, 179],
    [330.6, 187.2],
    [339.6, 186],
    [348.6, 184.8],
  ] as P[],
}

// ── Holmes, forward in his chair by the window, reading the letter ──────────
const HOL_CHAIR = armchair(808, -1, 244, 300)
const HOL_HEAD = { d: HEAD_HOLMES, at: [724, 124] as P, rot: -8, scale: 1.3 }
const HOL_NEAR_ARM: P[] = [
  [734, 168],
  [718, 204],
  [694, 188],
]
const HOL_FAR_ARM: P[] = [
  [744, 168],
  [734, 202],
  [704, 184],
]
const HOLMES: Part[] = gent({
  facing: -1,
  neck: [738, 160],
  hip: [760, 240],
  head: HOL_HEAD,
  body: { width: 26, hem: 16, flare: 4 },
  arm: 8,
  leg: 9,
  near: {
    arm: HOL_NEAR_ARM,
    leg: [
      [754, 240],
      [702, 242],
      [700, 318],
    ],
  },
  far: {
    arm: HOL_FAR_ARM,
    leg: [
      [762, 242],
      [714, 250],
      [716, 318],
    ],
  },
})
const HOLMES_BODY = HOLMES.slice(0, -1)
const HOLMES_ARM = HOLMES.slice(-1)
/** The letter, held up before him: its top-left corner, and its tilt. */
const LETTER_AT = 'translate(660 146) rotate(-6)'

function MissMorstansStatement({ uid }: ArtProps) {
  const m = marks()
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const ht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const d = DOOR
  return (
    <>
      <g className="lc-push" style={timing({ origin: [420, 180], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the door she came in by: a paper architrave, four panels, the knob */}
        <rect x={d.x - 10} y={d.y - 10} width={d.w + 20} height={FLOOR - d.y + 10} fill={PAPER} />
        <rect x={d.x - 4} y={d.y - 4} width={d.w + 8} height={FLOOR - d.y + 4} fill={INK} />
        <rect x={d.x} y={d.y} width={d.w} height={FLOOR - d.y} fill={INK} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <rect x={d.x + 12} y={d.y + 12} width={d.w / 2 - 18} height={90} />
          <rect x={d.x + d.w / 2 + 6} y={d.y + 12} width={d.w / 2 - 18} height={90} />
          <rect x={d.x + 12} y={d.y + 118} width={d.w / 2 - 18} height={92} />
          <rect x={d.x + d.w / 2 + 6} y={d.y + 118} width={d.w / 2 - 18} height={92} />
        </g>
        <circle cx={d.x + 14} cy={d.y + 116} r={3.4} fill={PAPER} />

        {/* the fog at the window behind Holmes */}
        <FogWindow uid={uid} box={WIN} seed={1303} roof={[0.64, 0.74]} />

        {/* Watson, looking at her */}
        <Armchair c={WAT_CHAIR} />
        <Figure parts={WATSON_BODY}>
          <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} transform={wt} fill={PAPER} />
          <path d={WATSON_PUPIL} transform={wt} fill={INK} />
        </Figure>
        <path
          d={WATSON_FLUSH}
          transform={wt}
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <ChairArm c={WAT_CHAIR} />
        <Figure parts={WATSON_ARM} />

        {/* the chair Holmes placed for her */}
        <path d={MARY_CHAIR.legs} stroke={INK} strokeWidth={4.4} />
        <path
          d={MARY_CHAIR.back + MARY_CHAIR.seat}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={MARY_CHAIR.spindle} stroke={PAPER} strokeWidth={1.2} />

        {/* Mary Morstan, the open box of pearls held out */}
        <Mary uid={uid} {...MARY} />
        <path d={BOX.lid} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={BOX.lining} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={BOX.front} fill={PAPER} />
        {BOX.pearls.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle cx={x} cy={y} r={2.9} fill={PAPER} stroke={INK} strokeWidth={0.7} />
            <circle cx={x - 0.9} cy={y - 0.9} r={0.7} fill={INK} />
          </g>
        ))}

        {/* Holmes, forward in his chair, the letter in his hands */}
        <Armchair c={HOL_CHAIR} />
        <Figure parts={HOLMES_BODY}>
          <path d={HOLMES_CUTS + HOLMES_HAIR + COLLAR} transform={ht} fill={PAPER} />
          <path d={HOLMES_PUPIL} transform={ht} fill={INK} />
        </Figure>
        <ChairArm c={HOL_CHAIR} />
        <Figure parts={HOLMES_ARM} />
        <HolmesHands
          facing={-1}
          arms={[
            { arm: HOL_FAR_ARM, hand: { parts: LONG_HAND, scale: 1, rot: -70 } },
            { arm: HOL_NEAR_ARM, hand: { parts: LONG_HAND, scale: 1.05, rot: -64 } },
          ]}
        />
        <g transform={LETTER_AT}>
          <rect x={-2} y={-2} width={38} height={46} fill={INK} />
          <rect x={0} y={0} width={34} height={42} fill={PAPER} />
          <path
            d={m.letter}
            transform="translate(5 2)"
            fill="none"
            stroke={INK}
            strokeWidth={0.8}
          />
          <path d={gouge(2, 40, 32, 40, 0.5)} fill={INK} />
        </g>
      </g>
    </>
  )
}

export const missMorstansStatement: LinocutArt = {
  width: W,
  height: H,
  Draw: MissMorstansStatement,
}

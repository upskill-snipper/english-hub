import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  HEAD_HOLMES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  OPEN_HAND,
  STEEPLE,
  STEEPLE_LINES,
  WATSON_CUTS,
  WATSON_HAIR,
  WATSON_PUPIL,
  floorBoards,
  gent,
  headAt,
  type P,
  type Part,
} from './people'
import { Armchair, ChairArm, Desk, FogWindow, Mantel, armchair } from './baker-street'

/**
 * Chapter 1, "The Science of Deduction": "The seven-per-cent solution", the
 * first moment in the guide's timeline. Every detail is from the text:
 *
 * - "Sherlock Holmes took his bottle from the corner of the mantel-piece and
 *   his hypodermic syringe from its neat morocco case." What Holmes does
 *   next is left to the words, as the rules in ./people.tsx require: the
 *   bottle stands on the corner of the mantelpiece and the case lies beside
 *   it, SHUT, printed in the spot colour because it is what the two men are
 *   arguing about. No syringe, needle or bared arm is drawn.
 * - "Remember that I speak not only as one comrade to another, but as a
 *   medical man"; "I said, earnestly. 'Count the cost!'" So Watson sits
 *   forward in his chair and holds out an open hand to his friend.
 * - "He did not seem offended. On the contrary, he put his finger-tips
 *   together and leaned his elbows on the arms of his chair, like one who has
 *   a relish for conversation", in "the velvet-lined arm-chair". So Holmes
 *   sits back in his deep chair, elbows on its arms, the fingertips of his
 *   "long, white, nervous fingers" together, and answers: "My mind ...
 *   rebels at stagnation ... I abhor the dull routine of existence."
 * - "See how the yellow fog swirls down the street and drifts across the
 *   dun-coloured houses" (later the same afternoon). So the window behind
 *   Holmes is full of fog, the houses opposite faint in it, and his hawk's
 *   profile is cut black against it.
 * - "He raised his eyes languidly from the old black-letter volume which he
 *   had opened." So the book lies open on the small table at his side.
 *
 * Seeds: 1101 (the wall), 1102 (the floor), 1103 (the fog).
 */

const W = 860
const H = 340
const FLOOR = 262
const WIN = { x: 574, y: 26, w: 150, h: 196 }

type Marks = { wall: string; floor: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room lit by the fog-light from the window, and a little from the left.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - 650) * 0.75, (y - 120) * 1.1) / 320) ** 1.1,
      clamp(1 - Math.hypot(x - 430, y - 150) / 200) * 0.35,
      0.05,
    )
  const wall = gougeField(rng(1101), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [14, 50],
  })
  const floor = floorBoards(rng(1102), W, H, FLOOR, [470, 90], 34)
  cached = { wall, floor }
  return cached
}

// ── Watson, forward in his chair, one hand held out ──────────────────────────
const WAT_CHAIR = armchair(146, 1, 244, 300)
const WAT_HEAD = { d: HEAD_WATSON, at: [214, 124] as P, rot: 12, scale: 1.3 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: [204, 160],
  hip: [184, 238],
  head: WAT_HEAD,
  body: { width: 34, hem: 16, flare: 4 },
  arm: 9,
  leg: 10,
  near: {
    arm: [
      [206, 170],
      [230, 200],
      [264, 190],
    ],
    leg: [
      [188, 238],
      [244, 240],
      [248, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 1.1, rot: -16 },
  },
  far: {
    arm: [
      [198, 170],
      [208, 206],
      [232, 224],
    ],
    leg: [
      [182, 240],
      [234, 246],
      [232, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.9, rot: 10 },
  },
})
/** The near arm and its hand are the last seven parts: drawn again over the chair's arm. */
const WATSON_BODY = WATSON.slice(0, -7)
const WATSON_ARM = WATSON.slice(-7)

// ── Holmes, back in his velvet-lined chair, fingertips together ──────────────
const HOL_CHAIR = armchair(716, -1, 244, 300)
const HOL_HEAD = { d: HEAD_HOLMES, at: [648, 124] as P, rot: 3, scale: 1.3 }
const HOL_NEAR_ARM: P[] = [
  [660, 168],
  [654, 206],
  [630, 194],
]
const HOLMES: Part[] = gent({
  facing: -1,
  neck: [664, 160],
  hip: [680, 240],
  head: HOL_HEAD,
  body: { width: 26, hem: 16, flare: 4 },
  arm: 8,
  leg: 9,
  near: {
    arm: HOL_NEAR_ARM,
    leg: [
      [674, 240],
      [616, 242],
      [614, 318],
    ],
  },
  far: {
    arm: [
      [670, 168],
      [670, 206],
      [638, 197],
    ],
    leg: [
      [682, 242],
      [628, 250],
      [630, 318],
    ],
  },
})
const HOLMES_BODY = HOLMES.slice(0, -1)
const HOLMES_ARM = HOLMES.slice(-1)
/** Where the steepled hands sit: at the near wrist, tipped a little forward. */
const STEEPLE_AT = 'translate(630 194) rotate(-6) scale(1.3)'

function SevenPerCentSolution({ uid }: ArtProps) {
  const m = marks()
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const ht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  return (
    <>
      <g className="lc-push" style={timing({ origin: [560, 170], push: 1.03 })}>
        {/* the room, lit by the fog at the window */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* "the yellow fog swirls down the street" */}
        <FogWindow uid={uid} box={WIN} seed={1103} roof={[0.64, 0.74]} />

        {/* Watson's open desk, in the corner */}
        <Desk x={22} top={182} floor={300} />

        {/* the mantelpiece between them: the bottle at its corner, and the case, shut */}
        <Mantel x={350} shelf={140} floor={FLOOR} caseRed />

        {/* Watson's chair, and Watson, earnest: "Count the cost!" */}
        <Armchair c={WAT_CHAIR} />
        <Figure parts={WATSON_BODY}>
          <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} transform={wt} fill={PAPER} />
          <path d={WATSON_PUPIL} transform={wt} fill={INK} />
        </Figure>
        <ChairArm c={WAT_CHAIR} />
        <Figure parts={WATSON_ARM} />

        {/* the small table and the old black-letter volume, open */}
        <path d="M770 206H846M808 206V300M790 300H826" stroke={INK} strokeWidth={5} fill="none" />
        <path d="M770 206H846" stroke={PAPER} strokeWidth={1.2} />
        <path d="M776 201H840V205H776Z" fill={INK} stroke={PAPER} strokeWidth={0.8} />
        <path
          d="M779 201Q793 195 808 199V187Q793 183 779 189ZM808 199Q823 195 837 201V189Q823 183 808 187Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        {/*
          its heavy black letter, too small to read, set as words along the
          lines (cut as short square blocks it read as the windows of a
          building, 2 October 2026)
        */}
        <path
          d="M783 190.6L803 187.8M783 194L803 191.2M783 197.4L796 195.4M813 187.8L833 190.6M813 191.2L833 194M813 194.6L833 197.4"
          stroke={INK}
          strokeWidth={1.2}
          strokeDasharray="4.2 1.1"
        />

        {/* Holmes's velvet-lined chair, and Holmes, fingertips together */}
        <Armchair c={HOL_CHAIR} />
        <Figure parts={HOLMES_BODY}>
          <path d={HOLMES_CUTS + HOLMES_HAIR + COLLAR} transform={ht} fill={PAPER} />
          <path d={HOLMES_PUPIL} transform={ht} fill={INK} />
        </Figure>
        <ChairArm c={HOL_CHAIR} />
        <Figure parts={HOLMES_ARM} />
        {/* "his long, white, nervous fingers", the tips together */}
        <g transform={STEEPLE_AT}>
          <path d={STEEPLE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={STEEPLE_LINES} fill="none" stroke={INK} strokeWidth={0.7} />
        </g>
      </g>
    </>
  )
}

export const theSevenPerCentSolution: LinocutArt = {
  width: W,
  height: H,
  Draw: SevenPerCentSolution,
}

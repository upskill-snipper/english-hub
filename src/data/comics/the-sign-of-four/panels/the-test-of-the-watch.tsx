import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  GRIP_HAND,
  HEAD_HOLMES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  HolmesHands,
  LONG_HAND,
  OPEN_HAND,
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
 * Chapter 1, "The Science of Deduction": "The test of the watch", the second
 * moment in the guide's timeline. Every detail is from the text:
 *
 * - "Now, I have here a watch which has recently come into my possession";
 *   "He balanced the watch in his hand, gazed hard at the dial, opened the
 *   back, and examined the works, first with his naked eyes and then with a
 *   powerful convex lens." So Holmes, in his armchair, holds the watch up in
 *   one white hand with its back open on its hinge, and has the lens in the
 *   other. "Finally, I ask you to look at the inner plate, which contains the
 *   key-hole. Look at the thousands of scratches all round the hole": the
 *   key-hole and its scratches are cut on the open watch, and the chain hangs
 *   from its bow.
 * - "I sprang from my chair and limped impatiently about the room with
 *   considerable bitterness in my heart." So Watson's chair stands empty
 *   behind him, and he stands over Holmes, his weight off his wounded leg,
 *   one open hand held out at the watch: "You cannot expect me to believe
 *   that you have read all this from his old watch!" His hurt is the spot
 *   colour on his cheekbone (WATSON_FLUSH in ./people.tsx).
 * - "'My dear doctor,' said he, kindly, 'pray accept my apologies'". So
 *   Holmes looks up at him, leaning forward.
 * - The same afternoon ends at the window: "See how the yellow fog swirls
 *   down the street and drifts across the dun-coloured houses." So the window
 *   behind Watson is full of fog, and his black figure is cut against it.
 *
 * Seeds: 1201 (the wall), 1202 (the floor), 1203 (the fog).
 */

const W = 860
const H = 340
const FLOOR = 262
const WIN = { x: 452, y: 22, w: 190, h: 206 }

type Marks = { wall: string; floor: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 548) * 0.7, (y - 120) * 1.1) / 330) ** 1.1, 0.05)
  const wall = gougeField(rng(1201), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [14, 50],
  })
  const floor = floorBoards(rng(1202), W, H, FLOOR, [430, 90], 34)
  cached = { wall, floor }
  return cached
}

// ── Holmes, forward in his chair, the watch held up, the lens in his hand ────
const HOL_CHAIR = armchair(148, 1, 244, 300)
const HOL_HEAD = { d: HEAD_HOLMES, at: [240, 128] as P, rot: -12, scale: 1.3 }
const WATCH_ARM: P[] = [
  [232, 170],
  [262, 198],
  [292, 178],
]
const LENS_ARM: P[] = [
  [222, 170],
  [232, 206],
  [260, 222],
]
const WATCH_HAND = { parts: LONG_HAND, scale: 1.1, rot: -40 }
const LENS_HAND = { parts: GRIP_HAND, scale: 1.05, rot: -10 }
const HOLMES: Part[] = gent({
  facing: 1,
  neck: [228, 162],
  hip: [206, 240],
  head: HOL_HEAD,
  body: { width: 26, hem: 16, flare: 4 },
  arm: 8,
  leg: 9,
  near: {
    arm: WATCH_ARM,
    leg: [
      [210, 240],
      [262, 242],
      [266, 318],
    ],
  },
  far: {
    arm: LENS_ARM,
    leg: [
      [204, 242],
      [252, 248],
      [250, 318],
    ],
  },
})
const HOLMES_BODY = HOLMES.slice(0, -1)
const HOLMES_ARM = HOLMES.slice(-1)

/** The watch: its centre, and its back swung open on the hinge. */
const WATCH: P = [306, 160]

// ── Watson, up from his chair, over him ─────────────────────────────────────
const WAT_HEAD = { d: HEAD_WATSON, at: [538, 104] as P, rot: -10, scale: 1.3 }
const WATSON: Part[] = gent({
  facing: -1,
  neck: [546, 138],
  hip: [554, 214],
  head: WAT_HEAD,
  body: { width: 34, hem: 40, flare: 7 },
  arm: 9,
  leg: 10,
  near: {
    arm: [
      [540, 148],
      [526, 188],
      [502, 180],
    ],
    leg: [
      [550, 214],
      [542, 266],
      [536, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 1.1, rot: -8 },
  },
  far: {
    arm: [
      [556, 148],
      [564, 180],
      [566, 208],
    ],
    // the wounded leg, eased: the knee a little bent, the weight off it
    leg: [
      [558, 214],
      [574, 262],
      [582, 316],
    ],
  },
})
const WAT_CHAIR = armchair(784, -1, 244, 300)

function TestOfTheWatch({ uid }: ArtProps) {
  const m = marks()
  const ht = headAt(1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const wt = headAt(-1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const [wx, wy] = WATCH
  return (
    <>
      <g className="lc-push" style={timing({ origin: [420, 170], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* "See how the yellow fog swirls down the street" */}
        <FogWindow uid={uid} box={WIN} seed={1203} roof={[0.6, 0.72]} />

        {/* Watson's chair, empty: "I sprang from my chair" */}
        <Armchair c={WAT_CHAIR} />
        <ChairArm c={WAT_CHAIR} />

        {/* Watson, hurt, one open hand out at the watch */}
        <Figure parts={WATSON}>
          <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} transform={wt} fill={PAPER} />
          <path d={WATSON_PUPIL} transform={wt} fill={INK} />
          <path
            d={gouge(538, 152, 530, 208, 0.9, 1.2) + gouge(560, 160, 566, 246, 0.8, -1)}
            fill={PAPER}
          />
        </Figure>
        <path
          d={WATSON_FLUSH}
          transform={wt}
          fill="none"
          stroke={RED}
          strokeWidth={2.2}
          strokeLinecap="round"
        />

        {/* Holmes's chair, and Holmes, looking up at him */}
        <Armchair c={HOL_CHAIR} />
        <Figure parts={HOLMES_BODY}>
          <path d={HOLMES_CUTS + HOLMES_HAIR + COLLAR} transform={ht} fill={PAPER} />
          <path d={HOLMES_PUPIL} transform={ht} fill={INK} />
        </Figure>
        <ChairArm c={HOL_CHAIR} />
        <Figure parts={HOLMES_ARM} />

        {/* the powerful convex lens, lowered in his other hand: a handle and a thick rim */}
        <path d="M264 221L282 228" stroke={PAPER} strokeWidth={7.6} strokeLinecap="round" />
        <path d="M264 221L282 228" stroke={INK} strokeWidth={4.6} strokeLinecap="round" />
        <circle cx={294} cy={232} r={12.5} fill={PAPER} />
        <circle cx={294} cy={232} r={10.4} fill={PAPER} stroke={INK} strokeWidth={3.2} />
        <path d="M287 227Q289.4 223.6 293.6 223" fill="none" stroke={INK} strokeWidth={1.1} />

        {/* his white hands */}
        <HolmesHands
          facing={1}
          arms={[
            { arm: LENS_ARM, hand: LENS_HAND },
            { arm: WATCH_ARM, hand: WATCH_HAND },
          ]}
        />

        {/* the watch, its back open on the hinge, the chain hanging from the bow */}
        <path
          d={`M${wx - 3} ${wy + 10}C${wx - 8} ${wy + 20} ${wx - 6} ${wy + 30} ${wx + 2} ${wy + 34}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={3.6}
          strokeDasharray="2.2 1.4"
        />
        <path
          d={`M${wx - 3} ${wy + 10}C${wx - 8} ${wy + 20} ${wx - 6} ${wy + 30} ${wx + 2} ${wy + 34}`}
          fill="none"
          stroke={INK}
          strokeWidth={1}
        />
        <ellipse
          cx={wx + 17}
          cy={wy - 4}
          rx={5}
          ry={11}
          transform={`rotate(-18 ${wx + 17} ${wy - 4})`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <circle cx={wx} cy={wy} r={12} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <circle cx={wx} cy={wy} r={8.4} fill="none" stroke={INK} strokeWidth={0.9} />
        <circle cx={wx} cy={wy - 14.4} r={2.6} fill="none" stroke={INK} strokeWidth={1.4} />
        {/* the key-hole in the inner plate, and the scratches all round it */}
        <circle cx={wx + 2.4} cy={wy + 1.6} r={1.8} fill={INK} />
        <path
          d={`M${wx - 1.6} ${wy - 2}L${wx + 0.4} ${wy - 0.6}M${wx + 5} ${wy - 2.4}L${wx + 3.8} ${wy - 0.4}M${wx + 6.6} ${wy + 2.6}L${wx + 4.6} ${wy + 2}M${wx + 4.4} ${wy + 6}L${wx + 3.4} ${wy + 3.8}M${wx - 0.6} ${wy + 5.4}L${wx + 1} ${wy + 3.4}M${wx - 2.4} ${wy + 1.8}L${wx} ${wy + 1.4}`}
          stroke={INK}
          strokeWidth={0.8}
        />
      </g>
    </>
  )
}

export const theTestOfTheWatch: LinocutArt = { width: W, height: H, Draw: TestOfTheWatch }

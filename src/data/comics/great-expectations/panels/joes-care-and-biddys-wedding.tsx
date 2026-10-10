import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { canopy } from '../../macbeth/panels/dunsinane-kit'
import { prayingHands } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Cut, Person, type Pose } from './people'

/**
 * Chapters 57 and 58: "Joe's care and Biddy's wedding", the nineteenth moment
 * in the guide's timeline, in two scenes side by side, as its summary has
 * them. Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * LEFT, Pip's rooms in the Temple, Chapter 57, at the moment of the panel's
 * quotation:
 * - "After which, Joe withdrew to the window, and stood with his back towards
 *   me, wiping his eyes. And as my extreme weakness prevented me from getting
 *   up and going to him, I lay there, penitently whispering, 'O God bless him!
 *   O God bless this gentle Christian man!'" So Joe, the kit's Joe, stands at
 *   the window with his back to the room and his sleeve before his eyes, and
 *   Pip, thin and in white, lies propped on his pillows with his hands
 *   together.
 * - His bed was moved into the sitting-room, "divested of its curtains", and
 *   the writing-table is "cumbered with little bottles". So the bed has no
 *   curtains, and a table of medicine bottles stands in the corner.
 *
 * RIGHT, the forge in June, Chapter 58:
 * - "The June weather was delicious. The sky was blue, the larks were soaring
 *   high over the green corn"; "I went towards it under the sweet green limes";
 *   the forge "was closed. No gleam of fire, no glittering shower of sparks, no
 *   roar of bellows; all shut up, and still." So larks fly in a pale sky, the
 *   limes hang overhead, and the forge stands shut, with no fire.
 * - "the best parlour seemed to be in use, for there were white curtains
 *   fluttering in its window, and the window was open and gay with flowers."
 *   The flowers' colour is not given, and they are printed in paper: red
 *   rings beside Joe's shoulder read at phone width as specks of blood
 *   (they were first printed red; changed 10 October 2026).
 * - "Joe and Biddy stood before me, arm in arm. At first Biddy gave a cry, as
 *   if she thought it was my apparition"; "how smart you are". So Joe, in his
 *   best coat and hat, and Biddy, in white, stand arm in arm before Pip, her
 *   hand up as she cries out.
 *
 * The panel uses no spot colour: the forge is cold, and nothing in either
 * scene burns. Seeds: 5701 (the room's wall), 5702 (its floor), 5801 (the
 * limes' crown), 5802 (the house wall), 5803 (the lane), 5804 (the limes'
 * twigs).
 */

const W = 860
const H = 340
/** The gutter between the two scenes. */
const GUTTER = { x0: 414, x1: 426 }

// ── LEFT: Pip's sitting-room in the Temple ─────────────────────────────────
/** Where the room's back wall meets the bare floor. */
const ROOM_FLOOR = 252
/** The open window, shaded: its frame, and how far the blind is drawn down. */
const WIN = { x0: 318, x1: 404, y0: 30, y1: 232, blind: 104 }
/** Pip's bedstead, its head on the left: its ends, the top of the mattress, its feet. */
const BED = { x0: 14, x1: 236, top: 246, feet: 304 }

// ── RIGHT: the forge in June ────────────────────────────────────────────────
/** The lane in front of the house. */
const LANE = 284
/** The house: its eaves, and the parlour window with its white curtains and flowers. */
const HOUSE = { x0: 600, eaves: 74 }
const PARLOUR = { x0: 748, x1: 838, y0: 118, y1: 192 }
/** The forge, shut up: its doors. */
const FORGE = { x0: 426, x1: 528, eaves: 96 }
/**
 * The limes' crown, [cx, cy, radius] for each round, hanging from the top
 * edge over the forge's roof and the lane, clear of the chimney (x 440 to 454).
 */
const LIME_CLUSTERS: [number, number, number][] = [
  [496, 2, 18],
  [522, -4, 20],
  [550, 2, 21],
  [576, -2, 18],
  [598, 6, 15],
  [512, 24, 15],
  [538, 28, 16],
  [564, 24, 15],
  [586, 26, 12],
]
/** Twigs drooping below the crown: from [x0, y0] to [x1, y1]. */
const LIME_TWIGS: [number, number, number, number][] = [
  [506, 30, 498, 50],
  [544, 36, 548, 58],
  [578, 30, 588, 50],
]

type Marks = {
  roomWall: string
  roomFloor: string
  limes: string
  limeCuts: string
  houseWall: string
  lane: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room: lit from the window on the right.
  const roomLight = (x: number, y: number) =>
    clamp(0.12 + 0.75 * clamp(1 - Math.hypot(x - 360, (y - 170) * 0.8) / 300))
  const roomWall = gougeField(
    rng(5701),
    { x0: 0, x1: GUTTER.x0, y0: 4, y1: ROOM_FLOOR },
    roomLight,
    { spacing: 6, len: [16, 54], gap: [5, 16], max: 3.4 },
  )
  const roomFloor = gougeField(
    rng(5702),
    { x0: 0, x1: GUTTER.x0, y0: ROOM_FLOOR + 4, y1: H },
    (x, y) => roomLight(x, y - 60) * 0.9,
    { spacing: 6.4, len: [20, 70], gap: [6, 18], max: 3.2 },
  )
  // The limes overhead, cut as Birnam Wood's trees are (canopy() in the
  // Macbeth kit): a crown of overlapping rounds with leaves standing off its
  // edge and leaf cuts inside, and drooping twigs below it, hanging into the
  // picture from the top edge between the forge's chimney and the house.
  // REDRAWN 10 October 2026, on review. The first cut outlined each round on
  // its own, so the overlaps printed as a tangle of loops, and gave each two
  // or three level cuts side by side that read as pairs of eyes. A second cut,
  // smooth black rounds over the forge, read at the size the site shows it as
  // smoke from the chimney, which the text says is cold ("No gleam of fire").
  // So the crown keeps clear of the chimney, with open sky above it.
  const { mass, cuts } = canopy(
    rng(5801),
    LIME_CLUSTERS,
    (_x, y) => clamp(0.85 - (y + 10) / 80),
    20,
    8,
  )
  const rt = rng(5804)
  let twigs = ''
  for (const [x0, y0, x1, y1] of LIME_TWIGS) {
    twigs += ribbon(
      [
        [x0, y0],
        [(x0 + x1) / 2 + between(rt, -3, 3), (y0 + y1) / 2],
        [x1, y1],
      ],
      2.6,
      0.4,
      false,
    )
    // a few leaves along the end of each twig, alternately to each side
    for (let k = 0; k < 4; k++) {
      const t = 0.45 + k * 0.17
      const lx = x0 + (x1 - x0) * t
      const ly = y0 + (y1 - y0) * t
      const side = k % 2 ? 1 : -1
      twigs += gouge(lx, ly, lx + side * 7, ly + 4, 2.6)
    }
  }
  const limes = mass + twigs
  const limeCuts = cuts
  // The whitewashed house wall: paper, lightly scored.
  const rh = rng(5802)
  let houseWall = ''
  for (let y = HOUSE.eaves + 8; y < LANE - 4; y += 7) {
    let x = HOUSE.x0 + between(rh, -10, 10)
    while (x < W) {
      const len = between(rh, 20, 70)
      if (rh() < 0.4) houseWall += gouge(x, y, x + len, y + between(rh, -0.5, 0.5), 0.5)
      x += len + between(rh, 16, 50)
    }
  }
  // The lane: pale, with ruts and grass at its edge.
  const lane = gougeField(rng(5803), { x0: GUTTER.x1, x1: W, y0: LANE + 4, y1: H }, () => 0.85, {
    spacing: 5.6,
    len: [20, 70],
    gap: [6, 14],
    max: 3.4,
  })
  cached = { roomWall, roomFloor, limes, limeCuts, houseWall, lane }
  return cached
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/** Joe at the window, his back to Pip, his sleeve before his eyes. */
const JOE_AT_WINDOW: Pose = {
  look: 'joe',
  head: { rot: 8 },
  near: {
    pts: [
      [4, -126],
      [30, -134],
      [10, -158],
    ],
    hand: 'none',
  },
  eye: 'down',
  brow: 'up',
}

/** Pip in bed, propped on his pillows, his hands together: "O God bless him!" */
const PIP_IN_BED: Pose = {
  look: 'pip',
  age: 'man',
  tone: 'paper',
  body: { neck: [-16, -80], hip: [0, -12] },
  head: { at: [-10, -102], rot: -6 },
  legs: {
    far: [
      [-2, -12],
      [36, -12],
      [74, -10],
    ],
    near: [
      [2, -12],
      [40, -11],
      [78, -9],
    ],
  },
  near: {
    pts: [
      [-12, -74],
      [6, -52],
      [12, -64],
    ],
    hand: 'none',
  },
  far: {
    pts: [
      [-18, -76],
      [0, -54],
      [8, -64],
    ],
    hand: 'none',
  },
  eye: 'open',
  brow: 'up',
}
const PRAYER = prayingHands([10, -60], -64, 1)

/** Pip, come home: thin from his illness, facing them. */
const PIP_HOME: Pose = {
  look: 'pip',
  age: 'man',
  near: {
    pts: [
      [4, -126],
      [12, -100],
      [20, -78],
    ],
    hand: 'mitt',
  },
  eye: 'wide',
  brow: 'up',
}

/** Biddy, "how smart", arm in arm with Joe, a hand up as she gives a cry. */
const BIDDY: Pose = {
  look: 'biddy',
  tone: 'paper',
  // "how smart you are!": her hair neat, without the escaping strands of
  // Chapter 16 (they were drawn here first; dropped on review, 10 October 2026).
  neat: true,
  near: {
    pts: [
      [3, -124],
      [16, -106],
      [22, -126],
    ],
    hand: 'open',
    deg: -80,
    spread: 20,
  },
  far: {
    pts: [
      [-3, -124],
      [-12, -104],
      [-26, -96],
    ],
    hand: 'none',
  },
  eye: 'wide',
}

/** Joe, "how smart you are", in his best coat and hat, Biddy on his arm. */
const JOE_SMART: Pose = {
  look: 'joe',
  hat: 'top',
  near: {
    pts: [
      [4, -126],
      [20, -100],
      [4, -88],
    ],
    hand: 'none',
  },
  eye: 'open',
}

function JoesCareAndBiddysWedding({ uid }: ArtProps) {
  const m = marks()
  const id = { left: `${uid}-left`, right: `${uid}-right` }
  return (
    <>
      <defs>
        <clipPath id={id.left}>
          <rect x={0} y={0} width={GUTTER.x0} height={H} />
        </clipPath>
        <clipPath id={id.right}>
          <rect x={GUTTER.x1} y={0} width={W - GUTTER.x1} height={H} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.025 })}>
        {/* ── LEFT: Joe's care ── */}
        <g clipPath={`url(#${id.left})`}>
          <path d={m.roomWall} fill={PAPER} />
          <rect x={0} y={ROOM_FLOOR} width={GUTTER.x0} height={4} fill={INK} />
          <path d={m.roomFloor} fill={PAPER} />
          {/* the window, its blind half down, and the light beyond */}
          <rect
            x={WIN.x0 - 6}
            y={WIN.y0 - 6}
            width={WIN.x1 - WIN.x0 + 12}
            height={WIN.y1 - WIN.y0 + 12}
            fill={INK}
          />
          <rect
            x={WIN.x0}
            y={WIN.blind}
            width={WIN.x1 - WIN.x0}
            height={WIN.y1 - WIN.blind}
            fill={PAPER}
          />
          <path
            d={`M${(WIN.x0 + WIN.x1) / 2} ${WIN.blind}V${WIN.y1}M${WIN.x0} ${(WIN.blind + WIN.y1) / 2}H${WIN.x1}`}
            stroke={INK}
            strokeWidth={4}
          />
          <path
            d={`M${WIN.x0} ${WIN.blind - 6}H${WIN.x1}V${WIN.blind}H${WIN.x0}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1}
          />
          <path d={`M${WIN.x1 - 14} ${WIN.blind}V${WIN.blind + 30}`} stroke={INK} strokeWidth={1} />
          <rect x={WIN.x0 - 10} y={WIN.y1} width={WIN.x1 - WIN.x0 + 20} height={6} fill={PAPER} />

          {/* the writing-table in the corner, "cumbered with little bottles" */}
          <g fill={INK} stroke={PAPER} strokeWidth={1.4}>
            <rect x={246} y={216} width={64} height={7} />
            <rect x={250} y={223} width={5} height={30} />
            <rect x={300} y={223} width={5} height={30} />
          </g>
          <g fill={PAPER} stroke={INK} strokeWidth={1}>
            {[254, 264, 276, 288, 298].map((x, i) => (
              <path
                key={x}
                d={`M${x} 216V${206 - (i % 2) * 4}H${x + 2}V${202 - (i % 2) * 4}H${x + 5}V${206 - (i % 2) * 4}H${x + 7}V216Z`}
              />
            ))}
          </g>

          {/* Joe at the window, his back to Pip */}
          <Person pose={JOE_AT_WINDOW} at={[352, 318]} />

          {/* Pip in his bed, moved into the sitting-room, "divested of its curtains" */}
          <g fill={INK} stroke={PAPER} strokeWidth={1.6}>
            <rect x={BED.x0} y={BED.top - 84} width={9} height={BED.feet - BED.top + 84} />
          </g>
          <path
            d={`M${BED.x0 + 8} ${BED.top}C${BED.x0 + 6} ${BED.top - 50} ${BED.x0 + 20} ${BED.top - 80} ${BED.x0 + 40} ${BED.top - 82}C${BED.x0 + 60} ${BED.top - 60} ${BED.x0 + 70} ${BED.top - 26} ${BED.x0 + 74} ${BED.top}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
          <Person pose={PIP_IN_BED} at={[84, 258]}>
            <Cut parts={[{ ...PRAYER.part, tone: 'ink' }]} />
            <path d={PRAYER.cut} transform={PRAYER.t} fill={PAPER} />
          </Person>
          <path
            d={`M${BED.x0 + 70} ${BED.top - 12}C${BED.x0 + 110} ${BED.top - 18} ${BED.x0 + 150} ${BED.top - 14} ${BED.x1 - 30} ${BED.top - 20}C${BED.x1 - 16} ${BED.top - 20} ${BED.x1 - 8} ${BED.top - 10} ${BED.x1} ${BED.top}L${BED.x1} ${BED.top + 24}L${BED.x0 + 70} ${BED.top + 24}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
          <g fill={INK} stroke={PAPER} strokeWidth={1.6}>
            <rect x={BED.x0} y={BED.top + 22} width={BED.x1 - BED.x0} height={10} />
            <rect x={BED.x1 - 6} y={BED.top - 40} width={9} height={BED.feet - BED.top + 40} />
          </g>
        </g>

        {/* ── RIGHT: Biddy's wedding ── */}
        <g clipPath={`url(#${id.right})`}>
          <rect x={GUTTER.x1} y={0} width={W - GUTTER.x1} height={LANE} fill={PAPER} />
          {/* larks, high over the corn, in the open sky between the forge and
              the house (two were first drawn on the black roof, where they
              could not be seen) */}
          <path
            d="M552 84q3.6 -3.6 7.2 0q3.6 -3.6 7.2 0M576 70q3 -3 6 0q3 -3 6 0M580 100q3 -3 6 0q3 -3 6 0"
            fill="none"
            stroke={INK}
            strokeWidth={1.6}
            strokeLinecap="round"
          />
          {/* the house, its whitewashed wall and dark roof */}
          <path
            d={`M${HOUSE.x0} ${HOUSE.eaves}L${HOUSE.x0 + 30} 30H${W}V${HOUSE.eaves}Z`}
            fill={INK}
          />
          <path d={m.houseWall} fill={INK} />
          <path d={`M${HOUSE.x0} ${HOUSE.eaves}V${LANE}`} stroke={INK} strokeWidth={2.4} />
          {/* the parlour window, open, its white curtains fluttering, gay with flowers */}
          <rect
            x={PARLOUR.x0 - 5}
            y={PARLOUR.y0 - 5}
            width={PARLOUR.x1 - PARLOUR.x0 + 10}
            height={PARLOUR.y1 - PARLOUR.y0 + 10}
            fill={INK}
          />
          <path
            d={`M${PARLOUR.x0} ${PARLOUR.y0}C${PARLOUR.x0 - 10} ${PARLOUR.y0 + 30} ${PARLOUR.x0 - 2} ${PARLOUR.y0 + 56} ${PARLOUR.x0 + 10} ${PARLOUR.y1 - 8}L${PARLOUR.x0 + 24} ${PARLOUR.y1 - 8}C${PARLOUR.x0 + 18} ${PARLOUR.y0 + 40} ${PARLOUR.x0 + 22} ${PARLOUR.y0 + 18} ${PARLOUR.x0 + 30} ${PARLOUR.y0}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <path
            d={`M${PARLOUR.x1} ${PARLOUR.y0}C${PARLOUR.x1 + 8} ${PARLOUR.y0 + 30} ${PARLOUR.x1 + 2} ${PARLOUR.y0 + 56} ${PARLOUR.x1 - 10} ${PARLOUR.y1 - 8}L${PARLOUR.x1 - 24} ${PARLOUR.y1 - 8}C${PARLOUR.x1 - 18} ${PARLOUR.y0 + 40} ${PARLOUR.x1 - 22} ${PARLOUR.y0 + 18} ${PARLOUR.x1 - 30} ${PARLOUR.y0}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <rect
            x={PARLOUR.x0 - 8}
            y={PARLOUR.y1}
            width={PARLOUR.x1 - PARLOUR.x0 + 16}
            height={6}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
          <g fill={PAPER} stroke={INK} strokeWidth={0.8}>
            {[764, 778, 793, 808, 822].map((x, i) => (
              <circle key={x} cx={x} cy={PARLOUR.y1 - 6 - (i % 2) * 4} r={4.2} />
            ))}
          </g>
          <g fill={INK}>
            {[764, 778, 793, 808, 822].map((x, i) => (
              <circle key={x} cx={x} cy={PARLOUR.y1 - 6 - (i % 2) * 4} r={1.2} />
            ))}
          </g>

          {/* the forge, shut up and still */}
          <path
            d={`M${FORGE.x0} ${FORGE.eaves}L${FORGE.x1 + 8} ${FORGE.eaves}L${FORGE.x1 + 8} ${LANE}L${FORGE.x0} ${LANE}Z`}
            fill={INK}
          />
          <path
            d={`M${FORGE.x0} ${FORGE.eaves}L${FORGE.x0 + 50} ${FORGE.eaves - 30}L${FORGE.x1 + 14} ${FORGE.eaves}Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
          <rect
            x={FORGE.x0 + 14}
            y={FORGE.eaves - 56}
            width={14}
            height={34}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
          <rect
            x={FORGE.x0 + 12}
            y={150}
            width={78}
            height={LANE - 150}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.6}
          />
          <path
            d={`M${FORGE.x0 + 51} 150V${LANE}M${FORGE.x0 + 25} 150V${LANE}M${FORGE.x0 + 77} 150V${LANE}M${FORGE.x0 + 12} 196H${FORGE.x0 + 90}`}
            stroke={PAPER}
            strokeWidth={1}
          />

          {/* the limes: the paper edge is cut first and the leaves inked over
              it, so that only the outside of the mass keeps an edge */}
          <path d={m.limes} fill={PAPER} stroke={PAPER} strokeWidth={3.4} />
          <path d={m.limes} fill={INK} />
          <path d={m.limeCuts} fill={PAPER} />

          {/* the lane */}
          <rect x={GUTTER.x1} y={LANE} width={W - GUTTER.x1} height={H - LANE} fill={INK} />
          <path d={m.lane} fill={PAPER} />

          {/* Pip, come home, and Joe and Biddy, arm in arm */}
          <Person pose={PIP_HOME} at={[556, 322]} />
          <Person pose={JOE_SMART} at={[722, 322]} flip />
          <Person pose={BIDDY} at={[664, 322]} flip />
        </g>

        {/* the gutter between the two scenes */}
        <rect x={GUTTER.x0} y={-10} width={GUTTER.x1 - GUTTER.x0} height={H + 20} fill={PAPER} />
        <path d={`M${GUTTER.x0} 0V${H}M${GUTTER.x1} 0V${H}`} stroke={INK} strokeWidth={2.4} />
      </g>
    </>
  )
}

export const joesCareAndBiddysWedding: LinocutArt = {
  width: W,
  height: H,
  Draw: JoesCareAndBiddysWedding,
}

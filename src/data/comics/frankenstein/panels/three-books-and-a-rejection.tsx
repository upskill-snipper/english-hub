import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  AGATHA_HAIR,
  AGATHA_HAIR_LINES,
  CreatureHead,
  DE_LACEY_CUTS,
  DE_LACEY_HAIR,
  DE_LACEY_HAIR_LINES,
  DE_LACEY_LASHES,
  FELIX_CUTS,
  FELIX_HAIR,
  FELIX_HAIR_CUTS,
  Figure,
  GRIP_HAND,
  HEAD_CREATURE,
  HEAD_DE_LACEY,
  HEAD_FELIX,
  HEAD_WOMAN,
  NECKCLOTH,
  OPEN_HAND,
  SAFIE_HAIR,
  cloak,
  gown,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'
import {
  BackDoor,
  COT,
  DOOR,
  Guitar,
  HOVEL_ROOF,
  Hearth,
  WallSection,
  roomFloor,
} from './de-lacey-cottage'

/**
 * Chapter 15: "Three books and a rejection", the ninth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/frankenstein.ts); the cottage and hovel are the ones
 * in ./de-lacey-cottage.tsx, the same room as "Learning to be human".
 *
 * - The three books: "I found on the ground a leathern portmanteau,
 *   containing several articles of dress and some books ... they consisted of
 *   'Paradise Lost,' a volume of 'Plutarch's Lives,' and the 'Sorrows of
 *   Werter.'" And "some papers in the pocket of the dress which I had taken
 *   from your laboratory ... It was your journal". So the three books, the
 *   loose pages of the journal and the portmanteau lie on the straw of the
 *   empty hovel.
 * - "One day, when the sun shone on the red leaves that strewed the ground
 *   ... Safie, Agatha, and Felix departed on a long country walk, and the old
 *   man ... was left alone"; "removed the planks which I had placed before my
 *   hovel". So it is a sunny autumn day, the hovel stands open, and the red
 *   leaves outside are the spot colour.
 * - "laying aside the instrument, he sat absorbed in reflection": the guitar
 *   leans against the wall.
 * - "seizing the hand of the old man, I cried, 'Now is the time!--save and
 *   protect me!'"; "'Great God!' exclaimed the old man, 'who are you?'"; "At
 *   that instant the cottage door was opened, and Felix, Safie, and Agatha
 *   entered ... Agatha fainted; and Safie, unable to attend to her friend,
 *   rushed out of the cottage. Felix darted forward". So the Creature kneels
 *   at the blind old man's knee with the old man's hand in both of his; De
 *   Lacey, his eye shut, turns his face up, startled; the door stands open
 *   behind them; Agatha sinks against the doorpost; Safie is running out into
 *   the sunlight; and Felix darts in, one hand reaching out.
 * - Safeguarding: "struck me violently with a stick" is not drawn. Felix
 *   carries the stick low behind him, the moment before; no blow is struck on
 *   the page.
 *
 * The people are cut from ./people.tsx. Seeds: 901 (the room's wall), 902
 * (the floor), 903 (the hovel), 904 (the sky), 905 (the leaves), 906 (the
 * wall section), 907 (the straw), 908 (the day outside the door).
 */

const W = 860
const H = 340
const FL = COT.floor
/** The day, coming in at the open door. */
const DAY: P = [632, 200]

const roomLight = (x: number, y: number) =>
  clamp(
    0.4 +
      0.75 * clamp(1 - Math.hypot(x - DAY[0], (y - DAY[1]) * 1.1) / 300) +
      0.3 * clamp(1 - Math.hypot(x - 818, y - 262) / 160),
  )

type Marks = {
  wall: string
  floor: string
  hovel: string
  roofPlanks: string
  sky: string
  leaves: string
  outside: string
  straw: string
}

/** Scattered leaves: small lens shapes, fill with RED. */
function leafScatter(
  seed: number,
  n: number,
  box: { x0: number; x1: number; y0: number; y1: number },
) {
  const r = rng(seed)
  let d = ''
  for (let i = 0; i < n; i++) {
    const x = between(r, box.x0, box.x1)
    const y = between(r, box.y0, box.y1)
    const a = between(r, 0, Math.PI)
    const len = between(r, 4.6, 6.6)
    d += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len * 0.5, between(r, 1.7, 2.3))
  }
  return d
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(
    rng(901),
    { x0: COT.wallX1, x1: COT.hearthX, y0: COT.ceil + 2, y1: FL },
    (x, y) => clamp(1.05 - roomLight(x, y)),
    { spacing: 6.4, len: [20, 60], gap: [3, 12], max: 3.4 },
  )
  const floor = roomFloor(902, (x, y) => 0.55 * roomLight(x, y - 70))
  const r = rng(903)
  let hovel = ''
  for (let i = 0; i < 16; i++) {
    const x = between(r, 40, 186)
    const top = 198 - (x / 196) * 74
    const y = between(r, top + 8, FL - 30)
    hovel += gouge(x, y, x + between(r, -1, 1), y + between(r, 8, 22), 0.7)
  }
  let roofPlanks = ''
  for (let x = 10; x < 196; x += 16)
    roofPlanks += gouge(x, 198 - (x / 196) * 74 - 12, x + 12, 198 - ((x + 12) / 196) * 74 - 12, 0.7)
  // A clear autumn sky over the hovel's roof: cut nearly to paper.
  const sky = gougeField(
    rng(904),
    { x0: 0, x1: COT.wallX0, y0: 4, y1: 190 },
    (x, y) => 0.55 + 0.4 * (y / 190),
    { spacing: 6.6, len: [30, 90], gap: [3, 10], max: 4 },
  )
  // Only at the hovel's open end, well away from anyone: red specks by a
  // figure could be read as something other than leaves. Inside the frame's
  // margin (27 September 2026): they were first scattered from x 4, under
  // the border and the push-in's crop, and too small to see at panel size,
  // while the alt text promised them.
  const leaves = leafScatter(905, 9, { x0: 14, x1: 22, y0: 280, y1: 292 })
  // The day outside the door: a field and a far line of trees under the sun.
  const t = rng(908)
  let outside = ''
  for (let y = 124; y < 238; y += 7) {
    let x = DOOR.x0 + between(t, -20, 0)
    while (x < DOOR.x1) {
      const len = between(t, 20, 40)
      outside += gouge(x, y, x + len, y + between(t, -0.5, 0.5), 0.5 + (y / 238) * 0.4)
      x += len + between(t, 6, 18)
    }
  }
  const s = rng(907)
  let straw = ''
  for (let i = 0; i < 40; i++) {
    const x = between(s, 30, 190)
    const y = between(s, FL - 6, FL + 8)
    const a = between(s, -0.5, 0.5)
    const len = between(s, 7, 16)
    straw += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, between(s, 0.6, 1))
  }
  cached = { wall, floor, hovel, roofPlanks, sky, leaves, outside, straw }
  return cached
}

// ── The books, the journal and the portmanteau, on the straw of the hovel ────
/** Three books: two lying one on the other, the third open, face down. */
const BOOKS = 'M70 296V284H112V296ZM76 284V274H114V284ZM120 296L138 284L156 296Z'
const BOOK_CUTS = 'M72 290H110M78 279H112M138 286L138 296'
/** The loose pages of the journal. */
const PAGES = 'M160 296L166 286L186 288L182 297ZM150 286L170 280L174 288L154 293Z'
const PAGE_LINES = 'M168 290L180 291M166 293L178 294M156 287L168 284M157 290L169 287'
/** The leathern portmanteau. */
const PORTMANTEAU = 'M34 296V272Q34 266 40 266H60Q66 266 66 272V296Z'
const PORTMANTEAU_CUTS = 'M42 266Q50 256 58 266M34 280H66'

// ── De Lacey, startled in his chair ─────────────────────────────────────────
const DL_HEAD = { d: HEAD_DE_LACEY, at: [312, 176] as P, rot: -10, scale: 0.98 }
const DL_T = headAt(1, DL_HEAD.at, DL_HEAD.rot, DL_HEAD.scale)
const DE_LACEY: Part[] = man({
  facing: 1,
  neck: [306, 200],
  hip: [298, 256],
  head: DL_HEAD,
  body: { width: 30, tails: 30, front: 6 },
  arm: 8,
  leg: 9.5,
  near: {
    arm: [
      [308, 208],
      [330, 232],
      [350, 232],
    ],
    leg: [
      [300, 256],
      [334, 258],
      [334, 296],
    ],
  },
  far: {
    arm: [
      [302, 208],
      [296, 236],
      [312, 252],
    ],
    leg: [
      [296, 258],
      [326, 262],
      [324, 296],
    ],
    hand: { parts: OPEN_HAND, scale: 0.75 },
  },
})
const CHAIR = 'M272 150H279V298H272ZM270 256H318V262H270ZM314 262L318 298'

// ── The Creature, on his knees, the old man's hand in both of his ───────────
const CR_HEAD = { d: HEAD_CREATURE, at: [392, 140] as P, rot: -6, scale: 1.3 }
const CR_T = headAt(-1, CR_HEAD.at, CR_HEAD.rot, CR_HEAD.scale)
const CR_NECK: P = [398, 176]
const CR_HIP: P = [414, 240]
const CR_NEAR: P[] = [
  [394, 186],
  [372, 214],
  [358, 228],
]
const CR_FAR: P[] = [
  [402, 184],
  [380, 210],
  [362, 222],
]
const CREATURE: Part[] = man({
  facing: -1,
  neck: CR_NECK,
  hip: CR_HIP,
  head: CR_HEAD,
  robe: cloak(CR_NECK, CR_HIP, { width: 50, drop: 50, flare: 16 }),
  body: { width: 46 },
  arm: 11,
  leg: 12,
  feet: false,
  near: {
    arm: CR_NEAR,
    leg: [
      [410, 242],
      [384, 290],
      [440, 294],
    ],
    hand: { parts: GRIP_HAND, rot: 10, scale: 1.25 },
  },
  far: {
    arm: CR_FAR,
    leg: [
      [418, 242],
      [398, 290],
      [456, 294],
    ],
    hand: { parts: GRIP_HAND, rot: 20, scale: 1.25 },
  },
})

// ── Felix, darting in at the door ───────────────────────────────────────────
const FX_HEAD = { d: HEAD_FELIX, at: [534, 152] as P, rot: -4, scale: 1.05 }
const FX_T = headAt(-1, FX_HEAD.at, FX_HEAD.rot, FX_HEAD.scale)
const FX_STICK_ARM: P[] = [
  [548, 186],
  [566, 210],
  [580, 228],
]
const FELIX: Part[] = man({
  facing: -1,
  neck: [542, 178],
  hip: [560, 240],
  head: FX_HEAD,
  hair: FELIX_HAIR,
  body: { width: 30, tails: 44, swing: 10 },
  arm: 8.5,
  leg: 9.5,
  near: {
    arm: [
      [538, 186],
      [512, 198],
      [488, 196],
    ],
    leg: [
      [556, 240],
      [530, 268],
      [520, 298],
    ],
    hand: { parts: OPEN_HAND, rot: -6, scale: 1.05 },
  },
  far: {
    arm: FX_STICK_ARM,
    leg: [
      [562, 242],
      [584, 272],
      [604, 296],
    ],
    hand: { parts: GRIP_HAND, scale: 1 },
  },
})
/** The stick in his hand, held low behind him. */
const STICK = 'M578 224L622 266'

// ── Agatha, swooning against the doorpost ─────────────────────────────────
const AG_HEAD = { d: HEAD_WOMAN, at: [688, 146] as P, rot: 26, scale: 0.9 }
const AG_T = headAt(-1, AG_HEAD.at, AG_HEAD.rot, AG_HEAD.scale)
const AG_BROW_ARM: P[] = [
  [690, 176],
  [672, 174],
  [674, 152],
]
const AGATHA: Part[] = [
  {
    d: line([
      [696, 178],
      [702, 206],
      [700, 230],
    ]),
    w: 6.5,
  },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(
      [
        [702, 206],
        [700, 230],
      ],
      -1,
      { parts: OPEN_HAND, scale: 0.72 },
    ),
  })),
  { d: gown([696, 168], [692, 196], FL, -1, { front: 22, back: 22, shoulder: 20 }) },
  { d: HEAD_WOMAN, t: AG_T },
  { d: line(AG_BROW_ARM), w: 6.5, sep: 1.4 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(AG_BROW_ARM, -1, { parts: OPEN_HAND, rot: 40, scale: 0.72 }),
  })),
]

// ── Safie, running out into the sun ────────────────────────────────────────
const SF_HEAD = { d: HEAD_WOMAN, at: [644, 172] as P, rot: 10, scale: 0.5 }
const SF_T = headAt(1, SF_HEAD.at, SF_HEAD.rot, SF_HEAD.scale)
/** Her skirt, blown back as she runs. */
const SF_SKIRT = 'M640 182Q645 180 649 183L653 202L662 236L652 240L628 238L622 232L636 202Z'
const SAFIE: Part[] = [
  {
    d: line([
      [642, 188],
      [632, 200],
      [624, 198],
    ]),
    w: 4.2,
  },
  {
    d: line([
      [650, 236],
      [662, 246],
    ]),
    w: 4.6,
  },
  {
    d: line([
      [634, 236],
      [624, 244],
      [618, 240],
    ]),
    w: 4.6,
  },
  { d: SF_SKIRT },
  { d: HEAD_WOMAN, t: SF_T },
  { d: SAFIE_HAIR, t: SF_T },
  {
    d: line([
      [647, 188],
      [656, 200],
      [666, 196],
    ]),
    w: 4.2,
    sep: 1,
  },
]
/** A tree outside, in its autumn leaves. */
const TREE_TRUNK = 'M614 246L615 150M615 174L624 158M615 196L606 182'
const TREE_CROWN =
  'M598 140C594 132 600 124 608 126C610 118 620 116 624 122C630 118 638 124 634 132C640 138 636 148 628 146C624 154 612 154 608 148C602 152 594 148 598 140Z'
const TREE_CUTS = 'M606 134L612 138M618 128L620 134M624 140L628 136M612 144L616 146'

function ThreeBooksAndARejection({ uid }: ArtProps) {
  const m = marks()
  const hovelClip = `${uid}-hovel`
  return (
    <>
      <defs>
        <clipPath id={hovelClip}>
          <path d={`M0 190L${COT.wallX0} 116V${FL}H0Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 210], push: 1.03 })}>
        {/* the autumn day over the hovel's roof */}
        <path d={m.sky} fill={PAPER} />

        {/* the room, lit from the open door */}
        <rect
          x={COT.wallX1}
          y={COT.ceil}
          width={COT.hearthX - COT.wallX1}
          height={FL - COT.ceil}
          fill={PAPER}
        />
        <path d={m.wall} fill={INK} />
        <rect x={COT.wallX1} y={0} width={W - COT.wallX1} height={COT.ceil} fill={INK} />
        <path d={`M${COT.wallX1} ${COT.ceil}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d="M300 0V26M420 0V26M540 0V26M660 0V26" stroke={PAPER} strokeWidth={LINE.fine} />
        <rect x={COT.wallX1} y={FL} width={W - COT.wallX1} height={H - FL} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={`M${COT.wallX1} ${FL}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <Hearth />

        {/* the door flung open on the sunny day and the red leaves */}
        <BackDoor uid={uid} open>
          <path d={m.outside} fill={INK} />
          <path d={TREE_TRUNK} stroke={INK} strokeWidth={3.4} fill="none" strokeLinecap="round" />
          <path d={TREE_CROWN} fill={RED} />
          <path d={TREE_CUTS} stroke={PAPER} strokeWidth={1} />
          <path d={`M${DOOR.x0} 240Q630 236 ${DOOR.x1} 242V${FL}H${DOOR.x0}Z`} fill={PAPER} />
          <path
            d={`M${DOOR.x0} 240Q630 236 ${DOOR.x1} 242`}
            stroke={INK}
            strokeWidth={LINE.fine}
            fill="none"
          />
        </BackDoor>

        {/* Safie, running out into the sun */}
        <Figure parts={SAFIE} halo={1.4} />

        {/* the guitar, laid aside against the wall */}
        <Guitar at="translate(250 282) rotate(84)" />

        {/* De Lacey in his chair */}
        <path d={CHAIR} fill={INK} stroke={INK} strokeWidth={2} />
        <Figure parts={DE_LACEY}>
          <path d={DE_LACEY_HAIR} transform={DL_T} fill={PAPER} />
          <path
            d={DE_LACEY_HAIR_LINES}
            transform={DL_T}
            fill="none"
            stroke={INK}
            strokeWidth={0.8}
          />
          <path d={DE_LACEY_CUTS + NECKCLOTH} transform={DL_T} fill={PAPER} />
          <path d={DE_LACEY_LASHES} transform={DL_T} stroke={PAPER} strokeWidth={0.7} />
        </Figure>

        {/* the Creature on his knees, holding the old man's hand */}
        <Figure parts={CREATURE}>
          <path
            d={gouge(420, 196, 438, 284, 1.1, -1.2) + gouge(406, 206, 414, 286, 1, -0.4)}
            fill={PAPER}
          />
        </Figure>
        <CreatureHead t={CR_T} />

        {/* Agatha, swooning against the doorpost, her hand to her brow */}
        <Figure parts={AGATHA}>
          <path d={AGATHA_HAIR} transform={AG_T} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <path d={AGATHA_HAIR_LINES} transform={AG_T} fill="none" stroke={INK} strokeWidth={0.7} />
          <path
            d={gouge(6.8, -3.2, 12.8, -2.6, 0.5, 1) + gouge(9.8, 10.4, 14.6, 10.4, 0.45)}
            transform={AG_T}
            fill={PAPER}
          />
          <path
            d={gouge(684, 204, 674, 294, 0.9, 1) + gouge(696, 206, 700, 294, 0.8, -0.6)}
            fill={PAPER}
          />
        </Figure>

        {/* Felix, darting forward, the stick low in his hand */}
        <path d={STICK} stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
        <path d={STICK} stroke={INK} strokeWidth={4.6} strokeLinecap="round" />
        <Figure parts={FELIX}>
          <path d={FELIX_HAIR_CUTS + FELIX_CUTS + NECKCLOTH} transform={FX_T} fill={PAPER} />
          <path d={gouge(556, 196, 566, 236, 0.9, -0.8)} fill={PAPER} />
        </Figure>
        <Figure
          parts={GRIP_HAND.map((q) => ({
            ...q,
            t: handAt(FX_STICK_ARM, -1, { parts: GRIP_HAND }),
          }))}
        />

        {/* the hovel, open to the day, the books and the journal on its straw */}
        <path d={HOVEL_ROOF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.roofPlanks} fill={PAPER} />
        <path d={`M0 190L${COT.wallX0} 116V${FL}H0Z`} fill={INK} />
        <g clipPath={`url(#${hovelClip})`}>
          <path d={m.hovel} fill={PAPER} />
          {/* "removed the planks which I had placed before my hovel": its end open */}
          <rect x={0} y={180} width={28} height={FL - 180} fill={PAPER} />
          <path d={wedge(28, 196, 28, FL, 3, 3)} fill={INK} />
          <path d={m.leaves} fill={RED} />
        </g>
        <path d={m.straw} fill={PAPER} />
        <path d={PORTMANTEAU} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={PORTMANTEAU_CUTS} fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path d={BOOKS} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={BOOK_CUTS} stroke={INK} strokeWidth={1} />
        <path d={PAGES} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        <path d={PAGE_LINES} stroke={INK} strokeWidth={0.7} />
        <WallSection seed={906} />
      </g>
    </>
  )
}

export const threeBooksAndARejection: LinocutArt = {
  width: W,
  height: H,
  Draw: ThreeBooksAndARejection,
}

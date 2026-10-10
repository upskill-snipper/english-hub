import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { pointingHand } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Cut, Person, type P, type Pose } from './people'

/**
 * Chapters 15 and 16: "The attack on Mrs Joe", the fifth moment in the
 * guide's timeline. The attack is never drawn, and neither is the kitchen on
 * the night of it: the panel shows what follows, as this text's rules ask
 * (../index.ts), in the scene that ends Chapter 16. Every detail is from the
 * held edition (src/data/full-texts/great-expectations.ts):
 *
 * - "When, at last, she came round so far as to be helped downstairs, it was
 *   still necessary to keep my slate always by her, that she might indicate
 *   in writing what she could not indicate in speech." So Mrs Joe sits in a
 *   high-backed chair in the kitchen, her slate on her knees.
 * - "Again and again and again, my sister had traced upon the slate, a
 *   character that looked like a curious T, and then with the utmost
 *   eagerness had called our attention to it". So the slate is turned to us,
 *   the T chalked large on it, cut in paper, and her near hand points to it.
 * - "When my sister found that Biddy was very quick to understand her, this
 *   mysterious sign reappeared on the slate. Biddy looked thoughtfully at
 *   it". So Biddy, the kit's Biddy (./people.tsx), stands at her chair and
 *   looks at the slate. She came "with a small speckled box", "newly out of
 *   mourning" (Chapter 17), so her gown is dark.
 * - "she could only signify him by his hammer. We told him why we wanted him
 *   to come into the kitchen, and he slowly laid down his hammer, wiped his
 *   brow with his arm, took another wipe at it with his apron, and came
 *   slouching out, with a curious loose vagabond bend in the knees"; "After
 *   that day, a day rarely passed without her drawing the hammer on her
 *   slate, and without Orlick's slouching in and standing doggedly before
 *   her". So Orlick, the kit's, in his leather apron, with nothing in his
 *   hands, stands before her with his knees bent and his eyes on the ground
 *   ("He always slouched, locomotively, with his eyes on the ground",
 *   Chapter 15). The hammer itself is not drawn.
 * - Joe and Pip, the apprentice, followed Biddy into the forge and back:
 *   they stand by the open door to the forge on the right, in their shirt
 *   sleeves and leather aprons, watching.
 * - The kitchen is drawn plainly, as the text leaves it: the fire in its
 *   grate, a dresser of plates, a window on the marsh light, the door to the
 *   forge. The spot colour is the kitchen fire, low on the left, far from any
 *   face or hand.
 *
 * WHAT IS NOT DRAWN. The attack, the night it happened, the floor where she
 * was found, the leg-iron that lay beside her and any injury: she is drawn
 * as she is in this scene, sitting up and eager, with no mark on her. The
 * kit gives Mrs Joe a flush on the cheekbone by default ("a prevailing
 * redness of skin", Chapter 2); here it is turned off (`flush: false`),
 * because any red on her face after the attack reads as a wound.
 *
 * Seeds: 1601 (the wall), 1602 (the floor), 1603 (the fire's light), 1604
 * (the window's light), 1605 (the dresser).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const FLOOR = 262
/** The fireplace on the left: its surround, its opening, its shelf. */
const HEARTH = { x0: 10, x1: 128, shelf: 126, ox0: 32, ox1: 106, otop: 182 }
/** The fire's heart. */
const FIRE: P = [69, 246]
/** The window behind Orlick, on the marsh light. */
const WIN = { x0: 328, x1: 424, y0: 48, y1: 166 }
/** The dresser against the back wall, between the window and the door. */
const DRESSER = { x0: 456, x1: 548, top: 70, board: 178 }
/** The open door to the forge, on the right. */
const DOOR = { x0: 742, x1: 830, top: 52 }

/** Mrs Joe's chair, her slate, and the people's places. */
const MRS_JOE_AT: P = [204, 322]
/** Her scale on the panel: the Person's scale times the kit's size for her. */
const MRS_JOE_S = 1.3 * 1.02
const SLATE = { cx: 272, cy: 218, w: 58, h: 48, tilt: -4 }

function light(x: number, y: number) {
  const fire = clamp(1 - Math.hypot(x - FIRE[0], (y - FIRE[1]) * 1.2) / 300) * 0.9
  const win = clamp(1 - Math.hypot((x - (WIN.x0 + WIN.x1) / 2) * 0.8, (y - 110) * 1.1) / 260) * 0.8
  return Math.max(fire, win, 0.05)
}

type Marks = {
  wall: string
  floor: string
  fireGlow: string
  winLight: string
  plates: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(1601), { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light, {
    spacing: 6,
    len: [14, 52],
    gap: [6, 18],
    max: 3.4,
  })
  // The floor: boards running to a point by the window.
  const f = rng(1602)
  let floor = ''
  const V: P = [440, 40]
  for (let xt = -700; xt < 1600; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.25, 0.7))
      const x0 = xt + (xb - xt) * t0
      const x1 = xt + (xb - xt) * t1
      const L = light((x0 + x1) / 2, FLOOR + 10)
      floor += wedge(
        x0,
        FLOOR + (H - FLOOR) * t0,
        x1,
        FLOOR + (H - FLOOR) * t1,
        (0.4 + t0 * 2.2) * (0.5 + L),
        (0.4 + t1 * 2.2) * (0.5 + L),
      )
      t0 = t1 + between(f, 0.03, 0.08)
    }
  }
  const fireGlow = rays(rng(1603), FIRE[0], FIRE[1] - 8, {
    from: 26,
    to: 58,
    every: 10,
    width: 1.8,
  })
  // Daylight through the window: slanting cuts on the floor below it.
  const w = rng(1604)
  let winLight = ''
  for (let i = 0; i < 9; i++) {
    const x = WIN.x0 + 6 + i * 10 + between(w, -2, 2)
    winLight += gouge(x, FLOOR + 8, x + 26, FLOOR + 50 + between(w, -6, 6), 1.1)
  }
  // The plates on the dresser's shelves: rounds of paper with a cut rim.
  const r = rng(1605)
  let plates = ''
  for (const y of [96, 136]) {
    for (let x = DRESSER.x0 + 14; x < DRESSER.x1 - 8; x += 19 + between(r, -1, 1)) {
      plates += `M${n(x - 8)} ${y}a8 8 0 1 0 16 0a8 8 0 1 0 -16 0Z`
    }
  }
  cached = { wall, floor, fireGlow, winLight, plates }
  return cached
}

// ── THE ROOM ────────────────────────────────────────────────────────────────

/** The fireplace, the low kitchen fire in its grate, and the shelf above. */
function Hearth({ glow }: { glow: string }) {
  const { x0, x1, shelf, ox0, ox1, otop } = HEARTH
  return (
    <g>
      <path
        d={`M${x0} ${FLOOR + 4}V${shelf}H${x1}V${FLOOR + 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${ox0} ${FLOOR + 4}V${otop + 12}Q${(ox0 + ox1) / 2} ${otop - 8} ${ox1} ${otop + 12}V${FLOOR + 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <rect x={x0 - 8} y={shelf - 8} width={x1 - x0 + 16} height={8} fill={PAPER} />
      <path d={glow} fill={PAPER} />
      {/* the grate's bars, and the fire low in it */}
      <path
        d={`M${ox0 + 10} ${FLOOR - 4}H${ox1 - 10}M${ox0 + 10} ${FLOOR - 12}H${ox1 - 10}M${ox0 + 18} ${FLOOR - 14}V${FLOOR}M${ox1 - 18} ${FLOOR - 14}V${FLOOR}`}
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <g fill={RED}>
        <path d="M46 252C46 244 54 238 60 243C64 235 76 235 80 243C86 239 94 244 92 252Z" />
        <path className="lc-flicker" d="M56 245C53 236 58 228 61 220C66 229 70 236 66 245Z" />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.85, delay: 0.3 })}
          d="M72 245C70 238 74 232 76 226C80 232 83 238 80 245Z"
        />
      </g>
      {/* a candlestick and a canister on the shelf */}
      <path d="M30 118V104H36V118ZM26 118H40V114H26Z" fill={PAPER} stroke={INK} strokeWidth={0.8} />
      <path d="M92 118V100Q100 96 108 100V118Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
    </g>
  )
}

/** The window, on the grey marsh light: four panes, its sill. */
function Window() {
  const { x0, x1, y0, y1 } = WIN
  const mx = (x0 + x1) / 2
  const my = (y0 + y1) / 2
  return (
    <g>
      <rect x={x0 - 6} y={y0 - 6} width={x1 - x0 + 12} height={y1 - y0 + 12} fill={INK} />
      <rect x={x0} y={y0} width={x1 - x0} height={y1 - y0} fill={PAPER} />
      {/* the flat marsh and the low sky beyond */}
      <path d={`M${x0} ${y0 + 92}H${x1}V${y1}H${x0}Z`} fill={INK} />
      <path
        d={`M${x0} ${y0 + 98}H${x1}M${x0 + 6} ${y0 + 106}H${x1 - 20}M${x0 + 30} ${y0 + 114}H${x1 - 4}`}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path d={`M${mx} ${y0}V${y1}M${x0} ${my}H${x1}`} stroke={INK} strokeWidth={4} />
      <rect x={x0 - 12} y={y1 + 4} width={x1 - x0 + 24} height={6} fill={PAPER} />
    </g>
  )
}

/** The dresser: its shelves of plates, its board and its cupboard below. */
function Dresser({ plates }: { plates: string }) {
  const { x0, x1, top, board } = DRESSER
  return (
    <g>
      <rect
        x={x0}
        y={top}
        width={x1 - x0}
        height={FLOOR + 2 - top}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={`M${x0} 112H${x1}M${x0} 152H${x1}`} stroke={PAPER} strokeWidth={2.4} />
      <path d={plates} fill={PAPER} stroke={INK} strokeWidth={1} />
      <rect x={x0 - 6} y={board} width={x1 - x0 + 12} height={7} fill={PAPER} />
      <path
        d={`M${x0 + 8} ${board + 16}H${x1 - 8}V${FLOOR - 6}H${x0 + 8}ZM${(x0 + x1) / 2} ${board + 16}V${FLOOR - 6}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.2}
      />
    </g>
  )
}

/** The door to the forge, open, and the dark forge beyond it. */
function ForgeDoor() {
  const { x0, x1, top } = DOOR
  return (
    <g>
      <rect x={x0 - 6} y={top - 6} width={x1 - x0 + 12} height={FLOOR + 6 - top} fill={PAPER} />
      <rect x={x0} y={top} width={x1 - x0} height={FLOOR - top} fill={INK} />
      {/* the door itself, swung back against the wall */}
      <path
        d={`M${x1 + 6} ${top - 4}L${x1 + 22} ${top + 8}V${FLOOR + 8}L${x1 + 6} ${FLOOR + 2}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the anvil in the dark of the forge */}
      <path
        d="M778 214H812L806 222H788V232H800V240H776V232H786V222H772Z"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.2}
      />
    </g>
  )
}

/** Mrs Joe's high-backed wooden chair. */
function Chair() {
  return (
    <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
      <path d="M180 322V140Q186 134 192 140V238H262V246H192V322Z" />
      <path d="M252 246H260V322H252Z" />
      <path d="M182 168H190M182 196H190" stroke={PAPER} strokeWidth={1} />
    </g>
  )
}

/**
 * The slate on her knees, turned to us: its wooden frame in paper, the slate
 * in ink, and the "curious T" chalked on it in paper, as she has drawn it
 * again and again: a long upright and a bar across the top.
 */
function Slate() {
  const { cx, cy, w, h, tilt } = SLATE
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${tilt})`}>
      <rect
        x={-w / 2 - 4}
        y={-h / 2 - 4}
        width={w + 8}
        height={h + 8}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <rect x={-w / 2} y={-h / 2} width={w} height={h} fill={INK} />
      <path
        d={gouge(-20, -12, 20, -13, 3.4, 0.5) + gouge(0.8, -14, -0.8, 18, 3.2, -0.6)}
        fill={PAPER}
      />
    </g>
  )
}

// ── THE PEOPLE, from the figure kit ─────────────────────────────────────────

/** Mrs Joe in her chair, leaning to the slate, pointing to the T. No flush: see the docblock. */
const MRS_JOE: Pose = {
  look: 'mrsjoe',
  seated: true,
  flush: false,
  eye: 'open',
  body: { neck: [10, -114], hip: [0, -60] },
  head: { at: [17, -134], rot: 16 },
  legs: {
    far: [
      [-2, -60],
      [34, -64],
      [36, -2],
    ],
    near: [
      [2, -60],
      [40, -62],
      [42, -2],
    ],
  },
  // The far hand holds the slate up behind its edge, so it is hidden by it.
  far: {
    pts: [
      [6, -108],
      [24, -98],
      [38, -94],
    ],
    hand: 'none',
  },
  // The near forearm comes down before her; its hand, POINTING_HAND, is cut
  // after the slate, so the finger lies on it.
  near: {
    pts: [
      [12, -108],
      [12, -88],
      [16, -78],
    ],
    hand: 'none',
  },
}
/** Her near hand, in her frame: the knuckles before the slate, the forefinger on it, at the T. */
const POINTING_HAND = pointingHand([16, -78], -14, 1.25, -1)

/** Biddy, at the chair's side, looking thoughtfully at the slate. */
const BIDDY: Pose = {
  look: 'biddy',
  eye: 'down',
  head: { rot: 14 },
  near: {
    pts: [
      [3, -124],
      [12, -102],
      [24, -96],
    ],
    hand: 'mitt',
    deg: 10,
  },
}

/** Orlick, slouching, his knees bent, his eyes on the ground, standing doggedly before her. */
const ORLICK: Pose = {
  look: 'orlick',
  eye: 'down',
  body: { neck: [12, -126], hip: [0, -68] },
  head: { at: [22, -144], rot: 22 },
  legs: {
    far: [
      [-3, -68],
      [4, -36],
      [-4, -3],
    ],
    near: [
      [3, -68],
      [12, -36],
      [6, -3],
    ],
  },
  far: {
    pts: [
      [8, -120],
      [4, -96],
      [8, -72],
    ],
    hand: 'mitt',
    deg: 86,
  },
  near: {
    pts: [
      [14, -120],
      [14, -96],
      [20, -72],
    ],
    hand: 'mitt',
    deg: 80,
  },
}

/** Pip, the apprentice, at the door from the forge, watching. */
const PIP: Pose = { look: 'pip', age: 'youth', dress: 'forge', eye: 'open', head: { rot: 6 } }

/** Joe, behind him, in his leather apron. */
const JOE: Pose = {
  look: 'joe',
  dress: 'forge',
  eye: 'open',
  brow: 'up',
  head: { rot: 4 },
}

function TheAttackOnMrsJoe({ uid }: ArtProps) {
  const m = marks()
  const room = `${uid}-room`
  return (
    <>
      <defs>
        <clipPath id={room}>
          <rect x={0} y={0} width={W} height={FLOOR} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        {/* the kitchen wall, lit by the fire and the window */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 3} width={W} height={3} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.winLight} fill={PAPER} />
        <Window />
        <Dresser plates={m.plates} />
        <ForgeDoor />
        <Hearth glow={m.fireGlow} />

        {/* Biddy at the chair's side */}
        <Person pose={BIDDY} at={[154, 324]} scale={1.26} />
        <Chair />
        {/* Mrs Joe in her chair, her slate held up on her knees, pointing to the T */}
        <Person pose={MRS_JOE} at={MRS_JOE_AT} scale={1.3} />
        <Slate />
        <Cut
          transform={`translate(${MRS_JOE_AT[0]} ${MRS_JOE_AT[1]}) scale(${n(MRS_JOE_S)})`}
          parts={[POINTING_HAND]}
        />
        {/* Orlick, standing doggedly before her */}
        <Person pose={ORLICK} at={[398, 324]} scale={1.3} flip />
        {/* Pip and Joe at the door from the forge */}
        <Person pose={JOE} at={[676, 324]} scale={1.26} flip />
        <Person pose={PIP} at={[614, 324]} scale={1.26} flip />
      </g>
    </>
  )
}

export const theAttackOnMrsJoe: LinocutArt = { width: W, height: H, Draw: TheAttackOnMrsJoe }

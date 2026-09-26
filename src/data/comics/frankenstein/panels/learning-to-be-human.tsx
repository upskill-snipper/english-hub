import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
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
  HOLD_CUTS,
  HOLD_HAND,
  NECKCLOTH,
  OPEN_HAND,
  SAFIE_BRAIDS,
  SAFIE_HAIR,
  WOMAN_CUTS,
  WOMAN_WEEPING_CUTS,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'
import {
  BOARDED,
  BackDoor,
  CHINK_Y,
  COT,
  Guitar,
  HOVEL_ROOF,
  Hearth,
  WallSection,
  roomFloor,
  seatedSkirt,
} from './de-lacey-cottage'

/**
 * Chapters 11 to 13: "Learning to be human", the eighth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/frankenstein.ts); the cottage and hovel are drawn in
 * ./de-lacey-cottage.tsx, which quotes what the text says of them.
 *
 * - "Through this crevice a small room was visible"; "the cottagers had a
 *   means of prolonging light by the use of tapers". So it is evening, the
 *   room lit by its small fire and one taper, and the Creature sits in the
 *   dark hovel with his eye to the chink, the one thread of light on his pale
 *   face. He is drawn from ./people.tsx: the pale face (his yellow skin left
 *   to the words), the long black hair, the straight black lips.
 * - "The book from which Felix instructed Safie was Volney's 'Ruins of
 *   Empires'"; "While I improved in speech, I also learned the science of
 *   letters, as it was taught to the stranger". So Felix sits at the table
 *   reading from an open book, and Safie leans in to follow it; she is
 *   "the Arabian", her raven-black hair "curiously braided", "each cheek
 *   tinged with a lovely pink" (the pink is left to the words; see ./people.tsx).
 * - "the old man again took up the instrument which produced the divine
 *   sounds that had enchanted me"; "the old man played on his guitar, and the
 *   children listened to him" (Chapter 13). So De Lacey, silver-haired and
 *   blind, his eye shut, has his guitar on his knee by the fire.
 * - "The young girl ... took something out of a drawer, which employed her
 *   hands, and she sat down beside the old man" (Chapter 11). So Agatha, her
 *   fair hair in its plait, sits beside him with her work in her hands.
 *
 * Seeds: 801 (the room's wall), 802 (the floor), 803 (the hovel), 804 (the
 * night), 805 (the taper's light), 806 (the wall section), 807 (the straw).
 */

const W = 860
const H = 340
const FL = COT.floor
/** The taper on the table, and the fire: the room's two lights. */
const TAPER: P = [496, 206]
const FIRE: P = [818, 262]

const roomLight = (x: number, y: number) =>
  clamp(
    0.34 +
      0.8 * clamp(1 - Math.hypot(x - TAPER[0], (y - TAPER[1]) * 1.2) / 260) +
      0.6 * clamp(1 - Math.hypot(x - FIRE[0], y - FIRE[1]) / 200),
  )

type Marks = {
  wall: string
  floor: string
  hovel: string
  roofPlanks: string
  night: string
  taper: string
  straw: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "whitewashed and clean": the wall is paper, with ink left in it only
  // where the light of the taper and the fire does not reach.
  const wall = gougeField(
    rng(801),
    { x0: COT.wallX1, x1: COT.hearthX, y0: COT.ceil + 2, y1: FL },
    (x, y) => clamp(1.05 - roomLight(x, y)),
    { spacing: 6.4, len: [20, 60], gap: [3, 12], max: 3.4 },
  )
  const floor = roomFloor(802, (x, y) => 0.5 * roomLight(x, y - 60))
  // The hovel's planks, with the light of the night through their chinks.
  const r = rng(803)
  let hovel = ''
  for (let i = 0; i < 18; i++) {
    const x = between(r, 8, 186)
    const top = 198 - (x / 196) * 74
    const y = between(r, top + 8, FL - 20)
    hovel += gouge(x, y, x + between(r, -1, 1), y + between(r, 8, 22), 0.6)
  }
  let roofPlanks = ''
  for (let x = 10; x < 196; x += 16)
    roofPlanks += gouge(x, 198 - (x / 196) * 74 - 12, x + 12, 198 - ((x + 12) / 196) * 74 - 12, 0.7)
  // The night outside, above the hovel's roof: a scatter of stars.
  const s = rng(804)
  let night = ''
  for (let i = 0; i < 26; i++) {
    const x = between(s, 10, 190)
    const y = between(s, 10, 170 - (x / 196) * 70)
    night += gouge(x - 1.6, y, x + 1.6, y, 0.8) + gouge(x, y - 1.6, x, y + 1.6, 0.8)
  }
  // The taper's light: a ring of short cuts round the flame, in ink on the pale wall.
  const q = rng(805)
  let taper = ''
  for (let a = 0; a < 360; a += 20) {
    const ang = (a + between(q, -5, 5)) * (Math.PI / 180)
    const r0 = between(q, 16, 20)
    taper += gouge(
      TAPER[0] + Math.cos(ang) * r0,
      TAPER[1] + Math.sin(ang) * r0,
      TAPER[0] + Math.cos(ang) * (r0 + between(q, 5, 9)),
      TAPER[1] + Math.sin(ang) * (r0 + between(q, 5, 9)),
      0.7,
    )
  }
  const t = rng(807)
  let straw = ''
  for (let i = 0; i < 46; i++) {
    const x = between(t, 6, 190)
    const y = between(t, FL - 6, FL + 8)
    const a = between(t, -0.5, 0.5)
    const len = between(t, 7, 16)
    straw += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, between(t, 0.6, 1))
  }
  cached = { wall, floor, hovel, roofPlanks, night, taper, straw }
  return cached
}

// ── The Creature in the hovel, his eye to the chink ─────────────────────────
const CR_HEAD = { d: HEAD_CREATURE, at: [170, 176] as P, rot: 0, scale: 1.18 }
const CR_T = headAt(1, CR_HEAD.at, CR_HEAD.rot, CR_HEAD.scale)
const CR_NECK: P = [160, 210]
const CR_HIP: P = [118, 278]
/** His cloak, over his bent back and down to the straw. */
const CR_CLOAK =
  'M150 202C134 208 114 228 102 252C94 268 90 284 92 296L150 296C146 282 146 266 152 250C158 236 166 222 166 210Z'
const CR_KNEE_ARM: P[] = [
  [160, 218],
  [152, 254],
  [178, 262],
]
const CREATURE: Part[] = man({
  facing: 1,
  neck: CR_NECK,
  hip: CR_HIP,
  head: CR_HEAD,
  robe: CR_CLOAK,
  body: { width: 40 },
  arm: 10.5,
  leg: 12,
  near: {
    arm: CR_KNEE_ARM,
    leg: [
      [124, 278],
      [168, 246],
      [176, 294],
    ],
    hand: { parts: GRIP_HAND, rot: -10, scale: 1.2 },
  },
  far: {
    arm: [],
    leg: [
      [116, 280],
      [158, 252],
      [160, 294],
    ],
  },
})

// ── Felix, reading aloud from the book ──────────────────────────────────────
const FX_HEAD = { d: HEAD_FELIX, at: [404, 170] as P, rot: 10, scale: 0.95 }
const FX_T = headAt(1, FX_HEAD.at, FX_HEAD.rot, FX_HEAD.scale)
const FX_NEAR: P[] = [
  [404, 202],
  [414, 232],
  [434, 222],
]
const FX_FAR: P[] = [
  [398, 202],
  [410, 228],
  [430, 212],
]
const FELIX: Part[] = man({
  facing: 1,
  neck: [400, 194],
  hip: [394, 254],
  head: FX_HEAD,
  hair: FELIX_HAIR,
  body: { width: 28, tails: 24, front: 2 },
  arm: 8,
  leg: 9,
  near: {
    arm: FX_NEAR,
    leg: [
      [398, 254],
      [432, 256],
      [432, 296],
    ],
    hand: { parts: HOLD_HAND, rot: -30, scale: 0.85 },
  },
  far: {
    arm: FX_FAR,
    leg: [
      [392, 256],
      [424, 260],
      [420, 296],
    ],
  },
})
/** The open book, held up in his hands. */
const BOOK = 'M426 224L440 206L458 212L444 230ZM444 230L458 212L470 224L456 238Z'
const BOOK_LINES = 'M432 220L442 208M436 223L446 211M448 230L460 216M452 233L464 219'

// ── Safie, leaning in to follow it ──────────────────────────────────────────
const SF_HEAD = { d: HEAD_WOMAN, at: [548, 178] as P, rot: -10, scale: 0.92 }
const SF_T = headAt(-1, SF_HEAD.at, SF_HEAD.rot, SF_HEAD.scale)
const SF_NEAR: P[] = [
  [548, 208],
  [532, 234],
  [514, 236],
]
const SAFIE: Part[] = [
  { d: seatedSkirt([552, 198], [560, 228], [522, 254], FL, -1) },
  { d: HEAD_WOMAN, t: SF_T },
  { d: SAFIE_HAIR, t: SF_T },
  { d: line(SF_NEAR), w: 7, sep: 1.4 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(SF_NEAR, -1, { parts: OPEN_HAND, rot: 8, scale: 0.75 }),
  })),
]

// ── De Lacey with his guitar, in the corner by the fire ─────────────────────
const DL_HEAD = { d: HEAD_DE_LACEY, at: [716, 172] as P, rot: -4, scale: 0.98 }
const DL_T = headAt(-1, DL_HEAD.at, DL_HEAD.rot, DL_HEAD.scale)
const DL_STRUM: P[] = [
  [720, 204],
  [712, 234],
  [698, 244],
]
const DE_LACEY: Part[] = man({
  facing: -1,
  neck: [722, 196],
  hip: [732, 254],
  head: DL_HEAD,
  body: { width: 30, tails: 30, front: 6 },
  arm: 8,
  leg: 9.5,
  near: {
    arm: DL_STRUM,
    leg: [
      [728, 254],
      [694, 258],
      [694, 296],
    ],
    hand: { parts: OPEN_HAND, rot: 30, scale: 0.8 },
  },
  // WHY THE FIST (27 September 2026): his left hand was first an open hand
  // held up beside the neck, and at panel size it was clear of the guitar
  // and read as a wave. A player's hand closes round the neck.
  far: {
    arm: [
      [724, 204],
      [700, 222],
      [672, 210],
    ],
    leg: [
      [734, 256],
      [702, 262],
      [704, 296],
    ],
    hand: { parts: GRIP_HAND, scale: 0.75 },
  },
})
/** His guitar, on his knee, the neck reaching up into his left hand. */
const GUITAR_AT = 'translate(694 250) rotate(58)'

// ── Agatha at her work beside him, turned to him ───────────────────────────
const AG_HEAD = { d: HEAD_WOMAN, at: [626, 192] as P, rot: 16, scale: 0.9 }
const AG_T = headAt(1, AG_HEAD.at, AG_HEAD.rot, AG_HEAD.scale)
const AG_NEAR: P[] = [
  [626, 220],
  [636, 248],
  [652, 250],
]
const AGATHA: Part[] = [
  { d: seatedSkirt([622, 210], [614, 238], [650, 262], FL, 1) },
  { d: HEAD_WOMAN, t: AG_T },
  { d: line(AG_NEAR), w: 7, sep: 1.4 },
  ...HOLD_HAND.map((q) => ({ ...q, t: handAt(AG_NEAR, 1, { parts: HOLD_HAND, scale: 0.75 }) })),
]
/** The work in her lap, a white cloth. */
const CLOTH = 'M650 246L674 250L670 266L646 262Z'

/** The table, and the taper on it. */
const TABLE = 'M440 238H540V244H440ZM446 244H452V298H446ZM528 244H534V298H528Z'
const STOOL = (x: number, y: number) =>
  `M${x - 16} ${y}H${x + 16}V${y + 5}H${x - 16}ZM${x - 13} ${y + 5}L${x - 16} ${FL}M${x + 13} ${y + 5}L${x + 16} ${FL}`
const CHAIR_BACK = 'M744 150H752V296H744Z'

function LearningToBeHuman({ uid }: ArtProps) {
  const m = marks()
  const hovelClip = `${uid}-hovel`
  return (
    <>
      <defs>
        <clipPath id={hovelClip}>
          <path d={`M0 190L${COT.wallX0} 116V${FL}H0Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        {/* the night outside, over the hovel's roof */}
        <path d={m.night} fill={PAPER} />
        <path d="M140 76A13 13 0 1 0 152 98A10 10 0 1 1 140 76Z" fill={PAPER} />

        {/* the room: whitewashed, lit by the taper and the fire */}
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
        <BackDoor uid={uid} />

        <path d={m.taper} fill={INK} />
        {/* the table, the taper and the stools */}
        <path d={TABLE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <rect
          x={TAPER[0] - 3}
          y={TAPER[1] + 8}
          width={6}
          height={24}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path
          d={`M${TAPER[0] - 8} 238H${TAPER[0] + 8}V234H${TAPER[0] - 8}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8 })}
          d={`M${TAPER[0]} ${TAPER[1] + 8}C${TAPER[0] - 4} ${TAPER[1] + 3} ${TAPER[0] - 2} ${TAPER[1] - 3} ${TAPER[0]} ${TAPER[1] - 9}C${TAPER[0] + 2} ${TAPER[1] - 3} ${TAPER[0] + 4} ${TAPER[1] + 3} ${TAPER[0]} ${TAPER[1] + 8}Z`}
          fill={RED}
        />
        <path
          d={STOOL(398, 256) + STOOL(560, 256) + STOOL(612, 262)}
          fill={INK}
          stroke={INK}
          strokeWidth={3}
        />
        <path d={CHAIR_BACK} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M728 256H756V262H728Z" fill={INK} />

        {/* Felix, reading aloud */}
        <Figure parts={FELIX}>
          <path d={FELIX_HAIR_CUTS + FELIX_CUTS + NECKCLOTH} transform={FX_T} fill={PAPER} />
        </Figure>
        <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={BOOK_LINES} stroke={INK} strokeWidth={0.8} />
        <Figure
          parts={HOLD_HAND.map((q) => ({
            ...q,
            t: handAt(FX_NEAR, 1, { parts: HOLD_HAND, rot: -30, scale: 0.85 }),
          }))}
        >
          <path
            d={HOLD_CUTS}
            transform={handAt(FX_NEAR, 1, { parts: HOLD_HAND, rot: -30, scale: 0.85 })}
            fill={PAPER}
          />
        </Figure>

        {/* Safie, following the lesson */}
        <Figure parts={SAFIE}>
          <path d={SAFIE_BRAIDS + WOMAN_CUTS} transform={SF_T} fill={PAPER} />
        </Figure>

        {/* De Lacey and his guitar */}
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
        <Guitar at={GUITAR_AT} />
        <Figure
          parts={OPEN_HAND.map((q) => ({
            ...q,
            t: handAt(DL_STRUM, -1, { parts: OPEN_HAND, rot: 30, scale: 0.8 }),
          }))}
        />

        {/* Agatha at her work */}
        <Figure parts={AGATHA}>
          <path d={AGATHA_HAIR} transform={AG_T} fill={PAPER} stroke={INK} strokeWidth={0.8} />
          <path d={AGATHA_HAIR_LINES} transform={AG_T} fill="none" stroke={INK} strokeWidth={0.7} />
          <path d={WOMAN_WEEPING_CUTS} transform={AG_T} fill={PAPER} />
        </Figure>
        <path d={CLOTH} fill={PAPER} stroke={INK} strokeWidth={1.2} />

        {/* the hovel: dark, low, carpeted with straw */}
        <path d={HOVEL_ROOF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.roofPlanks} fill={PAPER} />
        <path d={`M0 190L${COT.wallX0} 116V${FL}H0Z`} fill={INK} />
        <g clipPath={`url(#${hovelClip})`}>
          <path d={m.hovel} fill={PAPER} />
        </g>
        <path d={m.straw} fill={PAPER} />
        <WallSection seed={806} />
        <Figure parts={CREATURE}>
          <path
            d={gouge(120, 232, 104, 290, 1, 1.4) + gouge(138, 226, 126, 290, 0.9, 1)}
            fill={PAPER}
          />
        </Figure>
        <CreatureHead t={CR_T} />
        {/* the chink, and the thread of light through it to his eye */}
        <path
          d={`M${COT.wallX1 + 2} ${CHINK_Y - 1.4}L${COT.wallX0} ${CHINK_Y - 1.1}V${CHINK_Y + 1.1}L${COT.wallX1 + 2} ${CHINK_Y + 1.4}Z`}
          fill={PAPER}
        />

        <path
          d={`M${COT.wallX0} ${BOARDED.y0}V${BOARDED.y1}`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
      </g>
    </>
  )
}

export const learningToBeHuman: LinocutArt = { width: W, height: H, Draw: LearningToBeHuman }

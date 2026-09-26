import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_HAND,
  HEAD_UTTERSON,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import {
  COLLAR,
  HEAD_POOLE,
  POOLE_CUTS,
  POOLE_HAIR,
  POOLE_HAIR_LINES,
  UTTERSON_HAIR,
  floorBoards,
} from './investigation-kit'

/**
 * Chapter 8, "The Last Night": the tenth moment in the guide's timeline.
 * Every detail is from the text:
 *
 * - The theatre: "the tables laden with chemical apparatus, the floor strewn
 *   with crates and littered with packing straw, and the light falling dimly
 *   through the foggy cupola. At the further end, a flight of stairs mounted
 *   to a door covered with red baize" (Chapter 5). Tonight "The scud had
 *   banked over the moon, and it was now quite dark", so no light comes from
 *   the cupola, which is left out of the picture, and the room is lit only
 *   where "the candle was set upon the nearest table to light them to the
 *   attack": crates and straw on the left, the table of apparatus with the
 *   candle on it, and the stair rising to the door on the right.
 * - "Poole disinterred the axe from under a stack of packing straw"; "Poole
 *   swung the axe over his shoulder; the blow shook the building, and the red
 *   baize door leaped against the lock and hinges. A dismal screech, as of
 *   mere animal terror, rang from the cabinet." So Poole, on the landing,
 *   drives the axe into the red door; the door jumps in its frame, with cut
 *   lines shaking round it, and the screech is cut as jagged lines breaking
 *   out from the room behind. The door is the spot colour, as the text
 *   colours it; so is the candle's flame.
 * - "you might take the kitchen poker for yourself"; Utterson "took that rude
 *   but weighty instrument into his hand". So Utterson stands on the stair
 *   below, the poker held down at his side, his face turned up to the door.
 *   He is bareheaded, as indoors.
 *
 * Whoever is behind the door is not drawn: the text gives only the screech,
 * and nothing that follows the breaking of the door is drawn. The axe strikes
 * the door and nothing else. Poole is "a well-dressed, elderly servant"
 * (Chapter 2): an older man in a butler's dark coat and white shirt front
 * (./investigation-kit.tsx). Nothing is taken from a film or stage
 * production.
 *
 * Seeds: 1001 (the walls), 1002 (the floor), 1003 (the candlelight), 1004
 * (the straw).
 */

const W = 860
const H = 340
const FLOOR = 270
/** The candle's flame, on the nearest table. */
const FLAME: P = [346, 214]
/** The stair: its foot, the height and depth of each step, and the landing. */
const STAIR_FOOT = 396
const RISE = 13
const RUN = 22
const STEPS = 9
const LANDING = FLOOR - RISE * STEPS
const STAIR_TOP = STAIR_FOOT + RUN * STEPS
/** The red baize door at the head of the stair: x, y, width, height. */
const DOOR: [number, number, number, number] = [694, 40, 78, LANDING - 40]

type Marks = {
  wall: string
  floor: string
  rays: string
  straw: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - FLAME[0]) * 0.8, (y - FLAME[1]) * 1.1) / 320), 0.04)
  const wall = gougeField(rng(1001), { x0: 0, x1: W, y0: 2, y1: FLOOR }, light)
  const floor = floorBoards(rng(1002), W, H, FLOOR, [360, 40], 34)
  const glow = rays(rng(1003), FLAME[0], FLAME[1], { from: 16, to: 120, every: 7, width: 2.8 })
  // Packing straw littering the floor: short paper strokes at every angle.
  const r = rng(1004)
  let straw = ''
  for (let i = 0; i < 70; i++) {
    const x = between(r, 16, 390)
    const y = between(r, FLOOR + 6, H - 8)
    const a = between(r, -0.8, 0.8)
    const l = between(r, 6, 16)
    straw += gouge(x, y, x + Math.cos(a) * l, y + Math.sin(a) * l, 0.6)
  }
  cached = { wall, floor, rays: glow, straw }
  return cached
}

/** The flight's profile, step by step, from the floor up to the landing, and its stringer. */
function stairShape(): string {
  let d = `M${STAIR_FOOT} ${FLOOR}`
  let x = STAIR_FOOT
  let y = FLOOR
  for (let i = 0; i < STEPS; i++) {
    y -= RISE
    x += RUN
    d += `V${n(y)}H${n(x)}`
  }
  return `${d}V${LANDING + 22}L${STAIR_FOOT + 30} ${FLOOR}Z`
}
/** The nosing of each tread and the edge of each riser, cut in paper. */
function treads(): string {
  let d = ''
  for (let i = 1; i <= STEPS; i++) {
    const y = FLOOR - RISE * i
    const x = STAIR_FOOT + RUN * (i - 1)
    d += `M${x - 2} ${n(y)}H${x + RUN}`
  }
  return d
}
/** The banister: a rail along the flight and a baluster on every tread. */
function banister(): string {
  let d = `M${STAIR_FOOT + 4} ${FLOOR - 50}L${STAIR_TOP + 4} ${LANDING - 50}`
  for (let i = 1; i <= STEPS; i++) {
    const x = STAIR_FOOT + RUN * (i - 1) + 8
    const y = FLOOR - RISE * i
    d += `M${x} ${n(y)}V${n(y - 50 + 4 - RISE * 0.36)}`
  }
  return d
}

// ── Poole, on the landing, driving the axe into the door ────────────────────

const POOLE_HEAD = { d: HEAD_POOLE, at: [658, 46] as P, rot: 10, scale: 0.84 }
const POOLE_NEAR_ARM: P[] = [
  [652, 70],
  [666, 86],
  [682, 90],
]
const POOLE_FAR_ARM: P[] = [
  [646, 70],
  [660, 90],
  [676, 96],
]
const POOLE: Part[] = [
  ...gent({
    facing: 1,
    neck: [648, 62],
    hip: [636, 108],
    head: POOLE_HEAD,
    near: {
      arm: POOLE_NEAR_ARM,
      leg: [
        [640, 108],
        [660, 126],
        [664, LANDING - 2],
      ],
    },
    far: {
      arm: POOLE_FAR_ARM,
      leg: [
        [634, 108],
        [624, 130],
        [614, LANDING - 2],
      ],
    },
    body: { width: 26, hem: 20, flare: 6, swing: 6 },
    arm: 7,
    leg: 8,
  }),
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(POOLE_FAR_ARM, 1, { parts: GRIP_HAND, rot: -28 }) })),
]
/** The axe: the haft from behind his hands to the head, and the head bitten into the door. */
const HAFT = 'M662 102L716 72'
const AXE_HEAD = 'M710.2 71.8L718.9 66.9L732.5 81.1L716.8 89.9Z'
const AXE_EDGE = 'M732.5 81.1L716.8 89.9'
/** The folds of his coat, and his white shirt front. */
const POOLE_CUTS_BODY =
  gouge(640, 76, 630, 120, 0.8, 0.8) +
  gouge(648, 80, 642, 122, 0.7, 0.3) +
  'M650 64L656 66L650 84L646 82Z'

// ── Utterson, on the stair below, the poker in his hand ─────────────────────

const UTT_HEAD = { d: HEAD_UTTERSON, at: [454, 114] as P, rot: -20, scale: 0.9 }
const UTT_ARM: P[] = [
  [450, 142],
  [458, 166],
  [466, 186],
]
const UTTERSON: Part[] = [
  ...gent({
    facing: 1,
    neck: [446, 136],
    hip: [440, 190],
    head: UTT_HEAD,
    near: {
      arm: UTT_ARM,
      leg: [
        [442, 190],
        [452, 210],
        [452, FLOOR - RISE * 3 - 1],
      ],
    },
    far: {
      arm: [
        [440, 142],
        [432, 166],
        [436, 188],
      ],
      leg: [
        [438, 190],
        [432, 218],
        [426, FLOOR - RISE * 2 - 1],
      ],
    },
    body: { width: 26, hem: 30, flare: 7 },
    arm: 7,
    leg: 8,
  }),
  // the kitchen poker, held down at his side
  { d: 'M462 180L484 240', w: 3 },
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(UTT_ARM, 1, { parts: GRIP_HAND, rot: 30 }) })),
]
const UTT_CUTS = gouge(434, 150, 428, 214, 0.8, 0.8) + gouge(444, 156, 446, 216, 0.7, 0.2)

/** The screech: three jagged lines breaking out from the room behind the door. */
function screech(): string[] {
  const lines: [P, number, number][] = [
    [[782, 58], -0.45, 74],
    [[786, 96], 0, 66],
    [[782, 132], 0.4, 70],
  ]
  return lines.map(([[x0, y0], a, len]) => {
    let d = `M${x0} ${y0}`
    const steps = 8
    for (let i = 1; i <= steps; i++) {
      const t = (len * i) / steps
      const side = i % 2 ? 1 : -1
      d += `L${n(x0 + Math.cos(a) * t - Math.sin(a) * side * 5.5)} ${n(y0 + Math.sin(a) * t + Math.cos(a) * side * 5.5)}`
    }
    return d
  })
}
const SCREECH = screech()

function TheLastNight(_props: ArtProps) {
  const m = marks()
  const [dx, dy, dw, dh] = DOOR
  const pt = headAt(1, POOLE_HEAD.at, POOLE_HEAD.rot, POOLE_HEAD.scale)
  const ut = headAt(1, UTT_HEAD.at, UTT_HEAD.rot, UTT_HEAD.scale)
  return (
    <g className="lc-push" style={timing({ origin: [640, 120], push: 1.03 })}>
      {/* the gaunt theatre, lit only by the candle */}
      <path d={m.wall} fill={PAPER} />
      <path d={m.rays} fill={PAPER} />
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.straw} fill={INK} />

      {/* a table laden with chemical apparatus, and the candle on it */}
      <rect
        x={236}
        y={238}
        width={138}
        height={8}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M246 246V270M364 246V270" stroke={PAPER} strokeWidth={8.4} />
      <path d="M246 246V270M364 246V270" stroke={INK} strokeWidth={5.4} />
      <g fill={INK} stroke={PAPER} strokeWidth={1.4}>
        <path d="M252 238V216C244 214 242 204 248 198C252 194 260 194 264 198V182H270V198C276 204 274 214 266 216V238Z" />
        <path d="M284 238C278 236 276 228 280 222L286 212V196H294V212L300 222C304 228 302 236 296 238Z" />
        <path d="M310 238V200H318V238Z" />
        <path d="M272 190L304 180L306 186L276 196Z" />
      </g>
      <path
        d={`M${FLAME[0] - 4} 238V${FLAME[1] + 9}H${FLAME[0] + 4}V238Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d={`M${FLAME[0] - 10} 237H${FLAME[0] + 10}`} stroke={PAPER} strokeWidth={3} />
      <path
        className="lc-flicker"
        d={`M${FLAME[0]} ${FLAME[1] + 8}C${FLAME[0] - 4.5} ${FLAME[1] + 4} ${FLAME[0] - 4} ${FLAME[1] - 2} ${FLAME[0]} ${FLAME[1] - 11}C${FLAME[0] + 4} ${FLAME[1] - 2} ${FLAME[0] + 4.5} ${FLAME[1] + 4} ${FLAME[0]} ${FLAME[1] + 8}Z`}
        fill={RED}
      />

      {/* crates stacked by the wall, straw spilling from them */}
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
        <rect x={24} y={214} width={72} height={56} />
        <rect x={92} y={230} width={60} height={40} />
        <rect x={38} y={174} width={52} height={40} />
      </g>
      <path
        d="M24 242H96M38 194H90M92 250H152M60 214V270M122 230V270M64 174V214"
        stroke={PAPER}
        strokeWidth={1.1}
      />
      <path
        d={
          gouge(42, 174, 34, 160, 0.7) +
          gouge(52, 174, 54, 158, 0.7) +
          gouge(74, 174, 84, 162, 0.7) +
          gouge(98, 230, 92, 218, 0.6) +
          gouge(114, 230, 120, 216, 0.6)
        }
        fill={PAPER}
      />

      {/* the flight of stairs, its banister, and the landing at the head */}
      <path d={banister()} stroke={PAPER} strokeWidth={4.4} fill="none" strokeLinecap="round" />
      <path d={banister()} stroke={INK} strokeWidth={2} fill="none" strokeLinecap="round" />
      <path
        d={stairShape()}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={treads()} stroke={PAPER} strokeWidth={LINE.bold} fill="none" />
      <rect x={STAIR_TOP} y={LANDING} width={W - STAIR_TOP} height={12} fill={INK} />
      <path
        d={`M${STAIR_TOP - 2} ${LANDING}H${W}M${STAIR_TOP} ${LANDING + 12}H${W}`}
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />

      {/* the red baize door, leaping against its lock and hinges */}
      <rect x={dx - 8} y={dy - 8} width={dw + 16} height={dh + 8} fill={PAPER} />
      <rect x={dx - 4} y={dy - 4} width={dw + 8} height={dh + 4} fill={INK} />
      <g transform={`rotate(-1.8 ${dx + dw} ${dy + dh})`}>
        <rect x={dx} y={dy} width={dw} height={dh} fill={RED} stroke={INK} strokeWidth={1.6} />
        <g fill={PAPER}>
          {Array.from({ length: 9 }, (_, i) => (
            <g key={i}>
              <circle cx={dx + 5} cy={dy + 8 + i * ((dh - 16) / 8)} r={1.3} />
              <circle cx={dx + dw - 5} cy={dy + 8 + i * ((dh - 16) / 8)} r={1.3} />
            </g>
          ))}
          {Array.from({ length: 7 }, (_, i) => (
            <g key={i}>
              <circle cx={dx + 12 + i * ((dw - 24) / 6)} cy={dy + 5} r={1.3} />
              <circle cx={dx + 12 + i * ((dw - 24) / 6)} cy={dy + dh - 5} r={1.3} />
            </g>
          ))}
        </g>
        <rect
          x={dx + 8}
          y={dy + dh * 0.54}
          width={8}
          height={12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
      </g>
      {/* the blow shaking the building: cuts running beside the frame */}
      <path
        d={
          gouge(dx - 16, dy + 8, dx - 16, dy + 36, 0.8) +
          gouge(dx - 22, dy + 14, dx - 22, dy + 30, 0.7) +
          gouge(dx + dw + 16, dy + 8, dx + dw + 16, dy + 36, 0.8) +
          gouge(dx + 10, dy - 16, dx + 42, dy - 16, 0.8) +
          gouge(dx + 18, dy - 22, dx + 36, dy - 22, 0.7)
        }
        fill={PAPER}
      />

      {/* Utterson on the stair below */}
      <Figure parts={UTTERSON} cuts={UTT_CUTS}>
        <g transform={ut}>
          <path d={UTTERSON_CUTS + UTTERSON_HAIR + COLLAR} fill={PAPER} />
        </g>
      </Figure>

      {/* Poole on the landing, the axe driven into the door */}
      <Figure parts={[{ d: HAFT, w: 3.6 }, { d: AXE_HEAD }, ...POOLE]} cuts={POOLE_CUTS_BODY}>
        <g transform={pt}>
          <path d={POOLE_CUTS + COLLAR} fill={PAPER} />
          <path d={POOLE_HAIR} fill={PAPER} />
          <path d={POOLE_HAIR_LINES} fill="none" stroke={INK} strokeWidth={0.9} />
        </g>
        <path d={AXE_EDGE} stroke={PAPER} strokeWidth={1.6} />
      </Figure>
      <Figure
        parts={GRIP_HAND.map((q) => ({
          ...q,
          t: handAt(POOLE_NEAR_ARM, 1, { parts: GRIP_HAND, rot: -28 }),
        }))}
      />
      {/* where the blade bites: splinters cut round it */}
      <path
        d={
          gouge(736, 86, 748, 92, 0.7) +
          gouge(734, 76, 746, 70, 0.7) +
          gouge(722, 94, 726, 106, 0.7) +
          gouge(712, 92, 704, 100, 0.6)
        }
        fill={PAPER}
      />

      {/* the dismal screech from the cabinet */}
      <g className="lc-fade-in" style={timing({ delay: 1, dur: 0.3 })}>
        {SCREECH.map((d) => (
          <g key={d}>
            <path d={d} fill="none" stroke={INK} strokeWidth={5} strokeLinejoin="round" />
            <path d={d} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinejoin="round" />
          </g>
        ))}
      </g>
    </g>
  )
}

export const theLastNight: LinocutArt = { width: W, height: H, Draw: TheLastNight }

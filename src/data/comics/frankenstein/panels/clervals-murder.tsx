import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  ALPHONSE_CUTS,
  ALPHONSE_HAIR,
  Figure,
  HEAD_ALPHONSE,
  HEAD_VICTOR,
  NECKCLOTH,
  OPEN_HAND,
  QUEUE,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  VICTOR_PUPIL,
  headAt,
  man,
  type P,
} from './people'

/**
 * Chapter 21: "Clerval's murder", the thirteenth moment in the guide's
 * timeline. Clerval's death, his body and the coffin Victor is led to are
 * never drawn: the panel is the prison, afterwards, and Henry is in the words
 * on it. Every detail is from the held 1831 text:
 *
 * - "in two months, found myself as awaking from a dream, in a prison ...
 *   surrounded by gaolers, turnkeys, bolts, and all the miserable apparatus of
 *   a dungeon"; "when I looked around, and saw the barred windows, and the
 *   squalidness of the room"; "He had caused the best room in the prison to
 *   be prepared for me (wretched indeed was the best)". So bare stone walls, a
 *   high barred window, a door of planks bound and bolted with iron. "It was
 *   morning, I remember, when I thus awoke": the light through the bars falls
 *   across the floor, and the sun in the window is the spot colour.
 * - "The physician came and prescribed medicines, and the old woman prepared
 *   them for me": a bottle and a cup on a stool by his chair.
 * - "One day, while I was gradually recovering, I was seated in a chair, my
 *   eyes half open, and my cheeks livid like those in death"; "He rose, and
 *   quitted the room with my nurse, and in a moment my father entered it ...
 *   I stretched out my hand to him". So Victor sits in a plain chair, turned
 *   to the door, one hand held out; his father has just stepped in from the
 *   passage and reaches out his own. The nurse and Mr Kirwin have gone out,
 *   so no one else is drawn. The livid cheek is left to the words.
 * - "'What a place is this that you inhabit, my son!' said he, looking
 *   mournfully at the barred windows". His father is the kit's Alphonse
 *   (./people.tsx): an older man, his grey hair cut in paper and tied back,
 *   in a travelling greatcoat. Victor is the kit's Victor.
 *
 * The quotation is Victor's answer to his father in this same scene, when
 * Alphonse says "And poor Clerval--". Seeds: 1301 (the walls), 1302 (the
 * light), 1303 (the floor), 1304 (the passage).
 */

const W = 860
const H = 340
/** Where the floor meets the wall. */
const FLOOR = 292
/** The barred window, high in the wall. */
const WIN = { x0: 96, x1: 206, y0: 44, y1: 132 }
/** The doorway to the passage, its door swung open into the room. */
const DOOR = { x0: 648, x1: 752, y0: 76, y1: FLOOR }
/** The bars of the window. */
const BARS = [114, 133, 152, 171, 190]
/** How far the morning light moves right for each unit it falls. */
const SLANT = 0.62

type Marks = {
  wall: string
  joints: string
  beam: string
  floor: string
  barShadows: string
  passage: string
}

/** The light through the bars: a slanting beam from the window to the floor. */
function inBeam(x: number, y: number) {
  if (y < WIN.y1) return 0
  const shift = (y - WIN.y1) * SLANT
  const u = (x - WIN.x0 - shift) / (WIN.x1 - WIN.x0)
  if (u < 0 || u > 1) return 0
  return clamp(Math.min(u, 1 - u) * 6) * clamp(1 - (y - WIN.y1) / 360)
}

const light = (x: number, y: number) =>
  Math.max(
    0.05,
    0.55 * inBeam(x, y),
    0.3 * clamp(1 - Math.hypot(x - (WIN.x0 + WIN.x1) / 2, (y - 90) * 1.3) / 150),
    0.28 * clamp(1 - Math.hypot(x - DOOR.x0, (y - 190) * 0.6) / 130),
  )

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1301)
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR }, light, {
    spacing: 6.2,
    len: [16, 54],
    gap: [6, 18],
  })
  // Coursed stone: bed joints and staggered head joints, cut in ink.
  let joints = ''
  let row = 0
  for (let y = 30; y < FLOOR - 4; y += 30, row++) {
    let x = between(r, -10, 0)
    while (x < W) {
      const len = between(r, 60, 120)
      joints += wedge(x, y + between(r, -0.8, 0.8), x + len, y + between(r, -0.8, 0.8), 2.6, 2.6)
      x += len
    }
    let hx = (row % 2 ? 26 : 62) + between(r, -6, 6)
    while (hx < W) {
      joints += wedge(hx, y - 28.4, hx + between(r, -1, 1), y, 2.2, 2.4)
      hx += between(r, 64, 84)
    }
  }
  // The beam itself: long cuts along the slant of the light.
  const b = rng(1302)
  let beam = ''
  for (let k = 0; k < 16; k++) {
    const x0 = WIN.x0 + 6 + ((WIN.x1 - WIN.x0 - 12) * k) / 15 + between(b, -2, 2)
    let t = between(b, 0, 16)
    while (t < FLOOR - WIN.y1) {
      const len = between(b, 20, 60)
      const bar = BARS.some((bx) => Math.abs(x0 - bx) < 5)
      if (!bar && b() < 0.6) {
        const y1 = WIN.y1 + t
        const y2 = Math.min(FLOOR - 2, y1 + len)
        beam += gouge(x0 + t * SLANT, y1, x0 + (y2 - WIN.y1) * SLANT, y2, 0.5 + (1 - t / 200) * 0.9)
      }
      t += len + between(b, 8, 30)
    }
  }
  // The floor: flags, with the lit patch of the window cut pale.
  const f = rng(1303)
  const floor = gougeField(
    f,
    { x0: 0, x1: W, y0: FLOOR + 5, y1: H },
    (x, y) => 0.1 + 0.85 * clamp(inBeam(x, y) * 1.4 + (inBeam(x - 30, y) > 0 ? 0.3 : 0)),
    { spacing: 5.4, len: [20, 60], gap: [4, 16], max: 3.6 },
  )
  // The shadows of the bars on the floor: dark bands through the lit patch.
  let barShadows = ''
  for (const bx of BARS) {
    const xa = bx + (FLOOR - WIN.y1) * SLANT
    const xb = bx + (H - WIN.y1) * SLANT
    barShadows += wedge(xa, FLOOR + 3, xb, H, 4, 5)
  }
  // The passage beyond the door, lit from somewhere along it.
  const passage = gougeField(
    rng(1304),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.y0, y1: DOOR.y1 },
    (x, y) => 0.35 + 0.5 * clamp(1 - Math.hypot(x - DOOR.x1, (y - 150) * 0.8) / 150),
    { spacing: 5.2, len: [14, 44], gap: [4, 12] },
  )
  cached = { wall, joints, beam, floor, barShadows, passage }
  return cached
}

// ── VICTOR, in his chair, turned to the door, holding out his hand ─────────

const V_HEAD = { d: HEAD_VICTOR, at: [410, 150] as P, rot: 4, scale: 1.26 }
const V_NEAR_ARM: P[] = [
  [408, 194],
  [438, 214],
  [474, 208],
]
const VICTOR = man({
  facing: 1,
  neck: [402, 186],
  hip: [386, 250],
  head: V_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 28, tails: 28, front: 2 },
  arm: 8,
  leg: 9,
  near: {
    arm: V_NEAR_ARM,
    leg: [
      [388, 250],
      [436, 250],
      [440, 292],
    ],
    hand: { parts: OPEN_HAND, scale: 1.15, rot: -6 },
  },
  far: {
    arm: [],
    leg: [
      [384, 252],
      [424, 258],
      [424, 294],
    ],
  },
})
const VICTOR_COAT_CUTS =
  gouge(410, 196, 394, 244, 0.9, 0.6) +
  gouge(392, 250, 432, 247, 0.8) +
  [206, 216, 226].map((y) => `M${n(406 - (y - 206) * 0.34)} ${y}a1.3 1.3 0 1 0 0.1 0Z`).join('')

/** His chair: a plain high back behind him, the seat, the legs. */
const CHAIR = 'M350 256V166H360V246H428V256H424L428 292H420L414 256H372L366 292H358L360 256Z'
/** A stool with the nurse's medicine on it: a bottle and a cup. */
const MEDICINE =
  'M270 250H316V256H310L312 292H306L302 256H284L280 292H274L276 256H270Z' +
  'M280 250V230C280 226 282 224 284 222V214H290V222C292 224 294 226 294 230V250Z' +
  'M300 250L298 236H312L310 250Z'

// ── ALPHONSE, just in from the passage, reaching out to his son ────────────

const A_HEAD = { d: HEAD_ALPHONSE, at: [614, 128] as P, rot: 6, scale: 1.3 }
const A_NEAR_ARM: P[] = [
  [610, 172],
  [584, 196],
  [552, 204],
]
const ALPHONSE = man({
  facing: -1,
  neck: [618, 162],
  hip: [626, 232],
  head: A_HEAD,
  body: { width: 32, tails: 60, long: true, swing: 4 },
  near: {
    arm: A_NEAR_ARM,
    leg: [
      [622, 232],
      [604, 262],
      [592, 290],
    ],
    hand: { parts: OPEN_HAND, scale: 1.15, rot: 6 },
  },
  far: {
    arm: [
      [626, 172],
      [634, 204],
      [632, 234],
    ],
    leg: [
      [628, 232],
      [636, 262],
      [644, 290],
    ],
  },
})
/** The buttons and the front edge of his greatcoat. */
const ALPHONSE_COAT_CUTS =
  gouge(606, 176, 606, 280, 0.9, -0.6) +
  [186, 198, 210, 222].map((y) => `M${n(610)} ${y}a1.3 1.3 0 1 0 0.1 0Z`).join('')

function ClervalsMurder({ uid }: ArtProps) {
  const m = marks()
  const vt = headAt(1, V_HEAD.at, V_HEAD.rot, V_HEAD.scale)
  const at = headAt(-1, A_HEAD.at, A_HEAD.rot, A_HEAD.scale)
  const win = `${uid}-win`
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
        <clipPath id={door}>
          <rect x={DOOR.x0} y={DOOR.y0} width={DOOR.x1 - DOOR.x0} height={DOOR.y1 - DOOR.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [500, 190], push: 1.03 })}>
        {/* the stone walls of the best room in the prison */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1.4 })}>
          <path d={m.beam} fill={PAPER} />
        </g>

        {/* the barred window: morning */}
        <rect
          x={WIN.x0 - 12}
          y={WIN.y0 - 12}
          width={WIN.x1 - WIN.x0 + 24}
          height={WIN.y1 - WIN.y0 + 24}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g clipPath={`url(#${win})`}>
          <rect
            x={WIN.x0}
            y={WIN.y0}
            width={WIN.x1 - WIN.x0}
            height={WIN.y1 - WIN.y0}
            fill={PAPER}
          />
          <circle cx={172} cy={112} r={17} fill={RED} />
          <path d={gouge(WIN.x0, 70, 150, 68, 1) + gouge(120, 100, WIN.x1, 97, 0.9)} fill={INK} />
        </g>
        <g fill={INK}>
          {BARS.map((x) => (
            <rect key={x} x={x - 3} y={WIN.y0} width={6} height={WIN.y1 - WIN.y0} />
          ))}
          <rect x={WIN.x0} y={86} width={WIN.x1 - WIN.x0} height={6} />
        </g>
        <path
          d={BARS.map((x) => gouge(x - 1.4, WIN.y0 + 4, x - 1.4, WIN.y1 - 4, 0.5)).join('')}
          fill={PAPER}
        />

        {/* the doorway to the passage, and the iron-bound door swung open */}
        <rect
          x={DOOR.x0}
          y={DOOR.y0}
          width={DOOR.x1 - DOOR.x0}
          height={DOOR.y1 - DOOR.y0}
          fill={INK}
        />
        <g clipPath={`url(#${door})`}>
          <path d={m.passage} fill={PAPER} />
        </g>
        <path
          d={`M${DOOR.x0 - 12} ${DOOR.y1}V${DOOR.y0 - 12}H${DOOR.x1 + 12}V${DOOR.y1}H${DOOR.x1}V${DOOR.y0}H${DOOR.x0}V${DOOR.y1}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${DOOR.x1 + 2} ${DOOR.y0 - 2}L818 ${DOOR.y0 - 22}L818 ${DOOR.y1 + 22}L${DOOR.x1 + 2} ${DOOR.y1}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* its planks, its iron straps and studs, and the great bolt */}
        <path
          d={
            gouge(772, DOOR.y0 - 4, 772, DOOR.y1 + 4, 0.8) +
            gouge(790, DOOR.y0 - 10, 790, DOOR.y1 + 10, 0.8) +
            gouge(806, DOOR.y0 - 16, 806, DOOR.y1 + 16, 0.8)
          }
          fill={PAPER}
        />
        <path d="M752 116L818 100M752 250L818 262" stroke={PAPER} strokeWidth={5} fill="none" />
        <path d="M752 116L818 100M752 250L818 262" stroke={INK} strokeWidth={2.6} fill="none" />
        <g fill={PAPER}>
          {[764, 782, 800].flatMap((x, i) => [
            <circle key={`a${x}`} cx={x} cy={113 - i * 4.4} r={1.4} />,
            <circle key={`b${x}`} cx={x} cy={253 + i * 3.4} r={1.4} />,
          ])}
        </g>
        <path d="M758 178H792V188H758Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M792 176H800V190H792Z" fill={PAPER} />

        {/* the floor, the lit patch of the window, and the shadows of the bars */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={`M0 ${FLOOR + 1}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.barShadows} fill={INK} />

        {/* the medicine on its stool, and Victor's chair */}
        <path d={MEDICINE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d={gouge(284.5, 230, 284.5, 246, 0.8) + gouge(303, 239, 304, 247, 0.6)}
          fill={PAPER}
        />
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* Victor */}
        <Figure parts={VICTOR} cuts={VICTOR_COAT_CUTS}>
          <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} transform={vt} fill={PAPER} />
          <path d={VICTOR_PUPIL} transform={vt} fill={INK} />
          <path d={NECKCLOTH} transform={vt} fill={PAPER} />
        </Figure>

        {/* his father */}
        <Figure parts={ALPHONSE} cuts={ALPHONSE_COAT_CUTS}>
          <g transform={at}>
            <path d={ALPHONSE_HAIR} fill={PAPER} />
            <path d={QUEUE} fill={INK} stroke={PAPER} strokeWidth={0.6} />
            <path d={ALPHONSE_CUTS} fill={PAPER} />
            <path d={NECKCLOTH} fill={PAPER} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const clervalsMurder: LinocutArt = { width: W, height: H, Draw: ClervalsMurder }

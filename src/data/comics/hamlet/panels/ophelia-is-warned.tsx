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

import { Person, type P } from './people'

/**
 * Act 1, Scene 3: "Ophelia is warned", the third moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1524, src/data/full-texts/hamlet.ts):
 *
 * - "A room in Polonius's house." Laertes has gone: "My necessaries are
 *   embark'd", and his father hurried him off, "Aboard, aboard, for shame.
 *   The wind sits in the shoulder of your sail, And you are stay'd for." So
 *   his ship waits in the harbour beyond the window, its sails filled, and he
 *   is not in the room: the quotation is spoken after "[Exit.]". The door he
 *   went out by stands open on the left.
 * - POLONIUS: "these blazes, daughter, Giving more light than heat, extinct
 *   in both ... You must not take for fire." The fire in the hearth, the spot
 *   colour, is his figure for Hamlet's vows, burning in the room where he
 *   says it.
 * - POLONIUS: "I would not, in plain terms, from this time forth Have you so
 *   slander any moment leisure As to give words or talk with the Lord Hamlet.
 *   Look to't, I charge you; come your ways." So he leans towards her and
 *   points at her as he gives the order. (A forefinger raised in warning was
 *   tried first, and at panel size it read as a thumb held up.) He is the
 *   kit's Polonius (./people.tsx): old, his beard white, in his flat bonnet
 *   and long gown.
 * - OPHELIA: "I shall obey, my lord." So she stands before him with her head
 *   bowed and her eyes down, her hands together at her waist. She is the
 *   kit's Ophelia, her hair loose down her back under a fillet.
 *
 * Seeds: 1301 (wall), 1302 (floor), 1303 (sea), 1304 (the fire's light), 1305
 * (the passage).
 */

const W = 860
const H = 340
const FLOOR = 252
const WIN = { x0: 352, x1: 496, y0: 36, y1: 172 }
const FIRE: P = [764, 222]

type Marks = {
  wall: string
  wains: string
  floor: string
  sea: string
  lattice: string
  glow: string
  passage: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Daylight from the window, and the fire's light low on the right.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - 424) * 0.8, y - 104) / 260) * 0.9,
      clamp(1 - Math.hypot(x - FIRE[0], y - FIRE[1]) / 170) * 0.65,
      0.05,
    )
  const wall = gougeField(rng(1301), { x0: 0, x1: W, y0: 4, y1: 192 }, light, { spacing: 6 })
  const r = rng(1302)
  let wains = ''
  for (let x = 4; x < W; x += 10) {
    const L = light(x, 220)
    wains += wedge(x + between(r, -0.6, 0.6), 198, x + between(r, -0.6, 0.6), 246, 0.4, 0.8 + L * 3)
  }
  // Floorboards running to a vanishing point.
  let floor = ''
  const vx = 460
  const vy = FLOOR - 220
  for (let xt = -700; xt < W + 700; xt += 30) {
    const xb = vx + (xt - vx) * ((H - vy) / (FLOOR - vy))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = FLOOR + 1; y < FLOOR + 14; y += 3)
    floor += gouge(0, y, W, y, 2.4 - (y - FLOOR) * 0.15)
  // The harbour beyond the window: the sea cut in ink lines under a pale sky.
  const sea = gougeField(rng(1303), { x0: WIN.x0, x1: WIN.x1, y0: 128, y1: WIN.y1 }, () => 0.35, {
    spacing: 4.6,
    len: [16, 50],
    gap: [6, 20],
    max: 1.6,
  })
  // The lead lattice of the casement: diamond panes.
  let lattice = ''
  for (let k = -8; k < 12; k++) {
    const a = WIN.x0 + k * 18
    lattice += `M${n(a)} ${WIN.y0}L${n(a + (WIN.y1 - WIN.y0))} ${WIN.y1}`
    lattice += `M${n(a + (WIN.y1 - WIN.y0))} ${WIN.y0}L${n(a)} ${WIN.y1}`
  }
  const glow = rays(rng(1304), FIRE[0], FIRE[1] - 10, { from: 40, to: 110, every: 7, width: 2 })
  // The passage beyond the open door: lit, its shadows gathering at the sides.
  const passage = gougeField(
    rng(1305),
    { x0: 50, x1: 128, y0: 54, y1: 250 },
    (x) => clamp(0.12 + 0.8 * (1 - Math.abs(x - 92) / 40)),
    { spacing: 5, len: [8, 26], gap: [4, 12], max: 2.2 },
  )
  cached = { wall, wains, floor, sea, lattice, glow, passage }
  return cached
}

/**
 * Laertes's ship at anchor, its sails filled with the wind that "sits in the
 * shoulder of your sail": the hull, two masts, and four square sails bellied
 * out, all in ink against the pale sky, with the seams of the canvas cut in
 * paper (SAIL_SEAMS).
 */
const HULL = 'M386 140L478 140C474 146 468 151 458 153L404 153C396 151 390 146 386 140Z'
const MASTS = 'M416 141V78M450 141V70'
const SAILS =
  'M404 82L428 82Q434 94 428 106L404 106Q398 94 404 82Z' +
  'M402 110L430 110Q437 122 430 134L402 134Q395 122 402 110Z' +
  'M438 74L462 74Q468 86 462 98L438 98Q432 86 438 74Z' +
  'M436 102L464 102Q471 114 464 127L436 127Q429 114 436 102Z'
const SAIL_SEAMS =
  gouge(404, 94, 428, 94, 0.7) +
  gouge(403, 122, 430, 122, 0.7) +
  gouge(438, 86, 462, 86, 0.7) +
  gouge(437, 114, 464, 114, 0.7)

/**
 * The door Laertes has just gone out by, left open on the left: the doorway
 * onto a lit passage, and the door's leaf swung back towards us on its
 * hinges, its panels cut in paper.
 */
const DOORWAY = 'M50 252L50 50L128 50L128 252Z'
const DOOR_LEAF = 'M50 52L20 38L20 270L50 252Z'
const DOOR_PANELS =
  gouge(26, 60, 26, 140, 1.2) +
  gouge(44, 68, 44, 140, 1) +
  gouge(26, 168, 26, 252, 1.2) +
  gouge(44, 170, 44, 244, 1) +
  gouge(24, 154, 46, 156, 1.2)

/** The hearth: a stone surround, a dark fireplace, and the fire in it. */
const SURROUND = 'M692 252L692 168L686 160L846 160L840 168L840 252Z'
const OPENING = 'M716 252L716 206Q716 188 734 188L798 188Q816 188 816 206L816 252Z'
const FLAMES =
  'M736 246C736 238 744 234 750 238C752 230 764 228 768 236C772 230 784 232 786 240C792 238 798 242 796 246Z'
const FLAME_A = 'M752 237C748 228 752 218 756 210C760 220 764 228 759 237Z'
const FLAME_B = 'M770 235C768 228 771 222 773 216C776 222 779 228 776 235Z'

function OpheliaIsWarned({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 170], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        <rect x={0} y={192} width={W} height={5} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={246} width={W} height={6} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the door Laertes has gone out by, standing open onto the lit passage */}
        <path d={DOORWAY} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.passage} fill={INK} />
        <path d="M44 44H134V256" fill="none" stroke={PAPER} strokeWidth={3} />
        <path d={DOOR_LEAF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={DOOR_PANELS} fill={PAPER} />

        {/* the casement, and Laertes's ship waiting in the harbour beyond it */}
        <rect
          x={WIN.x0 - 10}
          y={WIN.y0 - 10}
          width={WIN.x1 - WIN.x0 + 20}
          height={WIN.y1 - WIN.y0 + 20}
          fill={INK}
        />
        <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} fill={PAPER} />
        <g clipPath={`url(#${winClip})`}>
          <path d={`M${WIN.x0} 128H${WIN.x1}`} stroke={INK} strokeWidth={LINE.fine} />
          <path d={m.sea} fill={INK} />
          <path d={m.lattice} stroke={INK} strokeWidth={0.9} fill="none" />
          <path d={MASTS} stroke={PAPER} strokeWidth={5} />
          <path
            d={HULL + SAILS}
            fill={PAPER}
            stroke={PAPER}
            strokeWidth={3}
            strokeLinejoin="round"
          />
          <path d={HULL + SAILS} fill={INK} />
          <path d={MASTS} stroke={INK} strokeWidth={2.4} />
          <path d={SAIL_SEAMS} fill={PAPER} />
        </g>
        <path
          d={`M${(WIN.x0 + WIN.x1) / 2} ${WIN.y0}V${WIN.y1}M${WIN.x0} ${(WIN.y0 + WIN.y1) / 2}H${WIN.x1}`}
          stroke={INK}
          strokeWidth={4}
        />
        <rect x={WIN.x0 - 16} y={WIN.y1 + 8} width={WIN.x1 - WIN.x0 + 32} height={7} fill={PAPER} />
        <rect x={WIN.x0 - 16} y={WIN.y1 + 15} width={WIN.x1 - WIN.x0 + 32} height={2} fill={INK} />

        {/* "these blazes, daughter, Giving more light than heat" */}
        <path d={SURROUND} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path
          d={
            gouge(700, 176, 700, 248, 1.4) +
            gouge(832, 176, 832, 248, 1.4) +
            gouge(700, 170, 832, 170, 1.1)
          }
          fill={INK}
        />
        <path d={OPENING} fill={INK} />
        <path d="M736 246H796M740 250V240M792 250V240" stroke={PAPER} strokeWidth={1.6} />
        <g fill={RED}>
          <path d={FLAMES} />
          <path className="lc-flicker" d={FLAME_A} />
          <path className="lc-flicker" style={timing({ dur: 0.8, delay: 0.3 })} d={FLAME_B} />
        </g>

        {/* Polonius: "Look to't, I charge you; come your ways." */}
        <Person
          at={[268, 334]}
          scale={1.46}
          pose={{
            look: 'polonius',
            brow: 'frown',
            body: { neck: [5, -136], hip: [0, -90] },
            head: { at: [9, -158], rot: 8 },
            far: {
              pts: [
                [-2, -128],
                [0, -104],
                [12, -98],
              ],
              hand: 'mitt',
              deg: -10,
            },
            near: {
              pts: [
                [8, -126],
                [26, -108],
                [46, -112],
              ],
              hand: 'point',
              deg: -4,
            },
          }}
        />

        {/* Ophelia: "I shall obey, my lord." */}
        <Person
          at={[548, 334]}
          scale={1.46}
          flip
          pose={{
            look: 'ophelia',
            eye: 'down',
            head: { rot: 16 },
            far: {
              pts: [
                [-3, -124],
                [2, -104],
                [12, -100],
              ],
              hand: 'mitt',
              deg: 4,
            },
            near: {
              pts: [
                [4, -122],
                [10, -102],
                [16, -98],
              ],
              hand: 'mitt',
              deg: -30,
            },
          }}
        />
      </g>
    </>
  )
}

export const opheliaIsWarned: LinocutArt = { width: W, height: H, Draw: OpheliaIsWarned }

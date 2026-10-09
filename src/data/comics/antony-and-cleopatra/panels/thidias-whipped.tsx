import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { headland } from '../../othello/panels/garden'
import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { lightField, seaCuts, skyLines } from './light-cuts'
import { Column, EDGE, beam, parapet } from './palace'
import { Person, reach, sizeOf, toFigure, type P } from './people'

/**
 * Act 3, Scene 13: "Thidias whipped", the fourteenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in the Palace." So a room of ./palace.tsx, cut as the
 *   room of "News from Rome" is: a dark wall at the left with a bright
 *   doorway in it, and to the right round columns under a beam, open to the
 *   daylight over the water.
 * - THIDIAS: "Give me grace to lay My duty on your hand." "[Enter Antony and
 *   Enobarbus.]" ANTONY: "Favours, by Jove that thunders!" ... "Take hence
 *   this jack and whip him." "Tug him away." "[Exeunt Servants with
 *   Thidias.]" So Antony, in the armour and general's cloak he wears in these
 *   scenes, frowns and points after Thidias, and two of his household, the
 *   kit's servants in belted tunics (./people.tsx), take him out through the
 *   doorway: the one in front leaning into the pull with his hand round
 *   Thidias's forearm, the other behind with a hand on his back. Thidias,
 *   the kit's envoy in the toga of Caesar's Rome, hangs back against them,
 *   his head bowed.
 *   THE WHIPPING IS NEVER SHOWN: nobody holds a whip, nobody is struck, and
 *   the panel stops at the leading away.
 * - "So saucy with the hand of she here"; "My playfellow, your hand". So
 *   Cleopatra, behind Antony, holds the hand Thidias kissed drawn back to her
 *   breast, her head a little bowed. She is the kit's Cleopatra, uncrowned:
 *   her crown is only something she offers Caesar in words ("To lay my crown
 *   at’s feet"), and the kit keeps the crown for Act 5.
 * - ANTONY: "Caesar sits down in Alexandria". So Caesar's camp is pitched
 *   across the water, seen through the last opening: pale tents on the far
 *   shore and his standard over them, its flag printed in the spot colour as
 *   Caesar's standards are in every panel of Act 4 ("The treasure sent after
 *   him", "Enobarbus dies"), big enough that it stays a flag at phone width
 *   and far from every face and hand.
 * - ENOBARBUS: "I will seek Some way to leave him." He speaks it alone at the
 *   end of the scene. So he stands apart beyond a column with his back to
 *   them all, looking out across the water at Caesar's standard, the camp he
 *   will go to.
 *
 * Read left to right, as the scene runs: Thidias taken out, Antony's order,
 * Cleopatra's hand, and Enobarbus turned towards Caesar. Every hand is open,
 * points, rests or closes round something held, and none is raised on a
 * straight arm. Nothing is taken from a film or stage production. Seeds:
 * 1401 (the wall), 1402 (the sky), 1403 (the sea), 1404 (the floor), 1405
 * and 1406 (the parapets), 1407 (the doorway's light), 1408 (the far shore).
 */

const W = 860
const H = 340
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const FEET = 322
/** The doorway in the dark wall, as in "News from Rome". */
const DOOR = { x0: 52, x1: 140, top: 78 }
/** Where the dark wall ends, and the columns. */
const WALL_END = 256
const COLS = [270, 545, 820]
const CAP_TOP = 40
const SILL = 224
/** The far edge of the sea, seen through the openings. */
const HORIZON = 132
/** The scale every figure in the room is drawn at, as in the hall of Act 1. */
const S = 1.06

/** The far shore Caesar's camp stands on, behind the last opening's parapet. */
const SHORE = 'M552 226V210C600 204 660 200 712 199C760 198 800 201 830 206V226Z'
/** The camp's tents: x, width and height, standing on the shore. */
const TENTS: [number, number, number][] = [
  [690, 30, 24],
  [726, 26, 20],
  [808, 30, 22],
]
const SHORE_TOP = 200
/** Caesar's standard: its pole's foot on the shore, and its top. */
const STANDARD = { x: 768, top: 104, foot: 202 }

// The people, placed on the floor, and the hands that hold Thidias.
const SERVANT_FRONT: P = [100, FEET + 1]
const THIDIAS_AT: P = [180, FEET + 1]
const SERVANT_BACK: P = [246, FEET + 2]
/** The front servant leans into the pull, forward to the left; Thidias hangs back against it. */
const PULL = -8
const HANG = 5
/** Where Thidias's hand is drawn out to, and where the other servant's hand rests on his shoulder. */
const HAND: P = [124, 214]
const SHOULDER: P = [200, 208]

/** A point turned about `at` by `d` degrees, clockwise. */
function turn(p: P, at: P, d: number): P {
  const a = deg(d)
  const x = p[0] - at[0]
  const y = p[1] - at[1]
  return [at[0] + x * Math.cos(a) - y * Math.sin(a), at[1] + x * Math.sin(a) + y * Math.cos(a)]
}
/** A point of a flipped figure's own frame, in the panel. */
const fromFlipped = (p: P, at: P, s: number): P => [at[0] - p[0] * s, at[1] + p[1] * s]

const sServant = S * sizeOf('attendant')
const sThidias = S * sizeOf('thidias')
/** Thidias's near arm, drawn out towards the door. */
const THIDIAS_ARM = reach(
  [5, -128],
  toFigure(turn(HAND, THIDIAS_AT, -HANG), THIDIAS_AT, sThidias, true),
  24,
  -1,
)
/** Where the front servant's hand closes: on Thidias's forearm, a third of the way from the wrist. */
const FOREARM: P = (() => {
  const e = turn(fromFlipped(THIDIAS_ARM[1], THIDIAS_AT, sThidias), THIDIAS_AT, HANG)
  const w = turn(fromFlipped(THIDIAS_ARM[2], THIDIAS_AT, sThidias), THIDIAS_AT, HANG)
  return [w[0] + (e[0] - w[0]) * 0.36, w[1] + (e[1] - w[1]) * 0.36]
})()
const FRONT_ARM = reach(
  [-4, -130],
  toFigure(turn(FOREARM, SERVANT_FRONT, -PULL), SERVANT_FRONT, sServant, true),
  24,
  -1,
)
const BACK_ARM = reach([5, -128], toFigure(SHOULDER, SERVANT_BACK, sServant, true), 24, 1)

type Marks = {
  wall: string
  sky: string
  doorLight: string
  sea: string
  far: string
  floor: string
  parapets: { shape: string; cuts: string }[]
  shore: string
  tents: string
  doors: string
}

/** A tent seen end on, its ground at y: a ridge tent. */
function tent(x: number, y: number, w: number, h: number) {
  return `M${n(x - w / 2)} ${n(y)}L${n(x - w * 0.42)} ${n(y - h * 0.62)}L${n(x)} ${n(y - h)}L${n(x + w * 0.42)} ${n(y - h * 0.62)}L${n(x + w / 2)} ${n(y)}Z`
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall is dark, a little lit about the doorway and towards the columns.
  const wall = lightField(
    1401,
    { x0: 0, x1: WALL_END, y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) =>
      clamp(
        Math.max(
          0.5 - Math.hypot(x - (DOOR.x0 + DOOR.x1) / 2, (y - 170) * 0.6) / 170,
          0.1 + ((x - 150) / 104) * 0.35,
        ) -
          (y - 160) / 1200,
      ),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  const sky = skyLines(
    1402,
    { x0: WALL_END, x1: W, y0: BEAM.bottom + 2, y1: HORIZON - 3 },
    (_x, y) => 0.4 - (y - BEAM.bottom) / 260,
  )
  // Through the doorway, the daylight of the court outside.
  const doorLight = skyLines(
    1407,
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top + 2, y1: WALL_FOOT },
    (_x, y) => 0.32 - (y - DOOR.top) / 400,
  )
  const sea = seaCuts(
    1403,
    { x0: WALL_END, x1: W, y0: HORIZON + 1, y1: SILL },
    (x, y) => !(x > 552 && y > 196),
  )
  const far = headland(300, 520, HORIZON, 8)
  const floor = flagFloor(rng(1404), W, H, WALL_FOOT, [430, 120], 64, 5)
  const parapets = [0, 1].map((k) =>
    parapet(1405 + k, COLS[k] + 14, COLS[k + 1] - 14, SILL, WALL_FOOT),
  )
  // The far shore in ink, a few cuts of light along it.
  const shore = lightField(1408, { x0: 552, x1: 830, y0: 206, y1: SILL }, () => 0.32, {
    spacing: 5,
    len: [10, 30],
    gap: [6, 16],
    max: 2,
  })
  let tents = ''
  let doors = ''
  for (const [x, w, h] of TENTS) {
    tents += tent(x, SHORE_TOP + 2, w, h)
    doors += `M${n(x - w * 0.13)} ${n(SHORE_TOP + 2)}L${n(x)} ${n(SHORE_TOP + 2 - h * 0.58)}L${n(x + w * 0.13)} ${n(SHORE_TOP + 2)}Z`
  }
  cached = { wall, sky, doorLight, sea, far, floor, parapets, shore, tents, doors }
  return cached
}

/**
 * Caesar's standard, as the panels of his camp in Act 4 cut it: a pole, a
 * crossbar, and the square flag hung from it with a notched hem, in the spot
 * colour, a spear-point at the top.
 */
function Standard({ x, top, foot }: { x: number; top: number; foot: number }) {
  const flag = `M${x - 19} ${top + 11}H${x + 19}V${top + 44}L${x + 12.7} ${top + 39}L${x + 6.3} ${top + 45}L${x} ${top + 39}L${x - 6.3} ${top + 45}L${x - 12.7} ${top + 39}L${x - 19} ${top + 45}Z`
  return (
    <g>
      <path d={`M${x} ${foot}V${top}`} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
      <path d={`M${x} ${foot}V${top}`} stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
      <path d={`M${x - 21} ${top + 10}H${x + 21}`} stroke={INK} strokeWidth={3} />
      <path d={flag} fill={RED} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={`M${x - 3} ${top - 1}L${x} ${top - 9}L${x + 3} ${top - 1}Z`} fill={INK} />
    </g>
  )
}

function ThidiasWhipped({ uid }: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  const shoreClip = `${uid}-shore`
  return (
    <>
      <defs>
        <clipPath id={shoreClip}>
          <path d={SHORE} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 200], push: 1.03 })}>
        {/* daylight over the water through the openings */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.far} fill={INK} />
        <path d={`M${WALL_END} ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.3} />
        <path d={m.sea} fill={INK} />

        {/* Caesar's camp across the water, and his standard over it */}
        <path d={SHORE} fill={INK} />
        <g clipPath={`url(#${shoreClip})`}>
          <path d={m.shore} fill={PAPER} />
        </g>
        <path d={m.tents} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={m.doors} fill={INK} />
        <Standard {...STANDARD} />

        {/* the dark wall, and the bright doorway in it */}
        <rect x={0} y={BEAM.bottom} width={WALL_END} height={WALL_FOOT - BEAM.bottom} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        <rect
          x={DOOR.x0 - 10}
          y={DOOR.top - 12}
          width={DOOR.x1 - DOOR.x0 + 20}
          height={WALL_FOOT - DOOR.top + 12}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={WALL_FOOT - DOOR.top}
          fill={PAPER}
        />
        <path d={m.doorLight} fill={INK} />
        <path d={gouge(DOOR.x0 - 10, DOOR.top - 6, DOOR.x1 + 10, DOOR.top - 6, 1.2)} fill={PAPER} />
        {m.parapets.map((p, k) => (
          <g key={k}>
            <path d={p.shape} fill={INK} />
            <path d={p.cuts} fill={PAPER} />
          </g>
        ))}

        {/* the floor */}
        <path d={m.floor} fill={INK} />
        <path
          d={
            footShadow(176, FEET + 3, 110) +
            footShadow(372, FEET + 3, 52) +
            footShadow(474, FEET + 3, 48) +
            footShadow(640, FEET + 3, 44)
          }
          fill={INK}
        />

        {/* the beam and the columns */}
        <path d={b.shape} fill={INK} />
        <path d={b.cuts} fill={PAPER} />
        {COLS.map((cx) => (
          <Column key={cx} cx={cx} top={CAP_TOP} foot={WALL_FOOT + 2} />
        ))}
        <path d={`M${WALL_END} ${BEAM.bottom}V${WALL_FOOT}`} {...EDGE} />

        {/* Thidias, taken out, hanging back, his head bowed */}
        <g transform={`rotate(${HANG} ${n(THIDIAS_AT[0])} ${n(THIDIAS_AT[1])})`}>
          <Person
            pose={{
              look: 'thidias',
              head: { rot: 16 },
              eye: 'down',
              feet: [-12, 12],
              hem: { front: 28, back: 30 },
              near: { pts: THIDIAS_ARM, hand: 'mitt' },
            }}
            at={THIDIAS_AT}
            scale={S}
            flip
          />
        </g>
        {/* the servant in front, leaning into the pull, his hand round Thidias's forearm */}
        <g transform={`rotate(${PULL} ${n(SERVANT_FRONT[0])} ${n(SERVANT_FRONT[1])})`}>
          <Person
            pose={{
              look: 'attendant',
              dress: 'tunic',
              head: { rot: 6 },
              legs: {
                far: [
                  [-3, -70],
                  [-12, -37],
                  [-21, -3],
                ],
                near: [
                  [3, -70],
                  [15, -38],
                  [22, -3],
                ],
              },
              far: { pts: FRONT_ARM, hand: 'grip', deg: 160 },
            }}
            at={SERVANT_FRONT}
            scale={S}
            flip
          />
        </g>
        {/* the servant behind, a hand on his shoulder */}
        <Person
          pose={{
            look: 'attendant',
            dress: 'tunic',
            head: { rot: 4 },
            legs: {
              far: [
                [-3, -70],
                [-11, -37],
                [-18, -3],
              ],
              near: [
                [3, -70],
                [13, -38],
                [18, -3],
              ],
            },
            near: { pts: BACK_ARM, hand: 'grip', deg: 200 },
          }}
          at={SERVANT_BACK}
          scale={S}
          flip
        />

        {/* Antony: "Take hence this jack and whip him." "Tug him away." */}
        <Person
          pose={{
            look: 'antony',
            frown: true,
            mouth: 'open',
            far: {
              pts: [
                [-4, -130],
                [-8, -106],
                [-4, -84],
              ],
            },
            near: {
              pts: [
                [5, -130],
                [27, -122],
                [51, -124],
              ],
              hand: 'point',
              deg: -2,
            },
          }}
          at={[372, FEET + 2]}
          scale={S}
          flip
        />
        {/* Cleopatra, the hand Thidias kissed drawn back to her breast */}
        <Person
          pose={{
            look: 'cleopatra',
            head: { rot: 8 },
            eye: 'down',
            near: {
              pts: [
                [4, -126],
                [16, -106],
                [12, -122],
              ],
              hand: 'mitt',
              deg: -110,
            },
          }}
          at={[474, FEET]}
          scale={S}
          flip
        />

        {/* Enobarbus, apart, his back to them, looking out at Caesar's camp:
            "I will seek Some way to leave him." */}
        <Person pose={{ look: 'enobarbus', head: { rot: 4 } }} at={[640, FEET + 2]} scale={S} />
      </g>
    </>
  )
}

export const thidiasWhipped: LinocutArt = { width: W, height: H, Draw: ThidiasWhipped }

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Kneel } from './kneel'
import { lightField, skyLines } from './light-cuts'
import { Column, beam, parapet } from './palace'
import { Person, reach, sizeOf, toFigure, type P, type Pose } from './people'

/**
 * Act 2, Scene 5: "The messenger", the eighth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in the Palace." So the palace of Act 1
 *   (./palace.tsx): the beam across the top, round columns open to the
 *   daylight, the low wall between them and the stone floor, with the dark
 *   wall and its doorway on the left that the messenger came in by
 *   ("O! from Italy!"). It is day: Cleopatra has just called for her angle,
 *   "we’ll to the river".
 * - MESSENGER: "Madam, he’s married to Octavia." CLEOPATRA: "The most
 *   infectious pestilence upon thee!" "Strikes him down." "She hales him up
 *   and down." The blows and the dragging are not shown. The picture is the
 *   moment after: the messenger, a young man from the road in a belted tunic
 *   and a short cloak (the kit, ./people.tsx), is on his knees, looking up
 *   at her with both hands held out open, pleading: "Gracious madam, I that
 *   do bring the news made not the match." That line is the quotation. He
 *   has no mark on him.
 * - Cleopatra stands over him, frowning, her mouth open as she rails at him,
 *   and points down at him, her arm bent. She is drawn as the kit draws her
 *   everywhere: her long hair loose down her back, a long gown and the
 *   queen's mantle. The play gives her no crown in this scene, so she wears
 *   none. "Draws a knife" comes later in the scene and is never drawn: no
 *   blade is in any hand.
 * - CHARMIAN: "Good madam, keep yourself within yourself. The man is
 *   innocent." So Charmian, behind the queen, reaches out to her with open
 *   hands to hold her back. Iras, Alexas and Mardian, who are in the room
 *   and do nothing, are left out to keep it clear.
 * - Behind them on the right stands the chair of state the queen has risen
 *   from, empty, with its footstool. The play calls her seat "chairs of gold"
 *   (3.6) and gives this one no more. RED is its cushion and the panel of its
 *   back: large, flat, high and far from the messenger, so it reads as
 *   cloth on a chair and never as anything spilt near a man who has been
 *   struck down. Nothing on the chair is carved as a serpent (the kit's
 *   rule).
 *
 * Nothing is taken from a film or stage production. Seeds: 801 (wall), 802
 * (sky), 803 (floor), 804 and 805 (the low walls), 806 (the light in the
 * doorway).
 */

const W = 860
const H = 340
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const FEET = 328
/** The doorway in the dark wall, where the messenger came in. */
const DOOR = { x0: 40, x1: 116, top: 84 }
/** Where the dark wall ends and the columns begin. */
const WALL_END = 160
const COLS = [178, 600, 852]
const CAP_TOP = 40
const SILL = 224
/** The ground under the kneeling messenger's hip. */
const MESSENGER_AT: P = [262, 326]
const MESSENGER_S = 1.18
const CLEO_AT: P = [420, FEET]
const CLEO_S = 1.2
const CHARMIAN_AT: P = [510, FEET]
const CHARMIAN_S = 1.2
/** The chair of state: the front of its seat, the seat's height, the floor under its dais. */
const CHAIR = { x: 690, seat: 236, floor: 322 }

type Marks = {
  wall: string
  sky: string
  doorLight: string
  floor: string
  parapets: { shape: string; cuts: string }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall is dark, lit a little round the doorway and towards the columns.
  const wall = lightField(
    801,
    { x0: 0, x1: WALL_END, y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) =>
      clamp(
        Math.max(
          0.5 - Math.hypot(x - (DOOR.x0 + DOOR.x1) / 2, (y - 170) * 0.6) / 170,
          0.1 + ((x - 100) / 60) * 0.3,
        ) -
          (y - 160) / 1200,
      ),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  const sky = skyLines(
    802,
    { x0: WALL_END, x1: W, y0: BEAM.bottom + 2, y1: SILL - 2 },
    (_x, y) => 0.4 - (y - BEAM.bottom) / 260,
  )
  // Through the doorway, the daylight of the court outside.
  const doorLight = skyLines(
    806,
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top + 2, y1: WALL_FOOT },
    (_x, y) => 0.32 - (y - DOOR.top) / 400,
  )
  const floor = flagFloor(rng(803), W, H, WALL_FOOT, [400, 120], 64, 5)
  const parapets = [0, 1].map((k) =>
    parapet(804 + k, COLS[k] + 14, COLS[k + 1] - 14, SILL, WALL_FOOT),
  )
  cached = { wall, sky, doorLight, floor, parapets }
  return cached
}

/**
 * The empty chair of state, on a low dais, facing left into the room: a high
 * back with a rounded top, a deep seat, a solid side with a panel cut in it,
 * an arm ending in a roll, square feet, and a footstool before it. Ink with a
 * paper edge; its cushion and the panel of its back in the spot colour, each
 * edged in ink. Plain straight lines: nothing on it is carved as a serpent.
 */
function ChairOfState() {
  const { x, seat, floor } = CHAIR
  const dais = `M${x - 70} ${floor}V${floor - 12}H${x - 56}V${floor - 22}H${x + 116}V${floor}Z`
  const top = floor - 22
  const frame =
    // the back, rising behind the seat to a rounded top
    `M${x + 80} ${top}V${seat - 118}Q${x + 80} ${seat - 132} ${x + 94} ${seat - 132}Q${x + 106} ${seat - 132} ${x + 106} ${seat - 118}V${top}Z` +
    // the side, from the seat down to the dais, standing on two square feet
    `M${x - 6} ${seat}H${x + 84}V${top - 8}H${x + 74}V${top}H${x + 62}V${top - 8}H${x + 8}V${top}H${x - 4}V${top - 8}H${x - 6}Z` +
    // the arm, from the back to a rolled end over the front of the seat
    `M${x + 82} ${seat - 46}H${x + 14}Q${x} ${seat - 46} ${x} ${seat - 34}Q${x} ${seat - 24} ${x + 10} ${seat - 24}Q${x + 16} ${seat - 24} ${x + 16} ${seat - 31}V${seat - 38}H${x + 82}Z` +
    `M${x + 6} ${seat - 27}H${x + 13}V${seat}H${x + 6}Z`
  // the panel cut in the side, and the line of the seat's edge
  const cuts =
    `M${x + 6} ${seat + 10}H${x + 72}V${top - 16}H${x + 6}Z` +
    `M${x + 10} ${seat + 14}H${x + 68}V${top - 20}H${x + 10}Z`
  const cushion = `M${x - 9} ${seat + 1}C${x - 11} ${seat - 11} ${x + 4} ${seat - 15} ${x + 36} ${seat - 15}C${x + 62} ${seat - 15} ${x + 80} ${seat - 13} ${x + 80} ${seat + 1}Z`
  const panel = `M${x + 84} ${seat - 114}Q${x + 84} ${seat - 126} ${x + 93} ${seat - 126}Q${x + 101} ${seat - 126} ${x + 101} ${seat - 114}V${seat - 18}H${x + 84}Z`
  const stool = `M${x - 52} ${top}V${top - 16}H${x - 12}V${top}H${x - 18}V${top - 9}H${x - 46}V${top}Z`
  return (
    <g strokeLinejoin="round">
      <path d={dais} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={
          gouge(x - 54, top + 3, x + 114, top + 3, 1.1) +
          gouge(x - 68, floor - 9, x - 56, floor - 9, 0.8)
        }
        fill={PAPER}
      />
      <path d={frame + stool} fill={PAPER} stroke={PAPER} strokeWidth={3.6} />
      <path d={frame + stool} fill={INK} />
      <path d={cuts} fill={PAPER} fillRule="evenodd" />
      <path d={panel} fill={RED} stroke={INK} strokeWidth={1.4} />
      <path d={gouge(x + 92.5, seat - 114, x + 92.5, seat - 26, 1.2)} fill={INK} />
      <path d={cushion} fill={RED} stroke={INK} strokeWidth={1.4} />
      <path d={gouge(x + 4, seat - 5, x + 70, seat - 6, 1)} fill={INK} />
      <path d={gouge(x - 48, top - 12, x - 16, top - 12, 0.8)} fill={PAPER} />
    </g>
  )
}

/** The messenger, on his knees, both hands held out open: "I that do bring the news made not the match." */
const MESSENGER: Pose = {
  look: 'messenger',
  dress: 'tunic',
  head: { rot: -16 },
  far: {
    pts: [
      [-4, -130],
      [14, -118],
      [34, -126],
    ],
    hand: 'open',
    deg: -30,
  },
  near: {
    pts: [
      [5, -128],
      [24, -112],
      [44, -118],
    ],
    hand: 'open',
    deg: -18,
    thumb: -1,
  },
}

/** Cleopatra, over him, pointing down at him, frowning, railing. */
const CLEOPATRA: Pose = {
  look: 'cleopatra',
  head: { rot: 10 },
  frown: true,
  mouth: 'open',
  near: {
    pts: [
      [5, -122],
      [24, -110],
      [42, -96],
    ],
    hand: 'point',
    deg: 30,
  },
}

/** Charmian, behind her, reaching out to hold her back: "keep yourself within yourself". */
const CHARMIAN_S_ALL = CHARMIAN_S * sizeOf('charmian')
const CHARMIAN: Pose = {
  look: 'charmian',
  head: { rot: 6 },
  far: {
    pts: reach([-4, -124], toFigure([462, 214], CHARMIAN_AT, CHARMIAN_S_ALL, true), 23, 1),
    hand: 'open',
    deg: 170,
  },
  near: {
    pts: reach([5, -122], toFigure([456, 190], CHARMIAN_AT, CHARMIAN_S_ALL, true), 23, 1),
    hand: 'open',
    thumb: -1,
  },
}

function TheMessenger({ uid }: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  return (
    <g className="lc-push" style={timing({ origin: [360, 210], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
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
      <path d={m.floor} fill={INK} />
      <path
        d={
          footShadow(MESSENGER_AT[0] + 4, MESSENGER_AT[1] + 2, 54) +
          footShadow(CLEO_AT[0] + 8, FEET + 2, 40) +
          footShadow(CHARMIAN_AT[0] + 6, FEET + 2, 34) +
          footShadow(CHAIR.x + 24, CHAIR.floor + 3, 96)
        }
        fill={INK}
      />

      {/* the beam and the columns */}
      <path d={b.shape} fill={INK} />
      <path d={b.cuts} fill={PAPER} />
      {COLS.map((cx) => (
        <Column key={cx} cx={cx} top={CAP_TOP} foot={WALL_FOOT + 2} />
      ))}

      <ChairOfState />
      <Person pose={CHARMIAN} at={CHARMIAN_AT} scale={CHARMIAN_S} flip />
      <Person pose={CLEOPATRA} at={CLEO_AT} scale={CLEO_S} flip />
      <Kneel
        uid={uid}
        id="messenger"
        pose={MESSENGER}
        at={MESSENGER_AT}
        scale={MESSENGER_S}
        lean={8}
      />
    </g>
  )
}

export const theMessenger: LinocutArt = { width: W, height: H, Draw: TheMessenger }

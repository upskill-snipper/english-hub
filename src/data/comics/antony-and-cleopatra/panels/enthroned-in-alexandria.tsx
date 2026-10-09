import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  DOOR,
  FEET,
  H,
  Lampstand,
  ROME_ROOFS,
  ROME_TEMPLE_CUTS,
  RoomFrame,
  W,
  WALL_FOOT,
  WIN,
  roomMarks,
  type RoomMarks,
} from './caesars-house'
import { skyLines } from './light-cuts'
import { Person, type P, type Pose } from './people'

/**
 * Act 3, Scene 6: "Enthroned in Alexandria", the tenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Rome. A Room in Caesar’s House." The room of ./caesars-house.tsx, where
 *   the Soothsayer warned Antony by night (2.3), now by day: the window high
 *   in the wall shows the sky and the roofs of Rome, the doorway on the left
 *   is open on the daylight outside, and the lamp stands unlit on its stand.
 * - "Enter Octavia with her train." CAESAR: "Why have you stolen upon us
 *   thus? You come not Like Caesar’s sister. The wife of Antony Should have
 *   an army for an usher". So Octavia has just come in at the door with only
 *   two attendants of her household behind her in the doorway, smaller, at
 *   the back of the room. She is drawn as the kit draws her (./people.tsx),
 *   a Roman wife in a long gown with the palla drawn over her head.
 * - CAESAR: "No, my most wronged sister. Cleopatra Hath nodded him to her."
 *   OCTAVIA: "Ay me, most wretched, That have my heart parted betwixt two
 *   friends". So Caesar, young, beardless, in the toga, has turned to her
 *   and holds out an open hand to her, his arm bent; she bows her head, her
 *   eyes down and her hand on her breast. The quotation is Caesar's line,
 *   verbatim.
 * - "Enter Agrippa, Maecenas and Caesar." So Agrippa, in his armour, and
 *   Maecenas, in the toga with his hair to a lock at the nape (the kit), stand
 *   behind Caesar on the right and watch; Maecenas has his hand on his
 *   breast: "Each heart in Rome does love and pity you."
 * - The enthronement itself is Caesar's report, not the room: "I’ th’
 *   market-place, on a tribunal silvered, Cleopatra and himself in chairs of
 *   gold Were publicly enthroned." A panel shows only who is there, so it is
 *   left to his words and the guide's summary. Behind Caesar stands the seat
 *   he has risen from to meet his sister: the folding chair with crossed legs
 *   that a Roman magistrate sat in, Rome's answer to the chairs of gold, the
 *   play giving it no more than "Sit" (2.2). RED is its cushion, large, flat
 *   and low, behind him and away from every hand and face; the same red as
 *   the cushion of Cleopatra's empty chair in "The messenger" (2.5).
 *
 * Nothing is taken from a film or stage production. Seeds: 1001 (wall, dado
 * and floor), 1004 (sky).
 */

const WIN_C: P = [WIN.x + WIN.w / 2, WIN.y + WIN.h * 0.6]
const DOOR_C: P = [(DOOR.x0 + DOOR.x1) / 2, 176]
const OCTAVIA_AT: P = [168, FEET + 2]
const CAESAR_AT: P = [418, FEET + 2]
const AGRIPPA_AT: P = [652, FEET - 6]
const MAECENAS_AT: P = [748, FEET - 10]
/** Octavia's train, in the doorway at the back of the room. */
const TRAIN: P[] = [
  [56, WALL_FOOT + 1],
  [92, WALL_FOOT + 2],
]
/** Caesar's chair: the middle of its seat, the seat's height, the floor under it. */
const CHAIR = { x: 530, seat: 266, floor: 318 }

type Marks = RoomMarks & { sky: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Daylight from the window high in the wall and from the open doorway,
  // falling away towards the corners.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - WIN_C[0]) * 0.62, (y - WIN_C[1]) * 0.9) / 300) * 0.95,
      clamp(1 - Math.hypot((x - DOOR_C[0]) * 0.9, (y - DOOR_C[1]) * 0.7) / 170) * 0.75,
      0.07,
    )
  const room = roomMarks(1001, light)
  const sky = skyLines(
    1004,
    { x0: WIN.x, x1: WIN.x + WIN.w, y0: WIN.y, y1: WIN.y + WIN.h - 24 },
    (_x, y) => 0.5 - (y - WIN.y) / 160,
  )
  const shade =
    footShadow(OCTAVIA_AT[0] + 2, OCTAVIA_AT[1] + 3, 34) +
    footShadow(CAESAR_AT[0], CAESAR_AT[1] + 3, 36) +
    footShadow(CHAIR.x, CHAIR.floor + 3, 34) +
    footShadow(AGRIPPA_AT[0], AGRIPPA_AT[1] + 3, 30) +
    footShadow(MAECENAS_AT[0], MAECENAS_AT[1] + 3, 28)
  cached = { ...room, sky, shade }
  return cached
}

/**
 * The magistrate's folding chair, seen from the side: two curved legs crossed
 * under the seat, each on a small foot, the seat's frame across their tops,
 * and on it a thick cushion in the spot colour, edged in ink, with a seam cut
 * along it. No back and no arms.
 */
function CuruleChair() {
  const { x, seat, floor } = CHAIR
  const legs =
    `M${x - 30} ${seat + 6}C${x - 18} ${seat + 26} ${x + 18} ${floor - 22} ${x + 28} ${floor}` +
    `M${x + 30} ${seat + 6}C${x + 18} ${seat + 26} ${x - 18} ${floor - 22} ${x - 28} ${floor}`
  const feet = `M${x - 36} ${floor}H${x - 20}M${x + 20} ${floor}H${x + 36}`
  const frame = `M${x - 36} ${seat}H${x + 36}V${seat + 7}H${x - 36}Z`
  const cushion = `M${x - 38} ${seat + 1}C${x - 40} ${seat - 10} ${x - 30} ${seat - 13} ${x} ${seat - 13}C${x + 30} ${seat - 13} ${x + 40} ${seat - 10} ${x + 38} ${seat + 1}Z`
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={legs + feet} fill="none" stroke={PAPER} strokeWidth={8.6} />
      <path d={legs + feet} fill="none" stroke={INK} strokeWidth={5} />
      <path d={frame} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <circle cx={x} cy={n((seat + floor) / 2 - 4)} r={3.4} fill={PAPER} />
      <path d={cushion} fill={RED} stroke={INK} strokeWidth={1.4} />
      <path d={gouge(x - 30, seat - 5, x + 30, seat - 5, 0.9)} fill={INK} />
    </g>
  )
}

/** Octavia: her head bowed, her eyes down, her hand on her breast: "Ay me, most wretched". */
const OCTAVIA: Pose = {
  look: 'octavia',
  head: { rot: 12 },
  eye: 'down',
  near: {
    pts: [
      [5, -122],
      [18, -102],
      [12, -118],
    ],
    hand: 'mitt',
    deg: -150,
  },
}

/** Caesar: "No, my most wronged sister." An open hand held out to her, the arm bent. */
const CAESAR: Pose = {
  look: 'caesar',
  dress: 'toga',
  head: { rot: 6 },
  near: {
    pts: [
      [5, -128],
      [24, -112],
      [44, -116],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
  },
}

/** Maecenas, his hand on his breast: "Each heart in Rome does love and pity you." */
const MAECENAS: Pose = {
  look: 'maecenas',
  head: { rot: 6 },
  near: {
    pts: [
      [5, -128],
      [20, -108],
      [12, -124],
    ],
    hand: 'mitt',
    deg: -150,
  },
}

function EnthronedInAlexandria({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <g className="lc-push" style={timing({ origin: [330, 190], push: 1.03 })}>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      {/* the wall by daylight */}
      <rect x={0} y={0} width={W} height={H} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path d={m.dado} fill={PAPER} />
      {/* the window: the sky, and the roofs of Rome low in it */}
      <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
      <g clipPath={`url(#${win})`}>
        <path d={m.sky} fill={INK} />
        <path d={ROME_ROOFS} fill={INK} />
        <path d={ROME_TEMPLE_CUTS} fill={PAPER} />
      </g>
      <RoomFrame m={m} doorLit />
      <path d={m.shade} fill={INK} />

      {/* her train, in the doorway behind her */}
      {TRAIN.map((at, k) => (
        <Person
          key={at[0]}
          pose={{ look: 'attendant', head: { rot: k ? 4 : 0 }, eye: k ? 'down' : 'open' }}
          at={at}
          scale={0.8}
        />
      ))}
      <Lampstand />
      <CuruleChair />
      <Person pose={{ look: 'agrippa', head: { rot: 4 } }} at={AGRIPPA_AT} scale={1.12} flip />
      <Person pose={MAECENAS} at={MAECENAS_AT} scale={1.08} flip />
      <Person pose={OCTAVIA} at={OCTAVIA_AT} scale={1.2} />
      <Person pose={CAESAR} at={CAESAR_AT} scale={1.2} flip />
    </g>
  )
}

export const enthronedInAlexandria: LinocutArt = {
  width: W,
  height: H,
  Draw: EnthronedInAlexandria,
}

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BED,
  QueensBed,
  ROOM_FLOOR,
  ROOM_WINDOW,
  RoomWindow,
  floorShadow,
  roomFloor,
  roomWall,
} from './monument'
import { skyLines } from './light-cuts'
import { Person, type P } from './people'

/**
 * Act 5, Scene 2: "A pair so famous", the twenty-fifth and last moment in
 * the guide's timeline. The panel draws Caesar honouring the queen, and no
 * one on her bed. Every detail is from the scene in the held edition
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in the Monument." The bright day was "done" before
 *   the queen was robed (moment 24), so it is night: the room of
 *   ./monument.tsx, its window dark, with stars and a crescent moon to say
 *   so. The play names no light in the room; a lamp burns on a tall iron
 *   stand by the bed, as one candle lights the room at the end of the
 *   Othello panels, so that the people can be seen.
 * - "Enter Caesar and all his train, marching." "A way there, a way for
 *   Caesar!" So the doorway on the left is bright with the light of his
 *   train's torches outside, and a soldier of his train stands in it.
 * - DOLABELLA: "That you did fear is done." CAESAR: "Bravest at the last, She
 *   levelled at our purposes and, being royal, Took her own way." "She shall
 *   be buried by her Antony. No grave upon the earth shall clip in it A pair
 *   so famous." So young Caesar, in his cuirass and general's cloak, stands
 *   with his head bowed and an open hand held out, low, towards her bed, and
 *   Dolabella, bareheaded in his cuirass (the kit's look for each,
 *   ./people.tsx), bows his head beside him.
 * - FIRST GUARD: "This Charmian lived but now; she stood and spake. I found
 *   her trimming up the diadem On her dead mistress". So the First Guard,
 *   helmeted, who found them, stands at the foot of the bed with his head
 *   bowed.
 * - "Take up her bed". So the queen's bed of moment 24 stands at the right,
 *   and its curtains are drawn all along its side, so that nothing on it can
 *   be seen, as the Othello panels close Desdemona's bed.
 *
 * WHAT IS LEFT OUT, AND WHY. The three women are dead when Caesar comes, and
 * this play's rule (./people.tsx) is that no death by a character's own hand
 * is shown or suggested by its method: so no body is drawn, nothing of the
 * queen or her women is in sight, and nothing of the guard's talk of "an
 * aspic's trail" or the countryman's basket ("This was his basket") is drawn.
 * Charmian's last service, the crown set straight on her mistress, is behind
 * the curtains with her, and is left to the words. The quotation is Caesar's
 * honour to the pair, not a line that names the deaths or their means.
 *
 * RED is the lamp's flame alone, cut large and high on its stand, clear of
 * every face and hand. Nothing is taken from a film or stage production.
 * Seeds: 2501 (the wall), 2502 (the floor), 2503 (the stars), 2504 (the
 * torchlight in the doorway), 2505 (the lamp's light).
 */

const W = 860
const H = 340
/** Where Caesar, Dolabella and the guard stand. */
const FOOT = 328

/** The doorway on the left, and the light of the torches beyond it. */
const DOOR = { x0: 34, x1: 128, top: 76 }
/** The lamp on its stand by the bed: the stand's foot and the flame's base. */
const LAMP = { x: 480, foot: 316, flame: 124 }
/** The moon in the window. */
const MOON: P = [236, 92]

type Marks = {
  wall: { cuts: string; joints: string; dim: string }
  floor: string
  shade: string
  stars: string
  doorLight: string
  lampRays: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall is lit by the lamp and, faintly, by the torches in the doorway;
  // the corners are dark.
  const wall = roomWall(2501, (x, y) =>
    clamp(
      Math.max(
        0.9 - Math.hypot((x - LAMP.x) * 0.7, (y - LAMP.flame) * 0.75) / 220,
        0.6 - Math.hypot((x - (DOOR.x0 + DOOR.x1) / 2) * 0.9, (y - 160) * 0.5) / 160,
      ),
    ),
  )
  const floor = roomFloor(2502)
  const shade =
    floorShadow(186, FOOT + 2, 36) +
    floorShadow(300, FOOT + 2, 46) +
    floorShadow(574, FOOT + 1, 36) +
    floorShadow(LAMP.x, LAMP.foot + 4, 22, 3) +
    floorShadow((BED.x0 + BED.x1) / 2, BED.foot + 6, 130, 3)
  // A few stars in the window, kept clear of the moon.
  const r = rng(2503)
  let stars = ''
  for (let k = 0; k < 9; k++) {
    const x = between(r, ROOM_WINDOW.x0 + 14, ROOM_WINDOW.x1 - 6)
    const y = between(r, ROOM_WINDOW.y0 + 8, ROOM_WINDOW.y1 - 10)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < 26) continue
    const s = between(r, 1.6, 2.6)
    stars += gouge(x - s, y, x + s, y, 0.5) + gouge(x, y - s, x, y + s, 0.5)
  }
  // The torchlight beyond the doorway: the paper all but bare, a few lines
  // closing in at the edges.
  const doorLight = skyLines(
    2504,
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top, y1: ROOM_FLOOR + 8 },
    (x) => clamp(0.1 + Math.abs(x - (DOOR.x0 + DOOR.x1) / 2) / 90),
  )
  const lampRays = rays(rng(2505), LAMP.x, LAMP.flame - 20, {
    from: 34,
    to: 84,
    every: 10,
    width: 2.2,
  })
  cached = { wall, floor, shade, stars, doorLight, lampRays }
  return cached
}

/**
 * The lamp: a tall iron stand with three feet, a shallow bowl, and its flame
 * in the spot colour, cut large so that at phone width it is still a flame
 * and not a speck.
 */
function Lamp() {
  const { x, foot, flame } = LAMP
  const stand = `M${x - 2.6} ${flame + 12}h5.2V${foot - 10}h-5.2ZM${x - 24} ${foot}L${x - 2} ${foot - 15}h4L${x + 24} ${foot}h-6L${x} ${foot - 8}L${x - 18} ${foot}Z`
  const bowl = `M${x - 20} ${flame}h40C${x + 17} ${flame + 13} ${x - 17} ${flame + 13} ${x - 20} ${flame}Z`
  const f = (dx: number, dy: number) => `${n(x + dx)} ${n(flame + dy)}`
  const tongue =
    `M${f(0, -1)}C${f(-17, -8)} ${f(-14, -30)} ${f(-4, -48)}C${f(-2, -36)} ${f(5, -32)} ${f(7, -44)}` +
    `C${f(19, -26)} ${f(16, -8)} ${f(0, -1)}Z`
  return (
    <g>
      <path
        d={stand + bowl}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.9, delay: 0.4 })}
        d={tongue}
        fill={RED}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
      <path d={gouge(x - 2, -8 + flame, x + 1, -26 + flame, 1.4)} fill={PAPER} />
    </g>
  )
}

function APairSoFamous({ uid }: ArtProps) {
  const m = marks()
  const { x0, x1, top } = DOOR
  return (
    <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
      {/* the room at night */}
      <rect x={0} y={0} width={W} height={ROOM_FLOOR} fill={INK} />
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill="none" stroke={PAPER} strokeWidth={1.6} />
      <path d={m.wall.dim} fill="none" stroke={PAPER} strokeWidth={0.9} />
      <rect x={0} y={ROOM_FLOOR} width={W} height={H - ROOM_FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />
      <RoomWindow uid={uid}>
        <rect x={ROOM_WINDOW.x0} y={ROOM_WINDOW.y0} width={80} height={160} fill={INK} />
        <path d={m.stars} fill={PAPER} />
        {/* the moon: a paper disc, and the dark cut back over most of it */}
        <circle cx={MOON[0]} cy={MOON[1]} r={13} fill={PAPER} />
        <circle cx={MOON[0] + 6} cy={MOON[1] - 3} r={11.5} fill={INK} />
      </RoomWindow>

      {/* the doorway, bright with the torches of Caesar's train beyond it */}
      <defs>
        <clipPath id={`${uid}-door`}>
          <rect x={x0} y={top} width={x1 - x0} height={ROOM_FLOOR + 8 - top} />
        </clipPath>
      </defs>
      <path d={`M${x0} ${ROOM_FLOOR + 8}V${top}H${x1}V${ROOM_FLOOR + 8}Z`} fill={PAPER} />
      <g clipPath={`url(#${uid}-door)`}>
        <path d={m.doorLight} fill={INK} />
      </g>
      <path
        d={`M${x0} ${ROOM_FLOOR + 8}V${top}H${x1}V${ROOM_FLOOR + 8}`}
        fill="none"
        stroke={INK}
        strokeWidth={3}
      />
      <path
        d={`M${x0 - 14} ${top - 16}H${x1 + 14}V${top}H${x0 - 14}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(x0 - 10, top - 4, x1 + 10, top - 4, 1.1)} fill={PAPER} />
      {/* a soldier of his train in the doorway, against the torchlight */}
      <Person pose={{ look: 'soldier', head: { rot: 4 } }} at={[82, ROOM_FLOOR + 6]} scale={0.86} />

      {/* her bed, its curtains drawn all along it */}
      <QueensBed curtains="drawn" />
      <path d={m.lampRays} fill={PAPER} />
      <Lamp />

      {/* Dolabella, his head bowed */}
      <Person
        pose={{ look: 'dolabella', head: { rot: 22 }, eye: 'down' }}
        at={[186, FOOT]}
        scale={1.14}
      />

      {/* Caesar, his head bowed, an open hand held out low towards her bed */}
      <Person
        pose={{
          look: 'caesar',
          head: { rot: 20 },
          eye: 'down',
          near: {
            pts: [
              [5, -128],
              [16, -104],
              [38, -92],
            ],
            hand: 'open',
            deg: 6,
            thumb: -1,
          },
        }}
        at={[302, FOOT]}
        scale={1.18}
      />

      {/* the First Guard at the foot of the bed, his head bowed */}
      <Person
        pose={{ look: 'soldier', head: { rot: 18 }, eye: 'down' }}
        at={[570, FOOT - 2]}
        scale={1.12}
        flip
      />
    </g>
  )
}

export const aPairSoFamous: LinocutArt = { width: W, height: H, Draw: APairSoFamous }

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Doorway, Floor, FLOOR, H, W, roomMarks, shadowPool, type Light } from './acts-3-4-rooms'
import { Person, type P, type Pose } from './people'

/**
 * Act 4, Scene 3: "Sent to England", the thirteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/hamlet.ts):
 *
 * - "Another room in the Castle", the same night: "I'll have him hence
 *   tonight." The room is lit from the passage beyond its door, where the
 *   way to the ship lies, so the doorway is the bright place in the picture.
 * - "The bark is ready, and the wind at help, / Th'associates tend, and
 *   everything is bent / For England." "But, come; for England! Farewell,
 *   dear mother." "Thy loving father, Hamlet." "My mother. Father and mother
 *   is man and wife; man and wife is one flesh; and so, my mother. Come, for
 *   England. [Exit.]" So Hamlet stands in the doorway on the right, black
 *   against its light, turned back to the King with a mocking bow, one hand
 *   held out low and open: his farewell to his "mother".
 * - "Follow him at foot. Tempt him with speed aboard; / Delay it not; I'll
 *   have him hence tonight. / Away, for everything is seal'd and done".
 *   Rosencrantz and Guildenstern, told apart by the kit's caps
 *   (./people.tsx), follow him towards the door. Rosencrantz carries the
 *   King's letters: Hamlet has already said of them "There's letters seal'd:
 *   and my two schoolfellows ... They bear the mandate" (3.4). The seal on
 *   the packet is the spot colour, because of what the letters order: "By
 *   letters conjuring to that effect, / The present death of Hamlet."
 * - The King stands on the left, crowned, his near hand pointing them after
 *   him, and smiling: the man who "may smile, and smile, and be a villain"
 *   (1.5), now openly plotting murder.
 *
 * Nothing is taken from a film or stage production. Seeds: 1301 (the room),
 * 1302 (the light in the doorway).
 */

const DOOR = { x0: 626, x1: 734, top: 58 }
/** Where the light comes from: the passage beyond the door. */
const SOURCE: P = [680, 170]
const KING_AT: P = [170, 324]
const ROSENCRANTZ_AT: P = [376, 324]
const GUILDENSTERN_AT: P = [482, 324]
const HAMLET_AT: P = [682, 322]

/** The doorway's light thrown into the room: brightest at the door, falling away. */
const light: Light = (x, y) =>
  Math.max(clamp(1 - Math.hypot((x - SOURCE[0]) * 0.75, (y - SOURCE[1]) * 1.2) / 600) ** 1.4, 0.07)

type Marks = { room: ReturnType<typeof roomMarks>; passage: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const inDoor = (x: number, y: number) => x > DOOR.x0 - 14 && x < DOOR.x1 + 14 && y > DOOR.top - 14
  // The passage beyond the door: its flags and the foot of its far wall, a
  // few ink cuts on the light.
  const r = rng(1302)
  let passage = ''
  for (let k = 0, y = FLOOR - 4; y > FLOOR - 40; k++, y -= 5 + k * 0.6) {
    let x = DOOR.x0 + between(r, 0, 10)
    while (x < DOOR.x1 - 6) {
      const len = between(r, 10, 26)
      passage += gouge(
        x,
        y,
        Math.min(x + len, DOOR.x1 - 4),
        y + between(r, -0.3, 0.3),
        1.1 - k * 0.12,
      )
      x += len + between(r, 6, 14)
    }
  }
  cached = { room: roomMarks(1301, light, inDoor), passage }
  return cached
}

/**
 * The King: standing, crowned, smiling, his near arm out to point after
 * Hamlet; his far hand at rest.
 */
const KING: Pose = {
  look: 'claudius',
  mouth: 'smile',
  head: { rot: -2 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [2, -86],
    ],
  },
  near: {
    pts: [
      [5, -132],
      [24, -118],
      [46, -116],
    ],
    hand: 'point',
  },
}

/**
 * Rosencrantz, the King's letters held to his chest in his near hand, going
 * after Hamlet: one foot forward. His far arm swings behind.
 */
const ROSENCRANTZ: Pose = {
  look: 'rosencrantz',
  sword: true,
  cloak: 6,
  legs: {
    far: [
      [-3, -70],
      [-12, -37],
      [-20, -3],
    ],
    near: [
      [3, -70],
      [12, -38],
      [18, -3],
    ],
  },
  far: {
    pts: [
      [-4, -132],
      [-12, -108],
      [-18, -86],
    ],
  },
  near: {
    pts: [
      [5, -132],
      [8, -102],
      [20, -106],
    ],
    hand: 'mitt',
    deg: -20,
  },
}

/** Guildenstern, ahead of him, already on his way to the door. */
const GUILDENSTERN: Pose = {
  look: 'guildenstern',
  sword: true,
  cloak: 8,
  head: { rot: 2 },
  legs: {
    far: [
      [-3, -70],
      [-14, -37],
      [-24, -3],
    ],
    near: [
      [3, -70],
      [14, -38],
      [22, -3],
    ],
  },
  far: {
    pts: [
      [-4, -132],
      [-2, -104],
      [8, -86],
    ],
  },
  near: {
    pts: [
      [5, -132],
      [-6, -106],
      [-12, -84],
    ],
  },
}

/**
 * Hamlet in the doorway, turned back to the King: bowing a little from the
 * waist, his near hand held out low, open and palm up, from a bent arm.
 */
const HAMLET: Pose = {
  look: 'hamlet',
  head: { rot: 14 },
  body: { neck: [5, -136], hip: [0, -70] },
  cloak: 4,
  legs: {
    far: [
      [-3, -70],
      [-12, -37],
      [-20, -3],
    ],
    near: [
      [3, -70],
      [6, -36],
      [8, -3],
    ],
  },
  far: {
    pts: [
      [0, -130],
      [-8, -106],
      [-10, -82],
    ],
  },
  near: {
    pts: [
      [10, -130],
      [24, -108],
      [44, -102],
    ],
    hand: 'open',
    deg: -4,
    thumb: -1,
  },
}

/**
 * The King's letters: a folded packet, tied, sealed in the spot colour. In
 * Rosencrantz's frame, against his chest above his hand.
 */
function Letters({ at }: { at: P }) {
  const [x, y] = at
  return (
    <g>
      <path
        d={`M${n(x - 13)} ${n(y - 9)}L${n(x + 12)} ${n(y - 11)}L${n(x + 13)} ${n(y + 7)}L${n(x - 12)} ${n(y + 9)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path
        d={`M${n(x - 12.6)} ${n(y - 1)}L${n(x + 12.6)} ${n(y - 3)}M${n(x - 1)} ${n(y - 10)}L${n(x + 0.4)} ${n(y + 8)}`}
        stroke={INK}
        strokeWidth={1.1}
      />
      <circle cx={n(x - 0.3)} cy={n(y - 1.9)} r={4.4} fill={RED} stroke={INK} strokeWidth={0.9} />
      <path d={gouge(x - 2, y - 2.6, x + 1.4, y - 1.2, 0.5)} fill={PAPER} />
    </g>
  )
}

/** The light falling in across the floor from the door, widening towards us. */
const SPILL = `M${DOOR.x0 + 4} ${FLOOR}L${DOOR.x1 - 4} ${FLOOR}L${DOOR.x1 + 30} ${H}L${DOOR.x0 - 120} ${H}Z`

function SentToEngland({ uid }: ArtProps) {
  const m = marks()
  const spill = `${uid}-spill`
  const r = (DOOR.x1 - DOOR.x0) / 2
  return (
    <>
      <defs>
        <clipPath id={spill}>
          <path d={SPILL} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 210], push: 1.03 })}>
        <path d={m.room.wall} fill={PAPER} />
        <Floor marks={m.room} />
        <path d={SPILL} fill={PAPER} />
        <g clipPath={`url(#${spill})`}>
          <path d={m.room.joints} fill={INK} />
        </g>
        <Doorway x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
        {/* the lit passage beyond the door */}
        <path
          d={`M${DOOR.x0 + 1} ${FLOOR}V${n(DOOR.top + r)}A${n(r - 1)} ${n(r - 1)} 0 0 1 ${DOOR.x1 - 1} ${n(DOOR.top + r)}V${FLOOR}Z`}
          fill={PAPER}
        />
        <path d={m.passage} fill={INK} />
        <path
          d={
            shadowPool(KING_AT[0], 328, 50, 4) +
            shadowPool(ROSENCRANTZ_AT[0] - 4, 328, 40, 4) +
            shadowPool(GUILDENSTERN_AT[0] - 4, 328, 40, 4)
          }
          fill={INK}
        />
        <Person pose={KING} at={KING_AT} scale={1.26} />
        <Person pose={ROSENCRANTZ} at={ROSENCRANTZ_AT} scale={1.24}>
          <Letters at={[26, -118]} />
        </Person>
        <Person pose={GUILDENSTERN} at={GUILDENSTERN_AT} scale={1.24} />
        <Person pose={HAMLET} at={HAMLET_AT} scale={1.24} flip />
      </g>
    </>
  )
}

export const sentToEngland: LinocutArt = { width: W, height: H, Draw: SentToEngland }

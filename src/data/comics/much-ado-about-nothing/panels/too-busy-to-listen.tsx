import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { FLOOR, H, Room, W, Window, arch, type Win } from './leonatos-rooms'
import { Person, type Pose } from './people'

/**
 * Act 3, Scene 5: "Too busy to listen", the ninth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "Another Room in Leonato's House." It is drawn from the room of
 *   ./leonatos-rooms.tsx, as "Don John's accusation" is, with the door out of
 *   it standing open on the passage.
 * - DOGBERRY: "we would have them this morning examined"; Hero dresses for
 *   church at "almost five o'clock" (3.4). So it is early morning: the sun,
 *   the spot colour, is rising behind the tower of the church where the
 *   wedding waits ("My lord, they stay for you to give your daughter to her
 *   husband"). The Watch sat on "the church bench" by Leonato's door (3.3),
 *   so the church is near the house.
 * - LEONATO: "Brief, I pray you; for you see it is a busy time with me",
 *   "Neighbours, you are tedious", "I must leave you." So he stands by the
 *   open door, leaning towards it, his near hand lifted open on a bent arm
 *   to stop them.
 * - DOGBERRY talks on, chin up, one hand thrown open; VERGES puts in his
 *   word ("Yes, in truth it is, sir"), and Dogberry says "two men ride of a
 *   horse, one must ride behind". So Verges stands behind him, stooped, a
 *   hand lifted. How the kit dresses the two officers, and why, is in
 *   ./people.tsx.
 * - The Messenger comes in only as Leonato goes, so he is not drawn.
 *
 * Nothing is taken from a film or stage production. Seeds: 9101 (wall and
 * floor), 9102 (the morning sky and the passage).
 */

const WIN: Win = { x0: 420, x1: 520, top: 48, bottom: 192 }
const SUN: [number, number] = [494, 178]
/** The door Leonato is hurrying to, and the lit passage beyond it. */
const DOOR: Win = { x0: 716, x1: 812, top: 70, bottom: FLOOR }

/** Verges, riding behind: stooped, his near hand lifted to put a word in. */
const VERGES: Pose = {
  look: 'verges',
  head: { rot: 12 },
  far: {
    pts: [
      [-3, -130],
      [-2, -106],
      [4, -88],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -128],
      [16, -108],
      [30, -114],
    ],
    hand: 'open',
    deg: -30,
    thumb: -1,
    size: 14,
  },
}

/**
 * Dogberry in full flow: his chin up and one hand thrown open towards
 * Leonato, palm up.
 */
const DOGBERRY: Pose = {
  look: 'dogberry',
  head: { rot: -7 },
  far: {
    pts: [
      [-3, -130],
      [-6, -106],
      [-2, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [24, -114],
      [46, -120],
    ],
    hand: 'open',
    deg: -14,
    thumb: -1,
  },
}

/**
 * Leonato, dressed for his daughter's wedding and on his way to it (flipped
 * to face them): leaning back towards the open door, his near hand lifted
 * open before him on a bent arm to stop the flow.
 */
const LEONATO: Pose = {
  look: 'leonato',
  head: { rot: -8 },
  far: {
    pts: [
      [-3, -132],
      [-12, -108],
      [-18, -88],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [26, -116],
      [46, -124],
    ],
    hand: 'open',
    deg: -68,
    thumb: -1,
  },
  hem: { front: 20, back: 34 },
}

type Marks = { sky: string; passage: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(9102)
  // Early morning: the light low in the east, round the rising sun.
  const light = (x: number, y: number) =>
    clamp(1.15 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.2) / 200) * 0.75 + 0.25
  const sky = gougeField(
    r,
    { x0: WIN.x0 - 20, x1: WIN.x1 + 20, y0: WIN.top, y1: WIN.bottom },
    light,
    {
      spacing: 4.8,
      len: [30, 80],
      gap: [3, 8],
      max: 3.2,
    },
  )
  let passage = ''
  for (let y = DOOR.top + 30; y < DOOR.bottom; y += 16)
    passage += gouge(DOOR.x0 + 6, y, DOOR.x1 - 6, y + 1, 0.8)
  cached = { sky, passage }
  return cached
}

/**
 * The church beyond the roofs, where the wedding waits: a tower with a
 * belfry and a pointed roof. The Watch sat on "the church bench" by
 * Leonato's door (Act 3, Scene 3), so the church is near the house.
 */
const CHURCH =
  'M410 200V182L420 178V140L429 122L438 140V176L452 172L468 180L484 176L500 182L530 184V200Z'
const BELFRY = 'M425 144h8v12h-8Z'

function TooBusy({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [470, 170], push: 1.03 })}>
      <Room seed={9101} win={WIN} />
      <Window
        uid={uid}
        win={WIN}
        outside={
          <>
            <rect
              x={WIN.x0}
              y={WIN.top}
              width={WIN.x1 - WIN.x0}
              height={WIN.bottom - WIN.top}
              fill={INK}
            />
            <path d={m.sky} fill={PAPER} />
            <circle cx={SUN[0]} cy={SUN[1]} r={14} fill={RED} />
            <path d={CHURCH} fill={INK} />
            <path d={BELFRY} fill={PAPER} />
          </>
        }
      />
      {/* the open door and the lit passage beyond */}
      <path
        d={arch({ x0: DOOR.x0 - 10, x1: DOOR.x1 + 10, top: DOOR.top - 10, bottom: DOOR.bottom })}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={arch(DOOR)} fill={PAPER} />
      <path d={m.passage} fill={INK} />
      <path
        d={`M${DOOR.x1 + 12} ${DOOR.top + 44}L${DOOR.x1 + 40} ${DOOR.top + 30}V${DOOR.bottom + 12}L${DOOR.x1 + 12} ${DOOR.bottom}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(DOOR.x1 + 22, DOOR.top + 46, DOOR.x1 + 22, DOOR.bottom + 2, 1) +
          gouge(DOOR.x1 + 31, DOOR.top + 42, DOOR.x1 + 31, DOOR.bottom + 6, 1)
        }
        fill={PAPER}
      />
      <Person pose={VERGES} at={[212, 318]} scale={1.12} />
      <Person pose={DOGBERRY} at={[316, 318]} scale={1.12} />
      <Person pose={LEONATO} at={[664, 318]} scale={1.12} flip />
    </g>
  )
}

export const tooBusyToListen: LinocutArt = { width: W, height: H, Draw: TooBusy }

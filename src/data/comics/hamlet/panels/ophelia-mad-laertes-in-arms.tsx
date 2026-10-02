import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, deg, gouge, n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Doorway, Floor, H, W, planks, roomMarks, shadowPool, type Light } from './acts-3-4-rooms'
import { Person, rapier, type P, type Pose } from './people'

/**
 * Act 4, Scene 5: "Ophelia mad, Laertes in arms", the fifteenth moment in the
 * guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/hamlet.ts):
 *
 * - "Elsinore. A room in the Castle." "The doors are broke. [Enter Laertes,
 *   armed; Danes following.]" "Sirs, stand you all without." "[They retire
 *   without the door.]" "Keep the door." So on the left the doors hang
 *   broken in their arch, one leaf torn from its upper hinge and the other
 *   split, on the dark of the passage where the Danes keep the door.
 * - "[Re-enter Ophelia, fantastically dressed with straws and flowers.]"
 *   "There's rosemary, that's for remembrance; pray love, remember." So
 *   Ophelia stands in the light in the middle of the room, straws and flowers
 *   in her loose hair and at her girdle, holding out a sprig of rosemary to
 *   her brother. Her head is bowed and her eyes are down: she is drawn with
 *   the dignity of her grief ("I cannot choose but weep, to think they would
 *   lay him i' th' cold ground"), never as a spectacle. The flowers are hers,
 *   the ones she names, and they are the spot colour, the one bright thing in
 *   the room.
 * - Laertes, "armed", still has his rapier drawn from breaking in, but holds
 *   it low and turned away from her, its point on the floor behind him, and
 *   reaches out his other hand for the rosemary, his head bowed to her: "O
 *   rose of May! Dear maid, kind sister, sweet Ophelia!"
 * - The King and Queen stand on the right and watch. "Thought and affliction,
 *   passion, hell itself / She turns to favour and to prettiness." The Queen
 *   holds her hands together; the King's are at rest.
 *
 * The play gives no hour for the scene and names no lamp, so no light is
 * drawn: the wall is lit most behind Ophelia, the one the picture is about.
 * Nothing is taken from a film or stage production. Seeds: 1501 (the room).
 */

const DOOR = { x0: 46, x1: 150, top: 70 }
const OPHELIA_AT: P = [318, 328]
const LAERTES_AT: P = [462, 326]
const KING_AT: P = [664, 324]
const QUEEN_AT: P = [760, 324]

/** The light on the wall: most behind Ophelia, falling away to the sides. */
const light: Light = (x, y) =>
  Math.max(clamp(1 - Math.hypot((x - 330) * 0.7, (y - 118) * 1.05) / 400) ** 1.05, 0.07)

type Marks = { room: ReturnType<typeof roomMarks> }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const inDoor = (x: number, y: number) => x > DOOR.x0 - 14 && x < DOOR.x1 + 14 && y > DOOR.top - 14
  cached = { room: roomMarks(1501, light, inDoor) }
  return cached
}

// ── The broken doors ────────────────────────────────────────────────────────

/**
 * The left leaf, torn from its upper hinge: still held at the foot of the
 * jamb, it has swung in and leans with its top fallen out towards the room.
 */
const LEAF_FALLEN = 'M50 262L86 76L118 82L84 266Z'
/** The right leaf, split: its top planks broken away in a jagged line. */
const LEAF_SPLIT = 'M100 262L100 150L108 138L114 156L122 128L130 150L138 132L146 158V262Z'

function BrokenDoors() {
  const r = (DOOR.x1 - DOOR.x0) / 2
  return (
    <g>
      <Doorway x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
      {/* the split leaf, still on its hinges at the right jamb */}
      <path
        d={LEAF_SPLIT}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={planks(100, 146, 160, 262, 3)} fill={PAPER} />
      <path d="M100 196H146M100 236H146" stroke={PAPER} strokeWidth={2.2} />
      {/* the fallen leaf, torn from its upper hinge */}
      <path
        d={LEAF_FALLEN}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(62, 252, 96, 82, 1.2) +
          gouge(74, 256, 107, 84, 1.2) +
          gouge(56, 200, 104, 208, 1.6) +
          gouge(66, 130, 112, 138, 1.6)
        }
        fill={PAPER}
      />
      {/* splinters where the hinge was torn out, and from the broken planks */}
      <path
        d={`M${DOOR.x0 + 2} ${n(DOOR.top + r + 12)}l8 -4M${DOOR.x0 + 2} ${n(DOOR.top + r + 18)}l9 1M140 132l6 -10M118 130l4 -12M112 158l-5 -9`}
        stroke={PAPER}
        strokeWidth={1.3}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  )
}

// ── Ophelia's flowers ───────────────────────────────────────────────────────

/**
 * One small flower: five petals in the spot colour round a paper heart. Also
 * cut by "The plot, and a drowning" for the flowers on the brook, so that
 * Ophelia's flowers are the same flowers wherever they are.
 */
export function flower(x: number, y: number, s = 1): { petals: string; heart: string } {
  let petals = ''
  for (let k = 0; k < 5; k++) {
    const a = deg(-90 + k * 72)
    const cx = x + Math.cos(a) * 2.3 * s
    const cy = y + Math.sin(a) * 2.3 * s
    const rr = 1.75 * s
    petals += `M${n(cx - rr)} ${n(cy)}a${n(rr)} ${n(rr)} 0 1 0 ${n(2 * rr)} 0a${n(rr)} ${n(rr)} 0 1 0 ${n(-2 * rr)} 0Z`
  }
  const h = 0.95 * s
  return {
    petals,
    heart: `M${n(x - h)} ${n(y)}a${n(h)} ${n(h)} 0 1 0 ${n(2 * h)} 0a${n(h)} ${n(h)} 0 1 0 ${n(-2 * h)} 0Z`,
  }
}

function Flowers({ at }: { at: [number, number, number][] }) {
  const all = at.map(([x, y, s]) => flower(x, y, s))
  return (
    <g>
      <path d={all.map((f) => f.petals).join('')} fill={RED} stroke={INK} strokeWidth={0.7} />
      <path d={all.map((f) => f.heart).join('')} fill={PAPER} />
    </g>
  )
}

/**
 * Ophelia's head-dress of straws and flowers, in her head's frame: straws
 * tucked into her hair round the crown and trailing back from it, cut in
 * paper with an ink edge so they read against the lit wall, and three flowers
 * on the crown and at the back, well above her face.
 *
 * WHY THEY TRAIL BACK (2 October 2026). They were first cut standing out all
 * round her head, and at panel size the ring of spikes read as a wild crown:
 * the spectacle the play's rule forbids. Tucked and trailing, they are a
 * garland.
 */
const STRAWS =
  'M3 -19.4Q-4 -26 -9 -32M-4 -19Q-12 -24 -20 -26M-10 -16.6Q-19 -18 -27 -16M-15 -11Q-23 -9 -30 -5M-17 -4Q-23 1 -28 6'
const HEAD_FLOWERS: [number, number, number][] = [
  [-13, -19, 1.5],
  [-1, -23, 1.45],
  [-21, -6, 1.35],
]

/** The sprig of rosemary, from her fingers up and forward: a stem, its narrow leaves, its small flowers. */
function Rosemary({ from, a, len }: { from: P; a: number; len: number }) {
  const u: P = [Math.cos(deg(a)), Math.sin(deg(a))]
  const v: P = [-u[1], u[0]]
  const at = (t: number, side: number): P => [
    from[0] + u[0] * t + v[0] * side,
    from[1] + u[1] * t + v[1] * side,
  ]
  const end = at(len, 0)
  let leaves = ''
  for (let t = 7, k = 0; t < len - 6; t += 4.4, k++) {
    const side = k % 2 ? 1 : -1
    const b = at(t, 0)
    const tip = at(t + 5, side * 7)
    leaves += gouge(b[0], b[1], tip[0], tip[1], 1.3)
  }
  return (
    <g>
      <path
        d={`M${n(from[0])} ${n(from[1])}L${n(end[0])} ${n(end[1])}`}
        stroke={INK}
        strokeWidth={3.6}
        strokeLinecap="round"
      />
      <path d={leaves} fill={INK} stroke={INK} strokeWidth={1.6} />
      <path
        d={`M${n(from[0])} ${n(from[1])}L${n(end[0])} ${n(end[1])}`}
        stroke={PAPER}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path d={leaves} fill={PAPER} />
      <Flowers
        at={[[end[0], end[1], 1.25], [...at(len - 12, 5.6), 1.1] as [number, number, number]]}
      />
    </g>
  )
}

// ── The people ──────────────────────────────────────────────────────────────

/**
 * Ophelia, facing her brother: her head bowed, her eyes down, her near arm
 * held out with the sprig; her far arm at her side. No hand is near a red
 * flower but the one holding the sprig's stem, far below its flowers: the
 * kit's rule keeps red off every hand (./people.tsx).
 */
const OPHELIA: Pose = {
  look: 'ophelia',
  head: { rot: 12 },
  eye: 'down',
  far: {
    pts: [
      [-3, -126],
      [-7, -104],
      [-5, -82],
    ],
  },
  near: {
    pts: [
      [4, -126],
      [14, -104],
      [34, -110],
    ],
    hand: 'grip',
    deg: -12,
  },
}

/**
 * Laertes, facing her: his head bowed to her, his far hand out low and open
 * for the rosemary, his drawn rapier held low in his near hand, its point on
 * the floor behind him.
 */
const LAERTES: Pose = {
  look: 'laertes',
  head: { rot: 10 },
  eye: 'down',
  brow: 'sorrow',
  cloak: 4,
  legs: {
    far: [
      [-3, -70],
      [-2, -36],
      [-4, -3],
    ],
    near: [
      [3, -70],
      [10, -37],
      [14, -3],
    ],
  },
  far: {
    pts: [
      [-2, -132],
      [12, -110],
      [34, -104],
    ],
    hand: 'open',
    deg: -12,
    thumb: -1,
  },
  near: {
    pts: [
      [5, -132],
      [8, -106],
      [14, -86],
    ],
    hand: 'grip',
    deg: 112,
  },
}
const LAERTES_GRIP: P = [12, -81.4]

/** The King, watching, his hands at rest. */
const KING: Pose = {
  look: 'claudius',
  far: {
    pts: [
      [-3, -132],
      [-4, -106],
      [4, -86],
    ],
  },
  near: {
    pts: [
      [5, -132],
      [8, -106],
      [16, -90],
    ],
  },
}

/** The Queen, watching, her hands held together before her. */
const QUEEN: Pose = {
  look: 'gertrude',
  head: { rot: 6 },
  eye: 'down',
  far: {
    pts: [
      [-3, -126],
      [2, -104],
      [14, -104],
    ],
  },
  near: {
    pts: [
      [4, -126],
      [8, -104],
      [18, -106],
    ],
  },
}

function OpheliaMadLaertesInArms({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [380, 200], push: 1.03 })}>
      <path d={m.room.wall} fill={PAPER} />
      <Floor marks={m.room} />
      <BrokenDoors />
      <path
        d={
          shadowPool(OPHELIA_AT[0] - 4, 330, 46, 4) +
          shadowPool(LAERTES_AT[0], 330, 40, 4) +
          shadowPool(KING_AT[0], 328, 44, 4) +
          shadowPool(QUEEN_AT[0], 328, 40, 4)
        }
        fill={INK}
      />
      <Person pose={QUEEN} at={QUEEN_AT} scale={1.24} flip />
      <Person pose={KING} at={KING_AT} scale={1.24} flip />
      <Person pose={LAERTES} at={LAERTES_AT} scale={1.26} flip>
        <path
          d={rapier(LAERTES_GRIP, 112, 78)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
      </Person>
      <Person pose={OPHELIA} at={OPHELIA_AT} scale={1.38}>
        <g transform="translate(3 -154) rotate(12)">
          <path d={STRAWS} stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
          <path d={STRAWS} stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
          <Flowers at={HEAD_FLOWERS} />
        </g>
        {/* straws and flowers tucked into her girdle, hanging down the skirt */}
        <path
          d={
            gouge(3, -94, 9, -70, 1.4) + gouge(-2, -94, -2, -72, 1.3) + gouge(6, -95, 16, -76, 1.3)
          }
          fill={PAPER}
        />
        <Flowers
          at={[
            [5, -95, 1.45],
            [14, -88, 1.4],
          ]}
        />
        <Rosemary from={[40, -113]} a={-62} len={46} />
      </Person>
    </g>
  )
}

export const opheliaMadLaertesInArms: LinocutArt = {
  width: W,
  height: H,
  Draw: OpheliaMadLaertesInArms,
}

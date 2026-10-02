import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { LINE, INK, PAPER } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import {
  CandleStand,
  Doorway,
  Floor,
  H,
  W,
  flameGlow,
  flameLight,
  passageFloor,
  roomMarks,
  shadowPool,
} from './acts-3-4-rooms'
import { KneelingKing } from './kneeling-king'
import { Person, rapier, type P, type Pose } from './people'

/**
 * Act 3, Scene 3: "The King at prayer", the eleventh moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/hamlet.ts):
 *
 * - "A room in the Castle." The same night as the play: Polonius will call
 *   on the King "ere you go to bed". So it is a castle room by night, its one
 *   light a candle on a tall stand (./acts-3-4-rooms.tsx).
 * - "Help, angels! Make assay: / Bow, stubborn knees ... [Retires and
 *   kneels.]" So Claudius kneels on the flags, facing the candle, his head
 *   bowed, his eyes shut and his hands joined, and does not see who is behind
 *   him (./kneeling-king.tsx). He wears his crown, and it is printed in the
 *   spot colour: it is the first of the three things he will not give up, and
 *   why the prayer fails, "My crown, mine own ambition, and my queen."
 * - "[Enter Hamlet.] Now might I do it pat, now he is praying." Hamlet has
 *   come in by the door behind the King, on his way to his mother ("My mother
 *   stays"), and stands behind him with his rapier drawn. Then: "No. / Up,
 *   sword, and know thou a more horrid hent". So the picture is that moment:
 *   the blade held low at his side and turned away from the King, its point
 *   to the floor behind Hamlet's own feet. His brow is drawn down and his eyes
 *   are on the King: he is reasoning, not striking.
 *
 * THE QUOTATION on the panel is Hamlet's line for the moment drawn. The
 * guide's own for the moment, the King's "My words fly up, my thoughts remain
 * below.", is spoken after Hamlet has gone, and the key-moments player prints
 * it under the panel, so the student gets both halves of the irony.
 *
 * WHY NO SCABBARD (2 October 2026). The empty scabbard was first hung at his
 * hip, as the kit hangs a sheathed one; at panel size its paper edge made it
 * the brighter, longer shape, and it read as the sword, held out behind him.
 * The one blade is the drawn one.
 *
 * SAFEGUARDING. The play's rule (./people.tsx): violence suggested, never
 * shown. The sword never points at the King, and nothing is raised over him.
 *
 * Nothing is taken from a film or stage production. Seeds: 1101 (the room),
 * 1102 (the candle's light), 1103 (the passage beyond the door).
 */

const FLAME: P = [668, 146]
const DOOR = { x0: 150, x1: 228, top: 96 }
/** Hamlet's feet, and the point on the floor under the King's waist. */
const HAMLET_AT: P = [356, 324]
const KING_AT: P = [546, 318]

const light = flameLight(FLAME, 560, 0.1)

type Marks = {
  room: ReturnType<typeof roomMarks>
  glow: string
  passage: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const hidden = (x: number, y: number) => x > DOOR.x0 - 14 && x < DOOR.x1 + 14 && y > DOOR.top - 14
  cached = {
    room: roomMarks(1101, light, hidden),
    glow: flameGlow(1102, FLAME, 104),
    passage: passageFloor(DOOR.x0, DOOR.x1, 1103),
  }
  return cached
}

/**
 * Hamlet: the kit's figure, standing still, his face to the King. The near
 * hand holds the rapier low, its point to the floor behind him; the far arm
 * hangs at his side.
 */
const HAMLET: Pose = {
  look: 'hamlet',
  head: { rot: 9 },
  eye: 'down',
  brow: 'frown',
  cloak: 3,
  legs: {
    far: [
      [-3, -70],
      [-8, -36],
      [-12, -3],
    ],
    near: [
      [3, -70],
      [8, -36],
      [11, -3],
    ],
  },
  far: {
    pts: [
      [-4, -132],
      [-7, -104],
      [-4, -80],
    ],
  },
  near: {
    pts: [
      [5, -132],
      [12, -106],
      [22, -90],
    ],
    hand: 'grip',
    deg: 116,
  },
}
/** The sword's grip in Hamlet's frame, and its blade: down, and back, away from the King. */
const GRIP: P = [20.4, -85.6]
const BLADE_DEG = 116
const BLADE_LEN = 84

function TheKingAtPrayer({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [460, 220], push: 1.03 })}>
      <path d={m.room.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      <Floor marks={m.room} />
      <Doorway x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
      <path d={m.passage} fill={PAPER} />
      <CandleStand flame={FLAME} floor={302} />
      <path
        d={shadowPool(KING_AT[0] - 10, 322, 70, 4) + shadowPool(HAMLET_AT[0] - 4, 328, 44, 4)}
        fill={INK}
      />
      <KneelingKing uid={uid} at={KING_AT} scale={1.28} />
      <Person pose={HAMLET} at={HAMLET_AT} scale={1.28}>
        {/* the drawn rapier, held low and turned away: an ink edge round the paper steel */}
        <path
          d={rapier(GRIP, BLADE_DEG, BLADE_LEN)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
      </Person>
    </g>
  )
}

export const theKingAtPrayer: LinocutArt = { width: W, height: H, Draw: TheKingAtPrayer }

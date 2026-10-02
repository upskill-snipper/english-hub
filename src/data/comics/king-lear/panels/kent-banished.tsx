import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { BritainCrown, Person } from './people'
import {
  ArchedWindow,
  ClothOfState,
  Dais,
  FLOOR_Y,
  H,
  Throne,
  W,
  floorMarks,
  wallMarks,
} from './room-of-state'

/**
 * Act 1, Scene 1: "Kent banished, Cordelia taken by France", the second
 * moment in the guide's timeline. The same room of state as the love test
 * (./room-of-state.tsx, the same seeds), moments later. Every detail is from
 * the scene (the held edition, src/data/full-texts/king-lear.ts):
 *
 * - Lear has given his crown away: "Cornwall and Albany ... This coronet part
 *   between you. [Giving the crown.]" So his seat is empty and he is
 *   bareheaded, and the crown, printed in the spot colour as it was on his
 *   head in the love test, is in Cornwall's hands, with Albany beside him.
 * - Kent protests: "Royal Lear, Whom I have ever honour'd as my king". Lear:
 *   "The bow is bent and drawn; make from the shaft." Kent: "Let it fall
 *   rather, though the fork invade The region of my heart", and then "See
 *   better, Lear; and let me still remain The true blank of thine eye." Lear,
 *   "O vassal! Miscreant! [Laying his hand on his sword.]", and Albany and
 *   Cornwall cry "Dear sir, forbear!" So Lear has risen and stands on the dais
 *   with his hand laid on the hilt of his sword, which stays in its scabbard,
 *   and points Kent from his sight ("Out of my sight!"); Kent faces him with
 *   his hand on his heart and his other hand held out, open and low; Albany
 *   holds out an open hand to the King.
 * - Cordelia, disowned a moment before, stands apart behind Kent, who is
 *   speaking for her ("Thy youngest daughter does not love thee least"), and
 *   Goneril and Regan stand together at the side, watching.
 * - WHO IS NOT HERE. France and Burgundy come in only after Kent has gone
 *   ("[Exit.] Flourish. Re-enter Gloucester, with France, Burgundy"), so they
 *   are never on the stage with him, and this panel, which is Kent's moment,
 *   leaves them out rather than put them in the room at the wrong time.
 *   Gloucester and Edmund are out of the room too.
 *
 * The sword is never drawn from its scabbard: the threat, not the blow. How
 * each person looks, and why, is in ./people.tsx. Nothing is taken from a film
 * or stage production. Seeds: 1101 (wall) and 1102 (floor), shared with the
 * love test so the room is the same, and 1203 (cloth of state).
 */

/** The window's light falls across the wall from the right, as in the love test. */
const light = (x: number, y: number) => {
  const win = clamp(1 - Math.hypot((x - 790) * 0.7, (y - 150) * 1.1) / 360)
  return Math.max(win * 0.86, 0.07)
}

type Marks = {
  wall: { cuts: string; joints: string }
  floor: string
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const shadows = footShadow(456, 335, 40) + footShadow(664, 307, 32) + footShadow(756, 293, 34)
  cached = { wall: wallMarks(1101, light), floor: floorMarks(1102, [420, 100]), shadows }
  return cached
}

function KentBanished(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [330, 170], push: 1.03 })}>
      {/* the same room of state */}
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />
      <ArchedWindow x={790} y={88} w={74} h={118} />
      <rect x={0} y={FLOOR_Y} width={W} height={H - FLOOR_Y} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shadows} fill={INK} />
      <ClothOfState x0={26} x1={242} y0={22} y1={236} seed={1203} />
      <Dais x1={252} y={314} />
      {/* his seat, empty */}
      <Throne x={130} seatY={246} top={48} floor={314} />

      {/* Cornwall holding the crown, Albany beside him: "Dear sir, forbear!" */}
      <Person
        pose={{
          look: 'cornwall',
          far: {
            pts: [
              [-3, -128],
              [6, -110],
              [16, -104],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [16, -112],
              [20, -104],
            ],
            hand: 'grip',
            deg: -70,
          },
        }}
        at={[606, 250]}
        scale={0.92}
        flip
      >
        <BritainCrown at={[23, -106]} scale={1.2} />
      </Person>
      <Person
        pose={{
          look: 'albany',
          far: {
            pts: [
              [-3, -128],
              [-6, -104],
              [-4, -80],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [20, -116],
              [36, -118],
            ],
            hand: 'open',
            deg: -8,
          },
        }}
        at={[566, 256]}
        scale={0.94}
        flip
      />

      {/* Goneril and Regan together at the side, watching */}
      <Person
        pose={{
          look: 'goneril',
          far: {
            pts: [
              [-3, -124],
              [-4, -102],
              [2, -84],
            ],
          },
          near: {
            pts: [
              [4, -124],
              [13, -106],
              [6, -114],
            ],
            deg: 160,
          },
        }}
        at={[794, 288]}
        scale={0.98}
        flip
      />
      <Person
        pose={{
          look: 'regan',
          far: {
            pts: [
              [-3, -124],
              [-5, -106],
              [8, -98],
            ],
            deg: -8,
          },
          near: {
            pts: [
              [4, -124],
              [11, -107],
              [4, -98],
            ],
            deg: 176,
          },
        }}
        at={[756, 292]}
        scale={1}
        flip
      />

      {/* Cordelia, apart, behind the man who speaks for her */}
      <Person
        pose={{
          look: 'cordelia',
          head: { rot: 5 },
          far: {
            pts: [
              [-3, -125],
              [-5, -106],
              [9, -98],
            ],
            deg: -8,
          },
          near: {
            pts: [
              [4, -125],
              [12, -108],
              [3, -99],
            ],
            deg: 176,
          },
        }}
        at={[664, 306]}
        scale={1.12}
        flip
      />

      {/* Lear, risen, his hand on his sword, pointing Kent from his sight */}
      <Person
        pose={{
          look: 'lear',
          sword: true,
          frown: true,
          head: { rot: 2 },
          far: {
            pts: [
              [-3, -128],
              [14, -128],
              [38, -136],
            ],
            hand: 'point',
            deg: -12,
          },
          near: {
            pts: [
              [6, -128],
              [21, -114],
              [7, -103],
            ],
            hand: 'mitt',
            deg: 16,
          },
        }}
        at={[204, 314]}
        scale={1.32}
      />

      {/* Kent, facing him: "See better, Lear" */}
      <Person
        pose={{
          look: 'kent',
          head: { rot: -3 },
          far: {
            pts: [
              [-3, -128],
              [12, -112],
              [30, -106],
            ],
            hand: 'open',
            deg: -14,
          },
          near: {
            pts: [
              [4, -128],
              [13, -112],
              [7, -119],
            ],
            deg: 200,
          },
        }}
        at={[458, 334]}
        scale={1.3}
        flip
      />
    </g>
  )
}

export const kentBanished: LinocutArt = { width: W, height: H, Draw: KentBanished }

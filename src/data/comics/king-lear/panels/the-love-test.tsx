import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person } from './people'
import {
  ArchedWindow,
  ClothOfState,
  Dais,
  FLOOR_Y,
  H,
  KingdomMap,
  Throne,
  W,
  floorMarks,
  wallMarks,
} from './room-of-state'

/**
 * Act 1, Scene 1: "The love test", the first moment in the guide's timeline.
 * Every detail is from the scene (the held edition,
 * src/data/full-texts/king-lear.ts):
 *
 * - "A Room of State in King Lear's Palace". Lear calls "Give me the map
 *   there. Know that we have divided In three our kingdom", and gives each
 *   daughter her share from it: "Of all these bounds, even from this line to
 *   this, With shadowy forests and with champains rich'd, With plenteous
 *   rivers and wide-skirted meads". So the map stands in the middle of the
 *   room, its forests, rivers and meadows cut on it, and the two lines that
 *   divide it in three are the spot colour: the scene is the dividing of the
 *   kingdom.
 * - The moment is Cordelia's answer and his: "Nothing, my lord." "Nothing?"
 *   "Nothing." "Nothing will come of nothing: speak again." He has asked "what
 *   can you say to draw A third more opulent than your sisters?" So Lear, on
 *   his high seat under the cloth of state, leans forward and points to the
 *   map, his eyes on her; Cordelia stands alone on the open floor facing him,
 *   her hands folded, saying nothing more.
 * - Goneril and Regan have spoken and been given their thirds, and stand on
 *   either side of the map with their husbands behind them, Albany and
 *   Cornwall ("Our son of Cornwall, And you, our no less loving son of
 *   Albany"). Kent is present (he speaks next, "Good my liege"), and stands
 *   behind Cordelia, nearest us. Gloucester and Edmund have gone out before
 *   the test begins ("Exeunt Gloucester and Edmund"), so they are not here.
 * - Lear still wears his crown: he gives it away later in the scene ("This
 *   coronet part between you. [Giving the crown.]").
 *
 * How each person looks, and why, is in ./people.tsx. Cordelia, "Fairest
 * Cordelia" to France in the same scene, is the one figure cut in paper. The
 * room is ./room-of-state.tsx, shared with the next moment. Nothing is taken
 * from a film or stage production. Seeds: 1101 (wall), 1102 (floor), 1103
 * (cloth of state), 1104 (the map's meadows).
 */

/** The window's light falls across the wall from the right. */
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
  const shadows = footShadow(298, 251, 26) + footShadow(498, 251, 26) + footShadow(640, 335, 40)
  cached = { wall: wallMarks(1101, light), floor: floorMarks(1102, [420, 100]), shadows }
  return cached
}

function LoveTest(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [400, 170], push: 1.03 })}>
      {/* the stone wall of the hall, lit from the window */}
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill={PAPER} />
      <ArchedWindow x={790} y={88} w={74} h={118} />

      {/* the floor */}
      <rect x={0} y={FLOOR_Y} width={W} height={H - FLOOR_Y} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* the cloth of state, the dais and the King's seat */}
      <ClothOfState x0={26} x1={242} y0={22} y1={236} seed={1103} />
      <Dais x1={252} y={314} />
      <Throne x={168} seatY={246} top={48} floor={314} />

      {/* the map of the kingdom, its lines of division in red */}
      <KingdomMap
        x={334}
        y={50}
        w={132}
        h={166}
        seed={1104}
        redStyle={timing({ delay: 0.7, dur: 1.3 })}
      />

      {/* Albany behind Goneril, Cornwall behind Regan, on either side of the map */}
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
              [4, -128],
              [8, -104],
              [10, -80],
            ],
          },
        }}
        at={[270, 246]}
        scale={0.86}
      />
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
        at={[302, 252]}
        scale={0.9}
      />
      <Person
        pose={{
          look: 'cornwall',
          far: {
            pts: [
              [-3, -128],
              [-6, -104],
              [-4, -80],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [9, -104],
              [12, -82],
            ],
          },
        }}
        at={[470, 246]}
        scale={0.86}
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
        at={[502, 252]}
        scale={0.9}
      />

      {/* Lear on his high seat, crowned, leaning forward and pointing to the map */}
      <Person
        pose={{
          look: 'lear',
          crown: true,
          seated: { seat: 50 },
          head: { at: [8, -126], rot: 4 },
          body: { neck: [5, -104], hip: [0, -58] },
          far: {
            pts: [
              [-2, -98],
              [-6, -76],
              [14, -66],
            ],
            deg: 4,
          },
          near: {
            pts: [
              [8, -98],
              [30, -90],
              [54, -96],
            ],
            hand: 'point',
            deg: -10,
          },
        }}
        at={[150, 314]}
        scale={1.38}
      />

      {/* Kent, nearest us, against the window, watching */}
      <Person
        pose={{
          look: 'kent',
          far: {
            pts: [
              [-3, -128],
              [-6, -104],
              [-4, -80],
            ],
          },
          near: {
            pts: [
              [4, -128],
              [12, -110],
              [8, -118],
            ],
            deg: 200,
          },
        }}
        at={[792, 350]}
        scale={1.32}
        flip
      />

      {/* Cordelia, alone on the open floor, her hands folded: "Nothing." */}
      <Person
        pose={{
          look: 'cordelia',
          head: { rot: 3 },
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
        at={[640, 334]}
        scale={1.44}
        flip
      />
    </g>
  )
}

export const theLoveTest: LinocutArt = { width: W, height: H, Draw: LoveTest }

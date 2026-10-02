import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { timing } from '@/components/comics/linocut/styles'

import { Floor, keep, roomMarks, shadowPool } from './acts-3-4-rooms'
import {
  Arras,
  ChairsOfState,
  FLOOR,
  H,
  LobbyWindow,
  W,
  daylight,
  dimBelow,
  inWindow,
  sunOnFloor,
  type ArrasBox,
  type Win,
} from './lobby'
import { Person } from './people'

/**
 * Act 2, Scene 2: "The rogue and peasant slave", the eighth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - "[Exeunt Rosencrantz and Guildenstern.] HAMLET: Ay, so, God b' wi' ye.
 *   Now I am alone." So Hamlet is the only person in the picture: the First
 *   Player, whose tears for Hecuba set the speech going, has already gone
 *   ("Follow that lord, and look you mock him not. [Exit First Player.]").
 * - The room is the lobby of ./lobby.tsx, where the scene began with "Enter
 *   King, Queen, Rosencrantz, Guildenstern and Attendants." So the King's and
 *   Queen's chairs of state stand on their dais under the cloth, empty now.
 *   It is day: "I'll leave you till night", he has just told his friends, and
 *   the play is for "tomorrow night".
 * - "I'll have these players Play something like the murder of my father
 *   Before mine uncle. I'll observe his looks ... The play's the thing
 *   Wherein I'll catch the conscience of the King." So Hamlet strides out of
 *   the window's light towards the empty chairs and points at the King's,
 *   and the crown worked on the cloth above it is the one spot colour: the
 *   King whose conscience the play is to catch.
 * - "Bloody, bawdy villain! Remorseless, treacherous, lecherous, kindless
 *   villain!" So his brow is drawn down (the kit's frown), and no more: the
 *   self-reproach of "O what a rogue and peasant slave am I!" is left to the
 *   words, because it has no single gesture the print could show.
 *
 * Hamlet is the kit's (./people.tsx): bareheaded, his dark hair to the jaw, in
 * "my inky cloak" (1.2). Nothing is taken from a film or stage production.
 *
 * Seeds: 8101 (the wall and the flags), 8102 and 8103 (the windows' skies),
 * 8104 (the arras).
 */

const WIN_A: Win = { x0: 40, x1: 106, top: 60, bottom: 198 }
const WIN_B: Win = { x0: 238, x1: 304, top: 60, bottom: 198 }
const CHAIRS: [number, number] = [618, FLOOR]
const CHAIR_SCALE = 0.98
/** The arras of the lobby, its far end beyond the frame. */
const ARRAS: ArrasBox = { x0: 772, x1: 910, top: 44, bottom: 252 }
/** Where Hamlet stands, and how large. */
const HAMLET_AT: [number, number] = [262, 326]
const HAMLET_SCALE = 1.2

const light = daylight([WIN_A, WIN_B])
const hidden = (x: number, y: number) =>
  inWindow(WIN_A, x, y) ||
  inWindow(WIN_B, x, y) ||
  (x > CHAIRS[0] - 106 && x < CHAIRS[0] + 106 && y > FLOOR - 246 * CHAIR_SCALE) ||
  (x > ARRAS.x0 - 4 && y > ARRAS.top - 8)

/** The day across the flags, from both windows. */
const SUNS = [sunOnFloor(WIN_A, 40), sunOnFloor(WIN_B, 70)]
const SUN = SUNS.map((s) => s.d).join('')

type Marks = { room: ReturnType<typeof roomMarks>; sunJoints: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const room = roomMarks(8101, dimBelow(light), hidden)
  const sunJoints = keep(room.joints, (x, y) => !SUNS.some((s) => s.inside(x, y)))
  cached = { room, sunJoints }
  return cached
}

function TheRogueAndPeasantSlave({ uid }: ArtProps) {
  const m = marks()
  const sun = `${uid}-sun`
  return (
    <>
      <defs>
        <clipPath id={sun}>
          <path d={SUN} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 190], push: 1.03 })}>
        {/* the lobby by day: its stone, its flags, the light thrown across them */}
        <path d={m.room.wall} fill={PAPER} />
        <Floor marks={m.room} />
        <path d={SUN} fill={PAPER} />
        <g clipPath={`url(#${sun})`}>
          <path d={m.sunJoints} fill={INK} />
        </g>
        <LobbyWindow uid={uid} win={WIN_A} seed={8102} />
        <LobbyWindow uid={uid} win={WIN_B} seed={8103} />
        <Arras uid={uid} a={ARRAS} seed={8104} />

        {/* the King's and Queen's chairs of state, empty, the crown over his */}
        <ChairsOfState uid={uid} at={CHAIRS} scale={CHAIR_SCALE} crown />
        <path d={shadowPool(CHAIRS[0], FLOOR + 6, 104, 4)} fill={INK} />

        {/* Hamlet, alone: "The play's the thing" */}
        <path d={shadowPool(HAMLET_AT[0] + 6, HAMLET_AT[1] + 2, 54, 4)} fill={INK} />
        <Person
          at={HAMLET_AT}
          scale={HAMLET_SCALE}
          pose={{
            look: 'hamlet',
            head: { rot: -4 },
            brow: 'frown',
            cloak: 9,
            legs: {
              far: [
                [-3, -70],
                [-13, -37],
                [-25, -3],
              ],
              near: [
                [3, -70],
                [15, -38],
                [23, -3],
              ],
            },
            far: {
              pts: [
                [-4, -132],
                [-9, -106],
                [-3, -84],
              ],
            },
            near: {
              pts: [
                [5, -132],
                [31, -130],
                [56, -137],
              ],
              hand: 'point',
            },
          }}
        />
      </g>
    </>
  )
}

export const theRogueAndPeasantSlave: LinocutArt = {
  width: W,
  height: H,
  Draw: TheRogueAndPeasantSlave,
}

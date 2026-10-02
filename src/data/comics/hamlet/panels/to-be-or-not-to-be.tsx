import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, n } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Floor, keep, roomMarks, shadowPool } from './acts-3-4-rooms'
import {
  Arras,
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
 * Act 3, Scene 1: "To be, or not to be" and the nunnery scene, the ninth
 * moment in the guide's timeline, drawn at the soliloquy, before Hamlet sees
 * Ophelia. Every detail is from the scene in the held edition
 * (src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - KING: "Her father and myself, lawful espials, Will so bestow ourselves
 *   that, seeing unseen, We may of their encounter frankly judge"; Polonius
 *   had planned it in Act 2, Scene 2: "Be you and I behind an arras then,
 *   Mark the encounter." So the King and Polonius are behind the arras of
 *   the lobby (./lobby.tsx), peering out round its edge: the King in his
 *   crown, Polonius white-bearded under his flat bonnet, as the kit cuts
 *   them, and the hems of their gowns show under its fringe. The King's
 *   crown is the spot colour: the watcher the scene is set for.
 * - POLONIUS: "Ophelia, walk you here ... Read on this book, That show of such
 *   an exercise may colour Your loneliness." HAMLET, seeing her at last:
 *   "Nymph, in thy orisons Be all my sins remember'd." So Ophelia sits under
 *   the window with her book open, her eyes on it. Beside her on the bench
 *   lie the letters she means to give back: "My lord, I have remembrances of
 *   yours That I have longed long to re-deliver."
 * - "[Enter Hamlet.] HAMLET: To be, or not to be, that is the question".
 *   Hamlet in thought, as the brief for this moment asks: walking slowly, his
 *   head bowed and his hand at his chin, against the light of the window. He
 *   carries no blade: no bodkin, no dagger, and no sword at his side, because
 *   nothing in the picture may point towards the harm the speech weighs.
 * - The Queen ("[Exit Queen.]") and Rosencrantz and Guildenstern ("[Exeunt
 *   Rosencrantz and Guildenstern.]") have gone before the speech, so they are
 *   not drawn. It is day: the players "have already order This night to play
 *   before him".
 *
 * The people are the kit's (./people.tsx). Nothing is taken from a film or
 * stage production.
 *
 * Seeds: 9101 (the wall and the flags), 9102 and 9103 (the windows' skies),
 * 9104 (the arras).
 */

const WIN_A: Win = { x0: 156, x1: 222, top: 96, bottom: 216 }
const WIN_B: Win = { x0: 404, x1: 470, top: 96, bottom: 222 }
const ARRAS: ArrasBox = { x0: 572, x1: 846, top: 44, bottom: 250 }
/** The bench under the window where Ophelia sits: its top and its ends. */
const BENCH = { x0: 388, x1: 536, top: 270, foot: 314 }

const light = daylight([WIN_A, WIN_B])
const hidden = (x: number, y: number) =>
  inWindow(WIN_A, x, y) ||
  inWindow(WIN_B, x, y) ||
  (x > ARRAS.x0 - 4 && x < ARRAS.x1 + 14 && y > ARRAS.top - 8)

const SUNS = [sunOnFloor(WIN_A, 34), sunOnFloor(WIN_B, 60)]
const SUN = SUNS.map((s) => s.d).join('')

type Marks = { room: ReturnType<typeof roomMarks>; sunJoints: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const room = roomMarks(9101, dimBelow(light), hidden)
  const sunJoints = keep(room.joints, (x, y) => !SUNS.some((s) => s.inside(x, y)))
  cached = { room, sunJoints }
  return cached
}

/** A stone bench against the wall: its lit top, its dark front, its two ends. */
function Bench() {
  const { x0, x1, top, foot } = BENCH
  return (
    <g>
      <path
        d={`M${x0} ${top}H${x1}V${top + 7}H${x0}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        d={`M${x0 + 6} ${top + 7}H${x0 + 22}V${foot}H${x0 + 6}ZM${x1 - 22} ${top + 7}H${x1 - 6}V${foot}H${x1 - 22}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(x0 + 10, top + 12, x0 + 10, foot - 4, 0.8) +
          gouge(x1 - 10, top + 12, x1 - 10, foot - 4, 0.8)
        }
        fill={PAPER}
      />
    </g>
  )
}

/**
 * The letters Ophelia means to give back, tied in a bundle on the bench: a
 * few folded sheets cut in paper, the tape round them in ink.
 */
function Remembrances({ at }: { at: [number, number] }) {
  const [x, y] = at
  return (
    <g>
      <path
        d={`M${x} ${y}L${x + 26} ${y - 2}L${x + 27} ${y - 9}L${x + 1} ${y - 7}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.1}
        strokeLinejoin="round"
      />
      <path
        d={`M${x + 2} ${y - 7.4}L${x + 25} ${y - 9.6}L${x + 26} ${y - 15}L${x + 3} ${y - 13}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.1}
        strokeLinejoin="round"
      />
      <path
        d={`M${n(x + 13)} ${n(y - 1)}L${n(x + 14.6)} ${n(y - 14.2)}M${x} ${y - 4}L${x + 27} ${y - 6}`}
        stroke={INK}
        strokeWidth={1.6}
      />
    </g>
  )
}

/** Ophelia's book, open in her hands, in her own frame (facing right). */
const BOOK = 'M15 -79L27 -82.6L39 -79.6L39 -70.6L27 -73.4L15 -70Z'
const BOOK_LINES =
  'M17.6 -77.4L24.6 -79.4M17.6 -74.6L24.6 -76.6M29.4 -79.4L36.4 -77.6M29.4 -76.6L36.4 -74.8'

function ToBeOrNotToBe({ uid }: ArtProps) {
  const m = marks()
  const sun = `${uid}-sun`
  return (
    <>
      <defs>
        <clipPath id={sun}>
          <path d={SUN} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
        {/* the lobby by day */}
        <path d={m.room.wall} fill={PAPER} />
        <Floor marks={m.room} />
        <path d={SUN} fill={PAPER} />
        <g clipPath={`url(#${sun})`}>
          <path d={m.sunJoints} fill={INK} />
        </g>
        <LobbyWindow uid={uid} win={WIN_A} seed={9102} />
        <LobbyWindow uid={uid} win={WIN_B} seed={9103} />

        {/* "seeing unseen": the King and Polonius, behind the arras */}
        <Person
          at={[612, 268]}
          flip
          pose={{
            look: 'claudius',
            crownRed: true,
            body: { neck: [24, -136] },
            head: { at: [40, -154], rot: 18 },
          }}
        />
        <Person
          at={[602, 270]}
          scale={0.98}
          flip
          pose={{
            look: 'polonius',
            body: { neck: [26, -124] },
            head: { at: [46, -112], rot: 22 },
          }}
        />
        <Arras uid={uid} a={ARRAS} seed={9104} />

        {/* Ophelia at her book, the letters she means to give back beside her */}
        <Bench />
        <Remembrances at={[494, 270]} />
        <Person
          at={[452, BENCH.foot]}
          scale={1.1}
          flip
          pose={{
            look: 'ophelia',
            seated: { seat: 44, knee: [34, -52] },
            eye: 'down',
            head: { rot: 18 },
            far: {
              pts: [
                [-2, -88],
                [4, -66],
                [18, -74],
              ],
            },
            near: {
              pts: [
                [4, -88],
                [12, -66],
                [24, -72],
              ],
            },
          }}
        >
          <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={BOOK_LINES} stroke={INK} strokeWidth={0.8} />
        </Person>

        {/* Hamlet, in thought */}
        <path d={shadowPool(198, 328, 50, 4)} fill={INK} />
        <Person
          at={[194, 326]}
          scale={1.15}
          pose={{
            look: 'hamlet',
            eye: 'down',
            head: { rot: 16 },
            cloak: 2,
            legs: {
              far: [
                [-3, -70],
                [-8, -37],
                [-12, -3],
              ],
              near: [
                [3, -70],
                [9, -37],
                [13, -3],
              ],
            },
            far: {
              pts: [
                [-4, -132],
                [-2, -104],
                [16, -100],
              ],
            },
            near: {
              pts: [
                [5, -132],
                [24, -100],
                [12, -124],
              ],
              deg: -78,
            },
          }}
        />
      </g>
    </>
  )
}

export const toBeOrNotToBe: LinocutArt = { width: W, height: H, Draw: ToBeOrNotToBe }

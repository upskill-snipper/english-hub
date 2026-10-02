import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, wedge, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Floor, keep, roomMarks, shadowPool } from './acts-3-4-rooms'
import {
  Arras,
  FLOOR,
  H,
  LobbyWindow,
  W,
  arch,
  daylight,
  dimBelow,
  inWindow,
  sunOnFloor,
  type ArrasBox,
  type Win,
} from './lobby'
import { Person } from './people'

/**
 * Act 2, Scene 2: "Spies and players", the seventh moment in the guide's
 * timeline, at the turn of the scene where the spies are found out and the
 * players arrive. Every detail is from the scene in the held edition
 * (src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - The King has sent for Rosencrantz and Guildenstern "To draw him on to
 *   pleasures and to gather ... Whether aught to us unknown afflicts him", and
 *   Hamlet has made them own it: "My lord, we were sent for." So they stand
 *   at his shoulders, one each side, leaning in to listen: "Hark you,
 *   Guildenstern, and you too, at each ear a hearer." Hamlet has a hand on
 *   Rosencrantz's arm, the welcome he has just made a show of ("Your
 *   hands, come. The appurtenance of welcome is fashion and ceremony"). They
 *   are the kit's (./people.tsx), dressed alike and told apart only by
 *   Rosencrantz's flat bonnet and Guildenstern's round cap and short beard.
 * - "I am but mad north-north-west. When the wind is southerly, I know a
 *   hawk from a handsaw." So Hamlet smiles, and through the window the vane
 *   on a far turret, the one thing in the picture that tells which way the
 *   wind blows, is the spot colour: the wind his madness keeps to, which he
 *   tells the King's spies to their faces.
 * - "[Flourish of trumpets within.] GUILDENSTERN: There are the players." So,
 *   through the archway, the players are arriving across the sunlit court,
 *   one of them sounding the flourish, the banner on his trumpet in the spot
 *   colour; at their head the First Player, bearded since Hamlet last saw him
 *   ("thy face is valanced since I saw thee last").
 * - "[Enter Polonius.] POLONIUS: Well be with you, gentlemen." So Polonius
 *   has stepped in beside the arch, old and white-bearded in his flat bonnet
 *   and gown as the kit cuts him, a hand lifted in greeting.
 * - The room is the lobby of ./lobby.tsx, by day (the ambassadors are sent
 *   "to your rest, at night we'll feast together"), with the arras Polonius
 *   has just planned to hide behind hanging on the wall behind the three.
 *
 * The King and Queen, who recruit the two spies at the start of the scene,
 * have left before Hamlet comes in ("Exeunt King, Queen and Attendants"), so
 * they are not drawn. Hamlet goes bareheaded in his black cloak, as the kit
 * cuts him. Nothing is taken from a film or stage production.
 *
 * Seeds: 7101 (the wall and the flags), 7102 and 7103 (the windows' skies),
 * 7104 (the court beyond the arch), 7105 (the arras).
 */

const WIN_A: Win = { x0: 28, x1: 94, top: 72, bottom: 206 }
const WIN_B: Win = { x0: 418, x1: 484, top: 72, bottom: 206 }
const ARRAS: ArrasBox = { x0: 126, x1: 352, top: 44, bottom: 252 }
/** The archway out to the court, where the players are arriving. */
const DOOR: Win = { x0: 588, x1: 714, top: 92, bottom: FLOOR }
/** The far side of the court: its wall, and where its flags begin. */
const COURT_GROUND = 200

const light = daylight([WIN_A, WIN_B, { ...DOOR, top: 120 }])
const hidden = (x: number, y: number) =>
  inWindow(WIN_A, x, y) ||
  inWindow(WIN_B, x, y) ||
  (x > ARRAS.x0 - 4 && x < ARRAS.x1 + 4 && y > ARRAS.top - 8) ||
  (x > DOOR.x0 - 16 && x < DOOR.x1 + 16 && y > DOOR.top - 16)

const SUNS = [sunOnFloor(WIN_A, 30), sunOnFloor(WIN_B, 60), sunOnFloor(DOOR, 40, 1.25)]
const SUN = SUNS.map((s) => s.d).join('')

type Marks = {
  room: ReturnType<typeof roomMarks>
  sunJoints: string
  court: string
  courtFlags: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const room = roomMarks(7101, dimBelow(light), hidden)
  const sunJoints = keep(room.joints, (x, y) => !SUNS.some((s) => s.inside(x, y)))
  // The sunlit court beyond the arch: the far wall in light hatching, its
  // foot, and the flags of the court closing up with distance.
  const r = rng(7104)
  let court = ''
  for (let y = DOOR.top + 8; y < COURT_GROUND - 4; y += 6) {
    let x = DOOR.x0 + between(r, -10, 0)
    while (x < DOOR.x1) {
      const len = between(r, 10, 30)
      if (r() < 0.5) court += gouge(x, y, x + len, y + between(r, -0.3, 0.3), 0.5)
      x += len + between(r, 6, 16)
    }
  }
  court += wedge(DOOR.x0, COURT_GROUND, DOOR.x1, COURT_GROUND, 2.4, 2.4)
  let courtFlags = ''
  for (let k = 0, y = COURT_GROUND + 8; y < FLOOR - 2; k++, y += 7 + k * 2)
    courtFlags += gouge(DOOR.x0 + 2, y, DOOR.x1 - 2, y + between(r, -0.4, 0.4), 0.5 + k * 0.2)
  cached = { room, sunJoints, court, courtFlags }
  return cached
}

/**
 * Castle roofs seen far off through the window, and on the turret among them
 * a weathervane, an arrow with a pennant tail. A vane seen from the side
 * cannot show a point of the compass, so it claims none: the wind it stands
 * for is left to the quotation.
 */
const VANE =
  'M59.9 141.1L66.9 140L65.9 142.5L79.8 148.1L81.1 144.9L86.6 147.2L82.2 150.1L83.3 155.3L77.8 153.1L79 149.9L65.1 144.3L64.2 146.7Z'
function TurretAndVane() {
  return (
    <g>
      <path d="M28 206V190L42 180L56 190V182H66V178L72 164L78 178V206Z" fill={INK} />
      <path d={gouge(72, 182, 72, 202, 0.8) + gouge(36, 194, 50, 194, 0.7)} fill={PAPER} />
      <path d="M72 165V138M65 158H79" stroke={INK} strokeWidth={1.4} />
      {/* the vane, in the spot colour */}
      <path d={VANE} fill={RED} stroke={INK} strokeWidth={0.8} strokeLinejoin="round" />
      <circle cx={72} cy={146.6} r={1.5} fill={INK} />
    </g>
  )
}

/**
 * The trumpet the flourish is sounded on, in the frame of the player who
 * blows it (facing right): the mouthpiece at his lips, the bell raised
 * forward, its banner hanging under it in the spot colour.
 */
const TRUMPET: { tube: string; bell: string; banner: string; fringe: string } = (() => {
  const a: Pt = [17, -151]
  const b: Pt = [76, -170]
  const tube = wedge(a[0], a[1], b[0] - 8, b[1] + 2.6, 5.6, 6.4)
  const bell = `M${n(b[0] - 10)} ${n(b[1] + 6.6)}L${n(b[0] + 3)} ${n(b[1] + 13)}L${n(b[0] + 8)} ${n(b[1] - 10)}L${n(b[0] - 12)} ${n(b[1] - 1.6)}Z`
  const banner = 'M36 -157.4L60 -165L62 -137L38 -130Z'
  let fringe = ''
  for (let k = 0; k < 7; k++) fringe += `M${n(38.8 + k * 3.4)} ${n(-130.6 - k * 0.9)}l0.2 5`
  return { tube, bell, banner, fringe }
})()

function SpiesAndPlayers({ uid }: ArtProps) {
  const m = marks()
  const sun = `${uid}-sun`
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={sun}>
          <path d={SUN} />
        </clipPath>
        <clipPath id={door}>
          <path d={arch(DOOR)} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 190], push: 1.03 })}>
        {/* the lobby by day */}
        <path d={m.room.wall} fill={PAPER} />
        <Floor marks={m.room} />
        <path d={SUN} fill={PAPER} />
        <g clipPath={`url(#${sun})`}>
          <path d={m.sunJoints} fill={INK} />
        </g>
        <LobbyWindow uid={uid} win={WIN_A} seed={7102} view={<TurretAndVane />} />
        <LobbyWindow uid={uid} win={WIN_B} seed={7103} />
        <Arras uid={uid} a={ARRAS} seed={7105} />

        {/* the archway, and the sunlit court beyond it, where the players come */}
        <path
          d={arch({ x0: DOOR.x0 - 14, x1: DOOR.x1 + 14, top: DOOR.top - 14, bottom: FLOOR })}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={arch(DOOR)} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${door})`}>
          <path d={m.court + m.courtFlags} fill={INK} />
          {/* "Flourish of trumpets within": a player sounds it */}
          <Person
            at={[640, 240]}
            scale={0.5}
            flip
            pose={{
              look: 'lord',
              bare: true,
              head: { rot: -12 },
              legs: {
                far: [
                  [-3, -70],
                  [-8, -37],
                  [-14, -3],
                ],
                near: [
                  [3, -70],
                  [9, -37],
                  [12, -3],
                ],
              },
              far: {
                pts: [
                  [-4, -130],
                  [-4, -106],
                  [4, -88],
                ],
              },
              near: {
                pts: [
                  [5, -132],
                  [22, -126],
                  [33, -146],
                ],
                hand: 'grip',
                deg: -18,
              },
            }}
          >
            <path d={TRUMPET.tube + TRUMPET.bell} fill={INK} stroke={PAPER} strokeWidth={1.8} />
            <path d={TRUMPET.banner} fill={RED} stroke={INK} strokeWidth={1.2} />
            <path d={TRUMPET.fringe} fill="none" stroke={INK} strokeWidth={1.2} />
          </Person>
          {/* the First Player at their head, bearded */}
          <Person
            at={[692, 246]}
            scale={0.52}
            flip
            pose={{
              look: 'player',
              cloak: 5,
              legs: {
                far: [
                  [-3, -70],
                  [-11, -37],
                  [-19, -3],
                ],
                near: [
                  [3, -70],
                  [13, -37],
                  [19, -3],
                ],
              },
              near: {
                pts: [
                  [5, -132],
                  [12, -106],
                  [24, -92],
                ],
              },
            }}
          />
        </g>

        {/* Polonius, stepping in beside the arch: "Well be with you, gentlemen." */}
        <path d={shadowPool(764, 300, 40, 3)} fill={INK} />
        <Person
          at={[764, 298]}
          scale={0.98}
          flip
          pose={{
            look: 'polonius',
            mouth: 'open',
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -130],
                [-6, -104],
                [2, -86],
              ],
            },
            near: {
              pts: [
                [5, -130],
                [22, -110],
                [37, -121],
              ],
              hand: 'open',
              deg: -56,
              thumb: -1,
            },
          }}
        />

        {/* the King's two spies, one at each of Hamlet's ears */}
        <path d={shadowPool(250, 326, 120, 4)} fill={INK} />
        <Person
          at={[176, 320]}
          scale={1.05}
          pose={{
            look: 'guildenstern',
            eye: 'down',
            body: { neck: [7, -136] },
            head: { rot: 18 },
            far: {
              pts: [
                [-2, -128],
                [-4, -102],
                [2, -82],
              ],
            },
            near: {
              pts: [
                [9, -128],
                [16, -102],
                [24, -86],
              ],
            },
          }}
        />
        <Person
          at={[338, 318]}
          scale={1.03}
          flip
          pose={{
            look: 'rosencrantz',
            eye: 'down',
            body: { neck: [8, -136] },
            head: { rot: 20 },
            far: {
              pts: [
                [-2, -128],
                [-4, -102],
                [2, -82],
              ],
            },
            near: {
              pts: [
                [9, -128],
                [14, -102],
                [22, -84],
              ],
            },
          }}
        />
        {/* Hamlet between them, a hand on Rosencrantz's arm, smiling */}
        <Person
          at={[252, 324]}
          scale={1.1}
          pose={{
            look: 'hamlet',
            mouth: 'smile',
            head: { rot: -2 },
            cloak: 3,
            near: {
              pts: [
                [5, -132],
                [30, -112],
                [58, -114],
              ],
              hand: 'open',
              deg: 62,
              thumb: -1,
              spread: 16,
            },
          }}
        />
      </g>
    </>
  )
}

export const spiesAndPlayers: LinocutArt = { width: W, height: H, Draw: SpiesAndPlayers }

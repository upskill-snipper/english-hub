import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CaesarsSeat, PompeyStatue, benches, column, nichePath } from './capitol'
import { Kneel, Seated } from './kneel'
import { Person } from './people'

/**
 * Act 3, Scene 1: "The assassination", the seventh moment in the guide's
 * timeline. The killing is not shown: by this text's rule (../index.ts) the
 * panel is the moment before it, the conspirators closing round Caesar. Every
 * detail is from the scene in the held edition (Project Gutenberg #1522,
 * src/data/full-texts/julius-caesar.ts):
 *
 * - "Rome. Before the Capitol; the Senate sitting." "Caesar enters the
 *   Capitol, the rest following. All the Senators rise"; "Caesar and the
 *   Senators take their seats". So the Senators sit on their benches in the
 *   hall (./capitol.tsx), and Caesar's seat stands before Pompey's statue,
 *   where he falls: "Even at the base of Pompey's statue ... great Caesar
 *   fell" (3.2).
 * - It is morning: "'tis strucken eight" (2.2), "about the ninth hour" (2.4).
 *   So the sun of the Ides shows through the open door, low over the street:
 *   the spot colour, as it rose in Caesar's window in the panel before.
 * - Antony is not there, nor Trebonius: "Trebonius knows his time, for look
 *   you, Brutus, He draws Mark Antony out of the way."
 * - METELLUS: "Metellus Cimber throws before thy seat An humble heart.
 *   [Kneeling.]" BRUTUS: "I kiss thy hand, but not in flattery, Caesar".
 *   CASSIUS: "As low as to thy foot doth Cassius fall". CAESAR: "Doth not
 *   Brutus bootless kneel?" CINNA: "O Caesar,—"; DECIUS: "Great Caesar,—". So
 *   Metellus and Brutus kneel (./kneel.tsx), Brutus with his lips to Caesar's
 *   hand, lean Cassius is bowed to the floor, and Decius on the left and Cinna
 *   on the right lean in with their hands held out: the suitors close round
 *   him from both sides. Metellus and Cinna are the kit's plain senator.
 * - "Casca, you are the first that rears your hand"; "Casca stabs Caesar in
 *   the neck": he strikes from behind. So he stands close behind Caesar,
 *   frowning, his hand hidden in the fold of his toga.
 * - Caesar stands before his seat in his wreath (the kit's sign of him, in
 *   every panel), his head up, "constant as the northern star", and gives
 *   Brutus his hand.
 * - The quotation is Caesar's last words, which the picture stops short of:
 *   the moment drawn is the one before them.
 *
 * SAFEGUARDING. No dagger is drawn anywhere in the panel, nothing touches
 * Caesar, and there is no wound and no blood; "let us bathe our hands in
 * Caesar's blood" is left to the words. No red is on Caesar or on anyone: the
 * one red is the sun outside the door.
 *
 * WHY NOTHING SHOWS AT CASCA'S BREAST (2 October 2026). The hilt of a hidden
 * dagger was tried there, the blade in the fold, and at panel size it read as
 * a small cross. His hidden hand and his frown carry the threat instead.
 *
 * Seeds: 7301 (wall and floor), 7302 (niche), 7303 (the sun's rays).
 */

const W = 860
const H = 340
const WALL = 240
const GROUND = 328
const NICHE_X = 622
const DOOR = { x0: 22, x1: 96, top: 58 }
const SUN: [number, number] = [59, 112]

type Marks = {
  wall: string
  niche: string
  floor: string
  floorShade: string
  street: string
  sunRays: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(7301)
  // The hall is lit from the open door on the left; the far end is dim.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 60) * 0.7, (y - 150) * 1.2) / 420) * 0.85, 0.08)
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: WALL }, light, {
    spacing: 6.4,
    len: [16, 60],
    gap: [6, 22],
  })
  const niche = gougeField(
    rng(7302),
    { x0: NICHE_X - 92, x1: NICHE_X + 92, y0: 4, y1: WALL },
    (x, y) => clamp(0.06 + (y / WALL) * 0.18 - Math.abs(x - NICHE_X) / 900),
    { spacing: 5.6, len: [10, 34], gap: [8, 20], max: 2.4 },
  )
  // The floor: white stone flags, their joints running to a point beyond the door.
  let floor = ''
  const V: [number, number] = [300, 40]
  for (let xt = -900; xt < 1700; xt += 52) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (WALL - V[1]))
    floor += wedge(xt, WALL, xb, H, 0.9, 3)
  }
  for (const [y, w] of [
    [252, 1],
    [268, 1.5],
    [290, 2],
    [318, 2.6],
  ] as const)
    floor += gouge(-10, y + between(r, -1, 1), W + 10, y + between(r, -1, 1), w)
  let floorShade = ''
  for (let y = WALL + 2; y < WALL + 16; y += 3)
    floorShade += gouge(0, y, W, y, 2.2 - (y - WALL) * 0.12)
  // The street beyond the door: steps, and the far side of the street.
  const street =
    `M${DOOR.x0} 200H${DOOR.x1}M${DOOR.x0} 214H${DOOR.x1}M${DOOR.x0} 226H${DOOR.x1}` +
    `M${DOOR.x0 + 10} 186V120H${DOOR.x0 + 30}V186M${DOOR.x0 + 46} 186V136H${DOOR.x1 - 4}`
  // The morning sun of the Ides, low over the street, its light cut in ink on the bright doorway.
  const sunRays = rays(rng(7303), SUN[0], SUN[1], { from: 15, to: 34, every: 14, width: 1.6 })
  cached = { wall, niche, floor, floorShade, street, sunRays }
  return cached
}

const COLUMNS = [128, 252, 376, 494, 770]

/** The Senators in their seats, far off: [x of the hip, tier]. */
const SENATORS: [number, number][] = [
  [150, 0],
  [226, 0],
  [300, 0],
  [176, 1],
  [262, 1],
  [214, 2],
]

function TheAssassination({ uid }: ArtProps) {
  const m = marks()
  const nicheClip = `${uid}-niche`
  const cols = COLUMNS.map((x) => column(x, 14, WALL, 26))
  const bench = benches(108, 360, WALL, 3, 18, 12)
  const nicheD = nichePath(92, -236)
  return (
    <>
      <defs>
        <clipPath id={nicheClip}>
          <path d={nicheD} transform={`translate(${NICHE_X} ${WALL})`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={WALL} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        {/* the open door, and the street in daylight beyond it */}
        <path
          d={`M${DOOR.x0} ${WALL}V${DOOR.top + 37}A37 37 0 0 1 ${DOOR.x1} ${DOOR.top + 37}V${WALL}Z`}
          fill={PAPER}
          stroke={PAPER}
          strokeWidth={LINE.frame}
        />
        <path d={m.street} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.sunRays} fill={INK} />
        <circle cx={SUN[0]} cy={SUN[1]} r={10} fill={RED} stroke={INK} strokeWidth={LINE.bold} />
        {/* the niche, dark, behind Pompey's statue */}
        <path d={nicheD} transform={`translate(${NICHE_X} ${WALL})`} fill={INK} />
        <g clipPath={`url(#${nicheClip})`}>
          <path d={m.niche} fill={PAPER} />
        </g>
        <path
          d={nicheD}
          transform={`translate(${NICHE_X} ${WALL})`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        {/* the columns of the hall */}
        <path d={cols.map((c) => c.white).join('')} fill={PAPER} />
        <path d={cols.map((c) => c.flutes).join('')} fill={INK} />
        <path d={cols.map((c) => c.joints).join('')} stroke={INK} strokeWidth={LINE.fine} />
        {/* the floor */}
        <rect x={0} y={WALL} width={W} height={H - WALL} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.floorShade} fill={INK} />
        {/* the Senators in their seats, turned towards Caesar */}
        <path d={bench.risers} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={bench.seats} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        {[...SENATORS]
          .sort((a, b) => b[1] - a[1])
          .map(([x, tier], i) => (
            <Seated
              key={i}
              uid={uid}
              id={`senator-${i}`}
              at={[x + tier * 8, bench.seatY[tier] - 4]}
              scale={0.5}
              drop={34}
              pose={{ look: 'senator', head: { rot: tier === 0 ? -4 : 2 } }}
            />
          ))}
        <PompeyStatue at={[NICHE_X, WALL + 4]} scale={0.98} flip />
        <CaesarsSeat at={[638, 290]} scale={0.96} />

        {/* Decius, leaning in: "Great Caesar,—" */}
        <g transform={`rotate(6 232 ${GROUND})`}>
          <Person
            at={[232, GROUND]}
            pose={{
              look: 'decius',
              head: { rot: 6 },
              far: {
                pts: [
                  [-4, -130],
                  [-2, -106],
                  [8, -98],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [5, -128],
                  [22, -112],
                  [40, -110],
                ],
                hand: 'open',
                deg: -6,
              },
              hem: { front: 30, back: 34 },
            }}
          />
        </g>
        {/* Cassius, fallen "As low as to thy foot" */}
        <Kneel
          uid={uid}
          id="cassius"
          kind="both"
          at={[304, GROUND]}
          lean={58}
          pose={{
            look: 'cassius',
            head: { rot: -34 },
            far: {
              pts: [
                [-4, -130],
                [8, -112],
                [26, -104],
              ],
              hand: 'open',
            },
            near: {
              pts: [
                [5, -128],
                [18, -108],
                [36, -100],
              ],
              hand: 'open',
            },
          }}
        />
        {/* Metellus Cimber on his knee with his suit */}
        <Kneel
          uid={uid}
          id="metellus"
          at={[398, GROUND]}
          lean={6}
          pose={{
            look: 'senator',
            head: { rot: 12 },
            eye: 'down',
            far: {
              pts: [
                [-4, -130],
                [8, -112],
                [22, -120],
              ],
              hand: 'open',
              deg: -40,
            },
            near: {
              pts: [
                [5, -128],
                [16, -110],
                [26, -118],
              ],
              hand: 'open',
              deg: -40,
            },
          }}
        />
        {/* Brutus, on his knee, kissing Caesar's hand */}
        <Kneel
          uid={uid}
          id="brutus"
          at={[504, GROUND]}
          lean={20}
          pose={{
            look: 'brutus',
            head: { rot: 12 },
            eye: 'down',
            near: {
              pts: [
                [5, -128],
                [12, -106],
                [24, -102],
              ],
              hand: 'mitt',
            },
          }}
        />
        {/* Caesar, risen before his seat, giving Brutus his hand */}
        <Person
          at={[586, GROUND]}
          flip
          pose={{
            look: 'caesar',
            head: { rot: -6 },
            far: {
              pts: [
                [-4, -130],
                [2, -110],
                [12, -118],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [16, -106],
                [30, -98],
              ],
              hand: 'open',
              deg: 14,
            },
          }}
        />
        {/* Cinna, pressing in from behind: "O Caesar,—" */}
        <g transform={`rotate(-7 790 ${GROUND})`}>
          <Person
            at={[790, GROUND]}
            flip
            scale={0.98}
            pose={{
              look: 'senator',
              head: { rot: 6 },
              far: {
                pts: [
                  [-4, -130],
                  [-10, -108],
                  [-12, -88],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [5, -128],
                  [20, -112],
                  [36, -112],
                ],
                hand: 'open',
                deg: -8,
              },
              hem: { front: 28, back: 32 },
            }}
          />
        </g>
        {/* Casca, close behind him, his hand in the fold of his toga */}
        <g transform={`rotate(-5 684 ${GROUND})`}>
          <Person
            at={[684, GROUND]}
            flip
            pose={{
              look: 'casca',
              head: { rot: 8 },
              frown: true,
              far: {
                pts: [
                  [-4, -130],
                  [-14, -108],
                  [-18, -86],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [5, -128],
                  [14, -108],
                  [4, -112],
                ],
                hand: 'none',
              },
              hem: { front: 30, back: 34 },
            }}
          />
        </g>
      </g>
    </>
  )
}

export const theAssassination: LinocutArt = {
  width: W,
  height: H,
  Draw: TheAssassination,
}

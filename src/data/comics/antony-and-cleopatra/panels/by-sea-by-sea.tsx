import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { headland } from '../../othello/panels/garden'
import { Ship, type ShipSpec } from './fleet'
import { lightField, seaCuts, skyLines } from './light-cuts'
import { Person, type P, type Pose } from './people'

/**
 * Act 3, Scene 7: "By sea, by sea", the eleventh moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Antony’s Camp near the Promontory of Actium." So the camp's tents stand
 *   on the rising ground at the left, and the near ground is the promontory,
 *   ending at the right above the bay.
 * - CLEOPATRA: "I have sixty sails, Caesar none better." ANTONY: "Our
 *   overplus of shipping will we burn, And with the rest full-manned, from
 *   th’ head of Actium Beat th’ approaching Caesar." So the fleet lies in the
 *   bay below the headland. Cleopatra's sails are printed in the spot colour,
 *   as in every panel of these scenes (./fleet.tsx says why), so the red that
 *   flies from the fight in "Actium" is first seen here; Antony's galleys lie
 *   with their sails furled.
 * - ANTONY: "By sea, by sea." "I’ll fight at sea." "We’ll to our ship. Away,
 *   my Thetis!" So Antony strides towards the sea, his officers left behind
 *   him, and Cleopatra goes with him, a step behind. She goes as she said she
 *   would: "as the president of my kingdom, will Appear there for a man."
 *   She is the kit's Cleopatra (./people.tsx), her long hair loose and her
 *   mantle behind her, and uncrowned: the scene gives her no crown.
 * - SOLDIER: "O noble emperor, do not fight by sea. Trust not to rotten
 *   planks. Do you misdoubt This sword and these my wounds? ... We Have used
 *   to conquer standing on the earth And fighting foot to foot." ANTONY:
 *   "Well, well, away." So the old soldier has come between Antony and the
 *   sea, at the very edge of the land, and turns to him, calling out, one
 *   open hand held out to him and the other pointing down at the earth under
 *   his own planted feet; Antony strides on at him with his head up, not
 *   stopping. The soldier's wounds and his sword are left to his words:
 *   nothing is drawn on him, and no sword is drawn.
 * - ENOBARBUS: "Most worthy sir, you therein throw away The absolute
 *   soldiership you have by land". CANIDIUS: "Why will my lord do so?" So
 *   the two stand behind, before the camp, Enobarbus frowning with his open
 *   hand held out in protest, and Canidius, in the crested helmet and cloak
 *   of the land army he is to keep ("Our nineteen legions thou shalt hold by
 *   land"), holding out his open hand, palm up, asking why.
 *
 * Read left to right: the land, and the two who would fight on it; Antony
 * and Cleopatra going from them to the sea; the old soldier in their way;
 * then the sea, and her red sails. Every hand is open with its fingers
 * apart, or points, and none is raised on a straight arm. Nothing is taken
 * from a film or stage production. Seeds: 1101 (sky), 1102 (sea), 1104 (the
 * near ground), 1105 (the tents).
 */

const W = 860
const H = 340
const HORIZON = 168
/** Every figure's scale: close enough that the hands read on a phone. */
const S = 1.2

/** The ridge the camp stands on, falling from the left to the promontory. */
const RIDGE =
  'M-10 214C40 206 120 204 196 210C262 216 330 236 392 262C420 274 446 288 470 304L-10 304Z'
/** Where the ridge's crest is at x, for standing the tents on it. */
const crest = (x: number) => (x < 196 ? 214 - (x / 196) * 4 : 210 + ((x - 196) / 196) * 52)

/** The near ground of the promontory, ending at the right above the bay. */
const GROUND =
  'M-10 300C120 296 320 296 520 300C600 302 650 306 670 314C684 320 692 330 696 344L-10 344Z'
const groundTop = (x: number) =>
  x < 520 ? 298 : x < 670 ? 300 + ((x - 520) / 150) * 14 : 314 + ((x - 670) / 26) * 30

/** The fleet in the bay: Cleopatra's under red sail, Antony's with their sails furled. */
const FLEET: ShipSpec[] = [
  { at: [706, 184], s: 0.3, facing: -1, sail: 'furled' },
  { at: [842, 194], s: 0.32, facing: -1, sail: 'furled' },
  { at: [760, 210], s: 0.38, facing: 1, sail: 'furled' },
  { at: [818, 246], s: 0.52, facing: -1, sail: 'set', colour: 'red' },
  { at: [736, 276], s: 0.6, facing: 1, sail: 'set', colour: 'red' },
  { at: [800, 322], s: 0.74, facing: 1, sail: 'set', colour: 'red' },
]

/** The tents of the camp on the ridge: x, width and height of each. */
const TENTS: [number, number, number][] = [
  [-2, 46, 34],
  [46, 52, 40],
  [100, 42, 32],
]

/** A tent seen end on, its ground at y: a ridge tent with its door. */
function tent(x: number, y: number, w: number, h: number) {
  return `M${n(x - w / 2)} ${n(y)}L${n(x - w * 0.42)} ${n(y - h * 0.62)}L${n(x)} ${n(y - h)}L${n(x + w * 0.42)} ${n(y - h * 0.62)}L${n(x + w / 2)} ${n(y)}Z`
}

type Marks = {
  sky: string
  sea: string
  far: string
  ridge: string
  ground: string
  tents: string
  doors: string
  cliff: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyLines(1101, { x0: 0, x1: W, y0: 0, y1: HORIZON - 4 }, (_x, y) => 0.6 - y / 300)
  const sea = seaCuts(
    1102,
    { x0: 380, x1: W, y0: HORIZON + 1, y1: H },
    (x, y) => y < groundTop(x) - 3,
  )
  // The camp's ridge in the sun: close slanting lines in ink over the paper,
  // as the hills behind the army at Philippi are cut
  // (../../julius-caesar/panels/words-before-blows-at-philippi.tsx), so it
  // reads as a slope of land and not as more sea.
  let ridge = ''
  for (let x = -40; x < 500; x += 3.6) ridge += `M${n(x)} 200L${n(x - 30)} 306`
  // The near ground in ink, its grass cut in paper, lit from the sky behind.
  const ground = lightField(
    1104,
    { x0: 0, x1: 700, y0: 304, y1: H },
    (x, y) => clamp(0.5 - (y - 304) / 110 - x / 2600),
    { spacing: 5.6, len: [8, 30], gap: [4, 14], max: 2.6 },
  )
  const r = rng(1105)
  let tents = ''
  let doors = ''
  for (const [x, w, h] of TENTS) {
    const y = crest(x) + 6
    tents += tent(x, y, w, h)
    doors += `M${n(x - w * 0.13)} ${n(y)}L${n(x)} ${n(y - h * 0.58)}L${n(x + w * 0.13)} ${n(y)}Z`
    doors += gouge(x - w * 0.3, y - h * 0.3, x - w * 0.42, y - 2, 0.7 + between(r, 0, 0.2))
  }
  // the edge of the promontory: a few lit cuts down the drop to the water
  const cliff =
    gouge(656, 312, 666, 328, 0.9, 0.6) +
    gouge(674, 320, 682, 338, 1, 0.4) +
    gouge(642, 308, 648, 318, 0.7)
  const far = headland(560, 900, HORIZON, 10)
  cached = { sky, sea, far, ridge, ground, tents, doors, cliff }
  return cached
}

/** A figure leaning about its feet, for the old soldier leaning towards Antony. */
function Leaning({ at, lean, children }: { at: P; lean: number; children: ReactNode }) {
  return <g transform={`rotate(${lean} ${n(at[0])} ${n(at[1])})`}>{children}</g>
}

const SOLDIER_AT: P = [624, 330]
const SOLDIER: Pose = {
  look: 'soldier',
  head: { rot: -6 },
  mouth: 'open',
  // his feet planted wide on the earth he would fight on
  legs: {
    far: [
      [-3, -70],
      [-12, -37],
      [-21, -3],
    ],
    near: [
      [3, -70],
      [14, -38],
      [22, -3],
    ],
  },
  // one open hand held out to Antony at the height of his chest, palm up, pleading
  far: {
    pts: [
      [-4, -130],
      [12, -110],
      [34, -112],
    ],
    hand: 'open',
    deg: -18,
    thumb: -1,
  },
  // the other pointing down at the land under his feet: "We Have used to
  // conquer standing on the earth And fighting foot to foot."
  near: {
    pts: [
      [5, -128],
      [14, -105],
      [27, -86],
    ],
    hand: 'point',
    deg: 62,
  },
}

function BySeaBySea({ uid }: ArtProps) {
  const m = marks()
  const ridgeClip = `${uid}-ridge`
  return (
    <>
      <defs>
        <clipPath id={ridgeClip}>
          <path d={RIDGE} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 220], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.far} fill={INK} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.3} />
        <path d={m.sea} fill={INK} />

        {/* the fleet in the bay */}
        {FLEET.map((s, i) => (
          <Ship key={i} {...s} />
        ))}

        {/* the camp's ridge, sunlit, and its tents along the crest */}
        <path d={RIDGE} fill={PAPER} />
        <g clipPath={`url(#${ridgeClip})`}>
          <path d={m.ridge} stroke={INK} strokeWidth={LINE.fine} />
        </g>
        <path
          d="M-10 214C40 206 120 204 196 210C262 216 330 236 392 262C420 274 446 288 470 304"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.tents} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={m.doors} fill={PAPER} />

        {/* the near ground, ending above the bay */}
        <path d={GROUND} fill={INK} />
        <path d={m.ground} fill={PAPER} />
        <path d={m.cliff} fill={PAPER} />
        <path d={GROUND} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />

        {/* Canidius, who is to keep the legions by land: "Why will my lord do so?" */}
        <Person
          pose={{
            look: 'canidius',
            head: { rot: 2 },
            near: {
              pts: [
                [5, -128],
                [8, -104],
                [28, -94],
              ],
              hand: 'open',
              deg: -40,
              thumb: -1,
            },
          }}
          at={[152, 328]}
          scale={S}
        />
        {/* Enobarbus: "you therein throw away The absolute soldiership you have by land" */}
        <Person
          pose={{
            look: 'enobarbus',
            frown: true,
            head: { rot: 2 },
            near: {
              pts: [
                [5, -128],
                [20, -110],
                [42, -112],
              ],
              hand: 'open',
              deg: -12,
            },
          }}
          at={[254, 330]}
          scale={S}
        />
        {/* Cleopatra, going with him to her ships: "I have sixty sails, Caesar none better." */}
        <Person
          pose={{
            look: 'cleopatra',
            head: { rot: -6 },
            hem: { front: 30, back: 34 },
            feet: [-8, 14],
          }}
          at={[372, 326]}
          scale={S}
        />
        {/* Antony, striding to the sea, his head up: "Well, well, away." */}
        <Person
          pose={{
            look: 'antony',
            head: { rot: -12 },
            legs: {
              far: [
                [-3, -70],
                [-13, -37],
                [-24, -3],
              ],
              near: [
                [3, -70],
                [16, -38],
                [24, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-10, -107],
                [-19, -86],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [12, -105],
                [21, -84],
              ],
            },
          }}
          at={[480, 334]}
          scale={S}
        />
        {/* the old soldier, at the edge of the land, turned to plead with him:
            "O noble emperor, do not fight by sea." */}
        <Leaning at={SOLDIER_AT} lean={-5}>
          <Person pose={SOLDIER} at={SOLDIER_AT} scale={S} flip />
        </Leaning>
      </g>
    </>
  )
}

export const bySeaBySea: LinocutArt = { width: W, height: H, Draw: BySeaBySea }

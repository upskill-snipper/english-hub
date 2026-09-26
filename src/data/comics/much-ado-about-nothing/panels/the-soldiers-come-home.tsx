import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 1, Scene 1: "The soldiers come home", the first moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1519, src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "Before Leonato's House." "I learn in this letter that Don Pedro of
 *   Arragon comes this night to Messina"; "He is very near by this". Don
 *   Pedro keeps the supper that night ("tell him I will not fail him at
 *   supper"), so it is still day: the house stands on the left in the light,
 *   its door open, and the road runs away over the hills on the right.
 * - "Enter Don Pedro, Don John, Claudio, Benedick, Balthasar and Others."
 *   The rest of the company is still coming down the road behind them, small
 *   in the distance, with their pikes and a standard. The standard's flag is
 *   the spot colour: they come home from "this action" in victory ("A victory
 *   is twice itself when the achiever brings home full numbers").
 * - "Good Signior Leonato, you are come to meet your trouble"; "Never came
 *   trouble to my house in the likeness of your Grace". Leonato, white-bearded
 *   in his long gown, and the Prince, in his circlet and cloak, hold out their
 *   hands to each other in welcome.
 * - "I wonder that you will still be talking, Signior Benedick: nobody marks
 *   you." "What! my dear Lady Disdain, are you yet living?" In the middle
 *   Beatrice and Benedick face each other: she points at him,
 *   one hand on her hip; he, bearded, a soldier with his rapier, lifts
 *   an open hand before him in reply. This is the "merry war" Leonato has just
 *   described: "they never meet but there's a skirmish of wit between them."
 * - "Benedick, didst thou note the daughter of Signior Leonato?"; "In mine eye
 *   she is the sweetest lady that ever I looked on." Claudio, beardless and
 *   young, stands with his hand on his heart, looking past them all at Hero,
 *   who stands small by her father's door with her eyes cast down: "Is she not
 *   a modest young lady?"
 * - "I thank you: I am not of many words, but I thank you." Don John stands
 *   apart on the right, his arms folded.
 *
 * Balthasar and the Messenger have no line in the moment and are not drawn.
 * The people are cut from ./people.tsx. Nothing is taken from a film,
 * television or stage production. Seeds: 1101 (sky), 1102 (house), 1103
 * (hills), 1104 (ground).
 */

const W = 860
const H = 340
/** Where everyone's feet stand. */
const GROUND = 314
/** The far line of the hills. */
const HORIZON = 206

/** The ridge of the hills: its height above the horizon at x. */
const ridge = (x: number) =>
  HORIZON -
  16 -
  12 * Math.sin((x - 200) / 70) -
  6 * Math.sin((x - 90) / 23) +
  Math.max(0, (x - 700) / 12)

type Marks = {
  sky: string
  wall: string
  roof: string
  hills: string
  hillCuts: string
  ground: string
  road: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Daylight: a paper sky, cut with ink as a woodcut sky is, the strokes
  // heavier and closer towards the top of the block and thinning to the hills.
  const sky = gougeField(
    rng(1101),
    { x0: 190, x1: W, y0: 8, y1: HORIZON - 16 },
    (x, y) => clamp(0.62 - y / 260 + 0.08 * Math.sin(x / 80 + y / 26)),
    { spacing: 6, len: [40, 150], gap: [10, 40], max: 2.8 },
  )

  // Leonato's house: pale stone, its courses cut in ink.
  const r = rng(1102)
  let wall = ''
  for (let y = 88; y < GROUND; y += 17) {
    wall += gouge(0, y, 186, y + between(r, -0.6, 0.6), 0.9)
    const off = (Math.round(y / 17) % 2) * 22
    for (let x = 12 + off; x < 186; x += 44) wall += gouge(x, y + 2, x, y + 15, 0.7)
  }
  let roof = ''
  for (let y = 60; y < 84; y += 5) roof += gouge(-4, y, 198, y + between(r, -0.5, 0.5), 1.4)

  // The hills: an ink mass cut to a middle grey, lighter towards the road.
  const h = rng(1103)
  let hills = `M186 ${HORIZON + 30}`
  for (let x = 186; x <= W; x += 8) hills += `L${x} ${n(ridge(x))}`
  hills += `L${W} ${HORIZON + 30}Z`
  const hillCuts = gougeField(
    h,
    { x0: 186, x1: W, y0: HORIZON - 44, y1: HORIZON + 30 },
    (x, y) => clamp(0.4 + (y - HORIZON + 20) / 90),
    { spacing: 5, len: [12, 40], gap: [3, 9], max: 2.2 },
  )

  // The ground before the house: pale beaten earth, marked in ink, darker at the front.
  const ground = gougeField(
    rng(1104),
    { x0: 0, x1: W, y0: HORIZON + 30, y1: H },
    (x, y) => clamp(0.2 + ((y - HORIZON - 30) / (H - HORIZON - 30)) ** 1.4 * 0.55),
    { spacing: 5, len: [16, 60], gap: [6, 26], max: 2.4 },
  )
  // The road winding in from the right over the hill.
  const road =
    ribbon(
      [
        [W + 20, 282],
        [800, 262],
        [740, 244],
        [700, 230],
        [676, 218],
        [664, 208],
      ],
      60,
      0.9,
      false,
    ) + ''
  // Shadows at everyone's feet, cast back to the left by an afternoon sun.
  let shadows = ''
  for (const [x, w] of [
    [158, 30],
    [262, 42],
    [338, 42],
    [452, 40],
    [540, 42],
    [640, 38],
    [786, 42],
  ] as [number, number][])
    for (let k = 0; k < 3; k++)
      shadows += gouge(x - w, GROUND + 1 + k * 3, x + w * 0.4, GROUND + 1.6 + k * 3, 1.6 - k * 0.4)

  cached = { sky, wall, roof, hills, hillCuts, ground, road, shadows }
  return cached
}

/** One small soldier far down the road, in his own frame (feet at 0, 0), with his pike. */
function soldier(x: number, y: number, s: number, k: number) {
  const q = (a: number, b: number) => `${n(x + a * s)} ${n(y + b * s)}`
  const body = `M${q(-3, -24)}L${q(3, -24)}L${q(4, -12)}L${q(2.5, 0)}L${q(0.8, 0)}L${q(0, -10)}L${q(-0.8, 0)}L${q(-2.5, 0)}L${q(-4, -12)}Z`
  const head = `M${q(-2.6, -28)}a${n(2.6 * s)} ${n(2.6 * s)} 0 1 0 ${n(5.2 * s)} 0a${n(2.6 * s)} ${n(2.6 * s)} 0 1 0 ${n(-5.2 * s)} 0Z`
  const pike = `M${q(2 + (k % 2), -14)}L${q(4 + (k % 2) * 2, -58)}`
  return { d: body + head, pike }
}
const COMPANY = [
  [680, 226, 1.3],
  [704, 234, 1.4],
  [728, 241, 1.5],
  [752, 249, 1.6],
].map(([x, y, s], k) => soldier(x, y, s, k))
/** The standard, carried in the middle of the company, and its flag. */
const STANDARD = 'M716 238L714 142'
const FLAG = 'M714 144C724 140 734 148 746 144C742 152 740 158 744 164C732 168 724 160 714 164Z'

// ── The people, feet on the ground, facing each other in pairs ───────────────

const HERO: P = [158, GROUND]
const LEONATO: P = [262, GROUND]
const DON_PEDRO: P = [338, GROUND]
const BEATRICE: P = [452, GROUND]
const BENEDICK: P = [540, GROUND]
const CLAUDIO: P = [640, GROUND]
const DON_JOHN: P = [786, GROUND]

function TheSoldiersComeHome({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={186} y={0} width={W - 186} height={HORIZON + 30} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 220], push: 1.03 })}>
        {/* the afternoon sky, and the hills the company has crossed */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${skyClip})`}>
          <path d={m.hills} fill={INK} />
          <path d={m.hillCuts} fill={PAPER} />
        </g>
        <path d={m.ground} fill={INK} />
        <path d={m.road} fill={PAPER} />
        <path d={m.road} fill="none" stroke={INK} strokeWidth={LINE.fine} />

        {/* the rest of the company, still coming down the road */}
        <g className="lc-drift-r" style={timing({ delay: 0.2, dur: 2.4 })}>
          <path
            d={COMPANY.map((c) => c.pike).join('') + STANDARD}
            stroke={INK}
            strokeWidth={2.2}
            fill="none"
          />
          <path d={COMPANY.map((c) => c.d).join('')} fill={INK} />
          <path d={FLAG} fill={RED} stroke={INK} strokeWidth={1} />
        </g>

        {/* Leonato's house: pale stone, a tiled roof, the door standing open */}
        <rect x={0} y={84} width={188} height={GROUND - 84} fill={PAPER} />
        <path d={m.wall} fill={INK} />
        <path d="M-6 88L200 88L190 56L-6 56Z" fill={INK} />
        <path d={m.roof} fill={PAPER} />
        <rect x={-6} y={84} width={206} height={6} fill={INK} />
        {/* the doorway, a round arch, dark within */}
        <path d="M34 312V196Q34 160 70 160Q106 160 106 196V312Z" fill={PAPER} />
        <path d="M40 312V198Q40 168 70 168Q100 168 100 198V312Z" fill={INK} />
        <path
          d={
            wedge(40, 312, 100, 312, 3, 3) +
            gouge(46, 300, 94, 300, 1.2) +
            gouge(52, 288, 88, 288, 0.8)
          }
          fill={PAPER}
        />
        {/* the door, swung back into the house */}
        <path d="M100 200L116 206V300L100 312Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        {/* a window with its shutters open */}
        <rect x={124} y={112} width={40} height={50} fill={INK} />
        <path d="M124 112H164M144 112V162" stroke={PAPER} strokeWidth={1.6} />
        <path d="M112 110L124 112V162L112 166Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d="M176 110L164 112V162L176 166Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d="M118 124V156M170 124V156" stroke={INK} strokeWidth={1} />
        <path d="M188 84V314" stroke={INK} strokeWidth={LINE.bold} />
        {/* the step before the door */}
        <rect x={20} y={308} width={110} height={8} fill={PAPER} stroke={INK} strokeWidth={1.4} />

        <path d={m.shadows} fill={INK} />

        {/* Hero, small, by her father's door, her eyes cast down */}
        <Person
          at={HERO}
          pose={{
            look: 'hero',
            eye: 'down',
            head: { rot: 10 },
            far: {
              pts: [
                [-3, -126],
                [-2, -104],
                [8, -96],
              ],
            },
            near: {
              pts: [
                [3, -126],
                [8, -104],
                [14, -98],
              ],
            },
          }}
        />

        {/* Leonato and the Prince, their hands held out in welcome */}
        <Person
          at={LEONATO}
          pose={{
            look: 'leonato',
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -128],
                [-9, -100],
                [-7, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -106],
                [30, -104],
              ],
              hand: 'open',
              deg: -10,
              thumb: -1,
            },
          }}
        />
        <Person
          at={DON_PEDRO}
          flip
          pose={{
            look: 'don-pedro',
            sword: true,
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-6, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -106],
                [28, -106],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
            },
          }}
        />

        {/*
          The merry war: Beatrice, her hand on her hip, points at Benedick
          ("nobody marks you"); Benedick answers. She first held one finger
          up before her face, and a lone finger raised at a man, seen from
          the side at panel size, can be taken for a rude gesture (the
          accusation panel dropped one for the same reason). A finger
          pointed level at him says "you" and nothing else, and Benedick's
          open hand is lifted up before his own chest, so a gap stays
          between the two hands and they are not taken for a handshake
          like Leonato's and the Prince's (review, 26 September 2026).
        */}
        <Person
          at={BEATRICE}
          pose={{
            look: 'beatrice',
            head: { rot: -6 },
            far: {
              pts: [
                [-3, -124],
                [-18, -108],
                [-8, -95],
              ],
              deg: 20,
            },
            near: {
              pts: [
                [3, -124],
                [16, -104],
                [28, -108],
              ],
              hand: 'point',
              deg: -6,
            },
          }}
        />
        <Person
          at={BENEDICK}
          flip
          pose={{
            look: 'benedick',
            head: { rot: -5 },
            sword: true,
            cloak: 2,
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [7, -36],
                [9, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-4, -76],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -110],
                [24, -128],
              ],
              hand: 'open',
              deg: -60,
              thumb: -1,
            },
          }}
        />

        {/* Claudio, his hand on his heart, looking past them all at Hero */}
        <Person
          at={CLAUDIO}
          flip
          pose={{
            look: 'claudio',
            head: { rot: 3 },
            sword: true,
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-5, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [14, -100],
                [13, -112],
              ],
              hand: 'open',
              deg: -94,
              size: 14,
              spread: 10,
              thumb: 1,
            },
          }}
        />

        {/* Don John, apart, his arms folded */}
        <Person at={DON_JOHN} flip pose={{ look: 'don-john' }} />
      </g>
    </>
  )
}

export const theSoldiersComeHome: LinocutArt = { width: W, height: H, Draw: TheSoldiersComeHome }

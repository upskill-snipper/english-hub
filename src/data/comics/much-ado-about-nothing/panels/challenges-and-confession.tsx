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

import { bill, CutFigure, Person, type Pose } from './people'

/**
 * Act 5, Scene 1: "Challenges and confession", the thirteenth moment in the
 * guide's timeline. The moment runs from Leonato's challenge to Borachio's
 * confession; the panel is its last beat, the one its quotation comes from.
 * Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "Before Leonato's House." It is the house of "The soldiers come home"
 *   (./the-soldiers-come-home.tsx), drawn the same so a student knows it
 *   again: pale stone in courses, a tiled roof, a round-arched door and a
 *   shuttered window, with the road running away over the hills on the
 *   right. Its shapes are that panel's; change the two together. The door is
 *   shut now: the house is in mourning for Hero, as the Friar told Leonato
 *   to "Maintain a mourning ostentation" (4.1).
 * - "Good den, good den." It is afternoon, and by the scene's end Claudio
 *   will "mourn with Hero" that night; so the sun is low on the hills, the
 *   spot colour, set in the gap between Claudio and Borachio, and the
 *   shadows fall long.
 * - Leonato and Antonio have gone ("Exeunt Leonato and Antonio.") and
 *   Benedick, his challenge made, has gone too ("[Exit.]"), so none of them
 *   is drawn. "Enter Dogberry, Verges, and the Watch, with Conrade and
 *   Borachio." DON PEDRO: "How now! two of my brother's men bound! Borachio,
 *   one!" So the Watch have brought the two prisoners, bound, up the road:
 *   Dogberry, stout in his gown, and old Verges behind them, and a watchman
 *   with his bill; the cords hang from the prisoners' tied wrists.
 * - BORACHIO: "Sweet Prince, let me go no farther to mine answer: do you hear
 *   me, and let this Count kill me. I have deceived even your very eyes". So
 *   Borachio stands before Claudio with his head bowed, his hands bound
 *   behind him.
 * - DON PEDRO: "Runs not this speech like iron through your blood?" CLAUDIO:
 *   "I have drunk poison whiles he utter'd it." So Claudio, the beardless
 *   youth, black against the pale sky, recoils a step, his head bowed and
 *   his hand pressed to his breast, and the Prince, in his circlet and cloak,
 *   lays a hand on his shoulder. No red goes on either face.
 *
 * The people are drawn from ./people.tsx, as in every panel of this play.
 * Nothing is taken from a film or stage production. Seeds: 13101 (sky), 13102
 * (house), 13103 (hills), 13104 (ground), 13105 (the sun's rays).
 */

const W = 860
const H = 340
/** Where everyone's feet stand, as in "The soldiers come home". */
const GROUND = 314
/** The far line of the hills. */
const HORIZON = 206
/** The low sun, on the hills in the gap between Claudio and the man confessing to him. */
const SUN = { x: 404, y: 190, r: 15 }

/** The ridge of the hills: its height at x. */
const ridge = (x: number) =>
  HORIZON -
  14 -
  10 * Math.sin((x - 240) / 64) -
  5 * Math.sin((x - 90) / 23) +
  Math.max(0, (x - 700) / 14)

const DON_PEDRO: Pose = {
  look: 'don-pedro',
  head: { at: [4, -159], rot: 10 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [24, -120],
      [44, -124],
    ],
    hand: 'open',
    deg: 4,
    thumb: -1,
    spread: 8,
  },
}

/** Claudio, recoiling a step, his head bowed and his hand pressed to his breast. */
const CLAUDIO: Pose = {
  look: 'claudio',
  eye: 'down',
  head: { at: [5, -159], rot: 16 },
  far: {
    pts: [
      [-3, -132],
      [-9, -106],
      [-11, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [20, -104],
      [12, -120],
    ],
    hand: 'open',
    deg: -116,
    thumb: 1,
    size: 14,
    spread: 7,
  },
  legs: {
    far: [
      [-3, -70],
      [-10, -36],
      [-18, -3],
    ],
    near: [
      [3, -70],
      [8, -36],
      [10, -3],
    ],
  },
}

/** Borachio, bound, his head bowed as he confesses. */
const BORACHIO: Pose = {
  look: 'borachio',
  eye: 'down',
  head: { at: [6, -158], rot: 18 },
  far: {
    pts: [
      [-3, -132],
      [-10, -108],
      [-14, -92],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [4, -132],
      [-6, -108],
      [-14, -94],
    ],
    hand: 'none',
  },
  legs: {
    far: [
      [-3, -70],
      [-2, -36],
      [-4, -3],
    ],
    near: [
      [3, -70],
      [12, -36],
      [16, -3],
    ],
  },
}

/** Conrade, bound, sullen, beside him. */
const CONRADE: Pose = {
  look: 'conrade',
  head: { at: [3, -160], rot: -2 },
  far: {
    pts: [
      [-3, -132],
      [-10, -108],
      [-14, -92],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [4, -132],
      [-6, -108],
      [-14, -94],
    ],
    hand: 'none',
  },
}

/** The watchman, his bill upright in his hand. */
const WATCHMAN: Pose = {
  look: 'watchman',
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [16, -108],
      [28, -114],
    ],
    hand: 'mitt',
    deg: -84,
  },
}

/**
 * Dogberry, pleased with his prisoners, one finger raised to make his point
 * ("Marry, sir, they have committed false report; moreover..."). The hand is
 * held up at the height of his brow and well out in front of his face. It
 * was first at his chin, and at panel size the finger stood across his lips,
 * a man hushing the scene rather than holding forth (review, 26 September
 * 2026).
 */
const DOGBERRY: Pose = {
  look: 'dogberry',
  head: { at: [4, -160], rot: -6 },
  far: {
    pts: [
      [-6, -130],
      [-9, -104],
      [-6, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [6, -130],
      [28, -118],
      [40, -156],
    ],
    hand: 'finger',
    deg: -84,
  },
}

/** Verges, old and stooped, behind him. */
const VERGES: Pose = {
  look: 'verges',
  head: { at: [8, -154], rot: 12 },
  far: {
    pts: [
      [-3, -128],
      [-4, -104],
      [0, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -128],
      [8, -104],
      [18, -92],
    ],
    hand: 'mitt',
  },
}

/**
 * The cords round the prisoners' wrists, behind their backs, in the scene's
 * coordinates: a turn of cord round each pair of wrists and its end hanging.
 */
const CORDS = (
  [
    [477, 213],
    [551, 213],
  ] as [number, number][]
)
  .map(
    ([x, y]) =>
      `M${x - 6} ${y - 3}Q${x} ${y - 7} ${x + 5} ${y - 1}Q${x + 1} ${y + 6} ${x - 6} ${y + 4}` +
      `M${x + 3} ${y + 3}Q${x + 9} ${y + 18} ${x + 4} ${y + 34}`,
  )
  .join('')

type Marks = {
  sky: string
  sunRays: string
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
  // Late afternoon: a paper sky, cut with ink as a woodcut sky is, the
  // strokes heavier towards the top of the block and thinning to the sun.
  const sky = gougeField(
    rng(13101),
    { x0: 188, x1: W, y0: 8, y1: HORIZON - 10 },
    (x, y) =>
      clamp(
        0.66 -
          y / 280 +
          0.07 * Math.sin(x / 80 + y / 26) -
          clamp(1 - Math.hypot(x - SUN.x, y - SUN.y) / 150) * 0.6,
      ),
    { spacing: 6, len: [40, 140], gap: [10, 40], max: 2.6 },
  )
  let sunRays = ''
  const sr = rng(13105)
  for (let a = 180; a < 360; a += 15) {
    const t = ((a + between(sr, -3, 3)) * Math.PI) / 180
    const r0 = SUN.r + 6
    const r1 = r0 + between(sr, 10, 18)
    sunRays += wedge(
      SUN.x + Math.cos(t) * r0,
      SUN.y + Math.sin(t) * r0,
      SUN.x + Math.cos(t) * r1,
      SUN.y + Math.sin(t) * r1,
      2.2,
      0.6,
    )
  }

  // Leonato's house, as in "The soldiers come home": pale stone, its courses
  // cut in ink, and the tiles of its roof.
  const r = rng(13102)
  let wall = ''
  for (let y = 88; y < GROUND; y += 17) {
    wall += gouge(0, y, 186, y + between(r, -0.6, 0.6), 0.9)
    const off = (Math.round(y / 17) % 2) * 22
    for (let x = 12 + off; x < 186; x += 44) wall += gouge(x, y + 2, x, y + 15, 0.7)
  }
  let roof = ''
  for (let y = 60; y < 84; y += 5) roof += gouge(-4, y, 198, y + between(r, -0.5, 0.5), 1.4)

  // The hills: an ink mass cut to a middle grey.
  let hills = `M186 ${HORIZON + 30}`
  for (let x = 186; x <= W; x += 8) hills += `L${x} ${n(ridge(x))}`
  hills += `L${W} ${HORIZON + 30}Z`
  const hillCuts = gougeField(
    rng(13103),
    { x0: 186, x1: W, y0: HORIZON - 44, y1: HORIZON + 30 },
    (x, y) => clamp(0.36 + (y - HORIZON + 20) / 90),
    { spacing: 5, len: [12, 40], gap: [3, 9], max: 2.2 },
  )
  // The ground before the house: pale beaten earth, marked in ink.
  const ground = gougeField(
    rng(13104),
    { x0: 0, x1: W, y0: HORIZON + 30, y1: H },
    (_x, y) => clamp(0.2 + ((y - HORIZON - 30) / (H - HORIZON - 30)) ** 1.4 * 0.5),
    { spacing: 5, len: [16, 60], gap: [8, 28], max: 2.2 },
  )
  // The road the Watch came up, winding in over the hill.
  const road = ribbon(
    [
      [W + 20, 286],
      [820, 262],
      [780, 246],
      [760, 234],
      [752, 222],
    ],
    54,
    0.9,
    false,
  )
  // Long shadows at everyone's feet, cast to the left by the low sun.
  let shadows = ''
  for (const [x, w] of [
    [246, 60],
    [320, 60],
    [466, 60],
    [540, 56],
    [610, 60],
    [690, 64],
    [764, 50],
  ] as [number, number][])
    for (let k = 0; k < 3; k++)
      shadows += gouge(x - w, GROUND + 1 + k * 3, x + 10, GROUND + 1.6 + k * 3, 1.7 - k * 0.4)
  cached = { sky, sunRays, wall, roof, hills, hillCuts, ground, road, shadows }
  return cached
}

function ChallengesAndConfession({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-cc-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={186} y={0} width={W - 186} height={HORIZON + 30} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 220], push: 1.03 })}>
        {/* the late afternoon sky, the low sun, and the hills */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <circle cx={SUN.x} cy={SUN.y} r={SUN.r} fill={RED} />
        <path d={m.sunRays} fill={RED} />
        <g clipPath={`url(#${skyClip})`}>
          <path d={m.hills} fill={INK} />
          <path d={m.hillCuts} fill={PAPER} />
        </g>
        <path d={m.ground} fill={INK} />
        <path d={m.road} fill={PAPER} />
        <path d={m.road} fill="none" stroke={INK} strokeWidth={LINE.fine} />

        {/* Leonato's house: pale stone, a tiled roof, its door shut */}
        <rect x={0} y={84} width={188} height={GROUND - 84} fill={PAPER} />
        <path d={m.wall} fill={INK} />
        <path d="M-6 88L200 88L190 56L-6 56Z" fill={INK} />
        <path d={m.roof} fill={PAPER} />
        <rect x={-6} y={84} width={206} height={6} fill={INK} />
        <path d="M34 312V196Q34 160 70 160Q106 160 106 196V312Z" fill={PAPER} />
        <path d="M40 312V198Q40 168 70 168Q100 168 100 198V312Z" fill={INK} />
        {/* the shut door: its two leaves and their planks */}
        <path
          d={
            gouge(70, 170, 70, 310, 1.3) +
            gouge(55, 178, 55, 308, 0.9) +
            gouge(85, 178, 85, 308, 0.9)
          }
          fill={PAPER}
        />
        <circle cx={62} cy={246} r={2.4} fill={PAPER} />
        <circle cx={78} cy={246} r={2.4} fill={PAPER} />
        {/* the window, its shutters open */}
        <rect x={124} y={112} width={40} height={50} fill={INK} />
        <path d="M124 112H164M144 112V162" stroke={PAPER} strokeWidth={1.6} />
        <path d="M112 110L124 112V162L112 166Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d="M176 110L164 112V162L176 166Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d="M118 124V156M170 124V156" stroke={INK} strokeWidth={1} />
        <path d="M188 84V314" stroke={INK} strokeWidth={LINE.bold} />
        <rect x={20} y={308} width={110} height={8} fill={PAPER} stroke={INK} strokeWidth={1.4} />

        <path d={m.shadows} fill={INK} />

        {/* the Prince and Claudio, before the house */}
        <Person pose={DON_PEDRO} at={[246, GROUND]} scale={1.1} />
        <g transform="rotate(-5 320 314)">
          <Person pose={CLAUDIO} at={[320, GROUND]} scale={1.12} />
        </g>

        {/* the prisoners, their cords, and the Watch who brought them */}
        <g fill="none" strokeLinecap="round">
          <path d={CORDS} stroke={PAPER} strokeWidth={4.4} />
          <path d={CORDS} stroke={INK} strokeWidth={1.8} />
        </g>
        <Person pose={BORACHIO} at={[462, GROUND]} scale={1.1} flip />
        <Person pose={CONRADE} at={[536, GROUND]} scale={1.08} flip />
        <CutFigure parts={bill([578, GROUND + 2], [582, 88])} />
        <Person pose={WATCHMAN} at={[608, GROUND]} scale={1.08} flip />
        <Person pose={DOGBERRY} at={[688, GROUND]} scale={1.12} flip />
        <Person pose={VERGES} at={[766, GROUND]} scale={1.08} flip />
      </g>
    </>
  )
}

export const challengesAndConfession: LinocutArt = {
  width: W,
  height: H,
  Draw: ChallengesAndConfession,
}

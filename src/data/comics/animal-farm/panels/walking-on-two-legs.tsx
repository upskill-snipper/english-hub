import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Benjamin, Horse } from './people'
import { BleatingSheep, Cockerel, LeapingDog, UprightPig } from './two-legs'

/**
 * Chapter 10: "Walking on two legs", the thirty-first moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "It was just after the sheep had returned, on a pleasant evening when the
 *   animals had finished work and were making their way back to the farm
 *   buildings". So it is a clear evening in the yard, the sun low on the far
 *   side of it: the one thing in the spot colour, with its level rays cut
 *   across a paper sky, as "Clover's vision" cuts its evening.
 * - "It was a pig walking on his hind legs. Yes, it was Squealer. A little
 *   awkwardly, as though not quite used to supporting his considerable bulk
 *   in that position, but with perfect balance, he was strolling across the
 *   yard." So Squealer, pale as the kit cuts him, leans back over his belly
 *   at the head of the procession, nearest the watching animals.
 * - "out from the door of the farmhouse came a long file of pigs, all walking
 *   on their hind legs. Some did it better than others, one or two were even
 *   a trifle unsteady". So a file of black pigs marches across the yard from
 *   the farmhouse door, against the low sun, and one holds his forelegs out
 *   to keep his balance.
 * - "a shrill crowing from the black cockerel, and out came Napoleon himself,
 *   majestically upright, casting haughty glances from side to side, and with
 *   his dogs gambolling round him. He carried a whip in his trotter." So
 *   Napoleon, the biggest figure in the panel ("a mature boar of twenty-four
 *   stone"), comes from the farmhouse with his chin up and a whip carried
 *   slanting in his trotter, its lash slack: held, never raised. His black
 *   cockerel crows in front of him and two of his dogs, with the
 *   "brass-studded collars" of Chapter 5, leap about him.
 * - "Startled, the animals stopped in their tracks. It was Clover's voice";
 *   "Amazed, terrified, huddling together, the animals watched". So on the
 *   left they stand pressed together, Clover's head flung up. Benjamin is
 *   among them: a moment later "Benjamin felt a nose nuzzling at his
 *   shoulder. He looked round. It was Clover."
 * - "all the sheep burst out into a tremendous bleating of" the new slogan,
 *   which is the quotation. So the sheep in front of the huddle have their
 *   heads up and mouths open, and the sound is cut round each mouth.
 *
 * Nothing is shown of any cruelty: the whip is only carried. The animals are
 * the kit's (./people.tsx); the pigs on their hind legs, the cockerel, the
 * leaping dogs and the bleating sheep are ./two-legs.tsx, built on the kit's
 * heads and shapes. Nothing is taken from a film, a cartoon or a stage
 * production. Seeds: 3101 (the sky), 3102 (the yard), 3103 (the shadows).
 */

const W = 860
const H = 340
/** The low sun, on the far side of the yard. */
const SUN: [number, number] = [418, 196]
/** The top of the low wall on the far side of the yard. */
const FAR = 206

/** Each sheep: where it stands, and so where its mouth is (the kit's frame at s 1.3). */
const SHEEP: [number, number][] = [
  [40, 332],
  [110, 336],
  [180, 332],
]
const SHEEP_S = 1.3

type Marks = {
  skyRays: string
  yard: string
  shadows: string
  bleats: string[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(3101)
  // A pleasant summer evening: a paper sky, the sun's level rays cut in ink.
  let skyRays = ''
  for (let a = 180; a < 360; a += between(r, 5.6, 8)) {
    const ang = deg(a)
    let rad = between(r, 46, 80)
    while (rad < 760) {
      const len = between(r, 50, 120)
      const w0 = 0.4 + rad / 280
      skyRays += wedge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        w0,
        w0 + len / 170,
      )
      rad += len + between(r, 8, 20)
    }
  }
  // The trodden yard: ink cuts over paper, heavier towards the front.
  const yard = gougeField(
    rng(3102),
    { x0: 0, x1: W, y0: FAR + 12, y1: H },
    (x, y) => clamp(0.1 + (y - FAR) / 260 + Math.abs(x - SUN[0]) / 2400),
    { spacing: 6, len: [18, 70], max: 2.4 },
  )
  // Shadows thrown towards us by the low sun behind the procession.
  const sh = rng(3103)
  let shadows = ''
  const feet: [number, number, number][] = [
    [548, 256, 16],
    [496, 256, 16],
    [444, 256, 16],
    [392, 256, 16],
    [298, 288, 24],
    [664, 326, 40],
  ]
  for (const [x, y, w] of feet)
    for (let k = 0; k < 3; k++)
      shadows += gouge(
        x - w + k * 3 + between(sh, -2, 2),
        y + 2 + k * 3,
        x + w - k * 3,
        y + 2 + k * 3 + between(sh, -0.5, 0.5),
        1.4 - k * 0.3,
      )
  // The bleating: three short cuts round each open mouth.
  const bleats = SHEEP.map(([x, y]) => {
    const mx = x + 41 * SHEEP_S
    const my = y - 40 * SHEEP_S
    return (
      gouge(mx + 5, my - 8, mx + 13, my - 18, 1.3) +
      gouge(mx + 7, my - 2, mx + 19, my - 6, 1.3) +
      gouge(mx + 6, my + 4, mx + 17, my + 7, 1.3)
    )
  })
  cached = { skyRays, yard, shadows, bleats }
  return cached
}

function WalkingOnTwoLegs({ uid }: ArtProps) {
  const m = marks()
  const sky = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={sky}>
          <rect x={0} y={0} width={W} height={FAR + 2} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [460, 220], push: 1.03 })}>
        {/* the evening sky and the low sun */}
        <rect x={0} y={0} width={W} height={FAR} fill={PAPER} />
        <g clipPath={`url(#${sky})`}>
          <path d={m.skyRays} fill={INK} />
          <circle cx={SUN[0]} cy={SUN[1]} r={30} fill={RED} />
        </g>
        {/* the far wall of the yard, and the yard */}
        <path d={`M0 ${FAR}H${W}V${FAR + 14}H0Z`} fill={INK} />
        <rect x={0} y={FAR + 14} width={W} height={H - FAR - 14} fill={PAPER} />
        <path d={m.yard} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the farmhouse, its door open */}
        <path d="M712 340V100L776 56L866 100V340Z" fill={INK} />
        <path d="M700 104L776 48L870 104" fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        <rect
          x={812}
          y={40}
          width={16}
          height={40}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <rect x={726} y={128} width={40} height={46} fill={PAPER} />
        <rect x={730} y={132} width={32} height={38} fill={INK} />
        <path d="M746 132V170M730 151H762" stroke={PAPER} strokeWidth={LINE.fine} />
        <rect x={790} y={186} width={44} height={116} fill={PAPER} />
        <rect x={795} y={191} width={34} height={111} fill={INK} />

        {/* the animals, huddled together; Clover's head flung up */}
        <Horse at={[95, 316]} s={1.05} who="clover" headDown={-14} uid={uid} />
        <Benjamin at={[150, 326]} s={0.95} />
        {SHEEP.map(([x, y]) => (
          <BleatingSheep key={x} at={[x, y]} s={SHEEP_S} />
        ))}
        {m.bleats.map((d, i) => (
          <path
            key={i}
            d={d}
            fill={INK}
            className="lc-rise"
            style={timing({ delay: 1.6 + i * 0.3, dur: 0.9 })}
          />
        ))}

        {/* the long file of pigs from the farmhouse door, and Squealer at its head */}
        <g className="lc-drift-r" style={timing({ dur: 3.4 })}>
          <UprightPig at={[548, 256]} s={0.56} face={-1} step={1} />
          <UprightPig at={[496, 256]} s={0.56} face={-1} step={0} arms="out" tilt={7} />
          <UprightPig at={[444, 256]} s={0.56} face={-1} step={1} />
          <UprightPig at={[392, 256]} s={0.56} face={-1} step={0} />
        </g>
        <UprightPig at={[300, 288]} s={0.88} face={-1} kind="squealer" tilt={-5} />

        {/* Napoleon, his black cockerel crowing before him, his dogs about him */}
        <Cockerel at={[470, 330]} s={0.95} face={-1} />
        <LeapingDog at={[590, 334]} s={1.1} face={-1} lift={8} />
        <UprightPig
          at={[676, 326]}
          s={1.45}
          face={-1}
          kind="napoleon"
          arms="whip"
          chin={-6}
          tilt={-3}
        />
        <LeapingDog at={[778, 338]} s={1.1} face={1} lift={8} />
      </g>
    </>
  )
}

export const walkingOnTwoLegs: LinocutArt = { width: W, height: H, Draw: WalkingOnTwoLegs }

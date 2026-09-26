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

import { Hen, Horse, Muriel, Pig, Sheep, Wolfdog, place, type P } from './people'

/**
 * Chapter 7: "The confessions", the twenty-first moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Four days later, in the late afternoon, Napoleon ordered all the animals
 *   to assemble in the yard. When they were all gathered together, Napoleon
 *   emerged from the farmhouse, wearing both his medals". So the farmhouse
 *   stands on the left with its door open, the sun is low, and Napoleon, the
 *   kit's black Berkshire (./people.tsx), stands before it with two medals
 *   hung at his neck: horse-brasses, as the medals were made in Chapter 4
 *   ("they were really some old horse-brasses"), cut in paper because the
 *   print has no brass.
 * - "with his nine huge dogs frisking round him and uttering growls that sent
 *   shivers down all the animals' spines". So Napoleon's dogs, the kit's
 *   Wolfdog, stand at his side and behind the pigs; two of the nine are in
 *   the picture, so that the four pigs are not lost among black shapes.
 * - "The four pigs waited, trembling, with guilt written on every line of
 *   their countenances. Napoleon now called upon them to confess their
 *   crimes." That is the instant drawn: the four young pigs ("the same four
 *   pigs as had protested", Chapter 5's "Four young porkers", so the kit's
 *   plain pigs) at Napoleon's feet, heads hung.
 * - "Napoleon stood sternly surveying his audience" and "They all cowered
 *   silently in their places". So on the right the others crouch low and
 *   watch: Boxer, lying down, the biggest of them; two sheep; two hens; and
 *   Muriel, the white goat.
 *
 * SAFEGUARDING. The text goes on to the killings, the "pile of corpses" and
 * "the smell of blood". None of that is drawn: no wound, no blood, no body.
 * The pigs' ears bled when they were dragged ("The pigs' ears were
 * bleeding"), and that is left out too; so are the dogs' attack on Boxer and
 * their "blood-curdling growls", which is why every jaw is shut. The picture
 * stops at the moment before, and the weight of it is carried by the low red
 * sun behind Napoleon: the spot colour as a symbol, round and in the sky,
 * never on an animal.
 *
 * Nothing is taken from a film, a cartoon or a stage production. Seed 2121.
 */

const W = 860
const H = 340
/** The line where the yard meets the far wall of the farmyard. */
const BACK = 214
/** The top of that wall. */
const WALL_TOP = 194
/** The low sun of the late afternoon, behind Napoleon's head. */
const SUN: P = [258, 168]

type Marks = {
  sky: string
  wall: string
  yard: string
  house: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2121)
  // The sky: paper, with the sun's level light cut in ink across it.
  let sky = ''
  for (let a = 180; a < 360; a += between(r, 5.5, 7.5)) {
    const ang = deg(a)
    let rad = between(r, 54, 76)
    while (rad < 640) {
      const len = between(r, 40, 110)
      const w0 = 0.4 + rad / 300
      sky += wedge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        w0,
        w0 + len / 180,
      )
      rad += len + between(r, 8, 20)
    }
  }
  // The far wall of the yard, its stones cut wide so it prints as a middle
  // tone and the black animals in front of it keep their shapes.
  let wall = ''
  for (let y = WALL_TOP + 4, row = 0; y < BACK; y += 6.5, row++) {
    let x = 180 + (row % 2 ? -10 : 0)
    while (x < W) {
      const len = between(r, 14, 26)
      wall += gouge(x + 1.5, y, x + len - 1.5, y + between(r, -0.3, 0.3), 1.8)
      x += len
    }
  }
  // The yard: pale, trodden, lit low from the far side.
  const yard = gougeField(
    r,
    { x0: 0, x1: W, y0: BACK + 2, y1: H },
    (x, y) => clamp(0.2 + (y - BACK) / 480 - Math.abs(x - 430) / 3000),
    { spacing: 5.5, len: [16, 60] },
  )
  // The farmhouse's walls, in shadow: a few courses catching the light.
  let house = ''
  for (let y = 70; y < BACK + 8; y += 8) {
    let x = 4 + between(r, -10, 0)
    while (x < 176) {
      const len = between(r, 12, 34)
      const L = clamp((x - 90) / 120, 0.05, 0.8)
      if (r() < 0.25 + L * 0.5)
        house += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.4 + L * 0.8)
      x += len + between(r, 6, 18)
    }
  }
  // The sun is in front of us and low, so every shadow falls towards the
  // reader: [x at the feet, y, length, width].
  let shadows = ''
  const pools: [number, number, number, number][] = [
    [190, 276, 40, 170],
    [330, 250, 24, 110],
    [556, 238, 10, 90],
    [480, 260, 14, 90],
    [592, 264, 14, 90],
    [408, 310, 24, 110],
    [524, 316, 20, 110],
    [770, 320, 14, 190],
  ]
  for (const [x, y, len, wd] of pools)
    for (let k = 0; k < 4; k++)
      shadows += gouge(
        x - wd / 2 + k * 6,
        y + 2 + (k * len) / 4,
        x + wd / 2 - k * 6,
        y + 2 + (k * len) / 4,
        2.4 - k * 0.4,
      )
  cached = { sky, wall, yard, house, shadows }
  return cached
}

/**
 * One of the four: a plain pig facing Napoleon, tipped forward so its head
 * hangs. Shiver marks were cut round them in the first draft; packed as the
 * four are, they read as curls growing out of the pigs, so the trembling is
 * left to the hung heads and the words.
 */
function Accused({ at, s }: { at: P; s: number }) {
  return (
    <g transform={`rotate(-8 ${at[0]} ${at[1]})`}>
      <Pig at={at} s={s} face={-1} />
    </g>
  )
}

/** Napoleon's two medals, horse-brasses hung at his neck, in the pig's frame. */
function Medals() {
  return (
    <g>
      <path
        d="M22 -50C24 -40 27 -32 30 -25M28 -50C31 -41 35 -33 38 -27"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.1}
      />
      {(
        [
          [30, -22],
          [38.5, -24],
        ] as P[]
      ).map(([x, y]) => (
        <g key={x}>
          <circle cx={x} cy={y} r={4.2} fill={PAPER} />
          <circle cx={x} cy={y} r={2.2} fill="none" stroke={INK} strokeWidth={0.9} />
          <circle cx={x} cy={y} r={0.8} fill={INK} />
        </g>
      ))}
    </g>
  )
}

function TheConfessions({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sky`
  const napoleonAt: P = [186, 276]
  const napoleonS = 1.6
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={170} y={0} width={W - 170} height={WALL_TOP + 2} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 220], push: 1.03 })}>
        {/* the late afternoon sky and the low red sun */}
        <rect x={170} y={0} width={W - 170} height={BACK} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.sky} fill={INK} />
          <circle cx={SUN[0]} cy={SUN[1]} r={44} fill={RED} />
        </g>
        {/* the far wall of the yard */}
        <rect x={170} y={WALL_TOP} width={W - 170} height={BACK - WALL_TOP + 2} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        {/* the yard */}
        <rect x={0} y={BACK} width={W} height={H - BACK} fill={PAPER} />
        <path d={m.yard} fill={INK} />
        {/* the farmhouse Napoleon has come out of, its back door open */}
        <path d="M-4 216V64L60 30H190V216Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M-6 66L62 26L196 26" fill="none" stroke={PAPER} strokeWidth={4} />
        <path d={m.house} fill={PAPER} />
        <rect x={100} y={128} width={46} height={88} fill={PAPER} />
        <rect x={104} y={132} width={38} height={84} fill={INK} />
        <rect x={30} y={96} width={40} height={46} fill={INK} stroke={PAPER} strokeWidth={2} />
        <path d="M50 96V142M30 119H70" stroke={PAPER} strokeWidth={1.4} />
        <rect x={120} y={52} width={40} height={40} fill={INK} stroke={PAPER} strokeWidth={2} />
        <path d="M140 52V92M120 72H160" stroke={PAPER} strokeWidth={1.4} />
        <rect x={94} y={214} width={58} height={6} fill={PAPER} />

        <path d={m.shadows} fill={INK} />

        {/* the others, cowering on the right */}
        <Muriel at={[806, 240]} s={0.8} face={-1} />
        <Horse at={[800, 318]} s={0.96} face={-1} who="boxer" pose="lie" headDown={16} />
        <Hen at={[630, 300]} s={1.3} face={-1} />
        <Hen at={[654, 292]} s={1.2} face={-1} />
        <Sheep at={[690, 324]} s={1.6} face={-1} />
        <Sheep at={[742, 338]} s={1.6} face={-1} />

        {/* a dog looming behind the pigs, facing Napoleon's way */}
        <Wolfdog at={[560, 236]} s={0.95} face={-1} />

        {/* the four pigs, the back two first */}
        <Accused at={[478, 258]} s={0.9} />
        <Accused at={[590, 262]} s={0.9} />
        <Accused at={[408, 308]} s={1.05} />
        <Accused at={[524, 314]} s={1.05} />

        {/* a dog at Napoleon's side */}
        <Wolfdog at={[318, 248]} s={1.0} />

        {/* Napoleon, black against the low red sun */}
        <Pig at={napoleonAt} s={napoleonS} kind="napoleon" />
        <g transform={place(napoleonAt, napoleonS)}>
          <Medals />
        </g>
      </g>
    </>
  )
}

export const theConfessions: LinocutArt = { width: W, height: H, Draw: TheConfessions }

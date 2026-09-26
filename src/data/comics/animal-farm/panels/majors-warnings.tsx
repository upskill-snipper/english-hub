import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Lantern, Roof, lanternLight, lanternRays, plankWall, straw } from './big-barn'
import { Duckling, Horse, Pig } from './people'

/**
 * Chapter 1: "Major's warnings", the second moment in the guide's timeline.
 * The same barn as "Old Major's speech" (./big-barn.tsx), drawn closer: Major
 * and the three he names. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Major raised his trotter for silence." (just before his last words:
 *   "I have little more to say.") So Major lies on his straw under the
 *   lantern with his forequarters lifted, one trotter raised, his mouth open.
 * - "You young porkers who are sitting in front of me"; "You, Boxer, the very
 *   day that those great muscles of yours lose their power"; "And you,
 *   Clover, where are those four foals you bore". So two young pigs lie in
 *   the straw at the foot of the platform, heads up, facing him (a pig drawn
 *   sitting up on its haunches read as a cat at this size, and the text has
 *   them "settled down in the straw"), and the two cart-horses lie close
 *   on the right, their heads up and ears pricked: Boxer behind, with his
 *   white stripe, Clover in front, her foreleg still laid round the ducklings.
 * - "And remember also that in fighting against Man, we must not come to
 *   resemble him. ... No animal must ever live in a house". So through the
 *   window above the horses is the farmhouse, dark: the house where Man
 *   lives, which the animals must never make their own.
 *
 * What Major warns of (the knife, the knacker, the drowning of the dogs) is
 * left to the words and never drawn: many of this site's readers are
 * children, and the picture carries the warning in the listeners' faces.
 *
 * Seeds: 1201 the wall, 1202 the floor straw, 1203 the bed of straw, 1204 the
 * lantern's rays, 1205 the night outside.
 */

const W = 860
const H = 340

const LAMP: [number, number] = [262, 82]

type Marks = {
  grain: string
  joints: string
  rays: string
  floor: string
  bed: string
  bedCuts: string
  sky: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = lanternLight(LAMP[0], LAMP[1], 300)
  const wall = plankWall(rng(1201), { x0: 0, x1: W, y0: 44, y1: 262 }, light, 44, 8.4)
  const floor = straw(
    rng(1202),
    { x0: 300, x1: W, y0: 272, y1: H - 6 },
    (x) => 0.1 + light(x, 170) * 0.9,
    150,
  )
  const b = rng(1203)
  const bed = straw(b, { x0: 10, x1: 350, y0: 266, y1: 292 }, () => 1, 90, [12, 30])
  const bedCuts = straw(b, { x0: 20, x1: 340, y0: 280, y1: 292 }, () => 0.7, 30, [8, 18])
  const rays = lanternRays(1204, LAMP[0], LAMP[1], 150)
  const sky = gougeField(
    rng(1205),
    { x0: 428, x1: 516, y0: 76, y1: 150 },
    (_x, y) => 0.25 + (150 - y) / 160,
    { spacing: 5.4, len: [10, 34], max: 2 },
  )
  cached = { grain: wall.grain, joints: wall.joints, rays, floor, bed, bedCuts, sky }
  return cached
}

function MajorsWarnings({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={428} y={76} width={88} height={74} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [260, 200], push: 1.035 })}>
        <path d={m.grain} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        <path d={m.rays} fill={PAPER} />
        <circle cx={LAMP[0]} cy={LAMP[1]} r={24} fill={INK} />
        <Roof w={W} beamY={30} />

        {/* the window, and through it the farmhouse: "No animal must ever live in a house" */}
        <rect x={420} y={68} width={104} height={90} fill={PAPER} />
        <rect x={426} y={74} width={92} height={78} fill={INK} />
        <g clipPath={`url(#${win})`}>
          <path d={m.sky} fill={PAPER} />
          <path
            d="M436 150V114L464 94L492 114V150ZM476 102V88H483V107ZM492 124H518V150H492Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
          <rect
            x={450}
            y={116}
            width={12}
            height={13}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
          <path d="M456 116V129M450 122.5H462" stroke={PAPER} strokeWidth={0.9} />
        </g>
        <path d="M472 74V152M426 113H518" stroke={PAPER} strokeWidth={4} />
        <path d="M472 74V152M426 113H518" stroke={INK} strokeWidth={2.2} />
        <rect x={414} y={152} width={116} height={7} fill={PAPER} />
        <rect x={414} y={159} width={116} height={2} fill={INK} />

        {/* the floor, strewn with straw, and the lantern over Major */}
        <rect x={0} y={262} width={W} height={4} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />
        <Lantern at={LAMP} cordTop={41} />

        {/* the raised platform, with Major's bed of straw on it */}
        <rect x={0} y={292} width={318} height={50} fill={INK} />
        <path d="M0 292H318V342" stroke={PAPER} strokeWidth={LINE.carve} fill="none" />
        <path
          d={
            gouge(6, 306, 312, 305, 0.9) +
            gouge(6, 320, 312, 321, 0.9) +
            gouge(6, 334, 312, 334, 0.9) +
            wedge(110, 294, 110, 340, 1.2, 1.2) +
            wedge(230, 294, 230, 340, 1.2, 1.2)
          }
          fill={PAPER}
        />
        <path d={m.bed} fill={PAPER} />

        {/* Boxer, lying behind, and Clover in front with the ducklings, both listening */}
        <Horse at={[742, 300]} s={1.12} who="boxer" pose="lie" face={-1} headDown={-6} />
        <Horse at={[626, 338]} s={0.98} who="clover" pose="lie-guard" face={-1} uid={uid} />
        <Duckling at={[532, 332]} s={1.05} face={-1} />
        <Duckling at={[552, 334]} s={1.05} />
        <Duckling at={[566, 330]} s={1.05} face={-1} />

        {/* the young porkers sitting in front of him */}
        <Pig at={[356, 334]} s={0.56} pose="lie" face={-1} />
        <Pig at={[420, 318]} s={0.52} pose="lie" face={-1} />

        {/* Major, his trotter raised */}
        <Pig at={[128, 290]} s={2.05} kind="major" pose="lie-trotter" mouthOpen />
        <path d={m.bedCuts} fill={PAPER} />
      </g>
    </>
  )
}

export const majorsWarnings: LinocutArt = { width: W, height: H, Draw: MajorsWarnings }

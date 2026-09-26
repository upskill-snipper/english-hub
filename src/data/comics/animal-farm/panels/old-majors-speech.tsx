import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Lantern, Roof, lanternLight, lanternRays, plankWall, straw } from './big-barn'
import { Benjamin, Cat, Cow, Dog, Duckling, Hen, Horse, Muriel, Pig, Pigeon, Sheep } from './people'

/**
 * Chapter 1: "Old Major's speech", the first moment in the guide's timeline.
 * The whole farm in the big barn at night, listening. Every detail is from
 * the text (the held edition, src/data/full-texts/animal-farm.ts):
 *
 * - "As soon as the light in the bedroom went out there was a stirring and a
 *   fluttering all through the farm buildings." So it is night, and through
 *   the barn's window the farmhouse is a dark shape with its bedroom window
 *   unlit: Mr Jones is in the moment only as the man asleep over there.
 * - "At one end of the big barn, on a sort of raised platform, Major was
 *   already ensconced on his bed of straw, under a lantern which hung from a
 *   beam." "He was twelve years old and had lately grown rather stout, but he
 *   was still a majestic-looking pig". So Major, the white Middle White boar,
 *   lies on a heap of straw on a raised platform at the left, under the one
 *   lantern, the only light, whose flame is the spot colour. He faces his
 *   audience with his mouth open, speaking.
 * - "the pigs, who settled down in the straw immediately in front of the
 *   platform." "The hens perched themselves on the window-sills, the pigeons
 *   fluttered up to the rafters, the sheep and cows lay down behind the pigs
 *   and began to chew the cud." So the young pigs lie in the straw at the
 *   foot of the platform, heads up, the sheep and a cow lie behind them, hens
 *   roost on the sill and pigeons on the beam.
 * - "The two cart-horses, Boxer and Clover, came in together"; "The two horses
 *   had just lain down"; "Clover made a sort of wall round them with her great
 *   foreleg, and the ducklings nestled down inside it". "the cat ... squeezed
 *   herself in between Boxer and Clover". So both horses lie on the right,
 *   side by side: Clover nearer the platform with her foreleg laid out in
 *   front of the ducklings, Boxer beside her with his white stripe, and the
 *   cat sitting between them. (Drawn first with Boxer behind Clover, the two
 *   merged into one dark mass and his stripe was lost.)
 * - "After the horses came Muriel, the white goat, and Benjamin, the donkey."
 *   They stand at the back.
 * - "Mollie, the foolish, pretty white mare ... came mincing daintily in,
 *   chewing at a lump of sugar. She took a place near the front". So Mollie
 *   stands in the foreground, near the platform, the sugar in her mouth and
 *   the red ribbons in her mane.
 * - "First came the three dogs, Bluebell, Jessie, and Pincher": they lie in
 *   front of the platform.
 *
 * The quotation is Major's own: "Man is the only real enemy we have."
 *
 * Seeds: 1101 the wall, 1102 the floor straw, 1103 the bed of straw, 1104 the
 * lantern's rays, 1105 the night outside.
 */

const W = 860
const H = 340

/** The lantern's flame, above Major's head. */
const LAMP: [number, number] = [206, 88]

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
  const light = lanternLight(LAMP[0], LAMP[1], 290)
  const wall = plankWall(rng(1101), { x0: 0, x1: W, y0: 50, y1: 238 }, light, 34, 9.2)
  const r = rng(1102)
  // The floor: dark, with straw lit near the platform and fading to the right.
  const floor = straw(
    r,
    { x0: 0, x1: W, y0: 246, y1: H - 6 },
    (x) => 0.1 + light(x, 150) * 0.9,
    170,
  )
  // Major's bed: a heap of straw on the platform, thick paper strokes.
  const b = rng(1103)
  const bed = straw(b, { x0: 40, x1: 300, y0: 188, y1: 206 }, () => 1, 84, [11, 26])
  const bedCuts = straw(b, { x0: 44, x1: 296, y0: 194, y1: 204 }, () => 0.6, 40, [6, 14])
  const rays = lanternRays(1104, LAMP[0], LAMP[1], 130)
  const sky = gougeField(
    rng(1105),
    { x0: 468, x1: 552, y0: 86, y1: 158 },
    (_x, y) => 0.25 + (158 - y) / 160,
    { spacing: 5.4, len: [10, 34], max: 2 },
  )
  cached = { grain: wall.grain, joints: wall.joints, rays, floor, bed, bedCuts, sky }
  return cached
}

function OldMajorsSpeech({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={468} y={86} width={84} height={72} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [220, 170], push: 1.03 })}>
        {/* the plank walls, cut by the lantern's light */}
        <path d={m.grain} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        <path d={m.rays} fill={PAPER} />
        <circle cx={LAMP[0]} cy={LAMP[1]} r={24} fill={INK} />
        <Roof w={W} beamY={38} />

        {/* the window: the night outside, and the farmhouse, its bedroom dark */}
        <rect x={460} y={78} width={100} height={88} fill={PAPER} />
        <rect x={466} y={84} width={88} height={76} fill={INK} />
        <g clipPath={`url(#${win})`}>
          <path d={m.sky} fill={PAPER} />
          <path
            d="M474 158V122L500 104L526 122V158ZM512 112V100H518V116ZM526 132H552V158H526Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
          <rect
            x={489}
            y={124}
            width={11}
            height={12}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
          <path d="M494.5 124V136M489 130H500" stroke={PAPER} strokeWidth={0.9} />
        </g>
        <path d="M509 84V160M466 122H554" stroke={PAPER} strokeWidth={4} />
        <path d="M509 84V160M466 122H554" stroke={INK} strokeWidth={2.2} />
        <rect x={454} y={160} width={112} height={7} fill={PAPER} />
        <rect x={454} y={167} width={112} height={2} fill={INK} />
        <Hen at={[478, 160]} s={0.95} face={-1} />
        <Hen at={[504, 160]} s={0.95} face={-1} />
        <Hen at={[536, 160]} s={0.95} face={-1} />

        {/* pigeons on the beam */}
        <Pigeon at={[352, 38]} s={1.1} face={-1} />
        <Pigeon at={[380, 38]} s={1.1} face={-1} />
        <Pigeon at={[420, 38]} s={1.1} face={-1} />

        {/* the floor, strewn with straw */}
        <rect x={0} y={238} width={W} height={4} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />

        {/* the raised platform, and the lantern hanging over it from the beam */}
        <rect x={20} y={204} width={290} height={46} fill={INK} />
        <path
          d="M20 204H310M20 250H310M310 204V250"
          stroke={PAPER}
          strokeWidth={LINE.carve}
          fill="none"
        />
        <path
          d={
            gouge(26, 216, 304, 215, 0.9) +
            gouge(26, 228, 304, 229, 0.9) +
            gouge(26, 240, 304, 240, 0.9) +
            wedge(96, 206, 96, 248, 1.2, 1.2) +
            wedge(188, 206, 188, 248, 1.2, 1.2) +
            wedge(270, 206, 270, 248, 1.2, 1.2)
          }
          fill={PAPER}
        />
        <Lantern at={LAMP} cordTop={49} />

        {/* the dogs, first in, lying at the foot of the platform */}
        <Dog at={[70, 334]} s={0.95} lying />
        <Dog at={[160, 336]} s={0.95} lying />
        <Dog at={[250, 334]} s={0.95} lying />

        {/* the sheep and cows lying behind the pigs, chewing the cud */}
        <Cow at={[392, 262]} s={0.62} face={-1} />
        <Sheep at={[530, 266]} s={1.15} face={-1} />
        <Sheep at={[566, 268]} s={1.15} face={-1} />

        {/* Muriel and Benjamin, standing at the back */}
        <Muriel at={[636, 262]} s={0.78} face={-1} />
        <Benjamin at={[836, 262]} s={0.72} face={-1} />

        {/* Clover lying in front with the ducklings, Boxer beside her, the cat between */}
        <Horse at={[782, 326]} s={0.82} who="boxer" pose="lie" face={-1} />
        <Horse at={[664, 336]} s={0.7} who="clover" pose="lie-guard" face={-1} uid={uid} />
        <Cat at={[738, 330]} s={1.05} face={-1} />
        <Duckling at={[596, 330]} s={0.78} face={-1} />
        <Duckling at={[611, 332]} s={0.78} />
        <Duckling at={[624, 329]} s={0.78} face={-1} />

        {/* the young pigs, settled in the straw at the foot of the platform */}
        <Pig at={[340, 300]} s={0.44} pose="lie" face={-1} />
        <Pig at={[376, 318]} s={0.44} pose="lie" face={-1} />
        <Pig at={[334, 334]} s={0.46} pose="lie" face={-1} />

        {/* Mollie, near the front, with her sugar and her ribbons */}
        <Horse at={[474, 334]} s={0.62} who="mollie" sugar face={-1} headDown={-6} />

        {/* Major on his bed of straw, speaking */}
        <path d={m.bed} fill={PAPER} />
        <Pig at={[150, 206]} s={1.1} kind="major" pose="lie" mouthOpen />
        <path d={m.bedCuts} fill={PAPER} />
        <path d={`M24 ${n(206)}H306`} stroke={INK} strokeWidth={1} />
      </g>
    </>
  )
}

export const oldMajorsSpeech: LinocutArt = { width: W, height: H, Draw: OldMajorsSpeech }

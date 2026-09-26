import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, deg, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Lantern, Platform, Roof, lanternLight, lanternRays, plankWall, straw } from './big-barn'
import { Horse, Moses, Pig, Sheep } from './people'

/**
 * Chapter 2: "Animalism", the fourth moment in the guide's timeline. One of
 * the secret night meetings in the big barn, in the three months after
 * Major's death. The barn, its platform and its lantern are the ones Major
 * spoke under (./big-barn.tsx); Major is gone, and the pigs have his place.
 * Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Several nights a week, after Mr. Jones was asleep, they held secret
 *   meetings in the barn and expounded the principles of Animalism to the
 *   others." "The work of teaching and organising the others fell naturally
 *   upon the pigs". So it is night, under the one lantern, and the three pigs
 *   are the ones doing the talking.
 * - "Napoleon was a large, rather fierce-looking Berkshire boar ... not much
 *   of a talker"; "Snowball was a more vivacious pig than Napoleon, quicker in
 *   speech". So on the platform Snowball, pale, speaks with his mouth open,
 *   and Napoleon, big and black, stands behind him with his mouth shut.
 * - Squealer: "a small fat pig ... with very round cheeks, twinkling eyes,
 *   nimble movements, and a shrill voice. He was a brilliant talker, and when
 *   he was arguing some difficult point he had a way of skipping from side to
 *   side and whisking his tail". So he is down among the animals, mid-skip,
 *   mouth open, his tail whisked out, with the cut marks of his skipping on
 *   the straw at his feet: the quotation is about him.
 * - "The stupidest questions of all were asked by Mollie, the white mare. The
 *   very first question she asked Snowball was: 'Will there still be sugar
 *   after the Rebellion?'" "And shall I still be allowed to wear ribbons in
 *   my mane?" So Mollie stands nearest the platform, facing Snowball, a lump
 *   of sugar at her lips (as she came in "chewing at a lump of sugar" in
 *   Chapter 1) and her red ribbons in her mane.
 * - "Their most faithful disciples were the two cart-horses, Boxer and
 *   Clover." So they stand close behind her, heads bent to listen.
 * - "The pigs had an even harder struggle to counteract the lies put about by
 *   Moses, the tame raven. ... he was also a clever talker." The text does not
 *   say where Moses told his tales, so he is not inside the meeting: he sits
 *   on the sill of the barn's open window, outside it, his beak open,
 *   talking in to the sheep below. Sugarcandy Mountain, "somewhere up in the
 *   sky, a little distance beyond the clouds", is left to his words: drawn,
 *   it would stand in the sky as if it were there.
 *
 * Seeds: 1401 the wall, 1402 the floor straw, 1403 the lantern's rays, 1404
 * the night outside, 1405 Squealer's skipping.
 */

const W = 860
const H = 340

const LAMP: [number, number] = [176, 78]

type Marks = {
  grain: string
  joints: string
  rays: string
  floor: string
  sky: string
  skip: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = lanternLight(LAMP[0], LAMP[1], 300)
  const wall = plankWall(rng(1401), { x0: 0, x1: W, y0: 44, y1: 238 }, light, 38, 8.4)
  const floor = straw(
    rng(1402),
    { x0: 290, x1: W, y0: 246, y1: H - 6 },
    (x) => 0.1 + light(x, 150) * 0.9,
    190,
  )
  const rays = lanternRays(1403, LAMP[0], LAMP[1], 130)
  const sky = gougeField(
    rng(1404),
    { x0: 402, x1: 508, y0: 96, y1: 172 },
    (_x, y) => 0.35 + (172 - y) / 150,
    { spacing: 5.2, len: [10, 34], max: 2.2 },
  )
  // Squealer's skipping, from side to side: arcs cut in the straw behind his feet.
  const r = rng(1405)
  const skip =
    arcDashes(r, 356, 312, 26, deg(200), deg(250), [4, 8], [3, 5]) +
    arcDashes(r, 356, 312, 34, deg(205), deg(245), [4, 8], [3, 5]) +
    arcDashes(r, 426, 312, 26, deg(290), deg(340), [4, 8], [3, 5]) +
    arcDashes(r, 426, 312, 34, deg(295), deg(335), [4, 8], [3, 5])
  cached = { grain: wall.grain, joints: wall.joints, rays, floor, sky, skip }
  return cached
}

function Animalism({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={402} y={96} width={106} height={76} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        <path d={m.grain} fill={PAPER} />
        <path d={m.joints} fill={INK} />
        <path d={m.rays} fill={PAPER} />
        <circle cx={LAMP[0]} cy={LAMP[1]} r={24} fill={INK} />
        <Roof w={W} beamY={30} />

        {/* the window, open on the night, and Moses on its sill */}
        <rect x={394} y={88} width={122} height={90} fill={PAPER} />
        <rect x={400} y={94} width={110} height={78} fill={INK} />
        <g clipPath={`url(#${win})`}>
          <path d={m.sky} fill={PAPER} />
        </g>
        <rect x={388} y={172} width={134} height={7} fill={PAPER} />
        <rect x={388} y={179} width={134} height={2} fill={INK} />
        <Moses at={[462, 172]} s={1.6} face={-1} beakOpen />

        {/* the floor, strewn with straw, and the lantern */}
        <rect x={0} y={238} width={W} height={4} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />
        <Lantern at={LAMP} cordTop={41} />

        {/* the platform, where Major lay: Napoleon behind, Snowball speaking */}
        <Platform x0={0} x1={300} top={214} bottom={252} />
        <Pig at={[104, 214]} s={1.02} kind="napoleon" />
        <Pig at={[212, 216]} s={0.92} kind="snowball" mouthOpen />

        {/* the sheep, listening to Moses at the window */}
        <Sheep at={[516, 262]} s={1.2} face={-1} />
        <Sheep at={[470, 264]} s={1.2} />

        {/* Boxer and Clover, the faithful disciples, and Mollie in front */}
        <Horse at={[772, 318]} s={0.82} who="boxer" face={-1} headDown={14} />
        <Horse at={[676, 334]} s={0.74} who="clover" face={-1} headDown={12} uid={uid} />
        <Horse at={[550, 336]} s={0.64} who="mollie" sugar face={-1} headDown={-4} />

        {/* Squealer, skipping from side to side */}
        <path d={m.skip} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
        <Pig at={[392, 305]} s={0.72} kind="squealer" pose="skip" mouthOpen />
        <path d="M0 252H300" stroke={PAPER} strokeWidth={LINE.fine} />
      </g>
    </>
  )
}

export const animalism: LinocutArt = { width: W, height: H, Draw: Animalism }

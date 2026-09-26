import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Benjamin, Hen, Horse, Man, Muriel, Pig, Sheep } from './people'

/**
 * Chapter 8: "The Battle of the Windmill", the twenty-fourth moment in the
 * guide's timeline. The battle has three turns (the men's guns drive the
 * animals back, the windmill is blown up, the animals charge and the men
 * flee); the panel draws the middle one, the one the battle is named for.
 * Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "They took refuge in the farm buildings and peeped cautiously out from
 *   chinks and knot-holes. The whole of the big pasture, including the
 *   windmill, was in the hands of the enemy." So the animals are on the
 *   near side of a farm building, on the left, and the pasture rises beyond
 *   to the windmill's knoll on the right.
 * - "The two with the hammer and the crowbar were drilling a hole near the
 *   base of the windmill." "After a few minutes the men were seen to be
 *   running in all directions. Then there was a deafening roar." So small
 *   men in caps (the kit's Man) run from the knoll both ways.
 * - "The pigeons swirled into the air, and all the animals, except Napoleon,
 *   flung themselves flat on their bellies and hid their faces." So Boxer and
 *   Clover lie with their heads down to the ground, Benjamin and Muriel lie
 *   with their heads bowed to the grass, the sheep and the hens are flat, and
 *   Napoleon alone stands, looking at it; pigeons wheel over the pasture.
 *   (Muriel was first drawn lying with her head up, and Benjamin's face
 *   turned out to the reader, which the words "hid their faces" do not
 *   allow: both were bowed on 27 September 2026.)
 * - "When they got up again, a huge cloud of black smoke was hanging where
 *   the windmill had been." "The force of the explosion had flung them to
 *   distances of hundreds of yards." So the windmill is a heap of black
 *   billows with its stones flung out of it in every direction and only a
 *   broken stump of its foundations at the foot. The spot colour is the
 *   flash of the blasting powder at the foot of the cloud: the one thing in
 *   the picture that is burning.
 *
 * SAFEGUARDING. The fighting after the blast, and "A cow, three sheep, and
 * two geese were killed", the men's broken heads, and Boxer's wounds are left
 * to the words. The only thing destroyed in the picture is the building; no
 * man and no animal is hurt in it, and the men are running away from it.
 *
 * The animals are the kit's (./people.tsx). Nothing is taken from a film, a
 * cartoon or a stage production. Seed 2424.
 */

const W = 860
const H = 340
/** Where the windmill stood, on top of the knoll: the foot of the blast. */
const MILL: Pt = [650, 184]
/** The big pasture, rising from the farm buildings to the knoll. */
const LAND = (x: number) => 262 - 80 * Math.exp(-(((x - MILL[0]) / 170) ** 2)) - (x - 200) * 0.02
/** The ground the animals lie on, in the lee of the building. */
const YARD = 290

/** One billow of smoke: [cx, cy, r]. */
type Billow = [number, number, number]

type Marks = {
  sky: string
  pasture: string
  grass: string
  billows: Billow[]
  billowCuts: string
  flash: string
  stump: string
  stones: [number, number, number, number][]
  birds: string
  yard: string
  boards: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2424)
  // A pale morning sky, lightly scored.
  let sky = ''
  for (let y = 10; y < 200; y += 7) {
    let x = 200 + between(r, -20, 0)
    while (x < W) {
      const len = between(r, 30, 110)
      if (r() < 0.34 - y / 900)
        sky += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.9 - y / 400)
      x += len + between(r, 20, 60)
    }
  }
  // The big pasture, pale in the morning, its grass scored in ink.
  let pasture = `M196 ${H}L196 ${n(LAND(196))}`
  for (let x = 196; x <= W + 8; x += 8) pasture += `L${n(x)} ${n(LAND(x))}`
  pasture += `L${W + 8} ${H}Z`
  const grass = gougeField(
    r,
    { x0: 196, x1: W, y0: 176, y1: H },
    (x, y) => (y > LAND(x) + 5 ? clamp(0.1 + (y - LAND(x)) / 420) : 0),
    { spacing: 6, len: [10, 40], gap: [8, 30] },
  )
  // The cloud of black smoke: a heap of billows, widening as it rises.
  const billows: Billow[] = []
  for (let i = 0; i < 28; i++) {
    const t = i / 27
    const cy = MILL[1] - 14 - t * 132 + between(r, -8, 8)
    const spread = 26 + t * 80
    billows.push([MILL[0] + between(r, -spread, spread), cy, 18 + t * 26 + between(r, -4, 6)])
  }
  // The rolling edges of the billows, cut in paper on the side the morning
  // light is on.
  let billowCuts = ''
  for (const [cx, cy, rad] of billows) {
    const a0 = deg(between(r, 195, 230))
    const a1 = a0 + deg(between(r, 50, 80))
    const pts: Pt[] = []
    for (let k = 0; k <= 10; k++) {
      const a = a0 + ((a1 - a0) * k) / 10
      pts.push([cx + Math.cos(a) * rad * 0.8, cy + Math.sin(a) * rad * 0.8])
    }
    billowCuts += ribbon(pts, 2.4, 0.8)
  }
  // The flash of the blasting powder at the foot of the cloud.
  let flash = ''
  const spikes = 13
  for (let k = 0; k < spikes * 2; k++) {
    const a = deg(180 + (k / (spikes * 2 - 1)) * 180)
    const rad = k % 2 ? between(r, 12, 18) : between(r, 30, 46)
    flash += `${k ? 'L' : 'M'}${n(MILL[0] + Math.cos(a) * rad * 1.35)} ${n(MILL[1] + 4 + Math.sin(a) * rad)}`
  }
  flash += 'Z'
  // All that is left: the broken stump of the foundations.
  const stump = `M${MILL[0] - 46} ${MILL[1] + 8}L${MILL[0] - 44} ${MILL[1] - 6}L${MILL[0] - 34} ${MILL[1] - 2}L${MILL[0] - 28} ${MILL[1] - 12}L${MILL[0] - 22} ${MILL[1] - 4}L${MILL[0] + 20} ${MILL[1] - 3}L${MILL[0] + 28} ${MILL[1] - 14}L${MILL[0] + 36} ${MILL[1] - 5}L${MILL[0] + 46} ${MILL[1] - 8}L${MILL[0] + 48} ${MILL[1] + 8}Z`
  // Stones flung out of the cloud: [x, y, size, angle].
  const stones: Marks['stones'] = []
  for (let i = 0; i < 30; i++) {
    const a = deg(between(r, 190, 350))
    const d = between(r, 70, 250)
    stones.push([
      MILL[0] + Math.cos(a) * d * 1.3,
      MILL[1] - 40 + Math.sin(a) * d * 0.75,
      between(r, 6, 13),
      between(r, 0, 90),
    ])
  }
  // "The pigeons swirled into the air": birds wheeling over the pasture.
  let birds = ''
  for (let i = 0; i < 9; i++) {
    const a = deg(196 + i * 14 + between(r, -5, 5))
    const d = between(r, 170, 220)
    const x = MILL[0] - 30 + Math.cos(a) * d
    const y = MILL[1] - 40 + Math.sin(a) * d * 0.5
    const s = between(r, 5.5, 8)
    birds += `M${n(x - s)} ${n(y - s * 0.4)}Q${n(x - s * 0.4)} ${n(y - s * 0.8)} ${n(x)} ${n(y)}Q${n(x + s * 0.4)} ${n(y - s * 0.8)} ${n(x + s)} ${n(y - s * 0.4)}`
  }
  // The trodden ground in the lee of the building: pale, so the black
  // animals lying on it keep their shapes.
  const yard = gougeField(
    r,
    { x0: 0, x1: 560, y0: YARD - 4, y1: H },
    (x, y) => clamp(0.16 + (y - YARD) / 420),
    { spacing: 5, len: [12, 50] },
  )
  // The building's boards, dark, with the chinks and knot-holes of the text.
  let boards = ''
  for (let x = 10; x < 190; x += 13)
    boards += gouge(x + between(r, -1, 1), 30, x + between(r, -1, 1), YARD - 8, 0.5 + x / 800)
  cached = {
    sky,
    pasture,
    grass,
    billows,
    billowCuts,
    flash,
    stump,
    stones,
    birds,
    yard,
    boards,
  }
  return cached
}

function BattleOfTheWindmill({ uid }: ArtProps) {
  const m = marks()
  void uid
  return (
    <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
      {/* the pale morning sky over the big pasture */}
      <rect x={180} y={0} width={W - 180} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.pasture} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.grass} fill={INK} />

      {/* the men who laid the powder, running in all directions */}
      <Man at={[566, 236]} s={0.36} face={-1} cap />
      <Man at={[614, 222]} s={0.32} face={-1} pose="run-look-back" cap />
      <Man at={[752, 228]} s={0.36} cap />
      <Man at={[800, 244]} s={0.4} pose="run-look-back" cap />

      {/* the stones of the windmill, flung out */}
      <g fill={INK} stroke={PAPER} strokeWidth={1.4}>
        {m.stones.map(([x, y, s, a], i) => (
          <rect
            key={i}
            x={n(x - s / 2)}
            y={n(y - s / 2)}
            width={n(s)}
            height={n(s * 0.7)}
            transform={`rotate(${n(a)} ${n(x)} ${n(y)})`}
          />
        ))}
      </g>
      {/* "a huge cloud of black smoke was hanging where the windmill had been" */}
      <g className="lc-rise" style={timing({ delay: 0.6, dur: 1.6 })}>
        <g fill={INK} stroke={PAPER} strokeWidth={3.2}>
          {m.billows.map(([cx, cy, rad], i) => (
            <circle key={i} cx={n(cx)} cy={n(cy)} r={n(rad)} />
          ))}
        </g>
        <g fill={INK}>
          {m.billows.map(([cx, cy, rad], i) => (
            <circle key={i} cx={n(cx)} cy={n(cy)} r={n(rad)} />
          ))}
        </g>
        <path d={m.billowCuts} fill={PAPER} />
      </g>
      <path d={m.stump} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path
        className="lc-flicker"
        d={m.flash}
        fill={RED}
        stroke={INK}
        strokeWidth={1.4}
        strokeLinejoin="round"
      />
      <path d={m.birds} fill="none" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />

      {/* the farm building the animals shelter behind */}
      <rect x={0} y={0} width={196} height={YARD} fill={INK} />
      <path d={m.boards} fill={PAPER} />
      <path d="M192 0V290" stroke={PAPER} strokeWidth={LINE.carve} />
      <g fill={PAPER}>
        <circle cx={62} cy={150} r={2.4} />
        <circle cx={126} cy={96} r={2} />
        <rect x={150} y={176} width={3} height={14} />
      </g>
      <path d={`M0 ${YARD - 4}H560`} stroke={INK} strokeWidth={LINE.bold} />
      <rect x={0} y={YARD - 4} width={200} height={H - YARD + 4} fill={PAPER} />
      <path d={m.yard} fill={INK} />

      {/* "all the animals, except Napoleon, flung themselves flat on their
          bellies and hid their faces" */}
      <Horse at={[150, 304]} s={0.9} who="clover" pose="lie" headDown={62} uid={uid} />
      <Horse at={[318, 310]} s={1.0} who="boxer" pose="lie" headDown={62} />
      <Muriel at={[54, 334]} s={0.95} lying headDown={62} />
      <Benjamin at={[226, 338]} s={1.0} lying headDown={58} />
      <Sheep at={[404, 326]} s={1.5} />
      <Sheep at={[358, 340]} s={1.5} />
      <Hen at={[446, 336]} s={1.3} />
      <Hen at={[120, 336]} s={1.2} />
      {/* Napoleon alone on his feet, facing it */}
      <Pig at={[526, 318]} s={1.25} kind="napoleon" />
    </g>
  )
}

export const battleOfTheWindmill: LinocutArt = { width: W, height: H, Draw: BattleOfTheWindmill }

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Benjamin, Horse, Moses, Pig, place, type P } from './people'

/**
 * Chapter 10: "Years pass", the thirtieth moment in the guide's timeline.
 * Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "Years passed. The seasons came and went, the short animal lives fled by.
 *   A time came when there was no one who remembered the old days before the
 *   Rebellion, except Clover, Benjamin, Moses the raven, and a number of the
 *   pigs." So the three who remember stand together on the left: Clover,
 *   Benjamin, and Moses on a post beside them, looking across at the farm
 *   as it is now.
 * - "Clover was an old stout mare now, stiff in the joints and with a
 *   tendency to rheumy eyes." So her head hangs low. "Only old Benjamin was
 *   much the same as ever, except for being a little greyer about the
 *   muzzle": the kit's Benjamin, whose muzzle is already cut pale.
 * - "The windmill had been successfully completed at last ... The windmill,
 *   however, had not after all been used for generating electrical power. It
 *   was used for milling corn, and brought in a handsome money profit." So the
 *   finished windmill stands in the middle, its sails whole, with sacks of
 *   milled corn piled at its door.
 * - "The animals were hard at work building yet another windmill". So behind
 *   the three, low new walls are rising, and two of the young horses ("fine
 *   upstanding beasts, willing workers and good comrades, but very stupid")
 *   haul stone to them.
 * - "Napoleon was now a mature boar of twenty-four stone. Squealer was so fat
 *   that he could with difficulty see out of his eyes." So on the right the
 *   two pigs stand larger than any pig before them, Napoleon black and huge,
 *   Squealer pale and swollen, a heavy fold of fat drawn down over his eye.
 *
 * The animals are the shared figures of ./people.tsx. The spot colour is the
 * farm's roofs, red in the text ("the red roofs of the farm buildings",
 * Chapter 7), and nothing else. Nothing is taken from a film, a cartoon or a
 * stage production.
 *
 * Seeds: 3001 (sky and ground), 3002 (the windmill's stone), 3003 (the new
 * walls).
 */

const W = 860
const H = 340
/** The line of the far country. */
const FAR = 198
/** The windmill: its axis, its base and top, and where its sails turn. */
const MILL = { x: 474, base: 206, top: 70, half0: 42, half1: 26 }
const HUB: P = [474, 64]
/** Squealer, grown fat, on the right. */
const SQUEALER: P = [778, 318]
const SQUEALER_S = 1.06

type Marks = {
  sky: string
  hills: string
  ground: string
  stones: string
  newWalls: string
  sails: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(3001)
  // A pale day: paper, a few long streaks of cloud cut in ink.
  let sky = ''
  for (let y = 18; y < FAR - 30; y += 11) {
    let x = between(r, -60, 0)
    while (x < W) {
      const len = between(r, 40, 140)
      if (r() < 0.32) sky += gouge(x, y, x + len, y + between(r, -1.5, 1.5), 0.6 + y / 260)
      x += len + between(r, 30, 120)
    }
  }
  // The far hills, a dark band.
  let hills = `M0 ${FAR}`
  for (let x = 0; x <= W; x += 8)
    hills += `L${x} ${n(FAR - 10 - 6 * Math.sin(x / 90 + 1) - 3 * Math.sin(x / 31))}`
  hills += `L${W} ${FAR + 8}L0 ${FAR + 8}Z`
  // The pasture: paper in the light, cut with short strokes of ink that
  // grow heavier towards us.
  let ground = ''
  for (let y = FAR + 12; y < H; y += 6 + (y - FAR) * 0.05) {
    const t = clamp((y - FAR) / (H - FAR))
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 6, 18) * (0.7 + t)
      if (r() < 0.55) ground += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + t * 1.2)
      x += len + between(r, 12, 38) * (1.4 - t * 0.5)
    }
  }
  // The finished windmill's stone, in courses.
  const sr = rng(3002)
  let stones = ''
  for (let y = MILL.top + 18, row = 0; y < MILL.base - 4; y += 10, row++) {
    const f = (y - MILL.top) / (MILL.base - MILL.top)
    const half = MILL.half1 + (MILL.half0 - MILL.half1) * f
    let x = MILL.x - half + (row % 2 ? -6 : 0)
    while (x < MILL.x + half - 4) {
      const bw = between(sr, 12, 19)
      stones += `M${n(Math.max(x, MILL.x - half) + 1.5)} ${n(y)}H${n(Math.min(x + bw, MILL.x + half) - 1.5)}`
      x += bw
    }
  }
  // "yet another windmill": its first low courses.
  const nr = rng(3003)
  let newWalls = ''
  for (let y = 186, row = 0; y < 208; y += 7, row++) {
    let x = 214 + (row % 2 ? -5 : 0)
    while (x < 300) {
      const bw = between(nr, 10, 15)
      newWalls += `M${n(Math.max(x, 214) + 1)} ${n(y)}H${n(Math.min(x + bw, 300) - 1)}`
      x += bw
    }
  }
  // Four sails, each a lattice: a whip with bars across it.
  let sails = ''
  for (const a of [-60, 30, 120, 210]) {
    const t = deg(a)
    const [ux, uy] = [Math.cos(t), Math.sin(t)]
    const [vx, vy] = [-uy, ux]
    const L = 112
    sails += wedge(HUB[0], HUB[1], HUB[0] + ux * L, HUB[1] + uy * L, 4, 2.4)
    for (let d = 26; d < L; d += 11) {
      const px = HUB[0] + ux * d
      const py = HUB[1] + uy * d
      sails += wedge(px, py, px + vx * 20, py + vy * 20, 1.8, 1.6)
    }
    sails += wedge(
      HUB[0] + ux * 24 + vx * 20,
      HUB[1] + uy * 24 + vy * 20,
      HUB[0] + ux * L + vx * 20,
      HUB[1] + uy * L + vy * 20,
      1.8,
      1.6,
    )
  }
  cached = { sky, hills, ground, stones, newWalls, sails }
  return cached
}

/** A sack of milled corn, tied at the neck. */
const sack = (x: number, y: number, s = 1) =>
  `M${n(x - 9 * s)} ${n(y)}C${n(x - 11 * s)} ${n(y - 12 * s)} ${n(x - 8 * s)} ${n(y - 20 * s)} ${n(x - 3 * s)} ${n(y - 22 * s)}L${n(x - 4 * s)} ${n(y - 27 * s)}L${n(x + 4 * s)} ${n(y - 27 * s)}L${n(x + 3 * s)} ${n(y - 22 * s)}C${n(x + 8 * s)} ${n(y - 20 * s)} ${n(x + 11 * s)} ${n(y - 12 * s)} ${n(x + 9 * s)} ${n(y)}Z`

function YearsPass({ uid }: ArtProps) {
  const m = marks()
  const millBody = `M${MILL.x - MILL.half0} ${MILL.base}L${MILL.x - MILL.half1} ${MILL.top + 12}L${MILL.x + MILL.half1} ${MILL.top + 12}L${MILL.x + MILL.half0} ${MILL.base}Z`
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.hills} fill={INK} />
      <path d={m.ground} fill={INK} />

      {/* the farm, prosperous and enlarged, its roofs red */}
      <g fill={INK}>
        <rect x={560} y={176} width={96} height={26} />
        <rect x={664} y={184} width={60} height={18} />
        <rect x={588} y={156} width={7} height={12} />
      </g>
      <g fill={RED}>
        <path d="M554 178L572 162L646 162L662 178Z" />
        <path d="M660 186L672 176L716 176L728 186Z" />
      </g>
      <path
        d="M572 186H588M600 186H614M626 186H640M676 192H688M700 192H712"
        stroke={PAPER}
        strokeWidth={LINE.bold}
      />

      {/* the windmill, finished at last, milling corn */}
      <path
        d={millBody}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.stones} stroke={PAPER} strokeWidth={LINE.fine} fill="none" />
      <path
        d={`M${MILL.x - MILL.half1 - 6} ${MILL.top + 14}Q${MILL.x} ${MILL.top - 18} ${MILL.x + MILL.half1 + 6} ${MILL.top + 14}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${MILL.x - 9} ${MILL.base}V${MILL.base - 30}Q${MILL.x} ${MILL.base - 40} ${MILL.x + 9} ${MILL.base - 30}V${MILL.base}Z`}
        fill={PAPER}
      />
      <path d={m.sails} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
      <circle cx={HUB[0]} cy={HUB[1]} r={6} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* sacks of milled corn at its door */}
      <path
        d={sack(430, 214) + sack(446, 216, 1.1) + sack(512, 214) + sack(528, 216, 0.9)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d="M426 200L434 200M442 200L450 200M508 200L516 200M524 204L532 204"
        stroke={INK}
        strokeWidth={LINE.fine}
      />

      {/* "yet another windmill", its first courses, and the young horses hauling stone to it */}
      <path
        d="M210 208L214 182L300 182L304 208Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.newWalls} stroke={PAPER} strokeWidth={LINE.fine} fill="none" />
      <Horse at={[334, 222]} s={0.36} who="plain" face={-1} headDown={16} />
      <Horse at={[372, 226]} s={0.38} who="plain" face={-1} headDown={20} />
      <path d="M318 206L398 214M356 210L412 220" stroke={INK} strokeWidth={1.2} />
      <path
        d="M396 222L402 212L416 210L424 216L420 224Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <path
        d="M408 212L414 206L424 208L426 214Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />

      {/* the three who remember: Clover, Benjamin, and Moses on his post */}
      <Horse at={[112, 312]} s={0.92} who="clover" headDown={16} uid={uid} />
      <Benjamin at={[226, 318]} s={0.9} />
      <path
        d="M340 318L342 250L354 250L356 318Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(346, 256, 346, 312, 1)} fill={PAPER} />
      <Moses at={[348, 250]} s={1.4} />

      {/* Napoleon, "a mature boar of twenty-four stone", and Squealer, "so fat" */}
      <Pig at={[602, 322]} s={1.45} face={-1} kind="napoleon" />
      <Pig at={SQUEALER} s={SQUEALER_S} face={-1} kind="squealer" />
      {/* "so fat that he could with difficulty see out of his eyes": a heavy fold over the eye */}
      <g transform={place(SQUEALER, SQUEALER_S, -1)}>
        <path
          d="M33.6 -42.4C36.6 -45.4 41.6 -46 44.8 -43.4C41.4 -42.2 37.4 -41.6 33.6 -42.4Z"
          fill={INK}
        />
        <path
          d="M34 -37.4C37.4 -35.6 41.4 -35.8 44 -37.8"
          fill="none"
          stroke={INK}
          strokeWidth={1}
        />
      </g>
    </g>
  )
}

export const yearsPass: LinocutArt = { width: W, height: H, Draw: YearsPass }

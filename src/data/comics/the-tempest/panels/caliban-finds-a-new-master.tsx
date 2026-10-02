import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { BarkBottle, Person, type P } from './people'

/**
 * Act 2, Scene 2: "Caliban finds a new master", the seventh moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Enter Caliban with a burden of wood. A noise of thunder heard." "Here's
 *   neither bush nor shrub to bear off any weather at all, and another storm
 *   brewing ... Yond same black cloud, yond huge one, looks like a foul
 *   bombard that would shed his liquor." So the ground is open, with grass
 *   and no bush, and a huge black cloud hangs over the left of the sky, its
 *   rain falling far off; by the end the storm is passing ("Is the storm
 *   overblown?") and the sky clears to the right.
 * - "I'll fall flat"; "I'll bear him no more sticks, but follow thee". The
 *   burden of wood lies on the ground behind them, where he let it fall.
 * - "Here, bear my bottle"; Act 3, Scene 2 opens "Enter Caliban with a
 *   bottle". So Caliban carries Stephano's bottle, "which I made of the bark
 *   of a tree with mine own hands" (the kit's BarkBottle). It is the spot
 *   colour: he has put down one master's wood and taken up another's bottle,
 *   which is what the moment is about. He carries it at his side; he is not
 *   shown drinking.
 * - "Farewell, master; farewell, farewell!" "Freedom, high-day! high-day,
 *   freedom!" Stephano: "lead the way." Caliban leads, on the right,
 *   striding out with his head up and his mouth open in song, and waves back
 *   over his shoulder to the old master, one open hand flung up behind him.
 *   He is drawn as the kit draws him (./people.tsx): a man, barefoot, in his
 *   gaberdine. Nothing in the picture, or in these notes, repeats what the
 *   others call him.
 * - Stephano, "my drunken butler" (5.1), follows and points him on: the
 *   kit's Stephano, his hat tipped back.
 * - Trinculo, the jester in motley, comes last and looks up at the cloud,
 *   one hand held out for the rain he fears: "If it should thunder as it did
 *   before, I know not where to hide my head".
 *
 * Seeds: 3701 (sky), 3702 (the cloud and its rain), 3703 (far hills),
 * 3704 (ground), 3705 (the wood).
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 222

/** The far skyline: low hills, rising a little to the left. */
const skyline = (x: number) =>
  HORIZON - 14 - 10 * Math.sin(x / 61 + 0.6) - 5 * Math.sin(x / 23) - Math.max(0, 300 - x) * 0.05

const disc = (cx: number, cy: number, rx: number, ry = rx) =>
  `M${n(cx - rx)} ${n(cy)}a${n(rx)} ${n(ry)} 0 1 0 ${n(rx * 2)} 0a${n(rx)} ${n(ry)} 0 1 0 ${n(-rx * 2)} 0Z`

type Marks = {
  sky: string
  cloud: string
  cloudLit: string
  rain: string
  hills: string
  hillCuts: string
  ground: string
  tufts: string
  logs: string
  logEnds: string
  logRings: string
  bark: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky: heavier cuts on the left under the cloud, clearing to the right.
  const sky = gougeField(
    rng(3701),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 4 },
    (x, y) => clamp(0.06 + (1 - y / HORIZON) * 0.26 + Math.max(0, 1 - x / 520) * 0.3),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.2 },
  )

  // "Yond same black cloud, yond huge one": a swollen mass of rounds, its
  // underside ragged, lit along its upper edge from the clearing sky.
  const c = rng(3702)
  let cloud = disc(200, 74, 196, 46)
  const lobes: [number, number, number][] = [
    [40, 74, 46],
    [96, 44, 52],
    [168, 28, 58],
    [246, 34, 52],
    [318, 50, 46],
    [380, 74, 34],
    [130, 92, 38],
    [272, 96, 34],
  ]
  let cloudLit = ''
  for (const [x, y, r] of lobes) {
    cloud += disc(x, y, r, r * 0.86)
    // the light on the top of each round, cut in short arcs of gouges
    for (let k = 0; k < 4; k++) {
      const a0 = -Math.PI * between(c, 0.62, 0.8)
      const a1 = a0 + between(c, 0.35, 0.6)
      const rr = r * (0.8 - k * 0.13)
      cloudLit += gouge(
        x + Math.cos(a0) * rr,
        y + Math.sin(a0) * rr * 0.86,
        x + Math.cos(a1) * rr,
        y + Math.sin(a1) * rr * 0.86,
        1.6 - k * 0.3,
        -0.8,
      )
    }
  }
  // Its rain, falling far off on the left: "cannot choose but fall by pailfuls".
  let rain = ''
  for (let i = 0; i < 46; i++) {
    const x = between(c, 0, 250)
    const y = between(c, 108, 128)
    const len = between(c, 30, 70)
    rain += gouge(x, y, x - len * 0.22, Math.min(y + len, skyline(x - len * 0.22)), 0.5)
  }

  // The far hills, an ink band along the skyline, cut lighter on their tops.
  let hills = `M-10 ${HORIZON + 6}`
  for (let x = -10; x <= W + 10; x += 6) hills += `L${n(x)} ${n(skyline(x))}`
  hills += `L${W + 10} ${HORIZON + 6}Z`
  const h = rng(3703)
  let hillCuts = ''
  for (let i = 0; i < 220; i++) {
    const x = between(h, 0, W)
    const top = skyline(x)
    const y = between(h, top + 2, HORIZON + 4)
    const light = clamp(0.8 - (y - top) / 26 + x / W / 3)
    if (h() > light) continue
    hillCuts += gouge(x, y, x + between(h, 4, 12), y + between(h, -0.6, 0.6), 0.5 + light)
  }

  // The open ground: "neither bush nor shrub", only grass.
  const g = rng(3704)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: HORIZON + 4, y1: H },
    (x, y) => clamp(((y - HORIZON) / (H - HORIZON)) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 70; i++) {
    const x = between(g, 0, W)
    const y = between(g, HORIZON + 12, H - 2)
    const hh = 3 + clamp((y - HORIZON) / 110) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-hh)}M${n(x)} ${n(y)}l0 ${n(-hh * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-hh)}`
  }

  // The burden of wood where he let it fall: sticks spilled from their cord.
  const w = rng(3705)
  const sticks: [number, number, number, number, number][] = [
    [70, 318, 178, 304, 7],
    [76, 326, 170, 322, 7.4],
    [92, 310, 186, 316, 6.4],
    [60, 306, 150, 296, 6],
    [120, 328, 214, 326, 6.8],
  ]
  let logs = ''
  let logEnds = ''
  let logRings = ''
  let bark = ''
  for (const [x1, y1, x2, y2, r] of sticks) {
    const L = Math.hypot(x2 - x1, y2 - y1)
    const ux = (x2 - x1) / L
    const uy = (y2 - y1) / L
    const vx = -uy * r
    const vy = ux * r
    logs += `M${n(x1 + vx)} ${n(y1 + vy)}L${n(x2 + vx)} ${n(y2 + vy)}L${n(x2 - vx)} ${n(y2 - vy)}L${n(x1 - vx)} ${n(y1 - vy)}Z`
    logEnds += disc(x2, y2, r * 0.62, r)
    logRings += disc(x2, y2, r * 0.28, r * 0.46)
    for (let k = 0; k < 4; k++) {
      const t = between(w, 0.1, 0.8)
      const off = between(w, -0.5, 0.5)
      const px = x1 + (x2 - x1) * t + vx * off
      const py = y1 + (y2 - y1) * t + vy * off
      bark += gouge(px, py, px + ux * between(w, 10, 22), py + uy * between(w, 10, 22), 0.7)
    }
  }
  cached = {
    sky,
    cloud,
    cloudLit,
    rain,
    hills,
    hillCuts,
    ground,
    tufts,
    logs,
    logEnds,
    logRings,
    bark,
  }
  return cached
}

/** Caliban's mouth open in song, cut in paper, in the frame of the kit's man's head. */
const SINGING = 'M17.4 8.4L12.4 9.4L16.8 11.8Z'

const TRINCULO: P = [236, GROUND]
const STEPHANO: P = [424, GROUND]
const CALIBAN: P = [622, GROUND]

function CalibanFindsANewMaster({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 210], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the huge black cloud, and its rain falling far off */}
        <g clipPath={`url(#${skyClip})`}>
          <path d={m.rain} fill={INK} />
        </g>
        <g className="lc-drift" style={timing({ dur: 3.4 })}>
          <path d={m.cloud} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={m.cloud} fill={INK} />
          <path d={m.cloudLit} fill={PAPER} />
        </g>

        {/* the far hills, and the open ground: no bush, no shrub */}
        <path d={m.hills} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.hillCuts} fill={PAPER} />
        <path
          d={`M-10 ${H + 10}L-10 ${HORIZON + 2}H${W + 10}V${H + 10}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />

        {/* the burden of wood, let fall: "I'll bear him no more sticks" */}
        <g>
          <path d={m.logs} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={m.logs} fill={INK} />
          <path d={m.bark} fill={PAPER} />
          <path d={m.logEnds} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path d={m.logRings} fill="none" stroke={INK} strokeWidth={0.9} />
          <path
            d="M110 300C116 312 118 322 114 330M150 296C156 308 158 318 156 328"
            fill="none"
            stroke={PAPER}
            strokeWidth={1.6}
            strokeLinecap="round"
          />
        </g>

        {/* Trinculo, last, looking up at the cloud, a hand out for the rain */}
        <Person
          at={TRINCULO}
          scale={1.16}
          pose={{
            look: 'trinculo',
            head: { rot: -18 },
            legs: {
              far: [
                [-3, -70],
                [-9, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [10, -37],
                [14, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-14, -108],
                [-20, -88],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -106],
                [34, -108],
              ],
              hand: 'open',
              deg: -18,
              thumb: -1,
            },
          }}
        />

        {/* Stephano, his hat tipped back, pointing him on: "lead the way" */}
        <Person
          at={STEPHANO}
          scale={1.16}
          pose={{
            look: 'stephano',
            head: { rot: 2 },
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-16, -3],
              ],
              near: [
                [3, -70],
                [11, -37],
                [17, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-16, -108],
                [-8, -88],
              ],
              deg: 40,
            },
            near: {
              pts: [
                [5, -128],
                [22, -118],
                [44, -122],
              ],
              hand: 'point',
              deg: -6,
            },
          }}
        />

        {/* Caliban, leading, singing, his new master's bottle at his side */}
        <Person
          at={CALIBAN}
          scale={1.2}
          pose={{
            look: 'caliban',
            head: { rot: -8 },
            legs: {
              far: [
                [-5, -44],
                [-17, -3],
              ],
              near: [
                [5, -44],
                [19, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-28, -140],
                [-33, -170],
              ],
              hand: 'open',
              deg: -98,
              thumb: 1,
            },
            near: {
              pts: [
                [5, -128],
                [12, -104],
                [16, -82],
              ],
              hand: 'grip',
              deg: 82,
            },
          }}
        >
          <BarkBottle at={[17.4, -73]} rot={-4} scale={0.9} red />
          <path d={SINGING} transform="translate(3 -160) rotate(-8)" fill={PAPER} />
        </Person>
      </g>
    </>
  )
}

export const calibanFindsANewMaster: LinocutArt = {
  width: W,
  height: H,
  Draw: CalibanFindsANewMaster,
}

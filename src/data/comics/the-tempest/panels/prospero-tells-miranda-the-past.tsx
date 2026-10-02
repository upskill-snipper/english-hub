import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { MantleLaid, Person, seatedFrame, type P } from './people'
import { Cell, LimeTree } from './the-cell'

/**
 * Act 1, Scene 2: "Prospero tells Miranda the past", the second moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "The Island. Before the cell of Prospero." So the cell stands on the left
 *   beside its lime (./the-cell.tsx), and the two are on the open ground
 *   before it, above the sea where Miranda watched the ship go down.
 * - "If by your art, my dearest father, you have Put the wild waters in this
 *   roar, allay them." "Be collected: No more amazement ... There's no harm
 *   done." The storm is passing: its last black clouds and their rain draw
 *   off over the sea on the right, and the sky clears from the left, where
 *   the light breaks through. No ship is drawn: Ariel has hidden it "Safely
 *   in harbour".
 * - "Lend thy hand, And pluck my magic garment from me ... So: [Lays down
 *   his mantle.] Lie there my art." His mantle lies thrown over a stone behind
 *   him, its border cut in paper, as the kit cuts it (./people.tsx).
 * - "Sit down; For thou must now know farther." "Sit still, and hear the
 *   last of our sea-sorrow." Miranda sits on a rock and looks up at him; he
 *   stands over her, bending to her, his hand held out open: "I have done
 *   nothing but in care of thee, Of thee, my dear one, thee, my daughter".
 * - "Wipe thou thine eyes; have comfort", and "it is a hint That wrings mine
 *   eyes to 't". She has wept: a tear is cut in paper on her cheek. Her face
 *   carries no red: the kit found a flush on a face this small read as a red
 *   eye. The spot colour is the fire Caliban "does make" for them, in the
 *   cell's doorway, the one warm thing on a grey shore.
 *
 * The scene is told, not shown: the boat they were cast adrift in, with
 * Miranda in it "not Out three years old", is left to the words, because a
 * small child at sea in a rotten boat is a child in danger. Seeds: 3201
 * (sky), 3202 (storm), 3203 (sea), 3204 (ground), 3205 (rocks).
 *
 * REVIEWED 2 October 2026 against the scene and the play's rules: right
 * people, right place and hour, nothing of the voyage shown. Prospero now
 * leans a little towards her, as the alt text says he bends.
 */

const W = 860
const H = 340
/** Where the two of them are, on the ground before the cell. */
const GROUND = 330
const HORIZON = 196

/** The far edge of the headland, where it falls to the sea on the right. */
const edge = (x: number) => 236 + Math.max(0, (x - 560) / 7) ** 1.35 + 3 * Math.sin(x / 37)

type Marks = {
  sky: string
  storm: string
  stormLight: string
  rain: string
  sea: string
  crests: string
  land: string
  ground: string
  tufts: string
  rocks: string
  rockCuts: string
  foam: string
}

/** The underside of the storm cloud at x. */
const cloudFoot = (x: number) =>
  52 + (x - 600) * 0.2 + 9 * Math.sin(x / 23) + 5 * Math.sin(x / 9 + 1)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The clearing sky: paper, cut with ink that thickens towards the storm.
  const sky = gougeField(
    rng(3201),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 2 },
    (x, y) =>
      x > 630 && y > cloudFoot(x) - 4
        ? 0
        : clamp(0.1 + (1 - y / HORIZON) * 0.3 + (x / W) ** 2 * 0.5),
    { spacing: 6, len: [30, 120], gap: [10, 40], max: 2.4 },
  )

  // The storm drawing off: a black bank on the right, its rolling underside
  // lit in paper, rain trailing from it to the sea.
  const s = rng(3202)
  let storm = `M${W + 10} -10L600 -10L600 ${n(cloudFoot(600) - 30)}`
  for (let x = 600; x <= W + 10; x += 6) storm += `L${n(x)} ${n(cloudFoot(x))}`
  storm += 'Z'
  let stormLight = ''
  for (let x = 612; x < W; x += between(s, 14, 24)) {
    const y = cloudFoot(x)
    stormLight += gouge(x - 9, y - 4, x + 9, y - 5, 1.4, -1.6)
    if (s() < 0.6) stormLight += gouge(x - 4, y - 16, x + 12, y - 18, 0.9, -1.2)
    if (s() < 0.4) stormLight += gouge(x - 2, y - 30, x + 10, y - 31, 0.8, -1)
  }
  // Rain in long slanting lines from the cloud to the sea, broken here and
  // there, as a print cuts a shower.
  let rain = ''
  for (let x = 650; x < W + 70; x += between(s, 6, 9)) {
    let y = cloudFoot(Math.min(x, W)) + between(s, 0, 6)
    while (y < HORIZON - 1) {
      const len = Math.min(between(s, 30, 70), HORIZON - 1 - y)
      rain += `M${n(x - (y - 40) * 0.3)} ${n(y)}l${n(-len * 0.3)} ${n(len)}`
      y += len + between(s, 3, 8)
    }
  }

  // The sea: pale, its swell cut in ink, rougher and darker under the storm.
  const q = rng(3203)
  // Cut only where the sea shows: above the headland, and under the rocks on
  // the right where the land falls away.
  const seaLight = (x: number, y: number) =>
    clamp(0.24 + (x / W) * 0.42 - ((y - HORIZON) / 140) * 0.12)
  const seaOpts = {
    spacing: 5,
    len: [16, 54] as [number, number],
    gap: [6, 20] as [number, number],
    max: 2.2,
  }
  const sea =
    gougeField(q, { x0: 0, x1: 640, y0: HORIZON + 3, y1: 252 }, seaLight, seaOpts) +
    gougeField(q, { x0: 640, x1: W, y0: HORIZON + 3, y1: H }, seaLight, seaOpts)
  let crests = ''
  for (let i = 0; i < 46; i++) {
    const x = between(q, 360, W)
    const y = between(q, HORIZON + 6, 300)
    const w = 6 + ((y - HORIZON) / 100) * 9
    crests += `M${n(x)} ${n(y)}q${n(w / 2)} ${n(-w / 2.4)} ${n(w)} 0`
  }

  // The headland before the cell: pale ground, its grass and stones cut in
  // ink, heavier towards the front.
  let land = `M-10 ${H + 10}L-10 ${n(edge(0))}`
  for (let x = 0; x <= W + 10; x += 8) land += `L${x} ${n(edge(x))}`
  land += `L${W + 10} ${H + 10}Z`
  const g = rng(3204)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 240, y1: H },
    (x, y) => clamp(((y - 236) / 104) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 100; i++) {
    const x = between(g, 0, W)
    const top = edge(x) + 6
    if (top > H - 4) continue
    const y = between(g, top, H)
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }

  // Rocks where the headland meets the sea on the right, and the foam on them.
  const k = rng(3205)
  const rocks =
    'M640 262C652 250 668 246 680 252C692 240 712 240 724 250C740 242 760 246 770 258C786 250 808 254 820 266C836 258 852 260 870 268L870 300L640 300Z'
  let rockCuts = ''
  for (let i = 0; i < 40; i++) {
    const x = between(k, 646, 864)
    const y = between(k, 250, 292)
    const light = clamp(1 - (y - 246) / 42)
    if (k() > light) continue
    rockCuts += gouge(x, y, x + between(k, 8, 16), y + between(k, 1, 4), 0.6 + light * 1.4)
  }
  let foam = ''
  for (let x = 630; x < W; x += between(k, 6, 12))
    foam += gouge(
      x,
      246 + (x - 630) * 0.05 + between(k, -3, 3),
      x + between(k, 8, 18),
      245 + (x - 630) * 0.05,
      1.5,
    )

  cached = { sky, storm, stormLight, rain, sea, crests, land, ground, tufts, rocks, rockCuts, foam }
  return cached
}

const PROSPERO: P = [352, GROUND]
const MIRANDA: P = [548, GROUND]
/** Her rock is this high, in her own frame. */
const SEAT = 48
const SCALE = 1.2
/**
 * Prospero leans towards her this many degrees, about his feet. (Upright,
 * with only his head bowed, he stood over her like a sentry, not a father
 * telling his daughter who she is.)
 */
const LEAN = 4
/** Her rock, under her: its top at the height of her seat. */
const SEAT_ROCK =
  'M500 331C496 312 502 290 516 282C530 276 554 276 570 282C584 290 590 310 588 331Z'
const SEAT_CUTS =
  gouge(510, 290, 538, 284, 1.5, -0.8) +
  gouge(544, 284, 574, 290, 1.3, -0.6) +
  gouge(518, 304, 542, 300, 1)

function ProsperoTellsMirandaThePast({ uid }: ArtProps) {
  const m = marks()
  const sf = seatedFrame(SEAT)
  const seaClip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={H - HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
        {/* the sky clearing from the left, the storm drawing off to the right */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.storm} fill={INK} />
        <path d={m.stormLight} fill={PAPER} />
        <path d={m.rain} stroke={INK} strokeWidth={1} strokeLinecap="round" />

        {/* the sea, still running high */}
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
          <path d={m.crests} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
        </g>
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />

        {/* the headland, and the rocks where it meets the sea */}
        <path d={m.foam} fill={PAPER} />
        <path d={m.rocks} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.rockCuts} fill={PAPER} />
        <path d={m.land} fill={PAPER} />
        <path d={m.land} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />

        {/* the cell under its lime */}
        <LimeTree at={[58, 298]} scale={0.78} />
        <Cell at={[150, 296]} scale={0.84} glow />

        {/* "Lie there my art": the mantle, thrown over a stone bench */}
        <MantleLaid at={[256, GROUND - 2]} scale={0.9} />

        {/* Prospero, leaning towards her, his hand held out open */}
        <g transform={`rotate(${LEAN} ${PROSPERO[0]} ${PROSPERO[1]})`}>
          <Person
            at={PROSPERO}
            scale={SCALE}
            pose={{
              look: 'prospero',
              head: { rot: 12 },
              far: {
                pts: [
                  [-4, -130],
                  [-6, -104],
                  [-2, -78],
                ],
              },
              near: {
                pts: [
                  [5, -128],
                  [20, -108],
                  [40, -100],
                ],
                hand: 'open',
                deg: 8,
                thumb: -1,
              },
            }}
          />
        </g>

        {/* Miranda, sitting on her rock, looking up at him, a tear on her cheek */}
        <path d={SEAT_ROCK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={SEAT_CUTS} fill={PAPER} />
        <Person
          at={MIRANDA}
          scale={SCALE}
          flip
          pose={{
            look: 'miranda',
            seated: { seat: SEAT },
            head: { rot: -14 },
            far: {
              pts: [
                [-3, sf.shoulder[1]],
                [2, sf.shoulder[1] + 22],
                [20, sf.waist[1] - 2],
              ],
              deg: 8,
            },
            near: {
              pts: [
                [3, sf.shoulder[1]],
                [10, sf.shoulder[1] + 22],
                [28, sf.waist[1] - 4],
              ],
              deg: 6,
            },
          }}
        >
          <g transform={`translate(${sf.head[0]} ${sf.head[1]}) rotate(-14)`}>
            <path d="M10.2 -0.8C8.6 2.2 8.8 5 10.6 6C12.4 5 12.4 2.2 10.2 -0.8Z" fill={PAPER} />
          </g>
        </Person>
      </g>
    </>
  )
}

export const prosperoTellsMirandaThePast: LinocutArt = {
  width: W,
  height: H,
  Draw: ProsperoTellsMirandaThePast,
}

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, STAFF_HELD, type P } from './people'
import { Cell, LimeTree } from './the-cell'

/**
 * Act 3, Scene 1: "The log-bearer and the lovers' vows", the eighth moment in
 * the guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Before Prospero's cell." "Enter Ferdinand bearing a log." "I must remove
 *   Some thousands of these logs, and pile them up". So the cell is on the
 *   left (./the-cell.tsx), the pile he is building rises against its side
 *   wall, and Ferdinand, the kit's young man in doublet, ruff and short
 *   cloak, carries a log on his far shoulder, steadied with his far hand:
 *   "this patient log-man".
 * - "I am your wife if you will marry me"; "Ay, with a heart as willing As
 *   bondage e'er of freedom: here's my hand. / And mine, with my heart in
 *   't". Miranda, before him, lays her hand in his open hand, her other hand
 *   at her breast. The two hands are drawn apart, each with its own edge, so
 *   they read as hands joined and not as one fist. "I am a fool To weep at
 *   what I am glad of": a tear is cut in paper on her cheek, as in "Prospero
 *   tells Miranda the past".
 * - "Enter Miranda and Prospero behind." "Fair encounter Of two most rare
 *   affections! Heavens rain grace On that which breeds between 'em!"
 *   Prospero stands further back, behind the pile of logs by his cell, so
 *   that he is seen from the waist up, smaller for the distance and unseen
 *   by them; his staff is held as the kit holds it (STAFF_HELD), and he
 *   opens his other hand towards them. (Standing in the open at their
 *   height, he read as a third person in the conversation.)
 * - "The sun will set, before I shall discharge What I must strive to do."
 *   It is afternoon, and the sun, the spot colour, stands over the sea on
 *   the right, past its height: "O heaven, O earth, bear witness to this
 *   sound".
 *
 * Seeds: 3801 (sky), 3802 (the sun's light), 3803 (sea), 3804 (ground),
 * 3805 (the log on his shoulder), 3806 (the pile).
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 196
/** The ground before the cell, where it meets the sea on the right. */
const edge = (x: number) => 244 + 4 * Math.sin(x / 47) + Math.max(0, (x - 640) / 14) ** 1.25

const SUN: P = [760, 116]

type Marks = {
  sky: string
  sunLight: string
  sea: string
  land: string
  ground: string
  tufts: string
  log: { body: string; bark: string; ring: string; rings: string }
  pile: { ends: string; rings: string; bark: string }
}

/**
 * The log on Ferdinand's far shoulder, in his frame (facing right, before the
 * flip): it rests behind his head, its sawn end well behind him, and his far
 * hand, reached up behind his head, holds it there (FAR_ARM).
 *
 * REVIEWED 2 October 2026. Nothing held it, and the stub of its branch, meant
 * for the upper side, was cut on the lower side by a sign turned the wrong
 * way: at phone size a dark tube level with his head, with a grip below it
 * and a ring at its end, read as a bazooka or a telescope. The stub is on top
 * now and his hand is closed round the log. Its front end stays hidden behind
 * his face: let out in front of it, black on his black profile, it read as a
 * beard on a beardless young man.
 */
const LOG_FROM: P = [10, -149]
const LOG_TO: P = [-66, -160]
const LOG_R = 10.5
/** His far arm, reached up behind his head, the hand closed round the log from below. */
const FAR_ARM: P[] = [
  [-5, -130],
  [-22, -119],
  [-31, -142],
]
/** The foot of the middle of the pile of logs against the cell's side wall, in the panel. */
const PILE: P = [268, 298]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(3801),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 2 },
    (x, y) =>
      clamp(
        0.1 +
          (1 - y / HORIZON) * 0.3 -
          Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 130) * 0.36,
      ),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.2 },
  )
  const sunLight = rays(rng(3802), SUN[0], SUN[1], { from: 28, to: 88, every: 9, width: 2.2 })
  const sea = gougeField(
    rng(3803),
    { x0: 280, x1: W, y0: HORIZON + 3, y1: 290 },
    (x, y) => clamp(0.32 - ((y - HORIZON) / 90) * 0.1),
    { spacing: 5, len: [30, 90], gap: [8, 26], max: 1.8 },
  )
  let land = `M-10 ${H + 10}L-10 ${n(edge(0))}`
  for (let x = 0; x <= W + 10; x += 8) land += `L${x} ${n(edge(x))}`
  land += `L${W + 10} ${H + 10}Z`
  const g = rng(3804)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 244, y1: H },
    (x, y) => (y < edge(x) ? 0 : clamp(((y - 238) / 102) ** 1.5 * 0.5 + 0.06)),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 80; i++) {
    const x = between(g, 0, W)
    const y = between(g, edge(x) + 5, H - 2)
    if (y > H - 2) continue
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  // The log: a rough length of wood, its outline uneven, a stub where a
  // branch was cut, its bark cut in paper, and at its sawn end the rings and
  // the cracks of the grain. (A smooth tube with one ring at the end read as
  // a telescope.)
  const b = rng(3805)
  const [x1, y1] = LOG_FROM
  const [x2, y2] = LOG_TO
  const L = Math.hypot(x2 - x1, y2 - y1)
  const ux = (x2 - x1) / L
  const uy = (y2 - y1) / L
  const vx = -uy
  const vy = ux
  const top: string[] = []
  const bot: string[] = []
  for (let k = 0; k <= 10; k++) {
    const t = k / 10
    const cx = x1 + (x2 - x1) * t
    const cy = y1 + (y2 - y1) * t
    const r = LOG_R * (1 + between(b, -0.08, 0.08))
    const r2 = LOG_R * (1 + between(b, -0.08, 0.08))
    top.push(`${n(cx + vx * r)} ${n(cy + vy * r)}`)
    bot.push(`${n(cx - vx * r2)} ${n(cy - vy * r2)}`)
  }
  // the stub of a branch, on the upper side (+v is up: it is the side `top`
  // is built on), a little behind the middle
  const sx = x1 + (x2 - x1) * 0.62
  const sy = y1 + (y2 - y1) * 0.62
  const at = (o: number, a2: number) => `${n(sx + vx * o + ux * a2)} ${n(sy + vy * o + uy * a2)}`
  const stub = `M${at(LOG_R, 3)}L${at(LOG_R + 7, 6)}L${at(LOG_R + 6, 11)}L${at(LOG_R, 9)}Z`
  const body = `M${top.join('L')}L${[...bot].reverse().join('L')}Z` + stub
  let bark = ''
  for (let k = 0; k < 10; k++) {
    const t = between(b, 0.08, 0.84)
    const off = between(b, -0.6, 0.6) * LOG_R
    const px = x1 + (x2 - x1) * t + vx * off
    const py = y1 + (y2 - y1) * t + vy * off
    const len = between(b, 7, 16)
    bark += gouge(px, py, px + ux * len, py + uy * len, 0.75)
  }
  const ell = (rx: number, ry: number) =>
    `M${n(x2 - rx)} ${n(y2)}a${n(rx)} ${n(ry)} 0 1 0 ${n(rx * 2)} 0a${n(rx)} ${n(ry)} 0 1 0 ${n(-rx * 2)} 0Z`
  const ring = ell(LOG_R * 0.6, LOG_R)
  const rings =
    ell(LOG_R * 0.36, LOG_R * 0.62) +
    ell(LOG_R * 0.14, LOG_R * 0.26) +
    `M${n(x2)} ${n(y2 - LOG_R * 0.3)}L${n(x2 + 1.2)} ${n(y2 - LOG_R * 0.92)}` +
    `M${n(x2 - 0.6)} ${n(y2 + LOG_R * 0.3)}L${n(x2 - 2.6)} ${n(y2 + LOG_R * 0.9)}`

  // The pile he is building against the side wall of the cell: log ends
  // stacked in courses, seen end on.
  const w = rng(3806)
  let ends = ''
  let endRings = ''
  let endBark = ''
  const courses = [7, 6, 5, 4, 3]
  courses.forEach((count, row) => {
    for (let i = 0; i < count; i++) {
      const cx = PILE[0] + (i - (count - 1) / 2) * 14.6 + between(w, -1, 1)
      const cy = PILE[1] - 7 - row * 12.4 + between(w, -0.6, 0.6)
      const rad = between(w, 6.6, 7.6)
      ends += `M${n(cx - rad)} ${n(cy)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
      const r3 = rad * 0.48
      endRings += `M${n(cx - r3)} ${n(cy)}a${n(r3)} ${n(r3)} 0 1 0 ${n(r3 * 2)} 0a${n(r3)} ${n(r3)} 0 1 0 ${n(-r3 * 2)} 0Z`
      endBark += `M${n(cx)} ${n(cy - 1.4)}l${n(between(w, 1, 2.6))} ${n(between(w, -2.4, 2.4))}`
    }
  })
  cached = {
    sky,
    sunLight,
    sea,
    land,
    ground,
    tufts,
    log: { body, bark, ring, rings },
    pile: { ends, rings: endRings, bark: endBark },
  }
  return cached
}

const PROSPERO: P = [282, 290]
const MIRANDA: P = [496, GROUND]
const FERDINAND: P = [586, GROUND]
const SCALE = 1.18

function TheLogBearerAndTheLoversVows({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={110} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 210], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the afternoon sun over the sea: "O heaven, O earth, bear witness" */}
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.3, dur: 1.4 })}
          d={m.sunLight}
          fill={INK}
        />
        <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={RED} stroke={INK} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M280 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />

        {/* the ground before the cell */}
        <path d={m.land} fill={PAPER} />
        <path d={m.land} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <LimeTree at={[56, 296]} scale={0.84} />

        {/* Prospero, behind, unseen, over the pile of logs by his cell */}
        <Person
          at={PROSPERO}
          scale={0.84}
          pose={{
            look: 'prospero',
            head: { rot: 6 },
            far: {
              pts: [
                [-4, -130],
                [18, -122],
                [48, -126],
              ],
              hand: 'open',
              deg: -10,
              thumb: -1,
            },
            ...STAFF_HELD,
          }}
        />
        <Cell at={[140, 296]} scale={0.8} />
        <g>
          <path d={m.pile.ends} fill={PAPER} stroke={INK} strokeWidth={1.7} />
          <path d={m.pile.rings} fill="none" stroke={INK} strokeWidth={0.9} />
          <path d={m.pile.bark} stroke={INK} strokeWidth={0.8} />
        </g>

        {/* Ferdinand, the log on his shoulder, holding out his hand: "here's my hand" */}
        <g
          transform={`translate(${FERDINAND[0]} ${FERDINAND[1]}) scale(${-SCALE * 0.98} ${SCALE * 0.98})`}
        >
          <path d={m.log.body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve * 1.4} />
          <path d={m.log.body} fill={INK} />
          <path d={m.log.bark} fill={PAPER} />
          <path d={m.log.ring} fill={PAPER} stroke={INK} strokeWidth={1.2} />
          <path d={m.log.rings} fill="none" stroke={INK} strokeWidth={0.9} />
        </g>
        <Person
          at={FERDINAND}
          scale={SCALE}
          flip
          pose={{
            look: 'ferdinand',
            head: { rot: 4 },
            sword: true,
            cloak: 6,
            legs: {
              far: [
                [-3, -70],
                [-7, -36],
                [-10, -3],
              ],
              near: [
                [3, -70],
                [9, -37],
                [12, -3],
              ],
            },
            far: {
              pts: FAR_ARM,
              hand: 'grip',
              deg: -100,
            },
            near: {
              pts: [
                [5, -128],
                [18, -108],
                [36, -104],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
          }}
        />

        {/* Miranda, her hand laid in his, her other hand at her breast */}
        <Person
          at={MIRANDA}
          scale={SCALE}
          pose={{
            look: 'miranda',
            head: { rot: -6 },
            far: {
              pts: [
                [-3, -124],
                [5, -104],
                [12, -112],
              ],
              hand: 'mitt',
              deg: -64,
            },
            near: {
              pts: [
                [3, -124],
                [14, -106],
                [31, -118],
              ],
              hand: 'mitt',
              deg: -4,
            },
          }}
        >
          {/* "I am a fool To weep at what I am glad of" */}
          <g transform="translate(3 -154) rotate(-6)">
            <path d="M10.2 -0.8C8.6 2.2 8.8 5 10.6 6C12.4 5 12.4 2.2 10.2 -0.8Z" fill={PAPER} />
          </g>
        </Person>
      </g>
    </>
  )
}

export const theLogBearerAndTheLoversVows: LinocutArt = {
  width: W,
  height: H,
  Draw: TheLogBearerAndTheLoversVows,
}

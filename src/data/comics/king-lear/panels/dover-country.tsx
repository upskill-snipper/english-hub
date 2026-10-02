import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Rng } from '@/components/comics/linocut/carve'

/**
 * "The country near Dover" (4.6): the open down where Edgar brings his blind
 * father to a cliff that is not there, and where the mad King finds them.
 * Shared by the two panels of that scene, "Dover cliff" and "Reason in
 * madness", so a student sees the same field in both.
 *
 * WHAT THE PLAY SAYS OF IT (the held edition, src/data/full-texts/
 * king-lear.ts):
 * - "When shall I come to the top of that same hill?" / "You do climb up it
 *   now." / "Methinks the ground is even." The ground IS even: Edgar only
 *   tells his father it climbs. So the down is drawn level, cut in rows that
 *   close up towards the far edge, the way a flat field looks, with nothing
 *   in it that rises or falls.
 * - "Hark, do you hear the sea?" / "No, truly." The sea is too far off to be
 *   heard, so it is only a dark band on the horizon, beyond the far edge of
 *   the down. (A far headland of white cliffs was tried there, "this chalky
 *   bourn"; at the size the distance allows it read as a fence, and it went.)
 * - "Look up a-height, the shrill-gorg'd lark so far / Cannot be seen or
 *   heard." It is day: the sky is pale, engraved in ink only near its top.
 *
 * Cordelia has "the high-grown field" searched for her father (4.4), so the
 * country is farmed: a hedge and a copse on the far ridge. Nothing is taken
 * from a film or stage production.
 */

export const W = 860
export const H = 340
/** The sea's horizon, at eye level. */
export const SEA = 178
/** The far edge of the down, on the right, where the land ends and the sea shows. */
export const EDGE = 206

/**
 * The far line of the down: a low ridge inland on the left, falling to the
 * coast and running level towards the sea on the right.
 */
export function farLine(x: number) {
  const fall = clamp((x - 430) / 230)
  const ease = fall * fall * (3 - 2 * fall)
  return 168 + 8 * clamp(x / 430) + (EDGE - 176) * ease + 1.6 * Math.sin(x / 37) * (1 - ease)
}

export type DoverMarks = {
  sky: string
  sea: string
  ground: string[]
  tufts: string[]
  copse: string
}

/** The stroke widths of the ground's four weights of mark, lightest first. */
export const GROUND_W = [0.9, 1.6, 2.4, 3.2]

/**
 * The level down, engraved: paper, with short strokes of ink in rows that
 * close up towards the far edge, the way a flat field recedes, and tufts of
 * grass among them, larger and heavier nearer the reader. The marks are
 * STROKED and grouped by weight (GROUND_W), as ./open-air.ts strokes its rows:
 * the same print for a tenth of the weight of gouge shapes. Short dashes and
 * upright blades, never long bands: in a first draft long rows across the
 * near ground read as the ripples of water round the two men's feet.
 * `clear(x, y)` keeps the tufts off the ground the figures stand on; `far(x)`
 * is the far edge of the ground, the down's far line unless a panel set
 * elsewhere gives its own ("The battle lost" cuts its field with these).
 */
export function groundMarks(
  r: Rng,
  clear: (x: number, y: number) => boolean,
  far: (x: number) => number = farLine,
) {
  const ground = GROUND_W.map(() => '')
  const rows = 30
  for (let k = 0; k < rows; k++) {
    const t = Math.pow((k + 0.5) / rows, 1.45)
    let x = between(r, -30, 0)
    while (x < W + 10) {
      const len = between(r, 8, 34) * (0.5 + t)
      const y = far(x + len / 2) + 2.4 + (H - far(x + len / 2)) * t
      if (r() < 0.5 + t * 0.3) {
        const w = Math.min(3, Math.floor(t * 4 * between(r, 0.75, 1.2)))
        ground[w] += `M${n(x)} ${n(y + between(r, -0.8, 0.8))}h${n(len)}`
      }
      x += len + between(r, 8, 30) * (1.3 - t * 0.6)
    }
  }
  // Tufts of grass, three to five blades each, leaning a little in the wind.
  const tufts = ['', '']
  for (let i = 0; i < 120; i++) {
    const t = 0.18 + Math.pow(r(), 0.65) * 0.8
    const x = between(r, 6, W - 6)
    const y = far(x) + (H - far(x)) * t
    if (clear(x, y)) continue
    const sz = 0.45 + t * 1.1
    const blades = 3 + Math.floor(r() * 3)
    let d = ''
    for (let k = 0; k < blades; k++) {
      const a = ((-90 - 6 + (k - (blades - 1) / 2) * 16 + between(r, -6, 6)) * Math.PI) / 180
      const len = between(r, 5, 10) * sz
      const bx = x + (k - (blades - 1) / 2) * 1.8 * sz
      d += `M${n(bx)} ${n(y)}l${n(Math.cos(a) * len)} ${n(Math.sin(a) * len)}`
    }
    tufts[t < 0.6 ? 0 : 1] += d
  }
  return { ground, tufts }
}

const cache = new Map<number, DoverMarks>()

/**
 * The marks of the country, for one panel's seed. `light(x, y)` is the sky's
 * light, 0 to 1, so a panel can brighten the sky behind its figures;
 * `clear(x, y)` keeps the tufts of grass off the ground the figures stand on.
 * Cached: a drawing never changes.
 */
export function doverMarks(
  seed: number,
  light: (x: number, y: number) => number,
  clear: (x: number, y: number) => boolean,
): DoverMarks {
  const hit = cache.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // A pale day sky, as the British camp's: paper, engraved with ink lines
  // that thicken towards the top of the block and die away well above the
  // horizon. `light` keeps them off the sky behind the figures.
  let sky = ''
  for (let y = 4; y < SEA - 20; y += 6.2) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 30, 120)
      const D = clamp(1 - y / 130) * (1 - light(x + len / 2, y))
      if (r() < D * 1.2)
        sky += gouge(
          x,
          y + between(r, -0.5, 0.5),
          x + len,
          y + between(r, -0.5, 0.5),
          0.3 + D * 2.6,
        )
      x += len + between(r, 6, 26)
    }
  }
  // The sea: ink, with ripples cut in paper, finer towards the horizon.
  let sea = ''
  for (let y = SEA + 3.4; y < EDGE; y += 3.6) {
    const t = (y - SEA) / (EDGE - SEA)
    let x = 470 + between(r, -10, 10)
    while (x < W) {
      const len = between(r, 10, 30) * (0.6 + t)
      if (r() < 0.6) sea += gouge(x, y, x + len, y + between(r, -0.3, 0.3), 0.4 + t * 0.6)
      x += len + between(r, 6, 22)
    }
  }
  const { ground, tufts } = groundMarks(r, clear)
  // A copse and a hedge on the far ridge, for scale.
  let copse = ''
  const trees: [number, number][] = [
    [62, 7],
    [76, 9],
    [92, 8],
    [106, 6],
    [264, 5],
    [276, 6],
  ]
  for (const [x, rad] of trees) {
    const y = farLine(x) - rad * 0.8
    copse += `M${n(x - rad)} ${n(y)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
  }
  for (let x = 118; x < 254; x += 4.4) {
    const y = farLine(x)
    copse += gouge(x, y - 2.4, x + 5, y - 2.2 + between(r, -0.4, 0.4), 1.7)
  }
  const out = { sky, sea, ground, tufts, copse }
  cache.set(seed, out)
  return out
}

/**
 * The country, behind everything else: the sky, the far ridge with its copse,
 * the sea far off on the right, and the level down.
 */
export function DoverCountry({ m }: { m: DoverMarks }) {
  let line = `M-4 ${n(farLine(0))}`
  for (let x = 6; x <= W + 4; x += 6) line += `L${x} ${n(farLine(x))}`
  return (
    <g>
      {/* the sky, pale, engraved in ink towards its top */}
      <rect x={0} y={0} width={W} height={EDGE + 2} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the sea, far off: "Hark, do you hear the sea?" "No, truly." */}
      <path d={`M440 ${SEA}H${W}V${EDGE + 2}H440Z`} fill={INK} />
      <path d={`M440 ${SEA}H${W}`} stroke={PAPER} strokeWidth={1.4} />
      <path d={m.sea} fill={PAPER} />
      {/* the level down, from the far ridge to our feet */}
      <path d={`${line}V${H + 4}H-4Z`} fill={PAPER} />
      <path d={line} stroke={INK} strokeWidth={LINE.bold} fill="none" />
      <path d={m.copse} fill={INK} />
      {m.ground.map((d, i) => (
        <path key={i} d={d} stroke={INK} strokeWidth={GROUND_W[i]} strokeLinecap="round" />
      ))}
      <path d={m.tufts[0]} stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d={m.tufts[1]} stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
    </g>
  )
}

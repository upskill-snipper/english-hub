import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Rng } from '@/components/comics/linocut/carve'

/**
 * "The British Camp near Dover" (Act 5, Scene 3): the ground of the play's
 * last scene, cut for the panels of its last three moments, "The wheel comes
 * full circle", "Too late" and "Lear's death", so a student sees the same camp
 * in all three, and shared with "Birds in the cage", set in the same scene.
 * Other panels borrow its tents and its foot shadows: change a shape here and
 * preview every panel that imports it.
 *
 * WHAT THE PLAY SAYS OF IT (the held edition, src/data/full-texts/
 * king-lear.ts, Project Gutenberg #1532):
 * - "Enter in conquest with drum and colours, Edmund, Lear and Cordelia as
 *   prisoners". So the camp has its colours, the one thing in it printed in
 *   the spot colour: a banner on a tall staff (`Colours`), and a drum
 *   (`Drum`).
 * - "She is not well. Convey her to my tent." Albany has a tent, so the camp
 *   is a field of tents (`Pavilion`), the near ones round-walled with a
 *   peaked roof, the far ones small along the edge of the field.
 * - "near Dover": the sea is a band on the horizon behind the camp, as it is
 *   in the panels of "the country near Dover" (./dover-country.tsx), where a
 *   panel has room for it.
 * - "Quickly send, Be brief in it, to the castle; for my writ Is on the life
 *   of Lear and on Cordelia". The prisoners are held in a castle some way off
 *   (`FarCastle`), drawn small on a far hill: the distance the reprieve has to
 *   cover.
 *
 * NOT DRAWN: the two gloves thrown down as pledges before the duel ("There is
 * my pledge. [Throwing down a glove.]"). Cut pale on the ground of a field
 * where men fight, a glove with its fingers apart read in the first draft as
 * a hand lying on the grass, which a print for children must never suggest.
 *
 * The time of day is not given, so it is day: a pale sky engraved in ink only
 * near its top, as the Dover panels have it. The tents, the drum and the
 * colours are drawn plainly; the play describes none of them, and nothing is
 * taken from a film or stage production.
 */

export const W = 860
export const H = 340
/** The far edge of the camp ground. */
export const HORIZON = 198
/** The sea's horizon, a little above the edge of the field. */
export const SEA = 186

export type CampMarks = {
  sky: string
  sea: string
  ground: string
  tufts: string
}

/** The pale day sky: ink cuts that thicken towards the top of the block. */
function skyCuts(r: Rng, y1: number) {
  let d = ''
  for (let y = 4; y < y1 - 2; y += 6.4) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 30, 120)
      const D = clamp(0.78 - y / 150)
      if (r() < D * 1.15)
        d += gouge(x, y + between(r, -0.5, 0.5), x + len, y + between(r, -0.5, 0.5), 0.3 + D * 2)
      x += len + between(r, 6, 26)
    }
  }
  return d
}

/**
 * The level field of the camp, from the far edge at `hz` to the foot of the
 * block: rows of cuts closing up towards the far edge, so the ground reads as
 * flat, and tufts of trampled grass, larger nearer. `clear(x, y)` keeps the
 * tufts off the places the figures stand.
 */
function groundCuts(r: Rng, hz: number, clear: (x: number, y: number) => boolean) {
  let ground = ''
  let tufts = ''
  const rows = 22
  for (let k = 1; k <= rows; k++) {
    const t = Math.pow(k / rows, 1.7)
    let x = between(r, -40, 0)
    while (x < W + 20) {
      const len = between(r, 26, 90) * (0.5 + t)
      const y = hz + (H - hz + 6) * t
      if (r() < 0.5 + t * 0.35)
        ground += gouge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.35 + t * 1.4,
        )
      x += len + between(r, 10, 36) * (0.6 + t)
    }
  }
  for (let i = 0; i < 90; i++) {
    const t = Math.pow(r(), 0.75)
    const x = between(r, 0, W)
    const y = hz + 6 + (H - hz) * t
    if (clear(x, y)) continue
    const s = 0.35 + t * 1.05
    for (let k = -2; k <= 2; k++) {
      const a = ((-90 + k * 20 + between(r, -7, 7)) * Math.PI) / 180
      const len = between(r, 5, 9) * s
      tufts += gouge(
        x + k * 1.6 * s,
        y,
        x + k * 1.6 * s + Math.cos(a) * len,
        y + Math.sin(a) * len,
        0.35 + s * 0.45,
      )
    }
  }
  return { ground, tufts }
}

/** How far a low point of land runs out over the sea at each end of it. */
const COAST = 40

/**
 * The sea on the horizon, far off, from `hz - 12` down to the field's edge at
 * `hz`: the paper engraved with close ink ripples, so it reads as a grey band
 * of water and not as a wall behind the figures. Where it ends inside the
 * block, a low point of land slopes down to it (`coastLine`), and the ripples
 * stop at the shore.
 */
function seaCuts(r: Rng, x0: number, x1: number, hz: number) {
  const top = hz - (HORIZON - SEA)
  let d = ''
  for (let y = top + 2.2; y < hz - 1; y += 2.4) {
    const t = (y - top) / (hz - top)
    const from = x0 > 0 ? x0 + (1 - t) * COAST : x0
    const to = x1 < W ? x1 - (1 - t) * COAST : x1
    let x = from + between(r, 0, 6)
    while (x < to - 4) {
      const len = between(r, 10, 30) * (0.7 + t * 0.6)
      if (r() < 0.85)
        d += gouge(x, y, Math.min(x + len, to), y + between(r, -0.3, 0.3), 0.55 + t * 0.35)
      x += len + between(r, 3, 9)
    }
  }
  return d
}

/** The sea's horizon line, with the shore of a low point of land at each end inside the block. */
function coastLine(x0: number, x1: number, hz: number) {
  const top = hz - (HORIZON - SEA)
  const left =
    x0 > 0
      ? `M${x0} ${hz - 1}Q${x0 + COAST * 0.45} ${top + 1} ${x0 + COAST} ${top}`
      : `M${x0} ${top}`
  const right = x1 < W ? `H${x1 - COAST}Q${x1 - COAST * 0.45} ${top + 1} ${x1} ${hz - 1}` : `H${x1}`
  return left + right
}

const cache = new Map<number, CampMarks>()

/**
 * The marks of the camp's sky, sea and field for one panel's seed, with the sea
 * from `sea[0]` to `sea[1]` along the horizon (no sea if the second is not
 * past the first: [0, 0]). `horizon` moves the far edge
 * of the field, for a panel seen from lower down (people kneeling); pass the
 * same to CampGround. Cached: a drawing never changes.
 */
export function campMarks(
  seed: number,
  sea: [number, number],
  clear: (x: number, y: number) => boolean,
  horizon = HORIZON,
): CampMarks {
  const hit = cache.get(seed)
  if (hit) return hit
  const r = rng(seed)
  const sky = skyCuts(r, horizon)
  const seaD = seaCuts(r, sea[0], sea[1], horizon)
  const { ground, tufts } = groundCuts(r, horizon, clear)
  const out = { sky, sea: seaD, ground, tufts }
  cache.set(seed, out)
  return out
}

/** The sky, the sea between `sea[0]` and `sea[1]`, and the level field, behind everything else. */
export function CampGround({
  m,
  sea,
  horizon = HORIZON,
}: {
  m: CampMarks
  sea: [number, number]
  horizon?: number
}) {
  return (
    <g>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the sea, far off beyond the camp: "near Dover" */}
      <path d={m.sea} fill={INK} />
      {sea[1] > sea[0] && (
        <path
          d={coastLine(sea[0], sea[1], horizon)}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
      )}
      <path d={`M0 ${horizon}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.ground} fill={INK} />
      <path d={m.tufts} fill={INK} />
    </g>
  )
}

/** A shadow on the field under a figure: a few tapering cuts. Fill with INK. */
export function footShadow(cx: number, y: number, halfW: number, lean = 0) {
  let d = ''
  for (let k = 0; k < 3; k++) {
    const w = halfW * (1 - k * 0.2)
    d += gouge(cx - w + lean * k, y + 1 + k * 3, cx + w + lean * k, y + 1.4 + k * 3, 1.9 - k * 0.45)
  }
  return d
}

/**
 * A round tent with a peaked roof, `w` wide, standing on the field at `base`,
 * its walls `wall` high and its roof `roof` high above them. Lit from the
 * left, as a print cuts light: the roof is ink, its seams cut in paper and
 * widest on the lit side; the walls are paper with their seams in ink and
 * shaded on the right; the scalloped valance is ink with its edge cut in
 * paper. With `door`, its doorway is open on the left of centre, the flap
 * tied back, the inside dark.
 */
export function Pavilion({
  x,
  base,
  w,
  wall,
  roof,
  door = false,
}: {
  x: number
  base: number
  w: number
  wall: number
  roof: number
  door?: boolean
}) {
  const h = w / 2
  const eave = base - wall
  const apex = eave - roof
  const roofD = `M${n(x - h - 5)} ${n(eave)}Q${n(x - h * 0.35)} ${n(eave - roof * 0.5)} ${n(x)} ${n(apex)}Q${n(x + h * 0.35)} ${n(eave - roof * 0.5)} ${n(x + h + 5)} ${n(eave)}Z`
  // The valance under the eaves, scalloped along its lower edge.
  const sc = 6
  const span = w + 10
  const count = Math.max(4, Math.round(span / 13))
  const step = span / count
  let valance = `M${n(x - h - 5)} ${n(eave - 1)}H${n(x + h + 5)}V${n(eave + 5)}`
  for (let i = count; i > 0; i--) {
    const xa = x - h - 5 + step * i
    const xb = xa - step
    valance += `Q${n((xa + xb) / 2)} ${n(eave + 5 + sc)} ${n(xb)} ${n(eave + 5)}`
  }
  valance += 'Z'
  // The roof's seams, cut in paper from near the peak to the eaves: wide on
  // the lit side, fine on the shaded side.
  let roofCuts = ''
  for (let k = 1; k < 8; k++) {
    const t = k / 8
    const ex = x - h - 5 + (w + 10) * t
    const L = clamp(1.1 - t * 1.2, 0.12, 1)
    roofCuts += gouge(x + (ex - x) * 0.12, apex + 6, ex, eave - 2, 0.45 + L * 1.6)
  }
  // The walls' seams in ink, and their shading on the right.
  let seams = ''
  for (let k = 1; k < 6; k++) {
    const sx = x - h + (w * k) / 6
    seams += `M${n(sx)} ${n(eave + 10)}L${n(sx)} ${n(base - 1)}`
  }
  let shade = ''
  for (let sx = x + h * 0.3; sx < x + h; sx += 2.6) {
    const t = (sx - x) / h
    shade += `M${n(sx)} ${n(eave + 10 + t * 2)}L${n(sx)} ${n(base - 1)}`
  }
  const dw = Math.min(26, w * 0.32)
  const d0 = x - dw * 0.9
  const doorD = `M${n(d0)} ${n(base)}L${n(d0 + dw / 2)} ${n(eave + 12)}L${n(d0 + dw)} ${n(base)}Z`
  const flap = `M${n(d0 + dw / 2)} ${n(eave + 12)}L${n(d0 - 3)} ${n(base - wall * 0.3)}L${n(d0)} ${n(base)}Z`
  return (
    <g>
      <rect x={n(x - h)} y={n(eave + 4)} width={n(w)} height={n(wall - 4)} fill={PAPER} />
      <g stroke={INK} fill="none">
        <path d={seams} strokeWidth={LINE.fine} />
        <path d={shade} strokeWidth={LINE.fine} />
        <path
          d={`M${n(x - h)} ${n(eave + 4)}V${n(base)}M${n(x + h)} ${n(eave + 4)}V${n(base)}M${n(x - h - 2)} ${n(base)}H${n(x + h + 2)}`}
          strokeWidth={LINE.bold}
        />
      </g>
      <path d={roofD} fill={INK} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={roofCuts} fill={PAPER} />
      <path d={valance} fill={INK} />
      <path d={gouge(x - h - 3, eave + 2, x + h + 3, eave + 2, 0.8)} fill={PAPER} />
      {door && (
        <>
          <path d={doorD} fill={INK} />
          <path d={flap} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        </>
      )}
      {/* the pole's top above the peak, and a knob on it */}
      <path d={`M${n(x)} ${n(apex + 2)}V${n(apex - 10)}`} stroke={INK} strokeWidth={2.4} />
      <circle cx={n(x)} cy={n(apex - 11)} r={2.6} fill={INK} />
    </g>
  )
}

/** A small far tent on the edge of the field: an ink peak, its sunlit side cut in paper. */
export function FarTent({ x, base, w, h }: { x: number; base: number; w: number; h: number }) {
  return (
    <g>
      <path
        d={`M${n(x - w / 2)} ${n(base)}L${n(x)} ${n(base - h)}L${n(x + w / 2)} ${n(base)}Z`}
        fill={INK}
      />
      <path d={gouge(x - 1.5, base - h + 4, x - w / 2 + 3, base - 1, 0.8, 0.3)} fill={PAPER} />
      <path d={`M${n(x)} ${n(base - h)}V${n(base - h - 6)}`} stroke={INK} strokeWidth={1.4} />
    </g>
  )
}

/**
 * The colours: a banner on a tall staff with a spear-point, flying out to the
 * right from its top, printed in the spot colour. `lift` raises the banner's
 * free end, as a stronger wind does. With `flip` it flies to the left.
 */
export function Colours({
  x,
  foot,
  top,
  flagW = 70,
  flagH = 34,
  flip = false,
}: {
  x: number
  foot: number
  top: number
  flagW?: number
  flagH?: number
  flip?: boolean
}) {
  const f = flip ? -1 : 1
  const y0 = top + 10
  const fx = (d: number) => n(x + f * d)
  // A swallow-tailed banner, its edges rippling.
  const flag =
    `M${fx(2)} ${n(y0)}` +
    `C${fx(flagW * 0.3)} ${n(y0 - 6)} ${fx(flagW * 0.6)} ${n(y0 + 6)} ${fx(flagW)} ${n(y0 + 1)}` +
    `L${fx(flagW * 0.78)} ${n(y0 + flagH * 0.5)}` +
    `L${fx(flagW)} ${n(y0 + flagH)}` +
    `C${fx(flagW * 0.6)} ${n(y0 + flagH + 5)} ${fx(flagW * 0.3)} ${n(y0 + flagH - 6)} ${fx(2)} ${n(y0 + flagH)}Z`
  return (
    <g>
      <path d={`M${n(x)} ${n(foot)}V${n(top + 4)}`} stroke={PAPER} strokeWidth={6.6} />
      <path d={flag} fill={PAPER} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" />
      <path d={`M${n(x)} ${n(foot)}V${n(top + 4)}`} stroke={INK} strokeWidth={3.4} />
      <path
        d={`M${n(x - 3.4)} ${n(top + 8)}L${n(x)} ${n(top - 8)}L${n(x + 3.4)} ${n(top + 8)}Z`}
        fill={INK}
      />
      <path d={flag} fill={RED} />
    </g>
  )
}

/** A drum on the ground, its shell ink, its hoops and the zigzag of its cords cut in paper. */
export function Drum({ x, base, s = 1 }: { x: number; base: number; s?: number }) {
  const w = 30 * s
  const h = 26 * s
  const top = base - h
  let cords = ''
  const k = 5
  for (let i = 0; i < k; i++) {
    const xa = x - w / 2 + (w * i) / k
    const xb = xa + w / k / 2
    const xc = xa + w / k
    cords += `M${n(xa)} ${n(top + 6 * s)}L${n(xb)} ${n(base - 5 * s)}L${n(xc)} ${n(top + 6 * s)}`
  }
  return (
    <g>
      <path
        d={`M${n(x - w / 2)} ${n(top)}V${n(base - 2)}Q${n(x)} ${n(base + 4 * s)} ${n(x + w / 2)} ${n(base - 2)}V${n(top)}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <ellipse
        cx={n(x)}
        cy={n(top)}
        rx={n(w / 2)}
        ry={n(4.6 * s)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <path d={cords} fill="none" stroke={PAPER} strokeWidth={1.1} strokeLinejoin="round" />
      <path
        d={`M${n(x - w / 2)} ${n(top + 4 * s)}Q${n(x)} ${n(top + 10 * s)} ${n(x + w / 2)} ${n(top + 4 * s)}M${n(x - w / 2)} ${n(base - 4 * s)}Q${n(x)} ${n(base + 2 * s)} ${n(x + w / 2)} ${n(base - 4 * s)}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />
    </g>
  )
}

/**
 * The castle where the prisoners are held, far off on a low hill: an ink
 * keep with two towers and a gate, the hill hatched. `s` scales it about the
 * foot of the hill at (`x`, `base`).
 */
export function FarCastle({ x, base, s = 1 }: { x: number; base: number; s?: number }) {
  const t = `translate(${n(x)} ${n(base)}) scale(${n(s)})`
  let hatch = ''
  for (let hx = -58; hx < 58; hx += 3.2) {
    const top = -16 * Math.max(0, 1 - (hx / 58) ** 2)
    hatch += `M${n(hx)} ${n(top + 1)}L${n(hx + 1.2)} 0`
  }
  const merlons = (x0: number, x1: number, y: number) => {
    let d = ''
    for (let mx = x0; mx < x1 - 1; mx += 5) d += `M${n(mx)} ${n(y)}h3v-4h-3Z`
    return d
  }
  return (
    <g transform={t}>
      <path d="M-60 0Q-30 -18 0 -16Q30 -18 60 0Z" fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={hatch} stroke={INK} strokeWidth={0.9} />
      <path
        d={
          'M-26 -15V-34H-18V-46H-6V-34H6V-46H18V-34H26V-15Z' +
          merlons(-18, -6, -46) +
          merlons(6, 18, -46) +
          merlons(-26, -18, -34) +
          merlons(18, 26, -34)
        }
        fill={INK}
      />
      <path d="M-3.4 -15V-22Q0 -26 3.4 -22V-15Z" fill={PAPER} />
      <path d={gouge(-12, -42, -12, -36, 0.7) + gouge(12, -42, 12, -36, 0.7)} fill={PAPER} />
    </g>
  )
}

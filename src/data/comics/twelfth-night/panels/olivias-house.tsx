import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

/**
 * OLIVIA'S HOUSE FROM THE STREET, cut once for every panel set before it, so
 * a student sees the same place each time: the whole of Act 5, Scene 1 ("The
 * Street before Olivia's House" in the held edition), which four moments of
 * the guide share ("Husband", "One face, one voice", "The whole pack of
 * you", "The wind and the rain"). Act 4, Scene 1 is set there too.
 *
 * What the play gives (the held edition, src/data/full-texts/twelfth-night.ts):
 * - She is a countess ("Here comes the Countess, now heaven walks on earth",
 *   5.1) who can "sway her house, command her followers" (4.3), so it is a
 *   great house of dressed stone, two storeys high.
 * - Visitors wait "at the gate" (1.5: "there is at the gate a young
 *   gentleman"; "saucy at my gates"), and Feste's last song shuts it:
 *   "'Gainst knaves and thieves men shut their gate" (5.1). So the house is
 *   entered by one great round-arched gateway up two steps, its two leaves of
 *   studded planks open (`gate: 'open'`) or shut (`gate: 'shut'`).
 * - She has a garden and an orchard ("the garden door", 3.1; "the orchard
 *   end", 3.4), so a garden wall runs on from the end of the house
 *   (`wall`), with the trees of the orchard showing over it.
 * - Its windows come into the play only as a joke of Feste's in 4.2 ("bay
 *   windows transparent as barricadoes"), so nothing describes them: barred
 *   windows below, tall windows under pediments above, plainly, as on a great
 *   house of about 1600.
 *
 * Nothing is taken from a film, television or stage production's set.
 *
 * Drawn in its own frame: the street at y 0, the middle of the gateway at x 0.
 * The front runs from x -300 to 300, with corner stones at either end; the
 * cornice is at y -250 and the ridge of the roof at y -268, with two chimneys
 * above it. Place it with `at` and `scale`; the panel's edge crops what it
 * does not need. In daylight the stone is paper with its joints cut in ink, so
 * black figures stand out against it. `weather: 'rain'` darkens the joints
 * and greys the front with a little upright hatching. `lit` names the upper
 * windows printed in the spot colour, lamplight within, by their x: -250,
 * -150, 0, 150, 250.
 *
 * WEIGHT. The house is in four panels, so every mark is as lean as it can be:
 * the joints are plain stroked lines, one path for all of them, rather than
 * gouge shapes, which cost five times the bytes for a difference the rough
 * edge of the print hides.
 *
 * Seeds: 6301 (the joints), 6302 (the roof tiles), 6303 (the rain hatching),
 * 6304 (the street), 6305 (the orchard over the wall).
 */

const X0 = -300
const X1 = 300
const PLINTH = -16
const STRING_LO = -140
const STRING_HI = -148
const CORNICE_LO = -238
const CORNICE_HI = -250
const RIDGE = -268
const WALL_TOP = -112

/** The arch of the gateway: its centre, its opening and its ring of voussoirs. */
const ARCH: Pt = [0, -86]
const ARCH_R = 40
const RING_R = 54

/** Barred windows on the ground floor, and tall windows above. */
const LOW_WINDOWS = [-250, -150, 150, 250]
const HIGH_WINDOWS = [-250, -150, 0, 150, 250]
const LOW = { y0: -98, y1: -56, hw: 15 }
const HIGH = { y0: -214, y1: -160, hw: 16 }

type Box = { x0: number; x1: number; y0: number; y1: number }
const holes: Box[] = [
  ...LOW_WINDOWS.map((c) => ({ x0: c - 22, x1: c + 22, y0: LOW.y0 - 7, y1: LOW.y1 + 8 })),
  ...HIGH_WINDOWS.map((c) => ({ x0: c - 25, x1: c + 25, y0: HIGH.y0 - 22, y1: HIGH.y1 + 8 })),
  // the corner stones at each end
  { x0: X0 - 1, x1: X0 + 15, y0: CORNICE_LO, y1: 0 },
  { x0: X1 - 15, x1: X1 + 1, y0: CORNICE_LO, y1: 0 },
]
/** Is (x, y) inside an opening, its surround, the gateway's ring or a corner? */
function inHole(x: number, y: number): boolean {
  if (Math.hypot(x - ARCH[0], y - ARCH[1]) < RING_R + 2 && y < ARCH[1]) return true
  if (Math.abs(x) < RING_R + 2 && y >= ARCH[1]) return true
  return holes.some((b) => x > b.x0 && x < b.x1 && y > b.y0 && y < b.y1)
}

type Marks = {
  joints: string
  quoins: string
  shade: string
  dentils: string
  tiles: string
  voussoirs: string
  hatch: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(6301)
  // Courses of dressed stone: the bed joints run the width of the front,
  // broken at each opening, and the upright joints are staggered course by
  // course.
  let joints = ''
  const course = (y0: number, y1: number, h: number) => {
    let k = 0
    for (let y = y0; y > y1 + 2; y -= h, k++) {
      const yy = Math.round(y * 10) / 10
      let x = X0
      while (x < X1) {
        while (x < X1 && inHole(x, yy)) x += 2
        const start = x
        while (x < X1 && !inHole(x, yy)) x += 2
        if (x - start > 6) joints += `M${n(start)} ${n(yy)}H${n(x)}`
      }
      const next = Math.max(y - h, y1)
      let jx = X0 + (k % 2 ? 22 : 0) + between(r, 0, 10)
      while (jx < X1) {
        if (!inHole(jx, (y + next) / 2) && !inHole(jx, y - 1) && !inHole(jx, next + 1))
          joints += `M${n(jx)} ${n(y)}V${n(next)}`
        jx += between(r, 40, 52)
      }
    }
  }
  course(PLINTH, STRING_LO, 15.6)
  course(STRING_HI, CORNICE_LO, 15)
  for (let x = X0 + 30; x < X1 - 20; x += between(r, 44, 60))
    if (Math.abs(x) > RING_R + 22) joints += `M${n(x)} 0V${PLINTH}`

  // Corner stones, long and short in turn, at both ends of the front.
  let quoins = ''
  for (const [edge, dir] of [
    [X0, 1],
    [X1, -1],
  ] as const) {
    let k = 0
    for (let y = PLINTH; y > CORNICE_LO + 4; y -= 14, k++) {
      const w = k % 2 ? 14 : 24
      const top = Math.max(y - 14, CORNICE_LO)
      quoins += `M${edge} ${n(y)}H${n(edge + dir * w)}V${n(top)}H${edge}`
    }
  }

  // Shade, the sun being high and to the left: under the cornice, under the
  // string course, and down the right side of every surround.
  let shade = ''
  for (let y = CORNICE_LO + 1.4; y < CORNICE_LO + 13; y += 2.6)
    shade += gouge(X0, y, X1, y + between(r, -0.4, 0.4), 1.15 - (y - CORNICE_LO) * 0.07)
  shade += gouge(X0, STRING_LO + 1.6, X1, STRING_LO + 1.6, 0.8)
  for (const c of LOW_WINDOWS) shade += gouge(c + 21, LOW.y0 - 4, c + 21, LOW.y1 + 6, 1.2)
  for (const c of HIGH_WINDOWS) shade += gouge(c + 23, HIGH.y0 - 4, c + 23, HIGH.y1 + 6, 1.3)

  let dentils = ''
  for (let x = X0 + 2; x < X1; x += 9) dentils += `M${n(x)} ${CORNICE_LO - 7}h4.6v5h-4.6Z`

  // Roof tiles: rows of round tile ends cut in paper on the ink of the roof.
  const t = rng(6302)
  let tiles = ''
  for (let y = CORNICE_HI - 4; y > RIDGE + 3; y -= 5.4)
    for (let x = X0 - 6 + between(t, 0, 6); x < X1 + 6; x += 9.4)
      tiles += `M${n(x - 3.4)} ${n(y)}q3.4 ${n(between(t, 2.4, 3.2))} 6.8 0`

  // The voussoirs of the gateway: joints radiating from the arch's centre.
  let voussoirs = ''
  const count = 13
  for (let k = 1; k < count; k++) {
    const a = Math.PI + (k / count) * Math.PI
    const c = Math.cos(a)
    const s = Math.sin(a)
    voussoirs += `M${n(ARCH[0] + c * ARCH_R)} ${n(ARCH[1] + s * ARCH_R)}L${n(ARCH[0] + c * RING_R)} ${n(ARCH[1] + s * RING_R)}`
  }

  // Rain: the front greyed with a light, broken upright hatching.
  const h = rng(6303)
  let hatch = ''
  for (let x = X0 + 2; x < X1; x += 5.2) {
    let y = CORNICE_LO + between(h, 0, 20)
    while (y < -4) {
      const len = between(h, 16, 46)
      if (!inHole(x, y + len / 2)) hatch += `M${n(x)} ${n(y)}v${n(Math.min(len, -4 - y))}`
      y += len + between(h, 6, 18)
    }
  }
  cached = { joints, quoins, shade, dentils, tiles, voussoirs, hatch }
  return cached
}

/** A rectangle as path data. */
const rect = (x: number, y: number, w: number, h: number) =>
  `M${n(x)} ${n(y)}h${n(w)}v${n(h)}h${n(-w)}Z`

/** The arched opening of the gateway, from the street up. */
const ARCH_OPENING = `M${-ARCH_R} 0V${ARCH[1]}A${ARCH_R} ${ARCH_R} 0 0 1 ${ARCH_R} ${ARCH[1]}V0Z`
const ARCH_RING = `M${-RING_R} 0V${ARCH[1]}A${RING_R} ${RING_R} 0 0 1 ${RING_R} ${ARCH[1]}V0Z`

/** The two leaves of the gate, shut: planks, two rows of studs and two ring handles. */
function shutGate() {
  let planks = ''
  for (const x of [-30, -20, -10, 10, 20, 30]) {
    const top = ARCH[1] - Math.sqrt(Math.max(0, ARCH_R * ARCH_R - x * x)) + 4
    planks += gouge(x, -3, x, top, 0.7)
  }
  let studs = ''
  for (const y of [-24, -64])
    for (let x = -34; x <= 34; x += 8.5)
      if (Math.abs(x) > 2) studs += `M${n(x - 1.3)} ${y}a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z`
  return { planks, studs }
}
const SHUT = shutGate()

/**
 * The garden wall running on from one end of the front, and the orchard
 * showing over it, in the wall's own frame: x from 0 at the corner of the
 * house outwards, the street at y 0. The wall is brick, as the garden's walls
 * are inside (./act-3-garden.tsx): courses 7 high, the bed joints broken
 * where the sun is strongest and the upright joints staggered, here as
 * stroked lines to keep the weight down. The orchard is three round crowns
 * of leaves, ink, with the lit top edges of the clumps cut as rows of paper
 * crescents, as the garden's trees are cut.
 */
type Orchard = { crowns: string; trunks: string; leaves: string; bricks: string }
/** A tree over the wall: the centre of its crown and its two radii, in the wall's frame. */
export type OrchardTreeAt = [number, number, number, number]
const WALL_LEN = 480
const TREES: OrchardTreeAt[] = [
  [58, -150, 40, 34],
  [168, -142, 34, 29],
  [272, -154, 42, 36],
]
const orchards = new Map<string, Orchard>()
function orchard(trees: OrchardTreeAt[]): Orchard {
  const key = trees.join('|')
  const hit = orchards.get(key)
  if (hit) return hit
  const r = rng(6305)
  let crowns = ''
  let trunks = ''
  let leaves = ''
  const disc = (cx: number, cy: number, rx: number, ry: number) =>
    `M${n(cx - rx)} ${n(cy)}a${n(rx)} ${n(ry)} 0 1 0 ${n(rx * 2)} 0a${n(rx)} ${n(ry)} 0 1 0 ${n(-rx * 2)} 0Z`
  for (const [cx, cy, rx, ry] of trees) {
    crowns += disc(cx, cy, rx, ry)
    trunks += `M${cx - 4} ${cy + ry * 0.6}L${cx + 4} ${cy + ry * 0.6}L${cx + 5} ${WALL_TOP}L${cx - 5} ${WALL_TOP}Z`
    let row = 0
    for (let y = cy - ry + 4; y < cy + ry - 3; y += 5.6, row++)
      for (let x = cx - rx + (row % 2) * 4; x < cx + rx; x += 8) {
        const lx = x + between(r, -1.5, 1.5)
        const ly = y + between(r, -1.2, 1.2)
        if (Math.hypot((lx - cx) / (rx - 4), (ly - cy) / (ry - 4)) >= 1) continue
        const L = clamp(0.8 - (lx - cx + rx) / (rx * 2.6) - (ly - cy + ry) / (ry * 5))
        if (r() > 0.25 + L * 0.75) continue
        const w = 8 * (0.32 + L * 0.2)
        leaves += gouge(lx - w, ly + 1.4, lx + w, ly + 1.4, 0.5 + L * 1.9, -1.6 - L * 1.2)
      }
  }
  let bricks = ''
  let row = 0
  for (let y = WALL_TOP + 7; y < -1; y += 7, row++) {
    let x = between(r, -8, 0)
    while (x < WALL_LEN) {
      const len = between(r, 18, 64)
      if (r() > 0.3) bricks += `M${n(Math.max(x, 0))} ${n(y)}H${n(Math.min(x + len, WALL_LEN))}`
      x += len + between(r, 2, 9)
    }
    for (let hx = (row % 2 ? 6 : 15) + between(r, -2, 2); hx < WALL_LEN; hx += 18)
      if (r() > 0.5) bricks += `M${n(hx)} ${n(y - 6.4)}V${n(y - 0.6)}`
  }
  const out = { crowns, trunks, leaves, bricks }
  orchards.set(key, out)
  return out
}

export function OliviasHouse({
  at,
  scale = 1,
  gate = 'shut',
  lit = [],
  weather = 'day',
  wall,
  trees = TREES,
}: {
  at: Pt
  scale?: number
  gate?: 'open' | 'shut'
  lit?: number[]
  weather?: 'day' | 'rain'
  /** The garden wall and the orchard over it, running on from this end of the front, or both. */
  wall?: 'left' | 'right' | 'both'
  /**
   * Where the orchard's trees stand over the wall, in the wall's own frame (x
   * outwards from the corner of the house, the street at y 0), so that a panel
   * can keep a dark crown from standing behind someone's head.
   */
  trees?: OrchardTreeAt[]
}) {
  const m = marks()
  const o = wall ? orchard(trees) : undefined
  const chimneys = [-196, 176]
  const wet = weather === 'rain'
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(scale)})`}>
      {o &&
        (wall === 'both' ? ['left', 'right'] : [wall]).map((side) => (
          <g
            key={side}
            transform={side === 'left' ? `translate(${X0} 0) scale(-1 1)` : `translate(${X1} 0)`}
          >
            {o.crowns && (
              <>
                <path d={o.trunks} fill={INK} stroke={PAPER} strokeWidth={1.2} />
                <path d={o.crowns} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
                <path d={o.crowns} fill={INK} />
                <path d={o.leaves} fill={PAPER} />
              </>
            )}
            {/* the brick wall and its coping, its sunlit edge cut in paper */}
            <path d={rect(0, WALL_TOP, WALL_LEN, -WALL_TOP)} fill={PAPER} />
            <path d={o.bricks} stroke={INK} strokeWidth={wet ? 1.6 : 1.3} fill="none" />
            <path d={rect(-2, WALL_TOP - 7, WALL_LEN + 4, 8)} fill={INK} />
            <path d={gouge(0, WALL_TOP - 4.6, WALL_LEN, WALL_TOP - 4.4, 1.1)} fill={PAPER} />
            <path d={rect(-2, WALL_TOP + 1, WALL_LEN + 4, 2.4)} fill={INK} />
          </g>
        ))}

      {/* the roof and its chimneys, the stone cut in paper */}
      {chimneys.map((x) => (
        <g key={x}>
          <path
            d={rect(x - 10, RIDGE - 24, 20, 28)}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
          />
          <path
            d={`M${x - 10} ${RIDGE - 12}H${x + 10}M${x + 2} ${RIDGE - 24}V${RIDGE - 12}`}
            stroke={INK}
            strokeWidth={1.1}
          />
          <path d={rect(x - 13, RIDGE - 30, 26, 6)} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        </g>
      ))}
      <path
        d={`M${X0 - 8} ${CORNICE_HI}L${X0 + 14} ${RIDGE}H${X1 - 14}L${X1 + 8} ${CORNICE_HI}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.tiles} fill="none" stroke={PAPER} strokeWidth={1.2} />

      {/* the stone front, lit, its joints cut in ink */}
      <path d={rect(X0, CORNICE_HI, X1 - X0, -CORNICE_HI)} fill={PAPER} />
      <path d={m.joints} stroke={INK} strokeWidth={wet ? 1.3 : 1} fill="none" />
      <path d={m.quoins} stroke={INK} strokeWidth={LINE.fine} fill="none" />
      <path
        d={`M${X0} ${CORNICE_LO}V0M${X1} ${CORNICE_LO}V0`}
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      {wet && <path d={m.hatch} stroke={INK} strokeWidth={0.9} />}
      {/* cornice, dentils and the shade under them */}
      <path d={rect(X0 - 6, CORNICE_HI, X1 - X0 + 12, 5)} fill={INK} />
      <path d={`M${X0 - 6} ${CORNICE_HI + 9}H${X1 + 6}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.dentils} fill={INK} />
      <path d={m.shade} fill={INK} />
      {/* the string course between the floors, and the plinth */}
      <path
        d={rect(X0 - 3, STRING_HI, X1 - X0 + 6, 8)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={`M${X0} ${PLINTH}H${X1}`} stroke={INK} strokeWidth={LINE.bold} />

      {/* the tall windows above, each under a pediment */}
      {HIGH_WINDOWS.map((c) => {
        const glow = lit.includes(c)
        return (
          <g key={c}>
            <path
              d={`M${c - 24} ${HIGH.y0 - 8}L${c} ${HIGH.y0 - 21}L${c + 24} ${HIGH.y0 - 8}Z`}
              fill={PAPER}
              stroke={INK}
              strokeWidth={LINE.fine}
              strokeLinejoin="round"
            />
            <path d={rect(c - 25, HIGH.y0 - 8, 50, 3)} fill={INK} />
            <path
              d={rect(c - HIGH.hw - 4, HIGH.y0 - 4, HIGH.hw * 2 + 8, HIGH.y1 - HIGH.y0 + 6)}
              fill={PAPER}
              stroke={INK}
              strokeWidth={LINE.fine}
            />
            <path
              d={rect(c - HIGH.hw, HIGH.y0, HIGH.hw * 2, HIGH.y1 - HIGH.y0)}
              fill={glow ? RED : INK}
            />
            {/* mullion and transom: four lights */}
            <path
              d={`M${c} ${HIGH.y0}V${HIGH.y1}M${c - HIGH.hw} ${HIGH.y0 + 20}H${c + HIGH.hw}`}
              stroke={glow ? INK : PAPER}
              strokeWidth={2.4}
            />
            <path d={rect(c - 22, HIGH.y1 + 2, 44, 4)} fill={INK} />
          </g>
        )
      })}

      {/* the barred windows of the ground floor */}
      {LOW_WINDOWS.map((c) => (
        <g key={c}>
          <path
            d={rect(c - LOW.hw - 5, LOW.y0 - 5, LOW.hw * 2 + 10, LOW.y1 - LOW.y0 + 8)}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
          />
          <path d={rect(c - LOW.hw, LOW.y0, LOW.hw * 2, LOW.y1 - LOW.y0)} fill={INK} />
          <path
            d={`M${c - 7.5} ${LOW.y0}V${LOW.y1}M${c} ${LOW.y0}V${LOW.y1}M${c + 7.5} ${LOW.y0}V${LOW.y1}M${c - LOW.hw} ${LOW.y0 + 16}H${c + LOW.hw}`}
            stroke={PAPER}
            strokeWidth={1.8}
          />
          <path d={rect(c - 21, LOW.y1 + 3, 42, 4)} fill={INK} />
        </g>
      ))}

      {/* the gateway: a ring of voussoirs, its keystone, its imposts */}
      <path d={ARCH_RING} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.voussoirs} stroke={INK} strokeWidth={1.3} />
      <path
        d={`M-8 ${ARCH[1] - RING_R - 6}H8L6 ${ARCH[1] - ARCH_R + 2}H-6Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path
        d={rect(-RING_R - 4, ARCH[1] - 4, 18, 8) + rect(RING_R - 14, ARCH[1] - 4, 18, 8)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={ARCH_OPENING} fill={INK} />
      {gate === 'shut' ? (
        <>
          <path d={SHUT.planks} fill={PAPER} />
          <path d={`M0 -2V${ARCH[1] - ARCH_R + 3}`} stroke={PAPER} strokeWidth={1.6} />
          <path d={SHUT.studs} fill={PAPER} />
          <path
            d="M-9.5 -50a3.2 3.2 0 1 0 6.4 0a3.2 3.2 0 1 0 -6.4 0ZM3.1 -50a3.2 3.2 0 1 0 6.4 0a3.2 3.2 0 1 0 -6.4 0Z"
            fill="none"
            stroke={PAPER}
            strokeWidth={1.3}
          />
        </>
      ) : (
        <>
          {/* the leaves swung back into the reveals, their plank edges catching the light */}
          <path
            d={`M${-ARCH_R + 1} -2V${ARCH[1] - 14}L${-ARCH_R + 11} ${ARCH[1] - 8}V-6Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
          <path
            d={`M${ARCH_R - 1} -2V${ARCH[1] - 14}L${ARCH_R - 11} ${ARCH[1] - 8}V-6Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
          {/* the paving of the court within, in the light beyond the dark passage */}
          <path d="M-29 -2L-12 -22H12L29 -2Z" fill={PAPER} />
          <path d={gouge(-20, -10, 20, -10, 0.6) + gouge(-14, -17, 14, -17, 0.5)} fill={INK} />
        </>
      )}
      {/* two steps up to the gate */}
      <path
        d={rect(-62, -1, 124, 6) + rect(-72, 5, 144, 6)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={gouge(-60, 3.4, 60, 3.4, 0.8) + gouge(-70, 9.4, 70, 9.4, 0.9)} fill={INK} />
    </g>
  )
}

/**
 * The street before the house: paving of square setts in courses that widen
 * as they come towards the reader, from `top` (the foot of the front) to
 * `bottom`, the joints between them turning towards `vx`. Paper, with its
 * joints cut in ink, one stroked path per course; a wet street (`wet`) has
 * heavier joints and long dark runs of water.
 */
export function Street({
  top,
  bottom,
  width,
  vx,
  wet = false,
}: {
  top: number
  bottom: number
  width: number
  vx: number
  wet?: boolean
}) {
  const s = streetMarks(top, bottom, width, vx, wet)
  return (
    <>
      <path d={`M0 ${top}H${width}V${bottom}H0Z`} fill={PAPER} />
      {s.rows.map(([d, w]) => (
        <path key={d.slice(0, 24)} d={d} stroke={INK} strokeWidth={w} fill="none" />
      ))}
      {wet && <path d={s.wet} fill={INK} />}
    </>
  )
}

const streets = new Map<string, { rows: [string, number][]; wet: string }>()
function streetMarks(top: number, bottom: number, width: number, vx: number, wet: boolean) {
  const key = `${top}|${bottom}|${width}|${vx}|${wet}`
  const hit = streets.get(key)
  if (hit) return hit
  const r = rng(6304)
  const rows: [string, number][] = []
  let y = top + 4
  let h = 5
  let k = 0
  const vy = top - 160
  while (y < bottom) {
    const depth = (y - top) / (bottom - top)
    let d = `M-4 ${n(y)}H${width + 4}`
    const next = Math.min(y + h, bottom)
    const step = 11 + depth * 34
    for (
      let x = -20 + (k % 2 ? step / 2 : 0) + between(r, 0, 4);
      x < width + 20;
      x += step * between(r, 0.85, 1.15)
    ) {
      const tt = (next - vy) / (y - vy)
      d += `M${n(x)} ${n(y)}L${n(vx + (x - vx) * tt)} ${n(next)}`
    }
    rows.push([d, n2(0.9 + depth * 1.5 + (wet ? 0.4 : 0))])
    y += h
    h *= 1.3
    k++
  }
  let wetMarks = ''
  if (wet)
    for (let i = 0; i < 22; i++) {
      const yy = between(r, top + 12, bottom - 4)
      const xx = between(r, 0, width)
      const depth = (yy - top) / (bottom - top)
      const L = between(r, 24, 70) * (0.5 + depth)
      wetMarks += gouge(xx, yy, xx + L, yy + between(r, -0.8, 0.8), 0.6 + depth * 1.2)
    }
  const out = { rows, wet: wetMarks }
  streets.set(key, out)
  return out
}
const n2 = (v: number) => Math.round(v * 10) / 10

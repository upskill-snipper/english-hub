import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge, type Pt } from '@/components/comics/linocut/carve'

import { archway } from '../../othello/panels/garden'

/**
 * THE CHURCHYARD AND THE GRAVE, cut once for the two moments the guide sets
 * there, both in Act 5, Scene 1: "The graveyard" and "Ophelia's funeral". The
 * grave the Gravedigger is digging in the first is the grave Laertes leaps
 * into in the second, so it is one churchyard seen from one place: the same
 * church, the same old stones, the same pit and the same heap of clay.
 *
 * WHAT THE PLAY SAYS, and so what is drawn (the held edition,
 * src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - "A churchyard." It is flat: "Till of this flat a mountain you have made"
 *   (Laertes). The church stands in it ("the gallows is built stronger than
 *   the church"), and it has a bell ("the bringing home / Of bell and
 *   burial", the Priest). So the turf runs level to a low churchyard wall,
 *   and on the right stands a plain church with its bell hanging in the
 *   tower. The play is set in Denmark and describes the church no further,
 *   so it is drawn plainly as a church of that country: whitewashed walls,
 *   a dark roof, and a tower with a stepped gable.
 * - The time of day is not given. Both moments are by daylight under an
 *   overcast sky, so a funeral and a grave are drawn without the menace of a
 *   night sky.
 * - "Is she to be buried in Christian burial ... make her grave straight";
 *   "O, a pit of clay for to be made"; "A pickaxe and a spade, a spade". So
 *   the grave is an open pit of clay in the turf, its heap of dug clay beside
 *   it, and a pickaxe lies on the heap. Ophelia is to be buried in
 *   consecrated ground, so her grave lies among the old stones.
 * - The Gravedigger throws up skulls as he digs. Nothing of them is drawn
 *   here: no bone lies on the heap or in the pit. The only skull in either
 *   panel is Yorick's, in Hamlet's hand.
 *
 * WHY THE PIT IS CUT AS IT IS (2 October 2026). Its first cut was a dark
 * trapezium with straight edges, and at a glance it read as a long black box
 * lying on the grass: in a churchyard, a coffin. So its edges are ragged
 * turf, the clay of its far wall is lit at the top and falls away into the
 * dark, and blades of grass hang over both lips: it reads as a hole.
 *
 * The tower's face is left plain whitewash from its belfry down to its door,
 * because the heads of the mourners in "Ophelia's funeral" stand in front of
 * it: a dark window behind a head framed it like a hood.
 *
 * No stone stands on the turf behind the middle of the grave (2 October
 * 2026). One did, a slab at x 500, and it stood against the face of whoever
 * is in the pit: on the Gravedigger, in profile, it read as a long dark beard
 * hanging from his chin, and in "Ophelia's funeral" it ran into Laertes's.
 *
 * HOW THE LAYERS GO. A person standing in the grave is drawn between
 * `ChurchyardBack` (the sky, the church, the stones, the turf and the far wall
 * of the pit) and `GraveFront` (the turf in front of the pit, which hides
 * everything of them below its edge, and the heap of clay). People standing on
 * the far side of the grave go between the two as well; people on the near
 * side go after `GraveFront`.
 *
 * Seeds, fixed here because the two panels show one place: 1771 (the sky),
 * 1772 (the turf), 1773 (the clay of the pit and the heap), 1774 (the
 * church's whitewash and roof, and the wall).
 */

export const W = 860
export const H = 340
/** Where the churchyard's turf meets the foot of its wall and the church. */
export const HORIZON = 236

/**
 * The grave's mouth: its far edge from x0 to x1 at `far`, its near edge from
 * nx0 to nx1 at `near` (a little wider, being nearer).
 */
export const GRAVE = { x0: 456, x1: 672, far: 282, nx0: 448, nx1: 684, near: 316 }
/** The heap of dug clay at the grave's right-hand end. */
const HEAP =
  'M680 320C683 309 688 299 696 291C703 284 709 279 716 274C722 270 727 268 733 264C738 261 744 259.4 750 258.6C756 257.4 761 258.4 767 259.6C773 261.4 778 263 783 267C789 271 793 275.6 798 281C804 287 808 293 813 300C817 306 821 313 824 320Z'

/** The church: its tower, whose foot is at x TX0 to TX1, and its nave beyond. */
const TX0 = 604
const TX1 = 668
const EAVE = 98
const NAVE = { eave: 166, ridge: 124 }

type Marks = {
  sky: string
  turf: string
  turfFront: string
  lipTufts: string
  farLip: string
  pit: string
  heap: string
  whitewash: string
  roof: string
  stoneCuts: string
  wallCuts: string
}

/** An old headstone or cross on the far turf: foot at (x, y), `s` its size, `lean` in degrees. */
type Stone = { at: Pt; kind: 'slab' | 'cross'; s: number; lean: number }
const STONES: Stone[] = [
  { at: [28, 254], kind: 'slab', s: 1, lean: -5 },
  { at: [92, 247], kind: 'cross', s: 0.82, lean: 4 },
  { at: [150, 258], kind: 'slab', s: 1.1, lean: 3 },
  { at: [226, 248], kind: 'cross', s: 0.9, lean: -3 },
  { at: [292, 253], kind: 'slab', s: 0.86, lean: 2 },
  { at: [366, 246], kind: 'slab', s: 0.8, lean: -4 },
  { at: [418, 254], kind: 'cross', s: 0.86, lean: 3 },
  { at: [560, 252], kind: 'cross', s: 0.8, lean: -2 },
  { at: [700, 249], kind: 'slab', s: 0.84, lean: 3 },
  { at: [842, 247], kind: 'slab', s: 0.8, lean: 2 },
]

/** One stone's outline, in its own frame (foot at 0, 0). */
function stoneShape(kind: Stone['kind']) {
  return kind === 'cross'
    ? 'M-3.4 0V-24H-11V-31H-3.4V-40H3.4V-31H11V-24H3.4V0Z'
    : 'M-9 0V-24C-9 -32 -4.6 -35 0 -35C4.6 -35 9 -32 9 -24V0Z'
}
const stoneT = ({ at, s, lean }: Stone) =>
  `translate(${n(at[0])} ${n(at[1])}) rotate(${lean}) scale(${s})`

/** A point on the stone, in the panel's frame. */
function onStone({ at, s, lean }: Stone, x: number, y: number): Pt {
  const a = (lean * Math.PI) / 180
  return [
    at[0] + (x * Math.cos(a) - y * Math.sin(a)) * s,
    at[1] + (x * Math.sin(a) + y * Math.cos(a)) * s,
  ]
}

/** Is (x, y) in the turf just in front of the grave's mouth, which `GraveFront` cuts? */
const inFront = (x: number, y: number) =>
  x > GRAVE.nx0 - 12 && x < GRAVE.nx1 + 8 && y > GRAVE.near - 2

/** Is (x, y) in the grave's mouth or under the heap, where no grass grows? */
function bare(x: number, y: number) {
  if (y > GRAVE.far - 4 && y < GRAVE.near + 3 && x > GRAVE.nx0 - 3 && x < GRAVE.nx1 + 3) return true
  return x > 676 && x < 828 && y > 256 && y < 322
}

/** The ragged edge of the turf along y from x0 to x1: a polyline of small steps. */
function ragged(x0: number, x1: number, y: number, seed: number): Pt[] {
  const r = rng(seed)
  const pts: Pt[] = []
  for (let x = x0; x < x1; x += between(r, 4, 9)) pts.push([x, y + between(r, -1.4, 1.4)])
  pts.push([x1, y])
  return pts
}
const poly = (pts: Pt[]) => pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')

/** The mouth of the grave: ragged turf along both lips. */
const FAR_EDGE = ragged(GRAVE.x0, GRAVE.x1, GRAVE.far, 1775)
const NEAR_EDGE = ragged(GRAVE.nx0, GRAVE.nx1, GRAVE.near, 1776)
const MOUTH = `M${poly(FAR_EDGE)}L${poly([...NEAR_EDGE].reverse())}Z`

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // An overcast sky: long ink lines engraved on the paper, heaviest at the
  // top and thinning to nothing at the horizon, so the church and the people
  // stand clear of it. (Cut the other way, light out of an inked block, it
  // read as night.) A gouge is half as thick as its width parameter, so the
  // widths here run to 3.
  const sr = rng(1771)
  let sky = ''
  for (let y = 4; y < HORIZON - 6; y += 5) {
    const D = clamp(0.92 - y / 210)
    let x = between(sr, -40, 0)
    while (x < W) {
      const len = between(sr, 40, 150)
      const wob = 0.6 * Math.sin(x / 90 + y / 30)
      if (sr() < 0.35 + D * 0.65)
        sky += gouge(
          x,
          y + wob + between(sr, -0.5, 0.5),
          x + len,
          y + wob + between(sr, -0.5, 0.5),
          0.6 + D * 2.6,
          between(sr, -0.5, 0.5),
        )
      x += len + between(sr, 5, 26) * (1.25 - D)
    }
  }

  // The turf: short ink strokes on the paper, longer and heavier nearer the
  // reader. The strip in front of the grave is cut by GraveFront instead.
  const tr = rng(1772)
  let turf = ''
  let turfFront = ''
  for (let i = 0; i < 170; i++) {
    const t = Math.pow(tr(), 0.75)
    const y = HORIZON + 8 + (H - HORIZON - 6) * t
    const x = between(tr, -6, W + 6)
    const len = 6 + t * 16
    const mark = gouge(x, y, x + len, y + between(tr, -1, 1), 0.5 + t * 1.2)
    if (bare(x, y) || bare(x + len, y)) continue
    if (inFront(x, y) || inFront(x + len, y)) turfFront += mark
    else turf += mark
  }
  // Blades of grass hanging over the far lip into the dark, and standing up
  // from the near lip against it: paper on the ink of the pit.
  let farLip = ''
  for (const [x, y] of FAR_EDGE.slice(1, -1))
    farLip += gouge(x, y - 1.5, x + between(tr, -2.4, 2.4), y + between(tr, 3, 6), 0.75)
  let lipTufts = ''
  for (const [x, y] of NEAR_EDGE.slice(1, -1))
    lipTufts += gouge(x, y + 1.5, x + between(tr, -2.4, 2.4), y - between(tr, 3, 6.5), 0.75)

  // The far wall of the pit: clay, lit at the top by the day and falling away
  // into the dark below. The strata of the clay run along it, broken by the
  // strokes of the spade.
  const cr = rng(1773)
  let pit = ''
  const across = (y: number) => {
    const t = (y - GRAVE.far) / (GRAVE.near - GRAVE.far)
    return [GRAVE.x0 + (GRAVE.nx0 - GRAVE.x0) * t, GRAVE.x1 + (GRAVE.nx1 - GRAVE.x1) * t]
  }
  for (let k = 0; k < 6; k++) {
    const y = GRAVE.far + 4.6 + k * 2.7
    const t = 1 - k / 6
    const [x0, x1] = across(y)
    let x = x0 + between(cr, 1, 8)
    while (x < x1 - 4) {
      const len = between(cr, 10, 34)
      if (cr() < 0.4 + t * 0.6)
        pit += gouge(
          x,
          y + between(cr, -0.5, 0.5),
          Math.min(x + len, x1 - 2),
          y + between(cr, -0.5, 0.5),
          0.25 + t * 1.15,
          between(cr, -0.4, 0.4),
        )
      x += len + between(cr, 2, 9) * (1.5 - t)
    }
  }

  // The heap: lumps of clay catching the light on the side towards it.
  let heap = ''
  for (let k = 0; k < 30; k++) {
    const x = between(cr, 692, 812)
    const top = 262 + Math.abs(x - 752) * 0.42
    const y = between(cr, top + 5, 316)
    const len = between(cr, 5, 12)
    const lit = clamp(1 - (x - 690) / 140)
    heap += gouge(x, y, x + len, y + between(cr, -2, 1), 0.5 + lit * 1.3, between(cr, -1, 1))
  }

  // The church's whitewash: shadow under the eaves and at the foot, the
  // tower's far side in shade. Ink on paper.
  const wr = rng(1774)
  let whitewash = ''
  for (let y = NAVE.eave + 2; y < NAVE.eave + 12; y += 3)
    whitewash += gouge(TX1 + 2, y, W + 4, y + between(wr, -0.3, 0.3), 1.5 - (y - NAVE.eave) * 0.1)
  for (let y = HORIZON - 12; y < HORIZON; y += 3.6) {
    let x = TX0 + between(wr, 0, 6)
    while (x < W) {
      const len = between(wr, 14, 40)
      if (wr() < (y - HORIZON + 14) / 16)
        whitewash += gouge(x, y, x + len, y, 0.4 + (y - HORIZON + 14) * 0.05)
      x += len + between(wr, 6, 16)
    }
  }
  for (let x = TX1 - 9; x < TX1 - 1; x += 3)
    whitewash += gouge(
      x,
      EAVE + 4,
      x + between(wr, -0.6, 0.6),
      HORIZON - 4,
      0.3 + (x - TX1 + 9) * 0.1,
    )
  // The roof: its courses of tiles cut in paper on the ink.
  let roof = ''
  for (let k = 1; k < 7; k++) {
    const y = NAVE.ridge + k * 6
    const x0 = TX1 + 8 - k * 1.7
    roof += gouge(x0, y, W + 4, y, 0.55 + k * 0.08)
    for (let x = x0 + between(wr, 4, 12); x < W; x += between(wr, 15, 22))
      roof += gouge(x, y + 0.6, x + 0.4, y + 5.4, 0.45)
  }

  // The old stones: ink, a carved paper edge, a cut down the side the light is on.
  let stoneCuts = ''
  for (const st of STONES) {
    const a = onStone(st, -5.6, -3)
    const b = onStone(st, -5.6, st.kind === 'cross' ? -20 : -26)
    stoneCuts += gouge(a[0], a[1], b[0], b[1], 0.9)
  }
  // The low churchyard wall: whitewashed like the church, its coping and the
  // shadow at its foot cut in ink.
  let wallCuts = ''
  for (let x = 6; x < TX0 - 14; x += between(wr, 22, 40))
    wallCuts += gouge(x, HORIZON - 6, x + between(wr, 10, 18), HORIZON - 6, 0.5)

  cached = {
    sky,
    turf,
    turfFront,
    lipTufts,
    farLip,
    pit,
    heap,
    whitewash,
    roof,
    stoneCuts,
    wallCuts,
  }
  return cached
}

/** The tower's outline: walls to the eaves, then the stepped gable. */
function towerPath() {
  const steps = 5
  const run = (TX1 - TX0) / (steps * 2)
  const rise = 11.2
  let d = `M${TX0} ${HORIZON + 2}V${EAVE}`
  for (let i = 0; i < steps; i++) d += `V${n(EAVE - rise * (i + 1))}H${n(TX0 + run * (i + 1))}`
  for (let i = steps; i > 0; i--) d += `V${n(EAVE - rise * i)}H${n(TX1 - run * (i - 1))}`
  return d + `V${HORIZON + 2}Z`
}

/**
 * The bell in the tower's belfry: "the bringing home / Of bell and burial".
 * Paper on the dark of the opening.
 */
const BELL =
  'M630.4 121C631.6 120 632 116 632.2 111C632.4 105.4 634 103 636 103C638 103 639.6 105.4 639.8 111C640 116 640.4 120 641.6 121Z'

/** The churchyard behind and beside the grave, and the far wall of the pit. */
export function ChurchyardBack() {
  const m = marks()
  const nave = `M${TX1} ${HORIZON + 2}V${NAVE.eave}H${W + 6}V${HORIZON + 2}Z`
  const roof = `M${TX1 - 4} ${NAVE.eave + 1}L${TX1 + 8} ${NAVE.ridge}H${W + 6}V${NAVE.eave + 1}Z`
  const wall = `M-4 ${HORIZON + 1}V${HORIZON - 14}H${TX0 - 4}V${HORIZON + 1}Z`
  return (
    <g>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the church: whitewashed walls, a dark roof, the stepped gable of the tower */}
      <path d={roof} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.roof} fill={PAPER} />
      <path d={nave} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path
        d={towerPath()}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path d={m.whitewash} fill={INK} />
      <g fill={INK}>
        <path d={archway(626, 646, 108, 128)} />
        <path d={archway(624, 648, 212, HORIZON + 2)} />
        <path d={archway(706, 724, 194, 222)} />
        <path d={archway(786, 804, 194, 222)} />
      </g>
      <path d={BELL} fill={PAPER} />
      <path d="M636 103V99" stroke={PAPER} strokeWidth={1.4} />
      {/* the low wall, and the old stones on the turf before it */}
      <path d={wall} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <rect x={-4} y={HORIZON - 16} width={TX0} height={3.4} fill={INK} />
      <path d={m.wallCuts} fill={INK} />
      <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
      <rect x={0} y={HORIZON} width={W} height={2} fill={INK} />
      <path d={m.turf} fill={INK} />
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        {STONES.map((st) => (
          <path key={st.at[0]} d={stoneShape(st.kind)} transform={stoneT(st)} />
        ))}
      </g>
      <path d={m.stoneCuts} fill={PAPER} />
      {/* the mouth of the grave: the lit clay of its far wall, then the dark */}
      <path d={MOUTH} fill={INK} />
      <path d={m.pit} fill={PAPER} />
      <path d={m.farLip} fill={PAPER} />
    </g>
  )
}

/**
 * A pickaxe: its handle from `foot` to the iron head at `head`, the head a
 * curved bar across the end of the handle, both points turned back towards
 * it. Stroke the handle; fill the head. Ink, with a carved paper edge.
 */
export function pickaxe(foot: Pt, head: Pt): { handle: string; head: string } {
  const dx = head[0] - foot[0]
  const dy = head[1] - foot[1]
  const L = Math.hypot(dx, dy) || 1
  const u: Pt = [dx / L, dy / L]
  const v: Pt = [-u[1], u[0]]
  const at = (a: number, b: number): Pt => [
    head[0] + u[0] * a + v[0] * b,
    head[1] + u[1] * a + v[1] * b,
  ]
  const p = (q: Pt) => `${n(q[0])} ${n(q[1])}`
  return {
    handle: `M${p(foot)}L${p(at(-1, 0))}`,
    head: `M${p(at(-6, -19))}Q${p(at(3, -10))} ${p(at(3.4, 0))}Q${p(at(3, 10))} ${p(at(-6, 19))}Q${p(at(-1.4, 9))} ${p(at(-2.2, 0))}Q${p(at(-1.4, -9))} ${p(at(-6, -19))}Z`,
  }
}

/**
 * A spade: its blade's edge at `edge`, the shaft up to the grip at `grip`,
 * with a crosspiece there. Stroke the shaft and the grip; fill the blade.
 */
export function spade(edge: Pt, grip: Pt): { shaft: string; blade: string; tee: string } {
  const dx = grip[0] - edge[0]
  const dy = grip[1] - edge[1]
  const L = Math.hypot(dx, dy) || 1
  const u: Pt = [dx / L, dy / L]
  const v: Pt = [-u[1], u[0]]
  const at = (a: number, b: number): Pt => [
    edge[0] + u[0] * a + v[0] * b,
    edge[1] + u[1] * a + v[1] * b,
  ]
  const p = (q: Pt) => `${n(q[0])} ${n(q[1])}`
  return {
    shaft: `M${p(at(20, 0))}L${p(grip)}`,
    blade: `M${p(at(0, -7))}L${p(at(0, 7))}L${p(at(19, 6))}L${p(at(23, 2))}L${p(at(23, -2))}L${p(at(19, -6))}Z`,
    tee: `M${p([grip[0] + v[0] * -7, grip[1] + v[1] * -7])}L${p([grip[0] + v[0] * 7, grip[1] + v[1] * 7])}`,
  }
}

/**
 * The turf in front of the grave, cut over the lower part of anyone standing
 * in it, and the heap of clay at its end. With `pick`, the pickaxe lies on the
 * heap.
 */
export function GraveFront({ pick = true }: { pick?: boolean }) {
  const m = marks()
  const front = `M${GRAVE.nx0 - 12} ${H + 4}V${GRAVE.near}L${poly(NEAR_EDGE)}L${GRAVE.nx1 + 8} ${GRAVE.near}V${H + 4}Z`
  // The pickaxe thrown down on the heap, its head over the top of it.
  const tool = pickaxe([824, 314], [770, 252])
  return (
    <g>
      <path d={front} fill={PAPER} />
      <path d={m.turfFront} fill={INK} />
      <path d={m.lipTufts} fill={PAPER} />
      <path d={HEAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.heap} fill={PAPER} />
      {pick && (
        <g strokeLinecap="round" strokeLinejoin="round">
          <path d={tool.handle} stroke={PAPER} strokeWidth={8} fill="none" />
          <path d={tool.head} fill={PAPER} stroke={PAPER} strokeWidth={3.2} />
          <path d={tool.handle} stroke={INK} strokeWidth={4.8} fill="none" />
          <path d={tool.head} fill={INK} />
        </g>
      )}
      {/* the shadow the heap throws on the turf */}
      <path d={wedge(686, 321.6, 828, 321.6, 1.6, 1.6)} fill={INK} />
    </g>
  )
}

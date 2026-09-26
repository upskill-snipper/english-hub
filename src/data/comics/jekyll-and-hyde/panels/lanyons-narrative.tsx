import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  boards,
  cuff,
  cuffCuts,
  dropInside,
  footShadow,
  HEAD_HYDE_GASP,
  HEAD_LANYON_CRY,
  LANYON_BROW,
  LANYON_EYE,
  LANYON_LINES,
  lightPool,
  PALM_HAND,
  wainscot,
  WHITE_SHOCK,
  WHITE_SHOCK_STRANDS,
} from './confession-kit'
import { boot, Figure, gent, handAt, headAt, OPEN_HAND, type P, type Part } from './people'

/**
 * Chapter 9: "Lanyon's narrative", the eleventh moment in the guide's
 * timeline. Every detail is from Lanyon's letter:
 *
 * - "Twelve o'clock had scarce rung out over London, ere the knocker sounded";
 *   "as I followed him into the bright light of the consulting room". So it is
 *   midnight by the clock on the wall, and a lamp lights the room bright.
 * - "his clothes ... were enormously too large for him in every measurement:
 *   the trousers hanging on his legs and rolled up to keep them from the
 *   ground, the waist of the coat below his haunches, and the collar sprawling
 *   wide upon his shoulders." So the small man's coat hangs to his shins, its
 *   waist seam sits low, its collar stands out wide, and his trousers are
 *   rolled thick at the ankle.
 * - "The phial ... might have been about half full of a blood-red liquor";
 *   he "measured out a few minims of the red tincture" into the "graduated
 *   glass" Lanyon gave him. So the glass stands empty on the table, and the
 *   phial beside it, half full, is the spot colour. The drawer "lay on the
 *   floor behind a table and still covered with the sheet" until he "plucked
 *   away the sheet", so it lies on the floor behind the table, the sheet
 *   thrown back off it.
 * - "He put the glass to his lips and drank at one gulp. A cry followed; he
 *   reeled, staggered, clutched at the table and held on, staring with
 *   injected eyes, gasping with open mouth; and as I looked there came, I
 *   thought, a change: he seemed to swell: his face became suddenly black and
 *   the features seemed to melt and alter". So he reels back with one hand
 *   holding the end of the table and the other spread at his breast, his head
 *   thrown back and his mouth open. His face, pale in every other panel
 *   (HydeFace in ./people.tsx), is black here, as the text says, and his
 *   staring eye is red. The swelling is cut as three rings of outline
 *   spreading from him.
 * - "I had sprung to my feet and leaped back against the wall, my arms raised
 *   to shield me from that prodigy ... 'O God!' I screamed". So Lanyon's
 *   armchair stands empty, and he is back against the wall with both hands
 *   up, open and apart, his eye wide and his mouth open. He is the Lanyon of
 *   Chapter 2, "a hearty, healthy, dapper, red-faced gentleman, with a shock
 *   of hair prematurely white": a well-fed man in a fitted frock coat, his
 *   white hair standing up in a shock. This night comes before the decline
 *   Chapter 6 records ("visibly balder and older"), so he has all his hair
 *   here and only a fringe in "Lanyon's shock" (./lanyons-shock.tsx); but his
 *   face and hands are lit pale by his lamp and cut the same way in both, the
 *   raised hand being the same palm-out hand (PALM_HAND in
 *   ./confession-kit.tsx). His red face is left to the words: the spot colour
 *   belongs to the tincture and the staring eye.
 *
 * The revolver Lanyon loaded is not drawn: he never raises it, and the moment
 * is his terror, not a threat. The change is shown by the rings and the black
 * face, never as anything done to a body. Nothing is taken from a film or
 * stage production. Seeds: 1101 (wall), 1102 (floor), 1103 (lamplight), 1104
 * (books), 1105 (the edge of the lamp's halo).
 */

const W = 860
const H = 340
const DADO = 234
const SKIRT = 292
const FLOOR = 300

/**
 * The lamp's flame; the halo cleared round it; and the centre of the light it
 * throws on the wall, which falls brightest behind the small man.
 */
const FLAME: P = [226, 186]
const HALO = { cx: 226, cy: 180, rx: 44, ry: 44 }
const LIT: P = [320, 196]

/** The table: its ends and its top. The small man holds the right-hand end. */
const TABLE = { x0: 148, x1: 360, top: 252 }

/** The phial, "about half full of a blood-red liquor". */
const PHIAL = 'M318 252V234C318 231 320 230 322 228V222H330V228C332 230 334 231 334 234V252Z'

/** Where the small man and Lanyon stand. */
const HY_AT: P = [424, 327]
const LAN_AT: P = [720, 318]

type Marks = {
  wall: string
  wains: string
  floor: string
  glow: string
  pool: string
  poolEdge: string
  books: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The lamp lights the whole room: the wall is cut paler the nearer it is,
  // to almost bare paper round the lamp and behind the small man.
  const light = (x: number, y: number) =>
    Math.max(clamp(1.35 - Math.hypot((x - LIT[0]) * 0.75, (y - LIT[1]) * 1.25) / 240), 0.1)
  const r = rng(1101)
  // Cuts the bookcase, the clock or the lamp's halo would cover never print.
  const hidden = (x: number, y: number) =>
    x < 144 ||
    Math.hypot(x - 604, y - 84) < 24 ||
    Math.hypot(x - HALO.cx, y - HALO.cy) < HALO.rx - 4
  const wall = dropInside(
    gougeField(r, { x0: 130, x1: W, y0: 4, y1: DADO - 3 }, light, { spacing: 6.5 }),
    hidden,
  )
  const wains = wainscot(r, 0, W, DADO + 6, SKIRT, light)
  const { pool, edge: poolEdge } = lightPool(rng(1105), HALO)
  const floor = boards(rng(1102), W, H, FLOOR, [430, 80])
  const glow = rays(rng(1103), FLAME[0], FLAME[1], { from: 16, to: 44, every: 10, width: 1.2 })

  // The bookcase: four shelves of spines, cut paper on the dark case.
  const b = rng(1104)
  let books = ''
  for (const y of [82, 138, 194, 250]) {
    let x = 26
    for (;;) {
      const w = 4.6 + b() * 3.8
      const h = 32 + b() * 12
      if (x + w > 132) break
      books += `M${n(x)} ${y}V${n(y - h)}H${n(x + w)}V${y}Z`
      if (b() < 0.6) {
        const yb = y - h * (0.6 + b() * 0.2)
        books += `M${n(x + 0.9)} ${n(yb)}H${n(x + w - 0.9)}V${n(yb + 1.4)}H${n(x + 0.9)}Z`
      }
      x += w + 1.3 + b() * 0.9
    }
  }
  const shadows =
    footShadow(HY_AT[0] + 2, HY_AT[1] + 1, 36) +
    footShadow(255, 330, 104) +
    footShadow(566, 326, 38) +
    footShadow(LAN_AT[0], LAN_AT[1] + 1, 28)
  cached = { wall, wains, floor, glow, pool, poolEdge, books, shadows }
  return cached
}

// ── The small man, changing ────────────────────────────────────────────────
// In his own frame: feet on y = 0, facing right, about 155 tall. He reels back
// towards the table, one hand holding its end, the other spread at his breast,
// his head thrown back.

const HY_HEAD_T = headAt(1, [-17, -135], -26, 1.02)
const HY_NEAR_ARM: P[] = [
  [2, -108],
  [17, -86],
  [8, -90],
]
const HY_FAR_LEG: P[] = [
  [-5, -62],
  [-13, -34],
  [-21, -2],
]
const HY_NEAR_LEG: P[] = [
  [4, -62],
  [14, -34],
  [23, -2],
]
const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L')

/** Each part with the scale its own transform applies, for the rings. */
const HY: (Part & { k?: number })[] = [
  { d: line(HY_FAR_LEG), w: 12 },
  boot(HY_FAR_LEG[2], 1),
  { d: line(HY_NEAR_LEG), w: 12 },
  boot(HY_NEAR_LEG[2], 1),
  // the far arm, reaching back to the end of the table
  { d: 'M-24 -110L-44 -94L-55 -79', w: 11 },
  // the hand on the table: the palm on its top, three fingers over its edge
  { d: 'M-52 -83C-57 -85 -63 -84.6 -68 -81L-68.6 -76.6L-51 -75.4Z' },
  { d: 'M-66.4 -77.6L-67 -69.4', w: 2.4 },
  { d: 'M-62.4 -77.2L-62.8 -69', w: 2.4 },
  { d: 'M-58.4 -76.8L-58.6 -69.6', w: 2.4 },
  // the coat, too long for him, its waist too low, hanging to his shins
  {
    d: 'M-27 -113C-34 -102 -35 -88 -33 -70L-31 -48L-34 -22L27 -22L21 -48C18 -64 13 -80 10 -96C9 -106 5 -112 -1 -115L-13 -118Z',
  },
  // "the collar sprawling wide upon his shoulders"
  { d: 'M-46 -104L-29 -120L-13 -126L9 -119L14 -106L0 -111L-14 -115L-31 -106Z', sep: 2 },
  { d: 'M-13 -114L-15 -126', w: 8 },
  { d: HEAD_HYDE_GASP, t: HY_HEAD_T, k: 1.02 },
  { d: line(HY_NEAR_ARM), w: 11, sep: 1.4 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    sep: 1.3,
    t: handAt(HY_NEAR_ARM, 1, { parts: OPEN_HAND, scale: 1.15, rot: 20 }),
    k: 1.15,
  })),
]
const HY_CUTS =
  // the front edge of the coat, open, and its buttons
  gouge(8, -100, 22, -24, 1.1, -1) +
  gouge(-25, -104, -29, -58, 0.9, 1) +
  gouge(-10, -106, -13, -26, 0.9, 0.8) +
  // "the waist of the coat below his haunches": the seam where his knees are
  'M-32 -40Q-4 -37 22 -40L22.4 -37.8Q-4 -34.8 -32 -37.8Z' +
  // the fold of the collar, and the sleeve's cuff
  gouge(-40, -106, -16, -120, 0.8, -1) +
  gouge(-4, -118, 8, -112, 0.7) +
  gouge(-49, -86, -56, -80, 1.1)

/**
 * The swelling: rings of outline spreading from the figure, cut as ink bands
 * round the union of its parts. Each band is the whole figure stroked wide in
 * ink, then a little less wide in paper. Radius and band width, outermost
 * first.
 */
const RINGS: [number, number][] = [
  [22, 1.8],
  [15, 2.2],
  [8, 2.8],
]

/** The parts the rings follow: the fingers are inside every ring, so they are left out. */
const RING_PARTS = HY.filter((p) => !p.w || p.w > 3)

function Swell({ radius, band }: { radius: number; band: number }) {
  const all = (colour: string, extra: number) => (
    <g fill={colour} stroke={colour} strokeLinecap="round" strokeLinejoin="round">
      {RING_PARTS.map((p, i) => (
        <path
          key={i}
          d={p.d}
          transform={p.t}
          fill={p.w ? 'none' : undefined}
          strokeWidth={(p.w ?? 0) + extra / (p.k ?? 1)}
        />
      ))}
    </g>
  )
  return (
    <>
      {all(INK, radius * 2)}
      {all(PAPER, (radius - band) * 2)}
    </>
  )
}

// ── Lanyon, against the wall ───────────────────────────────────────────────
// In his own frame: feet on y = 0, facing left, about 215 tall.

const LAN_HEAD = { d: HEAD_LANYON_CRY, at: [-3, -182] as P, rot: 8, scale: 1.2 }
const LAN_HEAD_T = headAt(-1, LAN_HEAD.at, LAN_HEAD.rot, LAN_HEAD.scale)
const LAN_NEAR_ARM: P[] = [
  [-6, -152],
  [-32, -146],
  [-46, -166],
]
const LAN_FAR_ARM: P[] = [
  [8, -154],
  [-8, -178],
  [-24, -198],
]
const LANYON: Part[] = gent({
  facing: -1,
  neck: [0, -160],
  hip: [2, -94],
  head: LAN_HEAD,
  body: { width: 36, hem: 40, flare: 7 },
  arm: 10,
  leg: 11,
  near: {
    arm: LAN_NEAR_ARM,
    leg: [
      [-2, -94],
      [-8, -48],
      [-15, -1],
    ],
  },
  far: {
    arm: LAN_FAR_ARM,
    leg: [
      [8, -94],
      [10, -48],
      [12, -1],
    ],
  },
})

/**
 * Each raised hand, palm out, set on the end of its forearm: the palm hand's
 * fingers point up its own -y, so it is turned by the forearm's angle less
 * the upright.
 */
function palmAt(arm: P[], scale: number) {
  const [x0, y0] = arm[arm.length - 2]
  const [x1, y1] = arm[arm.length - 1]
  const a = (Math.atan2(y1 - y0, x1 - x0) * 180) / Math.PI + 90
  return `translate(${x1} ${y1}) rotate(${Math.round(a * 10) / 10}) scale(${scale})`
}

function Lanyon() {
  const [ex, ey, er] = LANYON_EYE
  return (
    <g transform={`translate(${LAN_AT[0]} ${LAN_AT[1]})`}>
      <Figure
        parts={LANYON}
        cuts={gouge(12, -148, 16, -58, 1, -1) + gouge(-4, -140, -10, -58, 0.9, 0.8)}
      >
        {/* the white shirt front and dark tie of a dapper man */}
        <path d="M-4 -160L6 -163L6 -146L-2 -134Z" fill={PAPER} />
        <path d="M-2 -159L4 -161L3 -150L-1 -152Z" fill={INK} />
      </Figure>
      {/* his face lit pale by the lamp, as in "Lanyon's shock": the shock of white hair, the wide eye, the open mouth */}
      <g transform={LAN_HEAD_T}>
        <path d={LAN_HEAD.d} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={WHITE_SHOCK} fill={PAPER} stroke={INK} strokeWidth={1.1} />
        <path d={WHITE_SHOCK_STRANDS} fill={INK} />
        <path d={LANYON_BROW} fill={INK} />
        <circle cx={ex} cy={ey} r={er} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <circle cx={ex + 0.9} cy={ey} r={1.2} fill={INK} />
        <path d={LANYON_LINES} fill="none" stroke={INK} strokeWidth={0.9} />
      </g>
      {/* both hands up, open and apart, lit by the lamp */}
      <g fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round">
        <path d={PALM_HAND} transform={palmAt(LAN_NEAR_ARM, 1.35)} />
        <path d={PALM_HAND} transform={palmAt(LAN_FAR_ARM, 1.3)} />
      </g>
    </g>
  )
}

function LanyonsNarrative({ uid }: ArtProps) {
  const m = marks()
  const id = {
    wall: `${uid}-wall`,
    notTable: `${uid}-not-table`,
    phial: `${uid}-phial`,
  }
  const [fx, fy] = FLAME
  const T = TABLE
  const eye = 'M8.2 -3.4Q12 -7.2 15.6 -3.4Q12 0 8.2 -3.4Z'
  return (
    <>
      <defs>
        <clipPath id={id.wall}>
          <rect x={0} y={0} width={W} height={SKIRT} />
        </clipPath>
        {/* everything but the table, so the rings pass behind it */}
        <clipPath id={id.notTable}>
          <path
            clipRule="evenodd"
            d={`M0 0H${W}V${H}H0ZM${T.x0 - 4} ${T.top - 2}H${T.x1 + 1}V${H}H${T.x0 - 4}Z`}
          />
        </clipPath>
        <clipPath id={id.phial}>
          <rect x={316} y={236} width={20} height={16} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        {/* the wall, cut paler towards the lamp, and the pool it clears */}
        <path d={m.wall} fill={PAPER} />
        <g clipPath={`url(#${id.wall})`}>
          <path d={m.poolEdge} fill={PAPER} />
          <path d={m.pool} fill={PAPER} />
          <path d={m.glow} fill={INK} />
        </g>
        <rect x={0} y={DADO - 3} width={W} height={7} fill={PAPER} />
        <rect x={0} y={DADO} width={W} height={1.4} fill={INK} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={SKIRT} width={W} height={FLOOR - SKIRT} fill={PAPER} />
        <rect x={0} y={SKIRT + 2.6} width={W} height={1.4} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* "Twelve o'clock had scarce rung out over London" */}
        <circle cx={604} cy={84} r={25} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <circle cx={604} cy={84} r={19.5} fill={PAPER} />
        <path
          d={Array.from({ length: 12 }, (_, k) => {
            const a = (k * Math.PI) / 6
            const r0 = k % 3 === 0 ? 12.6 : 14.6
            return `M${n(604 + Math.sin(a) * r0)} ${n(84 - Math.cos(a) * r0)}L${n(604 + Math.sin(a) * 17.6)} ${n(84 - Math.cos(a) * 17.6)}`
          }).join('')}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path d="M604 86V73M604 86V67" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        <circle cx={604} cy={84} r={2.4} fill={INK} />

        {/* the bookcase of a physician's consulting room */}
        <rect
          x={16}
          y={24}
          width={124}
          height={FLOOR - 24}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={10}
          y={16}
          width={136}
          height={9}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.books} fill={PAPER} />
        <path d="M22 84H134M22 140H134M22 196H134M22 252H134" stroke={PAPER} strokeWidth={2.6} />

        {/* the drawer from Jekyll's cabinet on the floor behind the table, the sheet thrown back over its end */}
        <path d="M196 296H284L288 314H192Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d="M204 298H278L280 303H202Z" fill={PAPER} />
        <circle cx={240} cy={308} r={2.2} fill={PAPER} />
        <path d="M214 293L228 290L231 297L217 299Z" fill={PAPER} stroke={INK} strokeWidth={1.1} />
        <path d="M236 294L248 291L251 297L239 299Z" fill={PAPER} stroke={INK} strokeWidth={1.1} />
        <path
          d="M262 292C272 288 286 289 296 294L300 314L294 320L290 313L284 321L278 314L270 322L266 314L260 316L262 300Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.3}
          strokeLinejoin="round"
        />
        <path d={gouge(270, 296, 276, 314, 0.8) + gouge(282, 294, 290, 312, 0.8)} fill={INK} />

        {/* the table */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round">
          <path d={`M${T.x0 + 24} ${T.top + 16}V${H - 22}H${T.x0 + 30}V${T.top + 16}Z`} />
          <path d={`M${T.x1 - 30} ${T.top + 16}V${H - 22}H${T.x1 - 24}V${T.top + 16}Z`} />
          <path d={`M${T.x0} ${T.top}H${T.x1}V${T.top + 7}H${T.x0}Z`} />
          <path d={`M${T.x0 + 6} ${T.top + 7}H${T.x1 - 6}V${T.top + 18}H${T.x0 + 6}Z`} />
          <path d={`M${T.x0 + 8} ${T.top + 18}V${H - 10}H${T.x0 + 15}V${T.top + 18}Z`} />
          <path d={`M${T.x1 - 15} ${T.top + 18}V${H - 10}H${T.x1 - 8}V${T.top + 18}Z`} />
        </g>
        <path d={gouge(T.x0 + 4, T.top + 2, T.x1 - 4, T.top + 2, 0.9)} fill={PAPER} />

        {/* the lamp that makes the room bright */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
          <path
            d={`M${fx - 17} ${T.top}C${fx - 17} ${T.top - 5} ${fx - 10} ${T.top - 8} ${fx} ${T.top - 8}C${fx + 10} ${T.top - 8} ${fx + 17} ${T.top - 5} ${fx + 17} ${T.top}Z`}
          />
          <rect x={fx - 3} y={T.top - 28} width={6} height={20} />
          <ellipse cx={fx} cy={T.top - 36} rx={14} ry={10.5} />
          <rect x={fx - 9} y={T.top - 52} width={18} height={6} />
        </g>
        <path d={gouge(fx - 8, T.top - 40, fx - 2, T.top - 44, 1.2)} fill={PAPER} />
        <path
          d={`M${fx - 7} ${T.top - 52}C${fx - 10} ${T.top - 58} ${fx - 10} ${T.top - 66} ${fx - 5} ${T.top - 72}L${fx - 4} ${T.top - 100}H${fx + 4}L${fx + 5} ${T.top - 72}C${fx + 10} ${T.top - 66} ${fx + 10} ${T.top - 58} ${fx + 7} ${T.top - 52}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${fx} ${fy + 8}C${fx - 5} ${fy + 3} ${fx - 3.4} ${fy - 4} ${fx} ${fy - 11}C${fx + 3.4} ${fy - 4} ${fx + 5} ${fy + 3} ${fx} ${fy + 8}Z`}
          fill={INK}
        />

        {/* the graduated glass, drunk off, and the phial of red tincture */}
        <path d="M290 222H309L304 252H295Z" fill={PAPER} stroke={INK} strokeWidth={1.6} />
        <path
          d="M296 228H300M296.6 234H300.4M297.2 240H300.8M297.8 246H301.4"
          stroke={INK}
          strokeWidth={1.1}
        />
        <path d={PHIAL} fill={PAPER} stroke={INK} strokeWidth={1.6} />
        <g clipPath={`url(#${id.phial})`}>
          <path d={PHIAL} fill={RED} />
        </g>
        <rect x={321} y={216} width={10} height={6} fill={INK} />

        {/* Lanyon's "customary seat", empty: he has sprung from it */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round">
          <path d="M594 272H601L604 326H597Z" />
          <path d="M586 208Q606 200 607 222L603 274H588Z" />
          <path d="M530 280H537L535 326H529Z" />
          <path d="M526 266H604V280H526Z" />
          <path d="M532 246H539V266H532Z" />
          <path d="M526 244C526 238 530 236 536 236H594V246H536Z" />
        </g>
        <path d={gouge(592, 216, 596, 266, 1) + gouge(534, 271, 598, 271, 0.8)} fill={PAPER} />

        {/* "he seemed to swell": the rings spread from him */}
        <g clipPath={`url(#${id.notTable})`}>
          {RINGS.map(([radius, band], k) => (
            <g
              key={radius}
              className="lc-fade-in"
              style={timing({ delay: 0.3 + (RINGS.length - 1 - k) * 0.4, dur: 0.9 })}
            >
              <g transform={`translate(${HY_AT[0]} ${HY_AT[1]})`}>
                <Swell radius={radius} band={band} />
              </g>
            </g>
          ))}
        </g>

        {/* the small man in Jekyll's clothes, holding on to the table */}
        <Figure transform={`translate(${HY_AT[0]} ${HY_AT[1]})`} parts={HY} cuts={HY_CUTS}>
          <path
            d={cuff([-21, -2], [-0.27, 0.96], 7.6) + cuff([23, -2], [0.3, 0.95], 7.6)}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
          <path
            d={cuffCuts([-21, -2], [-0.27, 0.96], 7.6) + cuffCuts([23, -2], [0.3, 0.95], 7.6)}
            fill={PAPER}
          />
          <g fill={PAPER}>
            {[-88, -76, -64].map((y) => (
              <circle key={y} cx={12 + (y + 88) * 0.2} cy={y} r={1.5} />
            ))}
          </g>
          <g transform={HY_HEAD_T}>
            {/* "staring with injected eyes" */}
            <path d={eye} fill={PAPER} />
            <circle cx={12} cy={-3.4} r={2.1} fill={RED} />
            <path d={gouge(4.5, -8.6, 18, -6.6, 1.1, -0.4)} fill={PAPER} />
          </g>
        </Figure>

        <Lanyon />
      </g>
    </>
  )
}

export const lanyonsNarrative: LinocutArt = { width: W, height: H, Draw: LanyonsNarrative }

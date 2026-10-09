import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapter IX: "The funeral", the eleventh moment in the guide's timeline: the
 * cemetery at about five o'clock, in the rain. Every detail is from the held
 * edition (src/data/full-texts/the-great-gatsby.ts):
 *
 * - "About five o'clock our procession of three cars reached the cemetery and
 *   stopped in a thick drizzle beside the gate ... first a motor hearse,
 *   horribly black and wet, then Mr. Gatz and the minister and I in the
 *   limousine". So the hearse stands on the road outside the open gate,
 *   black, with the wet running down it, and the limousine's nose behind it,
 *   under a low grey sky; fine rain falls over everything.
 * - "a little later four or five servants and the postman from West Egg, in
 *   Gatsby's station wagon, all wet to the skin". So five stand a step back
 *   from the grave. Gatsby's servants were "all brothers and sisters"
 *   (Chapter VII), so two are women; the postman is the last, in his cap,
 *   with his bag's strap across him.
 * - "It was the man with owl-eyed glasses ... The rain poured down his thick
 *   glasses, and he took them off and wiped them to see the protecting
 *   canvas unrolled from Gatsby's grave." So Owl Eyes (the kit's 'owl', cut
 *   for this panel from "A stout, middle-aged man, with enormous owl-eyed
 *   spectacles", Chapter III) stands bowed beside Nick, and the canvas is
 *   still over one end of the grave, its edge folded back where it is being
 *   drawn off.
 * - "A little before three the Lutheran minister arrived from Flushing". The
 *   novel gives him no description, so he is drawn plainly: a black front and
 *   a white collar for his cloth, and a book open in his hands for the burial
 *   service, his head bowed over it, at the head of the grave and apart from
 *   the mourners, so that nothing passes between his hands and theirs.
 * - Gatsby's father (the kit's 'gatz', cut for this panel): "a solemn old
 *   man, very helpless and dismayed, bundled up in a long cheap ulster ...
 *   his sparse gray beard". He stands nearest, at the foot of the grave, the
 *   largest figure and the one the eye goes to, stooped, his head bowed low
 *   and his arms hanging; his hair is grey with his beard, for "a solemn old
 *   man". The sky is palest behind the mourners, so they stand black against
 *   it, and no tree is set behind them.
 * - "But it wasn't any use. Nobody came." The left of the block is the empty
 *   part of the cemetery: the open gate, the path from it and the headstones,
 *   with nobody on them.
 *
 * WHAT IS NOT DRAWN. Gatsby: the grave is shown by its edge and its canvas,
 * with no coffin and no body. Wolfshiem, who would not come, and Daisy, who
 * "hadn't sent a message or a flower", are not there, and there are no
 * flowers. The spot colour is left out of this print: there is nothing bright
 * at this grave, and a speck of red beside it would read as blood.
 *
 * The rain drifts in (lc-drift) and the scene pushes in as the plate arrives.
 * Seeds: 1101 (the sky), 1102 (the trees), 1103 (the grass), 1104 (the path),
 * 1105 (the rain).
 */

const W = 860
const H = 340
/** The road outside the railing, and the foot of the railing. */
const ROAD = 198
const FOOT = 207
/** The grave: its far lip, its near lip, and their ends. */
const GRAVE = { far: 286, near: 308, x0: 488, x1: 676, nx0: 468, nx1: 698 }
/** The gate: the inner faces of its two piers. */
const GATE = { l: 214, r: 248 }

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/** The minister, at the head of the grave, reads from his book, his head bowed over it. */
const MINISTER: Pose = {
  look: 'man',
  head: { rot: 16 },
  eye: 'down',
  far: {
    pts: [
      [-4, -132],
      [0, -112],
      [7, -106],
    ],
    hand: 'mitt',
    deg: -14,
  },
  near: {
    pts: [
      [4, -132],
      [8, -110],
      [12, -104],
    ],
    hand: 'mitt',
    deg: -20,
  },
}
/** His book, held open before him; a black front and a white collar for his cloth. */
const BOOK = 'M7 -108L17 -114L27 -109L27 -103L17 -108L7 -102Z'
const BOOK_SPINE = 'M17 -114V-108'
const CLERGY_FRONT = 'M1.4 -139L12 -137L9 -116L4 -116Z'
const CLERGY_COLLAR = 'M-1 -140.6L10.6 -138.8'

/** Mr. Gatz, at the foot of the grave: stooped, his head bowed low, his arms hanging. */
const GATZ: Pose = {
  look: 'gatz',
  head: { rot: 22 },
  body: { neck: [6, -133] },
  eye: 'down',
  far: {
    pts: [
      [0, -128],
      [2, -102],
      [4, -78],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -128],
      [5, -102],
      [7, -78],
    ],
    hand: 'mitt',
  },
}
/** Nick, his head bowed. */
const NICK: Pose = { look: 'nick', head: { rot: 12 }, eye: 'down' }
/** Owl Eyes, last to come, in his thick glasses. */
const OWL: Pose = { look: 'owl', head: { rot: 11 } }

/**
 * "four or five servants and the postman from West Egg ... all wet to the
 * skin". The servants were "brothers and sisters" (Chapter VII), so two are
 * women. The postman is the last, in his cap, his bag's strap across him.
 */
const BACK_ROW: [number, Pose, boolean][] = [
  [744, { look: 'woman', hat: 'cloche', head: { rot: 12 }, eye: 'down' }, false],
  [766, { look: 'man', hat: 'cap', head: { rot: 10 }, eye: 'down' }, false],
  [788, { look: 'woman', hat: 'cloche', head: { rot: 12 }, eye: 'down' }, false],
  [810, { look: 'man', head: { rot: 12 }, eye: 'down' }, false],
  [832, { look: 'man', hat: 'cap', head: { rot: 8 }, eye: 'down' }, true],
]
const STRAP = 'M-9 -134L11 -80'

/**
 * "the protecting canvas unrolled from Gatsby's grave": the sheet still over
 * the left end of the grave, its edge folded back where it is being drawn off.
 */
const CANVAS = `M${GRAVE.x0} ${GRAVE.far}H540L522 ${GRAVE.near}H${GRAVE.nx0}Z`
const CANVAS_FOLD = `M540 ${GRAVE.far}L552 ${GRAVE.far}L536 ${GRAVE.near}L522 ${GRAVE.near}Z`

// ── THE PLACE ───────────────────────────────────────────────────────────────

type Marks = {
  sky: string
  trees: string
  treeCuts: string
  ground: string
  path: string
  ruts: string
  rain: string
  bars: string
}

/** A low, wet sky, palest behind the mourners, so they stand black against it. */
const skyLight = (x: number, y: number) =>
  clamp(
    0.46 +
      0.6 * Math.exp(-((x - 680) ** 2) / (2 * 220 ** 2) - (y - 170) ** 2 / (2 * 90 ** 2)) +
      0.16 * (y / ROAD) -
      0.14 * (1 - y / ROAD) +
      0.05 * Math.sin(x / 70 + y / 30),
  )

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(rng(1101), { x0: 0, x1: W, y0: 4, y1: FOOT }, skyLight, {
    spacing: 6.2,
    len: [44, 140],
    gap: [6, 20],
    max: 3.6,
  })

  // Between the gate and the grave, the dark trees of the cemetery, one
  // rounded crown after another. None stands behind the mourners.
  const tr = rng(1102)
  let trees = ''
  const crowns: [number, number, number][] = []
  for (let x = 294; x < 452; ) {
    const rad = between(tr, 13, 22)
    const cy = 178 - between(tr, 0, 10)
    crowns.push([x, cy, rad])
    trees += `M${n(x - rad)} ${FOOT}V${n(cy)}A${n(rad)} ${n(rad * 0.9)} 0 0 1 ${n(x + rad)} ${n(cy)}V${FOOT}Z`
    x += rad * between(tr, 1.1, 1.5)
  }
  let treeCuts = ''
  for (const [x, cy, rad] of crowns)
    for (let k = 0; k < 3; k++) {
      const a = between(tr, -2.6, -0.6)
      const d = rad * between(tr, 0.45, 0.8)
      const px = x + Math.cos(a) * d
      const py = cy + Math.sin(a) * d * 0.9
      treeCuts += gouge(px, py, px + between(tr, 4, 8), py + between(tr, 0.5, 2), 0.75)
    }

  // Wet grass, dark, with the sheen of standing water.
  const ground = gougeField(
    rng(1103),
    { x0: 0, x1: W, y0: FOOT + 4, y1: H },
    (x, y) => clamp(0.08 + 0.22 * ((y - FOOT) / (H - FOOT)) + 0.1 * Math.sin(x / 40 + y / 11)),
    { spacing: 6, len: [16, 52], gap: [8, 26], max: 2.4 },
  )

  // The gravel path from the gate towards the grave.
  const L: [number, number][] = [
    [GATE.l + 4, FOOT],
    [220, 226],
    [232, 250],
    [264, 276],
    [304, 304],
    [338, 340],
  ]
  const R: [number, number][] = [
    [GATE.r - 4, FOOT],
    [250, 224],
    [268, 246],
    [312, 270],
    [374, 298],
    [446, 340],
  ]
  const path = 'M' + [...L, ...[...R].reverse()].map(([x, y]) => `${x} ${y}`).join('L') + 'Z'
  const pr = rng(1104)
  let ruts = ''
  for (let i = 0; i < 40; i++) {
    const t = between(pr, 0.02, 0.98)
    const k = Math.floor(t * (L.length - 1))
    const f = t * (L.length - 1) - k
    const lx = L[k][0] + (L[k + 1][0] - L[k][0]) * f
    const ly = L[k][1] + (L[k + 1][1] - L[k][1]) * f
    const rx = R[k][0] + (R[k + 1][0] - R[k][0]) * f
    const ry = R[k][1] + (R[k + 1][1] - R[k][1]) * f
    const u = between(pr, 0.15, 0.85)
    const x = lx + (rx - lx) * u
    const y = ly + (ry - ly) * u
    const len = 3 + t * 16
    ruts += gouge(x, y, x + len, y + between(pr, -0.6, 0.6), 0.4 + t * 1.1)
  }

  // The railing along the road, broken by the gate.
  let bars = ''
  for (let x = 4; x < 290; x += 7) {
    if (x > GATE.l - 18 && x < GATE.r + 16) continue
    bars += `M${x} ${FOOT}V${FOOT - 30}`
  }

  // "a thick drizzle": fine cuts falling almost straight.
  const r = rng(1105)
  let rain = ''
  for (let i = 0; i < 270; i++) {
    const x = between(r, -60, W + 20)
    const y = between(r, -10, H)
    const len = between(r, 16, 34)
    rain += gouge(x, y, x + len * 0.2, y + len, between(r, 1, 1.4))
  }
  cached = { sky, trees, treeCuts, ground, path, ruts, rain, bars }
  return cached
}

/** A headstone with a rounded top, its foot at (x, y). */
function stone(x: number, y: number, w: number, h: number, lean = 0) {
  const a = w / 2
  return `M${n(x - a)} ${n(y)}L${n(x - a + lean)} ${n(y - h + a)}A${n(a)} ${n(a)} 0 0 1 ${n(x + a + lean)} ${n(y - h + a)}L${n(x + a)} ${n(y)}Z`
}
const STONES: [number, number, number, number, number][] = [
  [306, 234, 13, 19, 0],
  [354, 228, 11, 16, 0.8],
  [404, 242, 15, 21, 0],
  [176, 240, 15, 22, -1],
  [124, 258, 18, 26, 0],
  [58, 280, 22, 32, 1.2],
]

/**
 * The motor hearse, "horribly black and wet", parked on the road outside the
 * gate, facing it; and the nose of the limousine behind it.
 */
function Cars() {
  const wheel = (cx: number, cy: number, r: number) => (
    <g key={cx}>
      <circle cx={cx} cy={cy} r={r + 1.6} fill={PAPER} />
      <circle cx={cx} cy={cy} r={r} fill={INK} />
      <circle cx={cx} cy={cy} r={r * 0.62} fill="none" stroke={PAPER} strokeWidth={1.3} />
      <path
        d={[0, 45, 90, 135]
          .map((a) => {
            const c = Math.cos((a * Math.PI) / 180) * r * 0.6
            const s = Math.sin((a * Math.PI) / 180) * r * 0.6
            return `M${n(cx - c)} ${n(cy - s)}L${n(cx + c)} ${n(cy + s)}`
          })
          .join('')}
        stroke={PAPER}
        strokeWidth={0.9}
      />
      <circle cx={cx} cy={cy} r={1.8} fill={PAPER} />
    </g>
  )
  return (
    <g>
      {/* the limousine's nose, at the frame's edge */}
      <path
        d="M-4 170H8L12 176H30C34 176 36 178 36 182V196H-4Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d="M33 179V194" stroke={PAPER} strokeWidth={1.2} />
      {wheel(18, 198, 9)}
      {/* the hearse: a tall black body, a cab, a long bonnet */}
      <path
        d="M48 192V150C48 147 50 145 53 145H134C137 145 139 147 139 150V168H170C175 168 178 171 178 175V193H48Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      {/* the roof rail, the panels of the body, the cab window */}
      <path d="M50 151H137" stroke={PAPER} strokeWidth={1.2} />
      <path d="M76 155V186M104 155V186" stroke={PAPER} strokeWidth={1} />
      <path d="M116 154H133V167H116Z" fill={PAPER} />
      <path d="M118 166L131 156" stroke={INK} strokeWidth={1.2} />
      {/* the radiator and lamp */}
      <path d="M176 172V191" stroke={PAPER} strokeWidth={2.4} />
      <circle cx={170} cy={172} r={2.6} fill={PAPER} />
      {/* wet: the shine running down the black */}
      <path
        d={
          gouge(58, 156, 58, 184, 0.8) +
          gouge(66, 160, 67, 176, 0.6) +
          gouge(88, 156, 88, 186, 0.8) +
          gouge(94, 162, 95, 182, 0.6) +
          gouge(126, 172, 126, 188, 0.7) +
          gouge(146, 172, 160, 172, 0.7)
        }
        fill={PAPER}
      />
      {/* mudguards and running board */}
      <path
        d="M46 196C48 184 58 180 66 180C76 180 84 186 86 196M136 196C138 186 146 182 154 182C163 182 170 188 172 196M86 195H136"
        fill="none"
        stroke={INK}
        strokeWidth={4}
      />
      {wheel(66, 198, 10)}
      {wheel(154, 198, 10)}
    </g>
  )
}

function TheFuneral(_props: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [600, 210], push: 1.03 })}>
        <path d={m.sky} fill={PAPER} />
        {/* the trees: a paper edge round the whole line, then the crowns in ink */}
        <path d={m.trees} fill={PAPER} stroke={PAPER} strokeWidth={LINE.carve * 2} />
        <path d={m.trees} fill={INK} />
        <path d={m.treeCuts} fill={PAPER} />

        {/* the road outside, and the cars drawn up beside the gate */}
        <rect x={-4} y={ROAD} width={294} height={FOOT - ROAD} fill={PAPER} />
        <Cars />

        {/* the ground inside */}
        <rect x={-4} y={FOOT} width={W + 8} height={H - FOOT + 4} fill={INK} />
        <path d={`M-4 ${FOOT}H${W + 4}`} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.ground} fill={PAPER} />
        <path d={m.path} fill={PAPER} />
        <path d={m.ruts} fill={INK} />

        {/* the railing, plain iron: it vanishes across the black hearse */}
        <path d={m.bars} stroke={INK} strokeWidth={1.8} />
        <path
          d={`M-4 ${FOOT - 24}H${GATE.l - 16}M${GATE.r + 14} ${FOOT - 24}H290`}
          stroke={INK}
          strokeWidth={2.4}
        />
        {[GATE.l - 14, GATE.r].map((x) => (
          <g key={x}>
            <rect
              x={x}
              y={FOOT - 46}
              width={14}
              height={46}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.4}
            />
            <rect
              x={x - 2}
              y={FOOT - 50}
              width={18}
              height={5}
              fill={INK}
              stroke={PAPER}
              strokeWidth={1}
            />
            <path
              d={`M${x + 2} ${FOOT - 34}H${x + 12}M${x + 2} ${FOOT - 20}H${x + 12}`}
              stroke={INK}
              strokeWidth={1}
            />
          </g>
        ))}

        {/* headstones */}
        {STONES.map(([x, y, w, h, lean]) => (
          <path
            key={x}
            d={stone(x, y, w, h, lean)}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
        ))}

        {/* the servants and the postman, a step behind */}
        {BACK_ROW.map(([x, pose, strap]) => (
          <Person key={x} pose={pose} at={[x, GRAVE.far - 18]} scale={0.66} flip>
            {strap && <path d={STRAP} fill="none" stroke={PAPER} strokeWidth={3} />}
          </Person>
        ))}

        {/* the minister, his book open, at the head of the grave */}
        <Person pose={MINISTER} at={[470, GRAVE.far - 2]} scale={0.86}>
          <path d={CLERGY_FRONT} fill={INK} />
          <path d={CLERGY_COLLAR} fill="none" stroke={PAPER} strokeWidth={3} />
          <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
          <path d={BOOK_SPINE} fill="none" stroke={INK} strokeWidth={1.2} />
        </Person>
        {/* Owl Eyes and Nick across the grave from him */}
        <Person pose={OWL} at={[584, GRAVE.far - 3]} scale={0.86} flip />
        <Person pose={NICK} at={[640, GRAVE.far - 2]} scale={0.88} flip />

        {/* the grave's edge, and the canvas being drawn back from it */}
        <path
          d={`M${GRAVE.x0} ${GRAVE.far}H${GRAVE.x1}L${GRAVE.nx1} ${GRAVE.near}H${GRAVE.nx0}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={CANVAS} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={CANVAS_FOLD} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />

        {/* Gatsby's father, at the foot of the grave, nearest of all */}
        <Person pose={GATZ} at={[712, GRAVE.near + 10]} scale={1} flip />

        <g className="lc-drift">
          <path d={m.rain} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </g>
      </g>
    </>
  )
}

export const theFuneral: LinocutArt = { width: W, height: H, Draw: TheFuneral }

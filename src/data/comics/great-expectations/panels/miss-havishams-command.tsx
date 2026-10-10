import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cut, Person, hand, type P, type Pose } from './people'

/**
 * Chapter 29: "Miss Havisham's command", the ninth moment in the guide's
 * timeline. Every detail is from the held edition (src/data/full-texts/
 * great-expectations.ts):
 *
 * - "The old wintry branches of chandeliers in the room where the mouldering
 *   table was spread, had been lighted while we were out, and Miss Havisham
 *   was in her chair and waiting for me." So two branched chandeliers hang
 *   lit over the long table, their bare arms like winter branches; their
 *   flames are the spot colour, and the dark room is cut lighter only round
 *   them ("the daylight was completely excluded", Chapter 11).
 * - The table and what is on it are the room of Chapter 11: "a long table
 *   with a tablecloth spread on it"; "An épergne or centre-piece of some kind
 *   was in the middle of this cloth; it was so heavily overhung with cobwebs
 *   that its form was quite undistinguishable"; "the yellow expanse out of
 *   which I remember its seeming to grow, like a black fungus"; "It's a great
 *   cake. A bride-cake. Mine!" So the cloth is cut grey with age (its yellow
 *   is left to the words) and the cake under its cobwebs is a black mound
 *   with webs hanging from it.
 * - Her chair is "a garden-chair—a light chair on wheels, that you pushed
 *   from behind" (Chapter 12), and "We had stopped near the centre of the
 *   long table" (Chapter 29).
 * - "Estella being gone and we two left alone ... She drew an arm round my
 *   neck, and drew my head close down to hers as she sat in the chair.
 *   'Love her, love her, love her!'" So Estella has gone, and there are only
 *   the two of them. Pip stoops over the chair; her thin arm goes round the
 *   far side of his neck, so that the arm is hidden and only her hand shows,
 *   white, on the back of his neck, and never across his throat. Her face is
 *   up at his, her other hand clenched on the arm of the chair.
 * - Mr Jaggers, named in the guide for this moment, comes in only after it,
 *   and is not drawn.
 *
 * Miss Havisham and Pip are the figure kit's (./people.tsx). Seeds: 2901 (the
 * wall), 2902 (the floor), 2903 and 2904 (the chandeliers' light), 2905 (the
 * cloth).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const FLOOR = 262
/** The long table: its top's back and front edges, the foot of its cloth. */
const TABLE = { back: 190, front: 202, x0: 44, x1: 900, hem: 258 }
/** The two chandeliers: where each hangs, and the height of its branches. */
const LAMPS: [number, number][] = [
  [196, 74],
  [520, 66],
]
/** The bride-cake under its cobwebs, on the table. */
const CAKE = { x: 640, w: 92, top: 112 }

function light(x: number, y: number) {
  return Math.max(
    ...LAMPS.map(([lx, ly]) => clamp(1 - Math.hypot(x - lx, (y - ly) * 1.1) / 330) ** 1.5),
  )
}

type Marks = {
  wall: string
  glowA: string
  glowB: string
  cloth: string
  floor: string
  webs: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(2901), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, (x, y) =>
    Math.max(light(x, y) * 0.9, 0.04),
  )
  const glowA = rays(rng(2903), LAMPS[0][0], LAMPS[0][1], {
    from: 26,
    to: 120,
    every: 7,
    width: 2.4,
  })
  const glowB = rays(rng(2904), LAMPS[1][0], LAMPS[1][1], {
    from: 26,
    to: 120,
    every: 7,
    width: 2.4,
  })
  // The cloth, grey with age: close ink hatching over the paper, broken by
  // holes and stains, heavier towards its foot.
  const c = rng(2905)
  let cloth = ''
  for (let y = TABLE.front + 3; y < TABLE.hem; y += 3.4) {
    const depth = (y - TABLE.front) / (TABLE.hem - TABLE.front)
    let x = TABLE.x0 + between(c, -10, 0)
    while (x < W) {
      const len = between(c, 10, 40)
      if (c() < 0.55 + depth * 0.35)
        cloth += gouge(x, y, x + len, y + between(c, -0.4, 0.4), 0.45 + depth * 0.7)
      x += len + between(c, 2, 10)
    }
  }
  // Folds hanging from the table's edge.
  for (let x = TABLE.x0 + 30; x < W; x += between(c, 34, 60))
    cloth += wedge(x, TABLE.front + 2, x + between(c, -4, 4), TABLE.hem, 0.6, 2.4)
  // The floor: dark boards, lit a little under the lamps.
  const r = rng(2902)
  let floor = ''
  const V: [number, number] = [430, 40]
  for (let xt = -700; xt < 1500; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.14, 0.32))
      const x0 = xt + (xb - xt) * t0
      const y0 = FLOOR + (H - FLOOR) * t0
      const x1 = xt + (xb - xt) * t1
      const y1 = FLOOR + (H - FLOOR) * t1
      const L = light((x0 + x1) / 2, (y0 + y1) / 2 - 150)
      if (L > 0.03 || r() < 0.3)
        floor += wedge(x0, y0, x1, y1, (0.3 + t0) * (0.4 + L * 2.6), (0.3 + t1) * (0.4 + L * 2.6))
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  // Cobwebs: falls hanging from the cake to the cloth, and threads up into
  // the dark from the nearer chandelier.
  let webs = ''
  const { x, w, top } = CAKE
  for (let k = 0; k < 9; k++) {
    const sx = x - w / 2 + 6 + (k * (w - 12)) / 8
    const sy = top + 30 + Math.abs(k - 4) * 6
    webs += `M${n(sx)} ${n(sy)}Q${n(sx + between(r, -8, 8))} ${n(TABLE.back - 4)} ${n(sx + between(r, -14, 14))} ${n(TABLE.front + between(r, 6, 26))}`
  }
  for (let k = 0; k < 4; k++)
    webs += `M${n(x - 30 + k * 20)} ${n(top + 8)}Q${n(x - 40 + k * 26)} ${n(top - 50)} ${n(x - 70 + k * 40)} ${n(6)}`
  cached = { wall, glowA, glowB, cloth, floor, webs }
  return cached
}

/** A chandelier of "wintry branches": a stem from the ceiling, bare crooked arms, a candle on each. */
function Chandelier({ at: [x, y], k }: { at: P; k: number }) {
  const arms =
    `M${x} 0V${y + 8}` +
    `M${x} ${y + 6}C${x - 14} ${y + 10} ${x - 26} ${y + 6} ${x - 34} ${y - 4}` +
    `M${x} ${y + 6}C${x + 14} ${y + 10} ${x + 26} ${y + 6} ${x + 34} ${y - 4}` +
    `M${x} ${y - 6}C${x - 8} ${y - 10} ${x - 14} ${y - 16} ${x - 16} ${y - 22}` +
    `M${x - 22} ${y + 7}L${x - 26} ${y + 14}M${x + 22} ${y + 7}L${x + 27} ${y + 15}`
  const candles: P[] = [
    [x - 34, y - 4],
    [x + 34, y - 4],
    [x - 16, y - 22],
    [x, y - 6],
  ]
  return (
    <g>
      <path d={arms} fill="none" stroke={PAPER} strokeWidth={5.6} strokeLinecap="round" />
      <path d={arms} fill="none" stroke={INK} strokeWidth={3} strokeLinecap="round" />
      {candles.map(([cx, cy], i) => (
        <g key={`${cx}-${cy}`}>
          <rect
            x={cx - 2.6}
            y={cy - 12}
            width={5.2}
            height={12}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.8}
          />
          <path
            className="lc-flicker"
            style={timing({ delay: 0.2 + ((i + k) % 3) * 0.25, dur: 0.8 })}
            d={`M${cx} ${cy - 12}C${cx - 3.6} ${cy - 15} ${cx - 2.4} ${cy - 20} ${cx} ${cy - 26}C${cx + 2.4} ${cy - 20} ${cx + 3.6} ${cy - 15} ${cx} ${cy - 12}Z`}
            fill={RED}
          />
        </g>
      ))}
    </g>
  )
}

/** The long table, its aged cloth, and the bride-cake under its cobwebs. */
function Table() {
  const m = marks()
  const { back, front, x0, x1, hem } = TABLE
  const { x, w, top } = CAKE
  return (
    <g>
      <path
        d={`M${x0} ${front}L${x0 + 14} ${back}H${x1}V${front}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d={`M${x0} ${front}H${x1}V${hem}H${x0}Z`} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={m.cloth} fill={INK} />
      {/* "like a black fungus": the cake under its webs */}
      <path
        d={`M${x - w / 2} ${back + 4}C${x - w / 2 + 4} ${top + 40} ${x - w / 4} ${top + 6} ${x - 6} ${top}C${x + 8} ${top - 4} ${x + w / 3} ${top + 16} ${x + w / 2 - 6} ${top + 44}C${x + w / 2} ${top + 56} ${x + w / 2 + 4} ${back - 4} ${x + w / 2 + 2} ${back + 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.webs} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      {/* speckled-legged spiders running home to it */}
      {(
        [
          [x - 20, top + 34],
          [x + 18, top + 52],
          [x - 46, back + 2],
        ] as P[]
      ).map(([sx, sy]) => (
        <g key={`${sx}-${sy}`}>
          <path
            d={`M${sx - 4} ${sy - 3}L${sx + 4} ${sy + 3}M${sx - 4} ${sy + 3}L${sx + 4} ${sy - 3}M${sx - 5} ${sy}H${sx + 5}`}
            stroke={PAPER}
            strokeWidth={0.9}
          />
          <circle cx={sx} cy={sy} r={1.9} fill={PAPER} />
        </g>
      ))}
    </g>
  )
}

// ── THE PEOPLE, from the figure kit ─────────────────────────────────────────

/**
 * The garden-chair: a light chair on wheels, pushed from behind by the handle
 * at its back. In the panel's own units, facing right.
 */
function GardenChair() {
  const wheel: P = [356, 290]
  return (
    <g>
      <path
        d="M322 182V252H392V244H334V182ZM314 178H336"
        fill="none"
        stroke={PAPER}
        strokeWidth={8}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M322 182V252H392V244H334V182ZM314 178H336"
        fill="none"
        stroke={INK}
        strokeWidth={4.6}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={wheel[0]} cy={wheel[1]} r={29} fill="none" stroke={PAPER} strokeWidth={8} />
      <circle cx={wheel[0]} cy={wheel[1]} r={29} fill="none" stroke={INK} strokeWidth={4.6} />
      <path
        d={[0, 45, 90, 135]
          .map((a) => {
            const c = Math.cos((a * Math.PI) / 180) * 27
            const s = Math.sin((a * Math.PI) / 180) * 27
            return `M${n(wheel[0] - c)} ${n(wheel[1] - s)}L${n(wheel[0] + c)} ${n(wheel[1] + s)}`
          })
          .join('')}
        stroke={INK}
        strokeWidth={2}
      />
      <circle cx={wheel[0]} cy={wheel[1]} r={4} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <circle cx={396} cy={309} r={10} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d="M388 252L396 300" stroke={PAPER} strokeWidth={6} />
      <path d="M388 252L396 300" stroke={INK} strokeWidth={3.4} />
    </g>
  )
}

/**
 * Miss Havisham in the chair, leaning towards Pip with her face to his bowed
 * head. Her near arm goes round his neck behind his head (she is drawn first,
 * so his head hides it), and her hand comes out over the back of his neck
 * (HAVISHAM_HAND, drawn after him): it lies on his nape, never across his
 * throat. Her far hand is clenched on the arm of the chair, and her mouth is
 * open on the words.
 */
const HAVISHAM_AT: P = [340, 320]
const HAVISHAM_SCALE = 1.3
const HAVISHAM_HEAD = 'translate(30 -128) rotate(4) scale(0.94)'
const HAVISHAM: Pose = {
  look: 'havisham',
  seated: true,
  body: { neck: [18, -110], hip: [0, -56] },
  head: { at: [30, -128], rot: 4 },
  legs: {
    far: [
      [-2, -56],
      [26, -58],
      [26, -2],
    ],
    near: [
      [2, -56],
      [30, -56],
      [31, -2],
    ],
  },
  far: {
    pts: [
      [12, -104],
      [20, -82],
      [36, -76],
    ],
    hand: 'grip',
  },
  near: {
    pts: [
      [20, -99],
      [48, -100],
      [72, -114],
    ],
    hand: 'none',
  },
  shoe: 'near',
}
/** Her mouth, open on the words, in the frame of her head: ink on her paper face. */
const HAVISHAM_MOUTH = 'M11.8 10.4a2.2 1.5 0 1 0 4.4 0a2.2 1.5 0 1 0 -4.4 0Z'
/** Her thin hand on the back of his neck, in her frame, the fingers apart. */
const HAVISHAM_HAND = hand([71, -115], 24, { size: 13, spread: 16, thumb: 1 })

/**
 * Pip, grown, facing her and bent forward over the chair, his head drawn
 * right down to hers and bowed, so that his face is turned to the floor, his
 * near hand braced on his own knee.
 */
const PIP_AT: P = [494, 322]
const PIP_SCALE = 1.3
const PIP: Pose = {
  look: 'pip',
  age: 'man',
  // Bent this far, a tailed coat's skirts would stand out level behind him;
  // his short coat hangs as cloth does.
  dress: 'jacket',
  eye: 'down',
  body: { neck: [38, -110], hip: [0, -70] },
  head: { at: [52, -112], rot: 70 },
  near: {
    pts: [
      [34, -106],
      [30, -76],
      [14, -46],
    ],
    hand: 'mitt',
    deg: 120,
  },
  far: {
    pts: [
      [30, -106],
      [32, -82],
      [33, -60],
    ],
    hand: 'mitt',
  },
  legs: {
    far: [
      [-3, -70],
      [-5, -36],
      [-7, -3],
    ],
    near: [
      [3, -70],
      [6, -36],
      [8, -3],
    ],
  },
}

function MissHavishamsCommand({ uid: _uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 170], push: 1.03 })}>
      {/* the dark room, cut lighter only round the chandeliers */}
      <path d={m.wall} fill={PAPER} />
      <path d={m.glowA + m.glowB} fill={PAPER} />
      <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
      <path d={m.floor} fill={PAPER} />
      <Table />
      {LAMPS.map((at, k) => (
        <Chandelier key={at[0]} at={at} k={k} />
      ))}
      <GardenChair />
      <Person pose={HAVISHAM} at={HAVISHAM_AT} scale={HAVISHAM_SCALE}>
        <path d={HAVISHAM_MOUTH} transform={HAVISHAM_HEAD} fill={INK} />
      </Person>
      <Person pose={PIP} at={PIP_AT} scale={PIP_SCALE} flip />
      <g
        transform={`translate(${HAVISHAM_AT[0]} ${HAVISHAM_AT[1]}) scale(${n(HAVISHAM_SCALE * 0.98)})`}
      >
        <Cut parts={HAVISHAM_HAND.map((q) => ({ ...q, tone: 'paper' as const }))} />
      </g>
    </g>
  )
}

export const missHavishamsCommand: LinocutArt = { width: W, height: H, Draw: MissHavishamsCommand }

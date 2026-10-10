import type { LinocutArt } from '@/lib/comics/types'
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

import { Person, seatedLegs, type P } from './people'

/**
 * Chapter 44: "Estella's engagement", the thirteenth moment in the guide's
 * timeline. Satis House, in Miss Havisham's dressing-room. Every detail is
 * from the held edition (src/data/full-texts/great-expectations.ts):
 *
 * - "In the room where the dressing-table stood, and where the wax candles
 *   burnt on the wall, I found Miss Havisham and Estella; Miss Havisham
 *   seated on a settee near the fire, and Estella on a cushion at her feet.
 *   Estella was knitting, and Miss Havisham was looking on." So the candles
 *   burn in sconces on the wall, the settee stands by the fire on the right,
 *   and Estella sits low on a cushion in front of it with her knitting.
 * - "I took the chair by the dressing-table, which I had often seen her
 *   occupy. With all that ruin at my feet and about me". The dressing-table
 *   is the one of Chapter 8, "a draped table with a gilded looking-glass",
 *   with the shoe "once white, now yellow" that "had never been worn" lying on
 *   it; "Dresses, less splendid than the dress she wore, and half-packed
 *   trunks, were scattered about"; "a clock in the room had stopped at twenty
 *   minutes to nine" (Chapter 8). So Pip sits in the arm-chair by the
 *   draped table and its looking-glass, a half-packed trunk spills a dress
 *   across the floor, and the clock on the chimney-piece shows twenty minutes
 *   to nine.
 * - The moment drawn: "She looked towards Miss Havisham, and considered for a
 *   moment with her work in her hands. Then she said, 'Why not tell you the
 *   truth? I am going to be married to him.' I dropped my face into my hands
 *   ... When I raised my face again, there was such a ghastly look upon Miss
 *   Havisham's". And earlier: "I saw Miss Havisham put her hand to her heart
 *   and hold it there". So Pip is bent forward in the chair with his face in
 *   his hands; Estella, composed, her knitting in her hands, faces him; Miss
 *   Havisham, a hand on her heart, stares at him over her, with her stick,
 *   which she strikes on the floor in this chapter.
 *
 * Estella's dress is not described in the chapter, so her gown is printed in
 * ink here, which makes her the one dark figure against Miss Havisham's
 * white; her face and the kit's dressed-up hair are as in every panel. The
 * spot colour is the fire alone; the candle flames are cut in paper, so no
 * red mark is near a face. Seeds: 4401 (the wall), 4402 (the floor), 4403 to
 * 4405 (the candles' light), 4406 (the drapery).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const BASE = 250
/** The wax candles in their sconces on the wall. */
const CANDLES: P[] = [
  [292, 92],
  [430, 80],
  [628, 96],
]
/** The fireplace on the right: its surround, the opening and the mantel. */
const FIRE = { x0: 716, x1: 850, mantel: 158, ox0: 742, ox1: 828, otop: 186 }
/** The dressing-table and its looking-glass. */
const TABLE = { x0: 34, x1: 168, top: 200 }
const GLASS = { cx: 101, cy: 128, rx: 40, ry: 58 }
/** The settee by the fire, behind Miss Havisham. */
const SETTEE = { x0: 532, x1: 706, back: 198, seat: 270 }

const PIP_AT: P = [212, 326]
const ESTELLA_AT: P = [556, 326]
const HAVISHAM_AT: P = [640, 326]
const FIG = 1.32

function light(x: number, y: number) {
  const c = Math.max(
    ...CANDLES.map(([cx, cy]) => clamp(1 - Math.hypot(x - cx, (y - cy) * 1.2) / 150)),
  )
  const f = clamp(1 - Math.hypot(x - 785, (y - 225) * 1.1) / 230) * 0.8
  return Math.max(c * 0.95, f, 0.04)
}

type Marks = {
  wall: string
  floor: string
  glows: string
  drape: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(4401), { x0: 0, x1: W, y0: 4, y1: BASE - 10 }, light, {
    spacing: 6.2,
  })
  // The floor: boards running to a point by the fire, dark away from it.
  const f = rng(4402)
  let floor = ''
  const V: P = [560, 60]
  for (let xt = -800; xt < 1700; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      const x0 = xt + (xb - xt) * t0
      const lit = light(x0, BASE + 20)
      const w = 1 + t0 * 2.6 + (1 - lit) * 2.2
      floor += wedge(
        x0,
        BASE + (H - BASE) * t0,
        xt + (xb - xt) * t1,
        BASE + (H - BASE) * t1,
        w,
        w + 0.6,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  const glows = CANDLES.map(([cx, cy], i) =>
    rays(rng(4403 + i), cx, cy - 6, { from: 9, to: 44, every: 9, width: 1.8 }),
  ).join('')
  // The drapery of the dressing-table: folds falling from its top to the floor.
  const d = rng(4406)
  let drape = ''
  for (let x = TABLE.x0 + 8; x < TABLE.x1 - 4; x += 13) {
    const sway = between(d, -2, 2)
    drape += gouge(x, TABLE.top + 10, x + sway, BASE + 2, between(d, 1, 1.6), between(d, -0.6, 0.6))
  }
  cached = { wall, floor, glows, drape }
  return cached
}

/** A wax candle in its sconce: a bracket on the wall, the candle, and its flame cut in paper. */
function Sconce({ at: [x, y] }: { at: P }) {
  return (
    <g strokeLinejoin="round">
      <path
        d={`M${x - 3} ${y + 26}C${x - 10} ${y + 22} ${x - 8} ${y + 12} ${x - 2} ${y + 12}H${x + 8}C${x + 10} ${y + 16} ${x + 6} ${y + 22} ${x + 2} ${y + 26}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      <rect x={x - 3} y={y - 4} width={6} height={16} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      <path
        className="lc-flicker"
        // Four flickers, ending by 4.3 seconds whatever the delay (they ran to 4.7).
        style={timing({ dur: 0.9, delay: 0.2 + (x % 7) * 0.08 })}
        d={`M${x} ${y - 5}C${x - 3} ${y - 9} ${x - 2} ${y - 14} ${x} ${y - 19}C${x + 2} ${y - 14} ${x + 3} ${y - 9} ${x} ${y - 5}Z`}
        fill={PAPER}
      />
    </g>
  )
}

/** The draped dressing-table and its gilded looking-glass, with the unworn shoe on it. */
function DressingTable({ drape }: { drape: string }) {
  const { x0, x1, top } = TABLE
  const { cx, cy, rx, ry } = GLASS
  return (
    <g strokeLinejoin="round">
      {/* the looking-glass: an oval in a carved frame, the glass dark */}
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx + 9}
        ry={ry + 9}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx + 5}
        ry={ry + 5}
        fill="none"
        stroke={PAPER}
        strokeWidth={2.6}
      />
      <path
        d={
          gouge(cx - 6, cy - ry - 13, cx + 6, cy - ry - 13, 2.4) +
          gouge(cx - rx - 10, cy - 6, cx - rx - 10, cy + 6, 2) +
          gouge(cx + rx + 10, cy - 6, cx + rx + 10, cy + 6, 2)
        }
        fill={PAPER}
      />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill={INK} stroke={PAPER} strokeWidth={1} />
      <path
        d={
          gouge(cx - 22, cy - 22, cx - 4, cy - 46, 1.2) +
          gouge(cx - 16, cy - 2, cx + 6, cy - 32, 0.9)
        }
        fill={PAPER}
      />
      <path
        d={`M${cx - 12} ${cy + ry + 6}L${cx - 16} ${top}M${cx + 12} ${cy + ry + 6}L${cx + 16} ${top}`}
        stroke={INK}
        strokeWidth={4}
      />
      {/* the draped table, its cloth falling to the floor */}
      <path
        d={`M${x0 - 4} ${top}H${x1 + 4}L${x1 + 8} ${BASE + 6}H${x0 - 8}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={drape} fill={PAPER} />
      <rect
        x={x0 - 6}
        y={top - 4}
        width={x1 - x0 + 12}
        height={7}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      {/* the shoe that was never worn, and jewels */}
      <path
        d={`M${x0 + 12} ${top - 4}L${x0 + 14} ${top - 12}C${x0 + 20} ${top - 13} ${x0 + 30} ${top - 10} ${x0 + 38} ${top - 6}L${x0 + 38} ${top - 4}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <g fill={PAPER} stroke={INK} strokeWidth={0.9}>
        <circle cx={x1 - 30} cy={top - 7} r={3} />
        <circle cx={x1 - 20} cy={top - 6} r={2.4} />
        <circle cx={x1 - 40} cy={top - 6} r={2} />
      </g>
    </g>
  )
}

/** The arm-chair by the dressing-table that Pip sits in, side on, its back behind him. */
function ArmChair() {
  const legs = 'M184 278V322M240 278V320M182 276V176'
  return (
    <g strokeLinejoin="round">
      <path d={legs} stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
      <path d={legs} stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d="M176 270H246L244 280H178Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d="M180 232H222Q228 232 228 238V248"
        fill="none"
        stroke={PAPER}
        strokeWidth={6.4}
        strokeLinecap="round"
      />
      <path
        d="M180 232H222Q228 232 228 238V248"
        fill="none"
        stroke={INK}
        strokeWidth={4}
        strokeLinecap="round"
      />
    </g>
  )
}

/** A half-packed trunk on the floor, its lid thrown back, a dress spilling over its side. */
function Trunk() {
  return (
    <g strokeLinejoin="round">
      {/* the lid, thrown back, its lining pale inside a dark rim */}
      <path
        d="M318 284L334 236L398 240L384 288Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M328 278L340 246L388 249L377 281Z" fill={PAPER} />
      <path d="M336 266L346 252M352 274L362 254M368 276L376 258" stroke={INK} strokeWidth={1} />
      <rect
        x={314}
        y={284}
        width={84}
        height={34}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M314 296H398M314 308H398" stroke={PAPER} strokeWidth={1.4} />
      {/* the dress spilling out over the front of the trunk and onto the floor */}
      <path
        d="M330 286C338 280 352 280 362 284C370 290 368 302 376 312C384 320 404 322 420 320L424 326C400 330 376 330 362 322C352 314 350 300 340 296C334 294 330 290 330 286Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d="M350 290C352 300 358 312 370 318M362 288C366 298 372 308 388 316"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

/** The settee by the fire, behind Miss Havisham: a padded back along the wall, the seat, legs. */
function Settee() {
  const { x0, x1, back, seat } = SETTEE
  return (
    <g strokeLinejoin="round">
      <path
        d={`M${x0} ${seat}V${back + 12}Q${x0} ${back} ${x0 + 14} ${back}H${x1 - 14}Q${x1} ${back} ${x1} ${back + 12}V${seat}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <g fill={PAPER}>
        {[0.15, 0.38, 0.62, 0.85].map((t) => (
          <circle key={t} cx={n(x0 + (x1 - x0) * t)} cy={back + 26} r={2.2} />
        ))}
      </g>
      <path d={gouge(x0 + 10, back + 44, x1 - 10, back + 44, 1)} fill={PAPER} />
      <rect
        x={x0 - 6}
        y={seat}
        width={x1 - x0 + 12}
        height={14}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${x0} ${seat + 14}V${seat + 34}M${x1} ${seat + 14}V${seat + 34}`}
        stroke={PAPER}
        strokeWidth={7}
        strokeLinecap="round"
      />
      <path
        d={`M${x0} ${seat + 14}V${seat + 34}M${x1} ${seat + 14}V${seat + 34}`}
        stroke={INK}
        strokeWidth={4.4}
        strokeLinecap="round"
      />
    </g>
  )
}

/** The fireplace on the right, its fire, and the clock stopped at twenty minutes to nine. */
function Fireplace() {
  const { x0, x1, mantel, ox0, ox1, otop } = FIRE
  const cx = (x0 + x1) / 2
  // Clock hands: the minute hand at forty minutes, the hour hand most of the
  // way from eight to nine.
  const hand = (deg: number, len: number) => {
    const a = ((deg - 90) * Math.PI) / 180
    return `M${cx} ${mantel - 20}L${n(cx + Math.cos(a) * len)} ${n(mantel - 20 + Math.sin(a) * len)}`
  }
  return (
    <g strokeLinejoin="round">
      <rect x={x0} y={mantel} width={x1 - x0} height={BASE - mantel} fill={PAPER} />
      <path
        d={
          gouge(x0 + 10, mantel + 12, x0 + 10, BASE - 4, 1.3) +
          gouge(x1 - 10, mantel + 12, x1 - 10, BASE - 4, 1.3) +
          gouge(ox0 + 6, mantel + 14, ox1 - 6, mantel + 14, 1)
        }
        fill={INK}
      />
      <rect x={x0 - 8} y={mantel - 7} width={x1 - x0 + 16} height={7} fill={INK} />
      <rect x={x0 - 10} y={mantel - 11} width={x1 - x0 + 20} height={4} fill={PAPER} />
      <path
        d={`M${ox0} ${BASE}V${otop + 12}Q${ox0} ${otop} ${ox0 + 12} ${otop}H${ox1 - 12}Q${ox1} ${otop} ${ox1} ${otop + 12}V${BASE}Z`}
        fill={INK}
      />
      <path
        d={`M${ox0 + 10} 228H${ox1 - 10}M${ox0 + 12} 235H${ox1 - 12}M${ox0 + 16} 228V246M${ox1 - 16} 228V246`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <g fill={RED}>
        <path d="M756 228C755 221 761 217 767 221C770 214 780 213 783 220C788 215 798 217 800 223C805 221 812 224 812 228Z" />
        <path
          className="lc-flicker"
          d="M767 221C764 213 769 206 772 199C775 206 779 213 776 221Z"
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8, delay: 0.4 })}
          d="M788 222C786 215 790 210 793 204C796 210 798 215 796 222Z"
        />
      </g>
      <rect x={x0 - 8} y={BASE} width={x1 - x0 + 16} height={8} fill={PAPER} />
      <rect x={x0 - 8} y={BASE + 8} width={x1 - x0 + 16} height={2} fill={INK} />
      {/* the clock on the chimney-piece, stopped at twenty minutes to nine */}
      <path
        d={`M${cx - 16} ${mantel - 11}V${mantel - 30}Q${cx - 16} ${mantel - 42} ${cx} ${mantel - 42}Q${cx + 16} ${mantel - 42} ${cx + 16} ${mantel - 30}V${mantel - 11}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <circle cx={cx} cy={mantel - 20} r={9.4} fill={PAPER} stroke={INK} strokeWidth={1} />
      <path
        d={hand(240, 7.4) + hand(260, 5)}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
  )
}

/** Estella's cushion on the floor, her knitting and its ball of wool. */
function Cushion() {
  return (
    <g strokeLinejoin="round">
      <path
        d="M512 318C510 308 516 302 530 302H572C584 302 590 308 588 318C586 324 578 326 566 326H526C516 326 513 323 512 318Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(522, 312, 578, 312, 0.9)} fill={PAPER} />
      <path
        d="M588 312L596 318M588 312L594 322"
        stroke={PAPER}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <circle cx={474} cy={318} r={8} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path
        d="M467 316Q474 310 481 316M468 321Q475 314 482 320"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
    </g>
  )
}

function EstellasEngagement() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
      <path d={m.wall} fill={PAPER} />
      <path d={m.glows} fill={PAPER} />
      <rect x={0} y={BASE - 10} width={W} height={6} fill={PAPER} />
      <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      {CANDLES.map((c) => (
        <Sconce key={c[0]} at={c} />
      ))}
      <Fireplace />
      <DressingTable drape={m.drape} />
      <Trunk />
      <Settee />
      <ArmChair />

      {/* Pip in the arm-chair by the dressing-table, his face dropped into his hands */}
      <Person
        at={PIP_AT}
        scale={FIG}
        pose={{
          look: 'pip',
          age: 'man',
          eye: 'down',
          head: { at: [55, -118], rot: 48 },
          body: { neck: [42, -102], hip: [0, -50] },
          legs: seatedLegs(48, 36),
          far: {
            pts: [
              [36, -98],
              [30, -60],
              [54, -90],
            ],
            hand: 'mitt',
            deg: -58,
          },
          near: {
            pts: [
              [42, -96],
              [36, -58],
              [60, -88],
            ],
            hand: 'mitt',
            deg: -62,
          },
        }}
      />

      {/* Miss Havisham on the settee, a hand on her heart, her stick before her */}
      <Person
        at={HAVISHAM_AT}
        scale={FIG}
        flip
        pose={{
          look: 'havisham',
          seated: true,
          head: { rot: 2 },
          body: { neck: [3, -100], hip: [0, -46] },
          legs: seatedLegs(44, 34),
          far: {
            pts: [
              [0, -94],
              [14, -74],
              [30, -66],
            ],
            hand: 'grip',
            deg: 6,
          },
          // her hand pressed flat on her heart, not held up
          near: {
            pts: [
              [5, -93],
              [13, -72],
              [8, -80],
            ],
            hand: 'mitt',
            deg: -84,
          },
        }}
      >
        {/* the crutch-headed stick she strikes on the floor */}
        <path d="M33 -64L37 0M27 -66H40" stroke={PAPER} strokeWidth={5.4} strokeLinecap="round" />
        <path d="M33 -64L37 0M27 -66H40" stroke={INK} strokeWidth={2.8} strokeLinecap="round" />
      </Person>

      <Cushion />
      {/* Estella on the cushion at her feet, her knitting in her hands */}
      <Person
        at={ESTELLA_AT}
        scale={FIG}
        flip
        pose={{
          look: 'estella',
          age: 'woman',
          tone: 'ink',
          seated: true,
          eye: 'proud',
          head: { rot: -4 },
          body: { neck: [3, -70], hip: [0, -16] },
          legs: {
            far: [
              [-2, -16],
              [28, -22],
              [44, -2],
            ],
            near: [
              [2, -16],
              [32, -20],
              [50, -2],
            ],
          },
          far: {
            pts: [
              [2, -64],
              [12, -44],
              [28, -44],
            ],
            hand: 'grip',
            deg: -20,
          },
          near: {
            pts: [
              [5, -63],
              [16, -42],
              [33, -41],
            ],
            hand: 'grip',
            deg: -30,
          },
        }}
      >
        {/* the needles and the knitting between them */}
        <path
          d="M24 -40L38 -62M30 -38L46 -56"
          stroke={PAPER}
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d="M24 -40L38 -62M30 -38L46 -56"
          stroke={INK}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        <path d="M28 -46L36 -50L40 -38L32 -32Z" fill={PAPER} stroke={INK} strokeWidth={0.9} />
        <path d="M30 -43L37 -46M31 -39L38 -42M32 -35L39 -38" stroke={INK} strokeWidth={0.7} />
      </Person>
    </g>
  )
}

export const estellasEngagement: LinocutArt = { width: W, height: H, Draw: EstellasEngagement }

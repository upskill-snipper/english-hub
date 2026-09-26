import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
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

import { CutFigure, EYE, HEAD_MAN, Person, RUFF, type P, type Pose } from './people'

/**
 * The court of justice of Act 4, Scene 1, cut once for the three panels drawn
 * in it: "The trial: mercy refused", "The trial: the reversal" and "The rings
 * given away", so a student knows the room again from one moment to the
 * next. The three are the same view, the same stone and the same light.
 *
 * The held edition (src/data/full-texts/the-merchant-of-venice.ts) heads the
 * scene "Venice. A court of justice." and says nothing more of the room. What
 * the scene does give:
 *
 * - "Enter the Duke, the Magnificoes, Antonio, Bassanio, Gratiano, Salerio
 *   and others." DUKE: "Make room, and let him stand before our face." So the
 *   Duke sits above the court and the parties stand before him on the floor.
 *   He sits behind the bench of a raised tribunal in the middle of the back
 *   wall, under a canopy, with a plain hanging behind him printed pale, so
 *   that he reads black against it (the kit's 'duke', ./people.tsx).
 * - The Magnificoes sit in judgment with him ("Upon my power I may dismiss
 *   this court"): a row of three on each side of the tribunal, on a raised
 *   bench behind a rail, seen from the shoulders up, turned towards the floor
 *   (MAGNIFICOES). Nothing is said of them but their rank, so they are
 *   Venetian gentlemen in dark gowns and soft round caps, smaller and further
 *   back than the people below them. They leave with the Duke ("Exeunt Duke
 *   and his train"), so "The rings given away" draws the benches and the
 *   tribunal empty.
 * - DUKE: "Sir, I entreat you home with me to dinner." It is day, so the
 *   light comes in at two high round-arched windows, one at each end of the
 *   wall, and the stone is cut paler towards them. The benches are panelled
 *   in pale wood, so the people standing on the floor read black against
 *   them.
 *
 * Nothing is taken from a film or stage production. Seeds: 15101 (the wall),
 * 15102 (the floor), 15103 and 15104 (the windows' light).
 */

export const W = 860
export const H = 340
/** Where the wall meets the floor. */
export const FLOOR = 246
/** Where the people stand. */
export const FEET = 324

export { type P }

/** The two high windows, one at each end of the wall. */
const WIN_L = { x0: 40, x1: 88, top: 62, bottom: 164 }
const WIN_R = { x0: 772, x1: 820, top: 62, bottom: 164 }
/** The Duke's tribunal: its bench and the canopy over his seat, centred on `cx`. */
export const TRIBUNAL = { x0: 350, x1: 510, bench: 152, cx: 430 }
/** The Magnificoes' raised benches: the top of their rail, and their two runs. */
const RAIL = 158
const BENCHES: [number, number][] = [
  [106, 342],
  [518, 754],
]
/** Where the Duke sits: his feet would be here, hidden by the bench. */
export const DUKE_AT: P = [TRIBUNAL.cx + 2, 262]

type Marks = { wall: string; winRays: string; floor: string; shade: string; panels: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(15101)
  const light = (x: number, y: number) =>
    Math.max(
      0.06,
      clamp(1 - Math.hypot(x - 64, (y - 112) * 0.8) / 230) * 0.95,
      clamp(1 - Math.hypot(x - 796, (y - 112) * 0.8) / 230) * 0.95,
    )
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light, {
    spacing: 6,
    len: [16, 60],
    gap: [6, 20],
    max: 3.4,
  })
  const winRays =
    rays(rng(15103), 64, 110, { from: 56, to: 150, every: 11, width: 2.2 }) +
    rays(rng(15104), 796, 110, { from: 56, to: 150, every: 11, width: 2.2 })

  // The floor: paper flags, ink joints running back to the tribunal.
  const f = rng(15102)
  let floor = ''
  const vx = 430
  const vy = 96
  for (let xt = -700; xt < W + 700; xt += 56) {
    const xb = vx + (xt - vx) * ((H - vy) / (FLOOR - vy))
    floor += wedge(xt, FLOOR, xb, H, 0.9, 3)
  }
  for (const y of [256, 270, 290, 316]) {
    let x = between(f, -20, 0)
    while (x < W) {
      const len = between(f, 60, 150)
      floor += gouge(x, y + between(f, -0.6, 0.6), x + len, y, 0.8 + (y - FLOOR) * 0.024)
      x += len + between(f, 2, 8)
    }
  }
  // Shade across the flags at the foot of the benches.
  let shade = ''
  for (let y = FLOOR + 3; y < FLOOR + 20; y += 3.2)
    shade += gouge(-10, y, W + 10, y, 2.4 - (y - FLOOR) * 0.11)

  // The panelling of the benches' fronts: ink mouldings on pale wood.
  let panels = ''
  for (const [a, b] of BENCHES)
    for (let x = a + 8; x < b - 30; x += 38) panels += `M${x} 176H${x + 30}V234H${x}Z`
  cached = { wall, winRays, floor, shade, panels }
  return cached
}

/** A round-arched window in the wall, deep in its reveal, full of daylight. */
function Window({ win }: { win: typeof WIN_L }) {
  const cx = (win.x0 + win.x1) / 2
  const r = (win.x1 - win.x0) / 2
  const arch = (d: number) =>
    `M${win.x0 - d} ${win.bottom + d * 0.5}V${win.top + r}A${r + d} ${r + d} 0 0 1 ${win.x1 + d} ${win.top + r}V${win.bottom + d * 0.5}Z`
  return (
    <g>
      <path d={arch(9)} fill={PAPER} />
      <path d={arch(4)} fill={INK} />
      <path d={arch(0)} fill={PAPER} />
      <path
        d={`M${cx} ${win.top}V${win.bottom}M${win.x0} ${win.top + r + 6}H${win.x1}M${win.x0} ${n((win.top + r + 6 + win.bottom) / 2)}H${win.x1}`}
        stroke={INK}
        strokeWidth={2.4}
      />
      <path
        d={`M${win.x0 - 14} ${win.bottom + 4}H${win.x1 + 14}V${win.bottom + 11}H${win.x0 - 14}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.6}
      />
    </g>
  )
}

/**
 * One of the Magnificoes, seen from the shoulders up over the rail: a dark
 * gown, the ruff at his neck, a soft round cap. `f` is the way he faces.
 */
const MAG_CAP =
  'M-18 -7.6C-22 -15 -15 -25.4 0 -26C13 -26.4 21 -21 19.6 -13C12 -10.6 -4 -9.4 -18 -7.6Z'
const MAG_CAP_CUT = gouge(-17, -10.2, 18.6, -14, 0.9, -0.6)
const MAG_BUST = 'M-26 60C-26 40 -22 30 -12 24C-4 21 6 21 13 24C22 29 26 40 26 60Z'
export const MAGNIFICOES: [number, 1 | -1][] = [
  [150, 1],
  [214, 1],
  [278, 1],
  [582, -1],
  [646, -1],
  [710, -1],
]
function Magnifico({ at: [x, y], f }: { at: P; f: 1 | -1 }) {
  return (
    <CutFigure
      parts={[{ d: MAG_BUST }, { d: HEAD_MAN }, { d: MAG_CAP }]}
      transform={`translate(${x} ${y}) scale(${f * 0.8} 0.8)`}
    >
      <path d={MAG_CAP_CUT} fill={PAPER} />
      <path d={RUFF} fill={PAPER} stroke={INK} strokeWidth={0.8} />
      <path d={EYE} fill={PAPER} />
    </CutFigure>
  )
}

/**
 * The room: wall, windows, the tribunal, the benches and the floor. With
 * `sitting`, the Duke is in his seat (in `duke`'s pose, turned to face left
 * with `flip`) and the Magnificoes on their benches; without, the court has risen
 * and the seats are empty. Draw the people on the floor over it.
 */
export function Court({
  duke,
  sitting = true,
}: {
  duke?: { pose: Pose; flip?: boolean }
  sitting?: boolean
}) {
  const m = marks()
  const t = TRIBUNAL
  return (
    <>
      <path d={m.wall} fill={PAPER} />
      <path d={m.winRays} fill={PAPER} />
      <Window win={WIN_L} />
      <Window win={WIN_R} />

      {/* the canopy over the Duke's seat, and the hanging behind it */}
      <path d={`M${t.cx - 60} 40H${t.cx + 60}V${t.bench}H${t.cx - 60}Z`} fill={PAPER} />
      <path
        d={[-40, -20, 0, 20, 40]
          .map((dx) => gouge(t.cx + dx, 58, t.cx + dx, t.bench - 4, 1.2))
          .join('')}
        fill={INK}
      />
      <path
        d={`M${t.cx - 78} 22H${t.cx + 78}V36H${t.cx - 78}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          `M${t.cx - 74} 36H${t.cx + 74}V42` +
          Array.from({ length: 10 }, (_, i) => {
            const x = t.cx + 74 - i * 14.8
            return `Q${n(x - 7.4)} 53 ${n(x - 14.8)} 42`
          }).join('') +
          'Z'
        }
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      {/* the back of the Duke's chair */}
      <path
        d={`M${t.cx - 30} ${t.bench}V74Q${t.cx - 30} 64 ${t.cx - 20} 64H${t.cx + 20}Q${t.cx + 30} 64 ${t.cx + 30} 74V${t.bench}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <circle cx={t.cx - 30} cy={70} r={5} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <circle cx={t.cx + 30} cy={70} r={5} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      {sitting && duke && <Person pose={duke.pose} at={DUKE_AT} flip={duke.flip} />}

      {/* the Magnificoes on their raised benches, behind the rail */}
      {sitting && MAGNIFICOES.map(([x, f]) => <Magnifico key={x} at={[x, RAIL - 30]} f={f} />)}
      {BENCHES.map(([a, b]) => (
        <g key={a}>
          <path d={`M${a} ${RAIL + 8}H${b}V${FLOOR}H${a}Z`} fill={PAPER} />
          <path
            d={`M${a - 6} ${RAIL}H${b + 6}V${RAIL + 8}H${a - 6}Z`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.8}
          />
          <path
            d={`M${a} ${RAIL + 8}V${FLOOR}M${b} ${RAIL + 8}V${FLOOR}`}
            stroke={INK}
            strokeWidth={2.4}
          />
        </g>
      ))}
      <path d={m.panels} fill="none" stroke={INK} strokeWidth={1.6} />

      {/* the Duke's bench, panelled, and the steps up to the tribunal */}
      <path
        d={`M${t.x0} ${t.bench}H${t.x1}V${FLOOR - 30}H${t.x0}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={`M${t.x0 - 6} ${t.bench - 8}H${t.x1 + 6}V${t.bench + 1}H${t.x0 - 6}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        d={[0, 1, 2, 3]
          .map((i) => {
            const x = t.x0 + 10 + i * 36
            return `M${x} ${t.bench + 10}H${x + 28}V${FLOOR - 40}H${x}Z`
          })
          .join('')}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={`M${t.x0 - 12} ${FLOOR - 30}H${t.x1 + 12}V${FLOOR - 20}H${t.x0 - 12}ZM${t.x0 - 24} ${FLOOR - 20}H${t.x1 + 24}V${FLOOR - 10}H${t.x0 - 24}ZM${t.x0 - 36} ${FLOOR - 10}H${t.x1 + 36}V${FLOOR}H${t.x0 - 36}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.8}
      />

      {/* the floor */}
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />
      <rect x={0} y={FLOOR - 1} width={W} height={3} fill={INK} />
    </>
  )
}

/** A shadow on the paper floor under a standing figure: a few tapering cuts. */
export function footShadow(cx: number, halfW: number, y = FEET) {
  let d = ''
  for (let k = 0; k < 4; k++) {
    const w = halfW * (1 - k * 0.18)
    d += gouge(cx - w, y + k * 3, cx + w, y + k * 3 + 0.4, 1.8 - k * 0.35)
  }
  return d
}

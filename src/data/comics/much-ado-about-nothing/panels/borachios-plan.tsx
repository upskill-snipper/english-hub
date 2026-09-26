import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 2, Scene 2: "Borachio's plan", the fourth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1519, src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "Another room in Leonato's house. Enter Don John and Borachio." The
 *   scene follows the masked ball straight on ("It is so; the Count Claudio
 *   shall marry the daughter of Leonato"), so it is night. The room is dark
 *   but for the moonlight falling in at a tall open window.
 * - "I can, at any unseasonable instant of the night, appoint her to look
 *   out at her lady's chamber window"; "to see me at her chamber window, hear
 *   me call Margaret Hero". The plan turns on a window, so the one this room
 *   looks out on is drawn: across the court the far wing of the house stands
 *   in the moonlight with its windows dark but one, high up, lit, and that
 *   one is the spot colour. Nobody is at it: Margaret and Hero are not in the
 *   scene.
 * - "Proof enough to misuse the Prince, to vex Claudio, to undo Hero, and kill
 *   Leonato." Borachio, in his round cap, stands at the window and points
 *   across the court at the lit window, laying out the plan.
 * - "Show me briefly how."; "Grow this to what adverse issue it can, I will
 *   put it in practice. Be cunning in the working this, and thy fee is a
 *   thousand ducats." Don John, in his tall hat and dark cloak, leans to look
 *   where Borachio points, and holds up a heavy purse in his other hand: the
 *   fee he promises. The purse is not in the text; the thousand ducats are,
 *   and the purse is how a picture can say them.
 *
 * The people are cut from ./people.tsx. Nothing is taken from a film,
 * television or stage production. Seeds: 1401 (wall), 1402 (floor), 1403 (the
 * far wing), 1404 (sky), 1405 (the lit window's light).
 */

const W = 860
const H = 340
/** The foot of the wall, and where the two men stand. */
const FLOOR = 262
const FEET = 324
/** The window in this room: its opening. */
const WIN = { x0: 456, x1: 792, top: 40, sill: 236 }
/** The lit window across the court. */
const TARGET: P = [700, 112]
const MOON: P = [520, 72]

type Marks = {
  wall: string
  floor: string
  sky: string
  stars: string
  wing: string
  glow: string
  moonHalo: string
  shaft: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // This room: dark, a little light round the window.
  const wall = gougeField(
    rng(1401),
    { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 },
    (x, y) => clamp(0.5 - Math.hypot(x - 620, (y - 150) * 1.2) / 700, 0.03, 1),
    { spacing: 6, len: [20, 66], gap: [6, 18], max: 3 },
  )
  // The floor, with the moonlight lying across it from the window.
  const floor = gougeField(
    rng(1402),
    { x0: 0, x1: W, y0: FLOOR + 4, y1: H },
    (x, y) =>
      clamp(0.1 + (x > WIN.x0 - (y - FLOOR) * 1.6 && x < WIN.x1 + (y - FLOOR) * 0.4 ? 0.62 : 0)),
    { spacing: 6, len: [18, 60], gap: [6, 18], max: 3 },
  )
  // The night sky over the far wing: ink, cut with a few long bars.
  const sky = gougeField(
    rng(1404),
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.top, y1: 120 },
    (x, y) => clamp(0.1 + (y - WIN.top) / 400),
    { spacing: 7, len: [30, 90], gap: [20, 50], max: 2 },
  )
  const r = rng(1406)
  let stars = ''
  for (let i = 0; i < 14; i++) {
    const x = between(r, WIN.x0 + 8, WIN.x1 - 8)
    const y = between(r, WIN.top + 6, 84)
    if (Math.hypot(x - MOON[0], y - MOON[1]) < 26) continue
    stars += gouge(x - 2.4, y, x + 2.4, y, 0.9) + gouge(x, y - 2.4, x, y + 2.4, 0.9)
  }
  // The far wing of the house in the moonlight: pale stone, its courses cut in ink.
  const wing = gougeField(rng(1403), { x0: WIN.x0, x1: WIN.x1, y0: 92, y1: WIN.sill }, () => 0.75, {
    spacing: 6,
    len: [20, 60],
    gap: [3, 8],
    max: 2.6,
  })
  const glow = rays(rng(1405), TARGET[0], TARGET[1], { from: 16, to: 50, every: 12, width: 2.4 })
  const moonHalo = arcDashes(rng(1407), MOON[0], MOON[1], 22, 0, Math.PI * 2, [4, 9], [3, 7])
  // The shaft of moonlight from the window down across the floor.
  const shaft =
    wedge(WIN.x0 + 20, FLOOR + 2, WIN.x0 - 120, H + 4, 1, 3) +
    wedge(WIN.x1 - 10, FLOOR + 2, WIN.x1 - 20, H + 4, 1, 3)
  cached = { wall, floor, sky, stars, wing, glow, moonHalo, shaft }
  return cached
}

/** The windows of the far wing, dark: [x, y, w, h]. The lit one is TARGET's. */
const FAR_WINDOWS: [number, number, number, number][] = [
  [474, 100, 26, 34],
  [532, 100, 26, 34],
  [590, 100, 26, 34],
  [640, 100, 26, 34],
  [750, 100, 26, 34],
  [474, 170, 26, 40],
  [532, 170, 26, 40],
  [590, 170, 26, 40],
  [646, 170, 26, 40],
  [700, 170, 26, 40],
  [752, 170, 26, 40],
]
const WING_ROOF = `M${WIN.x0} 92L${WIN.x1} 92L${WIN.x1} 84L${WIN.x0} 84Z`

/**
 * A heavy purse held up by its gathered neck: the fee. In the frame of the
 * fist that holds it, the neck at (0, 0): a frill above the fist, the cord's
 * ends hanging, and the full bag below with its pleats running down from the
 * neck, cut in paper.
 */
const PURSE =
  'M-2.6 0C-3.4 4 -7 7 -10 11C-14 16 -15 23 -11 28C-7 32 7 32 11 28C15 23 14 16 10 11C7 7 3.4 4 2.6 0Z' +
  'M-3 0L-6 -9L-2 -6L0 -10L2 -6L6 -9L3 0Z'
const PURSE_CORD = 'M-2 2C-6 6 -8 10 -7 14M2 2C5 7 6 10 5 15'
const PURSE_CUTS =
  gouge(-1.6, 5, -8, 26, 0.9, -0.8) + gouge(1.4, 5, 6, 26, 0.9, 0.8) + gouge(0, 6, 0, 28, 0.8)

function BorachiosPlan({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <rect x={WIN.x0} y={WIN.top} width={WIN.x1 - WIN.x0} height={WIN.sill - WIN.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={`M0 ${FLOOR}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.shaft} fill={PAPER} />

        {/* the window, and the night beyond it */}
        <g clipPath={`url(#${winClip})`}>
          <rect
            x={WIN.x0}
            y={WIN.top}
            width={WIN.x1 - WIN.x0}
            height={WIN.sill - WIN.top}
            fill={INK}
          />
          <path d={m.sky} fill={PAPER} />
          <path d={m.stars} fill={PAPER} />
          <circle cx={MOON[0]} cy={MOON[1]} r={13} fill={PAPER} />
          <path d={m.moonHalo} fill="none" stroke={PAPER} strokeWidth={1.2} />
          {/* the far wing, pale in the moonlight */}
          <rect x={WIN.x0} y={92} width={WIN.x1 - WIN.x0} height={WIN.sill - 92} fill={PAPER} />
          <path d={m.wing} fill={INK} />
          <path d={WING_ROOF} fill={INK} />
          <path d={`M${WIN.x0} 150H${WIN.x1}`} stroke={INK} strokeWidth={3} />
          {FAR_WINDOWS.map(([x, y, w, h]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill={INK} />
          ))}
          {/* her lady's chamber window, lit */}
          <g className="lc-fade-in" style={timing({ delay: 0.6, dur: 1.2 })}>
            <path d={m.glow} fill={PAPER} />
            <rect x={TARGET[0] - 15} y={TARGET[1] - 20} width={30} height={40} fill={INK} />
            <rect x={TARGET[0] - 11} y={TARGET[1] - 16} width={22} height={32} fill={RED} />
            <path
              d={`M${TARGET[0]} ${TARGET[1] - 16}V${TARGET[1] + 16}M${TARGET[0] - 11} ${TARGET[1]}H${TARGET[0] + 11}`}
              stroke={INK}
              strokeWidth={2.2}
            />
          </g>
          <path
            d={`M${TARGET[0] - 22} ${TARGET[1] + 21}H${TARGET[0] + 22}`}
            stroke={INK}
            strokeWidth={3}
          />
        </g>
        {/* the window's stone frame, its mullion and one casement swung open */}
        <rect
          x={WIN.x0 - 10}
          y={WIN.top - 10}
          width={WIN.x1 - WIN.x0 + 20}
          height={WIN.sill - WIN.top + 10}
          fill="none"
          stroke={INK}
          strokeWidth={14}
        />
        <rect
          x={WIN.x0 - 3}
          y={WIN.top - 3}
          width={WIN.x1 - WIN.x0 + 6}
          height={WIN.sill - WIN.top + 3}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${WIN.x0 - 18} ${WIN.sill}H${WIN.x1 + 18}V${WIN.sill + 10}H${WIN.x0 - 18}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d={`M${WIN.x1} ${WIN.top}L${WIN.x1 + 44} ${WIN.top + 18}V${WIN.sill - 8}L${WIN.x1} ${WIN.sill}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(WIN.x1 + 14, WIN.top + 26, WIN.x1 + 14, WIN.sill - 14, 1.4) +
            gouge(WIN.x1 + 30, WIN.top + 32, WIN.x1 + 30, WIN.sill - 14, 1.4) +
            gouge(WIN.x1 + 4, 136, WIN.x1 + 40, 140, 1.4)
          }
          fill={PAPER}
        />

        {/* a high-backed chair on the left, pushed back */}
        <path
          d="M92 322V146H100V214H150V230H100V322ZM146 230V322"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M146 230V322" stroke={INK} strokeWidth={6} />
        <path d="M146 230V322" stroke={PAPER} strokeWidth={1.2} />
        <path d="M96 150V210" stroke={PAPER} strokeWidth={1.4} />
        <path d="M86 146H106" stroke={PAPER} strokeWidth={3} />

        {/* Don John, leaning to look, the purse held up in his hand */}
        <Person
          at={[268, FEET]}
          scale={1.14}
          pose={{
            look: 'don-john',
            head: { at: [8, -158], rot: 12 },
            far: {
              pts: [
                [-4, -128],
                [-9, -100],
                [-5, -76],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [16, -104],
                [30, -118],
              ],
              hand: 'mitt',
              deg: -60,
            },
          }}
        >
          <g transform="translate(35 -122)">
            <path d={PURSE} fill={INK} stroke={PAPER} strokeWidth={3.2} strokeLinejoin="round" />
            <path d={PURSE} fill={INK} />
            <path d={PURSE_CUTS} fill={PAPER} />
            <path d={PURSE_CORD} fill="none" stroke={PAPER} strokeWidth={1} />
          </g>
        </Person>

        {/* Borachio at the window, pointing across the court at the lit window */}
        <Person
          at={[404, FEET]}
          scale={1.14}
          pose={{
            look: 'borachio',
            head: { rot: -8 },
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-12, -3],
              ],
              near: [
                [3, -70],
                [10, -36],
                [16, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-9, -100],
                [-5, -76],
              ],
            },
            near: {
              pts: [
                [5, -130],
                [26, -134],
                [48, -142],
              ],
              hand: 'point',
              deg: -12,
              thumb: 1,
            },
          }}
        />
      </g>
    </>
  )
}

export const borachiosPlan: LinocutArt = { width: W, height: H, Draw: BorachiosPlan }

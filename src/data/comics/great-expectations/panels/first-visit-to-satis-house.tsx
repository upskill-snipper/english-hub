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

import { Person } from './people'

/**
 * Chapter 8: "First visit to Satis House", the third moment in the guide's
 * timeline, at the instant of its quotation, before the first game of cards
 * is out. Every detail is from the chapter in the held text
 * (src/data/full-texts/great-expectations.ts):
 *
 * - "I ... found myself in a pretty large room, well lighted with wax
 *   candles. No glimpse of daylight was to be seen in it ... prominent in it
 *   was a draped table with a gilded looking-glass". So the room is dark but
 *   for candles, their flames the spot colour, high on the gilded glass and
 *   on the wall, and the draped dressing-table stands at the right.
 * - "She was dressed in rich materials—satins, and lace, and silks—all of
 *   white. Her shoes were white. And she had a long white veil dependent from
 *   her hair, and she had bridal flowers in her hair, but her hair was white.
 *   Some bright jewels sparkled on her neck and on her hands"; "she had but
 *   one shoe on—the other was on the table near her hand"; "her watch and
 *   chain were not put on, and some lace for her bosom lay with those
 *   trinkets, and with her handkerchief, and gloves, and some flowers, and a
 *   Prayer-book, all confusedly heaped about the looking-glass"; "Dresses,
 *   less splendid than the dress she wore, and half-packed trunks, were
 *   scattered about"; "everything within my view which ought to be white, had
 *   been white long ago, and had lost its lustre, and was faded and yellow".
 *   So Miss Havisham, the kit's figure (./people.tsx), sits stooped in her
 *   arm-chair before the dressing-table, all in white, one white shoe on her
 *   foot and the other on the table, with the watch and chain, the jewels, the
 *   flowers, the gloves and the Prayer-book heaped by the glass; the drape,
 *   which was white once, is printed faded, hatched over; a half-packed trunk
 *   spills a dress at the left.
 * - "her watch had stopped at twenty minutes to nine, and ... a clock in the
 *   room had stopped at twenty minutes to nine". So the clock on the wall
 *   says twenty to nine.
 * - "So we sat down to cards"; "She threw the cards down on the table";
 *   "'He calls the knaves, Jacks, this boy!' said Estella with disdain,
 *   before our first game was out. 'And what coarse hands he has! And what
 *   thick boots!'"; "I had never thought of being ashamed of my hands
 *   before"; "You say nothing of her," remarked Miss Havisham to me, as she
 *   looked on. So the two children sit at a small table with their cards;
 *   Estella, pale and proud with her chin up, points at Pip's hands, and Pip,
 *   in his jacket and thick boots, looks down at the hand he holds open; Miss
 *   Havisham looks on.
 *
 * Mr Pumblechook, who brought Pip, was stopped at the gate and is not in the
 * room. Pip's vision in the brewery later that day is never drawn (see
 * ./people.tsx).
 *
 * Seeds: 1301 (the walls in the candlelight), 1302 (the floor), 1303 (the
 * candles' light), 1304 (the faded drape).
 */

const W = 860
const H = 340
const FLOOR = 280
/** The dressing-table, its gilded glass and the candles on it. */
const TABLE = { x0: 640, x1: 836, top: 214 }
const GLASS = { x0: 680, x1: 796, top: 70, foot: 204 }
const CANDLES: [number, number][] = [
  [660, 118],
  [816, 118],
  [138, 112],
]
const CLOCK: [number, number] = [496, 76]

type Marks = {
  wall: string
  floor: string
  candleRays: string[]
  drape: string
  drapeFolds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The walls are dark: only the candles light them.
  const light = (x: number, y: number) =>
    Math.max(
      ...CANDLES.map(([cx, cy]) => clamp(1 - Math.hypot(x - cx, (y - cy) * 1.2) / 190) ** 1.4),
      0.06,
    )
  const wall = gougeField(rng(1301), { x0: 0, x1: W, y0: 4, y1: FLOOR }, light, {
    spacing: 6,
    len: [12, 44],
    gap: [6, 18],
    max: 3.4,
  })
  const f = rng(1302)
  let floor = ''
  for (let y = FLOOR + 6; y < H; y += 9 + (y - FLOOR) * 0.12)
    for (let x = between(f, -20, 0); x < W; x += between(f, 40, 90))
      floor += gouge(
        x,
        y,
        x + between(f, 20, 50),
        y + between(f, -0.5, 0.5),
        0.6 + (y - FLOOR) * 0.012,
      )
  const candleRays = CANDLES.map(([cx, cy], i) =>
    rays(rng(1303 + i * 7), cx, cy - 4, { from: 12, to: 70, every: 9, width: 2.2 }),
  )
  // The drape of the dressing-table, white once, now faded: paper hatched over.
  const d = rng(1304)
  let drape = ''
  for (let y = TABLE.top + 8; y < FLOOR + 6; y += 3.4)
    for (let x = TABLE.x0 + between(d, 0, 6); x < TABLE.x1; x += between(d, 10, 18))
      drape += gouge(x, y, x + between(d, 4, 9), y + between(d, -0.3, 0.3), 0.5)
  let drapeFolds = ''
  for (let x = TABLE.x0 + 14; x < TABLE.x1 - 6; x += 22)
    drapeFolds += wedge(x, TABLE.top + 8, x + between(d, -4, 4), FLOOR + 6, 0.6, 2.2)
  cached = { wall, floor, candleRays, drape, drapeFolds }
  return cached
}

/** A playing card, face up, at (x, y), turned `a` degrees. */
function card(x: number, y: number, a: number, key: string) {
  return (
    <g key={key} transform={`translate(${x} ${y}) rotate(${a})`}>
      <rect
        x={-4.4}
        y={-6.4}
        width={8.8}
        height={12.8}
        rx={1}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.9}
      />
      <path d="M-1.6 -2.6h3.2M-1.6 2.4h3.2" stroke={INK} strokeWidth={1.1} />
    </g>
  )
}

/** A candlestick with its candle, the flame at (x, y). */
function Candle({ x, y, i }: { x: number; y: number; i: number }) {
  return (
    <>
      <rect x={x - 3} y={y + 6} width={6} height={22} fill={PAPER} stroke={INK} strokeWidth={1} />
      <path
        d={`M${x - 7} ${y + 30}H${x + 7}L${x + 4} ${y + 34}H${x - 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
      />
      <path
        className="lc-flicker"
        // Four flickers, the last candle's ending by 4.2 seconds (it ran to 4.8).
        style={timing({ dur: 0.8 + i * 0.05, delay: 0.2 + i * 0.2 })}
        d={`M${x} ${y + 6}C${x - 4} ${y + 2} ${x - 3} ${y - 4} ${x} ${y - 10}C${x + 3} ${y - 4} ${x + 4} ${y + 2} ${x} ${y + 6}Z`}
        fill={RED}
      />
    </>
  )
}

function FirstVisit({ uid }: ArtProps) {
  const m = marks()
  const glassClip = `${uid}-glass`
  // The clock's hands at twenty minutes to nine.
  const hand = (deg: number, len: number) => {
    const a = ((deg - 90) * Math.PI) / 180
    return `M${CLOCK[0]} ${CLOCK[1]}L${n(CLOCK[0] + Math.cos(a) * len)} ${n(CLOCK[1] + Math.sin(a) * len)}`
  }
  return (
    <>
      <defs>
        <clipPath id={glassClip}>
          <path
            d={`M${GLASS.x0 + 8} ${GLASS.foot - 6}V${GLASS.top + 40}Q${GLASS.x0 + 8} ${GLASS.top + 10} ${(GLASS.x0 + GLASS.x1) / 2} ${GLASS.top + 10}Q${GLASS.x1 - 8} ${GLASS.top + 10} ${GLASS.x1 - 8} ${GLASS.top + 40}V${GLASS.foot - 6}Z`}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [500, 200], push: 1.03 })}>
        {/* the dark room, lit only by the candles */}
        <path d={m.wall} fill={PAPER} />
        {m.candleRays.map((d, i) => (
          <path key={i} d={d} fill={PAPER} />
        ))}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />

        {/* the clock, stopped at twenty minutes to nine */}
        <path
          d={`M${CLOCK[0] - 30} ${CLOCK[1] + 36}V${CLOCK[1] - 14}Q${CLOCK[0] - 30} ${CLOCK[1] - 34} ${CLOCK[0]} ${CLOCK[1] - 36}Q${CLOCK[0] + 30} ${CLOCK[1] - 34} ${CLOCK[0] + 30} ${CLOCK[1] - 14}V${CLOCK[1] + 36}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <circle cx={CLOCK[0]} cy={CLOCK[1]} r={21} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <g stroke={INK} strokeWidth={1.4}>
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i * 30 * Math.PI) / 180
            return (
              <path
                key={i}
                d={`M${n(CLOCK[0] + Math.sin(a) * 15.5)} ${n(CLOCK[1] - Math.cos(a) * 15.5)}L${n(CLOCK[0] + Math.sin(a) * 19)} ${n(CLOCK[1] - Math.cos(a) * 19)}`}
              />
            )
          })}
        </g>
        <path
          d={hand(240, 16) + hand(260, 10)}
          stroke={INK}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <circle cx={CLOCK[0]} cy={CLOCK[1]} r={2} fill={INK} />
        <path
          d={gouge(CLOCK[0] - 22, CLOCK[1] + 30, CLOCK[0] + 22, CLOCK[1] + 30, 1)}
          fill={PAPER}
        />

        {/* a candle in its sconce on the wall */}
        <path d="M128 148H148L144 156H132Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <Candle x={CANDLES[2][0]} y={CANDLES[2][1]} i={2} />

        {/* the half-packed trunk, a dress spilling out of it */}
        <path d="M18 292L30 246H100L110 292Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M34 286L42 254H90L98 286Z" fill="none" stroke={PAPER} strokeWidth={1} />
        <path d="M16 292H112L108 332H20Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(30, 296, 31, 330, 1.4) + gouge(98, 296, 97, 330, 1.4)} fill={PAPER} />
        {/* a dress, less splendid than hers, hanging over the trunk's edge */}
        <path
          d="M38 292C40 284 52 280 62 284C72 280 84 284 86 292L88 318C82 314 76 318 72 324C66 316 58 316 52 322C48 314 42 314 36 318Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path
          d="M48 294Q50 306 47 316M62 290Q64 304 61 318M76 294Q78 306 76 316"
          fill="none"
          stroke={INK}
          strokeWidth={0.9}
        />
        <path
          d="M86 292C94 296 98 306 96 318L91 318C92 308 90 300 84 296Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.1}
        />

        {/* the dressing-table: its faded drape, the gilded glass, the candles, the heap of things */}
        <rect
          x={TABLE.x0}
          y={TABLE.top}
          width={TABLE.x1 - TABLE.x0}
          height={FLOOR + 8 - TABLE.top}
          fill={PAPER}
        />
        <path d={m.drape} fill={INK} />
        <path d={m.drapeFolds} fill={INK} />
        <path
          d={`M${TABLE.x0 - 4} ${TABLE.top}H${TABLE.x1 + 4}V${TABLE.top + 8}H${TABLE.x0 - 4}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path
          d={`M${GLASS.x0} ${GLASS.foot}V${GLASS.top + 40}Q${GLASS.x0} ${GLASS.top} ${(GLASS.x0 + GLASS.x1) / 2} ${GLASS.top}Q${GLASS.x1} ${GLASS.top} ${GLASS.x1} ${GLASS.top + 40}V${GLASS.foot}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <g clipPath={`url(#${glassClip})`}>
          <rect
            x={GLASS.x0}
            y={GLASS.top}
            width={GLASS.x1 - GLASS.x0}
            height={GLASS.foot - GLASS.top}
            fill={INK}
          />
          <path
            d={
              gouge(GLASS.x0 + 20, GLASS.top + 30, GLASS.x0 + 46, GLASS.top + 120, 1.6) +
              gouge(GLASS.x0 + 34, GLASS.top + 22, GLASS.x0 + 56, GLASS.top + 96, 0.9)
            }
            fill={PAPER}
          />
        </g>
        {/* the gilding, cut as beads round the frame */}
        <g fill={INK}>
          {Array.from({ length: 13 }, (_, i) => {
            const t = i / 12
            const y = GLASS.foot - 8 - t * (GLASS.foot - GLASS.top - 40)
            return (
              <g key={i}>
                <circle cx={GLASS.x0 + 4} cy={n(y)} r={1.3} />
                <circle cx={GLASS.x1 - 4} cy={n(y)} r={1.3} />
              </g>
            )
          })}
        </g>
        <path
          d={`M${GLASS.x0 + 30} ${GLASS.top + 4}Q${(GLASS.x0 + GLASS.x1) / 2} ${GLASS.top - 14} ${GLASS.x1 - 30} ${GLASS.top + 4}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={3}
        />
        <Candle x={CANDLES[0][0]} y={CANDLES[0][1]} i={0} />
        <Candle x={CANDLES[1][0]} y={CANDLES[1][1]} i={1} />
        <path
          d={`M${CANDLES[0][0] - 9} ${CANDLES[0][1] + 34}H${CANDLES[0][0] + 9}V${TABLE.top}H${CANDLES[0][0] - 9}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path
          d={`M${CANDLES[1][0] - 9} ${CANDLES[1][1] + 34}H${CANDLES[1][0] + 9}V${TABLE.top}H${CANDLES[1][0] - 9}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        {/* "the other was on the table near her hand": the white shoe */}
        <path
          d="M772 212C772 206 778 203 786 204L800 205C806 205 810 208 810 212Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        {/* the watch and chain, the jewels, the gloves, the Prayer-book, the flowers */}
        <circle cx={700} cy={208} r={4.6} fill={PAPER} stroke={INK} strokeWidth={1.1} />
        <path
          d="M704 209Q712 214 720 208Q726 204 732 210"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
          strokeDasharray="1.6 1.2"
        />
        <path d="M740 212V202H756V212Z" fill={INK} stroke={PAPER} strokeWidth={1.1} />
        <path d="M743 205H753" stroke={PAPER} strokeWidth={0.8} />
        <path
          d="M716 212C716 204 724 200 730 204L736 212Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <g fill={PAPER} stroke={INK} strokeWidth={0.9}>
          <circle cx={762} cy={206} r={3.2} />
          <circle cx={768} cy={209} r={2.6} />
        </g>
        <g fill={PAPER}>
          {[
            [688, 200],
            [722, 197],
            [764, 199],
          ].map(([x, y]) => (
            <path
              key={x}
              d={`M${x} ${y - 3}L${x + 1.2} ${y - 0.6}L${x + 3.4} ${y}L${x + 1.2} ${y + 0.6}L${x} ${y + 3}L${x - 1.2} ${y + 0.6}L${x - 3.4} ${y}L${x - 1.2} ${y - 0.6}Z`}
            />
          ))}
        </g>

        {/* her arm-chair */}
        <path
          d="M620 312V164C620 154 626 148 636 148H644C652 148 656 154 656 164V312H648V280H588V312H580V256H620Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={gouge(630, 160, 630, 246, 1.1) + gouge(646, 160, 646, 246, 1.1)} fill={PAPER} />

        {/* the little card table, with the cards thrown on it */}
        <path d="M282 246H408L403 256H287Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M345 256V306M322 310H368" stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
        <path d="M345 256V306M322 310H368" stroke={INK} strokeWidth={6} strokeLinecap="round" />
        <path d={gouge(285, 249.6, 405, 249.6, 0.8)} fill={PAPER} />
        {card(316, 240, -12, 'c1')}
        {card(334, 239, 8, 'c2')}
        {card(352, 241, -4, 'c3')}
        {card(370, 239, 14, 'c4')}

        {/* Pip, looking at his hands, in his thick boots */}
        <Person
          at={[230, 326]}
          scale={1.42}
          pose={{
            look: 'pip',
            age: 'boy',
            eye: 'down',
            body: { neck: [5, -88], hip: [-2, -44] },
            head: { at: [10, -105], rot: 14 },
            legs: {
              far: [
                [-4, -44],
                [18, -46],
                [16, -3],
              ],
              near: [
                [0, -44],
                [22, -45],
                [22, -3],
              ],
            },
            far: {
              pts: [
                [2, -82],
                [12, -62],
                [30, -60],
              ],
              hand: 'grip',
              deg: -6,
            },
            near: {
              pts: [
                [7, -82],
                [10, -60],
                [22, -70],
              ],
              hand: 'open',
              deg: -40,
              thumb: 1,
              size: 14,
              spread: 22,
            },
          }}
        >
          {/* his cards, held in his far hand at the table's edge */}
          <path d="M34 -71L38 -59L32 -57Z" fill={PAPER} stroke={INK} strokeWidth={0.7} />
          <path d="M37 -70L42 -59L36 -57Z" fill={PAPER} stroke={INK} strokeWidth={0.7} />
        </Person>
        {/* the stool he sits on */}
        <path
          d="M200 262H244V268H200ZM204 268V324M240 268V324"
          fill={INK}
          stroke={INK}
          strokeWidth={3.4}
        />

        {/* Estella, proud, pointing at his hands */}
        <Person
          at={[458, 326]}
          scale={1.42}
          flip
          pose={{
            look: 'estella',
            eye: 'proud',
            seated: true,
            body: { neck: [3, -92], hip: [-3, -46] },
            head: { at: [5, -110], rot: -8 },
            legs: {
              far: [
                [-6, -46],
                [16, -48],
                [16, -3],
              ],
              near: [
                [-2, -46],
                [20, -47],
                [20, -3],
              ],
            },
            far: {
              pts: [
                [-1, -86],
                [6, -66],
                [18, -64],
              ],
              hand: 'grip',
              deg: -20,
            },
            near: {
              pts: [
                [5, -86],
                [16, -72],
                [31, -74],
              ],
              hand: 'point',
              deg: 10,
              thumb: -1,
              size: 21,
            },
          }}
        >
          <path d="M20 -76L24 -64L18 -62Z" fill={PAPER} stroke={INK} strokeWidth={0.7} />
        </Person>
        <path
          d="M454 260H492V266H454ZM458 266V324M488 266V324"
          fill={INK}
          stroke={INK}
          strokeWidth={3.4}
        />

        {/* Miss Havisham in her arm-chair, looking on */}
        <Person
          at={[592, 328]}
          scale={1.36}
          flip
          pose={{
            look: 'havisham',
            seated: true,
            shoe: 'near',
            body: { neck: [2, -110], hip: [-8, -56] },
            head: { at: [8, -129], rot: 12 },
            legs: {
              far: [
                [-10, -56],
                [22, -58],
                [24, -4],
              ],
              near: [
                [-6, -56],
                [27, -57],
                [30, -4],
              ],
            },
            far: {
              pts: [
                [-1, -104],
                [0, -80],
                [12, -64],
              ],
              hand: 'mitt',
              deg: 14,
            },
            near: {
              pts: [
                [4, -104],
                [6, -80],
                [20, -66],
              ],
              hand: 'mitt',
              deg: 10,
            },
          }}
        >
          {/* "Some bright jewels sparkled on her neck and on her hands" */}
          <g fill={PAPER} stroke={INK} strokeWidth={0.8}>
            <path d="M8 -112l1.6 1.6l-1.6 1.6l-1.6 -1.6Z" />
            <path d="M11.6 -110.6l1.6 1.6l-1.6 1.6l-1.6 -1.6Z" />
            <path d="M27 -69l1.4 1.4l-1.4 1.4l-1.4 -1.4Z" />
          </g>
        </Person>
      </g>
    </>
  )
}

export const firstVisitToSatisHouse: LinocutArt = { width: W, height: H, Draw: FirstVisit }

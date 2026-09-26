import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
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
 * Act 1, Scene 3: "Don John's discontent", the second moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1519, src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "Another room in Leonato's house." It is the evening of the soldiers'
 *   return: Borachio says "I came yonder from a great supper: the Prince your
 *   brother is royally entertained by Leonato", and Don John answers "Let us
 *   to the great supper: their cheer is the greater that I am subdued." So
 *   this room is dark, lit by one candle, and through an open door on the
 *   right is the bright hall of the supper: a long table spread with a cloth,
 *   dishes and a jug, and candles burning on it. The people at the supper are
 *   not in the scene and are not drawn.
 * - "What the good-year, my lord! why are you thus out of measure sad?";
 *   "I cannot hide what I am: I must be sad when I have cause, and smile at
 *   no man's jests"; "let me be that I am, and seek not to alter me." Don
 *   John stands on the left, still as the "image" Beatrice calls him (2.1),
 *   his arms folded, unsmiling, in his tall hat and dark cloak, as
 *   ./people.tsx cuts him.
 * - "You should hear reason." "Can you make no use of your discontent?"
 *   Conrade, in his soft bonnet, leans towards him across the candle and
 *   holds out an open hand, reasoning with him.
 * - "Enter Borachio." "What news, Borachio?" "I came yonder from a great
 *   supper". Borachio, in his round cap, has just come in at the door from
 *   the lit hall, one hand held out to his master with his news and the other
 *   pointing back over his shoulder at the supper he has come from.
 *
 * The spot colour is in the candle flames only: the one in this dark room,
 * and the many at the supper Don John will not enjoy. Nothing is taken from a
 * film, television or stage production. Seeds: 1201 (wall), 1202 (floor),
 * 1203 (the candle's light), 1204 (the doorway's light), 1205 (the hall).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 262
/** Where everyone's feet stand. */
const FEET = 322
/** The candle's flame. */
const CANDLE: P = [278, 176]
/** The open door into the hall: its opening, a round arch. */
const DOOR = { x0: 566, x1: 704, top: 92 }

type Marks = {
  wall: string
  floor: string
  glow: string
  doorRays: string
  hall: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The back wall, dark but for the candle's pool of light and the light
  // falling in round the door.
  const lit = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - CANDLE[0], (y - CANDLE[1]) * 1.1) / 190) * 0.85,
      clamp(1 - Math.hypot(x - 635, (y - 200) * 0.7) / 200) * 0.6,
      0.04,
    )
  const wall = gougeField(rng(1201), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, lit, {
    spacing: 6,
    len: [18, 64],
    gap: [5, 16],
    max: 3.8,
  })
  // The floor: flags in ink, lit where the door's light falls across them.
  const f = rng(1202)
  let floor = gougeField(
    f,
    { x0: 0, x1: W, y0: FLOOR + 4, y1: H },
    (x, y) =>
      Math.max(
        clamp(1 - Math.hypot((x - 630) * 0.6, y - FLOOR) / 150) * 0.9,
        clamp(1 - Math.hypot((x - CANDLE[0]) * 0.8, y - FLOOR) / 140) * 0.5,
        0.05,
      ),
    { spacing: 6, len: [20, 70], gap: [6, 18], max: 3.2 },
  )
  for (const y of [276, 294, 318])
    floor += gouge(-10, y, W + 10, y + between(f, -1, 1), 0.7 + (y - FLOOR) * 0.012)
  const glow = rays(rng(1203), CANDLE[0], CANDLE[1], { from: 14, to: 96, every: 7, width: 2.8 })
  const doorRays =
    wedge(DOOR.x0 + 6, FLOOR + 2, DOOR.x0 - 90, H, 1.2, 6) +
    wedge(DOOR.x1 - 6, FLOOR + 2, DOOR.x1 + 60, H, 1.2, 5)
  // The hall beyond the door: its far wall cut pale with the light of the
  // supper, a few dark joints in it.
  const hall = gougeField(
    rng(1205),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top, y1: 226 },
    () => 0.08,
    { spacing: 8, len: [14, 40], gap: [10, 30], max: 1.6 },
  )
  let shadows = ''
  for (const [x, w] of [
    [172, 44],
    [370, 40],
    [626, 44],
  ] as [number, number][])
    for (let k = 0; k < 3; k++)
      shadows += gouge(x - w, FEET + 1 + k * 3, x + w, FEET + 1.4 + k * 3, 2 - k * 0.5)
  cached = { wall, floor, glow, doorRays, hall, shadows }
  return cached
}

const ARCH = `M${DOOR.x0} ${FLOOR}V${DOOR.top + 69}A69 69 0 0 1 ${DOOR.x1} ${DOOR.top + 69}V${FLOOR}Z`

/**
 * A hanging arras on the back wall: the kind of hanging Borachio says he
 * "whipt me behind" to overhear the Prince and Claudio. Its woven picture, a
 * tree on a flowered ground inside a border, is cut in paper, with the folds
 * it hangs in.
 */
const ARRAS = { x0: 420, x1: 510, y0: 58, y1: 236 }
const ARRAS_PICTURE = (() => {
  const r = rng(1206)
  const cx = (ARRAS.x0 + ARRAS.x1) / 2
  // the trunk and two boughs
  let d =
    wedge(cx, 214, cx, 126, 7, 3) +
    wedge(cx, 160, cx - 20, 134, 3, 1) +
    wedge(cx, 150, cx + 18, 126, 3, 1)
  // the crown of leaves, each leaf a short gouge fanned about the top of the tree
  for (let i = 0; i < 46; i++) {
    const a = between(r, 0, Math.PI * 2)
    const rad = Math.sqrt(r()) * 30
    const x = cx + Math.cos(a) * rad * 1.1
    const y = 118 + Math.sin(a) * rad * 0.9
    const t = a + between(r, -0.6, 0.6)
    d += gouge(x, y, x + Math.cos(t) * 7, y + Math.sin(t) * 7, 1.5)
  }
  // flowers on the ground below it
  for (let i = 0; i < 9; i++) {
    const x = ARRAS.x0 + 14 + i * 7.8 + between(r, -2, 2)
    const y = 222 - between(r, 0, 6)
    d += `M${x - 1.8} ${y}a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 1 0 -3.6 0Z`
  }
  return d
})()
/** The folds it hangs in, darker lines down the weave. */
const ARRAS_FOLDS = [436, 454, 478, 496]
  .map((x, i) => gouge(x, ARRAS.y0 + 12, x + (i % 2 ? 2 : -2), ARRAS.y1 - 8, 1.6))
  .join('')
const ARRAS_FRINGE = Array.from({ length: 22 }, (_, i) => {
  const x = ARRAS.x0 + 4 + i * 4
  return `M${x} ${ARRAS.y1}V${ARRAS.y1 + 7}`
}).join('')

/** The supper in the hall, seen through the door: the long table, its cloth, dishes, a jug. */
const TABLE =
  `M${DOOR.x0} 212H${DOOR.x1}V222H${DOOR.x0}Z` +
  // the cloth hanging over its front edge
  `M${DOOR.x0} 222H${DOOR.x1}V232C${DOOR.x1 - 30} 236 ${DOOR.x0 + 30} 236 ${DOOR.x0} 232Z`
const TABLE_LEGS = `M${DOOR.x0 + 20} 232V262M${DOOR.x1 - 20} 232V262M${DOOR.x0 + 70} 234V262`
const DISHES =
  'M580 212C582 206 598 206 600 212ZM642 212C644 205 664 205 666 212ZM690 212C692 207 702 207 704 212Z' +
  // a jug
  'M616 212L614 200C612 196 614 192 618 191L626 191C630 192 631 196 629 200L627 212Z'
/**
 * Candlesticks on the table, and their flames, in the part of the doorway
 * Borachio leaves clear. They first stood behind him, and at phone width one
 * flame sat on his arm and one on his fingertip: red on a man, where it
 * reads as a wound (review, 26 September 2026).
 */
const HALL_CANDLES: P[] = [
  [664, 186],
  [694, 187],
]

function DonJohnsDiscontent({ uid }: ArtProps) {
  const m = marks()
  const hallClip = `${uid}-hall`
  return (
    <>
      <defs>
        <clipPath id={hallClip}>
          <path d={ARCH} />
        </clipPath>
        <clipPath id={`${uid}-arras`}>
          <rect
            x={ARRAS.x0 + 8}
            y={ARRAS.y0 + 10}
            width={ARRAS.x1 - ARRAS.x0 - 16}
            height={ARRAS.y1 - ARRAS.y0 - 18}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={`M0 ${FLOOR}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.shadows} fill={INK} />

        {/* the candle's light on the wall */}
        <g className="lc-fade-in" style={timing({ dur: 1.4 })}>
          <path d={m.glow} fill={PAPER} />
        </g>

        {/* the arras on the back wall, on its rod */}
        <path
          d={`M${ARRAS.x0 - 8} ${ARRAS.y0 - 2}H${ARRAS.x1 + 8}`}
          stroke={PAPER}
          strokeWidth={3}
        />
        <rect
          x={ARRAS.x0}
          y={ARRAS.y0}
          width={ARRAS.x1 - ARRAS.x0}
          height={ARRAS.y1 - ARRAS.y0}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={ARRAS.x0 + 5}
          y={ARRAS.y0 + 6}
          width={ARRAS.x1 - ARRAS.x0 - 10}
          height={ARRAS.y1 - ARRAS.y0 - 10}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <g clipPath={`url(#${uid}-arras)`}>
          <path d={ARRAS_PICTURE} fill={PAPER} />
          <path d={ARRAS_FOLDS} fill={INK} />
        </g>
        <path d={ARRAS_FRINGE} stroke={PAPER} strokeWidth={1.2} />

        {/* the open door, and the bright hall of the supper beyond it */}
        <path d={ARCH} fill={PAPER} stroke={PAPER} strokeWidth={10} strokeLinejoin="round" />
        <path d={ARCH} fill="none" stroke={INK} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${hallClip})`}>
          <path d={m.hall} fill={INK} />
          <path d={TABLE} fill={INK} />
          <path d={TABLE_LEGS} stroke={INK} strokeWidth={3.4} />
          <path d={gouge(DOOR.x0 + 4, 227, DOOR.x1 - 4, 227, 1.2)} fill={PAPER} />
          <path d={DISHES} fill={INK} />
          {HALL_CANDLES.map(([x, y], i) => (
            <g key={x}>
              <path d={`M${x - 1.6} 212V${y + 8}H${x + 1.6}V212Z`} fill={INK} />
              <path d={`M${x - 4} 212H${x + 4}`} stroke={INK} strokeWidth={2.4} />
              <path
                className="lc-flicker"
                style={timing({ dur: 0.7 + i * 0.12, delay: i * 0.2 })}
                d={`M${x} ${y + 8}C${x - 3.4} ${y + 5} ${x - 2} ${y + 1} ${x} ${y - 5}C${x + 2} ${y + 1} ${x + 3.4} ${y + 5} ${x} ${y + 8}Z`}
                fill={RED}
              />
            </g>
          ))}
          {/* the floor of the hall running back */}
          <path d={`M${DOOR.x0} 262H${DOOR.x1}`} stroke={INK} strokeWidth={1.2} />
        </g>
        {/* the door itself, swung open into the room */}
        <path
          d={`M${DOOR.x0} ${DOOR.top + 70}L${DOOR.x0 - 34} ${DOOR.top + 84}V${FLOOR + 18}L${DOOR.x0} ${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(DOOR.x0 - 12, DOOR.top + 86, DOOR.x0 - 12, FLOOR + 6, 1.4) +
            gouge(DOOR.x0 - 24, DOOR.top + 88, DOOR.x0 - 24, FLOOR + 10, 1.4)
          }
          fill={PAPER}
        />
        {/* the light falling out of the door across the floor */}
        <path d={m.doorRays} fill={PAPER} />

        {/* the small table and its one candle */}
        <path d="M242 214H316V222H242Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M250 222L246 322M308 222L312 322M248 290H310"
          stroke={INK}
          strokeWidth={4.4}
          fill="none"
        />
        <path d="M250 222L246 322M308 222L312 322" stroke={PAPER} strokeWidth={1} fill="none" />
        <path
          d={`M${CANDLE[0] - 10} 214H${CANDLE[0] + 10}L${CANDLE[0] + 6} 208H${CANDLE[0] - 6}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <rect x={CANDLE[0] - 3.6} y={CANDLE[1] + 8} width={7.2} height={24} fill={PAPER} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8 })}
          d={`M${CANDLE[0]} ${CANDLE[1] + 9}C${CANDLE[0] - 6} ${CANDLE[1] + 5} ${CANDLE[0] - 4} ${CANDLE[1] - 2} ${CANDLE[0]} ${CANDLE[1] - 10}C${CANDLE[0] + 4} ${CANDLE[1] - 2} ${CANDLE[0] + 6} ${CANDLE[1] + 5} ${CANDLE[0]} ${CANDLE[1] + 9}Z`}
          fill={RED}
        />

        {/* Don John, his arms folded, unsmiling */}
        <Person at={[172, FEET]} scale={1.16} pose={{ look: 'don-john', head: { rot: 4 } }} />

        {/* Conrade, leaning in across the candle, reasoning with him */}
        <Person
          at={[372, FEET]}
          scale={1.14}
          flip
          pose={{
            look: 'conrade',
            head: { at: [5, -158], rot: 10 },
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-4, -76],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [22, -112],
                [40, -114],
              ],
              hand: 'open',
              deg: -14,
              thumb: -1,
            },
          }}
        />

        {/*
          Borachio, just in from the supper, with his news: one hand held out
          to his master, the other pointing back over his shoulder at the
          supper, high and clear of the candles.
        */}
        <Person
          at={[614, FEET]}
          scale={1.14}
          flip
          pose={{
            look: 'borachio',
            legs: {
              far: [
                [-3, -70],
                [-12, -36],
                [-20, -3],
              ],
              near: [
                [3, -70],
                [10, -36],
                [14, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-18, -132],
                [-30, -148],
              ],
              hand: 'point',
              deg: 200,
              thumb: -1,
            },
            near: {
              pts: [
                [5, -128],
                [18, -112],
                [30, -122],
              ],
              hand: 'open',
              deg: -40,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const donJohnsDiscontent: LinocutArt = { width: W, height: H, Draw: DonJohnsDiscontent }

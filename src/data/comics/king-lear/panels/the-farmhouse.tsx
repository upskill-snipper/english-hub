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
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type P } from './people'

/**
 * Act 3, Scene 6: "The farmhouse", the twelfth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1532, src/data/full-texts/king-lear.ts), which prints the
 * Quarto's mock trial:
 *
 * - "A Chamber in a Farmhouse adjoining the Castle." "Here is better than
 *   the open air", and it is still the night of the storm. So a low room of
 *   timber and daub, its one small window dark, lit by one candle on a
 *   shelf: the panel's one red, a small light in a long night.
 * - The trial: "I will arraign them straight. [To Edgar.] Come, sit thou
 *   here, most learned justicer; [To the Fool.] Thou, sapient sir, sit
 *   here." "Thou, robed man of justice, take thy place. [To the Fool.] And
 *   thou, his yokefellow of equity, Bench by his side. [To Kent.] You are o'
 *   the commission, Sit you too." So the three judges sit on one bench: Poor
 *   Tom, wrapped in his blanket (the "robe" Lear gives him), the Fool beside
 *   him, and Kent, as Caius, at the end.
 * - "Arraign her first; 'tis Goneril." "Cry you mercy, I took you for a
 *   joint-stool." The accused is a joint-stool, empty, in the light in the
 *   middle of the floor. Lear stands over it and points at it; he gives
 *   his evidence standing: "I here take my oath before this honourable
 *   assembly". The Fool holds out his hand to it: "Come hither, mistress. Is
 *   your name Goneril?"
 * - Kent: "O pity! Sir, where is the patience now That you so oft have
 *   boasted to retain?" He sits with his head bowed. Edgar: "My tears begin
 *   to take his part so much They mar my counterfeiting." His eye is
 *   lowered, and one tear is cut on his cheek.
 * - "Will you lie down and rest upon the cushions?" The cushions lie ready on
 *   a pallet of straw on the right, where Lear will sleep ("draw the
 *   curtains").
 *
 * Lear's madness is drawn with the dignity the kit (./people.tsx) asks for:
 * an old king standing straight to give evidence, not a madman. Gloucester
 * is out of the room at this point ("I will not be long from you") and is
 * not drawn. Nothing is taken from a film or stage production. Seeds: 1201
 * (the daub), 1202 (the floor), 1203 (the candle's light), 1204 (shadow).
 */

const W = 860
const H = 340
/** The foot of the walls, where the floor begins. */
const FLOOR = 262
/** The candle's flame. */
const FLAME: Pt = [440, 126]
/** The top of the bench the judges sit on, and the floor in front of it. */
const BENCH = 242
const BENCH_FEET = 306

type Marks = {
  daub: string
  floor: string
  glow: string
  shade: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The daub between the timbers, lit by the one candle: cut nearly white
  // near it, closing to black in the corners.
  const light = (x: number, y: number) =>
    clamp(1.02 - Math.hypot((x - FLAME[0]) * 0.72, (y - FLAME[1]) * 1.1) / 330)
  const daub = gougeField(rng(1201), { x0: 0, x1: W, y0: 46, y1: FLOOR }, light, {
    spacing: 6.6,
    len: [22, 80],
    gap: [6, 20],
    max: 4,
  })
  // Boards running away from the reader, without the cross joints of flags.
  const floor = flagFloor(rng(1202), W, H, FLOOR, [470, 40], 30, 1)
  const glow = rays(rng(1203), FLAME[0], FLAME[1] - 4, { from: 12, to: 70, every: 9, width: 2.6 })
  // The floor darkens away from the candle.
  const r = rng(1204)
  let shade = ''
  for (let y = FLOOR + 6; y < H; y += 3.6) {
    for (const side of [-1, 1]) {
      const reach = 250 + (y - FLOOR) * 1.4
      const x0 = side < 0 ? -4 : FLAME[0] + reach
      const x1 = side < 0 ? FLAME[0] - reach : W + 4
      if (x1 > x0) shade += wedge(x0, y, x1, y + between(r, -0.4, 0.4), 2.2, side < 0 ? 0.6 : 2.2)
    }
  }
  cached = { daub, floor, glow, shade }
  return cached
}

/** The timbers of the walls and the roof: posts, a rail, braces and the tie beam. */
const POSTS = [8, 168, 700, 852]
const TIMBERS =
  POSTS.map((x) => `M${x - 7} 40H${x + 7}V${FLOOR}H${x - 7}Z`).join('') +
  `M0 140H${W}V150H0Z` +
  'M0 30H860V46H0Z' +
  'M182 140L250 50L260 56L194 146Z' +
  'M686 140L618 50L608 56L674 146Z'
const RAFTERS = [40, 190, 340, 490, 640, 790].map((x) => gouge(x, 6, x, 28, 1.2)).join('')

/**
 * A man in a tunic seated on a seat `seat` units high, in the kit's frame:
 * the line of his body and his legs, the thighs along the seat and the shins
 * to the floor, as the Twelfth Night kit seats its men.
 */
function seated(seat: number, reach = 34, lean = 0) {
  return {
    body: { neck: [lean, -seat - 70] as P, hip: [0, -seat - 2] as P },
    legs: {
      far: [
        [-2, -seat],
        [reach - 4, -seat - 2],
        [reach - 6, -3],
      ] as P[],
      near: [
        [2, -seat],
        [reach + 2, -seat - 1],
        [reach + 2, -3],
      ] as P[],
    },
  }
}

const SEAT = BENCH_FEET - BENCH

/** Edgar's tear, in his head's frame: a paper drop on the cheek below the eye. */
const TEAR = 'M9.6 0.4C7.6 3.6 7.2 6.4 9.4 7.8C11.6 7.2 11.8 4.2 9.6 0.4Z'

/** The bench the judges sit on, a plain backless form: its ends, as x. */
const BENCH_X: [number, number] = [124, 414]
/** The joint-stool's seat, its ends as x. */
const STOOL_X: [number, number] = [462, 514]

function TheFarmhouse(_: ArtProps) {
  const m = marks()
  const tom = seated(SEAT, 32, 4)
  const fool = seated(SEAT, 30, 2)
  const kent = seated(SEAT, 34, 6)
  // Where Tom's head sits in his frame, for the tear: the kit's default.
  const tomHead: P = [tom.body.neck[0] + 3, tom.body.neck[1] - 22]
  const [b0, b1] = BENCH_X
  const [s0, s1] = STOOL_X
  const [fx, fy] = FLAME
  return (
    <>
      <g className="lc-push" style={timing({ origin: [fx, 190], push: 1.03 })}>
        <path d={m.daub} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        <path d={TIMBERS} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        {/* the rafters above the tie beam */}
        <path d="M0 0H860V30H0Z" fill={INK} />
        <path d={RAFTERS} fill={PAPER} />
        {/* a small window, dark on the night */}
        <rect x={50} y={64} width={82} height={64} fill={PAPER} />
        <rect x={56} y={70} width={70} height={52} fill={INK} />
        <path d="M91 70V122" stroke={PAPER} strokeWidth={2} />

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* the candle on its shelf */}
        <rect
          x={fx - 30}
          y={fy + 24}
          width={60}
          height={6}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <rect
          x={fx - 6}
          y={fy + 10}
          width={12}
          height={15}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path
          className="lc-flicker"
          d={`M${fx} ${fy + 10}C${fx - 5} ${fy + 4} ${fx - 4} ${fy - 2} ${fx} ${fy - 10}C${fx + 4} ${fy - 2} ${fx + 5} ${fy + 4} ${fx} ${fy + 10}Z`}
          fill={RED}
        />

        {/* the bench: its top, lit and seen a little from above, its edge and legs */}
        <path
          d={`M${b0} ${BENCH}H${b1}V${BENCH + 8}H${b0}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={`M${b0} ${BENCH}L${b0 + 8} ${BENCH - 6}H${b1 + 8}L${b1} ${BENCH}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path
          d={`M${b0 + 8} ${BENCH + 8}L${b0 + 6} ${BENCH_FEET}M${b1 - 8} ${BENCH + 8}L${b1 - 6} ${BENCH_FEET}`}
          stroke={INK}
          strokeWidth={6}
        />

        {/* the three judges on it: Poor Tom, the Fool and Kent */}
        <Person
          at={[b0 + 40, BENCH_FEET]}
          pose={{
            look: 'tom',
            ...tom,
            head: { rot: 10 },
            eye: 'down',
            far: {
              pts: [
                [6, -SEAT - 64],
                [14, -SEAT - 34],
                [28, -SEAT - 10],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -SEAT - 62],
                [8, -SEAT - 32],
                [24, -SEAT - 12],
              ],
              hand: 'mitt',
            },
          }}
        >
          <path
            d={TEAR}
            transform={`translate(${tomHead[0]} ${tomHead[1]}) rotate(10)`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.5}
          />
        </Person>
        <Person
          at={[b0 + 116, BENCH_FEET]}
          pose={{
            look: 'fool',
            ...fool,
            head: { rot: 4 },
            far: {
              pts: [
                [-2, -SEAT - 62],
                [6, -SEAT - 34],
                [22, -SEAT - 14],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -SEAT - 62],
                [20, -SEAT - 44],
                [42, -SEAT - 46],
              ],
              hand: 'open',
              deg: -10,
              size: 16,
              spread: 21,
            },
          }}
        />
        <Person
          at={[b0 + 192, BENCH_FEET]}
          pose={{
            look: 'caius',
            ...kent,
            head: { rot: 16 },
            eye: 'down',
            far: {
              pts: [
                [4, -SEAT - 64],
                [12, -SEAT - 34],
                [30, -SEAT - 10],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [2, -SEAT - 62],
                [10, -SEAT - 32],
                [28, -SEAT - 12],
              ],
              hand: 'mitt',
            },
          }}
        />

        {/* the joint-stool, the accused, in the light */}
        <path
          d={`M${s0} 256L${s0 + 6} 251H${s1 + 6}L${s1} 256V263H${s0}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={`M${s0 + 6} 263L${s0 + 2} 306M${s1 - 6} 263L${s1 - 2} 306M${s0 + 5} 290H${s1 - 5}`}
          stroke={INK}
          strokeWidth={4.6}
          fill="none"
        />

        {/* the cushions on a pallet of straw, where Lear will sleep */}
        <path
          d="M690 302C724 292 800 292 850 300L854 318C800 312 724 314 686 320Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M708 298C712 282 746 280 752 294C746 302 716 304 708 298Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d="M758 296C764 280 802 280 808 294C802 302 766 302 758 296Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />

        {/* Lear, standing over the stool, gives his evidence */}
        <Person
          at={[618, 314]}
          flip
          pose={{
            look: 'lear',
            mantle: false,
            head: { rot: 10 },
            far: {
              pts: [
                [-2, -128],
                [-6, -98],
                [-4, -72],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [-2, -128],
                [18, -112],
                [42, -100],
              ],
              hand: 'point',
              deg: 26,
            },
          }}
        />
      </g>
    </>
  )
}

export const theFarmhouse: LinocutArt = { width: W, height: H, Draw: TheFarmhouse }

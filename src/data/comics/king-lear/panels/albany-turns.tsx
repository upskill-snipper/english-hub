import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, deg, n, ribbon, rng, wave } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, stoneWall } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { ROW_W, inkRows, tick } from './open-air'
import { Person } from './people'

/**
 * Act 4, Scene 2: "Albany turns", the fifteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1532, src/data/full-texts/king-lear.ts):
 *
 * - "Before the Duke of Albany's Palace." So the stone front of the palace
 *   stands on the left, its door open behind Albany, who has just come out
 *   ("Madam, here comes my lord"), and the open country runs away to the
 *   right under a sky of torn cloud.
 * - "O Goneril! You are not worth the dust which the rude wind Blows in your
 *   face!" The wind is drawn: it drives the cloud, bends the trees on the
 *   far rise, and blows the dust along the court towards her, all from the
 *   left, where he stands. The dust stays on the ground: the line is a
 *   comparison, and nothing is thrown at her.
 * - Albany, "our mild husband", clean-shaven, as the kit (./people.tsx) cuts
 *   him, finds his voice: "See thyself, devil!" He steps towards her and
 *   points at her, his brow drawn down: the anger of a mild man.
 * - NO RED. His anger was first printed as a flush on his cheek. At panel
 *   size the cheek is a few pixels below the eye, and on a phone the red mark
 *   read as a hurt eye, in the scene that brings the news of Gloucester's
 *   eyes (the review, 2 October 2026). The panel is printed in black and
 *   white, as "Dover cliff" and "Lear wakes" are, and his anger is left to
 *   the frown and the pointing hand.
 * - Goneril, as the kit cuts her (her frontlet and veil, and the frown that
 *   is her own), stands her ground, her head up and her hand on her hip:
 *   "Milk-liver'd man!", "Marry, your manhood, mew!" The wind takes the back
 *   of her gown.
 *
 * Edmund and Oswald have gone before Albany comes out, and the Messenger
 * with the news of Gloucester's eyes has not yet come, so neither is drawn.
 * Nothing is taken from a film or stage production. Seeds: 1501 (sky), 1502
 * (the palace's stone), 1503 (the court), 1504 (dust), 1505 (gusts of wind).
 */

const W = 860
const H = 340
/** The foot of the palace wall and the far edge of the court. */
const GROUND = 262
/** The right-hand edge of the palace front. */
const FRONT = 300

type Marks = {
  sky: string[]
  gusts: string
  wall: { cuts: string; joints: string }
  court: string
  dust: string
  rise: string
  trees: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A windy day: long torn streaks of cloud driven across a pale sky.
  const sky = inkRows(
    rng(1501),
    { x0: FRONT, x1: W, y0: 8, y1: GROUND - 34 },
    (x, y) => clamp(0.5 - (y / GROUND) * 0.5 + Math.sin(y / 17 + x / 300) * 0.22),
    { spacing: 6, len: [60, 170] },
  )
  // Gusts: a few long curling strokes of wind, from the left.
  const rr = rng(1505)
  let gusts = ''
  for (const [x, y] of [
    [330, 150],
    [590, 196],
    [700, 120],
  ] as const)
    gusts += ribbon(wave(x, x + between(rr, 90, 130), y, 3, 70, between(rr, 0, 6), 16), 2.4, 0.8)
  const wall = stoneWall(
    rng(1502),
    { x0: 0, x1: FRONT, y0: 4, y1: GROUND },
    (x) => clamp(0.2 + (x / FRONT) * 0.6),
    24,
  )
  const court = flagFloor(rng(1503), W, H, GROUND, [300, 80], 76, 4)
  // Dust blown along the ground by the "rude wind", from the left, towards her.
  const rd = rng(1504)
  let dust = ''
  for (let i = 0; i < 46; i++) {
    const x = between(rd, FRONT - 40, W)
    const y = between(rd, GROUND + 6, H - 8)
    dust += tick(x, y, between(rd, -14, 2), between(rd, 8, 22))
  }
  // The far rise, and trees on it bent by the wind.
  let rise = `M${FRONT} ${GROUND}`
  for (let x = FRONT; x <= W; x += 10)
    rise += `L${x} ${n(GROUND - 12 - 10 * Math.sin((x - FRONT) / 120 + 0.4))}`
  rise += `L${W} ${GROUND}Z`
  let trees = ''
  for (const [x, h] of [
    [640, 34],
    [668, 26],
    [770, 40],
  ] as const) {
    const base = GROUND - 12 - 10 * Math.sin((x - FRONT) / 120 + 0.4)
    trees += ribbon(
      [
        [x, base],
        [x + 3, base - h * 0.5],
        [x + 10, base - h],
      ],
      5,
      0.6,
      false,
    )
    for (let k = 0; k < 5; k++) {
      const yy = base - h * (0.45 + k * 0.12)
      trees += ribbon(
        [
          [x + 2 + k * 1.6, yy],
          [x + 12 + k * 2, yy - 2],
          [x + 22 + k * 1.4, yy + 1],
        ],
        2.4,
        0.6,
        false,
      )
    }
  }
  cached = { sky, gusts, wall, court, dust, rise, trees }
  return cached
}

function AlbanyTurns(_: ArtProps) {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        <rect x={FRONT} y={0} width={W - FRONT} height={GROUND} fill={PAPER} />
        <g className="lc-drift">
          {m.sky.map((d, i) => (
            <path key={i} d={d} stroke={INK} strokeWidth={ROW_W[i]} strokeLinecap="round" />
          ))}
          <path d={m.gusts} fill={INK} />
        </g>
        <path d={m.rise} fill={INK} />
        <path d={m.trees} fill={INK} stroke={PAPER} strokeWidth={1} />
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={PAPER} />
        <rect
          x={FRONT}
          y={0}
          width={10}
          height={GROUND}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the palace door, open behind Albany */}
        <path d="M110 262V140C110 112 130 94 158 94C186 94 206 112 206 140V262Z" fill={PAPER} />
        <path d="M120 262V142C120 120 136 104 158 104C180 104 196 120 196 142V262Z" fill={INK} />
        {/* the court before it */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={PAPER} />
        <path d={m.court} fill={INK} />
        <g className="lc-drift">
          <path d={m.dust} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        </g>

        {/* Albany, come out of his palace, pointing at her */}
        <Person
          at={[352, 318]}
          pose={{
            look: 'albany',
            body: { neck: [5, -137], hip: [0, -70] },
            head: { rot: 2 },
            frown: true,
            cloak: 8,
            far: {
              pts: [
                [-2, -128],
                [-10, -100],
                [-8, -76],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [6, -128],
                [30, -124],
                [54, -128],
              ],
              hand: 'point',
              deg: -4,
            },
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-16, -3],
              ],
              near: [
                [3, -70],
                [12, -36],
                [16, -3],
              ],
            },
          }}
        />

        {/* Goneril, standing her ground, her hand on her hip */}
        <Person
          at={[566, 316]}
          flip
          pose={{
            look: 'goneril',
            head: { rot: -8 },
            hem: { front: 22, back: 42 },
            far: {
              pts: [
                [-2, -122],
                [-4, -98],
                [2, -86],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [0, -122],
                [-16, -104],
                [-6, -92],
              ],
              hand: 'mitt',
              deg: 20,
            },
          }}
        />
      </g>
    </>
  )
}

export const albanyTurns: LinocutArt = { width: W, height: H, Draw: AlbanyTurns }

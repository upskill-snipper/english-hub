import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type Pose } from './people'
import {
  CANDLES,
  CHAIR,
  Candle,
  DOOR,
  FLOOR,
  SENATOR_CHAIRS,
  TABLE,
  WINDOWS,
  chamberMarks,
  dukeChair,
  letters,
  nightWindow,
  senatorChair,
  tableMarks,
  wainscot,
} from './council'

/**
 * Act 1, Scene 3: "Iago's plan is born", the fourth moment in the guide's
 * timeline: the end of the scene, after "Exeunt Duke, Senators, Officers,
 * &c." and "Exeunt Othello and Desdemona". Every detail is from the scene, as
 * the held edition prints it (src/data/full-texts/othello.ts):
 *
 * - The same council chamber as "Before the senate" (./council.tsx), seen
 *   from the same place and emptied: the Duke's high chair and the senators'
 *   chairs stand empty, the letters lie where they were left, and the
 *   candles have been snuffed but one, a thread of smoke rising from each.
 *   It is late in the night: "I have but an hour / Of love ... To spend with
 *   thee" (Othello, leaving); "Where shall we meet i' the morning?"
 * - RODERIGO: "I am changed. I'll sell all my land." Exit. So Roderigo, in his
 *   feathered bonnet with his purse at his girdle ("put money in thy purse",
 *   Iago tells him again and again), goes out through the arched door.
 * - IAGO, alone: "I hate the Moor ... Let me see now, / To get his place ...
 *   How, how? Let's see ... I have't. It is engender'd. Hell and night / Must
 *   bring this monstrous birth to the world's light." So Iago stands by the
 *   one burning candle, his face in its light, his hand at his chin as he
 *   works it out ("How, how? Let's see") and the knowing smile the kit gives
 *   him alone as it comes to him. The rest of the room falls away into the
 *   dark beyond the candle's reach.
 *
 * TWO THINGS TAKEN OUT IN REVIEW (2 October 2026), so that neither comes back:
 * - Iago first held up one finger as the plan came to him, and the candle
 *   threw his shadow across the wall with the same finger raised. A single
 *   finger raised from a fist, in a black shadow or at phone width, reads as
 *   a rude sign. (./emilia-speaks.tsx found the same with Iago's hand there.)
 * - The shadow itself, a man's shape in solid ink twice Iago's size, stood
 *   beside the words "Hell and night ... this monstrous birth". In this play
 *   a figure printed in ink means Othello in every other panel (./people.tsx),
 *   and a huge black figure beside "hell" and "monstrous" draws the very
 *   equation of blackness with the devil that Iago's own insults make. The
 *   print never adopts them, so the plan is left to the words.
 *
 * What Iago says in this scene about Othello and about Desdemona is not quoted
 * or drawn; the quotation is the couplet that ends the act. Nothing is taken
 * from a film or stage production. Seeds: 4401 (floor), 4403 (cloth), 4404
 * (the passage), 4405 (the candle's light), 4406 (wall).
 */

const W = 860
const H = 340
const FEET = 326
/** The one candle still burning: the first on the table. */
const LIT = CANDLES[0]

/**
 * Iago, by the candle, his hand at his chin: "How, how? Let's see." The near
 * arm is bent up across his chest, its elbow out before him, and the closed
 * hand under his chin, cut after the face (`nearOverFace`) so that it is in
 * front of the jaw.
 */
const IAGO: Pose = {
  look: 'iago',
  mouth: 'smile',
  head: { rot: -4 },
  nearOverFace: true,
  legs: {
    far: [
      [-3, -70],
      [-7, -36],
      [-9, -3],
    ],
    near: [
      [3, -70],
      [7, -36],
      [10, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-8, -104],
      [-3, -86],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [24, -106],
      [17, -129],
    ],
    hand: 'mitt',
    deg: -78,
  },
}

/** Roderigo (flipped), going out through the door. */
const RODERIGO: Pose = {
  look: 'roderigo',
  cloak: 6,
  legs: {
    far: [
      [-3, -70],
      [-12, -36],
      [-18, -3],
    ],
    near: [
      [3, -70],
      [13, -37],
      [19, -3],
    ],
  },
  far: {
    pts: [
      [-3, -130],
      [-14, -108],
      [-22, -94],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -130],
      [12, -106],
      [20, -90],
    ],
    hand: 'mitt',
  },
}

type Marks = {
  wall: string
  floor: string
  cloth: string
  folds: string
  fringe: string
  passage: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // One candle lights the room now: the wall is cut widest round it and
  // behind Iago, so his dark figure stands against its light, and the cuts
  // die away into the dark towards the door.
  const light = (x: number, y: number) =>
    clamp(1.08 - Math.hypot(x - LIT[0], (y - LIT[1]) * 1.1) / 430)
  const { floor } = chamberMarks(4401, light, W, H)
  const wall = gougeField(
    rng(4406),
    { x0: 0, x1: W, y0: 6, y1: 184 },
    (x, y) => clamp(light(x, y)) * 0.9 + 0.04,
    { spacing: 6, len: [20, 70], gap: [6, 18], max: 3.6 },
  )
  const { cloth, folds, fringe } = tableMarks(4403, W)
  const mid = (DOOR.x0 + DOOR.x1) / 2
  const passage = gougeField(
    rng(4404),
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top, y1: FLOOR },
    (x) => clamp((Math.abs(x - mid) - 22) / 40) * 0.8,
    { spacing: 6.4, len: [10, 30], gap: [6, 14], max: 2.6 },
  )
  const glow = rays(rng(4405), LIT[0], LIT[1] - 6, { from: 14, to: 54, every: 14, width: 1.8 })
  cached = { wall, floor, cloth, folds, fringe, passage, glow }
  return cached
}

const LETTERS = letters([
  [592, 206, 22],
  [612, 200, 18],
  [706, 206, 24],
  [800, 205, 20],
  [824, 200, 18],
])

function IagosPlanIsBorn({ uid }: ArtProps) {
  const m = marks()
  const chair = dukeChair()
  const door = `M${DOOR.x0} ${FLOOR}V${DOOR.top + 52}A52 52 0 0 1 ${DOOR.x1} ${DOOR.top + 52}V${FLOOR}Z`
  const clip = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={door} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 170], push: 1.035 })}>
        {/* the chamber, lit now by one candle */}
        <rect x={0} y={0} width={W} height={FLOOR} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        <path d={`M0 188H${W}M0 192H${W}`} stroke={PAPER} strokeWidth={2} />
        <path d={wainscot(W)} fill="none" stroke={PAPER} strokeWidth={1.6} />
        {WINDOWS.map((w) => {
          const win = nightWindow(w)
          return (
            <g key={w.x0}>
              <path d={win.frame} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
              <path d={win.lead} stroke={PAPER} strokeWidth={1.2} fill="none" />
            </g>
          )
        })}
        {/* the door, Roderigo going out through it */}
        <path d={door} fill={PAPER} stroke={PAPER} strokeWidth={8} />
        <path d={door} fill={PAPER} stroke={INK} strokeWidth={3} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.passage} fill={INK} />
        </g>

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <rect x={0} y={FLOOR - 1} width={W} height={3} fill={INK} />

        {/* the empty chairs, the table, the letters left, the candles snuffed but one */}
        <path d={chair.back} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={chair.panel} fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path
          d={SENATOR_CHAIRS.map((x) => senatorChair(x)).join('')}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.cloth} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.folds} fill={PAPER} />
        <path d={m.fringe} stroke={PAPER} strokeWidth={2.4} strokeDasharray="2 3" />
        <path
          d={`M${TABLE.x0 - 6} ${TABLE.top - 2}H${W + 10}V${TABLE.top + 6}H${TABLE.x0 - 6}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path d={LETTERS.paper} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d={LETTERS.lines} stroke={INK} strokeWidth={0.8} />
        <path d={m.glow} fill={PAPER} />
        {CANDLES.map((c, i) => (
          <Candle key={c[0]} at={c} out={i > 0} />
        ))}

        {/* Roderigo going out; Iago alone by the candle */}
        <Person pose={RODERIGO} at={[86, 320]} scale={1.02} flip />
        <path d={footShadow(448, FEET + 2, 28)} fill={INK} />
        <Person pose={IAGO} at={[446, FEET]} scale={1.12} />
      </g>
    </>
  )
}

export const iagosPlanIsBorn: LinocutArt = { width: W, height: H, Draw: IagosPlanIsBorn }

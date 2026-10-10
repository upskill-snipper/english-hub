import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'
import { H, SIDE, TempleRoom, W } from './temple-chambers'

/**
 * Chapter 39: "The convict returns", the eleventh moment in the guide's
 * timeline. Pip's chambers in the Temple at eleven at night, in the storm
 * (the room is ./temple-chambers.tsx, which quotes what it is drawn from).
 * The moment drawn is the one the guide's summary names: the stranger has
 * come up the stair, taken off his coat and hat, and holds out both his hands.
 * From the held edition (src/data/full-texts/great-expectations.ts):
 *
 * - "I made out that he was substantially dressed, but roughly; like a
 *   voyager by sea. That he had long iron-grey hair. That his age was about
 *   sixty. That he was a muscular man, strong on his legs, and that he was
 *   browned and hardened by exposure to weather." "he pulled off a rough
 *   outer coat, and his hat. Then, I saw that his head was furrowed and bald,
 *   and that the long iron-grey hair grew only on its sides." So he is the
 *   kit's Magwitch at sixty ('magwitch60' in ./people.tsx), bareheaded, in a
 *   seaman's short jacket, with his neckerchief at his throat, and his rough
 *   coat and hat are thrown over the chair "that stood before the fire",
 *   where he sat down a moment before.
 * - "He came back to where I stood, and again held out both his hands." So he
 *   leans towards Pip with both arms out and both hands open, the fingers
 *   apart, offered as a man offers his hands to be taken: not raised, and not
 *   grasping.
 * - "I recoiled a little from him"; "Not knowing what to do—for, in my
 *   astonishment I had lost my self-possession". So Pip, a young gentleman in
 *   his dark coat and white linen (the kit's Pip grown up), leans back from
 *   him with a hand to his breast, his eye wide.
 * - The shaded lamp stands on the table between them, "its circle of light
 *   very contracted", with his book shut and his watch beside it ("I read
 *   with my watch upon the table ... purposing to close my book at eleven
 *   o'clock"): the watch shows eleven.
 *
 * The spot colour is the fire alone. The lamp's flame is left unprinted, so
 * that no red mark sits near the outstretched hands. Seeds: none of its own;
 * the room's are in ./temple-chambers.tsx.
 */

/** Where the two stand: the convict come from the fire, Pip before his books. */
const MAGWITCH_AT: P = [292, 327]
const PIP_AT: P = [556, 327]
/** Both are drawn larger than the kit's life size, to fill the room. */
const FIG = 1.27

/** The chair before the fire, with his rough coat over its back and his hat on the seat. */
const CHAIR = { x: 206, seat: 272, back: 192, floor: 322 }

/**
 * The rough outer coat thrown over the chair's back: folded over the top
 * rail at the collar, hanging down both sides of the back, one sleeve
 * dropping lower than the hem on the room's side.
 */
const COAT = (x: number, b: number) =>
  `M${x - 34} ${b + 6}C${x - 33} ${b - 6} ${x - 9} ${b - 9} ${x - 5} ${b + 3}` +
  `C${x - 2} ${b + 26} ${x + 1} ${b + 50} ${x - 1} ${b + 70}L${x - 7} ${b + 66}L${x - 12} ${b + 78}` +
  `L${x - 20} ${b + 72}L${x - 28} ${b + 80}C${x - 34} ${b + 56} ${x - 38} ${b + 30} ${x - 34} ${b + 6}Z`
const SLEEVE = (x: number, b: number) =>
  `M${x - 6} ${b + 10}C${x + 2} ${b + 26} ${x + 7} ${b + 56} ${x + 8} ${b + 84}L${x - 3} ${b + 86}C${x - 4} ${b + 60} ${x - 8} ${b + 34} ${x - 14} ${b + 16}Z`

function ChairWithCoat() {
  const { x, seat, back, floor } = CHAIR
  const legs = `M${x - 20} ${seat}V${floor}M${x + 18} ${seat}V${floor - 4}M${x - 20} ${seat}V${back}`
  return (
    <g strokeLinejoin="round">
      {/* the chair, side on, its back towards the room */}
      <path d={legs} stroke={PAPER} strokeWidth={7.6} strokeLinecap="round" />
      <path d={legs} stroke={INK} strokeWidth={4.6} strokeLinecap="round" />
      <rect
        x={x - 26}
        y={seat - 4}
        width={50}
        height={7}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the rough outer coat over the chair's back, and its sleeve */}
      <path d={COAT(x, back)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={
          gouge(x - 30, back + 4, x - 8, back + 1, 1) +
          gouge(x - 26, back + 14, x - 25, back + 70, 1.2, 0.8) +
          gouge(x - 16, back + 12, x - 15, back + 66, 1, -0.4)
        }
        fill={PAPER}
      />
      <path d={SLEEVE(x, back)} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(x - 4, back + 76, x + 7, back + 76, 0.9)} fill={PAPER} />
      {/* his hat, on the seat */}
      <path
        d={`M${x - 4} ${seat - 4}C${x - 4} ${seat - 8} ${x + 26} ${seat - 8} ${x + 26} ${seat - 4}ZM${x + 1} ${seat - 6}L${x + 2} ${seat - 24}C${x + 8} ${seat - 27} ${x + 16} ${seat - 27} ${x + 21} ${seat - 24}L${x + 21} ${seat - 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={gouge(x + 2, seat - 11, x + 21, seat - 11, 0.8)} fill={PAPER} />
    </g>
  )
}

/** His book, shut, and his watch at eleven, on the table by the lamp. */
function BookAndWatch() {
  const y = SIDE.top
  return (
    <g>
      <rect
        x={SIDE.x0 + 6}
        y={y - 7}
        width={24}
        height={7}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path d={`M${SIDE.x0 + 6} ${y - 4.6}H${SIDE.x0 + 30}`} stroke={INK} strokeWidth={0.8} />
      <circle cx={SIDE.x1 - 14} cy={y - 5} r={5} fill={PAPER} stroke={INK} strokeWidth={1.1} />
      <path
        d={`M${SIDE.x1 - 14} ${y - 5}L${SIDE.x1 - 14} ${y - 8.6}M${SIDE.x1 - 14} ${y - 5}L${SIDE.x1 - 16.2} ${y - 6.4}`}
        stroke={INK}
        strokeWidth={0.9}
        strokeLinecap="round"
      />
    </g>
  )
}

function TheConvictReturns({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [420, 190], push: 1.03 })}>
      <TempleRoom uid={uid} night />
      <BookAndWatch />
      {/* the shadows the two cast on the boards, away from the lamp */}
      <g fill={INK}>
        <ellipse cx={MAGWITCH_AT[0] - 6} cy={MAGWITCH_AT[1] + 2} rx={44} ry={5} />
        <ellipse cx={PIP_AT[0] + 8} cy={PIP_AT[1] + 2} rx={38} ry={4.6} />
      </g>
      <ChairWithCoat />

      {/* the convict, come back from the fire, holding out both his hands */}
      <Person
        at={MAGWITCH_AT}
        scale={FIG}
        pose={{
          look: 'magwitch60',
          head: { rot: 4 },
          body: { neck: [9, -136], hip: [0, -70] },
          far: {
            pts: [
              [4, -127],
              [20, -107],
              [42, -103],
            ],
            hand: 'open',
            deg: -10,
            thumb: -1,
            size: 16.5,
            spread: 21,
          },
          near: {
            pts: [
              [11, -125],
              [27, -100],
              [51, -80],
            ],
            hand: 'open',
            deg: 2,
            thumb: -1,
            size: 16.5,
            spread: 21,
          },
          legs: {
            far: [
              [-3, -70],
              [-9, -36],
              [-15, -3],
            ],
            near: [
              [3, -70],
              [14, -36],
              [20, -3],
            ],
          },
        }}
      />

      {/* Pip, drawing back from him, a hand to his breast */}
      <Person
        at={PIP_AT}
        scale={FIG}
        flip
        pose={{
          look: 'pip',
          age: 'man',
          eye: 'wide',
          brow: 'up',
          head: { rot: -6 },
          body: { neck: [-9, -135], hip: [0, -70] },
          far: {
            pts: [
              [-12, -126],
              [-22, -100],
              [-30, -80],
            ],
            hand: 'open',
            deg: 110,
            thumb: 1,
          },
          near: {
            pts: [
              [-6, -126],
              [-1, -100],
              [5, -108],
            ],
            hand: 'open',
            deg: -80,
            thumb: 1,
            size: 14,
            spread: 14,
          },
          legs: {
            far: [
              [-3, -70],
              [-10, -36],
              [-16, -3],
            ],
            near: [
              [3, -70],
              [6, -36],
              [8, -3],
            ],
          },
        }}
      />
    </g>
  )
}

export const theConvictReturns: LinocutArt = { width: W, height: H, Draw: TheConvictReturns }

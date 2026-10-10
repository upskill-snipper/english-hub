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
 * Chapters 2 to 5: "Stolen food and a recaptured convict", the second moment
 * in the guide's timeline, at its last turn: in the soldiers' hut by the
 * landing-place on Christmas night, the recaptured convict owns to stealing
 * the food, and Joe forgives him. Every detail is from Chapter 5 in the held
 * text (src/data/full-texts/great-expectations.ts):
 *
 * - "we came to a rough wooden hut and a landing-place. There was a guard in
 *   the hut ... a smell of tobacco and whitewash, and a bright fire, and a
 *   lamp, and a stand of muskets, and a drum, and a low wooden bedstead, like
 *   an overgrown mangle without the machinery ... Three or four soldiers who
 *   lay upon it in their great-coats ... just lifted their heads and took a
 *   sleepy stare". So the walls are whitewashed boards, lit pale by a bright
 *   fire (the spot colour) and a hanging lamp, with the muskets stood in a
 *   rack, a drum on the floor, and soldiers lying in their greatcoats on a
 *   long low bedstead, one of them lifting his head to look.
 * - "he stood before the fire looking thoughtfully at it"; "the two were
 *   kept apart ... separately handcuffed"; "look at my leg you won't find much
 *   iron on it". So the convict stands before the fire, his hands cuffed in
 *   front of him and his leg-iron filed away, in his coarse grey and the rag
 *   round his head, as in the churchyard.
 * - "returned the sergeant, standing coolly looking at him with his arms
 *   folded". So the sergeant, in his shako and cross-belts, stands between
 *   them with his arms folded.
 * - "'So,' said my convict, turning his eyes on Joe in a moody manner, and
 *   without the least glance at me; 'so you're the blacksmith, are you? Then
 *   I'm sorry to say, I've eat your pie.' 'God knows you're welcome to
 *   it—so far as it was ever mine,' returned Joe"; "'Would us, Pip?'"; "I had
 *   hold of Joe's hand now". So the convict's frowning look goes past Pip to
 *   Joe, and Joe, in the coat he put on to follow the hunt, answers him with
 *   an open hand, holding Pip's hand in his other; Pip looks up at the man
 *   from Joe's side.
 * - "we saw the black Hulk lying out a little way from the mud of the shore,
 *   like a wicked Noah's ark. Cribbed and barred and moored by massive rusty
 *   chains"; "the convict whom I call the other convict was drafted off with
 *   his guard, to go on board first". So through the open door the Hulk lies
 *   out on the black river, barred and chained, and a boat is pulling out to
 *   it with the other convict. The torches at the landing are cut as light in
 *   paper: red beside water reads as blood.
 *
 * SAFEGUARDING (../index.ts). The fight in the ditch is not drawn, and nobody
 * is marked by it. Mr Wopsle, who came with them, is not named in the hut and
 * is not drawn.
 *
 * Seeds: 1201 (the whitewashed boards), 1202 (the floor), 1203 (the night
 * outside), 1204 (the lamp's light), 1205 (the chimney's stones).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 268
const HEARTH = { x0: 14, x1: 150, ax0: 38, ax1: 126, top: 190 }
const FIRE: [number, number] = [82, 246]
const LAMP: [number, number] = [452, 84]
const DOOR = { x0: 748, x1: 846, top: 62 }

type Marks = {
  wall: string
  boards: string
  floor: string
  stones: string
  night: string
  river: string
  lampRays: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The whitewash, lit by the fire low on the left and the lamp above: a pale
  // wall, printed as paper, with the shadow cut in ink only where neither
  // light reaches (up under the rafters, and over by the door).
  const light = (x: number, y: number) => {
    const fire = clamp(1 - Math.hypot((x - FIRE[0]) * 0.6, (y - FIRE[1]) * 0.9) / 560)
    const lamp = clamp(1 - Math.hypot(x - LAMP[0], (y - LAMP[1]) * 1.1) / 300)
    return Math.max(fire, lamp)
  }
  const wall = gougeField(
    rng(1201),
    { x0: HEARTH.x1, x1: DOOR.x0, y0: 30, y1: FLOOR },
    (x, y) => clamp(0.62 - light(x, y)) * 1.4,
    { spacing: 6.4, len: [20, 60], gap: [8, 22], max: 3.2 },
  )
  // The boards of the walls, upright, darker away from the fire.
  const r = rng(1201)
  let boards = ''
  for (let x = HEARTH.x1 + 18; x < DOOR.x0 - 4; x += between(r, 20, 28)) {
    const L = light(x, 150)
    boards += wedge(
      x,
      30,
      x + between(r, -0.6, 0.6),
      FLOOR,
      0.6 + (1 - L) * 1.4,
      0.8 + (1 - L) * 1.6,
    )
  }
  // The floor: boards running away from us, their joints cut where the fire reaches.
  const f = rng(1202)
  let floor = ''
  const V: [number, number] = [430, 110]
  for (let xb = -400; xb < W + 400; xb += 34) {
    const xt = V[0] + (xb - V[0]) * ((FLOOR - V[1]) / (H - V[1]))
    const L = clamp(1 - Math.abs(xb - FIRE[0] - 120) / 900)
    floor += wedge(xt, FLOOR, xb, H, 0.5, 0.8 + L * 2.2 + between(f, -0.2, 0.2))
  }
  for (let y = FLOOR + 2; y < FLOOR + 14; y += 3)
    floor += gouge(HEARTH.x1, y, DOOR.x1, y, 1.6 - (y - FLOOR) * 0.1)
  // The stones of the chimney breast.
  const s = rng(1205)
  let stones = ''
  for (let y = 40, row = 0; y < FLOOR; y += 18, row++)
    for (let x = HEARTH.x0 + 4 + (row % 2) * 16; x < HEARTH.x1 - 6; x += between(s, 26, 36)) {
      if (y > HEARTH.top - 14 && x > HEARTH.ax0 - 10 && x < HEARTH.ax1) continue
      stones += gouge(x, y + between(s, -1, 1), x + between(s, 16, 24), y + between(s, -1, 1), 1)
    }
  // The night through the door: a dark sky with a little cloud, the black river.
  const nt = rng(1203)
  const night = gougeField(
    nt,
    { x0: DOOR.x0, x1: DOOR.x1, y0: DOOR.top, y1: 176 },
    (_x, y) => clamp(0.34 - (y - 120) / 260),
    {
      spacing: 6,
      len: [14, 40],
      gap: [8, 20],
      max: 1.6,
    },
  )
  let river = ''
  for (let y = 186; y < FLOOR; y += 7)
    for (let x = DOOR.x0 + between(nt, 0, 14); x < DOOR.x1; x += between(nt, 22, 40))
      river += gouge(x, y + between(nt, -1, 1), x + between(nt, 8, 18), y + between(nt, -1, 1), 0.7)
  const lampRays = rays(rng(1204), LAMP[0], LAMP[1] + 10, {
    from: 16,
    to: 66,
    every: 9,
    width: 2.2,
  })
  cached = { wall, boards, floor, stones, night, river, lampRays }
  return cached
}

/** A soldier asleep on the bedstead in his greatcoat: a long humped shape, the head at `head`. */
function sleeper(x: number, y: number, len: number, flip = false) {
  const k = flip ? -1 : 1
  const X = (v: number) => n(x + k * v)
  return `M${X(0)} ${y}C${X(2)} ${y - 9} ${X(10)} ${y - 13} ${X(22)} ${y - 13}L${X(len - 16)} ${y - 11}C${X(len - 6)} ${y - 10} ${X(len)} ${y - 6} ${X(len)} ${y}Z`
}

function StolenFood({ uid }: ArtProps) {
  const m = marks()
  const id = { door: `${uid}-door` }
  const { x0, x1, ax0, ax1, top } = HEARTH
  return (
    <>
      <defs>
        <clipPath id={id.door}>
          <rect x={DOOR.x0} y={DOOR.top} width={DOOR.x1 - DOOR.x0} height={FLOOR - DOOR.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        {/* the whitewashed boards, pale in the firelight */}
        <rect x={HEARTH.x1} y={30} width={DOOR.x0 - HEARTH.x1} height={FLOOR - 30} fill={PAPER} />
        <path d={m.wall} fill={INK} />
        <path d={m.boards} fill={INK} />
        {/* the rafters */}
        <rect x={0} y={0} width={W} height={30} fill={INK} />
        <path d={gouge(0, 26, W, 26, 1.4) + gouge(0, 12, W, 14, 0.8)} fill={PAPER} />
        {[180, 330, 600].map((x) => (
          <path key={x} d={`M${x} 0V30`} stroke={PAPER} strokeWidth={LINE.carve} />
        ))}

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the hearth: a stone chimney breast, a bright fire on its grate, the hobs */}
        <rect x={x0} y={30} width={x1 - x0} height={FLOOR - 30} fill={INK} />
        <path d={m.stones} fill={PAPER} />
        <rect x={x0 - 6} y={top - 26} width={x1 - x0 + 12} height={8} fill={PAPER} />
        <rect x={x0 - 6} y={top - 18} width={x1 - x0 + 12} height={2} fill={INK} />
        <path
          d={`M${ax0} ${FLOOR}V${top + 16}Q${ax0} ${top} ${ax0 + 16} ${top}H${ax1 - 16}Q${ax1} ${top} ${ax1} ${top + 16}V${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the hobs either side of the grate, and the grate's bars */}
        <path d={`M${ax0 + 2} 240H62V246H${ax0 + 2}ZM102 240H${ax1 - 2}V246H102Z`} fill={PAPER} />
        <path
          d="M62 252H102M62 258H102M66 248V262M78 248V262M90 248V262M100 248V262"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <g fill={RED}>
          <path d="M62 249C62 238 70 232 76 236C78 226 88 226 90 236C96 232 104 238 102 249Z" />
          <path className="lc-flicker" d="M70 238C66 226 72 214 76 204C82 216 86 226 80 238Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.4 })}
            d="M86 238C84 228 88 220 92 212C96 222 98 230 94 238Z"
          />
        </g>

        {/* the lamp hanging from the rafter */}
        <path d={`M${LAMP[0]} 30V${LAMP[1] - 6}`} stroke={PAPER} strokeWidth={1.4} />
        <path d={m.lampRays} fill={PAPER} />
        <path
          d={`M${LAMP[0] - 9} ${LAMP[1] - 6}H${LAMP[0] + 9}L${LAMP[0] + 7} ${LAMP[1] + 16}H${LAMP[0] - 7}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9, delay: 0.2 })}
          d={`M${LAMP[0]} ${LAMP[1] + 12}C${LAMP[0] - 3} ${LAMP[1] + 8} ${LAMP[0] - 2} ${LAMP[1] + 4} ${LAMP[0]} ${LAMP[1]}C${LAMP[0] + 2} ${LAMP[1] + 4} ${LAMP[0] + 3} ${LAMP[1] + 8} ${LAMP[0]} ${LAMP[1] + 12}Z`}
          fill={RED}
        />

        {/* the low wooden bedstead, and the soldiers asleep on it in their great-coats */}
        <path d="M224 232H476L480 244H220Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M228 244V268M472 244V268M350 244V268" stroke={INK} strokeWidth={5} />
        <path d={gouge(226, 238, 474, 238, 1)} fill={PAPER} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <path d={sleeper(232, 232, 62)} />
          <path d={sleeper(470, 232, 96, true)} />
          <circle cx={234} cy={224} r={8} />
          <circle cx={476} cy={222} r={8} />
        </g>
        {/* one lifts his head for a sleepy stare, propped on his elbow */}
        <path
          d="M300 232L302 214C304 206 312 202 320 204L334 212C346 216 372 218 396 220C404 221 408 226 408 232Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M304 230L314 216" stroke={PAPER} strokeWidth={1.2} />
        <circle cx={316} cy={194} r={9.4} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M319.6 192.6Q322.4 191.2 324.8 192.6"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d="M312 186.4Q309 190 311 196" fill="none" stroke={PAPER} strokeWidth={0.9} />

        {/* the stand of muskets, and the drum */}
        <g stroke={PAPER} strokeWidth={4.4} strokeLinecap="round">
          {[500, 514, 528, 542].map((x) => (
            <path key={x} d={`M${x} 126V214`} />
          ))}
        </g>
        <g stroke={INK} strokeWidth={2} strokeLinecap="round">
          {[500, 514, 528, 542].map((x) => (
            <path key={x} d={`M${x} 126V214`} />
          ))}
        </g>
        <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
          {[500, 514, 528, 542].map((x) => (
            <path
              key={x}
              d={`M${x - 1.6} 210H${x + 1.6}L${x + 4} 252L${x + 5} 266H${x - 5}L${x - 3} 252Z`}
            />
          ))}
        </g>
        <path d="M490 150H552" stroke={PAPER} strokeWidth={6} />
        <path d="M490 150H552" stroke={INK} strokeWidth={3.4} />
        <path
          d="M548 284C548 278 588 278 588 284V316C588 322 548 322 548 316Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <ellipse cx={568} cy={284} rx={20} ry={5} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path
          d="M549 289L558 312L568 289L578 312L587 289"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d="M548 313Q568 319 588 313" fill="none" stroke={PAPER} strokeWidth={2} />

        {/* the door, open on the night: the black river and the Hulk lying out */}
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={FLOOR - DOOR.top}
          fill={INK}
        />
        <g clipPath={`url(#${id.door})`}>
          <path d={m.night} fill={PAPER} />
          <path d={`M${DOOR.x0} 182H${DOOR.x1}`} stroke={PAPER} strokeWidth={1} />
          <path d={m.river} fill={PAPER} />
          {/* "like a wicked Noah's ark ... Cribbed and barred and moored by massive rusty chains" */}
          <path
            d="M724 192L734 176H818L826 192ZM740 176V158H808V176Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d="M736 154L774 140L812 154Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <g fill={PAPER}>
            {[748, 764, 780, 796].map((x) => (
              <rect key={x} x={x} y={164} width={7} height={6} />
            ))}
          </g>
          <path
            d="M751.5 164V170M767.5 164V170M783.5 164V170M799.5 164V170"
            stroke={INK}
            strokeWidth={1.2}
          />
          <path
            d="M732 186L720 206M822 186L834 206"
            stroke={PAPER}
            strokeWidth={1.4}
            strokeDasharray="2.4 1.6"
          />
          {/* the boat pulling out to it */}
          <path d="M748 226H784L778 232H754Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
          <g fill={INK} stroke={PAPER} strokeWidth={1}>
            <circle cx={757} cy={219} r={3.2} />
            <circle cx={767} cy={218} r={3.2} />
            <circle cx={777} cy={219} r={3.2} />
          </g>
          <path d="M752 224L744 234M772 224L766 236" stroke={PAPER} strokeWidth={1.1} />
          {/* the torches at the landing, cut as light */}
          <path d={gouge(744, 262, 744, 236, 1.6) + gouge(800, 264, 800, 240, 1.6)} fill={PAPER} />
        </g>
        <path
          d={`M${DOOR.x0 - 4} ${FLOOR}V${DOOR.top - 4}H${DOOR.x1 + 4}V${FLOOR}`}
          fill="none"
          stroke={INK}
          strokeWidth={8}
        />
        <path
          d={`M${DOOR.x0 - 8} ${FLOOR}V${DOOR.top - 8}H${DOOR.x1 + 8}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect x={DOOR.x1 + 8} y={30} width={W - DOOR.x1 - 8} height={FLOOR - 30} fill={INK} />
        <path
          d={
            gouge(DOOR.x1 + 18, 40, DOOR.x1 + 18, FLOOR - 4, 1) +
            gouge(W - 10, 40, W - 10, FLOOR - 4, 1)
          }
          fill={PAPER}
        />

        {/* the convict before the fire, his hands cuffed, his eyes on Joe */}
        <Person
          at={[206, 324]}
          scale={1.2}
          pose={{
            look: 'magwitch',
            eye: 'open',
            brow: 'frown',
            cuffs: true,
            body: { neck: [3, -136], hip: [0, -70] },
            head: { at: [8, -158], rot: 6 },
            far: {
              pts: [
                [-3, -130],
                [4, -102],
                [18, -84],
              ],
              hand: 'mitt',
              deg: 40,
            },
            near: {
              pts: [
                [5, -130],
                [12, -102],
                [22, -86],
              ],
              hand: 'mitt',
              deg: 36,
            },
          }}
        />

        {/* the sergeant, between them, his arms folded */}
        <Person
          at={[384, 316]}
          scale={1.08}
          flip
          pose={{
            look: 'soldier',
            far: {
              pts: [
                [-4, -130],
                [-1, -106],
              ],
              hand: 'none',
            },
            near: {
              pts: [
                [4, -130],
                [8, -106],
              ],
              hand: 'none',
            },
          }}
        >
          {/* his arms folded: the forearms crossed in front of his chest */}
          <path
            d="M-4 -112C2 -116 14 -116 19 -112C21 -109 20 -104 17 -102C10 -100 0 -100 -4 -104Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.6}
            strokeLinejoin="round"
          />
          <path d="M0 -106.6Q8 -109.4 17 -107.6" fill="none" stroke={PAPER} strokeWidth={1} />
        </Person>

        {/* Joe, answering him, with Pip by the hand */}
        <Person
          at={[648, 324]}
          scale={1.14}
          flip
          pose={{
            look: 'joe',
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -130],
                [10, -106],
                [34, -96],
              ],
              hand: 'open',
              deg: 10,
              thumb: 1,
              size: 15,
              spread: 18,
            },
            near: {
              pts: [
                [4, -130],
                [-2, -104],
                [-14, -84],
              ],
              hand: 'grip',
              deg: 120,
            },
          }}
        />
        <Person
          at={[712, 327]}
          scale={1.26}
          flip
          pose={{
            look: 'pip',
            age: 'child',
            head: { rot: -14 },
            eye: 'open',
            far: {
              pts: [
                [-2, -78],
                [10, -64],
                [25, -74],
              ],
              hand: 'mitt',
              deg: -36,
            },
          }}
        />
      </g>
    </>
  )
}

export const stolenFoodAndARecapturedConvict: LinocutArt = {
  width: W,
  height: H,
  Draw: StolenFood,
}

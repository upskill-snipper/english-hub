import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cup, Person } from './people'

/**
 * Act 1, Scene 3: "Revels at Olivia's house", the third moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "A Room in Olivia's House." "Enter Sir Toby and Maria." Maria, small
 *   ("the little villain", 2.5), stands on the left, one hand on her hip and
 *   the other pointing at him:
 *   "By my troth, Sir Toby, you must come in earlier o' nights ... Ay, but
 *   you must confine yourself within the modest limits of order."
 * - Sir Toby will not: "Confine? I'll confine myself no finer than I am.
 *   These clothes are good enough to drink in, and so be these boots too". So
 *   he sprawls in a great chair by the fire with his booted legs stretched
 *   out across the floor and a cup held up in his hand, raised to his niece
 *   ("I'll drink to her as long as there is a passage in my throat"). The
 *   cup is plain, held out from him rather than at his mouth, and he is not
 *   shown the worse for it: the scene's joke is his answer, not his state.
 * - "What, wench! Castiliano vulgo: for here comes Sir Andrew Agueface."
 *   "Enter Sir Andrew." So Sir Andrew, "as tall a man as any's in Illyria",
 *   his straight pale hair hanging "like flax on a distaff", comes in at the
 *   door on the right with a hand raised in greeting: "Sir Toby Belch! How
 *   now, Sir Toby Belch?"
 *
 * The play does not give the hour, so nothing in the room says it is night:
 * it is lit by the fire, the spot colour, which burns at any hour. The people
 * are cut from ./people.tsx. Nothing is taken from a film, television or
 * stage production. Seeds: 1301 (the wall), 1302 (the floorboards), 1304
 * (the panelling).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const SKIRT = 262
/** The fire, in the hearth. */
const FIRE: Pt = [392, 226]
/** The doorway on the right, where Sir Andrew comes in. */
const DOOR = { x0: 680, x1: 784, top: 46 }

type Marks = {
  wall: string
  wains: string
  floor: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit by the fire, and a little by the open door; the cuts in
  // the wall follow that light.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - FIRE[0]) * 0.7, (y - FIRE[1]) * 1.1) / 280),
      clamp(1 - Math.hypot(x - 732, (y - 150) * 0.8) / 150) * 0.6,
      0.05,
    )
  const wall = gougeField(rng(1301), { x0: 0, x1: W, y0: 6, y1: 154 }, light, {
    spacing: 6.4,
    len: [16, 64],
    gap: [6, 22],
    max: 3.4,
  })
  // Panelling below the dado rail: upright cuts, wider where the fire lights them.
  const p = rng(1304)
  let wains = ''
  for (let x = 4; x < W; x += 9) {
    if (x > 318 && x < 468) continue
    if (x > DOOR.x0 - 14 && x < DOOR.x1 + 14) continue
    const L = light(x, 214)
    wains += wedge(x + between(p, -0.6, 0.6), 166, x + between(p, -0.6, 0.6), 250, 0.4, 0.8 + L * 3)
  }
  // The floorboards, running back towards the hearth.
  const r = rng(1302)
  let floor = ''
  const V: Pt = [400, 40]
  for (let xt = -700; xt < W + 700; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + (H - SKIRT) * t0,
        xt + (xb - xt) * t1,
        SKIRT + (H - SKIRT) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = SKIRT + 1; y < SKIRT + 14; y += 3)
    floor += gouge(0, y, W, y, 2.4 - (y - SKIRT) * 0.15)
  cached = { wall, wains, floor }
  return cached
}

function RevelsAtOliviasHouse({ uid }: ArtProps) {
  const m = marks()
  const hearth = `${uid}-hearth`
  return (
    <>
      <defs>
        <clipPath id={hearth}>
          <path d="M346 262V214Q346 196 364 196H420Q438 196 438 214V262Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 220], push: 1.03 })}>
        {/* the wall, the dado rail and the panelling below it */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={156} width={W} height={6} fill={PAPER} />
        <rect x={0} y={162} width={W} height={1.6} fill={INK} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={252} width={W} height={10} fill={PAPER} />
        <rect x={0} y={256} width={W} height={1.4} fill={INK} />

        {/* the floor */}
        <rect x={0} y={SKIRT} width={W} height={H - SKIRT} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the fireplace: a stone surround and mantel, the fire in the hearth */}
        <path d="M318 262V150H466V262Z" fill={PAPER} />
        <path d="M310 146H474V154H310Z" fill={INK} />
        <path d="M306 140H478V146H306Z" fill={PAPER} />
        <path
          d={
            gouge(330, 160, 330, 256, 1.4) +
            gouge(454, 160, 454, 256, 1.4) +
            gouge(360, 166, 424, 166, 1.1) +
            gouge(336, 186, 336, 250, 0.8) +
            gouge(448, 186, 448, 250, 0.8)
          }
          fill={INK}
        />
        <path d="M346 262V214Q346 196 364 196H420Q438 196 438 214V262Z" fill={INK} />
        <g clipPath={`url(#${hearth})`}>
          <path d="M356 252H428L432 262H352Z" fill={INK} />
          <path
            d="M360 250C364 244 372 244 376 248C380 242 392 242 396 248C402 242 414 244 418 250Z"
            fill={RED}
          />
          <path
            className="lc-flicker"
            d="M376 248C372 238 378 226 384 216C388 228 394 236 388 248Z"
            fill={RED}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M394 248C392 240 396 232 400 226C404 234 408 240 404 248Z"
            fill={RED}
          />
          <path d="M362 252L410 246L412 250L364 256Z" fill={INK} stroke={PAPER} strokeWidth={1} />
          <path d="M378 246L424 252L422 256L376 250Z" fill={INK} stroke={PAPER} strokeWidth={1} />
        </g>

        {/* the doorway on the right, lit from the hall beyond */}
        <path d={`M${DOOR.x0} ${SKIRT}V${DOOR.top}H${DOOR.x1}V${SKIRT}Z`} fill={PAPER} />
        <path
          d={`M${DOOR.x0 - 10} ${SKIRT}V${DOOR.top - 10}H${DOOR.x1 + 10}V${SKIRT}H${DOOR.x1 + 4}V${DOOR.top - 4}H${DOOR.x0 - 4}V${SKIRT}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {/* the open door, swung back against the wall */}
        <path
          d={`M${DOOR.x1 + 14} ${SKIRT + 4}V${DOOR.top - 2}L${DOOR.x1 + 44} ${DOOR.top + 14}V${SKIRT + 18}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(DOOR.x1 + 24, DOOR.top + 18, DOOR.x1 + 24, SKIRT - 4, 1.2) +
            gouge(DOOR.x1 + 34, DOOR.top + 24, DOOR.x1 + 34, SKIRT + 2, 1.2)
          }
          fill={PAPER}
        />

        {/* Maria, a hand on her hip, pointing at him */}
        <Person
          at={[150, 312]}
          pose={{
            look: 'maria',
            head: { rot: -6 },
            far: {
              pts: [
                [-3, -127],
                [-16, -110],
                [-6, -97],
              ],
              hand: 'mitt',
              deg: 20,
            },
            near: {
              pts: [
                [3, -127],
                [20, -116],
                [38, -120],
              ],
              hand: 'point',
              deg: -8,
            },
          }}
        />

        {/* Sir Toby's great chair, and Sir Toby sprawled in it */}
        <path
          d="M520 314L516 196C516 188 520 184 528 184L540 186L544 314Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d="M452 262H540V272H452ZM458 272L454 314M534 272L538 314"
          fill={INK}
          stroke={INK}
          strokeWidth={4}
        />
        <path d={gouge(522, 200, 524, 304, 1.2)} fill={PAPER} />
        <Person
          at={[506, 314]}
          flip
          pose={{
            look: 'sir-toby',
            body: { neck: [-12, -116], hip: [0, -52] },
            head: { at: [-8, -138], rot: -10 },
            legs: {
              far: [
                [-2, -52],
                [36, -44],
                [62, -6],
              ],
              near: [
                [2, -52],
                [44, -40],
                [76, -4],
              ],
            },
            far: {
              pts: [
                [-14, -112],
                [-26, -86],
                [-10, -72],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [-10, -112],
                [16, -106],
                [38, -118],
              ],
              hand: 'grip',
              deg: -84,
            },
          }}
        >
          <Cup at={[42, -119]} />
        </Person>

        {/* Sir Andrew, come in at the door, his hand raised in greeting */}
        <Person
          at={[738, 304]}
          flip
          pose={{
            look: 'sir-andrew',
            head: { rot: -4 },
            far: {
              pts: [
                [-4, -132],
                [-8, -104],
                [-4, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [20, -116],
                [30, -132],
              ],
              hand: 'open',
              deg: -64,
              thumb: -1,
              spread: 20,
            },
          }}
        />
      </g>
    </>
  )
}

export const revelsAtOliviasHouse: LinocutArt = {
  width: W,
  height: H,
  Draw: RevelsAtOliviasHouse,
}

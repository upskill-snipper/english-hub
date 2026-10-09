import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { archway, battlemented, voussoirs } from '../../othello/panels/garden'
import { Target, Trumpet } from './field-gear'
import { cut } from './light-cuts'
import { Person, type P, type Pose } from './people'

/**
 * Act 4, Scene 8: "A day of victory", the seventeenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Under the Walls of Alexandria." "Alarum. Enter Antony again in a march;
 *   Scarus with others." So the walls and the gate of the city stand on the
 *   right, and Antony's soldiers march in from the field on the left.
 * - ANTONY: "Bear our hacked targets like the men that owe them";
 *   "Trumpeters, With brazen din blast you the city’s ear". So the soldiers
 *   carry round targets with their rims hacked, and two of them raise long
 *   trumpets towards the city. No sword is drawn on anyone (./people.tsx).
 * - "Enter Cleopatra." ANTONY: "O thou day o’ th’ world, Chain mine armed
 *   neck"; CLEOPATRA: "Lord of lords! O infinite virtue, com’st thou smiling
 *   from The world’s great snare uncaught?" So she has come out of the gate,
 *   and he goes to her in his armour, his hand reaching for hers, hers for
 *   his. The play gives her no crown in this scene, so she wears none (the
 *   kit's rule).
 * - ANTONY: "Behold this man. Commend unto his lips thy favouring hand";
 *   "He hath fought today As if a god". So his other hand is on Scarus's
 *   shoulder, presenting him, and Scarus, bareheaded, bows his head. His
 *   wounds ("I had a wound here that was like a T", 4.7) are never drawn.
 * - RED is the sun over the walls, a full disc: the day of the victory, and
 *   Antony greets the queen as "thou day o’ th’ world". It is the one red
 *   thing, far above any face or hand. The play names her gift, "An armour
 *   all of gold", but the print has no gold, and the armour is not brought
 *   on in the scene, so it is left to the words.
 *
 * Nothing is taken from a film or stage production. Seed: 1701.
 */

const W = 860
const H = 340
/** The far edge of the plain. */
const HORIZON = 262
/** The city wall: its face, its top, its foot, the gate. */
const WALL = { x0: 600, x1: 872, top: 92, foot: 318 }
const GATE = { x0: 724, x1: 800, spring: 210 }
const SUN: P = [560, 66]

type Marks = { sky: string; rays: string; ground: string; courses: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1701)
  // The sky, pale, scored more heavily higher up, and clear round the sun:
  // each long cut of the Othello kit's daySky, kept only where it does not
  // cross the sun's halo.
  let sky = ''
  for (let y = 4; y < HORIZON - 4; y += between(r, 6.5, 9)) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 30, 120)
      const D = Math.max(0, 0.55 - y / 420)
      const near = Math.abs(y - SUN[1]) < 64 && x < SUN[0] + 66 && x + len > SUN[0] - 66
      if (!near && r() < 0.25 + D * 0.7)
        sky += cut(x, y, len, 0.35 + D * 1.3, between(r, -1, 1), between(r, -0.5, 0.5))
      x += len + between(r, 10, 70) * (1.2 - D)
    }
  }
  // The sun's rays, cut in ink from the disc out into the clear sky.
  let rays = ''
  for (let k = 0; k < 24; k++) {
    const a = (k / 24) * Math.PI * 2 + 0.06
    const r0 = 38
    const r1 = 38 + (k % 2 ? between(r, 14, 22) : between(r, 26, 38))
    rays += wedge(
      SUN[0] + Math.cos(a) * r0,
      SUN[1] + Math.sin(a) * r0,
      SUN[0] + Math.cos(a) * r1,
      SUN[1] + Math.sin(a) * r1,
      2.6,
      0.4,
    )
  }
  // The trodden ground under the walls, scored more heavily towards the front.
  let ground = ''
  for (let y = HORIZON + 3; y < H; ) {
    const t = (y - HORIZON) / (H - HORIZON)
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 4, 16) * (0.8 + t * 0.8)
      if (r() < 0.28 + t * 0.5) ground += cut(x, y, len, 0.5 + t * 1.3, between(r, -1.4, 1.4))
      x += len + between(r, 6, 26) * (1.3 - t * 0.6)
    }
    y += 3.4 + t * 2.4
  }
  // The wall's dressed stone: bed joints and staggered upright joints in ink.
  let courses = ''
  let row = 0
  for (let y = WALL.foot - 18; y > WALL.top + 6; y -= 18, row++) {
    courses += cut(WALL.x0, y, WALL.x1 - WALL.x0, 0.7, between(r, -0.6, 0.6))
    for (let x = WALL.x0 + (row % 2 ? 12 : 34); x < WALL.x1; x += between(r, 38, 50))
      if (x < GATE.x0 - 4 || x > GATE.x1 + 4 || y < GATE.spring - 50)
        courses += wedge(x, y + 1.4, x + between(r, -0.6, 0.6), y + 16.6, 1.3, 1.3)
  }
  // The shadows on the ground under the people.
  let shade = ''
  const pools: [number, number, number][] = [
    [96, 322, 62],
    [220, 322, 62],
    [338, 322, 40],
    [436, 326, 34],
    [512, 328, 42],
    [646, 328, 40],
  ]
  for (const [cx, cy, half] of pools)
    for (let k = 0; k < 4; k++) {
      const w = half * (1 - k / 5)
      shade += cut(cx - w, cy + k * 2.4 - 3, w * 2, 1.1, between(r, -0.4, 0.4))
    }
  cached = { sky, rays, ground, courses, shade }
  return cached
}

/** Antony's soldiers, marching in towards the gate: helmeted, their targets on their arms. */
const MARCHING: P[][] = [
  [
    [-3, -70],
    [-16, -38],
    [-26, -3],
  ],
  [
    [3, -70],
    [14, -38],
    [20, -3],
  ],
]

/** A soldier marching, his hacked target on his near arm. */
function Shieldbearer({ at, s }: { at: P; s: number }) {
  return (
    <Person
      pose={{
        look: 'soldier',
        legs: { far: MARCHING[0], near: MARCHING[1] },
        far: {
          pts: [
            [-4, -130],
            [-16, -108],
            [-20, -86],
          ],
          hand: 'mitt',
        },
        near: {
          pts: [
            [5, -128],
            [12, -106],
            [18, -94],
          ],
          hand: 'none',
        },
      }}
      at={at}
      scale={s}
    >
      <Target at={[10, -102]} r={25} hacked />
    </Person>
  )
}

/** A trumpeter marching, his long trumpet raised towards the city. */
function Trumpeter({ at, s }: { at: P; s: number }) {
  const pose: Pose = {
    look: 'soldier',
    legs: { far: MARCHING[0], near: MARCHING[1] },
    head: { rot: -10 },
    far: {
      pts: [
        [-4, -130],
        [10, -136],
        [28, -160],
      ],
      hand: 'grip',
      deg: -20,
    },
    near: {
      pts: [
        [5, -128],
        [28, -128],
        [48, -170],
      ],
      hand: 'grip',
      deg: -20,
    },
  }
  return (
    <Person pose={pose} at={at} scale={s}>
      <Trumpet lips={[19, -153]} angle={-26} len={100} />
    </Person>
  )
}

function ADayOfVictory(_props: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [520, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* the sun over the walls: "O thou day o’ th’ world" */}
      <path d={m.rays} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={31} fill={RED} stroke={INK} strokeWidth={1.6} />

      {/* the plain the army comes in from */}
      <path
        d={`M-6 ${HORIZON}C60 ${HORIZON - 10} 130 ${HORIZON - 14} 210 ${HORIZON - 6}C260 ${HORIZON - 2} 300 ${HORIZON - 9} 360 ${HORIZON - 4}L360 ${HORIZON}Z`}
        fill={INK}
      />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.6} />
      <path d={m.ground} fill={INK} />
      <path d={m.shade} fill={INK} />

      {/* the walls of Alexandria, and the gate the queen has come out of */}
      <path
        d={battlemented(WALL.x0, WALL.x1, WALL.top, WALL.foot, 20, 13, 13)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path d={m.courses} fill={INK} />
      <path
        d={archway(GATE.x0 - 12, GATE.x1 + 12, GATE.spring, WALL.foot)}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.6}
      />
      <path
        d={voussoirs(GATE.x0, GATE.x1, GATE.spring, 12, 9)}
        stroke={INK}
        strokeWidth={1.6}
        fill="none"
      />
      <path d={archway(GATE.x0, GATE.x1, GATE.spring, WALL.foot)} fill={INK} />
      {/* the gate's leaves, swung open into the dark */}
      <path
        d={`M${GATE.x0 + 4} ${WALL.foot}L${GATE.x0 + 4} ${GATE.spring + 4}L${GATE.x0 + 18} ${GATE.spring + 14}L${GATE.x0 + 18} ${WALL.foot - 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      <path
        d={`M${GATE.x1 - 4} ${WALL.foot}L${GATE.x1 - 4} ${GATE.spring + 4}L${GATE.x1 - 18} ${GATE.spring + 14}L${GATE.x1 - 18} ${WALL.foot - 6}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.4}
      />
      {/* the shadow along the wall's foot */}
      <path d={gouge(WALL.x0, WALL.foot + 2, WALL.x1, WALL.foot + 2, 2.2)} fill={INK} />

      {/* the army marching in, with its hacked targets and its trumpets */}
      <Shieldbearer at={[60, 320]} s={0.94} />
      <Trumpeter at={[128, 320]} s={0.94} />
      <Shieldbearer at={[196, 320]} s={0.94} />
      <Trumpeter at={[262, 320]} s={0.94} />
      <Shieldbearer at={[330, 320]} s={0.94} />

      {/* Scarus, presented to the queen */}
      <Person
        pose={{
          look: 'scarus',
          head: { rot: 20 },
          eye: 'down',
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [-6, -80],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [10, -104],
              [12, -80],
            ],
            hand: 'mitt',
          },
        }}
        at={[434, 324]}
        scale={1.08}
      />

      {/* Antony, in his armour, his hand on Scarus's shoulder and reaching for hers */}
      <Person
        pose={{
          look: 'antony',
          mouth: 'open',
          legs: {
            far: [
              [-3, -70],
              [-12, -38],
              [-20, -3],
            ],
            near: [
              [3, -70],
              [16, -38],
              [24, -3],
            ],
          },
          far: {
            pts: [
              [-4, -132],
              [-26, -124],
              [-44, -136],
            ],
            hand: 'open',
            deg: 172,
            thumb: -1,
          },
          near: {
            pts: [
              [5, -128],
              [28, -114],
              [48, -124],
            ],
            hand: 'open',
            deg: -16,
            thumb: -1,
          },
        }}
        at={[510, 326]}
        scale={1.1}
      />

      {/* Cleopatra, come out of the gate to meet him */}
      <Person
        pose={{
          look: 'cleopatra',
          head: { rot: -4 },
          far: {
            pts: [
              [-4, -124],
              [8, -104],
              [24, -100],
            ],
            hand: 'open',
            deg: 12,
          },
          near: {
            pts: [
              [5, -122],
              [24, -110],
              [42, -118],
            ],
            hand: 'open',
            deg: -14,
            thumb: -1,
          },
        }}
        at={[650, 326]}
        scale={1.1}
        flip
      />
    </g>
  )
}

export const aDayOfVictory: LinocutArt = { width: W, height: H, Draw: ADayOfVictory }

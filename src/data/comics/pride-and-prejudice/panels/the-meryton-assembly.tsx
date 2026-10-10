import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
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
import { timing } from '@/components/comics/linocut/timing'

import { Person, seatedBody, type P } from './people'

/**
 * Chapter 3: "The Meryton assembly", the second moment in the guide's
 * timeline. Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "Elizabeth Bennet had been obliged, by the scarcity of gentlemen, to sit
 *   down for two dances; and during part of that time, Mr. Darcy had been
 *   standing near enough for her to overhear a conversation between him and
 *   Mr. Bingley, who came from the dance for a few minutes, to press his
 *   friend to join it." So Elizabeth sits on the bench at the side of the
 *   room, Darcy stands with his back to her, and Bingley faces him, out of the
 *   dance.
 * - "'But there is one of her sisters sitting down just behind you'"; "turning
 *   round, he looked for a moment at Elizabeth, till catching her eye, he
 *   withdrew his own and coldly said". So Darcy's head is turned back over
 *   his shoulder to her, his chin up and his lid lowered, and she looks up at
 *   him: the moment their eyes meet, before he says it.
 * - "his fine, tall person, handsome features, noble mien ... he was
 *   discovered to be proud, to be above his company"; "spent the rest of the
 *   evening in walking about the room". So he is the tallest figure in the
 *   room, his hands behind his back.
 * - "Mr. Bingley was good looking and gentleman-like; he had a pleasant
 *   countenance, and easy, unaffected manners"; "'Come, Darcy,' said he, 'I
 *   must have you dance.'" So he smiles, and holds out an open hand to his
 *   friend.
 * - "'You are dancing with the only handsome girl in the room,' said Mr.
 *   Darcy, looking at the eldest Miss Bennet." Jane is Bingley's partner, so
 *   she waits for him in the set behind, smiling, with the other couples
 *   going down the dance.
 * - It is a ball, at night: the room is lit by candles in two chandeliers,
 *   whose flames are the spot colour. There are no red coats here: the
 *   militia do not come to Meryton until Chapter 7.
 *
 * Everyone is in the evening dress of 1811 (the kit): the ladies in short
 * sleeves and long gloves, the gentlemen in tailcoats, breeches and
 * stockings. The assembly rooms are not described, so the room is plain: a
 * long panelled wall with pilasters, a bench along it, a boarded floor.
 *
 * Seeds: 1201 (the wall), 1202 (the floor), 1203 and 1204 (the light round
 * each chandelier).
 */

const W = 860
const H = 340
/** The foot of the far wall. */
const BASE = 226
/** The two chandeliers: where each ring hangs. */
const LAMPS: P[] = [
  [214, 54],
  [700, 54],
]

type Marks = {
  wall: string
  wains: string
  floor: string
  shade: string
  glow: string[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1201)
  // The wall is lit by the two chandeliers, and dark between and below them.
  const light = (x: number, y: number) => {
    const l = Math.max(
      ...LAMPS.map(([lx, ly]) => clamp(1 - Math.hypot((x - lx) * 0.8, (y - ly) * 1.1) / 230)),
    )
    return Math.max(l, 0.06)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 172 }, light, {
    spacing: 7,
    len: [20, 84],
    gap: [6, 22],
  })
  let wains = ''
  for (let x = 4; x < W; x += 12) {
    const L = light(x, 196)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      180,
      x + between(r, -0.6, 0.6),
      220,
      0.4,
      0.5 + L * 2.6,
    )
  }

  // Boards running away to the far end of the room.
  const f = rng(1202)
  let floor = ''
  const V: P = [430, 20]
  for (let xt = -900; xt < 1700; xt += 40) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        BASE + (H - BASE) * t0,
        xt + (xb - xt) * t1,
        BASE + (H - BASE) * t1,
        0.7 + t0 * 2.6,
        0.7 + t1 * 2.6,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  let shade = ''
  for (let y = BASE + 2; y < BASE + 14; y += 3) shade += gouge(0, y, W, y, 2 - (y - BASE) * 0.12)
  // Pools of shadow under the people standing.
  for (const [x0, x1, yc] of [
    [300, 410, 324],
    [430, 530, 322],
    [74, 262, 322],
  ]) {
    for (let y = yc - 8; y < yc + 10; y += 3.2) {
      const w = 1 - Math.abs(y - yc) / 10
      shade += gouge(x0 - w * 8, y, x1 + w * 8, y + 0.5, 0.6 + w * 1.8)
    }
  }
  const glow = LAMPS.map(([x, y], i) =>
    rays(rng(1203 + i), x, y - 6, { from: 30, to: 96, every: 10, width: 2.4 }),
  )
  cached = { wall, wains, floor, shade, glow }
  return cached
}

/** A pilaster against the wall: a flat column, fluted, with a capital. */
function Pilaster({ x }: { x: number }) {
  return (
    <g>
      <rect x={x - 9} y={14} width={18} height={BASE - 14} fill={PAPER} />
      <rect x={x - 13} y={8} width={26} height={8} fill={PAPER} />
      <rect x={x - 13} y={16} width={26} height={2} fill={INK} />
      <path
        d={`M${x - 4} 24V${BASE - 6}M${x} 24V${BASE - 6}M${x + 4} 24V${BASE - 6}`}
        stroke={INK}
        strokeWidth={1.1}
      />
    </g>
  )
}

/**
 * A chandelier of candles hanging on its chain: a ring, five curved arms, a
 * candle on each, the flames in the spot colour, flickering.
 */
function Chandelier({ at: [x, y], k }: { at: P; k: number }) {
  const cups: P[] = [-26, -13, 0, 13, 26].map((dx) => [x + dx, y - 6 + Math.abs(dx) * 0.12])
  return (
    <g>
      <path d={`M${x} 0V${y - 16}`} stroke={INK} strokeWidth={2.4} />
      <path d={`M${x} 0V${y - 16}`} stroke={PAPER} strokeWidth={0.7} />
      <path
        d={cups
          .map(([cx, cy]) => `M${x} ${y + 6}Q${(x + cx) / 2} ${y + 10} ${cx} ${cy + 3}`)
          .join('')}
        stroke={INK}
        strokeWidth={2.2}
        fill="none"
      />
      <ellipse cx={x} cy={y + 4} rx={9} ry={6} fill={INK} stroke={PAPER} strokeWidth={1} />
      <path d={`M${x} ${y - 16}V${y + 14}`} stroke={INK} strokeWidth={3} />
      {cups.map(([cx, cy], i) => (
        <g key={i}>
          <rect x={cx - 3} y={cy} width={6} height={3} fill={INK} />
          <rect
            x={cx - 1.3}
            y={cy - 9}
            width={2.6}
            height={9}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.6}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.7 + ((i + k) % 3) * 0.15, delay: (i * 0.13 + k * 0.3) % 0.6 })}
            d={`M${cx} ${cy - 9}C${cx - 2.4} ${cy - 12} ${cx - 1} ${cy - 15} ${cx} ${cy - 18}C${cx + 1} ${cy - 15} ${cx + 2.4} ${cy - 12} ${cx} ${cy - 9}Z`}
            fill={RED}
          />
        </g>
      ))}
    </g>
  )
}

/** The bench along the side of the room, where Elizabeth sits out. */
function Bench() {
  return (
    <g>
      <path d="M66 248H262L264 264H64Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(72, 256, 256, 256, 1)} fill={PAPER} />
      <path
        d="M76 264L74 320M252 264L254 320M164 264L164 320"
        stroke={INK}
        strokeWidth={5}
        strokeLinecap="round"
        fill="none"
      />
    </g>
  )
}

function Assembly({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [320, 150], push: 1.03 })}>
      {/* the far wall, lit round the two chandeliers, and its panelling */}
      <path d={m.wall} fill={PAPER} />
      {m.glow.map((d, i) => (
        <path key={i} d={d} fill={PAPER} />
      ))}
      <rect x={0} y={172} width={W} height={5} fill={PAPER} />
      <rect x={0} y={179} width={W} height={1.4} fill={PAPER} />
      <path d={m.wains} fill={PAPER} />
      <rect x={0} y={BASE - 5} width={W} height={5} fill={PAPER} />
      {[40, 470, 830].map((x) => (
        <Pilaster key={x} x={x} />
      ))}
      <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />

      {/* the set, going down the dance at the far end of the room */}
      <Person
        pose={{ look: 'jane', evening: true, head: { rot: -4 } }}
        at={[600, 252]}
        scale={0.74}
        flip
      />
      <Person
        pose={{
          look: 'man',
          near: {
            pts: [
              [1, -132],
              [16, -124],
              [30, -121],
            ],
            hand: 'mitt',
            deg: -6,
          },
        }}
        at={[662, 252]}
        scale={0.72}
      />
      <Person
        pose={{
          look: 'lady',
          evening: true,
          near: {
            pts: [
              [3, -126],
              [18, -120],
              [33, -117],
            ],
            hand: 'mitt',
            deg: -6,
          },
        }}
        at={[724, 252]}
        scale={0.74}
        flip
      />
      <Person pose={{ look: 'lady', evening: true }} at={[790, 252]} scale={0.74} flip />

      {LAMPS.map((at, k) => (
        <Chandelier key={k} at={at} k={k} />
      ))}

      <Bench />
      {/* Elizabeth, sitting out, looking up as his eye meets hers */}
      <Person
        pose={{
          look: 'elizabeth',
          seated: true,
          evening: true,
          body: seatedBody(46, 1, true),
          head: { rot: -9 },
          legs: {
            far: [
              [-2, -48],
              [26, -50],
              [26, -4],
            ],
            near: [
              [2, -48],
              [30, -50],
              [31, -4],
            ],
          },
          near: {
            pts: [
              [4, -92],
              [8, -72],
              [22, -62],
            ],
            hand: 'mitt',
            deg: 6,
          },
          far: {
            pts: [
              [-2, -92],
              [0, -72],
              [16, -62],
            ],
            hand: 'mitt',
            deg: 4,
          },
        }}
        at={[150, 318]}
        scale={1.56}
      />

      {/* Darcy, his back to her, turning his head to look down at her */}
      <Person
        pose={{
          look: 'darcy',
          proud: true,
          head: { back: true, rot: 8 },
          near: {
            pts: [
              [1, -132],
              [-7, -106],
              [-14, -88],
            ],
            hand: 'none',
          },
          far: {
            pts: [
              [-4, -132],
              [-11, -106],
              [-15, -88],
            ],
            hand: 'none',
          },
        }}
        at={[352, 324]}
        scale={1.44}
      />

      {/* Bingley, out of the dance, holding out his hand to his friend */}
      <Person
        pose={{
          look: 'bingley',
          body: { neck: [5, -137], hip: [0, -72] },
          near: {
            pts: [
              [7, -130],
              [22, -108],
              [40, -104],
            ],
            hand: 'open',
            deg: -12,
            spread: 16,
            thumb: -1,
          },
        }}
        at={[494, 322]}
        scale={1.44}
        flip
      />
    </g>
  )
}

export const theMerytonAssemblyArt: LinocutArt = { width: W, height: H, Draw: Assembly }

export const theMerytonAssembly: ComicPanel = {
  moment: 'The Meryton assembly',
  art: theMerytonAssemblyArt,
  alt: 'A linocut print of the assembly rooms at Meryton at night, a long panelled room lit by two hanging chandeliers whose candle flames are printed in red. On the left Elizabeth sits out on a bench by the wall in a pale evening gown and long gloves, looking up. Near her, with his back to her, Mr Darcy stands tall in a dark tailcoat, his hands behind him, turning his head back over his shoulder to look down at her, his chin up and his eyelid lowered. Facing him, Mr Bingley, smiling, holds out an open hand to his friend, pressing him to dance. Behind them, at the far end of the room, Jane in a pale gown waits in the set with a gentleman and two other ladies.',
  quote: 'he looked for a moment at Elizabeth, till catching her eye, he withdrew his own',
  quoteAt: 'bottom-right',
}

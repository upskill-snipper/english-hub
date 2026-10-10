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

import { Person, type P, type Pose } from './people'

/**
 * Chapter 18: "The Netherfield ball", the fourth moment in the guide's
 * timeline. Drawn where its quotation is spoken, in the dance. Every detail is
 * from the held text (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "Elizabeth made no answer, and took her place in the set, amazed at the
 *   dignity to which she was arrived in being allowed to stand opposite to
 *   Mr. Darcy, and reading in her neighbours' looks their equal amazement in
 *   beholding it. They stood for some time without speaking a word". So the
 *   two stand face to face in the set, apart, not touching, and the rest of
 *   the set stands in couples behind them.
 * - "'I do not get on at all. I hear such different accounts of you as puzzle
 *   me exceedingly.'" She has just named Wickham: "The effect was immediate. A
 *   deeper shade of hauteur overspread his features, but he said not a word".
 *   So Darcy stands with his head drawn back and his lid lowered (the kit's
 *   `proud`), and Elizabeth faces him with her chin up.
 * - "Till Elizabeth entered the drawing-room at Netherfield and looked in
 *   vain for Mr. Wickham among the cluster of red coats there assembled". So
 *   officers dance in the set, their coats in the spot colour, the kit's.
 *   Wickham is not among them: he is absent from the ball.
 * - Sir William Lucas, passing through the set a little later, compliments
 *   Darcy while "glancing at her sister and Bingley": so Jane and Bingley are
 *   a couple in the set nearby, Jane smiling, as the kit draws her ("a smile
 *   of such sweet complacency", this chapter).
 * - It is a ball, at night: the room is lit by a great chandelier whose
 *   flames are the spot colour, hung high in the space between the two, so
 *   that Darcy's dark head stands against the light it throws on the wall.
 *   (Hung first right over him, its row of red flames sat on his head like a
 *   crown.) The windows' curtains are drawn.
 *
 * Everyone is in the kit's evening dress: the ladies in short sleeves and
 * long gloves, the gentlemen in breeches and stockings for dancing, the
 * officers in their red coats. The ballroom at Netherfield is not described,
 * so it is plain: tall curtained windows between pilasters, a boarded floor.
 * Nothing is taken from any film or television production.
 *
 * The rest of the moment (Mr Collins introducing himself to Darcy, Mrs
 * Bennet at supper, Mary at the instrument) comes after the dance and is
 * left to the guide's summary.
 *
 * Seeds: 1401 (the wall), 1402 (the floor), 1403 (the light round the
 * chandelier), 1404 (the curtains).
 */

const W = 860
const H = 340
/** The foot of the far wall. */
const BASE = 236
/** The great chandelier: where its ring hangs. */
const LAMP: P = [420, 42]
/** The two tall windows, their curtains drawn: [x0, x1]. */
const WINDOWS: [number, number][] = [
  [64, 176],
  [610, 722],
]

type Marks = {
  wall: string
  wains: string
  floor: string
  shade: string
  glow: string
  folds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1401)
  // The wall is lit by the chandelier hung between the two and darkens away from it.
  const light = (x: number, y: number) => {
    const l = clamp(1 - Math.hypot((x - LAMP[0]) * 0.62, (y - LAMP[1] - 50) * 1.05) / 300)
    return Math.max(l, 0.06)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 190 }, light, {
    spacing: 7.6,
    len: [20, 80],
  })
  let wains = ''
  for (let x = 4; x < W; x += 11) {
    const L = light(x, 210)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      198,
      x + between(r, -0.6, 0.6),
      BASE - 6,
      0.4,
      0.5 + L * 2.6,
    )
  }

  const f = rng(1402)
  let floor = ''
  const V: P = [420, 10]
  for (let xt = -900; xt < 1700; xt += 44) {
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
  // Pools of shadow under the couples at the back, and under the two in front.
  for (const [x0, x1, yc, h] of [
    [40, 250, 254, 5],
    [600, 830, 254, 5],
    [270, 380, 330, 8],
    [470, 570, 331, 8],
  ]) {
    for (let y = yc - h; y < yc + h; y += 3) {
      const w = 1 - Math.abs(y - yc) / h
      shade += gouge(x0 - w * 6, y, x1 + w * 6, y + 0.5, 0.6 + w * 1.6)
    }
  }

  const glow = rays(rng(1403), LAMP[0], LAMP[1] - 4, { from: 40, to: 128, every: 10, width: 2.6 })

  // The curtains' folds: paper gouges down each drawn pair.
  const c = rng(1404)
  let folds = ''
  for (const [x0, x1] of WINDOWS) {
    for (let x = x0 + 5; x < x1 - 3; x += 7.4)
      folds += gouge(
        x + between(c, -1, 1),
        30,
        x + between(c, -2, 2),
        194,
        0.6 + between(c, 0, 0.5),
        between(c, -1, 1),
      )
  }
  cached = { wall, wains, floor, shade, glow, folds }
  return cached
}

/** A pilaster against the wall: a flat fluted column with a capital. */
function Pilaster({ x }: { x: number }) {
  return (
    <g>
      <rect x={x - 10} y={14} width={20} height={BASE - 14} fill={PAPER} />
      <rect x={x - 14} y={8} width={28} height={8} fill={PAPER} />
      <rect x={x - 14} y={16} width={28} height={2} fill={INK} />
      <path
        d={`M${x - 5} 24V${BASE - 6}M${x} 24V${BASE - 6}M${x + 5} 24V${BASE - 6}`}
        stroke={INK}
        strokeWidth={1.1}
      />
    </g>
  )
}

/** A tall window with its curtains drawn across it for the night, and the pelmet over them. */
function Window({ x0, x1 }: { x0: number; x1: number }) {
  return (
    <g>
      <rect x={x0 - 6} y={18} width={x1 - x0 + 12} height={182} fill={PAPER} />
      <rect x={x0} y={28} width={x1 - x0} height={168} fill={INK} />
      <path d={`M${(x0 + x1) / 2} 30V196`} stroke={PAPER} strokeWidth={2} />
      <path
        d={`M${x0 - 8} 18H${x1 + 8}V34Q${x1 - 10} 44 ${(x0 + x1) / 2} 36Q${x0 + 10} 44 ${x0 - 8} 34Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
    </g>
  )
}

/**
 * The great chandelier on its chain: a ring with seven curved arms, a candle
 * on each, and the flames in the spot colour, flickering.
 */
function Chandelier() {
  const [x, y] = LAMP
  const cups: P[] = [-42, -28, -14, 0, 14, 28, 42].map((dx) => [
    x + dx,
    y - 6 + Math.abs(dx) * 0.14,
  ])
  const arms = cups
    .map(([cx, cy]) => `M${x} ${y + 8}Q${(x + cx) / 2} ${y + 14} ${cx} ${cy + 3}`)
    .join('')
  return (
    <g>
      <path d={`M${x} 0V${y - 18}`} stroke={INK} strokeWidth={2.8} />
      <path d={`M${x} 0V${y - 18}`} stroke={PAPER} strokeWidth={0.8} />
      {/* a paper edge round the arms, or they are lost in the dark wall */}
      <path d={arms} stroke={PAPER} strokeWidth={5} fill="none" strokeLinecap="round" />
      <path d={arms} stroke={INK} strokeWidth={2.4} fill="none" />
      <ellipse cx={x} cy={y + 6} rx={12} ry={7} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <path d={`M${x} ${y - 18}V${y + 20}`} stroke={INK} strokeWidth={3.4} />
      <path
        d={`M${x - 4} ${y + 22}L${x} ${y + 30}L${x + 4} ${y + 22}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={0.8}
      />
      {cups.map(([cx, cy], i) => (
        <g key={i}>
          <rect
            x={cx - 3.2}
            y={cy}
            width={6.4}
            height={3}
            fill={INK}
            stroke={PAPER}
            strokeWidth={0.6}
          />
          <rect
            x={cx - 1.4}
            y={cy - 10}
            width={2.8}
            height={10}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.6}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.7 + (i % 3) * 0.15, delay: (i * 0.17) % 0.6 })}
            d={`M${cx} ${cy - 10}C${cx - 2.6} ${cy - 13} ${cx - 1} ${cy - 17} ${cx} ${cy - 20}C${cx + 1} ${cy - 17} ${cx + 2.6} ${cy - 13} ${cx} ${cy - 10}Z`}
            fill={RED}
          />
        </g>
      ))}
    </g>
  )
}

/** Darcy, standing opposite her in the set, his head drawn back in hauteur. */
const DARCY: Pose = {
  look: 'darcy',
  proud: true,
  head: { rot: -9 },
  near: {
    pts: [
      [1, -132],
      [3, -104],
      [5, -80],
    ],
    hand: 'mitt',
  },
  far: {
    pts: [
      [-4, -132],
      [-8, -105],
      [-7, -81],
    ],
    hand: 'mitt',
  },
}

/** Elizabeth, facing him across the set, her chin up as she speaks. */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  evening: true,
  head: { rot: -6 },
  near: {
    pts: [
      [3, -126],
      [7, -104],
      [12, -84],
    ],
    hand: 'mitt',
  },
  far: {
    pts: [
      [-3, -126],
      [-6, -104],
      [-3, -84],
    ],
    hand: 'mitt',
  },
}

/** The couples of the set behind them: a gentleman and his partner facing him. */
const COUPLES: { man: Pose; lady: Pose; at: number }[] = [
  {
    man: { look: 'officer', legwear: 'stockings' },
    lady: { look: 'lady', evening: true },
    at: 58,
  },
  {
    man: { look: 'bingley' },
    lady: { look: 'jane', evening: true },
    at: 172,
  },
  {
    man: { look: 'officer', legwear: 'stockings', head: { rot: -4 } },
    lady: { look: 'lady', evening: true },
    at: 626,
  },
  {
    man: { look: 'man' },
    lady: { look: 'lady', evening: true, head: { rot: -3 } },
    at: 744,
  },
]

function TheNetherfieldBall({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 160], push: 1.03 })}>
      {/* the far wall, lit round the chandelier, and its panelling */}
      <path d={m.wall} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      {WINDOWS.map(([x0, x1]) => (
        <Window key={x0} x0={x0} x1={x1} />
      ))}
      <path d={m.folds} fill={PAPER} />
      {[36, 202, 590, 744].map((x) => (
        <Pilaster key={x} x={x} />
      ))}
      <rect x={0} y={200} width={W} height={4} fill={PAPER} />
      <path d={m.wains} fill={PAPER} />
      <rect x={0} y={BASE - 5} width={W} height={5} fill={PAPER} />
      <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />

      {/* the set behind them, couple by couple */}
      {COUPLES.map(({ man, lady, at }) => (
        <g key={at}>
          <Person pose={man} at={[at, 254]} scale={0.72} />
          <Person pose={lady} at={[at + 56, 254]} scale={0.74} flip />
        </g>
      ))}

      <Chandelier />

      {/* Darcy and Elizabeth, opposite each other in the set */}
      <Person pose={DARCY} at={[330, 332]} scale={1.3} />
      <Person pose={ELIZABETH} at={[512, 334]} scale={1.38} flip />
    </g>
  )
}

export const theNetherfieldBallArt: LinocutArt = { width: W, height: H, Draw: TheNetherfieldBall }

export const theNetherfieldBall: ComicPanel = {
  moment: 'The Netherfield ball',
  art: theNetherfieldBallArt,
  alt: 'A linocut print of the ballroom at Netherfield at night, with tall curtained windows between pilasters and a great chandelier whose candle flames are printed in red. In front, Mr Darcy and Elizabeth stand face to face in the dance, apart and not touching. Darcy, tall in a dark tailcoat and white neckcloth, holds his head drawn back, his eyelid lowered, looking down at her. Elizabeth, in a pale evening gown and long gloves, faces him with her chin up. Behind them the rest of the set stands in couples, each gentleman facing his partner: two officers in red coats with their partners, Mr Bingley with Jane, and another gentleman with a lady.',
  quote: 'I hear such different accounts of you as puzzle me exceedingly.',
  quoteAt: 'top-right',
}

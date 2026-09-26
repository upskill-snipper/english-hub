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

import {
  CREATURE_HAIR_SKULL,
  CREATURE_HAIR_SKULL_GLOSS,
  CreatureHead,
  Figure,
  HEAD_VICTOR,
  NECKCLOTH,
  OPEN_HAND,
  SPREAD_HAND,
  VICTOR_HAIR,
  VictorLitFace,
  handAt,
  headAt,
  man,
  type P,
} from './people'

/**
 * Chapter 5: "The creation, and the flight", the fifth moment in the guide's
 * timeline: the moment the Creature wakes, and Victor's horror at it. The
 * flight that follows is left to the words. Every detail is from the chapter:
 *
 * - "It was on a dreary night of November, that I beheld the accomplishment
 *   of my toils"; "It was already one in the morning; the rain pattered
 *   dismally against the panes, and my candle was nearly burnt out". So rain
 *   streaks the black window, and the only light is a stub of candle whose
 *   small flame is the one thing printed in red.
 * - "I collected the instruments of life around me, that I might infuse a
 *   spark of being into the lifeless thing that lay at my feet." So the
 *   Creature lies on the floor at Victor's feet, and a table of glass stands
 *   behind; the room is the garret of "The secret toil", under the same
 *   sloping roof.
 * - "by the glimmer of the half-extinguished light, I saw the dull yellow eye
 *   of the creature open; it breathed hard, and a convulsive motion agitated
 *   its limbs." So his eye is open, his breath rises in the cold in three
 *   white puffs, and the fingers of one hand start on the boards, marked
 *   with short cuts of motion.
 * - "His limbs were in proportion ... His yellow skin scarcely covered the
 *   work of muscles and arteries beneath; his hair was of a lustrous black,
 *   and flowing ... his watery eyes, that seemed almost of the same colour as
 *   the dun white sockets in which they were set, his shrivelled complexion
 *   and straight black lips." So he is the Creature of every panel
 *   (CreatureHead in ./people.tsx), his face lying turned up to the light,
 *   so long that he runs out of the frame ("of a gigantic stature"). The
 *   yellow of his skin and eye cannot be printed and is left to the words,
 *   and so, here only, are the muscles and arteries: the kit's sinew lines,
 *   on a head laid on its back, cross his face and read as scars.
 * - "now that I had finished, the beauty of the dream vanished, and
 *   breathless horror and disgust filled my heart." So Victor stands over
 *   him, large in front of us, leaning back from him: his face lit from
 *   below by the candle, his brow up, his eye wide, his mouth open, and his
 *   hand thrown up between them with the fingers spread; his other arm is
 *   behind him and not seen. His face is the
 *   kit's Victor cut in paper (VictorLitFace), as the pilot cuts Scrooge's
 *   lit face in "The body on the bed".
 *
 * SAFEGUARDING. The Creature is shown alive and waking, covered from the
 * shoulders by a dark cloth: no bare body, no seams or stitches, no corpse,
 * no part of a body, nothing of the dissecting room. Never the film image:
 * his skull is round, his hair long, and there are no bolts, no green and no
 * scars. Nothing is taken from a film or stage production.
 * Seeds: 1901 (wall), 1902 (floor), 1903 (candlelight), 1904 (rain), 1905
 * (the cloth's folds), 1906 (breath).
 */

const W = 860
const H = 340
const FLOOR = 252
const CANDLE: P = [392, 302]

type Puff = [number, number, number][]
type Marks = {
  wall: string
  floor: string
  glow: string
  rain: string
  folds: string
  roof: string
  breath: Puff[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Almost no light but the candle stub on the floor.
  const light = (x: number, y: number) => {
    const c = clamp(1 - Math.hypot(x - CANDLE[0], (y - CANDLE[1]) * 1.15) / 250)
    return Math.max(c * 0.85, 0.03)
  }
  const wall = gougeField(rng(1901), { x0: 0, x1: W, y0: 20, y1: FLOOR - 2 }, light, {
    spacing: 6,
    max: 3,
  })
  const rf = rng(1902)
  let floor = ''
  const V: P = [470, 40]
  for (let xt = -900; xt < 1800; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(rf, 0.3, 0.8))
      const mx = xt + (xb - xt) * ((t0 + t1) / 2)
      const my = FLOOR + (H - FLOOR) * ((t0 + t1) / 2)
      const L = clamp(1 - Math.hypot(mx - CANDLE[0], (my - CANDLE[1]) * 1.4) / 280)
      if (L > 0.05)
        floor += wedge(
          xt + (xb - xt) * t0,
          FLOOR + (H - FLOOR) * t0,
          xt + (xb - xt) * t1,
          FLOOR + (H - FLOOR) * t1,
          0.6 + L * (1 + t0 * 2.4),
          0.6 + L * (1 + t1 * 2.4),
        )
      t0 = t1 + between(rf, 0.02, 0.07)
    }
  }
  const glow = rays(rng(1903), CANDLE[0], CANDLE[1] - 14, {
    from: 12,
    to: 80,
    every: 6,
    width: 2.4,
  })
  const rr = rng(1904)
  let rain = ''
  for (let i = 0; i < 36; i++) {
    const x = between(rr, 300, 414)
    const y = between(rr, 44, 172)
    const len = between(rr, 8, 20)
    rain += gouge(x, y, x - len * 0.18, y + len, 0.45)
  }
  const ro = rng(1905)
  let folds = ''
  for (let i = 0; i < 8; i++) {
    const x = 566 + i * 36 + between(ro, -6, 6)
    folds += gouge(
      x,
      226 + between(ro, -3, 3),
      x + between(ro, 10, 26),
      292,
      0.9,
      between(ro, -2, 2),
    )
  }
  folds += gouge(540, 240, 850, 232, 0.8, -3)
  let roof = ''
  for (let x = 30; x < W + 60; x += 58) roof += wedge(x, 0, x - 26, 64 + x * 0.06, 2.4, 3.6)
  // "it breathed hard": three puffs rising from his mouth into the cold.
  const b = rng(1906)
  const breath: Puff[] = [
    [490, 203, 2.6],
    [481, 191, 3.6],
    [469, 177, 4.6],
  ].map(([cx, cy, rad]) => [
    [cx, cy, rad],
    [cx - rad * 0.8, cy + rad * 0.3 + between(b, -0.4, 0.4), rad * 0.72],
    [cx + rad * 0.7, cy + rad * 0.4 + between(b, -0.4, 0.4), rad * 0.62],
    [cx - rad * 0.1, cy - rad * 0.55, rad * 0.6],
  ])
  cached = { wall, floor, glow, rain, folds, roof, breath }
  return cached
}

/** Victor, large before us, leaning back from what lies at his feet. */
const VIC_HEAD = { d: HEAD_VICTOR, at: [168, 112] as P, rot: -8, scale: 2.3 }
const THROWN: P[] = [
  [184, 188],
  [232, 226],
  [266, 196],
]
const VICTOR = man({
  facing: 1,
  neck: [160, 172],
  hip: [186, 330],
  head: VIC_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 70, tails: 60, front: 20 },
  near: { arm: THROWN, leg: [], hand: { parts: SPREAD_HAND, rot: -50, scale: 2 } },
  far: { arm: [], leg: [] },
  arm: 17,
  feet: false,
})

/** The Creature's head, lying face up on the boards by the candle. */
const CRE_HEAD = { at: [470, 262] as P, rot: -86, scale: 2 }
/** The rest of his hair, spread on the boards beneath the back of his head. */
const SPREAD_HAIR =
  'M428 250C424 264 428 280 440 292L436 306L452 300L460 312L470 302L484 310L494 300C506 302 516 302 528 298L517 298L480 297L444 276Z'
const SPREAD_GLOSS = gouge(436, 268, 452, 296, 0.6, -1) + gouge(452, 282, 480, 302, 0.6, -0.8)
/** The dark cloth over him from the shoulders, running out of the frame. */
const CLOTH =
  'M522 232C534 224 552 220 568 220C620 210 700 212 770 216C810 218 840 220 866 224L866 304L530 304C520 292 514 276 514 262C514 250 516 240 522 232Z'
/** One hand out from under the cloth, its fingers starting on the boards. */
const HAND_ARM: P[] = [
  [640, 296],
  [622, 306],
]
const TWITCH =
  gouge(580, 300, 574, 296, 0.6) +
  gouge(576, 311, 568, 311, 0.6) +
  gouge(580, 322, 573, 326, 0.6) +
  gouge(592, 330, 589, 336, 0.6)

function TheCreation({ uid }: ArtProps) {
  const m = marks()
  const clip = { win: `${uid}-win`, roof: `${uid}-roof` }
  const vt = headAt(1, VIC_HEAD.at, VIC_HEAD.rot, VIC_HEAD.scale)
  const ct = headAt(1, CRE_HEAD.at, CRE_HEAD.rot, CRE_HEAD.scale)
  const roofPath = `M0 0H${W}V48L0 18Z`
  const handT = handAt(HAND_ARM, 1, { parts: OPEN_HAND, scale: 1.9, rot: 6 })
  return (
    <>
      <defs>
        <clipPath id={clip.win}>
          <rect x={300} y={46} width={114} height={130} />
        </clipPath>
        <clipPath id={clip.roof}>
          <path d={roofPath} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 250], push: 1.04 })}>
        {/* the dark garret, lit by the stub of a candle */}
        <path d={m.wall} fill={PAPER} />
        <path d={roofPath} fill={INK} />
        <g clipPath={`url(#${clip.roof})`}>
          <path d={m.roof} fill={PAPER} opacity={0.6} />
        </g>
        <path d={`M0 18L${W} 48`} stroke={PAPER} strokeWidth={2.4} />
        <rect x={0} y={FLOOR} width={W} height={2} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />

        {/* the window: rain on the panes at one in the morning */}
        <rect x={290} y={36} width={134} height={150} fill={PAPER} />
        <rect x={300} y={46} width={114} height={130} fill={INK} />
        <g clipPath={`url(#${clip.win})`} className="lc-drift" style={timing({ dur: 3 })}>
          <path d={m.rain} fill={PAPER} />
        </g>
        <path d="M357 46V176M300 111H414" stroke={PAPER} strokeWidth={3} />
        <path d="M357 46V176M300 111H414" stroke={INK} strokeWidth={1.4} />
        <rect x={286} y={184} width={142} height={6} fill={PAPER} />

        {/* the table of glass behind him, the instruments of life */}
        <path d="M560 192H852" stroke={PAPER} strokeWidth={3} />
        <path d="M572 194L572 252M840 194L840 252" stroke={PAPER} strokeWidth={1.6} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
          <path d="M620 192C608 192 602 184 604 176C606 166 616 162 626 166C634 158 648 148 666 140" />
          <path d="M704 192C696 192 692 186 692 178C692 170 698 164 704 162V146H712V162C718 164 724 170 724 178C724 186 720 192 712 192Z" />
          <path d="M750 192L746 174H774L770 192ZM790 192V178H804V192Z" />
        </g>

        {/* the candle stub on the floor, nearly burnt out */}
        <path d={m.glow} fill={PAPER} />
        <circle cx={CANDLE[0]} cy={CANDLE[1] - 14} r={8} fill={INK} />
        <path
          d={`M${CANDLE[0] - 18} ${CANDLE[1] + 4}Q${CANDLE[0]} ${CANDLE[1] + 10} ${CANDLE[0] + 18} ${CANDLE[1] + 4}L${CANDLE[0] + 14} ${CANDLE[1] - 1}H${CANDLE[0] - 14}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={CANDLE[0] - 5}
          y={CANDLE[1] - 8}
          width={10}
          height={8}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 1.1 })}
          d={`M${CANDLE[0]} ${CANDLE[1] - 9}C${CANDLE[0] - 3} ${CANDLE[1] - 12} ${CANDLE[0] - 2} ${CANDLE[1] - 16} ${CANDLE[0]} ${CANDLE[1] - 21}C${CANDLE[0] + 2} ${CANDLE[1] - 16} ${CANDLE[0] + 3} ${CANDLE[1] - 12} ${CANDLE[0]} ${CANDLE[1] - 9}Z`}
          fill={RED}
        />

        {/* the Creature, waking on the floor under a dark cloth */}
        <path
          d={SPREAD_HAIR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={SPREAD_GLOSS} fill={PAPER} />
        <CreatureHead
          t={ct}
          collar={false}
          ear={false}
          sinews={false}
          hair={CREATURE_HAIR_SKULL}
          gloss={CREATURE_HAIR_SKULL_GLOSS}
        />
        <path d={CLOTH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.folds} fill={PAPER} />
        <g transform={handT}>
          {OPEN_HAND.map((p, i) =>
            p.w ? (
              <path
                key={i}
                d={p.d}
                fill="none"
                stroke={INK}
                strokeWidth={p.w + 1.4}
                strokeLinecap="round"
              />
            ) : (
              <path key={i} d={p.d} fill={INK} stroke={INK} strokeWidth={1.4} />
            ),
          )}
          {OPEN_HAND.map((p, i) =>
            p.w ? (
              <path
                key={i}
                d={p.d}
                fill="none"
                stroke={PAPER}
                strokeWidth={p.w - 0.4}
                strokeLinecap="round"
              />
            ) : (
              <path key={i} d={p.d} fill={PAPER} />
            ),
          )}
        </g>
        <g className="lc-fade-in" style={timing({ delay: 1.2, dur: 0.6 })}>
          <path d={TWITCH} fill={PAPER} />
        </g>
        {/* "it breathed hard" */}
        {m.breath.map((puff, k) => (
          <g key={k} className="lc-rise" style={timing({ delay: 0.8 + k * 0.45, dur: 1.2 })}>
            <g fill={INK} stroke={INK} strokeWidth={3}>
              {puff.map(([cx, cy, rad]) => (
                <circle key={`${cx}-${cy}`} cx={n(cx)} cy={n(cy)} r={n(rad)} />
              ))}
            </g>
            <g fill={PAPER}>
              {puff.map(([cx, cy, rad]) => (
                <circle key={`${cx}-${cy}`} cx={n(cx)} cy={n(cy)} r={n(rad)} />
              ))}
            </g>
          </g>
        ))}

        {/* Victor, in horror, his face lit from below */}
        <Figure parts={VICTOR} halo={2.4}>
          <g transform={vt}>
            <VictorLitFace aghast />
            <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={0.6} />
          </g>
          <path
            d={gouge(176, 200, 190, 320, 1.4, -2) + gouge(158, 204, 150, 322, 1.2, 2)}
            fill={PAPER}
          />
        </Figure>
      </g>
    </>
  )
}

export const theCreation: LinocutArt = { width: W, height: H, Draw: TheCreation }

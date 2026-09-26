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

import { CutFigure, type Part } from './cut-figure'
import { CROWN, CROWN_CUTS, EYE, HEAD_MACBETH, HEAD_WOMAN, VEIL } from './inverness-people'

/**
 * Act 3, Scene 2: "Scorpions in the mind", the thirteenth moment in the
 * guide's timeline. A room in the palace, towards evening, before the feast.
 * Every detail is from the scene (Folger text):
 *
 * - MACBETH: "O, full of scorpions is my mind, dear wife!" The picture makes
 *   the metaphor visible without putting anything on his body: the candle
 *   throws his shadow, crown and all, huge on the wall behind him, and the
 *   shadow of his head is crawling with red scorpions. The red is the
 *   scorpions, the candle flame and the crown he has "scorched the snake"
 *   to keep.
 * - He is shaken by "terrible dreams / That shake us nightly", so he sits
 *   with his head in his hand.
 * - LADY MACBETH: "Come on, gentle my lord, / Sleek o'er your rugged looks.
 *   Be bright and jovial among your guests tonight." So she stands across the
 *   table from him and reaches towards him. He keeps the plan to kill Banquo
 *   from her ("Be innocent of the knowledge, dearest chuck"), so the candle
 *   stands between them and his face is turned down, away from her.
 * - MACBETH: "Light thickens, and the crow / Makes wing to th' rooky wood."
 *   So through the window it is dusk, a last band of light over a dark wood,
 *   and crows fly towards it.
 *
 * Macbeth and Lady Macbeth wear the heads shared with the other Macbeth panels
 * (./inverness-people.tsx): his HEAD_MACBETH and red crown, her veil. As
 * queen she wears a small crown, cut in paper so the red stays on him.
 * Seed 413 for the wall and the floor; 414 for the scorpions' places.
 */

const W = 860
const H = 340
const FLOOR = 298
const FLAME: [number, number] = [322, 158]

/** A circle, or an ellipse, as path data, so the scorpions are one path each. */
const oval = (cx: number, cy: number, rx: number, ry = rx) =>
  `M${n(cx - rx)} ${n(cy)}a${n(rx)} ${n(ry)} 0 1 0 ${n(2 * rx)} 0a${n(rx)} ${n(ry)} 0 1 0 ${n(-2 * rx)} 0Z`

/**
 * One scorpion seen from above, head up, about 40 wide and 56 long: claws
 * forward, eight legs, and the jointed tail curled over to one side with the
 * sting at its tip. `body` is filled with the spot colour, `limbs` stroked in
 * it, `cuts` are the ink lines between its segments.
 */
function scorpion() {
  let body = oval(0, -6, 6, 6.8) + oval(0, 7, 7, 9.4)
  const tail: [number, number, number][] = [
    [0, 18, 3.6],
    [2.6, 23.6, 3.3],
    [6.8, 27.6, 3.1],
    [12.2, 28.6, 3],
    [16.8, 25.4, 2.9],
    [18.8, 19.8, 2.8],
    [17.8, 14.2, 2.7],
  ]
  for (const [x, y, r] of tail) body += oval(x, y, r)
  body += oval(16.8, 10.2, 2.9)
  body += 'M14.8 8.2C13 6.4 12 4.4 11.8 1.6C14.4 3 16.8 5 18 8Z'
  // claws
  for (const s of [-1, 1]) {
    body += `M${n(s * 12.4 - 3.4)} ${n(-24)}C${n(s * 12.4 - 3.6)} ${n(-29)} ${n(s * 12.4 + 3.6)} ${n(-29)} ${n(s * 12.4 + 3.4)} ${n(-24)}C${n(s * 12.4 + 3.4)} ${n(-20)} ${n(s * 12.4 - 3.4)} ${n(-19)} ${n(s * 12.4 - 3.4)} ${n(-24)}Z`
  }
  let limbs = ''
  for (const s of [-1, 1]) {
    limbs += `M${s * 3.5} -10L${s * 9} -15L${s * 11.5} -20`
    for (let i = 0; i < 4; i++) {
      const y0 = -6 + i * 4.2
      limbs += `M${s * 5} ${n(y0)}L${n(s * 11.5)} ${n(y0 - 3 + i * 1.6)}L${n(s * 15)} ${n(y0 + 2 + i * 2.6)}`
    }
  }
  let cuts = ''
  for (const y of [0.6, 4.6, 8.6, 12.4]) cuts += `M${n(-5.4)} ${y}Q0 ${n(y + 1.4)} ${n(5.4)} ${y}`
  cuts += 'M-5 -0.6Q0 -2.4 5 -0.6'
  for (const s of [-1, 1]) cuts += `M${n(s * 12.4)} -27.6L${n(s * 12.4 + s * 0.6)} -23`
  return { body, limbs, cuts }
}

type Marks = {
  wall: string
  shadow: string
  floor: string
  grain: string
  flameRays: string
  sky: string
  wood: string
  scorpion: { body: string; limbs: string; cuts: string }
  crawl: [number, number, number, number][]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(413)
  // Lit by the one candle; the wall falls away into dark at the edges.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.1) / 640) ** 0.85, 0.04)
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light, { spacing: 6.8 })

  // His shadow on the wall, thrown up and to the right by the candle: the
  // crowned head, the arm propping it, the shoulders down to the table.
  const spikes = [540, 564, 588, 612, 636]
    .map((x, i) => `M${x - 10} 46L${x} ${i % 2 ? 22 : 12}L${x + 10} 46Z`)
    .join('')
  const shadow =
    oval(590, 112, 62, 72) +
    'M532 44H646V60H532Z' +
    spikes +
    'M558 170H622V196H558Z' +
    'M456 214C462 172 510 150 596 148C682 150 744 172 752 214Z' +
    wedge(500, 214, 522, 100, 26, 22)

  // Floorboards running to the back of the room.
  let floor = ''
  const V = [430, 60]
  for (let xt = -500; xt < 1400; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    floor += wedge(xt, FLOOR, xb, H, 0.8, 2.6)
  }

  // The grain of the table's front, lit from the candle's side.
  let grain = ''
  for (let y = 219; y < 242; y += 4.2) {
    let x = 240 + between(r, 0, 12)
    while (x < 564) {
      const len = between(r, 20, 70)
      const L = clamp(1 - Math.abs(x - FLAME[0]) / 260)
      if (r() < 0.3 + L * 0.7)
        grain += gouge(x, y, Math.min(x + len, 564), y + between(r, -0.4, 0.4), 0.3 + L * 1.1)
      x += len + between(r, 6, 20)
    }
  }
  const flameRays = rays(rng(415), FLAME[0], FLAME[1] + 4, {
    from: 18,
    to: 96,
    every: 6,
    width: 2.8,
  })

  // The window at dusk: a last band of light low over the rooky wood.
  let sky = ''
  for (let y = 36; y < 190; y += 5) {
    const L = clamp((y - 50) / 110) ** 1.3
    let x = 34 + between(r, -10, 0)
    while (x < 118) {
      const len = between(r, 10, 34)
      if (r() < 0.15 + L * 0.85) sky += gouge(x, y, Math.min(x + len, 120), y, 0.3 + L * 2.2)
      x += len + between(r, 2, 8) * (1 - L * 0.7)
    }
  }
  let wood = 'M30 196V176'
  for (let x = 30; x <= 124; x += 5)
    wood += `L${n(x)} ${n(170 + 6 * Math.sin(x / 7) + between(r, -4, 3))}`
  wood += 'L124 196Z'

  // Where the scorpions crawl: [x, y, scale, turn], all inside the shadow.
  const s = rng(414)
  const crawl: Marks['crawl'] = [
    [574, 100, 1.4, -24],
    [620, 138, 1.25, 150],
    [556, 162, 1.1, 70],
    [664, 196, 1.05, -104],
    [590, 200, 0.95, 96],
  ].map(([x, y, sc, t]) => [x, y, sc, t + between(s, -6, 6)])

  cached = { wall, shadow, floor, grain, flameRays, sky, wood, scorpion: scorpion(), crawl }
  return cached
}

/** A crow in flight, black, wings up, about 20 units across. */
const CROW = 'M0 0C3 -2 6 -2 8 0L14 -6L20 -5L13 1L18 3L11 3C8 5 4 5 1 3L-4 4L-1 1Z'

/** Lady Macbeth, facing right, reaching across towards him. */
const LADY_HEAD_AT = 'translate(198 126) rotate(4) scale(1.02)'
const LADY: Part[] = [
  {
    d: 'M186 146C178 150 172 160 171 174C169 210 163 258 154 314H240C233 268 226 220 223 180C222 162 217 152 209 147C203 144 193 144 186 146Z',
  },
  { d: HEAD_WOMAN, t: LADY_HEAD_AT },
  { d: VEIL, t: LADY_HEAD_AT },
  { d: 'M210 158C224 168 240 176 258 180', w: 7.5, sep: 1.5 },
  { d: 'M256 175C262 173 268 175 272 179C268 183 262 185 257 184Z' },
]
const LADY_CUTS =
  gouge(180, 176, 170, 306, 1.4, 1.4) +
  gouge(196, 190, 192, 308, 1.2, 0.5) +
  gouge(212, 196, 222, 306, 1.1, -0.8) +
  gouge(176, 238, 228, 236, 0.8)

/** Macbeth, behind the table, facing left, his head bowed into his hand. */
const MACBETH_HEAD_AT = 'translate(426 126) rotate(-16) scale(-1.08 1.08)'
const MACBETH: Part[] = [
  {
    d: 'M444 142C432 142 420 148 414 160C408 174 404 192 402 210L496 210C496 190 492 170 486 158C480 148 468 142 454 142Z',
  },
  { d: HEAD_MACBETH, t: MACBETH_HEAD_AT },
  { d: 'M436 158C426 176 416 192 410 204C404 180 402 150 404 128', w: 9, sep: 1.6 },
  { d: 'M398 124C401 118 408 117 412 121C414 126 412 132 406 133C401 133 397 130 398 124Z' },
]
const MACBETH_CUTS = gouge(452, 160, 460, 206, 1.2, -0.8) + gouge(470, 158, 482, 206, 1, -0.6)

function ScorpionsInTheMind({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  const sc = m.scorpion
  return (
    <>
      <defs>
        <clipPath id={win}>
          <path d="M34 196V64C34 44 56 30 78 30C100 30 120 44 120 64V196Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 120], push: 1.035 })}>
        <path d={m.wall} fill={PAPER} />
        <path d={m.flameRays} fill={PAPER} />

        {/* the window: dusk over the rooky wood, crows making wing to it */}
        <path d="M24 204V62C24 38 50 20 78 20C106 20 130 38 130 62V204Z" fill={PAPER} />
        <path d="M34 196V64C34 44 56 30 78 30C100 30 120 44 120 64V196Z" fill={INK} />
        <g clipPath={`url(#${win})`}>
          <path d={m.sky} fill={PAPER} />
          <path d={m.wood} fill={INK} />
          <g className="lc-drift" style={timing({ delay: 0.3 })}>
            {[
              [50, 84, 1.2, -8],
              [80, 104, 1, 6],
              [62, 128, 0.85, -4],
            ].map(([x, y, s, t]) => (
              <path
                key={x}
                d={CROW}
                transform={`translate(${x} ${y}) rotate(${t}) scale(${s})`}
                fill={INK}
                stroke={PAPER}
                strokeWidth={0.8}
              />
            ))}
          </g>
        </g>
        <path d="M77 30V196" stroke={INK} strokeWidth={3} />
        <rect x={18} y={196} width={118} height={8} fill={PAPER} />
        <rect x={18} y={204} width={118} height={2} fill={INK} />

        {/* his shadow, and what is in it */}
        <path d={m.shadow} fill={INK} />
        <g>
          {m.crawl.map(([x, y, s, t], i) => (
            <g
              key={i}
              className="lc-fade-in"
              style={timing({ delay: 0.9 + i * 0.4, dur: 0.8 })}
              transform={`translate(${x} ${y}) rotate(${n(t)}) scale(${s})`}
            >
              <path d={sc.body} fill={RED} />
              <path
                d={sc.limbs}
                fill="none"
                stroke={RED}
                strokeWidth={1.7}
                strokeLinejoin="round"
              />
              <path d={sc.cuts} fill="none" stroke={INK} strokeWidth={0.9} />
            </g>
          ))}
        </g>

        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={2.4} fill={INK} />

        {/* Macbeth behind the table */}
        <CutFigure parts={MACBETH} cuts={MACBETH_CUTS}>
          <path d={CROWN} transform={MACBETH_HEAD_AT} fill={RED} stroke={INK} strokeWidth={1} />
          <path d={CROWN_CUTS} transform={MACBETH_HEAD_AT} fill={INK} />
        </CutFigure>

        {/* the table, and the candle between them */}
        <path d="M232 206H572V216H232Z" fill={PAPER} />
        <path d="M236 216H568V244H236Z" fill={INK} />
        <path d={m.grain} fill={PAPER} />
        <path d="M236 244H568" stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M252 244V298M548 244V298" stroke={INK} strokeWidth={7} />
        <path d="M252 244V298M548 244V298" stroke={PAPER} strokeWidth={1} opacity={0.9} />
        <path
          d="M306 206C306 200 314 197 322 197C330 197 338 200 338 206Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect x={317} y={170} width={10} height={28} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d="M322 170V165" stroke={INK} strokeWidth={1.2} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d="M322 166C317 161 317.5 154 322 144C326.5 154 327 161 322 166Z"
          fill={RED}
        />

        {/* Lady Macbeth, reaching towards him */}
        <CutFigure parts={LADY} cuts={LADY_CUTS}>
          <path d={EYE} transform={LADY_HEAD_AT} fill={PAPER} />
          <path
            d={CROWN}
            transform={`${LADY_HEAD_AT} translate(0 -3) scale(0.78)`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
          />
        </CutFigure>
        <path d={gouge(150, 320, 246, 320, 2) + gouge(166, 326, 232, 326, 1.2)} fill={INK} />
      </g>
    </>
  )
}

export const scorpionsInTheMind: LinocutArt = { width: W, height: H, Draw: ScorpionsInTheMind }

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
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
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JEKYLL,
  HEAD_UTTERSON,
  JEKYLL_CUTS,
  OPEN_HAND,
  SHAKE_CUTS,
  SHAKE_HAND,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import { COLLAR, UTTERSON_HAIR } from './investigation-kit'

/**
 * Chapter 3, "Dr. Jekyll Was Quite at Ease": "Jekyll at ease", the fourth
 * moment in the guide's timeline. Every detail is from the text:
 *
 * - "the doctor gave one of his pleasant dinners to some five or six old
 *   cronies, all intelligent, reputable men and all judges of good wine; and
 *   Mr. Utterson so contrived that he remained behind after the others had
 *   departed." So the guests have gone, and only the two are left, with the
 *   wine: a decanter and two glasses on a small table.
 * - "as he now sat on the opposite side of the fire"; "a large, well-made,
 *   smooth-faced man of fifty". So the fire is between them, its flames the
 *   spot colour, and Jekyll, broad and clean-shaven, sits across it from
 *   Utterson.
 * - "the moment I choose, I can be rid of Mr. Hyde. I give you my hand upon
 *   that". So Jekyll leans forward in his chair and holds out his hand across
 *   the hearth, thumb up, to be shaken.
 * - "Utterson reflected a little, looking in the fire." So Utterson, upright
 *   in his chair, keeps his eyes on the flames and his hands on his knees.
 * - Jekyll's house is a house of "great air of wealth and comfort", its hall
 *   "furnished with costly cabinets of oak" (Chapter 2). So the walls are
 *   panelled, the chairs are deep, and a clock stands on the mantelpiece.
 *
 * Indoors, neither man wears a hat. Seeds: 441 (the panelling), 442 (the
 * fire's light), 443 (the floor).
 */

const W = 860
const H = 340
const FLOOR = 262
const FIRE: P = [430, 236]

type Marks = {
  wall: string
  glow: string
  floor: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room lit by the fire alone.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - FIRE[0]) * 0.8, (y - FIRE[1]) * 1.2) / 330) ** 1.2, 0.05)
  const wall = gougeField(rng(441), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [14, 50],
  })
  const glow = rays(rng(442), FIRE[0], FIRE[1] - 6, { from: 44, to: 130, every: 6.4, width: 2.6 })
  // The floor, and a hearth-rug in the firelight.
  const f = rng(443)
  let floor = ''
  const V: P = [430, 90]
  for (let xt = -500; xt < 1400; xt += 36) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 2.4,
        0.8 + t1 * 2.4,
      )
      t0 = t1 + between(f, 0.03, 0.08)
    }
  }
  for (let y = FLOOR + 2; y < FLOOR + 18; y += 3.2)
    floor += gouge(0, y, W, y, 2.2 - (y - FLOOR) * 0.1)
  cached = { wall, glow, floor }
  return cached
}

/** The oak panelling's frames: [x, y, w, h], cut as paper lines. */
const PANELS: [number, number, number, number][] = [
  [18, 30, 70, 110],
  [104, 30, 70, 110],
  [190, 30, 70, 110],
  [600, 30, 70, 110],
  [686, 30, 70, 110],
  [772, 30, 70, 110],
]

/** Utterson, upright in his chair, looking in the fire. */
const UTT_HEAD = { d: HEAD_UTTERSON, at: [262, 128] as P, rot: 9, scale: 1.3 }
const UTTERSON: Part[] = gent({
  facing: 1,
  neck: [256, 162],
  hip: [246, 240],
  head: UTT_HEAD,
  body: { width: 30, hem: 16, flare: 4 },
  near: {
    arm: [
      [260, 170],
      [266, 206],
      [290, 226],
    ],
    leg: [
      [250, 240],
      [300, 240],
      [304, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.95, rot: -6 },
  },
  far: {
    arm: [
      [250, 170],
      [250, 206],
      [276, 226],
    ],
    leg: [
      [244, 242],
      [292, 246],
      [290, 318],
    ],
  },
})

/** Jekyll, large and leaning forward, his hand held out across the hearth. */
const JEK_HEAD = { d: HEAD_JEKYLL, at: [590, 128] as P, rot: -3, scale: 1.4 }
const JEK_ARM: P[] = [
  [588, 174],
  [562, 196],
  [534, 190],
]
const JEKYLL: Part[] = gent({
  facing: -1,
  neck: [598, 164],
  hip: [622, 240],
  head: JEK_HEAD,
  body: { width: 40, hem: 16, flare: 4 },
  arm: 9.5,
  leg: 10.5,
  near: {
    arm: JEK_ARM,
    leg: [
      [616, 240],
      [562, 244],
      [558, 318],
    ],
    hand: { parts: SHAKE_HAND, scale: 1.15 },
  },
  far: {
    arm: [
      [606, 174],
      [620, 208],
      [600, 226],
    ],
    leg: [
      [626, 242],
      [574, 250],
      [576, 318],
    ],
  },
})

/** A wing armchair in profile, back at `x`, facing `f`. */
function chair(x: number, f: 1 | -1) {
  const b = x
  const s = (v: number) => b + f * v
  return {
    back: `M${s(-4)} 262C${s(-8)} 200 ${s(-10)} 150 ${s(-2)} 118C${s(4)} 104 ${s(22)} 104 ${s(28)} 118L${s(30)} 262Z`,
    seat: `M${s(14)} 244H${s(96)}C${s(104)} 244 ${s(106)} 252 ${s(104)} 262H${s(14)}Z`,
    buttons: [150, 176, 202].map((y) => [s(10), y] as P),
    legs: `M${s(4)} 262V286M${s(98)} 262V286`,
  }
}
const UTT_CHAIR = chair(208, 1)
const JEK_CHAIR = chair(666, -1)

function JekyllAtEase(_props: ArtProps) {
  const m = marks()
  const ut = headAt(1, UTT_HEAD.at, UTT_HEAD.rot, UTT_HEAD.scale)
  const jt = headAt(-1, JEK_HEAD.at, JEK_HEAD.rot, JEK_HEAD.scale)
  const shake = handAt(JEK_ARM, -1, { parts: SHAKE_HAND, scale: 1.15 })
  return (
    <>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the panelled room, lit by the fire */}
        <path d={m.wall} fill={PAPER} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          {PANELS.map(([x, y, w, h]) => (
            <rect key={x} x={x} y={y} width={w} height={h} />
          ))}
        </g>
        <rect x={0} y={150} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the fireplace: a pale stone surround, the mantel, a clock */}
        <path d={`M346 ${FLOOR}V146H514V${FLOOR}Z`} fill={PAPER} />
        <path d="M336 140H524V150H336Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d={
            gouge(356, 160, 356, 256, 1.4) +
            gouge(504, 160, 504, 256, 1.4) +
            gouge(380, 158, 480, 158, 1.1)
          }
          fill={INK}
        />
        <path d="M384 262V202Q384 180 406 180H454Q476 180 476 202V262Z" fill={INK} />
        <path
          d="M418 140V112Q418 100 430 100Q442 100 442 112V140Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <circle cx={430} cy={118} r={7} fill={PAPER} />
        <path d="M430 118V113M430 118L434 120" stroke={INK} strokeWidth={1.2} />
        {/* the grate and the fire */}
        <path d={m.glow} fill={PAPER} opacity={0.9} />
        <path
          d="M398 250H462M400 256H460M404 244V260M456 244V260"
          stroke={PAPER}
          strokeWidth={1.8}
        />
        <g fill={RED}>
          <path d="M402 246C400 236 410 232 414 238C416 228 428 226 432 236C436 226 450 226 452 238C458 234 462 240 458 246Z" />
          <path
            className="lc-flicker"
            d="M414 238C410 226 416 216 420 206C424 216 428 226 424 238Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M430 236C426 222 430 210 436 196C442 210 444 222 440 236Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1, delay: 0.6 })}
            d="M444 238C442 230 446 222 450 216C452 224 454 230 452 238Z"
          />
        </g>
        {/* the fender */}
        <path d="M372 270H488" stroke={PAPER} strokeWidth={4} />
        <path d="M372 270H488" stroke={INK} strokeWidth={1.4} />

        {/* the wine: a decanter and two glasses on a small table by Utterson */}
        <path d="M318 222H356M337 222V286M326 286H348" stroke={INK} strokeWidth={4.4} fill="none" />
        <path d="M318 222H356" stroke={PAPER} strokeWidth={1} />
        <path
          d="M324 220C322 212 326 204 330 202V194H334V202C338 204 342 212 340 220Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
        <path
          d="M344 220V214M340 206H348L346 212H342Z"
          fill={PAPER}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d="M350 220V214M348 208H354L353 212H349Z"
          fill={PAPER}
          stroke={PAPER}
          strokeWidth={1.4}
        />

        {/* the chairs */}
        {[UTT_CHAIR, JEK_CHAIR].map((c, i) => (
          <g key={i}>
            <path
              d={c.back + c.seat}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
              strokeLinejoin="round"
            />
            <path d={c.legs} stroke={INK} strokeWidth={5} />
            {c.buttons.map(([bx, by]) => (
              <circle key={by} cx={bx} cy={by} r={1.8} fill={PAPER} />
            ))}
          </g>
        ))}

        {/* Utterson, looking in the fire */}
        <Figure parts={UTTERSON}>
          {/* his hair, bare indoors, cut as in every panel where he has no hat */}
          <path d={UTTERSON_CUTS + UTTERSON_HAIR + COLLAR} transform={ut} fill={PAPER} />
          <path d={gouge(262, 176, 256, 226, 0.9, 1)} fill={PAPER} />
        </Figure>

        {/* Jekyll, his hand held out: "I give you my hand upon that" */}
        <Figure parts={JEKYLL}>
          <path d={JEKYLL_CUTS + COLLAR} transform={jt} fill={PAPER} />
          <path d={SHAKE_CUTS} transform={shake} fill={PAPER} />
          <path
            d={gouge(604, 178, 616, 232, 1, -1) + gouge(592, 190, 598, 226, 0.8, -0.8)}
            fill={PAPER}
          />
        </Figure>
      </g>
    </>
  )
}

export const jekyllAtEase: LinocutArt = { width: W, height: H, Draw: JekyllAtEase }

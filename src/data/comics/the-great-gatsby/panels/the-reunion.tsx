import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Chapter V: "The reunion", the sixth moment in the guide's timeline. Its
 * line comes at Gatsby's window, after he has shown Daisy his house and his
 * shirts, so the panel is that room at that moment. Every detail is from the
 * held text (the 1925 first edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "Recovering himself in a minute he opened for us two hulking patent
 *   cabinets which held his massed suits and dressing-gowns and ties, and his
 *   shirts, piled like bricks in stacks a dozen high." So two tall cabinets
 *   stand open at the left, and in each two stacks of twelve folded shirts.
 * - "He took out a pile of shirts and began throwing them, one by one, before
 *   us, shirts of sheer linen and thick silk and fine flannel, which lost
 *   their folds as they fell and covered the table in many colored disarray.
 *   While we admired he brought more and the soft rich heap mounted
 *   higher—shirts with stripes and scrolls and plaids in coral and applegreen
 *   and lavender and faint orange, with monograms of Indian blue." So the
 *   table in front of the cabinets is heaped with shirts lying open, their
 *   sleeves flung out and hanging over its edge, cut with stripes, plaids
 *   and scrolls. The print has one colour besides black, so two shirts are
 *   printed in it for the coral; the green, the lavender, the orange and the
 *   blue are left to the words. The red is kept to whole shirts, big flat
 *   shapes on the table, well away from every face and hand.
 * - "After the house, we were to see the grounds and the swimming-pool, and
 *   the hydroplane and the midsummer flowers—but outside Gatsby's window it
 *   began to rain again, so we stood in a row looking at the corrugated
 *   surface of the Sound." So the three stand in a row at a tall window on
 *   the right, facing it, and through it the water is cut in rows of short
 *   ridges, with rain across the glass.
 * - "'If it wasn't for the mist we could see your home across the bay,' said
 *   Gatsby. 'You always have a green light that burns all night at the end
 *   of your dock.' Daisy put her arm through his abruptly, but he seemed
 *   absorbed in what he had just said." So the far shore is lost in mist and
 *   nothing shows across the water: the green light he speaks of is not
 *   drawn, because the mist hides it. (Where a panel does show it, it is cut
 *   in paper and never printed red, because the novel's light is green and a
 *   red one would be a different thing.) Daisy, between the two men, has her
 *   arm through Gatsby's, and he looks straight out at the bay.
 * - "I began to walk about the room, examining various indefinite objects in
 *   the half darkness." So the room is dim, its wall cut lightest near the
 *   window, the only light the rain-light from outside.
 * - "Gatsby, in a white flannel suit, silver shirt, and gold-colored tie,
 *   hurried in" (the same afternoon), so Gatsby is cut in paper, the kit's
 *   white suit (./people.tsx); Daisy is in white with her short dark hair, as
 *   in every panel; Nick is in his dark suit.
 *
 * Nothing is taken from a film, television or stage production. Seeds: 601
 * (the wall), 602 (the floor), 603 (the mist), 604 (the water), 605 (the
 * rain).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const BASE = 252
/** The window on the Sound: its sides, its head and its sill. */
const WIN = { x0: 616, x1: 836, y0: 22, y1: 244 }
/** The table the shirts were thrown on: back edge, front edge, its ends. */
const TABLE = { back: 240, front: 262, x0: 36, x1: 350 }
/** Where each of the three stands, in a row at the window. */
const NICK_AT: P = [432, 322]
const DAISY_AT: P = [502, 322]
const GATSBY_AT: P = [570, 322]
/** The three are drawn a little larger than the kit's life size, to fill the room. */
const FIG = 1.08

type Pattern = 'stripe' | 'plaid' | 'scroll' | 'plain'
/**
 * One shirt on the heap, thrown down and fallen open: where it lies, its
 * tilt and size, its pattern, whether it is printed in the spot colour, and
 * the angles its two sleeves fell at (degrees from straight down, outwards
 * positive), or null for a sleeve folded under.
 */
type Shirt = {
  at: P
  rot: number
  s: number
  pat: Pattern
  red?: boolean
  sleeves: [number | null, number | null]
}

/**
 * The heap on the table, back to front: the bottom of the heap first. The
 * two red shirts lie apart, so at phone width each is still a shirt and the
 * two never run together into one red blot on the white.
 */
const SHIRTS: Shirt[] = [
  { at: [78, 252], rot: -20, s: 1.1, pat: 'stripe', sleeves: [70, null] },
  { at: [140, 250], rot: 15, s: 1.15, pat: 'plaid', red: true, sleeves: [null, 40] },
  { at: [206, 252], rot: -8, s: 1.1, pat: 'scroll', sleeves: [null, null] },
  { at: [268, 252], rot: 25, s: 1.05, pat: 'stripe', sleeves: [null, 60] },
  { at: [322, 254], rot: -12, s: 1, pat: 'plain', sleeves: [null, 90] },
  { at: [108, 236], rot: -35, s: 1, pat: 'plain', sleeves: [60, null] },
  { at: [176, 232], rot: 5, s: 1.05, pat: 'stripe', sleeves: [null, null] },
  { at: [246, 234], rot: -18, s: 1.08, pat: 'stripe', red: true, sleeves: [null, 70] },
  { at: [148, 218], rot: 20, s: 0.95, pat: 'scroll', sleeves: [80, 60] },
  { at: [212, 216], rot: -6, s: 0.95, pat: 'stripe', sleeves: [null, null] },
  { at: [184, 202], rot: 0, s: 0.9, pat: 'plain', sleeves: [96, 84] },
]
/** Lying on the table, a shirt is seen from above at a slant: squashed to this. */
const LIE = 0.56

/**
 * A shirt laid flat, in its own frame: about 34 across the shoulders and 40
 * long, the neck at the top. The body, the collar's two points, and the
 * placket down the front with its buttons.
 */
const SHIRT_BODY =
  'M-17 -15C-12 -18 -8 -19 -5.6 -19.6Q0 -15.4 5.6 -19.6C8 -19 12 -18 17 -15L16.4 19C6 21.4 -6 21.4 -16.4 19Z'
const SHIRT_COLLAR =
  'M-6.2 -19.8L0 -11.4L-0.8 -21.2C-2.8 -21.4 -4.8 -21 -6.2 -19.8Z' +
  'M6.2 -19.8L0 -11.4L0.8 -21.2C2.8 -21.4 4.8 -21 6.2 -19.8Z'
const SHIRT_PLACKET = 'M0 -11V19'
const SHIRT_BUTTONS = [-4, 4, 12]
  .map((y) => `M-1.3 ${y}a1.3 1.3 0 1 0 2.6 0a1.3 1.3 0 1 0 -2.6 0Z`)
  .join('')

/** A sleeve from the shoulder of side `side` (-1 left, 1 right), fallen at `a` degrees. */
function sleevePath(side: -1 | 1, a: number) {
  const t = deg(90 - side * a)
  const L = 26
  const ox = side * 16.6
  const top: P = [ox, -15]
  const bot: P = [ox - side * 0.6, -3]
  const ux = Math.cos(t)
  const uy = Math.sin(t)
  const end1: P = [top[0] + ux * L - uy * side * 3.4, top[1] + uy * L + ux * side * 3.4]
  const end2: P = [bot[0] + ux * (L - 4) + uy * side * 3, bot[1] + uy * (L - 4) - ux * side * 3]
  const tube = `M${n(top[0])} ${n(top[1])}L${n(end1[0])} ${n(end1[1])}L${n(end2[0])} ${n(end2[1])}L${n(bot[0])} ${n(bot[1])}Z`
  const c1: P = [end1[0] - ux * 6, end1[1] - uy * 6]
  const c2: P = [end2[0] - ux * 6, end2[1] - uy * 6]
  const cuff = `M${n(c1[0])} ${n(c1[1])}L${n(end1[0])} ${n(end1[1])}L${n(end2[0])} ${n(end2[1])}L${n(c2[0])} ${n(c2[1])}Z`
  return { tube, cuff }
}

/** Each pattern once, in the shirt's frame, clipped by construction to the body. */
function patternOf(pat: Pattern) {
  let cut = ''
  let curl = ''
  const top = (x: number) => (Math.abs(x) < 6 ? -14 : -16)
  if (pat === 'stripe' || pat === 'plaid')
    for (let x = -14; x <= 14; x += pat === 'plaid' ? 6 : 4) {
      if (Math.abs(x) < 2.2) continue
      cut += gouge(x, top(x) + 1, x, 18.6, 0.55)
    }
  if (pat === 'plaid') for (let y = -10; y < 18; y += 6) cut += gouge(-15.4, y, 15.4, y, 0.5)
  if (pat === 'scroll')
    for (const [x, y] of [
      [-9, -8],
      [8, -6],
      [-8, 4],
      [9, 6],
      [-8, 14],
      [8, 15],
    ])
      curl += `M${x - 2.6} ${y}a2.6 2.2 0 1 1 2.6 2.2a1.3 1.1 0 1 1 1.2 -1.3`
  return { cut, curl }
}
const PATTERNS: Record<Pattern, { cut: string; curl: string }> = {
  stripe: patternOf('stripe'),
  plaid: patternOf('plaid'),
  scroll: patternOf('scroll'),
  plain: patternOf('plain'),
}

/** Sleeves hanging over the front edge of the table: [from, to]. */
const HANGING: [P, P][] = [
  [
    [66, 262],
    [58, 294],
  ],
  [
    [196, 264],
    [204, 300],
  ],
  [
    [330, 262],
    [340, 290],
  ],
]

type Marks = {
  wall: string
  floor: string
  mist: string
  water: string
  rain: string
  stacks: string
  stackLines: string
  hanging: { d: string; cuff: string }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit only by the rain-light from the window, and dimly: Nick
  // walks about "in the half darkness" a moment later.
  const light = (x: number, y: number) =>
    clamp(0.85 - Math.hypot((x - WIN.x0 - 40) * 0.9, (y - 120) * 1.2) / 520) * 0.9 + 0.04
  const wall = gougeField(rng(601), { x0: 0, x1: W, y0: 4, y1: BASE }, light)

  // The floor: boards running towards the window, lit nearest it.
  const f = rng(602)
  let floor = ''
  const V: P = [700, 90]
  for (let xt = -900; xt < 1700; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      const x0 = xt + (xb - xt) * t0
      const x1 = xt + (xb - xt) * t1
      const w = 0.8 + t0 * 2.6 + (1 - clamp(1 - Math.abs(x0 - 700) / 600)) * 0.8
      floor += wedge(x0, BASE + (H - BASE) * t0, x1, BASE + (H - BASE) * t1, w, w + 0.6)
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }

  // Through the window: "it began to rain again, so we stood in a row
  // looking at the corrugated surface of the Sound". Mist hides the far
  // shore ("If it wasn't for the mist we could see your home across the
  // bay"); under it the water is rows of short ridges.
  const mf = rng(603)
  let mist = ''
  for (let y = WIN.y0 + 10; y < 150; y += 9) {
    let x = WIN.x0 + between(mf, -20, 0)
    while (x < WIN.x1) {
      const len = between(mf, 20, 60)
      if (mf() < 0.35) mist += gouge(x, y, x + len, y + between(mf, -0.5, 0.5), 0.35)
      x += len + between(mf, 20, 50)
    }
  }
  const w = rng(604)
  let water = ''
  for (let y = 158, k = 0; y < WIN.y1; y += 4.6 + k * 0.5, k++) {
    let x = WIN.x0 + between(w, -10, 0)
    while (x < WIN.x1) {
      const len = between(w, 8, 20) + k * 1.4
      if (w() < 0.25 + k * 0.08)
        water += ribbon(wave(x, x + len, y, 1, len, between(w, 0, 6), 6), 0.5 + k * 0.22, 0.6)
      x += len + between(w, 2, 8)
    }
  }
  const rr = rng(605)
  let rain = ''
  for (let i = 0; i < 90; i++) {
    const x = between(rr, WIN.x0, WIN.x1 + 30)
    const y = between(rr, WIN.y0, WIN.y1)
    const len = between(rr, 8, 18)
    rain += gouge(x, y, x - len * 0.32, y + len, 0.45)
  }

  // "two hulking patent cabinets which held his massed suits and
  // dressing-gowns and ties, and his shirts, piled like bricks in stacks a
  // dozen high": two stacks in each, the folded shirts cut in paper.
  let stacks = ''
  let stackLines = ''
  for (const x0 of [52, 92, 176, 216]) {
    for (let k = 0; k < 12; k++) {
      const y = 112 + k * 9.6
      const off = k % 2 ? 1.2 : -1.2
      stacks += `M${n(x0 + off)} ${n(y)}h30v7.4h-30Z`
      stackLines += `M${n(x0 + off + 12)} ${n(y + 0.8)}l3 3.4l3 -3.4`
    }
  }

  // Sleeves hanging over the edge of the table, each with its cuff.
  const hanging = HANGING.map(([a, b]) => {
    const d = ribbon([a, [(a[0] + b[0]) / 2 + 2, (a[1] + b[1]) / 2], b], 12, 0.2, false)
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const L = Math.hypot(dx, dy) || 1
    const cuff = wedge(b[0] - (dx / L) * 7, b[1] - (dy / L) * 7, b[0], b[1], 5.4, 4.6)
    return { d, cuff }
  })

  cached = { wall, floor, mist, water, rain, stacks, stackLines, hanging }
  return cached
}

function TheReunion({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 170], push: 1.03 })}>
        {/* the dim back wall, and the floor */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <rect x={0} y={BASE - 6} width={W} height={6} fill={INK} />
        <rect x={0} y={BASE - 9} width={W} height={2} fill={PAPER} />

        {/* the window on the Sound, in the rain */}
        <rect
          x={WIN.x0 - 10}
          y={WIN.y0 - 10}
          width={WIN.x1 - WIN.x0 + 20}
          height={WIN.y1 - WIN.y0 + 22}
          fill={INK}
        />
        <g clipPath={`url(#${win})`}>
          <rect
            x={WIN.x0}
            y={WIN.y0}
            width={WIN.x1 - WIN.x0}
            height={WIN.y1 - WIN.y0}
            fill={PAPER}
          />
          <path d={m.water} fill={INK} />
          <path d={m.mist} fill={INK} />
          <path d={m.rain} fill={INK} />
        </g>
        <g fill={INK}>
          {[WIN.x0 + 72, WIN.x0 + 148].map((x) => (
            <rect key={x} x={x - 2.5} y={WIN.y0} width={5} height={WIN.y1 - WIN.y0} />
          ))}
          {[WIN.y0 + 74, WIN.y0 + 148].map((y) => (
            <rect key={y} x={WIN.x0} y={y - 2} width={WIN.x1 - WIN.x0} height={4} />
          ))}
        </g>
        <rect x={WIN.x0 - 16} y={WIN.y1 + 2} width={WIN.x1 - WIN.x0 + 32} height={7} fill={PAPER} />

        {/* the two cabinets, open, with the shirts stacked like bricks */}
        {[40, 164].map((x) => (
          <g key={x}>
            <rect
              x={x}
              y={96}
              width={92}
              height={BASE - 96}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
            <path
              d={`M${x} 96L${x - 16} 104V${BASE + 4}L${x} ${BASE - 2}Z`}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
            <path
              d={`M${x + 92} 96L${x + 106} 104V${BASE + 4}L${x + 92} ${BASE - 2}Z`}
              fill={INK}
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
          </g>
        ))}
        <path d={m.stacks} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        <path d={m.stackLines} fill="none" stroke={INK} strokeWidth={0.8} />

        {/* the table, and the shirts heaped on it */}
        <path
          d={`M${TABLE.x0 + 14} ${TABLE.back}H${TABLE.x1 - 14}L${TABLE.x1} ${TABLE.front}H${TABLE.x0}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <rect
          x={TABLE.x0}
          y={TABLE.front}
          width={TABLE.x1 - TABLE.x0}
          height={9}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${TABLE.x0 + 8} ${TABLE.front + 9}V${H - 14}M${TABLE.x1 - 8} ${TABLE.front + 9}V${H - 14}`}
          stroke={INK}
          strokeWidth={7}
        />
        {m.hanging.map((h) => (
          <g key={h.d} fill={PAPER} stroke={INK} strokeLinejoin="round">
            <path d={h.d} strokeWidth={1.4} />
            <path d={h.cuff} strokeWidth={1.2} />
          </g>
        ))}
        {SHIRTS.map((sh, i) => {
          const fill = sh.red ? RED : PAPER
          const mark = sh.red ? PAPER : INK
          const pat = PATTERNS[sh.pat]
          const sl = ([-1, 1] as const)
            .map((side, k) => (sh.sleeves[k] === null ? null : sleevePath(side, sh.sleeves[k]!)))
            .filter((x) => x !== null)
          return (
            <g
              key={`sh${i}`}
              transform={`translate(${sh.at[0]} ${sh.at[1]}) scale(1 ${LIE}) rotate(${sh.rot}) scale(${sh.s})`}
              stroke={INK}
              strokeLinejoin="round"
            >
              {sl.map((x) => (
                <g key={x.tube}>
                  <path d={x.tube} fill={fill} strokeWidth={1.4} />
                  <path d={x.cuff} fill={fill} strokeWidth={1.2} />
                </g>
              ))}
              <path d={SHIRT_BODY} fill={fill} strokeWidth={1.6} />
              <path d={pat.cut} fill={mark} stroke="none" />
              <path d={pat.curl} fill="none" stroke={mark} strokeWidth={1} />
              <path d={SHIRT_PLACKET} fill="none" strokeWidth={1.1} />
              <path d={SHIRT_BUTTONS} fill={mark} stroke="none" />
              <path d={SHIRT_COLLAR} fill={fill} strokeWidth={1.2} />
            </g>
          )
        })}

        {/* the three in a row at the window: Nick, then Daisy with her arm
            through Gatsby's, and Gatsby in his white flannel suit */}
        <Person at={NICK_AT} scale={FIG} pose={{ look: 'nick' }} />
        <Person
          at={GATSBY_AT}
          scale={FIG}
          pose={{
            look: 'gatsby',
            dress: 'paper',
            near: {
              pts: [
                [4, -132],
                [-15, -110],
                [1, -88],
              ],
              hand: 'none',
            },
          }}
        />
        <Person
          at={DAISY_AT}
          scale={FIG}
          pose={{
            look: 'daisy',
            head: { rot: -6 },
            near: {
              pts: [
                [3, -127],
                [27, -110],
                [50, -117],
              ],
              hand: 'mitt',
            },
          }}
        />
      </g>
    </>
  )
}

export const theReunion: LinocutArt = { width: W, height: H, Draw: TheReunion }

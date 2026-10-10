import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { prayingHands } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type P } from './people'

/**
 * Chapter 49: "Remorse and fire", the fourteenth moment in the guide's
 * timeline. Satis House, in "the larger room across the landing", the room of
 * the long table and the bride-cake. Every detail is from the held edition
 * (src/data/full-texts/great-expectations.ts):
 *
 * - "I saw her sitting on the hearth in a ragged chair, close before, and lost
 *   in the contemplation of, the ashy fire"; "As I brought another of the
 *   ragged chairs to the hearth and sat down". So the chimney-piece and a low
 *   fire of ash and a few coals are on the right, and her ragged chair stands
 *   on the hearth, its covering torn.
 * - The room is the one of Chapter 11: "From that room, too, the daylight was
 *   completely excluded"; "The most prominent object was a long table with a
 *   tablecloth spread on it ... An épergne or centre-piece of some kind was in
 *   the middle of this cloth; it was so heavily overhung with cobwebs that its
 *   form was quite undistinguishable"; "It's a great cake. A bride-cake.
 *   Mine!" So the long table runs back into the dark on the left, its cloth
 *   grey with age, the cake a black mound hung with webs, as the panel for
 *   "Miss Havisham's command" cuts them.
 * - The moment drawn: "She turned her face to me for the first time since she
 *   had averted it, and to my amazement, I may even add to my terror, dropped
 *   on her knees at my feet; with her folded hands raised to me in the manner
 *   in which, when her poor heart was young and fresh and whole, they must
 *   often have been raised to Heaven from her mother's side. To see her with
 *   her white hair and her worn face, kneeling at my feet, gave me a shock
 *   through all my frame." Then: "'What have I done! What have I done!'"
 *   So she kneels before him, her bridal dress spread on the floor, her face
 *   turned up to him and her hands folded and raised; Pip, on his feet, draws
 *   back with his hands lifted, his eyes wide.
 *
 * WHAT IS NOT DRAWN. Later in the chapter her dress catches fire. That is
 * never shown: no flame near her and no burns. The fire in the panel is the
 * one the text gives at this moment, "the ashy fire" in its grate, a few
 * coals glowing in the spot colour, well away from her and from both their
 * hands. Seeds: 4901 (the wall), 4902 (the floor), 4903 (the cloth), 4904
 * (the webs), 4905 (the ash).
 */

const W = 860
const H = 340
/** Where the back wall meets the floor. */
const BASE = 258
/** The long table: its top's back and front edges, its end, the foot of its cloth. */
const TABLE = { back: 194, front: 206, x1: 286, hem: 254 }
/** The bride-cake under its cobwebs. */
const CAKE = { x: 136, w: 96, top: 116 }
/** The old chimney-piece: its surround, mantel, opening, and the grate's heart. */
const FIRE = { x0: 652, x1: 852, mantel: 148, ox0: 694, ox1: 810, otop: 196 }
const GRATE: P = [752, 238]

const PIP_AT: P = [326, 327]
const HAVISHAM_AT: P = [474, 327]
const FIG = 1.42

/** The room is lit only by the low fire; the far end by the table is dark. */
function light(x: number, y: number) {
  return Math.max(clamp(1 - Math.hypot(x - GRATE[0], (y - GRATE[1]) * 1.15) / 470) ** 1.4, 0.03)
}

type Marks = { wall: string; floor: string; cloth: string; webs: string; ash: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = gougeField(rng(4901), { x0: 0, x1: W, y0: 6, y1: BASE - 10 }, light, {
    spacing: 6.2,
  })
  // The floor: boards, lit a little towards the fire.
  const f = rng(4902)
  let floor = ''
  const V: P = [600, 50]
  for (let xt = -800; xt < 1700; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      const x0 = xt + (xb - xt) * t0
      const L = light(x0, BASE + 10)
      const w = 1.2 + t0 * 2.4 + (1 - L) * 2.6
      floor += wedge(
        x0,
        BASE + (H - BASE) * t0,
        xt + (xb - xt) * t1,
        BASE + (H - BASE) * t1,
        w,
        w + 0.6,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  // The cloth, grey with age: close ink hatching over the paper, heavier
  // towards its foot and away from the fire.
  const c = rng(4903)
  let cloth = ''
  for (let y = TABLE.front + 3; y < TABLE.hem; y += 3.4) {
    const depth = (y - TABLE.front) / (TABLE.hem - TABLE.front)
    let x = between(c, -10, 0)
    while (x < TABLE.x1) {
      const len = between(c, 10, 40)
      if (c() < 0.6 + depth * 0.3)
        cloth += gouge(
          x,
          y,
          Math.min(x + len, TABLE.x1 - 2),
          y + between(c, -0.4, 0.4),
          0.5 + depth * 0.8,
        )
      x += len + between(c, 2, 9)
    }
  }
  for (let x = 24; x < TABLE.x1 - 10; x += between(c, 34, 56))
    cloth += wedge(x, TABLE.front + 2, x + between(c, -4, 4), TABLE.hem, 0.6, 2.4)
  // Cobwebs falling from the cake to the cloth.
  const r = rng(4904)
  let webs = ''
  const { x, w, top } = CAKE
  for (let k = 0; k < 8; k++) {
    const sx = x - w / 2 + 8 + (k * (w - 16)) / 7
    const sy = top + 30 + Math.abs(k - 3.5) * 6
    webs += `M${n(sx)} ${n(sy)}Q${n(sx + between(r, -8, 8))} ${n(TABLE.back - 4)} ${n(sx + between(r, -14, 14))} ${n(TABLE.front + between(r, 6, 24))}`
  }
  // The ash in the grate.
  const a = rng(4905)
  let ash = ''
  for (let k = 0; k < 16; k++) {
    const ax = FIRE.ox0 + 18 + between(a, 0, FIRE.ox1 - FIRE.ox0 - 36)
    const ay = GRATE[1] + between(a, -6, 8)
    ash += gouge(ax, ay, ax + between(a, 6, 14), ay + between(a, -1.4, 1.4), 0.7)
  }
  cached = { wall, floor, cloth, webs, ash }
  return cached
}

/** The long table running back into the dark, its aged cloth, and the cake under its webs. */
function LongTable({ m }: { m: Marks }) {
  const { back, front, x1, hem } = TABLE
  const { x, w, top } = CAKE
  return (
    <g strokeLinejoin="round">
      <path
        d={`M0 ${front}V${back}H${x1 - 12}L${x1} ${front}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d={`M0 ${front}H${x1}V${hem}H0Z`} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={m.cloth} fill={INK} />
      {/* "like a black fungus": the cake under its webs */}
      <path
        d={`M${x - w / 2} ${back + 4}C${x - w / 2 + 4} ${top + 40} ${x - w / 4} ${top + 6} ${x - 6} ${top}C${x + 8} ${top - 4} ${x + w / 3} ${top + 16} ${x + w / 2 - 6} ${top + 44}C${x + w / 2} ${top + 56} ${x + w / 2 + 4} ${back - 4} ${x + w / 2 + 2} ${back + 4}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.webs} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** The old chimney-piece and its grate, the fire burnt down to ash and a few coals. */
function AshyFire({ ash }: { ash: string }) {
  const { x0, x1, mantel, ox0, ox1, otop } = FIRE
  return (
    <g strokeLinejoin="round">
      <rect x={x0} y={mantel} width={x1 - x0} height={BASE - mantel} fill={PAPER} />
      <path
        d={
          gouge(x0 + 12, mantel + 12, x0 + 12, BASE - 4, 1.4) +
          gouge(x0 + 22, mantel + 16, x0 + 22, BASE - 8, 0.9) +
          gouge(ox0 + 8, mantel + 16, ox1 - 8, mantel + 16, 1.1) +
          gouge(ox0 + 16, mantel + 26, ox1 - 16, mantel + 26, 0.7)
        }
        fill={INK}
      />
      <rect x={x0 - 10} y={mantel - 9} width={x1 - x0 + 20} height={9} fill={INK} />
      <rect x={x0 - 12} y={mantel - 13} width={x1 - x0 + 24} height={4} fill={PAPER} />
      <path
        d={`M${ox0} ${BASE}V${otop + 14}Q${ox0} ${otop} ${ox0 + 14} ${otop}H${ox1 - 14}Q${ox1} ${otop} ${ox1} ${otop + 14}V${BASE}Z`}
        fill={INK}
      />
      {/* the ash, heaped low in the grate */}
      <path
        d={`M${ox0 + 14} ${GRATE[1] + 10}C${ox0 + 24} ${GRATE[1] - 6} ${ox1 - 24} ${GRATE[1] - 8} ${ox1 - 14} ${GRATE[1] + 10}Z`}
        fill={PAPER}
      />
      <path d={ash} fill={INK} />
      {/* a few coals still glowing in it, half buried */}
      <g fill={RED}>
        <path
          d={`M${GRATE[0] - 26} ${GRATE[1] + 3}c2 -4 7 -5 10 -2c2 2 1 4 -1 5c-3 1 -7 0 -9 -3Z`}
        />
        <path
          className="lc-glow"
          d={`M${GRATE[0] - 6} ${GRATE[1] + 1}c3 -5 10 -6 13 -2c2 3 0 5 -3 6c-4 1 -9 0 -10 -4Z`}
        />
        <path
          className="lc-glow"
          style={timing({ delay: 0.7 })}
          d={`M${GRATE[0] + 14} ${GRATE[1] + 4}c2 -3 6 -4 8 -1c1 2 0 3 -2 4c-2 0 -5 0 -6 -3Z`}
        />
      </g>
      <path
        d={`M${ox0 + 10} ${GRATE[1] + 10}H${ox1 - 10}M${ox0 + 12} ${GRATE[1] + 17}H${ox1 - 12}M${ox0 + 16} ${GRATE[1] + 10}V${BASE - 2}M${ox1 - 16} ${GRATE[1] + 10}V${BASE - 2}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />
      <rect x={x0 - 10} y={BASE} width={x1 - x0 + 20} height={9} fill={PAPER} />
      <rect x={x0 - 10} y={BASE + 9} width={x1 - x0 + 20} height={2} fill={INK} />
    </g>
  )
}

/**
 * Her ragged chair on the hearth, side on and turned to the fire, which she
 * sat "close before": its torn covering, the stuffing showing pale through.
 */
function RaggedChair() {
  const legs = 'M574 286V326M636 286V324M570 284V180'
  return (
    <g strokeLinejoin="round">
      <path d={legs} stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
      <path d={legs} stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path
        d="M560 176C562 168 578 168 582 176L584 284H558Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M560 276H646L644 290H562Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the rents in its covering, the stuffing showing through them */}
      <path
        d="M566 200l6 -3l4 5l-3 6l-5 -2ZM566 238l5 -1l3 6l-6 3ZM604 280l8 -2l4 4l-9 2Z"
        fill={PAPER}
      />
      <path d="M569 202l3 2M568 241l2 2" stroke={INK} strokeWidth={0.8} />
    </g>
  )
}

/** Her bridal dress spread on the floor round her knees, behind and before her. */
function SpreadDress() {
  const [x, y] = HAVISHAM_AT
  return (
    <g strokeLinejoin="round">
      <path
        d={`M${x - 44} ${y}C${x - 46} ${y - 12} ${x - 30} ${y - 22} ${x - 10} ${y - 24}C${x + 14} ${y - 26} ${x + 44} ${y - 22} ${x + 70} ${y - 8}C${x + 82} ${y - 2} ${x + 84} ${y + 2} ${x + 78} ${y + 3}H${x - 40}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.4}
      />
      <path
        d={`M${x - 24} ${y - 16}C${x - 28} ${y - 8} ${x - 30} ${y - 2} ${x - 32} ${y + 1}M${x + 26} ${y - 18}C${x + 38} ${y - 10} ${x + 50} ${y - 4} ${x + 62} ${y}M${x + 46} ${y - 14}C${x + 58} ${y - 8} ${x + 68} ${y - 3} ${x + 74} ${y}`}
        fill="none"
        stroke={INK}
        strokeWidth={1}
      />
    </g>
  )
}

/** Her folded hands, raised to him: two palms pressed together, the fingers up. */
const HANDS = prayingHands([29, -84], -58, 1.05)

function RemorseAndFire() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [420, 220], push: 1.03 })}>
      <path d={m.wall} fill={PAPER} />
      <rect x={0} y={BASE - 10} width={W} height={6} fill={PAPER} />
      <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <LongTable m={m} />
      <AshyFire ash={m.ash} />
      <RaggedChair />

      {/* Pip, on his feet, drawing back at the sight of her kneeling */}
      <Person
        at={PIP_AT}
        scale={FIG}
        pose={{
          look: 'pip',
          age: 'man',
          eye: 'wide',
          brow: 'up',
          head: { rot: 18 },
          body: { neck: [-4, -136], hip: [0, -70] },
          far: {
            pts: [
              [-6, -128],
              [6, -102],
              [20, -92],
            ],
            hand: 'open',
            deg: -26,
            thumb: -1,
            spread: 20,
          },
          near: {
            pts: [
              [0, -127],
              [14, -100],
              [30, -88],
            ],
            hand: 'open',
            deg: -14,
            thumb: -1,
            spread: 20,
          },
          legs: {
            far: [
              [-3, -70],
              [-8, -36],
              [-14, -3],
            ],
            near: [
              [3, -70],
              [8, -36],
              [10, -3],
            ],
          },
        }}
      />

      <SpreadDress />
      {/* Miss Havisham on her knees at his feet, her folded hands raised to him */}
      <Person
        at={HAVISHAM_AT}
        scale={FIG}
        flip
        pose={{
          look: 'havisham',
          head: { rot: -18 },
          // Kneeling: the thigh runs down from the hip to the knee on the
          // floor, and the shins lie back under the dress.
          seated: true,
          body: { neck: [6, -90], hip: [0, -42] },
          legs: {
            far: [
              [-2, -42],
              [16, -9],
              [-22, -3],
            ],
            near: [
              [2, -42],
              [20, -9],
              [-18, -3],
            ],
          },
          far: {
            pts: [
              [2, -84],
              [16, -68],
              [27, -82],
            ],
            hand: 'none',
          },
          near: {
            pts: [
              [6, -83],
              [20, -67],
              [30, -82],
            ],
            hand: 'none',
          },
        }}
      >
        <path
          d={HANDS.part.d}
          transform={HANDS.t}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
          strokeLinejoin="round"
        />
        <path d={HANDS.cut} transform={HANDS.t} fill={INK} />
      </Person>
    </g>
  )
}

export const remorseAndFire: LinocutArt = { width: W, height: H, Draw: RemorseAndFire }

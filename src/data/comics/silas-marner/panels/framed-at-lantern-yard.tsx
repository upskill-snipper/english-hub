import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GREY_HAIR,
  HEAD_PLAIN,
  HEAD_SILAS,
  HEAD_WILLIAM,
  HOLD_CUTS,
  HOLD_HAND,
  NECKCLOTH,
  PLAIN_CUTS,
  PLAIN_HAIR,
  PLAIN_SHUT_CUTS,
  PRAY_CUTS,
  PRAY_HANDS,
  SHIRT_COLLAR,
  SilasFace,
  WilliamFace,
  handAt,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 1: "Framed at Lantern Yard", the first moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "Nothing further was said until Silas was seated in the vestry, in front
 *   of the minister, with the eyes of those who to him represented God's
 *   people fixed solemnly upon him"; "On their return to the vestry there
 *   was further deliberation ... they resolved on praying and drawing lots";
 *   "Silas knelt with his brethren, relying on his own innocence being
 *   certified by immediate divine interference". So the room is the vestry,
 *   Silas kneels with his hands together, and the minister, at a table
 *   before them, holds up the lot that has been drawn. It is morning: William
 *   and the minister came for him "at six o'clock".
 * - The chapel is remembered for "The whitewashed walls" (Chapter 2), and
 *   the town as "set within sight of the widespread hillsides". So the walls
 *   are cut pale, lit from one plain window, and through it are the roofs
 *   and chimneys of the town and the hills beyond.
 * - "the minister, taking out a pocket-knife, showed it to Silas"; the
 *   search "ended—in William Dane's finding the well-known bag, empty". So
 *   the shut pocket-knife and the empty bag lie on the table as the
 *   evidence. The bag held "church money", the thing the scene is about, and
 *   is the one shape printed in the spot colour, limp and open-mouthed.
 * - Silas: "a pallid young man, with prominent short-sighted brown eyes";
 *   "that defenceless, deer-like gaze which belongs to large prominent eyes".
 *   So his face is the pale face of the figure kit (./people.tsx), young and
 *   not yet withered, turned up to the lot.
 * - William Dane: "the narrow slanting eyes and compressed lips of William
 *   Dane", "a little older than himself". He kneels nearest of the brethren,
 *   across the table from Silas, the two friends facing each other, his
 *   narrow eye turned sidelong on Silas while the others pray. Behind him two
 *   of the brethren kneel, one with his head bowed and one with his eyes on
 *   Silas.
 *
 * Sarah is not drawn: the text does not place her in the vestry, and she
 * breaks off the engagement by a message days later. The lots themselves are
 * not described, so the one drawn is a plain slip of paper. Nobody's dress is
 * described: the minister wears a plain black coat and a white neckcloth, the
 * brethren plain coats. Seeds: 811 (the wall), 812 (the floor), 813 (the
 * hills), 814 (the shadow on the boards).
 */

const W = 860
const H = 340
/** The foot of the wall; the boards run from it towards the reader. */
const FLOOR = 262
const WIN = { x: 34, y: 30, w: 104, h: 168 }

type Marks = { wall: string; floor: string; glass: string; shade: string; dusk: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Whitewash: the block cleared almost clean near the window, only a grain of
  // ink left standing, heavier towards the far corner on the right. Filled
  // with INK on a PAPER wall, so `ink` is how much is left uncut.
  const ink = (x: number, y: number) => {
    const near = clamp(1 - Math.hypot((x - 90) * 0.62, (y - 110) * 1.1) / 640)
    return 0.18 + (1 - near) * 0.82 + clamp((40 - y) / 40) * 0.2
  }
  const wall = gougeField(rng(811), { x0: 0, x1: W, y0: 6, y1: FLOOR - 8 }, ink, {
    spacing: 6.6,
    len: [18, 64],
    max: 3.4,
  })
  // Boards running to a point beyond the table.
  const f = rng(812)
  let floor = ''
  const V: P = [430, 96]
  for (let xt = -560; xt < 1460; xt += 36) {
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
  // The shadow along the foot of the wall, and the pools under the kneelers.
  let shade = ''
  for (let y = FLOOR + 2; y < FLOOR + 12; y += 3)
    shade += gouge(0, y, W, y, 1.8 - (y - FLOOR) * 0.12)
  const pool = (x0: number, x1: number, y0: number, depth: number) => {
    for (let y = y0; y < y0 + depth; y += 3.2) {
      const w = 1 - Math.abs(y - (y0 + depth / 2)) / (depth / 2 + 1)
      shade += gouge(x0 + (1 - w) * 12, y, x1 - (1 - w) * 12, y + 0.6, 0.6 + w * 1.8)
    }
  }
  pool(176, 290, 294, 14)
  pool(600, 720, 298, 14)
  pool(338, 552, 284, 10)
  // The boards in shadow, except where the window lays its light across them
  // and over Silas.
  const lit = (x: number, y: number) => {
    const t = (y - FLOOR) / (H - FLOOR)
    const a = 52 + t * 150
    const b = 196 + t * 170
    return x > a && x < b
  }
  const dusk = gougeField(
    rng(814),
    { x0: 0, x1: W, y0: FLOOR + 4, y1: H },
    (x, y) => (lit(x, y) ? 0.01 : 0.55 + clamp((x - 400) / 460) * 0.3),
    { spacing: 5, len: [14, 50], gap: [3, 10], max: 2.6 },
  )
  // The far hillsides, cut in paper furrows across their ink.
  const glass = gougeField(
    rng(813),
    { x0: WIN.x, x1: WIN.x + WIN.w, y0: 104, y1: 156 },
    (_x, y) => clamp(0.12 + (y - 104) / 110),
    { spacing: 5, len: [8, 26], max: 1.4 },
  )
  cached = { wall, floor, glass, shade, dusk }
  return cached
}

/**
 * The neckcloths, in paper with a fine ink edge. Without the edge a paper
 * neckcloth against this pale wall reads as a gap in the figure, not as cloth.
 * Each is set a little forward of the kit's place, under the chin.
 */
const CLOTH = { fill: PAPER, stroke: INK, strokeWidth: 0.9, strokeLinejoin: 'round' as const }

/** A shoe seen from behind a kneeling figure: toe on the floor, heel raised. */
const kneelShoe = ([x, y]: P, f: 1 | -1, s = 1): Part => ({
  d: `M${x + f * 4 * s} ${y - 8 * s}L${x - f * 2 * s} ${y - 9 * s}C${x - f * 8 * s} ${y - 8 * s} ${x - f * 12 * s} ${y - 3 * s} ${x - f * 13 * s} ${y + s}L${x + f * 4 * s} ${y + s}Z`,
})

// ── SILAS, kneeling on the left, looking up at the lot ──────────────────────
const SILAS_HEAD = { d: HEAD_SILAS, at: [236, 130] as P, rot: -14, scale: 1.42 }
const SILAS_ARM: P[] = [
  [244, 176],
  [252, 218],
  [274, 196],
]
const SILAS_HANDS = { parts: PRAY_HANDS, scale: 1.2, rot: -22 }
const SILAS: Part[] = [
  ...man({
    facing: 1,
    neck: [238, 166],
    hip: [224, 240],
    head: SILAS_HEAD,
    body: { width: 30, tails: 30, front: 2, flare: 6 },
    arm: 8.5,
    leg: 10,
    feet: false,
    near: {
      arm: SILAS_ARM,
      leg: [
        [226, 240],
        [258, 292],
        [204, 298],
      ],
      hand: SILAS_HANDS,
    },
    far: {
      arm: [
        [236, 176],
        [246, 220],
        [268, 202],
      ],
      leg: [
        [222, 242],
        [250, 294],
        [196, 300],
      ],
    },
  }),
  kneelShoe([200, 299], 1, 1.1),
]

// ── THE MINISTER, behind the table, holding up the lot ──────────────────────
const MIN_HEAD = { d: HEAD_PLAIN, at: [465, 80] as P, rot: -8, scale: 1.3 }
const MIN_ARM: P[] = [
  [472, 124],
  [446, 154],
  [426, 124],
]
const MIN_HAND = { parts: HOLD_HAND, scale: 1.15, rot: -6 }
const MINISTER: Part[] = man({
  facing: -1,
  neck: [480, 112],
  hip: [486, 194],
  head: MIN_HEAD,
  body: { width: 38, tails: 66, flare: 6, long: true },
  arm: 9,
  leg: 10,
  near: {
    arm: MIN_ARM,
    leg: [
      [484, 194],
      [480, 240],
      [478, 280],
    ],
    hand: MIN_HAND,
  },
  far: {
    arm: [
      [490, 124],
      [498, 168],
      [494, 206],
    ],
    leg: [
      [492, 196],
      [496, 240],
      [498, 280],
    ],
  },
})

// ── WILLIAM DANE, kneeling nearest on the right, his eye on his friend ──────
const WIL_HEAD = { d: HEAD_WILLIAM, at: [639, 142] as P, rot: -2, scale: 1.45 }
const WIL_ARM: P[] = [
  [646, 188],
  [636, 228],
  [614, 210],
]
const WIL_HANDS = { parts: PRAY_HANDS, scale: 1.2, rot: 22 }
const WILLIAM: Part[] = [
  ...man({
    facing: -1,
    neck: [650, 178],
    hip: [664, 250],
    head: WIL_HEAD,
    body: { width: 30, tails: 30, front: 2, flare: 6 },
    arm: 8.5,
    leg: 10,
    feet: false,
    near: {
      arm: WIL_ARM,
      leg: [
        [662, 250],
        [630, 300],
        [686, 306],
      ],
      hand: WIL_HANDS,
    },
    far: {
      arm: [
        [656, 188],
        [648, 230],
        [624, 214],
      ],
      leg: [
        [668, 252],
        [638, 302],
        [694, 308],
      ],
    },
  }),
  kneelShoe([692, 307], -1, 1.1),
]

/**
 * One of the brethren, kneeling further back and so smaller and higher on
 * the floor. `bowed` gives a head bent in prayer with the eye shut; without
 * it, he looks across at Silas.
 */
function brother(x: number, floor: number, s: number, bowed: boolean, grey: boolean) {
  const k = s / 1.26
  const head = {
    d: HEAD_PLAIN,
    at: [x - 11 * k, floor - 132 * k] as P,
    rot: bowed ? -24 : -4,
    scale: s,
  }
  const arm: P[] = [
    [x - 2 * k, floor - 88 * k],
    [x - 10 * k, floor - 52 * k],
    [x - 28 * k, floor - 70 * k],
  ]
  const hands = { parts: PRAY_HANDS, scale: 1.05 * k, rot: 26 }
  const parts: Part[] = [
    ...man({
      facing: -1,
      neck: [x + 2 * k, floor - 98 * k],
      hip: [x + 12 * k, floor - 34 * k],
      head,
      body: { width: 28 * k, tails: 28 * k, front: 2, flare: 5 * k },
      arm: 8 * k,
      leg: 9 * k,
      feet: false,
      near: {
        arm,
        leg: [
          [x + 10 * k, floor - 34 * k],
          [x - 18 * k, floor - 4 * k],
          [x + 28 * k, floor],
        ],
        hand: hands,
      },
      far: {
        arm: [],
        leg: [
          [x + 14 * k, floor - 32 * k],
          [x - 10 * k, floor - 2 * k],
          [x + 36 * k, floor + 2 * k],
        ],
      },
    }),
    kneelShoe([x + 32 * k, floor + 1], -1, k),
  ]
  return { parts, head, arm, hands, bowed, grey }
}
const BRETHREN = [brother(744, 286, 1.12, false, true), brother(810, 282, 1.06, true, false)]

/** The view from the window: far hills, and the roofs and chimneys of the town. */
const TOWN = {
  hills: `M${WIN.x} 118Q${WIN.x + 28} 100 ${WIN.x + 56} 112Q${WIN.x + 82} 96 ${WIN.x + 104} 108`,
  roofs:
    `M${WIN.x} 200V160L${WIN.x + 16} 146L${WIN.x + 32} 160V150H${WIN.x + 38}V138H${WIN.x + 45}V156` +
    `L${WIN.x + 58} 142L${WIN.x + 74} 156V148H${WIN.x + 80}V134H${WIN.x + 86}V152L${WIN.x + 96} 150` +
    `L${WIN.x + 104} 156V200Z`,
  lights: `M${WIN.x + 9} 170h6v8h-6ZM${WIN.x + 52} 166h6v8h-6ZM${WIN.x + 88} 172h6v8h-6Z`,
}

/**
 * The empty church-money bag, slumped on the table: its sides fallen in, its
 * neck tied, the gathered mouth flopped over and the cords hanging. Drawn
 * about its foot, and placed with BAG_AT.
 */
const BAG = {
  body: 'M-17 0C-18.6 -5 -15.4 -10.6 -9.6 -13.6C-6.6 -15.2 -4.4 -16.2 -3.2 -18.2L3.2 -18.2C4.4 -16.4 7.4 -14.8 10.6 -13.2C16 -10.4 18.6 -5 17.4 0Z',
  tie: 'M-4 -17.6L4 -17.6L3.4 -21L-3.4 -21Z',
  mouth:
    'M-3.4 -21C-6 -24.6 -3.4 -28.4 0.6 -27.4C4.2 -29.4 9.2 -27.4 11.4 -23.4C12.2 -21.8 11.6 -20.4 10 -20.6C7.6 -21 5.4 -20.6 3.4 -21Z',
  cords: 'M3 -19.6C8 -17 11.6 -12 12.6 -5.6M1.6 -19C4.6 -14 6.4 -8.6 6.6 -2.6',
  folds: 'M-12.4 -6.4Q-3 -9.6 7 -7M-14.6 -2.4Q-1 -5 13 -2.6M-8 -12Q-4.6 -10 -1.4 -12.6',
}
const BAG_AT = 'translate(376 209) scale(1.3)'
/**
 * The pocket-knife, shut, lying on the table: a pale horn handle, curved, with
 * metal bolsters at both ends and the slot where the blade folds in.
 */
const KNIFE = {
  body: 'M0 0C0 -3.6 2.6 -5.4 6.2 -5.2L31.6 -4.2C36 -4 39.2 -2.2 39.6 0.6C39.8 3.2 37.2 4.8 33.4 4.6L6 4C2.6 3.8 0 3.2 0 0Z',
  ends: 'M0.6 -2.8L6.2 -5.2V4L0.6 2.8ZM31.6 -4.2L38.8 -1.8V3.2L33.4 4.6Z',
  slot: 'M7.4 -2L30.4 -1.4',
  nick: 'M17 -3.6Q19 -1.6 21 -3.4',
}
const KNIFE_AT = 'translate(430 205) rotate(-4) scale(1.05)'

function FramedAtLanternYard({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, SILAS_HEAD.at, SILAS_HEAD.rot, SILAS_HEAD.scale)
  const mt = headAt(-1, MIN_HEAD.at, MIN_HEAD.rot, MIN_HEAD.scale)
  const wt = headAt(-1, WIL_HEAD.at, WIL_HEAD.rot, WIL_HEAD.scale)
  const slip = handAt(MIN_ARM, -1, MIN_HAND)
  return (
    <>
      <defs>
        <clipPath id={`${uid}-win`}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
        {/* the whitewashed vestry */}
        <rect x={0} y={0} width={W} height={FLOOR} fill={PAPER} />
        <path d={m.wall} fill={INK} />
        <rect x={0} y={FLOOR - 8} width={W} height={8} fill={INK} />
        <rect x={0} y={FLOOR - 5} width={W} height={1.4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.dusk} fill={INK} />
        <path d={m.shade} fill={INK} />
        {/* a plain rail along the wall */}
        <rect x={0} y={204} width={W} height={3.4} fill={INK} />

        {/* the one plain window, its small panes full of morning */}
        <rect x={WIN.x - 8} y={WIN.y - 8} width={WIN.w + 16} height={WIN.h + 16} fill={INK} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
        {/* beyond it the town's roofs and chimneys, and the hillsides "within sight" */}
        <g clipPath={`url(#${uid}-win)`}>
          <path d={TOWN.hills} fill="none" stroke={INK} strokeWidth={2.2} />
          <path d={m.glass} fill={INK} />
          <path d={TOWN.roofs} fill={INK} />
          <path d={TOWN.lights} fill={PAPER} />
        </g>
        <g fill={INK}>
          {[1, 2].map((k) => (
            <rect
              key={`v${k}`}
              x={WIN.x + (WIN.w / 3) * k - 1.6}
              y={WIN.y}
              width={3.2}
              height={WIN.h}
            />
          ))}
          {[1, 2, 3, 4].map((k) => (
            <rect
              key={`h${k}`}
              x={WIN.x}
              y={WIN.y + (WIN.h / 5) * k - 1.6}
              width={WIN.w}
              height={3.2}
            />
          ))}
        </g>
        <rect x={WIN.x - 14} y={WIN.y + WIN.h + 6} width={WIN.w + 28} height={6} fill={PAPER} />
        <rect x={WIN.x - 14} y={WIN.y + WIN.h + 12} width={WIN.w + 28} height={2} fill={INK} />

        {/* two of the brethren, further back: one looks at Silas, one prays */}
        {BRETHREN.map((b, i) => {
          const t = headAt(-1, b.head.at, b.head.rot, b.head.scale)
          return (
            <Figure key={i} parts={b.parts}>
              <path d={NECKCLOTH} transform={`${t} translate(3 -1)`} {...CLOTH} />
              <path
                d={(b.bowed ? PLAIN_SHUT_CUTS : PLAIN_CUTS) + (b.grey ? GREY_HAIR : PLAIN_HAIR)}
                transform={t}
                fill={PAPER}
              />
              <path d={PRAY_CUTS} transform={handAt(b.arm, -1, b.hands)} fill={PAPER} />
            </Figure>
          )
        })}

        {/* the minister, standing behind the table */}
        <Figure parts={MINISTER} halo={2}>
          <path d={NECKCLOTH} transform={`${mt} translate(3 -1)`} {...CLOTH} />
          <path d={PLAIN_CUTS + GREY_HAIR} transform={mt} fill={PAPER} />
          <path
            d={gouge(486, 130, 490, 196, 1, -1.2) + gouge(474, 136, 470, 192, 0.8, 0.8)}
            fill={PAPER}
          />
          <path d={HOLD_CUTS} transform={slip} fill={PAPER} />
        </Figure>
        {/* the lot, a slip of paper held up towards Silas, a line of writing on it */}
        <g transform={slip}>
          <g transform="rotate(14)" className="lc-fade-in" style={timing({ delay: 0.8, dur: 1 })}>
            <path
              d="M12 -26L44 -26L44 -2L12 -2Z"
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.6}
              strokeLinejoin="round"
            />
            <path d="M17 -18H39M17 -11.6H33" stroke={INK} strokeWidth={1.4} />
          </g>
        </g>
        <path
          d={HOLD_HAND[4].d}
          transform={slip}
          fill="none"
          stroke={INK}
          strokeWidth={2.4}
          strokeLinecap="round"
        />

        {/* the table, and on it the evidence: the empty bag and the knife */}
        <path d="M330 204H556L564 214H322Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M324 214H562V228H324Z" fill={INK} />
        <path d={gouge(328, 221, 558, 221, 1)} fill={PAPER} />
        <path d="M352 228V284M536 228V284" stroke={INK} strokeWidth={6} />
        <path d="M334 228V294M552 228V294" stroke={PAPER} strokeWidth={10} />
        <path d="M334 228V294M552 228V294" stroke={INK} strokeWidth={7} />
        <path d={gouge(333, 234, 333, 288, 0.6) + gouge(551, 234, 551, 288, 0.6)} fill={PAPER} />
        <g transform={BAG_AT} strokeLinejoin="round">
          <path d={BAG.body} fill={RED} stroke={INK} strokeWidth={1.1} />
          <path d={BAG.folds} fill="none" stroke={INK} strokeWidth={0.8} />
          <path d={BAG.tie} fill={INK} />
          <path d={BAG.mouth} fill={RED} stroke={INK} strokeWidth={1.1} />
          <path d={BAG.cords} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
        </g>
        <g transform={KNIFE_AT}>
          <path d={KNIFE.body} fill={PAPER} stroke={INK} strokeWidth={1.3} />
          <path d={KNIFE.ends} fill={INK} />
          <path d={KNIFE.slot + KNIFE.nick} fill="none" stroke={INK} strokeWidth={1.1} />
        </g>

        {/* Silas, kneeling with his hands together, looking up at the lot */}
        <Figure parts={SILAS} halo={2}>
          <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
          <SilasFace t={st} withered={false} look={0.8} />
          <path d={PRAY_CUTS} transform={handAt(SILAS_ARM, 1, SILAS_HANDS)} fill={PAPER} />
          <path
            d={gouge(232, 186, 226, 236, 0.9, -1) + gouge(220, 192, 212, 238, 0.8, -0.8)}
            fill={PAPER}
          />
        </Figure>

        {/* William Dane, kneeling, his narrow eye on his friend */}
        <Figure parts={WILLIAM} halo={2}>
          <path d={NECKCLOTH} transform={`${wt} translate(3 -1)`} {...CLOTH} />
          <WilliamFace t={wt} />
          <path d={PRAY_CUTS} transform={handAt(WIL_ARM, -1, WIL_HANDS)} fill={PAPER} />
          <path d={gouge(656, 196, 664, 242, 0.9, 1)} fill={PAPER} />
        </Figure>
      </g>
    </>
  )
}

export const framedAtLanternYard: LinocutArt = { width: W, height: H, Draw: FramedAtLanternYard }

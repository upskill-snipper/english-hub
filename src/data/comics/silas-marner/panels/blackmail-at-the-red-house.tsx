import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  DUNSTAN_CUTS,
  DUNSTAN_HAIR,
  DunstanFlush,
  Figure,
  GODFREY_CURLS,
  GODFREY_FROWN_CUTS,
  GODFREY_HAIR,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_DUNSTAN,
  HEAD_GODFREY,
  NECKCLOTH,
  PaperHair,
  ROUND_HAT,
  ROUND_HAT_BAND,
  bootTop,
  handAt,
  headAt,
  line,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 3: "Blackmail at the Red House", the third moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "It was the once hopeful Godfrey who was standing, with his hands in his
 *   side-pockets and his back to the fire, in the dark wainscoted parlour,
 *   one late November afternoon"; "The fading grey light fell dimly on the
 *   walls decorated with guns, whips, and foxes' brushes, on coats and hats
 *   flung on the chairs, on tankards sending forth a scent of flat ale, and
 *   on a half-choked fire, with pipes propped up in the chimney-corners". So
 *   the room is dark panelled wood in a grey light from the window, guns, a
 *   whip and a fox's brush hang over the chimney-piece, a hat is flung on a
 *   chair, there are tankards, the fire is low (the spot colour), and a long
 *   clay pipe leans in each corner of the grate.
 * - "Godfrey stood, still with his back to the fire, uneasily moving his
 *   fingers among the contents of his side-pockets, and looking at the
 *   floor"; "the look of gloomy vexation on Godfrey's blond face"; "That big
 *   muscular frame of his". So he stands broad on the hearth, his hands in
 *   his pockets and his head down, his fair hair cut in paper and his brow
 *   drawn down (the figure kit's GODFREY_FROWN_CUTS).
 * - Dunstan: "a thick-set, heavy-looking young man ... with the flushed face
 *   and the gratuitously elated bearing which mark the first stage of
 *   intoxication"; "'As you please; but I'll have a draught of ale first.' And
 *   ringing the bell, he threw himself across two chairs, and began to rap the
 *   window-seat with the handle of his whip"; "Dunstan was waiting for this,
 *   and took his ale in shorter draughts than usual". So he lies back across
 *   two chairs before the window, his boots up on the second, a tankard of
 *   ale in one hand and the whip in the other, its handle rapping the
 *   window-seat behind him; his face is turned on his brother, his chin up,
 *   and the spot colour flushes his cheek (never his mouth or chin). The whip
 *   is the one he took "from the table".
 * - "The handsome brown spaniel that lay on the hearth retreated under the
 *   chair in the chimney-corner." So Snuff lies under the chair in the corner
 *   by the fire, her long ear hanging. Brown is left to the words.
 *
 * The room is the one "Godfrey fails to confess" (Chapter 9) shows at
 * breakfast, from the same place: the chimney-piece on the left, the window
 * right of the middle, the door on the right. Here it is late afternoon and
 * the light is failing. Nobody's dress is described: they wear the
 * tail-coats, breeches and top-boots of the figure kit (./people.tsx).
 * Seeds: 301 (the wainscot), 302 (the floor), 303 (the window's grey), 304
 * (the twigs beyond the glass).
 */

const W = 860
const H = 340
/** The skirting: the wall stands on it and the floor runs from it. */
const FLOOR = 244
const WIN = { x: 570, y: 62, w: 144, h: 134 }

type Marks = { wall: string; floor: string; pool: string; sky: string; twigs: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wainscot lit dimly from the window on the right, and a little by the
  // low fire on the left.
  const light = (x: number, y: number) => {
    const l1 = clamp(1 - Math.hypot((x - 640) * 0.75, (y - 130) * 1.1) / 380)
    const l2 = clamp(1 - Math.hypot(x - 96, (y - 236) * 1.2) / 120) * 0.38
    return Math.max(l1 * 0.72, l2, 0.04)
  }
  const wall = gougeField(rng(301), { x0: 0, x1: W, y0: 6, y1: FLOOR - 8 }, light, {
    spacing: 6.4,
    len: [14, 60],
  })
  // Floor boards, ink joints running to a point near the middle.
  const f = rng(302)
  let floor = ''
  const V: P = [420, 40]
  for (let xt = -620; xt < 1500; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  // Dusk across the boards, lighter only where the window's grey falls.
  let pool = ''
  for (let y = FLOOR + 3; y < H - 4; y += 3.4) {
    const k = (y - FLOOR) / (H - FLOOR)
    const a = 470 - k * 120
    const b = 700 - k * 60
    pool += gouge(-10, y, a, y + 0.4, 1.2 + (1 - k) * 0.6)
    pool += gouge(b, y, W + 10, y + 0.4, 1.2 + (1 - k) * 0.6)
  }
  // Pools of shadow under the table, the chairs and Godfrey.
  const under = (x0: number, x1: number, y0: number, depth: number) => {
    for (let y = y0; y < y0 + depth; y += 3) {
      const w = 1 - Math.abs(y - (y0 + depth / 2)) / (depth / 2 + 1)
      pool += gouge(x0 + (1 - w) * 10, y, x1 - (1 - w) * 10, y + 0.5, 0.6 + w * 1.8)
    }
  }
  under(70, 170, 294, 12)
  under(290, 440, 290, 12)
  under(456, 666, 290, 12)
  // The window's grey: paper crossed with fine ink, darker towards the foot.
  const s = rng(303)
  let sky = ''
  for (let y = WIN.y + 4; y < WIN.y + WIN.h; y += between(s, 4, 6.5)) {
    const x = WIN.x + between(s, -20, 30)
    const k = (y - WIN.y) / WIN.h
    sky += gouge(x, y, x + between(s, 60, 150), y + between(s, -0.6, 0.6), 0.5 + k * 0.9)
  }
  // Bare twigs of a tree beyond the glass.
  const t = rng(304)
  let twigs = ''
  const branch = (x: number, y: number, a: number, len: number, w: number, depth: number) => {
    const x2 = x + Math.cos(a) * len
    const y2 = y + Math.sin(a) * len
    twigs += wedge(x, y, x2, y2, w, w * 0.6)
    if (depth > 0) {
      branch(x2, y2, a - between(t, 0.25, 0.6), len * 0.72, w * 0.6, depth - 1)
      branch(x2, y2, a + between(t, 0.2, 0.5), len * 0.66, w * 0.6, depth - 1)
    }
  }
  branch(700, 190, -2.2, 46, 3.6, 3)
  branch(700, 130, -2.7, 30, 2.2, 2)
  cached = { wall, floor, pool, sky, twigs }
  return cached
}

// ── GODFREY, on the hearth, his back to the fire ────────────────────────────
const GOD_HEAD = { d: HEAD_GODFREY, at: [133, 85] as P, rot: 20, scale: 1.2 }
/** His arms bent, the hands down in his side-pockets. */
const GOD_NEAR_ARM: P[] = [
  [118, 126],
  [104, 162],
  [116, 192],
]
const GOD_FAR_ARM: P[] = [
  [124, 126],
  [138, 160],
  [132, 190],
]
const GOD_NEAR_LEG: P[] = [
  [118, 200],
  [114, 250],
  [112, 298],
]
const GOD_FAR_LEG: P[] = [
  [126, 200],
  [132, 248],
  [134, 294],
]
const GODFREY: Part[] = man({
  facing: 1,
  neck: [118, 114],
  hip: [122, 200],
  head: GOD_HEAD,
  body: { width: 50, tails: 56, front: 4, flare: 7 },
  arm: 12,
  leg: 13,
  near: { arm: GOD_NEAR_ARM, leg: GOD_NEAR_LEG },
  far: { arm: GOD_FAR_ARM, leg: GOD_FAR_LEG },
}).map((q) => (q.d === line(GOD_NEAR_LEG) ? { ...q, sep: 1.2 } : q))
const GOD_T = headAt(1, GOD_HEAD.at, GOD_HEAD.rot, GOD_HEAD.scale)
/** Folds of his coat, the line of his waistcoat, and the mouth of the pocket his hand is in. */
const GOD_CUTS =
  gouge(128, 132, 140, 192, 1, -0.8) +
  gouge(114, 136, 110, 180, 0.8, 0.6) +
  gouge(104, 212, 94, 252, 0.8, 0.6) +
  gouge(106, 194, 124, 193, 0.8)

// ── DUNSTAN, thrown across two chairs before the window ─────────────────────
const DUN_HEAD = { d: HEAD_DUNSTAN, at: [639, 146] as P, rot: 18, scale: 1.12 }
/** His near hand, the tankard of ale on his stomach. */
const DUN_ALE_ARM: P[] = [
  [630, 184],
  [612, 210],
  [596, 198],
]
/** His far hand, reaching back to rap the window-seat with the whip's handle. */
const DUN_WHIP_ARM: P[] = [
  [638, 182],
  [666, 196],
  [690, 186],
]
const DUN_NEAR_LEG: P[] = [
  [606, 228],
  [560, 220],
  [514, 230],
]
const DUN_FAR_LEG: P[] = [
  [612, 226],
  [566, 214],
  [522, 222],
]
const GRIP = { parts: GRIP_HAND, scale: 1.05, rot: 0 }
const DUNSTAN: Part[] = man({
  facing: -1,
  neck: [632, 172],
  hip: [608, 226],
  head: DUN_HEAD,
  body: { width: 40, tails: 10, front: 4, flare: 3 },
  arm: 10.5,
  leg: 12,
  near: { arm: DUN_ALE_ARM, leg: DUN_NEAR_LEG, hand: GRIP },
  far: { arm: DUN_WHIP_ARM, leg: DUN_FAR_LEG, hand: { ...GRIP, flip: false } },
}).map((q) => (q.d === line(DUN_NEAR_LEG) ? { ...q, sep: 1.2 } : q))
const DUN_T = headAt(-1, DUN_HEAD.at, DUN_HEAD.rot, DUN_HEAD.scale)
/** Folds of his coat over the stout front of him. */
const DUN_CUTS = gouge(624, 190, 612, 220, 0.9, 0.8) + gouge(640, 192, 632, 222, 0.8, -0.6)

/**
 * A plain chair in profile: its seat and legs, and with `top` its back on the
 * side `back` (1: right), rising to that height.
 */
function chair(x: number, seat: number, back: 1 | -1, top?: number, w = 64): string {
  const bx = back === 1 ? x + w - 4 : x + 4
  return (
    `M${x} ${seat}H${x + w}V${seat + 7}H${x}Z` +
    `M${x + 3} ${seat + 7}V${seat + 58}h5V${seat + 7}Z` +
    `M${x + w - 8} ${seat + 7}V${seat + 58}h5V${seat + 7}Z` +
    (top === undefined ? '' : `M${bx - 3} ${seat}V${top}h6V${seat}Z`)
  )
}
/** Chair A, that Dunstan sits in: its back behind him, its seat drawn over his coat. */
const CHAIR_A_BACK = 'M641 236V162h6V236Z'
const CHAIR_A = chair(584, 236, 1)
const CHAIR_B = chair(468, 238, -1, 172)
/** The ladder of chair A's back, behind Dunstan. */
const LADDER_A = 'M638 176H650M638 194H650M638 212H650'
/** The chair in the chimney-corner. */
const CORNER_CHAIR = chair(190, 252, -1, 196, 58)

/** The whip: its stock from his hand down to the window-seat, the lash curled back over the chair. */
const WHIP = {
  stock: 'M688 186L707 204',
  butt: 'M703 200L711 208L708 211L700 203Z',
  lash: ribbon(
    [
      [688, 186],
      [680, 170],
      [676, 154],
      [680, 140],
      [690, 134],
      [698, 140],
    ],
    2.6,
    0.4,
    false,
  ),
}

/** The tankard in Dunstan's hand, and the two on the table, drawn about their foot. */
const TANKARD = 'M-8 0V-18H8V0Z'
const TANKARD_HANDLE = 'M8 -15q7 1 6 7q-1 5 -6 5'

/**
 * Snuff, the brown spaniel, lying under the chair in the chimney-corner,
 * facing the room: her body, her head raised, the long ear hanging, her
 * forepaws out before her and her tail behind.
 */
const SPANIEL = {
  body: 'M2 0C0 -8 4 -16 16 -18C28 -20 44 -19 54 -14L60 -8C62 -3 60 0 56 0Z',
  head: 'M50 -16C48 -26 54 -32 62 -32C69 -32 74 -28 75 -23L82 -21C84 -19 83 -16 80 -15L73 -14C70 -10 62 -9 56 -11Z',
  ear: 'M58 -29C53 -27 51 -18 53 -9C55 -6 59 -6 60 -9C61 -16 61 -24 58 -29Z',
  paws: 'M58 -3H80Q82 1 78 1H58Z',
  tail: 'M3 -8C-4 -12 -8 -10 -10 -6C-6 -5 -2 -4 2 -3Z',
}
/** Where she lies: her paws out from under the chair. */
const SPANIEL_AT = 'translate(182 302)'
/** Her eye, the edge of her long ear, and the curl of her coat, cut in paper. */
const SPANIEL_CUTS =
  gouge(64.6, -26, 68.4, -26.4, 0.75) +
  'M57.6 -29.6C51.6 -27.6 49.8 -18 51.8 -8.6' +
  gouge(10, -10, 22, -12.6, 0.6, 0.6) +
  gouge(20, -5, 34, -7.4, 0.6, 0.6) +
  gouge(30, -12.6, 44, -13.6, 0.6, 0.6) +
  gouge(38, -5.6, 50, -7, 0.6, 0.6)

function BlackmailAtTheRedHouse({ uid }: ArtProps) {
  const m = marks()
  const id = { win: `${uid}-win` }
  const ale = handAt(DUN_ALE_ARM, -1, GRIP)
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 190], push: 1.03 })}>
        {/* the dark wainscot, in the fading grey light */}
        <path d={m.wall} fill={PAPER} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          {[226, 344, 452].map((x) => (
            <rect key={x} x={x} y={24} width={96} height={108} />
          ))}
          {[198, 300, 402].map((x) => (
            <rect key={x} x={x} y={160} width={86} height={68} />
          ))}
        </g>
        <rect x={180} y={142} width={W - 180} height={6} fill={PAPER} />
        <rect x={180} y={151} width={W - 180} height={1.6} fill={PAPER} />
        <rect x={0} y={FLOOR - 6} width={W} height={8} fill={PAPER} />
        <rect x={0} y={FLOOR - 3} width={W} height={1.4} fill={INK} />
        <rect x={0} y={FLOOR + 2} width={W} height={H - FLOOR - 2} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.pool} fill={INK} />

        {/* over the chimney-piece: two guns on their pegs, a hunting whip and a fox's brush */}
        <g fill={PAPER}>
          <rect x={30} y={34} width={4} height={8} />
          <rect x={120} y={34} width={4} height={8} />
          <rect x={30} y={56} width={4} height={8} />
          <rect x={120} y={56} width={4} height={8} />
          <path d={wedge(52, 44, 160, 42, 3.6, 2.4)} />
          <path d="M16 50L22 41L56 42.4L56 46.2L30 47L24 53Z" />
          <path d={wedge(56, 66, 164, 64, 3.6, 2.4)} />
          <path d="M20 72L26 63L60 64.4L60 68.2L34 69L28 75Z" />
          <circle cx={198} cy={34} r={2.4} />
          <circle cx={232} cy={30} r={2.2} />
        </g>
        <path d="M198 36L200 74" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
        <path
          d="M199 40C214 48 218 66 208 78C202 84 194 80 196 72"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path
          d={ribbon(
            [
              [232, 32],
              [234, 46],
              [233, 60],
              [229, 74],
              [226, 84],
            ],
            13,
            0.55,
          )}
          fill={PAPER}
        />
        <path d={gouge(233, 40, 231, 68, 0.9) + gouge(228, 52, 226, 76, 0.7)} fill={INK} />
        <path d="M226 78L225 86" stroke={INK} strokeWidth={2.2} />

        {/* the chimney-piece, the half-choked fire, a pipe in each corner of the grate */}
        <rect x={12} y={110} width={160} height={FLOOR - 110} fill={PAPER} />
        <rect x={6} y={102} width={172} height={9} fill={PAPER} />
        <rect x={6} y={111} width={172} height={2} fill={INK} />
        <path
          d={
            gouge(22, 122, 22, FLOOR - 6, 1.4) +
            gouge(160, 122, 160, FLOOR - 6, 1.4) +
            gouge(52, 124, 132, 124, 1.1)
          }
          fill={INK}
        />
        {/* a tankard left on the chimney-piece */}
        <g transform="translate(120 102)">
          <path d={TANKARD} fill={PAPER} />
          <path d={TANKARD_HANDLE} fill="none" stroke={PAPER} strokeWidth={2} />
          <path d="M-6 -15H6" stroke={INK} strokeWidth={1} />
        </g>
        <path d={`M40 ${FLOOR}V184Q40 140 92 140Q144 140 144 184V${FLOOR}Z`} fill={INK} />
        <path
          d={`M56 ${FLOOR - 14}H128M58 ${FLOOR - 8}H126M62 ${FLOOR - 14}V${FLOOR}M122 ${FLOOR - 14}V${FLOOR}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <g fill={RED}>
          <path
            d={`M70 ${FLOOR - 14}C70 ${FLOOR - 19} 76 ${FLOOR - 22} 81 ${FLOOR - 18}C84 ${FLOOR - 22} 92 ${FLOOR - 22} 95 ${FLOOR - 17}C100 ${FLOOR - 20} 108 ${FLOOR - 18} 106 ${FLOOR - 14}Z`}
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1.2 })}
            d={`M84 ${FLOOR - 19}C83 ${FLOOR - 24} 86 ${FLOOR - 27} 87 ${FLOOR - 31}C89 ${FLOOR - 27} 92 ${FLOOR - 24} 90 ${FLOOR - 19}Z`}
          />
        </g>
        <path d={wedge(48, FLOOR - 2, 62, 152, 2.6, 1.8)} fill={PAPER} />
        <path d={`M46 ${FLOOR - 4}q-4 -1 -4 -6q2 -2 6 0Z`} fill={PAPER} />
        <path d={wedge(136, FLOOR - 2, 122, 156, 2.6, 1.8)} fill={PAPER} />
        <path d={`M138 ${FLOOR - 4}q4 -1 4 -6q-2 -2 -6 0Z`} fill={PAPER} />
        <rect x={0} y={FLOOR} width={182} height={9} fill={PAPER} />
        <rect x={0} y={FLOOR + 9} width={182} height={2} fill={INK} />

        {/* Snuff under the chair in the chimney-corner */}
        <Figure
          parts={[
            { d: SPANIEL.tail },
            { d: SPANIEL.body },
            { d: SPANIEL.paws },
            { d: SPANIEL.head },
            { d: SPANIEL.ear },
          ]}
          halo={1.8}
          transform={SPANIEL_AT}
        >
          <path d={SPANIEL_CUTS} fill={PAPER} stroke={PAPER} strokeWidth={0.4} />
          <path
            d="M57.6 -29.6C51.6 -27.6 49.8 -18 51.8 -8.6"
            fill="none"
            stroke={PAPER}
            strokeWidth={1}
          />
        </Figure>
        <path
          d={CORNER_CHAIR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        {/* a hat flung on its seat */}
        <g transform="translate(222 262) rotate(-14) scale(0.95)">
          <path d={ROUND_HAT} fill={INK} stroke={PAPER} strokeWidth={2.2} strokeLinejoin="round" />
          <path d={ROUND_HAT_BAND} fill={PAPER} />
        </g>

        {/* the window: small panes on the failing afternoon, in a deep reveal */}
        <rect x={WIN.x - 10} y={WIN.y - 10} width={WIN.w + 20} height={WIN.h + 10} fill={INK} />
        <g clipPath={`url(#${id.win})`}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
          <path d={m.sky} fill={INK} />
          <path d={m.twigs} fill={INK} />
          <path
            d={`M${WIN.x} 184Q610 176 640 180T${WIN.x + WIN.w} 178V${WIN.y + WIN.h}H${WIN.x}Z`}
            fill={INK}
          />
        </g>
        <g fill={INK}>
          {[0, 1, 2, 3].map((k) => (
            <rect key={k} x={WIN.x + (WIN.w / 3) * k - 2} y={WIN.y} width={4} height={WIN.h} />
          ))}
          {[1, 2].map((k) => (
            <rect
              key={k}
              x={WIN.x}
              y={WIN.y + (WIN.h / 3) * k - 2}
              width={WIN.w}
              height={k === 2 ? 5 : 4}
            />
          ))}
        </g>
        {/* the window-seat, and its panelled front */}
        <rect x={552} y={WIN.y + WIN.h} width={WIN.w + 36} height={9} fill={PAPER} />
        <rect x={552} y={WIN.y + WIN.h + 9} width={WIN.w + 36} height={2} fill={INK} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <rect x={564} y={214} width={72} height={20} />
          <rect x={646} y={214} width={72} height={20} />
        </g>

        {/* the door, shut */}
        <rect x={744} y={64} width={98} height={FLOOR - 64} fill={INK} />
        <path
          d={`M746 66V${FLOOR}M840 66V${FLOOR}M746 66H840`}
          fill="none"
          stroke={PAPER}
          strokeWidth={3}
        />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <rect x={758} y={80} width={30} height={64} />
          <rect x={798} y={80} width={30} height={64} />
          <rect x={758} y={156} width={30} height={76} />
          <rect x={798} y={156} width={30} height={76} />
        </g>
        <circle cx={762} cy={150} r={3} fill={PAPER} />

        {/* the table, and its tankards of flat ale */}
        <path d="M274 222V296M410 222V296M290 222V288M394 222V288" stroke={INK} strokeWidth={6} />
        <path
          d="M264 212H420L428 222H256Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        {[
          [292, 212],
          [394, 212],
        ].map(([x, y]) => (
          <g key={x} transform={`translate(${x} ${y})`}>
            <path d={TANKARD} fill={INK} stroke={PAPER} strokeWidth={2.4} strokeLinejoin="round" />
            <path d={TANKARD_HANDLE} fill="none" stroke={PAPER} strokeWidth={5} />
            <path d={TANKARD_HANDLE} fill="none" stroke={INK} strokeWidth={2.4} />
            <path d={TANKARD} fill={INK} />
            <path d="M-8 -14H8" stroke={PAPER} strokeWidth={1} />
            <path d={gouge(-4, -12, -4, -3, 0.8)} fill={PAPER} />
          </g>
        ))}

        {/* Godfrey, his back to the fire, his hands in his pockets, looking at the floor */}
        <Figure parts={GODFREY} cuts={GOD_CUTS} halo={2}>
          <path d={bootTop(GOD_NEAR_LEG, 13) + bootTop(GOD_FAR_LEG, 13)} fill={PAPER} />
          <path
            d={NECKCLOTH}
            transform={`${GOD_T} translate(4 -2)`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.9}
          />
          <path d={GODFREY_FROWN_CUTS} transform={GOD_T} fill={PAPER} />
          <PaperHair t={GOD_T} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
        </Figure>

        {/* the two chairs before the window */}
        <path
          d={CHAIR_B}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M466 186H478M466 204H478M466 222H478" stroke={PAPER} strokeWidth={2} />
        <path d={CHAIR_A_BACK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={LADDER_A} stroke={PAPER} strokeWidth={2} />

        {/* the whip, its handle rapping the window-seat */}
        <path d={WHIP.lash} fill={PAPER} />
        <path d={WHIP.stock} stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
        <path d={WHIP.stock} stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
        <path d={WHIP.butt} fill={INK} stroke={PAPER} strokeWidth={1.2} />

        {/* Dunstan, thrown across the two chairs, his ale in his hand, jeering */}
        <Figure parts={DUNSTAN} cuts={DUN_CUTS} halo={2}>
          <path d={bootTop(DUN_NEAR_LEG, 11.5) + bootTop(DUN_FAR_LEG, 11.5)} fill={PAPER} />
          <path
            d={NECKCLOTH}
            transform={`${DUN_T} translate(2 -1)`}
            fill={PAPER}
            stroke={INK}
            strokeWidth={0.9}
          />
          <path d={DUNSTAN_CUTS + DUNSTAN_HAIR} transform={DUN_T} fill={PAPER} />
          <DunstanFlush t={DUN_T} />
          <path
            d={GRIP_CUTS}
            transform={handAt(DUN_WHIP_ARM, -1, { ...GRIP, flip: false })}
            fill={PAPER}
          />
        </Figure>
        <path
          d={CHAIR_A}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        {/* his tankard, held by its handle */}
        <g transform="translate(584 202)">
          <path d={TANKARD} fill={INK} stroke={PAPER} strokeWidth={2.2} strokeLinejoin="round" />
          <path d="M8 -15q7 1 6 7q-1 5 -6 5" fill="none" stroke={PAPER} strokeWidth={5} />
          <path d="M8 -15q7 1 6 7q-1 5 -6 5" fill="none" stroke={INK} strokeWidth={2.4} />
          <path d={TANKARD} fill={INK} />
          <path d="M-8 -14H8" stroke={PAPER} strokeWidth={1} />
          <path d={gouge(-4, -12, -4, -3, 0.8)} fill={PAPER} />
        </g>
        <path d={GRIP_CUTS} transform={ale} fill={PAPER} />
      </g>
    </>
  )
}

export const blackmailAtTheRedHouse: LinocutArt = {
  width: W,
  height: H,
  Draw: BlackmailAtTheRedHouse,
}

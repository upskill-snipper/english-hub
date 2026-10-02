import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  EppieHead,
  Figure,
  GODFREY_CURLS,
  GODFREY_CUTS,
  GODFREY_HAIR,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_EPPIE_CHILD,
  HEAD_GODFREY,
  HEAD_SILAS,
  HOLD_CUTS,
  HOLD_HAND,
  NECKCLOTH,
  OPEN_HAND,
  PaperHair,
  ROUND_HAT,
  ROUND_HAT_BAND,
  SHIRT_COLLAR,
  SilasFace,
  boot,
  bootTop,
  handAt,
  headAt,
  line,
  man,
  type Hand,
  type P,
  type Part,
} from './people'

/**
 * Chapter 15: "Godfrey's silence", the twelfth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "He dared not do anything that would imply a stronger interest in a poor
 *   man's adopted child than could be expected from the kindliness of the
 *   young Squire, when a chance meeting suggested a little present to a simple
 *   old fellow whom others noticed with goodwill". So Godfrey, meeting them by
 *   chance in the lane, reins in and hands Silas a coin: the little present,
 *   the most he dares. The child looks up at him. The coin is the spot colour,
 *   the colour these panels give to money.
 * - "there were not many days in the week that he was not seen riding to the
 *   Warrens". So he is on horseback, and the lane runs on ahead of his horse
 *   to a farmhouse among trees on a rise: where he is going. The text gives
 *   the Warrens no description, so it is a plain farmhouse of the time, far
 *   off.
 * - "Godfrey Cass's cheek and eye were brighter than ever now": the kit's
 *   Godfrey, young, broad and fair-haired (GODFREY_HAIR, in paper, showing
 *   under his round hat), in riding dress of about 1800: a tail-coat,
 *   breeches and top-boots, the boot-tops cut in paper. His horse is not
 *   described, so it is a plain dark riding horse.
 * - "Notwithstanding the difficulty of carrying her and his yarn or linen at
 *   the same time, Silas took her with him in most of his journeys to the
 *   farmhouses" (Chapter 14). So Silas, on his rounds, carries the child on
 *   one arm and takes the coin with his free hand. He is the withered, pale
 *   Silas of Part One. She is about three ("by the time Eppie was three years
 *   old"), the curly-headed child of the kit, in a little frock, her hand on
 *   his shoulder.
 * - "And that other child—not on the hearth—he would not forget it; he would
 *   see that it was well provided for. That was a father's duty." The
 *   quotation: what he gives her is a coin from the saddle.
 *
 * SAFEGUARDING. The child is held up in Silas's arm, level with his head, and
 * the horse stands still. The coin is kept well away from every mouth: the
 * first cut passed it at the height of Silas's face, where the red disc sat on
 * his lips, and red there reads as blood.
 *
 * Seen close, from the saddle up, so that horse and rider are large enough to
 * read on a phone; the hooves and the people's feet are below the frame. The
 * horse is cut here, not in the kit, because no other panel rides it. Its
 * frame is the Animal Farm kit's horse (src/data/comics/animal-farm/panels/
 * people.tsx), copied rather than imported, finer in the leg for a riding
 * horse, with the head raised as it is when a horse is reined in.
 *
 * Seeds: 1501 (the sky), 1502 (the lane), 1503 (the hedge), 1504 (the trees).
 */

const W = 860
const H = 340
/** The far edge of the lane and the foot of the hedge across it. */
const VERGE = 244

type Marks = {
  sky: string
  lane: string
  tufts: string
  hedge: string
  hedgeCuts: string
  crowns: string
  crownCuts: string
}

/** Round crowns of trees: [cx, cy, r]. The far ones by the farmhouse, then the ash over the hedge. */
const FAR_TREES: [number, number, number][] = [
  [56, 176, 18],
  [84, 168, 22],
  [190, 178, 16],
  [214, 184, 12],
]
const ASH: [number, number, number][] = [
  [742, 82, 30],
  [786, 70, 34],
  [826, 92, 28],
  [764, 116, 26],
  [810, 126, 24],
]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A bright day: the sky is paper, ruled with a few ink cuts that thin out
  // towards the horizon.
  const sky = gougeField(
    rng(1501),
    { x0: 0, x1: W, y0: 8, y1: 150 },
    (x, y) => clamp(0.5 - (y - 8) / 260),
    { spacing: 9, len: [20, 70], gap: [20, 60], max: 1.6 },
  )
  // The lane, its ruts running away to the left towards the farm.
  const l = rng(1502)
  let lane = ''
  for (const [y0, y1] of [
    [306, 252],
    [322, 256],
    [338, 262],
  ]) {
    let t = 0
    while (t < 1) {
      const t1 = Math.min(1, t + between(l, 0.08, 0.2))
      const xa = W - t * (W - 220)
      const xb = W - t1 * (W - 220)
      const ya = y0 + (y1 - y0) * t
      const yb = y0 + (y1 - y0) * t1
      lane += wedge(xa, ya, xb, yb, 2.6 - t * 2, 2.6 - t1 * 2)
      t = t1 + between(l, 0.02, 0.06)
    }
  }
  let tufts = ''
  for (let k = 0; k < 60; k++) {
    const x = between(l, 0, W)
    const near = x > 600
    const y = near ? between(l, 290, 300) : VERGE + between(l, -2, 4)
    const h = near ? between(l, 5, 9) : between(l, 3, 5)
    tufts += `M${n(x)} ${n(y)}l${n(between(l, -2, 2))} ${n(-h)}`
  }
  // The hedge on the right, near: a dark mass with leaves cut in paper.
  const hedge =
    'M620 296C624 266 630 238 642 222C654 206 672 198 696 194C730 188 776 186 810 188C832 190 848 194 860 198V296Z'
  const hedgeCuts = gougeField(
    rng(1503),
    { x0: 626, x1: W, y0: 192, y1: 292 },
    (x, y) => clamp(0.6 - (y - 190) / 300 + (x - 600) / 1200),
    { spacing: 5.4, len: [4, 10], gap: [4, 12], max: 1.4 },
  )
  // Tree crowns: ink, their leaves cut in short paper strokes.
  const t = rng(1504)
  let crowns = ''
  let crownCuts = ''
  for (const [cx, cy, r] of [...FAR_TREES, ...ASH]) {
    crowns += `M${n(cx - r)} ${n(cy)}a${n(r)} ${n(r * 0.9)} 0 1 1 ${n(r * 2)} 0a${n(r)} ${n(r * 0.9)} 0 1 1 ${n(-r * 2)} 0Z`
    const cuts = Math.round(r / (r > 22 ? 1.6 : 3))
    for (let i = 0; i < cuts; i++) {
      const a = between(t, -r * 0.7, r * 0.5)
      const b = between(t, -r * 0.6, r * 0.5)
      crownCuts += gouge(
        cx + a,
        cy + b,
        cx + a + between(t, 5, 10),
        cy + b - 1.4,
        r > 22 ? 1.1 : 0.8,
      )
    }
  }
  cached = { sky, lane, tufts, hedge, hedgeCuts, crowns, crownCuts }
  return cached
}

// ── THE HORSE, in its own frame: facing right, hooves on y 0 ────────────────
/** Placed facing left, the way he rides, its hooves below the frame. */
const HORSE_AT: P = [460, 372]
const HS = 1.55
const HORSE_T = `translate(${HORSE_AT[0]} ${HORSE_AT[1]}) scale(${-HS} ${HS})`
/** The neck and head raised about the withers, as when a horse is reined in. */
const NECK_T = 'rotate(-9 40 -104)'
const HEAD_T = `${NECK_T} translate(72 -158) rotate(56) scale(0.76)`
const BARREL =
  'M-66 -104C-50 -114 -20 -112 6 -108C24 -105 34 -110 42 -108C56 -104 66 -94 67 -80C68 -70 63 -63 56 -61C30 -59 -10 -59 -36 -62C-52 -64 -63 -68 -71 -77C-77 -87 -76 -98 -66 -104Z'
const NECK = 'M28 -106C36 -128 52 -154 72 -168L80 -160L60 -150C58 -128 62 -100 66 -74Z'
const HEAD =
  'M-4 -7C6 -11 18 -10 28 -8.5C40 -7 50 -7 56 -5C62 -3 64 3 62 7C60 11 55 12.5 51 11.5C48 13.5 45 14 42 13.5C36 13 31 15 27 19C21 26 8 27 2 21C-2 17 -5 10 -5 3C-5 -2 -5 -5 -4 -7Z'
const EARS =
  'M-3 -6C-8 -12 -12 -17 -15 -23C-8 -20 -1 -14 5 -9ZM-6 -3C-12 -8 -17 -12 -21 -17C-14 -15 -7 -11 -2 -6Z'
const TAIL =
  'M-68 -102C-80 -96 -86 -80 -86 -62C-86 -50 -84 -42 -82 -34L-78 -38L-76 -32L-72 -37L-70 -33C-71 -50 -70 -74 -63 -95Z'
/** Fine legs for a riding horse: far hind, far fore, near hind, near fore. */
const LEGS: { d: string; w: number }[] = [
  { d: 'M-40 -66C-44 -54 -50 -44 -52 -36L-47 0', w: 7.2 },
  { d: 'M42 -66L40 -36L42 0', w: 7.2 },
  { d: 'M-52 -68C-56 -56 -62 -46 -64 -36L-58 0', w: 7.8 },
  { d: 'M55 -68L57 -36L57 0', w: 7.8 },
]
/** The saddle on his back, and the girth under his belly. */
const SADDLE = 'M-12 -110C-4 -118 18 -118 28 -111L24 -86C14 -84 0 -84 -8 -86Z'
const GIRTH = 'M9 -86L12 -62'
/** The mane cut along the crest; a few cuts for the shoulder and the quarters. */
const NECK_CUTS =
  gouge(33, -110, 42, -128, 0.5) +
  gouge(40, -118, 51, -140, 0.5) +
  gouge(48, -128, 60, -152, 0.5) +
  gouge(57, -140, 68, -160, 0.45)
const BODY_CUTS =
  gouge(48, -98, 52, -68, 0.6, 2.4) +
  gouge(-50, -102, -62, -76, 0.6, -2.4) +
  gouge(-74, -84, -78, -44, 0.4, -1)
/** In the head's frame: the eye, the nostril, the jaw, and the bridle. */
const HEAD_CUTS =
  gouge(15, 2.6, 22.5, 1.8, 1.1) +
  gouge(55, 1, 58.6, 4.4, 0.7, -0.6) +
  gouge(4, 2, 26, 17.5, 0.6, -4)
const BRIDLE = 'M2 -6L4 20M40 -8L44 13'

/** A point in the head's frame, in the panel. */
function headPoint([x, y]: P): P {
  const s = 0.76
  const a = (56 * Math.PI) / 180
  const qx = 72 + s * (x * Math.cos(a) - y * Math.sin(a))
  const qy = -158 + s * (x * Math.sin(a) + y * Math.cos(a))
  const b = (-9 * Math.PI) / 180
  const hx = 40 + (qx - 40) * Math.cos(b) - (qy + 104) * Math.sin(b)
  const hy = -104 + (qx - 40) * Math.sin(b) + (qy + 104) * Math.cos(b)
  return [HORSE_AT[0] - HS * hx, HORSE_AT[1] + HS * hy]
}
/** The bit, where the reins start. */
const BIT = headPoint([50, 8])

const HORSE: Part[] = [
  ...LEGS.slice(0, 2).map((l) => ({ d: l.d, w: l.w })),
  { d: TAIL },
  { d: BARREL },
  { d: NECK, t: NECK_T },
  { d: EARS, t: HEAD_T },
  { d: HEAD, t: HEAD_T },
  ...LEGS.slice(2).map((l) => ({ d: l.d, w: l.w })),
]

// ── GODFREY, in the saddle, turned to hand down the coin ───────────────────
const G_HEAD = { d: HEAD_GODFREY, at: [462, 94] as P, rot: 14, scale: 1.26 }
const G_NEAR_ARM: P[] = [
  [464, 134],
  [494, 164],
  [500, 210],
]
const G_HAND: Hand = { parts: HOLD_HAND, scale: 1.05, rot: -14 }
const G_FAR_ARM: P[] = [
  [452, 134],
  [432, 160],
  [412, 172],
]
const G_REINS_HAND: Hand = { parts: GRIP_HAND, scale: 1, rot: 0 }
const GODFREY: Part[] = man({
  facing: 1,
  neck: [456, 124],
  hip: [450, 188],
  head: G_HEAD,
  body: { width: 40, tails: 14, front: 2, flare: 4 },
  arm: 9,
  near: { arm: G_NEAR_ARM, leg: [], hand: G_HAND },
  far: { arm: G_FAR_ARM, leg: [], hand: G_REINS_HAND },
})
/** His near leg along the horse's side, the knee forward, a top-boot to the stirrup. */
const G_LEG: P[] = [
  [446, 192],
  [412, 214],
  [422, 262],
]
/** Where the coin is: at the tips of his fingers, over Silas's open hand. */
const COIN: P = [503, 230]

// ── SILAS, standing by the horse's flank, the child on his far arm ─────────
const S_HEAD = { d: HEAD_SILAS, at: [544, 170] as P, rot: 12, scale: 1.26 }
const S_NECK: P = [554, 200]
const S_HIP: P = [560, 282]
/** His near hand up for the coin, palm up. */
const S_REACH: P[] = [
  [550, 212],
  [536, 254],
  [516, 246],
]
const S_REACH_HAND: Hand = { parts: OPEN_HAND, scale: 1.05, rot: -20 }
const SILAS: Part[] = man({
  facing: -1,
  neck: S_NECK,
  hip: S_HIP,
  head: S_HEAD,
  body: { width: 30, tails: 40, long: true, flare: 5 },
  arm: 8.6,
  leg: 10,
  feet: false,
  near: {
    arm: S_REACH,
    hand: S_REACH_HAND,
    leg: [
      [560, 284],
      [556, 330],
      [558, 372],
    ],
  },
  far: {
    arm: [],
    leg: [
      [564, 286],
      [570, 330],
      [572, 372],
    ],
  },
})

// ── EPPIE, three years old, carried on his far arm ─────────────────────────
const E_HEAD = { at: [580, 178] as P, rot: 14, scale: 1 }
/** Her frock, behind his shoulder. */
const FROCK =
  'M574 194C578 192 586 192 590 194L596 204C598 214 600 226 600 238C592 242 580 242 572 238C572 226 572 212 572 202Z'
const FROCK_FOLDS = 'M582 200L580 236M590 200L594 236'
/**
 * His far arm, from behind his shoulder, crooked under her: the forearm runs
 * across the foot of her frock and the hand is cupped round her far side, so
 * she plainly sits on his arm. Drawn after her and before him. (Left out at
 * first, and the review of 2 October 2026 found the child hanging in the air
 * behind his back with nothing holding her up.)
 */
const S_CARRY: P[] = [
  [562, 212],
  [570, 245],
  [591, 242],
]
const S_CARRY_HAND: Hand = { parts: HOLD_HAND, scale: 0.86, rot: -62, flip: false }
/** Her hand on his shoulder. */
const E_ARM: P[] = [
  [576, 200],
  [566, 206],
  [558, 206],
]
const E_HAND: Hand = { parts: OPEN_HAND, scale: 0.5, rot: 20 }

/** Where the reins meet his hand. */
const REINS_AT: P = [G_FAR_ARM[2][0] - 4, G_FAR_ARM[2][1] + 2]

function GodfreysSilence({ uid }: ArtProps) {
  const m = marks()
  const gt = headAt(1, G_HEAD.at, G_HEAD.rot, G_HEAD.scale)
  const st = headAt(-1, S_HEAD.at, S_HEAD.rot, S_HEAD.scale)
  const et = headAt(-1, E_HEAD.at, E_HEAD.rot, E_HEAD.scale)
  const reinsHand = handAt(G_FAR_ARM, 1, G_REINS_HAND)
  const [rx, ry] = REINS_AT
  return (
    <g className="lc-push" style={timing({ origin: [500, 190], push: 1.03 })}>
      {/* the sky, a bright day */}
      <rect x={0} y={0} width={W} height={VERGE} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* the far fields, and the farmhouse among its trees on the rise ahead */}
      <path
        d={`M0 196Q60 182 120 186T260 194T420 200T600 196T${W} 198`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path
        d="M0 214Q140 206 300 214T600 216"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={m.crowns} fill={INK} />
      <path d={m.crownCuts} fill={PAPER} />
      <path d="M84 186V198M190 192V200" stroke={INK} strokeWidth={3} />
      <path d="M108 200V170L138 152L168 170V200Z" fill={INK} />
      <path d="M150 160V146H158V166Z" fill={INK} />
      <path
        d={ribbon(
          [
            [154, 144],
            [152.6, 138],
            [153, 132],
            [155.6, 126],
            [157, 120],
            [156, 114],
            [153.4, 108],
            [151.6, 102],
          ],
          3,
          0.6,
        )}
        fill={INK}
      />
      <g fill={PAPER}>
        <rect x={116} y={176} width={7} height={8} />
        <rect x={148} y={176} width={7} height={8} />
        <rect x={132} y={186} width={8} height={14} />
      </g>
      {/* the hedge along the far side of the lane */}
      <path
        d={`M0 ${VERGE}V226Q40 216 90 222T190 220T300 226T420 222T600 228V${VERGE}Z`}
        fill={INK}
      />
      <path
        d={
          gouge(14, 230, 60, 229, 0.8) +
          gouge(120, 228, 180, 227, 0.8) +
          gouge(250, 232, 320, 231, 0.8) +
          gouge(400, 230, 470, 229, 0.8)
        }
        fill={PAPER}
      />

      {/* the lane, running away to the left towards the farm */}
      <rect x={0} y={VERGE} width={W} height={H - VERGE} fill={PAPER} />
      <path d={m.lane} fill={INK} />
      <path d={m.tufts} stroke={INK} strokeWidth={1.1} strokeLinecap="round" />

      {/* the ash over the near hedge on the right, and the hedge */}
      <path
        d="M782 190L786 112M786 130L764 104M786 124L812 98"
        stroke={INK}
        strokeWidth={7}
        strokeLinecap="round"
      />
      <path d={m.hedge} fill={INK} />
      <path d={m.hedgeCuts} fill={PAPER} />

      {/* the horse, standing, reined in */}
      <g transform={HORSE_T}>
        <Figure parts={HORSE} halo={1.2}>
          <path d={NECK_CUTS} transform={NECK_T} fill={PAPER} />
          <path d={BODY_CUTS} fill={PAPER} />
          <g transform={HEAD_T}>
            <path d={HEAD_CUTS} fill={PAPER} />
            <path d={BRIDLE} fill="none" stroke={PAPER} strokeWidth={2} />
          </g>
          <path d={SADDLE} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
          <path d={GIRTH} stroke={PAPER} strokeWidth={2} />
        </Figure>
      </g>
      {/* the reins, from the bit to his hand */}
      <path
        d={`M${n(BIT[0])} ${n(BIT[1])}Q${n((BIT[0] + rx) / 2)} ${n(Math.max(BIT[1], ry) + 14)} ${n(rx)} ${n(ry)}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
      />

      {/* Godfrey, in the saddle, turned to the weaver */}
      <Figure parts={GODFREY}>
        <path d={NECKCLOTH} transform={gt} fill={PAPER} />
        <PaperHair t={gt} d={GODFREY_HAIR} lines={GODFREY_CURLS} />
        <path d={GODFREY_CUTS} transform={gt} fill={PAPER} />
        <path d={ROUND_HAT} transform={gt} fill={INK} stroke={PAPER} strokeWidth={1} />
        <path d={ROUND_HAT_BAND} transform={gt} fill={PAPER} />
        <path d={HOLD_CUTS} transform={handAt(G_NEAR_ARM, 1, G_HAND)} fill={PAPER} />
        <path d={GRIP_CUTS} transform={reinsHand} fill={PAPER} />
      </Figure>
      {/* his near leg: a top-boot, its top cut in paper, the boot in the stirrup */}
      <Figure parts={[{ d: line(G_LEG), w: 11, sep: 1.4 }, boot(G_LEG[2], -1)]} halo={1.6}>
        <path d={bootTop(G_LEG, 11)} fill={PAPER} />
        <path d="M410 266H430" stroke={PAPER} strokeWidth={1.6} />
      </Figure>

      {/* the child on his far arm, behind his shoulder, looking up at the rider */}
      <Figure parts={[{ d: FROCK }, { d: HEAD_EPPIE_CHILD, t: et }]} halo={1.5}>
        <path d={FROCK} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        <path d={FROCK_FOLDS} fill="none" stroke={INK} strokeWidth={0.8} />
        <EppieHead t={et} />
      </Figure>
      {/* his far arm under her, from behind his shoulder */}
      <Figure
        parts={[
          { d: line(S_CARRY), w: 8.6 },
          ...S_CARRY_HAND.parts.map((q) => ({ ...q, t: handAt(S_CARRY, -1, S_CARRY_HAND) })),
        ]}
        halo={1.5}
      >
        <path d={HOLD_CUTS} transform={handAt(S_CARRY, -1, S_CARRY_HAND)} fill={PAPER} />
      </Figure>

      {/* Silas, his hand up for the coin */}
      <Figure parts={SILAS}>
        <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
        <SilasFace t={st} look={1} />
      </Figure>
      <Figure
        parts={[
          { d: line(E_ARM), w: 4 },
          ...E_HAND.parts.map((q) => ({ ...q, t: handAt(E_ARM, -1, E_HAND) })),
        ]}
        halo={1.3}
      />

      {/* the coin */}
      <circle cx={COIN[0]} cy={COIN[1]} r={5} fill={RED} stroke={INK} strokeWidth={1.2} />
      <path
        d={`M${COIN[0] - 2.2} ${COIN[1] - 1.6}Q${COIN[0]} ${COIN[1] - 3} ${COIN[0] + 2.2} ${COIN[1] - 1.6}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.9}
      />
    </g>
  )
}

export const godfreysSilence: LinocutArt = { width: W, height: H, Draw: GodfreysSilence }

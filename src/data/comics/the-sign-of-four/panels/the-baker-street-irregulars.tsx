import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  HEAD_HOLMES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  HolmesHands,
  LONG_HAND,
  OPEN_HAND,
  Toby,
  WATSON_CUTS,
  WATSON_HAIR,
  WATSON_PUPIL,
  coat,
  floorBoards,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 8, "The Baker Street Irregulars": "The Baker Street Irregulars",
 * the ninth moment in the guide's timeline. The picture is the sitting room
 * at 221B at breakfast, the moment the boys are paid. Every detail is from
 * the held edition:
 *
 * - "It was between eight and nine o'clock now"; "When I came down to our
 *   room I found the breakfast laid and Holmes pouring out the coffee";
 *   "Better have your ham and eggs first"; "I took the paper from him". So
 *   the table is laid with a cloth, the coffee-pot, cups and plates, and
 *   Watson has the newspaper. The window gives on to the morning: the text
 *   names no fog that day, so there is none.
 * - "there came a swift pattering of naked feet upon the stairs, a clatter of
 *   high voices, and in rushed a dozen dirty and ragged little street-Arabs.
 *   There was some show of discipline among them, despite their tumultuous
 *   entry, for they instantly drew up in line and stood facing us with
 *   expectant faces." So the boys stand in a line from the open door, facing
 *   the table, barefoot (their bare shins and feet cut in paper), in ragged
 *   jackets with torn hems, some in caps and some bareheaded, some with their
 *   hands in their pockets or behind their backs. All twelve are drawn:
 *   eleven in the line, the first still in the doorway, and Wiggins.
 * - "One of their number, taller and older than the others, stood forward
 *   with an air of lounging superiority which was very funny in such a
 *   disreputable little scarecrow. 'Got your message, sir,' said he". So
 *   Wiggins stands out in front, leaning back, one hand in his pocket, in a
 *   coat too big for him with a ragged hem, and holds out his other hand.
 * - "'Here you are,' said Holmes, producing some silver." Holmes "rose from
 *   the table" only after they had gone, so he is still seated, turned on
 *   his chair to the boys, holding out the coins in his white hand.
 * - "We will keep Toby, for he may be of use to us yet"; "Toby could eat
 *   these scraps". So Toby lies on the boards by the table, head up, watching
 *   the boys: drawn from Toby in ./people.tsx.
 *
 * The quotation is Holmes's, said as they go: "They can go everywhere, see
 * everything, overhear every one." The boys are drawn with the same care as
 * every other figure: poor, not comic. The narrator's word for them is never
 * used in the alt text.
 *
 * Seeds: 901 (the wall), 902 (the floor), 903 (the houses opposite).
 */

const W = 860
const H = 340
/** The foot of the far wall. */
const FLOOR = 250
const DOOR = { x: 10, y: 44, w: 100 }
const WIN = { x: 588, y: 34, w: 92, h: 142 }

type Marks = { wall: string; floor: string; houses: string; hatch: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // morning light from the window, falling across the table
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - (WIN.x + WIN.w / 2)) * 0.62, (y - 110) * 1.1) / 300) * 1.15,
      0.08,
    )
  // Behind the line of boys the wall is hidden but for the gaps between
  // them, and far from the window: it is left in shadow, uncut.
  const r0 = rng(901)
  const opts = { spacing: 7.8, len: [18, 68] as [number, number] }
  const wall =
    gougeField(r0, { x0: DOOR.x + DOOR.w, x1: W, y0: 6, y1: 150 }, light, opts) +
    gougeField(r0, { x0: 470, x1: W, y0: 150, y1: FLOOR - 2 }, light, opts)
  const floor = floorBoards(rng(902), W, H, FLOOR, [520, 40], 36)
  // the houses opposite, in the morning: a roofline of plain fronts, hatched
  const r = rng(903)
  let houses = `M${WIN.x} ${WIN.y + WIN.h}`
  let x = WIN.x
  while (x < WIN.x + WIN.w) {
    const w = between(r, 28, 44)
    const y = WIN.y + WIN.h * between(r, 0.42, 0.52)
    houses += `L${n(x)} ${n(y)}L${n(x + w * 0.2)} ${n(y)}V${n(y - between(r, 8, 13))}H${n(x + w * 0.32)}V${n(y)}L${n(x + w)} ${n(y)}`
    x += w
  }
  houses += `L${WIN.x + WIN.w} ${WIN.y + WIN.h}Z`
  let hatch = ''
  for (let hx = WIN.x - WIN.h; hx < WIN.x + WIN.w; hx += 5)
    hatch += `M${n(hx)} ${WIN.y + WIN.h}L${n(hx + WIN.h * 0.6)} ${WIN.y}`
  cached = { wall, floor, houses, hatch }
  return cached
}

// ── THE BOYS ────────────────────────────────────────────────────────────────
// No boy is described but Wiggins, so they are plain: children of ten or
// twelve, in the ragged dress of the London streets of 1888, barefoot. A
// child's head in profile facing right, in the frame of the kit's heads
// (crown near y -19, chin near 19, the base of the neck at 24): rounder than
// a man's, a small nose, a soft chin.
const HEAD_BOY =
  'M-8 24C-10 19 -14.6 15 -15.2 6C-15.8 -8 -7.6 -19 3 -19C11 -19 15.4 -14 15.6 -7L15.8 -3.4L19 2.8L15.6 4.2L15.8 7L14.6 8.2L15.6 10.6C15.4 15.6 12.4 18.6 7.6 19L6 24Z'
/** His features in paper: a brow, a wide eye ("expectant faces"), a mouth, the ear. */
const BOY_CUTS =
  gouge(5.4, -7.8, 13, -7.4, 0.75) +
  'M6.4 -3.4Q9.6 -6.2 12.8 -3.8Q9.6 -1.4 6.4 -3.4Z' +
  gouge(9.6, 11.2, 14, 11, 0.45) +
  gouge(-5.4, -1, -4.4, 6, 0.65, -1.2)
const BOY_PUPIL = 'M9.8 -3.7a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0Z'
/**
 * A flat cap with a peak, a round cloth cap, and a bare head's tousled hair.
 *
 * REDRAWN on 2 October 2026 (review). The bare head's hair was a ring of
 * even, upright points, and at panel size, on three heads in a line of
 * boys, it read as a crown. Now it is an uneven mop: rounded tufts of
 * different sizes over the crown, a few locks falling over the brow and
 * the nape, swept back by its cuts.
 */
const CAPS = {
  flat: 'M-16 -8C-17.6 -17 -11 -23.6 -1 -24C9 -24.4 15 -20 16 -12.6L25 -10.6C26.4 -9.6 25 -8 22 -8L-14 -6.6Z',
  round: 'M-15.4 -9C-16 -19 -8 -25 2 -25C11 -25 16.4 -19 15.6 -9.6C9 -7.2 -8 -6.8 -15.4 -9Z',
  bare: 'M14.6 -10.4C17.2 -11.6 17 -15 14.4 -15.8C13.6 -19.8 9 -21.8 5.4 -20.4C3.4 -23 -1.6 -23.2 -3.6 -21C-7.6 -22.2 -11.2 -19.6 -11.4 -17C-15.4 -16.8 -17.8 -12.4 -16.4 -8.8C-18.2 -6 -17.2 -2 -15.2 -0.2L-14.4 -4.4C-12.8 -9.6 -8.2 -13.6 -2 -14.6C4 -15.4 9.4 -13.8 14.6 -10.4Z',
}
const CAP_CUTS = {
  flat: gouge(-12, -12, 14, -12.6, 0.6, -0.6),
  round: gouge(-12, -11.6, 13, -12, 0.6, -0.8) + gouge(-6, -18, 8, -18.6, 0.5, -0.6),
  bare:
    gouge(11, -16.4, 0, -18.6, 0.55, -0.8) +
    gouge(-3, -13, -14, -6, 0.6, 1.2) +
    gouge(-6, -18, -15, -11, 0.5, 0.8),
}

type Boy = {
  x: number
  feet: number
  /** His height, against the tallest of the line. */
  h: number
  cap: keyof typeof CAPS
  /** Where he looks: a turn of the head, up (-) or down (+). */
  look: number
  /** Hands at his sides, in his pockets, or behind his back. */
  arms: 'down' | 'pockets' | 'behind'
  /** Trousers torn off below the knee, or ragged at the ankle. */
  short: boolean
}

const BOYS: Boy[] = [
  { x: 20, feet: 314, h: 0.86, cap: 'round', look: 2, arms: 'down', short: true },
  { x: 50, feet: 318, h: 0.9, cap: 'flat', look: -4, arms: 'down', short: false },
  { x: 82, feet: 322, h: 0.98, cap: 'bare', look: 6, arms: 'pockets', short: true },
  { x: 118, feet: 316, h: 0.84, cap: 'round', look: -10, arms: 'behind', short: false },
  { x: 150, feet: 321, h: 1, cap: 'flat', look: 0, arms: 'down', short: true },
  { x: 186, feet: 317, h: 0.88, cap: 'bare', look: -8, arms: 'pockets', short: false },
  { x: 220, feet: 323, h: 0.96, cap: 'round', look: 4, arms: 'down', short: false },
  { x: 252, feet: 316, h: 0.82, cap: 'flat', look: -12, arms: 'behind', short: true },
  { x: 288, feet: 320, h: 1.02, cap: 'bare', look: -2, arms: 'down', short: false },
  { x: 322, feet: 318, h: 0.9, cap: 'flat', look: 8, arms: 'pockets', short: true },
  { x: 356, feet: 322, h: 0.94, cap: 'round', look: -6, arms: 'down', short: false },
]

const line = (pts: P[]) => 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')
/** A child's small hand, at the wrist `at`: one rounded shape, no fingers to merge. */
const mitt = ([x, y]: P, h: number) =>
  `M${n(x - 3 * h)} ${n(y - 1)}a${n(3.4 * h)} ${n(4.4 * h)} 0 1 0 ${n(6.8 * h)} 0a${n(3.4 * h)} ${n(4.4 * h)} 0 1 0 ${n(-6.8 * h)} 0Z`
const r1 = (v: number) => Math.round(v * 10) / 10

/**
 * A head-frame path (absolute M, L, C, Q and Z commands only, as HEAD_BOY
 * and CAPS are) moved into the panel's own coordinates by the transform
 * headAt() would give it, facing right: so it can join the other ink shapes
 * of its figure in one path.
 */
function placed(d: string, at: P, rot: number, s: number): string {
  if (/[^MLCQZ\d\s.-]/.test(d)) throw new Error(`placed(): unsupported path ${d.slice(0, 40)}`)
  const c = Math.cos((rot * Math.PI) / 180)
  const sn = Math.sin((rot * Math.PI) / 180)
  return d.replace(/(-?\d*\.?\d+)\s+(-?\d*\.?\d+)/g, (_, xs: string, ys: string) => {
    const x = parseFloat(xs) * s
    const y = parseFloat(ys) * s
    return `${n(at[0] + x * c - y * sn)} ${n(at[1] + x * sn + y * c)}`
  })
}

/**
 * One boy, standing in the line, facing right: his shapes, grouped by how
 * they are printed (see BoyFigure), the transform of his head for the cuts of
 * his face, his bare shins and feet (paper, drawn on top), and the cuts of his
 * ragged jacket.
 */
function boy(b: Boy) {
  const { x, feet, h } = b
  const ankle = feet - 4
  const knee = feet - 34 * h
  const hip = feet - 64 * h
  const neck = feet - 112 * h
  const hs = 1.12 * h
  const headPos: P = [x + 2, neck - 24 * hs]
  const ht = headAt(1, headPos, b.look, hs)
  const hem = b.short ? knee + 8 * h : ankle - 9 * h
  const nearLeg: P[] = [
    [x + 2, hip],
    [x + 5, knee],
    [x + 4, hem],
  ]
  const farLeg: P[] = [
    [x - 3, hip],
    [x - 5, knee],
    [x - 6, hem],
  ]
  const shoulder = neck + 7
  const arm = (dx: number): { arm: P[]; hand: boolean } =>
    b.arms === 'pockets'
      ? {
          arm: [
            [x + dx, shoulder],
            [x + dx - 4, neck + 28 * h],
            [x + dx + 3, neck + 44 * h],
          ],
          hand: false,
        }
      : b.arms === 'behind'
        ? {
            arm: [
              [x + dx, shoulder],
              [x + dx - 4, neck + 28 * h],
              [x + dx - 10, neck + 44 * h],
            ],
            hand: false,
          }
        : {
            arm: [
              [x + dx, shoulder],
              [x + dx + 1, neck + 30 * h],
              [x + dx + 3, neck + 50 * h],
            ],
            hand: true,
          }
  const near = arm(3)
  const far = arm(-3)
  const last = (a: P[]) => a[a.length - 1]
  const shapes = {
    armW: r1(6.4 * h),
    legW: r1(7.6 * h),
    legs: line(farLeg) + line(nearLeg),
    farArm: line(far.arm),
    nearArm: line(near.arm),
    /**
     * The jacket, the head, the cap and the far hand. Each is its own ink
     * path: they overlap, and in one path their opposite windings cancel
     * where they do, which opened a paper line at every neck.
     */
    body: [
      coat([x, neck], [x - 1, hip], 1, { width: 24 * h, hem: 12 * h, flare: 3 }),
      placed(HEAD_BOY, headPos, b.look, hs),
      placed(CAPS[b.cap], headPos, b.look, hs),
      ...(far.hand ? [mitt(last(far.arm), h)] : []),
    ],
    nearHand: near.hand ? mitt(last(near.arm), h) : '',
  }
  // bare shins below the torn trouser ends, and bare feet
  const shin = (lx: number) => `M${n(lx)} ${n(hem)}L${n(lx)} ${n(ankle)}`
  const foot = (lx: number) =>
    `M${n(lx - 2.6 * h)} ${n(ankle - 2.4 * h)}L${n(lx + 4 * h)} ${n(ankle - 2.6 * h)}C${n(lx + 9 * h)} ${n(ankle - 1.6 * h)} ${n(lx + 11 * h)} ${n(ankle + 0.6 * h)} ${n(lx + 10.6 * h)} ${n(ankle + 2.6 * h)}L${n(lx - 3 * h)} ${n(ankle + 2.6 * h)}Z`
  const legsBare = { shins: shin(x - 6) + shin(x + 4), feet: foot(x - 6) + foot(x + 4) }
  // the jacket's torn hem, cut as notches, and the line of its front
  const hy = hip + 12 * h
  const cuts =
    `M${n(x - 12 * h)} ${n(hy - 1)}l${n(3 * h)} ${n(-5 * h)}l${n(3 * h)} ${n(5 * h)}Z` +
    `M${n(x + 2 * h)} ${n(hy)}l${n(3 * h)} ${n(-6 * h)}l${n(3 * h)} ${n(6 * h)}Z` +
    gouge(x + 1, neck + 10, x - 2, hip, 0.6, 0.6)
  return { shapes, ht, legsBare, cuts }
}

const BOY_FIGS = BOYS.map(boy)

/**
 * A boy, cut as the kit's Figure cuts a man: a paper halo round every part,
 * then the parts in ink, with a paper edge round the near arm to lift it off
 * the jacket, then the cuts. The same print, with the shapes merged into as
 * few paths as will print true: twelve boys drawn part by part through Figure came to well over
 * the plate's ceiling. (Sharing one head shape by reference was tried and
 * dropped: the comics test allows no href in an art file but a literal
 * fragment.)
 */
function BoyFigure({
  shapes,
  children,
}: {
  shapes: ReturnType<typeof boy>['shapes']
  children?: ReactNode
}) {
  const s = shapes
  const halo = 3.2
  const round = { strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  return (
    <g>
      <g fill={PAPER} stroke={PAPER} {...round}>
        <path d={s.body.join('') + s.nearHand} strokeWidth={halo} />
        <path d={s.farArm + s.nearArm} fill="none" strokeWidth={r1(s.armW + halo)} />
        <path d={s.legs} fill="none" strokeWidth={r1(s.legW + halo)} />
      </g>
      <g fill="none" stroke={INK} {...round}>
        <path d={s.legs} strokeWidth={s.legW} />
        <path d={s.farArm} strokeWidth={s.armW} />
      </g>
      {s.body.map((d, i) => (
        <path key={i} d={d} fill={INK} />
      ))}
      <g fill="none" {...round}>
        <path d={s.nearArm} stroke={PAPER} strokeWidth={r1(s.armW + 2.4)} />
        <path d={s.nearArm} stroke={INK} strokeWidth={s.armW} />
      </g>
      {s.nearHand && <path d={s.nearHand} fill={INK} />}
      {children}
    </g>
  )
}

// ── WIGGINS ─────────────────────────────────────────────────────────────────
/**
 * "taller and older than the others ... an air of lounging superiority ...
 * such a disreputable little scarecrow". So he is a head taller than the
 * line, leans back with his hips forward and his chin up, keeps one hand in
 * his pocket, and wears a coat far too big for him, its hem torn. His other
 * hand is held out, palm up, for the silver.
 */
const WIG = { x: 420, feet: 328, h: 1.2 }
const WIG_NECK: P = [412, 168]
const WIG_HIP: P = [424, 244]
const WIG_HS = 1.26
const WIG_HEAD: P = [414, 136]
const WIG_HT = headAt(1, WIG_HEAD, -10, WIG_HS)
const WIG_NEAR_ARM: P[] = [
  [416, 176],
  [438, 200],
  [458, 196],
]
const WIG_FAR_ARM: P[] = [
  [408, 176],
  [400, 208],
  [414, 226],
]
const WIG_NEAR_LEG: P[] = [
  [426, 244],
  [440, 284],
  [444, 316],
]
const WIG_FAR_LEG: P[] = [
  [420, 244],
  [414, 284],
  [410, 314],
]
const WIG_COAT = coat(WIG_NECK, WIG_HIP, 1, { width: 30, hem: 44, flare: 11 })
const WIGGINS: Part[] = [
  { d: line(WIG_FAR_ARM), w: 8 },
  { d: line(WIG_FAR_LEG), w: 8.6 },
  { d: line([WIG_NECK, WIG_HIP]), w: 22 },
  { d: WIG_COAT },
  { d: line(WIG_NEAR_LEG), w: 8.6 },
  { d: HEAD_BOY, t: WIG_HT },
  { d: CAPS.flat, t: WIG_HT },
  { d: line(WIG_NEAR_ARM), w: 8, sep: 1.3 },
  ...OPEN_HAND.map((q) => ({
    ...q,
    t: handAt(WIG_NEAR_ARM, 1, { parts: OPEN_HAND, scale: 0.86, rot: -14 }),
  })),
]
/** His coat's torn hem, the pocket his hand is in, the line of its front. */
const WIG_CUTS =
  'M402 284l4 -8l4 8ZM416 288l4 -9l4 9ZM432 288l4 -8l4 8ZM446 286l3 -7l3 7Z' +
  gouge(404, 222, 422, 224, 0.8) +
  gouge(416, 182, 420, 240, 0.7, 0.6)
const WIG_SHINS = `M410 314V${WIG.feet - 4}M444 316V${WIG.feet - 4}`
const WIG_FEET =
  `M407 ${WIG.feet - 7}L415 ${WIG.feet - 7}C421 ${WIG.feet - 6} 423 ${WIG.feet - 3} 422 ${WIG.feet}L406 ${WIG.feet}Z` +
  `M441 ${WIG.feet - 7}L449 ${WIG.feet - 7}C455 ${WIG.feet - 6} 457 ${WIG.feet - 3} 456 ${WIG.feet}L440 ${WIG.feet}Z`

// ── HOLMES, turned on his chair, the silver in his hand ─────────────────────
const HOL_HEAD = { d: HEAD_HOLMES, at: [536, 118] as P, rot: -4, scale: 1.4 }
const HOL_NEAR: P[] = [
  [544, 164],
  [520, 192],
  [494, 194],
]
const HOL_FAR: P[] = [
  [552, 164],
  [556, 198],
  [544, 222],
]
const HOL_HANDS = [
  { arm: HOL_NEAR, hand: { parts: LONG_HAND, scale: 1.05, rot: -10 } },
  { arm: HOL_FAR, hand: { parts: LONG_HAND, scale: 1, rot: 10 } },
]
const HOLMES: Part[] = gent({
  facing: -1,
  neck: [548, 154],
  hip: [558, 232],
  head: HOL_HEAD,
  body: { width: 28, hem: 14, flare: 4 },
  arm: 8.6,
  leg: 9.6,
  near: {
    arm: HOL_NEAR,
    leg: [
      [552, 232],
      [508, 236],
      [506, 316],
    ],
  },
  far: {
    arm: HOL_FAR,
    leg: [
      [562, 234],
      [520, 244],
      [520, 316],
    ],
  },
})
/** "producing some silver": three coins in his open palm. */
const COINS: P[] = [
  [482, 190],
  [488, 192.6],
  [485.6, 186.6],
]
/** His plain chair, its back to the table: the back post, the seat, the legs. */
const HOL_CHAIR = {
  back: 'M566 238V150H574V238Z',
  seat: 'M512 232H578V240H512Z',
  legs: 'M518 240L516 316M572 240L574 316',
}

// ── WATSON, behind the table, the newspaper lowered ─────────────────────────
const WAT_HEAD = { d: HEAD_WATSON, at: [730, 116] as P, rot: 0, scale: 1.4 }
const WAT_NEAR: P[] = [
  [736, 160],
  [714, 186],
  [690, 192],
]
const WAT_FAR: P[] = [
  [744, 160],
  [730, 190],
  [706, 194],
]
const WATSON: Part[] = gent({
  facing: -1,
  neck: [740, 152],
  hip: [748, 232],
  head: WAT_HEAD,
  body: { width: 36, hem: 10, flare: 4 },
  arm: 9.4,
  leg: 10,
  near: {
    arm: WAT_NEAR,
    leg: [
      [744, 232],
      [710, 236],
      [710, 300],
    ],
    hand: { parts: OPEN_HAND, scale: 0.92, rot: -20 },
  },
  far: {
    arm: WAT_FAR,
    leg: [
      [752, 232],
      [720, 240],
      [720, 300],
    ],
    hand: { parts: OPEN_HAND, scale: 0.9, rot: -20 },
  },
})

// ── THE BREAKFAST TABLE ─────────────────────────────────────────────────────
const TABLE = { x0: 598, x1: 812, top: 206, cloth: 262 }

function BreakfastTable() {
  const { x0, x1, top, cloth } = TABLE
  return (
    <g>
      {/* the legs, below the cloth */}
      <path d={`M${x0 + 14} ${cloth}V318M${x1 - 14} ${cloth}V318`} stroke={INK} strokeWidth={7} />
      {/* the white cloth, hanging in folds */}
      <path
        d={`M${x0 - 6} ${top}H${x1 + 6}L${x1 + 10} ${cloth}Q${x1 - 20} ${cloth + 6} ${x1 - 50} ${cloth}Q${x1 - 80} ${cloth + 6} ${x1 - 110} ${cloth}Q${x1 - 140} ${cloth + 6} ${x1 - 170} ${cloth}Q${x0 + 20} ${cloth + 6} ${x0 - 10} ${cloth}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path
        d={`M${x1 - 50} ${top + 12}L${x1 - 50} ${cloth - 2}M${x1 - 110} ${top + 12}L${x1 - 110} ${cloth - 2}M${x1 - 170} ${top + 12}L${x1 - 170} ${cloth - 2}`}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d={`M${x0 - 6} ${top + 8}H${x1 + 6}`} stroke={INK} strokeWidth={1.4} />
      {/* the coffee-pot */}
      <path
        d="M772 206V178Q772 168 782 166H786Q796 168 796 178V206Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M772 182Q760 176 758 166" fill="none" stroke={INK} strokeWidth={3.4} />
      <path d="M796 176Q806 180 798 196" fill="none" stroke={INK} strokeWidth={3} />
      <path d="M778 166Q784 156 790 166Z" fill={INK} />
      {/* cups, and a plate of ham and eggs */}
      <g fill={PAPER} stroke={INK} strokeWidth={1.4}>
        <ellipse cx={760} cy={206} rx={14} ry={3.4} />
        <path d="M752 205V198H766V205Z" />
        <ellipse cx={650} cy={207} rx={22} ry={4.2} />
      </g>
      <circle cx={644} cy={205.6} r={3} fill={INK} />
      <circle cx={654} cy={206} r={3} fill={INK} />
    </g>
  )
}

/** The Standard, held open in Watson's hands and lowered to the table. */
const PAPER_SHEET = 'M664 168L712 162L718 204L670 210Z'
const PAPER_TEXT =
  'M670 174L708 169.4M671 179L709 174.4M672 184L702 180.2M672.6 189L710 184.4M673.4 194L704 190.2M674 199L712 194.4'

function TheBakerStreetIrregulars({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  const houseClip = `${uid}-houses`
  const hht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const wht = headAt(-1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
        <clipPath id={houseClip}>
          <path d={m.houses} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 190], push: 1.03 })}>
        {/* the sitting room's wall, lit from the window */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the door they rushed in by, standing open on the dark landing */}
        <rect
          x={DOOR.x - 10}
          y={DOOR.y - 10}
          width={DOOR.w + 20}
          height={FLOOR - DOOR.y + 10}
          fill={PAPER}
        />
        <rect x={DOOR.x} y={DOOR.y} width={DOOR.w} height={FLOOR - DOOR.y} fill={INK} />
        <path
          d={`M${DOOR.x + 18} ${FLOOR}L${DOOR.x + 18} ${DOOR.y + 70}L${DOOR.x + DOOR.w} ${DOOR.y + 40}M${DOOR.x + 18} ${DOOR.y + 120}L${DOOR.x + DOOR.w} ${DOOR.y + 90}`}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          fill="none"
        />

        {/* the window on the morning, the houses opposite */}
        <rect x={WIN.x - 9} y={WIN.y - 9} width={WIN.w + 18} height={WIN.h + 18} fill={INK} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
        <g clipPath={`url(#${winClip})`}>
          <g clipPath={`url(#${houseClip})`}>
            <path d={m.hatch} stroke={INK} strokeWidth={LINE.hairline} />
          </g>
          <path d={m.houses} fill="none" stroke={INK} strokeWidth={1.3} />
        </g>
        <g fill={INK}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={4} />
          <rect x={WIN.x} y={WIN.y + WIN.h - 4} width={WIN.w} height={4} />
          <rect x={WIN.x} y={WIN.y} width={4} height={WIN.h} />
          <rect x={WIN.x + WIN.w - 4} y={WIN.y} width={4} height={WIN.h} />
          <rect x={WIN.x} y={WIN.y + WIN.h / 2 - 3} width={WIN.w} height={6} />
          <rect x={WIN.x + WIN.w / 2 - 2} y={WIN.y} width={4} height={WIN.h} />
          <rect x={WIN.x} y={WIN.y + WIN.h / 4 - 1.3} width={WIN.w} height={2.6} />
          <rect x={WIN.x} y={WIN.y + (WIN.h * 3) / 4 - 1.3} width={WIN.w} height={2.6} />
        </g>
        <rect x={WIN.x - 16} y={WIN.y + WIN.h + 9} width={WIN.w + 32} height={6} fill={PAPER} />
        <rect x={WIN.x - 16} y={WIN.y + WIN.h + 15} width={WIN.w + 32} height={2} fill={INK} />

        {/* the boys, in a line from the door, facing the table */}
        {BOY_FIGS.map((b, i) => (
          <g key={i}>
            <BoyFigure shapes={b.shapes}>
              <g transform={b.ht}>
                <path d={BOY_CUTS + CAP_CUTS[BOYS[i].cap]} fill={PAPER} />
                <path d={BOY_PUPIL} fill={INK} />
              </g>
              <path d={b.cuts} fill={PAPER} />
            </BoyFigure>
            <path d={b.legsBare.shins} stroke={INK} strokeWidth={5.4 * BOYS[i].h} />
            <path d={b.legsBare.shins} stroke={PAPER} strokeWidth={3 * BOYS[i].h} />
            <path d={b.legsBare.feet} fill={PAPER} stroke={INK} strokeWidth={1.2} />
          </g>
        ))}

        {/* Wiggins, out in front */}
        <Figure parts={WIGGINS}>
          <g transform={WIG_HT}>
            <path d={BOY_CUTS + CAP_CUTS.flat} fill={PAPER} />
            <path d={BOY_PUPIL} fill={INK} />
          </g>
          <path d={WIG_CUTS} fill={PAPER} />
        </Figure>
        <path d={WIG_SHINS} stroke={INK} strokeWidth={6.6} />
        <path d={WIG_SHINS} stroke={PAPER} strokeWidth={3.8} />
        <path d={WIG_FEET} fill={PAPER} stroke={INK} strokeWidth={1.3} />

        {/* the breakfast table, Watson behind it with the paper */}
        <Figure parts={WATSON}>
          <g transform={wht}>
            <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} fill={PAPER} />
            <path d={WATSON_PUPIL} fill={INK} />
          </g>
        </Figure>
        <BreakfastTable />
        <path
          d={PAPER_SHEET}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={PAPER_TEXT} stroke={INK} strokeWidth={1.2} />

        {/* Toby, lying by the table, watching the boys */}
        <Toby pose="lie" at={[668, 330]} facing={-1} scale={0.78} />

        {/* Holmes, turned on his chair, the silver held out in his white hand */}
        <path d={HOL_CHAIR.legs} stroke={INK} strokeWidth={5} />
        <path
          d={HOL_CHAIR.back + HOL_CHAIR.seat}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <Figure parts={HOLMES}>
          <g transform={hht}>
            <path d={HOLMES_CUTS + HOLMES_HAIR + COLLAR} fill={PAPER} />
            <path d={HOLMES_PUPIL} fill={INK} />
          </g>
        </Figure>
        <HolmesHands facing={-1} arms={HOL_HANDS} />
        <g fill={PAPER} stroke={INK} strokeWidth={1.1}>
          {COINS.map(([cx, cy]) => (
            <circle key={cx} cx={cx} cy={cy} r={2.8} />
          ))}
        </g>
      </g>
    </>
  )
}

export const theBakerStreetIrregulars: LinocutArt = {
  width: W,
  height: H,
  Draw: TheBakerStreetIrregulars,
}

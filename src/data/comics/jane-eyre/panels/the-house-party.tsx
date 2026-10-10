import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  ADELE_CURLS,
  ADELE_CURL_CUTS,
  BLANCHE_CUTS,
  BLANCHE_HAIR,
  BLANCHE_HAIR_CUTS,
  BLANCHE_PUPIL,
  Figure,
  GirlFace,
  HEAD_BLANCHE,
  HEAD_GIRL,
  HEAD_JANE,
  HEAD_ROCHESTER,
  HOLD_CUTS,
  HOLD_HAND,
  JaneFace,
  LOOSE_HAND,
  ROCHESTER_CUTS,
  ROCHESTER_EAR,
  ROCHESTER_HAIR,
  ROCHESTER_HAIRLINE,
  ROCHESTER_HAIR_CUTS,
  ROCHESTER_NECKCLOTH,
  handAt,
  headAt,
  line,
  man,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapters 17 and 18: "The house party", the ninth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The first evening of the party, in the drawing-room after
 * dinner, when Blanche Ingram turns to Rochester at the fire: "'Then, what
 * induced you to take charge of such a little doll as that?' (pointing to
 * Adèle)", and then, of the governess, "there she is still, behind the
 * window-curtain", and of governesses, "half of them detestable and the rest
 * ridiculous" (Chapter 17).
 *
 * - JANE. "I retired to a window-seat"; "I sit in the shade—if any shade
 *   there be in this brilliantly-lit apartment; the window-curtain half hides
 *   me"; "I try to concentrate my attention on those netting-needles, on the
 *   meshes of the purse I am forming ... to see only the silver beads and silk
 *   threads that lie in my lap"; "my best dress (the silver-grey one,
 *   purchased for Miss Temple's wedding, and never worn since) ... my sole
 *   ornament, the pearl brooch". So she sits in the window-bay at the left,
 *   the one dark corner of the room, the heavy curtain falling in front of
 *   her knees, the netted purse in her hands, her face turned to the room.
 *   The grey of the dress is cut as fine paper ribs over the ink, and the
 *   brooch is a paper bead at her throat. The cushion of the seat is not
 *   described; it is cut pale so she is seen to sit.
 * - ADÈLE. "Henry Lynn has taken possession of an ottoman at the feet of
 *   Louisa: Adèle shares it with him: he is trying to talk French with her";
 *   "her curls arranged in well-smoothed, drooping clusters, her pink satin
 *   frock put on, her long sash tied, and her lace mittens adjusted". So she
 *   sits on the ottoman in the middle of the room, small, her pale face and
 *   her mittened hands in paper, her frock in paper with the sash in ink, her
 *   curls down her back as the kit cuts them; Henry Lynn sits at the other
 *   end of it, leaning to her. He is not described beyond "very dashing
 *   sparks", so he is a plain young gentleman "costumed in black", as all the
 *   gentlemen are. The pink is left to the words.
 * - BLANCHE AND ROCHESTER. "Mr. Rochester, having quitted the Eshtons, stands
 *   on the hearth as solitary as she stands by the table: she confronts him,
 *   taking her station on the opposite side of the mantelpiece"; "'I have not
 *   considered the subject,' said he indifferently, looking straight before
 *   him"; Jane hoped "the allusion to me would make Mr. Rochester glance my
 *   way ... but he never turned his eyes". So they face each other across the
 *   fire: Blanche on the near side of it, turned to him, throwing a hand back
 *   to point at Adèle behind her; Rochester on the far side, looking only at
 *   her. Blanche as the kit cuts her: "straight and tall as poplars", "dark as
 *   a Spaniard", "the dark eyes and black ringlets", "attired in spotless
 *   white" (Chapter 17), so she is the tallest figure here, her face and arms
 *   in ink, her gown in paper, her head carried high. Rochester as the kit
 *   cuts him, in black with a white neckcloth: "they are all costumed in
 *   black".
 * - THE ROOM. "a very pretty drawing-room ... spread with white carpets, on
 *   which seemed laid brilliant garlands of flowers"; "crimson couches and
 *   ottomans"; "the pale Parian mantelpiece"; "between the windows large
 *   mirrors repeated the general blending of snow and fire" (Chapter 11);
 *   "a large fire burning silently on the marble hearth, and wax candles
 *   shining"; "The crimson curtain hung before the arch" (Chapter 17). So the
 *   carpet is paper strewn with garlands, the mantelpiece is paper with two
 *   wax candles on it, a tall glass hangs at the right, and the curtained
 *   arch stands behind the ottoman. The fire is the spot colour; the crimson
 *   of the curtain and the ottoman is left to the words, so that no red
 *   touches a child's hands.
 *
 * The other guests in the room (the dowagers, the Eshtons, Colonel Dent and
 * the rest) are left out: the moment is Blanche's, and the guide names only
 * these four.
 *
 * Seeds: 901 (the wall), 902 (the carpet), 903 (the fire's glow), 904 (the
 * candles), 905 (the arch curtain), 906 (the glass), 907 (the grey dress).
 */

const W = 860
const H = 340
/** The foot of the back wall; the carpet runs from here to us. */
const FLOOR = 268
/** The window-bay at the left, and the window in it. */
const WIN = { x0: 22, x1: 148, top: 24, sill: 214 }
/** The pale Parian mantelpiece: its shelf, and the opening of the grate. */
const MANTEL = { x0: 500, x1: 660, shelf: 152, open: [530, 630] as [number, number], top: 186 }
/** The heart of the fire: the light of the room comes from here and the candles. */
const FIRE: P = [580, 244]
/** The wax candles on the mantelshelf. */
const CANDLES: P[] = [
  [522, 120],
  [618, 120],
]
/** The arch behind the ottoman, with its curtain hanging before it. */
const ARCH = { x0: 214, x1: 398, top: 34 }
/** The tall glass between the windows, at the right. */
const GLASS = { x0: 778, x1: 846, top: 30, bottom: 248 }

/** The light of the room: the fire and the candles, and the window-bay in shade. */
const light = (x: number, y: number) => {
  const fire = clamp(1 - Math.hypot((x - FIRE[0]) * 0.62, (y - FIRE[1]) * 0.9) / 400) ** 1.2
  const candles = clamp(1 - Math.hypot(x - 570, (y - 120) * 1.3) / 330) ** 1.5 * 0.75
  const room = 0.22
  const shade = clamp((x - 60) / 190)
  return Math.max(Math.max(fire, candles, room) * (0.12 + 0.88 * shade), 0.03)
}

type Box = { x0: number; x1: number; y0: number; y1: number }
/**
 * The cuts of a field, less those lying wholly under something printed over
 * it (the window, the arch, the mantelpiece, the glass): the plate is
 * fetched whole on a phone, and a cut nobody can see is weight for nothing.
 */
function uncovered(d: string, boxes: Box[]): string {
  const under = (x: number, y: number) =>
    boxes.some((b) => x > b.x0 && x < b.x1 && y > b.y0 && y < b.y1)
  return (d.match(/M[^M]+/g) ?? [])
    .filter((seg) => {
      const v = (seg.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number)
      return !(under(v[0], v[1]) && under(v[4], v[5]))
    })
    .join('')
}

type Marks = {
  wall: string
  garlands: string
  shade: string
  glow: string
  candleRays: string
  curtain: string
  glass: string
  grey: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const wall = uncovered(
    gougeField(rng(901), { x0: 0, x1: W, y0: 4, y1: FLOOR - 4 }, light, {
      spacing: 7.4,
      len: [16, 60],
      gap: [8, 22],
      max: 3.6,
    }),
    [
      { x0: WIN.x0 - 7, x1: WIN.x1 + 7, y0: WIN.top - 7, y1: WIN.sill + 7 },
      { x0: 150, x1: 210, y0: 0, y1: FLOOR },
      { x0: ARCH.x0, x1: ARCH.x1, y0: ARCH.top + 30, y1: FLOOR },
      { x0: MANTEL.x0 - 8, x1: MANTEL.x1 + 8, y0: MANTEL.shelf, y1: FLOOR },
      { x0: GLASS.x0 - 7, x1: GLASS.x1 + 7, y0: GLASS.top - 7, y1: GLASS.bottom + 7 },
      { x0: 14, x1: 164, y0: WIN.sill, y1: FLOOR },
    ],
  )
  // "white carpets, on which seemed laid brilliant garlands of flowers": the
  // carpet is paper, the garlands cut in ink, smaller and closer towards the
  // wall.
  const rc = rng(902)
  let garlands = ''
  for (const [y, size] of [
    [280, 0.6],
    [298, 0.8],
    [322, 1],
  ] as [number, number][]) {
    for (let x = between(rc, -30, 0); x < W + 20; x += between(rc, 80, 120) * size) {
      const len = 44 * size
      garlands += ribbon(
        wave(x, x + len, y, 2.4 * size, len, between(rc, 0, 6), 10),
        1.2 * size,
        0.8,
      )
      for (let k = 0; k < 4; k++) {
        const fx = x + (len * (k + 0.5)) / 4
        const fy =
          y + Math.sin(((fx - x) / len) * Math.PI * 2) * 2.4 * size + (k % 2 ? -3 : 3) * size
        garlands += `M${n(fx - 1.8 * size)} ${n(fy)}a${n(1.8 * size)} ${n(1.8 * size)} 0 1 0 ${n(3.6 * size)} 0a${n(1.8 * size)} ${n(1.8 * size)} 0 1 0 ${n(-3.6 * size)} 0Z`
      }
    }
  }
  // The window-bay in shade on the carpet: broken ink strokes at the left.
  let shade = ''
  for (let y = FLOOR + 3; y < H; y += 4.2) {
    const reach = 150 + (y - FLOOR) * 0.9
    let x = -6
    while (x < reach) {
      const len = between(rc, 14, 40)
      shade += gouge(
        x,
        y,
        Math.min(x + len, reach),
        y + between(rc, -0.4, 0.4),
        1.4 * clamp(1 - x / reach + 0.3),
      )
      x += len + between(rc, 2, 6)
    }
  }
  const glow = rays(rng(903), FIRE[0], FIRE[1] - 10, { from: 22, to: 76, every: 8, width: 2.4 })
  const rk = rng(904)
  const candleRays = CANDLES.map(([x, y]) =>
    rays(rk, x, y - 10, { from: 9, to: 34, every: 14, width: 1.3 }),
  ).join('')
  // The crimson curtain hanging before the arch: long folds cut in paper.
  const ra = rng(905)
  let curtain = ''
  for (let x = ARCH.x0 + 12; x < ARCH.x1 - 8; x += between(ra, 10, 15)) {
    curtain += gouge(
      x,
      ARCH.top + 40,
      x + between(ra, -2, 2),
      FLOOR - 4,
      between(ra, 0.7, 1.3),
      between(ra, -1, 1),
    )
  }
  // The glass: the candlelight caught in it, in long slanting streaks.
  const rg = rng(906)
  let glass = ''
  for (let i = 0; i < 6; i++) {
    const y = between(rg, GLASS.top + 20, GLASS.bottom - 60)
    glass += gouge(GLASS.x0 + 10, y + 30, GLASS.x1 - 12, y, between(rg, 0.8, 1.6))
  }
  // "the silver-grey one": fine paper ribs over Jane's dress, so it prints grey.
  const rj = rng(907)
  let grey = ''
  for (let x = 84; x < 190; x += 3.2) grey += gouge(x, 168 + between(rj, 0, 4), x - 6, 300, 0.42)
  cached = { wall, garlands, shade, glow, candleRays, curtain, glass, grey }
  return cached
}

// ── JANE, in the window-seat ────────────────────────────────────────────────

const J_HEAD = { d: HEAD_JANE, at: [126, 148] as P, rot: 4, scale: 1.02 }
const J_T = headAt(1, J_HEAD.at, J_HEAD.rot, J_HEAD.scale)
/** Her dress, seated: the bodice from the neck, the lap forward to the knee, the skirt to the floor. */
const J_DRESS =
  'M121 170C128 168 136 170 140 174L142 206C156 210 170 216 178 226L182 292L96 294C94 270 98 240 104 212C106 196 112 180 121 170Z'
const J_NEAR: P[] = [
  [134, 180],
  [140, 206],
  [150, 226],
]
const J_FAR: P[] = [
  [126, 180],
  [126, 208],
  [140, 230],
]
const J_HAND = { parts: HOLD_HAND, scale: 0.86, rot: -24 }
const J_FAR_HAND = { parts: HOLD_HAND, scale: 0.84, rot: -10 }
const JANE: Part[] = woman({
  facing: 1,
  neck: [128, 172],
  waist: [128, 206],
  hemY: 294,
  head: J_HEAD,
  skirt: J_DRESS,
  arm: 7.4,
  near: { arm: J_NEAR, hand: J_HAND },
  far: { arm: J_FAR, hand: J_FAR_HAND },
})
/** The netted purse in her hands, its silver beads cut as paper points. */
const PURSE = 'M150 224C156 220 166 222 168 228C168 236 160 240 152 238C148 234 148 228 150 224Z'
const PURSE_MESH =
  'M152 226L166 236M156 222L166 230M151 232L160 239M158 223L152 236M164 225L158 239'
/** The heavy window-curtain, falling in front of her knees: "the window-curtain half hides me". */
const WINDOW_CURTAIN =
  'M150 6H204C200 60 198 120 202 180C206 220 210 250 214 300L156 302C150 284 148 268 152 254C160 246 172 240 178 230C176 200 170 150 150 6Z'
const WINDOW_CURTAIN_FOLDS =
  gouge(166, 14, 184, 196, 1.1, 0.8) +
  gouge(182, 14, 192, 280, 1, -0.6) +
  gouge(196, 16, 204, 292, 0.9, -0.6) +
  gouge(162, 262, 176, 298, 0.9, -0.6)
/** The window-seat she sits on: its box, and its cushion cut pale. */
const SEAT = 'M14 238H164V296H14Z'
const CUSHION = 'M16 232C50 228 120 228 162 232L164 244C120 247 50 247 14 244Z'

// ── HENRY LYNN AND ADÈLE, on the ottoman ───────────────────────────────────

/** The ottoman: a low cushioned seat. Its crimson is left to the words. */
const OTTOMAN = { x0: 236, x1: 372, top: 266, base: 300 }

/**
 * A plain young man's head, for Henry Lynn, whom the text does not describe:
 * the plain head of ./the-impediment.tsx, cut with plain features.
 */
const HEAD_PLAIN =
  'M-8 26C-9 20 -14 15 -15.5 6C-17 -9 -8 -20 3 -20C11 -20 15.5 -15 15.5 -9L16 -5.5L22 5L16.5 6.6L17 9.4L15.5 11L16.8 13.6C17 18.6 15 22 10 23L7.5 26Z'
const PLAIN_CUTS =
  'M6.6 -3.6Q10 -5.8 13.2 -3.8Q10 -1.8 6.6 -3.6Z' +
  gouge(6.4, -7.8, 13.8, -7.2, 0.8) +
  gouge(11.2, 11.4, 15.8, 11, 0.5) +
  gouge(-3.8, -1, -2.8, 6, 0.6, -1.2) +
  gouge(10, -17.2, -6, -17.4, 0.5, -1.2) +
  gouge(4, -14.6, -13, -7, 0.55, -1.6) +
  gouge(-2, -10.4, -14.6, 2, 0.5, -1.2)
const NECKCLOTH =
  'M-4 24.6C0 23.4 5 23.6 8.6 25C9.4 28 8.6 31 7 33C3 33.6 -1.6 33 -4.6 31.4C-5.4 29 -5.2 26.6 -4 24.6Z'
/** Henry Lynn, seated at the near end of the ottoman, leaning to Adèle. */
const HENRY_HEAD = { d: HEAD_PLAIN, at: [276, 184] as P, rot: 12, scale: 0.98 }
const HENRY_T = headAt(1, HENRY_HEAD.at, HENRY_HEAD.rot, HENRY_HEAD.scale)
const HENRY: Part[] = man({
  facing: 1,
  neck: [272, 210],
  hip: [262, 262],
  head: HENRY_HEAD,
  body: { width: 32, tails: 26, front: 2, flare: 4 },
  arm: 8.6,
  leg: 9.6,
  shoe: 0.9,
  near: {
    arm: [
      [276, 218],
      [278, 242],
      [282, 258],
    ],
    hand: { parts: LOOSE_HAND, scale: 0.9, rot: -24 },
    leg: [
      [266, 264],
      [292, 266],
      [292, 300],
    ],
  },
  far: {
    arm: [],
    leg: [
      [258, 262],
      [282, 262],
      [280, 298],
    ],
  },
})

/** Adèle, at the far end of the ottoman, turned to him. */
const ADELE_T = headAt(-1, [342, 214], -4, 0.74)
/** Her pink satin frock, seated: paper, the bodice from the neck to the high waist, the lap, the skirt. */
const ADELE_FROCK =
  'M348 230C342 228 336 230 334 234L332 248C322 252 312 256 308 262L306 290L352 292C356 276 356 256 352 244Z'
/** Her long sash at the high waist, tied behind, in ink. */
const ADELE_SASH = 'M352 244L332 246L331 252L353 251ZM352 250L358 274L354 276L348 252Z'
const ADELE_ARM: P[] = [
  [338, 236],
  [334, 250],
  [326, 256],
]
const ADELE: Part[] = [
  // her shoes, under the hem of the frock
  { d: 'M322 290L322 298', w: 4 },
  { d: 'M314 290L313 298', w: 4 },
  { d: 'M325 296L316 296C314 297 313 299 314 301L325 301Z' },
  { d: 'M317 296L308 296C306 297 305 299 306 301L317 301Z' },
  { d: ADELE_CURLS, t: ADELE_T },
  { d: ADELE_FROCK, paper: true, edge: 1.1 },
  { d: HEAD_GIRL, t: ADELE_T },
  { d: line(ADELE_ARM), w: 5, paper: true, edge: 1 },
  ...HOLD_HAND.map((q) => ({
    ...q,
    t: handAt(ADELE_ARM, -1, { parts: HOLD_HAND, scale: 0.6, rot: -8 }),
    paper: true,
    edge: 0.9,
  })),
]
/** The folds of her satin frock, in ink. */
const ADELE_FOLDS = 'M342 256L344 288M328 258L326 288M316 262L312 288'

// ── BLANCHE, on the near side of the fire ───────────────────────────────────

/** A hand pointing: the forefinger out, the other fingers curled, the thumb along it. */
const POINT_HAND: Part[] = [
  { d: 'M-0.8 -4.2C3 -5.4 7 -5.6 10 -4.6L10.4 4.4C7 5.4 3 5 -0.8 4Z' },
  { d: 'M9.6 -3L20.4 -4.4', w: 2.4 },
  { d: 'M9.4 -0.6C12.8 -0.8 14.2 1.2 13.6 3.4C12.8 5.2 11 5.4 9.6 4.8Z' },
  { d: 'M2.8 -4.2L6.6 -8.2L9.8 -9.2', w: 2.4 },
]
const B_HEAD = { d: HEAD_BLANCHE, at: [456, 92] as P, rot: -4, scale: 1.14 }
const B_T = headAt(1, B_HEAD.at, B_HEAD.rot, B_HEAD.scale)
/** Her near arm, thrown back past her side to point at Adèle behind her. */
const B_POINT: P[] = [
  [448, 132],
  [428, 148],
  [410, 162],
]
const B_POINT_HAND = { parts: POINT_HAND, scale: 1.05, rot: 0, flip: true }
/**
 * Her white evening gown, cut low and straight across, from the shoulders to
 * the hem: "The noble bust, the sloping shoulders, the graceful neck"
 * (Chapter 17). Her neck and shoulders above it are ink, like her face. (Cut
 * first from the neck with woman()'s gown, the white bodice read as a tall
 * white collar under a dark face.)
 */
const B_GOWN =
  'M437 133C446 131 458 131 467 133L466 158C472 200 480 262 482 306Q452 311 412 306C420 262 430 200 436 158Z'
const B_SHOULDERS = 'M445 116L460 116C463 122 467 127 468 134L436 134C437 127 442 122 445 116Z'
const BLANCHE: Part[] = [
  { d: BLANCHE_HAIR, t: B_T },
  { d: 'M471.3 301.4L480.3 301.4C484.9 302.3 485.8 304.1 485.8 305.9L471.3 305.9Z' },
  { d: B_SHOULDERS },
  { d: B_GOWN, paper: true, edge: 1.2 },
  { d: HEAD_BLANCHE, t: B_T },
  { d: line(B_POINT), w: 7.4, sep: 1.3 },
  ...POINT_HAND.map((q) => ({ ...q, t: handAt(B_POINT, 1, B_POINT_HAND) })),
]
/** The front edge of her black hair, cut in paper, so it parts from her dark face. */
const BLANCHE_HAIRLINE = 'M14.6 -11.8C10.6 -11.8 5.6 -11 1.6 -9.4C0 -7 1 -4.6 2.4 -3'
/** The folds of her white gown, in ink. */
const B_FOLDS = 'M446 172L430 302M452 174L452 304M460 172L474 302'

// ── ROCHESTER, on the far side of the fire ──────────────────────────────────

const R_HEAD = { d: HEAD_ROCHESTER, at: [704, 104] as P, rot: 2, scale: 1.1 }
const R_T = headAt(-1, R_HEAD.at, R_HEAD.rot, R_HEAD.scale)
const ROCHESTER: Part[] = man({
  facing: -1,
  neck: [708, 134],
  hip: [710, 208],
  head: R_HEAD,
  hair: ROCHESTER_HAIR,
  body: { width: 38, tails: 50, front: 4, flare: 7 },
  arm: 10,
  leg: 11,
  shoe: 1.05,
  near: {
    arm: [
      [704, 142],
      [698, 178],
      [700, 210],
    ],
    hand: { parts: LOOSE_HAND, scale: 1.05, rot: -2 },
    leg: [
      [706, 208],
      [698, 258],
      [696, 304],
    ],
  },
  far: {
    arm: [],
    leg: [
      [714, 208],
      [718, 258],
      [722, 302],
    ],
  },
})
const R_CUTS = gouge(696, 148, 690, 206, 0.8, 0.6)

function TheHouseParty({ uid }: ArtProps) {
  const m = marks()
  const id = {
    win: `${uid}-win`,
    arch: `${uid}-arch`,
    open: `${uid}-open`,
    glass: `${uid}-glass`,
    dress: `${uid}-dress`,
  }
  const archPath = `M${ARCH.x0} ${FLOOR}V${ARCH.top + 70}Q${ARCH.x0} ${ARCH.top} ${(ARCH.x0 + ARCH.x1) / 2} ${ARCH.top}Q${ARCH.x1} ${ARCH.top} ${ARCH.x1} ${ARCH.top + 70}V${FLOOR}Z`
  const openPath = `M${MANTEL.open[0]} ${FLOOR}V${MANTEL.top + 16}Q${MANTEL.open[0]} ${MANTEL.top} ${MANTEL.open[0] + 16} ${MANTEL.top}H${MANTEL.open[1] - 16}Q${MANTEL.open[1]} ${MANTEL.top} ${MANTEL.open[1]} ${MANTEL.top + 16}V${FLOOR}Z`
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={WIN.x0} y={WIN.top} width={WIN.x1 - WIN.x0} height={WIN.sill - WIN.top} />
        </clipPath>
        <clipPath id={id.arch}>
          <path d={archPath} />
        </clipPath>
        <clipPath id={id.open}>
          <path d={openPath} />
        </clipPath>
        <clipPath id={id.glass}>
          <rect
            x={GLASS.x0}
            y={GLASS.top}
            width={GLASS.x1 - GLASS.x0}
            height={GLASS.bottom - GLASS.top}
          />
        </clipPath>
        <clipPath id={id.dress}>
          <path d={J_DRESS} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
        {/* the drawing-room wall, brilliantly lit, the window-bay in shade */}
        <path d={m.wall} fill={PAPER} />

        {/* the white carpet and its garlands, and the shade of the bay on it */}
        <rect x={-4} y={FLOOR} width={W + 8} height={H - FLOOR + 4} fill={PAPER} />
        <path d={`M-4 ${FLOOR}H${W + 4}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.garlands} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* the window, night beyond it, and the window-seat */}
        <rect
          x={WIN.x0 - 7}
          y={WIN.top - 7}
          width={WIN.x1 - WIN.x0 + 14}
          height={WIN.sill - WIN.top + 14}
          fill={PAPER}
        />
        <rect
          x={WIN.x0}
          y={WIN.top}
          width={WIN.x1 - WIN.x0}
          height={WIN.sill - WIN.top}
          fill={INK}
        />
        <g clipPath={`url(#${id.win})`}>
          <path
            d={
              gouge(WIN.x0 + 10, WIN.top + 30, WIN.x0 + 40, WIN.top + 4, 0.9) +
              gouge(WIN.x1 - 34, WIN.top + 90, WIN.x1 - 10, WIN.top + 66, 0.8)
            }
            fill={PAPER}
          />
        </g>
        <g stroke={PAPER} strokeWidth={2.6}>
          <path d={`M${(WIN.x0 + WIN.x1) / 2} ${WIN.top}V${WIN.sill}`} />
          <path d={`M${WIN.x0} 86H${WIN.x1}M${WIN.x0} 150H${WIN.x1}`} />
        </g>
        <path d={SEAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={CUSHION} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />

        {/* the arch, the crimson curtain hanging before it */}
        <path d={archPath} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${id.arch})`}>
          <path d={m.curtain} fill={PAPER} />
          <path
            d={`M${ARCH.x0} ${ARCH.top + 46}Q${(ARCH.x0 + ARCH.x1) / 2} ${ARCH.top + 62} ${ARCH.x1} ${ARCH.top + 46}`}
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
        </g>

        {/* the pale Parian mantelpiece, the fire, the wax candles */}
        <rect
          x={MANTEL.x0}
          y={MANTEL.shelf + 6}
          width={MANTEL.x1 - MANTEL.x0}
          height={FLOOR - MANTEL.shelf - 6}
          fill={PAPER}
        />
        <path d={openPath} fill={INK} />
        <g clipPath={`url(#${id.open})`}>
          <path d={m.glow} fill={PAPER} />
        </g>
        <path
          d={`M${MANTEL.open[0] + 12} 258H${MANTEL.open[1] - 12}M${MANTEL.open[0] + 16} 264H${MANTEL.open[1] - 16}`}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <g fill={RED}>
          <path d="M546 256C546 246 556 240 566 246C570 236 586 234 592 244C600 238 612 242 614 256Z" />
          <path
            className="lc-flicker"
            d="M560 248C556 238 560 228 566 220C572 230 574 240 570 248Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.3 })}
            d="M582 244C580 232 584 222 590 214C596 224 598 236 592 246Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.15 })}
            d="M600 250C598 242 602 236 606 230C610 238 610 246 606 252Z"
          />
        </g>
        <rect
          x={MANTEL.x0 - 8}
          y={MANTEL.shelf}
          width={MANTEL.x1 - MANTEL.x0 + 16}
          height={8}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${MANTEL.x0 + 10} ${MANTEL.shelf + 20}V${FLOOR - 4}M${MANTEL.x1 - 10} ${MANTEL.shelf + 20}V${FLOOR - 4}`}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <rect
          x={MANTEL.x0 - 12}
          y={FLOOR}
          width={MANTEL.x1 - MANTEL.x0 + 24}
          height={10}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={m.candleRays} fill={PAPER} />
        {CANDLES.map(([x, y]) => (
          <g key={x}>
            <path
              d={`M${x - 8} ${MANTEL.shelf}L${x - 5} ${MANTEL.shelf - 6}H${x + 5}L${x + 8} ${MANTEL.shelf}Z`}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1}
            />
            <rect
              x={x - 2.6}
              y={y}
              width={5.2}
              height={MANTEL.shelf - 6 - y}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1}
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 1, delay: x / 700 })}
              d={`M${x} ${y - 1}C${x - 3} ${y - 5} ${x - 2} ${y - 10} ${x} ${y - 15}C${x + 2} ${y - 10} ${x + 3} ${y - 5} ${x} ${y - 1}Z`}
              fill={PAPER}
            />
          </g>
        ))}

        {/* the tall glass between the windows */}
        <rect
          x={GLASS.x0 - 7}
          y={GLASS.top - 7}
          width={GLASS.x1 - GLASS.x0 + 14}
          height={GLASS.bottom - GLASS.top + 14}
          fill={PAPER}
        />
        <rect
          x={GLASS.x0}
          y={GLASS.top}
          width={GLASS.x1 - GLASS.x0}
          height={GLASS.bottom - GLASS.top}
          fill={INK}
        />
        <g clipPath={`url(#${id.glass})`}>
          <path d={m.glass} fill={PAPER} />
        </g>

        {/* Jane, in the window-seat, in the shade */}
        <Figure parts={JANE}>
          <g clipPath={`url(#${id.dress})`}>
            <path d={m.grey} fill={PAPER} />
          </g>
          <path d={PURSE} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d={PURSE_MESH} fill="none" stroke={INK} strokeWidth={0.6} />
          <path d={HOLD_CUTS} transform={handAt(J_NEAR, 1, J_HAND)} fill={INK} />
          <path d={HOLD_CUTS} transform={handAt(J_FAR, 1, J_FAR_HAND)} fill={INK} />
          <JaneFace t={J_T} />
          {/* "my sole ornament, the pearl brooch" */}
          <circle cx={135.4} cy={180} r={2} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </Figure>
        {/* the window-curtain, half hiding her */}
        <path
          d={WINDOW_CURTAIN}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={WINDOW_CURTAIN_FOLDS} fill={PAPER} />

        {/* the ottoman, and Henry Lynn and Adèle on it */}
        <path
          d={`M${OTTOMAN.x0} ${OTTOMAN.base}V${OTTOMAN.top + 6}Q${OTTOMAN.x0} ${OTTOMAN.top} ${OTTOMAN.x0 + 8} ${OTTOMAN.top}H${OTTOMAN.x1 - 8}Q${OTTOMAN.x1} ${OTTOMAN.top} ${OTTOMAN.x1} ${OTTOMAN.top + 6}V${OTTOMAN.base}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={gouge(OTTOMAN.x0 + 6, OTTOMAN.top + 4, OTTOMAN.x1 - 6, OTTOMAN.top + 4, 1)}
          fill={PAPER}
        />
        <g fill={PAPER}>
          {[256, 286, 316, 346].map((x) => (
            <circle key={x} cx={x} cy={OTTOMAN.top + 17} r={1.6} />
          ))}
        </g>
        <path
          d={`M${OTTOMAN.x0 + 4} ${OTTOMAN.base}V${OTTOMAN.base + 6}M${OTTOMAN.x1 - 4} ${OTTOMAN.base}V${OTTOMAN.base + 6}`}
          stroke={INK}
          strokeWidth={4}
        />
        <Figure parts={HENRY}>
          <path d={PLAIN_CUTS} transform={HENRY_T} fill={PAPER} />
          <path d={NECKCLOTH} transform={HENRY_T} fill={PAPER} />
        </Figure>
        <Figure parts={ADELE} halo={1.4}>
          <path d={ADELE_CURL_CUTS} transform={ADELE_T} fill={PAPER} />
          <path d={ADELE_SASH} fill={INK} />
          <path d={ADELE_FOLDS} stroke={INK} strokeWidth={0.7} fill="none" />
          <GirlFace t={ADELE_T} eye="open" mouth="smile" />
        </Figure>

        {/* Blanche on the near side of the fire, pointing back at Adèle */}
        <Figure parts={BLANCHE}>
          <path d={B_FOLDS} fill="none" stroke={INK} strokeWidth={0.9} />
          <g transform={B_T}>
            <path d={BLANCHE_HAIR_CUTS + BLANCHE_CUTS} fill={PAPER} />
            <path d={BLANCHE_PUPIL} fill={INK} />
            <path
              d={BLANCHE_HAIRLINE}
              fill="none"
              stroke={PAPER}
              strokeWidth={1}
              strokeLinecap="round"
            />
          </g>
        </Figure>

        {/* Rochester on the far side of it, looking straight before him */}
        <Figure parts={ROCHESTER} cuts={R_CUTS}>
          <g transform={R_T}>
            <path d={ROCHESTER_HAIR_CUTS + ROCHESTER_CUTS} fill={PAPER} />
            <path
              d={ROCHESTER_HAIRLINE + ROCHESTER_EAR}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.1}
              strokeLinecap="round"
            />
            <path d={ROCHESTER_NECKCLOTH} fill={PAPER} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const theHouseParty: LinocutArt = { width: W, height: H, Draw: TheHouseParty }

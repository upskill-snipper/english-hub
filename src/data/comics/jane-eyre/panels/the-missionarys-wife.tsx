import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  HEAD_JANE,
  HEAD_ST_JOHN,
  HOLD_HAND,
  JaneFace,
  OPEN_HAND,
  STRAW_BONNET,
  STRAW_BONNET_LINING,
  STRAW_BONNET_PLAIT,
  STRAW_BONNET_TIES,
  StJohnFace,
  headAt,
  line,
  man,
  shawl,
  shawlBorder,
  woman,
  type P,
  type Part,
} from './people'

/**
 * Chapter 34: "The missionary's wife", the nineteenth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The proposal in the glen: "as he leaned back against the
 * crag behind him, folded his arms on his chest, and fixed his countenance,
 * I saw he was prepared for a long and trying opposition".
 *
 * - "'Let us rest here,' said St. John, as we reached the first stragglers
 *   of a battalion of rocks, guarding a sort of pass, beyond which the beck
 *   rushed down a waterfall; and where, still a little farther, the mountain
 *   shook off turf and flower, had only heath for raiment and crag for gem".
 *   So the glen runs up between two hills to the rocks of the pass and the
 *   waterfall, with the bare mountain beyond.
 * - "the sky was of stainless blue"; "we trod a soft turf, mossy fine and
 *   emerald green, minutely enamelled with a tiny white flower, and spangled
 *   with a star-like yellow blossom". So the turf is cut with tiny rings and
 *   stars; blue, green and yellow are left to the words, and there is no
 *   red in this plate.
 * - "I took a seat: St. John stood near me ... he removed his hat"; "He sat
 *   down". So Jane sits on a bank of heath in her straw bonnet and pinned
 *   shawl, as the figure kit cuts them, turned up to him, her hand at her
 *   breast; St John, bareheaded, his hat on the rock beside him, sits back
 *   against the crag with his arms folded, as the kit cuts him.
 *
 * Seeds: 1901 to 1910.
 */

const W = 860
const H = 340

/** The two hills that shut the glen in, meeting at the pass. */
const HILL_L = 'M-4 62C40 50 92 44 140 48C200 54 262 78 320 108C370 134 420 156 470 172L470 344H-4Z'
const HILL_R =
  'M864 56C818 44 764 42 712 54C660 66 610 96 572 128C552 146 536 160 522 172L522 344H864Z'
/** The far mountain beyond the pass, pale in the haze, "only heath for raiment and crag for gem". */
const FAR = 'M452 172C462 146 476 126 494 120C510 114 526 124 538 140C546 152 552 164 556 174Z'
/** The waterfall at the head of the glen, between the first rocks of the pass. */
const FALL = { x0: 486, x1: 512, top: 160, foot: 222 }
/**
 * "a battalion of rocks, guarding a sort of pass, beyond which the beck
 * rushed down a waterfall": a rocky step in the cleft between the hills, the
 * water falling over it, and the first boulders either side of its foot.
 */
const LEDGE = 'M458 182L470 168L486 162L498 156L512 160L530 166L546 180L546 204L458 204Z'
const WATER = 'M486 158C490 156 504 154 510 158L514 222C506 226 492 226 484 222Z'
const BOULDERS =
  'M444 228L446 212L456 198L470 192L482 196L486 228Z' +
  'M512 228L514 202L524 190L538 192L550 206L554 228Z' +
  'M482 230L486 222L496 220L504 224L506 230Z'
/**
 * The crag at the left, St John's back against it: its face swells out at
 * the height of his shoulders, so that he leans on it.
 */
const CRAG =
  'M-4 344V118C14 96 42 82 74 80C102 78 126 90 146 110C170 126 192 146 204 168C214 190 220 218 226 246L232 344Z'
/** The bank of heath Jane sits on. */
const BANK = 'M330 324C344 302 370 292 410 290C448 288 476 296 492 310L500 326Z'

/** The beck's banks, from the foot of the fall down to the bottom right. */
const BECK: { c: Pt; w: number }[] = [
  { c: [498, 222], w: 9 },
  { c: [520, 244], w: 12 },
  { c: [566, 270], w: 17 },
  { c: [630, 296], w: 24 },
  { c: [708, 322], w: 32 },
  { c: [770, 348], w: 40 },
]
const STREAM = (() => {
  const left: Pt[] = []
  const right: Pt[] = []
  BECK.forEach(({ c, w }, i) => {
    const a = BECK[Math.max(0, i - 1)].c
    const b = BECK[Math.min(BECK.length - 1, i + 1)].c
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const L = Math.hypot(dx, dy) || 1
    left.push([c[0] - (dy / L) * w, c[1] + (dx / L) * w])
    right.push([c[0] + (dy / L) * w, c[1] - (dx / L) * w])
  })
  return 'M' + [...left, ...right.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
})()
/** Is (x, y) in or near the beck? */
function inBeck(x: number, y: number) {
  for (let i = 0; i < BECK.length - 1; i++) {
    const [a, b] = [BECK[i], BECK[i + 1]]
    if (y < a.c[1] - 4 || y > b.c[1] + 4) continue
    const t = clamp((y - a.c[1]) / (b.c[1] - a.c[1]))
    const cx = a.c[0] + (b.c[0] - a.c[0]) * t
    const w = (a.w + (b.w - a.w) * t) * 1.5 + 4
    if (Math.abs(x - cx) < w) return true
  }
  return false
}

type Marks = {
  sky: string
  contoursL: string
  contoursR: string
  far: string
  fall: string
  ripples: string
  turf: string
  flowers: string
  crag: string
  bank: string
}

/** The crest of each hill, as a function of x, for the contour cuts. */
const crestL = (x: number) =>
  62 - x * 0.1 + Math.max(0, x - 140) * 0.42 + Math.max(0, x - 320) * 0.06
const crestR = (x: number) => 56 + Math.max(0, 712 - x) * 0.52 - Math.max(0, 600 - x) * 0.12

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // "the sky was of stainless blue": paper, scored with level lines that
  // thicken towards the top of the sky.
  const rs = rng(1901)
  let sky = ''
  for (let y = 6; y < 160; y += 8) {
    let x = between(rs, -20, 0)
    const k = clamp(1 - y / 130)
    while (x < W) {
      const len = between(rs, 60, 160)
      if (rs() < 0.15 + k * 0.8)
        sky += gouge(x, y, x + len, y + between(rs, -0.3, 0.3), 0.4 + k * 2.2)
      x += len + between(rs, 14, 50)
    }
  }
  // The hills: long contour cuts following each slope, as the heath lies.
  // The left-hand hill is in its own shadow (ink, cut with paper lines); the
  // right-hand hill is in the sun (paper, cut with ink lines).
  const contours = (
    seed: number,
    crest: (x: number) => number,
    x0: number,
    x1: number,
    rows: number,
    step: number,
  ) => {
    const r = rng(seed)
    let d = ''
    for (let k = 1; k <= rows; k++) {
      let x = x0 + between(r, -20, 10)
      while (x < x1) {
        const len = between(r, 50, 150)
        const pts: Pt[] = []
        for (let i = 0; i <= 8; i++) {
          const xx = Math.min(x + (len * i) / 8, x1)
          pts.push([xx, crest(xx) + k * step + Math.sin(xx / 30 + k) * 1.2])
        }
        if (pts[pts.length - 1][1] < 232) d += ribbonPath(pts, 0.9 + (k / rows) * 1.6)
        x += len + between(r, 8, 30)
      }
    }
    return d
  }
  const contoursL = contours(1902, crestL, 0, 470, 14, 11)
  const contoursR = contours(1903, crestR, 522, W, 13, 12)
  // The far mountain, pale: fine upright cuts of haze.
  const rf0 = rng(1904)
  let far = ''
  for (let i = 0; i < 26; i++) {
    const x = between(rf0, 460, 550)
    const y = between(rf0, 132, 170)
    far += gouge(x, y, x + between(rf0, -1, 1), y + between(rf0, 5, 10), 0.45)
  }
  // The waterfall: the white water streaked with ink as it falls.
  const rf = rng(1905)
  let fall = ''
  for (let i = 0; i < 9; i++) {
    const x = between(rf, FALL.x0 + 4, FALL.x1 - 2)
    fall += gouge(
      x,
      FALL.top + between(rf, 0, 10),
      x + between(rf, -1.4, 1.4),
      FALL.foot - between(rf, 0, 6),
      between(rf, 0.7, 1.3),
    )
  }
  // Ripples on the beck.
  const rw = rng(1906)
  let ripples = ''
  for (let i = 0; i < 44; i++) {
    const k = between(rw, 0, BECK.length - 1.001)
    const j = Math.floor(k)
    const t = k - j
    const a = BECK[j]
    const b = BECK[j + 1]
    const cx = a.c[0] + (b.c[0] - a.c[0]) * t
    const cy = a.c[1] + (b.c[1] - a.c[1]) * t
    const w = (a.w + (b.w - a.w) * t) * 0.8
    const x = cx + between(rw, -w, w * 0.6)
    ripples += gouge(x, cy, x + between(rw, 5, 12) * (0.5 + t), cy + 2, 0.5 + (cy - 222) * 0.006)
  }
  // The turf in the sun, "mossy fine and emerald green": paper, with short
  // tufts cut in ink, closer and heavier towards us.
  const rt = rng(1907)
  let turf = ''
  for (let i = 0; i < 300; i++) {
    const y = between(rt, 216, H)
    const x = between(rt, 0, W)
    if (inBeck(x, y)) continue
    const k = (y - 210) / (H - 210)
    const h = 2.5 + k * 6
    turf +=
      gouge(x, y, x - 1.6, y - h, 0.45 + k * 0.5) +
      gouge(x + 2.6, y, x + 4, y - h * 0.8, 0.45 + k * 0.5)
  }
  // "enamelled with a tiny white flower, and spangled with a star-like
  // yellow blossom": small rings, and small five-pointed stars, in ink.
  const rb = rng(1908)
  let flowers = ''
  for (let i = 0; i < 46; i++) {
    const y = between(rb, 236, H - 6)
    const x = between(rb, 300, W - 10)
    if (inBeck(x, y) || (x > 326 && x < 504 && y > 284)) continue
    const k = (y - 210) / (H - 210)
    const rad = 1.2 + k * 1.4
    if (i % 2 === 0) {
      let star = ''
      for (let j = 0; j < 10; j++) {
        const a = (j * Math.PI) / 5 - Math.PI / 2
        const rr = j % 2 ? rad * 0.5 : rad * 1.5
        star += `${j ? 'L' : 'M'}${n(x + Math.cos(a) * rr)} ${n(y + Math.sin(a) * rr)}`
      }
      flowers += star + 'Z'
    } else
      flowers += `M${n(x - rad)} ${n(y)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
  }
  // The crag: its face cut in the light, fissures left in ink.
  const rc = rng(1909)
  let crag = ''
  for (let y = 94; y < H; y += 7) {
    const right = 74 + (y - 80) * 0.58
    let x = between(rc, -10, 4)
    while (x < right - 4) {
      const len = between(rc, 12, 34)
      const L = clamp(0.2 + (x / right) * 0.8)
      if (rc() < 0.25 + L * 0.6)
        crag += gouge(x, y, Math.min(x + len, right - 3), y + between(rc, -0.6, 0.6), 0.5 + L * 1.6)
      x += len + between(rc, 4, 12)
    }
  }
  // The bank of heath she sits on: dark, a few tufts cut.
  const rk = rng(1910)
  let bank = ''
  for (let i = 0; i < 40; i++) {
    const x = between(rk, 340, 492)
    const y = between(rk, 300, 322)
    bank += gouge(x, y, x + between(rk, -3, 3), y - between(rk, 4, 8), 0.7)
  }
  cached = { sky, contoursL, contoursR, far, fall, ripples, turf, flowers, crag, bank }
  return cached
}

/** A long tapered cut along a line of points. */
function ribbonPath(pts: Pt[], w: number) {
  return ribbon(pts, w, 0.7)
}

// ── ST JOHN, sitting back against the crag, his arms folded ─────────────────
//
// FIXED 10 October 2026: he was first cut sitting upright, a clear gap of
// rock between his back and the crag, with one forearm rising to a hand at
// his breast, so that at panel size he seemed to lay a hand on his heart
// rather than to fold his arms, against the very words on the panel. He now
// leans back with his shoulders on the crag, which swells out to meet them,
// and his arms are folded: the near upper arm down his side, the near
// forearm level across his chest, the far forearm laid over it, and the far
// hand round the near arm above the elbow.
const SJ_HEAD = { d: HEAD_ST_JOHN, at: [226, 144] as P, rot: 10, scale: 0.84 }
const SJ_HT = headAt(1, SJ_HEAD.at, SJ_HEAD.rot, SJ_HEAD.scale)
const SJ_BODY = man({
  facing: 1,
  neck: [222, 166],
  hip: [252, 262],
  head: SJ_HEAD,
  body: { width: 30, tails: 30, long: true, flare: 6 },
  arm: 8.6,
  leg: 9.6,
  near: {
    arm: [],
    leg: [
      [256, 262],
      [310, 264],
      [334, 316],
    ],
  },
  far: {
    arm: [],
    leg: [
      [248, 262],
      [302, 258],
      [318, 314],
    ],
  },
})
/** The near arm: down his side from the shoulder, then level across his chest. */
const SJ_NEAR_ARM: P[] = [
  [229, 176],
  [238, 210],
  [263, 205],
]
/** The far forearm, laid over the near one, from the front of his chest back to his hand. */
const SJ_FAR_FOREARM: P[] = [
  [265, 195],
  [251, 194],
]
const SJ: Part[] = [
  ...SJ_BODY,
  { d: line(SJ_NEAR_ARM), w: 8.6, sep: 1.4 },
  { d: line(SJ_FAR_FOREARM), w: 8, sep: 1.4 },
]
/**
 * His far hand round the near arm above the elbow, the fingers pointing back
 * along it and cut apart. Paper, with an ink edge, like every hand of his.
 */
const SJ_FAR_HAND = { parts: HOLD_HAND, scale: 0.9, rot: 180 }
const SJ_FAR_HAND_T = 'translate(252 194) rotate(182) scale(0.9 -0.9)'
/** His hat, taken off, on the rock beside him. */
const HAT =
  'M170 261C170 248 169 236 168 228C176 225 194 225 202 228C201 236 200 248 200 261Z' +
  'M160 262C166 258 204 258 210 262C210 265 208 267 205 267C196 265 174 265 165 267C162 267 160 265 160 262Z'
/** The low rock he sits on. */
const SEAT = 'M206 274C210 260 226 254 250 254C272 254 288 262 290 276L292 304H206Z'

// ── JANE, on the bank of heath, her hand at her heart ───────────────────────
const JANE_HEAD = { d: HEAD_JANE, at: [414, 210] as P, rot: 8, scale: 0.62 }
const JANE_HT = headAt(-1, JANE_HEAD.at, JANE_HEAD.rot, JANE_HEAD.scale)
const J_NECK: P = [420, 226]
const J_WAIST: P = [422, 252]
/** Her skirt, seated: the lap forward to the knee, then falling to the bank. */
const J_SKIRT =
  'M428 222L412 223C408 232 406 242 408 252L386 258C378 260 374 266 374 272L368 304L460 304C458 290 452 278 444 270C436 262 434 248 434 236C434 228 432 224 428 222Z'
const J_NEAR_ARM: P[] = [
  [422, 232],
  [428, 256],
  [412, 244],
]
const JANE = woman({
  facing: -1,
  neck: J_NECK,
  waist: J_WAIST,
  hemY: 304,
  head: JANE_HEAD,
  arm: 6.8,
  skirt: J_SKIRT,
  near: { arm: J_NEAR_ARM, hand: { parts: OPEN_HAND, scale: 0.86, rot: 30 } },
  far: { arm: [] },
  toes: [[372, 304]],
  shoe: 0.8,
})
const J_SHAWL = { width: 30, point: 30, front: 7 }

function TheMissionarysWife({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [330, 220], push: 1.03 })}>
        {/* the sky of stainless blue */}
        <rect x={0} y={0} width={W} height={180} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the far mountain beyond the pass, and the hills that shut them in */}
        <path d={FAR} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <path d={m.far} fill={INK} />
        <path d={HILL_R} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <path d={m.contoursR} fill={INK} />
        <path
          d={HILL_L}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.contoursL} fill={PAPER} />

        {/* the first rocks of the pass, and the beck coming down between them
            in a waterfall */}
        <path d={LEDGE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={WATER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.fall} fill={INK} />
        <path
          d={BOULDERS}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(470, 200, 462, 222, 1) +
            gouge(528, 196, 534, 222, 1.1) +
            gouge(476, 214, 484, 220, 0.8)
          }
          fill={PAPER}
        />

        {/* the soft turf and its flowers, and the beck running down */}
        <path
          d={`M-4 ${H + 4}V226C120 218 300 214 470 222C560 214 700 212 ${W + 4} 220V${H + 4}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.turf} fill={INK} />
        <path d={STREAM} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ripples} fill={INK} />
        <path d={m.flowers} fill={PAPER} stroke={INK} strokeWidth={0.9} />

        {/* the crag at the left */}
        <path d={CRAG} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.crag} fill={PAPER} />
        <path
          d="M70 86C64 120 66 160 58 200M120 104C116 150 120 200 112 260M30 130C26 170 28 220 22 280"
          fill="none"
          stroke={INK}
          strokeWidth={2.6}
        />

        {/* St John, bareheaded, his hat beside him, sitting back against the
            crag with his arms folded on his chest, looking down at her */}
        <path d={SEAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={HAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(171, 252, 199, 252, 0.9)} fill={PAPER} />
        <Figure parts={SJ}>
          <Figure
            parts={SJ_FAR_HAND.parts.map((q) => ({
              ...q,
              t: SJ_FAR_HAND_T,
              paper: true,
              edge: 0.9,
            }))}
            halo={0}
          />
          <StJohnFace t={SJ_HT} />
        </Figure>

        {/* the bank of heath, and Jane on it, turned up to him, her hand at
            her heart */}
        <path d={BANK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.bank} fill={PAPER} />
        <Figure parts={JANE}>
          <path
            d={shawl(J_NECK, J_WAIST, -1, J_SHAWL)}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={shawlBorder(J_NECK, J_WAIST, -1, J_SHAWL)} fill={PAPER} />
          <JaneFace t={JANE_HT} hair={false} tucker={false} />
          <g transform={JANE_HT}>
            <path d={STRAW_BONNET_TIES} fill={INK} stroke={PAPER} strokeWidth={0.9} />
            <path
              d={STRAW_BONNET}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
            <path d={STRAW_BONNET_PLAIT} fill="none" stroke={INK} strokeWidth={1.1} />
            <path d={STRAW_BONNET_LINING} fill={INK} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const theMissionarysWife: LinocutArt = { width: W, height: H, Draw: TheMissionarysWife }

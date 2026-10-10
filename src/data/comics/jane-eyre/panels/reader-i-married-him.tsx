import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  ribbon,
  rng,
  wave,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  FERNDEAN_HAIR,
  FERNDEAN_HAIR_CUTS,
  Figure,
  HEAD_JANE,
  HEAD_ROCHESTER,
  JaneFace,
  LOOSE_HAND,
  ROCHESTER_BLIND_SMILE_CUTS,
  STRAW_BONNET,
  STRAW_BONNET_LINING,
  STRAW_BONNET_PLAIT,
  STRAW_BONNET_TIES,
  boot,
  gown,
  handAt,
  headAt,
  line,
  man,
  type Hand,
  type P,
  type Part,
} from './people'

/**
 * Chapter 38: "Reader, I married him", the twenty-third and last moment in
 * the guide's timeline. Every detail is from the text (the held edition):
 *
 * - "Reader, I married him. A quiet wedding we had: he and I, the parson and
 *   clerk, were alone present. When we got back from church"; "I have been
 *   married to Mr. Rochester this morning". So it is morning at the church
 *   door, with the four of them and nobody else. The church is not
 *   described: a small grey country church with a low tower and a porch,
 *   drawn plainly.
 * - "Then he stretched his hand out to be led. I took that dear hand, held
 *   it a moment to my lips, then let it pass round my shoulder: being so much
 *   lower of stature than he, I served both for his prop and guide"
 *   (Chapter 37). So she walks a step ahead of him and nearer, his arm passing
 *   round behind her shoulders, leading him home. FIXED 10 October 2026: his
 *   hand was first drawn resting on her near shoulder, and at panel size a
 *   dark hand just under her chin read as a grip at her throat; the arm now
 *   passes behind her back at the height of her shoulders and the hand is on
 *   her far shoulder, out of sight.
 * - "Mr. Rochester continued blind the first two years of our union", so his
 *   eye is still shut (the kit's ROCHESTER AT FERNDEAN), and "Blind as he
 *   was, smiles played over his face" (Chapter 37), so he smiles. His left
 *   arm is on the far side of him and is not drawn.
 * - "Never mind fine clothes and jewels, now" (Chapter 37): Jane is in her
 *   plain dark frock and the straw bonnet she wears out of doors.
 * - The parson and the clerk are not described: a plain country parson,
 *   grey-haired, in a white surplice over a black cassock with a book in his
 *   hands, standing in the porch door; the clerk in a plain dark coat beside
 *   it.
 * - "We will go home through the wood" (Chapter 37): the path runs out
 *   towards the wood of Ferndean.
 * - The sun is the spot colour: "our honeymoon will shine our life long"
 *   (Chapter 38).
 *
 * The ten years that follow, his sight coming back to one eye, their
 * first-born son, St John's last letter from India, are told and not shown,
 * and are left to the guide's words.
 */

const W = 860
const H = 340
/** The far horizon, low. */
const HORIZON = 250
/** The sun, up over the wood ahead of them. */
const SUN: Pt = [700, 70]

// ── ROCHESTER ───────────────────────────────────────────────────────────────

/** Rochester, walking, his right arm round her shoulders. */
const R = {
  head: { d: HEAD_ROCHESTER, at: [452, 104] as P, rot: -4, scale: 0.98 },
  neck: [450, 131] as P,
  hip: [454, 236] as P,
  near: {
    /**
     * Round her shoulders: from his shoulder down across her back at the
     * height of her shoulders, the hand on her far shoulder, out of sight.
     * FIXED 10 October 2026: it ended at the back of her neck, just under
     * her bonnet, and at panel size it read as a hand at her nape.
     */
    arm: [
      [458, 145],
      [480, 166],
      [500, 182],
    ] as P[],
    leg: [
      [460, 236],
      [478, 276],
      [490, 318],
    ] as P[],
  },
  far: {
    arm: [] as P[],
    leg: [
      [450, 236],
      [440, 278],
      [426, 316],
    ] as P[],
  },
}
const R_HT = headAt(1, R.head.at, R.head.rot, R.head.scale)
const ROCHESTER: Part[] = man({
  facing: 1,
  neck: R.neck,
  hip: R.hip,
  head: R.head,
  hair: FERNDEAN_HAIR,
  near: { arm: [], leg: R.near.leg },
  far: { arm: [], leg: R.far.leg },
  body: { width: 44, tails: 58, front: 6, swing: 4 },
  arm: 10.5,
  leg: 11.5,
})
/** Drawn before her, so that her neck and bonnet cover the end of it. */
const ROCHESTER_ARM: Part[] = [{ d: line(R.near.arm), w: 10.5, sep: 1.5 }]

// ── JANE ────────────────────────────────────────────────────────────────────

/** Jane, a little ahead of him and nearer, leading: "both for his prop and guide". */
const J = {
  head: { d: HEAD_JANE, at: [508, 152] as P, rot: -5, scale: 0.82 },
  neck: [506, 172] as P,
  waist: [505, 208] as P,
  /** Her near arm at her side. */
  near: [
    [509, 182],
    [515, 212],
    [524, 236],
  ] as P[],
}
const J_HT = headAt(1, J.head.at, J.head.rot, J.head.scale)
const J_HAND: Hand = { parts: LOOSE_HAND, scale: 0.86, rot: 0 }
const JANE_BODY: Part[] = [
  boot([523, 320], 1, 0.8),
  boot([486, 318], 1, 0.74),
  { d: gown(J.neck, J.waist, 318, 1, { shoulder: 22, waistW: 16, front: 26, back: 30 }) },
  { d: HEAD_JANE, t: J_HT },
]
const JANE_ARM: Part[] = [
  { d: line(J.near), w: 7.8, sep: 1.3 },
  ...J_HAND.parts.map((q) => ({ ...q, t: handAt(J.near, 1, J_HAND), paper: true, edge: 1 })),
]

// ── THE PARSON AND THE CLERK ────────────────────────────────────────────────
// "he and I, the parson and clerk, were alone present" (Chapter 38). Neither
// is described: a plain country parson in his white surplice over a black
// cassock, a book in his hands; the clerk in a plain dark coat.

/** A plain man's head, for the parson and the clerk, whom the text does not describe. */
const HEAD_PLAIN =
  'M-8 26C-9 20 -14 15 -15.5 6C-17 -9 -8 -20 3 -20C11 -20 15.5 -15 15.5 -9L16 -5.5L22 5L16.5 6.6L17 9.4L15.5 11L16.8 13.6C17 18.6 15 22 10 23L7.5 26Z'
const PLAIN_CUTS =
  'M6.6 -3.6Q10 -5.8 13.2 -3.8Q10 -1.8 6.6 -3.6Z' +
  gouge(6.4, -7.8, 13.8, -7.2, 0.8) +
  gouge(11.2, 11.4, 15.8, 11, 0.5) +
  gouge(-3.8, -1, -2.8, 6, 0.6, -1.2)
const GREY_HAIR =
  gouge(11, -17.6, -5, -18.4, 0.6, -1.2) +
  gouge(8, -15.6, -9.6, -14.4, 0.65, -1.6) +
  gouge(4, -13.2, -13.6, -7.6, 0.65, -1.8) +
  gouge(0, -10.4, -15.4, 0, 0.6, -1.6) +
  gouge(-3, -6.4, -14.8, 7, 0.55, -1.2)
const PLAIN_HAIR =
  gouge(10, -17.2, -6, -17.4, 0.5, -1.2) +
  gouge(4, -14.6, -13, -7, 0.55, -1.6) +
  gouge(-2, -10.4, -14.6, 2, 0.5, -1.2)

/** The parson, in the porch door: [head x, head y], scale 0.56. */
const PARSON_T = headAt(1, [230, 226], 0, 0.54)
const PARSON: Part[] = [{ d: 'M217 298L219 282L241 282L243 298Z' }, { d: HEAD_PLAIN, t: PARSON_T }]
/** His surplice: white, from the shoulders to below the knee, wide in the sleeve. */
const SURPLICE =
  'M226 239C232 237 238 239 242 243L250 264L246 268L247 287L215 288L216 268L212 264L218 245Z'
const PARSON_BOOK = 'M236 259L250 256L251 264L237 267Z'

/** The clerk, outside the porch. */
const CLERK_T = headAt(1, [292, 214], 0, 0.54)
const CLERK: Part[] = [
  { d: 'M286 270L284 298M298 270L300 298', w: 6 },
  { d: 'M284 228C290 225 298 226 302 230L304 272L282 272Z' },
  { d: HEAD_PLAIN, t: CLERK_T },
]

// ── THE CHURCH, THE PATH, THE WOOD ──────────────────────────────────────────

const CHURCH = {
  tower: [26, 98] as [number, number],
  nave: [98, 336] as [number, number],
  ground: 298,
}

type Marks = {
  sky: string
  stone: string
  roof: string
  grass: string
  wood: string
  leaves: string
  path: string
}

const skyLight = (x: number, y: number) => {
  const sun = clamp(1 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.2) / 480)
  const low = clamp((y - 6) / 240)
  return clamp(0.45 + low * 0.35 + sun * 0.45)
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const rk = rng(2301)
  let sky = ''
  for (let y = 16; y < 200; y += between(rk, 8, 13)) {
    let x = between(rk, -60, 0)
    while (x < W) {
      const len = between(rk, 60, 190)
      const dark = 1 - skyLight(x + len / 2, y)
      if (rk() < 0.2 + dark * 1.3)
        sky += ribbon(
          wave(x, x + len, y, between(rk, 0.6, 1.6), between(rk, 70, 130), between(rk, 0, 6), 6),
          0.6 + dark * 3.6 * between(rk, 0.7, 1.1),
          0.8,
        )
      x += len + between(rk, 24, 90)
    }
  }
  // Grey stone, coursed, lit from the right by the morning sun.
  const rs = rng(2302)
  let stone = ''
  const course = (x0: number, x1: number, y0: number, y1: number) => {
    for (let y = y0; y < y1; y += 7) {
      let x = x0 + between(rs, 0, 8)
      while (x < x1 - 2) {
        const len = between(rs, 8, 20)
        const L = clamp(0.35 + ((x - x0) / (x1 - x0)) * 0.5)
        stone += gouge(x, y, Math.min(x + len, x1 - 2), y + between(rs, -0.3, 0.3), 0.6 + L * 1.4)
        x += len + between(rs, 2, 5)
      }
    }
  }
  course(CHURCH.tower[0] + 3, CHURCH.tower[1] - 2, 60, CHURCH.ground)
  course(CHURCH.nave[0] + 2, CHURCH.nave[1] - 2, 158, CHURCH.ground)
  // The roof: rows of slates.
  const rr = rng(2303)
  let roof = ''
  for (let y = 116; y < 152; y += 6) {
    let x = CHURCH.nave[0] + between(rr, 0, 10)
    while (x < CHURCH.nave[1] - 4) {
      const len = between(rr, 10, 26)
      roof += gouge(x, y, Math.min(x + len, CHURCH.nave[1] - 4), y + 0.4, 0.7)
      x += len + between(rr, 3, 7)
    }
  }
  // Rough grass: tussocks in broken rows, spiky-topped.
  const rg = rng(2304)
  let grass = ''
  for (const [y0, h, keep] of [
    [262, 4, 0.7],
    [272, 5, 0.6],
    [286, 6, 0.5],
    [302, 7, 0.4],
  ] as [number, number, number][]) {
    let x = between(rg, -10, 0)
    while (x < W) {
      const len = between(rg, 30, 100)
      if (rg() < keep && !(x > 560 && y0 > 280)) {
        let d = `M${n(x)} ${n(y0 + 2)}`
        for (let xx = x; xx <= x + len; xx += between(rg, 2.6, 4.2))
          d += `L${n(xx)} ${n(y0 - h * between(rg, 0.2, 1))}L${n(xx + 1.3)} ${n(y0 - between(rg, 0, 1))}`
        grass += d + `L${n(x + len)} ${n(y0 + 2)}Z`
      }
      x += len + between(rg, 14, 60)
    }
  }
  // The wood ahead: crowns clustered dark, a few leaves catching the sun.
  let wood = ''
  for (const [cx, cy, r] of WOOD)
    wood += `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z`
  const rl = rng(2305)
  let leaves = ''
  for (const [cx, cy, r] of WOOD) {
    for (let i = 0; i < Math.round(r / 4); i++) {
      const a = between(rl, -Math.PI * 0.9, Math.PI * 0.1)
      const rr2 = Math.sqrt(rl()) * r * 0.85
      const x = cx + Math.cos(a) * rr2
      const y = cy + Math.sin(a) * rr2
      leaves += gouge(x, y, x + between(rl, 3, 6), y - between(rl, 1, 3), 0.6)
    }
  }
  // The gravel path from the porch: its stones.
  const rp = rng(2306)
  let path = ''
  for (let i = 0; i < 90; i++) {
    const t = rp()
    const x = 230 + t * 640 + between(rp, -10, 10)
    const y = pathMid(x) + between(rp, -1, 1) * pathHalf(x) * 0.8
    path += gouge(x, y, x + between(rp, 2, 5), y + between(rp, -0.4, 0.4), 0.5 + t * 0.4)
  }
  cached = { sky, stone, roof, grass, wood, leaves, path }
  return cached
}

/** The wood of Ferndean ahead, to the right: crowns [cx, cy, r]. */
const WOOD: [number, number, number][] = [
  [690, 196, 22],
  [716, 170, 26],
  [746, 152, 28],
  [778, 140, 28],
  [808, 150, 26],
  [836, 136, 28],
  [862, 156, 26],
  [730, 206, 26],
  [766, 190, 28],
  [804, 192, 30],
  [846, 196, 28],
]

/** The path from the porch door out to the right, widening as it nears. */
const pathMid = (x: number) => 300 + ((x - 230) / 630) * 26
const pathHalf = (x: number) => 4 + ((x - 230) / 630) * 16
const PATH = (() => {
  let top = ''
  let bot = ''
  for (let x = 230; x <= 870; x += 20) {
    top += `L${n(x)} ${n(pathMid(x) - pathHalf(x))}`
    bot = `L${n(x)} ${n(pathMid(x) + pathHalf(x))}` + bot
  }
  return `M230 ${n(pathMid(230))}` + top + bot + 'Z'
})()

function ReaderIMarriedHim({ uid }: ArtProps) {
  const m = marks()
  const id = { door: `${uid}-door` }
  return (
    <>
      <defs>
        <clipPath id={id.door}>
          <path d="M214 298V230Q214 214 233 206Q252 214 252 230V298Z" />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
        {/* the morning sky */}
        <rect x={-4} y={-4} width={W + 8} height={HORIZON + 10} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* "our honeymoon will shine our life long": the sun, over the wood */}
        <g fill={INK}>
          {Array.from({ length: 18 }, (_, k) => {
            const a = (k / 18) * Math.PI * 2 + 0.2
            const r1 = k % 2 ? 34 : 44
            return (
              <path
                key={k}
                d={wedge(
                  SUN[0] + Math.cos(a) * 22,
                  SUN[1] + Math.sin(a) * 22,
                  SUN[0] + Math.cos(a) * r1,
                  SUN[1] + Math.sin(a) * r1,
                  1.8,
                  0.4,
                )}
              />
            )
          })}
        </g>
        <circle cx={SUN[0]} cy={SUN[1]} r={16} fill={RED} stroke={INK} strokeWidth={LINE.bold} />

        {/* the wood of Ferndean, ahead of them */}
        <g fill={PAPER}>
          {WOOD.map(([cx, cy, r]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r + 1.6} />
          ))}
        </g>
        <g stroke={INK} strokeWidth={6} strokeLinecap="round">
          {[702, 744, 790, 836].map((x) => (
            <path key={x} d={`M${x} 214L${x + 1} ${HORIZON + 2}`} />
          ))}
        </g>
        <path d={m.wood} fill={INK} />
        <path d={m.leaves} fill={PAPER} />

        {/* the ground */}
        <rect x={-4} y={HORIZON} width={W + 8} height={H - HORIZON + 4} fill={PAPER} />
        <path d={`M-4 ${HORIZON}H${W + 4}`} stroke={INK} strokeWidth={LINE.carve} />
        <path d={m.grass} fill={INK} />

        {/* the church: a low grey tower, the nave, the porch */}
        <rect
          x={CHURCH.tower[0]}
          y={58}
          width={CHURCH.tower[1] - CHURCH.tower[0]}
          height={CHURCH.ground - 58}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M22 60V46H32V52H42V46H52V52H62V46H72V52H82V46H92V52H102V60Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${CHURCH.nave[0]} ${CHURCH.ground}V152H${CHURCH.nave[1]}V${CHURCH.ground}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={m.stone} fill={PAPER} />
        <path
          d={`M${CHURCH.nave[0] - 4} 154L${CHURCH.nave[0] + 6} 112H${CHURCH.nave[1] - 6}L${CHURCH.nave[1] + 4} 154Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.roof} fill={PAPER} />
        {/* the belfry slit and a lancet in the tower; two lancets in the nave */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine}>
          <path d="M56 104V86Q62 76 68 86V104Z" />
          <path d="M57 190V166Q62 158 67 166V190Z" />
          <path d="M128 236V190Q138 176 148 190V236Z" />
          <path d="M300 236V190Q310 176 320 190V236Z" />
        </g>
        {/* the porch, its gable, and the door standing open */}
        <path
          d="M200 298V200L233 166L266 200V298Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M194 204L233 162L272 204" fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
        <path
          d="M214 298V230Q214 214 233 206Q252 214 252 230V298Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <g clipPath={`url(#${id.door})`}>
          <Figure parts={PARSON} halo={1.2}>
            <path d={PLAIN_CUTS + GREY_HAIR} transform={PARSON_T} fill={PAPER} />
          </Figure>
          <path d={SURPLICE} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
          <path
            d="M224 247L222 285M232 245L232 286M240 247L242 285"
            stroke={INK}
            strokeWidth={0.8}
          />
          <path d={PARSON_BOOK} fill={INK} stroke={PAPER} strokeWidth={0.8} />
        </g>
        <Figure parts={CLERK} halo={1.2}>
          <path d={PLAIN_CUTS + PLAIN_HAIR} transform={CLERK_T} fill={PAPER} />
        </Figure>

        {/* the path out from the porch */}
        <path d={PATH} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <path d={m.path} fill={INK} />

        {/* Rochester, blind, smiling, his arm round her shoulders */}
        <Figure parts={ROCHESTER}>
          <path d={FERNDEAN_HAIR_CUTS} transform={R_HT} fill={PAPER} />
          <path d={ROCHESTER_BLIND_SMILE_CUTS} transform={R_HT} fill={PAPER} />
        </Figure>
        <Figure parts={ROCHESTER_ARM} halo={0} />

        {/* Jane, leading him */}
        <Figure parts={JANE_BODY}>
          <JaneFace t={J_HT} hair={false} />
          <g transform={J_HT}>
            <path
              d={STRAW_BONNET}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.3}
              strokeLinejoin="round"
            />
            <path d={STRAW_BONNET_PLAIT} fill="none" stroke={INK} strokeWidth={0.9} />
            <path d={STRAW_BONNET_LINING} fill={INK} />
            <path d={STRAW_BONNET_TIES} fill={INK} stroke={PAPER} strokeWidth={0.6} />
          </g>
        </Figure>
        <Figure parts={JANE_ARM} halo={1.2} />
      </g>
    </>
  )
}

export const readerIMarriedHim: LinocutArt = { width: W, height: H, Draw: ReaderIMarriedHim }

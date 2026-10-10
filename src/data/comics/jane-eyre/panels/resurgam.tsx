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
  HEAD_HELEN,
  HOLD_HAND,
  HelenFace,
  JANE_GIRL_HAIR_COMBED,
  JANE_GIRL_HAIR_COMBED_CUTS,
  JaneGirl,
  LOOSE_HAND,
  handAt,
  headAt,
  line,
  type P,
  type Part,
} from './people'

/**
 * Chapter 9: "Resurgam", the fifth moment in the guide's timeline. Every
 * detail is from the held edition (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. The two friends meeting, and nothing after it: Jane has
 * crept to Miss Temple's room at night, and Helen, awake, has put back her
 * curtain to see her: "'Can it be you, Jane?' she asked, in her own gentle
 * voice." Helen's death is never drawn, captioned or described: not the two
 * girls asleep, not the morning, not the grave. The word on her stone is the
 * moment's name and is left to the guide.
 *
 * - "It might be two hours later, probably near eleven, when I ... rose
 *   softly, put on my frock over my night-dress, and, without shoes, crept
 *   from the apartment"; "the light of the unclouded summer moon, entering
 *   here and there at passage windows"; "I found the door slightly ajar ...
 *   I put it back and looked in". So the door at the left stands open on a
 *   passage pale with moonlight, and Jane is barefoot, the white hem of her
 *   night-dress showing under her dark frock.
 * - "Close by Miss Temple's bed, and half covered with its white curtains,
 *   there stood a little crib"; "the nurse I had spoken to in the garden sat
 *   in an easy-chair asleep; an unsnuffed candle burnt dimly on the table.
 *   Miss Temple was not to be seen". So the bed's white curtains hang over
 *   the crib, the nurse sleeps in her chair with her head fallen forward, and
 *   the one candle, its wick long, is the only light: its small flame is the
 *   spot colour, on the table between the nurse and the girls, well away from
 *   every face and hand.
 * - "She stirred herself, put back the curtain, and I saw her face, pale,
 *   wasted, but quite composed"; "she smiled as of old". So Helen lies raised
 *   on her pillow at the head of the crib, holding the curtain back with one
 *   hand, and turns her pale, thin face up to Jane, smiling. She is Helen as
 *   ./people.tsx cuts her: a head taller than Jane, her face paper, thin,
 *   with the deep-set eye.
 * - "I advanced; then paused by the crib side". So Jane stands at the head of
 *   the crib, leaning in, one hand on its rail, her head bent to look down at
 *   her friend's face: Jane as ./people.tsx cuts her, in her Lowood frock,
 *   her hair combed back. FIXED 10 October 2026: her head was tipped up and
 *   she looked level over Helen's head, and the alt text said her face was
 *   lifted to her friend's, though Helen lies below her.
 *
 * The nurse is not described: a plain woman in a cap and apron. The text
 * gives Jane no candle (she finds her way by the moon); the candle is the
 * room's own.
 *
 * Seeds: 1501 (the wall), 1502 (the floor), 1503 (the candle's light), 1504
 * (the moonlit passage).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 250
/** The candle's flame. */
const FLAME: P = [330, 160]

type Marks = {
  wall: string
  floor: string
  pools: string
  glow: string
  passage: string
  curtainFolds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The candle lights the room dimly; the open door lets in a little moon.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - FLAME[0], (y - FLAME[1]) * 1.2) / 230) * 0.8,
      clamp(1 - Math.hypot(x - 96, y - 150) / 120) * 0.4,
      0.04,
    )
  const wall = gougeField(rng(1501), { x0: 0, x1: W, y0: 4, y1: FLOOR - 6 }, light, {
    spacing: 7,
    len: [14, 50],
    gap: [8, 24],
    max: 3.4,
  })
  const r = rng(1502)
  let floor = ''
  const V: P = [430, 20]
  for (let xt = -760; xt < 1700; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      const L = light((xt + xb) / 2, 290)
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        (0.8 + t0 * 3) * (0.6 + L),
        (0.8 + t1 * 3) * (0.6 + L),
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  let pools = ''
  for (let y = FLOOR + 1; y < FLOOR + 12; y += 3)
    pools += gouge(0, y, W, y, 2.2 - (y - FLOOR) * 0.16)
  // The candle's dim light: short broken rays.
  const glow = rays(rng(1503), FLAME[0], FLAME[1], { from: 16, to: 62, every: 7, width: 2.2 })
  // The passage beyond the door, pale with moonlight: hatching that thins upwards.
  const rp = rng(1504)
  let passage = ''
  for (let y = 40; y < FLOOR; y += 5) {
    const x0 = 34 + between(rp, 0, 6)
    passage += gouge(x0, y, x0 + between(rp, 20, 50), y + 0.6, 0.5 + (y - 40) * 0.006)
  }
  // The folds of the white bed-curtains.
  let curtainFolds = ''
  for (const x of [584, 604, 626, 650, 678, 706, 738, 772, 808, 840])
    curtainFolds += `M${x} 44C${x - 3} 100 ${x + 3} 170 ${x - 2} 238`
  cached = { wall, floor, pools, glow, passage, curtainFolds }
  return cached
}

// ── The nurse, asleep in the easy-chair ─────────────────────────────────────

/** A plain woman's head, the eye shut in sleep. */
const HEAD_NURSE =
  'M-8 25C-10 19 -14.6 15 -15.6 5C-16.6 -9 -8 -20 2.6 -20C10.6 -20 15 -15.4 15.2 -9.6L15.6 -5.6L19.6 3L15.6 4.8L16 7.6L14.8 9.2L16 11.6C16 16.6 13 19.6 8.4 20.2L6.4 25Z'
const NURSE_CUTS =
  gouge(6, -7.2, 13.6, -7, 0.6) +
  gouge(7, -3, 13, -2.6, 0.55, 0.9) +
  gouge(10.4, 10.6, 14.8, 10.6, 0.45)
/** Her cap: plain linen over her hair. PAPER with an ink edge. */
const NURSE_CAP =
  'M13.6 -11C12.6 -19 6 -24.4 -1.6 -24.4C-12.4 -24.4 -20.4 -16.4 -20 -4.6C-19.8 3 -17.6 9 -14.2 13.4L-9.6 11.6C-12 7 -12.8 1.6 -12 -3C-10.8 -9.6 -5.8 -13.6 0.6 -14C5.6 -14.4 10 -13 13.6 -11Z'
const NURSE_T = headAt(1, [210, 160], 28, 1)
const NURSE: Part[] = [
  {
    d: 'M196 180C204 176 218 178 224 186L230 214C240 216 252 218 262 222C266 236 266 262 262 290L196 292C190 262 190 220 196 180Z',
  },
  { d: HEAD_NURSE, t: NURSE_T },
]

// ── Helen in the crib ───────────────────────────────────────────────────────

/** Helen, raised on her pillow at the head of the crib, facing left, her face lifted to Jane. */
const HELEN_T = headAt(-1, [512, 196], 18, 0.96)
/** Her near arm, out of the coverlet, holding the curtain back. Cut in paper: her night-dress sleeve. */
const HELEN_ARM: P[] = [
  [530, 222],
  [542, 206],
  [549, 190],
]
/**
 * The near edge of Miss Temple's white bed-curtain, put back: it hangs from
 * the rail, is gathered in Helen's hand, and falls again to the crib, so it
 * reads as the curtain she holds and not as a pole. FIXED 10 October 2026: it
 * was cut first as a thin sliver from the rail to her hand, and at panel size
 * she seemed to be holding up a stick.
 */
const DRAPE =
  'M566 38C562 84 556 136 550 182C552 196 562 212 574 228L604 228C598 176 600 100 606 38Z'
const DRAPE_FOLDS =
  'M574 42C568 92 560 140 553 180M586 42C580 96 570 144 557 182M598 42C594 100 584 150 562 184' +
  'M556 194C562 206 570 216 580 226M562 192C570 204 582 214 592 226'
const HELEN: Part[] = [
  // her shoulders on the pillow, in her white night-dress
  {
    d: 'M500 214C510 208 528 208 540 214L548 236L498 238Z',
    paper: true,
    edge: 1,
  },
  { d: HEAD_HELEN, t: HELEN_T },
  { d: JANE_GIRL_HAIR_COMBED, t: HELEN_T },
  { d: line(HELEN_ARM), w: 6.4, paper: true, edge: 1 },
  ...HOLD_HAND.map((q) => ({
    ...q,
    t: handAt(HELEN_ARM, -1, { parts: HOLD_HAND, scale: 0.86, rot: 10, flip: false }),
    paper: true,
    edge: 0.9,
  })),
]

/** Jane at the head of the crib, facing right, leaning in, one hand on its rail. */
const JANE_POSE = {
  facing: 1 as const,
  neck: [434, 176] as P,
  waist: [437, 206] as P,
  hemY: 268,
  head: { at: [444, 156] as P, rot: 14, scale: 0.9 },
  frock: { shoulder: 21, waistW: 16, front: 18, back: 20 },
  arm: 7.4,
  leg: 7.6,
  shoe: 0.82,
  near: {
    arm: [
      [438, 184],
      [452, 208],
      [470, 222],
    ] as P[],
    leg: [
      [438, 224],
      [442, 262],
      [446, 300],
    ] as P[],
    hand: { parts: HOLD_HAND, scale: 0.88, rot: 14 },
  },
  far: {
    arm: [
      [430, 185],
      [424, 210],
      [422, 234],
    ] as P[],
    leg: [
      [432, 224],
      [428, 262],
      [424, 300],
    ] as P[],
    hand: { parts: LOOSE_HAND, scale: 0.88 },
  },
}
/** The hem of her night-dress, white under her dark frock. */
const NIGHT_HEM = 'M417 266Q437 271 457 266L458 282Q437 287 416 282Z'
const NIGHT_HEM_FOLDS = 'M426 270L425 282M437 271L437 284M448 270L449 282'

function Resurgam({ uid }: ArtProps) {
  const m = marks()
  const id = { glow: `${uid}-glow` }
  return (
    <>
      <defs>
        <clipPath id={id.glow}>
          <circle cx={FLAME[0]} cy={FLAME[1]} r={62} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 190], push: 1.03 })}>
        {/* the wall and floor of Miss Temple's room, at night */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 8} width={W} height={8} fill={PAPER} />
        <rect x={0} y={FLOOR - 5} width={W} height={1.4} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.pools} fill={INK} />

        {/* the door, put back, on a passage pale with moonlight */}
        <rect x={26} y={30} width={102} height={FLOOR - 30} fill={PAPER} />
        <rect x={32} y={36} width={90} height={FLOOR - 36} fill={INK} />
        <path d={m.passage} fill={PAPER} />
        <path
          d={`M122 36L150 26L150 262L122 ${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M128 52L144 47L144 120L128 124ZM128 140L144 136L144 236L128 238Z"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the nurse's easy-chair, and the nurse asleep in it */}
        <path
          d="M180 136C190 126 220 126 232 138L236 290L176 292Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M188 146V280M206 140V280M222 146V280" stroke={PAPER} strokeWidth={0.9} />
        <path
          d="M176 292L178 312M234 290L232 312"
          stroke={INK}
          strokeWidth={5.6}
          strokeLinecap="round"
        />
        <Figure
          parts={NURSE}
          cuts={gouge(206, 196, 202, 286, 0.9, 0.6) + gouge(236, 222, 252, 222, 0.8)}
        >
          <path d={NURSE_CUTS} transform={NURSE_T} fill={PAPER} />
          <path d={NURSE_CAP} transform={NURSE_T} fill={PAPER} stroke={INK} strokeWidth={1} />
          {/* her apron, and her hands folded in her lap */}
          <path
            d="M224 222C236 222 250 224 260 228L262 286L234 288C232 266 228 240 224 222Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1}
          />
          <path
            d="M226 206C236 214 244 220 250 222"
            stroke={INK}
            strokeWidth={7}
            strokeLinecap="round"
            fill="none"
          />
          <path d="M244 218C250 214 258 216 260 222C258 228 250 228 246 226Z" fill={INK} />
        </Figure>
        <path d="M230 292C230 300 236 306 246 306L258 306L258 298L240 296L236 290Z" fill={INK} />

        {/* the table, and the unsnuffed candle burning dimly on it */}
        <g clipPath={`url(#${id.glow})`}>
          <path d={m.glow} fill={PAPER} />
        </g>
        <ellipse cx={330} cy={208} rx={30} ry={6} fill={PAPER} />
        <ellipse cx={330} cy={207} rx={27} ry={4} fill={INK} />
        <path d="M326 212L322 286H338L334 212Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M310 292L322 284H338L350 292Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M318 203H342L338 198H322Z" fill={PAPER} />
        <rect x={325} y={172} width={10} height={27} fill={PAPER} />
        <path d="M327 176V196" stroke={INK} strokeWidth={0.9} />
        <path d="M330 172V164" stroke={INK} strokeWidth={1.3} />
        <path
          className="lc-flicker"
          style={timing({ dur: 1.1 })}
          d="M330 166C325 161 326 154 330 146C334 154 335 161 330 166Z"
          fill={RED}
        />

        {/* Miss Temple's bed, its white curtains, and the little crib half under them */}
        <rect x={560} y={20} width={300} height={18} fill={INK} />
        <path d="M560 20H860M560 38H860" stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d="M590 38C620 42 700 42 760 40C800 40 840 40 860 38L860 240L584 240C580 180 582 100 590 38Z"
          fill={PAPER}
        />
        <path d={m.curtainFolds} fill="none" stroke={INK} strokeWidth={1.3} />
        {/* the crib: its frame, its pillow, its coverlet */}
        <path d="M466 228H644V244H466Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M466 210V304M644 220V304" stroke={INK} strokeWidth={6} strokeLinecap="round" />
        <path d="M466 210V304M644 220V304" stroke={PAPER} strokeWidth={1} />
        <path d="M470 244H640V256H470Z" fill={INK} />
        <path d="M472 300H640" stroke={INK} strokeWidth={4} />
        <path
          d="M478 216C490 208 512 208 524 214C530 222 528 232 520 236C506 238 488 238 476 234C472 228 472 222 478 216Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        {/* the near edge of the bed-curtain, put back and gathered in her hand */}
        <path d={DRAPE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={DRAPE_FOLDS} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
        {/* Helen, raised on her pillow, holding back the curtain */}
        <Figure parts={HELEN} halo={1.6}>
          <path d={JANE_GIRL_HAIR_COMBED_CUTS} transform={HELEN_T} fill={PAPER} />
          <HelenFace t={HELEN_T} />
        </Figure>
        {/* the coverlet over her */}
        <path
          d="M522 226C548 216 590 214 626 218C636 220 642 226 642 232L640 244L520 244Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path
          d="M540 232C560 226 590 224 620 226M556 238C580 234 604 234 630 236"
          fill="none"
          stroke={INK}
          strokeWidth={0.8}
        />

        {/* Jane, barefoot, at the head of the crib */}
        <JaneGirl
          pose={JANE_POSE}
          dress="night"
          eye="open"
          mouth="shut"
          paperOver={NIGHT_HEM}
          inkOver={NIGHT_HEM_FOLDS}
        />
      </g>
    </>
  )
}

export const resurgam: LinocutArt = { width: W, height: H, Draw: Resurgam }

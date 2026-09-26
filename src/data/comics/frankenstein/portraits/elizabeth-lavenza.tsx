import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  combedHair,
  hatch,
  once,
  placing,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Elizabeth Lavenza. Shelley describes her looks once, as the small child
 * Victor's mother finds in a cottage by the Lake of Como:
 *
 *   "this child was thin, and very fair. Her hair was the brightest living
 *   gold, and, despite the poverty of her clothing, seemed to set a crown of
 *   distinction on her head. Her brow was clear and ample, her blue eyes
 *   cloudless, and her lips and the moulding of her face so expressive of
 *   sensibility and sweetness, that none could behold her without looking on
 *   her as of a distinct species" (Chapter 1)
 *   "She continued with her foster parents, and bloomed in their rude abode,
 *   fairer than a garden rose among dark-leaved brambles." (Chapter 1)
 *
 * and, when Victor comes home to her in Chapter 7, only that the years have
 * kept that face and added to it:
 *
 *   "Time had altered her since I last beheld her; it had endowed her with
 *   loveliness surpassing the beauty of her childish years. There was the
 *   same candour, the same vivacity, but it was allied to an expression more
 *   full of sensibility and intellect." (Chapter 7)
 *
 * So she is drawn as the young woman Victor comes home to, with the child's
 * features the text gives: fair hair cut in PAPER, as the panels cut it
 * (../panels/people.tsx, GOLD_HAIR), swept up from a clear, high brow and
 * dressed high on the crown under a dark ribbon, "a crown of distinction",
 * then falling in long curls down her back; a clear, open eye; a gentle,
 * closed mouth, and no colour on it. The one spot of colour is the rose of
 * the simile: a single red rose among dark-leaved brambles at the foot of the
 * block, in front of her. The blue of her eyes cannot be printed and is left
 * to the words.
 *
 * Her dress is not described after childhood, so it is the plain dress of a
 * Genevese girl of the 1790s: a dark high-waisted gown and a white kerchief
 * crossed at the neck. Nothing here comes from a film or stage production.
 *
 * She is drawn facing right in her own 0..240 by 0..336 frame and flipped by
 * P to face left, towards the light and the rose.
 *
 * Seeds: 4401 for the ground, 4402 for the cuts in the figure.
 */

const P = placing(36, -8, 1.02, true)

/** A young woman's head in profile, facing right: a high, clear brow, a small nose, a soft chin. */
const HEAD = smooth([
  [80, 252, 1],
  [76, 214],
  [62, 184],
  [54, 150],
  [56, 112],
  [70, 78],
  [96, 56],
  [128, 48],
  [154, 56],
  [168, 74],
  [174, 96],
  [174.5, 110],
  [171.5, 118, 1],
  [176, 130],
  [181.5, 141, 1],
  [178, 145.5],
  [171.5, 147.5, 1],
  [172.5, 152],
  [171, 157.5, 1],
  [172.5, 162],
  [168.5, 168],
  [170.5, 176],
  [164.5, 186],
  [150, 191],
  [140, 198],
  [136, 218],
  [138, 252, 1],
])

/** Her fair hair: swept up from the brow, dressed high on the crown, and falling in curls behind. */
const HAIR_PTS: Knot[] = [
  [165, 72, 1],
  [164, 60],
  [157, 48],
  [142, 36],
  [120, 28],
  [96, 24],
  [70, 28],
  [50, 42],
  [40, 64],
  [40, 92],
  [36, 122],
  [30, 162],
  [26, 202],
  [30, 240],
  [42, 262],
  [58, 254],
  [62, 232],
  [70, 200],
  [78, 170],
  [88, 140],
  [98, 116],
  [112, 104],
  [128, 94],
  [146, 86],
  [158, 80],
]
const HAIR = smooth(HAIR_PTS)
/** The dark ribbon that binds the dressed hair on her crown. */
const RIBBON = 'M161 60C136 46 94 42 52 56L52 62C94 49 134 53 159 65Z'
/** Soft curls of the dressed hair above the ribbon, and at the temple: ink, on the pale hair. */
const CURLS =
  'M142 36q-6 -6 -12 -2q-4 5 2 8M120 28q-6 -6 -12 -2q-4 5 2 8M98 24q-6 -6 -12 -2q-4 5 2 8' +
  'M76 28q-6 -6 -12 -2q-4 5 2 8M56 38q-6 -4 -10 1q-2 6 4 7M152 44q-4 -5 -9 -2' +
  'M163 78q-5 1 -5 6q1 4 5 3M157 86q-5 1 -5 6q1 4 5 3'

const EAR = smooth([
  [106, 124],
  [99, 120],
  [94, 126],
  [94, 139],
  [98, 148],
  [104, 151],
  [109, 146],
  [110, 133],
])

/** The dark high-waisted gown over her shoulders. */
const GOWN = smooth([
  [-14, 340, 1],
  [-8, 298],
  [10, 268],
  [44, 250],
  [80, 242],
  [120, 246],
  [160, 252],
  [196, 268],
  [218, 298],
  [226, 340, 1],
])
/** The white kerchief crossed at her neck. */
const FICHU = smooth([
  [70, 240, 1],
  [108, 248],
  [140, 240, 1],
  [162, 248],
  [180, 266],
  [172, 292],
  [150, 310],
  [126, 300],
  [100, 276],
  [78, 258],
])

// ── The rose among brambles, in the plate's own coordinates ────────────────

const ROSE_C: Pt = [58, 276]
const ROSE = smooth([
  [44, 272],
  [48, 263],
  [58, 260],
  [69, 264],
  [72, 275],
  [67, 286],
  [57, 289],
  [47, 284],
])
const PETALS =
  'M52 272Q58 266 64 272Q60 280 54 278M56 272Q59 270 61 273M46 278Q52 286 62 285M48 268Q56 262 66 266'
/** A bramble leaf: a pointed oval along its midrib, from (x, y) at angle `a` and length `L`. */
function leaf(x: number, y: number, a: number, L: number): string {
  const c = Math.cos(a)
  const s = Math.sin(a)
  const w = L * 0.34
  const tip: Pt = [x + c * L, y + s * L]
  const m1: Pt = [x + c * L * 0.5 - s * w, y + s * L * 0.5 + c * w]
  const m2: Pt = [x + c * L * 0.5 + s * w, y + s * L * 0.5 - c * w]
  return `M${n(x)} ${n(y)}Q${n(m1[0])} ${n(m1[1])} ${n(tip[0])} ${n(tip[1])}Q${n(m2[0])} ${n(m2[1])} ${n(x)} ${n(y)}Z`
}
const LEAVES: [number, number, number, number][] = [
  [40, 282, deg(200), 26],
  [44, 296, deg(150), 24],
  [70, 290, deg(40), 24],
  [74, 270, deg(-20), 22],
  [60, 300, deg(95), 20],
  [30, 262, deg(250), 22],
  [92, 300, deg(10), 22],
  [20, 300, deg(170), 18],
]
const STEMS =
  'M12 312C30 300 40 292 50 282M58 312C60 300 60 294 58 290M100 312C88 300 78 292 68 284M18 250C26 262 36 270 46 274'

type Marks = {
  ground: string
  strands: string
  curls: string
  gown: string
  fichu: string
  cheek: string
  neck: string
  veins: string
  thorns: string
}

const marks = once<Marks>(() => {
  // Daylight from the left, where she looks; darker behind her.
  const ground = portraitGround(4401, (x, y) =>
    clamp(0.12 + (1 - x / 332) * 0.75 - Math.max(0, (y - 250) / 260)),
  )
  const r = rng(4402)

  // Fair hair cut in paper, so its strands are cut in ink: swept up from the
  // hairline to the crown, and waving down the curls behind.
  let strands = combedHair(r, HAIR_PTS, [104, 118], 170, [7, 14], 104)
  for (let i = 0; i < 16; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 16
    const x0 = 160 - t * 64
    const y0 = 80 + t * 36
    const x1 = 136 - t * 90
    const y1 = 62 + t * 12
    strands += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + 4)} ${n((y0 + y1) / 2 - 8 + between(r, -3, 3))} ${n(x1)} ${n(y1)}`
  }
  let curls = ''
  for (let i = 0; i < 7; i++) {
    const x0 = 40 + i * 5.4 + between(r, -1, 1)
    const ph = between(r, 0, 6)
    const pts: Pt[] = []
    for (let y = 70 + i * 6; y <= 252 - i * 5; y += 8)
      pts.push([x0 + Math.sin(y / 11 + ph) * 3.4 - (y - 70) * (0.07 - i * 0.012), y])
    curls += smooth(pts, false)
  }

  // The folds of the gown, and of the kerchief.
  const gown =
    gouge(20, 280, 6, 334, 1.8, 2) +
    gouge(56, 262, 50, 334, 1.4, 1.5) +
    gouge(196, 290, 208, 334, 1.8, -1.5)
  const fichu = 'M110 252C122 262 136 270 154 272M104 262C118 278 136 290 152 296M144 244L150 262'

  // The soft shade at the back of the cheek, and under the jaw.
  const cheek = 'M124 150C128 166 138 178 150 186'
  const neck = hatch(r, { x0: 104, x1: 138, y0: 199, y1: 201 }, 4, 0.1)

  // The bramble: paper veins down each leaf and thorns along the stems.
  let veins = ''
  for (const [x, y, a, L] of LEAVES)
    veins += gouge(x, y, x + Math.cos(a) * L * 0.85, y + Math.sin(a) * L * 0.85, 0.6)
  let thorns = ''
  for (const [x, y] of [
    [22, 305],
    [36, 294],
    [59, 302],
    [88, 302],
    [78, 293],
    [26, 258],
  ] as Pt[])
    thorns += `M${x} ${y}l${n(between(r, -4, -2))} ${n(between(r, -5, -3))}l${n(between(r, 3, 5))} 1.6Z`

  return { ground, strands, curls, gown, fichu, cheek, neck, veins, thorns }
})

function ElizabethLavenza({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-el-head`
  const hairClip = `${uid}-el-hair`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        {/* the ink halo that lifts her off the ground */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={GOWN} />
          <path d={HEAD} />
          <path d={HAIR} />
        </g>
        <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.gown} fill={PAPER} />
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.cheek} strokeWidth={1} />
          <path d={m.neck} strokeWidth={1} />
        </g>
        <path d={FICHU} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path d={m.fichu} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        {/* "the brightest living gold": the hair in paper, its strands in ink */}
        <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.strands} strokeWidth={0.85} />
          <path d={m.curls} strokeWidth={1} />
        </g>
        <path d={CURLS} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
        <path d={RIBBON} fill={INK} stroke={PAPER} strokeWidth={1} />
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M104 128C100 130 99 139 101 143" strokeWidth={1} />
          {/* a fine brow over a clear, open eye */}
          <path d="M146 99Q156 94 167 98.5" strokeWidth={1.9} />
          <path d="M150 110Q157 104.5 165 108.5" strokeWidth={2} />
          <path d="M151.5 113.5Q157.5 117 164 112.5" strokeWidth={LINE.fine} />
          <path d="M165 108.5L167.5 106.8M163.4 107L165.4 104.8" strokeWidth={0.9} />
          {/* the nostril, and a gentle closed mouth */}
          <path d="M175.5 144C172 142.5 172 138 175.5 136.5" strokeWidth={1.3} />
          <path d="M171 157.8L163 158.4Q161 157.6 160.4 156" strokeWidth={1.6} />
          <path d="M168.5 163Q166 164.2 163.5 163.4" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={158.4} cy={110.6} r={2.4} fill={INK} />
        <circle cx={159.2} cy={109.9} r={0.8} fill={PAPER} />
      </g>
      {/* "fairer than a garden rose among dark-leaved brambles" */}
      <path d={STEMS} fill="none" stroke={PAPER} strokeWidth={4.4} strokeLinecap="round" />
      <path d={STEMS} fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      <path d={m.thorns} fill={INK} stroke={PAPER} strokeWidth={0.8} />
      {LEAVES.map(([x, y, a, L]) => (
        <path
          key={`${x}-${y}`}
          d={leaf(x, y, a, L)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
      ))}
      <path d={m.veins} fill={PAPER} />
      <path d={ROSE} fill={RED} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={PETALS} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <InnerRule />
    </>
  )
}

export const elizabethLavenzaArt: LinocutArt = { width: PW, height: PH, Draw: ElizabethLavenza }

const HAIR_AT = P.to(40, 176)
const CROWN_AT = P.to(96, 26)
const BROW_AT = P.to(164, 84)
/** The cheek, reached from below the jaw, so the marker's line keeps clear of the mouth. */
const FACE_AT = P.to(128, 150)

export const elizabethLavenza: Portrait = {
  name: 'Elizabeth Lavenza',
  art: elizabethLavenzaArt,
  alt: 'A linocut portrait of Elizabeth Lavenza as a young woman, in profile, facing left. Her fair hair, cut pale, is swept up from a high, clear forehead and dressed high on her crown under a dark ribbon, then falls in long waving curls down her back. Her eye is clear and open, her nose small and her mouth gentle and closed. She wears a dark high-waisted gown with a white kerchief crossed at the neck. In front of her, at the lower left, a single rose printed in red grows among dark, thorny bramble leaves. Five numbered red markers point to her hair, the dressed crown of her head, her brow, her face and the rose.',
  describedBy: [
    { phrase: 'Her hair was the brightest living gold', at: [304, 214], to: HAIR_AT },
    {
      phrase: 'seemed to set a crown of distinction on her head',
      at: [CROWN_AT[0] + 60, 30],
      to: CROWN_AT,
    },
    { phrase: 'Her brow was clear and ample', at: [BROW_AT[0] - 60, BROW_AT[1] - 30], to: BROW_AT },
    {
      phrase: 'loveliness surpassing the beauty of her childish years',
      at: [118, 216],
      to: FACE_AT,
    },
    { phrase: 'fairer than a garden rose among dark-leaved brambles', at: [112, 296], to: ROSE_C },
  ],
  where: 'Chapters 1 and 7',
  note: 'Victor’s mother brings her home as “a pretty present” for her son, and he looks on her as “mine to protect, love, and cherish”. He describes her as heaven-sent, never quite as a person, and she is the one he fails to protect.',
  artNote:
    'Shelley describes her looks only as a child, in Chapter 1; in Chapter 7 time has added “loveliness”, so the young woman keeps the child’s fair hair and clear brow. The print cannot show blue, so her eyes are left to the words.',
}

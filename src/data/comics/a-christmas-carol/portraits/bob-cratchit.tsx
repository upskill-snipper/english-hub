import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, portraitGround } from './common'
import { TIM_HEAD, TimHead } from './tiny-tim'

/**
 * Bob Cratchit, as Dickens describes him coming home from church in Stave
 * Three, and nothing else:
 *
 *   "So Martha hid herself, and in came little Bob, the father, with at least
 *   three feet of comforter exclusive of the fringe, hanging down before him;
 *   and his threadbare clothes darned up and brushed, to look seasonable; and
 *   Tiny Tim upon his shoulder."
 *
 * And from Stave One, the colour of the comforter: "the clerk put on his
 * white comforter".
 *
 * So: a small, plain man in profile, facing right as he comes in, bare-headed
 * because Tim has a hand on his head; the white comforter wound once round
 * his neck and its long ends hanging down in front of him to the fringe; a
 * dark coat mended with darns, cut as small woven squares; and Tiny Tim
 * sitting on his near shoulder, one hand on his father's head and his little
 * crutch in the other, one leg hanging down his father's chest in its iron
 * frame, his father's hand holding it steady. Tim's own portrait draws him as
 * the next sentence describes him.
 *
 * Bob's face and hair are not described, so they are plain. No spot colour is
 * printed: nothing in the passage is red. Nothing here comes from a film or
 * stage production.
 *
 * Seeds: 1225 for the ground, 1226 for the cuts in the figures.
 */

// ── Bob ───────────────────────────────────────────────────────────────────

const BOB_HEAD =
  'M182 104C200 104 212 114 216 128C218 136 218 142 217 146C218 149 218 151 217 153L226 166C228 169 226 172 222 172C220 172 219 173 219 174C220 177 220 179 219 181C218 182 218 183 219 184C219 187 218 189 217 190C218 195 216 199 210 200C200 202 190 198 184 194C176 190 168 186 162 178C150 162 150 128 160 114C166 108 174 104 182 104Z'
const BOB_HAIR =
  'M214 122C206 108 192 102 178 102C164 104 154 114 152 130C150 146 154 164 162 178C166 170 170 160 172 150C176 138 186 128 196 124C204 122 210 122 214 122Z'
const BOB_EAR = 'M180 142C172 142 168 150 170 158C172 164 176 166 182 165C180 158 181 150 180 142Z'
const BOB_NECK = 'M170 186L168 218L210 218L208 196Z'
const BOB_COAT = 'M152 206C130 214 116 232 112 262L108 322L252 322L248 264C246 238 236 218 214 208Z'
/** His near arm, bent up to hold Tim's leg at the ankle. */
const BOB_ARM: Pt[] = [
  [150, 222],
  [138, 248],
  [140, 272],
  [158, 276],
  [174, 270],
]
const BOB_HAND = 'M166 262C172 256 184 258 186 266C188 272 182 278 174 278C168 278 162 272 166 262Z'

/** The comforter: wound round his neck, the two long ends hanging before him. */
const WRAP = 'M164 196C182 206 204 210 218 200L222 220C204 230 180 228 160 216Z'
const END_NEAR: Pt[] = [
  [206, 214],
  [210, 240],
  [212, 268],
  [214, 298],
]
const END_FAR: Pt[] = [
  [218, 212],
  [226, 238],
  [232, 266],
  [236, 292],
]

// ── Tiny Tim, sitting on his father's shoulder ────────────────────────────

/** Tim's own head, from his portrait, set small on his body by TIM_HEAD_PLACE. */
const TIM_HEAD_PLACE = 'translate(46 42) scale(0.62)'
/** A small jacket, sitting on the shoulder, in front of his father's head. */
const TIM_BODY =
  'M120 138C132 133 148 133 158 139C162 152 164 170 164 186L166 208L122 210C116 190 116 158 120 138Z'
const TIM_ARM: Pt[] = [
  [152, 146],
  [162, 132],
  [172, 118],
  [178, 110],
]
const TIM_HAND = 'M172 106C176 100 186 98 194 102C196 105 192 108 186 109C180 111 174 111 172 106Z'
const TIM_FAR_HAND =
  'M106 168C110 162 118 164 120 170C120 176 114 178 108 176C104 174 104 171 106 168Z'
/** His little crutch, held up in his other hand. */
const CRUTCH =
  'M110 118L114 118L116 226L112 226ZM100 116C106 112 118 112 124 116L123 121C117 118 107 118 101 121Z'
const TIM_THIGH: Pt[] = [
  [142, 202],
  [156, 206],
  [170, 210],
]
const TIM_SHIN: Pt[] = [
  [170, 208],
  [171, 228],
  [172, 248],
  [173, 262],
]
const TIM_BOOT = 'M164 258C170 254 180 256 184 262C186 268 180 272 170 272C164 272 160 266 164 258Z'

/** A darn: a small square of woven cuts, where the cloth was mended. */
function darn(x: number, y: number, s: number, a: number): string {
  const c = Math.cos(a)
  const si = Math.sin(a)
  const P = (u: number, v: number) => `${n(x + u * c - v * si)} ${n(y + u * si + v * c)}`
  let d = ''
  for (let i = 0; i <= 4; i++) {
    const t = -s + (i * 2 * s) / 4
    d += `M${P(t, -s)}L${P(t, s)}M${P(-s, t)}L${P(s, t)}`
  }
  return d
}
const DARNS: [number, number, number, number][] = [
  [138, 256, 6.5, 0.3],
  [234, 294, 7.5, -0.1],
  [124, 292, 6.5, 0.1],
  [196, 300, 6, 0.2],
]

type Marks = {
  ground: string
  bobHair: string
  coat: string
  knit: string
  fringe: string
  ends: string
  arm: string
  timArm: string
  thigh: string
  shin: string
}

const marks = once<Marks>(() => {
  // Lit from the right, the way he is coming in: the room's fire.
  const ground = portraitGround(1225, (x) => 0.1 + (x / PW) * 0.85)
  const r = rng(1226)

  let bobHair = ''
  for (let i = 0; i < 14; i++) {
    const y0 = 110 + i * 4.5 + between(r, -1, 1)
    bobHair += gouge(
      206 - i * 3.5,
      y0 - i,
      162 + between(r, 0, 6),
      y0 + 10 + i * 1.5,
      between(r, 0.5, 0.9),
    )
  }

  // Folds of the coat; it is brushed, so the cuts are few and clean.
  const coat =
    gouge(122, 262, 116, 318, 1.8, 1.5) +
    gouge(244, 270, 248, 318, 1.6, -1) +
    gouge(186, 284, 188, 318, 1) +
    // Tim's jacket
    gouge(130, 150, 128, 200, 0.9) +
    gouge(148, 152, 152, 196, 0.8)

  const ends = ribbon(END_NEAR, 15, 0, true) + ribbon(END_FAR, 15, 0, true)
  // The knit of the comforter: ribs across the wrap and down both ends.
  let knit = ''
  for (let i = 0; i < 10; i++) {
    const x = 170 + i * 5.2
    knit += `M${n(x)} ${n(204 + i * 0.6)}L${n(x - 2)} ${n(222 + i * 0.2)}`
  }
  for (const end of [END_NEAR, END_FAR])
    for (let i = 0; i < end.length - 1; i++) {
      const [ax, ay] = end[i]
      const [bx, by] = end[i + 1]
      for (let t = 0; t < 1; t += 0.28) {
        const x = ax + (bx - ax) * t
        const y = ay + (by - ay) * t
        knit += `M${n(x - 6)} ${n(y)}L${n(x + 6)} ${n(y + 1)}`
      }
    }
  // "exclusive of the fringe"
  let fringe = ''
  for (const [x, y] of [END_NEAR[END_NEAR.length - 1], END_FAR[END_FAR.length - 1]])
    for (let i = -3; i <= 3; i++)
      fringe += `M${n(x + i * 2.1)} ${n(y + 1)}L${n(x + i * 2.3 + between(r, -1, 1))} ${n(y + 10)}`

  const arm = ribbon(BOB_ARM, 20, 0.2, false)
  const timArm = ribbon(TIM_ARM, 9, 0.2, false)
  const thigh = ribbon(TIM_THIGH, 14, 0.1, false)
  const shin = ribbon(TIM_SHIN, 11, 0, true)

  return { ground, bobHair, coat, knit, fringe, ends, arm, timArm, thigh, shin }
})

/** The pair are drawn at 1, then set a little larger and further right. */
const FIGURE_PLACE = 'translate(186 318) scale(1.1) translate(-180 -318)'

function BobCratchitPortrait(_: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={FIGURE_PLACE}>
        {/* The ink halo round father and son. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={BOB_HEAD} />
          <path d={BOB_COAT} />
          <path d={TIM_HEAD} transform={TIM_HEAD_PLACE} />
          <path d={TIM_BODY} />
          <path d={CRUTCH} />
          <path d={TIM_FAR_HAND} />
          <path d={m.ends} />
        </g>
        <path
          d={BOB_COAT}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={BOB_NECK} fill={PAPER} />
        <path
          d={BOB_HEAD}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinejoin="round"
        />
        <path d={BOB_HAIR} fill={INK} />
        <path d={m.bobHair} fill={PAPER} />
        <path d={BOB_EAR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* a plain, mild face: brow, eye, nostril, the fold of the cheek, a smile */}
          <path d="M198 136Q206 132 214 136" strokeWidth={2.6} />
          <path d="M199.5 144.5Q205.5 141 211.5 144.5" strokeWidth={2} />
          <path d="M200.5 149Q206 150.5 211 148" strokeWidth={LINE.hairline} />
          <path d="M222 166C219 164 216 165 216 168" strokeWidth={1.5} />
          <path d="M204 158Q206 170 213 176" strokeWidth={LINE.fine} />
          <path d="M219 184Q214 186.5 209.5 183" strokeWidth={1.6} />
          <path d="M208 194Q212 196 215 194" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={208.4} cy={145.6} r={2.4} fill={INK} />
        {/* "at least three feet of comforter exclusive of the fringe" */}
        <path d={WRAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.ends} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.knit} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d={m.fringe} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
        {/* "his threadbare clothes darned up and brushed" */}
        <path d={m.arm} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.hairline}>
          {DARNS.map(([x, y, s, a]) => (
            <path key={`${x}-${y}`} d={darn(x, y, s, a)} />
          ))}
        </g>
        {/* "Tiny Tim upon his shoulder": his crutch, his jacket, his head. */}
        <path d={CRUTCH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={TIM_BODY} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
        <path
          d={TIM_BODY}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={TIM_FAR_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g transform={TIM_HEAD_PLACE}>
          <path d={TIM_HEAD} fill={INK} stroke={INK} strokeWidth={8} />
          <TimHead />
        </g>
        {/* His hand on his father's head. */}
        <path d={m.timArm} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={TIM_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M180 103L186 105M183 101L190 103"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        {/* His leg hanging over his father's shoulder, in its iron frame:
            the stockinged shin is pale on the dark coat, with a bar down
            each side of it, strapped at the calf and above the ankle. */}
        <path
          d={m.thigh}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.shin} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M164 212L166 258M178 211L180 258"
          fill="none"
          stroke={PAPER}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <path
          d="M164 212L166 258M178 211L180 258"
          fill="none"
          stroke={INK}
          strokeWidth={2.2}
          strokeLinecap="round"
        />
        <path d="M163 228L180 227M164 246L181 245" fill="none" stroke={INK} strokeWidth={3} />
        <path d={TIM_BOOT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={BOB_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M170 264Q176 262 182 265M169 270Q176 268 182 271"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
      </g>
      <InnerRule />
    </>
  )
}

export const bobCratchitArt: LinocutArt = { width: PW, height: PH, Draw: BobCratchitPortrait }

export const bobCratchitPortrait: Portrait = {
  name: 'Bob Cratchit',
  art: bobCratchitArt,
  alt: "A linocut portrait of Bob Cratchit coming home from church, drawn from Dickens's description in Stave Three: a small, plain man in profile, facing right, with short hair and a mild smile. A long white knitted comforter is wound round his neck, and its two ends hang down in front of him almost to his knees, each ending in a fringe. His dark coat is neat but mended, with small woven squares of darning on the sleeve, the back and the front. Tiny Tim sits on his shoulder, a small boy in a dark jacket with one hand resting on his father's hair and his little crutch held up in the other. One of Tim's legs hangs down over his father's chest in an iron frame, and Bob's hand holds it steady at the ankle. Four numbered red markers point to Bob, his comforter, the darns in his coat and Tiny Tim.",
  describedBy: [
    { phrase: 'little Bob, the father', at: [284, 128], to: [240, 150] },
    {
      phrase: 'at least three feet of comforter exclusive of the fringe, hanging down before him',
      at: [290, 268],
      to: [252, 286],
    },
    { phrase: 'his threadbare clothes darned up and brushed', at: [70, 260], to: [124, 290] },
    { phrase: 'Tiny Tim upon his shoulder', at: [84, 92], to: [130, 110] },
  ],
  where: 'Stave Three',
  passage:
    'So Martha hid herself, and in came little Bob, the father, with at least three feet of comforter exclusive of the fringe, hanging down before him; and his threadbare clothes darned up and brushed, to look seasonable; and Tiny Tim upon his shoulder.',
  note: 'Bob is poor and makes the best of it: his clothes are mended and brushed for the day. Dickens hardly describes him at all; we know him by what he wears and whom he carries.',
}

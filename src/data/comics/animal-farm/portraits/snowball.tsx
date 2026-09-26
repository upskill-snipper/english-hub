import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, portraitGround, smooth, type Knot } from './common'

/**
 * Snowball, from the two places Orwell shows what he is, and nothing else:
 *
 *   "Snowball was a more vivacious pig than Napoleon, quicker in speech and
 *   more inventive" (Chapter 2)
 *
 *   "Snowball used as his study a shed which had once been used for
 *   incubators and had a smooth wooden floor, suitable for drawing on. ...
 *   With his books held open by a stone, and with a piece of chalk gripped
 *   between the knuckles of his trotter, he would move rapidly to and fro,
 *   drawing in line after line ... Gradually the plans grew into a
 *   complicated mass of cranks and cog-wheels" (Chapter 5)
 *
 * So: a young pale pig, close to, standing on the smooth dark floor of the
 * shed with his head down over his work, his ears up and his eye open and
 * bright, one front trotter lifted with the chalk gripped in it, drawing a
 * fresh line into the plans. The plans are white chalk on the black floor,
 * as the panel of the same moment draws them (../panels/the-windmill-plans
 * .tsx): cog-wheels, the shafts and cranks between them, ruled lines. Two
 * of his books lie open beyond them, side by side, held down by a stone
 * laid across both. Light comes in from the
 * shed's window, high on the left. He is cut in PAPER, as the figure kit cuts
 * him (../panels/people.tsx): the text gives him no colour, and a pale pig is
 * told from Napoleon, "the only Berkshire", at a glance. No tushes: he is a
 * young boar. Nothing here comes from a film or stage production.
 *
 * The head is drawn level in its own frame and carried into the plate by
 * `at`, lowered over the work.
 *
 * Seeds: 5401 for the wall, 5402 for the cuts in the figure, 5404 for the
 * window's light.
 */

/** Where the wall meets the floor. */
const FLOOR = 150

/** The head's frame to the plate's: the poll at (156, 104), the snout 32 degrees down. */
const POLL: Pt = [156, 104]
const TILT = deg(32)
function at(x: number, y: number): Pt {
  const c = Math.cos(TILT)
  const s = Math.sin(TILT)
  return [
    Math.round((POLL[0] + x * c - y * s) * 10) / 10,
    Math.round((POLL[1] + x * s + y * c) * 10) / 10,
  ]
}
const place = (pts: Knot[]): Knot[] =>
  pts.map((p) => {
    const [x, y] = at(p[0], p[1])
    return p[2] ? [x, y, 1] : [x, y]
  })

/** The head, level: poll, forehead, snout, the underside of the jaw, the jowl. */
const HEAD: Knot[] = place([
  [-10, -4],
  [20, -8],
  [52, -4],
  [80, 4],
  [100, 10, 1],
  [108, 22],
  [106, 38, 1],
  [96, 42],
  [84, 50],
  [62, 58],
  [36, 60],
  [14, 54],
  [-2, 36],
])
/** The snout's flat disc. */
const SNOUT = smooth(
  place([
    [100, 10],
    [108, 12],
    [113, 24],
    [111, 38],
    [106, 40],
    [103, 30],
  ]),
)
/** The body, standing, the rump running out of the block at the left. */
const BODY: Knot[] = [
  [0, 150, 1],
  [36, 128],
  [84, 114],
  [128, 104],
  at(10, 10),
  at(20, 56),
  [170, 206],
  [158, 226],
  [130, 236],
  [90, 238],
  [44, 234],
  [0, 232, 1],
]
/** The ears, pricked up. */
const EAR_NEAR = smooth([
  [156, 108],
  [162, 86],
  [182, 64, 1],
  [186, 88],
  [180, 112],
])
const EAR_FAR = smooth([
  [136, 106],
  [140, 84],
  [154, 62, 1],
  [160, 84],
  [158, 104],
])
/**
 * The legs: short and tapering, a trotter at the foot of each. The far
 * foreleg and a hind leg are planted; the near foreleg is lifted, bent at the
 * knee, to hold the chalk to the floor.
 */
const LEG_FAR = smooth([
  [106, 222],
  [128, 222],
  [124, 250],
  [122, 262],
  [110, 262],
  [108, 248],
])
const LEG_HIND = smooth([
  [14, 216],
  [46, 222],
  [40, 244],
  [38, 262],
  [24, 262],
  [22, 244],
])
const LEG_NEAR = smooth([
  [140, 200],
  [166, 204],
  [172, 226],
  [192, 238],
  [196, 250],
  [184, 252],
  [160, 240],
  [146, 222],
])
/** The near trotter, held down to the floor, the chalk gripped in its cleft. */
const TROTTER =
  'M188 238C198 236 208 242 212 252C212 258 204 260 198 258L186 254C182 248 184 242 188 238Z'
const CHALK = 'M197 248L212 264L208 267L194 251Z'
const CHALK_TIP: Pt = [210, 266]

/** A cog-wheel on the floor, seen in perspective: toothed rim, hub and spokes. */
function cog(cx: number, cy: number, rx: number, ry: number, teeth: number, phase = 0): string {
  const pt = (a: number, k: number): string =>
    `${n(cx + Math.cos(a) * rx * k)} ${n(cy + Math.sin(a) * ry * k)}`
  const p = (Math.PI * 2) / teeth
  let d = ''
  for (let i = 0; i < teeth; i++) {
    const a = phase + i * p
    d +=
      (i === 0 ? `M${pt(a, 1)}` : '') +
      `L${pt(a + p * 0.1, 1.18)}L${pt(a + p * 0.4, 1.18)}L${pt(a + p * 0.5, 1)}L${pt(a + p, 1)}`
  }
  d += 'Z'
  // hub, and four spokes
  d += `M${pt(0, 0.22)}A${n(rx * 0.22)} ${n(ry * 0.22)} 0 1 1 ${pt(Math.PI, 0.22)}A${n(rx * 0.22)} ${n(ry * 0.22)} 0 1 1 ${pt(0, 0.22)}`
  for (let k = 0; k < 4; k++) {
    const a = phase + (k * Math.PI) / 2 + 0.3
    d += `M${pt(a, 0.22)}L${pt(a, 0.86)}`
  }
  return d
}

type Marks = {
  wall: string
  window: string
  plans: string
  plansFar: string
  hide: string
  shade: string
  jowl: string
}

const marks = once<Marks>(() => {
  // The shed's wall, lit from its window high on the left.
  const wall = portraitGround(5401, (x, y) =>
    y > FLOOR - 4 ? 0 : clamp(0.9 - Math.hypot(x - 50, y - 40) / 260),
  )
  const window = rays(rng(5404), 50, 40, { from: 26, to: 70, every: 10, width: 2.2 })
  // The plans, in chalk: near cog-wheels and their shafts heavier, far ones
  // lighter, and the crank and the ruled lines between them.
  const plans =
    cog(262, 280, 58, 20, 16, 0.2) +
    cog(296, 228, 24, 9, 10, 0.5) +
    'M236 232L272 228M296 237L278 262M188 290L210 272L224 290L240 270' +
    'M40 290L150 296M60 300L120 304M150 280L196 268'
  const plansFar =
    cog(212, 176, 22, 7, 9, 0.1) +
    cog(118, 164, 16, 5, 8) +
    'M134 166L190 174M234 178L244 190M60 174L100 168'
  const r = rng(5402)
  // The pale hide, modelled only in its shadows: long broken lines round the
  // barrel of the body, under the belly and away from the window, and a few
  // bristles standing off the ridge of his back.
  let hide = ''
  for (let i = 0; i < 26; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 26
    const x = 6 + t * 124
    const y = 148 - t * 40
    hide += `M${n(x)} ${n(y)}l${n(between(r, -1, 2))} ${n(-between(r, 4, 7))}`
  }
  let shade = ''
  for (let rad = 50; rad < 120; rad += 7)
    shade += arcDashes(r, 80, 150, rad, deg(28), deg(128), [12, 28], [4, 10])
  let jowl = ''
  const [jx, jy] = at(40, 34)
  for (let rad = 12; rad < 30; rad += 4.5)
    jowl += arcDashes(r, jx, jy, rad, deg(30), deg(140), [8, 16], [2, 5])
  return { wall, window, plans, plansFar, hide, shade, jowl }
})

function SnowballPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sb-body`
  const HEAD_D = smooth(HEAD)
  const BODY_D = smooth(BODY)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={BODY_D} />
          <path d={HEAD_D} />
        </clipPath>
      </defs>
      <path d={m.wall} fill={PAPER} />
      {/* the window, and its light across the wall */}
      <path d={m.window} fill={PAPER} />
      <rect x={34} y={22} width={32} height={34} fill={PAPER} stroke={INK} strokeWidth={2} />
      <path d="M50 22L50 56M34 39L66 39" stroke={INK} strokeWidth={2.4} />
      {/* the smooth floor, and the plans chalked on it */}
      <path d={`M8 ${FLOOR}L${PW - 8} ${FLOOR}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.plansFar} fill="none" stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <path d={m.plans} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
      {/* his books, two of them lying open side by side, held down by a stone laid across both */}
      <g stroke={INK} strokeWidth={1.2} strokeLinejoin="round">
        <path d="M232 168L262 160L294 166L294 180L262 174L232 182Z" fill={PAPER} />
        <path d="M262 160L262 174" fill="none" />
        <path
          d="M238 172L256 167M238 177L256 172M268 166L288 170M268 171L288 175"
          fill="none"
          strokeWidth={0.8}
        />
        <path d="M266 186L292 178L322 184L322 198L292 192L266 200Z" fill={PAPER} />
        <path d="M292 178L292 192" fill="none" />
        <path
          d="M272 190L288 185M272 195L288 190M298 186L316 189M298 191L316 194"
          fill="none"
          strokeWidth={0.8}
        />
        <path
          d="M270 184C270 174 284 170 292 176C298 182 292 190 280 190C274 190 270 188 270 184Z"
          fill={INK}
          stroke={PAPER}
        />
      </g>
      <path d="M276 178Q282 174 288 177" fill="none" stroke={PAPER} strokeWidth={1.3} />
      {/* the ink halo that lifts him off the wall and the floor */}
      <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
        <path d={BODY_D} />
        <path d={HEAD_D} />
        <path d={EAR_FAR} />
        <path d={EAR_NEAR} />
      </g>
      <g fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round">
        <path d={LEG_FAR} />
        <path d={LEG_HIND} />
      </g>
      <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
        <path d="M108 258L126 258L128 270L106 270Z" />
        <path d="M22 258L40 258L42 270L20 270Z" />
      </g>
      <path d="M117 260L117 270M31 260L31 270" stroke={PAPER} strokeWidth={1.2} />
      <path d={EAR_FAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={BODY_D} fill={PAPER} />
      <path d={HEAD_D} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.hide} strokeWidth={LINE.hairline} />
        <path d={m.shade} strokeWidth={LINE.hairline} />
        <path d={m.jowl} strokeWidth={1} />
      </g>
      {/* where the head turns from the shoulder */}
      <path
        d={smooth([at(-6, 30), at(4, 50), at(18, 62)], false)}
        fill="none"
        stroke={INK}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <path d={EAR_NEAR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M166 104Q172 80 180 60" fill="none" stroke={INK} strokeWidth={1} />
      {/* the snout and the mouth */}
      <path d={SNOUT} fill={PAPER} stroke={INK} strokeWidth={1.8} />
      <g fill={INK}>
        {[at(108, 20), at(108, 32)].map(([x, y]) => (
          <ellipse
            key={`${x}`}
            cx={x}
            cy={y}
            rx={1.6}
            ry={2.8}
            transform={`rotate(32 ${x} ${y})`}
          />
        ))}
      </g>
      <path
        d={smooth([at(104, 40), at(92, 44), at(80, 44)], false)}
        fill="none"
        stroke={INK}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
      {/* a bright, open eye */}
      <g transform={`translate(${at(48, 12).join(' ')}) rotate(32)`}>
        <path d="M-7 0Q0 -7 8 -1Q1 5 -7 0Z" fill={PAPER} stroke={INK} strokeWidth={1.6} />
        <circle cx={1.5} cy={-0.8} r={2.8} fill={INK} />
        <circle cx={2.5} cy={-1.8} r={0.9} fill={PAPER} />
        <path
          d="M-8 -6Q1 -12 10 -5"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      {/* the near foreleg, lifted, the chalk gripped in the trotter */}
      <path d={LEG_NEAR} fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round" />
      <path d={LEG_NEAR} fill={PAPER} />
      <path d="M150 214Q160 222 166 232" fill="none" stroke={INK} strokeWidth={1} />
      <path d={TROTTER} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={CHALK} fill={PAPER} stroke={INK} strokeWidth={1} strokeLinejoin="round" />
      <path
        d={`M${CHALK_TIP[0]} ${CHALK_TIP[1]}Q226 272 238 270`}
        fill="none"
        stroke={PAPER}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <InnerRule />
    </>
  )
}

export const snowballArt: LinocutArt = { width: PW, height: PH, Draw: SnowballPortrait }

export const snowball: Portrait = {
  name: 'Snowball',
  art: snowballArt,
  alt: 'A linocut portrait of Snowball at work on the windmill plans, in Chapter 5: a young, pale pig standing on the smooth dark floor of a shed, facing right, his head lowered over his work, his ears pricked up and his eye open and bright. One front trotter is lifted and holds a stick of white chalk to the floor, drawing a fresh line. All over the black floor the plans are chalked in white: cog-wheels in perspective, the shafts and cranks between them, and ruled lines. Beyond them two of his books lie open side by side, held down by a stone laid across both, and a small window lights the wall behind him. Four numbered red markers point to his face, the chalk, the books and the plans.',
  describedBy: [
    { phrase: 'a more vivacious pig than Napoleon', at: [236, 70], to: at(50, 8) },
    {
      phrase: 'a piece of chalk gripped between the knuckles of his trotter',
      at: [168, 292],
      to: [204, 256],
    },
    { phrase: 'his books held open by a stone', at: [300, 136], to: [284, 178] },
    { phrase: 'a complicated mass of cranks and cog-wheels', at: [300, 300], to: [282, 284] },
  ],
  where: 'Chapters 2 and 5',
  note: 'Snowball is the planner and the speaker, and the windmill is his idea. Once the dogs have driven him out, the windmill is claimed for Napoleon, and Snowball is blamed for everything that goes wrong.',
  artNote:
    'The text gives Snowball no colour, so he is cut pale, which tells him apart from Napoleon, “the only Berkshire”, a black breed.',
}

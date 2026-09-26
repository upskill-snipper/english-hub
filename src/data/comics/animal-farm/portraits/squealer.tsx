import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
} from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, hatch, once, portraitGround, smooth, type Knot } from './common'

/**
 * Squealer, as Orwell introduces him in Chapter 2, and nothing else:
 *
 *   "The best known among them was a small fat pig named Squealer, with very
 *   round cheeks, twinkling eyes, nimble movements, and a shrill voice. He was
 *   a brilliant talker, and when he was arguing some difficult point he had a
 *   way of skipping from side to side and whisking his tail which was somehow
 *   very persuasive. The others said of Squealer that he could turn black into
 *   white."
 *
 * So: a small, fat, pale pig caught mid-skip, all four trotters off the
 * ground, his tail whisked out behind him and the skip cut as arcs of motion
 * on either side; a very round cheek cut as a ring in his jowl, an eye with a
 * twinkle of light beside it, as the figure kit cuts them
 * (../panels/people.tsx), and his mouth open because he is talking. Behind
 * him the ground turns from black on the left to white on the right, for what
 * the others said of him: the one liberty taken with the ground, and the
 * text's own words. His colour is not given; he is cut pale, like Snowball,
 * which keeps both apart from Napoleon, "the only Berkshire". The open mouth
 * is ink, never red. Nothing here comes from a film or stage production.
 *
 * Seeds: 5501 for the ground's black half, 5502 for its white half, 5503 for
 * the cuts in the figure.
 */

/** Where the ground turns from black to white, behind him. */
const TURN = 150

/** Body and head in one, facing right. */
const BODY: Knot[] = [
  [74, 176],
  [92, 138],
  [130, 116],
  [176, 108],
  [210, 112],
  [236, 120],
  [258, 132],
  [276, 144, 1],
  [284, 158],
  [280, 172, 1],
  [264, 176],
  [252, 182, 1],
  [268, 188],
  [274, 196, 1],
  [266, 208],
  [248, 218],
  [226, 224],
  [204, 234],
  [170, 244],
  [130, 244],
  [98, 234],
  [78, 212],
]
/** The snout's flat disc, turned a little towards us. */
const SNOUT = smooth([
  [276, 144],
  [286, 146],
  [292, 158],
  [290, 172],
  [282, 174],
  [279, 160],
])
/** The open mouth: the dark between the jaws. */
const MOUTH = 'M280 172C272 174 262 178 252 182C260 186 268 190 274 196C276 186 278 180 280 172Z'
/** The ears, up and tipped forward. */
const EAR_NEAR = smooth([
  [212, 116],
  [220, 92],
  [240, 70, 1],
  [242, 94],
  [234, 124],
])
const EAR_FAR = smooth([
  [196, 112],
  [198, 88],
  [210, 68, 1],
  [218, 90],
  [214, 112],
])
/** The legs, all four off the ground mid-skip: forelegs tucked forward, hind legs kicked back. */
const LEGS_FAR: [string, number][] = [
  ['M186 234C194 246 204 254 214 256', 13],
  ['M116 238C106 250 94 258 80 262', 13],
]
const LEGS_NEAR: [string, number][] = [
  ['M206 228C216 242 226 250 240 252', 15],
  ['M134 240C126 254 116 264 102 270', 15],
]
/** The trotters, at the foot of each leg. */
const TROTTERS = [
  [214, 256, -10],
  [80, 262, 30],
  [240, 252, -10],
  [102, 270, 30],
] as const
/** The tail, whisked out straight behind him and curled at the tip. */
const TAIL = 'M78 170C64 162 50 150 42 132C38 122 44 116 50 120C54 124 50 130 46 128'

type Marks = {
  black: string
  white: string
  shadow: string
  motion: string
  shade: string
  bristles: string
}

const marks = once<Marks>(() => {
  // The ground: black on the left, cut with pale lines that thin towards the
  // turn; white on the right, ruled with ink lines that thin away from it.
  const black = portraitGround(5501, (x) => (x < TURN ? clamp(0.45 - (x / TURN) * 0.4) : 0))
  const white = portraitGround(5502, (x) => (x > TURN ? clamp(0.5 - ((x - TURN) / 180) * 0.45) : 0))
  const r = rng(5503)
  // His shadow on the ground below him: he is in the air.
  const shadow = 'M70 292C110 284 200 284 250 292C200 300 110 300 70 292Z'
  // The skip: arcs of motion before and behind him, and at his tail.
  const motion =
    arc(150, 180, 118, deg(150), deg(200)) +
    arc(150, 180, 128, deg(158), deg(192)) +
    arc(40, 126, 18, deg(120), deg(250)) +
    arc(40, 126, 26, deg(130), deg(240))
  // The pale hide, modelled in its shadows: the round of the belly.
  let shade = ''
  for (let rad = 40; rad < 110; rad += 6)
    shade += arcDashes(r, 160, 170, rad, deg(36), deg(154), [10, 24], [3, 8])
  // The shadow along his underside, away from the light.
  shade += hatch(r, { x0: 80, x1: 250, y0: 214, y1: 250 }, 3.6, -0.12)
  let bristles = ''
  for (let i = 0; i < 24; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 24
    const x = 90 + t * 120
    const y = 134 - Math.sin(t * Math.PI) * 22 + (1 - t) * 6
    bristles += `M${n(x)} ${n(y)}l${n(between(r, -1, 2))} ${n(-between(r, 3, 6))}`
  }
  return { black, white, shadow, motion, shade, bristles }
})

function SquealerPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sq-body`
  const BODY_D = smooth(BODY)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={BODY_D} />
        </clipPath>
      </defs>
      {/* "he could turn black into white": the ground turns behind him */}
      <path d={m.black} fill={PAPER} />
      <rect x={TURN} y={0} width={PW - TURN} height={PH} fill={PAPER} />
      <path d={m.white} fill={INK} />
      <path d={m.shadow} fill={INK} />
      <g fill="none" strokeLinecap="round" strokeWidth={LINE.bold}>
        <path d={m.motion} stroke={PAPER} />
      </g>
      {/* the ink halo that lifts him off both halves of the ground */}
      <g fill={INK} stroke={INK} strokeWidth={7} strokeLinejoin="round">
        <path d={BODY_D} />
        <path d={EAR_FAR} />
        <path d={EAR_NEAR} />
        <path d={SNOUT} />
      </g>
      <path d={TAIL} fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round" />
      <path d={TAIL} fill="none" stroke={PAPER} strokeWidth={4.4} strokeLinecap="round" />
      <g fill="none" strokeLinecap="round">
        {LEGS_FAR.map(([d, w]) => (
          <path key={`h${d}`} d={d} stroke={INK} strokeWidth={w + 6} />
        ))}
        {LEGS_FAR.map(([d, w]) => (
          <path key={d} d={d} stroke={PAPER} strokeWidth={w} />
        ))}
      </g>
      <path d={EAR_FAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={BODY_D} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.shade} strokeWidth={LINE.hairline} />
      </g>
      <path
        d={m.bristles}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* where the head turns from the shoulder */}
      <path
        d="M212 118C204 140 204 170 214 196"
        fill="none"
        stroke={INK}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
      <g fill="none" strokeLinecap="round">
        {LEGS_NEAR.map(([d, w]) => (
          <path key={`h${d}`} d={d} stroke={INK} strokeWidth={w + 6} />
        ))}
        {LEGS_NEAR.map(([d, w]) => (
          <path key={d} d={d} stroke={PAPER} strokeWidth={w} />
        ))}
      </g>
      <g fill={INK} stroke={PAPER} strokeWidth={1}>
        {TROTTERS.map(([x, y, a]) => (
          <path
            key={`${x}`}
            d="M-6 -5L6 -5L7 5L1.2 5L0 1.6L-1.2 5L-7 5Z"
            transform={`translate(${x} ${y}) rotate(${a})`}
          />
        ))}
      </g>
      <path d={EAR_NEAR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M222 114Q230 92 238 76" fill="none" stroke={INK} strokeWidth={1} />
      {/* the snout, and the open mouth of a talker */}
      <path d={SNOUT} fill={PAPER} stroke={INK} strokeWidth={1.8} />
      <g fill={INK}>
        <ellipse cx={288} cy={154} rx={1.5} ry={2.6} />
        <ellipse cx={288} cy={165} rx={1.5} ry={2.6} />
      </g>
      <path d={MOUTH} fill={INK} />
      {/* "very round cheeks": the jowl cut as a ring */}
      <g fill="none" stroke={INK} strokeLinecap="round">
        <path d={arc(234, 186, 19, deg(-150), deg(170))} strokeWidth={1.8} />
        <path d={arc(234, 186, 12, deg(-20), deg(120))} strokeWidth={1} />
      </g>
      {/* "twinkling eyes": a bright eye and a star of light beside it */}
      <g transform="translate(246 142) rotate(12)">
        <path d="M-8 0Q0 -8 9 -1Q1 6 -8 0Z" fill={PAPER} stroke={INK} strokeWidth={1.6} />
        <circle cx={1.5} cy={-0.8} r={3} fill={INK} />
        <circle cx={2.6} cy={-2} r={1} fill={PAPER} />
        <path
          d="M-9 -7Q1 -14 11 -6"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </g>
      <path
        d="M262 118L262 130M256 124L268 124M258 120L266 128M266 120L258 128"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      <InnerRule />
    </>
  )
}

export const squealerArt: LinocutArt = { width: PW, height: PH, Draw: SquealerPortrait }

export const squealer: Portrait = {
  name: 'Squealer',
  art: squealerArt,
  alt: 'A linocut portrait of Squealer as the text first describes him, in Chapter 2: a small, fat, pale pig caught mid-skip, facing right, all four trotters off the ground above his shadow. His tail is whisked out behind him, and arcs of motion are cut before and behind him. His cheek is very round, cut as a ring in his jowl; his eye is bright, with a star of light beside it; his mouth is open, talking. Behind him the ground is black on the left and turns white on the right. Five numbered red markers point to his body, his cheek, his eye, his tail and the ground where black turns to white.',
  describedBy: [
    { phrase: 'a small fat pig', at: [150, 212], to: [150, 186] },
    { phrase: 'very round cheeks', at: [292, 236], to: [250, 200] },
    { phrase: 'twinkling eyes', at: [296, 104], to: [264, 124] },
    {
      phrase: 'skipping from side to side and whisking his tail',
      at: [30, 186],
      to: [44, 146],
    },
    { phrase: 'he could turn black into white', at: [TURN, 36] },
  ],
  where: 'Chapter 2',
  passage:
    'The best known among them was a small fat pig named Squealer, with very round cheeks, twinkling eyes, nimble movements, and a shrill voice. He was a brilliant talker, and when he was arguing some difficult point he had a way of skipping from side to side and whisking his tail which was somehow very persuasive. The others said of Squealer that he could turn black into white.',
  note: 'Squealer is the voice of the pigs. Every broken promise, every stolen ration and every changed Commandment is explained away by him, until the animals doubt their own memories.',
  artNote:
    'The ground behind him turns from black to white for what the others say of him; his shrill voice is left to the words.',
}

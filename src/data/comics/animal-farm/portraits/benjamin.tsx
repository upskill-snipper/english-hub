import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  coat,
  inside,
  once,
  portraitGround,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Benjamin, from the two places Orwell describes him, and nothing else:
 *
 *   "Benjamin was the oldest animal on the farm, and the worst tempered. He
 *   seldom talked, and when he did, it was usually to make some cynical
 *   remark ... he would say that God had given him a tail to keep the flies
 *   off, but that he would sooner have had no tail and no flies. Alone among
 *   the animals on the farm he never laughed." (Chapter 1)
 *
 *   "Only old Benjamin was much the same as ever, except for being a little
 *   greyer about the muzzle" (Chapter 10)
 *
 * So: an old donkey standing in the grass of the paddock where he spends his
 * Sundays, facing right, his long ears up and his head hanging a little, as
 * the figure kit draws him (../panels/people.tsx). He is cut in INK against
 * a pale ground, his muzzle pale and grizzled; his eye is half-lidded under a
 * flat brow and his mouth is one straight cut, never laughing. Behind him his
 * tail swings at a few flies: the text's own example of his outlook. The
 * flies are small and plain. Nothing here comes from a film or stage
 * production.
 *
 * Seeds: 5801 for the ground, 5802 for the cuts in the figure, 5803 for the
 * grass.
 */

/** Where the grass meets his hoofs. */
const GROUND = 290

/** Body, neck and head in one, standing, facing right. */
const BODY: Knot[] = [
  [50, 150],
  [96, 142],
  [150, 142],
  [200, 136],
  [226, 122],
  [246, 104],
  [258, 98],
  [270, 104],
  [282, 118],
  [298, 144],
  [312, 170],
  [320, 190],
  [318, 206],
  [308, 212],
  [298, 214],
  [282, 206],
  [266, 188],
  [254, 170],
  [240, 168],
  [230, 190],
  [224, 216],
  [200, 230],
  [150, 236],
  [100, 232],
  [70, 222],
  [48, 196],
  [42, 168],
]
/** His ears: long, and up. */
const EAR_NEAR = smooth([
  [256, 104],
  [252, 70],
  [256, 28, 1],
  [270, 64],
  [268, 106],
])
const EAR_FAR = smooth([
  [242, 108],
  [230, 76],
  [222, 36, 1],
  [242, 70],
  [254, 104],
])
/** The four legs, thin, with small hoofs on the grass. */
const LEGS: [string, number][] = [
  ['M204 222L202 286', 12],
  ['M84 222L80 286', 13],
]
const LEGS_NEAR: [string, number][] = [
  ['M220 216L222 286', 13],
  ['M68 212L62 286', 14],
]
/** "a tail to keep the flies off": swung out behind him, a tuft at its end. */
const TAIL = 'M46 156C34 170 24 186 18 204'
const TUFT = smooth([
  [22, 198],
  [12, 206],
  [6, 226],
  [14, 236],
  [22, 224],
  [26, 208],
])
/** The flies at his tail. */
const FLIES: [number, number, number][] = [
  [26, 150, 20],
  [70, 118, -30],
  [40, 214, 60],
  [26, 262, 10],
]
/** The muzzle: pale and grizzled. */
const MUZZLE: Knot[] = [
  [300, 160],
  [312, 170],
  [320, 190],
  [318, 206],
  [308, 212],
  [298, 214],
  [288, 208],
  [292, 188],
]

type Marks = {
  ground: string
  grass: string
  rim: string
  hide: string
  mane: string
  grizzle: string
  motion: string
}

const marks = once<Marks>(() => {
  // A pale ground, so the dark donkey stands out: an open sky over the
  // paddock, the ink left in thin lines.
  const ground = portraitGround(5801, (x, y) => clamp(0.1 + (y / PH) * 0.3))
  const r = rng(5802)
  // Light along his back and down the front of his face.
  let rim = ''
  const back: [number, number][] = [
    [56, 154],
    [100, 147],
    [150, 147],
    [198, 141],
    [224, 128],
    [244, 110],
  ]
  for (let i = 0; i < back.length - 1; i++)
    rim += gouge(back[i][0], back[i][1], back[i + 1][0], back[i + 1][1], 1.3, -0.4)
  rim += gouge(276, 116, 300, 152, 1.4, -0.5)
  // The grain of his coat, and the round of his belly.
  const hide = coat(
    r,
    BODY,
    260,
    (x, y) => (x > 250 ? deg(60) : deg(90 + (x - 140) * 0.05)),
    (x, y) => clamp(0.55 - (y - 150) / 160 - Math.max(0, x - 290) / 20),
    { len: [5, 11], width: 1.1 },
  )
  // His short, upright mane along the crest of his neck.
  const mane = strands(
    r,
    16,
    (t) => [208 + t * 44, 134 - t * 30],
    (t) => [210 + t * 42, 122 - t * 30],
    [0.6, 1.1],
    0.6,
  )
  // "a little greyer about the muzzle": ink stipple on the pale muzzle.
  let grizzle = ''
  for (let i = 0, tries = 0; i < 70 && tries < 2000; tries++) {
    const x = between(r, 286, 322)
    const y = between(r, 160, 214)
    if (!inside(MUZZLE, x, y)) continue
    const a = deg(between(r, 40, 80))
    const L = between(r, 1.5, 3.5)
    grizzle += `M${n(x)} ${n(y)}l${n(Math.cos(a) * L)} ${n(Math.sin(a) * L)}`
    i++
  }
  // The swing of the tail.
  const motion = arc(46, 156, 64, deg(118), deg(150)) + arc(46, 156, 76, deg(122), deg(146))
  const rs = rng(5803)
  let grass = ''
  for (let i = 0; i < 70; i++) {
    const x = between(rs, 10, PW - 10)
    const h = between(rs, 8, 20)
    const lean = between(rs, -5, 5)
    grass += gouge(x, GROUND + 22, x + lean, GROUND + 22 - h, between(rs, 0.8, 1.6), lean * 0.2)
  }
  return { ground, grass, rim, hide, mane, grizzle, motion }
})

/** A fly: a small dark body and two pale wings. */
function Fly({ x, y, a }: { x: number; y: number; a: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${a}) scale(1.7)`}>
      <path
        d="M-1 -1.5C0 -6 5 -8 6 -5C6 -3 3 -2 -1 -1.5ZM-1 1.5C0 6 5 8 6 5C6 3 3 2 -1 1.5Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.7}
      />
      <ellipse cx={0} cy={0} rx={3.6} ry={1.9} fill={INK} />
      <circle cx={3.6} cy={0} r={1.4} fill={INK} />
    </g>
  )
}

function BenjaminPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-bj-body`
  const BODY_D = smooth(BODY)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={BODY_D} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={PW} height={PH} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      {/* the paddock's grass */}
      <rect x={8} y={GROUND} width={PW - 16} height={PH - GROUND - 8} fill={INK} />
      <path d={m.grass} fill={PAPER} />
      <path d={m.motion} fill="none" stroke={INK} strokeWidth={LINE.bold} strokeLinecap="round" />
      {/* the paper halo that cuts him out of the ground */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={5} strokeLinejoin="round">
        <path d={BODY_D} />
        <path d={EAR_FAR} />
        <path d={EAR_NEAR} />
        <path d={TUFT} />
      </g>
      <path d={TAIL} fill="none" stroke={PAPER} strokeWidth={10} strokeLinecap="round" />
      <g fill="none" strokeLinecap="round">
        {[...LEGS, ...LEGS_NEAR].map(([d, w]) => (
          <path key={`h${d}`} d={d} stroke={PAPER} strokeWidth={w + 5} />
        ))}
        {LEGS.map(([d, w]) => (
          <path key={d} d={d} stroke={INK} strokeWidth={w} />
        ))}
      </g>
      <path d={EAR_FAR} fill={INK} />
      <path d={TAIL} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <path d={TUFT} fill={INK} />
      <path d="M16 212L12 228M20 210L18 232" stroke={PAPER} strokeWidth={0.9} />
      <path d={BODY_D} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.hide} fill={PAPER} />
        <path d={m.rim} fill={PAPER} />
        {/* where the head turns from the neck, and the round of the jowl */}
        <path
          d="M252 108C246 128 250 150 262 170M258 150C262 170 274 186 290 196"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.6}
          strokeLinecap="round"
        />
      </g>
      <path d={m.mane} fill={PAPER} />
      <g fill="none" strokeLinecap="round">
        {LEGS_NEAR.map(([d, w]) => (
          <path key={d} d={d} stroke={INK} strokeWidth={w} />
        ))}
      </g>
      <path d="M218 234L220 280M64 226L60 280" stroke={PAPER} strokeWidth={1.1} />
      {/* the hoofs */}
      <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
        <path d="M194 282L210 282L212 292L192 292Z" />
        <path d="M72 282L88 282L90 292L70 292Z" />
        <path d="M214 282L230 282L232 294L212 294Z" />
        <path d="M54 282L70 282L72 294L52 294Z" />
      </g>
      <path
        d={EAR_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d="M262 100Q258 70 258 42" fill="none" stroke={PAPER} strokeWidth={1.2} />
      {/* the pale, grizzled muzzle */}
      <path d={smooth(MUZZLE)} fill={PAPER} />
      <path
        d={m.grizzle}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path
        d="M314 180C308 180 306 188 310 192"
        fill="none"
        stroke={INK}
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* "he never laughed": the mouth one straight cut */}
      <path d="M318 204L296 206" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
      {/*
        a half-lidded eye under a flat brow. It was first cut the size of the
        coat's own grain and at the same slant, and at card size it was lost
        among the hatching, so the head had no eye (review, 27 September
        2026). The coat is cleared round it and the eye cut larger.
      */}
      <g transform="translate(276 134) rotate(46)">
        <ellipse cx={0} cy={0} rx={16} ry={12} fill={INK} />
        <ellipse cx={0} cy={0.6} rx={10.5} ry={5.6} fill={PAPER} />
        <circle cx={1.6} cy={1.8} r={3.4} fill={INK} />
        {/* the heavy lid, drawn half down over the eye */}
        <path d="M-12 1.2Q0 -1.6 12 1.2L12 -7L-12 -7Z" fill={INK} />
        {/* the flat brow above it */}
        <path d="M-12 -9L12 -8.4" stroke={PAPER} strokeWidth={2.4} strokeLinecap="round" />
      </g>
      {/* the flies */}
      {FLIES.map(([x, y, a]) => (
        <Fly key={`${x}-${y}`} x={x} y={y} a={a} />
      ))}
      <InnerRule />
    </>
  )
}

export const benjaminArt: LinocutArt = { width: PW, height: PH, Draw: BenjaminPortrait }

export const benjamin: Portrait = {
  name: 'Benjamin',
  art: benjaminArt,
  alt: 'A linocut portrait of Benjamin the donkey, standing in the grass of the paddock, facing right, cut dark against a pale sky. His long ears are up and his head hangs a little. His muzzle is pale and grizzled with fine dark flecks, his eye is half-lidded under a flat brow, and his mouth is one straight line. Behind him his tail, with a dark tuft at the end, swings at a few small flies. Four numbered red markers point to his head, his muzzle, his tail and his mouth.',
  describedBy: [
    {
      phrase: 'the oldest animal on the farm, and the worst tempered',
      at: [300, 60],
      to: [276, 112],
    },
    { phrase: 'a little greyer about the muzzle', at: [304, 250], to: [306, 214] },
    { phrase: 'a tail to keep the flies off', at: [34, 100], to: [30, 150] },
    {
      phrase: 'Alone among the animals on the farm he never laughed',
      at: [252, 246],
      to: [298, 208],
    },
  ],
  where: 'Chapters 1 and 10',
  note: 'Benjamin sees more than he says. He can read as well as any pig but will not, until the day he reads the side of the van that takes Boxer away, and the one Commandment left on the wall in Chapter 10.',
  artNote: 'The text gives him no colour, so he is cut dark, as the other panels draw him.',
}

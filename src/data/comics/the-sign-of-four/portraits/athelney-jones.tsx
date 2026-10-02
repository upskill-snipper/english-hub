import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arc, arcDashes, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import { greyish } from '../panels/people'
import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  hatch,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
} from './common'

/**
 * Athelney Jones of Scotland Yard, as he comes into Bartholomew Sholto's
 * room in Chapter 6, and nothing else:
 *
 *   "As he spoke, the steps which had been coming nearer sounded loudly on
 *   the passage, and a very stout, portly man in a grey suit strode heavily
 *   into the room. He was red-faced, burly and plethoric, with a pair of very
 *   small twinkling eyes which looked keenly out from between swollen and
 *   puffy pouches."
 *
 * So: a heavy man in profile, facing right, striding into the lamplight of
 * the room, his paunch carried before him; a round, heavy
 * head with a second chin; a very small eye with a glint in it, pressed
 * between a swollen lid above and a puffy pouch below; and the spot colour on
 * his cheekbone for "red-faced", never on his mouth or chin. His grey suit is
 * cut the figure kit's way of printing grey, fine upright paper lines over
 * the ink (greyish() in ../panels/people.tsx), coat and waistcoat alike.
 * He is the Jones of the figure kit: the broadest man in any panel, a round
 * heavy head, a small eye between pouches, the flush on the cheekbone.
 *
 * Nothing of the room is drawn but its lamplight. What lies in it,
 * Bartholomew Sholto's body, is never drawn (see the rules in
 * ../panels/people.tsx).
 *
 * His hair is not described, so it is plain, short and dark; his watch-chain
 * is the plain dress of a London man of 1888, as is his white collar and
 * dark tie. Nothing is taken from a film or television production.
 *
 * Seeds: 4401 for the ground, 4402 for the cuts in the figure.
 */

/**
 * A round, heavy head and a thick neck, in profile facing right: a short,
 * fleshy nose, full lips, a round chin with a second chin under it. Drawn a
 * little smaller in the block than Holmes's, so that the paunch, the thing
 * Watson sees first, is in the picture.
 */
const HEAD = smooth([
  [86, 206, 1],
  [86, 182],
  [74, 160],
  [66, 128],
  [70, 96],
  [86, 68],
  [110, 48],
  [140, 40],
  [168, 42],
  [188, 52],
  [200, 66],
  [206, 80],
  [209, 92, 1],
  [205, 99],
  [209, 105],
  [214, 111],
  [217.5, 116],
  [216.5, 121],
  [211.5, 123.5],
  [207.5, 124.5, 1],
  [211, 129],
  [210.5, 133, 1],
  [206.5, 134.5, 1],
  [211, 138],
  [209.5, 142.5, 1],
  [206, 144.5],
  [210, 151],
  [209, 158],
  [203.5, 162, 1],
  [208, 168],
  [206.5, 177],
  [198, 184],
  [188, 188],
  [184, 206, 1],
])
/** Short dark hair, combed flat over a round skull. */
const HAIR = smooth([
  [30, 14, 1],
  [190, 14, 1],
  [186, 50],
  [172, 54],
  [158, 62],
  [146, 76],
  [138, 90],
  [126, 98],
  [116, 114],
  [110, 140],
  [104, 168],
  [94, 196, 1],
  [30, 196, 1],
])

/**
 * "a very stout, portly man in a grey suit": the shoulders, the chest and
 * the paunch carried round and full in front of him, the coat open over it.
 */
const COAT = smooth([
  [16, 330, 1],
  [18, 270],
  [36, 230],
  [66, 208],
  [96, 200],
  [136, 210],
  [176, 202],
  [198, 212],
  [220, 228],
  [246, 246],
  [268, 266],
  [282, 290],
  [282, 310],
  [272, 326],
  [264, 330, 1],
])
/** The waistcoat, buttoned over the paunch, between the open fronts of the coat. */
const WAISTCOAT = smooth([
  [168, 216, 1],
  [196, 214],
  [218, 230],
  [244, 248],
  [264, 268],
  [276, 290],
  [276, 310],
  [266, 326],
  [258, 330, 1],
  [214, 330, 1],
  [196, 276],
  [178, 236],
])
const COLLAR = smooth([
  [90, 198, 1],
  [134, 210],
  [176, 198, 1],
  [180, 214, 1],
  [134, 224],
  [88, 212, 1],
])
const SHIRT = smooth([
  [166, 214, 1],
  [186, 210, 1],
  [194, 226],
  [174, 232],
])
const TIE = smooth([
  [168, 214, 1],
  [186, 210, 1],
  [189, 224],
  [180, 230],
  [172, 224],
])
/** The near sleeve, hanging, the arm swung a little back as he strides. */
const SLEEVE = smooth([
  [52, 232],
  [80, 216],
  [110, 222],
  [124, 256],
  [124, 300],
  [118, 330, 1],
  [62, 330, 1],
  [54, 286],
])
/** The waistcoat's buttons, down the curve of the paunch. */
const BUTTONS: [number, number][] = [
  [207, 234],
  [233, 254],
  [253, 278],
  [262, 304],
]
/** The watch-chain across the waistcoat, as plain dress of the day. */
const CHAIN = 'M253 278Q236 300 216 306'

/**
 * "red-faced": short slanting strokes of the spot colour on the cheekbone,
 * below the eye and in front of the ear, well above the mouth and chin.
 */
const FLUSH =
  'M152 104l4 7.4M157.6 104.4l4 7.4M163.2 104.8l4 7.4M168.8 105.2l3.6 6.8M174.4 106l2.6 5.2'

type Marks = {
  ground: string
  hair: string
  back: string
  jowl: string
  neck: string
  suitGrey: string
  coatCuts: string
}

const marks = once<Marks>(() => {
  // Lamplight in the room he has come into, on the right; dark behind him.
  const ground = portraitGround(4401, (x, y) =>
    clamp(0.06 + ((x - 60) / 230) * 0.95 - Math.max(0, (y - 270) / 260)),
  )
  const r = rng(4402)
  // Short dark hair combed flat: paper strands on the black, light on the edge.
  const hair =
    strands(r, 50, lerp2([182, 44], [140, 92]), lerp2([104, 50], [100, 170]), [0.6, 1.1], 2) +
    rimLight(r, { cx: 136, cy: 110, rx: 66, ry: 74 }, 150, 280, 38, 1)
  let back = ''
  for (let rad = 40; rad < 80; rad += 3.4)
    back += arcDashes(r, 140, 118, rad, deg(108), deg(172), [8, 20], [2, 6])
  // A heavy jowl: bowls of line from the cheek down towards the second chin.
  let jowl = ''
  for (let rad = 14; rad < 32; rad += 3.4)
    jowl += arcDashes(r, 166, 128, rad, deg(30), deg(118), [8, 18], [2, 5])
  const neck = hatch(r, { x0: 88, x1: 182, y0: 180, y1: 206 }, 4.2, 0.06)
  const suitGrey = greyish({ x0: 10, x1: 290, y0: 190, y1: 330 }, 3.4)
  // The front of the coat, and a crease where it strains over him.
  const coatCuts = gouge(150, 230, 178, 300, 0.9, 3) + gouge(40, 262, 30, 322, 1.6, 2)
  return { ground, hair, back, jowl, neck, suitGrey, coatCuts }
})

function JonesPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-aj-head`
  const suitClip = `${uid}-aj-suit`
  const sleeveClip = `${uid}-aj-sleeve`
  const vestClip = `${uid}-aj-vest`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={suitClip}>
          <path d={COAT} />
        </clipPath>
        <clipPath id={vestClip}>
          <path d={WAISTCOAT} />
        </clipPath>
        <clipPath id={sleeveClip}>
          <path d={SLEEVE} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={COAT} />
        <path d={SLEEVE} />
      </g>
      {/* "a very stout, portly man in a grey suit": coat and waistcoat alike */}
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={m.suitGrey}
        clipPath={`url(#${suitClip})`}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.9}
      />
      <path d={WAISTCOAT} fill={INK} />
      <path
        d={m.suitGrey}
        clipPath={`url(#${vestClip})`}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.9}
        transform="translate(1.7 0)"
      />
      <path d={WAISTCOAT} fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.coatCuts} fill={PAPER} />
      {BUTTONS.map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r={3.2} fill={PAPER} stroke={INK} strokeWidth={1} />
      ))}
      <path d={CHAIN} fill="none" stroke={INK} strokeWidth={4.6} strokeLinecap="round" />
      <path
        d={CHAIN}
        fill="none"
        stroke={PAPER}
        strokeWidth={2.2}
        strokeDasharray="3 1.8"
        strokeLinecap="round"
      />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.6} />
          <path d={m.jowl} strokeWidth={1} />
          <path d={m.neck} strokeWidth={1.1} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <ProfileEar at={[130, 94]} h={36} />
      <path d={SHIRT} fill={PAPER} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the heavy line of the jaw, and the fold of the second chin */}
        <path d="M202 162C190 168 174 165 162 154" strokeWidth={1.6} />
        <path d="M205 176C194 185 178 185 166 174" strokeWidth={1.5} />
        {/* a heavy brow */}
        <path d="M180 89Q194 83 210 87.5" strokeWidth={3.4} />
        {/* "swollen and puffy pouches": the swollen lid above the eye, the pouch below */}
        <path d="M183 94Q194 89 206 95" strokeWidth={1.4} />
        <path d="M184 105Q195 112 206 105.5" strokeWidth={1.5} />
        <path d="M186 110Q196 117 205 111" strokeWidth={1.1} />
        {/* the short, fleshy nose, its nostril, the line past the mouth, full lips */}
        <path d="M210.5 122.5C206.5 121.5 205.5 117 208.5 114.5" strokeWidth={1.5} />
        <path d="M203.5 115C196.5 121 194 129 195.5 138" strokeWidth={1.3} />
        <path d="M210.5 133.2L201 132.8" strokeWidth={1.9} />
        <path d="M207.6 141Q205 142.6 202.8 141.8" strokeWidth={LINE.hairline} />
      </g>
      {/* "a pair of very small twinkling eyes": a small eye, a bright glint */}
      <path d="M189 99.6Q195.4 95.6 202.4 98.6Q196 102.6 189 99.6Z" fill={INK} />
      <circle cx={197.4} cy={98.8} r={1.05} fill={PAPER} />
      <path
        d={arc(195.5, 99.5, 9.5, deg(195), deg(330))}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      {/* "red-faced": the flush on his cheekbone */}
      <path d={FLUSH} fill="none" stroke={RED} strokeWidth={2} strokeLinecap="round" />
      {/* the near arm, swung a little back as he strides */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={m.suitGrey}
        clipPath={`url(#${sleeveClip})`}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.9}
      />
      <path d="M112 236C122 256 124 286 118 318" fill="none" stroke={INK} strokeWidth={2.2} />
      <InnerRule />
    </>
  )
}

export const athelneyJonesArt: LinocutArt = { width: PW, height: PH, Draw: JonesPortrait }

export const athelneyJones: Portrait = {
  name: 'Athelney Jones',
  art: athelneyJonesArt,
  alt: 'A linocut portrait of Athelney Jones of Scotland Yard in profile, facing right, drawn from Watson’s description in Chapter 6: a very stout, heavy man striding forward into lamplight, his round paunch carried before him. He has a round, heavy head with short dark hair, a short nose, a thick neck and a second chin, and a very small eye with a bright glint, pressed between a swollen lid above and a puffy pouch below. Short red strokes on his cheekbone show that he is red-faced. His coat and waistcoat are cut in fine upright lines to show they are grey, the waistcoat buttoned over his paunch with a watch-chain across it, and he wears a white collar and a dark tie. Five numbered red markers point to his paunch, his grey suit, the red on his cheek, his eye and the pouches round it.',
  describedBy: [
    { phrase: 'a very stout, portly man', at: [306, 236], to: [276, 268] },
    { phrase: 'in a grey suit', at: [30, 210], to: [62, 250] },
    { phrase: 'red-faced', at: [126, 152], to: [160, 114] },
    { phrase: 'a pair of very small twinkling eyes', at: [258, 62], to: [200, 96] },
    { phrase: 'swollen and puffy pouches', at: [262, 110], to: [205, 108] },
  ],
  where: 'Chapter 6',
  passage:
    'As he spoke, the steps which had been coming nearer sounded loudly on the passage, and a very stout, portly man in a grey suit strode heavily into the room. He was red-faced, burly and plethoric, with a pair of very small twinkling eyes which looked keenly out from between swollen and puffy pouches.',
  note: 'Jones enters the novel as a body before he says a word: heavy, loud and red. Set beside the lean, quiet Holmes, he is the official police in one figure, all weight and confidence, and he arrests the wrong man within minutes.',
  artNote:
    'His hair is not described, so it is plain; the watch-chain, the collar and the tie are the ordinary dress of a London man in 1888. Grey is cut as fine pale lines over the black.',
}

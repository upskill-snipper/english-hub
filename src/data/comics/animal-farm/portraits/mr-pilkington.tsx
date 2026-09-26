import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  inside,
  once,
  portraitGround,
  smooth,
  toneHatch,
  type Knot,
} from './common'

/**
 * Mr Pilkington, as Orwell introduces him in Chapter 4, and nothing else:
 *
 *   "One of them, which was named Foxwood, was a large, neglected,
 *   old-fashioned farm, much overgrown by woodland, with all its pastures worn
 *   out and its hedges in a disgraceful condition. Its owner, Mr. Pilkington,
 *   was an easy-going gentleman farmer who spent most of his time in fishing
 *   or hunting according to the season."
 *
 * Orwell never describes his face, so he is drawn plainly: a countryman of
 * the 1940s in the tweed cap and jacket of a gentleman farmer, the tweed cut
 * as hatching, a collar and tie. What the passage gives is his manner, his
 * pastimes and his land, so that is what is drawn: he leans at his ease, head
 * a little on one side, with an easy smile; his fishing rod rests on his
 * shoulder, its line hanging; and behind him Foxwood's woods crowd in over an
 * overgrown, gappy hedge. A rod rather than a gun, because the season is the
 * drawing's choice and a portrait for young readers has no need of a gun.
 * Nothing here comes from a film or stage production.
 *
 * Seeds: 6301 for the ground, 6302 for the woods and hedge, 6303 for the
 * tweed.
 */

/** His head, three-quarters to the right, tipped a little to one side. */
const TILT = 'rotate(-6 186 120)'
const FACE: Knot[] = [
  [148, 92],
  [142, 120],
  [146, 148],
  [162, 168],
  [186, 178],
  [206, 172],
  [216, 158],
  [216, 148],
  [224, 142],
  [228, 132],
  [222, 122],
  [214, 110],
  [210, 96],
]
/** A flat tweed cap, its peak over the brow. */
const CAP = smooth([
  [144, 100],
  [146, 76],
  [166, 62],
  [196, 62],
  [214, 74],
  [236, 90, 1],
  [230, 98],
  [212, 98],
  [180, 102],
])
/** His tweed jacket: the shoulders, sloping easily, running out of the block. */
const JACKET: Knot[] = [
  [36, 330, 1],
  [48, 250],
  [80, 204],
  [132, 184],
  [160, 176],
  [184, 194],
  [210, 178],
  [240, 190],
  [270, 216],
  [288, 266],
  [296, 330, 1],
]
const COLLAR = 'M160 170L184 184L206 168L212 188L184 198L154 186Z'
const TIE = 'M178 186L192 186L196 214L186 238L176 214Z'
/** The rod, resting on his shoulder, and its line; his hand on the butt. */
const ROD = 'M150 300L322 36'
const LINE_HANG = 'M322 36C326 80 318 120 324 160'
/** His near hand, round the rod: the back of the hand, and four fingers laid round it. */
const HAND =
  'M152 250C148 240 152 228 162 226L180 232C184 242 182 256 172 262C164 266 156 262 152 250Z'
const FINGERS: string[] = [
  'M176 232L196 238',
  'M178 240L198 246',
  'M178 248L196 254',
  'M174 256L190 262',
]

type Marks = {
  ground: string
  woods: string
  hedge: string
  tweed: string
  capTweed: string
}

const marks = once<Marks>(() => {
  // The woods of Foxwood behind him: dark, crowding in.
  const ground = portraitGround(6301, (x, y) =>
    clamp(0.18 + (y / PH) * 0.2 - Math.abs(x - 170) / 900),
  )
  const r = rng(6302)
  // "much overgrown by woodland": trunks and leafy crowns, cut in paper.
  let woods = ''
  const trunks = [22, 58, 92, 250, 290]
  for (const x of trunks) {
    woods += gouge(x, 16, x + between(r, -4, 4), 200, between(r, 1.6, 2.6), between(r, -2, 2))
    for (let k = 0; k < 6; k++) {
      const y = between(r, 20, 160)
      const a = deg(between(r, -150, -30))
      const L = between(r, 14, 30)
      woods += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L, 1, 1)
    }
  }
  for (let i = 0; i < 80; i++) {
    const x = between(r, 10, 322)
    const y = between(r, 12, 130)
    if (x > 120 && x < 240 && y > 50) continue
    const a = deg(between(r, 0, 360))
    woods += gouge(x, y, x + Math.cos(a) * 6, y + Math.sin(a) * 6, between(r, 1.4, 2.4))
  }
  // "its hedges in a disgraceful condition": a ragged, gappy hedge.
  let hedge = ''
  for (let i = 0; i < 110; i++) {
    const x = between(r, 10, 322)
    if ((x > 70 && x < 96) || (x > 262 && x < 280)) continue
    const y = between(r, 176, 214) + Math.sin(x / 17) * 6
    const a = deg(between(r, -140, -40))
    const L = between(r, 6, 16)
    hedge += gouge(x, y, x + Math.cos(a) * L, y + Math.sin(a) * L, between(r, 0.8, 1.6))
  }
  const rt = rng(6303)
  // The tweed: hatching broken by the light, lighter on the shoulders.
  const tweed = toneHatch(
    rt,
    { x0: 30, x1: 300, y0: 60, y1: 330 },
    4.6,
    0.9,
    (x, y) => 0.75 - (y - 190) / 260 - Math.abs(x - 170) / 500,
    22,
    (x, y) => inside(JACKET, x, y),
  )
  const capTweed = toneHatch(
    rt,
    { x0: 140, x1: 240, y0: -20, y1: 110 },
    3.6,
    0.9,
    (x) => 0.7 - (x - 150) / 300,
    18,
  )
  return { ground, woods, hedge, tweed, capTweed }
})

function MrPilkingtonPortrait({ uid }: ArtProps) {
  const m = marks()
  const faceClip = `${uid}-pk-face`
  const capClip = `${uid}-pk-cap`
  const jacketClip = `${uid}-pk-jacket`
  const FACE_D = smooth(FACE)
  const JACKET_D = smooth(JACKET)
  return (
    <>
      <defs>
        <clipPath id={faceClip}>
          <path d={FACE_D} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
        <clipPath id={jacketClip}>
          <path d={JACKET_D} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.woods} fill={PAPER} />
      <path d={m.hedge} fill={PAPER} />
      {/* the line hanging from the rod's tip */}
      <path d={LINE_HANG} fill="none" stroke={PAPER} strokeWidth={1} />
      <path d="M318 160L330 160M324 154L324 166" stroke={PAPER} strokeWidth={1.4} />
      {/* the paper edge that cuts him out of the woods */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={5} strokeLinejoin="round">
        <path d={JACKET_D} />
        <g transform={TILT}>
          <path d={FACE_D} />
          <path d={CAP} />
        </g>
      </g>
      <path d={JACKET_D} fill={INK} />
      <g clipPath={`url(#${jacketClip})`}>
        <path d={m.tweed} fill={PAPER} />
        {/* the lapels */}
        <path
          d="M160 180L150 252L176 232M210 182L220 250L196 232"
          fill="none"
          stroke={INK}
          strokeWidth={3}
        />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <g transform={TILT}>
        <path d={FACE_D} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${faceClip})`}>
          <path d="M146 100L162 100L160 116L150 120Z" fill={INK} />
          <path d="M172 160L198 164M168 154L200 158" stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        {/* the ear */}
        <path
          d="M160 114C152 114 150 126 154 132C156 136 160 134 160 130"
          fill="none"
          stroke={INK}
          strokeWidth={1.6}
        />
        {/* easy eyes, a little creased with smiling; a broad, easy smile */}
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M180 116Q188 112 196 116" strokeWidth={2} />
          <path d="M202 114Q208 112 212 115" strokeWidth={1.8} />
          <path d="M182 122Q188 124 194 121" strokeWidth={1.2} />
          <path d="M178 124L174 128M178 120L173 121" strokeWidth={0.9} />
          <path d="M216 126C220 132 222 138 216 142" strokeWidth={1.4} />
          <path d="M186 154Q200 162 212 152" strokeWidth={1.6} />
          <path d="M184 152Q185 156 188 156" strokeWidth={1} />
          <path d="M196 140Q200 146 206 146" strokeWidth={0.9} />
        </g>
        <circle cx={189} cy={119} r={2.2} fill={INK} />
        <circle cx={208} cy={116.5} r={1.8} fill={INK} />
        {/* the tweed cap */}
        <path d={CAP} fill={INK} />
        <g clipPath={`url(#${capClip})`}>
          <path d={m.capTweed} fill={PAPER} />
        </g>
        <path d="M150 96Q190 92 234 92" fill="none" stroke={INK} strokeWidth={2.2} />
      </g>
      {/* the rod, from his hand up past his shoulder, and the hand round it */}
      <path d={ROD} stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d={ROD} stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
      <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <g fill="none" strokeLinecap="round">
        {FINGERS.map((d) => (
          <path key={`i${d}`} d={d} stroke={INK} strokeWidth={8.4} />
        ))}
        {FINGERS.map((d) => (
          <path key={d} d={d} stroke={PAPER} strokeWidth={5.6} />
        ))}
      </g>
      <InnerRule />
    </>
  )
}

export const mrPilkingtonArt: LinocutArt = { width: PW, height: PH, Draw: MrPilkingtonPortrait }

export const mrPilkington: Portrait = {
  name: 'Mr Pilkington',
  art: mrPilkingtonArt,
  alt: 'A linocut portrait of Mr Pilkington of Foxwood, in Chapter 4: a countryman seen head and shoulders, turned three-quarters to the right, his head a little on one side and an easy smile on his face. He wears a flat tweed cap and a tweed jacket, both cut as hatching, a white collar and a dark tie. A fishing rod rests on his shoulder, his hand on it, its line hanging from the tip. Behind him dark woods crowd in over a ragged hedge with gaps in it. Four numbered red markers point to him, his fishing rod, the woods and the hedge.',
  describedBy: [
    { phrase: 'an easy-going gentleman farmer', at: [254, 150], to: [216, 156] },
    { phrase: 'fishing or hunting according to the season', at: [300, 118], to: [288, 88] },
    { phrase: 'much overgrown by woodland', at: [40, 40], to: [58, 70] },
    { phrase: 'its hedges in a disgraceful condition', at: [34, 150], to: [48, 190] },
  ],
  where: 'Chapter 4',
  passage:
    'One of them, which was named Foxwood, was a large, neglected, old-fashioned farm, much overgrown by woodland, with all its pastures worn out and its hedges in a disgraceful condition. Its owner, Mr. Pilkington, was an easy-going gentleman farmer who spent most of his time in fishing or hunting according to the season.',
  note: 'Pilkington and Frederick dislike each other so much that they can hardly agree even to defend themselves, and Napoleon plays one against the other. In Chapter 10 Pilkington toasts the pigs at their dinner, until he and Napoleon each play an ace of spades.',
  artNote:
    'Orwell never describes his face or his clothes, so he is drawn plainly, as a country gentleman of the 1940s; the markers point at his manner, his sport and his land.',
}

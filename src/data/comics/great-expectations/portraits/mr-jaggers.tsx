import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  InnerRule,
  MAN_EAR,
  MAN_HEAD,
  ManFeatures,
  PH,
  PW,
  ProfileEar,
  flip,
  hatch,
  inside,
  nudge,
  once,
  placer,
  portraitGround,
  smooth,
  strands,
  lerp2,
  type Knot,
} from './common'

/**
 * Mr Jaggers, as Dickens describes him, and nothing else. Chapter 11, on the
 * dark staircase at Satis House, where Pip, carrying a candle, meets a
 * stranger coming down:
 *
 *   "He was a burly man of an exceedingly dark complexion, with an
 *   exceedingly large head and a corresponding large hand. He took my chin
 *   in his large hand and turned up my face to have a look at me by the
 *   light of the candle. He was prematurely bald on the top of his head, and
 *   had bushy black eyebrows that wouldn't lie down, but stood up bristling.
 *   His eyes were set very deep in his head, and were disagreeably sharp and
 *   suspicious. He had a large watch-chain, and strong black dots where his
 *   beard and whiskers would have been if he had let them."
 *
 * So: a burly man in profile, facing left, lit from below by a candle out of
 * the block; a head bigger than any other man's, the dome of it high and
 * broad ("an exceedingly large head"), bald on top, the hair dark and short
 * at the back and sides ("prematurely bald on the top of his head"); thick
 * black brows standing up in bristles ("wouldn't lie down, but stood up
 * bristling"); small, sharp eyes sunk deep under them in shadow ("set very
 * deep in his head", "sharp and suspicious"); a hard, straight mouth; and
 * the black dots of a close-shaved beard on his jaw, chin, lip and cheek
 * ("strong black dots"). Below, a heavy watch-chain loops across his
 * waistcoat ("a large watch-chain"). He matches the figure kit's Jaggers
 * (../panels/people.tsx): the bald dome, the dark fringe, the bristling
 * brows, the hard mouth, the heavy chain in paper.
 *
 * The child whose chin he takes is not drawn, and nor is his hand on a
 * child. The print has no colour for a complexion, and a face printed in
 * ink reads as a different one (./common.tsx), so his face is cut in paper
 * and "an exceedingly dark complexion" is left to the words; the card says
 * so. His clothes are not described, so he wears a gentleman's dark coat of
 * the period with a white neckcloth. Nothing here comes from a film or stage
 * production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7701 for the ground, 7702 for the cuts in the
 * figure.
 */

/**
 * The one man's head, its skull made larger and higher than any other's
 * ("an exceedingly large head"), the brow ridge heavy and the neck thick
 * ("burly").
 */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [0, -12, 0],
  [1, -10, 0],
  [3, -4, 1],
  [4, -5, -1],
  [5, -6, -4],
  [6, -6, -7],
  [7, -2, -9],
  [8, 1, -8],
  [9, 2, -6],
  [10, 2, -4],
  [11, 3, 0],
  [26, 3, 2],
  [27, 8, 0],
  [28, 11, 0],
])

const F = placer([18, 6], 0.92)
const HEAD = smooth(F.knots(HEAD_K))

/** His dark hair, short, at the back and sides of the head below the bald crown. */
const HAIR_K: Knot[] = [
  [184, 118],
  [168, 110],
  [140, 106],
  [112, 110],
  [90, 120],
  [80, 146],
  [82, 178],
  [92, 204],
  [106, 224, 1],
  [120, 214],
  [130, 192],
  [142, 172],
  [150, 154],
  [160, 138],
  [174, 132],
  [184, 140, 1],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** The dark coat over broad, heavy shoulders. */
const COAT = smooth([
  [-8, 330, 1],
  [-6, 288],
  [8, 260],
  [40, 242],
  [86, 232],
  [124, 236],
  [164, 248],
  [208, 246],
  [236, 256],
  [258, 280],
  [268, 330, 1],
])
/** The coat's standing collar behind the neck. */
const COLLAR = smooth([
  [88, 250, 1],
  [96, 222],
  [118, 216],
  [146, 228],
  [160, 250],
  [140, 262, 1],
])
/** The white neckcloth, wound high, and its tucked ends. */
const NECKCLOTH = smooth([
  [130, 238, 1],
  [168, 234],
  [210, 228],
  [220, 240],
  [216, 258],
  [184, 264],
  [138, 258, 1],
])
/** The waistcoat in the opening of the coat, where the chain crosses it. */
const WAISTCOAT = smooth([
  [184, 262, 1],
  [218, 256, 1],
  [236, 280],
  [246, 330, 1],
  [178, 330, 1],
  [180, 292],
])
const LAPEL = smooth([
  [216, 258, 1],
  [240, 266],
  [254, 300],
  [258, 330, 1],
  [244, 330, 1],
  [236, 290],
])

/** "a large watch-chain": its links, looping across the waistcoat to the pocket. */
const CHAIN: Pt[] = Array.from({ length: 13 }, (_, i): Pt => {
  const t = i / 12
  return [190 + t * 48, 290 + Math.sin(t * Math.PI) * 18 - t * 4]
})

type Marks = {
  ground: string
  hair: string
  dome: string
  socket: string
  bristles: string
  dots: Pt[]
  neck: string
  coat: string
  fringe: string
}

const marks = once<Marks>(() => {
  // Lit from below and in front by the candle, out of the block; the
  // staircase dark behind and above him.
  const ground = portraitGround(7701, (x, y) =>
    clamp(1.05 - Math.hypot(x - 330, (y - 330) * 0.8) / 300),
  )
  const r = rng(7702)
  // Short dark hair at the back and sides: paper strands combed back.
  const hair = strands(
    r,
    24,
    lerp2(F.pt([180, 118]), F.pt([132, 196])),
    lerp2(F.pt([112, 112]), F.pt([94, 208])),
    [0.4, 0.8],
    2,
  )
  // The bald dome: fine lines on the light side to round it, and two
  // creases above the brow.
  let dome = ''
  for (let rad = 70; rad < 96; rad += 5)
    dome += arcDashes(
      r,
      F.pt([168, 112])[0],
      F.pt([168, 112])[1],
      rad,
      deg(196),
      deg(250),
      [8, 18],
      [4, 9],
    )
  dome += `M${F.p(214, 74)}Q${F.p(222, 72)} ${F.p(228, 78)}M${F.p(212, 84)}Q${F.p(221, 82)} ${F.p(229, 88)}`
  // "set very deep in his head": the socket in shadow under the heavy brow,
  // the candle being below it.
  let socket = ''
  const [sx, sy] = F.pt([220, 124])
  for (let rad = 6; rad < 14; rad += 1.6)
    socket += arcDashes(r, sx, sy, rad, deg(190), deg(340), [6, 12], [0.8, 2])
  // "bushy black eyebrows that wouldn't lie down, but stood up bristling":
  // a thick brow with its hairs standing up and out, each at its own angle.
  let bristles = ''
  for (let i = 0; i < 13; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 13
    const [x, y] = F.pt([204 + t * 30, 109.5 - Math.sin(t * Math.PI) * 3.5])
    const a = deg(between(r, -128, -48) + t * 18)
    const L = between(r, 5, 10)
    bristles += gouge(
      x,
      y,
      x + Math.cos(a) * L,
      y + Math.sin(a) * L,
      between(r, 0.7, 1.1),
      between(r, -1, 1),
    )
  }
  // "strong black dots where his beard and whiskers would have been": the
  // stubble of a close-shaved man, on the cheek in front of the ear, the
  // jaw, the chin and the lip.
  const zone: Pt[] = F.knots([
    [178, 120],
    [194, 124],
    [198, 160],
    [212, 182],
    [226, 186],
    [236, 172],
    [244, 172],
    [240, 186],
    [238, 200],
    [236, 210],
    [218, 216],
    [198, 214],
    [180, 200],
    [172, 170],
  ]).map(([x, y]): Pt => [x, y])
  const head = F.knots(HEAD_K).map(([x, y]): Pt => [x, y])
  // Thickest along the jaw and round the mouth, thinning up the cheek, so
  // the patch has no hard edge.
  const [, lipY] = F.pt([230, 176])
  const dots: Pt[] = []
  for (let tries = 0; dots.length < 120 && tries < 8000; tries++) {
    const x = between(r, 150, 240)
    const y = between(r, 110, 210)
    if (!inside(zone, x, y) || !inside(head, x - 1.5, y)) continue
    if (y < lipY - 8 && r() > clamp(0.25 + (y - (lipY - 60)) / 80)) continue
    if (dots.some(([a, b]) => Math.hypot(a - x, b - y) < 3.4)) continue
    dots.push([x, y])
  }
  const neck = hatch(r, { x0: 100, x1: 190, y0: 204, y1: 240 }, 4.8, 0.08)
  const coat =
    gouge(30, 270, 14, 318, 2.2, 2) +
    gouge(64, 256, 54, 318, 1.6, 2) +
    gouge(120, 264, 116, 318, 1.2, 1) +
    gouge(160, 270, 164, 318, 1, -1)
  // The top edge of the short hair, where it stops below the bald crown:
  // the ends of the hairs, cut short and uneven, not a line.
  let fringe = ''
  for (let i = 0; i < 22; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 22
    const [x, y] = F.pt([182 - t * 92, 117 - Math.sin(t * Math.PI) * 9 + t * 4])
    const a = deg(between(r, -110, -70))
    const L = between(r, 2.5, 5)
    fringe += gouge(x, y + 2, x + Math.cos(a) * L, y + 2 + Math.sin(a) * L, between(r, 0.8, 1.3))
  }
  return { ground, hair, dome, socket, bristles, dots, neck, coat, fringe }
})

function JaggersPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mj-head`
  const hairClip = `${uid}-mj-hair`
  const [ex, ey] = F.pt([223, 127])
  const [ax, ay] = F.pt(MAN_EAR)
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
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={COAT} />
        </g>
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={WAISTCOAT} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        {/* "a large watch-chain", heavy links in paper across the waistcoat */}
        {CHAIN.map(([x, y], i) => (
          <ellipse
            key={`${x}-${y}`}
            cx={n(x)}
            cy={n(y)}
            rx={3.2}
            ry={2}
            transform={`rotate(${i % 2 ? 50 : -20} ${n(x)} ${n(y)})`}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.5}
          />
        ))}
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.neck} strokeWidth={LINE.hairline} />
            <path d={m.dome} strokeWidth={LINE.hairline} />
            <path d={m.socket} strokeWidth={1.1} />
          </g>
          <g fill={INK}>
            {m.dots.map(([x, y]) => (
              <circle key={`${n(x)}-${n(y)}`} cx={n(x)} cy={n(y)} r={0.95} />
            ))}
          </g>
        </g>
        {/* the dark hair at the back and sides, below the bald crown */}
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={HAIR} fill={INK} />
        <path d={m.fringe} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[ax, ay]} h={44} />
        <ManFeatures F={F} brow={4.4} knit={2.5} mouth="thin" />
        <path d={m.bristles} fill={INK} />
        {/* "disagreeably sharp and suspicious": a small eye under a heavy lid */}
        <path
          d={`M${F.p(214, 125.5)}Q${F.p(222, 121)} ${F.p(230.5, 124.5)}`}
          fill="none"
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <path
          d={`M${F.p(215.5, 130.5)}Q${F.p(222.5, 133)} ${F.p(229, 129)}`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinecap="round"
        />
        <circle cx={n(ex)} cy={n(ey)} r={2.3} fill={INK} />
        <circle cx={n(ex + 0.8)} cy={n(ey - 0.8)} r={0.8} fill={PAPER} />
        <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M142 246Q180 242 212 236M146 254Q182 252 212 247"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
      </g>
      <InnerRule />
    </>
  )
}

export const mrJaggersArt: LinocutArt = { width: PW, height: PH, Draw: JaggersPortrait }

export const mrJaggers: Portrait = {
  name: 'Mr Jaggers',
  art: mrJaggersArt,
  alt: "A linocut portrait of Mr Jaggers, drawn from Dickens's description in Chapter 11, in profile, facing left, lit from below by a candle out of the picture, against a dark stair. He is a burly man with a very large head, its high dome bald on top and his dark hair short at the back and sides. Thick black eyebrows stand up in bristles over small, sharp eyes sunk deep in shadow, and his mouth is hard and straight. His jaw, chin, upper lip and cheek are covered in the black dots of a close-shaved beard. He has a thick neck and broad shoulders, and wears a dark coat with a standing collar, a white neckcloth wound high and a dark waistcoat, with a heavy watch-chain looped across it. Five numbered red markers point to his large head, his bald crown, his bristling brows, his watch-chain and the dots of his beard.",
  describedBy: [
    { phrase: 'an exceedingly large head', at: [306, 132], to: flip([100, 134]) },
    { phrase: 'prematurely bald on the top of his head', at: [282, 30], to: flip([160, 40]) },
    {
      phrase: 'bushy black eyebrows that wouldn’t lie down, but stood up bristling',
      at: [26, 86],
      to: flip([228, 98]),
    },
    { phrase: 'a large watch-chain', at: [30, 268], to: flip([212, 302]) },
    {
      phrase: 'strong black dots where his beard and whiskers would have been',
      at: flip(F.pt([190, 176])),
    },
  ],
  where: 'Chapter 11',
  passage:
    'He was a burly man of an exceedingly dark complexion, with an exceedingly large head and a corresponding large hand. He took my chin in his large hand and turned up my face to have a look at me by the light of the candle. He was prematurely bald on the top of his head, and had bushy black eyebrows that wouldn’t lie down, but stood up bristling. His eyes were set very deep in his head, and were disagreeably sharp and suspicious. He had a large watch-chain, and strong black dots where his beard and whiskers would have been if he had let them.',
  note: 'Pip meets the most powerful man in the novel by chance on a dark stair and takes him in feature by feature. The deep-set, suspicious eyes belong to a lawyer who trusts nothing he has not seen proved.',
  artNote:
    'Dickens gives him “an exceedingly dark complexion”, a colour the print cannot show, so it is left to the words and his face is cut in paper. The boy on the stair is not drawn.',
}

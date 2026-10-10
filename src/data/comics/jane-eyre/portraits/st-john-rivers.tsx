import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  InnerRule,
  MAN_HEAD,
  PH,
  PW,
  ProfileEar,
  combedHair,
  hatch,
  nudge,
  once,
  placePath,
  placer,
  portraitGround,
  ribbonLocks,
  smooth,
  type Knot,
} from './common'

/**
 * St John Rivers, as Jane describes him, and nothing else. Chapter 29, at
 * Moor House, while she is still recovering and he sits reading:
 *
 *   "Mr. St. John ... sitting as still as one of the dusty pictures on the
 *   walls, keeping his eyes fixed on the page he perused, and his lips
 *   mutely sealed ... his face riveted the eye; it was like a Greek face,
 *   very pure in outline: quite a straight, classic nose; quite an Athenian
 *   mouth and chin. It is seldom, indeed, an English face comes so near the
 *   antique models as did his. He might well be a little shocked at the
 *   irregularity of my lineaments, his own being so harmonious. His eyes
 *   were large and blue, with brown lashes; his high forehead, colourless as
 *   ivory, was partially streaked over by careless locks of fair hair."
 *
 * and, in the same paragraph, "He was young ... perhaps from twenty-eight to
 * thirty ... tall, slender". (The edition sets his age between dashes; the
 * card's passage begins after them.)
 *
 * So: a young man in profile, facing right, his head bowed a little over
 * the book at the bottom right of the block, his eyes lowered to the page
 * under large lids with the lashes cut along them, his lips closed. He is
 * cut from the one man's head (MAN_HEAD) with only what Jane names changed:
 * the forehead and the nose in one straight line, with no dip between them
 * (a "Greek face", "a straight, classic nose"); a short upper lip and a
 * rounded, decided chin ("an Athenian mouth and chin"); a high, smooth
 * forehead, left bare paper ("colourless as ivory"); and fair hair, cut in
 * paper with fine ink lines, with loose locks fallen across the top of the
 * forehead ("careless locks"). His neck and shoulders are slender. He is a
 * clergyman, and his dress is not described here, so he wears a plain black
 * coat with a high collar and a white neckcloth. His blue eyes and brown
 * lashes are colours the print cannot show; the card says so. There is no
 * red in this plate. Nothing here comes from a film or stage production.
 *
 * Seeds: 7301 for the ground, 7302 for the cuts in the figure.
 */

/**
 * The one man's head: the brow and the nose brought into one straight line,
 * the upper lip short, the chin round and a little forward.
 */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [11, 0.5, 0],
  [12, 3.5, 0],
  [13, 10, 1],
  [14, 9, 2],
  [15, 4, -1],
  [16, 0, 0],
  [17, 0, -0.5],
  [18, 0, -1.5],
  [19, 0.5, -1.5],
  [20, 0, -1.5],
  [21, 1, -1],
  [22, 0.5, -0.5],
  [23, 1.5, 0],
])

/** Bowed six degrees over his book, about the base of the neck. */
const F = placer([16, 0], 0.9, 6, [160, 250])
const HEAD = smooth(F.knots(HEAD_K))

/** Fair hair: over the crown, short behind, a high hairline above the forehead. */
const HAIR_K: Knot[] = [
  [222, 62],
  [210, 60],
  [198, 66],
  [190, 82],
  [186, 102],
  [182, 124],
  [178, 142, 1],
  [170, 140],
  [164, 118],
  [156, 106],
  [144, 106],
  [134, 118],
  [126, 146],
  [118, 176],
  [106, 194, 1],
  [92, 172],
  [87, 132],
  [94, 94],
  [114, 60],
  [146, 36],
  [182, 28],
  [208, 34],
  [222, 46],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** Slender shoulders in a black coat. */
const COAT = smooth([
  [6, 330, 1],
  [12, 296],
  [36, 266],
  [76, 246],
  [118, 238],
  [150, 244],
  [184, 252],
  [216, 250],
  [240, 258],
  [256, 282],
  [262, 330, 1],
])
const COLLAR = smooth([
  [102, 244, 1],
  [112, 216],
  [132, 222],
  [154, 236],
  [170, 254],
  [146, 258],
  [116, 254, 1],
])
const NECKCLOTH = smooth([
  [134, 230, 1],
  [168, 232],
  [200, 226],
  [212, 224],
  [218, 236],
  [216, 252],
  [192, 258],
  [150, 256, 1],
])
const LAPEL = smooth([
  [206, 254, 1],
  [230, 258, 1],
  [244, 330, 1],
  [224, 330, 1],
])

/** The open book at the bottom right: its near page and the far one. */
const BOOK = 'M236 300L292 276L326 290L326 330L250 330Z'
const PAGE_FAR = 'M292 276L322 262L326 290Z'

type Marks = {
  ground: string
  hair: string
  locks: string
  side: string
  back: string
  neck: string
  coat: string
  cloth: string
  lines: string
}

const marks = once<Marks>(() => {
  // A grey daylight from in front of him, falling on the page.
  const ground = portraitGround(7301, (x, y) =>
    clamp(0.05 + ((x - 50) / 280) * 0.85 - Math.max(0, (y - 260) / 300)),
  )
  const r = rng(7302)
  // Fair hair, as Godfrey Cass's is cut: short ink strokes lying round the
  // skull on paper, thickest at the back, away from the light.
  const crown = F.pt([150, 96])
  let hair = combedHair(r, HAIR_PLACED, [crown[0], crown[1] + 10], 300, [4, 8])
  // Along the front of the hair, short strokes brushed forward to the
  // hairline, so the fair hair has an edge on the brow without an outline,
  // which would read as a cap.
  const edge: [number, number][] = [
    [222, 62],
    [210, 60],
    [198, 66],
    [190, 82],
    [186, 102],
    [182, 124],
    [178, 142],
  ]
  for (let i = 0; i < edge.length - 1; i++) {
    const [ax, ay] = edge[i]
    const [bx, by] = edge[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    for (let t = 0; t < L; t += 2.6) {
      const x = ax + ((bx - ax) * t) / L
      const y = ay + ((by - ay) * t) / L
      const [x0, y0] = F.pt([x - between(r, 6, 11), y - between(r, 1, 4)])
      const [x1, y1] = F.pt([x - between(r, 0, 1), y + between(r, 0, 1.5)])
      hair += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2)} ${n((y0 + y1) / 2 - 0.8)} ${n(x1)} ${n(y1)}`
    }
  }
  // "careless locks": loose locks fallen forward over the top of the forehead.
  const locks = ribbonLocks(
    r,
    [
      [F.pt([200, 60]), F.pt([220, 64]), F.pt([226, 90])],
      [F.pt([206, 58]), F.pt([228, 62]), F.pt([232, 80])],
      [F.pt([194, 66]), F.pt([212, 74]), F.pt([214, 96])],
      [F.pt([198, 64]), F.pt([218, 70]), F.pt([220, 92])],
    ],
    [1.7, 2.4],
  )
  // The side of the face away from the light, the ear and the back of the
  // cheek, modelled with a light slanting hatch.
  const side = hatch(r, { x0: 110, x1: 220, y0: 70, y1: 240 }, 4.6, -0.55)
  let back = ''
  const [bx, by] = F.pt([176, 150])
  for (let rad = 56; rad < 90; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(100), deg(148), [8, 22], [2, 5])
  const neck = hatch(r, { x0: 120, x1: 214, y0: 194, y1: 212 }, 4.4, 0.08)
  const coat =
    gouge(232, 270, 246, 318, 1.6, -2) +
    gouge(40, 276, 22, 318, 1.6, 2) +
    gouge(80, 262, 70, 318, 1.2, 2) +
    gouge(128, 272, 124, 318, 0.9, 1)
  const cloth = 'M146 238Q180 238 210 232M150 246Q184 248 212 242'
  // The lines of print on the open pages.
  let lines = ''
  for (let i = 0; i < 6; i++) {
    const y = 304 + i * 4.4
    lines += `M${n(256 + i * 2.4)} ${n(y - (i * 1.2 + 6))}L${n(286 + between(r, 0, 8))} ${n(y - 18 - i * 0.8)}`
  }
  return { ground, hair, locks, side, back, neck, coat, cloth, lines }
})

/** The side of the face away from the light: the ear and the back of the cheek. */
const SHADOW_SIDE = smooth(
  F.knots([
    [190, 118],
    [194, 140],
    [196, 160],
    [194, 182],
    [188, 200],
    [176, 198],
    [146, 172],
    [140, 120],
    [160, 108],
  ]),
)

function StJohnPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-sj-head`
  const hairClip = `${uid}-sj-hair`
  const sideClip = `${uid}-sj-side`
  const P = (d: string) => placePath(d, F)
  const [ax, ay] = F.pt([156, 112])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={sideClip}>
          <path d={SHADOW_SIDE} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={COAT} />
        <path d={BOOK} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.4} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
      </g>
      <path d={HAIR} fill={PAPER} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill="none" stroke={INK} strokeWidth={0.85} strokeLinecap="round" />
      </g>
      <path d={m.locks} fill={INK} />
      <ProfileEar at={[ax, ay]} h={40} />
      <g clipPath={`url(#${sideClip})`}>
        <path d={m.side} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={P('M236 208C214 218 190 212 176 196C170 188 168 178 168 168')} strokeWidth={1.5} />
        {/* a level brow, close over the straight line of the nose */}
        <path d={P('M206 113Q220 108 236 112.5')} strokeWidth={2.6} />
        <path d={P('M245 166C241 163.5 240.5 159.5 243.5 157')} strokeWidth={1.3} />
        {/* "an Athenian mouth": a short upper lip, the lips closed and full */}
        <path d={P('M238.5 175.5L228.5 176.5')} strokeWidth={1.8} />
        <path d={P('M238.5 179Q234 182.5 229.5 180.5')} strokeWidth={LINE.fine} />
        {/* "and chin": round and decided */}
        <path d={P('M235 187.5Q232 191 233.5 195')} strokeWidth={LINE.fine} />
        {/* "His eyes were large": the crease of a large lid, lowered to the page */}
        <path d={P('M208 121Q220 115.5 234 120.5')} strokeWidth={LINE.hairline} />
        <path d={P('M210.5 133Q221.5 137.5 233.5 131')} strokeWidth={LINE.fine} />
        <path d={P('M208 127.5Q221 128.5 235 125.5')} strokeWidth={2.5} />
        {/* "with brown lashes": short lashes at the outer end of the lid */}
        <path d={P('M228 127L232 130.6M232 126L236.2 129')} strokeWidth={LINE.fine} />
      </g>
      {/* the eye open under the lowered lid, looking down */}
      <path d={P('M215.5 128.4Q220 134.2 225 128.2Z')} fill={INK} />
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.cloth} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* The book he reads. */}
      <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={PAGE_FAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.lines} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const stJohnRiversArt: LinocutArt = { width: PW, height: PH, Draw: StJohnPortrait }

export const stJohnRivers: Portrait = {
  name: 'St John Rivers',
  art: stJohnRiversArt,
  alt: "A linocut portrait of St John Rivers in profile, facing right, drawn from Jane's description in Chapter 29: a young, slender man with his head bowed a little over an open book at the bottom right of the block, his eyes lowered to the page and his lips closed. His forehead and nose run in one straight line, with no dip between them, his upper lip is short and his chin round and decided. His high forehead is smooth and bare, and loose locks of his fair hair, cut pale, have fallen across the top of it. He wears a plain black coat with a high collar and a white neckcloth. Five numbered red markers point to his nose, his mouth and chin, his eye, his forehead and his hair.",
  describedBy: [
    { phrase: 'quite a straight, classic nose', at: [304, 146], to: [253, 146] },
    { phrase: 'quite an Athenian mouth and chin', at: [300, 198], to: [252, 180] },
    { phrase: 'His eyes were large and blue, with brown lashes', at: [302, 100], to: [236, 118] },
    { phrase: 'his high forehead, colourless as ivory', at: [206, 92] },
    { phrase: 'careless locks of fair hair', at: [298, 42], to: [238, 58] },
  ],
  where: 'Chapter 29',
  passage:
    'his face riveted the eye; it was like a Greek face, very pure in outline: quite a straight, classic nose; quite an Athenian mouth and chin. It is seldom, indeed, an English face comes so near the antique models as did his. He might well be a little shocked at the irregularity of my lineaments, his own being so harmonious. His eyes were large and blue, with brown lashes; his high forehead, colourless as ivory, was partially streaked over by careless locks of fair hair.',
  note: 'Jane studies St John as she would a statue, and he sits as still as one. Beside his perfect features she feels the irregularity of her own: later she finds she can no more mould her nature to his pattern than her features.',
  artNote:
    'The print cannot show his blue eyes, his brown lashes or the ivory of his skin. His fair hair is cut pale, his forehead is left as bare paper, and the colours are left to the words.',
}

import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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

import { Hand, handPaths } from './hands'
import { InnerRule, PH, PW, hatch, once, portraitGround, smooth, type Knot } from './common'

/**
 * Dr Hastie Lanyon, as Stevenson describes him when Utterson calls on him in
 * Chapter 2, and nothing else:
 *
 *   "This was a hearty, healthy, dapper, red-faced gentleman, with a shock of
 *   hair prematurely white, and a boisterous and decided manner. At sight of
 *   Mr. Utterson, he sprang up from his chair and welcomed him with both
 *   hands."
 *
 * So: a well-fed, healthy face in profile, facing right towards his old
 * friend, with a broad smile ("hearty", "boisterous"); a big, wild mass of
 * white hair standing up off his head ("a shock of hair prematurely white"),
 * cut in paper so it is the brightest thing in the print; the spot colour
 * along the front of his face and flat on his cheekbone ("red-faced"); a
 * crisp wing collar, a neat black bow tie and a white evening waistcoat ("dapper"); and
 * Utterson's hand, reaching in from the right, taken in both of his: one
 * shakes it, the other is laid over the top with its fingers apart ("welcomed
 * him with both hands"). An earlier draft held both hands out empty, thumbs
 * up, and at panel size they read as pointing fingers; taking a hand cannot
 * be misread. The ground is lit from
 * the right, where Utterson has come in. His evening dress is not described
 * beyond "dapper", so it is the plain dinner dress of the 1880s. Nothing here
 * comes from a film or stage production.
 *
 * This is Lanyon before the change. By Chapter 6 "The rosy man had grown
 * pale"; the portrait keeps the first description, and the card's note says
 * what happens to it.
 *
 * Seeds: 3501 for the ground, 3502 for the cuts in the figure.
 */

/** A full, healthy face in profile, facing right. */
const HEAD = smooth([
  [128, 238, 1],
  [126, 212],
  [114, 188],
  [108, 156],
  [110, 120],
  [124, 88],
  [150, 66],
  [184, 60],
  [210, 70],
  [222, 92],
  [226, 112],
  [227.5, 121, 1],
  [222, 130],
  [228, 143],
  [237, 155, 1],
  [232, 161],
  [224, 162, 1],
  [226, 169],
  [224, 172.5, 1],
  [226.5, 177],
  [222, 183],
  [228, 194],
  [224, 206],
  [204, 211],
  [194, 218],
  [192, 238, 1],
])

/**
 * "a shock of hair prematurely white": a wild mass standing up and out, its
 * edge broken into tufts. Seeded, so it is the same shock every time.
 */
const HAIR = once(() => {
  const r = rng(3503)
  const base: Pt[] = [
    [206, 70],
    [214, 60],
    [210, 48],
    [196, 38],
    [178, 32],
    [154, 32],
    [132, 38],
    [114, 52],
    [100, 72],
    [98, 96],
    [100, 120],
    [106, 146],
    [114, 172],
    [122, 194],
    [130, 200],
    [134, 184],
    [144, 156],
    [156, 136],
    [170, 128],
    [178, 110],
    [190, 88],
  ]
  // Every other point on the outer edge is pushed out, so the edge breaks into tufts.
  const pts: Knot[] = base.map(([x, y], i) => {
    if (i > 13 || i === 0) return [x, y]
    const out = i % 2 ? between(r, 6, 11) : between(r, -2, 2)
    const dx = x - 156
    const dy = y - 104
    const L = Math.hypot(dx, dy) || 1
    return [x + (dx / L) * out, y + (dy / L) * out]
  })
  return smooth(pts)
})
const EAR = smooth([
  [170, 134],
  [158, 136],
  [153, 152],
  [157, 168],
  [168, 174],
  [175, 164],
  [176, 146],
])
/**
 * A red, healthy flush along the cheekbone. The end of the nose was printed
 * red as well in the first draft, and a red-tipped nose is the caricaturist's
 * sign for a drinker or a clown: the text says "red-faced", not red-nosed, so
 * the nose is left to the red edge of the profile.
 */
const FLUSH = 'M198 152C199 145 209 141 217 144C222 148 220 157 211 159C204 160 198 158 198 152Z'
/** The front of his face, forehead to chin: the edge the spot colour runs along. */
const FACE_EDGE =
  'M210 70C218 78 224 94 226 112L227.5 121L222 130C224 136 226 140 228 143L237 155L232 161L224 162L226 169L224 172.5L226.5 177L222 183C225 186 228 190 228 194C228 200 226 204 224 206'
/** A hearty man's shoulders and chest, in dinner dress. */
const COAT = smooth([
  [30, 330, 1],
  [36, 292],
  [62, 264],
  [106, 248],
  [130, 242],
  [164, 256],
  [200, 250],
  [232, 262],
  [252, 292],
  [258, 330, 1],
])
/** A crisp wing collar, and a neat bow. */
const COLLAR = smooth([
  [126, 232, 1],
  [160, 244],
  [192, 232, 1],
  [196, 250, 1],
  [160, 258],
  [124, 250, 1],
])
const WING = 'M192 236L206 244L196 250Z'
const BOW = 'M188 250L200 244L201 256Z M200 250L214 244L214 258Z'
const KNOT = 'M198 246L204 246L204 254L198 254Z'
/** "dapper": the white evening waistcoat, and the shirt front above it. */
const WAISTCOAT = smooth([
  [192, 256, 1],
  [216, 254, 1],
  [236, 330, 1],
  [206, 330, 1],
])
const LAPEL = smooth([
  [168, 258, 1],
  [194, 264, 1],
  [214, 330, 1],
  [190, 330, 1],
  [178, 292],
])
/**
 * Both arms held out in front of him, the far one above, the near one below,
 * at the height of his chest: every part of them, and of the visitor's arm,
 * is drawn and then moved down by ARMS.
 */
const ARMS = 'translate(0 22)'
const FAR_SLEEVE = smooth([
  [190, 262],
  [206, 236],
  [236, 212, 1],
  [244, 234, 1],
  [222, 250],
  [212, 272],
])
const NEAR_SLEEVE = smooth([
  [150, 330, 1],
  [168, 292],
  [208, 266],
  [242, 244, 1],
  [250, 268, 1],
  [216, 292],
  [196, 330, 1],
])
const FAR_CUFF = smooth([
  [232, 212, 1],
  [242, 207, 1],
  [250, 230, 1],
  [240, 236, 1],
])
const NEAR_CUFF = smooth([
  [238, 244, 1],
  [248, 240, 1],
  [256, 264, 1],
  [246, 270, 1],
])
/** Utterson's arm, reaching in from the right: the hand Lanyon takes in both of his. */
const VISITOR_SLEEVE = smooth([
  [340, 226, 1],
  [300, 230, 1],
  [296, 264, 1],
  [340, 268, 1],
])
const VISITOR_CUFF = smooth([
  [288, 232, 1],
  [300, 230, 1],
  [300, 262, 1],
  [290, 262, 1],
])
const VISITOR_HAND = smooth([
  [292, 234],
  [276, 236],
  [266, 244],
  [266, 256],
  [278, 262],
  [292, 260],
])
/**
 * "welcomed him with both hands": his near hand shakes the visitor's, the
 * thumb over the top of it; his far hand is laid over both, its fingers apart,
 * draped down across them.
 */
const UNDER_HAND = handPaths({
  wrist: [
    [248, 244],
    [254, 268],
  ],
  knuckles: [
    [272, 246],
    [274, 252.5],
    [274.5, 259],
    [273, 265],
  ],
  tips: [
    [282, 247],
    [284, 253.5],
    [284, 260],
    [281.5, 266],
  ],
  width: [6, 6, 5.8, 5.4],
  thumb: { root: [254, 244], tip: [280, 236], width: 6.4, bow: -1, front: true },
})
const TOP_HAND = handPaths({
  wrist: [
    [240, 210],
    [248, 232],
  ],
  knuckles: [
    [264, 216],
    [268, 222],
    [270, 228.5],
    [270, 235],
  ],
  tips: [
    [279, 234],
    [284, 240],
    [285, 247],
    [282, 253],
  ],
  width: [6.2, 6.4, 6.2, 5.6],
  bow: [-2.5, -2.5, -2.5, -2],
  thumb: null,
})

type Marks = {
  ground: string
  strands: string
  back: string
  neck: string
  coat: string
  sleeves: string
  smile: string
}

const marks = once<Marks>(() => {
  // Lamplight from the right, where Utterson has come in.
  const ground = portraitGround(3501, (x, y) =>
    clamp(0.1 + ((x - 50) / 270) * 0.85 - Math.max(0, (y - 240) / 320)),
  )
  const r = rng(3502)
  // Strands through the white shock: short curved cuts in ink, flowing up and
  // back from the brow and out to the tufts, dense enough to read as hair
  // and not as a cap.
  let strands = ''
  for (let i = 0, tries = 0; i < 170 && tries < 4000; tries++) {
    const x = between(r, 94, 222)
    const y = between(r, 18, 204)
    const dx = x - 160
    const dy = (y - 112) * 1.1
    if (Math.hypot(dx, dy) > 96) continue
    if (x > 180 && y > 84) continue
    if (x > 146 && y > 128) continue
    const out = Math.atan2(dy, dx) - 0.5 + between(r, -0.35, 0.35)
    const L = between(r, 8, 18)
    const mx = x + Math.cos(out) * L * 0.5 + between(r, -2, 2)
    const my = y + Math.sin(out) * L * 0.5 + between(r, -2, 2)
    strands += `M${n(x)} ${n(y)}Q${n(mx)} ${n(my)} ${n(x + Math.cos(out) * L)} ${n(y + Math.sin(out) * L)}`
    i++
  }
  // The hairline over the brow and temple, cut as short strands.
  for (let i = 0; i < 16; i++) {
    const t = i / 15
    const x = 206 - t * 36
    const y = 70 + t * 58
    strands += `M${n(x)} ${n(y)}q${n(-4 - between(r, 0, 4))} ${n(-6 - between(r, 0, 5))} ${n(-6 - between(r, 0, 5))} ${n(-12 - between(r, 0, 6))}`
  }
  let back = ''
  for (let rad = 44; rad < 84; rad += 3.4)
    back += arcDashes(r, 180, 156, rad, deg(106), deg(160), [8, 20], [2, 6])
  const neck = hatch(r, { x0: 126, x1: 200, y0: 214, y1: 240 }, 4.4, 0.07)
  const coat =
    gouge(58, 278, 46, 318, 2.2, 2) +
    gouge(88, 266, 80, 318, 1.6, 1.5) +
    gouge(124, 266, 120, 318, 1.2, -1)
  const sleeves = gouge(176, 300, 206, 278, 1.4, 1) + gouge(212, 274, 236, 256, 1.1, 1)
  // The bunched cheek of a broad smile.
  const smile = arcDashes(r, 214, 168, 12, deg(150), deg(250), [10, 16], [2, 3])
  return { ground, strands, back, neck, coat, sleeves, smile }
})

function LanyonPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-ln-head`
  const hairClip = `${uid}-ln-hair`
  const hair = HAIR()
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={hair} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={hair} />
        <path d={COAT} />
        <g transform={ARMS}>
          <path d={FAR_SLEEVE} />
          <path d={NEAR_SLEEVE} />
          <path d={VISITOR_SLEEVE} />
        </g>
      </g>
      <path d={FAR_SLEEVE} transform={ARMS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      {/* "red-faced": the front of the face edged in the spot colour */}
      <path d={FACE_EDGE} fill="none" stroke={RED} strokeWidth={7} strokeLinejoin="round" />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.5} />
          <path d={m.neck} strokeWidth={1} />
        </g>
        {/* "red-faced": the second block, flat on the cheek */}
        <path d={FLUSH} fill={RED} />
      </g>
      {/* "a shock of hair prematurely white" */}
      <path d={hair} fill={PAPER} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.strands} fill="none" stroke={INK} strokeWidth={0.95} strokeLinecap="round" />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <path
        d="M168 142C162 144 161 156 164 164C166 167 169 166 170 162"
        fill="none"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      <path d={WAISTCOAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M200 272L206 272M204 292L210 292M208 312L214 312"
        fill="none"
        stroke={INK}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a full jaw, back to below the ear */}
        <path d="M224 206C204 214 184 210 174 196C168 186 167 176 168 166" strokeWidth={1.8} />
        {/* white brows, cut as a few bristles, and an eye creased with laughing */}
        <path d="M206 116l4 -3M211 115l4 -3M216 114l4 -2.6M221 114l3.6 -2" strokeWidth={1.3} />
        <path d="M207 125Q214 120.5 222 124" strokeWidth={2.4} />
        <path d="M209 128Q215 130 221 127" strokeWidth={LINE.fine} />
        <path d="M204 126L197 124M204 129L197 131" strokeWidth={LINE.hairline} />
        {/* the nostril, and a broad smile */}
        <path d="M231 159C227.5 156.5 227 152.5 229.5 150" strokeWidth={1.4} />
        <path d="M224 172.5C218 173.6 213 172 209 167" strokeWidth={1.9} />
        <path d="M209 167Q207 164.5 207.8 162" strokeWidth={LINE.fine} />
        <path d="M222 178Q218 180 216 178" strokeWidth={LINE.hairline} />
        <path d={m.smile} strokeWidth={LINE.hairline} />
      </g>
      <circle cx={216.2} cy={125.4} r={2.4} fill={INK} />
      <circle cx={217} cy={124.7} r={0.8} fill={PAPER} />
      <g transform={ARMS}>
        <path d={NEAR_SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.sleeves} fill={PAPER} />
      </g>
      {/* "dapper": the collar and bow, clear of the arm below them */}
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={WING} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={BOW} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />
      <path d={KNOT} fill={INK} />
      <g transform={ARMS}>
        {/* the visitor's hand, taken in both of his */}
        <path d={VISITOR_SLEEVE} fill={INK} stroke={INK} strokeWidth={8} />
        <path d={VISITOR_SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d={
            gouge(306, 238, 328, 236, 1.3) +
            gouge(304, 248, 328, 247, 1.6) +
            gouge(306, 257, 328, 258, 1.2)
          }
          fill={PAPER}
        />
        <path d={VISITOR_CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={VISITOR_HAND} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <path d={NEAR_CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <Hand paths={UNDER_HAND} />
        <path d={FAR_CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <Hand paths={TOP_HAND} />
      </g>
      <InnerRule />
    </>
  )
}

export const lanyonArt: LinocutArt = { width: PW, height: PH, Draw: LanyonPortrait }

export const lanyon: Portrait = {
  name: 'Dr Hastie Lanyon',
  art: lanyonArt,
  alt: "A linocut portrait of Dr Lanyon in profile, facing right, drawn from Stevenson's description in Chapter 2: a hearty, well-fed man with a broad smile and a big, wild mass of white hair standing up off his head, cut in pale paper. The front of his face is edged in red, and his cheek is printed in red. He is neatly dressed for dinner, in a black coat, a white waistcoat, a crisp wing collar and a black bow tie, and he has taken the hand of a visitor, whose dark sleeve and white cuff reach in from the right, in both of his: one hand shakes it, the other is laid over the top, its fingers apart. Four numbered red markers point to his red face, his white hair, his collar and bow tie, and his hands.",
  describedBy: [
    { phrase: 'red-faced', at: [266, 120], to: [220, 146] },
    { phrase: 'a shock of hair prematurely white', at: [62, 56], to: [106, 70] },
    { phrase: 'dapper', at: [140, 292], to: [196, 252] },
    { phrase: 'welcomed him with both hands', at: [306, 302], to: [274, 284] },
  ],
  where: 'Chapter 2',
  passage:
    'This was a hearty, healthy, dapper, red-faced gentleman, with a shock of hair prematurely white, and a boisterous and decided manner. At sight of Mr. Utterson, he sprang up from his chair and welcomed him with both hands.',
  note: 'Everything about Lanyon is loud and healthy, which makes his fall the more shocking: in Chapter 6 “The rosy man had grown pale”, after he has seen what Jekyll can become.',
}

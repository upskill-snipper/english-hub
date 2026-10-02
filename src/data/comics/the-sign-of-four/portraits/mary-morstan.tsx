import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'

import { greyish } from '../panels/people'
import {
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  combedHair,
  handPaths,
  hatch,
  once,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Mary Morstan, as Watson first sees her, coming into the sitting room at
 * Baker Street in Chapter 2, and nothing else:
 *
 *   "Miss Morstan entered the room with a firm step and an outward composure
 *   of manner. She was a blonde young lady, small, dainty, well gloved, and
 *   dressed in the most perfect taste. There was, however, a plainness and
 *   simplicity about her costume which bore with it a suggestion of limited
 *   means. The dress was a sombre greyish beige, untrimmed and unbraided, and
 *   she wore a small turban of the same dull hue, relieved only by a
 *   suspicion of white feather in the side. Her face had neither regularity
 *   of feature nor beauty of complexion, but her expression was sweet and
 *   amiable, and her large blue eyes were singularly spiritual and
 *   sympathetic."
 *
 * So: a young woman in profile, facing right, towards Holmes, seated in the
 * chair he has set for her, her gloved hands together in her lap. Her fair
 * hair is cut in paper, drawn back under the turban and gathered in a knot at
 * the nape; her small turban sits on top of her head, and in its side, the
 * side we see, a small curled white feather. The turban and the dress are the
 * same dull hue, so both are cut the figure kit's way of printing grey: ink
 * with fine paper lines at one density, upright on the dress (greyish() in
 * ../panels/people.tsx) and following the wound cloth on the turban, and the
 * dress has no trimming and no braid at all. Her face is plain and kind,
 * not a beauty's ("neither regularity of feature nor beauty of complexion"),
 * with a large eye. She is the Mary of the figure kit: paper hair, an ink
 * turban with a white feather at the side, the one greyish dress among the
 * black coats, and paper gloves.
 *
 * Her eyes are blue and the print has no blue, so their colour is left to the
 * words. There is no red: nothing in the passage asks for it.
 *
 * Seeds: 4301 for the ground, 4302 for the cuts in the figure.
 */

/** Her head, in profile facing right: a soft brow, a small nose, a soft chin. */
const HEAD = smooth([
  [130, 238, 1],
  [129, 214],
  [122, 190],
  [114, 160],
  [114, 124],
  [124, 94],
  [143, 72],
  [168, 62],
  [192, 66],
  [207, 80],
  [214, 98],
  [216, 112],
  [218, 121, 1],
  [215, 129.5],
  [218.5, 139],
  [223, 148],
  [227.5, 156, 1],
  [222.5, 159.5],
  [218, 160.5, 1],
  [218.8, 165.5],
  [218, 169.5, 1],
  [215, 171.5, 1],
  [217, 175],
  [215.4, 179],
  [212.5, 182, 1],
  [212.6, 188.5],
  [208.5, 194.5],
  [200, 198.5],
  [190, 198.5],
  [182, 203],
  [178, 238, 1],
])

/**
 * "a blonde young lady": her fair hair, drawn back from the brow under the
 * turban, over the top of the ear and gathered at the back. Filled with
 * PAPER, outlined and combed in ink.
 */
const HAIR_KNOTS: Knot[] = [
  [205, 80, 1],
  [198, 92],
  [190, 104],
  [178, 112],
  [164, 116],
  [150, 126],
  [136, 140],
  [124, 154],
  [112, 150],
  [110, 122],
  [118, 96],
  [132, 76],
  [148, 66, 1],
]
const HAIR = smooth(HAIR_KNOTS)
/** The knot of hair at the nape, and the turns cut round it. */
const KNOT = 'M86 150a22 20 0 1 0 44 0a22 20 0 1 0 -44 0Z'
const KNOT_TURNS =
  'M92 146Q98 134 112 134Q124 136 126 148M95 156Q100 146 110 145Q119 146 120 154M100 164Q108 158 116 162'

/**
 * "a small turban of the same dull hue": a small, soft crown of wound cloth
 * set high on the head and tipped a little forward, fuller at the front where
 * the cloth is twisted. Ink, cut with fine lines that follow the wound cloth
 * round the crown (the same density as the dress's upright lines, so the two
 * print as one dull hue), and the twists of the folds cut across them.
 */
const TURBAN = smooth([
  [130, 80, 1],
  [127, 66],
  [133, 53],
  [147, 43],
  [166, 37],
  [186, 34],
  [203, 38],
  [214, 49],
  [218, 63],
  [215, 79, 1],
  [196, 73],
  [162, 73],
])
/** The wound cloth: the edges of the folds cut in paper, wrapping round the crown. */
const TURBAN_FOLDS =
  gouge(132, 74, 214, 64, 1.4, -3.6) +
  gouge(134, 62, 211, 47, 1.2, -4.4) +
  gouge(150, 47, 204, 40, 1, -2.4) +
  gouge(190, 36, 214, 60, 1, 3.6)

/**
 * "a suspicion of white feather in the side": a small curled plume set into
 * the side of the turban we see, lying back along it and curling up at the
 * end, over the back of the crown. A paper vane along an ink quill, the
 * barbs cut across it.
 */
const QUILL_PTS: [number, number][] = [
  [194, 62],
  [182, 57],
  [168, 52],
  [154, 47],
  [141, 40],
  [131, 31],
  [127, 22],
  [130, 15],
]
const FEATHER = ribbon(QUILL_PTS, 13, 0.6)
const QUILL = 'M194 62C176 56 156 49 142 41C133 35 127 27 128 20C129 16 131 15 133 15'
const BARBS = (() => {
  let d = ''
  for (let i = 1; i < QUILL_PTS.length - 2; i++) {
    const [x0, y0] = QUILL_PTS[i]
    const [x1, y1] = QUILL_PTS[i + 1]
    const dx = x1 - x0
    const dy = y1 - y0
    const L = Math.hypot(dx, dy) || 1
    const nx = -dy / L
    const ny = dx / L
    for (const t of [0.3, 0.8]) {
      const x = x0 + dx * t
      const y = y0 + dy * t
      d += `M${n(x)} ${n(y)}L${n(x + nx * 4.6 - (dx / L) * 3)} ${n(y + ny * 4.6 - (dy / L) * 3)}`
      d += `M${n(x)} ${n(y)}L${n(x - nx * 4.6 - (dx / L) * 3)} ${n(y - ny * 4.6 - (dy / L) * 3)}`
    }
  }
  return d
})()

/** Fine lines following the wound cloth round the crown: its dull hue. */
function turbanGrey(): string {
  let d = ''
  for (let i = 0; i < 14; i++) {
    const y0 = 80 - i * 3.4
    d += `M126 ${n(y0)}Q172 ${n(y0 - 16 - i * 0.6)} 220 ${n(y0 - 10 - i * 1.4)}`
  }
  return d
}

/** Her shoulders and the bodice of the plain dress, seated. */
const DRESS = smooth([
  [40, 330, 1],
  [46, 292],
  [70, 254],
  [104, 234],
  [132, 228],
  [180, 230],
  [200, 240],
  [210, 258],
  [214, 282],
  [222, 304],
  [226, 330, 1],
])
/** The high, plain collar of the dress, close round the neck. */
const COLLAR = smooth([
  [127, 210, 1],
  [154, 216],
  [182, 210, 1],
  [184, 236, 1],
  [155, 242],
  [125, 236, 1],
])
/** The near sleeve, down from the shoulder to the elbow and along to the lap. */
const SLEEVE = smooth([
  [76, 266],
  [102, 248],
  [126, 258],
  [138, 282],
  [166, 278],
  [186, 276, 1],
  [190, 304, 1],
  [162, 312],
  [126, 316],
  [98, 304],
  [80, 288],
])

/** Her far hand, palm down in her lap, gloved: only its fingers show. */
const FAR_HAND = handPaths({
  wrist: [
    [194, 272],
    [197, 294],
  ],
  knuckles: [
    [214, 268.5],
    [217.5, 275],
    [219.5, 281.5],
    [220, 288],
  ],
  tips: [
    [240, 265],
    [245, 273],
    [247, 281.5],
    [244.5, 290],
  ],
  width: [6.4, 6.6, 6.4, 5.8],
  bow: [-1, -0.8, -0.4, 0.2],
  thumb: null,
})
/** Her near hand laid over it, gloved, the fingers apart. */
const NEAR_HAND = handPaths({
  wrist: [
    [188, 280],
    [191, 304],
  ],
  knuckles: [
    [208, 279],
    [211.5, 286],
    [213.5, 293],
    [214, 300],
  ],
  tips: [
    [233, 278],
    [238, 286.5],
    [239.5, 295],
    [236.5, 303.5],
  ],
  width: [6.4, 6.6, 6.4, 5.8],
  bow: [-0.8, -0.6, -0.2, 0.3],
  thumb: { root: [193, 280], tip: [211, 268.5], width: 6.4, bow: -1.6 },
})
/** The buttoned wrist of each glove: a short band of paper with a button. */
const GLOVE_CUFFS =
  'M186.6 278.4L193 277.4L196.8 303.8L190.4 304.8ZM193 270.6L199 269.6L202.2 293.4L196.2 294.4Z'

type HeadMarks = {
  combed: string
  back: string
  neck: string
  cheek: string
  turbanLines: string
}

const headMarks = once<HeadMarks>(() => {
  const r = rng(4302)
  // The fair hair combed back over the crown to the knot.
  const combed = combedHair(r, HAIR_KNOTS, [150, 140], 70, [7, 14])
  // A soft shadow down the back of the head and the nape, under the hair.
  let back = ''
  for (let rad = 46; rad < 80; rad += 3.6)
    back += arcDashes(r, 168, 150, rad, deg(112), deg(160), [8, 20], [2, 6])
  const neck = hatch(r, { x0: 124, x1: 184, y0: 198, y1: 214 }, 5.4, 0.06)
  // A soft cheek: two short bowls of line, no hollow.
  let cheek = ''
  for (let rad = 12; rad < 19; rad += 3.4)
    cheek += arcDashes(r, 186, 150, rad, deg(78), deg(130), [6, 14], [2, 5])
  return { combed, back, neck, cheek, turbanLines: turbanGrey() }
})

type Marks = {
  ground: string
  dressGrey: string
  sleeve: string
}

const marks = once<Marks>(() => {
  // Afternoon light from the window, on her right, where Holmes sits.
  const ground = portraitGround(4301, (x, y) =>
    clamp(0.12 + ((x - 80) / 240) * 0.8 - Math.max(0, (y - 250) / 220)),
  )
  const dressGrey = greyish({ x0: 30, x1: 232, y0: 216, y1: 330 }, 3.4)
  const sleeve = gouge(104, 268, 124, 296, 1.2, 1) + gouge(146, 300, 184, 294, 1, -1)
  return { ground, dressGrey, sleeve }
})

/**
 * The ink halo round Mary's head, knot, turban and feather, in the frame of
 * this portrait, for a piece that sets her head on a busy ground.
 */
export function MaryHeadHalo({ width = 9 }: { width?: number }) {
  return (
    <g fill={INK} stroke={INK} strokeWidth={width} strokeLinejoin="round">
      <path d={HEAD} />
      <path d={KNOT} />
      <path d={TURBAN} />
      <path d={FEATHER} />
    </g>
  )
}

/**
 * Mary's head as this portrait cuts it (Chapter 2): her face, her fair hair
 * drawn back to a knot, the small turban and the white feather, in the frame
 * of this portrait (about x 86 to 228, y 12 to 240, facing right). Exported
 * so that another portrait she appears in (Mrs Cecil Forrester's) shows the
 * same face: place it with a transform, and mirror it with a negative x
 * scale for a Mary facing left. `uid` keeps its clip ids unique to the piece;
 * `w` multiplies every line weight, for a head set smaller than this one:
 * pass 1 / the scale, so its lines print at the weight they have here.
 */
export function MaryHead({ uid, w = 1 }: { uid: string; w?: number }) {
  const m = headMarks()
  const headClip = `${uid}-mm-head`
  const hairClip = `${uid}-mm-hair`
  const turbanClip = `${uid}-mm-turban`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={turbanClip}>
          <path d={TURBAN} />
        </clipPath>
      </defs>
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6 * w} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.4 * w} />
          <path d={m.neck} strokeWidth={0.9 * w} />
          <path d={m.cheek} strokeWidth={0.9 * w} />
        </g>
      </g>
      {/* "a blonde young lady": fair hair drawn back to a knot at the nape */}
      <path d={KNOT} fill={PAPER} stroke={INK} strokeWidth={1.6 * w} />
      <path d={KNOT_TURNS} fill="none" stroke={INK} strokeWidth={LINE.hairline * w} />
      <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1 * w} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.combed} fill="none" stroke={INK} strokeWidth={LINE.hairline * w} />
      </g>
      <ProfileEar at={[156, 130]} h={32} w={w} />
      {/* the hair laid back over the top of the ear */}
      <path
        d="M150 126Q160 118 172 120"
        fill="none"
        stroke={PAPER}
        strokeWidth={5 * w}
        strokeLinecap="round"
      />
      <path
        d="M148 128Q160 116 174 119"
        fill="none"
        stroke={INK}
        strokeWidth={1.3 * w}
        strokeLinecap="round"
      />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a soft jaw, back to below the ear */}
        <path d="M201 197C193 198.6 186 195.6 181 190" strokeWidth={1.2 * w} />
        {/* a fine brow */}
        <path d="M193 121Q204 115.5 216 118" strokeWidth={2.2 * w} />
        {/* the nostril and a small mouth */}
        <path d="M221 158C218 156.5 218 152.5 220.5 150.5" strokeWidth={1.3 * w} />
        <path d="M217.6 171.2L210.5 170.8" strokeWidth={1.6 * w} />
        <path d="M215 177.5Q212.5 179 210.8 178" strokeWidth={LINE.hairline * w} />
      </g>
      {/* "her large blue eyes": a large, open eye, its colour left to the words */}
      <ProfileEye at={[203, 132]} s={1.24} w={w} />
      <path
        d="M195.4 129.4L191.6 127.2M196.6 127L193.6 123.8"
        fill="none"
        stroke={INK}
        strokeWidth={1 * w}
        strokeLinecap="round"
      />
      {/* "a small turban of the same dull hue" */}
      <path d={TURBAN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve * w} />
      <path
        d={m.turbanLines}
        clipPath={`url(#${turbanClip})`}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.7 * w}
      />
      <path d={TURBAN_FOLDS} clipPath={`url(#${turbanClip})`} fill={PAPER} />
      {/* "a suspicion of white feather in the side" */}
      <path d={FEATHER} fill={PAPER} stroke={INK} strokeWidth={1.2 * w} strokeLinejoin="round" />
      <path d={QUILL} fill="none" stroke={INK} strokeWidth={1.2 * w} strokeLinecap="round" />
      <path
        d={BARBS}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline * w}
        strokeLinecap="round"
      />
    </g>
  )
}

function MaryPortrait({ uid }: ArtProps) {
  const m = marks()
  const dressClip = `${uid}-mm-dress`
  const sleeveClip = `${uid}-mm-sleeve`
  return (
    <>
      <defs>
        <clipPath id={dressClip}>
          <path d={DRESS} />
        </clipPath>
        <clipPath id={sleeveClip}>
          <path d={SLEEVE} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <MaryHeadHalo />
      <path d={DRESS} fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round" />
      {/* "The dress was a sombre greyish beige, untrimmed and unbraided" */}
      <path d={DRESS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={m.dressGrey}
        clipPath={`url(#${dressClip})`}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.9}
      />
      <MaryHead uid={uid} />
      {/* the high collar */}
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* the near arm, and her gloved hands in her lap */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path
        d={m.dressGrey}
        clipPath={`url(#${sleeveClip})`}
        fill="none"
        stroke={PAPER}
        strokeWidth={0.9}
      />
      <path d={m.sleeve} fill={INK} />
      <Hand paths={FAR_HAND} />
      <Hand paths={NEAR_HAND} />
      <path d={GLOVE_CUFFS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <circle cx={n(193.6)} cy={n(293)} r={1.5} fill={INK} />
      <InnerRule />
    </>
  )
}

export const maryMorstanArt: LinocutArt = { width: PW, height: PH, Draw: MaryPortrait }

export const maryMorstan: Portrait = {
  name: 'Mary Morstan',
  art: maryMorstanArt,
  alt: 'A linocut portrait of Mary Morstan in profile, facing right, drawn from Watson’s description in Chapter 2: a small young woman with a plain, kind face, a large eye and fair hair, cut pale, drawn back to a knot at the nape. On top of her head sits a small, close turban with a little curled white feather in its side. Her plain dress, with a high collar and no trimming, is cut in fine upright lines, and her turban in fine lines that follow its wound cloth, to show their dull greyish colour, the only grey in the picture. She sits with her gloved hands together in her lap. Six numbered red markers point to her fair hair, her gloves, her dress, her turban, the feather and her eye.',
  describedBy: [
    { phrase: 'a blonde young lady', at: [62, 112], to: [116, 132] },
    { phrase: 'well gloved', at: [296, 300], to: [246, 292] },
    {
      phrase: 'The dress was a sombre greyish beige, untrimmed and unbraided',
      at: [40, 236],
      to: [74, 270],
    },
    { phrase: 'a small turban of the same dull hue', at: [256, 30], to: [214, 50] },
    { phrase: 'a suspicion of white feather in the side', at: [82, 30], to: [124, 24] },
    { phrase: 'her large blue eyes', at: [268, 108], to: [212, 130] },
  ],
  where: 'Chapter 2',
  passage:
    'Miss Morstan entered the room with a firm step and an outward composure of manner. She was a blonde young lady, small, dainty, well gloved, and dressed in the most perfect taste. There was, however, a plainness and simplicity about her costume which bore with it a suggestion of limited means. The dress was a sombre greyish beige, untrimmed and unbraided, and she wore a small turban of the same dull hue, relieved only by a suspicion of white feather in the side. Her face had neither regularity of feature nor beauty of complexion, but her expression was sweet and amiable, and her large blue eyes were singularly spiritual and sympathetic.',
  note: 'Watson reads her clothes the way Holmes reads a watch: plain and untrimmed, they tell him of “limited means”. Then he lingers on her face and her eyes, and the romance begins in the same paragraph as the case.',
  artNote:
    'The print has no blue, so her blue eyes are left to the words. The greyish beige of her dress and turban is cut as fine pale lines over the black, the way this print shows grey.',
}

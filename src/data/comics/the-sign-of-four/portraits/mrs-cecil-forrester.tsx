import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { MaryHead, MaryHeadHalo } from './mary-morstan'
import {
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  handPaths,
  hatch,
  lerp2,
  once,
  portraitGround,
  smooth,
  strands,
  type Knot,
} from './common'

/**
 * Mrs Cecil Forrester at her own door, at two in the morning, as Watson
 * leaves Mary Morstan with her in Chapter 7, and nothing else:
 *
 *   "She opened the door herself, a middle-aged, graceful woman, and it gave
 *   me joy to see how tenderly her arm stole round the other's waist and how
 *   motherly was the voice in which she greeted her. She was clearly no mere
 *   paid dependant, but an honoured friend. [...] As we drove away I stole a
 *   glance back, and I still seem to see that little group on the step, the
 *   two graceful, clinging figures, the half-opened door, the hall-light
 *   shining through stained glass, the barometer, and the bright
 *   stair-rods."
 *
 * So: the two women on the step, Mrs Forrester on the left in her doorway,
 * facing right, her arm round Mary's waist, her mouth open as she greets her;
 * Mary on the right, facing her; behind Mrs Forrester the door half open on
 * the lit hall, the light shining out through the stained glass in its upper
 * half, the barometer on the hall wall and the bright rods of the stair
 * carpet. The door is far taller than the women, so only its lower part is
 * in the block. The stained glass is the one thing printed in the spot
 * colour: the warmth of the "tranquil English home" Watson glimpses.
 *
 * Mrs Forrester is drawn as the panel of Chapter 9 draws her
 * (../panels/marys-indifference-to-the-fortune.tsx): nothing else of her is
 * described, so she is plain, a woman of middle years with her dark hair
 * drawn up into a knot at the back of the crown, in a dark dress of 1888 with
 * a narrow white band at the neck, a kind eye and the line of middle age from
 * the nose to the mouth. She is taller than Mary, who is "small" (Chapter 2).
 *
 * Mary is the Mary of her own portrait (MaryHead in ./mary-morstan.tsx: the
 * fair hair, the small turban and its white feather), turned to face left,
 * and in the dark cloak she was "muffled in" for the night's journey
 * (Chapter 3), as the figure kit dresses her for it.
 *
 * Seeds: 5101 for the ground, 5102 for the cuts in the figures.
 */

// ── MRS FORRESTER'S HEAD, in a portrait's frame, set smaller by FH ───────────

/** Her head is drawn in the frame of a single sitter's and set into the block by FH. */
const FS = 0.62
const FH = `translate(33.7 28.2) scale(${FS})`
/** Line weights inside FH are multiplied by this, so they print at a single sitter's weight. */
const FW = 1 / FS

/** A woman's head of middle years, facing right: an even brow, a straight nose, a firm chin. */
const HEAD = smooth([
  [132, 250, 1],
  [131, 222],
  [123, 196],
  [114, 162],
  [113, 124],
  [122, 94],
  [141, 72],
  [166, 61],
  [191, 64],
  [207, 78],
  [214, 96],
  [216.5, 110],
  [218.5, 120, 1],
  [215, 128.5],
  [219.5, 138],
  [224.5, 147.5],
  [229.5, 156, 1],
  [224, 159.5],
  [219, 160.6, 1],
  [219.8, 165.6],
  [218.2, 168.4, 1],
  [214.8, 170.4, 1],
  [217, 173.4],
  [215.8, 177.8],
  [212.6, 181, 1],
  [213, 188],
  [209.6, 194.6],
  [201, 199],
  [190, 199.4],
  [182, 204],
  [178, 250, 1],
])
/** Her dark hair, drawn back from the brow and over the top of the ear. */
const HAIR_KNOTS: Knot[] = [
  [210, 86, 1],
  [201, 96],
  [189, 104],
  [176, 110],
  [162, 114],
  [149, 124],
  [136, 138],
  [125, 152],
  [113, 148],
  [111, 120],
  [118, 94],
  [131, 74],
  [150, 63],
  [172, 59],
  [193, 64, 1],
]
const HAIR = smooth(HAIR_KNOTS)
/** Her dark hair drawn up into a knot at the back of the crown, as the panel draws it (not the text's words). */
const KNOT = 'M104 76a22 19 0 1 0 44 0a22 19 0 1 0 -44 0Z'

// ── THE FIGURES IN THE BLOCK ────────────────────────────────────────────────

/** Mary's head, from her own portrait, turned to face left and set by MH. */
const MS = 0.58
const MH = `translate(354 58) scale(${-MS} ${MS})`

/** Mrs Forrester's dark dress: the shoulders and the bodice, slender and upright. */
const DRESS = smooth([
  [58, 330, 1],
  [62, 290],
  [76, 238],
  [96, 206],
  [116, 194],
  [144, 196],
  [170, 200],
  [188, 212],
  [196, 238],
  [198, 272],
  [200, 330, 1],
])
/** A narrow white band at the neck of the dress, as the panel gives her (not the text's words). */
const BAND = 'M112.4 181.4Q130 186.4 148.4 182.4L149.4 189.4Q130 193.4 111.4 188.4Z'
/** Her near arm, down from the shoulder and forward round Mary's waist. */
const SLEEVE = smooth([
  [154, 214],
  [174, 204],
  [192, 222],
  [202, 248],
  [240, 254],
  [276, 252, 1],
  [280, 274, 1],
  [240, 278],
  [196, 276],
  [178, 256],
  [160, 232],
])
/** Her hand, round the far side of Mary's waist, the fingers apart. */
const HAND = handPaths({
  wrist: [
    [276, 251.4],
    [279.4, 273],
  ],
  knuckles: [
    [292, 251],
    [295.4, 256.8],
    [297, 262.8],
    [297, 268.6],
  ],
  tips: [
    [306.6, 258],
    [309, 264.4],
    [308.6, 270.6],
    [305.6, 276.2],
  ],
  width: [5.2, 5.4, 5.2, 4.6],
  bow: [1.2, 1, 0.6, 0.2],
  thumb: { root: [281, 252], tip: [293, 243], width: 5.2, bow: -1 },
})
const CUFF = smooth([
  [272, 250.6, 1],
  [278.6, 250, 1],
  [282, 274, 1],
  [275.4, 275, 1],
])

/** Mary's dark cloak, "muffled in" it for the night, falling from her shoulders. */
const CLOAK = smooth([
  [222, 330, 1],
  [224, 284],
  [230, 240],
  [242, 212],
  [254, 198],
  [280, 196],
  [300, 206],
  [312, 228],
  [318, 270],
  [322, 330, 1],
])

/**
 * The doorway behind Mrs Forrester, taller than the block: the door is far
 * taller than a woman, so only its lower part is in the picture.
 */
const DOOR = { x0: 14, x1: 122 }
/**
 * "the half-opened door": the door swung back into the hall on its hinges at
 * the left, its far edge turned away from us and so a little shorter. Its
 * upper half is glazed, and the hall-light shines out through the glass.
 */
const LEAF = 'M14 0L66 10L66 312L14 330Z'
/** The glazed upper half of the door, and the leading that holds its panes. */
const GLASS = 'M20 22L60 29.4L60 150L20 156Z'
const LEADS =
  'M40 25.6V153M20 60L60 64M20 98L60 100M20 128L60 129' +
  'M30 23.8V58.2M50 27.6V62.4M27 99L33 128M53 100.4L47 128.6'
/** Two of the panes stained red. */
const RED_PANES =
  'M41.2 66L58.8 68.8L58.8 98.8L41.2 97.2ZM21.2 99.4L38.8 98.8L38.8 126.8L21.2 127.4Z'
/** The wooden panels of the lower half, cut round in paper. */
const PANELS = 'M22 176L58 172L58 236L22 240ZM22 256L58 252L58 300L22 306Z'
/** The barometer on the hall wall: its long case and its round dial. */
const BARO_CASE = 'M80 42L88 42L89 92L79 92Z'
const BARO_DIAL = 'M72 104a12 12 0 1 0 24 0a12 12 0 1 0 -24 0Z'
/**
 * "the bright stair-rods": the stair rising at the back of the hall, seen
 * over Mrs Forrester's shoulder, its carpet dark and a bright brass rod across
 * the back of every tread.
 */
const STAIR = 'M66 214L66 196L104 140L104 162L74 214Z'
const RODS = [0, 1, 2, 3, 4].map((i) => {
  const x = 70 + i * 7.6
  const y = 200 - i * 11.4
  return `M${n(x - 3)} ${n(y + 2)}L${n(x + 6)} ${n(y - 4)}`
})

type Marks = {
  ground: string
  hall: string
  hair: string
  back: string
  neck: string
  cheek: string
  dress: string
  cloak: string
}

const marks = once<Marks>(() => {
  // Night: the house front is dark but for the light spilling from the door.
  const ground = portraitGround(5101, (x, y) =>
    clamp(0.04 + 0.7 * clamp(1 - Math.hypot(x - 70, (y - 200) * 0.8) / 220)),
  )
  const r = rng(5102)
  // The lit hall: the line where its floor meets the far wall, and the
  // shadow the door throws on the floor.
  const hall = 'M66 214L104 158M66 300L122 296'
  // Her dark hair drawn back to the knot: paper strands on the black.
  const hair =
    strands(r, 46, lerp2([200, 84], [150, 126]), lerp2([124, 80], [124, 132]), [0.7, 1.2], 2) +
    strands(r, 14, lerp2([192, 66], [146, 64]), lerp2([136, 72], [122, 88]), [0.6, 1], 1.4)
  let back = ''
  for (let rad = 46; rad < 80; rad += 3.6)
    back += arcDashes(r, 168, 150, rad, deg(112), deg(160), [8, 20], [2, 6])
  const neck = hatch(r, { x0: 130, x1: 182, y0: 200, y1: 210 }, 5, 0.12)
  let cheek = ''
  for (let rad = 12; rad < 20; rad += 3.4)
    cheek += arcDashes(r, 186, 150, rad, deg(80), deg(132), [6, 14], [2, 5])
  const dress =
    gouge(80, 250, 70, 318, 1.6, 2) +
    gouge(104, 222, 96, 300, 1.1, 1.5) +
    gouge(186, 230, 190, 318, 1, -1)
  const cloak =
    gouge(246, 214, 236, 318, 1.2, 2) +
    gouge(272, 214, 270, 318, 1, 1) +
    gouge(304, 222, 312, 318, 1.2, -1.5)
  return { ground, hall, hair, back, neck, cheek, dress, cloak }
})

function ForresterPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-cf-head`
  const hairClip = `${uid}-cf-hair`
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
      <path d={m.ground} fill={PAPER} />
      {/* the lit hall through the doorway */}
      <rect x={DOOR.x0} y={0} width={DOOR.x1 - DOOR.x0} height={PH} fill={PAPER} />
      <path d={m.hall} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      {/* the barometer on the hall wall */}
      <path d={BARO_CASE} fill={INK} />
      <path d={BARO_DIAL} fill={PAPER} stroke={INK} strokeWidth={3} />
      <path d="M84 104L90 96" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      {/* the foot of the stair, and "the bright stair-rods" */}
      <path d={STAIR} fill={INK} />
      {RODS.map((d) => (
        <path key={d} d={d} stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" />
      ))}
      {/* the jambs of the doorway */}
      <path d={`M${DOOR.x0} 0V${PH}M${DOOR.x1} 0V${PH}`} stroke={INK} strokeWidth={4} />
      {/* "the half-opened door", "the hall-light shining through stained glass" */}
      <path d={LEAF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={GLASS} fill={PAPER} />
      <path d={RED_PANES} fill={RED} />
      <path d={LEADS} fill="none" stroke={INK} strokeWidth={2} />
      <path d={GLASS} fill="none" stroke={INK} strokeWidth={2.6} />
      <path d={PANELS} fill="none" stroke={PAPER} strokeWidth={1.3} />
      {/* The ink halo that lifts the two figures off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={DRESS} />
        <path d={CLOAK} />
        <path d={SLEEVE} />
      </g>
      <g transform={FH}>
        <g fill={INK} stroke={INK} strokeWidth={9 * FW} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={KNOT} />
        </g>
      </g>
      <g transform={MH}>
        <MaryHeadHalo width={9 / MS} />
      </g>
      {/* Mary's dark cloak */}
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      {/* Mrs Forrester's dark dress, and the white band at its neck */}
      <path d={DRESS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.dress} fill={PAPER} />
      {/* Mrs Forrester's head */}
      <g transform={FH}>
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6 * FW} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.4 * FW} />
            <path d={m.neck} strokeWidth={0.9 * FW} />
            <path d={m.cheek} strokeWidth={0.9 * FW} />
          </g>
        </g>
        <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve * FW} />
        <path
          d="M110 74Q124 60 142 70M112 84Q126 72 140 82"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2 * FW}
          strokeLinecap="round"
        />
        <path d={HAIR} fill={INK} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[158, 130]} h={32} w={FW} />
        {/* the hair laid back over the top of the ear */}
        <path
          d="M148 128Q160 116 174 119"
          fill="none"
          stroke={INK}
          strokeWidth={5 * FW}
          strokeLinecap="round"
        />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw, back to below the ear */}
          <path d="M202 198C194 200 187 197 182 191" strokeWidth={1.2 * FW} />
          {/* an even brow */}
          <path d="M193 121.5Q204 117 216.5 119" strokeWidth={2.2 * FW} />
          {/* the nostril, and the line of middle age from the nose to the mouth */}
          <path d="M223.4 158.6C220.4 157.2 220.2 153.2 222.6 151.2" strokeWidth={1.3 * FW} />
          <path d="M215.6 151Q209 158 210.4 166" strokeWidth={0.9 * FW} />
          {/* "how motherly was the voice": the mouth a little open as she speaks */}
          <path d="M218.2 168.5L211.4 168.1" strokeWidth={1.6 * FW} />
          <path d="M216.6 173.8Q213.8 175.4 211.8 174" strokeWidth={1.1 * FW} />
        </g>
        {/* a kind eye, its lid lowered as she looks down at Mary */}
        <ProfileEye at={[203, 132]} s={1.12} heavy w={FW} />
      </g>
      <path d={BAND} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      {/* Mary's head, from her own portrait, turned to Mrs Forrester */}
      <g transform={MH}>
        <MaryHead uid={uid} w={1 / MS} />
      </g>
      {/* "how tenderly her arm stole round the other's waist" */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(176, 226, 196, 262, 1, 1)} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Hand paths={HAND} />
      <InnerRule />
    </>
  )
}

export const mrsCecilForresterArt: LinocutArt = { width: PW, height: PH, Draw: ForresterPortrait }

export const mrsCecilForrester: Portrait = {
  name: 'Mrs Cecil Forrester',
  art: mrsCecilForresterArt,
  alt: 'A linocut portrait of Mrs Cecil Forrester at her front door at night, drawn from Watson’s words in Chapter 7. On the left she stands in her doorway in profile, facing right: a graceful woman of middle years with her dark hair drawn up into a knot, in a dark dress with a narrow white band at the neck, her mouth a little open as she speaks. Her arm is round the waist of Mary Morstan, who stands on the right facing her, smaller, in a dark cloak, with fair hair and a small turban with a white feather. Behind Mrs Forrester the front door stands half open on a lit hall, where a barometer hangs on the wall and bright rods cross the dark carpet at the foot of the stair; the light of the hall shines out through the stained glass in the upper half of the door, two of its panes printed in red. Six numbered red markers point to Mrs Forrester, her arm round Mary’s waist, her mouth, the half-open door, the stained glass and the stair-rods.',
  describedBy: [
    { phrase: 'a middle-aged, graceful woman', at: [132, 298], to: [118, 268] },
    {
      phrase: 'how tenderly her arm stole round the other’s waist',
      at: [252, 300],
      to: [262, 268],
    },
    {
      phrase: 'how motherly was the voice in which she greeted her',
      at: [198, 176],
      to: [170, 136],
    },
    { phrase: 'the half-opened door', at: [40, 270] },
    { phrase: 'the hall-light shining through stained glass', at: [40, 174], to: [40, 132] },
    { phrase: 'the bright stair-rods', at: [86, 244], to: [84, 190] },
  ],
  where: 'Chapter 7',
  passage:
    'It was nearly two o’clock when we reached Mrs. Cecil Forrester’s. The servants had retired hours ago, but Mrs. Forrester had been so interested by the strange message which Miss Morstan had received that she had sat up in the hope of her return. She opened the door herself, a middle-aged, graceful woman, and it gave me joy to see how tenderly her arm stole round the other’s waist and how motherly was the voice in which she greeted her. She was clearly no mere paid dependant, but an honoured friend. I was introduced, and Mrs. Forrester earnestly begged me to step in and tell her our adventures. I explained, however, the importance of my errand, and promised faithfully to call and report any progress which we might make with the case. As we drove away I stole a glance back, and I still seem to see that little group on the step, the two graceful, clinging figures, the half-opened door, the hall-light shining through stained glass, the barometer, and the bright stair-rods. It was soothing to catch even that passing glimpse of a tranquil English home in the midst of the wild, dark business which had absorbed us.',
  note: 'Mrs Forrester is Mary’s employer, but Watson sees “no mere paid dependant, but an honoured friend”. Her lit doorway is the one “tranquil English home” in a night of murder and stolen treasure.',
  artNote:
    'The novel says nothing more of her looks, so she is drawn plainly, in the dress of 1888, as the panel of Chapter 9 draws her. The stained glass is printed red, the warmth of the home; its true colours are not given.',
}

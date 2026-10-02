import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { FogWindow } from '../panels/baker-street'
import {
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  handPaths,
  hatch,
  once,
  portraitGround,
  rimLight,
  smooth,
} from './common'

/**
 * Dr John Watson, in the window at Baker Street on the afternoon Mary
 * Morstan first calls, Chapter 2, and nothing else:
 *
 *   "I sat in the window with the volume in my hand, but my thoughts were far
 *   from the daring speculations of the writer. My mind ran upon our late
 *   visitor,—her smiles, the deep rich tones of her voice, the strange
 *   mystery which overhung her life. [...] So I sat and mused, until such
 *   dangerous thoughts came into my head that I hurried away to my desk and
 *   plunged furiously into the latest treatise upon pathology. What was I, an
 *   army surgeon with a weak leg and a weaker banking-account, that I should
 *   dare to think of such things?"
 *
 * So: a man sitting in the window, facing right, the window and the
 * afternoon fog in front of him; the book open on his lap under his hand, but
 * his eyes lifted off it to the window; and the flush of the thoughts he
 * calls dangerous on his cheekbone. The window is the room kit's own
 * (FogWindow in ../panels/baker-street.tsx), so it is the window of the
 * panels: the fog is the paper, and the houses opposite are hatched faint
 * through it.
 *
 * Conan Doyle never describes Watson's face or clothes, so he is drawn as the
 * figure kit draws him (../panels/people.tsx): a plain face, fuller and
 * rounder than Holmes's, a short straight nose, a square jaw and no
 * moustache (none is in the text), short dark hair with a parting, and the
 * plain indoor dress of a London gentleman in 1888. The red on his cheek is
 * the kit's WATSON_FLUSH, the spot colour of feeling that the kit gives him
 * and never Holmes: short strokes on the cheekbone, well clear of the mouth.
 *
 * REDRAWN 2 October 2026. The first draft set the whole seated figure in the
 * block, the head as large as a bust's, so there was no room for a body: his
 * "weak leg" printed as a shapeless black mass, his forearm ran level out of
 * the coat like an arm pointing something, the book was a sliver, and the
 * fog was cut as dark jagged lines that read as cracked glass. He is now a
 * bust, the book lying open on his lap at the foot of the block with his hand
 * on it, and the fog is the room kit's. His leg cannot be in a bust, so it
 * has no marker; the words stay in the printed passage.
 *
 * Seeds: 4201 for the ground, 4202 for the cuts in the figure, 4203 for the
 * fog in the window.
 */

/** A fuller, rounder head than Holmes's, in profile facing right. */
const HEAD = smooth([
  [80, 232, 1],
  [80, 204],
  [74, 180],
  [68, 142],
  [72, 102],
  [88, 68],
  [114, 46],
  [144, 38],
  [170, 44],
  [186, 62],
  [191, 88],
  [193, 103],
  [195, 110, 1],
  [189, 119],
  [194, 131],
  [200, 142],
  [205.5, 151, 1],
  [199, 155],
  [192, 156.5, 1],
  [193.5, 162],
  [191.5, 166, 1],
  [193, 170],
  [189, 175],
  [194, 184],
  [193.5, 196],
  [186, 202],
  [166, 201],
  [156, 208],
  [154, 232, 1],
])
/** Short dark hair, parted, combed down and back. */
const HAIR = smooth([
  [40, 14, 1],
  [184, 14, 1],
  [186, 50],
  [176, 54],
  [164, 64],
  [156, 84],
  [150, 102],
  [140, 110],
  [128, 114],
  [116, 124],
  [110, 152],
  [104, 188],
  [92, 224, 1],
  [40, 224, 1],
])
/** Seated, upright: the back, the shoulders and the chest. */
const COAT = smooth([
  [18, 330, 1],
  [24, 292],
  [46, 258],
  [80, 238],
  [112, 232],
  [150, 244],
  [178, 242],
  [198, 256],
  [208, 290],
  [210, 330, 1],
])
const COLLAR = smooth([
  [78, 230, 1],
  [118, 242],
  [158, 232, 1],
  [160, 246, 1],
  [118, 256],
  [76, 244, 1],
])
const SHIRT = smooth([
  [150, 248, 1],
  [168, 246, 1],
  [178, 330, 1],
  [160, 330, 1],
])
const TIE = smooth([
  [152, 248, 1],
  [168, 246, 1],
  [171, 260],
  [162, 266],
  [154, 260],
])
const LAPEL = smooth([
  [128, 254, 1],
  [154, 262, 1],
  [170, 330, 1],
  [148, 330, 1],
  [136, 290],
])
/**
 * The near forearm, coming up from the elbow below the block to the hand on
 * the book in his lap.
 */
const SLEEVE = smooth([
  [76, 330, 1],
  [104, 306],
  [138, 292],
  [168, 286, 1],
  [172, 306, 1],
  [146, 314],
  [124, 330, 1],
])
const CUFF = smooth([
  [165, 285, 1],
  [176, 283.5, 1],
  [180, 304.5, 1],
  [171, 306.5, 1],
])
/**
 * "the volume in my hand": the book lying open on his lap at the foot of the
 * block, tipped towards us, its two pages bowed up from the gutter: open, and
 * left unread while he looks away.
 */
const COVER = 'M174 266Q199 251 222 259Q246 249 272 256L274 304Q248 298 223 309Q198 301 177 314Z'
const LEFT_PAGE = 'M179 265Q200 253.5 221.5 261L222.5 303.5Q199 297 181 308Z'
const RIGHT_PAGE = 'M222.5 261Q246 252.5 268 258L269 299Q246 294.5 222.5 303.5Z'
/** Lines of print on the pages, bowed with them. */
const PRINT = (() => {
  let d = ''
  for (let i = 0; i < 6; i++) {
    const y = 268 + i * 5.6
    d += `M${n(203 + i * 0.3)} ${n(y - 1.4)}Q211 ${n(y - 3.6)} 218.5 ${n(y + 0.4)}`
    d += `M${n(227)} ${n(y)}Q${n(244)} ${n(y - 5.2)} ${n(263 - i * 0.2)} ${n(y - 2.6)}`
  }
  return d
})()
/** His hand on the left-hand page, the fingers lying across it, each apart. */
const HAND = handPaths({
  wrist: [
    [175, 283],
    [178, 304],
  ],
  knuckles: [
    [191, 278.5],
    [193.5, 284.5],
    [195, 290.5],
    [195.5, 296.5],
  ],
  tips: [
    [208, 271.5],
    [212.5, 279.5],
    [214, 288],
    [211.5, 296.5],
  ],
  width: [4.8, 5, 4.8, 4.2],
  bow: [-1, -0.8, -0.4, 0.2],
  thumb: { root: [180, 283], tip: [194, 268.5], width: 5, bow: -1.6 },
})

/**
 * His eye, lifted off the page to the window: the upper lid raised in an
 * arch, the pupil high and forward in the eye, looking up and out.
 */
const EYE_UPPER = 'M174.5 118.5Q182 110.5 190.5 115.5'
const EYE_LOWER = 'M176.5 122.5Q183 125 189 120.5'

/**
 * The flush of feeling on his cheekbone: the kit's WATSON_FLUSH cut at the
 * portrait's size as a few short slanting strokes, under the eye and in front
 * of the ear, far from the mouth.
 */
const FLUSH = 'M156 127l4.5 8M161.5 127.4l4.5 8M167 127.8l4.5 8M172.5 128.2l4 7'

/** The window on the fog, as the room kit cuts it. */
const WINDOW = { x: 242, y: 22, w: 74, h: 200 }
/** The curtain drawn back at the window's edge. */
const CURTAIN = smooth([
  [224, 10, 1],
  [244, 10, 1],
  [238, 80],
  [232, 160],
  [236, 236],
  [226, 250],
  [218, 180],
  [222, 90],
])

type Marks = {
  ground: string
  curtain: string
  hair: string
  back: string
  cheek: string
  neck: string
  coat: string
  sleeve: string
}

const marks = once<Marks>(() => {
  // Light from the window on the right; dark behind him.
  const ground = portraitGround(4201, (x, y) =>
    clamp(0.08 + ((x - 60) / 200) * 0.7 - Math.max(0, (y - 240) / 180)),
  )
  const r = rng(4202)
  let curtain = ''
  for (let i = 0; i < 4; i++)
    curtain += gouge(228 + i * 3.6, 16, 226 + i * 3 + between(r, -1, 1), 236, 0.9, 2)
  // Short dark hair, combed down from the parting: paper strands on the black.
  let hair = ''
  for (let i = 0; i < 44; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 44
    const sx = 178 - t * 96
    const sy = 44 - Math.sin(t * Math.PI) * 4
    const ex = sx - 14 - t * 10 + between(r, -2, 2)
    const ey = sy + 30 + t * 60 + between(r, -4, 4)
    hair += gouge(sx, sy, ex, ey, between(r, 0.55, 1.1), between(r, 1, 3))
  }
  // The parting: a clean line of light along the crown.
  hair += gouge(174, 42, 94, 60, 1.2, -4)
  hair += rimLight(r, { cx: 134, cy: 130, rx: 62, ry: 94 }, 150, 280, 36, 1)
  let back = ''
  for (let rad = 44; rad < 88; rad += 3.4)
    back += arcDashes(r, 144, 150, rad, deg(106), deg(170), [8, 22], [2, 6])
  // A full cheek: a few soft bowls of line under the cheekbone, fewer and
  // shallower than Holmes's hollow.
  let cheek = ''
  for (let rad = 14; rad < 24; rad += 3.2)
    cheek += arcDashes(r, 168, 146, rad, deg(70), deg(140), [8, 18], [2, 5])
  const neck = hatch(r, { x0: 82, x1: 166, y0: 212, y1: 238 }, 4.4, 0.07)
  const coat =
    gouge(44, 280, 32, 322, 2.2, 2) +
    gouge(70, 262, 60, 300, 1.6, 1.5) +
    gouge(104, 262, 100, 282, 1.1, -1) +
    gouge(196, 262, 204, 300, 1.2, -1)
  const sleeve = gouge(98, 314, 136, 298, 1.3, -1) + gouge(126, 318, 158, 306, 1, -1)
  return { ground, curtain, hair, back, cheek, neck, coat, sleeve }
})

function WatsonPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-jw-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the window, with the fog and the houses opposite in it */}
      <FogWindow uid={uid} box={WINDOW} seed={4203} roof={[0.3, 0.42]} />
      <path d={CURTAIN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.curtain} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={COAT} />
        <path d={COVER} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.6} />
          <path d={m.cheek} strokeWidth={0.9} />
          <path d={m.neck} strokeWidth={1.1} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <ProfileEar at={[140, 116]} h={46} />
      <path d={SHIRT} fill={PAPER} />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a square jaw, back to below the ear */}
        <path d="M170 199.5Q157 198 153 186L150 166" strokeWidth={1.9} />
        {/* a level brow, lifted a little with the eye */}
        <path d="M171 106.5Q182.5 101.5 195 105" strokeWidth={3.2} />
        {/* the nostril, the line past the mouth, the lips */}
        <path d="M199 154.5C195 152.5 194.5 148.5 197 146.5" strokeWidth={1.4} />
        <path d="M192 144C187 150 185 156 185.5 162" strokeWidth={1.2} />
        <path d="M191.5 166L182.5 165.5" strokeWidth={1.8} />
        <path d="M189.5 174Q187 175.6 185.6 175.2" strokeWidth={LINE.hairline} />
        {/* "My mind ran upon our late visitor": the eye lifted to the window */}
        <path d={EYE_UPPER} strokeWidth={2.4} />
        <path d={EYE_LOWER} strokeWidth={LINE.fine} />
      </g>
      <circle cx={186.4} cy={116.4} r={2.8} fill={INK} />
      <circle cx={187.5} cy={115.2} r={1.1} fill={PAPER} />
      {/* "such dangerous thoughts": the flush on his cheekbone, clear of the mouth */}
      <path d={FLUSH} fill="none" stroke={RED} strokeWidth={1.9} strokeLinecap="round" />
      {/* the book on his lap, and his hand on it */}
      <path d={COVER} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={LEFT_PAGE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RIGHT_PAGE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={PRINT} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Hand paths={HAND} />
      <InnerRule />
    </>
  )
}

export const drJohnWatsonArt: LinocutArt = { width: PW, height: PH, Draw: WatsonPortrait }

export const drJohnWatson: Portrait = {
  name: 'Dr John Watson',
  art: drJohnWatsonArt,
  alt: 'A linocut portrait of Dr Watson in profile, facing right, drawn from his own words in Chapter 2: a man with a plain, full face, a short straight nose, a square jaw and short dark parted hair, in a dark coat, white collar and dark tie, sitting by a window. An open book lies on his lap under his hand, but his eyes are lifted from it towards the window, where fog drifts in front of the faint shapes of the houses opposite. A few short red strokes on his cheekbone mark a flush. Three numbered red markers point to the book, his eye and the flush on his cheek.',
  describedBy: [
    { phrase: 'I sat in the window with the volume in my hand', at: [300, 244], to: [262, 266] },
    { phrase: 'My mind ran upon our late visitor', at: [214, 52], to: [190, 110] },
    { phrase: 'such dangerous thoughts came into my head', at: [102, 172], to: [154, 133] },
  ],
  where: 'Chapter 2',
  passage:
    'I sat in the window with the volume in my hand, but my thoughts were far from the daring speculations of the writer. My mind ran upon our late visitor,—her smiles, the deep rich tones of her voice, the strange mystery which overhung her life. If she were seventeen at the time of her father’s disappearance she must be seven-and-twenty now,—a sweet age, when youth has lost its self-consciousness and become a little sobered by experience. So I sat and mused, until such dangerous thoughts came into my head that I hurried away to my desk and plunged furiously into the latest treatise upon pathology. What was I, an army surgeon with a weak leg and a weaker banking-account, that I should dare to think of such things? She was a unit, a factor,—nothing more. If my future were black, it was better surely to face it like a man than to attempt to brighten it by mere will-o’-the-wisps of the imagination.',
  note: 'Watson tells the story, and he is its man of feeling. Here he tries to argue himself out of love with Holmes’s own words (“a unit, a factor”), and fails: the novel’s conflict between reason and emotion is going on inside its narrator.',
  artNote:
    'Watson never describes his own face or clothes, so he is drawn plainly, in the dress of a London gentleman in 1888. The red on his cheek is the flush of the thoughts he calls dangerous.',
}

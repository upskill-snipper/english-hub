import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, arcDashes, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { Hand, handPaths } from './hands'
import {
  InnerRule,
  PH,
  PW,
  hatch,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
} from './common'

/**
 * Dr Henry Jekyll, as Stevenson describes him, and nothing else. Chapter 3,
 * after one of his dinners, at his own fireside with Utterson:
 *
 *   "as he now sat on the opposite side of the fire ... a large, well-made,
 *   smooth-faced man of fifty, with something of a slyish cast perhaps, but
 *   every mark of capacity and kindness ... you could see by his looks that
 *   he cherished for Mr. Utterson a sincere and warm affection."
 *
 * (The edition sets the description between two dashes; they are shortened
 * to "..." here only because the house style keeps dashes out of the code.)
 *
 * and, in the same scene, "pleaded Jekyll, laying his hand upon the other's
 * arm". His hand is the one he describes himself in his statement (Chapter
 * 10), so that it can be set beside Hyde's:
 *
 *   "Now the hand of Henry Jekyll (as you have often remarked) was
 *   professional in shape and size; it was large, firm, white and comely."
 *
 * So: a big, broad-shouldered man in profile, facing right towards his
 * friend; a large head on a strong neck, clean-shaven and almost unlined
 * ("smooth-faced ... of fifty": one crease at the eye, none on the brow); a
 * high, broad forehead ("capacity"); a heavy upper lid over an eye turned
 * sidelong, and the corner of a smile ("a slyish cast perhaps, but ...
 * kindness"); and a large, clean, pale hand, its fingers apart, laid on the
 * dark sleeve of the man across the fire, who is out of the picture. The
 * ground is lit from the right, where the fire is. His hair, and his evening
 * dress (a black coat, a white stand collar and shirt, a dark tie), are not
 * described, so they are plain. He matches the Jekyll of the panels
 * (../panels/people.tsx): broad, clean-shaven, a full jaw, his hair swept
 * back. Nothing here comes from a film or stage production. There is no red
 * in this plate.
 *
 * Seeds: 3101 for the ground, 3102 for the cuts in the figure.
 */

/** Head and neck in profile, facing right. */
export const JEKYLL_HEAD = smooth([
  [112, 252, 1],
  [110, 234],
  [98, 212],
  [84, 184],
  [78, 146],
  [82, 106],
  [100, 72],
  [130, 48],
  [166, 38],
  [198, 44],
  [218, 64],
  [226, 92],
  [228.5, 114],
  [224.5, 127],
  [230, 144],
  [238, 160],
  [245, 170, 1],
  [240, 175],
  [231, 175.5, 1],
  [232, 182],
  [230.5, 186, 1],
  [231.5, 190],
  [225, 197],
  [230, 208],
  [226, 221],
  [206, 227],
  [200, 236],
  [200, 252, 1],
])
/** Hair brushed back from a high forehead, over the crown and behind the ear. */
const HAIR = smooth([
  [60, 20, 1],
  [218, 20, 1],
  [216, 62],
  [204, 70],
  [196, 86],
  [192, 106],
  [184, 122],
  [174, 134],
  [162, 128],
  [150, 124],
  [138, 130],
  [132, 162],
  [124, 198],
  [108, 228, 1],
  [60, 228, 1],
])
const EAR = smooth([
  [152, 126],
  [140, 128],
  [135, 144],
  [139, 162],
  [150, 170],
  [157, 160],
  [158, 140],
])
/** A broad back and shoulders: "large, well-made". */
const COAT = smooth([
  [0, 330, 1],
  [4, 290],
  [26, 262],
  [70, 246],
  [112, 242],
  [160, 254],
  [200, 250],
  [230, 262],
  [252, 290],
  [258, 330, 1],
])
const COLLAR = smooth([
  [110, 240, 1],
  [152, 250],
  [196, 238, 1],
  [200, 254, 1],
  [152, 264],
  [108, 256, 1],
])
const SHIRT = smooth([
  [192, 254, 1],
  [214, 252, 1],
  [236, 330, 1],
  [210, 330, 1],
])
const TIE = smooth([
  [196, 254, 1],
  [214, 252, 1],
  [218, 266],
  [208, 272],
  [198, 266],
])
const LAPEL = smooth([
  [180, 262, 1],
  [200, 268, 1],
  [222, 330, 1],
  [200, 330, 1],
  [188, 298],
])
/** His sleeve, reaching forward to the man opposite. */
const SLEEVE = smooth([
  [176, 330, 1],
  [196, 298],
  [216, 278],
  [240, 262, 1],
  [248, 294, 1],
  [226, 304],
  [214, 330, 1],
])
const CUFF = smooth([
  [236, 260, 1],
  [248, 255, 1],
  [256, 292, 1],
  [243, 298, 1],
])
/** The other man's dark sleeve, coming in from the right edge. */
const OTHER_SLEEVE = smooth([
  [340, 256, 1],
  [300, 264],
  [272, 278],
  [256, 300],
  [250, 330, 1],
  [340, 330, 1],
])

/**
 * "large, firm, white and comely": the back of his right hand, seen from a
 * little above, laid along the other man's forearm: long, straight, even
 * fingers, a little apart, and no marks on the skin.
 */
const HAND = handPaths({
  wrist: [
    [248, 259],
    [254, 292],
  ],
  knuckles: [
    [278, 256],
    [283, 265.5],
    [287, 275],
    [289, 284.5],
  ],
  tips: [
    [304, 255],
    [314, 266],
    [316.5, 278],
    [311, 290],
  ],
  width: [8.4, 8.6, 8.2, 7.2],
  bow: [2, 2.5, 2.5, 2.5],
  // Seen from a little above, the thumb shows along the far edge of the hand.
  thumb: { root: [254, 262], tip: [272, 249], width: 8.4 },
})

type Marks = {
  ground: string
  hair: string
  back: string
  neck: string
  cheek: string
  coat: string
  sleeve: string
  other: string
}

const marks = once<Marks>(() => {
  // Firelight from the right, in front of his face; the dark behind his head.
  const ground = portraitGround(3101, (x, y) =>
    clamp(0.06 + ((x - 40) / 270) * 0.95 - Math.max(0, (y - 250) / 300)),
  )
  const r = rng(3102)
  // Thick hair brushed straight back: paper strands from the hairline to the nape.
  const hair =
    strands(r, 30, lerp2([212, 60], [166, 124]), lerp2([100, 74], [110, 204]), [0.45, 0.9], 3) +
    strands(r, 12, lerp2([196, 40], [120, 52]), lerp2([90, 104], [84, 150]), [0.4, 0.8], 2) +
    rimLight(r, { cx: 152, cy: 136, rx: 74, ry: 98 }, 150, 292, 58, 1.1)
  // Shadow round the back of the skull.
  let back = ''
  for (let rad = 64; rad < 110; rad += 3.4)
    back += arcDashes(r, 170, 150, rad, deg(104), deg(166), [8, 24], [2, 6])
  // The shadow down the neck, below the jaw, and into the collar.
  const neck = hatch(r, { x0: 112, x1: 208, y0: 230, y1: 252 }, 5, 0.06)
  // Volume without age: the hollow of the temple and the shadow under the
  // brow, as on the Scrooge head, and nothing on the cheek.
  let cheek = ''
  for (let i = 0; i < 5; i++)
    cheek += `M${n(188 + i * 3)} ${n(92 + i * 1.5)}Q${n(185 + i * 3)} 106 ${n(191 + i * 3)} ${n(118 - i)}`
  for (let rad = 10; rad < 18; rad += 3) cheek += arc(218, 131, rad, deg(185), deg(250))
  const coat =
    gouge(40, 276, 16, 318, 2.4, 3) +
    gouge(72, 262, 58, 318, 1.8, 2) +
    gouge(118, 264, 112, 318, 1.4, 1) +
    gouge(150, 270, 152, 318, 1, -1)
  const sleeve = gouge(200, 306, 226, 282, 1.6, 1) + gouge(210, 322, 236, 294, 1.1, 1)
  // The other man's sleeve, lit by the fire: cuts along the cloth, and its folds.
  let other = ''
  for (let i = 0; i < 13; i++) {
    const y = 258 + i * 6
    other += gouge(334, y, 246 + i * 1.5, y + 44, 1.1 + (i % 3) * 0.45, 1.2)
  }
  return { ground, hair, back, neck, cheek, coat, sleeve, other }
})

function JekyllPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-jk-head`
  const otherClip = `${uid}-jk-other`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={JEKYLL_HEAD} />
        </clipPath>
        <clipPath id={otherClip}>
          <path d={OTHER_SLEEVE} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={JEKYLL_HEAD} />
        <path d={COAT} />
        <path d={SLEEVE} />
        <path d={OTHER_SLEEVE} />
      </g>
      <path d={OTHER_SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${otherClip})`}>
        <path d={m.other} fill={PAPER} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      {/* Paper, with a paper edge, so the dark hair keeps its outline on the dark ground. */}
      <path d={JEKYLL_HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.6} />
          <path d={m.neck} strokeWidth={1} />
          <path d={m.cheek} strokeWidth={LINE.hairline} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
      <path
        d="M150 136C144 138 143 150 146 158C148 161 151 160 152 156"
        fill="none"
        stroke={INK}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
      <path d={SHIRT} fill={PAPER} />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the jaw, back to below the ear: a strong, well-made head */}
        <path d="M226 221C202 232 176 228 164 212C158 202 157 188 158 176" strokeWidth={1.9} />
        {/* a level brow over a high forehead */}
        <path d="M204 124Q215 119.5 227 122" strokeWidth={3.2} />
        {/* "a slyish cast": a heavy upper lid over an eye turned sidelong */}
        <path d="M208 131.5Q216 126.5 225 129.5" strokeWidth={2.8} />
        <path d="M210.5 136.5Q217 138 223.5 135" strokeWidth={LINE.fine} />
        {/* one crease at the eye: fifty, and smooth-faced */}
        <path d="M204 134.5L197 136.5" strokeWidth={LINE.hairline} />
        {/* the nostril, the fold from nose to mouth, and the corner of a smile */}
        <path d="M238 170C234 167 233 163 236 160" strokeWidth={1.5} />
        <path d="M229 163C223 171 221 179 222 186" strokeWidth={1.1} />
        <path d="M230.5 186L221 184.5" strokeWidth={1.8} />
        <path d="M221 184.5Q218.5 183.5 218.5 181" strokeWidth={LINE.fine} />
        <path d="M228 194Q225 196 225.5 198" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={221.2} cy={132.8} r={2.6} fill={INK} />
      <path d="M208 131.5Q216 127 225 129.5" fill="none" stroke={INK} strokeWidth={2.4} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sleeve} fill={PAPER} />
      <Hand paths={HAND} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <InnerRule />
    </>
  )
}

export const jekyllArt: LinocutArt = { width: PW, height: PH, Draw: JekyllPortrait }

export const jekyll: Portrait = {
  name: 'Dr Henry Jekyll',
  art: jekyllArt,
  alt: "A linocut portrait of Dr Jekyll in profile, facing right, drawn from Stevenson's descriptions in Chapters 3 and 10: a large, broad-shouldered man of about fifty with a big, clean-shaven, almost unlined face, a high forehead, dark hair brushed back, a heavy upper lid over an eye turned sidelong and the corner of a smile. He wears a black coat, a high white collar, a white shirt and a dark tie. His large, pale hand, the fingers slightly apart, rests on the dark sleeve of someone out of the picture, as he lays his hand on his friend's arm. The ground behind him is lit from the right, where the fire is. Four numbered red markers point to his face, his eye, his forehead and his hand.",
  describedBy: [
    { phrase: 'a large, well-made, smooth-faced man of fifty', at: [258, 218], to: [226, 206] },
    { phrase: 'something of a slyish cast perhaps', at: [264, 104], to: [224, 131] },
    { phrase: 'every mark of capacity and kindness', at: [252, 46], to: [222, 80] },
    { phrase: 'large, firm, white and comely', at: [300, 234], to: [294, 258] },
  ],
  where: 'Chapter 3; Chapter 10',
  note: 'Stevenson describes a respectable, kindly man, and lets one word slip in against it: “slyish”. The hand Jekyll describes in his statement is the other half of the picture, to be set beside the hand of Hyde.',
}

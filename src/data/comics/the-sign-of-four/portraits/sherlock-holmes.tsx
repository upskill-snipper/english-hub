import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
} from '@/components/comics/linocut/carve'

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
  rimLight,
  smooth,
  strands,
} from './common'

/**
 * Sherlock Holmes, as Watson sees him when Mary Morstan has finished the
 * first part of her story, in Chapter 2, and nothing else:
 *
 *   "Holmes rubbed his hands, and his eyes glistened. He leaned forward in
 *   his chair with an expression of extraordinary concentration upon his
 *   clear-cut, hawklike features. “State your case,” said he, in brisk,
 *   business tones."
 *
 * So: a lean man in profile, facing right, towards the client he is
 * listening to; seated in a high-backed armchair but leaning out of it, so
 * there is dark between his back and the chair; his hands together in front
 * of him, one rubbing over the other, with two small cuts beside them for the
 * rubbing; one bright glint in a deep-set eye; and a clear-cut, hawklike
 * profile: a high forehead, a strong brow, a high-bridged nose that hooks
 * down at its tip, thin lips and a sharp chin. The rest of the book agrees
 * with it: "his eager, aquiline face" (Chapter 10), "his long thin nose" and
 * his eyes "deep-set like those of a bird" (Chapter 6), "his gaunt limbs"
 * (Chapter 8). So the cheek is lean and hollow under the cheekbone. He is the
 * Holmes of the figure kit (../panels/people.tsx): the same hooked nose, the
 * same deep-set eye under a heavy brow, the same dark hair brushed back from
 * a high forehead, and the same white hands.
 *
 * His dress is not described in this book, so it is the plain indoor dress
 * of a London gentleman in 1888 (a dark coat, a white collar, a dark tie),
 * and his dark hair, also undescribed, is brushed plainly back. Nothing is
 * taken from a film, television or stage production, or from the costume
 * later illustrators gave him: no deerstalker, no cape, no dressing gown, no
 * pipe. The morocco case of Chapter 1 is not in the picture at all.
 *
 * There is no red in this plate: nothing in the passage asks for it.
 *
 * REDRAWN 2 October 2026. The first draft's nose was a blunt, rounded snout
 * that did not read as "hawklike", and the fold of the cheek crossed the
 * line of the mouth, so at card size the mouth read as a cross, like a
 * stitched wound. The nose now rises from a notch under the brow in a high,
 * convex bridge and hooks down at the tip, and the fold stops short of the
 * mouth. The lips and chin sit forward under the hooked tip: set back, the
 * ink halo filled the notch under the nose, and it read as a moustache,
 * which the text never gives him.
 *
 * Seeds: 4101 for the ground, 4102 for the cuts in the figure.
 */

/** The head, upright, in profile facing right; the drawing tips it forward. */
const HEAD = smooth([
  [120, 240, 1],
  [120, 210],
  [113, 184],
  [107, 146],
  [109, 104],
  [123, 68],
  [148, 42],
  [180, 31],
  [207, 37],
  [222, 55],
  [228, 80],
  [230, 100],
  [234.5, 112, 1],
  [229, 121.5, 1],
  [235.5, 128.5],
  [242, 136],
  [246.5, 143, 1],
  [251, 152.5],
  [255.5, 162],
  [258, 172, 1],
  [253, 173.6],
  [248, 175.2, 1],
  [246.2, 179.4],
  [245.4, 184.6, 1],
  [242.6, 186.6, 1],
  [243.6, 190],
  [240.6, 195.4, 1],
  [239.6, 203.5],
  [239.4, 210, 1],
  [229, 216.5],
  [212, 217],
  [199, 222],
  [195, 240, 1],
])
/** Dark hair, brushed plainly back from a high forehead. */
const HAIR = smooth([
  [80, 20, 1],
  [212, 20, 1],
  [210, 42],
  [199, 50],
  [189, 70],
  [183, 96],
  [176, 116],
  [166, 118],
  [154, 128],
  [148, 160],
  [140, 196],
  [124, 228, 1],
  [80, 228, 1],
])
/** Where the head is tipped forward from: the base of the neck. */
const TIP = 'rotate(9 160 236)'

/** The body, seated and leaning forward: the long curve of the back. */
const COAT = smooth([
  [30, 330, 1],
  [44, 292],
  [74, 262],
  [110, 238],
  [140, 232],
  [180, 244],
  [208, 246],
  [224, 262],
  [236, 300],
  [240, 330, 1],
])
const COLLAR = smooth([
  [114, 232, 1],
  [154, 244],
  [196, 236, 1],
  [198, 250, 1],
  [154, 258],
  [112, 246, 1],
])
const SHIRT = smooth([
  [184, 250, 1],
  [204, 248, 1],
  [214, 300, 1],
  [196, 300, 1],
])
const TIE = smooth([
  [188, 250, 1],
  [204, 248, 1],
  [207, 262],
  [198, 268],
  [190, 262],
])
const LAPEL = smooth([
  [164, 256, 1],
  [190, 264, 1],
  [206, 318, 1],
  [184, 318, 1],
  [172, 290],
])
/** The near arm: the sleeve down from the shoulder and forward to the hands. */
const SLEEVE = smooth([
  [96, 262],
  [124, 250],
  [150, 262],
  [170, 290],
  [196, 262],
  [226, 254, 1],
  [232, 280, 1],
  [196, 306],
  [162, 322],
  [128, 318],
  [104, 296],
])
const CUFF = smooth([
  [222, 252, 1],
  [233, 250, 1],
  [238, 280, 1],
  [228, 283, 1],
])

/** The near hand, from the back, fingers forward and a little up. */
const NEAR = handPaths({
  wrist: [
    [234, 254],
    [237, 278],
  ],
  knuckles: [
    [258, 248],
    [261, 254.5],
    [262.5, 261],
    [262.5, 267.5],
  ],
  tips: [
    [283, 239],
    [288, 246],
    [289, 254],
    [285, 262],
  ],
  width: [6.4, 6.6, 6.2, 5.4],
  bow: [-1.5, -1.5, -1, -0.5],
  thumb: { root: [240, 254], tip: [258, 234], width: 6.6, bow: -2 },
})
/** The far hand, palm to palm behind it: only its fingers and thumb show. */
const FAR = handPaths({
  wrist: [
    [240, 244],
    [244, 262],
  ],
  knuckles: [
    [262, 240],
    [265, 246],
    [267, 252],
    [268, 258],
  ],
  tips: [
    [290, 231],
    [295, 238],
    [297, 246],
    [294, 254],
  ],
  width: [5.8, 6, 5.8, 5],
  bow: [-1.5, -1.5, -1, -0.5],
  thumb: { root: [248, 246], tip: [264, 226], width: 6, bow: -2 },
})

/** The wing of the armchair he has leaned out of. */
const CHAIR = smooth([
  [14, 60, 1],
  [40, 44],
  [74, 52],
  [88, 70],
  [92, 140],
  [96, 210],
  [104, 330, 1],
  [14, 330, 1],
])

type Marks = {
  ground: string
  chair: string
  hair: string
  back: string
  cheek: string
  socket: string
  lines: string
  neck: string
  coat: string
  sleeve: string
}

const marks = once<Marks>(() => {
  // Afternoon light from the right, where the client sits; dark behind him.
  const ground = portraitGround(4101, (x, y) =>
    clamp(0.1 + ((x - 90) / 240) * 0.85 - Math.max(0, (y - 250) / 200)),
  )
  const r = rng(4102)
  // The chair's buttoned leather: a diamond of buttons, the folds between
  // them, and a line of light down its inner edge.
  let chair = ''
  for (let row = 0; row < 11; row++)
    for (let col = 0; col < 4; col++) {
      const x = 26 + col * 18 + (row % 2) * 9
      const y = 74 + row * 22
      if (x > 84 + row * 0.6) continue
      chair += gouge(x - 1.6, y, x + 1.6, y + 0.4, 1.8)
      chair += gouge(x + 2, y + 2, x + 7, y + 9, 0.7, 0.5)
      chair += gouge(x - 2, y + 2, x - 7, y + 9, 0.7, -0.5)
    }
  chair += gouge(84, 76, 94, 318, 1.6, -2)
  // Dark hair brushed back: paper strands on the black, light on the edge.
  const hair =
    strands(r, 60, lerp2([206, 48], [176, 116]), lerp2([126, 72], [132, 206]), [0.7, 1.3], 2.4) +
    strands(r, 24, lerp2([204, 34], [136, 46]), lerp2([116, 96], [114, 150]), [0.6, 1.1], 2) +
    rimLight(r, { cx: 170, cy: 130, rx: 60, ry: 96 }, 150, 285, 40, 1)
  let back = ''
  for (let rad = 44; rad < 90; rad += 3.4)
    back += arcDashes(r, 180, 150, rad, deg(106), deg(170), [8, 22], [2, 6])
  // "gaunt": a lean cheek, cut hollow under the cheekbone.
  let cheek = ''
  for (let rad = 12; rad < 26; rad += 2.8)
    cheek += arcDashes(r, 208 + between(r, -1, 1), 150, rad, deg(62), deg(158), [8, 22], [1.5, 4])
  // "deep-set": shadow cut round the eye, under the jut of the brow.
  let socket = ''
  for (let rad = 11; rad < 19; rad += 2.6) socket += arc(219, 129, rad, deg(170), deg(292))
  let lines = ''
  for (let i = 0; i < 5; i++)
    lines += `M${n(190 + i * 3)} ${n(88 + i * 1.5)}Q${n(186 + i * 3)} 102 ${n(192 + i * 3)} ${n(114 - i)}`
  const neck = hatch(r, { x0: 118, x1: 204, y0: 218, y1: 242 }, 4.4, 0.07)
  const coat =
    gouge(58, 290, 44, 322, 2.2, 2) +
    gouge(84, 272, 72, 322, 1.6, 1.5) +
    gouge(120, 246, 100, 262, 1.2, 1)
  const sleeve =
    gouge(126, 262, 150, 300, 1.4, 1) +
    gouge(170, 296, 204, 280, 1.3, -1) +
    gouge(196, 292, 222, 272, 1.1, -1)
  return { ground, chair, hair, back, cheek, socket, lines, neck, coat, sleeve }
})

function HolmesPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-sh-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the armchair he has leaned forward out of */}
      <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.chair} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} transform={TIP} />
        <path d={COAT} />
        <path d={SLEEVE} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={SHIRT} fill={PAPER} />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <g transform={TIP}>
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.6} />
            <path d={m.cheek} strokeWidth={0.95} />
            <path d={m.socket} strokeWidth={1} />
            <path d={m.lines} strokeWidth={LINE.hairline} />
            <path d={m.neck} strokeWidth={1.1} />
          </g>
          <path d={HAIR} fill={INK} />
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[170, 124]} h={46} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* a clean, sharp jaw, from the chin back to below the ear */}
          <path
            d="M235 214.6C216 219.6 194 214 182 200C176 190 174 180 174 170"
            strokeWidth={1.8}
          />
          {/* the strong brow over a deep-set eye */}
          <path d="M205 120Q218 112.5 235 113.5" strokeWidth={3.8} />
          {/* the high, curved bridge of the nose, and the nostril */}
          <path d="M234 132Q240.5 138 244.5 145" strokeWidth={LINE.fine} />
          <path d="M248 169C243.5 168.5 242 164 244.5 160.5" strokeWidth={1.5} />
          {/* the fold from the nose towards the mouth, stopping short of it */}
          <path d="M240 162C232 168 228 175 228 182" strokeWidth={1.3} />
          {/* thin lips, set */}
          <path d="M243 186.8L233.6 186.4" strokeWidth={1.9} />
          <path d="M241 193Q238.4 194.4 236.4 193.8" strokeWidth={LINE.hairline} />
        </g>
        {/* "his eyes glistened": the eye, with a large bright glint */}
        <ProfileEye at={[219, 129]} s={1.12} />
        <circle cx={225.9} cy={128.6} r={0.9} fill={PAPER} />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      {/* the near arm, and his hands, rubbing */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sleeve} fill={PAPER} />
      <Hand paths={FAR} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Hand paths={NEAR} />
      <g fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round">
        <path d="M268 220Q276 214 284 218" />
        <path d="M274 208Q283 202 292 207" />
      </g>
      <InnerRule />
    </>
  )
}

export const sherlockHolmesArt: LinocutArt = { width: PW, height: PH, Draw: HolmesPortrait }

export const sherlockHolmes: Portrait = {
  name: 'Sherlock Holmes',
  art: sherlockHolmesArt,
  alt: 'A linocut portrait of Sherlock Holmes in profile, facing right, drawn from Watson’s description in Chapter 2: a lean man leaning forward out of a high-backed armchair, so that there is dark space between his back and the chair. He has a high forehead with dark hair brushed back, a strong brow over a deep-set eye with a bright glint in it, a high-bridged nose that hooks down at the tip, a hollow cheek, thin lips and a sharp chin. He wears a dark coat, a white collar and a dark tie, and in front of him his two hands are pressed together, one rubbing over the other, with two small curved cuts above them for the movement. Four numbered red markers point to his hands, his eye, the space behind him in the chair and his profile.',
  describedBy: [
    { phrase: 'Holmes rubbed his hands', at: [306, 290], to: [286, 262] },
    { phrase: 'his eyes glistened', at: [292, 96], to: [236, 136] },
    { phrase: 'He leaned forward in his chair', at: [60, 150], to: [98, 190] },
    { phrase: 'his clear-cut, hawklike features', at: [306, 156], to: [262, 168] },
  ],
  where: 'Chapter 2',
  passage:
    'Holmes rubbed his hands, and his eyes glistened. He leaned forward in his chair with an expression of extraordinary concentration upon his clear-cut, hawklike features. “State your case,” said he, in brisk, business tones.',
  note: 'This is how Holmes comes alive in the novel: not in his rooms with nothing to do, but the moment a problem is put in front of him. Watson’s words for him are all sharp edges, “clear-cut”, “hawklike”, and later “aquiline”.',
  artNote:
    'The book never describes his clothes, so he is drawn in the plain dress of a London gentleman in 1888, with none of the costume later illustrators gave him.',
}

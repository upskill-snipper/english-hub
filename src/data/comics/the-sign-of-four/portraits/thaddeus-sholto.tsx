import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  rng,
} from '@/components/comics/linocut/carve'

import { Hand, InnerRule, PH, PW, ProfileEar, handPaths, hatch, once, smooth } from './common'

/**
 * Thaddeus Sholto, as he stands in his own doorway in Chapter 4, and nothing
 * else:
 *
 *   "A blaze of yellow light streamed out upon us, and in the centre of the
 *   glare there stood a small man with a very high head, a bristle of red
 *   hair all round the fringe of it, and a bald, shining scalp which shot out
 *   from among it like a mountain-peak from fir-trees. He writhed his hands
 *   together as he stood, and his features were in a perpetual jerk, now
 *   smiling, now scowling, but never for an instant in repose. Nature had
 *   given him a pendulous lip, and a too visible line of yellow and
 *   irregular teeth, which he strove feebly to conceal by constantly passing
 *   his hand over the lower part of his face. In spite of his obtrusive
 *   baldness, he gave the impression of youth."
 *
 * So: a small, slight man in profile, facing right, in the middle of a blaze
 * of light, cut as rays all round him; a head taller than anyone's, its
 * crown a bald, shining dome in paper with its shine cut round it in ink; a
 * bristle of red hair all round the fringe of it, from the temple, over the
 * ear, to the back of the skull, printed in the spot colour, the text's own
 * colour, at the level of the eye and above, well away from the mouth; a
 * small, peaky face; a full lower lip hanging a little; and his two hands
 * writhing together in front of him, with small cuts beside them for the
 * movement. He is the Thaddeus of the figure kit (../panels/people.tsx): the
 * very high head, the paper dome, the red fringe, the hanging lip.
 *
 * The text makes him comic, and the drawing does not make him grotesque: his
 * features are drawn at the size of everyone else's, and his teeth, which
 * the passage says he hides, are not drawn. The light is yellow and his eyes
 * are blue; the print has neither, so both are left to the words. His dress
 * in his own rooms is not described, so it is the plain dark coat of a man
 * of 1888. Nothing is taken from a film or television production.
 *
 * Seeds: 4901 for the light, 4902 for the cuts in the figure.
 */

/** "a very high head": the dome rising far above a small face, facing right. */
const HEAD = smooth([
  [122, 240, 1],
  [122, 214],
  [114, 190],
  [104, 156],
  [100, 116],
  [104, 74],
  [118, 40],
  [140, 20],
  [164, 14],
  [186, 22],
  [200, 44],
  [208, 72],
  [212, 98],
  [214.5, 114, 1],
  [210.5, 121.5, 1],
  [214.5, 130],
  [219.5, 139],
  [223.5, 147, 1],
  [218, 150.4],
  [213, 151.2, 1],
  [214.4, 156.6],
  [213, 160.4, 1],
  [209.2, 162, 1],
  [213.8, 166],
  [214.2, 171.6],
  [210.4, 175.6, 1],
  [207.4, 177],
  [209.6, 183],
  [207, 190],
  [199, 194],
  [188, 195],
  [182, 204],
  [180, 240, 1],
])
/**
 * "a bald, shining scalp which shot out from among it like a mountain-peak
 * from fir-trees": the shine cut round the dome as a few ink contours, the
 * light left as bare paper between them.
 */
const SHINE = 'M118 60Q132 30 162 24M112 84Q122 46 150 30M126 92Q134 62 156 46M178 30Q194 40 202 62'
/**
 * "a bristle of red hair all round the fringe of it": a ring of hair round
 * the head below the dome, seen from the side as a band from the temple,
 * above the ear, round the back of the skull to the nape, its bristles
 * standing up and out like the fir-trees under the "mountain-peak" of the
 * scalp. At the level of the eye and above it; nowhere near the mouth.
 * Printed in RED.
 */
const FRINGE_BAND = smooth([
  [189, 111, 1],
  [176, 106.4],
  [160, 105],
  [140, 107],
  [122, 113],
  [110, 124],
  [104, 140],
  [106, 158],
  [113, 171, 1],
  [119, 164],
  [116, 148],
  [120, 132],
  [130, 123],
  [146, 118.5],
  [164, 117.5],
  [178, 118.4],
  [188, 119.6, 1],
])
/**
 * The bristles along the outer edge of the band: many short tufts, each
 * pointing away from the skull and swept a little back, so they read as
 * bristling hair and not as the points of a crown.
 */
const FRINGE = (() => {
  // points along the outer edge of the band, from the temple to the nape
  const edge: [number, number][] = []
  const ctrl: [number, number][] = [
    [187, 110.4],
    [176, 106.6],
    [160, 105.2],
    [140, 107.2],
    [122, 113.2],
    [110, 124.2],
    [104.2, 140],
    [106.2, 158],
  ]
  for (let i = 0; i < ctrl.length - 1; i++)
    for (let t = 0; t < 1; t += 1 / 3.5) {
      const [x0, y0] = ctrl[i]
      const [x1, y1] = ctrl[i + 1]
      edge.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t])
    }
  let d = ''
  edge.forEach(([x, y], i) => {
    const a = Math.atan2(y - 150, x - 156) - 0.26 + (i % 2 ? 0.12 : -0.08)
    const ux = Math.cos(a)
    const uy = Math.sin(a)
    const len = i % 3 === 0 ? 8.4 : 6.6
    const w = 2.1
    d += `M${n(x - uy * w)} ${n(y + ux * w)}L${n(x + ux * len)} ${n(y + uy * len)}L${n(x + uy * w)} ${n(y - ux * w)}Z`
  })
  return d
})()

/** A small man's narrow shoulders, and his coat. */
const COAT = smooth([
  [44, 330, 1],
  [50, 292],
  [70, 258],
  [98, 240],
  [124, 234],
  [156, 244],
  [186, 238],
  [204, 252],
  [210, 290],
  [212, 330, 1],
])
const COLLAR = smooth([
  [120, 234, 1],
  [154, 244],
  [186, 236, 1],
  [188, 250, 1],
  [154, 258],
  [118, 248, 1],
])
const SHIRT = smooth([
  [176, 250, 1],
  [192, 247, 1],
  [200, 300, 1],
  [184, 300, 1],
])
const TIE = smooth([
  [178, 250, 1],
  [192, 247, 1],
  [194, 262],
  [186, 267],
  [180, 262],
])
/** The near arm, bent to bring the hands together in front of him. */
const SLEEVE = smooth([
  [86, 262],
  [110, 248],
  [134, 262],
  [148, 290],
  [178, 280],
  [204, 268, 1],
  [210, 290, 1],
  [178, 304],
  [140, 312],
  [108, 300],
  [92, 282],
])
const CUFF = smooth([
  [201, 266, 1],
  [212, 262.4, 1],
  [217.6, 285, 1],
  [207.4, 289, 1],
])
/** The far hand, its fingers caught in the near one. */
const FAR_HAND = handPaths({
  wrist: [
    [224, 250],
    [228, 270],
  ],
  knuckles: [
    [242, 252],
    [245, 257.6],
    [246.4, 263.4],
    [246.4, 269],
  ],
  tips: [
    [257, 258.6],
    [259.6, 264],
    [259.6, 269.6],
    [257, 275],
  ],
  width: [5.4, 5.6, 5.4, 4.8],
  bow: [1.2, 1, 0.6, 0.2],
  thumb: { root: [230, 252], tip: [242, 242], width: 5.4, bow: -1 },
})
/**
 * The near hand, twisting over it, its fingers wrapped over the back of the
 * other hand, each finger apart.
 */
const NEAR_HAND = handPaths({
  wrist: [
    [210, 266],
    [214, 288],
  ],
  knuckles: [
    [228, 268],
    [231.6, 273.6],
    [233.6, 279.4],
    [234.2, 285.4],
  ],
  tips: [
    [240, 256.6],
    [246, 261.4],
    [249.4, 267.4],
    [250, 274.4],
  ],
  width: [5.6, 5.8, 5.6, 5],
  bow: [-1.6, -1.4, -1, -0.6],
  thumb: { root: [216, 266], tip: [228, 256], width: 5.6, bow: -1.2, front: true },
})

type Marks = {
  ground: string
  blaze: string
  back: string
  neck: string
  coat: string
}

const marks = once<Marks>(() => {
  // "A blaze of yellow light": the ground cut almost white all round him,
  // with rays streaming out from behind him.
  const r = rng(4901)
  let ground = ''
  for (let y = 12; y < PH - 8; y += 5.2) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 20, 80)
      const end = Math.min(x + len, PW - 10)
      const L = clamp(1.25 - Math.hypot((x + end) / 2 - 158, y - 130) / 210)
      ground += gouge(
        x,
        y + between(r, -0.5, 0.5),
        end,
        y + between(r, -0.5, 0.5),
        0.5 + L * L * 4.4 * between(r, 0.8, 1.1),
      )
      x += len + between(r, 3, 9)
    }
  }
  const blaze = rays(rng(4903), 158, 120, { from: 104, to: 240, every: 5, width: 3.2 })
  const f = rng(4902)
  let back = ''
  for (let rad = 44; rad < 86; rad += 3.4)
    back += arcDashes(f, 172, 158, rad, deg(112), deg(168), [8, 20], [2, 6])
  const neck = hatch(f, { x0: 120, x1: 188, y0: 210, y1: 238 }, 4.4, 0.07)
  const coat = gouge(70, 276, 60, 322, 1.8, 2) + gouge(96, 258, 90, 300, 1.2, 1.5)
  return { ground, blaze, back, neck, coat }
})

function ThaddeusPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-ts-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      {/* "in the centre of the glare there stood a small man" */}
      <path d={m.ground} fill={PAPER} />
      <path d={m.blaze} fill={PAPER} />
      {/* The ink halo that lifts the figure off the light. */}
      <g fill={INK} stroke={INK} strokeWidth={10} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={COAT} />
        <path d={SLEEVE} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.5} />
          <path d={m.neck} strokeWidth={1.1} />
          {/* "a bald, shining scalp": the shine cut round the dome */}
          <path d={SHINE} strokeWidth={1.1} />
        </g>
      </g>
      {/* "a bristle of red hair all round the fringe of it" */}
      <path d={FRINGE_BAND} fill={RED} />
      <path d={FRINGE} fill={RED} />
      <ProfileEar at={[156, 120]} h={40} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the jaw, back to below the ear */}
        <path d="M205 192C192 196 180 192 172 182C168 175 166 167 166 160" strokeWidth={1.6} />
        {/* a thin brow */}
        <path d="M190 115Q201 110.4 213.6 113" strokeWidth={2.2} />
        {/* the nostril, the line past the mouth */}
        <path d="M218 149.6C214 148.4 213.4 144 216 141.8" strokeWidth={1.3} />
        <path d="M209 140C203.6 146 201.6 153 202.6 161" strokeWidth={1.2} />
        {/* "a pendulous lip": the mouth, and the full lower lip hanging below it */}
        <path d="M213 160.6L203.6 160" strokeWidth={1.7} />
        <path d="M204.6 163.6Q209.6 171 213.8 168.6" strokeWidth={1.3} />
      </g>
      {/* the eye, weak and watery: a soft lid, a lower lid with a wet line under it */}
      <path d={arc(201, 128, 9, deg(200), deg(330))} fill="none" stroke={INK} strokeWidth={2} />
      <path
        d="M195.6 131.6Q201.6 134.2 207.6 130.6"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <path d="M196.6 135.4Q201.6 137.8 206.6 134.6" fill="none" stroke={INK} strokeWidth={0.8} />
      <circle cx={204.2} cy={128.6} r={2.4} fill={INK} />
      <circle cx={205} cy={127.8} r={0.8} fill={PAPER} />
      <path d={SHIRT} fill={PAPER} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      {/* "He writhed his hands together" */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(118, 268, 140, 300, 1.2, 1)} fill={PAPER} />
      <Hand paths={FAR_HAND} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Hand paths={NEAR_HAND} />
      <g fill="none" stroke={INK} strokeWidth={2} strokeLinecap="round">
        <path d="M264 244Q274 250 274 262" />
        <path d="M272 236Q286 246 286 262" />
        <path d="M236 296Q250 302 264 294" />
      </g>
      <InnerRule />
    </>
  )
}

export const thaddeusSholtoArt: LinocutArt = { width: PW, height: PH, Draw: ThaddeusPortrait }

export const thaddeusSholto: Portrait = {
  name: 'Thaddeus Sholto',
  art: thaddeusSholtoArt,
  alt: 'A linocut portrait of Thaddeus Sholto in profile, facing right, drawn from Watson’s description in Chapter 4: a small, slight man standing in a blaze of light, cut as rays streaming out all round him. His head is very high, its crown a bald, shining dome with its shine cut round it in a few curved lines, and a bristle of red hair stands all round the fringe of it, from the temple, over the ear, to the back of his head. His face is small and peaky, with a weak, watery eye and a full lower lip that hangs a little. He wears a dark coat, a white collar and a dark tie, and in front of him his two hands are twisted together, with curved cuts beside them for the movement. Five numbered red markers point to his high head, the red fringe of hair, his shining scalp, his hands and his lip.',
  describedBy: [
    { phrase: 'a very high head', at: [262, 26], to: [190, 34] },
    { phrase: 'a bristle of red hair all round the fringe of it', at: [56, 140], to: [98, 140] },
    { phrase: 'a bald, shining scalp', at: [66, 52], to: [116, 70] },
    { phrase: 'He writhed his hands together', at: [300, 292], to: [258, 272] },
    { phrase: 'a pendulous lip', at: [264, 176], to: [214, 168] },
  ],
  where: 'Chapter 4',
  passage:
    'A blaze of yellow light streamed out upon us, and in the centre of the glare there stood a small man with a very high head, a bristle of red hair all round the fringe of it, and a bald, shining scalp which shot out from among it like a mountain-peak from fir-trees. He writhed his hands together as he stood, and his features were in a perpetual jerk, now smiling, now scowling, but never for an instant in repose. Nature had given him a pendulous lip, and a too visible line of yellow and irregular teeth, which he strove feebly to conceal by constantly passing his hand over the lower part of his face. In spite of his obtrusive baldness, he gave the impression of youth. In point of fact he had just turned his thirtieth year.',
  note: 'Thaddeus is written as a comic figure, nervous, vain and fussy, yet he is the one Sholto who tries to give Mary her share. The novel lets an odd, absurd man be the honest one.',
  artNote:
    'The print has no yellow, so the yellow light is cut as rays and its colour, like his blue eyes, is left to the words. His red hair is the text’s own colour.',
}

import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  combedHair,
  hatch,
  once,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Poole, Jekyll's butler, as Stevenson describes him, and nothing else. When
 * Utterson first knocks at Jekyll's door, in Chapter 2:
 *
 *   "A well-dressed, elderly servant opened the door."
 *
 * and on the last night, in Chapter 8, when he has brought Utterson through a
 * windy March night to the square:
 *
 *   "It was a wild, cold, seasonable night of March, with a pale moon, lying
 *   on her back as though the wind had tilted her"
 *   "The square, when they got there, was full of wind and dust, and the thin
 *   trees in the garden were lashing themselves along the railing. Poole ...
 *   took off his hat and mopped his brow with a red pocket-handkerchief. But
 *   for all the hurry of his coming, these were not the dews of exertion that
 *   he wiped away, but the moisture of some strangling anguish; for his face
 *   was white and his voice, when he spoke, harsh and broken."
 *
 * So: an old servant, neatly dressed (a dark coat, a white collar, a dark
 * tie), with short white hair and a lined, sagging face, standing bareheaded
 * in the wind with his hat in one hand; the other presses the handkerchief,
 * printed in the spot colour, to his brow. His face is bare paper ("his face
 * was white"), the brow drawn up and the mouth pulled down in anguish. Behind
 * him the moon lies on her back, and the thin trees of the square lash along
 * the railing. His dress and hair are not described beyond "well-dressed" and
 * "elderly", so they are plain; the panels (../panels/investigation-kit.tsx)
 * give him the same short white hair. Nothing here comes from a film or stage
 * production.
 *
 * Drawn facing right and mirrored as a whole by MIRROR, so the marker
 * coordinates below are in the printed frame. Seeds: 3601 for the ground,
 * 3602 for the cuts in the figure.
 */

const MIRROR = `matrix(-1 0 0 1 ${PW} 0)`
const printed = (x: number, y: number): [number, number] => [PW - x, y]

/** An old man's head in profile, facing right: a soft, sagging jaw. */
const HEAD = smooth([
  [120, 240, 1],
  [118, 214],
  [108, 190],
  [102, 158],
  [106, 122],
  [122, 94],
  [148, 78],
  [178, 76],
  [200, 86],
  [212, 104],
  [216, 122],
  [217.5, 131, 1],
  [212, 140],
  [218, 152],
  [225, 164, 1],
  [220, 169],
  [213, 169.5, 1],
  [214, 176],
  [212, 179.5, 1],
  [213.5, 183],
  [210, 188],
  [214, 198],
  [210, 208],
  [196, 214],
  [184, 222],
  [182, 240, 1],
])
/**
 * Short white hair, neatly cut: over the crown and the back of the head,
 * above the ear, gone back a little at the temple. The landmarks are kept as
 * well as the outline, because the strands are scattered inside them.
 */
const HAIR_KNOTS: Knot[] = [
  [100, 124],
  [112, 98],
  [136, 82],
  [164, 76],
  [190, 80],
  [200, 88],
  [190, 96],
  [178, 104],
  [170, 118],
  [160, 128],
  [148, 134],
  [142, 162],
  [138, 196],
  [128, 226],
  [112, 216],
  [104, 190],
  [100, 160],
]
const HAIR = smooth(HAIR_KNOTS)
const EAR = smooth([
  [160, 132],
  [149, 134],
  [145, 150],
  [149, 168],
  [160, 174],
  [166, 164],
  [167, 146],
])
/** "red pocket-handkerchief": bunched against his brow. */
const KERCHIEF = smooth([
  [190, 88],
  [206, 84],
  [222, 92],
  [226, 106],
  [220, 116],
  [206, 114],
  [196, 108],
  [186, 100],
])
/** His fingertips over it: the hand comes round from the far side. */
const FINGERS = ['M200 102L212 86', 'M206 106L219 90', 'M212 110L224 97']
const COAT = smooth([
  [40, 330, 1],
  [46, 290],
  [70, 262],
  [106, 248],
  [124, 244],
  [156, 258],
  [190, 254],
  [216, 264],
  [238, 292],
  [246, 330, 1],
])
const COLLAR = smooth([
  [118, 236, 1],
  [150, 246],
  [182, 234, 1],
  [186, 250, 1],
  [150, 260],
  [116, 250, 1],
])
const TIE = smooth([
  [174, 250, 1],
  [192, 248, 1],
  [194, 262],
  [186, 268],
  [178, 262],
])
const LAPEL = smooth([
  [156, 260, 1],
  [178, 264, 1],
  [200, 330, 1],
  [178, 330, 1],
  [166, 292],
])
/** The near arm, bent, holding his hat by the brim. */
const SLEEVE = smooth([
  [150, 330, 1],
  [160, 300],
  [184, 286],
  [206, 280, 1],
  [212, 304, 1],
  [192, 308],
  [190, 330, 1],
])
/** His round-crowned hat, held crown up at his side. */
const HAT = smooth([
  [224, 290, 1],
  [226, 270],
  [240, 256],
  [258, 254],
  [274, 262],
  [280, 280],
  [278, 290, 1],
])
const HAT_BRIM = smooth([
  [212, 294],
  [224, 286],
  [252, 289],
  [282, 286],
  [292, 292],
  [282, 298],
  [252, 296],
  [222, 300],
])
/** The hand at the brim: the back of it, and four fingers over the edge, cut apart. */
const HAND = smooth([
  [204, 282],
  [214, 278],
  [226, 282],
  [230, 294],
  [222, 304],
  [208, 306],
])
const HAND_FINGERS = ['M222 284L230 298', 'M226 282L236 295', 'M229 281L240 292']

/** "a pale moon, lying on her back as though the wind had tilted her" */
const MOON = 'M236 34C244 50 270 54 286 38C280 58 250 62 236 34Z'

type Marks = {
  ground: string
  wind: string
  trees: string
  rails: string
  spikes: string
  hair: string
  back: string
  lines: string
  neck: string
  coat: string
  folds: string
}

const marks = once<Marks>(() => {
  // A wild night: the moon's light from the upper right, the square dark below.
  const ground = portraitGround(3601, (x, y) =>
    clamp(1 - Math.hypot(x - 262, (y - 46) * 1.1) / 240 - Math.max(0, (y - 210) / 200)),
  )
  const r = rng(3602)
  // "full of wind and dust": long, driven streaks across the sky.
  let wind = ''
  for (let i = 0; i < 12; i++) {
    const y = 60 + i * 13 + between(r, -4, 4)
    const x = between(r, 190, 280)
    wind += gouge(x, y, x + between(r, 30, 60), y - between(r, 4, 10), between(r, 0.6, 1.3), 1)
  }
  // "the thin trees in the garden were lashing themselves along the railing":
  // thin trunks bent over by the wind, their bare branches streaming.
  let trees = ''
  for (const [bx, lean, h] of [
    [238, 40, 170],
    [282, 46, 196],
    [316, 34, 150],
  ] as const) {
    const trunk: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const t = k / 8
      trunk.push([bx + lean * t * t, 236 - h * t])
    }
    trees += ribbon(trunk, 7, 0.5, false)
    for (let k = 3; k < 8; k++) {
      const [x, y] = trunk[k]
      const side = k % 2 ? -1 : 1
      const len = between(r, 22, 40)
      const pts: Pt[] = []
      for (let j = 0; j <= 6; j++) {
        const u = j / 6
        pts.push([x + len * u, y + side * 10 * u - 8 * u * u + between(r, -1, 1)])
      }
      trees += ribbon(pts, 3.2 - k * 0.2, 0.6, false)
    }
  }
  // The railing round the garden: bars with spear-points, and a rail.
  let rails = 'M180 236L330 232'
  let spikes = ''
  for (let x = 186; x < 330; x += 11) {
    rails += `M${n(x)} ${n(236 - (x - 180) * 0.027)}L${n(x)} 330`
    spikes += `M${n(x - 2.6)} ${n(229 - (x - 180) * 0.027)}L${n(x)} ${n(221 - (x - 180) * 0.027)}L${n(x + 2.6)} ${n(229 - (x - 180) * 0.027)}Z`
  }
  // Short, neat white hair: fine ink strokes combed back over the crown and
  // down behind, and the edge of it cut as short strokes at the temple.
  let hair = combedHair(r, HAIR_KNOTS, [156, 150], 150, [6, 13])
  for (let i = 0; i < 14; i++) {
    const t = i / 13
    const x = 198 - t * 40 + between(r, -1, 1)
    const y = 86 + t * 44 + between(r, -1, 1)
    hair += `M${n(x)} ${n(y)}l${n(-5 - between(r, 0, 3))} ${n(-2 - between(r, 0, 2))}`
  }
  let back = ''
  for (let rad = 44; rad < 84; rad += 3.6)
    back += arcDashes(r, 172, 156, rad, deg(108), deg(162), [8, 20], [2, 6])
  // The lines of an old face: a sagging cheek, a crease to the mouth, the eye.
  let lines = ''
  for (let rad = 14; rad < 30; rad += 3.6)
    lines += arcDashes(r, 202, 150, rad, deg(70), deg(150), [8, 20], [2, 5])
  const neck = hatch(r, { x0: 118, x1: 190, y0: 214, y1: 240 }, 4, 0.08)
  const coat =
    gouge(66, 278, 56, 318, 2.2, 2) +
    gouge(96, 266, 88, 318, 1.6, 1.5) +
    gouge(128, 268, 124, 318, 1.1, -1)
  const folds = gouge(166, 310, 190, 296, 1.3, 1) + gouge(262, 262, 272, 280, 1.4, -1)
  return { ground, wind, trees, rails, spikes, hair, back, lines, neck, coat, folds }
})

function PoolePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-po-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <g transform={MIRROR}>
        <path d={m.ground} fill={PAPER} />
        <path d={m.wind} fill={PAPER} />
        <path d={MOON} fill={PAPER} />
        <path d={m.trees} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={m.trees} fill={INK} />
        <path d={m.rails} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinejoin="round" />
        <path d={m.spikes} fill={PAPER} />
        {/* the ink halo that lifts him off the ground */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} />
          <path d={KERCHIEF} />
          <path d={COAT} />
          <path d={SLEEVE} />
          <path d={HAT} />
          <path d={HAT_BRIM} />
        </g>
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        {/* "his face was white": bare paper */}
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.4} />
            <path d={m.lines} strokeWidth={LINE.hairline} />
            <path d={m.neck} strokeWidth={1} />
          </g>
          <path d={HAIR} fill={PAPER} />
          <path d={m.hair} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
        </g>
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.9} strokeLinejoin="round" />
        <path
          d="M158 142C152 144 151 156 154 163C156 166 159 165 160 161"
          fill="none"
          stroke={INK}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* a soft, sagging jaw and a fold of the chin */}
          <path d="M210 208C194 216 176 212 166 198C160 190 158 180 158 170" strokeWidth={1.8} />
          <path d="M204 214Q196 220 186 219" strokeWidth={LINE.fine} />
          {/* "strangling anguish": the brow drawn up, the eye cast down */}
          <path d="M196 124Q204 118 213 122" strokeWidth={2.8} />
          <path d="M197 118Q202 116 205 119M194 112Q200 109 204 112" strokeWidth={LINE.hairline} />
          <path d="M199 132.5Q206 131 213 133" strokeWidth={2.2} />
          <path d="M201 136Q207 138 212 136" strokeWidth={LINE.fine} />
          <path d="M196 134L189 132M196 137L190 140M197 140L192 145" strokeWidth={LINE.hairline} />
          {/* the nostril, a deep fold, and a mouth pulled down at the corner */}
          <path d="M220 166C216.5 163.5 216 159.5 218.5 157" strokeWidth={1.4} />
          <path d="M212 154C204 164 202 176 205 188" strokeWidth={1.3} />
          <path d="M212 179.5C207 179.5 203 181 200.5 185" strokeWidth={1.8} />
          <path d="M210 186Q207 187.5 205 186.5" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={207.2} cy={134.4} r={2.3} fill={INK} />
        {/* the red pocket-handkerchief, and his fingertips over it */}
        <path d={KERCHIEF} fill={RED} />
        <path
          d="M194 96Q204 94 214 100M200 106Q210 104 220 110M208 88Q214 94 222 96"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
        <g fill="none" strokeLinecap="round">
          {FINGERS.map((d) => (
            <g key={d}>
              <path d={d} stroke={INK} strokeWidth={8.6} />
              <path d={d} stroke={PAPER} strokeWidth={5.4} />
            </g>
          ))}
        </g>
        {/* the near arm, the hat held by its brim, and the hand */}
        <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={HAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.folds} fill={PAPER} />
        <path d={HAT_BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M226 283Q252 286 280 283" fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
        <g fill="none" strokeLinecap="round">
          {HAND_FINGERS.map((d) => (
            <g key={d}>
              <path d={d} stroke={INK} strokeWidth={8.2} />
              <path d={d} stroke={PAPER} strokeWidth={5} />
            </g>
          ))}
        </g>
      </g>
      <InnerRule />
    </>
  )
}

export const pooleArt: LinocutArt = { width: PW, height: PH, Draw: PoolePortrait }

export const poole: Portrait = {
  name: 'Poole',
  art: pooleArt,
  alt: "A linocut portrait of Poole, Dr Jekyll's butler, out of doors on a windy night, drawn from Stevenson's descriptions in Chapters 2 and 8. He is an old man, neatly dressed in a dark coat, a white collar and a dark tie, seen in profile facing left, with short white hair and a lined, sagging face that is bare and pale. His brow is drawn up and his mouth pulled down in distress. He has taken off his round hat and holds it by the brim at his side, and with the other he presses a handkerchief, printed in red, to his forehead. Behind him a crescent moon lies on its back in a streaked sky, and thin trees bend in the wind over the spiked railing of a square. Three numbered red markers point to his dress, the red handkerchief and his white face.",
  describedBy: [
    { phrase: 'A well-dressed, elderly servant', at: printed(92, 300), to: printed(128, 272) },
    {
      phrase: 'took off his hat and mopped his brow with a red pocket-handkerchief',
      at: printed(170, 40),
      to: printed(198, 88),
    },
    { phrase: 'his face was white', at: printed(254, 170), to: printed(206, 160) },
  ],
  where: 'Chapter 2; Chapter 8',
  note: 'Poole has served Jekyll for twenty years, and his fear is what finally breaks the cabinet door open. The red handkerchief is the only colour on him: a respectable servant pushed past his manners by dread.',
  artNote:
    'Stevenson says only that he is well dressed and elderly, so his clothes and his short white hair are plain; the handkerchief is red because the text says so.',
}

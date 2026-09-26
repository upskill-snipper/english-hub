import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arc, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, coat, once, portraitGround, smooth, type Knot } from './common'

/**
 * Napoleon, as Orwell first describes him in Chapter 2, and nothing else:
 *
 *   "Napoleon was a large, rather fierce-looking Berkshire boar, the only
 *   Berkshire on the farm, not much of a talker, but with a reputation for
 *   getting his own way."
 *
 * So: the head and shoulders of a big black boar in profile, facing right,
 * filling the block. A Berkshire is a black pig, so he is cut in INK against
 * a pale ground, the one pig on the farm printed black, and his light is cut
 * into him: a rim along his crown and the ridge of his neck, the grain of his
 * hide round the heavy jowl, the wrinkles of his snout. The fierceness is in
 * the brow, cut low and slanting down over a small eye, as the figure kit cuts
 * it (../panels/people.tsx), and his mouth is one shut line that turns down at
 * the corner: "not much of a talker". Nothing is added that the sentence does
 * not give him: no tushes, no whip, no clothes. Those come much later, and
 * the portrait is of the pig the book starts with. Nothing here comes from a
 * film or stage production.
 *
 * Seeds: 5301 for the ground, 5302 for the cuts in the figure.
 */

/** Head, neck and shoulder, facing right; the body runs out of the block at the left and foot. */
const HEAD: Knot[] = [
  [0, 214, 1],
  [26, 168],
  [62, 124],
  [100, 94],
  [134, 76],
  [160, 72],
  [190, 82],
  [222, 100],
  [252, 122],
  [278, 146],
  [296, 160, 1],
  [304, 184],
  [300, 210, 1],
  [296, 222],
  [282, 232],
  [264, 240],
  [248, 254],
  [224, 270],
  [192, 280],
  [170, 294],
  [160, 330, 1],
  [0, 330, 1],
]
/** The flat disc of the snout, seen a little from the side. */
const SNOUT = smooth([
  [296, 160],
  [308, 164],
  [316, 182],
  [314, 204],
  [304, 212],
  [298, 200],
  [296, 180],
])
/** The ears: upright and tipped forward, the near one standing over his brow. */
const EAR_NEAR = smooth([
  [150, 84],
  [164, 54],
  [196, 18, 1],
  [200, 52],
  [188, 92],
])
const EAR_FAR = smooth([
  [118, 84],
  [124, 50],
  [146, 16, 1],
  [158, 46],
  [156, 80],
])
/** The eye, small and deep under the brow. */
const EYE: [number, number] = [220, 136]

type Marks = {
  ground: string
  rim: string
  bristles: string
  hide: string
  jowl: string
  snout: string
  brow: string
}

const marks = once<Marks>(() => {
  // A pale ground, so the black boar stands out: cut away almost
  // everywhere, the ink left in thin lines, heavier low down and at the left.
  const ground = portraitGround(5301, (x, y) =>
    clamp(0.12 + (1 - x / PW) * 0.35 + Math.max(0, (y - 200) / 300)),
  )
  const r = rng(5302)
  // The light along his crown and down the ridge of his neck, cut in rows
  // that thin away from the edge.
  let rim = ''
  const edge: [number, number][] = [
    [8, 200],
    [30, 164],
    [64, 124],
    [100, 96],
    [132, 80],
    [158, 76],
    [190, 86],
    [222, 104],
    [250, 126],
    [274, 148],
  ]
  for (let row = 0; row < 3; row++)
    for (let i = 0; i < edge.length - 1; i++) {
      const [x1, y1] = edge[i]
      const [x2, y2] = edge[i + 1]
      const inset = 7 + row * 8
      const w = (2.8 - row * 0.8) * (0.7 + (i / edge.length) * 0.5)
      if (r() < 0.1 + row * 0.25) continue
      rim += gouge(x1 + 2, y1 + inset, x2 - 2, y2 + inset, w, -0.8)
    }
  // Bristles standing off the ridge of his neck.
  let bristles = ''
  for (let i = 0; i < 36; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 36
    const k = Math.min(edge.length - 2, Math.floor(t * 5))
    const [x1, y1] = edge[k]
    const [x2, y2] = edge[k + 1]
    const u = t * 5 - k
    const x = x1 + (x2 - x1) * u
    const y = y1 + (y2 - y1) * u
    const a = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2 + between(r, -0.3, 0.3)
    const L = between(r, 5, 10)
    bristles += gouge(x, y + 1, x + Math.cos(a) * L, y + Math.sin(a) * L, 0.9)
  }
  // The grain of the black hide: short cuts along the lie of the neck,
  // widest on the shoulder where the light falls.
  const hide = coat(
    r,
    HEAD,
    240,
    (x, y) => deg(x < 150 ? 60 - (y - 150) * 0.1 : 30),
    (x, y) => clamp(0.55 - (y - 120) / 260 - Math.max(0, x - 180) / 120),
    { len: [7, 15], width: 1.2 },
  )
  // The heavy jowl: arcs cut round its curve.
  let jowl = ''
  for (let k = 0; k < 6; k++) jowl += arc(206, 196, 26 + k * 8, deg(25 + k * 2), deg(118 - k * 3))
  // The top of the snout: wrinkles across it, and the dish of the face.
  let snout = ''
  for (let k = 0; k < 4; k++)
    snout += gouge(252 + k * 11, 134 + k * 9, 262 + k * 11, 152 + k * 9, 1.4, 1.4)
  snout += gouge(234, 152, 290, 194, 1.6, 2.4)
  // The brow, cut low and slanting down towards the snout, and the furrow
  // above it.
  const brow =
    'M198 118C214 119 232 124 247 134L244 138C230 131 214 127 198 124Z' +
    gouge(192, 100, 238, 110, 2, -1) +
    gouge(206, 152, 236, 149, 1.6, 1)
  return { ground, rim, bristles, hide, jowl, snout, brow }
})

function NapoleonPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-na-head`
  const HEAD_D = smooth(HEAD)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD_D} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={PW} height={PH} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      {/* the paper halo that cuts him out of the ground */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={5} strokeLinejoin="round">
        <path d={HEAD_D} />
        <path d={EAR_FAR} />
        <path d={EAR_NEAR} />
        <path d={SNOUT} />
      </g>
      <path d={EAR_FAR} fill={INK} />
      <path d="M130 80Q136 50 144 26" fill="none" stroke={PAPER} strokeWidth={1.1} />
      <path d={HEAD_D} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.hide} fill={PAPER} />
        <path d={m.rim} fill={PAPER} />
        <path d={m.snout} fill={PAPER} />
        <path d={m.brow} fill={PAPER} />
        <path
          d={m.jowl}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.3}
          strokeLinecap="round"
          strokeDasharray="14 6"
        />
      </g>
      <path d={m.bristles} fill={PAPER} />
      {/* the near ear, standing over his brow, cut clear of the head */}
      <path
        d={EAR_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d="M164 84Q176 56 192 30M172 88Q182 66 194 44"
        fill="none"
        stroke={PAPER}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* the snout, cut as a rim of light, and its nostrils */}
      <path d={SNOUT} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      <g fill={PAPER}>
        <ellipse cx={309} cy={178} rx={2} ry={3.6} />
        <ellipse cx={309} cy={194} rx={2} ry={3.6} />
      </g>
      {/* "not much of a talker": the mouth shut, one line turning down at the corner */}
      <path
        d="M301 206C288 212 274 216 262 220C254 223 250 230 248 240"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.bold}
        strokeLinecap="round"
      />
      <path
        d="M292 222C282 228 272 232 262 236"
        fill="none"
        stroke={PAPER}
        strokeWidth={1}
        strokeLinecap="round"
      />
      {/* a small eye, deep under the brow */}
      <path
        d={`M${EYE[0] - 10} ${EYE[1] + 2}Q${EYE[0]} ${EYE[1] - 5} ${EYE[0] + 11} ${EYE[1] + 1}Q${EYE[0]} ${EYE[1] + 7} ${EYE[0] - 10} ${EYE[1] + 2}Z`}
        fill={PAPER}
      />
      <circle cx={EYE[0] + 2} cy={EYE[1] + 1.5} r={3.4} fill={INK} />
      <circle cx={EYE[0] + 3.2} cy={EYE[1] + 0.4} r={1} fill={PAPER} />
      <InnerRule />
    </>
  )
}

export const napoleonArt: LinocutArt = { width: PW, height: PH, Draw: NapoleonPortrait }

export const napoleon: Portrait = {
  name: 'Napoleon',
  art: napoleonArt,
  alt: 'A linocut portrait of Napoleon as the text first describes him, in Chapter 2: the head and shoulders of a big black boar in profile, facing right, filling the picture and cut out of a pale ground by a thin white outline. He has upright ears tipped forward, a heavy jowl and a broad flat snout. A heavy brow is cut low and slanting over his small eye, and his mouth is one shut line that turns down at the corner. Light catches the bristles along the ridge of his neck. Three numbered red markers point to his head, his black hide and his mouth.',
  describedBy: [
    { phrase: 'a large, rather fierce-looking Berkshire boar', at: [262, 60], to: [226, 122] },
    { phrase: 'the only Berkshire on the farm', at: [60, 262], to: [84, 226] },
    { phrase: 'not much of a talker', at: [300, 262], to: [270, 226] },
  ],
  where: 'Chapter 2',
  passage:
    'Napoleon was a large, rather fierce-looking Berkshire boar, the only Berkshire on the farm, not much of a talker, but with a reputation for getting his own way.',
  note: 'Orwell introduces the tyrant in a single sentence, and ends it on the warning: Napoleon does not win arguments, he gets his own way. From Chapter 5 he gets it with the dogs.',
  artNote: 'A Berkshire is a black breed, so he is the one pig on the farm printed in black.',
}

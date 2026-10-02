import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, n, ribbon, type Pt } from '@/components/comics/linocut/carve'

import {
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
} from './common'

/**
 * Ariel, from what he says of himself and what Prospero calls him:
 *
 *   ARIEL: "be't to fly, To swim, to dive into the fire, to ride On the
 *   curl'd clouds" (Act 1, Scene 2)
 *   PROSPERO: "Dearly, my delicate Ariel" (Act 4, Scene 1); "Hast thou,
 *   which art but air, a touch, a feeling Of their afflictions" (Act 5,
 *   Scene 1)
 *
 * So: a spirit riding the air above curled clouds, his body thinning into
 * wisps of air below the breast and streaming back behind him, his hair
 * streaming back in the wind, his face calm, with the trace of a smile. The
 * play describes what he does and what he is, never his looks.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): cut in
 * PAPER, the one figure in these prints who is, with a thick ink edge so he
 * stands clear of the dark ground; a slender, grown figure in a light shift,
 * never a child, never held and never in pain; his hair a cap over the crown
 * with locks streaming straight back, not up, because locks raised above the
 * head read as feathers and as a headdress; the wisps of his body curling at
 * their ends, so they are never taken for legs. His head is every man's head
 * (MAN_HEAD), cut in paper as the rest of him is, its features in ink. The
 * clouds he rides are cut in paper too, their curls in ink. There is no red
 * in this plate.
 *
 * Seeds: 6301 (the figure), 6310 (the ground).
 */

/** His head is lifted a little: he is flying. */
const ROT = -4

/** The cap of his hair over the crown and the back of the head, leaving the face and the ear. */
const CAP = spline([
  [163, 64, 1],
  [150, 45],
  [124, 31],
  [94, 29],
  [66, 39],
  [46, 61],
  [37, 92],
  [39, 124],
  [50, 152, 1],
  [66, 140],
  [82, 116],
  [100, 98],
  [120, 84],
  [142, 72],
])

/**
 * The locks streaming straight back from the cap in the wind, each rooted
 * inside the cap, so its tapered root is hidden, and drawn out to a point
 * like a flame. Seven, of different lengths, none rising above the head.
 */
const LOCK_SPINES: [Pt[], number][] = [
  [
    [
      [104, 38],
      [74, 28],
      [44, 22],
      [14, 22],
      [-16, 18],
      [-46, 20],
      [-72, 14],
    ],
    28,
  ],
  [
    [
      [96, 54],
      [64, 48],
      [32, 46],
      [2, 50],
      [-28, 46],
      [-60, 52],
      [-92, 48],
    ],
    28,
  ],
  [
    [
      [86, 74],
      [54, 72],
      [22, 74],
      [-8, 80],
      [-38, 76],
      [-70, 82],
      [-100, 78],
    ],
    26,
  ],
  [
    [
      [76, 96],
      [48, 98],
      [18, 104],
      [-12, 108],
      [-42, 104],
      [-74, 110],
    ],
    24,
  ],
  [
    [
      [70, 118],
      [44, 126],
      [16, 134],
      [-12, 138],
      [-40, 136],
      [-62, 142],
    ],
    20,
  ],
  [
    [
      [68, 138],
      [46, 150],
      [22, 160],
      [-4, 164],
      [-26, 162],
    ],
    16,
  ],
]
const LOCKS = LOCK_SPINES.map(([pts, w]) => ribbon(pts, w, 0.55, true)).join('')
/** Strands cut in ink along each lock and back over the cap, so they read as hair. */
const STRANDS =
  LOCK_SPINES.map(
    ([pts]) =>
      'M' +
      pts
        .slice(1, -1)
        .map(([x, y], i) => `${n(x)} ${n(y + (i % 2 ? 1.5 : -1.5))}`)
        .join('L'),
  ).join('') +
  'M156 54C130 38 98 36 72 46M152 64C126 52 98 52 74 62M140 74C116 66 88 72 64 86M128 84C106 82 84 92 66 108'

/** His shoulders and breast in a light shift: a slender figure, not a child. */
const SHIFT = spline([
  [24, 336, 1],
  [28, 302],
  [40, 272],
  [62, 248],
  [84, 232],
  [112, 236],
  [140, 230],
  [162, 242],
  [180, 266],
  [190, 300],
  [192, 336, 1],
])
/** The round neck of the shift, and folds falling from the shoulders, cut in ink. */
const SHIFT_LINES =
  'M84 234Q110 252 140 232' +
  'M70 256Q60 290 56 330' +
  'M104 262Q102 300 98 336' +
  'M162 254Q168 290 170 330'

/**
 * The wisps his body thins into below the breast, streaming back behind
 * him like smoke and drawn out to nothing, each rooted inside the shift.
 * Two curl a little at their ends, as the kit's do, so they are never taken
 * for legs.
 */
const WISP_SPINES: [Pt[], number][] = [
  [
    [
      [40, 300],
      [10, 318],
      [-20, 330],
      [-52, 334],
      [-84, 330],
      [-108, 320],
    ],
    30,
  ],
  [
    [
      [80, 306],
      [48, 332],
      [16, 350],
      [-18, 360],
      [-52, 358],
      [-78, 348],
      [-90, 336],
    ],
    30,
  ],
  [
    [
      [120, 310],
      [94, 342],
      [62, 366],
      [28, 382],
      [-6, 388],
      [-36, 384],
    ],
    26,
  ],
  [
    [
      [160, 310],
      [144, 344],
      [118, 374],
      [86, 396],
      [54, 406],
      [30, 404],
      [20, 394],
    ],
    20,
  ],
  [
    [
      [196, 306],
      [190, 340],
      [174, 372],
      [150, 398],
      [124, 414],
    ],
    14,
  ],
]
const WISPS = WISP_SPINES.map(([pts, w]) => ribbon(pts, w, 0.6, true)).join('')
const WISP_LINES = WISP_SPINES.map(
  ([pts]) =>
    'M' +
    pts
      .slice(1, -2)
      .map(([x, y]) => `${n(x)} ${n(y)}`)
      .join('L'),
).join('')

/**
 * "On the curl'd clouds": a bank of cloud below and ahead of him, in the
 * portrait's own coordinates, cut in paper, each lobe with a curl of ink.
 */
const CLOUD = spline([
  [136, 318, 1],
  [132, 298],
  [146, 280],
  [170, 282],
  [182, 262],
  [208, 252],
  [232, 262],
  [246, 240],
  [274, 234],
  [296, 248],
  [314, 244],
  [326, 262],
  [327, 318, 1],
])
const CLOUD_CURLS =
  'M160 300C154 290 168 284 174 292C178 299 170 304 166 298' +
  'M206 276C199 264 216 258 222 268C226 276 216 281 212 274' +
  'M266 258C258 244 280 238 286 250C290 259 278 264 274 256' +
  'M308 270C303 261 316 257 320 265C322 271 314 274 311 268' +
  'M186 298Q212 290 240 298M248 284Q276 276 304 290'

/** Ariel, from the head to the wisps of air, facing right in a 0..240 by 0..420 frame. */
export function ArielFigure({ uid, seed }: { uid: string; seed: number }) {
  return (
    <g>
      {/* The body and its wisps, and then the hair, are each cut as one
          shape: an ink edge round all the parts first, then the paper over
          them, so no seam shows where one part meets another. */}
      <g fill={INK} stroke={INK} strokeWidth={2.8} strokeLinejoin="round">
        <path d={WISPS} />
        <path d={SHIFT} />
      </g>
      <g fill={PAPER}>
        <path d={WISPS} />
        <path d={SHIFT} />
      </g>
      {/* "which art but air": the wisps he thins into */}
      <path d={WISP_LINES} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      <path d={SHIFT_LINES} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <NeckShadow id={`${uid}-ari-${seed}`} />
        <g fill={INK} stroke={INK} strokeWidth={2.8} strokeLinejoin="round">
          <path d={LOCKS} />
          <path d={CAP} />
        </g>
        <g fill={PAPER}>
          <path d={LOCKS} />
          <path d={CAP} />
        </g>
        <path d={STRANDS} fill="none" stroke={INK} strokeWidth={0.95} strokeLinecap="round" />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        {/* "my delicate Ariel": a calm face, the trace of a smile */}
        <ManNoseAndMouth smile />
        <ManBrow w={1.9} raise={1.5} />
        <ManEye look="open" />
      </g>
    </g>
  )
}

/** A thick ink halo round the whole spirit, so the paper figure stands clear of the ground. */
export function ArielKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={11} strokeLinejoin="round">
      <path d={WISPS} />
      <path d={SHIFT} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={LOCKS} />
        <path d={CAP} />
      </g>
    </g>
  )
}

const P = placing(100, 6, 0.74)

type Sky = { ground: string }
let sky: Sky | undefined
function skyCuts(): Sky {
  if (sky) return sky
  // The open air: dark, a little lighter ahead of him and above the clouds.
  const ground = portraitGround('tempest-ariel', 6310, (x, y) =>
    clamp(0.06 + ((x - 60) / 280) * 0.42 - Math.abs(y - 150) / 900),
  )
  sky = { ground }
  return sky
}

function ArielPortrait({ uid }: ArtProps) {
  const s = skyCuts()
  return (
    <>
      <path d={s.ground} fill={PAPER} />
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={CLOUD} />
      </g>
      <path d={CLOUD} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={CLOUD_CURLS} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
      <g transform={P.transform}>
        <ArielKnockout />
        <ArielFigure uid={uid} seed={6301} />
      </g>
      <PortraitRule />
    </>
  )
}

export const arielPortrait: LinocutArt = { width: PW, height: PH, Draw: ArielPortrait }

/** Marker 1 points to his brow from above, so its line crosses neither the eye nor the mouth. */
const FACE_AT = onTurnedHead(P, ROT, 152, 70)
const CLOUD_AT: [number, number] = [280, 262]
const WISP_AT = P.to(-40, 352)

export const ariel: Portrait = {
  name: 'Ariel',
  art: arielPortrait,
  alt: 'A linocut portrait of Ariel, a spirit, in profile, facing right, cut almost all in white with black lines on the dark ground. He is a slender, grown figure with a calm face and the trace of a smile. His hair covers his head like a cap and streams straight back behind him in long locks, as if in a strong wind. He wears a light shift, and below his breast his body thins into long wisps of air that stream back behind him like smoke and taper to nothing; he has no legs. Below him and ahead of him lies a bank of white cloud, its rounded lobes cut with curls, and the wisps stream back over it. Three numbered red markers point to his face, the clouds and the wisps of air.',
  describedBy: [
    { phrase: 'my delicate Ariel', at: [FACE_AT[0] + 50, FACE_AT[1] - 34], to: FACE_AT },
    { phrase: 'On the curl’d clouds', at: [CLOUD_AT[0] + 14, CLOUD_AT[1] - 58], to: CLOUD_AT },
    { phrase: 'which art but air', at: [WISP_AT[0] - 4, WISP_AT[1] - 70], to: WISP_AT },
  ],
  where: 'Act 1, Scene 2; Act 4, Scene 1; Act 5, Scene 1',
  note: 'Ariel is described by what he does: he offers to fly, swim, dive into fire and ride the clouds at Prospero’s command. Prospero calls him delicate, and in Act 5 “but air”, before he sets him free “to the elements”.',
  artNote:
    'The play never describes his looks. He is cut in white, the one figure in these prints who is, as the panels cut him: grown, not a child, his hair streaming back and his body thinning into air.',
}

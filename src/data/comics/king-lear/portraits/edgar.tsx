import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
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
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
  type SP,
} from './common'

/**
 * Edgar as Poor Tom, the disguise he chooses in Act 2, Scene 3, hunted as an
 * outlaw with every port watched:
 *
 *   "my face I'll grime with filth, Blanket my loins; elf all my hair in
 *   knots, And with presented nakedness outface The winds and persecutions of
 *   the sky."
 *
 * So: a young man near naked, his face smudged with dirt, his long hair
 * matted in knots, a blanket wrapped round him. The Fool's "he reserv'd a
 * blanket, else we had been all shamed" (3.4) keeps him decently covered, and
 * so does the print: he is drawn as the figure kit draws him as Tom
 * (../panels/people.tsx), the ragged blanket over the far shoulder, crossing
 * his chest and wrapped round him below, tied with a rope, his near shoulder
 * and arm bare. His hair is the kit's Tom's hair at the size of a portrait:
 * Edgar's own dark hair to the shoulders, its edge broken into tangled tufts,
 * matted into knots. Thick hair, not a mane. At panel size the kit cuts the
 * knots as small paper rings; at the size of a portrait rings read as pins or
 * ornaments, so here each knot is a tangle of strands crossing and looping
 * back on one another (TANGLES).
 *
 * HIS MADNESS IS A DISGUISE, and the portrait does not draw madness. His face
 * is his own young face, the youth's head (YOUTH_HEAD), the eye open and
 * steady and the mouth closed: "Edgar I nothing am" is a choice, made with
 * his wits about him. No grimace, nothing to mock. The dirt on his face is a
 * few smudges of fine ink lines on the brow, the cheekbone and the jaw, laid
 * one way, so they read as dirt and never as bruises or a rash. The pins and
 * nails of the Bedlam beggars in the same speech are never drawn. There is no
 * red in this plate.
 *
 * Drawn to the waist, so the blanket and the rope are in the picture, and so
 * a little smaller in the block than a head and shoulders.
 *
 * MARKERS. "my face I'll grime with filth" sits on his cheek with no line.
 * The others come to what they mark from in front of him or from behind,
 * each at its own height: no line crosses his face.
 *
 * Seeds: 7501 to 7507 (the figure's marks), 7510 (the ground).
 */

/**
 * His long matted hair: from the hairline at the brow over the crown and
 * down behind the ear to the shoulders, its outer edge broken into soft,
 * tangled tufts (bumps round the head, never spikes, which read as a crown
 * of thorns or a halo of rays).
 */
const HAIR = (() => {
  const r = rng(7503)
  const pts: SP[] = [[157, 62, 1]]
  // the outer edge, from the top of the brow over the crown and down the back
  const edge: Pt[] = []
  for (let i = 0; i <= 22; i++) {
    const t = i / 22
    const a = deg(-62 - t * 128)
    const rx = 70 + t * 10
    const ry = 86 + t * 52
    const bump = i % 2 === 0 ? between(r, 4, 7) : between(r, -1, 1)
    edge.push([104 + Math.cos(a) * (rx + bump), 112 + Math.sin(a) * (ry + bump)])
  }
  for (const p of edge) pts.push(p)
  // the ends at the shoulder, in a few soft locks
  pts.push([44, 246], [54, 252], [60, 244], [70, 256], [78, 246], [88, 250, 1])
  // back up behind the neck and the ear, and forward above the ear to the brow
  pts.push(
    [92, 222],
    [90, 192],
    [89, 162],
    [92, 136],
    [97, 112],
    [106, 100],
    [120, 92],
    [134, 82],
    [146, 70],
  )
  return spline(pts)
})()
/** Where the hair is tangled into knots: clusters of crossing strands. */
const TANGLES: Pt[] = [
  [58, 98],
  [46, 154],
  [72, 206],
  [98, 46],
  [64, 236],
]

/** His bare shoulders, chest and back, to the waist. */
const TORSO = spline([
  [66, 226, 1],
  [42, 244],
  [26, 278],
  [22, 330],
  [24, 380],
  [26, 434, 1],
  [208, 434, 1],
  [206, 384],
  [202, 334],
  [196, 292],
  [184, 260],
  [160, 240],
  [134, 230, 1],
])

/**
 * "Blanket my loins": the ragged blanket, over the far shoulder and down his
 * back, crossing his chest from the foot of the neck to the waist in front,
 * and wrapped round him below; its torn edge across the chest.
 */
const BLANKET = (() => {
  const r = rng(7504)
  const pts: SP[] = [
    [60, 228, 1],
    [36, 244],
    [18, 274],
    [12, 322],
    [14, 380],
    [16, 436, 1],
    [214, 436, 1],
    [212, 400],
    [210, 362, 1],
  ]
  // the torn edge across his chest, from the waist in front up to the foot
  // of the neck: irregular, as worn wool tears
  const from: Pt = [210, 362]
  const to: Pt = [74, 236]
  const L = Math.hypot(to[0] - from[0], to[1] - from[1])
  const nx = -(to[1] - from[1]) / L
  const ny = (to[0] - from[0]) / L
  let d = 0
  while (d < L - 8) {
    d += between(r, 5, 11)
    const t = Math.min(d / L, 1)
    const off = between(r, -4.5, 3)
    pts.push([
      from[0] + (to[0] - from[0]) * t + nx * off,
      from[1] + (to[1] - from[1]) * t + ny * off,
      1,
    ])
  }
  pts.push([74, 236, 1])
  return spline(pts)
})()

/** His near arm, bare, hanging at his side, a little bent at the elbow. */
const ARM = spline([
  [110, 256],
  [126, 246],
  [146, 252],
  [152, 280],
  [148, 316],
  [148, 348],
  [156, 388],
  [162, 436, 1],
  [136, 436, 1],
  [130, 392],
  [122, 352],
  [116, 316],
  [110, 282],
])

/** The rope tied round the blanket at his waist, and its knot and ends in front. */
const ROPE_Y = (x: number) => 372 + (x - 110) * 0.04

type Marks = {
  hair: string
  knots: string
  grime: string
  nape: string
  blanket: string
  skin: string
  rope: string
  ropeTwist: string
  ropeEnds: string
}

const marks = once((): Marks => {
  const r = rng(7501)
  // Strands of the matted hair, cut in paper: falling from the crown down
  // and back in long wavy locks, the light catching them towards the front.
  let hair = ''
  for (let i = 0; i < 30; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 30
    const a0 = deg(-70 - t * 110)
    const x0 = 104 + Math.cos(a0) * 58
    const y0 = 112 + Math.sin(a0) * 70
    const x1 = x0 - 6 - t * 18 + between(r, -6, 6)
    const y1 = y0 + 40 + t * 50 + between(r, -8, 8)
    const pts: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 6 + i) * 2.6, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 0.9, 1.6) * (1.1 - t * 0.4), 0.8)
  }
  // and the long locks below, down the back to the shoulders
  for (let i = 0; i < 18; i++) {
    const t = (i + between(r, 0.1, 0.9)) / 18
    const x0 = 40 + t * 48 + between(r, -3, 3)
    const y0 = 128 + between(r, -10, 16)
    const x1 = x0 + between(r, -4, 8)
    const y1 = 214 + t * 30 + between(r, -10, 10)
    const pts: Pt[] = []
    for (let k = 0; k <= 8; k++) {
      const u = k / 8
      pts.push([x0 + (x1 - x0) * u + Math.sin(u * 7 + i * 1.3) * 2.4, y0 + (y1 - y0) * u])
    }
    hair += ribbon(pts, between(r, 0.8, 1.4), 0.8)
  }

  // "elf all my hair in knots": at each tangle, a few strands crossing and
  // looping back on one another, cut in paper, so the hair reads as matted
  // there, and never as a ring, a star or a pin.
  let knots = ''
  for (const [x, y] of TANGLES) {
    knots += gouge(x - 12, y - 4, x + 10, y + 9, between(r, 1, 1.3), 4.6)
    knots += gouge(x + 9, y - 10, x - 10, y + 10, between(r, 1, 1.3), -4)
  }

  // "my face I'll grime with filth": smudges of fine ink lines, all laid one
  // way, on the brow, the cheekbone and the jaw.
  let grime = ''
  const smudge = (cx: number, cy: number, w: number, h: number, k: number) => {
    for (let i = 0; i < k; i++) {
      const t = (i + 0.5) / k
      const x = cx - w / 2 + t * w
      const len = h * Math.sin(Math.PI * t) * between(r, 0.7, 1)
      grime += `M${n(x)} ${n(cy - len / 2)}l${n(len * 0.36)} ${n(len)}`
    }
  }
  smudge(147, 72, 20, 12, 7)
  smudge(148, 122, 18, 16, 7)
  smudge(124, 132, 14, 14, 5)
  smudge(152, 168, 18, 12, 6)

  const nape = napeShade(7502, 150, 118, 72, 120)

  // The blanket: its rents and folds cut in paper, and the weave at its edge.
  const blanket =
    gouge(30, 260, 22, 340, 1.8, 2) +
    gouge(52, 300, 46, 420, 1.6, 1.4) +
    gouge(86, 290, 78, 360, 1.3, -1.2) +
    gouge(178, 384, 190, 432, 1.5, -1) +
    gouge(110, 392, 106, 432, 1.4, 0.8) +
    gouge(160, 334, 196, 362, 1.1, -1.2) +
    gouge(118, 300, 150, 318, 1, -1) +
    // the frayed edge across his chest: short cuts standing in from the edge
    [
      [92, 244],
      [104, 252],
      [118, 262],
      [132, 274],
      [146, 288],
      [158, 300],
      [170, 314],
      [182, 328],
      [194, 342],
      [204, 356],
    ]
      .map(([x, y]) => gouge(x, y, x - 5, y + 9, 1, 0.4))
      .join('')

  // The light on his bare shoulder, arm and chest: the shadow on the side
  // turned from the light, cut as ink lines on the paper skin.
  let skin = ''
  // the chest beside the arm, turned from the light: rows of short ink lines
  for (let i = 0; i < 9; i++) {
    const y = 268 + i * 7
    skin += `M${n(150 + i * 0.6)} ${n(y)}L${n(162 + i * 1.6)} ${n(y + 3)}`
  }
  // the collarbone, and the line of the chest
  skin += 'M134 236Q154 244 176 246M168 268Q182 280 188 296'

  // The rope: a cord round the waist with the twist of its strands cut in ink.
  const rope = `M14 ${n(ROPE_Y(14))}L214 ${n(ROPE_Y(214))}`
  let ropeTwist = ''
  for (let x = 18; x < 212; x += 5) ropeTwist += `M${n(x)} ${n(ROPE_Y(x) - 3)}l3 6`
  const ropeEnds =
    'M196 378C198 392 194 406 198 424M204 378C208 394 210 410 208 426' +
    `M192 ${n(ROPE_Y(192) + 2)}a6 5 0 1 0 12 0a6 5 0 1 0 -12 0Z`
  return { hair, knots, grime, nape, blanket, skin, rope, ropeTwist, ropeEnds }
})

/** Edgar as Poor Tom, to the waist, facing right in the 0..240 by 0..436 frame. */
export function EdgarFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-edg-head`
  const hairClip = `${uid}-edg-hair`
  const blanketClip = `${uid}-edg-blanket`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={YOUTH_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={blanketClip}>
          <path d={BLANKET} />
        </clipPath>
      </defs>
      {/* "presented nakedness": the bare shoulders and chest */}
      <path d={TORSO} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.skin} fill="none" stroke={INK} strokeWidth={LINE.hairline} strokeLinecap="round" />
      {/* the blanket over the far shoulder, across the chest and round him */}
      <path d={BLANKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${blanketClip})`}>
        <path d={m.blanket} fill={PAPER} />
      </g>
      {/* the rope round his waist */}
      <path d={m.rope} fill="none" stroke={INK} strokeWidth={8} strokeLinecap="round" />
      <path d={m.rope} fill="none" stroke={PAPER} strokeWidth={5} strokeLinecap="round" />
      <path d={m.ropeTwist} fill="none" stroke={INK} strokeWidth={1} />
      <path d={m.ropeEnds} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      {/* the near arm, bare, hanging at his side */}
      <path d={ARM} fill={PAPER} stroke={INK} strokeWidth={LINE.carve} />
      <path
        d="M116 296Q118 326 124 350M126 362Q132 394 140 430M146 262Q140 268 132 266"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      {/* his own young face, steady, smudged with dirt */}
      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={YOUTH_JAW} strokeWidth={1.6} />
        <path d={m.grime} strokeWidth={0.8} />
      </g>
      <YouthNoseAndMouth />
      <YouthEye look="open" brow={2.6} />
      {/* "elf all my hair in knots" */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.knots} fill={PAPER} />
      </g>
      <path d={YOUTH_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={YOUTH_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
    </g>
  )
}

/** A thick ink halo round head, hair, body and arm. */
function EdgarKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={TORSO} />
      <path d={BLANKET} />
      <path d={ARM} />
      <path d={YOUTH_HEAD} />
      <path d={HAIR} />
    </g>
  )
}

const P = placing(82, 4, 0.72)

const ground = once(() =>
  // The open country, the light ahead of him.
  portraitGround('lear-edgar', 7510, (x, y) =>
    clamp(0.12 + ((x - 50) / 270) * 0.82 - (y / PH) * 0.1),
  ),
)

function EdgarPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <EdgarKnockout />
        <EdgarFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const edgarPortrait: LinocutArt = { width: PW, height: PH, Draw: EdgarPortrait }

const GRIME_AT = P.to(132, 112)
const BLANKET_AT = P.to(208, 392)
const KNOT_AT = P.to(46, 154)
const SHOULDER_AT = P.to(148, 262)

export const edgar: Portrait = {
  name: 'Edgar',
  art: edgarPortrait,
  alt: 'A linocut portrait of Edgar disguised as Poor Tom, to the waist, in profile, facing right: a young man with a steady, open eye and a closed mouth, his face smudged with dirt on the brow, the cheek and the jaw. His dark hair hangs to his shoulders, matted into tangled tufts with knots in it. His near shoulder and arm are bare. A ragged dark blanket hangs over his far shoulder and down his back, crosses his chest to his waist, and is wrapped round him below, tied with a rope knotted in front. Four numbered red markers point to his cheek, the blanket at his waist, a knot in his hair and his bare shoulder.',
  describedBy: [
    { phrase: 'my face I’ll grime with filth', at: GRIME_AT },
    { phrase: 'Blanket my loins', at: [BLANKET_AT[0] + 40, BLANKET_AT[1]], to: BLANKET_AT },
    { phrase: 'elf all my hair in knots', at: [KNOT_AT[0] - 46, KNOT_AT[1]], to: KNOT_AT },
    { phrase: 'presented nakedness', at: [SHOULDER_AT[0] + 72, SHOULDER_AT[1]], to: SHOULDER_AT },
  ],
  where: 'Act 2, Scene 3',
  passage:
    'While I may scape I will preserve myself: and am bethought To take the basest and most poorest shape That ever penury in contempt of man, Brought near to beast: my face I’ll grime with filth, Blanket my loins; elf all my hair in knots, And with presented nakedness outface The winds and persecutions of the sky.',
  note: 'Outlawed by his father, Edgar hides as the lowest thing he can think of, a Bedlam beggar. The madness is a disguise: behind it he leads his blinded father and saves him from despair.',
  artNote:
    'His madness is an act, so his face is drawn steady and his own. The blanket that keeps him covered is the Fool’s word as well as his: “he reserv’d a blanket”.',
}

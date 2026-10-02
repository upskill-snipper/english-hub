import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  hatch,
  lerp2,
  locks,
  MAN_HEAD,
  ManNoseAndMouth,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
} from './common'

/**
 * The Ghost of Hamlet's father, as Horatio describes him to Hamlet in Act 1,
 * Scene 2, answering his questions one by one:
 *
 *   HORATIO: "A figure like your father, Armed at point exactly, cap-à-pie"
 *   HAMLET: "Then saw you not his face?"
 *   HORATIO: "O yes, my lord, he wore his beaver up."
 *   HAMLET: "What, look'd he frowningly?"
 *   HORATIO: "A countenance more in sorrow than in anger."
 *   HAMLET: "Pale, or red?"
 *   HORATIO: "Nay, very pale."
 *   HAMLET: "His beard was grizzled, no?"
 *   HORATIO: "It was, as I have seen it in his life, A sable silver'd."
 *
 * So: a king in plate armour from head to foot ("cap-à-pie"), the helmet on
 * and the beaver, the face-guard, raised above the brow so that his face shows
 * under it; the face pale, the brow drawn up towards the nose in sorrow, not
 * knitted in anger; a full beard, black shot with silver. In the closet scene
 * Hamlet sees him "in his habit as he liv'd" (Act 3, Scene 4): a living man's
 * dress, so he is never a skeleton, never a shroud, never hurt.
 *
 * "Nay, very pale": the whole figure is cut in paper, the armour as well as
 * the face, its plates told apart by ink rims and rivets and their curve by
 * hatching, so that he is the lightest thing in the block, and a thick ink
 * halo stands him off the faint glow behind him. The black of the beard is
 * the one dark mass on him; the silver is paper strands through it. There is
 * no red in this plate: Hamlet asks "Pale, or red?" and is told pale.
 *
 * His head is every man's head (MAN_HEAD); the helmet, the beaver, the
 * gorget at the throat, the pauldron over the shoulder and the breastplate
 * are a king's field armour of about 1600, drawn plainly. Nothing comes from
 * a film, television or stage production.
 *
 * Seeds: 7102 to 7105 (the figure's marks), 7110 (the ground).
 */

// ── The armour, in the head's own 0..240 by 0..332 frame ────────────────────

/** The bowl of the helmet over the skull, its brim above the brow, its tail over the nape. */
const SKULL = spline([
  [173, 77, 1],
  [171, 60],
  [163, 40],
  [143, 22],
  [112, 13],
  [80, 16],
  [54, 30],
  [36, 54],
  [27, 86],
  [26, 120],
  [30, 152],
  [36, 176],
  [26, 196, 1],
  [52, 203],
  [80, 197],
  [100, 190, 1],
  [104, 160],
  [110, 130],
  [116, 108],
  [126, 94],
  [146, 84],
])
/** The rolled brim of the bowl over the brow, and the roll above the tail. */
const ROLLS = 'M124 92Q146 80 171 75.6M30 180Q34 190 28 194'
/** The low comb along the crown of the bowl, raised from it as one ridge of steel. */
const COMB = spline([
  [148, 28, 1],
  [130, 13],
  [104, 6],
  [74, 9],
  [50, 21],
  [36, 36, 1],
  [52, 29],
  [78, 18],
  [104, 15],
  [130, 21],
])
/** The light along the comb's ridge, and the twists cut where it meets the bowl. */
const ROPE =
  'M46 27Q80 10 128 17' +
  [52, 66, 80, 94, 108, 122]
    .map((x) => {
      const foot = 22 - Math.sin(((x - 36) / 112) * Math.PI) * 8
      return `M${n(x - 2)} ${n(foot + 1)}L${n(x + 2)} ${n(foot - 4)}`
    })
    .join('')
/**
 * The cheek-piece, hinged at the temple and covering the ear down to the jaw,
 * its front edge leaving the face open from the brow to the chin.
 */
const CHEEK_PIECE = spline([
  [128, 92, 1],
  [121, 112],
  [118, 134],
  [115, 156],
  [109, 176],
  [98, 192, 1],
  [78, 198],
  [60, 192],
  [58, 162],
  [64, 128],
  [80, 104],
  [104, 92],
])
/** The cheek-piece's rolled front edge, a second line inside it. */
const CHEEK_ROLL = 'M122 98Q115 116 112.4 136Q110 158 103 178'
/**
 * "he wore his beaver up": the beaver, the face-guard, turned up on its pivot
 * at the temple and standing out over the front of the bowl, its sharp prow
 * pointing up and forward above the brow, the slits he would see through cut
 * across it. The ink wedge under its front is the gap where it stands off
 * the bowl, so it reads as a guard lifted, not as the brim of a cap.
 */
const BEAVER = spline([
  [104, 86, 1],
  [110, 62],
  [126, 42],
  [150, 28],
  [176, 22],
  [204, 26, 1],
  [190, 36],
  [178, 48],
  [170, 60, 1],
  [154, 58],
  [136, 64],
  [118, 76],
])
const BEAVER_GAP = 'M152 57.6L170 60L176 50Q164 50 152 57.6Z'
const BEAVER_SLITS = 'M140 49Q160 38 184 34M146 56Q160 49 174 46'
const BEAVER_EDGE = 'M112 70Q130 46 160 34Q182 27 200 27'
const BREATHS: Pt[] = [
  [124, 66],
  [130, 61],
  [118, 72],
]
const PIVOT: Pt = [108, 84]

/** The gorget: three plates round the throat, under the beard, down to the shoulders. */
const GORGET = [
  spline([
    [64, 194, 1],
    [100, 192],
    [134, 200],
    [148, 206, 1],
    [152, 218, 1],
    [124, 213],
    [94, 211],
    [60, 210, 1],
  ]),
  spline([
    [56, 208, 1],
    [96, 208],
    [130, 212],
    [156, 218, 1],
    [162, 231, 1],
    [126, 226],
    [92, 225],
    [50, 226, 1],
  ]),
  spline([
    [46, 224, 1],
    [92, 222],
    [130, 225],
    [166, 230, 1],
    [174, 245, 1],
    [130, 240],
    [90, 241],
    [40, 246, 1],
  ]),
]
const GORGET_RIVETS: Pt[] = [
  [70, 202],
  [140, 211],
  [64, 217],
  [146, 224],
  [58, 233],
  [154, 238],
]

/** The breastplate and backplate: the body the shoulders stand on. */
const BODY = spline([
  [-10, 336, 1],
  [-6, 298],
  [8, 266],
  [36, 242],
  [72, 232],
  [112, 234],
  [150, 230],
  [184, 240],
  [208, 262],
  [224, 296],
  [232, 336, 1],
])
/** The ridge down the middle of the breastplate, and the plate's edge at the arm. */
const TAPUL = 'M176 244Q194 284 202 336'
const ARM_EDGE = 'M138 278Q156 304 162 336'
/** The pauldron, the great plate over the near shoulder. */
const PAULDRON = spline([
  [14, 300, 1],
  [12, 268],
  [30, 244],
  [62, 230],
  [100, 232],
  [128, 246],
  [142, 272],
  [138, 300, 1],
  [100, 308],
  [56, 308],
])
/** The lames under it, each its own band, and the rivets that hold them. */
const LAMES = [
  spline([
    [16, 298, 1],
    [60, 306],
    [100, 306],
    [138, 298, 1],
    [136, 312, 1],
    [100, 320],
    [60, 320],
    [18, 312, 1],
  ]),
  spline([
    [20, 312, 1],
    [60, 320],
    [100, 320],
    [134, 312, 1],
    [132, 326, 1],
    [100, 334],
    [60, 334],
    [22, 326, 1],
  ]),
]
const PAULDRON_RIVETS: Pt[] = [
  [26, 304],
  [128, 304],
  [30, 318],
  [124, 318],
]

// ── The face ─────────────────────────────────────────────────────────────────

/** "A sable silver'd": the full beard, from under the cheek-piece round the chin. */
const BEARD = spline([
  [117, 140, 1],
  [128, 147],
  [140, 152],
  [152, 156],
  [163, 158],
  [178, 158, 1],
  [179, 172],
  [176, 190],
  [169, 206],
  [158, 222, 1],
  [146, 214],
  [132, 202],
  [120, 184],
  [115, 160],
])
/** The moustache, from under the nose down over the corner of the mouth. */
const MOUSTACHE = spline([
  [169, 136.5, 1],
  [175, 141],
  [177, 147],
  [174.5, 152, 1],
  [167, 151.5],
  [159, 154.5],
  [150, 158, 1],
  [154, 150],
  [161, 142],
])
/** The lower lip, a sliver of paper between the moustache and the beard. */
const LIP = gouge(164, 156, 177, 157.2, 1.2, 0.7)

/**
 * The brow drawn up towards the nose, over an eye open and still: sorrow,
 * "more in sorrow than in anger", not the knitted brow of a frown.
 */
const SORROW_BROW = 'M141.5 92Q150.5 91 157.5 87.8Q161.8 85.6 166 81.6'
const UPPER_LID = 'M146 98.8Q154 95.6 162.4 98.8'
const LOWER_LID = 'M147.6 104.4Q154.6 106.8 161 103.4'
/** The bag under the eye. */
const UNDER_EYE = 'M147 110Q154 113.2 160.6 110.4'

type Marks = {
  skullShade: string
  skullRivets: Pt[]
  cheekShade: string
  cheek: string
  beard: string
  silver: string
  moustache: string
  body: string
  pauldron: string
}

const marks = once((): Marks => {
  const r = rng(7102)
  // The bowl's round, away from the light: broken arcs at its back.
  let skullShade = ''
  for (let rad = 70; rad < 94; rad += 4.2)
    skullShade += arcDashes(r, 104, 112, rad, deg(150), deg(250), [10, 26], [3, 7])
  const skullRivets: Pt[] = [
    [156, 79],
    [138, 85],
    [52, 190],
    [38, 168],
  ]
  // The cheek-piece curving round the jaw: fine rows along its back edge.
  const cheekShade = hatch(r, lerp2([66, 128], [64, 184]), lerp2([82, 118], [96, 186]), 10, 0.6)
  // "very pale", and worn: the hollow under the cheekbone, as Scrooge's.
  let cheek = ''
  for (let rad = 12; rad < 30; rad += 3.4)
    cheek += arcDashes(r, 142, 112, rad, deg(62), deg(140), [8, 22], [1.5, 4])
  // The beard: ink, its locks falling from the jaw to the point, with
  // "silver" cut through it in paper.
  const beard = locks(
    7103,
    14,
    (t) => [120 + t * 54, 152 + t * 6],
    (t) => [126 + t * 36, 192 + t * 24],
    [0.7, 1.2],
    2,
    1.2,
  )
  const silver = locks(
    7104,
    10,
    (t) => [124 + t * 48, 154 + t * 5],
    (t) => [130 + t * 30, 194 + t * 20],
    [1, 1.5],
    1.5,
    1.4,
  )
  const moustache = locks(
    7105,
    4,
    (t) => [168 + t * 6, 140 + t * 6],
    (t) => [154 + t * 12, 155 - t * 2],
    [0.7, 1],
    1,
  )
  // Plate armour cut as light: broken contours, in ink, only where the plates
  // turn away from it, following the plate round as a gouge would.
  let body = ''
  for (let k = 0; k < 4; k++)
    body += arcDashes(r, 120 - k * 5, 380, 118 + k * 5, deg(-52), deg(-24), [10, 24], [4, 9])
  for (let k = 0; k < 3; k++)
    body += arcDashes(r, 86, 360, 74 + k * 5, deg(-46), deg(-22), [8, 18], [4, 8])
  let pauldron = ''
  for (let rad = 40; rad < 70; rad += 4.4)
    pauldron += arcDashes(r, 80, 300, rad, deg(188), deg(256), [10, 22], [3, 6])
  return {
    skullShade,
    skullRivets,
    cheekShade,
    cheek,
    beard,
    silver,
    moustache,
    body,
    pauldron,
  }
})

/** The Ghost, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function GhostFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-ghost`
  const plate = {
    fill: PAPER,
    stroke: INK,
    strokeWidth: 1.8,
    strokeLinejoin: 'round' as const,
  }
  return (
    <g>
      <defs>
        <clipPath id={`${id}-skull`}>
          <path d={SKULL} />
        </clipPath>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-beard`}>
          <path d={BEARD} />
        </clipPath>
        <clipPath id={`${id}-moustache`}>
          <path d={MOUSTACHE} />
        </clipPath>
        <clipPath id={`${id}-body`}>
          <path d={BODY} />
        </clipPath>
        <clipPath id={`${id}-pauldron`}>
          <path d={PAULDRON} />
        </clipPath>
        <clipPath id={`${id}-cheek`}>
          <path d={CHEEK_PIECE} />
        </clipPath>
      </defs>

      {/* "Armed at point exactly": the breastplate, all in paper */}
      <path d={BODY} {...plate} />
      <g clipPath={`url(#${id}-body)`}>
        <path d={m.body} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
        <path d={TAPUL} fill="none" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
        <path d={ARM_EDGE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
      </g>

      {/* the face, pale, under the raised beaver */}
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${id}-head)`}>
        <path d={m.cheek} fill="none" stroke={INK} strokeWidth={0.95} strokeLinecap="round" />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={SORROW_BROW} strokeWidth={2.8} />
        <path d={UPPER_LID} strokeWidth={2.3} />
        <path d={LOWER_LID} strokeWidth={1.1} />
        <path d={UNDER_EYE} strokeWidth={LINE.hairline} />
      </g>
      <circle cx={155.4} cy={100.8} r={2.6} fill={INK} />
      <ManNoseAndMouth />

      {/* the gorget at the throat */}
      {GORGET.slice()
        .reverse()
        .map((d) => (
          <path key={d} d={d} {...plate} strokeWidth={1.5} />
        ))}
      <g fill={INK}>
        {GORGET_RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.7} />
        ))}
      </g>

      {/* "A sable silver'd": black shot with silver */}
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-beard)`}>
        <path d={m.beard} fill={INK} />
        <path d={m.silver} fill={PAPER} />
      </g>
      <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-moustache)`}>
        <path d={m.moustache} fill={PAPER} />
      </g>
      <path d={LIP} fill={PAPER} />

      {/* the helmet: the bowl, the cheek-piece and the roped comb */}
      <path d={SKULL} {...plate} />
      <g clipPath={`url(#${id}-skull)`}>
        <path d={m.skullShade} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <path d={ROLLS} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <path d={CHEEK_PIECE} {...plate} />
      <g clipPath={`url(#${id}-cheek)`}>
        <path d={m.cheekShade} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <path d={CHEEK_ROLL} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <path d={COMB} {...plate} strokeWidth={1.5} />
      <path d={ROPE} fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <g fill={INK}>
        {m.skullRivets.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={2} />
        ))}
      </g>

      {/* "he wore his beaver up" */}
      <path d={BEAVER_GAP} fill={INK} />
      <path d={BEAVER} {...plate} />
      <path d={BEAVER_EDGE} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={BEAVER_SLITS} fill="none" stroke={INK} strokeWidth={3.2} strokeLinecap="round" />
      <g fill={INK}>
        {BREATHS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.7} />
        ))}
      </g>
      <circle cx={PIVOT[0]} cy={PIVOT[1]} r={5} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <circle cx={PIVOT[0]} cy={PIVOT[1]} r={1.8} fill={INK} />

      {/* the pauldron over the near shoulder, and its lames */}
      {LAMES.slice()
        .reverse()
        .map((d) => (
          <path key={d} d={d} {...plate} strokeWidth={1.5} />
        ))}
      <path d={PAULDRON} {...plate} />
      <g clipPath={`url(#${id}-pauldron)`}>
        <path d={m.pauldron} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <g fill={INK}>
        {PAULDRON_RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.8} />
        ))}
      </g>
    </g>
  )
}

/** A thick ink halo round the whole figure, to stand the pale armour off the glow. */
function GhostKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={11} strokeLinejoin="round">
      <path d={SKULL} />
      <path d={BEAVER} />
      <path d={COMB} />
      <path d={MAN_HEAD} />
      <path d={BEARD} />
      <path d={BODY} />
      <path d={PAULDRON} />
    </g>
  )
}

const P = placing(44, 14, 0.9)

/** A cold glow round him, faint, brightest about his head, the night dark at the edges. */
const ground = once(() => {
  const [hx, hy] = P.to(120, 110)
  return portraitGround('hamlet-ghost', 7110, (x, y) =>
    clamp(0.05 + 0.9 * clamp(1 - Math.hypot(x - hx, (y - hy) * 0.8) / 210) ** 1.5),
  )
})

function GhostPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <GhostKnockout />
        <GhostFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const ghostPortrait: LinocutArt = { width: PW, height: PH, Draw: GhostPortrait }

const BEAVER_AT = P.to(203, 27)
const FACE_AT = P.to(139, 126)
const BEARD_AT = P.to(140, 200)
const PAULDRON_AT = P.to(56, 262)

export const theGhost: Portrait = {
  name: 'The Ghost',
  art: ghostPortrait,
  alt: "A linocut portrait of the Ghost of Hamlet's father in profile, facing right, cut almost entirely in pale paper against a dark night with a faint glow round him. He wears plate armour: a helmet with a roped comb and a cheek-piece over the ear, its face-guard raised on its pivot so that it stands up over his brow like a beak, a gorget of three plates at his throat, a rounded plate over his shoulder and a breastplate. His face is pale and worn, his brow drawn up in sorrow. He has a full dark beard and moustache, streaked with silver. Four numbered red markers point to his armour, the raised face-guard, his face and his beard.",
  describedBy: [
    { phrase: 'Armed at point exactly, cap-à-pie', at: [32, 228], to: PAULDRON_AT },
    { phrase: 'he wore his beaver up', at: [BEAVER_AT[0] + 52, BEAVER_AT[1]], to: BEAVER_AT },
    { phrase: 'A countenance more in sorrow than in anger', at: FACE_AT },
    { phrase: "A sable silver'd", at: BEARD_AT },
  ],
  where: 'Act 1, Scene 2',
  note: 'Hamlet questions Horatio point by point: armed, the face, its look, its colour, the beard. Each answer makes the apparition more surely his father, and Hamlet resolves to watch that night himself.',
  artNote:
    'Horatio says the face was very pale, so the print cuts all of him in paper, armour and all, and keeps red out of the plate. The beaver is the face-guard of the helmet, raised so that the face shows.',
}

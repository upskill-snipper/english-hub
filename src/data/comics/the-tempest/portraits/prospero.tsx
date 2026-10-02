import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  bandAlong,
  folds,
  Hand,
  locks,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
  neckShade,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quadPts,
  spline,
  turn,
  type Digit,
} from './common'

/**
 * Prospero, from his own words, and only those:
 *
 *   "pluck my magic garment from me" (Act 1, Scene 2); "Bear with my
 *   weakness; my old brain is troubled" (Act 4, Scene 1); "I'll break my
 *   staff, Bury it certain fathoms in the earth, And deeper than did ever
 *   plummet sound I'll drown my book" (Act 5, Scene 1).
 *
 * So: an old man, to the waist, his head bowed a little and his eye lowered
 * to the book he holds, in his magic mantle, his staff upright in his hand.
 * The play never describes his face, and gives him no beard.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): bald on
 * the crown, with a fringe of white hair at the level of the ear from the
 * temple round the back of the head to the nape, its lower edge tufted; a
 * white brow; the lines of age on the forehead, at the eye and in the
 * hollow of the cheek; and no beard, so he is never taken for Gonzalo. His
 * mantle is the kit's: dark, with the band of its border cut in paper and a
 * row of ink lozenges in it, here running down its front edge from the clasp
 * at his throat, so it is known as the garment he lays down in Act 1, Scene
 * 2 and wears again "in his magic robes" in Act 5. His staff is the kit's
 * plain staff with a knob for a head, and his hand is closed round it, as
 * the kit's grip only ever closes round something held. The book is a plain
 * clasped volume: the play names his books ("Knowing I lov'd my books",
 * Act 1, Scene 2) but not what they look like. His head is every man's head
 * (MAN_HEAD). There is no red in this plate.
 *
 * Drawn to the waist, a little smaller in the block than a head and
 * shoulders, so the staff and the book are in the picture.
 *
 * Seeds: 6101 (the figure), 6102 to 6106 (its marks), 6110 (the ground).
 */

/** His head is bowed a little over the book. */
const ROT = 5

/**
 * The white hair: the crown left bare, the fringe at the level of the ear
 * from the temple round the back of the head to the nape, its lower edge
 * broken into tufts. In the head's own frame (MAN_HEAD).
 */
const HAIR = spline([
  [133, 88, 1],
  [117, 81],
  [96, 79],
  [74, 83],
  [57, 93],
  [46, 111],
  [41, 133],
  [43, 156],
  [49, 175],
  [57, 189],
  [65, 184],
  [72, 190],
  [80, 181],
  [87, 184],
  [93, 170],
  [96, 150],
  [96, 128],
  [102, 108],
  [114, 100, 1],
  [121, 108, 1],
  [125, 96, 1],
])

/** The mantle over his shoulders and gown, to below the waist. */
const BODY = spline([
  [-14, 420, 1],
  [-12, 330],
  [-4, 282],
  [18, 248],
  [52, 226],
  [92, 218],
  [132, 222],
  [166, 230],
  [198, 252],
  [220, 290],
  [232, 342],
  [238, 420, 1],
])
/** The rolled collar of the mantle round the foot of his neck. */
const COLLAR = spline([
  [56, 232, 1],
  [80, 216],
  [110, 211],
  [138, 216],
  [158, 228, 1],
  [152, 242],
  [122, 237],
  [92, 239],
  [62, 248, 1],
])
const CLASP: Pt = [154, 240]

/** The front edge of the mantle, falling from the clasp: the line its border follows. */
const EDGE = quadPts([154, 246], [166, 320], [174, 424], 14)
/** The border: a band cut in paper along the edge. */
const BORDER = bandAlong(EDGE, 13)
/** The ink lozenges in the border, as the kit cuts them along the hem. */
const LOZENGES = EDGE.slice(1, -1)
  .filter((_, i) => i % 2 === 0)
  .map(
    ([x, y]) =>
      `M${n(x - 3.6)} ${n(y)}L${n(x)} ${n(y - 4.4)}L${n(x + 3.6)} ${n(y)}L${n(x)} ${n(y + 4.4)}Z`,
  )
  .join('')

/** His near forearm in the wide sleeve of his gown, across his waist to the staff. */
const SLEEVE = spline([
  [70, 372, 1],
  [82, 340],
  [114, 322],
  [154, 314],
  [194, 314, 1],
  [198, 346, 1],
  [158, 352],
  [118, 362],
  [88, 384, 1],
])
const CUFF = spline([
  [190, 312, 1],
  [204, 314, 1],
  [206, 346, 1],
  [194, 347, 1],
])

/** The staff, from its foot below the block to its knob, a little off upright. */
const STAFF_FOOT: Pt = [230, 424]
const STAFF_TOP: Pt = [218, 40]
const STAFF = bandAlong([STAFF_FOOT, STAFF_TOP], 12)
const KNOB = `M${STAFF_TOP[0] - 8.5} ${STAFF_TOP[1] - 2}a8.5 10.5 0 1 0 17 0a8.5 10.5 0 1 0 -17 0Z`

/**
 * The book, held against his side on his forearm, its cover towards us: a
 * plain clasped volume, its tooled border cut in paper.
 */
const BOOK = 'M88 254L132 250L137 318L93 322Z'
const BOOK_TOOLING = 'M95.4 261L125.4 258.4L129.6 310.6L99.6 313.4Z'
/** The edge of the pages beyond the cover, cut in paper with the leaves in ink. */
const BOOK_PAGES = 'M132 250L139.6 252.6L143.6 316.4L137 318Z'
const BOOK_LEAVES =
  'M134.4 259L141 260.4M135 268L141.6 269.2M135.6 277L142.2 278M136.2 286L142.8 286.8' +
  'M136.8 295L143.4 295.6M137.4 304L144 304.4'
const BOOK_CLASPS =
  'M128 266L141.4 264.8L141.8 270.8L128.4 272ZM130.6 298L143.6 296.8L144 302.8L131 304Z'
const BOOK_BOSS = 'M112.6 274L118 285.6L113.4 298L108 286.4Z'

// The hand closed round the staff: the back of the hand towards us, the
// four fingers wrapped across the staff, the thumb over the first of them.
const HAND_AT: Pt = [204, 330]
const PALM = spline([
  [-2, -13],
  [8, -16],
  [17, -13],
  [19, 0],
  [17, 14],
  [7, 17],
  [-2, 13],
])
const DIGITS: Digit[] = [
  { from: [12, 13], to: [31, 13.5], w: 7.2 },
  { from: [12, 5.5], to: [33, 6], w: 7.6 },
  { from: [12, -2], to: [33.5, -2], w: 7.6 },
  { from: [12, -9.5], to: [32, -10], w: 7.4 },
  { from: [3, -12], to: [22, -19], w: 8.2 },
]
const KNUCKLES = 'M14 -12.5L14 15'

type Marks = {
  hair: string
  crown: string
  brows: string
  lines: string
  cheek: string
  neck: string
  body: string
  collar: string
  sleeve: string
  staff: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // White hair, combed back and down from the temple to the nape: fine ink
  // locks on paper, fewer than a grey head's, so it reads as white.
  const hair = locks(
    seed + 1,
    20,
    (t) => [130 - t * 84, 86 + t * 24],
    (t) => [118 - t * 58, 104 + t * 84],
    [0.7, 1.1],
    -7,
  )

  // The bare crown's roundness: shallow arcs of ink at the back of it.
  let crown = ''
  for (let rad = 58; rad < 76; rad += 4.5)
    crown += arcDashes(r, 110, 118, rad, deg(214), deg(262), [8, 20], [3, 6])

  // A white brow: short strokes of fine ink, no solid bar.
  let brows = ''
  for (let i = 0; i < 12; i++) {
    const x = 143 + i * 1.9 + between(r, -0.5, 0.5)
    const y = 89 + between(r, -0.6, 0.6) - Math.sin((i / 11) * Math.PI) * 1.6
    brows += `M${n(x)} ${n(y)}l${n(between(r, 2.4, 4))} ${n(between(r, -2.6, -0.6))}`
  }

  // The lines of age: the forehead, the crow's feet, the corner of the mouth.
  let lines =
    'M140 58Q150 55 160 59M139 66Q149 63.5 162 68M142 74Q152 72 163 76' + 'M161 149Q157 155 160 162'
  for (let i = 0; i < 3; i++)
    lines += `M145 ${n(101 + i * 3)}L${n(136 - between(r, 0, 3))} ${n(98 + i * 4.5)}`

  // The hollow under the cheekbone, as the kit's line of age.
  let cheek = ''
  for (let rad = 14; rad < 28; rad += 3.6)
    cheek += arcDashes(r, 138, 112, rad, deg(58), deg(126), [10, 22], [1.5, 4])

  const neck = neckShade(seed + 2)
  const body = folds(seed + 3, [6, 130], [262, 290], 7)
  const collar = gouge(76, 222, 136, 221, 1.2, -2) + gouge(66, 236, 140, 232, 0.9, -1.5)
  const sleeve =
    gouge(92, 352, 150, 330, 1.3, -1.5) +
    gouge(100, 366, 166, 342, 1.1, -1) +
    gouge(120, 358, 180, 340, 0.9, -0.6)
  // The grain of the wood, cut along the staff.
  let staff = ''
  for (let i = 0; i < 5; i++) {
    const t0 = between(r, 0.05, 0.75)
    const t1 = t0 + between(r, 0.08, 0.2)
    const at = (t: number): Pt => [
      STAFF_FOOT[0] + (STAFF_TOP[0] - STAFF_FOOT[0]) * t + between(r, -2, 2),
      STAFF_FOOT[1] + (STAFF_TOP[1] - STAFF_FOOT[1]) * t,
    ]
    const a = at(t0)
    const b = at(t1)
    staff += gouge(a[0], a[1], b[0], b[1], 0.7)
  }

  const m = { hair, crown, brows, lines, cheek, neck, body, collar, sleeve, staff }
  marksBySeed.set(seed, m)
  return m
}

/** Prospero to the waist, with his staff and his book, facing right in the 0..240 by 0..420 frame. */
export function ProsperoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const headClip = `${uid}-pro-head-${seed}`
  const hairClip = `${uid}-pro-hair-${seed}`
  const bodyClip = `${uid}-pro-body-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={bodyClip}>
          <path d={BODY} />
        </clipPath>
      </defs>
      {/* the staff, behind the hand that holds it */}
      <path d={STAFF} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={KNOB} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.staff} fill={PAPER} />
      <path d={gouge(214, 34, 219, 26, 1.2, -0.6)} fill={PAPER} />

      {/* "my magic garment": the mantle, its border down its front edge */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${bodyClip})`}>
        <path d={m.body} fill={PAPER} />
        <path d={BORDER} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={LOZENGES} fill={INK} />
      </g>

      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.crown} strokeWidth={1} />
          <path d={m.lines} strokeWidth={LINE.hairline} />
          <path d={m.cheek} strokeWidth={0.9} />
          <path d={m.neck} strokeWidth={1.3} />
        </g>
        {/* "my old brain is troubled": the white fringe of an old man's hair */}
        <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={INK} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path d={m.brows} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
        <ManNoseAndMouth />
        <ManEye look="down" />
      </g>

      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.collar} fill={PAPER} />
      <circle
        cx={CLASP[0]}
        cy={CLASP[1]}
        r={6.4}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
      />
      <circle cx={CLASP[0]} cy={CLASP[1]} r={2} fill={INK} />

      {/* "I'll drown my book": the book on his forearm, against his side */}
      <path
        d={BOOK_PAGES}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path d={BOOK_LEAVES} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={BOOK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={BOOK_TOOLING} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={BOOK_BOSS} fill={PAPER} />
      <path d={BOOK_CLASPS} fill={PAPER} stroke={INK} strokeWidth={0.8} />

      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {/* "I'll break my staff": his hand closed round it */}
      <Hand
        transform={`translate(${HAND_AT[0]} ${HAND_AT[1]})`}
        palm={PALM}
        digits={DIGITS}
        lines={KNUCKLES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round head, hair, mantle and staff. */
export function ProsperoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={BODY} />
      <path d={STAFF} />
      <path d={KNOB} />
    </g>
  )
}

const P = placing(26, 0, 0.88)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Before his cell by day: the light ahead of him, on the staff and the book.
  ground = portraitGround('tempest-prospero', 6110, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  )
  return ground
}

function ProsperoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <ProsperoKnockout />
        <ProsperoFigure uid={uid} seed={6101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const prosperoPortrait: LinocutArt = { width: PW, height: PH, Draw: ProsperoPortrait }

const HAIR_AT = onTurnedHead(P, ROT, 64, 140)
const BORDER_AT = P.to(...EDGE[3])
const STAFF_AT = P.to(221, 190)
const BOOK_AT = P.to(110, 270)

export const prospero: Portrait = {
  name: 'Prospero',
  art: prosperoPortrait,
  alt: 'A linocut portrait of Prospero to the waist, in profile, facing right: an old man with no beard, his head bowed a little and his eye lowered. His crown is bald and lined, and a fringe of white hair runs from his temple round the back of his head to the nape, above a white brow and the lines of age at his eye and in his hollow cheek. He wears a dark mantle with a rolled collar, fastened at the throat with a round clasp, and down its front edge runs a white border set with a row of black lozenges. Against his side, on his forearm, he holds a closed book with clasps, its cover towards us, and his hand is closed round a tall plain staff with a knob at the top, standing upright in front of him. Four numbered red markers point to his white hair, the border of his mantle, the staff and the book.',
  describedBy: [
    { phrase: 'my old brain is troubled', at: [HAIR_AT[0] - 44, HAIR_AT[1] - 56], to: HAIR_AT },
    { phrase: 'my magic garment', at: [BORDER_AT[0] + 30, BORDER_AT[1] - 12], to: BORDER_AT },
    { phrase: 'I’ll break my staff', at: [STAFF_AT[0] + 56, STAFF_AT[1] - 30], to: STAFF_AT },
    { phrase: 'I’ll drown my book', at: [BOOK_AT[0] - 70, BOOK_AT[1] + 26], to: BOOK_AT },
  ],
  where: 'Act 1, Scene 2; Act 4, Scene 1; Act 5, Scene 1',
  note: 'Prospero names the tools of his power himself: the garment he lays aside to tell Miranda the past, and the staff and book he gives up in Act 5. When the masque breaks off he admits his age too, and asks Ferdinand to bear with him.',
  artNote:
    'The play gives him his age, a magic garment, a staff and books, but never describes his face. His bald crown, white fringe and plain clasped book are how the panels draw him, in the dress of the time.',
}

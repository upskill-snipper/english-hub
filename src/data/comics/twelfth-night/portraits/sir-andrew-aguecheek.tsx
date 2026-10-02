import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, n, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  ManEye,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
  turn,
  type SP,
} from './common'

/**
 * Sir Andrew Aguecheek, as Sir Toby describes him in Act 1, Scene 3:
 *
 *   SIR TOBY: "for here comes Sir Andrew Agueface."
 *   SIR ANDREW: "But it becomes me well enough, does't not?"
 *   SIR TOBY: "Then hadst thou had an excellent head of hair." ... "Past
 *   question; for thou seest it will not curl by nature." ... "Excellent, it
 *   hangs like flax on a distaff"
 *
 * So: straight hair that will not curl, hanging pale and lank like the
 * combed flax wound on a spinner's distaff, and a face Toby names for an
 * ague, the shaking fever that leaves a face thin and pale. The rest of the
 * line about the distaff is a bawdy joke, and is not quoted here.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): thin, long
 * in the face and the nose, the chin small (the kit's HEAD_ANDREW, here the
 * portraits' man's head with its nose drawn a little longer and its chin set
 * back, ANDREW_HEAD), his straight hair hanging to his shoulders, cut level
 * at the ends, the one head of hair in the play cut in PAPER, with an ink
 * edge and ink strands running straight down it (ANDREW_HAIR); and, a knight
 * with "three thousand ducats a year" (Act 1, Scene 3), the small ruff and
 * the buttoned doublet of a gentleman. He is drawn as a man, never a
 * caricature: the joke is in the words. There is no red in this plate.
 *
 * Seeds: 8901 (the figure), 8902 (its marks), 8910 (the ground).
 */

/** His head held up a little, the brow lifted: he is asking whether it becomes him. */
const ROT = -3

/**
 * Sir Andrew's head: the portraits' man's head (MAN_HEAD) with the nose drawn
 * a little longer and the chin small and set back, as the kit's HEAD_ANDREW
 * is longer in the face than its HEAD_MAN. Facing right, in the head's frame.
 */
const ANDREW_PTS: SP[] = [
  [64, 230],
  [57, 202],
  [49, 174],
  [43, 142],
  [44, 108],
  [55, 74],
  [78, 50],
  [110, 38],
  [140, 39],
  [158, 52],
  [165, 70],
  [168, 88],
  [164.5, 98, 1],
  [171.5, 112],
  [179.5, 126],
  [183, 134],
  [178, 138],
  [169.5, 139.5, 1],
  [171, 144.4],
  [173, 149],
  [170, 152.4, 1],
  [171.4, 156.6],
  [167.6, 161, 1],
  [168.6, 171],
  [165.6, 182],
  [155, 191],
  [142, 198],
  [135, 205],
  [131, 217],
  [132, 230],
]
const ANDREW_HEAD = spline(ANDREW_PTS)

/**
 * "it will not curl by nature ... it hangs like flax on a distaff": his
 * straight hair, from the brow over the crown and hanging to his shoulders,
 * cut level at the ends, covering the ear. In PAPER with an ink edge.
 */
const HAIR = spline([
  [159, 60, 1],
  [151, 36],
  [126, 22],
  [94, 19],
  [64, 27],
  [42, 45],
  [29, 74],
  [25, 112],
  [25, 162],
  [26, 210],
  [26, 244, 1],
  [58, 246],
  [92, 244],
  [120, 242, 1],
  [121, 204],
  [122, 164],
  [124, 132],
  [129, 106],
  [137, 86],
  [149, 70],
])
/** The hair's level-cut ends, at the shoulder: where the "distaff" marker points. */
const HAIR_ENDS: Pt = [92, 244]

/** His thin shoulders in the doublet. */
const BODY = spline([
  [0, 336, 1],
  [6, 300],
  [22, 268],
  [50, 244],
  [80, 230],
  [112, 234],
  [144, 228],
  [170, 240],
  [192, 264],
  [206, 298],
  [212, 336, 1],
])
const RUFF = ruffBand(74, 150, 206, 228, 6, 0.06)
const FRONT = 'M158 246Q174 284 186 336'
const BUTTONS: Pt[] = [
  [167, 264],
  [173, 279],
  [178, 294],
  [182.5, 309],
  [186.5, 324],
]

type Marks = { strands: string; body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // Ink strands running straight down the pale hair from the crown, and
  // over the crown from the brow: none of them curls.
  let strands = ''
  for (let i = 0; i < 15; i++) {
    const x = 32 + i * 6.2 + between(r, -1.2, 1.2)
    const top = 40 + Math.abs(x - 80) * 0.3 + between(r, 0, 10)
    strands += `M${n(x)} ${n(top)}L${n(x + between(r, -1, 1))} ${n(240 - between(r, 0, 6))}`
  }
  for (let i = 0; i < 6; i++) {
    const t = (i + 0.5) / 6
    const x0 = 150 - t * 30
    strands += `M${n(x0)} ${n(56 - t * 22)}Q${n(x0 - 20)} ${n(40 - t * 10)} ${n(x0 - 50)} ${n(48 - t * 6)}`
  }
  const body = folds(seed + 1, [40, 160], [262, 280], 5)
  const m = { strands, body }
  marksBySeed.set(seed, m)
  return m
}

/** Sir Andrew, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function AndrewFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-and-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRONT} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <Buttons pts={BUTTONS} r={2.6} />
      <g transform={turn(ROT)}>
        <path d={ANDREW_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-and-${seed}`} />
        {/* "Agueface": a long, thin face, the cheek hollow under the bone */}
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M175.5 131.5C171.5 129 171.5 123.5 177 122.5" strokeWidth={1.5} />
          <path d="M169.6 152.4L162.4 153" strokeWidth={1.6} />
          <path d="M167 128Q162 139 163.4 150" strokeWidth={1} />
          <path d="M150 116Q144 128 146 142M154 118Q149 128 150 138" strokeWidth={0.9} />
          <path d="M143.5 85.5Q153 79 165.5 84" strokeWidth={2.4} />
        </g>
        <ManEye look="open" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      {/* the pale straight hair, over the ruff at his shoulders */}
      <g transform={turn(ROT)}>
        <path d={HAIR} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
        <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.strands} fill="none" stroke={INK} strokeWidth={0.95} strokeLinecap="round" />
        </g>
      </g>
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function AndrewKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={ANDREW_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(52, 28, 0.86)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Olivia's house: the light ahead of him, to the right.
  ground = portraitGround('twelfth-night-sir-andrew', 8910, (x, y) =>
    clamp(0.08 + ((x - 40) / 280) * 0.84 - (y / PH) * 0.1),
  )
  return ground
}

function AndrewPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <AndrewKnockout />
        <AndrewFigure uid={uid} seed={8901} />
      </g>
      <PortraitRule />
    </>
  )
}

export const sirAndrewPortrait: LinocutArt = { width: PW, height: PH, Draw: AndrewPortrait }

const CROWN_AT = onTurnedHead(P, ROT, 74, 60)
const ENDS_AT = onTurnedHead(P, ROT, HAIR_ENDS[0] - 30, HAIR_ENDS[1] - 4)
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. The line to his cheek comes from behind
 * his head, across the pale hair, and stops in the hollow of the cheek,
 * well above the mouth. (It first came down from above his brow and passed
 * so close to the eye that the eye read as marked.)
 */
const CHEEK_AT = onTurnedHead(P, ROT, 146, 128)

export const sirAndrew: Portrait = {
  name: 'Sir Andrew Aguecheek',
  art: sirAndrewPortrait,
  alt: 'A linocut portrait of Sir Andrew Aguecheek in profile, facing right: a thin man with a long face, a long nose and a small chin, the cheek hollow under the bone, his brow lifted and his eye open. His straight pale hair, cut in white with dark strands running straight down it, hangs from the crown of his head over his ear to his shoulders, where it is cut level. He wears a small white ruff and a dark doublet with a row of pale buttons. Three numbered red markers point to his straight hair, its level ends at his shoulder and his cheek.',
  describedBy: [
    {
      phrase: 'it will not curl by nature',
      at: [CROWN_AT[0] - 44, CROWN_AT[1] - 30],
      to: CROWN_AT,
    },
    {
      phrase: 'it hangs like flax on a distaff',
      at: [ENDS_AT[0] - 22, ENDS_AT[1] + 40],
      to: ENDS_AT,
    },
    // On the cheek with no line, as the pilot's "shrivelled his cheek" sits on
    // Scrooge's: from behind the head the line crossed hair and face and read as
    // a cut. (Checked 2 October 2026.)
    { phrase: 'here comes Sir Andrew Agueface', at: CHEEK_AT },
  ],
  where: 'Act 1, Scene 3',
  note: 'Sir Andrew is a rich, foolish knight whom Sir Toby keeps in Illyria as a hopeless suitor to Olivia, so that he can spend his money. Toby teases him to his face, and Andrew, anxious to be admired, asks whether his hair becomes him.',
  artNote:
    'Flax is the pale fibre linen is spun from, combed straight and hung on a distaff for spinning, so his hair is cut pale and straight. The play says nothing else of his looks: his long, thin face is how the panels draw him, after the name Toby gives him, Agueface, a face pale and thin as if from a fever.',
}

import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  NeckShadow,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
} from './common'

/**
 * Bassanio, from what he says of himself and what Nerissa remembers of him:
 *
 *   BASSANIO: "How much I have disabled mine estate By something showing a
 *   more swelling port Than my faint means would grant continuance"
 *   (Act 1, Scene 1)
 *   NERISSA: "a Venetian, a scholar and a soldier, that came hither in
 *   company of the Marquis of Montferrat" and "He, of all the men that ever
 *   my foolish eyes look'd upon, was the best deserving a fair lady"
 *   (Act 1, Scene 2)
 *
 * So: a young gentleman, his chin up and his eye open, dressed a little
 * better than he can afford, in a doublet with a row of buttons down the
 * front and a small ruff; and a soldier, with the baldric of his rapier
 * across his breast. "A more swelling port" is the style he has lived in,
 * spending beyond his means; the doublet stands for it, and the card's small
 * print says so.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx):
 * bareheaded, clean-shaven, his dark hair swept back from the brow, in a
 * doublet and a short cloak with a rapier. His head is every man's head
 * (MAN_HEAD). There is no red in this plate.
 *
 * Seeds: 4301 (the figure), 4302 to 4304 (its marks), 4310 (the ground).
 */

/** Dark hair swept back from the brow over the crown to the nape. */
const HAIR = spline([
  [159, 62, 1],
  [150, 66],
  [133, 70],
  [119, 80],
  [112, 96, 1],
  [100, 100],
  [92, 110],
  [86, 126],
  [80, 146, 1],
  [68, 136],
  [56, 146, 1],
  [46, 126],
  [40, 100],
  [44, 70],
  [64, 42],
  [96, 28],
  [130, 27],
  [153, 38],
  [163, 52],
])

/** A young man's shoulders in a doublet. */
export const BASSANIO_BODY = spline([
  [-10, 336, 1],
  [-4, 296],
  [14, 262],
  [44, 234],
  [76, 220],
  [112, 226],
  [146, 220],
  [176, 232],
  [202, 258],
  [220, 294],
  [230, 336, 1],
])
/** The short cloak, over the far shoulder and falling behind. */
const CLOAK = spline([
  [-14, 336, 1],
  [-10, 290],
  [4, 252],
  [30, 222],
  [58, 202, 1],
  [80, 208],
  [90, 226, 1],
  [72, 262],
  [60, 300],
  [58, 336, 1],
])
/** The baldric: a strap from the near shoulder down across the breast to the hip. */
const BALDRIC = 'M152 223L174 231L126 336L100 336Z'
const RUFF = ruffBand(74, 152, 204, 226, 6, 0.06)
/** The buttons down the front of the doublet. */
const BUTTONS: Pt[] = [
  [184, 246],
  [189, 262],
  [194, 278],
  [198, 294],
  [202, 310],
  [205, 326],
]

type Marks = { hair: string; body: string; cloak: string; baldric: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Hair swept back from the brow: long paper strands on the ink, as the
  // kit cuts HAIR_CUTS, from the hairline back over the crown to the nape.
  const hair = locks(
    seed + 1,
    18,
    (t) => [158 - t * 44, 46 + t * 34],
    (t) => [70 - t * 20, 40 + t * 92],
    [0.9, 1.6],
    -9,
  )

  const body = folds(seed + 2, [100, 176], [256, 272], 4)
  const cloak = gouge(64, 214, 54, 334, 1.8, 1.4) + gouge(34, 244, 16, 330, 1.4, 1.8)
  // The stitching along the baldric's edges.
  let baldric = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    baldric += gouge(155 - t * 44, 236 + t * 94, 163 - t * 44, 238 + t * 94, 0.6 + r() * 0.2)
  }

  const m = { hair, body, cloak, baldric }
  marksBySeed.set(seed, m)
  return m
}

/** The head is up a little: a young man who expects to be welcome. */
const LIFT = 'rotate(-4 112 214)'

/** Bassanio, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function BassanioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-bas-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={BASSANIO_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.8} />
      <path d={BALDRIC} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={m.baldric} fill={INK} />
      <g transform={LIFT}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-bas-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <ManNoseAndMouth />
        <ManBrow w={2.8} />
        {/* "the best deserving a fair lady": the eye open and clear */}
        <ManEye look="open" />
      </g>
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.cloak} fill={PAPER} />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hair, cloak and shoulders. */
export function BassanioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={LIFT}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={BASSANIO_BODY} />
      <path d={CLOAK} />
    </g>
  )
}

const P = placing(36, 14, 0.94)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Venice by day, the light ahead of him.
  ground = portraitGround('bassanio', 4310, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.9 - (y / PH) * 0.1),
  )
  return ground
}

function BassanioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <BassanioKnockout />
        <BassanioFigure uid={uid} seed={4301} />
      </g>
      <PortraitRule />
    </>
  )
}

export const bassanioPortrait: LinocutArt = { width: PW, height: PH, Draw: BassanioPortrait }

/** A point on the lifted head, carried into the portrait. */
function onHead(x: number, y: number): [number, number] {
  const a = (-4 * Math.PI) / 180
  const dx = x - 112
  const dy = y - 214
  return P.to(112 + dx * Math.cos(a) - dy * Math.sin(a), 214 + dx * Math.sin(a) + dy * Math.cos(a))
}
const BUTTONS_AT = P.to(194, 280)
const BALDRIC_AT = P.to(138, 300)
const EYE_AT = onHead(MAN_EYE[0], MAN_EYE[1])

export const bassanio: Portrait = {
  name: 'Bassanio',
  art: bassanioPortrait,
  alt: 'A linocut portrait of Bassanio in profile, facing right: a young, clean-shaven man with his chin lifted a little and his eye open and clear under a dark brow. His dark hair is swept back from his brow over his head to the nape. He wears a small white ruff, a dark doublet with a row of pale buttons down the front, a short dark cloak over his far shoulder, and a dark baldric, the strap his rapier hangs from, running down across his breast. Three numbered red markers point to the buttons of his doublet, the baldric and his eye.',
  describedBy: [
    {
      phrase: 'a more swelling port',
      at: [BUTTONS_AT[0] + 40, BUTTONS_AT[1] - 40],
      to: BUTTONS_AT,
    },
    {
      phrase: 'a scholar and a soldier',
      at: [BALDRIC_AT[0] - 70, BALDRIC_AT[1] - 16],
      to: BALDRIC_AT,
    },
    {
      phrase: 'the best deserving a fair lady',
      at: [EYE_AT[0] + 56, EYE_AT[1] - 56],
      to: EYE_AT,
    },
  ],
  where: 'Act 1, Scenes 1 and 2',
  note: 'Bassanio admits he has lived beyond his means and needs a rich marriage to pay his debts. Nerissa remembers him as a scholar and a soldier, the best deserving a fair lady: the play asks whether he is both the spendthrift and the worthy suitor.',
  artNote:
    'The play does not describe his face. The doublet stands for the style he says he could not afford; his bare head, swept-back hair and rapier are how the panels draw him, in the plain dress of the time.',
}

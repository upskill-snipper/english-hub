import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  combedFromCrown,
  EarCut,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Toga,
  togaShapes,
  turn,
  type SP,
} from './common'

/**
 * Decius Brutus, the conspirator who promises to bring Caesar to the Capitol
 * (Act 2, Scene 1), in his own words:
 *
 *   "Never fear that: if he be so resolved, I can o'ersway him, for he loves
 *   to hear That unicorns may be betray'd with trees, And bears with glasses,
 *   elephants with holes, Lions with toils, and men with flatterers."
 *
 * The play says nothing of his looks, so the portrait shows what the speech
 * shows: a man pleased with his own cleverness. His head is inclined a
 * little, as a courtier's is ("Caesar, all hail! Good morrow, worthy
 * Caesar", 2.2), his eye creased with a smile that knows more than it says,
 * and his mouth turned up at the corner.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every man's
 * head (MAN_HEAD), clean-shaven, his hair worn longer than the other men's and
 * swept back from the brow to a lock at the nape (DECIUS_HAIR, DECIUS_LOCK),
 * invented only to tell him from the other conspirators; and the toga. There
 * is no red in this plate.
 *
 * Seeds: 7101 (the figure's marks), 7105 (the toga), 7110 (the ground).
 */

/** The head inclined a little, a courtier's bow: a turn about the neck. */
const BOW = 7
const BOW_T = `rotate(${BOW} 112 214)`
const onHead = turn(112, 214, BOW)

/** Hair swept back from the brow over the crown, longer at the back, to a lock at the nape. */
const HAIR_PTS: SP[] = [
  [157, 54, 1],
  [146, 56],
  [133, 62],
  [125, 76],
  [121, 94],
  [117, 108, 1],
  [106, 104],
  [96, 112],
  [90, 132],
  [86, 154],
  [79, 174],
  [68, 190, 1],
  [54, 184],
  [45, 166],
  [41, 142],
  [42, 108],
  [53, 73],
  [76, 48],
  [110, 36],
  [140, 37],
]
const HAIR = spline(HAIR_PTS)

type Marks = { hair: string; sweep: string }

const marks = once((): Marks => {
  // Strokes lying back from the brow: each points away from a spot in front
  // of the face, so the hair reads as swept back.
  const hair = combedFromCrown(7101, HAIR_PTS, [210, 60], 120, [8, 15], [0.55, 0.95], (x) =>
    clamp(0.25 + (x - 50) / 100),
  )
  // Two long strands swept from the brow back to the lock, as the kit cuts them.
  const sweep = gouge(150, 58, 64, 140, 1.4, -14) + gouge(138, 66, 60, 176, 1.3, -12)
  return { hair, sweep }
})

/** Decius, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function DeciusFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-dc-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <g transform={BOW_T}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-dc`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
          <path d={m.sweep} fill={PAPER} />
        </g>
        <EarCut {...MAN_EAR} />
        {/* the smile: the mouth turned up, the cheek lifted, the eye creased */}
        <ManNoseAndMouth smile />
        <path
          d="M148 132Q152 138 159 140"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
        <ManBrow w={2.6} raise={1} />
        <ManEye look="laugh" />
      </g>
      <Toga seed={7105} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function DeciusKnockout() {
  const t = togaShapes(7105)
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={BOW_T}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={t.body} />
    </g>
  )
}

const P = placing(16, 0, 0.98)

const ground = once(() =>
  // Morning, "strucken eight" (2.2): daylight ahead of him, to the right.
  portraitGround('jc-decius', 7110, (x, y) =>
    clamp(0.1 + ((x - 70) / 260) * 0.85 - (y / PH) * 0.12),
  ),
)

function DeciusPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <DeciusKnockout />
        <DeciusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const deciusPortrait: LinocutArt = { width: PW, height: PH, Draw: DeciusPortrait }

const EYE_AT = P.to(...onHead(152, 100))
/** The smile's crease on the cheek: no red line touches or crosses a mouth. */
const SMILE_AT = P.to(...onHead(150, 133))

export const decius: Portrait = {
  name: 'Decius',
  art: deciusPortrait,
  alt: 'A linocut portrait of Decius in profile, facing right, his head inclined a little as a courtier bows: a clean-shaven man with dark hair worn longer than the others’ and swept back from the brow to a lock at the nape, his eye creased with a knowing smile and his mouth turned up at the corner. He wears a dark toga drawn over one shoulder. Two numbered red markers point to his creased eye and the smile on his cheek.',
  describedBy: [
    { phrase: 'I can o’ersway him', at: [EYE_AT[0] + 50, EYE_AT[1] - 62], to: EYE_AT },
    // From below and behind, so the line reaches the smile's crease over the
    // cheek and never crosses the mouth. (A disc set on the cheek itself read
    // as a red blush.)
    { phrase: 'men with flatterers', at: [SMILE_AT[0] - 50, SMILE_AT[1] + 70], to: SMILE_AT },
  ],
  where: 'Act 2, Scene 1',
  passage:
    'I can o’ersway him, for he loves to hear That unicorns may be betray’d with trees, And bears with glasses, elephants with holes, Lions with toils, and men with flatterers.',
  note: 'Decius knows Caesar’s weakness: he likes to be told that he hates flattery. The next morning Decius flatters him out of his wife’s fears and into the Senate House.',
  artNote:
    'The play does not describe him. His hair, worn longer and swept back, is how the panels tell him from the other conspirators, and he wears the toga.',
}

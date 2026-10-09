import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'

import {
  ageLines,
  Armour,
  combedFromCrown,
  CROPPED_HAIR,
  CROPPED_PTS,
  CUIRASS,
  CUIRASS_CHEST,
  EarCut,
  fringe,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  MOUSTACHE,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHORT_BEARD,
  shortBeardCuts,
  Tear,
} from './common'

/**
 * Enobarbus, Antony's oldest friend and officer, from what others call him
 * and one line of his own:
 *
 *   ANTONY: "Thou art a soldier only. Speak no more." (Act 2, Scene 2)
 *   POMPEY: "Enjoy thy plainness; It nothing ill becomes thee." (Act 2,
 *   Scene 6)
 *   ENOBARBUS, at Antony's last supper with his servants: "What mean you,
 *   sir, To give them this discomfort? Look, they weep, And I, an ass, am
 *   onion-eyed." (Act 4, Scene 2)
 *
 * So: a soldier in his armour, his mouth set in a plain line, and the eyes of
 * the man who mocks everyone's tears wet with his own: the lower lid wet, and
 * a tear on his cheek. A line or two of age at the eye and on the brow: he
 * has served Antony a long time.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx: 'enobarbus'):
 * every man's head with a short dark beard along the jaw to a blunt end
 * (./common.tsx: SHORT_BEARD, the kit's HEAD_CASCA), invented only to tell him
 * from the other Romans, and never Antony's curls; his hair cropped and combed
 * forward to a fringe at the brow (CROPPED_HAIR, the kit's ROMAN_HAIR);
 * bareheaded, in the cuirass, with no cloak, which the kit keeps for the
 * generals. The play describes none of it. Nothing of his death is drawn or
 * pointed at, and no marker comes from the night he dies. There is no red in
 * this plate but the markers.
 *
 * MARKERS. The eye's comes to it from in front at the eye's height, crossing
 * only the bridge of the nose; "Enjoy thy plainness" comes to his mouth from
 * in front and stops in the air before his lips; the soldier's is on his
 * armour, far from the face. No line crosses his face.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 5101 to 5104 (the figure's marks), 5105 (the armour), 5106 (the
 * beard), 5110 (the ground).
 */

type Marks = { hair: string; fringe: string; nape: string; age: string; beard: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(5101, CROPPED_PTS, [100, 70], 105, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  const edge = fringe([157, 56], [134, 64], 6, 8, 5102)
  const nape = napeShade(5103, 150, 118, 66, 120)
  const age = ageLines(5104, 2)
  return { hair, fringe: edge, nape, age, beard: shortBeardCuts(5106) }
})

/** Enobarbus, head and shoulders, in armour, facing right in the 0..240 by 0..332 frame. */
export function EnobarbusFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-en-head`
  const beardClip = `${uid}-en-beard`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={SHORT_BEARD} />
          <path d={MOUSTACHE} />
        </clipPath>
      </defs>
      <Armour seed={5105} cloak={false} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-en`} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
        <path d={m.age} strokeWidth={LINE.hairline} />
      </g>
      <path
        d={CROPPED_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.hair} fill={PAPER} />
      <path d={m.fringe} fill={INK} />
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      {/* the short dark beard and the moustache, their strands cut in paper */}
      <path d={SHORT_BEARD} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      <ManBrow w={2.8} />
      <ManEye look="open" />
      {/* "I, an ass, am onion-eyed": the lower lid wet, and a tear on his cheek */}
      <path
        d="M147.6 103.6Q154.6 106.4 161 102.6"
        fill="none"
        stroke={INK}
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <Tear x={152} y={120} s={0.9} track={8} />
    </g>
  )
}

/** A thick ink halo round head, beard and shoulders. */
function EnobarbusKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={CUIRASS} />
      <path d={MAN_HEAD} />
      <path d={CROPPED_HAIR} />
      <path d={SHORT_BEARD} />
    </g>
  )
}

const P = placing(30, 2, 1, true)

const ground = once(() =>
  // A room of the palace at night, lit for the supper, the light ahead of him.
  portraitGround('ac-enobarbus', 5110, (x, y) =>
    clamp(0.06 + ((PW - x - 50) / 270) * 0.74 - (y / PH) * 0.1),
  ),
)

function EnobarbusPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <EnobarbusKnockout />
        <EnobarbusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const enobarbusPortrait: LinocutArt = { width: PW, height: PH, Draw: EnobarbusPortrait }

const EYE_AT = P.to(MAN_EYE[0] + 1, MAN_EYE[1])
/** In the air just before the closed lips: no red line touches or crosses a mouth. */
const MOUTH_AT = P.to(181, 150.4)
const ARMOUR_AT = P.to(...CUIRASS_CHEST)

export const enobarbus: Portrait = {
  name: 'Enobarbus',
  art: enobarbusPortrait,
  alt: 'A linocut portrait of Enobarbus in profile, facing left, head and shoulders: a soldier with a short dark beard along his jaw to a blunt end and a moustache, a line or two of age at his eye and across his brow, his dark hair cropped short and combed forward to a fringe, and his mouth set in a plain, level line. His eye is open, its lower lid wet, and a tear has run down onto his cheek. He wears a dark cuirass, its rim, the line of the chest and the riveted shoulder guard cut in white, and no cloak. Three numbered red markers point to his armour, the air just before his lips and his wet eye.',
  describedBy: [
    {
      phrase: 'Thou art a soldier only.',
      at: [ARMOUR_AT[0] - 48, ARMOUR_AT[1] + 4],
      to: ARMOUR_AT,
    },
    { phrase: 'Enjoy thy plainness', at: [MOUTH_AT[0] - 42, MOUTH_AT[1]], to: MOUTH_AT },
    { phrase: 'I, an ass, am onion-eyed.', at: [EYE_AT[0] - 60, EYE_AT[1]], to: EYE_AT },
  ],
  where: 'Act 2, Scenes 2 and 6; Act 4, Scene 2',
  note: 'Antony silences him as “a soldier only”, and Pompey likes him for his plain speaking. Yet the man who mocks everyone’s tears weeps at Antony’s farewell supper, and soon after deserts him: his honesty and his loyalty pull him apart.',
  artNote:
    'The play does not describe his looks. He is drawn as the panels draw him, with a short dark beard and cropped hair, in a soldier’s armour without a general’s cloak.',
}

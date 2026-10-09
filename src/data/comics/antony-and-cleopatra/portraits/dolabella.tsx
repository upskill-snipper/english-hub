import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp } from '@/components/comics/linocut/carve'

import {
  Armour,
  combedFromCrown,
  CROPPED_HAIR,
  CROPPED_PTS,
  CUIRASS,
  EarCut,
  fringe,
  handPaths,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SpecHand,
  spline,
} from './common'

/**
 * Dolabella, the officer Caesar sets to guard Cleopatra in her monument, from
 * his own words to her there:
 *
 *   DOLABELLA: "Hear me, good madam. Your loss is, as yourself, great; and
 *   you bear it As answering to the weight. Would I might never O’ertake
 *   pursued success, but I do feel, By the rebound of yours, a grief that
 *   smites My very heart at root." (Act 5, Scene 2)
 *   CLEOPATRA: "He’ll lead me, then, in triumph?" DOLABELLA: "Madam, he
 *   will. I know it." (Act 5, Scene 2)
 *
 * So: a soldier who tells a captive queen the truth his master would hide
 * from her, his eye level and his mouth closed on it, and his hand laid flat
 * on his breast, over the heart he says her grief has struck, the fingers
 * apart. The play says nothing of his looks.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx:
 * 'dolabella'): every man's head (MAN_HEAD), clean-shaven, his hair cropped
 * and combed forward (./common.tsx: CROPPED_HAIR), bareheaded, in the cuirass
 * with no cloak; his forearm bare. Nothing of the end of the scene, or of what
 * he finds there, is drawn or pointed at. There is no red in this plate but
 * the markers.
 *
 * MARKERS. "A grief that smites My very heart" comes to his hand on his
 * breast from in front, far below the face; "Madam, he will" comes to his
 * mouth from in front and stops in the air before his lips. No line crosses
 * his face.
 *
 * He faces left, towards the queen, so the figure is drawn facing right and
 * flipped.
 *
 * Seeds: 12101 to 12103 (the figure's marks), 12105 (the armour), 12110 (the
 * ground).
 */

/**
 * His near hand laid flat on his breast, over the heart: the back of the hand
 * towards us, the fingers lying across the chest towards the far shoulder,
 * spread and cut apart, the thumb along them. The forearm comes up to it from
 * in front, so the hand lies on the breast and is never raised. In the
 * figure's frame.
 */
const FINGER_DIR = { x: -0.74, y: -0.67 }
const KNUCKLE_LINE = { x: 0.67, y: -0.74 }
const KNUCKLE_MID = { x: 166, y: 292 }
const KNUCKLES = [-6.6, -2.2, 2.2, 6.4].map((o): [number, number] => [
  KNUCKLE_MID.x + KNUCKLE_LINE.x * o,
  KNUCKLE_MID.y + KNUCKLE_LINE.y * o,
])
const TIPS = KNUCKLES.map(([x, y], i): [number, number] => {
  const len = [19, 22, 22, 19][i]
  const fan = [-0.16, -0.05, 0.05, 0.16][i]
  const dx = FINGER_DIR.x + KNUCKLE_LINE.x * fan
  const dy = FINGER_DIR.y + KNUCKLE_LINE.y * fan
  return [x + dx * len, y + dy * len]
})
const HAND = handPaths({
  wrist: [
    [180, 312],
    [192, 302],
  ],
  knuckles: KNUCKLES,
  tips: TIPS,
  width: [5.6, 6.2, 6.2, 6],
  bow: [0.6, 0.3, 0, -0.3],
  thumb: { root: [188, 300], tip: [176, 280], width: 6.4, bow: -1.2 },
})
/** His forearm, bare below the sleeve of the tunic under his armour, coming up from in front to the wrist. */
const FOREARM = spline([
  [196, 344, 1],
  [188, 326],
  [180, 313, 1],
  [193, 301, 1],
  [208, 318],
  [224, 344, 1],
])

type Marks = { hair: string; edge: string; nape: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(12101, CROPPED_PTS, [100, 70], 105, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  const edge = fringe([157, 56], [134, 64], 6, 8, 12102)
  const nape = napeShade(12103, 150, 118, 66, 120)
  return { hair, edge, nape }
})

/** Dolabella, head and shoulders, in armour, his hand on his breast, facing right in the 0..240 by 0..332 frame. */
export function DolabellaFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-do-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <Armour seed={12105} cloak={false} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-do`} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
      </g>
      <path
        d={CROPPED_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.hair} fill={PAPER} />
      <path d={m.edge} fill={INK} />
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <ManBrow w={2.8} raise={1.2} />
      <ManEye look="open" />
      {/* his bare forearm, and his hand laid on his breast */}
      <path d={FOREARM} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
      <path d={FOREARM} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <SpecHand paths={HAND} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function DolabellaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={CUIRASS} />
      <path d={MAN_HEAD} />
      <path d={CROPPED_HAIR} />
    </g>
  )
}

const P = placing(32, 0, 0.98, true)

const ground = once(() =>
  // Inside Cleopatra's monument, the light from its high windows ahead of him.
  portraitGround('ac-dolabella', 12110, (x, y) =>
    clamp(0.06 + ((PW - x - 50) / 270) * 0.7 - (y / PH) * 0.12),
  ),
)

function DolabellaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <DolabellaKnockout />
        <DolabellaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const dolabellaPortrait: LinocutArt = { width: PW, height: PH, Draw: DolabellaPortrait }

const HAND_AT = P.to(166, 294)
/** In the air just before the closed lips: no red line touches or crosses a mouth. */
const MOUTH_AT = P.to(181, 148.4)

export const dolabella: Portrait = {
  name: 'Dolabella',
  art: dolabellaPortrait,
  alt: 'A linocut portrait of Dolabella in profile, facing left, head and shoulders: a clean-shaven soldier, his dark hair cropped short and combed forward, his eye open and level under a brow a little raised, and his mouth closed. He wears a dark cuirass, its rim and riveted shoulder guard cut in white, and no cloak, and his bare near hand is laid flat on his breast over his heart, its fingers spread and apart across his chest. Two numbered red markers point to his hand on his breast and to the air just before his lips.',
  describedBy: [
    {
      phrase: 'a grief that smites My very heart at root',
      at: [HAND_AT[0] - 58, HAND_AT[1] + 4],
      to: HAND_AT,
    },
    { phrase: 'Madam, he will. I know it.', at: [MOUTH_AT[0] - 46, MOUTH_AT[1]], to: MOUTH_AT },
  ],
  where: 'Act 5, Scene 2',
  note: 'Caesar’s officer is moved by the captive queen’s grief, and when she asks whether Caesar means to parade her through Rome in triumph, he tells her the truth. Later he warns her that she is to be sent ahead within three days: a Roman whose kindness helps Cleopatra outwit his master.',
  artNote:
    'The play does not describe his looks. He is drawn as the panels draw him, clean-shaven with cropped hair, in a soldier’s armour without a cloak.',
}

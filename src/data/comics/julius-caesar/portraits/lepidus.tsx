import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, deg, gouge, n, type Pt } from '@/components/comics/linocut/carve'

import {
  ageLines,
  capsule,
  combedFromCrown,
  EarCut,
  MAN_EAR,
  MAN_HEAD,
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
 * Lepidus, the third of the men who share Rome after Caesar's death, in
 * Antony's house (Act 4, Scene 1), from three lines of the scene:
 *
 *   OCTAVIUS: "Your brother too must die; consent you, Lepidus?"
 *   LEPIDUS: "I do consent,"
 *   ANTONY: "But, Lepidus, go you to Caesar's house; Fetch the will hither"
 *   ANTONY, when he has gone: "This is a slight unmeritable man, Meet to be
 *   sent on errands."
 *
 * So: a man with his eyes lowered, who has just agreed to his own brother's
 * death, and in his hand the errand he is sent on, Caesar's will, a roll of
 * parchment "under Caesar's seal" (Antony, 3.2). The seal is the plate's one
 * red, at the far end of the roll from his hand. Nothing of the list of names
 * or of the deaths it orders is drawn.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every man's
 * head (MAN_HEAD), slight in the body, and balding, the light on his bare
 * crown and his hair left at the side, from the temple back over the ear to
 * the nape (LEPIDUS_HAIR), invented only to tell him from Antony and
 * Octavius; and the toga, which the play does not describe. His hand is
 * closed round the roll, each finger cut apart.
 *
 * Seeds: 1201 and 1202 (the figure's marks), 1205 (the toga), 1210 (the ground).
 */

/** The head bowed a little, the eyes lowered: a turn about the neck. */
const BOW = 6
const BOW_T = `rotate(${BOW} 112 214)`
const onHead = turn(112, 214, BOW)

/** His hair, left at the side: from the temple back over the ear to the nape. */
const HAIR_PTS: SP[] = [
  [124, 90, 1],
  [120, 100],
  [116, 108, 1],
  [106, 104],
  [96, 112],
  [90, 132],
  [84, 150],
  [76, 164],
  [62, 172, 1],
  [49, 168],
  [44, 146],
  [44, 122],
  [50, 110],
  [62, 104],
  [74, 102],
  [88, 98],
  [104, 94],
]
const HAIR = spline(HAIR_PTS)

/** The will: a roll of parchment held across his chest, and its seal at the far end. */
const ROLL_A: Pt = [138, 300]
const ROLL_B: Pt = [206, 246]
const ROLL = capsule(ROLL_A[0], ROLL_A[1], ROLL_B[0], ROLL_B[1], 15)
const SEAL: Pt = [200, 251]

type Marks = { hair: string; age: string; crown: string; roll: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(1201, HAIR_PTS, [96, 70], 60, [5, 9], [0.5, 0.85])
  const age = ageLines(1202, 2)
  // The thin hair at the top of what is left: short strokes standing up
  // from its edge, so the edge reads as hair and not as the rim of a cap.
  let crown = ''
  for (let i = 0; i < 14; i++) {
    const t = i / 13
    const x = 50 + t * 70
    const y = 110 - Math.sin(t * Math.PI) * 6 - t * 12
    crown += `M${n(x)} ${n(y + 3)}l${n(-2 + t * 3)} ${n(-7 - (i % 3) * 2)}`
  }
  // The roll's edges, wound round: rings cut in ink across it.
  const a = Math.atan2(ROLL_B[1] - ROLL_A[1], ROLL_B[0] - ROLL_A[0])
  const nx = -Math.sin(a) * 7
  const ny = Math.cos(a) * 7
  let roll = ''
  for (const t of [0.12, 0.88]) {
    const cx = ROLL_A[0] + (ROLL_B[0] - ROLL_A[0]) * t
    const cy = ROLL_A[1] + (ROLL_B[1] - ROLL_A[1]) * t
    roll += `M${n(cx - nx)} ${n(cy - ny)}Q${n(cx + Math.cos(a) * 3)} ${n(cy + Math.sin(a) * 3)} ${n(cx + nx)} ${n(cy + ny)}`
  }
  return { hair, age, crown, roll }
})

/** Lepidus, head and shoulders, the will in his hand, facing right in the 0..240 by 0..332 frame. */
export function LepidusFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-lp-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <g transform={BOW_T}>
        <path d={MAN_HEAD} fill={PAPER} />
        <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.age} strokeWidth={1} />
        </g>
        <NeckShadow id={`${uid}-lp`} />
        <path d={m.crown} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <EarCut {...MAN_EAR} />
        <ManNoseAndMouth />
        <path
          d="M143.5 89Q153 86.5 165.5 89.5"
          fill="none"
          stroke={INK}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        {/* "I do consent": the eyes lowered */}
        <ManEye look="down" />
      </g>
      <Toga seed={1205} slim={0.9} />
      {/* the will, and his hand closed round it, the fingers apart */}
      <path d={ROLL} fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path d={m.roll} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
      <circle cx={SEAL[0]} cy={SEAL[1]} r={7.6} fill={INK} />
      <circle cx={SEAL[0]} cy={SEAL[1]} r={5.8} fill={RED} />
      <circle cx={SEAL[0]} cy={SEAL[1]} r={2.6} fill="none" stroke={INK} strokeWidth={1} />
      <g fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round">
        {/* four fingers wrapped round the roll, across it, each cut apart */}
        {[0, 1, 2, 3].map((i) => {
          const along = deg(-38.5)
          const across = along + Math.PI / 2
          const cx = 150 + Math.cos(along) * i * 6.6
          const cy = 291 + Math.sin(along) * i * 6.6
          return (
            <path
              key={i}
              d={capsule(
                cx - Math.cos(across) * 9,
                cy - Math.sin(across) * 9,
                cx + Math.cos(across) * 10,
                cy + Math.sin(across) * 10,
                6.2,
              )}
            />
          )
        })}
        {/* the thumb, along the roll over the fingers */}
        <path d={capsule(150, 286, 172, 269, 6.6)} />
      </g>
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function LepidusKnockout() {
  const t = togaShapes(1205, 0.9)
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

const P = placing(22, 0, 0.98)

const ground = once(() =>
  // A room in Antony's house: the light from a window ahead of him.
  portraitGround('jc-lepidus', 1210, (x, y) =>
    clamp(0.08 + ((x - 90) / 260) * 0.8 - Math.abs(y - 110) / 600),
  ),
)

function LepidusPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <LepidusKnockout />
        <LepidusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const lepidusPortrait: LinocutArt = { width: PW, height: PH, Draw: LepidusPortrait }

const EYE_AT = P.to(...onHead(155, 101))
const WILL_AT = P.to(190, 262)

export const lepidus: Portrait = {
  name: 'Lepidus',
  art: lepidusPortrait,
  alt: 'A linocut portrait of Lepidus in profile, facing right, his head a little bowed and his eyes lowered: a slight, clean-shaven man, balding, his bare crown lit and his dark hair left at the side and back, with lines at his brow and eye. He wears a dark toga drawn over one shoulder, and holds a roll of parchment across his chest, his fingers closed round it and apart, with a seal printed red at its far end. Two numbered red markers point to his lowered eye and the roll in his hand.',
  describedBy: [
    { phrase: 'I do consent', at: [EYE_AT[0] + 56, EYE_AT[1] - 50], to: EYE_AT },
    { phrase: 'Meet to be sent on errands', at: [WILL_AT[0] + 70, WILL_AT[1] - 8], to: WILL_AT },
  ],
  where: 'Act 4, Scene 1',
  note: 'Lepidus agrees to his own brother’s death and is sent to fetch Caesar’s will, so that the others can cut what it leaves the people. As soon as he has gone Antony calls him “a slight unmeritable man”; Octavius answers that he is “a tried and valiant soldier”.',
  artNote:
    'The play does not describe him. He is slight and balding, as the panels draw him to tell him from Antony and Octavius, and wears the toga. The roll is the will he is sent for; its seal is red.',
}

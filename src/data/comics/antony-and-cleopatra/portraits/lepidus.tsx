import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, n, rng } from '@/components/comics/linocut/carve'

import {
  BALDING_HAIR,
  BALDING_PTS,
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
  Toga,
  togaShapes,
} from './common'

/**
 * Lepidus, the third and weakest of the three men who rule the Roman world,
 * from his one look in the play and his own plea for peace:
 *
 *   LEPIDUS: "Noble friends, That which combined us was most great, and let
 *   not A leaner action rend us. ... Then, noble partners, The rather for I
 *   earnestly beseech, Touch you the sourest points with sweetest terms, Nor
 *   curstness grow to th’ matter." (Act 2, Scene 2)
 *   SECOND SERVANT, on Pompey's galley: "Lepidus is high-coloured." FIRST
 *   SERVANT: "They have made him drink alms-drink." (Act 2, Scene 7)
 *
 * So: a slight man past his youth, his mouth closed and his eye mild, and on
 * his cheek the colour the servants see in it. The colour is the plate's one
 * red but the markers, laid flat on the cheek below the cheekbone, well back
 * from the mouth, as a flush is laid on Caesar's, big enough to stay a flush
 * at phone width. Nothing else of the feast is drawn: no cup, and no wine.
 *
 * He is the same man as in the Julius Caesar portraits and panels, ten years
 * on, as the figure kit draws him (../panels/people.tsx: 'lepidus'): every
 * man's head (MAN_HEAD), slight in the body, and balding, the light on his bare
 * crown and his hair left at the side, from the temple back over the ear to
 * the nape (./common.tsx: BALDING_HAIR, the kit's LEPIDUS_HAIR), invented in
 * that play only to tell him from Antony and Octavius; clean-shaven, in the
 * toga, which the play does not describe. A line or two of age at the eye and
 * on the brow.
 *
 * MARKERS. "high-coloured" sits on his cheek, beside the flush, with no line,
 * as the pilot's "shrivelled his cheek" sits on Scrooge's; his own plea comes
 * to his mouth from in front and stops in the air before his lips. No line
 * crosses his face.
 *
 * Seeds: 9101 and 9102 (the figure's marks), 9105 (the toga), 9110 (the
 * ground).
 */

/** "Lepidus is high-coloured": a flush laid flat on the cheek, well back from the mouth. */
const FLUSH = { cx: 138, cy: 124, rx: 9.6, ry: 5.8, rot: -12 }

type Marks = { hair: string; age: string; crown: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(9101, BALDING_PTS, [96, 70], 60, [5, 9], [0.5, 0.85])
  // The lines of age on the brow and at the corner of the eye, cut as
  // ageLines cuts them, and none on the cheek, where the flush is laid.
  const r = rng(9102)
  let age = ''
  for (let i = 0; i < 2; i++) {
    const y = 64 + i * 7.5
    age += `M${n(141 + between(r, -1, 1))} ${n(y + 1)}Q151 ${n(y - 2.2)} ${n(161 + between(r, -1, 1))} ${n(y + 1.4)}`
  }
  for (let i = 0; i < 3; i++)
    age += `M144.5 ${n(98 + i * 3.6)}L${n(137 - between(r, 0, 2))} ${n(94 + i * 5.2)}`
  // The thin hair at the top of what is left: short strokes standing up
  // from its edge, so the edge reads as hair and not as the rim of a cap, as
  // the Julius Caesar portrait cuts it.
  let crown = ''
  for (let i = 0; i < 14; i++) {
    const t = i / 13
    const x = 50 + t * 70
    const y = 110 - Math.sin(t * Math.PI) * 6 - t * 12
    crown += `M${n(x)} ${n(y + 3)}l${n(-2 + t * 3)} ${n(-7 - (i % 3) * 2)}`
  }
  return { hair, age, crown }
})

/** Lepidus, head and shoulders, in a toga, facing right in the 0..240 by 0..332 frame. */
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
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.age} strokeWidth={1} />
      </g>
      <NeckShadow id={`${uid}-lp`} />
      <path d={m.crown} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <path
        d={BALDING_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.hair} fill={PAPER} />
      <EarCut {...MAN_EAR} />
      {/* "Lepidus is high-coloured" */}
      <ellipse
        cx={FLUSH.cx}
        cy={FLUSH.cy}
        rx={FLUSH.rx}
        ry={FLUSH.ry}
        transform={`rotate(${FLUSH.rot} ${FLUSH.cx} ${FLUSH.cy})`}
        fill={RED}
      />
      <ManNoseAndMouth />
      <path
        d="M143.5 89Q153 86.5 165.5 89.5"
        fill="none"
        stroke={INK}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <ManEye look="open" />
      <Toga seed={9105} slim={0.9} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function LepidusKnockout() {
  const t = togaShapes(9105, 0.9)
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={BALDING_HAIR} />
      <path d={t.body} />
    </g>
  )
}

const P = placing(28, 0, 0.98)

const ground = once(() =>
  // A hall in Caesar's house in Rome, the light ahead of him.
  portraitGround('ac-lepidus', 9110, (x, y) =>
    clamp(0.1 + ((x - 70) / 260) * 0.82 - Math.abs(y - 120) / 640),
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

const CHEEK_AT = P.to(128, 142)
/** In the air just before the closed lips: no red line touches or crosses a mouth. */
const MOUTH_AT = P.to(181, 148.4)

export const lepidus: Portrait = {
  name: 'Lepidus',
  art: lepidusPortrait,
  alt: 'A linocut portrait of Lepidus in profile, facing right, head and shoulders: a slight, clean-shaven man past his youth, balding, his bare crown lit and his dark hair left at the side and back, with a line or two of age at his brow and eye. His eye is mild and his mouth closed, and a flush is printed in red on his cheek. He wears a dark toga drawn over one shoulder. Two numbered red markers sit on his cheek and point to the air just before his lips.',
  describedBy: [
    { phrase: 'Lepidus is high-coloured.', at: CHEEK_AT },
    {
      phrase: 'Touch you the sourest points with sweetest terms',
      at: [MOUTH_AT[0] + 44, MOUTH_AT[1]],
      to: MOUTH_AT,
    },
  ],
  where: 'Act 2, Scenes 2 and 7',
  note: 'Lepidus tries to keep the peace between Antony and Caesar, begging them to put their quarrels gently. On Pompey’s galley the servants laugh that each time the others quarrel he makes peace and drinks again, until he is carried ashore; soon afterwards Caesar uses him and throws him out of power.',
  artNote:
    'The play gives only his colour on the galley, which the print’s one colour shows on his cheek. He is drawn as the Julius Caesar panels draw him, slight and balding, so that he is the same man.',
}

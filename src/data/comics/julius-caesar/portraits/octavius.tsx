import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'

import {
  combedFromCrown,
  EarCut,
  fringe,
  napeShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  shoulders,
  spline,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
  type SP,
} from './common'

/**
 * Octavius, Caesar's heir, at Philippi (Act 5, Scene 1), from what the play
 * calls him and one line of his own:
 *
 *   "young Octavius" (Antony, Act 3, Scene 1; Cassius and Brutus, Act 4,
 *   Scene 3)
 *   OCTAVIUS: "I do not cross you; but I will do so." (Act 5, Scene 1)
 *
 * So: a young man, smooth in the face, who looks steadily ahead and is not
 * moved: he has just refused Antony's order to take the left of the field.
 * His mouth is closed and level, his eye open and cool under a straight
 * brow.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the youth's
 * head (HEAD_YOUTH), beardless, his hair cropped and combed forward
 * (ROMAN_HAIR), never Antony's curls; and at Philippi, as every general there,
 * bareheaded, in the plain cuirass of a Roman soldier, its rim, the line of
 * the chest and the riveted edge of the shoulder guard cut in paper, with a
 * general's cloak hanging from the shoulders. No sword is drawn: two of the play's deaths at Philippi are by
 * the sword, and none is shown. The play describes none of his dress. There
 * is no red in this plate.
 *
 * He faces left, towards Antony and the field, so the figure is drawn facing
 * right and flipped.
 *
 * Seeds: 9101 to 9104 (the figure's marks), 9110 (the ground).
 */

/** Cropped hair, combed forward to a fringe at the brow. */
const HAIR_PTS: SP[] = [
  [160, 55, 1],
  [150, 59],
  [140, 61],
  [131, 66],
  [125, 80],
  [120, 96],
  [115, 106, 1],
  [104, 102],
  [95, 110],
  [89, 130],
  [83, 148],
  [75, 162],
  [62, 170, 1],
  [50, 166],
  [44, 142],
  [44, 108],
  [56, 72],
  [80, 46],
  [112, 34],
  [141, 36],
]
const HAIR = spline(HAIR_PTS)

// ── The armour of Philippi ─────────────────────────────────────────────────

/** The general's cloak, hanging from the shoulders behind him. */
const CLOAK = spline([
  [-20, 340, 1],
  [-16, 290],
  [0, 254],
  [30, 232],
  [62, 222],
  [96, 226, 1],
  [70, 260],
  [52, 300],
  [44, 340, 1],
])
/** The cuirass over chest and shoulders. */
const CUIRASS = shoulders(0.98, 4)
/** Its rim round the neck, the line of the chest, and the edge of the shoulder guard: cut in paper. */
const RIM = 'M80 220C100 234 132 236 154 222'
const CHEST = 'M150 262C170 270 190 286 204 306M120 280C140 286 160 300 172 322'
const GUARD = 'M40 244C66 236 92 240 110 256C116 276 112 300 104 318'
/** Rivets along the shoulder guard's edge. */
const RIVETS: [number, number][] = [
  [52, 246],
  [70, 243],
  [88, 247],
  [102, 257],
  [108, 274],
  [108, 292],
]

type Marks = { hair: string; fringe: string; nape: string; cloak: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(9101, HAIR_PTS, [100, 70], 110, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  const edge = fringe([157, 57], [134, 64], 6, 8, 9102)
  const nape = napeShade(9103, 150, 118, 66, 120)
  const r = rng(9104)
  let cloak = ''
  for (let i = 0; i < 4; i++) {
    const x = between(r, -8, 30)
    cloak += gouge(
      x + 16,
      between(r, 240, 256),
      x - between(r, 4, 12),
      340,
      between(r, 1.2, 1.8),
      1.4,
    )
  }
  return { hair, fringe: edge, nape, cloak }
})

/** Octavius, head and shoulders, in armour, facing right in the 0..240 by 0..332 frame. */
export function OctaviusFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-oc-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={YOUTH_HEAD} />
        </clipPath>
      </defs>
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
        <path d={YOUTH_JAW} strokeWidth={1.5} />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={m.fringe} fill={INK} />
      <EarCut {...YOUTH_EAR} />
      <YouthNoseAndMouth />
      <YouthEye look="open" />
      <path d={CUIRASS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
        <path d={RIM} strokeWidth={3} />
        <path d={CHEST} strokeWidth={1.8} />
        <path d={GUARD} strokeWidth={2.2} />
      </g>
      <g fill={PAPER}>
        {RIVETS.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={1.9} />
        ))}
      </g>
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function OctaviusKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={YOUTH_HEAD} />
      <path d={HAIR} />
      <path d={CUIRASS} />
      <path d={CLOAK} />
    </g>
  )
}

const P = placing(28, 8, 0.96, true)

const ground = once(() =>
  // Morning on the plain of Philippi, the light ahead of him, to the left.
  portraitGround('jc-octavius', 9110, (x, y) =>
    clamp(0.14 + ((PW - x - 40) / 270) * 0.8 - (y / PH) * 0.16),
  ),
)

function OctaviusPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <OctaviusKnockout />
        <OctaviusFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const octaviusPortrait: LinocutArt = { width: PW, height: PH, Draw: OctaviusPortrait }

const CHEEK_AT = P.to(140, 140)
const EYE_AT = P.to(156, 99)

export const octavius: Portrait = {
  name: 'Octavius',
  art: octaviusPortrait,
  alt: 'A linocut portrait of Octavius in profile, facing left: a young, beardless man with a smooth face, his dark hair cropped short and combed forward to a fringe, his eye open and steady under a straight brow and his mouth closed and level. He wears a plain dark cuirass, its rim, the line of the chest and the riveted edge of the shoulder guard cut in white, and a dark cloak from his shoulders behind him. Two numbered red markers point to his smooth cheek and his eye.',
  describedBy: [
    { phrase: 'young Octavius', at: [CHEEK_AT[0] - 10, CHEEK_AT[1] + 76], to: CHEEK_AT },
    {
      phrase: 'I do not cross you; but I will do so.',
      at: [EYE_AT[0] - 64, EYE_AT[1] - 30],
      to: EYE_AT,
    },
  ],
  where: 'Act 4, Scene 3; Act 5, Scene 1',
  note: 'Everyone calls Octavius young, and at Philippi he refuses an order from Antony, who is twice his age, without raising his voice. It is his authority, not Antony’s, that closes the play.',
  artNote:
    'The play describes only his youth. He is beardless, his hair cropped, in the plain armour of a Roman general with a cloak from his shoulders, as in the panels.',
}

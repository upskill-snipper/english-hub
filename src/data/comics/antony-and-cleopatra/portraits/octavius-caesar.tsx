import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
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
  spline,
  Toga,
  togaShapes,
  YOUTH_EAR,
  YOUTH_HEAD,
  YOUTH_JAW,
  YouthEye,
  YouthNoseAndMouth,
  type SP,
} from './common'

/**
 * Octavius Caesar, from what the play calls him and one line of his own:
 *
 *   CLEOPATRA: "Fulvia perchance is angry; or who knows If the
 *   scarce-bearded Caesar have not sent His powerful mandate to you"
 *   (Act 1, Scene 1)
 *   ANTONY: "Tell him he wears the rose Of youth upon him" (Act 3, Scene 13)
 *   CAESAR: "I have eyes upon him, And his affairs come to me on the wind."
 *   (Act 3, Scene 6)
 *
 * So: a young man, his beard no more than a few fine hairs along the jaw and
 * on the chin, the flush of youth on his cheek, and an eye open and steady
 * under a straight brow: the man who watches. His mouth is closed and level.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the youth's
 * head (HEAD_YOUTH; here the Julius Caesar portraits' YOUTH_HEAD), his hair
 * cropped and combed forward to a fringe at the brow (ROMAN_HAIR), never
 * Antony's curls, and in Rome the toga (./common.tsx: Toga). The kit draws him
 * "beardless at panel size": at the size of a portrait the scarce beard can be
 * cut, as the fine hairs the play gives him.
 *
 * RED. "The rose Of youth" is laid flat on his cheek, below the cheekbone,
 * halfway between the nose and the ear and well clear of the mouth, as a
 * flush is laid on Desdemona's cheek in the Othello portraits: the plate's
 * one red but the markers, big enough to stay a flush at phone width.
 *
 * MARKERS. The eye's comes to it from in front at the eye's height, crossing
 * only the bridge of the nose; the beard's comes to the point of the chin
 * from in front at the chin's height, below the lips; "the rose Of youth" sits
 * on his cheek, beside the flush, with no line. No line crosses his face.
 *
 * He faces left, towards Antony, so the figure is drawn facing right and
 * flipped.
 *
 * Seeds: 3101 to 3104 (the figure's marks), 3105 (the toga), 3110 (the
 * ground).
 */

/** Cropped hair, combed forward to a fringe at the brow: the Julius Caesar portraits' Octavius. */
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

/** "The rose Of youth upon him": a flush laid flat on the cheek. */
const FLUSH = { cx: 139, cy: 125, rx: 8.6, ry: 5.2, rot: -10 }

type Marks = { hair: string; fringe: string; nape: string; beard: string }

const marks = once((): Marks => {
  const hair = combedFromCrown(3101, HAIR_PTS, [100, 70], 110, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  const edge = fringe([157, 57], [134, 64], 6, 8, 3102)
  const nape = napeShade(3103, 150, 118, 66, 120)
  // "the scarce-bearded Caesar": a few fine hairs, sparse, along the line of
  // the jaw and on the point of the chin, and nowhere near a full beard.
  const r = rng(3104)
  let beard = ''
  for (let i = 0; i < 26; i++) {
    const t = between(r, 0, 1)
    // along the jaw from below the ear to the chin, a little inside it
    const x = 124 + t * 44 + between(r, -1.4, 1.4)
    const y = 160 + t * 16 - Math.sin(t * Math.PI) * 2 + between(r, -2, 1)
    if (x > 158 && y < 166) continue
    const L = between(r, 3.6, 5.6)
    beard += gouge(x, y, x + between(r, 0.4, 1.8), y + L, between(r, 0.45, 0.6), 0.3)
  }
  return { hair, fringe: edge, nape, beard }
})

/** Octavius Caesar, head and shoulders, in a toga, facing right in the 0..240 by 0..332 frame. */
export function CaesarFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-oc-head`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={YOUTH_HEAD} />
        </clipPath>
      </defs>
      <path d={YOUTH_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
        <path d={YOUTH_JAW} strokeWidth={1.5} />
      </g>
      <g clipPath={`url(#${clip})`}>
        <path d={m.beard} fill={INK} />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={m.fringe} fill={INK} />
      <EarCut {...YOUTH_EAR} />
      {/* "the rose Of youth upon him" */}
      <ellipse
        cx={FLUSH.cx}
        cy={FLUSH.cy}
        rx={FLUSH.rx}
        ry={FLUSH.ry}
        transform={`rotate(${FLUSH.rot} ${FLUSH.cx} ${FLUSH.cy})`}
        fill={RED}
      />
      <YouthNoseAndMouth />
      <YouthEye look="open" brow={3} />
      <Toga seed={3105} />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function CaesarKnockout() {
  const t = togaShapes(3105)
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={YOUTH_HEAD} />
      <path d={HAIR} />
      <path d={t.body} />
    </g>
  )
}

const P = placing(30, 4, 1, true)

const ground = once(() =>
  // A room of his house in Rome, the grey light ahead of him, to the left.
  portraitGround('ac-caesar', 3110, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 270) * 0.8 - (y / PH) * 0.14),
  ),
)

function CaesarPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <CaesarKnockout />
        <CaesarFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const caesarPortrait: LinocutArt = { width: PW, height: PH, Draw: CaesarPortrait }

const EYE_AT = P.to(156, 99.4)
const CHIN_AT = P.to(166.4, 175)
const ROSE_AT = P.to(127, 145)

export const octaviusCaesar: Portrait = {
  name: 'Octavius Caesar',
  art: caesarPortrait,
  alt: 'A linocut portrait of Octavius Caesar in profile, facing left, head and shoulders: a young man with a smooth face, a few fine dark hairs along his jaw and on his chin, a flush printed in red on his cheek below the eye, his eye open and steady under a straight brow, and his mouth closed and level. His dark hair is cropped short and combed forward to a fringe. He wears a dark toga, its roll of cloth drawn over his shoulder. Three numbered red markers point to the hairs on his chin, the flush on his cheek and his eye.',
  describedBy: [
    { phrase: 'the scarce-bearded Caesar', at: [CHIN_AT[0] - 50, CHIN_AT[1]], to: CHIN_AT },
    { phrase: 'he wears the rose Of youth upon him', at: ROSE_AT },
    { phrase: 'I have eyes upon him', at: [EYE_AT[0] - 62, EYE_AT[1]], to: EYE_AT },
  ],
  where: 'Act 1, Scene 1; Act 3, Scenes 6 and 13',
  note: 'Cleopatra mocks his thin beard and Antony his youth, but Caesar is the one who watches: he says he has eyes on Antony, and the news comes to him on the wind. The boy they laugh at ends the play ruling the world.',
  artNote:
    'The play gives his youth and his thin beard, and nothing else of his looks. The flush on his cheek is Antony’s “rose Of youth”, in the print’s one colour; his cropped hair and his toga are how the panels draw him.',
}

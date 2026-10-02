import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge } from '@/components/comics/linocut/carve'

import {
  CROWN,
  CROWN_BAND_LINE,
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
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
} from './common'

/**
 * Alonso, King of Naples, from what is said of him and what he says:
 *
 *   PROSPERO: "This King of Naples, being an enemy To me inveterate,
 *   hearkens my brother's suit" (Act 1, Scene 2)
 *   ARIEL: "Supposing that they saw the King's ship wrack'd, And his great
 *   person perish" (Act 1, Scene 2)
 *   ALONSO: "for, coming thence, My son is lost" (Act 2, Scene 1)
 *
 * So: a king in his crown and gown, his head bowed and his eye lowered,
 * grieving for the son he believes drowned. The play says nothing of his
 * face, his age or his colouring.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the King's
 * crown, a band with five tall points (the kit's CROWN at this size, from
 * ./common.tsx), in paper with an ink rim; dark hair under it, swept back to
 * the nape; clean-shaven; the small ruff every gentleman in the kit wears;
 * and a dark gown with a broad collar cut in paper over his shoulders. His
 * head is every man's head (MAN_HEAD). There is no red in this plate.
 *
 * Seeds: 6601 (the figure), 6602 to 6604 (its marks), 6610 (the ground).
 */

/** His head is bowed in grief. */
const ROT = 7

/** Dark hair swept back from the brow over the crown to the nape, under the crown. */
const HAIR = spline([
  [160, 64, 1],
  [150, 67],
  [133, 71],
  [119, 81],
  [112, 96, 1],
  [100, 100],
  [92, 110],
  [86, 126],
  [80, 146, 1],
  [68, 138],
  [56, 148, 1],
  [46, 128],
  [40, 100],
  [43, 70],
  [63, 41],
  [96, 27],
  [130, 26],
  [153, 37],
  [163, 51],
])

/** His shoulders in the gown. */
const BODY = spline([
  [-14, 336, 1],
  [-8, 294],
  [10, 258],
  [42, 232],
  [76, 220],
  [112, 226],
  [148, 220],
  [180, 232],
  [206, 260],
  [224, 296],
  [232, 336, 1],
])
/** The broad collar of the gown over his shoulders, cut in paper. */
const COLLAR = spline([
  [10, 262, 1],
  [40, 236],
  [76, 224],
  [112, 230],
  [150, 224],
  [182, 236],
  [208, 264, 1],
  [196, 284],
  [170, 266],
  [140, 256],
  [112, 260],
  [82, 256],
  [52, 266],
  [26, 286, 1],
])
/** The gown's front edges, falling from the collar. */
const FRONT = 'M150 270Q160 300 166 336M120 268Q122 300 120 336'
const RUFF = ruffBand(74, 152, 202, 224, 6, 0.06)

type Marks = { hair: string; body: string; collar: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const hair = locks(
    seed + 1,
    18,
    (t) => [158 - t * 44, 46 + t * 34],
    (t) => [70 - t * 20, 40 + t * 92],
    [0.9, 1.6],
    -9,
  )
  const body = folds(seed + 2, [20, 210], [290, 304], 7)
  // The broad collar's lie over the shoulders, cut in ink.
  const collar =
    'M30 270Q60 248 96 244M128 244Q166 246 194 270' +
    gouge(58, 254, 86, 244, 0.6, 0) +
    gouge(140, 246, 172, 254, 0.6, 0)
  const m = { hair, body, collar }
  marksBySeed.set(seed, m)
  return m
}

/** Alonso, bowed in grief, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function AlonsoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const hairClip = `${uid}-alo-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={FRONT} fill="none" stroke={PAPER} strokeWidth={LINE.bold} strokeLinecap="round" />
      {/* "his great person": the King's gown, its broad collar over his shoulders */}
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path
        d={m.collar}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-alo-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        {/* "This King of Naples": the crown */}
        <path d={CROWN} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={CROWN_BAND_LINE} fill="none" stroke={INK} strokeWidth={1.3} />
        {/* "My son is lost": the eye lowered, the brow lifted at its inner end */}
        <ManNoseAndMouth />
        <path
          d="M143.6 86.6Q152 84.6 165.4 86.4"
          fill="none"
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <ManEye look="down" />
      </g>
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, crown and shoulders. */
export function AlonsoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
        <path d={CROWN} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(34, 34, 0.88)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The island in the afternoon, the light ahead of him.
  ground = portraitGround('tempest-alonso', 6610, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.82 - (y / PH) * 0.12),
  )
  return ground
}

function AlonsoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <AlonsoKnockout />
        <AlonsoFigure uid={uid} seed={6601} />
      </g>
      <PortraitRule />
    </>
  )
}

export const alonsoPortrait: LinocutArt = { width: PW, height: PH, Draw: AlonsoPortrait }

const CROWN_AT = onTurnedHead(P, ROT, 104, 50)
const EYE_AT = onTurnedHead(P, ROT, MAN_EYE[0], MAN_EYE[1])
const COLLAR_AT = P.to(176, 252)

export const alonso: Portrait = {
  name: 'Alonso',
  art: alonsoPortrait,
  alt: 'A linocut portrait of Alonso, King of Naples, in profile, facing right: a clean-shaven man with his head bowed and his eye lowered under a sorrowful brow. On his dark hair, swept back to the nape, he wears a white crown with five tall points. He has a small white ruff, and a dark gown with a broad white collar lying over his shoulders. Three numbered red markers point to his crown, his lowered eye and the broad collar of his gown.',
  describedBy: [
    { phrase: 'This King of Naples', at: [CROWN_AT[0] - 52, CROWN_AT[1] - 14], to: CROWN_AT },
    { phrase: 'My son is lost', at: [EYE_AT[0] + 64, EYE_AT[1] - 26], to: EYE_AT },
    { phrase: 'his great person', at: [COLLAR_AT[0] + 52, COLLAR_AT[1] - 30], to: COLLAR_AT },
  ],
  where: 'Act 1, Scene 2; Act 2, Scene 1',
  note: 'Alonso helped Antonio take Milan from Prospero. On the island he grieves for the son he believes drowned, and in Act 5 he gives the dukedom back and asks Prospero’s pardon.',
  artNote:
    'The play does not describe his looks. His crown and gown are how the panels draw the King, in the dress of a king of the time.',
}

import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, ribbon, rng, wave } from '@/components/comics/linocut/carve'

import {
  ageLines,
  Armour,
  CLOAK,
  combedFromCrown,
  CUIRASS,
  CUIRASS_CHEST,
  EarCut,
  FRINGE_HAIR,
  FRINGE_PTS,
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
  PortraitRule,
  PW,
} from './common'

/**
 * Pompey (Sextus Pompeius), who holds the sea against the triumvirs, from his
 * own words and Caesar's:
 *
 *   POMPEY: "I shall do well. The people love me, and the sea is mine"
 *   (Act 2, Scene 1)
 *   CAESAR: "Since I saw you last, There is a change upon you." POMPEY:
 *   "Well, I know not What counts harsh Fortune casts upon my face, But in
 *   my bosom shall she never come To make my heart her vassal." (Act 2,
 *   Scene 6)
 *
 * So: a commander at sea, the sea behind him; his face marked by hard
 * fortune, which is what Caesar sees changed in it ("counts" are the scores
 * Fortune has cut there), cut as lines of care across the brow, at the eye
 * and down the cheek; his mouth set and his eye level; and his breast, where
 * he says Fortune shall never come, in his armour.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx: 'pompey'):
 * every man's head (MAN_HEAD), clean-shaven, his hair cropped and combed down
 * over the brow in a fringe (./common.tsx: FRINGE_HAIR, the kit's
 * CINNA_FRINGE), invented only to tell him from Antony and Caesar at his own
 * table, in the cuirass and a general's cloak. The play describes none of it.
 * Nothing of Menas's offer on the galley is drawn or pointed at. There is no
 * red in this plate but the markers.
 *
 * THE SEA. The ground is the sea he claims, not a room: a pale sky over a low
 * horizon, and the dark sea below it cut with the crests of the swell, as the
 * Twelfth Night portraits cut the sea behind Antonio.
 *
 * MARKERS. His words for his face sit on his cheek with no line, as the
 * pilot's "shrivelled his cheek" sits on Scrooge's; "in my bosom" comes to the
 * breast of his armour from in front, far below the face; "the sea is mine"
 * sits on the sea before him. No line crosses his face.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 10101 to 10104 (the figure's marks), 10105 (the armour), 10110 and
 * 10111 (the sky and the sea).
 */

type Marks = { hair: string; edge: string; nape: string; age: string }

const marks = once((): Marks => {
  // The hair combed forward from the crown and down over the brow.
  const hair = combedFromCrown(10101, FRINGE_PTS, [100, 64], 110, [5, 10], [0.5, 0.85], (x) =>
    clamp(0.3 + (x - 50) / 110),
  )
  // The fringe's edge: short strands cut in paper along it, so it reads as
  // hair over the brow and not as the rim of a cap.
  const r = rng(10102)
  let edge = ''
  for (let i = 0; i < 9; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 9
    const x = 166 - t * 34
    const y = 70 + t * 10 - Math.sin(t * Math.PI) * 1.5
    edge += gouge(x + 3, y - 12, x, y - 1, between(r, 0.7, 0.95), between(r, -0.5, 0.5))
  }
  const nape = napeShade(10103, 150, 118, 66, 120)
  // "What counts harsh Fortune casts upon my face": the lines of care.
  const age = ageLines(10104, 3)
  return { hair, edge, nape, age }
})

/** Pompey, head and shoulders, in armour, facing right in the 0..240 by 0..332 frame. */
export function PompeyFigure({ uid }: { uid: string }) {
  const m = marks()
  const clip = `${uid}-po-head`
  const hairClip = `${uid}-po-hair`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={FRINGE_HAIR} />
        </clipPath>
      </defs>
      <Armour seed={10105} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-po`} />
      <g clipPath={`url(#${clip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.5} />
        <path d={m.age} strokeWidth={1.1} />
      </g>
      <path
        d={FRINGE_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.edge} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      <ManBrow w={3} />
      <ManEye look="open" />
    </g>
  )
}

/** A thick ink halo round head and shoulders. */
function PompeyKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={CLOAK} />
      <path d={CUIRASS} />
      <path d={MAN_HEAD} />
      <path d={FRINGE_HAIR} />
    </g>
  )
}

const P = placing(30, 4, 0.98, true)

/** The horizon, low behind his shoulders. */
const HORIZON = 196

/** The sky and the sea behind him, in the portrait's own coordinates. */
const sea = once(() => {
  // The sky: rows of paper cuts, widest near the horizon, where the light is.
  const r = rng(10110)
  let sky = ''
  for (let y = 14; y < HORIZON - 4; y += 5.4) {
    let x = 10 + between(r, 0, 8)
    while (x < PW - 10) {
      const len = between(r, 24, 96)
      const x2 = Math.min(x + len, PW - 10)
      const L = clamp(0.1 + (y / HORIZON) * 0.8)
      sky += gouge(
        x,
        y + between(r, -0.5, 0.5),
        x2,
        y + between(r, -0.5, 0.5),
        0.3 + L * 2.2 * between(r, 0.7, 1.1),
      )
      x += len + between(r, 4, 14)
    }
  }
  // The sea: dark, cut with the crests of the swell, small and close at the
  // horizon and longer and further apart as they come in.
  const q = rng(10111)
  let water = ''
  for (let k = 0, y = HORIZON + 6; y < PH - 10; k++) {
    let x = 10 + between(q, -10, 20)
    while (x < PW - 10) {
      const len = between(q, 18, 40) + k * 5
      const x2 = Math.min(x + len, PW - 10)
      water += ribbon(
        wave(x, x2, y, 1.2 + k * 0.3, len * 0.9, between(q, 0, 6), 10),
        1 + k * 0.3,
        0.7,
      )
      x += len + between(q, 10, 30)
    }
    y += 4 + k * 1.5
  }
  return { sky, water }
})

function PompeyPortrait({ uid }: ArtProps) {
  const s = sea()
  return (
    <>
      <path d={s.sky} fill={PAPER} />
      <path d={`M10 ${HORIZON}H${PW - 10}`} stroke={PAPER} strokeWidth={1.4} />
      <path d={s.water} fill={PAPER} />
      <g transform={P.transform}>
        <PompeyKnockout />
        <PompeyFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const pompeyPortrait: LinocutArt = { width: PW, height: PH, Draw: PompeyPortrait }

const FACE_AT = P.to(128, 136)
const BREAST_AT = P.to(...CUIRASS_CHEST)

export const pompey: Portrait = {
  name: 'Pompey',
  art: pompeyPortrait,
  alt: 'A linocut portrait of Pompey in profile, facing left, head and shoulders, against the sea: behind him a pale sky over a low horizon, and the dark sea below it cut with the white crests of waves. He is clean-shaven, his dark hair cropped and combed down over his brow in a fringe, and his face is marked with lines of care across the forehead, at the corner of the eye and on the cheek; his eye is level and his mouth set. He wears a dark cuirass, its rim and riveted shoulder guard cut in white, with a dark cloak hanging behind his shoulders. Three numbered red markers sit on his cheek, point to the breast of his armour, and sit on the sea before him.',
  describedBy: [
    { phrase: 'What counts harsh Fortune casts upon my face', at: FACE_AT },
    {
      phrase: 'But in my bosom shall she never come',
      at: [BREAST_AT[0] - 44, BREAST_AT[1] + 6],
      to: BREAST_AT,
    },
    { phrase: 'the sea is mine', at: [34, 238] },
  ],
  where: 'Act 2, Scenes 1 and 6',
  note: 'Pompey is the son of the great Pompey whom Julius Caesar defeated, and he rules the sea. Caesar sees hard fortune written on his face, and Pompey answers that it shall never reach his heart. On his galley he refuses a crime that would make him master of the world, for honour’s sake, and so loses his chance.',
  artNote:
    'The play does not describe his looks beyond the marks of fortune Caesar sees. His fringe and his armour are how the panels draw him; the sea behind him is the sea he claims.',
}

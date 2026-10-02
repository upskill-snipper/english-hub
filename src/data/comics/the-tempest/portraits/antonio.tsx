import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManNoseAndMouth,
  NeckShadow,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  ruffBand,
  spline,
} from './common'

/**
 * Antonio, Prospero's brother, who took his dukedom, from his brother's
 * words and his own:
 *
 *   PROSPERO: "he needs will be Absolute Milan" (Act 1, Scene 2)
 *   SEBASTIAN, as Antonio sounds him out: "The setting of thine eye and
 *   cheek proclaim A matter from thee" (Act 2, Scene 1)
 *   ANTONIO: "And look how well my garments sit upon me; Much feater than
 *   before" and "I feel not This deity in my bosom" (Act 2, Scene 1)
 *
 * So: a man in the Duke of Milan's hat, upright, his eye set and level under
 * a lowered lid, his cheek set, his mouth shut; in a gentleman's doublet and
 * cloak that sit well on him. Nothing in his face is a villain's: the play
 * gives the setting of his eye and cheek, and nothing else of his looks.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): the Duke
 * of Milan's tall hat, a soft crown leaning a little back over a narrow brim,
 * its band cut in paper (the kit's MILAN_HAT, carried to this size point for
 * point, so it is the hat Prospero sends for in Act 5), dark hair at the nape
 * below it, clean-shaven, the small ruff every gentleman in the kit wears, a
 * doublet buttoned down the front and a cloak over the far shoulder. His
 * head is every man's head (MAN_HEAD). There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 6501 (the figure), 6502 to 6503 (its marks), 6510 (the ground).
 */

/**
 * The Duke of Milan's hat on MAN_HEAD: the kit's MILAN_HAT at this size, a
 * tall soft crown leaning a little back over a narrow brim, the hat of about
 * 1610. (Carried across point for point, the kit's crown was narrower than
 * this head, so the top of the brow stood out above the brim; widened to a
 * round dome, it read as a Victorian bowler. It is cut tall and a little
 * tapering, its top leaning back.)
 */
const HAT =
  'M20 86Q100 72 180 70L178 61Q170 61 161 63' +
  'C158 30 156 2 147 -16Q108 -30 70 -21C59 6 50 40 45 73Q33 75 22 78Z'
/** The band round the crown above the brim, cut in paper, and the soft crown's folds. */
const HAT_BAND = gouge(47, 60, 161, 55, 4.6, -1.6)
const HAT_FOLDS = gouge(86, -12, 76, 46, 1.4, 1.5) + gouge(122, -14, 128, 46, 1.2, -1.2)

/** Short dark hair at the back of the head below the brim, to the nape, its lower edge in short locks. */
const HAIR = spline([
  [42, 84, 1],
  [92, 78, 1],
  [99, 94],
  [94, 110],
  [89, 128],
  [84, 146],
  [78, 160],
  [70, 154],
  [64, 166],
  [56, 158],
  [48, 164],
  [44, 146],
  [40, 116],
])

/** His shoulders in a doublet, and a cloak over the far shoulder. */
const BODY = spline([
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
/** The cloak, falling over the far shoulder and down his back. */
const CLOAK = spline([
  [-10, 336, 1],
  [-6, 300],
  [8, 266],
  [36, 238],
  [70, 222],
  [96, 226],
  [84, 252],
  [76, 290],
  [74, 336, 1],
])
const RUFF = ruffBand(74, 152, 204, 226, 6, 0.06)
const BUTTONS: Pt[] = [
  [180, 248],
  [185, 264],
  [190, 280],
  [194, 296],
  [198, 312],
  [201, 328],
]

/** "The setting of thine eye": the lid lowered and level over an eye that looks straight ahead. */
function SetEye() {
  return (
    <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
      <path d="M146 99.4Q154 97.6 162.5 99.4" strokeWidth={2.5} />
      <path d="M150.2 100.6A3.4 2.8 0 0 0 158.4 100.6Z" fill={INK} stroke="none" />
      <path d="M147.5 104Q154.5 106.2 161 102.8" strokeWidth={1.1} />
      <path d="M146.5 94.6Q153.5 92.4 160.5 94.2" strokeWidth={LINE.hairline} />
      {/* the brow, level and a little lowered towards the nose */}
      <path d="M143 88.6Q153 86.6 165.6 90.6" strokeWidth={2.8} />
    </g>
  )
}

type Marks = { hair: string; body: string; cloak: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // Short strands cut in paper, combed back and down to the nape.
  let hair = ''
  for (let i = 0; i < 11; i++) {
    const t = (i + 0.5) / 11
    hair += gouge(
      94 - t * 46 + r() * 2,
      84 + t * 4,
      84 - t * 30 + r() * 2,
      132 + t * 24,
      0.8 + r() * 0.3,
      -2.4,
    )
  }
  const body = folds(seed + 1, [104, 178], [256, 272], 4)
  const cloak = folds(seed + 2, [4, 70], [258, 280], 5)
  const m = { hair, body, cloak }
  marksBySeed.set(seed, m)
  return m
}

/** Antonio, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function AntonioFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  return (
    <g>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.8} />
      {/* "how well my garments sit upon me": the cloak over his shoulder */}
      <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.cloak} fill={PAPER} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-ant-${seed}`} />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.hair} fill={PAPER} />
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      {/* "Absolute Milan": the Duke of Milan's hat */}
      <path d={HAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={HAT_FOLDS} fill={PAPER} />
      <path d={HAT_BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
      <ManNoseAndMouth />
      <SetEye />
      <path d={RUFF.ruff} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={RUFF.pleats} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
    </g>
  )
}

/** A thick ink halo round head, hat and shoulders. */
export function AntonioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAT} />
      <path d={BODY} />
    </g>
  )
}

const P = placing(46, 40, 0.88, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // The island by day, the light ahead of him, to the left.
  ground = portraitGround('tempest-antonio', 6510, (x, y) =>
    clamp(0.1 + ((PW - x - 50) / 280) * 0.84 - (y / PH) * 0.12),
  )
  return ground
}

function AntonioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <AntonioKnockout />
        <AntonioFigure uid={uid} seed={6501} />
      </g>
      <PortraitRule />
    </>
  )
}

export const antonioPortrait: LinocutArt = { width: PW, height: PH, Draw: AntonioPortrait }

const HAT_AT = P.to(104, 12)
const EYE_AT = P.to(...MAN_EYE)
const CLOAK_AT = P.to(40, 276)
const BREAST_AT = P.to(150, 286)

export const antonio: Portrait = {
  name: 'Antonio',
  art: antonioPortrait,
  alt: 'A linocut portrait of Antonio in profile, facing left: a clean-shaven man, upright, his mouth shut and his eye set and level under a lowered lid and a level brow. He wears a tall dark hat with a soft crown leaning a little back over a narrow brim, with a white band round it, and short dark hair shows at the back of his head below it. He has a small white ruff, a dark doublet with a row of pale buttons down the front, and a dark cloak over his far shoulder. Four numbered red markers point to his hat, his eye, his cloak and his breast.',
  describedBy: [
    { phrase: 'Absolute Milan', at: [HAT_AT[0] + 58, HAT_AT[1] - 4], to: HAT_AT },
    {
      phrase: 'The setting of thine eye and cheek',
      at: [EYE_AT[0] - 62, EYE_AT[1] + 4],
      to: EYE_AT,
    },
    {
      phrase: 'how well my garments sit upon me',
      at: [CLOAK_AT[0] + 34, CLOAK_AT[1] - 70],
      to: CLOAK_AT,
    },
    {
      phrase: 'I feel not This deity in my bosom',
      at: [BREAST_AT[0] - 54, BREAST_AT[1] + 4],
      to: BREAST_AT,
    },
  ],
  where: 'Act 1, Scene 2; Act 2, Scene 1',
  note: 'Antonio took his brother’s dukedom, and on the island he urges Sebastian to take the crown of Naples the same way. Sebastian reads the plan in his face before he says it. Antonio boasts that a duke’s clothes suit him, and that his conscience does not trouble him at all.',
  artNote:
    'The play does not describe his face. The Duke of Milan’s tall hat is how the panels mark the dukedom he took; his ruff, doublet and cloak are the dress of a gentleman of the time.',
}

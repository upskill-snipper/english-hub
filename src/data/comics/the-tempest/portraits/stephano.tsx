import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  Hand,
  MAN_EAR,
  MAN_HEAD_OPEN,
  MAN_MOUTH,
  ManBrow,
  ManEye,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
  type Digit,
} from './common'

/**
 * Stephano, the King's butler, from the stage direction that brings him on
 * and from what he and Alonso say:
 *
 *   "Enter Stephano singing; a bottle in his hand." (Act 2, Scene 2)
 *   STEPHANO: "by this bottle! which I made of the bark of a tree with mine
 *   own hands, since I was cast ashore." (Act 2, Scene 2)
 *   ALONSO: "Is not this Stephano, my drunken butler?" (Act 5, Scene 1)
 *
 * So: a man singing, his head back a little and his eye creased with
 * laughter, his song rising from his mouth in wavy lines cut in paper (SONG),
 * holding up the bottle he made of bark. Nothing else of his looks is given.
 * His drunkenness is left to the words: no red nose, no flush, no drunkard's
 * belly, as the kit says; the print does not mock him.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a servant
 * of the King's household in a plain doublet with no ruff, a plain linen
 * collar at the neck, and the broad-brimmed hat the kit invents only to tell
 * him at panel size (STEPHANO_HAT, carried to this size point for point: a
 * tall crown with a flat top over a broad brim that droops at its edges,
 * worn tipped back off the brow, its band cut in paper), with dark hair at
 * the nape below it. His bottle is the kit's BarkBottle at this size, a squat
 * flask of bark with a short neck and a stopper, printed flat in the spot
 * colour as the panels print it, its bark cut in ink; his hand is closed
 * round it, fingers and thumb cut apart. His head is every man's head
 * (MAN_HEAD_OPEN, singing).
 *
 * Seeds: 7001 (the figure), 7002 to 7004 (its marks), 7010 (the ground).
 */

/** His head is back a little: he is singing. */
const ROT = -7

/**
 * The broad-brimmed hat, worn tipped back: the kit's STEPHANO_HAT carried
 * to MAN_HEAD (x' = 99.5 + 3.53x, y' = 114.9 + 3.84y).
 */
const HAT =
  'M-9.9 108.8C0.7 91.9 25.4 78.8 48.7 72.7C48 38.1 53.6 -8 59.3 -32.5' +
  'C81.9 -44.8 120.7 -48.7 147.5 -41C151 -8 156 30.4 157.4 58.8' +
  'C177.2 51.2 198.3 48.1 211 59.6C214.6 63.4 213.9 70.4 208.9 72.6' +
  'C187.8 71.1 145.4 78 103 87.3C60.7 96.5 14.8 111.1 -9.9 108.8Z'
/** The hat's band, cut in paper (the kit's STEPHANO_HAT_CUT), and the felt's folds. */
const HAT_BAND = gouge(50, 58.8, 156.7, 45.8, 4, -1.6)
const HAT_FOLDS = gouge(84, -30, 78, 36, 1.3, 1.2) + gouge(124, -36, 128, 30, 1.2, -1)

/** Short dark hair at the nape, below the brim. */
const HAIR = spline([
  [42, 98, 1],
  [92, 88, 1],
  [100, 100],
  [93, 112],
  [89, 132],
  [78, 146],
  [60, 150],
  [47, 138],
  [41, 116],
])

/** His shoulders in a plain doublet. */
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
/** A plain linen collar at the neck: no ruff, he is a servant. */
const COLLAR = spline([
  [74, 218, 1],
  [112, 230],
  [150, 216, 1],
  [154, 228],
  [112, 242],
  [70, 230, 1],
])
const BUTTONS: Pt[] = [
  [178, 250],
  [182, 266],
  [186, 282],
]

/** His near forearm, raised from below the block to the bottle, and the cuff. */
const SLEEVE = spline([
  [176, 336, 1],
  [196, 296],
  [214, 262],
  [226, 240, 1],
  [250, 252, 1],
  [238, 276],
  [222, 308],
  [210, 336, 1],
])
const CUFF = spline([
  [222, 238, 1],
  [252, 250, 1],
  [248, 258, 1],
  [220, 246, 1],
])

/**
 * "which I made of the bark of a tree": the kit's BarkBottle at this size, a
 * squat flask with a short neck and a stopper, its bark cut in ink.
 */
const BOTTLE_AT: Pt = [238, 160]
const BOTTLE_S = 3
const BOTTLE =
  'M-3 0L3 0L3.4 6C8 8 9.6 11 9.4 15L9 26C8.6 29 5 31 0 31C-5 31 -8.6 29 -9 26L-9.4 15C-9.6 11 -8 8 -3.4 6Z'
const BOTTLE_STOPPER = 'M-2.4 0.6L-2.8 -4.4C-1 -5.4 1 -5.4 2.8 -4.4L2.4 0.6Z'
const BOTTLE_BARK =
  gouge(-5.6, 12, -6, 27, 0.7, 0.4) +
  gouge(-1, 11, -1.4, 29, 0.7, -0.3) +
  gouge(4, 12, 4.6, 28, 0.7, -0.3) +
  gouge(-7.4, 19, 7.4, 20, 0.5, 0.6)

/**
 * "Enter Stephano singing": his song, three short wavy ribbons cut in paper
 * rising from in front of his open mouth, as the panels cut music (Ariel's
 * song and his tune are ribbons of the same kind). In the head's frame, so
 * they turn with it. They begin well in front of the lips and the marker
 * points at them, never at the mouth (see SONG_AT).
 */
const SONG = [
  { from: [184, 138], deg: -42, len: 50 },
  { from: [189, 149], deg: -26, len: 60 },
  { from: [187, 160], deg: -12, len: 46 },
]
  .map(({ from: [x0, y0], deg: a, len }) => {
    const u = (a * Math.PI) / 180
    const pts: Pt[] = []
    for (let i = 0; i <= 16; i++) {
      const t = i / 16
      const s = 3.4 * Math.sin(t * Math.PI * 3)
      pts.push([
        x0 + Math.cos(u) * len * t - Math.sin(u) * s,
        y0 + Math.sin(u) * len * t + Math.cos(u) * s,
      ])
    }
    return ribbon(pts, 4.8, 0.6, true)
  })
  .join('')
/** The middle of the middle ribbon of the song, in the head's frame: where marker 2 points. */
const SONG_AT: Pt = [
  189 + Math.cos((-26 * Math.PI) / 180) * 34,
  149 + Math.sin((-26 * Math.PI) / 180) * 34,
]

// The hand closed round the bottle's body: the back of the hand towards us,
// four fingers across the bottle, the thumb over the first of them.
const HAND_AT: Pt = [226, 232]
const PALM = spline([
  [-4, 8],
  [-2, -6],
  [8, -12],
  [18, -8],
  [20, 6],
  [12, 14],
])
const DIGITS: Digit[] = [
  { from: [10, 9], to: [30, 8], w: 7.2 },
  { from: [12, 1.5], to: [33, 0], w: 7.6 },
  { from: [12, -6], to: [33, -8], w: 7.6 },
  { from: [10, -13], to: [30, -16], w: 7.2 },
  { from: [2, -10], to: [20, -24], w: 8 },
]
const KNUCKLES = 'M15 -14L16 12'

type Marks = { hair: string; body: string; sleeve: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  let hair = ''
  for (let i = 0; i < 7; i++) {
    const t = (i + 0.5) / 7
    hair += gouge(96 - t * 50, 96 + t * 6, 88 - t * 30, 138 + t * 6, 0.9 + r() * 0.3, -2)
  }
  const body = folds(seed + 1, [30, 150], [256, 272], 5)
  const sleeve = gouge(186, 318, 206, 272, 1.2, 1) + gouge(196, 330, 216, 284, 1, 1)
  const m = { hair, body, sleeve }
  marksBySeed.set(seed, m)
  return m
}

/** Stephano, singing, his bottle held up, facing right in the 0..240 by 0..332 frame. */
export function StephanoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  return (
    <g>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <Buttons pts={BUTTONS} r={2.6} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD_OPEN} fill={PAPER} />
        <NeckShadow id={`${uid}-ste-${seed}`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={m.hair} fill={PAPER} />
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <path d={HAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={HAT_FOLDS} fill={PAPER} />
        <path d={HAT_BAND} fill={PAPER} stroke={INK} strokeWidth={LINE.hairline} />
        {/* "Enter Stephano singing": the mouth open in song, and the song */}
        <path d={MAN_MOUTH} fill={INK} />
        <path d={SONG} fill={PAPER} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
          <path d="M165 124Q158 134 159 146" strokeWidth={1} />
        </g>
        <ManBrow w={2.6} raise={2} />
        <ManEye look="laugh" />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      {/* the bottle held up, and his hand round it */}
      <g transform={`translate(${BOTTLE_AT[0]} ${BOTTLE_AT[1]}) scale(${BOTTLE_S})`}>
        <path
          d={BOTTLE + BOTTLE_STOPPER}
          fill={RED}
          stroke={INK}
          strokeWidth={0.5}
          strokeLinejoin="round"
        />
        <path d={BOTTLE_BARK} fill={INK} />
      </g>
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <Hand
        transform={`translate(${HAND_AT[0]} ${HAND_AT[1]})`}
        palm={PALM}
        digits={DIGITS}
        lines={KNUCKLES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round head, hat, shoulders, arm and bottle. */
export function StephanoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD_OPEN} />
        <path d={HAT} />
      </g>
      <path d={BODY} />
      <path d={SLEEVE} />
      <path
        d={BOTTLE + BOTTLE_STOPPER}
        transform={`translate(${BOTTLE_AT[0]} ${BOTTLE_AT[1]}) scale(${BOTTLE_S})`}
      />
    </g>
  )
}

const P = placing(40, 82, 0.72)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // On the shore by day, the light ahead of him.
  ground = portraitGround('tempest-stephano', 7010, (x, y) =>
    clamp(0.1 + ((x - 40) / 280) * 0.8 - (y / PH) * 0.12),
  )
  return ground
}

function StephanoPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <StephanoKnockout />
        <StephanoFigure uid={uid} seed={7001} />
      </g>
      <PortraitRule />
    </>
  )
}

export const stephanoPortrait: LinocutArt = { width: PW, height: PH, Draw: StephanoPortrait }

const COLLAR_AT = P.to(104, 234)
/**
 * Marker 2 points at the song, never at his mouth: a red line ending on an
 * open mouth could be read as blood.
 *
 * REVIEWED 2 October 2026. It first ended in the air just in front of his
 * lips, 11 units off them, which at panel size was touching: a red line
 * running into an open mouth. His song is now cut in front of his mouth
 * (SONG), and the marker ends on it, well clear of the lips.
 */
const MOUTH_AT = onTurnedHead(P, ROT, SONG_AT[0], SONG_AT[1])
const BOTTLE_MARK = P.to(BOTTLE_AT[0], BOTTLE_AT[1] + 54)

export const stephano: Portrait = {
  name: 'Stephano',
  art: stephanoPortrait,
  alt: 'A linocut portrait of Stephano in profile, facing right: a clean-shaven man singing, his head back a little, his mouth open and his eye creased with laughter under a raised brow, and three short wavy white lines of his song rising from in front of his mouth. He wears a tall dark hat with a flat top and a broad brim, tipped back off his brow, with a white band round it; short dark hair shows at his nape. He has a plain white linen collar and a plain dark doublet with pale buttons. His near hand is raised in front of him, closed round a squat bottle with a short neck and a stopper, printed in red, its bark cut in black lines. Three numbered red markers point to his plain collar, his song and the bottle.',
  describedBy: [
    { phrase: 'my drunken butler', at: [COLLAR_AT[0] - 66, COLLAR_AT[1] + 18], to: COLLAR_AT },
    { phrase: 'Enter Stephano singing', at: [MOUTH_AT[0] + 88, MOUTH_AT[1] - 52], to: MOUTH_AT },
    {
      phrase: 'which I made of the bark of a tree',
      at: [BOTTLE_MARK[0] + 64, BOTTLE_MARK[1] + 12],
      to: BOTTLE_MARK,
    },
  ],
  where: 'Act 2, Scene 2; Act 5, Scene 1',
  note: 'The King’s butler came ashore on a cask of wine and made himself a bottle of bark to drink from. Caliban takes him for a god, and before long he means to be king of the island.',
  artNote:
    'The play says nothing of his looks. His broad-brimmed hat and plain doublet are how the panels draw him, in the dress of a servant of the time; the bottle is printed in red as it is in the panels, and his drunkenness is left to the words.',
}

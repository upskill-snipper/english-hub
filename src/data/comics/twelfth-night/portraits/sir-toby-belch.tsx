import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Buttons,
  folds,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  NeckShadow,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  turn,
} from './common'

/**
 * Sir Toby Belch, Olivia's uncle, as he answers Maria's warning that his
 * niece objects to his late nights, in Act 1, Scene 3:
 *
 *   "Confine? I'll confine myself no finer than I am. These clothes are good
 *   enough to drink in, and so be these boots too; and they be not, let them
 *   hang themselves in their own straps."
 *
 * So: a man who will not be smartened up, his clothes worn as they are,
 * loose at the neck. Olivia calls him "cousin" and he calls her "my niece",
 * so he is the older generation. Nothing else of his looks is given.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): an older
 * man, broad in the chest, his crown going bald, a fringe of hair round the
 * back of his head cut with strands (TOBY_FRINGE), a full rounded beard
 * covering his jaw (TOBY_BEARD, with the moustache a full beard has at this
 * size), and his collar worn loose and askew (LOOSE_BAND), the top of his
 * doublet left unbuttoned, so the shirt shows. His head is every man's head
 * (MAN_HEAD), thrown back a little, his eye creased with laughter. The kit's
 * riding boots are below the frame of a portrait; the passage names them.
 *
 * DRINK. The play says Sir Toby drinks, and his own words here say so; the
 * print does not mock it or make it glamorous. No cup, no red nose, no
 * flush, no drunkard's belly, as the kit rules. There is no red in this
 * plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 8801 (the figure), 8802 to 8804 (its marks), 8810 (the ground).
 */

/** His head thrown back a little: he is laughing off Maria's warning. */
const ROT = -7

/** The fringe of hair round the back of his bald crown, from above the ear to the nape. */
const FRINGE = spline([
  [124, 98, 1],
  [116, 92],
  [98, 90],
  [78, 92],
  [58, 98],
  [44, 114],
  [40, 136],
  [46, 158],
  [58, 174, 1],
  [70, 164],
  [82, 146],
  [90, 126],
  [100, 108],
  [114, 104],
])

/** The full rounded beard, from below the ear round the jaw and well below the chin. */
const BEARD = spline([
  [104, 128, 1],
  [114, 148],
  [134, 159],
  [152, 160],
  [163, 156, 1],
  [172, 158],
  [177, 170],
  [178, 188],
  [172, 206],
  [158, 220],
  [138, 226],
  [116, 220],
  [100, 202],
  [94, 176],
  [96, 150],
])
/** The moustache, its ends falling into the beard, clear of the lips' line. */
const MOUSTACHE = spline([
  [168, 136.6, 1],
  [173.6, 139.6],
  [175, 145.4],
  [171.6, 149.2, 1],
  [164.4, 147.4],
  [156, 152, 1],
  [156.6, 143.4],
  [162, 139],
])

/** His broad shoulders and chest in the doublet. */
const BODY = spline([
  [-16, 336, 1],
  [-10, 288],
  [8, 250],
  [40, 224],
  [80, 210],
  [116, 218],
  [154, 212],
  [190, 224],
  [220, 252],
  [240, 292],
  [248, 336, 1],
])
/**
 * "These clothes are good enough to drink in": the collar worn loose and
 * askew, its near corner turned up, over a doublet unbuttoned at the top so
 * the shirt shows in the gap.
 */
const SHIRT = 'M150 222L184 224L190 268L174 296L164 262Z'
const DOUBLET_FRONT = 'M184 224Q196 262 176 300M174 300Q190 318 200 336'
const LOOSE_BAND = spline([
  [60, 210, 1],
  [96, 222],
  [130, 226],
  [152, 216, 1],
  [170, 222],
  [186, 210, 1],
  [182, 234],
  [162, 246],
  [128, 248],
  [90, 242],
  [56, 226, 1],
])
const BAND_FOLD = 'M62 216Q104 232 150 220M152 217L164 240'
const BUTTONS: Pt[] = [
  [181, 306],
  [186, 322],
]

type Marks = { fringe: string; beard: string; body: string; lines: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)
  // Strands in the fringe, swept back round the head.
  let fringe = ''
  for (let i = 0; i < 12; i++) {
    const t = (i + 0.5) / 12
    const a = Math.PI * (1.15 + t * 0.62)
    const x = 92 + Math.cos(a) * 44
    const y = 132 + Math.sin(a) * 38
    fringe += gouge(x, y, x - 6 - r() * 4, y + 12 + r() * 6, 0.8 + r() * 0.3, -1)
  }
  // The beard's strands, curling down and round.
  let beard = ''
  for (let i = 0; i < 14; i++) {
    const t = (i + 0.5) / 14
    const x = 104 + t * 70
    const y = 158 + Math.sin(t * Math.PI) * 4
    beard += gouge(x, y, x - 4 + t * 6, y + 22 + Math.sin(t * Math.PI) * 26 + r() * 4, 0.8, -1.2)
  }
  beard += gouge(161, 141.6, 168, 146.4, 0.6, 0.5) + gouge(165, 139.4, 171.4, 145.6, 0.55, 0.5)
  // The lines of an older, laughing face: across the brow and the bald crown,
  // and the fold of the cheek.
  const lines =
    'M138 66Q150 62.4 162 66M134 56Q148 51 160 55M140 76Q150 73 162 75.6' +
    'M150 112Q143 122 145 132'
  const body = folds(seed + 1, [20, 150], [250, 270], 6)
  const m = { fringe, beard, body, lines }
  marksBySeed.set(seed, m)
  return m
}

/** Sir Toby, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function TobyFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const fringeClip = `${uid}-toby-fringe-${seed}`
  const beardClip = `${uid}-toby-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={fringeClip}>
          <path d={FRINGE} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
          <path d={MOUSTACHE} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d="M160 236L170 270M170 232L178 262" fill="none" stroke={INK} strokeWidth={0.9} />
      <path d={DOUBLET_FRONT} fill="none" stroke={PAPER} strokeWidth={1.4} strokeLinecap="round" />
      <Buttons pts={BUTTONS} r={2.8} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-toby-${seed}`} />
        {/* the bald crown, and the fringe of hair round the back of it */}
        <path
          d={FRINGE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <g clipPath={`url(#${fringeClip})`}>
          <path d={m.fringe} fill={PAPER} />
        </g>
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        {/* the full rounded beard and the moustache */}
        <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1.1} strokeLinejoin="round" />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill={PAPER} />
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
          <path d={m.lines} strokeWidth={1.1} />
          <path d="M143.5 86.5Q153 81 165.5 85.5" strokeWidth={2.8} />
        </g>
        <ManEye look="laugh" />
      </g>
      <path
        d={LOOSE_BAND}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <path
        d={BAND_FOLD}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
    </g>
  )
}

/** A thick ink halo round head, beard and shoulders. */
export function TobyKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={BEARD} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(34, 16, 0.86, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // Late at night in Olivia's house ("you must come in earlier o' nights"):
  // a dark ground, a little light ahead of him to the left.
  ground = portraitGround('twelfth-night-sir-toby', 8810, (x, y) =>
    clamp(0.02 + ((PW - x - 90) / 280) * 0.6 - (y / PH) * 0.08),
  )
  return ground
}

function TobyPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <TobyKnockout />
        <TobyFigure uid={uid} seed={8801} />
      </g>
      <PortraitRule />
    </>
  )
}

export const sirTobyPortrait: LinocutArt = { width: PW, height: PH, Draw: TobyPortrait }

const CHEST_AT = P.to(112, 280)
/*
 * Marker lines never end at a mouth, a chin or a beard: a red line there
 * reads as blood at a glance. The line to his clothes stops at the open
 * neck of his doublet, where the shirt shows, well below the beard. (It
 * first went to the collar's turned-up corner, just under the beard.)
 */
const COLLAR_AT = P.to(170, 256)

export const sirToby: Portrait = {
  name: 'Sir Toby Belch',
  art: sirTobyPortrait,
  alt: 'A linocut portrait of Sir Toby Belch, Olivia’s uncle, in profile, facing left: a broad, heavy-shouldered older man with his head thrown back a little and his eye creased with laughter. His crown is bald, lined across the brow, with a fringe of dark hair round the back of his head, and a full, rounded dark beard and moustache cover his jaw. His white collar is worn loose and askew, one corner turned up, and his dark doublet hangs open at the top over his white shirt. Two numbered red markers point to his broad chest and the open neck of his doublet.',
  describedBy: [
    {
      phrase: 'I’ll confine myself no finer than I am',
      at: [CHEST_AT[0] - 44, CHEST_AT[1] + 4],
      to: CHEST_AT,
    },
    {
      phrase: 'These clothes are good enough to drink in',
      at: [COLLAR_AT[0] - 58, COLLAR_AT[1] - 16],
      to: COLLAR_AT,
    },
  ],
  where: 'Act 1, Scene 3',
  passage:
    'Confine? I’ll confine myself no finer than I am. These clothes are good enough to drink in, and so be these boots too; and they be not, let them hang themselves in their own straps.',
  note: 'Maria warns Sir Toby to keep within “the modest limits of order”, and he twists her word “confine” into a joke about his clothes. He means to live as he likes in his niece’s house, and the play’s argument between order and misrule starts here.',
  artNote:
    'The play does not describe his face. His bald crown, beard and loose collar are how the panels draw him; the boots the passage names are below the edge of a portrait.',
}

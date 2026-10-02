import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
  MAN_EAR,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Tear,
  turn,
} from './common'

/**
 * Caliban, from his own words in Act 3, Scene 2, when Ariel's music
 * frightens Stephano and Trinculo:
 *
 *   "Be not afeard. The isle is full of noises, Sounds, and sweet airs, that
 *   give delight, and hurt not. Sometimes a thousand twangling instruments
 *   Will hum about mine ears; and sometimes voices, That, if I then had
 *   wak'd after long sleep, Will make me sleep again: and then, in dreaming,
 *   The clouds methought would open and show riches Ready to drop upon me;
 *   that, when I wak'd, I cried to dream again."
 *
 * So: a man with his head lifted, looking up at clouds that part to let
 * light through, a tear on his cheek, his ear, which hears the island's
 * music, plain beside his thick hair. The riches the clouds show are small
 * sparks of light falling from the gap; their gold is left to the words.
 *
 * THE CARE THIS PORTRAIT TAKES. The other characters call Caliban by many
 * names, and the play is read today through what was done to him and to
 * people like him. None of their names is drawn, quoted or alluded to here.
 * He is drawn as the figure kit draws him (../panels/people.tsx), as a man,
 * with the same care as every other figure: his head is every man's head in
 * these portraits (MAN_HEAD), the same brow and the same ordinary nose as
 * Prospero's or Ferdinand's, weathered only by the lines of a man who works
 * outdoors ("he does make our fire, Fetch in our wood", Act 1, Scene 2): a
 * crease at the eye, the line from the nose to the mouth, two lines on the
 * brow. His dark hair is thick, over the crown and down to the collar, its
 * edge broken into locks and cut as neatly as anyone's, with his ear cut in
 * paper beside it; not a wild mane. He wears the coarse loose coat the play
 * calls his gaberdine (Act 2, Scene 2), its weave cut in short paper marks.
 * No scales, fins, claws, fur, animal features or caricature of any kind;
 * no chain, which the play never gives him; and no flecks on his face for the
 * freckles Prospero names in an insult, because at this size they read as
 * scales or a rash. There is no red in this plate.
 *
 * Seeds: 6401 (the figure), 6402 to 6405 (its marks), 6410 (the ground),
 * 6411 (the light through the clouds).
 */

/** His head is lifted to the clouds. */
const ROT = -8

/**
 * Thick dark hair over the crown and down to the collar, in the head's
 * frame: a man's hair, with a sideburn in front of the ear, the ear clear,
 * and the lower edge falling from behind the ear to the collar in a few
 * locks, as the kit's broken edge is at panel size: longer than Ferdinand's,
 * which stops at the jaw.
 *
 * WHY NOT THE KIT'S OUTLINE ENLARGED (2 October 2026). Carried to this size
 * point for point, the kit's small tufts stood off a bare temple like a
 * crest, which could be taken for a headdress; and a smooth outline falling
 * level to the jaw read as a woman's bob. A sideburn, and an edge that rises
 * from the nape to the ear, are what make it a man's hair at this size.
 */
const HAIR = spline([
  [164, 62, 1],
  [160, 46],
  [148, 33],
  [128, 25],
  [104, 23],
  [80, 27],
  [60, 37],
  [44, 54],
  [35, 76],
  [32, 102],
  [33, 130],
  [37, 156],
  [41, 180],
  [44, 204],
  [47, 226],
  [55, 218],
  [62, 234],
  [70, 220],
  [78, 230],
  [85, 212],
  [90, 192],
  [93, 172],
  [95, 156, 1],
  [92, 134],
  [94, 112],
  [102, 102],
  [114, 100],
  [120, 105],
  [122, 118],
  [124, 131, 1],
  [130, 126],
  [131, 108],
  [136, 88],
  [146, 76],
  [156, 68],
])

/** The coarse loose coat over his broad shoulders. */
const BODY = spline([
  [-12, 336, 1],
  [-6, 294],
  [12, 258],
  [44, 232],
  [80, 220],
  [116, 228],
  [150, 222],
  [184, 234],
  [210, 262],
  [228, 300],
  [236, 336, 1],
])
/** The rough open neck of the coat, its edge rolled and frayed. */
const NECK_EDGE = spline([
  [70, 226, 1],
  [92, 238],
  [116, 242],
  [140, 236],
  [158, 222, 1],
  [162, 232],
  [156, 244],
  [142, 252],
  [116, 256],
  [90, 252],
  [72, 240],
  [62, 232, 1],
])

/** Where the tear sits on his cheek, below the outer corner of the eye. */
const TEAR_AT: Pt = [140, 126]

// The clouds and the light, in the portrait's own coordinates: two banks of
// cloud parting above and ahead of him, the light pouring through the gap,
// and small sparks falling from it.
const LIGHT: Pt = [274, 46]
const CLOUD_L = spline([
  [128, -8, 1],
  [262, -8, 1],
  [258, 14],
  [264, 30],
  [256, 46],
  [258, 60],
  [244, 66],
  [232, 76],
  [214, 72],
  [200, 80],
  [182, 74],
  [166, 80],
  [150, 72],
  [136, 70],
  [128, 56],
  [132, 40],
  [124, 26],
  [130, 10],
])
const CLOUD_R = spline([
  [296, 12],
  [312, 6],
  [328, 10, 1],
  [328, 128, 1],
  [314, 122],
  [304, 108],
  [306, 94],
  [294, 84],
  [296, 70],
  [286, 58],
  [290, 44],
  [284, 30],
])
/** Their edges lit by the light in the gap, cut in paper, and curls in the cloud. */
const LINING =
  gouge(258, 26, 254, 50, 1.6, -1) +
  gouge(250, 62, 230, 74, 1.4, 1) +
  gouge(288, 34, 290, 54, 1.6, 1.2) +
  gouge(292, 70, 302, 100, 1.5, 1.2) +
  gouge(150, 40, 176, 34, 1, -1.2) +
  gouge(186, 52, 214, 46, 1, -1.2) +
  gouge(210, 26, 236, 24, 1, -1)
const CLOUD_CURLS =
  'M168 40C164 32 176 28 180 35C182 40 176 43 173 39' +
  'M222 50C218 42 230 38 234 45C236 50 230 53 227 49' +
  'M306 30C302 22 314 18 318 25C320 30 314 33 311 29'
/** "riches Ready to drop upon me": sparks of light falling from the gap. */
const SPARKS: [number, number, number][] = [
  [270, 92, 6],
  [284, 120, 5],
  [254, 116, 4.6],
  [272, 146, 5],
]

type Marks = {
  hair: string
  lines: string
  body: string
  weave: string
  edge: string
}

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Strands cut in paper: back over the crown from the brow, then down the
  // back of the head into the locks at the collar.
  // Strands cut in paper through the whole of the hair: swept back from
  // the hairline over the crown and down to the locks at the nape, so it
  // reads as thick hair and never as a hood.
  const hair =
    locks(
      seed + 1,
      20,
      (t) => [160 - t * 116, 52 - t * 22 + t * t * 34],
      (t) => [94 - t * 46, 156 + t * 70],
      [1, 1.7],
      -12,
      1,
    ) +
    locks(
      seed + 2,
      8,
      (t) => [140 - t * 40, 30 - t * 4],
      (t) => [52 - t * 14, 60 + t * 36],
      [0.9, 1.5],
      -6,
    ) +
    locks(
      seed + 4,
      3,
      (t) => [134 - t * 6, 92 + t * 6],
      (t) => [126 - t * 2, 124 + t * 4],
      [0.8, 1.1],
      -1,
    )

  // A face that works outdoors: the crease at the eye, two lines on the
  // brow. (The line from the nose to the mouth is ManNoseAndMouth's.)
  let lines = 'M141 62Q151 59.5 161 63M142 71Q152 69 163 72.6'
  for (let i = 0; i < 3; i++)
    lines += `M145 ${n(101 + i * 3)}L${n(136 - between(r, 0, 3))} ${n(98 + i * 4.5)}`

  const body = folds(seed + 3, [12, 200], [262, 280], 6)
  // The coarse weave: short cuts in two directions, loosely set.
  let weave = ''
  for (let i = 0; i < 46; i++) {
    const x = between(r, 0, 226)
    const y = between(r, 262, 334)
    if (Math.hypot(x - 112, y - 250) < 46) continue
    weave += i % 2 ? gouge(x, y, x + 6, y + 0.6, 0.7) : gouge(x, y, x + 0.6, y + 6, 0.7)
  }
  // The frayed edge of the coat's neck: short cuts across it.
  let edge = ''
  for (let i = 0; i < 9; i++) {
    const t = (i + 0.5) / 9
    const x = 72 + t * 86
    const y = 238 + Math.sin(Math.PI * t) * 12
    edge += gouge(x, y, x + between(r, -2, 2), y + 10, 0.8)
  }

  const m = { hair, lines, body, weave, edge }
  marksBySeed.set(seed, m)
  return m
}

/** Caliban, his head lifted, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function CalibanFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const headClip = `${uid}-cal-head-${seed}`
  const hairClip = `${uid}-cal-hair-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* the coarse coat the play calls his gaberdine */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body + m.weave} fill={PAPER} />
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-cal-${seed}`} />
        <g clipPath={`url(#${headClip})`}>
          <path
            d={m.lines}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        {/* "hum about mine ears": the ear, plain beside the hair */}
        <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
        <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
        <ManNoseAndMouth />
        <ManBrow w={2.8} raise={1.5} />
        <ManEye look="up" />
        {/* "I cried to dream again": a tear on his cheek */}
        <Tear x={TEAR_AT[0]} y={TEAR_AT[1]} s={1} track={12} />
      </g>
      <path
        d={NECK_EDGE}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={m.edge} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round head, hair and shoulders. */
export function CalibanKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(26, 52, 0.86)

type Sky = { ground: string; light: string; sparks: string }
let sky: Sky | undefined
function skyCuts(): Sky {
  if (sky) return sky
  // Dark, lightening towards the gap in the clouds above and ahead of him.
  const ground = portraitGround('tempest-caliban', 6410, (x, y) =>
    clamp(0.05 + 0.6 * Math.max(0, 1 - Math.hypot(x - LIGHT[0], y - LIGHT[1]) / 210)),
  )
  const r = rng(6411)
  const light = rays(r, LIGHT[0], LIGHT[1], { from: 12, to: 150, every: 9, width: 2.2 })
  let sparks = ''
  for (const [x, y, s] of SPARKS)
    sparks += gouge(x - s, y, x + s, y, s * 0.32) + gouge(x, y - s * 1.3, x, y + s * 1.3, s * 0.32)
  sky = { ground, light, sparks }
  return sky
}

function CalibanPortrait({ uid }: ArtProps) {
  const s = skyCuts()
  return (
    <>
      <path d={s.ground} fill={PAPER} />
      <path d={s.light} fill={PAPER} />
      <path d={CLOUD_L} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={CLOUD_R} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d={LINING} fill={PAPER} />
      <path d={CLOUD_CURLS} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      <path d={s.sparks} fill={PAPER} />
      <g transform={P.transform}>
        <CalibanKnockout />
        <CalibanFigure uid={uid} seed={6401} />
      </g>
      <PortraitRule />
    </>
  )
}

export const calibanPortrait: LinocutArt = { width: PW, height: PH, Draw: CalibanPortrait }

const EAR_AT = onTurnedHead(P, ROT, 104, 128)
const GAP_AT: [number, number] = [LIGHT[0] - 2, LIGHT[1] + 6]
/*
 * Marker lines on a face never cross a mouth, a chin or a beard: a red line
 * there reads as blood at a glance. A line to the cheek comes from behind
 * and above the head, over the hair, never across the lips.
 *
 * REVIEWED 2 October 2026. The tear's marker first came from straight below
 * it, so a red line ran from the tear down his cheek, over the jaw and down
 * his neck: at a glance, a tear of blood. It comes down from behind his head
 * now, over the hair, and stops at the tear, so nothing red runs below it.
 */
const TEAR_MARK = onTurnedHead(P, ROT, TEAR_AT[0], TEAR_AT[1] + 4)

export const caliban: Portrait = {
  name: 'Caliban',
  art: calibanPortrait,
  alt: 'A linocut portrait of Caliban, a man, in profile, facing right, his head lifted to look up at the sky. His thick dark hair covers his head and falls to his collar, its edge broken into locks, and his ear shows plainly beside it. His face is weathered by a crease at the eye and lines on the brow, and a single tear runs down his cheek. He wears a coarse dark coat, its weave cut in short white marks, open at the neck with a rough, frayed edge. Above and ahead of him two dark banks of cloud part, their edges lit, and light pours through the gap between them in rays, with small sparks of light falling from it. Three numbered red markers point to his ear, the gap in the clouds and the tear.',
  describedBy: [
    { phrase: 'hum about mine ears', at: [EAR_AT[0] - 54, EAR_AT[1] - 30], to: EAR_AT },
    {
      phrase: 'The clouds methought would open',
      at: [GAP_AT[0] - 70, GAP_AT[1] + 26],
      to: GAP_AT,
    },
    { phrase: 'I cried to dream again', at: [TEAR_MARK[0] - 66, TEAR_MARK[1] - 94], to: TEAR_MARK },
  ],
  where: 'Act 3, Scene 2',
  passage:
    'Be not afeard. The isle is full of noises, Sounds, and sweet airs, that give delight, and hurt not. Sometimes a thousand twangling instruments Will hum about mine ears; and sometimes voices, That, if I then had wak’d after long sleep, Will make me sleep again: and then, in dreaming, The clouds methought would open and show riches Ready to drop upon me; that, when I wak’d, I cried to dream again.',
  note: 'Ariel’s invisible music has frightened Stephano and Trinculo, and it is Caliban, who knows the island, who calms them. He speaks some of the most beautiful verse in the play in the middle of a plot against Prospero.',
  artNote:
    'The other characters call Caliban names, and the print takes none of them up. He is cut as every man in these prints is, weathered, his thick dark hair to the collar, in the coarse coat the play calls his gaberdine.',
}

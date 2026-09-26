import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rng } from '@/components/comics/linocut/carve'

import {
  folds,
  locks,
  MAN_EAR,
  MAN_EYE,
  MAN_HEAD,
  ManBrow,
  ManEye,
  neckShade,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
} from './common'

/**
 * Tubal, from the only two things the play says of him, both in Shylock's
 * mouth:
 *
 *   "Tubal, a wealthy Hebrew of my tribe, Will furnish me" (Act 1, Scene 3)
 *   "I thank thee, good Tubal." ... "Go, good Tubal, at our synagogue,
 *   Tubal." (Act 3, Scene 1)
 *
 * He is the one person in the play who comes to Shylock as a friend, and
 * the one who brings him the news from Genoa. So: a man of middle years,
 * grave and kindly, his eye steady, in the good long gown of a man of means
 * with a broad fur collar. The play says nothing of his face.
 *
 * Tubal is not in the figure kit (../panels/people.tsx), so this portrait
 * sets his look, drawn as the kit draws a man it has not described: every
 * man's head (MAN_HEAD), and one thing to tell him from the rest. His is a
 * short dark beard and short dark hair, bareheaded, so he is known at a
 * glance from Shylock's long grey beard and bare crown and from the
 * clean-shaven Christians. The fur collar stands for "wealthy"; there is no
 * money, no purse and no scales anywhere in the plate, and nothing marks him
 * out by his faith, as nothing marks Shylock. A panel that draws him should
 * give him the same beard, hair and collar. There is no red in this plate.
 *
 * He faces left, towards Shylock's portrait, so the figure is drawn facing
 * right and flipped.
 *
 * Seeds: 4901 (the figure), 4902 to 4906 (its marks), 4910 (the ground).
 */

/** Short dark hair, over the crown from the brow to the nape. */
const HAIR = spline([
  [158, 60, 1],
  [148, 62],
  [130, 66],
  [118, 80],
  [112, 96, 1],
  [100, 100],
  [92, 112],
  [88, 128],
  [80, 144],
  [62, 150],
  [47, 138],
  [40, 108],
  [44, 70],
  [64, 42],
  [96, 29],
  [130, 28],
  [152, 38],
  [162, 50],
])
/** A short dark beard, from under the ear along the jaw to the chin, and the moustache. */
const BEARD = spline([
  [108, 132, 1],
  [118, 150],
  [136, 160],
  [154, 160],
  [164, 154, 1],
  [172.5, 156],
  [175, 166],
  [173, 180],
  [164, 190],
  [148, 196],
  [132, 194],
  [116, 180],
  [106, 160],
])
/**
 * The moustache, falling from under the nose at both ends into the beard, so
 * that beard and moustache are one: never a small patch under the nose.
 */
const MOUSTACHE = spline([
  [168.5, 135.5, 1],
  [174.5, 140],
  [177, 150],
  [175, 158, 1],
  [167, 153],
  [155, 158, 1],
  [154, 147],
  [161, 139],
])

/** The long gown over his shoulders. */
export const TUBAL_BODY = spline([
  [-14, 336, 1],
  [-10, 292],
  [6, 256],
  [38, 226],
  [72, 212],
  [110, 218],
  [150, 212],
  [186, 226],
  [214, 260],
  [232, 298],
  [240, 336, 1],
])
/** The broad fur collar, over the shoulders behind and falling before. */
const COLLAR_BACK = spline([
  [-12, 296, 1],
  [2, 258],
  [30, 226],
  [66, 208],
  [100, 212, 1],
  [96, 244],
  [80, 274],
  [62, 302],
  [52, 336, 1],
  [-14, 336, 1],
])
const COLLAR_FRONT = spline([
  [158, 206, 1],
  [192, 226],
  [218, 262],
  [232, 300],
  [238, 336, 1],
  [194, 336, 1],
  [188, 298],
  [174, 262],
  [150, 232],
])

type Marks = { hair: string; beard: string; fur: string; body: string; neck: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const r = rng(seed)

  // Short hair with a little wave in it: short paper locks on the ink.
  const hair = locks(
    seed + 1,
    20,
    (t) => [156 - t * 44, 44 + t * 40],
    (t) => [76 - t * 26, 38 + t * 96],
    [0.9, 1.4],
    -8,
    1.4,
  )
  // The beard: strands cut in paper, falling from the jaw and the lip.
  const beard =
    locks(
      seed + 4,
      16,
      (t) => [110 + t * 58, 138 + t * 16],
      (t) => [124 + t * 44, 186 + Math.sin(Math.PI * t) * 8],
      [0.9, 1.4],
      -2,
    ) +
    gouge(160, 139, 171, 145, 0.7, 0.5) +
    gouge(158, 143, 167, 148, 0.6, 0.5)
  // Fur: short curved cuts along the collar, thick at its edge.
  let fur = ''
  const edge = (t: number, back: boolean): [number, number] =>
    back ? [98 - t * 50, 214 + t * 120] : [156 + t * 34, 210 + t * 122]
  for (const back of [true, false]) {
    for (let i = 0; i < 70; i++) {
      const t = (i + between(r, 0, 1)) / 70
      const [x, y] = edge(t, back)
      const dir = back ? -1 : 1
      const off = between(r, 3, 34)
      const px = x + dir * off
      const len = between(r, 6, 11)
      fur += gouge(px, y, px + dir * len * 0.5, y + len, between(r, 0.9, 1.5), dir * 1.4)
    }
  }

  const body = folds(seed + 2, [100, 150], [256, 272], 4)
  const neck = neckShade(seed + 3)

  const m = { hair, beard, fur, body, neck }
  marksBySeed.set(seed, m)
  return m
}

/** Tubal in his gown, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function TubalFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const clip = `${uid}-tub-head-${seed}`
  const hairClip = `${uid}-tub-hair-${seed}`
  const beardClip = `${uid}-tub-beard-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={TUBAL_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.neck} fill="none" stroke={INK} strokeWidth={1.3} />
        <path
          d="M141 72Q151 70 162 73.5M140 104L134 101M140 108L135 110"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
      </g>
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      <path d={MOUSTACHE} fill={INK} stroke={PAPER} strokeWidth={1.1} strokeLinejoin="round" />
      <path
        d="M171 139Q175 146 174.5 154M167.5 139.5Q170 146 168.5 151M163 141Q164 147 160 153"
        fill="none"
        stroke={PAPER}
        strokeWidth={0.8}
        strokeLinecap="round"
      />
      <path
        d="M172.5 128C168.5 125.5 168.5 120 174 119"
        fill="none"
        stroke={INK}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <ManBrow w={2.8} />
      {/* "good Tubal": the eye open, steady and kind */}
      <ManEye look="open" />
      <path d={COLLAR_BACK} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={COLLAR_FRONT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.fur} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round head, hair, beard and gown. */
export function TubalKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={BEARD} />
      <path d={TUBAL_BODY} />
    </g>
  )
}

const P = placing(28, 4, 1.0, true)

let ground: string | undefined
function portraitCuts() {
  if (ground) return ground
  // A street in Venice by day, the light ahead of him, to the left.
  ground = portraitGround('tubal', 4910, (x, y) =>
    clamp(0.12 + ((PW - x - 40) / 280) * 0.88 - (y / PH) * 0.1),
  )
  return ground
}

function TubalPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={portraitCuts()} fill={PAPER} />
      <g transform={P.transform}>
        <TubalKnockout />
        <TubalFigure uid={uid} seed={4901} />
      </g>
      <PortraitRule />
    </>
  )
}

export const tubalPortrait: LinocutArt = { width: PW, height: PH, Draw: TubalPortrait }

const COLLAR_AT = P.to(200, 290)
const EYE_AT = P.to(...MAN_EYE)

export const tubal: Portrait = {
  name: 'Tubal',
  art: tubalPortrait,
  alt: 'A linocut portrait of Tubal in profile, facing left: a man of middle years, bareheaded, with short dark hair and a short dark beard and moustache, his eye open and steady under a dark brow. He wears a long dark gown with a broad collar of fur, cut in short white strokes, over his shoulders and falling down his front. Nothing is in his hands. Two numbered red markers point to his fur collar and his eye.',
  describedBy: [
    {
      phrase: 'a wealthy Hebrew of my tribe',
      at: [COLLAR_AT[0] + 8, COLLAR_AT[1] - 60],
      to: COLLAR_AT,
    },
    { phrase: 'good Tubal', at: [EYE_AT[0] - 50, EYE_AT[1] - 46], to: EYE_AT },
  ],
  where: 'Act 1, Scene 3; Act 3, Scene 1',
  note: 'Tubal is the only character who comes to Shylock as a friend. In Act 3, Scene 1 his news swings Shylock between grief for Jessica and triumph over Antonio, and Shylock sends him away with a request to meet at the synagogue.',
  artNote:
    'The play does not describe him. His beard, hair and fur-collared gown are chosen only to tell him from Shylock and the others, in the dress of a man of means in Venice at the time.',
}

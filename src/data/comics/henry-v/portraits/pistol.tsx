import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'

import {
  Beard,
  beardStrands,
  EarCut,
  JackNeck,
  locks,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
  napeShade,
  NeckShadow,
  onTurnedHead,
  once,
  PH,
  placing,
  POINTED_BEARD_P,
  portraitGround,
  PortraitRule,
  PW,
  quilting,
  spline,
  turn,
} from './common'

/**
 * Ancient Pistol, the ensign, as Gower sees through him and his kind:
 *
 *   GOWER: "Why, 't is a gull, a fool, a rogue, that now and then goes to the
 *   wars, to grace himself at his return into London under the form of a
 *   soldier. ... and what a beard of the general's cut and a horrid suit of
 *   the camp will do among foaming bottles and ale-wash'd wits, is wonderful
 *   to be thought on." (Act 3, Scene 6)
 *   GOWER, as Pistol comes on in a temper: "Why, here he comes, swelling like
 *   a turkey-cock." (Act 5, Scene 1)
 *
 * So: a beard cut to a point like a commander's; the rough coat of a soldier
 * in the field, worn for show; and the chest puffed out, the head held high,
 * looking down his nose. Gower's first words, which are abuse, are not put on
 * the card: the markers point only at what he describes.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx, 'pistol'):
 * every man's head (MAN_HEAD), with the dark pointed beard the kit gives him
 * (the Lear kit's CORNWALL_BEARD, cut again at this size as ./common.tsx's
 * POINTED_BEARD_P) and a moustache; his dark hair swept back to the collar;
 * the small cap tilted back with a feather curling back from it (the Merchant
 * kit's GRATIANO_CAP and GRATIANO_FEATHER, cut at this size as the Gratiano
 * portrait cuts them), which the kit invents only so that he is known at a
 * glance among the soldiers; and the soldier's padded jack, its front pushed
 * out. His sword stays out of the picture.
 *
 * The camp by day, the light ahead of him. There is no red in this plate.
 *
 * He faces left, so the figure is drawn facing right and flipped.
 *
 * MARKERS. "a beard of the general's cut" sits on the beard with no line; "a
 * horrid suit of the camp" comes to the jack at his shoulder from behind, at
 * its own height; "swelling like a turkey-cock" comes to his chest from in
 * front, at its own height, well below his beard. No line crosses his face.
 *
 * Seeds: 10101 to 10106 (the figure's marks), 10110 (the ground).
 */

/** His head held high: he is pleased with himself. */
const LIFT = -8
/** The small cap sits tilted back on his head, its front higher than its back. */
const CAP_TILT = 'rotate(-16 100 58)'

/** The small cap: a soft crown over a narrow band, set on the back of the head. */
const CAP = spline([
  [58, 72, 1],
  [50, 54],
  [62, 34],
  [92, 23],
  [122, 24],
  [140, 36],
  [143, 55, 1],
  [116, 60],
  [84, 64],
])
const CAP_BAND = spline([
  [54, 78, 1],
  [56, 66],
  [100, 58],
  [146, 52],
  [148, 62, 1],
  [100, 68],
])
/** The feather, long, curling back from the band at the back of the cap and over at its tip. */
const FEATHER_SPINE: Pt[] = [
  [62, 60],
  [50, 43],
  [35, 30],
  [18, 24],
  [4, 27],
  [-4, 37],
  [-1, 49],
  [8, 53],
]
const FEATHER = ribbon(FEATHER_SPINE, 24, 0.5)

/** Dark hair, swept back from the brow under the cap to the collar. */
const HAIR = spline([
  [161, 64, 1],
  [150, 66],
  [133, 70],
  [119, 80],
  [112, 96, 1],
  [100, 100],
  [92, 110],
  [86, 128],
  [82, 154, 1],
  [70, 150],
  [58, 164, 1],
  [48, 140],
  [41, 108],
  [44, 76],
  [64, 46],
  [96, 30],
  [130, 28],
  [153, 38],
  [163, 52],
])

/** The jack, its front pushed out: "swelling like a turkey-cock". */
const JACK_SWOLLEN = spline([
  [-12, 340, 1],
  [-6, 300],
  [8, 266],
  [36, 242],
  [68, 230],
  [104, 232],
  [150, 226],
  [196, 232],
  [232, 254],
  [254, 290],
  [260, 340, 1],
])

type Marks = {
  quilts: string
  hair: string
  cap: string
  feather: string
  nape: string
  beard: string
}

const marks = once((): Marks => {
  const r = rng(10101)
  const quilts = quilting(
    10102,
    [26, 50, 74, 98, 122, 150, 178, 206, 230],
    (x) => 240 + Math.abs(x - 120) * 0.16,
  )
  const hair = locks(
    10103,
    16,
    (t) => [158 - t * 44, 50 + t * 32],
    (t) => [70 - t * 20, 50 + t * 96],
    [0.9, 1.5],
    -9,
  )
  // The soft crown of the cap: the light along its top, cut in two curves.
  const cap = gouge(66, 44, 118, 29, 1.3, -3) + gouge(78, 53, 128, 38, 0.9, -2.5)
  // The feather's barbs, cut in ink on both sides of its spine, slanting back.
  let feather = ''
  for (let i = 1; i < FEATHER_SPINE.length; i++) {
    const [x0, y0] = FEATHER_SPINE[i - 1]
    const [x1, y1] = FEATHER_SPINE[i]
    const L = Math.hypot(x1 - x0, y1 - y0) || 1
    const tx = (x1 - x0) / L
    const ty = (y1 - y0) / L
    const w = 9 * Math.sin((i / FEATHER_SPINE.length) * Math.PI) + 2
    for (let k = 0; k < 4; k++) {
      const u = (k + 0.5) / 4
      const x = x0 + (x1 - x0) * u
      const y = y0 + (y1 - y0) * u
      for (const side of [1, -1]) {
        const s = between(r, 0.8, 1)
        const ex = x + (-ty * side * w + tx * 3) * s
        const ey = y + (tx * side * w + ty * 3) * s
        feather += `M${n(x)} ${n(y)}L${n(ex)} ${n(ey)}`
      }
    }
  }
  const nape = napeShade(10104, 150, 118, 86, 112)
  const beard = beardStrands(10105, true)
  return { quilts, hair, cap, feather, nape, beard }
})

/** Pistol, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function PistolFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-pis`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-feather`}>
          <path d={FEATHER} />
        </clipPath>
      </defs>
      {/* "a horrid suit of the camp": the padded jack, its front pushed out */}
      <path d={JACK_SWOLLEN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.quilts} fill={PAPER} />
      <g transform={turn(LIFT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={id} />
        <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.nape} strokeWidth={1.4} />
        </g>
      </g>
      <JackNeck />
      <g transform={turn(LIFT)}>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${id}-hair)`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <EarCut {...MAN_EAR} />
        <ManNoseAndMouth />
        {/* "a beard of the general's cut": the dark pointed beard, and the moustache */}
        <Beard id={id} d={POINTED_BEARD_P} strands={m.beard} />
        {/* looking down his nose: the brow raised, the lid lowered */}
        <path
          d="M143.5 85Q153 80 165.5 84"
          fill="none"
          stroke={INK}
          strokeWidth={2.8}
          strokeLinecap="round"
        />
        <ManEye look="down" />
        {/* the small cap tilted back, and the feather curling back from it */}
        <g transform={CAP_TILT}>
          <path
            d={FEATHER}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
            strokeLinejoin="round"
          />
          <g clipPath={`url(#${id}-feather)`}>
            <path d={m.feather} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
          </g>
          <path
            d={`M${FEATHER_SPINE.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')}`}
            fill="none"
            stroke={INK}
            strokeWidth={1.3}
            strokeLinecap="round"
          />
          <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
          <path d={m.cap} fill={PAPER} />
          <path
            d={CAP_BAND}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  )
}

/** A thick ink halo round head, cap, feather, beard and shoulders. */
function PistolKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={JACK_SWOLLEN} />
      <g transform={turn(LIFT)}>
        <path d={MAN_HEAD} />
        <path d={HAIR} />
        <path d={POINTED_BEARD_P} />
        <g transform={CAP_TILT}>
          <path d={CAP} />
          <path d={FEATHER} />
        </g>
      </g>
    </g>
  )
}

const P = placing(50, 28, 0.88, true)

const ground = once(() =>
  // The English camp by day: the light ahead of him, to the left.
  portraitGround('hv-pistol', 10110, (x, y) =>
    clamp(0.12 + ((PW - x - 50) / 260) * 0.82 - (y / PH) * 0.14),
  ),
)

function PistolPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <PistolKnockout />
        <PistolFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const pistolPortrait: LinocutArt = { width: PW, height: PH, Draw: PistolPortrait }

const BEARD_AT = onTurnedHead(P, LIFT, 152, 192)
const SHOULDER_AT = P.to(30, 282)
const CHEST_AT = P.to(253, 292)

export const pistol: Portrait = {
  name: 'Pistol',
  art: pistolPortrait,
  alt: 'A linocut portrait of Pistol in profile, facing left, by day: a man holding his head high and looking down his nose, his brow raised and his eyelid lowered. He has a dark beard cut to a long point below his chin and a moustache, and his dark hair is swept back to his collar under a small dark cap, tilted back, with a white feather curling back from it. He wears a padded soldier’s jacket with a high neck, its front pushed out. Three numbered red markers point to his beard, the jacket at his shoulder and his chest.',
  describedBy: [
    { phrase: 'a beard of the general’s cut', at: BEARD_AT },
    {
      phrase: 'a horrid suit of the camp',
      at: [SHOULDER_AT[0] + 22, SHOULDER_AT[1] - 26],
      to: SHOULDER_AT,
    },
    {
      phrase: 'swelling like a turkey-cock',
      at: [CHEST_AT[0] - 30, CHEST_AT[1] - 2],
      to: CHEST_AT,
    },
  ],
  where: 'Act 3, Scene 6; Act 5, Scene 1',
  note: 'Pistol, the ensign, Bardolph’s and Nym’s swaggering friend and the Hostess’s husband, talks like the hero of an old play. Gower sees through him: a man who goes to the wars to brag of them in London taverns. The Boy puts it in a proverb: “The empty vessel makes the greatest sound.”',
  artNote:
    'The play gives his beard and his coat through Gower’s scorn, not his face. His small cap with its curling feather is how the panels pick him out among the soldiers; nothing in the play gives it to him.',
}

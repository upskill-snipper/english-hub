import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  folds,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  onTurnedHead,
  PH,
  placing,
  PortraitRule,
  PW,
  spline,
  turn,
} from './common'

/**
 * Trinculo, the King's jester, from the opening of his speech in Act 2,
 * Scene 2, alone on open ground with a storm coming:
 *
 *   "Here's neither bush nor shrub to bear off any weather at all, and
 *   another storm brewing; I hear it sing i' th' wind. Yond same black
 *   cloud, yond huge one, looks like a foul bombard that would shed his
 *   liquor. If it should thunder as it did before, I know not where to hide
 *   my head: yond same cloud cannot choose but fall by pailfuls."
 *
 * So: a man in a fool's hood, his head turned up to a huge black cloud
 * over him, his brow lifted in alarm; the wind cut in long streaks across
 * the sky; and below, open ground under a line of low hills with nothing
 * growing on it. The rain has not yet fallen, so none is drawn. The speech goes
 * on to find Caliban lying on the ground and to call him by names this
 * portrait does not repeat: the passage printed stops before them.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): a fool's
 * hood close round his face, with a long point falling back from the crown
 * and a short cape over the shoulders cut into dags along its edge (the
 * kit's TRINCULO_HOOD, carried to this size point for point: x' = 99.5 +
 * 3.53x, y' = 114.9 + 3.84y, the head's own frame), its edge round the face
 * cut in paper; and a pied coat, a harlequin of lozenges cut in paper. No
 * bells, no ass's ears: the hood is there only so that he is known as the
 * jester. His head is every man's head (MAN_HEAD), clean-shaven. There is
 * no red in this plate.
 *
 * Seeds: 7101 (the figure), 7102 (its marks), 7110 (the sky), 7111 (the
 * cloud), 7112 (the ground).
 */

/** His head is turned up to the cloud. */
const ROT = -10

/**
 * The fool's hood on MAN_HEAD: close round the face, covering the ear, with
 * the long point falling back from the crown. The kit's TRINCULO_HOOD at
 * this size, down to the neck; the dagged cape it ends in is CAPE below,
 * which sits on the shoulders and does not turn with the head.
 */
const HOOD =
  'M151 70.4C141.9 34.3 103 16.6 67.7 28.1C43 18.9 7.7 7.4 -20.5 22.7' +
  'C-41.7 34.3 -55.8 61.1 -62.9 99.5C-55.8 76.5 -41.7 53.5 -17 45.8' +
  'C7.7 42 25.4 57.3 32.4 84.2C36 122.6 32.4 161 24 196L22 226L120 226' +
  'C106.6 184 99.5 145.6 105.1 114.9C110.1 91.9 127.7 74.2 151 70.4Z'
/** The paper edge round his face, and the seam of the point. */
const HOOD_EDGE = 'M150 72C126 76 110 92 106 114C101 142 106 180 116 208'
const HOOD_SEAM = 'M57.1 26.6C30 22 4 26 -41.7 51'
/** Folds in the hood, cut in paper. */
const HOOD_FOLDS =
  gouge(118, 36, 64, 60, 1.4, 2) +
  gouge(84, 84, 52, 178, 1.6, 2.4) +
  gouge(68, 92, 40, 200, 1.4, 1.6)

/**
 * The hood's short cape over his shoulders, its lower edge cut into dags:
 * from the back of the neck down over the shoulders and round the front of
 * the throat, under the jaw. In the figure's frame.
 */
const CAPE =
  'M40 194C24 210 12 232 6 258L8 290L22 270L34 300L48 276L62 304L76 280L90 306L104 282' +
  'L118 306L132 282L146 304L160 280L174 298L186 274L198 288L200 262' +
  'C196 244 178 226 158 214C130 210 96 210 66 202Z'
/** Two folds in the cape, cut in paper. */
const CAPE_CUTS =
  gouge(24, 248, 30, 270, 1.2, 0.6) +
  gouge(150, 236, 164, 266, 1.2, -0.6) +
  gouge(92, 236, 98, 268, 1.1, 0)

/** His shoulders in the pied coat. */
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

/** The harlequin of the pied coat: a grid of lozenges, every one cut in paper, clipped to the coat. */
let motleyCache: string | undefined
function motley(): string {
  if (motleyCache) return motleyCache
  let d = ''
  const a = 26
  const b = 34
  for (let row = 0; row < 4; row++)
    for (let col = -1; col < 10; col++) {
      const x = col * a + (row % 2 ? a / 2 : 0)
      const y = 300 + row * (b / 2)
      d += `M${n(x)} ${n(y - 13)}L${n(x + 10)} ${n(y)}L${n(x)} ${n(y + 13)}L${n(x - 10)} ${n(y)}Z`
    }
  motleyCache = d
  return d
}

// The sky, the cloud and the ground, in the portrait's own coordinates, as
// the panel of this scene cuts them (../panels/caliban-finds-a-new-master.tsx):
// a pale sky of ink cuts on paper, the cloud a swollen mass of rounds lit
// along their tops, and open ground below a line of low hills.

const HORIZON = 262

/** An ellipse as a closed path, all drawn the same way round so overlapping rounds fill as one. */
const disc = (cx: number, cy: number, rx: number, ry: number) =>
  `M${n(cx - rx)} ${n(cy)}a${n(rx)} ${n(ry)} 0 1 0 ${n(rx * 2)} 0a${n(rx)} ${n(ry)} 0 1 0 ${n(-rx * 2)} 0Z`

/** "Yond same black cloud, yond huge one": the rounds of the cloud, over the upper right. */
const LOBES: [number, number, number][] = [
  [212, 36, 34],
  [258, 22, 40],
  [306, 34, 38],
  [190, 74, 26],
  [236, 70, 36],
  [292, 82, 38],
  [262, 112, 30],
  [318, 118, 26],
]

/**
 * "neither bush nor shrub": the far hills, a low ink band along the horizon
 * to the right of him only, rising from nothing. (Run the whole width, the
 * band passed behind his shoulders and muddled them with the cape.)
 */
const HILLS_FROM = 236
const hillsAt = (x: number) =>
  HORIZON + 4 - Math.min(1, Math.max(0, (x - HILLS_FROM) / 30)) * (12 + Math.sin(x / 30) * 4)

type Marks = { body: string }

const marksBySeed = new Map<number, Marks>()
function figureMarks(seed: number): Marks {
  const hit = marksBySeed.get(seed)
  if (hit) return hit
  const body = folds(seed + 1, [30, 200], [262, 280], 5)
  const m = { body }
  marksBySeed.set(seed, m)
  return m
}

/** Trinculo, looking up, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function TrinculoFigure({ uid, seed }: { uid: string; seed: number }) {
  const m = figureMarks(seed)
  const coatClip = `${uid}-tri-coat-${seed}`
  return (
    <g>
      <defs>
        <clipPath id={coatClip}>
          <path d={BODY} />
        </clipPath>
      </defs>
      {/* the pied coat */}
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${coatClip})`}>
        <path d={motley()} fill={PAPER} />
        <path d={m.body} fill={INK} />
      </g>
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} fill={PAPER} />
        <NeckShadow id={`${uid}-tri-${seed}`} />
        {/* "I know not where to hide my head": the fool's hood */}
        <path d={HOOD} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={HOOD_FOLDS} fill={PAPER} />
        <path d={HOOD_EDGE} fill="none" stroke={PAPER} strokeWidth={2.4} strokeLinecap="round" />
        <path d={HOOD_SEAM} fill="none" stroke={PAPER} strokeWidth={1.2} strokeLinecap="round" />
        <ManNoseAndMouth />
        {/* the brow lifted in alarm */}
        <path
          d="M143.5 84Q153 79 165.5 83.5"
          fill="none"
          stroke={INK}
          strokeWidth={2.6}
          strokeLinecap="round"
        />
        <ManEye look="up" />
      </g>
      {/* the dagged cape over his shoulders, over the foot of the hood */}
      <path d={CAPE} fill={INK} stroke={PAPER} strokeWidth={2.4} strokeLinejoin="round" />
      <path d={CAPE_CUTS} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round the head, the hood and the shoulders. */
export function TrinculoKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={MAN_HEAD} />
        <path d={HOOD} />
      </g>
      <path d={BODY} />
      <path d={CAPE} />
    </g>
  )
}

const P = placing(64, 50, 0.8)

type Sky = { sky: string; cloud: string; lit: string; wind: string; hills: string; land: string }
let sky: Sky | undefined
function skyCuts(): Sky {
  if (sky) return sky
  // The sky: ink cuts on paper, heavier under the cloud, clearing to the left.
  const skyField = gougeField(
    rng(7110),
    { x0: 0, x1: PW, y0: 4, y1: HORIZON - 4 },
    (x, y) => clamp(0.06 + (1 - y / HORIZON) * 0.2 + Math.max(0, (x - 120) / 220) * 0.3),
    { spacing: 6, len: [30, 110], gap: [14, 44], max: 2.2 },
  )
  const r = rng(7111)
  let cloud = disc(262, 70, 70, 52)
  let lit = ''
  for (const [x, y, rad] of LOBES) {
    cloud += disc(x, y, rad, rad * 0.86)
    // the light on the top of each round, in short arcs of gouges
    for (let k = 0; k < 3; k++) {
      const a0 = -Math.PI * between(r, 0.66, 0.82)
      const a1 = a0 + between(r, 0.35, 0.55)
      const rr = rad * (0.8 - k * 0.16)
      lit += gouge(
        x + Math.cos(a0) * rr,
        y + Math.sin(a0) * rr * 0.86,
        x + Math.cos(a1) * rr,
        y + Math.sin(a1) * rr * 0.86,
        1.5 - k * 0.3,
        -0.8,
      )
    }
  }
  // "I hear it sing i' th' wind": long streaks of wind sweeping across the
  // sky under the cloud, wavier and longer than the sky's own cuts.
  let wind = ''
  for (const [x0, y0, L, amp] of [
    [226, 172, 96, 4],
    [244, 196, 80, 3.4],
    [218, 220, 90, 3.6],
  ] as [number, number, number, number][]) {
    const pts: Pt[] = []
    for (let k = 0; k <= 12; k++) {
      const t = k / 12
      pts.push([x0 + t * L, y0 - t * 8 + Math.sin(t * Math.PI * 2 + x0) * amp])
    }
    wind += ribbon(pts, 3, 0.8)
  }
  // The far hills along the horizon, and the bare ground below them.
  let hills = `M${HILLS_FROM} ${HORIZON + 4}`
  for (let x = HILLS_FROM; x <= PW + 10; x += 6) hills += `L${n(x)} ${n(hillsAt(x))}`
  hills += `L${PW + 10} ${HORIZON + 4}Z`
  const land = gougeField(rng(7112), { x0: 0, x1: PW, y0: HORIZON + 8, y1: PH }, () => 0.08, {
    spacing: 9,
    len: [20, 70],
    gap: [24, 60],
    max: 1.4,
  })
  sky = { sky: skyField, cloud, lit, wind, hills, land }
  return sky
}

function TrinculoPortrait({ uid }: ArtProps) {
  const s = skyCuts()
  return (
    <>
      <rect x={0} y={0} width={PW} height={PH} fill={PAPER} />
      <path d={s.sky} fill={INK} />
      <path d={s.cloud} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={s.cloud} fill={INK} />
      <path d={s.lit} fill={PAPER} />
      <path d={s.wind} fill={INK} />
      <path d={s.hills} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={s.land} fill={INK} />
      <g transform={P.transform}>
        <TrinculoKnockout />
        <TrinculoFigure uid={uid} seed={7101} />
      </g>
      <PortraitRule />
    </>
  )
}

export const trinculoPortrait: LinocutArt = { width: PW, height: PH, Draw: TrinculoPortrait }

const LAND_AT: Pt = [270, 292]
const WIND_AT: Pt = [262, 192]
const CLOUD_AT: Pt = [250, 64]
const HOOD_AT = onTurnedHead(P, ROT, 96, 40)

export const trinculo: Portrait = {
  name: 'Trinculo',
  art: trinculoPortrait,
  alt: 'A linocut portrait of Trinculo, the King’s jester, in profile, facing right, his head turned up and his brow lifted in alarm. He wears a dark fool’s hood close round his face, with a long point falling back from the crown and a short cape over his shoulders cut into points along its edge, and a dark coat patterned with white lozenges. Above him a huge black cloud of swollen rounds, lit along their tops, fills the top right of a pale sky, and three long streaks of wind sweep across the sky beneath it. At the bottom right, below low dark hills, lies open ground with nothing growing on it. Four numbered red markers point to the bare ground, the wind, the cloud and his hooded head.',
  describedBy: [
    { phrase: 'neither bush nor shrub', at: [LAND_AT[0] + 34, LAND_AT[1] + 8], to: LAND_AT },
    { phrase: 'I hear it sing i’ th’ wind', at: [WIND_AT[0] + 46, WIND_AT[1] + 46], to: WIND_AT },
    {
      phrase: 'Yond same black cloud, yond huge one',
      at: [CLOUD_AT[0] - 64, CLOUD_AT[1] + 20],
      to: CLOUD_AT,
    },
    {
      phrase: 'I know not where to hide my head',
      at: [HOOD_AT[0] - 50, HOOD_AT[1] - 26],
      to: HOOD_AT,
    },
  ],
  where: 'Act 2, Scene 2',
  passage:
    'Here’s neither bush nor shrub to bear off any weather at all, and another storm brewing; I hear it sing i’ th’ wind. Yond same black cloud, yond huge one, looks like a foul bombard that would shed his liquor. If it should thunder as it did before, I know not where to hide my head: yond same cloud cannot choose but fall by pailfuls.',
  note: 'The King’s jester comes ashore alone, with another storm coming and nowhere to shelter. A bombard is a great leather jug for drink: even the cloud makes him think of liquor. With nowhere else to go, he creeps under Caliban’s coat to keep dry.',
  artNote:
    'The play does not describe his looks. His fool’s hood and pied coat are how the panels show that he is the King’s jester, in the dress of a fool of the time.',
}

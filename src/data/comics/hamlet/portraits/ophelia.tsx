import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, deg, gouge, n, type Pt } from '@/components/comics/linocut/carve'

import {
  bandAlong,
  folds,
  Hand,
  locks,
  onTurnedHead,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  quadPts,
  spline,
  turn,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanNeckShadow,
  type Digit,
} from './common'

/**
 * Ophelia, in Act 4, Scene 5, when she comes back before her brother with her
 * flowers, from what she says, what he says of her,
 *
 *   LAERTES: "O rose of May! Dear maid, kind sister, sweet Ophelia!"
 *   OPHELIA: "There's rosemary, that's for remembrance; pray love, remember.
 *   And there is pansies, that's for thoughts."
 *
 * and the stage direction that brings her back: "Re-enter Ophelia,
 * fantastically dressed with straws and flowers."
 *
 * So: a young woman, straws and small flowers in her hair, her head bowed over
 * the flowers she holds, rosemary and pansies, the two she names first,
 * offering them out: remembrance and thoughts, of her father, who is dead. Her grief is drawn with dignity, a
 * still face and a lowered eye, never as a spectacle. Her flowers are her own,
 * the ones she gives away in this scene, and nothing in the picture is water.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): a woman's
 * head (WOMAN_HEAD); her dark hair long and loose down her back, unmarried,
 * with one lock forward over her shoulder (the Tempest kit's long hair, as the
 * Tempest portraits cut Miranda's), bound with a paper fillet across it from
 * the brow to behind the ear (the kit's OPHELIA_FILLET at this size); a plain
 * dark gown. "O rose of May" is her brother's grief for her youth, so the
 * spot colour is a flush on her cheek, laid flat, never near her mouth; and
 * the pansies are printed in it, as the panels print her flowers.
 *
 * The hand is closed round the stems below the flowers, every finger cut
 * apart, the back of the hand towards us: a hand holding flowers out, not
 * raised.
 *
 * She faces left, offering the flowers to someone before her, so the figure
 * is drawn facing right and flipped.
 *
 * Seeds: 7501 to 7505 (the figure's marks), 7510 (the ground).
 */

/** Her head is bowed over the flowers. */
const ROT = 7

/** Long dark hair, back from the brow over the crown and loose down her back. In the head's frame. */
const HAIR = spline([
  [161, 60, 1],
  [149, 55],
  [132, 57],
  [118, 69],
  [109, 90, 1],
  [97, 101],
  [90, 120],
  [87, 152],
  [84, 198],
  [82, 252],
  [78, 336, 1],
  [8, 336, 1],
  [18, 284],
  [24, 228],
  [30, 168],
  [36, 112],
  [46, 72],
  [68, 43],
  [99, 28],
  [133, 27],
  [153, 37],
])
/** The lock falling forward over her shoulder. */
const LOCK = spline([
  [104, 150, 1],
  [116, 176],
  [126, 210],
  [134, 248],
  [138, 290],
  [138, 336, 1],
  [116, 336, 1],
  [116, 296],
  [112, 256],
  [102, 218],
  [96, 186],
])
/** The fillet across her hair, from the brow over the crown to behind the ear. */
const FILLET = bandAlong(quadPts([156, 56], [110, 30], [60, 70], 14), 6)

/**
 * "fantastically dressed with straws and flowers": straws tucked into her
 * hair along the fillet and trailing back from it, and three small flowers on
 * the crown and at the back of her head, well above her face, as the panel of
 * this scene cuts them (../panels/ophelia-mad-laertes-in-arms.tsx). They
 * trail back, never stand out round her head: a ring of spikes would read as
 * a wild crown, the spectacle the play's rule forbids. In the head's frame.
 */
const STRAWS =
  'M114 31Q98 22 80 15M98 33Q82 24 62 20M82 39Q64 36 44 37M68 52Q50 53 32 60M60 68Q44 76 30 90'
const HEAD_FLOWERS: [number, number, number][] = [
  [100, 28, 2.6],
  [62, 50, 2.5],
  [44, 88, 2.3],
]

/** One small flower: five petals in the spot colour round a paper heart, as the panel's. */
function smallFlower(x: number, y: number, s: number): { petals: string; heart: string } {
  let petals = ''
  for (let k = 0; k < 5; k++) {
    const a = deg(-90 + k * 72)
    const cx = x + Math.cos(a) * 2.3 * s
    const cy = y + Math.sin(a) * 2.3 * s
    const rr = 1.75 * s
    petals += `M${n(cx - rr)} ${n(cy)}a${n(rr)} ${n(rr)} 0 1 0 ${n(2 * rr)} 0a${n(rr)} ${n(rr)} 0 1 0 ${n(-2 * rr)} 0Z`
  }
  const h = 0.95 * s
  return {
    petals,
    heart: `M${n(x - h)} ${n(y)}a${n(h)} ${n(h)} 0 1 0 ${n(2 * h)} 0a${n(h)} ${n(h)} 0 1 0 ${n(-2 * h)} 0Z`,
  }
}
const HEAD_DRESS = HEAD_FLOWERS.map(([x, y, sz]) => smallFlower(x, y, sz))

/** Her shoulders in a plain gown, and its edge at the neck. */
const BODY = spline([
  [-4, 336, 1],
  [2, 300],
  [20, 268],
  [52, 244],
  [84, 232],
  [114, 236],
  [142, 230],
  [168, 242],
  [190, 266],
  [204, 300],
  [210, 336, 1],
])
const NECK_EDGE = spline([
  [84, 230, 1],
  [114, 236],
  [146, 228, 1],
  [152, 238],
  [114, 246],
  [82, 240, 1],
])

/**
 * "O rose of May": the flush, laid flat high on her cheek, well back from the
 * mouth: a soft lozenge, as Desdemona's blush is cut, never strokes.
 */
const FLUSH =
  'M133.4 118.6C134.2 114.2 141.2 111.8 147.6 113C152.2 114 152.8 118.4 149 120.8C144.4 123.4 135.4 123.2 133.4 118.6Z'

// ── The flowers and the hand that holds them, in the figure's frame ─────────

/** Where the stems are gathered in her hand. */
const GATHER: Pt = [210, 284]
/** The rosemary: two sprigs, their stems from the hand up and out. */
const SPRIGS: Pt[][] = [
  quadPts(GATHER, [202, 236], [194, 178], 12),
  quadPts(GATHER, [218, 236], [234, 186], 12),
]
/** The pansies: a stem each, and the flower's centre and size. */
const PANSIES: { stem: Pt[]; at: Pt; r: number }[] = [
  { stem: quadPts(GATHER, [226, 254], [244, 226], 8), at: [244, 222], r: 14 },
  { stem: quadPts(GATHER, [204, 254], [178, 232], 8), at: [176, 228], r: 13 },
]

/**
 * One rosemary sprig: its stem as a thin band, and its narrow needle leaves
 * in pairs along it, standing out from the stem and shortening towards the
 * tip, which ends in a small bud, not a point.
 */
function sprig(pts: Pt[]): { stem: string; leaves: string } {
  const stem = bandAlong(pts, 2.4)
  let leaves = ''
  for (let i = 2; i < pts.length - 1; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const a = Math.atan2(y1 - y0, x1 - x0)
    const L = 10 - (i / pts.length) * 5
    for (const side of [-1, 1]) {
      const b = a + side * deg(58)
      leaves += gouge(x1, y1, x1 + Math.cos(b) * L, y1 + Math.sin(b) * L, 1.3, 0)
    }
  }
  const [tx, ty] = pts[pts.length - 1]
  leaves += `M${n(tx - 2.6)} ${n(ty)}a2.6 2.6 0 1 0 5.2 0a2.6 2.6 0 1 0 -5.2 0Z`
  return { stem, leaves }
}

/**
 * A pansy, face on: two petals behind at the top, two at the sides and the
 * broad one below, in paper with an ink rim, and its dark eye with fine lines
 * running out from it, as a pansy is marked.
 */
function pansy([x, y]: Pt, r: number): { petals: string; eye: string; rays: string } {
  const petal = (cx: number, cy: number, rx: number, ry: number) =>
    `M${n(cx - rx)} ${n(cy)}a${n(rx)} ${n(ry)} 0 1 0 ${n(rx * 2)} 0a${n(rx)} ${n(ry)} 0 1 0 ${n(-rx * 2)} 0Z`
  const petals =
    petal(x - r * 0.42, y - r * 0.5, r * 0.5, r * 0.5) +
    petal(x + r * 0.42, y - r * 0.5, r * 0.5, r * 0.5) +
    petal(x - r * 0.62, y + r * 0.05, r * 0.46, r * 0.42) +
    petal(x + r * 0.62, y + r * 0.05, r * 0.46, r * 0.42) +
    petal(x, y + r * 0.42, r * 0.6, r * 0.5)
  const eye = petal(x, y + r * 0.06, r * 0.2, r * 0.2)
  let rays = ''
  for (const d of [200, 250, 290, 340, 90])
    rays += `M${n(x + Math.cos(deg(d)) * r * 0.24)} ${n(y + r * 0.06 + Math.sin(deg(d)) * r * 0.24)}L${n(x + Math.cos(deg(d)) * r * 0.62)} ${n(y + r * 0.06 + Math.sin(deg(d)) * r * 0.62)}`
  return { petals, eye, rays }
}

/** Her forearm in the gown's sleeve, from below the block up to the hand. */
const SLEEVE = spline([
  [116, 346, 1],
  [130, 318],
  [158, 298],
  [192, 288, 1],
  [196, 316, 1],
  [168, 324],
  [148, 346, 1],
])
/** The hand closed round the stems: the back of the hand towards us, the fingers wrapped round. */
const HAND_AT: Pt = [194, 298]
const PALM = spline([
  [-2, -10],
  [6, -12],
  [12, -9],
  [13, 0],
  [12, 10],
  [5, 12],
  [-2, 9],
])
const DIGITS: Digit[] = [
  { from: [9, 9], to: [21, 9.4], w: 5.4 },
  { from: [9, 3.6], to: [22.6, 3.8], w: 5.6 },
  { from: [9, -1.8], to: [22.6, -1.8], w: 5.6 },
  { from: [9, -7.2], to: [21, -7.4], w: 5.4 },
  { from: [2, -9], to: [15, -13.6], w: 6 },
]
const KNUCKLES = 'M10.4 -9.4L10.4 11.4'

type Marks = { hair: string; lock: string; body: string }

const marks = once((): Marks => {
  // Strands cut in paper: back over the crown from the brow, then loose down her back.
  const hair =
    locks(
      7502,
      18,
      (t) =>
        t < 0.35
          ? [134 + (t / 0.35) * 25, 30 + (t / 0.35) * 30]
          : [159 - ((t - 0.35) / 0.65) * 48, 60 + ((t - 0.35) / 0.65) * 32],
      (t) => [78 - t * 32, 38 + t * 84],
      [0.9, 1.5],
      -6,
    ) +
    locks(
      7503,
      14,
      (t) => [42 + t * 42, 118 + t * 4],
      (t) => [14 + t * 56, 334],
      [0.9, 1.5],
      -4,
      3,
    )
  const lock = locks(
    7504,
    6,
    (t) => [102 + t * 8, 160 + t * 6],
    (t) => [120 + t * 16, 334],
    [0.9, 1.3],
    -5,
    2,
  )
  const body = folds(7505, [10, 110], [270, 290], 5)
  return { hair, lock, body }
})

const flowers = once(() => {
  const sprigs = SPRIGS.map(sprig)
  const pansies = PANSIES.map((p) => ({ stem: bandAlong(p.stem, 2.2), ...pansy(p.at, p.r) }))
  return { sprigs, pansies }
})

/** Ophelia, head and shoulders, with her flowers, facing right in the 0..240 by 0..332 frame. */
export function OpheliaFigure({ uid }: { uid: string }) {
  const m = marks()
  const f = flowers()
  const id = `${uid}-oph`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={`${id}-lock`}>
          <path d={LOCK} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path
        d={NECK_EDGE}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinejoin="round"
      />
      <g transform={turn(ROT)}>
        <path d={WOMAN_HEAD} fill={PAPER} />
        <WomanNeckShadow id={`${id}-ns`} />
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${id}-hair)`}>
          <path d={m.hair} fill={PAPER} />
        </g>
        <path d={FILLET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        {/* the straws and flowers in her hair, trailing back */}
        <path d={STRAWS} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <path d={STRAWS} fill="none" stroke={PAPER} strokeWidth={2.2} strokeLinecap="round" />
        <path
          d={HEAD_DRESS.map((f) => f.petals).join('')}
          fill={RED}
          stroke={INK}
          strokeWidth={1}
        />
        <path d={HEAD_DRESS.map((f) => f.heart).join('')} fill={PAPER} />
        <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
        {/* the face: still, the eye lowered to the flowers */}
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
          <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
          <path d="M165.5 133C163.5 134 161.5 135.5 160.5 137" strokeWidth={0.9} />
          <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
          <path d="M143 84.4Q151 82.4 157 81Q160.4 80.2 162.4 78.6" strokeWidth={2} />
          <path d="M145 96.2Q152.5 98 160.5 95.8" strokeWidth={2.3} />
          <path d="M146.6 100.6Q153 102.6 159.4 99.8" strokeWidth={1} />
        </g>
        <path d="M149.6 97.4A3 2.6 0 0 0 155.6 97.4Z" fill={INK} />
        <path d={FLUSH} fill={RED} />
      </g>
      {/* the lock forward over her shoulder */}
      <path d={LOCK} fill={INK} stroke={PAPER} strokeWidth={2.2} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-lock)`}>
        <path d={m.lock} fill={PAPER} />
      </g>

      {/* her flowers: an ink halo round them first, so they stand clear */}
      <g fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round">
        {f.sprigs.map((s) => (
          <path key={s.stem} d={s.stem + s.leaves} />
        ))}
        {f.pansies.map((p) => (
          <path key={p.petals} d={p.stem + p.petals} />
        ))}
      </g>
      {f.sprigs.map((s) => (
        <g key={s.stem}>
          <path d={s.stem} fill={PAPER} />
          <path d={s.leaves} fill={PAPER} />
        </g>
      ))}
      {f.pansies.map((p) => (
        <g key={p.petals}>
          <path d={p.stem} fill={PAPER} />
          <path d={p.petals} fill={RED} stroke={INK} strokeWidth={1.1} />
          <path d={p.rays} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
          <path d={p.eye} fill={INK} />
        </g>
      ))}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <Hand
        transform={`translate(${HAND_AT[0]} ${HAND_AT[1]})`}
        palm={PALM}
        digits={DIGITS}
        lines={KNUCKLES}
        halo={3.2}
      />
    </g>
  )
}

/** A thick ink halo round head, hair, shoulders and flowers. */
function OpheliaKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <g transform={turn(ROT)}>
        <path d={HAIR} />
        <path d={WOMAN_HEAD} />
        <path d={STRAWS} fill="none" />
      </g>
      <path d={BODY} />
    </g>
  )
}

const P = placing(46, 22, 0.88, true)

/** The light ahead of her, to the left, where she offers the flowers. */
const ground = once(() =>
  portraitGround('hamlet-ophelia', 7510, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.86 - (y / PH) * 0.1),
  ),
)

function OpheliaPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <OpheliaKnockout />
        <OpheliaFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const opheliaPortrait: LinocutArt = { width: PW, height: PH, Draw: OpheliaPortrait }

const CHEEK_AT = onTurnedHead(P, ROT, 121, 121)
const GARLAND_AT = onTurnedHead(P, ROT, 62, 50)
const ROSEMARY_AT = P.to(196, 196)
const PANSY_AT = P.to(244, 232)

export const ophelia: Portrait = {
  name: 'Ophelia',
  art: opheliaPortrait,
  alt: 'A linocut portrait of Ophelia in profile, facing left: a young woman with her head bowed and her eye lowered, her face still, a flush of red on her cheek. Her long dark hair falls loose down her back, its strands cut in white, with one lock forward over her shoulder and a white band bound across it from her brow to behind her ear. Straws are tucked into her hair along the band, trailing back, with three small red flowers among them on the crown and at the back of her head. She wears a plain dark gown. Before her, in one hand, she holds out a few flowers by their stems: two sprigs of rosemary with narrow leaves, cut in white, and two pansies printed in red with dark centres. Four numbered red markers point to the straws and flowers in her hair, her flushed cheek, the rosemary and a pansy.',
  describedBy: [
    {
      phrase: 'fantastically dressed with straws and flowers',
      at: [GARLAND_AT[0] + 44, GARLAND_AT[1]],
      to: GARLAND_AT,
    },
    { phrase: 'O rose of May!', at: CHEEK_AT },
    {
      phrase: 'There’s rosemary, that’s for remembrance',
      at: [ROSEMARY_AT[0] - 52, ROSEMARY_AT[1] - 6],
      to: ROSEMARY_AT,
    },
    {
      phrase: 'pansies, that’s for thoughts',
      at: [PANSY_AT[0] - 30, PANSY_AT[1] + 34],
      to: PANSY_AT,
    },
  ],
  where: 'Act 4, Scene 5',
  note: 'After her father’s death Ophelia’s mind gives way, and she hands out flowers whose meanings the court would know: rosemary for remembrance, pansies for thoughts. Laertes sees his sister’s youth destroyed and swears revenge.',
  artNote:
    'The play gives her flowers, the straws and flowers in her hair and her brother’s grief for her youth, not her face. Her long loose hair, the band across it and her plain gown are how the panels draw her. Red marks the bloom Laertes mourns, as a flush on her cheek, and her flowers.',
}

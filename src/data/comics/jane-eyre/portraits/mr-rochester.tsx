import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { arcDashes, clamp, deg, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  InnerRule,
  MAN_HEAD,
  MAN_LINES,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  flame,
  hatch,
  lerp2,
  nudge,
  once,
  placePath,
  placer,
  rimLight,
  smooth,
  splitGround,
  strands,
  type Knot,
} from './common'

/**
 * Mr Rochester, as Jane describes him, and nothing else. Chapter 13, the
 * evening she is summoned to the drawing-room and knows him for the rider
 * she met in Hay Lane:
 *
 *   "Half reclined on a couch appeared Mr. Rochester, his foot supported by
 *   the cushion; he was looking at Adèle and the dog: the fire shone full on
 *   his face. I knew my traveller with his broad and jetty eyebrows; his
 *   square forehead, made squarer by the horizontal sweep of his black hair.
 *   I recognised his decisive nose, more remarkable for character than
 *   beauty; his full nostrils, denoting, I thought, choler; his grim mouth,
 *   chin, and jaw"
 *
 * and, in the same paragraph, "His shape, now divested of cloak, I
 * perceived harmonised in squareness with his physiognomy ... broad chested
 * and thin flanked, though neither tall nor graceful". In Chapter 12 she
 * gave him "a dark face, with stern features and a heavy brow", "past
 * youth, but had not reached middle-age; perhaps he might be thirty-five".
 *
 * So: a man of thirty-five in profile, facing right, towards the fire that
 * shines full on his face. He is cut from the one man's head (MAN_HEAD) with
 * only what Jane names changed: the forehead upright and square at its top
 * corner; black hair swept straight across it, a level edge that makes it
 * squarer still; brows broad, black and gathered, low over a heavy-lidded
 * eye; a strong nose with a high bridge and a full, flared nostril; the
 * mouth one hard line turned down at the corner, the chin and the jaw
 * square. His shoulders are broad and square. The fire is at the bottom
 * right of the block, and its light is printed in the spot colour on the
 * ground between the flames and him, below the level of his face: red is
 * never on the face. His "dark face" is a colour the print cannot show, so
 * his face is cut in paper, as every face is, and the card says so.
 *
 * His dress is not described here, so he wears what a gentleman would at
 * home in the evening in the first years of the century: a dark coat with a
 * high collar and a white neckcloth wound high. Nothing here comes from a
 * film or stage production.
 *
 * Seeds: 7201 for the ground, 7202 for the cuts in the figure.
 */

/** The one man's head: the forehead square, the nose strong, the chin and jaw square. */
const HEAD_K: Knot[] = nudge(MAN_HEAD, [
  [8, 4, -2],
  [9, 4, -3],
  [10, 4, -3],
  [11, 1.5, -1],
  [12, 1, 0],
  [13, 0, 0.5],
  [14, 2.5, -2],
  [15, 3, -1],
  [16, 1.5, 0.5],
  [17, 0.5, 0.5],
  [22, 0.5, 0.5],
  [23, 1.5, 1],
  [24, 1.5, 1.5],
  [25, 0, 2],
  [26, 0, 2],
])

/** A little over life size in the block: the broadest of the men. */
const F = placer([8, -4], 0.94)
const HEAD = smooth(F.knots(HEAD_K))

/**
 * His black hair: over the crown, cut straight and level across the top of
 * the forehead ("the horizontal sweep"), down past the temple to a short
 * whisker before the ear, and short at the nape.
 */
const HAIR_K: Knot[] = [
  [231, 79, 1],
  [216, 80],
  [204, 82],
  [196, 92],
  [190, 108],
  [187, 126],
  [185, 146, 1],
  [175, 146, 1],
  [169, 126],
  [161, 110],
  [147, 107],
  [136, 118],
  [128, 146],
  [120, 176],
  [108, 196, 1],
  [93, 176],
  [87, 136],
  [93, 96],
  [112, 60],
  [144, 36],
  [178, 28],
  [208, 33],
  [226, 46],
  [233, 62],
]
const HAIR = smooth(F.knots(HAIR_K))

/** Broad, square shoulders under a dark coat. */
const COAT = smooth([
  [-8, 330, 1],
  [-4, 290],
  [12, 258],
  [52, 238],
  [100, 228],
  [140, 234],
  [180, 246],
  [222, 246],
  [254, 254],
  [282, 280],
  [294, 310],
  [296, 330, 1],
])
/** The coat's high collar, standing up round the back of the neck. */
const COLLAR = smooth([
  [100, 236, 1],
  [110, 208],
  [130, 214],
  [156, 230],
  [176, 248],
  [150, 254],
  [118, 250, 1],
])
/** The white neckcloth, wound high round the throat. */
const NECKCLOTH = smooth([
  [130, 222, 1],
  [168, 222],
  [206, 214],
  [222, 212],
  [228, 226],
  [226, 244],
  [196, 252],
  [150, 250, 1],
])
/** Its knot and the fall of its ends at the front. */
const TIE = smooth([
  [208, 238, 1],
  [226, 238],
  [234, 266, 1],
  [220, 272],
  [212, 256],
])
const LAPEL = smooth([
  [214, 248, 1],
  [242, 252, 1],
  [258, 330, 1],
  [236, 330, 1],
])

/** The neck below the jaw line, where the shadow under the jaw falls. */
const JAW_SHADOW = smooth(
  F.knots([
    [240, 212, 1],
    [222, 216],
    [204, 214],
    [190, 208],
    [181, 203],
    [176, 194],
    [172, 174, 1],
    [150, 190],
    [134, 236, 1],
    [206, 240, 1],
    [206, 226],
    [218, 218, 1],
  ]),
)

/**
 * The side of the face away from the fire, the ear and the back of the
 * cheek, where a light hatching models the cheekbone.
 */
const SHADOW_SIDE = smooth(
  F.knots([
    [196, 112],
    [200, 132],
    [203, 152],
    [200, 176],
    [196, 196],
    [188, 208],
    [176, 200],
    [146, 172],
    [140, 120],
    [160, 108],
  ]),
)

/** The flames at the bottom right: base, height, lean. */
const FLAMES: [number, number, number, number][] = [
  [290, 314, 44, -3],
  [306, 314, 30, -4],
  [274, 314, 26, 2],
  [318, 314, 18, -2],
]

type Marks = {
  ground: { paper: string; red: string }
  hair: string
  rim: string
  back: string
  neck: string
  side: string
  face: string
  coat: string
  cloth: string
}

const marks = once<Marks>(() => {
  // "the fire shone full on his face": lit from the fire at the bottom
  // right, dark behind him. The cuts nearest the fire print red, only below
  // the level of his chin, so no red lies near his face.
  const fire = (x: number, y: number) => Math.hypot(x - 300, (y - 330) * 1.05)
  const ground = splitGround(
    7201,
    (x, y) => clamp(Math.max(1.15 - fire(x, y) / 250, 0.05 + ((x - 60) / 300) * 0.6)),
    (x, y) => y > 214 && fire(x, y) < 124,
  )
  const r = rng(7202)
  // Black hair: a dark mass with a few cuts lying back over the crown and
  // swept level across the forehead, and the firelight caught along its
  // front edge.
  const hair =
    strands(
      r,
      22,
      lerp2(F.pt([222, 46]), F.pt([196, 96])),
      lerp2(F.pt([118, 64]), F.pt([106, 150])),
      [0.35, 0.7],
      2,
    ) +
    // "the horizontal sweep": a lock laid level across the top of the brow
    strands(
      r,
      9,
      lerp2(F.pt([232, 66]), F.pt([231, 77])),
      lerp2(F.pt([194, 64]), F.pt([196, 80])),
      [0.4, 0.75],
      0.6,
    )
  const rim = rimLight(
    r,
    { cx: F.pt([160, 120])[0], cy: F.pt([160, 120])[1], rx: 66 * F.s, ry: 92 * F.s },
    -80,
    10,
    16,
    1,
  )
  let back = ''
  const [bx, by] = F.pt([176, 150])
  for (let rad = 56; rad < 92; rad += 3.4)
    back += arcDashes(r, bx, by, rad, deg(100), deg(150), [8, 22], [2, 5])
  // The shadow under the square jaw: rows of ink in a wedge below the jaw
  // line, so the jaw reads as a hard edge against it.
  const neck = hatch(r, { x0: 90, x1: 250, y0: 150, y1: 250 }, 4.2, 0.03)
  // The side away from the fire: fine slanting hatching over the ear and
  // the back of the cheek.
  const side = hatch(r, { x0: 120, x1: 220, y0: 60, y1: 230 }, 4.4, -0.55)
  // Thirty-five and stern: one line across the square forehead, the hollow
  // at the temple, and the shadow under the cheekbone.
  let face = `M${F.p(212, 90)}Q${F.p(222, 87)} ${F.p(232, 90)}`
  for (let i = 0; i < 4; i++)
    face += `M${F.p(194 + i * 3, 94 + i * 1.5)}Q${F.p(191 + i * 3, 106)} ${F.p(197 + i * 3, 118 - i)}`
  const [cx, cy] = F.pt([206, 152])
  for (let rad = 11; rad < 22; rad += 3.4)
    face += arcDashes(r, cx, cy, rad, deg(58), deg(128), [8, 18], [2, 5])
  // The coat: broad, the firelight along its front.
  const coat =
    gouge(246, 262, 270, 318, 2, -2) +
    gouge(232, 270, 246, 318, 1.2, -1) +
    gouge(30, 268, 12, 318, 1.8, 2) +
    gouge(70, 254, 58, 318, 1.4, 2) +
    gouge(118, 262, 112, 318, 1, 1) +
    gouge(170, 268, 176, 318, 0.9, -1)
  const cloth =
    'M140 232Q180 230 218 222M146 240Q186 240 222 232' +
    ribbon(
      [
        [222, 266],
        [226, 280],
        [228, 292],
      ],
      6,
      0.5,
      false,
    )
  return { ground, hair, rim, back, neck, side, face, coat, cloth }
})

function RochesterPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-ro-head`
  const hairClip = `${uid}-ro-hair`
  const jawClip = `${uid}-ro-jaw`
  const sideClip = `${uid}-ro-side`
  const P = (d: string) => placePath(d, F)
  const [ex, ey] = F.pt([223, 126])
  const [ax, ay] = F.pt([155, 115])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={jawClip}>
          <path d={JAW_SHADOW} />
        </clipPath>
        <clipPath id={sideClip}>
          <path d={SHADOW_SIDE} />
        </clipPath>
      </defs>
      <path d={m.ground.paper} fill={PAPER} />
      <path d={m.ground.red} fill={RED} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={HAIR} />
        <path d={COAT} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* Paper, with a paper edge, so the black hair keeps its outline on the dark ground. */}
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.6} />
        <path d={m.face} strokeWidth={LINE.hairline} />
        <g clipPath={`url(#${jawClip})`}>
          <path d={m.neck} strokeWidth={1.1} />
        </g>
      </g>
      <path d={HAIR} fill={INK} />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
        <path d={m.rim} fill={PAPER} />
      </g>
      <ProfileEar at={[ax, ay]} h={40} />
      <g clipPath={`url(#${sideClip})`}>
        <path d={m.side} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* "grim mouth, chin, and jaw": the jaw square at its angle below the ear */}
        <path
          d={P('M238 211C224 216 204 214 190 208Q181 204 177 196Q173 186 171 172')}
          strokeWidth={1.8}
        />
        {/* "broad and jetty eyebrows", gathered, low over the eye */}
        <path d={P('M204 112Q215 106 226 107.5Q231 108.5 235.5 112')} strokeWidth={4.2} />
        <path d={P('M232.5 101.5L231 108')} strokeWidth={LINE.fine} />
        {/* "his full nostrils": a wide wing over the nostril */}
        <path d={P('M246.5 167.5C242.5 166 241.5 162 244 159.5')} strokeWidth={1.6} />
        <path d={P('M237 153C231 160 229 169 230.5 177')} strokeWidth={LINE.fine} />
        {/* the mouth: one hard line, turned down at the corner */}
        <path d={P('M238.5 179.5L229 180.5Q226 181.8 225.4 185.5')} strokeWidth={2.3} />
        <path d={P('M235 191Q232.5 194.5 233.5 198')} strokeWidth={LINE.fine} />
      </g>
      <ProfileEye at={[ex, ey]} s={0.98} heavy look={0.6} />
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.cloth} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={TIE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      {/* The fire. */}
      <g className="lc-flicker" style={timing({ delay: 0.3, dur: 1.6 })}>
        {FLAMES.map(([x, y, h, lean]) => (
          <path key={x} d={flame(x, y, h, lean)} fill={RED} />
        ))}
      </g>
      <path d={flame(291, 314, 20, -1) + flame(306, 314, 12, -1)} fill={PAPER} />
      <InnerRule />
    </>
  )
}

export const mrRochesterArt: LinocutArt = { width: PW, height: PH, Draw: RochesterPortrait }

export const mrRochester: Portrait = {
  name: 'Mr Rochester',
  art: mrRochesterArt,
  alt: "A linocut portrait of Mr Rochester in profile, facing right, drawn from Jane's description in Chapter 13, the evening she meets him in the drawing-room at Thornfield. He is a man of about thirty-five with broad, square shoulders. His forehead is upright and square, and his black hair is swept straight and level across the top of it. His black brows are broad and gathered low over a heavy-lidded eye; his nose is strong, with a high bridge and a full, flared nostril; his mouth is one hard line turned down at the corner, and his chin and jaw are square. He wears a dark coat with a high collar and a white neckcloth wound high round his throat. A fire burns red at the bottom right of the block, and its light fills the dark below his face. Five numbered red markers point to his eyebrows, his forehead and hair, his nose, his nostril, and his mouth and jaw.",
  describedBy: [
    { phrase: 'his broad and jetty eyebrows', at: [292, 78], to: [234, 96] },
    {
      phrase: 'his square forehead, made squarer by the horizontal sweep of his black hair',
      at: [292, 36],
      to: [236, 56],
    },
    {
      phrase: 'his decisive nose, more remarkable for character than beauty',
      at: [304, 120],
      to: [250, 132],
    },
    { phrase: 'his full nostrils', at: [306, 160], to: [244, 150] },
    { phrase: 'his grim mouth, chin, and jaw', at: [300, 204], to: [252, 186] },
  ],
  where: 'Chapter 13',
  note: 'Jane gives Rochester a face that is all force and no beauty, and she is drawn to it. In Hay Lane she has already said that she would not have dared to question a handsome young gentleman as she questioned him.',
  artNote:
    'Jane calls his face dark (Chapter 12); the print has one colour besides black, so his face is cut in paper like every other, and red is kept for the fire that shines on it. The words come from one paragraph, but it runs on past a dash, so the card prints the phrases alone.',
}

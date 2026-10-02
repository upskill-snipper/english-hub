import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  hatch,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
  twill,
} from './common'

/**
 * Aaron Winthrop at twenty-three, Dolly's son, as George Eliot describes him,
 * and nothing else. Chapter 16, walking home from church behind Eppie and
 * Silas on a bright autumn Sunday:
 *
 *   "That good-looking young fellow, in a new fustian suit, who walks behind
 *   her, is not quite sure upon the question of hair in the abstract ... She
 *   surely divines that there is some one behind her who is thinking about
 *   her very particularly ... and how pretty the red mountain-ash is over the
 *   Rectory wall?"
 *
 * (The card prints the whole paragraph; it is shortened here.) His age is
 * Eppie's word for it later in the chapter, "he was a-going in
 * four-and-twenty", and as a boy he had "Aaron's brown head" (Chapter 10).
 *
 * So: a good-looking young man in profile, facing right, towards Eppie, who
 * walks ahead of him out of the picture; regular, open features, his eye
 * fixed ahead and the corner of his mouth lifted ("thinking about her very
 * particularly"); his brown hair cut dark, thick and combed back, with paper
 * strands through it, as the panels cut it (AARON_MAN_CUTS in
 * ../panels/people.tsx). His suit is new
 * fustian, a heavy twilled cotton: a short working man's jacket, not a
 * gentleman's tail-coat, cut dark with the diagonal ribs of the twill
 * showing crisp in it; a shirt collar and a knotted neckerchief. Behind him
 * is the lane they walk along: the top of the Rectory wall, and over it the
 * mountain-ash Eppie points to, its leaves cut in paper and its berries the
 * one red in the plate. Nothing here comes from a film or stage production.
 *
 * Seeds: 6101 for the ground, 6102 for the cuts in the figure.
 */

/** A young man's head, facing right: the frame William Dane's is drawn in, a little fuller. */
const HEAD = smooth([
  [120, 258, 1],
  [115, 232],
  [102, 206],
  [92, 172],
  [90, 134],
  [98, 98],
  [118, 66],
  [148, 46],
  [182, 40],
  [208, 50],
  [224, 70],
  [231.5, 95],
  [233.5, 113],
  [229.5, 123],
  [234, 135],
  [242, 151],
  [248.5, 162, 1],
  [243, 167],
  [236.5, 168.5, 1],
  [237.5, 174.5],
  [235.5, 178.5, 1],
  [237, 183],
  [232, 189],
  [237.5, 199],
  [235.5, 209],
  [219, 215],
  [207, 225],
  [206, 242],
  [204, 258, 1],
])

/** His hair, thick and combed back, cut to the collar. */
const HAIR = smooth([
  [60, 20, 1],
  [216, 20, 1],
  [218, 56],
  [212, 66],
  [202, 68],
  [192, 80],
  [184, 98],
  [178, 118],
  [174, 128, 1],
  [166, 116],
  [156, 108],
  [144, 110],
  [136, 128],
  [130, 156],
  [122, 186],
  [112, 212, 1],
  [60, 212, 1],
])

/** A short jacket of new fustian on square shoulders. */
const JACKET = smooth([
  [-6, 330, 1],
  [0, 292],
  [22, 262],
  [62, 244],
  [106, 238],
  [150, 248],
  [198, 248],
  [230, 260],
  [250, 290],
  [256, 330, 1],
])
const LAPEL = smooth([
  [200, 262, 1],
  [214, 262],
  [236, 280],
  [244, 330, 1],
  [222, 330, 1],
  [214, 292],
])
/** The jacket's collar, turned down round the back of the neck. */
const COAT_COLLAR = smooth([
  [90, 246, 1],
  [104, 224],
  [126, 228],
  [150, 242],
  [164, 262],
  [136, 268],
  [104, 260, 1],
])
/** The shirt collar, its point standing up at the front of the throat. */
const SHIRT = smooth([
  [150, 236, 1],
  [184, 232],
  [206, 226],
  [222, 216, 1],
  [226, 240, 1],
  [208, 248],
  [156, 250, 1],
])
/** The neckerchief wound round the neck over it, and knotted at the front. */
const KERCHIEF = smooth([
  [146, 246, 1],
  [178, 244],
  [208, 240],
  [226, 238, 1],
  [230, 252],
  [218, 262],
  [186, 266],
  [150, 262, 1],
])
const KNOT = smooth([
  [214, 254, 1],
  [230, 252, 1],
  [236, 266],
  [230, 290, 1],
  [220, 276],
  [210, 290, 1],
  [208, 270],
])

/** The top of the Rectory wall behind him: its coping stones, along the lane. */
const WALL_TOP = 150
/** The mountain-ash over the wall: where each spray of leaves and berries hangs. */
const SPRAYS: { at: Pt; angle: number; len: number; berries: boolean }[] = [
  { at: [30, 30], angle: 70, len: 54, berries: true },
  { at: [62, 18], angle: 96, len: 48, berries: true },
  { at: [16, 70], angle: 52, len: 44, berries: false },
  { at: [96, 26], angle: 118, len: 40, berries: true },
  { at: [40, 96], angle: 64, len: 40, berries: true },
  { at: [286, 22], angle: 100, len: 46, berries: true },
  { at: [314, 50], angle: 120, len: 42, berries: false },
]

type Marks = {
  ground: string
  wall: string
  stones: string
  leaves: string
  twigs: string
  berries: Pt[]
  hair: string
  back: string
  neck: string
  suit: string
  coat: string
}

const marks = once<Marks>(() => {
  // A bright autumn morning: the sky light above the wall, the wall's face
  // darker below it.
  const ground = portraitGround(6101, (x, y) =>
    y < WALL_TOP ? clamp(0.55 + (x / 332) * 0.35) : clamp(0.12 + ((x - 40) / 280) * 0.4),
  )
  const r = rng(6102)
  // The coping, and the top courses of the stone below it, fading into the dark.
  let wall = `M12 ${WALL_TOP}H320M12 ${WALL_TOP + 9}H320`
  for (let x = 30; x < 320; x += 34) wall += `M${x} ${WALL_TOP}V${WALL_TOP + 9}`
  let stones = ''
  for (let row = 0; row < 3; row++) {
    const y = WALL_TOP + 26 + row * 17
    for (let x = 14 + (row % 2) * 24; x < 316; x += 48)
      stones += gouge(x, y, x + between(r, 30, 40), y + between(r, -0.6, 0.6), 0.9 - row * 0.25)
  }
  // Sprays of the mountain-ash: a twig with paired leaflets, berries at its end.
  let leaves = ''
  let twigs = ''
  const berries: Pt[] = []
  for (const s of SPRAYS) {
    const a = deg(s.angle)
    const [x0, y0] = s.at
    const x1 = x0 + Math.cos(a) * s.len
    const y1 = y0 + Math.sin(a) * s.len
    twigs += `M${n(x0)} ${n(y0)}L${n(x1)} ${n(y1)}`
    for (let t = 0.12; t < 0.95; t += 0.16) {
      const px = x0 + (x1 - x0) * t
      const py = y0 + (y1 - y0) * t
      for (const side of [-1, 1]) {
        const la = a + side * deg(62)
        const L = 11 - t * 3
        leaves += gouge(px, py, px + Math.cos(la) * L, py + Math.sin(la) * L, 2.2, side * 0.6)
      }
    }
    if (s.berries)
      for (let k = 0; k < 9; k++) berries.push([x1 + between(r, -7, 7), y1 + between(r, -5, 7)])
  }
  const hair =
    strands(r, 32, lerp2([116, 72], [126, 196]), lerp2([206, 56], [172, 110]), [0.4, 0.8], 3) +
    rimLight(r, { cx: 158, cy: 140, rx: 68, ry: 100 }, 160, 290, 46, 1)
  let back = ''
  for (let rad = 62; rad < 102; rad += 3.4)
    back += arcDashes(r, 172, 146, rad, deg(100), deg(152), [8, 22], [2, 5])
  const neck = hatch(r, { x0: 112, x1: 212, y0: 214, y1: 236 }, 5, 0.06)
  // "a new fustian suit": the diagonal ribs of the twill, crisp in the dark cloth.
  const suit = twill({ x0: -10, x1: 260, y0: 230, y1: 330 }, 6.4, 0.55)
  const coat =
    gouge(34, 272, 16, 318, 2, 2) +
    gouge(70, 258, 60, 318, 1.6, 2) +
    gouge(120, 270, 116, 318, 1.2, 1)
  return { ground, wall, stones, leaves, twigs, berries, hair, back, neck, suit, coat }
})

function AaronPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-aw-head`
  const suitClip = `${uid}-aw-suit`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={suitClip}>
          <path d={JACKET} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The Rectory wall, and the mountain-ash hanging over it. */}
      <rect x={10} y={WALL_TOP} width={312} height={PH - WALL_TOP} fill={INK} />
      <path d={m.wall} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.stones} fill={PAPER} />
      <path d={m.twigs} fill="none" stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
      <path d={m.leaves} fill={PAPER} stroke={INK} strokeWidth={0.6} />
      <path d={m.twigs} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <g fill={RED} stroke={INK} strokeWidth={0.8}>
        {m.berries.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={3.1} />
        ))}
      </g>
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={JACKET} />
      </g>
      <path d={JACKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <g clipPath={`url(#${suitClip})`}>
        <path d={m.suit} fill="none" stroke={PAPER} strokeWidth={0.8} />
      </g>
      <path d={m.coat} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.6} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <ProfileEar at={[156, 112]} h={48} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* the jaw, back to below the ear */}
        <path d="M235 209C214 218 190 212 176 196C170 188 168 178 168 168" strokeWidth={1.6} />
        {/* a level brow */}
        <path d="M203 109Q217 104 232 109.5" strokeWidth={3} />
        {/* nostril, the fold from the nose, and the corner of the mouth lifted */}
        <path d="M242.5 165C238.5 162.5 238 158.5 241 156" strokeWidth={1.4} />
        <path d="M233.5 152C227.5 159 225.5 167 227 174" strokeWidth={LINE.fine} />
        <path d="M236 178.5L227.5 179Q224.5 178.6 223.5 175.5" strokeWidth={1.8} />
        <path d="M231.5 189Q229.5 192 230.5 195" strokeWidth={LINE.hairline} />
      </g>
      {/* "thinking about her very particularly": his eye fixed ahead, on her */}
      <ProfileEye at={[222, 125]} s={0.96} look={1.2} />
      <path d={COAT_COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path
        d={KERCHIEF}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d="M160 254Q190 251 220 247M168 260Q194 258 216 255"
        fill="none"
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
      <path d={KNOT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <path d="M220 262L218 280" fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const aaronWinthropArt: LinocutArt = { width: PW, height: PH, Draw: AaronPortrait }

export const aaronWinthrop: Portrait = {
  name: 'Aaron Winthrop',
  art: aaronWinthropArt,
  alt: "A linocut portrait of Aaron Winthrop at twenty-three in profile, facing right, drawn from George Eliot's description in Chapter 16 as he walks home from church behind Eppie: a good-looking young man with regular, open features, thick dark hair combed back, his eye fixed ahead and the corner of his mouth lifted. He wears a new short jacket of fustian, dark, with the diagonal ribs of its twilled cloth showing, a white shirt collar and a dark knotted neckerchief. Behind him is the stone wall of the Rectory, and over it hang sprays of mountain-ash with pale leaves and clusters of red berries. Four numbered red markers point to his face, his jacket, his eye and the red berries over the wall.",
  describedBy: [
    { phrase: 'That good-looking young fellow', at: [192, 194], to: [206, 168] },
    { phrase: 'a new fustian suit', at: [292, 300], to: [236, 300] },
    { phrase: 'thinking about her very particularly', at: [292, 108], to: [228, 124] },
    { phrase: 'the red mountain-ash is over the Rectory wall', at: [118, 92], to: [76, 74] },
  ],
  where: 'Chapter 16',
  passage:
    'That good-looking young fellow, in a new fustian suit, who walks behind her, is not quite sure upon the question of hair in the abstract, when Eppie puts it to him, and thinks that perhaps straight hair is the best in general, but he doesn’t want Eppie’s hair to be different. She surely divines that there is some one behind her who is thinking about her very particularly, and mustering courage to come to her side as soon as they are out in the lane, else why should she look rather shy, and take care not to turn away her head from her father Silas, to whom she keeps murmuring little sentences as to who was at church and who was not at church, and how pretty the red mountain-ash is over the Rectory wall?',
  note: 'Aaron is a gardener who marries Eppie on the understanding that they will all live together: on the wedding morning she tells Silas, “you’ll only be taking Aaron to be a son to you.”',
  artNote:
    'Fustian is a heavy twilled cotton worn by working men, so his jacket shows the twill. The berries are red because Eppie says so; it is the one red in the print.',
}

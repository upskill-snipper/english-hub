import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  FACE_LEFT,
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanFeatures,
  combedHair,
  flip,
  handPaths,
  nudge,
  once,
  placer,
  portraitGround,
  scallops,
  smooth,
  type Knot,
} from './common'

/**
 * Miss Havisham, as Pip first sees her, and nothing else. Chapter 8, in her
 * dressing-room at Satis House, where no daylight comes:
 *
 *   "In an arm-chair, with an elbow resting on the table and her head
 *   leaning on that hand, sat the strangest lady I have ever seen, or shall
 *   ever see."
 *
 *   "She was dressed in rich materials—satins, and lace, and silks—all of
 *   white. Her shoes were white. And she had a long white veil dependent
 *   from her hair, and she had bridal flowers in her hair, but her hair was
 *   white. Some bright jewels sparkled on her neck and on her hands, and
 *   some other jewels lay sparkling on the table."
 *
 * and, in the next paragraph: "the bride within the bridal dress had
 * withered like the dress, and like the flowers, and had no brightness left
 * but the brightness of her sunken eyes", and the figure "had shrunk to skin
 * and bone".
 *
 * So: an old woman seated in profile, facing left, her elbow on the table
 * and her head leaning on that hand, the long, thin fingers along her cheek;
 * her white hair dressed up with a spray of white flowers at the crown, and
 * from it a long white veil falling down her back to the foot of the block;
 * a white satin dress hanging loose on a shrunken body, with lace at the
 * cuff; bright stones at her throat and in her rings, cut as points of light
 * with their rays, and more of them lying on the table. Her face is thin and
 * lined, the cheek and temple hollow, and her eye is sunk deep under the
 * brow, with the one bright glint in it. Everything about her is cut in
 * paper, the white the text repeats, against the dark room.
 *
 * SAFEGUARDING. The fire that later catches her dress (Chapter 49) is never
 * drawn anywhere on this site. There is no candle, no flame and no red in
 * this plate: the light falls on her from in front, out of the block. The
 * candle-light is in the ground only. Nothing here comes from a film or
 * stage production.
 *
 * Drawn facing right and turned by FACE_LEFT, so the markers below are
 * placed with flip(). Seeds: 7501 for the ground, 7502 for the cuts in the
 * figure.
 */

/** The one woman's head, aged: the nose and chin a little sharper, the neck thin. */
const HEAD_K: Knot[] = nudge(WOMAN_HEAD, [
  [16, 2, 1],
  [22, -1, 0],
  [23, 1, 1],
  [26, -3, 0],
  [27, -4, 0],
  [0, 6, 0],
  [1, 6, 0],
])

/** The head leaning ten degrees forward onto her hand, about the base of the neck. */
const F = placer([40, 0], 0.8, 10, [164, 252])
const HEAD = smooth(F.knots(HEAD_K))

/** Her white hair, dressed up off the face and over the whole of the head to the nape. */
const HAIR_K: Knot[] = [
  [227, 86],
  [222, 70],
  [208, 58],
  [184, 50],
  [154, 50],
  [128, 60],
  [108, 82],
  [98, 112],
  [98, 148],
  [106, 182],
  [124, 206, 1],
  [142, 190],
  [150, 164],
  [156, 140],
  [166, 120],
  [184, 106],
  [204, 97],
  [218, 94],
]
const HAIR_PLACED = F.knots(HAIR_K)
const HAIR = smooth(HAIR_PLACED)

/** Where the bridal flowers sit, at the crown, in the head's frame: centre and size. */
const FLOWERS: [number, number, number][] = [
  [178, 46, 8],
  [194, 50, 7],
  [162, 46, 7.5],
  [208, 58, 6],
  [148, 50, 6.5],
  [186, 34, 5.5],
  [168, 34, 5.5],
]

/**
 * "a long white veil dependent from her hair": from the flowers at the crown,
 * back over the head and down her back to the foot of the block, in the
 * plate's frame.
 */
const VEIL = smooth([
  [192, 44, 1],
  [160, 30],
  [118, 42],
  [86, 76],
  [62, 134],
  [42, 206],
  [26, 270],
  [16, 330, 1],
  [146, 330, 1],
  [128, 278],
  [118, 228],
  [118, 172],
  [128, 118],
  [148, 78],
  [172, 54],
])

/** The white satin dress, hanging loose on a shrunken body, seated, facing right. */
const DRESS = smooth([
  [84, 330, 1],
  [88, 282],
  [100, 242],
  [124, 216],
  [152, 206],
  [196, 212],
  [222, 228],
  [238, 262],
  [246, 330, 1],
])
/** The neckline at the collarbone. */
const NECKLINE = 'M148 206Q176 216 204 214'

/** Her forearm in its white sleeve, from the elbow on the table up to the hand. */
const SLEEVE = smooth([
  [180, 196, 1],
  [204, 198, 1],
  [222, 236],
  [244, 272],
  [252, 290, 1],
  [214, 294, 1],
  [194, 252],
  [176, 214],
])
/** The upper arm, from the shoulder forward and down to the elbow on the table. */
const UPPER_ARM = smooth([
  [132, 226],
  [162, 222],
  [204, 254],
  [250, 284],
  [254, 296, 1],
  [214, 298, 1],
  [170, 270],
  [130, 250],
])
/** The lace at the cuff. */
const CUFF: Pt[] = [
  [178, 202],
  [188, 204],
  [198, 205],
  [208, 204],
]

/** The hand her head leans on, its back to us, the long thin fingers up along her cheek. */
const HAND = handPaths({
  wrist: [
    [183, 196],
    [203, 198],
  ],
  knuckles: [
    [207, 167],
    [200, 162.5],
    [193, 161],
    [186, 162],
  ],
  tips: [
    [210, 139],
    [201, 132],
    [192, 132.5],
    [184, 137],
  ],
  width: [5.6, 6, 5.6, 5],
  bow: [0.6, 0.4, -0.4, -0.8],
  thumb: { root: [203, 190], tip: [219, 176], width: 5.8, bow: -1.5 },
})
/** Where her rings sit on the fingers, and where the stones lie on the table. */
const RINGS: Pt[] = [
  [192.4, 152],
  [185.4, 154],
]
const TABLE_JEWELS: Pt[] = [
  [268, 296],
  [290, 300],
  [306, 294],
]

/** The dressing-table she leans on, in front of her. */
const TABLE = 'M150 290L324 286L324 312L150 312Z'

type Marks = {
  ground: string
  veil: string
  hair: string
  socket: string
  face: string
  neck: string
  dress: string
  sleeve: string
  necklace: Pt[]
}

const marks = once<Marks>(() => {
  // A dark room lit by candles out of the block, in front of her.
  const ground = portraitGround(7501, (x, y) =>
    clamp(0.04 + ((x - 90) / 250) * 0.8 - Math.max(0, (y - 270) / 200)),
  )
  const r = rng(7502)
  // The veil is gauze: long fine strands of light falling in folds from
  // the crown over the dark, fanning out as the veil does, so the dark
  // shows through it.
  let veil = ''
  for (let i = 0; i < 40; i++) {
    const t = (i + between(r, 0.2, 0.8)) / 40
    const S: Pt = [184 - t * 76, 44 + t * 4]
    const C: Pt = [134 - t * 100 + between(r, -6, 6), 150 + between(r, -20, 20)]
    const E: Pt = [146 - t * 130 + between(r, -4, 4), 332]
    const pts: Pt[] = []
    for (let k = 0; k <= 14; k++) {
      const u = k / 14
      pts.push([
        (1 - u) * (1 - u) * S[0] + 2 * (1 - u) * u * C[0] + u * u * E[0],
        (1 - u) * (1 - u) * S[1] + 2 * (1 - u) * u * C[1] + u * u * E[1],
      ])
    }
    veil += ribbon(pts, between(r, 0.9, 1.7), 0.6)
  }
  // White hair, dressed up and back: fine ink strokes along it.
  const hair = combedHair(r, HAIR_PLACED, F.pt([150, 130]), 110, [5, 10])
  // "the brightness of her sunken eyes": the socket cut deep round the eye.
  let socket = ''
  const [sx, sy] = F.pt([214, 128])
  for (let rad = 8; rad < 15; rad += 2.2)
    socket += arcDashes(r, sx, sy, rad, deg(160), deg(330), [5, 10], [1, 2.5])
  // "withered": lines on the brow, the hollow temple, the lines at the mouth.
  const P = F.p
  let face = ''
  for (let i = 0; i < 3; i++)
    face += `M${P(206, 100 - i * 6)}Q${P(214, 97 - i * 6)} ${P(222, 100 - i * 6)}`
  for (let i = 0; i < 4; i++)
    face += `M${P(190 + i * 3, 104 + i)}Q${P(187 + i * 3, 118)} ${P(193 + i * 3, 128 - i)}`
  face += `M${P(232, 166)}Q${P(226, 172)} ${P(226, 180)}M${P(226, 184)}Q${P(222, 190)} ${P(224, 196)}`
  // A thin neck: its cords, and the hollow at its base.
  const neck = `M${P(204, 214)}Q${P(194, 232)} ${P(190, 250)}M${P(214, 212)}Q${P(208, 230)} ${P(208, 250)}`
  // The satin hanging loose in long folds, and the light on it.
  // The satin's long folds, and the shadow down her back, away from the light.
  let dress =
    'M126 230Q140 280 136 330M156 222Q166 270 162 330M232 250Q238 290 240 330' +
    'M118 222Q132 216 146 214'
  for (let y = 214; y < 330; y += 4.4)
    dress += `M80 ${n(y)}L${n(118 - (y - 214) * 0.05)} ${n(y + 3)}`
  const sleeve = 'M196 212Q212 244 230 280M206 210Q226 240 244 276'
  // "Some bright jewels sparkled on her neck": a row of stones at the throat.
  const necklace: Pt[] = []
  for (let i = 0; i < 6; i++) {
    const t = i / 5
    const [x, y] = F.pt([150 + t * 46, 238 + Math.sin(t * Math.PI) * 6])
    necklace.push([x, y])
  }
  return { ground, veil, hair, socket, face, neck, dress, sleeve, necklace }
})

/** A bright stone: a small cut diamond with four rays of light. */
function Sparkle({ at, size, rays }: { at: Pt; size: number; rays: string }) {
  const [x, y] = at
  const d = size
  return (
    <g>
      <path
        d={`M${n(x - d * 3.2)} ${n(y)}L${n(x + d * 3.2)} ${n(y)}M${n(x)} ${n(y - d * 3.2)}L${n(x)} ${n(y + d * 3.2)}`}
        stroke={rays}
        strokeWidth={0.9}
        strokeLinecap="round"
      />
      <path
        d={`M${n(x)} ${n(y - d)}L${n(x + d)} ${n(y)}L${n(x)} ${n(y + d)}L${n(x - d)} ${n(y)}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.9}
        strokeLinejoin="round"
      />
    </g>
  )
}

/** A small white flower: five petals round an ink heart, with an ink edge. */
function Flower({ at, r }: { at: Pt; r: number }) {
  const [x, y] = at
  const petals = Array.from({ length: 5 }, (_, i) => {
    const a = deg(i * 72 - 90)
    return [x + Math.cos(a) * r * 0.55, y + Math.sin(a) * r * 0.55] as Pt
  })
  return (
    <g>
      {petals.map(([px, py]) => (
        <circle
          key={`${n(px)}-${n(py)}`}
          cx={n(px)}
          cy={n(py)}
          r={n(r * 0.48)}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.9}
        />
      ))}
      <circle cx={n(x)} cy={n(y)} r={n(r * 0.26)} fill={INK} />
    </g>
  )
}

function HavishamPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-mh-head`
  const hairClip = `${uid}-mh-hair`
  const dressClip = `${uid}-mh-dress`
  const veilClip = `${uid}-mh-veil`
  const [ex, ey] = F.pt([217, 129])
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={dressClip}>
          <path d={DRESS} />
        </clipPath>
        <clipPath id={veilClip}>
          <path d={VEIL} />
        </clipPath>
      </defs>
      <g transform={FACE_LEFT}>
        <path d={m.ground} fill={PAPER} />
        {/* The table, and the jewels lying on it. */}
        <path d={TABLE} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d="M150 298L324 294" fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        {/* The ink halo that lifts the figure off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round">
          <path d={VEIL} />
          <path d={HEAD} />
          <path d={HAIR} />
          <path d={DRESS} />
          <path d={SLEEVE} />
          <path d={UPPER_ARM} />
        </g>
        {/* "a long white veil dependent from her hair", falling behind her: gauze over the dark. */}
        <path d={VEIL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g clipPath={`url(#${veilClip})`}>
          <path d={m.veil} fill={PAPER} />
        </g>
        {/* The white satin dress, hanging loose. */}
        <path d={DRESS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${dressClip})`}>
          <path d={m.dress} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        <path d={HEAD} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.face} strokeWidth={LINE.hairline} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
          <path d={m.socket} strokeWidth={1.1} />
        </g>
        <path d={NECKLINE} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        <ProfileEar at={F.pt(WOMAN_EAR)} h={35} />
        <WomanFeatures F={F} brow={1.8} mouth="set" />
        {/* the eye sunk deep under the brow, with its one bright glint */}
        <path
          d={`M${F.p(209, 128)}Q${F.p(217, 124)} ${F.p(225, 128)}`}
          fill="none"
          stroke={INK}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        <circle cx={n(ex)} cy={n(ey)} r={2.4} fill={INK} />
        <circle cx={n(ex + 0.8)} cy={n(ey - 0.8)} r={0.9} fill={PAPER} />
        {/* "her hair was white": dressed up, under the flowers. */}
        <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        {/* "bridal flowers in her hair" */}
        {FLOWERS.map(([x, y, r]) => (
          <Flower key={`${x}-${y}`} at={F.pt([x, y])} r={r * 0.8} />
        ))}
        {/* "Some bright jewels sparkled on her neck" */}
        {m.necklace.map((p) => (
          <Sparkle key={`${n(p[0])}-${n(p[1])}`} at={p} size={2.3} rays={INK} />
        ))}
        {/* Her arm, bent at the elbow on the table, and the hand her head leans on, with its rings. */}
        <path d={UPPER_ARM} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path
          d="M150 236Q186 250 212 272M146 246Q178 262 200 282"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        <path d={SLEEVE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.sleeve} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path
          d={scallops(CUFF, 3, 5)}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinecap="round"
        />
        <Hand paths={HAND} />
        {RINGS.map((p) => (
          <g key={`${p[0]}`}>
            <path
              d={`M${n(p[0] - 3.4)} ${n(p[1] + 1)}L${n(p[0] + 3.4)} ${n(p[1] - 1)}`}
              stroke={INK}
              strokeWidth={1.6}
            />
            <Sparkle at={[p[0], p[1] - 0.4]} size={2.1} rays={INK} />
          </g>
        ))}
        {TABLE_JEWELS.map((p) => (
          <Sparkle key={`${p[0]}`} at={p} size={2.4} rays={INK} />
        ))}
      </g>
      <InnerRule />
    </>
  )
}

export const missHavishamArt: LinocutArt = { width: PW, height: PH, Draw: HavishamPortrait }

export const missHavisham: Portrait = {
  name: 'Miss Havisham',
  art: missHavishamArt,
  alt: 'A linocut portrait of Miss Havisham as Pip first sees her in Chapter 8, in profile, facing left, in a dark room. She is an old woman with a thin, lined face, her eye sunk deep under the brow with one bright glint in it, and her head leans on her hand, her long, thin fingers along her cheek and her elbow on the table in front of her. Her white hair is dressed up, with a spray of small white flowers at the crown, and from it a long white veil falls down her back to the foot of the picture. She wears a white satin dress that hangs loose on her shrunken body, with lace at the cuff. Small bright stones sparkle at her throat and in the rings on her fingers, and more lie on the table. Everything about her is white against the dark. Four numbered red markers point to the veil, the flowers, her white hair and the jewels at her throat.',
  describedBy: [
    { phrase: 'a long white veil dependent from her hair', at: [306, 230], to: flip([60, 230]) },
    { phrase: 'bridal flowers in her hair', at: [222, 24], to: flip([174, 40]) },
    { phrase: 'her hair was white', at: [300, 92], to: flip([132, 100]) },
    {
      phrase: 'Some bright jewels sparkled on her neck and on her hands',
      at: [300, 178],
      to: flip([150, 190]),
    },
  ],
  where: 'Chapter 8',
  passage:
    'She was dressed in rich materials—satins, and lace, and silks—all of white. Her shoes were white. And she had a long white veil dependent from her hair, and she had bridal flowers in her hair, but her hair was white. Some bright jewels sparkled on her neck and on her hands, and some other jewels lay sparkling on the table.',
  note: 'Dickens repeats “white” until the word turns. The white of a wedding day has become the white of age, and the bride has stopped with her clocks, at the moment she was jilted.',
  artNote:
    'Everything about her is cut in paper, the white Dickens repeats, against the dark of a room where no daylight comes. Pip also sees that the white has faded to yellow; the print cannot show that, so it is left to the words.',
}

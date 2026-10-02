import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  rng,
} from '@/components/comics/linocut/carve'

import {
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  handPaths,
  hatch,
  inside,
  once,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Jonathan Small, under arrest in the cabin of the police launch, Chapter 11,
 * and nothing else:
 *
 *   "Our captive sat in the cabin opposite to the iron box which he had done
 *   so much and waited so long to gain. He was a sunburned, reckless-eyed
 *   fellow, with a network of lines and wrinkles all over his mahogany
 *   features, which told of a hard, open-air life. There was a singular
 *   prominence about his bearded chin which marked a man who was not to be
 *   easily turned from his purpose. His age may have been fifty or
 *   thereabouts, for his black, curly hair was thickly shot with grey. His
 *   face in repose was not an unpleasing one, though his heavy brows and
 *   aggressive chin gave him, as I had lately seen, a terrible expression
 *   when moved to anger. He sat now with his handcuffed hands upon his lap,
 *   and his head sunk upon his breast, while he looked with his keen,
 *   twinkling eyes at the box which had been the cause of his ill-doings."
 *
 * So: a man of about fifty in profile, facing right, his head sunk forward
 * on his breast, his eyes under heavy brows turned down at the iron box that
 * stands across the cabin from him; his face cut with more lines than any
 * other in these prints (the brow, the eye, the cheek); a short beard along
 * the jaw that juts at the chin, as the figure kit cuts it (HEAD_SMALL in
 * ../panels/people.tsx); his black, curly hair cut as paper curls and
 * grey strands; and his hands on his lap, in handcuffs. The box is "a solid
 * iron chest of Indian workmanship" (Chapter 10), with a broad hasp in front
 * (Chapter 11); the image wrought on the hasp is too small to cut at this
 * size and is left to the words. The cabin is "tiny" (Chapter 11), its lamp
 * printed in the spot colour.
 *
 * His face "in repose" is drawn, not the "terrible expression" of his anger:
 * the passage gives both, and says that at this moment there was "more
 * sorrow than anger" in it. His wooden leg is not in this passage and is
 * below the block.
 *
 * His clothes are not described, so he wears a plain dark coat. Nothing is
 * taken from a film or television production.
 *
 * Seeds: 4501 for the ground, 4502 for the cuts in the figure, 4503 for the
 * lamp's light.
 */

/**
 * The head is drawn upright in its own frame, in profile facing right, and
 * sunk forward on to his breast by HEAD_T.
 */
const HEAD_T = 'translate(-40 -20) rotate(16 150 230)'
const HEAD = smooth([
  [118, 240, 1],
  [118, 210],
  [110, 184],
  [104, 146],
  [108, 104],
  [124, 70],
  [150, 46],
  [182, 36],
  [208, 44],
  [222, 62],
  [228, 86],
  [230, 102],
  [233.5, 112, 1],
  [227.5, 121.5, 1],
  [232.5, 132],
  [238.5, 144],
  [243.5, 154],
  [246.5, 161, 1],
  [240, 164],
  [234, 166, 1],
  [238, 172],
  [240.5, 182],
  [243, 194],
  [245, 206],
  [242.5, 216, 1],
  [232, 222],
  [216, 225],
  [200, 228],
  [194, 240, 1],
])
/** "his black, curly hair": the mass of it, short, over the crown and the back. */
const HAIR_KNOTS: Knot[] = [
  [60, 14, 1],
  [214, 14, 1],
  [214, 48],
  [204, 56],
  [194, 74],
  [186, 98],
  [178, 116],
  [166, 118],
  [154, 126],
  [144, 150],
  [132, 176],
  [114, 188, 1],
  [60, 188, 1],
]
const HAIR = smooth(HAIR_KNOTS)
/**
 * "his bearded chin": a short beard from the sideburn below the ear, along
 * the line of the jaw to a jutting chin, with the moustache over the mouth.
 * The cheek above it is bare, so the face reads as a face.
 */
const BEARD_KNOTS: Knot[] = [
  [168, 158, 1],
  [176, 170],
  [190, 178],
  [206, 176],
  [220, 168],
  [234, 166, 1],
  [238.5, 172],
  [236, 177],
  [226, 178.5],
  [222, 182],
  [234, 186],
  [241, 186.5],
  [243.5, 194],
  [245.5, 206],
  [243, 216.5, 1],
  [232, 223],
  [216, 226],
  [200, 229],
  [186, 226],
  [172, 210],
  [164, 186],
]
const BEARD = smooth(BEARD_KNOTS)

/**
 * Hunched on the seat: the back, the shoulders and the chest, the collar of
 * his rough coat turned up round his neck.
 */
const COAT = smooth([
  [6, 330, 1],
  [10, 288],
  [24, 246],
  [44, 212],
  [64, 190],
  [86, 178],
  [118, 204],
  [152, 222],
  [184, 230],
  [206, 244],
  [216, 268],
  [222, 300, 1],
  [250, 300, 1],
  [252, 330, 1],
])
/** The turned-up collar of the coat, round the back of his neck. */
const COAT_COLLAR = smooth([
  [56, 202, 1],
  [70, 178],
  [92, 168],
  [110, 182],
  [124, 206],
  [98, 214],
  [72, 214],
])
/** The near arm, down from the shoulder to the elbow and along to the lap. */
const SLEEVE = smooth([
  [40, 236],
  [68, 214],
  [96, 226],
  [104, 258],
  [112, 274],
  [130, 270, 1],
  [134, 296, 1],
  [104, 304],
  [80, 298],
  [56, 274],
])
/** The thigh, under his hands, out to the knee. */
const THIGH = 'M100 330L104 298Q160 290 232 292Q248 294 250 306L250 330Z'

/** His near hand on his lap, palm down, the fingers apart. */
const NEAR_HAND = handPaths({
  wrist: [
    [138, 271],
    [141, 295],
  ],
  knuckles: [
    [159, 274],
    [162.5, 280.5],
    [164, 287],
    [164, 293.5],
  ],
  tips: [
    [179, 278],
    [183, 285],
    [184, 292],
    [181.5, 298.5],
  ],
  width: [6.2, 6.4, 6.2, 5.6],
  bow: [0.6, 0.6, 0.4, 0.2],
  thumb: { root: [143, 271], tip: [160, 264.5], width: 6.2, bow: -1 },
})
/** His far hand beside it, further along his lap, chained to the near one. */
const FAR_HAND = handPaths({
  wrist: [
    [172, 262],
    [175, 284],
  ],
  knuckles: [
    [193, 265],
    [196, 271],
    [197.5, 277],
    [197.5, 283],
  ],
  tips: [
    [212, 270],
    [215.5, 276.5],
    [216, 283],
    [213.5, 289],
  ],
  width: [5.8, 6, 5.8, 5.2],
  bow: [0.6, 0.6, 0.4, 0.2],
  thumb: null,
})
/**
 * "his handcuffed hands": an iron cuff round each wrist, and the short chain
 * between them, cut in paper across the dark of his lap.
 */
const CUFFS = [
  'M132 270Q138.5 267.5 143.5 269L146.5 296.5Q140.5 299 135 297.4Z',
  'M166 260.6Q172.5 258.2 177.2 259.8L179.8 284.6Q174 287 168.8 285.4Z',
]
const CHAIN_LINKS = [
  [149.6, 282.6, 3.4, 2],
  [155.4, 279, 3.4, 2],
  [161.2, 275.4, 3.4, 2],
] as const

/**
 * "the iron box which he had done so much and waited so long to gain": the
 * solid iron chest, across the cabin, its lid banded and riveted, and the
 * broad hasp on the face of it that is turned to him.
 */
const BOX_TOP = 'M254 206L298 198L330 204L286 212Z'
const BOX_FRONT = 'M254 206L286 212L286 330L254 330Z'
const BOX_SIDE = 'M286 212L330 204L330 330L286 330Z'
const HASP = 'M262 222L278 224.6L277 252L263 249.6Z'

/** The cabin lamp, hung from the deckhead, its flame in the spot colour. */
const LAMP_GLASS = 'M282 30Q282 22 296 22Q310 22 310 30L310 58Q310 64 296 64Q282 64 282 58Z'
const FLAME = 'M296 33C300.5 38 301.5 46 296 53C290.5 46 291.5 38 296 33Z'

type Marks = {
  ground: string
  glow: string
  hair: string
  beard: string
  lines: string
  neck: string
  coat: string
  rivets: [number, number][]
  bands: string
}

const marks = once<Marks>(() => {
  // The lamp at the top right; the corner behind him dark.
  const ground = portraitGround(4501, (x, y) =>
    clamp(0.06 + 0.9 * clamp(1 - Math.hypot(x - 296, (y - 44) * 1.1) / 300)),
  )
  const glow = rays(rng(4503), 296, 44, { from: 30, to: 86, every: 9, width: 1.6 })
  const r = rng(4502)
  // Black, curly hair shot with grey: small paper curls all through the
  // black, and grey strands lying with the hair.
  const twist = (x: number, y: number, s: number) => {
    const a = between(r, 0, Math.PI * 2)
    const x0 = x + Math.cos(a) * s
    const y0 = y + Math.sin(a) * s
    const x1 = x + Math.cos(a + 2.4) * s
    const y1 = y + Math.sin(a + 2.4) * s
    return `M${n(x0)} ${n(y0)}A${n(s)} ${n(s)} 0 0 1 ${n(x1)} ${n(y1)}`
  }
  const hairPoly = HAIR_KNOTS.map(([x, y]): [number, number] => [x, y])
  const headPoly: [number, number][] = [
    [104, 146],
    [108, 104],
    [124, 70],
    [150, 46],
    [182, 36],
    [208, 44],
    [222, 62],
    [228, 86],
    [118, 240],
  ]
  let hair = ''
  for (let i = 0, tries = 0; i < 120 && tries < 4000; tries++) {
    const x = between(r, 100, 214)
    const y = between(r, 36, 228)
    if (!inside(hairPoly, x, y) || !inside(headPoly, x, y)) continue
    hair += twist(x, y, between(r, 2.4, 4.2))
    i++
  }
  for (let i = 0; i < 26; i++) {
    const x = between(r, 120, 200)
    const y = between(r, 44, 120)
    hair += `M${n(x)} ${n(y)}q${n(-8)} ${n(10)} ${n(-14)} ${n(24 + between(r, 0, 8))}`
  }
  // The beard: smaller curls, and grey in it.
  const beardPoly = BEARD_KNOTS.map(([x, y]): [number, number] => [x, y])
  let beard = ''
  for (let i = 0, tries = 0; i < 90 && tries < 4000; tries++) {
    const x = between(r, 164, 246)
    const y = between(r, 156, 229)
    if (!inside(beardPoly, x, y)) continue
    beard += twist(x, y, between(r, 1.8, 3.2))
    i++
  }
  // "a network of lines and wrinkles all over his mahogany features": the
  // lined brow, the eye's crow's feet and pouch, the cheek.
  let lines = ''
  for (let i = 0; i < 5; i++) {
    const y = 72 + i * 7.5
    lines += `M${n(194 + i)} ${n(y + 1)}Q${n(204)} ${n(y - 2.4)} ${n(212)} ${n(y + 0.6)}Q${n(219)} ${n(y + 3)} ${n(226 - i * 0.6)} ${n(y - 0.4)}`
  }
  for (let i = 0; i < 4; i++)
    lines += `M${n(209)} ${n(126 + i * 3.4)}L${n(196 - i * 1.6)} ${n(118 + i * 6.4)}`
  lines += 'M211 137Q219 142.6 228 138M213 141.6Q220 146.6 227 143'
  for (let rad = 14; rad < 27; rad += 4)
    lines += arcDashes(r, 214, 134, rad, deg(66), deg(140), [6, 16], [2, 5])
  // The shadow of the beard on the neck, down to the collar.
  const neck = hatch(r, { x0: 104, x1: 200, y0: 176, y1: 244 }, 3.8, 0.1)
  const coat =
    gouge(30, 272, 20, 322, 2, 2) +
    gouge(60, 240, 46, 280, 1.4, 1.5) +
    gouge(176, 246, 200, 290, 1.1, -2)
  const rivets: [number, number][] = []
  for (let y = 236; y < 320; y += 14) rivets.push([258, y], [282, y])
  for (let x = 292; x < 328; x += 10) rivets.push([x, 214 - (x - 286) * 0.18])
  const bands = 'M254 268L286 274M286 274L330 266M254 300L286 306M286 306L330 298'
  return { ground, glow, hair, beard, lines, neck, coat, rivets, bands }
})

function SmallPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-js-head`
  const hairClip = `${uid}-js-hair`
  const beardClip = `${uid}-js-beard`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the planking of the tiny cabin */}
      <path
        d="M8 70H324M8 128H324M8 186H324M8 244H324"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      {/* the cabin lamp, its flame in the spot colour */}
      <path d={m.glow} fill={PAPER} />
      <path d="M296 8V22" stroke={INK} strokeWidth={6} />
      <path d="M296 8V22" stroke={PAPER} strokeWidth={1.6} strokeDasharray="3 2" />
      <path d={LAMP_GLASS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M286 29H306M286 57H306" stroke={PAPER} strokeWidth={1.4} />
      <path d={FLAME} fill={RED} className="lc-flicker" />
      {/* "the iron box": across the cabin from him */}
      <path d={BOX_SIDE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={BOX_FRONT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={BOX_TOP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d="M262 208L298 201.6M270 209.6L306 203" fill="none" stroke={INK} strokeWidth={0.9} />
      <path d={m.bands} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
      {m.rivets.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={n(x)} cy={n(y)} r={1.5} fill={PAPER} />
      ))}
      <path d={HASP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d="M266.5 232.6L273.6 233.8M266.2 240.6L273.2 241.8" stroke={INK} strokeWidth={1} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} transform={HEAD_T} />
        <path d={COAT} />
        <path d={THIGH} />
      </g>
      <path d={THIGH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M128 304Q180 298 236 300" fill="none" stroke={PAPER} strokeWidth={1.1} />
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <g transform={HEAD_T}>
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <path
            d={m.lines}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
          <path d={m.neck} fill="none" stroke={INK} strokeWidth={1.3} />
          <path d={HAIR} fill={INK} />
          <g clipPath={`url(#${hairClip})`}>
            <path d={m.hair} fill="none" stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
          </g>
        </g>
        <ProfileEar at={[170, 120]} h={44} />
        {/* the cheek above the beard, lined */}
        <path
          d="M200 152Q210 160 222 160M190 146Q198 156 206 162"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
        {/* the beard, full round a jutting chin */}
        <path d={BEARD} fill={INK} />
        <g clipPath={`url(#${beardClip})`}>
          <path d={m.beard} fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round" />
        </g>
        {/* the lower lip, set, below the moustache */}
        <path d="M226 180.4Q234 179 240.6 182.4Q234 184.8 226 182.6Z" fill={PAPER} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* "his heavy brows" */}
          <path d="M203 117Q217 108.5 235 112" strokeWidth={4.8} />
          <path d="M201 116.5Q208 111 214 110.6M199 119Q204 115.6 209 114.6" strokeWidth={1.3} />
          {/* the strong nose, and its nostril */}
          <path d="M233 131Q239 139 242.5 147" strokeWidth={LINE.fine} />
          <path d="M240.5 163C236 161.5 235.5 156.5 238.5 154" strokeWidth={1.5} />
          {/* the lid, heavy over a keen eye */}
          <path d="M210.5 127Q219.5 121.5 228.5 125.5" strokeWidth={2.6} />
          <path d="M212.5 132.5Q220 134.6 227 131" strokeWidth={LINE.fine} />
        </g>
        {/* "his keen, twinkling eyes", turned down at the box */}
        <circle cx={223.8} cy={129.6} r={2.7} fill={INK} />
        <circle cx={224.9} cy={128.6} r={1.05} fill={PAPER} />
      </g>
      <path d={COAT_COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(76, 186, 108, 204, 1.1, -1.5)} fill={PAPER} />
      {/* the near arm, and his handcuffed hands upon his lap */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(66, 236, 88, 286, 1.2, 1.5)} fill={PAPER} />
      <Hand paths={FAR_HAND} />
      <Hand paths={NEAR_HAND} />
      <g fill="none" stroke={PAPER} strokeWidth={1.8}>
        {CHAIN_LINKS.map(([x, y, rx, ry]) => (
          <ellipse key={x} cx={x} cy={y} rx={rx} ry={ry} transform={`rotate(-32 ${x} ${y})`} />
        ))}
      </g>
      {CUFFS.map((d) => (
        <g key={d}>
          <path d={d} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={d} fill="none" stroke={PAPER} strokeWidth={0.9} transform="translate(3 0.4)" />
        </g>
      ))}
      <InnerRule />
    </>
  )
}

export const jonathanSmallArt: LinocutArt = { width: PW, height: PH, Draw: SmallPortrait }

export const jonathanSmall: Portrait = {
  name: 'Jonathan Small',
  art: jonathanSmallArt,
  alt: 'A linocut portrait of Jonathan Small in profile, facing right, drawn from Watson’s description in Chapter 11: a man of about fifty sitting in the tiny cabin of the police launch, his head sunk forward on his breast and his eyes, under heavy brows, turned down at a solid iron chest that stands across the cabin from him, banded and riveted, with a broad hasp on its front. His face is cut with many fine lines and wrinkles, his black, curly hair and his short beard, which juts at the chin, are flecked with grey, and his hands rest on his lap in iron handcuffs joined by a short chain. A lamp with a red flame hangs from the planked ceiling. Six numbered red markers point to the iron box, the lines on his face, his bearded chin, his hair, his handcuffed hands and his eye.',
  describedBy: [
    {
      phrase: 'the iron box which he had done so much and waited so long to gain',
      at: [306, 172],
      to: [306, 228],
    },
    {
      phrase: 'a network of lines and wrinkles all over his mahogany features',
      at: [244, 70],
      to: [206, 92],
    },
    { phrase: 'a singular prominence about his bearded chin', at: [232, 188], to: [208, 210] },
    {
      phrase: 'his black, curly hair was thickly shot with grey',
      at: [64, 54],
      to: [118, 84],
    },
    { phrase: 'his handcuffed hands upon his lap', at: [114, 248], to: [138, 270] },
    { phrase: 'his keen, twinkling eyes', at: [252, 120], to: [210, 134] },
  ],
  where: 'Chapter 11',
  passage:
    'Our captive sat in the cabin opposite to the iron box which he had done so much and waited so long to gain. He was a sunburned, reckless-eyed fellow, with a network of lines and wrinkles all over his mahogany features, which told of a hard, open-air life. There was a singular prominence about his bearded chin which marked a man who was not to be easily turned from his purpose. His age may have been fifty or thereabouts, for his black, curly hair was thickly shot with grey. His face in repose was not an unpleasing one, though his heavy brows and aggressive chin gave him, as I had lately seen, a terrible expression when moved to anger. He sat now with his handcuffed hands upon his lap, and his head sunk upon his breast, while he looked with his keen, twinkling eyes at the box which had been the cause of his ill-doings. It seemed to me that there was more sorrow than anger in his rigid and contained countenance. Once he looked up at me with a gleam of something like humour in his eyes.',
  note: 'The villain the whole book has hunted is described with more sympathy than anyone expected: a hard life written on his face, “more sorrow than anger”, even humour. Small is about to tell his own story, and Watson’s description prepares us to listen to him.',
  artNote:
    'The print has no brown, so his sunburned, mahogany skin is left to the words. His face is drawn in repose, as Watson sees it here, not in the anger the passage remembers. His wooden leg is not in this passage, and is out of the picture.',
}

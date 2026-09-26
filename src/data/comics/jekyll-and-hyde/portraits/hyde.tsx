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
import { timing } from '@/components/comics/linocut/styles'

import { Hand, handPaths } from './hands'
import { InnerRule, PH, PW, hatch, once, portraitGround, rimLight, smooth } from './common'

/**
 * Mr Edward Hyde, as Stevenson describes him, and nothing else. Chapter 2,
 * by the door in the by-street at ten o'clock on a frosty night, when
 * Utterson stops him:
 *
 *   "He was small and very plainly dressed ... he drew a key from his pocket
 *   like one approaching home."
 *   "Mr. Hyde was pale and dwarfish, he gave an impression of deformity
 *   without any nameable malformation, he had a displeasing smile, he had
 *   borne himself to the lawyer with a sort of murderous mixture of timidity
 *   and boldness"
 *
 * and his hand, as Jekyll describes it waking in Chapter 10, to set beside
 * Jekyll's own "large, firm, white and comely" hand:
 *
 *   "lean, corded, knuckly, of a dusky pallor and thickly shaded with a swart
 *   growth of hair. It was the hand of Edward Hyde."
 *
 * So: a small man, drawn small in the block, against the tall door he has a
 * key to, whose keyhole comes up to his shoulder. His face is the palest
 * thing in the print: paper, with almost nothing cut into it but a heavy,
 * low brow, an eye glinting up out of the shadow of his hat, and a smile
 * drawn too wide. He has "fronted about with an air of defiance" towards
 * Utterson, out of the picture on the left, with his head sunk between
 * raised shoulders: the "timidity and boldness" is in the pose. NO DEFORMITY
 * IS DRAWN, because the text names none ("without any nameable
 * malformation"): the unease is in his stance, and the marker says so. His
 * hand holds up the key, knuckles standing out, cords on its back, cut over
 * with fine dark hair. The spot colour is the flame of the street lamp
 * ("the lamps ... drawing a regular pattern of light and shadow").
 *
 * He matches the Hyde of the panels (../panels/people.tsx): a plain low hat,
 * a plain short coat, a pale face, a heavy brow, a jutting jaw and a wide
 * smile. Nothing here comes from a film or stage production, and nothing
 * makes him an animal: he is a man.
 *
 * Drawn facing right and mirrored as a whole by MIRROR, so the marker
 * coordinates below are in the printed frame. Seeds: 3201 for the ground,
 * 3202 for the cuts in the figure.
 */

const MIRROR = `matrix(-1 0 0 1 ${PW} 0)`
/**
 * "dwarfish": the figure is drawn at full size and then shrunk towards the
 * foot of the block, so the door and its keyhole stand over him.
 */
const S = 0.84
const FIGURE = `translate(${200 * (1 - S)} ${PH * (1 - S)}) scale(${S})`
/** A point on the figure, as it is printed (shrunk, then mirrored). */
const printed = (x: number, y: number): [number, number] => [
  Math.round((PW - (200 + (x - 200) * S)) * 10) / 10,
  Math.round((PH + (y - PH) * S) * 10) / 10,
]

/** Head and neck in profile, facing right: a heavy brow, a jutting jaw. */
const HEAD = smooth([
  [152, 234, 1],
  [150, 214],
  [140, 196],
  [134, 170],
  [138, 146],
  [150, 128],
  [176, 118],
  [210, 116],
  [232, 124],
  [240, 133],
  [243.5, 140, 1],
  [237, 146],
  [240, 156],
  [245.5, 166],
  [249.5, 173, 1],
  [244.5, 177.5],
  [239, 178.5, 1],
  [241, 184],
  [238.5, 187.5, 1],
  [241, 191],
  [238, 195],
  [244, 203],
  [242, 212],
  [226, 216],
  [214, 220],
  [212, 234, 1],
])
/** A plain, low, round-crowned hat, pulled down over the brow. */
const CROWN = smooth([
  [148, 132, 1],
  [146, 106],
  [158, 88],
  [190, 80],
  [222, 86],
  [236, 104],
  [236, 130, 1],
])
const BRIM = smooth([
  [130, 136],
  [144, 127],
  [190, 124],
  [238, 125],
  [256, 132],
  [246, 137],
  [190, 134],
  [138, 140],
])
const HAIR = smooth([
  [120, 120, 1],
  [196, 120, 1],
  [188, 138],
  [176, 142],
  [164, 146],
  [160, 168],
  [156, 196],
  [146, 222, 1],
  [120, 222, 1],
])
const EAR = smooth([
  [178, 146],
  [168, 148],
  [164, 162],
  [168, 176],
  [178, 181],
  [184, 171],
  [184, 154],
])
/** A plain short coat, its collar turned up, the shoulders raised round the neck. */
const COAT = smooth([
  [92, 330, 1],
  [98, 280],
  [108, 236],
  [124, 210],
  [146, 202],
  [170, 220],
  [212, 228],
  [236, 226],
  [256, 244],
  [270, 284],
  [278, 330, 1],
])
const COLLAR = smooth([
  [132, 230, 1],
  [140, 198, 1],
  [168, 214],
  [198, 224],
  [218, 218, 1],
  [226, 234, 1],
  [194, 242],
  [152, 240],
])
const SLEEVE = smooth([
  [176, 330, 1],
  [184, 292],
  [206, 264],
  [232, 250, 1],
  [242, 282, 1],
  [220, 292],
  [210, 330, 1],
])

/**
 * "lean, corded, knuckly": the back of his near hand, closed round the bow of
 * the key, the knuckles standing out in a row, each finger cut apart from
 * the next; the thumb pressed over the top.
 */
const HAND = handPaths({
  wrist: [
    [234, 250],
    [240, 281],
  ],
  knuckles: [
    [262, 247],
    [265, 256.5],
    [265.5, 266],
    [263, 275],
  ],
  tips: [
    [262, 257],
    [264.5, 266.5],
    [264, 275.5],
    [260, 283],
  ],
  width: [5.8, 6, 5.8, 5.2],
  bow: [-9, -9, -8.5, -7],
  thumb: { root: [240, 250], tip: [270, 243], width: 6.4, bow: -2, front: true },
})
/** The key: its shaft out between thumb and finger, its bit at the end. */
const KEY_SHAFT = 'M262 246L306 238.5'
const KEY_BIT = 'M297 240L299 250.5L306 249.2L304.2 238.8'

/** The door behind him: panels and mouldings, cut in paper on the black. */
const DOOR_EDGE = 'M134 12L134 330'
const DOOR_PANELS =
  'M26 34L120 34L120 156L26 156ZM36 44L110 44L110 146L36 146Z' +
  'M26 178L120 178L120 330M26 330L26 178ZM36 188L110 188L110 330M36 330L36 188Z'
/** The keyhole, level with his shoulder. */
const ESCUTCHEON = smooth([
  [96, 204],
  [106, 204],
  [108, 222],
  [106, 240],
  [96, 240],
  [94, 222],
])
const KEYHOLE = 'M101 214.5a3.2 3.2 0 1 0 0.1 0L98.8 228L103.3 228Z'

/** The street lamp beyond him, on its bracket. */
const LAMP_GLASS = 'M280 40L304 40L300 70L284 70Z'
const LAMP_CAP = 'M276 40L308 40L292 26Z'
const LAMP_BRACKET = 'M300 28L322 20M292 26L292 18L322 18'
const FLAME = 'M292 66C287 60 288 53 292 46C296 53 297 60 292 66Z'

type Marks = {
  ground: string
  glow: string
  hair: string
  back: string
  shade: string
  neck: string
  coat: string
  sleeve: string
  blisters: string
  cords: string
  handHair: string
}

const marks = once<Marks>(() => {
  // The lamp's light, falling from the upper right onto his face; the door
  // side is left almost black.
  const ground = portraitGround(3201, (x, y) =>
    x < 138 ? 0 : clamp(0.95 - Math.hypot(x - 292, (y - 56) * 0.8) / 260),
  )
  const r = rng(3202)
  const glow = rays(r, 292, 56, { from: 20, to: 70, every: 9, width: 2 })
  // Short dark hair below the hat, with light caught on its edge.
  let hair = ''
  for (let i = 0; i < 16; i++) {
    const y = 144 + i * 4.6
    hair += gouge(162 - i * 0.6, y, 146 - i * 0.4, y + 6, between(r, 0.5, 0.9), -1)
  }
  hair += rimLight(r, { cx: 186, cy: 170, rx: 50, ry: 54 }, 140, 200, 14, 0.9)
  let back = ''
  for (let rad = 40; rad < 78; rad += 3.6)
    back += arcDashes(r, 196, 170, rad, deg(100), deg(150), [8, 20], [2, 6])
  // The shadow of the hat brim across his forehead.
  // The side of the face, turning away from the lamp: fine bowls of line.
  let shade = ''
  for (let rad = 26; rad < 44; rad += 4.6)
    shade += arcDashes(r, 238, 168, rad, deg(118), deg(190), [6, 16], [3, 7])
  const neck = hatch(r, { x0: 150, x1: 214, y0: 214, y1: 234 }, 4.4, 0.08)
  const coat =
    gouge(112, 262, 104, 318, 2, 2) +
    gouge(138, 246, 132, 318, 1.4, 1) +
    gouge(250, 260, 266, 318, 1.8, -2) +
    gouge(160, 230, 190, 236, 1, 0.5)
  const sleeve = gouge(190, 300, 214, 272, 1.4, 1)
  // "blistered and distained" (Chapter 1): flaking paint on the door.
  let blisters = ''
  for (let i = 0; i < 26; i++) {
    const x = between(r, 30, 118)
    const y = between(r, 40, 318)
    if (x > 90 && x < 112 && y > 196 && y < 246) continue
    blisters += gouge(x, y, x + between(r, 2, 5), y + between(r, -1, 1), between(r, 0.6, 1.3))
  }
  // The cords of the hand: tendons from the wrist to each knuckle.
  let cords = ''
  for (const [kx, ky] of [
    [260, 249],
    [262, 257],
    [262, 265],
    [260, 273],
  ])
    cords += `M${n(240)} ${n(258 + (ky - 249) * 0.55)}Q${n(252)} ${n((258 + ky) / 2)} ${n(kx)} ${n(ky)}`
  // "thickly shaded with a swart growth of hair": short fine strokes.
  let handHair = ''
  for (let i = 0; i < 46; i++) {
    const x = between(r, 240, 262)
    const y = between(r, 250, 280)
    if (x > 255 && (y < 251 || y > 277)) continue
    const a = deg(between(r, -30, 10))
    handHair += `M${n(x)} ${n(y)}l${n(Math.cos(a) * 3.4)} ${n(Math.sin(a) * 3.4)}`
  }
  return { ground, glow, hair, back, shade, neck, coat, sleeve, blisters, cords, handHair }
})

function HydePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-hy-head`
  const handClip = `${uid}-hy-hand`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={handClip}>
          <path d={HAND.back} />
        </clipPath>
      </defs>
      <g transform={MIRROR}>
        <path d={m.ground} fill={PAPER} />
        <path d={m.glow} fill={PAPER} />
        {/* the street lamp, its flame in the spot colour */}
        <path d={LAMP_BRACKET} fill="none" stroke={PAPER} strokeWidth={2.2} />
        <path d={LAMP_GLASS} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={FLAME} fill={RED} className="lc-flicker" style={timing({ delay: 0.3 })} />
        <path d={LAMP_CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        {/* the door */}
        <path d={m.blisters} fill={PAPER} />
        <path d={DOOR_PANELS} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={DOOR_EDGE} fill="none" stroke={PAPER} strokeWidth={3} />
        <path d={ESCUTCHEON} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={KEYHOLE} fill={INK} />
        <g transform={FIGURE}>
          {/* the ink halo that lifts him off the ground */}
          <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
            <path d={HEAD} />
            <path d={CROWN} />
            <path d={BRIM} />
            <path d={COAT} />
            <path d={SLEEVE} />
          </g>
          <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={m.coat} fill={PAPER} />
          {/* "pale": the face is bare paper, the palest thing in the print */}
          <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
          <g clipPath={`url(#${headClip})`}>
            <g fill="none" stroke={INK} strokeLinecap="round">
              <path d={m.back} strokeWidth={1.5} />
              <path d={m.shade} strokeWidth={LINE.hairline} />
              <path d={m.neck} strokeWidth={1} />
            </g>
            <path d={HAIR} fill={INK} />
            <path d={m.hair} fill={PAPER} />
          </g>
          <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
          <path
            d="M176 155C171 157 170 166 173 172C175 174 177 173 178 170"
            fill="none"
            stroke={INK}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          {/* no white linen at his throat: the coat is buttoned up to it */}
          <path d="M204 228Q214 230 222 225" fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            {/* a heavy, low brow */}
            <path d="M217 142Q231 136.5 244 140" strokeWidth={4.4} />
            {/* the nostril, and the crease from nose to mouth */}
            <path d="M243.5 174.5C240 172 239.5 168.5 242 166" strokeWidth={1.4} />
            <path d="M237 163C231 170 228.5 177 229 184" strokeWidth={1.2} />
            {/* "a displeasing smile": thin lips, drawn too wide, hooked up at the back */}
            <path d="M238.5 187.5C233 188.6 226 188.4 220 185" strokeWidth={2} />
            <path d="M220 185Q217 183.4 216.6 179" strokeWidth={1.3} />
            <path d="M221.5 189.5Q218.5 189 217.5 186.5" strokeWidth={LINE.hairline} />
            <path d="M237 193Q233.5 194.8 230 193" strokeWidth={LINE.fine} />
            {/* a jutting jaw, back to below the ear */}
            <path d="M242 211C226 218 206 214 194 203C188 195 186 186 186 178" strokeWidth={1.8} />
          </g>
          {/* the eye, glinting up out of the shadow under the brow */}
          <path d="M221 143Q232 139 242.5 142Q241 149 232 149.6Q225 149.4 221 143Z" fill={INK} />
          <path d="M226.5 147.8Q233 144 239.5 146.6Q233.5 150.8 226.5 147.8Z" fill={PAPER} />
          <circle cx={235.4} cy={146.9} r={2.1} fill={INK} />
          <circle cx={236.1} cy={146.2} r={0.7} fill={PAPER} />
          <path d={CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d="M150 116Q192 110 234 116" fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
          <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          {/* the near arm, the key and the hand */}
          <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={m.sleeve} fill={PAPER} />
          <path d={KEY_SHAFT} fill="none" stroke={INK} strokeWidth={5.6} strokeLinecap="round" />
          <path d={KEY_BIT} fill={INK} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
          <path d={KEY_BIT} fill={PAPER} />
          <path d={KEY_SHAFT} fill="none" stroke={PAPER} strokeWidth={2.4} strokeLinecap="round" />
          <Hand paths={HAND} knuckly>
            <g clipPath={`url(#${handClip})`} fill="none" stroke={INK} strokeLinecap="round">
              <path d={m.cords} strokeWidth={LINE.hairline} />
              <path d={m.handHair} strokeWidth={LINE.hairline} />
            </g>
          </Hand>
        </g>
      </g>
      <InnerRule />
    </>
  )
}

export const hydeArt: LinocutArt = { width: PW, height: PH, Draw: HydePortrait }

export const hyde: Portrait = {
  name: 'Mr Edward Hyde',
  art: hydeArt,
  alt: "A linocut portrait of Mr Hyde at night, drawn from Stevenson's descriptions in Chapters 2 and 10. He is small in the picture, standing in front of a tall, dark, panelled door with flaking paint, whose keyhole comes up to his shoulder. He has turned to face left, towards someone out of the picture, with his head sunk between raised shoulders. His face, in profile under a plain, low, round hat, is bare and pale, with a heavy, low brow, an eye glinting up out of the hat's shadow, a jutting jaw and a wide, unpleasant smile. He wears a plain dark coat with the collar turned up. In his hand he holds up a key; the knuckles stand out, the cords of the hand show, and the back of it is covered in fine dark hair. A street lamp burns red at the top left. Four numbered red markers point to his face, his smile, his hunched shoulders and his hand.",
  describedBy: [
    { phrase: 'pale and dwarfish', at: printed(292, 150), to: printed(222, 166) },
    { phrase: 'a displeasing smile', at: printed(292, 222), to: printed(238, 190) },
    {
      phrase: 'an impression of deformity without any nameable malformation',
      at: printed(92, 270),
      to: printed(136, 212),
    },
    { phrase: 'lean, corded, knuckly', at: printed(300, 300), to: printed(254, 270) },
  ],
  where: 'Chapter 2; Chapter 10',
  note: 'No one can say what is wrong with Hyde. Utterson names what he sees (pale, small, a smile) and then admits that it does not explain the “disgust, loathing and fear” he feels. The hand is Jekyll’s own description of waking as Hyde.',
  artNote:
    'No deformity is drawn, because the text names none; the unease is left to his stance and the words. The print cannot show the “dusky pallor” of his hand, so it shows only the hair and the knuckles.',
}

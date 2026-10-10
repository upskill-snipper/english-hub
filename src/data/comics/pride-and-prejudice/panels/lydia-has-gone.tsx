import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  CURL_EDGE,
  Person,
  TALL_HAT,
  TALL_HAT_BAND,
  TEMPLE_RINGS,
  type P,
  type Pose,
} from './people'

/**
 * Chapter 46 (Volume III, Chapter 4): "Lydia has gone", the tenth moment in
 * the guide's timeline. Drawn as she tells Darcy. Every detail is from the
 * held text (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "on the third, her repining was over, and her sister justified by the
 *   receipt of two letters from her at once"; "They had just been preparing to
 *   walk as the letters came in; and her uncle and aunt, leaving her to enjoy
 *   them in quiet, set off by themselves." So it is morning in a room at the
 *   inn at Lambton, she is alone with the two letters, one open on the table
 *   and the other in her hand, and through the window are the houses across
 *   the street. The room is not described, so it is a plain inn parlour.
 * - "as she reached the door, it was opened by a servant, and Mr. Darcy
 *   appeared. Her pale face and impetuous manner made him start". So the door
 *   he came in by stands behind him, shut again now the servant has gone for
 *   her uncle, and her face is the one face cut in PAPER, outlined in ink,
 *   over the kit's head (PALE_FACE below), as the Silas Marner prints cut
 *   Silas's pale face.
 * - "she sat down, unable to support herself, and looking so miserably ill";
 *   "She burst into tears as she alluded to it, and for a few minutes could
 *   not speak another word." Then she speaks the words on the panel. So she
 *   sits, the letter in her lap, and one tear stands on her cheek.
 * - "Darcy, in wretched suspense, could only say something indistinctly of
 *   his concern, and observe her in compassionate silence"; "Darcy was fixed
 *   in astonishment." So he stands just inside the room, his hat still in his
 *   hand, leaning towards her with his brow drawn down and one hand held out.
 *
 * WHAT IS NOT DRAWN. Lydia and Wickham are not in the picture: the moment is
 * the letter and the alarm it brings, as this novel's rules ask
 * (src/data/comics/pride-and-prejudice/index.ts). Nothing is given a colour,
 * so the print has no red.
 *
 * Seeds: 1001 (the wall), 1003 (the floor).
 */

const W = 860
const H = 340
/** The window on the street, the dado rail and the skirting. */
const WIN = { x0: 392, x1: 506, y0: 48, y1: 214 }
const RAIL = 222
const SKIRT = 266

type Marks = {
  wall: string
  floor: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A plain room at the inn, lit by the morning at its window.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 450) * 0.8, (y - 130) * 1.1) / 280) * 0.85, 0.05)
  const wall = gougeField(rng(1001), { x0: 0, x1: W, y0: 6, y1: RAIL - 2 }, light, {
    spacing: 6,
    len: [14, 54],
  })
  // The floor: boards running to a vanishing point by the window.
  const f = rng(1003)
  let floor = ''
  const V: Pt = [450, 80]
  for (let xt = -500; xt < 1500; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + (H - SKIRT) * t0,
        xt + (xb - xt) * t1,
        SKIRT + (H - SKIRT) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(f, 0.03, 0.08)
    }
  }
  for (let y = SKIRT + 2; y < SKIRT + 12; y += 3)
    floor += gouge(0, y, W, y, 1.8 - (y - SKIRT) * 0.14)
  cached = { wall, floor }
  return cached
}

/** The houses across the street at Lambton: [left edge, ridge, width]. */
const FRONTS: [number, number, number][] = [
  [392, 120, 36],
  [430, 104, 44],
  [476, 116, 34],
]
const STREET = FRONTS.map(
  ([x, top, w]) =>
    `M${x} ${WIN.y1}V${top + 10}L${x + w / 2} ${top}L${x + w} ${top + 10}V${WIN.y1}Z`,
).join('')
const STREET_WINDOWS = FRONTS.map(([x, top, w]) => {
  let d = ''
  for (let wy = top + 22; wy < WIN.y1 - 16; wy += 28)
    for (let wx = x + 6; wx < x + w - 10; wx += 14) d += `M${wx} ${wy}h7v11h-7Z`
  return d
}).join('')

/**
 * Darcy, just come in, standing over her with his hat in his hand, "fixed in
 * astonishment": leaning towards her a little, his brow drawn down.
 */
const DARCY: Pose = {
  look: 'darcy',
  brow: 'frown',
  legwear: 'boots',
  body: { neck: [6, -138], hip: [0, -72] },
  head: { at: [10, -160], rot: 8 },
  near: {
    pts: [
      [4, -132],
      [14, -108],
      [30, -100],
    ],
    hand: 'open',
    deg: 4,
    thumb: -1,
    spread: 14,
  },
  far: {
    pts: [
      [-4, -132],
      [-10, -106],
      [-8, -84],
    ],
    hand: 'grip',
  },
}
/** His hat, held by the brim at his side, crown down. In his own frame. */
const DARCY_HAT = 'translate(-6 -64) rotate(180) scale(0.8)'

/** Elizabeth, sat down again, unable to stand, Jane's second letter in her hand. */
const EL_AT: P = [596, 318]
const EL_SCALE = 1.45
const ELIZABETH: Pose = {
  look: 'elizabeth',
  seated: true,
  eye: 'none',
  body: { neck: [-2, -104], hip: [0, -54] },
  head: { rot: 4 },
  legs: {
    far: [
      [-2, -52],
      [32, -55],
      [30, -4],
    ],
    near: [
      [2, -52],
      [38, -54],
      [38, -4],
    ],
  },
  near: {
    pts: [
      [1, -98],
      [10, -76],
      [28, -76],
    ],
    hand: 'grip',
  },
  far: {
    pts: [
      [-4, -98],
      [0, -74],
      [18, -68],
    ],
    hand: 'mitt',
  },
}
/** Jane's letter in her hand, in her own frame: an open sheet, close-written. */
const LETTER = 'M24 -92L44 -98L50 -70L30 -64Z'
const LETTER_LINES = 'M28 -88L44 -93M29 -84L45 -89M30 -80L46 -85M31 -76L47 -81M32 -72L46 -76.6'

/**
 * "Her pale face": her face cut in PAPER over the front of the kit's
 * HEAD_ELIZABETH, in the frame of the heads, bounded by the line where her
 * dark hair meets it, and its features cut back in ink: the fine dark eye with
 * its spark, an arched brow, the mouth, the line of the jaw, and one tear on
 * the cheek. Her curls are printed again over its edge. Placed with the head's
 * own transform, which Person builds from the same pose.
 */
const PALE_FACE =
  'M13.6 -12.4C8.4 -11.6 3.6 -9.2 1 -5.4C-0.8 -2.6 -1.6 1.6 -3 5.4L-2 12C0 15.6 3.2 17.4 7.6 17C12.2 16.8 15.2 14.6 15.6 10.8L14.4 8.4L15.9 7.2L15.4 4.6L19.8 2.8L15 -4.6L14.6 -7.8C14.4 -10 14.1 -11.4 13.6 -12.4Z'
const PALE_FEATURES =
  'M6.6 -3.6Q10 -6.8 13.4 -4.2M7.2 -3.2Q10.2 -1.4 13 -3.6M6.6 -8.6Q10 -10.6 13.4 -8.8M11.4 9.6L14.2 9.2M2 12.8Q4.6 16.4 8.6 16.2'
const TEAR = 'M9.4 0.6Q8.2 3.4 9.2 4.6Q10.4 5.2 10.8 3.8Q10.8 2.4 9.4 0.6Z'

function PaleFace() {
  // Person scales a figure by its own size (Elizabeth is 0.9) and places a
  // seated lady's head 2.5 forward of and 21 above her neck.
  const s = EL_SCALE * 0.9
  const neck = ELIZABETH.body?.neck ?? [0, -132]
  const at: P = [neck[0] + 2.5, neck[1] - 21]
  return (
    <g transform={`translate(${EL_AT[0]} ${EL_AT[1]}) scale(${-s} ${s})`}>
      <g transform={`translate(${at[0]} ${at[1]}) rotate(${ELIZABETH.head?.rot ?? 0})`}>
        <path d={PALE_FACE} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        <path d={CURL_EDGE} fill={INK} />
        <path d={TEMPLE_RINGS} fill="none" stroke={PAPER} strokeWidth={0.9} />
        <path d={PALE_FEATURES} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
        <circle cx={10.2} cy={-3.7} r={1.7} fill={INK} />
        <circle cx={10.8} cy={-4.3} r={0.5} fill={PAPER} />
        <path
          className="lc-fade-in"
          style={timing({ delay: 1.4, dur: 1.2 })}
          d={TEAR}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.8}
        />
      </g>
    </g>
  )
}

function LydiaHasGone({ uid }: ArtProps) {
  const m = marks()
  const glass = `${uid}-glass`
  return (
    <>
      <defs>
        <clipPath id={glass}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 170], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={INK} />
        <path d={m.wall} fill={PAPER} />

        {/* the door he came in by, shut again behind the servant */}
        <rect
          x={70}
          y={44}
          width={118}
          height={SKIRT - 44}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <rect x={84} y={60} width={38} height={70} />
          <rect x={136} y={60} width={38} height={70} />
          <rect x={84} y={146} width={38} height={104} />
          <rect x={136} y={146} width={38} height={104} />
        </g>
        <circle cx={178} cy={160} r={3.2} fill={PAPER} />

        {/* the window on the street, in the morning */}
        <rect
          x={WIN.x0 - 9}
          y={WIN.y0 - 9}
          width={WIN.x1 - WIN.x0 + 18}
          height={WIN.y1 - WIN.y0 + 18}
          fill={INK}
        />
        <g clipPath={`url(#${glass})`}>
          <rect
            x={WIN.x0}
            y={WIN.y0}
            width={WIN.x1 - WIN.x0}
            height={WIN.y1 - WIN.y0}
            fill={PAPER}
          />
          <path d={STREET} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path d={STREET_WINDOWS} fill={INK} />
          <path d={gouge(392, 196, 506, 198, 1) + gouge(392, 204, 506, 205, 0.8)} fill={INK} />
        </g>
        <g fill={INK}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={3} />
          <rect x={WIN.x0} y={WIN.y1 - 3} width={WIN.x1 - WIN.x0} height={3} />
          <rect x={WIN.x0 + 55} y={WIN.y0} width={3.4} height={WIN.y1 - WIN.y0} />
          <rect x={WIN.x0} y={WIN.y0 + 40} width={WIN.x1 - WIN.x0} height={2.4} />
          <rect x={WIN.x0} y={WIN.y0 + 82} width={WIN.x1 - WIN.x0} height={4} />
          <rect x={WIN.x0} y={WIN.y0 + 124} width={WIN.x1 - WIN.x0} height={2.4} />
        </g>
        <rect x={WIN.x0 - 14} y={WIN.y1 + 4} width={WIN.x1 - WIN.x0 + 28} height={6} fill={PAPER} />

        {/* the dado rail, the skirting and the floor */}
        <rect x={0} y={RAIL} width={70} height={3} fill={PAPER} />
        <rect x={188} y={RAIL} width={W - 188} height={3} fill={PAPER} />
        <rect x={0} y={SKIRT - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={SKIRT} width={W} height={H - SKIRT} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the table where the letters came in, Jane's first letter open on it */}
        <path
          d="M640 232H790V238H640ZM648 238L644 320M782 238L786 320"
          fill={INK}
          stroke={INK}
          strokeWidth={4}
        />
        <path d="M638 230H792" stroke={PAPER} strokeWidth={1.4} />
        <g transform="translate(726 224) rotate(-6)">
          <rect x={-18} y={-9} width={36} height={18} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d="M-14 -5H12M-14 -1H14M-14 3H10" stroke={INK} strokeWidth={0.8} />
        </g>
        {/* her chair */}
        <path
          d="M620 150L627 150L629 240L566 240L566 247L627 247L629 318L622 318L620 247L574 247L574 318L567 318L565 240Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* Darcy, hat in hand; Elizabeth, pale, Jane's letter in her hand */}
        <Person pose={DARCY} at={[318, 328]} scale={1.4}>
          <g transform={DARCY_HAT}>
            <path d={TALL_HAT} fill={INK} stroke={PAPER} strokeWidth={1.8} />
            <path d={TALL_HAT_BAND} fill={PAPER} />
          </g>
        </Person>
        <Person pose={ELIZABETH} at={EL_AT} scale={EL_SCALE} flip>
          <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d={LETTER_LINES} stroke={INK} strokeWidth={0.7} />
        </Person>
        <PaleFace />
      </g>
    </>
  )
}

export const lydiaHasGoneArt: LinocutArt = { width: W, height: H, Draw: LydiaHasGone }

export const lydiaHasGone: ComicPanel = {
  moment: 'Lydia has gone',
  art: lydiaHasGoneArt,
  alt: "A linocut print of a plain room at the inn at Lambton in the morning, with a shut panelled door on the left and a window on the houses across the street. Mr Darcy stands just inside the room, tall in a dark coat and riding boots, holding his hat at his side and leaning towards Elizabeth with one hand held out and his brow drawn down. Elizabeth sits on a chair on the right with one of Jane's letters open in her hand; her face is pale, printed white, with a tear on her cheek. The other letter lies open on the table behind her.",
  quote: 'I have just had a letter from Jane, with such dreadful news.',
  quoteAt: 'top-right',
}

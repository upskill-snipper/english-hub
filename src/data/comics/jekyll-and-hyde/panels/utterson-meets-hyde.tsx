import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Door } from './by-street'
import {
  Figure,
  GRIP_HAND,
  HEAD_HYDE,
  HEAD_UTTERSON,
  HydeFace,
  LOW_HAT,
  OPEN_HAND,
  TOP_HAT,
  TOP_HAT_BAND,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import { COLLAR } from './investigation-kit'

/**
 * Chapter 2, "Search for Mr. Hyde": "Utterson meets Hyde", the third moment
 * in the guide's timeline. Every detail is from the text:
 *
 * - "It was a fine dry night; frost in the air; the streets as clean as a
 *   ballroom floor; the lamps, unshaken by any wind, drawing a regular
 *   pattern of light and shadow. By ten o'clock, when the shops were closed,
 *   the by-street was very solitary". So it is night, the shops are dark, a
 *   few upper windows are lit, and the lamps lay even pools of light on a
 *   clean, shining pavement, with dark between them.
 * - "it was with a strong, superstitious prevision of success that he
 *   withdrew into the entry of the court"; "He was small and very plainly
 *   dressed"; "he made straight for the door ... and as he came, he drew a key
 *   from his pocket like one approaching home. Mr. Utterson stepped out and
 *   touched him on the shoulder as he passed." So Utterson has come out of
 *   the dark entry of the court beside the block, and Hyde stands at the door
 *   of ./by-street.tsx, the same door as in the first panel, key in hand.
 * - "Will you let me see your face?" asked the lawyer. "Mr. Hyde appeared to
 *   hesitate, and then, as if upon some sudden reflection, fronted about with
 *   an air of defiance; and the pair stared at each other pretty fixedly for a
 *   few seconds." So Hyde has turned square to him, chin up, and the two
 *   stare.
 * - "Mr. Hyde was pale and dwarfish ... he had a displeasing smile";
 *   "cried Mr. Hyde, with a flush of anger". So his face is the pale one, the
 *   smile too wide, and the spot colour flushes his brow and cheek
 *   (HYDE_FLUSH in ./people.tsx, which says why not his mouth): the face
 *   Utterson reads "Satan's signature" on.
 *
 * Poole, whom Utterson visits round the corner afterwards, is not in the
 * street, so he is not drawn. Seeds: 331 (the house fronts), 332 (the
 * block), 333 (the pavement), 334 to 336 (the lamps), 337 (the frost).
 */

const W = 860
const H = 340
/** The foot of the house fronts, and the kerb. */
const BASE = 250
const KERB = 330
/** The block begins here; the court's entry is just left of it. */
const BL = 548
const LAMPS: P[] = [
  [96, 112],
  [330, 104],
  [812, 104],
]
const DOOR = { x: 676, y: 112, w: 70, h: 132 }

type Marks = {
  fronts: string
  block: string
  pave: string
  shine: string[]
  frost: string
  gleam: string
}

const lampLight = (x: number, y: number) =>
  Math.max(...LAMPS.map(([lx, ly]) => clamp(1 - Math.hypot((x - lx) * 0.8, (y - ly) * 1.1) / 190)))

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The shut house fronts, lit only round the lamps.
  const fronts = gougeField(
    rng(331),
    { x0: 0, x1: BL - 70, y0: 30, y1: BASE },
    (x, y) => 0.05 + 0.75 * lampLight(x, y) ** 1.4,
    { spacing: 6.2, len: [14, 50] },
  )
  // The block: the same blotched, discoloured wall as by day, in the dark.
  const blot = (x: number, y: number) =>
    0.5 + 0.5 * Math.sin(x / 17 + 1.3) * Math.cos(y / 13 + 0.4) * Math.sin((x + y) / 29)
  const block = gougeField(
    rng(332),
    { x0: BL, x1: W, y0: 0, y1: BASE },
    (x, y) => 0.02 + 0.22 * blot(x, y) ** 2 + 0.6 * lampLight(x, y) ** 1.6,
    { spacing: 5.6, len: [8, 26], gap: [5, 14], max: 1.8 },
  )
  // "the lamps ... drawing a regular pattern of light and shadow": pools of
  // light on the pavement round each lamp, dark between.
  const pave = gougeField(
    rng(333),
    { x0: 0, x1: W, y0: BASE + 4, y1: H },
    (x, y) => {
      const pool = Math.max(
        ...LAMPS.map(([lx]) => clamp(1 - Math.hypot((x - lx) * 0.5, (y - 292) * 1.5) / 86)),
      )
      return 0.02 + Math.min(1, pool * 1.6)
    },
    { spacing: 5.4, len: [24, 80], gap: [3, 16], max: 4.2 },
  )
  const shine = LAMPS.map(([x, y], i) =>
    rays(rng(334 + i), x, y + 4, { from: 18, to: 70, every: 7, width: 2.4 }),
  )
  // Frost in the air: a scatter of small cuts in the dark sky.
  const r = rng(337)
  let frost = ''
  for (let i = 0; i < 40; i++) {
    const x = between(r, 10, BL - 10)
    const y = between(r, 8, 40)
    frost += gouge(x, y, x + between(r, 1.5, 3.5), y + between(r, -0.6, 0.6), 0.7)
  }
  // "as clean as a ballroom floor": the lamps' gleam on the flags below them.
  let gleam = ''
  for (const [lx] of LAMPS)
    for (let k = -2; k <= 2; k++)
      gleam += gouge(
        lx + k * 5,
        268 + Math.abs(k) * 4,
        lx + k * 5.6,
        318 - Math.abs(k) * 6,
        1.6 - Math.abs(k) * 0.3,
      )
  cached = { fronts, block, pave, shine, frost, gleam }
  return cached
}

/** The row's roofline: the shut shops, dark against the night. */
const ROW = `M0 ${BASE}V40H120V26H136V40H250V32H268V40H${BL - 70}V${BASE}Z`
/** Upper windows, a few lit ("domestic sounds out of the houses"). */
const WINDOWS: [number, number, boolean][] = [
  [30, 60, true],
  [150, 60, false],
  [210, 60, true],
  [390, 60, false],
  [440, 66, true],
]

/** Utterson, out of the court's entry, standing square to Hyde and staring. */
const UTT_HEAD = { d: HEAD_UTTERSON, at: [434, 126] as P, rot: 3, scale: 1.3 }
const UTT_ARM: P[] = [
  [434, 168],
  [440, 200],
  [444, 226],
]
const UTTERSON: Part[] = gent({
  facing: 1,
  neck: [430, 160],
  hip: [428, 230],
  head: UTT_HEAD,
  hat: TOP_HAT,
  body: { width: 30, hem: 52, flare: 8 },
  near: {
    arm: UTT_ARM,
    leg: [
      [430, 230],
      [440, 274],
      [446, 320],
    ],
    hand: { parts: OPEN_HAND, scale: 0.95 },
  },
  far: {
    arm: [
      [426, 168],
      [420, 200],
      [418, 228],
    ],
    leg: [
      [426, 230],
      [418, 274],
      [410, 320],
    ],
  },
})

/** Hyde, small and plainly dressed, turned square to him, the key in his hand. */
const HYDE_HEAD = { d: HEAD_HYDE, at: [606, 176] as P, rot: 6, scale: 1.1 }
const HYDE_KEY_ARM: P[] = [
  [604, 212],
  [602, 244],
  [590, 231],
]
const HYDE: Part[] = [
  ...gent({
    facing: -1,
    neck: [606, 202],
    hip: [608, 256],
    head: HYDE_HEAD,
    hat: LOW_HAT,
    body: { width: 30, hem: 22, flare: 5 },
    arm: 8,
    leg: 9,
    near: {
      arm: HYDE_KEY_ARM,
      leg: [
        [604, 256],
        [594, 288],
        [588, 320],
      ],
    },
    far: {
      arm: [
        [612, 212],
        [624, 236],
        [624, 258],
      ],
      leg: [
        [610, 256],
        [620, 288],
        [628, 320],
      ],
      hand: { parts: GRIP_HAND, scale: 0.95 },
    },
  }),
]
/**
 * The key, held up by its shank so the whole of it shows: a ring bow, a long
 * shank and the bit, an old door key, drawn large enough to read as nothing
 * else.
 */
const KEY_BOW: P = [569, 224]
const KEY_SHANK = 'M573 224H602'
const KEY_BIT = 'M596 224H603V234H600V230H598V234H596Z'

function UttersonMeetsHyde(_props: ArtProps) {
  const m = marks()
  const ut = headAt(1, UTT_HEAD.at, UTT_HEAD.rot, UTT_HEAD.scale)
  const ht = headAt(-1, HYDE_HEAD.at, HYDE_HEAD.rot, HYDE_HEAD.scale)
  const keyHand = handAt(HYDE_KEY_ARM, -1, { parts: GRIP_HAND })
  return (
    <>
      <g className="lc-push" style={timing({ origin: [520, 170], push: 1.035 })}>
        {/* the clear, frosty night over the roofs */}
        <path d={m.frost} fill={PAPER} />

        {/* the shut shops, lit round the lamps */}
        <path d={ROW} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={m.fronts} fill={PAPER} />
        {WINDOWS.map(([x, y, lit]) => (
          <g key={x}>
            <rect
              x={x}
              y={y}
              width={26}
              height={36}
              fill={lit ? PAPER : INK}
              stroke={PAPER}
              strokeWidth={LINE.fine}
            />
            <path
              d={`M${x + 13} ${y}V${y + 36}M${x} ${y + 18}H${x + 26}`}
              stroke={INK}
              strokeWidth={1.6}
            />
          </g>
        ))}
        {/* shutters up for the night along the shopfronts */}
        <path
          d={`M10 150H150V${BASE - 6}H10ZM190 150H330V${BASE - 6}H190ZM360 150H${BL - 90}V${BASE - 6}H360Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />

        {/* the entry of the court, dark, where he waited */}
        <path d={`M${BL - 70} ${BASE}V60H${BL}V${BASE}Z`} fill={INK} />
        <path d={`M${BL - 70} ${BASE}V60`} stroke={PAPER} strokeWidth={LINE.carve} />

        {/* the block: blind, blotched, and its door */}
        <rect x={BL} y={0} width={W - BL} height={BASE} fill={INK} />
        <path d={m.block} fill={PAPER} />
        <path d={`M${BL} 0V${BASE}`} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={`M${BL} 96H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />
        <Door box={DOOR} weight={1.4} />

        {/* the pavement, clean, in pools of lamplight */}
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={INK} />
        <path d={m.pave} fill={PAPER} />
        <path d={m.gleam} fill={PAPER} />
        <path d={`M0 ${BASE}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
        <path d={`M0 ${KERB}H${W}`} stroke={INK} strokeWidth={3} />

        {/* the lamps, unshaken by any wind */}
        {LAMPS.map(([x, y], i) => (
          <g key={x}>
            <path d={m.shine[i]} fill={PAPER} />
            <path d={`M${x} ${y + 22}V${KERB}`} stroke={PAPER} strokeWidth={9} />
            <path d={`M${x} ${y + 22}V${KERB}`} stroke={INK} strokeWidth={6} />
            <path
              d={`M${x - 12} ${y - 14}L${x + 12} ${y - 14}L${x + 8} ${y + 18}H${x - 8}Z`}
              fill={PAPER}
              stroke={INK}
              strokeWidth={2.2}
              strokeLinejoin="round"
            />
            <path d={`M${x - 15} ${y - 14}L${x} ${y - 26}L${x + 15} ${y - 14}Z`} fill={INK} />
            <path d={`M${x} ${y - 14}V${y + 18}`} stroke={INK} strokeWidth={1.4} />
            <path d={`M${x - 10} ${y + 18}H${x + 10}`} stroke={INK} strokeWidth={3} />
          </g>
        ))}

        {/* Utterson */}
        <Figure parts={UTTERSON}>
          <path d={TOP_HAT_BAND + UTTERSON_CUTS + COLLAR} transform={ut} fill={PAPER} />
          <path
            d={gouge(438, 172, 436, 214, 0.9, 1.2) + gouge(430, 184, 424, 232, 0.9, 0.8)}
            fill={PAPER}
          />
        </Figure>

        {/* Hyde, his pale face flushed, the key in his hand */}
        <Figure parts={HYDE}>
          <path d={gouge(602, 214, 600, 250, 0.8, -0.8)} fill={PAPER} />
        </Figure>
        <HydeFace t={ht} flushed hat />
        <g>
          <circle cx={KEY_BOW[0]} cy={KEY_BOW[1]} r={4} fill="none" stroke={INK} strokeWidth={5} />
          <path d={KEY_SHANK} stroke={INK} strokeWidth={5} />
          <path d={KEY_BIT} fill={INK} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
          <circle
            cx={KEY_BOW[0]}
            cy={KEY_BOW[1]}
            r={4}
            fill="none"
            stroke={PAPER}
            strokeWidth={2.2}
          />
          <path d={KEY_SHANK} stroke={PAPER} strokeWidth={2.2} />
          <path d={KEY_BIT} fill={PAPER} />
        </g>
        <Figure parts={GRIP_HAND.map((q) => ({ ...q, t: keyHand }))} />
      </g>
    </>
  )
}

export const uttersonMeetsHyde: LinocutArt = { width: W, height: H, Draw: UttersonMeetsHyde }

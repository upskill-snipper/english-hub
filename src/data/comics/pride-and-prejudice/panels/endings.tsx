import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { foliage, leafCuts } from './copse'
import { Cut, Person, TALL_HAT, TALL_HAT_BAND, gripHand, type P, type Pose } from './people'

/**
 * Chapter 61: "Endings", the fourteenth and last moment in the guide's
 * timeline. The last chapter tells everyone's future rather than a scene, so
 * the panel draws what it says goes on at Pemberley, and gives its last
 * sentence the picture: "With the Gardiners, they were always on the most
 * intimate terms. Darcy, as well as Elizabeth, really loved them; and they
 * were both ever sensible of the warmest gratitude towards the persons who,
 * by bringing her into Derbyshire, had been the means of uniting them."
 * Every detail is from the held text (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - Pemberley as Elizabeth first saw it (Chapter 43): "It was a large,
 *   handsome, stone building, standing well on rising ground, and backed by a
 *   ridge of high woody hills;--and in front, a stream of some natural
 *   importance was swelled into greater, but without any artificial
 *   appearance. Its banks were neither formal, nor falsely adorned"; "They
 *   descended the hill, crossed the bridge, and drove to the door"; "the
 *   river, the trees scattered on its banks". So the house stands pale on its
 *   rise against dark wooded hills, the stream runs across before it between
 *   natural banks with trees scattered on them, and a bridge crosses it. The
 *   house's front is not described beyond that, so it is a plain large
 *   stone house of the time; nothing is taken from any house used in a film.
 * - "the visits of her uncle and aunt from the city" (Chapter 61): the
 *   Gardiners have come over the bridge, and on the near bank Elizabeth, at
 *   home and bareheaded, takes her aunt's hands in both of hers; Darcy, at
 *   her side, bows; Mr Gardiner has taken off his hat and holds it at his
 *   side (see MR_G for why it is not raised). Mrs Gardiner, who
 *   walked "arm in arm with Elizabeth" at Pemberley in Chapter 43, is in her
 *   bonnet, come from the carriage.
 *
 * The people are the kit's (./people.tsx): Darcy the tallest, Elizabeth with
 * her dark hair dressed up, the Gardiners drawn plainly, as the text gives no
 * looks for them. No colour is named here, and no flush, so the print has no
 * spot colour: the red is kept for what a scene is about, and nothing in this
 * one asks for it.
 *
 * Seeds: 6101 (the sky), 6102 (the woods on the hills), 6103 (the trees on
 * the banks), 6104 (the water), 6105 (the near bank), 6106 (the house's stone).
 */

const W = 860
const H = 340
/** The far bank of the stream, below the house. */
const BANK = 226
/** The near bank, where the four stand. */
const NEAR = 250
const FEET = 324

/** The ridge of high woody hills behind the house, as rounds of trees along its crest. */
const RIDGE: [number, number, number][] = []
for (let k = 0; k < 24; k++) {
  const x = -10 + k * 38
  const crest = 70 - 26 * Math.sin((k / 23) * Math.PI) + (k % 3) * 6
  RIDGE.push([x, crest, 26 + (k % 4) * 4])
}
/**
 * The woods on the ridge, below the rounds of their crest: their foot runs
 * low behind the house and lifts to the left, so the heads of the four on the
 * near bank are seen against the light of the park, not against the trees.
 */
const WOODS = `M0 60H${W}V158Q700 162 560 150Q470 134 380 118Q240 100 120 104Q60 106 0 112Z`
/** Trees scattered on the far bank, either side of the house. */
const BANK_TREES: [number, number, number][] = [
  [150, 176, 18],
  [172, 164, 20],
  [192, 180, 16],
  [826, 176, 24],
  [848, 160, 22],
]
/** The great tree at the left edge, framing the bridge. */
const LEFT_TREE: [number, number, number][] = [
  [6, 70, 44],
  [48, 40, 40],
  [86, 76, 32],
  [22, 118, 34],
  [70, 120, 26],
]

// ── THE HOUSE ──────────────────────────────────────────────────────────────
// Pemberley as the panel for "Pemberley" (./pemberley.tsx) cuts it, seen
// further off across the water: a long front of three storeys and fifteen
// bays in sunlit stone, a pediment on four columns over the door in the
// middle, the roof behind a cornice with its chimneys, and a terrace with
// steps. Drawn here at about three quarters of that panel's size, so a
// student sees one house.

const HOUSE = { x0: 488, x1: 776, top: 104, eaves: 115, foot: 200 }
const MID = (HOUSE.x0 + HOUSE.x1) / 2
const COLS = 15
const STEP = (HOUSE.x1 - HOUSE.x0 - 23) / (COLS - 1)
/** The three rows of windows: the top of each and its height. */
const ROWS: [number, number][] = [
  [HOUSE.eaves + 9, 15],
  [HOUSE.eaves + 32, 17],
  [HOUSE.eaves + 54, 9],
]

// ── THE FOUR ──────────────────────────────────────────────────────────────
const SCALE = 1.14
const MR_G_AT: P = [252, FEET]
const MRS_G_AT: P = [338, FEET]
const EL_AT: P = [430, FEET]
const DA_AT: P = [512, FEET]

/**
 * Mr Gardiner, facing right, bareheaded, his hat taken off and held by its
 * brim in his lowered near hand. (Raised, the hat floated over his head and
 * his hand came to his mouth at panel size.)
 */
const MR_G: Pose = {
  look: 'mrGardiner',
  head: { rot: 4 },
  legwear: 'boots',
  far: {
    pts: [
      [-4, -132],
      [-6, -106],
      [-2, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -132],
      [12, -106],
      [22, -88],
    ],
    hand: 'grip',
    deg: 40,
  },
}
/** His hat, crown down, its brim in his near hand: in his frame. */
const HAT_T = 'translate(29 -91) rotate(168) scale(0.8)'
/** Mrs Gardiner, facing right, in her bonnet, her hands out to her niece. */
const MRS_G: Pose = {
  look: 'mrsGardiner',
  head: { rot: 4 },
  hat: true,
  mouth: 'smile',
  far: {
    pts: [
      [0, -126],
      [14, -110],
      [34, -104],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [6, -126],
      [20, -108],
      [40, -100],
    ],
    hand: 'mitt',
  },
}
/** Elizabeth, facing left (flipped), bareheaded at home, taking her aunt's hands. */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  head: { rot: 4 },
  mouth: 'smile',
  far: {
    pts: [
      [0, -126],
      [14, -110],
      [36, -104],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [6, -126],
      [20, -108],
      [42, -100],
    ],
    hand: 'mitt',
  },
}
/** Darcy, facing left (flipped), at her side, bowing to their guests. */
const DARCY: Pose = {
  look: 'darcy',
  head: { rot: 14 },
  body: { neck: [8, -136], hip: [0, -72] },
  legwear: 'boots',
  far: {
    pts: [
      [2, -130],
      [0, -104],
      [6, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [10, -130],
      [10, -104],
      [16, -82],
    ],
    hand: 'mitt',
  },
}

type Marks = {
  park: string
  clouds: string
  ridge: string
  ridgeCuts: string
  trees: string
  treeCuts: string
  water: string
  bank: string
  stone: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const c = rng(6101)
  let clouds = ''
  for (let k = 0; k < 10; k++) {
    const y = between(c, 14, 46)
    const x = between(c, 340, 820)
    clouds += gouge(x, y, x + between(c, 40, 120), y + between(c, -1, 1), between(c, 0.5, 1))
  }
  const frame = { x0: 4, x1: W - 4, y0: 4, y1: H - 4 }
  // The woods on the hills: cut lightest along the crest, where the sky is.
  const ridgeCuts = leafCuts(
    rng(6102),
    RIDGE,
    (_x, y) => clamp(0.55 - (y - 40) / 160),
    frame,
    0.012,
  )
  const trees = [...BANK_TREES, ...LEFT_TREE]
  const treeCuts = leafCuts(
    rng(6103),
    trees,
    (x, y) => clamp(0.7 - (y - 40) / 220 - x / 4000),
    frame,
    0.024,
  )
  // The stream: long ripples cut in ink across the light on the water.
  const w = rng(6104)
  let water = ''
  for (let y = BANK + 5; y < NEAR - 3; y += 4.2) {
    let x = between(w, -20, 0)
    while (x < W) {
      const len = between(w, 18, 60)
      if (w() < 0.5) water += gouge(x, y, x + len, y + between(w, -0.3, 0.3), between(w, 0.4, 0.9))
      x += len + between(w, 12, 40)
    }
  }
  // The near bank: grass strokes, thicker towards us.
  const b = rng(6105)
  let bank = ''
  for (let y = NEAR + 6; y < H; y += 6) {
    let x = between(b, -10, 0)
    while (x < W) {
      const len = between(b, 4, 9) * (0.6 + (y - NEAR) / 80)
      if (b() < 0.34)
        bank += gouge(
          x,
          y,
          x + len * 0.35,
          y - len,
          0.4 + (y - NEAR) * 0.012,
          between(b, -0.4, 0.4),
        )
      x += between(b, 10, 26)
    }
  }
  // The park on the rising ground, in the light: short strokes of grass,
  // sparse, along the slope.
  const pk = rng(6107)
  let park = ''
  for (let y = 116; y < BANK - 2; y += 7) {
    let x = between(pk, -10, 0)
    while (x < W) {
      const len = between(pk, 6, 16)
      if (pk() < 0.32)
        park += gouge(x, y, x + len, y + between(pk, -0.6, 0.6), 0.4 + (y - 110) * 0.004)
      x += len + between(pk, 22, 50)
    }
  }
  // The house's stone: courses cut in fine lines across its front.
  let stone = ''
  for (let y = HOUSE.eaves + 6; y < HOUSE.foot - 3; y += 6)
    stone += `M${HOUSE.x0 + 2} ${y}H${HOUSE.x1 - 2}`
  cached = {
    park,
    clouds,
    ridge: foliage(RIDGE),
    ridgeCuts,
    trees: foliage(trees),
    treeCuts,
    water,
    bank,
    stone,
  }
  return cached
}

/** The house's windows, each an ink pane with its sill, the middle three bays below the top row left to the portico. */
function windows(): string {
  let d = ''
  for (const [y, h] of ROWS)
    for (let i = 0; i < COLS; i++) {
      const x = HOUSE.x0 + 11.5 + i * STEP - 3.8
      if (Math.abs(x + 3.8 - MID) < STEP * 1.6 && y > HOUSE.eaves + 20) continue
      d += `M${n(x)} ${y}h7.6v${h}h-7.6ZM${n(x - 1.1)} ${y + h}h9.8v1.6h-9.8Z`
    }
  return d
}
const WIN = windows()

function Endings({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
      {/* the sky */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.clouds} fill={INK} />
      {/* the ridge of high woody hills */}
      <path d={m.ridge} fill={INK} />
      <path d={WOODS} fill={INK} />
      <path d={m.ridgeCuts} fill={PAPER} />

      {/* the rising ground the house stands on, in the light */}
      <path d={m.park} fill={INK} />

      {/* Pemberley: a large, handsome, stone building */}
      <g>
        {/* the roof behind the cornice, and its chimneys */}
        <path
          d={`M${HOUSE.x0 + 8} ${HOUSE.eaves}L${HOUSE.x0 + 23} ${HOUSE.top}H${HOUSE.x1 - 23}L${HOUSE.x1 - 8} ${HOUSE.eaves}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path
          d={`M${HOUSE.x0 + 46} ${HOUSE.top}v-9h8v9ZM${HOUSE.x0 + 115} ${HOUSE.top}v-11h8v11ZM${HOUSE.x1 - 123} ${HOUSE.top}v-11h8v11ZM${HOUSE.x1 - 54} ${HOUSE.top}v-9h8v9Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={0.8}
        />
        {/* the front, in the paper of sunlit stone */}
        <rect
          x={HOUSE.x0}
          y={HOUSE.eaves}
          width={HOUSE.x1 - HOUSE.x0}
          height={HOUSE.foot - HOUSE.eaves}
          fill={PAPER}
        />
        <path d={m.stone} stroke={INK} strokeWidth={0.5} />
        <rect
          x={HOUSE.x0}
          y={HOUSE.eaves}
          width={HOUSE.x1 - HOUSE.x0}
          height={HOUSE.foot - HOUSE.eaves}
          fill="none"
          stroke={INK}
          strokeWidth={1.6}
        />
        <rect
          x={HOUSE.x0 - 3}
          y={HOUSE.eaves - 3}
          width={HOUSE.x1 - HOUSE.x0 + 6}
          height={4}
          fill={INK}
        />
        <path d={WIN} fill={INK} />
        {/* the portico: a pediment on four columns, the door between them */}
        <path
          d={`M${MID - 32} ${HOUSE.eaves + 1.5}L${MID} ${HOUSE.eaves - 17}L${MID + 32} ${HOUSE.eaves + 1.5}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
        <path
          d={`M${MID - 23} ${HOUSE.eaves - 1.5}L${MID} ${HOUSE.eaves - 12}L${MID + 23} ${HOUSE.eaves - 1.5}Z`}
          fill="none"
          stroke={INK}
          strokeWidth={0.8}
        />
        <rect
          x={MID - 23}
          y={HOUSE.eaves + 23}
          width={46}
          height={HOUSE.foot - HOUSE.eaves - 23}
          fill={INK}
        />
        <g fill={PAPER}>
          {[-20, -8, 4.6, 17].map((dx) => (
            <rect
              key={dx}
              x={MID + dx}
              y={HOUSE.eaves + 23}
              width={3.8}
              height={HOUSE.foot - HOUSE.eaves - 23}
            />
          ))}
        </g>
        <rect
          x={MID - 26}
          y={HOUSE.eaves + 20}
          width={52}
          height={4}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.8}
        />
        {/* the terrace and its steps */}
        <rect
          x={HOUSE.x0 - 6}
          y={HOUSE.foot - 1.5}
          width={HOUSE.x1 - HOUSE.x0 + 12}
          height={4.6}
          fill={INK}
        />
        <path
          d={`M${MID - 31} ${HOUSE.foot + 3}h62l4.6 4.6h-71.2Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1}
        />
      </g>

      {/* trees scattered on its banks, and the great tree at the left */}
      <path d="M60 280V112M64 150L84 128M56 170L36 150" stroke={INK} strokeWidth={13} />
      <path d={gouge(64, 268, 66, 140, 1.3)} fill={PAPER} />
      <path d="M172 218V176M838 210V170" stroke={INK} strokeWidth={5} />
      <path d={m.trees} fill={PAPER} stroke={PAPER} strokeWidth={3} />
      <path d={m.trees} fill={INK} />
      <path d={m.treeCuts} fill={PAPER} />

      {/* the stream, swelled between natural banks */}
      <path
        d={`M0 ${BANK + 2}Q200 ${BANK - 4} 420 ${BANK}T${W} ${BANK - 2}V${NEAR}Q600 ${NEAR + 4} 300 ${NEAR - 2}T0 ${NEAR + 2}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path d={m.water} fill={INK} />
      {/* the bridge: pale stone, three arches over the water, dark beneath them */}
      <path
        d={`M86 ${BANK - 12}Q166 ${BANK - 26} 246 ${BANK - 12}V${NEAR - 2}H86Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={LINE.bold}
        strokeLinejoin="round"
      />
      <path
        d={`M100 ${NEAR - 2}Q100 ${BANK + 2} 120 ${BANK + 2}Q140 ${BANK + 2} 140 ${NEAR - 2}ZM146 ${NEAR - 2}Q146 ${BANK - 4} 166 ${BANK - 4}Q186 ${BANK - 4} 186 ${NEAR - 2}ZM192 ${NEAR - 2}Q192 ${BANK + 2} 212 ${BANK + 2}Q232 ${BANK + 2} 232 ${NEAR - 2}Z`}
        fill={INK}
      />
      <path
        d={`M88 ${BANK - 6}Q166 ${BANK - 20} 244 ${BANK - 6}`}
        fill="none"
        stroke={INK}
        strokeWidth={1}
      />

      {/* the near bank */}
      <path d={m.bank} fill={INK} />
      {/* their shadows */}
      <g fill={INK}>
        {[MR_G_AT, MRS_G_AT, EL_AT, DA_AT].map(([x]) => (
          <ellipse key={x} cx={x} cy={FEET + 3} rx={28} ry={4} />
        ))}
      </g>

      {/* the Gardiners, come over the bridge */}
      <Person pose={MR_G} at={MR_G_AT} scale={SCALE}>
        <g transform={HAT_T}>
          <path d={TALL_HAT} fill={INK} stroke={PAPER} strokeWidth={1.6} />
          <path d={TALL_HAT_BAND} fill={PAPER} />
        </g>
        <Cut parts={[gripHand([22, -88], 40)]} halo={1} />
      </Person>
      <Person pose={MRS_G} at={MRS_G_AT} scale={SCALE} />
      {/* Elizabeth, taking her aunt's hands, and Darcy at her side */}
      <Person pose={DARCY} at={DA_AT} scale={SCALE} flip />
      <Person pose={ELIZABETH} at={EL_AT} scale={SCALE} flip />
    </g>
  )
}

export const endingsArt: LinocutArt = { width: W, height: H, Draw: Endings }

export const endings: ComicPanel = {
  moment: 'Endings',
  art: endingsArt,
  alt: "A linocut print of Pemberley on a fine day. Across a broad stream stands the great house, a long pale stone front of three storeys with rows of windows and a pediment on four columns over the door, its roof and chimneys against a ridge of dark wooded hills. A stone bridge of three arches crosses the stream on the left. On the near bank stand four people. Mr Gardiner, bareheaded, holds his tall hat in his lowered hand. Beside him Mrs Gardiner, in a dark gown and bonnet, holds out both her hands, and Elizabeth, bareheaded in a pale gown, takes them in hers; both are smiling. Darcy, tall in a dark tailcoat, stands at Elizabeth's side with his head bowed in greeting.",
  quote: 'With the Gardiners, they were always on the most intimate terms.',
  quoteAt: 'top-left',
}

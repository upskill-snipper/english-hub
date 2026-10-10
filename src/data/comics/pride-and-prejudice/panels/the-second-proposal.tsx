import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { foliage, leafCuts } from './copse'
import { Person, type P, type Pose } from './people'

/**
 * Chapter 58: "The second proposal", the thirteenth moment in the guide's
 * timeline. Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "The gentlemen arrived early"; "Bingley and Jane, however, soon allowed
 *   the others to outstrip them"; "They walked towards the Lucases, because
 *   Kitty wished to call upon Maria; and as Elizabeth saw no occasion for
 *   making it a general concern, when Kitty left them, she went boldly on
 *   with him alone." So the two of them walk alone on a field path in open
 *   country in the morning, and far off among its trees is a house, the
 *   Lucases', where Kitty has gone in.
 * - "You are too generous to trifle with me. If your feelings are still what
 *   they were last April, tell me so at once." So Darcy, walking at her side,
 *   turns his head to her as he speaks, bending it towards her.
 * - "Elizabeth was too much embarrassed to say a word"; "Had Elizabeth been
 *   able to encounter his eye ... but, though she could not look, she could
 *   listen". So she walks a little ahead with her head bowed and her eyes
 *   cast down, away from his, her hands together before her, and her cheek
 *   is flushed ("Elizabeth coloured and laughed", later in the walk): the
 *   spot colour, the kit's one patch on the cheek, never the mouth or chin.
 * - "They walked on, without knowing in what direction." So they are walking,
 *   not stopped, and the path runs on ahead of them.
 *
 * They are the kit's Darcy and Elizabeth (./people.tsx), dressed for a walk of
 * several miles: he in his tall hat and top boots, she in her bonnet. The time
 * of year is the autumn of the novel's last chapters (Bingley is back at
 * Netherfield "to shoot there for several weeks", Chapter 53), but no colour
 * of leaves is named, so the trees are printed in ink, and the red is
 * Elizabeth's flush and nothing else.
 *
 * Seeds: 5801 (the sky), 5802 (the fields), 5803 (the hedge and the trees),
 * 5804 (the grass and the path).
 */

const W = 860
const H = 340
/** The far line of the country. */
const HORIZON = 186
/** Where the near field begins. */
const NEAR = 246
/** Where they walk. */
const FEET = 322

/**
 * The hedgerow on the far side of the path, running away to the right: one
 * dark mass with a bumpy top, lower and thinner as it goes. Fill with INK.
 */
const HEDGE_LINE = (() => {
  let top = ''
  for (let k = 0; k <= 40; k++) {
    const t = k / 40
    const x = 500 + t * 372
    const base = 246 - t * 40
    const h = 26 - t * 16
    const y =
      base - h + Math.sin(k * 1.9) * (3.4 - t * 2) - Math.abs(Math.sin(k * 0.7)) * (4 - t * 3)
    top += `L${n(x)} ${n(y)}`
  }
  // its near end rounds off in a bush beside the path
  return `M500 252C488 252 482 240 488 232C486 222 496 216 504 220${top}L${W} 206L${W} 212L500 252Z`
})()
/** The rounds the hedge's leaves are cut in, along its length. */
const HEDGE: [number, number, number][] = []
for (let k = 0; k < 15; k++) {
  const t = k / 14
  HEDGE.push([Math.round(500 + t * 372), Math.round(238 - t * 38), Math.round(14 - t * 7)])
}
/** The trees standing in the hedge, and the trees round the Lucases' house. */
const HEDGE_TREES: [number, number, number][] = [
  [606, 168, 26],
  [632, 142, 28],
  [656, 170, 24],
  [780, 170, 16],
  [796, 156, 18],
  [814, 172, 14],
]
const LUCAS_TREES: [number, number, number][] = [
  [700, 176, 11],
  [716, 168, 12],
  [758, 174, 11],
]
/** The great tree at the left edge. */
const LEFT_TREE: [number, number, number][] = [
  [8, 66, 48],
  [58, 40, 44],
  [100, 76, 36],
  [36, 112, 38],
  [82, 120, 28],
]
/** A far line of trees along the horizon: one low, dark band with a bumpy top. */
const FAR_LINE = (() => {
  let top = ''
  for (let x = 0; x <= W; x += 12) {
    const y = HORIZON - 3 - Math.abs(Math.sin(x / 23)) * 5 - Math.abs(Math.sin(x / 61)) * 4
    top += `L${x} ${n(y)}`
  }
  return `M0 ${HORIZON + 2}${top}L${W} ${HORIZON + 2}Z`
})()

// ── DARCY AND ELIZABETH, walking ─────────────────────────────────────────────

const DA_AT: P = [350, FEET]
const EL_AT: P = [442, FEET]
const SCALE = 1.2
const DARCY: Pose = {
  look: 'darcy',
  head: { rot: 10 },
  hat: true,
  legwear: 'boots',
  body: { neck: [4, -138], hip: [0, -72] },
  legs: {
    far: [
      [-3, -72],
      [-10, -38],
      [-18, -4],
    ],
    near: [
      [3, -72],
      [14, -38],
      [22, -4],
    ],
  },
  // his far hand behind his back, his near hand easy at his side
  far: {
    pts: [
      [-2, -132],
      [-12, -106],
      [-8, -84],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [5, -132],
      [9, -106],
      [14, -84],
    ],
    hand: 'mitt',
  },
}
const ELIZABETH: Pose = {
  look: 'elizabeth',
  head: { rot: 14 },
  hat: true,
  eye: 'down',
  flush: true,
  body: { neck: [4, -132], hip: [0, -80] },
  // her hands together before her
  far: {
    pts: [
      [0, -126],
      [6, -104],
      [16, -96],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [6, -126],
      [10, -104],
      [18, -94],
    ],
    hand: 'mitt',
  },
}

type Marks = {
  clouds: string
  fields: string
  hedgeCuts: string
  trees: string
  treeCuts: string
  grass: string
  path: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky of an autumn morning: a few long thin clouds.
  const c = rng(5801)
  let clouds = ''
  for (let k = 0; k < 14; k++) {
    const y = between(c, 24, 140)
    const x = between(c, 130, 820)
    const len = between(c, 50, 150) * (1 - y / 260)
    clouds += gouge(x, y, x + len, y + between(c, -1, 1), between(c, 0.5, 1.1) * (1.2 - y / 200))
  }
  // The far fields in the light, in bands: ink furrows, closer and finer with distance.
  const f = rng(5802)
  let fields = ''
  for (let y = HORIZON + 6; y < NEAR - 2; y += 4.5) {
    const depth = (y - HORIZON) / (NEAR - HORIZON)
    let x = between(f, -20, 0)
    while (x < W) {
      const len = between(f, 16, 54)
      if (f() < 0.5) fields += gouge(x, y, x + len, y + between(f, -0.4, 0.4), 0.35 + depth * 0.8)
      x += len + between(f, 10, 34) * (0.6 + depth)
    }
  }
  const t = rng(5803)
  const frame = { x0: 4, x1: W - 4, y0: 4, y1: H - 4 }
  const hedgeCuts = leafCuts(t, HEDGE, (x) => clamp(0.65 - (x - 500) / 700), frame, 0.03)
  const trees = [...HEDGE_TREES, ...LUCAS_TREES, ...LEFT_TREE]
  const treeCuts = leafCuts(
    t,
    trees,
    (x, y) => clamp(0.7 - (y - 40) / 260 - x / 3000),
    frame,
    0.022,
  )
  // The near field: grass strokes, thicker towards us, none on the path.
  const p = rng(5804)
  const pathMid = (y: number) => {
    const d = (y - NEAR) / (H - NEAR)
    return 520 - d * 200
  }
  const pathHalf = (y: number) => 8 + ((y - NEAR) / (H - NEAR)) * 80
  const onPath = (x: number, y: number) => Math.abs(x - pathMid(y)) < pathHalf(y)
  let grass = ''
  for (let y = NEAR + 6; y < H; y += 6) {
    let x = between(p, -10, 0)
    while (x < W) {
      const len = between(p, 4, 9) * (0.6 + (y - NEAR) / 80)
      if (p() < 0.5 && !onPath(x, y))
        grass += gouge(
          x,
          y,
          x + len * 0.35,
          y - len,
          0.4 + (y - NEAR) * 0.012,
          between(p, -0.4, 0.4),
        )
      x += between(p, 9, 24)
    }
  }
  // The path: worn earth, a few stones.
  let path = ''
  for (let k = 0; k < 50; k++) {
    const y = between(p, NEAR + 4, H)
    const d = (y - NEAR) / (H - NEAR)
    const x = pathMid(y) + between(p, -0.9, 0.9) * pathHalf(y)
    path += gouge(x, y, x + between(p, 4, 12) * (0.5 + d), y + between(p, -0.4, 0.4), 0.4 + d * 0.9)
  }
  cached = {
    clouds,
    fields,
    hedgeCuts,
    trees: foliage(trees),
    treeCuts,
    grass,
    path,
  }
  return cached
}

/** The edges of the path, from the far end to the near. */
const PATH_EDGES = `M${n(520 - 8)} ${NEAR}Q${n(470)} ${NEAR + 50} ${n(320 - 88)} ${H}M${n(520 + 8)} ${NEAR}Q${n(520)} ${NEAR + 50} ${n(320 + 88)} ${H}`

function TheSecondProposal({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [390, 200], push: 1.03 })}>
      {/* the sky */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.clouds} fill={INK} />
      {/* the far fields in the light, a low line of trees along the horizon */}
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.2} />
      <path d={FAR_LINE} fill={INK} />
      <path d={m.fields} fill={INK} />
      {/* the Lucases' house, far off among its trees */}
      <path d="M708 186V171L726 162L744 171V186Z" fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path d="M714 173h4v5h-4zM734 173h4v5h-4zM724 177h4v9h-4z" fill={INK} />
      {/* the trees, each with a paper edge round its leaves, and their trunks */}
      <path d="M630 236V178M636 192L648 176M626 198L614 184" stroke={INK} strokeWidth={6} />
      <path d="M796 214V168" stroke={INK} strokeWidth={4} />
      <path d="M50 270V118M54 150L74 128M46 170L26 150" stroke={INK} strokeWidth={14} />
      <path d={gouge(54, 258, 56, 140, 1.4)} fill={PAPER} />
      <path d={m.trees} fill={PAPER} stroke={PAPER} strokeWidth={3} />
      <path d={m.trees} fill={INK} />
      <path d={m.treeCuts} fill={PAPER} />
      {/* the hedgerow, receding along the far side of the path */}
      <path d={HEDGE_LINE} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path d={m.hedgeCuts} fill={PAPER} />
      {/* the near field, and the path through it running on ahead of them */}
      <path
        d={`M0 ${NEAR}Q200 ${NEAR - 6} 420 ${NEAR}T${W} ${NEAR - 4}`}
        stroke={INK}
        strokeWidth={1.2}
        fill="none"
      />
      <path d={m.grass} fill={INK} />
      <path d={PATH_EDGES} fill="none" stroke={INK} strokeWidth={1.2} />
      <path d={m.path} fill={INK} />

      {/* their short morning shadows */}
      <ellipse cx={DA_AT[0] + 2} cy={FEET + 3} rx={34} ry={4} fill={INK} />
      <ellipse cx={EL_AT[0]} cy={FEET + 3} rx={24} ry={4} fill={INK} />
      {/* Darcy, turned to her; Elizabeth, a little ahead, her eyes down */}
      <Person pose={DARCY} at={DA_AT} scale={SCALE} />
      <Person pose={ELIZABETH} at={EL_AT} scale={SCALE} />
    </g>
  )
}

export const theSecondProposalArt: LinocutArt = { width: W, height: H, Draw: TheSecondProposal }

export const theSecondProposal: ComicPanel = {
  moment: 'The second proposal',
  art: theSecondProposalArt,
  alt: 'A linocut print of open country near Longbourn on an autumn morning, under a pale sky streaked with thin cloud. Darcy, tall in a dark tailcoat, pale breeches, top boots and a tall hat, walks along a field path beside Elizabeth, his head bent towards her as he speaks. Elizabeth walks a little ahead of him in a pale gown and a dark bonnet, her hands together before her, her head bowed and her eyes cast down, her cheek flushed red. The path runs on ahead of them beside a hedgerow towards a far-off house among trees. A large tree stands at the left edge, and a low line of trees marks the horizon.',
  quote: 'You are too generous to trifle with me.',
  quoteAt: 'top-right',
}

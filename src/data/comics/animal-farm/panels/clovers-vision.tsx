import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Benjamin, Cow, Cut, Hen, Horse, Muriel, Sheep, place } from './people'

/**
 * Chapter 7: "Clover's vision", the twenty-second moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "They had made their way on to the little knoll where the half-finished
 *   windmill stood, and with one accord they all lay down as though huddling
 *   together for warmth", "Clover, Muriel, Benjamin, the cows, the sheep, and
 *   a whole flock of geese and hens". So the animals lie close together on
 *   the knoll beside the windmill: a round stump of stone left off at an
 *   uneven height, since the rebuilding is not finished. The geese are drawn
 *   here, plain white farm geese; everyone else is the kit's (./people.tsx).
 * - Boxer is not there: "Only Boxer remained on his feet", and then "he moved
 *   off at his lumbering trot and made for the quarry" before the animals
 *   "huddled about Clover, not speaking". Squealer and his two dogs come
 *   later, after the song, so they are not there either.
 * - "Most of Animal Farm was within their view": "the long pasture stretching
 *   down to the main road, the hayfield, the spinney, the drinking pool, the
 *   ploughed fields where the young wheat was thick and green, and the red
 *   roofs of the farm buildings with the smoke curling from the chimneys."
 *   So the farm lies below on the right with all of those, and the red roofs
 *   the text names are the spot colour. The print cannot show green; the
 *   young wheat is left to the furrows.
 * - "It was a clear spring evening. The grass and the bursting hedges were
 *   gilded by the level rays of the sun." So the sun is low over the far
 *   hills and its level rays are cut across the paper sky, and the knoll's
 *   grass is the paper, lit.
 * - "As Clover looked down the hillside her eyes filled with tears." So
 *   Clover, among the others, has her head raised and turned down towards
 *   the farm, and a tear runs from her eye, cut in paper, never in red.
 *
 * The quotation is the narrator's words for what Clover "lacked the words to
 * express". Nothing is taken from a film, a cartoon or a stage production.
 * Seed 2222.
 */

const W = 860
const H = 340
/** The low sun, just above the far hills. */
const SUN: Pt = [640, 142]
/** The line of the far hills. */
const HILLS = (x: number) => 160 + 5 * Math.sin(x / 70) + 4 * Math.sin(x / 23 + 1)
/** The top of the knoll the animals lie on, falling away to the right. */
const KNOLL = (x: number) =>
  x < 300
    ? 236 - Math.sin((x / 300) * Math.PI * 0.5) * 8
    : 228 + Math.pow((x - 300) / 240, 1.6) * 110
/** The half-finished windmill: its foot, its width and its broken top. */
const MILL = { x0: 30, x1: 146, foot: 240, top: 102 }

type Marks = {
  skyRays: string
  hills: string
  far: string
  furrows: string
  pasture: string
  hedges: string
  spinney: string
  knoll: string
  grass: string
  smoke: string
  millTop: string
  courses: string
  joints: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2222)

  // "It was a clear spring evening": the sky is the paper, and the sun's
  // level rays are cut across it in ink, as in the Christmas morning print.
  let skyRays = ''
  for (let a = 182; a < 358; a += between(r, 5, 7)) {
    const ang = deg(a)
    let rad = between(r, 40, 64)
    while (rad < 700) {
      const len = between(r, 50, 120)
      const w0 = 0.4 + rad / 280
      skyRays += wedge(
        SUN[0] + Math.cos(ang) * rad,
        SUN[1] + Math.sin(ang) * rad,
        SUN[0] + Math.cos(ang) * (rad + len),
        SUN[1] + Math.sin(ang) * (rad + len),
        w0,
        w0 + len / 170,
      )
      rad += len + between(r, 6, 18)
    }
  }

  // The far hills: a dark band behind the farm.
  let hills = `M0 ${n(HILLS(0))}`
  for (let x = 0; x <= W; x += 8) hills += `L${n(x)} ${n(HILLS(x))}`
  hills += `L${W} 178L0 178Z`

  // The farm below, lit by the level sun: the paper, with the lie of the
  // fields scored in ink. First the far fields, in long thin rows.
  let far = ''
  for (let y = 180; y < 204; y += 4) {
    let x = 240 + between(r, -10, 0)
    while (x < W) {
      const len = between(r, 30, 90)
      if (r() < 0.6) far += gouge(x, y, x + len, y + between(r, -0.3, 0.3), 0.5 + (y - 180) / 40)
      x += len + between(r, 8, 30)
    }
  }
  // "the ploughed fields where the young wheat was thick and green": furrows
  // running away from the eye towards the hedge.
  let furrows = ''
  for (let k = -12; k < 26; k++) {
    const xb = 560 + k * 16
    const xt = 690 + k * 7
    furrows += wedge(xt, 214, xb, 262, 0.6, 2)
  }
  // The long pasture falling to the road: sparse short strokes of grass.
  const pasture = gougeField(
    r,
    { x0: 240, x1: W, y0: 262, y1: H },
    (x, y) => clamp(0.2 + (y - 262) / 300),
    { spacing: 6, len: [8, 30], gap: [10, 40] },
  )
  // Hedgerows between the fields, dark and a little ragged.
  let hedges = ''
  const hedgeLines: [number, number, number, number, number][] = [
    [250, 206, 870, 202, 6],
    [540, 214, 870, 212, 5],
    [530, 262, 870, 264, 8],
    [560, 212, 520, 264, 6],
  ]
  for (const [x0, y0, x1, y1, w] of hedgeLines) {
    const pts: Pt[] = []
    for (let i = 0; i <= 30; i++) {
      const t = i / 30
      pts.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + Math.sin(t * 40 + x0) * 1.1])
    }
    hedges += ribbon(pts, w, 0.25)
  }
  // "the spinney": a clump of trees on the far side of the farm.
  let spinney = ''
  for (let i = 0; i < 16; i++) {
    const x = 790 + between(r, -34, 40)
    const y = 196 + between(r, -10, 6)
    spinney += `M${n(x - 12)} ${n(y + 8)}C${n(x - 12)} ${n(y - 12)} ${n(x + 12)} ${n(y - 12)} ${n(x + 12)} ${n(y + 8)}Z`
  }

  // The knoll: "The grass and the bursting hedges were gilded by the level
  // rays of the sun", so its grass is the paper, lit from the right, with the
  // blades and the shade cut in ink, heavier on the near slope, away from the
  // sun. The animals lying on it are dark against it.
  let knoll = `M-4 ${H}L-4 ${n(KNOLL(0))}`
  for (let x = 0; x <= 560; x += 8) knoll += `L${n(x)} ${n(KNOLL(x))}`
  knoll += `L560 ${H}Z`
  let grass = ''
  for (let x = 4; x < 548; x += between(r, 3, 6)) {
    const top = KNOLL(x)
    const h = between(r, 4, 10)
    grass += wedge(x, top + 3, x + between(r, 1, 4), top - h, 1.3, 0.2)
  }
  grass += gougeField(
    r,
    { x0: 0, x1: 560, y0: 232, y1: H },
    (x, y) =>
      y > KNOLL(x) + 6 ? clamp(0.12 + (y - KNOLL(x)) / 260 - (x - 160) / 1400, 0, 0.8) : 0,
    { spacing: 5.5, len: [8, 34], gap: [6, 22] },
  )

  // "the smoke curling from the chimneys"
  let smoke = ''
  for (const [cx, cy] of [
    [544, 180],
    [572, 180],
    [662, 200],
  ]) {
    const pts: Pt[] = []
    for (let i = 0; i <= 18; i++) {
      const t = i / 18
      pts.push([cx - t * 30 + Math.sin(t * 7 + cx) * 4, cy - t * 42])
    }
    smoke += ribbon(pts, 4.6, 0.6)
  }

  // The half-finished windmill: its top left ragged where the building
  // stopped, and its courses of stone cut in paper, widest on the side the
  // sun is on.
  // The top falls away unevenly, a stone at a time, from the side the
  // building reached first: a wall left off, not battlements.
  let millTop = `M${MILL.x0} ${MILL.foot}L${MILL.x0 + 2} ${MILL.top + 4}`
  const drops = [0, 0, 3, 3, 9, 11, 11, 18, 24, 24, 31]
  const step = (MILL.x1 - MILL.x0 - 6) / (drops.length - 1)
  drops.forEach((dy, i) => {
    const x = MILL.x0 + 3 + step * i
    const y = MILL.top + 4 + dy
    millTop += `L${n(x)} ${n(y)}L${n(x + step)} ${n(y)}`
  })
  millTop += `L${MILL.x1} ${MILL.foot}Z`
  let courses = ''
  let joints = ''
  for (let y = MILL.top + 22, row = 0; y < MILL.foot - 4; y += 12, row++) {
    const inset = ((MILL.foot - y) / (MILL.foot - MILL.top)) * 5
    const x0 = MILL.x0 + inset
    const x1 = MILL.x1 - inset
    // A course is an arc: the tower is round.
    const pts: Pt[] = []
    for (let i = 0; i <= 16; i++) {
      const t = i / 16
      pts.push([x0 + (x1 - x0) * t, y + Math.sin(t * Math.PI) * 3])
    }
    for (let i = 0; i < 16; i++) {
      const t = (i + 0.5) / 16
      const L = clamp(t * 1.2 - 0.1)
      courses += gouge(pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1], 0.3 + L * 1.1)
    }
    // The vertical joints between stones, closer together at the edges, as
    // on a round tower.
    for (let k = 1; k < 8; k++) {
      const u = (k + (row % 2) * 0.5) / 8.5
      const t = 0.5 - Math.cos(u * Math.PI) / 2
      const x = x0 + (x1 - x0) * t
      const yy = y + Math.sin(t * Math.PI) * 3
      if (t > 0.08) joints += gouge(x, yy, x, yy + 11, 0.3 + clamp(t * 1.2 - 0.1) * 0.8)
    }
  }
  cached = {
    skyRays,
    hills,
    far,
    furrows,
    pasture,
    hedges,
    spinney,
    knoll,
    grass,
    smoke,
    millTop,
    courses,
    joints,
  }
  return cached
}

/** Where Clover lies, and how far her head is lowered towards the farm. */
const CLOVER = { at: [318, 244] as Pt, s: 1.3, headDown: 10 }

/**
 * Her eye, in the plate's coordinates: the kit's eye cut, (18.8, -1.1) in the
 * horse's head frame, carried through the same transforms the kit gives a
 * lying horse's head (HEAD_FRAME, the turn about the withers, the drop to
 * the ground, the placing).
 */
const EYE: Pt = (() => {
  const rot = (p: Pt, deg0: number, c: Pt = [0, 0]): Pt => {
    const a = (deg0 * Math.PI) / 180
    const x = p[0] - c[0]
    const y = p[1] - c[1]
    return [c[0] + x * Math.cos(a) - y * Math.sin(a), c[1] + x * Math.sin(a) + y * Math.cos(a)]
  }
  let p: Pt = [18.8 * 0.84, -1.1 * 0.84]
  p = rot(p, 56)
  p = [p[0] + 72, p[1] - 158]
  p = rot(p, CLOVER.headDown, [40, -104])
  p = [p[0], p[1] + 54]
  return [CLOVER.at[0] + p[0] * CLOVER.s, CLOVER.at[1] + p[1] * CLOVER.s]
})()
/** The line of her face, and so of her eye, in the plate: the head frame's 56 degrees, plus the bow. */
const FACE_DEG = 56 + CLOVER.headDown
const along = (d: number, off = 0): Pt => {
  const a = (FACE_DEG * Math.PI) / 180
  return [
    EYE[0] + Math.cos(a) * d - Math.sin(a) * off,
    EYE[1] + Math.sin(a) * d + Math.cos(a) * off,
  ]
}
/**
 * Her wet eye: a dark socket, so the eye shows through her hatching, and the
 * eye cut in it, long and bright.
 */
const SOCKET = (() => {
  const [a, b, c, d] = [along(-6.5), along(0, -5), along(6.5), along(0, 5.5)]
  return `M${n(a[0])} ${n(a[1])}Q${n(b[0])} ${n(b[1])} ${n(c[0])} ${n(c[1])}Q${n(d[0])} ${n(d[1])} ${n(a[0])} ${n(a[1])}Z`
})()
const WET_EYE = gouge(...along(-4.6), ...along(4.6), 1.5)
/** A tear welling from the eye and running straight down her cheek, cut in paper. */
const TEAR = (() => {
  const [x, y] = along(1.5, 4)
  return `M${n(x)} ${n(y)}C${n(x + 3)} ${n(y + 6)} ${n(x + 5.4)} ${n(y + 11)} ${n(x + 3.4)} ${n(y + 15)}C${n(x + 1.6)} ${n(y + 18)} ${n(x - 3.4)} ${n(y + 17)} ${n(x - 3.2)} ${n(y + 13)}C${n(x - 3)} ${n(y + 9.4)} ${n(x - 1.4)} ${n(y + 5)} ${n(x)} ${n(y)}Z`
})()

/**
 * The geese, "a whole flock of geese": not described, so plain white farm
 * geese sitting in the grass, drawn here because the kit has none. Facing
 * right, sitting on y 0, about 22 high.
 */
const GOOSE_BODY =
  'M-16 0C-20 -5 -18 -12 -10 -13C-2 -14 6 -12 9 -8C12 -12 12 -18 11 -22C11 -26 15 -28 18 -26C20 -25 21 -23 20.5 -21.5L25 -20L20.5 -18.6C18 -16 16 -12 15 -6C14 -2 10 0 6 0Z'
function Goose({ at, s = 1 }: { at: Pt; s?: number }) {
  const w = (v: number) => Math.round((v / s) * 100) / 100
  return (
    <Cut
      parts={[{ d: GOOSE_BODY }]}
      tone="paper"
      halo={w(1.5)}
      cuts={gouge(15.6, -23.4, 18, -23.6, w(0.55)) + gouge(-12, -7, 4, -8, w(0.45), w(1.2))}
      transform={place(at, s)}
    />
  )
}

/** The farm buildings in the valley: dark walls under red roofs. */
function Farm() {
  return (
    <g>
      <g fill={INK}>
        {/* the farmhouse, two chimneys */}
        <rect x={430} y={196} width={62} height={30} />
        <rect x={444} y={176} width={6} height={12} />
        <rect x={472} y={176} width={6} height={12} />
        {/* the big barn */}
        <rect x={358} y={206} width={70} height={22} />
        {/* the sheds and the stable */}
        <rect x={500} y={210} width={70} height={18} />
        <rect x={560} y={196} width={6} height={12} />
      </g>
      <g fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round">
        <path d="M424 198L440 184L484 184L498 198Z" />
        <path d="M352 208L366 192L420 192L434 208Z" />
        <path d="M496 212L506 202L566 202L574 212Z" />
      </g>
      <g fill={PAPER}>
        <rect x={438} y={204} width={8} height={8} />
        <rect x={456} y={204} width={8} height={8} />
        <rect x={474} y={204} width={8} height={8} />
        <rect x={456} y={216} width={8} height={10} />
        <rect x={384} y={214} width={16} height={14} />
      </g>
    </g>
  )
}

function CloversVision({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={0} y={0} width={W} height={176} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 220], push: 1.03 })}>
        {/* "It was a clear spring evening" */}
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.skyRays} fill={INK} />
        </g>
        <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <path d={m.hills} fill={INK} />
        {/* the farm below, "every inch of it their own property" */}
        <path d={m.far} fill={INK} />
        <path d={m.furrows} fill={INK} />
        <path d={m.pasture} fill={INK} />
        <path d={m.spinney} fill={INK} stroke={PAPER} strokeWidth={1} />
        <path d={m.hedges} fill={INK} />
        <ellipse cx={690} cy={292} rx={46} ry={9} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <path d="M662 292H700M676 297H716" stroke={INK} strokeWidth={LINE.hairline} />
        {/* the main road at the foot of the long pasture */}
        <path d="M600 332C680 318 780 312 870 310V318C780 320 690 326 604 340Z" fill={INK} />
        <g transform="translate(96 4)">
          <Farm />
        </g>
        <g className="lc-rise" style={timing({ delay: 0.6, dur: 1.8 })}>
          <path d={m.smoke} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        </g>

        {/* the knoll the animals lie on, lit by the level sun */}
        <path d={m.knoll} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.grass} fill={INK} />
        {/* the half-finished windmill */}
        <path
          d={m.millTop}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.courses + m.joints} fill={PAPER} />

        {/* "with one accord they all lay down as though huddling together
            for warmth": the far ones first */}
        <Cow at={[132, 240]} s={1.0} />
        <Sheep at={[92, 256]} s={1.5} />
        <Horse
          at={CLOVER.at}
          s={CLOVER.s}
          who="clover"
          pose="lie"
          headDown={CLOVER.headDown}
          uid={uid}
        />
        {/* "As Clover looked down the hillside her eyes filled with tears" */}
        <path d={SOCKET} fill={INK} />
        <path d={WET_EYE} fill={PAPER} />
        <path
          className="lc-fade-in"
          style={timing({ delay: 1.6, dur: 1.2 })}
          d={TEAR}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <Benjamin at={[186, 270]} s={1.05} lying headDown={8} />
        <Muriel at={[272, 292]} s={1.15} lying />
        <Sheep at={[174, 300]} s={1.7} />
        <Goose at={[354, 300]} s={1.3} />
        <Goose at={[392, 312]} s={1.2} />
        <Hen at={[336, 322]} s={1.4} />
        <Hen at={[92, 318]} s={1.4} />
        <Hen at={[430, 290]} s={1.2} />
      </g>
    </>
  )
}

export const cloversVision: LinocutArt = { width: W, height: H, Draw: CloversVision }

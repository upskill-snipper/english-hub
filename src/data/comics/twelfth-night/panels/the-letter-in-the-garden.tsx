import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rays, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  OrchardTree,
  Steeple,
  WallCoping,
  brickWall,
  foliage,
  hedgeBand,
  skyBars,
  walk,
} from './act-3-garden'
import { Person, type Pose } from './people'

/**
 * Act 2, Scene 5: "The letter in the garden", the tenth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "Olivia's garden." It is the garden of the Act 3 panels, cut from the
 *   same pieces (./act-3-garden.tsx): the sunlit brick wall with its
 *   coping, the box hedge at its foot, the orchard's trees and the church
 *   tower over the wall, and the gravel walk. "Malvolio's
 *   coming down this walk; he has been yonder i' the sun practising
 *   behaviour to his own shadow this half hour." So the sun stands over the
 *   wall, and Malvolio's shadow stretches from his feet across the walk.
 * - "Get ye all three into the box-tree ... The men hide themselves." So a
 *   great clipped box stands on the left, and Sir Toby, Sir Andrew and Fabian
 *   look out of it at Malvolio: Sir Andrew, the tallest, his flaxen hair
 *   hanging, and Sir Toby frowning ("Shall this fellow live?") over its top,
 *   and Fabian round its side with a finger to his lips ("O, peace, peace,
 *   peace!"). Maria has dropped the letter and gone ("Exit Maria"), so she
 *   is not drawn.
 * - "By your leave, wax. Soft! and the impressure her Lucrece, with which
 *   she uses to seal: 'tis my lady." So Malvolio holds up the letter, opened,
 *   its wax seal the spot colour, and reads, his head bent to it: "In my
 *   stars I am above thee, but be not afraid of greatness." His other hand
 *   is set on his hip: "Contemplation makes a rare turkey-cock of him; how
 *   he jets under his advanced plumes!" He is drawn as a man, as the kit
 *   draws him; the joke is in his bearing, not his body.
 *
 * The people are cut from ./people.tsx; the three in the box are the kit's
 * own figures, cut away below the head where the box hides them, so they
 * are the same men as in every other panel. Nothing is taken from a film,
 * television or stage production. Seeds: 3001 (sky), 3002 (the sun's
 * rays), 3003 (bricks), 3004 (gravel), 3005 (the box-tree), 3006
 * (Malvolio's shadow), 3007 (the leaves under Fabian's chin), 3008 (the
 * hedge), 3009 (the orchard tree).
 */

const W = 860
const H = 340
/** The coping of the garden wall, and its foot. */
const WALL_TOP = 136
const WALL_FOOT = 254
const FEET = 324
const SUN: Pt = [792, 48]
/** The box-tree: its centre line, its foot, its width and height. */
const BOX = { cx: 188, base: FEET + 8, w: 296, h: 206 }

/** A clipped box-tree: a dome to the ground, its edge scalloped by the shears. */
function boxOutline() {
  const { cx, base, w, h } = BOX
  const hw = w / 2
  const pts: Pt[] = []
  for (let i = 0; i <= 40; i++) {
    const a = Math.PI + (i / 40) * Math.PI
    pts.push([cx + Math.cos(a) * hw, base - 6 + Math.sin(a) * h * (1 - 0.12 * Math.cos(a) ** 2)])
  }
  let d = `M${n(cx - hw)} ${n(base)}L${n(pts[0][0])} ${n(pts[0][1])}`
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const mx = (x0 + x1) / 2
    const my = (y0 + y1) / 2
    const L = Math.hypot(mx - cx, my - (base - 6)) || 1
    d += `Q${n(mx + ((mx - cx) / L) * 4.6)} ${n(my + ((my - (base - 6)) / L) * 4.6)} ${n(x1)} ${n(y1)}`
  }
  return d + `L${n(cx + hw)} ${n(base)}Z`
}
const BOX_SHAPE = boxOutline()
const inBox = (x: number, y: number) =>
  Math.hypot((x - BOX.cx) / (BOX.w / 2 - 6), (y - (BOX.base - 6)) / (BOX.h - 6)) < 1 &&
  y < BOX.base - 2
/** Is (x, y) well inside the box-tree, where nothing behind it can show? */
const underBox = (x: number, y: number) =>
  y < BOX.base - 1 &&
  Math.hypot((x - BOX.cx) / (BOX.w / 2 - 3), Math.max(0, BOX.base - 6 - y) / (BOX.h - 3)) < 1
/**
 * Path data without the marks that lie wholly under the box-tree. WEIGHT
 * (2 October 2026): the wall's joints and the walk's grain behind the box
 * were a fifth of the plate, and none of them can be seen.
 */
function unhidden(d: string): string {
  return d
    .split('M')
    .filter((seg) => {
      const v = (seg.match(/-?[\d.]+/g) ?? []).map(Number)
      for (let i = 0; i + 1 < v.length; i += 2) if (!underBox(v[i], v[i + 1])) return true
      return false
    })
    .map((seg) => 'M' + seg)
    .join('')
}
const boxLight = (x: number, y: number) =>
  clamp(0.95 - (BOX.cx + BOX.w / 2 - x) / (BOX.w * 1.3) - (y - BOX.base + BOX.h) / (BOX.h * 3))

/**
 * The three in the box: where each head is (its centre, in the panel), how
 * the kit draws the man, and the ellipse he is cut to, so that nothing of
 * him shows below the box's edge. The box is printed over them.
 */
type Peeper = {
  key: string
  head: Pt
  size: number
  pose: Pose
  peek: [number, number, number, number]
}
const PEEPERS: Peeper[] = [
  {
    key: 'andrew',
    head: [120, 112],
    size: 1.08,
    pose: { look: 'sir-andrew', head: { rot: 6 } },
    peek: [126, 112, 30, 40],
  },
  {
    key: 'toby',
    head: [214, 92],
    size: 1,
    pose: { look: 'sir-toby', frown: true, head: { rot: 4 } },
    peek: [220, 96, 30, 40],
  },
  {
    key: 'fabian',
    head: [318, 200],
    size: 0.97,
    pose: {
      look: 'fabian',
      head: { rot: 2 },
      near: {
        pts: [
          [5, -128],
          [20, -126],
          [17, -138],
        ],
        hand: 'point',
        deg: -88,
        thumb: -1,
      },
    },
    peek: [324, 198, 27, 29],
  },
]
const SCALE = 1.04

/**
 * The clump of leaves that closes under Fabian's chin, where he looks out
 * round the side of the box: a scalloped top edge, and the clump down into
 * the box.
 */
const TUFT = { x0: 300, x1: 360, y: 224 }
function tuftShape() {
  const t = TUFT
  let edge = `M${n(t.x0)} ${n(t.y + 8)}`
  const k = 5
  const step = (t.x1 - t.x0) / k
  for (let i = 0; i < k; i++) {
    const x = t.x0 + (i + 1) * step
    const y = t.y + (i % 2 ? 2 : -1) + (i === k - 1 ? 12 : 0)
    edge += `Q${n(x - step / 2)} ${n(y - 9)} ${n(x)} ${n(y)}`
  }
  return { edge, shape: edge + `Q${n(t.x1 - 6)} ${n(t.y + 40)} ${n(t.x0 - 10)} ${n(t.y + 56)}Z` }
}
const FABIAN_TUFT = tuftShape()

type Marks = {
  sky: string
  sunRays: string
  bricks: string
  gravel: string
  shadow: string
  leaves: string
  tuftLeaves: string
  hedge: string
  hedgeLeaves: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(3001), { x0: 0, x1: W, y0: 6, y1: WALL_TOP - 8 })
  const sunRays = rays(rng(3002), SUN[0], SUN[1], { from: 26, to: 84, every: 11, width: 2 })
  const bricks = unhidden(
    brickWall(rng(3003), { x0: 0, x1: W, y0: WALL_TOP + 3, y1: WALL_FOOT }, (x) =>
      clamp(0.3 + x / 860),
    ),
  )
  const gravel = unhidden(walk(rng(3004), { x0: 0, x1: W, y0: WALL_FOOT + 4, y1: H }))
  const leaves = foliage(
    rng(3005),
    { x0: BOX.cx - BOX.w / 2, x1: BOX.cx + BOX.w / 2, y0: BOX.base - BOX.h, y1: BOX.base },
    10,
    inBox,
    boxLight,
  )
  const tuftLeaves = foliage(
    rng(3007),
    { x0: TUFT.x0, x1: TUFT.x1, y0: TUFT.y - 4, y1: TUFT.y + 40 },
    8,
    (x, y) => x > TUFT.x0 + 3 && x < TUFT.x1 - 4 && y > TUFT.y + 2 && y < TUFT.y + 30,
    () => 0.8,
  )
  // Malvolio's shadow, thrown back along the walk towards the box-tree by
  // the sun over the wall: a dark shape from his feet, and a few cuts under it.
  const s = rng(3006)
  let shadow =
    'M622 323C590 321 548 320 508 321C494 321 482 322 474 324C468 326 470 330 478 331C500 333 552 332 590 331C606 330 618 328 622 323Z'
  for (let k = 0; k < 3; k++)
    shadow += gouge(
      470 + k * 8 + between(s, -2, 2),
      334 + k * 2.2,
      598 - k * 12,
      334.4 + k * 2.2,
      1.1 - k * 0.2,
    )
  // the box hedge along the foot of the wall, as in the Act 3 garden
  const hedge = hedgeBand(rng(3008), 326, W + 4, WALL_FOOT - 20, WALL_FOOT + 10)
  cached = {
    sky,
    sunRays,
    bricks,
    gravel,
    shadow,
    leaves,
    tuftLeaves,
    hedge: hedge.shape,
    hedgeLeaves: hedge.leaves,
  }
  return cached
}

/** The letter Malvolio holds, in his figure's own frame: the sheet, its lines of writing and its seal. */
const LETTER = 'M26 -150L58 -158L64 -114L32 -106Z'
const LETTER_LINES =
  'M33 -144L56 -150M34 -138L57 -144M35 -132L58 -138M36 -126L59 -132M37 -120L52 -124'
const SEAL: Pt = [49, -112]

function TheLetterInTheGarden({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        {PEEPERS.map((p) => (
          <clipPath key={p.key} id={`${uid}-peek-${p.key}`}>
            <ellipse cx={p.peek[0]} cy={p.peek[1]} rx={p.peek[2]} ry={p.peek[3]} />
          </clipPath>
        ))}
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 220], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the sun Malvolio has been practising in */}
        <g className="lc-fade-in" style={timing({ dur: 1.6 })}>
          <path d={m.sunRays} fill={INK} />
        </g>
        <circle cx={SUN[0]} cy={SUN[1]} r={19} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />

        {/* the orchard and the church tower over the wall, and the sunlit wall */}
        <OrchardTree r={rng(3009)} cx={446} cy={84} rx={32} ry={27} base={WALL_TOP} />
        <Steeple x={660} top={78} base={WALL_TOP} />
        <rect x={0} y={WALL_TOP} width={W} height={WALL_FOOT - WALL_TOP} fill={PAPER} />
        <path d={m.bricks} fill={INK} />
        <WallCoping x0={0} x1={W} top={WALL_TOP} />
        <rect x={0} y={WALL_FOOT} width={W} height={4} fill={INK} />

        {/* the walk, and Malvolio's shadow on it */}
        <rect x={0} y={WALL_FOOT + 4} width={W} height={H - WALL_FOOT - 4} fill={PAPER} />
        <path d={m.gravel} fill={INK} />
        <path d={m.shadow} fill={INK} />
        {/* the box hedge at the foot of the wall */}
        <path d={m.hedge} fill={INK} />
        <path d={m.hedgeLeaves} fill={PAPER} />

        {/* Sir Andrew, Sir Toby and Fabian, hidden in the box but for their heads */}
        {PEEPERS.map((p) => {
          const s = p.size * SCALE
          return (
            <g key={p.key} clipPath={`url(#${uid}-peek-${p.key})`}>
              <Person at={[p.head[0] - 3 * s, p.head[1] + 160 * s]} scale={SCALE} pose={p.pose} />
            </g>
          )
        })}
        {/* the box-tree, printed over them */}
        <path d={BOX_SHAPE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.leaves} fill={PAPER} />
        <path d={FABIAN_TUFT.shape} fill={INK} />
        <path d={m.tuftLeaves} fill={PAPER} />
        <path
          d={FABIAN_TUFT.edge}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinecap="round"
        />

        {/* Malvolio on the walk, reading the letter, one hand on his hip */}
        <Person
          at={[606, FEET]}
          scale={1.06}
          flip
          pose={{
            look: 'malvolio',
            head: { rot: 9 },
            far: {
              pts: [
                [-4, -128],
                [-24, -106],
                [-8, -84],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [20, -110],
                [32, -124],
              ],
              hand: 'grip',
              deg: -60,
            },
          }}
        >
          <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
          <path d={LETTER_LINES} fill="none" stroke={INK} strokeWidth={1} strokeLinecap="round" />
          <circle cx={SEAL[0]} cy={SEAL[1]} r={5.4} fill={RED} stroke={INK} strokeWidth={1} />
        </Person>
      </g>
    </>
  )
}

export const theLetterInTheGarden: LinocutArt = { width: W, height: H, Draw: TheLetterInTheGarden }

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_SILAS,
  HOLD_CUTS,
  HOLD_HAND,
  SHIRT_COLLAR,
  SilasFace,
  handAt,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 2: "Fifteen years at the loom", the second moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "The livelong day he sat in his loom, his ear filled with its monotony,
 *   his eyes bent close down on the slow growth of sameness in the brownish
 *   web"; "Silas's hand satisfied itself with throwing the shuttle, and his
 *   eye with seeing the little squares in the cloth complete themselves under
 *   his effort" (Chapter 2); "the bent, tread-mill attitude of the weaver"
 *   (Chapter 1). So it is day, and he sits bent forward in the loom, his feet
 *   on the treadles, one hand on the batten and the other with the shuttle,
 *   his face close down over the cloth, which is woven in little squares.
 * - "so withered and yellow, that, though he was not yet forty, the children
 *   always called him 'Old Master Marner'"; "Marner's face and figure shrank
 *   and bent themselves into a constant mechanical relation to the objects of
 *   his life". So his is the withered pale face of the figure kit
 *   (./people.tsx), and his back is bent.
 * - "He had taken up some bricks in his floor underneath his loom, and here
 *   he had made a hole"; "the heap of coins had become too large for the
 *   iron pot to hold them, and he had made for them two thick leather bags";
 *   "covering the bricks with sand". The loose bricks are "near the treddles
 *   of the loom" (Chapter 4). So the floor is brick, sprinkled with sand, and
 *   under the treadles the print is cut away below the floor, as a section,
 *   to show the two bags in their hole: the gold, the one thing printed in
 *   the spot colour.
 * - "he stuck the bits together and propped the ruin in its old place for a
 *   memorial". So the brown pot stands mended by the hearth, its three pieces
 *   cut apart by white cracks, a stone propping it. (Its brown is left to the
 *   words.)
 * - "a stone cottage" (Chapter 1); "the old brick hearth" (Chapter 17); "the
 *   kettle-hanger" (Chapter 4); "he rose in the deep morning quiet and looked
 *   out on the dewy brambles and rank tufted grass" (Chapter 2). So the walls
 *   are laid stone, the hearth is brick with a kettle hanging in it, and the
 *   window looks out on brambles and grass.
 * - "He seemed to weave, like the spider, from pure impulse". The one
 *   liberty is a small cobweb in the corner of the window, for the simile.
 *
 * The loom is a hand-loom of the time, seen from the side and a little from
 * above, so that the warp shows as a sheet of threads and the cloth as a
 * band: the frame; before him the breast beam, with the cloth running over it
 * down to the cloth beam; the warp running back through the reed and the two
 * heddle shafts, opened into a shed, to the back beam; the batten hanging
 * from the top; and the treadles under his feet. The frame's near front post
 * and the batten's near arm are left out, so that he and his hands can be
 * seen inside it (the arm crossed his hands and read as a stick he held).
 * The shuttle, which in a true side view would be end-on, is turned to show
 * its length in his hand. Seeds: 821 (the wall), 822
 * (the earth of the section), 823 (the sand), 824 (the floor's shade).
 */

const W = 860
const H = 340
/** The near edge of the floor, and the cut below it. */
const FLOOR = 286
/** The foot of the back wall. */
const WALL = 250
const WIN = { x: 40, y: 108, w: 98, h: 104 }

/** The loom's own measures: depth along the warp, width across it, height. */
const D = 250
const WD = 150
const HT = 212
/**
 * A point of the loom, from its depth x (0 at the breast beam, growing away
 * from the weaver), height y and width z (0 at the near side). The loom is
 * seen from the side and a little from above, so its width recedes only a
 * little, up and to the right: enough for the warp to show as a sheet of
 * threads and the cloth as a band. (Seen from the front corner, it read as a
 * skewed box.)
 */
const L = (x: number, y: number, z: number): P => [
  Math.round((330 + x + z * 0.16) * 10) / 10,
  Math.round((FLOOR - y - z * 0.12) * 10) / 10,
]
const seg = (a: P, b: P) => `M${a[0]} ${a[1]}L${b[0]} ${b[1]}`
const quad = (a: P, b: P, c: P, d: P) =>
  `M${a[0]} ${a[1]}L${b[0]} ${b[1]}L${c[0]} ${c[1]}L${d[0]} ${d[1]}Z`

type Marks = { wall: string; earth: string; sand: string; bricks: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The cottage lit by its one window, the light falling right across the loom.
  const light = (x: number, y: number) => {
    const l = clamp(1 - Math.hypot((x - 90) * 0.55, (y - 160) * 1.05) / 430)
    return Math.max(l ** 1.15, 0.07)
  }
  const wall = gougeField(rng(821), { x0: 0, x1: W, y0: 6, y1: WALL - 2 }, light, {
    spacing: 6.4,
    len: [12, 44],
  })
  // The earth under the floor, cut as a section: dark, with a grain of cuts.
  const earth = gougeField(rng(822), { x0: 0, x1: W, y0: FLOOR + 9, y1: H }, () => 0.16, {
    spacing: 5.6,
    len: [8, 26],
    max: 2.2,
  })
  // The brick floor: courses running across, each a little deeper towards
  // the eye, and the joints between them staggered.
  let bricks = ''
  const rows = [WALL, WALL + 6, WALL + 13, WALL + 22, WALL + 33, FLOOR]
  for (let i = 0; i < rows.length - 1; i++) {
    const y = rows[i]
    const next = rows[i + 1]
    bricks += gouge(0, y, W, y, 0.6 + i * 0.2)
    const step = 26 + i * 6
    for (let x = (i % 2) * (step / 2); x < W; x += step)
      bricks += `M${n(x)} ${n(y)}L${n(x + (x - 430) * 0.04)} ${n(next)}`
  }
  const s = rng(823)
  let sand = ''
  for (let k = 0; k < 150; k++) {
    const x = between(s, 250, 640)
    const y = between(s, WALL + 3, FLOOR - 2)
    sand += `M${n(x)} ${n(y)}h1.3`
  }
  // The floor darker away from the window.
  const shade = gougeField(
    rng(824),
    { x0: 0, x1: W, y0: WALL + 2, y1: FLOOR - 1 },
    (x) => clamp(0.06 + (x - 160) / 1000),
    { spacing: 4.2, len: [10, 34], gap: [6, 18], max: 1.4 },
  )
  cached = { wall, earth, sand, bricks, shade }
  return cached
}

// ── THE LOOM ────────────────────────────────────────────────────────────────
/** Timbers of the frame behind the warp: the far side, the back, the top roller. */
const FRAME_BACK = [
  seg(L(0, 0, WD), L(0, HT, WD)),
  seg(L(D, 0, WD), L(D, HT, WD)),
  seg(L(0, HT, WD), L(D, HT, WD)),
  seg(L(0, 20, WD), L(D, 20, WD)),
  seg(L(D, 20, 0), L(D, 20, WD)),
  seg(L(D, HT, 0), L(D, HT, WD)),
  seg(L(0, HT, 0), L(0, HT, WD)),
  // the roller the heddles hang from
  seg(L(137, HT - 4, 0), L(137, HT - 4, WD)),
]
/** Timbers on this side of the warp: the near back post, the top rail, the bottom rail behind his feet. */
const FRAME_FRONT = [
  seg(L(D, 0, 0), L(D, HT, 0)),
  seg(L(0, HT, 0), L(D, HT, 0)),
  seg(L(96, 20, 0), L(D, 20, 0)),
]

/** The warp: from the warp beam up over the back beam, through the heddles, opened into a shed, to the fell. */
const WARP = (() => {
  let sheet = ''
  let back = ''
  for (let z = 8; z <= WD - 8; z += 6.5) {
    const high = Math.round(z / 6.5) % 2 === 0
    const pts = [
      L(D, 116, z),
      L(146, 114, z),
      L(137, high ? 124 : 104, z),
      L(60, high ? 117 : 101, z),
      L(46, 104, z),
    ]
    sheet += 'M' + pts.map(([x, y]) => `${x} ${y}`).join('L')
    back += seg(L(D - 14, 58, z), L(D, 112, z))
  }
  return { sheet, back }
})()

/** The two heddle shafts, hung in the warp: their frames, the heddles strung in them, their cords. */
const HEDDLES = (() => {
  let frames = ''
  let strings = ''
  let cords = ''
  for (const x of [130, 144]) {
    frames += quad(L(x, 80, 4), L(x, 152, 4), L(x, 152, WD - 4), L(x, 80, WD - 4))
    for (let z = 8; z < WD - 4; z += 5.5) strings += seg(L(x, 82, z), L(x, 150, z))
    cords +=
      seg(L(x, 152, 18), L(137, HT - 4, 18)) + seg(L(x, 152, WD - 18), L(137, HT - 4, WD - 18))
  }
  return { frames, strings, cords }
})()

/** The batten: its two arms from the pivot, the race the shuttle runs on, the reed and the hand-tree. */
const BATTEN = (() => {
  let reed = ''
  for (let z = 4; z <= WD - 4; z += 4) reed += seg(L(60, 93, z), L(60, 118, z))
  return {
    far: seg(L(94, HT - 10, WD), L(62, 90, WD)),
    cap: seg(L(94, HT - 10, 0), L(94, HT - 10, WD)),
    race: seg(L(60, 91, 0), L(60, 91, WD)),
    tree: seg(L(60, 121, 0), L(60, 121, WD)),
    reed,
  }
})()

/** The woven cloth: its top from the fell to the breast beam, in little squares, and its fall to the cloth beam. */
const CLOTH = (() => {
  const top = quad(L(0, 104, 8), L(46, 104, 8), L(46, 104, WD - 8), L(0, 104, WD - 8))
  const fall = quad(L(0, 104, 8), L(0, 104, WD - 8), L(4, 58, WD - 8), L(4, 58, 8))
  let checks = ''
  for (let i = 0; i < 5; i++)
    for (let j = 0; j < 4; j++) {
      if ((i + j) % 2) continue
      const x0 = 2 + i * 8.6
      const z0 = 8 + j * 33.5
      checks += quad(
        L(x0, 104, z0),
        L(x0 + 8.6, 104, z0),
        L(x0 + 8.6, 104, z0 + 33.5),
        L(x0, 104, z0 + 33.5),
      )
    }
  return { top, fall, checks }
})()

/** The four treadles under the loom, hinged at the back. */
const TREADLES = [46, 60, 90, 104].map((z) => seg(L(220, 8, z), L(30, 18, z))).join('')

/** The bench he sits on, at the front of the loom. */
const BENCH = {
  seat: quad(L(-78, 74, 30), L(-40, 74, 30), L(-40, 74, 120), L(-78, 74, 120)),
  edge: quad(L(-78, 74, 30), L(-40, 74, 30), L(-40, 68, 30), L(-78, 68, 30)),
  legs: [L(-74, 68, 32), L(-44, 68, 32), L(-44, 68, 118)]
    .map((p) => `M${p[0]} ${p[1]}V${n(p[1] + 68 - (p === undefined ? 0 : 0))}`)
    .join(''),
}

// ── SILAS, bent in the loom ─────────────────────────────────────────────────
const SILAS_HEAD = { d: HEAD_SILAS, at: [336, 126] as P, rot: 32, scale: 1.38 }
/** His near hand, low at the near side of the shed, with the shuttle to throw. */
const SHUTTLE_ARM: P[] = [
  [316, 160],
  [328, 198],
  [360, 196],
]
/** His far hand on the hand-tree of the batten. */
const BATTEN_ARM: P[] = [
  [320, 156],
  [348, 180],
  [384, 166],
]
const HOLD = { parts: HOLD_HAND, scale: 1.1, rot: -4 }
const GRIP = { parts: GRIP_HAND, scale: 1.1, rot: 0 }
const SILAS: Part[] = man({
  facing: 1,
  neck: [312, 150],
  hip: [282, 212],
  head: SILAS_HEAD,
  body: { width: 28, tails: 12, front: 2, flare: 3 },
  arm: 8.5,
  leg: 9.5,
  near: {
    arm: SHUTTLE_ARM,
    leg: [
      [284, 212],
      [330, 214],
      [348, 268],
    ],
    hand: HOLD,
  },
  far: {
    arm: BATTEN_ARM,
    leg: [
      [288, 210],
      [334, 210],
      [358, 262],
    ],
    hand: GRIP,
  },
})

/** The brown pot, mended: three pieces stuck together, propped on a stone by the hearth. */
const POT = {
  body: 'M676 282C666 276 664 262 668 252C670 244 676 240 678 234L678 224H696L696 234C698 240 704 244 706 252C710 262 708 276 698 282Z',
  handle: 'M700 230C712 228 718 238 712 250',
  cracks: 'M679 242L687 248L682 258L692 264L688 276M687 248L700 254',
  stone: 'M654 282C654 276 658 272 664 273C669 274 672 278 672 282Z',
}

/**
 * The two thick leather bags, standing in their hole: sacks with their necks
 * gathered and tied, drawn as Dunstan carries them in "The robbery", about
 * the knot at the neck. Each is placed by its foot in the hole.
 */
const BAG = {
  body: 'M-3.6 4C-8 8 -14 15 -16 23C-18 31 -15 38 -8 40C-3 41.4 3 41.4 8 40C15 38 18 31 16 23C14 15 8 8 3.6 4Z',
  neck: 'M-4.6 -0.6L4.6 -0.6L3.8 5L-3.8 5Z',
  frill: 'M-4.6 -0.6C-7.6 -3 -6.4 -7 -3 -6.4C-1.6 -8.6 1.8 -8.6 3 -6.4C6.4 -7 7.6 -3 4.6 -0.6Z',
  gathers: 'M-2.4 5.6Q-7 12 -9.6 22M0 5.6V17M2.4 5.6Q7 12 9.6 22M-1 -6L-1.6 -1.2M1.6 -6.2L1.6 -1.2',
}
const BAGS_AT = [
  'translate(-17 6) rotate(-7) scale(0.68)',
  'translate(17 6.6) rotate(8) scale(0.66)',
]

function FifteenYearsAtTheLoom({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, SILAS_HEAD.at, SILAS_HEAD.rot, SILAS_HEAD.scale)
  const shuttle = handAt(SHUTTLE_ARM, 1, HOLD)
  const hole = L(110, 0, 0)
  return (
    <>
      <defs>
        <clipPath id={`${uid}-win`}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [360, 200], push: 1.03 })}>
        {/* the stone walls, lit from the window */}
        <path d={m.wall} fill={PAPER} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <path d="M176 92H236M200 66V92M640 40H730M690 40V66M188 160H224" />
        </g>

        {/* the window, its shutter folded back, brambles and grass beyond */}
        <rect x={WIN.x - 9} y={WIN.y - 9} width={WIN.w + 18} height={WIN.h + 18} fill={INK} />
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
        <g clipPath={`url(#${uid}-win)`}>
          <path
            d={`M${WIN.x} 176Q${WIN.x + 12} 162 ${WIN.x + 24} 172Q${WIN.x + 38} 158 ${WIN.x + 52} 170Q${WIN.x + 66} 160 ${WIN.x + 80} 172Q${WIN.x + 92} 164 ${WIN.x + 98} 170V${WIN.y + WIN.h}H${WIN.x}Z`}
            fill={INK}
          />
          <path
            d={
              gouge(WIN.x + 8, 182, WIN.x + 30, 184, 0.9) +
              gouge(WIN.x + 44, 186, WIN.x + 70, 184, 0.9) +
              gouge(WIN.x + 72, 194, WIN.x + 94, 196, 0.9) +
              gouge(WIN.x + 14, 200, WIN.x + 40, 202, 0.8)
            }
            fill={PAPER}
          />
          {/* bramble stems arching over the hedge */}
          <path
            d={`M${WIN.x + 10} 172Q${WIN.x + 26} 146 ${WIN.x + 44} 160M${WIN.x + 58} 168Q${WIN.x + 74} 140 ${WIN.x + 92} 156`}
            fill="none"
            stroke={INK}
            strokeWidth={1.6}
          />
          <path
            d={`M${WIN.x} 144Q${WIN.x + 50} 134 ${WIN.x + 98} 146`}
            fill="none"
            stroke={INK}
            strokeWidth={1.2}
          />
          {/* the cobweb in the corner */}
          <g fill="none" stroke={INK} strokeWidth={LINE.hairline}>
            <path
              d={`M${WIN.x} ${WIN.y}L${WIN.x + 30} ${WIN.y + 8}M${WIN.x} ${WIN.y}L${WIN.x + 24} ${WIN.y + 22}M${WIN.x} ${WIN.y}L${WIN.x + 8} ${WIN.y + 30}`}
            />
            <path
              d={`M${WIN.x + 10} ${WIN.y + 2.6}Q${WIN.x + 9} ${WIN.y + 8} ${WIN.x + 2.6} ${WIN.y + 10}M${WIN.x + 19} ${WIN.y + 5}Q${WIN.x + 16} ${WIN.y + 14} ${WIN.x + 5} ${WIN.y + 19}M${WIN.x + 27} ${WIN.y + 7.4}Q${WIN.x + 22} ${WIN.y + 20} ${WIN.x + 7} ${WIN.y + 27}`}
            />
          </g>
        </g>
        <g fill={INK}>
          <rect x={WIN.x + WIN.w / 2 - 1.8} y={WIN.y} width={3.6} height={WIN.h} />
          <rect x={WIN.x} y={WIN.y + WIN.h / 2 - 1.8} width={WIN.w} height={3.6} />
        </g>
        {/* the shutter, open against the wall */}
        <path
          d={`M${WIN.x + WIN.w + 9} ${WIN.y - 6}L${WIN.x + WIN.w + 30} ${WIN.y + 2}V${WIN.y + WIN.h - 2}L${WIN.x + WIN.w + 9} ${WIN.y + WIN.h + 6}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={gouge(WIN.x + WIN.w + 20, WIN.y + 8, WIN.x + WIN.w + 20, WIN.y + WIN.h - 8, 0.8)}
          fill={PAPER}
        />
        <rect x={WIN.x - 14} y={WIN.y + WIN.h + 9} width={WIN.w + 28} height={6} fill={PAPER} />

        {/* the brick hearth, the kettle on its hanger, the fire out */}
        <rect x={690} y={82} width={150} height={WALL - 82} fill={INK} />
        <path
          d={[108, 134, 160, 186].map((y) => `M696 ${y}H834`).join('')}
          stroke={PAPER}
          strokeWidth={1.1}
        />
        <path
          d={[82, 108, 134, 160]
            .map((y, i) =>
              [0, 1, 2, 3].map((k) => `M${712 + k * 36 + (i % 2) * 18} ${y}V${y + 26}`).join(''),
            )
            .join('')}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path d="M682 76H848V84H682Z" fill={PAPER} />
        <path
          d={`M716 ${WALL}V220Q716 200 736 200H794Q814 200 814 220V${WALL}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M765 200V226" stroke={PAPER} strokeWidth={1.4} />
        <path d="M758 226Q765 220 772 226" fill="none" stroke={PAPER} strokeWidth={1.4} />
        <path
          d="M750 232C750 228 754 226 765 226C776 226 780 228 780 232L782 248C782 254 776 258 765 258C754 258 748 254 748 248Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(754, 236, 754, 250, 0.9) + gouge(748, 234, 740, 230, 1.2)} fill={PAPER} />
        <rect x={682} y={WALL - 2} width={166} height={5} fill={PAPER} />

        {/* the brick floor, sprinkled with sand */}
        <rect x={0} y={WALL} width={W} height={FLOOR - WALL} fill={PAPER} />
        <path d={m.bricks} stroke={INK} strokeWidth={1} fill={INK} />
        <path d={m.shade} fill={INK} />
        <path d={m.sand} stroke={INK} strokeWidth={0.9} />

        {/* the loom's far side, back and top */}
        <g fill="none" strokeLinecap="square">
          <path d={FRAME_BACK.join('')} stroke={PAPER} strokeWidth={12.4} />
          <path d={FRAME_BACK.join('')} stroke={INK} strokeWidth={8.8} />
        </g>
        {/* the warp beam with the warp wound on it, and the back beam */}
        <path
          d={seg(L(D - 14, 48, 0), L(D - 14, 48, WD))}
          stroke={PAPER}
          strokeWidth={26}
          strokeLinecap="round"
        />
        <path
          d={seg(L(D - 14, 48, 0), L(D - 14, 48, WD))}
          stroke={INK}
          strokeWidth={22}
          strokeLinecap="round"
        />
        <path d={WARP.back} stroke={PAPER} strokeWidth={0.9} fill="none" />
        <circle
          cx={L(D - 14, 48, 0)[0]}
          cy={L(D - 14, 48, 0)[1]}
          r={11}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <circle
          cx={L(D - 14, 48, 0)[0]}
          cy={L(D - 14, 48, 0)[1]}
          r={7}
          fill="none"
          stroke={INK}
          strokeWidth={0.9}
        />
        <circle cx={L(D - 14, 48, 0)[0]} cy={L(D - 14, 48, 0)[1]} r={2.6} fill={INK} />
        <path
          d={seg(L(D, 116, 0), L(D, 116, WD))}
          stroke={PAPER}
          strokeWidth={12}
          strokeLinecap="round"
        />
        <path
          d={seg(L(D, 116, 0), L(D, 116, WD))}
          stroke={INK}
          strokeWidth={8.4}
          strokeLinecap="round"
        />
        {/* the heddles' cords from the roller */}
        <path d={HEDDLES.cords} stroke={PAPER} strokeWidth={1} fill="none" />
        {/* the batten's far arm, behind the warp */}
        <path d={BATTEN.far + BATTEN.cap} stroke={PAPER} strokeWidth={9} strokeLinecap="round" />
        <path d={BATTEN.far + BATTEN.cap} stroke={INK} strokeWidth={6} strokeLinecap="round" />
        {/* the warp itself, a sheet of threads opened into the shed */}
        <path d={WARP.sheet} stroke={PAPER} strokeWidth={1.1} fill="none" strokeLinejoin="round" />
        {/* the heddle shafts */}
        <path d={HEDDLES.strings} stroke={PAPER} strokeWidth={0.8} />
        <path d={HEDDLES.frames} fill="none" stroke={INK} strokeWidth={4.6} />
        <path d={HEDDLES.frames} fill="none" stroke={PAPER} strokeWidth={1.6} />
        {/* the reed in the batten, the race below it and the hand-tree above */}
        <path d={BATTEN.reed} stroke={PAPER} strokeWidth={0.8} />
        <path
          d={BATTEN.race + BATTEN.tree}
          stroke={PAPER}
          strokeWidth={7.2}
          strokeLinecap="round"
        />
        <path d={BATTEN.race + BATTEN.tree} stroke={INK} strokeWidth={4.4} strokeLinecap="round" />
        {/* the frame's timbers on this side of the warp */}
        <g fill="none" strokeLinecap="square">
          <path d={FRAME_FRONT.join('')} stroke={PAPER} strokeWidth={12.4} />
          <path d={FRAME_FRONT.join('')} stroke={INK} strokeWidth={8.8} />
        </g>
        {/* the treadles */}
        <path d={TREADLES} stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
        <path d={TREADLES} stroke={INK} strokeWidth={4.4} strokeLinecap="round" />
        {/* the cloth beam, with the brownish web wound on it */}
        <path
          d={seg(L(4, 50, 6), L(4, 50, WD - 6))}
          stroke={PAPER}
          strokeWidth={24}
          strokeLinecap="round"
        />
        <path
          d={seg(L(4, 50, 6), L(4, 50, WD - 6))}
          stroke={INK}
          strokeWidth={20.4}
          strokeLinecap="round"
        />
        <path
          d={[-6, -2, 2, 6].map((o) => seg(L(4, 50 + o, 10), L(4, 50 + o, WD - 10))).join('')}
          stroke={PAPER}
          strokeWidth={0.8}
        />
        {/* the cloth, in its little squares, from the fell over the breast beam */}
        <path
          d={CLOTH.fall + CLOTH.top}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
          strokeLinejoin="round"
        />
        <path d={CLOTH.checks} fill={INK} />
        <path
          d={seg(L(0, 104, 0), L(0, 104, WD))}
          stroke={PAPER}
          strokeWidth={11}
          strokeLinecap="round"
        />
        <path
          d={seg(L(0, 104, 0), L(0, 104, WD))}
          stroke={INK}
          strokeWidth={7.6}
          strokeLinecap="round"
        />

        {/* the bench */}
        <path d={BENCH.legs} stroke={INK} strokeWidth={4.4} />
        <path
          d={BENCH.seat + BENCH.edge}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />

        {/* Silas, bent close over the web, the shuttle in one hand, the batten in the other */}
        <Figure parts={SILAS} halo={2}>
          <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
          <SilasFace t={st} look={1} />
          <path d={GRIP_CUTS} transform={handAt(BATTEN_ARM, 1, GRIP)} fill={PAPER} />
          <path d={gouge(306, 160, 290, 200, 0.9, -1)} fill={PAPER} />
        </Figure>
        {/* the shuttle, held to throw into the shed */}
        <g transform={shuttle}>
          <path
            d="M5 -5L30 -5.8Q39 -1.4 30 3.2L5 3.6Q-2 -0.8 5 -5Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.6}
          />
          <path d="M11 -2.6H24V0.8H11Z" fill={PAPER} />
          <path d="M13 -0.9H22" stroke={INK} strokeWidth={0.9} />
        </g>
        <path d={HOLD_CUTS} transform={shuttle} fill={PAPER} />
        <path
          d={HOLD_HAND[4].d}
          transform={shuttle}
          fill="none"
          stroke={INK}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        {/* the brown pot, mended, propped in its old place */}
        <path d={POT.stone} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <g transform="rotate(-6 686 282)">
          <path d={POT.handle} fill="none" stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
          <path d={POT.handle} fill="none" stroke={INK} strokeWidth={4.6} strokeLinecap="round" />
          <path
            d={POT.body}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path
            d={POT.cracks}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
          <path d={gouge(672, 258, 676, 274, 1)} fill={PAPER} />
        </g>

        {/* the floor cut open under the treadles: the two leather bags of gold in their hole */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.earth} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={5} fill={PAPER} />
        <path d={`M0 ${FLOOR + 5}H${W}`} stroke={INK} strokeWidth={1} />
        <g transform={`translate(${hole[0]} ${FLOOR + 5})`}>
          <path
            d="M-44 0H44V6C48 18 44 30 32 33H-32C-44 30 -48 18 -44 6Z"
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.4}
          />
          <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 1.2 })}>
            {BAGS_AT.map((t) => (
              <g key={t} transform={t}>
                <path
                  d={BAG.body}
                  fill={RED}
                  stroke={INK}
                  strokeWidth={1.8}
                  strokeLinejoin="round"
                />
                <path d={BAG.neck} fill={INK} />
                <path
                  d={BAG.frill}
                  fill={RED}
                  stroke={INK}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
                <path
                  d={BAG.gathers}
                  fill="none"
                  stroke={INK}
                  strokeWidth={1.4}
                  strokeLinecap="round"
                />
              </g>
            ))}
          </g>
        </g>
      </g>
    </>
  )
}

export const fifteenYearsAtTheLoom: LinocutArt = {
  width: W,
  height: H,
  Draw: FifteenYearsAtTheLoom,
}

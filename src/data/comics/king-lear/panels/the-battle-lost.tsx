import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { canopy } from '../../macbeth/panels/dunsinane-kit'
import { GROUND_W, groundMarks } from './dover-country'
import { Person, type P } from './people'
import { footShadow } from './the-british-camp'

/**
 * Act 5, Scene 2: "The battle lost", the nineteenth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/king-lear.ts):
 *
 * - "A field between the two Camps." "Here, father, take the shadow of this
 *   tree / For your good host". So a broad old tree stands on the left of the
 *   field, its shade dark on the grass under it, and Gloucester sits at its
 *   foot, on its roots, his back to the trunk. He is blind (the kit's
 *   `blind`: the plain band over his eyes, nothing beneath it).
 * - "Alarum and retreat within." The battle is heard, not seen, so it is far
 *   off on the right: smoke rising from a rise beyond the field, spears
 *   standing and leaning in it, and one banner falling. The scene opens with
 *   Lear, Cordelia and their forces passing "with drum and colours", so the
 *   falling banner is their colours, printed in the spot colour: the one
 *   thing in the panel that is red, and the sign that the battle is lost.
 *   Nobody is drawn at the battle; Lear and Cordelia are taken there, out of
 *   sight ("he and his daughter ta'en").
 * - "Away, old man, give me thy hand, away! / King Lear hath lost, he and his
 *   daughter ta'en: / Give me thy hand; come on!" Edgar, still "dressed like a
 *   peasant" (the kit's Edgar in his plain tunic), has come back across the
 *   field in haste, his back to the battle, and stoops to his father with
 *   his hand held out. (He first pointed back at the battle with his other
 *   hand; the kit's pointing hand, its thumb raised beside the finger, read
 *   at panel size as a gesture of its own, so his arm swings back open.)
 * - "No further, sir; a man may rot even here." Gloucester does not take the
 *   hand: he sits with his head bowed and his hands in his lap. Edgar's
 *   answer is the quotation: "Men must endure / Their going hence, even as
 *   their coming hither; / Ripeness is all."
 *
 * The tree is not named, so it is drawn plainly, broad and old; its leaf
 * masses are cut with the Macbeth kit's `canopy`, as Birnam Wood's are. The
 * field is cut as the down near Dover is (./dover-country.tsx), the same
 * country a few days on. Nothing is taken from a film or stage production.
 * Seeds: 1901 (sky, field, bark), 1902 (the crown of the tree), 1903 (the
 * smoke).
 */

const W = 860
const H = 340
const HORIZON = 210

const GLOUCESTER: P = [242, 322]
const EDGAR: P = [384, 324]
const SCALE = 1.12
/** Gloucester's seat on the roots of the tree, in his own units. */
const SEAT = 30

/** The tree's leaf masses, [cx, cy, r]: a broad old crown, drooping at its sides. */
const CROWN: [number, number, number][] = [
  [52, 150, 20],
  [70, 118, 28],
  [104, 86, 34],
  [150, 62, 38],
  [204, 52, 40],
  [256, 62, 38],
  [300, 88, 34],
  [334, 120, 26],
  [352, 150, 18],
  [104, 132, 30],
  [154, 108, 36],
  [208, 98, 38],
  [262, 112, 34],
  [306, 136, 24],
]

type Marks = {
  sky: string
  ridge: string
  field: string[]
  tufts: string[]
  shade: string
  trunk: string
  boughs: string
  roots: string
  bark: string
  crown: { mass: string; cuts: string }
  smoke: string
  smokeCuts: string
  spears: string
}

/** No tufts of grass where the two men are, or in the tree's shade. */
const clear = (x: number, y: number) =>
  (x > 150 && x < 450 && y > 270) || (x < 380 && y < 300 && y > 260)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1901)
  // A pale day sky, engraved in ink towards its top, as the Dover panels have it.
  let sky = ''
  for (let y = 4; y < HORIZON - 30; y += 6.2) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 30, 120)
      const D = clamp(1 - y / 130)
      if (r() < D * 1.2)
        sky += gouge(
          x,
          y + between(r, -0.5, 0.5),
          x + len,
          y + between(r, -0.5, 0.5),
          0.3 + D * 2.6,
        )
      x += len + between(r, 6, 26)
    }
  }
  // The far rise where the battle was: its slope in short level strokes.
  let ridge = ''
  for (let y = 192; y < HORIZON - 1; y += 3.4) {
    let x = 420 + between(r, 0, 10)
    while (x < W) {
      const len = between(r, 6, 18)
      if (y > ridgeY(x) + 2 && y > ridgeY(x + len) + 2 && r() < 0.7)
        ridge += `M${n(x)} ${n(y)}h${n(len)}`
      x += len + between(r, 4, 12)
    }
  }
  // The field, cut level, as the down near Dover is.
  const { ground: field, tufts } = groundMarks(r, clear, () => HORIZON)
  // "take the shadow of this tree": the shade it throws on the field.
  let shade = ''
  for (let y = 272; y < 326; y += 3.2) {
    const w = 1 - Math.abs(y - 298) / 28
    shade += gouge(46 - w * 20, y, 360 + w * 50, y + 0.8, 1.2 + w * 2.6)
  }
  // The trunk, short and thick, and its boughs spreading into the crown:
  // tapering ribbons, with bark cut in paper down the side the light is on.
  const trunk = ribbon(
    [
      [204, 318],
      [206, 290],
      [204, 262],
      [202, 236],
      [204, 210],
      [208, 188],
    ],
    44,
    0.2,
    false,
  )
  const bough = (pts: Pt[], w: number) => ribbon(pts, w, 0.45, false)
  const boughs =
    bough(
      [
        [200, 214],
        [168, 190],
        [134, 160],
        [104, 136],
        [76, 122],
      ],
      20,
    ) +
    bough(
      [
        [206, 206],
        [176, 166],
        [158, 132],
        [150, 100],
      ],
      16,
    ) +
    bough(
      [
        [212, 204],
        [240, 172],
        [272, 142],
        [304, 120],
        [330, 116],
      ],
      20,
    ) +
    bough(
      [
        [210, 196],
        [214, 150],
        [214, 112],
        [210, 80],
      ],
      15,
    ) +
    bough(
      [
        [214, 200],
        [250, 160],
        [264, 120],
      ],
      12,
    )
  // Its roots, spreading over the ground at its foot: Gloucester sits on them.
  const roots =
    ribbon(
      [
        [190, 312],
        [168, 318],
        [140, 322],
        [116, 324],
      ],
      12,
      0.6,
      false,
    ) +
    ribbon(
      [
        [222, 304],
        [244, 300],
        [270, 304],
        [292, 312],
      ],
      16,
      0.5,
      false,
    ) +
    ribbon(
      [
        [214, 312],
        [232, 318],
        [258, 324],
      ],
      10,
      0.6,
      false,
    )
  let bark = ''
  for (let k = 0; k < 7; k++) {
    const y = 306 - k * 17 + between(r, -3, 3)
    bark += gouge(218 - k * 0.3, y, 217.5 - k * 0.3, y - between(r, 9, 14), 1)
    bark += gouge(210 - k * 0.3, y - 6, 209.5 - k * 0.3, y - 6 - between(r, 6, 10), 0.7)
  }
  const crown = canopy(rng(1902), CROWN, (x, y) => clamp((x - 110) / 220 - y / 260 + 0.45), 18, 6)
  // The battle's smoke, far off on the right: billows rising from the rise
  // and leaning left on the wind, as overlapping rounds whose union is the
  // cloud, with curls cut in paper along their tops.
  const rs = rng(1903)
  let smoke = ''
  let smokeCuts = ''
  const plumes: [number, number, number][] = [
    [566, 0.8, 5],
    [646, 1.15, 7],
    [748, 1, 6],
    [826, 0.7, 4],
  ]
  for (const [x0, s, steps] of plumes) {
    let y = ridgeY(x0) - 4
    for (let t = 0; t < steps; t++) {
      const rad = (5 + t * 2.6 + between(rs, -0.8, 0.8)) * s
      const x = x0 - (t * t * 1.6 + t * 2) * s + between(rs, -2, 2)
      for (const dx of t > 1 ? [-0.7, 0.55] : [0]) {
        const cx = x + dx * rad
        const cy = y + Math.abs(dx) * rad * 0.35 + between(rs, -1, 1)
        const rr = rad * (dx ? 0.78 : 1)
        smoke += `M${n(cx - rr)} ${n(cy)}a${n(rr)} ${n(rr)} 0 1 0 ${n(rr * 2)} 0a${n(rr)} ${n(rr)} 0 1 0 ${n(-rr * 2)} 0Z`
        if (t > 0)
          smokeCuts += `M${n(cx - rr * 0.6)} ${n(cy - rr * 0.25)}q${n(rr * 0.5)} ${n(-rr * 0.6)} ${n(rr * 1.1)} ${n(-rr * 0.12)}`
      }
      y -= rad * 1.05
    }
  }
  // Spears standing and leaning on the rise.
  let spears = ''
  const sp: [number, number][] = [
    [520, -8],
    [534, 6],
    [612, -14],
    [628, 4],
    [700, 18],
    [716, -6],
    [820, 10],
  ]
  for (const [x, lean] of sp) {
    const y = ridgeY(x)
    const a = ((-90 + lean) * Math.PI) / 180
    spears += `M${n(x)} ${n(y + 2)}L${n(x + Math.cos(a) * 30)} ${n(y + 2 + Math.sin(a) * 30)}`
  }
  cached = {
    sky,
    ridge,
    field,
    tufts,
    shade,
    trunk,
    boughs,
    roots,
    bark,
    crown,
    smoke,
    smokeCuts,
    spears,
  }
  return cached
}

/** The far rise on the right, where the battle was fought, rising out of the field. */
function ridgeY(x: number) {
  const top = 194 + 8 * Math.cos((x - 420) / 90)
  return HORIZON - (HORIZON - top) * clamp((x - 400) / 80)
}

/** Cordelia's colours, falling: a banner on a staff leaning down into the smoke. */
const BANNER_FOOT: Pt = [672, 192]
const BANNER_TOP: Pt = [700, 150]

function BattleLost(_: ArtProps) {
  const m = marks()
  let rise = `M400 ${HORIZON}`
  for (let x = 400; x <= W; x += 8) rise += `L${x} ${n(ridgeY(x))}`
  rise += `L${W} ${HORIZON}Z`
  const [fx, fy] = BANNER_FOOT
  const [tx, ty] = BANNER_TOP
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the smoke of the battle, far off */}
      <g className="lc-drift-r" style={timing({ delay: 0.2 })}>
        <path d={m.smoke} fill={PAPER} stroke={INK} strokeWidth={3.2} />
        <path d={m.smoke} fill={PAPER} />
        <path d={m.smokeCuts} fill="none" stroke={INK} strokeWidth={1.2} strokeLinecap="round" />
      </g>
      {/* the rise where it was fought, its spears, and the colours falling */}
      <path d={rise} fill={PAPER} />
      <path d={m.ridge} stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round" />
      <path d={rise.replace(/L860 210Z$/, '')} stroke={INK} strokeWidth={LINE.fine} fill="none" />
      <path d={m.spears} stroke={INK} strokeWidth={1.6} />
      <path d={`M${fx} ${fy}L${tx} ${ty}`} stroke={INK} strokeWidth={2.4} />
      <path
        d={`M${tx - 1} ${ty + 2}C${tx + 14} ${ty + 10} ${tx + 22} ${ty + 22} ${tx + 26} ${ty + 36}L${tx + 14} ${ty + 34}L${tx + 16} ${ty + 46}C${tx + 8} ${ty + 36} ${tx} ${ty + 26} ${tx - 9} ${ty + 18}Z`}
        fill={RED}
        stroke={INK}
        strokeWidth={1}
      />
      {/* the field between the two camps */}
      <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
      {m.field.map((d, i) => (
        <path key={i} d={d} stroke={INK} strokeWidth={GROUND_W[i]} strokeLinecap="round" />
      ))}
      <path d={m.tufts[0]} stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      <path d={m.tufts[1]} stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
      <path d={m.shade} fill={INK} />
      <path d={footShadow(EDGAR[0] + 4, EDGAR[1], 30, 4)} fill={INK} />
      {/* the tree, and the roots at its foot */}
      <path
        d={m.trunk + m.boughs + m.roots}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        paintOrder="stroke"
      />
      <path d={m.bark} fill={PAPER} />
      <path d={m.crown.mass} fill={INK} stroke={PAPER} strokeWidth={2.4} paintOrder="stroke" />
      <path d={m.crown.cuts} fill={PAPER} />
      {/* Gloucester, blind, sitting on the roots, his head bowed */}
      <Person
        at={GLOUCESTER}
        scale={SCALE}
        pose={{
          look: 'gloucester',
          blind: true,
          seated: { seat: SEAT, knee: [36, -SEAT - 6] },
          head: { rot: 20 },
          far: {
            pts: [
              [-4, -SEAT - 52],
              [2, -SEAT - 28],
              [22, -SEAT - 12],
            ],
          },
          near: {
            pts: [
              [3, -SEAT - 50],
              [8, -SEAT - 26],
              [28, -SEAT - 12],
            ],
          },
        }}
      />
      {/* Edgar, come back in haste from the battle, stooping to him with his hand held out */}
      <Person
        at={EDGAR}
        scale={SCALE}
        flip
        pose={{
          look: 'edgar',
          body: { neck: [18, -130], hip: [2, -70] },
          head: { rot: 22 },
          legs: {
            far: [
              [-1, -70],
              [-12, -38],
              [-24, -3],
            ],
            near: [
              [5, -70],
              [18, -40],
              [22, -3],
            ],
          },
          far: {
            pts: [
              [14, -124],
              [-4, -106],
              [-20, -92],
            ],
            hand: 'open',
            deg: 150,
            thumb: 1,
          },
          near: {
            pts: [
              [22, -122],
              [38, -96],
              [56, -62],
            ],
            hand: 'open',
            deg: 40,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const theBattleLost: LinocutArt = { width: W, height: H, Draw: BattleLost }

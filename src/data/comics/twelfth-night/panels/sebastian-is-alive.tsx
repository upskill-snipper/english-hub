import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'

/**
 * Act 2, Scene 1: "Sebastian is alive", the sixth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "The sea-coast." "Enter Antonio and Sebastian." So the sea fills the
 *   left of the block and they stand on the sand; nobody is in the water.
 *   Sebastian was taken "from the breach of the sea", so the swell is cut
 *   running in to break on the shore, and no wreck is drawn.
 * - "I am bound to the Count Orsino's court: farewell." So a path climbs the
 *   headland on the right to a walled town with towers, the court he is
 *   bound for, and Sebastian stands on it, a few steps up, turned back to
 *   Antonio with one hand raised in farewell, the fingers apart.
 * - "If you will not murder me for my love, let me be your servant"; "But
 *   come what may, I do adore thee so, That danger shall seem sport, and I
 *   will go." Antonio stays on the sand watching him go, one hand held out
 *   after him, open. His devotion is drawn as any bond in the play is drawn: a
 *   friend's farewell, nothing more and nothing less.
 * - "My father was that Sebastian of Messaline ... He left behind him myself
 *   and a sister, both born in an hour" and "she much resembled me". So
 *   Sebastian is the kit's 'sebastian', Viola's twin, with her face and her
 *   habit: the page's cap with its feather, the doublet and the short cloak.
 *   Antonio is the kit's sea captain, in his seaman's cap: Orsino's officer
 *   knows him "Though now you have no sea-cap on your head" (3.4).
 *
 * The play does not say what hour it is; the sun is low over the sea, the
 * spot colour, as the comedies' outdoor panels light their skies, and its
 * path lies across the water. Neither man is armed here: the play gives
 * them swords in Act 3 and Act 4, not in this parting. The people are cut
 * from ./people.tsx. Nothing is taken from a film, television or stage
 * production. Seeds: 2601 (sky), 2602 (the sun's rays), 2603 (the swell),
 * 2604 (the sun's path), 2605 (foam), 2606 (sand), 2607 (grass), 2608 (wet
 * sand).
 */

const W = 860
const H = 340
/** The sea's horizon. */
const HORIZON = 186
/** Where Antonio stands, on the sand. */
const FEET = 324
const SUN: Pt = [116, HORIZON]

/** The waterline: where the last wave runs up the sand. */
const shore = (x: number) => 250 + 7 * Math.sin(x / 64 + 1.2) + (x / W) * 22
/** The headland rising to the right, inland, towards the town. */
const HILL = 'M452 340C462 312 494 290 536 276C596 256 656 232 714 210C764 192 812 182 870 178V340Z'
/** The spine of the path from the sand up to the town gate, winding as it climbs. */
const PATH: Pt[] = [
  [530, 346],
  [556, 324],
  [594, 306],
  [636, 290],
  [668, 276],
  [684, 260],
  [706, 240],
  [736, 224],
  [760, 214],
  [778, 206],
]

type Marks = {
  sky: string
  sunRays: string
  sea: string
  glitter: string
  foam: string
  wet: string
  sand: string
  hill: string
  path: string
  pathEdge: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky: paper, cut with ink bars that thin out round the low sun.
  const sky = gougeField(
    rng(2601),
    { x0: 0, x1: W, y0: 8, y1: HORIZON - 6 },
    (x, y) =>
      clamp(
        0.6 -
          y / 320 +
          0.05 * Math.sin(x / 80 + y / 26) -
          Math.max(0, 1 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.4) / 230) * 0.6,
      ),
    { spacing: 7, len: [40, 140], gap: [12, 44], max: 2.4 },
  )
  const sunRays = rays(rng(2602), SUN[0], SUN[1], { from: 34, to: 132, every: 8, width: 2.2 })

  // The sea: black, cut with the paper crests of the swell, each a shallow
  // arch, small and close at the horizon and longer, heavier and further
  // apart as they come in.
  const q = rng(2603)
  let sea = ''
  for (let y = HORIZON + 4, row = 0; y < 268; row++) {
    const depth = clamp((y - HORIZON) / 72)
    let x = between(q, -40, 0) + (row % 2) * 12
    while (x < 700) {
      const len = between(q, 14, 30) + depth * 46
      const rise = 1 + depth * 3.6
      const pts: Pt[] = []
      for (let i = 0; i <= 8; i++) {
        const t = i / 8
        pts.push([x + len * t, y - Math.sin(Math.PI * t) * rise + between(q, -0.3, 0.3)])
      }
      if (y < shore(x + len / 2) - 4) sea += ribbon(pts, 0.9 + depth * 2.6, 0.7)
      x += len + between(q, 6, 26) * (1.3 - depth * 0.7)
    }
    y += 4.2 + depth * 6
  }
  // The low sun's path across the water: short bright cuts below it.
  const g = rng(2604)
  let glitter = ''
  for (let y = HORIZON + 4; y < 246; y += 3.6) {
    const spread = 8 + (y - HORIZON) * 0.8
    const k = Math.round(1 + (y - HORIZON) / 12)
    for (let i = 0; i < k; i++) {
      const cx = SUN[0] + between(g, -spread, spread)
      const len = between(g, 6, 18)
      glitter += gouge(cx - len / 2, y, cx + len / 2, y, 0.7 + between(g, 0, 0.9))
    }
  }
  // The foam of the last wave running up the sand: a scalloped paper edge.
  const f = rng(2605)
  let foam = ''
  for (let x = -12; x < 520; ) {
    const w = between(f, 14, 30)
    const y = shore(x + w / 2)
    foam += `M${n(x)} ${n(y + 1)}Q${n(x + w / 2)} ${n(y - between(f, 5, 9))} ${n(x + w)} ${n(y + 1)}Z`
    x += w - 2
  }
  // The wet sand just above the waterline: darker, in long ink streaks.
  const wt = rng(2608)
  let wet = ''
  for (let k = 0; k < 4; k++) {
    let x = between(wt, -20, 10)
    while (x < 500) {
      const len = between(wt, 30, 90)
      const y = shore(x + len / 2) + 5 + k * 3.4
      wet += gouge(x, y, x + len, y + between(wt, -0.4, 0.4), 1.5 - k * 0.3)
      x += len + between(wt, 10, 40)
    }
  }
  // The sand: paper, stippled in ink, heavier towards the front.
  const sand = gougeField(
    rng(2606),
    { x0: 0, x1: 560, y0: 274, y1: H },
    (x, y) => clamp(0.1 + ((y - 274) / (H - 274)) ** 1.4 * 0.42),
    { spacing: 4.6, len: [6, 22], gap: [6, 24], max: 2.2 },
  )
  // The headland: tufts of grass cut in short strokes on the black.
  const h = rng(2607)
  let hill = ''
  for (let i = 0; i < 300; i++) {
    const x = between(h, 470, 860)
    const top = 340 - (340 - 178) * clamp((x - 452) / 418) ** 0.7
    const y = between(h, top + 8, H)
    const s = 0.6 + ((y - top) / (H - top)) * 0.8
    hill += gouge(x, y, x + between(h, -2, 2), y - between(h, 4, 9) * s, 0.5 + s * 0.4)
  }
  // The path: a pale track narrowing as it climbs, with a worn edge.
  const path = ribbon(PATH, 36, 0.8, false)
  let pathEdge = ''
  for (let i = 1; i < PATH.length - 2; i++) {
    const [x, y] = PATH[i]
    pathEdge += gouge(x - 10 + i, y + 2, x + 8 - i, y - 1, 0.6)
  }
  cached = { sky, sunRays, sea, glitter, foam, wet, sand, hill, path, pathEdge }
  return cached
}

/**
 * The town on the hill, where the path leads: Orsino's court. A wall with a
 * gate and battlements, and towers behind it, in ink against the sky with
 * their windows cut.
 */
const TOWN =
  'M726 206V184H730V179H735V184H741V179H746V184H750V150L760 128L770 150V184H778V179H783V184H789V179H794V184H800V160H806V146L816 132L826 146V160H832V184H836V206Z'
const TOWN_CUTS =
  'M757 152h5v9h-5zM813 150h5v9h-5zM768 206V196Q776 188 784 196V206Z' +
  gouge(740, 196, 758, 196, 0.8) +
  gouge(796, 196, 830, 196, 0.8)

/** Rocks at the water's edge on the left: two boulders, their lit facets cut. */
const ROCKS =
  'M-6 344V306L10 292L30 288L42 298L46 312L52 296L68 288L86 294L98 312L102 344Z' +
  'M112 344L118 328L132 322L146 330L150 344Z'
const ROCK_CUTS =
  'M-2 306L10 296L28 292L18 300L4 310Z' +
  'M52 300L66 292L82 297L70 300L58 306Z' +
  'M120 330L131 325L140 329L128 331Z' +
  gouge(30, 294, 38, 322, 1.2, 0.8) +
  gouge(84, 300, 94, 326, 1.1, -0.6) +
  gouge(8, 318, 26, 314, 1, -0.4)

function SebastianIsAlive({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  const sand = `M-10 ${H}L-10 ${n(shore(-10))}${Array.from(
    { length: 58 },
    (_, i) => `L${i * 10} ${n(shore(i * 10))}`,
  ).join('')}L580 ${H}Z`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={HORIZON} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the low sun over the sea */}
        <g clipPath={`url(#${skyClip})`}>
          <g className="lc-fade-in" style={timing({ dur: 1.6 })}>
            <path d={m.sunRays} fill={INK} />
          </g>
          <circle cx={SUN[0]} cy={SUN[1]} r={31} fill={PAPER} />
          <circle cx={SUN[0]} cy={SUN[1]} r={25} fill={RED} />
        </g>

        {/* the sea, its swell running in */}
        <rect x={0} y={HORIZON} width={W} height={90} fill={INK} />
        <path d={m.sea} fill={PAPER} />
        <path d={m.glitter} fill={PAPER} />
        {/* the sand, and the last wave running up it */}
        <path d={sand} fill={PAPER} />
        <path d={m.wet} fill={INK} />
        <path d={m.foam} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        <path d={m.sand} fill={INK} />

        {/* the town on the hill, the headland and the path up to its gate */}
        <path d={TOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={TOWN_CUTS} fill={PAPER} />
        <path d={HILL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.hill} fill={PAPER} />
        <path d={m.path} fill={PAPER} />
        <path d={m.pathEdge} fill={INK} />

        <path d={ROCKS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={ROCK_CUTS} fill={PAPER} />

        {/* Antonio, on the sand, his hand held out after Sebastian as he goes */}
        <Person
          at={[318, FEET]}
          scale={1.06}
          pose={{
            look: 'antonio',
            head: { rot: -2 },
            far: {
              pts: [
                [-4, -128],
                [-9, -100],
                [-6, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [24, -116],
                [44, -124],
              ],
              hand: 'open',
              deg: -22,
              thumb: -1,
            },
          }}
        />
        {/* Sebastian, a few steps up the path, turned back to say farewell */}
        <Person
          at={[586, 306]}
          scale={1.04}
          flip
          pose={{
            look: 'sebastian',
            legs: {
              far: [
                [-3, -70],
                [-9, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [12, -3],
              ],
            },
            cloak: 4,
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-5, -74],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [22, -114],
                [28, -142],
              ],
              hand: 'open',
              deg: -80,
              thumb: 1,
            },
          }}
        />
      </g>
    </>
  )
}

export const sebastianIsAlive: LinocutArt = { width: W, height: H, Draw: SebastianIsAlive }

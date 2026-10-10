import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapters 35 and 36 (Volume II, Chapters 12 and 13): "The letter", the
 * eighth moment in the guide's timeline. Drawn at the moment the letter
 * passes between them. Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "she resolved soon after breakfast to indulge herself in air and
 *   exercise"; "she turned up the lane"; "The park paling was still the
 *   boundary on one side, and she soon passed one of the gates into the
 *   ground." So it is morning, and a lane runs along the park paling, with a
 *   gate in it. The paling's pales are cleft and close-set; the gate is a
 *   plain five-bar gate of the time.
 * - "tempted, by the pleasantness of the morning, to stop at the gates and
 *   look into the park"; "every day was adding to the verdure of the early
 *   trees"; "she caught a glimpse of a gentleman within the sort of grove
 *   which edged the park". So the sky is clear and the grove inside the
 *   paling is in new leaf, with an opening where a ride runs back into the
 *   plantation he will turn into ("with a slight bow, turned again into the
 *   plantation, and was soon out of sight").
 * - "He had by that time reached it also, and holding out a letter, which
 *   she instinctively took, said with a look of haughty composure". So Darcy
 *   stands inside the gate, upright, his head held back (the kit's `proud`),
 *   holding the letter out over the top rail, and Elizabeth in the lane
 *   reaches up for it. Both are dressed for the morning out of doors: his tall
 *   hat and boots, her bonnet.
 * - "an envelope containing two sheets of letter paper, written quite
 *   through, in a very close hand.--The envelope itself was likewise full."
 *   So the letter is a thick packet, folded, its seal printed in ink: a red
 *   speck at a hand reads as blood.
 *
 * Nothing here is given a colour, so the print has no red. The words that
 * turn the novel ("Till this moment, I never knew myself") come later, in the
 * lane, as she reads; the guide quotes them beside the panel, and the panel
 * quotes Darcy's own words at the gate.
 *
 * Seed: 801, for everything.
 */

const W = 860
const H = 340
/** The foot of the paling, where the lane's verge meets it. */
const PALE_FOOT = 262
/** The tops of the pales, and the gate. */
const PALE_TOP = 184
const GATE = { x0: 462, x1: 586, top: 200 }
/** The opening in the grove behind the gate, where a ride runs into the plantation. */
const GAP = { x0: 352, x1: 662 }

type Marks = {
  sky: string
  far: string
  farCuts: string
  canopy: string
  canopyCuts: string
  trunks: string
  turf: string
  pales: string
  paleCuts: string
  lane: string
  verge: string
}

/** The trees of the grove: [x of the foot, width at the foot, lean, branches up to]. */
const TRUNKS: [number, number, number][] = [
  [44, 26, -8],
  [150, 18, 6],
  [252, 22, -4],
  [326, 14, 8],
  [700, 18, -6],
  [800, 24, 6],
]

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(801)
  // A clear spring morning: the sky printed paper, a few long ink cuts high up.
  let sky = ''
  for (let y = 12; y < 64; y += 7) {
    let x = GAP.x0 + between(r, -30, 0)
    while (x < GAP.x1) {
      const len = between(r, 30, 80)
      if (r() < 0.35) sky += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + (64 - y) * 0.016)
      x += len + between(r, 24, 60)
    }
  }
  // Far down the ride, the plantation's further trees: a dark band with a
  // ragged top, a few trunks standing pale in it.
  let far = `M${GAP.x0 - 10} 206`
  for (let x = GAP.x0 - 10; x <= GAP.x1 + 10; x += 6)
    far += `L${n(x)} ${n(160 + 9 * Math.sin(x / 13) + 6 * Math.sin(x / 5.3) + between(r, -3, 3))}`
  far += `L${GAP.x1 + 10} 206Z`
  let farCuts = ''
  for (let x = GAP.x0 + 8; x < GAP.x1; x += between(r, 18, 34))
    farCuts += gouge(x, 178 + between(r, 0, 8), x + between(r, -1, 1), 204, 1)
  // The near grove in new leaf: two masses of ink either side of the
  // opening, their undersides scalloped with leaf, the sunlit sprigs cut in
  // paper. Under them, between the trunks, the light of the park beyond.
  // Their inner edges are the rounded crowns of the last trees, lobe on lobe.
  const sideL = (y: number) => GAP.x0 - 10 + 22 * Math.sqrt(Math.abs(Math.sin((y + 14) / 24)))
  const sideR = (y: number) => GAP.x1 + 10 - 22 * Math.sqrt(Math.abs(Math.sin((y + 4) / 22)))
  const scallops = (xFrom: number, xTo: number, y0: number): string => {
    // Leafy lobes along the underside, from xFrom to xTo (either direction).
    let d = ''
    const dir = xTo > xFrom ? 1 : -1
    for (let x = xFrom; dir * (xTo - x) > 0; ) {
      const step = between(r, 16, 28)
      const x2 = dir > 0 ? Math.min(x + step, xTo) : Math.max(x - step, xTo)
      const y = y0 + 10 * Math.sin(x / 41) + between(r, -4, 4)
      d += `Q${n((x + x2) / 2)} ${n(y + between(r, 10, 16))} ${n(x2)} ${n(y)}`
      x = x2
    }
    return d
  }
  const BOTTOM_L = 128
  const BOTTOM_R = 120
  let canopy = `M-10 -10`
  for (let y = -10; y <= BOTTOM_L; y += 7) canopy += `L${n(sideL(y) + between(r, -6, 6))} ${y}`
  canopy += scallops(sideL(BOTTOM_L), -10, BOTTOM_L) + 'Z'
  canopy += `M${W + 10} -10`
  for (let y = -10; y <= BOTTOM_R; y += 7) canopy += `L${n(sideR(y) + between(r, -6, 6))} ${y}`
  canopy += scallops(sideR(BOTTOM_R), W + 10, BOTTOM_R) + 'Z'
  // The undergrowth along the foot of the grove, behind the paling.
  canopy += `M-10 210L-10 196` + scallops(-10, W + 10, 194) + `L${W + 10} 210Z`
  let canopyCuts = ''
  for (let i = 0; i < 150; i++) {
    const left = r() < 0.6
    const x = left ? between(r, 0, GAP.x0 - 6) : between(r, GAP.x1 + 6, W)
    const y = between(r, 6, 112)
    // The light comes from the opening: more sprigs, and longer, near it.
    const near = left ? 1 - (GAP.x0 - x) / GAP.x0 : 1 - (x - GAP.x1) / (W - GAP.x1)
    if (r() > 0.35 + near * 0.6) continue
    canopyCuts += gouge(
      x,
      y,
      x + between(r, 4, 8) * (left ? 1 : -1),
      y + between(r, -2.5, 1),
      0.7 + near * 0.6,
    )
  }
  // The trunks rising into the leaves, black against the light between them.
  let trunks = ''
  for (const [x, w, lean] of TRUNKS) {
    const pts: Pt[] = [
      [x, 206],
      [x + lean * 0.3, 176],
      [x + lean * 0.7, 140],
      [x + lean, 104],
    ]
    trunks += ribbon(pts, w, 0.3, false)
  }
  // The turf inside the park, lit: tufts of grass cut as short upright
  // strokes of ink (level strokes here read as water).
  let turf = ''
  for (let y = 212; y < PALE_FOOT; y += 9) {
    for (let x = between(r, 0, 8); x < W; x += between(r, 10, 22)) {
      const h = between(r, 3, 6) + (y - 212) * 0.05
      turf += gouge(x, y, x + between(r, -1.6, 1.6), y - h, 0.7)
    }
  }
  // The pales: cleft oak, close-set and uneven, their tops cut to a point.
  let pales = ''
  let paleCuts = ''
  for (let x = 0; x < W; ) {
    const w = between(r, 7, 10.5)
    if (x + w > GATE.x0 - 14 && x < GATE.x1 + 14) {
      x = GATE.x1 + 14
      continue
    }
    const top = PALE_TOP + between(r, -4, 5)
    const tip = between(r, -1.4, 1.4)
    pales += `M${n(x)} ${PALE_FOOT}L${n(x)} ${n(top + 5)}L${n(x + w / 2 + tip)} ${n(top - 1)}L${n(x + w)} ${n(top + 5)}L${n(x + w)} ${PALE_FOOT}Z`
    // The grain of the split oak: one long cut down each pale.
    if (r() < 0.7)
      paleCuts += gouge(
        x + w * 0.5,
        top + 10,
        x + w * 0.5 + between(r, -1, 1),
        PALE_FOOT - between(r, 6, 20),
        0.6,
      )
    x += w + between(r, 1.6, 3.2)
  }
  // The lane: pale, worn, with the ruts and stones of a country road.
  let lane = ''
  for (let y = PALE_FOOT + 26; y < H; y += 6) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 10, 40)
      if (r() < 0.3)
        lane += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + (y - PALE_FOOT) * 0.012)
      x += len + between(r, 16, 50)
    }
  }
  // The grass verge between the lane and the paling: tufts cut in paper.
  let verge = ''
  for (let x = 2; x < W; x += 4.2) {
    const h = between(r, 5, 12)
    verge += gouge(x, PALE_FOOT + 22, x + between(r, -2.4, 2.4), PALE_FOOT + 22 - h, 0.8)
  }
  cached = { sky, far, farCuts, canopy, canopyCuts, trunks, turf, pales, paleCuts, lane, verge }
  return cached
}

/** The five-bar gate into the park, its posts and its brace. */
function Gate() {
  const { x0, x1, top } = GATE
  const bars = [top, top + 14, top + 28, top + 42, top + 56]
  return (
    <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
      <rect x={x0 - 13} y={top - 20} width={13} height={PALE_FOOT - top + 20} />
      <rect x={x1} y={top - 20} width={13} height={PALE_FOOT - top + 20} />
      {bars.map((y) => (
        <rect key={y} x={x0} y={y} width={x1 - x0} height={5.4} />
      ))}
      <path
        d={`M${x0 + 2} ${top + 58}L${x1 - 4} ${top + 2}L${x1 - 4} ${top + 9}L${x0 + 9} ${top + 60}Z`}
      />
      <rect x={x0 + (x1 - x0) * 0.46} y={top} width={6} height={61} />
    </g>
  )
}

/**
 * Darcy at the gate, inside the park, with "a look of haughty composure":
 * upright, his head back, holding the letter out to her over the top rail.
 */
const DARCY: Pose = {
  look: 'darcy',
  hat: true,
  proud: true,
  legwear: 'boots',
  near: {
    pts: [
      [5, -132],
      [22, -118],
      [42, -122],
    ],
    hand: 'grip',
  },
  far: {
    pts: [
      [-4, -132],
      [-8, -104],
      [-6, -80],
    ],
    hand: 'mitt',
  },
}
/** The letter in his hand, in his own frame: a thick packet, folded and sealed in ink. */
const LETTER = 'M38 -134L64 -138L66 -114L40 -110Z'
const LETTER_FOLDS = 'M39.4 -124L65 -128.4M52 -136L53.4 -112'
const SEAL = 'M49.6 -125.6a2.8 2.8 0 1 0 5.6 0a2.8 2.8 0 1 0 -5.6 0Z'

/** Elizabeth in the lane, in her bonnet, reaching up to take it. */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  hat: true,
  head: { rot: -6 },
  near: {
    pts: [
      [3, -126],
      [18, -116],
      [33, -124],
    ],
    hand: 'open',
    deg: -26,
    size: 12,
    spread: 12,
    thumb: -1,
  },
  far: {
    pts: [
      [-3, -126],
      [-7, -104],
      [-5, -84],
    ],
    hand: 'mitt',
  },
}

function TheLetter({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [500, 190], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.far} fill={INK} />
      <path d={m.farCuts} fill={PAPER} />
      {/* the turf inside the park, and the ride running back into the plantation */}
      <rect x={0} y={200} width={W} height={PALE_FOOT - 200} fill={PAPER} />
      <path d={m.turf} fill={INK} />
      {/* the grove that edges the park, in new leaf */}
      <path d={m.trunks} fill={INK} />
      <path d={m.canopy} fill={INK} />
      <path d={m.canopyCuts} fill={PAPER} />

      {/* Darcy, behind the gate */}
      <Person pose={DARCY} at={[550, 296]} scale={1.28} flip>
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d={LETTER_FOLDS} stroke={INK} strokeWidth={0.8} fill="none" />
        <path d={SEAL} fill={INK} />
      </Person>

      {/* the park paling and the gate */}
      <path d={m.pales} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <path d={m.paleCuts} fill={PAPER} />
      <Gate />

      {/* the verge and the lane */}
      <rect x={0} y={PALE_FOOT} width={W} height={H - PALE_FOOT} fill={PAPER} />
      <rect x={0} y={PALE_FOOT} width={W} height={22} fill={INK} />
      <path d={m.verge} fill={PAPER} />
      <path d={m.lane} fill={INK} />

      {/* Elizabeth in the lane */}
      <Person pose={ELIZABETH} at={[404, 326]} scale={1.42} />
    </g>
  )
}

export const theLetterArt: LinocutArt = { width: W, height: H, Draw: TheLetter }

export const theLetter: ComicPanel = {
  moment: 'The letter',
  art: theLetterArt,
  alt: 'A linocut print of a country lane on a spring morning beside the tall wooden paling of Rosings park. Beyond the paling the trees of a grove stand in new leaf, with a gap of open sky between them where a ride runs back into the plantation. Mr Darcy stands inside the park behind a five-bar gate, upright in a tall hat with his head held back, and holds a thick folded and sealed letter out over the top rail. Elizabeth, in a bonnet and a pale gown, stands in the lane and reaches up to take it.',
  quote: 'Will you do me the honour of reading that letter?',
  quoteAt: 'top-left',
}

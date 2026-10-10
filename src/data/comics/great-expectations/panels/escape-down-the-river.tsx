import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapter 54: "Escape down the river", the seventeenth moment in the guide's
 * timeline, at the instant of its quotation, before anything is done. Every
 * detail is from the held edition (src/data/full-texts/great-expectations.ts):
 *
 * - "The air felt cold upon the river, but it was a bright day"; "rowed out
 *   into the track of the steamer"; "now she was visible coming head on";
 *   "She was nearing us very fast, and the beating of her paddles grew louder
 *   and louder." So it is broad daylight on the wide river below Gravesend,
 *   the far shore low and flat, and the Hamburg steamer bears down from the
 *   left under her smoke, her paddle-wheel turning.
 * - "Herbert in the bow, I steering"; "adjured Provis to sit quite still,
 *   wrapped in his cloak ... and sat like a statue"; Startop gave the word
 *   "as we sat face to face". So in the near boat Pip sits at the tiller in
 *   the stern, his coat worn "like a cloak, loose over my shoulders and
 *   fastened at the neck" over his burnt arms (Chapter 50); Magwitch, the
 *   kit's Magwitch at sixty with his hair cut short ('magwitch60', `cropped`,
 *   in ./people.tsx), sits still beside him in his cloak; Startop and Herbert,
 *   the kit's, pull at the oars facing them.
 * - "the galley ... had crossed us, let us come up with her, and fallen
 *   alongside"; "A four-oared galley"; "Of the two sitters, one held the
 *   rudder lines, and looked at us attentively—as did all the rowers; the
 *   other sitter was wrapped up, much as Provis was, and seemed to shrink".
 *   So the galley lies alongside beyond them, four men at its oars, the
 *   steersman turned to them, and beside him a sitter muffled to the nose.
 * - "'You have a return transport there,' said the man who held the lines.
 *   'That's the man, wrapped in the cloak ... I apprehend that man'". So the
 *   steersman points at the man in the cloak.
 *
 * WHAT IS NOT DRAWN (../index.ts): what follows the quotation. The galley
 * running aboard them, the hand laid on a shoulder, the cloak pulled away,
 * the boats overturning and anyone in the water are not shown; both boats sit
 * level on the river and no one in them is touched. The spot colour is not
 * used: red on a river beside two convicts would read as blood.
 *
 * Seeds: 5401 (the sky), 5402 (the water), 5403 (the smoke), 5404 (the
 * steamer's wash), 5405 (the far shore).
 */

const W = 860
const H = 340
/** The far shore of the broad river, flat marsh. */
const HZ = 112
/** Pip's boat: stern, bow, gunwale, waterline, and the floor its people sit above. */
const BOAT = { x0: 322, x1: 812, gun: 290, water: 312, floor: 332 }
/** The galley alongside, beyond it: her stern, gunwale, waterline and floor; her bow runs out of the picture. */
const GALLEY = { x0: 452, gun: 194, water: 212, floor: 222 }
/** How large the people in each boat are drawn. */
const NEAR = 0.95
const FAR = 0.7

/** The steamer, seen from her bow quarter as she comes on: where her hull meets the water at stern and bow, and her deck. */
const SHIP = {
  stern: [14, 200] as Pt,
  bow: [296, 238] as Pt,
  deckStern: [10, 164] as Pt,
  deckBow: [318, 174] as Pt,
  /** The paddle-box over the wheel, and the funnel and masts above the deck. */
  wheel: [138, 210, 46] as [number, number, number],
  funnel: { x: 150, top: 62 },
  masts: [
    [58, 26],
    [236, 22],
  ] as Pt[],
}
/** The deck's height at x. */
const deckAt = (x: number) =>
  SHIP.deckStern[1] +
  ((x - SHIP.deckStern[0]) / (SHIP.deckBow[0] - SHIP.deckStern[0])) *
    (SHIP.deckBow[1] - SHIP.deckStern[1])
/** The waterline's height at x. */
const waterAt = (x: number) =>
  SHIP.stern[1] +
  ((x - SHIP.stern[0]) / (SHIP.bow[0] - SHIP.stern[0])) * (SHIP.bow[1] - SHIP.stern[1])

type Marks = {
  sky: string
  shore: string
  water: string
  billows: [number, number, number][]
  smokeCuts: string
  slats: string
  wash: string
  reflect: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A bright March sky scored by a cold wind.
  const rs = rng(5401)
  let sky = ''
  for (let y = 10; y < HZ - 4; y += 7) {
    let x = between(rs, -30, 0)
    while (x < W) {
      const len = between(rs, 30, 120)
      if (rs() < 0.36 - y / 600)
        sky += gouge(x, y, x + len, y + between(rs, -0.6, 0.6), 0.45 + y / 300)
      x += len + between(rs, 20, 70)
    }
  }
  // The far shore: a low dark line of marsh.
  const rf = rng(5405)
  let shore = `M0 ${HZ + 2}`
  for (let x = 0; x <= W; x += 12)
    shore += `L${x} ${n(HZ - 3 - 2.5 * Math.sin(x / 70) - between(rf, 0, 1.5))}`
  shore += `L${W} ${HZ + 4}L0 ${HZ + 4}Z`
  // The river: a glitter of sun in the middle distance, darker towards us.
  const water = gougeField(
    rng(5402),
    { x0: 0, x1: W, y0: HZ + 5, y1: H },
    (x, y) => {
      const t = (y - HZ) / (H - HZ)
      const glitter = clamp(1 - Math.abs(t - 0.2) / 0.28) * 0.5
      return clamp(0.32 + glitter + 0.12 * Math.sin(x / 90))
    },
    { spacing: 5.4, len: [20, 80], gap: [6, 22], max: 2.8 },
  )
  // The smoke from her funnel, rolling away astern in billows.
  const sm = rng(5403)
  const { x: fx, top: ft } = SHIP.funnel
  const billows: [number, number, number][] = []
  for (let k = 0; k < 9; k++) {
    const t = k / 8
    billows.push([
      fx - 8 - t * 170 + between(sm, -6, 6),
      ft - 12 - t * 34 + between(sm, -5, 5),
      9 + t * 20 + between(sm, -2, 2),
    ])
  }
  let smokeCuts = ''
  for (const [cx, cy, r] of billows) {
    for (let j = 0; j < 3; j++) {
      const y = cy - r * 0.4 + j * r * 0.35
      smokeCuts += gouge(cx - r * 0.55, y, cx + r * 0.3, y - r * 0.12, 0.5 + r / 40, -0.6)
    }
  }
  // The paddle-box's radiating slats.
  const [wx, wy, wr] = SHIP.wheel
  let slats = ''
  for (let a = 196; a <= 344; a += 18) {
    const c = Math.cos((a * Math.PI) / 180)
    const s = Math.sin((a * Math.PI) / 180)
    slats += gouge(wx + c * 9, wy + s * 9, wx + c * (wr - 6), wy + s * (wr - 6), 1.1)
  }
  // Her bow wave, and the water churned white under her paddles.
  const rw = rng(5404)
  let wash = ''
  const [bx, by] = SHIP.bow
  for (let k = 0; k < 9; k++) {
    const y = by - 2 + k * 2.4
    wash += gouge(bx - 18 + k * 2, y, bx + 20 + k * 5, y + 3 + k * 0.6, 1 + rw() * 1.2, -1)
  }
  for (let k = 0; k < 10; k++) {
    const x = wx - wr + between(rw, 0, wr * 2)
    const y = waterAt(x) + between(rw, 1, 8)
    wash += gouge(x - 16, y, x + 16, y + between(rw, -1, 1), 1.2 + rw())
  }
  // Dark water under the hulls.
  let reflect = ''
  for (let y = BOAT.water + 2; y < BOAT.water + 24; y += 3.4) {
    const w = 1 - (y - BOAT.water) / 28
    reflect += gouge(BOAT.x0 + 14, y, BOAT.x1 - 50, y, 1.4 + w * 2.2)
  }
  for (let y = GALLEY.water + 2; y < GALLEY.water + 12; y += 3) {
    reflect += gouge(GALLEY.x0 + 10, y, W, y - 1, 1.6)
  }
  for (let x = SHIP.stern[0] + 10; x < SHIP.bow[0] - 20; x += 6) {
    const y = waterAt(x)
    reflect += gouge(x, y + 2, x + between(rw, -2, 2), y + 18 + between(rw, 0, 14), 1.6)
  }
  cached = { sky, shore, water, billows, smokeCuts, slats, wash, reflect }
  return cached
}

/** The steamer for Hamburg, coming down the river on them. */
function Steamer() {
  const m = marks()
  const [sx, sy] = SHIP.stern
  const [bx, by] = SHIP.bow
  const [dsx, dsy] = SHIP.deckStern
  const [dbx, dby] = SHIP.deckBow
  const [wx, , wr] = SHIP.wheel
  const { x: fx, top: ft } = SHIP.funnel
  const hull = `M${dsx} ${dsy}Q${n((dsx + dbx) / 2)} ${n((dsy + dby) / 2 + 8)} ${dbx} ${dby}Q${dbx - 6} ${n(by - 30)} ${bx} ${by}L${sx + 8} ${sy}Q${sx - 2} ${sy - 14} ${dsx} ${dsy}Z`
  const box = `M${wx - wr} ${n(waterAt(wx - wr))}A${wr} ${wr} 0 0 1 ${wx + wr} ${n(waterAt(wx + wr))}Z`
  const funnel = `M${fx - 9} ${n(deckAt(fx - 9) + 2)}L${fx - 6} ${ft}L${fx + 12} ${ft}L${fx + 11} ${n(deckAt(fx + 11) + 2)}Z`
  const rigging = SHIP.masts.map(([mx, top]) => `M${mx} ${n(deckAt(mx))}L${mx + 2} ${top}`).join('')
  const stays =
    `M${SHIP.masts[1][0] + 2} ${SHIP.masts[1][1] + 4}L${dbx + 40} ${dby - 14}` +
    `M${SHIP.masts[0][0] + 2} ${SHIP.masts[0][1] + 4}L${dsx + 4} ${dsy - 2}` +
    `M${SHIP.masts[0][0] + 2} ${SHIP.masts[0][1] + 6}L${SHIP.masts[1][0] + 2} ${SHIP.masts[1][1] + 8}`
  const yards = SHIP.masts
    .map(
      ([mx, top]) =>
        `M${mx - 18} ${top + 16}L${mx + 22} ${top + 14}M${mx - 14} ${top + 40}L${mx + 18} ${top + 38}`,
    )
    .join('')
  return (
    <g>
      {/* rigging and spars, cut in ink against the pale sky */}
      <path d={stays} stroke={INK} strokeWidth={1.2} fill="none" />
      <path d={yards} stroke={INK} strokeWidth={2.6} fill="none" />
      <path d={rigging} stroke={INK} strokeWidth={4.4} fill="none" />
      <path d={`M${dbx - 2} ${dby + 2}L${dbx + 40} ${dby - 14}`} stroke={INK} strokeWidth={3.4} />
      {/* the smoke, rolling away astern */}
      <g className="lc-drift-r" style={timing({ delay: 0.2 })}>
        <g fill={PAPER}>
          {m.billows.map(([cx, cy, r]) => (
            <circle key={`h${cx}`} cx={cx} cy={cy} r={r + 1.8} />
          ))}
        </g>
        <g fill={INK}>
          {m.billows.map(([cx, cy, r]) => (
            <circle key={`b${cx}`} cx={cx} cy={cy} r={r} />
          ))}
        </g>
        <path d={m.smokeCuts} fill={PAPER} />
      </g>
      <path d={funnel} fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path d={gouge(fx - 2, ft + 8, fx - 1, deckAt(fx) - 6, 1.1)} fill={PAPER} />
      {/* the hull, the rail along her deck and the paddle-box on her side */}
      <path d={hull} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
      <path
        d={`M${dsx + 4} ${dsy + 6}L${dbx - 4} ${dby + 4}`}
        stroke={PAPER}
        strokeWidth={1.3}
        fill="none"
      />
      <path d={box} fill={INK} stroke={PAPER} strokeWidth={2} />
      <path d={m.slats} fill={PAPER} />
      <circle cx={wx} cy={SHIP.wheel[1]} r={6} fill={PAPER} />
      <path d={m.wash} fill={PAPER} />
    </g>
  )
}

// ── THE PEOPLE ──────────────────────────────────────────────────────────────

/** A man sitting on a thwart, his seat this high above the boards. */
const SEAT = 34

/** Pip at the tiller: "Herbert in the bow, I steering", his burnt arm in its sling. */
const PIP: Pose = {
  look: 'pip',
  age: 'man',
  body: { neck: [4, -102], hip: [0, -SEAT] },
  head: { rot: -10 },
  legs: {
    far: [
      [-2, -SEAT],
      [26, -SEAT - 2],
      [24, -3],
    ],
    near: [
      [2, -SEAT],
      [30, -SEAT - 1],
      [30, -3],
    ],
  },
  near: {
    pts: [
      [6, -94],
      [18, -72],
      [30, -66],
    ],
    hand: 'grip',
    deg: 10,
  },
  far: {
    pts: [
      [0, -96],
      [-2, -72],
      [0, -60],
    ],
    hand: 'none',
  },
  eye: 'wide',
  brow: 'up',
}

/** Magwitch, "wrapped in his cloak", sitting "like a statue". */
const MAGWITCH: Pose = {
  look: 'magwitch60',
  cropped: true,
  body: { neck: [2, -102], hip: [0, -SEAT] },
  legs: {
    far: [
      [-2, -SEAT],
      [26, -SEAT - 2],
      [24, -3],
    ],
    near: [
      [2, -SEAT],
      [30, -SEAT - 1],
      [30, -3],
    ],
  },
  near: {
    pts: [
      [4, -94],
      [10, -70],
      [20, -60],
    ],
    hand: 'none',
  },
  far: {
    pts: [
      [0, -96],
      [4, -70],
      [16, -60],
    ],
    hand: 'none',
  },
  eye: 'open',
}

/** A rower pulling, facing the stern: drawn facing right in his own frame, and flipped. */
function rower(look: 'herbert' | 'startop' | 'man'): Pose {
  return {
    look,
    body: { neck: [10, -100], hip: [0, -SEAT] },
    head: { rot: 6 },
    legs: {
      far: [
        [-2, -SEAT],
        [26, -SEAT - 4],
        [28, -3],
      ],
      near: [
        [2, -SEAT],
        [30, -SEAT - 2],
        [32, -3],
      ],
    },
    near: {
      pts: [
        [12, -92],
        [26, -78],
        [40, -72],
      ],
      hand: 'grip',
      deg: 20,
    },
    far: {
      pts: [
        [8, -94],
        [22, -80],
        [36, -74],
      ],
      hand: 'grip',
      deg: 20,
    },
    eye: 'open',
  }
}

/** The galley's steersman, turned to them: "I apprehend that man". */
const OFFICER: Pose = {
  look: 'man',
  hat: 'top',
  body: { neck: [6, -102], hip: [0, -SEAT] },
  head: { rot: 10 },
  legs: {
    far: [
      [-2, -SEAT],
      [26, -SEAT - 2],
      [24, -3],
    ],
    near: [
      [2, -SEAT],
      [30, -SEAT - 1],
      [30, -3],
    ],
  },
  near: {
    pts: [
      [8, -94],
      [26, -84],
      [38, -94],
    ],
    hand: 'point',
    deg: 24,
  },
  far: {
    pts: [
      [2, -96],
      [6, -72],
      [18, -62],
    ],
    hand: 'grip',
  },
  eye: 'open',
  brow: 'frown',
}

/** The other sitter, "wrapped up, much as Provis was", seeming "to shrink". */
const SITTER: Pose = {
  look: 'man',
  hat: 'top',
  body: { neck: [-6, -98], hip: [0, -SEAT] },
  head: { rot: 18 },
  legs: {
    far: [
      [-2, -SEAT],
      [26, -SEAT - 2],
      [24, -3],
    ],
    near: [
      [2, -SEAT],
      [30, -SEAT - 1],
      [30, -3],
    ],
  },
  near: {
    pts: [
      [-2, -92],
      [6, -70],
      [16, -62],
    ],
    hand: 'none',
  },
  far: {
    pts: [
      [-6, -92],
      [0, -70],
      [10, -62],
    ],
    hand: 'none',
  },
  eye: 'open',
}

/**
 * A boat-cloak round a sitting figure, in its frame: from the throat over the
 * shoulders and down over the lap to the knees. `collar` raises it to the
 * nose, for the man who would not be known.
 */
const CLOAK =
  'M8 -112C14 -110 18 -102 19 -92C21 -78 30 -58 38 -44L36 -32C20 -30 0 -30 -16 -32C-18 -50 -18 -76 -16 -96C-14 -106 -8 -112 0 -114Z'
const CLOAK_FOLDS = gouge(-8, -98, -10, -38, 0.8, 0.6) + gouge(10, -92, 24, -42, 0.8, -0.6)
/** Pip's coat, worn "like a cloak, loose over my shoulders and fastened at the neck" (Chapter 50): to the waist. */
const COAT =
  'M8 -112C14 -110 17 -102 18 -92C19 -82 20 -68 21 -56L-16 -54C-17 -70 -17 -86 -15 -98C-13 -107 -7 -112 0 -114Z'
const COAT_FOLDS = gouge(-8, -100, -9, -60, 0.7, 0.5)
const COLLAR = 'M-2 -118C4 -124 14 -126 20 -120L22 -104C14 -100 4 -100 -4 -104Z'

/** Where each sits: Pip and Magwitch in the stern, Startop and Herbert at the oars; the galley's men beyond. */
const AT = {
  pip: 372,
  magwitch: 452,
  startop: 612,
  herbert: 732,
  officer: 494,
  sitter: 552,
  rowers: [636, 708, 780, 852],
}

/** A near-side oar from a rower's hands over the gunwale into the water, in panel units. */
function oar(hand: Pt, thole: Pt, blade: Pt): string {
  return `M${n(hand[0])} ${n(hand[1])}L${n(thole[0])} ${n(thole[1])}L${n(blade[0])} ${n(blade[1])}`
}

function EscapeDownTheRiver({ uid }: ArtProps) {
  const m = marks()
  const id = { sky: `${uid}-sky`, near: `${uid}-near`, far: `${uid}-far` }
  // Our rowers' hands, flipped to face the stern.
  const hand = (x: number): Pt => [x - 40 * NEAR, BOAT.floor - 72 * NEAR]
  const farHand = (x: number): Pt => [x - 40 * FAR, GALLEY.floor - 72 * FAR]
  return (
    <>
      <defs>
        <clipPath id={id.sky}>
          <rect x={0} y={0} width={W} height={HZ} />
        </clipPath>
        {/* Each boat's people show above her gunwale; her sides hide the rest. */}
        <clipPath id={id.near}>
          <rect x={0} y={0} width={W} height={BOAT.gun + 4} />
        </clipPath>
        <clipPath id={id.far}>
          <rect x={0} y={0} width={W} height={GALLEY.gun + 3} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 200], push: 1.03 })}>
        {/* the sky */}
        <rect x={0} y={0} width={W} height={HZ} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        {/* the river */}
        <path d={m.water} fill={PAPER} />
        <path d={m.shore} fill={INK} />
        <path d={m.reflect} fill={INK} />

        <Steamer />

        {/* the galley, beyond our boat: her people, her hull, her oars */}
        <g clipPath={`url(#${id.far})`}>
          {AT.rowers.map((x) => (
            <Person key={x} pose={rower('man')} at={[x, GALLEY.floor]} scale={FAR} flip />
          ))}
          <Person pose={SITTER} at={[AT.sitter, GALLEY.floor]} scale={FAR} flip>
            <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={1.6} />
            <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={1.4} />
            <path d={CLOAK_FOLDS} fill={PAPER} />
          </Person>
          <Person pose={OFFICER} at={[AT.officer, GALLEY.floor]} scale={FAR} flip>
            {/* the rudder lines in his hand */}
            <path d="M18 -62L-34 -38" fill="none" stroke={PAPER} strokeWidth={1.2} />
          </Person>
        </g>
        <path
          d={`M${GALLEY.x0} ${GALLEY.gun}L${W + 10} ${GALLEY.gun - 4}L${W + 10} ${GALLEY.water}L${GALLEY.x0 + 8} ${GALLEY.water}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <path
          d={
            gouge(GALLEY.x0 + 4, GALLEY.gun + 4, W, GALLEY.gun, 1.1) +
            gouge(GALLEY.x0 + 10, GALLEY.gun + 11, W, GALLEY.gun + 7, 0.8)
          }
          fill={PAPER}
        />
        <g fill="none" strokeLinecap="round">
          {AT.rowers.map((x) => {
            const d = oar(farHand(x), [x - 8, GALLEY.gun], [x + 26, GALLEY.water + 26])
            return (
              <g key={x}>
                <path d={d} stroke={PAPER} strokeWidth={4.4} />
                <path d={d} stroke={INK} strokeWidth={2.4} />
              </g>
            )
          })}
        </g>

        {/* our boat: her people, her hull, her oars */}
        <g clipPath={`url(#${id.near})`}>
          <Person pose={PIP} at={[AT.pip, BOAT.floor]} scale={NEAR}>
            <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={1.6} />
            <path d={COAT_FOLDS} fill={PAPER} />
            <path d="M3 -114L14 -88" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
          </Person>
          <Person pose={MAGWITCH} at={[AT.magwitch, BOAT.floor]} scale={NEAR}>
            <path d={CLOAK} fill={INK} stroke={PAPER} strokeWidth={1.6} />
            <path d={CLOAK_FOLDS} fill={PAPER} />
          </Person>
          <Person pose={rower('startop')} at={[AT.startop, BOAT.floor]} scale={NEAR} flip />
          <Person pose={rower('herbert')} at={[AT.herbert, BOAT.floor]} scale={NEAR} flip />
        </g>
        <path
          d={`M${BOAT.x0} ${BOAT.gun - 4}Q${(BOAT.x0 + BOAT.x1) / 2} ${BOAT.gun + 6} ${BOAT.x1} ${BOAT.gun - 12}Q${BOAT.x1 - 30} ${BOAT.water - 4} ${BOAT.x1 - 70} ${BOAT.water}L${BOAT.x0 + 10} ${BOAT.water}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <path
          d={`M${BOAT.x0 + 4} ${BOAT.gun + 1}Q${(BOAT.x0 + BOAT.x1) / 2} ${BOAT.gun + 10} ${BOAT.x1 - 8} ${BOAT.gun - 8}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        {/* the rudder, and the yoke line to Pip's hand */}
        <path
          d={`M${BOAT.x0 + 2} ${BOAT.gun - 6}L${BOAT.x0 - 8} ${BOAT.gun - 2}L${BOAT.x0 - 10} ${BOAT.water + 14}L${BOAT.x0 + 4} ${BOAT.water + 10}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d={`M${n(AT.pip + 32 * NEAR)} ${n(BOAT.floor - 64 * NEAR)}L${BOAT.x0 - 2} ${BOAT.gun - 6}`}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.3}
        />
        <g fill="none" strokeLinecap="round">
          {[AT.startop, AT.herbert].map((x) => {
            const d = oar(hand(x), [x - 14, BOAT.gun + 2], [x + 30, BOAT.water + 26])
            return (
              <g key={x}>
                <path d={d} stroke={PAPER} strokeWidth={6} />
                <path d={d} stroke={INK} strokeWidth={3.4} />
              </g>
            )
          })}
        </g>
      </g>
    </>
  )
}

export const escapeDownTheRiver: LinocutArt = { width: W, height: H, Draw: EscapeDownTheRiver }

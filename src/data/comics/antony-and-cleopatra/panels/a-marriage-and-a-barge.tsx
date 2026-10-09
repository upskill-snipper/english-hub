import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { lightField } from './light-cuts'
import { Person, reach, sizeOf, toFigure, type P, type Pose } from './people'

/**
 * Act 2, Scene 2: "A marriage, and a barge", the sixth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Rome. A Room in the House of Lepidus." So a plain Roman room with a
 *   painted dado round its foot, a high window, and at the back a wide
 *   doorway on to the lit rooms beyond. The play gives no hour.
 * - AGRIPPA: "take Antony Octavia to his wife". ANTONY: "Let me have thy
 *   hand." CAESAR: "There’s my hand. A sister I bequeath you". So in the
 *   middle Antony and Caesar clasp right hands, the Roman sign of a pact and
 *   of a marriage, framed in the bright doorway so the clasp is the first
 *   thing seen. Both wear the toga, as Romans in Rome (the kit, ./people.tsx:
 *   Antony curled, bearded, grizzled and the bigger man; Caesar young and
 *   beardless). Caesar's right hand is the arm on the far side of a man who
 *   faces right; Antony's is the near one of a man who faces left.
 * - LEPIDUS: "Happily, amen!" He is the host and the peacemaker ("Noble
 *   friends, That which combined us was most great"), so he stands on the
 *   left holding both hands out, low and open, towards the pact. Agrippa, who
 *   proposed the match, stands a step behind Caesar.
 * - LEPIDUS to Enobarbus, before the others came in: "Your speech is
 *   passion; But pray you stir no embers up." So beside Enobarbus stands a
 *   brazier whose fire burns low in the bowl: the quarrel the meeting has
 *   just damped down. The fire is the spot colour, a heap of coals with
 *   three low tongues of flame, far below every hand and face.
 * - ANTONY to Enobarbus: "Thou art a soldier only. Speak no more."
 *   ENOBARBUS: "Go to, then. Your considerate stone!" So Enobarbus, in his
 *   armour, stands apart on the right, silent, his hand at his beard,
 *   watching the pact he does not believe in.
 *
 * WHY THE BARGE IS NOT DRAWN. It is in Enobarbus's words, not in the room:
 * Cleopatra's meeting with Antony on the Cydnus happened years before, and a
 * panel shows only who is there (the Macbeth panel "Brave Macbeth" set this,
 * leaving Macbeth's battle to the captain's report). The guide's quotation
 * for the moment is his ("Age cannot wither her"); the panel's own is
 * Caesar's, spoken over the clasp it shows. Maecenas, who says little before
 * the barge, and Ventidius, who says nothing, are left out to keep the room
 * clear.
 *
 * Redrawn on 9 October 2026 from an unreviewed draft: the two men's open
 * hands reached for each other and did not meet, so the pact read as a
 * greeting, and the light fell on an empty doorway away from the people.
 *
 * Nothing is taken from a film or stage production. Seeds: 601 (wall), 602
 * (floor), 603 (the room beyond the door), 604 (dado).
 */

const W = 860
const H = 340
const WALL_FOOT = 252
/** The dado's top: the painted band round the foot of a Roman wall. */
const DADO = 206
/** The wide doorway at the back, on to the lit rooms beyond. */
const DOOR = { x0: 352, x1: 486, top: 82 }
/** The high window on the right. */
const WIN = { x: 752, y: 34, w: 62, h: 82 }
/** Where the two right hands meet, in front of the doorway. */
const CLASP: P = [419, 197]
/** The brazier: the middle of its bowl's rim, and where its feet stand. */
const BRAZIER = { x: 612, rim: 240, foot: 302 }
const FEET = 324
const SCALE = 1.15
const LEPIDUS_AT: P = [168, FEET]
const CAESAR_AT: P = [370, FEET]
const ANTONY_AT: P = [470, FEET]
const ENOBARBUS_AT: P = [724, FEET]
/** Agrippa, who proposed the match, stands a step behind Caesar. */
const AGRIPPA_AT: P = [276, 300]

type Marks = { wall: string; dado: string; floor: string; beyond: string; shade: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The wall takes the light of the doorway, brightest round it, and a little
  // from the window; the dado below is darker.
  const light = (x: number, y: number) => {
    const door = clamp(1 - Math.hypot((x - CLASP[0]) * 0.55, (y - 160) * 0.9) / 220) * 0.92
    const win =
      clamp(1 - Math.hypot(x - (WIN.x + WIN.w / 2), (y - WIN.y - WIN.h / 2) * 1.1) / 150) * 0.7
    return Math.max(door, win, 0.06)
  }
  const wall = lightField(601, { x0: 0, x1: W, y0: 4, y1: DADO - 4 }, light, {
    spacing: 6,
    len: [16, 64],
    gap: [6, 20],
    max: 3.6,
  })
  const dado = lightField(
    604,
    { x0: 0, x1: W, y0: DADO + 10, y1: WALL_FOOT - 2 },
    (x, y) => light(x, y) * 0.55,
    { spacing: 5.4, len: [10, 40], gap: [6, 18], max: 2.6 },
  )
  const floor = flagFloor(rng(602), W, H, WALL_FOOT, [CLASP[0], 110], 70, 5)
  // The room beyond the door: lit, its far wall scored lightly, and kept
  // bare in the middle where the clasp is seen against it.
  const r = rng(603)
  let beyond = ''
  for (let y = DOOR.top + 8; y < WALL_FOOT - 4; y += 6.4) {
    let x = DOOR.x0 + between(r, -10, 4)
    while (x < DOOR.x1) {
      const len = between(r, 8, 24)
      const mid = Math.abs(x + len / 2 - CLASP[0]) < 46 && y > 150 && y < 230
      if (!mid && r() < 0.45)
        beyond += gouge(x, y, Math.min(x + len, DOOR.x1), y + between(r, -0.4, 0.4), 0.5)
      x += len + between(r, 4, 12)
    }
  }
  const shade =
    footShadow(LEPIDUS_AT[0], FEET + 4, 32) +
    footShadow(AGRIPPA_AT[0] + 2, AGRIPPA_AT[1] + 3, 22) +
    footShadow(CAESAR_AT[0], FEET + 4, 34) +
    footShadow(ANTONY_AT[0], FEET + 4, 38) +
    footShadow(ENOBARBUS_AT[0], FEET + 4, 30) +
    footShadow(BRAZIER.x, BRAZIER.foot + 3, 30)
  cached = { wall, dado, floor, beyond, shade }
  return cached
}

/**
 * The brazier: a broad, shallow bronze dish on a tall tripod, its legs
 * splayed to small feet and braced by a ring, in ink with a paper edge; in the
 * dish the fire in the spot colour, cut as the pilot cuts a fire
 * (../../a-christmas-carol/panels/charity-collectors.tsx): a heap of coals
 * with a lumpy top, cracked between the coals in ink, and three low tongues
 * of flame growing out of it, one shape, so no part of the red stands alone
 * as a speck. Reviewed on 9 October 2026: the first cut was one smooth red
 * dome, which at phone width was the same shape as the red cushion of
 * Caesar's chair in "Enthroned in Alexandria"; a second, a heap of round
 * coals, read as a bowl of fruit.
 */
function Brazier() {
  const { x, rim, foot } = BRAZIER
  const dish = `M${x - 38} ${rim}H${x + 38}C${x + 34} ${rim + 8} ${x + 18} ${rim + 11} ${x} ${rim + 11}C${x - 18} ${rim + 11} ${x - 34} ${rim + 8} ${x - 38} ${rim}Z`
  const legs =
    `M${x - 12} ${rim + 9}C${x - 16} ${rim + 30} ${x - 26} ${foot - 20} ${x - 32} ${foot - 2}` +
    `M${x + 12} ${rim + 9}C${x + 16} ${rim + 30} ${x + 26} ${foot - 20} ${x + 32} ${foot - 2}` +
    `M${x} ${rim + 11}V${foot - 6}`
  const ring = `M${x - 20} ${rim + 34}Q${x} ${rim + 39} ${x + 20} ${rim + 34}`
  const feet = `M${x - 38} ${foot}H${x - 27}M${x + 27} ${foot}H${x + 38}M${x - 5} ${foot - 4}H${x + 5}`
  // the heap of coals, five lumps along its top
  const heap =
    `M${x - 33} ${rim}C${x - 33} ${rim - 7} ${x - 25} ${rim - 10} ${x - 20} ${rim - 7}` +
    `C${x - 17} ${rim - 13} ${x - 8} ${rim - 14} ${x - 5} ${rim - 10}` +
    `C${x - 2} ${rim - 15} ${x + 8} ${rim - 15} ${x + 10} ${rim - 10}` +
    `C${x + 14} ${rim - 13} ${x + 22} ${rim - 12} ${x + 23} ${rim - 7}` +
    `C${x + 28} ${rim - 9} ${x + 34} ${rim - 5} ${x + 33} ${rim}Z`
  // three low tongues of flame, their roots inside the heap
  const tongues = [
    `M${x - 17} ${rim - 8}C${x - 20} ${rim - 15} ${x - 15} ${rim - 21} ${x - 13} ${rim - 27}C${x - 9} ${rim - 20} ${x - 6} ${rim - 15} ${x - 9} ${rim - 8}Z`,
    `M${x - 1} ${rim - 9}C${x - 3} ${rim - 18} ${x + 2} ${rim - 26} ${x + 4} ${rim - 34}C${x + 9} ${rim - 25} ${x + 12} ${rim - 17} ${x + 9} ${rim - 9}Z`,
    `M${x + 14} ${rim - 8}C${x + 13} ${rim - 13} ${x + 17} ${rim - 18} ${x + 19} ${rim - 23}C${x + 22} ${rim - 17} ${x + 24} ${rim - 13} ${x + 21} ${rim - 7}Z`,
  ]
  const cracks =
    gouge(x - 20, rim - 7, x - 18, rim - 1, 0.9) +
    gouge(x - 5, rim - 10, x - 4, rim - 1, 0.9) +
    gouge(x + 10, rim - 10, x + 11, rim - 1, 0.9) +
    gouge(x + 23, rim - 7, x + 22, rim - 1, 0.9) +
    gouge(x - 28, rim - 3.4, x + 28, rim - 3.4, 0.7)
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d={legs + ring} fill="none" stroke={PAPER} strokeWidth={6} />
      <path d={legs + ring} fill="none" stroke={INK} strokeWidth={3.2} />
      <path d={feet} stroke={PAPER} strokeWidth={6} />
      <path d={feet} stroke={INK} strokeWidth={3.4} />
      <g fill={RED}>
        <path d={heap} />
        <path className="lc-flicker" style={timing({ dur: 0.85, delay: 0.3 })} d={tongues[0]} />
        <path className="lc-flicker" style={timing({ dur: 0.7, delay: 0.45 })} d={tongues[1]} />
        <path className="lc-flicker" style={timing({ dur: 0.8, delay: 0.2 })} d={tongues[2]} />
      </g>
      {/* the embers breathing: the cracks between the coals lift and settle */}
      <path className="lc-glow" d={cracks} fill={INK} />
      <path d={gouge(x + 4, rim - 27, x + 5, rim - 15, 1.1)} fill={PAPER} />
      <path d={dish} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(x - 32, rim + 3.4, x + 32, rim + 3.4, 0.9)} fill={PAPER} />
    </g>
  )
}

// ── The clasp ────────────────────────────────────────────────────────────────

/**
 * The clasp of the two right hands, as Roman coins show the joining of right
 * hands: seen from Antony's side, the back of his hand in front, and Caesar's
 * hand behind it, his thumb laid over the top of Antony's and his fingertips
 * curling round under it. Long and flat, its fingers and thumb cut apart in
 * paper, so it reads as two hands joined and never as a fist (a first cut, a
 * single round knot, read as a boxing glove). In its own frame, centred on
 * CLASP, at the figures' scale.
 */
const CAESAR_HAND =
  'M-17 -4.6L-6.4 -5.4C-3.4 -5.6 -1.2 -4.6 -0.2 -3L-0.2 4C-2.2 5.6 -6.4 5.8 -10.4 5.2L-17 4.6Z'
const CAESAR_FINGERS = 'M-0.6 3.4L10.6 3C12 4.2 11.8 7 10.2 7.8L0.6 8.2C-1 7.6 -1.4 4.8 -0.6 3.4Z'
const ANTONY_HAND =
  'M17 -5.2L4.4 -6C0.4 -6.2 -2.8 -5 -3.8 -2.6C-4.6 0 -4.2 2.8 -2.8 4.2L4.4 4.8L17 4.4Z'
const CAESAR_THUMB =
  'M-4.2 -4.6C-1.2 -7.8 3.8 -9 8 -7.8C9.6 -7.4 9.2 -5.6 7.6 -5.4C4 -5 0.4 -4 -2.2 -2.4Z'
/** The gaps between Caesar's fingertips, and the knuckles of Antony's hand, in paper. */
const CLASP_CUTS =
  gouge(3, 4.4, 2.8, 7.6, 0.55) +
  gouge(5.8, 4.2, 5.8, 7.6, 0.55) +
  gouge(8.4, 4, 8.6, 7.4, 0.55) +
  gouge(-2.6, -2.2, -2.8, 2.6, 0.45, 0.4)
/** How far from CLASP each wrist is, in the panel: inside the hand's own shape. */
const WRIST_OFF = 13

/**
 * An arm from `shoulder` (in the figure's frame) to its wrist inside the
 * clasp, for a figure at `at` with total scale `s`, turned with `flip`.
 */
function toClasp(shoulder: P, at: P, s: number, flip: boolean): P[] {
  const wrist: P = [CLASP[0] + (flip ? WRIST_OFF : -WRIST_OFF), CLASP[1] + 1]
  return reach(shoulder, toFigure(wrist, at, s, flip), 24, 1)
}

/** A point of a figure's frame, back in the panel. */
const toPanel = (p: P, at: P, s: number, flip: boolean): P => [
  at[0] + (flip ? -s : s) * p[0],
  at[1] + s * p[1],
]

const CAESAR_S = SCALE * sizeOf('caesar')
const ANTONY_S = SCALE * sizeOf('antony')
const CAESAR_ARM = toClasp([-4, -130], CAESAR_AT, CAESAR_S, false)
const ANTONY_ARM = toClasp([5, -128], ANTONY_AT, ANTONY_S, true)

/**
 * The last stretch of a forearm, in the panel, to ink again over the clasp's
 * paper edge so no line crosses the wrist: from 16 units back to the wrist.
 */
function forearmEnd(arm: P[], at: P, s: number, flip: boolean): string {
  const e = toPanel(arm[1], at, s, flip)
  const w = toPanel(arm[2], at, s, flip)
  const L = Math.hypot(w[0] - e[0], w[1] - e[1]) || 1
  const k = Math.min(16 / L, 1)
  return `M${n(w[0] + (e[0] - w[0]) * k)} ${n(w[1] + (e[1] - w[1]) * k)}L${n(w[0])} ${n(w[1])}`
}

function Clasp() {
  const t = `translate(${CLASP[0]} ${CLASP[1]}) scale(${SCALE})`
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      <path
        transform={t}
        d={CAESAR_HAND + CAESAR_FINGERS + ANTONY_HAND + CAESAR_THUMB}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={3.4}
      />
      {/* each forearm's last stretch, over the paper edge */}
      <path
        d={forearmEnd(CAESAR_ARM, CAESAR_AT, CAESAR_S, false)}
        stroke={INK}
        strokeWidth={n(8.6 * CAESAR_S)}
      />
      <path
        d={forearmEnd(ANTONY_ARM, ANTONY_AT, ANTONY_S, true)}
        stroke={INK}
        strokeWidth={n(9.2 * ANTONY_S)}
      />
      <g transform={t}>
        <path d={CAESAR_HAND + CAESAR_FINGERS} fill={INK} />
        <path d={ANTONY_HAND} fill={INK} stroke={PAPER} strokeWidth={1.1} />
        <path d={CAESAR_THUMB} fill={INK} stroke={PAPER} strokeWidth={1.1} />
        <path d={CLASP_CUTS} fill={PAPER} />
      </g>
    </g>
  )
}

// ── The people ───────────────────────────────────────────────────────────────

/**
 * Lepidus, the host: "Happily, amen!", both hands held out, low and open,
 * towards the pact, one above the other: in the first cut they were held out
 * side by side at one height, and at phone width the two ran together into
 * one clump of fingers (reviewed 9 October 2026).
 */
const LEPIDUS: Pose = {
  look: 'lepidus',
  head: { rot: 6 },
  far: {
    pts: [
      [-4, -130],
      [10, -114],
      [30, -124],
    ],
    hand: 'open',
    deg: -22,
  },
  near: {
    pts: [
      [5, -128],
      [12, -104],
      [34, -94],
    ],
    hand: 'open',
    deg: 6,
    thumb: -1,
  },
}

/** Caesar: "There's my hand." His right is his far arm. */
const CAESAR: Pose = {
  look: 'caesar',
  dress: 'toga',
  head: { rot: 2 },
  far: { pts: CAESAR_ARM, hand: 'none' },
}

/** Antony: "Let me have thy hand." His right is his near arm. */
const ANTONY: Pose = {
  look: 'antony',
  dress: 'toga',
  head: { rot: 4 },
  near: { pts: ANTONY_ARM, hand: 'none' },
}

/** Enobarbus, apart and silent, one arm across him and his hand at his beard. */
const ENOBARBUS: Pose = {
  look: 'enobarbus',
  head: { rot: 4 },
  far: {
    pts: [
      [-4, -130],
      [0, -106],
      [18, -110],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [5, -128],
      [20, -112],
      [16, -134],
    ],
    hand: 'mitt',
    deg: -76,
  },
}

function AMarriageAndABarge(_props: ArtProps) {
  const m = marks()
  const { x, y, w, h } = WIN
  return (
    <g className="lc-push" style={timing({ origin: [CLASP[0], 200], push: 1.03 })}>
      {/* the wall, lit from the doorway and the window, and the dado below */}
      <rect x={0} y={0} width={W} height={WALL_FOOT} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <rect x={0} y={DADO - 3} width={W} height={7} fill={PAPER} />
      <rect x={0} y={DADO + 6} width={W} height={1.8} fill={PAPER} />
      <path d={m.dado} fill={PAPER} />
      {/* the high window, its reveal, two bars and its sill */}
      <rect x={x - 7} y={y - 7} width={w + 14} height={h + 13} fill={INK} />
      <rect x={x} y={y} width={w} height={h} fill={PAPER} />
      <path
        d={`M${n(x + w / 3)} ${y}V${y + h}M${n(x + (2 * w) / 3)} ${y}V${y + h}`}
        stroke={INK}
        strokeWidth={4}
      />
      <rect x={x - 12} y={y + h + 6} width={w + 24} height={5} fill={PAPER} />
      {/* the wide doorway at the back, the rooms beyond it lit */}
      <path
        d={`M${DOOR.x0 - 12} ${WALL_FOOT}V${DOOR.top - 12}H${DOOR.x1 + 12}V${WALL_FOOT}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3}
      />
      <rect x={DOOR.x0 - 7} y={DOOR.top - 7} width={DOOR.x1 - DOOR.x0 + 14} height={7} fill={INK} />
      <rect
        x={DOOR.x0}
        y={DOOR.top}
        width={DOOR.x1 - DOOR.x0}
        height={WALL_FOOT - DOOR.top}
        fill={PAPER}
      />
      <path d={m.beyond} fill={INK} />
      <path d={wedge(DOOR.x0 + 2, DOOR.top + 2, DOOR.x0 + 2, WALL_FOOT, 5, 5)} fill={INK} />
      <path d={wedge(DOOR.x0, DOOR.top + 2, DOOR.x1, DOOR.top + 2, 4, 4)} fill={INK} />

      {/* the floor */}
      <rect x={0} y={WALL_FOOT} width={W} height={H - WALL_FOOT} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />

      <Brazier />

      <Person pose={{ look: 'agrippa', head: { rot: 4 } }} at={AGRIPPA_AT} scale={1.04} />
      <Person pose={LEPIDUS} at={LEPIDUS_AT} scale={SCALE} />
      <Person pose={CAESAR} at={CAESAR_AT} scale={SCALE} />
      <Person pose={ANTONY} at={ANTONY_AT} scale={SCALE} flip />
      <Clasp />
      <Person pose={ENOBARBUS} at={ENOBARBUS_AT} scale={SCALE} flip />
    </g>
  )
}

export const aMarriageAndABarge: LinocutArt = { width: W, height: H, Draw: AMarriageAndABarge }

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, HEAD, type Part } from './cut-figure'
import { Macbeth, MailPattern } from './dunsinane-kit'
import { Witch } from './witch'

/**
 * Act 4, Scene 1: "The apparitions", the sixteenth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/macbeth.ts), which is the text of the site's reader:
 *
 * - "A dark Cave. In the middle, a Cauldron Boiling." "Double, double,
 *   toil and trouble; / Fire, burn; and cauldron, bubble." So a rock cave, the
 *   cauldron in the middle over its fire, and its steam rising into the dark.
 * - "I conjure you, by that which you profess, / (Howe’er you come to know it)
 *   answer me." Macbeth, king now, stands at the left with his arm flung out
 *   at the cauldron, his other hand on his sword. He is the Macbeth of the
 *   Act 5 panels (./dunsinane-kit.tsx), turned to face right.
 * - "Thunder. An Apparition of an armed Head rises." A head in a nasal helmet
 *   and a mail
 *   hood, the mail falling away into the steam, so it reads as armour rising
 *   out of smoke and not as a head cut off.
 * - "Thunder. An Apparition of a bloody Child rises." A child's silhouette
 *   ringed in the
 *   spot colour. The blood is a symbol, as the style guide allows: the child
 *   is not hurt, and nothing on it is a wound. It foretells Macduff, "none of
 *   woman born".
 * - "Thunder. An Apparition of a Child crowned, with a tree in his hand,
 *   rises." A crowned
 *   child holding a young tree upright, for Birnam Wood.
 * - "A show of eight kings appear, and pass over in order, the last with a
 *   glass in his hand". "What, will the line stretch out to th’ crack of
 *   doom?" Eight crowned figures, cut as
 *   light rather than as bodies (as Banquo's ghost is cut at the banquet),
 *   stretch away into the dark on the right. The nearest is the eighth, and
 *   his glass "shows me many more": small crowns in the mirror. The ghost of
 *   Banquo who follows them is left out, to keep the panel legible on a
 *   phone; he has the banquet panel to himself.
 * - The witches are the three of The witches meet (./witch.tsx), drawn from
 *   Banquo's description in Act 1, Scene 3: "So wither’d, and so wild in their
 *   attire", "choppy finger", "skinny lips", "beards". Two lean over the
 *   cauldron with their arms up; the third lays her finger on her lips.
 *
 * The spot colour is what the scene burns with and what it foretells: the
 * fire under the cauldron, the ring round the bloody child, and Macbeth's
 * crown, the thing every apparition is about. The apparitions rise one after
 * another, as in the scene, and the kings follow them.
 *
 * Nothing is taken from a film or stage production. Seeds: 1601 (the cave),
 * 1602 (the floor), 1603 (the steam), 1604 (the firelight).
 */

const W = 860
const H = 340
/** The cauldron's centre, and the line of its rim. */
const CX = 336
const RIM = 216
const FLOOR = 262

type Marks = {
  cave: string
  floor: string
  steam: string
  curls: string
  steamOut: string
  fireRays: string
}

/** The steam as overlapping rounds, [cx, cy, r], climbing and widening. */
function steamLobes(): [number, number, number][] {
  const r = rng(1603)
  const lobes: [number, number, number][] = []
  for (let y = RIM - 6; y > -30; y -= 15) {
    const t = (RIM - y) / RIM
    const hw = 46 + t * 112
    const c = CX + 10 * Math.sin(y / 37) - t * 6
    const rad = 18 + t * 18
    lobes.push([c - hw + rad * 0.35, y + between(r, -4, 4), rad * between(r, 0.8, 1.1)])
    lobes.push([c + hw - rad * 0.35, y + between(r, -4, 4), rad * between(r, 0.8, 1.1)])
    for (let k = 1; k < 4; k++) {
      const x = c - hw + (2 * hw * k) / 4
      lobes.push([x + between(r, -6, 6), y + between(r, -5, 5), rad * 1.15])
    }
  }
  return lobes
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The cave is lit from below by the fire and above by the steam; its far
  // corners stay dark. Cut only where the steam does not cover it.
  const light = (x: number, y: number) => {
    const fire = clamp(1 - Math.hypot((x - CX) * 0.62, (y - 300) * 1.1) / 360)
    const steam = clamp(1 - Math.hypot((x - CX) * 0.8, (y - 120) * 0.9) / 300) * 0.8
    return Math.max(fire, steam, 0.04)
  }
  const r = rng(1601)
  const opts = {
    spacing: 7.6,
    len: [16, 64] as [number, number],
    gap: [5, 18] as [number, number],
  }
  const cave =
    gougeField(r, { x0: 0, x1: 196, y0: 6, y1: FLOOR }, light, opts) +
    gougeField(r, { x0: 482, x1: W, y0: 6, y1: FLOOR }, light, opts) +
    gougeField(r, { x0: 196, x1: 482, y0: 150, y1: FLOOR }, light, opts)
  const floorLight = (x: number, y: number) =>
    clamp(1 - Math.hypot((x - CX) * 0.5, (y - 300) * 1.8) / 330) * 0.9 + 0.06
  const floor = gougeField(rng(1602), { x0: 0, x1: W, y0: FLOOR + 6, y1: H }, floorLight, {
    spacing: 8.4,
    len: [28, 100],
    gap: [4, 16],
    max: 3.2,
  })

  const lobes = steamLobes()
  let steam = ''
  for (const [cx, cy, rad] of lobes)
    steam += `M${n(cx - rad)} ${n(cy)}a${n(rad)} ${n(rad)} 0 1 0 ${n(rad * 2)} 0a${n(rad)} ${n(rad)} 0 1 0 ${n(-rad * 2)} 0Z`
  // The column's core, so the rounds read as one cloud with no gaps.
  steam += `M${CX - 50} ${RIM}L${CX - 150} 20L${CX - 140} -20L${CX + 140} -20L${CX + 150} 20L${CX + 50} ${RIM}Z`

  // Curls: a few ink arcs under the outermost rounds, as the puffs of breath
  // are cut in the counting-house panel, kept to the edges and clear of the
  // apparitions.
  const rc = rng(1604)
  let curls = ''
  lobes.forEach(([cx, cy, rad], i) => {
    const side = cx < CX - 90 ? -1 : cx > CX + 90 ? 1 : 0
    if (!side || cy < 10 || cy > 190 || i % 3) return
    const a0 = side < 0 ? 95 : 25
    curls += arc(cx, cy, rad * 0.7, deg(a0), deg(a0 + 55))
  })
  let steamOut = ''
  const outRows: [number, number, number][] = [
    [CX - 260, CX - 160, 64],
    [CX - 250, CX - 170, 118],
    [CX + 160, CX + 260, 52],
    [CX + 150, CX + 230, 124],
    [CX - 210, CX - 130, 176],
    [CX + 120, CX + 190, 184],
  ]
  for (const [a, b, y] of outRows)
    steamOut += ribbon(
      wave(a, b, y, between(rc, 2, 4), between(rc, 40, 70), between(rc, 0, 6), 16),
      between(rc, 3, 5),
      0.8,
    )

  // Firelight thrown across the floor: spokes from the fire, below the rim only.
  let fireRays = ''
  for (let a = -8; a <= 188; a += 7.5) {
    const ang = deg(a + between(rc, -1.2, 1.2))
    let rad = between(rc, 50, 64)
    while (rad < 330) {
      const len = between(rc, 10, 26)
      const x1 = CX + Math.cos(ang) * rad * 1.6
      const y1 = 300 + Math.sin(ang) * rad * 0.34
      const x2 = CX + Math.cos(ang) * (rad + len) * 1.6
      const y2 = 300 + Math.sin(ang) * (rad + len) * 0.34
      if (y1 > FLOOR + 2) fireRays += gouge(x1, y1, x2, y2, clamp(2.6 - rad / 110, 0.5, 2.6))
      rad += len + between(rc, 6, 14) + rad * 0.12
    }
  }

  cached = { cave, floor, steam, curls, steamOut, fireRays }
  return cached
}

// ── The fire ────────────────────────────────────────────────────────────────

/** One tongue of flame, `h` tall and `w` wide at its foot on (x, y), leaning by `lean`. */
function flame(x: number, y: number, h: number, w: number, lean: number) {
  return `M${n(x - w / 2)} ${y}C${n(x - w * 0.62)} ${n(y - h * 0.42)} ${n(x - w * 0.12 + lean * 0.4)} ${n(y - h * 0.58)} ${n(x + lean * 0.7)} ${n(y - h * 0.84)}L${n(x + lean)} ${n(y - h)}C${n(x + w * 0.3 + lean * 0.6)} ${n(y - h * 0.66)} ${n(x + w * 0.66)} ${n(y - h * 0.4)} ${n(x + w / 2)} ${y}Z`
}
/** The flames under the pot, [dx, height, width, lean]: tallest at the sides, licking up. */
const FLAMES: [number, number, number, number][] = [
  [-72, 30, 13, -7],
  [-56, 38, 15, -4],
  [-38, 26, 13, -1],
  [-18, 22, 12, 1],
  [2, 24, 13, -1],
  [22, 22, 12, 2],
  [40, 26, 13, 1],
  [58, 38, 15, 4],
  [74, 30, 13, 7],
]

// ── The apparitions, facing left towards Macbeth ────────────────────────────

/**
 * An armed head, facing left, centred on (0, 0): a nasal helmet, the face
 * under it lit and cut in ink, and a mail hood round the cheek and throat.
 */
const HELM = 'M-18 -1C-19 -13 -13 -25 -3 -33L0 -38L3 -33C13 -25 19 -13 19 -1Z'
/** The lit face: brow, nose, lips and chin, back to the edge of the hood. */
const HELM_FACE =
  'M-16.5 0L-17.5 5L-24 13.5C-24.5 15 -23.5 15.8 -22 15.8L-19.5 16.2L-20.5 19L-19 20.2L-20 22.5L-18 24C-17.5 27.5 -14.5 29.5 -10 29.5L-5 29L-3 0Z'
/** The mail hood: over the back of the head, round the cheek and under the chin. */
const HELM_MAIL =
  'M-4 -1L19 -1C23 10 25 22 24 32C20 36 10 38 -2 37C-10 37 -15 35 -18 32L-10 29.5C-6 29 -4 26 -4 22C-4 14 -5 6 -4 -1Z'
const HELM_NASAL = 'M-18.6 -1.2L-15.4 -1.2L-19.4 12.6L-22.6 11.4Z'
/** Mail rings on the hood: rows of small cut arcs, staggered. */
function hoodRings(): string {
  let d = ''
  for (let row = 0; row < 7; row++) {
    const y = 3.5 + row * 4.6
    const x0 = row > 4 ? -12 + (6 - row) * 3 : -1
    for (let x = x0 + (row % 2) * 2.2; x < 21; x += 4.4) d += `M${n(x - 1.4)} ${n(y)}q1.4 1.8 2.8 0`
  }
  return d
}
const HOOD_RINGS = hoodRings()
/** Ink cuts in the lit face: the brow, the eye under it, the nostril, the mouth. */
const HELM_FACE_CUTS =
  gouge(-15.5, 3.6, -8.5, 3, 1) +
  gouge(-19.5, 15, -17, 13.8, 0.6) +
  gouge(-19.8, 20.3, -15.5, 20.8, 0.55) +
  gouge(-12, 12, -7, 22, 0.5, 0.8)

/** A small child standing, facing left: 64 tall, feet at (0, 0). */
const CHILD =
  'M-3 -63C-9.5 -63 -13 -58 -12.5 -52.5C-12 -48 -9 -45 -5 -44.5L-6 -42C-11 -40 -13 -34 -13.5 -26C-14 -16 -15 -8 -16 0L13 0C12 -9 11 -18 10 -27C9.5 -35 7 -40 2.5 -42L2 -44.5C6 -46 7.5 -50 7 -55C6.5 -60 2.5 -63 -3 -63Z'
const CHILD_ARM = 'M-7 -37C-12 -33 -18 -31 -24 -33'
const CHILD_CROWN =
  'M-11.5 -58.5L-12.5 -67L-8.5 -63L-5.5 -70.5L-2 -63.5L1.5 -70.5L4 -63L7.5 -67L7 -57.5C1 -60.5 -6 -60.5 -11.5 -58.5Z'
/** The young tree he holds upright at his side: a trunk and a bushy crown. */
const TREE_TRUNK = ribbon(
  [
    [-25, -2],
    [-25.5, -22],
    [-26.5, -42],
    [-27.5, -60],
  ],
  3.6,
  0.4,
  false,
)
const TREE_LEAVES = (
  [
    [-28, -90, 9],
    [-37, -81, 8.5],
    [-19, -81, 8.5],
    [-33, -70, 7.5],
    [-22, -70, 7.5],
    [-28, -78, 9],
    [-41, -71, 5.5],
    [-15, -71, 5.5],
  ] as [number, number, number][]
)
  .map(
    ([x, y, r]) =>
      `M${n(x - r)} ${n(y)}a${r} ${r} 0 1 0 ${n(r * 2)} 0a${r} ${r} 0 1 0 ${n(-r * 2)} 0Z`,
  )
  .join('')
/** Leaves cut in the crown, and the two boughs that carry it. */
const TREE_CUTS =
  gouge(-33, -88, -29, -80, 0.9, 0.4) +
  gouge(-24, -91, -21, -83, 0.9, -0.4) +
  gouge(-39, -79, -35, -73, 0.8) +
  gouge(-20, -78, -16, -72, 0.8) +
  gouge(-30, -73, -26, -67, 0.7) +
  gouge(-28, -62, -34, -74, 0.8, -0.4) +
  gouge(-27.5, -62, -21, -74, 0.8, 0.4)

// ── The show of kings: eight crowned figures cut as light ────────────────────

/** One king standing, facing left: about 110 tall, feet at (0, 0). */
const KING_ROBE =
  'M-14 -78C-20 -72 -22 -60 -22 -48C-22 -32 -24 -16 -27 0L25 0C22 -16 20 -34 20 -50C20 -62 18 -72 12 -78Z'
const KING_CROWN =
  'M-10.5 -99L-11.5 -109.5L-7 -104.5L-3.5 -113L0.5 -104.5L4.5 -113L7.5 -104.5L12 -109L11 -98.5C4 -101 -4 -101 -10.5 -99Z'
const KING_PARTS: Part[] = [
  { d: KING_ROBE },
  { d: HEAD, t: 'translate(0 -89) scale(-0.64 0.64)' },
  { d: KING_CROWN },
]
const KING_CUTS =
  gouge(-10, -64, -16, -8, 1.2, 0.5) + gouge(5, -66, 8, -8, 1.1, -0.3) + gouge(-6, -76, 6, -76, 0.9)
/** The eighth king's arm, holding up the glass. */
const GLASS_ARM: Part = { d: 'M-10 -70C-18 -74 -26 -80 -32 -88', w: 5 }
/** Where each king stands, [x, y of feet, scale]: from the eighth, nearest, back to the first. */
const KINGS: [number, number, number][] = [
  [620, 300, 1.06],
  [669, 285, 0.89],
  [710, 274, 0.76],
  [744, 265, 0.65],
  [773, 258, 0.56],
  [797, 252, 0.49],
  [817, 247, 0.43],
  [834, 243, 0.37],
]

function Apparitions({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        <MailPattern uid={uid} />
      </defs>
      <g className="lc-push" style={timing({ origin: [CX, 150], push: 1.03 })}>
        {/* the cave, lit from the fire below and the steam above */}
        <path d={m.cave} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />
        <path d={m.fireRays} fill={PAPER} />
        <path
          d={`M0 ${FLOOR + 3}C140 ${FLOOR - 2} 240 ${FLOOR + 2} ${CX} ${FLOOR}C460 ${FLOOR - 2} 600 ${FLOOR + 2} ${W} ${FLOOR}`}
          stroke={PAPER}
          strokeWidth={1.4}
          fill="none"
        />

        {/* the steam, with paper wisps curling off it into the dark */}
        <g className="lc-drift">
          <path d={m.steamOut} fill={PAPER} />
        </g>
        <path d={m.steam} fill={PAPER} />
        <path d={m.curls} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />

        {/* "an armed Head" */}
        <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 0.9 })}>
          <g transform="translate(274 70) scale(1.5)">
            <path d={HELM_MAIL} fill={INK} />
            <path d={HELM_FACE} fill={PAPER} stroke={INK} strokeWidth={1.6} />
            <path d={HELM_FACE_CUTS} fill={INK} />
            {/* the eye, open and staring */}
            <path d="M-15 8.2Q-12.2 5.6 -9.2 8.2Q-12.2 10.2 -15 8.2Z" fill={INK} />
            <circle cx={-12.6} cy={7.9} r={0.9} fill={PAPER} />
            <path d={HELM} fill={INK} />
            <path d={HOOD_RINGS} fill="none" stroke={PAPER} strokeWidth={0.7} />
            <path d="M-18 -1.2L19 -1.2" stroke={PAPER} strokeWidth={1.3} />
            <path d="M0.5 -35L0.5 -3" stroke={PAPER} strokeWidth={0.8} />
            <path d={HELM_NASAL} fill={INK} />
            <path d={gouge(-9, -26, -14, -6, 1.2, -0.8)} fill={PAPER} />
          </g>
          {/* the mail thinning into the steam */}
          <path
            d={
              ribbon(wave(236, 318, 124, 2, 40, 1, 14), 6, 0.8) +
              ribbon(wave(244, 312, 131, 2, 34, 3, 14), 4.4, 0.8)
            }
            fill={PAPER}
          />
        </g>

        {/* "a bloody Child" */}
        <g className="lc-fade-in" style={timing({ delay: 1.3, dur: 0.9 })}>
          <g transform="translate(434 132) scale(1.08)">
            <path d={CHILD} fill={RED} stroke={RED} strokeWidth={7} strokeLinejoin="round" />
            <path d={CHILD_ARM} fill="none" stroke={RED} strokeWidth={12} strokeLinecap="round" />
            <path d={CHILD} fill={INK} />
            <path d={CHILD_ARM} fill="none" stroke={INK} strokeWidth={5} strokeLinecap="round" />
            <path d={gouge(-10, -54.5, -6.5, -55, 0.8)} fill={PAPER} />
          </g>
          <path d={ribbon(wave(398, 474, 133, 1.5, 30, 2, 12), 5, 0.8)} fill={PAPER} />
        </g>

        {/* "a Child crowned, with a tree in his hand" */}
        <g className="lc-fade-in" style={timing({ delay: 2.1, dur: 0.9 })}>
          <g transform="translate(364 204) scale(1.06)">
            <path d={TREE_LEAVES} fill={INK} />
            <path d={TREE_TRUNK} fill={INK} />
            <path d={TREE_CUTS} fill={PAPER} />
            <path d={CHILD} fill={INK} />
            <path d={CHILD_CROWN} fill={INK} stroke={PAPER} strokeWidth={0.9} />
            <path
              d="M-6 -37C-12 -32 -18 -30 -24.5 -30"
              fill="none"
              stroke={INK}
              strokeWidth={5}
              strokeLinecap="round"
            />
            <path d={gouge(-10, -54.5, -6.5, -55, 0.8)} fill={PAPER} />
          </g>
        </g>

        {/* the cauldron on its legs, and the fire licking up round it */}
        <path
          d={`M${CX - 60} 282L${CX - 68} 308L${CX - 55} 308L${CX - 47} 285ZM${CX + 60} 282L${CX + 68} 308L${CX + 55} 308L${CX + 47} 285Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d={`M${CX - 84} ${RIM}C${CX - 88} ${RIM + 34} ${CX - 68} ${RIM + 66} ${CX - 34} ${RIM + 74}L${CX + 34} ${RIM + 74}C${CX + 68} ${RIM + 66} ${CX + 88} ${RIM + 34} ${CX + 84} ${RIM}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.6}
        />
        <path
          d={
            gouge(CX - 72, RIM + 14, CX - 60, RIM + 52, 1.4, 2.2) +
            gouge(CX + 70, RIM + 16, CX + 62, RIM + 50, 1, -1.6)
          }
          fill={PAPER}
        />
        <path
          d={`M${CX - 78} 314L${CX + 40} 303L${CX + 42} 310L${CX - 76} 321ZM${CX - 40} 304L${CX + 80} 312L${CX + 78} 319L${CX - 42} 311Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path
          d={gouge(CX - 64, 314.5, CX - 10, 309, 0.8) + gouge(CX + 10, 309, CX + 64, 315.5, 0.8)}
          fill={PAPER}
        />
        <g fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round">
          {FLAMES.map(([dx, h, w, lean], i) => (
            <path
              key={dx}
              className="lc-flicker"
              style={timing({ dur: 0.7 + (i % 3) * 0.1, delay: (i * 0.13) % 0.5 })}
              d={flame(CX + dx, 307, h, w, lean)}
            />
          ))}
        </g>
        <ellipse cx={CX} cy={RIM} rx={88} ry={9.5} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <ellipse cx={CX} cy={RIM - 0.5} rx={76} ry={5.6} fill={PAPER} />
        <g fill={INK}>
          <circle cx={CX - 42} cy={RIM - 1} r={2.4} />
          <circle cx={CX - 20} cy={RIM + 1} r={1.8} />
          <circle cx={CX + 8} cy={RIM - 1.5} r={2.8} />
          <circle cx={CX + 34} cy={RIM + 0.5} r={2} />
          <circle cx={CX + 56} cy={RIM - 1} r={1.4} />
        </g>

        {/* the witches: two over the cauldron, the third with her finger to her lips */}
        <g transform={`translate(${CX - 188} ${322 - 240 * 0.78}) scale(0.78)`}>
          <Witch pose="reach" />
        </g>
        <g transform={`translate(${CX + 168} ${324 - 240 * 0.78}) scale(-0.78 0.78)`}>
          <Witch pose="arms" />
        </g>
        <g transform={`translate(${CX + 244} ${300 - 240 * 0.6}) scale(-0.6 0.6)`}>
          <Witch pose="hush" />
        </g>

        {/* Macbeth, commanding them */}
        <g transform="translate(92 0) scale(-1 1)">
          <Macbeth uid={uid} at={[0, 322]} pose="fling" />
        </g>

        {/* the show of eight kings, stretching away into the dark */}
        <g className="lc-fade-in" style={timing({ delay: 2.7, dur: 1.1 })}>
          {KINGS.slice()
            .reverse()
            .map(([x, y, s], i) => (
              <CutFigure
                key={x}
                parts={i === 7 ? [...KING_PARTS, GLASS_ARM] : KING_PARTS}
                tone="paper"
                transform={`translate(${x} ${y}) scale(${s})`}
                cuts={KING_CUTS}
              >
                {i === 7 && (
                  <g>
                    <circle cx={-38} cy={-96} r={11} fill={PAPER} stroke={INK} strokeWidth={2.6} />
                    <path
                      d="M-45 -97L-43.5 -102L-41.5 -98L-39 -103L-37 -98L-34.5 -102L-33 -97ZM-44 -90L-42.8 -94L-41 -91L-39 -95L-37.2 -91L-35.6 -94L-34.4 -90Z"
                      fill={INK}
                    />
                  </g>
                )}
              </CutFigure>
            ))}
        </g>
      </g>
    </>
  )
}

export const theApparitions: LinocutArt = { width: W, height: H, Draw: Apparitions }

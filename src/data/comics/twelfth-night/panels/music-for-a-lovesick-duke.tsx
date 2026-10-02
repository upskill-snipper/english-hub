import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CutFigure, Person, gripHand, hand, seatedBody, seatedLegs } from './people'

/**
 * Act 1, Scene 1: "Music for a lovesick duke", the first moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "An Apartment in the Duke's Palace." "Enter Orsino, Duke of Illyria,
 *   Curio, and other Lords; Musicians attending." So two musicians play on
 *   the left, a lute and a viol (the play's own instrument: Sir Andrew "plays
 *   o' the viol-de-gamboys", 1.3), and the music is cut as rings of sound
 *   carried across the room to the Duke.
 * - "If music be the food of love, play on, / Give me excess of it". Orsino
 *   lies back on a daybed in the middle of the room, his eyes shut, lost in
 *   the music, one hand lifted towards the players, open, bidding them play
 *   on. (His cheek was first flushed in the spot colour, for a man in love
 *   with love. On his dark face the kit's flush sits just above his beard,
 *   where a mouth would be, and on a man lying back with his eyes shut red
 *   at the mouth reads as blood; so the review of 2 October 2026 took it off,
 *   and the red in this panel is the flowers'.)
 * - He is silhouetted against the one bright thing in the room, a tall window
 *   on a garden, because the scene ends with him going there: "Away before me
 *   to sweet beds of flowers, / Love-thoughts lie rich when canopied with
 *   bowers." So the window shows a bed of flowers, their blooms in the spot
 *   colour. "It came o'er my ear like the sweet sound /
 *   That breathes upon a bank of violets": the play gives the flowers no
 *   colour, and the print cannot show violet, so the violets are left to the
 *   words.
 * - "Enter Valentine." Valentine is back from Olivia, who would not see him,
 *   and stands in the lit doorway on the right to give his news; Curio, who
 *   asked "Will you go hunt, my lord?", waits by the head of the daybed.
 *
 * The play does not give the hour; Curio's offer of a hunt makes it day, so
 * the window is full of daylight and the room is lit by it. The people are
 * cut from ./people.tsx; Orsino lies back without his cloak (`noCloak`).
 * Nothing is taken from a film, television or stage production. Seeds: 1101
 * (the wall), 1102 (the floor), 1103 (the garden), 1104 (the window's
 * stonework).
 */

const W = 860
const H = 340
/** The window: its middle, its half-width, where the arch springs, and its sill. */
const WX = 480
const WR = 86
const SPRING = 104
const SILL = 238
/** The foot of the back wall, where the floor begins. */
const SKIRT = 266
/** The doorway on the right, where Valentine stands. */
const DOOR = { x0: 744, x1: 832, top: 64 }

const opening = `M${WX - WR} ${SILL}V${SPRING}A${WR} ${WR} 0 0 1 ${WX + WR} ${SPRING}V${SILL}Z`

type Marks = {
  wall: string
  floor: string
  sky: string
  trees: string
  treeCuts: string
  beds: string
  bedCuts: string
  blooms: string
  stones: string
  sound: string[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit by the window and, at the right, by the doorway; the
  // cuts in the wall follow that light.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - WX) * 0.75, y - 150) / 300) * 0.9,
      clamp(1 - Math.hypot(x - 788, (y - 160) * 0.8) / 150) * 0.7,
      0.06,
    )
  const wall = gougeField(rng(1101), { x0: 0, x1: W, y0: 6, y1: SKIRT - 2 }, light, {
    spacing: 6.4,
    len: [16, 64],
    gap: [6, 22],
    max: 3.4,
  })
  // The floor: flags of pale stone, their joints running back towards the
  // window, closing up with distance.
  const r = rng(1102)
  let floor = ''
  const V: Pt = [WX, 120]
  for (let xt = -600; xt < W + 600; xt += 44) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.4, 0.9))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + (H - SKIRT) * t0,
        xt + (xb - xt) * t1,
        SKIRT + (H - SKIRT) * t1,
        0.8 + t0 * 2.2,
        0.8 + t1 * 2.2,
      )
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  for (const t of [0.12, 0.3, 0.56, 0.9]) {
    const y = SKIRT + (H - SKIRT) * t
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 60, 150)
      floor += gouge(
        x,
        y + between(r, -0.5, 0.5),
        x + len,
        y + between(r, -0.5, 0.5),
        0.8 + t * 1.6,
      )
      x += len + between(r, 2, 10)
    }
  }
  for (let y = SKIRT + 1; y < SKIRT + 12; y += 3)
    floor += gouge(0, y, W, y, 2.2 - (y - SKIRT) * 0.16)

  // The garden through the window: a pale sky, a line of trees and a bed of
  // flowers.
  const g = rng(1103)
  const sky = gougeField(
    g,
    { x0: WX - WR, x1: WX + WR, y0: 24, y1: 190 },
    (_x, y) => clamp(0.34 - y / 900),
    { spacing: 9, len: [20, 70], gap: [20, 50], max: 1.6 },
  )
  let trees = `M${WX - WR} 222`
  for (let x = WX - WR; x <= WX + WR + 6; x += 7) {
    trees += `L${n(x)} ${n(210 - 6 * Math.abs(Math.sin(x / 13)) - between(g, 0, 5))}`
  }
  trees += `L${WX + WR + 6} 230L${WX - WR} 230Z`
  let treeCuts = ''
  for (let x = WX - WR + 6; x < WX + WR; x += between(g, 9, 15))
    treeCuts += gouge(x, 216 + between(g, -2, 2), x + 6, 212 + between(g, -2, 2), 0.7)
  // The bed: a border of flowers on their stems in front of the trees, their
  // blooms in the spot colour, edged with a low clipped hedge.
  let beds = `M${WX - WR} ${SILL}V231H${WX + WR}V${SILL}Z`
  let bedCuts = ''
  let blooms = ''
  for (let x = WX - WR + 3; x < WX + WR; x += between(g, 5, 7.5)) {
    const h = between(g, 10, 22)
    const lean = between(g, -2, 2)
    const top: Pt = [x + lean, 231 - h]
    beds += wedge(x, 232, top[0], top[1], 1.6, 0.8)
    // a leaf either side of the stem
    const ly = 231 - h * between(g, 0.3, 0.55)
    beds += wedge(x + lean * 0.4, ly, x + lean * 0.4 - 5, ly - 4, 2.2, 0.3)
    beds += wedge(x + lean * 0.5, ly + 3, x + lean * 0.5 + 5, ly - 1, 2.2, 0.3)
    const br = between(g, 2, 2.9)
    blooms += `M${n(top[0] - br)} ${n(top[1])}a${n(br)} ${n(br)} 0 1 0 ${n(2 * br)} 0a${n(br)} ${n(br)} 0 1 0 ${n(-2 * br)} 0Z`
  }
  for (let x = WX - WR + 4; x < WX + WR; x += between(g, 8, 14))
    bedCuts += gouge(x, 234.4, x + 6, 234.4, 0.5)
  // The stonework of the window's surround: its jambs and the ring of its arch.
  const s = rng(1104)
  let stones = ''
  for (let y = SILL - 22; y > SPRING; y -= between(s, 20, 28)) {
    stones += gouge(WX - WR - 14, y, WX - WR - 2, y, 0.8)
    stones += gouge(WX + WR + 2, y, WX + WR + 14, y, 0.8)
  }
  for (let a = 196; a < 345; a += 14) {
    const p = deg(a)
    stones += gouge(
      WX + Math.cos(p) * (WR + 1),
      SPRING + Math.sin(p) * (WR + 1),
      WX + Math.cos(p) * (WR + 13),
      SPRING + Math.sin(p) * (WR + 13),
      0.8,
    )
  }
  // The music: rings of sound from the lute and the viol, carried across the
  // room towards the Duke.
  const sound = [
    ...[44, 62, 80].map((rad) => arc(150, 246, rad, deg(-74), deg(-26))),
    ...[52, 70, 88].map((rad) => arc(288, 252, rad, deg(-66), deg(-22))),
  ]
  cached = {
    wall,
    floor,
    sky,
    trees,
    treeCuts,
    beds,
    bedCuts,
    blooms,
    stones,
    sound,
  }
  return cached
}

/**
 * A lute, in the player's frame: its round body on his lap, its neck running
 * back past his far shoulder, its pegbox bent back. Its rose and strings are
 * cut in paper.
 */
function Lute() {
  return (
    <g transform="translate(22 -66) rotate(24)">
      <path
        d="M-12 -3L-44 -2.6L-44 2.6L-12 3Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M-44 -3.4L-56 4L-53 8L-42 2.8Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <ellipse cx={2} cy={0} rx={17} ry={12.6} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <circle cx={-1} cy={0} r={4} fill="none" stroke={PAPER} strokeWidth={1.2} />
      <path d="M-4 0H2M-1 -3V3" stroke={PAPER} strokeWidth={0.7} />
      <path d="M11 -2.4L-43 -1.2M11 0L-43 0M11 2.4L-43 1.2" stroke={PAPER} strokeWidth={0.6} />
      <path d={gouge(9, -4.4, 9, 4.4, 1)} fill={PAPER} />
    </g>
  )
}

/**
 * A bass viol, in the player's frame, held upright between his knees, its
 * end on the floor and its neck rising past his shoulder; its sound-holes,
 * bridge and strings cut in paper, and the bow drawn across it.
 */
function Viol() {
  const body =
    'M-6 -28C-9 -26 -11 -22 -11 -16C-11 -10 -8 -8 -8 -4C-8 0 -13 4 -13 12C-13 22 -7 28 0 28C7 28 13 22 13 12C13 4 8 0 8 -4C8 -8 11 -10 11 -16C11 -22 9 -26 6 -28Z'
  return (
    <g>
      <g transform="translate(36 -36) rotate(-8)">
        <path
          d="M-2.4 -26L-2 -88L2.4 -88L2.4 -26Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M-2.6 -88C-3 -94 -1 -98 3 -98C7 -98 8 -94 6 -92C4 -90 2 -92 3 -93"
          fill="none"
          stroke={INK}
          strokeWidth={3.4}
          strokeLinecap="round"
        />
        <path d="M0 28L0 36" stroke={INK} strokeWidth={2.4} />
        <path d={body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d="M-1 10L-1 -86M1 10L1 -86" stroke={PAPER} strokeWidth={0.6} />
        <path
          d="M-6 6C-8 2 -8 -2 -6 -5M6 6C8 2 8 -2 6 -5"
          fill="none"
          stroke={PAPER}
          strokeWidth={1}
        />
        <path d={gouge(-5, 11, 5, 11, 1)} fill={PAPER} />
      </g>
      {/* the bow, drawn across the strings */}
      <path d="M8 -44L60 -50" stroke={PAPER} strokeWidth={4.2} strokeLinecap="round" />
      <path d="M8 -44L60 -50" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
    </g>
  )
}

function MusicForALovesickDuke({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <path d={opening} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 200], push: 1.03 })}>
        {/* the room: the wall in shadow, the floor of pale flags */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={SKIRT} width={W} height={H - SKIRT} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window on the garden */}
        <path
          d={`M${WX - WR - 16} ${SILL + 10}V${SPRING}A${WR + 16} ${WR + 16} 0 0 1 ${WX + WR + 16} ${SPRING}V${SILL + 10}Z`}
          fill={PAPER}
        />
        <path d={m.stones} fill={INK} />
        <path d={opening} fill={PAPER} />
        <g clipPath={`url(#${win})`}>
          <path d={m.sky} fill={INK} />
          <path d={m.trees} fill={INK} />
          <path d={m.treeCuts} fill={PAPER} />
          <path d={m.beds} fill={INK} />
          <path d={m.bedCuts} fill={PAPER} />
          <path d={m.blooms} fill={RED} />
        </g>
        {/* the mullion and the sill */}
        <path d={`M${WX - 3.4} ${SPRING - WR + 4}V${SILL}h6.8V${SPRING - WR + 4}Z`} fill={INK} />
        <path d={`M${WX - WR - 18} ${SILL}h${WR * 2 + 36}v8h${-(WR * 2 + 36)}Z`} fill={PAPER} />
        <path d={`M${WX - WR - 18} ${SILL + 8}h${WR * 2 + 36}v2.4h${-(WR * 2 + 36)}Z`} fill={INK} />

        {/* the doorway on the right, lit from the gallery beyond */}
        <path d={`M${DOOR.x0} ${SKIRT}V${DOOR.top}H${DOOR.x1}V${SKIRT}Z`} fill={PAPER} />
        <path
          d={`M${DOOR.x0 - 10} ${SKIRT}V${DOOR.top - 10}H${DOOR.x1 + 10}V${SKIRT}H${DOOR.x1 + 4}V${DOOR.top - 4}H${DOOR.x0 - 4}V${SKIRT}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the music, carried across the room */}
        {m.sound.map((d, i) => (
          <path
            key={d}
            className="lc-fade-in"
            style={timing({ delay: 0.5 + (i % 3) * 0.4, dur: 0.8 })}
            d={d}
            fill="none"
            stroke={PAPER}
            strokeWidth={2.2 - (i % 3) * 0.3}
            strokeLinecap="round"
            strokeDasharray={i % 2 ? '14 7' : '22 6'}
          />
        ))}

        {/* the lutenist on his stool */}
        <path
          d="M100 272h40v6h-40ZM104 278l-4 40M136 278l4 40"
          fill={INK}
          stroke={INK}
          strokeWidth={3.4}
        />
        <Person
          at={[118, 318]}
          pose={{
            look: 'musician',
            body: seatedBody(44),
            legs: seatedLegs(44, 30),
            head: { rot: 10 },
            far: {
              pts: [
                [-4, -110],
                [-18, -98],
                [-16, -86],
              ],
              hand: 'grip',
              deg: 60,
            },
            near: {
              pts: [
                [4, -110],
                [14, -84],
                [26, -72],
              ],
              hand: 'none',
            },
          }}
        >
          <Lute />
          <CutFigure parts={hand([26, -72], 40, { size: 13, spread: 18 })} />
        </Person>

        {/* the viol player on his stool */}
        <path
          d="M228 272h40v6h-40ZM232 278l-4 40M264 278l4 40"
          fill={INK}
          stroke={INK}
          strokeWidth={3.4}
        />
        <Person
          at={[246, 318]}
          pose={{
            look: 'musician',
            body: seatedBody(44),
            legs: {
              far: [
                [-2, -46],
                [26, -48],
                [22, -3],
              ],
              near: [
                [2, -46],
                [32, -47],
                [34, -3],
              ],
            },
            head: { rot: 14 },
            far: {
              pts: [
                [-4, -110],
                [12, -104],
                [28, -114],
              ],
              hand: 'grip',
              deg: -70,
            },
            near: {
              pts: [
                [4, -110],
                [20, -78],
                [56, -50],
              ],
              hand: 'none',
            },
          }}
        >
          <Viol />
          <path d={gripHand([56, -50], 172).d} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        </Person>

        {/* the daybed */}
        <path
          d="M402 272h10l-2 10l3 6l-4 12h-4l-4 -12l3 -6ZM552 272h10l-2 10l3 6l-4 12h-4l-4 -12l3 -6Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path d="M392 250H566V274H392Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(398, 262, 560, 262, 1.4) + gouge(400, 268, 558, 268, 0.8)} fill={PAPER} />

        {/* Orsino, lying back, lost in the music */}
        <Person
          at={[488, 300]}
          flip
          pose={{
            look: 'orsino',
            noCloak: true,
            body: { neck: [-46, -94], hip: [0, -52] },
            head: { at: [-42, -116], rot: -26 },
            eye: 'shut',
            legs: {
              far: [
                [-2, -52],
                [32, -62],
                [64, -54],
              ],
              near: [
                [2, -52],
                [38, -60],
                [74, -54],
              ],
            },
            far: {
              pts: [
                [-50, -90],
                [-34, -70],
                [-12, -66],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [-42, -88],
                [-18, -96],
                [0, -114],
              ],
              hand: 'open',
              deg: -58,
              size: 15,
              spread: 20,
            },
          }}
        />
        {/* the head of the daybed, its bolster behind his shoulders */}
        <path
          d="M548 274V218C548 206 556 198 566 198C576 198 582 206 580 214C578 222 570 222 568 216C566 212 570 208 573 210L572 274Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />

        {/* Curio, waiting by the head of the daybed */}
        <Person
          at={[636, 306]}
          flip
          pose={{
            look: 'curio',
            head: { rot: 4 },
            far: {
              pts: [
                [-4, -132],
                [-2, -106],
                [10, -96],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [6, -106],
                [14, -94],
              ],
              hand: 'mitt',
              deg: 160,
            },
          }}
        />

        {/* Valentine, back from Olivia's, in the doorway */}
        <Person
          at={[792, 304]}
          flip
          pose={{
            look: 'valentine',
            head: { rot: 10 },
            cloak: 4,
            far: {
              pts: [
                [-4, -132],
                [-8, -104],
                [-4, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [16, -108],
                [32, -104],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const musicForALovesickDuke: LinocutArt = {
  width: W,
  height: H,
  Draw: MusicForALovesickDuke,
}

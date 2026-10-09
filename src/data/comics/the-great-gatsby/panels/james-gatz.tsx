import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Chapter VI: "James Gatz", the seventh moment in the guide's timeline. The
 * guide sets it "during and after a party", and its line is the one Gatsby
 * cries to Nick in his garden when the party is over, so the panel is that
 * garden at that hour. Every detail is from the held text (the 1925 first
 * edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "I stayed late that night, Gatsby asked me to wait until he was free,
 *   and I lingered in the garden until the inevitable swimming party had run
 *   up, chilled and exalted, from the black beach, until the lights were
 *   extinguished in the guest-rooms overhead. When he came down the steps at
 *   last". So it is the small hours ("the soft black morning", earlier the
 *   same night), the house on the right, its tower at this end as in every
 *   panel of it, is dark, every window out, and its steps come down from a
 *   lit door ("only the bright door sent ten square
 *   feet of light volleying out into the soft black morning"), whose light
 *   is cut in rays down the steps.
 * - "He broke off and began to walk up and down a desolate path of fruit
 *   rinds and discarded favors and crushed flowers." So a pale path runs
 *   from the foot of the steps across the dark lawn, littered in ink with
 *   the halves of rinds, fallen paper hats, crushed flowers and twisted
 *   streamers.
 * - "'I wouldn't ask too much of her,' I ventured. 'You can't repeat the
 *   past.' 'Can't repeat the past?' he cried incredulously. 'Why of course
 *   you can!' He looked around him wildly, as if the past were lurking here
 *   in the shadow of his house, just out of reach of his hand." So Nick
 *   stands on the path at the left, turned to him, and Gatsby, in the middle,
 *   is turned away towards the dark house with one arm out and the hand open,
 *   reaching into its shadow, the other hand open at his side. Both hands
 *   have their fingers apart, and the reaching arm is bent and held low, not
 *   raised: a straight arm raised with a flat hand reads as a salute. (It
 *   was first cut out level at his chest, the forearm tipped up and the hand
 *   above it, which the alt text and this note called low; it was lowered to
 *   reach down into the shadow on 9 October 2026.)
 * - The party's lights: "enough colored lights to make a Christmas tree of
 *   Gatsby's enormous garden" (Chapter III), and this party had "the same
 *   many-colored, many-keyed commotion" (Chapter VI). So strings of bulbs
 *   hang in the black trees at the top left, most of them out, and four
 *   still burning in the spot colour, each in a ring of light: the end of
 *   the party. They hang high in the trees, away from every face and hand,
 *   and each is drawn large, with its ring, so at phone width it still reads
 *   as a lamp and not a speck.
 *
 * Gatsby's clothes that night are not described, so he is in the kit's dark
 * suit (./people.tsx), with its barbered hairline; Nick is in his dark suit.
 * Daisy and Tom have gone home, so they are not drawn. Gatsby's past (James
 * Gatz on Lake Superior, Dan Cody's yacht) is told in narration, not in this
 * scene, so it is left to the words. Nothing is taken from a film, television
 * or stage production. Seeds: 701 (the sky), 702 (the stars), 703 (the
 * trees), 704 (the lawn), 705 (the litter), 706 (the door's light), 707 (the
 * house front), 708 (the shrubs).
 */

const W = 860
const H = 340
/** Where the dark lawn meets the trees and the foot of the house. */
const GROUND = 238
/** The house: its left corner, its eaves, its foot. */
const HOUSE = { x0: 596, eaves: 108, ridge: 64, foot: 246 }
/**
 * The tower at the house's left end, as every panel of the house has it ("a
 * tower on one side", Chapter I): its sides, the top of its walls, its tip.
 */
const TOWER = { x0: 590, x1: 644, top: 70, tip: 22 }
/** The front door, lit, at the top of the steps. */
const DOOR = { x0: 714, x1: 758, top: 150, sill: 212 }
const NICK_AT: P = [222, 324]
const GATSBY_AT: P = [458, 304]

type Marks = {
  sky: string
  stars: string
  trees: string
  treeCuts: string
  lawn: string
  path: string
  pathEdge: string
  litter: string
  litterCurls: string
  doorRays: string
  wires: string
  bulbsOut: string
  bulbsLit: [number, number][]
  facade: string
  shrubs: string
}

/**
 * The garden's trees: each a trunk and a crown of overlapping rounds,
 * [x, crown top, crown radius, lean].
 */
const TREES: [number, number, number, number][] = [
  [56, 22, 60, -6],
  [158, 40, 52, 4],
  [338, 92, 40, 2],
]
/** A tree's crown as a list of rounds [cx, cy, r], fixed from its seed. */
function crownRounds([x, top, R, lean]: [number, number, number, number], r: () => number) {
  const cy = top + R
  const out: [number, number, number][] = [[x + lean, cy, R * 0.72]]
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * Math.PI * 2 + r() * 0.5
    const d = R * (0.42 + r() * 0.16)
    out.push([x + lean + Math.cos(a) * d, cy + Math.sin(a) * d * 0.9, R * (0.36 + r() * 0.14)])
  }
  return out
}
const circle = ([cx, cy, rr]: [number, number, number]) =>
  `M${n(cx - rr)} ${n(cy)}a${n(rr)} ${n(rr)} 0 1 0 ${n(2 * rr)} 0a${n(rr)} ${n(rr)} 0 1 0 ${n(-2 * rr)} 0Z`

/** The strings of colored lights: each a catenary from tree to tree, [x0, y0, x1, y1, sag]. */
const STRINGS: [number, number, number, number, number][] = [
  [10, 40, 184, 30, 24],
  [184, 30, 360, 66, 20],
  [40, 92, 160, 84, 12],
]
/**
 * Which bulbs along the strings still burn: the rest went out with the
 * party. None hangs near a head: at phone width a red speck beside a face
 * reads as blood.
 */
const LIT = new Set([1, 4, 9, 12])

/** A point on a string, t from 0 to 1. */
function along([x0, y0, x1, y1, sag]: [number, number, number, number, number], t: number): P {
  return [x0 + (x1 - x0) * t, y0 + (y1 - y0) * t + sag * 4 * t * (1 - t)]
}

/** The path from the foot of the steps, sweeping left across the foreground. */
function pathEdge(t: number, side: -1 | 1): P {
  const x = 760 - t * 820
  const y = 250 + Math.pow(t, 0.9) * 62
  const half = 18 + t * 26
  return [x, y + side * half * 0.55]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The soft black of the small hours: the sky left almost uncut, a little
  // lighter low down between the trees and the house.
  const sky = gougeField(
    rng(701),
    { x0: 0, x1: W, y0: 4, y1: GROUND },
    (_x, y) => clamp(0.06 + 0.46 * (y / GROUND) ** 2.2),
    { spacing: 5, len: [20, 70], gap: [6, 22], max: 1.9 },
  )
  const s = rng(702)
  let stars = ''
  for (let i = 0; i < 30; i++) {
    const x = between(s, 300, HOUSE.x0 - 10)
    const y = between(s, 10, 130)
    const r = between(s, 0.6, 1.4)
    stars += `M${n(x - r)} ${n(y)}a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0Z`
  }

  // The garden's trees, black, a few leaves at the edge of each crown caught
  // in the light of the door and the last lamps.
  const tr = rng(703)
  let trees = ''
  let treeCuts = ''
  for (const t of TREES) {
    const [x, top, R] = t
    const rounds = crownRounds(t, tr)
    trees += rounds.map(circle).join('')
    trees += `M${n(x - 6)} ${GROUND}L${n(x - 4)} ${n(top + R * 1.4)}L${n(x + 4)} ${n(top + R * 1.4)}L${n(x + 6)} ${GROUND}Z`
    for (const [cx, cy, rr] of rounds.slice(1))
      for (let k = 0; k < 4; k++) {
        const a = between(tr, -2.6, -0.2)
        const px = cx + Math.cos(a) * rr * between(tr, 0.55, 0.9)
        const py = cy + Math.sin(a) * rr * between(tr, 0.55, 0.9)
        treeCuts += gouge(px, py, px + between(tr, 3, 6), py + between(tr, -1, 1), 0.8)
      }
  }

  // A low line of shrubs along the far side of the lawn, so the garden has
  // an edge against the paler sky.
  const sh = rng(708)
  let shrubs = `M0 ${GROUND + 4}`
  for (let x = 0; x <= HOUSE.x0 + 6; x += 7)
    shrubs += `L${n(x)} ${n(GROUND - 12 - 4 * Math.abs(Math.sin(x / 13)) - between(sh, 0, 2))}`
  shrubs += `L${HOUSE.x0 + 6} ${GROUND + 4}Z`

  // The dark lawn, a few long cuts of light across it.
  const lawn = gougeField(
    rng(704),
    { x0: 0, x1: W, y0: GROUND + 2, y1: H },
    (x, y) =>
      clamp(
        0.04 +
          0.06 * ((y - GROUND) / (H - GROUND)) +
          0.26 * clamp(1 - Math.hypot(x - 730, y - 250) / 180),
      ),
    { spacing: 4.6, len: [14, 50], gap: [8, 24], max: 1.6 },
  )

  // "a desolate path of fruit rinds and discarded favors and crushed
  // flowers": the path pale under the light from the door, littered with
  // the party.
  const left: P[] = []
  const right: P[] = []
  for (let i = 0; i <= 30; i++) {
    left.push(pathEdge(i / 30, -1))
    right.push(pathEdge(i / 30, 1))
  }
  const path =
    'M' + [...left, ...right.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
  let pEdge = ''
  for (const side of [-1, 1] as const)
    pEdge +=
      'M' +
      Array.from({ length: 31 }, (_, i) => pathEdge(i / 30, side))
        .map(([x, y]) => `${n(x)} ${n(y)}`)
        .join('L')

  const l = rng(705)
  let litter = ''
  let litterCurls = ''
  const spot = (t: number): P => {
    const a = pathEdge(t, -1)
    const b = pathEdge(t, 1)
    const k = between(l, 0.15, 0.85)
    return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k]
  }
  const keepClear = (x: number) => Math.abs(x - GATSBY_AT[0]) < 26 || Math.abs(x - NICK_AT[0]) < 26
  for (let i = 0; i < 46; i++) {
    const t = between(l, 0.02, 0.98)
    const [x, y] = spot(t)
    if (keepClear(x)) continue
    const sz = 0.7 + t * 0.7
    const kind = i % 4
    if (kind === 0) {
      // a fruit rind: a hollow half, its open face to the sky
      litter += `M${n(x - 5 * sz)} ${n(y)}Q${n(x)} ${n(y + 6 * sz)} ${n(x + 5 * sz)} ${n(y)}Q${n(x)} ${n(y + 2.4 * sz)} ${n(x - 5 * sz)} ${n(y)}Z`
    } else if (kind === 1) {
      // a paper hat, fallen on its side
      litter += `M${n(x - 6 * sz)} ${n(y + 2 * sz)}L${n(x + 6 * sz)} ${n(y - 1 * sz)}L${n(x + 5 * sz)} ${n(y + 3.6 * sz)}Z`
    } else if (kind === 2) {
      // a crushed flower: a few petals round a heart
      for (let k = 0; k < 5; k++) {
        const a = (k / 5) * Math.PI * 2 + between(l, -0.3, 0.3)
        litter += gouge(x, y, x + Math.cos(a) * 4.4 * sz, y + Math.sin(a) * 2.2 * sz, 1.1 * sz)
      }
    } else {
      // a streamer, twisted
      litterCurls +=
        'M' +
        wave(x - 9 * sz, x + 9 * sz, y, 1.6 * sz, 6 * sz, between(l, 0, 6), 8)
          .map(([a, b]) => `${n(a)} ${n(b)}`)
          .join('L')
    }
  }

  // The bright door, its light cut in rays down the steps.
  const doorRays = rays(rng(706), (DOOR.x0 + DOOR.x1) / 2, DOOR.sill - 10, {
    from: 34,
    to: 120,
    every: 7,
    width: 2.4,
  })

  // The strings of colored lights in the trees.
  let wires = ''
  let bulbsOut = ''
  const bulbsLit: [number, number][] = []
  let k = 0
  for (const st of STRINGS) {
    wires +=
      'M' +
      Array.from({ length: 21 }, (_, i) => along(st, i / 20))
        .map(([x, y]) => `${n(x)} ${n(y)}`)
        .join('L')
    for (let i = 1; i < 8; i++, k++) {
      const [x, y] = along(st, i / 8)
      if (LIT.has(k)) bulbsLit.push([x, y + 5])
      else bulbsOut += `M${n(x - 2.6)} ${n(y + 5)}a2.6 3.2 0 1 0 5.2 0a2.6 3.2 0 1 0 -5.2 0Z`
    }
  }

  // The house's face in the dark: stone courses barely cut.
  const facade = gougeField(
    rng(707),
    { x0: HOUSE.x0, x1: W, y0: HOUSE.eaves, y1: HOUSE.foot },
    (x, y) => clamp(0.08 + 0.5 * clamp(1 - Math.hypot((x - 736) * 0.8, y - 200) / 150)),
    { spacing: 6, len: [16, 50], gap: [8, 20], max: 1.4 },
  )

  cached = {
    sky,
    stars,
    trees,
    treeCuts,
    lawn,
    path,
    pathEdge: pEdge,
    litter,
    litterCurls,
    doorRays,
    wires,
    bulbsOut,
    bulbsLit,
    facade,
    shrubs,
  }
  return cached
}

function JamesGatz({ uid }: ArtProps) {
  const m = marks()
  const door = `${uid}-door`
  return (
    <>
      <defs>
        <clipPath id={door}>
          <path
            d={`M${HOUSE.x0 - 60} ${HOUSE.foot + 30}L${DOOR.x0 - 4} ${DOOR.top}H${DOOR.x1 + 4}L${W + 60} ${HOUSE.foot + 30}Z`}
          />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
        {/* the night sky between the trees and the house */}
        <path d={m.sky} fill={PAPER} />
        <path d={m.stars} fill={PAPER} />
        {/* the dark lawn, and the shrubs along its far side */}
        <path d={m.lawn} fill={PAPER} />
        <path d={m.shrubs} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        {/* the trees, and the strings of colored lights hung in them */}
        <path d={m.trees} fill={PAPER} stroke={PAPER} strokeWidth={LINE.carve * 2} />
        <path d={m.trees} fill={INK} />
        <path d={m.treeCuts} fill={PAPER} />
        <path d={m.wires} fill="none" stroke={PAPER} strokeWidth={0.9} />
        <path d={m.bulbsOut} fill={INK} stroke={PAPER} strokeWidth={1} />
        {m.bulbsLit.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <circle
              cx={n(x)}
              cy={n(y + 1)}
              r={11}
              fill="none"
              stroke={PAPER}
              strokeWidth={1.4}
              strokeDasharray="3.4 3"
            />
            <ellipse
              className="lc-glow"
              style={timing({ delay: 0.4 })}
              cx={n(x)}
              cy={n(y + 1)}
              rx={6}
              ry={7.2}
              fill={RED}
              stroke={PAPER}
              strokeWidth={1.3}
            />
          </g>
        ))}

        {/* the house, dark: every light out but the door's */}
        <rect
          x={HOUSE.x0}
          y={HOUSE.eaves}
          width={W - HOUSE.x0}
          height={HOUSE.foot - HOUSE.eaves}
          fill={INK}
        />
        <path d={m.facade} fill={PAPER} />
        <path
          d={`M${HOUSE.x0 - 8} ${HOUSE.eaves + 2}L${HOUSE.x0 + 30} ${HOUSE.ridge}H${W + 8}V${HOUSE.eaves + 2}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {[700, 800].map((x) => (
          <path
            key={x}
            d={`M${x - 12} ${HOUSE.eaves - 2}V${HOUSE.eaves - 22}L${x} ${HOUSE.eaves - 33}L${x + 12} ${HOUSE.eaves - 22}V${HOUSE.eaves - 2}Z`}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
        ))}
        {/* the tower at this end of the house, its windows dark too */}
        <rect
          x={TOWER.x0}
          y={TOWER.top}
          width={TOWER.x1 - TOWER.x0}
          height={HOUSE.foot - TOWER.top}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${TOWER.x0 - 6} ${TOWER.top}L${(TOWER.x0 + TOWER.x1) / 2} ${TOWER.tip}L${TOWER.x1 + 6} ${TOWER.top}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g fill="none" stroke={PAPER} strokeWidth={1.3}>
          {[664, 806, 838].map((x) =>
            [118, 170].map((y) => <rect key={`${x}-${y}`} x={x} y={y} width={20} height={40} />),
          )}
          {[96, 150].map((y) => (
            <rect key={`t${y}`} x={(TOWER.x0 + TOWER.x1) / 2 - 7} y={y} width={14} height={32} />
          ))}
        </g>
        {/* the bright door, and its light down the steps */}
        <g clipPath={`url(#${door})`}>
          <path d={m.doorRays} fill={PAPER} />
        </g>
        <rect
          x={DOOR.x0}
          y={DOOR.top}
          width={DOOR.x1 - DOOR.x0}
          height={DOOR.sill - DOOR.top}
          fill={PAPER}
        />
        <path
          d={`M${DOOR.x0 - 6} ${DOOR.top - 6}H${DOOR.x1 + 6}V${DOOR.sill}`}
          fill="none"
          stroke={INK}
          strokeWidth={2}
        />
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={DOOR.x0 - 10 - i * 9}
            y={DOOR.sill + i * 9}
            width={DOOR.x1 - DOOR.x0 + 20 + i * 18}
            height={9}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
          />
        ))}

        {/* the littered path */}
        <path d={m.path} fill={PAPER} />
        <path d={m.pathEdge} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.litter} fill={INK} />
        <path d={m.litterCurls} fill="none" stroke={INK} strokeWidth={1.1} />

        {/* Nick, who has said "You can't repeat the past" */}
        <Person at={NICK_AT} scale={1.04} pose={{ look: 'nick' }} />
        {/* Gatsby, reaching into the shadow of his house */}
        <Person
          at={GATSBY_AT}
          pose={{
            look: 'gatsby',
            head: { rot: -4 },
            near: {
              pts: [
                [4, -132],
                [24, -114],
                [46, -104],
              ],
              hand: 'open',
              deg: 14,
              spread: 20,
            },
            far: {
              pts: [
                [-4, -132],
                [-14, -108],
                [-18, -84],
              ],
              hand: 'open',
              deg: 112,
              spread: 18,
            },
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-16, -3],
              ],
              near: [
                [3, -70],
                [12, -37],
                [16, -3],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const jamesGatz: LinocutArt = { width: W, height: H, Draw: JamesGatz }

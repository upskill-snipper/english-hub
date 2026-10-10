import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'

/**
 * Chapter 43 (Volume III, Chapter 1): "Pemberley", the ninth moment in the
 * guide's timeline. Drawn at the moment Darcy appears. Every detail is from
 * the held text (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "It was a large, handsome, stone building, standing well on rising
 *   ground, and backed by a ridge of high woody hills". So the house is a long
 *   stone front, in paper, with rows of tall windows and a pediment over the
 *   door, on a rise, with a dark wooded ridge behind it. Its plan is not
 *   described, so it is a plain great house of the period.
 * - "As they walked across the lawn towards the river, Elizabeth turned back
 *   to look again; her uncle and aunt stopped also, and while the former was
 *   conjecturing as to the date of the building, the owner of it himself
 *   suddenly came forward from the road, which led behind it to the stables."
 *   So the three of them stand on the lawn turned back towards the house, Mr
 *   Gardiner with his head up to study it, and Darcy has come round the end of
 *   the house by the road, whose edges are cut running back behind it.
 * - "Their eyes instantly met, and the cheeks of each were overspread with
 *   the deepest blush. He absolutely started, and for a moment seemed
 *   immoveable from surprise". So Elizabeth faces him and he has stopped
 *   short, upright, his brow raised, and the spot colour is the two blushes
 *   and nothing else: one patch on each cheek, the kit's (./people.tsx), clear
 *   of the mouth.
 * - "it was plain that he was that moment arrived, that moment alighted from
 *   his horse or his carriage": so he is in his hat and riding boots. The
 *   party has come out of the house, so the women wear their bonnets.
 * - The Gardiners and Darcy are the kit's: the Gardiners drawn plainly, as
 *   the text gives nothing of their looks.
 *
 * Who is not drawn: Mrs Reynolds, the housekeeper of the guide's summary, had
 * already been left at the house ("taking leave of the housekeeper"); the
 * gardener who was walking with them is left out, to keep the meeting clear.
 * The river they were walking towards is behind the viewer.
 *
 * Seed: 901, for everything.
 */

const W = 860
const H = 340
/** The house: its front, its roofline and the foot of its terrace. */
const HOUSE = { x0: 470, x1: 846, top: 118, eaves: 132, foot: 214 }
/** The crest of the ridge of wooded hills behind it. */
const RIDGE = 70

type Marks = {
  sky: string
  ridge: string
  ridgeCuts: string
  stone: string
  lawn: string
  road: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(901)
  // A bright summer day: paper, a few long cuts of ink high in the sky.
  let sky = ''
  for (let y = 10; y < 60; y += 7) {
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 30, 90)
      if (r() < 0.3) sky += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.5 + (60 - y) * 0.018)
      x += len + between(r, 24, 70)
    }
  }
  // "backed by a ridge of high woody hills": a long dark crest of rounded
  // treetops behind the house, lit along the top.
  const crest = (x: number) =>
    RIDGE + 16 * Math.sin(x / 140 + 1) + 7 * Math.sin(x / 37) + 4 * Math.sin(x / 13)
  let ridge = `M-10 ${HOUSE.foot}L-10 ${n(crest(0))}`
  for (let x = 0; x <= W + 10; x += 9) {
    const y = crest(x)
    ridge += `Q${n(x + 4.5)} ${n(y - between(r, 4, 9))} ${n(x + 9)} ${n(crest(x + 9))}`
  }
  ridge += `L${W + 10} ${HOUSE.foot}Z`
  let ridgeCuts = ''
  for (let i = 0; i < 160; i++) {
    const x = between(r, 0, W)
    const y = crest(x) + between(r, 6, 60)
    const lit = clamp(1 - (y - crest(x)) / 60)
    if (r() > 0.25 + lit * 0.7) continue
    ridgeCuts += gouge(x, y, x + between(r, 4, 9), y - between(r, 1, 3), 0.6 + lit * 0.7)
  }
  // The house's stone, in sunlight: fine coursing cut in ink.
  let stone = ''
  for (let y = HOUSE.eaves + 8; y < HOUSE.foot - 4; y += 8)
    stone += `M${HOUSE.x0 + 2} ${y}H${HOUSE.x1 - 2}`
  // The lawn: tufts of grass cut as short upright strokes, thinning into the distance.
  let lawn = ''
  for (let y = HOUSE.foot + 10; y < H; y += 8) {
    const depth = (y - HOUSE.foot) / (H - HOUSE.foot)
    for (let x = between(r, 0, 12); x < W; x += between(r, 14, 30) * (1.4 - depth * 0.6)) {
      const h = 2.4 + depth * 5
      lawn += gouge(x, y, x + between(r, -1.4, 1.4), y - h, 0.5 + depth * 0.5)
    }
  }
  // The road "which led behind it to the stables", coming round the end of
  // the house and down across the lawn to where Darcy stands.
  // Only its two edges are cut, widening as it comes forward; it is the
  // same paper as the lawn.
  const road =
    ribbon(
      [
        [HOUSE.x0 + 6, HOUSE.foot + 2],
        [HOUSE.x0 - 4, 244],
        [HOUSE.x0 - 30, 290],
        [HOUSE.x0 - 62, 340],
      ],
      2.6,
      0.6,
      false,
    ).replace(/Z$/, '') +
    'Z' +
    ribbon(
      [
        [HOUSE.x0 + 34, HOUSE.foot + 2],
        [HOUSE.x0 + 30, 250],
        [HOUSE.x0 + 16, 296],
        [HOUSE.x0 + 4, 340],
      ],
      2.6,
      0.6,
      false,
    )
  cached = { sky, ridge, ridgeCuts, stone, lawn, road }
  return cached
}

/**
 * Pemberley House: "a large, handsome, stone building, standing well on
 * rising ground". A long front of three storeys, a pediment over the middle
 * on four columns, rows of tall windows, all in the paper of sunlit stone.
 */
function House() {
  const m = marks()
  const { x0, x1, top, eaves, foot } = HOUSE
  const mid = (x0 + x1) / 2
  const cols = 15
  const step = (x1 - x0 - 30) / (cols - 1)
  const rows: [number, number][] = [
    [eaves + 12, 20],
    [eaves + 42, 22],
    [eaves + 70, 12],
  ]
  return (
    <g>
      {/* the roof behind the parapet, and its chimneys */}
      <path
        d={`M${x0 + 10} ${eaves}L${x0 + 30} ${top}H${x1 - 30}L${x1 - 10} ${eaves}Z`}
        fill={INK}
      />
      <path
        d={`M${x0 + 60} ${top}v-12h10v12M${x0 + 150} ${top}v-14h10v14M${x1 - 160} ${top}v-14h10v14M${x1 - 70} ${top}v-12h10v12`}
        fill={INK}
      />
      {/* the front, in paper */}
      <rect x={x0} y={eaves} width={x1 - x0} height={foot - eaves} fill={PAPER} />
      <path d={m.stone} stroke={INK} strokeWidth={0.7} />
      <rect
        x={x0}
        y={eaves}
        width={x1 - x0}
        height={foot - eaves}
        fill="none"
        stroke={INK}
        strokeWidth={2}
      />
      <rect x={x0 - 4} y={eaves - 4} width={x1 - x0 + 8} height={5} fill={INK} />
      {/* rows of windows, the middle three bays left to the portico */}
      {rows.map(([y, hh]) =>
        Array.from({ length: cols }, (_, i) => {
          const x = x0 + 15 + i * step - 5
          if (Math.abs(x + 5 - mid) < step * 1.6 && y > eaves + 30) return null
          return (
            <g key={`${i}-${y}`}>
              <rect x={x} y={y} width={10} height={hh} fill={INK} />
              <rect x={x - 1.5} y={y + hh} width={13} height={2} fill={INK} />
            </g>
          )
        }),
      )}
      {/* the portico: a pediment on four columns, and the door between them */}
      <path
        d={`M${mid - 42} ${eaves + 2}L${mid} ${eaves - 22}L${mid + 42} ${eaves + 2}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path
        d={`M${mid - 30} ${eaves - 2}L${mid} ${eaves - 16}L${mid + 30} ${eaves - 2}Z`}
        fill="none"
        stroke={INK}
        strokeWidth={1}
      />
      <rect x={mid - 30} y={eaves + 30} width={60} height={foot - eaves - 30} fill={INK} />
      {[-26, -10, 6, 22].map((dx) => (
        <rect
          key={dx}
          x={mid + dx}
          y={eaves + 30}
          width={5}
          height={foot - eaves - 30}
          fill={PAPER}
        />
      ))}
      <rect
        x={mid - 34}
        y={eaves + 26}
        width={68}
        height={5}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      {/* the terrace and its steps */}
      <rect x={x0 - 8} y={foot - 2} width={x1 - x0 + 16} height={6} fill={INK} />
      <path
        d={`M${mid - 40} ${foot + 4}h80l6 6h-92Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
    </g>
  )
}

/**
 * Mr Gardiner, "conjecturing as to the date of the building": his head up
 * to look at it. (He was first drawn pointing at it, and from where we stand
 * the point ran on to Darcy, as if he were pointing him out.)
 */
const MR_GARDINER: Pose = {
  look: 'mrGardiner',
  hat: true,
  legwear: 'boots',
  head: { rot: -12 },
  near: {
    pts: [
      [5, -132],
      [10, -106],
      [12, -84],
    ],
    hand: 'mitt',
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

/** Mrs Gardiner, stopped beside him, looking up at the house. */
const MRS_GARDINER: Pose = {
  look: 'mrsGardiner',
  hat: true,
  head: { rot: -6 },
}

/**
 * Elizabeth, turned back to look again at the house, meeting his eyes: "the
 * cheeks of each were overspread with the deepest blush".
 */
const ELIZABETH: Pose = {
  look: 'elizabeth',
  hat: true,
  flush: true,
  brow: 'arch',
  near: {
    pts: [
      [3, -126],
      [8, -104],
      [12, -86],
    ],
    hand: 'mitt',
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

/** Darcy, come suddenly round from the road to the stables: he "absolutely started", and blushes too. */
const DARCY: Pose = {
  look: 'darcy',
  hat: true,
  flush: true,
  brow: 'arch',
  legwear: 'boots',
  body: { neck: [-3, -138], hip: [0, -72] },
  head: { at: [0, -160], rot: -4 },
  near: {
    pts: [
      [2, -132],
      [9, -106],
      [17, -86],
    ],
    hand: 'open',
    deg: 64,
    spread: 16,
  },
  far: {
    pts: [
      [-6, -132],
      [-12, -106],
      [-14, -84],
    ],
    hand: 'mitt',
  },
}

function Pemberley({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [400, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.ridge} fill={INK} />
      <path d={m.ridgeCuts} fill={PAPER} />
      {/* the rising ground the house stands on */}
      <path
        d={`M-10 ${HOUSE.foot + 6}C200 200 380 206 ${HOUSE.x0 - 10} ${HOUSE.foot}H${W + 10}V${H}H-10Z`}
        fill={PAPER}
      />
      <path
        d={`M-10 ${HOUSE.foot + 6}C200 200 380 206 ${HOUSE.x0 - 10} ${HOUSE.foot}`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <House />
      <path d={m.lawn} fill={INK} />
      <path d={m.road} fill={INK} />

      {/* the party on the lawn, turned back towards the house */}
      <Person pose={MRS_GARDINER} at={[86, 314]} scale={1.28} />
      <Person pose={MR_GARDINER} at={[176, 318]} scale={1.3} />
      <Person pose={ELIZABETH} at={[292, 328]} scale={1.42} />
      {/* and the owner of it himself */}
      <Person pose={DARCY} at={[446, 300]} scale={1.16} flip />
    </g>
  )
}

export const pemberleyArt: LinocutArt = { width: W, height: H, Draw: Pemberley }

export const pemberley: ComicPanel = {
  moment: 'Pemberley',
  art: pemberleyArt,
  alt: 'A linocut print of the lawn at Pemberley on a bright summer day. Pemberley House, a long stone house with rows of tall windows and a pediment on columns over its door, stands on rising ground against a dark ridge of wooded hills. On the left, Mrs Gardiner in a bonnet and dark gown and Mr Gardiner in a tall hat stand looking up at the house. In front of them Elizabeth, in a bonnet and pale gown, faces Mr Darcy, who has come round from the road behind the house and stopped short, upright in his tall hat and riding boots. Their eyes meet, and a blush of red marks the cheek of each.',
  quote: 'Their eyes instantly met, and the cheeks of each were overspread with the deepest blush.',
  quoteAt: 'top-right',
}

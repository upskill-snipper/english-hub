import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  EppieHead,
  Figure,
  HEAD_EPPIE_CHILD,
  HEAD_SILAS,
  HOLD_HAND,
  OPEN_HAND,
  SHIRT_COLLAR,
  SilasFace,
  headAt,
  man,
  type P,
  type Part,
} from './people'

/**
 * Chapter 12: "The child in the snow", the ninth moment in the guide's
 * timeline, at the instant of its quotation. Every detail is from the text
 * (the held edition, src/data/full-texts/silas-marner.ts):
 *
 * - "When Marner's sensibility returned, he continued the action which had
 *   been arrested, and closed his door"; "Turning towards the hearth, where
 *   the two logs had fallen apart, and sent forth only a red uncertain
 *   glimmer, he seated himself on his fireside chair, and was stooping to push
 *   his logs together, when, to his blurred vision, it seemed as if there were
 *   gold on the floor in front of the hearth"; "The heap of gold seemed to
 *   glow and get larger beneath his agitated gaze. He leaned forward at last,
 *   and stretched forth his hand; but instead of the hard coin with the
 *   familiar resisting outline, his fingers encountered soft warm curls." So
 *   the door is shut, the room is dark but for the fire's red glimmer between
 *   two fallen logs, and Silas leans from his fireside chair with his hand
 *   stretched out to the child's head. The glow the gold seemed to give is cut
 *   as light round her curls; the spot colour stays in the fire, and never
 *   touches the child.
 * - "the warm hearth, where there was a bright fire of logs and sticks, which
 *   had thoroughly warmed the old sack (Silas's greatcoat) spread out on the
 *   bricks to dry"; "the little golden head sank down on the old sack, and the
 *   blue eyes were veiled by their delicate half-transparent lids"; "a round,
 *   fair thing, with soft yellow rings all over its head"; "the old grimy
 *   shawl in which it was wrapped trailing behind it, and the queer little
 *   bonnet dangling at its back". So the child lies asleep on the spread
 *   greatcoat before the hearth, well clear of the fire, wrapped in her
 *   shawl, the bonnet at her back, her head the figure kit's (./people.tsx),
 *   its curls in paper. Blue is left to the words.
 * - "some of his porridge, which had got cool by the dying fire": a small pot
 *   stands on the hearth. The cottage is the one the other panels cut: stone
 *   walls, the brick hearth with its arched opening, the kettle on its
 *   hanger, the mended brown pot propped beside it.
 * - Outside, "the snow had ceased, and the clouds were parting here and
 *   there"; "the light of a quickly veiled star". So the window shows the
 *   white ground, broken cloud and one star.
 *
 * SAFEGUARDING. Molly Farren, dead in the snow, is not on the page: nothing
 * outside the window but snow and sky. The child is asleep and safe, on the
 * coat well in front of the fire.
 *
 * Seeds: 901 (the walls), 902 (the glow round the child), 903 (the floor),
 * 904 (the snow beyond the glass), 905 (the weave of the sack).
 */

const W = 860
const H = 340
/** The foot of the wall. */
const FLOOR = 236
const HEARTH = { x0: 600, x1: 792, ax0: 632, ax1: 760, top: 156 }
const EMBERS: P = [696, 228]
/**
 * The three of them (Silas, his chair, the coat and the child) are cut at
 * their own size and printed 1.3 times larger about the child, so the moment
 * fills the panel. (At their own size the hand and the curls were a small
 * light in a large dark room.)
 */
const NEAR = 'translate(452 300) scale(1.3) translate(-452 -300)'
/** The child's curls, where his fingers touch them: in the figures' own frame, and as printed. */
const CURLS: P = [450, 258]
const CURLS_SEEN: P = [449, 245]
const WIN = { x: 54, y: 54, w: 86, h: 108 }

type Marks = { wall: string; glow: string; floor: string; snow: string; joints: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Night: the room is lit only by the fire's glimmer and, faintly, by the
  // snow-light from the window.
  const light = (x: number, y: number) => {
    const fire = clamp(1 - Math.hypot((x - EMBERS[0]) * 0.8, (y - EMBERS[1]) * 1.1) / 260) * 0.75
    const win = clamp(1 - Math.hypot(x - (WIN.x + WIN.w / 2), (y - 110) * 1.2) / 150) * 0.45
    return Math.max(fire ** 1.2, win, 0.03)
  }
  const wall = gougeField(rng(901), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.6,
    len: [12, 40],
  })
  // "The heap of gold seemed to glow": light cut round the child's head.
  const glow = rays(rng(902), CURLS[0], CURLS[1], { from: 16, to: 92, every: 7, width: 2.6 })
  // The brick floor at night: ink, its joints cut in paper only where the
  // fire and the glow reach.
  const r = rng(903)
  let floor = ''
  const rows = [
    FLOOR,
    FLOOR + 6,
    FLOOR + 13,
    FLOOR + 21,
    FLOOR + 31,
    FLOOR + 43,
    FLOOR + 57,
    FLOOR + 75,
    H + 4,
  ]
  const lit = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - EMBERS[0], (y - FLOOR) * 1.6) / 300),
      clamp(1 - Math.hypot(x - CURLS_SEEN[0], (y - CURLS_SEEN[1]) * 1.4) / 210) * 0.8,
    )
  for (let i = 0; i < rows.length - 1; i++) {
    const y = rows[i]
    const next = rows[i + 1]
    for (let x = -10; x < W + 10; x += 30) {
      const L = lit(x + 15, y)
      if (L > 0.05)
        floor += wedge(
          x,
          y + between(r, -0.3, 0.3),
          x + 30,
          y + between(r, -0.3, 0.3),
          0.3 + L * 2.4,
          0.3 + L * 2.4,
        )
    }
    const step = 26 + i * 9
    for (let x = (i % 2) * (step / 2) - 20; x < W + 20; x += step) {
      const L = lit(x, (y + next) / 2)
      if (L > 0.08) floor += wedge(x, y, x + (x - 430) * 0.04, next, 0.3 + L * 2, 0.3 + L * 2.4)
    }
  }
  // The snow beyond the glass: soft drifts, cut clean.
  const s = rng(904)
  let snow = ''
  for (let k = 0; k < 6; k++) {
    const y = WIN.y + 70 + k * 6 + between(s, -2, 2)
    const x = WIN.x + between(s, -10, 30)
    snow += gouge(x, y, x + between(s, 40, 80), y + between(s, -1, 1), between(s, 0.6, 1.2))
  }
  // The brick joints of the chimney breast, cut in paper.
  let joints = ''
  for (let y = 20; y < FLOOR; y += 26) joints += `M${HEARTH.x0 + 4} ${y}H${HEARTH.x1 - 4}`
  for (let i = 0, y = 20; y < FLOOR - 26; i++, y += 26)
    for (let x = HEARTH.x0 + 22 + (i % 2) * 22; x < HEARTH.x1 - 10; x += 44)
      if (!(y >= HEARTH.top - 30 && x > HEARTH.ax0 - 4 && x < HEARTH.ax1 + 4))
        joints += `M${x} ${y}V${y + 26}`
  cached = { wall, glow, floor, snow, joints }
  return cached
}

// ── SILAS, in his fireside chair, stooping, his hand stretched out ──────────
const SILAS_HEAD = { d: HEAD_SILAS, at: [372, 150] as P, rot: 34, scale: 1.25 }
const REACH: P[] = [
  [352, 184],
  [386, 214],
  [420, 238],
]
const REACH_HAND = { parts: OPEN_HAND, scale: 1.1, rot: 6 }
const SILAS: Part[] = man({
  facing: 1,
  neck: [350, 174],
  hip: [302, 236],
  head: SILAS_HEAD,
  body: { width: 28, tails: 14, front: 2, flare: 3 },
  arm: 8.5,
  leg: 9.5,
  near: {
    arm: REACH,
    leg: [
      [304, 238],
      [350, 244],
      [348, 300],
    ],
    hand: REACH_HAND,
  },
  far: {
    // the far hand on his knee
    arm: [
      [344, 182],
      [352, 214],
      [366, 236],
    ],
    leg: [
      [300, 236],
      [344, 234],
      [356, 292],
    ],
    hand: { parts: HOLD_HAND, scale: 1 },
  },
})
/** His fireside chair: a plain wooden chair, its back behind him. */
const CHAIR =
  'M266 152H276L282 304H274L273 246H264L262 304H254L258 238H316L318 304H310L308 246H276Z'

// ── THE CHILD, asleep on the old sack before the hearth ─────────────────────
/**
 * She "squatted down on the sack", and "the little golden head sank down on
 * the old sack": so she sleeps curled forward as she fell, knees tucked
 * under her, her head resting on the coat with her face in profile towards
 * him, and the curls of her crown are what his reaching fingers meet. A child
 * of about two, her head large for her body. (Cut first lying on her back,
 * face up, her dark face sank into her dark body and she read as a lump.)
 */
const CHILD_HEAD = { d: HEAD_EPPIE_CHILD, at: [452, 272] as P, rot: -16, scale: 1.12 }
/** Her body under the shawl, curled forward: the rounded back, the knees tucked under. */
const CHILD_BODY =
  'M458 282C468 266 486 258 502 258C516 258 526 266 528 278C530 286 530 292 526 300L470 302C460 302 454 296 456 288Z'
/** Her small wet boots, the soles turned out behind her. */
const BOOTS = 'M520 290L534 288C539 290 539 299 534 302L520 302Z'
/** One small hand, open by her face on the coat. */
const CHILD_HAND = 'M432 294C436 290 442 290 445 294C443 298 437 299 432 297Z'
/** The shawl's folds, and the little bonnet dangling at her back. */
const SHAWL_FOLDS = 'M470 286Q490 280 508 286M488 296Q504 292 520 296M500 264Q512 270 516 282'
const BONNET = 'M474 266C476 259 485 257 491 261C494 267 490 272 483 272C478 272 474 270 474 266Z'
/** The old sack, Silas's greatcoat, spread on the bricks: flat, foreshortened. */
const SACK =
  'M396 282C408 272 448 268 492 268C540 268 586 272 606 282C614 290 606 300 588 304C548 310 466 310 424 306C402 302 390 292 396 282Z'
const SACK_FOLDS = 'M420 296Q470 304 540 300M572 280Q590 288 596 298'
/** Its coarse cloth, cut in short rows so the dark child lies clear of it. */
const SACK_WEAVE = (() => {
  const r = rng(905)
  let d = ''
  for (let y = 272; y < 308; y += 3.4)
    for (let x = 392 + between(r, 0, 8); x < 612; x += between(r, 9, 15))
      d += gouge(x, y + between(r, -0.4, 0.4), x + between(r, 4, 8), y + between(r, -0.4, 0.4), 1.3)
  return d
})()

/** The little pot of porridge on the hearth, and the mended pot propped in its old place. */
const PORRIDGE =
  'M738 228C738 222 742 220 750 220C758 220 762 222 762 228L760 234C758 237 754 238 750 238C746 238 742 237 740 234Z'
const POT = {
  body: 'M560 236C552 231 550 219 553 211C555 204 560 200 562 195L562 187H578L578 195C580 200 585 204 587 211C590 219 588 231 580 236Z',
  handle: 'M582 191C592 189 597 198 592 209',
  cracks: 'M564 202L571 207L567 216L575 221L572 231M571 207L582 212',
}

function Hearth() {
  const m = marks()
  const { x0, x1, ax0, ax1, top } = HEARTH
  return (
    <>
      <rect x={x0} y={0} width={x1 - x0} height={FLOOR} fill={INK} />
      <path d={m.joints} stroke={PAPER} strokeWidth={1.1} fill="none" />
      <rect x={x0 - 10} y={130} width={x1 - x0 + 20} height={8} fill={PAPER} />
      <rect x={x0 - 10} y={138} width={x1 - x0 + 20} height={2} fill={INK} />
      <path
        d={`M${ax0} ${FLOOR}V${top + 22}Q${ax0} ${top} ${ax0 + 24} ${top}H${ax1 - 24}Q${ax1} ${top} ${ax1} ${top + 22}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the kettle on its hanger */}
      <path d={`M696 ${top}V170`} stroke={PAPER} strokeWidth={1.4} />
      <path d="M688 170Q696 164 704 170" fill="none" stroke={PAPER} strokeWidth={1.4} />
      <path
        d="M682 175C682 172 686 170 696 170C706 170 710 172 710 175L712 187C712 192 706 194 696 194C686 194 680 192 680 187Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* "the two logs had fallen apart, and sent forth only a red uncertain glimmer" */}
      <path d="M648 234L680 224L682 230L652 238Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d="M744 234L712 224L710 230L740 238Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <g fill={RED}>
        <path
          className="lc-glow"
          d="M684 232C686 226 692 224 696 227C700 224 707 226 708 232C702 235 690 235 684 232Z"
        />
        <circle cx={680} cy={229} r={2.2} />
        <circle cx={713} cy={229} r={2} />
      </g>
      <rect x={x0 - 14} y={FLOOR - 2} width={x1 - x0 + 28} height={6} fill={PAPER} />
    </>
  )
}

/**
 * The window at night. Its frame and the cross of its mullions are cut in
 * paper, as the snow-light catches them, and the broken cloud is cut bold.
 * (Cut first as an ink frame round an ink sky, the whole top of the window
 * sank into the dark wall, and the review of 2 October 2026 found that the
 * only part left showing, the white ground split by the upright mullion, read
 * as an open book on a shelf.)
 */
function Window({ clip }: { clip: string }) {
  const m = marks()
  const midX = WIN.x + WIN.w / 2
  const midY = WIN.y + WIN.h / 2
  return (
    <>
      <rect x={WIN.x - 8} y={WIN.y - 8} width={WIN.w + 16} height={WIN.h + 16} fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={INK} />
        {/* the edges of broken cloud, lit, and one star between */}
        <path
          d={
            gouge(WIN.x - 4, 66, WIN.x + 34, 63, 1.9, -1.6) +
            gouge(WIN.x + 40, 71, WIN.x + 88, 66, 1.8, -1.6) +
            gouge(WIN.x + 4, 81, WIN.x + 38, 79, 1.3, -1) +
            gouge(WIN.x + 50, 84, WIN.x + 80, 82, 1.1, -0.8)
          }
          fill={PAPER}
        />
        <path
          d={`M${WIN.x + 64} 92l1.6 4.4l4.4 1.6l-4.4 1.6l-1.6 4.4l-1.6 -4.4l-4.4 -1.6l4.4 -1.6Z`}
          fill={PAPER}
        />
        {/* the white ground under the snow */}
        <path
          d={`M${WIN.x} 126Q${WIN.x + 30} 116 ${WIN.x + 56} 122Q${WIN.x + 74} 118 ${WIN.x + WIN.w} 124V${WIN.y + WIN.h}H${WIN.x}Z`}
          fill={PAPER}
        />
        <path d={m.snow} fill={INK} />
      </g>
      <g fill={INK}>
        <rect x={midX - 1.8} y={WIN.y} width={3.6} height={WIN.h} />
        <rect x={WIN.x} y={midY - 1.8} width={WIN.w} height={3.6} />
      </g>
      {/* the frame and the mullions, their edges catching the snow-light */}
      <g fill="none" stroke={PAPER}>
        <rect
          x={WIN.x - 1}
          y={WIN.y - 1}
          width={WIN.w + 2}
          height={WIN.h + 2}
          strokeWidth={LINE.carve}
        />
        <rect
          x={WIN.x - 8}
          y={WIN.y - 8}
          width={WIN.w + 16}
          height={WIN.h + 16}
          strokeWidth={LINE.fine}
        />
        <path
          d={`M${midX - 2.6} ${WIN.y}V${midY - 2.6}M${midX + 2.6} ${WIN.y}V${midY - 2.6}M${WIN.x} ${midY - 2.6}H${midX - 2.6}M${midX + 2.6} ${midY - 2.6}H${WIN.x + WIN.w}M${WIN.x} ${midY + 2.6}H${midX - 2.6}M${midX + 2.6} ${midY + 2.6}H${WIN.x + WIN.w}M${midX - 2.6} ${midY + 2.6}V${WIN.y + WIN.h}M${midX + 2.6} ${midY + 2.6}V${WIN.y + WIN.h}`}
          strokeWidth={LINE.fine}
        />
      </g>
      {/* snow lodged on the sill outside, and the sill within */}
      <path
        d={`M${WIN.x} ${WIN.y + WIN.h}Q${WIN.x + 20} ${WIN.y + WIN.h - 6} ${WIN.x + 44} ${WIN.y + WIN.h - 3}Q${WIN.x + 66} ${WIN.y + WIN.h - 7} ${WIN.x + WIN.w} ${WIN.y + WIN.h}Z`}
        fill={PAPER}
      />
      <rect x={WIN.x - 12} y={WIN.y + WIN.h + 8} width={WIN.w + 24} height={6} fill={PAPER} />
    </>
  )
}

function TheChildInTheSnow({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, SILAS_HEAD.at, SILAS_HEAD.rot, SILAS_HEAD.scale)
  const ct = headAt(-1, CHILD_HEAD.at, CHILD_HEAD.rot, CHILD_HEAD.scale)
  const win = `${uid}-win`
  const sack = `${uid}-sack`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
        <clipPath id={sack}>
          <path d={SACK} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [450, 260], push: 1.035 })}>
        {/* the stone walls, dark, lit only by the fire and the snow-light */}
        <path d={m.wall} fill={PAPER} />
        <Window clip={win} />
        <Hearth />
        {/* the mended pot in its old place, and the porridge pot on the hearth */}
        <g transform="rotate(-6 570 236)">
          <path d={POT.handle} fill="none" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
          <path d={POT.handle} fill="none" stroke={INK} strokeWidth={4.2} strokeLinecap="round" />
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
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
        </g>
        <path d={PORRIDGE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />

        {/* the brick floor, dark, its joints lit by the fire */}
        <path d={m.floor} fill={PAPER} />

        <g transform={NEAR}>
          {/* the old sack spread on the bricks, and the glow round the child's head */}
          <path
            d={SACK}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <g clipPath={`url(#${sack})`}>
            <path d={SACK_WEAVE} fill={PAPER} />
          </g>
          <path d={SACK_FOLDS} fill="none" stroke={INK} strokeWidth={2.4} />
          <g className="lc-fade-in" style={timing({ delay: 0.4, dur: 1.6 })}>
            <path d={m.glow} fill={PAPER} />
          </g>

          {/* the child, asleep, wrapped in her shawl, her bonnet at her back */}
          <Figure
            parts={[{ d: BONNET }, { d: CHILD_BODY }, { d: BOOTS }, { d: HEAD_EPPIE_CHILD, t: ct }]}
            halo={2.4}
          >
            <path d={CHILD_BODY} fill={INK} />
            <path d={SHAWL_FOLDS} fill="none" stroke={PAPER} strokeWidth={1.1} />
            <path d={BONNET} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d="M478 262Q484 258 490 262" fill="none" stroke={INK} strokeWidth={0.8} />
            <path d={gouge(523, 293, 532, 292, 1)} fill={PAPER} />
            <EppieHead t={ct} asleep />
            {/* the closed lid cut a little heavier, and the jaw cut clear of her shoulder */}
            <path
              d={gouge(5.8, -1.6, 11.6, -0.6, 1, 0.8) + gouge(-2, 16.6, 10, 13.6, 0.9)}
              transform={ct}
              fill={PAPER}
            />
            <path d={CHILD_HAND} fill={INK} stroke={PAPER} strokeWidth={1.1} />
          </Figure>

          {/* Silas, leaning from his fireside chair, his fingers at her curls */}
          <path
            d={CHAIR}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <Figure parts={SILAS} halo={2}>
            <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
            <SilasFace t={st} look={1} />
          </Figure>
        </g>
      </g>
    </>
  )
}

export const theChildInTheSnow: LinocutArt = { width: W, height: H, Draw: TheChildInTheSnow }

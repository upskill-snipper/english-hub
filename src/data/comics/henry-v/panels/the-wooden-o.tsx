import type { ReactNode } from 'react'

import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'

import { CutFigure, type P, type Piece } from './people'

/**
 * THE WOODEN O: the playhouse the Chorus speaks from, for the panels of the
 * Chorus's speeches: "The Chorus asks for imagination" (the Prologue), "Home
 * and back again" (Act 5, Chorus) and "Small time" (the Epilogue), moments 1,
 * 21 and 24 of the guide's timeline.
 *
 * All three are cut from this one module: the same ring of galleries under
 * its thatch, seen from the yard, the same bare stage, the same people of the
 * yard with the backs of their heads to us, from the same geometry and the
 * same seeds, so that a student sees the play end on the stage where it
 * began. (The first panel used to draw its own copy, and by 9 October 2026
 * the two had drifted apart: its galleries rose far higher at the sides.)
 *
 * What the play gives, and so what is drawn (src/data/full-texts/henry-v.ts,
 * Project Gutenberg #1521): "this cockpit", "this wooden O", "within the
 * girdle of these walls" and "this unworthy scaffold" (the Prologue); "In
 * little room confining mighty men" (the Epilogue). A London playhouse of the
 * play's own time, drawn plainly; nothing is taken from a film or stage
 * production.
 *
 * `HourGlass` is the hour-glass of the Prologue, "Turning the accomplishment
 * of many years Into an hour-glass", which the first panel sets on the
 * boards: here it takes `sand`, how much has run through, so that it can run
 * down from panel to panel.
 */

export const W = 860
export const H = 340

// u runs from -1 (the near side on the left) through 0 (the far side, behind
// the stage) to 1 (the near side on the right). The roof of the galleries
// rises towards both edges and their foot falls below the panel, as a ring
// does seen from inside it.
export const gx = (u: number) => 430 + 470 * u
/** The ridge of the thatch. */
export const roofY = (u: number) => 132 - 50 * u * u
/** The foot of the galleries, behind the stage in the middle. */
const footY = (u: number) => 238 + 150 * u * u
const at = (u: number, f: number) => roofY(u) + (footY(u) - roofY(u)) * f
/** The tiers: the thatch to 0.13, then three storeys of gallery. */
const TIERS = [0.13, 0.42, 0.7, 1]
const STEP = 0.02
const us = (a: number, b: number) => {
  const out: number[] = []
  for (let u = a; u <= b + 1e-9; u += STEP) out.push(u)
  return out
}
const along = (f: number, a = -1, b = 1) =>
  us(a, b)
    .map((u, i) => `${i ? 'L' : 'M'}${n(gx(u))} ${n(at(u, f))}`)
    .join('')

/** The stage: its back edge, its front edge and the foot of its front. */
export const STAGE_BACK = 244
export const STAGE_FRONT = 290
export const STAGE_FACE = 310
const VP: P = [430, 150]
const backX = (xf: number) => VP[0] + ((xf - VP[0]) * (STAGE_BACK - VP[1])) / (STAGE_FRONT - VP[1])
export const FRONT_L = 96
export const FRONT_R = 764

/** The open sky of the O: the paper over the galleries' roof. */
export const SKY = (() => {
  let d = `M0 0H${W}`
  for (const u of us(-1, 1).reverse()) d += `L${n(gx(u))} ${n(roofY(u) + 2)}`
  return d + 'Z'
})()

type Marks = {
  thatch: string
  ridge: string
  rails: string
  posts: string
  balusters: string
  boards: string
  faceBoards: string
  yard: string
  crowd: Piece[][]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The thatch: short upright cuts packed along the roof.
  const r = rng(102)
  let thatch = ''
  for (const u of us(-1, 1)) {
    if (r() < 0.25) continue
    const x = gx(u) + between(r, -4, 4)
    const y0 = at(u, 0.012)
    const y1 = at(u, TIERS[0] * between(r, 0.7, 0.95))
    thatch += wedge(x, y0, x + between(r, -1.5, 1.5), y1, 1.6 + Math.abs(u) * 1.6, 0.5)
  }
  // The ridge is stroked, never filled: filled, the open curve closes on a
  // straight chord across the sky and fills the dip under it with paper,
  // which shows as a band once the sky is printed dark (moment 24's dusk).
  const ridge = along(0.004)

  // The front edge of each storey's floor, and the rail along each gallery.
  let rails = ''
  for (const f of [TIERS[0], TIERS[1], TIERS[2]]) rails += along(f) + along(f + 0.025)
  rails += along(TIERS[1] - 0.12) + along(TIERS[2] - 0.12)

  // The main posts, closer together on the far side, and the balusters of
  // the upper galleries' fronts between the rails.
  let posts = ''
  let balusters = ''
  for (let k = -12; k <= 12; k++) {
    const u = Math.sign(k) * Math.pow(Math.abs(k) / 12, 1.25)
    const x = gx(u)
    if (x < -10 || x > W + 10) continue
    const w = 2.2 + Math.abs(u) * 3.2
    for (let t = 0; t < 3; t++) posts += wedge(x, at(u, TIERS[t]), x, at(u, TIERS[t + 1]), w, w)
  }
  for (const f of [TIERS[1] - 0.12, TIERS[2] - 0.12]) {
    for (let k = -60; k <= 60; k++) {
      const u = Math.sign(k) * Math.pow(Math.abs(k) / 60, 1.25)
      const x = gx(u)
      if (x < -6 || x > W + 6) continue
      balusters += wedge(
        x,
        at(u, f + 0.012),
        x,
        at(u, f + 0.11),
        0.9 + Math.abs(u) * 1.6,
        0.9 + Math.abs(u) * 1.6,
      )
    }
  }

  // The boards of the stage run back to the vanishing point; the front of
  // the stage is upright boards.
  const b = rng(103)
  let boards = ''
  for (let xf = FRONT_L + 22; xf < FRONT_R; xf += 26) {
    const xb = backX(xf)
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(b, 0.35, 0.9))
      boards += wedge(
        xb + (xf - xb) * t0,
        STAGE_BACK + (STAGE_FRONT - STAGE_BACK) * t0,
        xb + (xf - xb) * t1,
        STAGE_BACK + (STAGE_FRONT - STAGE_BACK) * t1,
        0.7 + t0 * 1.6,
        0.7 + t1 * 1.6,
      )
      t0 = t1 + between(b, 0.03, 0.1)
    }
  }
  // the shadow along the back of the stage, under the galleries
  for (let y = STAGE_BACK + 1; y < STAGE_BACK + 12; y += 2.6)
    boards += gouge(backX(FRONT_L), y, backX(FRONT_R), y, 1.8 - (y - STAGE_BACK) * 0.13)
  let faceBoards = ''
  for (let x = FRONT_L + 8; x < FRONT_R; x += 15)
    faceBoards += gouge(x, STAGE_FRONT + 4, x + between(b, -1, 1), STAGE_FACE, 1.1)
  faceBoards += gouge(FRONT_L, STAGE_FRONT + 2.6, FRONT_R, STAGE_FRONT + 2.6, 1.2)

  // The yard: trodden earth under the crowd, a few cuts.
  const yard = gougeField(rng(104), { x0: 0, x1: W, y0: STAGE_FACE + 4, y1: H }, () => 0.12, {
    spacing: 6,
    len: [10, 40],
    gap: [8, 26],
    max: 1.4,
  })

  // The people of the yard, the backs of their heads and shoulders to us,
  // some bareheaded and some in a flat cap.
  const c = rng(104)
  const crowd: Piece[][] = []
  for (let x = 14; x < W; x += between(c, 34, 46)) {
    const y = 330 + between(c, -6, 6)
    const s = between(c, 0.92, 1.12)
    const shoulders = `M${n(x - 24 * s)} ${H + 10}C${n(x - 24 * s)} ${n(y - 6 * s)} ${n(x - 14 * s)} ${n(y - 14 * s)} ${n(x)} ${n(y - 15 * s)}C${n(x + 14 * s)} ${n(y - 14 * s)} ${n(x + 24 * s)} ${n(y - 6 * s)} ${n(x + 24 * s)} ${H + 10}Z`
    const hr = 11 * s
    const hy = y - 22 * s
    const head = `M${n(x - hr)} ${n(hy)}a${n(hr)} ${n(hr * 1.1)} 0 1 0 ${n(2 * hr)} 0a${n(hr)} ${n(hr * 1.1)} 0 1 0 ${n(-2 * hr)} 0Z`
    const pieces: Piece[] = [{ d: shoulders }, { d: head }]
    if (c() < 0.45) {
      const cw = 14 * s
      pieces.push({
        d: `M${n(x - cw)} ${n(hy - 4 * s)}C${n(x - cw)} ${n(hy - 13 * s)} ${n(x + cw)} ${n(hy - 13 * s)} ${n(x + cw)} ${n(hy - 4 * s)}C${n(x + cw * 0.5)} ${n(hy - 6.5 * s)} ${n(x - cw * 0.5)} ${n(hy - 6.5 * s)} ${n(x - cw)} ${n(hy - 4 * s)}Z`,
      })
    }
    crowd.push(pieces)
  }
  cached = { thatch, ridge, rails, posts, balusters, boards, faceBoards, yard, crowd }
  return cached
}

/**
 * The sky's streaks of cloud, heavier towards the top, in ink on the paper
 * sky; `dusk` (0 to 1) thickens them, for the light going at the play's end.
 */
export function skyStreaks(seed: number, dusk = 0): string {
  return gougeField(
    rng(seed),
    { x0: 0, x1: W, y0: 10, y1: 120 },
    (x, y) =>
      clamp(
        0.32 + dusk * 0.4 - y / (260 - dusk * 60) - Math.abs(x - 330) / 2600,
        0.02,
        0.4 + dusk * 0.5,
      ),
    {
      spacing: 9 - dusk * 2,
      len: [30, 110],
      gap: [30 - dusk * 14, 90 - dusk * 40],
      max: 1.6 + dusk * 1.6,
    },
  )
}

/** The galleries and the stage: everything behind the people on the stage. Draw the sky first. */
export function Playhouse() {
  const m = marks()
  return (
    <>
      {/* the galleries: thatch, the storeys' floors and rails, posts, balusters */}
      <path d={m.thatch} fill={PAPER} />
      <path d={m.ridge} fill="none" stroke={PAPER} strokeWidth={1.8} />
      <path d={m.rails} fill="none" stroke={PAPER} strokeWidth={1.7} />
      <path d={m.posts} fill={PAPER} />
      <path d={m.balusters} fill={PAPER} />
      {/* the stage: bare boards, its front of upright boards */}
      <path
        d={`M${n(backX(FRONT_L))} ${STAGE_BACK}H${n(backX(FRONT_R))}L${FRONT_R} ${STAGE_FRONT}H${FRONT_L}Z`}
        fill={PAPER}
      />
      <path d={m.boards} fill={INK} />
      <path
        d={`M${FRONT_L - 4} ${STAGE_FRONT}H${FRONT_R + 4}V${STAGE_FACE}H${FRONT_L - 4}Z`}
        fill={INK}
      />
      <path d={m.faceBoards} fill={PAPER} />
      <path d={`M${FRONT_L - 4} ${STAGE_FRONT}H${FRONT_R + 4}`} stroke={PAPER} strokeWidth={2.2} />
    </>
  )
}

/** The yard and its people, in front of the stage: draw it last. */
export function Yard() {
  const m = marks()
  return (
    <>
      <path d={m.yard} fill={PAPER} />
      {m.crowd.map((pieces, i) => (
        <CutFigure key={i} parts={pieces} halo={1.6} />
      ))}
    </>
  )
}

/**
 * The hour-glass on the boards, its foot at (x, y): `sand` is how much has
 * run through, from 0 (all in the upper bulb, as at the Prologue) to 1 (all
 * run down).
 */
export function HourGlass({
  x,
  y,
  sand = 0.5,
  children,
}: {
  x: number
  y: number
  sand?: number
  children?: ReactNode
}) {
  const g = (dx: number, dy: number) => `${n(x + dx)} ${n(y + dy)}`
  const glass = `M${g(-10, -40)}C${g(-10, -28)} ${g(-2, -24)} ${g(-1.6, -21)}C${g(-2, -18)} ${g(-10, -14)} ${g(-10, -3)}L${g(10, -3)}C${g(10, -14)} ${g(2, -18)} ${g(1.6, -21)}C${g(2, -24)} ${g(10, -28)} ${g(10, -40)}Z`
  // The sand left above sinks to the neck; the sand below piles up from the foot.
  const top = 1 - sand
  const tY = -22 - 12 * top
  const tW = 2 + 5.4 * top
  const sandTop =
    top > 0.02
      ? `M${g(-tW, tY)}C${g(-tW * 0.8, tY + 4)} ${g(-2, -25)} ${g(0, -22)}C${g(2, -25)} ${g(tW * 0.8, tY + 4)} ${g(tW, tY)}Z`
      : ''
  const bY = -4 - 10 * sand
  const sandLow =
    sand > 0.02
      ? `M${g(-9.4, -4)}C${g(-8, -4 - 6 * sand)} ${g(-3, bY + 1)} ${g(0, bY)}C${g(3, bY + 1)} ${g(8, -4 - 6 * sand)} ${g(9.4, -4)}Z`
      : ''
  return (
    <g>
      {/* its shadow on the boards */}
      <path d={gouge(x - 20, y + 1.6, x + 26, y + 2.4, 1.8)} fill={INK} />
      <path d={glass} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path d={sandTop + sandLow} fill={INK} />
      {sand < 0.98 && <path d={`M${g(0, -22)}L${g(0, bY)}`} stroke={INK} strokeWidth={0.9} />}
      {/* the frame: a plate above and below, and two posts */}
      <path
        d={`M${n(x - 14)} ${n(y - 46)}H${n(x + 14)}V${n(y - 40)}H${n(x - 14)}ZM${n(x - 14)} ${n(y - 3)}H${n(x + 14)}V${n(y + 2)}H${n(x - 14)}Z`}
        fill={INK}
      />
      <path
        d={`M${g(-12, -40)}V${n(y - 3)}M${g(12, -40)}V${n(y - 3)}`}
        stroke={INK}
        strokeWidth={2.4}
      />
      {children}
    </g>
  )
}
